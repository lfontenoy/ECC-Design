import React from 'react';

export function Select({label=null,options=[],hint=null,onDark=false,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return (
    <label style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',...style}}>
      {label?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-body-sm)',fontWeight:'var(--weight-semibold)',
        color:onDark?'var(--text-on-dark)':'var(--text-strong)'}}>{label}</span>:null}
      <select onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{appearance:'none',minHeight:44,padding:'0 var(--pad-control-x)',
          background:onDark?'rgba(255,255,255,.06)':'var(--surface-card)',
          border:'var(--border-w-hair) solid '+(focus?'var(--cyan-500)':(onDark?'var(--border-on-dark)':'var(--border-strong)')),
          borderRadius:'var(--radius-control)',boxShadow:focus?'var(--ring-focus)':'none',
          fontFamily:'var(--font-body)',fontSize:'var(--text-body-md)',
          color:onDark?'var(--text-on-dark)':'var(--text-strong)',cursor:'pointer',
          transition:'var(--transition-control)'}} {...rest}>
        {options.map(o=>{const v=o.value!==undefined?o.value:o;return <option key={v} value={v}>{o.label||v}</option>})}
      </select>
      {hint?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-caption)',color:'var(--text-muted)'}}>{hint}</span>:null}
    </label>
  );
}
