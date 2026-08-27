import React from 'react';

/* El icono final nunca va desnudo al lado del texto: se anida en su propio
   circulo, al ras del padding interior derecho. En hover ese circulo se
   desplaza en diagonal y crece un punto, lo que genera la tension cinetica
   interna del boton mientras el boton entero se hunde al presionar. */
const SIZES={
  sm:{minHeight:40,padX:18,fontSize:'var(--text-body-sm)',gap:8,dot:24,inset:4},
  md:{minHeight:48,padX:24,fontSize:'var(--text-body-md)',gap:10,dot:32,inset:6},
  lg:{minHeight:56,padX:30,fontSize:'var(--text-body-lg)',gap:12,dot:38,inset:7}
};
const VARIANTS={
  primary:{bg:'var(--navy-700)',fg:'var(--white)',bd:'transparent',hover:'var(--navy-800)',active:'var(--navy-900)',edge:'var(--edge-top)',lift:'var(--shadow-sm)',dot:'rgba(255,255,255,.14)'},
  evidence:{bg:'var(--gold-400)',fg:'var(--accent-evidence-ink)',bd:'transparent',hover:'var(--gold-500)',active:'var(--gold-600)',edge:'inset 0 1px 0 rgba(255,255,255,.35)',lift:'var(--shadow-sm)',dot:'rgba(6,12,24,.12)'},
  outline:{bg:'transparent',fg:'var(--navy-700)',bd:'var(--border-strong)',hover:'var(--navy-050)',active:'var(--navy-100)',edge:'none',lift:'none',dot:'rgba(11,20,37,.06)'},
  ghost:{bg:'transparent',fg:'var(--navy-700)',bd:'transparent',hover:'var(--navy-050)',active:'var(--navy-100)',edge:'none',lift:'none',dot:'rgba(11,20,37,.06)'},
  onDark:{bg:'var(--surface-glass-strong)',fg:'var(--white)',bd:'var(--border-on-dark-strong)',hover:'rgba(255,255,255,.17)',active:'rgba(255,255,255,.24)',edge:'var(--edge-top-strong)',lift:'none',dot:'rgba(255,255,255,.12)'}
};

export function Button({variant='primary',size='md',fullWidth=false,disabled=false,iconLeft=null,iconRight=null,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const s=SIZES[size]||SIZES.md, v=VARIANTS[variant]||VARIANTS.primary;
  const bg=disabled?v.bg:(press?v.active:(hover?v.hover:v.bg));
  const live=!disabled;

  return (
    <button disabled={disabled}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false)}}
      onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)}
      style={{display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':'auto',alignItems:'center',
        justifyContent:iconRight?'space-between':'center',
        minHeight:s.minHeight,gap:s.gap,fontSize:s.fontSize,
        /* Con icono final el padding derecho se cierra al inset para que el
           circulo quede al ras de la pildora. */
        paddingLeft:s.padX,paddingRight:iconRight?s.inset:s.padX,
        fontFamily:'var(--font-heading)',fontWeight:'var(--weight-semibold)',letterSpacing:'var(--tracking-wide)',lineHeight:1,
        color:v.fg,background:bg,border:'var(--border-w-hair) solid '+v.bd,borderRadius:'var(--radius-pill)',
        boxShadow:disabled?'none':[v.edge,press?'none':v.lift].filter(x=>x&&x!=='none').join(',')||'none',
        cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,
        /* Se hunde al presionar, no se desplaza: escala, que es transform puro. */
        transform:press&&live?'scale(.98)':'none',transition:'var(--transition-control)',...style}}
      {...rest}>
      <span style={{display:'inline-flex',alignItems:'center',gap:s.gap,minWidth:0}}>
        {iconLeft}{children}
      </span>
      {iconRight?(
        <span aria-hidden="true" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',
          width:s.dot,height:s.dot,flexShrink:0,borderRadius:'var(--radius-pill)',background:v.dot,
          transform:hover&&live?'translate3d(4px,-1px,0) scale(1.05)':'none',
          transition:'transform var(--dur-base) var(--ease-fluid)'}}>
          {iconRight}
        </span>
      ):null}
    </button>
  );
}
