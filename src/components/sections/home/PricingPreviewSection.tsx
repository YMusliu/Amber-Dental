import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

export function PricingPreviewSection({ t }: { t: TranslateFn }) {
  const orthoboxItems = [1, 2, 3, 4, 5, 6].map((n) => ({
    label: t(`homePricingOrthoboxItem${n}Label`),
    price: t(`homePricingOrthoboxItem${n}Price`),
  }));
  const zirconiaItems = [1, 2, 3, 4].map((n) => ({
    label: t(`homePricingZirconiaItem${n}Label`),
    price: t(`homePricingZirconiaItem${n}Price`),
  }));

  return (
    <section id="pricing" className="bg-white py-20">
      <SectionContainer className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {t("homePricingTitle")}
          </h2>
          <p className="text-base leading-7 text-zinc-600">{t("homePricingIntro")}</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <article className="card-glass-shine min-w-0 rounded-2xl border border-zinc-200/80 bg-stone-50/70 p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]">
            <div className="relative z-[2] space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900">
                {t("homePricingOrthoboxTitle")}
              </h3>
              <div className="space-y-2">
                {orthoboxItems.map((item) => (
                  <div
                    key={`${item.label}-${item.price}`}
                    className="grid gap-1 rounded-xl border border-zinc-200 bg-white/80 px-3 py-2 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4"
                  >
                    <p className="text-sm leading-6 text-zinc-700">{item.label}</p>
                    <p className="text-sm font-semibold text-zinc-900">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="card-glass-shine min-w-0 rounded-2xl border border-zinc-200/80 bg-stone-50/70 p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]">
            <div className="relative z-[2] space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900">
                {t("homePricingZirconiaTitle")}
              </h3>
              <div className="space-y-2">
                {zirconiaItems.map((item) => (
                  <div
                    key={`${item.label}-${item.price}`}
                    className="grid gap-1 rounded-xl border border-zinc-200 bg-white/80 px-3 py-2 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4"
                  >
                    <p className="text-sm leading-6 text-zinc-700">{item.label}</p>
                    <p className="text-sm font-semibold text-zinc-900">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        <p className="rounded-xl border border-zinc-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-zinc-700">
          {t("homePricingCustomNote")}
        </p>
        <p className="text-xs text-zinc-500">{t("homePricingDisclaimer")}</p>
      </SectionContainer>
    </section>
  );
}
