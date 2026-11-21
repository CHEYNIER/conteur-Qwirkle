export const SEO_CONFIG = {
  title: "Qwirkle Scorekeeper - Compteur de Points",
  description:
    "Compteur de points Qwirkle gratuit, rapide et moderne pour suivre les scores, manches, Qwirkle et classements en partie.",
  url: "https://cheynier.github.io/conteur-Qwirkle/",
  lang: "fr",
  keywords: [
    "compteur qwirkle",
    "score qwirkle",
    "compter points qwirkle",
    "compteur de points qwirkle",
    "application qwirkle"
  ]
};

export function initSeo(config = SEO_CONFIG) {
  document.documentElement.lang = config.lang;
  document.title = config.title;

  const setMeta = (attr, key, content) => {
    let tag = document.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  setMeta("name", "description", config.description);
  setMeta("name", "keywords", config.keywords.join(", "));
  setMeta("name", "robots", "index, follow");

  setMeta("property", "og:type", "website");
  setMeta("property", "og:title", config.title);
  setMeta("property", "og:description", config.description);
  setMeta("property", "og:url", config.url);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", config.url);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: config.title,
    applicationCategory: "GameApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    description: config.description,
    url: config.url,
    inLanguage: config.lang
  };

  let scriptLd = document.getElementById("seo-jsonld");
  if (!scriptLd) {
    scriptLd = document.createElement("script");
    scriptLd.id = "seo-jsonld";
    scriptLd.type = "application/ld+json";
    document.head.appendChild(scriptLd);
  }
  scriptLd.textContent = JSON.stringify(jsonLd);
}

initSeo();
