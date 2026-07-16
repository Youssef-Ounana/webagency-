import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";



export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <WhyChooseMe />
      <Process />
      <Team />
      <ContactForm />
      <FAQ />
      {/* Prochaines sections : , WhyChooseMe, Process, Portfolio, Testimonials, FAQ, ContactCta */}
    </>
  );
}
