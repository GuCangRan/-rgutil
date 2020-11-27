"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=(t,r=null,o="parent_id")=>t.filter((e=>e[o]===r)).map((r=>({...r,children:e(t,r.id)})));exports.arrAsList=e=>Array.isArray(e)?e:[e],exports.arrAverage=(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,exports.arrAverageBy=(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,exports.arrCountOcc=(e,t)=>e.reduce(((e,r)=>r===t?e+1:e+0),0),exports.arrDeepFlatten=(e,t=1/0)=>e.flat(t),exports.arrDiff=(e,t)=>{const r=new Set(t);return e.filter((e=>!r.has(e)))},exports.arrDistinct=e=>[...new Set(e)],exports.arrIndexOfAll=(e,t)=>e.reduce(((e,r,o)=>r===t?[...e,o]:e),[]),exports.arrIntersection=(e,t)=>{const r=new Set(t);return e.filter((e=>r.has(e)))},exports.arrMax=e=>Math.max(...e),exports.arrMin=e=>Math.min(...e),exports.arrMinN=(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),exports.arrNonUnique=e=>e.filter((t=>e.indexOf(t)!==e.lastIndexOf(t))),exports.arrNthElement=(e,t=0)=>t>=e.length?[]:(t>0?e.slice(t,t+1):e.slice(t))[0],exports.arrRandomInRange=(e,t,r=1)=>Array.from({length:r},(()=>Math.floor(Math.random()*(t-e+1))+e)),exports.arrRandomN=([...e],t=1)=>{let r=e.length;for(;r;){const t=Math.floor(Math.random()*r--);[e[r],e[t]]=[e[t],e[r]]}return e.slice(0,t)},exports.arrRandomSample=e=>e[Math.floor(Math.random()*e.length)],exports.arrShuffle=([...e])=>{let t=e.length;for(;t;){const r=Math.floor(Math.random()*t--);[e[t],e[r]]=[e[r],e[t]]}return e},exports.arrToTree=e,exports.arrWithValues=(e,t=0)=>Array(e).fill(t),exports.byteSize=e=>new Blob([e]).size,exports.dayOfYear=e=>Math.floor((e-new Date(e.getFullYear(),0,0))/864e5),exports.daysDiff=(e,t)=>Math.ceil(Math.abs(e-t)/864e5),exports.escapeHTML=e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),exports.getSelectedText=()=>window.getSelection().toString(),exports.getType=e=>void 0===e?"undefined":null===e?"null":e.constructor.name.toLowerCase(),exports.goToTop=()=>window.scrollTo(0,0),exports.goToTopClassName=e=>{let t=document.getElementsByClassName(e);if(!t[0])throw`未能找到class为 ${e} 的节点,请确认`;t[0].scrollTo(0,0)},exports.goToTopId=e=>{let t=document.getElementById(e);if(!t)throw`未能找到id为 ${ID} 的节点,请确认`;t.scrollTo(0,0)},exports.is=(e,t)=>![,null].includes(t)&&t.constructor===e,exports.isArray=e=>Array.isArray(e),exports.isAscii=e=>/^[\x00-\x7F]+$/.test(e),exports.isBrowser=()=>![typeof window,typeof document].includes("undefined"),exports.isFunction=e=>["[object Function]","[object GeneratorFunction]","[object AsyncFunction]","[object Promise]"].includes(Object.prototype.toString.call(e)),exports.isHasWhitespace=e=>/\s/.test(e),exports.isHexColor=e=>/^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e),exports.isHexadecimal=e=>/^[A-F0-9]+$/i.test(e),exports.isInteger=e=>/^(-|\+)?\d+$/.test(e),exports.isNegativeNum=e=>/^-[1-9]\d*$/.test(e),exports.isNil=e=>null==e,exports.isNull=e=>null===e,exports.isNumber=e=>!isNaN(parseFloat(e))&&isFinite(e),exports.isObject=e=>null!==e&&"object"==typeof e,exports.isPlainObject=e=>!!e&&"object"==typeof e&&(null===e.__proto__||e.__proto__===Object.prototype),exports.isPositiveNum=e=>/^[1-9]\d*$/.test(e),exports.isPrime=e=>e>1&&Array(Math.floor(Math.sqrt(e))-1).fill(0).map(((e,t)=>t+2)).every((t=>e%t!=0)),exports.isRegExp=e=>"[object RegExp]"===Object.prototype.toString.call(e),exports.isString=e=>"[object String]"===Object.prototype.toString.call(e),exports.monthDiff=(e,t)=>Math.max(0,12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()),exports.removeHTMLTags=e=>e.replace(/<[^>]*>/g,""),exports.splitLines=e=>e.split(/\r?\n/),exports.version="1.0.1";
