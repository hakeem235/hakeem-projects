"use client";
import { useState } from "react";

type Category = "All" | "Web" | "Mobile" | "API";

const projects = [
  { title: "E-Commerce Platform", desc: "Full-stack marketplace with real-time inventory, Stripe payments, and a merchant dashboard.", tags: ["Next.js", "PostgreSQL", "Stripe"], category: "Web" as Category },
  { title: "Fleet Management App", desc: "Mobile-first logistics dashboard with live GPS tracking and driver communication tools.", tags: ["React Native", "Node.js", "WebSockets"], category: "Mobile" as Category },
  { title: "Analytics API", desc: "High-throughput data pipeline processing 10M events/day with sub-100ms query response.", tags: ["Python", "Kafka", "ClickHouse"], category: "API" as Category },
  { title: "SaaS Booking Platform", desc: "Multi-tenant appointment scheduling system with calendar sync and automated reminders.", tags: ["Next.js", "Prisma", "Twilio"], category: "Web" as Category },
  { title: "Fitness Tracking App", desc: "Cross-platform mobile app with workout logging, progress charts, and Apple Health integration.", tags: ["React Native", "Expo", "Firebase"], category: "Mobile" as Category },
  { title: "Payment Gateway Integration", desc: "Unified payments API abstracting Stripe, Adyen, and PayPal with webhook normalisation.", tags: ["Node.js", "TypeScript", "Redis"], category: "API" as Category },
];

const categories: Category[] = ["All", "Web", "Mobile", "API"];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 active:scale-95 ${
              active === cat
                ? "bg-accent text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-accent hover:text-accent"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out)" }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div key={p.title} className="card bg-white rounded-xl border border-gray-100 p-6 flex flex-col stagger-item">
            <span className="text-xs font-medium text-accent bg-blue-50 px-2 py-0.5 rounded-full self-start mb-3">{p.category}</span>
            <h3 className="font-bold text-primary text-lg mb-2">{p.title}</h3>
            <p className="text-gray-500 text-sm mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t}</span>)}
            </div>
            <button className="mt-auto text-sm text-accent font-medium text-left nav-link w-fit">View Details →</button>
          </div>
        ))}
      </div>
    </>
  );
}
