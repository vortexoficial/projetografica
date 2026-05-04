"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MapPin, MessageCircle, Phone, Printer, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

const WHATSAPP = "#";
const INSTAGRAM = "#";
const FUTURA_DESIGN = "#";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Loja da Panni", href: "/loja" },
];

const services = [
  { label: "Impressão digital", href: "#servicos" },
  { label: "Comunicação visual", href: "#servicos" },
  { label: "Cartões e papelaria", href: "#servicos" },
  { label: "Banners e faixas", href: "#servicos" },
  { label: "Fachadas em ACM", href: "#servicos" },
  { label: "Adesivos e rótulos", href: "#servicos" },
];

export function Footer() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <footer
        className="relative overflow-hidden px-4 pb-7 pt-12 md:pb-8 md:pt-16"
        style={{ backgroundColor: "#030406", borderTop: "1px solid var(--border-soft)" }}
      >
        <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "var(--gradient-brand)" }} />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-[1.35fr_0.9fr] md:items-end">
            <div>
              <Image
                src="/logo.webp"
                alt="Gráfica Panni"
                width={154}
                height={64}
                className="mb-5 h-12 w-auto object-contain md:h-14"
              />
              <p className="max-w-xl text-sm leading-relaxed md:text-base" style={{ color: "var(--text-secondary)" }}>
                Impressão gráfica e comunicação visual para marcas que precisam de materiais bonitos, bem acabados e entregues com atenção aos detalhes.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Atendimento direto", "Produção sob medida", "Acabamento profissional"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text-secondary)" }}
                  >
                    <Sparkles size={13} style={{ color: "var(--yellow)" }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <motion.button
                type="button"
                onClick={() => openQuoteModal("Orçamento geral")}
                whileHover={{ scale: 1.03, filter: "brightness(1.08)" }}
                whileTap={{ scale: 0.96 }}
                className="btn-gradient inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold"
              >
                <MessageCircle size={17} />
                Solicitar orçamento
              </motion.button>
              <motion.a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.34)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-colors"
                style={{ color: "var(--text-primary)", border: "1px solid var(--border-strong)", background: "rgba(255,255,255,0.035)" }}
              >
                <InstagramIcon width={17} height={17} />
                Instagram
              </motion.a>
            </div>
          </div>

          <div
            className="grid gap-8 border-y py-8 sm:grid-cols-2 lg:grid-cols-[0.9fr_0.9fr_1fr]"
            style={{ borderColor: "var(--border-soft)" }}
          >
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-primary)" }}>
                Navegação
              </h4>
              <ul className="grid gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                      className="group inline-flex cursor-pointer items-center gap-2 text-sm transition-opacity hover:opacity-80"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {link.label}
                      <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-primary)" }}>
                Soluções
              </h4>
              <ul className="grid gap-2.5">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href.startsWith("#") ? `/${service.href}` : service.href}
                      className="group inline-flex cursor-pointer items-center gap-2 text-sm transition-opacity hover:opacity-80"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Printer size={13} style={{ color: "var(--cyan)" }} />
                      {service.label}
                      <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-primary)" }}>
                Contato
              </h4>
              <ul className="grid gap-3">
                <li>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm transition-opacity hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "var(--yellow)" }} />
                    +55 11 95857-5089
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm transition-opacity hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <InstagramIcon width={15} height={15} className="mt-0.5 shrink-0" style={{ color: "var(--magenta)" }} />
                    @graficapanni
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--cyan)" }} />
                  Av. Miguel Achiole da Fonseca, 1411B, São Paulo, Brasil
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center md:flex-row md:text-left">
            <p className="text-xs" style={{ color: "rgba(154,164,178,0.68)" }}>
              © {new Date().getFullYear()} Gráfica Panni. Todos os direitos reservados.
            </p>
            <p className="text-xs" style={{ color: "rgba(154,164,178,0.48)" }}>
              Gráfica e Comunicação Visual em São Paulo, SP
            </p>
          </div>
        </div>
      </footer>

      <div
        className="px-4 py-3 text-center"
        style={{ backgroundColor: "#010203", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <a
          href={FUTURA_DESIGN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
          style={{ color: "rgba(216,222,233,0.68)" }}
        >
          Desenvolvido por <span className="text-gradient-main">FUTURADESIGN</span>
          <ArrowUpRight size={12} />
        </a>
      </div>
    </>
  );
}
