import { SectionContainer } from "@/components/ui/SectionContainer";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1Je4g9bSYU/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/amber.dental?igsh=MTA1YW81NWtqb2o5Zg==",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM19.85 5.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
      </svg>
    ),
  },
];

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
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
