"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { FadeUp, StaggerChildren, itemVariants, AnimatedText } from "@/components/motion";

const services = [
  { icon: "web" as const, title: "Web Development", desc: "Modern, performant web apps built with the right stack." },
  { icon: "mobile" as const, title: "Mobile Apps", desc: "Cross-platform mobile experiences users love." },
  { icon: "api" as const, title: "API & Integrations", desc: "Robust APIs and seamless third-party integrations." },
  { icon: "consulting" as const, title: "Technical Consulting", desc: "Strategic guidance to ship faster and smarter." },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "On Time" },
];

const portfolioTeasers = [
  { id: 1, title: "E-Commerce Platform", desc: "Full-stack marketplace with real-time inventory and Stripe payments.", tags: ["Next.js", "PostgreSQL", "Stripe"] },
  { id: 2, title: "Fleet Management App", desc: "Mobile-first logistics dashboard with live GPS tracking.", tags: ["React Native", "Node.js", "WebSockets"] },
  { id: 3, title: "Analytics API", desc: "High-throughput data pipeline processing 10M events/day.", tags: ["Python", "Kafka", "ClickHouse"] },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (inView && !reduced) motionValue.set(value);
  }, [inView, value, motionValue, reduced]);

  useEffect(() => {
    return springValue.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{reduced ? value + suffix : "0" + suffix}</span>;
}

export default function Home() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
          alt="Team working in a bright collaborative office"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1917]/80 to-[#1C1917]/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
            <AnimatedText text="Building Software That Works" />
          </h1>
          <motion.p
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            We design and build web apps, mobile products, and APIs for companies that care about quality and speed.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div whileHover={reduced ? {} : { scale: 1.03 }} whileTap={reduced ? {} : { scale: 0.97 }}>
              <Link href="/portfolio" className="btn btn-primary">View Our Work</Link>
            </motion.div>
            <motion.div whileHover={reduced ? {} : { scale: 1.03 }} whileTap={reduced ? {} : { scale: 0.97 }}>
              <Link href="/contact" className="btn btn-outline">Get In Touch</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services snapshot */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-bold text-center text-primary mb-12">What We Do</h2>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className="card"
                whileHover={reduced ? {} : { y: -4 }}
              >
                <div className="text-accent"><ServiceIcon name={s.icon} /></div>
                <h3 className="font-semibold text-primary mt-3 mb-1">{s.title}</h3>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 px-4 bg-surface border-y border-stone-200/60">
        <div className="max-w-3xl mx-auto">
          <StaggerChildren className="grid grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <motion.div key={s.label} variants={itemVariants}>
                <div className="text-4xl font-bold text-primary mb-1">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm text-text-muted font-medium">{s.label}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Recent Work</h2>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioTeasers.map((p) => (
              <motion.div
                key={p.title}
                variants={itemVariants}
                className="rounded-2xl border border-stone-200/60 overflow-hidden bg-surface"
                whileHover={reduced ? {} : { scale: 1.02 }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={reduced ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={`https://picsum.photos/seed/project${p.id}/800/450`}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-primary text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-text-muted mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-amber-50 text-accent px-2 py-0.5 rounded-full font-medium">{t}</span>
                    ))}
                  </div>
                  <Link href="/portfolio" className="text-sm text-accent-2 font-semibold nav-link">View Project →</Link>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-500 to-orange-500">
        <FadeUp>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to build something great?</h2>
            <p className="text-white/80 mb-8">Let's talk about your project and how we can help.</p>
            <motion.div
              className="inline-block"
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
            >
              <Link href="/contact" className="btn btn-white">Start a Conversation</Link>
            </motion.div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
