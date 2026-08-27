import React from 'react';

const SIZES={sm:32,md:40,lg:48};
const VARIANTS={
  solid:{bg:'var(--navy-700)',fg:'var(--white)',bd:'transparent',hover:'var(--navy-800)'},
  subtle:{bg:'var(--navy-050)',fg:'var(--navy-700)',bd:'var(--border-subtle)',hover:'var(--navy-100)'},
  ghost:{bg:'transparent',fg:'var(--navy-700)',bd:'transparent',hover:'var(--navy-050)'},
  onDark:{bg:'var(--surface-glass)',fg:'var(--white)',bd:'var(--border-on-dark)',hover:'rgba(255,255,255,.18)'}
};

export function IconButton({variant='ghost',size='md',label,disabled=false,round=false,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const d=SIZES[size]||SIZES.md, v=VARIANTS[variant]||VARIANTS.ghost;
  return (
    <button aria-label={label} disabled={disabled}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',
        color:v.fg,background:hover&&!disabled?v.hover:v.bg,border:'var(--border-w-hair) solid '+v.bd,
        borderRadius:round?'var(--radius-pill)':'var(--radius-control)',cursor:disabled?'not-allowed':'pointer',
        opacity:disabled?.45:1,transition:'var(--transition-control)',...style}} {...rest}>
      {children}
    </button>
  );
}
