import{W as v,r as j,j as e}from"./app-C-2TcMJ4.js";import{A as p}from"./AuthenticatedLayout-C9v7JfNf.js";/* empty css             */import"./transition-B6KQ9aQN.js";function m({userInformation:l}){const{data:c,setData:s,post:i,put:h}=v({nom:(l==null?void 0:l.nom)||"",prenoms:(l==null?void 0:l.prenoms)||"",sexe:(l==null?void 0:l.sexe)||"Homme",statut:(l==null?void 0:l.statut)||"Doctorant",ecole_origine:(l==null?void 0:l.ecole_origine)||"",umri_ufr:(l==null?void 0:l.umri_ufr)||"",n_etudiant:(l==null?void 0:l.n_etudiant)||"",contact:(l==null?void 0:l.contact)||"",gala:(l==null?void 0:l.gala)||!1,acc:(l==null?void 0:l.acc)||!1,n_acc:(l==null?void 0:l.n_acc)||0}),[t,d]=j.useState(!l),x=a=>{a.preventDefault(),l&&l.id?h(route("user.update",l.id)):i(route("user.store")),d(!1)},n=()=>{console.log("Switching to edit mode"),d(!0)};return e.jsx(e.Fragment,{children:e.jsx(p,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"VOS INFORMATIONS D'IDENTIFICATION"}),children:e.jsxs("div",{children:[e.jsxs("form",{className:"dashform",onSubmit:x,children:[e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"nom",children:"Nom : "}),e.jsx("input",{type:"text",value:c.nom,onChange:a=>s("nom",a.target.value),placeholder:"Nom",disabled:!t})]}),e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"prenoms",children:"Prénoms : "}),e.jsx("input",{type:"text",value:c.prenoms,onChange:a=>s("prenoms",a.target.value),placeholder:"Prénoms",disabled:!t})]}),e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"sexe",children:"Sexe : "}),e.jsxs("select",{value:c.sexe,onChange:a=>s("sexe",a.target.value),disabled:!t,children:[e.jsx("option",{value:"Homme",children:"Homme"}),e.jsx("option",{value:"Femme",children:"Femme"})]})]}),e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"statut",children:"Vous êtes : "}),e.jsxs("select",{value:c.statut,onChange:a=>s("statut",a.target.value),disabled:!t,children:[e.jsx("option",{value:"Doctorant",children:"Doctorant"}),e.jsx("option",{value:"Enseignant",children:"Enseignant"}),e.jsx("option",{value:"Participant",children:"Participant"}),e.jsx("option",{value:"Autres",children:"Autres"})]})]}),e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"ecole_origine",children:"Ecole d'origine : "}),e.jsx("input",{type:"text",value:c.ecole_origine,onChange:a=>s("ecole_origine",a.target.value),placeholder:"École d'origine",disabled:!t})]}),e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"umri_ufr",children:" UMRI | UFR : "}),e.jsx("input",{type:"text",value:c.umri_ufr,onChange:a=>s("umri_ufr",a.target.value),placeholder:"UMRI/UFR",disabled:!t})]}),e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"n_etudiant",children:" N° Carte étudiant :"}),e.jsx("input",{type:"text",value:c.n_etudiant,onChange:a=>s("n_etudiant",a.target.value),placeholder:"Numéro étudiant",disabled:!t})]}),e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"contat",children:"Contact : "}),e.jsx("input",{type:"text",value:c.contact,onChange:a=>s("contact",a.target.value),placeholder:"Contact",disabled:!t})]}),e.jsxs("div",{style:{textAlign:"center",color:"red"},children:["Cette section est obligatoire, veuillez cocher tous les champs. ",e.jsx("br",{})," Si vous ne serez pas accompagné au gala, merci choisir zéro nombre d'invité. "]}),e.jsxs("div",{className:"dashformdivs",children:[e.jsxs("div",{className:"dashformdivsh",children:[e.jsx("label",{htmlFor:"gala",children:"Dîner-gala ?"}),e.jsx("input",{type:"checkbox",checked:c.gala,onChange:a=>s("gala",a.target.checked),disabled:!t})]}),e.jsxs("div",{className:"dashformdivsh",children:[e.jsx("label",{htmlFor:"acc",children:"Accompagé ?  "}),e.jsx("input",{type:"checkbox",checked:c.acc,onChange:a=>s("acc",a.target.checked),disabled:!t})]})]}),e.jsxs("div",{className:"dashformdiv",children:[e.jsx("label",{htmlFor:"n_acc",children:"Nb d'invité au gala : "}),e.jsxs("select",{value:c.n_acc,onChange:a=>s("n_acc",parseInt(a.target.value)),disabled:!c.acc||!t,children:[e.jsx("option",{value:0,children:"0"}),e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"})]})]}),t&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"enregistrer",children:e.jsx("button",{className:"button",type:"submit",children:"Enregistrer"})})})]}),!t&&e.jsx("div",{className:"enregistrer",children:e.jsx("button",{className:"button",type:"button",onClick:n,children:"Modifier mes informations"})})]})})})}export{m as default};
