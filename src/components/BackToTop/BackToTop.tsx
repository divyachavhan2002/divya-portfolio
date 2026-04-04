"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";
import styles from "./BackToTop.module.css";

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
      className={styles.button}
    >
      <HiArrowUp size={20} />
    </button>
  );
}
