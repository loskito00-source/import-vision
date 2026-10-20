import { purpose } from "@/content";
import { FocusText } from "./FocusText";
import { IconIris } from "./icons";

// Misión como visión de cerca (lo que hacemos hoy) y visión como visión de lejos: 2030 se enfoca al entrar.
export function Purpose() {
  const { mission, vision } = purpose;
  return (
    <section id="mision" className="on-navy bg-navy py-20 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="max-w-[20ch] text-[2.1rem] font-bold leading-[1.08] md:text-5xl">{purpose.title}</h2>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <article className="lg:col-span-6 lg:pt-6">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-cyan md:text-[1.75rem]">
              <IconIris className="size-8 shrink-0" />
              {mission.title}
            </h3>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white md:text-xl">{mission.text}</p>
            <ul className="mt-9 flex flex-col gap-4" aria-label="Pilares de la misión">
              {mission.pillars.map((pillar) => (
                <li key={pillar} className="flex items-center gap-4 font-display text-xl font-semibold md:text-2xl">
                  <span aria-hidden className="size-3 shrink-0 rounded-full bg-cyan" />
                  {pillar}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] bg-white p-7 text-navy md:p-10 lg:col-span-6">
            <span
              aria-hidden
              className="block font-display text-[5.5rem] font-bold leading-[0.85] tracking-[-0.04em] text-teal sm:text-[7rem] lg:text-[8.5rem]"
            >
              <FocusText>{vision.year}</FocusText>
            </span>
            <h3 className="mt-6 text-2xl font-bold md:text-[1.75rem]">{vision.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink">{vision.text}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {vision.channels.map((channel) => (
                <li key={channel.name} className="rounded-2xl bg-mist px-5 py-4">
                  <span className="block font-display font-semibold">{channel.name}</span>
                  <span className="mt-1 block text-[0.98rem] leading-snug text-muted">{channel.text}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
