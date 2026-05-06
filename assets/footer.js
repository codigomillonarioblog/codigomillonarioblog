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
            <path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.17 1.6 6L0 24l6.18-1.62a11.94 11.94 0 0 0 5.83 1.49z"/>
          </svg>
        </a>

        <a href="https://twitter.com/intent/tweet?url=" target="_blank" class="social-icon"
        onclick="this.href+=encodeURIComponent(window.location.href)">
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26L22.75 21.75h-6.63l-5.19-6.8-5.95 6.8H1.672l7.73-8.84L1.25 2.25h6.797l4.694 6.145z"/>
          </svg>
        </a>

        <a href="https://www.linkedin.com/sharing/share-offsite/?url=" target="_blank" class="social-icon"
        onclick="this.href+=encodeURIComponent(window.location.href)">
          <svg viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037z"/>
          </svg>
        </a>

      </div>

      <div class="footer-bottom">
        <p>
          © 2026 Código Millonario — Todos los derechos reservados.
        </p>
      </div>

    </div>
  </div>
</footer>

<style>

.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
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

/* =========================
   TIPOGRAFÍA SOLO FOOTER
========================= */

.footer {
  font-family: 'Poppins', sans-serif;
}

.footer h1,
.footer h2,
.footer h3 {
  font-family: 'Playfair Display', serif;
}

/* =========================
   ESTRUCTURA GENERAL
========================= */

.footer-main {
  display: flex;
  flex-wrap: wrap;
}

/* =========================
   IZQUIERDA (NEWSLETTER)
========================= */

.footer-newsletter {
  background: #fff;
  color: #000;
  flex: 1;
  min-width: 280px;
  padding: 50px 40px;
}

.footer-newsletter h3 {
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 10px;
}

.footer-newsletter p {
  line-height: 1.6;
  margin: 0;
}

/* BRAND */
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

/* FORM */
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
  font-size: 14px;
}

/* CHECKBOX */
.check-container {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.check-container input {
  width: 18px;
  height: 18px;
  accent-color: #000;
}

/* BOTÓN */
.footer-newsletter button {
  width: 100%;
  padding: 10px 14px;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 60px;
}

.footer-newsletter button:hover {
  background: #fff;
  color: #000;
}

/* =========================
   DERECHA
========================= */

.footer-info {
  background: #000;
  color: #fff;
  flex: 2;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 70px 40px;
}

/* COLUMNAS */
.footer-col h4 {
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col a {
  color: #ccc;
  text-decoration: none;
}

.footer-col a:hover {
  color: #fff;
}

/* =========================
   REDES
========================= */

.footer-social {
  width: 100%;
  display: flex;
  gap: 15px;
  margin-top: 60px;
  margin-left: 60px;
  align-items: center;
}

/* =========================
   FOOTER BOTTOM
========================= */

.footer-bottom {
  width: 100%;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #fff;
  text-align: left;
  color: #aaa;
  font-size: 14px;
}

/* =========================
   PRIVACIDAD
========================= */

.privacy-link {
  font-weight: 700;
  text-decoration: underline;
  color: #000;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {

  .footer-newsletter {
    padding: 40px 20px;
    text-align: left;
  }

  .footer-info {
    flex-direction: column;
    padding: 40px 20px;
  }

  .footer-social {
    margin-left: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .footer-newsletter input {
    padding: 18px;
    font-size: 16px;
  }

  .footer-newsletter button {
    padding: 16px;
    font-size: 18px;
  }

  .footer-col {
    margin-bottom: 25px;
  }

  .footer-info .footer-col {
    border-top: 1px solid #fff;
    padding-top: 20px;
    margin-top: 20px;
  }

  .footer-info .footer-col:first-child {
    border-top: none;
    padding-top: 0;
    margin-top: 0;
  }
}
</style>

`;
});