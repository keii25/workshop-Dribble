/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/boxicons/dist/boxicons.js":
/*!************************************************!*\
  !*** ./node_modules/boxicons/dist/boxicons.js ***!
  \************************************************/
/***/ ((module) => {

!function(t,e,n,r,o){if("customElements"in n)o();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);var a=n.AWAITING_WEB_COMPONENTS_POLYFILL=f();a.then(o);var i=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?c(i).then((function(){a.isDone=!0,a.exec()})):c(s).then((function(){c(i).then((function(){a.isDone=!0,a.exec()}))}))}function f(){var t=[];return t.isDone=!1,t.exec=function(){t.splice(0).forEach((function(t){t()}))},t.then=function(e){return t.isDone?e():t.push(e),t},t}function c(t){var e=f(),n=r.createElement("script");return n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e.isDone=!0,e.exec())}:n.onload=function(){e.isDone=!0,e.exec()},n.src=t,r.getElementsByTagName("head")[0].appendChild(n),n.then=e.then,n}}(0,0,window,document,(function(){var t,e;t=window,e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r=n(3);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(4);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(t,e,n){"use strict";n.r(e),n.d(e,"BoxIconElement",(function(){return g}));var r,o,a,i,s=n(1),f=n.n(s),c=n(2),l=n.n(c),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=(o=(r=Object).getPrototypeOf||function(t){return t.__proto__},a=r.setPrototypeOf||function(t,e){return t.__proto__=e,t},i="object"===("undefined"==typeof Reflect?"undefined":m(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),a(new r,n.prototype)},function(t){var e=o(t);return a(t,a((function(){return i(e,arguments,o(this).constructor)}),e))}),p=window,b={},y=document.createElement("template"),h=function(){return!!p.ShadyCSS};y.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+f.a+"\n"+l.a+'\n</style>\n<div id="icon"></div>';var g=d(function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.$ui=t.attachShadow({mode:"open"}),t.$ui.appendChild(t.ownerDocument.importNode(y.content,!0)),h()&&p.ShadyCSS.styleElement(t),t._state={$iconHolder:t.$ui.getElementById("icon"),type:t.getAttribute("type")},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,HTMLElement),u(e,null,[{key:"getIconSvg",value:function(t,e){var n=this.cdnUrl+"/regular/bx-"+t+".svg";return"solid"===e?n=this.cdnUrl+"/solid/bxs-"+t+".svg":"logo"===e&&(n=this.cdnUrl+"/logos/bxl-"+t+".svg"),n&&b[n]||(b[n]=new Promise((function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?e(new Error(this.status+" "+this.responseText)):t(this.responseText)})),r.onerror=e,r.onabort=e,r.open("GET",n),r.send()}))),b[n]}},{key:"define",value:function(t){t=t||this.tagName,h()&&p.ShadyCSS.prepareTemplate(y,t),customElements.define(t,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),u(e,[{key:"attributeChangedCallback",value:function(t,e,n){var r=this._state.$iconHolder;switch(t){case"type":!function(t,e,n){var r=t._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==r.currentName&&t.constructor.getIconSvg(r.currentName,r.type).then((function(t){r.type===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+r.currentName+"\n"+t)}))}(this,0,n);break;case"name":!function(t,e,n){var r=t._state;r.currentName=n,r.$iconHolder.textContent="",n&&void 0!==r.type&&t.constructor.getIconSvg(n,r.type).then((function(t){r.currentName===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+n+"\n"+t)}))}(this,0,n);break;case"color":r.style.fill=n||"";break;case"size":!function(t,e,n){var r=t._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=n.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,n);break;case"rotate":e&&r.classList.remove("bx-rotate-"+e),n&&r.classList.add("bx-rotate-"+n);break;case"flip":e&&r.classList.remove("bx-flip-"+e),n&&r.classList.add("bx-flip-"+n);break;case"animation":e&&r.classList.remove("bx-"+e),n&&r.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){h()&&p.ShadyCSS.styleElement(this)}}]),e}());e.default=g,g.define()}])}, true?module.exports=e():0}));
//# sourceMappingURL=boxicons.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nimg {\n  width: 100%;\n  object-fit: cover; }\n\nli {\n  list-style: none; }\n\n.containerMain {\n  background-color: black;\n  height: auto;\n  display: flex; }\n\n.barNavigation {\n  background: #1a8cff;\n  flex-grow: 0.2;\n  height: 100vh;\n  padding-top: 0.5rem;\n  color: #ffffff;\n  width: 1px; }\n  .barNavigation .iconsNavegation {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    line-height: 100px;\n    align-items: center;\n    height: inherit; }\n    .barNavigation .iconsNavegation .logoNavegation {\n      display: flex;\n      order: 2;\n      flex-grow: 2;\n      flex-direction: column;\n      justify-content: flex-end; }\n      .barNavigation .iconsNavegation .logoNavegation .logoContainer {\n        width: 30px;\n        padding-bottom: 1rem; }\n        .barNavigation .iconsNavegation .logoNavegation .logoContainer__logo {\n          color: #ffffff; }\n    .barNavigation .iconsNavegation .icons {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      flex-grow: 1; }\n      .barNavigation .iconsNavegation .icons--links {\n        text-decoration: none;\n        font-size: 22px;\n        color: white; }\n    .barNavigation .iconsNavegation .otherThinks {\n      display: flex;\n      order: 3;\n      flex-direction: column;\n      font-size: 30px; }\n\n.itemTask {\n  background-color: #ffffff;\n  flex-grow: 0.4;\n  border-right: 0.1rem solid #e6e6e6;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .itemTask .taskList ul {\n    margin-top: 60px;\n    margin-bottom: 10px; }\n    .itemTask .taskList ul li {\n      padding: 0;\n      margin-right: 4px;\n      padding-bottom: 9px; }\n      .itemTask .taskList ul li .check {\n        background-color: #1a8cff;\n        margin: 9px; }\n  .itemTask .btnTask {\n    padding-top: 20px; }\n    .itemTask .btnTask .bxs-plus-circle {\n      font-size: 40px;\n      color: #1a8cff; }\n\n.contentTask {\n  background: #ffffff;\n  padding: 3rem;\n  flex-grow: 3;\n  padding: 10px 16px;\n  text-align: left; }\n  .contentTask .check {\n    color: #1a8cff;\n    margin: 9px; }\n  .contentTask .menu {\n    padding: 15px;\n    border-bottom: 0.1rem solid #e6e6e6; }\n    .contentTask .menu ul {\n      padding-top: 20px; }\n      .contentTask .menu ul a {\n        margin: 30px;\n        text-decoration: none; }\n  .contentTask .projects {\n    margin: 30px;\n    padding-top: 20px;\n    padding-bottom: 40px; }\n  .contentTask .productPlaning {\n    border-bottom: 0.1rem solid #e6e6e6;\n    margin: 20px; }\n  .contentTask .projects2 {\n    margin: 30px;\n    padding-top: 20px;\n    padding-bottom: 40px; }\n  .contentTask .design {\n    border-bottom: 0.1rem solid #e6e6e6;\n    margin: 20px; }\n  .contentTask .projects3 {\n    margin: 30px;\n    padding-top: 20px;\n    padding-bottom: 40px; }\n", "",{"version":3,"sources":["webpack://./src/assets/sass/_generals.scss","webpack://./src/assets/sass/_containerMain.scss","webpack://./src/assets/sass/_barNavigation.scss","webpack://./src/assets/sass/_color.scss","webpack://./src/assets/sass/_itemTask.scss","webpack://./src/assets/sass/_contentTask.scss"],"names":[],"mappings":"AAAA;EACI,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAI1B;EACI,WAAW;EACX,iBAAiB,EAAA;;AAGrB;EACI,gBAAgB,EAAA;;ACbpB;EACI,uBAAuB;EACvB,YAAY;EACZ,aAAa,EAAA;;ACHjB;EACI,mBCDmB;EDEnB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,cCJiB;EDKjB,UAAU,EAAA;EANd;IASQ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,eAAe,EAAA;IAdvB;MAiBY,aAAa;MACb,QAAQ;MACR,YAAY;MACZ,sBAAsB;MACtB,yBAAyB,EAAA;MArBrC;QAwBgB,WAAW;QACX,oBAAoB,EAAA;QAzBpC;UA6BoB,cC5BC,EAAA;IDDrB;MAmCY,aAAa;MACb,sBAAsB;MACtB,8BAA8B;MAC9B,YAAY,EAAA;MAtCxB;QAyCgB,qBAAqB;QACrB,eAAe;QACf,YAAY,EAAA;IA3C5B;MAiDY,aAAa;MACb,QAAQ;MACR,sBAAsB;MACtB,eAAe,EAAA;;AEpD3B;EACI,yBDAiB;ECCjB,cAAc;EACd,kCAA6C;EAC7C,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;EANvB;IAUY,gBAAgB;IAChB,mBAAmB,EAAA;IAX/B;MAcgB,UAAU;MACV,iBAAiB;MACjB,mBAAmB,EAAA;MAhBnC;QAmBoB,yBDnBG;QCoBH,WAAW,EAAA;EApB/B;IA4BQ,iBAAiB,EAAA;IA5BzB;MA+BY,eAAe;MACf,cDhCW,EAAA;;AEAvB;EACE,mBFAmB;EECnB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,gBAAgB,EAAA;EALlB;IASI,cFTmB;IEUnB,WAAW,EAAA;EAVf;IAcI,aAAa;IACb,mCAA8C,EAAA;IAflD;MAkBM,iBAAiB,EAAA;MAlBvB;QAoBQ,YAAY;QACZ,qBAAqB,EAAA;EArB7B;IA2BI,YAAY;IACZ,iBAAiB;IACjB,oBAAoB,EAAA;EA7BxB;IAiCI,mCAA8C;IAC9C,YAAY,EAAA;EAlChB;IAsCI,YAAY;IACZ,iBAAiB;IACjB,oBAAoB,EAAA;EAxCxB;IA4CI,mCAA8C;IAC9C,YAAY,EAAA;EA7ChB;IAiDI,YAAY;IACZ,iBAAiB;IACjB,oBAAoB,EAAA","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}",".containerMain {\r\n    background-color: black;\r\n    height: auto;\r\n    display: flex;    \r\n}",".barNavigation {\r\n    background: $primary-color;\r\n    flex-grow: 0.2;\r\n    height: 100vh;\r\n    padding-top: 0.5rem;\r\n    color: $white-color;\r\n    width: 1px;\r\n    \r\n    .iconsNavegation {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        line-height: 100px;\r\n        align-items: center;\r\n        height: inherit;\r\n\r\n        .logoNavegation {\r\n            display: flex;\r\n            order: 2;\r\n            flex-grow: 2;\r\n            flex-direction: column;\r\n            justify-content: flex-end;\r\n\r\n            .logoContainer {\r\n                width: 30px;\r\n                padding-bottom: 1rem;\r\n                  \r\n\r\n                &__logo {                    \r\n                    color: $white-color;               \r\n                }\r\n            }           \r\n        }\r\n\r\n        .icons {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            flex-grow: 1;\r\n\r\n            &--links {\r\n                text-decoration: none;\r\n                font-size: 22px;\r\n                color: white;\r\n            }\r\n\r\n        }\r\n\r\n        .otherThinks {\r\n            display: flex;\r\n            order: 3;\r\n            flex-direction: column;\r\n            font-size: 30px;\r\n        }\r\n    }\r\n}\r\n","$primary-color: #1a8cff;\r\n$white-color: #ffffff;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n",".itemTask {\r\n    background-color: $white-color;    \r\n    flex-grow: 0.4;\r\n    border-right: 0.1rem solid rgb(230, 230, 230);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;   \r\n    \r\n    .taskList {  \r\n        ul {            \r\n            margin-top: 60px;\r\n            margin-bottom: 10px;\r\n\r\n            li {\r\n                padding: 0;\r\n                margin-right: 4px;                \r\n                padding-bottom: 9px;\r\n\r\n                .check {\r\n                    background-color:  $primary-color;\r\n                    margin: 9px;\r\n                    \r\n                }\r\n            }\r\n        }        \r\n    }\r\n\r\n    .btnTask {\r\n        padding-top: 20px;\r\n\r\n        .bxs-plus-circle {\r\n            font-size: 40px;\r\n            color: $primary-color;\r\n        }\r\n    }\r\n\r\n\r\n}",".contentTask {\r\n  background: $white-color;\r\n  padding: 3rem;\r\n  flex-grow: 3;\r\n  padding: 10px 16px;\r\n  text-align: left;\r\n\r\n\r\n  .check {\r\n    color: $primary-color;\r\n    margin: 9px; \r\n  }\r\n\r\n  .menu {\r\n    padding: 15px;\r\n    border-bottom: 0.1rem solid rgb(230, 230, 230);\r\n\r\n    ul {\r\n      padding-top: 20px;\r\n      a {\r\n        margin: 30px;\r\n        text-decoration: none;\r\n      }\r\n    }\r\n  }\r\n\r\n  .projects {\r\n    margin: 30px;\r\n    padding-top: 20px;\r\n    padding-bottom: 40px;         \r\n  } \r\n\r\n  .productPlaning {\r\n    border-bottom: 0.1rem solid rgb(230, 230, 230);\r\n    margin: 20px;    \r\n  }\r\n\r\n  .projects2 {\r\n    margin: 30px;\r\n    padding-top: 20px;\r\n    padding-bottom: 40px;\r\n  }\r\n\r\n  .design {\r\n    border-bottom: 0.1rem solid rgb(230, 230, 230);\r\n    margin: 20px;\r\n  }\r\n\r\n  .projects3 {\r\n    margin: 30px;\r\n    padding-top: 20px;\r\n    padding-bottom: 40px;\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Components_1 = __webpack_require__(/*! ./core/utils/Components */ "./src/app/core/utils/Components.ts");
const todoWeb_1 = __webpack_require__(/*! ./ui/todoWeb */ "./src/app/ui/todoWeb/index.ts");
class Application {
    constructor(_app) {
        this._app = _app;
    }
    startApp() {
        this._app.start();
    }
    initWebApplication(rootContainer) {
        const viewComponent = new Components_1.Components();
        viewComponent.setRootComponent(rootContainer);
        this._app.start();
    }
}
const app = new Application(new todoWeb_1.MyWebApplication());
exports["default"] = app;


