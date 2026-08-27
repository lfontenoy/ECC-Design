import React from 'react';

export function SiteHeader({page='inicio',onNavigate,asset='../../assets/isotipo-ecc.png'}){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Logo,Button}=B;
  const items=[['inicio','Videos'],['ficha','Fichas de estudio'],['guías','Guías']];
  return (
    <header style={{position:'sticky',top:0,zIndex:10,background:'rgba(11,20,37,.88)',backdropFilter:'blur(14px) saturate(140%)',
      borderBottom:'1px solid var(--border-on-dark)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--space-8)',height:76,
        display:'flex',alignItems:'center',gap:'var(--space-10)'}}>
        {Logo?<Logo variant="horizontal" theme="dark" size={38} src={asset} style={{cursor:'pointer'}} onClick={()=>onNavigate&&onNavigate('inicio')}/>:null}
        <nav style={{display:'flex',gap:'var(--space-8)',marginLeft:'auto'}}>
          {items.map(([id,label])=>(
            <a key={id} href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(id)}}
              style={{textDecoration:'none',fontFamily:'var(--font-heading)',fontSize:'var(--text-body-md)',
                fontWeight:'var(--weight-medium)',letterSpacing:'var(--tracking-tight)',color:page===id?'var(--white)':'var(--text-on-dark-muted)',
                borderBottom:'2px solid '+(page===id?'var(--cyan-400)':'transparent'),paddingBottom:4}}>{label}</a>
          ))}
        </nav>
        {Button?<Button variant="evidence" size="sm" iconLeft={<i data-lucide="download" style={{width:16,height:16,display:'inline-flex'}}></i>}>Recibir la guía</Button>:null}
      </div>
    </header>
  );
}
