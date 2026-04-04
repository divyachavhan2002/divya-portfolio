"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { experience } from "@/data/resume";
import { strings } from "@/data/strings";
import { HiBriefcase, HiCalendarDays, HiCheckCircle } from "react-icons/hi2";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="exp-title"
    >
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.experience.section_subtitle}</span>
          <h2 id="exp-title" className="section-title">{strings.experience.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "1.35rem",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "var(--border)",
            }}
          />

          {experience.map((job, i) => (
            <ScrollReveal key={job.id} delay={i * 0.12}>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  marginBottom: i < experience.length - 1 ? "2.5rem" : 0,
                  paddingLeft: "0.5rem",
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "50%",
                    background: "var(--gradient)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    zIndex: 1,
                    boxShadow: "0 0 0 4px var(--bg-secondary)",
                  }}
                >
                  <HiBriefcase size={16} />
                </div>

                {/* Content */}
                <div className="card" style={{ flex: 1, marginBottom: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        {job.role}
                      </h3>
                      <p
                        style={{
                          color: "var(--accent)",
                          fontWeight: 600,
                          fontSize: "0.95rem",
                        }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
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
                        {job.duration}
                      </span>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                          marginTop: "0.3rem",
                        }}
                      >
                        {job.type} · {job.location}
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.65rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {job.achievements.map((a) => (
                      <li
                        key={a}
                        style={{
                          display: "flex",
                          gap: "0.6rem",
                          alignItems: "flex-start",
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                        }}
                      >
                        <HiCheckCircle
                          size={16}
                          style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
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
