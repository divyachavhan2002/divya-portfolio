// ─────────────────────────────────────────────────────────────────────────────
// src/components/index.ts  —  Central component barrel
//
// Single import point for ALL components. Usage:
//
//   import { Hero, About, Skills, ScrollReveal } from "@/components";
//
// Adding a new component:
//   1. Create ComponentName/ComponentName.tsx  (+  .module.css if needed)
//   2. Add one export line here
// ─────────────────────────────────────────────────────────────────────────────

export { default as Navbar } from "./Navbar/Navbar";
export { default as Hero } from "./Hero/Hero";
export { default as About } from "./About/About";
export { default as Stats } from "./Stats/Stats";
export { default as Skills } from "./Skills/Skills";
export { default as Languages } from "./Languages/Languages";
export { default as Experience } from "./Experience/Experience";
export { default as Education } from "./Education/Education";
export { default as Projects } from "./Projects/Projects";
export { default as Certifications } from "./Certifications/Certifications";
export { default as Contact } from "./Contact/Contact";
export { default as Footer } from "./Footer/Footer";
export { default as BackToTop } from "./BackToTop/BackToTop";
export { default as ScrollReveal } from "./ScrollReveal/ScrollReveal";
export { default as Particles } from "./Particles/Particles";
export { default as TextReveal } from "./TextReveal/TextReveal";
export { default as AnimatedCounter } from "./AnimatedCounter/AnimatedCounter";
