"use client";

import { motion } from "framer-motion";
import { HiArrowDownTray, HiEnvelope } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/data/resume";
import { strings } from "@/data/strings";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-primary)",
        paddingTop: "5rem",
      }}
    >
      {/* Background glow orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "35rem",
          height: "35rem",
          background: "radial-gradient(circle, rgba(124,106,247,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "25rem",
          height: "25rem",
          background: "radial-gradient(circle, rgba(192,132,252,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner" style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Text content */}
          <div style={{ flex: "1 1 380px", minWidth: 0 }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                color: "var(--accent)",
                fontWeight: 600,
                fontSize: "1rem",
                marginBottom: "0.75rem",
                letterSpacing: "0.05em",
              }}
            >
              {strings.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "0.5rem",
                color: "var(--text-primary)",
              }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="gradient-text"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginBottom: "1.25rem",
                display: "block",
              }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "520px",
                marginBottom: "2rem",
              }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
            >
              <a
                href={personalInfo.resumePdf}
                download
                className="btn-primary"
                aria-label="Download Resume PDF"
              >
                <HiArrowDownTray size={18} />
                {strings.hero.cta_resume}
              </a>
              <a
                href="#contact"
                className="btn-outline"
                aria-label="Go to contact section"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <HiEnvelope size={18} />
                {strings.hero.cta_contact}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <HiEnvelope size={18} />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            style={{ flex: "0 0 auto" }}
          >
            <div
              style={{
                width: "clamp(200px, 28vw, 320px)",
                height: "clamp(200px, 28vw, 320px)",
                borderRadius: "50%",
                background: "var(--gradient)",
                padding: "4px",
                boxShadow: "0 0 50px var(--accent-glow)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "var(--bg-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  fontSize: "clamp(4rem, 10vw, 6rem)",
                  fontWeight: 800,
                  color: "var(--accent)",
                  userSelect: "none",
                }}
                aria-label="Divya Chavhan avatar"
              >
                DC
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
