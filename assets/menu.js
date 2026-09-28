/* =====================================================
   CÓDIGO MILLONARIO · MENÚ CENTRALIZADO
   Archivo: /assets/menu.js
===================================================== */

(function () {

  'use strict';

  /* =====================================================
     HTML DEL MENÚ
  ===================================================== */

  const menuHTML = `
<header class="cm-header">

  <div class="cm-header-inner">

    <!-- LOGO -->

    <a href="/" class="cm-logo">
      <span class="cm-logo-title">Código Millonario</span>
    </a>

    <!-- NAVEGACIÓN -->

    <nav class="cm-nav">

      <div class="cm-nav-dropdown">

        <button class="cm-nav-link cm-dropdown-btn">
          FINANZAS
        </button>

        <div class="cm-dropdown-menu">

          <a href="/educacion-financiera.html">Dinero</a>
          <a href="/ahorro.html">Ahorro</a>
          <a href="/psicologia-del-dinero.html">
            Psicología del Dinero
          </a>
          <a href="/inversiones.html">Inversiones</a>
          <a href="/Herramientas.html">Herramientas</a>

        </div>

      </div>

      <div class="cm-nav-divider"></div>

      <div class="cm-nav-dropdown">

        <button class="cm-nav-link cm-dropdown-btn">
          NEGOCIOS
        </button>

        <div class="cm-dropdown-menu">

          <a href="/negocios.html">Negocios</a>
          <a href="/modelos-de-negocio.html">
            Modelos de Negocio
          </a>
          <a href="/emprendimientos.html">
            Emprendimientos
          </a>
          <a href="/productos.html">Productos</a>

        </div>

      </div>

      <div class="cm-nav-divider"></div>

      <div class="cm-nav-dropdown">

        <button class="cm-nav-link cm-dropdown-btn">
          MUNDO MILLONARIO
        </button>

        <div class="cm-dropdown-menu">

          <a href="/mundo-millonario.html">
            Mundo Millonario
          </a>

          <a href="/millonarios.html">
            Millonarios
          </a>

          <a href="/grandes-fortunas.html">
            Grandes Fortunas
          </a>

          <a href="/biografias-de-millonarios.html">
            Biografías de Millonarios
          </a>

        </div>

      </div>

    </nav>

    <!-- DERECHA -->

    <div class="cm-header-right">

      <button
        class="cm-search"
        aria-label="Buscar"
        type="button">

        <i class="fa-solid fa-magnifying-glass"></i>

      </button>

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
       CUADRO DEL LOGO · DEBAJO DEL MENÚ
  ===================================================== -->

  <div class="cm-logo-box">

    <img
      src="/assets/img/logo-cm.jpeg"
      alt="Código Millonario"
      class="cm-square-logo">

  </div>


  <!-- =====================================================
       MENÚ MOBILE
  ===================================================== -->

  <div class="cm-mobile-menu">

    <div class="cm-mobile-section">

      <button class="cm-mobile-title" type="button">

        <span>FINANZAS</span>

        <i class="fa-solid fa-chevron-down"></i>

      </button>

      <div class="cm-mobile-links">

        <a href="/educacion-financiera.html">
          Dinero
        </a>

        <a href="/ahorro.html">
          Ahorro
        </a>

        <a href="/psicologia-del-dinero.html">
          Psicología del Dinero
        </a>

        <a href="/inversiones.html">
          Inversiones
        </a>

        <a href="/Herramientas.html">
          Herramientas
        </a>

      </div>

    </div>


    <div class="cm-mobile-section">

      <button class="cm-mobile-title" type="button">

        <span>NEGOCIOS</span>

        <i class="fa-solid fa-chevron-down"></i>

      </button>

      <div class="cm-mobile-links">

        <a href="/negocios.html">
          Negocios
        </a>

        <a href="/modelos-de-negocio.html">
          Modelos de Negocio
        </a>

        <a href="/emprendimientos.html">
          Emprendimientos
        </a>

        <a href="/productos.html">
          Productos
        </a>

      </div>

    </div>


    <div class="cm-mobile-section">

      <button class="cm-mobile-title" type="button">

        <span>MUNDO MILLONARIO</span>

        <i class="fa-solid fa-chevron-down"></i>

      </button>

      <div class="cm-mobile-links">

        <a href="/mundo-millonario.html">
          Mundo Millonario
        </a>

        <a href="/millonarios.html">
          Millonarios
        </a>

        <a href="/grandes-fortunas.html">
          Grandes Fortunas
        </a>

        <a href="/biografias-de-millonarios.html">
          Biografías de Millonarios
        </a>

      </div>

    </div>

  </div>

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

  transition: transform .28s ease;

}


/* OCULTAR HEADER AL BAJAR */

.cm-header.cm-header-hidden {

  transform: translateY(-100%);

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

  font-family: 'Manrope', sans-serif;

  display: flex;

  align-items: center;

  width: auto;

  line-height: 1;

  white-space: nowrap;

  transform: translateX(-12px);

}


.cm-logo-title {

  font-size: 28px;

  font-weight: 800;

  letter-spacing: -0.055em;

  line-height: 1;

  white-space: nowrap;

}


/* =====================================================
   CUADRO DEL LOGO · DEBAJO DEL MENÚ
===================================================== */

.cm-logo-box {

  position: absolute;

  top: 100%;

  left: 10px;

  width: 28px;

  height: 28px;

  background: #000000;

  border: 1px solid #1f1f1f;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;

  z-index: 1001;

}


.cm-square-logo {

  width: 100%;

  height: 100%;

  object-fit: cover;

  display: block;

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

  transform: translateX(-50%);

}


.cm-nav-link {

  border: 0;

  background: transparent;

  text-decoration: none;

  color: #ffffff;

  font-family: 'Open Sans', sans-serif;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  display: flex;

  align-items: center;

  gap: 6px;

  padding: 22px 0;

  white-space: nowrap;

  transition: color .2s ease;

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

  top: calc(100% - 4px);

  left: -18px;

  width: 230px;

  background: #000000;

  border: 1px solid #292929;

  box-shadow:
    0 15px 35px rgba(0,0,0,.35);

  padding: 10px 0;

  opacity: 0;

  visibility: hidden;

  transform: translateY(7px);

  transition:
    opacity .18s ease,
    transform .18s ease,
    visibility .18s ease;

}


.cm-nav-dropdown:hover .cm-dropdown-menu {

  opacity: 1;

  visibility: visible;

  transform: translateY(0);

}


.cm-dropdown-menu a {

  display: block;

  padding: 12px 18px;

  text-decoration: none;

  color: #ffffff;

  font-family: 'Open Sans', sans-serif;

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


.cm-search {

  border: 0;

  background: transparent;

  color: #ffffff;

  font-size: 15px;

  cursor: pointer;

  padding: 8px;

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

    top: env(safe-area-inset-top);

  }


  .cm-header-inner {

    height: 60px;

    padding: 0 20px;

  }


  .cm-logo {

    width: auto;

    max-width: calc(100% - 8px);

  }


  .cm-logo-title {

    font-size: 22px;

    font-weight: 800;

    letter-spacing: -0.055em;

  }


  /* CUADRO DEL LOGO EN TELÉFONOS */

  .cm-logo-box {

    left: 10px;

    width: 28px;

    height: 28px;

  }


  .cm-nav {

    display: none;

  }


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

    border-top: 1px solid #1f1f1f;

    border-bottom: 1px solid #292929;

    padding: 66px 20px 10px;

    display: block;

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transform: translateY(0);

    transition:
      opacity .20s ease,
      visibility .20s ease;

    max-height: calc(100vh - 60px);

    overflow-y: auto;

  }


  /* MENÚ ABIERTO */

  .cm-header.cm-mobile-open .cm-mobile-menu {

    opacity: 1;

    visibility: visible;

    pointer-events: auto;

  }


  /* ===================================================
     SECCIONES
  =================================================== */

  .cm-mobile-section {

    border-bottom: 1px solid #252525;

  }


  .cm-mobile-section:last-child {

    border-bottom: 0;

  }


  .cm-mobile-title {

    width: 100%;

    border: 0;

    background: transparent;

    color: #ffffff;

    padding: 14px 0;

    display: flex;

    align-items: center;

    justify-content: space-between;

    font-family: 'Open Sans', sans-serif;

    font-size: 14px;

    font-weight: 600;

    letter-spacing: .03em;

    cursor: pointer;

    text-align: left;

  }


  .cm-mobile-title i {

    font-size: 11px;

    transition: transform .20s ease;

  }


  /* ===================================================
     ENLACES
  =================================================== */

  .cm-mobile-links {

    max-height: 0;

    overflow: hidden;

    transition: max-height .22s ease;

  }


  .cm-mobile-links a {

    display: block;

    color: #d8d8d8;

    text-decoration: none;

    font-family: 'Open Sans', sans-serif;

    font-size: 13px;

    font-weight: 400;

    padding: 10px 8px 10px 12px;

    border-top: 1px solid #151515;

  }


  .cm-mobile-links a:active {

    background: #151515;

  }


  /* SECCIÓN ABIERTA */

  .cm-mobile-section.cm-open .cm-mobile-links {

    max-height: 300px;

  }


  .cm-mobile-section.cm-open .cm-mobile-title i {

    transform: rotate(180deg);

  }

}


/* =====================================================
   RESPETAR REDUCCIÓN DE MOVIMIENTO
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .cm-header,

  .cm-mobile-menu,

  .cm-mobile-links,

  .cm-mobile-title i {

    transition: none;

  }

}

`;


  /* =====================================================
     INSERTAR CSS UNA SOLA VEZ
  ===================================================== */

  function insertStyles() {

    if (document.getElementById('cm-menu-styles')) {
      return;
    }

    const style = document.createElement('style');

    style.id = 'cm-menu-styles';

    style.textContent = menuCSS;

    document.head.appendChild(style);

  }


  /* =====================================================
     INSERTAR HTML UNA SOLA VEZ
  ===================================================== */

  function insertMenu() {

    if (document.querySelector('.cm-header')) {
      return;
    }

    document.body.insertAdjacentHTML(
      'afterbegin',
      menuHTML
    );

  }


  /* =====================================================
     FUNCIONES MENÚ MOBILE
  ===================================================== */

  function initializeMenu() {

    const header =
      document.querySelector('.cm-header');

    if (!header) return;


    const mobileButton =
      header.querySelector('.cm-menu-mobile');

    const mobileMenu =
      header.querySelector('.cm-mobile-menu');

    const mobileIcon =
      mobileButton
        ? mobileButton.querySelector('i')
        : null;

    const mobileSections =
      header.querySelectorAll(
        '.cm-mobile-section'
      );


    if (!mobileButton || !mobileMenu) {
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


        if (!title) return;


        title.addEventListener(
          'click',
          function () {

            const isOpen =
              section.classList.contains(
                'cm-open'
              );


            mobileSections.forEach(
              function (otherSection) {

                if (otherSection !== section) {

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
       ESC · CERRAR MENÚ
    =================================================== */

    document.addEventListener(
      'keydown',
      function (event) {

        if (event.key === 'Escape') {

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
        currentScrollY - lastStableScrollY;


      /* ==========================================
         CERRAR HAMBURGUESA AL HACER SCROLL
      ========================================== */

      if (
        header.classList.contains(
          'cm-mobile-open'
        )
      ) {

        closeMobileMenu();

      }


      /* ==========================================
         PARTE SUPERIOR
      ========================================== */

      if (currentScrollY <= 10) {

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


      /* ==========================================
         BAJANDO
      ========================================== */

      if (distance >= scrollThreshold) {

        if (headerVisible) {

          header.classList.add(
            'cm-header-hidden'
          );

          headerVisible = false;

        }


        lastStableScrollY =
          currentScrollY;

      }


      /* ==========================================
         SUBIENDO
      ========================================== */

      else if (
        distance <= -scrollThreshold
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
      { passive: true }
    );

  }


  /* =====================================================
     INICIALIZACIÓN
  ===================================================== */

  function init() {

    insertStyles();

    insertMenu();

    initializeMenu();

  }


  /* =====================================================
     EJECUTAR INMEDIATAMENTE
     El script ya está al final del <body>
  ===================================================== */

  init();


})();