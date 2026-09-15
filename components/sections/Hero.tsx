"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/Button";

const STATS_KEYS = ["projects", "technologies", "availability", "response"] as const;

// Valeurs neutres (chiffres/durées), qui n'ont pas besoin de traduction.
// "availability" est un cas particulier : sa valeur est un texte, donc
// traduite via availabilityValue dans les messages.
const STATS_VALUES: Record<Exclude<(typeof STATS_KEYS)[number], "availability">, string> = {
  projects: "10+",
  technologies: "10+",
  response: "24h",
};

// Technologies réellement utilisées sur ce site et vos projets — remplace
// les anciens "logos clients" fictifs par quelque chose de 100% vrai.
const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Docker",
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-glow" aria-hidden />

      <div className="container-custom flex flex-col items-center pb-20 pt-24 text-center lg:pb-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-xs font-medium text-ink-600"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t("badge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          {t("title")}{" "}
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            {t("titleHighlight")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-400 sm:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#contact" className={buttonVariants({ size: "lg" })}>
            {t("ctaPrimary")}
            <ArrowRight size={18} className="rtl:rotate-180" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {STATS_KEYS.map((key) => (
            <div key={key} className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-ink sm:text-3xl">
                {key === "availability" ? t("availabilityValue") : STATS_VALUES[key]}
              </span>
              <span className="mt-1 text-center text-xs text-ink-400 sm:text-sm">
                {t(`stats.${key}`)}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 w-full"
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-ink-400">
            {t("stackTitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60 grayscale">
            {TECH_STACK.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-ink-600"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}