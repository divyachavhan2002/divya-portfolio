"use client";

import { ScrollReveal, personalInfo, strings, socialLinks } from "@/data";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact() {
  const phone = personalInfo.phone.replace(/\s+/g, "");

  const contactItems = [
    { icon: <HiEnvelope size={18} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <HiPhone size={18} />, label: personalInfo.phone, href: `tel:${phone}` },
    { icon: <HiMapPin size={18} />, label: personalInfo.location, href: undefined },
  ];

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.contact.section_subtitle}</span>
          <h2 id="contact-title" className="section-title">{strings.contact.section_title}</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal delay={0.1}>
            <p className={styles.intro}>{strings.contact.intro}</p>

            <div className={styles.contactList}>
              {contactItems.map(({ icon, label, href }) => {
                const content = <><span className={styles.contactIcon}>{icon}</span>{label}</>;
                return href ? (
                  <a key={label} href={href} className={styles.contactItem}>{content}</a>
                ) : (
                  <span key={label} className={styles.contactItem}>{content}</span>
                );
              })}
            </div>

            <div className={styles.socials}>
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialCircle}
                  data-platform={label.toLowerCase()}
                >
                  <span className={styles.socialIconMark} aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className={styles.ctaCards}>
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`card ${styles.ctaCard} ${styles.whatsappCard}`}
                aria-label={strings.contact.whatsapp_cta}
              >
                <FaWhatsapp size={28} />
                <div>
                  <strong>{strings.contact.whatsapp_cta}</strong>
                  <span className={styles.ctaSub}>{strings.contact.whatsapp_sub}</span>
                </div>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className={`card ${styles.ctaCard} ${styles.emailCard}`}
                aria-label={strings.contact.email_cta}
              >
                <HiEnvelope size={28} />
                <div>
                  <strong>{strings.contact.email_cta}</strong>
                  <span className={styles.ctaSub}>{strings.contact.email_sub}</span>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
