"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MotionCarouselProps {
  slides: React.ReactNode[];
  className?: string;
}

export function MotionCarousel({ slides, className }: MotionCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + slides.length) % slides.length);
    },
    [slides.length]
  );

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 240, damping: 24, mass: 1 }}
            className="w-full"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors"
          style={{ color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}
          aria-label="Slide anterior"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex min-w-0 flex-wrap items-center justify-center gap-2">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              animate={{
                width: i === current ? 24 : 8,
                backgroundColor: i === current ? "#FFD21F" : "rgba(255,255,255,0.25)",
              }}
              className="h-2 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors"
          style={{ color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}
          aria-label="Próximo slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
