
(function () {

    "use strict";

    /* =========================================
       CÓDIGO MILLONARIO · RECURSO DESTACADO
    ========================================= */

    const PRODUCTO_URL =
        "https://codigomillonario.blog/biblioteca/paquete-6-plantillas-excel-para-negocios.html";

    // Sustituir por la ruta real de la imagen del producto.
    const PRODUCTO_IMAGEN =
        "../../assets/img/paquete-6-plantillas-excel-para-negocios.webp";


    /* =========================================
       ESTILOS
    ========================================= */

    if (!document.getElementById("cm-recurso-styles")) {

        const style = document.createElement("style");

        style.id = "cm-recurso-styles";

        style.textContent = `

        .cm-recurso {
            max-width: 680px;
            margin: 68px 0 64px;
            padding: 18px;
            border: 1px solid #e5e2dc;
            background: #fff;
            box-sizing: border-box;
        }

        .cm-recurso__label {
            margin: 0 0 14px;
            font-family: Arial, sans-serif;
            font-size: 8px;
            font-weight: 700;
            letter-spacing: 1.6px;
            text-transform: uppercase;
            color: #8a8680;
        }

        .cm-recurso__contenido {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .cm-recurso__imagen {
            display: block;
            width: 158px;
            height: 120px;
            flex-shrink: 0;
            object-fit: cover;
            object-position: center;
        }

        .cm-recurso__texto {
            flex: 1;
            min-width: 0;
        }

        .cm-recurso__titulo {
            margin: 0 0 9px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 19px;
            line-height: 1.3;
            font-weight: 600;
            color: #292929;
        }

        .cm-recurso__descripcion {
            margin: 0 0 14px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 12px;
            line-height: 1.6;
            color: #77736d;
        }

        .cm-recurso__enlace {
            display: inline-block;
            padding: 7px 0;
            border-bottom: 1px solid #292929;
            font-family: Arial, sans-serif;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            text-decoration: none;
            color: #292929;
            transition: color .2s ease;
        }

        .cm-recurso__enlace:hover {
            color: #8a713d;
        }

        @media (max-width: 600px) {

            .cm-recurso {
                margin: 54px 0 50px;
                padding: 14px;
            }

            .cm-recurso__contenido {
                gap: 13px;
                align-items: flex-start;
            }

            .cm-recurso__imagen {
                width: 105px;
                height: 105px;
            }

            .cm-recurso__titulo {
                font-size: 16px;
                line-height: 1.25;
            }

            .cm-recurso__descripcion {
                font-size: 10px;
                line-height: 1.5;
                margin-bottom: 10px;
            }

            .cm-recurso__enlace {
                font-size: 8px;
                letter-spacing: 1px;
            }

            .cm-recurso__label {
                font-size: 7.5px;
            }
        }

        `;

        document.head.appendChild(style);
    }


    /* =========================================
       INSERCIÓN MANUAL
    ========================================= */

    const placeholder = document.querySelector(
        "[data-cm-biblioteca-slot]"
    );

    if (!placeholder) return;

    if (placeholder.querySelector("[data-cm-recurso]")) {
        return;
    }

    const section = document.createElement("section");

    section.className = "cm-recurso";
    section.setAttribute("data-cm-recurso", "true");

    section.innerHTML = `

        <div class="cm-recurso__label">
            Biblioteca CM · Recurso destacado
        </div>

        <div class="cm-recurso__contenido">

            <img
                src="${PRODUCTO_IMAGEN}"
                class="cm-recurso__imagen"
                alt="Paquete de seis plantillas de Excel editables para negocios"
                loading="lazy"
            >

            <div class="cm-recurso__texto">

                <h2 class="cm-recurso__titulo">
                    Organiza tu negocio con 6 plantillas de Excel
                </h2>

                <p class="cm-recurso__descripcion">
                    Una plantilla principal y cinco recursos adicionales
                    para gestionar finanzas, ventas, inventario y flujo de caja.
                </p>

                <a
                    class="cm-recurso__enlace"
                    href="${PRODUCTO_URL}"
                    aria-label="Conocer las seis plantillas de Excel"
                >
                    Conocer las plantillas →
                </a>

            </div>

        </div>

    `;

    placeholder.appendChild(section);

})();
