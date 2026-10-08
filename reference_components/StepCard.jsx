import React from 'react';
export function StepCard({number,accent='red',title,children,style}){
  return <div style={{display:'flex',flexDirection:'column',gap:12,...style}}>
    <span style={{font:'var(--fw-light) var(--fs-step)/1 var(--font-sans)',color:accent==='blue'?'var(--brand-secondary)':'var(--brand-primary)'}}>{number}</span>
    <span style={{font:'var(--text-h4)',fontSize:16,color:'var(--text-strong)'}}>{title}</span>
    <span style={{font:'var(--text-small)',lineHeight:1.6,color:'var(--text-body)'}}>{children}</span>
  </div>;
}