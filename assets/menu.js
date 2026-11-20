/* =====================================================
   CÓDIGO MILLONARIO · MENÚ CENTRALIZADO (DEFINITIVO)
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
     HTML DEL MENÚ + NEWSLETTER MODAL
  ===================================================== */

  const menuHTML = `

  <header class="cm-header">

    <div class="cm-header-inner">


      <!-- =================================================
           LOGO (INDEPENDIZADO A LA IZQUIERDA)
      ================================================= -->

      <a href="/" class="cm-logo">
        <span class="cm-logo-title">
          Código Millonario<span class="cm-copyright">©</span>
        </span>
      </a>


      <!-- =================================================
           NAVEGACIÓN DESKTOP (INDEPENDIZADA AL CENTRO)
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
            
            <a href="/blog/negocios/index.html">
              Negocios
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


        <div class="cm-nav-divider"></div>


        <!-- MEDIO -->
        <div class="cm-nav-dropdown">
          <button
            class="cm-nav-link cm-dropdown-btn"
            type="button">
            EL MEDIO
          </button>

          <div class="cm-dropdown-menu">

            <a href="/index.html">
              Portada
            </a>

            <a href="/educacion-financiera.html">
              Contenidos
            </a>

            <a href="/contacto.html">
              Escríbenos
            </a>

          </div>

        </div>

      </nav>


      <!-- =================================================
           DERECHA (INDEPENDIZADA A LA DERECHA)
      ================================================= -->

      <div class="cm-header-right">


        <!-- BOTÓN NEWSLETTER · DESKTOP -->
        <button
          class="cm-newsletter-btn cm-nl-desktop"
          type="button"
          aria-haspopup="dialog"
          aria-controls="cmNewsletterModal">
          Newsletter
        </button>


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
          
          <a href="/blog/negocios/index.html">
            Negocios
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


      <!-- EL MEDIO -->
      <div class="cm-mobile-section">
        <button
          class="cm-mobile-title"
          type="button">
          <span>
            EL MEDIO
          </span>

          <i class="fa-solid fa-chevron-down"></i>
        </button>

        <div class="cm-mobile-links">

          <a href="/index.html">
            Portada
          </a>

          <a href="/educacion-financiera.html">
            Contenidos
          </a>

          <a href="/contacto.html">
            Escríbenos
          </a>

        </div>

      </div>


      <!-- NEWSLETTER CENTRADA AL FINAL DEL MENÚ MÓVIL -->
      <div class="cm-mobile-newsletter-wrap">
        <button
          type="button"
          class="cm-newsletter-btn cm-nl-mobile"
          aria-haspopup="dialog"
          aria-controls="cmNewsletterModal">
          Newsletter
        </button>
      </div>


    </div>


    <!-- =====================================================
         OVERLAY
    ===================================================== -->

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


      <!-- LOGO / ICONO DEL MEDIO -->

      <div class="cm-secciones-logo">

        <img
          src="/assets/img/logo-cm.png"
          alt="Código Millonario">

      </div>


      <!-- BOMBILLO DE LECTURA CENTRADO (Icono reducido) -->
      <div class="cm-reading-controls">
        <button type="button" id="cmBulbBtn" class="cm-control-icon-btn" aria-label="Cambiar modo de lectura" title="Cambiar modo de lectura">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18h6"/>
            <path d="M10 22h4"/>
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.6 2.83 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/>
          </svg>
        </button>
      </div>


      <!-- ENCABEZADO -->

      <div class="cm-secciones-heading">

        <span class="cm-secciones-heading-text">
        NUESTRAS ÁREAS
        </span>

      </div>


      <!-- CATEGORÍAS -->

      <nav class="cm-secciones-links">

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
          biblioteca
        </a>

      </nav>

    </aside>

  </header>


  <!-- =====================================================
       MODAL CENTRADO DE NEWSLETTER (BLANCO & NEGRO)
  ===================================================== -->

  <div
    class="cm-nl-backdrop"
    id="cmNewsletterModal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="cmNlTitle"
    aria-hidden="true">

    <div class="cm-nl-card">

      <button
        type="button"
        class="cm-nl-close"
        id="cmCloseNewsletter"
        aria-label="Cerrar ventana de suscripción">
        &times;
      </button>

      <span class="cm-nl-tag">CÓDIGO MILLONARIO</span>
      <h2 class="cm-nl-title" id="cmNlTitle">Suscríbete a la Newsletter</h2>
      <p class="cm-nl-desc">
        Recibe directamente en tu correo análisis sobre finanzas, mentalidad, negocios y los contenidos destacados del medio.
      </p>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        class="cm-nl-form"
        id="cmNewsletterForm">

        <!-- CONFIG WEB3FORMS -->
        <input type="hidden" name="access_key" value="5a8131dd-bd10-44c5-8731-b2a4c7fda29c">
        <input type="hidden" name="subject" value="Nuevo SUSCRIPTOR - Código Millonario">
        <input type="hidden" name="redirect" value="https://codigomillonario.blog/gracias.html">

        <!-- IDENTIFICADOR -->
        <input type="hidden" name="tipo" value="suscriptor">
        <input type="hidden" name="from_name" value="Suscriptores Web">

        <label for="cmNlEmail" class="cm-nl-label">Correo electrónico</label>
        <input
          type="email"
          id="cmNlEmail"
          name="email"
          required
          placeholder="tu@correo.com"
          class="cm-nl-input">

        <label class="cm-nl-terms">
          <input
            type="checkbox"
            id="cmNlTerms"
            name="acepta_terminos"
            value="Sí"
            required>
          <span>
            Acepto los <a href="/terminos.html">términos y condiciones</a> y la <a href="/privacidad.html">política de privacidad</a> para recibir correos de Código Millonario.
          </span>
        </label>

        <button type="submit" class="cm-nl-submit">
          Enviar
        </button>

      </form>

    </div>

  </div>

  `;


  /* =====================================================
     CSS DEL MENÚ + NEWSLETTER MODAL
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

.cm-header.cm-header-hidden {
  transform: translateY(-100%);
}

.cm-header-inner {
  max-width: 1440px;
  height: 64px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
}

/* Logo independizado a la izquierda */
.cm-logo {
  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%) translateX(-12px);
  text-decoration: none;
  color: #ffffff;
  font-family: 'Manrope', sans-serif;
  display: flex;
  align-items: center;
  width: auto;
  line-height: 1;
  white-space: nowrap;
  z-index: 2;
}

