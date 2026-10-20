"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type Lenis from "lenis";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

export function Providers({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Scroll suave solo con mouse/trackpad y sin reduced-motion. Se carga con la primera
  // interacción para no sumar trabajo a la carga inicial; en táctil se deja el scroll nativo.
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let instance: Lenis | null = null;
    const start = async () => {
      window.removeEventListener("wheel", start);
      window.removeEventListener("pointermove", start);
      const { default: LenisClass } = await import("lenis");
      instance = new LenisClass({ duration: 1.1, anchors: { offset: -72 }, autoRaf: true });
      setLenis(instance);
    };
    window.addEventListener("wheel", start, { passive: true, once: true });
    window.addEventListener("pointermove", start, { passive: true, once: true });
    return () => {
      window.removeEventListener("wheel", start);
      window.removeEventListener("pointermove", start);
      instance?.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={loadFeatures} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </LenisContext.Provider>
  );
}
