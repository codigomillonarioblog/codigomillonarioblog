(function () {

  function createFooter() {
    const div = document.createElement("div");

    div.innerHTML = `

<!-- ===================== FOOTER PROFESIONAL DEFINITIVO ===================== -->
<footer style="font-family: Arial, sans-serif; font-size: 11px; font-weight: 400; color: #555; background-color: #333; padding-top: 3rem; padding-bottom: 1.5rem; padding-left: 1.5rem; padding-right: 1.5rem; margin-top: 5rem;">

  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

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

<div>
  <h3 class="font-semibold mb-3 tracking-wide navbar-logo-footer text-center">Información Legal</h3>
  <ul class="space-y-2 text-[12px] text-center">
    <li><a href="/informacion-legal#sobre-el-blog" class="text-white hover:text-gray-100 transition-colors font-medium">Sobre el Blog</a></li>
    <li><a href="/informacion-legal#politica-privacidad" class="text-white hover:text-gray-100 transition-colors font-medium">Política de Privacidad</a></li>
    <li><a href="/informacion-legal#terminos-condiciones" class="text-white hover:text-gray-100 transition-colors font-medium">Términos y Condiciones</a></li>
    <li><a href="/informacion-legal#aviso-legal" class="text-white hover:text-gray-100 transition-colors font-medium">Aviso Legal</a></li>
  </ul>
</div>

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

<div class="border-t border-white text-[12px] mt-10 mb-7 flex flex-col justify-between items-center gap-2 text-center">
  <p class="text-white text-[10px] sm:text-[12px] font-medium whitespace-nowrap text-center">
    © ${new Date().getFullYear()} Código Millonario — Todos Los Derechos Reservados
  </p>
</div>

<p class="text-white text-[12px] font-medium text-center mb-4">
  Compartir
</p>

<div class="flex justify-center gap-4">

<a href="https://www.facebook.com/sharer/sharer.php?u=https://codigomillonario.blog/educacionfinanciera" target="_blank" class="text-white hover:text-gray-100">
FB
</a>

<a href="https://api.whatsapp.com/send?text=Visita%20https://codigomillonario.blog/educacionfinanciera" target="_blank" class="text-white hover:text-gray-100">
WA
</a>

<a href="https://twitter.com/intent/tweet?url=https://codigomillonario.blog/educacionfinanciera" target="_blank" class="text-white hover:text-gray-100">
X
</a>

<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://codigomillonario.blog/educacionfinanciera" target="_blank" class="text-white hover:text-gray-100">
IN
</a>

</div>

</footer>

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

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".footer-here").forEach(el => {
      el.appendChild(createFooter());
    });
  });

})();