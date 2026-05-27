// =========================
// TOC COMPONENT SYSTEM
// =========================

document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     ACORDEÓN
  ===================== */

  document.querySelectorAll('.cf-accordion-header').forEach(header=>{
    header.addEventListener('click',()=>{

      const item = header.closest('.cf-accordion-item');
      const content = item.querySelector('.cf-accordion-content');

      document.querySelectorAll('.cf-accordion-item').forEach(other=>{
        if(other!==item){
          other.querySelector('.cf-accordion-content').style.maxHeight=null;
        }
      });

      item.classList.toggle('is-open');

      content.style.maxHeight =
        content.style.maxHeight ? null : content.scrollHeight+'px';

    });
  });


  /* =====================
     SCROLL SUAVE
  ===================== */

  const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

  document.querySelectorAll('.toc-list a').forEach(link=>{
    link.addEventListener('click', e=>{

      e.preventDefault();

      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);

      if(!target) return;

      const offset = 140;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      history.pushState(null,null,'#'+id);

      if(isMobile){
        window.scrollTo({
          top,
          behavior:'smooth'
        });
      } else {
        const start = window.pageYOffset;
        const distance = top - start;
        const duration = 650;
        let t = null;

        function animate(time){
          if(!t) t = time;
          const p = Math.min((time - t)/duration,1);
          const ease = 1 - Math.pow(1 - p,3);

          window.scrollTo(0, start + distance*ease);

          if(p < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
      }

    });
  });

});