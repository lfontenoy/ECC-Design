import React from 'react';

/* Isla flotante: la navegacion no se pega al borde superior de la ventana.
   Es una pildora de vidrio despegada, centrada y del ancho de su contenido.
   El blur vive aqui y en el overlay, que son fixed/sticky: nunca sobre
   contenido que scrollea. */
export function SiteHeader({page='inicio',onNavigate,asset='../../assets/isotipo-ecc.png'}){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Logo,Button}=B;
  const [open,setOpen]=React.useState(false);
  const items=[['inicio','Videos'],['ficha','Fichas de estudio'],['guías','Guías']];

  const go=id=>{setOpen(false);onNavigate&&onNavigate(id)};

  /* El menu abierto bloquea el scroll del documento detras y se cierra con
     Escape, que es la salida que espera cualquiera que abra algo a pantalla
     completa. */
  React.useEffect(()=>{
    const prev=document.body.style.overflow;
    document.body.style.overflow=open?'hidden':prev||'';
    const onKey=e=>{if(e.key==='Escape')setOpen(false)};
    if(open) document.addEventListener('keydown',onKey);
    return ()=>{document.body.style.overflow=prev||'';document.removeEventListener('keydown',onKey)};
  },[open]);

  return (
    <>
      <header className={open?"ecc-island is-above":"ecc-island"} style={{padding:'0 var(--space-2) 0 var(--space-5)'}}>
        <div style={{height:60,display:'flex',alignItems:'center',gap:'var(--space-8)'}}>
          {Logo?<Logo variant="horizontal" theme="dark" size={32} src={asset}
            style={{cursor:'pointer'}} onClick={()=>go('inicio')}/>:null}

          <nav className="ecc-island-nav">
            {items.map(([id,label])=>(
              <a key={id} href="#" onClick={e=>{e.preventDefault();go(id)}}
                style={{textDecoration:'none',fontFamily:'var(--font-heading)',fontSize:'var(--text-body-sm)',
                  fontWeight:'var(--weight-medium)',letterSpacing:'var(--tracking-tight)',
                  color:page===id?'var(--white)':'var(--text-on-dark-muted)',
                  position:'relative',paddingBottom:2,
                  transition:'color var(--dur-fast) var(--ease-fluid)'}}>
                {label}
                {/* El indicador de activa es un punto cyan, no un subrayado que
                    corte la curva de la pildora. */}
                <span style={{position:'absolute',left:'50%',bottom:-6,width:4,height:4,borderRadius:'50%',
                  background:'var(--cyan-400)',
                  transform:'translateX(-50%) scale('+(page===id?1:0)+')',
                  transition:'transform var(--dur-base) var(--ease-fluid)'}}/>
              </a>
            ))}
          </nav>

          <div style={{display:'flex',alignItems:'center',gap:'var(--space-2)'}}>
            <span className="ecc-island-cta">
              {Button?<Button variant="evidence" size="sm"
                iconRight={<i className="ph-light ph-arrow-up-right" style={{fontSize:15}}></i>}>Recibir la guía</Button>:null}
            </span>
            <button aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open}
              onClick={()=>setOpen(o=>!o)}
              className="ecc-island-burger"
              style={{appearance:'none',border:0,background:'transparent',color:'var(--white)',
                width:44,height:44,alignItems:'center',justifyContent:'center',
                borderRadius:'var(--radius-pill)',cursor:'pointer'}}>
              <span className={open?'ecc-burger is-open':'ecc-burger'} aria-hidden="true">
                <span/><span/><span/>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu a pantalla completa. Los enlaces suben escalonados desde una caja
          invisible; no aparecen de golpe. */}
      <div className={open?'ecc-overlay is-open':'ecc-overlay'} aria-hidden={!open}
        onClick={e=>{if(e.target===e.currentTarget)setOpen(false)}}
        style={{opacity:open?1:0,pointerEvents:open?'auto':'none',
          display:'flex',alignItems:'center',justifyContent:'center'}}>
        <nav style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',textAlign:'center'}}>
          {items.map(([id,label],i)=>(
            <a key={id} href="#" className="ecc-mask-item" onClick={e=>{e.preventDefault();go(id)}}
              style={{textDecoration:'none',color:page===id?'var(--gold-400)':'var(--white)',
                fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-display)',
                fontWeight:'var(--weight-bold)',fontSize:'clamp(38px,7vw,68px)',
                lineHeight:1.06,letterSpacing:'var(--tracking-display)',
                transitionDelay:open?(60+i*70)+'ms':'0ms'}}>
              {label}
            </a>
          ))}
          <span className="ecc-mask-item ecc-label" style={{marginTop:'var(--space-8)',
            color:'var(--text-on-dark-faint)',transitionDelay:open?(60+items.length*70)+'ms':'0ms'}}>
            Cada afirmación con su PMID
          </span>
        </nav>
      </div>
    </>
  );
}
