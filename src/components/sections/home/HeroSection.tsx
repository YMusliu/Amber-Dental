import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { getPresentationHref } from "@/lib/presentation";

export function HeroSection({ t, locale }: { t: TranslateFn; locale: Locale }) {
  const presentationHref = getPresentationHref(locale);
  return (
    <section id="home" className="bg-[#f7fafb] py-20 lg:py-24">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="hero-stagger order-1 min-w-0 max-w-[720px] space-y-7">
            <h1 className="max-w-[860px] text-[3.1rem] font-semibold leading-[1.01] tracking-tight text-zinc-900 sm:text-[3.8rem] lg:text-[5.15rem]">
              {t("hero.title")}
            </h1>
            <p className="max-w-[670px] text-xl font-medium uppercase tracking-wide text-zinc-800">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button className="rounded-full bg-zinc-900 px-10 py-3.5 text-base font-semibold text-white shadow-[0_5px_14px_rgba(24,24,27,0.14)] transition duration-200 ease-out hover:bg-zinc-800 hover:shadow-[0_8px_22px_rgba(24,24,27,0.18)] active:scale-[0.98] motion-reduce:active:scale-100">
                {t("hero.ctaSubmitCase")}
              </button>
              <button className="rounded-full border border-zinc-300 bg-transparent px-10 py-3.5 text-base font-medium text-zinc-800 transition duration-200 ease-out hover:border-zinc-400 hover:bg-white/70 active:scale-[0.98] motion-reduce:active:scale-100">
                {t("hero.ctaContactLab")}
              </button>
              <a
                href={presentationHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("header.presentationAria")}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-10 py-3.5 text-base font-medium text-zinc-800 transition duration-200 ease-out hover:border-zinc-400 hover:bg-zinc-50 active:scale-[0.98] motion-reduce:active:scale-100"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                {t("hero.ctaPresentation")}
              </a>
            </div>
          </div>

          <div className="order-2 mt-10 flex min-w-0 justify-center lg:mt-0 lg:justify-end">
            <p className="mx-auto max-w-xl text-center text-[22px] font-medium leading-snug text-zinc-900 sm:text-[28px] lg:text-[32px]">
              {t("homeHeroTagline")}
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
