"use client";

import { Check, ChevronDown } from "lucide-react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CustomDropdownProps = {
  label: string;
  value: string;
  options: string[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  fieldName?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export function CustomDropdown({
  label,
  value,
  options,
  placeholder = "Selecione uma opção",
  error,
  disabled = false,
  fieldName,
  required = false,
  onChange,
}: CustomDropdownProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option === value)
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, selectedIndex]);

  function selectOption(option: string) {
    onChange(option);
    setOpen(false);
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (disabled) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => (index + 1) % options.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => (index - 1 + options.length) % options.length);
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (open) {
        selectOption(options[activeIndex]);
      } else {
        setOpen(true);
      }
    }
  }

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
        {label}
        {required ? <span style={{ color: "var(--magenta)" }}> *</span> : null}
      </label>
      <button
        id={id}
        type="button"
        data-field-name={fieldName}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        data-invalid={Boolean(error)}
        className={cn(
          "flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold outline-none transition-all",
          "focus-visible:ring-2 focus-visible:ring-orange-400/40 disabled:cursor-not-allowed disabled:opacity-55",
          open && "shadow-[0_14px_36px_rgba(0,0,0,0.35)]"
        )}
        style={{
          background: open ? "rgba(255,255,255,0.075)" : "rgba(255,255,255,0.045)",
          borderColor: error ? "rgba(255,0,127,0.7)" : open ? "rgba(255,255,255,0.24)" : "rgba(255,255,255,0.11)",
          color: value ? "var(--text-primary)" : "var(--text-muted)",
        }}
        onClick={() => {
          setActiveIndex(selectedIndex);
          setOpen((current) => !current);
        }}
      >
        <span className="min-w-0 truncate">{value || placeholder}</span>
        <ChevronDown
          size={17}
          className={cn("shrink-0 transition-transform", open && "rotate-180")}
          style={{ color: open ? "var(--yellow)" : "var(--text-muted)" }}
        />
      </button>

      {open ? (
        <div
          id={`${id}-listbox`}
          role="listbox"
          aria-label={label}
          className="quote-scroll-area absolute left-0 right-0 top-[calc(100%+0.45rem)] z-[140] max-h-56 overflow-y-auto rounded-lg border p-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.42)] backdrop-blur-xl"
          style={{
            background: "rgba(10,14,19,0.96)",
            borderColor: "rgba(255,255,255,0.14)",
          }}
        >
          {options.map((option, index) => {
            const selected = option === value;
            const active = index === activeIndex;

            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={-1}
                className="flex min-h-10 w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors"
                style={{
                  background: selected
                    ? "rgba(255,122,0,0.18)"
                    : active
                      ? "rgba(255,255,255,0.08)"
                      : "transparent",
                  color: selected ? "var(--text-primary)" : "var(--text-secondary)",
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
              >
                <span>{option}</span>
                {selected ? <Check size={15} style={{ color: "var(--yellow)" }} /> : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {error ? (
        <p className="mt-1.5 text-xs font-semibold" style={{ color: "var(--magenta)" }}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
