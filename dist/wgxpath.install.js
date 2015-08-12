(function(){var h=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function k(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}function l(a){var b=m;function c(){}c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c};var q,fa,ga,ha;function ia(){return h.navigator?h.navigator.userAgent:null}ha=ga=fa=q=!1;var r;if(r=ia()){var ja=h.navigator;q=0==r.lastIndexOf("Opera",0);fa=!q&&(-1!=r.indexOf("MSIE")||-1!=r.indexOf("Trident"));ga=!q&&-1!=r.indexOf("WebKit");ha=!q&&!ga&&!fa&&"Gecko"==ja.product}var s=fa,ka=ha,la=ga;function ma(){var a=h.document;return a?a.documentMode:void 0}var na;
a:{var oa="",u;if(q&&h.opera)var pa=h.opera.version,oa="function"==typeof pa?pa():pa;else if(ka?u=/rv\:([^\);]+)(\)|;)/:s?u=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:la&&(u=/WebKit\/(\S+)/),u)var qa=u.exec(ia()),oa=qa?qa[1]:"";if(s){var ra=ma();if(ra>parseFloat(oa)){na=String(ra);break a}}na=oa}var sa={};
function ta(a){if(!sa[a]){for(var b=0,c=String(na).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",n=d[f]||"",p=RegExp("(\\d*)(\\D*)","g"),v=RegExp("(\\d*)(\\D*)","g");do{var t=p.exec(g)||["","",""],H=v.exec(n)||["","",""];if(0==t[0].length&&0==H[0].length)break;b=((0==t[1].length?0:parseInt(t[1],10))<(0==H[1].length?0:parseInt(H[1],10))?-1:(0==t[1].length?0:parseInt(t[1],10))>
(0==H[1].length?0:parseInt(H[1],10))?1:0)||((0==t[2].length)<(0==H[2].length)?-1:(0==t[2].length)>(0==H[2].length)?1:0)||(t[2]<H[2]?-1:t[2]>H[2]?1:0)}while(0==b)}sa[a]=0<=b}}var ua=h.document,va=ua&&s?ma()||("CSS1Compat"==ua.compatMode?parseInt(na,10):5):void 0;/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var w=s&&!(s&&9<=va),wa=s&&!(s&&8<=va);/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function x(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function xa(a,b){var c=wa&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new x(b,a,b.nodeName,c)}x.prototype.f=function(){return this.a};var y=Array.prototype,ya=y.indexOf?function(a,b,c){return y.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(k(a))return k(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=y.forEach?function(a,b,c){y.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=k(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=y.filter?function(a,b,c){return y.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=k(a)?
a.split(""):a,n=0;n<d;n++)if(n in g){var p=g[n];b.call(c,p,n,a)&&(e[f++]=p)}return e},A=y.reduce?function(a,b,c,d){d&&(b=da(b,d));return y.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;z(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Aa=y.some?function(a,b,c){return y.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=k(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function Ba(a,b){var c;a:{c=a.length;for(var d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:k(a)?a.charAt(c):a[c]}function Ca(a){return y.concat.apply(y,arguments)}function Da(a,b,c){return 2>=arguments.length?y.slice.call(a,b):y.slice.call(a,b,c)};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function B(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(w&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),w&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function C(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}wa&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function D(a,b,c,d,e){return(w?Ea:Fa).call(null,a,b,k(c)?c:null,k(d)?d:null,e||new E)}
function Ea(a,b,c,d,e){if(a instanceof F||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=Ga(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],n=0;b=f[n++];)C(b,c,d)&&g.push(b);f=g}for(n=0;b=f[n++];)"*"==a&&"!"==b.tagName||G(e,b);return e}Ha(a,b,c,d,e);return e}
function Fa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!s?(b=b.getElementsByName(d),z(b,function(b){a.a(b)&&G(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),z(b,function(b){b.className==d&&a.a(b)&&G(e,b)})):a instanceof I?Ha(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.c()),z(b,function(a){C(a,c,d)&&G(e,a)}));return e}
function Ia(a,b,c,d,e){var f;if((a instanceof F||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=Ga(a);if("*"!=g&&(f=za(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=za(f,function(a){return C(a,c,d)}));z(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||G(e,a)});return e}return Ja(a,b,c,d,e)}function Ja(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)C(b,c,d)&&a.a(b)&&G(e,b);return e}
function Ha(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)C(b,c,d)&&a.a(b)&&G(e,b),Ha(a,b,c,d,e)}function Ga(a){if(a instanceof I){if(8==a.b)return"!";if(null===a.b)return"*"}return a.c()};!ka&&!s||s&&s&&9<=va||ka&&ta("1.9.1");s&&ta("9");function Ka(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function La(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(s&&!(s&&9<=va)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Ma(a,b):!c&&Ka(e,b)?-1*Na(a,b):!d&&Ka(f,a)?Na(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:
a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(h.Range.START_TO_END,d)}function Na(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Ma(d,a)}function Ma(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function E(){this.b=this.a=null;this.c=0}function Oa(a){this.a=a;this.next=this.b=null}function Pa(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;)c.a==d.a||c.a instanceof x&&d.a instanceof x&&c.a.f()==d.a.f()?(f=c,c=c.next,d=d.next):0<La(c.a,d.a)?(f=d,d=d.next):(f=c,c=c.next),(f.b=e)?e.next=f:a.a=f,e=f,g++;for(f=c||d;f;)f.b=e,e=e.next=f,g++,f=f.next;a.b=e;a.c=g;return a}function Qa(a,b){var c=new Oa(b);c.next=a.a;a.b?a.a.b=c:a.a=a.b=c;a.a=c;a.c++}
function G(a,b){var c=new Oa(b);c.b=a.b;a.a?a.b.next=c:a.a=a.b=c;a.b=c;a.c++}function Ra(a){return(a=a.a)?a.a:null}E.prototype.i=function(){return this.c};function Sa(a){return(a=Ra(a))?B(a):""}function J(a,b){return new Ta(a,!!b)}function Ta(a,b){this.c=a;this.b=(this.d=b)?a.b:a.a;this.a=null}Ta.prototype.next=function(){var a=this.b;if(null==a)return null;var b=this.a=a;this.b=this.d?a.b:a.next;return b.a};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ua(a){switch(a.nodeType){case 1:return ea(Va,a);case 9:return Ua(a.documentElement);case 11:case 10:case 6:case 12:return Wa;default:return a.parentNode?Ua(a.parentNode):Wa}}function Wa(){return null}function Va(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?Va(a.parentNode,b):null};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function K(a,b,c){this.a=a;this.t=b||1;this.u=c||1}K.prototype.f=function(){return this.a};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function m(a){this.g=a;this.a=this.e=!1;this.b=null}function L(a){return"\n  "+a.toString().split("\n").join("\n  ")}function Xa(a,b){a.e=b}function Ya(a,b){a.a=b}function M(a,b){var c=a.evaluate(b);return c instanceof E?+Sa(c):+c}function N(a,b){var c=a.evaluate(b);return c instanceof E?Sa(c):""+c}function O(a,b){var c=a.evaluate(b);return c instanceof E?!!c.i():!!c};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Za(a){m.call(this,4);this.c=a;Xa(this,Aa(this.c,function(a){return a.e}));Ya(this,Aa(this.c,function(a){return a.a}))}l(Za);Za.prototype.evaluate=function(a){var b=new E;z(this.c,function(c){c=c.evaluate(a);if(!(c instanceof E))throw Error("Path expression must evaluate to NodeSet.");b=Pa(b,c)});return b};Za.prototype.toString=function(){return A(this.c,function(a,b){return a+L(b)},"Union Expression:")};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function $a(a,b){m.call(this,a.g);this.d=a;this.c=b;this.e=a.e;this.a=a.a;if(1==this.c.length){var c=this.c[0];c.m||c.c!=ab||(c=c.j,"*"!=c.c()&&(this.b={name:c.c(),l:null}))}}l($a);function P(){m.call(this,4)}l(P);P.prototype.evaluate=function(a){var b=new E;a=a.f();9==a.nodeType?G(b,a):G(b,a.ownerDocument);return b};P.prototype.toString=function(){return"Root Helper Expression"};function bb(){m.call(this,4)}l(bb);bb.prototype.evaluate=function(a){var b=new E;G(b,a.f());return b};
bb.prototype.toString=function(){return"Context Helper Expression"};
$a.prototype.evaluate=function(a){var b=this.d.evaluate(a);if(!(b instanceof E))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.i();c++){var e=a[c],f=J(b,e.c.a),g;if(e.e||e.c!=cb)if(e.e||e.c!=db)for(g=f.next(),b=e.evaluate(new K(g));null!=(g=f.next());)g=e.evaluate(new K(g)),b=Pa(b,g);else g=f.next(),b=e.evaluate(new K(g));else{for(g=f.next();(b=f.next())&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.evaluate(new K(g))}}return b};
$a.prototype.toString=function(){var a;a="Path Expression:"+L(this.d);if(this.c.length){var b=A(this.c,function(a,b){return a+L(b)},"Steps:");a+=L(b)}return a};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function I(a,b){this.j=a;this.d=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function eb(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}I.prototype.a=function(a){return null===this.b||this.b==a.nodeType};I.prototype.c=function(){return this.j};
I.prototype.toString=function(){var a="Kind Test: "+this.j;null===this.d||(a+=L(this.d));return a};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Q(a,b){this.a=a;this.b=!!b}
function fb(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=J(b),f=b.i(),g,n=0;g=e.next();n++){var p=a.b?f-n:n+1;g=d.evaluate(new K(g,p,f));if("number"==typeof g)p=p==g;else if("string"==typeof g||"boolean"==typeof g)p=!!g;else if(g instanceof E)p=0<g.i();else throw Error("Predicate.evaluate returned an unexpected type.");if(!p){p=e;g=p.c;var v=p.a;if(!v)throw Error("Next must be called at least once before remove.");var t=v.b,v=v.next;t?t.next=v:g.a=v;v?v.b=t:g.b=t;g.c--;p.a=null}}return b}
Q.prototype.i=function(){return this.a.length};Q.prototype.toString=function(){return A(this.a,function(a,b){return a+L(b)},"Predicates:")};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function R(a,b,c,d){m.call(this,4);this.c=a;this.j=b;this.d=c||new Q([]);this.m=!!d;b=0<this.d.a.length?this.d.a[0].b:null;a.b&&b&&(a=b.name,a=w?a.toLowerCase():a,this.b={name:a,l:b.l});a:{a=this.d;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.e||1==c.g||0==c.g){a=!0;break a}a=!1}this.e=a}l(R);
R.prototype.evaluate=function(a){var b=a.f(),c=null,c=this.b,d=null,e=null,f=0;c&&(d=c.name,e=c.l?N(c.l,a):null,f=1);if(this.m)if(this.e||this.c!=gb)if(a=J((new R(hb,new I("node"))).evaluate(a)),b=a.next())for(c=this.k(b,d,e,f);null!=(b=a.next());)c=Pa(c,this.k(b,d,e,f));else c=new E;else c=D(this.j,b,d,e),c=fb(this.d,c,f);else c=this.k(a.f(),d,e,f);return c};R.prototype.k=function(a,b,c,d){a=this.c.c(this.j,a,b,c);return a=fb(this.d,a,d)};
R.prototype.toString=function(){var a;a="Step:"+L("Operator: "+(this.m?"//":"/"));this.c.h&&(a+=L("Axis: "+this.c));a+=L(this.j);if(this.d.i()){var b=A(this.d.a,function(a,b){return a+L(b)},"Predicates:");a+=L(b)}return a};function ib(a,b,c,d){this.h=a;this.c=b;this.a=c;this.b=d}ib.prototype.toString=function(){return this.h};var jb={};function S(a,b,c,d){if(jb.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new ib(a,b,c,!!d);return jb[a]=b}
S("ancestor",function(a,b){for(var c=new E,d=b;d=d.parentNode;)a.a(d)&&Qa(c,d);return c},!0);S("ancestor-or-self",function(a,b){var c=new E,d=b;do a.a(d)&&Qa(c,d);while(d=d.parentNode);return c},!0);
var ab=S("attribute",function(a,b){var c=new E,d=a.c();if("style"==d&&b.style&&w)return G(c,new x(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof I&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)w?f.nodeValue&&G(c,xa(b,f)):G(c,f);else(f=e.getNamedItem(d))&&(w?f.nodeValue&&G(c,xa(b,f)):G(c,f));return c},!1),gb=S("child",function(a,b,c,d,e){return(w?Ia:Ja).call(null,a,b,k(c)?c:null,k(d)?d:null,e||new E)},!1,!0);S("descendant",D,!1,!0);
var hb=S("descendant-or-self",function(a,b,c,d){var e=new E;C(b,c,d)&&a.a(b)&&G(e,b);return D(a,b,c,d,e)},!1,!0),cb=S("following",function(a,b,c,d){var e=new E;do for(var f=b;f=f.nextSibling;)C(f,c,d)&&a.a(f)&&G(e,f),e=D(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);S("following-sibling",function(a,b){for(var c=new E,d=b;d=d.nextSibling;)a.a(d)&&G(c,d);return c},!1);S("namespace",function(){return new E},!1);
var kb=S("parent",function(a,b){var c=new E;if(9==b.nodeType)return c;if(2==b.nodeType)return G(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&G(c,d);return c},!1),db=S("preceding",function(a,b,c,d){var e=new E,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,n=f.length;g<n;g++){var p=[];for(b=f[g];b=b.previousSibling;)p.unshift(b);for(var v=0,t=p.length;v<t;v++)b=p[v],C(b,c,d)&&a.a(b)&&G(e,b),e=D(a,b,c,d,e)}return e},!0,!0);
S("preceding-sibling",function(a,b){for(var c=new E,d=b;d=d.previousSibling;)a.a(d)&&Qa(c,d);return c},!0);var lb=S("self",function(a,b){var c=new E;a.a(b)&&G(c,b);return c},!1);/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function T(a,b,c){m.call(this,a.g);this.c=a;this.d=b;this.j=c;this.e=b.e||c.e;this.a=b.a||c.a;this.c==mb&&(c.a||c.e||4==c.g||0==c.g||!b.b?b.a||b.e||4==b.g||0==b.g||!c.b||(this.b={name:c.b.name,l:b}):this.b={name:b.b.name,l:c})}l(T);
function U(a,b,c,d,e){b=b.evaluate(d);c=c.evaluate(d);var f;if(b instanceof E&&c instanceof E){e=J(b);for(d=e.next();d;d=e.next())for(b=J(c),f=b.next();f;f=b.next())if(a(B(d),B(f)))return!0;return!1}if(b instanceof E||c instanceof E){b instanceof E?e=b:(e=c,c=b);e=J(e);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":d=+B(d);break;case "boolean":d=!!B(d);break;case "string":d=B(d);break;default:throw Error("Illegal primitive type for comparison.");}if(a(d,c))return!0}return!1}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}T.prototype.evaluate=function(a){return this.c.k(this.d,this.j,a)};T.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+L(this.d);return a+=L(this.j)};function nb(a,b,c,d){this.a=a;this.p=b;this.g=c;this.k=d}nb.prototype.toString=function(){return this.a};var ob={};
function V(a,b,c,d){if(ob.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new nb(a,b,c,d);return ob[a.toString()]=a}V("div",6,1,function(a,b,c){return M(a,c)/M(b,c)});V("mod",6,1,function(a,b,c){return M(a,c)%M(b,c)});V("*",6,1,function(a,b,c){return M(a,c)*M(b,c)});V("+",5,1,function(a,b,c){return M(a,c)+M(b,c)});V("-",5,1,function(a,b,c){return M(a,c)-M(b,c)});V("<",4,2,function(a,b,c){return U(function(a,b){return a<b},a,b,c)});
V(">",4,2,function(a,b,c){return U(function(a,b){return a>b},a,b,c)});V("<=",4,2,function(a,b,c){return U(function(a,b){return a<=b},a,b,c)});V(">=",4,2,function(a,b,c){return U(function(a,b){return a>=b},a,b,c)});var mb=V("=",3,2,function(a,b,c){return U(function(a,b){return a==b},a,b,c,!0)});V("!=",3,2,function(a,b,c){return U(function(a,b){return a!=b},a,b,c,!0)});V("and",2,2,function(a,b,c){return O(a,c)&&O(b,c)});V("or",1,2,function(a,b,c){return O(a,c)||O(b,c)});/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function pb(a){m.call(this,1);this.c=a;this.e=a.e;this.a=a.a}l(pb);pb.prototype.evaluate=function(a){return-M(this.c,a)};pb.prototype.toString=function(){return"Unary Expression: -"+L(this.c)};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function qb(a){m.call(this,3);this.c=a.substring(1,a.length-1)}l(qb);qb.prototype.evaluate=function(){return this.c};qb.prototype.toString=function(){return"Literal: "+this.c};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function rb(a){m.call(this,1);this.c=a}l(rb);rb.prototype.evaluate=function(){return this.c};rb.prototype.toString=function(){return"Number: "+this.c};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function F(a,b){this.h=a.toLowerCase();this.d=b?b.toLowerCase():"http://www.w3.org/1999/xhtml"}F.prototype.a=function(a){var b=a.nodeType,c=a.nodeName;if(1!=b&&2!=b)return!1;if("*"==this.h)return!0;c=c.split(":").pop();return this.h!=c.toLowerCase()?!1:this.d==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};F.prototype.c=function(){return this.h};F.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.d?"":this.d+":")+this.h};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function sb(a,b){if(b.length<a.o)throw Error("Function "+a.h+" expects at least"+a.o+" arguments, "+b.length+" given");if(null!==a.n&&b.length>a.n)throw Error("Function "+a.h+" expects at most "+a.n+" arguments, "+b.length+" given");a.s&&z(b,function(b,d){if(4!=b.g)throw Error("Argument "+d+" to function "+a.h+" is not of type Nodeset: "+b);});m.call(this,a.g);this.d=a;this.c=b;Xa(this,a.e||Aa(b,function(a){return a.e}));Ya(this,a.r&&!b.length||a.q&&!!b.length||Aa(b,function(a){return a.a}))}l(sb);
sb.prototype.evaluate=function(a){return this.d.k.apply(null,Ca(a,this.c))};sb.prototype.toString=function(){var a="Function: "+this.d;if(this.c.length)var b=A(this.c,function(a,b){return a+L(b)},"Arguments:"),a=a+L(b);return a};function tb(a,b,c,d,e,f,g,n,p){this.h=a;this.g=b;this.e=c;this.r=d;this.q=e;this.k=f;this.o=g;this.n=void 0!==n?n:g;this.s=!!p}tb.prototype.toString=function(){return this.h};var ub={};
function W(a,b,c,d,e,f,g,n){if(ub.hasOwnProperty(a))throw Error("Function already created: "+a+".");ub[a]=new tb(a,b,c,d,!1,e,f,g,n)}W("boolean",2,!1,!1,function(a,b){return O(b,a)},1);W("ceiling",1,!1,!1,function(a,b){return Math.ceil(M(b,a))},1);W("concat",3,!1,!1,function(a,b){var c=Da(arguments,1);return A(c,function(b,c){return b+N(c,a)},"")},2,null);W("contains",2,!1,!1,function(a,b,c){b=N(b,a);a=N(c,a);return-1!=b.indexOf(a)},2);
W("count",1,!1,!1,function(a,b){return b.evaluate(a).i()},1,1,!0);W("false",2,!1,!1,function(){return!1},0);W("floor",1,!1,!1,function(a,b){return Math.floor(M(b,a))},1);
W("id",4,!1,!1,function(a,b){function c(a){if(w){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return Ba(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.f(),e=9==d.nodeType?d:d.ownerDocument,d=N(b,a).split(/\s+/),f=[];z(d,function(a){a=c(a);!a||0<=ya(f,a)||f.push(a)});f.sort(La);var g=new E;z(f,function(a){G(g,a)});return g},1);W("lang",2,!1,!1,function(){return!1},1);
W("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.u},0);W("local-name",3,!1,!0,function(a,b){var c=b?Ra(b.evaluate(a)):a.f();return c?c.localName||c.nodeName.toLowerCase():""},0,1,!0);W("name",3,!1,!0,function(a,b){var c=b?Ra(b.evaluate(a)):a.f();return c?c.nodeName.toLowerCase():""},0,1,!0);W("namespace-uri",3,!0,!1,function(){return""},0,1,!0);
W("normalize-space",3,!1,!0,function(a,b){return(b?N(b,a):B(a.f())).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);W("not",2,!1,!1,function(a,b){return!O(b,a)},1);W("number",1,!1,!0,function(a,b){return b?M(b,a):+B(a.f())},0,1);W("position",1,!0,!1,function(a){return a.t},0);W("round",1,!1,!1,function(a,b){return Math.round(M(b,a))},1);W("starts-with",2,!1,!1,function(a,b,c){b=N(b,a);a=N(c,a);return 0==b.lastIndexOf(a,0)},2);W("string",3,!1,!0,function(a,b){return b?N(b,a):B(a.f())},0,1);
W("string-length",1,!1,!0,function(a,b){return(b?N(b,a):B(a.f())).length},0,1);W("substring",3,!1,!1,function(a,b,c,d){c=M(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?M(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=N(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);W("substring-after",3,!1,!1,function(a,b,c){b=N(b,a);a=N(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
W("substring-before",3,!1,!1,function(a,b,c){b=N(b,a);a=N(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);W("sum",1,!1,!1,function(a,b){for(var c=J(b.evaluate(a)),d=0,e=c.next();e;e=c.next())d+=+B(e);return d},1,1,!0);W("translate",3,!1,!1,function(a,b,c,d){b=N(b,a);c=N(c,a);var e=N(d,a);a=[];for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);W("true",2,!1,!1,function(){return!0},0);/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function vb(a,b){if(b.i()&&4!=a.g)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");m.call(this,a.g);this.c=a;this.d=b;this.e=a.e;this.a=a.a}l(vb);vb.prototype.evaluate=function(a){a=this.c.evaluate(a);return fb(this.d,a)};vb.prototype.toString=function(){var a;a="Filter:"+L(this.c);return a+=L(this.d)};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function wb(a,b){this.a=a;this.b=b}function xb(a){for(var b,c=[];;){X(a,"Missing right hand side of binary expression.");b=yb(a);var d=a.a.next();if(!d)break;var e=(d=ob[d]||null)&&d.p;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].p;)b=new T(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new T(c.pop(),c.pop(),b);return b}function X(a,b){if(a.a.b.length<=a.a.a)throw Error(b);}function zb(a,b){var c=a.a.next();if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function Ab(a){a=a.a.next();if(")"!=a)throw Error("Bad token: "+a);}function Bb(a){a=a.a.next();if(2>a.length)throw Error("Unclosed literal string");return new qb(a)}function Cb(a){var b=a.a.next(),c=b.indexOf(":");if(-1==c)return new F(b);var d=b.substring(0,c);a=a.b(d);if(!a)throw Error("Namespace prefix not declared: "+d);b=b.substr(c+1);return new F(b,a)}
function Db(a){var b,c=[],d;if("/"==Y(a.a)||"//"==Y(a.a)){b=a.a.next();d=Y(a.a);if("/"==b&&(a.a.b.length<=a.a.a||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new P;d=new P;X(a,"Missing next location step.");b=Eb(a,b);c.push(b)}else{a:{b=Y(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":a.a.next();b=xb(a);X(a,'unclosed "("');zb(a,")");break;case '"':case "'":b=Bb(a);break;default:if(isNaN(+b))if(!eb(b)&&/(?![0-9])[\w]/.test(d)&&
"("==Y(a.a,1)){b=a.a.next();b=ub[b]||null;a.a.next();for(d=[];")"!=Y(a.a);){X(a,"Missing function argument list.");d.push(xb(a));if(","!=Y(a.a))break;a.a.next()}X(a,"Unclosed function argument list.");Ab(a);b=new sb(b,d)}else{b=null;break a}else b=new rb(+a.a.next())}"["==Y(a.a)&&(d=new Q(Fb(a)),b=new vb(b,d))}if(b)if("/"==Y(a.a)||"//"==Y(a.a))d=b;else return b;else b=Eb(a,"/"),d=new bb,c.push(b)}for(;"/"==Y(a.a)||"//"==Y(a.a);)b=a.a.next(),X(a,"Missing next location step."),b=Eb(a,b),c.push(b);return new $a(d,
c)}
function Eb(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==Y(a.a))return d=new R(lb,new I("node")),a.a.next(),d;if(".."==Y(a.a))return d=new R(kb,new I("node")),a.a.next(),d;var f;if("@"==Y(a.a))f=ab,a.a.next(),X(a,"Missing attribute name");else if("::"==Y(a.a,1)){if(!/(?![0-9])[\w]/.test(Y(a.a).charAt(0)))throw Error("Bad token: "+a.a.next());c=a.a.next();f=jb[c]||null;if(!f)throw Error("No axis with name: "+c);a.a.next();X(a,"Missing node name")}else f=gb;
c=Y(a.a);if(/(?![0-9])[\w]/.test(c.charAt(0)))if("("==Y(a.a,1)){if(!eb(c))throw Error("Invalid node type: "+c);c=a.a.next();if(!eb(c))throw Error("Invalid type name: "+c);zb(a,"(");X(a,"Bad nodetype");e=Y(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=Bb(a);X(a,"Bad nodetype");Ab(a);c=new I(c,g)}else c=Cb(a);else if("*"==c)c=Cb(a);else throw Error("Bad token: "+a.a.next());e=new Q(Fb(a),f.a);return d||new R(f,c,e,"//"==b)}
function Fb(a){for(var b=[];"["==Y(a.a);){a.a.next();X(a,"Missing predicate expression.");var c=xb(a);b.push(c);X(a,"Unclosed predicate expression.");zb(a,"]")}return b}function yb(a){if("-"==Y(a.a))return a.a.next(),new pb(yb(a));var b=Db(a);if("|"!=Y(a.a))a=b;else{for(b=[b];"|"==a.a.next();)X(a,"Missing next union location path."),b.push(Db(a));a.a.a--;a=new Za(b)}return a};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Gb(a){this.b=a;this.a=0}function Hb(a){a=a.match(Ib);for(var b=0;b<a.length;b++)Jb.test(a[b])&&a.splice(b,1);return new Gb(a)}var Ib=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w\\.-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),Jb=/^\s/;function Y(a,b){return a.b[a.a+(b||0)]}Gb.prototype.next=function(){return this.b[this.a++]};/*

 Copyright 2014 Software Freedom Conservancy

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Kb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=Hb(a);if(c.b.length<=c.a)throw Error("Invalid XPath expression.");b?"function"==aa(b)||(b=da(b.lookupNamespaceURI,b)):b=function(){return null};var d=xb(new wb(c,b));if(!(c.b.length<=c.a))throw Error("Bad token: "+c.next());this.evaluate=function(a,b){var c=d.evaluate(new K(a));return new Z(c,b)}}
function Z(a,b){if(0==b)if(a instanceof E)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof E))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof E?Sa(a):""+a;break;case 1:this.numberValue=a instanceof E?+Sa(a):+a;break;case 3:this.booleanValue=a instanceof E?0<a.i():!!a;break;case 4:case 5:case 6:case 7:var d=
J(a);c=[];for(var e=d.next();e;e=d.next())c.push(e instanceof x?e.f():e);this.snapshotLength=a.i();this.invalidIteratorState=!1;break;case 8:case 9:d=Ra(a);this.singleNodeValue=d instanceof x?d.f():d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=
c.length||0>a?null:c[a]}}Z.ANY_TYPE=0;Z.NUMBER_TYPE=1;Z.STRING_TYPE=2;Z.BOOLEAN_TYPE=3;Z.UNORDERED_NODE_ITERATOR_TYPE=4;Z.ORDERED_NODE_ITERATOR_TYPE=5;Z.UNORDERED_NODE_SNAPSHOT_TYPE=6;Z.ORDERED_NODE_SNAPSHOT_TYPE=7;Z.ANY_UNORDERED_NODE_TYPE=8;Z.FIRST_ORDERED_NODE_TYPE=9;function Lb(a){this.lookupNamespaceURI=Ua(a)}
function Mb(a){a=a||h;var b=a.document;b.evaluate||(a.XPathResult=Z,b.evaluate=function(a,b,e,f){return(new Kb(a,e)).evaluate(b,f)},b.createExpression=function(a,b){return new Kb(a,b)},b.createNSResolver=function(a){return new Lb(a)})}var Nb=["wgxpath","install"],$=h;Nb[0]in $||!$.execScript||$.execScript("var "+Nb[0]);for(var Ob;Nb.length&&(Ob=Nb.shift());)Nb.length||void 0===Mb?$=$[Ob]?$[Ob]:$[Ob]={}:$[Ob]=Mb;})()
