"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { whyChooseMeItems } from "@/lib/data/whyChooseMe";

export function WhyChooseMe() {
  const t = useTranslations("whyChooseMe");

  return (
    <section className="bg-ink-50/50 py-24 lg:py-32">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-ink-400">{t("subtitle")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {whyChooseMeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {t(`items.${item.slug}.title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                    {t(`items.${item.slug}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}