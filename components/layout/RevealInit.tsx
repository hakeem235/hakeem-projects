"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-reveal: stagger each `.reveal` element's transition-delay and add
 * `.in` once it enters view. Re-binds on client-side route changes so freshly
 * mounted pages animate too.
 *
 * Resilient by design — content must never get stuck invisible:
 *  - elements already in view are revealed synchronously (no waiting on the
 *    async IntersectionObserver callback, which can lose a race on a cold load);
 *  - genuinely below-the-fold elements use the observer for the scroll effect;
 *  - a MutationObserver re-processes any `.reveal` added later (e.g. portfolio
 *    filter re-renders, or pages mounted after a route transition);
 *  - we re-bind on `load` (fonts/images settle) and keep a safety-net timeout;
 *  - if IntersectionObserver is unavailable, everything is revealed at once.
 */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // No IntersectionObserver support → reveal everything, now and as it mounts.
    if (!("IntersectionObserver" in window)) {
      const revealAll = () =>
        document
          .querySelectorAll<HTMLElement>(".reveal:not(.in)")
          .forEach((el) => el.classList.add("in"));
      revealAll();
      const mo = new MutationObserver(revealAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    let stagger = 0;
    const process = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in)")
        .forEach((el) => {
          if (!el.style.transitionDelay) {
            el.style.transitionDelay = Math.min(stagger++ % 6, 5) * 60 + "ms";
          }
          const rect = el.getBoundingClientRect();
          // Already in (or just below) view: reveal now instead of trusting the
          // observer's first async callback, which can misfire before layout
          // settles on a cold load. Otherwise hand it to the observer.
          if (rect.top < vh * 0.95 && rect.bottom > 0) {
            el.classList.add("in");
          } else {
            io.observe(el);
          }
        });
    };

    // Initial pass, deferred two frames so the DOM is mounted and laid out.
    let raf2 = 0;
    const raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(process);
    });

    // Re-run once fonts/images finish loading and shift the layout.
    const onLoad = () => process();
    window.addEventListener("load", onLoad);

    // Re-run whenever new nodes mount (filter re-renders, route transitions,
    // late hydration). Debounced to one pass per frame. Watches childList only,
    // so the `.in`/style changes we make here never re-trigger it.
    let moScheduled = 0;
    const mo = new MutationObserver(() => {
      if (moScheduled) return;
      moScheduled = window.requestAnimationFrame(() => {
        moScheduled = 0;
        process();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: never leave content stuck hidden if everything else missed.
    const safety = window.setTimeout(process, 1200);

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      if (moScheduled) window.cancelAnimationFrame(moScheduled);
      window.clearTimeout(safety);
      window.removeEventListener("load", onLoad);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
