"use client";

import type { StoreFilterCategory } from "@/lib/store-products";

type CategoryFilterProps = {
  categories: readonly StoreFilterCategory[];
  selectedCategory: StoreFilterCategory;
  onSelectCategory: (category: StoreFilterCategory) => void;
};

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Filtrar produtos por categoria">
      {categories.map((category) => {
        const selected = category === selectedCategory;

        return (
          <button
            key={category}
            type="button"
            aria-pressed={selected}
            onClick={() => onSelectCategory(category)}
            className="min-h-10 rounded-lg px-4 text-sm font-bold transition-all duration-200"
            style={{
              color: selected ? "var(--bg-main)" : "var(--text-secondary)",
              background: selected ? "var(--gradient-main)" : "rgba(255,255,255,0.045)",
              border: selected
                ? "1px solid rgba(255,210,31,0.52)"
                : "1px solid rgba(255,255,255,0.1)",
              boxShadow: selected ? "0 12px 28px rgba(255,122,0,0.22)" : "none",
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
