"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

type LiquidButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: ReactNode;
  fillColor?: string;
};

export function LiquidButton({
  children,
  className,
  fillColor = "rgba(255,255,255,0.15)",
  ...props
}: LiquidButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-3 font-semibold border-2",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      {...props}
    >
      <motion.div
        className="absolute inset-0 origin-bottom"
        style={{ background: fillColor }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
