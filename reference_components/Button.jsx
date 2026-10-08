import React from 'react';
import {Icon} from './Icon.jsx';
const V={
  primary:{bg:'var(--brand-primary)',hover:'var(--brand-primary-hover)',fg:'var(--text-on-brand)',bd:'transparent',sh:'var(--shadow-red)'},
  secondary:{bg:'var(--brand-secondary)',hover:'var(--brand-secondary-hover)',fg:'var(--text-on-brand)',bd:'transparent',sh:'var(--shadow-blue)'},
  dark:{bg:'var(--ink-800)',hover:'var(--ink-900)',fg:'var(--white)',bd:'transparent',sh:'var(--shadow-card)'},
  'outline-red':{bg:'transparent',hover:'var(--red-50)',fg:'var(--ink-800)',bd:'var(--brand-primary)',sh:'none'},
  'outline-blue':{bg:'transparent',hover:'var(--blue-50)',fg:'var(--ink-800)',bd:'var(--brand-secondary)',sh:'none'},
  ghost:{bg:'transparent',hover:'rgba(0,0,0,.05)',fg:'var(--ink-800)',bd:'transparent',sh:'none'},
};
export function Button({variant='primary',size='md',icon,iconRight,disabled,fullWidth,children,onClick,type='button',style}){
  const [h,setH]=React.useState(false);const [p,setP]=React.useState(false);
  const v=V[variant]||V.primary;const sm=size==='sm';
  return <button type={type} disabled={disabled} onClick={onClick}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,height:sm?'var(--control-h-sm)':'var(--control-h)',padding:sm?'0 18px':'0 36px',minWidth:sm?0:180,width:fullWidth?'100%':undefined,
    font:'var(--text-button)',letterSpacing:variant.startsWith('outline')?'var(--ls-caps)':0,textTransform:variant.startsWith('outline')?'uppercase':'none',
    color:v.fg,background:h&&!disabled?v.hover:v.bg,border:'var(--border-width-strong) solid '+v.bd,borderRadius:'var(--radius-sm)',boxShadow:disabled?'none':v.sh,
    cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,transform:p&&!disabled?'translateY(1px) scale(.98)':'none',transition:'background var(--dur-base) var(--ease-out),transform var(--dur-fast) var(--ease-out)',...style}}>
    {icon&&<Icon name={icon} size={sm?16:18}/>}{children}{iconRight&&<Icon name={iconRight} size={sm?16:18}/>}
  </button>;
}