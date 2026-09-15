interface LegalSection {
  heading: string;
  body: string;
}

interface LegalContentProps {
  title: string;
  sections: LegalSection[];
}

export function LegalContent({ title, sections }: LegalContentProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-ink">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}