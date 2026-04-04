"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { about, personalInfo, strings } from "@/data";
import { HiCheckCircle, HiMapPin, HiEnvelope, HiPhone } from "react-icons/hi2";

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="about-title"
    >
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.about.section_subtitle}</span>
          <h2 id="about-title" className="section-title">{strings.about.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Bio */}
          <ScrollReveal delay={0.1}>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                fontSize: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              {about.bio}
            </p>

            {/* Contact info chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { icon: <HiMapPin size={15} />, label: personalInfo.location },
                { icon: <HiEnvelope size={15} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <HiPhone size={15} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.4rem 0.85rem",
                    borderRadius: "9999px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    cursor: href ? "pointer" : "default",
                  }}
                  onMouseEnter={(e) => href && (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => href && (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <span style={{ color: "var(--accent)" }}>{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal delay={0.2}>
            <div
              className="card"
              style={{ background: "var(--bg-card)" }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
              {strings.about.highlights_heading}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                {about.highlights.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      gap: "0.65rem",
                      alignItems: "flex-start",
                      color: "var(--text-secondary)",
                      fontSize: "0.93rem",
                    }}
                  >
                    <HiCheckCircle
                      size={18}
                      style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
