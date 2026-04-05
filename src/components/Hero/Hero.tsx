"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowDownTray, HiEnvelope } from "react-icons/hi2";
import { TextReveal } from "@/components";
import { personalInfo, strings, socialLinks, featureFlags } from "@/data";
import styles from "./Hero.module.css";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const rollingTitles = [
  "React Specialist",
  "Next.js Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const titleWords = [personalInfo.title, ...rollingTitles.filter((title) => title !== personalInfo.title)];

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      {/* Animated background orbs */}
      <div className={styles.orbRight} aria-hidden="true" />
      <div className={styles.orbLeft} aria-hidden="true" />
      <div className={styles.orbCenter} aria-hidden="true" />

      {/* Grid lines overlay */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={`section-inner ${styles.sectionInner}`}>
        <div className={styles.grid}>
          {/* Text content */}
          <header className={styles.textCol}>
            {/* Availability badge */}
            {personalInfo.availableForWork && (
              <motion.div {...fadeUp(0)} className={styles.availBadge}>
                <span className={styles.availDot} />
                Available for Work
              </motion.div>
            )}

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className={styles.introHeadline}
            >
              <span className={styles.introLead}>Hi, I&apos;m </span>
              <span className={styles.introName}>{personalInfo.name}</span>
              <span className={styles.introTrail}> — welcome to my portfolio!</span>
            </motion.h1>

            <motion.div {...fadeUp(0.3)} className={styles.titleRow}>
              <TextReveal words={titleWords} intervalMs={2600} className={`gradient-text ${styles.title}`} />
            </motion.div>

            <motion.p {...fadeUp(0.4)} className={styles.tagline}>
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.5)} className={styles.ctaGroup}>
              {featureFlags.resumeDownload && (
                <a
                  href={personalInfo.resumePdf}
                  download
                  className={`btn-primary ${styles.ctaBtn}`}
                  aria-label="Download Resume PDF"
                >
                  <HiArrowDownTray size={18} />
                  {strings.hero.cta_resume}
                </a>
              )}
              <a
                href="#contact"
                className={`btn-outline ${styles.ctaBtn}`}
                aria-label="Go to contact section"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <HiEnvelope size={18} />
                {strings.hero.cta_contact}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.6)} className={styles.socialGroup}>
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label === "Email" ? "Send email to Divya" : `${label} profile`}
                  className={styles.socialLink}
                  data-platform={label.toLowerCase()}
                >
                  <span className={styles.socialIcon} aria-hidden="true">{icon}</span>
                  <span className={styles.socialLabel}>{label}</span>
                </a>
              ))}
            </motion.div>
          </header>

          {/* Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
            className={styles.avatarWrapper}
          >
            <div className={styles.avatarGlow} aria-hidden="true" />
            <div className={styles.avatarRing}>
              <Image
                src={personalInfo.avatar}
                alt={`${personalInfo.name} avatar`}
                width={320}
                height={320}
                className={styles.avatarImg}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={styles.scrollIndicator}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={styles.scrollMouse}
          >
            <div className={styles.scrollDot} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
