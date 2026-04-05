"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal, skills, strings, SKILL_BAR_OBSERVER_MARGIN } from "@/data";
import styles from "./Skills.module.css";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: SKILL_BAR_OBSERVER_MARGIN });

  return (
    <div ref={ref} className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`} aria-labelledby="skills-title">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.skills.section_subtitle}</span>
          <h2 id="skills-title" className="section-title">{strings.skills.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className={styles.grid}>
          {skills.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.08}>
              <div className="card">
                <h3 className={styles.categoryTitle}>{group.category}</h3>
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.08 + si * 0.05}
                  />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
