document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".footer-here");
  if (!container) return;

  container.innerHTML = `

<footer class="footer">
<div class="footer-main">

<!-- IZQUIERDA -->
<div class="footer-newsletter">

<div class="footer-brand-box">
Código Millonario
</div>

<h3>Mantente conectado</h3>

<p>Regístrate para recibir contenido sobre finanzas personales directamente en tu correo.</p>

<form action="https://api.web3forms.com/submit" method="POST">

<input type="hidden" name="access_key" value="5a8131dd-bd10-44c5-8731-b2a4c7fda29c">
<input type="hidden" name="subject" value="🚀 Nuevo usuario registrado desde el FOOTER - Código Millonario">
<input type="hidden" name="from_name" value="Código Millonario Footer">
<input type="hidden" name="message" value="Nuevo registro desde el footer para recibir guías semanales.">
<input type="hidden" name="redirect" value="https://codigomillonario.blog/gracias.html">

<input type="text" name="nombre" placeholder="Nombre" required>
<input type="email" name="email" placeholder="Correo electrónico" required>

<label class="check-container">
<input type="checkbox" name="terminos" required>
<span>Acepto los términos de protección de datos</span>
</label>

<p class="legal-text">
Puedes cancelar tu suscripción en cualquier momento.<br><br>
La información que envíes estará regida por el 
<a href="/aviso-privacidad" class="privacy-link">Aviso de privacidad</a>
</p>

<button type="submit">ENVIAR</button>

</form>
</div>

<!-- DERECHA -->
<div class="footer-info">

<div class="footer-col">
<h4>Recursos</h4>
<ul>
<li><a href="/educacionfinanciera.html">Artículos</a></li>
<li><a href="/herramientas.html">Calculadoras</a></li>
<li><a href="/opiniones.html">Historias</a></li>
<li><a href="/blog/negocios/index.html">Emprendimiento</a></li>
<li><a href="/blog/inversiones/index.html">Guías de inversión</a></li>
</ul>
</div>

<div class="footer-col">
<h4>Información Legal</h4>
<ul>
<li><a href="/informacion-legal#sobre-el-blog">Sobre el Blog</a></li>
<li><a href="/informacion-legal#politica-privacidad">Política de Privacidad</a></li>
<li><a href="/informacion-legal#terminos-condiciones">Términos y Condiciones</a></li>
<li><a href="/informacion-legal#aviso-legal">Aviso Legal</a></li>
</ul>
</div>

<div class="footer-col">
<h4>Contacto</h4>
<ul>
<li><a href="/contacto.html">Soporte</a></li>
</ul>
</div>

<!-- REDES -->
<div class="footer-social">

<a href="https://www.facebook.com/sharer/sharer.php?u=" target="_blank" class="social-icon"
onclick="this.href+=encodeURIComponent(window.location.href)">
<svg viewBox="0 0 24 24">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
</svg>
</a>

<a href="https://api.whatsapp.com/send?text=" target="_blank" class="social-icon"
onclick="this.href+='Visita '+encodeURIComponent(window.location.href)">
<svg viewBox="0 0 24 24">
<path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.17 1.6 6L0 24l6.18-1.62a11.94 11.94 0 0 0 5.83 1.49h.01c6.62 0 11.99-5.37 11.99-11.99a11.9 11.9 0 0 0-3.49-8.4zM12.01 21.8a9.8 9.8 0 0 1-5-1.38l-.36-.21-3.67.96.98-3.58-.23-.37a9.79 9.79 0 1 1 8.28 4.58z"/>
</svg>
</a>

<a href="https://twitter.com/intent/tweet?url=" target="_blank" class="social-icon"
onclick="this.href+=encodeURIComponent(window.location.href)">
<svg viewBox="0 0 24 24">
<path d="M18.244 2.25h3.308l-7.227 8.26L22.75 21.75h-6.63l-5.19-6.8-5.95 6.8H1.672l7.73-8.84L1.25 2.25h6.797l4.694 6.145L18.244 2.25z"/>
</svg>
</a>

<a href="https://www.linkedin.com/sharing/share-offsite/?url=" target="_blank" class="social-icon"
onclick="this.href+=encodeURIComponent(window.location.href)">
<svg viewBox="0 0 24 24">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
</svg>
</a>

</div>

<div class="footer-bottom">
<p>© 2026 Código Millonario — Todos los derechos reservados.</p>
</div>

</div>
</div>
</footer>

<style>

/* ICONOS */
.footer-social {
display: flex;
gap: 15px;
margin-top: 60px;
margin-left: 60px;
}

.social-icon {
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
color: #ccc;
transition: 0.3s;
}

.social-icon svg {
width: 20px;
height: 20px;
fill: currentColor;
}

.social-icon:hover {
color: #fff;
transform: translateY(-2px);
}

/* BASE */
.footer {
font-family: Arial, sans-serif;
}

.footer-main {
display: flex;
flex-wrap: wrap;
}

.footer-newsletter {
background: #fff;
color: #000;
flex: 1;
padding: 50px;
}

.footer-info {
background: #000;
color: #fff;
flex: 2;
display: flex;
flex-wrap: wrap;
padding: 70px;
}

.footer-col {
margin-right: 40px;
}

.footer-col a {
color: #ccc;
text-decoration: none;
}

.footer-col a:hover {
color: #fff;
}

.footer-bottom {
width: 100%;
margin-top: 40px;
border-top: 1px solid #fff;
padding-top: 20px;
color: #aaa;
}

</style>

`;
});