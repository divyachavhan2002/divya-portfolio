// ─────────────────────────────────────────────────────────────────────────────
// src/data/index.ts  —  Barrel export (single import point)
//
// Every component in the project imports from HERE, not from individual files.
//
//   import { personalInfo, strings, siteConfig } from "@/data";
//
// This means:
//   • You can reorganise the data files without touching any component.
//   • Adding a new data file = one line here, then use it everywhere.
// ─────────────────────────────────────────────────────────────────────────────

// Resume data (content)
export {
  personalInfo,
  about,
  skills,
  experience,
  education,
  projects,
  certifications,
} from "./resume";

// UI strings (labels / display text)
export { strings } from "./strings";

// Site-level config & feature flags
export { siteConfig, featureFlags } from "./config";

// Shared constants (thresholds, animation values, social links)
export {
  NAVBAR_SCROLL_THRESHOLD,
  BACK_TO_TOP_THRESHOLD,
  NAV_OBSERVER_MARGIN,
  REVEAL_OBSERVER_MARGIN,
  SKILL_BAR_OBSERVER_MARGIN,
  REVEAL_DURATION,
  REVEAL_OFFSET,
  REVEAL_X_OFFSET,
  socialLinks,
} from "./constants";

export type { SocialLink } from "./constants";

// TypeScript interfaces (for use in components that need typed props)
export type {
  PersonalInfo,
  AboutData,
  SkillItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  CertificationItem,
  UIStrings,
  SiteConfig,
} from "./types";
