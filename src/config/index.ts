import type { SiteConfig } from "@/data/types";

const envTheme = process.env.NEXT_PUBLIC_DEFAULT_THEME;
const defaultTheme: "dark" | "light" = envTheme === "light" ? "light" : "dark";

export const siteConfig: SiteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://divya-portfolio.vercel.app",
  siteName: "Divya Chavhan Portfolio",
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
    "Supabase"
  ],
  ogImage: "/og-image.png",
  defaultTheme,
  deployRegion: process.env.NEXT_PUBLIC_DEPLOY_REGION ?? "bom1"
};

export const featureFlags = {
  projectFeaturedBadge: process.env.NEXT_PUBLIC_FEATURE_PROJECT_BADGE !== "false",
  backToTopButton: process.env.NEXT_PUBLIC_FEATURE_BACK_TO_TOP !== "false",
  themeToggle: process.env.NEXT_PUBLIC_FEATURE_THEME_TOGGLE !== "false",
  resumeDownload: process.env.NEXT_PUBLIC_FEATURE_RESUME_DOWNLOAD !== "false"
} as const;

export const NAVBAR_SCROLL_THRESHOLD = 20;
export const BACK_TO_TOP_THRESHOLD = 400;
export const NAV_OBSERVER_MARGIN = "-40% 0px -55% 0px";
export const REVEAL_OBSERVER_MARGIN = "-80px";
export const SKILL_BAR_OBSERVER_MARGIN = "-50px";

export const REVEAL_DURATION = 0.6;
export const REVEAL_OFFSET = 40;
export const REVEAL_X_OFFSET = 40;
