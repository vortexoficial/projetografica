"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { ProductCard } from "@/components/store/product-card";
import { getFeaturedProducts } from "@/lib/store-products";

const featuredProducts = getFeaturedProducts();

export function StoreSection() {
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
    if (!emblaApi) return;
    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      emblaApi.scrollPrev();
    }, 2800);
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
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
      id="loja"
      className="site-section relative overflow-hidden px-4 py-20 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,0,127,0.16) 0%, rgba(255,43,43,0.1) 42%, rgba(5,7,10,0.96) 100%), var(--bg-main)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 12% 4%, rgba(255,43,43,0.16), transparent 36%), radial-gradient(circle at 82% 12%, rgba(255,0,127,0.18), transparent 34%), linear-gradient(180deg, rgba(255,0,127,0.06), rgba(255,43,43,0.04) 54%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="site-section-header mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em]"
              style={{
                background: "rgba(255,210,31,0.1)",
                border: "1px solid rgba(255,210,31,0.28)",
                color: "var(--yellow)",
              }}
            >
              <BadgeCheck size={14} />
              Pronta entrega
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="site-heading mt-4 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              Loja da Panni
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="site-copy mt-3 max-w-2xl text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Produtos criativos à pronta entrega, personalizados com qualidade e o toque visual da Panni.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Link
              href="/loja"
              className="btn-gradient inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold"
            >
              <ShoppingBag size={16} />
              Ver todos
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                style={{ color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}
                aria-label="Produto anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                style={{ color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}
                aria-label="Próximo produto"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="overflow-hidden pt-2 pb-1"
          ref={emblaRef}
        >
          <div className="-ml-4 flex cursor-grab active:cursor-grabbing">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard product={product} detailLabel="Ver produto" showQuickAction={false} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="mt-8 flex flex-col items-center justify-center gap-2 text-center text-sm sm:flex-row sm:flex-wrap"
          style={{ color: "var(--text-muted)" }}
        >
          <Sparkles size={16} style={{ color: "var(--cyan)" }} />
          <span className="max-w-xl text-center">
            Produtos físicos para presentear, vender, sinalizar e divulgar sua marca.
          </span>
          <Link
            href="/loja"
            className="inline-flex items-center gap-1 font-bold text-gradient-main"
          >
            Abrir loja
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
