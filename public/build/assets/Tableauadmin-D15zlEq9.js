import{r as t,j as e,b as C}from"./app-DS8kNttR.js";import P from"./AdminDashboard-DgN6XGCm.js";function T({users:o,userInformations:S}){const[d,h]=t.useState(25),[n,i]=t.useState(1),[c,m]=t.useState(""),[g,j]=t.useState(o),l=g.filter(s=>s.id>1&&s.email.toLowerCase().includes(c.toLowerCase())),u=Math.ceil(l.length/d),b=l.slice((n-1)*d,n*d),f=s=>{h(parseInt(s.target.value)),i(1)},y=s=>{m(s.target.value),i(1)},[p,x]=t.useState(""),v=async s=>{try{(await C.post("/admin/toggle-payment-status",{userId:s})).status===200&&(j(N=>N.map(r=>r.id===s?{...r,payement:r.payement==="Validé"?"en attente":"Validé"}:r)),x(""))}catch(a){console.error("Failed to update payment status:",a),x("Failed to update payment status. Please try again.")}};return e.jsxs(P,{children:[p&&e.jsx("p",{className:"error-message",children:p}),e.jsxs("div",{className:"tableaucontainer",children:[e.jsxs("div",{className:"tableautitle",children:["Liste des Utilisateurs   ",e.jsxs("span",{style:{marginLeft:"20px",fontSize:"15px",fontWeight:"bolder"},children:["Total : ",o.length-1]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"indices",children:[e.jsxs("div",{className:"indices1",children:[e.jsx("p",{children:"Rechercher par email : "}),e.jsx("label",{children:e.jsx("input",{type:"text",value:c,onChange:y,placeholder:"Entrez l'email",style:{marginLeft:"10px",padding:"5px"}})})]}),e.jsxs("div",{className:"indices2",children:[e.jsx("p",{children:"Afficher par : "}),e.jsx("label",{children:e.jsxs("select",{value:d,onChange:f,children:[e.jsx("option",{value:25,children:"25"}),e.jsx("option",{value:50,children:"50"}),e.jsx("option",{value:100,children:"100"}),e.jsx("option",{value:l.length,children:"Tout"})]})})]})]}),e.jsx("div",{className:"tablecontainer",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{className:"tablehead",children:e.jsxs("tr",{children:[e.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Nom"}),e.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Email"}),e.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Statut Paiement"}),e.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Validation"}),e.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Informations"})]})}),e.jsx("tbody",{children:b.map(s=>e.jsxs("tr",{children:[e.jsx("td",{style:{border:"1px solid #ddd",padding:"8px",textTransform:"uppercase"},children:s.name.toUpperCase()}),e.jsx("td",{style:{border:"1px solid #ddd",padding:"8px"},children:s.email}),e.jsx("td",{style:{border:"1px solid #ddd",padding:"8px",textTransform:"uppercase"},children:s.payement.toUpperCase()}),e.jsx("td",{className:"validation",children:e.jsx("button",{onClick:()=>v(s.id),className:"validationbtn",children:s.payement==="Validé"?"Refuser":"Valider"})}),e.jsx("td",{className:"validation2",children:"OK"})]},s.id))})]})}),e.jsx("div",{style:{marginTop:"10px"},children:Array.from({length:u},(s,a)=>e.jsx("button",{onClick:()=>i(a+1),style:{margin:"0 5px",padding:"5px 10px",backgroundColor:n===a+1?"#007bff":"#f0f0f0",color:n===a+1?"#fff":"#000",border:"none",borderRadius:"4px",cursor:"pointer"},children:a+1},a+1))})]})]})}export{T as default};