.cm-logo-title {
  font-family: "Inter", Arial, sans-serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 1;
  white-space: nowrap;
}

.cm-copyright {
  display: inline-block;
  font-size: 0.42em;
  vertical-align: super;
  margin-left: 3px;
  line-height: 0;
  font-weight: 400;
}

@media (max-width: 500px) {
  .cm-logo-title {
    font-weight: 900 !important;
  }
  .cm-copyright {
    font-size: 0.55em;
    margin-left: 2px;
  }
}
  
/* Menú central */
.cm-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
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

.cm-nav-divider {
  width: 1px;
  height: 16px;
  background: #ffffff;
  flex-shrink: 0;
}

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
  box-shadow: 0 15px 35px rgba(0,0,0,.35);
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(7px);
  transition: opacity .18s ease, transform .18s ease, visibility .18s ease;
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
  transition: background .18s ease, color .18s ease;
}

.cm-dropdown-menu a:hover {
  background: #1a1a1a;
  color: #ccc;
}

/* Controles de la derecha */
.cm-header-right {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 2;
  width: auto;
}

/* Botón Newsletter · Identidad Blanco & Negro */
.cm-newsletter-btn {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
  padding: 7px 18px;
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color .16s ease, color .16s ease, border-color .16s ease;
}

.cm-newsletter-btn:hover {
  background-color: #e6e6e6;
  border-color: #e6e6e6;
  color: #000000;
}

.cm-search {
  border: 0;
  background: transparent;
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  padding: 8px;
  line-height: 1;
  flex-shrink: 0;
}

.cm-search:hover {
  color: #ccc;
}

