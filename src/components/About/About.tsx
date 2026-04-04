"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { about, personalInfo, strings } from "@/data";
import { HiCheckCircle, HiMapPin, HiEnvelope, HiPhone } from "react-icons/hi2";
import styles from "./About.module.css";

export default function About() {
  const contactChips = [
    { icon: <HiMapPin size={15} />, label: personalInfo.location },
    { icon: <HiEnvelope size={15} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <HiPhone size={15} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  ];

  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.about.section_subtitle}</span>
          <h2 id="about-title" className="section-title">{strings.about.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Bio */}
          <ScrollReveal delay={0.1}>
            <p className={styles.bio}>{about.bio}</p>

            <div className={styles.chips}>
              {contactChips.map(({ icon, label, href }) => (
                <a key={label} href={href} className={styles.chip}>
                  <span className={styles.chipIcon}>{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal delay={0.2}>
            <div className="card">
              <h3 className={styles.highlightTitle}>{strings.about.highlights_heading}</h3>
              <ul className={styles.highlightList}>
                {about.highlights.map((point) => (
                  <li key={point} className={styles.highlightItem}>
                    <HiCheckCircle size={18} className={styles.checkIcon} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
