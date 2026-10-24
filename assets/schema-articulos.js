(() => {
  "use strict";

  // =========================================================
  // CÓDIGO MILLONARIO · GENERADOR AUTOMÁTICO DE SCHEMA
  // =========================================================

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

  const ID_ORGANIZACION = MEDIO.url + "#organization";
  const ID_WEBSITE = MEDIO.url + "#website";

  // Evitar duplicados del propio generador.
  if (document.querySelector('script[data-cm-schema="generado"]')) {
    return;
  }

  // =========================================================
  // INFORMACIÓN GENERAL
  // =========================================================

  const canonica = document.querySelector('link[rel="canonical"]');

  const urlPagina = new URL(
    canonica?.href || window.location.href,
    MEDIO.url
  );

  urlPagina.hash = "";
  urlPagina.search = "";

  const url = urlPagina.href;
  const ruta = urlPagina.pathname.toLowerCase();
  const idioma = document.documentElement.lang || "es";

  const titulo =
    document.querySelector("h1")?.textContent.trim() ||
    document.title.trim() ||
    MEDIO.nombre;

  const descripcion =
    document.querySelector('meta[name="description"]')?.content.trim() || "";

  // =========================================================
  // DETECCIÓN AUTOMÁTICA DEL TIPO DE PÁGINA
  // =========================================================

  function detectarTipo() {
    // Portada.
    if (ruta === "/" || ruta === "/index.html") {
      return "home";
    }

    // Herramientas, calculadoras y juegos.
    if (ruta.startsWith("/herramientas/")) {
      return "tool";
    }

    // Páginas institucionales exactas.
    if (/\/contacto\.html$/.test(ruta)) {
      return "contact";
    }

    if (
      /\/(nuestro-equipo|sobre-el-medio)\.html$/.test(ruta)
    ) {
      return "about";
    }

    // 1. PRIMERO validamos si es un artículo real (aunque esté en /blog/nombre/index.html)
    if (esArticulo()) {
      return "article";
    }

    // 2. SEGUNDO: Si no es artículo pero está dentro de /blog/ (ej. categorías de sección)
    if (/^\/blog\/.+\/index\.html$/.test(ruta) || esPaginaColeccion()) {
      return "collection";
    }

    return "page";
  }

  // Detectar colecciones por elementos característicos.
  function esPaginaColeccion() {
    const tieneIndicadoresColeccion = document.querySelector(
      '[data-cm-collection], .category-page, .category-header, .archive-header, .articles-archive, .category-grid, .featured-card'
    );

    const tieneContenidoDeListado = document.querySelector(
      '.article-grid, .articles-grid, .archive-grid, .posts-grid, .category-articles, [data-articles-list]'
    );

    const tieneArticulosEnListado =
      document.querySelectorAll(
        '.article-grid article, .articles-grid article, .archive-grid article, .posts-grid article, .category-articles article, [data-articles-list] article'
      ).length > 0;

    const esPaginaDeRecursos =
      /\/(tienda)\.html$/.test(ruta);

    return (
      esPaginaDeRecursos ||
      Boolean(tieneIndicadoresColeccion && (
        tieneContenidoDeListado || tieneArticulosEnListado
      ))
    );
  }

  // Detectar artículos individuales sin confundirlos
  // con tarjetas de artículos en una portada o colección.
  function esArticulo() {
    if (document.querySelector(".forbes-article-header")) {
      return true;
    }

    const article = document.querySelector("main article");

    return Boolean(
      article &&
      article.querySelector("h1") &&
      (
        article.querySelector(".article-content") ||
        article.querySelector(".article-body") ||
        article.querySelector(".forbes-article-header") ||
        article.querySelector("time[datetime]")
      )
    );
  }

  const tipo = detectarTipo();

  // =========================================================
  // IMAGEN PRINCIPAL
  // =========================================================

  function obtenerImagen() {
    const meta =
      document.querySelector('meta[property="og:image"]')?.content ||
      document.querySelector('meta[name="twitter:image"]')?.content;

    if (meta) {
      try {
        return new URL(meta, url).href;
      } catch (_) {}
    }

    const imagen = document.querySelector(
      ".forbes-article-header img, main article img, main > img, main img"
    );

    if (!imagen) {
      return null;
    }

    try {
      return new URL(imagen.getAttribute("src") || imagen.src, url).href;
    } catch (_) {
      return null;
    }
  }

  const imagen = obtenerImagen();

  // =========================================================
  // ORGANIZACIÓN Y SITIO WEB
  // =========================================================

  const organizacion = {
    "@type": "Organization",
    "@id": ID_ORGANIZACION,
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
    "@id": ID_WEBSITE,
    "url": MEDIO.url,
    "name": MEDIO.nombre,
    "publisher": {
      "@id": ID_ORGANIZACION
    },
    "inLanguage": idioma
  };

  // =========================================================
  // NODO BASE
  // =========================================================

  const pagina = {
    "@id": url + "#webpage",
    "url": url,
    "name": titulo,
    "inLanguage": idioma,
    "isPartOf": {
      "@id": ID_WEBSITE
    },
    "publisher": {
      "@id": ID_ORGANIZACION
    }
  };

  if (descripcion) {
    pagina.description = descripcion;
  }

  // =========================================================
  // AUTOR DEL ARTÍCULO
  // =========================================================

  function obtenerAutor() {
    const enlace = document.querySelector(
      '.forbes-article-header a[href*="nuestro-equipo"], main article a[href*="nuestro-equipo"]'
    );

    if (enlace?.textContent.trim()) {
      return {
        "@type": "Person",
        "name": enlace.textContent.trim(),
        "url": new URL(enlace.getAttribute("href"), url).href
      };
    }

    const autorMeta =
      document.querySelector('meta[name="author"]')?.content.trim();

    if (autorMeta) {
      return {
        "@type": "Person",
        "name": autorMeta
      };
    }

    return {
      "@type": "Organization",
      "@id": ID_ORGANIZACION,
      "name": MEDIO.nombre
    };
  }

  // =========================================================
  // FECHAS DEL ARTÍCULO
  // =========================================================

  function obtenerFecha(selectorMeta, selectorTime) {
    const valorMeta = document.querySelector(selectorMeta)?.content;
    const valorTime = document.querySelector(selectorTime)?.getAttribute("datetime");
    const fecha = valorMeta || valorTime;

    if (fecha && !Number.isNaN(Date.parse(fecha))) {
      return fecha;
    }

    return null;
  }

  // =========================================================
  // GENERAR EL SCHEMA SEGÚN EL TIPO DETECTADO
  // =========================================================

  let entidad;

  switch (tipo) {
    case "home":
      entidad = {
        "@type": "WebPage",
        ...pagina,
        "about": {
          "@id": ID_ORGANIZACION
        }
      };
      break;

    case "article": {
      entidad = {
        "@type": "Article",
        ...pagina,
        "headline": titulo,
        "mainEntityOfPage": {
          "@id": url + "#webpage"
        },
        "author": obtenerAutor(),
        "publisher": {
          "@id": ID_ORGANIZACION
        }
      };

      if (imagen) {
        entidad.image = {
          "@type": "ImageObject",
          "url": imagen
        };
      }

      const publicada = obtenerFecha(
        'meta[property="article:published_time"]',
        "main article time[datetime]"
      );

      const modificada = obtenerFecha(
        'meta[property="article:modified_time"]',
        'main article time[datetime]'
      );

      if (publicada) entidad.datePublished = publicada;
      if (modificada) entidad.dateModified = modificada;

      break;
    }

    case "tool": {
      const esJuego =
        /juego|pong|casino|mito o realidad|trivia|quiz/i.test(
          titulo + " " + ruta
        );

      entidad = {
        "@type": "WebApplication",
        ...pagina,
        "applicationCategory": esJuego
          ? "GameApplication"
          : "FinanceApplication",
        "operatingSystem": "Any",
        "isAccessibleForFree": true
      };

      if (imagen) entidad.image = imagen;
      break;
    }

    case "collection":
      entidad = {
        "@type": "CollectionPage",
        ...pagina
      };
      break;

    case "contact":
      entidad = {
        "@type": "ContactPage",
        ...pagina
      };
      break;

    case "about":
      entidad = {
        "@type": "AboutPage",
        ...pagina,
        "about": {
          "@id": ID_ORGANIZACION
        }
      };
      break;

    default:
      entidad = {
        "@type": "WebPage",
        ...pagina
      };
  }

  // =========================================================
  // INSERTAR JSON-LD
  // =========================================================

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
})();