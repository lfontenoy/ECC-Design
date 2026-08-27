/* Respaldo de carga para los UI kits.
   Si _ds_bundle.js aun no esta compilado (o el kit se abre fuera del proyecto),
   transpila los .jsx del sistema en el navegador y publica window.EntrenaConCienciaDesignSystem_ad72a9. */
window.__ensureDS=async function(base,extra){
  const NS='EntrenaConCienciaDesignSystem_ad72a9';
  if(window[NS]&&window[NS].Button) return window[NS];
  const CORE=['components/core/Button.jsx','components/core/IconButton.jsx','components/core/Badge.jsx','components/core/Tag.jsx','components/core/Card.jsx','components/core/Divider.jsx','components/core/Logo.jsx','components/core/Tabs.jsx','components/content/StatFigure.jsx','components/content/PmidRef.jsx','components/content/StudyMeta.jsx','components/content/MythBuster.jsx','components/content/Callout.jsx','components/forms/Input.jsx','components/forms/Select.jsx','components/forms/Checkbox.jsx','components/forms/Switch.jsx'];
  const ns=window[NS]=window[NS]||{};
  for(const p of CORE.concat(extra||[])){
    try{
      let src=await (await fetch(base+p)).text();
      src=src.replace(/^import[^\n]*\n/gm,'').replace(/export function/g,'function');
      const names=[...src.matchAll(/^function ([A-Z]\w*)/gm)].map(m=>m[1]);
      const code=Babel.transform(src,{presets:['react']}).code;
      new Function('React','NSOBJ',code+'\n;'+names.map(n=>'NSOBJ.'+n+'='+n+';').join(''))(React,ns);
    }catch(e){console.error('ensureDS: '+p,e)}
  }
  return ns;
};

/* --- Runtime del sistema ---
   Tres ayudantes que los kits y las cards invocan tras montar React. */

/* Iconos: Phosphor Light es una fuente de iconos, no un set que haya que
   hidratar. <i class="ph-light ph-x"> pinta solo, tambien en nodos que React
   inserta despues. __eccIcons() se conserva porque las cards ya la llaman, y
   ahora solo monta el grano y arma la revelacion. */
window.__eccIcons=function(){
  window.__eccGrain();
  window.__eccReveal();
};

/* Grano: una sola capa fija por documento. Adjuntarlo a cada superficie que
   scrollea fuerza repintado continuo de GPU; fijo al viewport se compone una
   vez. Los lienzos sociales usan .ecc-grain-canvas porque se exportan como
   imagen y una capa fija no entraria en la exportacion. */
window.__eccGrain=function(){
  if(document.querySelector('.ecc-grain-layer')) return;
  const g=document.createElement('div');
  g.className='ecc-grain-layer';
  g.setAttribute('aria-hidden','true');
  document.body.appendChild(g);
};

/* Revelacion por scroll con IntersectionObserver.
   Nunca un listener de 'scroll': ese dispara en cada frame y provoca reflow
   continuo.

   Dos cuidados que no son opcionales:
   1. React 18 hace commit de forma asincrona, asi que los nodos .ecc-reveal
      todavia no existen cuando el kit llama a esta funcion justo despues de
      render(). Un MutationObserver los recoge segun aparecen, en vez de
      confiar en una sola pasada.
   2. El estado oculto solo se activa si el runtime esta vivo: se marca
      [data-ecc-motion] en <html>. Si este archivo no carga o falla, el
      contenido queda visible en vez de invisible para siempre. */
window.__eccReveal=function(){
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(reduce||!('IntersectionObserver' in window)){
    /* Sin animacion: no se arma el estado oculto y todo queda a la vista. */
    document.documentElement.removeAttribute('data-ecc-motion');
    return;
  }
  document.documentElement.setAttribute('data-ecc-motion','');

  if(!window.__eccObserver){
    window.__eccObserver=new IntersectionObserver((entries,obs)=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        const el=e.target;
        el.classList.add('is-in');
        obs.unobserve(el);
        el.addEventListener('transitionend',()=>el.classList.add('is-done'),{once:true});
      });
    },{rootMargin:'0px 0px -12% 0px',threshold:.08});
  }

  const arm=()=>{
    document.querySelectorAll('.ecc-reveal:not([data-ecc-seen])').forEach(n=>{
      n.setAttribute('data-ecc-seen','1');
      window.__eccObserver.observe(n);
    });
  };
  arm();

  /* Vigila los nodos que React monte despues: cambios de vista, filtros,
     cualquier render posterior. */
  if(!window.__eccMutation){
    window.__eccMutation=new MutationObserver(()=>arm());
    window.__eccMutation.observe(document.body,{childList:true,subtree:true});
  }
};
