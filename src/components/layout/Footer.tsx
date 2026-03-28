import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const pageKeys = [
  "footer.pageHome",
  "footer.pageAbout",
  "footer.pageServices",
  "footer.pagePricing",
  "footer.pageContact",
] as const;

export function Footer({ t }: { t: TranslateFn }) {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-20">
      <SectionContainer className="space-y-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold tracking-tight text-zinc-900">
              {t("footer.brand")}
            </p>
            <p className="text-sm leading-6 text-zinc-600">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {t("footer.contentsTitle")}
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-zinc-700">
              {pageKeys.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {t("footer.contactHeading")}
            </p>
            <p className="break-words text-sm text-zinc-700">
              {t("footer.emailsLine")}
            </p>
            <p className="text-sm text-zinc-700">{t("footer.phone")}</p>
            <p className="text-sm text-zinc-700">{t("footer.address")}</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {t("footer.thanksTitle")}
            </p>
            <p className="text-sm text-zinc-700">{t("footer.thanksSubtitle")}</p>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-4 text-sm text-zinc-500">
          <p>{t("footer.copyright")}</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
