"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2214],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8448:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(7462),a=n(7294),r=n(1048),i=n(2713);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3309),c=n(6010),p="tabItem_vU9c";function d(e){var t,n,o,r=e.lazy,i=e.block,d=e.defaultValue,u=e.values,m=e.groupId,h=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,N=b.setTabGroupChoices,C=(0,a.useState)(f),y=C[0],P=C[1],T=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=w[m];null!=x&&x!==y&&v.some((function(e){return e.value===x}))&&P(x)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),o=v[n].value;o!==y&&(D(t),P(o),null!=m&&N(m,o))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=T.indexOf(e.currentTarget)+1;n=T[o]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:j,onClick:j},null!=n?n:t)}))),r?(0,a.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function u(e){var t=(0,r.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},2713:function(e,t,n){var o=(0,n(7294).createContext)(void 0);t.Z=o},2461:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(4137)),i=(n(7225),n(8448),["components"]),l={id:"devtools-service",title:"Devtools Service",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-devtools-service/README.md"},s=void 0,c={unversionedId:"devtools-service",id:"devtools-service",isDocsHomePage:!1,title:"Devtools Service",description:"A WebdriverIO service that allows you to run Chrome DevTools commands in your tests",source:"@site/docs/_devtools-service.md",sourceDirName:".",slug:"/devtools-service",permalink:"/docs/devtools-service",editUrl:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-devtools-service/README.md",tags:[],version:"current",frontMatter:{id:"devtools-service",title:"Devtools Service",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-devtools-service/README.md"},sidebar:"docs",previous:{title:"Crossbrowsertesting Service",permalink:"/docs/crossbrowsertesting-service"},next:{title:"Firefox Profile Service",permalink:"/docs/firefox-profile-service"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Performance Testing",id:"performance-testing",children:[{value:"getMetrics",id:"getmetrics",children:[],level:4},{value:"getDiagnostics",id:"getdiagnostics",children:[],level:4},{value:"getMainThreadWorkBreakdown",id:"getmainthreadworkbreakdown",children:[],level:4},{value:"getPerformanceScore",id:"getperformancescore",children:[],level:4},{value:"enablePerformanceAudits",id:"enableperformanceaudits",children:[],level:4}],level:3},{value:"Device Emulation",id:"device-emulation",children:[{value:"Note",id:"note",children:[],level:4}],level:3},{value:"PWA Testing",id:"pwa-testing",children:[],level:3},{value:"Capture Code Coverage",id:"capture-code-coverage",children:[],level:3},{value:"Chrome DevTools Access",id:"chrome-devtools-access",children:[],level:3},{value:"<code>cdp</code> Command",id:"cdp-command",children:[],level:3},{value:"<code>getNodeId(selector)</code> and <code>getNodeIds(selector)</code> Command",id:"getnodeidselector-and-getnodeidsselector-command",children:[],level:3},{value:"<code>startTracing(categories, samplingFrequency)</code> Command",id:"starttracingcategories-samplingfrequency-command",children:[],level:3},{value:"<code>endTracing</code> Command",id:"endtracing-command",children:[],level:3},{value:"<code>getTraceLogs</code> Command",id:"gettracelogs-command",children:[],level:3},{value:"<code>getPageWeight</code> Command",id:"getpageweight-command",children:[],level:3},{value:"Setting Download Paths for the Browser",id:"setting-download-paths-for-the-browser",children:[],level:3},{value:"Access Puppeteer Instance",id:"access-puppeteer-instance",children:[],level:3},{value:"Event Listener",id:"event-listener",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A WebdriverIO service that allows you to run Chrome DevTools commands in your tests")),(0,r.kt)("p",null,"With Chrome v63 and up the browser ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/10/devtools-release-notes#multi-client"},"started to support")," multi clients allowing arbitrary clients to access the ",(0,r.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"Chrome DevTools Protocol"),". This provides interesting opportunities to automate Chrome beyond the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/webdriver/"},"WebDriver protocol"),". With this service you can enhance the wdio browser object to leverage that access and call Chrome DevTools commands within your tests to e.g. intercept requests, throttle network capabilities or take CSS/JS coverage."),(0,r.kt)("p",null,"Since Firefox 86, ",(0,r.kt)("a",{parentName:"p",href:"https://firefox-source-docs.mozilla.org/remote/index.html"},"a subset of Chrome DevTools Protocol")," has been implemented by passing the capability ",(0,r.kt)("inlineCode",{parentName:"p"},'"moz:debuggerAddress": true'),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note:")," this service currently only supports Chrome v63 and up, Chromium, and Firefox 86 and up (Microsoft Edge is not yet supported)!")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The easiest way is to keep ",(0,r.kt)("inlineCode",{parentName:"p"},"@wdio/devtools-service")," as a devDependency in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @wdio/devtools-service --save-dev\n")),(0,r.kt)("p",null,"Instructions on how to install ",(0,r.kt)("inlineCode",{parentName:"p"},"WebdriverIO")," can be found ",(0,r.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"here.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"In order to use the service you just need to add the service to your service list in your ",(0,r.kt)("inlineCode",{parentName:"p"},"wdio.conf.js"),", like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n    // ...\n    services: ['devtools'],\n    // ...\n};\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@wdio/devtools-service")," offers you a variety of features that helps you to automate Chrome beyond the WebDriver protocol. It gives you access to the Chrome DevTools protocol as well as to a ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/"},"Puppeteer")," instance that you can use to automate Chrome with the Puppeteer automation interface."),(0,r.kt)("h3",{id:"performance-testing"},"Performance Testing"),(0,r.kt)("p",null,"The DevTools service allows you to capture performance data from every page load or page transition that was caused by a click. To enable it call ",(0,r.kt)("inlineCode",{parentName:"p"},"browser.enablePerformanceAudits(<options>)"),". After you are done capturing all necessary performance data disable it to revert the throttling settings, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const assert = require('assert')\n\ndescribe('JSON.org page', () => {\n    before(() => {\n        browser.enablePerformanceAudits()\n    })\n\n    it('should load within performance budget', () => {\n        /**\n         * this page load will take a bit longer as the DevTools service will\n         * capture all metrics in the background\n         */\n        browser.url('http://json.org')\n\n        let metrics = browser.getMetrics()\n        assert.ok(metrics.speedIndex < 1500) // check that speedIndex is below 1.5ms\n\n        let score = browser.getPerformanceScore() // get Lighthouse Performance score\n        assert.ok(score >= .99) // Lighthouse Performance score is at 99% or higher\n\n        $('=Esperanto').click()\n\n        metrics = browser.getMetrics()\n        assert.ok(metrics.speedIndex < 1500)\n        score = browser.getPerformanceScore()\n        assert.ok(score >= .99)\n    })\n\n    after(() => {\n        browser.disablePerformanceAudits()\n    })\n})\n")),(0,r.kt)("p",null,"You can emulate a mobile device by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"emulateDevice")," command, throttling CPU and network as well as setting ",(0,r.kt)("inlineCode",{parentName:"p"},"mobile")," as form factor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.emulateDevice('iPhone X')\nbrowser.enablePerformanceAudits({\n    networkThrottling: 'Good 3G',\n    cpuThrottling: 4,\n    formFactor: 'mobile'\n})\n")),(0,r.kt)("p",null,"The following commands with their results are available:"),(0,r.kt)("h4",{id:"getmetrics"},"getMetrics"),(0,r.kt)("p",null,"Get most common used performance metrics."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(browser.getMetrics())\n/**\n * { timeToFirstByte: 566,\n *   serverResponseTime: 566,\n *   domContentLoaded: 3397,\n *   firstVisualChange: 2610,\n *   firstPaint: 2822,\n *   firstContentfulPaint: 2822,\n *   firstMeaningfulPaint: 2822,\n *   largestContentfulPaint: 2822,\n *   lastVisualChange: 15572,\n *   interactive: 6135,\n *   load: 8429,\n *   speedIndex: 3259,\n *   totalBlockingTime: 31,\n *   maxPotentialFID: 161,\n *   cumulativeLayoutShift: 2822 }\n */\n")),(0,r.kt)("h4",{id:"getdiagnostics"},"getDiagnostics"),(0,r.kt)("p",null,"Get some useful diagnostics about the page load."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(browser.getDiagnostics())\n/**\n * { numRequests: 8,\n *   numScripts: 0,\n *   numStylesheets: 0,\n *   numFonts: 0,\n *   numTasks: 237,\n *   numTasksOver10ms: 5,\n *   numTasksOver25ms: 2,\n *   numTasksOver50ms: 2,\n *   numTasksOver100ms: 0,\n *   numTasksOver500ms: 0,\n *   rtt: 147.20600000000002,\n *   throughput: 47729.68474448835,\n *   maxRtt: 176.085,\n *   maxServerLatency: 1016.813,\n *   totalByteWeight: 62929,\n *   totalTaskTime: 254.07899999999978,\n *   mainDocumentTransferSize: 8023 }\n */\n")),(0,r.kt)("h4",{id:"getmainthreadworkbreakdown"},"getMainThreadWorkBreakdown"),(0,r.kt)("p",null,"Returns a list with a breakdown of all main thread task and their total duration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(browser.getMainThreadWorkBreakdown())\n/**\n * [ { group: 'styleLayout', duration: 130.59099999999998 },\n *   { group: 'other', duration: 44.819 },\n *   { group: 'paintCompositeRender', duration: 13.732000000000005 },\n *   { group: 'parseHTML', duration: 3.9080000000000004 },\n *   { group: 'scriptEvaluation', duration: 2.437999999999999 },\n *   { group: 'scriptParseCompile', duration: 0.20800000000000002 } ]\n */\n")),(0,r.kt)("h4",{id:"getperformancescore"},"getPerformanceScore"),(0,r.kt)("p",null,"Returns the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/lighthouse/scoring"},"Lighthouse Performance Score")," which is a weighted mean of the following metrics: ",(0,r.kt)("inlineCode",{parentName:"p"},"firstContentfulPaint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"speedIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"largestContentfulPaint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cumulativeLayoutShift"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"totalBlockingTime"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"interactive"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxPotentialFID")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cumulativeLayoutShift"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(browser.getPerformanceScore())\n/**\n * 0.897826278457836\n */\n")),(0,r.kt)("h4",{id:"enableperformanceaudits"},"enablePerformanceAudits"),(0,r.kt)("p",null,"Enables auto performance audits for all page loads that are cause by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," command or clicking on a link or anything that causes a page load. You can pass in a config object to determine some throttling options. The default throttling profile is ",(0,r.kt)("inlineCode",{parentName:"p"},"Good 3G")," network with a 4x CPU trottling."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.enablePerformanceAudits({\n    networkThrottling: 'Good 3G',\n    cpuThrottling: 4,\n    cacheEnabled: true,\n    formFactor: 'mobile'\n})\n")),(0,r.kt)("p",null,"The following network throttling profiles are available: ",(0,r.kt)("inlineCode",{parentName:"p"},"offline"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GPRS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Regular 2G"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Good 2G"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Regular 3G"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Good 3G"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Regular 4G"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DSL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Wifi")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"online")," (no throttling)."),(0,r.kt)("h3",{id:"device-emulation"},"Device Emulation"),(0,r.kt)("p",null,"The service allows you to emulate a specific device type. If set, the browser viewport will be modified to fit the device capabilities as well as the user agent will set according to the device user agent. To set a predefined device profile you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.emulateDevice('iPhone X')\n// or `browser.emulateDevice('iPhone X', true)` if you want to be in landscape mode\n")),(0,r.kt)("p",null,"Available predefined device profiles are: ",(0,r.kt)("inlineCode",{parentName:"p"},"Blackberry PlayBook"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BlackBerry Z30"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Galaxy Note 3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Galaxy Note II"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Galaxy S III"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Galaxy S5"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPad"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPad Mini"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPad Pro"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone 4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone 5"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone 6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone 6 Plus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone 7"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone 7 Plus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone 8"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone 8 Plus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone SE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iPhone X"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JioPhone 2"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"Kindle Fire HDX"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LG Optimus L70"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft Lumia 550"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft Lumia 950"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nexus 10"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nexus 4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nexus 5"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nexus 5X"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nexus 6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nexus 6P"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nexus 7"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nokia Lumia 520"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nokia N9"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Pixel 2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Pixel 2 XL")),(0,r.kt)("p",null,"You can also define your own device profile by providing an object as parameter like in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.emulateDevice({\n    viewport: {\n        width: 550, // <number> page width in pixels.\n        height: 300, // <number> page height in pixels.\n        deviceScaleFactor: 1, //  <number> Specify device scale factor (can be thought of as dpr). Defaults to 1\n        isMobile: true, // <boolean> Whether the meta viewport tag is taken into account. Defaults to false\n        hasTouch: true, // <boolean> Specifies if viewport supports touch events. Defaults to false\n        isLandscape: true // <boolean> Specifies if viewport is in landscape mode. Defaults to false\n    },\n    userAgent: 'my custom user agent'\n})\n")),(0,r.kt)("h4",{id:"note"},"Note"),(0,r.kt)("p",null,"This only works if you don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"mobileEmulation")," within ",(0,r.kt)("inlineCode",{parentName:"p"},"capabilities['goog:chromeOptions']"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"mobileEmulation")," is present the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"browser.emulateDevice()")," won't do anything."),(0,r.kt)("h3",{id:"pwa-testing"},"PWA Testing"),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkPWA")," command you can validate if your webapp is compliant to latest web standards when it comes to progressive web apps. It checks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"whether your app is installable"),(0,r.kt)("li",{parentName:"ul"},"provides a service worker"),(0,r.kt)("li",{parentName:"ul"},"has a splash screen"),(0,r.kt)("li",{parentName:"ul"},"provides apple touch and maskable icons"),(0,r.kt)("li",{parentName:"ul"},"can be served on mobile devices")),(0,r.kt)("p",null,"If you are not interested in one of these checks you can pass in a list of checks you like to run. The ",(0,r.kt)("inlineCode",{parentName:"p"},"passed")," property will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if all checks pass. If they fail you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"details")," property to enrich your failure message with details of the failure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// open page first\nbrowser.url('https://webdriver.io')\n// validate PWA\nconst result = browser.checkPWA()\nexpect(result.passed).toBe(true)\n")),(0,r.kt)("h3",{id:"capture-code-coverage"},"Capture Code Coverage"),(0,r.kt)("p",null,"The service offers you to capture the code coverage of your application under test. To do so you need to enable this feature as part of the service settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nservices: [\n    ['devtools', {\n        coverageReporter: {\n            enable: true,\n            type: 'html',\n            logDir: __dirname + '/coverage'\n        }\n    }]\n]\n")),(0,r.kt)("p",null,"Then you have access to a command that calculates the ratio of covered code lines and branches for you to assert within your test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const coverage = browser.getCoverageReport()\nexpect(coverage.lines.total).toBeAbove(0.9)\nexpect(coverage.statements.total).toBeAbove(0.9)\nexpect(coverage.functions.total).toBeAbove(0.9)\nexpect(coverage.branches.total).toBeAbove(0.9)\n")),(0,r.kt)("h3",{id:"chrome-devtools-access"},"Chrome DevTools Access"),(0,r.kt)("p",null,"For now the service allows two different ways to access the Chrome DevTools Protocol:"),(0,r.kt)("h3",{id:"cdp-command"},(0,r.kt)("inlineCode",{parentName:"h3"},"cdp")," Command"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cdp")," command is a custom command added to the browser scope that allows you to call directly commands to the protocol."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.cdp(<domain>, <command>, <arguments>)\n")),(0,r.kt)("p",null,"For example if you want to get the JavaScript coverage of your page you can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('should take JS coverage', () => {\n    /**\n     * enable necessary domains\n     */\n    browser.cdp('Profiler', 'enable')\n    browser.cdp('Debugger', 'enable')\n\n    /**\n     * start test coverage profiler\n     */\n    browser.cdp('Profiler', 'startPreciseCoverage', {\n        callCount: true,\n        detailed: true\n    })\n\n    browser.url('http://google.com')\n\n    /**\n     * capture test coverage\n     */\n    const { result } = browser.cdp('Profiler', 'takePreciseCoverage')\n    const coverage = result.filter((res) => res.url !== '')\n    console.log(coverage)\n})\n")),(0,r.kt)("h3",{id:"getnodeidselector-and-getnodeidsselector-command"},(0,r.kt)("inlineCode",{parentName:"h3"},"getNodeId(selector)")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"getNodeIds(selector)")," Command"),(0,r.kt)("p",null,"Helper method to get the nodeId of an element in the page. NodeIds are similar like WebDriver node ids an identifier for a node. It can be used as a parameter for other Chrome DevTools methods, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"DOM.focus"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const nodeId = browser.getNodeId('body')\nconsole.log(nodeId) // outputs: 4\nconst nodeId = browser.getNodeIds('img')\nconsole.log(nodeId) // outputs: [ 40, 41, 42, 43, 44, 45 ]\n")),(0,r.kt)("h3",{id:"starttracingcategories-samplingfrequency-command"},(0,r.kt)("inlineCode",{parentName:"h3"},"startTracing(categories, samplingFrequency)")," Command"),(0,r.kt)("p",null,"Start tracing the browser. You can optionally pass in custom tracing categories (defaults to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-devtools-service/src/constants.js#L1-L9"},"this list"),") and the sampling frequency (defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"10000"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.startTracing()\n")),(0,r.kt)("h3",{id:"endtracing-command"},(0,r.kt)("inlineCode",{parentName:"h3"},"endTracing")," Command"),(0,r.kt)("p",null,"Stop tracing the browser."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.endTracing()\n")),(0,r.kt)("h3",{id:"gettracelogs-command"},(0,r.kt)("inlineCode",{parentName:"h3"},"getTraceLogs")," Command"),(0,r.kt)("p",null,"Returns the tracelogs that was captured within the tracing period. You can use this command to store the trace logs on the file system to analyse the trace via Chrome DevTools interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.startTracing()\nbrowser.url('http://json.org')\nbrowser.endTracing()\n\nfs.writeFileSync('/path/to/tracelog.json', JSON.stringify(browser.getTraceLogs()))\n")),(0,r.kt)("h3",{id:"getpageweight-command"},(0,r.kt)("inlineCode",{parentName:"h3"},"getPageWeight")," Command"),(0,r.kt)("p",null,"Returns page weight information of the last page load."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.startTracing()\nbrowser.url('https://webdriver.io')\nbrowser.endTracing()\n\nconsole.log(browser.getPageWeight())\n// outputs:\n// { pageWeight: 2438485,\n//   transferred: 1139136,\n//   requestCount: 72,\n//   details: {\n//       Document: { size: 221705, encoded: 85386, count: 11 },\n//       Stylesheet: { size: 52712, encoded: 50130, count: 2 },\n//       Image: { size: 495023, encoded: 482433, count: 36 },\n//       Script: { size: 1073597, encoded: 322854, count: 15 },\n//       Font: { size: 84412, encoded: 84412, count: 5 },\n//       Other: { size: 1790, encoded: 1790, count: 2 },\n//       XHR: { size: 509246, encoded: 112131, count: 1 } }\n// }\n")),(0,r.kt)("h3",{id:"setting-download-paths-for-the-browser"},"Setting Download Paths for the Browser"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cdp")," command can be used to call the ",(0,r.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-setDownloadBehavior"},(0,r.kt)("inlineCode",{parentName:"a"},"Page.setDownloadBehavior"))," command of Devtools Protocol to set the behavior when downloading a file. Make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"downloadPath")," is an absolute path and the ",(0,r.kt)("inlineCode",{parentName:"p"},"browser.cdp()")," call is made before the file is downloaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"browser.cdp('Page', 'setDownloadBehavior', {\n    behavior: 'allow',\n    downloadPath: '/home/root/webdriverio-project/',\n});\n")),(0,r.kt)("h3",{id:"access-puppeteer-instance"},"Access Puppeteer Instance"),(0,r.kt)("p",null,"The service uses Puppeteer for its automation under the hood. You can get access to the used instance by calling the ",(0,r.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/api/browser/getPuppeteer"},(0,r.kt)("inlineCode",{parentName:"a"},"getPuppeteer"))," command. ",(0,r.kt)("strong",{parentName:"p"},"Note:")," Puppeteer commands are async and either needs to be called within the ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," command or handled via ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"describe('use Puppeteer', () => {\n    it('by wrapping commands with call', () => {\n        browser.url('http://json.org')\n\n        const puppeteer = browser.getPuppeteer()\n        const page = browser.call(() => puppeteer.pages())[0]\n        console.log(browser.call(() => page.title()))\n    })\n\n    it('by using async/await', async () => {\n        const puppeteer = browser.getPuppeteer()\n        const page = (await puppeteer.pages())[0]\n        console.log(await page.title())\n    })\n})\n")),(0,r.kt)("h3",{id:"event-listener"},"Event Listener"),(0,r.kt)("p",null,"In order to capture events in the browser you can register an event listener to a Chrome DevTools event like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('should listen on network events', () => {\n    browser.cdp('Network', 'enable')\n    browser.on('Network.responseReceived', (params) => {\n        console.log(`Loaded ${params.response.url}`)\n    })\n    browser.url('https://www.google.com')\n})\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"For more information on WebdriverIO see the ",(0,r.kt)("a",{parentName:"p",href:"https://webdriver.io"},"homepage"),"."))}u.isMDXComponent=!0}}]);