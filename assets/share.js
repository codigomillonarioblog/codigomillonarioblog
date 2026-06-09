(function () {

    // Cargar Font Awesome UNA sola vez
    if (!document.querySelector("#fa-share-icons")) {
        const link = document.createElement("link");
        link.id = "fa-share-icons";
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
        document.head.appendChild(link);
    }

    // Crear estilos modernos
    const style = document.createElement("style");
    style.innerHTML = `
    .share-widget{
        font-family: Inter, Arial, sans-serif;
        margin:20px 0;
    }

    .share-widget .share-container{
        display:flex;
        align-items:center;
        gap:18px;
        flex-wrap:wrap;
    }

    .share-widget .share-text{
        font-size:15px;
        font-weight:600;
        color:#444;
    }

    .share-widget .share-icons{
        display:flex;
        gap:10px;
        flex-wrap:wrap;
    }

    .share-widget .share-icons a{
        width:48px;
        height:48px;
        border-radius:12px;
        display:flex;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        color:#fff;
        transition:all .25s ease;
        box-shadow:0 4px 12px rgba(0,0,0,.12);
    }

    .share-widget .share-icons a:hover{
        transform:translateY(-3px);
        box-shadow:0 8px 20px rgba(0,0,0,.18);
    }

    .share-widget .share-icons i{
        font-size:22px;
        color:#fff;
    }

    .share-widget .icon-x{
        width:22px;
        height:22px;
        fill:#fff;
    }

    /* Colores oficiales */

    .share-widget .facebook{
        background:#1877F2;
    }

    .share-widget .twitter{
        background:#000000;
    }

    .share-widget .linkedin{
        background:#0A66C2;
    }

    .share-widget .telegram{
        background:#229ED9;
    }

    .share-widget .whatsapp{
        background:#25D366;
    }

    .share-widget .email{
        background:#6B7280;
    }

    @media (max-width:600px){

        .share-widget .share-container{
            flex-direction:column;
            align-items:flex-start;
        }

        .share-widget .share-icons a{
            width:44px;
            height:44px;
        }

        .share-widget .share-icons i{
            font-size:20px;
        }

        .share-widget .icon-x{
            width:20px;
            height:20px;
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
            <span class="share-text">Compartir:</span>

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
                    "mailto:?subject=" + text +
                    "&body=" + text + "%0A%0A" + url;
            });

            widget.querySelectorAll("a").forEach(a => {
                a.target = "_blank";
                a.rel = "noopener noreferrer";
            });

        });

    });

})();