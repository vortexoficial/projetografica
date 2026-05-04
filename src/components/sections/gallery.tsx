"use client";

import { motion, useInView } from "motion/react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { useRef } from "react";

const INSTAGRAM = "#";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1693031630369-bd429a57f115?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Impressora de grande formato imprimindo material colorido",
  },
  {
    src: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Máquina de impressão offset em produção",
  },
  {
    src: "https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Cartão de visita impresso sendo apresentado à mão",
  },
  {
    src: "https://images.unsplash.com/photo-1623305463957-df17547327cb?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Pilhas de cartões de visita em papel branco",
  },
  {
    src: "https://images.unsplash.com/photo-1718670013988-c6e3edb92345?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Cartão de visita preto com acabamento fosco",
  },
  {
    src: "https://images.unsplash.com/photo-1636247498719-a8a04ed961a4?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Conjunto de cartões de visita coloridos sobre fundo escuro",
  },
  {
    src: "https://images.unsplash.com/photo-1710732652617-264d6f860546?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Cardápio impresso aberto sobre mesa de restaurante",
  },
  {
    src: "https://images.unsplash.com/photo-1557499305-bd68d0ad468d?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Capas de cardápio com textura e impressão escura",
  },
  {
    src: "https://images.unsplash.com/photo-1715193132905-471035273bfd?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Rótulo personalizado aplicado em garrafa e faixa impressa",
  },
  {
    src: "https://images.unsplash.com/photo-1667201081117-99e1d9aecd76?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Mockup de cartões brancos para papelaria corporativa",
  },
  {
    src: "https://images.unsplash.com/photo-1694476114840-e84670cabafb?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Cartão impresso laranja sendo segurado por duas mãos",
  },
  {
    src: "https://images.unsplash.com/photo-1693031630146-568e2f72db0e?auto=format&fit=crop&w=900&h=1200&q=82",
    alt: "Impressora de lona e comunicação visual em funcionamento",
  },
];

function GalleryCard({ item }: { item: (typeof galleryItems)[number] }) {
  return (
    <article
      className="gallery-marquee-card group relative overflow-hidden rounded-lg"
      role="img"
      aria-label={item.alt}
      style={{
        backgroundColor: "var(--bg-card)",
        backgroundImage: `url("${item.src}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        border: "1px solid rgba(255,255,255,0.09)",
      }}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${item.src}")`, backgroundPosition: "center", backgroundSize: "cover" }} />
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.36), transparent 55%)" }}
      />
    </article>
  );
}

export function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="site-section relative overflow-hidden px-0 py-24"
      id="portfolio"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="site-section-header mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="site-eyebrow text-xs font-semibold uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Nosso trabalho
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading mt-3 text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: "var(--text-primary)" }}
          >
            Galeria de produção gráfica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-copy mx-auto mt-4 max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Referências visuais para demonstrar impressos, comunicação visual, rótulos, cartões e materiais de ponto de venda.
          </motion.p>
        </div>
      </div>

      <div className="gallery-marquee-viewport">
        <div className="gallery-marquee-track">
          <div className="gallery-marquee-group">
            {galleryItems.map((item) => (
              <GalleryCard key={item.src} item={item} />
            ))}
          </div>
          <div className="gallery-marquee-group" aria-hidden="true">
            {galleryItems.map((item) => (
              <GalleryCard key={`repeat-${item.src}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.32 }}
        className="mt-8 flex justify-center px-4 md:mt-10"
      >
        <motion.a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, filter: "brightness(1.08)" }}
          whileTap={{ scale: 0.96 }}
          className="btn-gradient inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold md:px-7"
        >
          <InstagramIcon width={18} height={18} />
          Ver no Instagram
        </motion.a>
      </motion.div>
    </section>
  );
}
