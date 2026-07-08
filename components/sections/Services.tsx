"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-custom">
        
        {/* En-tête de section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-ink-400">
            {t("subtitle")}
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-2xl border border-ink-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink-200 hover:shadow-lg"
              >
                {/* Icône dans un cercle dégradé */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-accent-400/10">
                  <Icon size={22} className="text-primary-600" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {t(`items.${service.slug}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {t(`items.${service.slug}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}