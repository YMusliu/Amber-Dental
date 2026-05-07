import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const detailKeys = [
  {
    title: "homeAboutDetailsFoundationTitle",
    description: "homeAboutDetailsFoundationDescription",
  },
  {
    title: "homeAboutDetailsTeamTitle",
    description: "homeAboutDetailsTeamDescription",
  },
  {
    title: "homeAboutDetailsTechnologyTitle",
    description: "homeAboutDetailsTechnologyDescription",
  },
  {
    title: "homeAboutDetailsCollaborationTitle",
    description: "homeAboutDetailsCollaborationDescription",
  },
] as const;

export function AboutDetailsSection({ t }: { t: TranslateFn }) {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            {t("homeAboutDetailsTitle")}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">{t("homeAboutSnapshotBody")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {detailKeys.map((item) => (
            <article
              key={item.title}
              className="card-glass-shine rounded-3xl border border-zinc-200/90 bg-white p-8 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_28px_rgba(16,24,40,0.06)] transition-shadow duration-200 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_34px_rgba(16,24,40,0.09)]"
            >
              <div className="relative z-[2] space-y-3">
                <h3 className="text-[1.6rem] font-semibold tracking-tight text-zinc-900 sm:text-[1.75rem]">
                  {t(item.title)}
                </h3>
                <p className="text-base leading-8 text-zinc-600">
                  {t(item.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
