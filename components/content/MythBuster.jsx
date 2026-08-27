import React from 'react';

export function MythBuster({myth,fact,mythLabel='Mito',factLabel='Lo que dice la ciencia',layout='stacked',scale=1,style,...rest}){
  const px=n=>Math.round(n*scale);
  const cell=(labelTone,label,text,ink)=>(
    <div style={{flex:1,minWidth:0,padding:px(20),borderRadius:'var(--radius-md)',
      background:labelTone==='myth'?'rgba(222,59,38,.05)':'rgba(255,195,0,.14)',
      borderLeft:'var(--border-w-heavy) solid '+(labelTone==='myth'?'var(--coral-400)':'var(--gold-400)')}}>
      <span style={{display:'inline-block',marginBottom:px(8),fontFamily:'var(--font-mono)',
        fontWeight:'var(--weight-medium)',fontSize:px(11),lineHeight:1.2,
        letterSpacing:'var(--tracking-label)',textTransform:'uppercase',
        color:labelTone==='myth'?'var(--coral-500)':'var(--navy-900)'}}>{label}</span>
      <p style={{fontFamily:'var(--font-body)',fontSize:px(16),lineHeight:'var(--leading-body)',
        letterSpacing:'var(--tracking-tight)',
        color:ink,textDecoration:labelTone==='myth'?'line-through':'none',
        textDecorationColor:labelTone==='myth'?'rgba(222,59,38,.4)':undefined,
        textDecorationThickness:labelTone==='myth'?'1px':undefined}}>{text}</p>
    </div>
  );
  return (
    <div style={{display:'flex',flexDirection:layout==='side-by-side'?'row':'column',gap:px(12),
      background:'var(--surface-card)',border:'var(--border-w-hair) solid var(--border-subtle)',
      borderRadius:'var(--radius-card)',padding:px(12),boxShadow:'var(--shadow-sm)',...style}} {...rest}>
      {cell('myth',mythLabel,myth,'var(--text-muted)')}
      {cell('fact',factLabel,fact,'var(--text-strong)')}
    </div>
  );
}
