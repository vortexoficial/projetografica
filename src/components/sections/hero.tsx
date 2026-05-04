"use client";

import { motion } from "motion/react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

export function Hero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section
      className="hero-section relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full scale-[1.08] object-cover object-center md:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/gallery/videomobile.webm" type="video/webm" />
        </video>
        <video
          className="hidden h-full w-full scale-[1.07] object-cover object-center md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/gallery/videodesktop.webm" type="video/webm" />
        </video>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,10,0.62) 0%, rgba(5,7,10,0.48) 42%, rgba(5,7,10,0.82) 100%)",
        }}
      />

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Fade bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg-main), transparent)" }}
      />

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-5 sm:mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Sua marca impressa com{" "}
          <motion.span
            className="text-gradient-brand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            qualidade
          </motion.span>
          {", agilidade e impacto visual."}
        </motion.h1>

        {/* Underline decorativo */}
        <motion.div
          initial={{ scaleX: 0, originX: 0.5 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="divider-brand max-w-xs mx-auto mb-8"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="hero-copy text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Na Gráfica Panni, transformamos ideias em materiais gráficos que chamam
          atenção, fortalecem sua identidade e ajudam o seu negócio a vender mais.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hero-actions flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          {/* Botão primário, gradiente */}
          <motion.button
            type="button"
            onClick={() => openQuoteModal("Orçamento geral")}
            whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.96 }}
            className="hero-button btn-gradient inline-flex items-center justify-center gap-2 text-sm sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold"
          >
            <MessageCircle size={20} />
            Solicitar orçamento pelo WhatsApp
          </motion.button>

          {/* Botão secundário */}
          <motion.button
            whileHover={{ background: "linear-gradient(135deg, #00D5FF 0%, #8B2CFF 100%)", color: "#05070A" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="hero-button inline-flex items-center justify-center text-sm sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition-colors"
            style={{
              border: "1px solid rgba(255,255,255,0.45)",
              color: "var(--text-primary)",
              background: "transparent",
            }}
          >
            Ver serviços
          </motion.button>
        </motion.div>

        {/* Tags de serviços */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-tags mt-10 sm:mt-14 flex flex-wrap justify-center gap-2"
        >
          {["Cartão de Visita", "Banner", "Fachada ACM", "Adesivo", "Faixa", "Toldo", "Folder", "Impressão Digital"].map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85 + i * 0.05 }}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--text-secondary)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} style={{ color: "var(--text-muted)" }} />
      </motion.div>
    </section>
  );
}
