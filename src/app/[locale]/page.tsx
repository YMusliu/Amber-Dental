import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutVisualSection } from "@/components/sections/home/AboutVisualSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { ExpertiseSection } from "@/components/sections/home/ExpertiseSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PricingPreviewSection } from "@/components/sections/home/PricingPreviewSection";
import { QuickInfoSection } from "@/components/sections/home/QuickInfoSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { Reveal } from "@/components/ui/Reveal";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getTranslator } from "@/lib/i18n/get-dictionary";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = await getTranslator(raw);
  return {
    title: t("metadata.pageTitle"),
    description: t("metadata.pageDescription"),
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = await getTranslator(locale);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header t={t} locale={locale} />
      <main className="overflow-x-hidden">
        <HeroSection t={t} />
        <Reveal>
          <QuickInfoSection t={t} />
        </Reveal>
        <Reveal>
          <ExpertiseSection t={t} />
        </Reveal>
        <Reveal>
          <ServicesSection t={t} />
        </Reveal>
        <Reveal>
          <PricingPreviewSection t={t} />
        </Reveal>
        <Reveal>
          <AboutVisualSection t={t} />
        </Reveal>
        <Reveal>
          <ContactSection t={t} />
        </Reveal>
      </main>
      <Reveal>
        <Footer t={t} />
      </Reveal>
    </div>
  );
}
