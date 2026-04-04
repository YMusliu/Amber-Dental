import Image from "next/image";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const cardDefs = [
  { id: "1", featured: false as const },
  { id: "2", featured: true as const },
  { id: "3", featured: false as const },
] as const;

export function ServicesSection({ t }: { t: TranslateFn }) {
  const services = cardDefs.map((def, i) => {
    const n = i + 1;
    return {
      id: def.id,
      title: t(`services.card${n}.title`),
      description: t(`services.card${n}.description`),
      cta: t(`services.card${n}.cta`),
      featured: def.featured,
      icon: "🦷" as const,
    };
  });

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#eef5f7] pt-6 pb-20 md:pt-10"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#8ea4d8] via-[#aab8dc] to-[#d7dde8] shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
          <div className="absolute inset-0 bg-black/5" />

          <div className="relative min-h-[460px] md:min-h-[520px]">
            <Image
              src="/clinic-hero.svg"
              alt={t("services.imageAlt")}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          <div className="absolute bottom-5 left-4 right-4 grid gap-3 md:left-10 md:right-10 md:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
            <div className="card-glass-shine flex min-h-[190px] flex-col justify-between rounded-[28px] bg-[#2f66dc] p-5 text-white shadow-[0_10px_30px_rgba(47,102,220,0.28)] md:p-7">
              <div className="relative z-[2] flex min-h-0 flex-1 flex-col justify-between gap-5">
                <p className="max-w-[260px] text-lg leading-8 md:text-[19px]">
                  {t("services.collageTagline")}
                </p>

                <button
                  type="button"
                  className="mt-auto w-fit rounded-full border border-white/70 px-8 py-4 text-lg font-medium text-white transition hover:bg-white hover:text-[#2f66dc]"
                >
                  {t("services.collageCta")}
                </button>
              </div>
            </div>

            <div className="card-glass-shine relative h-[190px] overflow-hidden rounded-[24px] shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
              <Image
                src="/clinic-hero.svg"
                alt={t("services.imageAlt")}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>

            <div className="card-glass-shine relative h-[190px] overflow-hidden rounded-[24px] shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
              <Image
                src="/clinic-hero.svg"
                alt={t("services.imageAlt")}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>

            <div className="card-glass-shine relative h-[190px] overflow-hidden rounded-[24px] shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
              <Image
                src="/clinic-hero.svg"
                alt={t("services.imageAlt")}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />

      <div className="relative z-10 bg-white pt-16 pb-20 md:pt-20 md:pb-22">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="inline-flex rounded-full border border-[#2f66dc] px-6 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#2f66dc]">
              {t("services.eyebrow")}
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-5xl md:text-7xl">
              {t("services.headline.before")}
              <span className="text-[#2f66dc]">{t("services.headline.accent")}</span>
              {t("services.headline.after")}
            </h2>

            <p className="mt-5 text-lg leading-9 text-[#202020] sm:text-xl md:text-[22px]">
              {t("services.intro")}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className={`card-glass-shine group relative min-h-[380px] overflow-hidden rounded-[30px] border p-6 transition-[transform,border-color,background-color,box-shadow,color] duration-200 ease-[cubic-bezier(0.22,1.15,0.32,1)] motion-reduce:ease-out hover:-translate-y-1 ${
                  service.featured
                    ? "border-[#2f66dc] bg-[#2f66dc] text-white shadow-[0_18px_40px_rgba(47,102,220,0.25)]"
                    : "border-[#e4ecef] bg-[#f5f8f9] text-[#111111] shadow-[0_10px_24px_rgba(15,23,42,0.05)] hover:border-[#2f66dc] hover:bg-[#2f66dc] hover:text-white hover:shadow-[0_18px_40px_rgba(47,102,220,0.22)]"
                }`}
              >
                <div
                  className={`relative z-[2] flex h-16 w-16 items-center justify-center rounded-full text-3xl transition duration-150 ease-[cubic-bezier(0.34,1.45,0.64,1)] motion-safe:group-hover:scale-110 ${
                    service.featured
                      ? "bg-white text-[#2f66dc]"
                      : "bg-[#2f66dc] text-white group-hover:bg-white group-hover:text-[#2f66dc]"
                  }`}
                >
                  {service.icon}
                </div>

                <div className="relative z-[2] mt-20">
                  <h3
                    className="origin-left text-3xl font-semibold tracking-[-0.04em] transition duration-[140ms] ease-[cubic-bezier(0.65,0.02,0.8,0.2)] will-change-transform motion-reduce:group-hover:hidden sm:text-4xl md:text-5xl motion-safe:group-hover:pointer-events-none motion-safe:group-hover:absolute motion-safe:group-hover:left-0 motion-safe:group-hover:top-0 motion-safe:group-hover:z-10 motion-safe:group-hover:opacity-0 motion-safe:group-hover:-translate-x-[108%] motion-safe:group-hover:-skew-x-6 motion-safe:group-hover:blur-[1px]"
                  >
                    {service.title}
                  </h3>
                </div>

                <div
                  className="pointer-events-none absolute inset-x-6 bottom-6 z-[2] flex translate-y-10 scale-[0.96] flex-col gap-4 opacity-0 transition-[transform,opacity] duration-[260ms] ease-[cubic-bezier(0.2,1.35,0.32,1)] will-change-transform motion-reduce:translate-y-4 motion-reduce:scale-100 motion-reduce:duration-200 motion-reduce:ease-out motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:opacity-100 sm:inset-x-8 motion-safe:group-hover:translate-y-0 motion-safe:group-hover:scale-100 motion-safe:group-hover:opacity-100"
                >
                  <p className="max-w-full text-[18px] leading-8 sm:max-w-[290px] sm:text-[20px] sm:leading-9">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-4 text-[17px] font-medium sm:text-[19px]">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        service.featured
                          ? "bg-white text-[#2f66dc]"
                          : "bg-white text-[#2f66dc]"
                      }`}
                    >
                      ›
                    </span>
                    <span>{service.cta}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
