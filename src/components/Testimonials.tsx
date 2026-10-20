import { testimonials } from "@/content";

// Se muestra solo cuando hay testimonios reales en content.ts.
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonios" className="bg-mist py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="text-[2.1rem] font-bold leading-[1.08] text-navy md:text-5xl">Lo que dicen las empresas</h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.name} className="rounded-[2rem] bg-white p-8 ring-1 ring-line">
              <blockquote className="font-display text-xl leading-snug text-navy md:text-2xl">“{t.quote}”</blockquote>
              <p className="mt-6 font-semibold text-ink">{t.name}</p>
              <p className="text-muted">{t.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
