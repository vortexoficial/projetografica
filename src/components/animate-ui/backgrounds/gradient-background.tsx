"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const gradients = [
  "radial-gradient(ellipse at 20% 50%, #1a0533 0%, #0d0d1a 50%, #001a0d 100%)",
  "radial-gradient(ellipse at 80% 20%, #0d1a33 0%, #1a0d33 50%, #0d1a00 100%)",
  "radial-gradient(ellipse at 50% 80%, #1a1a00 0%, #0d001a 50%, #001a1a 100%)",
];

interface GradientBackgroundProps {
  className?: string;
  duration?: number;
}

export function GradientBackground({
  className = "",
  duration = 8,
}: GradientBackgroundProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % gradients.length);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{ background: gradients[index] }}
        />
      </AnimatePresence>
    </div>
  );
}
