import { SectionContainer } from "@/components/ui/SectionContainer";
import Image from "next/image";
import type { TranslateFn } from "@/lib/i18n/get-dictionary";

const stepKeys = [
  { title: "expertise.step1.title", text: "expertise.step1.text" },
  { title: "expertise.step2.title", text: "expertise.step2.text" },
  { title: "expertise.step3.title", text: "expertise.step3.text" },
  { title: "expertise.step4.title", text: "expertise.step4.text" },
] as const;

export function ExpertiseSection({ t }: { t: TranslateFn }) {
  const topImages = [
    {
      src: "/images/marketing/workflow/workflow-digital-scan.jpg",
      alt: t("homeWorkflowImageDigitalScanAlt"),
      label: t("homeWorkflowImageDigitalScanLabel"),
    },
    {
      src: "/images/marketing/workflow/workflow-milling-production.jpg",
      alt: t("homeWorkflowImageMillingAlt"),
      label: t("homeWorkflowImageMillingLabel"),
    },
    {
      src: "/images/marketing/workflow/workflow-finishing-staining.jpg",
      alt: t("homeWorkflowImageFinishingAlt"),
      label: t("homeWorkflowImageFinishingLabel"),
    },
  ];

  const bottomImages = [
    {
      src: "/images/marketing/workflow/workflow-3d-printing.jpg",
      alt: t("homeWorkflowImage3DPrintingAlt"),
      label: t("homeWorkflowImage3DPrintingLabel"),
    },
    {
      src: "/images/marketing/workflow/workflow-adaptation.jpg",
      alt: t("homeWorkflowImageAdaptationAlt"),
      label: t("homeWorkflowImageAdaptationLabel"),
    },
    {
      src: "/images/marketing/workflow/workflow-quality-control.jpg",
      alt: t("homeWorkflowImageQualityControlAlt"),
      label: t("homeWorkflowImageQualityControlLabel"),
    },
    {
      src: "/images/marketing/workflow/workflow-packing-delivery.jpg",
      alt: t("homeWorkflowImagePackingAlt"),
      label: t("homeWorkflowImagePackingLabel"),
    },
  ];

  return (
    <section className="bg-stone-50 py-20">
      <SectionContainer className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {t("expertise.title")}
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {topImages.map((image) => (
              <WorkflowTile key={image.src} image={image} aspect="aspect-[4/3]" />
            ))}
          </div>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-4">
            {bottomImages.map((image) => (
              <WorkflowTile key={image.src} image={image} aspect="aspect-[4/3]" />
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stepKeys.map((item) => (
            <article
              key={item.title}
              className="card-glass-shine min-w-0 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
            >
              <div className="relative z-[2]">
                <div className="mb-3 h-10 w-10 rounded-xl border border-amber-100 bg-amber-50" />
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{t(item.text)}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

type WorkflowImage = { src: string; alt: string; label: string };

function WorkflowTile({ image, aspect }: { image: WorkflowImage; aspect: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-zinc-200 bg-stone-100 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${aspect}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        quality={90}
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-900 shadow-sm backdrop-blur">
        {image.label}
      </div>
    </div>
  );
}
