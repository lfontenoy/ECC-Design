import React from 'react';

export function HomeHero(){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Button,Badge,StatFigure,PmidRef}=B;
  return (
    <section className="ecc-atmos" style={{borderBottom:'1px solid var(--border-on-dark)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-20) var(--space-8)',
        display:'grid',gridTemplateColumns:'1.12fr .88fr',gap:'var(--space-12)',alignItems:'center'}}>
        <div>
          <div className="ecc-rise ecc-rise-1" style={{display:'flex',alignItems:'center',gap:'var(--space-4)'}}>
            <span className="ecc-rule" style={{width:56,height:3,flex:'0 0 56px'}}/>
            {Badge?<Badge tone="outlineOnDark">Fitness basado en evidencia</Badge>:null}
          </div>
          <h1 className="ecc-cover ecc-rise ecc-rise-2" style={{marginTop:'var(--space-5)',fontSize:74,color:'var(--white)'}}>
            Entrena con <span style={{color:'var(--gold-400)'}}>evidencia</span>,<br/>no con mitos
          </h1>
          <p className="ecc-rise ecc-rise-3" style={{marginTop:'var(--space-6)',maxWidth:'41ch',
            fontFamily:'var(--font-body)',fontSize:'var(--text-body-lg)',lineHeight:'var(--leading-body)',
            letterSpacing:'var(--tracking-tight)',color:'var(--text-on-dark-muted)'}}>
            Cada video cuenta la historia de un estudio: qué midió, en quiénes y qué encontró.
            Sin promesas mágicas y con el PMID a la vista.
          </p>
          <div className="ecc-rise ecc-rise-4" style={{display:'flex',gap:'var(--space-3)',marginTop:'var(--space-8)',flexWrap:'wrap'}}>
            {Button?<Button variant="evidence" size="lg" iconLeft={<i data-lucide="play" style={{width:18,height:18,display:'inline-flex'}}></i>}>Ver los videos</Button>:null}
            {Button?<Button variant="onDark" size="lg" iconLeft={<i data-lucide="microscope" style={{width:18,height:18,display:'inline-flex'}}></i>}>Cómo verificamos</Button>:null}
          </div>
        </div>
        <div className="ecc-rise ecc-rise-3" style={{background:'var(--surface-glass)',
          border:'1px solid var(--border-on-dark)',borderRadius:'var(--radius-xl)',padding:'var(--space-8)',
          boxShadow:'var(--edge-top),var(--shadow-on-dark)',backdropFilter:'blur(8px)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--cyan-400)'}}/>
            <span className="ecc-label" style={{color:'var(--text-on-dark-faint)'}}>Estudio de la semana</span>
          </div>
          <h3 style={{marginTop:'var(--space-4)',fontSize:'var(--text-h3)',color:'var(--white)',lineHeight:1.22}}>
            Dormir 5.5 h con déficit calórico
          </h3>
          <div style={{margin:'var(--space-6) 0',height:1,background:'var(--border-on-dark)'}}/>
          {StatFigure?<StatFigure value="60" unit="%" label="más músculo perdido con el mismo déficit" note="n = 10 · 14 días" size="md"/>:null}
          <div style={{marginTop:'var(--space-6)'}}>{PmidRef?<PmidRef onDark pmid="20921542" label="Estudio hero"/>:null}</div>
        </div>
      </div>
    </section>
  );
}
