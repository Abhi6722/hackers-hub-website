"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5882],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8448:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},7225:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7462),a=t(7294),o=t(1048),s=t(2713);var i=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(3309),u=t(6010),c="tabItem_vU9c";function d(e){var n,t,r,o=e.lazy,s=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,l.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),g=w.tabGroupChoices,k=w.setTabGroupChoices,N=(0,a.useState)(y),S=N[0],O=N[1],x=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==S&&b.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==S&&(T(n),O(r),null!=m&&k(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":S===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function p(e){var n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},2713:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},3155:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(4137)),s=t(7225),i=t(8448),l=["components"],u={id:"reloadSession",title:"reloadSession",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/reloadSession.ts"},c=void 0,d={unversionedId:"api/browser/reloadSession",id:"api/browser/reloadSession",isDocsHomePage:!1,title:"reloadSession",description:"Creates a new Selenium session with your current capabilities. This is useful if you",source:"@site/docs/api/browser/_reloadSession.md",sourceDirName:"api/browser",slug:"/api/browser/reloadSession",permalink:"/docs/api/browser/reloadSession",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/reloadSession.ts",tags:[],version:"current",frontMatter:{id:"reloadSession",title:"reloadSession",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/reloadSession.ts"},sidebar:"api",previous:{title:"react$",permalink:"/docs/api/browser/react$"},next:{title:"savePDF",permalink:"/docs/api/browser/savePDF"}},p=[{value:"Usage",id:"usage",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates a new Selenium session with your current capabilities. This is useful if you\ntest highly stateful application where you need to clean the browser session between\nthe tests in your spec file to avoid creating hundreds of single test files with WDIO.\nBe careful though, this command affects your test time tremendously since spawning\nnew Selenium sessions is very time consuming especially when using cloud services."),(0,o.kt)("h5",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browser.reloadSession()\n")),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)(s.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="reloadSync.js"',title:'"reloadSync.js"'},"it('should reload my session with current capabilities', async () => {\n    console.log(browser.sessionId) // outputs: e042b3f3cd5a479da4e171825e96e655\n    await browser.reloadSession()\n    console.log(browser.sessionId) // outputs: 9a0d9bf9d4864160aa982c50cf18a573\n})\n"))),(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="reloadSync.js"',title:'"reloadSync.js"'},"it('should reload my session with current capabilities', () => {\n    console.log(browser.sessionId) // outputs: e042b3f3cd5a479da4e171825e96e655\n    browser.reloadSession()\n    console.log(browser.sessionId) // outputs: 9a0d9bf9d4864160aa982c50cf18a573\n})\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,o.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}f.isMDXComponent=!0}}]);