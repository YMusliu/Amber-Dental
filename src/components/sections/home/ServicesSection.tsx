import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const cardDefs = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
] as const;

export function ServicesSection({ t }: { t: TranslateFn }) {
  const services = cardDefs.map((def, i) => {
    const n = i + 1;
    return {
      id: def.id,
      title: t(`homeServicesCard${n}Title`),
      description: t(`homeServicesCard${n}Description`),
      icon: "🦷" as const,
    };
  });

  return (
    <section id="services" className="bg-white pt-12 pb-16 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex rounded-full border border-[#2f66dc] px-6 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#2f66dc]">
            {t("homeServicesEyebrow")}
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
            {t("homeServicesHeadlineBefore")}
            <span className="text-[#2f66dc]">{t("homeServicesHeadlineAccent")}</span>
            {t("homeServicesHeadlineAfter")}
          </h2>

          <p className="mt-4 text-base leading-8 text-[#202020] sm:text-lg">
            {t("homeServicesIntro")}
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex min-h-[300px] flex-col rounded-[28px] border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition-colors duration-300 hover:border-[#2f66dc] hover:bg-[#2f66dc] hover:shadow-xl sm:p-8"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-[#2f66dc] shadow-sm transition-opacity duration-300 group-hover:opacity-0"
              >
                {service.icon}
              </div>

              <div className="mt-8">
                <h3 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 max-h-0 overflow-hidden text-base leading-7 text-zinc-600 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
