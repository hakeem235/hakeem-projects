import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcon";

const services = [
  { icon: "web" as const, title: "Web Development", desc: "Modern, performant web apps built with the right stack." },
  { icon: "mobile" as const, title: "Mobile Apps", desc: "Cross-platform mobile experiences users love." },
  { icon: "api" as const, title: "API & Integrations", desc: "Robust APIs and seamless third-party integrations." },
  { icon: "consulting" as const, title: "Technical Consulting", desc: "Strategic guidance to ship faster and smarter." },
];

const portfolioTeasers = [
  { title: "E-Commerce Platform", desc: "A full-stack marketplace with real-time inventory and Stripe payments.", tags: ["Next.js", "PostgreSQL", "Stripe"] },
  { title: "Fleet Management App", desc: "Mobile-first logistics dashboard with live GPS tracking.", tags: ["React Native", "Node.js", "WebSockets"] },
  { title: "Analytics API", desc: "High-throughput data pipeline processing 10M events/day.", tags: ["Python", "Kafka", "ClickHouse"] },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Building Software <span className="text-accent">That Works</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We design and build web apps, mobile products, and APIs for companies that care about quality and speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="btn btn-primary">
              View Our Work
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services snapshot */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card bg-white rounded-xl p-6 border border-gray-100 stagger-item">
                <ServiceIcon name={s.icon} />
                <h3 className="font-semibold text-primary mt-3 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioTeasers.map((p) => (
              <div key={p.title} className="card rounded-xl border border-gray-100 p-6 stagger-item">
                <h3 className="font-semibold text-primary text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-blue-50 text-accent px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <Link href="/portfolio" className="text-sm text-accent font-medium nav-link">View Project →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to build something great?</h2>
          <p className="text-blue-100 mb-8">Let's talk about your project and how we can help.</p>
          <Link href="/contact" className="btn btn-white inline-block">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
