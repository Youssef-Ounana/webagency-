import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/LegalContent";
import { SITE, withSiteVars } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.mentions" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription", { siteName: SITE.name }),
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "legal.mentions" });
  const sections = (t.raw("sections") as { heading: string; body: string }[]).map(
    (s) => ({ ...s, body: withSiteVars(s.body) })
  );

  return <LegalContent title={t("title")} sections={sections} />;
}