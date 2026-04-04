"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/resume";
import { strings } from "@/data/strings";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="projects-title"
    >
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.projects.section_subtitle}</span>
          <h2 id="projects-title" className="section-title">{strings.projects.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <motion.article
                className="card"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                aria-label={`Project: ${project.title}`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      background: "var(--gradient)",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <HiStar size={12} /> Featured
                  </span>
                )}

                {/* Project placeholder thumbnail */}
                <div
                  aria-hidden="true"
                  style={{
                    height: "160px",
                    borderRadius: "0.6rem",
                    background: "var(--gradient)",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                    opacity: 0.15,
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.05em",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <span style={{ opacity: 1, filter: "blur(0px)", fontSize: "1rem", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.65rem",
                    paddingRight: project.featured ? "5rem" : 0,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    marginBottom: "1.25rem",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        padding: "0.35rem 0.8rem",
                        border: "1px solid var(--border)",
                        borderRadius: "9999px",
                        background: "var(--bg-secondary)",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      <FaGithub size={14} />
                      {strings.projects.view_code}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="btn-primary"
                      style={{ padding: "0.35rem 0.9rem", fontSize: "0.85rem" }}
                    >
                      <FaExternalLinkAlt size={12} />
                      {strings.projects.live_demo}
                    </a>
                  )}
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
