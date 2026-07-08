import { useTranslations } from "next-intl";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import { team } from "@/lib/data/team";

export function Team() {
  const t = useTranslations("team");

  return (
    <section id="equipe" className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-ink-400">{t("subtitle")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.slug}
              className="rounded-2xl border border-ink-100 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-ink-100">
                <Image
                  src={member.photo}
                  alt={`${member.firstName} ${member.lastName}`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-ink">
                {member.firstName} {member.lastName}
              </h3>
              <p className="mt-1 text-sm text-primary-600">
                {t(`members.${member.slug}.role`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}