import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/sections/Hero/Hero"));
const StatsSection = dynamic(() => import("@/sections/Stats/Stats"));
const AboutSection = dynamic(() => import("@/sections/About/About"));
const SkillsSection = dynamic(() => import("@/sections/Skills/Skills"));
const ExperienceSection = dynamic(() => import("@/sections/Experience/Experience"));
const EducationSection = dynamic(() => import("@/sections/Education/Education"));
const ProjectsSection = dynamic(() => import("@/sections/Projects/Projects"));
const CertificationsSection = dynamic(() => import("@/sections/Certifications/Certifications"));
const LanguagesSection = dynamic(() => import("@/sections/Languages/Languages"));
const ContactSection = dynamic(() => import("@/sections/Contact/Contact"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <LanguagesSection />
      <ContactSection />
    </>
  );
}
