"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./TextReveal.module.css";

interface Props {
  words: string[];
  className?: string;
  intervalMs?: number;
}

export default function TextReveal({ words, className, intervalMs = 3000 }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const safeWords = words.length > 0 ? words : [""];
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!mounted || shouldReduceMotion || safeWords.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeWords.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, mounted, safeWords.length, shouldReduceMotion]);

  if (!mounted || shouldReduceMotion) {
    return (
      <span className={`${styles.wrapper} ${className ?? ""}`} aria-live="polite" aria-atomic="true">
        <span className={styles.word}>{safeWords[0]}</span>
      </span>
    );
  }

  return (
    <span className={`${styles.wrapper} ${className ?? ""}`} aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={safeWords[index]}
          initial={false}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.word}
        >
          {safeWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
