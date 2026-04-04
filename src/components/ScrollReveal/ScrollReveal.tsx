"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { REVEAL_DURATION, REVEAL_OFFSET, REVEAL_X_OFFSET, REVEAL_OBSERVER_MARGIN } from "@/data";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: REVEAL_OBSERVER_MARGIN });

  const initial = {
    opacity: 0,
    y: direction === "up" ? REVEAL_OFFSET : 0,
    x: direction === "left" ? -REVEAL_X_OFFSET : direction === "right" ? REVEAL_X_OFFSET : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: REVEAL_DURATION, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
