"use client";

import { motion, AnimatePresence, type HTMLMotionProps } from "motion/react";
import { useCallback, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RippleItem {
  id: number;
  x: number;
  y: number;
}

type RippleButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: ReactNode;
  rippleColor?: string;
  duration?: number;
};

export function RippleButton({
  children,
  className,
  rippleColor = "rgba(255,255,255,0.4)",
  duration = 0.6,
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<RippleItem[]>([]);
  const idRef = useRef(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = idRef.current++;
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, duration * 1000 + 100);
      onClick?.(e);
    },
    [onClick, duration]
  );

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-3 font-semibold transition-colors",
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      {...props}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              x: "-50%",
              y: "-50%",
              background: rippleColor,
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 400, height: 400, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
}
