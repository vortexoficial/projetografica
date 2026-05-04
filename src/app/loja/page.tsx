import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ProductGrid } from "@/components/store/product-grid";
import { QuoteModalProvider } from "@/components/quote/quote-modal-provider";
import { buildStoreWhatsAppUrl, storeProducts } from "@/lib/store-products";

export const metadata: Metadata = {
  title: "Loja da Panni | Produtos personalizados à pronta entrega",
  description:
    "Confira produtos personalizados, brindes, placas, canecas e materiais criativos à pronta entrega na Gráfica Panni.",
  alternates: {
    canonical: "/loja",
  },
};

export default function StorePage() {
  return (
    <QuoteModalProvider>
      <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--bg-main)" }}>
        <Navbar />

        <section
          className="relative overflow-hidden px-4 pb-10 pt-28 sm:pb-14 md:pt-32"
          style={{ backgroundColor: "var(--bg-main)", borderBottom: "1px solid var(--border-soft)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "58px 58px",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-[26rem] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 18% 10%, rgba(255,210,31,0.16), transparent 34%), radial-gradient(circle at 82% 20%, rgba(255,0,127,0.14), transparent 32%), radial-gradient(circle at 58% 0%, rgba(0,213,255,0.1), transparent 30%)",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em]"
                style={{
                  background: "rgba(255,210,31,0.1)",
                  border: "1px solid rgba(255,210,31,0.28)",
                  color: "var(--yellow)",
                }}
              >
                <ShoppingBag size={14} />
                Produtos criativos
              </span>
              <h1
                className="site-heading mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
                style={{ color: "var(--text-primary)" }}
              >
                Loja da Panni
              </h1>
              <p
                className="site-copy mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                Produtos prontos, personalizados e feitos para destacar sua marca, evento ou presente.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildStoreWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold"
                >
                  <MessageCircle size={18} />
                  Falar com a Panni
                </a>
                <Link
                  href="/#servicos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition-colors hover:bg-white/10"
                  style={{
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-strong)",
                    background: "rgba(255,255,255,0.035)",
                  }}
                >
                  Ver serviços gráficos
                </Link>
              </div>
            </div>

            <div
              className="site-card rounded-lg p-5"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,210,31,0.08), rgba(255,255,255,0.045), rgba(0,213,255,0.07))",
                border: "1px solid var(--border-strong)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ background: "rgba(255,210,31,0.12)", border: "1px solid rgba(255,210,31,0.3)" }}
                >
                  <Sparkles size={20} style={{ color: "var(--yellow)" }} />
                </span>
                <div>
                  <p className="text-sm font-extrabold" style={{ color: "var(--text-primary)" }}>
                    Catálogo sem carrinho
                  </p>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Escolha o produto e fale direto pelo WhatsApp para confirmar personalização, estoque e prazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid products={storeProducts} />
        <Footer />
      </main>
    </QuoteModalProvider>
  );
}
