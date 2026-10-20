import { contact } from "@/content";

export const hasWhatsapp = contact.whatsapp.length > 0;
export const hasPhone = contact.phone.length > 0;
export const hasEmail = contact.email.length > 0;

// Sin número configurado, los CTA llevan a la sección de contacto en vez de romperse.
export const whatsappHref = hasWhatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
  : "#contacto";

export const phoneHref = hasPhone ? `tel:${contact.phone.replace(/\s/g, "")}` : "#contacto";

export const emailHref = hasEmail
  ? `mailto:${contact.email}?subject=${encodeURIComponent("Jornada de salud visual")}`
  : "#contacto";

export const externalProps = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
