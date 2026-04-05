// ─────────────────────────────────────────────────────────────────────────────
// src/data/types.ts
//
// Single source of truth for ALL data-shape contracts used across the portfolio.
// Add or extend interfaces here whenever new data shapes are introduced.
// ─────────────────────────────────────────────────────────────────────────────

// ── Personal / Contact ───────────────────────────────────────────────────────
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumePdf: string;
}

// ── About ────────────────────────────────────────────────────────────────────
export interface AboutData {
  bio: string;
  /** Short bullet highlights shown in the "What I bring" card */
  highlights: string[];
}

// ── Skills ───────────────────────────────────────────────────────────────────
export interface SkillItem {
  name: string;
  /** Proficiency 0–100 (used for animated progress bar width) */
  level: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

// ── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  /** Human-readable date range, e.g. "Sep 2025 – Feb 2026" */
  duration: string;
  location: string;
  /** Employment type shown as a badge, e.g. "Internship" | "Full-time" */
  type: string;
  achievements: string[];
  tech: string[];
}

// ── Education ────────────────────────────────────────────────────────────────
export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  /** Human-readable date range, e.g. "Jun 2021 – Jul 2024" */
  duration: string;
  cgpa: string;
  coursework: string[];
}

// ── Projects ─────────────────────────────────────────────────────────────────
export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tech: string[];
  /** GitHub repo URL — empty string if private/unavailable */
  github: string;
  /** Live demo URL — empty string if not deployed */
  demo: string;
  /** Pinned to top and shown with a "Featured" badge */
  featured: boolean;
}

// ── Certifications ───────────────────────────────────────────────────────────
export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  /** Human-readable date range, e.g. "Jun 2024 – Jun 2025" */
  duration: string;
  description: string;
  skills: string[];
}

// ── UI Strings ───────────────────────────────────────────────────────────────
export interface NavStrings {
  about: string;
  skills: string;
  experience: string;
  education: string;
  projects: string;
  certifications: string;
  contact: string;
}

export interface HeroStrings {
  greeting: string;
  cta_resume: string;
  cta_contact: string;
}

export interface SectionHeading {
  section_title: string;
  section_subtitle: string;
}

export interface AboutStrings extends SectionHeading {
  highlights_heading: string;
}

export interface SkillsStrings extends SectionHeading {}

export interface ExperienceStrings extends SectionHeading {
  type_separator: string; // e.g. "·"
}

export interface EducationStrings extends SectionHeading {
  cgpa_label: string;
  coursework_label: string;
}

export interface ProjectsStrings extends SectionHeading {
  view_code: string;
  live_demo: string;
  featured_label: string;
}

export interface CertificationsStrings extends SectionHeading {}

export interface ContactStrings extends SectionHeading {
  intro: string;
  name_label: string;
  email_label: string;
  message_label: string;
  send_button: string;
  sending: string;
  success: string;
  error: string;
  name_placeholder: string;
  email_placeholder: string;
  message_placeholder: string;
}

export interface FooterStrings {
  designed_by: string;
  rights: string;
}

export interface UIStrings {
  nav: NavStrings;
  hero: HeroStrings;
  about: AboutStrings;
  skills: SkillsStrings;
  experience: ExperienceStrings;
  education: EducationStrings;
  projects: ProjectsStrings;
  certifications: CertificationsStrings;
  contact: ContactStrings;
  footer: FooterStrings;
}

// ── Site Config ──────────────────────────────────────────────────────────────
export interface SiteConfig {
  siteUrl: string;
  siteName: string;
  /** SEO page <title> */
  pageTitle: string;
  /** SEO meta description */
  metaDescription: string;
  /** Keywords array for SEO */
  keywords: string[];
  /** Path to Open Graph / Twitter card image under /public */
  ogImage: string;
  /** Default theme on first visit: "dark" | "light" */
  defaultTheme: "dark" | "light";
  /** Vercel deploy region, used in vercel.json */
  deployRegion: string;
}
