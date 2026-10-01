(function () {

    "use strict";


    /* =========================================================
       CÓDIGO MILLONARIO
       FIRMA EDITORIAL + COMPARTIR
       ========================================================= */


    /* =========================================================
       1. FONT AWESOME
       ========================================================= */

    if (!document.querySelector("#fa-share-icons")) {

        const link = document.createElement("link");

        link.id = "fa-share-icons";
        link.rel = "stylesheet";
        link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";

        document.head.appendChild(link);
    }


    /* =========================================================
       2. ESTILOS
       ========================================================= */

    const style = document.createElement("style");

    style.id = "cm-share-editorial-styles";

    style.innerHTML = `

    /* =====================================================
       FIRMA EDITORIAL
       ===================================================== */

    .cm-editorial-signature {

        margin: 90px 0 42px;

        padding: 0;

        width: 100%;

    }


    .cm-editorial-signature__line {

        width: 60px;

        height: 1px;

        background: #d6d3d1;

        margin-bottom: 18px;

    }


    .cm-editorial-signature__name {

        font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

        font-size: 24px;

        line-height: 1.2;

        color: #292524;

        font-style: italic;

        margin: 0 0 6px;

    }


    .cm-editorial-signature__label {

        font-family:
            Inter,
            Arial,
            sans-serif;

        font-size: 10px;

        line-height: 1.4;

        letter-spacing: 2px;

        text-transform: uppercase;

        color: #78716c;

        margin: 0 0 14px;

    }


    .cm-editorial-signature__text {

        margin: 0;

        max-width: 520px;

        font-family:
            Inter,
            Arial,
            sans-serif;

        font-size: 13px;

        line-height: 1.8;

        color: #57534e;

    }


    /* =====================================================
       BLOQUE DE COMPARTIR
       ===================================================== */

    .cm-share-editorial {

        width: 100%;

        margin: 0 0 70px;

        padding-top: 0;

        font-family:
            Inter,
            Arial,
            sans-serif;

    }


    .cm-share-editorial__inner {

        display: flex;

        align-items: center;

        gap: 16px;

        flex-wrap: wrap;

    }


    /* =====================================================
       TEXTO COMPARTIR
       ===================================================== */

    .cm-share-editorial__label {

        display: inline-block;

        font-family:
            Inter,
            Arial,
            sans-serif;

        font-size: 11px;

        line-height: 1;

        font-weight: 600;

        letter-spacing: 1.4px;

        text-transform: uppercase;

        color: #57534e;

        white-space: nowrap;

    }


    /* =====================================================
       CONTENEDOR ICONOS
       ===================================================== */

    .cm-share-editorial__icons {

        display: flex;

        align-items: center;

        gap: 7px;

        flex-wrap: wrap;

    }


    /* =====================================================
       BOTONES
       ===================================================== */

    .cm-share-editorial__icons a {

        display: inline-flex;

        align-items: center;

        justify-content: center;

        width: 34px;

        height: 34px;

        padding: 0;

        border: 1px solid #d6d3d1;

        border-radius: 0;

        background: #ffffff;

        color: #44403c;

        text-decoration: none;

        transition:
            background-color .18s ease,
            border-color .18s ease,
            color .18s ease;

    }


    .cm-share-editorial__icons a:hover {

        background: #292524;

        border-color: #292524;

        color: #ffffff;

    }


    .cm-share-editorial__icons a:focus-visible {

        outline: 2px solid #a8a29e;

        outline-offset: 2px;

    }


    /* =====================================================
       ICONOS
       ===================================================== */

    .cm-share-editorial__icons i {

        font-size: 14px;

        line-height: 1;

        color: currentColor;

    }


    /* =====================================================
       X
       ===================================================== */

    .cm-share-editorial__x {

        width: 13px;

        height: 13px;

        display: block;

        fill: currentColor;

    }


    /* =====================================================
       MOBILE
       ===================================================== */

    @media (max-width: 600px) {

        .cm-editorial-signature {

            margin: 70px 0 36px;

        }


        .cm-editorial-signature__name {

            font-size: 22px;

        }


        .cm-editorial-signature__text {

            font-size: 12.5px;

            line-height: 1.75;

        }


        .cm-share-editorial {

            margin-bottom: 50px;

        }


        .cm-share-editorial__inner {

            gap: 13px;

        }


        .cm-share-editorial__icons {

            gap: 6px;

        }


        .cm-share-editorial__icons a {

            width: 32px;

            height: 32px;

        }


        .cm-share-editorial__icons i {

            font-size: 13px;

        }


        .cm-share-editorial__x {

            width: 12px;

            height: 12px;

        }

    }

    `;

    document.head.appendChild(style);


    /* =========================================================
       3. CREAR FIRMA EDITORIAL
       ========================================================= */

    function createEditorialSignature() {

        const signature =
            document.createElement("div");

        signature.className =
            "cm-editorial-signature";

        signature.setAttribute(
            "data-cm-editorial-signature",
            "true"
        );


        signature.innerHTML = `

            <div class="cm-editorial-signature__line"></div>

            <div class="cm-editorial-signature__name">
                Código Millonario
            </div>

            <div class="cm-editorial-signature__label">
                Análisis Editorial
            </div>

            <p class="cm-editorial-signature__text">
                Este contenido analiza distintas trayectorias, decisiones y formas de
                construir patrimonio. No plantea una fórmula para copiar en la vida real;
                aplicar cualquier decisión sin analizar sus riesgos podría poner su dinero en riesgo.
            </p>

        `;


        return signature;
    }


    /* =========================================================
       4. CREAR BLOQUE DE COMPARTIR
       ========================================================= */

    function createShareWidget() {

        const widget =
            document.createElement("div");

        widget.className =
            "cm-share-editorial";

        widget.setAttribute(
            "data-cm-share-widget",
            "true"
        );


        widget.innerHTML = `

            <div class="cm-share-editorial__inner">

                <span class="cm-share-editorial__label">
                    Compartir
                </span>


                <div class="cm-share-editorial__icons">


                    <!-- FACEBOOK -->

                    <a
                        href="#"
                        class="cm-share-facebook"
                        aria-label="Compartir en Facebook"
                        title="Compartir en Facebook"
                    >

                        <i class="fab fa-facebook-f"></i>

                    </a>


                    <!-- X -->

                    <a
                        href="#"
                        class="cm-share-x"
                        aria-label="Compartir en X"
                        title="Compartir en X"
                    >

                        <svg
                            class="cm-share-editorial__x"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >

                            <path d="M18.244 2H21.5l-7.5 8.573L22 22h-6.828l-5.35-6.996L3.5 22H.244l8.034-9.177L0 2h6.828l4.843 6.347L18.244 2z"/>

                        </svg>

                    </a>


                    <!-- LINKEDIN -->

                    <a
                        href="#"
                        class="cm-share-linkedin"
                        aria-label="Compartir en LinkedIn"
                        title="Compartir en LinkedIn"
                    >

                        <i class="fab fa-linkedin-in"></i>

                    </a>


                    <!-- TELEGRAM -->

                    <a
                        href="#"
                        class="cm-share-telegram"
                        aria-label="Compartir en Telegram"
                        title="Compartir en Telegram"
                    >

                        <i class="fab fa-telegram-plane"></i>

                    </a>


                    <!-- WHATSAPP -->

                    <a
                        href="#"
                        class="cm-share-whatsapp"
                        aria-label="Compartir por WhatsApp"
                        title="Compartir por WhatsApp"
                    >

                        <i class="fab fa-whatsapp"></i>

                    </a>


                    <!-- EMAIL -->

                    <a
                        href="#"
                        class="cm-share-email"
                        aria-label="Compartir por correo electrónico"
                        title="Compartir por correo electrónico"
                    >

                        <i class="fas fa-envelope"></i>

                    </a>


                </div>

            </div>

        `;


        return widget;
    }


    /* =========================================================
       5. CONFIGURAR ENLACES
       ========================================================= */

    function configureShareLinks(widget) {

        const currentURL =
            window.location.href;

        const currentTitle =
            document.title;


        const encodedURL =
            encodeURIComponent(currentURL);

        const encodedTitle =
            encodeURIComponent(currentTitle);


        /* FACEBOOK */

        const facebook =
            widget.querySelector(
                ".cm-share-facebook"
            );

        facebook.href =
            "https://www.facebook.com/sharer/sharer.php?u=" +
            encodedURL;


        /* X */

        const x =
            widget.querySelector(
                ".cm-share-x"
            );

        x.href =
            "https://twitter.com/intent/tweet?url=" +
            encodedURL +
            "&text=" +
            encodedTitle;


        /* LINKEDIN */

        const linkedin =
            widget.querySelector(
                ".cm-share-linkedin"
            );

        linkedin.href =
            "https://www.linkedin.com/sharing/share-offsite/?url=" +
            encodedURL;


        /* TELEGRAM */

        const telegram =
            widget.querySelector(
                ".cm-share-telegram"
            );

        telegram.href =
            "https://t.me/share/url?url=" +
            encodedURL +
            "&text=" +
            encodedTitle;


        /* WHATSAPP */

        const whatsapp =
            widget.querySelector(
                ".cm-share-whatsapp"
            );

        whatsapp.href =
            "https://api.whatsapp.com/send?text=" +
            encodedTitle +
            "%0A%0A" +
            encodedURL;


        /* EMAIL */

        const email =
            widget.querySelector(
                ".cm-share-email"
            );


        email.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const subject =
                    encodeURIComponent(
                        currentTitle
                    );


                const body =
                    encodeURIComponent(
                        currentTitle +
                        "\n\n" +
                        currentURL
                    );


                window.location.href =
                    "mailto:?subject=" +
                    subject +
                    "&body=" +
                    body;

            }
        );


        /* NUEVA PESTAÑA */

        widget
            .querySelectorAll("a")
            .forEach(function (link) {

                if (
                    !link.classList.contains(
                        "cm-share-email"
                    )
                ) {

                    link.target = "_blank";

                    link.rel =
                        "noopener noreferrer";

                }

            });

    }


    /* =========================================================
       6. BUSCAR CONTENEDOR EXISTENTE
       ========================================================= */

    function findExistingShareContainer() {

        return document.querySelector(
            ".share-here"
        );

    }


    /* =========================================================
       7. BUSCAR EL CONTENIDO PRINCIPAL
       ========================================================= */

    function findArticleContainer() {

        const selectors = [

            "main article",

            "article",

            "main .article-content",

            "main .article-body",

            "main .post-content",

            "main .entry-content",

            ".article-content",

            ".article-body",

            ".post-content",

            ".entry-content"

        ];


        for (
            let i = 0;
            i < selectors.length;
            i++
        ) {

            const element =
                document.querySelector(
                    selectors[i]
                );


            if (element) {

                return element;

            }

        }


        return null;

    }


    /* =========================================================
       8. INSERTAR FIRMA + COMPARTIR
       ========================================================= */

    function initialize() {


        /*
         * Si ya existen elementos generados,
         * no hacemos nada.
         */

        if (
            document.querySelector(
                "[data-cm-share-widget='true']"
            ) ||
            document.querySelector(
                "[data-cm-editorial-signature='true']"
            )
        ) {

            return;

        }


        /*
         * Primero intentamos utilizar el
         * .share-here que ya existe.
         */

        const existingShare =
            findExistingShareContainer();


        if (existingShare) {


            /*
             * Creamos la firma.
             */

            const signature =
                createEditorialSignature();


            /*
             * Creamos compartir.
             */

            const widget =
                createShareWidget();


            configureShareLinks(
                widget
            );


            /*
             * La firma va ANTES
             * de compartir.
             */

            existingShare.appendChild(
                signature
            );

            existingShare.appendChild(
                widget
            );


            return;

        }


        /*
         * Si no existe .share-here,
         * buscamos automáticamente
         * el contenido del artículo.
         */

        const article =
            findArticleContainer();


        if (!article) {

            return;

        }


        /*
         * Creamos los dos elementos.
         */

        const signature =
            createEditorialSignature();


        const widget =
            createShareWidget();


        configureShareLinks(
            widget
        );


        /*
         * Los añadimos al final
         * del artículo.
         */

        article.appendChild(
            signature
        );

        article.appendChild(
            widget
        );

    }


    /* =========================================================
       9. EJECUTAR
       ========================================================= */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }


})();