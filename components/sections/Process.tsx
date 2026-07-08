"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/process";

export function Process() {
  const t = useTranslations("process");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-ink-400">{t("subtitle")}</p>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          {/* Ligne verticale de fond */}
          <div className="absolute top-0 bottom-0 start-6 w-px bg-ink-100" />

          <div className="space-y-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.slug}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Numéro dans un cercle, positionné sur la ligne */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-white">
                    <Icon size={18} className="text-ink" />
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-medium text-primary-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-ink">
                      {t(`steps.${step.slug}.title`)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                      {t(`steps.${step.slug}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}