"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle, PenTool, Settings, PackageCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Você envia sua ideia",
    desc: "Conte o que precisa, envie referências, medidas ou informações do material. Nosso time está pronto para te atender.",
    color: "#FFD21F",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Criamos ou ajustamos a arte",
    desc: "Caso necessário, ajudamos na criação ou adequação do arquivo para impressão com qualidade profissional.",
    color: "#FF007F",
  },
  {
    number: "03",
    icon: Settings,
    title: "Produzimos com qualidade",
    desc: "Seu material é preparado com atenção aos detalhes e ao acabamento, usando equipamentos de alta precisão.",
    color: "#00D5FF",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Você recebe pronto para usar",
    desc: "Entregamos seu material finalizado para divulgação, instalação ou distribuição. Simples assim.",
    color: "#37FF8B",
  },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="site-section py-24 px-4" id="processo"
      style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="site-section-header text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="site-eyebrow text-xs font-semibold uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Como funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="site-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mt-3"
            style={{ color: "var(--text-primary)" }}
          >
            Nosso processo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="site-copy mt-4 max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Simples, rápido e sem complicação, do pedido à entrega.
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid gap-4 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.13 }}
                className="site-card process-step relative flex gap-4 rounded-lg p-4 text-left md:flex-col md:items-center md:p-0 md:text-center"
              >
                {i < steps.length - 1 ? (
                  <span
                    className="hidden md:block absolute left-[calc(50%+3.75rem)] right-[calc(-50%+3.75rem)] top-10 h-px"
                    style={{
                      background: `linear-gradient(90deg, ${step.color}66, ${steps[i + 1].color}66)`,
                    }}
                    aria-hidden="true"
                  />
                ) : null}

                {i < steps.length - 1 ? (
                  <span
                    className="absolute bottom-[-1rem] left-[1.75rem] top-[5.25rem] w-px md:hidden"
                    style={{
                      background: `linear-gradient(180deg, ${step.color}70, ${steps[i + 1].color}55)`,
                    }}
                    aria-hidden="true"
                  />
                ) : null}

                <motion.div
                  className="process-icon relative z-10 w-14 h-14 shrink-0 rounded-full flex items-center justify-center md:mb-6 md:h-20 md:w-20"
                  style={{
                    background: `linear-gradient(145deg, ${step.color}1F, var(--bg-card) 72%)`,
                    border: `2px solid ${step.color}66`,
                    boxShadow: `0 0 0 8px var(--bg-secondary), 0 0 28px ${step.color}22`,
                  }}
                  whileHover={{ scale: 1.1, borderColor: step.color + "CC" }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon size={24} style={{ color: step.color }} />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{ background: step.color, color: "var(--bg-main)" }}
                  >
                    {i + 1}
                  </span>
                </motion.div>

                <div>
                  <h3 className="site-card-title font-bold text-base mb-2 md:mb-3" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                  <p className="site-card-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
