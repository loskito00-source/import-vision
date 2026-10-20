"use client";

import { AnimatePresence, m } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { nav, hero } from "@/content";
import { whatsappHref, externalProps } from "@/lib/links";
import { Logo } from "./Logo";
import { useLenis } from "./Providers";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    // Llevar el foco al primer enlace del menú al abrirlo
    requestAnimationFrame(() => document.querySelector<HTMLElement>("#menu-movil a")?.focus());
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open, lenis]);

  return (
    <header
      className={`on-navy fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ease-lens ${
        scrolled || open ? "bg-navy-deep/95 shadow-[0_8px_30px_-16px_rgb(0_0_0/0.5)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#inicio" className="-ml-1 rounded-md p-1" aria-label="Import Vision, ir al inicio">
          <Logo variant="light" layout="inline" priority className="h-[1.6rem] w-auto md:h-8" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2.5 text-[0.98rem] text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            {...externalProps(whatsappHref)}
            className="hidden min-h-11 items-center rounded-full bg-white px-5 text-[0.98rem] font-semibold text-navy transition-colors hover:bg-cyan sm:inline-flex"
          >
            {hero.primaryCta}
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="relative grid size-12 place-items-center rounded-full text-white ring-1 ring-inset ring-white/25 lg:hidden"
          >
            <span
              className={`absolute h-[2px] w-5 rounded bg-current transition-transform duration-300 ease-lens ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded bg-current transition-transform duration-300 ease-lens ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="menu-movil"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="reticle-bg fixed inset-x-0 bottom-0 top-[4.25rem] overflow-y-auto overscroll-contain bg-navy-deep md:top-20 lg:hidden"
          >
            <nav aria-label="Menú móvil" className="px-5 pb-10 pt-6">
              <ul>
                {nav.map((item, i) => (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-16 items-center font-display text-[1.75rem] font-semibold text-white"
                    >
                      {item.label}
                    </a>
                  </m.li>
                ))}
              </ul>
              <a
                href={whatsappHref}
                {...externalProps(whatsappHref)}
                onClick={() => setOpen(false)}
                className="mt-8 flex min-h-14 items-center justify-center rounded-full bg-white text-[1.0625rem] font-semibold text-navy"
              >
                {hero.primaryCta}
              </a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
