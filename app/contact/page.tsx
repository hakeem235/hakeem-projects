import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Hakeem's Projects — web & mobile design, development and QA consultation.",
  openGraph: {
    title: "Contact — Hakeem's Projects",
    description: "Start a project with Hakeem's Projects — web & mobile design, development and QA consultation.",
  },
};

const faqs = [
  {
    q: "How soon can you start?",
    a: "Usually within 2–3 weeks. Urgent QA or audit work we can often slot in sooner.",
    open: true,
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — a lot of our clients are founders. We scope to your stage and budget.",
  },
  {
    q: "Can you just handle QA on our existing app?",
    a: "Absolutely. QA consultation and automation is a standalone service — we'll plug into your team.",
  },
  {
    q: "Where are you based?",
    a: "We work remotely with clients across time zones, with overlapping hours guaranteed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="phead pb-xs gridbg">
        <div className="wrap">
          <p className="crumb">
            ~/ <b>contact</b>
          </p>
          <p className="kicker">
            <i />let&apos;s talk
          </p>
          <h1 className="h-xl">Tell us what you&apos;re building.</h1>
          <p className="lead">
            Fill in the form and we&apos;ll reply within one business day with next steps — usually a short call to
            scope things out. No pressure, no spam.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="contact">
            <ContactForm />

            <div className="side">
              <div className="panel reveal">
                <h4>Reach us directly</h4>
                <a className="crow" href="mailto:ahmed.ai.advisor@gmail.com">
                  <span className="ci">@</span>
                  <span>
                    <b>ahmed.ai.advisor@gmail.com</b>
                    <span>email · fastest way</span>
                  </span>
                </a>
                <a className="crow" href="#">
                  <span className="ci">in</span>
                  <span>
                    <b>LinkedIn</b>
                    <span>/company/hakeems-projects</span>
                  </span>
                </a>
                <a className="crow" href="#">
                  <span className="ci">⌥</span>
                  <span>
                    <b>GitHub</b>
                    <span>@hakeem-projects</span>
                  </span>
                </a>
                <div className="crow">
                  <span className="ci">◷</span>
                  <span>
                    <b>Sun–Thu, 8–16</b>
                    <span>replies within 1 business day</span>
                  </span>
                </div>
              </div>

              <div className="panel faq reveal">
                <h4>Quick answers</h4>
                {faqs.map((f) => (
                  <details key={f.q} open={f.open}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
