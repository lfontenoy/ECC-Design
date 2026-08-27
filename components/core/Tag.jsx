import React from 'react';

export function Tag({children,active=false,onDark=false,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const interactive=typeof onClick==='function';
  const base=onDark
    ?{bg:active?'var(--cyan-400)':'rgba(255,255,255,.08)',fg:active?'var(--navy-950)':'var(--text-on-dark-muted)',bd:active?'transparent':'var(--border-on-dark)'}
    :{bg:active?'var(--navy-700)':'var(--white)',fg:active?'var(--white)':'var(--navy-700)',bd:active?'transparent':'var(--border-strong)'};
  return (
    <span role={interactive?'button':undefined} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'inline-flex',alignItems:'center',height:30,padding:'0 14px',
        fontFamily:'var(--font-body)',fontSize:'var(--text-body-sm)',fontWeight:'var(--weight-medium)',
        color:base.fg,background:base.bg,border:'var(--border-w-hair) solid '+base.bd,borderRadius:'var(--radius-pill)',
        cursor:interactive?'pointer':'default',
        filter:hover&&interactive&&!active?'brightness(.97)':'none',
        transition:'var(--transition-control)',...style}} {...rest}>{children}</span>
  );
}
