import Image from "next/image";
import { why } from "@/content";
import { FocusText } from "./FocusText";

// Tamaños de cada línea, de mayor a menor, como una carta de agudeza visual.
const sizes = [
  "text-[3.6rem] sm:text-7xl lg:text-[6.5rem]",
  "text-[2rem] sm:text-5xl lg:text-[3.6rem]",
  "text-[1.7rem] sm:text-4xl lg:text-[2.8rem]",
  "text-[1.45rem] sm:text-3xl lg:text-[2.2rem]",
];

export function Why() {
  return (
    <section id="nosotros" className="overflow-hidden bg-white py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-[2.1rem] font-bold leading-[1.08] text-navy md:text-5xl">{why.title}</h2>
          <p className="mt-5 max-w-[42ch] text-lg text-muted">{why.intro}</p>

          <figure className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[2rem] lg:block">
            <Image src={why.image.src} alt={why.image.alt} fill sizes="40vw" className="object-cover" />
          </figure>
        </div>

        {/* Carta de agudeza */}
        <ol className="flex flex-col items-center gap-9 text-center lg:col-span-7 lg:gap-11 lg:pt-4" aria-label="Por qué elegirnos">
          {why.lines.map((line, i) => (
            <li key={line.big} className="w-full">
              <span className={`block font-display font-bold leading-[0.95] tracking-[-0.03em] text-navy ${sizes[i]}`}>
                <FocusText delay={i * 0.12}>{line.big}</FocusText>
              </span>
              <span className="mt-2 block text-[1.0625rem] text-muted md:text-lg">{line.small}</span>
            </li>
          ))}
          <li aria-hidden className="flex w-full max-w-md flex-col gap-2 pt-2">
            <span className="h-[3px] rounded bg-teal" />
            <span className="h-[3px] rounded bg-cyan/70" />
          </li>
        </ol>
      </div>
    </section>
  );
}
