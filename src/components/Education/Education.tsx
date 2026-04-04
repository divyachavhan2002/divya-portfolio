"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { education, strings } from "@/data";
import { HiAcademicCap, HiCalendarDays, HiStar } from "react-icons/hi2";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={`section ${styles.education}`} aria-labelledby="edu-title">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.education.section_subtitle}</span>
          <h2 id="edu-title" className="section-title">{strings.education.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className={styles.grid}>
          {education.map((edu, i) => (
            <ScrollReveal key={edu.id} delay={i * 0.1}>
              <div className="card">
                <div className={styles.iconBox}>
                  <div className={styles.iconSquare} aria-hidden="true">
                    <HiAcademicCap size={22} />
                  </div>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                    <p className={styles.location}>{edu.location}</p>
                  </div>
                </div>

                <div className={styles.badges}>
                  <span className={styles.badge}>
                    <HiCalendarDays size={13} />
                    {edu.duration}
                  </span>
                  <span className={styles.badge}>
                    <HiStar size={13} />
                    {strings.education.cgpa_label} {edu.cgpa}
                  </span>
                </div>

                <div>
                  <p className={styles.courseworkLabel}>{strings.education.coursework_label}</p>
                  <div className={styles.tags}>
                    {edu.coursework.map((c) => (
                      <span key={c} className="tech-tag">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
