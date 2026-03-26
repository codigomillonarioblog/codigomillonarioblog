(function () {

  // ===== INSERTAR ESTILOS =====
  const style = document.createElement("style");
  style.innerHTML = `
  .footer-pro {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: #555;
    background-color: #333;
    padding: 3rem 1.5rem 1.5rem;
    margin-top: 5rem;
  }
  .footer-pro a { text-decoration: none; }
  `;
  document.head.appendChild(style);

  // ===== CREAR FOOTER =====
  function createFooter() {
    const footer = document.createElement("div");
    footer.className = "footer-pro";

    footer.innerHTML = `
    <footer>
      <div style="max-width:1200px;margin:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:40px;">

        <div>
          <h3 style="color:#fff;">Código Millonario</h3>
          <p style="color:#fff;font-size:12px;">
            Recibe consejos exclusivos sobre dinero cada semana.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="5a8131dd-bd10-44c5-8731-b2a4c7fda29c">
            <input type="email" name="email" required placeholder="Tu correo"
              style="width:100%;padding:8px;background:transparent;color:#fff;border:1px solid #666;">
            <button type="submit" style="margin-top:5px;background:#555;color:#fff;padding:6px 10px;border:none;">
              Enviar
            </button>
          </form>
        </div>

        <div>
          <h3 style="color:#fff;">Legal</h3>
          <a href="/informacion-legal">Ver información</a>
        </div>

        <div>
          <h3 style="color:#fff;">Recursos</h3>
          <a href="/educacionfinanciera.html">Artículos</a><br>
          <a href="/herramientas.html">Calculadoras</a>
        </div>

        <div>
          <h3 style="color:#fff;">Contacto</h3>
          <p style="color:#fff;">Colombia — Online</p>
          <p style="color:#fff;">codigomillonarioblog@gmail.com</p>
        </div>

      </div>

      <p style="text-align:center;color:#fff;margin-top:30px;">
        © ${new Date().getFullYear()} Código Millonario
      </p>
    </footer>
    `;

    return footer;
  }

  // ===== INSERTAR EN LA PÁGINA =====
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".footer-here").forEach(container => {
      container.appendChild(createFooter());
    });
  });

})();