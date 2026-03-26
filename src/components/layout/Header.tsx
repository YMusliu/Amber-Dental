import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/88 backdrop-blur-md">
      <SectionContainer className="py-4">
        <div className="grid h-[68px] grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center gap-3 justify-self-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/amber-logo-instagram.jpg"
                alt="Amber Dental logo"
                width={156}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            <p className="hidden text-[10px] font-normal uppercase tracking-[0.04em] text-zinc-400 md:block">
              Based in Prizren
            </p>
          </div>

          <nav aria-label="Main navigation" className="justify-self-center">
            <ul className="flex items-center gap-10 text-[14px] text-zinc-700">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-normal tracking-[0.01em] transition-colors duration-200 hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="justify-self-end">
            <button className="rounded-xl bg-zinc-950 px-5 py-2.5 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-zinc-800">
            BOOK NOW
            </button>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
}