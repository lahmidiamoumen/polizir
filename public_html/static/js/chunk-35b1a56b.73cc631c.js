(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35b1a56b"],{"0b25":function(e,t,n){var i=n("a691"),r=n("50c4");e.exports=function(e){if(void 0===e)return 0;var t=i(e),n=r(t);if(t!==n)throw RangeError("Wrong length or index");return n}},"145e":function(e,t,n){"use strict";var i=n("7b0b"),r=n("23cb"),s=n("50c4"),a=Math.min;e.exports=[].copyWithin||function(e,t){var n=i(this),o=s(n.length),u=r(e,o),h=r(t,o),c=arguments.length>2?arguments[2]:void 0,d=a((void 0===c?o:r(c,o))-h,o-u),p=1;h<u&&u<h+d&&(p=-1,h+=d-1,u+=d-1);while(d-- >0)h in n?n[u]=n[h]:delete n[u],u+=p,h+=p;return n}},"170b":function(e,t,n){"use strict";var i=n("ebb5"),r=n("50c4"),s=n("23cb"),a=n("4840"),o=i.aTypedArray,u=i.exportTypedArrayMethod;u("subarray",(function(e,t){var n=o(this),i=n.length,u=s(e,i);return new(a(n,n.constructor))(n.buffer,n.byteOffset+u*n.BYTES_PER_ELEMENT,r((void 0===t?i:s(t,i))-u))}))},"182d":function(e,t,n){var i=n("f8cd");e.exports=function(e,t){var n=i(e);if(n%t)throw RangeError("Wrong offset");return n}},"219c":function(e,t,n){"use strict";var i=n("ebb5"),r=i.aTypedArray,s=i.exportTypedArrayMethod,a=[].sort;s("sort",(function(e){return a.call(r(this),e)}))},"25a1":function(e,t,n){"use strict";var i=n("ebb5"),r=n("d58f").right,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("reduceRight",(function(e){return r(s(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2954:function(e,t,n){"use strict";var i=n("ebb5"),r=n("4840"),s=n("d039"),a=i.aTypedArray,o=i.aTypedArrayConstructor,u=i.exportTypedArrayMethod,h=[].slice,c=s((function(){new Int8Array(1).slice()}));u("slice",(function(e,t){var n=h.call(a(this),e,t),i=r(this,this.constructor),s=0,u=n.length,c=new(o(i))(u);while(u>s)c[s]=n[s++];return c}),c)},3280:function(e,t,n){"use strict";var i=n("ebb5"),r=n("e58c"),s=i.aTypedArray,a=i.exportTypedArrayMethod;a("lastIndexOf",(function(e){return r.apply(s(this),arguments)}))},"3a7b":function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").findIndex,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("findIndex",(function(e){return r(s(this),e,arguments.length>1?arguments[1]:void 0)}))},"3c5d":function(e,t,n){"use strict";var i=n("ebb5"),r=n("50c4"),s=n("182d"),a=n("7b0b"),o=n("d039"),u=i.aTypedArray,h=i.exportTypedArrayMethod,c=o((function(){new Int8Array(1).set({})}));h("set",(function(e){u(this);var t=s(arguments.length>1?arguments[1]:void 0,1),n=this.length,i=a(e),o=r(i.length),h=0;if(o+t>n)throw RangeError("Wrong length");while(h<o)this[t+h]=i[h++]}),c)},"3fcc":function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").map,s=n("4840"),a=i.aTypedArray,o=i.aTypedArrayConstructor,u=i.exportTypedArrayMethod;u("map",(function(e){return r(a(this),e,arguments.length>1?arguments[1]:void 0,(function(e,t){return new(o(s(e,e.constructor)))(t)}))}))},"5cc6":function(e,t,n){var i=n("74e8");i("Uint8",(function(e){return function(t,n,i){return e(this,t,n,i)}}))},"5f96":function(e,t,n){"use strict";var i=n("ebb5"),r=i.aTypedArray,s=i.exportTypedArrayMethod,a=[].join;s("join",(function(e){return a.apply(r(this),arguments)}))},"60bd":function(e,t,n){"use strict";var i=n("da84"),r=n("ebb5"),s=n("e260"),a=n("b622"),o=a("iterator"),u=i.Uint8Array,h=s.values,c=s.keys,d=s.entries,p=r.aTypedArray,l=r.exportTypedArrayMethod,f=u&&u.prototype[o],y=!!f&&("values"==f.name||void 0==f.name),v=function(){return h.call(p(this))};l("entries",(function(){return d.call(p(this))})),l("keys",(function(){return c.call(p(this))})),l("values",v,!y),l(o,v,!y)},"621a":function(e,t,n){"use strict";var i=n("da84"),r=n("83ab"),s=n("a981"),a=n("9112"),o=n("e2cc"),u=n("d039"),h=n("19aa"),c=n("a691"),d=n("50c4"),p=n("0b25"),l=n("77a7"),f=n("e163"),y=n("d2bb"),v=n("241c").f,m=n("9bf2").f,b=n("81d5"),g=n("d44e"),x=n("69f3"),z=x.get,A=x.set,w="ArrayBuffer",S="DataView",P="prototype",T="Wrong length",M="Wrong index",E=i[w],_=E,C=i[S],R=C&&C[P],O=Object.prototype,N=i.RangeError,I=l.pack,k=l.unpack,U=function(e){return[255&e]},L=function(e){return[255&e,e>>8&255]},D=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},$=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},B=function(e){return I(e,23,4)},F=function(e){return I(e,52,8)},j=function(e,t){m(e[P],t,{get:function(){return z(this)[t]}})},V=function(e,t,n,i){var r=p(n),s=z(e);if(r+t>s.byteLength)throw N(M);var a=z(s.buffer).bytes,o=r+s.byteOffset,u=a.slice(o,o+t);return i?u:u.reverse()},W=function(e,t,n,i,r,s){var a=p(n),o=z(e);if(a+t>o.byteLength)throw N(M);for(var u=z(o.buffer).bytes,h=a+o.byteOffset,c=i(+r),d=0;d<t;d++)u[h+d]=c[s?d:t-d-1]};if(s){if(!u((function(){E(1)}))||!u((function(){new E(-1)}))||u((function(){return new E,new E(1.5),new E(NaN),E.name!=w}))){_=function(e){return h(this,_),new E(p(e))};for(var q,Y=_[P]=E[P],G=v(E),X=0;G.length>X;)(q=G[X++])in _||a(_,q,E[q]);Y.constructor=_}y&&f(R)!==O&&y(R,O);var J=new C(new _(2)),H=R.setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||o(R,{setInt8:function(e,t){H.call(this,e,t<<24>>24)},setUint8:function(e,t){H.call(this,e,t<<24>>24)}},{unsafe:!0})}else _=function(e){h(this,_,w);var t=p(e);A(this,{bytes:b.call(new Array(t),0),byteLength:t}),r||(this.byteLength=t)},C=function(e,t,n){h(this,C,S),h(e,_,S);var i=z(e).byteLength,s=c(t);if(s<0||s>i)throw N("Wrong offset");if(n=void 0===n?i-s:d(n),s+n>i)throw N(T);A(this,{buffer:e,byteLength:n,byteOffset:s}),r||(this.buffer=e,this.byteLength=n,this.byteOffset=s)},r&&(j(_,"byteLength"),j(C,"buffer"),j(C,"byteLength"),j(C,"byteOffset")),o(C[P],{getInt8:function(e){return V(this,1,e)[0]<<24>>24},getUint8:function(e){return V(this,1,e)[0]},getInt16:function(e){var t=V(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=V(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return $(V(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return $(V(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return k(V(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return k(V(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){W(this,1,e,U,t)},setUint8:function(e,t){W(this,1,e,U,t)},setInt16:function(e,t){W(this,2,e,L,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){W(this,2,e,L,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){W(this,4,e,D,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){W(this,4,e,D,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){W(this,4,e,B,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){W(this,8,e,F,t,arguments.length>2?arguments[2]:void 0)}});g(_,w),g(C,S),e.exports={ArrayBuffer:_,DataView:C}},"649e":function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").some,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("some",(function(e){return r(s(this),e,arguments.length>1?arguments[1]:void 0)}))},"72f7":function(e,t,n){"use strict";var i=n("ebb5").exportTypedArrayMethod,r=n("d039"),s=n("da84"),a=s.Uint8Array,o=a&&a.prototype||{},u=[].toString,h=[].join;r((function(){u.call({})}))&&(u=function(){return h.call(this)});var c=o.toString!=u;i("toString",u,c)},"735e":function(e,t,n){"use strict";var i=n("ebb5"),r=n("81d5"),s=i.aTypedArray,a=i.exportTypedArrayMethod;a("fill",(function(e){return r.apply(s(this),arguments)}))},"74e8":function(e,t,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("83ab"),a=n("8aa7"),o=n("ebb5"),u=n("621a"),h=n("19aa"),c=n("5c6c"),d=n("9112"),p=n("50c4"),l=n("0b25"),f=n("182d"),y=n("c04e"),v=n("5135"),m=n("f5df"),b=n("861d"),g=n("7c73"),x=n("d2bb"),z=n("241c").f,A=n("a078"),w=n("b727").forEach,S=n("2626"),P=n("9bf2"),T=n("06cf"),M=n("69f3"),E=n("7156"),_=M.get,C=M.set,R=P.f,O=T.f,N=Math.round,I=r.RangeError,k=u.ArrayBuffer,U=u.DataView,L=o.NATIVE_ARRAY_BUFFER_VIEWS,D=o.TYPED_ARRAY_TAG,$=o.TypedArray,B=o.TypedArrayPrototype,F=o.aTypedArrayConstructor,j=o.isTypedArray,V="BYTES_PER_ELEMENT",W="Wrong length",q=function(e,t){var n=0,i=t.length,r=new(F(e))(i);while(i>n)r[n]=t[n++];return r},Y=function(e,t){R(e,t,{get:function(){return _(this)[t]}})},G=function(e){var t;return e instanceof k||"ArrayBuffer"==(t=m(e))||"SharedArrayBuffer"==t},X=function(e,t){return j(e)&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},J=function(e,t){return X(e,t=y(t,!0))?c(2,e[t]):O(e,t)},H=function(e,t,n){return!(X(e,t=y(t,!0))&&b(n)&&v(n,"value"))||v(n,"get")||v(n,"set")||n.configurable||v(n,"writable")&&!n.writable||v(n,"enumerable")&&!n.enumerable?R(e,t,n):(e[t]=n.value,e)};s?(L||(T.f=J,P.f=H,Y(B,"buffer"),Y(B,"byteOffset"),Y(B,"byteLength"),Y(B,"length")),i({target:"Object",stat:!0,forced:!L},{getOwnPropertyDescriptor:J,defineProperty:H}),e.exports=function(e,t,n){var s=e.match(/\d+$/)[0]/8,o=e+(n?"Clamped":"")+"Array",u="get"+e,c="set"+e,y=r[o],v=y,m=v&&v.prototype,P={},T=function(e,t){var n=_(e);return n.view[u](t*s+n.byteOffset,!0)},M=function(e,t,i){var r=_(e);n&&(i=(i=N(i))<0?0:i>255?255:255&i),r.view[c](t*s+r.byteOffset,i,!0)},O=function(e,t){R(e,t,{get:function(){return T(this,t)},set:function(e){return M(this,t,e)},enumerable:!0})};L?a&&(v=t((function(e,t,n,i){return h(e,v,o),E(function(){return b(t)?G(t)?void 0!==i?new y(t,f(n,s),i):void 0!==n?new y(t,f(n,s)):new y(t):j(t)?q(v,t):A.call(v,t):new y(l(t))}(),e,v)})),x&&x(v,$),w(z(y),(function(e){e in v||d(v,e,y[e])})),v.prototype=m):(v=t((function(e,t,n,i){h(e,v,o);var r,a,u,c=0,d=0;if(b(t)){if(!G(t))return j(t)?q(v,t):A.call(v,t);r=t,d=f(n,s);var y=t.byteLength;if(void 0===i){if(y%s)throw I(W);if(a=y-d,a<0)throw I(W)}else if(a=p(i)*s,a+d>y)throw I(W);u=a/s}else u=l(t),a=u*s,r=new k(a);C(e,{buffer:r,byteOffset:d,byteLength:a,length:u,view:new U(r)});while(c<u)O(e,c++)})),x&&x(v,$),m=v.prototype=g(B)),m.constructor!==v&&d(m,"constructor",v),D&&d(m,D,o),P[o]=v,i({global:!0,forced:v!=y,sham:!L},P),V in v||d(v,V,s),V in m||d(m,V,s),S(o)}):e.exports=function(){}},"77a7":function(e,t){var n=1/0,i=Math.abs,r=Math.pow,s=Math.floor,a=Math.log,o=Math.LN2,u=function(e,t,u){var h,c,d,p=new Array(u),l=8*u-t-1,f=(1<<l)-1,y=f>>1,v=23===t?r(2,-24)-r(2,-77):0,m=e<0||0===e&&1/e<0?1:0,b=0;for(e=i(e),e!=e||e===n?(c=e!=e?1:0,h=f):(h=s(a(e)/o),e*(d=r(2,-h))<1&&(h--,d*=2),e+=h+y>=1?v/d:v*r(2,1-y),e*d>=2&&(h++,d/=2),h+y>=f?(c=0,h=f):h+y>=1?(c=(e*d-1)*r(2,t),h+=y):(c=e*r(2,y-1)*r(2,t),h=0));t>=8;p[b++]=255&c,c/=256,t-=8);for(h=h<<t|c,l+=t;l>0;p[b++]=255&h,h/=256,l-=8);return p[--b]|=128*m,p},h=function(e,t){var i,s=e.length,a=8*s-t-1,o=(1<<a)-1,u=o>>1,h=a-7,c=s-1,d=e[c--],p=127&d;for(d>>=7;h>0;p=256*p+e[c],c--,h-=8);for(i=p&(1<<-h)-1,p>>=-h,h+=t;h>0;i=256*i+e[c],c--,h-=8);if(0===p)p=1-u;else{if(p===o)return i?NaN:d?-n:n;i+=r(2,t),p-=u}return(d?-1:1)*i*r(2,p-t)};e.exports={pack:u,unpack:h}},"81d5":function(e,t,n){"use strict";var i=n("7b0b"),r=n("23cb"),s=n("50c4");e.exports=function(e){var t=i(this),n=s(t.length),a=arguments.length,o=r(a>1?arguments[1]:void 0,n),u=a>2?arguments[2]:void 0,h=void 0===u?n:r(u,n);while(h>o)t[o++]=e;return t}},"82f8":function(e,t,n){"use strict";var i=n("ebb5"),r=n("4d64").includes,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("includes",(function(e){return r(s(this),e,arguments.length>1?arguments[1]:void 0)}))},"8aa7":function(e,t,n){var i=n("da84"),r=n("d039"),s=n("1c7e"),a=n("ebb5").NATIVE_ARRAY_BUFFER_VIEWS,o=i.ArrayBuffer,u=i.Int8Array;e.exports=!a||!r((function(){u(1)}))||!r((function(){new u(-1)}))||!s((function(e){new u,new u(null),new u(1.5),new u(e)}),!0)||r((function(){return 1!==new u(new o(2),1,void 0).length}))},"9a8c":function(e,t,n){"use strict";var i=n("ebb5"),r=n("145e"),s=i.aTypedArray,a=i.exportTypedArrayMethod;a("copyWithin",(function(e,t){return r.call(s(this),e,t,arguments.length>2?arguments[2]:void 0)}))},"9def":function(e,t,n){"use strict";n.d(t,"a",(function(){return M})),n.d(t,"b",(function(){return x}));var i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&h(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&h(e,n,t[n]);return e},d=(e,t)=>r(e,s(t)),p=(e,t)=>{var n={};for(var i in e)o.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&a)for(var i of a(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n};function l(e,t,n,i,r,s,a,o){var u,h="function"===typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=n,h._compiled=!0),i&&(h.functional=!0),s&&(h._scopeId="data-v-"+s),a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},h._ssrRegister=u):r&&(u=o?function(){r.call(this,(h.functional?this.parent:this).$root.$options.shadowRoot)}:r),u)if(h.functional){h._injectStyles=u;var c=h.render;h.render=function(e,t){return u.call(t),c(e,t)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:h}}const f={name:"splitpanes",props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((e,t)=>(e[t.id]=t)&&e,{})}},methods:{updatePaneComponents(){this.panes.forEach(e=>{e.update&&e.update({[this.horizontal?"height":"width"]:this.indexedPanes[e.id].size+"%"})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(e,t){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=t},onMouseMove(e){this.touch.mouseDown&&(e.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(e)),this.$emit("resize",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(e,t){"ontouchstart"in window&&(e.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===t?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(e,t),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=t,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[t])},onSplitterDblClick(e,t){let n=0;this.panes=this.panes.map((e,i)=>(e.size=i===t?e.max:e.min,i!==t&&(n+=e.min),e)),this.panes[t].size-=n,this.$emit("pane-maximize",this.panes[t])},onPaneClick(e,t){this.$emit("pane-click",this.indexedPanes[t])},getCurrentMouseDrag(e){const t=this.container.getBoundingClientRect(),{clientX:n,clientY:i}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:n-t.left,y:i-t.top}},getCurrentDragPercentage(e){e=e[this.horizontal?"y":"x"];const t=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(e=t-e),100*e/t},calculatePanesSize(e){const t=this.touch.activeSplitter;let n={prevPanesSize:this.sumPrevPanesSize(t),nextPanesSize:this.sumNextPanesSize(t),prevReachedMinPanes:0,nextReachedMinPanes:0};const i=0+(this.pushOtherPanes?0:n.prevPanesSize),r=100-(this.pushOtherPanes?0:n.nextPanesSize),s=Math.max(Math.min(this.getCurrentDragPercentage(e),r),i);let a=[t,t+1],o=this.panes[a[0]]||null,u=this.panes[a[1]]||null;const h=o.max<100&&s>=o.max+n.prevPanesSize,c=u.max<100&&s<=100-(u.max+this.sumNextPanesSize(t+1));if(h||c)h?(o.size=o.max,u.size=Math.max(100-o.max-n.prevPanesSize-n.nextPanesSize,0)):(o.size=Math.max(100-u.max-n.prevPanesSize-this.sumNextPanesSize(t+1),0),u.size=u.max);else{if(this.pushOtherPanes){const e=this.doPushOtherPanes(n,s);if(!e)return;({sums:n,panesToResize:a}=e),o=this.panes[a[0]]||null,u=this.panes[a[1]]||null}null!==o&&(o.size=Math.min(Math.max(s-n.prevPanesSize-n.prevReachedMinPanes,o.min),o.max)),null!==u&&(u.size=Math.min(Math.max(100-s-n.nextPanesSize-n.nextReachedMinPanes,u.min),u.max))}},doPushOtherPanes(e,t){const n=this.touch.activeSplitter,i=[n,n+1];return t<e.prevPanesSize+this.panes[i[0]].min&&(i[0]=this.findPrevExpandedPane(n).index,e.prevReachedMinPanes=0,i[0]<n&&this.panes.forEach((t,r)=>{r>i[0]&&r<=n&&(t.size=t.min,e.prevReachedMinPanes+=t.min)}),e.prevPanesSize=this.sumPrevPanesSize(i[0]),void 0===i[0])?(e.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((t,i)=>{i>0&&i<=n&&(t.size=t.min,e.prevReachedMinPanes+=t.min)}),this.panes[i[1]].size=100-e.prevReachedMinPanes-this.panes[0].min-e.prevPanesSize-e.nextPanesSize,null):t>100-e.nextPanesSize-this.panes[i[1]].min&&(i[1]=this.findNextExpandedPane(n).index,e.nextReachedMinPanes=0,i[1]>n+1&&this.panes.forEach((t,r)=>{r>n&&r<i[1]&&(t.size=t.min,e.nextReachedMinPanes+=t.min)}),e.nextPanesSize=this.sumNextPanesSize(i[1]-1),void 0===i[1])?(e.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((t,i)=>{i<this.panesCount-1&&i>=n+1&&(t.size=t.min,e.nextReachedMinPanes+=t.min)}),this.panes[i[0]].size=100-e.prevPanesSize-e.nextReachedMinPanes-this.panes[this.panesCount-1].min-e.nextPanesSize,null):{sums:e,panesToResize:i}},sumPrevPanesSize(e){return this.panes.reduce((t,n,i)=>t+(i<e?n.size:0),0)},sumNextPanesSize(e){return this.panes.reduce((t,n,i)=>t+(i>e+1?n.size:0),0)},findPrevExpandedPane(e){const t=[...this.panes].reverse().find(t=>t.index<e&&t.size>t.min);return t||{}},findNextExpandedPane(e){const t=this.panes.find(t=>t.index>e+1&&t.size>t.min);return t||{}},checkSplitpanesNodes(){const e=Array.from(this.container.children);e.forEach(e=>{const t=e.classList.contains("splitpanes__pane"),n=e.classList.contains("splitpanes__splitter");if(!t&&!n)return e.parentNode.removeChild(e),void console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.")})},addSplitter(e,t,n=!1){const i=e-1,r=document.createElement("div");r.classList.add("splitpanes__splitter"),n||(r.onmousedown=e=>this.onMouseDown(e,i),"undefined"!==typeof window&&"ontouchstart"in window&&(r.ontouchstart=e=>this.onMouseDown(e,i)),r.onclick=e=>this.onSplitterClick(e,i+1)),this.dblClickSplitter&&(r.ondblclick=e=>this.onSplitterDblClick(e,i+1)),t.parentNode.insertBefore(r,t)},removeSplitter(e){e.onmousedown=void 0,e.onclick=void 0,e.ondblclick=void 0,e.parentNode.removeChild(e)},redoSplitters(){const e=Array.from(this.container.children);e.forEach(e=>{e.className.includes("splitpanes__splitter")&&this.removeSplitter(e)});let t=0;e.forEach(e=>{e.className.includes("splitpanes__pane")&&(!t&&this.firstSplitter?this.addSplitter(t,e,!0):t&&this.addSplitter(t,e),t++)})},requestUpdate(e){var t=e,{target:n}=t,i=p(t,["target"]);const r=this.indexedPanes[n._uid];Object.entries(i).forEach(([e,t])=>r[e]=t)},onPaneAdd(e){let t=-1;Array.from(e.$el.parentNode.children).some(n=>(n.className.includes("splitpanes__pane")&&t++,n===e.$el));const n=parseFloat(e.minSize),i=parseFloat(e.maxSize);this.panes.splice(t,0,{id:e._uid,index:t,min:isNaN(n)?0:n,max:isNaN(i)?100:i,size:null===e.size?null:parseFloat(e.size),givenSize:e.size,update:e.update}),this.panes.forEach((e,t)=>e.index=t),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[t]}),this.$emit("pane-add",{index:t,panes:this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))})})},onPaneRemove(e){const t=this.panes.findIndex(t=>t.id===e._uid),n=this.panes.splice(t,1)[0];this.panes.forEach((e,t)=>e.index=t),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:d(c({},n),{index:t})}),this.$emit("pane-remove",{removed:n,panes:this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))})})},resetPaneSizes(e={}){e.addedPane||e.removedPane?this.panes.some(e=>null!==e.givenSize||e.min||e.max<100)?this.equalizeAfterAddOrRemove(e):this.equalize():this.initialPanesSizing(),this.ready&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size})))},equalize(){const e=100/this.panesCount;let t=0,n=[],i=[];this.panes.forEach(r=>{r.size=Math.max(Math.min(e,r.max),r.min),t-=r.size,r.size>=r.max&&n.push(r.id),r.size<=r.min&&i.push(r.id)}),t>.1&&this.readjustSizes(t,n,i)},initialPanesSizing(){this.panesCount;let e=100,t=[],n=[],i=0;this.panes.forEach(r=>{e-=r.size,null!==r.size&&i++,r.size>=r.max&&t.push(r.id),r.size<=r.min&&n.push(r.id)});let r=100;e>.1&&(this.panes.forEach(t=>{null===t.size&&(t.size=Math.max(Math.min(e/(this.panesCount-i),t.max),t.min)),r-=t.size}),r>.1&&this.readjustSizes(e,t,n))},equalizeAfterAddOrRemove({addedPane:e,removedPane:t}={}){let n=100/this.panesCount,i=0,r=[],s=[];e&&null!==e.givenSize&&(n=(100-e.givenSize)/(this.panesCount-1)),this.panes.forEach(e=>{i-=e.size,e.size>=e.max&&r.push(e.id),e.size<=e.min&&s.push(e.id)}),Math.abs(i)<.1||(this.panes.forEach(t=>{e&&null!==e.givenSize&&e.id===t.id||(t.size=Math.max(Math.min(n,t.max),t.min)),i-=t.size,t.size>=t.max&&r.push(t.id),t.size<=t.min&&s.push(t.id)}),i>.1&&this.readjustSizes(i,r,s))},readjustSizes(e,t,n){let i;i=e>0?e/(this.panesCount-t.length):e/(this.panesCount-n.length),this.panes.forEach((r,s)=>{if(e>0&&!t.includes(r.id)){const t=Math.max(Math.min(r.size+i,r.max),r.min),n=t-r.size;e-=n,r.size=t}else if(!n.includes(r.id)){const t=Math.max(Math.min(r.size+i,r.max),r.min),n=t-r.size;e-=n,r.size=t}r.update({[this.horizontal?"height":"width"]:this.indexedPanes[r.id].size+"%"})}),Math.abs(e)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(e){const t=[...this.container.querySelectorAll(".splitpanes__splitter")];t.forEach((t,n)=>{t.ondblclick=e?e=>this.onSplitterDblClick(e,n):void 0})}},beforeDestroy(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(e){return e("div",{ref:"container",class:["splitpanes","splitpanes--"+(this.horizontal?"horizontal":"vertical"),{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default)}};let y,v;const m={};var b=l(f,y,v,!1,g,null,null,null);function g(e){for(let t in m)this[t]=m[t]}var x=function(){return b.exports}(),z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"splitpanes__pane",style:e.style,on:{click:function(t){return e.onPaneClick(t,e._uid)}}},[e._t("default")],2)},A=[];const w={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeDestroy(){this.onPaneRemove(this)},methods:{update(e){this.style=e}},computed:{sizeNumber(){return this.size||0===this.size?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(e){this.requestUpdate({target:this,size:e})},minSizeNumber(e){this.requestUpdate({target:this,min:e})},maxSizeNumber(e){this.requestUpdate({target:this,max:e})}}},S={};var P=l(w,z,A,!1,T,null,null,null);function T(e){for(let t in S)this[t]=S[t]}var M=function(){return P.exports}()},a078:function(e,t,n){var i=n("7b0b"),r=n("50c4"),s=n("35a1"),a=n("e95a"),o=n("0366"),u=n("ebb5").aTypedArrayConstructor;e.exports=function(e){var t,n,h,c,d,p,l=i(e),f=arguments.length,y=f>1?arguments[1]:void 0,v=void 0!==y,m=s(l);if(void 0!=m&&!a(m)){d=m.call(l),p=d.next,l=[];while(!(c=p.call(d)).done)l.push(c.value)}for(v&&f>2&&(y=o(y,arguments[2],2)),n=r(l.length),h=new(u(this))(n),t=0;n>t;t++)h[t]=v?y(l[t],t):l[t];return h}},a975:function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").every,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("every",(function(e){return r(s(this),e,arguments.length>1?arguments[1]:void 0)}))},a981:function(e,t){e.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},ace4:function(e,t,n){"use strict";var i=n("23e7"),r=n("d039"),s=n("621a"),a=n("825a"),o=n("23cb"),u=n("50c4"),h=n("4840"),c=s.ArrayBuffer,d=s.DataView,p=c.prototype.slice,l=r((function(){return!new c(2).slice(1,void 0).byteLength}));i({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:l},{slice:function(e,t){if(void 0!==p&&void 0===t)return p.call(a(this),e);var n=a(this).byteLength,i=o(e,n),r=o(void 0===t?n:t,n),s=new(h(this,c))(u(r-i)),l=new d(this),f=new d(s),y=0;while(i<r)f.setUint8(y++,l.getUint8(i++));return s}})},b39a:function(e,t,n){"use strict";var i=n("da84"),r=n("ebb5"),s=n("d039"),a=i.Int8Array,o=r.aTypedArray,u=r.exportTypedArrayMethod,h=[].toLocaleString,c=[].slice,d=!!a&&s((function(){h.call(new a(1))})),p=s((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!s((function(){a.prototype.toLocaleString.call([1,2])}));u("toLocaleString",(function(){return h.apply(d?c.call(o(this)):o(this),arguments)}),p)},c1ac:function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").filter,s=n("4840"),a=i.aTypedArray,o=i.aTypedArrayConstructor,u=i.exportTypedArrayMethod;u("filter",(function(e){var t=r(a(this),e,arguments.length>1?arguments[1]:void 0),n=s(this,this.constructor),i=0,u=t.length,h=new(o(n))(u);while(u>i)h[i]=t[i++];return h}))},c1ea:function(e,t,n){},ca91:function(e,t,n){"use strict";var i=n("ebb5"),r=n("d58f").left,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("reduce",(function(e){return r(s(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}))},cd26:function(e,t,n){"use strict";var i=n("ebb5"),r=i.aTypedArray,s=i.exportTypedArrayMethod,a=Math.floor;s("reverse",(function(){var e,t=this,n=r(t).length,i=a(n/2),s=0;while(s<i)e=t[s],t[s++]=t[--n],t[n]=e;return t}))},d139:function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").find,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("find",(function(e){return r(s(this),e,arguments.length>1?arguments[1]:void 0)}))},d58f:function(e,t,n){var i=n("1c0b"),r=n("7b0b"),s=n("44ad"),a=n("50c4"),o=function(e){return function(t,n,o,u){i(n);var h=r(t),c=s(h),d=a(h.length),p=e?d-1:0,l=e?-1:1;if(o<2)while(1){if(p in c){u=c[p],p+=l;break}if(p+=l,e?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=l)p in c&&(u=n(u,c[p],p,h));return u}};e.exports={left:o(!1),right:o(!0)}},d5d6:function(e,t,n){"use strict";var i=n("ebb5"),r=n("b727").forEach,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("forEach",(function(e){r(s(this),e,arguments.length>1?arguments[1]:void 0)}))},e58c:function(e,t,n){"use strict";var i=n("fc6a"),r=n("a691"),s=n("50c4"),a=n("a640"),o=n("ae40"),u=Math.min,h=[].lastIndexOf,c=!!h&&1/[1].lastIndexOf(1,-0)<0,d=a("lastIndexOf"),p=o("indexOf",{ACCESSORS:!0,1:0}),l=c||!d||!p;e.exports=l?function(e){if(c)return h.apply(this,arguments)||0;var t=i(this),n=s(t.length),a=n-1;for(arguments.length>1&&(a=u(a,r(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in t&&t[a]===e)return a||0;return-1}:h},e91f:function(e,t,n){"use strict";var i=n("ebb5"),r=n("4d64").indexOf,s=i.aTypedArray,a=i.exportTypedArrayMethod;a("indexOf",(function(e){return r(s(this),e,arguments.length>1?arguments[1]:void 0)}))},ebb5:function(e,t,n){"use strict";var i,r=n("a981"),s=n("83ab"),a=n("da84"),o=n("861d"),u=n("5135"),h=n("f5df"),c=n("9112"),d=n("6eeb"),p=n("9bf2").f,l=n("e163"),f=n("d2bb"),y=n("b622"),v=n("90e3"),m=a.Int8Array,b=m&&m.prototype,g=a.Uint8ClampedArray,x=g&&g.prototype,z=m&&l(m),A=b&&l(b),w=Object.prototype,S=w.isPrototypeOf,P=y("toStringTag"),T=v("TYPED_ARRAY_TAG"),M=r&&!!f&&"Opera"!==h(a.opera),E=!1,_={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},C=function(e){var t=h(e);return"DataView"===t||u(_,t)},R=function(e){return o(e)&&u(_,h(e))},O=function(e){if(R(e))return e;throw TypeError("Target is not a typed array")},N=function(e){if(f){if(S.call(z,e))return e}else for(var t in _)if(u(_,i)){var n=a[t];if(n&&(e===n||S.call(n,e)))return e}throw TypeError("Target is not a typed array constructor")},I=function(e,t,n){if(s){if(n)for(var i in _){var r=a[i];r&&u(r.prototype,e)&&delete r.prototype[e]}A[e]&&!n||d(A,e,n?t:M&&b[e]||t)}},k=function(e,t,n){var i,r;if(s){if(f){if(n)for(i in _)r=a[i],r&&u(r,e)&&delete r[e];if(z[e]&&!n)return;try{return d(z,e,n?t:M&&m[e]||t)}catch(o){}}for(i in _)r=a[i],!r||r[e]&&!n||d(r,e,t)}};for(i in _)a[i]||(M=!1);if((!M||"function"!=typeof z||z===Function.prototype)&&(z=function(){throw TypeError("Incorrect invocation")},M))for(i in _)a[i]&&f(a[i],z);if((!M||!A||A===w)&&(A=z.prototype,M))for(i in _)a[i]&&f(a[i].prototype,A);if(M&&l(x)!==A&&f(x,A),s&&!u(A,P))for(i in E=!0,p(A,P,{get:function(){return o(this)?this[T]:void 0}}),_)a[i]&&c(a[i],T,i);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:E&&T,aTypedArray:O,aTypedArrayConstructor:N,exportTypedArrayMethod:I,exportTypedArrayStaticMethod:k,isView:C,isTypedArray:R,TypedArray:z,TypedArrayPrototype:A}},f8cd:function(e,t,n){var i=n("a691");e.exports=function(e){var t=i(e);if(t<0)throw RangeError("The argument can't be less than 0");return t}}}]);