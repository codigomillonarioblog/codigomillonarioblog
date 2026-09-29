/* =====================================================
   ARCHIVO EDITORIAL · CÓDIGO MILLONARIO
   DATOS + RENDER + PAGINACIÓN
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const articlesPerPage = 6;

  const grid = document.getElementById("cmArticlesGrid");
  const pagination = document.getElementById("cmPagination");
  const numbersContainer = document.getElementById("cmPaginationNumbers");
  const prevButton = document.getElementById("cmPaginationPrev");
  const nextButton = document.getElementById("cmPaginationNext");
  const totalElement = document.querySelector(".cm-archive-total");


  /* =====================================================
     COMPROBACIONES
  ===================================================== */

  if (
    !grid ||
    !pagination ||
    !numbersContainer ||
    !prevButton ||
    !nextButton
  ) {
    return;
  }


  if (
    typeof articulos === "undefined" ||
    !Array.isArray(articulos)
  ) {
    console.error(
      "Código Millonario: no se encontró /assets/js/articulos.js"
    );

    return;
  }


  /* =====================================================
     DATOS
  ===================================================== */

  const datos = [...articulos];

  let currentPage = 1;


  /* =====================================================
     RENDERIZAR ARTÍCULOS
  ===================================================== */

  function renderArticles() {

    grid.innerHTML = "";

    const startIndex =
      (currentPage - 1) * articlesPerPage;

    const endIndex =
      startIndex + articlesPerPage;


    datos
      .slice(startIndex, endIndex)
      .forEach(function (article) {

        const element =
          document.createElement("article");

        element.className = "cm-article";


        element.innerHTML = `
          <a href="${article.url || "#"}">

            <div class="cm-article-image">

              <img
                src="${article.imagen || ""}"
                alt="${article.titulo || ""}"
                loading="lazy"
              >

            </div>


            <span class="cm-article-category">
              ${article.etiqueta || article.categoria || ""}
            </span>


            <h3>
              ${article.titulo || ""}
            </h3>


            <p class="cm-article-description">
              ${article.descripcion || ""}
            </p>


            <div class="cm-article-date">
              ${article.fecha || ""}
            </div>

          </a>
        `;


        grid.appendChild(element);

      });


    updateCounter();

    updatePagination();

  }


  /* =====================================================
     CONTADOR TOTAL
  ===================================================== */

  function updateCounter() {

    if (!totalElement) {
      return;
    }


    const total =
      datos.length;


    totalElement.textContent =
      total === 1
        ? "1 artículo"
        : total + " artículos";

  }


  /* =====================================================
     TOTAL DE PÁGINAS
  ===================================================== */

  function getTotalPages() {

    return Math.max(
      1,
      Math.ceil(
        datos.length / articlesPerPage
      )
    );

  }


  /* =====================================================
     ACTUALIZAR PAGINACIÓN
  ===================================================== */

  function updatePagination() {

    numbersContainer.innerHTML = "";


    const totalPages =
      getTotalPages();


    prevButton.disabled =
      currentPage === 1;


    nextButton.disabled =
      currentPage === totalPages;


    if (totalPages <= 1) {

      pagination.style.display =
        "none";

      return;

    }


    pagination.style.display =
      "flex";


    let startPage = 1;

    let endPage =
      totalPages;


    /* =================================================
       MOSTRAR MÁXIMO 5 NÚMEROS CENTRALES
    ================================================= */

    if (totalPages > 7) {

      if (currentPage <= 4) {

        startPage = 1;

        endPage = 5;

      }

      else if (
        currentPage >= totalPages - 3
      ) {

        startPage =
          totalPages - 4;

        endPage =
          totalPages;

      }

      else {

        startPage =
          currentPage - 2;

        endPage =
          currentPage + 2;

      }

    }


    /* =================================================
       PRIMERA PÁGINA + PUNTOS
    ================================================= */

    if (
      startPage > 1 &&
      totalPages > 7
    ) {

      createPageButton(1);

      createDots();

    }


    /* =================================================
       NÚMEROS
    ================================================= */

    for (
      let page = startPage;
      page <= endPage;
      page++
    ) {

      createPageButton(page);

    }


    /* =================================================
       PUNTOS + ÚLTIMA PÁGINA
    ================================================= */

    if (
      endPage < totalPages &&
      totalPages > 7
    ) {

      createDots();

      createPageButton(
        totalPages
      );

    }

  }


  /* =====================================================
     CREAR BOTÓN DE PÁGINA
  ===================================================== */

  function createPageButton(page) {

    const button =
      document.createElement("button");


    button.type =
      "button";


    button.textContent =
      page;


    button.setAttribute(
      "aria-label",
      "Ir a la página " + page
    );


    if (
      page === currentPage
    ) {

      button.classList.add(
        "active"
      );


      button.setAttribute(
        "aria-current",
        "page"
      );

    }


    button.addEventListener(
      "click",
      function () {

        showPage(page);

      }
    );


    numbersContainer.appendChild(
      button
    );

  }


  /* =====================================================
     PUNTOS DE CONTINUACIÓN
  ===================================================== */

  function createDots() {

    const dots =
      document.createElement("span");


    dots.textContent =
      "…";


    dots.setAttribute(
      "aria-hidden",
      "true"
    );


    dots.style.minWidth =
      "20px";


    dots.style.height =
      "35px";


    dots.style.display =
      "flex";


    dots.style.alignItems =
      "center";


    dots.style.justifyContent =
      "center";


    dots.style.fontSize =
      "12px";


    dots.style.color =
      "#777777";


    numbersContainer.appendChild(
      dots
    );

  }


  /* =====================================================
     ACTUALIZAR URL
  ===================================================== */

  function updateUrl() {

    const newUrl =
      new URL(
        window.location.href
      );


    if (
      currentPage === 1
    ) {

      newUrl.searchParams.delete(
        "pagina"
      );

    }

    else {

      newUrl.searchParams.set(
        "pagina",
        currentPage
      );

    }


    window.history.replaceState(
      {},
      "",
      newUrl
    );

  }


  /* =====================================================
     MOSTRAR PÁGINA
  ===================================================== */

  function showPage(page) {

    const totalPages =
      getTotalPages();


    if (page < 1) {
      page = 1;
    }


    if (page > totalPages) {
      page = totalPages;
    }


    currentPage =
      page;


    renderArticles();

    updateUrl();


    const archiveHeader =
      document.querySelector(
        ".cm-archive-header"
      );


    if (archiveHeader) {

      archiveHeader.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }


  /* =====================================================
     BOTÓN ANTERIOR
  ===================================================== */

  prevButton.addEventListener(
    "click",
    function () {

      if (currentPage > 1) {

        showPage(
          currentPage - 1
        );

      }

    }
  );


  /* =====================================================
     BOTÓN SIGUIENTE
  ===================================================== */

  nextButton.addEventListener(
    "click",
    function () {

      if (
        currentPage <
        getTotalPages()
      ) {

        showPage(
          currentPage + 1
        );

      }

    }
  );


  /* =====================================================
     LEER PÁGINA DESDE LA URL
  ===================================================== */

  const urlParams =
    new URLSearchParams(
      window.location.search
    );


  let initialPage =
    parseInt(
      urlParams.get("pagina"),
      10
    );


  if (
    isNaN(initialPage) ||
    initialPage < 1
  ) {

    initialPage = 1;

  }


  const totalPages =
    getTotalPages();


  if (
    initialPage >
    totalPages
  ) {

    initialPage =
      totalPages;

  }


  currentPage =
    initialPage;


  /* =====================================================
     CARGA INICIAL
  ===================================================== */

  renderArticles();


  /* =====================================================
     NAVEGACIÓN DEL HISTORIAL
  ===================================================== */

  window.addEventListener(
    "popstate",
    function () {

      const params =
        new URLSearchParams(
          window.location.search
        );


      let page =
        parseInt(
          params.get("pagina"),
          10
        );


      if (
        isNaN(page) ||
        page < 1
      ) {

        page = 1;

      }


      const pages =
        getTotalPages();


      if (
        page > pages
      ) {

        page = pages;

      }


      currentPage =
        page;


      renderArticles();

    }
  );

});