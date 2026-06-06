import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerChildren, itemVariants } from "@/components/motion";
import MotionCard from "@/components/motion/MotionCard";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thoughts on software, product, and building things that last.",
  openGraph: { title: "Insights", description: "Thoughts on software, product, and building things that last." },
};

const posts = [
  { slug: "why-nextjs-for-production", title: "Why We Default to Next.js for Production Apps", date: "2026-05-20", excerpt: "Next.js has become our go-to for client work — not just because it's popular, but because it solves real production problems.", seed: 100 },
  { slug: "api-design-principles", title: "The API Design Principles We Actually Follow", date: "2026-04-15", excerpt: "Good API design is about discipline, not cleverness. We share the specific principles we apply on every backend project.", seed: 200 },
  { slug: "shipping-fast-without-cutting-corners", title: "Shipping Fast Without Cutting Corners", date: "2026-03-10", excerpt: "Speed and quality are often presented as a trade-off. We've found they're not — if you invest in the right foundations early.", seed: 300 },
  { slug: "consulting-lessons-year-one", title: "What We Learned in Our First Year of Client Work", date: "2026-02-01", excerpt: "Technical skills matter less than we expected. Communication, scope clarity, and setting expectations right turned out to matter more.", seed: 400 },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Insights</h1>
          <p className="text-white/70 text-lg">Thoughts on software, product, and building things that last.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <StaggerChildren className="grid gap-8">
            {posts.map((p) => (
              <MotionCard key={p.slug} className="overflow-hidden !p-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${p.seed}/800/533`}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
                <div className="p-6">
                  <time className="text-xs text-text-muted font-medium">{p.date}</time>
                  <h2 className="text-xl font-bold text-primary mt-1 mb-2">{p.title}</h2>
                  <p className="text-text-muted text-sm mb-4">{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} className="text-sm text-accent-2 font-semibold nav-link">Read More →</Link>
                </div>
              </MotionCard>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
