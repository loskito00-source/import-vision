"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

/**
 * Texto que pasa de desenfocado a nítido al entrar en pantalla.
 * Se cruzan dos capas con opacidad (la desenfocada tiene un blur fijo), así nunca se anima `filter`.
 */
export function FocusText({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const transition = { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const };
  return (
    <span className={`relative inline-block ${className}`}>
      <m.span
        aria-hidden
        className="absolute inset-0 blur-[7px]"
        initial={{ opacity: 0.9 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={transition}
      >
        {children}
      </m.span>
      <m.span
        className="relative block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={transition}
      >
        {children}
      </m.span>
    </span>
  );
}
