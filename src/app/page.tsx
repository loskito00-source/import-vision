import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Lenses } from "@/components/Lenses";
import { Payment } from "@/components/Payment";
import { Process } from "@/components/Process";
import { Providers } from "@/components/Providers";
import { Purpose } from "@/components/Purpose";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsappFab } from "@/components/WhatsappFab";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <Providers>
      <a
        href="#contenido"
        className="sr-only z-[60] rounded-full bg-white px-5 py-3 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="overflow-x-clip">
        <Hero />
        <Services />
        <Why />
        <Purpose />
        <Lenses />
        <Process />
        <Payment />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
      <JsonLd />
    </Providers>
  );
}
