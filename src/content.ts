/**
 * Todo el contenido de la landing vive aquí.
 * Fuente: assets-cliente/ (ver CONTENIDO.md). No agregar datos que el cliente no haya confirmado.
 * Los campos marcados TODO están vacíos a propósito: complétalos y la página los muestra sola.
 */

export const site = {
  name: "Import Vision",
  tagline: "Soluciones en salud visual",
  // TODO: dominio definitivo (se usa en SEO, sitemap y Open Graph)
  url: "https://importvision.co",
  description:
    "Jornadas de salud visual en su empresa: examen optométrico ocupacional, monturas y lentes, con atención en sede y descuento por nómina. Más de 20 años en el sector salud.",
};

export const contact = {
  // TODO: número de WhatsApp en formato internacional, solo dígitos (ej. 573001234567)
  whatsapp: "",
  whatsappMessage:
    "Hola, Import Vision. Quiero información sobre una jornada de salud visual para mi empresa.",
  // TODO: teléfono para llamadas, formato internacional (ej. +576011234567)
  phone: "",
  // TODO: correo comercial
  email: "",
  city: "Bogotá D.C.",
  country: "CO",
  // TODO: dirección exacta. Si se completa, aparece el mapa.
  address: "",
  coverage: "Cobertura regional y nacional",
  // TODO: horario de atención, ej. [{ days: "Lunes a viernes", hours: "8:00 a. m. – 6:00 p. m." }]
  hours: [] as { days: string; hours: string }[],
  // TODO: redes sociales, ej. [{ label: "Instagram", href: "https://instagram.com/..." }]
  social: [] as { label: string; href: string }[],
  // TODO: razón social y NIT para el footer
  legalName: "",
};

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Lentes", href: "#lentes" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Pagos", href: "#pagos" },
  { label: "Preguntas", href: "#preguntas" },
];

export const hero = {
  image: { src: "/img/hero-examen.webp", alt: "Persona mirando a través de un equipo de examen visual", w: 1800, h: 1200 },
  title: "La salud visual de su equipo, sin salir de la empresa",
  subtitle:
    "Llevamos optómetras, equipos y un catálogo de monturas a su sede. El examen no tiene costo si el colaborador adquiere sus gafas.",
  primaryCta: "Agendar una jornada",
  secondaryCta: "Ver cómo funciona",
  facts: [
    { value: "20 años", label: "en el sector salud" },
    { value: "15 min", label: "promedio por colaborador" },
    { value: "4 × 3 m", label: "es todo el espacio que necesitamos" },
  ],
};

export const services = {
  title: "Todo lo que su equipo necesita para ver bien",
  intro: "Una jornada completa en sus instalaciones, ajustada a los horarios de su operación.",
  items: [
    {
      id: "examen",
      title: "Examen optométrico ocupacional",
      text: "Valoración visual completa y diagnóstico de problemas visuales, con equipos de última tecnología.",
    },
    {
      id: "monturas",
      title: "Monturas y lentes a la medida",
      text: "Cada colaborador elige en el momento su montura, con lentes y tratamientos según su necesidad visual.",
      image: { src: "/img/monturas.webp", alt: "Exhibidor con monturas de gafas de distintos colores", w: 1400, h: 933 },
    },
    {
      id: "sgsst",
      title: "Prevención e informe SG-SST",
      text: "Herramientas de promoción y prevención, con informe individual y consolidado de los hallazgos.",
    },
    {
      id: "sede",
      title: "Atención en su sede",
      text: "Adaptamos el horario a su empresa para no afectar la operación y evitar ausencias por desplazamiento.",
    },
    {
      id: "precios",
      title: "Precios de distribuidor",
      text: "Somos importadores directos, con pago por descuento de nómina.",
    },
  ],
};

export const why = {
  title: "Fabricamos, importamos y lo llevamos hasta su sede",
  intro:
    "Hacemos parte de un holding fabricante e importador directo de insumos ópticos. Eso nos permite atender programas masivos con calidad y precios justos.",
  // Las líneas se muestran como una carta de agudeza visual: de mayor a menor.
  lines: [
    { big: "20 años", small: "de experiencia en el sector salud" },
    { big: "Importación directa", small: "fabricación y ensamble de insumos ópticos" },
    { big: "Laboratorio propio", small: "taller óptico y control de calidad interno" },
    { big: "Cobertura nacional", small: "logística para brigadas regionales y nacionales" },
  ],
  image: { src: "/img/oficina.webp", alt: "Profesional con gafas sonriendo en una oficina", w: 1400, h: 788 },
};

// Misión y visión oficiales del cliente (texto literal, no editar sin su aprobación).
export const purpose = {
  title: "Lo que hacemos hoy y hacia dónde vamos",
  mission: {
    title: "Misión",
    text: "Brindar soluciones integrales de salud visual con tecnología de vanguardia y atención humana, ofreciendo al detalle lentes y servicios ópticos de alta calidad, y llevando brigadas de salud visual directamente a las empresas para cuidar la visión de sus colaboradores, mejorando así su bienestar, desempeño y calidad de vida.",
    pillars: ["Tecnología de vanguardia", "Atención humana", "Brigadas en su empresa"],
  },
  vision: {
    title: "Visión",
    year: "2030",
    text: "Ser en 2030 la óptica líder y de mayor confianza en la región, reconocida por transformar el acceso a la salud visual tanto en el canal retail como en el corporativo, siendo la aliada estratégica de las empresas en el cuidado visual de sus equipos y la primera opción de las familias para ver y vivir mejor.",
    channels: [
      { name: "Canal corporativo", text: "Aliada estratégica de las empresas en el cuidado visual de sus equipos." },
      { name: "Canal retail", text: "La primera opción de las familias para ver y vivir mejor." },
    ],
  },
};

