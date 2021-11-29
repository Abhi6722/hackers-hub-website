"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8203],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),l=n(1048),o=n(2713);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3309),u=n(6010),c="tabItem_vU9c";function p(e){var t,n,r,l=e.lazy,o=e.block,p=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),k=y.tabGroupChoices,E=y.setTabGroupChoices,w=(0,a.useState)(g),N=w[0],x=w[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=k[d];null!=j&&j!==N&&h.some((function(e){return e.value===j}))&&x(j)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==N&&(T(t),x(r),null!=d&&E(d,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:C,onClick:C},null!=n?n:t)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},193:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var r=n(7462),a=n(3366),l=(n(7294),n(4137)),o=n(7225),i=n(8448),s=["components"],u={id:"parentElement",title:"parentElement",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/parentElement.ts"},c=void 0,p={unversionedId:"api/element/parentElement",id:"api/element/parentElement",isDocsHomePage:!1,title:"parentElement",description:"Returns the parent element of the selected DOM-element.",source:"@site/docs/api/element/_parentElement.md",sourceDirName:"api/element",slug:"/api/element/parentElement",permalink:"/docs/api/element/parentElement",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/parentElement.ts",tags:[],version:"current",frontMatter:{id:"parentElement",title:"parentElement",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/parentElement.ts"},sidebar:"api",previous:{title:"nextElement",permalink:"/docs/api/element/nextElement"},next:{title:"previousElement",permalink:"/docs/api/element/previousElement"}},m=[{value:"Usage",id:"usage",children:[],level:5},{value:"Examples",id:"examples",children:[],level:5}],d={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns the parent element of the selected DOM-element."),(0,l.kt)("h5",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"$(selector).parentElement()\n")),(0,l.kt)("h5",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="parent">\n    <p>Sibling One</p>\n    <p>Sibling Two</p>\n    <p>Sibling Three</p>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="parentElement.js"',title:'"parentElement.js"'},"it('should get class from parent element', async () => {\n    const elem = await $$('p');\n    const parent = await elem[2].parentElement()\n    console.log(await parent.getAttribute('class')); // outputs: \"parent\"\n});\n"))),(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="parent">\n    <p>Sibling One</p>\n    <p>Sibling Two</p>\n    <p>Sibling Three</p>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="parentElement.js"',title:'"parentElement.js"'},"it('should get class from parent element', () => {\n    const elem = $$('p');\n    const parent = elem[2].parentElement()\n    console.log(parent.getAttribute('class')); // outputs: \"parent\"\n});\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,l.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}v.isMDXComponent=!0}}]);