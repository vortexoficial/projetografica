"use client";

import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { CustomDropdown } from "@/components/quote/custom-dropdown";
import {
  baseQuoteFields,
  buildWhatsAppQuoteMessage,
  buildWhatsAppQuoteUrl,
  createInitialQuoteValues,
  getCanonicalServiceName,
  getExtraFieldsForService,
  serviceOptions,
  type QuoteField,
  type QuoteFormValues,
} from "@/lib/quote-services";
import { cn } from "@/lib/utils";

type QuoteModalProps = {
  open: boolean;
  serviceName: string;
  onClose: () => void;
};

type QuoteErrors = Partial<Record<keyof QuoteFormValues, string>>;

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function QuoteModal({ open, serviceName, onClose }: QuoteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [values, setValues] = useState<QuoteFormValues>(() => createInitialQuoteValues(serviceName));
  const [errors, setErrors] = useState<QuoteErrors>({});
  const extraFields = useMemo(() => getExtraFieldsForService(values.service), [values.service]);
  const orderedFields = useMemo(() => [...baseQuoteFields, ...extraFields], [extraFields]);
  const mainFields = useMemo(() => baseQuoteFields.filter((field) => field.name !== "notes"), []);
  const notesField = useMemo(() => baseQuoteFields.find((field) => field.name === "notes"), []);

  useEffect(() => {
    if (!open) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const firstField = modalRef.current?.querySelector<HTMLElement>("[data-field-name='customerName']");
      firstField?.focus();
    }, 40);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = Array.from(modalRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []).filter(
        (element) => !element.hasAttribute("disabled") && element.offsetParent !== null
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  function updateValue(name: string, value: string) {
    setValues((current) => {
      if (name === "service") {
        return {
          ...createInitialQuoteValues(value),
          customerName: current.customerName,
          quantity: current.quantity,
          hasArtwork: current.hasArtwork,
          notes: current.notes,
        };
      }

      return { ...current, [name]: value };
    });

    setErrors((current) => {
      const next = { ...current };
      delete next[name as keyof QuoteFormValues];
      return next;
    });
  }

  function validateForm() {
    const nextErrors: QuoteErrors = {};

    orderedFields.forEach((field) => {
      const value = values[field.name as keyof QuoteFormValues]?.trim();

      if (field.required && !value) {
        nextErrors[field.name as keyof QuoteFormValues] = "Preencha este campo.";
      }
    });

    setErrors(nextErrors);

    const firstInvalid = orderedFields.find((field) => nextErrors[field.name as keyof QuoteFormValues]);
    if (firstInvalid) {
      window.requestAnimationFrame(() => {
        modalRef.current
          ?.querySelector<HTMLElement>(`[data-field-name='${firstInvalid.name}']`)
          ?.focus();
      });
    }

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const cleanValues = {
      ...values,
      service: getCanonicalServiceName(values.service),
    };
    const message = buildWhatsAppQuoteMessage(cleanValues, extraFields);
    window.open(buildWhatsAppQuoteUrl(message), "_blank", "noopener,noreferrer");
    onClose();
  }

  function renderField(field: QuoteField) {
    const value = values[field.name as keyof QuoteFormValues];
    const error = errors[field.name as keyof QuoteFormValues];
    const fullWidth = field.type === "textarea" || field.name === "projectDescription";

    if (field.type === "customDropdown") {
      const options = field.name === "service" ? serviceOptions : field.options ?? [];

      return (
        <div key={field.name} className={cn(fullWidth && "md:col-span-2")}>
          <CustomDropdown
            label={field.label}
            value={value}
            options={options}
            fieldName={field.name}
            required={field.required}
            error={error}
            onChange={(nextValue) => updateValue(field.name, nextValue)}
          />
        </div>
      );
    }

    return (
      <div key={field.name} className={cn(fullWidth && "md:col-span-2")}>
        <label htmlFor={field.name} className="mb-2 block text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
          {field.label}
          {field.required ? <span style={{ color: "var(--magenta)" }}> *</span> : null}
        </label>
        {field.type === "textarea" ? (
          <textarea
            id={field.name}
            data-field-name={field.name}
            value={value}
            rows={field.name === "projectDescription" ? 4 : 3}
            placeholder={field.placeholder}
            aria-invalid={Boolean(error)}
            className="min-h-28 w-full resize-none rounded-lg border px-4 py-3 text-sm font-medium outline-none transition-all placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-orange-400/40"
            style={{
              background: "rgba(255,255,255,0.045)",
              borderColor: error ? "rgba(255,0,127,0.7)" : "rgba(255,255,255,0.11)",
              color: "var(--text-primary)",
            }}
            onChange={(event) => updateValue(field.name, event.target.value)}
          />
        ) : (
          <input
            id={field.name}
            data-field-name={field.name}
            value={value}
            type={field.type}
            placeholder={field.placeholder}
            aria-invalid={Boolean(error)}
            className="min-h-12 w-full rounded-lg border px-4 py-3 text-sm font-medium outline-none transition-all placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-orange-400/40"
            style={{
              background: "rgba(255,255,255,0.045)",
              borderColor: error ? "rgba(255,0,127,0.7)" : "rgba(255,255,255,0.11)",
              color: "var(--text-primary)",
            }}
            onChange={(event) => updateValue(field.name, event.target.value)}
          />
        )}
        {error ? (
          <p className="mt-1.5 text-xs font-semibold" style={{ color: "var(--magenta)" }}>
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center px-3 py-3 sm:px-4 sm:py-6"
          style={{
            background: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            className="quote-modal-panel overflow-hidden rounded-[24px] border shadow-[0_26px_80px_rgba(0,0,0,0.58)]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,210,31,0.08), rgba(255,0,127,0.055) 42%, rgba(0,213,255,0.055)), var(--bg-card)",
              borderColor: "rgba(255,255,255,0.13)",
            }}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="shrink-0 flex items-start justify-between gap-3 border-b px-4 py-4 sm:gap-4 sm:px-6 sm:py-5" style={{ borderColor: "rgba(255,255,255,0.09)" }}>
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] sm:text-xs" style={{ color: "var(--yellow)" }}>
                  Orçamento
                </p>
                <h2 id="quote-modal-title" className="mt-1.5 text-xl font-extrabold leading-tight sm:text-2xl" style={{ color: "var(--text-primary)" }}>
                  Solicitar orçamento
                </h2>
                <p className="mt-1.5 max-w-[30rem] text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Informe os detalhes e gere a mensagem para o WhatsApp.
                </p>
              </div>
              <button
                type="button"
                aria-label="Fechar modal de orçamento"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors hover:bg-white/10 sm:h-11 sm:w-11"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "var(--text-primary)" }}
                onClick={onClose}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="quote-modal-form flex flex-col">
              <div className="quote-modal-body quote-scroll-area grid gap-4 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 md:grid-cols-2">
                {mainFields.map(renderField)}

                <div className="md:col-span-2">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="h-px flex-1" style={{ background: "rgba(255,255,255,0.1)" }} />
                    <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: "var(--text-muted)" }}>
                      Detalhes do serviço
                    </span>
                    <span className="h-px flex-1" style={{ background: "rgba(255,255,255,0.1)" }} />
                  </div>
                </div>

                {extraFields.map(renderField)}
                {notesField ? renderField(notesField) : null}
              </div>

              <div className="quote-modal-actions grid gap-3 border-t px-4 py-4 sm:flex sm:items-center sm:justify-end sm:px-6" style={{ borderColor: "rgba(255,255,255,0.09)" }}>
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border px-5 text-sm font-bold transition-colors hover:bg-white/10 sm:min-h-12 sm:min-w-36"
                  style={{ borderColor: "rgba(255,255,255,0.16)", color: "var(--text-primary)" }}
                  onClick={onClose}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn-gradient inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold sm:min-h-12 sm:min-w-72"
                >
                  <MessageCircle size={17} />
                  Fazer orçamento no WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
