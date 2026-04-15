"use client";

import { useEffect, useMemo, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import DesktopSidebar from "@/components/DesktopSidebar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import MobileNav from "@/components/MobileNav";
import SocialLink from "@/components/SocialLink";
import {
  aboutLead,
  aboutParagraphs,
  contactCopy,
  contactLinks,
  education,
  experience,
  navItems,
  personalInfo,
  projectsPlaceholder,
  skills
} from "@/data/portfolio";
import { SectionId } from "@/types/portfolio";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sectionIds = useMemo(() => {
    const ids: SectionId[] = navItems.map((item) => item.id);
    if (projectsPlaceholder.showProjects) {
      ids.push("projects");
    }
    return ids;
  }, []);

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

      <div className="mx-auto max-w-6xl px-6 pb-12 pt-24 lg:px-12 lg:pb-16 lg:pt-0">
        <div className="lg:flex lg:justify-between lg:gap-20">
          <DesktopSidebar activeSection={activeSection} onNavigate={navigateToSection} />

          <main id="content" className="space-y-10 lg:w-[58%] lg:space-y-12 lg:py-24">
            <AnimatedSection id="about" title="About Me">
              <div className="space-y-4">
                <p className="max-w-3xl text-2xl font-semibold leading-tight text-text md:text-[1.95rem]">{aboutLead}</p>
                <div className="space-y-4 text-base leading-relaxed text-muted">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
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
              <article className="rounded-xl border border-line/80 bg-surface/70 p-5 md:p-6">
                <h3 className="text-xl font-semibold text-text">{education.institution}</h3>
                <p className="mt-2 text-base text-accent">{education.degree}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">{education.period}</p>
              </article>
            </AnimatedSection>

            <AnimatedSection id="skills" title="Skills">
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-text transition hover:border-accent/75 hover:text-accent">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {projectsPlaceholder.showProjects ? (
              <AnimatedSection id="projects" title={projectsPlaceholder.heading}>
                <p className="text-base leading-relaxed text-muted">{projectsPlaceholder.description}</p>
              </AnimatedSection>
            ) : null}

            <AnimatedSection id="contact" title="Contact">
              <p className="max-w-2xl text-base leading-relaxed text-muted">{contactCopy}</p>
              <div className="mt-5 space-y-2 text-sm text-muted">
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

            <footer className="pb-3 pt-4 text-sm text-muted">
              <p>Designed and built by Junaid Lone.</p>
              <p className="mt-1">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
