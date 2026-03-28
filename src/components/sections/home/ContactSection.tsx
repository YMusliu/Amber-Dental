import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

export function ContactSection({ t }: { t: TranslateFn }) {
  return (
    <section id="contact" className="bg-white py-20">
      <SectionContainer>
        <div className="card-glass-shine grid gap-6 rounded-3xl border border-zinc-200 bg-stone-50 p-5 sm:p-7 lg:grid-cols-3">
          <div className="relative z-[2] min-w-0 space-y-3 lg:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {t("contact.title")}
            </h2>
            <fieldset className="grid gap-3 sm:grid-cols-2">
              <legend className="sr-only">{t("contact.formLegend")}</legend>
              <input
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm"
                placeholder=""
              />
              <input
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm"
                placeholder=""
              />
              <input
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm sm:col-span-2"
                placeholder=""
              />
              <textarea
                className="min-h-28 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm sm:col-span-2"
                placeholder=""
              />
              <button
                type="submit"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white sm:col-span-2 sm:w-fit"
              >
                {t("contact.submitCta")}
              </button>
            </fieldset>
          </div>
          <aside className="relative z-[2] min-w-0 space-y-3 border-t border-zinc-200 pt-5 text-sm text-zinc-700 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="font-semibold text-zinc-900">
              {t("contact.aside.logisticsTitle")}
            </p>
            <p className="break-words">
              <span className="font-medium text-zinc-800">
                {t("contact.aside.productionLabel")}
              </span>{" "}
              {t("contact.aside.productionBody")}
            </p>
            <p className="break-words">
              <span className="font-medium text-zinc-800">
                {t("contact.aside.transportLabel")}
              </span>{" "}
              {t("contact.aside.transportBody")}
            </p>
            <p className="break-words">
              <span className="font-medium text-zinc-800">
                {t("contact.aside.zirconiaLabel")}
              </span>{" "}
              {t("contact.aside.zirconiaBody")}
            </p>
            <p className="break-words">
              <span className="font-medium text-zinc-800">
                {t("contact.aside.alignersLabel")}
              </span>{" "}
              {t("contact.aside.alignersBody")}
            </p>
            <p className="font-semibold text-zinc-900">
              {t("contact.aside.billingTitle")}
            </p>
            <p className="break-words">{t("contact.aside.billingBody")}</p>
            <p className="break-words">{t("contact.aside.secureLine")}</p>
            <p className="break-words">{t("contact.aside.paymentAgreementLine")}</p>
            <p className="font-semibold text-zinc-900">
              {t("contact.aside.channelsTitle")}
            </p>
            <p className="break-words">{t("contact.aside.channelsBody")}</p>
            <p className="font-semibold text-zinc-900">
              {t("contact.aside.locationTitle")}
            </p>
            <p>{t("contact.aside.locationBody")}</p>
          </aside>
        </div>
      </SectionContainer>
    </section>
  );
}
