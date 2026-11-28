(function () {

    "use strict";

    /* =========================================================
       CÓDIGO MILLONARIO · BIBLIOTECA CM (AVISO SUTIL)
       INSERCIÓN EXCLUSIVAMENTE MANUAL
       ========================================================= */

    const BIBLIOTECA_URL =
        "https://codigomillonario.blog/tienda.html#novedades";

    if (!document.getElementById("cm-biblioteca-styles")) {

        const style = document.createElement("style");
        style.id = "cm-biblioteca-styles";

        style.textContent = `

        .cm-biblioteca {
            margin: 76px 0 44px;
            max-width: 500px;
        }

        .cm-biblioteca__line {
            width: 44px;
            height: 1px;
            background: #e7e5e4;
            margin-bottom: 16px;
        }

        .cm-biblioteca__label {
            margin: 0 0 6px;
            font-family: 'Inter', sans-serif;
            font-size: 10px;
            line-height: 1.3;
            font-weight: 500;
            letter-spacing: 2.2px;
            text-transform: uppercase;
            color: #8a847e;
        }

        .cm-biblioteca__title {
            margin: 0 0 10px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 22px;
            line-height: 1.25;
            font-weight: 400;
            font-style: italic;
            color: #292524;
        }

        .cm-biblioteca__text {
            margin: 0 0 16px;
            font-family: 'Inter', sans-serif;
            font-size: 13px;
            line-height: 1.75;
            color: #6b6661;
        }

        .cm-biblioteca__link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding-bottom: 2px;
            font-family: 'Inter', sans-serif;
            font-size: 10.5px;
            line-height: 1.3;
            font-weight: 500;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #57534e;
            text-decoration: none;
            border-bottom: 1px solid #d6d3d1;
            transition: color .2s ease, border-color .2s ease;
        }

        .cm-biblioteca__arrow {
            display: inline-block;
            transition: transform .2s ease;
        }

        .cm-biblioteca__link:hover {
            color: #292524;
            border-color: #292524;
        }

        .cm-biblioteca__link:hover .cm-biblioteca__arrow {
            transform: translateX(3px);
        }

        @media (max-width: 600px) {
            .cm-biblioteca {
                margin: 56px 0 36px;
            }

            .cm-biblioteca__title {
                font-size: 20px;
            }
        }

        `;

        document.head.appendChild(style);
    }

    const placeholder = document.querySelector("[data-cm-biblioteca-slot]");
    if (!placeholder) return;
    if (placeholder.querySelector("[data-cm-biblioteca]")) return;

    const section = document.createElement("section");
    section.className = "cm-biblioteca";
    section.setAttribute("data-cm-biblioteca", "true");

    section.innerHTML = `
        <div class="cm-biblioteca__line"></div>

        <div class="cm-biblioteca__label">
            Biblioteca CM
        </div>

        <div class="cm-biblioteca__title">
            Recursos para profundizar
        </div>

        <p class="cm-biblioteca__text">
            Si te interesa profundizar, en nuestra biblioteca encontrarás guías, ebooks y recursos prácticos sobre dinero y construcción de patrimonio.
        </p>

        <a
            class="cm-biblioteca__link"
            href="${BIBLIOTECA_URL}"
            aria-label="Explorar la Biblioteca CM"
        >
            <span>Explorar la Biblioteca</span>
        </a>
    `;

    placeholder.appendChild(section);

})();