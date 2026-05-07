import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

export function ContactSection({ t }: { t: TranslateFn }) {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <SectionContainer>
        <div className="card-glass-shine rounded-[28px] border border-zinc-200 bg-[#fbfaf4] p-6 sm:p-8 lg:grid lg:grid-cols-[1.5fr_0.9fr] lg:gap-8">
          <div className="relative z-[2] min-w-0 space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {t("homeContactTitle")}
            </h2>
            <fieldset className="grid gap-3 sm:grid-cols-2">
              <legend className="sr-only">{t("homeContactFormLegend")}</legend>
              <input
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm"
                placeholder={t("homeContactNameLabel")}
              />
              <input
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm"
                placeholder={t("homeContactEmailLabel")}
              />
              <textarea
                className="min-h-[120px] rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm sm:col-span-2"
                placeholder={t("homeContactNotesLabel")}
              />
              <button
                type="submit"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white sm:col-span-2 sm:w-fit"
              >
                {t("homeContactSubmitCta")}
              </button>
            </fieldset>
          </div>

          <aside className="relative z-[2] mt-10 min-w-0 space-y-2 border-t border-zinc-200 pt-8 text-sm leading-6 text-zinc-700 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="font-semibold uppercase tracking-[0.08em] text-zinc-900">
              {t("homeContactLogisticsTitle")}
            </p>
            <p className="break-words">
              <span className="font-semibold text-zinc-900">{t("homeContactProductionLabel")}</span>{" "}
              {t("homeContactProductionBody")}
            </p>
            <p className="break-words">
              <span className="font-semibold text-zinc-900">{t("homeContactTransportLabel")}</span>{" "}
              {t("homeContactTransportBody")}
            </p>
            <p className="break-words">
              <span className="font-semibold text-zinc-900">{t("homeContactZirconiaLabel")}</span>{" "}
              {t("homeContactZirconiaBody")}
            </p>
            <p className="break-words">
              <span className="font-semibold text-zinc-900">{t("homeContactAlignersLabel")}</span>{" "}
              {t("homeContactAlignersBody")}
            </p>
            <p className="font-semibold text-zinc-900">
              {t("homeContactInvoicingTitle")}
            </p>
            <p className="break-words">{t("homeContactInvoicingBody")}</p>
            <p className="break-words">{t("homeContactSecurityLine")}</p>
            <p className="break-words">{t("homeContactPaymentLine")}</p>
            <p className="font-semibold text-zinc-900">
              {t("homeContactChannelsTitle")}
            </p>
            <p className="break-words">{t("homeContactChannelsBody")}</p>
            <p className="font-semibold text-zinc-900">
              {t("homeContactLocationTitle")}
            </p>
            <p>{t("homeContactLocationBody")}</p>
          </aside>
        </div>
      </SectionContainer>
    </section>
  );
}
