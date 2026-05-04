import Link from "next/link";
import { ArrowRight, MessageCircle, PackageCheck } from "lucide-react";
import {
  buildProductWhatsAppUrl,
  type StoreProduct,
} from "@/lib/store-products";

type ProductCardProps = {
  product: StoreProduct;
  detailLabel?: string;
  showQuickAction?: boolean;
};

export function ProductCard({
  product,
  detailLabel = "Ver detalhes",
  showQuickAction = true,
}: ProductCardProps) {
  return (
    <article
      className="group site-card relative flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1"
      style={{
        background:
          "linear-gradient(145deg, rgba(255,210,31,0.08), var(--bg-card) 38%, var(--bg-secondary))",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 18px 46px rgba(0,0,0,0.24)",
      }}
    >
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.09)" }}
      >
        <div
          role="img"
          aria-label={`Imagem do produto ${product.name}`}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,7,10,0.02) 0%, rgba(5,7,10,0.72) 100%)",
          }}
        />
        <span
          className="absolute left-3 top-3 rounded-md px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em]"
          style={{
            background: "rgba(5,7,10,0.72)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "var(--text-secondary)",
            backdropFilter: "blur(10px)",
          }}
        >
          {product.category}
        </span>
        <span
          className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold"
          style={{
            background: "rgba(255,210,31,0.14)",
            border: "1px solid rgba(255,210,31,0.32)",
            color: "var(--yellow)",
            backdropFilter: "blur(10px)",
          }}
        >
          <PackageCheck size={13} />
          {product.availability}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex-1">
          <h3
            className="site-card-title text-lg font-extrabold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {product.name}
          </h3>
          <p
            className="site-card-copy mt-3 text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p
              className="text-[0.68rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--text-muted)" }}
            >
              Preço
            </p>
            <p className="mt-1 text-base font-extrabold" style={{ color: "var(--text-primary)" }}>
              {product.price}
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-2">
          <Link
            href={`/loja/${product.slug}`}
            className="btn-gradient inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold"
          >
            {detailLabel}
            <ArrowRight size={15} />
          </Link>
          {showQuickAction ? (
            <a
              href={buildProductWhatsAppUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition-colors hover:bg-white/10"
              style={{
                color: "var(--text-primary)",
                border: "1px solid var(--border-strong)",
                background: "rgba(255,255,255,0.035)",
              }}
            >
              <MessageCircle size={15} />
              Tenho interesse
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
