import React from 'react';

export function Logo({variant='horizontal',theme='dark',size=40,src=null,style,...rest}){
  const ink=theme==='dark'?'var(--white)':'var(--navy-700)';
  const sub=theme==='dark'?'var(--cyan-300)':'var(--cyan-600)';
  /* El isotipo transparente es cyan: sobre fondo claro se lava. En theme="light"
     se usa la version en cuadro navy salvo que el consumidor pase src explicito. */
  const file=src||(theme==='light'?'assets/isotipo-ecc-navy.png':'assets/isotipo-ecc.png');
  const mark=<img src={file} alt="Entrena con Ciencia" width={size} height={size}
    style={{display:'block',borderRadius:theme==='light'&&!src?'var(--radius-sm)':0}}/>;
  if(variant==='mark') return <span style={style} {...rest}>{mark}</span>;
  const stacked=variant==='stacked';
  return (
    <span style={{display:'inline-flex',flexDirection:stacked?'column':'row',alignItems:'center',
      gap:stacked?size*0.18:size*0.28,...style}} {...rest}>
      {mark}
      <span style={{display:'flex',flexDirection:'column',alignItems:stacked?'center':'flex-start',lineHeight:1}}>
        <span style={{fontFamily:'var(--font-display)',fontVariationSettings:'var(--vf-display)',
          fontWeight:'var(--weight-black)',fontSize:size*0.46,letterSpacing:'-0.005em',
          textTransform:'uppercase',color:ink}}>Entrena</span>
        <span style={{fontFamily:'var(--font-mono)',fontWeight:'var(--weight-medium)',
          fontSize:size*0.24,letterSpacing:'0.22em',textTransform:'uppercase',color:sub,marginTop:size*0.10}}>con Ciencia</span>
      </span>
    </span>
  );
}
