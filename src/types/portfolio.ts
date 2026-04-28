export type SectionId = "about" | "experience" | "education" | "certifications" | "skills" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface ExperienceRole {
  company: string;
  title: string;
  location: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface ContactLink {
  icon: "email" | "linkedin" | "github";
  label: string;
  href: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  verifyUrl: string;
  linkedInUrl?: string;
}
