"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle, Star, Sliders, Zap, ImageIcon } from "lucide-react";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

const reasons = [
  { icon: MessageCircle, title: "Atendimento rápido e próximo",  desc: "Você fala diretamente com quem entende do serviço e recebe orientação para escolher a melhor solução.", color: "#FFD21F" },
  { icon: Star,          title: "Qualidade no acabamento",        desc: "Cuidamos dos detalhes para que cada material tenha uma apresentação profissional.",                    color: "#FF007F" },
  { icon: Sliders,       title: "Soluções sob medida",            desc: "Cada projeto é produzido de acordo com a necessidade da sua marca, evento ou campanha.",               color: "#00D5FF" },
  { icon: ImageIcon,     title: "Impressão com impacto",          desc: "Cores vivas, boa definição e materiais preparados para causar uma ótima primeira impressão.",          color: "#8B2CFF" },
  { icon: Zap,           title: "Agilidade na produção",          desc: "Sabemos que muitos materiais são urgentes. Por isso, trabalhamos com organização para entregar com rapidez.", color: "#37FF8B" },
];

function fadingOutline(color: string) {
  return `linear-gradient(90deg, ${color}F2 0%, ${color}B8 28%, ${color}52 58%, rgba(255,255,255,0.08) 80%, transparent 100%)`;
}

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { openQuoteModal } = useQuoteModal();

  return (
    <section ref={ref} className="site-section py-24 px-4" id="diferenciais"
      style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="site-section-header text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="site-eyebrow text-xs font-semibold uppercase"
            style={{ color: "var(--text-muted)" }}>
            Nossos diferenciais
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mt-3"
            style={{ color: "var(--text-primary)" }}>
            Por que escolher a Gráfica Panni?
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative h-full rounded-lg p-[1.5px] cursor-default transition-transform duration-300"
              style={{ background: fadingOutline(r.color) }}>
              <div
                className="site-card relative h-full rounded-[7px] p-6"
                style={{
                  background: `linear-gradient(145deg, ${r.color}0D, var(--bg-card) 42%, var(--bg-secondary))`,
                }}
              >
                <span
                  className="pointer-events-none absolute inset-y-4 left-0 w-px"
                  style={{ background: `linear-gradient(180deg, transparent, ${r.color}, transparent)` }}
                  aria-hidden="true"
                />
                <div className="site-icon-box w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: `${r.color}14`, border: `1px solid ${r.color}48` }}>
                  <r.icon size={22} style={{ color: r.color }} />
                </div>
                <h3 className="site-card-title font-semibold text-lg mb-2" style={{ color: "var(--text-primary)" }}>{r.title}</h3>
                <p className="site-card-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{r.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative h-full rounded-lg p-[1.5px]"
            style={{
              background:
                "linear-gradient(90deg, #FFD21F 0%, #FF7A00 28%, #FF007F 54%, rgba(0,213,255,0.28) 76%, transparent 100%)",
            }}>
            <div
              className="site-card relative flex h-full flex-col items-start justify-center rounded-[7px] p-6"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,210,31,0.10), rgba(255,0,127,0.08) 42%, rgba(0,213,255,0.08) 100%), var(--bg-card)",
              }}
            >
              <span
                className="pointer-events-none absolute inset-y-4 left-0 w-px"
                style={{ background: "linear-gradient(180deg, transparent, #FFD21F, #FF007F, transparent)" }}
                aria-hidden="true"
              />
              <p className="site-card-title font-semibold text-lg mb-2" style={{ color: "var(--text-primary)" }}>Pronto para começar?</p>
              <p className="site-card-copy text-sm mb-5" style={{ color: "var(--text-muted)" }}>
                Solicite um orçamento sem compromisso e receba atendimento personalizado.
              </p>
              <motion.button
                type="button"
                onClick={() => openQuoteModal("Orçamento geral")}
                whileHover={{ scale: 1.04, filter: "brightness(1.1)" }} whileTap={{ scale: 0.96 }}
                className="btn-gradient inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg">
                <MessageCircle size={15} />
                Pedir orçamento
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
