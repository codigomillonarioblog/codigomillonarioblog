(function () {

  function createPopup() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
    <style>
    /* ========= ESTILOS ========= */

    #popupOverlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.55);
      z-index: 2000;

      justify-content: center;

      align-items: flex-start;
      padding-top: clamp(200px, 22vh, 320px);

      padding-left: 20px;
      padding-right: 20px;
    }

    .popup-box {
      background: #ffffff;
      width: 100%;
      max-width: 520px;
      padding: 40px 35px;
      border-radius: 14px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.15);
      text-align: left;
      animation: popupFade 0.25s ease-out;
    }

    .popup-box h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 24px;
      margin-bottom: 10px;
    }

    .popup-box p {
      font-size: 15px;
      color: #555;
      margin-bottom: 25px;
    }

    .popup-box input[type="email"] {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 14px;
      font-size: 15px;
      margin-bottom: 15px;
      transition: 0.2s;
    }

    .popup-box input[type="email"]:focus {
      outline: none;
      border-color: #111;
    }

    .popup-box button[type="submit"] {
      width: 100%;
      background: #111;
      color: #fff;
      border: none;
      padding: 14px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      transition: 0.2s;
    }

    .popup-box button[type="submit"]:hover {
      background: #333;
    }

    .close-btn {
      width: 100%;
      margin-top: 12px;
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 12px;
      border-radius: 8px;
      color: #444;
      cursor: pointer;
      transition: 0.2s;
    }

    .close-btn:hover {
      background: #eaeaea;
    }

    @keyframes popupFade {
      from { transform: translateY(15px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @media (max-width: 767px) {
      #popupOverlay {
        padding-top: clamp(170px, 26vh, 260px);
      }

      .popup-box {
        padding: 30px 20px;
      }
    }
    </style>

    <!-- ========= POPUP ========= -->
    <div id="popupOverlay" style="font-family: 'Open Sans', sans-serif;">

      <div class="popup-box">

        <h2 style="font-family: 'Montserrat', sans-serif;">
          Descargar Guía Gratis
        </h2>

        <p>Ingresa tu correo para recibir la guía inmediata.</p>

        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="5a8131dd-bd10-44c5-8731-b2a4c7fda29c">
          <input type="hidden" name="subject" value="Nuevo registro de guía gratis">
          <input type="hidden" name="redirect" value="https://codigomillonario.blog/gracias2.html">

          <input 
            type="email" 
            name="email" 
            required 
            minlength="6" 
            maxlength="60"
            placeholder="Tu correo electrónico">

          <button type="submit">
            Obtener Guía
          </button>
        </form>

        <button class="close-btn" id="closePopupBtn">
          Cerrar
        </button>

      </div>
    </div>
    `;

    return wrapper;
  }

  function initPopup() {
    const overlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('closePopupBtn');

    window.openPopup = function () {
      if (overlay) overlay.style.display = 'flex';
    };

    window.closePopup = function () {
      if (overlay) overlay.style.display = 'none';
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", window.closePopup);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(createPopup());
    initPopup();
  });

})();