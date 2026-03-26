import { SectionContainer } from "@/components/ui/SectionContainer";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="bg-[#f7fafb] py-24 lg:py-30">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="max-w-[720px] space-y-9 lg:col-span-7">
            <h1 className="max-w-[860px] text-[3.1rem] font-semibold leading-[1.01] tracking-tight text-zinc-900 sm:text-[3.8rem] lg:text-[5.15rem]">
              Your smile. Our mission at Amber Dental.
            </h1>
            <p className="max-w-[670px] text-[1.2rem] leading-[1.7] text-zinc-600">
              We provide personalized dental care to help you maintain strong
              oral health and a confident smile, with modern treatment and a
              calm clinic experience.
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-1">
              <button className="rounded-full bg-zinc-900 px-10 py-3.5 text-base font-semibold text-white shadow-[0_5px_14px_rgba(24,24,27,0.14)] transition hover:bg-zinc-800">
                Book Consultation
              </button>
              <button className="rounded-full border border-zinc-300 bg-transparent px-10 py-3.5 text-base font-medium text-zinc-800 transition hover:bg-white/70">
                Learn About Care
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="relative h-[460px] w-full overflow-hidden rounded-[32px]">
              <Image
                src="/images/dental-hero.jpg"
                alt="Amber Dental clinic"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
