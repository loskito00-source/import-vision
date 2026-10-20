import Image from "next/image";
import { payment } from "@/content";
import { IconIris } from "./icons";

// Visual de cada modalidad: nómina como recibo dividido en cuotas, 50/50 como un lente mitad lleno.
function PayrollGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="size-16" aria-hidden>
      <rect x="10" y="8" width="44" height="48" rx="6" fill="#e8f0f6" />
      <path d="M18 20h28M18 30h28M18 40h16" stroke="#00306c" strokeWidth="3" strokeLinecap="round" />
      <circle cx="46" cy="44" r="9" fill="#00788f" />
      <path d="m42 44 3 3 5-6" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SplitGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="size-16" aria-hidden>
      <circle cx="32" cy="32" r="24" fill="#e8f0f6" stroke="#00306c" strokeWidth="3" />
      <path d="M32 8a24 24 0 0 1 0 48Z" fill="#00788f" />
      <path d="M32 6v52" stroke="#00306c" strokeWidth="3" />
    </svg>
  );
}

const glyphs = [PayrollGlyph, SplitGlyph];

export function Payment() {
  return (
    <section id="pagos" className="py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-[2.1rem] font-bold leading-[1.08] text-navy md:text-5xl">{payment.title}</h2>
          <p className="mt-4 max-w-[40ch] text-lg text-muted">{payment.intro}</p>
          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[2rem]">
            <Image
              src={payment.image.src}
              alt={payment.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[60%_30%]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-7 lg:pt-2">
          {payment.options.map((opt, i) => {
            const Glyph = glyphs[i];
            return (
              <article
                key={opt.title}
                className="lens-sheen flex flex-col gap-5 rounded-[2rem] bg-white p-7 ring-1 ring-line sm:flex-row sm:items-start sm:gap-7 md:p-9"
              >
                <Glyph />
                <div>
                  <h3 className="text-2xl font-bold text-navy md:text-[1.75rem]">{opt.title}</h3>
                  <p className="mt-2 max-w-[44ch] text-lg text-muted">{opt.text}</p>
                </div>
              </article>
            );
          })}

          <p className="on-navy flex items-center gap-5 rounded-[2rem] bg-navy p-7 text-white md:p-9">
            <IconIris className="size-10 shrink-0 text-cyan" />
            <span className="font-display text-xl font-semibold leading-snug md:text-2xl">{payment.highlight}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
