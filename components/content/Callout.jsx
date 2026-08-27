import React from 'react';

const KINDS={
  pinned:{bg:'var(--ground-navy)',fg:'var(--text-on-dark)',bd:'var(--border-on-dark)',accent:'var(--cyan-300)',label:'Comentario fijado',edge:'var(--edge-top)'},
  note:{bg:'var(--navy-050)',fg:'var(--text-body)',bd:'var(--border-subtle)',accent:'var(--cyan-600)',label:'Nota',edge:'none'},
  limit:{bg:'rgba(222,59,38,.055)',fg:'var(--text-body)',bd:'rgba(222,59,38,.20)',accent:'var(--coral-500)',label:'Limitaciones',edge:'none'},
  practice:{bg:'rgba(255,195,0,.14)',fg:'var(--text-strong)',bd:'rgba(255,195,0,.55)',accent:'var(--navy-900)',label:'Aplicación práctica',edge:'none'}
};

export function Callout({kind='note',title=null,icon=null,children,style,...rest}){
  const k=KINDS[kind]||KINDS.note;
  return (
    <div style={{display:'flex',gap:'var(--space-4)',padding:'var(--space-5)',background:k.bg,color:k.fg,
      border:'var(--border-w-hair) solid '+k.bd,borderRadius:'var(--radius-md)',
      boxShadow:k.edge==='none'?'none':k.edge,...style}} {...rest}>
      {icon?<span style={{color:k.accent,flexShrink:0,display:'flex',lineHeight:1}}>{icon}</span>:null}
      <div style={{minWidth:0}}>
        <span style={{display:'block',marginBottom:6,font:'var(--type-label)',letterSpacing:'var(--tracking-label)',
          textTransform:'uppercase',color:k.accent}}>{title||k.label}</span>
        <div style={{fontFamily:'var(--font-body)',fontSize:'var(--text-body-sm)',lineHeight:'var(--leading-body)'}}>{children}</div>
      </div>
    </div>
  );
}
