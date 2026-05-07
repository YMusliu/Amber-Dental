import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

export function LogisticsSection({ t }: { t: TranslateFn }) {
  return (
    <section id="logistics" className="bg-stone-50 py-20">
      <SectionContainer className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {t("homeLogisticsTitle")}
          </h2>
          <p className="text-base leading-7 text-zinc-700">{t("homeLogisticsIntro")}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="card-glass-shine rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="relative z-[2] space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {t("homeLogisticsProductionTitle")}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {t("homeLogisticsProductionPoint1")}
                </p>
                <p className="text-sm leading-6 text-zinc-700">
                  {t("homeLogisticsProductionPoint2")}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900">{t("homeLogisticsDhlTitle")}</h3>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-zinc-700">
                  {["homeLogisticsDhlPoint1", "homeLogisticsDhlPoint2", "homeLogisticsDhlPoint3"].map(
                    (key) => (
                      <li key={key}>- {t(key)}</li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {t("homeLogisticsZirconiaTitle")}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {t("homeLogisticsZirconiaPoint")}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {t("homeLogisticsAlignersTitle")}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {t("homeLogisticsAlignersPoint")}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {t("homeLogisticsInvoicingTitle")}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {t("homeLogisticsInvoicingPoint")}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {t("homeLogisticsPaymentTitle")}
                </h3>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-zinc-700">
                  {[
                    "homeLogisticsPaymentPoint1",
                    "homeLogisticsPaymentPoint2",
                    "homeLogisticsPaymentPoint3",
                  ].map((key) => (
                    <li key={key}>- {t(key)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            <div className="card-glass-shine relative h-44 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <Image
                src="/images/marketing/logistics/logistics-1.svg"
                alt={t("homeLogisticsImage1Alt")}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>
            <div className="card-glass-shine relative h-44 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <Image
                src="/images/marketing/logistics/logistics-1.svg"
                alt={t("homeLogisticsImage2Alt")}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>
            <div className="card-glass-shine rounded-2xl border border-zinc-200 bg-white p-4">
              <p className="text-sm leading-6 text-zinc-700">
                {t("homeLogisticsSupportText")}
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
