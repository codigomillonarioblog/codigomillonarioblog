(() => {
  "use strict";
  try {
    const MEDIO = {
      nombre: "Código Millonario",
      url: "https://codigomillonario.blog/",
      logo: "https://codigomillonario.blog/assets/img/codigo-millonario-medio-digital.png",
      redes: [
        "https://www.instagram.com/codigomillonarioblog",
        "https://www.tiktok.com/@codigomillonarioblog",
        "https://x.com/codigomillonarioblog",
        "https://www.facebook.com/codigomillonarioblog",
        "https://www.pinterest.com/codigomillonarioblog",
        "https://www.youtube.com/@codigomillonarioblog"
      ]
    };

    if (document.querySelector('script[data-cm-schema="generado"]')) {
      return;
    }

    const canonica = document.querySelector('link[rel="canonical"]');
    const currentUrl = canonica ? canonica.href : window.location.href;
    const urlObj = new URL(currentUrl, MEDIO.url);
    urlObj.hash = "";
    urlObj.search = "";
    
    const url = urlObj.href;
    const ruta = urlObj.pathname.toLowerCase();
    const idioma = document.documentElement.lang || "es";

    const titulo = document.querySelector("h1")?.textContent?.trim() || document.title.trim() || MEDIO.nombre;
    const descripcion = document.querySelector('meta[name="description"]')?.content?.trim() || "";

    let tipo = "webpage";
    if (ruta === "/" || ruta === "/index.html") {
      tipo = "home";
    } else if (ruta.startsWith("/herramientas/")) {
      tipo = "tool";
    } else if (document.querySelector(".forbes-article-header") || document.querySelector("main article")) {
      tipo = "article";
    }

    const organizacion = {
      "@type": "Organization",
      "@id": MEDIO.url + "#organization",
      "name": MEDIO.nombre,
      "url": MEDIO.url,
      "logo": {
        "@type": "ImageObject",
        "url": MEDIO.logo
      },
      "sameAs": MEDIO.redes
    };

    const website = {
      "@type": "WebSite",
      "@id": MEDIO.url + "#website",
      "url": MEDIO.url,
      "name": MEDIO.nombre,
      "publisher": {
        "@id": MEDIO.url + "#organization"
      },
      "inLanguage": idioma
    };

    let entidad = {
      "@type": tipo === "home" ? "WebPage" : tipo === "article" ? "Article" : "WebPage",
      "@id": url + "#webpage",
      "url": url,
      "name": titulo,
      "inLanguage": idioma,
      "isPartOf": {
        "@id": MEDIO.url + "#website"
      },
      "publisher": {
        "@id": MEDIO.url + "#organization"
      }
    };

    if (descripcion) {
      entidad.description = descripcion;
    }

    if (tipo === "home") {
      entidad.about = {
        "@id": MEDIO.url + "#organization"
      };
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        organizacion,
        website,
        entidad
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.cmSchema = "generado";
    script.textContent = JSON.stringify(schema, null, 2);

    document.head.appendChild(script);
    console.log("¡Schema inyectado con éxito!");

  } catch (err) {
    console.error("Error crítico en schema-articulos.js:", err);
  }
})();