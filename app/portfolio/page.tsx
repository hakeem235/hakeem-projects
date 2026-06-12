import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected web and mobile projects — design, development and QA, end to end.",
  openGraph: {
    title: "Work — Hakeem's Projects",
    description: "Selected web and mobile projects — design, development and QA, end to end.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="phead pb-sm gridbg">
        <div className="wrap">
          <p className="crumb">
            ~/ <b>work</b>
          </p>
          <p className="kicker">
            <i />selected projects
          </p>
          <h1 className="h-xl">Things we designed, built, and signed off on.</h1>
          <p className="lead">
            A few recent engagements across web and mobile — design, development and the QA that makes them hold up.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <PortfolioGrid />

          <div className="casebar reveal">
            <div>
              <p className="qmark">{"// what clients say"}</p>
              <blockquote>
                &ldquo;They didn&apos;t just build our app — they stress-tested it until it couldn&apos;t break. We
                launched without a single fire to put out.&rdquo;
              </blockquote>
              <cite>— Product lead, Tempo</cite>
            </div>
            <Link className="btn btn-primary lg" href="/contact">
              Start yours →
            </Link>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="cta-band center green reveal">
            <h2 className="h-lg">Your project could be next on this page.</h2>
            <p className="lead" style={{ margin: "14px auto 0" }}>
              Tell us the goal. We&apos;ll design it, build it, and prove it works.
            </p>
            <div className="hero-row">
              <Link className="btn btn-primary lg" href="/contact">
                $ book_call →
              </Link>
              <Link className="btn btn-ghost lg" href="/services">
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
