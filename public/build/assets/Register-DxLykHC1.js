import{W as u,j as e,Y as p,a as x}from"./app-q7mMcTrJ.js";import{G as g}from"./GuestLayout-BjumdjQu.js";import{T as t,I as m}from"./TextInput-CkIvFgOB.js";import{I as o}from"./InputLabel-4yPKFTnz.js";import{P as f}from"./PrimaryButton-Cdj4C-bh.js";/* empty css                 */import"./index-DJoz01mN.js";function I(){const{data:a,setData:r,post:n,processing:l,errors:i,reset:d}=u({name:"",email:"",password:"",password_confirmation:""}),c=s=>{s.preventDefault(),n(route("register"),{onFinish:()=>d("password","password_confirmation")})};return e.jsx(e.Fragment,{children:e.jsxs(g,{children:[e.jsx(p,{title:"Register"}),e.jsx("div",{className:"registercontainer",children:e.jsxs("div",{className:"registermain",children:[e.jsx("div",{className:"mainleft",children:e.jsx("img",{src:"https://doctoriales.inphb.ci/images/affiche.png",alt:""})}),e.jsxs("form",{onSubmit:c,className:"mainright",children:[e.jsx("div",{className:"mainrighttitle",children:"INSCRIPTION DOCTORIALES 2024"}),e.jsxs("div",{className:"mainrightdiv",children:[e.jsx(o,{htmlFor:"name",value:"Nom et Prénoms"}),e.jsx(t,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(m,{message:i.name,className:"mt-2"})]}),e.jsxs("div",{className:"mainrightdiv",children:[e.jsx(o,{htmlFor:"email",value:"Email"}),e.jsx(t,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(m,{message:i.email,className:"mt-2"})]}),e.jsxs("div",{className:"mainrightdiv",children:[e.jsx(o,{htmlFor:"password",value:"Mot de passe (MDP)"}),e.jsx(t,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(m,{message:i.password,className:"mt-2"})]}),e.jsxs("div",{className:"mainrightdiv",children:[e.jsx(o,{htmlFor:"password_confirmation",value:"Confirmez votre MDP"}),e.jsx(t,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(m,{message:i.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(x,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Déjà un compte ? Se connecter"}),e.jsx(f,{className:"ms-4",disabled:l,children:"S'inscrire"})]})]})]})})]})})}export{I as default};
