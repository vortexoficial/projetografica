"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Eye } from "lucide-react";

export function Institutional() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="site-section--soft py-20 px-4"
      style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="site-icon-box w-16 h-16 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8"
          style={{ background: "rgba(0,213,255,0.10)", border: "1px solid rgba(0,213,255,0.25)" }}
        >
          <Eye size={28} style={{ color: "#00D5FF" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="site-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Mais do que imprimir,{" "}
          <span className="text-gradient-main">ajudamos sua marca a aparecer.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="site-copy text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          A comunicação visual certa valoriza sua empresa, atrai olhares e transmite
          confiança. Na Gráfica Panni, cada projeto é feito para representar bem o
          seu negócio, seja em um simples cartão de visita ou em uma fachada completa.
        </motion.p>

        <motion.hr
          className="divider-brand border-none mt-8 md:mt-12 mx-auto max-w-xs"
          style={{ height: "1px" }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </section>
  );
}
