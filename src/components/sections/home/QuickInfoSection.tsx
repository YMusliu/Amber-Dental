import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const cardKeys = [
  { label: "quickInfo.card1.label", value: "quickInfo.card1.value" },
  { label: "quickInfo.card2.label", value: "quickInfo.card2.value" },
  { label: "quickInfo.card3.label", value: "quickInfo.card3.value" },
  { label: "quickInfo.card4.label", value: "quickInfo.card4.value" },
] as const;

export function QuickInfoSection({ t }: { t: TranslateFn }) {
  return (
    <section className="bg-stone-50 py-20">
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {t("quickInfo.title")}
            </h2>
            <p className="text-base leading-7 text-zinc-600">{t("quickInfo.body")}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cardKeys.map((card) => (
              <article
                key={card.label}
                className="card-glass-shine rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
              >
                <div className="relative z-[2]">
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                    {t(card.label)}
                  </p>
                  <p className="mt-2 text-base font-semibold text-zinc-900">
                    {t(card.value)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
