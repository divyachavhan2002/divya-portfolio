// ─────────────────────────────────────────────────────────────────────────────
// src/data/strings.ts
//
// ✏️  All UI labels, button text, aria-labels, section headings, helper text,
// status messages, and any other display string that is NOT resume content
// lives here.  Resume content (name, bio, skills…) lives in resume.ts.
//
// To rename a button, change a heading, or localise the site, edit ONLY here.
// ─────────────────────────────────────────────────────────────────────────────

import type { UIStrings } from "./types";

export const strings: UIStrings = {
  // ── Navigation ─────────────────────────────────────────────────────────────
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
  },

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm",
    cta_resume: "Download Resume",
    cta_contact: "Contact Me",
  },

  // ── About ──────────────────────────────────────────────────────────────────
  about: {
    section_title: "About Me",
    section_subtitle: "Who I am & what I do",
    highlights_heading: "What I bring to the table",
  },

  // ── Skills ─────────────────────────────────────────────────────────────────
  skills: {
    section_title: "Technical Skills",
    section_subtitle: "Technologies & tools I work with",
  },

  // ── Experience ─────────────────────────────────────────────────────────────
  experience: {
    section_title: "Work Experience",
    section_subtitle: "My professional journey",
    type_separator: "·",
  },

  // ── Education ──────────────────────────────────────────────────────────────
  education: {
    section_title: "Education",
    section_subtitle: "Academic background",
    cgpa_label: "CGPA:",
    coursework_label: "Relevant Coursework:",
  },

  // ── Projects ───────────────────────────────────────────────────────────────
  projects: {
    section_title: "Projects",
    section_subtitle: "Things I've built",
    view_code: "View Code",
    live_demo: "Live Demo",
    featured_label: "Featured",
  },

  // ── Certifications ─────────────────────────────────────────────────────────
  certifications: {
    section_title: "Certifications",
    section_subtitle: "Professional achievements",
  },

  // ── Contact ────────────────────────────────────────────────────────────────
  contact: {
    section_title: "Get In Touch",
    section_subtitle: "Let's work together",
    intro:
      "I'm open to new opportunities. Whether you have a project idea, want to collaborate, or just want to say hi — my inbox is always open!",
    name_label: "Full Name",
    email_label: "Email Address",
    message_label: "Message",
    send_button: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Something went wrong. Please try again or email me directly.",
    name_placeholder: "Your name",
    email_placeholder: "your@email.com",
    message_placeholder: "Your message...",
  },

  // ── Footer ─────────────────────────────────────────────────────────────────
  footer: {
    designed_by: "Designed & Built by",
    rights: "All rights reserved.",
  },
};
