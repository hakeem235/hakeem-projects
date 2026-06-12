import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" href="/">
              <span className="bmark">~</span>hakeem<span className="dim">.dev</span>
            </Link>
            <p
              style={{
                color: "var(--dim)",
                fontSize: "14.5px",
                margin: "18px 0 0",
                maxWidth: "34ch",
              }}
            >
              Web &amp; mobile design, development and QA consultation for startups and growing teams.
            </p>
          </div>

          <div>
            <h5>Services</h5>
            <Link href="/services">Design &amp; UX</Link>
            <Link href="/services">Web development</Link>
            <Link href="/services">Mobile apps</Link>
            <Link href="/services#qa">QA consultation</Link>
          </div>

          <div>
            <h5>Studio</h5>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h5>Get in touch</h5>
            <a href="mailto:ahmed.ai.advisor@gmail.com">ahmed.ai.advisor@gmail.com</a>
            <Link href="/contact">Book a call</Link>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Hakeem&apos;s Projects — all rights reserved.</span>
          <span>designed &amp; built in-house · tested twice</span>
        </div>
      </div>
    </footer>
  );
}
