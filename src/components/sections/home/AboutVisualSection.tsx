import { SectionContainer } from "@/components/ui/SectionContainer";
import Image from "next/image";

export function AboutVisualSection() {
  return (
    <section id="about" className="bg-white py-24">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Our Approach
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              We combine advanced diagnostics with calm, personalized care.
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              Each treatment plan is carefully tailored to your goals and oral
              health history, with a clear explanation of every step and
              outcome.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-100 sm:h-52">
              <Image
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"
                alt="Dental tools in clinic"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-200 sm:h-72">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-ec7e495f0f9f?auto=format&fit=crop&w=900&q=80"
                alt="Dentist consultation"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-200 sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80"
                alt="Dental chair and room"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-36 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-100 sm:h-44">
              <Image
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80"
                alt="Dentist preparing instruments"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
