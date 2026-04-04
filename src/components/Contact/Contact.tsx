"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { personalInfo, strings } from "@/data";
import { HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane } from "react-icons/hi2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "./Contact.module.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(serviceId, templateId, {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: personalInfo.email,
        }, publicKey);
      } else {
        window.open(
          `mailto:${personalInfo.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom%3A%20${encodeURIComponent(form.email)}`
        );
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    { icon: <HiEnvelope size={18} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <HiPhone size={18} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
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
          {/* Info column */}
          <ScrollReveal delay={0.1}>
            <p className={styles.intro}>{strings.contact.intro}</p>

            <div className={styles.contactList}>
              {contactItems.map(({ icon, label, href }) => (
                <a key={label} href={href} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{icon}</span>
                  {label}
                </a>
              ))}
            </div>

            <div className={styles.socials}>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialCircle}>
                <FaLinkedinIn size={17} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialCircle}>
                <FaGithub size={17} />
              </a>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className={`card ${styles.form}`} noValidate aria-label="Contact form">
              <div>
                <label htmlFor="cf-name" className={styles.fieldLabel}>{strings.contact.name_label}</label>
                <input id="cf-name" type="text" required placeholder={strings.contact.name_placeholder} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={styles.input} />
              </div>

              <div>
                <label htmlFor="cf-email" className={styles.fieldLabel}>{strings.contact.email_label}</label>
                <input id="cf-email" type="email" required placeholder={strings.contact.email_placeholder} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={styles.input} />
              </div>

              <div>
                <label htmlFor="cf-message" className={styles.fieldLabel}>{strings.contact.message_label}</label>
                <textarea id="cf-message" required rows={5} placeholder={strings.contact.message_placeholder} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={styles.textarea} />
              </div>

              <button type="submit" disabled={status === "sending"} className={`btn-primary ${styles.submitBtn}`} aria-label="Send message">
                <HiPaperAirplane size={17} />
                {status === "sending" ? strings.contact.sending : strings.contact.send_button}
              </button>

              {status === "success" && <p role="status" className={styles.success}>{strings.contact.success}</p>}
              {status === "error" && <p role="alert" className={styles.error}>{strings.contact.error}</p>}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
