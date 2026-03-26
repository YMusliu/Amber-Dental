import { SectionContainer } from "@/components/ui/SectionContainer";

const tiers = [
  { name: "Checkup Visit", price: "$120", note: "Exam, cleaning, and digital diagnostics." },
  { name: "Smile Refresh", price: "$280", note: "Whitening plan with guided follow-up." },
  { name: "Restorative Plan", price: "Custom", note: "Comprehensive treatment roadmap." },
];

export function PricingPreviewSection() {
  return (
    <section id="pricing" className="bg-white py-24">
      <SectionContainer className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Transparent pricing options for every care stage.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="rounded-2xl border border-zinc-200/80 bg-stone-50/70 p-7 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {tier.name}
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
                {tier.price}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{tier.note}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
