"use client";

import { AnimatePresence, motion } from "framer-motion";
import SocialLink from "@/components/SocialLink";
import { contactLinks, navItems, personalInfo } from "@/data/portfolio";
import { SectionId } from "@/types/portfolio";

interface MobileNavProps {
  activeSection: SectionId;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (sectionId: SectionId) => void;
}

export default function MobileNav({ activeSection, isOpen, onToggle, onNavigate }: MobileNavProps) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-background/95 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-base font-semibold text-text">{personalInfo.name}</p>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">{personalInfo.headline}</p>
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="focus-ring rounded-md border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-text hover:border-accent/70 hover:text-accent"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md lg:hidden"
          >
            <nav aria-label="Mobile section navigation" className="mx-auto flex h-full max-w-7xl flex-col px-6 pt-28">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onNavigate(item.id)}
                        aria-current={isActive ? "page" : undefined}
                        className={`focus-ring w-full rounded-md px-4 py-3 text-left text-base transition-colors ${
                          isActive
                            ? "bg-accent/10 text-accent"
                            : "text-text hover:bg-surface hover:text-accent focus-visible:bg-surface"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto flex flex-col gap-2 pb-8 text-sm">
                {contactLinks.map((link) => (
                  <SocialLink key={link.label} link={link} className="w-full justify-start px-4 py-3" />
                ))}
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
