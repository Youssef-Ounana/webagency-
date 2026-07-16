"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { faqSlugs } from "@/lib/data/faq";

export function FAQ() {
  const t = useTranslations("faq");
  const [openSlug, setOpenSlug] = useState<string | null>(faqSlugs[0]);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-ink-400">{t("subtitle")}</p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-ink-100 border-y border-ink-100">
          {faqSlugs.map((slug) => {
            const isOpen = openSlug === slug;
            return (
              <div key={slug}>
                <button
                  onClick={() => setOpenSlug(isOpen ? null : slug)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-ink">
                    {t(`items.${slug}.question`)}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-ink-400 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-ink-400">
                        {t(`items.${slug}.answer`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}