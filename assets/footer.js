(function () {

  function createFooter() {
    const div = document.createElement("div");

    div.innerHTML = `

<!-- ===================== FOOTER PROFESIONAL DEFINITIVO ===================== -->
<footer style="font-family: Arial, sans-serif; font-size: 11px; font-weight: 400; color: #555; background-color: #333; padding-top: 3rem; padding-bottom: 1.5rem; padding-left: 1.5rem; padding-right: 1.5rem; margin-top: 5rem;">

  <!-- CONTENEDOR PRINCIPAL -->
  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

    <!-- COLUMNA 1 -->
<div>
<h3 class="font-semibold mb-3 tracking-wide navbar-logo-footer">
  Código Millonario
</h3>

<p class="text-white text-[12px] mb-4 leading-relaxed">
  Recibe consejos exclusivos sobre dinero, ahorro e inversión directamente en tu correo cada semana.
</p>

<form action="https://api.web3forms.com/submit" method="POST"
      class="flex rounded overflow-hidden border border-gray-600">
  
  <input type="hidden" name="access_key" value="5a8131dd-bd10-44c5-8731-b2a4c7fda29c">
  <input type="hidden" name="subject" value="Nueva suscripción desde Código Millonario">
  <input type="hidden" name="redirect" value="https://codigomillonario.blog/gracias.html">
  
  <input type="email" name="email" required
    placeholder="Tu correo electrónico"
    class="w-full px-3 py-2 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none text-sm">
  
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

<!-- COLUMNA 2 -->
<div>
  <h3 class="font-semibold mb-3 tracking-wide navbar-logo-footer text-center">Información Legal</h3>
  <ul class="space-y-2 text-[12px] text-center">
    <li><a href="/informacion-legal#sobre-el-blog" class="text-white hover:text-gray-100 transition-colors font-medium">Sobre el Blog</a></li>
    <li><a href="/informacion-legal#politica-privacidad" class="text-white hover:text-gray-100 transition-colors font-medium">Política de Privacidad</a></li>
    <li><a href="/informacion-legal#terminos-condiciones" class="text-white hover:text-gray-100 transition-colors font-medium">Términos y Condiciones</a></li>
    <li><a href="/informacion-legal#aviso-legal" class="text-white hover:text-gray-100 transition-colors font-medium">Aviso Legal</a></li>
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

<!-- COLUMNA 4 -->
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
        © ${new Date().getFullYear()} Código Millonario — Todos Los Derechos Reservados
      </p>
    </div>
  </div>
</div>

<p class="text-white text-[12px] font-medium text-center mb-4">
  Compartir
</p>

<div class="flex justify-center gap-4">

<!-- Facebook -->
<a href="https://www.facebook.com/sharer/sharer.php?u=https://codigomillonario.blog/educacionfinanciera" target="_blank" class="text-white hover:text-gray-100 transition-colors">
<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
</svg>
</a>

<!-- WhatsApp -->
<a href="https://api.whatsapp.com/send?text=Visita%20https://codigomillonario.blog/educacionfinanciera" target="_blank" class="text-white hover:text-gray-100 transition-colors">
<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
<path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.17 1.6 6L0 24l6.18-1.62a11.94 11.94 0 0 0 5.83 1.49h.01c6.62 0 11.99-5.37 11.99-11.99a11.9 11.9 0 0 0-3.49-8.4z"/>
</svg>
</a>

<!-- X -->
<a href="https://twitter.com/intent/tweet?url=https://codigomillonario.blog/educacionfinanciera" target="_blank" class="text-white hover:text-gray-100 transition-colors">
<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
<path d="M18.244 2.25h3.308l-7.227 8.26L22.75 21.75h-6.63l-5.19-6.8-5.95 6.8H1.672l7.73-8.84L1.25 2.25h6.797l4.694 6.145L18.244 2.25z"/>
</svg>
</a>

<!-- LinkedIn -->
<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://codigomillonario.blog/educacionfinanciera" target="_blank" class="text-white hover:text-gray-100 transition-colors">
<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
</svg>
</a>

</div>

</footer>

<style>
.modal-enter { opacity:0; transform:scale(0.95); transition:all .3s ease-out;}
.modal-enter-active { opacity:1; transform:scale(1);}
</style>

    `;

    return div;
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".footer-here").forEach(el => {
      el.appendChild(createFooter());
    });
  });

})();