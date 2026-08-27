import React from 'react';

const SIZES={sm:{minHeight:36,padding:'0 16px',fontSize:'var(--text-body-sm)',gap:8},md:{minHeight:44,padding:'0 20px',fontSize:'var(--text-body-md)',gap:10},lg:{minHeight:54,padding:'0 28px',fontSize:'var(--text-body-lg)',gap:12}};
const VARIANTS={
  primary:{bg:'var(--navy-700)',fg:'var(--white)',bd:'transparent',hover:'var(--navy-800)',active:'var(--navy-900)',edge:'var(--edge-top)',lift:'var(--shadow-sm)'},
  evidence:{bg:'var(--gold-400)',fg:'var(--accent-evidence-ink)',bd:'transparent',hover:'var(--gold-500)',active:'var(--gold-600)',edge:'inset 0 1px 0 rgba(255,255,255,.35)',lift:'var(--shadow-sm)'},
  outline:{bg:'transparent',fg:'var(--navy-700)',bd:'var(--border-strong)',hover:'var(--navy-050)',active:'var(--navy-100)',edge:'none',lift:'none'},
  ghost:{bg:'transparent',fg:'var(--navy-700)',bd:'transparent',hover:'var(--navy-050)',active:'var(--navy-100)',edge:'none',lift:'none'},
  onDark:{bg:'var(--surface-glass-strong)',fg:'var(--white)',bd:'var(--border-on-dark-strong)',hover:'rgba(255,255,255,.17)',active:'rgba(255,255,255,.24)',edge:'var(--edge-top-strong)',lift:'none'}
};

export function Button({variant='primary',size='md',fullWidth=false,disabled=false,iconLeft=null,iconRight=null,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const s=SIZES[size]||SIZES.md, v=VARIANTS[variant]||VARIANTS.primary;
  const bg=disabled?v.bg:(press?v.active:(hover?v.hover:v.bg));
  return (
    <button disabled={disabled}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false)}}
      onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)}
      style={{display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':'auto',alignItems:'center',justifyContent:'center',
        minHeight:s.minHeight,padding:s.padding,gap:s.gap,fontSize:s.fontSize,
        fontFamily:'var(--font-heading)',fontWeight:'var(--weight-semibold)',letterSpacing:'var(--tracking-wide)',lineHeight:1,
        color:v.fg,background:bg,border:'var(--border-w-hair) solid '+v.bd,borderRadius:'var(--radius-control)',
        boxShadow:disabled?'none':[v.edge,press?'none':v.lift].filter(x=>x&&x!=='none').join(',')||'none',
        cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,
        transform:press&&!disabled?'translateY(1px)':'none',transition:'var(--transition-control)',...style}}
      {...rest}>
      {iconLeft}{children}{iconRight}
    </button>
  );
}
