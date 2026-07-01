import{t as e}from"./index-C-72bdKm.js";import{t}from"./TransformTool-B66bGKTk.js";var n=e();function r(){return(0,n.jsx)(t,{title:`Remove Duplicate Lines`,description:`إزالة الأسطر المكررة من النص مع الحفاظ على الترتيب`,placeholder:`apple
banana
apple
orange`,transform:e=>({output:Array.from(new Set(e.split(`
`))).join(`
`)})})}export{r as default};