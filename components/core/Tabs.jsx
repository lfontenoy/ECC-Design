import React from 'react';

export function Tabs({items=[],value,onChange,onDark=false,style,...rest}){
  const line=onDark?'var(--border-on-dark)':'var(--border-subtle)';
  return (
    <div role="tablist" style={{display:'flex',gap:'var(--space-6)',borderBottom:'var(--border-w-hair) solid '+line,...style}} {...rest}>
      {items.map(it=>{
        const id=it.value||it, label=it.label||it, on=id===value;
        const ink=on?(onDark?'var(--white)':'var(--navy-900)'):(onDark?'var(--text-on-dark-faint)':'var(--text-muted)');
        return (
          <button key={id} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(id)}
            style={{appearance:'none',background:'none',border:0,padding:'0 0 12px',cursor:'pointer',
              fontFamily:'var(--font-heading)',fontSize:'var(--text-body-md)',fontWeight:'var(--weight-semibold)',letterSpacing:'var(--tracking-tight)',
              color:ink,borderBottom:'var(--border-w) solid '+(on?'var(--cyan-400)':'transparent'),marginBottom:-1,
              transition:'var(--transition-control)'}}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
