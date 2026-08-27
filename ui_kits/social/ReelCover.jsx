import React from 'react';

/* Cover de Reel / Short: 1080 x 1920. Dos a cinco palabras sobre el painpoint del viewer.
   Fondo con atmosfera (halo cyan + grano), nunca navy plano. */
export function ReelCover({variant='question',words='Dormir poco te frena',highlight='te frena',kicker='Basado en evidencia',
  stat='60%',statLabel='más músculo perdido con el mismo déficit',left='Ayuno 16 h',right='Como todo el día',pmid='20921542',asset='../../assets/isotipo-ecc.png'}){
  const a=words.replace(highlight,'').trim(), b=highlight;
  const cover={fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-cover)',
    fontWeight:'var(--weight-bold)',lineHeight:'var(--leading-cover)',
    letterSpacing:'var(--tracking-cover)',textTransform:'uppercase',color:'var(--white)',margin:0};

  return (
    <div className="ecc-atmos ecc-grain-canvas" style={{position:'relative',width:1080,height:1920,overflow:'hidden'}}>
      {/* barra de encuadre: filo de luz en el borde superior */}
      <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'rgba(255,255,255,.14)'}}/>

      <div style={{position:'absolute',top:76,left:76,right:76,display:'flex',alignItems:'center',gap:26}}>
        <img src={asset} width={72} height={72} alt=""/>
        <span className="ecc-label" style={{fontSize:21,color:'var(--cyan-300)'}}>{kicker}</span>
        <span style={{flex:1,height:1,background:'var(--border-on-dark)'}}/>
      </div>

      {variant==='question'?(
        <div style={{position:'absolute',left:76,right:76,top:'50%',transform:'translateY(-54%)',
          display:'flex',flexDirection:'column',alignItems:'flex-start',gap:52}}>
          <span className="ecc-rule" style={{width:104,height:5}}/>
          <h1 style={{...cover,fontSize:170}}>{a}<br/><span style={{color:'var(--gold-400)'}}>{b}</span></h1>
        </div>
      ):null}

      {variant==='stat'?(
        <div style={{position:'absolute',left:76,right:76,top:'50%',transform:'translateY(-52%)'}}>
          <span className="ecc-label" style={{fontSize:21,color:'var(--text-on-dark-faint)'}}>El resultado</span>
          <span className="ecc-num" style={{display:'block',marginTop:22,fontFamily:'var(--font-display)',
            fontVariationSettings:'var(--vf-cover)',fontWeight:'var(--weight-bold)',fontSize:380,
            lineHeight:.8,letterSpacing:'-0.04em',color:'var(--gold-400)'}}>{stat}</span>
          <span style={{display:'block',marginTop:30,fontFamily:'var(--font-body)',fontWeight:'var(--weight-medium)',
            fontSize:58,lineHeight:1.15,letterSpacing:'var(--tracking-tight)',color:'var(--white)',maxWidth:'17ch'}}>{statLabel}</span>
        </div>
      ):null}

      {variant==='versus'?(
        <div style={{position:'absolute',left:0,right:0,top:'50%',transform:'translateY(-52%)'}}>
          {[[left,'var(--coral-400)','01'],[right,'var(--cyan-400)','02']].map(([txt,col,idx],i)=>(
            <div key={i} style={{display:'flex',alignItems:'stretch',gap:36,padding:'52px 76px',
              borderTop:'1px solid var(--border-on-dark)',
              borderBottom:i===1?'1px solid var(--border-on-dark)':'none',
              background:i===1?'rgba(255,255,255,.03)':'transparent'}}>
              <span style={{width:8,background:col}}/>
              <span className="ecc-label" style={{fontSize:20,color:'var(--text-on-dark-faint)',paddingTop:14}}>{idx}</span>
              <span style={{...cover,fontSize:104}}>{txt}</span>
            </div>
          ))}
          <div style={{padding:'76px 76px 0'}}>
            <h1 style={{...cover,fontSize:100,color:'var(--gold-400)'}}>¿Quién pierde<br/>más grasa?</h1>
          </div>
        </div>
      ):null}

      <div style={{position:'absolute',left:76,right:76,bottom:76,display:'flex',alignItems:'center',gap:26}}>
        <span className="ecc-num" style={{fontFamily:'var(--font-mono)',fontSize:25,
          letterSpacing:'var(--tracking-mono)',color:'var(--cyan-300)'}}>PMID {pmid}</span>
        <span style={{flex:1,height:1,background:'var(--border-on-dark)'}}/>
        <span className="ecc-label" style={{fontSize:20,color:'var(--text-on-dark-faint)'}}>Entrena con Ciencia</span>
      </div>
    </div>
  );
}
