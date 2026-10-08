import React from 'react';
export function LangSwitch({options=[{value:'ru',label:'Русский'},{value:'en',label:'English'}],value,onChange,style}){
  return <div style={{display:'flex',gap:16,...style}}>{options.map((o,i)=>{
    const c=i%2===0?'var(--brand-primary)':'var(--brand-secondary)';const on=o.value===value;
    return <button key={o.value} onClick={()=>onChange&&onChange(o.value)} style={{height:40,padding:'0 18px',minWidth:98,background:on?c:'transparent',color:on?'var(--white)':'var(--ink-800)',border:'2px solid '+c,borderRadius:'var(--radius-sm)',font:'var(--fw-semibold) 13px/1 var(--font-sans)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',cursor:'pointer',transition:'background var(--dur-base) var(--ease-out),color var(--dur-base)'}}>{o.label}</button>;
  })}</div>;
}