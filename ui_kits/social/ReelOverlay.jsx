import React from 'react';

/* Graficos en pantalla sobre el fotograma del video (1080 x 1920).
   Todo texto se apoya en scrim o en caja opaca: nunca suelto sobre imagen. */
export function ReelOverlay({kind='hook',asset='../../assets/isotipo-ecc.png'}){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {StatFigure,StudyMeta,PmidRef,Badge,Button}=B;
  const box={background:'rgba(11,20,37,.84)',backdropFilter:'blur(10px)',
    border:'1px solid var(--border-on-dark)',boxShadow:'var(--edge-top),var(--shadow-on-dark)',
    borderRadius:'var(--radius-xl)'};

  return (
    <div className="ecc-grain-canvas" style={{position:'relative',width:1080,height:1920,overflow:'hidden',
      background:'linear-gradient(158deg,var(--navy-600) 0%,var(--navy-900) 58%,var(--navy-975) 100%)'}}>
      <div className="ecc-grid" style={{position:'absolute',inset:0,opacity:.6}}/>
      <div style={{position:'absolute',inset:0,background:'var(--glow-cyan)'}}/>
      <div style={{position:'absolute',inset:0,background:'var(--scrim-bottom)'}}/>
      <div style={{position:'absolute',inset:0,background:'var(--scrim-top)',opacity:.55}}/>

      <div style={{position:'absolute',top:68,left:68,display:'flex',alignItems:'center',gap:20}}>
        <img src={asset} width={58} height={58} alt=""/>
        <span className="ecc-label" style={{fontSize:19,color:'rgba(255,255,255,.72)'}}>Entrena con Ciencia</span>
      </div>

      {kind==='hook'?(
        <div style={{position:'absolute',left:68,right:68,bottom:210}}>
          <span style={{display:'inline',padding:'16px 24px',background:'var(--gold-400)',
            color:'var(--accent-evidence-ink)',fontFamily:'var(--font-display)',
            fontVariationSettings:'var(--vf-display)',fontWeight:'var(--weight-bold)',fontSize:50,lineHeight:1.42,
            letterSpacing:'var(--tracking-tight)',boxDecorationBreak:'clone',WebkitBoxDecorationBreak:'clone'}}>
            Muchos creen que más proteína es más músculo
          </span>
        </div>
      ):null}

      {kind==='stat'?(
        <div style={{position:'absolute',left:68,right:68,top:'50%',transform:'translateY(-50%)',...box,padding:66}}>
          <span className="ecc-rule" style={{marginBottom:36}}/>
          {StatFigure?<StatFigure value="60" unit="%" label="más músculo perdido durmiendo 5.5 h" note="n = 10 · 14 días" size="xl"/>:null}
        </div>
      ):null}

      {kind==='study'?(
        <div style={{position:'absolute',left:68,right:68,bottom:186,...box,padding:58}}>
          <div style={{display:'flex',alignItems:'center',gap:18,marginBottom:30}}>
            {Badge?<Badge tone="info" style={{height:38,fontSize:19,padding:'0 15px'}}>Estudio hero</Badge>:null}
            <span style={{fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-display)',
              fontWeight:'var(--weight-bold)',fontSize:46,letterSpacing:'var(--tracking-display)',color:'var(--white)'}}>Universidad McMaster</span>
          </div>
          {StudyMeta?<StudyMeta onDark scale={2.4} columns={2} items={[{label:'Participantes',value:'n = 40 hombres'},{label:'Grupos',value:'1.2 vs 2.4 g/kg'},{label:'Protocolo',value:'Fuerza 6 días/sem'},{label:'Duración',value:'4 semanas'}]}/>:null}
        </div>
      ):null}

      {kind==='cta'?(
        <div className="ecc-atmos" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',
          alignItems:'center',justifyContent:'center',gap:46,textAlign:'center'}}>
          <img src={asset} width={210} height={210} alt=""/>
          <div>
            <span style={{display:'block',fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-display)',
              fontWeight:'var(--weight-black)',fontSize:120,lineHeight:.94,letterSpacing:'-0.02em',
              textTransform:'uppercase',color:'var(--white)'}}>Entrena</span>
            <span style={{display:'block',marginTop:18,fontFamily:'var(--font-mono)',fontWeight:'var(--weight-medium)',
              fontSize:38,letterSpacing:'.30em',textTransform:'uppercase',color:'var(--cyan-300)'}}>con Ciencia</span>
          </div>
          <span style={{fontFamily:'var(--font-body)',fontSize:40,lineHeight:1.4,
            color:'var(--text-on-dark-muted)',maxWidth:'21ch'}}>Síguenos para entrenar con evidencia, no con mitos</span>
          {Button?<Button variant="evidence" size="lg" style={{minHeight:100,fontSize:40,padding:'0 58px',borderRadius:'var(--radius-md)'}}>Comenta PROTE</Button>:null}
        </div>
      ):null}

      {kind!=='cta'?(
        <div style={{position:'absolute',left:68,bottom:98}}>{PmidRef?<PmidRef onDark pmid="20921542" style={{height:46,fontSize:22,padding:'0 17px'}}/>:null}</div>
      ):null}
    </div>
  );
}
