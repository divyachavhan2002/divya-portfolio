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

        <div className={styles.right}>
          <div className={styles.socials}>
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialIcon}
                data-platform={label.toLowerCase()}
              >
                <span className={styles.socialIconMark} aria-hidden="true">{icon}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={strings.footer.back_to_top_aria}
            className={styles.backToTop}
          >
            {strings.footer.back_to_top_label}
          </button>
        </div>
      </div>
    </footer>
  );
}