import React from 'react';
import {Icon} from '../core/Icon.jsx';
const T={white:'var(--surface-glass)',red:'var(--surface-glass-red)',blue:'var(--surface-glass-blue)'};
export function FeatureCard({tone='white',icon,title,children,style}){
  const [h,setH]=React.useState(false);
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{boxSizing:'border-box',padding:'28px 20px 26px',borderRadius:'var(--radius-lg)',background:T[tone]||T.white,backdropFilter:'blur(var(--blur-glass))',WebkitBackdropFilter:'blur(var(--blur-glass))',border:'1px solid rgba(255,255,255,.7)',boxShadow:h?'var(--shadow-float)':'var(--shadow-card)',transform:h?'translateY(-2px)':'none',transition:'all var(--dur-slow) var(--ease-out)',...style}}>
    <div style={{display:'flex',alignItems:'center',gap:8,font:'var(--text-h4)',fontSize:16,color:'var(--text-strong)',marginBottom:18}}>{icon&&<Icon name={icon} size={18}/>}{title}</div>
    <div style={{font:'var(--text-small)',lineHeight:1.6,color:'var(--text-body)'}}>{children}</div>
  </div>;
}