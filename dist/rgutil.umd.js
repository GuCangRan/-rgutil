!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).$R={})}(this,(function(e){"use strict";let t=[];let r=[];const o=(e,t=null,r="parent_id")=>e.filter((e=>e[r]===t)).map((t=>({...t,children:o(e,t.id)}))),n=(e=0,t=0)=>parseInt(Math.random()*(t-e+1)+e,10),a={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){e=String(e);let t,r,o,n,i,l,s,c="",d=0;for(e=a._utf8_encode(e);d<e.length;)t=e.charCodeAt(d++),r=e.charCodeAt(d++),o=e.charCodeAt(d++),n=t>>2,i=(3&t)<<4|r>>4,l=(15&r)<<2|o>>6,s=63&o,isNaN(r)?l=s=64:isNaN(o)&&(s=64),c=c+a._keyStr.charAt(n)+a._keyStr.charAt(i)+a._keyStr.charAt(l)+a._keyStr.charAt(s);return c},decode:function(e){let t,r,o,n,i,l,s,c="",d=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");d<e.length;)n=a._keyStr.indexOf(e.charAt(d++)),i=a._keyStr.indexOf(e.charAt(d++)),l=a._keyStr.indexOf(e.charAt(d++)),s=a._keyStr.indexOf(e.charAt(d++)),t=n<<2|i>>4,r=(15&i)<<4|l>>2,o=(3&l)<<6|s,c+=String.fromCharCode(t),64!=l&&(c+=String.fromCharCode(r)),64!=s&&(c+=String.fromCharCode(o));return c=a._utf8_decode(c),c},_utf8_encode:function(e){e=e.replace(/rn/g,"n");let t="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){let t="",r=0,o=0,n=0;for(;r<e.length;)o=e.charCodeAt(r),o<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(n=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&n),r+=2):(n=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&n)<<6|63&c3),r+=3);return t}},i=a.encode,l=a.decode,s=e=>{if(e instanceof RegExp)return new RegExp(e);if(null==e||"object"!=typeof e)return e;let t="[object Array]"===Object.prototype.toString.call(e)?[]:{};for(let r in e)e.hasOwnProperty(r)&&(t[r]=s(e[r]));return t},c=(e,t,r=24)=>{let o=Date.now()+60*r*60*1e3;return o=new Date(o).toUTCString(),document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+o:"")+";path=/;",!0},d=e=>{let t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),r=document.cookie.match(t);return r?r[2]:null};e.arrAsList=e=>Array.isArray(e)?e:[e],e.arrAverage=(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,e.arrAverageBy=(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,e.arrCountOcc=(e,t)=>e.reduce(((e,r)=>r===t?e+1:e+0),0),e.arrDeepFlatten=(e,t=1/0)=>e.flat(t),e.arrDiff=(e,t)=>{const r=new Set(t);return e.filter((e=>!r.has(e)))},e.arrDistinct=e=>[...new Set(e)],e.arrIndexOfAll=(e,t)=>e.reduce(((e,r,o)=>r===t?[...e,o]:e),[]),e.arrIntersection=(e,t)=>{const r=new Set(t);return e.filter((e=>r.has(e)))},e.arrMax=e=>Math.max(...e),e.arrMin=e=>Math.min(...e),e.arrMinN=(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),e.arrNonUnique=e=>e.filter((t=>e.indexOf(t)!==e.lastIndexOf(t))),e.arrNthElement=(e,t=0)=>t>=e.length?[]:(t>0?e.slice(t,t+1):e.slice(t))[0],e.arrRandomInRange=(e,t,r=1)=>Array.from({length:r},(()=>Math.floor(Math.random()*(t-e+1))+e)),e.arrRandomN=([...e],t=1)=>{let r=e.length;for(;r;){const t=Math.floor(Math.random()*r--);[e[r],e[t]]=[e[t],e[r]]}return e.slice(0,t)},e.arrRandomSample=e=>e[Math.floor(Math.random()*e.length)],e.arrShuffle=([...e])=>{let t=e.length;for(;t;){const r=Math.floor(Math.random()*t--);[e[t],e[r]]=[e[r],e[t]]}return e},e.arrToTree=o,e.arrTranspose=e=>e[0].map(((t,r)=>e.map((e=>e[r])))),e.arrWithValues=(e,t=0)=>Array(e).fill(t),e.base64Decode=l,e.base64Encode=i,e.byteSize=e=>new Blob([e]).size,e.bytesToSize=e=>{if(0===e)return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},e.camelCase=e=>{const t=e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/[_.\- ]+/g,"-").replace(/(^-)|(-$)/g,"").split("-");let r=t[0];return t.shift(),r+t.map((e=>e.replace(/\w/,(e=>e.toUpperCase())))).join("")},e.capitalize=([e,...t])=>e.toUpperCase()+t.join(""),e.capitalizeEveryWord=e=>e.replace(/\b[a-z]/g,(e=>e.toUpperCase())),e.dateFormat=(e,t=new Date)=>{let r=new Date(t.getTime());r.setHours(r.getHours()+8);let[o,n,a,i,l,s,c]=r.toISOString().split(/[^0-9]/).slice(0,-1),d={yyyy:o,yyy:o.substring(1,4),yy:o.substring(2,4),MM:n,M:parseInt(n),dd:a,d:parseInt(a),HH:i,H:parseInt(i),mm:l,m:parseInt(l),ss:s,s:parseInt(s),fff:c,ff:parseInt(c),f:parseInt(c)};return e.replace(/y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}/g,(e=>d[e]))},e.dayOfYear=e=>Math.floor((e-new Date(e.getFullYear(),0,0))/864e5),e.daysDiff=(e,t)=>Math.ceil(Math.abs(e-t)/864e5),e.daysInMonth=(e,t)=>new Date(e,t,0).getDate(),e.debounce=(e,t)=>{let r=null;return(...o)=>{clearTimeout(r),r=setTimeout((()=>{e(...o)}),t)}},e.decapitalize=([e,...t])=>e.toLowerCase()+t.join(""),e.decapitalizeEveryWord=e=>e.replace(/\b[A-Z]/g,(e=>e.toLowerCase())),e.deepClone=s,e.delCookie=e=>!!d(e)&&c(e,"",-1),e.escapeHTML=e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),e.formatNumber=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\d{${t}})+(?!\\d))`,"g");return e.toString().replace(o,r)},e.formatPhone=(e,t="****")=>(e+"").replace(/(\d{3})\d{1,}(\d{4})/,`$1${t}$2`),e.formatString=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\w{${t}})+(?!\\w))`,"g");return e.replace(o,r)},e.getCookie=d,e.getLocalStorage=e=>localStorage.getItem(e),e.getSelectedText=()=>window.getSelection().toString(),e.getUUID=(e="-")=>{let t=[],r="0123456789abcdef";for(let e=0;e<36;e++)t[e]=r.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=r.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]=e,t.join("")},e.goToTop=(e=!1)=>{if(e)return window.scrollTo(0,0),!0;const t=document.documentElement.scrollTop||document.body.scrollTop;return t>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,t-t/8)),!0},e.goToTopClassName=e=>{let t=document.getElementsByClassName(e);if(!t[0])throw`未能找到class为 ${e} 的节点,请确认`;t[0].scrollTo(0,0)},e.goToTopId=e=>{let t=document.getElementById(e);if(!t)throw`未能找到id为 ${ID} 的节点,请确认`;t.scrollTo(0,0)},e.hyphenate=e=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),e.is=(e,t)=>![,null].includes(t)&&t.constructor===e,e.isArray=e=>Array.isArray(e),e.isAscii=e=>/^[\x00-\x7F]+$/.test(e),e.isBrowser=()=>![typeof window,typeof document].includes("undefined"),e.isChineseName=e=>/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(e),e.isDate=e=>"[object Date]"===Object.prototype.toString.call(e),e.isEmail=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e),e.isEnglishName=e=>/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(e),e.isFunction=e=>["[object Function]","[object GeneratorFunction]","[object AsyncFunction]","[object Promise]"].includes(Object.prototype.toString.call(e)),e.isHTMLTag=e=>(0==t.length&&(t="html,body,base,head,link,meta,style,title, \n        address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section, \n        div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul, \n        a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby, \n        s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video, \n        embed,object,param,source,canvas,script,noscript,del,ins, \n        caption,col,colgroup,table,thead,tbody,td,th,tr, \n        button,datalist,fieldset,form,input,label,legend,meter,optgroup,option, \n        output,progress,select,textarea, \n        details,dialog,menu,menuitem,summary, \n        content,element,shadow,template,blockquote,iframe,tfoot".replace(/\s+/g,"").split(",")),t.includes(e.trim())),e.isHasWhitespace=e=>/\s/.test(e),e.isHexColor=e=>/^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e),e.isHexadecimal=e=>/^[A-F0-9]+$/i.test(e),e.isInteger=e=>/^(-|\+)?\d+$/.test(e),e.isNegativeNum=e=>/^-[1-9]\d*$/.test(e),e.isNil=e=>null==e,e.isNull=e=>null===e,e.isNumber=e=>!isNaN(parseFloat(e))&&isFinite(e),e.isObject=e=>null!==e&&"object"==typeof e,e.isPhone=e=>/^1[3456789]\d{9}$/.test(e),e.isPlainObject=e=>!!e&&"object"==typeof e&&(null===e.__proto__||e.__proto__===Object.prototype),e.isPositiveNum=e=>/^[1-9]\d*$/.test(e),e.isPrime=e=>e>1&&Array(Math.floor(Math.sqrt(e))-1).fill(0).map(((e,t)=>t+2)).every((t=>e%t!=0)),e.isRegExp=e=>"[object RegExp]"===Object.prototype.toString.call(e),e.isString=e=>"[object String]"===Object.prototype.toString.call(e),e.isSubnetMask=e=>/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(e),e.isSvgTag=e=>(0==r.length&&(r="svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face, \n        foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern, \n        polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view".replace(/\s+/g,"").split(",")),r.includes(e.trim())),e.isWeChat=e=>/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(e),e.md5=function(e){function t(e,t){return e<<t|e>>>32-t}function r(e,t){var r,o,n,a,i;return n=2147483648&e,a=2147483648&t,i=(1073741823&e)+(1073741823&t),(r=1073741824&e)&(o=1073741824&t)?2147483648^i^n^a:r|o?1073741824&i?3221225472^i^n^a:1073741824^i^n^a:i^n^a}function o(e,o,n,a,i,l,s){return e=r(e,r(r(function(e,t,r){return e&t|~e&r}(o,n,a),i),s)),r(t(e,l),o)}function n(e,o,n,a,i,l,s){return e=r(e,r(r(function(e,t,r){return e&r|t&~r}(o,n,a),i),s)),r(t(e,l),o)}function a(e,o,n,a,i,l,s){return e=r(e,r(r(function(e,t,r){return e^t^r}(o,n,a),i),s)),r(t(e,l),o)}function i(e,o,n,a,i,l,s){return e=r(e,r(r(function(e,t,r){return t^(e|~r)}(o,n,a),i),s)),r(t(e,l),o)}function l(e){var t,r="",o="";for(t=0;t<=3;t++)r+=(o="0"+(e>>>8*t&255).toString(16)).substr(o.length-2,2);return r}var s,c,d,u,g,f,p,h,m,y=Array();for(y=function(e){for(var t,r=e.length,o=r+8,n=16*((o-o%64)/64+1),a=Array(n-1),i=0,l=0;l<r;)i=l%4*8,a[t=(l-l%4)/4]=a[t]|e.charCodeAt(l)<<i,l++;return i=l%4*8,a[t=(l-l%4)/4]=a[t]|128<<i,a[n-2]=r<<3,a[n-1]=r>>>29,a}(e=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t}(e)),f=1732584193,p=4023233417,h=2562383102,m=271733878,s=0;s<y.length;s+=16)c=f,d=p,u=h,g=m,f=o(f,p,h,m,y[s+0],7,3614090360),m=o(m,f,p,h,y[s+1],12,3905402710),h=o(h,m,f,p,y[s+2],17,606105819),p=o(p,h,m,f,y[s+3],22,3250441966),f=o(f,p,h,m,y[s+4],7,4118548399),m=o(m,f,p,h,y[s+5],12,1200080426),h=o(h,m,f,p,y[s+6],17,2821735955),p=o(p,h,m,f,y[s+7],22,4249261313),f=o(f,p,h,m,y[s+8],7,1770035416),m=o(m,f,p,h,y[s+9],12,2336552879),h=o(h,m,f,p,y[s+10],17,4294925233),p=o(p,h,m,f,y[s+11],22,2304563134),f=o(f,p,h,m,y[s+12],7,1804603682),m=o(m,f,p,h,y[s+13],12,4254626195),h=o(h,m,f,p,y[s+14],17,2792965006),f=n(f,p=o(p,h,m,f,y[s+15],22,1236535329),h,m,y[s+1],5,4129170786),m=n(m,f,p,h,y[s+6],9,3225465664),h=n(h,m,f,p,y[s+11],14,643717713),p=n(p,h,m,f,y[s+0],20,3921069994),f=n(f,p,h,m,y[s+5],5,3593408605),m=n(m,f,p,h,y[s+10],9,38016083),h=n(h,m,f,p,y[s+15],14,3634488961),p=n(p,h,m,f,y[s+4],20,3889429448),f=n(f,p,h,m,y[s+9],5,568446438),m=n(m,f,p,h,y[s+14],9,3275163606),h=n(h,m,f,p,y[s+3],14,4107603335),p=n(p,h,m,f,y[s+8],20,1163531501),f=n(f,p,h,m,y[s+13],5,2850285829),m=n(m,f,p,h,y[s+2],9,4243563512),h=n(h,m,f,p,y[s+7],14,1735328473),f=a(f,p=n(p,h,m,f,y[s+12],20,2368359562),h,m,y[s+5],4,4294588738),m=a(m,f,p,h,y[s+8],11,2272392833),h=a(h,m,f,p,y[s+11],16,1839030562),p=a(p,h,m,f,y[s+14],23,4259657740),f=a(f,p,h,m,y[s+1],4,2763975236),m=a(m,f,p,h,y[s+4],11,1272893353),h=a(h,m,f,p,y[s+7],16,4139469664),p=a(p,h,m,f,y[s+10],23,3200236656),f=a(f,p,h,m,y[s+13],4,681279174),m=a(m,f,p,h,y[s+0],11,3936430074),h=a(h,m,f,p,y[s+3],16,3572445317),p=a(p,h,m,f,y[s+6],23,76029189),f=a(f,p,h,m,y[s+9],4,3654602809),m=a(m,f,p,h,y[s+12],11,3873151461),h=a(h,m,f,p,y[s+15],16,530742520),f=i(f,p=a(p,h,m,f,y[s+2],23,3299628645),h,m,y[s+0],6,4096336452),m=i(m,f,p,h,y[s+7],10,1126891415),h=i(h,m,f,p,y[s+14],15,2878612391),p=i(p,h,m,f,y[s+5],21,4237533241),f=i(f,p,h,m,y[s+12],6,1700485571),m=i(m,f,p,h,y[s+3],10,2399980690),h=i(h,m,f,p,y[s+10],15,4293915773),p=i(p,h,m,f,y[s+1],21,2240044497),f=i(f,p,h,m,y[s+8],6,1873313359),m=i(m,f,p,h,y[s+15],10,4264355552),h=i(h,m,f,p,y[s+6],15,2734768916),p=i(p,h,m,f,y[s+13],21,1309151649),f=i(f,p,h,m,y[s+4],6,4149444226),m=i(m,f,p,h,y[s+11],10,3174756917),h=i(h,m,f,p,y[s+2],15,718787259),p=i(p,h,m,f,y[s+9],21,3951481745),f=r(f,c),p=r(p,d),h=r(h,u),m=r(m,g);return(l(f)+l(p)+l(h)+l(m)).toLowerCase()},e.monthDiff=(e,t)=>Math.max(0,12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()),e.monthNameChinese=(e,t=!0)=>t?["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"][e.getMonth()]:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"][e.getMonth()],e.monthNameEnglish=e=>["January","February","March","April","May","June","July","August","September","October"," November","December"][e.getMonth()],e.objType=e=>Object.prototype.toString.call(e).slice(8,-1),e.randomCode=(e=4)=>{let t="",r=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(;e--;)t+=r[n(0,r.length)];return t},e.randomIP=()=>Array(4).fill(0).map(((e,t)=>Math.floor(255*Math.random())+(0===t?1:0))).join("."),e.randomNum=n,e.removeHTMLTags=e=>e.replace(/<[^>]*>/g,""),e.setCookie=c,e.setLocalStorage=(e,t)=>("object"==typeof t&&(t=JSON.stringify(t)),localStorage.setItem(e,t),!0),e.splitLines=e=>e.split(/\r?\n/),e.splitPath=(e="")=>{const t=e.match(/^([\s\S]*?)((?:\.{1,2}|[^\\/]+?|)(\.[^./\\]*|))(?:[\\/]*)$/);return{dir:t[1],name:t[2],ext:t[3]}},e.throttle=(e,t=100)=>{let r=!1;return(...o)=>{r||(r=!0,r=setTimeout((()=>{e(...o),r=!1}),t))}},e.urlParam=(e,t=null,r=window.location.href)=>new URLSearchParams(new URL(r).search).get(e)||t,e.version="1.0.9",e.weekDayChinese=e=>["周日","周一","周二","周三","周四","周五","周六"][e.getDay()],e.weekDayEnglish=e=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],Object.defineProperty(e,"__esModule",{value:!0})}));
