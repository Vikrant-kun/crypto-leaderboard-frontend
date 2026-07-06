"use client";

import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 0.6,
  className = "",
}: AnimatedCounterProps) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [value, duration, count]);

  return (
    <motion.span className={className}>
      {rounded}
    </motion.span>
  );
}