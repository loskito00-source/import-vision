import Image from "next/image";
import { services } from "@/content";
import { IconBuilding, IconIris, IconReport, IconTag } from "./icons";

export function Services() {
  const [examen, monturas, sgsst, sede, precios] = services.items;

  return (
    <section id="servicios" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-[2.1rem] font-bold leading-[1.08] text-navy md:text-5xl">{services.title}</h2>
          <p className="mt-4 max-w-[46ch] text-lg text-muted">{services.intro}</p>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          {/* Examen: la pieza principal */}
          <article className="lens-sheen flex flex-col justify-between gap-10 rounded-[2rem] bg-white p-7 ring-1 ring-line md:col-span-2 md:p-10 lg:col-span-7">
            <IconIris className="size-14 text-teal" strokeWidth={1.4} />
            <div>
              <h3 className="text-[1.75rem] font-bold leading-tight text-navy md:text-4xl">{examen.title}</h3>
              <p className="mt-3 max-w-[44ch] text-lg text-muted">{examen.text}</p>
            </div>
          </article>

          {/* Monturas con foto, ocupa dos filas en escritorio */}
          <article className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-navy p-7 text-white md:col-span-2 md:p-9 lg:col-span-5 lg:row-span-2">
            {monturas.image && (
              <Image
                src={monturas.image.src}
                alt={monturas.image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="-z-10 object-cover transition-transform duration-[1.2s] ease-lens group-hover:scale-105"
              />
            )}
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/0"
              aria-hidden
            />
            <h3 className="text-[1.75rem] font-bold leading-tight md:text-[2rem]">{monturas.title}</h3>
            <p className="mt-3 max-w-[36ch] text-lg text-white/85">{monturas.text}</p>
          </article>

          <article className="flex flex-col gap-6 rounded-[2rem] bg-mist p-7 md:p-8 lg:col-span-4">
            <IconReport className="size-9 text-navy" />
            <div>
              <h3 className="text-xl font-bold text-navy md:text-2xl">{sgsst.title}</h3>
              <p className="mt-2 text-muted">{sgsst.text}</p>
            </div>
          </article>

          <article className="on-navy flex flex-col gap-6 rounded-[2rem] bg-navy p-7 text-white md:p-8 lg:col-span-3">
            <IconBuilding className="size-9 text-cyan" />
            <div>
              <h3 className="text-xl font-bold md:text-2xl">{sede.title}</h3>
              <p className="mt-2 text-haze">{sede.text}</p>
            </div>
          </article>

          <article className="flex flex-col gap-4 rounded-[2rem] p-7 ring-1 ring-inset ring-teal/40 sm:flex-row sm:items-center sm:gap-6 md:col-span-2 md:px-10 lg:col-span-12">
            <IconTag className="size-9 shrink-0 text-teal" />
            <h3 className="text-xl font-bold text-navy md:text-2xl">{precios.title}</h3>
            <p className="text-muted sm:ml-auto sm:max-w-[40ch] sm:text-right">{precios.text}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
