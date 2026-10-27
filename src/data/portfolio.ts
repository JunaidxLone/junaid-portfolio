import { CertificationItem, ContactLink, EducationItem, ExperienceRole, NavItem } from "@/types/portfolio";

export const personalInfo = {
  name: "Junaid Lone",
  headline: "Financial Crime Specialist",
  location: "Manchester, UK",
  email: "junaidlone2305@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/junaid-lone/",
  githubUrl: "https://github.com/JunaidxLone"
};

export const navItems: NavItem[] = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const aboutParagraphs: string[] = [
  "I'm currently working as a Financial Crime Specialist at Zopa Bank, having previously worked at Kroo Bank. Through these roles, I've gained hands-on experience in transaction monitoring, fraud investigations, high-value payments and KYC/EDD reviews.",
  "My experience includes investigating suspected money mule activity, filing Suspicious Activity Reports (SARs) and working within a specialist remediation team to tackle transaction monitoring backlogs. I'm comfortable handling complex cases, assessing risks and making informed decisions, often while working to tight deadlines.",
  "Alongside my professional experience, I've been developing my technical skills through certifications in SQL and Python. I'm naturally curious, enjoy learning new things and am always looking for opportunities to challenge myself and build on what I already know."
];

export const experience: ExperienceRole[] = [
  {
    company: "Zopa Bank",
    title: "Financial Crime Specialist",
    location: "Manchester",
    period: "April 2026 - Present",
    points: [
      "Investigate **transaction monitoring** alerts, reviewing **30 financial crime cases** per day, analysing customer activity, payment behaviour, account history, and risk indicators to determine outcomes.",
      "Handle suspected money **mule cases** in real time, applying account suspensions, completing time sensitive reviews, and documenting decisions in line with internal procedures.",
      "Liaise with internal teams to **resolve financial crime queries**, progress reviews, and ensure consistent handling of restricted or suspended accounts.",
      "Utilised an internal **AI powered transaction monitoring system**, alongside **Amplitude, CIFAS and open-source intelligence (OSINT)**, to support financial crime investigations, identify suspicious activity and assess financial crime risks, whilst **successfully passing probation**."
    ]
  },
  {
    company: "Kroo Bank",
    title: "Junior Financial Crime Analyst",
    location: "Manchester",
    period: "October 2024 - April 2026",
    points: [
      "**Promoted from Graduate Analyst to Junior Analyst** after passing probation and demonstrating strong judgement with **90%+ QA scores** across case reviews and escalations.",
      "Selected for a **specialist remediation team** tackling a **transaction monitoring backlog**, focusing on the more complex cases.",
      "Reviewed **transaction monitoring alerts and live High Value Payments** with tight SLAs, writing detailed rationales and escalations.",
      "Conducted **KYC/EDD reviews and holistic personal monitoring cases**, investigating account activity that didn’t align with the customer’s profile.",
      "Used **LexisNexis (ThreatMetrix), CIFAS, Moody’s Analytics RDC** and internal case systems to assess risk, PEP/Watchlist matches, and red flags.",
      "**Provided training for new starters**, offered second opinions to colleagues and covered casework during team absences to ensure consistent coverage."
    ]
  },
  {
    company: "Abram & Co. Accountants",
    title: "Bookkeeper",
    location: "Manchester",
    period: "July 2021 - August 2021",
    points: [
      "Supported **bookkeeping and tax admin by reconciling** client records and preparing detailed figures for reporting.",
      "Used **Xero and QuickBooks** to streamline routine bookkeeping tasks and reduce manual errors."
    ]
  }
];

export const education: EducationItem = {
  institution: "The University of Manchester",
  degree: "BSc Accounting (Hons)",
  period: "September 2021 - June 2024"
};

export const certifications: CertificationItem[] = [
  {
    name: "Python Certificate",
    issuer: "W3Schools",
    verifyUrl: "https://verify.w3schools.com/1QZPLS448P",
    linkedInUrl: personalInfo.linkedInUrl
  },
  {
    name: "SQL Certificate",
    issuer: "W3Schools",
    verifyUrl: "https://verify.w3schools.com/1R7AV4QZIA",
    linkedInUrl: personalInfo.linkedInUrl
  }
];

export const skills: string[] = [
  "Transaction Monitoring",
  "KYC/EDD",
  "PEP & Watchlist Screening",
  "Live High Value Payments",
  "Case Investigations & Escalations",
  "SARs",
  "LexisNexis (ThreatMetrix)",
  "CIFAS",
  "Moody’s Analytics RDC",
  "Amplitude",
  "SQL",
  "Python"
];

export const contactCopy =
  "I am always open to speaking with professional contacts in financial crime, risk, and compliance. If you would like to connect, I would be glad to hear from you.";

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
