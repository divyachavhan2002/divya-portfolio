"use client";

import { personalInfo, strings, socialLinks } from "@/data";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          {strings.footer.designed_by}{" "}
          <span className={styles.author}>{personalInfo.name}</span>
          {" "}· {year} · {strings.footer.rights}
        </p>

        <div className={styles.socials}>
          {socialLinks.map(({ href, icon, label }) => (
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
