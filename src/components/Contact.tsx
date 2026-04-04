"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { personalInfo, strings } from "@/data";
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiPaperAirplane,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
      // Using EmailJS — configure env vars: NEXT_PUBLIC_EMAILJS_SERVICE_ID, _TEMPLATE_ID, _PUBLIC_KEY
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: personalInfo.email,
          },
          publicKey
        );
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        // Fallback: open mailto
        window.open(
          `mailto:${personalInfo.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom%3A%20${encodeURIComponent(form.email)}`
        );
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.8rem 1rem",
    background: "var(--bg-secondary)",
    border: "1.5px solid var(--border)",
    borderRadius: "0.65rem",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="contact-title"
    >
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-tag">{strings.contact.section_subtitle}</span>
          <h2 id="contact-title" className="section-title">{strings.contact.section_title}</h2>
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
          {/* Info column */}
          <ScrollReveal delay={0.1}>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "2rem",
                fontSize: "0.97rem",
              }}
            >
            {strings.contact.intro}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { icon: <HiEnvelope size={18} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <HiPhone size={18} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <HiMapPin size={18} />, label: personalInfo.location, href: undefined },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    transition: "color 0.2s",
                    cursor: href ? "pointer" : "default",
                  }}
                  onMouseEnter={(e) => href && (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => href && (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <span
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "9999px",
                      background: "var(--accent-glow)",
                      border: "1px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
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
                <FaLinkedin size={17} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
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
                <FaGithub size={17} />
              </a>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
              noValidate
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="cf-name"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                  }}
                >
                  {strings.contact.name_label}
                </label>
                <input
                  id="cf-name"
                  type="text"
                  required
                  placeholder={strings.contact.name_placeholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label
                  htmlFor="cf-email"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                  }}
                >
                  {strings.contact.email_label}
                </label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  placeholder={strings.contact.email_placeholder}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label
                  htmlFor="cf-message"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                  }}
                >
                  {strings.contact.message_label}
                </label>
                <textarea
                  id="cf-message"
                  required
                  rows={5}
                  placeholder={strings.contact.message_placeholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
                style={{ justifyContent: "center" }}
                aria-label="Send message"
              >
                <HiPaperAirplane size={17} />
                {status === "sending" ? strings.contact.sending : strings.contact.send_button}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  style={{ color: "#4ade80", fontSize: "0.88rem", textAlign: "center" }}
                >
                  {strings.contact.success}
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  style={{ color: "#f87171", fontSize: "0.88rem", textAlign: "center" }}
                >
                  {strings.contact.error}
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
