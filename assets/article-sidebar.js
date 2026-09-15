/* =========================================================
   CÓDIGO MILLONARIO — COLUMNA EDITORIAL
   Componente reutilizable
========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* =======================================================
     CONFIGURACIÓN
     Cambia aquí el contenido cuando quieras
  ======================================================= */

  const SIDEBAR_CONFIG = {

    guideTitle:
      'Aprende a organizar mejor tu dinero',

    guideText:
      'Descubre estrategias sencillas para organizar tus ingresos, controlar tus gastos y avanzar hacia tus objetivos financieros.',

    guideLink:
      '#',

    guideLinkText:
      'Descargar guía',

    perspectiveLabel:
      'Perspectiva',

    quote:
      'El dinero no cambia tu vida por sí solo; las decisiones que tomas con él sí.',

    quoteAuthor:
      'Medio Financiero'

  };


  /* =======================================================
     BUSCAR EL ARTÍCULO
  ======================================================= */

  const article =
    document.querySelector('main article');

  if (!article) {
    return;
  }


  /* =======================================================
     CREAR COLUMNA IZQUIERDA
  ======================================================= */

  const sidebar =
    document.createElement('aside');

  sidebar.className =
    'hidden lg:block lg:sticky lg:top-40';


  /* =======================================================
     CONTENIDO
  ======================================================= */

  sidebar.innerHTML = `

    <div class="pt-2">

      <!-- ETIQUETA -->

      <p class="inline-block text-stone-500 text-[9px] font-semibold tracking-[0.2em] px-0 py-0 mb-6 uppercase">

        <span class="inline-block w-1.5 h-1.5 bg-stone-950 rounded-full mr-2 align-middle"></span>

        Guía gratuita

      </p>


      <!-- TÍTULO -->

      <h2 class="text-[20px] font-semibold text-stone-950 leading-[1.18] tracking-[-0.025em] mb-4">

        ${SIDEBAR_CONFIG.guideTitle}

      </h2>


      <!-- TEXTO -->

      <p
        class="text-stone-600 leading-[1.65] mb-5 text-[13px]"
        style="font-family: 'Open Sans', sans-serif;"
      >

        ${SIDEBAR_CONFIG.guideText}

      </p>


      <!-- ENLACE -->

      <a
        href="${SIDEBAR_CONFIG.guideLink}"
        class="group inline-flex items-center gap-2 text-[12px] font-semibold text-stone-950"
      >

        <span class="border-b border-stone-950 pb-1 group-hover:border-stone-400 transition-colors duration-200">

          ${SIDEBAR_CONFIG.guideLinkText}

        </span>

        <span
          aria-hidden="true"
          class="text-stone-400 transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>

      </a>


      <!-- ===============================================
           FRASE EDITORIAL
      ================================================ -->

      <div class="mt-12 pt-5 border-t border-stone-200">


        <!-- MICROETIQUETA -->

        <p class="m-0 mb-4 text-[8px] font-semibold tracking-[0.2em] uppercase text-stone-400">

          ${SIDEBAR_CONFIG.perspectiveLabel}

        </p>


        <!-- FRASE -->

        <blockquote class="m-0">

          <p
            class="text-[15px] leading-[1.5] tracking-[-0.015em] text-stone-800"
            style="font-family: 'Open Sans', sans-serif;"
          >

            ${SIDEBAR_CONFIG.quote}

          </p>


          <!-- AUTOR -->

          <footer class="mt-5 flex items-center gap-2 text-[9px] font-semibold tracking-[0.16em] uppercase text-stone-400">

            <span class="w-4 h-px bg-stone-300"></span>

            ${SIDEBAR_CONFIG.quoteAuthor}

          </footer>

        </blockquote>

      </div>

    </div>

  `;


  /* =======================================================
     INSERTAR ANTES DEL ARTÍCULO
  ======================================================= */

  article.parentNode.insertBefore(
    sidebar,
    article
  );

});