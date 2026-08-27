import React from 'react';

export function SiteFooter({asset='../../assets/isotipo-ecc.png'}){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Logo,Divider}=B;
  const cols=[['Contenido',['Reels','Fichas de estudio','Guías']],['Temas',['Hipertrofia','Nutrición','Sueño','Suplementación']],['Canal',['Cómo verificamos','Contacto','Colaboraciones']]];
  return (
    <footer className="ecc-grain" style={{background:'var(--ground-void)',color:'var(--text-on-dark-muted)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-16) var(--space-8) var(--space-10)',
        display:'grid',gridTemplateColumns:'1.4fr repeat(3,1fr)',gap:'var(--space-12)'}}>
        <div>
          {Logo?<Logo variant="horizontal" theme="dark" size={40} src={asset}/>:null}
          <p style={{marginTop:'var(--space-5)',maxWidth:'32ch',fontSize:'var(--text-body-sm)',lineHeight:1.6,
            color:'var(--text-on-dark-faint)'}}>
            Fitness y nutrición basados en evidencia. Cada afirmación se rastrea a un estudio con PMID.
          </p>
        </div>
        {cols.map(([title,links])=>(
          <div key={title}>
            <span className="ecc-label" style={{color:'var(--text-on-dark-faint)'}}>{title}</span>
            <ul style={{listStyle:'none',margin:'var(--space-4) 0 0',padding:0,display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
              {links.map(l=><li key={l}><a href="#" style={{color:'var(--text-on-dark-muted)',textDecoration:'none',fontSize:'var(--text-body-sm)'}}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--space-8) var(--space-10)'}}>
        {Divider?<Divider onDark/>:null}
        <div style={{marginTop:'var(--space-5)',display:'flex',justifyContent:'space-between',gap:'var(--space-6)',
          fontFamily:'var(--font-mono)',fontSize:'var(--text-caption)',color:'var(--text-on-dark-faint)',flexWrap:'wrap'}}>
          <span>Entrena con Ciencia · Perú</span>
          <span>El contenido es informativo y no sustituye consulta médica</span>
        </div>
      </div>
    </footer>
  );
}
