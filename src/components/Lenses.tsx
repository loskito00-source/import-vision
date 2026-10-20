"use client";

import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { lenses } from "@/content";
import { IconScreen, IconShield, IconSun } from "./icons";

type LensId = (typeof lenses.types)[number]["id"];
const treatmentIcons = [IconShield, IconSun, IconScreen];
const ease = [0.22, 1, 0.36, 1] as const;

// Mapa de zonas de visión de cada tipo de lente, dibujado sobre la silueta de un cristal.
function LensMap({ type, name }: { type: LensId; name: string }) {
  const zone = (props: { d: string; fill: string; label: string; x: number; y: number }, i: number) => (
    <m.g
      key={`${type}-${props.label}`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: i * 0.08, ease }}
      style={{ originX: "160px", originY: "130px" }}
    >
      <path d={props.d} fill={props.fill} />
      <text x={props.x} y={props.y} textAnchor="middle" className="fill-navy font-sans text-[15px] font-semibold">
        {props.label}
      </text>
    </m.g>
  );

  // Silueta de lente tipo wayfarer
  const full = "M22 46C22 22 42 16 160 16s138 6 138 30c0 52-8 100-32 130-21 27-56 42-106 42S75 203 54 176C30 146 22 98 22 46Z";
  const zones: Record<LensId, Parameters<typeof zone>[0][]> = {
    mono: [{ d: full, fill: "rgb(127 216 230 / 0.45)", label: "Una distancia", x: 160, y: 122 }],
    bi: [
      { d: full, fill: "rgb(127 216 230 / 0.35)", label: "Lejos", x: 160, y: 90 },
      { d: "M100 165h120c0 30-25 48-60 48s-60-18-60-48Z", fill: "rgb(0 120 143 / 0.55)", label: "Cerca", x: 160, y: 196 },
    ],
    pro: [
      { d: "M0 0h320v108H0Z", fill: "rgb(127 216 230 / 0.45)", label: "Lejos", x: 160, y: 72 },
      { d: "M140 108h40l8 52h-56Z", fill: "rgb(0 132 156 / 0.4)", label: "Intermedia", x: 160, y: 140 },
      { d: "M122 160h76c4 30-10 52-38 52s-42-22-38-52Z", fill: "rgb(0 120 143 / 0.6)", label: "Cerca", x: 160, y: 195 },
    ],
    ocu: [
      { d: "M0 0h320v120H0Z", fill: "rgb(0 132 156 / 0.35)", label: "Intermedia", x: 160, y: 80 },
      { d: "M0 120h320v140H0Z", fill: "rgb(0 120 143 / 0.55)", label: "Cerca", x: 160, y: 185 },
    ],
  };

  return (
    <svg viewBox="0 0 320 236" className="w-full" role="img" aria-label={`Zonas de visión de un lente ${name.toLowerCase()}`}>
      <defs>
        <clipPath id="lens-clip">
          <path d={full} />
        </clipPath>
      </defs>
      <path d={full} fill="white" stroke="#00306c" strokeOpacity=".2" strokeWidth="2" />
      <g clipPath="url(#lens-clip)">
        <AnimatePresence mode="popLayout">{zones[type].map(zone)}</AnimatePresence>
      </g>
      <path d={full} fill="none" stroke="#00306c" strokeWidth="3" />
      <path d="M48 46c22-14 50-20 80-21" stroke="white" strokeWidth="5" strokeLinecap="round" opacity=".8" fill="none" />
    </svg>
  );
}

export function Lenses() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const current = lenses.types[active];

  const onKey = (e: KeyboardEvent) => {
    const n = lenses.types.length;
    const next = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!next) return;
    e.preventDefault();
    const i = (active + next + n) % n;
    setActive(i);
    tabs.current[i]?.focus();
  };

  return (
    <section id="lentes" className="bg-mist py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-[2.1rem] font-bold leading-[1.08] text-navy md:text-5xl">{lenses.title}</h2>
            <p className="mt-4 max-w-[44ch] text-lg text-muted">{lenses.intro}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] lg:col-span-6">
            <Image
              src={lenses.image.src}
              alt={lenses.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[50%_40%]"
            />
          </div>
        </div>

        {/* Selector de tipo de lente */}
        <div className="mt-12 grid gap-6 rounded-[2rem] bg-white p-5 ring-1 ring-line md:mt-16 md:p-10 lg:grid-cols-12">
          <div
            role="tablist"
            aria-label="Tipos de lente"
                        onKeyDown={onKey}
            className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:col-span-4 lg:grid-cols-1"
          >
            {lenses.types.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`${uid}-tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={`${uid}-panel`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={`min-h-14 rounded-2xl px-4 text-left font-display text-[1.05rem] font-semibold transition-colors duration-300 md:px-3 md:text-center md:text-lg lg:px-6 lg:text-left lg:text-xl ${
                  i === active ? "bg-navy text-white" : "text-navy hover:bg-mist"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div
            id={`${uid}-panel`}
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`${uid}-tab-${current.id}`}
            className="grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:col-span-8"
          >
            <div className="mx-auto w-full max-w-sm">
              <LensMap type={current.id} name={current.name} />
            </div>
            <AnimatePresence mode="wait">
              <m.div
                key={current.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease }}
              >
                <h3 className="text-[1.75rem] font-bold text-navy md:text-3xl">{current.name}</h3>
                <p className="mt-3 text-lg text-ink">{current.text}</p>
                <p className="mt-2 text-lg text-teal">{current.note}</p>
              </m.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tratamientos y materiales */}
        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-navy md:text-3xl">Tratamientos que cuidan sus ojos</h3>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {lenses.treatments.map((t, i) => {
                const Icon = treatmentIcons[i];
                return (
                  <li key={t.name} className="flex gap-5 py-5">
                    <Icon className="mt-0.5 size-8 shrink-0 text-teal" />
                    <div>
                      <p className="font-display text-xl font-semibold text-navy">{t.name}</p>
                      <p className="mt-1 text-muted">{t.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-navy md:text-3xl">{lenses.materialsTitle}</h3>
            <ul className="mt-6 flex flex-wrap gap-3">
              {lenses.materials.map((mat) => (
                <li
                  key={mat}
                  className="rounded-full bg-white px-5 py-3 font-display text-lg font-semibold text-navy ring-1 ring-line"
                >
                  {mat}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[40ch] text-muted">Variedad de estilos, colores y materiales para cada persona.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
