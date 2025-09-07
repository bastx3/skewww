// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Servicios", url: "/servicios" },
  { name: "Proyectos", url: "/proyectos" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contacto" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Servicios",
    links: [
      { name: "Documentación", url: "/welcome-to-docs/" },
      { name: "Diseño Web", url: "/servicios" },
      { name: "SEO", url: "/servicios" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre nosotros", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Trabajos", url: "#" },
      { name: "Clientes", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/artxeweb",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};