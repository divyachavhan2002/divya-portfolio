"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";
import { featureFlags, BACK_TO_TOP_THRESHOLD } from "@/data";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > BACK_TO_TOP_THRESHOLD);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!featureFlags.backToTopButton || !visible) return null;

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
