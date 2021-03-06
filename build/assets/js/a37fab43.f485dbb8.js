"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9855],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,v=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(1048),l=n(2713);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3309),s=n(6010),c="tabItem_vU9c";function m(e){var t,n,r,o=e.lazy,l=e.block,m=e.defaultValue,d=e.values,p=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),k=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,a.useState)(y),T=N[0],x=N[1],j=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var E=k[p];null!=E&&E!==T&&f.some((function(e){return e.value===E}))&&x(E)}var $=function(e){var t=e.currentTarget,n=j.indexOf(t),r=f[n].value;r!==T&&(O(t),x(r),null!=p&&w(p,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},v)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:$,onClick:$},null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},8895:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return v}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=n(7225),i=n(8448),u=["components"],s={id:"custom$",title:"custom$",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/custom$.ts"},c=void 0,m={unversionedId:"api/element/custom$",id:"api/element/custom$",isDocsHomePage:!1,title:"custom$",description:"The custom$ allows you to use a custom strategy declared by using browser.addLocatorStrategy",source:"@site/docs/api/element/_custom$.md",sourceDirName:"api/element",slug:"/api/element/custom$",permalink:"/docs/api/element/custom$",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/custom$.ts",tags:[],version:"current",frontMatter:{id:"custom$",title:"custom$",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/custom$.ts"},sidebar:"api",previous:{title:"custom$$",permalink:"/docs/api/element/custom$$"},next:{title:"doubleClick",permalink:"/docs/api/element/doubleClick"}},d=[{value:"Usage",id:"usage",children:[],level:5},{value:"Parameters",id:"parameters",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],p={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"custom$")," allows you to use a custom strategy declared by using ",(0,o.kt)("inlineCode",{parentName:"p"},"browser.addLocatorStrategy")),(0,o.kt)("h5",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$(selector).custom$(strategyName, strategyArguments)\n")),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Details"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"strategyName"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"String")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"strategyArguments"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"Any")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)(l.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="example.js"',title:'"example.js"'},"it('should fetch the project title', async () => {\n    await browser.url('https://webdriver.io')\n    await browser.addLocatorStrategy('myStrat', (selector) => {\n        return document.querySelectorAll(selector)\n    })\n\n    const header = await browser.custom$('myStrat', 'header')\n    const projectTitle = await header.custom$('myStrat', '.projectTitle')\n\n    console.log(projectTitle.getText()) // WEBDRIVER I/O\n})\n"))),(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="example.js"',title:'"example.js"'},"it('should fetch the project title', () => {\n    browser.url('https://webdriver.io')\n    browser.addLocatorStrategy('myStrat', (selector) => {\n        return document.querySelectorAll(selector)\n    })\n\n    const header = browser.custom$('myStrat', 'header')\n    const projectTitle = header.custom$('myStrat', '.projectTitle')\n\n    console.log(projectTitle.getText()) // WEBDRIVER I/O\n})\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,o.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}v.isMDXComponent=!0}}]);