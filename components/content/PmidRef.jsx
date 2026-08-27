import React from 'react';

export function PmidRef({pmid,doi=null,label=null,onDark=false,linked=true,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const id=pmid?'PMID: '+pmid:(doi?'DOI: '+doi:'');
  const href=pmid?'https://pubmed.ncbi.nlm.nih.gov/'+pmid+'/':(doi?'https://doi.org/'+doi:null);
  const Tag=linked&&href?'a':'span';
  return (
    <Tag href={linked&&href?href:undefined} target={linked&&href?'_blank':undefined} rel="noreferrer"
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'inline-flex',alignItems:'center',gap:8,height:26,padding:'0 10px',
        fontFamily:'var(--font-mono)',fontSize:'var(--text-caption)',fontWeight:'var(--weight-medium)',
        letterSpacing:'var(--tracking-mono)',textDecoration:'none',
        color:onDark?'var(--cyan-300)':'var(--cyan-600)',
        background:onDark?'rgba(154,241,254,.07)':'var(--navy-050)',
        border:'var(--border-w-hair) solid '+(onDark?'var(--border-on-dark)':'var(--border-subtle)'),
        borderRadius:'var(--radius-xs)',
        filter:hover&&linked&&href?'brightness(1.08)':'none',transition:'var(--transition-control)',...style}} {...rest}>
      {label?<span style={{opacity:.7}}>{label}</span>:null}{id}
    </Tag>
  );
}
