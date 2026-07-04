import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { locales, type Locale } from "@/lib/i18n/config";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";
import { getPresentationHref } from "@/lib/presentation";
import { MobileMenu } from "./MobileMenu";

const navKeys = [
  { key: "header.home", href: "#home" },
  { key: "header.about", href: "#about" },
  { key: "header.services", href: "#services" },
  { key: "header.pricing", href: "#pricing" },
  { key: "header.contact", href: "#contact" },
] as const;

export function Header({ t, locale }: { t: TranslateFn; locale: Locale }) {
  const presentationHref = getPresentationHref(locale);
  const navItems = navKeys.map((n) => ({ label: t(n.key), href: n.href }));
  return (
    <header className="header-enter sticky top-0 z-30 border-b border-zinc-200/70 bg-white/88 backdrop-blur-md">
      <SectionContainer className="py-3">
        <div className="grid h-[62px] grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="flex min-w-0 items-center gap-3 justify-self-start">
            <Link href={`/${locale}`} className="flex shrink-0 items-center">
              <Image
                src="/amber-logo-mark.svg"
                alt={t("header.logoAlt")}
                width={156}
                height={48}
                className="h-10 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>

            <p className="hidden text-[10px] font-normal uppercase tracking-[0.04em] text-zinc-400 md:block">
              {t("header.tagline")}
            </p>
          </div>

          <nav
            aria-label={t("header.navAria")}
            className="hidden min-w-0 max-w-[min(100vw-8rem,100%)] justify-self-center md:block md:max-w-none"
          >
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-10">
              {navKeys.map((link) => (
                <li key={link.key} className="shrink-0">
                  <a
                    href={link.href}
                    className="whitespace-nowrap text-xs font-normal tracking-[0.01em] text-zinc-700 transition-colors duration-200 hover:text-zinc-950 md:text-[14px]"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 justify-self-end sm:gap-3">
            <a
              href={presentationHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("header.presentationAria")}
              className="hidden items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-800 transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-50 md:inline-flex md:px-4 md:py-2.5 md:text-[14px]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              {t("header.presentation")}
            </a>
            <a
              href="#contact"
              className="hidden rounded-xl bg-zinc-950 px-3 py-2 text-xs font-medium text-white transition-colors duration-200 hover:bg-zinc-800 md:inline-flex md:px-5 md:py-2.5 md:text-[14px]"
            >
              {t("header.cta")}
            </a>
            <div
              className="flex shrink-0 items-center rounded-lg border border-zinc-200 bg-white p-0.5 text-[11px] font-semibold uppercase tracking-wide"
              role="group"
              aria-label="Language"
            >
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  prefetch={false}
                  scroll={false}
                  className={`rounded-md px-2 py-1.5 transition sm:px-2.5 ${
                    locale === l
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  {l}
                </Link>
              ))}
            </div>
            <MobileMenu
              navItems={navItems}
              presentationHref={presentationHref}
              presentationLabel={t("header.presentation")}
              presentationAria={t("header.presentationAria")}
              ctaLabel={t("header.cta")}
              navAria={t("header.navAria")}
              openLabel={t("header.menuOpen")}
              closeLabel={t("header.menuClose")}
            />
          </div>
        </div>
      </SectionContainer>
    </header>
  );
}
