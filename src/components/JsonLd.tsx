import { contact, faq, site } from "@/content";

export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: `${site.url}/brand/logo.png`,
    image: `${site.url}/opengraph-image.png`,
    areaServed: { "@type": "Country", name: "Colombia" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressRegion: "Bogotá D.C.",
      addressCountry: contact.country,
      ...(contact.address && { streetAddress: contact.address }),
    },
    ...(contact.phone && { telephone: contact.phone }),
    ...(contact.email && { email: contact.email }),
    ...(contact.legalName && { legalName: contact.legalName }),
    ...(contact.social.length > 0 && { sameAs: contact.social.map((s) => s.href) }),
    makesOffer: [
      "Examen optométrico ocupacional",
      "Jornadas de salud visual en empresas",
      "Monturas y lentes oftálmicos",
      "Informe de salud visual para SG-SST",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([business, faqPage]).replace(/</g, "\\u003c") }}
    />
  );
}
