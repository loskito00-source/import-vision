import { hero } from "@/content";
import { whatsappHref } from "@/lib/links";
import { Button } from "./Button";
import { HeroLens } from "./HeroLens";
import { IconWhatsapp } from "./icons";

export function Hero() {
  return (
    <section
      id="inicio"
      className="on-navy reticle-bg relative isolate overflow-hidden bg-navy pb-14 pt-28 text-white md:pb-20 md:pt-36"
    >
      {/* Halo de luz detrás del lente */}
      <div
        className="absolute -right-40 top-10 -z-10 size-[44rem] rounded-full bg-[radial-gradient(circle,rgb(0_132_156/0.45),transparent_65%)] max-lg:-right-64 max-lg:top-72"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 className="max-w-[14ch] text-[2.6rem] font-bold leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[36ch] text-lg leading-relaxed text-haze md:text-xl">{hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappHref} variant="light" icon={<IconWhatsapp className="size-5" />}>
              {hero.primaryCta}
            </Button>
            <Button href="#proceso" variant="ghost-light">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroLens />
        </div>
      </div>

      <dl className="mx-auto mt-14 grid max-w-7xl grid-cols-3 gap-4 px-5 md:mt-20 md:px-8">
        {hero.facts.map((f) => (
          <div key={f.value} className="flex flex-col-reverse justify-end border-t border-white/20 pt-4">
            <dt className="mt-2 text-[0.95rem] leading-snug text-haze md:text-base">{f.label}</dt>
            <dd className="font-display text-[1.6rem] font-bold leading-none text-cyan sm:text-4xl md:text-5xl">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
