"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1859],{4137:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(h,a(a({ref:r},c),{},{components:t})):n.createElement(h,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8448:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},7225:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(7462),o=t(7294),i=t(1048),a=t(2713);var l=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3309),s=t(6010),c="tabItem_vU9c";function p(e){var r,t,n,i=e.lazy,a=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:v.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),k=(0,u.lx)(f,(function(e,r){return e.value===r.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(r=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(n=v[0])?void 0:n.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,o.useState)(g),C=N[0],O=N[1],E=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=w[m];null!=D&&D!==C&&f.some((function(e){return e.value===D}))&&O(D)}var x=function(e){var r=e.currentTarget,t=E.indexOf(r),n=f[t].value;n!==C&&(T(r),O(n),null!=m&&y(m,n))},j=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;t=E[n]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;t=E[o]||E[E.length-1]}null==(r=t)||r.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},h)},f.map((function(e){var r=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:C===r?0:-1,"aria-selected":C===r,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":C===r}),key:r,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:x,onClick:x},null!=t?t:r)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==C})}))))}function d(e){var r=(0,i.Z)();return o.createElement(p,(0,n.Z)({key:String(r)},e))}},2713:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},9245:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=t(7462),o=t(3366),i=(t(7294),t(4137)),a=(t(7225),t(8448),["components"]),l={id:"wdio-chromedriver-service",title:"ChromeDriver Service",custom_edit_url:"https://github.com/atti187/wdio-chromedriver-service/edit/master//README.md"},u=void 0,s={unversionedId:"wdio-chromedriver-service",id:"wdio-chromedriver-service",isDocsHomePage:!1,title:"ChromeDriver Service",description:"wdio-chromedriver-service is a 3rd party package, for more information please see GitHub | npm",source:"@site/docs/_wdio-chromedriver-service.md",sourceDirName:".",slug:"/wdio-chromedriver-service",permalink:"/docs/wdio-chromedriver-service",editUrl:"https://github.com/atti187/wdio-chromedriver-service/edit/master//README.md",tags:[],version:"current",frontMatter:{id:"wdio-chromedriver-service",title:"ChromeDriver Service",custom_edit_url:"https://github.com/atti187/wdio-chromedriver-service/edit/master//README.md"},sidebar:"docs",previous:{title:"Webdriver Mock Service",permalink:"/docs/webdriver-mock-service"},next:{title:"Intercept Service",permalink:"/docs/wdio-intercept-service"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Options",id:"options",children:[{value:"port",id:"port",children:[],level:3},{value:"path",id:"path",children:[],level:3},{value:"protocol",id:"protocol",children:[],level:3},{value:"hostname",id:"hostname",children:[],level:3},{value:"outputDir",id:"outputdir",children:[],level:3},{value:"logFileName",id:"logfilename",children:[],level:3},{value:"chromedriverCustomPath",id:"chromedrivercustompath",children:[],level:3}],level:2}],p={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"wdio-chromedriver-service is a 3rd party package, for more information please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/atti187/wdio-chromedriver-service"},"GitHub")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wdio-chromedriver-service"},"npm"))),(0,i.kt)("p",null,"(Based entirely on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-selenium-standalone-service"},"wdio-selenium-standalone-service"),".)"),(0,i.kt)("p",null,"Note:\\\nIf you're working with WebdriverIO v7, use version 7.X.X\\\nIf you're working with WebdriverIO v6, use version 6.X.X\\\nIf you're working with WebdriverIO v5, use version 5.X.X"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This service helps you to run ChromeDriver seamlessly when running tests with the ",(0,i.kt)("a",{parentName:"p",href:"http://webdriver.io/guide/testrunner/gettingstarted.html"},"WDIO testrunner"),". It uses the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chromedriver"},"chromedriver")," NPM package that wraps the ChromeDriver for you."),(0,i.kt)("p",null,"Note - this service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.\nObviously, it only supports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"capabilities: [{\n    browserName: 'chrome'\n}]\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The easiest way is to keep ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio-chromedriver-service")," as a devDependency in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "wdio-chromedriver-service": "^6.0.0"\n  }\n}\n')),(0,i.kt)("p",null,"You can simple do it by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wdio-chromedriver-service --save-dev\n")),(0,i.kt)("p",null,"Note! You have to install ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chromedriver"},"chromedriver"),"  separately, as it's a peerDependency of this project, and you're free to choose what version to use. Install it using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install chromedriver --save-dev\n")),(0,i.kt)("p",null,"Instructions on how to install ",(0,i.kt)("inlineCode",{parentName:"p"},"WebdriverIO")," can be found ",(0,i.kt)("a",{parentName:"p",href:"http://webdriver.io/guide/getstarted/install.html"},"here.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"By design, only Google Chrome is available (when installed on the host system). In order to use the service you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"chromedriver")," to your service array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n  outputDir: 'all-logs',\n  // ...\n  services: [\n    ['chromedriver', {\n        logFileName: 'wdio-chromedriver.log', // default\n        outputDir: 'driver-logs', // overwrites the config.outputDir\n        args: ['--silent']\n    }]\n  ],\n  // ...\n};\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"port"},"port"),(0,i.kt)("p",null,"The port on which the driver should run on"),(0,i.kt)("p",null,"Example: 7676"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h3",{id:"path"},"path"),(0,i.kt)("p",null,"The path on which the driver should run on"),(0,i.kt)("p",null,"Example:  ",(0,i.kt)("inlineCode",{parentName:"p"},"/")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"protocol"},"protocol"),(0,i.kt)("p",null,"The protocol on which the driver should use"),(0,i.kt)("p",null,"Example:  ",(0,i.kt)("inlineCode",{parentName:"p"},"http")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"hostname"},"hostname"),(0,i.kt)("p",null,"The protocol on which the driver should use"),(0,i.kt)("p",null,"Example:  ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"outputdir"},"outputDir"),(0,i.kt)("p",null,"The path where the output of the ChromeDriver server should be stored (uses the config.outputDir by default when not set)."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"driver-logs")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"logfilename"},"logFileName"),(0,i.kt)("p",null,"The name of the log file to be written in ",(0,i.kt)("inlineCode",{parentName:"p"},"outputDir"),"."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio-chromedriver.log")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"chromedrivercustompath"},"chromedriverCustomPath"),(0,i.kt)("p",null,'To use a custome chromedriver different than the one installed through "chromedriver npm module", provide the path. '),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/chromedriver")," (Linux / MacOS), ",(0,i.kt)("inlineCode",{parentName:"p"},"./chromedriver.exe")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"d:/driver/chromedriver.exe")," (Windows)"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"For more information on WebdriverIO see the ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io"},"homepage"),"."))}d.isMDXComponent=!0}}]);