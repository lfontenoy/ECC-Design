import React from 'react';

const TONES={
  evidence:{bg:'var(--gold-400)',fg:'var(--navy-950)',bd:'transparent'},
  myth:{bg:'var(--coral-400)',fg:'var(--white)',bd:'transparent'},
  info:{bg:'var(--cyan-400)',fg:'var(--navy-950)',bd:'transparent'},
  neutral:{bg:'var(--navy-100)',fg:'var(--navy-700)',bd:'transparent'},
  dark:{bg:'var(--navy-900)',fg:'var(--cyan-300)',bd:'transparent'},
  outline:{bg:'transparent',fg:'var(--navy-700)',bd:'var(--border-strong)'},
  outlineOnDark:{bg:'transparent',fg:'var(--cyan-300)',bd:'var(--border-on-dark-strong)'}
};

export function Badge({tone='neutral',children,style,...rest}){
  const t=TONES[tone]||TONES.neutral;
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:7,height:26,padding:'0 12px',
      font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',
      color:t.fg,background:t.bg,border:'var(--border-w-hair) solid '+t.bd,borderRadius:'var(--radius-pill)',
      whiteSpace:'nowrap',...style}} {...rest}>{children}</span>
  );
}
