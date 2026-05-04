"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

export function CtaFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { openQuoteModal } = useQuoteModal();

  return (
    <section ref={ref} className="site-section py-24 px-4" id="contato"
      style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="site-card relative rounded-lg md:rounded-3xl p-6 sm:p-8 md:p-16 overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, rgba(255,210,31,0.08), rgba(255,0,127,0.10), rgba(0,213,255,0.08))",
            border: "1px solid var(--border-strong)",
          }}>
          {/* Glows */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,0,127,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,213,255,0.10) 0%, transparent 70%)", filter: "blur(40px)" }} />

          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="site-eyebrow text-xs font-semibold uppercase"
            style={{ color: "var(--text-muted)" }}>
            Vamos começar?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-3 md:mt-4 mb-3 md:mb-4"
            style={{ color: "var(--text-primary)" }}>
            Vamos criar o material ideal para sua marca?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-copy text-base md:text-lg mb-7 md:mb-10" style={{ color: "var(--text-secondary)" }}>
            Entre em contato e solicite seu orçamento personalizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              type="button"
              onClick={() => openQuoteModal("Orçamento geral")}
              whileHover={{ scale: 1.04, filter: "brightness(1.1)" }} whileTap={{ scale: 0.96 }}
              className="btn-gradient inline-flex items-center justify-center gap-2 text-sm md:text-base px-6 py-3.5 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold">
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ background: "linear-gradient(135deg, #00D5FF 0%, #8B2CFF 100%)", color: "var(--bg-main)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center text-sm md:text-base px-6 py-3.5 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold transition-colors"
              style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)", background: "transparent" }}>
              Saiba mais sobre nós
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
