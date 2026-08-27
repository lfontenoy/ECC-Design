import React from 'react';

export function StudyMeta({items=[],onDark=false,columns=null,scale=1,style,...rest}){
  const line=onDark?'var(--border-on-dark)':'var(--border-subtle)';
  const px=n=>Math.round(n*scale);
  return (
    <dl style={{display:'grid',gridTemplateColumns:'repeat('+(columns||items.length||1)+',minmax(0,1fr))',
      gap:0,margin:0,borderTop:'var(--border-w-hair) solid '+line,...style}} {...rest}>
      {items.map((it,i)=>(
        <div key={it.label+i} style={{padding:px(16)+'px '+px(20)+'px '+px(16)+'px 0',
          borderBottom:'var(--border-w-hair) solid '+line,
          borderLeft:i===0?'none':'var(--border-w-hair) solid '+line,
          paddingLeft:i===0?0:px(20)}}>
          <dt style={{fontFamily:'var(--font-mono)',fontWeight:'var(--weight-medium)',fontSize:px(11),
            lineHeight:1.2,letterSpacing:'var(--tracking-label)',textTransform:'uppercase',
            color:onDark?'var(--text-on-dark-faint)':'var(--text-faint)',marginBottom:px(7)}}>{it.label}</dt>
          <dd style={{margin:0,fontFamily:'var(--font-mono)',fontSize:px(14),lineHeight:1.35,
            letterSpacing:'var(--tracking-mono)',fontWeight:'var(--weight-medium)',
            color:onDark?'var(--text-on-dark)':'var(--text-strong)'}}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
