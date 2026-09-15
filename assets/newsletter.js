/* =========================================================
   CÓDIGO MILLONARIO — NEWSLETTER
   Validación del formulario
========================================================= */

const newsletterForm =
  document.getElementById('newsletterForm');

if (newsletterForm) {

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

      newsletterEmailError.classList.remove('hidden');

      newsletterEmail.classList.add(
        'border-red-500'
      );

      return false;
    }

    newsletterEmailError.classList.add('hidden');

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

    newsletterTermsError.classList.add('hidden');

    return true;
  }


  /* =======================================================
     VALIDACIÓN AL ESCRIBIR EL CORREO
  ======================================================= */

  newsletterEmail.addEventListener(
    'input',
    function () {

      if (newsletterEmail.value.trim() !== '') {

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
     VALIDACIÓN DE LA CASILLA
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

      if (!validEmail || !validTerms) {

        event.preventDefault();
      }
    }
  );

}