.cm-menu-mobile {
  display: none;
  border: 0;
  background: transparent;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  line-height: 1;
  flex-shrink: 0;
  width: 36px;
  text-align: center;
}

.cm-mobile-menu {
  display: none;
}

/* =====================================================
   MENÚ LATERAL DE CATEGORÍAS
===================================================== */

.cm-secciones-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.62);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .3s ease, visibility .3s ease;
  z-index: 1999;
}

.cm-secciones-overlay.cm-active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

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
  transform: translateX(105%);
  transition: transform .4s cubic-bezier(.4,0,.2,1);
  box-shadow: -8px 0 30px rgba(0,0,0,.55);
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

.cm-secciones-logo {
  position: absolute;
  top: 24px;
  left: 40px;
  width: 32px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.cm-secciones-logo img {
  display: block;
  width: 32px;
  height: auto;
  max-width: 32px;
  object-fit: contain;
}

/* --- BOMBILLO DE LECTURA CENTRADO --- */
.cm-reading-controls {
  margin-top: 75px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cm-control-icon-btn {
  background: transparent;
  border: none;
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  opacity: 0.7;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.cm-control-icon-btn:hover,
.cm-control-icon-btn.cm-active {
  opacity: 1;
  color: #ffffff;
}

/* TÍTULO CENTRADO (PC y móviles) */
.cm-secciones-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  padding: 0 40px 14px 40px;
  flex-shrink: 0;
  width: 100%;
}

.cm-secciones-heading-text {
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
}

.cm-secciones-links {
  display: flex;
  flex-direction: column;
  margin-top: 0;
  flex-shrink: 0;
}

.cm-secciones-links a {
  color: #ffffff;
  text-decoration: none;
  padding: 20px 20px 17px 40px;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  position: relative;
  transition: background .2s ease, padding-left .2s ease;
}

.cm-secciones-links a::after {
  content: "";
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 0;
  height: 1px;
  background: rgba(255,255,255,.14);
}

.cm-secciones-links a:hover {
  background: rgba(255,255,255,.045);
  padding-left: 44px;
}

.cm-secciones-links a:last-child::after {
  display: none !important;
}

/* =====================================================
   MODOS DE LECTURA GLOBALES
===================================================== */

/* 1. MODO CREMA */
body.theme-cream {
  background-color: #f4ecd8 !important;
  color: #2c221e !important;
}

/* 2. MODO VERDE SALVIA / PIEDRA SUAVE */
body.theme-sage {
  background-color: #eaf2ec !important;
  color: #1c2822 !important;
}

@media (max-width: 850px) {
  .cm-secciones-menu {
    width: 85%;
    max-width: 320px;
  }
}

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
    left: 20px;
    width: auto;
    max-width: calc(100% - 110px);
  }
  .cm-logo-title {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: -.055em;
  }
  .cm-header-right {
    right: 20px;
    gap: 10px;
  }
  .cm-nl-desktop {
    display: none;
  }
  .cm-nav {
    display: none;
  }
  .cm-menu-mobile {
    display: block;
  }
  .cm-mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #000000;
    border-top: 1px solid #1f1f1f;
    border-bottom: 1px solid #292929;
    padding: 66px 20px 26px;
    display: block;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(0);
    transition: opacity .20s ease, visibility .20s ease;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }
  .cm-header.cm-mobile-open .cm-mobile-menu {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
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
  .cm-mobile-section.cm-open .cm-mobile-links {
    max-height: 300px;
  }
  .cm-mobile-section.cm-open .cm-mobile-title i {
    transform: rotate(180deg);
  }

  /* Contenedor centrado al final del listado de secciones en móvil */
  .cm-mobile-newsletter-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 22px;
    width: 100%;
  }

  .cm-nl-mobile {
    width: 100%;
    max-width: 240px;
    padding: 11px 24px;
    font-size: 14px;
    text-align: center;
  }
}

/* =====================================================
   MODAL CENTRADO DE NEWSLETTER · CUADRO BLANCO / LIGERO
===================================================== */

.cm-nl-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 3000;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .14s ease, visibility .14s ease;
}

