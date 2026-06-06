import type { Metadata } from "next";
import Image from "next/image";
import { FadeUp, StaggerChildren, itemVariants } from "@/components/motion";
import MotionCard from "@/components/motion/MotionCard";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Hakeem Projects — our story, mission, values, and the team behind the work.",
  openGraph: { title: "About Us", description: "Learn about Hakeem Projects — our story, mission, values, and the team behind the work." },
};

const values = [
  { title: "Quality", desc: "We don't cut corners. Every line of code is written to last, tested, and reviewed before it ships." },
  { title: "Transparency", desc: "No surprises. You always know where things stand — progress, blockers, and decisions are shared openly." },
  { title: "Speed", desc: "We move fast without breaking things. Lean processes, clear scope, and decisive execution." },
  { title: "Partnership", desc: "Your success is ours. We're not vendors — we're an extension of your team." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-white/70 text-lg">A small, focused software team that gets things done.</p>
        </div>
      </section>

      {/* Story — two column */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-text-muted leading-relaxed mb-4">Hakeem Projects was founded on a simple observation: most software projects fail not because of technical complexity, but because of poor communication, unclear scope, and teams that aren&apos;t aligned. We set out to build a different kind of software company — one where technical excellence and client partnership go hand in hand.</p>
            <p className="text-text-muted leading-relaxed">Since our founding, we&apos;ve worked with startups building their first product, scale-ups modernising legacy systems, and enterprises integrating new capabilities into existing platforms. In every engagement, we bring the same rigour, care, and commitment to quality.</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                alt="Person working at a laptop in warm light"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-2xl font-semibold text-primary leading-snug mb-6">
              &ldquo;To build software that solves real problems — reliably, beautifully, and on time.&rdquo;
            </p>
            <p className="text-text-muted leading-relaxed">We believe great software is built through clear thinking, honest communication, and relentless attention to detail. Our mission is to deliver products that our clients are proud to show their users — and that we&apos;re proud to have our name on.</p>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="text-2xl font-bold text-primary text-center mb-12">What We Stand For</h2>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <MotionCard key={v.title}>
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mb-3">
                  <span className="text-accent font-bold text-sm">{v.title[0]}</span>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{v.title}</h3>
                <p className="text-text-muted text-sm">{v.desc}</p>
              </MotionCard>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="text-2xl font-bold text-primary text-center mb-12">The Team</h2>
          </FadeUp>
          <FadeUp delay={0.1} className="flex justify-center">
            <div className="card text-center max-w-xs w-full">
              <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-amber-400/60 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Ahmed Hakeem"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h3 className="font-bold text-primary text-lg">Ahmed Hakeem</h3>
              <p className="text-accent text-sm font-semibold mt-1">Founder & CEO</p>
              <p className="text-text-muted text-sm mt-3">Full-stack engineer with a focus on product quality, scalable architecture, and building teams that ship.</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
