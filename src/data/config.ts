import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import en from "@/locales/en.json";
import type { SiteConfig, UIStrings, SocialLink } from "./types";
import { personalInfo } from "./resume";

// UI strings sourced from locales/en.json — edit that file to change any label
export const strings: UIStrings = en as UIStrings;

// Social links built from personalInfo so URLs stay in one place
export const socialLinks: SocialLink[] = [
  { href: personalInfo.linkedin, icon: FaLinkedinIn({ size: 17 }), label: "LinkedIn" },
  { href: personalInfo.github, icon: FaGithub({ size: 17 }), label: "GitHub" },
  { href: `mailto:${personalInfo.email}`, icon: FaEnvelope({ size: 17 }), label: "Email" },
];

// Read default theme from env; falls back to "dark" if not set
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
        "Supabase",
    ],
    ogImage: "/og-image.png",
    defaultTheme,
};

// Set any flag to "false" via environment variable to disable the feature
export const featureFlags = {
    projectFeaturedBadge: process.env.NEXT_PUBLIC_FEATURE_PROJECT_BADGE !== "false",
    themeToggle: process.env.NEXT_PUBLIC_FEATURE_THEME_TOGGLE !== "false",
    resumeDownload: process.env.NEXT_PUBLIC_FEATURE_RESUME_DOWNLOAD !== "false",
} as const;

export const NAVBAR_SCROLL_THRESHOLD = 20;    // px from top before navbar gets shadow
export const NAV_OBSERVER_MARGIN = "-40% 0px -55% 0px"; // active section detection
export const SKILL_BAR_OBSERVER_MARGIN = "-50px"; // trigger point for skill bar animation
