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
};

const projects: Project[] = [
  {
    cats: ["web", "qa"],
    tags: ["Web app", "QA"],
    year: "2025",
    title: "Northwind — B2B logistics dashboard",
    desc: "A real-time freight dashboard rebuilt from the ground up. New design system, Next.js front end, and a Playwright suite covering 180+ flows.",
    metrics: [
      { b: "2.4s→0.9s", span: "load time" },
      { b: "184", span: "e2e tests" },
      { b: "0", span: "launch regressions" },
    ],
    seed: 21,
  },
  {
    cats: ["mobile"],
    tags: ["Mobile app", "Design"],
    year: "2025",
    title: "Tempo — habit & wellness app",
    desc: "End-to-end React Native app: brand, UX, build and store launch. Offline-first with a tested sync engine and buttery 60fps interactions.",
    metrics: [
      { b: "4.8★", span: "app store" },
      { b: "iOS+Android", span: "one codebase" },
      { b: "12 wks", span: "to launch" },
    ],
    seed: 22,
  },
  {
    cats: ["qa"],
    tags: ["QA consult", "Automation"],
    year: "2024",
    title: "Ledgerly — fintech QA overhaul",
    desc: "Embedded with their team to build a test strategy from scratch: CI gates, automated regression and a release process they now run themselves.",
    metrics: [
      { b: "71%→96%", span: "coverage" },
      { b: "-83%", span: "escaped bugs" },
      { b: "3×", span: "release speed" },
    ],
    seed: 23,
  },
  {
    cats: ["web"],
    tags: ["Marketing site", "Web"],
    year: "2024",
    title: "Atlas Studio — agency rebrand & site",
    desc: "A high-craft marketing site with a headless CMS. Perfect Lighthouse scores, fully accessible, and easy for their team to update.",
    metrics: [
      { b: "100", span: "lighthouse" },
      { b: "WCAG AA", span: "accessible" },
      { b: "+38%", span: "lead conversion" },
    ],
    seed: 24,
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
                  src={`https://picsum.photos/seed/work${p.seed}/800/600`}
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
                <h3>{p.title}</h3>
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
