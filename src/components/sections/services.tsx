"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Monitor,
  Printer,
  type LucideIcon,
} from "lucide-react";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

type Service = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  outcome: string;
  items: string[];
  color: string;
};

const services: Service[] = [
  {
    icon: Printer,
    title: "Impressão Digital",
    subtitle: "Peças rápidas para vender, apresentar e divulgar.",
    desc: "Produção ágil para materiais do dia a dia, com acabamento limpo e cores preparadas para causar boa impressão.",
    outcome: "Ideal para campanhas, pontos de venda e materiais institucionais.",
    items: [
      "Cartões de visita",
      "Panfletos",
      "Folders",
      "Adesivos",
      "Tags",
      "Cardápios",
      "Convites",
      "Certificados",
      "Impressões A3",
      "Materiais promocionais",
    ],
    color: "#FFD21F",
  },
  {
    icon: Monitor,
    title: "Comunicação Visual",
    subtitle: "Presença física para sua marca ser encontrada.",
    desc: "Soluções visuais para fachadas, ambientes e campanhas externas, pensadas para dar leitura rápida e presença profissional.",
    outcome: "Ideal para lojas, eventos, sinalização e frentes comerciais.",
    items: [
      "Fachadas em ACM",
      "Banners",
      "Faixas",
      "Cavaletes",
      "Wind banners",
      "Placas",
      "Toldos",
      "Sinalização interna e externa",
      "Materiais para ponto de venda",
    ],
    color: "#FF007F",
  },
  {
    icon: BriefcaseBusiness,
    title: "Materiais para Empresas",
    subtitle: "Tudo alinhado para operação, atendimento e venda.",
    desc: "Combinações de impressos e comunicação visual para negócios que precisam padronizar a apresentação da marca.",
    outcome: "Ideal para empresas que querem consistência sem complicar a produção.",
    items: [
      "Lojas",
      "Restaurantes",
      "Escritórios",
      "Clínicas",
      "Igrejas",
      "Eventos",
      "Prestadores de serviço",
      "Empreendedores",
    ],
    color: "#00D5FF",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="site-card relative flex h-full flex-col overflow-hidden rounded-lg p-5 sm:p-6"
      style={{
        background: `linear-gradient(145deg, ${service.color}12, var(--bg-card) 46%, var(--bg-secondary))`,
        border: `1px solid ${service.color}35`,
      }}
    >
      <span
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${service.color}, transparent 72%)` }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className="site-icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
          style={{ background: `${service.color}16`, border: `1px solid ${service.color}45` }}
        >
          <service.icon size={23} style={{ color: service.color }} />
        </div>

        <span
          className="rounded-md px-2.5 py-1 text-xs font-bold"
          style={{ background: `${service.color}18`, color: service.color }}
        >
          {service.items.length} opções
        </span>
      </div>

      <div className="mt-6">
        <p
          className="text-xs font-semibold uppercase"
          style={{ color: service.color }}
        >
          {service.subtitle}
        </p>
        <h3 className="site-card-title mt-3 text-2xl font-extrabold leading-tight" style={{ color: "var(--text-primary)" }}>
          {service.title}
        </h3>
        <p className="site-card-copy mt-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {service.desc}
        </p>
      </div>

      <div className="mt-6 border-t pt-5" style={{ borderColor: `${service.color}28` }}>
        <p className="site-card-copy text-sm font-semibold leading-relaxed" style={{ color: "var(--text-primary)" }}>
          {service.outcome}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="rounded-md px-2.5 py-1.5 text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.045)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--text-secondary)",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <motion.button
          type="button"
          onClick={() => openQuoteModal(service.title)}
          whileTap={{ scale: 0.97 }}
          className="btn-gradient inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={`Solicitar orçamento para ${service.title}`}
        >
          Solicitar orçamento
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.article>
  );
}

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="site-section relative overflow-hidden px-4 py-16 sm:py-20 md:py-24"
      id="servicos-detalhes"
      style={{ backgroundColor: "var(--bg-main)", borderBottom: "1px solid var(--border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="site-eyebrow text-xs font-semibold uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              O que fazemos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="site-heading mt-3 max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              Serviços gráficos para colocar sua marca em circulação
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="site-copy max-w-md text-sm leading-relaxed md:text-right"
            style={{ color: "var(--text-muted)" }}
          >
            Do impresso rápido à comunicação visual completa, organizamos cada entrega para ficar clara,
            bonita e pronta para uso.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
