import React from 'react';

export function HomeHero(){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Button,Badge,StatFigure,PmidRef}=B;
  return (
    <section className="ecc-atmos" style={{borderBottom:'1px solid var(--border-on-dark)'}}>
      <div className="ecc-split ecc-pad" style={{maxWidth:'var(--container-max)',margin:'0 auto',
        paddingTop:'var(--gap-section-xl)',paddingBottom:'var(--gap-section)'}}>
        <div>
          <div className="ecc-reveal ecc-reveal-1" style={{display:'flex',alignItems:'center',gap:'var(--space-4)'}}>
            <span className="ecc-rule" style={{width:56,height:3,flex:'0 0 56px'}}/>
            {Badge?<Badge tone="outlineOnDark">Fitness basado en evidencia</Badge>:null}
          </div>
          <h1 className="ecc-cover ecc-reveal ecc-reveal-2" style={{marginTop:'var(--space-6)',fontSize:'clamp(42px,6.4vw,78px)',color:'var(--white)'}}>
            Entrena con <span style={{color:'var(--gold-400)'}}>evidencia</span>,<br/>no con mitos
          </h1>
          <p className="ecc-reveal ecc-reveal-3" style={{marginTop:'var(--space-6)',maxWidth:'41ch',
            fontFamily:'var(--font-body)',fontSize:'var(--text-body-lg)',lineHeight:'var(--leading-body)',
            letterSpacing:'var(--tracking-tight)',color:'var(--text-on-dark-muted)'}}>
            Cada video cuenta la historia de un estudio: qué midió, en quiénes y qué encontró.
            Sin promesas mágicas y con el PMID a la vista.
          </p>
          <div className="ecc-reveal ecc-reveal-4" style={{display:'flex',gap:'var(--space-3)',marginTop:'var(--space-10)',flexWrap:'wrap'}}>
            {Button?<Button variant="evidence" size="lg"
              iconRight={<i className="ph-light ph-play" style={{fontSize:17}}></i>}>Ver los videos</Button>:null}
            {Button?<Button variant="onDark" size="lg"
              iconLeft={<i className="ph-light ph-microscope" style={{fontSize:18}}></i>}>Cómo verificamos</Button>:null}
          </div>
        </div>

        {/* Tarjeta del estudio: nucleo opaco dentro de su carcasa. Antes era
            vidrio con backdrop-blur sobre contenido que scrollea, que fuerza
            repintado continuo de GPU; la elevacion la dan ahora el filo del
            bisel y la sombra ambiental. */}
        <div className="ecc-reveal ecc-reveal-3 ecc-bezel ecc-bezel-on-dark">
          <div className="ecc-bezel-core ecc-bezel-core-on-dark" style={{padding:'var(--pad-card-lg)'}}>
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
      </div>
    </section>
  );
}
