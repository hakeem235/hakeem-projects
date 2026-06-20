"use client";

import { useState } from "react";
import Image from "next/image";

type Filter = "all" | "web" | "mobile" | "qa";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "all" },
  { key: "web", label: "web" },
  { key: "mobile", label: "mobile" },
  { key: "qa", label: "qa" },
];

type Project = {
  cats: Filter[];
  tags: string[];
  year: string;
  title: string;
  desc: string;
  metrics: { b: string; span: string }[];
  seed: number;
  url?: string;
  img?: string;
};

const projects: Project[] = [
  {
    cats: ["web"],
    tags: ["Web app", "SaaS", "AI"],
    year: "2026",
    title: "ComplianceAI — legal & compliance platform for Saudi Arabia",
    desc: "AI-powered contract review, compliance tracking and document generation grounded in Saudi regulation. Flags clause risks with citations, tracks ZATCA/CMA deadlines, and answers legal questions — fully bilingual (EN/AR) with RTL support.",
    metrics: [
      { b: "EN / AR", span: "bilingual + RTL" },
      { b: "PDPL", span: "ready" },
      { b: "Live", span: "on Vercel" },
    ],
    seed: 26,
    url: "https://compliance-ai-olive.vercel.app/",
    img: "/work/complianceai.png",
  },
  {
    cats: ["web"],
    tags: ["Web app", "SaaS"],
    year: "2026",
    title: "FlowPilot — cash-flow forecasting for small business",
    desc: "A daily cash forecast that tells owners what they can safely spend. Consolidates invoices, expenses and tax reserves into a 30/60/90-day horizon with scenario modeling and bank import.",
    metrics: [
      { b: "30/60/90", span: "day horizon" },
      { b: "<10 min", span: "to set up" },
      { b: "Live", span: "on Vercel" },
    ],
    seed: 25,
    url: "https://flow-pilot-eosin.vercel.app/",
    img: "/work/flowpilot.png",
  },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("all");

  return (
    <>
      <div className="filters">
        {filters.map((f) => (
          <span
            key={f.key}
            className={active === f.key ? "chip on" : "chip"}
            role="button"
            tabIndex={0}
            onClick={() => setActive(f.key)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(f.key);
            }}
          >
            {f.label}
          </span>
        ))}
      </div>

      <div className="work-grid">
        {projects
          .filter((p) => active === "all" || p.cats.includes(active))
          .map((p) => (
            <article className="proj reveal" key={p.title}>
              <div className="shot">
                <Image
                  src={p.img ?? `https://picsum.photos/seed/work${p.seed}/800/600`}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 820px) 100vw, 50vw"
                />
              </div>
              <div className="pbody">
                <div className="ptop">
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="ptag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="year">{p.year}</span>
                </div>
                <h3>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p>{p.desc}</p>
                <div className="metrics">
                  {p.metrics.map((m) => (
                    <div className="m" key={m.span}>
                      <b>{m.b}</b>
                      <span>{m.span}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
      </div>
    </>
  );
}
