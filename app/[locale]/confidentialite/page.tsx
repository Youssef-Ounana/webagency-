import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/LegalContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  const sections = t.raw("sections") as { heading: string; body: string }[];

  return <LegalContent title={t("title")} sections={sections} />;
}