"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-400 outline-none transition-colors focus:border-ink";

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget; // on garde une référence AVANT le await
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-ink-400">{t("subtitle")}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-2xl space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder={t("form.name")}
              className={inputClasses}
            />
            <input
              name="email"
              type="email"
              required
              placeholder={t("form.email")}
              className={inputClasses}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <input
              name="phone"
              placeholder={t("form.phone")}
              className={inputClasses}
            />
            <input
              name="company"
              placeholder={t("form.company")}
              className={inputClasses}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <select name="projectType" required className={inputClasses} defaultValue="">
              <option value="" disabled>
                {t("form.projectType")}
              </option>
              <option value="vitrine">{t("form.projectTypeOptions.vitrine")}</option>
              <option value="ecommerce">{t("form.projectTypeOptions.ecommerce")}</option>
              <option value="webapp">{t("form.projectTypeOptions.webapp")}</option>
              <option value="refonte">{t("form.projectTypeOptions.refonte")}</option>
              <option value="other">{t("form.projectTypeOptions.other")}</option>
            </select>

            <select name="budget" required className={inputClasses} defaultValue="">
              <option value="" disabled>
                {t("form.budget")}
              </option>
              <option value="small">{t("form.budgetOptions.small")}</option>
              <option value="medium">{t("form.budgetOptions.medium")}</option>
              <option value="large">{t("form.budgetOptions.large")}</option>
              <option value="enterprise">{t("form.budgetOptions.enterprise")}</option>
            </select>
          </div>

          <textarea
            name="message"
            required
            rows={5}
            placeholder={t("form.message")}
            className={cn(inputClasses, "resize-none")}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
          >
            {status === "sending" ? t("form.sending") : t("form.submit")}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-600">{t("form.success")}</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">{t("form.error")}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}