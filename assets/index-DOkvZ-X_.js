import{e as y,r as l}from"./index-D6_zSI5B.js";import{j as w}from"./index-PQnn582E.js";var M=function(){return M=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},M.apply(this,arguments)};function pe(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,a;n<o;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var O="-ms-",de="-moz-",A="-webkit-",Lt="comm",Ie="rule",ot="decl",Kr="@import",Bt="@keyframes",Xr="@layer",Wt=Math.abs,at=String.fromCharCode,Ue=Object.assign;function Jr(e,t){return I(e,0)^45?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}function Ht(e){return e.trim()}function H(e,t){return(e=t.exec(e))?e[0]:e}function v(e,t,r){return e.replace(t,r)}function Ce(e,t,r){return e.indexOf(t,r)}function I(e,t){return e.charCodeAt(t)|0}function re(e,t,r){return e.slice(t,r)}function L(e){return e.length}function Zt(e){return e.length}function fe(e,t){return t.push(e),e}function Qr(e,t){return e.map(t).join("")}function mt(e,t){return e.filter(function(r){return!H(r,t)})}var je=1,ne=1,Vt=0,D=0,z=0,ie="";function Me(e,t,r,n,o,a,s,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:je,column:ne,length:s,return:"",siblings:i}}function G(e,t){return Ue(Me("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ee(e){for(;e.root;)e=G(e.root,{children:[e]});fe(e,e.siblings)}function en(){return z}function tn(){return z=D>0?I(ie,--D):0,ne--,z===10&&(ne=1,je--),z}function F(){return z=D<Vt?I(ie,D++):0,ne++,z===10&&(ne=1,je++),z}function X(){return I(ie,D)}function Ee(){return D}function Te(e,t){return re(ie,e,t)}function Ye(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rn(e){return je=ne=1,Vt=L(ie=e),D=0,[]}function nn(e){return ie="",e}function He(e){return Ht(Te(D-1,qe(e===91?e+2:e===40?e+1:e)))}function on(e){for(;(z=X())&&z<33;)F();return Ye(e)>2||Ye(z)>3?"":" "}function an(e,t){for(;--t&&F()&&!(z<48||z>102||z>57&&z<65||z>70&&z<97););return Te(e,Ee()+(t<6&&X()==32&&F()==32))}function qe(e){for(;F();)switch(z){case e:return D;case 34:case 39:e!==34&&e!==39&&qe(z);break;case 40:e===41&&qe(e);break;case 92:F();break}return D}function sn(e,t){for(;F()&&e+z!==57;)if(e+z===84&&X()===47)break;return"/*"+Te(t,D-1)+"*"+at(e===47?e:F())}function cn(e){for(;!Ye(X());)F();return Te(e,D)}function un(e){return nn(Ae("",null,null,null,[""],e=rn(e),0,[0],e))}function Ae(e,t,r,n,o,a,s,i,u){for(var f=0,m=0,d=s,h=0,p=0,g=0,b=1,k=1,E=1,$=0,_="",R=o,C=a,S=n,x=_;k;)switch(g=$,$=F()){case 40:if(g!=108&&I(x,d-1)==58){Ce(x+=v(He($),"&","&\f"),"&\f",Wt(f?i[f-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:x+=He($);break;case 9:case 10:case 13:case 32:x+=on(g);break;case 92:x+=an(Ee()-1,7);continue;case 47:switch(X()){case 42:case 47:fe(ln(sn(F(),Ee()),t,r,u),u);break;default:x+="/"}break;case 123*b:i[f++]=L(x)*E;case 125*b:case 59:case 0:switch($){case 0:case 125:k=0;case 59+m:E==-1&&(x=v(x,/\f/g,"")),p>0&&L(x)-d&&fe(p>32?yt(x+";",n,r,d-1,u):yt(v(x," ","")+";",n,r,d-2,u),u);break;case 59:x+=";";default:if(fe(S=gt(x,t,r,f,m,o,i,_,R=[],C=[],d,a),a),$===123)if(m===0)Ae(x,t,S,S,R,a,d,i,C);else switch(h===99&&I(x,3)===110?100:h){case 100:case 108:case 109:case 115:Ae(e,S,S,n&&fe(gt(e,S,S,0,0,o,i,_,o,R=[],d,C),C),o,C,d,i,n?R:C);break;default:Ae(x,S,S,S,[""],C,0,i,C)}}f=m=p=0,b=E=1,_=x="",d=s;break;case 58:d=1+L(x),p=g;default:if(b<1){if($==123)--b;else if($==125&&b++==0&&tn()==125)continue}switch(x+=at($),$*b){case 38:E=m>0?1:(x+="\f",-1);break;case 44:i[f++]=(L(x)-1)*E,E=1;break;case 64:X()===45&&(x+=He(F())),h=X(),m=d=L(_=x+=cn(Ee())),$++;break;case 45:g===45&&L(x)==2&&(b=0)}}return a}function gt(e,t,r,n,o,a,s,i,u,f,m,d){for(var h=o-1,p=o===0?a:[""],g=Zt(p),b=0,k=0,E=0;b<n;++b)for(var $=0,_=re(e,h+1,h=Wt(k=s[b])),R=e;$<g;++$)(R=Ht(k>0?p[$]+" "+_:v(_,/&\f/g,p[$])))&&(u[E++]=R);return Me(e,t,r,o===0?Ie:i,u,f,m,d)}function ln(e,t,r,n){return Me(e,t,r,Lt,at(en()),re(e,2,-2),0,n)}function yt(e,t,r,n,o){return Me(e,t,r,ot,re(e,0,n),re(e,n+1,-1),n,o)}function Gt(e,t,r){switch(Jr(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+de+e+O+e+e;case 5936:switch(I(e,t+11)){case 114:return A+e+O+v(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+O+v(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+O+v(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+O+e+e;case 6165:return A+e+O+"flex-"+e+e;case 5187:return A+e+v(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+O+"flex-$1$2")+e;case 5443:return A+e+O+"flex-item-"+v(e,/flex-|-self/g,"")+(H(e,/flex-|baseline/)?"":O+"grid-row-"+v(e,/flex-|-self/g,""))+e;case 4675:return A+e+O+"flex-line-pack"+v(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+O+v(e,"shrink","negative")+e;case 5292:return A+e+O+v(e,"basis","preferred-size")+e;case 6060:return A+"box-"+v(e,"-grow","")+A+e+O+v(e,"grow","positive")+e;case 4554:return A+v(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return v(v(v(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return v(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return v(v(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!H(e,/flex-|baseline/))return O+"grid-column-align"+re(e,t)+e;break;case 2592:case 3360:return O+v(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,H(n.props,/grid-\w+-end/)})?~Ce(e+(r=r[t].value),"span",0)?e:O+v(e,"-start","")+e+O+"grid-row-span:"+(~Ce(r,"span",0)?H(r,/\d+/):+H(r,/\d+/)-+H(e,/\d+/))+";":O+v(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return H(n.props,/grid-\w+-start/)})?e:O+v(v(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return v(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(e)-1-t>6)switch(I(e,t+1)){case 109:if(I(e,t+4)!==45)break;case 102:return v(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+de+(I(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ce(e,"stretch",0)?Gt(v(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return v(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,a,s,i,u,f){return O+o+":"+a+f+(s?O+o+"-span:"+(i?u:+u-+a)+f:"")+e});case 4949:if(I(e,t+6)===121)return v(e,":",":"+A)+e;break;case 6444:switch(I(e,I(e,14)===45?18:11)){case 120:return v(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(I(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+O+"$2box$3")+e;case 100:return v(e,":",":"+O)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return v(e,"scroll-","scroll-snap-")+e}return e}function ke(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function fn(e,t,r,n){switch(e.type){case Xr:if(e.children.length)break;case Kr:case ot:return e.return=e.return||e.value;case Lt:return"";case Bt:return e.return=e.value+"{"+ke(e.children,n)+"}";case Ie:if(!L(e.value=e.props.join(",")))return""}return L(r=ke(e.children,n))?e.return=e.value+"{"+r+"}":""}function dn(e){var t=Zt(e);return function(r,n,o,a){for(var s="",i=0;i<t;i++)s+=e[i](r,n,o,a)||"";return s}}function pn(e){return function(t){t.root||(t=t.return)&&e(t)}}function hn(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case ot:e.return=Gt(e.value,e.length,r);return;case Bt:return ke([G(e,{value:v(e.value,"@","@"+A)})],n);case Ie:if(e.length)return Qr(r=e.props,function(o){switch(H(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ee(G(e,{props:[v(o,/:(read-\w+)/,":"+de+"$1")]})),ee(G(e,{props:[o]})),Ue(e,{props:mt(r,n)});break;case"::placeholder":ee(G(e,{props:[v(o,/:(plac\w+)/,":"+A+"input-$1")]})),ee(G(e,{props:[v(o,/:(plac\w+)/,":"+de+"$1")]})),ee(G(e,{props:[v(o,/:(plac\w+)/,O+"input-$1")]})),ee(G(e,{props:[o]})),Ue(e,{props:mt(r,n)});break}return""})}}var mn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},T={},oe=typeof process<"u"&&T!==void 0&&(T.REACT_APP_SC_ATTR||T.SC_ATTR)||"data-styled",Ut="active",Yt="data-styled-version",De="6.1.15",st=`/*!sc*/
`,Oe=typeof window<"u"&&"HTMLElement"in window,gn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&T!==void 0&&T.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&T.REACT_APP_SC_DISABLE_SPEEDY!==""?T.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&T.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&T!==void 0&&T.SC_DISABLE_SPEEDY!==void 0&&T.SC_DISABLE_SPEEDY!==""&&T.SC_DISABLE_SPEEDY!=="false"&&T.SC_DISABLE_SPEEDY),Fe=Object.freeze([]),ae=Object.freeze({});function yn(e,t,r){return r===void 0&&(r=ae),e.theme!==r.theme&&e.theme||t||r.theme}var qt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bn=/(^-|-$)/g;function vt(e){return e.replace(vn,"-").replace(bn,"")}var xn=/(a)(d)/gi,we=52,bt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ke(e){var t,r="";for(t=Math.abs(e);t>we;t=t/we|0)r=bt(t%we)+r;return(bt(t%we)+r).replace(xn,"$1-$2")}var Ze,Kt=5381,te=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Xt=function(e){return te(Kt,e)};function Jt(e){return Ke(Xt(e)>>>0)}function wn(e){return e.displayName||e.name||"Component"}function Ve(e){return typeof e=="string"&&!0}var Qt=typeof Symbol=="function"&&Symbol.for,er=Qt?Symbol.for("react.memo"):60115,Sn=Qt?Symbol.for("react.forward_ref"):60112,$n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},En=((Ze={})[Sn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ze[er]=tr,Ze);function xt(e){return("type"in(t=e)&&t.type.$$typeof)===er?tr:"$$typeof"in e?En[e.$$typeof]:$n;var t}var An=Object.defineProperty,Pn=Object.getOwnPropertyNames,wt=Object.getOwnPropertySymbols,_n=Object.getOwnPropertyDescriptor,kn=Object.getPrototypeOf,St=Object.prototype;function rr(e,t,r){if(typeof t!="string"){if(St){var n=kn(t);n&&n!==St&&rr(e,n,r)}var o=Pn(t);wt&&(o=o.concat(wt(t)));for(var a=xt(e),s=xt(t),i=0;i<o.length;++i){var u=o[i];if(!(u in Cn||r&&r[u]||s&&u in s||a&&u in a)){var f=_n(t,u);try{An(e,u,f)}catch{}}}}return e}function se(e){return typeof e=="function"}function it(e){return typeof e=="object"&&"styledComponentId"in e}function K(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xe(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function he(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Je(e,t,r){if(r===void 0&&(r=!1),!r&&!he(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Je(e[n],t[n]);else if(he(t))for(var n in t)e[n]=Je(e[n],t[n]);return e}function ct(e,t){Object.defineProperty(e,"toString",{value:t})}function me(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var On=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,a=o;t>=a;)if((a<<=1)<0)throw me(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(t+1),u=(s=0,r.length);s<u;s++)this.tag.insertRule(i,r[s])&&(this.groupSizes[t]++,i++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var a=n;a<o;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),a=o+n,s=o;s<a;s++)r+="".concat(this.tag.getRule(s)).concat(st);return r},e}(),Pe=new Map,Re=new Map,_e=1,Se=function(e){if(Pe.has(e))return Pe.get(e);for(;Re.has(_e);)_e++;var t=_e++;return Pe.set(e,t),Re.set(t,e),t},Rn=function(e,t){_e=t+1,Pe.set(e,t),Re.set(t,e)},Nn="style[".concat(oe,"][").concat(Yt,'="').concat(De,'"]'),zn=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),In=function(e,t,r){for(var n,o=r.split(","),a=0,s=o.length;a<s;a++)(n=o[a])&&e.registerName(t,n)},jn=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(st),o=[],a=0,s=n.length;a<s;a++){var i=n[a].trim();if(i){var u=i.match(zn);if(u){var f=0|parseInt(u[1],10),m=u[2];f!==0&&(Rn(m,f),In(e,m,u[3]),e.getTag().insertRules(f,o)),o.length=0}else o.push(i)}}},$t=function(e){for(var t=document.querySelectorAll(Nn),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(oe)!==Ut&&(jn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Mn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nr=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(i){var u=Array.from(i.querySelectorAll("style[".concat(oe,"]")));return u[u.length-1]}(r),a=o!==void 0?o.nextSibling:null;n.setAttribute(oe,Ut),n.setAttribute(Yt,De);var s=Mn();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},Tn=function(){function e(t){this.element=nr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,a=n.length;o<a;o++){var s=n[o];if(s.ownerNode===r)return s}throw me(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Dn=function(){function e(t){this.element=nr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Fn=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ct=Oe,Ln={isServer:!Oe,useCSSOMInjection:!gn},or=function(){function e(t,r,n){t===void 0&&(t=ae),r===void 0&&(r={});var o=this;this.options=M(M({},Ln),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Oe&&Ct&&(Ct=!1,$t(this)),ct(this,function(){return function(a){for(var s=a.getTag(),i=s.length,u="",f=function(d){var h=function(E){return Re.get(E)}(d);if(h===void 0)return"continue";var p=a.names.get(h),g=s.getGroup(d);if(p===void 0||!p.size||g.length===0)return"continue";var b="".concat(oe,".g").concat(d,'[id="').concat(h,'"]'),k="";p!==void 0&&p.forEach(function(E){E.length>0&&(k+="".concat(E,","))}),u+="".concat(g).concat(b,'{content:"').concat(k,'"}').concat(st)},m=0;m<i;m++)f(m);return u}(o)})}return e.registerId=function(t){return Se(t)},e.prototype.rehydrate=function(){!this.server&&Oe&&$t(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(M(M({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Fn(o):n?new Tn(o):new Dn(o)}(this.options),new On(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Se(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Se(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Se(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Bn=/&/g,Wn=/^\s*\/\/.*$/gm;function ar(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ar(r.children,t)),r})}function Hn(e){var t,r,n,o=ae,a=o.options,s=a===void 0?ae:a,i=o.plugins,u=i===void 0?Fe:i,f=function(h,p,g){return g.startsWith(r)&&g.endsWith(r)&&g.replaceAll(r,"").length>0?".".concat(t):h},m=u.slice();m.push(function(h){h.type===Ie&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Bn,r).replace(n,f))}),s.prefix&&m.push(hn),m.push(fn);var d=function(h,p,g,b){p===void 0&&(p=""),g===void 0&&(g=""),b===void 0&&(b="&"),t=b,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var k=h.replace(Wn,""),E=un(g||p?"".concat(g," ").concat(p," { ").concat(k," }"):k);s.namespace&&(E=ar(E,s.namespace));var $=[];return ke(E,dn(m.concat(pn(function(_){return $.push(_)})))),$};return d.hash=u.length?u.reduce(function(h,p){return p.name||me(15),te(h,p.name)},Kt).toString():"",d}var Zn=new or,Qe=Hn(),sr=y.createContext({shouldForwardProp:void 0,styleSheet:Zn,stylis:Qe});sr.Consumer;y.createContext(void 0);function Et(){return l.useContext(sr)}var ir=function(){function e(t,r){var n=this;this.inject=function(o,a){a===void 0&&(a=Qe);var s=n.name+a.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,a(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ct(this,function(){throw me(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qe),this.name+t.hash},e}(),Vn=function(e){return e>="A"&&e<="Z"};function At(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Vn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var cr=function(e){return e==null||e===!1||e===""},ur=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!cr(a)&&(Array.isArray(a)&&a.isCss||se(a)?n.push("".concat(At(o),":"),a,";"):he(a)?n.push.apply(n,pe(pe(["".concat(o," {")],ur(a),!1),["}"],!1)):n.push("".concat(At(o),": ").concat((t=o,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in mn||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function J(e,t,r,n){if(cr(e))return[];if(it(e))return[".".concat(e.styledComponentId)];if(se(e)){if(!se(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return J(o,t,r,n)}var a;return e instanceof ir?r?(e.inject(r,n),[e.getName(n)]):[e]:he(e)?ur(e):Array.isArray(e)?Array.prototype.concat.apply(Fe,e.map(function(s){return J(s,t,r,n)})):[e.toString()]}function Gn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(se(r)&&!it(r))return!1}return!0}var Un=Xt(De),Yn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Gn(t),this.componentId=r,this.baseHash=te(Un,r),this.baseStyle=n,or.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=K(o,this.staticRulesId);else{var a=Xe(J(this.rules,t,r,n)),s=Ke(te(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,s)){var i=n(a,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,i)}o=K(o,s),this.staticRulesId=s}else{for(var u=te(this.baseHash,n.hash),f="",m=0;m<this.rules.length;m++){var d=this.rules[m];if(typeof d=="string")f+=d;else if(d){var h=Xe(J(d,t,r,n));u=te(u,h+m),f+=h}}if(f){var p=Ke(u>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(f,".".concat(p),void 0,this.componentId)),o=K(o,p)}}return o},e}(),lr=y.createContext(void 0);lr.Consumer;var Ge={};function qn(e,t,r){var n=it(e),o=e,a=!Ve(e),s=t.attrs,i=s===void 0?Fe:s,u=t.componentId,f=u===void 0?function(R,C){var S=typeof R!="string"?"sc":vt(R);Ge[S]=(Ge[S]||0)+1;var x="".concat(S,"-").concat(Jt(De+S+Ge[S]));return C?"".concat(C,"-").concat(x):x}(t.displayName,t.parentComponentId):u,m=t.displayName,d=m===void 0?function(R){return Ve(R)?"styled.".concat(R):"Styled(".concat(wn(R),")")}(e):m,h=t.displayName&&t.componentId?"".concat(vt(t.displayName),"-").concat(t.componentId):t.componentId||f,p=n&&o.attrs?o.attrs.concat(i).filter(Boolean):i,g=t.shouldForwardProp;if(n&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;g=function(R,C){return b(R,C)&&k(R,C)}}else g=b}var E=new Yn(r,h,n?o.componentStyle:void 0);function $(R,C){return function(S,x,Q){var ge=S.attrs,Hr=S.componentStyle,Zr=S.defaultProps,Vr=S.foldedComponentIds,Gr=S.styledComponentId,Ur=S.target,Yr=y.useContext(lr),qr=Et(),Le=S.shouldForwardProp||qr.shouldForwardProp,pt=yn(x,Yr,Zr)||ae,W=function(ve,ue,be){for(var le,q=M(M({},ue),{className:void 0,theme:be}),We=0;We<ve.length;We+=1){var xe=se(le=ve[We])?le(q):le;for(var V in xe)q[V]=V==="className"?K(q[V],xe[V]):V==="style"?M(M({},q[V]),xe[V]):xe[V]}return ue.className&&(q.className=K(q.className,ue.className)),q}(ge,x,pt),ye=W.as||Ur,ce={};for(var Z in W)W[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&W.theme===pt||(Z==="forwardedAs"?ce.as=W.forwardedAs:Le&&!Le(Z,ye)||(ce[Z]=W[Z]));var ht=function(ve,ue){var be=Et(),le=ve.generateAndInjectStyles(ue,be.styleSheet,be.stylis);return le}(Hr,W),Be=K(Vr,Gr);return ht&&(Be+=" "+ht),W.className&&(Be+=" "+W.className),ce[Ve(ye)&&!qt.has(ye)?"class":"className"]=Be,Q&&(ce.ref=Q),l.createElement(ye,ce)}(_,R,C)}$.displayName=d;var _=y.forwardRef($);return _.attrs=p,_.componentStyle=E,_.displayName=d,_.shouldForwardProp=g,_.foldedComponentIds=n?K(o.foldedComponentIds,o.styledComponentId):"",_.styledComponentId=h,_.target=n?o.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=n?function(C){for(var S=[],x=1;x<arguments.length;x++)S[x-1]=arguments[x];for(var Q=0,ge=S;Q<ge.length;Q++)Je(C,ge[Q],!0);return C}({},o.defaultProps,R):R}}),ct(_,function(){return".".concat(_.styledComponentId)}),a&&rr(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Pt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var _t=function(e){return Object.assign(e,{isCss:!0})};function P(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(se(e)||he(e))return _t(J(Pt(Fe,pe([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?J(n):_t(J(Pt(n,t)))}function et(e,t,r){if(r===void 0&&(r=ae),!t)throw me(1,t);var n=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,r,P.apply(void 0,pe([o],a,!1)))};return n.attrs=function(o){return et(e,t,M(M({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return et(e,t,M(M({},r),o))},n}var fr=function(e){return et(qn,e)},j=fr;qt.forEach(function(e){j[e]=fr(e)});function dr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Xe(P.apply(void 0,pe([e],t,!1))),o=Jt(n);return new ir(o,n)}const Kn=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),y.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),Xn=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),y.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]),Jn=l.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var Qn=Object.defineProperty,Ne=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable,kt=(e,t,r)=>t in e?Qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ot=(e,t)=>{for(var r in t||(t={}))pr.call(t,r)&&kt(e,r,t[r]);if(Ne)for(var r of Ne(t))hr.call(t,r)&&kt(e,r,t[r]);return e},Rt=(e,t)=>{var r={};for(var n in e)pr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Ne)for(var n of Ne(e))t.indexOf(n)<0&&hr.call(e,n)&&(r[n]=e[n]);return r};const mr=l.forwardRef((e,t)=>{const r=e,{alt:n,color:o,size:a,weight:s,mirrored:i,children:u,weights:f}=r,m=Rt(r,["alt","color","size","weight","mirrored","children","weights"]),d=l.useContext(Jn),{color:h="currentColor",size:p,weight:g="regular",mirrored:b=!1}=d,k=Rt(d,["color","size","weight","mirrored"]);return y.createElement("svg",Ot(Ot({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a??p,height:a??p,fill:o??h,viewBox:"0 0 256 256",transform:i||b?"scale(-1, 1)":void 0},k),m),!!n&&y.createElement("title",null,n),u,f.get(s??g))});mr.displayName="IconBase";const gr=mr;var eo=Object.defineProperty,to=Object.defineProperties,ro=Object.getOwnPropertyDescriptors,Nt=Object.getOwnPropertySymbols,no=Object.prototype.hasOwnProperty,oo=Object.prototype.propertyIsEnumerable,zt=(e,t,r)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ao=(e,t)=>{for(var r in t||(t={}))no.call(t,r)&&zt(e,r,t[r]);if(Nt)for(var r of Nt(t))oo.call(t,r)&&zt(e,r,t[r]);return e},so=(e,t)=>to(e,ro(t));const yr=l.forwardRef((e,t)=>y.createElement(gr,so(ao({ref:t},e),{weights:Kn})));yr.displayName="Check";var io=Object.defineProperty,co=Object.defineProperties,uo=Object.getOwnPropertyDescriptors,It=Object.getOwnPropertySymbols,lo=Object.prototype.hasOwnProperty,fo=Object.prototype.propertyIsEnumerable,jt=(e,t,r)=>t in e?io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,po=(e,t)=>{for(var r in t||(t={}))lo.call(t,r)&&jt(e,r,t[r]);if(It)for(var r of It(t))fo.call(t,r)&&jt(e,r,t[r]);return e},ho=(e,t)=>co(e,uo(t));const vr=l.forwardRef((e,t)=>y.createElement(gr,ho(po({ref:t},e),{weights:Xn})));vr.displayName="User";function mo(e,t=[]){let r=[];function n(a,s){const i=l.createContext(s),u=r.length;r=[...r,s];const f=d=>{var E;const{scope:h,children:p,...g}=d,b=((E=h==null?void 0:h[e])==null?void 0:E[u])||i,k=l.useMemo(()=>g,Object.values(g));return w.jsx(b.Provider,{value:k,children:p})};f.displayName=a+"Provider";function m(d,h){var b;const p=((b=h==null?void 0:h[e])==null?void 0:b[u])||i,g=l.useContext(p);if(g)return g;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${a}\``)}return[f,m]}const o=()=>{const a=r.map(s=>l.createContext(s));return function(i){const u=(i==null?void 0:i[e])||a;return l.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return o.scopeName=e,[n,go(o,...t)]}function go(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const s=n.reduce((i,{useScope:u,scopeName:f})=>{const d=u(a)[`__scope${f}`];return{...i,...d}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return r.scopeName=t.scopeName,r}function yo(e){const t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}var br=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{};function Mt(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function vo(...e){return t=>{let r=!1;const n=e.map(o=>{const a=Mt(o,t);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let o=0;o<n.length;o++){const a=n[o];typeof a=="function"?a():Mt(e[o],null)}}}}var xr=l.forwardRef((e,t)=>{const{children:r,...n}=e,o=l.Children.toArray(r),a=o.find(xo);if(a){const s=a.props.children,i=o.map(u=>u===a?l.Children.count(s)>1?l.Children.only(null):l.isValidElement(s)?s.props.children:null:u);return w.jsx(tt,{...n,ref:t,children:l.isValidElement(s)?l.cloneElement(s,void 0,i):null})}return w.jsx(tt,{...n,ref:t,children:r})});xr.displayName="Slot";var tt=l.forwardRef((e,t)=>{const{children:r,...n}=e;if(l.isValidElement(r)){const o=So(r),a=wo(n,r.props);return r.type!==l.Fragment&&(a.ref=t?vo(t,o):o),l.cloneElement(r,a)}return l.Children.count(r)>1?l.Children.only(null):null});tt.displayName="SlotClone";var bo=({children:e})=>w.jsx(w.Fragment,{children:e});function xo(e){return l.isValidElement(e)&&e.type===bo}function wo(e,t){const r={...t};for(const n in t){const o=e[n],a=t[n];/^on[A-Z]/.test(n)?o&&a?r[n]=(...i)=>{a(...i),o(...i)}:o&&(r[n]=o):n==="style"?r[n]={...o,...a}:n==="className"&&(r[n]=[o,a].filter(Boolean).join(" "))}return{...e,...r}}function So(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var $o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ut=$o.reduce((e,t)=>{const r=l.forwardRef((n,o)=>{const{asChild:a,...s}=n,i=a?xr:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(i,{...s,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),lt="Avatar",[Co,Ra]=mo(lt),[Eo,wr]=Co(lt),Sr=l.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,a]=l.useState("idle");return w.jsx(Eo,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:a,children:w.jsx(ut.span,{...n,ref:t})})});Sr.displayName=lt;var $r="AvatarImage",Cr=l.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...a}=e,s=wr($r,r),i=Ao(n,a.referrerPolicy),u=yo(f=>{o(f),s.onImageLoadingStatusChange(f)});return br(()=>{i!=="idle"&&u(i)},[i,u]),i==="loaded"?w.jsx(ut.img,{...a,ref:t,src:n}):null});Cr.displayName=$r;var Er="AvatarFallback",Ar=l.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,a=wr(Er,r),[s,i]=l.useState(n===void 0);return l.useEffect(()=>{if(n!==void 0){const u=window.setTimeout(()=>i(!0),n);return()=>window.clearTimeout(u)}},[n]),s&&a.imageLoadingStatus!=="loaded"?w.jsx(ut.span,{...o,ref:t}):null});Ar.displayName=Er;function Ao(e,t){const[r,n]=l.useState("idle");return br(()=>{if(!e){n("error");return}let o=!0;const a=new window.Image,s=i=>()=>{o&&n(i)};return n("loading"),a.onload=s("loaded"),a.onerror=s("error"),a.src=e,t&&(a.referrerPolicy=t),()=>{o=!1}},[e,t]),r}var Po=Sr,_o=Cr,ko=Ar,Oo=Object.defineProperty,Ro=Object.defineProperties,No=Object.getOwnPropertyDescriptors,ze=Object.getOwnPropertySymbols,Pr=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable,Tt=(e,t,r)=>t in e?Oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))Pr.call(t,r)&&Tt(e,r,t[r]);if(ze)for(var r of ze(t))_r.call(t,r)&&Tt(e,r,t[r]);return e},B=(e,t)=>Ro(e,No(t)),Y=(e,t)=>{var r={};for(var n in e)Pr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ze)for(var n of ze(e))t.indexOf(n)<0&&_r.call(e,n)&&(r[n]=e[n]);return r},zo={white:"#FFF",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray600:"#323238",gray800:"#202024",gray900:"#121214",green300:"#00B37E",green500:"#00875F"},Io={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",16:"4rem"},jo={px:"1px",xs:"4px",sm:"6px",md:"8px",full:"99999px"},Mo={default:"Roboto, sans-serif"},To={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Do={regular:"400",medium:"500"},Fo={shorter:"125%",base:"160%"},c={colors:zo,fonts:Mo,fontSizes:To,fontWeights:Do,lineHeights:Fo,radii:jo,space:Io},Lo=j.div`
  padding: ${c.space[6]};
  border-radius: ${c.radii.md};
  border: 1px solid ${c.colors.gray600};
  background-color: ${c.colors.gray800};
`;Lo.displayName="Box";var Bo={xxs:P`
    font-size: ${c.fontSizes.xxs};
  `,xs:P`
    font-size: ${c.fontSizes.xs};
  `,sm:P`
    font-size: ${c.fontSizes.sm};
  `,md:P`
    font-size: ${c.fontSizes.md};
  `,lg:P`
    font-size: ${c.fontSizes.lg};
  `,xl:P`
    font-size: ${c.fontSizes.xl};
  `,"2xl":P`
    font-size: ${c.fontSizes["2xl"]};
  `,"4xl":P`
    font-size: ${c.fontSizes["4xl"]};
  `,"5xl":P`
    font-size: ${c.fontSizes["5xl"]};
  `,"6xl":P`
    font-size: ${c.fontSizes["6xl"]};
  `,"7xl":P`
    font-size: ${c.fontSizes["7xl"]};
  `,"8xl":P`
    font-size: ${c.fontSizes["8xl"]};
  `,"9xl":P`
    font-size: ${c.fontSizes["9xl"]};
  `},ft=j.p`
  font-family: ${c.fonts.default};
  line-height: ${c.lineHeights.base};
  margin: 0;
  color: ${c.colors.gray100};

  ${({size:e="md"})=>Bo[e]}
`;ft.defaultProps={size:"md"};ft.displayName="Text";var Wo={sm:P`
    font-size: ${c.fontSizes.xs};
  `,md:P`
    font-size: ${c.fontSizes["2xl"]};
  `,lg:P`
    font-size: ${c.fontSizes["4xl"]};
  `,"2xl":P`
    font-size: ${c.fontSizes["5xl"]};
  `,"3xl":P`
    font-size: ${c.fontSizes["6xl"]};
  `,"4xl":P`
    font-size: ${c.fontSizes["7xl"]};
  `,"5xl":P`
    font-size: ${c.fontSizes["8xl"]};
  `,"6xl":P`
    font-size: ${c.fontSizes["9xl"]};
  `},kr=j.h2`
  font-family: ${c.fonts.default};
  line-height: ${c.lineHeights.shorter};
  margin: 0;
  color: ${c.colors.gray100};

  ${({size:e="md"})=>Wo[e]};
`;kr.defaultProps={size:"md"};kr.displayName="Heading";var Ho=j(Po)`
  border-radius: ${c.radii.full};
  display: inline-block;
  width: ${c.space[16]};
  height: ${c.space[16]};
  overflow: hidden;
`,Zo=j(_o)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Vo=j(ko)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${c.colors.gray600};
  color: ${c.colors.gray800};

  svg {
    width: ${c.space[6]};
    height: ${c.space[6]};
  }
`;function Go(e){return w.jsxs(Ho,{children:[w.jsx(Zo,N({},e)),w.jsx(Vo,{delayMs:600,children:w.jsx(vr,{})})]})}Go.displayName="Avatar";var Uo={primary:P`
    color: ${c.colors.white};
    background: ${c.colors.green500};
    
    &:not(:disabled):hover {
      background: ${c.colors.green300};
    };

    &:disabled {
      background-color: ${c.colors.gray200};
    }
  `,secondary:P`
    color: ${c.colors.green300};
    border: 2px solid ${c.colors.green500};
    
    &:not(:disabled):hover {
      background: ${c.colors.green500};
      color: ${c.colors.white};
    };

    &:disabled {
      color: ${c.colors.gray200};
      border-color: ${c.colors.gray200};
    };
  `,tertiary:P`
    color: ${c.colors.gray100};
    
    &:not(:disabled):hover {
      color: ${c.colors.white};
    };

    &:disabled {
      color: ${c.colors.gray600};
    };
  `},Yo={sm:P`
    height: 38px;
  `,md:P`
    height: 46px;
  `},Or=j.button`
  all: unset;
  border-radius: ${c.radii.sm};
  font-size: ${c.fontSizes.sm};
  font-weight: ${c.fontWeights.medium};
  font-family: ${c.fonts.default};
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  padding: 0 ${c.space[4]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${c.space[2]};

  cursor: pointer;

  svg: {
    width: ${c.space[4]};
    height: ${c.space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${c.colors.gray100};
  }

  ${({variant:e="primary"})=>Uo[e]}
  ${({size:e="md"})=>Yo[e]}
`;Or.defaultProps={variant:"primary",size:"md"};Or.displayName="Button";var qo={sm:P`
    padding: ${c.space[2]} ${c.space[3]};
  `,md:P`
    padding: ${c.space[3]} ${c.space[4]};
  `},Rr=j.div`
  background-color: ${c.colors.gray900};
  border-radius: ${c.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${c.colors.gray900};

  ${({size:e="md"})=>qo[e]};

  display: flex;
  align-items: center;

  &:has(input:focus) {
    border-color: ${c.colors.green300};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ko=j.span`
  font-family: ${c.fonts.default};
  font-size: ${c.fontSizes.sm};
  color: ${c.colors.gray400};
  font-weight: ${c.fontWeights.regular};
`,Xo=j.input`
  font-family: ${c.fonts.default};
  font-size: ${c.fontSizes.sm};
  color: ${c.colors.white};
  font-weight: ${c.fontWeights.regular};
  background: transparent;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${c.colors.gray400};
  }
