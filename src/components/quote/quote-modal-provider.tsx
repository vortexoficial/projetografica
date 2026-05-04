"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { QuoteModal } from "@/components/quote/quote-modal";
import { getCanonicalServiceName } from "@/lib/quote-services";

type QuoteModalContextValue = {
  openQuoteModal: (serviceName?: string) => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState("Orçamento geral");
  const [modalKey, setModalKey] = useState(0);

  const openQuoteModal = useCallback((nextServiceName = "Orçamento geral") => {
    setServiceName(getCanonicalServiceName(nextServiceName));
    setModalKey((current) => current + 1);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openQuoteModal }), [openQuoteModal]);

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <QuoteModal key={modalKey} open={open} serviceName={serviceName} onClose={() => setOpen(false)} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);

  if (!context) {
    throw new Error("useQuoteModal must be used inside QuoteModalProvider");
  }

  return context;
}
