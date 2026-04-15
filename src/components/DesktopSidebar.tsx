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
      <div className="space-y-9">
        <div className="space-y-3">
          <h1 className="text-[2.35rem] font-semibold tracking-tight text-text">{personalInfo.name}</h1>
          <p className="text-[1.06rem] text-text/95">{personalInfo.headline}</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{personalInfo.location}</p>
        </div>

        <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted">
          Focused on financial crime prevention through transaction monitoring, investigations, and practical risk
          decision-making in regulated banking environments.
        </p>

        <nav aria-label="Section navigation">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`focus-ring group flex w-full items-center gap-3 rounded-sm border-l px-3 py-2.5 text-left transition-colors ${
                      isActive
                        ? "border-accent bg-surface/45 text-text"
                        : "border-line/70 text-muted hover:border-accent/65 hover:bg-surface/35 hover:text-text"
                    }`}
                  >
                    <span className={`font-mono text-[0.64rem] uppercase tracking-[0.16em] ${isActive ? "text-accent" : ""}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em]">
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
