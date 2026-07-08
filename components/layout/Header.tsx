"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

// type "page" = vraie route Next.js (a sa propre URL)
// type "anchor" = section de la page d'accueil (on scrolle jusqu'à son id)
const NAV_ITEMS = [
  { key: "home", type: "page", href: "/" },
  { key: "services", type: "anchor", anchor: "services" },
  { key: "team", type: "anchor", anchor: "equipe" },
  { key: "contact", type: "anchor", anchor: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Construit le lien vers une section : fonctionne même si on n'est pas
  // sur la page d'accueil (ex: depuis /mentions-legales, ça ramène à "/"
  // puis scrolle jusqu'à la section grâce au hash).
  function anchorHref(anchor: string) {
    return `/${locale}#${anchor}`;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-ink-100 bg-white/80 backdrop-blur-lg"
          : "border-b border-transparent bg-white/0"
      )}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          WebAgency<span className="text-primary-500">.</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => {
            if (item.type === "page") {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium text-ink-400 transition-colors hover:text-ink",
                    isActive && "text-ink"
                  )}
                >
                  {t(item.key)}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 start-0 h-px w-full bg-ink"
                    />
                  )}
                </Link>
              );
            }

            return (
              <a
                key={item.key}
                href={anchorHref(item.anchor)}
                className="text-sm font-medium text-ink-400 transition-colors hover:text-ink"
              >
                {t(item.key)}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a href={anchorHref("contact")} className={buttonVariants({ size: "sm" })}>
            {t("cta")}
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-ink-100 bg-white lg:hidden"
          >
            <div className="container-custom flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) =>
                item.type === "page" ? (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-ink-600 hover:bg-ink-50"
                  >
                    {t(item.key)}
                  </Link>
                ) : (
                  <a
                    key={item.key}
                    href={anchorHref(item.anchor)}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-ink-600 hover:bg-ink-50"
                  >
                    {t(item.key)}
                  </a>
                )
              )}
              <div className="mt-2 flex items-center justify-between px-3">
                <LanguageSwitcher />
                <a href={anchorHref("contact")} className={buttonVariants({ size: "sm" })}>
                  {t("cta")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}