import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  PackageCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { ProductGallery } from "@/components/store/product-gallery";
import {
  buildProductWhatsAppUrl,
  type StoreProduct,
} from "@/lib/store-products";

type ProductDetailProps = {
  product: StoreProduct;
};

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <section
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:pb-20 md:pt-32"
      style={{ backgroundColor: "var(--bg-main)" }}
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
        className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 22% 10%, rgba(255,210,31,0.14), transparent 34%), radial-gradient(circle at 78% 16%, rgba(0,213,255,0.12), transparent 30%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/loja"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-80"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={16} />
          Voltar para loja
        </Link>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.86fr)] lg:items-start">
          <ProductGallery images={product.images} productName={product.name} />

          <div
            className="site-card rounded-lg p-5 sm:p-6 md:p-7"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,210,31,0.07), var(--bg-card) 42%, rgba(0,213,255,0.06))",
              border: "1px solid var(--border-strong)",
            }}
          >
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold"
                style={{
                  background: "rgba(255,255,255,0.055)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "var(--text-secondary)",
                }}
              >
                <Sparkles size={13} style={{ color: "var(--yellow)" }} />
                {product.category}
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold"
                style={{
                  background: "rgba(255,210,31,0.12)",
                  border: "1px solid rgba(255,210,31,0.28)",
                  color: "var(--yellow)",
                }}
              >
                <PackageCheck size={13} />
                {product.availability}
              </span>
            </div>

            <h1
              className="site-heading mt-5 text-3xl font-extrabold leading-tight sm:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              {product.name}
            </h1>
            <p
              className="site-copy mt-4 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {product.description}
            </p>

            <div className="mt-6 rounded-lg p-4" style={{ background: "rgba(255,255,255,0.045)" }}>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--text-muted)" }}
              >
                Preço
              </p>
              <p className="mt-1 text-2xl font-extrabold" style={{ color: "var(--text-primary)" }}>
                {product.price}
              </p>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <h2 className="text-base font-extrabold" style={{ color: "var(--text-primary)" }}>
                  Especificações
                </h2>
                <ul className="mt-3 grid gap-2">
                  {product.specifications.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--cyan)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-base font-extrabold" style={{ color: "var(--text-primary)" }}>
                  Personalização
                </h2>
                <ul className="mt-3 grid gap-2">
                  {product.customizationOptions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--magenta)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="mt-7 flex items-start gap-3 rounded-lg p-4"
              style={{
                background: "rgba(0,213,255,0.07)",
                border: "1px solid rgba(0,213,255,0.2)",
                color: "var(--text-secondary)",
              }}
            >
              <Truck size={18} className="mt-0.5 shrink-0" style={{ color: "var(--cyan)" }} />
              <p className="text-sm leading-relaxed">
                Produtos à pronta entrega podem variar conforme estoque. Personalizações, medidas e
                prazos são confirmados diretamente no atendimento pelo WhatsApp.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
              <a
                href={buildProductWhatsAppUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold"
              >
                <MessageCircle size={18} />
                Tenho interesse no WhatsApp
              </a>
              <Link
                href="/loja"
                className="inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-sm font-bold transition-colors hover:bg-white/10"
                style={{
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-strong)",
                  background: "rgba(255,255,255,0.035)",
                }}
              >
                Voltar para loja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
