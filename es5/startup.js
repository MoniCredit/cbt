!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,n){"use strict";(function(e){var s=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}};function u(e,t){var n,r;try{for(var o=s(Object.keys(t)),a=o.next();!a.done;a=o.next()){var i=a.value;"__esModule"!==i&&("object"==typeof e[i]&&"object"==typeof t[i]?u(e[i],t[i]):null!==t[i]&&void 0!==t[i]&&(e[i]=t[i]))}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.combineConfig=u,t.combineDefaults=function e(t,n,r){var o,a;t[n]||(t[n]={}),t=t[n];try{for(var i=s(Object.keys(r)),u=i.next();!u.done;u=i.next()){var c=u.value;"object"==typeof t[c]&&"object"==typeof r[c]?e(t,c,r[c]):null==t[c]&&null!=r[c]&&(t[c]=r[c])}}catch(e){o={error:e}}finally{try{u&&!u.done&&(a=i.return)&&a.call(i)}finally{if(o)throw o.error}}return t},t.combineWithMathJax=function(e){return u(t.MathJax,e)},void 0===e.MathJax&&(e.MathJax={}),e.MathJax.version||(e.MathJax={version:"3.0.0",_:{},config:e.MathJax}),t.MathJax=e.MathJax}).call(this,n(3))},function(e,l,a){"use strict";(function(n){var s=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}};Object.defineProperty(l,"__esModule",{value:!0});var e,t,r=a(0),d=a(2),o=a(2);l.Package=o.Package,l.PackageError=o.PackageError,(t=e=l.Loader||(l.Loader={})).ready=function(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];0===n.length&&(n=Array.from(d.Package.packages.keys()));var o=[];try{for(var a=s(n),i=a.next();!i.done;i=a.next()){var u=i.value,c=d.Package.packages.get(u)||new d.Package(u,!0);o.push(c.promise)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return Promise.all(o)},t.load=function(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(0===n.length)return Promise.resolve();var o=[];try{for(var a=s(n),i=a.next();!i.done;i=a.next()){var u=i.value,c=d.Package.packages.get(u);c||(c=new d.Package(u)).provides(l.CONFIG.provides[u]),c.checkNoLoad(),o.push(c.promise)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return d.Package.loadAll(),Promise.all(o)},t.preLoad=function(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{for(var o=s(n),a=o.next();!a.done;a=o.next()){var i=a.value,u=d.Package.packages.get(i);u||(u=new d.Package(i,!0)).provides(l.CONFIG.provides[i]),u.loaded()}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}},t.defaultReady=function(){void 0!==l.MathJax.startup&&l.MathJax.config.startup.ready()},t.getRoot=function(){var e=n+"/../../es5";if("undefined"!=typeof document){var t=document.currentScript||document.getElementById("MathJax-script");t&&(e=t.src.replace(/\/[^\/]*$/,""))}return e},l.MathJax=r.MathJax,void 0===l.MathJax.loader&&(r.combineDefaults(l.MathJax.config,"loader",{paths:{mathjax:e.getRoot()},source:{},dependencies:{},provides:{},load:[],ready:e.defaultReady.bind(e),failed:function(e){return console.log("MathJax("+(e.package||"?")+"): "+e.message)},require:null}),r.combineWithMathJax({loader:e})),l.CONFIG=l.MathJax.config.loader}).call(this,"/")},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||0<t--)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},f=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e},h=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}};Object.defineProperty(t,"__esModule",{value:!0});var p=n(1),i=function(r){function e(e,t){var n=r.call(this,e)||this;return n.package=t,n}return o(e,r),e}(Error);t.PackageError=i;var u=function(){function l(e,t){void 0===t&&(t=!1),this.isLoaded=!1,this.isLoading=!1,this.hasFailed=!1,this.dependents=[],this.dependencies=[],this.dependencyCount=0,this.provided=[],this.name=e,this.noLoad=t,l.packages.set(e,this),this.promise=this.makePromise(this.makeDependencies())}return l.resolvePath=function(e,t){void 0===t&&(t=!0);var n,r=p.CONFIG.source[e]||e;for(r.match(/^(?:[a-z]+:\/)?\/|\[/)||(r="[mathjax]/"+r.replace(/^\.\//,"")),t&&!r.match(/\.[^\/]+$/)&&(r+=".js");(n=r.match(/^\[([^\]]*)\]/))&&p.CONFIG.paths.hasOwnProperty(n[1]);)r=p.CONFIG.paths[n[1]]+r.substr(n[0].length);return r},Object.defineProperty(l.prototype,"canLoad",{get:function(){return 0===this.dependencyCount&&!this.noLoad&&!this.isLoading&&!this.hasFailed},enumerable:!0,configurable:!0}),l.prototype.makeDependencies=function(){var t,e,n=[],r=l.packages,o=this.noLoad,a=this.name,i=[];p.CONFIG.dependencies.hasOwnProperty(a)?i.push.apply(i,f(p.CONFIG.dependencies[a])):"core"!==a&&i.push("core");try{for(var u=h(i),c=u.next();!c.done;c=u.next()){var s=c.value,d=r.get(s)||new l(s,o);this.dependencies.indexOf(d)<0&&(d.addDependent(this,o),this.dependencies.push(d),d.isLoaded||(this.dependencyCount++,n.push(d.promise)))}}catch(e){t={error:e}}finally{try{c&&!c.done&&(e=u.return)&&e.call(u)}finally{if(t)throw t.error}}return n},l.prototype.makePromise=function(e){var n=this,t=new Promise(function(e,t){n.resolve=e,n.reject=t}),r=p.CONFIG[this.name]||{};return r.ready&&(t=t.then(function(e){return r.ready(n.name)})),e.length&&(e.push(t),t=Promise.all(e).then(function(e){return e.join(", ")})),r.failed&&t.catch(function(e){return r.failed(new i(e,n.name))}),t},l.prototype.load=function(){if(!this.isLoaded&&!this.isLoading&&!this.noLoad){this.isLoading=!0;var e=l.resolvePath(this.name);p.CONFIG.require?this.loadCustom(e):this.loadScript(e)}},l.prototype.loadCustom=function(e){var t=this;try{var n=p.CONFIG.require(e);n instanceof Promise?n.then(function(){return t.checkLoad()}).catch(function(){return t.failed("Can't load \""+e+'"')}):this.checkLoad()}catch(e){this.failed(e.message)}},l.prototype.loadScript=function(t){var n=this,e=document.createElement("script");e.src=t,e.charset="UTF-8",e.onload=function(e){return n.checkLoad()},e.onerror=function(e){return n.failed("Can't load \""+t+'"')},document.head.appendChild(e)},l.prototype.loaded=function(){var t,e,n,r;this.isLoaded=!0,this.isLoading=!1;try{for(var o=h(this.dependents),a=o.next();!a.done;a=o.next()){a.value.requirementSatisfied()}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}try{for(var i=h(this.provided),u=i.next();!u.done;u=i.next()){u.value.loaded()}}catch(e){n={error:e}}finally{try{u&&!u.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}this.resolve(this.name)},l.prototype.failed=function(e){this.hasFailed=!0,this.isLoading=!1,this.reject(new i(e,this.name))},l.prototype.checkLoad=function(){var t=this;((p.CONFIG[this.name]||{}).checkReady||function(){return Promise.resolve()})().then(function(){return t.loaded()}).catch(function(e){return t.failed(e)})},l.prototype.requirementSatisfied=function(){this.dependencyCount&&(this.dependencyCount--,this.canLoad&&this.load())},l.prototype.provides=function(e){var t,n;void 0===e&&(e=[]);try{for(var r=h(e),o=r.next();!o.done;o=r.next()){var a=o.value,i=l.packages.get(a);i||(p.CONFIG.dependencies[a]||(p.CONFIG.dependencies[a]=[]),p.CONFIG.dependencies[a].push(a),(i=new l(a,!0)).isLoading=!0),this.provided.push(i)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},l.prototype.addDependent=function(e,t){this.dependents.push(e),t||this.checkNoLoad()},l.prototype.checkNoLoad=function(){var t,e;if(this.noLoad){this.noLoad=!1;try{for(var n=h(this.dependencies),r=n.next();!r.done;r=n.next()){r.value.checkNoLoad()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}}},l.loadAll=function(){var t,e;try{for(var n=h(this.packages.values()),r=n.next();!r.done;r=n.next()){var o=r.value;o.canLoad&&o.load()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},l.packages=new Map,l}();t.Package=u},function(_c,ad){var bd;bd=function(){return this}();try{bd=bd||Function("return this")()||eval("this")}catch(e){"object"==typeof window&&(bd=window)}_c.exports=bd},function(e,t,n){"use strict";n(5);var r=n(1),o=n(0),a=n(8);(0,o.combineDefaults)(MathJax.config.loader,"dependencies",a.dependencies),(0,o.combineDefaults)(MathJax.config.loader,"paths",a.paths),(0,o.combineDefaults)(MathJax.config.loader,"provides",a.provides),r.Loader.preLoad("loader"),r.Loader.load.apply(r.Loader,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(r.CONFIG.load)).then(function(){return r.CONFIG.ready()}).catch(function(e){return r.CONFIG.failed(e)})},function(e,t,n){"use strict";var r=n(0),o=u(n(1)),a=u(n(2)),i=u(n(6));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(0,r.combineWithMathJax)({_:{components:{loader:o,package:a,startup:i}}})},function(e,M,n){"use strict";(function(m){var y=this&&this.__assign||function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}};Object.defineProperty(M,"__esModule",{value:!0});var e,t=n(0),b=n(7);!function(u){var t,o,c=new b.PrioritizedList;function a(e){return t.visitTree(e,u.document)}function e(){t=new M.MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor,o=M.MathJax._.mathjax.mathjax,u.input=r(),u.output=i(),u.adaptor=h(),u.handler&&o.handlers.unregister(u.handler),u.handler=p(),u.handler&&(o.handlers.register(u.handler),u.document=x())}function n(){var t,e;u.input&&u.output&&s();var n=u.output?u.output.name.toLowerCase():"";try{for(var r=v(u.input),o=r.next();!o.done;o=r.next()){var a=o.value,i=a.name.toLowerCase();l(i,a),f(i,a),u.output&&d(i,n,a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}}function s(){M.MathJax.typeset=function(e){void 0===e&&(e=null),u.document.options.elements=e,u.document.render()},M.MathJax.typesetPromise=function(e){return void 0===e&&(e=null),u.document.options.elements=e,o.handleRetriesFor(function(){u.document.render()})},M.MathJax.typesetClear=function(){return u.document.clear()}}function d(e,t,n){var r=e+"2"+t;M.MathJax[r]=function(e,t){return void 0===t&&(t={}),t.format=n.name,u.document.convert(e,t)},M.MathJax[r+"Promise"]=function(e,t){return void 0===t&&(t={}),t.format=n.name,o.handleRetriesFor(function(){return u.document.convert(e,t)})},M.MathJax[t+"Stylesheet"]=function(){return u.output.styleSheet(u.document)},"getMetricsFor"in u.output&&(M.MathJax.getMetricsFor=function(e,t){return u.output.getMetricsFor(e,t)})}function l(e,n){var r=M.MathJax._.core.MathItem.STATE;M.MathJax[e+"2mml"]=function(e,t){return void 0===t&&(t={}),t.end=r.CONVERT,t.format=n.name,a(u.document.convert(e,t))},M.MathJax[e+"2mmlPromise"]=function(e,t){return void 0===t&&(t={}),t.end=r.CONVERT,t.format=n.name,o.handleRetriesFor(function(){return a(u.document.convert(e,t))})}}function f(e,t){"tex"===e&&(M.MathJax.texReset=function(e){return void 0===e&&(e=0),t.parseOptions.tags.reset(e)})}function r(){var t,e,n=[];try{for(var r=v(M.CONFIG.input),o=r.next();!o.done;o=r.next()){var a=o.value,i=u.constructors[a];if(!i)throw Error('Input Jax "'+a+'" is not defined (has it been loaded?)');n.push(new i(M.MathJax.config[a]))}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}return n}function i(){var e=M.CONFIG.output;if(!e)return null;var t=u.constructors[e];if(!t)throw Error('Output Jax "'+e+'" is not defined (has it been loaded?)');return new t(M.MathJax.config[e])}function h(){var e=M.CONFIG.adaptor;if(!e||"none"===e)return null;var t=u.constructors[e];if(!t)throw Error('DOMAdaptor "'+e+'" is not defined (has it been loaded?)');return t(M.MathJax.config[e])}function p(){var t,e,n=M.CONFIG.handler;if(!n||"none"===n||!u.adaptor)return null;var r=u.constructors[n];if(!r)throw Error('Handler "'+n+'" is not defined (has it been loaded?)');var o=new r(u.adaptor,5);try{for(var a=v(c),i=a.next();!i.done;i=a.next()){o=i.value.item(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return o}function x(e){return void 0===e&&(e=null),o.document(e||M.CONFIG.document,y({},M.MathJax.config.options,{InputJax:u.input,OutputJax:u.output}))}u.constructors={},u.input=[],u.output=null,u.handler=null,u.adaptor=null,u.elements=null,u.document=null,u.promise=new Promise(function(e,t){var n=m.document;if(n&&n.readyState&&"complete"!==n.readyState&&"interactive"!==n.readyState){var r=function(){return e()};n.defaultView.addEventListener("load",r,!0),n.defaultView.addEventListener("DOMContentLoaded",r,!0)}else e()}),u.toMML=a,u.registerConstructor=function(e,t){u.constructors[e]=t},u.useHandler=function(e,t){void 0===t&&(t=!1),M.CONFIG.handler&&!t||(M.CONFIG.handler=e)},u.useAdaptor=function(e,t){void 0===t&&(t=!1),M.CONFIG.adaptor&&!t||(M.CONFIG.adaptor=e)},u.useInput=function(e,t){void 0===t&&(t=!1),g&&!t||M.CONFIG.input.push(e)},u.useOutput=function(e,t){void 0===t&&(t=!1),M.CONFIG.output&&!t||(M.CONFIG.output=e)},u.extendHandler=function(e,t){void 0===t&&(t=10),c.add(e,t)},u.defaultReady=function(){e(),n(),u.promise=u.promise.then(function(){return M.CONFIG.pageReady()})},u.defaultPageReady=function(){return M.CONFIG.typeset&&M.MathJax.typesetPromise?M.MathJax.typesetPromise():null},u.getComponents=e,u.makeMethods=n,u.makeTypesetMethods=s,u.makeOutputMethods=d,u.makeMmlMethods=l,u.makeResetMethod=f,u.getInputJax=r,u.getOutputJax=i,u.getAdaptor=h,u.getHandler=p,u.getDocument=x}(e=M.Startup||(M.Startup={})),M.MathJax=t.MathJax,void 0===M.MathJax._.startup&&(t.combineDefaults(M.MathJax.config,"startup",{input:[],output:"",handler:null,adaptor:null,document:"undefined"==typeof document?"":document,elements:null,typeset:!0,ready:e.defaultReady.bind(e),pageReady:e.defaultPageReady.bind(e)}),t.combineWithMathJax({startup:e,options:{}})),M.CONFIG=M.MathJax.config.startup;var g=0!==M.CONFIG.input.length}).call(this,n(3))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(){this.items=[],this.items=[]}return r.prototype[Symbol.iterator]=function(){var e=0,t=this.items;return{next:function(){return{value:t[e++],done:e>t.length}}}},r.prototype.add=function(e,t){void 0===t&&(t=r.DEFAULTPRIORITY);for(var n=this.items.length;0<=--n&&t<this.items[n].priority;);return this.items.splice(n+1,0,{item:e,priority:t}),e},r.prototype.remove=function(e){for(var t=this.items.length;0<=--t&&this.items[t].item!==e;);0<=t&&this.items.splice(t,1)},r.prototype.toArray=function(){return Array.from(this)},r.DEFAULTPRIORITY=5,r}();t.PrioritizedList=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dependencies={"a11y/semantic-enrich":["input/mml","[sre]","input/mml"],"a11y/complexity":["a11y/semantic-enrich"],"a11y/explorer":["a11y/semantic-enrich","ui/menu"],"[tex]/all-packages":["input/tex-base"],"[tex]/action":["input/tex-base","[tex]/newcommand"],"[tex]/autoload":["input/tex-base","[tex]/require"],"[tex]/ams":["input/tex-base"],"[tex]/ams_cd":["input/tex-base"],"[tex]/bbox":["input/tex-base","[tex]/ams","[tex]/newcommand"],"[tex]/boldsymbol":["input/tex-base"],"[tex]/braket":["input/tex-base"],"[tex]/bussproofs":["input/tex-base"],"[tex]/cancel":["input/tex-base","[tex]/enclose"],"[tex]/color":["input/tex-base"],"[tex]/colorV2":["input/tex-base"],"[tex]/configMacros":["input/tex-base","[tex]/newcommand"],"[tex]/enclose":["input/tex-base"],"[tex]/extpfeil":["input/tex-base","[tex]/newcommand","[tex]/ams"],"[tex]/html":["input/tex-base"],"[tex]/mhchem":["input/tex-base","[tex]/ams"],"[tex]/newcommand":["input/tex-base"],"[tex]/noerrors":["input/tex-base"],"[tex]/noundefined":["input/tex-base"],"[tex]/physics":["input/tex-base"],"[tex]/require":["input/tex-base"],"[tex]/tagFormat":["input/tex-base"],"[tex]/unicode":["input/tex-base"],"[tex]/verb":["input/tex-base"]},t.paths={tex:"[mathjax]/input/tex/extensions",sre:"[mathjax]/sre/sre_browser"};var r=["[tex]/action","[tex]/ams","[tex]/ams_cd","[tex]/bbox","[tex]/boldsymbol","[tex]/braket","[tex]/bussproofs","[tex]/cancel","[tex]/color","[tex]/configMacros","[tex]/enclose","[tex]/extpfeil","[tex]/html","[tex]/mhchem","[tex]/newcommand","[tex]/noerrors","[tex]/noundefined","[tex]/physics","[tex]/require","[tex]/unicode","[tex]/verb"];t.provides={startup:["loader"],"input/tex":["input/tex-base","[tex]/ams","[tex]/newcommand","[tex]/noundefined","[tex]/require","[tex]/autoload","[tex]/configMacros"],"input/tex-full":["input/tex-base","[tex]/all-packages"].concat(r),"[tex]/all-packages":r}}]);