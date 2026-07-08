import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { socials } from "@/lib/data/socials";

// Comme dans le Header : "page" = vraie route, "anchor" = section de l'accueil
const NAV_LINKS = [
  { key: "home", type: "page", href: "/" },
  { key: "services", type: "anchor", anchor: "services" },
  { key: "team", type: "anchor", anchor: "equipe" },
  { key: "contact", type: "anchor", anchor: "contact" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  function anchorHref(anchor: string) {
    return `/${locale}#${anchor}`;
  }

  return (
    <footer className="border-t border-ink-100 bg-ink-50/50">
      <div className="container-custom grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <span className="text-lg font-semibold tracking-tight text-ink">
            WebAgency<span className="text-primary-500">.</span>
          </span>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-400">
            {t("tagline")}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{t("navTitle")}</h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((item) => (
              <li key={item.key}>
                {item.type === "page" ? (
                  <Link
                    href={item.href}
                    className="text-sm text-ink-400 transition-colors hover:text-ink"
                  >
                    {tNav(item.key)}
                  </Link>
                ) : (
                  <a
                    href={anchorHref(item.anchor)}
                    className="text-sm text-ink-400 transition-colors hover:text-ink"
                  >
                    {tNav(item.key)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{t("legalTitle")}</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="/mentions-legales"
                className="text-sm text-ink-400 transition-colors hover:text-ink"
              >
                {t("legalNotice")}
              </Link>
            </li>
            <li>
              <Link
                href="/confidentialite"
                className="text-sm text-ink-400 transition-colors hover:text-ink"
              >
                {t("privacyPolicy")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-100 py-6">
        <p className="container-custom text-center text-xs text-ink-400">
          © {year} WebAgency. {t("rights")}
        </p>
      </div>
    </footer>
  );
}