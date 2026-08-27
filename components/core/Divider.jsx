import React from 'react';

export function Divider({label=null,onDark=false,style,...rest}){
  const line=onDark?'var(--border-on-dark)':'var(--border-subtle)';
  const ink=onDark?'var(--text-on-dark-faint)':'var(--text-faint)';
  if(!label) return <hr style={{border:0,borderTop:'var(--border-w-hair) solid '+line,margin:0,...style}} {...rest}/>;
  return (
    <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)',...style}} {...rest}>
      <span style={{flex:1,height:1,background:line}}/>
      <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:ink}}>{label}</span>
      <span style={{flex:1,height:1,background:line}}/>
    </div>
  );
}
