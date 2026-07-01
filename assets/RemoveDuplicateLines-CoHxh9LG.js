import{r as e}from"./index-BG5ObeJh.js";import{t}from"./TransformTool-DgP_H7Jq.js";var n=e();function r(){return(0,n.jsx)(t,{title:`Remove Duplicate Lines`,description:`إزالة الأسطر المكررة من النص مع الحفاظ على الترتيب`,placeholder:`apple
banana
apple
orange`,transform:e=>({output:Array.from(new Set(e.split(`
`))).join(`
`)})})}export{r as default};