.cm-nl-backdrop.cm-active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.cm-nl-card {
  position: relative;
  width: 100%;
  max-width: 430px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 0;
  padding: 32px 28px 28px;
  color: #0a0a0a;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
}

.cm-nl-close {
  position: absolute;
  top: 14px;
  right: 16px;
  width: 34px;
  height: 34px;
  background: transparent;
  border: none;
  color: #4a4a4a;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  border-radius: 8px;
  transition: color .2s ease, background .2s ease;
}

.cm-nl-close:hover {
  color: #000000;
  background: rgba(0, 0, 0, 0.06);
}

.cm-nl-tag {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #000000;
  margin-bottom: 8px;
}

.cm-nl-title {
  margin: 0 0 10px;
  font-family: 'Inter', 'Open Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.25;
  color: #000000;
}

.cm-nl-desc {
  margin: 0 0 20px;
  font-size: 13.5px;
  line-height: 1.55;
  color: #3a3a3a;
}

.cm-nl-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cm-nl-label {
  font-size: 12.5px;
  font-weight: 700;
  color: #000000;
  margin-bottom: -8px;
}

.cm-nl-input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  background: #f6f6f6;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  outline: none;
  transition: border-color .2s ease, background .2s ease;
}

.cm-nl-input::placeholder {
  color: #777777;
}

.cm-nl-input:focus {
  border-color: #000000;
  background: #ffffff;
}

.cm-nl-terms {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 12px;
  line-height: 1.45;
  color: #2b2b2b;
  cursor: pointer;
}

.cm-nl-terms input[type="checkbox"] {
  margin-top: 2px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  accent-color: #000000;
  cursor: pointer;
}

.cm-nl-terms a {
  color: #000000;
  font-weight: 600;
  text-decoration: underline;
}

.cm-nl-terms a:hover {
  color: #444444;
}

.cm-nl-submit {
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 12px 18px;
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color .2s ease;
}

.cm-nl-submit:hover {
  background-color: #222222;
}

@media (prefers-reduced-motion: reduce) {
  .cm-header,
  .cm-mobile-menu,
  .cm-mobile-links,
  .cm-mobile-title i,
  .cm-secciones-menu,
  .cm-secciones-overlay,
  .cm-nl-backdrop,
  .cm-nl-card {
    transition: none;
  }
}

