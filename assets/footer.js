(function () {

  function createFooter() {
    const div = document.createElement("div");

    div.innerHTML = `
      <!-- TODO TU FOOTER EXACTO -->
      <!-- SIN <script> -->

<!-- ===================== FOOTER PROFESIONAL DEFINITIVO ===================== -->
<footer style="font-family: Arial, sans-serif; font-size: 11px; font-weight: 400; color: #555; background-color: #333; padding-top: 
3rem; padding-bottom: 1.5rem; padding-left: 1.5rem; padding-right: 1.5rem; margin-top: 5rem;">

  <!-- CONTENEDOR PRINCIPAL -->
  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

    <!-- COLUMNA 1: NEWSLETTER -->
<div>
<h3 class="font-semibold mb-3 tracking-wide navbar-logo-footer">
  Código Millonario
</h3>

<p class="text-white text-[12px] mb-4 leading-relaxed">
  Recibe consejos exclusivos sobre dinero, ahorro e inversión directamente en tu correo cada semana.
</p>

<form action="https://api.web3forms.com/submit" method="POST"
      class="flex rounded overflow-hidden border border-gray-600">
  
      <!-- 🔐 WEB3FORMS CONFIG -->
  <input type="hidden" name="access_key" value="5a8131dd-bd10-44c5-8731-b2a4c7fda29c">
  <input type="hidden" name="subject" value="Nueva suscripción desde Código Millonario">
  <input type="hidden" name="redirect" value="https://codigomillonario.blog/gracias.html">
  
  <!-- 📧 EMAIL -->
  <input type="email" name="email" required
    placeholder="Tu correo electrónico"
    class="w-full px-3 py-2 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none text-sm">
  
    <!-- 🚀 BOTÓN -->
<button type="submit"
class="bg-gray-600 hover:bg-gray-700 px-2.5 py-1 flex items-center justify-center transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white mr-1" fill="none"
      viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 12h14m0 0l-6-6m6 6l-6 6"/>
    </svg>
    <span class="text-white text-sm font-medium">Enviar</span>
  </button>
</form>

<p class="text-white text-[12px] mt-2 italic">
  Podrás cancelar tu suscripción en cualquier momento.
</p>
</div>

<div>
  <h3 class="font-semibold mb-3 tracking-wide navbar-logo-footer text-center">Información Legal</h3>
  <ul class="space-y-2 text-[12px] text-center">
    <li>
      <a href="/informacion-legal#sobre-el-blog" class="text-white hover:text-gray-100 transition-colors font-medium">
        Sobre el Blog
      </a>
    </li>
    <li>
      <a href="/informacion-legal#politica-privacidad" class="text-white hover:text-gray-100 transition-colors font-medium">
        Política de Privacidad
      </a>
    </li>
    <li>
      <a href="/informacion-legal#terminos-condiciones" class="text-white hover:text-gray-100 transition-colors font-medium">
        Términos y Condiciones
      </a>
    </li>
    <li>
      <a href="/informacion-legal#aviso-legal" class="text-white hover:text-gray-100 transition-colors font-medium">
        Aviso Legal
      </a>
    </li>
  </ul>
</div>

<!-- COLUMNA 3 -->
<div>
  <h3 class="font-semibold mb-3 tracking-wide navbar-logo-footer text-center">Recursos</h3>
  <ul class="space-y-2 text-[12px] text-center">
    <li><a href="/educacionfinanciera.html" class="text-white hover:text-gray-100 transition-colors font-medium">Artículos</a></li>
    <li><a href="/herramientas.html" class="text-white hover:text-gray-100 transition-colors font-medium">Calculadoras</a></li>
    <li><a href="/opiniones.html" class="text-white hover:text-gray-100 transition-colors font-medium">Historias</a></li>
    <li><a href="/blog/negocios/index.html" class="text-white hover:text-gray-100 transition-colors font-medium">Emprendimiento</a></li>
    <li><a href="/blog/inversiones/index.html" class="text-white hover:text-gray-100 transition-colors font-medium">Guías de inversión</a></li>
  </ul>
</div>

<div>
<h3 class="font-semibold mb-3 tracking-wide navbar-logo-footer">Contacto</h3>
<p class="text-white text-[12px]">Colombia — Online</p>
<p class="text-white text-[12px]">codigomillonarioblog@gmail.com</p>
  </div>
</div>

<!-- BARRA INFERIOR -->
<div class="border-t border-white text-[12px] mt-10 mb-7 flex flex-col justify-between items-center gap-2 text-center">
  <div class="flex flex-col items-center text-center">

<div class="overflow-x-auto">
  <p class="text-white text-[10px] sm:text-[12px] font-medium whitespace-nowrap text-center">
    © 2025 Código Millonario — Todos Los Derechos Reservados
  </p>
</div>

  </div>
</div>

<p class="text-white text-[12px] font-medium text-center mb-4">
  Compartir
</p>

<div class="flex justify-center gap-4">

<!-- Facebook (OFICIAL) -->
<a href="https://www.facebook.com/sharer/sharer.php?u=https://codigomillonario.blog/educacionfinanciera" target="_blank"
  class="text-white hover:text-gray-100 transition-colors">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
</a>

<!-- WhatsApp (OFICIAL) -->
<a href="https://api.whatsapp.com/send?text=Visita%20https://codigomillonario.blog/educacionfinanciera" target="_blank"
  class="text-white hover:text-gray-100 transition-colors">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.17 1.6 6L0 24l6.18-1.62a11.94 11.94 0 0 0 5.83 1.49h.01c6.62 0 11.99-5.37 11.99-11.99a11.9 11.9 0 0 0-3.49-8.4zM12.01 21.8a9.8 9.8 0 0 1-5-1.38l-.36-.21-3.67.96.98-3.58-.23-.37a9.79 9.79 0 1 1 8.28 4.58zm5.36-7.34c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.9 1.12-.16.19-.33.21-.62.07a8.04 8.04 0 0 1-2.37-1.46 8.9 8.9 0 0 1-1.64-2.04c-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36s-1 1-1 2.43 1.02 2.8 1.17 3c.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.63.59.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
  </svg>
</a>

<!-- X / Twitter (OFICIAL) -->
<a href="https://twitter.com/intent/tweet?url=https://codigomillonario.blog/educacionfinanciera" target="_blank"
  class="text-white hover:text-gray-100 transition-colors">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26L22.75 21.75h-6.63l-5.19-6.8-5.95 6.8H1.672l7.73-8.84L1.25 2.25h6.797l4.694 6.145L18.244 2.25z"/>
  </svg>
</a>

<!-- LinkedIn (OFICIAL) -->
<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://codigomillonario.blog/educacionfinanciera" target="_blank"
  class="text-white hover:text-gray-100 transition-colors">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
  </svg>
</a>

    </div>
  </div>
</footer>

<!-- ===================== ESTILOS MODAL ===================== -->
<style>
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.3s ease-out;
}
.modal-enter-active {
  opacity: 1;
  transform: scale(1);
}
</style>


      <style>
        .modal-enter {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.3s ease-out;
        }
        .modal-enter-active {
          opacity: 1;
          transform: scale(1);
        }
      </style>
    `;

    return div;
  }

  function initFooterScripts() {

    const openModal = modal => {
      modal.classList.remove("hidden");
      modal.classList.add("grid");
      modal.querySelector(".modal-enter")?.classList.add("modal-enter-active");
      document.body.style.overflow = "hidden";
    };

    const closeModal = modal => {
      modal.classList.add("hidden");
      modal.classList.remove("grid");
      modal.querySelector(".modal-enter")?.classList.remove("modal-enter-active");
      document.body.style.overflow = "";
    };

    document.querySelectorAll("[data-modal]").forEach(el => {
      el.addEventListener("click", () => {
        const modal = document.getElementById(el.dataset.modal);
        if (modal) openModal(modal);
      });
    });

    document.querySelectorAll(".modal-close").forEach(btn => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".fixed");
        if (modal) closeModal(modal);
      });
    });

    document.querySelectorAll(".fixed").forEach(modal => {
      modal.addEventListener("click", e => {
        if (e.target === modal) closeModal(modal);
      });
    });

  }

  document.addEventListener("DOMContentLoaded", function () {

    // 1. Inserta el footer
    document.querySelectorAll(".footer-here").forEach(el => {
      el.appendChild(createFooter());
    });

    // 2. Ejecuta el JS DESPUÉS
    initFooterScripts();

  });

})();



