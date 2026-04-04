"use client";

import { personalInfo, strings } from "@/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiEnvelope, HiHeart } from "react-icons/hi2";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
          {strings.footer.designed_by}{" "}
          <span style={{ color: "var(--accent)", fontWeight: 700 }}>{personalInfo.name}</span>
          {" "}· {year} · {strings.footer.rights}
        </p>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            { href: personalInfo.linkedin, icon: <FaLinkedin size={17} />, label: "LinkedIn" },
            { href: personalInfo.github, icon: <FaGithub size={17} />, label: "GitHub" },
            { href: `mailto:${personalInfo.email}`, icon: <HiEnvelope size={17} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "9999px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
