import { SectionContainer } from "@/components/ui/SectionContainer";
import Image from "next/image";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const bulletKeys = ["about.bullet1", "about.bullet2", "about.bullet3"] as const;

const imageSrcs = [
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1588776814546-ec7e495f0f9f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80",
] as const;

export function AboutVisualSection({ t }: { t: TranslateFn }) {
  const alt = t("about.imageAlt");

  return (
    <section id="about" className="bg-white py-20">
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {t("about.title")}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-zinc-600">
              {bulletKeys.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="card-glass-shine relative h-40 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-100 sm:h-52">
              <Image
                src={imageSrcs[0]}
                alt={alt}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>
            <div className="card-glass-shine relative h-56 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-200 sm:h-72">
              <Image
                src={imageSrcs[1]}
                alt={alt}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>
            <div className="card-glass-shine relative h-48 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-200 sm:h-64">
              <Image
                src={imageSrcs[2]}
                alt={alt}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>
            <div className="card-glass-shine relative h-36 overflow-hidden rounded-2xl border border-zinc-200 bg-stone-100 sm:h-44">
              <Image
                src={imageSrcs[3]}
                alt={alt}
                fill
                className="relative z-[2] object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
