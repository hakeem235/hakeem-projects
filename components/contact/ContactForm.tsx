"use client";

import { useState } from "react";

const serviceOptions = [
  "Web design",
  "Web development",
  "Mobile design",
  "Mobile development",
  "UI/UX",
  "QA consultation",
  "Maintenance",
];

const budgetOptions = ["Under $10k", "$10k – $30k", "$30k – $75k", "$75k+", "Not sure yet"];

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [picked, setPicked] = useState<string[]>([]);
  const [errored, setErrored] = useState<Record<string, boolean>>({});
  const [pillError, setPillError] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const demoMode = !formspreeId || formspreeId === "your_formspree_id_here";

  function update(name: keyof typeof fields, value: string) {
    setFields((f) => ({ ...f, [name]: value }));
    setErrored((e) => ({ ...e, [name]: false }));
  }

  function togglePill(value: string) {
    setPillError(false);
    setPicked((p) => (p.includes(value) ? p.filter((v) => v !== value) : [...p, value]));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = {
      name: !fields.name.trim(),
      email: !fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email),
      message: !fields.message.trim(),
    };
    const noPick = picked.length === 0;
    setErrored(nextErrors);
    setPillError(noPick);
    if (nextErrors.name || nextErrors.email || nextErrors.message || noPick) return;

    const payload = { ...fields, services: picked.join(", ") };

    if (demoMode) {
      // eslint-disable-next-line no-console
      console.log("[demo mode] contact submission", payload);
      setSent(true);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setSent(true);
    } catch {
      /* swallow — demo / offline */
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="form-card reveal">
      <div className="form-bar">
        <span className="d" style={{ background: "#FF5F57" }} />
        <span className="d" style={{ background: "#FEBC2E" }} />
        <span className="d" style={{ background: "#28C840" }} />
        <span className="ttl">new-project.sh</span>
      </div>

      {sent ? (
        <div className="sent">
          <div className="tick">✓</div>
          <h3>Message sent.</h3>
          <p>
            Thanks — we&apos;ve got it. Expect a reply from{" "}
            <b style={{ color: "var(--text)" }}>ahmed.ai.advisor@gmail.com</b> within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="two">
            <div className="fld">
              <label>
                name <span className="req">*</span>
              </label>
              <input
                name="name"
                placeholder="Jane Doe"
                value={fields.name}
                onChange={(e) => update("name", e.target.value)}
                style={errored.name ? { borderColor: "var(--red)" } : undefined}
              />
            </div>
            <div className="fld">
              <label>
                email <span className="req">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="jane@company.com"
                value={fields.email}
                onChange={(e) => update("email", e.target.value)}
                style={errored.email ? { borderColor: "var(--red)" } : undefined}
              />
            </div>
          </div>

          <div className="two">
            <div className="fld">
              <label>company</label>
              <input
                name="company"
                placeholder="Acme Inc."
                value={fields.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>
            <div className="fld">
              <label>budget range</label>
              <select name="budget" value={fields.budget} onChange={(e) => update("budget", e.target.value)}>
                <option value="">Select…</option>
                {budgetOptions.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="fld">
            <label>
              what do you need? <span className="req">*</span>
            </label>
            <div
              className="pills"
              style={
                pillError
                  ? { outline: "1px solid var(--red)", outlineOffset: "6px", borderRadius: "10px" }
                  : undefined
              }
            >
              {serviceOptions.map((s) => (
                <span
                  key={s}
                  className={picked.includes(s) ? "pill on" : "pill"}
                  role="button"
                  tabIndex={0}
                  onClick={() => togglePill(s)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      togglePill(s);
                    }
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="fld">
            <label>
              project details <span className="req">*</span>
            </label>
            <textarea
              name="message"
              placeholder="A few lines on what you're building, your timeline, and where you're stuck…"
              value={fields.message}
              onChange={(e) => update("message", e.target.value)}
              style={errored.message ? { borderColor: "var(--red)" } : undefined}
            />
          </div>

          <button type="submit" className="btn btn-primary lg submit" disabled={submitting}>
            {submitting ? "sending…" : "$ send_message →"}
          </button>
          <p className="formnote">{"// we reply within 1 business day · ahmed.ai.advisor@gmail.com"}</p>
        </form>
      )}
    </div>
  );
}
