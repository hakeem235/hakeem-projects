"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "services" },
  { href: "/portfolio", label: "work" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-in">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="bmark">~</span>hakeem<span className="dim">.dev</span>
        </Link>

        <nav className={`nav-links${open ? " open" : ""}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <Link className="btn btn-ghost" href="/portfolio">
            View work
          </Link>
          <Link className="btn btn-primary" href="/contact">
            $ book_call
          </Link>
          <button
            className="nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
