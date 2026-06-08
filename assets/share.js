(function () {

    // Cargar Font Awesome UNA sola vez
    if (!document.querySelector("#fa-share-icons")) {
        const link = document.createElement("link");
        link.id = "fa-share-icons";
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
        document.head.appendChild(link);
    }

    // Crear estilos
    const style = document.createElement("style");
    style.innerHTML = `
    .share-widget{
        font-family:'Inter',sans-serif;
        margin-top:40px;
        width:100%;
    }

    .share-widget .share-container{
        border-top:1px solid #e7e5e4;
        border-bottom:1px solid #e7e5e4;
        padding:20px 0;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
    }

    .share-widget .share-text{
        margin-right:18px;
        color:#78716c;
        font-size:13px;
        text-transform:uppercase;
        letter-spacing:.12em;
        font-weight:500;
    }

    .share-widget .share-icons{
        display:flex;
        align-items:center;
        gap:18px;
    }

    .share-widget .share-icons a{
        text-decoration:none;
        color:#57534e;
        font-size:18px;
        display:flex;
        align-items:center;
        transition:opacity .25s ease;
    }

    .share-widget .share-icons a:hover{
        opacity:.65;
    }

    .share-widget .icon-x{
        width:18px;
        height:18px;
        fill:currentColor;
    }

    /* Neutralizar colores llamativos */
    .share-widget .facebook:hover,
    .share-widget .twitter:hover,
    .share-widget .linkedin:hover,
    .share-widget .telegram:hover,
    .share-widget .whatsapp:hover,
    .share-widget .email:hover{
        color:#57534e;
    }

    @media (max-width:600px){

        .share-widget{
            margin-top:30px;
        }

        .share-widget .share-container{
            flex-direction:column;
            align-items:flex-start;
            gap:14px;
            padding:16px 0;
        }

        .share-widget .share-text{
            margin-right:0;
        }

        .share-widget .share-icons{
            gap:14px;
            flex-wrap:wrap;
        }

        .share-widget .share-icons a{
            font-size:17px;
        }

        .share-widget .icon-x{
            width:17px;
            height:17px;
        }
    }
    `;
    document.head.appendChild(style);

    // Crear HTML
    function createShare() {
        const div = document.createElement("div");
        div.className = "share-widget";

        div.innerHTML = `
        <div class="share-container">
            <span class="share-text">Comparte en:</span>

            <div class="share-icons">

                <a href="#" class="facebook fb" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>

                <a href="#" class="twitter tw" aria-label="X">
                    <svg viewBox="0 0 24 24" class="icon-x">
                        <path d="M18.244 2H21.5l-7.5 8.573L22 22h-6.828l-5.35-6.996L3.5 22H.244l8.034-9.177L0 2h6.828l4.843 6.347L18.244 2z"/>
                    </svg>
                </a>

                <a href="#" class="linkedin ln" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                </a>

                <a href="#" class="telegram tg" aria-label="Telegram">
                    <i class="fab fa-telegram-plane"></i>
                </a>

                <a href="#" class="whatsapp wa" aria-label="WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>

                <a href="#" class="email em" aria-label="Email">
                    <i class="fas fa-envelope"></i>
                </a>

            </div>
        </div>
        `;
        return div;
    }

    document.addEventListener("DOMContentLoaded", function () {

        document.querySelectorAll(".share-here").forEach(container => {

            const widget = createShare();
            container.appendChild(widget);

            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(document.title);

            widget.querySelector(".fb").href =
                "https://www.facebook.com/sharer/sharer.php?u=" + url;

            widget.querySelector(".tw").href =
                "https://twitter.com/intent/tweet?url=" + url + "&text=" + text;

            widget.querySelector(".ln").href =
                "https://www.linkedin.com/sharing/share-offsite/?url=" + url;

            widget.querySelector(".tg").href =
                "https://t.me/share/url?url=" + url + "&text=" + text;

            widget.querySelector(".wa").href =
                "https://api.whatsapp.com/send?text=" + text + "%20" + url;

            widget.querySelector(".em").addEventListener("click", function (e) {
                e.preventDefault();

                window.location.href =
                    "mailto:?subject=" + text + "&body=" + text + "%0A%0A" + url;
            });

            widget.querySelectorAll("a").forEach(a => {
                a.target = "_blank";
            });

        });

    });

})();