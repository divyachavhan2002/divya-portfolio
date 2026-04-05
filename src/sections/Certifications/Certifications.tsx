"use client";

import { ScrollReveal, certifications, strings } from "@/data";
import { HiAcademicCap, HiCalendarDays } from "react-icons/hi2";
import styles from "./Certifications.module.css";

export default function Certifications() {
  return (
    <section id="certifications" className={`section ${styles.certifications}`} aria-labelledby="cert-title">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.certifications.section_subtitle}</span>
          <h2 id="cert-title" className="section-title">{strings.certifications.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={i * 0.1}>
              <div className={`card ${styles.certCard}`}>
                <div className={styles.header}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <HiAcademicCap size={20} />
                  </div>
                  <div>
                    <h3 className={styles.title}>{cert.title}</h3>
                    <p className={styles.issuer}>{cert.issuer}</p>
                  </div>
                </div>

                <span className={styles.badge}>
                  <HiCalendarDays size={13} />
                  {cert.duration}
                </span>

                <p className={styles.description}>{cert.description}</p>

                <div className={styles.tags}>
                  {cert.skills.map((s) => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
