"use client";

import { ScrollReveal, AnimatedCounter } from "@/components";
import { stats } from "@/data";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stats} aria-label="Quick stats">
      <div className="section-inner">
        <div className={styles.grid}>
          {stats.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className={styles.statCard}>
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
