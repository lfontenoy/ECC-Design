import React from 'react';

export function Switch({label=null,checked=false,onChange,disabled=false,onDark=false,style,...rest}){
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',
      cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}} {...rest}>
      <span onClick={()=>!disabled&&onChange&&onChange(!checked)}
        style={{width:44,height:24,flexShrink:0,padding:2,display:'flex',alignItems:'center',
          background:checked?'var(--cyan-500)':(onDark?'rgba(255,255,255,.16)':'var(--navy-200)'),
          borderRadius:'var(--radius-pill)',transition:'background-color var(--dur-base) var(--ease-out)'}}>
        <span style={{width:20,height:20,background:'var(--white)',borderRadius:'var(--radius-pill)',
          boxShadow:'var(--shadow-sm)',transform:'translateX('+(checked?20:0)+'px)',
          transition:'transform var(--dur-base) var(--ease-out)'}}/>
      </span>
      {label?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-body-sm)',
        color:onDark?'var(--text-on-dark)':'var(--text-body)'}}>{label}</span>:null}
    </label>
  );
}
