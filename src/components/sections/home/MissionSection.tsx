import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

export function MissionSection({ t }: { t: TranslateFn }) {
  return (
    <section id="mission" className="bg-white py-20">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {t("homeMissionTitle")}
            </h2>
            <p className="text-base leading-7 text-zinc-700">{t("homeMissionParagraph1")}</p>
            <p className="text-base leading-7 text-zinc-700">{t("homeMissionParagraph2")}</p>
            <p className="text-base leading-7 text-zinc-700">{t("homeMissionParagraph3")}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-56 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-100 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:h-64">
              <Image
                src="/images/marketing/mission/mission-quality.jpg"
                alt={t("homeMissionImage1Alt")}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-100 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:h-48">
              <Image
                src="/images/marketing/mission/mission-precision.jpg"
                alt={t("homeMissionImage2Alt")}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 h-56 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-100 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:h-64">
              <Image
                src="/images/marketing/mission/mission-partnership.jpg"
                alt={t("homeMissionImage3Alt")}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
