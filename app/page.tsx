import Link from "next/link";

const marqueeItems = [
  "React / Next.js",
  "React Native",
  "TypeScript",
  "Node & Go",
  "Playwright E2E",
  "Cypress",
  "CI/CD pipelines",
  "Figma → code",
  "Load & security audits",
  "Postgres",
  "Design systems",
];

const services = [
  { icon: "◑", title: "UI/UX & product design", desc: "Research, user flows, wireframes and pixel-tight interfaces — plus design systems your team can build on." },
  { icon: "</>", title: "Web development", desc: "Fast, accessible web apps and sites built on React, Next.js and a solid typed backend that scales with you." },
  { icon: "▣", title: "Mobile design & dev", desc: "Native-grade iOS and Android apps with React Native — one codebase, real device performance." },
  { icon: "✓", title: "QA consultation", desc: "Test strategy, automation suites and CI quality gates. We find the bugs before your users ever do." },
  { icon: "⟳", title: "Maintenance & support", desc: "Monitoring, updates, performance tuning and a steady hand on the wheel long after launch." },
];

const process = [
  { pn: "01 — discover", title: "Design", desc: "We map the problem, prototype fast, and lock a UI your users get instantly." },
  { pn: "02 — build", title: "Develop", desc: "Clean, typed, well-architected code for web and mobile — shipped in reviewable slices." },
  { pn: "03 — verify", title: "QA", desc: "Automated and manual testing, accessibility and performance audits on every release." },
  { pn: "04 — launch", title: "Ship & care", desc: "Confident deploys, monitoring, and ongoing support so it keeps working." },
];

const heroStats = [
  { value: "40+", label: "products shipped" },
  { value: "9 yrs", label: "building software" },
  { value: "98%", label: "avg test coverage" },
  { value: "0", label: "regressions at launch" },
];

const qaPoints = [
  { b: "Automated test suites", p: "Playwright & Cypress E2E coverage wired straight into your CI." },
  { b: "Quality gates on every PR", p: "Nothing reaches production without passing the checks." },
  { b: "Accessibility & performance audits", p: "WCAG, Core Web Vitals and load testing baked in." },
  { b: "QA strategy for your own team", p: "Consultation to level up how your engineers test." },
];