/***/ }),

/***/ "./src/app/core/constants/dataRoutes.ts":
/*!**********************************************!*\
  !*** ./src/app/core/constants/dataRoutes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRouteComponent = exports.dataRoutes = void 0;
var dataRoutes;
(function (dataRoutes) {
    dataRoutes["webApp"] = "./src/app/ui/todoWeb/webApp.html";
})(dataRoutes = exports.dataRoutes || (exports.dataRoutes = {}));
const getRouteComponent = (template) => {
    const url = `./src/app/ui/todoWeb/components/${template}.html`;
    return url;
};
exports.getRouteComponent = getRouteComponent;


/***/ }),

/***/ "./src/app/core/utils/Components.ts":
/*!******************************************!*\
  !*** ./src/app/core/utils/Components.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Components = void 0;
const dataRoutes_1 = __webpack_require__(/*! ../constants/dataRoutes */ "./src/app/core/constants/dataRoutes.ts");
class Components {
    setComponent(selector, template) {
        return __awaiter(this, void 0, void 0, function* () {
            let htmlNode = document.getElementById(selector);
            const data = (0, dataRoutes_1.getRouteComponent)(template);
            const response = yield fetch(data);
            const info = yield response.text();
            htmlNode.innerHTML = info;
        });
    }
    setRootComponent(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            let root = document.getElementById(selector);
            const data = dataRoutes_1.dataRoutes.webApp;
            const response = yield fetch(data);
            const info = yield response.text();
            root.innerHTML = info;
        });
    }
}
exports.Components = Components;


