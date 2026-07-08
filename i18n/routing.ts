import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["fr", "en", "ar"],
  defaultLocale: "fr",
  localePrefix: "always",
  // Routes traduites dans l'URL -> meilleur SEO local par langue
  pathnames: {
    "/": "/",
    "/a-propos": {
      fr: "/a-propos",
      en: "/about",
      ar: "/من-نحن",
    },
    "/services": {
      fr: "/services",
      en: "/services",
      ar: "/خدماتنا",
    },
    "/portfolio": {
      fr: "/portfolio",
      en: "/portfolio",
      ar: "/أعمالنا",
    },
    "/contact": {
      fr: "/contact",
      en: "/contact",
      ar: "/اتصل-بنا",
    },
    "/mentions-legales": {
      fr: "/mentions-legales",
      en: "/legal-notice",
      ar: "/الإشعار-القانوني",
    },
    "/confidentialite": {
      fr: "/confidentialite",
      en: "/privacy-policy",
      ar: "/سياسة-الخصوصية",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
