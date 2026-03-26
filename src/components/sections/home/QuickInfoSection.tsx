import { SectionContainer } from "@/components/ui/SectionContainer";

export function QuickInfoSection() {
  return (
    <section className="bg-stone-50 py-24">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              About Amber Dental
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Comprehensive dentistry designed for lifelong oral health.
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              From preventive visits to advanced restorative care, our team
              combines modern technology and thoughtful communication so you can
              make confident decisions at every appointment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]">
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                Location
              </p>
              <p className="mt-2 text-base font-semibold text-zinc-900">
                New York, USA
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]">
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                Opening Hours
              </p>
              <p className="mt-2 text-base font-semibold text-zinc-900">
                Mon-Fri, 9:00-17:00
              </p>
            </article>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
