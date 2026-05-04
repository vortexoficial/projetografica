"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import { ProductCard } from "@/components/store/product-card";
import { CategoryFilter } from "@/components/store/category-filter";
import { SearchInput } from "@/components/store/search-input";
import {
  storeCategories,
  type StoreFilterCategory,
  type StoreProduct,
} from "@/lib/store-products";

type ProductGridProps = {
  products: StoreProduct[];
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<StoreFilterCategory>("Todos");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = normalizeText(search.trim());

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todos" || product.category === selectedCategory;
      const matchesSearch =
        !normalizedSearch ||
        normalizeText(`${product.name} ${product.shortDescription} ${product.category}`).includes(
          normalizedSearch
        );

      return matchesCategory && matchesSearch;
    });
  }, [products, search, selectedCategory]);

  return (
    <section
      className="relative px-4 pb-16 pt-8 sm:pb-20 md:pb-24"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="mb-8 rounded-lg p-4 sm:p-5"
          style={{
            background: "rgba(255,255,255,0.035)",
            border: "1px solid var(--border-soft)",
          }}
        >
          <div className="grid gap-4 lg:grid-cols-[1fr_20rem] lg:items-center">
            <CategoryFilter
              categories={storeCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <SearchInput value={search} onChange={setSearch} />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            className="site-card flex min-h-72 flex-col items-center justify-center rounded-lg p-8 text-center"
            style={{
              background:
                "linear-gradient(145deg, rgba(0,213,255,0.08), var(--bg-card), rgba(255,0,127,0.07))",
              border: "1px solid var(--border-strong)",
            }}
          >
            <SearchX size={34} style={{ color: "var(--cyan)" }} />
            <h2 className="mt-4 text-xl font-extrabold" style={{ color: "var(--text-primary)" }}>
              Nenhum produto encontrado
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Tente buscar por outro nome ou limpar os filtros para ver todos os produtos da loja.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
