import React from 'react';

export function LeadMagnet(){
  const B=window.EntrenaConCienciaDesignSystem_ad72a9||{};
  const {Input,Button,Checkbox,Badge,Divider}=B;
  const [sent,setSent]=React.useState(false);
  const [ok,setOk]=React.useState(true);
  const [guía,setGuía]=React.useState('PESO');
  return (
    <section className="ecc-grid-light" style={{background:'var(--surface-inset)',
      borderTop:'1px solid var(--border-subtle)',borderBottom:'1px solid var(--border-subtle)'}}>
      <div className="ecc-split ecc-split-form ecc-pad" style={{maxWidth:'var(--container-max)',margin:'0 auto',
        paddingTop:'var(--gap-section-xl)',paddingBottom:'var(--gap-section-xl)'}}>
        <div className="ecc-reveal">
          <span className="ecc-eyebrow">Guías gratuitas</span>
          <h2 style={{marginTop:'var(--space-4)',fontSize:'clamp(30px,4.4vw,46px)',lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)'}}>
            Las dos guías que pedimos comentar en los videos
          </h2>
          <p style={{marginTop:'var(--space-4)',maxWidth:'52ch',fontSize:'var(--text-body-lg)',
            lineHeight:'var(--leading-body)',color:'var(--text-muted)'}}>
            PESO trae la calculadora de déficit calórico. PROTE trae cuanta proteína necesitas y como repartirla.
            Ambas citan los estudios en los que se basan.
          </p>
          <div style={{display:'flex',gap:'var(--space-2)',marginTop:'var(--space-6)'}}>
            {['PESO','PROTE'].map(g=>(
              <button key={g} onClick={()=>setGuía(g)} style={{appearance:'none',cursor:'pointer',
                padding:'12px 22px',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-mono)',fontSize:14,letterSpacing:'var(--tracking-mono)',
                background:guía===g?'var(--navy-700)':'var(--surface-card)',color:guía===g?'#fff':'var(--navy-700)',
                border:'1px solid '+(guía===g?'var(--navy-700)':'var(--border-strong)')}}>Comenta {g}</button>
            ))}
          </div>
        </div>
        <div className="ecc-reveal ecc-reveal-2 ecc-bezel">
          <div className="ecc-bezel-core" style={{padding:'var(--pad-card-lg)'}}>
          {sent?(
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
              <span className="ecc-label" style={{display:'inline-flex',alignItems:'center',gap:8,color:'var(--navy-900)'}}>
                <span style={{width:7,height:7,borderRadius:'50%',background:'var(--evidence-fill)'}}/>Enviado
              </span>
              <h3 style={{fontSize:'var(--text-h3)'}}>Revisa tu correo</h3>
              <p style={{fontSize:'var(--text-body-sm)',color:'var(--text-muted)',lineHeight:1.55}}>
                Te enviamos la guía {guía}. Si no llega en 5 minutos, revisa spam.
              </p>
              {Button?<Button variant="outline" onClick={()=>setSent(false)}>Enviar otra</Button>:null}
            </div>
          ):(
            <form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
              <div>
                <span className="ecc-label" style={{color:'var(--text-faint)'}}>Guía {guía}</span>
                <h3 style={{marginTop:6,fontSize:'var(--text-h3)'}}>Te la enviamos por correo</h3>
              </div>
              {Input?<Input label="Tu correo" type="email" required placeholder="nombre@correo.com" prefix={<i className="ph-light ph-envelope-simple" style={{fontSize:17}}></i>}/>:null}
              {Checkbox?<Checkbox label="Quiero tambien el estudio de la semana" checked={ok} onChange={e=>setOk(e.target.checked)}/>:null}
              {Button?<Button type="submit" variant="evidence" fullWidth size="lg" iconRight={<i className="ph-light ph-arrow-right" style={{fontSize:17}}></i>}>Recibir la guía {guía}</Button>:null}
              {Divider?<Divider/>:null}
              <span style={{fontSize:'var(--text-caption)',color:'var(--text-faint)'}}>Un correo por semana. Puedes salir con un clic.</span>
            </form>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
