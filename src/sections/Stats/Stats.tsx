"use client";

import { ScrollReveal, AnimatedCounter, stats, strings } from "@/data";
import styles from "./Stats.module.css";

export default function Stats() {
  const handleClick = (href?: string) => {
    if (href) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.stats} aria-label={strings.stats.section_aria_label}>
      <div className="section-inner">
        <div className={styles.grid}>
          {stats.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div
                className={`${styles.statCard} ${item.href ? styles.clickable : ""}`}
                onClick={() => handleClick(item.href)}
                role={item.href ? "link" : undefined}
                tabIndex={item.href ? 0 : undefined}
                onKeyDown={(e) => { if (e.key === "Enter" && item.href) handleClick(item.href); }}
              >
                <span className={styles.value}>
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </span>
                <span className={styles.label}>{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
