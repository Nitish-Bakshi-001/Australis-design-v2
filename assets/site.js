/* ============================================================
   AUSTRALIS — shared site chrome + behaviours
   ============================================================ */
(function(){
  "use strict";

  document.documentElement.classList.add("has-js");

  /* ---------- site config (placeholders — easy to swap) ---------- */
  var SITE = {
    phone:"0432 530 957",
    phoneHref:"tel:+61432530957",
    email:"info@australispropertyconveyancing.com.au",
    website:"www.australisconveyancing.com.au",
    whatsapp:"https://wa.me/61400000000",
    licence:"Licensed Conveyancer · Lic. No. 00XXXXX",
    abn:"ABN 00 000 000 000",
    address:"Melbourne, VIC 3000"
  };
  var BASE = location.pathname.replace(/[^\/]*$/, "");
  var NAV = [
    {label:"About", href:"about.html"},
    {label:"Services", href:"services.html"},
    {label:"Blog", href:"blog.html"},
    {label:"Resources", href:"resources.html"},
    {label:"Contact", href:"contact.html"}
  ];
  var here = (location.pathname.split("/").pop() || "index.html");

  function isActive(href){
    if(href==="index.html") return here==="index.html"||here==="";
    return here===href;
  }

  /* ---------- ICONS ---------- */
  var I = {
    phone:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.2.2-.4.4-.2.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3 0 .2 0 .8-.2 1.3z"/></svg>',
    lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>',
    globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4L4 6v14l5-2 6 2 5-2V4l-5 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>'
  };

  /* ---------- NAV ---------- */
  function buildNav(){
    var links = NAV.map(function(n){
      return '<a href="'+BASE+n.href+'"'+(isActive(n.href)?' class="active"':'')+'>'+n.label+'</a>';
    }).join("");
    var nav = document.createElement("header");
    nav.className="nav";
    nav.innerHTML =
      '<div class="navwrap">'+
        '<a class="brand" href="'+BASE+'index.html" aria-label="Australis Property Conveyancing home">'+
          '<span class="brandmark"><img src="'+BASE+'assets/logo-mark.png" alt=""></span>'+
          '<span class="brandword">Australis<span>Property Conveyancing</span></span>'+
        '</a>'+
        '<nav class="links" aria-label="Primary">'+links+'</nav>'+
        '<div class="navactions">'+
          '<a class="phone" href="'+SITE.phoneHref+'">'+I.phone+SITE.phone+'</a>'+
          '<a class="btn btn-primary" href="'+BASE+'contact.html">Get a Free Quote</a>'+
          '<button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>'+
        '</div>'+
      '</div>';
    document.body.insertBefore(nav, document.body.firstChild);

    var drawer = document.createElement("div");
    drawer.className="drawer";
    drawer.innerHTML =
      '<div class="scrim"></div>'+
      '<div class="panel">'+
        NAV.map(function(n){return '<a href="'+BASE+n.href+'">'+n.label+'</a>';}).join("")+
        '<a class="btn btn-primary full" href="'+BASE+'contact.html">Get a Free Quote</a>'+
        '<a class="dphone" href="'+SITE.phoneHref+'">'+SITE.phone+'</a>'+
      '</div>';
    document.body.insertBefore(drawer, document.body.firstChild);

    var burger = nav.querySelector(".burger");
    function toggle(open){
      document.body.classList.toggle("nav-open", open);
      burger.setAttribute("aria-expanded", open?"true":"false");
    }
    burger.addEventListener("click", function(){ toggle(!document.body.classList.contains("nav-open")); });
    drawer.querySelector(".scrim").addEventListener("click", function(){ toggle(false); });
    drawer.querySelectorAll(".panel a").forEach(function(a){ a.addEventListener("click", function(){ toggle(false); }); });

    function onScroll(){ nav.classList.toggle("scrolled", window.scrollY>16); }
    onScroll(); window.addEventListener("scroll", onScroll, {passive:true});
  }

  /* ---------- CTA band + FOOTER ---------- */
  function buildFooter(){
    var host = document.getElementById("site-footer");
    if(!host) return;
    var ctaTitle = host.getAttribute("data-cta-title");
    var ctaText  = host.getAttribute("data-cta-text") || "Free, no obligation. We reply within 24 hours.";
    var html = "";
    if(ctaTitle && ctaTitle!=="none"){
      html +=
      '<section class="ctaband parallax-bg"><div class="inner wrap reveal">'+
        '<div class="eyebrow on-dark" style="justify-content:center;margin-bottom:18px;">Get Started</div>'+
        '<h2>'+ctaTitle+'</h2>'+
        '<p>'+ctaText+'</p>'+
        '<div class="actions">'+
          '<a class="btn btn-primary btn-lg" href="'+BASE+'contact.html">Get a Free Quote'+I.arrow+'</a>'+
          '<a class="btn btn-ghost-light btn-lg" href="'+SITE.phoneHref+'">Call '+SITE.phone+'</a>'+
        '</div>'+
      '</div></section>';
    }
    html +=
    '<footer class="footer"><div class="wrap">'+
      '<div class="cols">'+
        '<div>'+
          '<div class="flogo">'+
            '<span class="chip"><img src="'+BASE+'assets/logo-mark.png" alt=""></span>'+
            '<span class="ftext">Australis<span>Property Conveyancing</span></span>'+
          '</div>'+
          '<p class="brandblurb">Boutique Melbourne conveyancing led by Ravinder Pal Kaur Virk. Fixed-fee, plain-English, and personal — from first contract to settlement day.</p>'+
          '<div class="badges">'+
            '<span class="badge">AIC Member</span><span class="badge">PEXA</span><span class="badge">★ 5.0 Google</span>'+
          '</div>'+
        '</div>'+
        '<div>'+
          '<h4>Explore</h4>'+
          '<ul>'+NAV.map(function(n){return '<li><a href="'+BASE+n.href+'">'+n.label+'</a></li>';}).join("")+
          '<li><a href="'+BASE+'index.html">Home</a></li></ul>'+
        '</div>'+
        '<div>'+
          '<h4>Services</h4>'+
          '<ul>'+
            '<li><a href="'+BASE+'services.html">Residential</a></li>'+
            '<li><a href="'+BASE+'services.html">Commercial</a></li>'+
            '<li><a href="'+BASE+'services.html">Contract Review</a></li>'+
            '<li><a href="'+BASE+'services.html">Off-the-Plan</a></li>'+
            '<li><a href="'+BASE+'services.html">First Home Buyers</a></li>'+
          '</ul>'+
        '</div>'+
        '<div>'+
          '<h4>Contact</h4>'+
          '<ul class="fcontact">'+
            '<li><span class="fic">'+I.phone+'</span><a href="'+SITE.phoneHref+'">'+SITE.phone+'</a></li>'+
            '<li><span class="fic">'+I.mail+'</span><a href="mailto:'+SITE.email+'">'+SITE.email+'</a></li>'+
            '<li><span class="fic">'+I.globe+'</span><a href="https://'+SITE.website+'" target="_blank" rel="noopener">'+SITE.website+'</a></li>'+
            '<li class="muted"><span class="fic">'+I.pin+'</span><span>'+SITE.address+'</span></li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
      '<div class="botstrip">'+
        '<span>'+SITE.licence+' · '+SITE.abn+'</span>'+
        '<span>Liability limited by a scheme approved under Professional Standards Legislation.</span>'+
        '<span>© '+new Date().getFullYear()+' Australis Property Conveyancing</span>'+
      '</div>'+
    '</div></footer>';
    host.innerHTML = html;
  }

  /* ---------- WhatsApp sticky ---------- */
  function buildWhatsApp(){
    var a = document.createElement("a");
    a.className="wa"; a.href=SITE.whatsapp; a.setAttribute("aria-label","Chat on WhatsApp"); a.target="_blank"; a.rel="noopener";
    a.innerHTML = '<span class="tip">Chat with us on WhatsApp</span>'+I.wa;
    document.body.appendChild(a);
  }

  /* ---------- scroll reveal (position-based — robust in all iframes) ---------- */
  function reveal(){
    var els = [].slice.call(document.querySelectorAll(".reveal"));
    var ticking=false;
    function check(){
      ticking=false;
      var h = window.innerHeight || document.documentElement.clientHeight;
      for(var i=els.length-1;i>=0;i--){
        var e=els[i];
        var top=e.getBoundingClientRect().top;
        if(top < h*0.92){ e.classList.add("in"); els.splice(i,1); }
      }
    }
    function onScroll(){ if(!ticking){ ticking=true; requestAnimationFrame(check); } }
    check();
    window.addEventListener("scroll", onScroll, {passive:true});
    window.addEventListener("resize", onScroll, {passive:true});
    // safety net: never leave content hidden
    setTimeout(function(){ els.forEach(function(e){ e.classList.add("in"); }); }, 1800);
  }

  /* ---------- accordion ---------- */
  function accordion(){
    document.querySelectorAll(".acc-item").forEach(function(item){
      var q = item.querySelector(".acc-q");
      var a = item.querySelector(".acc-a");
      if(!q||!a) return;
      q.addEventListener("click", function(){
        var open = item.classList.contains("open");
        if(open){ a.style.height = a.scrollHeight+"px"; requestAnimationFrame(function(){ a.style.height="0px"; }); item.classList.remove("open"); }
        else{ item.classList.add("open"); a.style.height = a.scrollHeight+"px"; a.addEventListener("transitionend", function te(){ a.style.height="auto"; a.removeEventListener("transitionend", te); }); }
      });
    });
  }

  /* ---------- TWEAKS ---------- */
  var TWEAK_DEFAULTS = {accent:"#0E9E99", display:"Grotesk", density:"default", radius:"default"};
  var ACCENTS = {
    "#0E9E99":{bright:"#16BFB7", wash:"#E8F6F5"},
    "#127E8C":{bright:"#1AA0B0", wash:"#E6F3F5"},
    "#1F6FB2":{bright:"#2E89D6", wash:"#E8F1FA"},
    "#C6A15B":{bright:"#D8B774", wash:"#F7F1E4"}
  };
  var DISPLAYS = {
    "Grotesk":'"Hanken Grotesk", "Helvetica Neue", Arial, sans-serif',
    "Serif":'"Fraunces", Georgia, serif'
  };
  var DENSITY = {compact:"clamp(48px,6vw,84px)", default:"clamp(64px,9vw,124px)", airy:"clamp(80px,11vw,156px)"};
  var RADII = {
    sharp:{card:"6px",media:"8px",btn:"4px",input:"6px"},
    default:{card:"18px",media:"20px",btn:"8px",input:"10px"},
    soft:{card:"26px",media:"30px",btn:"14px",input:"14px"}
  };
  function loadTweaks(){
    try{ return Object.assign({}, TWEAK_DEFAULTS, JSON.parse(localStorage.getItem("australis-tweaks")||"{}")); }
    catch(e){ return Object.assign({}, TWEAK_DEFAULTS); }
  }
  function applyTweaks(t){
    var r = document.documentElement.style;
    var a = ACCENTS[t.accent]||ACCENTS["#0E9E99"];
    r.setProperty("--reef-teal", t.accent);
    r.setProperty("--reef-bright", a.bright);
    r.setProperty("--teal-wash", a.wash);
    r.setProperty("--font-display", DISPLAYS[t.display]||DISPLAYS.Grotesk);
    r.setProperty("--sec-pad", DENSITY[t.density]||DENSITY.default);
    var rad = RADII[t.radius]||RADII.default;
    r.setProperty("--r-card",rad.card); r.setProperty("--r-media",rad.media); r.setProperty("--r-btn",rad.btn); r.setProperty("--r-input",rad.input);
  }
  function buildTweaks(){
    var t = loadTweaks();
    applyTweaks(t);
    var panel = document.createElement("div");
    panel.id="tweaks";
    function swatches(){
      return Object.keys(ACCENTS).map(function(c){
        return '<span class="swatch'+(t.accent===c?' sel':'')+'" data-accent="'+c+'" style="background:'+c+'"></span>';
      }).join("");
    }
    function seg(name, opts){
      return opts.map(function(o){
        return '<button data-tk="'+name+'" data-val="'+o+'" class="'+(t[name]===o?'sel':'')+'">'+o.charAt(0).toUpperCase()+o.slice(1)+'</button>';
      }).join("");
    }
    panel.innerHTML =
      '<div class="tk-head"><b>Tweaks</b><button id="tk-close" aria-label="Close">×</button></div>'+
      '<div class="tk-body">'+
        '<div class="tk-sec"><label>Accent colour</label><div class="swatches">'+swatches()+'</div></div>'+
        '<div class="tk-sec"><label>Display font</label><div class="seg-tk">'+seg("display",["Grotesk","Serif"])+'</div></div>'+
        '<div class="tk-sec"><label>Section spacing</label><div class="seg-tk">'+seg("density",["compact","default","airy"])+'</div></div>'+
        '<div class="tk-sec"><label>Corner radius</label><div class="seg-tk">'+seg("radius",["sharp","default","soft"])+'</div></div>'+
      '</div>';
    document.body.appendChild(panel);

    function save(){ localStorage.setItem("australis-tweaks", JSON.stringify(t)); applyTweaks(t); window.parent.postMessage({type:"__edit_mode_set_keys", edits:t}, "*"); }

    panel.querySelectorAll(".swatch").forEach(function(s){
      s.addEventListener("click", function(){
        t.accent = s.getAttribute("data-accent");
        panel.querySelectorAll(".swatch").forEach(function(x){x.classList.toggle("sel", x===s);});
        save();
      });
    });
    panel.querySelectorAll("[data-tk]").forEach(function(b){
      b.addEventListener("click", function(){
        var name=b.getAttribute("data-tk"), val=b.getAttribute("data-val");
        t[name]=val;
        panel.querySelectorAll('[data-tk="'+name+'"]').forEach(function(x){x.classList.toggle("sel", x===b);});
        save();
      });
    });
    panel.querySelector("#tk-close").addEventListener("click", function(){
      panel.classList.remove("show");
      window.parent.postMessage({type:"__edit_mode_dismissed"}, "*");
    });

    // drag
    (function(){
      var head = panel.querySelector(".tk-head"), down=false, sx,sy,ox,oy;
      head.addEventListener("mousedown", function(e){
        if(e.target.id==="tk-close") return;
        down=true; sx=e.clientX; sy=e.clientY;
        var r=panel.getBoundingClientRect(); ox=r.left; oy=r.top;
        panel.style.left=ox+"px"; panel.style.top=oy+"px"; panel.style.right="auto"; panel.style.bottom="auto";
        e.preventDefault();
      });
      window.addEventListener("mousemove", function(e){ if(!down)return; panel.style.left=(ox+e.clientX-sx)+"px"; panel.style.top=(oy+e.clientY-sy)+"px"; });
      window.addEventListener("mouseup", function(){ down=false; });
    })();

    // host protocol
    window.addEventListener("message", function(e){
      var ty = e && e.data && e.data.type;
      if(ty==="__activate_edit_mode") panel.classList.add("show");
      else if(ty==="__deactivate_edit_mode") panel.classList.remove("show");
    });
    window.parent.postMessage({type:"__edit_mode_available"}, "*");
  }

  /* ---------- hero slideshow ---------- */
  function heroSlides(){
    var wrap = document.getElementById("heroSlides");
    if(!wrap) return;
    var slides = [].slice.call(wrap.querySelectorAll(".hero2-slide"));
    if(slides.length < 2) return;
    var dotsWrap = document.getElementById("heroDots");
    var i = 0, timer = null, DELAY = 4200;

    var dots = slides.map(function(_, n){
      var d = document.createElement("button");
      d.className = "hero2-dot" + (n===0?" is-active":"");
      d.setAttribute("aria-label","Show image "+(n+1));
      d.addEventListener("click", function(){ go(n); reset(); });
      if(dotsWrap) dotsWrap.appendChild(d);
      return d;
    });

    function go(n){
      slides[i].classList.remove("is-active");
      dots[i].classList.remove("is-active");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("is-active");
      dots[i].classList.add("is-active");
    }
    function next(){ go(i+1); }
    function start(){
      if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = setInterval(next, DELAY);
    }
    function reset(){ if(timer){ clearInterval(timer); start(); } }
    start();
    document.addEventListener("visibilitychange", function(){
      if(document.hidden){ clearInterval(timer); timer=null; }
      else if(!timer){ start(); }
    });
  }

  /* ---------- init ---------- */
  function init(){
    buildNav();
    buildFooter();
    buildWhatsApp();
    buildTweaks();
    reveal();
    accordion();
    heroSlides();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.AUSTRALIS = {SITE:SITE, I:I};
})();
