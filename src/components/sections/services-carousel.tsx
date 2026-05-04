"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import {
  ArrowRight,
  Badge,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Flag,
  Images,
  MenuSquare,
  PanelTop,
  Printer,
  ScrollText,
  Sparkles,
  Sticker,
  Tags,
  type LucideIcon,
} from "lucide-react";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

type GraphicService = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  image?: string;
  imageAlt?: string;
};

const services: GraphicService[] = [
  {
    icon: Badge,
    title: "Cartões de visita",
    desc: "Apresentação profissional com acabamento limpo e memorável.",
    color: "#FFD21F",
    image: "/imgcards/cartoes-de-visita.webp",
    imageAlt: "Cartões de visita impressos",
  },
  {
    icon: ScrollText,
    title: "Panfletos e flyers",
    desc: "Divulgação direta para campanhas, ofertas e lançamentos.",
    color: "#FF7A00",
    image: "/imgcards/panfletos-e-flyers.webp",
    imageAlt: "Panfletos e flyers impressos",
  },
  {
    icon: BookOpen,
    title: "Folders e catálogos",
    desc: "Conteúdo organizado para explicar produtos e serviços.",
    color: "#FF007F",
    image: "/imgcards/folders-e-catalogos.webp",
    imageAlt: "Folders e catálogos impressos",
  },
  {
    icon: Flag,
    title: "Banners e faixas",
    desc: "Peças de alto impacto para eventos, lojas e promoções.",
    color: "#8B2CFF",
    image: "/imgcards/banners-e-faixas.webp",
    imageAlt: "Banners e faixas impressos",
  },
  {
    icon: Sticker,
    title: "Adesivos",
    desc: "Recortes, etiquetas e aplicações para várias superfícies.",
    color: "#00D5FF",
    image: "/imgcards/adesivos.webp",
    imageAlt: "Adesivos impressos",
  },
  {
    icon: PanelTop,
    title: "Fachadas em ACM",
    desc: "Comunicação visual externa com presença e durabilidade.",
    color: "#37FF8B",
    image: "/imgcards/fachadas-em-acm.webp",
    imageAlt: "Fachada em ACM",
  },
  {
    icon: ClipboardList,
    title: "Placas e sinalização",
    desc: "Orientação visual clara para ambientes internos e externos.",
    color: "#FFD21F",
    image: "/imgcards/placas-e-sinalizacao.webp",
    imageAlt: "Placas e sinalização impressas",
  },
  {
    icon: MenuSquare,
    title: "Cardápios",
    desc: "Materiais resistentes e bem acabados para bares e restaurantes.",
    color: "#FF007F",
    image: "/imgcards/cardapios.webp",
    imageAlt: "Cardápios impressos",
  },
  {
    icon: Sparkles,
    title: "Convites",
    desc: "Impressos personalizados para datas, eventos e celebrações.",
    color: "#00D5FF",
    image: "/imgcards/convites.webp",
    imageAlt: "Convites impressos",
  },
  {
    icon: Tags,
    title: "Tags e rótulos",
    desc: "Detalhes que valorizam embalagens, produtos e marcas.",
    color: "#FF7A00",
    image: "/imgcards/tags-e-rotulos.webp",
    imageAlt: "Tags e rótulos impressos",
  },
  {
    icon: Images,
    title: "Materiais promocionais",
    desc: "Peças sob medida para fortalecer campanhas e vendas.",
    color: "#8B2CFF",
    image: "/imgcards/materiais-promocionais.webp",
    imageAlt: "Materiais promocionais impressos",
  },
  {
    icon: Printer,
    title: "Impressão digital",
    desc: "Produção ágil para pequenas e médias tiragens.",
    color: "#37FF8B",
    image: "/imgcards/impressao-digital.webp",
    imageAlt: "Impressão digital",
  },
];

function ServiceCard({ service }: { service: GraphicService }) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <article
      className="service-carousel-card group flex min-h-[25rem] flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: `linear-gradient(145deg, ${service.color}10, var(--bg-card) 44%, var(--bg-secondary))`,
        border: `1px solid ${service.color}30`,
      }}
    >
      <div
        className="service-carousel-media relative h-44 w-full shrink-0 overflow-hidden rounded-t-lg"
        style={{
          borderBottom: `1px solid ${service.color}25`,
          background: `linear-gradient(145deg, ${service.color}12, rgba(255,255,255,0.035))`,
        }}
      >
        {service.image ? (
          <Image
            src={service.image}
            alt={service.imageAlt ?? service.title}
            fill
            draggable={false}
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full select-none object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.45,
            }}
          />
        )}
        <div
          className="site-icon-box absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-md"
          style={{ background: `${service.color}22`, border: `1px solid ${service.color}45` }}
        >
          <service.icon size={19} style={{ color: service.color }} />
        </div>
      </div>
      <div className="site-card flex flex-1 flex-col p-5">
        <div>
          <h3 className="site-card-title text-xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            {service.title}
          </h3>
          <p className="site-card-copy mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {service.desc}
          </p>
        </div>

        <motion.button
          type="button"
          onClick={() => openQuoteModal(service.title)}
          whileTap={{ scale: 0.96 }}
          className="btn-gradient mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold"
        >
          Solicitar orçamento
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </article>
  );
}

export function ServicesCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const autoplayRef = useRef<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 2600);
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    startAutoplay();
    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", startAutoplay);

    return () => {
      stopAutoplay();
      emblaApi.off("pointerDown", stopAutoplay);
      emblaApi.off("pointerUp", startAutoplay);
    };
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <section
      ref={ref}
      id="servicos"
      className="site-section relative overflow-hidden px-4 py-20 md:py-24"
      style={{ backgroundColor: "var(--bg-main)", borderBottom: "1px solid var(--border-soft)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="site-section-header mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="site-eyebrow text-xs font-semibold uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Serviços de gráfica
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="site-heading mt-3 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              Impressos e comunicação visual para sua marca vender melhor
            </motion.h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
              style={{ color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}
              aria-label="Serviço anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
              style={{ color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}
              aria-label="Próximo serviço"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="overflow-hidden pt-2 pb-1"
          ref={emblaRef}
        >
          <div className="-ml-4 flex cursor-grab active:cursor-grabbing">
            {services.map((service) => (
              <div
                key={service.title}
                className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
