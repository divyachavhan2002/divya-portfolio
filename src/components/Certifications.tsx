"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { certifications } from "@/data/resume";
import { strings } from "@/data/strings";
import { HiAcademicCap, HiCalendarDays } from "react-icons/hi2";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="cert-title"
    >
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.certifications.section_subtitle}</span>
          <h2 id="cert-title" className="section-title">{strings.certifications.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={i * 0.1}>
              <div className="card" style={{ borderLeft: "3px solid var(--accent)" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "10px",
                      background: "var(--accent-glow)",
                      border: "1px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--accent)",
                    }}
                    aria-hidden="true"
                  >
                    <HiAcademicCap size={20} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {cert.title}
                    </h3>
                    <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.88rem" }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    background: "var(--accent-glow)",
                    border: "1px solid var(--accent)",
                    padding: "0.2rem 0.7rem",
                    borderRadius: "9999px",
                    marginBottom: "1rem",
                  }}
                >
                  <HiCalendarDays size={13} />
                  {cert.duration}
                </span>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    marginBottom: "1.25rem",
                  }}
                >
                  {cert.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
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
