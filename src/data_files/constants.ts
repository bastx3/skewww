import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Artxe Web",
  tagline: "Diseño web profesional",
  description: "Artxe Web: diseño y desarrollo de páginas web modernas, rápidas y optimizadas para SEO. Creamos sitios web que convierten visitantes en clientes.",
  description_short: "Diseño y desarrollo de páginas web modernas, rápidas y optimizadas para SEO.",
  url: "https://artxeweb.com",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Diseño Web Profesional`,
  description: "Diseño y desarrollo de páginas web modernas, rápidas y optimizadas para SEO. Creamos sitios web que convierten visitantes en clientes.",
  image: ogImageSrc,
};

export const partnersData = [
  {
    icon: `<img src="/imagenes/lacolada-white.webp"
                alt="La Colada"
                class="mx-auto h-auto w-64 py-3 sm:mx-0 lg:w-40 lg:py-5"
                width="240" height="80"
                loading="lazy" decoding="async" />`,
    name: "La Colada",
    href: "#",
  },
  {
    icon: `<img src="/imagenes/mgnutrition-white.webp"
                alt="La Colada"
                class="mx-auto h-auto w-64 py-3 sm:mx-0 lg:w-40 lg:py-5"
                width="240" height="80"
                loading="lazy" decoding="async" />`,
    name: "MG Nutrition",
    href: "#",
  },
  {
    icon: `<img src="/imagenes/lacolada.png"
                alt="La Colada"
                class="mx-auto h-auto w-64 py-3 sm:mx-0 lg:w-40 lg:py-5"
                width="240" height="80"
                loading="lazy" decoding="async" />`,
    name: "La Colada",
    href: "#",
  },
  {
    icon: `<img src="/imagenes/lacolada2.png"
                alt="La Colada"
                class="mx-auto h-auto w-24 py-3 sm:mx-0 md:w-32 lg:w-40 lg:py-5"
                width="240" height="80"
                loading="lazy" decoding="async" />`,
    name: "La Colada",
    href: "#",
  },
];
