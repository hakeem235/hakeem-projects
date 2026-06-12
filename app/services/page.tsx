import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design, web & mobile development, QA consultation and ongoing support — the full product lifecycle from one studio.",
  openGraph: {
    title: "Services — Hakeem's Projects",
    description:
      "Design, web & mobile development, QA consultation and ongoing support — the full product lifecycle from one studio.",
  },
};

const services = [
  {
    num: "01",
    icon: "◑",
    title: "UI/UX & product design",
    body: "We turn fuzzy ideas into clear, usable products. Through research, rapid prototyping and tight visual craft, we design interfaces people understand on first contact — and hand off a design system your team can keep building on.",
    chips: ["User research", "Information architecture", "Wireframes & flows", "Hi-fi UI", "Prototyping", "Design systems"],
  },
  {
    num: "02",
    icon: "</>",
    title: "Web development",
    body: "Production-grade web apps and marketing sites built on a modern, typed stack. Fast, accessible and maintainable — with a backend that won't buckle when you grow. Every build ships with tests wired into CI.",
    chips: ["React / Next.js", "TypeScript", "Node & Go APIs", "Postgres", "Headless CMS", "Core Web Vitals"],
  },
  {
    num: "03",
    icon: "▣",
    title: "Mobile design & development",
    body: "Native-grade iOS and Android apps from a single React Native codebase. We design for the platform, build for real-device performance, and test across screens, gestures and offline states.",
    chips: ["React Native", "iOS & Android", "Native modules", "Offline-first", "Push & deep links", "App store launch"],
  },
  {
    num: "04",
    icon: "✓",
    title: "QA consultation & automation",
    id: "qa",
    iconAccent: true,
    body: "Our specialty. Whether you need us to own quality on a build or level up your own team's testing, we design the strategy, write the automation, and set up the gates that stop bugs reaching production.",
    chips: ["Test strategy", "Playwright / Cypress E2E", "Unit & integration", "CI quality gates", "Accessibility audits", "Load & security testing"],
    chipsOn: true,
  },
  {
    num: "05",
    icon: "⟳",
    title: "Maintenance & support",
    body: 'Software is never "done." We keep your product healthy with monitoring, dependency upkeep, performance tuning and a clear SLA — so small issues never become big ones.',
    chips: ["Monitoring & alerts", "Dependency updates", "Performance tuning", "Bug triage", "Feature iterations", "SLA support"],
  },
];

const stack = [
  { cat: "Frontend", items: ["React / Next.js", "React Native", "TypeScript", "Tailwind"] },
  { cat: "Backend", items: ["Node.js", "Go", "PostgreSQL", "Redis"] },
  { cat: "Quality", items: ["Playwright", "Cypress", "Vitest / Jest", "axe / Lighthouse"] },
  { cat: "Ops", items: ["GitHub Actions", "Docker", "Vercel / AWS", "Sentry"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="phead gridbg">
        <div className="wrap">
          <p className="crumb">
            ~/ <b>services</b>
          </p>
          <p className="kicker">
            <i />what we do
          </p>
          <h1 className="h-xl">Everything your product needs — design, build, test, repeat.</h1>
          <p className="lead">
            Pick a single discipline or hand us the whole thing. However we engage, quality assurance runs through
            all of it.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          {services.map((s) => (
            <article className="svc reveal" id={s.id} key={s.num}>
              <div className="lhs">
                <div className="snum">{s.num}</div>
                <div
                  className="sic"
                  style={
                    s.iconAccent
                      ? { background: "rgba(46,230,166,.1)", borderColor: "rgba(46,230,166,.34)", color: "var(--green)" }
                      : undefined
                  }
                >
                  {s.icon}
                </div>
              </div>
              <div className="sbody">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="deli">
                  {s.chips.map((c) => (
                    <span className={s.chipsOn ? "chip on" : "chip"} key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section tight gridbg">
        <div className="wrap">
          <p className="kicker reveal">
            <i />our toolkit
          </p>
          <h2 className="h-lg reveal">Battle-tested tech, chosen for your project — not our habits.</h2>
          <div className="stack">
            {stack.map((g) => (
              <div className="tcat reveal" key={g.cat}>
                <h5>{g.cat}</h5>
                {g.items.map((it) => (
                  <div key={it}>{it}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="section tight">
        <div className="wrap">
          <p className="kicker reveal">
            <i />how to work with us
          </p>
          <h2 className="h-lg reveal">Engagement models that fit the work.</h2>
          <div className="eng">
            <article className="card reveal">
              <div className="cnum">{"// fixed scope"}</div>
              <h3>Project</h3>
              <p className="price">best for a defined build</p>
              <ul>
                <li>Clear scope &amp; fixed price</li>
                <li>Design → build → QA → launch</li>
                <li>Milestone-based delivery</li>
                <li>30 days post-launch support</li>
              </ul>
            </article>
            <article className="card reveal" style={{ borderColor: "rgba(46,230,166,.3)" }}>
              <div className="cnum" style={{ color: "var(--green)" }}>
                {"// most popular"}
              </div>
              <h3>Embedded team</h3>
              <p className="price">best for ongoing product work</p>
              <ul>
                <li>Dedicated designers &amp; engineers</li>
                <li>Works inside your sprints</li>
                <li>QA built into every release</li>
                <li>Monthly rolling engagement</li>
              </ul>
              <Link
                className="btn btn-primary"
                style={{ marginTop: "20px", width: "100%", justifyContent: "center" }}
                href="/contact"
              >
                Talk to us →
              </Link>
            </article>
            <article className="card reveal">
              <div className="cnum">{"// advisory"}</div>
              <h3>QA consult</h3>
              <p className="price">best for in-house teams</p>
              <ul>
                <li>Audit your current testing</li>
                <li>Test strategy &amp; tooling setup</li>
                <li>Automation pipeline build-out</li>
                <li>Team training &amp; handover</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="cta-band center reveal">
            <h2 className="h-lg">Not sure which you need?</h2>
            <p className="lead" style={{ margin: "14px auto 0" }}>
              Send over what you&apos;re building. We&apos;ll tell you the honest version of what it takes.
            </p>
            <div className="hero-row">
              <Link className="btn btn-primary lg" href="/contact">
                $ start_project →
              </Link>
              <Link className="btn btn-ghost lg" href="/portfolio">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
