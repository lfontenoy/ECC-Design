import React from 'react';

export function Card({theme='light',padding='md',interactive=false,grid=false,accent=null,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const pads={none:0,sm:'var(--space-4)',md:'var(--pad-card)',lg:'var(--pad-card-lg)'};
  const dark=theme!=='light';
  const bg=theme==='void'?'var(--ground-void)':theme==='deep'?'var(--ground-navy)':theme==='dark'?'var(--surface-card-dark)':'var(--surface-card)';
  const accents={evidence:'var(--accent-evidence)',myth:'var(--accent-myth)',info:'var(--accent-info)'};
  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      className={[grid?(dark?'ecc-grid':'ecc-grid-light'):'',dark?'ecc-grain':''].filter(Boolean).join(' ')||undefined}
      style={{position:'relative',overflow:'hidden',padding:pads[padding],background:bg,
        borderRadius:'var(--radius-card)',
        border:'var(--border-w-hair) solid '+(dark?'var(--border-on-dark)':'var(--border-subtle)'),
        boxShadow:dark?'var(--edge-top),var(--shadow-on-dark)':(interactive&&hover?'var(--shadow-lg)':'var(--shadow-sm)'),
        color:dark?'var(--text-on-dark)':'var(--text-body)',
        transform:interactive&&hover?'translateY(-3px)':'none',
        transition:'var(--transition-surface)',
        cursor:interactive?'pointer':'default',...style}} {...rest}>
      {accent?<span style={{position:'absolute',left:0,top:0,bottom:0,width:3,background:accents[accent],zIndex:1}}/>:null}
      {children}
    </div>
  );
}
