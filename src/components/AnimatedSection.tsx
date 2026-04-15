"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionId } from "@/types/portfolio";

interface AnimatedSectionProps {
  id: SectionId;
  title: string;
  children: ReactNode;
}

export default function AnimatedSection({ id, title, children }: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      data-section
      aria-labelledby={`${id}-heading`}
      className="section-anchor rounded-2xl border border-line/70 bg-surface-soft/70 p-6 shadow-panel backdrop-blur-sm md:p-8"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <header className="mb-6 flex items-center gap-3">
        <span aria-hidden className="h-px w-10 bg-accent/60" />
        <h2 id={`${id}-heading`} className="font-mono text-xs uppercase tracking-[0.22em] text-accent/90">
          {title}
        </h2>
      </header>
      {children}
    </motion.section>
  );
}
