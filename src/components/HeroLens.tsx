"use client";

import Image from "next/image";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { hero } from "@/content";

const ease = [0.22, 1, 0.36, 1] as const;

// Escala graduada como un solo path (120 marcas) para no pintar 120 nodos.
const ticks = Array.from({ length: 120 }, (_, i) => {
  const len = i % 10 === 0 ? 18 : i % 5 === 0 ? 12 : 7;
  const a = (i * 3 * Math.PI) / 180;
  const p = (r: number) => `${(200 + r * Math.sin(a)).toFixed(2)} ${(200 - r * Math.cos(a)).toFixed(2)}`;
  return { d: `M${p(196)}L${p(196 - len)}`, major: i % 10 === 0 };
});
const minorPath = ticks.filter((t) => !t.major).map((t) => t.d).join("");
const majorPath = ticks.filter((t) => t.major).map((t) => t.d).join("");

/**
 * El momento memorable de la página: un lente que se calibra.
 * La foto aparece desenfocada y entra en foco (se desvanece una versión diminuta y borrosa
 * sobre la nítida), mientras la escala graduada gira hasta su posición.
 * Todo se anima con transform/opacity sobre capas HTML, que el navegador compone sin repintar.
 */
export function HeroLens() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const dial = useTransform(scrollY, [0, 800], [0, 40]);
  const counterDial = useTransform(scrollY, [0, 800], [0, -24]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[520px]">
      <m.div className="absolute inset-0 will-change-transform" style={{ rotate: dial }} aria-hidden>
        <m.div
          className="size-full will-change-transform"
          initial={reduce ? false : { rotate: -60, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <svg viewBox="0 0 400 400" className="size-full text-cyan">
            <path d={minorPath} stroke="currentColor" strokeOpacity=".4" strokeWidth="1" />
            <path d={majorPath} stroke="currentColor" strokeOpacity=".9" strokeWidth="1.6" />
          </svg>
        </m.div>
      </m.div>

      <m.div className="absolute inset-0 will-change-transform" style={{ rotate: counterDial }} aria-hidden>
        <svg viewBox="0 0 400 400" className="size-full text-white">
          <circle cx="200" cy="200" r="176" fill="none" stroke="currentColor" strokeOpacity=".18" />
          <circle cx="200" cy="200" r="186" fill="none" stroke="currentColor" strokeOpacity=".5" strokeDasharray="2 10" />
          <path d="M200 28v14M200 358v14M28 200h14M358 200h14" stroke="#7fd8e6" strokeWidth="2" />
        </svg>
      </m.div>

      {/* Lente con la foto */}
      <div className="absolute inset-[11%] overflow-hidden rounded-full bg-navy-deep shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.15)]">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 330px, 240px"
          className="scale-[1.35] object-cover object-[50%_38%]"
        />
        {!reduce && (
          <m.img
            src="/img/hero-examen-blur.webp"
            alt=""
            aria-hidden
            width={48}
            height={32}
            className="absolute inset-0 size-full scale-[1.5] object-cover object-[50%_38%] will-change-[opacity]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 1.3, ease }}
          />
        )}
        {/* Reflejo del cristal */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_80%_at_30%_10%,rgb(255_255_255/0.28),transparent_45%),radial-gradient(90%_90%_at_50%_50%,transparent_62%,rgb(0_34_87/0.55))]"
          aria-hidden
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full text-white/50" aria-hidden>
          <path d="M50 38v-8M50 62v8M38 50h-8M62 50h8" stroke="currentColor" strokeWidth=".4" />
          <circle cx="50" cy="50" r="2.2" fill="none" stroke="currentColor" strokeWidth=".4" />
        </svg>
      </div>
    </div>
  );
}
