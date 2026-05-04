"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

const products = ["Cartão de visita", "Banner", "Adesivo", "Fachada", "Faixa", "Toldo", "Folder", "Placa"];

export function CtaMid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { openQuoteModal } = useQuoteModal();

  return (
    <section ref={ref} className="site-section relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,0,127,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,213,255,0.10) 0%, transparent 70%)", filter: "blur(50px)" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="site-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-5 md:mb-6"
          style={{ color: "var(--text-primary)" }}>
          Precisa de material gráfico?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
          {products.map((p, i) => (
            <motion.span key={i}
              initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--text-secondary)" }}>
              {p}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="site-copy text-base md:text-lg mb-7 md:mb-10" style={{ color: "var(--text-secondary)" }}>
          Fale agora com a Gráfica Panni e receba um atendimento rápido para tirar sua ideia do papel.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}>
          <motion.button
            type="button"
            onClick={() => openQuoteModal("Orçamento geral")}
            whileHover={{ scale: 1.04, filter: "brightness(1.1)" }} whileTap={{ scale: 0.96 }}
            className="btn-gradient inline-flex items-center gap-3 text-sm md:text-lg px-6 py-3.5 md:px-10 md:py-4 rounded-lg md:rounded-xl font-bold">
            <MessageCircle size={22} />
            Pedir orçamento agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
