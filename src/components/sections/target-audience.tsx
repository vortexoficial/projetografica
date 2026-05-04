"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MotionCarousel } from "@/components/animate-ui/community/motion-carousel";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Church,
  MessageCircle,
  PartyPopper,
  Rocket,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

const brandColors = ["#FFD21F", "#FF007F", "#00D5FF", "#8B2CFF", "#37FF8B", "#FF7A00", "#FFD21F", "#00D5FF"];

type Audience = {
  icon: LucideIcon;
  title: string;
  desc: string;
  support: string;
  tags: string[];
};

const audiences: Audience[] = [
  {
    icon: Store,
    title: "Lojas & Comércios",
    desc: "Materiais para vitrine, balcão e rua trabalharem juntos na atração de clientes.",
    support: "Mais presença na fachada, mais clareza dentro da loja.",
    tags: ["Fachadas", "Banners", "Adesivos", "PDV"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes & Bares",
    desc: "Peças resistentes e bem acabadas para cardápios, comunicação de mesa e sinalização.",
    support: "A experiência começa antes do pedido chegar.",
    tags: ["Cardápios", "Placas", "Embalagens", "Toalhas"],
  },
  {
    icon: Building2,
    title: "Escritórios & Clínicas",
    desc: "Materiais institucionais para recepção, atendimento, salas internas e apresentação.",
    support: "Organização visual que transmite confiança.",
    tags: ["Pastas", "Sinalização", "Cartões", "Recepção"],
  },
  {
    icon: Stethoscope,
    title: "Profissionais da Saúde",
    desc: "Impressos e sinalização com leitura limpa para consultórios, clínicas e atendimentos.",
    support: "Comunicação clara, discreta e profissional.",
    tags: ["Cartões", "Pastas", "Placas", "Orientações"],
  },
  {
    icon: Church,
    title: "Igrejas & ONGs",
    desc: "Comunicação para campanhas, eventos, encontros e materiais de apoio à comunidade.",
    support: "Mensagens com alcance e acabamento cuidadoso.",
    tags: ["Banners", "Faixas", "Convites", "Campanhas"],
  },
  {
    icon: PartyPopper,
    title: "Eventos & Festas",
    desc: "Convites, sinalização e peças de impacto para transformar o tema em presença visual.",
    support: "Do convite à ambientação, tudo conversa.",
    tags: ["Convites", "Faixas", "Tags", "Painéis"],
  },
  {
    icon: Wrench,
    title: "Prestadores de Serviço",
    desc: "Materiais para identificação, divulgação local e apresentação profissional em visitas.",
    support: "Sua marca lembrada no orçamento, no carro e no cartão.",
    tags: ["Uniformes", "Adesivos", "Cartões", "Folders"],
  },
  {
    icon: Rocket,
    title: "Empreendedores",
    desc: "Do primeiro cartão à fachada, um kit visual para lançar e fortalecer o negócio.",
    support: "Comece enxuto, mas com cara de marca pronta.",
    tags: ["Identidade", "Flyers", "Tags", "Fachada"],
  },
];

function AudienceCard({ item, index }: { item: Audience; index: number }) {
  const color = brandColors[index % brandColors.length];
  const { openQuoteModal } = useQuoteModal();

  return (
    <article
      className="audience-slide-card relative min-h-[26rem] overflow-hidden rounded-lg p-[1.5px] sm:min-h-[24rem]"
      style={{
        background: `linear-gradient(115deg, ${color}F2 0%, ${color}70 35%, rgba(255,255,255,0.08) 64%, transparent 100%)`,
      }}
    >
      <div
        className="site-card relative flex min-h-[inherit] flex-col rounded-[7px] p-5 sm:p-7"
        style={{
          background: `linear-gradient(145deg, ${color}10, var(--bg-card) 45%, var(--bg-secondary))`,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div
            className="site-icon-box flex h-12 w-12 items-center justify-center rounded-lg"
            style={{ background: `${color}16`, border: `1px solid ${color}45` }}
          >
            <item.icon size={25} style={{ color }} />
          </div>

          <span
            className="rounded-md px-2.5 py-1 text-xs font-bold"
            style={{ background: `${color}18`, color }}
          >
            0{index + 1}
          </span>
        </div>

        <div className="mt-7">
          <p className="text-xs font-semibold uppercase" style={{ color }}>
            Segmento atendido
          </p>
          <h3 className="site-card-title mt-3 text-2xl font-extrabold leading-tight" style={{ color: "var(--text-primary)" }}>
            {item.title}
          </h3>
          <p className="site-card-copy mt-4 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {item.desc}
          </p>
        </div>

        <div className="mt-6">
          <p className="site-card-copy text-sm font-semibold leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {item.support}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md px-2.5 py-1.5 text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.045)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--text-secondary)",
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <motion.button
            type="button"
            onClick={() => openQuoteModal("Orçamento geral")}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition-colors sm:w-auto"
            style={{
              color: "var(--text-primary)",
              border: `1px solid ${color}55`,
              background: `${color}18`,
            }}
            aria-label={`Pedir orientação para ${item.title}`}
          >
            Pedir orientação
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </article>
  );
}

export function TargetAudience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="site-section relative overflow-hidden px-4 py-16 sm:py-20 md:py-24"
      id="para-quem"
      style={{ backgroundColor: "var(--bg-main)", borderBottom: "1px solid var(--border-soft)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.55fr)] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="site-eyebrow text-xs font-semibold uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Para quem é a Gráfica Panni?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="site-heading mt-3 max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              Marcas locais, empresas e eventos com presença de gente grande
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="site-copy max-w-lg text-sm leading-relaxed lg:text-right"
            style={{ color: "var(--text-muted)" }}
          >
            Cada segmento precisa de um tipo de material. A gente organiza as melhores peças para
            sua rotina, seu espaço e seu momento de venda.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[0.34fr_0.66fr]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="rounded-lg p-[1.5px]"
            style={{
              background:
                "linear-gradient(115deg, #FFD21F 0%, #FF007F 42%, rgba(0,213,255,0.35) 70%, transparent 100%)",
            }}
          >
            <div
              className="site-card h-full rounded-[7px] p-5 sm:p-6"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,210,31,0.08), rgba(255,0,127,0.045) 48%, rgba(0,213,255,0.06)), var(--bg-card)",
              }}
            >
              <div
                className="site-icon-box flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <BadgeCheck size={22} style={{ color: "var(--yellow)" }} />
              </div>

              <h3 className="site-card-title mt-6 text-xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                Materiais certos para cada tipo de negócio
              </h3>
              <p className="site-card-copy mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                A escolha muda conforme fluxo de clientes, ambiente, urgência e objetivo da campanha.
              </p>

              <div className="mt-6 space-y-3">
                {["Visibilidade na rua", "Apresentação no atendimento", "Padronização da marca"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg px-3 py-3"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <MessageCircle size={16} style={{ color: "var(--cyan)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <MotionCarousel
              slides={audiences.map((audience, index) => (
                <AudienceCard key={audience.title} item={audience} index={index} />
              ))}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
