"use client";

import { motion } from "motion/react";
import { ShieldCheck, Zap, Clock, Star, Printer, Award, ThumbsUp, Headphones } from "lucide-react";

const items = [
  { icon: ShieldCheck, value: "100%",    label: "Qualidade garantida", color: "#FFD21F" },
  { icon: Zap,         value: "Rápido",  label: "Produção ágil",       color: "#FF7A00" },
  { icon: Clock,       value: "24h",     label: "Atendimento",         color: "#FF007F" },
  { icon: Star,        value: "Top",     label: "Acabamento premium",  color: "#8B2CFF" },
  { icon: Printer,     value: "Digital", label: "Impressão digital",   color: "#00D5FF" },
  { icon: Award,       value: "SP",      label: "São Paulo",           color: "#37FF8B" },
  { icon: ThumbsUp,    value: "✓",       label: "Entrega garantida",   color: "#FFD21F" },
  { icon: Headphones,  value: "Direto",  label: "Fale com especialista", color: "#FF007F" },
];

const track = [...items, ...items, ...items];

export function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden py-3 md:py-4"
      style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}
    >
      {/* fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-secondary), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-secondary), transparent)" }} />

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-5 md:gap-3 md:px-8 select-none shrink-0">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${item.color}14`, border: `1px solid ${item.color}30` }}>
              <item.icon size={15} style={{ color: item.color }} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs md:text-sm font-bold leading-none" style={{ color: item.color }}>{item.value}</span>
              <span className="text-xs md:text-sm leading-none" style={{ color: "var(--text-muted)" }}>{item.label}</span>
            </div>
            <span className="ml-5 md:ml-8 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--border-strong)" }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
