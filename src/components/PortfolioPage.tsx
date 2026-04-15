"use client";

import { useEffect, useMemo, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import DesktopSidebar from "@/components/DesktopSidebar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import SocialLink from "@/components/SocialLink";
import {
  aboutFocusAreas,
  aboutLead,
  aboutParagraphs,
  contactCopy,
  contactLinks,
  education,
  experience,
  navItems,
  personalInfo,
  skills
} from "@/data/portfolio";
import { SectionId } from "@/types/portfolio";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.2, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const navigateToSection = (sectionId: SectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
    setMobileNavOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      <MobileNav
        activeSection={activeSection}
        isOpen={mobileNavOpen}
        onToggle={() => setMobileNavOpen((open) => !open)}
        onNavigate={navigateToSection}
      />

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-24 lg:px-12 lg:pb-20 lg:pt-0">
        <div className="lg:flex lg:justify-between lg:gap-14">
          <DesktopSidebar activeSection={activeSection} onNavigate={navigateToSection} />

          <main id="content" className="space-y-12 lg:w-[58%] lg:space-y-16 lg:py-24">
            <AnimatedSection id="about" title="About Me">
              <div className="space-y-5">
                <p className="max-w-3xl text-[1.82rem] font-semibold leading-snug tracking-tight text-text md:text-[2.08rem]">
                  {aboutLead}
                </p>
                <div className="space-y-4 text-[1.01rem] leading-relaxed text-muted">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="grid gap-x-5 gap-y-2.5 border-t border-line/70 pt-4 sm:grid-cols-2">
                  {aboutFocusAreas.map((focusArea) => (
                    <li key={focusArea}>
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                        {focusArea}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="focus-ring inline-flex items-center rounded-md border border-accent/60 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent/20"
                >
                  Get in touch
                </a>
                {contactLinks.map((link) => (
                  <SocialLink key={link.label} link={link} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="experience" title="Experience">
              <ExperienceTimeline roles={experience} />
            </AnimatedSection>

            <AnimatedSection id="education" title="Education">
              <article className="border-l border-line/80 pl-4 md:pl-5">
                <h3 className="text-[1.15rem] font-semibold text-text">{education.institution}</h3>
                <p className="mt-1.5 text-[0.95rem] text-accent">{education.degree}</p>
                <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">{education.period}</p>
              </article>
            </AnimatedSection>

            <AnimatedSection id="skills" title="Skills">
              <ul className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center rounded-sm border border-line/80 bg-surface/55 px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-text transition hover:border-accent/70 hover:text-accent">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection id="contact" title="Contact">
              <p className="max-w-2xl text-[0.98rem] leading-relaxed text-muted">{contactCopy}</p>
              <div className="mt-5 space-y-2.5 border-l border-line/70 pl-4 text-sm text-muted">
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="focus-ring rounded-sm text-text underline decoration-line underline-offset-4 hover:text-accent"
                  >
                    {personalInfo.email}
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href={personalInfo.linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-sm break-all text-text underline decoration-line underline-offset-4 hover:text-accent"
                  >
                    {personalInfo.linkedInUrl}
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-sm break-all text-text underline decoration-line underline-offset-4 hover:text-accent"
                  >
                    {personalInfo.githubUrl}
                  </a>
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <SocialLink key={link.label} link={link} />
                ))}
              </div>
            </AnimatedSection>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
