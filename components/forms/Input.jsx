import React from 'react';

export function Input({label=null,hint=null,error=null,prefix=null,suffix=null,onDark=false,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const bd=error?'var(--coral-500)':(focus?'var(--cyan-500)':(onDark?'var(--border-on-dark)':'var(--border-strong)'));
  return (
    <label style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',...style}}>
      {label?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-body-sm)',fontWeight:'var(--weight-semibold)',
        color:onDark?'var(--text-on-dark)':'var(--text-strong)'}}>{label}</span>:null}
      <span style={{display:'flex',alignItems:'center',gap:'var(--space-2)',minHeight:44,
        padding:'0 var(--pad-control-x)',background:onDark?'rgba(255,255,255,.06)':'var(--surface-card)',
        border:'var(--border-w-hair) solid '+bd,borderRadius:'var(--radius-control)',
        boxShadow:focus?'var(--ring-focus)':'none',transition:'var(--transition-control)'}}>
        {prefix?<span style={{color:'var(--text-faint)',display:'flex'}}>{prefix}</span>:null}
        <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{flex:1,minWidth:0,appearance:'none',border:0,outline:'none',background:'transparent',
            fontFamily:'var(--font-body)',fontSize:'var(--text-body-md)',
            color:onDark?'var(--text-on-dark)':'var(--text-strong)'}} {...rest}/>
        {suffix?<span style={{color:'var(--text-faint)',display:'flex'}}>{suffix}</span>:null}
      </span>
      {error||hint?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-caption)',
        color:error?'var(--coral-500)':(onDark?'var(--text-on-dark-faint)':'var(--text-muted)')}}>{error||hint}</span>:null}
    </label>
  );
}
