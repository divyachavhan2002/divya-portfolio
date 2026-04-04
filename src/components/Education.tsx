"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { education } from "@/data/resume";
import { strings } from "@/data/strings";
import { HiAcademicCap, HiCalendarDays, HiStar } from "react-icons/hi2";

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="edu-title"
    >
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.education.section_subtitle}</span>
          <h2 id="edu-title" className="section-title">{strings.education.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {education.map((edu, i) => (
            <ScrollReveal key={edu.id} delay={i * 0.1}>
              <div className="card">
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "12px",
                      background: "var(--gradient)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#fff",
                    }}
                    aria-hidden="true"
                  >
                    <HiAcademicCap size={22} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem" }}>
                      {edu.institution}
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>
                      {edu.location}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      background: "var(--accent-glow)",
                      border: "1px solid var(--accent)",
                      padding: "0.2rem 0.7rem",
                      borderRadius: "9999px",
                    }}
                  >
                    <HiCalendarDays size={13} />
                    {edu.duration}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      background: "var(--accent-glow)",
                      border: "1px solid var(--accent)",
                      padding: "0.2rem 0.7rem",
                      borderRadius: "9999px",
                    }}
                  >
                    <HiStar size={13} />
                    {strings.education.cgpa_label} {edu.cgpa}
                  </span>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.65rem",
                    }}
                  >
                    {strings.education.coursework_label}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
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
