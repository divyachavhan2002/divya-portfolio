"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TextReveal.module.css";

interface Props {
  words: string[];
  className?: string;
}

export default function TextReveal({ words, className }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`${styles.wrapper} ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.word}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
