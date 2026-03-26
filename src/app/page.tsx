import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutVisualSection } from "@/components/sections/home/AboutVisualSection";
import { BlogPreviewSection } from "@/components/sections/home/BlogPreviewSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { ExpertiseSection } from "@/components/sections/home/ExpertiseSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PricingPreviewSection } from "@/components/sections/home/PricingPreviewSection";
import { QuickInfoSection } from "@/components/sections/home/QuickInfoSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { TeamSection } from "@/components/sections/home/TeamSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { ValuesSection } from "@/components/sections/home/ValuesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <HeroSection />
        <QuickInfoSection />
        <ExpertiseSection />
        <ServicesSection />
        <PricingPreviewSection />
        <AboutVisualSection />
        <TestimonialsSection />
        <TeamSection />
        <ValuesSection />
        <ContactSection />
        <BlogPreviewSection />
      </main>
      <Footer />
    </div>
  );
}
