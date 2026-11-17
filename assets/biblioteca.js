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
            margin-top: 48px;
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

        /* ================= TARJETA (PC: Diseño Horizontal 16:9) ================= */

        .cm-producto-box {
            display: flex;
            flex-direction: row;
            align-items: stretch;
            position: relative;

            width: 100%;
            max-width: 720px;
            margin: 0;

            border: 1px solid #ddd;
            background: transparent;
            padding: 0;
            overflow: hidden;

            font-family: Arial, sans-serif;
            text-decoration: none;
            color: #000;

            transition: opacity 0.2s ease;
        }

        /* ================= HOVER DESKTOP ================= */

        @media (min-width: 769px) {
            .cm-producto-box:hover {
                opacity: 0.85;
            }
        }

        /* ================= IMAGEN (16:9 Izquierda) ================= */

        .cm-producto-img-container {
            flex: 0 0 42%;
            max-width: 42%;
            position: relative;
            background: #000;
        }

        .cm-producto-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            aspect-ratio: 16 / 9;
        }

        /* ================= CONTENIDO DERECHA ================= */

        .cm-producto-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 16px;
        }

        .cm-producto-contenido {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        /* ================= TITULO ================= */

        .cm-producto-titulo h2 {
            font-size: 17px;
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
            margin: 0;
        }

        /* ================= BARRA INFERIOR ================= */

        .cm-producto-boton {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #ddd;
            margin-top: 12px;
            padding-top: 10px;
            background: transparent;
        }

        .cm-producto-boton-texto {
            font-family: 'Inter', sans-serif;
            font-size: 11px;
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

            .cm-producto-box {
                flex-direction: column;
                max-width: 100%;
                border: none;
                border-bottom: 1px solid #ececec;
            }

            .cm-producto-img-container {
                flex: none;
                max-width: 100%;
                width: 100%;
            }

            .cm-producto-img {
                aspect-ratio: 16 / 9;
                height: auto;
            }

            .cm-producto-right {
                padding: 12px 0 10px 0;
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

            .cm-producto-descripcion {
                display: none;
            }

            .cm-producto-titulo h2 {
                font-family: 'Inter', sans-serif;
                font-size: 1.45rem;
                font-weight: 800;
                color: #111;
                line-height: 1.15;
                letter-spacing: -0.6px;
            }

            .cm-producto-boton {
                position: relative;
                margin-top: 8px;
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

            <div class="cm-producto-img-container">
                <img
                    src="${PRODUCTO_IMAGEN}"
                    class="cm-producto-img"
                    alt="Seis plantillas de Excel editables para organizar y gestionar un negocio"
                    loading="lazy"
                >
            </div>

            <div class="cm-producto-right">

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

                <div class="cm-producto-boton">

                    <div class="cm-producto-boton-texto">
                        Recurso de la Biblioteca:
                    </div>

                    <span>Ver</span>

                </div>

            </div>

        </a>

    `;

    placeholder.appendChild(section);

})();