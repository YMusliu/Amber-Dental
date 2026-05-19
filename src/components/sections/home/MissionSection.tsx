import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

export function MissionSection({ t }: { t: TranslateFn }) {
  return (
    <section id="mission" className="bg-white py-20">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-12">
          <div className="space-y-4 lg:max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {t("homeMissionTitle")}
            </h2>
            <p className="text-base leading-7 text-zinc-700">{t("homeMissionParagraph1")}</p>
            <p className="text-base leading-7 text-zinc-700">{t("homeMissionParagraph2")}</p>
            <p className="text-base leading-7 text-zinc-700">{t("homeMissionParagraph3")}</p>
          </div>

          <div className="relative aspect-[1024/379] w-full min-h-[200px] overflow-hidden rounded-2xl border border-zinc-200 bg-sky-50 shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:min-h-[240px] lg:min-h-0">
            <Image
              src="/images/marketing/mission/mission-banner.jpg"
              alt={t("homeMissionBannerAlt")}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              quality={90}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
