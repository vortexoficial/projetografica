"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Palette, Layers, Zap } from "lucide-react";

const pillars = [
  { icon: Palette, text: "Criatividade", pct: 75, color: "#FFD21F" },
  { icon: Layers,  text: "Acabamento",   pct: 90, color: "#FF007F" },
  { icon: Zap,     text: "Tecnologia",   pct: 82, color: "#00D5FF" },
];

export function HighlightStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="site-section relative overflow-hidden py-20 md:py-28 px-4"
      style={{ backgroundColor: "var(--bg-secondary)" }}>

      {/* Linha topo */}
      <motion.hr className="divider-brand absolute top-0 left-0 right-0 border-none"
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }} />

      {/* Palavra decorativa */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span className="text-[7rem] sm:text-[14rem] md:text-[18rem] font-black leading-none whitespace-nowrap"
          style={{ color: "rgba(255,255,255,0.018)" }}>PANNI</span>
      </div>

      {/* Glow magenta direita */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,44,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:gap-20 items-center">

          {/* Esquerda */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="site-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-5 md:mb-6"
              style={{ color: "var(--text-primary)" }}>
              Ideias que{" "}
              <span className="text-gradient-main">ganham cor.</span>
              <br />
              Resultados que{" "}
              <span className="text-gradient-main">impressionam.</span>
            </motion.h2>

            <motion.button
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              whileHover={{ x: 4 }}
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--yellow)" }}>
              Ver todos os serviços
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={16} />
              </motion.span>
            </motion.button>
          </div>

          {/* Direita */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="site-copy text-base md:text-lg leading-relaxed mb-7 md:mb-10"
              style={{ color: "var(--text-secondary)" }}>
              Cada detalhe importa quando o assunto é apresentar sua marca. Por isso,
              unimos criatividade, acabamento e tecnologia para entregar materiais com
              visual profissional e alta qualidade.
            </motion.p>

            <div className="flex flex-col gap-4 md:gap-5">
              {pillars.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4">
                  <div className="flex-1 h-[2px] rounded-full relative overflow-hidden"
                    style={{ backgroundColor: "var(--border-soft)" }}>
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}99)` }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${p.pct}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex items-center gap-2 shrink-0 w-36">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: `${p.color}14`, border: `1px solid ${p.color}30` }}>
                      <p.icon size={13} style={{ color: p.color }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{p.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              whileHover={{ x: 4 }}
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-7 inline-flex md:hidden items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--yellow)" }}>
              Ver todos os serviços
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={16} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>

      <motion.hr className="divider-brand absolute bottom-0 left-0 right-0 border-none"
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }} />
    </section>
  );
}
