import React from 'react';
const CDN='https://unpkg.com/lucide-static@0.452.0/icons/';
export function Icon({name='circle',size=20,color='currentColor',style,...rest}){
  const url='url('+CDN+name+'.svg)';
  return <span aria-hidden="true" {...rest} style={{display:'inline-block',flex:'none',width:size,height:size,background:color,WebkitMaskImage:url,maskImage:url,WebkitMaskSize:'contain',maskSize:'contain',WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat',WebkitMaskPosition:'center',maskPosition:'center',...style}}/>;
}