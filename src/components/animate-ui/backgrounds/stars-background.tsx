"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

function generateStars(count: number): string {
  return Array.from({ length: count }, () => {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    return `${x}px ${y}px #fff`;
  }).join(", ");
}

interface StarsBackgroundProps {
  className?: string;
  starColor?: string;
  speed?: number;
  factor?: number;
}

export function StarsBackground({
  className = "",
  starColor = "#fff",
  speed = 50,
  factor = 0.05,
}: StarsBackgroundProps) {
  const [stars1] = useState(() => generateStars(Math.floor(1000 * factor * 20)));
  const [stars2] = useState(() => generateStars(Math.floor(400 * factor * 20)));
  const [stars3] = useState(() => generateStars(Math.floor(200 * factor * 20)));

  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * factor);
      mouseY.set((e.clientY - window.innerHeight / 2) * factor);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, factor]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[#0a0a1a] ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          x: mouseX,
          y: mouseY,
          boxShadow: "none",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            width: "1px",
            height: "1px",
            boxShadow: stars1,
            animation: `twinkle ${speed / 10}s linear infinite`,
            backgroundColor: starColor,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            width: "2px",
            height: "2px",
            boxShadow: stars2,
            animation: `twinkle ${speed / 8}s linear infinite`,
            backgroundColor: starColor,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            width: "3px",
            height: "3px",
            boxShadow: stars3,
            animation: `twinkle ${speed / 5}s linear infinite`,
            backgroundColor: starColor,
          }}
        />
      </motion.div>
    </div>
  );
}
