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
    .share-widget { font-family: Arial, sans-serif; }
    .share-widget .share-container { display:flex; align-items:center; font-size:18px; color:#555; flex-wrap:wrap; }
    .share-widget .share-text { margin-right:15px; color:#666; }
    .share-widget .share-icons { display:flex; gap:22px; }
    .share-widget .share-icons a { text-decoration:none; color:#555; font-size:20px; transition:transform .2s ease,color .3s ease; display:flex; align-items:center; }
    .share-widget .share-icons a:hover { transform:scale(1.2); }
    .share-widget .icon-x { width:20px; height:20px; fill:currentColor; }
    .share-widget .facebook:hover { color:#1877f2; }
    .share-widget .twitter:hover { color:#000; }
    .share-widget .linkedin:hover { color:#0077b5; }
    .share-widget .telegram:hover { color:#0088cc; }
    .share-widget .whatsapp:hover { color:#25d366; }
    .share-widget .email:hover { color:#333; }

    @media (max-width:600px){
        .share-widget .share-container{ flex-direction:column; align-items:flex-start; gap:10px; }
        .share-widget .share-icons{ gap:14px; }
        .share-widget .share-icons a{ font-size:18px; }
        .share-widget .icon-x{ width:18px; height:18px; }
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
                <a href="#" class="facebook fb"><i class="fab fa-facebook-f"></i></a>

                <a href="#" class="twitter tw">
                    <svg viewBox="0 0 24 24" class="icon-x">
                        <path d="M18.244 2H21.5l-7.5 8.573L22 22h-6.828l-5.35-6.996L3.5 22H.244l8.034-9.177L0 2h6.828l4.843 6.347L18.244 2z"/>
                    </svg>
                </a>

                <a href="#" class="linkedin ln"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="telegram tg"><i class="fab fa-telegram-plane"></i></a>
                <a href="#" class="whatsapp wa"><i class="fab fa-whatsapp"></i></a>
                <a href="#" class="email em"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
        `;
        return div;
    }

    document.addEventListener("DOMContentLoaded", function () {

        // Buscar donde insertar (clase que tú decides)
        document.querySelectorAll(".share-here").forEach(container => {
            const widget = createShare();
            container.appendChild(widget);

            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(document.title);

            widget.querySelector(".fb").href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
            widget.querySelector(".tw").href = "https://twitter.com/intent/tweet?url=" + url + "&text=" + text;
            widget.querySelector(".ln").href = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
            widget.querySelector(".tg").href = "https://t.me/share/url?url=" + url + "&text=" + text;
            widget.querySelector(".wa").href = "https://api.whatsapp.com/send?text=" + text + "%20" + url;

            widget.querySelector(".em").addEventListener("click", function (e) {
                e.preventDefault();
                window.location.href = "mailto:?subject=" + text + "&body=" + text + "%0A%0A" + url;
            });

            widget.querySelectorAll("a").forEach(a => a.target = "_blank");
        });

    });

})();