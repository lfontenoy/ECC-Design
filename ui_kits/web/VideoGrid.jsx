import React from 'react';

const VIDEOS=[
  {cover:['Dormir poco','te frena'],tema:'Sueño',stat:'60%',pmid:'20921542',dur:'1:18'},
  {cover:['Más proteína','no es más músculo'],tema:'Nutrición',stat:'1.6 g/kg',pmid:'22150425',dur:'1:24'},
  {cover:['Cafeína antes','de entrenar'],tema:'Suplementación',stat:'+7%',pmid:'33388079',dur:'1:06'},
  {cover:['Entrenar al fallo','no es obligatorio'],tema:'Hipertrofia',stat:'0 dif.',pmid:'34674314',dur:'1:32'},
  {cover:['El cardio no','borra el músculo'],tema:'Hipertrofia',stat:'-0.2 kg',pmid:'34503527',dur:'1:11'},
  {cover:['Comer de noche','no engorda'],tema:'Nutrición',stat:'igual',pmid:'32662455',dur:'1:20'}
];

export function VideoGrid({filter='Todos',onFilter}){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Tag,Card,Badge}=B;
  const temas=['Todos','Sueño','Nutrición','Hipertrofia','Suplementación'];
  const list=filter==='Todos'?VIDEOS:VIDEOS.filter(v=>v.tema===filter);
  return (
    <section style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-20) var(--space-8)'}}>
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'var(--space-8)',flexWrap:'wrap'}}>
        <div>
          <span className="ecc-label" style={{color:'var(--text-faint)'}}>El archivo</span>
          <h2 style={{marginTop:'var(--space-2)'}}>Últimos videos</h2>
        </div>
        <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap'}}>
          {temas.map(t=>Tag?<Tag key={t} active={filter===t} onClick={()=>onFilter&&onFilter(t)}>{t}</Tag>:null)}
        </div>
      </div>
      <div style={{marginTop:'var(--space-8)',display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'var(--space-6)'}}>
        {list.map(v=>(
          <Card key={v.pmid} interactive padding="none" style={{overflow:'hidden'}}>
            <div className="ecc-atmos" style={{position:'relative',aspectRatio:'4 / 5',padding:'var(--space-6)',
              display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
              <div style={{position:'absolute',inset:0,background:'var(--scrim-bottom)'}}/>
              <div style={{position:'absolute',top:'var(--space-4)',left:'var(--space-4)',right:'var(--space-4)',
                display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                {Badge?<Badge tone="outlineOnDark">{v.tema}</Badge>:null}
                <span className="ecc-num" style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-caption)',color:'var(--text-on-dark-muted)'}}>{v.dur}</span>
              </div>
              <span className="ecc-cover" style={{position:'relative',fontSize:37,color:'var(--white)'}}>
                {v.cover[0]}<br/><span style={{color:'var(--gold-400)'}}>{v.cover[1]}</span>
              </span>
            </div>
            <div style={{padding:'var(--space-5)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)'}}>
              <span className="ecc-num" style={{fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-display)',
                fontWeight:'var(--weight-bold)',fontSize:29,letterSpacing:'var(--tracking-display)',
                background:'var(--evidence-fill)',color:'var(--evidence-fill-ink)',padding:'2px 9px',
                borderRadius:'var(--radius-xs)'}}>{v.stat}</span>
              <span className="ecc-num" style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-caption)',color:'var(--cyan-600)'}}>PMID {v.pmid}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
