/* ============================================================
   AUSTRALIS — multi-step conditional quote form
   ============================================================ */
(function(){
  "use strict";
  var form = document.getElementById("quote-form");
  if(!form) return;

  var state = {path:null, step:1};
  var TOTAL = 3;

  var els = {
    steps: [].slice.call(form.querySelectorAll(".fstep")),
    progress: [].slice.call(document.querySelectorAll(".form-progress .pstep")),
    back: form.querySelector("[data-back]"),
    next: form.querySelector("[data-next]"),
    submit: form.querySelector("[data-submit]"),
    success: document.getElementById("quote-success"),
    card: document.getElementById("quote-card"),
    pathLabel: form.querySelector("[data-pathlabel]")
  };

  /* ---- segmented control (step 1) ---- */
  form.querySelectorAll(".seg").forEach(function(seg){
    seg.addEventListener("click", function(){
      form.querySelectorAll(".seg").forEach(function(s){ s.classList.toggle("sel", s===seg); s.setAttribute("aria-pressed", s===seg?"true":"false"); });
      state.path = seg.getAttribute("data-path");
      // toggle conditional field groups
      form.querySelectorAll("[data-pathgroup]").forEach(function(g){
        var on = g.getAttribute("data-pathgroup")===state.path;
        g.style.display = on ? "block" : "none";
        g.querySelectorAll("input,select,textarea").forEach(function(f){ f.disabled = !on; });
      });
      if(els.pathLabel) els.pathLabel.textContent = ({buying:"buying quote",selling:"selling quote",transferring:"transfer quote"})[state.path];
      // auto-advance for snappy feel
      go(2);
    });
  });

  /* ---- preferred contact pills (step 3) ---- */
  form.querySelectorAll(".pills").forEach(function(group){
    group.querySelectorAll(".pill").forEach(function(pill){
      pill.addEventListener("click", function(){
        group.querySelectorAll(".pill").forEach(function(p){ p.classList.toggle("sel", p===pill); });
        var hidden = group.parentNode.querySelector('input[type=hidden]');
        if(hidden) hidden.value = pill.getAttribute("data-val");
      });
    });
  });

  /* ---- validation ---- */
  function setError(field, on){
    var wrap = field.closest(".field");
    if(wrap) wrap.classList.toggle("invalid", on);
    field.classList.toggle("err", on);
  }
  function validEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function validPhone(v){ return v.replace(/[^0-9]/g,"").length >= 8; }

  function validateStep(step){
    var ok = true, firstBad = null;
    if(step===1){
      if(!state.path){ flashSeg(); return false; }
      return true;
    }
    var scope = els.steps[step-1];
    scope.querySelectorAll("input,select,textarea").forEach(function(f){
      if(f.disabled) return;
      if(!f.hasAttribute("required")) return;
      var v = (f.value||"").trim();
      var bad = !v;
      if(!bad && f.type==="email") bad = !validEmail(v);
      if(!bad && f.getAttribute("data-phone")!=null) bad = !validPhone(v);
      setError(f, bad);
      if(bad){ ok=false; if(!firstBad) firstBad=f; }
    });
    if(firstBad) firstBad.focus();
    return ok;
  }

  function flashSeg(){
    var seg = form.querySelector(".segment");
    seg.animate([{transform:"translateX(0)"},{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],{duration:300});
  }

  /* clear error on input */
  form.querySelectorAll("input,select,textarea").forEach(function(f){
    f.addEventListener("input", function(){ if(f.value.trim()) setError(f,false); });
    f.addEventListener("change", function(){ if(f.value.trim()) setError(f,false); });
  });

  /* ---- navigation ---- */
  function render(){
    els.steps.forEach(function(s,i){ s.classList.toggle("active", i===state.step-1); });
    els.progress.forEach(function(p,i){
      p.classList.toggle("active", i===state.step-1);
      p.classList.toggle("done", i < state.step-1);
    });
    els.back.style.visibility = state.step>1 ? "visible" : "hidden";
    els.next.style.display = state.step<TOTAL ? "inline-flex" : "none";
    els.submit.style.display = state.step===TOTAL ? "inline-flex" : "none";
    if(els.card) els.card.scrollTop = 0;
  }
  function go(step){
    if(step>state.step && !validateStep(state.step)) return;
    state.step = Math.max(1, Math.min(TOTAL, step));
    render();
  }
  els.next.addEventListener("click", function(){ go(state.step+1); });
  els.back.addEventListener("click", function(){ go(state.step-1); });

  form.addEventListener("submit", function(e){
    e.preventDefault();
    if(!validateStep(TOTAL)) return;
    // success
    els.card.classList.add("submitted");
    form.style.display="none";
    document.querySelector(".form-progress").style.display="none";
    els.success.classList.add("show");
    var nm = (form.querySelector("#q-name")||{}).value || "";
    var first = nm.trim().split(" ")[0];
    var hi = els.success.querySelector("[data-hello]");
    if(hi && first) hi.textContent = "Thanks, "+first+"!";
  });

  render();
})();
