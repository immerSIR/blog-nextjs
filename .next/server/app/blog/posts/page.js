(()=>{var e={};e.id=568,e.ids=[568],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1922:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l}),s(6074),s(4849),s(2029),s(5866);var i=s(3191),r=s(8716),o=s(7922),a=s.n(o),n=s(5231),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);s.d(t,d);let l=["",{children:["blog",{children:["posts",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6074)),"/Users/babawhizzo/Code/next_js/blog-nextjs/src/app/blog/posts/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,4849)),"/Users/babawhizzo/Code/next_js/blog-nextjs/src/app/blog/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2029)),"/Users/babawhizzo/Code/next_js/blog-nextjs/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/babawhizzo/Code/next_js/blog-nextjs/src/app/blog/posts/page.tsx"],u="/blog/posts/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/blog/posts/page",pathname:"/blog/posts",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5973:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},8454:()=>{},6460:(e,t,s)=>{Promise.resolve().then(s.bind(s,5602))},5303:()=>{},5602:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var i=s(326),r=s(982),o=s(8885),a=s(8566),n=s(8258),d=s(5047),l=s(434),c=s(1135);let u=[{name:"Home",href:"/",icon:r.Z},{name:"Posts",href:"/blog/posts",icon:o.Z},{name:"About",href:"/blog/about",icon:a.Z},{name:"Contact",href:"/blog/contact",icon:n.Z}];async function m(){let e=(0,d.usePathname)();return i.jsx(i.Fragment,{children:u.map(t=>{let s=t.icon;return(0,i.jsxs)(l.default,{href:t.href,className:(0,c.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-purple-100":e===t.href}),children:[i.jsx(s,{className:"w-6"}),i.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},4849:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var i=s(9510),r=s(8570);let o=(0,r.createProxy)(String.raw`/Users/babawhizzo/Code/next_js/blog-nextjs/src/app/ui/components/nav-links.tsx`),{__esModule:a,$$typeof:n}=o;o.default;let d=(0,r.createProxy)(String.raw`/Users/babawhizzo/Code/next_js/blog-nextjs/src/app/ui/components/nav-links.tsx#default`);function l(){return i.jsx("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:i.jsx("div",{className:"flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:i.jsx(d,{})})})}function c({children:e}){return(0,i.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden bg-white",children:[i.jsx("div",{className:"w-full flex-none md:w-64",children:i.jsx(l,{})}),i.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},6074:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var i=s(9510),r=s(4422),o=s(280);function a(){return(0,i.jsxs)(i.Fragment,{children:[i.jsx("h1",{children:"Posts"}),r.posts.map(e=>i.jsx(o.Z,{...e},e.id))]})}},2029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>a});var i=s(9510),r=s(1553),o=s.n(r);s(3069);let a={title:"Create Next App",description:"Generated by create next app"};function n({children:e}){return i.jsx("html",{lang:"en",children:i.jsx("body",{className:o().className,children:e})})}},4422:e=>{"use strict";e.exports={posts:[{id:"a5e08164-b12b-4e72-9191-2f7daadb4e88",title:"Post Title 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do ei",date:"276761",user:"Sandra B"},{id:"6bd38af3-8a95-4a7a-add7-fd69c6b8f124",title:"Post Title 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:"911166",user:"Sandra B"},{id:"836b0611-e82e-4b5e-8ab9-8e9f98e43549",title:"Post Title 3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"393288",user:"Sandy L"},{id:"b08212a4-fd01-4d39-892c-15d49b8a96a4",title:"Post Title 4",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ",date:"1047019",user:"Jane S"},{id:"bd0f47c5-3cd0-48ee-9b52-104a914e2354",title:"Post Title 5",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:"544869",user:"Jane S"},{id:"e7c26aa0-76f7-4037-b341-4a794c9c8f64",title:"Post Title 6",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliq",date:"642458",user:"Sandra B"},{id:"2375388b-3b07-401b-9f70-fd69b4ef5ead",title:"Post Title 7",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:"304066",user:"Jane S"},{id:"b1a5ffb6-1152-4a9f-a997-9f4e66e140af",title:"Post Title 8",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusm",date:"1005474",user:"John D"},{id:"7f9622bb-eb4d-4f42-b66a-7dfa28f5e32a",title:"Post Title 9",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore e",date:"113002",user:"John D"},{id:"724688be-3911-4bf7-8717-4ac8931daf8c",title:"Post Title 10",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:"632982",user:"Sandy L"}]}},280:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var i=s(9510);function r({id:e,title:t,content:s,date:r}){return(0,i.jsxs)("div",{className:"border border-gray-200 p-4 my-4",children:[i.jsx("h2",{children:t}),i.jsx("p",{className:"text-gray-500",children:r}),i.jsx("p",{children:s})]},e)}s(1159)},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(6621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3069:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[948,863,809,934],()=>s(1922));module.exports=i})();