export const lenses = {
  title: "Un lente para cada forma de mirar",
  intro: "Lentes oftálmicos con tecnología de vanguardia, pensados para la comodidad y la protección de cada persona.",
  types: [
    { id: "mono", name: "Monofocales", text: "Una única graduación para una distancia.", note: "Ideales para el uso diario." },
    { id: "bi", name: "Bifocales", text: "Dos zonas diferenciadas para lejos y cerca.", note: "Comodidad en todas las distancias." },
    { id: "pro", name: "Progresivos", text: "Corrección gradual para lejos, intermedia y cerca.", note: "Visión natural y sin saltos." },
    { id: "ocu", name: "Ocupacionales", text: "Diseñados para el puesto de trabajo: visión de cerca e intermedia.", note: "Más productividad y confort visual." },
  ],
  treatments: [
    { name: "Antirreflejo", text: "Mejora la claridad y reduce el deslumbramiento." },
    { name: "Fotocromáticos y Transitions®", text: "Se adaptan a la luz natural y artificial." },
    { name: "Filtro de luz azul", text: "Protege sus ojos de la luz de las pantallas." },
  ],
  materialsTitle: "Monturas en todos los estilos",
  materials: ["Metálicas", "Pasta", "Acetato", "Titanio", "TR90"],
  image: { src: "/img/optometra.webp", alt: "Optómetra mostrando unas gafas de montura negra", w: 1400, h: 933 },
};

export const process = {
  title: "Una jornada en tres pasos",
  intro: "Nos encargamos de toda la logística para que su empresa no tenga que preocuparse por nada.",
  steps: [
    {
      title: "Preparación",
      text: "Definimos la fecha, agendamos a los colaboradores y adaptamos un espacio en su empresa.",
    },
    {
      title: "El día de la jornada",
      text: "Instalamos un consultorio móvil con optómetras y catálogo de monturas. Atendemos en pausas activas o turnos asignados.",
    },
    {
      title: "Entrega",
      text: "Fabricamos los lentes y los entregamos en su empresa en el menor tiempo posible.",
    },
  ],
  notes: [
    "Un salón de 4 × 3 m con mesas y sillas es suficiente.",
    "El número de optómetras y asesores depende de la cantidad de colaboradores.",
  ],
  image: { src: "/img/jornada-sala.webp", alt: "Consultorio móvil de Import Vision instalado en una sala de empresa", w: 676, h: 278 },
};

export const payment = {
  title: "Gafas al alcance de todo el equipo",
  intro: "Dos formas de pago flexibles para que nadie se quede sin ver bien.",
  options: [
    {
      title: "Fondo de Empleados o nómina",
      text: "Coordinamos con la administración de su fondo el pago o el descuento por nómina. El trabajador no hace trámites.",
    },
    {
      title: "Pago directo 50/50",
      text: "El colaborador paga el 50 % al inicio y el 50 % restante al recibir sus gafas o lentes.",
    },
  ],
  highlight: "Examen visual sin costo al adquirir sus gafas o lentes con nosotros.",
  image: { src: "/img/colaboradora.webp", alt: "Colaboradora con gafas sonriendo en su oficina", w: 1400, h: 788 },
};

export const faq = {
  title: "Preguntas frecuentes",
  items: [
    {
      q: "¿El examen visual tiene costo?",
      a: "No, si el colaborador adquiere sus gafas o lentes con nosotros.",
    },
    {
      q: "¿Cuánto tiempo toma atender a cada persona?",
      a: "En promedio, 15 minutos por colaborador. Atendemos en pausas activas o en los turnos que usted defina.",
    },
    {
      q: "¿Qué espacio necesitan en la empresa?",
      a: "Una habitación o salón de mínimo 4 × 3 metros, con mesas y sillas. Nosotros llevamos los equipos.",
    },
    {
      q: "¿La jornada interrumpe la operación?",
      a: "No. El horario se establece según la disponibilidad y la operación de su empresa.",
    },
    {
      q: "¿Cómo pagan los colaboradores?",
      a: "Por descuento de nómina o a través del Fondo de Empleados, o con pago directo: 50 % al inicio y 50 % al recibir las gafas.",
    },
    {
      q: "¿Entregan documentación para SG-SST?",
      a: "Sí. Entregamos un informe individual y uno consolidado de los hallazgos, con registro, recomendaciones y conclusiones.",
    },
    {
      q: "¿Atienden fuera de Bogotá?",
      a: "Sí. Tenemos logística para brigadas con cobertura regional y nacional.",
    },
  ],
};

export const finalCta = {
  title: "Hablemos 20 minutos",
  text: "Le mostramos el catálogo de monturas y ajustamos la jornada a su empresa, de forma virtual o presencial.",
  cta: "Escribir por WhatsApp",
};

// TODO: agregar testimonios reales (nombre, cargo, empresa) para activar la sección.
export const testimonials: { quote: string; name: string; role: string }[] = [];
