import { notFound } from "next/navigation";

const posts: Record<string, { title: string; date: string; author: string; body: string }> = {
  "why-nextjs-for-production": {
    title: "Why We Default to Next.js for Production Apps",
    date: "2026-05-20",
    author: "Ahmed Hakeem",
    body: "Next.js has become our default choice for client work — not just because it's the popular option, but because it solves real production problems that emerge at scale. From server-side rendering to built-in image optimisation, the decisions Next.js makes for you are almost always the right ones.\n\nIn this post, we walk through the specific reasons we reach for Next.js, the cases where we don't, and what we've learned from shipping it across multiple production environments.",
  },
  "api-design-principles": {
    title: "The API Design Principles We Actually Follow",
    date: "2026-04-15",
    author: "Ahmed Hakeem",
    body: "Good API design is about discipline, not cleverness. The most robust APIs we've seen are boring — predictable naming, consistent error shapes, and no surprises.\n\nWe share the specific principles we apply on every backend project: how we version APIs, how we structure errors, what we put in headers versus bodies, and how we think about backwards compatibility from day one.",
  },
  "shipping-fast-without-cutting-corners": {
    title: "Shipping Fast Without Cutting Corners",
    date: "2026-03-10",
    author: "Ahmed Hakeem",
    body: "Speed and quality are often presented as a trade-off. We've found they're not — if you invest in the right foundations early. The teams that ship fastest are usually the ones with the cleanest codebases, not the most chaotic ones.\n\nHere's what we've learned about maintaining velocity without accumulating the kind of debt that eventually grinds a project to a halt.",
  },
  "consulting-lessons-year-one": {
    title: "What We Learned in Our First Year of Client Work",
    date: "2026-02-01",
    author: "Ahmed Hakeem",
    body: "Technical skills matter less than we expected. The biggest predictors of a successful engagement turned out to be communication frequency, how early we surfaced blockers, and how well we aligned on scope before writing a single line of code.\n\nThis is a candid account of the lessons from our first year — what surprised us, what we'd do differently, and what we've made permanent habits.",
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <article className="py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <time className="text-xs text-gray-400 font-medium">{post.date}</time>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-2">{post.title}</h1>
        <p className="text-sm text-accent font-medium mb-8">By {post.author}</p>
        <div className="prose prose-gray max-w-none">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
