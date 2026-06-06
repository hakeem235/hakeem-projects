import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Web development, mobile apps, APIs, DevOps, and technical consulting — end-to-end software delivery.",
  openGraph: { title: "Our Services", description: "Web development, mobile apps, APIs, DevOps, and technical consulting — end-to-end software delivery." },
};

const services = [
  { title: "Web Development", desc: "We build fast, scalable web applications tailored to your business needs — from landing pages to full-stack SaaS products.", points: ["Next.js, React, TypeScript", "REST & GraphQL APIs", "Database design and optimisation", "Authentication and authorisation", "Performance and Core Web Vitals"], seed: 71 },
  { title: "Mobile App Development", desc: "Cross-platform mobile apps that feel native, built efficiently with shared codebases and deployed to both iOS and Android.", points: ["React Native", "Expo managed and bare workflow", "Push notifications and offline support", "App Store and Google Play deployment", "Integration with device APIs"], seed: 72 },
  { title: "API & Backend Engineering", desc: "Robust, well-documented APIs and backend systems that scale with your growth and integrate cleanly with everything around them.", points: ["Node.js, Python, Go", "Microservices and event-driven architecture", "Third-party API integrations", "Webhooks and real-time systems", "Caching, queuing, and job scheduling"], seed: 73 },
  { title: "Technical Consulting", desc: "Strategic technical guidance to help your team make better decisions, move faster, and avoid costly mistakes.", points: ["Architecture reviews", "Tech stack evaluation and selection", "Code audits and quality assessments", "Hiring and team structure guidance", "Roadmap planning and prioritisation"], seed: 74 },
  { title: "UI/UX Design", desc: "Clean, modern interfaces designed for clarity and conversion — always with the end user in mind.", points: ["Wireframing and prototyping", "Design systems and component libraries", "Figma-to-code handoff", "Accessibility (WCAG AA)", "Responsive and mobile-first design"], seed: 75 },
  { title: "DevOps & Infrastructure", desc: "Reliable, automated infrastructure that keeps your product running, deployments fast, and your team unblocked.", points: ["CI/CD pipeline setup (GitHub Actions, Vercel)", "Cloud infrastructure (AWS, GCP)", "Containerisation with Docker and Kubernetes", "Monitoring, alerting, and logging", "Security hardening and secret management"], seed: 76 },
];

export default function ServicesPage() {
  return (
    <>
      {/* Image hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
          alt="Technology and software development"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/85 to-[#1C1917]/50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-white/75 text-lg">End-to-end software delivery — from idea to production and beyond.</p>
        </div>
      </section>

      {/* Alternating service sections */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto space-y-24">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={0.05}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}>
                <div style={{ direction: "ltr" }}>
                  <h2 className="text-2xl font-bold text-primary mb-3">{s.title}</h2>
                  <p className="text-text-muted mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-text-base">
                        <span className="text-accent mt-0.5 font-bold">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" style={{ direction: "ltr" }}>
                  <Image
                    src={`https://picsum.photos/seed/${s.seed}/800/600`}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white text-center">
        <FadeUp>
          <h2 className="text-2xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-white/80 mb-6">Let&apos;s figure out what you need and how we can help.</p>
          <Link href="/contact" className="btn btn-white">Get In Touch</Link>
        </FadeUp>
      </section>
    </>
  );
}
