import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "A boutique web & mobile studio where design, engineering and QA live under one roof.",
  openGraph: {
    title: "About — Hakeem's Projects",
    description: "A boutique web & mobile studio where design, engineering and QA live under one roof.",
  },
};

const values = [
  { num: "// 01", title: "Quality is the feature", desc: "If it isn't tested, it isn't done. We build verification into the work, not onto the end of it." },
  { num: "// 02", title: "Honest scope", desc: "We tell you the real timeline and the real trade-offs — even when it's not what you hoped to hear." },
  { num: "// 03", title: "Craft over volume", desc: "We take fewer projects and go deeper. One thing done properly beats five done halfway." },
  { num: "// 04", title: "You own everything", desc: "Clean code, clear docs, full handover. No lock-in, no black boxes — it's your product." },
  { num: "// 05", title: "Direct & senior", desc: "You work with the people building it. No layers, no telephone game, no surprises." },
  { num: "// 06", title: "Built to last", desc: "We optimise for the product you'll have in two years, not just the demo next week." },
];

const how = [
  { n: "01", title: "Kickoff & discovery", desc: "We dig into your goals, users and constraints before a single pixel is drawn." },
  { n: "02", title: "Design & prototype", desc: "You see and click real prototypes early — feedback before code is cheap." },
  { n: "03", title: "Build in slices", desc: "Small, reviewable increments shipped behind tests. You watch it come together." },
  { n: "04", title: "QA & harden", desc: "Automated suites, audits and manual passes until quality clears our bar." },
  { n: "05", title: "Launch with confidence", desc: "Monitored deploys, rollback ready, zero-drama releases." },
  { n: "06", title: "Support & iterate", desc: "We stick around to keep it healthy and help it grow." },
];

const bigstats = [
  { value: "40+", label: "products shipped" },
  { value: "9 yrs", label: "in the craft" },
  { value: "96%", label: "avg test coverage" },
  { value: "100%", label: "senior team" },
];

export default function AboutPage() {
  return (
    <>
      <section className="phead gridbg">
        <div className="wrap">
          <p className="crumb">
            ~/ <b>about</b>
          </p>
          <p className="kicker">
            <i />who we are
          </p>
          <h1 className="h-xl">A small studio with a high bar for what ships.</h1>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="story">
            <div className="reveal">
              <p>
                <b>Hakeem&apos;s Projects started with a simple frustration:</b> too much software gets shipped before
                it&apos;s actually ready. Design gets rushed, edge cases get ignored, and users find the bugs the team
                should have.
              </p>
              <p>
                So we built the studio around the opposite idea — that design, engineering and quality assurance belong
                together, in the same team, from day one. We design products that make sense, build them on a solid
                technical foundation, and test them until we&apos;re confident, not just hopeful.
              </p>
              <p>
                We&apos;re deliberately small. That means the people you meet are the people who do the work — no
                handoffs to a junior bench, no account managers between you and the build. <b>Startups and growing
                teams</b> hire us because they want a partner who treats their product like our own.
              </p>
              <p>
                Whether it&apos;s a brand-new app, a web platform that needs to scale, or a testing practice that needs
                fixing — we bring the same standard: <b>ship it right, or don&apos;t ship it yet.</b>
              </p>
            </div>
            <div className="term reveal">
              <div className="term-bar">
                <span className="d" style={{ background: "#FF5F57" }} />
                <span className="d" style={{ background: "#FEBC2E" }} />
                <span className="d" style={{ background: "#28C840" }} />
                <span className="ttl">whoami</span>
              </div>
              <div className="term-body">
                <div><span className="pl">$</span> <span className="wt">cat studio.json</span></div>
                <div><span className="bl">{"{"}</span></div>
                <div>&nbsp;&nbsp;<span className="wt">&quot;focus&quot;</span>: <span className="ok">&quot;web · mobile · QA&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="wt">&quot;size&quot;</span>: <span className="ok">&quot;boutique&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="wt">&quot;clients&quot;</span>: <span className="ok">&quot;startups + SMBs&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="wt">&quot;experience&quot;</span>: <span className="ok">&quot;9 years&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="wt">&quot;handoffs&quot;</span>: <span className="ok">&quot;0&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="wt">&quot;motto&quot;</span>: <span className="ok">&quot;build &amp; verify&quot;</span></div>
                <div><span className="bl">{"}"}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section tight gridbg">
        <div className="wrap">
          <p className="kicker reveal">
            <i />what we stand for
          </p>
          <h2 className="h-lg reveal">Principles we don&apos;t bend on.</h2>
          <div className="values">
            {values.map((v) => (
              <article className="card reveal" key={v.num}>
                <div className="cnum">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section tight">
        <div className="wrap">
          <p className="kicker reveal">
            <i />the way we run a project
          </p>
          <h2 className="h-lg reveal">Calm, predictable, and visible the whole way.</h2>
          <div className="how">
            {how.map((h) => (
              <div className="row reveal" key={h.n}>
                <div className="n">{h.n}</div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section tight">
        <div className="wrap">
          <div className="bigstats reveal">
            {bigstats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="cta-band center reveal">
            <h2 className="h-lg">Like how we think? Let&apos;s talk.</h2>
            <p className="lead" style={{ margin: "14px auto 0" }}>
              No hard sell — just a straight conversation about what you&apos;re building.
            </p>
            <div className="hero-row">
              <Link className="btn btn-primary lg" href="/contact">
                $ book_call →
              </Link>
              <Link className="btn btn-ghost lg" href="/portfolio">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
