import { faq } from "@/content";
import { IconPlus } from "./icons";

export function Faq() {
  return (
    <section id="preguntas" className="bg-white py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-[2.1rem] font-bold leading-[1.08] text-navy md:text-5xl lg:sticky lg:top-28">{faq.title}</h2>
        </div>
        <div className="divide-y divide-line border-y border-line lg:col-span-8">
          {faq.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-xl font-semibold text-navy md:text-[1.4rem] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mist text-navy transition-[transform,background-color] duration-300 ease-lens group-open:rotate-45 group-open:bg-navy group-open:text-white">
                  <IconPlus className="size-5" />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-6 pr-14 text-lg text-muted group-open:animate-[fade-in_400ms_ease-out]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
