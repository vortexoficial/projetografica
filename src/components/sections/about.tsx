"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Users, Target } from "lucide-react";
import Image from "next/image";

const pillars = [
  { icon: Award,  title: "Qualidade",    desc: "Acabamento cuidadoso em cada detalhe.", color: "#FFD21F" },
  { icon: Users,  title: "Atendimento",  desc: "Você fala com quem entende do serviço.", color: "#FF007F" },
  { icon: Target, title: "Resultado",    desc: "Materiais que representam sua marca.",   color: "#00D5FF" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="site-section py-24 px-4" id="sobre"
      style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* Esquerda */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="site-eyebrow text-xs font-semibold uppercase"
            style={{ color: "var(--text-muted)" }}>
            Quem somos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mt-3 mb-6 leading-snug"
            style={{ color: "var(--text-primary)" }}>
            Sobre a{" "}
            <span className="text-gradient-main">Gráfica Panni</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-copy space-y-3 md:space-y-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>A Gráfica Panni é especializada em impressão gráfica e comunicação
              visual, oferecendo soluções completas para quem deseja divulgar,
              sinalizar, apresentar ou valorizar uma marca.</p>
            <p>Atendemos empresas, profissionais autônomos, lojas, eventos e negócios
              locais com materiais personalizados, acabamento cuidadoso e atendimento próximo.</p>
            <p>Nosso compromisso é entregar produtos gráficos que transmitam
              profissionalismo, gerem reconhecimento e ajudem sua empresa a ser vista
              da melhor forma.</p>
          </motion.div>
        </div>

        {/* Direita */}
        <div className="space-y-4">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative w-full h-44 sm:h-52 rounded-lg md:rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border-soft)" }}>
            <Image
              src="/grafica-comunicacao-visual.webp"
              alt="Gráfica Panni" fill className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-bold px-3 py-1.5 rounded-lg"
                style={{ background: "var(--gradient-main)", color: "var(--bg-main)" }}>
                Gráfica & Comunicação Visual
              </span>
            </div>
          </motion.div>

          {/* Pilares */}
          {pillars.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="site-card flex items-start gap-4 md:gap-5 rounded-lg md:rounded-2xl p-4 md:p-5 transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-soft)",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = p.color + "44")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border-soft)")}>
              <div className="site-icon-box w-12 h-12 rounded-lg md:rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${p.color}14`, border: `1px solid ${p.color}30` }}>
                <p.icon size={22} style={{ color: p.color }} />
              </div>
              <div>
                <h3 className="site-card-title font-semibold text-lg" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                <p className="site-card-copy text-sm mt-1" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
