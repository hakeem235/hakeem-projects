import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <span className="text-white font-bold text-lg">Hakeem Projects</span>
            <p className="text-sm mt-1 max-w-xs">Building software that works.</p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link text-sm text-gray-400">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 items-start">
            <a href="#" aria-label="GitHub" className="nav-link text-sm text-gray-400">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="nav-link text-sm text-gray-400">LinkedIn</a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-xs text-center">
          © {new Date().getFullYear()} Hakeem Projects. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
