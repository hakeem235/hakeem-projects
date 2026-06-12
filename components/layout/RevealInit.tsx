"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mirrors the prototype's site.js scroll-reveal: observes every `.reveal`
 * element, staggers its transition-delay, and adds `.in` once it enters view.
 * Re-binds on client-side route changes so freshly mounted pages animate too.
 */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

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

    // Defer one frame so the new route's DOM is mounted before we query it.
    const id = window.requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal:not(.in)")
      );
      els.forEach((el, i) => {
        el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
        io.observe(el);
      });
    });

    return () => {
      window.cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
