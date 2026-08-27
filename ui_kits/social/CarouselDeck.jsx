import React from 'react';

/* Carrusel de post: 1080 x 1350 por lamina. Sigue el orden del guion:
   cover, mito, estudio, resultado, aplicación + CTA. */
export function CarouselDeck({index=0,asset='../../assets/isotipo-ecc.png',assetLight='../../assets/isotipo-ecc-navy.png'}){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {StatFigure,StudyMeta,MythBuster,PmidRef,Badge,Button,Divider}=B;

  const Shell=({children,dark=true,pad=90})=>(
    <div className={dark?'ecc-atmos':'ecc-grain'} style={{position:'relative',width:1080,height:1350,overflow:'hidden',
      padding:pad,background:dark?undefined:'var(--surface-page)',
      color:dark?'var(--text-on-dark)':'var(--text-body)',display:'flex',flexDirection:'column'}}>
      <div style={{display:'flex',alignItems:'center',gap:20,marginBottom:58}}>
        <img src={dark?asset:assetLight} width={52} height={52} alt=""
          style={{borderRadius:dark?0:'var(--radius-xs)'}}/>
        <span className="ecc-label" style={{fontSize:18,color:dark?'var(--cyan-300)':'var(--cyan-600)'}}>Entrena con Ciencia</span>
        <span style={{flex:1,height:1,background:dark?'var(--border-on-dark)':'var(--border-subtle)'}}/>
        <span className="ecc-num" style={{fontFamily:'var(--font-mono)',fontSize:18,
          color:dark?'var(--text-on-dark-faint)':'var(--text-faint)'}}>{String(index+1).padStart(2,'0')} / 05</span>
      </div>
      {children}
    </div>
  );
  const H=({children,size=98,color='var(--white)'})=>(
    <h2 style={{margin:0,fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-cover)',
      fontWeight:'var(--weight-bold)',fontSize:size,lineHeight:'var(--leading-cover)',
      letterSpacing:'var(--tracking-cover)',textTransform:'uppercase',color}}>{children}</h2>
  );
  const P=({children,color='var(--text-on-dark-muted)',size=38})=>(
    <p style={{margin:0,fontFamily:'var(--font-body)',fontSize:size,lineHeight:'var(--leading-body)',
      letterSpacing:'var(--tracking-tight)',color,maxWidth:'26ch'}}>{children}</p>
  );

  const slides=[
    <Shell key="s1">
      <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:42}}>
        <span className="ecc-rule" style={{width:88,height:5}}/>
        <H size={136}>Más proteína<br/><span style={{color:'var(--gold-400)'}}>no es más músculo</span></H>
        <P>Lo que midió un ensayo controlado de 4 semanas en hombres que entrenan fuerza</P>
      </div>
      <div style={{marginTop:'auto',display:'flex',alignItems:'center',gap:24}}>
        {Badge?<Badge tone="evidence">Desliza</Badge>:null}
        <span className="ecc-num" style={{fontFamily:'var(--font-mono)',fontSize:22,color:'var(--cyan-300)'}}>PMID 20921542</span>
      </div>
    </Shell>,

    <Shell key="s2" dark={false}>
      <H size={82} color="var(--text-strong)">La creencia<br/>común</H>
      <div style={{marginTop:56}}>
        {MythBuster?<MythBuster scale={2.3} myth="Mientras más proteína comes, más músculo ganas: por eso hacen falta varios batidos al día"
          fact="Pasado cierto punto, comer más proteína no añade músculo medible"
          style={{borderRadius:26}}/>:null}
      </div>
      <div style={{marginTop:'auto'}}><P color="var(--text-muted)">Investigadores lo pusieron a prueba aislando una sola variable</P></div>
    </Shell>,

    <Shell key="s3">
      <H size={82}>El estudio</H>
      <div style={{marginTop:52}}>
        {StudyMeta?<StudyMeta onDark scale={2.4} columns={2} items={[{label:'Participantes',value:'n = 40 hombres entrenados'},{label:'Grupos',value:'1.2 vs 2.4 g/kg'},{label:'Protocolo',value:'Fuerza 6 días/semana'},{label:'Duración',value:'4 semanas'}]}/>:null}
      </div>
      <div style={{marginTop:52}}><P>La única diferencia entre los grupos fue la cantidad de proteína al día</P></div>
      <div style={{marginTop:'auto'}}>{PmidRef?<PmidRef onDark pmid="20921542" label="Estudio hero" style={{height:46,fontSize:22,padding:'0 17px'}}/>:null}</div>
    </Shell>,

    <Shell key="s4">
      <H size={82}>El resultado</H>
      <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:66}}>
        {StatFigure?<StatFigure value="0" unit="g" label="de músculo extra en el grupo de 2.4 g/kg" note="frente al grupo de 1.2 g/kg" size="xl"/>:null}
        <span style={{height:1,background:'var(--border-on-dark)'}}/>
        {StatFigure?<StatFigure value="1.6" unit="g/kg" label="donde se aplana la ganancia" tone="info" size="lg"/>:null}
      </div>
      <div style={{marginTop:'auto'}}><P>El peso perdido fue el mismo. Lo que cambió fue de dónde salió</P></div>
    </Shell>,

    <Shell key="s5" dark={false}>
      <H size={82} color="var(--text-strong)">Qué hacer</H>
      <div style={{marginTop:52,display:'flex',flexDirection:'column',gap:34}}>
        <P color="var(--text-body)">Apunta a 1.6 g/kg al día repartidos en 3 o 4 comidas. Para 70 kg son unos 112 g: una pechuga grande más dos huevos.</P>
        {Divider?<Divider label="Referencias"/>:null}
        {PmidRef?<PmidRef pmid="20921542" style={{height:46,fontSize:22,padding:'0 17px'}}/>:null}
      </div>
      <div style={{marginTop:'auto',display:'flex',alignItems:'center',gap:32}}>
        {Button?<Button variant="evidence" size="lg" style={{minHeight:92,fontSize:34,padding:'0 46px',borderRadius:'var(--radius-md)'}}>Comenta PROTE</Button>:null}
        <span style={{fontFamily:'var(--font-body)',fontSize:30,lineHeight:1.4,color:'var(--text-muted)',maxWidth:'18ch'}}>y te enviamos la guía de proteína</span>
      </div>
    </Shell>
  ];
  return slides[Math.max(0,Math.min(slides.length-1,index))];
}
