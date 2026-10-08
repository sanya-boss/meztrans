import React from 'react';
export function StripeDivider({thickness=8,style}){
  return <div role="separator" style={{width:'100%',...style}}><div style={{height:thickness,background:'var(--brand-primary)'}}/><div style={{height:thickness,background:'var(--brand-secondary)'}}/></div>;
}