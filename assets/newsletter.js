/* =========================================================
   CÓDIGO MILLONARIO — NEWSLETTER
   Configuración centralizada
========================================================= */

const NEWSLETTER_CONFIG = {
  endpoint: 'https://api.web3forms.com/submit',

  accessKey: '5a8131dd-bd10-44c5-8731-b2a4c7fda29c',

  subject: 'Nueva suscripción al boletín de Código Millonario',

  fromName: 'Código Millonario',

  redirect: 'https://codigomillonario.blog/gracias.html'
};


/* =========================================================
   BUSCAR FORMULARIO
========================================================= */

const newsletterForm = document.getElementById('newsletterForm');


/*
   Si esta página no tiene newsletter,
   el archivo JS no hace absolutamente nada.
*/

if (newsletterForm) {

  /* =======================================================
     CONFIGURAR WEB3FORMS
  ======================================================= */

  newsletterForm.action = NEWSLETTER_CONFIG.endpoint;

  function addHiddenField(name, value) {

    let field = newsletterForm.querySelector(
      `input[name="${name}"]`
    );

    if (!field) {

      field = document.createElement('input');

      field.type = 'hidden';
      field.name = name;

      newsletterForm.appendChild(field);
    }

    field.value = value;
  }

  addHiddenField(
    'access_key',
    NEWSLETTER_CONFIG.accessKey
  );

  addHiddenField(
    'subject',
    NEWSLETTER_CONFIG.subject
  );

  addHiddenField(
    'from_name',
    NEWSLETTER_CONFIG.fromName
  );

  addHiddenField(
    'redirect',
    NEWSLETTER_CONFIG.redirect
  );


  /* =======================================================
     ELEMENTOS
  ======================================================= */

  const newsletterEmail =
    document.getElementById('newsletterEmail');

  const newsletterTerms =
    document.getElementById('newsletterTerms');

  const newsletterEmailError =
    document.getElementById('newsletterEmailError');

  const newsletterTermsError =
    document.getElementById('newsletterTermsError');


  /*
     Protección adicional:
     si falta alguno de los elementos esenciales,
     no ejecutamos la validación.
  */

  if (
    !newsletterEmail ||
    !newsletterTerms ||
    !newsletterEmailError ||
    !newsletterTermsError
  ) {
    return;
  }


  /* =======================================================
     VALIDAR CORREO
  ======================================================= */

  function validateNewsletterEmail() {

    const email = newsletterEmail.value.trim();

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
     VALIDACIÓN AL ESCRIBIR
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