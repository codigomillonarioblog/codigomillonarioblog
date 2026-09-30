/* =====================================================
   CÓDIGO MILLONARIO · MENÚ CENTRALIZADO
   Archivo: /assets/menu.js
===================================================== */

(function () {

  'use strict';


  /* =====================================================
     FONT AWESOME
  ===================================================== */

  const FONT_AWESOME_URL =
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

  if (!document.querySelector('link[data-cm-fontawesome]')) {

    const fontAwesome = document.createElement('link');

    fontAwesome.rel = 'stylesheet';

    fontAwesome.href = FONT_AWESOME_URL;

    fontAwesome.dataset.cmFontawesome = 'true';

    document.head.appendChild(fontAwesome);

  }


  /* =====================================================
     HTML DEL MENÚ
  ===================================================== */

  const menuHTML = `

  <header class="cm-header">

    <div class="cm-header-inner">


      <!-- =================================================
           LOGO
      ================================================= -->

      <a href="/" class="cm-logo">

        <span class="cm-logo-title">
          Código Millonario
        </span>

      </a>


      <!-- =================================================
           NAVEGACIÓN DESKTOP
      ================================================= -->

      <nav class="cm-nav">


        <!-- FINANZAS -->

        <div class="cm-nav-dropdown">

          <button
            class="cm-nav-link cm-dropdown-btn"
            type="button">

            FINANZAS

          </button>


          <div class="cm-dropdown-menu">

            <a href="/index.html">
              Dinero
            </a>

            <a href="/blog/ahorro/index.html">
              Ahorro
            </a>

            <a href="/blog/psicologia-del-dinero/index.html">
              Psicología del Dinero
            </a>

            <a href="/blog/inversiones/index.html">
              Inversiones
            </a>

            <a href="/herramientas.html">
              Herramientas
            </a>

          </div>

        </div>


        <div class="cm-nav-divider"></div>


        <!-- NEGOCIOS -->

        <div class="cm-nav-dropdown">

          <button
            class="cm-nav-link cm-dropdown-btn"
            type="button">

            NEGOCIOS

          </button>


          <div class="cm-dropdown-menu">

            <a href="/blog/negocios/index.html">
              Negocios
            </a>

            <a href="/tienda.html">
              Productos
            </a>

          </div>

        </div>


        <div class="cm-nav-divider"></div>


        <!-- MUNDO MILLONARIO -->

        <div class="cm-nav-dropdown">

          <button
            class="cm-nav-link cm-dropdown-btn"
            type="button">

            MUNDO MILLONARIO

          </button>


          <div class="cm-dropdown-menu">

            <a href="/blog/mundo-millonario/index.html">
              Mundo Millonario
            </a>

            <a href="/blog/biografia-de-millonarios/index.html">
              Biografías de Millonarios
            </a>

          </div>

        </div>


      </nav>


      <!-- =================================================
           DERECHA
      ================================================= -->

      <div class="cm-header-right">


        <!-- =================================================
             LUPA · ABRE MENÚ DE CATEGORÍAS
        ================================================= -->

        <button
          class="cm-search"
          aria-label="Explorar secciones"
          aria-expanded="false"
          type="button">

          <i class="fa-solid fa-magnifying-glass"></i>

        </button>


        <!-- =================================================
             HAMBURGUESA · SOLO MOBILE
        ================================================= -->

        <button
          class="cm-menu-mobile"
          aria-label="Abrir menú"
          aria-expanded="false"
          type="button">

          <i class="fa-solid fa-bars"></i>

        </button>


      </div>

    </div>


    <!-- =====================================================
         MENÚ MOBILE
    ===================================================== -->

    <div class="cm-mobile-menu">


      <!-- FINANZAS -->

      <div class="cm-mobile-section">

        <button
          class="cm-mobile-title"
          type="button">

          <span>
            FINANZAS
          </span>

          <i class="fa-solid fa-chevron-down"></i>

        </button>


        <div class="cm-mobile-links">

          <a href="/index.html">
            Dinero
          </a>

          <a href="/blog/ahorro/index.html">
            Ahorro
          </a>

          <a href="/blog/psicologia-del-dinero/index.html">
            Psicología del Dinero
          </a>

          <a href="/blog/inversiones/index.html">
            Inversiones
          </a>

          <a href="/herramientas.html">
            Herramientas
          </a>

        </div>

      </div>


      <!-- NEGOCIOS -->

      <div class="cm-mobile-section">

        <button
          class="cm-mobile-title"
          type="button">

          <span>
            NEGOCIOS
          </span>

          <i class="fa-solid fa-chevron-down"></i>

        </button>


        <div class="cm-mobile-links">

          <a href="/blog/negocios/index.html">
            Negocios
          </a>

          <a href="/tienda.html">
            Productos
          </a>

        </div>

      </div>


      <!-- MUNDO MILLONARIO -->

      <div class="cm-mobile-section">

        <button
          class="cm-mobile-title"
          type="button">

          <span>
            MUNDO MILLONARIO
          </span>

          <i class="fa-solid fa-chevron-down"></i>

        </button>


        <div class="cm-mobile-links">

          <a href="/blog/mundo-millonario/index.html">
            Mundo Millonario
          </a>

          <a href="/blog/biografia-de-millonarios/index.html">
            Biografías de Millonarios
          </a>

        </div>

      </div>


    </div>


    <!-- =====================================================
         MENÚ LATERAL DE CATEGORÍAS
         
         INTEGRADO DIRECTAMENTE EN menu.js
         
         YA NO EXISTE categorias.js
         YA NO EXISTE cmOpenMenu
    ===================================================== -->


    <!-- OVERLAY -->

    <div
      class="cm-secciones-overlay"
      id="cmMenuOverlay">
    </div>


    <!-- PANEL -->

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
          src="/assets/img/logo-cm.png"
          alt="">

      </div>


      <!-- ENCABEZADO -->

      <div class="cm-secciones-heading">

        <span class="cm-secciones-heading-text">
          EXPLORA NUESTRAS ÁREAS
        </span>

      </div>


      <!-- CATEGORÍAS -->

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


  </header>

  `;


  /* =====================================================
     CSS DEL MENÚ
  ===================================================== */

  const menuCSS = `


/* =====================================================
   CÓDIGO MILLONARIO · HEADER
===================================================== */

.cm-header {

  width: 100%;

  background: #000000;

  border-bottom: 1px solid #1f1f1f;

  position: fixed;

  top: 0;

  left: 0;

  right: 0;

  z-index: 1000;

  transition:
    transform .28s ease;

}


/* =====================================================
   OCULTAR HEADER AL BAJAR
===================================================== */

.cm-header.cm-header-hidden {

  transform:
    translateY(-100%);

}


/* =====================================================
   CONTENEDOR
===================================================== */

.cm-header-inner {

  max-width: 1440px;

  height: 64px;

  margin: 0 auto;

  padding: 0 32px;

  display: flex;

  align-items: center;

  justify-content: space-between;

}


/* =====================================================
   LOGO / NOMBRE
===================================================== */

.cm-logo {

  text-decoration: none;

  color: #ffffff;

  font-family:
    'Manrope',
    sans-serif;

  display: flex;

  align-items: center;

  width: auto;

  line-height: 1;

  white-space: nowrap;

  transform:
    translateX(-12px);

}


.cm-logo-title {

  font-size: 28px;

  font-weight: 800;

  letter-spacing: -.055em;

  line-height: 1;

  white-space: nowrap;

}


/* =====================================================
   NAVEGACIÓN
===================================================== */

.cm-nav {

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 24px;

  position: absolute;

  left: 50%;

  transform:
    translateX(-50%);

}


.cm-nav-link {

  border: 0;

  background: transparent;

  text-decoration: none;

  color: #ffffff;

  font-family:
    'Open Sans',
    sans-serif;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  display: flex;

  align-items: center;

  gap: 6px;

  padding: 22px 0;

  white-space: nowrap;

  transition:
    color .2s ease;

}


.cm-nav-link:hover {

  color: #ccc;

}


/* =====================================================
   SEPARADORES
===================================================== */

.cm-nav-divider {

  width: 1px;

  height: 16px;

  background: #ffffff;

  flex-shrink: 0;

}


/* =====================================================
   DROPDOWN
===================================================== */

.cm-nav-dropdown {

  position: relative;

}


.cm-dropdown-btn span {

  font-size: 16px;

  line-height: 1;

  color: #ffffff;

}


.cm-dropdown-menu {

  position: absolute;

  top:
    calc(100% - 4px);

  left: -18px;

  width: 230px;

  background: #000000;

  border: 1px solid #292929;

  box-shadow:
    0 15px 35px
    rgba(0,0,0,.35);

  padding: 10px 0;

  opacity: 0;

  visibility: hidden;

  transform:
    translateY(7px);

  transition:
    opacity .18s ease,
    transform .18s ease,
    visibility .18s ease;

}


.cm-nav-dropdown:hover
.cm-dropdown-menu {

  opacity: 1;

  visibility: visible;

  transform:
    translateY(0);

}


.cm-dropdown-menu a {

  display: block;

  padding:
    12px 18px;

  text-decoration: none;

  color: #ffffff;

  font-family:
    'Open Sans',
    sans-serif;

  font-size: 13px;

  font-weight: 500;

  transition:
    background .18s ease,
    color .18s ease;

}


.cm-dropdown-menu a:hover {

  background: #1a1a1a;

  color: #ccc;

}


/* =====================================================
   DERECHA
===================================================== */

.cm-header-right {

  display: flex;

  align-items: center;

  gap: 18px;

  margin-left: auto;

}


/* =====================================================
   LUPA
===================================================== */

.cm-search {

  border: 0;

  background: transparent;

  color: #ffffff;

  font-size: 15px;

  cursor: pointer;

  padding: 8px;

  line-height: 1;

}


.cm-search:hover {

  color: #ccc;

}


/* =====================================================
   MENÚ MOBILE · BOTÓN
===================================================== */

.cm-menu-mobile {

  display: none;

  border: 0;

  background: transparent;

  font-size: 20px;

  color: #ffffff;

  cursor: pointer;

  padding: 8px;

  line-height: 1;

}


/* =====================================================
   MENÚ MOBILE · CONTENEDOR
===================================================== */

.cm-mobile-menu {

  display: none;

}


/* =====================================================
   =====================================================
   MENÚ LATERAL DE CATEGORÍAS
   =====================================================
===================================================== */


/* =====================================================
   OVERLAY
===================================================== */

.cm-secciones-overlay {

  position: fixed;

  inset: 0;

  width: 100%;

  height: 100%;

  background:
    rgba(0,0,0,.62);

  opacity: 0;

  visibility: hidden;

  pointer-events: none;

  transition:
    opacity .3s ease,
    visibility .3s ease;

  z-index: 1999;

}


.cm-secciones-overlay.cm-active {

  opacity: 1;

  visibility: visible;

  pointer-events: auto;

}


/* =====================================================
   PANEL LATERAL
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

  z-index: 2000;

  transform:
    translateX(105%);

  transition:
    transform .4s
    cubic-bezier(.4,0,.2,1);

  box-shadow:
    -8px 0 30px
    rgba(0,0,0,.55);

  display: flex;

  flex-direction: column;

  overflow-y: auto;

  overscroll-behavior: contain;

  -webkit-overflow-scrolling:
    touch;

}


/* =====================================================
   PANEL DESKTOP
===================================================== */

@media (min-width: 1024px) {

  .cm-secciones-menu {

    max-width: 460px;

  }

}


/* =====================================================
   PANEL ABIERTO
===================================================== */

.cm-secciones-menu.cm-active {

  transform:
    translateX(0);

}


/* =====================================================
   BOTÓN CERRAR
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

  color: #ffffff;

  font-size: 26px;

  line-height: 1;

  cursor: pointer;

  z-index: 5;

}


.cm-secciones-close:hover {

  opacity: .65;

}


/* =====================================================
   LOGO DEL PANEL
===================================================== */

.cm-secciones-logo {
  position: absolute;
  top: 22px;
  left: 20px;
  width: 45px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.cm-secciones-logo img {
  display: block;
  width: 45px;
  height: auto;
  max-width: 45px;
  object-fit: contain;
}


/* =====================================================
   ENCABEZADO DEL PANEL
===================================================== */

.cm-secciones-heading {

  display: flex;

  align-items: center;

  margin-top: 78px;

  padding:
    0
    40px
    14px
    40px;

  flex-shrink: 0;

}


.cm-secciones-heading-text {

  color: #ffffff;

  font-family:
    'Open Sans',
    sans-serif;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: .08em;

  line-height: 1;

  white-space: nowrap;

}


/* =====================================================
   ENLACES DEL PANEL
===================================================== */

.cm-secciones-links {

  display: flex;

  flex-direction: column;

  margin-top: 0;

  flex-shrink: 0;

}


.cm-secciones-links a {

  color: #ffffff;

  text-decoration: none;

  padding:
    20px
    20px
    17px
    40px;

  font-family:
    'Open Sans',
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


/* =====================================================
   PANEL MOBILE
===================================================== */

@media (max-width: 850px) {

  .cm-secciones-menu {

    width: 85%;

    max-width: 320px;

  }

}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 1050px) {

  .cm-nav {

    gap: 20px;

  }


  .cm-nav-link {

    font-size: 15px;

  }

}


@media (max-width: 850px) {

  .cm-header {

    top:
      env(safe-area-inset-top);

  }


  .cm-header-inner {

    height: 60px;

    padding:
      0 20px;

  }


  .cm-logo {

    width: auto;

    max-width:
      calc(100% - 8px);

  }


  .cm-logo-title {

    font-size: 22px;

    font-weight: 800;

    letter-spacing: -.055em;

  }


  /* ===================================================
     CUADRO DEL LOGO EN TELÉFONOS
  =================================================== */

  .cm-logo-box {

    left: 10px;

    width: 28px;

    height: 28px;

  }


  /* ===================================================
     OCULTAR NAVEGACIÓN DESKTOP
  =================================================== */

  .cm-nav {

    display: none;

  }


  /* ===================================================
     MOSTRAR HAMBURGUESA
  =================================================== */

  .cm-menu-mobile {

    display: block;

  }


  /* ===================================================
     PANEL MOBILE
  =================================================== */

  .cm-mobile-menu {

    position: absolute;

    top: 100%;

    left: 0;

    right: 0;

    background: #000000;

    border-top:
      1px solid #1f1f1f;

    border-bottom:
      1px solid #292929;

    padding:
      66px
      20px
      10px;

    display: block;

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transform:
      translateY(0);

    transition:
      opacity .20s ease,
      visibility .20s ease;

    max-height:
      calc(100vh - 60px);

    overflow-y: auto;

  }


  /* ===================================================
     MENÚ MOBILE ABIERTO
  =================================================== */

  .cm-header.cm-mobile-open
  .cm-mobile-menu {

    opacity: 1;

    visibility: visible;

    pointer-events: auto;

  }


  /* ===================================================
     SECCIONES MOBILE
  =================================================== */

  .cm-mobile-section {

    border-bottom:
      1px solid #252525;

  }


  .cm-mobile-section:last-child {

    border-bottom: 0;

  }


  /* ===================================================
     TÍTULOS MOBILE
  =================================================== */

  .cm-mobile-title {

    width: 100%;

    border: 0;

    background: transparent;

    color: #ffffff;

    padding:
      14px 0;

    display: flex;

    align-items: center;

    justify-content: space-between;

    font-family:
      'Open Sans',
      sans-serif;

    font-size: 14px;

    font-weight: 600;

    letter-spacing: .03em;

    cursor: pointer;

    text-align: left;

  }


  .cm-mobile-title i {

    font-size: 11px;

    transition:
      transform .20s ease;

  }


  /* ===================================================
     ENLACES MOBILE
  =================================================== */

  .cm-mobile-links {

    max-height: 0;

    overflow: hidden;

    transition:
      max-height .22s ease;

  }


  .cm-mobile-links a {

    display: block;

    color: #d8d8d8;

    text-decoration: none;

    font-family:
      'Open Sans',
      sans-serif;

    font-size: 13px;

    font-weight: 400;

    padding:
      10px
      8px
      10px
      12px;

    border-top:
      1px solid #151515;

  }


  .cm-mobile-links a:active {

    background:
      #151515;

  }


  /* ===================================================
     SECCIÓN ABIERTA
  =================================================== */

  .cm-mobile-section.cm-open
  .cm-mobile-links {

    max-height: 300px;

  }


  .cm-mobile-section.cm-open
  .cm-mobile-title i {

    transform:
      rotate(180deg);

  }

}


/* =====================================================
   REDUCCIÓN DE MOVIMIENTO
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .cm-header,

  .cm-mobile-menu,

  .cm-mobile-links,

  .cm-mobile-title i,

  .cm-secciones-menu,

  .cm-secciones-overlay {

    transition: none;

  }

}

`;


  /* =====================================================
     INSERTAR CSS UNA SOLA VEZ
  ===================================================== */

  function insertStyles() {

    if (
      document.getElementById(
        'cm-menu-styles'
      )
    ) {

      return;

    }


    const style =
      document.createElement('style');


    style.id =
      'cm-menu-styles';


    style.textContent =
      menuCSS;


    document.head.appendChild(style);

  }


  /* =====================================================
     INSERTAR HTML UNA SOLA VEZ
  ===================================================== */

  function insertMenu() {

    if (
      document.querySelector(
        '.cm-header'
      )
    ) {

      return;

    }


    document.body.insertAdjacentHTML(
      'afterbegin',
      menuHTML
    );

  }


  /* =====================================================
     MENÚ LATERAL · CATEGORÍAS
  ===================================================== */

  function initializeCategoriesMenu() {

    const header =
      document.querySelector(
        '.cm-header'
      );


    if (!header) {

      return;

    }


    const searchButton =
      header.querySelector(
        '.cm-search'
      );


    const sideMenu =
      document.getElementById(
        'cmSideMenu'
      );


    const overlay =
      document.getElementById(
        'cmMenuOverlay'
      );


    const closeButton =
      document.getElementById(
        'cmCloseMenu'
      );


    if (
      !searchButton ||
      !sideMenu ||
      !overlay ||
      !closeButton
    ) {

      return;

    }


    /* ===================================================
       CERRAR MENÚ LATERAL
    =================================================== */

    function closeCategoriesMenu() {

      sideMenu.classList.remove(
        'cm-active'
      );


      overlay.classList.remove(
        'cm-active'
      );


      sideMenu.setAttribute(
        'aria-hidden',
        'true'
      );


      searchButton.setAttribute(
        'aria-expanded',
        'false'
      );


      document.body.style.overflow = '';

    }


    /* ===================================================
       ABRIR MENÚ LATERAL
    =================================================== */

    function openCategoriesMenu() {

      /* -----------------------------------------------
         SI ESTÁ ABIERTA LA HAMBURGUESA,
         LA CERRAMOS PRIMERO
      ------------------------------------------------ */

      closeMobileMenuIfOpen();


      sideMenu.classList.add(
        'cm-active'
      );


      overlay.classList.add(
        'cm-active'
      );


      sideMenu.setAttribute(
        'aria-hidden',
        'false'
      );


      searchButton.setAttribute(
        'aria-expanded',
        'true'
      );


      /*
       * Evita que la página del fondo
       * se mueva mientras el panel está abierto.
       */

      document.body.style.overflow =
        'hidden';

    }


    /* ===================================================
       LUPA
    =================================================== */

    searchButton.addEventListener(
      'click',
      function (event) {

        event.preventDefault();

        event.stopPropagation();


        const isOpen =
          sideMenu.classList.contains(
            'cm-active'
          );


        if (isOpen) {

          closeCategoriesMenu();

        } else {

          openCategoriesMenu();

        }

      }
    );


    /* ===================================================
       BOTÓN X
    =================================================== */

    closeButton.addEventListener(
      'click',
      function () {

        closeCategoriesMenu();

      }
    );


    /* ===================================================
       OVERLAY
    =================================================== */

    overlay.addEventListener(
      'click',
      function () {

        closeCategoriesMenu();

      }
    );


    /* ===================================================
       CERRAR AL ENTRAR EN UNA SECCIÓN
    =================================================== */

    const categoryLinks =
      sideMenu.querySelectorAll(
        '.cm-secciones-links a'
      );


    categoryLinks.forEach(
      function (link) {

        link.addEventListener(
          'click',
          function () {

            closeCategoriesMenu();

          }
        );

      }
    );


    /* ===================================================
       FUNCIÓN GLOBAL
       
       Se deja disponible por compatibilidad,
       pero ya NO existe ningún botón externo.
    =================================================== */

    window.openCategoriasMenu =
      openCategoriesMenu;


    window.closeCategoriasMenu =
      closeCategoriesMenu;


    /* ===================================================
       CERRAR CON ESCAPE
    =================================================== */

    document.addEventListener(
      'keydown',
      function (event) {

        if (
          event.key === 'Escape'
        ) {

          closeCategoriesMenu();

        }

      }
    );


    /* ===================================================
       CERRAR SI CAMBIA EL TAMAÑO DE PANTALLA
    =================================================== */

    window.addEventListener(
      'resize',
      function () {

        if (
          sideMenu.classList.contains(
            'cm-active'
          )
        ) {

          /*
           * No cerramos el panel.
           * Simplemente dejamos que CSS
           * controle su tamaño.
           */

        }

      }
    );


    /* ===================================================
       FUNCIÓN AUXILIAR
    =================================================== */

    function closeMobileMenuIfOpen() {

      const mobileMenuButton =
        header.querySelector(
          '.cm-menu-mobile'
        );


      if (
        header.classList.contains(
          'cm-mobile-open'
        )
      ) {

        header.classList.remove(
          'cm-mobile-open'
        );


        if (mobileMenuButton) {

          mobileMenuButton.setAttribute(
            'aria-expanded',
            'false'
          );


          mobileMenuButton.setAttribute(
            'aria-label',
            'Abrir menú'
          );


          const icon =
            mobileMenuButton.querySelector(
              'i'
            );


          if (icon) {

            icon.classList.remove(
              'fa-xmark'
            );


            icon.classList.add(
              'fa-bars'
            );

          }

        }


        header
          .querySelectorAll(
            '.cm-mobile-section'
          )
          .forEach(
            function (section) {

              section.classList.remove(
                'cm-open'
              );

            }
          );

      }

    }

  }


  /* =====================================================
     FUNCIONES MENÚ MOBILE
  ===================================================== */

  function initializeMenu() {

    const header =
      document.querySelector(
        '.cm-header'
      );


    if (!header) {

      return;

    }


    const mobileButton =
      header.querySelector(
        '.cm-menu-mobile'
      );


    const mobileMenu =
      header.querySelector(
        '.cm-mobile-menu'
      );


    const mobileIcon =
      mobileButton
        ? mobileButton.querySelector('i')
        : null;


    const mobileSections =
      header.querySelectorAll(
        '.cm-mobile-section'
      );


    if (
      !mobileButton ||
      !mobileMenu
    ) {

      return;

    }


    /* ===================================================
       CERRAR MENÚ MOBILE
    =================================================== */

    function closeMobileMenu() {

      header.classList.remove(
        'cm-mobile-open'
      );


      mobileButton.setAttribute(
        'aria-expanded',
        'false'
      );


      mobileButton.setAttribute(
        'aria-label',
        'Abrir menú'
      );


      if (mobileIcon) {

        mobileIcon.classList.remove(
          'fa-xmark'
        );


        mobileIcon.classList.add(
          'fa-bars'
        );

      }


      mobileSections.forEach(
        function (section) {

          section.classList.remove(
            'cm-open'
          );

        }
      );

    }


    /* ===================================================
       ABRIR / CERRAR MENÚ
    =================================================== */

    mobileButton.addEventListener(
      'click',
      function () {

        const isOpen =
          header.classList.contains(
            'cm-mobile-open'
          );


        if (isOpen) {

          closeMobileMenu();

          return;

        }


        /*
         * Si el panel lateral de categorías
         * está abierto, lo cerramos.
         */

        if (
          typeof window.closeCategoriasMenu ===
          'function'
        ) {

          window.closeCategoriasMenu();

        }


        header.classList.add(
          'cm-mobile-open'
        );


        mobileButton.setAttribute(
          'aria-expanded',
          'true'
        );


        mobileButton.setAttribute(
          'aria-label',
          'Cerrar menú'
        );


        if (mobileIcon) {

          mobileIcon.classList.remove(
            'fa-bars'
          );


          mobileIcon.classList.add(
            'fa-xmark'
          );

        }

      }
    );


    /* ===================================================
       SUBMENÚS MOBILE
    =================================================== */

    mobileSections.forEach(
      function (section) {

        const title =
          section.querySelector(
            '.cm-mobile-title'
          );


        if (!title) {

          return;

        }


        title.addEventListener(
          'click',
          function () {

            const isOpen =
              section.classList.contains(
                'cm-open'
              );


            mobileSections.forEach(
              function (otherSection) {

                if (
                  otherSection !== section
                ) {

                  otherSection.classList.remove(
                    'cm-open'
                  );

                }

              }
            );


            section.classList.toggle(
              'cm-open',
              !isOpen
            );

          }
        );

      }
    );


    /* ===================================================
       CERRAR AL TOCAR UN ENLACE
    =================================================== */

    const mobileLinks =
      header.querySelectorAll(
        '.cm-mobile-links a'
      );


    mobileLinks.forEach(
      function (link) {

        link.addEventListener(
          'click',
          function () {

            closeMobileMenu();

          }
        );

      }
    );


    /* ===================================================
       ESC · CERRAR MENÚ MOBILE
    =================================================== */

    document.addEventListener(
      'keydown',
      function (event) {

        if (
          event.key === 'Escape'
        ) {

          closeMobileMenu();

        }

      }
    );


    /* ===================================================
       HEADER · SCROLL
    =================================================== */

    let headerVisible = true;


    let lastStableScrollY =
      window.scrollY;


    const scrollThreshold = 18;


    let ticking = false;


    function updateHeader() {

      const currentScrollY =
        window.scrollY;


      const distance =
        currentScrollY -
        lastStableScrollY;


      /* ================================================
         CERRAR HAMBURGUESA AL HACER SCROLL
      ================================================= */

      if (
        header.classList.contains(
          'cm-mobile-open'
        )
      ) {

        closeMobileMenu();

      }


      /* ================================================
         PARTE SUPERIOR
      ================================================= */

      if (
        currentScrollY <= 10
      ) {

        if (!headerVisible) {

          header.classList.remove(
            'cm-header-hidden'
          );


          headerVisible = true;

        }


        lastStableScrollY =
          currentScrollY;


        ticking = false;


        return;

      }


      /* ================================================
         BAJANDO
      ================================================= */

      if (
        distance >=
        scrollThreshold
      ) {

        if (headerVisible) {

          header.classList.add(
            'cm-header-hidden'
          );


          headerVisible = false;

        }


        lastStableScrollY =
          currentScrollY;

      }


      /* ================================================
         SUBIENDO
      ================================================= */

      else if (
        distance <=
        -scrollThreshold
      ) {

        if (!headerVisible) {

          header.classList.remove(
            'cm-header-hidden'
          );


          headerVisible = true;

        }


        lastStableScrollY =
          currentScrollY;

      }


      ticking = false;

    }


    window.addEventListener(
      'scroll',
      function () {

        if (!ticking) {

          window.requestAnimationFrame(
            updateHeader
          );


          ticking = true;

        }

      },
      {
        passive: true
      }
    );

  }


  /* =====================================================
     INICIALIZACIÓN
  ===================================================== */

  function init() {

    insertStyles();

    insertMenu();

    initializeCategoriesMenu();

    initializeMenu();

  }


  /* =====================================================
     EJECUTAR
  ===================================================== */

  init();


})();