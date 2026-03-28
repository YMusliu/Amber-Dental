import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const stepKeys = [
  { title: "expertise.step1.title", text: "expertise.step1.text" },
  { title: "expertise.step2.title", text: "expertise.step2.text" },
  { title: "expertise.step3.title", text: "expertise.step3.text" },
  { title: "expertise.step4.title", text: "expertise.step4.text" },
] as const;

export function ExpertiseSection({ t }: { t: TranslateFn }) {
  return (
    <section className="bg-stone-50 py-20">
      <SectionContainer className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {t("expertise.title")}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stepKeys.map((item) => (
            <article
              key={item.title}
              className="card-glass-shine min-w-0 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
            >
              <div className="relative z-[2]">
                <div className="mb-3 h-10 w-10 rounded-xl border border-amber-100 bg-amber-50" />
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{t(item.text)}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
