export const SEO_CONFIG = {
  siteName: "Qwirkle Scorekeeper Pro",
  title: "Qwirkle Scorekeeper Pro — Compteur de Points & Score Gratuit",
  description:
    "Compteur de points Qwirkle gratuit, rapide et moderne sur mobile et PC : suivi des manches, Qwirkle, bonus de fin de partie, historique et classement en direct.",
  url: "https://TON_PSEUDO_GITHUB.github.io/TON_REPO/",
  lang: "fr",
  themeColor: "#020617",
  keywords: [
    "compteur qwirkle",
    "score qwirkle",
    "compter points qwirkle",
    "application qwirkle gratuite",
    "tableau score qwirkle",
    "regles points qwirkle"
  ]
};

export function applySeoConfig(config = SEO_CONFIG) {
  document.documentElement.lang = config.lang;
  document.title = config.title;

  const ensureMeta = (attr, key, value) => {
    let tag = document.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", value);
  };

  ensureMeta("name", "description", config.description);
  ensureMeta("name", "keywords", config.keywords.join(", "));
  ensureMeta("name", "robots", "index, follow");
  ensureMeta("name", "theme-color", config.themeColor);

  ensureMeta("property", "og:type", "website");
  ensureMeta("property", "og:site_name", config.siteName);
  ensureMeta("property", "og:title", config.title);
  ensureMeta("property", "og:description", config.description);
  ensureMeta("property", "og:url", config.url);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", config.url);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: config.siteName,
    applicationCategory: "GameApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Works on mobile and desktop.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR"
    },
    description: config.description,
    url: config.url,
    inLanguage: config.lang
  };

  let ldJson = document.getElementById("qwirkle-schema-ldjson");
  if (!ldJson) {
    ldJson = document.createElement("script");
    ldJson.id = "qwirkle-schema-ldjson";
    ldJson.type = "application/ld+json";
    document.head.appendChild(ldJson);
  }
  ldJson.textContent = JSON.stringify(schema);
}