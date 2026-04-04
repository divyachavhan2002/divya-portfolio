// ─────────────────────────────────────────────────────────────────────────────
// src/data/constants.ts
//
// Reusable magic values, thresholds, and shared configuration objects used
// across multiple components. Centralising them here eliminates scattered
// hard-coded numbers and repeated data structures.
//
// Why?
//   • Change the navbar scroll threshold in ONE place, not inside Navbar.tsx.
//   • Social links are defined ONCE, consumed by Hero, Contact, and Footer.
//   • Animation timing is consistent across all ScrollReveal usages.
// ─────────────────────────────────────────────────────────────────────────────

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { personalInfo } from "./resume";
import type { ReactNode } from "react";

// ── Scroll / Intersection ────────────────────────────────────────────────────

/** Pixel threshold before the navbar shows a solid background */
export const NAVBAR_SCROLL_THRESHOLD = 20;

/** Pixel threshold before the "Back to top" button becomes visible */
export const BACK_TO_TOP_THRESHOLD = 400;

/** IntersectionObserver rootMargin for active-section detection in Navbar */
export const NAV_OBSERVER_MARGIN = "-40% 0px -55% 0px";

/** IntersectionObserver margin used by ScrollReveal / Skills bar triggers */
export const REVEAL_OBSERVER_MARGIN = "-80px";

/** IntersectionObserver margin for skill-bar in-view trigger */
export const SKILL_BAR_OBSERVER_MARGIN = "-50px";

// ── Animation defaults ───────────────────────────────────────────────────────

/** Standard reveal animation duration (seconds) used by ScrollReveal */
export const REVEAL_DURATION = 0.6;

/** Standard reveal Y-offset (pixels) for the "up" direction */
export const REVEAL_OFFSET = 40;

/** Standard reveal X-offset (pixels) for "left" / "right" directions */
export const REVEAL_X_OFFSET = 40;

// ── Social links (shared across Hero / Contact / Footer) ─────────────────────

export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: personalInfo.linkedin,
    icon: FaLinkedinIn({ size: 16 }),
    label: "LinkedIn",
  },
  {
    href: personalInfo.github,
    icon: FaGithub({ size: 16 }),
    label: "GitHub",
  },
  {
    href: `mailto:${personalInfo.email}`,
    icon: HiEnvelope({ size: 16 }),
    label: "Email",
  },
];
