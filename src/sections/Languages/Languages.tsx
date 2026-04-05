"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal, languages, strings } from "@/data";
import { HiLanguage } from "react-icons/hi2";
import styles from "./Languages.module.css";

function LanguageBar({ name, proficiency, level, delay }: {
  name: string;
  proficiency: string;
  level: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={styles.langRow}>
      <div className={styles.langMeta}>
        <div className={styles.langInfo}>
          <HiLanguage size={16} className={styles.langIcon} />
          <span className={styles.langName}>{name}</span>
        </div>
        <span className={styles.langProf}>{proficiency}</span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

export default function Languages() {
  return (
    <section id="languages" className={`section ${styles.languages}`} aria-labelledby="lang-title">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.languages.section_subtitle}</span>
          <h2 id="lang-title" className="section-title">{strings.languages.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className={`card ${styles.card}`}>
            {languages.map((lang, i) => (
              <LanguageBar
                key={lang.name}
                name={lang.name}
                proficiency={lang.proficiency}
                level={lang.level}
                delay={i * 0.15}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
