"use client";

import Image from "next/image";
import { m } from "motion/react";
import { process } from "@/content";
import { IconRuler, IconTeam } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;
const noteIcons = [IconRuler, IconTeam];

export function Process() {
  return (
    <section id="proceso" className="on-navy reticle-bg relative overflow-hidden bg-navy-deep py-20 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-[2.1rem] font-bold leading-[1.08] md:text-5xl">{process.title}</h2>
          <p className="mt-4 max-w-[44ch] text-lg text-haze">{process.intro}</p>
        </div>

        <ol className="relative mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {/* Línea que se dibuja: escala en X en escritorio, en Y en móvil */}
          <m.span
            aria-hidden
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] origin-left bg-cyan/60 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 1.4, ease }}
          />
          <m.span
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-px origin-top bg-cyan/60 md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 1.4, ease }}
          />
          {process.steps.map((step, i) => (
            <m.li
              key={step.title}
              className="relative flex gap-5 md:flex-col md:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.3 }}
            >
              <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-cyan font-display text-lg font-bold text-navy-deep">
                {i + 1}
              </span>
              <div>
                <h3 className="text-2xl font-bold md:text-[1.75rem]">{step.title}</h3>
                <p className="mt-2 max-w-[34ch] text-lg text-haze">{step.text}</p>
              </div>
            </m.li>
          ))}
        </ol>

        <div className="mt-16 grid items-center gap-8 md:mt-24 lg:grid-cols-12">
          <figure className="relative aspect-[676/278] overflow-hidden rounded-[2rem] ring-1 ring-white/15 lg:col-span-7">
            <Image src={process.image.src} alt={process.image.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </figure>
          <ul className="grid gap-4 lg:col-span-5">
            {process.notes.map((note, i) => {
              const Icon = noteIcons[i];
              return (
                <li key={note} className="flex items-start gap-4 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-inset ring-white/10">
                  <Icon className="size-8 shrink-0 text-cyan" />
                  <p className="text-lg">{note}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
