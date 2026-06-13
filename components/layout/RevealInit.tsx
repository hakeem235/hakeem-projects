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
 *  - if IntersectionObserver is unavailable, everything is revealed at once;
 *  - we re-bind on `load` (fonts/images settle) and keep a safety-net timeout.
 */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealAll = () =>
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in)")
        .forEach((el) => el.classList.add("in"));

    // No IntersectionObserver support → just show everything.
    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
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

    const bind = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal:not(.in)")
      );
      els.forEach((el, i) => {
        el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
        const rect = el.getBoundingClientRect();
        // Already in (or just below) view: reveal now instead of trusting the
        // observer's first async callback, which can misfire before layout
        // settles on a cold load. Otherwise hand it to the observer for scroll.
        if (rect.top < vh * 0.95 && rect.bottom > 0) {
          el.classList.add("in");
        } else {
          io.observe(el);
        }
      });
    };

    // Defer two frames so the route's DOM is mounted and layout has settled.
    let raf2 = 0;
    const raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(bind);
    });

    // Re-run once fonts/images finish loading and shift the layout.
    const onLoad = () => bind();
    window.addEventListener("load", onLoad);

    // Safety net: never leave in-view content hidden if everything else missed.
    const safety = window.setTimeout(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh && rect.bottom > 0) el.classList.add("in");
        });
    }, 1200);

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.clearTimeout(safety);
      window.removeEventListener("load", onLoad);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
