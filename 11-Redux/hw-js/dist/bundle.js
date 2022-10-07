(()=>{var t={857:(t,e,r)=>{"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}r.r(e),r.d(e,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>b,bindActionCreators:()=>E,combineReducers:()=>d,compose:()=>v,createStore:()=>y,legacy_createStore:()=>l});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function y(t,e,r){var n;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error(c(1));return r(y)(t,e)}if("function"!=typeof t)throw new Error(c(2));var o=t,i=e,f=[],l=f,d=!1;function s(){l===f&&(l=f.slice())}function E(){if(d)throw new Error(c(3));return i}function v(t){if("function"!=typeof t)throw new Error(c(4));if(d)throw new Error(c(5));var e=!0;return s(),l.push(t),function(){if(e){if(d)throw new Error(c(6));e=!1,s();var r=l.indexOf(t);l.splice(r,1),f=null}}}function b(t){if(!p(t))throw new Error(c(7));if(void 0===t.type)throw new Error(c(8));if(d)throw new Error(c(9));try{d=!0,i=o(i,t)}finally{d=!1}for(var e=f=l,r=0;r<e.length;r++)(0,e[r])();return t}function O(t){if("function"!=typeof t)throw new Error(c(10));o=t,b({type:a.REPLACE})}function h(){var t,e=v;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(c(11));function r(){t.next&&t.next(E())}return r(),{unsubscribe:e(r)}}})[u]=function(){return this},t}return b({type:a.INIT}),(n={dispatch:b,subscribe:v,getState:E,replaceReducer:O})[u]=h,n}var l=y;function d(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];"function"==typeof t[o]&&(r[o]=t[o])}var i,u=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:a.INIT}))throw new Error(c(12));if(void 0===r(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(r)}catch(t){i=t}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=r[a],y=t[a],l=p(y,e);if(void 0===l)throw e&&e.type,new Error(c(14));o[a]=l,n=n||l!==y}return(n=n||u.length!==Object.keys(t).length)?o:t}}function s(t,e){return function(){return e(t.apply(this,arguments))}}function E(t,e){if("function"==typeof t)return s(t,e);if("object"!=typeof t||null===t)throw new Error(c(16));var r={};for(var n in t){var o=t[n];"function"==typeof o&&(r[n]=s(o,e))}return r}function v(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function b(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=e.map((function(t){return t(o)}));return n=v.apply(void 0,u)(r.dispatch),i(i({},r),{},{dispatch:n})}}}},883:t=>{t.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(t,e,r)=>{const{INCREMENTO:n,DECREMENTO:o}=r(883);t.exports={incremento:function(){return{type:n}},decremento:function(){return{type:o}}}},616:(t,e,r)=>{const{INCREMENTO:n,DECREMENTO:o}=r(883),i={contador:0};t.exports=function(t=i,e){return e.type===n?{contador:t.contador+1}:e.type===o?{contador:t.contador-1}:t}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{createStore:t}=r(857),e=r(616),{incremento:n,decremento:o}=r(518);var i=t(e),c=document.getElementById("valor");function u(){let t=i.getState().contador;c.innerHTML=t}u(),i.subscribe(u),document.getElementById("incremento").onclick=function(){i.dispatch(n())},document.getElementById("decremento").onclick=function(){i.dispatch(o())},document.getElementById("incrementoImpar").onclick=function(){i.getState().contador%2!=0&&i.dispatch(n())},document.getElementById("incrementoAsync").onclick=function(){setTimeout(i.dispatch,1e3,n())}})()})();