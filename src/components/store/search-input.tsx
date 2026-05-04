"use client";

import { Search, X } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Buscar produtos</span>
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
        style={{ color: "var(--text-muted)" }}
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar produto"
        className="min-h-12 w-full rounded-lg border bg-white/[0.045] px-11 pr-12 text-sm font-semibold outline-none transition-colors placeholder:font-medium focus:border-orange-400"
        style={{
          color: "var(--text-primary)",
          borderColor: "var(--border-strong)",
        }}
      />
      {value ? (
        <button
          type="button"
          aria-label="Limpar busca"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md transition-colors hover:bg-white/10"
          style={{ color: "var(--text-muted)" }}
        >
          <X size={16} />
        </button>
      ) : null}
    </label>
  );
}
