/* =========================================================
   CÓDIGO MILLONARIO — NEWSLETTER
   Componente reutilizable
========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* =======================================================
     BUSCAR EL ARTÍCULO
  ======================================================= */

  const article = document.querySelector('main article');

  if (!article) {
    return;
  }


  /* =======================================================
     CREAR COLUMNA DERECHA
  ======================================================= */

  const newsletterAside = document.createElement('aside');

  newsletterAside.className = 'hidden lg:block';


  /* =======================================================
     CONTENIDO DEL NEWSLETTER
  ======================================================= */

  newsletterAside.innerHTML = `

    <div class="pt-2">

      <!-- TÍTULO -->
      <h2 class="text-[20px] font-semibold text-stone-950 leading-[1.18] tracking-[-0.025em] mb-4">
        Mantente al día con las últimas novedades de Código Millonario
      </h2>


      <!-- TEXTO -->
      <p
        class="text-stone-600 leading-[1.65] mb-5 text-[13px]"
        style="font-family: 'Open Sans', sans-serif;"
      >
        Recibe consejos, ideas y recursos sobre dinero, ahorro,
        inversión y negocios directamente en tu correo.
      </p>


      <!-- FORMULARIO WEB3FORMS -->

      <form
        id="newsletterForm"
        action="https://api.web3forms.com/submit"
        method="POST"
        class="relative w-full"
        novalidate
      >

        <!-- WEB3FORMS -->

        <input
          type="hidden"
          name="access_key"
          value="5a8131dd-bd10-44c5-8731-b2a4c7fda29c"
        >

        <input
          type="hidden"
          name="subject"
          value="Nueva suscripción al boletín de Código Millonario"
        >

        <input
          type="hidden"
          name="from_name"
          value="Código Millonario"
        >

        <input
          type="hidden"
          name="redirect"
          value="https://codigomillonario.blog/gracias.html"
        >


        <!-- CAMPO DE CORREO -->

        <div class="relative">

          <input
            id="newsletterEmail"
            type="email"
            name="email"
            placeholder="Ingresa tu correo"
            aria-label="Correo electrónico"
            autocomplete="email"
            inputmode="email"
            maxlength="254"
            pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"
            required
            class="w-full h-11 border border-stone-300 rounded-full pl-4 pr-12 text-[13px] text-stone-800 placeholder-stone-400 bg-white focus:outline-none focus:border-stone-500 transition-colors duration-200"
          >


          <!-- BOTÓN CIRCULAR -->

          <button
            type="submit"
            aria-label="Suscribirme"
            class="absolute right-1 top-1 w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-stone-800 transition-colors duration-200"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >

              <path d="M5 12h14"></path>
              <path d="m13 6 6 6-6 6"></path>

            </svg>

          </button>

        </div>


        <!-- ERROR DE CORREO -->

        <p
          id="newsletterEmailError"
          class="hidden text-[10px] text-red-600 leading-[1.5] mt-2 px-2"
        >
          Ingresa un correo electrónico válido.
        </p>


        <!-- TÉRMINOS Y CONDICIONES -->

        <label class="flex items-start gap-2 mt-4 cursor-pointer">

          <input
            id="newsletterTerms"
            type="checkbox"
            name="terms_accepted"
            value="Sí"
            required
            class="mt-[2px] w-3.5 h-3.5 shrink-0 accent-black cursor-pointer"
          >

          <span class="text-[10px] text-stone-400 leading-[1.5]">

            Acepto recibir comunicaciones de Código Millonario y los

            <a
              href="/informacion-legal.html#registro-newsletter"
              class="text-stone-600 hover:text-black underline underline-offset-2 transition-colors"
            >
              términos y condiciones
            </a>.

          </span>

        </label>


        <!-- ERROR DE TÉRMINOS -->

        <p
          id="newsletterTermsError"
          class="hidden text-[10px] text-red-600 leading-[1.5] mt-2 px-2"
        >
          Debes aceptar los términos y condiciones para suscribirte.
        </p>


        <!-- TEXTO INFERIOR -->

        <p class="text-[10px] text-stone-400 leading-[1.5] mt-4">

          Al introducir tu dirección de correo electrónico, aceptas
          recibir comunicaciones de Código Millonario.

        </p>

      </form>

    </div>
  `;


  /* =======================================================
     INSERTAR DESPUÉS DEL ARTÍCULO
  ======================================================= */

  article.insertAdjacentElement(
    'afterend',
    newsletterAside
  );


  /* =======================================================
     ELEMENTOS DEL FORMULARIO
  ======================================================= */

  const newsletterForm =
    document.getElementById('newsletterForm');

  const newsletterEmail =
    document.getElementById('newsletterEmail');

  const newsletterTerms =
    document.getElementById('newsletterTerms');

  const newsletterEmailError =
    document.getElementById('newsletterEmailError');

  const newsletterTermsError =
    document.getElementById('newsletterTermsError');


  /* =======================================================
     VALIDAR CORREO
  ======================================================= */

  function validateNewsletterEmail() {

    const email =
      newsletterEmail.value.trim();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const valid =
      email.length >= 6 &&
      email.length <= 254 &&
      emailRegex.test(email);

    if (!valid) {

      newsletterEmailError.classList.remove(
        'hidden'
      );

      newsletterEmail.classList.add(
        'border-red-500'
      );

      return false;
    }

    newsletterEmailError.classList.add(
      'hidden'
    );

    newsletterEmail.classList.remove(
      'border-red-500'
    );

    return true;
  }


  /* =======================================================
     VALIDAR TÉRMINOS
  ======================================================= */

  function validateNewsletterTerms() {

    if (!newsletterTerms.checked) {

      newsletterTermsError.classList.remove(
        'hidden'
      );

      return false;
    }

    newsletterTermsError.classList.add(
      'hidden'
    );

    return true;
  }


  /* =======================================================
     VALIDACIÓN AL ESCRIBIR
  ======================================================= */

  newsletterEmail.addEventListener(
    'input',
    function () {

      if (
        newsletterEmail.value.trim() !== ''
      ) {

        validateNewsletterEmail();

      } else {

        newsletterEmailError.classList.add(
          'hidden'
        );

        newsletterEmail.classList.remove(
          'border-red-500'
        );
      }
    }
  );


  /* =======================================================
     VALIDACIÓN DE TÉRMINOS
  ======================================================= */

  newsletterTerms.addEventListener(
    'change',
    function () {

      validateNewsletterTerms();
    }
  );


  /* =======================================================
     VALIDACIÓN ANTES DE ENVIAR
  ======================================================= */

  newsletterForm.addEventListener(
    'submit',
    function (event) {

      const validEmail =
        validateNewsletterEmail();

      const validTerms =
        validateNewsletterTerms();

      if (
        !validEmail ||
        !validTerms
      ) {

        event.preventDefault();
      }
    }
  );

});