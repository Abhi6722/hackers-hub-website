"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[522],{4137:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8448:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},7225:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(7462),o=t(7294),a=t(1048),i=t(2713);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3309),c=t(6010),p="tabItem_vU9c";function s(e){var r,t,n,a=e.lazy,i=e.block,s=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:v.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),w=(0,u.lx)(k,(function(e,r){return e.value===r.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===s?s:null!=(r=null!=s?s:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(n=v[0])?void 0:n.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=l(),g=h.tabGroupChoices,y=h.setTabGroupChoices,O=(0,o.useState)(b),E=O[0],N=O[1],j=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==E&&k.some((function(e){return e.value===C}))&&N(C)}var D=function(e){var r=e.currentTarget,t=j.indexOf(r),n=k[t].value;n!==E&&(T(r),N(n),null!=m&&y(m,n))},x=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break;case"ArrowLeft":var o=j.indexOf(e.currentTarget)-1;t=j[o]||j[j.length-1]}null==(r=t)||r.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},f)},k.map((function(e){var r=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:E===r?0:-1,"aria-selected":E===r,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":E===r}),key:r,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:D,onClick:D},null!=t?t:r)}))),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==E})}))))}function d(e){var r=(0,a.Z)();return o.createElement(s,(0,n.Z)({key:String(r)},e))}},2713:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},6274:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(4137)),i=(t(7225),t(8448),["components"]),l={id:"wdio-markdown-reporter",title:"Markdown Reporter",custom_edit_url:"https://github.com/carmenmitru/wdio-markdown-reporter/edit/master//README.md"},u=void 0,c={unversionedId:"wdio-markdown-reporter",id:"wdio-markdown-reporter",isDocsHomePage:!1,title:"Markdown Reporter",description:"wdio-markdown-reporter is a 3rd party package, for more information please see GitHub | npm",source:"@site/docs/_wdio-markdown-reporter.md",sourceDirName:".",slug:"/wdio-markdown-reporter",permalink:"/docs/wdio-markdown-reporter",editUrl:"https://github.com/carmenmitru/wdio-markdown-reporter/edit/master//README.md",tags:[],version:"current",frontMatter:{id:"wdio-markdown-reporter",title:"Markdown Reporter",custom_edit_url:"https://github.com/carmenmitru/wdio-markdown-reporter/edit/master//README.md"},sidebar:"docs",previous:{title:"CucumberJS JSON Reporter",permalink:"/docs/wdio-cucumberjs-json-reporter"},next:{title:"Delta Reporter Reporter",permalink:"/docs/wdio-delta-reporter-service"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Configuration Options",id:"configuration-options",children:[{value:"outputDir",id:"outputdir",children:[],level:3}],level:2},{value:"Merge all *.md files",id:"merge-all-md-files",children:[],level:2}],s={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"wdio-markdown-reporter is a 3rd party package, for more information please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carmenmitru/wdio-markdown-reporter"},"GitHub")," | ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wdio-markdown-reporter"},"npm"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A WebdriverIO plugin to report in Markdown style.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/carmenmitru/wdio-markdown-reporter/blob/master/./img/reporter.png",alt:"Reporter"})),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You can simple do it by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wdio-markdown-reporter --save-dev\n")),(0,a.kt)("p",null,"Instructions on how to install ",(0,a.kt)("inlineCode",{parentName:"p"},"WebdriverIO")," can be found ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted.html"},"here.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"At the top of the wdio.conf.js-file, add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// wdio.conf.js\nvar markdownReporter = require("wdio-markdown-reporter");\n')),(0,a.kt)("p",null,"In order to use the service you need to add reporter to your services array in wdio.conf.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n  reporter: : [\n    [markdownReporter, {\n      outputDir: ' ',\n    }],\n  ],\n};\n")),(0,a.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,a.kt)("p",null,"The following configuration options are supported and are all optional.\nBy default none of the config options are set."),(0,a.kt)("h3",{id:"outputdir"},"outputDir"),(0,a.kt)("p",null,"Define a directory where your markdown file should get stored."),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),(0,a.kt)("br",null),"\nRequired"),(0,a.kt)("h2",{id:"merge-all-md-files"},"Merge all ","*",".md files"),(0,a.kt)("p",null,"To generate only one markdown file use the ",(0,a.kt)("strong",{parentName:"p"},"concat-cli")," CLI to concat the files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"concat-cli -f ./markdown-reporter/*.md -o mergeResult.md\n\n")))}d.isMDXComponent=!0}}]);