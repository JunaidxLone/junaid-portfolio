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
      className="section-anchor rounded-xl border border-line/70 bg-surface-soft/75 p-5 shadow-panel backdrop-blur-sm md:p-7"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <header className="mb-5 flex items-center gap-2.5">
        <span aria-hidden className="h-2 w-2 rounded-full bg-accent/80" />
        <h2 id={`${id}-heading`} className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent/90">
          {title}
        </h2>
      </header>
      {children}
    </motion.section>
  );
}
