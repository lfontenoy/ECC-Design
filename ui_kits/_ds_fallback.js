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

/* Iconos Lucide: createIcons() sustituye cada <i data-lucide> por un <svg>, asi que hay que
   llamarlo DESPUES de que React haya hecho commit — y otra vez tras cada render que anada
   iconos nuevos. Este helper reintenta durante 2s y se re-dispara con cada clic. */
window.__eccIcons=function(){
  const paint=()=>{try{window.lucide&&window.lucide.createIcons({attrs:{'stroke-width':2}})}catch(e){}};
  let n=0;
  const t=setInterval(()=>{paint();if(++n>16)clearInterval(t)},120);
  paint();
  if(!window.__eccIconsBound){
    window.__eccIconsBound=true;
    document.addEventListener('click',()=>setTimeout(paint,80),true);
  }
};
