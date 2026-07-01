import{r as e}from"./index-BG5ObeJh.js";import{t}from"./TransformTool-DgP_H7Jq.js";var n=e();function r(){return(0,n.jsx)(t,{title:`Remove Empty Lines`,description:`إزالة الأسطر الفارغة من النص`,placeholder:`apple

banana

orange`,transform:e=>({output:e.split(`
`).filter(e=>e.trim()!==``).join(`
`)})})}export{r as default};