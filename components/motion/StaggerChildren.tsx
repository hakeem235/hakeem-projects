"use client";
import { motion, useReducedMotion } from "framer-motion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerDelay } },
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
}: StaggerChildrenProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export { itemVariants };
