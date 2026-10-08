(function () {

    "use strict";


    /* =========================================================
       CÓDIGO MILLONARIO
       FIRMA EDITORIAL + COMPARTIR
       DISEÑO EDITORIAL
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

        margin: 82px 0 26px;

        padding: 0;

        max-width: 620px;

        --cm-editorial-note-size: 10px;

    }


    /* =====================================================
       LÍNEA DE LA FIRMA
    ===================================================== */

    .cm-editorial-signature__line {

        width: 38px;

        height: 1px;

        background: #b8b4ae;

        margin: 0 0 13px;

    }


    /* =====================================================
       NOMBRE DEL MEDIO
    ===================================================== */

    .cm-editorial-signature__name {

        margin: 0 0 4px;

        font-family:
            Georgia,
            "Times New Roman",
            serif;

        font-size: 14px;

        line-height: 1.3;

        font-weight: 600;

        letter-spacing: .05px;

        color: #292929;

    }


    /* =====================================================
       ETIQUETA EDITORIAL
    ===================================================== */

    .cm-editorial-signature__label {

        margin: 0 0 8px;

        font-family:
            Inter,
            Arial,
            sans-serif;

        font-size: 8px;

        line-height: 1.3;

        font-weight: 500;

        letter-spacing: 1.7px;

        text-transform: uppercase;

        color: #8a8680;

    }


    /* =====================================================
       TEXTO EDITORIAL
       BLOQUE AISLADO DEL CSS GENERAL DEL ARTÍCULO
    ===================================================== */

    .cm-editorial-signature
    .cm-editorial-signature__text {

        display: block;

        margin: 0;

        padding: 0;

        max-width: 570px;

        font-family:
            Georgia,
            "Times New Roman",
            serif;

        font-size: var(--cm-editorial-note-size);

        line-height: 1.5;

        font-weight: 400;

        letter-spacing: 0;

        color: #77736d;

        text-transform: none;

        text-align: left;

        text-decoration: none;

    }


    /* =====================================================
       ÉNFASIS DEL TEXTO
    ===================================================== */

    .cm-editorial-signature
    .cm-editorial-signature__text em {

        font-family:
            Georgia,
            "Times New Roman",
            serif;

        font-size: inherit;

        font-weight: inherit;

        line-height: inherit;

        letter-spacing: inherit;

        color: inherit;

        font-style: italic;

    }


    /* =====================================================
       BLOQUE DE COMPARTIR
    ===================================================== */

    .cm-share-editorial {

        width: 100%;

        margin: 0 0 68px;

        padding: 0;

    }


    /* =====================================================
       CONTENEDOR
    ===================================================== */

    .cm-share-editorial__inner {

        display: flex;

        align-items: center;

        justify-content: flex-start;

        gap: 0;

    }


    /* =====================================================
       ICONOS
    ===================================================== */

    .cm-share-editorial__icons {

        display: flex;

        align-items: center;

        gap: 20px;

    }


    /* =====================================================
       ENLACES
    ===================================================== */

    .cm-share-editorial__icons a {

        position: relative;

        display: inline-flex;

        align-items: center;

        justify-content: center;

        width: 22px;

        height: 22px;

        padding: 0;

        margin: 0;

        border: 0;

        background: transparent;

        color: #080807;

        text-decoration: none;

        transition:
            color .18s ease,
            transform .18s ease;

    }


    /* =====================================================
       HOVER
    ===================================================== */

    .cm-share-editorial__icons a:hover {

        color: #171717;

        transform: translateY(-1px);

    }


    /* =====================================================
       FOCUS
    ===================================================== */

    .cm-share-editorial__icons a:focus-visible {

        outline: 1px solid #aaa59e;

        outline-offset: 4px;

    }


    /* =====================================================
       ICONOS FONT AWESOME
    ===================================================== */

    .cm-share-editorial__icons i {

        display: block;

        font-size: 16px;

        line-height: 1;

        color: currentColor;

    }


    /* =====================================================
       FACEBOOK
    ===================================================== */

    .cm-share-editorial__icons
    .cm-share-facebook i {

        font-size: 16px;

    }


    /* =====================================================
       LINKEDIN
    ===================================================== */

    .cm-share-editorial__icons
    .cm-share-linkedin i {

        font-size: 17px;

    }


    /* =====================================================
       TELEGRAM
    ===================================================== */

    .cm-share-editorial__icons
    .cm-share-telegram i {

        font-size: 17px;

    }


    /* =====================================================
       WHATSAPP
    ===================================================== */

    .cm-share-editorial__icons
    .cm-share-whatsapp i {

        font-size: 18px;

    }


    /* =====================================================
       EMAIL
    ===================================================== */

    .cm-share-editorial__icons
    .cm-share-email i {

        font-size: 15px;

    }


    /* =====================================================
       X
    ===================================================== */

    .cm-share-editorial__x {

        display: block;

        width: 15px;

        height: 15px;

        fill: currentColor;

    }


    /* =====================================================
       MOBILE
    ===================================================== */

    @media (max-width: 600px) {

        .cm-editorial-signature {

            margin: 64px 0 22px;

            --cm-editorial-note-size: 7px;

        }


        .cm-editorial-signature__line {

            width: 32px;

            margin-bottom: 12px;

        }


        .cm-editorial-signature__name {

            font-size: 13px;

        }


        .cm-editorial-signature__label {

            font-size: 7.5px;

            letter-spacing: 1.5px;

            margin-bottom: 7px;

        }


        .cm-editorial-signature
        .cm-editorial-signature__text {

            font-size: var(--cm-editorial-note-size);

            line-height: 1.5;

            max-width: 100%;

        }


        .cm-share-editorial {

            margin-bottom: 48px;

        }


        .cm-share-editorial__icons {

            gap: 19px;

        }


        .cm-share-editorial__icons a {

            width: 21px;

            height: 21px;

        }


        .cm-share-editorial__icons i {

            font-size: 15px;

        }


        .cm-share-editorial__icons
        .cm-share-whatsapp i {

            font-size: 17px;

        }


        .cm-share-editorial__x {

            width: 14px;

            height: 14px;

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
                Firma Código Millonario
            </div>


            <div class="cm-editorial-signature__label">
                Análisis Editorial
            </div>


            <div class="cm-editorial-signature__text">

                <em>
                    Este contenido analiza distintas trayectorias,
                    decisiones y formas de construir patrimonio.
                    No plantea una fórmula para copiar en la vida real;
                    cualquier decisión financiera debe analizarse de acuerdo
                    con sus riesgos y circunstancias.
                </em>

            </div>

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


        /* =====================================================
           FACEBOOK
           ===================================================== */

        widget.querySelector(
            ".cm-share-facebook"
        ).href =
            "https://www.facebook.com/sharer/sharer.php?u=" +
            encodedURL;


        /* =====================================================
           X
           ===================================================== */

        widget.querySelector(
            ".cm-share-x"
        ).href =
            "https://twitter.com/intent/tweet?url=" +
            encodedURL +
            "&text=" +
            encodedTitle;


        /* =====================================================
           LINKEDIN
           ===================================================== */

        widget.querySelector(
            ".cm-share-linkedin"
        ).href =
            "https://www.linkedin.com/sharing/share-offsite/?url=" +
            encodedURL;


        /* =====================================================
           TELEGRAM
           ===================================================== */

        widget.querySelector(
            ".cm-share-telegram"
        ).href =
            "https://t.me/share/url?url=" +
            encodedURL +
            "&text=" +
            encodedTitle;


        /* =====================================================
           WHATSAPP
           ===================================================== */

        widget.querySelector(
            ".cm-share-whatsapp"
        ).href =
            "https://api.whatsapp.com/send?text=" +
            encodedTitle +
            "%0A%0A" +
            encodedURL;


        /* =====================================================
           EMAIL
           ===================================================== */

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


        /* =====================================================
           NUEVA PESTAÑA
           ===================================================== */

        widget
            .querySelectorAll("a")
            .forEach(function (link) {

                if (
                    !link.classList.contains(
                        "cm-share-email"
                    )
                ) {

                    link.target =
                        "_blank";


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
       7. BUSCAR CONTENIDO PRINCIPAL
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


        /* =====================================================
           EVITAR DUPLICADOS
           ===================================================== */

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


        /* =====================================================
           CONTENEDOR EXISTENTE
           ===================================================== */

        const existingShare =
            findExistingShareContainer();


        if (existingShare) {


            const signature =
                createEditorialSignature();


            const widget =
                createShareWidget();


            configureShareLinks(
                widget
            );


            existingShare.appendChild(
                signature
            );


            existingShare.appendChild(
                widget
            );


            return;

        }


        /* =====================================================
           CONTENIDO DEL ARTÍCULO
           ===================================================== */

        const article =
            findArticleContainer();


        if (!article) {

            return;

        }


        const signature =
            createEditorialSignature();


        const widget =
            createShareWidget();


        configureShareLinks(
            widget
        );


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