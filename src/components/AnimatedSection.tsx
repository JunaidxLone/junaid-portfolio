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
      className="section-anchor border-t border-line/75 pt-9"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <header className="mb-6 flex items-center justify-between gap-4">
        <h2 id={`${id}-heading`} className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-accent/90">
          {title}
        </h2>
        <span aria-hidden className="h-px flex-1 bg-line/80" />
      </header>
      {children}
    </motion.section>
  );
}
