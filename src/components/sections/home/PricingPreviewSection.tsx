import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const tierIndices = [1, 2, 3] as const;

export function PricingPreviewSection({ t }: { t: TranslateFn }) {
  const tiers = tierIndices.map((n) => ({
    name: t(`pricing.card${n}.name`),
    price: t(`pricing.card${n}.price`),
    note: t(`pricing.card${n}.note`),
  }));

  return (
    <section id="pricing" className="bg-white py-20">
      <SectionContainer className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {t("pricing.title")}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={`${tier.name}-${tier.price}`}
              className="card-glass-shine min-w-0 rounded-2xl border border-zinc-200/80 bg-stone-50/70 p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
            >
              <div className="relative z-[2]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  {tier.name}
                </p>
                <p className="mt-1.5 text-3xl font-semibold tracking-tight text-zinc-900">
                  {tier.price}
                </p>
                <p className="mt-1.5 break-words text-sm leading-6 text-zinc-600">
                  {tier.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
