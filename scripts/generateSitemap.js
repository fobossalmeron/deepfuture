const fs = require("fs-extra");
const formatDate = require("./formatDate");

const url = "https://deepfuture.institute";

const routes = [
  {
    es: "/tallerescovid",
    priority: 1,
  },
  {
    es: "/escenariosderiesgo",
    priority: 0.9,
  },
  {
    es: "/blog/como_construimos_escenarios_de_riesgo",
    priority: 0.9,
  },
  {
    es: "/blog/cuanto_durara_la_crisis_economica_en_mexico",
    priority: 0.9,
  },
  {
    es: "",
    priority: 0.8,
  },
  {
    es: "/blog",
    priority: 0.8,
  },
  {
    es: "/nosotros",
    priority: 0.7,
  },
  {
    es: "/contacto",
    priority: 0.7,
  },
  {
    es: "/terminos",
    priority: 0.6,
  },
  {
    es: "/privacidad",
    priority: 0.6,
  },
];

const esRoute = (route) =>
  route.es !== undefined
    ? `<url>
    <loc>${url + route.es}</loc>
    ${
      route.en !== undefined
        ? `<xhtml:link rel="alternate" hreflang="es" href="${url + route.es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${url + route.en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url + route.en}"/>`
        : `<language>es</language>`
    }
    <priority>${route.priority}</priority>
    <lastmod>${
      route.lastModified ? formatDate(new Date(route.lastModified)) : today
    }</lastmod>
  </url>`
    : "";

const enRoute = (route) =>
  route.en !== undefined
    ? `
  <url>
    <loc>${url + route.en}</loc>
    ${
      route.es !== undefined
        ? `<xhtml:link rel="alternate" hreflang="en" href="${url + route.en}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${url + route.es}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url + route.en}"/>`
        : `<language>en</language>`
    }
    <priority>${route.priority}</priority>
    <lastmod>${
      route.lastModified ? formatDate(new Date(route.lastModified)) : today
    }</lastmod>
  </url>
  `
    : "";

// SITEMAP.XML
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"> 
  ${routes.map((route) => esRoute(route) + enRoute(route)).join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemapXml);
console.log("sitemap.xml saved!");
