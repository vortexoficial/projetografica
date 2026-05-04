"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQuoteModal } from "@/components/quote/quote-modal-provider";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
  { label: "Loja", href: "/loja" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    if (pathname !== "/") {
      router.push(`/${href}`);
      setMobileOpen(false);
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={scrolled ? {
          backgroundColor: "rgba(5,7,10,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-soft)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
        } : { backgroundColor: "transparent" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 md:py-3 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
              }

              router.push("/");
            }}
          >
            <Image src="/logo.webp" alt="Gráfica Panni" width={132} height={56}
              className="h-10 md:h-14 w-auto object-contain" priority />
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium relative group transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 rounded-full"
                    style={{ background: "var(--gradient-main)" }} />
                </Link>
              ) : (
                <button key={link.href} onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium relative group transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 rounded-full"
                    style={{ background: "var(--gradient-main)" }} />
                </button>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.button
              type="button"
              onClick={() => openQuoteModal("Orçamento geral")}
              whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.96 }}
              className="btn-gradient inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl"
            >
              <MessageCircle size={15} />
              Orçamento
            </motion.button>
          </div>

          <button className="md:hidden p-1 transition-colors"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="fixed top-[60px] inset-x-0 z-40 overflow-hidden md:hidden"
        style={{ backgroundColor: "rgba(5,7,10,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border-soft)" }}
      >
        <div className="px-4 py-3 flex flex-col gap-2.5">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-left py-2 text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border-soft)" }}
              >
                {link.label}
              </Link>
            ) : (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                className="text-left py-2 text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border-soft)" }}>
                {link.label}
              </button>
            )
          )}
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            className="btn-gradient inline-flex items-center justify-center gap-2 text-sm px-5 py-3 rounded-lg mt-2"
            onClick={() => {
              openQuoteModal("Orçamento geral");
              setMobileOpen(false);
            }}
          >
            <MessageCircle size={16} />
            Pedir orçamento
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
