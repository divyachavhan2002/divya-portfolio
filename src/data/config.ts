// ─────────────────────────────────────────────────────────────────────────────
// src/data/config.ts
//
// ✏️  Site-level configuration: SEO metadata, theming defaults, deployment
// settings, and feature flags.  Nothing here is component logic — it is
// pure configuration that drives layout.tsx and vercel.json equivalents.
//
// Update this file when:
//   • You change the live URL (siteUrl)
//   • You want to swap the default colour theme
//   • You add/change SEO keywords or the OG image
//   • You enable/disable optional UI features (feature flags)
// ─────────────────────────────────────────────────────────────────────────────

import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  // ── URLs ───────────────────────────────────────────────────────────────────
  siteUrl: "https://divya-portfolio.vercel.app",
  siteName: "Divya Chavhan Portfolio",

  // ── SEO ────────────────────────────────────────────────────────────────────
  pageTitle: "Divya Chavhan | Full Stack Developer",
  metaDescription:
    "Personal portfolio of Divya Chavhan — Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Based in Pune, Maharashtra.",
  keywords: [
    "Divya Chavhan",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Frontend Developer",
    "Web Developer",
    "Pune",
    "Maharashtra",
    "Portfolio",
    "SaaS",
    "Firebase",
    "Supabase",
  ],
  ogImage: "/og-image.png",

  // ── Theme ──────────────────────────────────────────────────────────────────
  /** "dark" | "light" — applied on first visit before localStorage is read */
  defaultTheme: "dark",

  // ── Deployment ─────────────────────────────────────────────────────────────
  /** Vercel region closest to your primary audience (bom1 = Mumbai) */
  deployRegion: "bom1",
};

// ─────────────────────────────────────────────────────────────────────────────
// Feature Flags
// Toggle optional UI features without touching component code.
// ─────────────────────────────────────────────────────────────────────────────
export const featureFlags = {
  /** Show the "Featured" badge on pinned project cards */
  projectFeaturedBadge: true,
  /** Show the floating Back-to-Top button */
  backToTopButton: true,
  /** Enable the dark/light mode toggle in the navbar */
  themeToggle: true,
  /** Show the "Download Resume" CTA in the Hero section */
  resumeDownload: true,
};
