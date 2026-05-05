import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const cardKeys = [
  { title: "homeAboutFoundationTitle", description: "homeAboutFoundationDescription" },
  { title: "homeAboutTeamTitle", description: "homeAboutTeamDescription" },
  { title: "homeAboutTechnologyTitle", description: "homeAboutTechnologyDescription" },
  { title: "homeAboutCollaborationTitle", description: "homeAboutCollaborationDescription" },
] as const;

export function QuickInfoSection({ t }: { t: TranslateFn }) {
  return (
    <section id="about" className="bg-stone-50 py-20">
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {t("homeAboutSnapshotTitle")}
            </h2>
            <p className="text-base leading-7 text-zinc-600">{t("homeAboutSnapshotBody")}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cardKeys.map((card) => (
              <article
                key={card.title}
                className="card-glass-shine rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
              >
                <div className="relative z-[2]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    {t(card.title)}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-700">
                    {t(card.description)}
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
