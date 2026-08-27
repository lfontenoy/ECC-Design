import React from 'react';

/* `span` es el tamano de la pieza en el bento, no una propiedad del video:
   la parrilla es asimetrica a proposito y el primer elemento manda. */
const VIDEOS=[
  {cover:['Dormir poco','te frena'],tema:'Sueño',stat:'60%',pmid:'20921542',dur:'1:18',span:'feature'},
  {cover:['Más proteína','no es más músculo'],tema:'Nutrición',stat:'1.6 g/kg',pmid:'22150425',dur:'1:24',span:'wide'},
  {cover:['Cafeína antes','de entrenar'],tema:'Suplementación',stat:'+7%',pmid:'33388079',dur:'1:06',span:'wide'},
  {cover:['Entrenar al fallo','no es obligatorio'],tema:'Hipertrofia',stat:'0 dif.',pmid:'34674314',dur:'1:32',span:'third'},
  {cover:['El cardio no','borra el músculo'],tema:'Hipertrofia',stat:'-0.2 kg',pmid:'34503527',dur:'1:11',span:'third'},
  {cover:['Comer de noche','no engorda'],tema:'Nutrición',stat:'igual',pmid:'32662455',dur:'1:20',span:'third'}
];

export function VideoGrid({filter='Todos',onFilter}){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Tag,Card,Badge}=B;
  const temas=['Todos','Sueño','Nutrición','Hipertrofia','Suplementación'];
  const list=filter==='Todos'?VIDEOS:VIDEOS.filter(v=>v.tema===filter);

  return (
    <section className="ecc-pad" style={{maxWidth:'var(--container-max)',margin:'0 auto',
      paddingTop:'var(--gap-section)',paddingBottom:'var(--gap-section)'}}>
      <div className="ecc-reveal" style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',
        gap:'var(--space-8)',flexWrap:'wrap',marginBottom:'var(--space-12)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',alignItems:'flex-start'}}>
          <span className="ecc-eyebrow">El archivo</span>
          <h2>Últimos videos</h2>
        </div>
        <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap'}}>
          {temas.map(t=>Tag?<Tag key={t} active={filter===t} onClick={()=>onFilter&&onFilter(t)}>{t}</Tag>:null)}
        </div>
      </div>

      <div className="ecc-bento">
        {list.map((v,i)=>{
          const feature=v.span==='feature';
          return (
            <Card key={v.pmid} interactive padding="none"
              className={'ecc-bento-'+v.span+' ecc-reveal ecc-reveal-'+Math.min(5,i+1)}>
              <div className="ecc-atmos" style={{position:'relative',
                flex:'1 1 auto',
                aspectRatio:feature?undefined:(v.span==='wide'?'16 / 10':'4 / 5'),
                minHeight:feature?300:undefined,
                padding:feature?'var(--space-8)':'var(--space-6)',
                display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                <div style={{position:'absolute',inset:0,background:'var(--scrim-bottom)'}}/>
                <div style={{position:'absolute',top:'var(--space-5)',left:'var(--space-5)',right:'var(--space-5)',
                  display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  {Badge?<Badge tone="outlineOnDark">{v.tema}</Badge>:null}
                  <span className="ecc-num" style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-caption)',color:'var(--text-on-dark-muted)'}}>{v.dur}</span>
                </div>
                <span className="ecc-cover" style={{position:'relative',fontSize:feature?58:37,color:'var(--white)'}}>
                  {v.cover[0]}<br/><span style={{color:'var(--gold-400)'}}>{v.cover[1]}</span>
                </span>
              </div>
              <div style={{padding:'var(--space-5) var(--space-6)',display:'flex',alignItems:'center',
                justifyContent:'space-between',gap:'var(--space-4)'}}>
                <span className="ecc-num" style={{fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-display)',
                  fontWeight:'var(--weight-bold)',fontSize:feature?36:29,letterSpacing:'var(--tracking-display)',
                  background:'var(--evidence-fill)',color:'var(--evidence-fill-ink)',padding:'2px 10px',
                  borderRadius:'var(--radius-xs)'}}>{v.stat}</span>
                <span className="ecc-num" style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-caption)',color:'var(--cyan-600)'}}>PMID {v.pmid}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