`;


  /* =====================================================
     INSERTAR ESTILOS E HTML
  ===================================================== */

  function insertStyles() {
    if (document.getElementById('cm-menu-styles')) return;
    const style = document.createElement('style');
    style.id = 'cm-menu-styles';
    style.textContent = menuCSS;
    document.head.appendChild(style);
  }

  function insertMenu() {
    if (document.querySelector('.cm-header')) return;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
  }


  /* =====================================================
     LÓGICA DEL SCROLL Y BLOQUEO ANTI-SALTO
  ===================================================== */

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function lockScroll() {
    const scrollbarWidth = getScrollbarWidth();
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = scrollbarWidth + 'px';
      const header = document.querySelector('.cm-header');
      if (header) {
        header.style.paddingRight = scrollbarWidth + 'px';
      }
    }
    document.body.style.overflow = 'hidden';
  }

  function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    const header = document.querySelector('.cm-header');
    if (header) {
      header.style.paddingRight = '';
    }
  }


  /* =====================================================
     MENÚ LATERAL · CATEGORÍAS (LUPA + BOMBILLO CÍCLICO)
  ===================================================== */

  function initializeCategoriesMenu() {
    const header = document.querySelector('.cm-header');
    if (!header) return;

    const searchButton = header.querySelector('.cm-search');
    const sideMenu = document.getElementById('cmSideMenu');
    const overlay = document.getElementById('cmMenuOverlay');
    const closeButton = document.getElementById('cmCloseMenu');

    if (!searchButton || !sideMenu || !overlay || !closeButton) return;

    // Recuperar preferencia de tema al cargar
    const bulbBtn = document.getElementById('cmBulbBtn');
    const savedTheme = localStorage.getItem('cm_reader_theme');

    if (savedTheme === 'cream') {
      document.body.classList.add('theme-cream');
      if (bulbBtn) bulbBtn.classList.add('cm-active');
    } else if (savedTheme === 'sage') {
      document.body.classList.add('theme-sage');
      if (bulbBtn) bulbBtn.classList.add('cm-active');
    }

    // Lógica Cíclica del Bombillo (Normal ➔ Crema ➔ Verde Salvia ➔ Normal)
    if (bulbBtn) {
      bulbBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        if (!document.body.classList.contains('theme-cream') && !document.body.classList.contains('theme-sage')) {
          // Estado 1: Pasar a Crema
          document.body.classList.add('theme-cream');
          bulbBtn.classList.add('cm-active');
          localStorage.setItem('cm_reader_theme', 'cream');
        } else if (document.body.classList.contains('theme-cream')) {
          // Estado 2: Pasar a Verde Salvia
          document.body.classList.remove('theme-cream');
          document.body.classList.add('theme-sage');
          bulbBtn.classList.add('cm-active');
          localStorage.setItem('cm_reader_theme', 'sage');
        } else {
          // Estado 3: Regresar a Blanco Natural / Original
          document.body.classList.remove('theme-cream', 'theme-sage');
          bulbBtn.classList.remove('cm-active');
          localStorage.removeItem('cm_reader_theme');
        }
      });
    }

    function closeCategoriesMenu() {
      sideMenu.classList.remove('cm-active');
      overlay.classList.remove('cm-active');
      sideMenu.setAttribute('aria-hidden', 'true');
      searchButton.setAttribute('aria-expanded', 'false');
      unlockScroll();
    }

    function openCategoriesMenu() {
      closeMobileMenuIfOpen();
      lockScroll();
      sideMenu.classList.add('cm-active');
      overlay.classList.add('cm-active');
      sideMenu.setAttribute('aria-hidden', 'false');
      searchButton.setAttribute('aria-expanded', 'true');
    }

    searchButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = sideMenu.classList.contains('cm-active');
      if (isOpen) {
        closeCategoriesMenu();
      } else {
        openCategoriesMenu();
      }
    });

    closeButton.addEventListener('click', function () {
      closeCategoriesMenu();
    });

    overlay.addEventListener('click', function () {
      closeCategoriesMenu();
    });

    sideMenu.querySelectorAll('.cm-secciones-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeCategoriesMenu();
      });
    });

    window.openCategoriasMenu = openCategoriesMenu;
    window.closeCategoriasMenu = closeCategoriesMenu;

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeCategoriesMenu();
      }
    });

    function closeMobileMenuIfOpen() {
      const mobileMenuButton = header.querySelector('.cm-menu-mobile');
      if (header.classList.contains('cm-mobile-open')) {
        header.classList.remove('cm-mobile-open');
        if (mobileMenuButton) {
          mobileMenuButton.setAttribute('aria-expanded', 'false');
          mobileMenuButton.setAttribute('aria-label', 'Abrir menú');
          const icon = mobileMenuButton.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
        header.querySelectorAll('.cm-mobile-section').forEach(function (section) {
          section.classList.remove('cm-open');
        });
      }
    }
  }


  /* =====================================================
     MODAL DE NEWSLETTER
  ===================================================== */

  function initializeNewsletterModal() {
    const modal = document.getElementById('cmNewsletterModal');
    const closeBtn = document.getElementById('cmCloseNewsletter');
    const emailInput = document.getElementById('cmNlEmail');
    const triggers = document.querySelectorAll('.cm-newsletter-btn');

    if (!modal || !triggers.length) return;

    function openNewsletterModal() {
      if (typeof window.closeCategoriasMenu === 'function') {
        window.closeCategoriasMenu();
      }
      const header = document.querySelector('.cm-header');
      if (header && header.classList.contains('cm-mobile-open')) {
        header.classList.remove('cm-mobile-open');
        const mobileBtn = header.querySelector('.cm-menu-mobile');
        if (mobileBtn) {
          mobileBtn.setAttribute('aria-expanded', 'false');
          mobileBtn.setAttribute('aria-label', 'Abrir menú');
          const icon = mobileBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      }

      lockScroll();
      modal.classList.add('cm-active');
      modal.setAttribute('aria-hidden', 'false');

      if (emailInput) {
        emailInput.focus({ preventScroll: true });
      }
    }

    function closeNewsletterModal() {
      modal.classList.remove('cm-active');
      modal.setAttribute('aria-hidden', 'true');
      unlockScroll();
    }

    triggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openNewsletterModal();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeNewsletterModal);
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeNewsletterModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('cm-active')) {
        closeNewsletterModal();
      }
    });
  }


  /* =====================================================
     FUNCIONES MENÚ MOBILE (HAMBURGUESA)
  ===================================================== */

  function initializeMenu() {
    const header = document.querySelector('.cm-header');
    if (!header) return;

    const mobileButton = header.querySelector('.cm-menu-mobile');
    const mobileMenu = header.querySelector('.cm-mobile-menu');
    const mobileIcon = mobileButton ? mobileButton.querySelector('i') : null;
    const mobileSections = header.querySelectorAll('.cm-mobile-section');

    if (!mobileButton || !mobileMenu) return;

    function closeMobileMenu() {
      header.classList.remove('cm-mobile-open');
      mobileButton.setAttribute('aria-expanded', 'false');
      mobileButton.setAttribute('aria-label', 'Abrir menú');
      if (mobileIcon) {
        mobileIcon.classList.remove('fa-xmark');
        mobileIcon.classList.add('fa-bars');
      }
      mobileSections.forEach(function (section) {
        section.classList.remove('cm-open');
      });
    }

    mobileButton.addEventListener('click', function () {
      const isOpen = header.classList.contains('cm-mobile-open');
      if (isOpen) {
        closeMobileMenu();
        return;
      }
      if (typeof window.closeCategoriasMenu === 'function') {
        window.closeCategoriasMenu();
      }
      header.classList.add('cm-mobile-open');
      mobileButton.setAttribute('aria-expanded', 'true');
      mobileButton.setAttribute('aria-label', 'Cerrar menú');
      if (mobileIcon) {
        mobileIcon.classList.remove('fa-bars');
        mobileIcon.classList.add('fa-xmark');
      }
    });

    mobileSections.forEach(function (section) {
      const title = section.querySelector('.cm-mobile-title');
      if (!title) return;
      title.addEventListener('click', function () {
        const isOpen = section.classList.contains('cm-open');
        mobileSections.forEach(function (otherSection) {
          if (otherSection !== section) {
            otherSection.classList.remove('cm-open');
          }
        });
        section.classList.toggle('cm-open', !isOpen);
      });
    });

    header.querySelectorAll('.cm-mobile-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    });

    /* ===================================================
       HEADER · SCROLL HIDING
    =================================================== */
    let headerVisible = true;
    let lastStableScrollY = window.scrollY;
    const scrollThreshold = 18;
    let ticking = false;

    function updateHeader() {
      const currentScrollY = window.scrollY;
      const distance = currentScrollY - lastStableScrollY;

      if (header.classList.contains('cm-mobile-open')) {
        closeMobileMenu();
      }

      if (currentScrollY <= 10) {
        if (!headerVisible) {
          header.classList.remove('cm-header-hidden');
          headerVisible = true;
        }
        lastStableScrollY = currentScrollY;
        ticking = false;
        return;
      }

      if (distance >= scrollThreshold) {
        if (headerVisible) {
          header.classList.add('cm-header-hidden');
          headerVisible = false;
        }
        lastStableScrollY = currentScrollY;
      } else if (distance <= -scrollThreshold) {
        if (!headerVisible) {
          header.classList.remove('cm-header-hidden');
          headerVisible = true;
        }
        lastStableScrollY = currentScrollY;
      }

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
  }


  /* =====================================================
     EJECUCIÓN INICIAL
  ===================================================== */
  function init() {
    insertStyles();
    insertMenu();
    initializeCategoriesMenu();
    initializeNewsletterModal();
    initializeMenu();
  }

  init();

})();