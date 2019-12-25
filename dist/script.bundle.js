!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e,i){"use strict";
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */e.a=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}}},function(t,e,i){"use strict";var s=i(0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class r{static attachTo(t){return new r(t,new s.a)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}e.a=r},function(t,e,i){"use strict";var s=i(1);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var r=i(0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const a={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},n={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},o={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let l,c;function d(t=window,e=!1){if(void 0===c||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){return e=!0}})}catch(t){}c=e}return!!c&&{passive:!0}}const h=["touchstart","pointerdown","mousedown","keydown"],_=["touchend","pointerup","mouseup","contextmenu"];let u=[];class p extends r.a{static get cssClasses(){return a}static get strings(){return n}static get numbers(){return o}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(p.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=p.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(p.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(p.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=p.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(h.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):_.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){h.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),_.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=p;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=void 0===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&u.length>0&&u.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(void 0!==t&&(u.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{u=[],e.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=p.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:s}=p.cssClasses,{DEACTIVATION_TIMEOUT_MS:r}=p.numbers;this.layoutInternal_();let a="",n="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();a=`${t.x}px, ${t.y}px`,n=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,a),this.adapter_.updateCssVariable(e,n),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),r)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:s,y:r}=e,a=s+i.left,n=r+i.top;let o,l;return"touchstart"===t.type?(o=(t=t).changedTouches[0].pageX-a,l=t.changedTouches[0].pageY-n):(o=(t=t).pageX-a,l=t.pageY-n),{x:o,y:l}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=p.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},o.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=p.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,p.numbers.TAP_DELAY_MS)}deactivate_(){const t=this.activationState_;if(!t.isActivated)return;const e=Object.assign({},t);t.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(e)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_({wasActivatedByPointer:t,wasElementMadeActive:e}){(t||e)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+p.numbers.PADDING})(),this.initialSize_=Math.floor(t*p.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:s}=p.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=p.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(p.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(p.cssClasses.BG_FOCUSED))}}var m=p;i.d(e,"a",function(){return g}),i.d(e,"b",function(){return m});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class g extends s.a{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new g(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=function(t){const e=["matches","webkitMatchesSelector","msMatchesSelector"];let i="matches";for(let s=0;s<e.length;s++){const r=e[s];if(r in t){i=r;break}}return i}(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let i=l;if("boolean"==typeof l&&!e)return i;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const s=t.CSS.supports("--css-vars","yes"),r=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!s&&!r||function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const s=t.getComputedStyle(i),r=null!==s&&"solid"===s.borderTopStyle;return i.remove(),r}(t)),e||(l=i),i})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,d()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,d()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,d()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,d()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new m(g.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class f{}f.prototype.root_,f.prototype.unbounded,f.prototype.disabled},function(t,e,i){"use strict";var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(r,a){function n(t){try{l(s.next(t))}catch(t){a(t)}}function o(t){try{l(s.throw(t))}catch(t){a(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(n,o)}l((s=s.apply(t,e||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0});const r=i(16);i(4);const a=i(15),n=i(17),o="https://api.github.com/users/umarov/repos",l="https://api.github.com/users/umarov",c="mdc-tab--active",d="mdc-tab-indicator--active",h="data-state-name";function _(){return s(this,void 0,void 0,function*(){const t=yield fetch(o);return yield t.json()})}function u(){return s(this,void 0,void 0,function*(){const t=yield fetch(l);return yield t.json()})}function p(t){return r.html`
    <li class="mdc-grid-tile">
      <div class="mdc-grid-tile__primary">
        ${t.language?r.html`<img class="mdc-grid-tile__primary-content" src="images/${t.language}.png" />`:r.html`
            <h3>${t.name}</h3>
          `}
      </div>
      <span class="mdc-grid-tile__secondary" data-repo-url="${t.html_url}">
        <span class="mdc-grid-tile__title">${t.name}</span>
        <br />
        <button
          class="mdc-button mdc-button--dense" style="--mdc-theme-primary: white"
          data-repo-url="${t.html_url}">
          Repo
        </button>
        ${t.homepage?r.html`<button
            class="mdc-button mdc-button--outlined mdc-button--dense"
            style="--mdc-theme-primary: white; padding: 0px 10px 0px 10px;"
            data-repo-url="${t.homepage}">
            Homepage
          </button>`:""}
      </span>
    </li>
  `}function m(t){if(t){const e=t.getAttribute("data-repo-url");return e||m(t.parentElement)}return""}function g(t){t.addEventListener("click",t=>{window.open(m(t.target),"_blank")}),window.onbeforeunload=(()=>{t.removeEventListener("click",t=>{window.open(m(t.target),"_blank")})})}function f(t){const e=document.querySelector("#github-repos");requestAnimationFrame(()=>{r.render(function(t){return r.html`
    ${t.map(p)}
  `}(t),e),Array.from(document.querySelectorAll(".mdc-grid-tile__secondary")).map(g)})}!function(){new a.MDCTabBar(document.querySelector(".mdc-tab-bar")).toString();const t=Array.from(document.querySelectorAll(".mdc-tab")),e=Array.from(document.querySelectorAll(".mdc-tab-indicator"));t&&t.map(i=>{i.addEventListener("click",i=>{const s=i.target.parentElement,r=s.getAttribute(h),a=s.querySelector(".mdc-tab-indicator"),n=t.find(t=>t!==s);if(a&&(a.classList.add(d),e.filter(t=>t!==a).map(t=>t.classList.remove(d))),s.classList.add(c),document.querySelector(`.${r}`).classList.remove("hidden"),n){n.classList.remove(c);const t=n.getAttribute(h);t&&document.querySelector(`.${t}`).classList.add("hidden")}r&&(window.location.hash=r)})})}(),function(){return s(this,void 0,void 0,function*(){return Promise.all([_(),u()])})}().then(([t,e])=>{!function(t){const e=document.querySelector("#profile");r.render(r.html`
      <div class="mdc-card user-profile">
        <img class="mdc-card__media-item mdc-card__media-item" src="${t.avatar_url}" />
        <section class="mdc-card__primary user-card">
          <h2 class="mdc-card__title mdc-card__title--large mdc-typography--headline6">
            ${t.name}
          </h2>
          <h3 class="mdc-card__title mdc-typography--subtitle2">
            ${t.company}, ${t.location}
          </h3>
          <p class="mdc-card__subtitle mdc-typography--body2">
            since ${new Date(t.created_at).getFullYear()}
          </p>
        </section>
        <section class="mdc-card__supporting-text">${t.bio}</section>
        <section class="mdc-card__actions">
          <button
            class="mdc-button mdc-card__action mdc-card__action--button"
            onclick="window.open('${t.html_url}', '_blank');"
          >
            Go to github.com profile
          </button>
        </section>
      </div>
    `,e)}(e),f(t)}),document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".mdc-top-app-bar");if(t){new n.MDCTopAppBar(t).toString()}const e=window.location.hash.substring(1),i=e.length>0?e:"profile",s=document.querySelector(`.${i}`);s&&s.classList.remove("hidden");const r=Array.from(document.querySelectorAll(".mdc-tab")).find(t=>t.getAttribute("data-state-name")===i);if(r){r.classList.add("mdc-tab--active");const t=r.querySelector(".mdc-tab-indicator");t&&t.classList.add(d)}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(5),i(6),i(7),i(8),i(9),i(10),i(11),i(12),i(13),i(14)},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var s=i(1),r=i(2);var a=i(0);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const n={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},o={CONTENT_SELECTOR:".mdc-tab-indicator__content"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class l extends a.a{static get cssClasses(){return n}static get strings(){return o}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},computeContentClientRect:()=>{},setContentStyleProperty:()=>{}}}constructor(t){super(Object.assign(l.defaultAdapter,t))}computeContentClientRect(){return this.adapter_.computeContentClientRect()}activate(t){}deactivate(){}}var c=l;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=class extends c{activate(t){if(!t)return void this.adapter_.addClass(c.cssClasses.ACTIVE);const e=this.computeContentClientRect(),i=t.width/e.width,s=t.left-e.left;this.adapter_.addClass(c.cssClasses.NO_TRANSITION),this.adapter_.setContentStyleProperty("transform",`translateX(${s}px) scaleX(${i})`),this.computeContentClientRect(),this.adapter_.removeClass(c.cssClasses.NO_TRANSITION),this.adapter_.addClass(c.cssClasses.ACTIVE),this.adapter_.setContentStyleProperty("transform","")}deactivate(){this.adapter_.removeClass(c.cssClasses.ACTIVE)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var h=class extends c{activate(){this.adapter_.addClass(c.cssClasses.ACTIVE)}deactivate(){this.adapter_.removeClass(c.cssClasses.ACTIVE)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class _ extends s.a{static attachTo(t){return new _(t)}constructor(...t){super(...t),this.content_}initialize(){this.content_=this.root_.querySelector(c.strings.CONTENT_SELECTOR)}computeContentClientRect(){return this.foundation_.computeContentClientRect()}getDefaultFoundation(){const t=Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),computeContentClientRect:()=>this.content_.getBoundingClientRect(),setContentStyleProperty:(t,e)=>this.content_.style.setProperty(t,e)});return this.root_.classList.contains(c.cssClasses.FADE)?new h(t):new d(t)}activate(t){this.foundation_.activate(t)}deactivate(){this.foundation_.deactivate()}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const u={ACTIVE:"mdc-tab--active"},p={ARIA_SELECTED:"aria-selected",RIPPLE_SELECTOR:".mdc-tab__ripple",CONTENT_SELECTOR:".mdc-tab__content",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator",TABINDEX:"tabIndex",INTERACTED_EVENT:"MDCTab:interacted"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class m extends a.a{static get cssClasses(){return u}static get strings(){return p}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},activateIndicator:()=>{},deactivateIndicator:()=>{},notifyInteracted:()=>{},getOffsetLeft:()=>{},getOffsetWidth:()=>{},getContentOffsetLeft:()=>{},getContentOffsetWidth:()=>{},focus:()=>{}}}constructor(t){super(Object.assign(m.defaultAdapter,t)),this.focusOnActivate_=!0}handleClick(){this.adapter_.notifyInteracted()}isActive(){return this.adapter_.hasClass(u.ACTIVE)}setFocusOnActivate(t){this.focusOnActivate_=t}activate(t){this.adapter_.addClass(u.ACTIVE),this.adapter_.setAttr(p.ARIA_SELECTED,"true"),this.adapter_.setAttr(p.TABINDEX,"0"),this.adapter_.activateIndicator(t),this.focusOnActivate_&&this.adapter_.focus()}deactivate(){this.isActive()&&(this.adapter_.removeClass(u.ACTIVE),this.adapter_.setAttr(p.ARIA_SELECTED,"false"),this.adapter_.setAttr(p.TABINDEX,"-1"),this.adapter_.deactivateIndicator())}computeDimensions(){const t=this.adapter_.getOffsetWidth(),e=this.adapter_.getOffsetLeft(),i=this.adapter_.getContentOffsetWidth(),s=this.adapter_.getContentOffsetLeft();return{rootLeft:e,rootRight:e+t,contentLeft:e+s,contentRight:e+s+i}}}var g=m;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class f extends s.a{constructor(...t){super(...t),this.ripple_,this.tabIndicator_,this.content_,this.handleClick_}static attachTo(t){return new f(t)}initialize(t=((t,e)=>new r.a(t,e)),e=(t=>new _(t))){const i=this.root_.querySelector(g.strings.RIPPLE_SELECTOR),s=Object.assign(r.a.createAdapter(this),{addClass:t=>i.classList.add(t),removeClass:t=>i.classList.remove(t),updateCssVariable:(t,e)=>i.style.setProperty(t,e)}),a=new r.b(s);this.ripple_=t(this.root_,a);const n=this.root_.querySelector(g.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=e(n),this.content_=this.root_.querySelector(g.strings.CONTENT_SELECTOR)}initialSyncWithDOM(){this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.listen("click",this.handleClick_)}destroy(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),super.destroy()}getDefaultFoundation(){return new g({setAttr:(t,e)=>this.root_.setAttribute(t,e),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),activateIndicator:t=>this.tabIndicator_.activate(t),deactivateIndicator:()=>this.tabIndicator_.deactivate(),notifyInteracted:()=>this.emit(g.strings.INTERACTED_EVENT,{tab:this},!0),getOffsetLeft:()=>this.root_.offsetLeft,getOffsetWidth:()=>this.root_.offsetWidth,getContentOffsetLeft:()=>this.content_.offsetLeft,getContentOffsetWidth:()=>this.content_.offsetWidth,focus:()=>this.root_.focus()})}get active(){return this.foundation_.isActive()}set focusOnActivate(t){this.foundation_.setFocusOnActivate(t)}activate(t){this.foundation_.activate(t)}deactivate(){this.foundation_.deactivate()}computeIndicatorClientRect(){return this.tabIndicator_.computeContentClientRect()}computeDimensions(){return this.foundation_.computeDimensions()}focus(){this.root_.focus()}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const v={ANIMATING:"mdc-tab-scroller--animating",SCROLL_TEST:"mdc-tab-scroller__test",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll"},S={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};var T=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{constructor(t){this.adapter_=t}getScrollPositionRTL(t){}scrollToRTL(t){}incrementScrollRTL(t){}getAnimatingScrollPosition(t,e){}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var A=class extends T{getScrollPositionRTL(){const t=this.adapter_.getScrollAreaScrollLeft(),{right:e}=this.calculateScrollEdges_();return Math.round(e-t)}scrollToRTL(t){const e=this.calculateScrollEdges_(),i=this.adapter_.getScrollAreaScrollLeft(),s=this.clampScrollValue_(e.right-t);return{finalScrollPosition:s,scrollDelta:s-i}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e-t);return{finalScrollPosition:i,scrollDelta:i-e}}getAnimatingScrollPosition(t){return t}calculateScrollEdges_(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E=class extends T{getScrollPositionRTL(t){const e=this.adapter_.getScrollAreaScrollLeft();return Math.round(t-e)}scrollToRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(-t);return{finalScrollPosition:i,scrollDelta:i-e}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e-t);return{finalScrollPosition:i,scrollDelta:i-e}}getAnimatingScrollPosition(t,e){return t-e}calculateScrollEdges_(){const t=this.adapter_.getScrollContentOffsetWidth();return{left:this.adapter_.getScrollAreaOffsetWidth()-t,right:0}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var C=class extends T{getScrollPositionRTL(t){const e=this.adapter_.getScrollAreaScrollLeft();return Math.round(e-t)}scrollToRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(t);return{finalScrollPosition:i,scrollDelta:e-i}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e+t);return{finalScrollPosition:i,scrollDelta:e-i}}getAnimatingScrollPosition(t,e){return t+e}calculateScrollEdges_(){return{left:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth(),right:0}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class b extends a.a{static get cssClasses(){return v}static get strings(){return S}static get defaultAdapter(){return{eventTargetMatchesSelector:()=>{},addClass:()=>{},removeClass:()=>{},addScrollAreaClass:()=>{},setScrollAreaStyleProperty:()=>{},setScrollContentStyleProperty:()=>{},getScrollContentStyleValue:()=>{},setScrollAreaScrollLeft:()=>{},getScrollAreaScrollLeft:()=>{},getScrollContentOffsetWidth:()=>{},getScrollAreaOffsetWidth:()=>{},computeScrollAreaClientRect:()=>{},computeScrollContentClientRect:()=>{},computeHorizontalScrollbarHeight:()=>{}}}constructor(t){super(Object.assign(b.defaultAdapter,t)),this.isAnimating_=!1,this.rtlScrollerInstance_}init(){const t=this.adapter_.computeHorizontalScrollbarHeight();this.adapter_.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter_.addScrollAreaClass(b.cssClasses.SCROLL_AREA_SCROLL)}getScrollPosition(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();const t=this.calculateCurrentTranslateX_();return this.adapter_.getScrollAreaScrollLeft()-t}handleInteraction(){this.isAnimating_&&this.stopScrollAnimation_()}handleTransitionEnd(t){this.isAnimating_&&this.adapter_.eventTargetMatchesSelector(t.target,b.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter_.removeClass(b.cssClasses.ANIMATING))}incrementScroll(t){if(0!==t)return this.isRTL_()?this.incrementScrollRTL_(t):void this.incrementScroll_(t)}scrollTo(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)}getRTLScroller(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_}calculateCurrentTranslateX_(){const t=this.adapter_.getScrollContentStyleValue("transform");if("none"===t)return 0;const e=/\((.+)\)/.exec(t)[1].split(",");return parseFloat(e[4])}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)}computeCurrentScrollPositionRTL_(){const t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)}calculateScrollEdges_(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}}scrollTo_(t){const e=this.getScrollPosition(),i=this.clampScrollValue_(t),s=i-e;this.animate_({finalScrollPosition:i,scrollDelta:s})}scrollToRTL_(t){const e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)}incrementScroll_(t){const e=this.getScrollPosition(),i=t+e,s=this.clampScrollValue_(i),r=s-e;this.animate_({finalScrollPosition:s,scrollDelta:r})}incrementScrollRTL_(t){const e=this.getRTLScroller().incrementScrollRTL(t);this.animate_(e)}animate_(t){0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter_.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter_.setScrollContentStyleProperty("transform",`translateX(${t.scrollDelta}px)`),this.adapter_.computeScrollAreaClientRect(),requestAnimationFrame(()=>{this.adapter_.addClass(b.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","none")}),this.isAnimating_=!0)}stopScrollAnimation_(){this.isAnimating_=!1;const t=this.getAnimatingScrollPosition_();this.adapter_.removeClass(b.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter_.setScrollAreaScrollLeft(t)}getAnimatingScrollPosition_(){const t=this.calculateCurrentTranslateX_(),e=this.adapter_.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t}rtlScrollerFactory_(){const t=this.adapter_.getScrollAreaScrollLeft();this.adapter_.setScrollAreaScrollLeft(t-1);const e=this.adapter_.getScrollAreaScrollLeft();if(e<0)return this.adapter_.setScrollAreaScrollLeft(t),new E(this.adapter_);const i=this.adapter_.computeScrollAreaClientRect(),s=this.adapter_.computeScrollContentClientRect(),r=Math.round(s.right-i.right);return this.adapter_.setScrollAreaScrollLeft(t),r===e?new C(this.adapter_):new A(this.adapter_)}isRTL_(){return"rtl"===this.adapter_.getScrollContentStyleValue("direction")}}var y=b;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let L;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class I extends s.a{static attachTo(t){return new I(t)}constructor(...t){super(...t),this.content_,this.area_,this.handleInteraction_,this.handleTransitionEnd_}initialize(){this.area_=this.root_.querySelector(y.strings.AREA_SELECTOR),this.content_=this.root_.querySelector(y.strings.CONTENT_SELECTOR)}initialSyncWithDOM(){this.handleInteraction_=(()=>this.foundation_.handleInteraction()),this.handleTransitionEnd_=(t=>this.foundation_.handleTransitionEnd(t)),this.area_.addEventListener("wheel",this.handleInteraction_),this.area_.addEventListener("touchstart",this.handleInteraction_),this.area_.addEventListener("pointerdown",this.handleInteraction_),this.area_.addEventListener("mousedown",this.handleInteraction_),this.area_.addEventListener("keydown",this.handleInteraction_),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)}destroy(){super.destroy(),this.area_.removeEventListener("wheel",this.handleInteraction_),this.area_.removeEventListener("touchstart",this.handleInteraction_),this.area_.removeEventListener("pointerdown",this.handleInteraction_),this.area_.removeEventListener("mousedown",this.handleInteraction_),this.area_.removeEventListener("keydown",this.handleInteraction_),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)}getDefaultFoundation(){return new y({eventTargetMatchesSelector:(t,e)=>{return t[function(t){return["msMatchesSelector","matches"].filter(e=>e in t).pop()}(HTMLElement.prototype)](e)},addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),addScrollAreaClass:t=>this.area_.classList.add(t),setScrollAreaStyleProperty:(t,e)=>this.area_.style.setProperty(t,e),setScrollContentStyleProperty:(t,e)=>this.content_.style.setProperty(t,e),getScrollContentStyleValue:t=>window.getComputedStyle(this.content_).getPropertyValue(t),setScrollAreaScrollLeft:t=>this.area_.scrollLeft=t,getScrollAreaScrollLeft:()=>this.area_.scrollLeft,getScrollContentOffsetWidth:()=>this.content_.offsetWidth,getScrollAreaOffsetWidth:()=>this.area_.offsetWidth,computeScrollAreaClientRect:()=>this.area_.getBoundingClientRect(),computeScrollContentClientRect:()=>this.content_.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>(function(t,e=!0){if(e&&void 0!==L)return L;const i=t.createElement("div");i.classList.add(v.SCROLL_TEST),t.body.appendChild(i);const s=i.offsetHeight-i.clientHeight;return t.body.removeChild(i),e&&(L=s),s})(document)})}getScrollPosition(){return this.foundation_.getScrollPosition()}getScrollContentWidth(){return this.content_.offsetWidth}incrementScroll(t){this.foundation_.incrementScroll(t)}scrollTo(t){this.foundation_.scrollTo(t)}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const R={TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",HOME_KEY:"Home",ENTER_KEY:"Enter",SPACE_KEY:"Space"},O={EXTRA_SCROLL_AMOUNT:20,ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,HOME_KEYCODE:36,ENTER_KEYCODE:13,SPACE_KEYCODE:32},w=new Set;w.add(R.ARROW_LEFT_KEY),w.add(R.ARROW_RIGHT_KEY),w.add(R.END_KEY),w.add(R.HOME_KEY),w.add(R.ENTER_KEY),w.add(R.SPACE_KEY);const x=new Map;x.set(O.ARROW_LEFT_KEYCODE,R.ARROW_LEFT_KEY),x.set(O.ARROW_RIGHT_KEYCODE,R.ARROW_RIGHT_KEY),x.set(O.END_KEYCODE,R.END_KEY),x.set(O.HOME_KEYCODE,R.HOME_KEY),x.set(O.ENTER_KEYCODE,R.ENTER_KEY),x.set(O.SPACE_KEYCODE,R.SPACE_KEY);class D extends a.a{static get strings(){return R}static get numbers(){return O}static get defaultAdapter(){return{scrollTo:()=>{},incrementScroll:()=>{},getScrollPosition:()=>{},getScrollContentWidth:()=>{},getOffsetWidth:()=>{},isRTL:()=>{},setActiveTab:()=>{},activateTabAtIndex:()=>{},deactivateTabAtIndex:()=>{},focusTabAtIndex:()=>{},getTabIndicatorClientRectAtIndex:()=>{},getTabDimensionsAtIndex:()=>{},getPreviousActiveTabIndex:()=>{},getFocusedTabIndex:()=>{},getIndexOfTab:()=>{},getTabListLength:()=>{},notifyTabActivated:()=>{}}}constructor(t){super(Object.assign(D.defaultAdapter,t)),this.useAutomaticActivation_=!1}setUseAutomaticActivation(t){this.useAutomaticActivation_=t}activateTab(t){const e=this.adapter_.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==e&&(this.adapter_.deactivateTabAtIndex(e),this.adapter_.activateTabAtIndex(t,this.adapter_.getTabIndicatorClientRectAtIndex(e)),this.scrollIntoView(t),this.adapter_.notifyTabActivated(t))}handleKeyDown(t){const e=this.getKeyFromEvent_(t);if(void 0!==e)if(this.isActivationKey_(e)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(e))return;const t=this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(),e);this.adapter_.setActiveTab(t),this.scrollIntoView(t)}else{const t=this.adapter_.getFocusedTabIndex();if(this.isActivationKey_(e))this.adapter_.setActiveTab(t);else{const i=this.determineTargetFromKey_(t,e);this.adapter_.focusTabAtIndex(i),this.scrollIntoView(i)}}}handleTabInteraction(t){this.adapter_.setActiveTab(this.adapter_.getIndexOfTab(t.detail.tab))}scrollIntoView(t){if(this.indexIsInRange_(t))return 0===t?this.adapter_.scrollTo(0):t===this.adapter_.getTabListLength()-1?this.adapter_.scrollTo(this.adapter_.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)}determineTargetFromKey_(t,e){const i=this.isRTL_(),s=this.adapter_.getTabListLength()-1,r=e===R.END_KEY,a=e===R.ARROW_LEFT_KEY&&!i||e===R.ARROW_RIGHT_KEY&&i,n=e===R.ARROW_RIGHT_KEY&&!i||e===R.ARROW_LEFT_KEY&&i;let o=t;return r?o=s:a?o-=1:n?o+=1:o=0,o<0?o=s:o>s&&(o=0),o}calculateScrollIncrement_(t,e,i,s){const r=this.adapter_.getTabDimensionsAtIndex(e),a=r.contentLeft-i-s,n=r.contentRight-i-O.EXTRA_SCROLL_AMOUNT,o=a+O.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(n,0):Math.max(o,0)}calculateScrollIncrementRTL_(t,e,i,s,r){const a=this.adapter_.getTabDimensionsAtIndex(e),n=r-a.contentLeft-i,o=r-a.contentRight-i-s+O.EXTRA_SCROLL_AMOUNT,l=n-O.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(o,0):Math.min(l,0)}findAdjacentTabIndexClosestToEdge_(t,e,i,s){const r=e.rootLeft-i,a=e.rootRight-i-s,n=r+a;return r<0||n<0?t-1:a>0||n>0?t+1:-1}findAdjacentTabIndexClosestToEdgeRTL_(t,e,i,s,r){const a=r-e.rootLeft-s-i,n=r-e.rootRight-i,o=a+n;return a>0||o>0?t+1:n<0||o<0?t-1:-1}getKeyFromEvent_(t){return w.has(t.key)?t.key:x.get(t.keyCode)}isActivationKey_(t){return t===R.SPACE_KEY||t===R.ENTER_KEY}indexIsInRange_(t){return t>=0&&t<this.adapter_.getTabListLength()}isRTL_(){return this.adapter_.isRTL()}scrollIntoView_(t){const e=this.adapter_.getScrollPosition(),i=this.adapter_.getOffsetWidth(),s=this.adapter_.getTabDimensionsAtIndex(t),r=this.findAdjacentTabIndexClosestToEdge_(t,s,e,i);if(!this.indexIsInRange_(r))return;const a=this.calculateScrollIncrement_(t,r,e,i);this.adapter_.incrementScroll(a)}scrollIntoViewRTL_(t){const e=this.adapter_.getScrollPosition(),i=this.adapter_.getOffsetWidth(),s=this.adapter_.getTabDimensionsAtIndex(t),r=this.adapter_.getScrollContentWidth(),a=this.findAdjacentTabIndexClosestToEdgeRTL_(t,s,e,i,r);if(!this.indexIsInRange_(a))return;const n=this.calculateScrollIncrementRTL_(t,a,e,i,r);this.adapter_.incrementScroll(n)}}var N=D;i.d(e,"MDCTabBar",function(){return H}),i.d(e,"MDCTabBarFoundation",function(){return N});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class H extends s.a{constructor(...t){super(...t),this.tabList_,this.tabFactory_,this.tabScroller_,this.tabScrollerFactory_,this.handleTabInteraction_,this.handleKeyDown_}static attachTo(t){return new H(t)}set focusOnActivate(t){this.tabList_.forEach(e=>e.focusOnActivate=t)}set useAutomaticActivation(t){this.foundation_.setUseAutomaticActivation(t)}initialize(t=(t=>new f(t)),e=(t=>new I(t))){this.tabFactory_=t,this.tabScrollerFactory_=e,this.tabList_=this.getTabElements_().map(t=>this.tabFactory_(t));const i=this.root_.querySelector(N.strings.TAB_SCROLLER_SELECTOR);i&&(this.tabScroller_=this.tabScrollerFactory_(i))}initialSyncWithDOM(){this.handleTabInteraction_=(t=>this.foundation_.handleTabInteraction(t)),this.handleKeyDown_=(t=>this.foundation_.handleKeyDown(t)),this.root_.addEventListener(g.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.root_.addEventListener("keydown",this.handleKeyDown_);for(let t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active){this.scrollIntoView(t);break}}destroy(){super.destroy(),this.root_.removeEventListener(g.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.root_.removeEventListener("keydown",this.handleKeyDown_),this.tabList_.forEach(t=>t.destroy()),this.tabScroller_.destroy()}getDefaultFoundation(){return new N({scrollTo:t=>this.tabScroller_.scrollTo(t),incrementScroll:t=>this.tabScroller_.incrementScroll(t),getScrollPosition:()=>this.tabScroller_.getScrollPosition(),getScrollContentWidth:()=>this.tabScroller_.getScrollContentWidth(),getOffsetWidth:()=>this.root_.offsetWidth,isRTL:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction"),setActiveTab:t=>this.foundation_.activateTab(t),activateTabAtIndex:(t,e)=>this.tabList_[t].activate(e),deactivateTabAtIndex:t=>this.tabList_[t].deactivate(),focusTabAtIndex:t=>this.tabList_[t].focus(),getTabIndicatorClientRectAtIndex:t=>this.tabList_[t].computeIndicatorClientRect(),getTabDimensionsAtIndex:t=>this.tabList_[t].computeDimensions(),getPreviousActiveTabIndex:()=>{for(let t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active)return t;return-1},getFocusedTabIndex:()=>{const t=this.getTabElements_(),e=document.activeElement;return t.indexOf(e)},getIndexOfTab:t=>this.tabList_.indexOf(t),getTabListLength:()=>this.tabList_.length,notifyTabActivated:t=>this.emit(N.strings.TAB_ACTIVATED_EVENT,{index:t},!0)})}activateTab(t){this.foundation_.activateTab(t)}scrollIntoView(t){this.foundation_.scrollIntoView(t)}getTabElements_(){return[].slice.call(this.root_.querySelectorAll(N.strings.TAB_SELECTOR))}}},function(t,e,i){"use strict";i.r(e);
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
const s=new WeakMap,r=t=>(...e)=>{const i=t(...e);return s.set(i,!0),i},a=t=>"function"==typeof t&&s.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,i=null,s=null)=>{let r=e;for(;r!==i;){const e=r.nextSibling;t.insertBefore(r,s),r=e}},l=(t,e,i=null)=>{let s=e;for(;s!==i;){const e=s.nextSibling;t.removeChild(s),s=e}},c={},d=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${d}--\x3e`,_=new RegExp(`${d}|${h}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;let i=-1,s=0;const r=[],a=e=>{const n=e.content,o=document.createTreeWalker(n,133,null,!1);let l,c;for(;o.nextNode();){i++,l=c;const e=c=o.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const r=e.attributes;let a=0;for(let t=0;t<r.length;t++)r[t].value.indexOf(d)>=0&&a++;for(;a-- >0;){const r=t.strings[s],a=f.exec(r)[2],n=a.toLowerCase()+u,o=e.getAttribute(n).split(_);this.parts.push({type:"attribute",index:i,name:a,strings:o}),e.removeAttribute(n),s+=o.length-1}}"TEMPLATE"===e.tagName&&a(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(d)<0)continue;const a=e.parentNode,n=t.split(_),o=n.length-1;s+=o;for(let t=0;t<o;t++)a.insertBefore(""===n[t]?g():document.createTextNode(n[t]),e),this.parts.push({type:"node",index:i++});a.insertBefore(""===n[o]?g():document.createTextNode(n[o]),e),r.push(e)}else if(8===e.nodeType)if(e.nodeValue===d){const t=e.parentNode,a=e.previousSibling;null===a||a!==l||a.nodeType!==Node.TEXT_NODE?t.insertBefore(g(),e):i--,this.parts.push({type:"node",index:i++}),r.push(e),null===e.nextSibling?t.insertBefore(g(),e):i--,c=l,s++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(d,t+1));)this.parts.push({type:"node",index:-1})}}};a(e);for(const t of r)t.parentNode.removeChild(t)}}const m=t=>-1!==t.index,g=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class v{constructor(t,e,i){this._parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this._parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let i=0,s=0;const r=t=>{const a=document.createTreeWalker(t,133,null,!1);let n=a.nextNode();for(;i<e.length&&null!==n;){const t=e[i];if(m(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(n),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(n,t.name,t.strings,this.options));i++}else s++,"TEMPLATE"===n.nodeName&&r(n.content),n=a.nextNode();else this._parts.push(void 0),i++}};return r(t),n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */class S{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="";for(let i=0;i<t;i++){const t=this.strings[i];let s=!1;e+=t.replace(f,(t,e,i,r)=>(s=!0,e+i+u+r+d)),s||(e+=h)}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class T extends S{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),o(e,i.firstChild),t}}
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
 */const A=t=>null===t||!("object"==typeof t||"function"==typeof t);class E{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)i+="string"==typeof e?e:String(e);else i+="string"==typeof t?t:String(t)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===c||A(t)&&t===this.value||(this.value=t,a(t)||(this.committer.dirty=!0))}commit(){for(;a(this.value);){const t=this.value;this.value=c,t(this)}this.value!==c&&this.committer.commit()}}class b{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=g()),t._insert(this.endNode=g())}insertAfterPart(t){t._insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;a(this._pendingValue);){const t=this._pendingValue;this._pendingValue=c,t(this)}const t=this._pendingValue;t!==c&&(A(t)?t!==this.value&&this._commitText(t):t instanceof S?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),s=i._clone();i.update(t.values),this._commitNode(s),this.value=i}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const r of t)void 0===(i=e[s])&&(i=new b(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(r),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){l(this.startNode.parentNode,t.nextSibling,this.endNode)}}class y{constructor(t,e,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this._pendingValue=t}commit(){for(;a(this._pendingValue);){const t=this._pendingValue;this._pendingValue=c,t(this)}if(this._pendingValue===c)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=c}}class L extends E{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends C{}let R=!1;try{const t={get capture(){return R=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class O{constructor(t,e,i){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;a(this._pendingValue);){const t=this._pendingValue;this._pendingValue=c,t(this)}if(this._pendingValue===c)return;const t=this._pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=w(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=c}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const w=t=>t&&(R?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */class x{handleAttributeExpressions(t,e,i,s){const r=e[0];if("."===r){return new L(t,e.slice(1),i).parts}return"@"===r?[new O(t,e.slice(1),s.eventContext)]:"?"===r?[new y(t,e.slice(1),i)]:new E(t,e,i).parts}handleTextExpression(t){return new b(t)}}const D=new x;
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
 */function N(t){let e=H.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},H.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(d);return void 0===(i=e.keyString.get(s))&&(i=new p(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const H=new Map,V=new WeakMap,P=(t,e,i)=>{let s=V.get(e);void 0===s&&(l(e,e.firstChild),V.set(e,s=new b(Object.assign({templateFactory:N},i))),s.appendInto(e)),s.setValue(t),s.commit()};
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
 */i.d(e,"html",function(){return M}),i.d(e,"svg",function(){return F}),i.d(e,"DefaultTemplateProcessor",function(){return x}),i.d(e,"defaultTemplateProcessor",function(){return D}),i.d(e,"directive",function(){return r}),i.d(e,"isDirective",function(){return a}),i.d(e,"removeNodes",function(){return l}),i.d(e,"reparentNodes",function(){return o}),i.d(e,"noChange",function(){return c}),i.d(e,"AttributeCommitter",function(){return E}),i.d(e,"AttributePart",function(){return C}),i.d(e,"BooleanAttributePart",function(){return y}),i.d(e,"EventPart",function(){return O}),i.d(e,"isPrimitive",function(){return A}),i.d(e,"NodePart",function(){return b}),i.d(e,"PropertyCommitter",function(){return L}),i.d(e,"PropertyPart",function(){return I}),i.d(e,"parts",function(){return V}),i.d(e,"render",function(){return P}),i.d(e,"templateCaches",function(){return H}),i.d(e,"templateFactory",function(){return N}),i.d(e,"TemplateInstance",function(){return v}),i.d(e,"SVGTemplateResult",function(){return T}),i.d(e,"TemplateResult",function(){return S}),i.d(e,"createMarker",function(){return g}),i.d(e,"isTemplatePartActive",function(){return m}),i.d(e,"Template",function(){return p});
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
const M=(t,...e)=>new S(t,e,"html",D),F=(t,...e)=>new T(t,e,"svg",D)},function(t,e,i){"use strict";i.r(e);var s=i(1),r=i(2);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const a={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed"},n={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},o={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};var l=i(0);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class c extends l.a{static get strings(){return o}static get cssClasses(){return a}static get numbers(){return n}static get defaultAdapter(){return{hasClass:()=>{},addClass:()=>{},removeClass:()=>{},setStyle:()=>{},getTopAppBarHeight:()=>{},registerNavigationIconInteractionHandler:()=>{},deregisterNavigationIconInteractionHandler:()=>{},notifyNavigationIconClicked:()=>{},registerScrollHandler:()=>{},deregisterScrollHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},getViewportScrollY:()=>0,getTotalActionItems:()=>0}}constructor(t){super(Object.assign(c.defaultAdapter,t)),this.navClickHandler_=(()=>this.adapter_.notifyNavigationIconClicked()),this.scrollHandler_=(()=>{})}init(){this.adapter_.registerNavigationIconInteractionHandler("click",this.navClickHandler_)}destroy(){this.adapter_.deregisterNavigationIconInteractionHandler("click",this.navClickHandler_)}initScrollHandler(){this.adapter_.registerScrollHandler(this.scrollHandler_)}destroyScrollHandler(){this.adapter_.deregisterScrollHandler(this.scrollHandler_)}}var d=c;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var h=class extends d{constructor(t){super(t),this.wasScrolled_=!1,this.scrollHandler_=(()=>this.fixedScrollHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}fixedScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(a.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(a.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _=class extends d{constructor(t){super(t),this.isCollapsed=!1,this.scrollHandler_=(()=>this.shortAppBarScrollHandler_())}init(){super.init();const t=this.adapter_.hasClass(a.SHORT_COLLAPSED_CLASS);this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(a.SHORT_HAS_ACTION_ITEM_CLASS),t||(this.adapter_.registerScrollHandler(this.scrollHandler_),this.shortAppBarScrollHandler_())}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}shortAppBarScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.isCollapsed&&(this.adapter_.removeClass(a.SHORT_COLLAPSED_CLASS),this.isCollapsed=!1):this.isCollapsed||(this.adapter_.addClass(a.SHORT_COLLAPSED_CLASS),this.isCollapsed=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const u=0;var p=class extends d{constructor(t){super(t),this.lastScrollPosition_=this.adapter_.getViewportScrollY(),this.topAppBarHeight_=this.adapter_.getTopAppBarHeight(),this.wasDocked_=!0,this.isDockedShowing_=!0,this.currentAppBarOffsetTop_=0,this.isCurrentlyBeingResized_=!1,this.resizeThrottleId_=u,this.resizeDebounceId_=u,this.scrollHandler_=(()=>this.topAppBarScrollHandler_()),this.resizeHandler_=(()=>this.topAppBarResizeHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.setStyle("top","")}checkForUpdate_(){const t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>t,s=e&&i;if(s)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return s}moveTopAppBar_(){if(this.checkForUpdate_()){let t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-n.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}}topAppBarScrollHandler_(){const t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())}topAppBarResizeHandler_(){this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(()=>{this.resizeThrottleId_=u,this.throttledResizeHandler_()},n.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(()=>{this.topAppBarScrollHandler_(),this.isCurrentlyBeingResized_=!1,this.resizeDebounceId_=u},n.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)}throttledResizeHandler_(){const t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.topAppBarScrollHandler_()}};i.d(e,"MDCTopAppBar",function(){return m}),i.d(e,"MDCTopAppBarBaseFoundation",function(){return d}),i.d(e,"MDCTopAppBarFoundation",function(){return p}),i.d(e,"MDCFixedTopAppBarFoundation",function(){return h}),i.d(e,"MDCShortTopAppBarFoundation",function(){return _});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class m extends s.a{constructor(...t){super(...t),this.navIcon_,this.iconRipples_,this.scrollTarget_}initialize(t=(t=>r.a.attachTo(t))){this.navIcon_=this.root_.querySelector(o.NAVIGATION_ICON_SELECTOR);const e=[].slice.call(this.root_.querySelectorAll(o.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map(e=>{const i=t(e);return i.unbounded=!0,i})}destroy(){this.iconRipples_.forEach(t=>t.destroy()),super.destroy()}setScrollTarget(t){this.foundation_.destroyScrollHandler(),this.scrollTarget_=t,this.foundation_.initScrollHandler()}static attachTo(t){return new m(t)}getDefaultFoundation(){const t=Object.assign({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setStyle:(t,e)=>this.root_.style.setProperty(t,e),getTopAppBarHeight:()=>this.root_.clientHeight,registerNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.addEventListener(t,e)},deregisterNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.removeEventListener(t,e)},notifyNavigationIconClicked:()=>{this.emit(o.NAVIGATION_EVENT,{})},registerScrollHandler:t=>this.scrollTarget_.addEventListener("scroll",t),deregisterScrollHandler:t=>this.scrollTarget_.removeEventListener("scroll",t),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getViewportScrollY:()=>this.scrollTarget_[this.scrollTarget_===window?"pageYOffset":"scrollTop"],getTotalActionItems:()=>this.root_.querySelectorAll(o.ACTION_ITEM_SELECTOR).length});let e;return this.scrollTarget_=window,e=this.root_.classList.contains(a.SHORT_CLASS)?new _(t):this.root_.classList.contains(a.FIXED_CLASS)?new h(t):new p(t)}}}]);