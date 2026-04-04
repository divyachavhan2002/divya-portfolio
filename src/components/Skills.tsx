"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { skills, strings } from "@/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.35rem",
        }}
      >
        <span style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 500 }}>
          {name}
        </span>
        <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "6px",
          background: "var(--border)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay }}
          style={{
            height: "100%",
            background: "var(--gradient)",
            borderRadius: "9999px",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="skills-title"
    >
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.skills.section_subtitle}</span>
          <h2 id="skills-title" className="section-title">{strings.skills.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {skills.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.08}>
              <div className="card">
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    marginBottom: "1.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {group.category}
                </h3>
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
