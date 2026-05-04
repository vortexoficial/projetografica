"use client";

import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

type LoaderPhase = "visible" | "leaving" | "hidden";

export function SiteLoader() {
  const [phase, setPhase] = useState<LoaderPhase>("visible");

  useEffect(() => {
    let fadeTimer: number | undefined;
    let removeTimer: number | undefined;

    const finishLoading = () => {
      fadeTimer = window.setTimeout(() => {
        setPhase("leaving");
        removeTimer = window.setTimeout(() => setPhase("hidden"), 420);
      }, 80);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`site-loader${phase === "leaving" ? " site-loader--leaving" : ""}`}
      role="status"
      aria-label="Carregando Gráfica Panni"
    >
      <LoaderCircle className="site-loader__icon" size={38} strokeWidth={2.4} aria-hidden="true" />
    </div>
  );
}