const qaStats = [
  { value: "40+", label: "products shipped" },
  { value: "212", label: "tests on a typical release" },
  { value: "1.2s", label: "median load time we target" },
  { value: "9 yrs", label: "designing & engineering" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero gridbg">
        <div className="wrap">
          <p className="hero-tag">
            {"// design + engineering + QA, under one roof"}
            <span className="blink" />
          </p>
          <h1 className="h-xl">
            We build <span className="grad-text">&amp; break</span> software — so it ships bulletproof.
          </h1>
          <p className="lead">
            Hakeem&apos;s Projects is a boutique studio for web and mobile. We design the product, engineer it,
            then test it to the edge through dedicated QA — one partner from first wireframe to release.
          </p>
          <div className="hero-row">
            <Link className="btn btn-primary lg" href="/contact">
              $ start_project →
            </Link>
            <Link className="btn btn-ghost lg" href="/portfolio">
              view_work/
            </Link>
          </div>
          <div className="hero-stack">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="term term-float reveal">
            <div className="term-bar">
              <span className="d" style={{ background: "#FF5F57" }} />
              <span className="d" style={{ background: "#FEBC2E" }} />
              <span className="d" style={{ background: "#28C840" }} />
              <span className="ttl">~/hakeem — ship.sh</span>
            </div>
            <div className="term-body">
              <div><span className="pl">$</span> <span className="wt">npm run ship</span></div>
              <div><span className="cm"># design → build → test → release</span></div>
              <div><span className="bl">→</span> <span className="wt">ui/ux ........</span> <span className="ok">done</span></div>
              <div><span className="bl">→</span> <span className="wt">build web+app</span> <span className="ok">done</span></div>
              <div><span className="bl">→</span> <span className="wt">e2e suite ...</span> <span className="ok">212 passed</span></div>
              <div><span className="bl">→</span> <span className="wt">a11y + perf .</span> <span className="ok">passed</span></div>
              <div><span className="ok">✓ deployed to production · 0 regressions</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>
              <i />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ============ SERVICES ============ */}
      <section className="section" id="services">
        <div className="wrap">
          <p className="kicker reveal">
            <i />what we do
          </p>
          <h2 className="h-lg reveal">One studio, the whole product lifecycle.</h2>
          <p className="lead reveal" style={{ marginTop: "16px" }}>
            From the first sketch to the last passing test — design, development and quality assurance handled by
            one tight-knit team.
          </p>

          <div className="svc-grid">
            {services.map((s) => (
              <article className="card reveal" key={s.title}>
                <div className="cic">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
            <article
              className="card reveal"
              style={{
                background: "linear-gradient(180deg,rgba(46,230,166,.06),var(--bg-2))",
                borderColor: "rgba(46,230,166,.26)",
              }}
            >
              <div
                className="cic"
                style={{
                  background: "rgba(46,230,166,.12)",
                  borderColor: "rgba(46,230,166,.4)",
                  color: "var(--green)",
                }}
              >
                →
              </div>
              <h3>Need the full build?</h3>
              <p>We take projects end to end — design, web, mobile and QA as one accountable engagement.</p>
              <Link className="btn btn-ghost" style={{ marginTop: "18px" }} href="/services">
                All services →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section tight gridbg">
        <div className="wrap">
          <p className="kicker reveal">
            <i />how we work
          </p>
          <h2 className="h-lg reveal">A clear path from idea to release.</h2>
          <div className="proc">
            {process.map((step) => (
              <div className="step reveal" key={step.pn}>
                <div className="bar" />
                <div className="pn">{step.pn}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QA FEATURE ============ */}
      <section className="section">
        <div className="wrap">
          <div className="feat">
            <div>
              <p className="kicker reveal">
                <i />quality, not an afterthought
              </p>
              <h2 className="h-lg reveal">
                Most studios build. We build <span className="grad-text">and verify.</span>
              </h2>
              <p className="lead reveal" style={{ marginTop: "16px" }}>
                QA isn&apos;t a box we tick at the end — it&apos;s woven through every project. The result is software
                that holds up under real users, real load and real edge cases.
              </p>
              <div className="feat-list">
                {qaPoints.map((q) => (
                  <div className="feat-item reveal" key={q.b}>
                    <div className="fx">✓</div>
                    <div>
                      <b>{q.b}</b>
                      <p>{q.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="term reveal">
              <div className="term-bar">
                <span className="d" style={{ background: "#FF5F57" }} />
                <span className="d" style={{ background: "#FEBC2E" }} />
                <span className="d" style={{ background: "#28C840" }} />
                <span className="ttl">ci · test-suite.log</span>
              </div>
              <div className="term-body">
                <div><span className="cm"># running test suite</span></div>
                <div><span className="ok">✓</span> <span className="wt">auth flow — login / logout / reset</span></div>
                <div><span className="ok">✓</span> <span className="wt">checkout — happy path + 6 edge cases</span></div>
                <div><span className="ok">✓</span> <span className="wt">mobile — gestures &amp; offline mode</span></div>
                <div><span className="ok">✓</span> <span className="wt">a11y — 0 violations (axe)</span></div>
                <div><span className="ok">✓</span> <span className="wt">perf — LCP 1.2s · CLS 0.01</span></div>
                <div style={{ marginTop: "8px" }}>
                  <span className="bl">→</span> <span className="ok">212 passed</span>
                  <span className="cm"> · 0 failed · 41s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section tight">
        <div className="wrap">
          <div className="qa-stats">
            {qaStats.map((s) => (
              <div className="stat reveal" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section tight">
        <div className="wrap">
          <div className="cta-band reveal">
            <p className="hr-code" style={{ marginBottom: "20px" }}>
              {"// let's build something solid"}
            </p>
            <h2 className="h-lg">Got a product to design, build, or stress-test?</h2>
            <p className="lead" style={{ marginTop: "14px" }}>
              Tell us what you&apos;re working on. We&apos;ll come back with a clear, honest plan — and a fixed scope
              you can trust.
            </p>
            <div className="hero-row">
              <Link className="btn btn-primary lg" href="/contact">
                $ book_call →
              </Link>
              <Link className="btn btn-ghost lg" href="/services">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
