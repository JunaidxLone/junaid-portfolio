import { ContactLink, EducationItem, ExperienceRole, NavItem } from "@/types/portfolio";

export const personalInfo = {
  name: "Junaid Lone",
  headline: "Junior Financial Crime Analyst",
  location: "Manchester, UK",
  email: "junaidlone2305@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/junaid-lone-68121a318/",
  githubUrl: "https://github.com/JunaidxLone"
};

export const navItems: NavItem[] = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const aboutLead =
  "Ambitious financial crime professional focused on protecting customers and strengthening trust in banking.";

export const aboutParagraphs: string[] = [
  "I am an ambitious financial crime professional with experience in transaction monitoring, investigations, KYC/EDD, and risk analysis across fast-paced banking operations.",
  "At Kroo Bank, I work across high-pressure casework including remediation, alert reviews, fraud concerns, and live payment decisions while maintaining clear judgment and quality standards.",
  "I am building a long-term career in financial crime and compliance, with a strong interest in practical risk prevention, investigative depth, and protecting customer trust."
];

export const aboutFocusAreas: string[] = [
  "Transaction Monitoring",
  "KYC / EDD",
  "Case Investigations",
  "Risk Analysis",
  "Escalations",
  "Live High Value Payments"
];

export const experience: ExperienceRole[] = [
  {
    company: "Kroo Bank",
    title: "Junior Financial Crime Analyst",
    location: "Manchester",
    period: "October 2024 - Present",
    points: [
      "**Promoted** from Graduate Analyst after probation, delivering **90%+ QA** across case reviews and escalations.",
      "**Selected** for a specialist remediation team handling complex transaction monitoring alerts out of SLA for **3+ years**.",
      "Reviewed transaction monitoring alerts and **Live High Value Payments**, including suspensions, fraud concerns, and urgent SLA-driven work.",
      "Conducted **KYC/EDD** and holistic personal monitoring investigations into activity inconsistent with customer profiles.",
      "Used **LexisNexis ThreatMetrix, CIFAS, and Moody's Analytics RDC** to assess risk, PEP/watchlist matches, and red flags.",
      "Supported onboarding by **training new starters**, offering second opinions, and covering casework during absences."
    ]
  },
  {
    company: "Lone Solicitors",
    title: "Office Clerk",
    location: "Manchester",
    period: "July 2022 - August 2022",
    points: [
      "Drafted and proofread client letters and legal correspondence across **17 live immigration matters**.",
      "Supported **confidential case administration** and document handling for applications and submissions."
    ]
  },
  {
    company: "Abram & Co. Accountants",
    title: "Bookkeeper",
    location: "Manchester",
    period: "July 2021 - August 2021",
    points: [
      "Supported bookkeeping and tax admin by reconciling client records and preparing figures for reporting.",
      "Used **Xero** and **QuickBooks** to streamline routine bookkeeping tasks and reduce manual errors."
    ]
  }
];

export const education: EducationItem = {
  institution: "The University of Manchester",
  degree: "BSc Accounting (Hons)",
  period: "September 2021 - June 2024"
};

export const skills: string[] = [
  "Transaction Monitoring",
  "KYC / EDD",
  "PEP & Watchlist Screening",
  "Live High Value Payments",
  "Case Investigations",
  "Escalations",
  "SARs",
  "LexisNexis ThreatMetrix",
  "CIFAS",
  "Moody's Analytics RDC"
];

export const contactCopy =
  "I am always open to speaking with recruiters, hiring managers, and professional contacts in financial crime, risk, and compliance. If you are hiring or would like to connect, I would be glad to hear from you.";

export const contactLinks: ContactLink[] = [
  {
    icon: "email",
    label: "Email",
    href: `mailto:${personalInfo.email}`
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    href: personalInfo.linkedInUrl
  },
  {
    icon: "github",
    label: "GitHub",
    href: personalInfo.githubUrl
  }
];
