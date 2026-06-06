import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Web development, mobile apps, APIs, DevOps, and technical consulting — end-to-end software delivery.",
  openGraph: { title: "Our Services", description: "Web development, mobile apps, APIs, DevOps, and technical consulting — end-to-end software delivery." },
};

const services = [
  { title: "Web Development", desc: "We build fast, scalable web applications tailored to your business needs — from landing pages to full-stack SaaS products.", points: ["Next.js, React, TypeScript", "REST & GraphQL APIs", "Database design and optimisation", "Authentication and authorisation", "Performance and Core Web Vitals"] },
  { title: "Mobile App Development", desc: "Cross-platform mobile apps that feel native, built efficiently with shared codebases and deployed to both iOS and Android.", points: ["React Native", "Expo managed and bare workflow", "Push notifications and offline support", "App Store and Google Play deployment", "Integration with device APIs"] },
  { title: "API & Backend Engineering", desc: "Robust, well-documented APIs and backend systems that scale with your growth and integrate cleanly with everything around them.", points: ["Node.js, Python, Go", "Microservices and event-driven architecture", "Third-party API integrations", "Webhooks and real-time systems", "Caching, queuing, and job scheduling"] },
  { title: "Technical Consulting", desc: "Strategic technical guidance to help your team make better decisions, move faster, and avoid costly mistakes.", points: ["Architecture reviews", "Tech stack evaluation and selection", "Code audits and quality assessments", "Hiring and team structure guidance", "Roadmap planning and prioritisation"] },
  { title: "UI/UX Design", desc: "Clean, modern interfaces designed for clarity and conversion — always with the end user in mind.", points: ["Wireframing and prototyping", "Design systems and component libraries", "Figma-to-code handoff", "Accessibility (WCAG AA)", "Responsive and mobile-first design"] },
  { title: "DevOps & Infrastructure", desc: "Reliable, automated infrastructure that keeps your product running, deployments fast, and your team unblocked.", points: ["CI/CD pipeline setup (GitHub Actions, Vercel)", "Cloud infrastructure (AWS, GCP)", "Containerisation with Docker and Kubernetes", "Monitoring, alerting, and logging", "Security hardening and secret management"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg">End-to-end software delivery — from idea to production and beyond.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-14">
          {services.map((s) => (
            <div key={s.title} className="border-b border-gray-100 pb-14 last:border-0 last:pb-0">
              <h2 className="text-2xl font-bold text-primary mb-3">{s.title}</h2>
              <p className="text-gray-600 mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-accent mt-0.5">✓</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-primary text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-gray-300 mb-6">Let's figure out what you need and how we can help.</p>
        <Link href="/contact" className="btn btn-primary">Get In Touch</Link>
      </section>
    </>
  );
}
