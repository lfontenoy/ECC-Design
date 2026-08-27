import React from 'react';

export function Checkbox({label,checked=false,onChange,disabled=false,onDark=false,style,...rest}){
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',
      cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
      <span style={{width:20,height:20,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',
        background:checked?'var(--navy-700)':(onDark?'rgba(255,255,255,.06)':'var(--surface-card)'),
        border:'var(--border-w-hair) solid '+(checked?'var(--navy-700)':(onDark?'var(--border-on-dark-strong)':'var(--border-strong)')),
        borderRadius:'var(--radius-xs)',transition:'var(--transition-control)'}}>
        {checked?<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.2 4.6 9 10 3" stroke="var(--cyan-300)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>:null}
      </span>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange}
        style={{position:'absolute',opacity:0,width:0,height:0}} {...rest}/>
      <span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-body-sm)',
        color:onDark?'var(--text-on-dark)':'var(--text-body)'}}>{label}</span>
    </label>
  );
}
