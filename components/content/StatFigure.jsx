import React from 'react';

const TONES={evidence:'var(--gold-400)',myth:'var(--coral-400)',info:'var(--cyan-400)',navy:'var(--navy-700)',light:'var(--white)'};
/* Sobre fondo claro el amarillo no se lee como texto (1.54:1): la cifra pasa a
   relleno amarillo con tinta navy, que es el gesto de resaltado de la marca. */
const LIGHT_TONES={evidence:null,myth:'var(--coral-500)',info:'var(--cyan-700)',navy:'var(--navy-700)',light:'var(--navy-950)'};
const SIZES={sm:44,md:72,lg:112,xl:160};

export function StatFigure({value,unit=null,label=null,note=null,tone='evidence',size='md',onDark=true,align='left',style,...rest}){
  const fs=SIZES[size]||SIZES.md;
  const fillOnLight=!onDark&&tone==='evidence';
  const ink=onDark?(TONES[tone]||TONES.evidence)
    :(fillOnLight?'var(--evidence-fill-ink)':(LIGHT_TONES[tone]||'var(--navy-950)'));
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:align==='center'?'center':'flex-start',
      textAlign:align,gap:fs*0.08,...style}} {...rest}>
      <span style={{display:'flex',alignItems:'baseline',gap:fs*0.05,color:ink,
        background:fillOnLight?'var(--evidence-fill)':'transparent',
        padding:fillOnLight?'0.02em 0.14em':0,
        fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-cover)',fontWeight:'var(--weight-bold)',
        fontSize:fs,lineHeight:'var(--leading-cover)',letterSpacing:'var(--tracking-cover)',fontVariantNumeric:'tabular-nums'}}>
        {value}{unit?<span style={{fontSize:fs*0.42,fontWeight:'var(--weight-semibold)'}}>{unit}</span>:null}
      </span>
      {label?<span style={{fontFamily:'var(--font-body)',fontSize:Math.max(13,fs*0.19),fontWeight:'var(--weight-medium)',
        lineHeight:'var(--leading-snug)',letterSpacing:'var(--tracking-tight)',
        color:onDark?'var(--text-on-dark)':'var(--text-strong)',maxWidth:'22ch'}}>{label}</span>:null}
      {note?<span style={{fontFamily:'var(--font-mono)',fontWeight:'var(--weight-medium)',
        fontSize:Math.max(11,Math.round(fs*0.16)),lineHeight:1.3,letterSpacing:'var(--tracking-label)',
        textTransform:'uppercase',color:onDark?'var(--text-on-dark-faint)':'var(--text-faint)'}}>{note}</span>:null}
    </div>
  );
}
