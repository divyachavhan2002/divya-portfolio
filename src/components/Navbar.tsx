"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { strings } from "@/data/strings";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";

const navItems = [
  { label: strings.nav.about, href: "#about" },
  { label: strings.nav.skills, href: "#skills" },
  { label: strings.nav.experience, href: "#experience" },
  { label: strings.nav.education, href: "#education" },
  { label: strings.nav.projects, href: "#projects" },
  { label: strings.nav.certifications, href: "#certifications" },
  { label: strings.nav.contact, href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled
          ? "var(--bg-secondary)"
          : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.3rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
          }}
          aria-label="Scroll to top"
        >
          <span className="gradient-text">DC.</span>
        </button>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "0.15rem" }}
          className="hidden-mobile"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.45rem 0.85rem",
                borderRadius: "9999px",
                fontSize: "0.9rem",
                fontWeight: active === item.href ? 600 : 400,
                color: active === item.href ? "var(--accent)" : "var(--text-secondary)",
                transition: "color 0.2s ease",
              }}
              aria-current={active === item.href ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "9999px",
              padding: "0.45rem 0.65rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "var(--accent)",
              marginLeft: "0.5rem",
              transition: "all 0.2s ease",
            }}
          >
            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="show-mobile">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "9999px",
              padding: "0.45rem 0.65rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "var(--accent)",
            }}
          >
            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {mobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.65rem 0",
                fontSize: "1rem",
                fontWeight: active === item.href ? 600 : 400,
                color: active === item.href ? "var(--accent)" : "var(--text-primary)",
                textAlign: "left",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      {/* Responsive styles injected */}
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
