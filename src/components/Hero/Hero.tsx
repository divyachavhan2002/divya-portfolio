"use client";

import { motion } from "framer-motion";
import { HiArrowDownTray, HiEnvelope } from "react-icons/hi2";
import { personalInfo, strings, socialLinks, featureFlags } from "@/data";
import styles from "./Hero.module.css";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.orbRight} aria-hidden="true" />
      <div className={styles.orbLeft} aria-hidden="true" />

      <div className={`section-inner ${styles.sectionInner}`}>
        <div className={styles.grid}>
          {/* Text content */}
          <div className={styles.textCol}>
            <motion.p {...fadeUp(0)} className={styles.greeting}>
              {strings.hero.greeting}
            </motion.p>

            <motion.h1 {...fadeUp(0.1)} className={styles.name}>
              {personalInfo.name}
            </motion.h1>

            <motion.h2 {...fadeUp(0.2)} className={`gradient-text ${styles.title}`}>
              {personalInfo.title}
            </motion.h2>

            <motion.p {...fadeUp(0.3)} className={styles.tagline}>
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.4)} className={styles.ctaGroup}>
              {featureFlags.resumeDownload && (
                <a
                  href={personalInfo.resumePdf}
                  download
                  className="btn-primary"
                  aria-label="Download Resume PDF"
                >
                  <HiArrowDownTray size={18} />
                  {strings.hero.cta_resume}
                </a>
              )}
              <a
                href="#contact"
                className="btn-outline"
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
            <motion.div {...fadeUp(0.5)} className={styles.socialGroup}>
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={`${label} profile`}
                  className={styles.socialLink}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            className={styles.avatarWrapper}
          >
            <div className={styles.avatarRing}>
              <div className={styles.avatarInner} aria-label="Divya Chavhan avatar">
                DC
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
