!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).$R={})}(this,(function(e){"use strict";let t=[];let r=[];const a=(e,t=null,r="parent_id")=>e.filter((e=>e[r]===t)).map((t=>({...t,children:a(e,t.id)}))),o=(e=0,t=0)=>parseInt(Math.random()*(t-e+1)+e,10),n=(e,t=new WeakMap)=>{if(e instanceof RegExp)return new RegExp(e);if(e instanceof Date)return new Date(e);if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);let r=new e.constructor;t.set(e,r);for(let a in e)e.hasOwnProperty(a)&&(r[a]=n(e[a],t));return r},l=e=>{var t,r;for(r in Object.freeze(e),e)t=e[r],e.hasOwnProperty(r)&&"object"==typeof t&&!Object.isFrozen(t)&&l(t)},s=(e,t,r=24)=>{let a=Date.now()+60*r*60*1e3;return a=new Date(a).toUTCString(),document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+a:"")+";path=/;",!0},i=e=>{let t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),r=document.cookie.match(t);return r?r[2]:null};const c={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){e=String(e);let t,r,a,o,n,l,s,i="",u=0;for(e=c._utf8_encode(e);u<e.length;)t=e.charCodeAt(u++),r=e.charCodeAt(u++),a=e.charCodeAt(u++),o=t>>2,n=(3&t)<<4|r>>4,l=(15&r)<<2|a>>6,s=63&a,isNaN(r)?l=s=64:isNaN(a)&&(s=64),i=i+c._keyStr.charAt(o)+c._keyStr.charAt(n)+c._keyStr.charAt(l)+c._keyStr.charAt(s);return i},decode:function(e){let t,r,a,o,n,l,s,i="",u=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");u<e.length;)o=c._keyStr.indexOf(e.charAt(u++)),n=c._keyStr.indexOf(e.charAt(u++)),l=c._keyStr.indexOf(e.charAt(u++)),s=c._keyStr.indexOf(e.charAt(u++)),t=o<<2|n>>4,r=(15&n)<<4|l>>2,a=(3&l)<<6|s,i+=String.fromCharCode(t),64!=l&&(i+=String.fromCharCode(r)),64!=s&&(i+=String.fromCharCode(a));return i=c._utf8_decode(i),i},_utf8_encode:function(e){e=e.replace(/rn/g,"n");let t="";for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t},_utf8_decode:function(e){let t="",r=0,a=0,o=0;for(;r<e.length;)a=e.charCodeAt(r),a<128?(t+=String.fromCharCode(a),r++):a>191&&a<224?(o=e.charCodeAt(r+1),t+=String.fromCharCode((31&a)<<6|63&o),r+=2):(o=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&a)<<12|(63&o)<<6|63&c3),r+=3);return t}},u=function(e){function t(e,t){return e<<t|e>>>32-t}function r(e,t){let r,a,o,n,l;return o=2147483648&e,n=2147483648&t,r=1073741824&e,a=1073741824&t,l=(1073741823&e)+(1073741823&t),r&a?2147483648^l^o^n:r|a?1073741824&l?3221225472^l^o^n:1073741824^l^o^n:l^o^n}function a(e,a,o,n,l,s,i){return e=r(e,r(r(function(e,t,r){return e&t|~e&r}(a,o,n),l),i)),r(t(e,s),a)}function o(e,a,o,n,l,s,i){return e=r(e,r(r(function(e,t,r){return e&r|t&~r}(a,o,n),l),i)),r(t(e,s),a)}function n(e,a,o,n,l,s,i){return e=r(e,r(r(function(e,t,r){return e^t^r}(a,o,n),l),i)),r(t(e,s),a)}function l(e,a,o,n,l,s,i){return e=r(e,r(r(function(e,t,r){return t^(e|~r)}(a,o,n),l),i)),r(t(e,s),a)}function s(e){let t,r,a="",o="";for(r=0;r<=3;r++)t=e>>>8*r&255,o="0"+t.toString(16),a+=o.substr(o.length-2,2);return a}let i,c,u,d,h,f,m,p,g,y=Array();for(y=function(e){let t,r=e.length,a=r+8,o=16*((a-a%64)/64+1),n=Array(o-1),l=0,s=0;for(;s<r;)t=(s-s%4)/4,l=s%4*8,n[t]=n[t]|e.charCodeAt(s)<<l,s++;return t=(s-s%4)/4,l=s%4*8,n[t]=n[t]|128<<l,n[o-2]=r<<3,n[o-1]=r>>>29,n}(e=function(e){e=e.replace(/\r\n/g,"\n");let t="";for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t}(e)),f=1732584193,m=4023233417,p=2562383102,g=271733878,i=0;i<y.length;i+=16)c=f,u=m,d=p,h=g,f=a(f,m,p,g,y[i+0],7,3614090360),g=a(g,f,m,p,y[i+1],12,3905402710),p=a(p,g,f,m,y[i+2],17,606105819),m=a(m,p,g,f,y[i+3],22,3250441966),f=a(f,m,p,g,y[i+4],7,4118548399),g=a(g,f,m,p,y[i+5],12,1200080426),p=a(p,g,f,m,y[i+6],17,2821735955),m=a(m,p,g,f,y[i+7],22,4249261313),f=a(f,m,p,g,y[i+8],7,1770035416),g=a(g,f,m,p,y[i+9],12,2336552879),p=a(p,g,f,m,y[i+10],17,4294925233),m=a(m,p,g,f,y[i+11],22,2304563134),f=a(f,m,p,g,y[i+12],7,1804603682),g=a(g,f,m,p,y[i+13],12,4254626195),p=a(p,g,f,m,y[i+14],17,2792965006),m=a(m,p,g,f,y[i+15],22,1236535329),f=o(f,m,p,g,y[i+1],5,4129170786),g=o(g,f,m,p,y[i+6],9,3225465664),p=o(p,g,f,m,y[i+11],14,643717713),m=o(m,p,g,f,y[i+0],20,3921069994),f=o(f,m,p,g,y[i+5],5,3593408605),g=o(g,f,m,p,y[i+10],9,38016083),p=o(p,g,f,m,y[i+15],14,3634488961),m=o(m,p,g,f,y[i+4],20,3889429448),f=o(f,m,p,g,y[i+9],5,568446438),g=o(g,f,m,p,y[i+14],9,3275163606),p=o(p,g,f,m,y[i+3],14,4107603335),m=o(m,p,g,f,y[i+8],20,1163531501),f=o(f,m,p,g,y[i+13],5,2850285829),g=o(g,f,m,p,y[i+2],9,4243563512),p=o(p,g,f,m,y[i+7],14,1735328473),m=o(m,p,g,f,y[i+12],20,2368359562),f=n(f,m,p,g,y[i+5],4,4294588738),g=n(g,f,m,p,y[i+8],11,2272392833),p=n(p,g,f,m,y[i+11],16,1839030562),m=n(m,p,g,f,y[i+14],23,4259657740),f=n(f,m,p,g,y[i+1],4,2763975236),g=n(g,f,m,p,y[i+4],11,1272893353),p=n(p,g,f,m,y[i+7],16,4139469664),m=n(m,p,g,f,y[i+10],23,3200236656),f=n(f,m,p,g,y[i+13],4,681279174),g=n(g,f,m,p,y[i+0],11,3936430074),p=n(p,g,f,m,y[i+3],16,3572445317),m=n(m,p,g,f,y[i+6],23,76029189),f=n(f,m,p,g,y[i+9],4,3654602809),g=n(g,f,m,p,y[i+12],11,3873151461),p=n(p,g,f,m,y[i+15],16,530742520),m=n(m,p,g,f,y[i+2],23,3299628645),f=l(f,m,p,g,y[i+0],6,4096336452),g=l(g,f,m,p,y[i+7],10,1126891415),p=l(p,g,f,m,y[i+14],15,2878612391),m=l(m,p,g,f,y[i+5],21,4237533241),f=l(f,m,p,g,y[i+12],6,1700485571),g=l(g,f,m,p,y[i+3],10,2399980690),p=l(p,g,f,m,y[i+10],15,4293915773),m=l(m,p,g,f,y[i+1],21,2240044497),f=l(f,m,p,g,y[i+8],6,1873313359),g=l(g,f,m,p,y[i+15],10,4264355552),p=l(p,g,f,m,y[i+6],15,2734768916),m=l(m,p,g,f,y[i+13],21,1309151649),f=l(f,m,p,g,y[i+4],6,4149444226),g=l(g,f,m,p,y[i+11],10,3174756917),p=l(p,g,f,m,y[i+2],15,718787259),m=l(m,p,g,f,y[i+9],21,3951481745),f=r(f,c),m=r(m,u),p=r(p,d),g=r(g,h);return(s(f)+s(m)+s(p)+s(g)).toLowerCase()},d=c.encode,h=c.decode;class f{constructor(e){this.cache=new Map,this.capacity=e}get(e){if(!this.cache.has(e))return-1;const t=this.cache.get(e);return this.cache.delete(e),this.cache.set(e,t),t}put(e,t){this.size<=0||(this.cache.has(e)&&this.cache.delete(e),this.cache.set(e,t),this.cache.size>this.capacity&&this.cache.delete(this.cache.keys().next().value))}clear(){this.cache.clear()}}class m{constructor(e){this.size=e,this.values=new Map,this.times=new Map}get(e){if(this.values.has(e)){let t=this.values.get(e)||0,r=this.times.get(e)||0;return this.values.delete(e),this.times.delete(e),this.values.set(e,t),this.times.set(e,r+1),t}return-1}put(e,t){if(this.size<=0)return;let r=1,a=Math.min(...this.times.values());if(this.values.has(e)&&(r=(this.times.get(e)||0)+1,this.values.delete(e),this.times.delete(e)),this.values.set(e,t),this.times.set(e,r),this.size<this.values.size){let e=this.values.keys(),t=e.next().value;for(;t&&this.times.get(t)!==a;)t=e.next().value;this.values.delete(t),this.times.delete(t)}}clear(){this.values.clear(),this.times.clear()}}e.LFUCache=e=>new m(e),e.LRUCache=e=>new f(e),e.arrAsList=e=>Array.isArray(e)?e:[e],e.arrAverage=(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,e.arrAverageBy=(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,e.arrCountOcc=(e,t)=>e.reduce(((e,r)=>r===t?e+1:e+0),0),e.arrDeepFlatten=(e,t=1/0)=>e.flat(t),e.arrDiff=(e,t)=>{const r=new Set(t);return e.filter((e=>!r.has(e)))},e.arrDistinct=e=>[...new Set(e)],e.arrIndexOfAll=(e,t)=>e.reduce(((e,r,a)=>r===t?[...e,a]:e),[]),e.arrIntersection=(e,t)=>{const r=new Set(t);return e.filter((e=>r.has(e)))},e.arrMax=e=>Math.max(...e),e.arrMin=e=>Math.min(...e),e.arrMinN=(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),e.arrNonUnique=e=>e.filter((t=>e.indexOf(t)!==e.lastIndexOf(t))),e.arrNthElement=(e,t=0)=>t>=e.length?[]:(t>0?e.slice(t,t+1):e.slice(t))[0],e.arrRandomInRange=(e,t,r=1)=>Array.from({length:r},(()=>Math.floor(Math.random()*(t-e+1))+e)),e.arrRandomN=([...e],t=1)=>{let r=e.length;for(;r;){const t=Math.floor(Math.random()*r--);[e[r],e[t]]=[e[t],e[r]]}return e.slice(0,t)},e.arrRandomSample=e=>e[Math.floor(Math.random()*e.length)],e.arrShuffle=([...e])=>{let t=e.length;for(;t;){const r=Math.floor(Math.random()*t--);[e[t],e[r]]=[e[r],e[t]]}return e},e.arrToTree=a,e.arrTranspose=e=>e[0].map(((t,r)=>e.map((e=>e[r])))),e.arrUnZip=e=>e.reduce(((e,t)=>(t.forEach(((t,r)=>e[r].push(t))),e)),Array.from({length:Math.max(...e.map((e=>e.length)))},(e=>[]))),e.arrWithValues=(e,t=0)=>Array(e).fill(t),e.arrZip=(...e)=>Array.from({length:Math.max(...e.map((e=>e.length)))},((t,r)=>e.map((e=>e[r])))),e.base64Decode=h,e.base64Encode=d,e.byteSize=e=>new Blob([e]).size,e.bytesToSize=e=>{if(0===e)return"0 B";let t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},e.camelCase=e=>{const t=e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/[_.\- ]+/g,"-").replace(/(^-)|(-$)/g,"").split("-");let r=t[0];return t.shift(),r+t.map((e=>e.replace(/\w/,(e=>e.toUpperCase())))).join("")},e.capitalize=([e,...t])=>e.toUpperCase()+t.join(""),e.capitalizeEveryWord=e=>e.replace(/\b[a-z]/g,(e=>e.toUpperCase())),e.characterCount=(e="",t="")=>e.split(t).length-1,e.copyText=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",document.body.appendChild(t);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);return t.select(),document.execCommand("copy"),document.body.removeChild(t),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r)),!0},e.dateFormat=(e,t,r=8)=>{let a=t?new Date(t.getTime()):new Date;a.setHours(a.getHours()+r);let[o,n,l,s,i,c,u]=a.toISOString().split(/[^0-9]/).slice(0,-1),d={yyyy:o,yyy:o.substring(1,4),yy:o.substring(2,4),MM:n,M:parseInt(n),dd:l,d:parseInt(l),HH:s,H:parseInt(s),mm:i,m:parseInt(i),ss:c,s:parseInt(c),fff:u,ff:parseInt(u),f:parseInt(u)};return e.replace(/y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}/g,(e=>d[e]))},e.dayOfYear=e=>Math.floor((e-new Date(e.getFullYear(),0,0))/864e5),e.daysDiff=(e,t)=>Math.ceil(Math.abs(e-t)/864e5),e.daysInMonth=(e,t)=>new Date(e,t,0).getDate(),e.debounce=(e,t)=>{let r=null;return(...a)=>{clearTimeout(r),r=setTimeout((()=>{e(...a)}),t)}},e.decapitalize=([e,...t])=>e.toLowerCase()+t.join(""),e.decapitalizeEveryWord=e=>e.replace(/\b[A-Z]/g,(e=>e.toLowerCase())),e.deepClone=n,e.deepFreeze=l,e.delCookie=e=>!!i(e)&&s(e,"",-1),e.digitUpperCase=(e=0)=>{let t=["角","分"],r=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],a=[["元","万","亿"],["","拾","佰","仟"]],o=e<0?"欠":"";e=Math.abs(e);let n="";for(let a=0;a<t.length;a++)n+=(r[Math.floor(10*e*Math.pow(10,a))%10]+t[a]).replace(/零./,"");n=n||"整",e=Math.floor(e);for(let t=0;t<a[0].length&&e>0;t++){let o="";for(let t=0;t<a[1].length&&e>0;t++)o=r[e%10]+a[1][t]+o,e=Math.floor(e/10);n=o.replace(/(零.)*零$/,"").replace(/^$/,"零")+a[0][t]+n}return o+n.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},e.escapeHTML=e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),e.exitFullscreen=()=>{document.exitFullScreen?document.exitFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},e.formatNumber=(e,t=3,r=",")=>{let a=new RegExp(`\\B(?=(\\d{${t}})+(?!\\d))`,"g");return e.toString().replace(a,r)},e.formatPath=e=>e.replace(/[\\/]+/g,"/"),e.formatString=(e,t=3,r=",")=>{let a=new RegExp(`\\B(?=(\\w{${t}})+(?!\\w))`,"g");return e.replace(a,r)},e.fullscreen=(e=document.body)=>{e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},e.getCookie=i,e.getLocalStorage=e=>localStorage.getItem(e),e.getSelectedText=()=>window.getSelection().toString(),e.getUUID=(e="-")=>{let t=[],r="0123456789abcdef";for(let e=0;e<36;e++)t[e]=r.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=r.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]=e,t.join("")},e.goToTop=(e=!1)=>{if(e)return window.scrollTo(0,0),!0;const t=document.documentElement.scrollTop||document.body.scrollTop;return t>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,t-t/8)),!0},e.goToTopClassName=e=>{let t=document.getElementsByClassName(e);if(!t[0])throw`未能找到class为 ${e} 的节点,请确认`;t[0].scrollTo(0,0)},e.goToTopId=(e,t=!1)=>{let r=document.getElementById(e);if(!r)throw`未能找到id为 ${ID} 的节点,请确认`;t?r.scrollIntoView({behavior:"smooth"}):r.scrollIntoView?r.scrollIntoView():r.scrollIntoViewIfNeeded&&r.scrollIntoViewIfNeeded()},e.hyphenate=e=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),e.is=(e,t)=>![,null].includes(t)&&t.constructor===e,e.isArray=e=>Array.isArray(e),e.isAscii=e=>/^[\x00-\x7F]+$/.test(e),e.isBrowser=()=>![typeof window,typeof document].includes("undefined"),e.isChineseName=e=>/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(e),e.isDate=e=>"[object Date]"===Object.prototype.toString.call(e),e.isEmail=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e),e.isEmoji=e=>/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\ufe0f|\u200d|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(e),e.isEnglishName=e=>/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(e),e.isFloat=e=>/^-?([1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0)$/.test(e),e.isFullScreen=()=>!!(document.mozFullScreen||document.webkitIsFullScreen||document.webkitFullScreen||document.msFullScreen),e.isFunction=e=>["[object Function]","[object GeneratorFunction]","[object AsyncFunction]","[object Promise]"].includes(Object.prototype.toString.call(e)),e.isHTMLTag=e=>(0==t.length&&(t="html,body,base,head,link,meta,style,title, \n        address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section, \n        div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul, \n        a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby, \n        s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video, \n        embed,object,param,source,canvas,script,noscript,del,ins, \n        caption,col,colgroup,table,thead,tbody,td,th,tr, \n        button,datalist,fieldset,form,input,label,legend,meter,optgroup,option, \n        output,progress,select,textarea, \n        details,dialog,menu,menuitem,summary, \n        content,element,shadow,template,blockquote,iframe,tfoot".replace(/\s+/g,"").split(",")),t.includes(e)),e.isHasWhitespace=e=>/\s/.test(e),e.isHexColor=e=>/^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e),e.isHexadecimal=e=>/^[A-F0-9]+$/i.test(e),e.isIPV4=e=>/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e),e.isIPV6=e=>/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(e),e.isInteger=e=>/^(-|\+)?\d+$/.test(e),e.isLeapYear=e=>0==e%4&&(e%100!=0||e%400==0),e.isLicensePlate=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(?:(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/.test(e),e.isMacAddress=e=>/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(e),e.isNegativeFloat=e=>/^-([1-9]\d*.\d*|0.\d*[1-9]\d*)$/.test(e),e.isNegativeNum=e=>/^-[1-9]\d*$/.test(e),e.isNil=e=>null==e,e.isNull=e=>null===e,e.isNumber=e=>!isNaN(parseFloat(e))&&isFinite(e),e.isObject=e=>null!==e&&"object"==typeof e,e.isPhone=e=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e),e.isPlainObject=e=>!!e&&"object"==typeof e&&(null===e.__proto__||e.__proto__===Object.prototype),e.isPositiveNum=e=>/^[1-9]\d*$/.test(e),e.isPostiveFloat=e=>/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/.test(e),e.isPrime=e=>e>1&&Array(Math.floor(Math.sqrt(e))-1).fill(0).map(((e,t)=>t+2)).every((t=>e%t!=0)),e.isPwdStrength=e=>/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(e),e.isRegExp=e=>"[object RegExp]"===Object.prototype.toString.call(e),e.isString=e=>"[object String]"===Object.prototype.toString.call(e),e.isSubnetMask=e=>/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(e),e.isSvgTag=e=>(0==r.length&&(r="svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face, \n        foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern, \n        polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view".replace(/\s+/g,"").split(",")),r.includes(e)),e.isUrl=e=>/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(e),e.isVersion=e=>/^\d+(?:\.\d+){2}$/.test(e),e.isWeChat=e=>/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(e),e.md5=u,e.monthDiff=(e,t)=>Math.max(0,12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()),e.monthNameChinese=(e,t=!0)=>t?["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"][e.getMonth()]:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"][e.getMonth()],e.monthNameEnglish=(e,t=!1)=>t?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]:["January","February","March","April","May","June","July","August","September","October"," November","December"][e.getMonth()],e.objType=e=>Object.prototype.toString.call(e).slice(8,-1),e.once=e=>{let t,r=!1;return(...a)=>(r||(r=!0,t=e.apply(null,a),e=null),t)},e.pageViewHeight=()=>{let e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientHeight},e.pageViewWidth=()=>{let e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientWidth},e.privacyName=(e,t="**")=>e.replace(/^(\S)(\S|\s)*$/,`$1${t}`),e.privacyPhone=(e,t="****")=>(e+"").replace(/(\d{3})\d{1,}(\d{4})/,`$1${t}$2`),e.randomBoolean=()=>Math.random()>=.5,e.randomCode=(e=4)=>{let t="",r=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(;e--;)t+=r[o(0,r.length-1)];return t},e.randomFloat=(e=0,t=1)=>Math.random()*(t-e)+e,e.randomHexColor=()=>"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6),e.randomIP=()=>Array(4).fill(0).map(((e,t)=>Math.floor(255*Math.random())+(0===t?1:0))).join("."),e.randomNum=o,e.removeHTMLTags=e=>e.replace(/<[^>]*>/g,""),e.scrollPostion=(e=window)=>({x:void 0!==e.pageXOffset?e.pageXOffset:e.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:e.scrollTop}),e.setCookie=s,e.setLocalStorage=(e,t)=>("object"==typeof t&&(t=JSON.stringify(t)),localStorage.setItem(e,t),!0),e.splitLines=e=>e.split(/\r?\n/),e.splitPath=(e="")=>{const t=e.match(/^([\s\S]*?)((?:\.{1,2}|[^\\/]+?|)(\.[^./\\]*|))(?:[\\/]*)$/);return{dir:t[1],name:t[2],ext:t[3]}},e.starScore=e=>(e<0?e=0:e>5&&(e=5),"★★★★★☆☆☆☆☆".slice(5-e,10-e)),e.subText=(e,t=0,r="...")=>e.length>t?e.substr(0,t)+r:e,e.throttle=(e,t=100)=>{let r=!1;return(...a)=>{r||(r=!0,r=setTimeout((()=>{e(...a),r=!1}),t))}},e.timeDistance=e=>{let t=Math.round((Date.now()-e.getTime())/1e3);if(0==t)return"此刻";let r=["年","个月","星期","天","小时","分钟","秒"],a=[31536e3,2592e3,604800,86400,3600,60,1];for(let e=0;e<a.length;e++){let o=Math.floor(t/a[e]);if(0!=o)return o+r[e]+"前"}},e.unescapeHTML=e=>e.replace(/(&amp;|&lt;|&gt;|&#39;|&quot;)/g,(e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'}[e]||e))),e.urlParam=(e,t=null,r=window.location.href)=>new URLSearchParams(new URL(r).search).get(e)||t,e.version="1.2.0",e.weekDayChinese=e=>["周日","周一","周二","周三","周四","周五","周六"][e.getDay()],e.weekDayEnglish=e=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],Object.defineProperty(e,"__esModule",{value:!0})}));
