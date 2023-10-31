'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var o = require('react');
var antd = require('antd');
var icons = require('@ant-design/icons');
var useLocalStorageState = require('use-local-storage-state');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var o__default = /*#__PURE__*/_interopDefaultLegacy(o);
var useLocalStorageState__default = /*#__PURE__*/_interopDefaultLegacy(useLocalStorageState);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var e="-ms-";var r="-moz-";var a="-webkit-";var n="comm";var c="rule";var s="decl";var i="@import";var h="@keyframes";var g="@layer";var k$1=Math.abs;var $$1=String.fromCharCode;var m=Object.assign;function x$1(e,r){return O$1(e,0)^45?(((r<<2^O$1(e,0))<<2^O$1(e,1))<<2^O$1(e,2))<<2^O$1(e,3):0}function y$1(e){return e.trim()}function j$1(e,r){return (e=r.exec(e))?e[0]:e}function z$1(e,r,a){return e.replace(r,a)}function C$1(e,r){return e.indexOf(r)}function O$1(e,r){return e.charCodeAt(r)|0}function A$1(e,r,a){return e.slice(r,a)}function M$1(e){return e.length}function S$1(e){return e.length}function q$1(e,r){return r.push(e),e}function B$1(e,r){return e.map(r).join("")}function D$1(e,r){return e.filter((function(e){return !j$1(e,r)}))}var E$1=1;var F$1=1;var G$1=0;var H$1=0;var I$1=0;var J$1="";function K$1(e,r,a,n,c,s,t,u){return {value:e,root:r,parent:a,type:n,props:c,children:s,line:E$1,column:F$1,length:t,return:"",siblings:u}}function L$1(e,r){return m(K$1("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function N$1(e){while(e.root)e=L$1(e.root,{children:[e]});q$1(e,e.siblings);}function P$1(){return I$1}function Q$1(){I$1=H$1>0?O$1(J$1,--H$1):0;if(F$1--,I$1===10)F$1=1,E$1--;return I$1}function R$1(){I$1=H$1<G$1?O$1(J$1,H$1++):0;if(F$1++,I$1===10)F$1=1,E$1++;return I$1}function T$1(){return O$1(J$1,H$1)}function U$1(){return H$1}function V$1(e,r){return A$1(J$1,e,r)}function W$1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X$1(e){return E$1=F$1=1,G$1=M$1(J$1=e),H$1=0,[]}function Y$1(e){return J$1="",e}function Z$1(e){return y$1(V$1(H$1-1,ne$1(e===91?e+2:e===40?e+1:e)))}function ee$1(e){while(I$1=T$1())if(I$1<33)R$1();else break;return W$1(e)>2||W$1(I$1)>3?"":" "}function ae$1(e,r){while(--r&&R$1())if(I$1<48||I$1>102||I$1>57&&I$1<65||I$1>70&&I$1<97)break;return V$1(e,U$1()+(r<6&&T$1()==32&&R$1()==32))}function ne$1(e){while(R$1())switch(I$1){case e:return H$1;case 34:case 39:if(e!==34&&e!==39)ne$1(I$1);break;case 40:if(e===41)ne$1(e);break;case 92:R$1();break}return H$1}function ce$1(e,r){while(R$1())if(e+I$1===47+10)break;else if(e+I$1===42+42&&T$1()===47)break;return "/*"+V$1(r,H$1-1)+"*"+$$1(e===47?e:R$1())}function se$1(e){while(!W$1(T$1()))R$1();return V$1(e,H$1)}function te$1(e){return Y$1(ue$1("",null,null,null,[""],e=X$1(e),0,[0],e))}function ue$1(e,r,a,n,c,s,t,u,i){var f=0;var o=0;var l=t;var v=0;var p=0;var h=0;var b=1;var w=1;var d=1;var g=0;var k="";var m=c;var x=s;var y=n;var j=k;while(w)switch(h=g,g=R$1()){case 40:if(h!=108&&O$1(j,l-1)==58){if(C$1(j+=z$1(Z$1(g),"&","&\f"),"&\f")!=-1)d=-1;break}case 34:case 39:case 91:j+=Z$1(g);break;case 9:case 10:case 13:case 32:j+=ee$1(h);break;case 92:j+=ae$1(U$1()-1,7);continue;case 47:switch(T$1()){case 42:case 47:q$1(fe$1(ce$1(R$1(),U$1()),r,a,i),i);break;default:j+="/";}break;case 123*b:u[f++]=M$1(j)*d;case 125*b:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+o:if(d==-1)j=z$1(j,/\f/g,"");if(p>0&&M$1(j)-l)q$1(p>32?oe$1(j+";",n,a,l-1,i):oe$1(z$1(j," ","")+";",n,a,l-2,i),i);break;case 59:j+=";";default:q$1(y=ie$1(j,r,a,f,o,c,u,k,m=[],x=[],l,s),s);if(g===123)if(o===0)ue$1(j,r,y,y,m,s,l,u,x);else switch(v===99&&O$1(j,3)===110?100:v){case 100:case 108:case 109:case 115:ue$1(e,y,y,n&&q$1(ie$1(e,y,y,0,0,c,u,k,c,m=[],l,x),x),c,x,l,u,n?m:x);break;default:ue$1(j,y,y,y,[""],x,0,u,x);}}f=o=p=0,b=d=1,k=j="",l=t;break;case 58:l=1+M$1(j),p=h;default:if(b<1)if(g==123)--b;else if(g==125&&b++==0&&Q$1()==125)continue;switch(j+=$$1(g),g*b){case 38:d=o>0?1:(j+="\f",-1);break;case 44:u[f++]=(M$1(j)-1)*d,d=1;break;case 64:if(T$1()===45)j+=Z$1(R$1());v=T$1(),o=l=M$1(k=j+=se$1(U$1())),g++;break;case 45:if(h===45&&M$1(j)==2)b=0;}}return s}function ie$1(e,r,a,n,s,t,u,i,f,o,l,v){var p=s-1;var h=s===0?t:[""];var b=S$1(h);for(var w=0,d=0,g=0;w<n;++w)for(var $=0,m=A$1(e,p+1,p=k$1(d=u[w])),x=e;$<b;++$)if(x=y$1(d>0?h[$]+" "+m:z$1(m,/&\f/g,h[$])))f[g++]=x;return K$1(e,r,a,s===0?c:i,f,o,l,v)}function fe$1(e,r,a,c){return K$1(e,r,a,n,$$1(P$1()),A$1(e,2,-2),0,c)}function oe$1(e,r,a,n,c){return K$1(e,r,a,s,A$1(e,0,n),A$1(e,n+1,-1),n,c)}function le$1(n,c,s){switch(x$1(n,c)){case 5103:return a+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+n+n;case 4789:return r+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return a+n+r+n+e+n+n;case 5936:switch(O$1(n,c+11)){case 114:return a+n+e+z$1(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return a+n+e+z$1(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return a+n+e+z$1(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return a+n+e+n+n;case 6165:return a+n+e+"flex-"+n+n;case 5187:return a+n+z$1(n,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+n;case 5443:return a+n+e+"flex-item-"+z$1(n,/flex-|-self/g,"")+(!j$1(n,/flex-|baseline/)?e+"grid-row-"+z$1(n,/flex-|-self/g,""):"")+n;case 4675:return a+n+e+"flex-line-pack"+z$1(n,/align-content|flex-|-self/g,"")+n;case 5548:return a+n+e+z$1(n,"shrink","negative")+n;case 5292:return a+n+e+z$1(n,"basis","preferred-size")+n;case 6060:return a+"box-"+z$1(n,"-grow","")+a+n+e+z$1(n,"grow","positive")+n;case 4554:return a+z$1(n,/([^-])(transform)/g,"$1"+a+"$2")+n;case 6187:return z$1(z$1(z$1(n,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),n,"")+n;case 5495:case 3959:return z$1(n,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return z$1(z$1(n,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+n+n;case 4200:if(!j$1(n,/flex-|baseline/))return e+"grid-column-align"+A$1(n,c)+n;break;case 2592:case 3360:return e+z$1(n,"template-","")+n;case 4384:case 3616:if(s&&s.some((function(e,r){return c=r,j$1(e.props,/grid-\w+-end/)}))){return ~C$1(n+(s=s[c].value),"span")?n:e+z$1(n,"-start","")+n+e+"grid-row-span:"+(~C$1(s,"span")?j$1(s,/\d+/):+j$1(s,/\d+/)-+j$1(n,/\d+/))+";"}return e+z$1(n,"-start","")+n;case 4896:case 4128:return s&&s.some((function(e){return j$1(e.props,/grid-\w+-start/)}))?n:e+z$1(z$1(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return z$1(n,/(.+)-inline(.+)/,a+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M$1(n)-1-c>6)switch(O$1(n,c+1)){case 109:if(O$1(n,c+4)!==45)break;case 102:return z$1(n,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(O$1(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return ~C$1(n,"stretch")?le$1(z$1(n,"stretch","fill-available"),c,s)+n:n}break;case 5152:case 5920:return z$1(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(r,a,c,s,t,u,i){return e+a+":"+c+i+(s?e+a+"-span:"+(t?u:+u-+c)+i:"")+n}));case 4949:if(O$1(n,c+6)===121)return z$1(n,":",":"+a)+n;break;case 6444:switch(O$1(n,O$1(n,14)===45?18:11)){case 120:return z$1(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+a+(O$1(n,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+n;case 100:return z$1(n,":",":"+e)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z$1(n,"scroll-","scroll-snap-")+n}return n}function ve$1(e,r){var a="";for(var n=0;n<e.length;n++)a+=r(e[n],n,e,r)||"";return a}function pe$1(e,r,a,t){switch(e.type){case g:if(e.children.length)break;case i:case s:return e.return=e.return||e.value;case n:return "";case h:return e.return=e.value+"{"+ve$1(e.children,t)+"}";case c:if(!M$1(e.value=e.props.join(",")))return ""}return M$1(a=ve$1(e.children,t))?e.return=e.value+"{"+a+"}":""}function he$1(e){var r=S$1(e);return function(a,n,c,s){var t="";for(var u=0;u<r;u++)t+=e[u](a,n,c,s)||"";return t}}function be$1(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function we$1(n,t,u,i){if(n.length>-1)if(!n.return)switch(n.type){case s:n.return=le$1(n.value,n.length,u);return;case h:return ve$1([L$1(n,{value:z$1(n.value,"@","@"+a)})],i);case c:if(n.length)return B$1(u=n.props,(function(c){switch(j$1(c,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":N$1(L$1(n,{props:[z$1(c,/:(read-\w+)/,":"+r+"$1")]}));N$1(L$1(n,{props:[c]}));m(n,{props:D$1(u,i)});break;case"::placeholder":N$1(L$1(n,{props:[z$1(c,/:(plac\w+)/,":"+a+"input-$1")]}));N$1(L$1(n,{props:[z$1(c,/:(plac\w+)/,":"+r+"$1")]}));N$1(L$1(n,{props:[z$1(c,/:(plac\w+)/,e+"input-$1")]}));N$1(L$1(n,{props:[c]}));m(n,{props:D$1(u,i)});break}return ""}))}}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var f="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",y="undefined"!=typeof window&&"HTMLElement"in window,v=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),S=/invalid hook call/i,w=new Set,b=function(t,n){if("production"!==process.env.NODE_ENV){var o$1=n?' with the id of "'.concat(n,'"'):"",s="The component ".concat(t).concat(o$1," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];S.test(t)?(a=!1,w.delete(s)):i.apply(void 0,__spreadArray([t],n,!1));},o.useRef(),a&&!w.has(s)&&(console.warn(s),w.add(s));}catch(e){S.test(e.message)&&w.delete(s);}finally{console.error=i;}}},E=Object.freeze([]),N=Object.freeze({});function P(e,t,n){return void 0===n&&(n=N),e.theme!==n.theme&&e.theme||t||n.theme}var _=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),C=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,I=/(^-|-$)/g;function A(e){return e.replace(C,"-").replace(I,"")}var O=/(a)(d)/gi,D=function(e){return String.fromCharCode(e+(e>25?39:97))};function R(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=D(t%52)+n;return (D(t%52)+n).replace(O,"$1-$2")}var T,k=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},j=function(e){return k(5381,e)};function x(e){return R(j(e)>>>0)}function V(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function F(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var M="function"==typeof Symbol&&Symbol.for,z=M?Symbol.for("react.memo"):60115,$=M?Symbol.for("react.forward_ref"):60112,B={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y=((T={})[$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},T[z]=G,T);function q(e){return ("type"in(t=e)&&t.type.$$typeof)===z?G:"$$typeof"in e?Y[e.$$typeof]:B;var t;}var W=Object.defineProperty,H=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,J=Object.getOwnPropertyDescriptor,X=Object.getPrototypeOf,Z=Object.prototype;function K(e,t,n){if("string"!=typeof t){if(Z){var o=X(t);o&&o!==Z&&K(e,o,n);}var r=H(t);U&&(r=r.concat(U(t)));for(var s=q(e),i=q(t),a=0;a<r.length;++a){var c=r[a];if(!(c in L||n&&n[c]||i&&c in i||s&&c in s)){var l=J(t,c);try{W(e,c,l);}catch(e){}}}}return e}function Q(e){return "function"==typeof e}function ee(e){return "object"==typeof e&&"styledComponentId"in e}function te(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ne(e,t){if(0===e.length)return "";for(var n=e[0],o=1;o<e.length;o++)n+=t?t+e[o]:e[o];return n}function oe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function re(e,t,n){if(void 0===n&&(n=!1),!n&&!oe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=re(e[o],t[o]);else if(oe(t))for(var o in t)e[o]=re(e[o],t[o]);return e}function se(e,t){Object.defineProperty(e,"toString",{value:t});}var ie="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function ae(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],o=[],r=1,s=e.length;r<s;r+=1)o.push(e[r]);return o.forEach(function(e){n=n.replace(/%[a-z]/,e);}),n}function ce(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return "production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):"")):new Error(ae.apply(void 0,__spreadArray([ie[t]],n,!1)).trim())}var le=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)if((r<<=1)<0)throw ce(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var s=o;s<r;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++);},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n);}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,s=o;s<r;s++)t+="".concat(this.tag.getRule(s)).concat("/*!sc*/\n");return t},e}(),ue=new Map,pe=new Map,de=1,he=function(e){if(ue.has(e))return ue.get(e);for(;pe.has(de);)de++;var t=de++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>1073741824))throw ce(16,"".concat(t));return ue.set(e,t),pe.set(t,e),t},fe=function(e,t){ue.set(e,t),pe.set(t,e);},me="style[".concat(f,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),ye=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ve=function(e,t,n){for(var o,r=n.split(","),s=0,i=r.length;s<i;s++)(o=r[s])&&e.registerName(t,o);},ge=function(e,t){for(var n,o=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),r=[],s=0,i=o.length;s<i;s++){var a=o[s].trim();if(a){var c=a.match(ye);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(fe(u,l),ve(e,u,c[3]),e.getTag().insertRules(l,r)),r.length=0;}else r.push(a);}}};function Se(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var we=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(f,"]")));return t[t.length-1]}(n),s=void 0!==r?r.nextSibling:null;o.setAttribute(f,"active"),o.setAttribute("data-styled-version","6.1.0");var i=Se();return i&&o.setAttribute("nonce",i),n.insertBefore(o,s),o},be=function(){function e(e){this.element=we(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}throw ce(17)}(this.element),this.length=0;}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ee=function(){function e(e){this.element=we(e),this.nodes=this.element.childNodes,this.length=0;}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return !1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ne=function(){function e(e){this.rules=[],this.length=0;}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Pe=y,_e={isServer:!y,useCSSOMInjection:!v},Ce=function(){function e(e,n,o){void 0===e&&(e=N),void 0===n&&(n={});var r=this;this.options=__assign(__assign({},_e),e),this.gs=n,this.names=new Map(o),this.server=!!e.isServer,!this.server&&y&&Pe&&(Pe=!1,function(e){for(var t=document.querySelectorAll(me),n=0,o=t.length;n<o;n++){var r=t[n];r&&"active"!==r.getAttribute(f)&&(ge(e,r),r.parentNode&&r.parentNode.removeChild(r));}}(this)),se(this,function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=function(n){var r=function(e){return pe.get(e)}(n);if(void 0===r)return "continue";var s=e.names.get(r),i=t.getGroup(n);if(void 0===s||0===i.length)return "continue";var a="".concat(f,".g").concat(n,'[id="').concat(r,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","));}),o+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat("/*!sc*/\n");},s=0;s<n;s++)r(s);return o}(r)});}return e.registerId=function(e){return he(e)},e.prototype.reconstructWithOptions=function(n,o){return void 0===o&&(o=!0),new e(__assign(__assign({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ne(n):t?new be(n):new Ee(n)}(this.options),new le(e)));var e;},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(he(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(he(e),n);},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},e.prototype.clearRules=function(e){this.getTag().clearGroup(he(e)),this.clearNames(e);},e.prototype.clearTag=function(){this.tag=void 0;},e}(),Ie=/&/g,Ae=/^\s*\/\/.*$/gm;function Oe(e,t){return e.map(function(e){return "rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return "".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Oe(e.children,t)),e})}function De(e){var t,n,o,r=void 0===e?N:e,s=r.options,i=void 0===s?N:s,a=r.plugins,c$1=void 0===a?E:a,l=function(e,o,r){return r===n||r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=c$1.slice();u.push(function(e){e.type===c&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ie,n).replace(o,l));}),i.prefix&&u.push(we$1),u.push(pe$1);var p=function(e,r,s,a){void 0===r&&(r=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=r,o=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(Ae,""),l=te$1(s||r?"".concat(s," ").concat(r," { ").concat(c," }"):c);i.namespace&&(l=Oe(l,i.namespace));var p=[];return ve$1(l,he$1(u.concat(be$1(function(e){return p.push(e)})))),p};return p.hash=c$1.length?c$1.reduce(function(e,t){return t.name||ce(15),k(e,t.name)},5381).toString():"",p}var Re=new Ce,Te=De(),ke=o__default["default"].createContext({shouldForwardProp:void 0,styleSheet:Re,stylis:Te});ke.Consumer;o__default["default"].createContext(void 0);function Ve(){return o.useContext(ke)}var Me=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Te);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"));},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,se(this,function(){throw ce(12,String(n.name))});}return e.prototype.getName=function(e){return void 0===e&&(e=Te),this.name+e.hash},e}(),ze=function(e){return e>="A"&&e<="Z"};function $e(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;ze(o)?t+="-"+o.toLowerCase():t+=o;}return t.startsWith("ms-")?"-"+t:t}var Be=function(e){return null==e||!1===e||""===e},Le=function(t){var n,o,r=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!Be(i)&&(Array.isArray(i)&&i.isCss||Q(i)?r.push("".concat($e(s),":"),i,";"):oe(i)?r.push.apply(r,__spreadArray(__spreadArray(["".concat(s," {")],Le(i),!1),["}"],!1)):r.push("".concat($e(s),": ").concat((n=s,null==(o=i)||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in unitlessKeys||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")));}return r};function Ge(e,t,n,o){if(Be(e))return [];if(ee(e))return [".".concat(e.styledComponentId)];if(Q(e)){if(!Q(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return [e];var r=e(t);return "production"===process.env.NODE_ENV||"object"!=typeof r||Array.isArray(r)||r instanceof Me||oe(r)||null===r||console.error("".concat(V(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Ge(r,t,n,o)}var s;return e instanceof Me?n?(e.inject(n,o),[e.getName(o)]):[e]:oe(e)?Le(e):Array.isArray(e)?Array.prototype.concat.apply(E,e.map(function(e){return Ge(e,t,n,o)})):[e.toString()]}function Ye(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Q(n)&&!ee(n))return !1}return !0}var qe=j("6.1.0"),We=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&Ye(e),this.componentId=t,this.baseHash=k(qe,t),this.baseStyle=n,Ce.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=te(o,this.staticRulesId);else {var r=ne(Ge(this.rules,e,t,n)),s=R(k(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(r,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i);}o=te(o,s),this.staticRulesId=s;}else {for(var a=k(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u,"production"!==process.env.NODE_ENV&&(a=k(a,u));else if(u){var p=ne(Ge(u,e,t,n));a=k(a,p+l),c+=p;}}if(c){var d=R(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),o=te(o,d);}}return o},e}(),He=o__default["default"].createContext(void 0);He.Consumer;var Ze={},Ke=new Set;function Qe(e,r,s){var i=ee(e),a=e,c=!F(e),p=r.attrs,d=void 0===p?E:p,h=r.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":A(e);Ze[n]=(Ze[n]||0)+1;var o="".concat(n,"-").concat(x("6.1.0"+n+Ze[n]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):h,m=r.displayName,y=void 0===m?function(e){return F(e)?"styled.".concat(e):"Styled(".concat(V(e),")")}(e):m,v=r.displayName&&r.componentId?"".concat(A(r.displayName),"-").concat(r.componentId):r.componentId||f,g=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,S=r.shouldForwardProp;if(i&&a.shouldForwardProp){var w=a.shouldForwardProp;if(r.shouldForwardProp){var C=r.shouldForwardProp;S=function(e,t){return w(e,t)&&C(e,t)};}else S=w;}var I=new We(s,v,i?a.componentStyle:void 0);function O(e,r){return function(e,r,s){var i=e.attrs,a=e.componentStyle,c=e.defaultProps,p=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=o__default["default"].useContext(He),m=Ve(),y=e.shouldForwardProp||m.shouldForwardProp;"production"!==process.env.NODE_ENV&&o.useDebugValue(d);var v=function(e,n,o){for(var r,s=__assign(__assign({},n),{className:void 0,theme:o}),i=0;i<e.length;i+=1){var a=Q(r=e[i])?r(s):r;for(var c in a)s[c]="className"===c?te(s[c],a[c]):"style"===c?__assign(__assign({},s[c]),a[c]):a[c];}return n.className&&(s.className=te(s.className,n.className)),s}(i,r,P(r,f,c)||N),g=v.as||h,S={};for(var w in v)void 0===v[w]||"$"===w[0]||"as"===w||"theme"===w||("forwardedAs"===w?S.as=v.forwardedAs:y&&!y(w,g)||(S[w]=v[w],y||"development"!==process.env.NODE_ENV||isPropValid(w)||Ke.has(w)||!_.has(g)||(Ke.add(w),console.warn('styled-components: it looks like an unknown prop "'.concat(w,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var b=function(e,t){var n=Ve(),o$1=e.generateAndInjectStyles(t,n.styleSheet,n.stylis);return "production"!==process.env.NODE_ENV&&o.useDebugValue(o$1),o$1}(a,v);"production"!==process.env.NODE_ENV&&e.warnTooManyClasses&&e.warnTooManyClasses(b);var E=te(p,d);return b&&(E+=" "+b),v.className&&(E+=" "+v.className),S[F(g)&&!_.has(g)?"class":"className"]=E,S.ref=s,o.createElement(g,S)}(D,e,r)}"production"!==process.env.NODE_ENV&&(O.displayName=y);var D=o__default["default"].forwardRef(O);return D.attrs=g,D.componentStyle=I,D.shouldForwardProp=S,"production"!==process.env.NODE_ENV&&(D.displayName=y),D.foldedComponentIds=i?te(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=v,D.target=i?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=0,r=t;o<r.length;o++)re(e,r[o],!0);return e}({},a.defaultProps,e):e;}}),"production"!==process.env.NODE_ENV&&(b(y,v),D.warnTooManyClasses=function(e,t){var n={},o=!1;return function(r){if(!o&&(n[r]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),o=!0,n={};}}}(y,v)),se(D,function(){return ".".concat(D.styledComponentId)}),c&&K(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function et(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var tt=function(e){return Object.assign(e,{isCss:!0})};function nt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(Q(t)||oe(t)){var r=t;return tt(Ge(et(E,__spreadArray([r],n,!0))))}var s=t;return 0===n.length&&1===s.length&&"string"==typeof s[0]?Ge(s):tt(Ge(et(s,n)))}function ot(n,o,r){if(void 0===r&&(r=N),!o)throw ce(1,o);var s=function(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return n(o,r,nt.apply(void 0,__spreadArray([t],s,!1)))};return s.attrs=function(e){return ot(n,o,__assign(__assign({},r),{attrs:Array.prototype.concat(r.attrs,e).filter(Boolean)}))},s.withConfig=function(e){return ot(n,o,__assign(__assign({},r),e))},s}var rt=function(e){return ot(Qe,e)},st=rt;_.forEach(function(e){st[e]=rt(e);});"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var ht="__sc-".concat(f,"__");"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window[ht]||(window[ht]=0),1===window[ht]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[ht]+=1);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EXPIRE_TIME = 24 * 60 * 60 * 1e3;
const Container = st.div`
  position: relative;
  &:hover {
    .anticon {
      opacity: 1;
    }
  }
`;
const Toolbar = st.div`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 10;
  display: flex;
  & > .anticon {
    opacity: 0;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    margin: auto;
  }
`;
const TableCustom = (_a) => {
  var _b = _a, {
    columns,
    storageKey,
    savedColumns,
    onChecklistChange
  } = _b, rest = __objRest(_b, [
    "columns",
    "storageKey",
    "savedColumns",
    "onChecklistChange"
  ]);
  var _a2;
  const [visible, setVisible] = o.useState(false);
  const [columsLocalStorage, setColumsLocalStorage, { removeItem }] = useLocalStorageState__default["default"](
    `data-insight-table-custom-${storageKey}`
  );
  const { syncTime } = columsLocalStorage || {};
  if (storageKey && +new Date() - syncTime > EXPIRE_TIME) {
    removeItem();
  }
  const resetColumns = (columns2) => columns2.map((c) => {
    var _a3, _b2, _c, _d;
    if (c.children && c.children.length > 0) {
      return __spreadProps(__spreadValues({}, c), {
        label: c.title,
        value: (_b2 = (_a3 = c.key) != null ? _a3 : c.dataIndex) != null ? _b2 : c.title,
        children: resetColumns(c.children)
      });
    }
    return __spreadProps(__spreadValues({}, c), { label: c.title, value: (_d = (_c = c.key) != null ? _c : c.dataIndex) != null ? _d : c.title });
  });
  const options = resetColumns(columns);
  const parentKeys = options.map((o) => o.value);
  const isNotMatch = ((_a2 = options.filter((item) => item.disableCustom).flatMap(
    (o) => o.children ? [o.value, ...o.children.map((c) => c.value)] : o.value
  ).filter((item) => savedColumns == null ? void 0 : savedColumns.includes(item))) == null ? void 0 : _a2.length) === 0;
  const [checkedList, setCheckedList] = o.useState(
    storageKey && (columsLocalStorage == null ? void 0 : columsLocalStorage.checkedList) ? columsLocalStorage == null ? void 0 : columsLocalStorage.checkedList : savedColumns && (savedColumns == null ? void 0 : savedColumns.length) > 0 && !isNotMatch ? savedColumns : options.flatMap(
      (o) => o.children ? [o.value, ...o.children.map((c) => c.value)] : o.value
    )
  );
  o.useEffect(() => {
    setCheckedList(
      storageKey && (columsLocalStorage == null ? void 0 : columsLocalStorage.checkedList) ? columsLocalStorage == null ? void 0 : columsLocalStorage.checkedList : savedColumns && (savedColumns == null ? void 0 : savedColumns.length) > 0 && !isNotMatch ? savedColumns : options.flatMap(
        (o) => o.children ? [o.value, ...o.children.map((c) => c.value)] : o.value
      )
    );
  }, [columns]);
  const filterColumns = (columns2) => columns2.map((c) => {
    var _a3, _b2;
    const newColumn = __spreadValues({}, c);
    if (c.children && c.children.length > 0) {
      newColumn.children = filterColumns(c.children);
    }
    if (checkedList.includes((_b2 = (_a3 = c.key) != null ? _a3 : c.dataIndex) != null ? _b2 : c.title)) {
      return newColumn;
    }
    return false;
  }).filter(Boolean);
  const tableColumns = filterColumns(columns);
  o.useEffect(() => {
    if (storageKey) {
      setColumsLocalStorage({
        checkedList,
        syncTime: +new Date()
      });
    }
    if (onChecklistChange) {
      onChecklistChange(checkedList);
    }
  }, [JSON.stringify(checkedList)]);
  return /* @__PURE__ */ o__default["default"].createElement(Container, null, /* @__PURE__ */ o__default["default"].createElement(Toolbar, null, /* @__PURE__ */ o__default["default"].createElement(icons.SettingOutlined, {
    onClick: () => setVisible(true)
  })), /* @__PURE__ */ o__default["default"].createElement(antd.Table, __spreadValues({
    columns: tableColumns
  }, rest)), /* @__PURE__ */ o__default["default"].createElement(antd.Modal, {
    title: "\u6307\u6807\u8BBE\u7F6E",
    width: 800,
    open: visible,
    visible,
    onOk: () => setVisible(false),
    onCancel: () => setVisible(false),
    footer: null
  }, /* @__PURE__ */ o__default["default"].createElement(antd.Checkbox.Group, {
    value: checkedList,
    onChange: (checkedValues) => {
      if (checkedList.length > checkedValues.length) {
        const uncheckItem = checkedList.filter((c) => !checkedValues.includes(c));
        if (parentKeys.includes(uncheckItem[0])) {
          const childrenKeysToUncheck = options.filter(
            (o) => uncheckItem[0] === o.value && !checkedValues.includes(o.value)
          ).flatMap(
            (o) => o.children ? [...o.children.map((c) => c.value)] : false
          ).filter(Boolean);
          setCheckedList([
            .../* @__PURE__ */ new Set([
              ...checkedValues.filter((c) => !childrenKeysToUncheck.includes(c))
            ])
          ]);
        } else {
          const parentKeysToUncheck = options.filter((o) => {
            if (o.children && o.children.length > 0) {
              return o.children.every((c) => !checkedValues.includes(c.value));
            }
            return false;
          }).map((o) => o.value);
          setCheckedList([
            .../* @__PURE__ */ new Set([
              ...checkedValues.filter((c) => !parentKeysToUncheck.includes(c))
            ])
          ]);
        }
      } else {
        const checkItem = checkedValues.filter((c) => !checkedList.includes(c));
        if (parentKeys.includes(checkItem[0])) {
          const childrenKeysToCheck = options.filter((o) => checkItem[0] === o.value && checkedValues.includes(o.value)).flatMap(
            (o) => o.children ? [...o.children.map((c) => c.value)] : false
          ).filter(Boolean);
          setCheckedList([.../* @__PURE__ */ new Set([...checkedValues, ...childrenKeysToCheck])]);
        } else {
          const parentKeysToCheck = options.filter((o) => {
            if (o.children && o.children.length > 0) {
              return o.children.find((c) => checkedValues.includes(c.value));
            }
            return false;
          }).map((o) => o.value);
          setCheckedList([.../* @__PURE__ */ new Set([...checkedValues, ...parentKeysToCheck])]);
        }
      }
    },
    style: { width: "100%", flexDirection: "column" }
  }, options == null ? void 0 : options.map((o) => {
    var _a3, _b2;
    const checkedChildren = (_a3 = o.children) == null ? void 0 : _a3.filter((c) => checkedList.includes(c.value));
    const indeterminate = (checkedChildren == null ? void 0 : checkedChildren.length) > 0 && (checkedChildren == null ? void 0 : checkedChildren.length) < ((_b2 = o.children) == null ? void 0 : _b2.length);
    return /* @__PURE__ */ o__default["default"].createElement("div", {
      key: o.value,
      style: { width: "100%" }
    }, /* @__PURE__ */ o__default["default"].createElement(antd.Divider, {
      orientation: "left",
      orientationMargin: "0",
      style: { margin: "24px 0 8px 0" }
    }, /* @__PURE__ */ o__default["default"].createElement(antd.Checkbox, {
      value: o.value,
      disabled: o.disableCustom,
      indeterminate
    }, /* @__PURE__ */ o__default["default"].createElement("span", {
      style: { fontSize: 16 }
    }, o.label))), o.children && o.children.length > 0 && /* @__PURE__ */ o__default["default"].createElement(antd.Row, {
      style: { width: "100%" }
    }, o.children.map((c) => /* @__PURE__ */ o__default["default"].createElement(antd.Col, {
      span: 6
    }, /* @__PURE__ */ o__default["default"].createElement(antd.Checkbox, {
      value: c.value,
      disabled: c.disableCustom
    }, c.label)))));
  }))));
};

var index = { TableCustom };

exports.TableCustom = TableCustom;
exports["default"] = index;
