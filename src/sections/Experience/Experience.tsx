"use client";

import { ScrollReveal, experience, strings } from "@/data";
import { HiBriefcase, HiCalendarDays, HiCheckCircle } from "react-icons/hi2";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`} aria-labelledby="exp-title">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.experience.section_subtitle}</span>
          <h2 id="exp-title" className="section-title">{strings.experience.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {experience.map((job, i) => (
            <ScrollReveal key={job.id} delay={i * 0.12}>
              <div className={styles.entry}>
                <div className={styles.dot} aria-hidden="true">
                  <HiBriefcase size={16} />
                </div>

                <div className={`card ${styles.content}`}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.role}>{job.role}</h3>
                      <p className={styles.company}>{job.company}</p>
                    </div>
                    <div className={styles.headerRight}>
                      <span className={styles.badge}>
                        <HiCalendarDays size={13} />
                        {job.duration}
                      </span>
                      <p className={styles.meta}>
                        {job.type} {strings.experience.type_separator} {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className={styles.achievements}>
                    {job.achievements.map((a) => (
                      <li key={a} className={styles.achievementItem}>
                        <HiCheckCircle size={16} className={styles.achievementIcon} />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tags}>
                    {job.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
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
