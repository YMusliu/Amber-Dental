import { SectionContainer } from "@/components/ui/SectionContainer";
import Image from "next/image";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

export function HeroSection({ t }: { t: TranslateFn }) {
  return (
    <section id="home" className="bg-[#f7fafb] py-20 lg:py-24">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-11">
          <div className="hero-stagger min-w-0 max-w-[720px] space-y-7 lg:col-span-7">
            <h1 className="max-w-[860px] text-[3.1rem] font-semibold leading-[1.01] tracking-tight text-zinc-900 sm:text-[3.8rem] lg:text-[5.15rem]">
              {t("hero.title")}
            </h1>
            <p className="max-w-[670px] text-xl font-medium uppercase tracking-wide text-zinc-800">
              {t("hero.subtitle")}
            </p>
            <p className="max-w-[670px] text-[1.2rem] leading-[1.7] text-zinc-600">
              {t("hero.body")}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button className="rounded-full bg-zinc-900 px-10 py-3.5 text-base font-semibold text-white shadow-[0_5px_14px_rgba(24,24,27,0.14)] transition duration-200 ease-out hover:bg-zinc-800 hover:shadow-[0_8px_22px_rgba(24,24,27,0.18)] active:scale-[0.98] motion-reduce:active:scale-100">
                {t("hero.ctaSubmitCase")}
              </button>
              <button className="rounded-full border border-zinc-300 bg-transparent px-10 py-3.5 text-base font-medium text-zinc-800 transition duration-200 ease-out hover:border-zinc-400 hover:bg-white/70 active:scale-[0.98] motion-reduce:active:scale-100">
                {t("hero.ctaContactLab")}
              </button>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5 lg:justify-self-end">
            <div className="hero-image-enter relative h-[400px] w-full max-w-full overflow-hidden rounded-[32px] lg:h-[420px]">
              <Image
                src="/images/dental-hero.jpg"
                alt={t("hero.imageAlt")}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
