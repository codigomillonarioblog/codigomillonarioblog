/* =========================================================
   CÓDIGO MILLONARIO — MENÚ DE SECCIONES
   HTML + CSS + JS desde un único archivo
========================================================= */

(function () {

  /* =========================================================
     RUTA ABSOLUTA DEL LOGO
     Funciona desde cualquier profundidad del sitio
  ========================================================= */

  const logoURL =
    window.location.origin +
    "/assets/img/codigo-millonario-logo.png";


  /* =========================================================
     HTML
  ========================================================= */

  const menuHTML = `

    <!-- BOTÓN DEL MENÚ -->
    <div class="cm-secciones-trigger">

      <button
        type="button"
        class="cm-secciones-btn"
        id="cmOpenMenu"
        aria-label="Abrir menú"
        aria-expanded="false">

        <span class="cm-secciones-icon">

          <span class="cm-secciones-lines"></span>

          <span class="cm-secciones-glass"></span>

        </span>

      </button>

    </div>


    <!-- OVERLAY -->
    <div
      class="cm-secciones-overlay"
      id="cmMenuOverlay">
    </div>


    <!-- MENÚ LATERAL -->
    <aside
      class="cm-secciones-menu"
      id="cmSideMenu"
      aria-hidden="true">


      <!-- BOTÓN CERRAR -->
      <button
        type="button"
        class="cm-secciones-close"
        id="cmCloseMenu"
        aria-label="Cerrar menú">

        &times;

      </button>


      <!-- LOGO -->
      <div class="cm-secciones-logo">

        <img
          src="${logoURL}"
          alt="Código Millonario">

      </div>


     <!-- ENCABEZADO EDITORIAL -->

     <div class="cm-secciones-heading">

     <span class="cm-secciones-heading-line"></span>

     <span class="cm-secciones-heading-text">
      EXPLORA NUESTRAS ÁREAS
     </span>

      </div>


      <!-- ENLACES -->
      <nav class="cm-secciones-links">


        <a href="/blog/ahorro/index.html">
          Construir Capital
        </a>

        <a href="/blog/inversiones/index.html">
          Hacer Crecer el Dinero
        </a>

        <a href="/blog/negocios/index.html">
          Crear Riqueza
        </a>

        <a href="/blog/psicologia-del-dinero/index.html">
          La Mente y el Dinero
        </a>

        <a href="/blog/servicios-financieros/index.html">
          El Sistema Financiero
        </a>

        <a href="/blog/biografia-de-millonarios/index.html">
          Historias de Riqueza
        </a>

        <a href="/blog/hechos-lujos-curiosidades/index.html">
          Dinero, Poder y Lujo
        </a>

        <a href="/blog/finanzas-personales/index.html">
         El Arte del Dinero
        </a>

        <a href="/blog/deudas/index.html">
         El Peso de las Deudas
        </a>

        <a href="/blog/desarrollo-profesional/index.html">
         Construir una Carrera
        </a>

        <a href="/blog/fundamentos-del-dinero/index.html">
         Los Principios del Dinero
        </a>

        <a href="/blog/mentalidad-de-exito/index.html">
         La Mentalidad para Avanzar
        </a>

        <a href="/tienda.html">
          Productos
        </a>

      </nav>


    </aside>

  `;


  /* =========================================================
     INSERTAR HTML
  ========================================================= */

  document.body.insertAdjacentHTML(
    "beforeend",
    menuHTML
  );


  /* =========================================================
     CSS
  ========================================================= */

  const style = document.createElement("style");

  style.textContent = `

/* =====================================================
   ENCABEZADO EDITORIAL
===================================================== */

.cm-secciones-heading {

  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 78px;

  padding:
    0
    40px
    14px
    40px;

  flex-shrink: 0;

}


.cm-secciones-heading-line {

  width: 22px;

  height: 1px;

  background: #e60000;

  flex-shrink: 0;

}


.cm-secciones-heading-text {

  color: rgba(255,255,255,.55);

  font-family:
    "Open Sans",
    sans-serif;

  font-size: 10px;

  font-weight: 600;

  letter-spacing: .18em;

  line-height: 1;

  white-space: nowrap;

}

    /* =====================================================
       BOTÓN
    ===================================================== */

    .cm-secciones-trigger {

      position: fixed;

      top: 10px;
      right: 20px;

      z-index: 99990;

    }


    @media (min-width: 768px) {

      .cm-secciones-trigger {
        top: 20px;
      }

    }


    .cm-secciones-btn {

      width: 49px;
      height: 49px;

      padding: 10px;

      border: none;

      background: transparent;

      cursor: pointer;

      display: flex;

      align-items: center;
      justify-content: center;

    }


    .cm-secciones-icon {

      position: relative;

      width: 29px;
      height: 29px;

      display: block;

    }


    /* =====================================================
       LÍNEAS
    ===================================================== */

    .cm-secciones-lines {

      position: absolute;

      left: 0;
      top: 6px;

      width: 12px;
      height: 2.2px;

      background: #fff;

      box-shadow:
        0 5px 0 #fff,
        0 10px 0 #fff;

    }


    /* =====================================================
       LUPA
    ===================================================== */

    .cm-secciones-glass {

      position: absolute;

      right: 6px;
      top: 0;

      width: 13px;
      height: 13px;

      border: 3px solid #fff;

      border-radius: 50%;

      background: #000;

    }


    .cm-secciones-glass::after {

      content: "";

      position: absolute;

      width: 8px;
      height: 2.2px;

      background: #fff;

      bottom: -3px;
      right: -5px;

      transform: rotate(30deg);

    }


    /* =====================================================
       OVERLAY
    ===================================================== */

    .cm-secciones-overlay {

      position: fixed;

      inset: 0;

      width: 100%;
      height: 100%;

      background: rgba(0,0,0,.62);

      opacity: 0;

      visibility: hidden;

      transition:
        opacity .3s ease,
        visibility .3s ease;

      z-index: 99991;

    }


    .cm-secciones-overlay.cm-active {

      opacity: 1;

      visibility: visible;

    }


    /* =====================================================
       MENÚ
    ===================================================== */

    .cm-secciones-menu {

      position: fixed;

      top: 0;
      right: 0;

      width: 85%;
      max-width: 320px;

      height: 100vh;
      height: 100dvh;

      background: #0f0f0f;

      z-index: 99992;

      transform: translateX(105%);

      transition:
        transform .4s cubic-bezier(.4,0,.2,1);

      box-shadow:
        -8px 0 30px rgba(0,0,0,.55);

      display: flex;

      flex-direction: column;

      overflow-y: auto;

      overscroll-behavior: contain;

      -webkit-overflow-scrolling: touch;

    }


    @media (min-width: 1024px) {

      .cm-secciones-menu {
        max-width: 460px;
      }

    }


    .cm-secciones-menu.cm-active {

      transform: translateX(0);

    }


    /* =====================================================
       CERRAR
    ===================================================== */

    .cm-secciones-close {

      position: absolute;

      top: 15px;
      right: 25px;

      width: 35px;
      height: 35px;

      padding: 0;

      background: transparent;

      border: none;

      color: #fff;

      font-size: 26px;

      line-height: 1;

      cursor: pointer;

      z-index: 5;

    }


    .cm-secciones-close:hover {
      opacity: .65;
    }


    /* =====================================================
       LOGO
    ===================================================== */

    .cm-secciones-logo {

      position: absolute;

      top: 25px;
      left: 20px;

      width: 110px;

      display: flex;

      align-items: center;

      justify-content: flex-start;

    }


    .cm-secciones-logo img {

      display: block;

      width: 110px;

      height: auto;

      max-width: 110px;

      object-fit: contain;

    }


    /* =====================================================
       ENLACES
    ===================================================== */

    .cm-secciones-links {

      display: flex;

      flex-direction: column;

      margin-top: 0px;

      flex-shrink: 0;

    }


    .cm-secciones-links a {

      color: #fff;

      text-decoration: none;

      padding:
        20px
        20px
        17px
        40px;

      font-family:
        "Open Sans",
        sans-serif;

      font-size: 15px;

      line-height: 1.4;

      position: relative;

      transition:
        background .2s ease,
        padding-left .2s ease;

    }


    .cm-secciones-links a::after {

      content: "";

      position: absolute;

      left: 40px;
      right: 40px;

      bottom: 0;

      height: 1px;

      background:
        rgba(255,255,255,.14);

    }


    .cm-secciones-links a:hover {

      background:
        rgba(255,255,255,.045);

      padding-left: 44px;

    }

  `;

  document.head.appendChild(style);


  /* =========================================================
     ELEMENTOS
  ========================================================= */

  const openBtn =
    document.getElementById("cmOpenMenu");

  const closeBtn =
    document.getElementById("cmCloseMenu");

  const menu =
    document.getElementById("cmSideMenu");

  const overlay =
    document.getElementById("cmMenuOverlay");


  /* =========================================================
     ABRIR
  ========================================================= */

  function openMenu() {

    menu.classList.add("cm-active");

    overlay.classList.add("cm-active");

    openBtn.setAttribute(
      "aria-expanded",
      "true"
    );

    menu.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  /* =========================================================
     CERRAR
  ========================================================= */

  function closeMenu() {

    menu.classList.remove("cm-active");

    overlay.classList.remove("cm-active");

    openBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menu.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  /* =========================================================
     EVENTOS
  ========================================================= */

  openBtn.addEventListener(
    "click",
    openMenu
  );


  closeBtn.addEventListener(
    "click",
    closeMenu
  );


  overlay.addEventListener(
    "click",
    closeMenu
  );


  /* =========================================================
     CERRAR AL ENTRAR EN UNA SECCIÓN
  ========================================================= */

  menu
    .querySelectorAll(".cm-secciones-links a")
    .forEach(function (link) {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  /* =========================================================
     ESCAPE
  ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        menu.classList.contains("cm-active")
      ) {

        closeMenu();

      }

    }
  );

})();