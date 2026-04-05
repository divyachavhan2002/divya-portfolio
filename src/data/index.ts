export { default as ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
export { default as TextReveal } from "@/components/TextReveal/TextReveal";
export { default as AnimatedCounter } from "@/components/AnimatedCounter/AnimatedCounter";

export {
  personalInfo,
  about,
  skills,
  experience,
  education,
  projects,
  certifications,
  languages,
  stats,
} from "./resume";

export {
  strings,
  socialLinks,
  siteConfig,
  featureFlags,
  NAVBAR_SCROLL_THRESHOLD,
  NAV_OBSERVER_MARGIN,
  SKILL_BAR_OBSERVER_MARGIN,
} from "./config";

export type {
  PersonalInfo,
  AboutData,
  SkillItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  CertificationItem,
  LanguageItem,
  StatsItem,
  SocialLink,
  UIStrings,
  SiteConfig,
} from "./types";
