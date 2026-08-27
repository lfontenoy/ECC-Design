import React from 'react';

/* Doble bisel (Doppelrand). Una tarjeta nunca se apoya plana sobre el fondo:
   va dentro de una carcasa con su propio filo y radio grande, y el nucleo
   lleva su fondo, su realce superior y un radio concentrico calculado
   (--radius-shell menos el padding de la carcasa). Es el acabado por defecto;
   `bezel={false}` devuelve la tarjeta plana para casos anidados, donde un
   segundo bisel dentro de otro se lee como ruido. */
export function Card({theme='light',padding='md',interactive=false,grid=false,accent=null,bezel=true,className='',children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const pads={none:0,sm:'var(--space-4)',md:'var(--pad-card)',lg:'var(--pad-card-lg)'};
  const dark=theme!=='light';
  const bg=theme==='void'?'var(--ground-void)':theme==='deep'?'var(--ground-navy)':theme==='dark'?'var(--surface-card-dark)':'var(--surface-card)';
  const accents={evidence:'var(--accent-evidence)',myth:'var(--accent-myth)',info:'var(--accent-info)'};

  const core=(
    <div className={grid?(dark?'ecc-grid':'ecc-grid-light'):undefined}
      style={{position:'relative',overflow:'hidden',padding:pads[padding],background:bg,
        flex:'1 1 auto',display:'flex',flexDirection:'column',minHeight:0,
        borderRadius:bezel?'var(--bezel-core-radius)':'var(--radius-card)',
        boxShadow:[
          dark?'var(--bezel-core-sheen-dark)':'var(--bezel-core-sheen-light)',
          dark?'var(--shadow-on-dark)':(interactive&&hover?'var(--shadow-lg)':'var(--shadow-sm)')
        ].join(','),
        color:dark?'var(--text-on-dark)':'var(--text-body)'}}>
      {accent?<span style={{position:'absolute',left:0,top:0,bottom:0,width:3,background:accents[accent],zIndex:'var(--z-raised)'}}/>:null}
      {children}
    </div>
  );

  const shell=bezel?(dark?'ecc-bezel ecc-bezel-on-dark':'ecc-bezel'):'';
  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      className={[shell,className].filter(Boolean).join(' ')||undefined}
      style={{display:'flex',flexDirection:'column',height:'100%',
        transform:interactive&&hover?'translate3d(0,-4px,0)':'none',
        transition:'var(--transition-surface)',
        cursor:interactive?'pointer':'default',...style}} {...rest}>
      {core}
    </div>
  );
}
