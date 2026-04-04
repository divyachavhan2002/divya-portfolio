"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        background: "var(--gradient)",
        border: "none",
        borderRadius: "9999px",
        width: "2.75rem",
        height: "2.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#fff",
        boxShadow: "0 4px 20px var(--accent-glow)",
        zIndex: 999,
        transition: "transform 0.2s ease, opacity 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <HiArrowUp size={20} />
    </button>
  );
}
