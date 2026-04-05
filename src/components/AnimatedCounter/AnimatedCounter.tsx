"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: number;
  duration?: number;
  suffix?: string;
}

export default function AnimatedCounter({ value, duration = 2, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const isFloat = !Number.isInteger(value);
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
