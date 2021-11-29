"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1856],{4137:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return t?i.createElement(k,r(r({ref:n},s),{},{components:t})):i.createElement(k,r({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8448:function(e,n,t){var i=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},7225:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(7462),a=t(7294),l=t(1048),r=t(2713);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(3309),u=t(6010),s="tabItem_vU9c";function d(e){var n,t,i,l=e.lazy,r=e.block,d=e.defaultValue,c=e.values,m=e.groupId,k=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),b=(0,p.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(v),C=w[0],T=w[1],x=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=y[m];null!=D&&D!==C&&h.some((function(e){return e.value===D}))&&T(D)}var j=function(e){var n=e.currentTarget,t=x.indexOf(n),i=h[t].value;i!==C&&(O(n),T(i),null!=m&&N(m,i))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=x.indexOf(e.currentTarget)+1;t=x[i]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},k)},h.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":C===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:j,onClick:j},null!=t?t:n)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,l.Z)();return a.createElement(d,(0,i.Z)({key:String(n)},e))}},2713:function(e,n,t){var i=(0,t(7294).createContext)(void 0);n.Z=i},6925:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var i=t(7462),a=t(3366),l=(t(7294),t(4137)),r=t(7225),o=t(8448),p=["components"],u={id:"frameworks",title:"Frameworks"},s=void 0,d={unversionedId:"frameworks",id:"frameworks",isDocsHomePage:!1,title:"Frameworks",description:"The WDIO runner currently supports Mocha,  Jasmine, and Cucumber.",source:"@site/docs/Frameworks.md",sourceDirName:".",slug:"/frameworks",permalink:"/docs/frameworks",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/website/docs/Frameworks.md",tags:[],version:"current",frontMatter:{id:"frameworks",title:"Frameworks"},sidebar:"docs",previous:{title:"Testrunner Configuration",permalink:"/docs/configurationfile"},next:{title:"Assertion",permalink:"/docs/assertion"}},c=[{value:"Using Mocha",id:"using-mocha",children:[{value:"Mocha Options",id:"mocha-options",children:[{value:"require",id:"require",children:[],level:4},{value:"compilers",id:"compilers",children:[],level:4},{value:"allowUncaught",id:"allowuncaught",children:[],level:4},{value:"bail",id:"bail",children:[],level:4},{value:"checkLeaks",id:"checkleaks",children:[],level:4},{value:"delay",id:"delay",children:[],level:4},{value:"fgrep",id:"fgrep",children:[],level:4},{value:"forbidOnly",id:"forbidonly",children:[],level:4},{value:"forbidPending",id:"forbidpending",children:[],level:4},{value:"fullTrace",id:"fulltrace",children:[],level:4},{value:"global",id:"global",children:[],level:4},{value:"grep",id:"grep",children:[],level:4},{value:"invert",id:"invert",children:[],level:4},{value:"retries",id:"retries",children:[],level:4},{value:"timeout",id:"timeout",children:[],level:4}],level:3}],level:2},{value:"Using Jasmine",id:"using-jasmine",children:[{value:"Intercept Assertion",id:"intercept-assertion",children:[],level:3},{value:"Jasmine Options",id:"jasmine-options",children:[{value:"defaultTimeoutInterval",id:"defaulttimeoutinterval",children:[],level:4},{value:"helpers",id:"helpers",children:[],level:4},{value:"requires",id:"requires",children:[],level:4},{value:"random",id:"random",children:[],level:4},{value:"seed",id:"seed",children:[],level:4},{value:"failSpecWithNoExpectations",id:"failspecwithnoexpectations",children:[],level:4},{value:"oneFailurePerSpec",id:"onefailureperspec",children:[],level:4},{value:"specFilter",id:"specfilter",children:[],level:4},{value:"grep",id:"grep-1",children:[],level:4},{value:"invertGrep",id:"invertgrep",children:[],level:4}],level:3}],level:2},{value:"Using Cucumber",id:"using-cucumber",children:[{value:"Cucumber Options",id:"cucumber-options",children:[{value:"backtrace",id:"backtrace",children:[],level:4},{value:"requireModule",id:"requiremodule",children:[],level:4},{value:"failAmbiguousDefinitions",id:"failambiguousdefinitions",children:[],level:4},{value:"failFast",id:"failfast",children:[],level:4},{value:"ignoreUndefinedDefinitions",id:"ignoreundefineddefinitions",children:[],level:4},{value:"name",id:"name",children:[],level:4},{value:"profile",id:"profile",children:[],level:4},{value:"require",id:"require-1",children:[],level:4},{value:"snippetSyntax",id:"snippetsyntax",children:[],level:4},{value:"snippets",id:"snippets",children:[],level:4},{value:"source",id:"source",children:[],level:4},{value:"strict",id:"strict",children:[],level:4},{value:"tagExpression",id:"tagexpression",children:[],level:4},{value:"tagsInTitle",id:"tagsintitle",children:[],level:4},{value:"timeout",id:"timeout-1",children:[],level:4}],level:3},{value:"Skipping tests in cucumber",id:"skipping-tests-in-cucumber",children:[],level:3},{value:"Import Step Definition Helper",id:"import-step-definition-helper",children:[],level:3}],level:2}],m={toc:c};function k(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The WDIO runner currently supports ",(0,l.kt)("a",{parentName:"p",href:"http://mochajs.org/"},"Mocha"),",  ",(0,l.kt)("a",{parentName:"p",href:"http://jasmine.github.io/"},"Jasmine"),", and ",(0,l.kt)("a",{parentName:"p",href:"https://cucumber.io/"},"Cucumber"),"."),(0,l.kt)("p",null,"To integrate each framework with WebdriverIO, there are adapter packages on NPM which must be installed. You cannot install the adapters just anywhere; these packages must be installed in the same location WebdriverIO is installed. So, if you installed WebdriverIO globally, be sure to install the adapter package globally, too."),(0,l.kt)("p",null,"Within your spec files (or step definitions), you can access the WebDriver instance using the global variable ",(0,l.kt)("inlineCode",{parentName:"p"},"browser"),". (You don't need to initiate or end the Selenium session. This is taken care of by the ",(0,l.kt)("inlineCode",{parentName:"p"},"wdio")," testrunner.)"),(0,l.kt)("h2",{id:"using-mocha"},"Using Mocha"),(0,l.kt)("p",null,"First, install the adapter package from NPM:"),(0,l.kt)(r.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @wdio/mocha-framework --save-dev\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @wdio/mocha-framework --dev\n")))),(0,l.kt)("p",null,"By default WebdriverIO provides an ",(0,l.kt)("a",{parentName:"p",href:"/docs/assertion"},"assertion library")," that is built-in which you can start right away:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"describe('my awesome website', () => {\n    it('should do some assertions', async () => {\n        await browser.url('https://webdriver.io')\n        await expect(browser).toHaveTitle('WebdriverIO \xb7 Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')\n    })\n})\n")),(0,l.kt)("p",null,"WebdriverIO supports Mocha's ",(0,l.kt)("inlineCode",{parentName:"p"},"BDD")," (default), ",(0,l.kt)("inlineCode",{parentName:"p"},"TDD"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"QUnit")," ",(0,l.kt)("a",{parentName:"p",href:"https://mochajs.org/#interfaces"},"interfaces"),"."),(0,l.kt)("p",null,"If you like to write your specs in TDD style, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"ui")," property in your ",(0,l.kt)("inlineCode",{parentName:"p"},"mochaOpts")," config to ",(0,l.kt)("inlineCode",{parentName:"p"},"tdd"),". Now your test files should be written like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"suite('my awesome website', () => {\n    test('should do some assertions', async () => {\n        await browser.url('https://webdriver.io')\n        await expect(browser).toHaveTitle('WebdriverIO \xb7 Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')\n    })\n})\n")),(0,l.kt)("p",null,"If you want to define other Mocha-specific settings, you can do it with the ",(0,l.kt)("inlineCode",{parentName:"p"},"mochaOpts")," key in your configuration file. A list of all options can be found on the ",(0,l.kt)("a",{parentName:"p",href:"https://mochajs.org/api/mocha"},"Mocha project website"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Since all commands are running synchronously, there is no need to have async mode in Mocha enabled. Therefore, you can't use the ",(0,l.kt)("inlineCode",{parentName:"p"},"done")," callback:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"it('should test something', () => {\n    done() // throws \"done is not a function\"\n})\n")),(0,l.kt)("p",null,"If you want to run something asynchronously, you can either use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/browser/call"},(0,l.kt)("inlineCode",{parentName:"a"},"browser.call"))," command or ",(0,l.kt)("a",{parentName:"p",href:"/docs/customcommands"},"custom commands"),"."),(0,l.kt)("h3",{id:"mocha-options"},"Mocha Options"),(0,l.kt)("p",null,"The following options can be applied in your ",(0,l.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," to configure your Mocha environment. ",(0,l.kt)("strong",{parentName:"p"},"Note:")," not all options are supported, e.g. applying the ",(0,l.kt)("inlineCode",{parentName:"p"},"parallel")," option will cause an error as the WDIO testrunner has its own way to run tests in parallel. The following options however are supported:"),(0,l.kt)("h4",{id:"require"},"require"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," option is useful when you want to add or extend some basic functionality (WebdriverIO framework option)."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string|string[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")),(0,l.kt)("h4",{id:"compilers"},"compilers"),(0,l.kt)("p",null,"Use the given module(s) to compile files. Compilers will be included before requires (WebdriverIO framework option)."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")),(0,l.kt)("h4",{id:"allowuncaught"},"allowUncaught"),(0,l.kt)("p",null,"Propagate uncaught errors."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"bail"},"bail"),(0,l.kt)("p",null,"Bail after first test failure."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"checkleaks"},"checkLeaks"),(0,l.kt)("p",null,"Check for global variable leaks."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"delay"},"delay"),(0,l.kt)("p",null,"Delay root suite execution."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"fgrep"},"fgrep"),(0,l.kt)("p",null,"Test filter given string."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("h4",{id:"forbidonly"},"forbidOnly"),(0,l.kt)("p",null,"Tests marked ",(0,l.kt)("inlineCode",{parentName:"p"},"only")," fail the suite."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"forbidpending"},"forbidPending"),(0,l.kt)("p",null,"Pending tests fail the suite."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"fulltrace"},"fullTrace"),(0,l.kt)("p",null,"Full stacktrace upon failure."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"global"},"global"),(0,l.kt)("p",null,"Variables expected in global scope."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")),(0,l.kt)("h4",{id:"grep"},"grep"),(0,l.kt)("p",null,"Test filter given regular expression."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp|string"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("h4",{id:"invert"},"invert"),(0,l.kt)("p",null,"Invert test filter matches."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"retries"},"retries"),(0,l.kt)("p",null,"Number of times to retry failed tests."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("h4",{id:"timeout"},"timeout"),(0,l.kt)("p",null,"Timeout threshold value (in ms)."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"30000")),(0,l.kt)("h2",{id:"using-jasmine"},"Using Jasmine"),(0,l.kt)("p",null,"First, install the adapter package from NPM:"),(0,l.kt)(r.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @wdio/jasmine-framework --save-dev\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @wdio/jasmine-framework --dev\n")))),(0,l.kt)("p",null,"You can then configure your Jasmine environment by setting a ",(0,l.kt)("inlineCode",{parentName:"p"},"jasmineOpts")," property in your config. A list of all options can be found on the ",(0,l.kt)("a",{parentName:"p",href:"https://jasmine.github.io/api/3.5/Configuration.html"},"Jasmine project website"),"."),(0,l.kt)("h3",{id:"intercept-assertion"},"Intercept Assertion"),(0,l.kt)("p",null,"The Jasmine framework allows it to intercept each assertion in order to log the state of the application or website, depending on the result."),(0,l.kt)("p",null,"For example, it is pretty handy to take a screenshot every time an assertion fails. In your ",(0,l.kt)("inlineCode",{parentName:"p"},"jasmineOpts")," you can add a property called ",(0,l.kt)("inlineCode",{parentName:"p"},"expectationResultHandler")," that takes a function to execute. The function\u2019s parameters provide information about the result of the assertion."),(0,l.kt)("p",null,"The following example demonstrates how to take a screenshot if an assertion fails:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"jasmineOpts: {\n    defaultTimeoutInterval: 10000,\n    expectationResultHandler: function(passed, assertion) {\n        /**\n         * only take screenshot if assertion failed\n         */\n        if(passed) {\n            return\n        }\n\n        browser.saveScreenshot(`assertionError_${assertion.error.message}.png`)\n    }\n},\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," You cannot stop test execution to do something async. It might happen that\nthe command takes too much time and the website state has changed. (Though usually, after another 2\ncommands the screenshot is taken anyway, which still gives ",(0,l.kt)("em",{parentName:"p"},"some")," valuable information about the error.)"),(0,l.kt)("h3",{id:"jasmine-options"},"Jasmine Options"),(0,l.kt)("p",null,"The following options can be applied in your ",(0,l.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," to configure your Jasmine environment using the ",(0,l.kt)("inlineCode",{parentName:"p"},"jasmineOpts")," property:"),(0,l.kt)("h4",{id:"defaulttimeoutinterval"},"defaultTimeoutInterval"),(0,l.kt)("p",null,"Default Timeout Interval for Jasmine operations."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"60000")),(0,l.kt)("h4",{id:"helpers"},"helpers"),(0,l.kt)("p",null,"Array of filepaths (and globs) relative to spec_dir to include before jasmine specs."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")),(0,l.kt)("h4",{id:"requires"},"requires"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"requires")," option is useful when you want to add or extend some basic functionality."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")),(0,l.kt)("h4",{id:"random"},"random"),(0,l.kt)("p",null,"Whether to randomize spec execution order."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h4",{id:"seed"},"seed"),(0,l.kt)("p",null,"Seed to use as the basis of randomization. Null causes the seed to be determined randomly at the start of execution."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Function"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("h4",{id:"failspecwithnoexpectations"},"failSpecWithNoExpectations"),(0,l.kt)("p",null,"Whether to fail the spec if it ran no expectations. By default a spec that ran no expectations is reported as passed. Setting this to true will report such spec as a failure."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"onefailureperspec"},"oneFailurePerSpec"),(0,l.kt)("p",null,"Whether to cause specs to only have one expectation failure."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"specfilter"},"specFilter"),(0,l.kt)("p",null,"Function to use to filter specs."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Function"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"() => true")),(0,l.kt)("h4",{id:"grep-1"},"grep"),(0,l.kt)("p",null,"Only run tests matching this string or regexp. (Only applicable if no custom ",(0,l.kt)("inlineCode",{parentName:"p"},"specFilter")," function is set)"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string|Regexp"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("h4",{id:"invertgrep"},"invertGrep"),(0,l.kt)("p",null,"If true it inverts the matching tests and only runs tests that don't match with the expression used in ",(0,l.kt)("inlineCode",{parentName:"p"},"grep"),". (Only applicable if no custom ",(0,l.kt)("inlineCode",{parentName:"p"},"specFilter")," function is set)"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h2",{id:"using-cucumber"},"Using Cucumber"),(0,l.kt)("p",null,"First, install the adapter package from NPM:"),(0,l.kt)(r.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @wdio/cucumber-framework --save-dev\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @wdio/cucumber-framework --dev\n")))),(0,l.kt)("p",null,"If you want to use Cucumber, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"framework")," property to ",(0,l.kt)("inlineCode",{parentName:"p"},"cucumber")," by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"framework: 'cucumber'")," to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/configurationfile"},"config file"),"."),(0,l.kt)("p",null,"Options for Cucumber can be given in the config file with ",(0,l.kt)("inlineCode",{parentName:"p"},"cucumberOpts"),". Check out the whole list of options ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-cucumber-framework#cucumberopts-options"},"here"),"."),(0,l.kt)("p",null,"To get up and running quickly with Cucumber, have a look on our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/cucumber-boilerplate"},(0,l.kt)("inlineCode",{parentName:"a"},"cucumber-boilerplate"))," project that comes with all the step definitions you need to get stared, and you'll be writing feature files right away."),(0,l.kt)("h3",{id:"cucumber-options"},"Cucumber Options"),(0,l.kt)("p",null,"The following options can be applied in your ",(0,l.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," to configure your Cucumber environment using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cucumberOpts")," property:"),(0,l.kt)("h4",{id:"backtrace"},"backtrace"),(0,l.kt)("p",null,"Show full backtrace for errors."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h4",{id:"requiremodule"},"requireModule"),(0,l.kt)("p",null,"Require modules prior to requiring any support files."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),(0,l.kt)("br",null),"\nExample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cucumberOpts: {\n    requireModule: ['@babel/register']\n    // or\n    requireModule: [\n        [\n            '@babel/register',\n            {\n                rootMode: 'upward',\n                ignore: ['node_modules']\n            }\n        ]\n    ]\n }\n")),(0,l.kt)("h4",{id:"failambiguousdefinitions"},"failAmbiguousDefinitions"),(0,l.kt)("p",null,"Treat ambiguous definitions as errors. Please note that this is a ",(0,l.kt)("inlineCode",{parentName:"p"},"@wdio/cucumber-framework")," specific option and not recognized by cucumber-js itself."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"failfast"},"failFast"),(0,l.kt)("p",null,"Abort the run on first failure."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"ignoreundefineddefinitions"},"ignoreUndefinedDefinitions"),(0,l.kt)("p",null,"Treat undefined definitions as warnings. Please note that this is a @wdio/cucumber-framework specific option and not recognized by cucumber-js itself."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"name"},"name"),(0,l.kt)("p",null,"Only execute the scenarios with name matching the expression (repeatable)."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")),(0,l.kt)("h4",{id:"profile"},"profile"),(0,l.kt)("p",null,"Specify the profile to use."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")),(0,l.kt)("h4",{id:"require-1"},"require"),(0,l.kt)("p",null,"Require files containing your step definitions before executing features. You can also specify a glob to your step definitions."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string[]"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),"\nExample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cucumberOpts: {\n    require: [path.join(__dirname, 'step-definitions', 'my-steps.js')]\n}\n")),(0,l.kt)("h4",{id:"snippetsyntax"},"snippetSyntax"),(0,l.kt)("p",null,"Specify a custom snippet syntax."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("h4",{id:"snippets"},"snippets"),(0,l.kt)("p",null,"Hide step definition snippets for pending steps."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h4",{id:"source"},"source"),(0,l.kt)("p",null,"Hide source uris."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h4",{id:"strict"},"strict"),(0,l.kt)("p",null,"Fail if there are any undefined or pending steps."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"tagexpression"},"tagExpression"),(0,l.kt)("p",null,"Only execute the features or scenarios with tags matching the expression. Please see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cucumber.io/cucumber/api/#tag-expressions"},"Cucumber documentation")," for more details."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("h4",{id:"tagsintitle"},"tagsInTitle"),(0,l.kt)("p",null,"Add cucumber tags to feature or scenario name."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"timeout-1"},"timeout"),(0,l.kt)("p",null,"Timeout in milliseconds for step definitions."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),(0,l.kt)("br",null),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"30000")),(0,l.kt)("h3",{id:"skipping-tests-in-cucumber"},"Skipping tests in cucumber"),(0,l.kt)("p",null,"Note that if you want to skip a test using regular cucumber test filtering capabilities available in ",(0,l.kt)("inlineCode",{parentName:"p"},"cucumberOpts"),", you will do it for all the browsers and devices configured in the capabilities. In order to be able to skip scenarios only for specific capabilities combinations without having a session started if not necessary, webdriverio provides the following specific tag syntax for cucumber:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@skip([condition])")),(0,l.kt)("p",null,"were condition is an optional combination of capabilities properties with their values that when ",(0,l.kt)("strong",{parentName:"p"},"all")," matched with cause the tagged scenario or feature to be skipped. Of course you can add several tags to scenarios and features to skip a tests under several different conditions."),(0,l.kt)("p",null,"Here you have some examples of this syntax:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@skip()"),": will always skip the tagged item"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'@skip(browserName="chrome")'),": the test will not be executed against chrome browsers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'@skip(browserName="firefox";platformName="linux")'),": will skip the test in firefox over linux executions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'@skip(browserName=["chrome","firefox"])'),": tagged items will be skipped for both chrome and firefox browsers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@skip(browserName=/i.*explorer/"),": capabilities with browsers matching the regexp will be skipped (like ",(0,l.kt)("inlineCode",{parentName:"li"},"iexplorer"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"internet explorer"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"internet-explorer"),", ...).")),(0,l.kt)("h3",{id:"import-step-definition-helper"},"Import Step Definition Helper"),(0,l.kt)("p",null,"In order to use step definition helper like ",(0,l.kt)("inlineCode",{parentName:"p"},"Given"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"When")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Then")," or hooks, you are suppose to import then from ",(0,l.kt)("inlineCode",{parentName:"p"},"@cucumber/cucumber"),", e.g. like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Given, When, Then } from '@cucumber/cucumber'\n")),(0,l.kt)("p",null,"Now, if you use Cucumber already for other types of tests unrelated to WebdriverIO for which you use a specific version you need to import these helpers in your e2e tests from the WebdriverIO Cucumber package, e.g.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Given, When, Then } from '@wdio/cucumber-framework'\n")),(0,l.kt)("p",null,"This ensures that you use the right helpers within the WebdriverIO framework and allows you to use an independant Cucumber version for other types of testing."))}k.isMDXComponent=!0}}]);