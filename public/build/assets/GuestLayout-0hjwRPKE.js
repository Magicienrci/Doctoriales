import{U as c,j as r,r as f,a as l}from"./app-eLUaK2ht.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=c.createContext&&c.createContext(j),b=["attr","size","title"];function w(e,t){if(e==null)return{};var n=O(e,t),i,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)i=a[s],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function O(e,t){if(e==null)return{};var n={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;n[i]=e[i]}return n}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},h.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(i){N(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function N(e,t,n){return t=y(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=P(e,"string");return typeof t=="symbol"?t:t+""}function P(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function x(e){return e&&e.map((t,n)=>c.createElement(t.tag,m({key:n},t.attr),x(t.child)))}function g(e){return t=>c.createElement(C,h({attr:m({},e.attr)},t),x(e.child))}function C(e){var t=n=>{var{attr:i,size:s,title:a}=e,u=w(e,b),o=s||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),c.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,u,{className:d,style:m(m({color:e.color||n.color},n.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),a&&c.createElement("title",null,a),e.children)};return v!==void 0?c.createElement(v.Consumer,null,n=>t(n)):t(j)}function E(e){return g({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"},child:[]}]})(e)}function L(e){return g({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function z(e){return g({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function S(){return r.jsx("div",{className:"loader-container",children:r.jsx("div",{className:"loader"})})}function M({children:e}){const[t,n]=f.useState(!1),[i,s]=f.useState(!1);f.useEffect(()=>{const u=()=>n(!0),o=()=>n(!1);return window.addEventListener("inertia:start",u),window.addEventListener("inertia:finish",o),()=>{window.removeEventListener("inertia:start",u),window.removeEventListener("inertia:finish",o)}},[]);const a=()=>{s(!i)};return r.jsxs(r.Fragment,{children:[t&&r.jsx(S,{})," ",r.jsxs("div",{className:"guestcontainer",children:[r.jsx("div",{className:"guestmain",children:r.jsxs("div",{className:"guesttophead1",children:[r.jsx("div",{className:"guesttopheadcontenleft",children:r.jsx("div",{className:"lefticon",onClick:()=>window.open("https://wa.me/2250500126993","_blank"),children:r.jsx(E,{})})}),r.jsx("div",{className:"guesttopheadcontenright"})]})}),r.jsxs("div",{className:"guesttophead2",children:[r.jsx("div",{className:"guesttophead2contentleft",onClick:()=>window.open("/","_self"),children:r.jsx("img",{src:"https://doctoriales.inphb.ci/images/logoinphb.png",alt:"Logo"})}),r.jsx("div",{className:"guesttophead2contentmiddle",children:r.jsxs("div",{className:"guesttophead2contentmiddleic",onClick:a,children:[i?r.jsx(L,{}):r.jsx(z,{})," "]})}),r.jsxs("div",{className:"guesttophead2contentright",children:[r.jsx(l,{href:route("login"),className:"guesttophead2contentrightbutton2",children:"Se connecter"}),r.jsx(l,{href:route("register"),className:"guesttophead2contentrightbutton",children:"S'inscrire"})]})]}),i&&r.jsx(r.Fragment,{children:r.jsx("div",{className:"guestnewmenu",children:r.jsx("div",{className:"newmenunav",children:r.jsxs("ul",{children:[r.jsx("li",{onClick:a,className:"navbleu",children:r.jsx(l,{href:"/",children:"Accueil"})}),r.jsx("li",{onClick:a,className:"navyellow",children:r.jsx(l,{href:"/",children:"Photothèque"})}),r.jsx("li",{onClick:a,className:"navwhite",children:r.jsx(l,{href:"/",children:"Actualités"})}),r.jsx("li",{onClick:a,className:"navblack",children:r.jsx(l,{href:"/",children:"à propos"})})]})})})}),r.jsx("div",{className:"guestchildren",children:e})]})]})}export{M as G};