`;Rr.defaultProps={size:"md"};var Nr=l.forwardRef((e,t)=>{var r=e,{prefix:n,size:o="md"}=r,a=Y(r,["prefix","size"]);return w.jsxs(Rr,{size:o,children:[!!n&&w.jsx(Ko,{children:n}),w.jsx(Xo,N({ref:t},a))]})});Nr.displayName="TextInput";var Jo=j.textarea`
  background-color: ${c.colors.gray900};
  padding: ${c.space[3]} ${c.space[4]};
  border-radius: ${c.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${c.colors.gray900};

  font-family: ${c.fonts.default};
  font-size: ${c.fontSizes.sm};
  color: ${c.colors.white};
  font-weight: ${c.fontWeights.regular};
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: 0;
    border-color: ${c.colors.green300};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${c.colors.gray400};
  }
`;Jo.displayName="TextArea";function Dt(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function zr(...e){return t=>{let r=!1;const n=e.map(o=>{const a=Dt(o,t);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let o=0;o<n.length;o++){const a=n[o];typeof a=="function"?a():Dt(e[o],null)}}}}function Ir(...e){return l.useCallback(zr(...e),e)}function Qo(e,t=[]){let r=[];function n(a,s){const i=l.createContext(s),u=r.length;r=[...r,s];const f=d=>{var h;const p=d,{scope:g,children:b}=p,k=Y(p,["scope","children"]),E=((h=g==null?void 0:g[e])==null?void 0:h[u])||i,$=l.useMemo(()=>k,Object.values(k));return w.jsx(E.Provider,{value:$,children:b})};f.displayName=a+"Provider";function m(d,h){var p;const g=((p=h==null?void 0:h[e])==null?void 0:p[u])||i,b=l.useContext(g);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${a}\``)}return[f,m]}const o=()=>{const a=r.map(s=>l.createContext(s));return function(i){const u=(i==null?void 0:i[e])||a;return l.useMemo(()=>({[`__scope${e}`]:B(N({},i),{[e]:u})}),[i,u])}};return o.scopeName=e,[n,ea(o,...t)]}function ea(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const s=n.reduce((i,{useScope:u,scopeName:f})=>{const d=u(a)[`__scope${f}`];return N(N({},i),d)},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return r.scopeName=t.scopeName,r}function Ft(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function jr(e){const t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}function ta({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=ra({defaultProp:t,onChange:r}),a=e!==void 0,s=a?e:n,i=jr(r),u=l.useCallback(f=>{if(a){const d=typeof f=="function"?f(e):f;d!==e&&i(d)}else o(f)},[a,e,o,i]);return[s,u]}function ra({defaultProp:e,onChange:t}){const r=l.useState(e),[n]=r,o=l.useRef(n),a=jr(t);return l.useEffect(()=>{o.current!==n&&(a(n),o.current=n)},[n,o,a]),r}function na(e){const t=l.useRef({value:e,previous:e});return l.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var rt=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{};function oa(e){const[t,r]=l.useState(void 0);return rt(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let s,i;if("borderBoxSize"in a){const u=a.borderBoxSize,f=Array.isArray(u)?u[0]:u;s=f.inlineSize,i=f.blockSize}else s=e.offsetWidth,i=e.offsetHeight;r({width:s,height:i})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function aa(e,t){return l.useReducer((r,n)=>{const o=t[r][n];return o??r},e)}var Mr=e=>{const{present:t,children:r}=e,n=sa(t),o=typeof r=="function"?r({present:n.isPresent}):l.Children.only(r),a=Ir(n.ref,ia(o));return typeof r=="function"||n.isPresent?l.cloneElement(o,{ref:a}):null};Mr.displayName="Presence";function sa(e){const[t,r]=l.useState(),n=l.useRef({}),o=l.useRef(e),a=l.useRef("none"),s=e?"mounted":"unmounted",[i,u]=aa(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return l.useEffect(()=>{const f=$e(n.current);a.current=i==="mounted"?f:"none"},[i]),rt(()=>{const f=n.current,m=o.current;if(m!==e){const h=a.current,p=$e(f);e?u("MOUNT"):p==="none"||(f==null?void 0:f.display)==="none"?u("UNMOUNT"):u(m&&h!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,u]),rt(()=>{var f;if(t){let m;const d=(f=t.ownerDocument.defaultView)!=null?f:window,h=g=>{const k=$e(n.current).includes(g.animationName);if(g.target===t&&k&&(u("ANIMATION_END"),!o.current)){const E=t.style.animationFillMode;t.style.animationFillMode="forwards",m=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=E)})}},p=g=>{g.target===t&&(a.current=$e(n.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(m),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:l.useCallback(f=>{f&&(n.current=getComputedStyle(f)),r(f)},[])}}function $e(e){return(e==null?void 0:e.animationName)||"none"}function ia(e){var t,r;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var Tr=l.forwardRef((e,t)=>{const r=e,{children:n}=r,o=Y(r,["children"]),a=l.Children.toArray(n),s=a.find(ua);if(s){const i=s.props.children,u=a.map(f=>f===s?l.Children.count(i)>1?l.Children.only(null):l.isValidElement(i)?i.props.children:null:f);return w.jsx(nt,B(N({},o),{ref:t,children:l.isValidElement(i)?l.cloneElement(i,void 0,u):null}))}return w.jsx(nt,B(N({},o),{ref:t,children:n}))});Tr.displayName="Slot";var nt=l.forwardRef((e,t)=>{const r=e,{children:n}=r,o=Y(r,["children"]);if(l.isValidElement(n)){const a=fa(n),s=la(o,n.props);return n.type!==l.Fragment&&(s.ref=t?zr(t,a):a),l.cloneElement(n,s)}return l.Children.count(n)>1?l.Children.only(null):null});nt.displayName="SlotClone";var ca=({children:e})=>w.jsx(w.Fragment,{children:e});function ua(e){return l.isValidElement(e)&&e.type===ca}function la(e,t){const r=N({},t);for(const n in t){const o=e[n],a=t[n];/^on[A-Z]/.test(n)?o&&a?r[n]=(...i)=>{a(...i),o(...i)}:o&&(r[n]=o):n==="style"?r[n]=N(N({},o),a):n==="className"&&(r[n]=[o,a].filter(Boolean).join(" "))}return N(N({},e),r)}function fa(e){var t,r;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var da=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Dr=da.reduce((e,t)=>{const r=l.forwardRef((n,o)=>{const a=n,{asChild:s}=a,i=Y(a,["asChild"]),u=s?Tr:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(u,B(N({},i),{ref:o}))});return r.displayName=`Primitive.${t}`,B(N({},e),{[t]:r})},{}),dt="Checkbox",[pa,Na]=Qo(dt),[ha,ma]=pa(dt),Fr=l.forwardRef((e,t)=>{const r=e,{__scopeCheckbox:n,name:o,checked:a,defaultChecked:s,required:i,disabled:u,value:f="on",onCheckedChange:m,form:d}=r,h=Y(r,["__scopeCheckbox","name","checked","defaultChecked","required","disabled","value","onCheckedChange","form"]),[p,g]=l.useState(null),b=Ir(t,C=>g(C)),k=l.useRef(!1),E=p?d||!!p.closest("form"):!0,[$=!1,_]=ta({prop:a,defaultProp:s,onChange:m}),R=l.useRef($);return l.useEffect(()=>{const C=p==null?void 0:p.form;if(C){const S=()=>_(R.current);return C.addEventListener("reset",S),()=>C.removeEventListener("reset",S)}},[p,_]),w.jsxs(ha,{scope:n,state:$,disabled:u,children:[w.jsx(Dr.button,B(N({type:"button",role:"checkbox","aria-checked":U($)?"mixed":$,"aria-required":i,"data-state":Wr($),"data-disabled":u?"":void 0,disabled:u,value:f},h),{ref:b,onKeyDown:Ft(e.onKeyDown,C=>{C.key==="Enter"&&C.preventDefault()}),onClick:Ft(e.onClick,C=>{_(S=>U(S)?!0:!S),E&&(k.current=C.isPropagationStopped(),k.current||C.stopPropagation())})})),E&&w.jsx(ga,{control:p,bubbles:!k.current,name:o,value:f,checked:$,required:i,disabled:u,form:d,style:{transform:"translateX(-100%)"},defaultChecked:U(s)?!1:s})]})});Fr.displayName=dt;var Lr="CheckboxIndicator",Br=l.forwardRef((e,t)=>{const r=e,{__scopeCheckbox:n,forceMount:o}=r,a=Y(r,["__scopeCheckbox","forceMount"]),s=ma(Lr,n);return w.jsx(Mr,{present:o||U(s.state)||s.state===!0,children:w.jsx(Dr.span,B(N({"data-state":Wr(s.state),"data-disabled":s.disabled?"":void 0},a),{ref:t,style:N({pointerEvents:"none"},e.style)}))})});Br.displayName=Lr;var ga=e=>{const t=e,{control:r,checked:n,bubbles:o=!0,defaultChecked:a}=t,s=Y(t,["control","checked","bubbles","defaultChecked"]),i=l.useRef(null),u=na(n),f=oa(r);l.useEffect(()=>{const d=i.current,h=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(h,"checked").set;if(u!==n&&g){const b=new Event("click",{bubbles:o});d.indeterminate=U(n),g.call(d,U(n)?!1:n),d.dispatchEvent(b)}},[u,n,o]);const m=l.useRef(U(n)?!1:n);return w.jsx("input",B(N({type:"checkbox","aria-hidden":!0,defaultChecked:a??m.current},s),{tabIndex:-1,ref:i,style:B(N(N({},e.style),f),{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))};function U(e){return e==="indeterminate"}function Wr(e){return U(e)?"indeterminate":e?"checked":"unchecked"}var ya=Fr,va=Br,ba=j(ya)`
  all: unset;
  width: ${c.space[6]};
  height: ${c.space[6]};
  background-color: ${c.colors.gray900};
  border-radius: ${c.radii.xs};
  border: 2px solid ${c.colors.gray900};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &[data-state='checked'] {
    background-color: ${c.colors.green300};
  }

  &:focus, &[data-state='checked'] {
    border: 2px solid ${c.colors.green300};
  }
`,xa=dr`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,wa=dr`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`,Sa=j(va)`
  color: ${c.colors.white};
  height: ${c.space[4]};
  width: ${c.space[4]};

  &[data-state='checked'] {
    animation: ${xa} 200ms ease-out;
  }
  &[data-state='unchecked'] {
    animation: ${wa} 200ms ease-out;
  }
`;function $a(e){return w.jsx(ba,B(N({},e),{children:w.jsx(Sa,{asChild:!0,children:w.jsx(yr,{weight:"bold"})})}))}$a.displayName="Checkbox";var Ca=j.div``,Ea=j(ft)`
  color: ${c.colors.gray200};
  font-size: ${c.fontSizes.xs};
`,Aa=j.div`
  display: grid;
  grid-template-columns: repeat(${({size:e})=>e}, 1fr);
  gap: ${c.space[2]};
  margin-top: ${c.space[1]};
`,Pa=j.div`
  height: ${c.space[1]};
  border-radius: ${c.radii.px};
  background-color: ${c.colors.gray600};

  ${({active:e})=>e&&`
    background-color: ${c.colors.gray100};
  `}
`;function _a({size:e,currentStep:t=1}){return w.jsxs(Ca,{children:[w.jsxs(Ea,{size:"xs",children:["Passo ",t," de ",e]}),w.jsx(Aa,{size:e,children:Array.from({length:e},(r,n)=>n+1).map(r=>w.jsx(Pa,{active:t>=r},r))})]})}_a.displayName="MultiStep";Nr.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{Go as A,Lo as B,$a as C,kr as H,_a as M,ft as T,Jo as a,Nr as b,gr as c,Or as d};