/***/ }),

/***/ "./src/app/ui/todoWeb/index.ts":
/*!*************************************!*\
  !*** ./src/app/ui/todoWeb/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyWebApplication = void 0;
const Components_1 = __webpack_require__(/*! ../../core/utils/Components */ "./src/app/core/utils/Components.ts");
class MyWebApplication {
    start() {
        const component = new Components_1.Components;
        setTimeout(() => component.setComponent('barNavigation', 'barNavigation'), 300);
        setTimeout(() => component.setComponent('itemTask', 'itemTask'), 300);
        setTimeout(() => component.setComponent('contentTask', 'contentTask'), 300);
    }
}
exports.MyWebApplication = MyWebApplication;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __importDefault(__webpack_require__(/*! ./app/app */ "./src/app/app.ts"));
__webpack_require__(/*! ./assets/sass/main.scss */ "./src/assets/sass/main.scss");
__webpack_require__(/*! boxicons */ "./node_modules/boxicons/dist/boxicons.js");
app_1.default.initWebApplication('root');


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGxpY2F0aW9uX3RvZG8vLi9ub2RlX21vZHVsZXMvYm94aWNvbnMvZGlzdC9ib3hpY29ucy5qcyIsIndlYnBhY2s6Ly9hcGxpY2F0aW9uX3RvZG8vLi9zcmMvYXNzZXRzL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL2FwbGljYXRpb25fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvLy4vc3JjL2Fzc2V0cy9zYXNzL21haW4uc2Nzcz8wOGYxIiwid2VicGFjazovL2FwbGljYXRpb25fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcGxpY2F0aW9uX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FwbGljYXRpb25fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcGxpY2F0aW9uX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvLy4vc3JjL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvLy4vc3JjL2FwcC9jb3JlL2NvbnN0YW50cy9kYXRhUm91dGVzLnRzIiwid2VicGFjazovL2FwbGljYXRpb25fdG9kby8uL3NyYy9hcHAvY29yZS91dGlscy9Db21wb25lbnRzLnRzIiwid2VicGFjazovL2FwbGljYXRpb25fdG9kby8uL3NyYy9hcHAvdWkvdG9kb1dlYi9pbmRleC50cyIsIndlYnBhY2s6Ly9hcGxpY2F0aW9uX3RvZG8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9hcGxpY2F0aW9uX3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FwbGljYXRpb25fdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBsaWNhdGlvbl90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hcGxpY2F0aW9uX3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hcGxpY2F0aW9uX3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FwbGljYXRpb25fdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsZSxuLHIsbyl7aWYoXCJjdXN0b21FbGVtZW50c1wiaW4gbilvKCk7ZWxzZXtpZihuLkFXQUlUSU5HX1dFQl9DT01QT05FTlRTX1BPTFlGSUxMKXJldHVybiB2b2lkIG4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEwudGhlbihvKTt2YXIgYT1uLkFXQUlUSU5HX1dFQl9DT01QT05FTlRTX1BPTFlGSUxMPWYoKTthLnRoZW4obyk7dmFyIGk9bi5XRUJfQ09NUE9ORU5UU19QT0xZRklMTHx8XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy93ZWJjb21wb25lbnRzanMvMi4wLjIvd2ViY29tcG9uZW50cy1idW5kbGUuanNcIixzPW4uRVM2X0NPUkVfUE9MWUZJTEx8fFwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvY29yZS1qcy8yLjUuMy9jb3JlLm1pbi5qc1wiO1wiUHJvbWlzZVwiaW4gbj9jKGkpLnRoZW4oKGZ1bmN0aW9uKCl7YS5pc0RvbmU9ITAsYS5leGVjKCl9KSk6YyhzKS50aGVuKChmdW5jdGlvbigpe2MoaSkudGhlbigoZnVuY3Rpb24oKXthLmlzRG9uZT0hMCxhLmV4ZWMoKX0pKX0pKX1mdW5jdGlvbiBmKCl7dmFyIHQ9W107cmV0dXJuIHQuaXNEb25lPSExLHQuZXhlYz1mdW5jdGlvbigpe3Quc3BsaWNlKDApLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QoKX0pKX0sdC50aGVuPWZ1bmN0aW9uKGUpe3JldHVybiB0LmlzRG9uZT9lKCk6dC5wdXNoKGUpLHR9LHR9ZnVuY3Rpb24gYyh0KXt2YXIgZT1mKCksbj1yLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIG4udHlwZT1cInRleHQvamF2YXNjcmlwdFwiLG4ucmVhZHlTdGF0ZT9uLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe1wibG9hZGVkXCIhPW4ucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT1uLnJlYWR5U3RhdGV8fChuLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGUuaXNEb25lPSEwLGUuZXhlYygpKX06bi5vbmxvYWQ9ZnVuY3Rpb24oKXtlLmlzRG9uZT0hMCxlLmV4ZWMoKX0sbi5zcmM9dCxyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChuKSxuLnRoZW49ZS50aGVuLG59fSgwLDAsd2luZG93LGRvY3VtZW50LChmdW5jdGlvbigpe3ZhciB0LGU7dD13aW5kb3csZT1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTUpfShbZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoKGZ1bmN0aW9uKGUpe3ZhciBuPWZ1bmN0aW9uKHQsZSl7dmFyIG4scj10WzFdfHxcIlwiLG89dFszXTtpZighbylyZXR1cm4gcjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgYT0obj1vLFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpK1wiICovXCIpLGk9by5zb3VyY2VzLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiK28uc291cmNlUm9vdCt0K1wiICovXCJ9KSk7cmV0dXJuW3JdLmNvbmNhdChpKS5jb25jYXQoW2FdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfShlLHQpO3JldHVybiBlWzJdP1wiQG1lZGlhIFwiK2VbMl0rXCJ7XCIrbitcIn1cIjpufSkpLmpvaW4oXCJcIil9LGUuaT1mdW5jdGlvbih0LG4pe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1bW251bGwsdCxcIlwiXV0pO2Zvcih2YXIgcj17fSxvPTA7bzx0aGlzLmxlbmd0aDtvKyspe3ZhciBhPXRoaXNbb11bMF07XCJudW1iZXJcIj09dHlwZW9mIGEmJihyW2FdPSEwKX1mb3Iobz0wO288dC5sZW5ndGg7bysrKXt2YXIgaT10W29dO1wibnVtYmVyXCI9PXR5cGVvZiBpWzBdJiZyW2lbMF1dfHwobiYmIWlbMl0/aVsyXT1uOm4mJihpWzJdPVwiKFwiK2lbMl0rXCIpIGFuZCAoXCIrbitcIilcIiksZS5wdXNoKGkpKX19LGV9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKTt0LmV4cG9ydHM9XCJzdHJpbmdcIj09dHlwZW9mIHI/cjpyLnRvU3RyaW5nKCl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQpO3QuZXhwb3J0cz1cInN0cmluZ1wiPT10eXBlb2Ygcj9yOnIudG9TdHJpbmcoKX0sZnVuY3Rpb24odCxlLG4peyh0LmV4cG9ydHM9bigwKSghMSkpLnB1c2goW3QuaSxcIkAtd2Via2l0LWtleWZyYW1lcyBzcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QGtleWZyYW1lcyBzcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGJ1cnN0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9OTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGJ1cnN0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9OTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2hpbmd7MCV7b3BhY2l0eToxfTQ1JXtvcGFjaXR5OjB9OTAle29wYWNpdHk6MX19QGtleWZyYW1lcyBmbGFzaGluZ3swJXtvcGFjaXR5OjF9NDUle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1sZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtbGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtcmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtcmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS11cHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLXVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1kb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLWRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgdGFkYXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX0xMCUsMjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpfTQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgtMTBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIHRhZGF7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MTAlLDIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCguOTUsLjk1LC45NSkgcm90YXRlKC0xMGRlZyl9MzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpO3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDEwZGVnKX00MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fS5ieC1zcGluLC5ieC1zcGluLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOnNwaW4gMnMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGluIDJzIGxpbmVhciBpbmZpbml0ZX0uYngtdGFkYSwuYngtdGFkYS1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjp0YWRhIDEuNXMgZWFzZSBpbmZpbml0ZTthbmltYXRpb246dGFkYSAxLjVzIGVhc2UgaW5maW5pdGV9LmJ4LWZsYXNoaW5nLC5ieC1mbGFzaGluZy1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmbGFzaGluZyAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246Zmxhc2hpbmcgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWJ1cnN0LC5ieC1idXJzdC1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpidXJzdCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246YnVyc3QgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtdXAsLmJ4LWZhZGUtdXAtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS11cCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS11cCAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS1kb3duLC5ieC1mYWRlLWRvd24taG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1kb3duIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLWRvd24gMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtbGVmdCwuYngtZmFkZS1sZWZ0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtbGVmdCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS1sZWZ0IDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1mYWRlLXJpZ2h0LC5ieC1mYWRlLXJpZ2h0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtcmlnaHQgMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhZGUtcmlnaHQgMS41cyBpbmZpbml0ZSBsaW5lYXJ9XCIsXCJcIl0pfSxmdW5jdGlvbih0LGUsbil7KHQuZXhwb3J0cz1uKDApKCExKSkucHVzaChbdC5pLCcuYngtcm90YXRlLTkwe3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVwifS5ieC1yb3RhdGUtMTgwe3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcIn0uYngtcm90YXRlLTI3MHt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXCJ9LmJ4LWZsaXAtaG9yaXpvbnRhbHt0cmFuc2Zvcm06c2NhbGVYKC0xKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXCJ9LmJ4LWZsaXAtdmVydGljYWx7dHJhbnNmb3JtOnNjYWxlWSgtMSk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVwifScsXCJcIl0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpLG4uZChlLFwiQm94SWNvbkVsZW1lbnRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZ30pKTt2YXIgcixvLGEsaSxzPW4oMSksZj1uLm4ocyksYz1uKDIpLGw9bi5uKGMpLG09XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0sdT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihlLG4scil7cmV0dXJuIG4mJnQoZS5wcm90b3R5cGUsbiksciYmdChlLHIpLGV9fSgpLGQ9KG89KHI9T2JqZWN0KS5nZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffSxhPXIuc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0saT1cIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0P1widW5kZWZpbmVkXCI6bShSZWZsZWN0KSk/UmVmbGVjdC5jb25zdHJ1Y3Q6ZnVuY3Rpb24odCxlLG4pe3ZhciByLG89W251bGxdO3JldHVybiBvLnB1c2guYXBwbHkobyxlKSxyPXQuYmluZC5hcHBseSh0LG8pLGEobmV3IHIsbi5wcm90b3R5cGUpfSxmdW5jdGlvbih0KXt2YXIgZT1vKHQpO3JldHVybiBhKHQsYSgoZnVuY3Rpb24oKXtyZXR1cm4gaShlLGFyZ3VtZW50cyxvKHRoaXMpLmNvbnN0cnVjdG9yKX0pLGUpKX0pLHA9d2luZG93LGI9e30seT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksaD1mdW5jdGlvbigpe3JldHVybiEhcC5TaGFkeUNTU307eS5pbm5lckhUTUw9J1xcbjxzdHlsZT5cXG46aG9zdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaXRpYWw7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbjpob3N0KFtzaXplPXhzXSkge1xcbiAgICB3aWR0aDogMC44cmVtO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG59XFxuOmhvc3QoW3NpemU9c21dKSB7XFxuICAgIHdpZHRoOiAxLjU1cmVtO1xcbiAgICBoZWlnaHQ6IDEuNTVyZW07XFxufVxcbjpob3N0KFtzaXplPW1kXSkge1xcbiAgICB3aWR0aDogMi4yNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG46aG9zdChbc2l6ZT1sZ10pIHtcXG4gICAgd2lkdGg6IDMuMHJlbTtcXG4gICAgaGVpZ2h0OiAzLjByZW07XFxufVxcblxcbjpob3N0KFtzaXplXTpub3QoW3NpemU9XCJcIl0pOm5vdChbc2l6ZT14c10pOm5vdChbc2l6ZT1zbV0pOm5vdChbc2l6ZT1tZF0pOm5vdChbc2l6ZT1sZ10pKSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbjpob3N0KFtwdWxsPWxlZnRdKSAjaWNvbiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4zZW0haW1wb3J0YW50O1xcbn1cXG46aG9zdChbcHVsbD1yaWdodF0pICNpY29uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tbGVmdDogLjNlbSFpbXBvcnRhbnQ7XFxufVxcbjpob3N0KFtib3JkZXI9c3F1YXJlXSkgI2ljb24ge1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG4gICAgYm9yZGVyOiAuMDdlbSBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxufVxcbjpob3N0KFtib3JkZXI9Y2lyY2xlXSkgI2ljb24ge1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG4gICAgYm9yZGVyOiAuMDdlbSBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jaWNvbixcXG5zdmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNpY29uIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59IFxcbicrZi5hK1wiXFxuXCIrbC5hKydcXG48L3N0eWxlPlxcbjxkaXYgaWQ9XCJpY29uXCI+PC9kaXY+Jzt2YXIgZz1kKGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpO3ZhciB0PWZ1bmN0aW9uKHQsZSl7aWYoIXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiFlfHxcIm9iamVjdFwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT90OmV9KHRoaXMsKGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkpLmNhbGwodGhpcykpO3JldHVybiB0LiR1aT10LmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHQuJHVpLmFwcGVuZENoaWxkKHQub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKHkuY29udGVudCwhMCkpLGgoKSYmcC5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodCksdC5fc3RhdGU9eyRpY29uSG9sZGVyOnQuJHVpLmdldEVsZW1lbnRCeUlkKFwiaWNvblwiKSx0eXBlOnQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKX0sdH1yZXR1cm4gZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX0oZSxIVE1MRWxlbWVudCksdShlLG51bGwsW3trZXk6XCJnZXRJY29uU3ZnXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLmNkblVybCtcIi9yZWd1bGFyL2J4LVwiK3QrXCIuc3ZnXCI7cmV0dXJuXCJzb2xpZFwiPT09ZT9uPXRoaXMuY2RuVXJsK1wiL3NvbGlkL2J4cy1cIit0K1wiLnN2Z1wiOlwibG9nb1wiPT09ZSYmKG49dGhpcy5jZG5VcmwrXCIvbG9nb3MvYnhsLVwiK3QrXCIuc3ZnXCIpLG4mJmJbbl18fChiW25dPW5ldyBQcm9taXNlKChmdW5jdGlvbih0LGUpe3ZhciByPW5ldyBYTUxIdHRwUmVxdWVzdDtyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKGZ1bmN0aW9uKCl7dGhpcy5zdGF0dXM8MjAwfHx0aGlzLnN0YXR1cz49MzAwP2UobmV3IEVycm9yKHRoaXMuc3RhdHVzK1wiIFwiK3RoaXMucmVzcG9uc2VUZXh0KSk6dCh0aGlzLnJlc3BvbnNlVGV4dCl9KSksci5vbmVycm9yPWUsci5vbmFib3J0PWUsci5vcGVuKFwiR0VUXCIsbiksci5zZW5kKCl9KSkpLGJbbl19fSx7a2V5OlwiZGVmaW5lXCIsdmFsdWU6ZnVuY3Rpb24odCl7dD10fHx0aGlzLnRhZ05hbWUsaCgpJiZwLlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZSh5LHQpLGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0LHRoaXMpfX0se2tleTpcImNkblVybFwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiLy91bnBrZy5jb20vYm94aWNvbnNAMi4xLjQvc3ZnXCJ9fSx7a2V5OlwidGFnTmFtZVwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiYm94LWljb25cIn19LHtrZXk6XCJvYnNlcnZlZEF0dHJpYnV0ZXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5bXCJ0eXBlXCIsXCJuYW1lXCIsXCJjb2xvclwiLFwic2l6ZVwiLFwicm90YXRlXCIsXCJmbGlwXCIsXCJhbmltYXRpb25cIixcImJvcmRlclwiLFwicHVsbFwiXX19XSksdShlLFt7a2V5OlwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4pe3ZhciByPXRoaXMuX3N0YXRlLiRpY29uSG9sZGVyO3N3aXRjaCh0KXtjYXNlXCJ0eXBlXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLiRpY29uSG9sZGVyLnRleHRDb250ZW50PVwiXCIsci50eXBlJiYoci50eXBlPW51bGwpLHIudHlwZT0hbnx8XCJzb2xpZFwiIT09biYmXCJsb2dvXCIhPT1uP1wicmVndWxhclwiOm4sdm9pZCAwIT09ci5jdXJyZW50TmFtZSYmdC5jb25zdHJ1Y3Rvci5nZXRJY29uU3ZnKHIuY3VycmVudE5hbWUsci50eXBlKS50aGVuKChmdW5jdGlvbih0KXtyLnR5cGU9PT1uJiYoci4kaWNvbkhvbGRlci5pbm5lckhUTUw9dCl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpY29uOiBcIityLmN1cnJlbnROYW1lK1wiXFxuXCIrdCl9KSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJuYW1lXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLmN1cnJlbnROYW1lPW4sci4kaWNvbkhvbGRlci50ZXh0Q29udGVudD1cIlwiLG4mJnZvaWQgMCE9PXIudHlwZSYmdC5jb25zdHJ1Y3Rvci5nZXRJY29uU3ZnKG4sci50eXBlKS50aGVuKChmdW5jdGlvbih0KXtyLmN1cnJlbnROYW1lPT09biYmKHIuJGljb25Ib2xkZXIuaW5uZXJIVE1MPXQpfSkpLmNhdGNoKChmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaWNvbjogXCIrbitcIlxcblwiK3QpfSkpfSh0aGlzLDAsbik7YnJlYWs7Y2FzZVwiY29sb3JcIjpyLnN0eWxlLmZpbGw9bnx8XCJcIjticmVhaztjYXNlXCJzaXplXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLnNpemUmJihyLiRpY29uSG9sZGVyLnN0eWxlLndpZHRoPXIuJGljb25Ib2xkZXIuc3R5bGUuaGVpZ2h0PVwiXCIsci5zaXplPXIuc2l6ZVR5cGU9bnVsbCksbiYmIS9eKHhzfHNtfG1kfGxnKSQvLnRlc3Qoci5zaXplKSYmKHIuc2l6ZT1uLnRyaW0oKSxyLiRpY29uSG9sZGVyLnN0eWxlLndpZHRoPXIuJGljb25Ib2xkZXIuc3R5bGUuaGVpZ2h0PXIuc2l6ZSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJyb3RhdGVcIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1yb3RhdGUtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtcm90YXRlLVwiK24pO2JyZWFrO2Nhc2VcImZsaXBcIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1mbGlwLVwiK2UpLG4mJnIuY2xhc3NMaXN0LmFkZChcImJ4LWZsaXAtXCIrbik7YnJlYWs7Y2FzZVwiYW5pbWF0aW9uXCI6ZSYmci5jbGFzc0xpc3QucmVtb3ZlKFwiYngtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtXCIrbil9fX0se2tleTpcImNvbm5lY3RlZENhbGxiYWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXtoKCkmJnAuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpfX1dKSxlfSgpKTtlLmRlZmF1bHQ9ZyxnLmRlZmluZSgpfV0pfSxcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkJveEljb25FbGVtZW50PWUoKTp0LkJveEljb25FbGVtZW50PWUoKX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJveGljb25zLmpzLm1hcCIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5jb250YWluZXJNYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5iYXJOYXZpZ2F0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICMxYThjZmY7XFxuICBmbGV4LWdyb3c6IDAuMjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogMXB4OyB9XFxuICAuYmFyTmF2aWdhdGlvbiAuaWNvbnNOYXZlZ2F0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAuYmFyTmF2aWdhdGlvbiAuaWNvbnNOYXZlZ2F0aW9uIC5sb2dvTmF2ZWdhdGlvbiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBvcmRlcjogMjtcXG4gICAgICBmbGV4LWdyb3c6IDI7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuICAgICAgLmJhck5hdmlnYXRpb24gLmljb25zTmF2ZWdhdGlvbiAubG9nb05hdmVnYXRpb24gLmxvZ29Db250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgfVxcbiAgICAgICAgLmJhck5hdmlnYXRpb24gLmljb25zTmF2ZWdhdGlvbiAubG9nb05hdmVnYXRpb24gLmxvZ29Db250YWluZXJfX2xvZ28ge1xcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAuYmFyTmF2aWdhdGlvbiAuaWNvbnNOYXZlZ2F0aW9uIC5pY29ucyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBmbGV4LWdyb3c6IDE7IH1cXG4gICAgICAuYmFyTmF2aWdhdGlvbiAuaWNvbnNOYXZlZ2F0aW9uIC5pY29ucy0tbGlua3Mge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgIC5iYXJOYXZpZ2F0aW9uIC5pY29uc05hdmVnYXRpb24gLm90aGVyVGhpbmtzIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIG9yZGVyOiAzO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZm9udC1zaXplOiAzMHB4OyB9XFxuXFxuLml0ZW1UYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBmbGV4LWdyb3c6IDAuNDtcXG4gIGJvcmRlci1yaWdodDogMC4xcmVtIHNvbGlkICNlNmU2ZTY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5pdGVtVGFzayAudGFza0xpc3QgdWwge1xcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgIC5pdGVtVGFzayAudGFza0xpc3QgdWwgbGkge1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDlweDsgfVxcbiAgICAgIC5pdGVtVGFzayAudGFza0xpc3QgdWwgbGkgLmNoZWNrIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYThjZmY7XFxuICAgICAgICBtYXJnaW46IDlweDsgfVxcbiAgLml0ZW1UYXNrIC5idG5UYXNrIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7IH1cXG4gICAgLml0ZW1UYXNrIC5idG5UYXNrIC5ieHMtcGx1cy1jaXJjbGUge1xcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICBjb2xvcjogIzFhOGNmZjsgfVxcblxcbi5jb250ZW50VGFzayB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGZsZXgtZ3JvdzogMztcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5jb250ZW50VGFzayAuY2hlY2sge1xcbiAgICBjb2xvcjogIzFhOGNmZjtcXG4gICAgbWFyZ2luOiA5cHg7IH1cXG4gIC5jb250ZW50VGFzayAubWVudSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTZlNmU2OyB9XFxuICAgIC5jb250ZW50VGFzayAubWVudSB1bCB7XFxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7IH1cXG4gICAgICAuY29udGVudFRhc2sgLm1lbnUgdWwgYSB7XFxuICAgICAgICBtYXJnaW46IDMwcHg7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5jb250ZW50VGFzayAucHJvamVjdHMge1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDsgfVxcbiAgLmNvbnRlbnRUYXNrIC5wcm9kdWN0UGxhbmluZyB7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTZlNmU2O1xcbiAgICBtYXJnaW46IDIwcHg7IH1cXG4gIC5jb250ZW50VGFzayAucHJvamVjdHMyIHtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7IH1cXG4gIC5jb250ZW50VGFzayAuZGVzaWduIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNlNmU2ZTY7XFxuICAgIG1hcmdpbjogMjBweDsgfVxcbiAgLmNvbnRlbnRUYXNrIC5wcm9qZWN0czMge1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Fzcy9fZ2VuZXJhbHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zYXNzL19jb250YWluZXJNYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Fzcy9fYmFyTmF2aWdhdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Nhc3MvX2NvbG9yLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Fzcy9faXRlbVRhc2suc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zYXNzL19jb250ZW50VGFzay5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FDYnBCO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FDSGpCO0VBQ0ksbUJDRG1CO0VERW5CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNDSmlCO0VES2pCLFVBQVUsRUFBQTtFQU5kO0lBU1EsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7SUFkdkI7TUFpQlksYUFBYTtNQUNiLFFBQVE7TUFDUixZQUFZO01BQ1osc0JBQXNCO01BQ3RCLHlCQUF5QixFQUFBO01BckJyQztRQXdCZ0IsV0FBVztRQUNYLG9CQUFvQixFQUFBO1FBekJwQztVQTZCb0IsY0M1QkMsRUFBQTtJRERyQjtNQW1DWSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLDhCQUE4QjtNQUM5QixZQUFZLEVBQUE7TUF0Q3hCO1FBeUNnQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLFlBQVksRUFBQTtJQTNDNUI7TUFpRFksYUFBYTtNQUNiLFFBQVE7TUFDUixzQkFBc0I7TUFDdEIsZUFBZSxFQUFBOztBRXBEM0I7RUFDSSx5QkRBaUI7RUNDakIsY0FBYztFQUNkLGtDQUE2QztFQUM3QyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0VBTnZCO0lBVVksZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0lBWC9CO01BY2dCLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsbUJBQW1CLEVBQUE7TUFoQm5DO1FBbUJvQix5QkRuQkc7UUNvQkgsV0FBVyxFQUFBO0VBcEIvQjtJQTRCUSxpQkFBaUIsRUFBQTtJQTVCekI7TUErQlksZUFBZTtNQUNmLGNEaENXLEVBQUE7O0FFQXZCO0VBQ0UsbUJGQW1CO0VFQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBTGxCO0lBU0ksY0ZUbUI7SUVVbkIsV0FBVyxFQUFBO0VBVmY7SUFjSSxhQUFhO0lBQ2IsbUNBQThDLEVBQUE7SUFmbEQ7TUFrQk0saUJBQWlCLEVBQUE7TUFsQnZCO1FBb0JRLFlBQVk7UUFDWixxQkFBcUIsRUFBQTtFQXJCN0I7SUEyQkksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTtFQTdCeEI7SUFpQ0ksbUNBQThDO0lBQzlDLFlBQVksRUFBQTtFQWxDaEI7SUFzQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTtFQXhDeEI7SUE0Q0ksbUNBQThDO0lBQzlDLFlBQVksRUFBQTtFQTdDaEI7SUFpREksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVwiLFwiLmNvbnRhaW5lck1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcXHJcXG59XCIsXCIuYmFyTmF2aWdhdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBmbGV4LWdyb3c6IDAuMjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgXFxyXFxuICAgIC5pY29uc05hdmVnYXRpb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcblxcclxcbiAgICAgICAgLmxvZ29OYXZlZ2F0aW9uIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIG9yZGVyOiAyO1xcclxcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmxvZ29Db250YWluZXIge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICZfX2xvZ28geyAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yOyAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaWNvbnMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICAgICAgICAgICYtLWxpbmtzIHtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAub3RoZXJUaGlua3Mge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgb3JkZXI6IDM7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIkcHJpbWFyeS1jb2xvcjogIzFhOGNmZjtcXHJcXG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsXCIuaXRlbVRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7ICAgIFxcclxcbiAgICBmbGV4LWdyb3c6IDAuNDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIFxcclxcbiAgICBcXHJcXG4gICAgLnRhc2tMaXN0IHsgIFxcclxcbiAgICAgICAgdWwgeyAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmNoZWNrIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9ICAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnRuVGFzayB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG5cXHJcXG4gICAgICAgIC5ieHMtcGx1cy1jaXJjbGUge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG59XCIsXCIuY29udGVudFRhc2sge1xcclxcbiAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIGZsZXgtZ3JvdzogMztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFxyXFxuXFxyXFxuICAuY2hlY2sge1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgIG1hcmdpbjogOXB4OyBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcXHJcXG5cXHJcXG4gICAgdWwge1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICAgIGEge1xcclxcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2plY3RzIHtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7ICAgICAgICAgXFxyXFxuICB9IFxcclxcblxcclxcbiAgLnByb2R1Y3RQbGFuaW5nIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4OyAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0czIge1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXNpZ24ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdHMzIHtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQ29tcG9uZW50c18xID0gcmVxdWlyZShcIi4vY29yZS91dGlscy9Db21wb25lbnRzXCIpO1xyXG5jb25zdCB0b2RvV2ViXzEgPSByZXF1aXJlKFwiLi91aS90b2RvV2ViXCIpO1xyXG5jbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihfYXBwKSB7XHJcbiAgICAgICAgdGhpcy5fYXBwID0gX2FwcDtcclxuICAgIH1cclxuICAgIHN0YXJ0QXBwKCkge1xyXG4gICAgICAgIHRoaXMuX2FwcC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdFdlYkFwcGxpY2F0aW9uKHJvb3RDb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCB2aWV3Q29tcG9uZW50ID0gbmV3IENvbXBvbmVudHNfMS5Db21wb25lbnRzKCk7XHJcbiAgICAgICAgdmlld0NvbXBvbmVudC5zZXRSb290Q29tcG9uZW50KHJvb3RDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuX2FwcC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbihuZXcgdG9kb1dlYl8xLk15V2ViQXBwbGljYXRpb24oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGFwcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXRSb3V0ZUNvbXBvbmVudCA9IGV4cG9ydHMuZGF0YVJvdXRlcyA9IHZvaWQgMDtcclxudmFyIGRhdGFSb3V0ZXM7XHJcbihmdW5jdGlvbiAoZGF0YVJvdXRlcykge1xyXG4gICAgZGF0YVJvdXRlc1tcIndlYkFwcFwiXSA9IFwiLi9zcmMvYXBwL3VpL3RvZG9XZWIvd2ViQXBwLmh0bWxcIjtcclxufSkoZGF0YVJvdXRlcyA9IGV4cG9ydHMuZGF0YVJvdXRlcyB8fCAoZXhwb3J0cy5kYXRhUm91dGVzID0ge30pKTtcclxuY29uc3QgZ2V0Um91dGVDb21wb25lbnQgPSAodGVtcGxhdGUpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAuL3NyYy9hcHAvdWkvdG9kb1dlYi9jb21wb25lbnRzLyR7dGVtcGxhdGV9Lmh0bWxgO1xyXG4gICAgcmV0dXJuIHVybDtcclxufTtcclxuZXhwb3J0cy5nZXRSb3V0ZUNvbXBvbmVudCA9IGdldFJvdXRlQ29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29tcG9uZW50cyA9IHZvaWQgMDtcclxuY29uc3QgZGF0YVJvdXRlc18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9kYXRhUm91dGVzXCIpO1xyXG5jbGFzcyBDb21wb25lbnRzIHtcclxuICAgIHNldENvbXBvbmVudChzZWxlY3RvciwgdGVtcGxhdGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBsZXQgaHRtbE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAoMCwgZGF0YVJvdXRlc18xLmdldFJvdXRlQ29tcG9uZW50KSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSB5aWVsZCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGh0bWxOb2RlLmlubmVySFRNTCA9IGluZm87XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRSb290Q29tcG9uZW50KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkYXRhUm91dGVzXzEuZGF0YVJvdXRlcy53ZWJBcHA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSB5aWVsZCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIHJvb3QuaW5uZXJIVE1MID0gaW5mbztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbXBvbmVudHMgPSBDb21wb25lbnRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk15V2ViQXBwbGljYXRpb24gPSB2b2lkIDA7XHJcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL3V0aWxzL0NvbXBvbmVudHNcIik7XHJcbmNsYXNzIE15V2ViQXBwbGljYXRpb24ge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudHNfMS5Db21wb25lbnRzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29tcG9uZW50LnNldENvbXBvbmVudCgnYmFyTmF2aWdhdGlvbicsICdiYXJOYXZpZ2F0aW9uJyksIDMwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb21wb25lbnQuc2V0Q29tcG9uZW50KCdpdGVtVGFzaycsICdpdGVtVGFzaycpLCAzMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29tcG9uZW50LnNldENvbXBvbmVudCgnY29udGVudFRhc2snLCAnY29udGVudFRhc2snKSwgMzAwKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk15V2ViQXBwbGljYXRpb24gPSBNeVdlYkFwcGxpY2F0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqXHJcbiAqXHJcbiAqL1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FwcC9hcHBcIikpO1xyXG5yZXF1aXJlKFwiLi9hc3NldHMvc2Fzcy9tYWluLnNjc3NcIik7XHJcbnJlcXVpcmUoXCJib3hpY29uc1wiKTtcclxuYXBwXzEuZGVmYXVsdC5pbml0V2ViQXBwbGljYXRpb24oJ3Jvb3QnKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==