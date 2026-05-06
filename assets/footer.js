(function () {

  function injectFooter() {
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
    <br>
    <p>Regístrate para recibir contenido sobre finanzas personales directamente en tu correo.</p>
    <br>

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

      <p style="font-size:12px; color:#555;">
        Puedes cancelar tu suscripción en cualquier momento.<br><br>
        La información que envíes estará regida por el 
        <a href="/aviso-privacidad" class="privacy-link">
          Aviso de privacidad de nuestro sitio.
        </a>
        Al enviar tu información, aceptas recibir contenido por correo electrónico.
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

      <a href="javascript:void(0)" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location.href),'_blank')">
        Facebook
      </a>

      <a href="javascript:void(0)" onclick="window.open('https://api.whatsapp.com/send?text='+encodeURIComponent('Visita '+window.location.href),'_blank')">
        WhatsApp
      </a>

      <a href="javascript:void(0)" onclick="window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(window.location.href),'_blank')">
        X
      </a>

      <a href="javascript:void(0)" onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(window.location.href),'_blank')">
        LinkedIn
      </a>

    </div>

    <div class="footer-bottom">
      <p>© 2026 Código Millonario — Todos los derechos reservados.</p>
    </div>

  </div>
</div>
</footer>

<style>
.footer {
  font-family: 'Poppins', sans-serif;
}

.footer h1,
.footer h2,
.footer h3 {
  font-family: 'Playfair Display', serif;
}

.footer-main {
  display: flex;
  flex-wrap: wrap;
}

.footer-newsletter {
  background: #fff;
  color: #000;
  flex: 1;
  min-width: 280px;
  padding: 50px 40px;
}

.footer-newsletter h3 {
  font-size: 36px;
  font-weight: 700;
}

.footer-brand-box {
  background: #000;
  color: #fff;
  display: inline-block;
  padding: 3px 6px;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  font-weight: 700;
}

.footer-newsletter form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.footer-newsletter input {
  width: 100%;
  padding: 14px;
  border: 1px solid #000;
  border-radius: 6px;
}

.check-container {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.footer-newsletter button {
  padding: 14px;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  cursor: pointer;
}

.footer-info {
  background: #000;
  color: #fff;
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 70px 40px;
}

.footer-col h4 {
  text-transform: uppercase;
  margin-bottom: 15px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col a {
  color: #ccc;
  text-decoration: none;
}

.footer-col a:hover {
  color: #fff;
}

.footer-social {
  width: 100%;
  display: flex;
  gap: 15px;
  margin-top: 60px;
}

.footer-bottom {
  width: 100%;
  margin-top: 40px;
  border-top: 1px solid #fff;
  padding-top: 20px;
  color: #aaa;
}

@media (max-width: 768px) {
  .footer-info {
    flex-direction: column;
  }
}
</style>
`;

  }

  document.addEventListener("DOMContentLoaded", injectFooter);

})();

