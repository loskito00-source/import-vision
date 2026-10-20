import { contact, nav, site } from "@/content";
import { emailHref, externalProps, hasEmail, hasPhone, hasWhatsapp, phoneHref, whatsappHref } from "@/lib/links";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-navy bg-navy-deep pb-28 pt-16 text-white md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <Logo variant="light" className="h-24 w-auto" />
          <p className="mt-5 max-w-[32ch] text-haze">{site.description.split(".")[0]}.</p>
        </div>

        <nav aria-label="Pie de página" className="md:col-span-3">
          <p className="font-display font-semibold">Secciones</p>
          <ul className="mt-4 grid gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center text-haze hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-5">
          <p className="font-display font-semibold">Contacto</p>
          <ul className="mt-4 grid gap-1 text-haze">
            {hasWhatsapp && (
              <li>
                <a href={whatsappHref} {...externalProps(whatsappHref)} className="inline-flex min-h-11 items-center hover:text-white">
                  WhatsApp
                </a>
              </li>
            )}
            {hasPhone && (
              <li>
                <a href={phoneHref} className="inline-flex min-h-11 items-center hover:text-white">
                  {contact.phone}
                </a>
              </li>
            )}
            {hasEmail && (
              <li>
                <a href={emailHref} className="inline-flex min-h-11 items-center hover:text-white">
                  {contact.email}
                </a>
              </li>
            )}
            <li className="flex min-h-11 items-center">{contact.address ? `${contact.address}, ${contact.city}` : contact.city}</li>
            <li className="flex min-h-11 items-center">{contact.coverage}</li>
            {contact.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} {...externalProps(s.href)} className="inline-flex min-h-11 items-center hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 pt-6 text-[0.95rem] text-haze md:flex-row md:justify-between md:px-8">
        <p>
          © {year} <span translate="no">{contact.legalName || site.name}</span>. Todos los derechos reservados.
        </p>
        <p>{site.tagline}</p>
      </div>
    </footer>
  );
}
