"use client";
import { motion, useReducedMotion } from "framer-motion";
import { itemVariants } from "./StaggerChildren";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionCard({ children, className }: MotionCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={itemVariants}
      className={`card ${className ?? ""}`}
      whileHover={reduced ? {} : { y: -4 }}
    >
      {children}
    </motion.div>
  );
}
