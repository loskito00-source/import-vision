"use client";

import { useEffect, useState } from "react";
import { whatsappHref, externalProps } from "@/lib/links";
import { IconWhatsapp } from "./icons";

// Botón flotante solo en móvil; aparece después del hero para no tapar el CTA principal.
export function WhatsappFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref}
      {...externalProps(whatsappHref)}
      aria-label="Escribir por WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex min-h-14 items-center gap-2 rounded-full bg-[#12804a] pl-4 pr-5 font-semibold text-white shadow-[0_12px_32px_-8px_rgb(0_0_0/0.45)] transition-[transform,opacity] duration-500 ease-lens md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <IconWhatsapp className="size-6" />
      WhatsApp
    </a>
  );
}
