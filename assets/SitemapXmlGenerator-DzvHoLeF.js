import{i as e}from"./rolldown-runtime-aKtaBQYM.js";import{n as t,t as n}from"./ToolPageLayout-CdeXHWCR.js";import{i as r,t as i}from"./index-C-72bdKm.js";import{n as a,t as o}from"./Fields-BXAdeEc6.js";var s=e(r(),1),c=i();function l(){let[e,r]=(0,s.useState)(`https://example.com/
https://example.com/about
https://example.com/contact`),i=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${e.split(`
`).filter(Boolean).map(e=>`  <url>\n    <loc>${e.trim()}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join(`
`)}
</urlset>`;return(0,c.jsx)(n,{title:`sitemap.xml Generator`,description:`ولّد خريطة موقع XML من قائمة الروابط`,actions:{onCopy:()=>i,onDownload:()=>t(`sitemap.xml`,i,`application/xml`)},children:(0,c.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 lg:grid-cols-2`,children:[(0,c.jsx)(o,{label:`الروابط (سطر لكل رابط)`,children:(0,c.jsx)(a,{value:e,onChange:r,rows:12})}),(0,c.jsx)(o,{label:`الناتج`,children:(0,c.jsx)(a,{value:i,readOnly:!0,rows:12})})]})})}export{l as default};