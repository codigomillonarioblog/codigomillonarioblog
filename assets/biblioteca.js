(function () {

    "use strict";

    /* =========================================================
       CÓDIGO MILLONARIO · ANUNCIO DE PRODUCTO
       INSERCIÓN EXCLUSIVAMENTE MANUAL
    ========================================================= */

    const PRODUCTO_URL =
        "https://codigomillonario.blog/biblioteca/paquete-6-plantillas-excel-para-negocios.html";

    const PRODUCTO_IMAGEN =
        "https://codigomillonario.blog/assets/img/6-plantillas-excel-para-negocios.webp";


    /* =========================================================
       ESTILOS
    ========================================================= */

    if (!document.getElementById("cm-producto-styles")) {

        const style = document.createElement("style");

        style.id = "cm-producto-styles";

        style.textContent = `

        /* ================= CONTENEDOR PADRE ================= */

        .cm-producto-wrapper {
            position: relative;
            width: 100%;
            max-width: 720px;
            margin-top: 48px; /* Espaciado superior grande para separarlo de los textos anteriores */
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 24px;
        }

        /* ================= TEXTO SUPERIOR ================= */

        .cm-producto-label {
            position: absolute;
            top: -28px;
            left: 0;

            font-family: 'Inter', sans-serif;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            color: #333;
        }

        /* ================= TARJETA ================= */

        .cm-producto-box {
            display: flex;
            flex-direction: column;
            position: relative;

            width: 100%;
            max-width: 720px;
            margin: 0;

            border: 1px solid #ddd;
            background: transparent; /* Fondo transparente para usar el fondo natural de la página */
            padding: 0;
            overflow: hidden;

            font-family: Arial, sans-serif;
            text-decoration: none;
            color: #000;

            min-height: 140px;
            transition: opacity 0.2s ease;
        }

        /* ================= HOVER DESKTOP ================= */

        @media (min-width: 769px) {
            .cm-producto-box:hover {
                opacity: 0.85;
            }
        }

        /* ================= MAIN ================= */

        .cm-producto-main {
            display: flex;
            width: 100%;
            align-items: flex-start;
            padding: 10px 15px 50px 15px;
        }

        /* ================= IMAGEN ================= */

        .cm-producto-img {
            width: 200px;
            height: 110px;
            object-fit: cover;

            position: absolute;
            top: 0;
            left: 0;
        }

        /* ================= CONTENIDO ================= */

        .cm-producto-contenido {
            flex: 1;
            padding-left: 210px;
            display: flex;
            flex-direction: column;
        }

        /* ================= TITULO ================= */

        .cm-producto-titulo h2 {
            font-size: 18px;
            font-weight: bold;
            line-height: 1.3;
            margin: 0;
            color: #000;
        }

        /* ================= DESCRIPCIÓN ================= */

        .cm-producto-descripcion {
            font-size: 13px;
            color: #555;
            line-height: 1.4;
        }

        /* ================= BARRA INFERIOR ================= */

        .cm-producto-boton {
            position: absolute;
            bottom: 0;
            width: 100%;

            border-top: 1px solid #ddd;
            background: transparent; /* Fondo transparente */

            padding: 8px 15px;
            box-sizing: border-box;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cm-producto-boton-texto {
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #444;
        }

        .cm-producto-boton span {
            background: #fff;
            color: #000;

            border: 1px solid #ddd;
            padding: 4px 10px;

            font-size: 12px;
            font-weight: bold;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 768px) {

            .cm-producto-box:hover {
                opacity: 1 !important;
            }

            .cm-producto-descripcion {
                display: none;
            }

            .cm-producto-label {
                position: relative;
                top: 0;
                left: 0;
                margin-bottom: 10px;

                font-family: 'Inter', sans-serif;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                color: #333;
            }

            .cm-producto-box {
                max-width: 100%;
                border: none;
                border-bottom: 1px solid #ececec;
                padding: 10px 0 0 0;
            }

            .cm-producto-main {
                flex-direction: column;
                padding: 0;
            }

            .cm-producto-img {
                width: 100%;
                height: 120px;
                position: relative;
            }

            .cm-producto-contenido {
                padding-left: 0;
            }

            .cm-producto-titulo h2 {
                font-family: 'Inter', sans-serif;
                font-size: 1.55rem;
                font-weight: 800;
                color: #111;
                line-height: 1.15;
                letter-spacing: -0.6px;
            }

            .cm-producto-descripcion {
                font-size: 13px;
                color: #666;
            }

            .cm-producto-boton {
                position: relative;
                margin-top: 6px;
                padding-top: 8px;
                border-top: 1px solid #ececec;
                background: transparent;
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

    // Evitar duplicados.

    if (placeholder.querySelector("[data-cm-producto]")) {
        return;
    }

    const section = document.createElement("div");

    section.className = "cm-producto-wrapper";
    section.setAttribute("data-cm-producto", "true");

    section.innerHTML = `

        <!-- TEXTO SUPERIOR -->

        <div class="cm-producto-label">
            También te puede interesar:
        </div>


        <!-- TARJETA DEL PRODUCTO -->

        <a href="${PRODUCTO_URL}" class="cm-producto-box">

            <img
                src="${PRODUCTO_IMAGEN}"
                class="cm-producto-img"
                alt="Seis plantillas de Excel editables para organizar y gestionar un negocio"
                loading="lazy"
            >

            <div class="cm-producto-main">

                <div class="cm-producto-contenido">

                    <div class="cm-producto-titulo">
                        <h2>
                            Organiza tu negocio con 6 plantillas de Excel
                        </h2>
                    </div>

                    <div class="cm-producto-descripcion">
                        Una plantilla principal y cinco recursos adicionales
                        para gestionar finanzas, ventas, clientes, inventario
                        y flujo de caja.
                    </div>

                </div>

            </div>

            <div class="cm-producto-boton">

                <div class="cm-producto-boton-texto">
                    Recurso de la Biblioteca:
                </div>

                <span>Ver</span>

            </div>

        </a>

    `;

    placeholder.appendChild(section);

})();