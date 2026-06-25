/* ============================================================
   AUSTRALIS — testimonials infinite marquee (pause on hover)
   ============================================================ */
(function(){
  "use strict";
  function init(){
    var track = document.getElementById("tcarousel-track");
    if(!track) return;
    var viewport = track.parentElement; // .tcarousel
    var GAP = 22;

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // size cards so exactly 3 (then 2, then 1) are visible like the original layout
    var originals = [].slice.call(track.children);
    var groupCount = originals.length;

    function visibleCount(){
      var w = window.innerWidth;
      if(w <= 620) return 1;
      return 2;
    }
    function sizeCards(){
      var vis = visibleCount();
      var w = viewport.getBoundingClientRect().width;
      if(w < 1){ return false; } // layout not ready — don't write 0px
      var cardw = (w - (vis-1)*GAP) / vis;
      track.style.setProperty("--tcardw", cardw + "px");
      return true;
    }
    function ensureSized(tries){
      if(sizeCards()) return;
      if(tries > 0) requestAnimationFrame(function(){ ensureSized(tries-1); });
    }

    ensureSized(30);

    // duplicate the card set once so the loop is seamless
    originals.forEach(function(card){
      var clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden","true");
      track.appendChild(clone);
    });

    function measure(){
      if(!sizeCards()) return;
      var cards = track.children;
      if(cards.length < groupCount+1) return;
      // distance from first card to the first card of the cloned set = exact loop length
      var dist = cards[groupCount].offsetLeft - cards[0].offsetLeft;
      if(dist < 1) return;
      track.style.setProperty("--tdist", dist + "px");
      // constant speed ~ 55px/sec
      var dur = Math.max(18, Math.round(dist / 55));
      track.style.setProperty("--tdur", dur + "s");
      if(!reduce) track.classList.add("running");
    }

    measure();

    var t;
    window.addEventListener("resize", function(){ clearTimeout(t); t=setTimeout(measure, 160); });
    window.addEventListener("load", measure);
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    // first non-zero layout pass (covers grid/font settling after init)
    if(typeof ResizeObserver !== "undefined"){
      var ro = new ResizeObserver(function(){ measure(); });
      ro.observe(viewport);
    }
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
