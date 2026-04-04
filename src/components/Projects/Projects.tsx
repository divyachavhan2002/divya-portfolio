"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { projects, strings } from "@/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="projects-title">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.projects.section_subtitle}</span>
          <h2 id="projects-title" className="section-title">{strings.projects.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <motion.article
                className={`card ${styles.projectCard}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                aria-label={`Project: ${project.title}`}
              >
                {project.featured && (
                  <span className={styles.featuredBadge}>
                    <HiStar size={12} /> {strings.projects.featured_label}
                  </span>
                )}

                <div className={styles.thumbnail} aria-hidden="true">
                  <span className={styles.thumbnailLabel}>
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className={styles.codeLink}
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
