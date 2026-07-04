import type { Locale } from "./i18n/config";

const presentationByLocale: Record<Locale, string> = {
  en: "/documents/ENG_AmberLab.pdf",
  // The Albanian presentation PDF is ~74 MB — too heavy to ship; use the
  // light English one until a compressed Albanian version exists.
  sq: "/documents/ENG_AmberLab.pdf",
};

export function getPresentationHref(locale: Locale): string {
  return presentationByLocale[locale] ?? presentationByLocale.en;
}
