import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thoughts on software, product, and building things that last.",
  openGraph: { title: "Insights", description: "Thoughts on software, product, and building things that last." },
};

const posts = [
  { slug: "why-nextjs-for-production", title: "Why We Default to Next.js for Production Apps", date: "2026-05-20", excerpt: "Next.js has become our go-to for client work — not just because it's popular, but because it solves real production problems. Here's our reasoning." },
  { slug: "api-design-principles", title: "The API Design Principles We Actually Follow", date: "2026-04-15", excerpt: "Good API design is about discipline, not cleverness. We share the specific principles we apply on every backend project and why they matter." },
  { slug: "shipping-fast-without-cutting-corners", title: "Shipping Fast Without Cutting Corners", date: "2026-03-10", excerpt: "Speed and quality are often presented as a trade-off. We've found they're not — if you invest in the right foundations early." },
  { slug: "consulting-lessons-year-one", title: "What We Learned in Our First Year of Client Work", date: "2026-02-01", excerpt: "Technical skills matter less than we expected. Communication, scope clarity, and setting expectations right turned out to matter more." },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Insights</h1>
          <p className="text-gray-300 text-lg">Thoughts on software, product, and building things that last.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto grid gap-8">
          {posts.map((p) => (
            <article key={p.slug} className="card rounded-xl p-6 stagger-item">
              <time className="text-xs text-gray-400 font-medium">{p.date}</time>
              <h2 className="text-xl font-bold text-primary mt-1 mb-2">{p.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="text-sm text-accent font-medium nav-link">Read More →</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
