"use client";

import SocialLink from "@/components/SocialLink";
import { contactLinks, navItems, personalInfo } from "@/data/portfolio";
import { SectionId } from "@/types/portfolio";

interface DesktopSidebarProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

export default function DesktopSidebar({ activeSection, onNavigate }: DesktopSidebarProps) {
  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[38%] lg:flex-col lg:justify-between lg:py-24">
      <div className="space-y-7">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-accent/90">Portfolio</p>
          <h1 className="text-4xl font-semibold tracking-tight text-text md:text-5xl">{personalInfo.name}</h1>
          <p className="text-lg text-text/95">{personalInfo.headline}</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{personalInfo.location}</p>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Focused on transaction monitoring, case investigations, and practical risk decisioning in high-pressure
          financial crime operations.
        </p>

        <nav aria-label="Section navigation">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className="focus-ring group flex w-full items-center gap-3 rounded-md px-2 py-2 text-left"
                  >
                    <span
                      aria-hidden
                      className={`h-px transition-all duration-300 ${
                        isActive ? "w-11 bg-accent" : "w-7 bg-muted/50 group-hover:w-10 group-hover:bg-accent/70"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-muted group-hover:text-text"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex flex-wrap gap-2">
        {contactLinks.map((link) => (
          <SocialLink
            key={link.label}
            link={link}
            className="border-transparent px-2 py-1 text-muted hover:border-line/80 hover:bg-surface-soft/60 hover:text-accent"
          />
        ))}
      </div>
    </aside>
  );
}
