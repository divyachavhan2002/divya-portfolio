"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { strings, featureFlags, NAVBAR_SCROLL_THRESHOLD, NAV_OBSERVER_MARGIN } from "@/data";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";
import styles from "./Navbar.module.css";

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
    const onScroll = () => setScrolled(window.scrollY > NAVBAR_SCROLL_THRESHOLD);
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
      { rootMargin: NAV_OBSERVER_MARGIN }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.logo}
          aria-label="Scroll to top"
        >
          <span className="gradient-text">DC.</span>
        </button>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`${styles.navBtn} ${active === item.href ? styles.active : ""}`}
              aria-current={active === item.href ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}

          {featureFlags.themeToggle && (
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className={styles.themeBtn}
            >
              {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
          )}
        </nav>

        {/* Mobile controls */}
        <div className={styles.mobileControls}>
          {featureFlags.themeToggle && (
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className={styles.themeBtn}
            >
              {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={styles.menuBtn}
          >
            {mobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className={styles.mobileDrawer} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`${styles.mobileNavBtn} ${active === item.href ? styles.active : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
