"use client";

import { personalInfo, strings } from "@/data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { href: personalInfo.linkedin, icon: <FaLinkedinIn size={15} />, label: "LinkedIn" },
    { href: personalInfo.github, icon: <FaGithub size={15} />, label: "GitHub" },
    { href: `mailto:${personalInfo.email}`, icon: <HiEnvelope size={15} />, label: "Email" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          {strings.footer.designed_by}{" "}
          <span className={styles.author}>{personalInfo.name}</span>
          {" "}· {year} · {strings.footer.rights}
        </p>

        <div className={styles.socials}>
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className={styles.socialIcon}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
