import { SectionContainer } from "@/components/ui/SectionContainer";

export function ContactCtaSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <SectionContainer>
        <div className="rounded-3xl bg-zinc-900 px-8 py-12 text-white sm:px-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-300">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready for a healthier smile at Amber Dental?
            </h2>
            <p className="text-sm leading-7 text-zinc-200 sm:text-base">
              Call us or request your first visit online. We will help you find
              a time that fits your schedule.
            </p>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200">
              Request Appointment
            </button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
