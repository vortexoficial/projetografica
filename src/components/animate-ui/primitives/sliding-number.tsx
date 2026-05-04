"use client";

import { motion, AnimatePresence } from "motion/react";

interface SlidingNumberProps {
  value: number;
  className?: string;
}

export function SlidingNumber({ value, className }: SlidingNumberProps) {
  const direction = 1;
  const digits = String(value).split("");

  return (
    <span className={`inline-flex overflow-hidden ${className ?? ""}`}>
      {digits.map((digit, i) => (
        <span key={i} className="relative inline-block overflow-hidden h-[1.2em]">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={`${i}-${digit}`}
              className="inline-block"
              initial={{ y: direction > 0 ? "100%" : "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: direction > 0 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
}
