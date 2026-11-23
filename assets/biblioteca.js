(function () {

    "use strict";

    /* =========================================================
       CÓDIGO MILLONARIO · BIBLIOTECA CM
       INSERCIÓN EXCLUSIVAMENTE MANUAL
       ========================================================= */

    const BIBLIOTECA_URL =
        "https://codigomillonario.blog/tienda.html#novedades";


    /* =========================================================
       ESTILOS
       ========================================================= */

    if (!document.getElementById("cm-biblioteca-styles")) {

        const style = document.createElement("style");

        style.id = "cm-biblioteca-styles";

        style.textContent = `

        .cm-biblioteca {
            margin: 68px 0 64px;
            padding: 0;
            max-width: 620px;
        }

        .cm-biblioteca__line {
            width: 38px;
            height: 1px;
            background: #b8b4ae;
            margin: 0 0 14px;
        }

        .cm-biblioteca__label {
            margin: 0 0 8px;
            font-family: Arial, sans-serif;
            font-size: 8px;
            line-height: 1.3;
            font-weight: 600;
            letter-spacing: 1.7px;
            text-transform: uppercase;
            color: #8a8680;
        }

        .cm-biblioteca__title {
            margin: 0 0 9px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 20px;
            line-height: 1.3;
            font-weight: 600;
            color: #292929;
        }

        .cm-biblioteca__text {
            margin: 0 0 18px;
            max-width: 570px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 12px;
            line-height: 1.6;
            color: #77736d;
        }

        .cm-biblioteca__link {
            display: inline-block;
            padding: 9px 0;
            font-family: Arial, sans-serif;
            font-size: 9px;
            line-height: 1.3;
            font-weight: 600;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            color: #292929;
            text-decoration: none;
            border-bottom: 1px solid #292929;
            transition: color .18s ease, border-color .18s ease;
        }

        .cm-biblioteca__link:hover {
            color: #77736d;
            border-color: #77736d;
        }

        @media (max-width: 600px) {

            .cm-biblioteca {
                margin: 54px 0 50px;
            }

            .cm-biblioteca__line {
                width: 32px;
                margin-bottom: 12px;
            }

            .cm-biblioteca__label {
                font-size: 7.5px;
                letter-spacing: 1.5px;
            }

            .cm-biblioteca__title {
                font-size: 17px;
            }

            .cm-biblioteca__text {
                font-size: 10px;
                line-height: 1.55;
            }

            .cm-biblioteca__link {
                font-size: 8px;
                letter-spacing: 1.3px;
            }

        }

        `;

        document.head.appendChild(style);

    }


    /* =========================================================
       INSERTAR SOLO EN EL CONTENEDOR DE ESTA PÁGINA
       ========================================================= */

    const placeholder = document.querySelector(
        "[data-cm-biblioteca-slot]"
    );

    if (!placeholder) {
        return;
    }

    // Evitar duplicados en el mismo contenedor.
    if (placeholder.querySelector("[data-cm-biblioteca]")) {
        return;
    }

    const section = document.createElement("section");

    section.className = "cm-biblioteca";
    section.setAttribute("data-cm-biblioteca", "true");

    section.innerHTML = `

        <div class="cm-biblioteca__line"></div>

        <div class="cm-biblioteca__label">
            Biblioteca CM
        </div>

        <h2 class="cm-biblioteca__title">
            Recursos para profundizar
        </h2>

        <p class="cm-biblioteca__text">
            Algunos temas tratados por Código Millonario
            pueden requerir una exploración más profunda.
            En nuestra biblioteca reunimos ebooks, guías
            y otros recursos relacionados con el dinero,
            los negocios y la construcción de patrimonio.
        </p>

        <a
            class="cm-biblioteca__link"
            href="${BIBLIOTECA_URL}"
            aria-label="Explorar la Biblioteca CM"
        >
            Explorar la Biblioteca CM →
        </a>

    `;

    placeholder.appendChild(section);

})();
