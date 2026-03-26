import { SectionContainer } from "@/components/ui/SectionContainer";

export function AboutSection() {
  return (
    <section id="about" className="bg-zinc-50 py-22">
      <SectionContainer>
        <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">
              Why Choose Amber Dental
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Clinical precision with a genuinely personal approach.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-zinc-600 sm:text-base">
            <p>
              Our team combines modern diagnostics with transparent treatment
              guidance, so you always understand your options before care
              begins.
            </p>
            <p>
              From routine visits to full smile restoration, every step is
              planned for comfort, long-term health, and outcomes you can feel
              proud of.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
