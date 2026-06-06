"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerChildren, itemVariants } from "@/components/motion";

type Category = "All" | "Web" | "Mobile" | "API";

const projects = [
  { title: "E-Commerce Platform", desc: "Full-stack marketplace with real-time inventory, Stripe payments, and a merchant dashboard.", tags: ["Next.js", "PostgreSQL", "Stripe"], category: "Web" as Category, seed: 10 },
  { title: "Fleet Management App", desc: "Mobile-first logistics dashboard with live GPS tracking and driver communication tools.", tags: ["React Native", "Node.js", "WebSockets"], category: "Mobile" as Category, seed: 20 },
  { title: "Analytics API", desc: "High-throughput data pipeline processing 10M events/day with sub-100ms query response.", tags: ["Python", "Kafka", "ClickHouse"], category: "API" as Category, seed: 30 },
  { title: "SaaS Booking Platform", desc: "Multi-tenant appointment scheduling system with calendar sync and automated reminders.", tags: ["Next.js", "Prisma", "Twilio"], category: "Web" as Category, seed: 40 },
  { title: "Fitness Tracking App", desc: "Cross-platform mobile app with workout logging, progress charts, and Apple Health integration.", tags: ["React Native", "Expo", "Firebase"], category: "Mobile" as Category, seed: 50 },
  { title: "Payment Gateway Integration", desc: "Unified payments API abstracting Stripe, Adyen, and PayPal with webhook normalisation.", tags: ["Node.js", "TypeScript", "Redis"], category: "API" as Category, seed: 60 },
];

const categories: Category[] = ["All", "Web", "Mobile", "API"];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("All");
  const reduced = useReducedMotion();
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileTap={reduced ? {} : { scale: 0.95 }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
              active === cat
                ? "bg-accent text-primary font-semibold"
                : "bg-white text-text-muted border border-stone-200 hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <motion.div
            key={p.title}
            variants={itemVariants}
            className="bg-surface rounded-2xl border border-stone-200/60 overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={reduced ? {} : { scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src={`https://picsum.photos/seed/${p.seed}/800/450`}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-semibold text-accent bg-amber-50 px-2 py-0.5 rounded-full self-start mb-3">{p.category}</span>
              <h3 className="font-bold text-primary text-lg mb-2">{p.title}</h3>
              <p className="text-text-muted text-sm mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="text-xs bg-white text-text-muted px-2 py-0.5 rounded-full border border-stone-200">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerChildren>
    </>
  );
}
