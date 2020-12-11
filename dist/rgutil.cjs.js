"use strict";Object.defineProperty(exports,"__esModule",{value:!0});let e=[];let t=[];const r=(e,t=null,o="parent_id")=>e.filter((e=>e[o]===t)).map((t=>({...t,children:r(e,t.id)}))),o=(e=0,t=0)=>parseInt(Math.random()*(t-e+1)+e,10),a={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){e=String(e);let t,r,o,n,s,i,l,p="",u=0;for(e=a._utf8_encode(e);u<e.length;)t=e.charCodeAt(u++),r=e.charCodeAt(u++),o=e.charCodeAt(u++),n=t>>2,s=(3&t)<<4|r>>4,i=(15&r)<<2|o>>6,l=63&o,isNaN(r)?i=l=64:isNaN(o)&&(l=64),p=p+a._keyStr.charAt(n)+a._keyStr.charAt(s)+a._keyStr.charAt(i)+a._keyStr.charAt(l);return p},decode:function(e){let t,r,o,n,s,i,l,p="",u=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");u<e.length;)n=a._keyStr.indexOf(e.charAt(u++)),s=a._keyStr.indexOf(e.charAt(u++)),i=a._keyStr.indexOf(e.charAt(u++)),l=a._keyStr.indexOf(e.charAt(u++)),t=n<<2|s>>4,r=(15&s)<<4|i>>2,o=(3&i)<<6|l,p+=String.fromCharCode(t),64!=i&&(p+=String.fromCharCode(r)),64!=l&&(p+=String.fromCharCode(o));return p=a._utf8_decode(p),p},_utf8_encode:function(e){e=e.replace(/rn/g,"n");let t="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){let t="",r=0,o=0,a=0;for(;r<e.length;)o=e.charCodeAt(r),o<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(a=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&a),r+=2):(a=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&a)<<6|63&c3),r+=3);return t}},n=a.encode,s=a.decode,i=(e,t=new WeakMap)=>{if(e instanceof RegExp)return new RegExp(e);if(e instanceof Date)return new Date(e);if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);let r=new e.constructor;t.set(e,r);for(let o in e)e.hasOwnProperty(o)&&(r[o]=i(e[o],t));return r},l=(e,t,r=24)=>{let o=Date.now()+60*r*60*1e3;return o=new Date(o).toUTCString(),document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+o:"")+";path=/;",!0},p=e=>{let t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),r=document.cookie.match(t);return r?r[2]:null};exports.arrAsList=e=>Array.isArray(e)?e:[e],exports.arrAverage=(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,exports.arrAverageBy=(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,exports.arrCountOcc=(e,t)=>e.reduce(((e,r)=>r===t?e+1:e+0),0),exports.arrDeepFlatten=(e,t=1/0)=>e.flat(t),exports.arrDiff=(e,t)=>{const r=new Set(t);return e.filter((e=>!r.has(e)))},exports.arrDistinct=e=>[...new Set(e)],exports.arrIndexOfAll=(e,t)=>e.reduce(((e,r,o)=>r===t?[...e,o]:e),[]),exports.arrIntersection=(e,t)=>{const r=new Set(t);return e.filter((e=>r.has(e)))},exports.arrMax=e=>Math.max(...e),exports.arrMin=e=>Math.min(...e),exports.arrMinN=(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),exports.arrNonUnique=e=>e.filter((t=>e.indexOf(t)!==e.lastIndexOf(t))),exports.arrNthElement=(e,t=0)=>t>=e.length?[]:(t>0?e.slice(t,t+1):e.slice(t))[0],exports.arrRandomInRange=(e,t,r=1)=>Array.from({length:r},(()=>Math.floor(Math.random()*(t-e+1))+e)),exports.arrRandomN=([...e],t=1)=>{let r=e.length;for(;r;){const t=Math.floor(Math.random()*r--);[e[r],e[t]]=[e[t],e[r]]}return e.slice(0,t)},exports.arrRandomSample=e=>e[Math.floor(Math.random()*e.length)],exports.arrShuffle=([...e])=>{let t=e.length;for(;t;){const r=Math.floor(Math.random()*t--);[e[t],e[r]]=[e[r],e[t]]}return e},exports.arrToTree=r,exports.arrTranspose=e=>e[0].map(((t,r)=>e.map((e=>e[r])))),exports.arrWithValues=(e,t=0)=>Array(e).fill(t),exports.base64Decode=s,exports.base64Encode=n,exports.byteSize=e=>new Blob([e]).size,exports.bytesToSize=e=>{if(0===e)return"0 B";let t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},exports.camelCase=e=>{const t=e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/[_.\- ]+/g,"-").replace(/(^-)|(-$)/g,"").split("-");let r=t[0];return t.shift(),r+t.map((e=>e.replace(/\w/,(e=>e.toUpperCase())))).join("")},exports.capitalize=([e,...t])=>e.toUpperCase()+t.join(""),exports.capitalizeEveryWord=e=>e.replace(/\b[a-z]/g,(e=>e.toUpperCase())),exports.characterCount=(e="",t="")=>e.split(t).length-1,exports.dateFormat=(e,t=new Date)=>{let r=new Date(t.getTime());r.setHours(r.getHours()+8);let[o,a,n,s,i,l,p]=r.toISOString().split(/[^0-9]/).slice(0,-1),u={yyyy:o,yyy:o.substring(1,4),yy:o.substring(2,4),MM:a,M:parseInt(a),dd:n,d:parseInt(n),HH:s,H:parseInt(s),mm:i,m:parseInt(i),ss:l,s:parseInt(l),fff:p,ff:parseInt(p),f:parseInt(p)};return e.replace(/y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}/g,(e=>u[e]))},exports.dayOfYear=e=>Math.floor((e-new Date(e.getFullYear(),0,0))/864e5),exports.daysDiff=(e,t)=>Math.ceil(Math.abs(e-t)/864e5),exports.daysInMonth=(e,t)=>new Date(e,t,0).getDate(),exports.debounce=(e,t)=>{let r=null;return(...o)=>{clearTimeout(r),r=setTimeout((()=>{e(...o)}),t)}},exports.decapitalize=([e,...t])=>e.toLowerCase()+t.join(""),exports.decapitalizeEveryWord=e=>e.replace(/\b[A-Z]/g,(e=>e.toLowerCase())),exports.deepClone=i,exports.delCookie=e=>!!p(e)&&l(e,"",-1),exports.digitUpperCase=(e=0)=>{let t=["角","分"],r=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],o=[["元","万","亿"],["","拾","佰","仟"]],a=e<0?"欠":"";e=Math.abs(e);let n="";for(let o=0;o<t.length;o++)n+=(r[Math.floor(10*e*Math.pow(10,o))%10]+t[o]).replace(/零./,"");n=n||"整",e=Math.floor(e);for(let t=0;t<o[0].length&&e>0;t++){let a="";for(let t=0;t<o[1].length&&e>0;t++)a=r[e%10]+o[1][t]+a,e=Math.floor(e/10);n=a.replace(/(零.)*零$/,"").replace(/^$/,"零")+o[0][t]+n}return a+n.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},exports.escapeHTML=e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),exports.formatNumber=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\d{${t}})+(?!\\d))`,"g");return e.toString().replace(o,r)},exports.formatPath=e=>e.replace(/[\\/]+/g,"/"),exports.formatString=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\w{${t}})+(?!\\w))`,"g");return e.replace(o,r)},exports.getCookie=p,exports.getLocalStorage=e=>localStorage.getItem(e),exports.getSelectedText=()=>window.getSelection().toString(),exports.getUUID=(e="-")=>{let t=[],r="0123456789abcdef";for(let e=0;e<36;e++)t[e]=r.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=r.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]=e,t.join("")},exports.goToTop=(e=!1)=>{if(e)return window.scrollTo(0,0),!0;const t=document.documentElement.scrollTop||document.body.scrollTop;return t>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,t-t/8)),!0},exports.goToTopClassName=e=>{let t=document.getElementsByClassName(e);if(!t[0])throw`未能找到class为 ${e} 的节点,请确认`;t[0].scrollTo(0,0)},exports.goToTopId=e=>{let t=document.getElementById(e);if(!t)throw`未能找到id为 ${ID} 的节点,请确认`;t.scrollTo(0,0)},exports.hyphenate=e=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),exports.is=(e,t)=>![,null].includes(t)&&t.constructor===e,exports.isArray=e=>Array.isArray(e),exports.isAscii=e=>/^[\x00-\x7F]+$/.test(e),exports.isBrowser=()=>![typeof window,typeof document].includes("undefined"),exports.isChineseName=e=>/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(e),exports.isDate=e=>"[object Date]"===Object.prototype.toString.call(e),exports.isEmail=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e),exports.isEmoji=e=>/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\ufe0f|\u200d|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(e),exports.isEnglishName=e=>/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(e),exports.isFloat=e=>/^-?([1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0)$/.test(e),exports.isFunction=e=>["[object Function]","[object GeneratorFunction]","[object AsyncFunction]","[object Promise]"].includes(Object.prototype.toString.call(e)),exports.isHTMLTag=t=>(0==e.length&&(e="html,body,base,head,link,meta,style,title, \n        address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section, \n        div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul, \n        a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby, \n        s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video, \n        embed,object,param,source,canvas,script,noscript,del,ins, \n        caption,col,colgroup,table,thead,tbody,td,th,tr, \n        button,datalist,fieldset,form,input,label,legend,meter,optgroup,option, \n        output,progress,select,textarea, \n        details,dialog,menu,menuitem,summary, \n        content,element,shadow,template,blockquote,iframe,tfoot".replace(/\s+/g,"").split(",")),e.includes(t)),exports.isHasWhitespace=e=>/\s/.test(e),exports.isHexColor=e=>/^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e),exports.isHexadecimal=e=>/^[A-F0-9]+$/i.test(e),exports.isIPV4=e=>/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e),exports.isInteger=e=>/^(-|\+)?\d+$/.test(e),exports.isLicensePlate=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(?:(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/.test(e),exports.isMacAddress=e=>/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(e),exports.isNegativeFloat=e=>/^-([1-9]\d*.\d*|0.\d*[1-9]\d*)$/.test(e),exports.isNegativeNum=e=>/^-[1-9]\d*$/.test(e),exports.isNil=e=>null==e,exports.isNull=e=>null===e,exports.isNumber=e=>!isNaN(parseFloat(e))&&isFinite(e),exports.isObject=e=>null!==e&&"object"==typeof e,exports.isPhone=e=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e),exports.isPlainObject=e=>!!e&&"object"==typeof e&&(null===e.__proto__||e.__proto__===Object.prototype),exports.isPositiveNum=e=>/^[1-9]\d*$/.test(e),exports.isPostiveFloat=e=>/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/.test(e),exports.isPrime=e=>e>1&&Array(Math.floor(Math.sqrt(e))-1).fill(0).map(((e,t)=>t+2)).every((t=>e%t!=0)),exports.isPwdStrength=e=>/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(e),exports.isRegExp=e=>"[object RegExp]"===Object.prototype.toString.call(e),exports.isString=e=>"[object String]"===Object.prototype.toString.call(e),exports.isSubnetMask=e=>/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(e),exports.isSvgTag=e=>(0==t.length&&(t="svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face, \n        foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern, \n        polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view".replace(/\s+/g,"").split(",")),t.includes(e)),exports.isWeChat=e=>/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(e),exports.md5=function(e){function t(e,t){return e<<t|e>>>32-t}function r(e,t){let r,o,a,n,s;return a=2147483648&e,n=2147483648&t,r=1073741824&e,o=1073741824&t,s=(1073741823&e)+(1073741823&t),r&o?2147483648^s^a^n:r|o?1073741824&s?3221225472^s^a^n:1073741824^s^a^n:s^a^n}function o(e,o,a,n,s,i,l){return e=r(e,r(r(function(e,t,r){return e&t|~e&r}(o,a,n),s),l)),r(t(e,i),o)}function a(e,o,a,n,s,i,l){return e=r(e,r(r(function(e,t,r){return e&r|t&~r}(o,a,n),s),l)),r(t(e,i),o)}function n(e,o,a,n,s,i,l){return e=r(e,r(r(function(e,t,r){return e^t^r}(o,a,n),s),l)),r(t(e,i),o)}function s(e,o,a,n,s,i,l){return e=r(e,r(r(function(e,t,r){return t^(e|~r)}(o,a,n),s),l)),r(t(e,i),o)}function i(e){let t,r,o="",a="";for(r=0;r<=3;r++)t=e>>>8*r&255,a="0"+t.toString(16),o+=a.substr(a.length-2,2);return o}let l,p,u,d,c,f,h,g,x,m=Array();for(m=function(e){let t,r=e.length,o=r+8,a=16*((o-o%64)/64+1),n=Array(a-1),s=0,i=0;for(;i<r;)t=(i-i%4)/4,s=i%4*8,n[t]=n[t]|e.charCodeAt(i)<<s,i++;return t=(i-i%4)/4,s=i%4*8,n[t]=n[t]|128<<s,n[a-2]=r<<3,n[a-1]=r>>>29,n}(e=function(e){e=e.replace(/\r\n/g,"\n");let t="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t}(e)),f=1732584193,h=4023233417,g=2562383102,x=271733878,l=0;l<m.length;l+=16)p=f,u=h,d=g,c=x,f=o(f,h,g,x,m[l+0],7,3614090360),x=o(x,f,h,g,m[l+1],12,3905402710),g=o(g,x,f,h,m[l+2],17,606105819),h=o(h,g,x,f,m[l+3],22,3250441966),f=o(f,h,g,x,m[l+4],7,4118548399),x=o(x,f,h,g,m[l+5],12,1200080426),g=o(g,x,f,h,m[l+6],17,2821735955),h=o(h,g,x,f,m[l+7],22,4249261313),f=o(f,h,g,x,m[l+8],7,1770035416),x=o(x,f,h,g,m[l+9],12,2336552879),g=o(g,x,f,h,m[l+10],17,4294925233),h=o(h,g,x,f,m[l+11],22,2304563134),f=o(f,h,g,x,m[l+12],7,1804603682),x=o(x,f,h,g,m[l+13],12,4254626195),g=o(g,x,f,h,m[l+14],17,2792965006),h=o(h,g,x,f,m[l+15],22,1236535329),f=a(f,h,g,x,m[l+1],5,4129170786),x=a(x,f,h,g,m[l+6],9,3225465664),g=a(g,x,f,h,m[l+11],14,643717713),h=a(h,g,x,f,m[l+0],20,3921069994),f=a(f,h,g,x,m[l+5],5,3593408605),x=a(x,f,h,g,m[l+10],9,38016083),g=a(g,x,f,h,m[l+15],14,3634488961),h=a(h,g,x,f,m[l+4],20,3889429448),f=a(f,h,g,x,m[l+9],5,568446438),x=a(x,f,h,g,m[l+14],9,3275163606),g=a(g,x,f,h,m[l+3],14,4107603335),h=a(h,g,x,f,m[l+8],20,1163531501),f=a(f,h,g,x,m[l+13],5,2850285829),x=a(x,f,h,g,m[l+2],9,4243563512),g=a(g,x,f,h,m[l+7],14,1735328473),h=a(h,g,x,f,m[l+12],20,2368359562),f=n(f,h,g,x,m[l+5],4,4294588738),x=n(x,f,h,g,m[l+8],11,2272392833),g=n(g,x,f,h,m[l+11],16,1839030562),h=n(h,g,x,f,m[l+14],23,4259657740),f=n(f,h,g,x,m[l+1],4,2763975236),x=n(x,f,h,g,m[l+4],11,1272893353),g=n(g,x,f,h,m[l+7],16,4139469664),h=n(h,g,x,f,m[l+10],23,3200236656),f=n(f,h,g,x,m[l+13],4,681279174),x=n(x,f,h,g,m[l+0],11,3936430074),g=n(g,x,f,h,m[l+3],16,3572445317),h=n(h,g,x,f,m[l+6],23,76029189),f=n(f,h,g,x,m[l+9],4,3654602809),x=n(x,f,h,g,m[l+12],11,3873151461),g=n(g,x,f,h,m[l+15],16,530742520),h=n(h,g,x,f,m[l+2],23,3299628645),f=s(f,h,g,x,m[l+0],6,4096336452),x=s(x,f,h,g,m[l+7],10,1126891415),g=s(g,x,f,h,m[l+14],15,2878612391),h=s(h,g,x,f,m[l+5],21,4237533241),f=s(f,h,g,x,m[l+12],6,1700485571),x=s(x,f,h,g,m[l+3],10,2399980690),g=s(g,x,f,h,m[l+10],15,4293915773),h=s(h,g,x,f,m[l+1],21,2240044497),f=s(f,h,g,x,m[l+8],6,1873313359),x=s(x,f,h,g,m[l+15],10,4264355552),g=s(g,x,f,h,m[l+6],15,2734768916),h=s(h,g,x,f,m[l+13],21,1309151649),f=s(f,h,g,x,m[l+4],6,4149444226),x=s(x,f,h,g,m[l+11],10,3174756917),g=s(g,x,f,h,m[l+2],15,718787259),h=s(h,g,x,f,m[l+9],21,3951481745),f=r(f,p),h=r(h,u),g=r(g,d),x=r(x,c);return(i(f)+i(h)+i(g)+i(x)).toLowerCase()},exports.monthDiff=(e,t)=>Math.max(0,12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()),exports.monthNameChinese=(e,t=!0)=>t?["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"][e.getMonth()]:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"][e.getMonth()],exports.monthNameEnglish=(e,t=!1)=>t?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]:["January","February","March","April","May","June","July","August","September","October"," November","December"][e.getMonth()],exports.objType=e=>Object.prototype.toString.call(e).slice(8,-1),exports.privacyName=(e,t="**")=>e.replace(/^(\S)(\S|\s)*$/,`$1${t}`),exports.privacyPhone=(e,t="****")=>(e+"").replace(/(\d{3})\d{1,}(\d{4})/,`$1${t}$2`),exports.randomBoolean=()=>Math.random()>=.5,exports.randomCode=(e=4)=>{let t="",r=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(;e--;)t+=r[o(0,r.length-1)];return t},exports.randomFloat=(e=0,t=1)=>Math.random()*(t-e)+e,exports.randomHexColor=()=>"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6),exports.randomIP=()=>Array(4).fill(0).map(((e,t)=>Math.floor(255*Math.random())+(0===t?1:0))).join("."),exports.randomNum=o,exports.removeHTMLTags=e=>e.replace(/<[^>]*>/g,""),exports.setCookie=l,exports.setLocalStorage=(e,t)=>("object"==typeof t&&(t=JSON.stringify(t)),localStorage.setItem(e,t),!0),exports.splitLines=e=>e.split(/\r?\n/),exports.splitPath=(e="")=>{const t=e.match(/^([\s\S]*?)((?:\.{1,2}|[^\\/]+?|)(\.[^./\\]*|))(?:[\\/]*)$/);return{dir:t[1],name:t[2],ext:t[3]}},exports.subText=(e,t=0,r="...")=>e.length>t?e.substr(0,t)+r:e,exports.throttle=(e,t=100)=>{let r=!1;return(...o)=>{r||(r=!0,r=setTimeout((()=>{e(...o),r=!1}),t))}},exports.urlParam=(e,t=null,r=window.location.href)=>new URLSearchParams(new URL(r).search).get(e)||t,exports.version="1.1.3",exports.weekDayChinese=e=>["周日","周一","周二","周三","周四","周五","周六"][e.getDay()],exports.weekDayEnglish=e=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];
