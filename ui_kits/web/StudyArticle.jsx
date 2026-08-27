import React from 'react';

export function StudyArticle({onBack}){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Badge,Tag,MythBuster,StudyMeta,StatFigure,Callout,PmidRef,Divider,Button,Card}=B;
  return (
    <article className="ecc-pad" style={{maxWidth:900,margin:'0 auto',
      paddingTop:'var(--gap-section-xl)',paddingBottom:'var(--gap-section)'}}>
      <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
        {Button?<Button variant="ghost" size="sm" onClick={onBack} iconLeft={<i className="ph-light ph-arrow-left" style={{fontSize:16}}></i>}>Videos</Button>:null}
        {Badge?<Badge tone="info">Ficha de estudio</Badge>:null}
        {Tag?<Tag>Sueño</Tag>:null}
      </div>
      <h1 className="ecc-reveal" style={{marginTop:'var(--space-6)',fontSize:58,lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)'}}>
        Dormir 5.5 h cambia de dónde sale el peso que pierdes
      </h1>
      <p className="ecc-reveal ecc-reveal-1" style={{marginTop:'var(--space-5)',maxWidth:'var(--measure-prose)',fontSize:'var(--text-body-lg)',
        lineHeight:'var(--leading-body)',color:'var(--text-muted)'}}>
        El sueño no solo afecta cómo te sientes en el gimnasio: en déficit calórico decide que parte del peso perdido
        es grasa y que parte es músculo.
      </p>
      <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-2)',flexWrap:'wrap'}}>
        {PmidRef?<PmidRef pmid="20921542" label="Estudio hero"/>:null}
        <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-caption)',color:'var(--text-faint)',alignSelf:'center'}}>Publicado 12 ago 2026 · 4 min</span>
      </div>

      <div style={{margin:'var(--gap-section) 0 var(--space-8)'}}>{Divider?<Divider label="La creencia"/>:null}</div>
      {MythBuster?<MythBuster myth="Si mantienes el déficit, dormir poco solo te deja cansado"
        fact="Con el mismo déficit, dormir 5.5 h cambio la proporción de grasa y músculo perdidos"/>:null}

      <div style={{margin:'var(--gap-section) 0 var(--space-8)'}}>{Divider?<Divider label="Metodología"/>:null}</div>
      {StudyMeta?<StudyMeta columns={4} items={[{label:'Participantes',value:'n = 10'},{label:'Diseño',value:'Cruzado'},{label:'Déficit',value:'-680 kcal/día'},{label:'Duración',value:'14 días'}]}/>:null}
      <p style={{marginTop:'var(--space-6)',maxWidth:'var(--measure-prose)',fontSize:'var(--text-body-md)',
        lineHeight:'var(--leading-body)'}}>
        Los participantes pasaron por las dos condiciones con el mismo déficit calórico y la misma dieta.
        La única diferencia fue el tiempo en cama: 8.5 h frente a 5.5 h.
      </p>

      <div style={{margin:'var(--gap-section) 0 var(--space-8)'}}>{Divider?<Divider label="Resultado"/>:null}</div>
      {Card?<Card theme="deep" padding="lg">
        <div style={{display:'flex',gap:'var(--space-16)',flexWrap:'wrap'}}>
          {StatFigure?<StatFigure value="60" unit="%" label="más músculo perdido durmiendo 5.5 h" size="lg"/>:null}
          {StatFigure?<StatFigure value="55" unit="%" label="menos grasa perdida" tone="info" size="lg"/>:null}
        </div>
      </Card>:null}
      <p style={{marginTop:'var(--space-6)',maxWidth:'var(--measure-prose)',fontSize:'var(--text-body-md)',
        lineHeight:'var(--leading-body)'}}>
        El peso en la balanza fue prácticamente el mismo en ambas condiciones. Lo que cambió fue de dónde salió
        ese peso.
      </p>

      <div style={{marginTop:'var(--gap-section)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)'}}>
        {Callout?<Callout kind="practice">Protege 7 a 9 h de sueño mientras estas en déficit. Si no puedes, sube proteína a 1.6-2 g/kg y manten el trabajo de fuerza.</Callout>:null}
        {Callout?<Callout kind="limit">Muestra pequeña (10 personas) y solo 14 días. Sirve para la dirección del efecto, no para su magnitud exacta.</Callout>:null}
      </div>
      <div style={{marginTop:'var(--space-8)'}}>{Callout?<Callout kind="pinned">En el video contamos solo este estudio. Si te interesa el efecto sobre el hambre, va en la ficha de grelina.</Callout>:null}</div>

      <div style={{marginTop:'var(--gap-section)'}}>{Divider?<Divider label="Referencias"/>:null}
        <div style={{marginTop:'var(--space-4)',display:'flex',gap:'var(--space-2)',flexWrap:'wrap'}}>
          {PmidRef?<PmidRef pmid="20921542"/>:null}{PmidRef?<PmidRef pmid="22150425"/>:null}
        </div>
      </div>
    </article>
  );
}
