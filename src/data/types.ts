import type { ReactNode } from "react";

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
  avatar: string;
  availableForWork: boolean;
}

export interface AboutData {
  bio: string;
  highlights: string[];
}

export interface StatsItem {
  label: string;
  value: number;
  suffix?: string;
  href?: string; // section anchor e.g. "#projects"
}

export interface LanguageItem {
  name: string;
  proficiency: string; // e.g. "Native" | "Fluent" | "Professional"
  level: number;       // 0–100, drives the animated bar width
}

export interface SkillItem {
  name: string;
  level: number; // 0–100, drives the animated progress bar width
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string; // e.g. "Sep 2025 – Feb 2026"
  location: string;
  type: string;     // badge label e.g. "Internship" | "Full-time"
  achievements: string[];
  tech: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string; // e.g. "Jun 2021 – Jul 2024"
  cgpa: string;
  coursework: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;   // optional screenshot under /public
  github: string;   // empty string if private/unavailable
  demo: string;     // empty string if not deployed
  featured: boolean;
}

export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  duration: string; // e.g. "Jun 2024 – Jun 2025"
  description: string;
  skills: string[];
}

export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

export interface SiteConfig {
  siteUrl: string;
  siteName: string;
  pageTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  defaultTheme: "dark" | "light";
}

// ── UI String interfaces — shape must match locales/en.json exactly ───────────

export interface NavStrings {
  home: string; about: string; skills: string; languages: string;
  experience: string; education: string; projects: string;
  certifications: string; contact: string;
}

export interface HeroStrings {
  cta_resume: string;
  cta_contact: string;
  available_for_work: string;
  intro_prefix: string;
  intro_suffix: string;
  rolling_titles: string[];
  resume_download_aria_label: string;
  contact_scroll_aria_label: string;
}

export interface SectionHeading {
  section_title: string;
  section_subtitle: string;
}

export interface AboutStrings extends SectionHeading {
  highlights_heading: string;
}

export type SkillsStrings = SectionHeading;

export interface ExperienceStrings extends SectionHeading {
  type_separator: string;
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

export type CertificationsStrings = SectionHeading;
export type LanguagesStrings = SectionHeading;

export interface ContactStrings extends SectionHeading {
  intro: string;
  whatsapp_cta: string;
  whatsapp_sub: string;
  email_cta: string;
  email_sub: string;
}

export interface FooterStrings {
  designed_by: string;
  rights: string;
  back_to_top_label: string;
  back_to_top_aria: string;
}

export interface StatsStrings {
  section_aria_label: string;
}

export interface NavbarStrings {
  logo_aria_label: string;
  primary_nav_aria_label: string;
  mobile_nav_aria_label: string;
  toggle_menu_aria_label: string;
  theme_toggle_to_light: string;
  theme_toggle_to_dark: string;
}

export interface SocialStrings {
  email_aria_label: string;
  profile_aria_suffix: string;
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
  languages: LanguagesStrings;
  contact: ContactStrings;
  footer: FooterStrings;
  stats: StatsStrings;
  navbar: NavbarStrings;
  social: SocialStrings;
}
