"use client";

import { m } from "motion/react";
import { contact, finalCta } from "@/content";
import { emailHref, hasEmail, hasPhone, phoneHref, whatsappHref } from "@/lib/links";
import { Button } from "./Button";
import { Mark } from "./Logo";
import { IconMail, IconPhone, IconPin, IconWhatsapp } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;
const pending = process.env.NODE_ENV === "development";

export function Contact() {
  const mapSrc = contact.address
    ? `https://www.google.com/maps?q=${encodeURIComponent(`${contact.address}, ${contact.city}`)}&output=embed`
    : null;

  return (
    <section id="contacto" className="on-navy relative isolate overflow-hidden bg-navy py-20 text-white md:py-32">
      {/* Apertura de diafragma: el círculo se abre al llegar a la sección */}
      <m.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 size-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(0_132_156/0.5)_0%,rgb(0_84_132/0.35)_40%,transparent_68%)]"
        initial={{ scale: 0.25, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 1.6, ease }}
      />
      <Mark light className="absolute -right-16 -top-10 -z-10 w-[26rem] text-white/[0.04] md:w-[40rem]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2.6rem] font-bold leading-[1.02] md:text-7xl">{finalCta.title}</h2>
          <p className="mx-auto mt-5 max-w-[42ch] text-lg text-haze md:text-xl">{finalCta.text}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={whatsappHref} variant="light" icon={<IconWhatsapp className="size-5" />}>
              {finalCta.cta}
            </Button>
            {(hasPhone || pending) && (
              <Button href={phoneHref} variant="ghost-light" icon={<IconPhone className="size-5" />}>
                Llamar
              </Button>
            )}
            {(hasEmail || pending) && (
              <Button href={emailHref} variant="ghost-light" icon={<IconMail className="size-5" />}>
                Enviar correo
              </Button>
            )}
          </div>
          {pending && (!contact.whatsapp || !contact.phone || !contact.email) && (
            <p className="mx-auto mt-4 max-w-md rounded-xl bg-amber-300/15 px-4 py-2 text-sm text-amber-100">
              Vista de desarrollo: faltan WhatsApp, teléfono o correo en src/content.ts
            </p>
          )}
        </div>

        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-12">
          <div
            className={`flex flex-col gap-6 rounded-[2rem] bg-white/[0.06] p-7 ring-1 ring-inset ring-white/10 md:p-9 ${
              mapSrc ? "md:col-span-5" : "md:col-span-12 md:flex-row md:items-center md:justify-between"
            }`}
          >
            <div className="flex shrink-0 items-start gap-4">
              <IconPin className="size-7 shrink-0 text-cyan" />
              <div>
                <p className="font-display text-xl font-semibold">{contact.address || contact.city}</p>
                <p className="text-haze">{contact.address ? contact.city : contact.coverage}</p>
              </div>
            </div>
            {contact.hours.length > 0 && (
              <dl className="grid gap-2 border-t border-white/10 pt-6">
                {contact.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-haze">{h.days}</dt>
                    <dd className="font-semibold">{h.hours}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className={`border-white/10 text-haze ${mapSrc ? "border-t pt-6" : "max-md:border-t max-md:pt-6 md:max-w-[44ch]"}`}>
              Atendemos en las instalaciones de su empresa, en el horario que mejor se ajuste a su operación.
            </p>
          </div>

          {mapSrc && (
            <div className="relative min-h-72 overflow-hidden rounded-[2rem] ring-1 ring-inset ring-white/10 md:col-span-7">
              <iframe
                title={`Mapa: ${contact.address}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
