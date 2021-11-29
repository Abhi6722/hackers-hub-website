"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4315],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(1048),l=n(2713);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3309),s=n(6010),c="tabItem_vU9c";function p(e){var t,n,r,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),w=g.tabGroupChoices,N=g.setTabGroupChoices,y=(0,a.useState)(k),T=y[0],x=y[1],O=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==T&&f.some((function(e){return e.value===j}))&&x(j)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==T&&(C(t),x(r),null!=m&&N(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},h)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:E,onClick:E},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4499:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=n(7225),i=n(8448),u=["components"],s={id:"throttle",title:"throttle",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/throttle.ts"},c=void 0,p={unversionedId:"api/browser/throttle",id:"api/browser/throttle",isDocsHomePage:!1,title:"throttle",description:"Throttle the network capabilities of the browser. This can help to",source:"@site/docs/api/browser/_throttle.md",sourceDirName:"api/browser",slug:"/api/browser/throttle",permalink:"/docs/api/browser/throttle",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/throttle.ts",tags:[],version:"current",frontMatter:{id:"throttle",title:"throttle",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/throttle.ts"},sidebar:"api",previous:{title:"switchWindow",permalink:"/docs/api/browser/switchWindow"},next:{title:"touchAction",permalink:"/docs/api/browser/touchAction"}},d=[{value:"Usage",id:"usage",children:[],level:5},{value:"Parameters",id:"parameters",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Throttle the network capabilities of the browser. This can help to\nemulate certain scenarios where a user loses their internet connection\nand your app needs to address that."),(0,o.kt)("p",null,"There are many presets available with default configurations for ease of use.\nThey are ",(0,o.kt)("inlineCode",{parentName:"p"},"offline"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GPRS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Regular2G"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Good2G"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Regular3G"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Good3G"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Regular4G"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DSL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WiFi"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"online"),"."),(0,o.kt)("p",null,"You can see the values for these presets ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/blob/6824e4eb118a8d20685f12f4bc42f13fd56f8a25/packages/webdriverio/src/commands/browser/throttle.js#L29"},"in the source code"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that using the ",(0,o.kt)("inlineCode",{parentName:"p"},"throttle")," command requires support for Chrome DevTools protocol and e.g.\ncan not be used when running automated tests in the cloud. Find out more in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/automationProtocols"},"Automation Protocols")," section."))),(0,o.kt)("h5",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browser.throttle({ offline, latency, downloadThroughput, uploadThroughput })\n")),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Details"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"params"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"ThrottleOptions")),(0,o.kt)("td",{parentName:"tr",align:null},"parameters for throttling")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"params.offline"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"Boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"True to emulate internet disconnection.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"params.latency"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"Number")),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum latency from request sent to response headers received (ms).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"params.downloadThroughput"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"Number")),(0,o.kt)("td",{parentName:"tr",align:null},"Maximal aggregated download throughput (bytes/sec). -1 disables download throttling.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"params.uploadThroughput"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"Number")),(0,o.kt)("td",{parentName:"tr",align:null},"Maximal aggregated upload throughput (bytes/sec). -1 disables upload throttling.")))),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)(l.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="throttle.js"',title:'"throttle.js"'},"it('should throttle the network', async () => {\n    // via static string preset\n    await browser.throttle('Regular 3G')\n\n    // via custom values\n    await browser.throttle({\n        offline: false,\n        downloadThroughput: 200 * 1024 / 8,\n        uploadThroughput: 200 * 1024 / 8,\n        latency: 20\n    })\n});\n"))),(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="throttle.js"',title:'"throttle.js"'},"it('should throttle the network', () => {\n    // via static string preset\n    browser.throttle('Regular 3G')\n\n    // via custom values\n    browser.throttle({\n        offline: false,\n        downloadThroughput: 200 * 1024 / 8,\n        uploadThroughput: 200 * 1024 / 8,\n        latency: 20\n    })\n});\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,o.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}h.isMDXComponent=!0}}]);