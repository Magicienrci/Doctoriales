import{j as e,W as p,Y as g,a as h}from"./app-DcmQJ0rK.js";import{G as f}from"./GuestLayout-DltOADSs.js";import{T as o,I as n}from"./TextInput-MELbDgtI.js";import{I as l}from"./InputLabel-CpGqyPd5.js";import{P as j}from"./PrimaryButton-PET6mUvJ.js";/* empty css                 */import"./index-DrjDiXvL.js";import"./iconBase-DlzhwlKu.js";import"./Loader-SbBu8PGV.js";function v({className:a="",...r}){return e.jsx("input",{...r,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+a})}function L({status:a,canResetPassword:r}){const{data:i,setData:t,post:c,processing:d,errors:m,reset:u}=p({email:"",password:"",remember:!1}),x=s=>{s.preventDefault(),c(route("login"),{onFinish:()=>u("password")})};return e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx(g,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsx("div",{className:"registercontainer",children:e.jsxs("div",{className:"registermain",children:[e.jsx("div",{className:"mainleft",children:e.jsx("img",{src:"https://doctoriales.inphb.ci/images/affiche.png",alt:""})}),e.jsxs("form",{onSubmit:x,className:"mainright",children:[e.jsxs("div",{className:"mainrightdiv",children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:i.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>t("email",s.target.value)}),e.jsx(n,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mainrightdiv",children:[e.jsx(l,{htmlFor:"password",value:" mot de passe (MDP)"}),e.jsx(o,{id:"password",type:"password",name:"password",value:i.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>t("password",s.target.value)}),e.jsx(n,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(v,{name:"remember",checked:i.remember,onChange:s=>t("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Se souvenir de moi"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[r&&e.jsx(h,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"MDP oublié ? Cliquez içi !"}),e.jsx(j,{className:"ms-4",disabled:d,children:"Log in"})]})]})]})})]})})}export{L as default};
