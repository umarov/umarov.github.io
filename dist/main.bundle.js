!function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/",s(s.s=1)}([function(t,e,s){"use strict";s.r(e),s.d(e,"defaultConverter",(function(){return J})),s.d(e,"notEqual",(function(){return G})),s.d(e,"UpdatingElement",(function(){return K})),s.d(e,"customElement",(function(){return Q})),s.d(e,"property",(function(){return Z})),s.d(e,"internalProperty",(function(){return tt})),s.d(e,"query",(function(){return et})),s.d(e,"queryAsync",(function(){return st})),s.d(e,"queryAll",(function(){return nt})),s.d(e,"eventOptions",(function(){return ot})),s.d(e,"queryAssignedNodes",(function(){return at})),s.d(e,"html",(function(){return H})),s.d(e,"svg",(function(){return L})),s.d(e,"TemplateResult",(function(){return w})),s.d(e,"SVGTemplateResult",(function(){return P})),s.d(e,"supportsAdoptingStyleSheets",(function(){return lt})),s.d(e,"CSSResult",(function(){return ut})),s.d(e,"unsafeCSS",(function(){return dt})),s.d(e,"css",(function(){return pt})),s.d(e,"LitElement",(function(){return mt}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${o}`);class l{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let o=0,l=-1,u=0;const{strings:h,values:{length:m}}=t;for(;u<m;){const t=r.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)c(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=h[u],s=p.exec(e)[2],n=s.toLowerCase()+"$lit$",r=t.getAttribute(n);t.removeAttribute(n);const i=r.split(a);this.parts.push({type:"attribute",index:l,name:s,strings:i}),u+=i.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const n=t.parentNode,r=e.split(a),i=r.length-1;for(let e=0;e<i;e++){let s,i=r[e];if(""===i)s=d();else{const t=p.exec(i);null!==t&&c(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++l})}""===r[i]?(n.insertBefore(d(),t),s.push(t)):t.data=r[i],u+=i}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&l!==o||(l++,e.insertBefore(d(),t)),o=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(s.push(t),l--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},u=t=>-1!==t.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:s},parts:n}=t,r=document.createTreeWalker(s,133,null,!1);let i=f(n),o=n[i],a=-1,l=0;const c=[];let u=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(c.push(t),null===u&&(u=t)),null!==u&&l++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-l,i=f(n,i),o=n[i]}c.forEach(t=>t.parentNode.removeChild(t))}const m=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},f=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(u(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=new WeakMap,y=t=>"function"==typeof t&&_.has(t),g={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class S{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,l=r.nextNode();for(;o<s.length;)if(i=s[o],u(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=` ${i} `;class w{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const a=p.exec(t);e+=null===a?t+(s?b:o):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class P extends w{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),((t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}})(e,s.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class N{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new T(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(x(t)||!C(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||x(t)&&t===this.value||(this.value=t,y(t)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof S&&this.value.template===e)this.value.update(t.values);else{const s=new S(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const r of t)s=e[n],void 0===s&&(s=new E(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(r),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class O extends N{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends T{}let R=!1;(()=>{try{const t={get capture(){return R=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class V{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=j(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const j=t=>t&&(R?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function U(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new l(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const $=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const q=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,n){const r=e[0];if("."===r){return new O(t,e.slice(1),s).parts}if("@"===r)return[new V(t,e.slice(1),n.eventContext)];if("?"===r)return[new A(t,e.slice(1),s)];return new N(t,e,s).parts}handleTextExpression(t){return new E(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const H=(t,...e)=>new w(t,e,"html",q),L=(t,...e)=>new P(t,e,"svg",q)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,z=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const I=t=>e=>{const s=z(e.type,t);let n=$.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},$.set(s,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(i);if(r=n.keyString.get(o),void 0===r){const s=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(s,t),r=new l(e,s),n.keyString.set(o,r)}return n.stringsArray.set(e.strings,r),r},B=["html","svg"],W=new Set,D=(t,e,s)=>{W.add(t);const n=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{B.forEach(e=>{const s=$.get(z(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),h(t,s)})})})(t);const a=n.content;s?function(t,e,s=null){const{element:{content:n},parts:r}=t;if(null==s)return void n.appendChild(e);const i=document.createTreeWalker(n,133,null,!1);let o=f(r),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===s&&(a=m(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=f(r,o);return}o=f(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const J={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},G=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:G};class K extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Y}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=G){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||J,r="function"==typeof n?n:n.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||J.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=Y){const n=this.constructor,r=n._attributeNameForProperty(t,s);if(void 0!==r){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,r=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}K.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function Z(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):X(t,e)}function tt(t){return Z({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}function et(t){return(e,s)=>{const n={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==s?rt(n,e,s):it(n,e)}}function st(t){return(e,s)=>{const n={async get(){return await this.updateComplete,this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==s?rt(n,e,s):it(n,e)}}function nt(t){return(e,s)=>{const n={get(){return this.renderRoot.querySelectorAll(t)},enumerable:!0,configurable:!0};return void 0!==s?rt(n,e,s):it(n,e)}}const rt=(t,e,s)=>{Object.defineProperty(e,s,t)},it=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function ot(t){return(e,s)=>void 0!==s?((t,e,s)=>{Object.assign(e[s],t)})(t,e,s):((t,e)=>Object.assign(Object.assign({},e),{finisher(s){Object.assign(s.prototype[e.key],t)}}))(t,e)}function at(t="",e=!1){return(s,n)=>{const r={get(){const s="slot"+(t?`[name=${t}]`:""),n=this.renderRoot.querySelector(s);return n&&n.assignedNodes({flatten:e})},enumerable:!0,configurable:!0};return void 0!==n?rt(r,s,n):it(r,s)}}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const lt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol();class ut{constructor(t,e){if(e!==ct)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(lt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const dt=t=>new ut(String(t),ct),pt=(t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof ut)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new ut(s,ct)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const ht={};class mt extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),n=[];s.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?lt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ht&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return ht}}mt.finalized=!0,mt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,i=M.has(e),o=F&&11===e.nodeType&&!!e.host,a=o&&!W.has(n),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let n=M.get(e);void 0===n&&(r(e,e.firstChild),M.set(e,n=new E(Object.assign({templateFactory:U},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:I(n)},s)),a){const t=M.get(l);M.delete(l);const s=t.value instanceof S?t.value.template:void 0;D(n,l,s),r(e,e.firstChild),e.appendChild(l),M.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),s(2),Promise.resolve().then(()=>s(13)),Promise.resolve().then(()=>s(14))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),s(3),s(4),s(5),s(6),s(7),s(8),s(9),s(10),s(11),s(12)},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";var n=this&&this.__decorate||function(t,e,s,n){var r,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(i<3?r(o):i>3?r(e,s,o):r(e,s))||o);return i>3&&o&&Object.defineProperty(e,s,o),o};Object.defineProperty(e,"__esModule",{value:!0}),e.UserProfile=void 0;const r=s(0);let i=(()=>{let t=class extends r.LitElement{constructor(){super(...arguments),this.user={avatar_url:"",bio:"",company:"",created_at:"",html_url:"",location:"",name:""}}connectedCallback(){super.connectedCallback(),this.getUser()}render(){return r.html`
      <div class="mdc-card user-profile">
        <img class="mdc-card__media-item mdc-card__media-item" src="${this.user.avatar_url}" />
        <section class="mdc-card__primary user-card">
          <h2 class="mdc-card__title mdc-card__title--large mdc-typography--headline6">
            ${this.user.name}
          </h2>
          <h3 class="mdc-card__title mdc-typography--subtitle2">
            ${this.user.company}, ${this.user.location}
          </h3>
          <p class="mdc-card__subtitle mdc-typography--body2">
            since ${new Date(this.user.created_at).getFullYear()}
          </p>
        </section>
        <section class="mdc-card__supporting-text">${this.user.bio}</section>
        <section class="mdc-card__actions">
          <button
            class="mdc-button mdc-card__action mdc-card__action--button"
            onclick="window.open('${this.user.html_url}', '_blank');"
          >
            Go to github.com profile
          </button>
        </section>
      </div>
    `}createRenderRoot(){return this}async getUser(){const t=await fetch("https://api.github.com/users/umarov");this.user=await t.json()}};return n([r.property({type:Object})],t.prototype,"user",void 0),t=n([r.customElement("user-profile")],t),t})();e.UserProfile=i},function(t,e,s){"use strict";var n=this&&this.__decorate||function(t,e,s,n){var r,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(i<3?r(o):i>3?r(e,s,o):r(e,s))||o);return i>3&&o&&Object.defineProperty(e,s,o),o};Object.defineProperty(e,"__esModule",{value:!0}),e.MyRepos=void 0;const r=s(0);let i=(()=>{let t=class extends r.LitElement{constructor(){super(...arguments),this.repos=[]}connectedCallback(){super.connectedCallback(),this.getRepos()}goToHomepage(t){return()=>{t&&window.open(t,"_blank")}}render(){return r.html`
      <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
        ${this.repos.map((t,e)=>r.html`
            <li class="mdc-list-item" tabindex="${e}" @click="${this.goToHomepage(t.html_url)}">
              <span class="mdc-list-item__graphic">

                ${t.language?r.html`
                      <img async alt="Image for the ${t.language} language" width="30" src="images/${t.language}.png" />
                    `:""}
              </span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">${t.name}</span>
                <span class="mdc-list-item__secondary-text">
                  ${t.description}
                </span>
              </span>

              ${t.homepage?r.html`
                    <span class="mdc-list-item__meta">
                      <button class="mdc-button mdc-button--outlined repo-homepage-button" @click="${e=>{this.goToHomepage(t.homepage)(),e.stopPropagation()}}">
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label">Home Page</span>
                      </button>
                    </span>
                  `:""}
            </li>
          `)}
      </ul>
    `}createRenderRoot(){return this}async getRepos(){const t=await fetch("https://api.github.com/users/umarov/repos");this.repos=await t.json()}};return n([r.property({type:Array})],t.prototype,"repos",void 0),t=n([r.customElement("my-repos")],t),t})();e.MyRepos=i}]);