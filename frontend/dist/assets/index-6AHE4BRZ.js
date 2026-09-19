function my(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x0={exports:{}},Rc={},v0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),xy=Symbol.for("react.portal"),vy=Symbol.for("react.fragment"),_y=Symbol.for("react.strict_mode"),yy=Symbol.for("react.profiler"),Sy=Symbol.for("react.provider"),wy=Symbol.for("react.context"),My=Symbol.for("react.forward_ref"),Ey=Symbol.for("react.suspense"),Ty=Symbol.for("react.memo"),by=Symbol.for("react.lazy"),Pp=Symbol.iterator;function Ay(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,S0={};function sa(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||_0}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w0(){}w0.prototype=sa.prototype;function Jf(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||_0}var Qf=Jf.prototype=new w0;Qf.constructor=Jf;y0(Qf,sa.prototype);Qf.isPureReactComponent=!0;var Np=Array.isArray,M0=Object.prototype.hasOwnProperty,eh={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function T0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,i)&&!E0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:yo,type:t,key:s,ref:a,props:r,_owner:eh.current}}function Cy(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function Ry(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lp=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ry(""+t.key):e.toString(36)}function bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case yo:case xy:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ou(a,0):i,Np(r)?(n="",t!=null&&(n=t.replace(Lp,"$&/")+"/"),bl(r,e,n,"",function(c){return c})):r!=null&&(th(r)&&(r=Cy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Lp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Np(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ou(s,o);a+=bl(s,e,n,l,r)}else if(l=Ay(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ou(s,o++),a+=bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Fo(t,e,n){if(t==null)return t;var i=[],r=0;return bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Py(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Al={transition:null},Ny={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Al,ReactCurrentOwner:eh};function b0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Fo,forEach:function(t,e,n){Fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fo(t,function(){e++}),e},toArray:function(t){return Fo(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=sa;Ye.Fragment=vy;Ye.Profiler=yy;Ye.PureComponent=Jf;Ye.StrictMode=_y;Ye.Suspense=Ey;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;Ye.act=b0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=y0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)M0.call(e,l)&&!E0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:yo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:wy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sy,_context:t},t.Consumer=t};Ye.createElement=T0;Ye.createFactory=function(t){var e=T0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:My,render:t}};Ye.isValidElement=th;Ye.lazy=function(t){return{$$typeof:by,_payload:{_status:-1,_result:t},_init:Py}};Ye.memo=function(t,e){return{$$typeof:Ty,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};Ye.unstable_act=b0;Ye.useCallback=function(t,e){return rn.current.useCallback(t,e)};Ye.useContext=function(t){return rn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return rn.current.useEffect(t,e)};Ye.useId=function(){return rn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return rn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Ye.useRef=function(t){return rn.current.useRef(t)};Ye.useState=function(t){return rn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return rn.current.useTransition()};Ye.version="18.3.1";v0.exports=Ye;var q=v0.exports;const nh=gy(q),Ly=my({__proto__:null,default:nh},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=q,Uy=Symbol.for("react.element"),Iy=Symbol.for("react.fragment"),Oy=Object.prototype.hasOwnProperty,Fy=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ky={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Oy.call(e,i)&&!ky.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uy,type:t,key:s,ref:a,props:r,_owner:Fy.current}}Rc.Fragment=Iy;Rc.jsx=A0;Rc.jsxs=A0;x0.exports=Rc;var v=x0.exports,xd={},C0={exports:{}},Tn={},R0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,ne){var L=I.length;I.push(ne);e:for(;0<L;){var R=L-1>>>1,J=I[R];if(0<r(J,ne))I[R]=ne,I[L]=J,L=R;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var ne=I[0],L=I.pop();if(L!==ne){I[0]=L;e:for(var R=0,J=I.length,H=J>>>1;R<H;){var F=2*(R+1)-1,G=I[F],ie=F+1,X=I[ie];if(0>r(G,L))ie<J&&0>r(X,G)?(I[R]=X,I[ie]=L,R=ie):(I[R]=G,I[F]=L,R=F);else if(ie<J&&0>r(X,L))I[R]=X,I[ie]=L,R=ie;else break e}}return ne}function r(I,ne){var L=I.sortIndex-ne.sortIndex;return L!==0?L:I.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,g=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var ne=n(c);ne!==null;){if(ne.callback===null)i(c);else if(ne.startTime<=I)i(c),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(c)}}function S(I){if(y=!1,x(I),!_)if(n(l)!==null)_=!0,$(C);else{var ne=n(c);ne!==null&&ee(S,ne.startTime-I)}}function C(I,ne){_=!1,y&&(y=!1,u(P),P=-1),g=!0;var L=h;try{for(x(ne),f=n(l);f!==null&&(!(f.expirationTime>ne)||I&&!U());){var R=f.callback;if(typeof R=="function"){f.callback=null,h=f.priorityLevel;var J=R(f.expirationTime<=ne);ne=t.unstable_now(),typeof J=="function"?f.callback=J:f===n(l)&&i(l),x(ne)}else i(l);f=n(l)}if(f!==null)var H=!0;else{var F=n(c);F!==null&&ee(S,F.startTime-ne),H=!1}return H}finally{f=null,h=L,g=!1}}var b=!1,E=null,P=-1,T=5,w=-1;function U(){return!(t.unstable_now()-w<T)}function W(){if(E!==null){var I=t.unstable_now();w=I;var ne=!0;try{ne=E(!0,I)}finally{ne?j():(b=!1,E=null)}}else b=!1}var j;if(typeof m=="function")j=function(){m(W)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,te=Q.port2;Q.port1.onmessage=W,j=function(){te.postMessage(null)}}else j=function(){p(W,0)};function $(I){E=I,b||(b=!0,j())}function ee(I,ne){P=p(function(){I(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,$(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var ne=3;break;default:ne=h}var L=h;h=ne;try{return I()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,ne){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=h;h=I;try{return ne()}finally{h=L}},t.unstable_scheduleCallback=function(I,ne,L){var R=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?R+L:R):L=R,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,I={id:d++,callback:ne,priorityLevel:I,startTime:L,expirationTime:J,sortIndex:-1},L>R?(I.sortIndex=L,e(c,I),n(l)===null&&I===n(c)&&(y?(u(P),P=-1):y=!0,ee(S,L-R))):(I.sortIndex=J,e(l,I),_||g||(_=!0,$(C))),I},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(I){var ne=h;return function(){var L=h;h=ne;try{return I.apply(this,arguments)}finally{h=L}}}})(P0);R0.exports=P0;var By=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=q,En=By;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,Ya={};function ts(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(Ya[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,Hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dp={},Up={};function Vy(t){return vd.call(Up,t)?!0:vd.call(Dp,t)?!1:Hy.test(t)?Up[t]=!0:(Dp[t]=!0,!1)}function jy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gy(t,e,n,i){if(e===null||typeof e>"u"||jy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ih,rh);Ht[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ih,rh);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ih,rh);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function sh(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gy(e,n,r,i)&&(n=null),i||r===null?Vy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),ah=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),U0=Symbol.for("react.offscreen"),Ip=Symbol.iterator;function ga(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,lu;function Ua(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var cu=!1;function uu(t,e){if(!t||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ua(t):""}function Wy(t){switch(t.tag){case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return t=uu(t.type,!1),t;case 11:return t=uu(t.type.render,!1),t;case 1:return t=uu(t.type,!0),t;default:return""}}function wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Es:return"Portal";case _d:return"Profiler";case ah:return"StrictMode";case yd:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D0:return(t.displayName||"Context")+".Consumer";case L0:return(t._context.displayName||"Context")+".Provider";case oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lh:return e=t.displayName||null,e!==null?e:wd(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return wd(t(e))}catch{}}return null}function Xy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(e);case 8:return e===ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function I0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qy(t){var e=I0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bo(t){t._valueTracker||(t._valueTracker=qy(t))}function O0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=I0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Md(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Op(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F0(t,e){e=e.checked,e!=null&&sh(t,"checked",e,!1)}function Ed(t,e){F0(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(Ia(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function k0(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$y=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){$y.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function H0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function V0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=H0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Yy=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(Yy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=null;function ch(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,ks=null,Bs=null;function zp(t){if(t=Mo(t)){if(typeof Nd!="function")throw Error(de(280));var e=t.stateNode;e&&(e=Uc(e),Nd(t.stateNode,t.type,e))}}function j0(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function G0(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function W0(t,e){return t(e)}function X0(){}var du=!1;function q0(t,e,n){if(du)return t(e,n);du=!0;try{return W0(t,e,n)}finally{du=!1,(ks!==null||Bs!==null)&&(X0(),G0())}}function Za(t,e){var n=t.stateNode;if(n===null)return null;var i=Uc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var Ld=!1;if(bi)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{Ld=!1}function Ky(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var za=!1,Yl=null,Kl=!1,Dd=null,Zy={onError:function(t){za=!0,Yl=t}};function Jy(t,e,n,i,r,s,a,o,l){za=!1,Yl=null,Ky.apply(Zy,arguments)}function Qy(t,e,n,i,r,s,a,o,l){if(Jy.apply(this,arguments),za){if(za){var c=Yl;za=!1,Yl=null}else throw Error(de(198));Kl||(Kl=!0,Dd=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hp(t){if(ns(t)!==t)throw Error(de(188))}function eS(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hp(r),t;if(s===i)return Hp(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function Y0(t){return t=eS(t),t!==null?K0(t):null}function K0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K0(t);if(e!==null)return e;t=t.sibling}return null}var Z0=En.unstable_scheduleCallback,Vp=En.unstable_cancelCallback,tS=En.unstable_shouldYield,nS=En.unstable_requestPaint,St=En.unstable_now,iS=En.unstable_getCurrentPriorityLevel,uh=En.unstable_ImmediatePriority,J0=En.unstable_UserBlockingPriority,Zl=En.unstable_NormalPriority,rS=En.unstable_LowPriority,Q0=En.unstable_IdlePriority,Pc=null,oi=null;function sS(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:lS,aS=Math.log,oS=Math.LN2;function lS(t){return t>>>=0,t===0?32:31-(aS(t)/oS|0)|0}var Ho=64,Vo=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Oa(o):(s&=a,s!==0&&(i=Oa(s)))}else a=n&~r,a!==0?i=Oa(a):s!==0&&(i=Oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function cS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=cS(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ud(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ex(){var t=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),t}function fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function dS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function tx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nx,fh,ix,rx,sx,Id=!1,jo=[],Ki=null,Zi=null,Ji=null,Ja=new Map,Qa=new Map,Gi=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function va(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Mo(e),e!==null&&fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function hS(t,e,n,i,r){switch(e){case"focusin":return Ki=va(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=va(Zi,t,e,n,i,r),!0;case"mouseover":return Ji=va(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ja.set(s,va(Ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qa.set(s,va(Qa.get(s)||null,t,e,n,i,r)),!0}return!1}function ax(t){var e=Lr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=$0(n),e!==null){t.blockedOn=e,sx(t.priority,function(){ix(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pd=i,n.target.dispatchEvent(i),Pd=null}else return e=Mo(n),e!==null&&fh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){Cl(t)&&n.delete(e)}function pS(){Id=!1,Ki!==null&&Cl(Ki)&&(Ki=null),Zi!==null&&Cl(Zi)&&(Zi=null),Ji!==null&&Cl(Ji)&&(Ji=null),Ja.forEach(Gp),Qa.forEach(Gp)}function _a(t,e){t.blockedOn===e&&(t.blockedOn=null,Id||(Id=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,pS)))}function eo(t){function e(r){return _a(r,t)}if(0<jo.length){_a(jo[0],t);for(var n=1;n<jo.length;n++){var i=jo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&_a(Ki,t),Zi!==null&&_a(Zi,t),Ji!==null&&_a(Ji,t),Ja.forEach(e),Qa.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)ax(n),n.blockedOn===null&&Gi.shift()}var zs=Li.ReactCurrentBatchConfig,Ql=!0;function mS(t,e,n,i){var r=st,s=zs.transition;zs.transition=null;try{st=1,hh(t,e,n,i)}finally{st=r,zs.transition=s}}function gS(t,e,n,i){var r=st,s=zs.transition;zs.transition=null;try{st=4,hh(t,e,n,i)}finally{st=r,zs.transition=s}}function hh(t,e,n,i){if(Ql){var r=Od(t,e,n,i);if(r===null)wu(t,e,i,ec,n),jp(t,i);else if(hS(r,t,e,n,i))i.stopPropagation();else if(jp(t,i),e&4&&-1<fS.indexOf(t)){for(;r!==null;){var s=Mo(r);if(s!==null&&nx(s),s=Od(t,e,n,i),s===null&&wu(t,e,i,ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wu(t,e,i,null,n)}}var ec=null;function Od(t,e,n,i){if(ec=null,t=ch(i),t=Lr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function ox(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iS()){case uh:return 1;case J0:return 4;case Zl:case rS:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var qi=null,ph=null,Rl=null;function lx(){if(Rl)return Rl;var t,e=ph,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function Wp(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:Wp,this.isPropagationStopped=Wp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=bn(aa),wo=xt({},aa,{view:0,detail:0}),xS=bn(wo),hu,pu,ya,Nc=xt({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(hu=t.screenX-ya.screenX,pu=t.screenY-ya.screenY):pu=hu=0,ya=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),Xp=bn(Nc),vS=xt({},Nc,{dataTransfer:0}),_S=bn(vS),yS=xt({},wo,{relatedTarget:0}),mu=bn(yS),SS=xt({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),wS=bn(SS),MS=xt({},aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ES=bn(MS),TS=xt({},aa,{data:0}),qp=bn(TS),bS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CS[t])?!!e[t]:!1}function gh(){return RS}var PS=xt({},wo,{key:function(t){if(t.key){var e=bS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NS=bn(PS),LS=xt({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=bn(LS),DS=xt({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),US=bn(DS),IS=xt({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=bn(IS),FS=xt({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kS=bn(FS),BS=[9,13,27,32],xh=bi&&"CompositionEvent"in window,Ha=null;bi&&"documentMode"in document&&(Ha=document.documentMode);var zS=bi&&"TextEvent"in window&&!Ha,cx=bi&&(!xh||Ha&&8<Ha&&11>=Ha),Yp=" ",Kp=!1;function ux(t,e){switch(t){case"keyup":return BS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function HS(t,e){switch(t){case"compositionend":return dx(e);case"keypress":return e.which!==32?null:(Kp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Kp?null:t;default:return null}}function VS(t,e){if(bs)return t==="compositionend"||!xh&&ux(t,e)?(t=lx(),Rl=ph=qi=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cx&&e.locale!=="ko"?null:e.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jS[t.type]:e==="textarea"}function fx(t,e,n,i){j0(i),e=tc(e,"onChange"),0<e.length&&(n=new mh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Va=null,to=null;function GS(t){Mx(t,0)}function Lc(t){var e=Rs(t);if(O0(e))return t}function WS(t,e){if(t==="change")return e}var hx=!1;if(bi){var gu;if(bi){var xu="oninput"in document;if(!xu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),xu=typeof Jp.oninput=="function"}gu=xu}else gu=!1;hx=gu&&(!document.documentMode||9<document.documentMode)}function Qp(){Va&&(Va.detachEvent("onpropertychange",px),to=Va=null)}function px(t){if(t.propertyName==="value"&&Lc(to)){var e=[];fx(e,to,t,ch(t)),q0(GS,e)}}function XS(t,e,n){t==="focusin"?(Qp(),Va=e,to=n,Va.attachEvent("onpropertychange",px)):t==="focusout"&&Qp()}function qS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(to)}function $S(t,e){if(t==="click")return Lc(e)}function YS(t,e){if(t==="input"||t==="change")return Lc(e)}function KS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:KS;function no(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vd.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function mx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gx(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZS(t){var e=gx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mx(n.ownerDocument.documentElement,n)){if(i!==null&&vh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tm(n,s);var a=tm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JS=bi&&"documentMode"in document&&11>=document.documentMode,As=null,Fd=null,ja=null,kd=!1;function nm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kd||As==null||As!==$l(i)||(i=As,"selectionStart"in i&&vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ja&&no(ja,i)||(ja=i,i=tc(Fd,"onSelect"),0<i.length&&(e=new mh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function Wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},vu={},xx={};bi&&(xx=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Dc(t){if(vu[t])return vu[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xx)return vu[t]=e[n];return t}var vx=Dc("animationend"),_x=Dc("animationiteration"),yx=Dc("animationstart"),Sx=Dc("transitionend"),wx=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){wx.set(t,e),ts(e,[t])}for(var _u=0;_u<im.length;_u++){var yu=im[_u],QS=yu.toLowerCase(),ew=yu[0].toUpperCase()+yu.slice(1);pr(QS,"on"+ew)}pr(vx,"onAnimationEnd");pr(_x,"onAnimationIteration");pr(yx,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Sx,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function rm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Qy(i,e,void 0,t),t.currentTarget=null}function Mx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;rm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;rm(r,o,c),s=l}}}if(Kl)throw t=Dd,Kl=!1,Dd=null,t}function ot(t,e){var n=e[jd];n===void 0&&(n=e[jd]=new Set);var i=t+"__bubble";n.has(i)||(Ex(e,t,2,!1),n.add(i))}function Su(t,e,n){var i=0;e&&(i|=4),Ex(n,t,i,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[Xo]){t[Xo]=!0,N0.forEach(function(n){n!=="selectionchange"&&(tw.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,Su("selectionchange",!1,e))}}function Ex(t,e,n,i){switch(ox(e)){case 1:var r=mS;break;case 4:r=gS;break;default:r=hh}n=r.bind(null,e,n,t),r=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}q0(function(){var c=s,d=ch(n),f=[];e:{var h=wx.get(t);if(h!==void 0){var g=mh,_=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":g=NS;break;case"focusin":_="focus",g=mu;break;case"focusout":_="blur",g=mu;break;case"beforeblur":case"afterblur":g=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=US;break;case vx:case _x:case yx:g=wS;break;case Sx:g=OS;break;case"scroll":g=xS;break;case"wheel":g=kS;break;case"copy":case"cut":case"paste":g=ES;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$p}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=Za(m,u),S!=null&&y.push(ro(m,S,x)))),p)break;m=m.return}0<y.length&&(h=new g(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Pd&&(_=n.relatedTarget||n.fromElement)&&(Lr(_)||_[Ai]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?Lr(_):null,_!==null&&(p=ns(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=Xp,S="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=$p,S="onPointerLeave",u="onPointerEnter",m="pointer"),p=g==null?h:Rs(g),x=_==null?h:Rs(_),h=new y(S,m+"leave",g,n,d),h.target=p,h.relatedTarget=x,S=null,Lr(d)===c&&(y=new y(u,m+"enter",_,n,d),y.target=x,y.relatedTarget=p,S=y),p=S,g&&_)t:{for(y=g,u=_,m=0,x=y;x;x=rs(x))m++;for(x=0,S=u;S;S=rs(S))x++;for(;0<m-x;)y=rs(y),m--;for(;0<x-m;)u=rs(u),x--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=rs(y),u=rs(u)}y=null}else y=null;g!==null&&sm(f,h,g,y,!1),_!==null&&p!==null&&sm(f,p,_,y,!0)}}e:{if(h=c?Rs(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=WS;else if(Zp(h))if(hx)C=YS;else{C=qS;var b=XS}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=$S);if(C&&(C=C(t,c))){fx(f,C,n,d);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Td(h,"number",h.value)}switch(b=c?Rs(c):window,t){case"focusin":(Zp(b)||b.contentEditable==="true")&&(As=b,Fd=c,ja=null);break;case"focusout":ja=Fd=As=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,nm(f,n,d);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":nm(f,n,d)}var E;if(xh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else bs?ux(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(cx&&n.locale!=="ko"&&(bs||P!=="onCompositionStart"?P==="onCompositionEnd"&&bs&&(E=lx()):(qi=d,ph="value"in qi?qi.value:qi.textContent,bs=!0)),b=tc(c,P),0<b.length&&(P=new qp(P,t,null,n,d),f.push({event:P,listeners:b}),E?P.data=E:(E=dx(n),E!==null&&(P.data=E)))),(E=zS?HS(t,n):VS(t,n))&&(c=tc(c,"onBeforeInput"),0<c.length&&(d=new qp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}Mx(f,e)})}function ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Za(t,n),s!=null&&i.unshift(ro(t,s,r)),s=Za(t,e),s!=null&&i.push(ro(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Za(n,s),l!=null&&a.unshift(ro(n,l,o))):r||(l=Za(n,s),l!=null&&a.push(ro(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var nw=/\r\n?/g,iw=/\u0000|\uFFFD/g;function am(t){return(typeof t=="string"?t:""+t).replace(nw,`
`).replace(iw,"")}function qo(t,e,n){if(e=am(e),am(t)!==e&&n)throw Error(de(425))}function nc(){}var Bd=null,zd=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vd=typeof setTimeout=="function"?setTimeout:void 0,rw=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,sw=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(aw)}:Vd;function aw(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),eo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);eo(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),si="__reactFiber$"+oa,so="__reactProps$"+oa,Ai="__reactContainer$"+oa,jd="__reactEvents$"+oa,ow="__reactListeners$"+oa,lw="__reactHandles$"+oa;function Lr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[si])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[si]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function Uc(t){return t[so]||null}var Gd=[],Ps=-1;function mr(t){return{current:t}}function ut(t){0>Ps||(t.current=Gd[Ps],Gd[Ps]=null,Ps--)}function at(t,e){Ps++,Gd[Ps]=t.current,t.current=e}var lr={},Jt=mr(lr),un=mr(!1),jr=lr;function $s(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function ic(){ut(un),ut(Jt)}function cm(t,e,n){if(Jt.current!==lr)throw Error(de(168));at(Jt,e),at(un,n)}function Tx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,Xy(t)||"Unknown",r));return xt({},n,i)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,jr=Jt.current,at(Jt,t),at(un,un.current),!0}function um(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=Tx(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,ut(un),ut(Jt),at(Jt,t)):ut(un),at(un,n)}var yi=null,Ic=!1,Eu=!1;function bx(t){yi===null?yi=[t]:yi.push(t)}function cw(t){Ic=!0,bx(t)}function gr(){if(!Eu&&yi!==null){Eu=!0;var t=0,e=st;try{var n=yi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Ic=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),Z0(uh,gr),r}finally{st=e,Eu=!1}}return null}var Ns=[],Ls=0,sc=null,ac=0,Pn=[],Nn=0,Gr=null,Si=1,wi="";function br(t,e){Ns[Ls++]=ac,Ns[Ls++]=sc,sc=t,ac=e}function Ax(t,e,n){Pn[Nn++]=Si,Pn[Nn++]=wi,Pn[Nn++]=Gr,Gr=t;var i=Si;t=wi;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Si=1<<32-Kn(e)+r|n<<r|i,wi=s+t}else Si=1<<s|n<<r|i,wi=t}function _h(t){t.return!==null&&(br(t,1),Ax(t,1,0))}function yh(t){for(;t===sc;)sc=Ns[--Ls],Ns[Ls]=null,ac=Ns[--Ls],Ns[Ls]=null;for(;t===Gr;)Gr=Pn[--Nn],Pn[Nn]=null,wi=Pn[--Nn],Pn[Nn]=null,Si=Pn[--Nn],Pn[Nn]=null}var wn=null,Sn=null,dt=!1,Xn=null;function Cx(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,Sn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Si,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,Sn=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xd(t){if(dt){var e=Sn;if(e){var n=e;if(!dm(t,e)){if(Wd(t))throw Error(de(418));e=Qi(n.nextSibling);var i=wn;e&&dm(t,e)?Cx(i,n):(t.flags=t.flags&-4097|2,dt=!1,wn=t)}}else{if(Wd(t))throw Error(de(418));t.flags=t.flags&-4097|2,dt=!1,wn=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function $o(t){if(t!==wn)return!1;if(!dt)return fm(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=Sn)){if(Wd(t))throw Rx(),Error(de(418));for(;e;)Cx(t,e),e=Qi(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=wn?Qi(t.stateNode.nextSibling):null;return!0}function Rx(){for(var t=Sn;t;)t=Qi(t.nextSibling)}function Ys(){Sn=wn=null,dt=!1}function Sh(t){Xn===null?Xn=[t]:Xn.push(t)}var uw=Li.ReactCurrentBatchConfig;function Sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function Yo(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function Px(t){function e(u,m){if(t){var x=u.deletions;x===null?(u.deletions=[m],u.flags|=16):x.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=ir(u,m),u.index=0,u.sibling=null,u}function s(u,m,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<m?(u.flags|=2,m):x):(u.flags|=2,m)):(u.flags|=1048576,m)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,m,x,S){return m===null||m.tag!==6?(m=Nu(x,u.mode,S),m.return=u,m):(m=r(m,x),m.return=u,m)}function l(u,m,x,S){var C=x.type;return C===Ts?d(u,m,x.props.children,S,x.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vi&&hm(C)===m.type)?(S=r(m,x.props),S.ref=Sa(u,m,x),S.return=u,S):(S=Fl(x.type,x.key,x.props,null,u.mode,S),S.ref=Sa(u,m,x),S.return=u,S)}function c(u,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Lu(x,u.mode,S),m.return=u,m):(m=r(m,x.children||[]),m.return=u,m)}function d(u,m,x,S,C){return m===null||m.tag!==7?(m=zr(x,u.mode,S,C),m.return=u,m):(m=r(m,x),m.return=u,m)}function f(u,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Nu(""+m,u.mode,x),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ko:return x=Fl(m.type,m.key,m.props,null,u.mode,x),x.ref=Sa(u,null,m),x.return=u,x;case Es:return m=Lu(m,u.mode,x),m.return=u,m;case Vi:var S=m._init;return f(u,S(m._payload),x)}if(Ia(m)||ga(m))return m=zr(m,u.mode,x,null),m.return=u,m;Yo(u,m)}return null}function h(u,m,x,S){var C=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:o(u,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ko:return x.key===C?l(u,m,x,S):null;case Es:return x.key===C?c(u,m,x,S):null;case Vi:return C=x._init,h(u,m,C(x._payload),S)}if(Ia(x)||ga(x))return C!==null?null:d(u,m,x,S,null);Yo(u,x)}return null}function g(u,m,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,o(m,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ko:return u=u.get(S.key===null?x:S.key)||null,l(m,u,S,C);case Es:return u=u.get(S.key===null?x:S.key)||null,c(m,u,S,C);case Vi:var b=S._init;return g(u,m,x,b(S._payload),C)}if(Ia(S)||ga(S))return u=u.get(x)||null,d(m,u,S,C,null);Yo(m,S)}return null}function _(u,m,x,S){for(var C=null,b=null,E=m,P=m=0,T=null;E!==null&&P<x.length;P++){E.index>P?(T=E,E=null):T=E.sibling;var w=h(u,E,x[P],S);if(w===null){E===null&&(E=T);break}t&&E&&w.alternate===null&&e(u,E),m=s(w,m,P),b===null?C=w:b.sibling=w,b=w,E=T}if(P===x.length)return n(u,E),dt&&br(u,P),C;if(E===null){for(;P<x.length;P++)E=f(u,x[P],S),E!==null&&(m=s(E,m,P),b===null?C=E:b.sibling=E,b=E);return dt&&br(u,P),C}for(E=i(u,E);P<x.length;P++)T=g(E,u,P,x[P],S),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?P:T.key),m=s(T,m,P),b===null?C=T:b.sibling=T,b=T);return t&&E.forEach(function(U){return e(u,U)}),dt&&br(u,P),C}function y(u,m,x,S){var C=ga(x);if(typeof C!="function")throw Error(de(150));if(x=C.call(x),x==null)throw Error(de(151));for(var b=C=null,E=m,P=m=0,T=null,w=x.next();E!==null&&!w.done;P++,w=x.next()){E.index>P?(T=E,E=null):T=E.sibling;var U=h(u,E,w.value,S);if(U===null){E===null&&(E=T);break}t&&E&&U.alternate===null&&e(u,E),m=s(U,m,P),b===null?C=U:b.sibling=U,b=U,E=T}if(w.done)return n(u,E),dt&&br(u,P),C;if(E===null){for(;!w.done;P++,w=x.next())w=f(u,w.value,S),w!==null&&(m=s(w,m,P),b===null?C=w:b.sibling=w,b=w);return dt&&br(u,P),C}for(E=i(u,E);!w.done;P++,w=x.next())w=g(E,u,P,w.value,S),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?P:w.key),m=s(w,m,P),b===null?C=w:b.sibling=w,b=w);return t&&E.forEach(function(W){return e(u,W)}),dt&&br(u,P),C}function p(u,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Ts&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ko:e:{for(var C=x.key,b=m;b!==null;){if(b.key===C){if(C=x.type,C===Ts){if(b.tag===7){n(u,b.sibling),m=r(b,x.props.children),m.return=u,u=m;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vi&&hm(C)===b.type){n(u,b.sibling),m=r(b,x.props),m.ref=Sa(u,b,x),m.return=u,u=m;break e}n(u,b);break}else e(u,b);b=b.sibling}x.type===Ts?(m=zr(x.props.children,u.mode,S,x.key),m.return=u,u=m):(S=Fl(x.type,x.key,x.props,null,u.mode,S),S.ref=Sa(u,m,x),S.return=u,u=S)}return a(u);case Es:e:{for(b=x.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(u,m.sibling),m=r(m,x.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Lu(x,u.mode,S),m.return=u,u=m}return a(u);case Vi:return b=x._init,p(u,m,b(x._payload),S)}if(Ia(x))return _(u,m,x,S);if(ga(x))return y(u,m,x,S);Yo(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,x),m.return=u,u=m):(n(u,m),m=Nu(x,u.mode,S),m.return=u,u=m),a(u)):n(u,m)}return p}var Ks=Px(!0),Nx=Px(!1),oc=mr(null),lc=null,Ds=null,wh=null;function Mh(){wh=Ds=lc=null}function Eh(t){var e=oc.current;ut(oc),t._currentValue=e}function qd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){lc=t,wh=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(wh!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(lc===null)throw Error(de(308));Ds=t,lc.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Dr=null;function Th(t){Dr===null?Dr=[t]:Dr.push(t)}function Lx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Th(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Th(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dh(t,n)}}function pm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,g=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,f,h):_,h==null)break e;f=xt({},f,h);break e;case 2:ji=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else g={eventTime:g,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=a,t.lanes=a,t.memoizedState=f}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var Eo={},li=mr(Eo),ao=mr(Eo),oo=mr(Eo);function Ur(t){if(t===Eo)throw Error(de(174));return t}function Ah(t,e){switch(at(oo,e),at(ao,t),at(li,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}ut(li),at(li,e)}function Zs(){ut(li),ut(ao),ut(oo)}function Ux(t){Ur(oo.current);var e=Ur(li.current),n=Ad(e,t.type);e!==n&&(at(ao,t),at(li,n))}function Ch(t){ao.current===t&&(ut(li),ut(ao))}var pt=mr(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tu=[];function Rh(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Ll=Li.ReactCurrentDispatcher,bu=Li.ReactCurrentBatchConfig,Wr=0,mt=null,Ct=null,Dt=null,dc=!1,Ga=!1,lo=0,dw=0;function Vt(){throw Error(de(321))}function Ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Nh(t,e,n,i,r,s){if(Wr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?mw:gw,t=n(i,r),Ga){s=0;do{if(Ga=!1,lo=0,25<=s)throw Error(de(301));s+=1,Dt=Ct=null,e.updateQueue=null,Ll.current=xw,t=n(i,r)}while(Ga)}if(Ll.current=fc,e=Ct!==null&&Ct.next!==null,Wr=0,Dt=Ct=mt=null,dc=!1,e)throw Error(de(300));return t}function Lh(){var t=lo!==0;return lo=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Fn(){if(Ct===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,Ct=t;else{if(t===null)throw Error(de(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function co(t,e){return typeof e=="function"?e(t):e}function Au(t){var e=Fn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Wr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,mt.lanes|=d,Xr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Jn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cu(t){var e=Fn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Jn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ix(){}function Ox(t,e){var n=mt,i=Fn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Dh(Bx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,uo(9,kx.bind(null,n,i,r,e),void 0,null),It===null)throw Error(de(349));Wr&30||Fx(n,e,r)}return r}function Fx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kx(t,e,n,i){e.value=n,e.getSnapshot=i,zx(e)&&Hx(t)}function Bx(t,e,n){return n(function(){zx(e)&&Hx(t)})}function zx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Hx(t){var e=Ci(t,1);e!==null&&Zn(e,t,1,-1)}function gm(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=pw.bind(null,mt,t),[e.memoizedState,t]}function uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vx(){return Fn().memoizedState}function Dl(t,e,n,i){var r=ti();mt.flags|=t,r.memoizedState=uo(1|e,n,void 0,i===void 0?null:i)}function Oc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&Ph(i,a.deps)){r.memoizedState=uo(e,n,s,i);return}}mt.flags|=t,r.memoizedState=uo(1|e,n,s,i)}function xm(t,e){return Dl(8390656,8,t,e)}function Dh(t,e){return Oc(2048,8,t,e)}function jx(t,e){return Oc(4,2,t,e)}function Gx(t,e){return Oc(4,4,t,e)}function Wx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xx(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,Wx.bind(null,e,t),n)}function Uh(){}function qx(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $x(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Yx(t,e,n){return Wr&21?(Jn(n,e)||(n=ex(),mt.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function fw(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=bu.transition;bu.transition={};try{t(!1),e()}finally{st=n,bu.transition=i}}function Kx(){return Fn().memoizedState}function hw(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zx(t))Jx(e,n);else if(n=Lx(t,e,n,i),n!==null){var r=tn();Zn(n,t,i,r),Qx(n,e,i)}}function pw(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zx(t))Jx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Jn(o,a)){var l=e.interleaved;l===null?(r.next=r,Th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Lx(t,e,r,i),n!==null&&(r=tn(),Zn(n,t,i,r),Qx(n,e,i))}}function Zx(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Jx(t,e){Ga=dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dh(t,n)}}var fc={readContext:On,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},mw={readContext:On,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,Wx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hw.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:Uh,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=fw.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ti();if(dt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),It===null)throw Error(de(349));Wr&30||Fx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,xm(Bx.bind(null,i,s,t),[t]),i.flags|=2048,uo(9,kx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=It.identifierPrefix;if(dt){var n=wi,i=Si;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gw={readContext:On,useCallback:qx,useContext:On,useEffect:Dh,useImperativeHandle:Xx,useInsertionEffect:jx,useLayoutEffect:Gx,useMemo:$x,useReducer:Au,useRef:Vx,useState:function(){return Au(co)},useDebugValue:Uh,useDeferredValue:function(t){var e=Fn();return Yx(e,Ct.memoizedState,t)},useTransition:function(){var t=Au(co)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:Ix,useSyncExternalStore:Ox,useId:Kx,unstable_isNewReconciler:!1},xw={readContext:On,useCallback:qx,useContext:On,useEffect:Dh,useImperativeHandle:Xx,useInsertionEffect:jx,useLayoutEffect:Gx,useMemo:$x,useReducer:Cu,useRef:Vx,useState:function(){return Cu(co)},useDebugValue:Uh,useDeferredValue:function(t){var e=Fn();return Ct===null?e.memoizedState=t:Yx(e,Ct.memoizedState,t)},useTransition:function(){var t=Cu(co)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:Ix,useSyncExternalStore:Ox,useId:Kx,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=nr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Zn(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=nr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Zn(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=nr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Zn(e,t,i,n),Nl(e,t,i))}};function vm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!no(n,i)||!no(r,s):!0}function ev(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=dn(e)?jr:Jt.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=dn(e)?jr:Jt.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fc.enqueueReplaceState(r,r.state,null),cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",i=e;do n+=Wy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vw=typeof WeakMap=="function"?WeakMap:Map;function tv(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pc||(pc=!0,of=i),Kd(t,e)},n}function nv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Kd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ym(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Lw.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var _w=Li.ReactCurrentOwner,cn=!1;function en(t,e,n,i){e.child=t===null?Nx(e,null,n,i):Ks(e,t.child,n,i)}function Mm(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=Nh(t,e,n,i,s,r),n=Lh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(dt&&n&&_h(e),e.flags|=1,en(t,e,i,r),e.child)}function Em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iv(t,e,s,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(a,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function iv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(no(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Zd(t,e,n,i,r)}function rv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Is,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Is,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(Is,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(Is,yn),yn|=i;return en(t,e,r,n),e.child}function sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,i,r){var s=dn(n)?jr:Jt.current;return s=$s(e,s),Hs(e,r),n=Nh(t,e,n,i,s,r),i=Lh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(dt&&i&&_h(e),e.flags|=1,en(t,e,n,r),e.child)}function Tm(t,e,n,i,r){if(dn(n)){var s=!0;rc(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Ul(t,e),ev(e,n,i),Yd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=dn(n)?jr:Jt.current,c=$s(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&_m(e,a,i,c),ji=!1;var h=e.memoizedState;a.state=h,cc(e,i,a,r),l=e.memoizedState,o!==i||h!==l||un.current||ji?(typeof d=="function"&&($d(e,n,d,i),l=e.memoizedState),(o=ji||vm(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Dx(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Gn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=dn(n)?jr:Jt.current,l=$s(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&_m(e,a,i,l),ji=!1,h=e.memoizedState,a.state=h,cc(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||un.current||ji?(typeof g=="function"&&($d(e,n,g,i),_=e.memoizedState),(c=ji||vm(e,n,c,i,h,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Jd(t,e,n,i,s,r)}function Jd(t,e,n,i,r,s){sv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&um(e,n,!1),Ri(t,e,s);i=e.stateNode,_w.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&um(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),Ah(t,e.containerInfo)}function bm(t,e,n,i,r){return Ys(),Sh(r),e.flags|=256,en(t,e,n,i),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function ov(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(pt,r&1),t===null)return Xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=zc(a,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ef(n),e.memoizedState=Qd,t):Ih(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return yw(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ir(o,s):(s=zr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ef(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Qd,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ko(t,e,n,i){return i!==null&&Sh(i),Ks(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yw(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ru(Error(de(422))),Ko(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,a),e.child.memoizedState=ef(a),e.memoizedState=Qd,s);if(!(e.mode&1))return Ko(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(de(419)),i=Ru(s,i,void 0),Ko(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=It,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Zn(i,t,r,-1))}return Hh(),i=Ru(Error(de(421))),Ko(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Dw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=Qi(r.nextSibling),wn=e,dt=!0,Xn=null,t!==null&&(Pn[Nn++]=Si,Pn[Nn++]=wi,Pn[Nn++]=Gr,Si=t.id,wi=t.overflow,Gr=e),e=Ih(e,i.children),e.flags|=4096,e)}function Am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qd(t.return,e,n)}function Pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,n,e);else if(t.tag===19)Am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pu(e,!0,n,null,s);break;case"together":Pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sw(t,e,n){switch(e.tag){case 3:av(e),Ys();break;case 5:Ux(e);break;case 1:dn(e.type)&&rc(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?ov(t,e,n):(at(pt,pt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,rv(t,e,n)}return Ri(t,e,n)}var cv,tf,uv,dv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};uv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(li.current);var s=null;switch(n){case"input":r=Md(t,r),i=Md(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=bd(t,r),i=bd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nc)}Cd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};dv=function(t,e,n,i){n!==i&&(e.flags|=4)};function wa(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ww(t,e,n){var i=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return dn(e.type)&&ic(),jt(e),null;case 3:return i=e.stateNode,Zs(),ut(un),ut(Jt),Rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(uf(Xn),Xn=null))),tf(t,e),jt(e),null;case 5:Ch(e);var r=Ur(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)uv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return jt(e),null}if(t=Ur(li.current),$o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[so]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<Fa.length;r++)ot(Fa[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Op(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":kp(i,s),ot("invalid",i)}Cd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,o,t),r=["children",""+o]):Ya.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":Bo(i),Fp(i,s,!0);break;case"textarea":Bo(i),Bp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[so]=i,cv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Rd(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fa.length;r++)ot(Fa[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Op(t,i),r=Md(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":kp(t,i),r=bd(t,i),ot("invalid",t);break;default:r=i}Cd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?V0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ka(t,l):typeof l=="number"&&Ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&sh(t,s,l,a))}switch(n){case"input":Bo(t),Fp(t,i,!1);break;case"textarea":Bo(t),Bp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)dv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Ur(oo.current),Ur(li.current),$o(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:qo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return jt(e),null;case 13:if(ut(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&Sn!==null&&e.mode&1&&!(e.flags&128))Rx(),Ys(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[si]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Xn!==null&&(uf(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):Hh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Zs(),tf(t,e),t===null&&io(e.stateNode.containerInfo),jt(e),null;case 10:return Eh(e.type._context),jt(e),null;case 17:return dn(e.type)&&ic(),jt(e),null;case 19:if(ut(pt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)wa(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=uc(t),a!==null){for(e.flags|=128,wa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Qs&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304)}else{if(!i)if(t=uc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return jt(e),null}else 2*St()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=pt.current,at(pt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return zh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function Mw(t,e){switch(yh(e),e.tag){case 1:return dn(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),ut(un),ut(Jt),Rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(ut(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(pt),null;case 4:return Zs(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var Zo=!1,qt=!1,Ew=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function nf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Cm=!1;function Tw(t,e){if(Bd=Ql,t=gx(),vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:t,selectionRange:n},Ql=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Gn(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return _=Cm,Cm=!1,_}function Wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nf(e,n,s)}r=r.next}while(r!==i)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[so],delete e[jd],delete e[ow],delete e[lw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var kt=null,Wn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)pv(t,e,n),n=n.sibling}function pv(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:qt||Us(n,e);case 6:var i=kt,r=Wn;kt=null,Ii(t,e,n),kt=i,Wn=r,kt!==null&&(Wn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Wn?(t=kt,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),eo(t)):Mu(kt,n.stateNode));break;case 4:i=kt,r=Wn,kt=n.stateNode.containerInfo,Wn=!0,Ii(t,e,n),kt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&nf(n,e,a),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!qt&&(Us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Ii(t,e,n),qt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ew),e.forEach(function(i){var r=Uw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,Wn=!1;break e;case 3:kt=o.stateNode.containerInfo,Wn=!0;break e;case 4:kt=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(kt===null)throw Error(de(160));pv(s,a,r),kt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mv(e,t),e=e.sibling}function mv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ei(t),i&4){try{Wa(3,t,t.return),kc(3,t)}catch(y){yt(t,t.return,y)}try{Wa(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:zn(e,t),ei(t),i&512&&n!==null&&Us(n,n.return);break;case 5:if(zn(e,t),ei(t),i&512&&n!==null&&Us(n,n.return),t.flags&32){var r=t.stateNode;try{Ka(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&F0(r,s),Rd(o,a);var c=Rd(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?V0(r,f):d==="dangerouslySetInnerHTML"?z0(r,f):d==="children"?Ka(r,f):sh(r,d,f,c)}switch(o){case"input":Ed(r,s);break;case"textarea":k0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Fs(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[so]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(zn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(zn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:zn(e,t),ei(t);break;case 13:zn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kh=St())),i&4&&Pm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||d,zn(e,t),qt=c):zn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ae=t,d=t.child;d!==null;){for(f=Ae=d;Ae!==null;){switch(h=Ae,g=h.child,h.tag){case 0:case 11:case 14:case 15:Wa(4,h,h.return);break;case 1:Us(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Us(h,h.return);break;case 22:if(h.memoizedState!==null){Lm(f);continue}}g!==null?(g.return=h,Ae=g):Lm(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=H0("display",a))}catch(y){yt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){yt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),ei(t),i&4&&Pm(t);break;case 21:break;default:zn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hv(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ka(r,""),i.flags&=-33);var s=Rm(t);af(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Rm(t);sf(t,o,a);break;default:throw Error(de(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bw(t,e,n){Ae=t,gv(t)}function gv(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Zo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||qt;o=Zo;var c=qt;if(Zo=a,(qt=l)&&!c)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?Dm(r):l!==null?(l.return=a,Ae=l):Dm(r);for(;s!==null;)Ae=s,gv(s),s=s.sibling;Ae=r,Zo=o,qt=c}Nm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Nm(t)}}function Nm(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&eo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}qt||e.flags&512&&rf(e)}catch(h){yt(e,e.return,h)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Lm(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Dm(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{rf(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{rf(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var Aw=Math.ceil,hc=Li.ReactCurrentDispatcher,Oh=Li.ReactCurrentOwner,In=Li.ReactCurrentBatchConfig,Je=0,It=null,At=null,Bt=0,yn=0,Is=mr(0),Rt=0,fo=null,Xr=0,Bc=0,Fh=0,Xa=null,on=null,kh=0,Qs=1/0,_i=null,pc=!1,of=null,tr=null,Jo=!1,$i=null,mc=0,qa=0,lf=null,Il=-1,Ol=0;function tn(){return Je&6?St():Il!==-1?Il:Il=St()}function nr(t){return t.mode&1?Je&2&&Bt!==0?Bt&-Bt:uw.transition!==null?(Ol===0&&(Ol=ex()),Ol):(t=st,t!==0||(t=window.event,t=t===void 0?16:ox(t.type)),t):1}function Zn(t,e,n,i){if(50<qa)throw qa=0,lf=null,Error(de(185));So(t,n,i),(!(Je&2)||t!==It)&&(t===It&&(!(Je&2)&&(Bc|=n),Rt===4&&Wi(t,Bt)),fn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Qs=St()+500,Ic&&gr()))}function fn(t,e){var n=t.callbackNode;uS(t,e);var i=Jl(t,t===It?Bt:0);if(i===0)n!==null&&Vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vp(n),e===1)t.tag===0?cw(Um.bind(null,t)):bx(Um.bind(null,t)),sw(function(){!(Je&6)&&gr()}),n=null;else{switch(tx(i)){case 1:n=uh;break;case 4:n=J0;break;case 16:n=Zl;break;case 536870912:n=Q0;break;default:n=Zl}n=Ev(n,xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xv(t,e){if(Il=-1,Ol=0,Je&6)throw Error(de(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=Jl(t,t===It?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gc(t,i);else{e=i;var r=Je;Je|=2;var s=_v();(It!==t||Bt!==e)&&(_i=null,Qs=St()+500,Br(t,e));do try{Pw();break}catch(o){vv(t,o)}while(!0);Mh(),hc.current=s,Je=r,At!==null?e=0:(It=null,Bt=0,e=Rt)}if(e!==0){if(e===2&&(r=Ud(t),r!==0&&(i=r,e=cf(t,r))),e===1)throw n=fo,Br(t,0),Wi(t,i),fn(t,St()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Cw(r)&&(e=gc(t,i),e===2&&(s=Ud(t),s!==0&&(i=s,e=cf(t,s))),e===1))throw n=fo,Br(t,0),Wi(t,i),fn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Ar(t,on,_i);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=kh+500-St(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vd(Ar.bind(null,t,on,_i),e);break}Ar(t,on,_i);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Aw(i/1960))-i,10<i){t.timeoutHandle=Vd(Ar.bind(null,t,on,_i),i);break}Ar(t,on,_i);break;case 5:Ar(t,on,_i);break;default:throw Error(de(329))}}}return fn(t,St()),t.callbackNode===n?xv.bind(null,t):null}function cf(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=gc(t,e),t!==2&&(e=on,on=n,e!==null&&uf(e)),t}function uf(t){on===null?on=t:on.push.apply(on,t)}function Cw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Fh,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function Um(t){if(Je&6)throw Error(de(327));Vs();var e=Jl(t,0);if(!(e&1))return fn(t,St()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var i=Ud(t);i!==0&&(e=i,n=cf(t,i))}if(n===1)throw n=fo,Br(t,0),Wi(t,e),fn(t,St()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,on,_i),fn(t,St()),null}function Bh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Qs=St()+500,Ic&&gr())}}function qr(t){$i!==null&&$i.tag===0&&!(Je&6)&&Vs();var e=Je;Je|=1;var n=In.transition,i=st;try{if(In.transition=null,st=1,t)return t()}finally{st=i,In.transition=n,Je=e,!(Je&6)&&gr()}}function zh(){yn=Is.current,ut(Is)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rw(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:Zs(),ut(un),ut(Jt),Rh();break;case 5:Ch(i);break;case 4:Zs();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:Eh(i.type._context);break;case 22:case 23:zh()}n=n.return}if(It=t,At=t=ir(t.current,null),Bt=yn=e,Rt=0,fo=null,Fh=Bc=Xr=0,on=Xa=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function vv(t,e){do{var n=At;try{if(Mh(),Ll.current=fc,dc){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dc=!1}if(Wr=0,Dt=Ct=mt=null,Ga=!1,lo=0,Oh.current=null,n===null||n.return===null){Rt=1,fo=e,At=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Bt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Sm(a);if(g!==null){g.flags&=-257,wm(g,a,o,s,e),g.mode&1&&ym(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){ym(s,c,e),Hh();break e}l=Error(de(426))}}else if(dt&&o.mode&1){var p=Sm(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),wm(p,a,o,s,e),Sh(Js(l,o));break e}}s=l=Js(l,o),Rt!==4&&(Rt=2),Xa===null?Xa=[s]:Xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=tv(s,l,e);pm(s,u);break e;case 1:o=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(tr===null||!tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=nv(s,o,e);pm(s,S);break e}}s=s.return}while(s!==null)}Sv(n)}catch(C){e=C,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function _v(){var t=hc.current;return hc.current=fc,t===null?fc:t}function Hh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(Xr&268435455)&&!(Bc&268435455)||Wi(It,Bt)}function gc(t,e){var n=Je;Je|=2;var i=_v();(It!==t||Bt!==e)&&(_i=null,Br(t,e));do try{Rw();break}catch(r){vv(t,r)}while(!0);if(Mh(),Je=n,hc.current=i,At!==null)throw Error(de(261));return It=null,Bt=0,Rt}function Rw(){for(;At!==null;)yv(At)}function Pw(){for(;At!==null&&!tS();)yv(At)}function yv(t){var e=Mv(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?Sv(t):At=e,Oh.current=null}function Sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mw(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=ww(n,e,yn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function Ar(t,e,n){var i=st,r=In.transition;try{In.transition=null,st=1,Nw(t,e,n,i)}finally{In.transition=r,st=i}return null}function Nw(t,e,n,i){do Vs();while($i!==null);if(Je&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dS(t,s),t===It&&(At=It=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,Ev(Zl,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var a=st;st=1;var o=Je;Je|=4,Oh.current=null,Tw(t,n),mv(n,t),ZS(zd),Ql=!!Bd,zd=Bd=null,t.current=n,bw(n),nS(),Je=o,st=a,In.transition=s}else t.current=n;if(Jo&&(Jo=!1,$i=t,mc=r),s=t.pendingLanes,s===0&&(tr=null),sS(n.stateNode),fn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,t=of,of=null,t;return mc&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===lf?qa++:(qa=0,lf=t):qa=0,gr(),null}function Vs(){if($i!==null){var t=tx(mc),e=In.transition,n=st;try{if(In.transition=null,st=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,mc=0,Je&6)throw Error(de(331));var r=Je;for(Je|=4,Ae=t.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ae=c;Ae!==null;){var d=Ae;switch(d.tag){case 0:case 11:case 15:Wa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Ae=f;else for(;Ae!==null;){d=Ae;var h=d.sibling,g=d.return;if(fv(d),d===c){Ae=null;break}if(h!==null){h.return=g,Ae=h;break}Ae=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ae=u;break e}Ae=s.return}}var m=t.current;for(Ae=m;Ae!==null;){a=Ae;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Ae=x;else e:for(a=m;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:kc(9,o)}}catch(C){yt(o,o.return,C)}if(o===a){Ae=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ae=S;break e}Ae=o.return}}if(Je=r,gr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Pc,t)}catch{}i=!0}return i}finally{st=n,In.transition=e}}return!1}function Im(t,e,n){e=Js(n,e),e=tv(t,e,1),t=er(t,e,1),e=tn(),t!==null&&(So(t,1,e),fn(t,e))}function yt(t,e,n){if(t.tag===3)Im(t,t,n);else for(;e!==null;){if(e.tag===3){Im(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Js(n,t),t=nv(e,t,1),e=er(e,t,1),t=tn(),e!==null&&(So(e,1,t),fn(e,t));break}}e=e.return}}function Lw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Bt&n)===n&&(Rt===4||Rt===3&&(Bt&130023424)===Bt&&500>St()-kh?Br(t,0):Fh|=n),fn(t,e)}function wv(t,e){e===0&&(t.mode&1?(e=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):e=1);var n=tn();t=Ci(t,e),t!==null&&(So(t,e,n),fn(t,n))}function Dw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wv(t,n)}function Uw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),wv(t,n)}var Mv;Mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,Sw(t,e,n);cn=!!(t.flags&131072)}else cn=!1,dt&&e.flags&1048576&&Ax(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=$s(e,Jt.current);Hs(e,n),r=Nh(null,e,i,t,r,n);var s=Lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Fc,e.stateNode=r,r._reactInternals=e,Yd(e,i,t,n),e=Jd(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&_h(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ow(i),t=Gn(i,t),r){case 0:e=Zd(null,e,i,t,n);break e;case 1:e=Tm(null,e,i,t,n);break e;case 11:e=Mm(null,e,i,t,n);break e;case 14:e=Em(null,e,i,Gn(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Tm(t,e,i,r,n);case 3:e:{if(av(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dx(t,e),cc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(de(423)),e),e=bm(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(de(424)),e),e=bm(t,e,i,n,r);break e}else for(Sn=Qi(e.stateNode.containerInfo.firstChild),wn=e,dt=!0,Xn=null,n=Nx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Ri(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return Ux(e),t===null&&Xd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Hd(i,r)?a=null:s!==null&&Hd(i,s)&&(e.flags|=32),sv(t,e),en(t,e,a,n),e.child;case 6:return t===null&&Xd(e),null;case 13:return ov(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Mm(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(oc,i._currentValue),i._currentValue=a,s!==null)if(Jn(s.value,a)){if(s.children===r.children&&!un.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(de(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),qd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=On(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Em(t,e,i,r,n);case 15:return iv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Ul(t,e),e.tag=1,dn(i)?(t=!0,rc(e)):t=!1,Hs(e,n),ev(e,i,r),Yd(e,i,r,n),Jd(null,e,i,!0,t,n);case 19:return lv(t,e,n);case 22:return rv(t,e,n)}throw Error(de(156,e.tag))};function Ev(t,e){return Z0(t,e)}function Iw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Iw(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ow(t){if(typeof t=="function")return Vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oh)return 11;if(t===lh)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Vh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ts:return zr(n.children,r,s,e);case ah:a=8,r|=8;break;case _d:return t=Ln(12,n,e,r|2),t.elementType=_d,t.lanes=s,t;case yd:return t=Ln(13,n,e,r),t.elementType=yd,t.lanes=s,t;case Sd:return t=Ln(19,n,e,r),t.elementType=Sd,t.lanes=s,t;case U0:return zc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:a=10;break e;case D0:a=9;break e;case oh:a=11;break e;case lh:a=14;break e;case Vi:a=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function zc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=U0,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Lu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fu(0),this.expirationTimes=fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jh(t,e,n,i,r,s,a,o,l){return t=new Fw(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function kw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Tv(t){if(!t)return lr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(dn(n))return Tx(t,n,e)}return e}function bv(t,e,n,i,r,s,a,o,l){return t=jh(n,i,!0,t,r,s,a,o,l),t.context=Tv(null),n=t.current,i=tn(),r=nr(n),s=Ti(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,So(t,r,i),fn(t,i),t}function Hc(t,e,n,i){var r=e.current,s=tn(),a=nr(r);return n=Tv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,a),t!==null&&(Zn(t,r,a,s),Nl(t,r,a)),a}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Om(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){Om(t,e),(t=t.alternate)&&Om(t,e)}function Bw(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}Vc.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));Hc(t,e,null,null)};Vc.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Hc(null,t,null,null)}),e[Ai]=null}};function Vc(t){this._internalRoot=t}Vc.prototype.unstable_scheduleHydration=function(t){if(t){var e=rx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&ax(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function zw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xc(a);s.call(c)}}var a=bv(e,i,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=a,t[Ai]=a.current,io(t.nodeType===8?t.parentNode:t),qr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=xc(l);o.call(c)}}var l=jh(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=l,t[Ai]=l.current,io(t.nodeType===8?t.parentNode:t),qr(function(){Hc(e,l,n,i)}),l}function Gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=xc(a);o.call(l)}}Hc(e,a,t,r)}else a=zw(n,e,t,r,i);return xc(a)}nx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(dh(e,n|1),fn(e,St()),!(Je&6)&&(Qs=St()+500,gr()))}break;case 13:qr(function(){var i=Ci(t,1);if(i!==null){var r=tn();Zn(i,t,1,r)}}),Gh(t,1)}};fh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=tn();Zn(e,t,134217728,n)}Gh(t,134217728)}};ix=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=tn();Zn(n,t,e,i)}Gh(t,e)}};rx=function(){return st};sx=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Nd=function(t,e,n){switch(e){case"input":if(Ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Uc(i);if(!r)throw Error(de(90));O0(i),Ed(i,r)}}}break;case"textarea":k0(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};W0=Bh;X0=qr;var Hw={usingClientEntryPoint:!1,Events:[Mo,Rs,Uc,j0,G0,Bh]},Ma={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vw={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||Bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Pc=Qo.inject(Vw),oi=Qo}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hw;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(de(200));return kw(t,e,null,n)};Tn.createRoot=function(t,e){if(!Xh(t))throw Error(de(299));var n=!1,i="",r=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jh(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,io(t.nodeType===8?t.parentNode:t),new Wh(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return qr(t)};Tn.hydrate=function(t,e,n){if(!jc(e))throw Error(de(200));return Gc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=bv(e,null,t,1,n??null,r,!1,s,a),t[Ai]=e.current,io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Vc(e)};Tn.render=function(t,e,n){if(!jc(e))throw Error(de(200));return Gc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!jc(t))throw Error(de(40));return t._reactRootContainer?(qr(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Tn.unstable_batchedUpdates=Bh;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!jc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return Gc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cv)}catch(t){console.error(t)}}Cv(),C0.exports=Tn;var jw=C0.exports,km=jw;xd.createRoot=km.createRoot,xd.hydrateRoot=km.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ho.apply(null,arguments)}var Yi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yi||(Yi={}));const Bm="popstate";function Gw(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return df("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:vc(r)}return Xw(e,n,null,t)}function wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ww(){return Math.random().toString(36).substr(2,8)}function zm(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,n,i){return n===void 0&&(n=null),ho({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?la(e):e,{state:n,key:e&&e.key||i||Ww()})}function vc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function la(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Xw(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Yi.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(ho({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Yi.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:o,location:y.location,delta:u})}function h(p,u){o=Yi.Push;let m=df(y.location,p,u);c=d()+1;let x=zm(m,c),S=y.createHref(m);try{a.pushState(x,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&l&&l({action:o,location:y.location,delta:1})}function g(p,u){o=Yi.Replace;let m=df(y.location,p,u);c=d();let x=zm(m,c),S=y.createHref(m);a.replaceState(x,"",S),s&&l&&l({action:o,location:y.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:vc(p);return m=m.replace(/ $/,"%20"),wt(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let y={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Bm,f),l=p,()=>{r.removeEventListener(Bm,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:g,go(p){return a.go(p)}};return y}var Hm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hm||(Hm={}));function qw(t,e,n){return n===void 0&&(n="/"),$w(t,e,n)}function $w(t,e,n,i){let r=typeof e=="string"?la(e):e,s=qh(r.pathname||"/",n);if(s==null)return null;let a=Pv(t);Yw(a);let o=null,l=oM(s);for(let c=0;o==null&&c<a.length;++c)o=rM(a[c],l);return o}function Pv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(wt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=rr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(wt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Pv(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:nM(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Nv(s.path))r(s,a,l)}),e}function Nv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Nv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Yw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:iM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Kw=/^:[\w-]+$/,Zw=3,Jw=2,Qw=1,eM=10,tM=-2,Vm=t=>t==="*";function nM(t,e){let n=t.split("/"),i=n.length;return n.some(Vm)&&(i+=tM),e&&(i+=Jw),n.filter(r=>!Vm(r)).reduce((r,s)=>r+(Kw.test(s)?Zw:s===""?Qw:eM),i)}function iM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function rM(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=sM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:rr([s,f.pathname]),pathnameBase:uM(rr([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=rr([s,f.pathnameBase]))}return a}function sM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=aM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let y=o[f]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=o[f];return g&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function aM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function oM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function lM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?la(t):t,s;return n?(n=Lv(n),n.startsWith("/")?s=jm(n.substring(1),"/"):s=jm(n,e)):s=e,{pathname:s,search:dM(i),hash:fM(r)}}function jm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Du(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $h(t,e){let n=cM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Yh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=la(t):(r=ho({},t),wt(!r.pathname||!r.pathname.includes("?"),Du("?","pathname","search",r)),wt(!r.pathname||!r.pathname.includes("#"),Du("#","pathname","hash",r)),wt(!r.search||!r.search.includes("#"),Du("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=lM(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Lv=t=>t.replace(/\/\/+/g,"/"),rr=t=>Lv(t.join("/")),uM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Dv=["post","put","patch","delete"];new Set(Dv);const pM=["get",...Dv];new Set(pM);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},po.apply(null,arguments)}const Kh=q.createContext(null),mM=q.createContext(null),xr=q.createContext(null),Wc=q.createContext(null),Di=q.createContext({outlet:null,matches:[],isDataRoute:!1}),Uv=q.createContext(null);function gM(t,e){let{relative:n}=e===void 0?{}:e;ca()||wt(!1);let{basename:i,navigator:r}=q.useContext(xr),{hash:s,pathname:a,search:o}=Ov(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:rr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function ca(){return q.useContext(Wc)!=null}function ua(){return ca()||wt(!1),q.useContext(Wc).location}function Iv(t){q.useContext(xr).static||q.useLayoutEffect(t)}function To(){let{isDataRoute:t}=q.useContext(Di);return t?PM():xM()}function xM(){ca()||wt(!1);let t=q.useContext(Kh),{basename:e,future:n,navigator:i}=q.useContext(xr),{matches:r}=q.useContext(Di),{pathname:s}=ua(),a=JSON.stringify($h(r,n.v7_relativeSplatPath)),o=q.useRef(!1);return Iv(()=>{o.current=!0}),q.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Yh(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:rr([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function vM(){let{matches:t}=q.useContext(Di),e=t[t.length-1];return e?e.params:{}}function Ov(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=q.useContext(xr),{matches:r}=q.useContext(Di),{pathname:s}=ua(),a=JSON.stringify($h(r,i.v7_relativeSplatPath));return q.useMemo(()=>Yh(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function _M(t,e){return yM(t,e)}function yM(t,e,n,i){ca()||wt(!1);let{navigator:r}=q.useContext(xr),{matches:s}=q.useContext(Di),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=ua(),d;if(e){var f;let p=typeof e=="string"?la(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||wt(!1),d=p}else d=c;let h=d.pathname||"/",g=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=qw(t,{pathname:g}),y=TM(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:rr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:rr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?q.createElement(Wc.Provider,{value:{location:po({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Yi.Pop}},y):y}function SM(){let t=RM(),e=hM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),n?q.createElement("pre",{style:r},n):null,null)}const wM=q.createElement(SM,null);class MM extends q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?q.createElement(Di.Provider,{value:this.props.routeContext},q.createElement(Uv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EM(t){let{routeContext:e,match:n,children:i}=t,r=q.useContext(Kh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),q.createElement(Di.Provider,{value:e},i)}function TM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||wt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:g}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let g,_=!1,y=null,p=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||wM,l&&(c<0&&h===0?(NM("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),m=()=>{let x;return g?x=y:_?x=p:f.route.Component?x=q.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,q.createElement(EM,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?q.createElement(MM,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:m(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):m()},null)}var Fv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Fv||{}),kv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kv||{});function bM(t){let e=q.useContext(Kh);return e||wt(!1),e}function AM(t){let e=q.useContext(mM);return e||wt(!1),e}function CM(t){let e=q.useContext(Di);return e||wt(!1),e}function Bv(t){let e=CM(),n=e.matches[e.matches.length-1];return n.route.id||wt(!1),n.route.id}function RM(){var t;let e=q.useContext(Uv),n=AM(),i=Bv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function PM(){let{router:t}=bM(Fv.UseNavigateStable),e=Bv(kv.UseNavigateStable),n=q.useRef(!1);return Iv(()=>{n.current=!0}),q.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,po({fromRouteId:e},s)))},[t,e])}const Gm={};function NM(t,e,n){Gm[t]||(Gm[t]=!0)}function LM(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function DM(t){let{to:e,replace:n,state:i,relative:r}=t;ca()||wt(!1);let{future:s,static:a}=q.useContext(xr),{matches:o}=q.useContext(Di),{pathname:l}=ua(),c=To(),d=Yh(e,$h(o,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(d);return q.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function Ms(t){wt(!1)}function UM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Yi.Pop,navigator:s,static:a=!1,future:o}=t;ca()&&wt(!1);let l=e.replace(/^\/*/,"/"),c=q.useMemo(()=>({basename:l,navigator:s,static:a,future:po({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=la(i));let{pathname:d="/",search:f="",hash:h="",state:g=null,key:_="default"}=i,y=q.useMemo(()=>{let p=qh(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:g,key:_},navigationType:r}},[l,d,f,h,g,_,r]);return y==null?null:q.createElement(xr.Provider,{value:c},q.createElement(Wc.Provider,{children:n,value:y}))}function IM(t){let{children:e,location:n}=t;return _M(ff(e),n)}new Promise(()=>{});function ff(t,e){e===void 0&&(e=[]);let n=[];return q.Children.forEach(t,(i,r)=>{if(!q.isValidElement(i))return;let s=[...e,r];if(i.type===q.Fragment){n.push.apply(n,ff(i.props.children,s));return}i.type!==Ms&&wt(!1),!i.props.index||!i.props.children||wt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=ff(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hf(){return hf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hf.apply(null,arguments)}function OM(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function FM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kM(t,e){return t.button===0&&(!e||e==="_self")&&!FM(t)}const BM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zM="6";try{window.__reactRouterVersion=zM}catch{}const HM="startTransition",Wm=Ly[HM];function VM(t){let{basename:e,children:n,future:i,window:r}=t,s=q.useRef();s.current==null&&(s.current=Gw({window:r,v5Compat:!0}));let a=s.current,[o,l]=q.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=q.useCallback(f=>{c&&Wm?Wm(()=>l(f)):l(f)},[l,c]);return q.useLayoutEffect(()=>a.listen(d),[a,d]),q.useEffect(()=>LM(i),[i]),q.createElement(UM,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const jM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yt=q.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=OM(e,BM),{basename:g}=q.useContext(xr),_,y=!1;if(typeof c=="string"&&GM.test(c)&&(_=c,jM))try{let x=new URL(window.location.href),S=c.startsWith("//")?new URL(x.protocol+c):new URL(c),C=qh(S.pathname,g);S.origin===x.origin&&C!=null?c=C+S.search+S.hash:y=!0}catch{}let p=gM(c,{relative:r}),u=WM(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function m(x){i&&i(x),x.defaultPrevented||u(x)}return q.createElement("a",hf({},h,{href:_||p,onClick:y||s?i:m,ref:n,target:l}))});var Xm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xm||(Xm={}));var qm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(qm||(qm={}));function WM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=To(),c=ua(),d=Ov(t,{relative:a});return q.useCallback(f=>{if(kM(f,n)){f.preventDefault();let h=i!==void 0?i:vc(c)===vc(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}function zv(t,e){return function(){return t.apply(e,arguments)}}const{toString:XM}=Object.prototype,{getPrototypeOf:cr}=Object,{iterator:bo,toStringTag:Hv}=Symbol,mo=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Vv=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),jv=(t,e,n)=>t===Object.prototype||!n&&e===null,qM=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(Vv(n))return!1;const i=Object.getOwnPropertyDescriptor(t,n);return!!i&&i.configurable&&i.writable===!0})},go=(t,e)=>{let n=t;const i=[];for(;n!=null;){if(i.indexOf(n)!==-1)return!1;i.push(n);const r=cr(n);if(jv(n,r,n===t))return!1;if(mo(n,e))return!0;n=r}return!1},$M=(t,e)=>t!=null&&go(t,e)?t[e]:void 0,YM=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=cr(t);if(e===null&&qM(t))return t;const n=Object.create(null),i=Object.create(null),r=[];let s=t;for(;s!=null&&r.indexOf(s)===-1;){r.push(s);const a=s===t?e:cr(s);if(jv(s,a,s===t))break;const o=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&o.push(...Object.getOwnPropertySymbols(s));for(const l of o)Vv(l)||mo(i,l)||(n[l]=t[l],i[l]=!0);s=a}return n},Zh=(t=>e=>{const n=XM.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kn=t=>(t=t.toLowerCase(),e=>Zh(e)===t),Xc=t=>e=>typeof e===t,{isArray:$r}=Array,Yr=Xc("undefined");function da(t){return t!==null&&!Yr(t)&&t.constructor!==null&&!Yr(t.constructor)&&hn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Gv=kn("ArrayBuffer");function KM(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Gv(t.buffer),e}const ZM=Xc("string"),hn=Xc("function"),Wv=Xc("number"),fa=t=>t!==null&&typeof t=="object",JM=t=>t===!0||t===!1,kl=t=>{if(!fa(t))return!1;const e=cr(t);return(e===null||e===Object.prototype||cr(e)===null)&&!go(t,Hv)&&!go(t,bo)},QM=t=>{if(!fa(t)||da(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},e1=kn("Date"),t1=kn("File"),n1=t=>!!(t&&typeof t.uri<"u"),i1=t=>t&&typeof t.getParts<"u",r1=kn("Blob"),s1=kn("FileList"),a1=kn("Set"),o1=t=>fa(t)&&hn(t.pipe);function l1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const $m=l1(),Ym=typeof $m.FormData<"u"?$m.FormData:void 0,c1=t=>{if(!t)return!1;if(Ym&&t instanceof Ym)return!0;const e=cr(t);if(!e||e===Object.prototype||!hn(t.append))return!1;const n=Zh(t);return n==="formdata"||n==="object"&&hn(t.toString)&&t.toString()==="[object FormData]"},u1=kn("URLSearchParams"),[d1,f1,h1,p1]=["ReadableStream","Request","Response","Headers"].map(kn),m1=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ao(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),$r(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(da(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,t[o],o,t)}}function Xv(t,e){if(da(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qv=t=>!Yr(t)&&t!==Ir;function pf(...t){const{caseless:e,skipUndefined:n}=qv(this)&&this||{},i={},r=(s,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const o=e&&typeof a=="string"&&Xv(i,a)||a,l=mo(i,o)?i[o]:void 0;kl(l)&&kl(s)?i[o]=pf(l,s):kl(s)?i[o]=pf({},s):$r(s)?i[o]=s.slice():(!n||!Yr(s))&&(i[o]=s)};for(let s=0,a=t.length;s<a;s++){const o=t[s];if(!o||da(o)||(Ao(o,r),typeof o!="object"||$r(o)))continue;const l=Object.getOwnPropertySymbols(o);for(let c=0;c<l.length;c++){const d=l[c];A1.call(o,d)&&r(o[d],d)}}return i}const g1=(t,e,n,{allOwnKeys:i}={})=>(Ao(e,(r,s)=>{n&&hn(r)?Object.defineProperty(t,s,{__proto__:null,value:zv(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),x1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),v1=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},_1=(t,e,n,i)=>{let r,s,a;const o={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&cr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},y1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},S1=t=>{if(!t)return null;if($r(t))return t;let e=t.length;if(!Wv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},w1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&cr(Uint8Array)),M1=(t,e)=>{const i=(t&&t[bo]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},E1=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},T1=kn("HTMLFormElement"),b1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:A1}=Object.prototype,C1=kn("RegExp"),$v=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ao(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},R1=t=>{$v(t,(e,n)=>{if(hn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(hn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},P1=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return $r(t)?i(t):i(String(t).split(e)),n},N1=()=>{},L1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function D1(t){return!!(t&&hn(t.append)&&t[Hv]==="FormData"&&t[bo])}const U1=t=>{const e=new WeakSet,n=i=>{if(fa(i)){if(e.has(i))return;if(da(i))return i;if(!("toJSON"in i)){e.add(i);let r;if(a1(i)){r=[];for(const s of i){const a=n(s);!Yr(a)&&r.push(a)}}else r=$r(i)?[]:{},Ao(i,(s,a)=>{const o=n(s);!Yr(o)&&(r[a]=o)});return e.delete(i),r}}return i};return n(t)},I1=kn("AsyncFunction"),O1=t=>t&&(fa(t)||hn(t))&&hn(t.then)&&hn(t.catch),Yv=((t,e)=>t?setImmediate:e?((n,i)=>(Ir.addEventListener("message",({source:r,data:s})=>{r===Ir&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Ir.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",hn(Ir.postMessage)),F1=typeof queueMicrotask<"u"?queueMicrotask.bind(Ir):typeof process<"u"&&process.nextTick||Yv,Kv=t=>t!=null&&hn(t[bo]),k1=t=>t!=null&&go(t,bo)&&Kv(t),O={isArray:$r,isArrayBuffer:Gv,isBuffer:da,isFormData:c1,isArrayBufferView:KM,isString:ZM,isNumber:Wv,isBoolean:JM,isObject:fa,isPlainObject:kl,isEmptyObject:QM,isReadableStream:d1,isRequest:f1,isResponse:h1,isHeaders:p1,isUndefined:Yr,isDate:e1,isFile:t1,isReactNativeBlob:n1,isReactNative:i1,isBlob:r1,isRegExp:C1,isFunction:hn,isStream:o1,isURLSearchParams:u1,isTypedArray:w1,isFileList:s1,forEach:Ao,merge:pf,extend:g1,trim:m1,stripBOM:x1,inherits:v1,toFlatObject:_1,kindOf:Zh,kindOfTest:kn,endsWith:y1,toArray:S1,forEachEntry:M1,matchAll:E1,isHTMLForm:T1,hasOwnProperty:mo,hasOwnProp:mo,hasOwnInPrototypeChain:go,getSafeProp:$M,toSafeFlatObject:YM,reduceDescriptors:$v,freezeMethods:R1,toObjectSet:P1,toCamelCase:b1,noop:N1,toFiniteNumber:L1,findKey:Xv,global:Ir,isContextDefined:qv,isSpecCompliantForm:D1,toJSONObject:U1,isAsyncFn:I1,isThenable:O1,setImmediate:Yv,asap:F1,isIterable:Kv,isSafeIterable:k1},B1=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),z1=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim();const o=O.hasOwnProp(e,n);!n||o&&O.hasOwnProp(B1,n)||(n==="set-cookie"?o?e[n].push(i):e[n]=[i]:e[n]=o?e[n]+", "+i:i)}),e};function H1(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const V1=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),j1=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Jh(t,e){return O.isArray(t)?t.map(n=>Jh(n,e)):H1(String(t).replace(e,""))}const G1=t=>Jh(t,V1),W1=t=>Jh(t,j1);function Zv(t){const e=Object.create(null);return O.forEach(t.toJSON(),(n,i)=>{e[i]=W1(n)}),e}const Km=Symbol("internals");function Ea(t){return t&&String(t).trim().toLowerCase()}function Bl(t){return t===!1||t==null?t:O.isArray(t)?t.map(Bl):G1(String(t))}function X1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const q1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Uu(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function $1(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let i=1;i<e;i++){const r=t.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return t;n+=t[i]}return n}function Y1(t){const e=Object.create(null),n=String(t);let i=0,r=!1,s=!1;function a(o){const l=Uu(n.slice(i,o)),c=l.indexOf("=");if(c<1)return;const d=Uu(l.slice(0,c));if(!q1.test(d))return;const f=d.toLowerCase();if(f==="__proto__"||f==="constructor"||f==="prototype")return;const h=Uu(l.slice(c+1));e[f]=$1(h)}for(let o=0;o<n.length;o++){const l=n.charCodeAt(o);r?s?s=!1:l===92?s=!0:l===34&&(r=!1):l===34?r=!0:(l===44||l===59)&&(a(o),i=o+1)}return a(n.length),e}const K1=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Iu(t,e,n,i,r){if(O.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!O.isString(e)){if(O.isString(i))return e.indexOf(i)!==-1;if(O.isRegExp(i))return i.test(e)}}function Z1(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function J1(t,e){const n=O.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let Kt=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(o,l,c){const d=Ea(l);if(!d)return;const f=O.findKey(r,d);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Bl(o))}const a=(o,l)=>O.forEach(o,(c,d)=>s(c,d,l));if(O.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(O.isString(e)&&(e=e.trim())&&!K1(e))a(z1(e),n);else if(O.isObject(e)&&O.isSafeIterable(e)){let o=Object.create(null),l,c;for(const d of e){if(!O.isArray(d))throw new TypeError("Object iterator must return a key-value pair");c=d[0],O.hasOwnProp(o,c)?(l=o[c],o[c]=O.isArray(l)?[...l,d[1]]:[l,d[1]]):o[c]=d[1]}a(o,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Ea(e),e){const i=O.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return X1(r);if(O.isFunction(n))return n.call(this,r,i);if(O.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ea(e),e){const i=O.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Iu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=Ea(a),a){const o=O.findKey(i,a);o&&(!n||Iu(i,i[o],o,n))&&(delete i[o],r=!0)}}return O.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Iu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return O.forEach(this,(r,s)=>{const a=O.findKey(i,s);if(a){n[a]=Bl(r),delete n[s];return}const o=e?Z1(s):String(s).trim();o!==s&&delete n[s],n[o]=Bl(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return O.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&O.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return O.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Y1(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Km]=this[Km]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=Ea(a);i[o]||(J1(r,a),i[o]=!0)}return O.isArray(e)?e.forEach(s):s(e),this}};Kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(Kt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});O.freezeMethods(Kt);const _c="[REDACTED ****]";function Q1(t){if(O.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(O.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function eE(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||O.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof Kt&&(s=s.toJSON()),i.push(s);let a;if(O.isArray(s))a=[],s.forEach((o,l)=>{const c=r(o);O.isUndefined(c)||(a[l]=c)});else{if(!O.isPlainObject(s)&&Q1(s))return i.pop(),s;a=Object.create(null);for(const[o,l]of Object.entries(s)){const c=n.has(o.toLowerCase())?_c:r(l);O.isUndefined(c)||(a[o]=c)}}return i.pop(),a};return r(t)}function Zm(t){try{return String(t)}catch{return""}}function tE(t){return t.errors.map(n=>{try{return n&&n.message?Zm(n.message):Zm(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let xe=class Jv extends Error{static from(e,n,i,r,s,a){let o=e.message;!o&&O.isArray(e.errors)&&e.errors.length&&(o=tE(e));const l=new Jv(o,n||e.code,i,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),a&&Object.assign(l,a),l}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&O.hasOwnProp(e,"redact")?e.redact:void 0,i=O.isArray(n)&&n.length>0?eE(e,n):O.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};xe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";xe.ERR_BAD_OPTION="ERR_BAD_OPTION";xe.ECONNABORTED="ECONNABORTED";xe.ETIMEDOUT="ETIMEDOUT";xe.ECONNREFUSED="ECONNREFUSED";xe.ERR_NETWORK="ERR_NETWORK";xe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";xe.ERR_DEPRECATED="ERR_DEPRECATED";xe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";xe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";xe.ERR_CANCELED="ERR_CANCELED";xe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";xe.ERR_INVALID_URL="ERR_INVALID_URL";xe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const nE=null,Qv=100;function mf(t){return O.isPlainObject(t)||O.isArray(t)}function e_(t){return O.endsWith(t,"[]")?t.slice(0,-2):t}function Ou(t,e,n){return t?t.concat(e).map(function(r,s){return r=e_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function iE(t){return O.isArray(t)&&!t.some(mf)}const rE=O.toFlatObject(O,{},null,function(e){return/^is[A-Z]/.test(e)});function qc(t,e,n){if(!O.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(m,x)=>{const S=O.getSafeProp(n,m);return O.isUndefined(S)?x:S},r=i("metaTokens",!0),s=i("visitor")||y,a=i("dots",!1),o=i("indexes",!1),l=i("Blob")||typeof Blob<"u"&&Blob,c=i("maxDepth",Qv),d=l&&O.isSpecCompliantForm(e),f=[];if(!O.isFunction(s))throw new TypeError("visitor must be a function");function h(m){if(m===null)return"";if(O.isDate(m))return m.toISOString();if(O.isBoolean(m))return m.toString();if(!d&&O.isBlob(m))throw new xe("Blob is not supported. Use a Buffer instead.");if(O.isArrayBuffer(m)||O.isTypedArray(m)){if(d&&typeof l=="function")return new l([m]);throw new xe("Blob is not supported. Use a Buffer instead.",xe.ERR_NOT_SUPPORT)}return m}function g(m){if(m>c)throw new xe("Object is too deeply nested ("+m+" levels). Max depth: "+c,xe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function _(m,x){if(c===1/0)return JSON.stringify(m);const S=[];return JSON.stringify(m,function(b,E){if(!O.isObject(E))return E;for(;S.length&&S[S.length-1]!==this;)S.pop();return S.push(E),g(x+S.length-1),E})}function y(m,x,S){let C=m;if(O.isReactNative(e)&&O.isReactNativeBlob(m))return e.append(Ou(S,x,a),h(m)),!1;if(m&&!S&&typeof m=="object"){if(O.endsWith(x,"{}"))x=r?x:x.slice(0,-2),m=_(m,1);else if(O.isArray(m)&&iE(m)||(O.isFileList(m)||O.endsWith(x,"[]"))&&(C=O.toArray(m)))return x=e_(x),C.forEach(function(E,P){!(O.isUndefined(E)||E===null)&&e.append(o===!0?Ou([x],P,a):o===null?x:x+"[]",h(E))}),!1}return mf(m)?!0:(e.append(Ou(S,x,a),h(m)),!1)}const p=Object.assign(rE,{defaultVisitor:y,convertValue:h,isVisitable:mf});function u(m,x,S=0){if(!O.isUndefined(m)){if(g(S),f.indexOf(m)!==-1)throw new Error("Circular reference detected in "+x.join("."));f.push(m),O.forEach(m,function(b,E){(!(O.isUndefined(b)||b===null)&&s.call(e,b,O.isString(E)?E.trim():E,x,p))===!0&&u(b,x?x.concat(E):[E],S+1)}),f.pop()}}if(!O.isObject(t))throw new TypeError("data must be an object");return u(t),e}function Jm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Qh(t,e){this._pairs=[],t&&qc(t,this,e)}const t_=Qh.prototype;t_.append=function(e,n){this._pairs.push([e,n])};t_.toString=function(e){const n=e?i=>e.call(this,i,Jm):Jm;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function sE(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function n_(t,e,n){if(!e)return t;t=t||"";const i=O.isFunction(n)?{serialize:n}:n,r=O.getSafeProp(i,"encode")||sE,s=O.getSafeProp(i,"serialize");let a;if(s?a=s(e,i):a=O.isURLSearchParams(e)?e.toString():new Qh(e,i).toString(r),a){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}const Ta=Symbol("internals");function i_(t){return t?t.length:0}function Qm(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function ba(t,e){const n=t.handlers,i=i_(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):i!==e.handlersLength&&(i?e.handlerEntries.forEach(function(s,a){n[s.index]!==s.handler&&e.handlerEntries.delete(a)}):e.handlerEntries.clear()),e.handlersLength=i}class eg{constructor(){this.handlers=[],this[Ta]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,i){const r={fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},s=this[Ta];this.handlers==null&&(this.handlers=[]),ba(this,s);const a=s.nextId++;return this.handlers.push(r),s.handlerEntries.set(a,{handler:r,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,a}eject(e){const n=this[Ta];ba(this,n);const i=n.handlerEntries.get(e);if(i){if(n.handlerEntries.delete(e),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||(Qm(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],ba(this,this[Ta]))}forEach(e){const n=this[Ta];ba(this,n),n.iterationDepth++;try{O.forEach(this.handlers,function(r){r!==null&&e(r)})}finally{--n.iterationDepth||(ba(this,n),Qm(this.handlers),n.handlersLength=i_(this.handlers))}}}const ep={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},aE=typeof URLSearchParams<"u"?URLSearchParams:Qh,oE=typeof FormData<"u"?FormData:null,lE=typeof Blob<"u"?Blob:null,cE={isBrowser:!0,classes:{URLSearchParams:aE,FormData:oE,Blob:lE},protocols:["http","https","file","blob","url","data"]},tp=typeof window<"u"&&typeof document<"u",gf=typeof navigator=="object"&&navigator||void 0,uE=tp&&(!gf||["ReactNative","NativeScript","NS"].indexOf(gf.product)<0),dE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fE=tp&&window.location.href||"http://localhost",hE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:tp,hasStandardBrowserEnv:uE,hasStandardBrowserWebWorkerEnv:dE,navigator:gf,origin:fE},Symbol.toStringTag,{value:"Module"})),Ut={...hE,...cE};function pE(t,e){return qc(t,new Ut.classes.URLSearchParams,{visitor:function(n,i,r,s){return Ut.isNode&&O.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const tg=Qv;function r_(t){if(t>tg)throw new xe("FormData field is too deeply nested ("+t+" levels). Max depth: "+tg,xe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function mE(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(t))!==null;)r_(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function gE(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function s_(t){function e(n,i,r,s){r_(s);let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=n.length;return a=!a&&O.isArray(r)?r.length:a,l?(O.hasOwnProp(r,a)?r[a]=O.isArray(r[a])?r[a].concat(i):[r[a],i]:r[a]=i,!o):((!O.hasOwnProp(r,a)||!O.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&O.isArray(r[a])&&(r[a]=gE(r[a])),!o)}if(O.isFormData(t)&&O.isFunction(t.entries)){const n={};return O.forEachEntry(t,(i,r)=>{e(mE(i),r,n,0)}),n}return null}const a_=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),ss=(t,e)=>t!=null&&O.hasOwnProp(t,e)?t[e]:void 0;function xE(t,e,n){if(O.isString(t))try{return(e||JSON.parse)(t),O.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Co={transitional:ep,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=O.isObject(e);if(s&&O.isHTMLForm(e)&&(e=new FormData(e)),O.isFormData(e))return r?JSON.stringify(s_(e)):e;if(O.isArrayBuffer(e)||O.isBuffer(e)||O.isStream(e)||O.isFile(e)||O.isBlob(e)||O.isReadableStream(e))return e;if(O.isArrayBufferView(e))return e.buffer;if(O.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){const l=ss(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return pE(e,l).toString();if((o=O.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=ss(this,"env"),d=c&&c.FormData;return qc(o?{"files[]":e}:e,d&&new d,l)}}return s||r?(n.setContentType("application/json",!1),xE(e)):e}],transformResponse:[function(e){const n=ss(this,"transitional")||Co.transitional,i=n&&n.forcedJSONParsing,r=ss(this,"responseType"),s=r==="json";if(O.isResponse(e)||O.isReadableStream(e))return e;if(e&&O.isString(e)&&(i&&!r||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,ss(this,"parseReviver"))}catch(l){if(o)throw l.name==="SyntaxError"?xe.from(l,xe.ERR_BAD_RESPONSE,this,null,ss(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ut.classes.FormData,Blob:Ut.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(a_,t=>{Co.headers[t]={}});function Fu(t,e){const n=this||Co,i=e||n,r=Kt.from(i.headers);let s=i.data;return O.forEach(t,function(o){s=o.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function o_(t){return!!(t&&t.__CANCEL__)}let Ro=class extends xe{constructor(e,n,i){super(e??"canceled",xe.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function l_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new xe("Request failed with status code "+n.status,n.status>=400&&n.status<500?xe.ERR_BAD_REQUEST:xe.ERR_BAD_RESPONSE,n.config,n.request,n))}const vE=/[\t\n\r]/g;function c_(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(vE,"")}function ku(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function _E(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=i[s];a||(a=c),n[r]=l,i[r]=c;let f=s,h=0;for(;f!==r;)h+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-a<e)return;const g=d&&c-d;return g?Math.round(h*1e3/g):void 0}}function yE(t,e){let n=0,i=1e3/e,r,s;const a=(d,f=Date.now())=>{n=f,r=null,s&&(clearTimeout(s),s=null),t(...d)};return[(...d)=>{const f=Date.now(),h=f-n;h>=i?a(d,f):(r=d,s||(s=setTimeout(()=>{s=null,a(r)},i-h)))},()=>r&&a(r),(...d)=>a(d)]}const yc=(t,e,n=3)=>{let i=0;const r=_E(50,250);return yE(s=>{if(!s||!O.isNumber(s.loaded))return;const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=Math.max(0,o!=null?Math.min(a,o):a),c=Math.max(0,l-i),d=r(c);i=Math.max(i,l);const f={loaded:l,total:o,progress:o?l/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o?(o-l)/d:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};t(f)},n)},ng=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},ig=(t,e=O.asap)=>(...n)=>e(()=>t(...n)),SE=Ut.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Ut.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Ut.origin),Ut.navigator&&/(msie|trident)/i.test(Ut.navigator.userAgent)):()=>!0,wE=Ut.hasStandardBrowserEnv?{write(t,e,n,i,r,s,a){if(typeof document>"u")return;const o=[`${t}=${encodeURIComponent(e)}`];O.isNumber(n)&&o.push(`expires=${new Date(n).toUTCString()}`),O.isString(i)&&o.push(`path=${i}`),O.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),O.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ME(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function EE(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const TE=/^https?:(?!\/\/)/i;function bE(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,i="")=>`${n}${i}${_c}`)}function AE(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${_c}@`),n=e.indexOf("#"),r=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${_c}`);return n===-1?r:`${r}#${bE(e.slice(n+1))}`}function rg(t,e){if(typeof t=="string"){const n=c_(t);if(TE.test(n))throw new xe(`Invalid URL ${JSON.stringify(AE(n))}: missing "//" after protocol`,xe.ERR_INVALID_URL,e)}}function u_(t,e,n,i){rg(e,i);let r=!ME(e);return t&&(r||n===!1)?(rg(t,i),EE(t,e)):e}const sg=t=>t instanceof Kt?{...t}:t,CE=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>Object.getOwnPropertyDescriptor(t,e).enumerable)):Object.keys(t);function Kr(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(d,f,h,g){return O.isPlainObject(d)&&O.isPlainObject(f)?O.merge.call({caseless:g},d,f):O.isPlainObject(f)?O.merge({},f):O.isArray(f)?f.slice():f}function r(d,f,h,g){if(O.isUndefined(f)){if(!O.isUndefined(d))return i(void 0,d,h,g)}else return i(d,f,h,g)}function s(d,f){if(!O.isUndefined(f))return i(void 0,f)}function a(d,f){if(O.isUndefined(f)){if(!O.isUndefined(d))return i(void 0,d)}else return i(void 0,f)}function o(d){const f=O.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!O.isUndefined(f))if(O.isPlainObject(f)){if(O.hasOwnProp(f,d))return f[d]}else return;const h=O.hasOwnProp(t,"transitional")?t.transitional:void 0;if(O.isPlainObject(h)&&O.hasOwnProp(h,d))return h[d]}function l(d,f,h){if(O.hasOwnProp(e,h))return i(d,f);if(O.hasOwnProp(t,h))return i(void 0,d)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutErrorMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:l,headers:(d,f,h)=>r(sg(d),sg(f),h,!0)};return O.forEach(CE({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const h=O.hasOwnProp(c,f)?c[f]:r,g=O.hasOwnProp(t,f)?t[f]:void 0,_=O.hasOwnProp(e,f)?e[f]:void 0,y=h(g,_,f);O.isUndefined(y)&&h!==l||(n[f]=y)}),O.hasOwnProp(e,"validateStatus")&&O.isUndefined(e.validateStatus)&&o("validateStatusUndefinedResolves")===!1&&(O.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const RE=["content-type","content-length"];function PE(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{RE.includes(i.toLowerCase())&&t.set(i,r)})}const NE=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function d_(t){const e=Kr({},t),n=h=>O.hasOwnProp(e,h)?e[h]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),a=n("xsrfCookieName");let o=n("headers");const l=n("auth"),c=n("baseURL"),d=n("allowAbsoluteUrls"),f=n("url");if(e.headers=o=Kt.from(o),e.url=n_(u_(c,f,d,e),n("params"),n("paramsSerializer")),l){const h=O.getSafeProp(l,"username")||"",g=O.getSafeProp(l,"password")||"";try{o.set("Authorization","Basic "+btoa(h+":"+(g?NE(g):"")))}catch(_){throw xe.from(_,xe.ERR_BAD_OPTION_VALUE,t)}}if(O.isFormData(i)){const h=O.getSafeProp(i,"getHeaders");Ut.hasStandardBrowserEnv||Ut.hasStandardBrowserWebWorkerEnv||O.isReactNative(i)?o.setContentType(void 0):O.isFunction(h)&&PE(o,h.call(i),n("formDataHeaderPolicy"))}if(Ut.hasStandardBrowserEnv&&(O.isFunction(r)&&(r=r(e)),r===!0||r==null&&SE(e.url))){const g=s&&a&&wE.read(a);g&&o.set(s,g)}return e}const LE=typeof XMLHttpRequest<"u",DE=LE&&function(t){return new Promise(function(n,i){const r=d_(t);let s=r.data;const a=Kt.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,d,f,h,g,_,y;function p(){g&&g(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let u=new XMLHttpRequest;u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout;function m(S){if(!u)return;if(u.status===0&&(ku(c_(r.url))||ku(Ut.origin))!=="file"&&!(u.responseURL&&u.responseURL.startsWith("file:"))){i(new xe("Request aborted",xe.ECONNABORTED,t,u)),p(),u=null;return}try{S?y&&y(S):_&&_()}catch(P){setTimeout(()=>{throw P})}if(!u)return;const C=Kt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:C,config:t,request:u};l_(function(T){n(T),p()},function(T){i(T),p()},E),u=null}"onloadend"in u?u.onloadend=m:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.startsWith("file:"))||setTimeout(m)},u.onabort=function(){u&&(i(new xe("Request aborted",xe.ECONNABORTED,t,u)),p(),u=null)},u.onerror=function(C){const b=C&&C.message?C.message:"Network Error",E=new xe(b,xe.ERR_NETWORK,t,u);E.event=C||null,i(E),p(),u=null},u.ontimeout=function(){let C=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const b=r.transitional||ep;r.timeoutErrorMessage&&(C=r.timeoutErrorMessage),i(new xe(C,b.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,t,u)),p(),u=null},s===void 0&&a.setContentType(null),"setRequestHeader"in u&&O.forEach(Zv(a),function(C,b){u.setRequestHeader(b,C)}),O.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),o&&o!=="json"&&(u.responseType=r.responseType),c&&([h,_,y]=yc(c,!0),u.addEventListener("progress",h)),l&&u.upload&&([f,g]=yc(l),u.upload.addEventListener("progress",f),u.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(d=S=>{u&&(i(!S||S.type?new Ro(null,t,u):S),u.abort(),p(),u=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const x=ku(r.url);if(x&&!Ut.protocols.includes(x)){i(new xe("Unsupported protocol "+x+":",xe.ERR_BAD_REQUEST,t)),p();return}u.send(s||null)})},UE=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,a();const c=l instanceof Error?l:this.reason;n.abort(c instanceof xe?c:new Ro(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new xe(`timeout of ${e}ms exceeded`,xe.ETIMEDOUT))},e);const a=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>{if(!i){if(l.aborted){r.call(l);return}l.addEventListener("abort",r,{once:!0})}});const{signal:o}=n;return o.unsubscribe=()=>O.asap(a),o},IE=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},OE=async function*(t,e){for await(const n of FE(t))yield*IE(n,e)},FE=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},ag=(t,e,n,i)=>{const r=OE(t,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:d}=await r.next();if(c){o(),l.close();return}let f=d.byteLength;if(n){let h=s+=f;n(h)}l.enqueue(new Uint8Array(d))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},og=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,f_=(t,e,n)=>e+2<n&&og(t.charCodeAt(e+1))&&og(t.charCodeAt(e+2)),lg=t=>t<=57?t-48:(t&223)-55,kE=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,BE=t=>t===9||t===10||t===12||t===13||t===32,zE=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},HE=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},VE=t=>{const e=t.length;let n=0,i=0,r=!1;for(let s=0;s<e;s++){let a=t.charCodeAt(s);if(a===37&&f_(t,s,e)&&(a=lg(t.charCodeAt(s+1))*16+lg(t.charCodeAt(s+2)),s+=2),!BE(a)){if(a===61){i++;continue}if(!kE(a)||i>0){r=!0;continue}n++}}return r||i>2||i>0&&(n+i)%4!==0||n%4===1?HE(t):zE(n)},jE=(t,e)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const n=t.indexOf(",");if(n<0)return 0;const i=t.slice(5,n),r=t.slice(n+1);if(/;base64/i.test(i))return e(r);let a=0;for(let o=0,l=r.length;o<l;o++){const c=r.charCodeAt(o);if(c===37&&f_(r,o,l))a+=1,o+=2;else if(c<128)a+=1;else if(c<2048)a+=2;else if(c>=55296&&c<=56319&&o+1<l){const d=r.charCodeAt(o+1);d>=56320&&d<=57343?(a+=4,o++):a+=3}else a+=3}return a};function GE(t){const e=typeof t=="string"?t.indexOf("#"):-1;return jE(e===-1?t:t.slice(0,e),VE)}const np="1.20.0",cg=64*1024,WE={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:el}=O,XE=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),ug=t=>{if(!O.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},dg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},qE=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},$E=t=>{const e=O.global!==void 0&&O.global!==null?O.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=O.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:a}=t,o=r?el(r):typeof fetch=="function",l=el(s),c=el(a);if(!o)return!1;const d=o&&el(n),f=o&&(typeof i=="function"?(u=>m=>u.encode(m))(new i):async u=>new Uint8Array(await new s(u).arrayBuffer())),h=l&&d&&dg(()=>{let u=!1;const m=new s(Ut.origin,{body:new n,method:"POST",get duplex(){return u=!0,"half"}}),x=m.headers.has("Content-Type");return m.body!=null&&m.body.cancel(),u&&!x}),g=c&&d&&dg(()=>O.isReadableStream(new a("").body)),_={stream:g&&(u=>u.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!_[u]&&(_[u]=(m,x)=>{let S=m&&m[u];if(S)return S.call(m);throw new xe(`Response type '${u}' is not supported`,xe.ERR_NOT_SUPPORT,x)})});const y=async u=>{if(u==null)return 0;if(O.isBlob(u))return u.size;if(O.isSpecCompliantForm(u))return(await new s(Ut.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(O.isArrayBufferView(u)||O.isArrayBuffer(u))return u.byteLength;if(O.isURLSearchParams(u)&&(u=u+""),O.isString(u))return(await f(u)).byteLength},p=async(u,m)=>{const x=O.toFiniteNumber(u.getContentLength());return x??y(m)};return async u=>{let{url:m,method:x,data:S,signal:C,cancelToken:b,timeout:E,onDownloadProgress:P,onUploadProgress:T,responseType:w,headers:U,withCredentials:W="same-origin",fetchOptions:j,maxContentLength:Q,maxBodyLength:te,maxRedirects:$}=d_(u);const ee=O.isNumber(Q)&&Q>-1,I=O.isNumber(te)&&te>-1,ne=X=>O.hasOwnProp(u,X)?u[X]:void 0;let L=r||fetch;w=w?(w+"").toLowerCase():"text";let R=UE([C,b&&b.toAbortSignal()],E),J=null;const H=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let F,G=null;const ie=()=>new xe("Request body larger than maxBodyLength limit",xe.ERR_BAD_REQUEST,u,J);try{let X;const le=ne("auth");if(le){const ue=O.getSafeProp(le,"username")||"",we=O.getSafeProp(le,"password")||"";X={username:ue,password:we}}if(qE(m)){const ue=new URL(m,Ut.origin);if(!X&&(ue.username||ue.password)){const we=ug(ue.username),N=ug(ue.password);X={username:we,password:N}}(ue.username||ue.password)&&(ue.username="",ue.password="",m=ue.href)}if(X&&(U.delete("authorization"),U.set("Authorization","Basic "+btoa(XE((X.username||"")+":"+(X.password||""))))),ee&&typeof m=="string"&&m.startsWith("data:")&&GE(m)>Q)throw new xe("maxContentLength size of "+Q+" exceeded",xe.ERR_BAD_RESPONSE,u,J);if(I&&x!=="get"&&x!=="head"){const ue=await y(S);if(typeof ue=="number"&&isFinite(ue)&&(F=ue,ue>te))throw ie()}const ge=I&&(O.isReadableStream(S)||O.isStream(S)),Te=(ue,we,N)=>ag(ue,cg,M=>{if(I&&M>te)throw G=ie();we&&we(M)},N);if(h&&x!=="get"&&x!=="head"&&(T||ge)){if(F=F??await p(U,S),F!==0||ge){let ue=new s(m,{method:"POST",body:S,duplex:"half"}),we;if(O.isFormData(S)&&(we=ue.headers.get("content-type"))&&U.setContentType(we),ue.body){const[N,M]=T&&ng(F,yc(ig(T)))||[];S=Te(ue.body,N,M)}}}else if(ge&&!l&&d&&x!=="get"&&x!=="head")S=Te(S);else if(ge&&l&&!h&&x!=="get"&&x!=="head")throw new xe("Stream request bodies are not supported by the current fetch implementation",xe.ERR_NOT_SUPPORT,u,J);O.isString(W)||(W=W?"include":"omit");const Le=l&&"credentials"in s.prototype;if(O.isFormData(S)){const ue=U.getContentType();ue&&/^multipart\/form-data/i.test(ue)&&!/boundary=/i.test(ue)&&U.delete("content-type")}U.set("User-Agent","axios/"+np,!1);const D=j==null?j:Object.assign(Object.create(null),j);D&&(delete D.body,delete D.headers,delete D.method,delete D.signal,delete D.duplex,delete D.credentials);const Ie=Object.assign(Object.create(null),D,{signal:R,method:x.toUpperCase(),headers:Zv(U.normalize()),body:S,duplex:"half",credentials:Le?W:void 0});l&&(O.forEach(WE,(ue,we)=>{Ie[we]===void 0&&(Ie[we]=ue)}),Ie.signal===void 0&&(Ie.signal=null),Ie.body===void 0&&(Ie.body=null)),$===0&&(Ie.redirect="manual",D&&(D.redirect="manual")),J=l&&new s(m,Ie);let ve=await(l?L(J,D):L(m,Ie));const Oe=Kt.from(ve.headers);if(ee){const ue=O.toFiniteNumber(Oe.getContentLength());if(ue!=null&&ue>Q)throw new xe("maxContentLength size of "+Q+" exceeded",xe.ERR_BAD_RESPONSE,u,J)}const Se=g&&(w==="stream"||w==="response");if(g&&ve.body&&(P||ee||Se&&H)){const ue={};["status","statusText","headers"].forEach(ae=>{ue[ae]=ve[ae]});const we=O.toFiniteNumber(Oe.getContentLength()),[N,M]=P&&ng(we,yc(ig(P),!0))||[];let Y=0;const re=ae=>{if(ee&&(Y=ae,Y>Q))throw new xe("maxContentLength size of "+Q+" exceeded",xe.ERR_BAD_RESPONSE,u,J);N&&N(ae)};ve=new a(ag(ve.body,cg,re,()=>{M&&M(),H&&H()}),ue)}w=w||"text";let Fe=await _[O.findKey(_,w)||"text"](ve,u);if(ee&&!g&&!Se){let ue;if(Fe!=null&&(typeof Fe.byteLength=="number"?ue=Fe.byteLength:typeof Fe.size=="number"?ue=Fe.size:typeof Fe=="string"&&(ue=typeof i=="function"?new i().encode(Fe).byteLength:Fe.length)),typeof ue=="number"&&ue>Q)throw new xe("maxContentLength size of "+Q+" exceeded",xe.ERR_BAD_RESPONSE,u,J)}return!Se&&H&&H(),await new Promise((ue,we)=>{l_(ue,we,{data:Fe,headers:Kt.from(ve.headers),status:ve.status,statusText:ve.statusText,config:u,request:J})})}catch(X){if(H&&H(),R&&R.aborted&&R.reason instanceof xe){const le=R.reason;throw le.config=u,J&&(le.request=J),X!==le&&Object.defineProperty(le,"cause",{__proto__:null,value:X,writable:!0,enumerable:!1,configurable:!0}),le}if(G)throw J&&!G.request&&(G.request=J),G;if(X instanceof xe)throw J&&!X.request&&(X.request=J),X;if(X&&X.name==="TypeError"&&/Load failed|fetch/i.test(X.message)){const le=new xe("Network Error",xe.ERR_NETWORK,u,J,X&&X.response);throw Object.defineProperty(le,"cause",{__proto__:null,value:X.cause||X,writable:!0,enumerable:!1,configurable:!0}),le}throw xe.from(X,X&&X.code,u,J,X&&X.response)}}},YE=new Map,h_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let a=s.length,o=a,l,c,d=YE;for(;o--;)l=s[o],c=d.get(l),c===void 0&&d.set(l,c=o?new Map:$E(e)),d=c;return c};h_();const ip={http:nE,xhr:DE,fetch:{get:h_}};O.forEach(ip,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const fg=t=>`- ${t}`,KE=t=>O.isFunction(t)||t===null||t===!1;function ZE(t,e){t=O.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let a=0;a<n;a++){i=t[a];let o;if(r=i,!KE(i)&&(r=ip[(o=String(i)).toLowerCase()],r===void 0))throw new xe(`Unknown adapter '${o}'`);if(r&&(O.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=n?a.length>1?`since :
`+a.map(fg).join(`
`):" "+fg(a[0]):"as no adapter specified";throw new xe("There is no suitable adapter to dispatch the request "+o,xe.ERR_NOT_SUPPORT)}return r}const p_={getAdapter:ZE,adapters:ip};function Bu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ro(null,t)}function zu(t){const e=O.toSafeFlatObject(t);return Bu(e),e.headers=Kt.from(O.getSafeProp(e,"headers")),e.data=Fu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),p_.getAdapter(e.adapter||Co.adapter,e)(e).then(function(r){Bu(e),e.response=r;try{r.data=Fu.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=Kt.from(r.headers),r},function(r){if(!o_(r)&&(Bu(e),r&&r.response)){e.response=r.response;try{r.response.data=Fu.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=Kt.from(r.response.headers)}return Promise.reject(r)})}const $c={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{$c[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const hg={};$c.transitional=function(e,n,i){function r(s,a){return"[Axios v"+np+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new xe(r(a," has been removed"+(n?" in "+n:"")),xe.ERR_DEPRECATED);return n&&!hg[a]&&(hg[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};$c.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function JE(t,e,n){if(typeof t!="object"||t===null)throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const o=t[s],l=o===void 0||a(o,s,t);if(l!==!0)throw new xe("option "+s+" must be "+l,xe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new xe("Unknown option "+s,xe.ERR_BAD_OPTION)}}const zl={assertOptions:JE,validators:$c},Gt=zl.validators;let Hr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new eg,response:new eg}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error)try{let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack;let a="";if(typeof s=="string"){const o=s.indexOf(`
`);a=o===-1?"":s.slice(o+1)}if(!i.stack)i.stack=a;else if(a){const o=a.indexOf(`
`),l=o===-1?-1:a.indexOf(`
`,o+1),c=l===-1?"":a.slice(l+1);String(i.stack).endsWith(c)||(i.stack+=`
`+a)}}catch{}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Kr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&zl.assertOptions(i,{silentJSONParsing:Gt.transitional(Gt.boolean),forcedJSONParsing:Gt.transitional(Gt.boolean),clarifyTimeoutError:Gt.transitional(Gt.boolean),legacyInterceptorReqResOrdering:Gt.transitional(Gt.boolean),advertiseZstdAcceptEncoding:Gt.transitional(Gt.boolean),validateStatusUndefinedResolves:Gt.transitional(Gt.boolean)},!1),r!=null&&(O.isFunction(r)?n.paramsSerializer={serialize:r}:zl.assertOptions(r,{encode:Gt.function,serialize:Gt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),zl.assertOptions(n,{baseUrl:Gt.spelling("baseURL"),withXsrfToken:Gt.spelling("withXSRFToken")},!0),n.method=(O.getSafeProp(n,"method")||O.getSafeProp(this.defaults,"method")||"get").toLowerCase();let a=s&&O.merge(s.common,s[n.method]);s&&O.forEach(a_.concat("common"),_=>{delete s[_]}),n.headers=Kt.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(y){if(typeof y.runWhen=="function"&&y.runWhen(n)===!1)return;l=l&&y.synchronous;const p=n.transitional||ep;p&&p.legacyInterceptorReqResOrdering?o.unshift(y.fulfilled,y.rejected):o.push(y.fulfilled,y.rejected)});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let d,f=0,h;if(!l){const _=[zu.bind(this),void 0];for(_.unshift(...o),_.push(...c),h=_.length,d=Promise.resolve(n);f<h;)d=d.then(_[f++],_[f++]);return d}h=o.length;let g=n;for(;f<h;){const _=o[f++],y=o[f++];try{g=_?_(g):g}catch(p){if(!y){d=Promise.reject(p);break}try{const u=y.call(this,p);O.isThenable(u)&&(d=Promise.resolve(u).then(()=>zu.call(this,g)))}catch(u){d=Promise.reject(u)}break}}if(!d)try{d=zu.call(this,g)}catch(_){d=Promise.reject(_)}for(f=0,h=c.length;f<h;)d=d.then(c[f++],c[f++]);return d}getUri(e){e=Kr(this.defaults,e);const n=u_(e.baseURL,e.url,e.allowAbsoluteUrls,e);return n_(n,e.params,e.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(e){Hr.prototype[e]=function(n,i){return this.request(Kr(i||{},{method:e,url:n,data:i&&O.hasOwnProp(i,"data")?i.data:void 0}))}});O.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,a,o){return this.request(Kr(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Hr.prototype[e]=n(),e!=="query"&&(Hr.prototype[e+"Form"]=n(!0))});let QE=class m_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new Ro(s,a,o),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new m_(function(r){e=r}),cancel:e}}};function eT(t){return function(n){return t.apply(null,n)}}function tT(t){return O.isObject(t)&&t.isAxiosError===!0}const Hl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Hl).forEach(([t,e])=>{Hl[e]===void 0&&(Hl[e]=t)});function g_(t){const e=new Hr(t),n=zv(Hr.prototype.request,e);return O.extend(n,Hr.prototype,e,{allOwnKeys:!0}),O.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return g_(Kr(t,r))},n}const Mt=g_(Co);Mt.Axios=Hr;Mt.CanceledError=Ro;Mt.CancelToken=QE;Mt.isCancel=o_;Mt.VERSION=np;Mt.toFormData=qc;Mt.AxiosError=xe;Mt.Cancel=Mt.CanceledError;Mt.all=function(e){return Promise.all(e)};Mt.spread=eT;Mt.isAxiosError=tT;Mt.mergeConfig=Kr;Mt.AxiosHeaders=Kt;Mt.formToJSON=t=>s_(O.isHTMLForm(t)?new FormData(t):t);Mt.getAdapter=p_.getAdapter;Mt.HttpStatusCode=Hl;Mt.default=Mt;const{Axios:tN,AxiosError:nN,CanceledError:iN,isCancel:rN,CancelToken:sN,VERSION:aN,all:oN,Cancel:lN,isAxiosError:cN,spread:uN,toFormData:dN,AxiosHeaders:fN,HttpStatusCode:hN,formToJSON:pN,getAdapter:mN,mergeConfig:gN,create:xN}=Mt,Dn=Mt.create({baseURL:"/api",withCredentials:!0,headers:{"Content-Type":"application/json"}});Dn.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t},t=>Promise.reject(t));Dn.interceptors.response.use(t=>t,t=>{if(t.response&&t.response.status===401){const e=window.location.pathname;e!=="/login"&&!e.includes("/login")&&(localStorage.removeItem("token"),localStorage.removeItem("user"))}return Promise.reject(t)});const x_=q.createContext(null);function nT({children:t}){const[e,n]=q.useState(null),[i,r]=q.useState(()=>localStorage.getItem("token")),[s,a]=q.useState(!0);q.useEffect(()=>{async function h(){var _;if(localStorage.getItem("token"))try{const y=await Dn.get("/auth/me");(_=y.data)!=null&&_.user&&(n(y.data.user),localStorage.setItem("user",JSON.stringify(y.data.user)))}catch(y){console.warn("Session check failed, clearing token:",y.message),localStorage.removeItem("token"),localStorage.removeItem("user"),r(null),n(null)}else{const y=localStorage.getItem("user");if(y)try{n(JSON.parse(y))}catch{localStorage.removeItem("user")}}a(!1)}h()},[]);const o=async(h,g,_,y="user")=>{const p=await Dn.post("/auth/register",{username:h,email:g,password:_,role:y}),{token:u,user:m}=p.data;return u&&(localStorage.setItem("token",u),r(u)),m&&(localStorage.setItem("user",JSON.stringify(m)),n(m)),p.data},l=async(h,g)=>{const _=h.includes("@")?{email:h,password:g}:{username:h,password:g},y=await Dn.post("/auth/login",_),{token:p,user:u}=y.data;return p&&(localStorage.setItem("token",p),r(p)),u&&(localStorage.setItem("user",JSON.stringify(u)),n(u)),y.data},c=async()=>{try{await Dn.post("/auth/logout")}catch(h){console.error("Logout API call error:",h)}finally{localStorage.removeItem("token"),localStorage.removeItem("user"),r(null),n(null)}},d=(e==null?void 0:e.role)==="artist",f=!!i&&!!e;return v.jsx(x_.Provider,{value:{user:e,token:i,loading:s,isAuthenticated:f,isArtist:d,login:l,register:o,logout:c,setUser:n},children:t})}function Yc(){const t=q.useContext(x_);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}const v_=q.createContext(null);function iT({children:t}){const e=q.useRef(new Audio),[n,i]=q.useState(null),[r,s]=q.useState(!1),[a,o]=q.useState([]),[l,c]=q.useState(0),[d,f]=q.useState(0),[h,g]=q.useState(0),[_,y]=q.useState(.8),[p,u]=q.useState(!1),[m,x]=q.useState(!1),[S,C]=q.useState(!1),[b,E]=q.useState(!1),P=q.useRef(null),T=q.useRef(null),w=q.useRef(null);q.useRef(new Uint8Array(64));const U=q.useCallback(()=>{if(!P.current)try{const H=window.AudioContext||window.webkitAudioContext;if(!H)return;const F=new H,G=F.createAnalyser();G.fftSize=128,G.smoothingTimeConstant=.8,e.current.crossOrigin="anonymous";const ie=F.createMediaElementSource(e.current);ie.connect(G),G.connect(F.destination),P.current=F,T.current=G,w.current=ie}catch(H){console.warn("Web Audio API not supported or cross-origin restricted, using algorithmic beat sync:",H.message)}},[]),W=q.useCallback(()=>{if(T.current&&r){const H=new Uint8Array(T.current.frequencyBinCount);return T.current.getByteFrequencyData(H),H}if(r){const H=Date.now()*.005,F=new Uint8Array(64);for(let G=0;G<64;G++){const ie=Math.sin(H+G*.2)*50+Math.cos(H*.8+G*.1)*40+100;F[G]=Math.max(20,Math.min(255,Math.floor(ie)))}return F}return new Uint8Array(64).fill(0)},[r]);q.useEffect(()=>{const H=e.current,F=()=>{f(H.currentTime)},G=()=>{g(H.duration||0)},ie=()=>{m?(H.currentTime=0,H.play().catch(console.error)):te()},X=()=>s(!0),le=()=>s(!1);return H.addEventListener("timeupdate",F),H.addEventListener("loadedmetadata",G),H.addEventListener("ended",ie),H.addEventListener("play",X),H.addEventListener("pause",le),()=>{H.removeEventListener("timeupdate",F),H.removeEventListener("loadedmetadata",G),H.removeEventListener("ended",ie),H.removeEventListener("play",X),H.removeEventListener("pause",le)}},[m,a,l]);const j=q.useCallback((H,F=null)=>{if(!H)return;if(U(),P.current&&P.current.state==="suspended"&&P.current.resume(),F&&F.length>0){o(F);const ie=F.findIndex(X=>(X._id||X.id)===(H._id||H.id));c(ie!==-1?ie:0)}else a.some(ie=>(ie._id||ie.id)===(H._id||H.id))||(o([H,...a]),c(0));i(H);const G=e.current;G.src!==H.uri&&(G.src=H.uri,G.load()),G.play().then(()=>{s(!0)}).catch(ie=>{console.warn("Audio playback initiated with warning:",ie.message)})},[U,a]),Q=q.useCallback(()=>{if(!n)return;U(),P.current&&P.current.state==="suspended"&&P.current.resume();const H=e.current;r?H.pause():H.play().catch(console.error)},[n,r,U]),te=q.useCallback(()=>{if(a.length===0)return;let H=l+1;S?H=Math.floor(Math.random()*a.length):H>=a.length&&(H=0),c(H);const F=a[H];F&&j(F,a)},[a,l,S,j]),$=q.useCallback(()=>{if(a.length===0)return;if(e.current.currentTime>3){e.current.currentTime=0;return}let H=l-1;H<0&&(H=a.length-1),c(H);const F=a[H];F&&j(F,a)},[a,l,j]),ee=q.useCallback(H=>{e.current&&!isNaN(H)&&(e.current.currentTime=H,f(H))},[]),I=q.useCallback(H=>{const F=Math.max(0,Math.min(1,H));y(F),e.current&&(e.current.volume=F),F>0&&u(!1)},[]),ne=q.useCallback(()=>{if(e.current){const H=!p;u(H),e.current.muted=H}},[p]),L=q.useCallback(()=>x(H=>!H),[]),R=q.useCallback(()=>C(H=>!H),[]),J=q.useCallback(()=>E(H=>!H),[]);return v.jsx(v_.Provider,{value:{audioRef:e,currentSong:n,isPlaying:r,queue:a,queueIndex:l,currentTime:d,duration:h,volume:_,isMuted:p,isLoop:m,isShuffle:S,isFullscreen3D:b,playSong:j,togglePlay:Q,nextSong:te,prevSong:$,seek:ee,changeVolume:I,toggleMute:ne,toggleLoop:L,toggleShuffle:R,toggleFullscreen3D:J,getAudioFrequencyData:W},children:t})}function ui(){const t=q.useContext(v_);if(!t)throw new Error("useMusic must be used within a MusicProvider");return t}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),__=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=q.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>q.createElement("svg",{ref:l,...sT,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:__("lucide",r),...o},[...a.map(([c,d])=>q.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(t,e)=>{const n=q.forwardRef(({className:i,...r},s)=>q.createElement(aT,{ref:s,iconNode:e,className:__(`lucide-${rT(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=Qe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=Qe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=Qe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Qe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=Qe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=Qe("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=Qe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=Qe("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=Qe("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=Qe("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=Qe("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=Qe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=Qe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=Qe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=Qe("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=Qe("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=Qe("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=Qe("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=Qe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=Qe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=Qe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=Qe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=Qe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=Qe("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=Qe("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=Qe("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=Qe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=Qe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=Qe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=Qe("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=Qe("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=Qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function js({onSearchChange:t,searchTerm:e=""}){var y;const{user:n,isAuthenticated:i,isArtist:r,logout:s}=Yc(),{isPlaying:a,toggleFullscreen3D:o,currentSong:l}=ui(),c=To(),d=ua(),[f,h]=q.useState(!1),g=async()=>{await s(),c("/login")},_=p=>d.pathname===p;return v.jsx("header",{className:"sticky top-0 z-40 w-full glass-nav backdrop-blur-xl border-b border-white/10",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4",children:[v.jsxs(Yt,{to:"/",className:"flex items-center gap-3 group",children:[v.jsxs("div",{className:"relative w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300",children:[v.jsx("div",{className:"w-full h-full rounded-xl bg-[#080b12] flex items-center justify-center",children:v.jsx(pn,{className:"w-6 h-6 text-emerald-400 group-hover:rotate-180 transition-transform duration-700"})}),a&&v.jsxs("span",{className:"absolute -top-1 -right-1 flex h-3 w-3",children:[v.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),v.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-emerald-500"})]})]}),v.jsxs("div",{className:"flex flex-col",children:[v.jsxs("span",{className:"text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-100 to-emerald-400 bg-clip-text text-transparent font-['Space_Grotesk']",children:["AURA",v.jsx("span",{className:"text-emerald-400 text-xs ml-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30",children:"3D"})]}),v.jsx("span",{className:"text-[10px] tracking-widest text-slate-400 uppercase font-mono",children:"Spatial Music"})]})]}),t&&v.jsxs("div",{className:"hidden md:flex flex-1 max-w-md mx-4 relative",children:[v.jsx(ST,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),v.jsx("input",{type:"text",placeholder:"Search tracks, artists, albums...",value:e,onChange:p=>t(p.target.value),className:"w-full pl-10 pr-4 py-2 rounded-xl glass-input text-sm text-slate-200 placeholder-slate-400 focus:ring-1 focus:ring-emerald-500"})]}),v.jsxs("nav",{className:"flex items-center gap-2 sm:gap-4",children:[v.jsx(Yt,{to:"/",className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${_("/")?"text-emerald-400 bg-emerald-500/10":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:"Explore"}),r&&v.jsxs(Yt,{to:"/artist/studio",className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${_("/artist/studio")?"bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-cyan-300 border border-cyan-500/40":"text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:text-white"}`,children:[v.jsx(Jr,{className:"w-4 h-4 text-cyan-400 animate-bounce"}),v.jsx("span",{children:"Artist Studio"})]}),l&&v.jsxs("button",{onClick:o,title:"Launch 3D Turntable Experience",className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono uppercase tracking-wider transition-all hover:scale-105",children:[v.jsx(pn,{className:`w-4 h-4 text-emerald-400 ${a?"animate-spin":""}`}),v.jsx("span",{className:"hidden sm:inline",children:"3D Stage"})]}),i?v.jsxs("div",{className:"relative",children:[v.jsxs("button",{onClick:()=>h(!f),className:"flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 transition-all",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-xs uppercase shadow-md",children:((y=n==null?void 0:n.username)==null?void 0:y.charAt(0))||"U"}),v.jsxs("div",{className:"hidden md:flex flex-col text-left",children:[v.jsx("span",{className:"text-xs font-semibold text-white leading-tight",children:n==null?void 0:n.username}),v.jsx("span",{className:"text-[10px] text-emerald-400 capitalize font-mono leading-tight",children:n==null?void 0:n.role})]})]}),f&&v.jsxs("div",{className:"absolute right-0 mt-2 w-56 rounded-2xl glass-card border border-white/10 p-2 shadow-2xl z-50",children:[v.jsxs("div",{className:"px-3 py-2 border-b border-white/10 mb-1",children:[v.jsx("p",{className:"text-xs text-slate-400",children:"Signed in as"}),v.jsx("p",{className:"text-sm font-bold text-white truncate",children:n==null?void 0:n.email}),v.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",children:n==null?void 0:n.role})]}),r&&v.jsxs(Yt,{to:"/artist/studio",onClick:()=>h(!1),className:"flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium text-purple-300 hover:bg-purple-500/10 rounded-xl transition-colors",children:[v.jsx(Jr,{className:"w-4 h-4 text-purple-400"}),"Artist Dashboard"]}),v.jsxs("button",{onClick:g,className:"flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors",children:[v.jsx(mT,{className:"w-4 h-4"}),"Sign Out"]})]})]}):v.jsxs(Yt,{to:"/login",className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-semibold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/25 transition-all hover:scale-105",children:[v.jsx(E_,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Login / 3D Sign In"})]})]})]})})}const tl=["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop&q=80"];function ur(t="",e=0){if(!t)return tl[e%tl.length];let n=0;for(let r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r),n|=0;const i=Math.abs(n)%tl.length;return tl[i]}function Sc(t){if(isNaN(t)||t===null)return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n<10?"0":""}${n}`}function ET(t){return t?`${(t/(1024*1024)).toFixed(1)} MB`:"0 MB"}function xo({children:t,className:e="",glowColor:n="emerald",tiltDegree:i=12,onClick:r}){const s=q.useRef(null),[a,o]=q.useState({rotateX:0,rotateY:0,glareX:50,glareY:50}),[l,c]=q.useState(!1),d=_=>{if(!s.current)return;const y=s.current.getBoundingClientRect(),p=_.clientX-y.left,u=_.clientY-y.top,m=y.width/2,x=y.height/2,S=(u-x)/x*-i,C=(p-m)/m*i,b=p/y.width*100,E=u/y.height*100;o({rotateX:S,rotateY:C,glareX:b,glareY:E})},f=()=>c(!0),h=()=>{c(!1),o({rotateX:0,rotateY:0,glareX:50,glareY:50})},g={emerald:"hover:border-emerald-500/40 hover:shadow-[0_15px_35px_rgba(16,185,129,0.18)]",cyan:"hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(6,182,212,0.18)]",purple:"hover:border-purple-500/40 hover:shadow-[0_15px_35px_rgba(168,85,247,0.18)]"}[n]||"hover:border-emerald-500/40";return v.jsxs("div",{ref:s,onMouseMove:d,onMouseEnter:f,onMouseLeave:h,onClick:r,style:{transform:l?`perspective(1000px) rotateX(${a.rotateX}deg) rotateY(${a.rotateY}deg) scale3d(1.02, 1.02, 1.02)`:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:l?"transform 0.1s ease-out":"transform 0.5s ease-out"},className:`relative rounded-2xl glass-card transition-all overflow-hidden ${g} ${e}`,children:[l&&v.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300 z-10",style:{background:`radial-gradient(circle at ${a.glareX}% ${a.glareY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`}}),t]})}function TT({song:t,playlist:e=[],index:n=0}){var h;const{currentSong:i,isPlaying:r,playSong:s,togglePlay:a}=ui(),o=((i==null?void 0:i._id)||(i==null?void 0:i.id))===((t==null?void 0:t._id)||(t==null?void 0:t.id)),l=o&&r,c=ur((t==null?void 0:t._id)||(t==null?void 0:t.title),n),d=g=>{g.stopPropagation(),o?a():s(t,e)},f=typeof(t==null?void 0:t.artist)=="object"?((h=t==null?void 0:t.artist)==null?void 0:h.username)||"Unknown Artist":"Featured Artist";return v.jsxs(xo,{glowColor:o?"emerald":"cyan",className:"p-3.5 group cursor-pointer",onClick:d,children:[v.jsxs("div",{className:"relative aspect-square rounded-xl overflow-hidden bg-slate-900 mb-3 shadow-inner",children:[v.jsx("img",{src:c,alt:t==null?void 0:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",loading:"lazy"}),v.jsx("div",{className:`absolute top-2 -right-8 w-20 h-20 rounded-full bg-black/90 border border-white/20 p-1 vinyl-grooves shadow-2xl transition-all duration-500 ${l?"right-2 rotate-180 animate-spin":"group-hover:right-2 group-hover:rotate-45"}`,children:v.jsx("div",{className:"w-full h-full rounded-full border border-emerald-500/40 flex items-center justify-center bg-zinc-950",children:v.jsx(pn,{className:`w-5 h-5 text-emerald-400 ${l?"animate-spin":""}`})})}),v.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"}),v.jsx("button",{onClick:d,className:`absolute bottom-3 right-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${l?"bg-emerald-500 text-black scale-100 shadow-emerald-500/40":"bg-emerald-500/90 text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-105 hover:bg-emerald-400"}`,children:l?v.jsx(Zr,{className:"w-5 h-5 fill-current"}):v.jsx(Pi,{className:"w-5 h-5 fill-current ml-0.5"})}),l&&v.jsxs("div",{className:"absolute bottom-3 left-3 flex items-end gap-0.5 h-4",children:[v.jsx("span",{className:"w-1 bg-emerald-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite]",style:{height:"70%"}}),v.jsx("span",{className:"w-1 bg-emerald-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]",style:{height:"100%"}}),v.jsx("span",{className:"w-1 bg-emerald-400 rounded-full animate-[pulse_0.4s_ease-in-out_infinite]",style:{height:"40%"}}),v.jsx("span",{className:"w-1 bg-emerald-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite]",style:{height:"85%"}})]})]}),v.jsxs("div",{className:"flex flex-col",children:[v.jsx("h4",{className:`text-sm font-bold truncate transition-colors ${o?"text-emerald-400":"text-white group-hover:text-emerald-300"}`,children:(t==null?void 0:t.title)||"Untitled Track"}),v.jsxs("p",{className:"text-xs text-slate-400 truncate mt-0.5 flex items-center gap-1",children:[v.jsx(vT,{className:"w-3 h-3 text-slate-500"}),v.jsx("span",{children:f})]})]})]})}function bT({album:t,index:e=0}){var s;const n=ur((t==null?void 0:t._id)||(t==null?void 0:t.title),e+3),i=Array.isArray(t==null?void 0:t.musics)?t.musics.length:0,r=typeof(t==null?void 0:t.artist)=="object"&&((s=t==null?void 0:t.artist)==null?void 0:s.username)||"Featured Artist";return v.jsx(Yt,{to:`/album/${(t==null?void 0:t._id)||(t==null?void 0:t.id)}`,className:"block group",children:v.jsxs(xo,{glowColor:"purple",className:"p-4",tiltDegree:10,children:[v.jsxs("div",{className:"relative aspect-square mb-4 flex items-center justify-center",children:[v.jsx("div",{className:"absolute right-0 w-[90%] h-[90%] rounded-full bg-zinc-950 border border-white/20 vinyl-grooves shadow-2xl transition-all duration-500 transform group-hover:translate-x-12 group-hover:rotate-90 z-0",children:v.jsx("div",{className:"w-full h-full rounded-full border border-purple-500/40 flex items-center justify-center",children:v.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center border border-white/20 shadow-inner",children:v.jsx(pn,{className:"w-6 h-6 text-white"})})})}),v.jsxs("div",{className:"relative w-[92%] h-[92%] rounded-xl overflow-hidden shadow-2xl z-10 border border-white/15 bg-slate-900 transition-transform duration-500 group-hover:-translate-x-2",children:[v.jsx("img",{src:n,alt:t==null?void 0:t.title,className:"w-full h-full object-cover",loading:"lazy"}),v.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"}),v.jsx("div",{className:"absolute top-2 left-2 px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-400/30 text-[10px] font-mono text-purple-300 backdrop-blur-sm",children:"ALBUM"})]})]}),v.jsxs("div",{className:"flex flex-col relative z-20",children:[v.jsx("h4",{className:"text-base font-bold text-white truncate group-hover:text-purple-300 transition-colors",children:(t==null?void 0:t.title)||"Untitled Album"}),v.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mt-1",children:[v.jsx("span",{className:"truncate",children:r}),v.jsxs("span",{className:"flex items-center gap-1 font-mono text-slate-500",children:[v.jsx(S_,{className:"w-3.5 h-3.5 text-purple-400"}),i," tracks"]})]})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="168",AT=0,pg=1,CT=2,A_=1,C_=2,vi=3,dr=0,mn=1,qn=2,sr=0,Gs=1,wc=2,mg=3,gg=4,RT=5,Pr=100,PT=101,NT=102,LT=103,DT=104,UT=200,IT=201,OT=202,FT=203,xf=204,vf=205,kT=206,BT=207,zT=208,HT=209,VT=210,jT=211,GT=212,WT=213,XT=214,qT=0,$T=1,YT=2,Mc=3,KT=4,ZT=5,JT=6,QT=7,R_=0,eb=1,tb=2,ar=0,nb=1,ib=2,rb=3,sb=4,ab=5,ob=6,lb=7,P_=300,ea=301,ta=302,_f=303,yf=304,Kc=306,Sf=1e3,Or=1001,wf=1002,Un=1003,cb=1004,nl=1005,$n=1006,Hu=1007,Fr=1008,Ni=1009,N_=1010,L_=1011,vo=1012,lp=1013,Qr=1014,Mi=1015,No=1016,cp=1017,up=1018,na=1020,D_=35902,U_=1021,I_=1022,Yn=1023,O_=1024,F_=1025,Ws=1026,ia=1027,k_=1028,dp=1029,B_=1030,fp=1031,hp=1033,Vl=33776,jl=33777,Gl=33778,Wl=33779,Mf=35840,Ef=35841,Tf=35842,bf=35843,Af=36196,Cf=37492,Rf=37496,Pf=37808,Nf=37809,Lf=37810,Df=37811,Uf=37812,If=37813,Of=37814,Ff=37815,kf=37816,Bf=37817,zf=37818,Hf=37819,Vf=37820,jf=37821,Xl=36492,Gf=36494,Wf=36495,z_=36283,Xf=36284,qf=36285,$f=36286,ub=3200,db=3201,H_=0,fb=1,Xi="",ii="srgb",vr="srgb-linear",pp="display-p3",Zc="display-p3-linear",Ec="linear",lt="srgb",Tc="rec709",bc="p3",as=7680,xg=519,hb=512,pb=513,mb=514,V_=515,gb=516,xb=517,vb=518,_b=519,vg=35044,_g="300 es",Ei=2e3,Ac=2001;class ha{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vu=Math.PI/180,Yf=180/Math.PI;function Lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function yb(t,e){return(t%e+e)%e}function ju(t,e,n){return(1-n)*t+n*e}function Aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],_=i[8],y=r[0],p=r[3],u=r[6],m=r[1],x=r[4],S=r[7],C=r[2],b=r[5],E=r[8];return s[0]=a*y+o*m+l*C,s[3]=a*p+o*x+l*b,s[6]=a*u+o*S+l*E,s[1]=c*y+d*m+f*C,s[4]=c*p+d*x+f*b,s[7]=c*u+d*S+f*E,s[2]=h*y+g*m+_*C,s[5]=h*p+g*x+_*b,s[8]=h*u+g*S+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,g=c*s-a*l,_=n*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Gu.makeScale(e,n)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new We;function j_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _o(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Sb(){const t=_o("canvas");return t.style.display="block",t}const yg={};function $a(t){t in yg||(yg[t]=!0,console.warn(t))}function wb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Sg=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wg=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[vr]:{transfer:Ec,primaries:Tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ii]:{transfer:lt,primaries:Tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Zc]:{transfer:Ec,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(wg),fromReference:t=>t.applyMatrix3(Sg)},[pp]:{transfer:lt,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(wg),fromReference:t=>t.applyMatrix3(Sg).convertLinearToSRGB()}},Mb=new Set([vr,Zc]),rt={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Mb.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ca[e].toReference,r=Ca[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ca[t].primaries},getTransfer:function(t){return t===Xi?Ec:Ca[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ca[e].luminanceCoefficients)}};function Xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class Eb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=_o("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_o("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xs(n[i]/255)*255):n[i]=Xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tb=0;class G_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xu(r[a].image)):s.push(Xu(r[a]))}else s=Xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Eb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bb=0;class nn extends ha{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Or,r=Or,s=$n,a=Fr,o=Yn,l=Ni,c=nn.DEFAULT_ANISOTROPY,d=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=Lo(),this.name="",this.source=new G_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sf:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sf:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=P_;nn.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,n=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(g+1)/2,C=(u+1)/2,b=(d+h)/4,E=(f+y)/4,P=(_+p)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=E/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=P/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-_)*(p-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(p-_)/m,this.y=(f-y)/m,this.z=(h-d)/m,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ab extends ha{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ct(0,0,e,n),this.scissorTest=!1,this.viewport=new ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new G_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Ab{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class W_ extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cb extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==g||d!==_){let p=1-o;const u=l*h+c*g+d*_+f*y,m=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),b=Math.atan2(C,u*m);p=Math.sin(p*b)/C,o=Math.sin(o*b)/C}const S=o*m;if(l=l*p+h*S,c=c*p+g*S,d=d*p+_*S,f=f*p+y*S,p===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*g-c*h,e[n+1]=l*_+d*h+c*f-o*g,e[n+2]=c*_+d*g+o*h-l*f,e[n+3]=d*_-o*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"YXZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"ZXY":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"ZYX":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"YZX":this._x=h*d*f+c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f-h*g*_;break;case"XZY":this._x=h*d*f-c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qu=new z,Mg=new Do;class Uo{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),rl.subVectors(this.max,Ra),ls.subVectors(e.a,Ra),cs.subVectors(e.b,Ra),us.subVectors(e.c,Ra),Oi.subVectors(cs,ls),Fi.subVectors(us,cs),yr.subVectors(ls,us);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-yr.z,yr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,yr.z,0,-yr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-yr.y,yr.x,0];return!$u(n,ls,cs,us,rl)||(n=[1,0,0,0,1,0,0,0,1],!$u(n,ls,cs,us,rl))?!1:(sl.crossVectors(Oi,Fi),n=[sl.x,sl.y,sl.z],$u(n,ls,cs,us,rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new z,new z,new z,new z,new z,new z,new z,new z],Hn=new z,il=new Uo,ls=new z,cs=new z,us=new z,Oi=new z,Fi=new z,yr=new z,Ra=new z,rl=new z,sl=new z,Sr=new z;function $u(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Sr.fromArray(t,s);const o=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),d=i.dot(Sr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Rb=new Uo,Pa=new z,Yu=new z;class Jc{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Rb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Yu)),this.expandByPoint(Pa.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new z,Ku=new z,al=new z,ki=new z,Zu=new z,ol=new z,Ju=new z;class X_{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ku.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(Ku);const s=e.distanceTo(n)*.5,a=-this.direction.dot(al),o=ki.dot(this.direction),l=-ki.dot(al),c=ki.lengthSq(),d=Math.abs(1-a*a);let f,h,g,_;if(d>0)if(f=a*l-o,h=a*o-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,g=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ku).addScaledVector(al,h),g}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){Zu.subVectors(n,e),ol.subVectors(i,e),Ju.crossVectors(Zu,ol);let a=this.direction.dot(Ju),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(ol.crossVectors(ki,ol));if(l<0)return null;const c=o*this.direction.dot(Zu.cross(ki));if(c<0||l+c>a)return null;const d=-o*ki.dot(Ju);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,a,o,l,c,d,f,h,g,_,y,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,g,_,y,p)}set(e,n,i,r,s,a,o,l,c,d,f,h,g,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,g=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+g*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,_=c*d,y=c*f;n[0]=h+y*o,n[4]=_*o-g,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=g*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,_=c*d,y=c*f;n[0]=h-y*o,n[4]=-a*f,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*d,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,g=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=_*c-g,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=g*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+g,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=g*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,g=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=a*d,n[9]=g*f-_,n[2]=_*f-g,n[6]=o*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pb,e,Nb)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Bi.crossVectors(i,vn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Bi.crossVectors(i,vn)),Bi.normalize(),ll.crossVectors(vn,Bi),r[0]=Bi.x,r[4]=ll.x,r[8]=vn.x,r[1]=Bi.y,r[5]=ll.y,r[9]=vn.y,r[2]=Bi.z,r[6]=ll.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],_=i[2],y=i[6],p=i[10],u=i[14],m=i[3],x=i[7],S=i[11],C=i[15],b=r[0],E=r[4],P=r[8],T=r[12],w=r[1],U=r[5],W=r[9],j=r[13],Q=r[2],te=r[6],$=r[10],ee=r[14],I=r[3],ne=r[7],L=r[11],R=r[15];return s[0]=a*b+o*w+l*Q+c*I,s[4]=a*E+o*U+l*te+c*ne,s[8]=a*P+o*W+l*$+c*L,s[12]=a*T+o*j+l*ee+c*R,s[1]=d*b+f*w+h*Q+g*I,s[5]=d*E+f*U+h*te+g*ne,s[9]=d*P+f*W+h*$+g*L,s[13]=d*T+f*j+h*ee+g*R,s[2]=_*b+y*w+p*Q+u*I,s[6]=_*E+y*U+p*te+u*ne,s[10]=_*P+y*W+p*$+u*L,s[14]=_*T+y*j+p*ee+u*R,s[3]=m*b+x*w+S*Q+C*I,s[7]=m*E+x*U+S*te+C*ne,s[11]=m*P+x*W+S*$+C*L,s[15]=m*T+x*j+S*ee+C*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*g-i*l*g)+y*(+n*l*g-n*c*h+s*a*h-r*a*g+r*c*d-s*l*d)+p*(+n*c*f-n*o*g-s*a*f+i*a*g+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],_=e[12],y=e[13],p=e[14],u=e[15],m=f*p*c-y*h*c+y*l*g-o*p*g-f*l*u+o*h*u,x=_*h*c-d*p*c-_*l*g+a*p*g+d*l*u-a*h*u,S=d*y*c-_*f*c+_*o*g-a*y*g-d*o*u+a*f*u,C=_*f*l-d*y*l-_*o*h+a*y*h+d*o*p-a*f*p,b=n*m+i*x+r*S+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=m*E,e[1]=(y*h*s-f*p*s-y*r*g+i*p*g+f*r*u-i*h*u)*E,e[2]=(o*p*s-y*l*s+y*r*c-i*p*c-o*r*u+i*l*u)*E,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*g-i*l*g)*E,e[4]=x*E,e[5]=(d*p*s-_*h*s+_*r*g-n*p*g-d*r*u+n*h*u)*E,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*E,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*g+n*l*g)*E,e[8]=S*E,e[9]=(_*f*s-d*y*s-_*i*g+n*y*g+d*i*u-n*f*u)*E,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*E,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*g-n*o*g)*E,e[12]=C*E,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*p+n*f*p)*E,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*p-n*o*p)*E,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,g=s*d,_=s*f,y=a*d,p=a*f,u=o*f,m=l*c,x=l*d,S=l*f,C=i.x,b=i.y,E=i.z;return r[0]=(1-(y+u))*C,r[1]=(g+S)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(h+u))*b,r[6]=(p+m)*b,r[7]=0,r[8]=(_+x)*E,r[9]=(p-m)*E,r[10]=(1-(h+y))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ds.set(r[0],r[1],r[2]).length();const a=ds.set(r[4],r[5],r[6]).length(),o=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,d=1/a,f=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=d,Vn.elements[5]*=d,Vn.elements[6]*=d,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ei){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(o===Ei)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ac)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ei){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,g=(i+r)*d;let _,y;if(o===Ei)_=(a+s)*f,y=-2*f;else if(o===Ac)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ds=new z,Vn=new gt,Pb=new z(0,0,0),Nb=new z(1,1,1),Bi=new z,ll=new z,vn=new z,Eg=new gt,Tg=new Do;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tg.setFromEuler(this),this.setFromQuaternion(Tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lb=0;const bg=new z,fs=new Do,pi=new gt,cl=new z,Na=new z,Db=new z,Ub=new Do,Ag=new z(1,0,0),Cg=new z(0,1,0),Rg=new z(0,0,1),Pg={type:"added"},Ib={type:"removed"},hs={type:"childadded",child:null},Qu={type:"childremoved",child:null};class zt extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new z,n=new ci,i=new Do,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,n){return bg.copy(e).applyQuaternion(this.quaternion),this.position.add(bg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cl.copy(e):cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Na,cl,this.up):pi.lookAt(cl,Na,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(pi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pg),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ib),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pg),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,Db),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,Ub,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new z,mi=new z,ed=new z,gi=new z,ps=new z,ms=new z,Ng=new z,td=new z,nd=new z,id=new z;class ai{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),mi.subVectors(i,n),ed.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(mi),l=jn.dot(ed),c=mi.dot(mi),d=mi.dot(ed),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),mi.subVectors(e,n),jn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),jn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ps.subVectors(r,i),ms.subVectors(s,i),td.subVectors(e,i);const l=ps.dot(td),c=ms.dot(td);if(l<=0&&c<=0)return n.copy(i);nd.subVectors(e,r);const d=ps.dot(nd),f=ms.dot(nd);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(ps,a);id.subVectors(e,s);const g=ps.dot(id),_=ms.dot(id);if(_>=0&&g<=_)return n.copy(s);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ms,o);const p=d*_-g*f;if(p<=0&&f-d>=0&&g-_>=0)return Ng.subVectors(s,r),o=(f-d)/(f-d+(g-_)),n.copy(r).addScaledVector(Ng,o);const u=1/(p+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ul={h:0,s:0,l:0};function rd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=yb(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=rd(a,s,e+1/3),this.g=rd(a,s,e),this.b=rd(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=$_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Wu(e.r),this.g=Wu(e.g),this.b=Wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return rt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(ln(Xt.r*255,0,255))*65536+Math.round(ln(Xt.g*255,0,255))*256+Math.round(ln(Xt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=ii){rt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(ul);const i=ju(zi.h,ul.h,n),r=ju(zi.s,ul.s,n),s=ju(zi.l,ul.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Xe;Xe.NAMES=$_;let Ob=0;class pa extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=Gs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xf,this.blendDst=vf,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xf&&(i.blendSrc=this.blendSrc),this.blendDst!==vf&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vr extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,dl=new qe;class Mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $a("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vg&&(e.usage=this.usage),e}}class Y_ extends Mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class K_ extends Mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zt extends Mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Fb=0;const Rn=new gt,sd=new zt,gs=new z,_n=new Uo,La=new Uo,Lt=new z;class An extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j_(e)?K_:Y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(_n.min,La.min),_n.expandByPoint(Lt),Lt.addVectors(_n.max,La.max),_n.expandByPoint(Lt)):(_n.expandByPoint(La.min),_n.expandByPoint(La.max))}_n.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Lt.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),Lt.add(gs)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new z,l[P]=new z;const c=new z,d=new z,f=new z,h=new qe,g=new qe,_=new qe,y=new z,p=new z;function u(P,T,w){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,w),h.fromBufferAttribute(s,P),g.fromBufferAttribute(s,T),_.fromBufferAttribute(s,w),d.sub(c),f.sub(c),g.sub(h),_.sub(h);const U=1/(g.x*_.y-_.x*g.y);isFinite(U)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(U),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(U),o[P].add(y),o[T].add(y),o[w].add(y),l[P].add(p),l[T].add(p),l[w].add(p))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let P=0,T=m.length;P<T;++P){const w=m[P],U=w.start,W=w.count;for(let j=U,Q=U+W;j<Q;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const x=new z,S=new z,C=new z,b=new z;function E(P){C.fromBufferAttribute(r,P),b.copy(C);const T=o[P];x.copy(T),x.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(b,T);const U=S.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,U)}for(let P=0,T=m.length;P<T;++P){const w=m[P],U=w.start,W=w.count;for(let j=U,Q=U+W;j<Q;j+=3)E(e.getX(j+0)),E(e.getX(j+1)),E(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let g=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[g++]}return new Mn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lg=new gt,wr=new X_,fl=new Jc,Dg=new z,xs=new z,vs=new z,_s=new z,ad=new z,hl=new z,pl=new qe,ml=new qe,gl=new qe,Ug=new z,Ig=new z,Og=new z,xl=new z,vl=new z;class ht extends zt{constructor(e=new An,n=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(ad.fromBufferAttribute(f,e),a?hl.addScaledVector(ad,d):hl.addScaledVector(ad.sub(n),d))}n.add(hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(fl.containsPoint(wr.origin)===!1&&(wr.intersectSphere(fl,Dg)===null||wr.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Lg.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Lg),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=a[p.materialIndex],m=Math.max(p.start,g.start),x=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let S=m,C=x;S<C;S+=3){const b=o.getX(S),E=o.getX(S+1),P=o.getX(S+2);r=_l(this,u,e,i,c,d,f,b,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let p=_,u=y;p<u;p+=3){const m=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);r=_l(this,a,e,i,c,d,f,m,x,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=a[p.materialIndex],m=Math.max(p.start,g.start),x=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=m,C=x;S<C;S+=3){const b=S,E=S+1,P=S+2;r=_l(this,u,e,i,c,d,f,b,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=_,u=y;p<u;p+=3){const m=p,x=p+1,S=p+2;r=_l(this,a,e,i,c,d,f,m,x,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function kb(t,e,n,i,r,s,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===dr,o),l===null)return null;vl.copy(o),vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(vl);return c<n.near||c>n.far?null:{distance:c,point:vl.clone(),object:t}}function _l(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,xs),t.getVertexPosition(l,vs),t.getVertexPosition(c,_s);const d=kb(t,e,n,i,xs,vs,_s,xl);if(d){r&&(pl.fromBufferAttribute(r,o),ml.fromBufferAttribute(r,l),gl.fromBufferAttribute(r,c),d.uv=ai.getInterpolation(xl,xs,vs,_s,pl,ml,gl,new qe)),s&&(pl.fromBufferAttribute(s,o),ml.fromBufferAttribute(s,l),gl.fromBufferAttribute(s,c),d.uv1=ai.getInterpolation(xl,xs,vs,_s,pl,ml,gl,new qe)),a&&(Ug.fromBufferAttribute(a,o),Ig.fromBufferAttribute(a,l),Og.fromBufferAttribute(a,c),d.normal=ai.getInterpolation(xl,xs,vs,_s,Ug,Ig,Og,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new z,materialIndex:0};ai.getNormal(xs,vs,_s,f.normal),d.face=f}return d}class fr extends An{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function _(y,p,u,m,x,S,C,b,E,P,T){const w=S/E,U=C/P,W=S/2,j=C/2,Q=b/2,te=E+1,$=P+1;let ee=0,I=0;const ne=new z;for(let L=0;L<$;L++){const R=L*U-j;for(let J=0;J<te;J++){const H=J*w-W;ne[y]=H*m,ne[p]=R*x,ne[u]=Q,c.push(ne.x,ne.y,ne.z),ne[y]=0,ne[p]=0,ne[u]=b>0?1:-1,d.push(ne.x,ne.y,ne.z),f.push(J/E),f.push(1-L/P),ee+=1}}for(let L=0;L<P;L++)for(let R=0;R<E;R++){const J=h+R+te*L,H=h+R+te*(L+1),F=h+(R+1)+te*(L+1),G=h+(R+1)+te*L;l.push(J,H,G),l.push(H,F,G),I+=6}o.addGroup(g,I,T),g+=I,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=ra(t[n]);for(const r in i)e[r]=i[r]}return e}function Bb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Z_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const zb={clone:ra,merge:Qt};var Hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hb,this.fragmentShader=Vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=Bb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J_ extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new z,Fg=new qe,kg=new qe;class $t extends J_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(Vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,Fg,kg),n.subVectors(kg,Fg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,Ss=1;class jb extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(ys,Ss,e,n);r.layers=this.layers,this.add(r);const s=new $t(ys,Ss,e,n);s.layers=this.layers,this.add(s);const a=new $t(ys,Ss,e,n);a.layers=this.layers,this.add(a);const o=new $t(ys,Ss,e,n);o.layers=this.layers,this.add(o);const l=new $t(ys,Ss,e,n);l.layers=this.layers,this.add(l);const c=new $t(ys,Ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Q_ extends nn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ea,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gb extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Q_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fr(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:sr});s.uniforms.tEquirect.value=n;const a=new ht(r,s),o=n.minFilter;return n.minFilter===Fr&&(n.minFilter=$n),new jb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const od=new z,Wb=new z,Xb=new We;class Cr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=od.subVectors(i,n).cross(Wb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(od),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Xb.getNormalMatrix(e),r=this.coplanarPoint(od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Jc,yl=new z;class mp{constructor(e=new Cr,n=new Cr,i=new Cr,r=new Cr,s=new Cr,a=new Cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],_=r[9],y=r[10],p=r[11],u=r[12],m=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-g,S-u).normalize(),i[1].setComponents(l+s,h+c,p+g,S+u).normalize(),i[2].setComponents(l+a,h+d,p+_,S+m).normalize(),i[3].setComponents(l-a,h-d,p-_,S-m).normalize(),i[4].setComponents(l-o,h-f,p-y,S-x).normalize(),n===Ei)i[5].setComponents(l+o,h+f,p+y,S+x).normalize();else if(n===Ac)i[5].setComponents(o,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ey(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qb(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,o),f.count===-1&&h.length===0&&t.bufferSubData(c,0,d),h.length!==0){for(let g=0,_=h.length;g<_;g++){const y=h[g];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Qc extends An{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,g=[],_=[],y=[],p=[];for(let u=0;u<d;u++){const m=u*h-a;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-m,0),y.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const x=m+c*u,S=m+c*(u+1),C=m+1+c*(u+1),b=m+1+c*u;g.push(x,S,b),g.push(S,C,b)}this.setIndex(g),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}var $b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_A=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EA="gl_FragColor = linearToOutputTexel( gl_FragColor );",TA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$A=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_C=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$C=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_R=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:$b,alphahash_pars_fragment:Yb,alphamap_fragment:Kb,alphamap_pars_fragment:Zb,alphatest_fragment:Jb,alphatest_pars_fragment:Qb,aomap_fragment:eA,aomap_pars_fragment:tA,batching_pars_vertex:nA,batching_vertex:iA,begin_vertex:rA,beginnormal_vertex:sA,bsdfs:aA,iridescence_fragment:oA,bumpmap_pars_fragment:lA,clipping_planes_fragment:cA,clipping_planes_pars_fragment:uA,clipping_planes_pars_vertex:dA,clipping_planes_vertex:fA,color_fragment:hA,color_pars_fragment:pA,color_pars_vertex:mA,color_vertex:gA,common:xA,cube_uv_reflection_fragment:vA,defaultnormal_vertex:_A,displacementmap_pars_vertex:yA,displacementmap_vertex:SA,emissivemap_fragment:wA,emissivemap_pars_fragment:MA,colorspace_fragment:EA,colorspace_pars_fragment:TA,envmap_fragment:bA,envmap_common_pars_fragment:AA,envmap_pars_fragment:CA,envmap_pars_vertex:RA,envmap_physical_pars_fragment:zA,envmap_vertex:PA,fog_vertex:NA,fog_pars_vertex:LA,fog_fragment:DA,fog_pars_fragment:UA,gradientmap_pars_fragment:IA,lightmap_pars_fragment:OA,lights_lambert_fragment:FA,lights_lambert_pars_fragment:kA,lights_pars_begin:BA,lights_toon_fragment:HA,lights_toon_pars_fragment:VA,lights_phong_fragment:jA,lights_phong_pars_fragment:GA,lights_physical_fragment:WA,lights_physical_pars_fragment:XA,lights_fragment_begin:qA,lights_fragment_maps:$A,lights_fragment_end:YA,logdepthbuf_fragment:KA,logdepthbuf_pars_fragment:ZA,logdepthbuf_pars_vertex:JA,logdepthbuf_vertex:QA,map_fragment:eC,map_pars_fragment:tC,map_particle_fragment:nC,map_particle_pars_fragment:iC,metalnessmap_fragment:rC,metalnessmap_pars_fragment:sC,morphinstance_vertex:aC,morphcolor_vertex:oC,morphnormal_vertex:lC,morphtarget_pars_vertex:cC,morphtarget_vertex:uC,normal_fragment_begin:dC,normal_fragment_maps:fC,normal_pars_fragment:hC,normal_pars_vertex:pC,normal_vertex:mC,normalmap_pars_fragment:gC,clearcoat_normal_fragment_begin:xC,clearcoat_normal_fragment_maps:vC,clearcoat_pars_fragment:_C,iridescence_pars_fragment:yC,opaque_fragment:SC,packing:wC,premultiplied_alpha_fragment:MC,project_vertex:EC,dithering_fragment:TC,dithering_pars_fragment:bC,roughnessmap_fragment:AC,roughnessmap_pars_fragment:CC,shadowmap_pars_fragment:RC,shadowmap_pars_vertex:PC,shadowmap_vertex:NC,shadowmask_pars_fragment:LC,skinbase_vertex:DC,skinning_pars_vertex:UC,skinning_vertex:IC,skinnormal_vertex:OC,specularmap_fragment:FC,specularmap_pars_fragment:kC,tonemapping_fragment:BC,tonemapping_pars_fragment:zC,transmission_fragment:HC,transmission_pars_fragment:VC,uv_pars_fragment:jC,uv_pars_vertex:GC,uv_vertex:WC,worldpos_vertex:XC,background_vert:qC,background_frag:$C,backgroundCube_vert:YC,backgroundCube_frag:KC,cube_vert:ZC,cube_frag:JC,depth_vert:QC,depth_frag:eR,distanceRGBA_vert:tR,distanceRGBA_frag:nR,equirect_vert:iR,equirect_frag:rR,linedashed_vert:sR,linedashed_frag:aR,meshbasic_vert:oR,meshbasic_frag:lR,meshlambert_vert:cR,meshlambert_frag:uR,meshmatcap_vert:dR,meshmatcap_frag:fR,meshnormal_vert:hR,meshnormal_frag:pR,meshphong_vert:mR,meshphong_frag:gR,meshphysical_vert:xR,meshphysical_frag:vR,meshtoon_vert:_R,meshtoon_frag:yR,points_vert:SR,points_frag:wR,shadow_vert:MR,shadow_frag:ER,sprite_vert:TR,sprite_frag:bR},_e={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ri={basic:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Qt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Qt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Qt([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Qt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Qt([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Qt([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Qt([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Qt([_e.lights,_e.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ri.physical={uniforms:Qt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Sl={r:0,b:0,g:0},Er=new ci,AR=new gt;function CR(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,d,f=null,h=0,g=null;function _(m){let x=m.isScene===!0?m.background:null;return x&&x.isTexture&&(x=(m.backgroundBlurriness>0?n:e).get(x)),x}function y(m){let x=!1;const S=_(m);S===null?u(o,l):S&&S.isColor&&(u(S,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(m,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Kc)?(d===void 0&&(d=new ht(new fr(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:ra(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Er.copy(x.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(AR.makeRotationFromEuler(Er)),d.material.toneMapped=rt.getTransfer(S.colorSpace)!==lt,(f!==S||h!==S.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,h=S.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ht(new Qc(2,2),new hr({name:"BackgroundMaterial",uniforms:ra(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=rt.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function u(m,x){m.getRGB(Sl,Z_(t)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,u(o,l)},render:y,addToRenderList:p}}function RR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,U,W,j,Q){let te=!1;const $=f(j,W,U);s!==$&&(s=$,c(s.object)),te=g(w,j,W,Q),te&&_(w,j,W,Q),Q!==null&&e.update(Q,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,S(w,U,W,j),Q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function f(w,U,W){const j=W.wireframe===!0;let Q=i[w.id];Q===void 0&&(Q={},i[w.id]=Q);let te=Q[U.id];te===void 0&&(te={},Q[U.id]=te);let $=te[j];return $===void 0&&($=h(l()),te[j]=$),$}function h(w){const U=[],W=[],j=[];for(let Q=0;Q<n;Q++)U[Q]=0,W[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:j,object:w,attributes:{},index:null}}function g(w,U,W,j){const Q=s.attributes,te=U.attributes;let $=0;const ee=W.getAttributes();for(const I in ee)if(ee[I].location>=0){const L=Q[I];let R=te[I];if(R===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(R=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(R=w.instanceColor)),L===void 0||L.attribute!==R||R&&L.data!==R.data)return!0;$++}return s.attributesNum!==$||s.index!==j}function _(w,U,W,j){const Q={},te=U.attributes;let $=0;const ee=W.getAttributes();for(const I in ee)if(ee[I].location>=0){let L=te[I];L===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const R={};R.attribute=L,L&&L.data&&(R.data=L.data),Q[I]=R,$++}s.attributes=Q,s.attributesNum=$,s.index=j}function y(){const w=s.newAttributes;for(let U=0,W=w.length;U<W;U++)w[U]=0}function p(w){u(w,0)}function u(w,U){const W=s.newAttributes,j=s.enabledAttributes,Q=s.attributeDivisors;W[w]=1,j[w]===0&&(t.enableVertexAttribArray(w),j[w]=1),Q[w]!==U&&(t.vertexAttribDivisor(w,U),Q[w]=U)}function m(){const w=s.newAttributes,U=s.enabledAttributes;for(let W=0,j=U.length;W<j;W++)U[W]!==w[W]&&(t.disableVertexAttribArray(W),U[W]=0)}function x(w,U,W,j,Q,te,$){$===!0?t.vertexAttribIPointer(w,U,W,Q,te):t.vertexAttribPointer(w,U,W,j,Q,te)}function S(w,U,W,j){y();const Q=j.attributes,te=W.getAttributes(),$=U.defaultAttributeValues;for(const ee in te){const I=te[ee];if(I.location>=0){let ne=Q[ee];if(ne===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),ne!==void 0){const L=ne.normalized,R=ne.itemSize,J=e.get(ne);if(J===void 0)continue;const H=J.buffer,F=J.type,G=J.bytesPerElement,ie=F===t.INT||F===t.UNSIGNED_INT||ne.gpuType===lp;if(ne.isInterleavedBufferAttribute){const X=ne.data,le=X.stride,ge=ne.offset;if(X.isInstancedInterleavedBuffer){for(let Te=0;Te<I.locationSize;Te++)u(I.location+Te,X.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Te=0;Te<I.locationSize;Te++)p(I.location+Te);t.bindBuffer(t.ARRAY_BUFFER,H);for(let Te=0;Te<I.locationSize;Te++)x(I.location+Te,R/I.locationSize,F,L,le*G,(ge+R/I.locationSize*Te)*G,ie)}else{if(ne.isInstancedBufferAttribute){for(let X=0;X<I.locationSize;X++)u(I.location+X,ne.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let X=0;X<I.locationSize;X++)p(I.location+X);t.bindBuffer(t.ARRAY_BUFFER,H);for(let X=0;X<I.locationSize;X++)x(I.location+X,R/I.locationSize,F,L,R*G,R/I.locationSize*X*G,ie)}}else if($!==void 0){const L=$[ee];if(L!==void 0)switch(L.length){case 2:t.vertexAttrib2fv(I.location,L);break;case 3:t.vertexAttrib3fv(I.location,L);break;case 4:t.vertexAttrib4fv(I.location,L);break;default:t.vertexAttrib1fv(I.location,L)}}}}m()}function C(){P();for(const w in i){const U=i[w];for(const W in U){const j=U[W];for(const Q in j)d(j[Q].object),delete j[Q];delete U[W]}delete i[w]}}function b(w){if(i[w.id]===void 0)return;const U=i[w.id];for(const W in U){const j=U[W];for(const Q in j)d(j[Q].object),delete j[Q];delete U[W]}delete i[w.id]}function E(w){for(const U in i){const W=i[U];if(W[w.id]===void 0)continue;const j=W[w.id];for(const Q in j)d(j[Q].object),delete j[Q];delete W[w.id]}}function P(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:p,disableUnusedAttributes:m}}function PR(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];n.update(g,i,1)}function l(c,d,f,h){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let y=0;y<f;y++)_+=d[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function NR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Yn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const E=b===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ni&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Mi&&!E)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),m=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:u,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:S,maxSamples:C}}function LR(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Cr,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const _=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const m=s?0:i,x=m*4;let S=u.clippingState||null;l.value=S,S=d(_,h,x,g);for(let C=0;C!==x;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,_){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=g+y*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,S=g;x!==y;++x,S+=4)a.copy(f[x]).applyMatrix4(m,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function DR(t){let e=new WeakMap;function n(a,o){return o===_f?a.mapping=ea:o===yf&&(a.mapping=ta),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_f||o===yf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gb(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ty extends J_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,Bg=[.125,.215,.35,.446,.526,.582],Nr=20,ld=new ty,zg=new Xe;let cd=null,ud=0,dd=0,fd=!1;const Rr=(1+Math.sqrt(5))/2,ws=1/Rr,Hg=[new z(-Rr,ws,0),new z(Rr,ws,0),new z(-ws,0,Rr),new z(ws,0,Rr),new z(0,Rr,-ws),new z(0,Rr,ws),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,dd),this._renderer.xr.enabled=fd,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:No,format:Yn,colorSpace:vr,depthBuffer:!1},r=jg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UR(s)),this._blurMaterial=IR(s,e,n)}return r}_compileMaterial(e){const n=new ht(this._lodPlanes[0],e);this._renderer.compile(n,ld)}_sceneToCubeUV(e,n,i,r){const o=new $t(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(zg),d.toneMapping=ar,d.autoClear=!1;const g=new Vr({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new ht(new fr,g);let y=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,y=!0):(g.color.copy(zg),y=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):m===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;wl(r,m*x,u>2?x:0,x,x),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ea||e.mapping===ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ld)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hg[(r-s-1)%Hg.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ht(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Nr-1),y=s/_,p=isFinite(s)?1+Math.floor(d*y):Nr;p>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nr}`);const u=[];let m=0;for(let E=0;E<Nr;++E){const P=E/y,T=Math.exp(-P*P/2);u.push(T),E===0?m+=T:E<p&&(m+=2*T)}for(let E=0;E<u.length;E++)u[E]=u[E]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Os?r-x+Os:0),b=4*(this._cubeSize-S);wl(n,C,b,3*S,2*S),l.setRenderTarget(n),l.render(f,ld)}}function UR(t){const e=[],n=[],i=[];let r=t;const s=t-Os+1+Bg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Os?l=Bg[a-t+Os-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,y=3,p=2,u=1,m=new Float32Array(y*_*g),x=new Float32Array(p*_*g),S=new Float32Array(u*_*g);for(let b=0;b<g;b++){const E=b%3*2/3-1,P=b>2?0:-1,T=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];m.set(T,y*_*b),x.set(h,p*_*b);const w=[b,b,b,b,b,b];S.set(w,u*_*b)}const C=new An;C.setAttribute("position",new Mn(m,y)),C.setAttribute("uv",new Mn(x,p)),C.setAttribute("faceIndex",new Mn(S,u)),e.push(C),r>Os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jg(t,e,n){const i=new es(t,e,n);return i.texture.mapping=Kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function IR(t,e,n){const i=new Float32Array(Nr),r=new z(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Gg(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Wg(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function gp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OR(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_f||l===yf,d=l===ea||l===ta;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Vg(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new Vg(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function FR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$a("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kR(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const y=g[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,_=f.attributes.position;let y=0;if(g!==null){const m=g.array;y=g.version;for(let x=0,S=m.length;x<S;x+=3){const C=m[x+0],b=m[x+1],E=m[x+2];h.push(C,b,b,E,E,C)}}else if(_!==void 0){const m=_.array;y=_.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const C=x+0,b=x+1,E=x+2;h.push(C,b,b,E,E,C)}}else return;const p=new(j_(h)?K_:Y_)(h,1);p.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function BR(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*a),n.update(g,i,1)}function c(h,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,h*a,_),n.update(g,i,_))}function d(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,_);let p=0;for(let u=0;u<_;u++)p+=g[u];n.update(p,i,1)}function f(h,g,_,y){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/a,g[u],y[u]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,y,0,_);let u=0;for(let m=0;m<_;m++)u+=g[m];for(let m=0;m<y.length;m++)n.update(u,i,y[m])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function zR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HR(t,e,n){const i=new WeakMap,r=new ct;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let w=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var g=w;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),p===!0&&(S=3);let C=o.attributes.position.count*S,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*b*4*f),P=new W_(E,C,b,f);P.type=Mi,P.needsUpdate=!0;const T=S*4;for(let U=0;U<f;U++){const W=u[U],j=m[U],Q=x[U],te=C*b*4*U;for(let $=0;$<W.count;$++){const ee=$*T;_===!0&&(r.fromBufferAttribute(W,$),E[te+ee+0]=r.x,E[te+ee+1]=r.y,E[te+ee+2]=r.z,E[te+ee+3]=0),y===!0&&(r.fromBufferAttribute(j,$),E[te+ee+4]=r.x,E[te+ee+5]=r.y,E[te+ee+6]=r.z,E[te+ee+7]=0),p===!0&&(r.fromBufferAttribute(Q,$),E[te+ee+8]=r.x,E[te+ee+9]=r.y,E[te+ee+10]=r.z,E[te+ee+11]=Q.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new qe(C,b)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function VR(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class ny extends nn{constructor(e,n,i,r,s,a,o,l,c,d=Ws){if(d!==Ws&&d!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ws&&(i=Qr),i===void 0&&d===ia&&(i=na),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const iy=new nn,Xg=new ny(1,1),ry=new W_,sy=new Cb,ay=new Q_,qg=[],$g=[],Yg=new Float32Array(16),Kg=new Float32Array(9),Zg=new Float32Array(4);function ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qg[r];if(s===void 0&&(s=new Float32Array(r),qg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function eu(t,e){let n=$g[e];n===void 0&&(n=new Int32Array(e),$g[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function WR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function XR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function qR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Zg.set(i),t.uniformMatrix2fv(this.addr,!1,Zg),Nt(n,i)}}function $R(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Kg.set(i),t.uniformMatrix3fv(this.addr,!1,Kg),Nt(n,i)}}function YR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Yg.set(i),t.uniformMatrix4fv(this.addr,!1,Yg),Nt(n,i)}}function KR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function JR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function QR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function e2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function r2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xg.compareFunction=V_,s=Xg):s=iy,n.setTexture2D(e||s,r)}function s2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sy,r)}function a2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ay,r)}function o2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ry,r)}function l2(t){switch(t){case 5126:return jR;case 35664:return GR;case 35665:return WR;case 35666:return XR;case 35674:return qR;case 35675:return $R;case 35676:return YR;case 5124:case 35670:return KR;case 35667:case 35671:return ZR;case 35668:case 35672:return JR;case 35669:case 35673:return QR;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return r2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return a2;case 36289:case 36303:case 36311:case 36292:return o2}}function c2(t,e){t.uniform1fv(this.addr,e)}function u2(t,e){const n=ma(e,this.size,2);t.uniform2fv(this.addr,n)}function d2(t,e){const n=ma(e,this.size,3);t.uniform3fv(this.addr,n)}function f2(t,e){const n=ma(e,this.size,4);t.uniform4fv(this.addr,n)}function h2(t,e){const n=ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function p2(t,e){const n=ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function m2(t,e){const n=ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function g2(t,e){t.uniform1iv(this.addr,e)}function x2(t,e){t.uniform2iv(this.addr,e)}function v2(t,e){t.uniform3iv(this.addr,e)}function _2(t,e){t.uniform4iv(this.addr,e)}function y2(t,e){t.uniform1uiv(this.addr,e)}function S2(t,e){t.uniform2uiv(this.addr,e)}function w2(t,e){t.uniform3uiv(this.addr,e)}function M2(t,e){t.uniform4uiv(this.addr,e)}function E2(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||iy,s[a])}function T2(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||sy,s[a])}function b2(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||ay,s[a])}function A2(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ry,s[a])}function C2(t){switch(t){case 5126:return c2;case 35664:return u2;case 35665:return d2;case 35666:return f2;case 35674:return h2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return g2;case 35667:case 35671:return x2;case 35668:case 35672:return v2;case 35669:case 35673:return _2;case 5125:return y2;case 36294:return S2;case 36295:return w2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return A2}}class R2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=l2(n.type)}}class P2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=C2(n.type)}}class N2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function Jg(t,e){t.seq.push(e),t.map[e.id]=e}function L2(t,e,n){const i=t.name,r=i.length;for(hd.lastIndex=0;;){const s=hd.exec(i),a=hd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Jg(n,c===void 0?new R2(o,t,e):new P2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new N2(o),Jg(n,f)),n=f}}}class ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);L2(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const D2=37297;let U2=0;function I2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function O2(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===bc&&n===Tc?i="LinearDisplayP3ToLinearSRGB":e===Tc&&n===bc&&(i="LinearSRGBToLinearDisplayP3"),t){case vr:case Zc:return[i,"LinearTransferOETF"];case ii:case pp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function e0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+I2(t.getShaderSource(e),a)}else return r}function F2(t,e){const n=O2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function k2(t,e){let n;switch(e){case nb:n="Linear";break;case ib:n="Reinhard";break;case rb:n="Cineon";break;case sb:n="ACESFilmic";break;case ob:n="AgX";break;case lb:n="Neutral";break;case ab:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new z;function B2(){rt.getLuminanceCoefficients(Ml);const t=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function H2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function V2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ka(t){return t!==""}function t0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function n0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(t){return t.replace(j2,W2)}const G2=new Map;function W2(t,e){let n=Ge[e];if(n===void 0){const i=G2.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kf(n)}const X2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(t){return t.replace(X2,q2)}function q2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function r0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===C_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Y2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function Z2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case R_:e="ENVMAP_BLENDING_MULTIPLY";break;case eb:e="ENVMAP_BLENDING_MIX";break;case tb:e="ENVMAP_BLENDING_ADD";break}return e}function J2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Q2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=$2(n),c=Y2(n),d=K2(n),f=Z2(n),h=J2(n),g=z2(n),_=H2(s),y=r.createProgram();let p,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ka).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ka).join(`
`),u.length>0&&(u+=`
`)):(p=[r0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),u=[r0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?Ge.tonemapping_pars_fragment:"",n.toneMapping!==ar?k2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,F2("linearToOutputTexel",n.outputColorSpace),B2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ka).join(`
`)),a=Kf(a),a=t0(a,n),a=n0(a,n),o=Kf(o),o=t0(o,n),o=n0(o,n),a=i0(a),o=i0(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=m+p+a,S=m+u+o,C=Qg(r,r.VERTEX_SHADER,x),b=Qg(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function E(U){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(y).trim(),j=r.getShaderInfoLog(C).trim(),Q=r.getShaderInfoLog(b).trim();let te=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,b);else{const ee=e0(r,C,"vertex"),I=e0(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+ee+`
`+I)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||Q==="")&&($=!1);$&&(U.diagnostics={runnable:te,programLog:W,vertexShader:{log:j,prefix:p},fragmentShader:{log:Q,prefix:u}})}r.deleteShader(C),r.deleteShader(b),P=new ql(r,y),T=V2(r,y)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(y,D2)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}let eP=0;class tP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nP(e),n.set(e,i)),i}}class nP{constructor(e){this.id=eP++,this.code=e,this.usedTimes=0}}function iP(t,e,n,i,r,s,a){const o=new q_,l=new tP,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,w,U,W,j){const Q=W.fog,te=j.geometry,$=T.isMeshStandardMaterial?W.environment:null,ee=(T.isMeshStandardMaterial?n:e).get(T.envMap||$),I=ee&&ee.mapping===Kc?ee.image.height:null,ne=_[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const L=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,R=L!==void 0?L.length:0;let J=0;te.morphAttributes.position!==void 0&&(J=1),te.morphAttributes.normal!==void 0&&(J=2),te.morphAttributes.color!==void 0&&(J=3);let H,F,G,ie;if(ne){const et=ri[ne];H=et.vertexShader,F=et.fragmentShader}else H=T.vertexShader,F=T.fragmentShader,l.update(T),G=l.getVertexShaderID(T),ie=l.getFragmentShaderID(T);const X=t.getRenderTarget(),le=j.isInstancedMesh===!0,ge=j.isBatchedMesh===!0,Te=!!T.map,Le=!!T.matcap,D=!!ee,Ie=!!T.aoMap,ve=!!T.lightMap,Oe=!!T.bumpMap,Se=!!T.normalMap,Fe=!!T.displacementMap,ue=!!T.emissiveMap,we=!!T.metalnessMap,N=!!T.roughnessMap,M=T.anisotropy>0,Y=T.clearcoat>0,re=T.dispersion>0,ae=T.iridescence>0,ce=T.sheen>0,Ue=T.transmission>0,ye=M&&!!T.anisotropyMap,be=Y&&!!T.clearcoatMap,Ve=Y&&!!T.clearcoatNormalMap,fe=Y&&!!T.clearcoatRoughnessMap,Me=ae&&!!T.iridescenceMap,Ke=ae&&!!T.iridescenceThicknessMap,ke=ce&&!!T.sheenColorMap,Ce=ce&&!!T.sheenRoughnessMap,je=!!T.specularMap,$e=!!T.specularColorMap,ft=!!T.specularIntensityMap,k=Ue&&!!T.transmissionMap,he=Ue&&!!T.thicknessMap,se=!!T.gradientMap,oe=!!T.alphaMap,me=T.alphaTest>0,Be=!!T.alphaHash,Ze=!!T.extensions;let Et=ar;T.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Et=t.toneMapping);const Ot={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:H,fragmentShader:F,defines:T.defines,customVertexShaderID:G,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ge,batchingColor:ge&&j._colorsTexture!==null,instancing:le,instancingColor:le&&j.instanceColor!==null,instancingMorph:le&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:X===null?t.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:vr,alphaToCoverage:!!T.alphaToCoverage,map:Te,matcap:Le,envMap:D,envMapMode:D&&ee.mapping,envMapCubeUVHeight:I,aoMap:Ie,lightMap:ve,bumpMap:Oe,normalMap:Se,displacementMap:h&&Fe,emissiveMap:ue,normalMapObjectSpace:Se&&T.normalMapType===fb,normalMapTangentSpace:Se&&T.normalMapType===H_,metalnessMap:we,roughnessMap:N,anisotropy:M,anisotropyMap:ye,clearcoat:Y,clearcoatMap:be,clearcoatNormalMap:Ve,clearcoatRoughnessMap:fe,dispersion:re,iridescence:ae,iridescenceMap:Me,iridescenceThicknessMap:Ke,sheen:ce,sheenColorMap:ke,sheenRoughnessMap:Ce,specularMap:je,specularColorMap:$e,specularIntensityMap:ft,transmission:Ue,transmissionMap:k,thicknessMap:he,gradientMap:se,opaque:T.transparent===!1&&T.blending===Gs&&T.alphaToCoverage===!1,alphaMap:oe,alphaTest:me,alphaHash:Be,combine:T.combine,mapUv:Te&&y(T.map.channel),aoMapUv:Ie&&y(T.aoMap.channel),lightMapUv:ve&&y(T.lightMap.channel),bumpMapUv:Oe&&y(T.bumpMap.channel),normalMapUv:Se&&y(T.normalMap.channel),displacementMapUv:Fe&&y(T.displacementMap.channel),emissiveMapUv:ue&&y(T.emissiveMap.channel),metalnessMapUv:we&&y(T.metalnessMap.channel),roughnessMapUv:N&&y(T.roughnessMap.channel),anisotropyMapUv:ye&&y(T.anisotropyMap.channel),clearcoatMapUv:be&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&y(T.sheenRoughnessMap.channel),specularMapUv:je&&y(T.specularMap.channel),specularColorMapUv:$e&&y(T.specularColorMap.channel),specularIntensityMapUv:ft&&y(T.specularIntensityMap.channel),transmissionMapUv:k&&y(T.transmissionMap.channel),thicknessMapUv:he&&y(T.thicknessMap.channel),alphaMapUv:oe&&y(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Se||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!te.attributes.uv&&(Te||oe),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:Te&&T.map.isVideoTexture===!0&&rt.getTransfer(T.map.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qn,flipSided:T.side===mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&T.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function u(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)w.push(U),w.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(m(w,T),x(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function m(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function x(T,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.doubleSided&&o.enable(10),w.flipSided&&o.enable(11),w.useDepthPacking&&o.enable(12),w.dithering&&o.enable(13),w.transmission&&o.enable(14),w.sheen&&o.enable(15),w.opaque&&o.enable(16),w.pointsUvs&&o.enable(17),w.decodeVideoTexture&&o.enable(18),w.alphaToCoverage&&o.enable(19),T.push(o.mask)}function S(T){const w=_[T.type];let U;if(w){const W=ri[w];U=zb.clone(W.uniforms)}else U=T.uniforms;return U}function C(T,w){let U;for(let W=0,j=d.length;W<j;W++){const Q=d[W];if(Q.cacheKey===w){U=Q,++U.usedTimes;break}}return U===void 0&&(U=new Q2(t,w,T,s),d.push(U)),U}function b(T){if(--T.usedTimes===0){const w=d.indexOf(T);d[w]=d[d.length-1],d.pop(),T.destroy()}}function E(T){l.remove(T)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:b,releaseShaderCache:E,programs:d,dispose:P}}function rP(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function s0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function a0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,g,_,y,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:y,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=p),e++,u}function o(f,h,g,_,y,p){const u=a(f,h,g,_,y,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,_,y,p){const u=a(f,h,g,_,y,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||sP),i.length>1&&i.sort(h||s0),r.length>1&&r.sort(h||s0)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function aP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new a0,t.set(i,[a])):r>=s.length?(a=new a0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function oP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Xe};break;case"SpotLight":n={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function lP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cP=0;function uP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dP(t){const e=new oP,n=lP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new gt,a=new gt;function o(c){let d=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,_=0,y=0,p=0,u=0,m=0,x=0,S=0,C=0,b=0,E=0;c.sort(uP);for(let T=0,w=c.length;T<w;T++){const U=c[T],W=U.color,j=U.intensity,Q=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=W.r*j,f+=W.g*j,h+=W.b*j;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],j);E++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,I=n.get(U);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.directionalShadow[g]=I,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=U.shadow.matrix,m++}i.directional[g]=$,g++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(W).multiplyScalar(j),$.distance=Q,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[y]=$;const ee=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,ee.updateMatrices(U),U.castShadow&&b++),i.spotLightMatrix[y]=ee.matrix,U.castShadow){const I=n.get(U);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=te,S++}y++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(W).multiplyScalar(j),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=$,p++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const ee=U.shadow,I=n.get(U);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,I.shadowCameraNear=ee.camera.near,I.shadowCameraFar=ee.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=U.shadow.matrix,x++}i.point[_]=$,_++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(j),$.groundColor.copy(U.groundColor).multiplyScalar(j),i.hemi[u]=$,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==g||P.pointLength!==_||P.spotLength!==y||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==m||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==E)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,P.directionalLength=g,P.pointLength=_,P.spotLength=y,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=m,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=E,i.version=cP++)}function l(c,d){let f=0,h=0,g=0,_=0,y=0;const p=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:i}}function o0(t){const e=new dP(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fP(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new o0(t),e.set(r,[o])):s>=a.length?(o=new o0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class hP extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pP extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xP(t,e,n){let i=new mp;const r=new qe,s=new qe,a=new ct,o=new hP({depthPacking:db}),l=new pP,c={},d=n.maxTextureSize,f={[dr]:mn,[mn]:dr,[qn]:qn},h=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:mP,fragmentShader:gP}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ht(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A_;let u=this.type;this.render=function(b,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),W=t.state;W.setBlending(sr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=u!==vi&&this.type===vi,Q=u===vi&&this.type!==vi;for(let te=0,$=b.length;te<$;te++){const ee=b[te],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const ne=I.getFrameExtents();if(r.multiply(ne),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ne.x),r.x=s.x*ne.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ne.y),r.y=s.y*ne.y,I.mapSize.y=s.y)),I.map===null||j===!0||Q===!0){const R=this.type!==vi?{minFilter:Un,magFilter:Un}:{};I.map!==null&&I.map.dispose(),I.map=new es(r.x,r.y,R),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const L=I.getViewportCount();for(let R=0;R<L;R++){const J=I.getViewport(R);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),W.viewport(a),I.updateMatrices(ee,R),i=I.getFrustum(),S(E,P,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===vi&&m(I,P),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(T,w,U)};function m(b,E){const P=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new es(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(E,null,P,h,y,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(E,null,P,g,y,null)}function x(b,E,P,T){let w=null;const U=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)w=U;else if(w=P.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=w.uuid,j=E.uuid;let Q=c[W];Q===void 0&&(Q={},c[W]=Q);let te=Q[j];te===void 0&&(te=w.clone(),Q[j]=te,E.addEventListener("dispose",C)),w=te}if(w.visible=E.visible,w.wireframe=E.wireframe,T===vi?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:f[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=t.properties.get(w);W.light=P}return w}function S(b,E,P,T,w){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===vi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const j=e.update(b),Q=b.material;if(Array.isArray(Q)){const te=j.groups;for(let $=0,ee=te.length;$<ee;$++){const I=te[$],ne=Q[I.materialIndex];if(ne&&ne.visible){const L=x(b,ne,T,w);b.onBeforeShadow(t,b,E,P,j,L,I),t.renderBufferDirect(P,null,j,L,b,I),b.onAfterShadow(t,b,E,P,j,L,I)}}}else if(Q.visible){const te=x(b,Q,T,w);b.onBeforeShadow(t,b,E,P,j,te,null),t.renderBufferDirect(P,null,j,te,b,null),b.onAfterShadow(t,b,E,P,j,te,null)}}const W=b.children;for(let j=0,Q=W.length;j<Q;j++)S(W[j],E,P,T,w)}function C(b){b.target.removeEventListener("dispose",C);for(const P in c){const T=c[P],w=b.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function vP(t){function e(){let k=!1;const he=new ct;let se=null;const oe=new ct(0,0,0,0);return{setMask:function(me){se!==me&&!k&&(t.colorMask(me,me,me,me),se=me)},setLocked:function(me){k=me},setClear:function(me,Be,Ze,Et,Ot){Ot===!0&&(me*=Et,Be*=Et,Ze*=Et),he.set(me,Be,Ze,Et),oe.equals(he)===!1&&(t.clearColor(me,Be,Ze,Et),oe.copy(he))},reset:function(){k=!1,se=null,oe.set(-1,0,0,0)}}}function n(){let k=!1,he=null,se=null,oe=null;return{setTest:function(me){me?ie(t.DEPTH_TEST):X(t.DEPTH_TEST)},setMask:function(me){he!==me&&!k&&(t.depthMask(me),he=me)},setFunc:function(me){if(se!==me){switch(me){case qT:t.depthFunc(t.NEVER);break;case $T:t.depthFunc(t.ALWAYS);break;case YT:t.depthFunc(t.LESS);break;case Mc:t.depthFunc(t.LEQUAL);break;case KT:t.depthFunc(t.EQUAL);break;case ZT:t.depthFunc(t.GEQUAL);break;case JT:t.depthFunc(t.GREATER);break;case QT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=me}},setLocked:function(me){k=me},setClear:function(me){oe!==me&&(t.clearDepth(me),oe=me)},reset:function(){k=!1,he=null,se=null,oe=null}}}function i(){let k=!1,he=null,se=null,oe=null,me=null,Be=null,Ze=null,Et=null,Ot=null;return{setTest:function(et){k||(et?ie(t.STENCIL_TEST):X(t.STENCIL_TEST))},setMask:function(et){he!==et&&!k&&(t.stencilMask(et),he=et)},setFunc:function(et,di,Qn){(se!==et||oe!==di||me!==Qn)&&(t.stencilFunc(et,di,Qn),se=et,oe=di,me=Qn)},setOp:function(et,di,Qn){(Be!==et||Ze!==di||Et!==Qn)&&(t.stencilOp(et,di,Qn),Be=et,Ze=di,Et=Qn)},setLocked:function(et){k=et},setClear:function(et){Ot!==et&&(t.clearStencil(et),Ot=et)},reset:function(){k=!1,he=null,se=null,oe=null,me=null,Be=null,Ze=null,Et=null,Ot=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],g=null,_=!1,y=null,p=null,u=null,m=null,x=null,S=null,C=null,b=new Xe(0,0,0),E=0,P=!1,T=null,w=null,U=null,W=null,j=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,$=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),te=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),te=$>=2);let I=null,ne={};const L=t.getParameter(t.SCISSOR_BOX),R=t.getParameter(t.VIEWPORT),J=new ct().fromArray(L),H=new ct().fromArray(R);function F(k,he,se,oe){const me=new Uint8Array(4),Be=t.createTexture();t.bindTexture(k,Be),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<se;Ze++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(he+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return Be}const G={};G[t.TEXTURE_2D]=F(t.TEXTURE_2D,t.TEXTURE_2D,1),G[t.TEXTURE_CUBE_MAP]=F(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[t.TEXTURE_2D_ARRAY]=F(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),G[t.TEXTURE_3D]=F(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),s.setFunc(Mc),Oe(!1),Se(pg),ie(t.CULL_FACE),Ie(sr);function ie(k){c[k]!==!0&&(t.enable(k),c[k]=!0)}function X(k){c[k]!==!1&&(t.disable(k),c[k]=!1)}function le(k,he){return d[k]!==he?(t.bindFramebuffer(k,he),d[k]=he,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(k,he){let se=h,oe=!1;if(k){se=f.get(he),se===void 0&&(se=[],f.set(he,se));const me=k.textures;if(se.length!==me.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,Ze=me.length;Be<Ze;Be++)se[Be]=t.COLOR_ATTACHMENT0+Be;se.length=me.length,oe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,oe=!0);oe&&t.drawBuffers(se)}function Te(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const Le={[Pr]:t.FUNC_ADD,[PT]:t.FUNC_SUBTRACT,[NT]:t.FUNC_REVERSE_SUBTRACT};Le[LT]=t.MIN,Le[DT]=t.MAX;const D={[UT]:t.ZERO,[IT]:t.ONE,[OT]:t.SRC_COLOR,[xf]:t.SRC_ALPHA,[VT]:t.SRC_ALPHA_SATURATE,[zT]:t.DST_COLOR,[kT]:t.DST_ALPHA,[FT]:t.ONE_MINUS_SRC_COLOR,[vf]:t.ONE_MINUS_SRC_ALPHA,[HT]:t.ONE_MINUS_DST_COLOR,[BT]:t.ONE_MINUS_DST_ALPHA,[jT]:t.CONSTANT_COLOR,[GT]:t.ONE_MINUS_CONSTANT_COLOR,[WT]:t.CONSTANT_ALPHA,[XT]:t.ONE_MINUS_CONSTANT_ALPHA};function Ie(k,he,se,oe,me,Be,Ze,Et,Ot,et){if(k===sr){_===!0&&(X(t.BLEND),_=!1);return}if(_===!1&&(ie(t.BLEND),_=!0),k!==RT){if(k!==y||et!==P){if((p!==Pr||x!==Pr)&&(t.blendEquation(t.FUNC_ADD),p=Pr,x=Pr),et)switch(k){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wc:t.blendFunc(t.ONE,t.ONE);break;case mg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}u=null,m=null,S=null,C=null,b.set(0,0,0),E=0,y=k,P=et}return}me=me||he,Be=Be||se,Ze=Ze||oe,(he!==p||me!==x)&&(t.blendEquationSeparate(Le[he],Le[me]),p=he,x=me),(se!==u||oe!==m||Be!==S||Ze!==C)&&(t.blendFuncSeparate(D[se],D[oe],D[Be],D[Ze]),u=se,m=oe,S=Be,C=Ze),(Et.equals(b)===!1||Ot!==E)&&(t.blendColor(Et.r,Et.g,Et.b,Ot),b.copy(Et),E=Ot),y=k,P=!1}function ve(k,he){k.side===qn?X(t.CULL_FACE):ie(t.CULL_FACE);let se=k.side===mn;he&&(se=!se),Oe(se),k.blending===Gs&&k.transparent===!1?Ie(sr):Ie(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const oe=k.stencilWrite;a.setTest(oe),oe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):X(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(k){T!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),T=k)}function Se(k){k!==AT?(ie(t.CULL_FACE),k!==w&&(k===pg?t.cullFace(t.BACK):k===CT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):X(t.CULL_FACE),w=k}function Fe(k){k!==U&&(te&&t.lineWidth(k),U=k)}function ue(k,he,se){k?(ie(t.POLYGON_OFFSET_FILL),(W!==he||j!==se)&&(t.polygonOffset(he,se),W=he,j=se)):X(t.POLYGON_OFFSET_FILL)}function we(k){k?ie(t.SCISSOR_TEST):X(t.SCISSOR_TEST)}function N(k){k===void 0&&(k=t.TEXTURE0+Q-1),I!==k&&(t.activeTexture(k),I=k)}function M(k,he,se){se===void 0&&(I===null?se=t.TEXTURE0+Q-1:se=I);let oe=ne[se];oe===void 0&&(oe={type:void 0,texture:void 0},ne[se]=oe),(oe.type!==k||oe.texture!==he)&&(I!==se&&(t.activeTexture(se),I=se),t.bindTexture(k,he||G[k]),oe.type=k,oe.texture=he)}function Y(){const k=ne[I];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(k){J.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),J.copy(k))}function Ce(k){H.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),H.copy(k))}function je(k,he){let se=l.get(he);se===void 0&&(se=new WeakMap,l.set(he,se));let oe=se.get(k);oe===void 0&&(oe=t.getUniformBlockIndex(he,k.name),se.set(k,oe))}function $e(k,he){const oe=l.get(he).get(k);o.get(he)!==oe&&(t.uniformBlockBinding(he,oe,k.__bindingPointIndex),o.set(he,oe))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,ne={},d={},f=new WeakMap,h=[],g=null,_=!1,y=null,p=null,u=null,m=null,x=null,S=null,C=null,b=new Xe(0,0,0),E=0,P=!1,T=null,w=null,U=null,W=null,j=null,J.set(0,0,t.canvas.width,t.canvas.height),H.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ie,disable:X,bindFramebuffer:le,drawBuffers:ge,useProgram:Te,setBlending:Ie,setMaterial:ve,setFlipSided:Oe,setCullFace:Se,setLineWidth:Fe,setPolygonOffset:ue,setScissorTest:we,activeTexture:N,bindTexture:M,unbindTexture:Y,compressedTexImage2D:re,compressedTexImage3D:ae,texImage2D:Me,texImage3D:Ke,updateUBOMapping:je,uniformBlockBinding:$e,texStorage2D:Ve,texStorage3D:fe,texSubImage2D:ce,texSubImage3D:Ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:ke,viewport:Ce,reset:ft}}function l0(t,e,n,i){const r=_P(i);switch(n){case U_:return t*e;case O_:return t*e;case F_:return t*e*2;case k_:return t*e/r.components*r.byteLength;case dp:return t*e/r.components*r.byteLength;case B_:return t*e*2/r.components*r.byteLength;case fp:return t*e*2/r.components*r.byteLength;case I_:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case hp:return t*e*4/r.components*r.byteLength;case Vl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:case bf:return Math.max(t,16)*Math.max(e,8)/4;case Mf:case Tf:return Math.max(t,8)*Math.max(e,8)/2;case Af:case Cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xl:case Gf:case Wf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case z_:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _P(t){switch(t){case Ni:case N_:return{byteLength:1,components:1};case vo:case L_:case No:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case Qr:case lp:case Mi:return{byteLength:4,components:1};case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function yP(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,d=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,M){return g?new OffscreenCanvas(N,M):_o("canvas")}function y(N,M,Y){let re=1;const ae=we(N);if((ae.width>Y||ae.height>Y)&&(re=Y/Math.max(ae.width,ae.height)),re<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(re*ae.width),Ue=Math.floor(re*ae.height);f===void 0&&(f=_(ce,Ue));const ye=M?_(ce,Ue):f;return ye.width=ce,ye.height=Ue,ye.getContext("2d").drawImage(N,0,0,ce,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ce+"x"+Ue+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),N;return N}function p(N){return N.generateMipmaps&&N.minFilter!==Un&&N.minFilter!==$n}function u(N){t.generateMipmap(N)}function m(N,M,Y,re,ae=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=M;if(M===t.RED&&(Y===t.FLOAT&&(ce=t.R32F),Y===t.HALF_FLOAT&&(ce=t.R16F),Y===t.UNSIGNED_BYTE&&(ce=t.R8)),M===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ce=t.R8UI),Y===t.UNSIGNED_SHORT&&(ce=t.R16UI),Y===t.UNSIGNED_INT&&(ce=t.R32UI),Y===t.BYTE&&(ce=t.R8I),Y===t.SHORT&&(ce=t.R16I),Y===t.INT&&(ce=t.R32I)),M===t.RG&&(Y===t.FLOAT&&(ce=t.RG32F),Y===t.HALF_FLOAT&&(ce=t.RG16F),Y===t.UNSIGNED_BYTE&&(ce=t.RG8)),M===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ce=t.RG8UI),Y===t.UNSIGNED_SHORT&&(ce=t.RG16UI),Y===t.UNSIGNED_INT&&(ce=t.RG32UI),Y===t.BYTE&&(ce=t.RG8I),Y===t.SHORT&&(ce=t.RG16I),Y===t.INT&&(ce=t.RG32I)),M===t.RGB&&Y===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),M===t.RGBA){const Ue=ae?Ec:rt.getTransfer(re);Y===t.FLOAT&&(ce=t.RGBA32F),Y===t.HALF_FLOAT&&(ce=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(ce=Ue===lt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(N,M){let Y;return N?M===null||M===Qr||M===na?Y=t.DEPTH24_STENCIL8:M===Mi?Y=t.DEPTH32F_STENCIL8:M===vo&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qr||M===na?Y=t.DEPTH_COMPONENT24:M===Mi?Y=t.DEPTH_COMPONENT32F:M===vo&&(Y=t.DEPTH_COMPONENT16),Y}function S(N,M){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Un&&N.minFilter!==$n?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function C(N){const M=N.target;M.removeEventListener("dispose",C),E(M),M.isVideoTexture&&d.delete(M)}function b(N){const M=N.target;M.removeEventListener("dispose",b),T(M)}function E(N){const M=i.get(N);if(M.__webglInit===void 0)return;const Y=N.source,re=h.get(Y);if(re){const ae=re[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&P(N),Object.keys(re).length===0&&h.delete(Y)}i.remove(N)}function P(N){const M=i.get(N);t.deleteTexture(M.__webglTexture);const Y=N.source,re=h.get(Y);delete re[M.__cacheKey],a.memory.textures--}function T(N){const M=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let ae=0;ae<M.__webglFramebuffer[re].length;ae++)t.deleteFramebuffer(M.__webglFramebuffer[re][ae]);else t.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)t.deleteFramebuffer(M.__webglFramebuffer[re]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=N.textures;for(let re=0,ae=Y.length;re<ae;re++){const ce=i.get(Y[re]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(Y[re])}i.remove(N)}let w=0;function U(){w=0}function W(){const N=w;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),w+=1,N}function j(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function Q(N,M){const Y=i.get(N);if(N.isVideoTexture&&Fe(N),N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){const re=N.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(Y,N,M);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+M)}function te(N,M){const Y=i.get(N);if(N.version>0&&Y.__version!==N.version){H(Y,N,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+M)}function $(N,M){const Y=i.get(N);if(N.version>0&&Y.__version!==N.version){H(Y,N,M);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+M)}function ee(N,M){const Y=i.get(N);if(N.version>0&&Y.__version!==N.version){F(Y,N,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+M)}const I={[Sf]:t.REPEAT,[Or]:t.CLAMP_TO_EDGE,[wf]:t.MIRRORED_REPEAT},ne={[Un]:t.NEAREST,[cb]:t.NEAREST_MIPMAP_NEAREST,[nl]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[Hu]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},L={[hb]:t.NEVER,[_b]:t.ALWAYS,[pb]:t.LESS,[V_]:t.LEQUAL,[mb]:t.EQUAL,[vb]:t.GEQUAL,[gb]:t.GREATER,[xb]:t.NOTEQUAL};function R(N,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$n||M.magFilter===Hu||M.magFilter===nl||M.magFilter===Fr||M.minFilter===$n||M.minFilter===Hu||M.minFilter===nl||M.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,I[M.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,ne[M.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,ne[M.minFilter]),M.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==nl&&M.minFilter!==Fr||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(N,M){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",C));const re=M.source;let ae=h.get(re);ae===void 0&&(ae={},h.set(re,ae));const ce=j(M);if(ce!==N.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[ce].usedTimes++;const Ue=ae[N.__cacheKey];Ue!==void 0&&(ae[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&P(M)),N.__cacheKey=ce,N.__webglTexture=ae[ce].texture}return Y}function H(N,M,Y){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const ae=J(N,M),ce=M.source;n.bindTexture(re,N.__webglTexture,t.TEXTURE0+Y);const Ue=i.get(ce);if(ce.version!==Ue.__version||ae===!0){n.activeTexture(t.TEXTURE0+Y);const ye=rt.getPrimaries(rt.workingColorSpace),be=M.colorSpace===Xi?null:rt.getPrimaries(M.colorSpace),Ve=M.colorSpace===Xi||ye===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let fe=y(M.image,!1,r.maxTextureSize);fe=ue(M,fe);const Me=s.convert(M.format,M.colorSpace),Ke=s.convert(M.type);let ke=m(M.internalFormat,Me,Ke,M.colorSpace,M.isVideoTexture);R(re,M);let Ce;const je=M.mipmaps,$e=M.isVideoTexture!==!0,ft=Ue.__version===void 0||ae===!0,k=ce.dataReady,he=S(M,fe);if(M.isDepthTexture)ke=x(M.format===ia,M.type),ft&&($e?n.texStorage2D(t.TEXTURE_2D,1,ke,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,ke,fe.width,fe.height,0,Me,Ke,null));else if(M.isDataTexture)if(je.length>0){$e&&ft&&n.texStorage2D(t.TEXTURE_2D,he,ke,je[0].width,je[0].height);for(let se=0,oe=je.length;se<oe;se++)Ce=je[se],$e?k&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Me,Ke,Ce.data):n.texImage2D(t.TEXTURE_2D,se,ke,Ce.width,Ce.height,0,Me,Ke,Ce.data);M.generateMipmaps=!1}else $e?(ft&&n.texStorage2D(t.TEXTURE_2D,he,ke,fe.width,fe.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Me,Ke,fe.data)):n.texImage2D(t.TEXTURE_2D,0,ke,fe.width,fe.height,0,Me,Ke,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ke,je[0].width,je[0].height,fe.depth);for(let se=0,oe=je.length;se<oe;se++)if(Ce=je[se],M.format!==Yn)if(Me!==null)if($e){if(k)if(M.layerUpdates.size>0){const me=l0(Ce.width,Ce.height,M.format,M.type);for(const Be of M.layerUpdates){const Ze=Ce.data.subarray(Be*me/Ce.data.BYTES_PER_ELEMENT,(Be+1)*me/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Be,Ce.width,Ce.height,1,Me,Ze,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Ce.width,Ce.height,fe.depth,Me,Ce.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,ke,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Ce.width,Ce.height,fe.depth,Me,Ke,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,ke,Ce.width,Ce.height,fe.depth,0,Me,Ke,Ce.data)}else{$e&&ft&&n.texStorage2D(t.TEXTURE_2D,he,ke,je[0].width,je[0].height);for(let se=0,oe=je.length;se<oe;se++)Ce=je[se],M.format!==Yn?Me!==null?$e?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Me,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,se,ke,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?k&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Me,Ke,Ce.data):n.texImage2D(t.TEXTURE_2D,se,ke,Ce.width,Ce.height,0,Me,Ke,Ce.data)}else if(M.isDataArrayTexture)if($e){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ke,fe.width,fe.height,fe.depth),k)if(M.layerUpdates.size>0){const se=l0(fe.width,fe.height,M.format,M.type);for(const oe of M.layerUpdates){const me=fe.data.subarray(oe*se/fe.data.BYTES_PER_ELEMENT,(oe+1)*se/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,fe.width,fe.height,1,Me,Ke,me)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Me,Ke,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,fe.width,fe.height,fe.depth,0,Me,Ke,fe.data);else if(M.isData3DTexture)$e?(ft&&n.texStorage3D(t.TEXTURE_3D,he,ke,fe.width,fe.height,fe.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Me,Ke,fe.data)):n.texImage3D(t.TEXTURE_3D,0,ke,fe.width,fe.height,fe.depth,0,Me,Ke,fe.data);else if(M.isFramebufferTexture){if(ft)if($e)n.texStorage2D(t.TEXTURE_2D,he,ke,fe.width,fe.height);else{let se=fe.width,oe=fe.height;for(let me=0;me<he;me++)n.texImage2D(t.TEXTURE_2D,me,ke,se,oe,0,Me,Ke,null),se>>=1,oe>>=1}}else if(je.length>0){if($e&&ft){const se=we(je[0]);n.texStorage2D(t.TEXTURE_2D,he,ke,se.width,se.height)}for(let se=0,oe=je.length;se<oe;se++)Ce=je[se],$e?k&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Me,Ke,Ce):n.texImage2D(t.TEXTURE_2D,se,ke,Me,Ke,Ce);M.generateMipmaps=!1}else if($e){if(ft){const se=we(fe);n.texStorage2D(t.TEXTURE_2D,he,ke,se.width,se.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ke,fe)}else n.texImage2D(t.TEXTURE_2D,0,ke,Me,Ke,fe);p(M)&&u(re),Ue.__version=ce.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function F(N,M,Y){if(M.image.length!==6)return;const re=J(N,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+Y);const ce=i.get(ae);if(ae.version!==ce.__version||re===!0){n.activeTexture(t.TEXTURE0+Y);const Ue=rt.getPrimaries(rt.workingColorSpace),ye=M.colorSpace===Xi?null:rt.getPrimaries(M.colorSpace),be=M.colorSpace===Xi||Ue===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let oe=0;oe<6;oe++)!Ve&&!fe?Me[oe]=y(M.image[oe],!0,r.maxCubemapSize):Me[oe]=fe?M.image[oe].image:M.image[oe],Me[oe]=ue(M,Me[oe]);const Ke=Me[0],ke=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),je=m(M.internalFormat,ke,Ce,M.colorSpace),$e=M.isVideoTexture!==!0,ft=ce.__version===void 0||re===!0,k=ae.dataReady;let he=S(M,Ke);R(t.TEXTURE_CUBE_MAP,M);let se;if(Ve){$e&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,je,Ke.width,Ke.height);for(let oe=0;oe<6;oe++){se=Me[oe].mipmaps;for(let me=0;me<se.length;me++){const Be=se[me];M.format!==Yn?ke!==null?$e?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,0,0,Be.width,Be.height,ke,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,0,0,Be.width,Be.height,ke,Ce,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,je,Be.width,Be.height,0,ke,Ce,Be.data)}}}else{if(se=M.mipmaps,$e&&ft){se.length>0&&he++;const oe=we(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(fe){$e?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Me[oe].width,Me[oe].height,ke,Ce,Me[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,Me[oe].width,Me[oe].height,0,ke,Ce,Me[oe].data);for(let me=0;me<se.length;me++){const Ze=se[me].image[oe].image;$e?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,0,0,Ze.width,Ze.height,ke,Ce,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,je,Ze.width,Ze.height,0,ke,Ce,Ze.data)}}else{$e?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ke,Ce,Me[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,ke,Ce,Me[oe]);for(let me=0;me<se.length;me++){const Be=se[me];$e?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,0,0,ke,Ce,Be.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,je,ke,Ce,Be.image[oe])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),ce.__version=ae.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function G(N,M,Y,re,ae,ce){const Ue=s.convert(Y.format,Y.colorSpace),ye=s.convert(Y.type),be=m(Y.internalFormat,Ue,ye,Y.colorSpace);if(!i.get(M).__hasExternalTextures){const fe=Math.max(1,M.width>>ce),Me=Math.max(1,M.height>>ce);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ce,be,fe,Me,M.depth,0,Ue,ye,null):n.texImage2D(ae,ce,be,fe,Me,0,Ue,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Se(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ae,i.get(Y).__webglTexture,0,Oe(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ae,i.get(Y).__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(N,M,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,N),M.depthBuffer){const re=M.depthTexture,ae=re&&re.isDepthTexture?re.type:null,ce=x(M.stencilBuffer,ae),Ue=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=Oe(M);Se(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,ce,M.width,M.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ce,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ue,t.RENDERBUFFER,N)}else{const re=M.textures;for(let ae=0;ae<re.length;ae++){const ce=re[ae],Ue=s.convert(ce.format,ce.colorSpace),ye=s.convert(ce.type),be=m(ce.internalFormat,Ue,ye,ce.colorSpace),Ve=Oe(M);Y&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,be,M.width,M.height):Se(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,be,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,be,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function X(N,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,ae=Oe(M);if(M.depthTexture.format===Ws)Se(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===ia)Se(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function le(N){const M=i.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const re=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",ae)};re.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=re}if(N.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");X(M.__webglFramebuffer,N)}else if(Y){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=t.createRenderbuffer(),ie(M.__webglDepthbuffer[re],N,!1);else{const ae=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ie(M.__webglDepthbuffer,N,!1);else{const re=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(N,M,Y){const re=i.get(N);M!==void 0&&G(re.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&le(N)}function Te(N){const M=N.texture,Y=i.get(N),re=i.get(M);N.addEventListener("dispose",b);const ae=N.textures,ce=N.isWebGLCubeRenderTarget===!0,Ue=ae.length>1;if(Ue||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,a.memory.textures++),ce){Y.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ye]=[];for(let be=0;be<M.mipmaps.length;be++)Y.__webglFramebuffer[ye][be]=t.createFramebuffer()}else Y.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)Y.__webglFramebuffer[ye]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Ue)for(let ye=0,be=ae.length;ye<be;ye++){const Ve=i.get(ae[ye]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&Se(N)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ye=0;ye<ae.length;ye++){const be=ae[ye];Y.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[ye]);const Ve=s.convert(be.format,be.colorSpace),fe=s.convert(be.type),Me=m(be.internalFormat,Ve,fe,be.colorSpace,N.isXRRenderTarget===!0),Ke=Oe(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,Me,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Y.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(Y.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),R(t.TEXTURE_CUBE_MAP,M);for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)G(Y.__webglFramebuffer[ye][be],N,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else G(Y.__webglFramebuffer[ye],N,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let ye=0,be=ae.length;ye<be;ye++){const Ve=ae[ye],fe=i.get(Ve);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),R(t.TEXTURE_2D,Ve),G(Y.__webglFramebuffer,N,Ve,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),p(Ve)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,re.__webglTexture),R(ye,M),M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)G(Y.__webglFramebuffer[be],N,M,t.COLOR_ATTACHMENT0,ye,be);else G(Y.__webglFramebuffer,N,M,t.COLOR_ATTACHMENT0,ye,0);p(M)&&u(ye),n.unbindTexture()}N.depthBuffer&&le(N)}function Le(N){const M=N.textures;for(let Y=0,re=M.length;Y<re;Y++){const ae=M[Y];if(p(ae)){const ce=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ue=i.get(ae).__webglTexture;n.bindTexture(ce,Ue),u(ce),n.unbindTexture()}}}const D=[],Ie=[];function ve(N){if(N.samples>0){if(Se(N)===!1){const M=N.textures,Y=N.width,re=N.height;let ae=t.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ue=i.get(N),ye=M.length>1;if(ye)for(let be=0;be<M.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let be=0;be<M.length;be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),ye){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[be]);const Ve=i.get(M[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,Y,re,0,0,Y,re,ae,t.NEAREST),l===!0&&(D.length=0,Ie.length=0,D.push(t.COLOR_ATTACHMENT0+be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(D.push(ce),Ie.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<M.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[be]);const Ve=i.get(M[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const M=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Oe(N){return Math.min(r.maxSamples,N.samples)}function Se(N){const M=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fe(N){const M=a.render.frame;d.get(N)!==M&&(d.set(N,M),N.update())}function ue(N,M){const Y=N.colorSpace,re=N.format,ae=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==vr&&Y!==Xi&&(rt.getTransfer(Y)===lt?(re!==Yn||ae!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function we(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=te,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=ge,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Se}function SP(t,e){function n(i,r=Xi){let s;const a=rt.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===cp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===up)return t.UNSIGNED_SHORT_5_5_5_1;if(i===D_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===N_)return t.BYTE;if(i===L_)return t.SHORT;if(i===vo)return t.UNSIGNED_SHORT;if(i===lp)return t.INT;if(i===Qr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===No)return t.HALF_FLOAT;if(i===U_)return t.ALPHA;if(i===I_)return t.RGB;if(i===Yn)return t.RGBA;if(i===O_)return t.LUMINANCE;if(i===F_)return t.LUMINANCE_ALPHA;if(i===Ws)return t.DEPTH_COMPONENT;if(i===ia)return t.DEPTH_STENCIL;if(i===k_)return t.RED;if(i===dp)return t.RED_INTEGER;if(i===B_)return t.RG;if(i===fp)return t.RG_INTEGER;if(i===hp)return t.RGBA_INTEGER;if(i===Vl||i===jl||i===Gl||i===Wl)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mf||i===Ef||i===Tf||i===bf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Af||i===Cf||i===Rf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Af||i===Cf)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pf||i===Nf||i===Lf||i===Df||i===Uf||i===If||i===Of||i===Ff||i===kf||i===Bf||i===zf||i===Hf||i===Vf||i===jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Df)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===If)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Of)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ff)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===Gf||i===Wf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xl)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===z_||i===Xf||i===qf||i===$f)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$f)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class wP extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kr extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MP={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MP)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const EP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hr({vertexShader:EP,fragmentShader:TP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ht(new Qc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AP extends ha{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,_=null;const y=new bP,p=n.getContextAttributes();let u=null,m=null;const x=[],S=[],C=new qe;let b=null;const E=new $t;E.layers.enable(1),E.viewport=new ct;const P=new $t;P.layers.enable(2),P.viewport=new ct;const T=[E,P],w=new wP;w.layers.enable(1),w.layers.enable(2);let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let G=x[F];return G===void 0&&(G=new pd,x[F]=G),G.getTargetRaySpace()},this.getControllerGrip=function(F){let G=x[F];return G===void 0&&(G=new pd,x[F]=G),G.getGripSpace()},this.getHand=function(F){let G=x[F];return G===void 0&&(G=new pd,x[F]=G),G.getHandSpace()};function j(F){const G=S.indexOf(F.inputSource);if(G===-1)return;const ie=x[G];ie!==void 0&&(ie.update(F.inputSource,F.frame,c||a),ie.dispatchEvent({type:F.type,data:F.inputSource}))}function Q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",te);for(let F=0;F<x.length;F++){const G=S[F];G!==null&&(S[F]=null,x[F].disconnect(G))}U=null,W=null,y.reset(),e.setRenderTarget(u),g=null,h=null,f=null,r=null,m=null,H.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const G={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,G),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new es(g.framebufferWidth,g.framebufferHeight,{format:Yn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let G=null,ie=null,X=null;p.depth&&(X=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,G=p.stencil?ia:Ws,ie=p.stencil?na:Qr);const le={colorFormat:n.RGBA8,depthFormat:X,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new es(h.textureWidth,h.textureHeight,{format:Yn,type:Ni,depthTexture:new ny(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function te(F){for(let G=0;G<F.removed.length;G++){const ie=F.removed[G],X=S.indexOf(ie);X>=0&&(S[X]=null,x[X].disconnect(ie))}for(let G=0;G<F.added.length;G++){const ie=F.added[G];let X=S.indexOf(ie);if(X===-1){for(let ge=0;ge<x.length;ge++)if(ge>=S.length){S.push(ie),X=ge;break}else if(S[ge]===null){S[ge]=ie,X=ge;break}if(X===-1)break}const le=x[X];le&&le.connect(ie)}}const $=new z,ee=new z;function I(F,G,ie){$.setFromMatrixPosition(G.matrixWorld),ee.setFromMatrixPosition(ie.matrixWorld);const X=$.distanceTo(ee),le=G.projectionMatrix.elements,ge=ie.projectionMatrix.elements,Te=le[14]/(le[10]-1),Le=le[14]/(le[10]+1),D=(le[9]+1)/le[5],Ie=(le[9]-1)/le[5],ve=(le[8]-1)/le[0],Oe=(ge[8]+1)/ge[0],Se=Te*ve,Fe=Te*Oe,ue=X/(-ve+Oe),we=ue*-ve;if(G.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(we),F.translateZ(ue),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),le[10]===-1)F.projectionMatrix.copy(G.projectionMatrix),F.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const N=Te+ue,M=Le+ue,Y=Se-we,re=Fe+(X-we),ae=D*Le/M*N,ce=Ie*Le/M*N;F.projectionMatrix.makePerspective(Y,re,ae,ce,N,M),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ne(F,G){G===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(G.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let G=F.near,ie=F.far;y.texture!==null&&(y.depthNear>0&&(G=y.depthNear),y.depthFar>0&&(ie=y.depthFar)),w.near=P.near=E.near=G,w.far=P.far=E.far=ie,(U!==w.near||W!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,W=w.far);const X=F.parent,le=w.cameras;ne(w,X);for(let ge=0;ge<le.length;ge++)ne(le[ge],X);le.length===2?I(w,E,P):w.projectionMatrix.copy(E.projectionMatrix),L(F,w,X)};function L(F,G,ie){ie===null?F.matrix.copy(G.matrixWorld):(F.matrix.copy(ie.matrixWorld),F.matrix.invert(),F.matrix.multiply(G.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(G.projectionMatrix),F.projectionMatrixInverse.copy(G.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Yf*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let R=null;function J(F,G){if(d=G.getViewerPose(c||a),_=G,d!==null){const ie=d.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let X=!1;ie.length!==w.cameras.length&&(w.cameras.length=0,X=!0);for(let ge=0;ge<ie.length;ge++){const Te=ie[ge];let Le=null;if(g!==null)Le=g.getViewport(Te);else{const Ie=f.getViewSubImage(h,Te);Le=Ie.viewport,ge===0&&(e.setRenderTargetTextures(m,Ie.colorTexture,h.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(m))}let D=T[ge];D===void 0&&(D=new $t,D.layers.enable(ge),D.viewport=new ct,T[ge]=D),D.matrix.fromArray(Te.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Te.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Le.x,Le.y,Le.width,Le.height),ge===0&&(w.matrix.copy(D.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),X===!0&&w.cameras.push(D)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")){const ge=f.getDepthInformation(ie[0]);ge&&ge.isValid&&ge.texture&&y.init(e,ge,r.renderState)}}for(let ie=0;ie<x.length;ie++){const X=S[ie],le=x[ie];X!==null&&le!==void 0&&le.update(X,G,c||a)}R&&R(F,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),_=null}const H=new ey;H.setAnimationLoop(J),this.setAnimationLoop=function(F){R=F},this.dispose=function(){}}}const Tr=new ci,CP=new gt;function RP(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Z_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,m,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===mn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===mn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u),x=m.envMap,S=m.envMapRotation;x&&(p.envMap.value=x,Tr.copy(S),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(CP.makeRotationFromEuler(Tr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=x*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PP(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(_(m),S=d(m),r[m.id]=S,m.addEventListener("dispose",p));const C=x.program;i.updateUBOMapping(m,C);const b=e.render.frame;s[m.id]!==b&&(h(m),s[m.id]=b)}function d(m){const x=f();m.__bindingPointIndex=x;const S=t.createBuffer(),C=m.__size,b=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const x=r[m.id],S=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,E=S.length;b<E;b++){const P=Array.isArray(S[b])?S[b]:[S[b]];for(let T=0,w=P.length;T<w;T++){const U=P[T];if(g(U,b,T,C)===!0){const W=U.__offset,j=Array.isArray(U.value)?U.value:[U.value];let Q=0;for(let te=0;te<j.length;te++){const $=j[te],ee=y($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,W+Q,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,Q),Q+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,x,S,C){const b=m.value,E=x+"_"+S;if(C[E]===void 0)return typeof b=="number"||typeof b=="boolean"?C[E]=b:C[E]=b.clone(),!0;{const P=C[E];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[E]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function _(m){const x=m.uniforms;let S=0;const C=16;for(let E=0,P=x.length;E<P;E++){const T=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,U=T.length;w<U;w++){const W=T[w],j=Array.isArray(W.value)?W.value:[W.value];for(let Q=0,te=j.length;Q<te;Q++){const $=j[Q],ee=y($),I=S%C,ne=I%ee.boundary,L=I+ne;S+=ne,L!==0&&C-L<ee.storage&&(S+=C-L),W.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=ee.storage}}}const b=S%C;return b>0&&(S+=C-b),m.__size=S,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function p(m){const x=m.target;x.removeEventListener("dispose",p);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class tu{constructor(e={}){const{canvas:n=Sb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=ar,this.toneMappingExposure=1;const x=this;let S=!1,C=0,b=0,E=null,P=-1,T=null;const w=new ct,U=new ct;let W=null;const j=new Xe(0);let Q=0,te=n.width,$=n.height,ee=1,I=null,ne=null;const L=new ct(0,0,te,$),R=new ct(0,0,te,$);let J=!1;const H=new mp;let F=!1,G=!1;const ie=new gt,X=new z,le=new ct,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function Le(){return E===null?ee:1}let D=i;function Ie(A,B){return n.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${op}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",me,!1),D===null){const B="webgl2";if(D=Ie(B,A),D===null)throw Ie(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ve,Oe,Se,Fe,ue,we,N,M,Y,re,ae,ce,Ue,ye,be,Ve,fe,Me,Ke,ke,Ce,je,$e,ft;function k(){ve=new FR(D),ve.init(),je=new SP(D,ve),Oe=new NR(D,ve,e,je),Se=new vP(D),Fe=new zR(D),ue=new rP,we=new yP(D,ve,Se,ue,Oe,je,Fe),N=new DR(x),M=new OR(x),Y=new qb(D),$e=new RR(D,Y),re=new kR(D,Y,Fe,$e),ae=new VR(D,re,Y,Fe),Ke=new HR(D,Oe,we),Ve=new LR(ue),ce=new iP(x,N,M,ve,Oe,$e,Ve),Ue=new RP(x,ue),ye=new aP,be=new fP(ve),Me=new CR(x,N,M,Se,ae,h,l),fe=new xP(x,ae,Oe),ft=new PP(D,Fe,Oe,Se),ke=new PR(D,ve,Fe),Ce=new BR(D,ve,Fe),Fe.programs=ce.programs,x.capabilities=Oe,x.extensions=ve,x.properties=ue,x.renderLists=ye,x.shadowMap=fe,x.state=Se,x.info=Fe}k();const he=new AP(x,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(te,$,!1))},this.getSize=function(A){return A.set(te,$)},this.setSize=function(A,B,K=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,$=B,n.width=Math.floor(A*ee),n.height=Math.floor(B*ee),K===!0&&(n.style.width=A+"px",n.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(te*ee,$*ee).floor()},this.setDrawingBufferSize=function(A,B,K){te=A,$=B,ee=K,n.width=Math.floor(A*K),n.height=Math.floor(B*K),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,B,K,Z){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,B,K,Z),Se.viewport(w.copy(L).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(R)},this.setScissor=function(A,B,K,Z){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,B,K,Z),Se.scissor(U.copy(R).multiplyScalar(ee).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(A){Se.setScissorTest(J=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(A=!0,B=!0,K=!0){let Z=0;if(A){let V=!1;if(E!==null){const pe=E.texture.format;V=pe===hp||pe===fp||pe===dp}if(V){const pe=E.texture.type,Ee=pe===Ni||pe===Qr||pe===vo||pe===na||pe===cp||pe===up,Re=Me.getClearColor(),Pe=Me.getClearAlpha(),ze=Re.r,He=Re.g,Ne=Re.b;Ee?(g[0]=ze,g[1]=He,g[2]=Ne,g[3]=Pe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=ze,_[1]=He,_[2]=Ne,_[3]=Pe,D.clearBufferiv(D.COLOR,0,_))}else Z|=D.COLOR_BUFFER_BIT}B&&(Z|=D.DEPTH_BUFFER_BIT),K&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),be.dispose(),ue.dispose(),N.dispose(),M.dispose(),ae.dispose(),$e.dispose(),ft.dispose(),ce.dispose(),he.dispose(),he.removeEventListener("sessionstart",Qn),he.removeEventListener("sessionend",Mp),_r.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Fe.autoReset,B=fe.enabled,K=fe.autoUpdate,Z=fe.needsUpdate,V=fe.type;k(),Fe.autoReset=A,fe.enabled=B,fe.autoUpdate=K,fe.needsUpdate=Z,fe.type=V}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const B=A.target;B.removeEventListener("dispose",Be),Ze(B)}function Ze(A){Et(A),ue.remove(A)}function Et(A){const B=ue.get(A).programs;B!==void 0&&(B.forEach(function(K){ce.releaseProgram(K)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,K,Z,V,pe){B===null&&(B=ge);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,Re=dy(A,B,K,Z,V);Se.setMaterial(Z,Ee);let Pe=K.index,ze=1;if(Z.wireframe===!0){if(Pe=re.getWireframeAttribute(K),Pe===void 0)return;ze=2}const He=K.drawRange,Ne=K.attributes.position;let tt=He.start*ze,vt=(He.start+He.count)*ze;pe!==null&&(tt=Math.max(tt,pe.start*ze),vt=Math.min(vt,(pe.start+pe.count)*ze)),Pe!==null?(tt=Math.max(tt,0),vt=Math.min(vt,Pe.count)):Ne!=null&&(tt=Math.max(tt,0),vt=Math.min(vt,Ne.count));const _t=vt-tt;if(_t<0||_t===1/0)return;$e.setup(V,Z,Re,K,Pe);let gn,nt=ke;if(Pe!==null&&(gn=Y.get(Pe),nt=Ce,nt.setIndex(gn)),V.isMesh)Z.wireframe===!0?(Se.setLineWidth(Z.wireframeLinewidth*Le()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(V.isLine){let De=Z.linewidth;De===void 0&&(De=1),Se.setLineWidth(De*Le()),V.isLineSegments?nt.setMode(D.LINES):V.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else V.isPoints?nt.setMode(D.POINTS):V.isSprite&&nt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)nt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))nt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const De=V._multiDrawStarts,Ft=V._multiDrawCounts,it=V._multiDrawCount,Bn=Pe?Y.get(Pe).bytesPerElement:1,is=ue.get(Z).currentProgram.getUniforms();for(let xn=0;xn<it;xn++)is.setValue(D,"_gl_DrawID",xn),nt.render(De[xn]/Bn,Ft[xn])}else if(V.isInstancedMesh)nt.renderInstances(tt,_t,V.count);else if(K.isInstancedBufferGeometry){const De=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ft=Math.min(K.instanceCount,De);nt.renderInstances(tt,_t,Ft)}else nt.render(tt,_t)};function Ot(A,B,K){A.transparent===!0&&A.side===qn&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,Oo(A,B,K),A.side=dr,A.needsUpdate=!0,Oo(A,B,K),A.side=qn):Oo(A,B,K)}this.compile=function(A,B,K=null){K===null&&(K=A),p=be.get(K),p.init(B),m.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Z=new Set;return A.traverse(function(V){const pe=V.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const Re=pe[Ee];Ot(Re,K,V),Z.add(Re)}else Ot(pe,K,V),Z.add(pe)}),m.pop(),p=null,Z},this.compileAsync=function(A,B,K=null){const Z=this.compile(A,B,K);return new Promise(V=>{function pe(){if(Z.forEach(function(Ee){ue.get(Ee).currentProgram.isReady()&&Z.delete(Ee)}),Z.size===0){V(A);return}setTimeout(pe,10)}ve.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let et=null;function di(A){et&&et(A)}function Qn(){_r.stop()}function Mp(){_r.start()}const _r=new ey;_r.setAnimationLoop(di),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(A){et=A,he.setAnimationLoop(A),A===null?_r.stop():_r.start()},he.addEventListener("sessionstart",Qn),he.addEventListener("sessionend",Mp),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(B),B=he.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,E),p=be.get(A,m.length),p.init(B),m.push(p),ie.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H.setFromProjectionMatrix(ie),G=this.localClippingEnabled,F=Ve.init(this.clippingPlanes,G),y=ye.get(A,u.length),y.init(),u.push(y),he.enabled===!0&&he.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&iu(pe,B,-1/0,x.sortObjects)}iu(A,B,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(I,ne),Te=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Te&&Me.addToRenderList(y,A),this.info.render.frame++,F===!0&&Ve.beginShadows();const K=p.state.shadowsArray;fe.render(K,A,B),F===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,V=y.transmissive;if(p.setupLights(),B.isArrayCamera){const pe=B.cameras;if(V.length>0)for(let Ee=0,Re=pe.length;Ee<Re;Ee++){const Pe=pe[Ee];Tp(Z,V,A,Pe)}Te&&Me.render(A);for(let Ee=0,Re=pe.length;Ee<Re;Ee++){const Pe=pe[Ee];Ep(y,A,Pe,Pe.viewport)}}else V.length>0&&Tp(Z,V,A,B),Te&&Me.render(A),Ep(y,A,B);E!==null&&(we.updateMultisampleRenderTarget(E),we.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,B),$e.resetDefaultState(),P=-1,T=null,m.pop(),m.length>0?(p=m[m.length-1],F===!0&&Ve.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function iu(A,B,K,Z){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){Z&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ie);const Ee=ae.update(A),Re=A.material;Re.visible&&y.push(A,Ee,Re,K,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||H.intersectsObject(A))){const Ee=ae.update(A),Re=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),le.copy(Ee.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(ie)),Array.isArray(Re)){const Pe=Ee.groups;for(let ze=0,He=Pe.length;ze<He;ze++){const Ne=Pe[ze],tt=Re[Ne.materialIndex];tt&&tt.visible&&y.push(A,Ee,tt,K,le.z,Ne)}}else Re.visible&&y.push(A,Ee,Re,K,le.z,null)}}const pe=A.children;for(let Ee=0,Re=pe.length;Ee<Re;Ee++)iu(pe[Ee],B,K,Z)}function Ep(A,B,K,Z){const V=A.opaque,pe=A.transmissive,Ee=A.transparent;p.setupLightsView(K),F===!0&&Ve.setGlobalState(x.clippingPlanes,K),Z&&Se.viewport(w.copy(Z)),V.length>0&&Io(V,B,K),pe.length>0&&Io(pe,B,K),Ee.length>0&&Io(Ee,B,K),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Tp(A,B,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new es(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?No:Ni,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Z.id],Ee=Z.viewport||w;pe.setSize(Ee.z,Ee.w);const Re=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(j),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),Te&&Me.render(K);const Pe=x.toneMapping;x.toneMapping=ar;const ze=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),F===!0&&Ve.setGlobalState(x.clippingPlanes,Z),Io(A,K,Z),we.updateMultisampleRenderTarget(pe),we.updateRenderTargetMipmap(pe),ve.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ne=0,tt=B.length;Ne<tt;Ne++){const vt=B[Ne],_t=vt.object,gn=vt.geometry,nt=vt.material,De=vt.group;if(nt.side===qn&&_t.layers.test(Z.layers)){const Ft=nt.side;nt.side=mn,nt.needsUpdate=!0,bp(_t,K,Z,gn,nt,De),nt.side=Ft,nt.needsUpdate=!0,He=!0}}He===!0&&(we.updateMultisampleRenderTarget(pe),we.updateRenderTargetMipmap(pe))}x.setRenderTarget(Re),x.setClearColor(j,Q),ze!==void 0&&(Z.viewport=ze),x.toneMapping=Pe}function Io(A,B,K){const Z=B.isScene===!0?B.overrideMaterial:null;for(let V=0,pe=A.length;V<pe;V++){const Ee=A[V],Re=Ee.object,Pe=Ee.geometry,ze=Z===null?Ee.material:Z,He=Ee.group;Re.layers.test(K.layers)&&bp(Re,B,K,Pe,ze,He)}}function bp(A,B,K,Z,V,pe){A.onBeforeRender(x,B,K,Z,V,pe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,B,K,Z,A,pe),V.transparent===!0&&V.side===qn&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,x.renderBufferDirect(K,B,Z,V,A,pe),V.side=dr,V.needsUpdate=!0,x.renderBufferDirect(K,B,Z,V,A,pe),V.side=qn):x.renderBufferDirect(K,B,Z,V,A,pe),A.onAfterRender(x,B,K,Z,V,pe)}function Oo(A,B,K){B.isScene!==!0&&(B=ge);const Z=ue.get(A),V=p.state.lights,pe=p.state.shadowsArray,Ee=V.state.version,Re=ce.getParameters(A,V.state,pe,B,K),Pe=ce.getProgramCacheKey(Re);let ze=Z.programs;Z.environment=A.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(A.isMeshStandardMaterial?M:N).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Be),ze=new Map,Z.programs=ze);let He=ze.get(Pe);if(He!==void 0){if(Z.currentProgram===He&&Z.lightsStateVersion===Ee)return Cp(A,Re),He}else Re.uniforms=ce.getUniforms(A),A.onBeforeCompile(Re,x),He=ce.acquireProgram(Re,Pe),ze.set(Pe,He),Z.uniforms=Re.uniforms;const Ne=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=Ve.uniform),Cp(A,Re),Z.needsLights=hy(A),Z.lightsStateVersion=Ee,Z.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.directionalShadowMap.value=V.state.directionalShadowMap,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotShadowMap.value=V.state.spotShadowMap,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMap.value=V.state.pointShadowMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=He,Z.uniformsList=null,He}function Ap(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=ql.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Cp(A,B){const K=ue.get(A);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function dy(A,B,K,Z,V){B.isScene!==!0&&(B=ge),we.resetTextureUnits();const pe=B.fog,Ee=Z.isMeshStandardMaterial?B.environment:null,Re=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:vr,Pe=(Z.isMeshStandardMaterial?M:N).get(Z.envMap||Ee),ze=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ne=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,vt=!!K.morphAttributes.color;let _t=ar;Z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_t=x.toneMapping);const gn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,nt=gn!==void 0?gn.length:0,De=ue.get(Z),Ft=p.state.lights;if(F===!0&&(G===!0||A!==T)){const Cn=A===T&&Z.id===P;Ve.setState(Z,A,Cn)}let it=!1;Z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ft.state.version||De.outputColorSpace!==Re||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==Pe||Z.fog===!0&&De.fog!==pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ve.numPlanes||De.numIntersection!==Ve.numIntersection)||De.vertexAlphas!==ze||De.vertexTangents!==He||De.morphTargets!==Ne||De.morphNormals!==tt||De.morphColors!==vt||De.toneMapping!==_t||De.morphTargetsCount!==nt)&&(it=!0):(it=!0,De.__version=Z.version);let Bn=De.currentProgram;it===!0&&(Bn=Oo(Z,B,V));let is=!1,xn=!1,ru=!1;const Tt=Bn.getUniforms(),Ui=De.uniforms;if(Se.useProgram(Bn.program)&&(is=!0,xn=!0,ru=!0),Z.id!==P&&(P=Z.id,xn=!0),is||T!==A){Tt.setValue(D,"projectionMatrix",A.projectionMatrix),Tt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Cn=Tt.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,X.setFromMatrixPosition(A.matrixWorld)),Oe.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,xn=!0,ru=!0)}if(V.isSkinnedMesh){Tt.setOptional(D,V,"bindMatrix"),Tt.setOptional(D,V,"bindMatrixInverse");const Cn=V.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Tt.setValue(D,"boneTexture",Cn.boneTexture,we))}V.isBatchedMesh&&(Tt.setOptional(D,V,"batchingTexture"),Tt.setValue(D,"batchingTexture",V._matricesTexture,we),Tt.setOptional(D,V,"batchingIdTexture"),Tt.setValue(D,"batchingIdTexture",V._indirectTexture,we),Tt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Tt.setValue(D,"batchingColorTexture",V._colorsTexture,we));const su=K.morphAttributes;if((su.position!==void 0||su.normal!==void 0||su.color!==void 0)&&Ke.update(V,K,Bn),(xn||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,Tt.setValue(D,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ui.envMap.value=Pe,Ui.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Ui.envMapIntensity.value=B.environmentIntensity),xn&&(Tt.setValue(D,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&fy(Ui,ru),pe&&Z.fog===!0&&Ue.refreshFogUniforms(Ui,pe),Ue.refreshMaterialUniforms(Ui,Z,ee,$,p.state.transmissionRenderTarget[A.id]),ql.upload(D,Ap(De),Ui,we)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ql.upload(D,Ap(De),Ui,we),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Tt.setValue(D,"center",V.center),Tt.setValue(D,"modelViewMatrix",V.modelViewMatrix),Tt.setValue(D,"normalMatrix",V.normalMatrix),Tt.setValue(D,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Cn=Z.uniformsGroups;for(let au=0,py=Cn.length;au<py;au++){const Rp=Cn[au];ft.update(Rp,Bn),ft.bind(Rp,Bn)}}return Bn}function fy(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function hy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,B,K){ue.get(A.texture).__webglTexture=B,ue.get(A.depthTexture).__webglTexture=K;const Z=ue.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const K=ue.get(A);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,K=0){E=A,C=B,b=K;let Z=!0,V=null,pe=!1,Ee=!1;if(A){const Pe=ue.get(A);if(Pe.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Pe.__webglFramebuffer===void 0)we.setupRenderTarget(A);else if(Pe.__hasExternalTextures)we.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ne=A.depthTexture;if(Pe.__boundDepthTexture!==Ne){if(Ne!==null&&ue.has(Ne)&&(A.width!==Ne.image.width||A.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const He=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[B])?V=He[B][K]:V=He[B],pe=!0):A.samples>0&&we.useMultisampledRTT(A)===!1?V=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?V=He[K]:V=He,w.copy(A.viewport),U.copy(A.scissor),W=A.scissorTest}else w.copy(L).multiplyScalar(ee).floor(),U.copy(R).multiplyScalar(ee).floor(),W=J;if(Se.bindFramebuffer(D.FRAMEBUFFER,V)&&Z&&Se.drawBuffers(A,V),Se.viewport(w),Se.scissor(U),Se.setScissorTest(W),pe){const Pe=ue.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,K)}else if(Ee){const Pe=ue.get(A.texture),ze=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.__webglTexture,K||0,ze)}P=-1},this.readRenderTargetPixels=function(A,B,K,Z,V,pe,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Se.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Pe=A.texture,ze=Pe.format,He=Pe.type;if(!Oe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Z&&K>=0&&K<=A.height-V&&D.readPixels(B,K,Z,V,je.convert(ze),je.convert(He),pe)}finally{const Pe=E!==null?ue.get(E).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,B,K,Z,V,pe,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Se.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Pe=A.texture,ze=Pe.format,He=Pe.type;if(!Oe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-Z&&K>=0&&K<=A.height-V){const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(B,K,Z,V,je.convert(ze),je.convert(He),0),D.flush();const tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await wb(D,tt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe)}finally{D.deleteBuffer(Ne),D.deleteSync(tt)}return pe}}finally{const Pe=E!==null?ue.get(E).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(A,B=null,K=0){A.isTexture!==!0&&($a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-K),V=Math.floor(A.image.width*Z),pe=Math.floor(A.image.height*Z),Ee=B!==null?B.x:0,Re=B!==null?B.y:0;we.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Ee,Re,V,pe),Se.unbindTexture()},this.copyTextureToTexture=function(A,B,K=null,Z=null,V=0){A.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],B=arguments[2],V=arguments[3]||0,K=null);let pe,Ee,Re,Pe,ze,He;K!==null?(pe=K.max.x-K.min.x,Ee=K.max.y-K.min.y,Re=K.min.x,Pe=K.min.y):(pe=A.image.width,Ee=A.image.height,Re=0,Pe=0),Z!==null?(ze=Z.x,He=Z.y):(ze=0,He=0);const Ne=je.convert(B.format),tt=je.convert(B.type);we.setTexture2D(B,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const vt=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),nt=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES),Ft=A.isCompressedTexture?A.mipmaps[V]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,V,ze,He,pe,Ee,Ne,tt,Ft.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,V,ze,He,Ft.width,Ft.height,Ne,Ft.data):D.texSubImage2D(D.TEXTURE_2D,V,ze,He,pe,Ee,Ne,tt,Ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,vt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),V===0&&B.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,B,K=null,Z=null,V=0){A.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],B=arguments[3],V=arguments[4]||0);let pe,Ee,Re,Pe,ze,He,Ne,tt,vt;const _t=A.isCompressedTexture?A.mipmaps[V]:A.image;K!==null?(pe=K.max.x-K.min.x,Ee=K.max.y-K.min.y,Re=K.max.z-K.min.z,Pe=K.min.x,ze=K.min.y,He=K.min.z):(pe=_t.width,Ee=_t.height,Re=_t.depth,Pe=0,ze=0,He=0),Z!==null?(Ne=Z.x,tt=Z.y,vt=Z.z):(Ne=0,tt=0,vt=0);const gn=je.convert(B.format),nt=je.convert(B.type);let De;if(B.isData3DTexture)we.setTexture3D(B,0),De=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)we.setTexture2DArray(B,0),De=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Ft=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Bn=D.getParameter(D.UNPACK_SKIP_PIXELS),is=D.getParameter(D.UNPACK_SKIP_ROWS),xn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(De,V,Ne,tt,vt,pe,Ee,Re,gn,nt,_t.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(De,V,Ne,tt,vt,pe,Ee,Re,gn,_t.data):D.texSubImage3D(De,V,Ne,tt,vt,pe,Ee,Re,gn,nt,_t),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,is),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),V===0&&B.generateMipmaps&&D.generateMipmap(De),Se.unbindTexture()},this.initRenderTarget=function(A){ue.get(A).__webglFramebuffer===void 0&&we.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?we.setTextureCube(A,0):A.isData3DTexture?we.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?we.setTexture2DArray(A,0):we.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){C=0,b=0,E=null,Se.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===pp?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===Zc?"display-p3":"srgb"}}class nu extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class xp extends pa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const c0=new gt,Zf=new X_,El=new Jc,Tl=new z;class oy extends zt{constructor(e=new An,n=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;c0.copy(r).invert(),Zf.copy(e.ray).applyMatrix4(c0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=h,y=g;_<y;_++){const p=c.getX(_);Tl.fromBufferAttribute(f,p),u0(Tl,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=h,y=g;_<y;_++)Tl.fromBufferAttribute(f,_),u0(Tl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function u0(t,e,n,i,r,s,a){const o=Zf.distanceSqToPoint(t);if(o<n){const l=new z;Zf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ni extends An{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],g=[];let _=0;const y=[],p=i/2;let u=0;m(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(g,2));function m(){const S=new z,C=new z;let b=0;const E=(n-e)/i;for(let P=0;P<=s;P++){const T=[],w=P/s,U=w*(n-e)+e;for(let W=0;W<=r;W++){const j=W/r,Q=j*l+o,te=Math.sin(Q),$=Math.cos(Q);C.x=U*te,C.y=-w*i+p,C.z=U*$,f.push(C.x,C.y,C.z),S.set(te,E,$).normalize(),h.push(S.x,S.y,S.z),g.push(j,1-w),T.push(_++)}y.push(T)}for(let P=0;P<r;P++)for(let T=0;T<s;T++){const w=y[T][P],U=y[T+1][P],W=y[T+1][P+1],j=y[T][P+1];d.push(w,U,j),d.push(U,W,j),b+=6}c.addGroup(u,b,0),u+=b}function x(S){const C=_,b=new qe,E=new z;let P=0;const T=S===!0?e:n,w=S===!0?1:-1;for(let W=1;W<=r;W++)f.push(0,p*w,0),h.push(0,w,0),g.push(.5,.5),_++;const U=_;for(let W=0;W<=r;W++){const Q=W/r*l+o,te=Math.cos(Q),$=Math.sin(Q);E.x=T*$,E.y=p*w,E.z=T*te,f.push(E.x,E.y,E.z),h.push(0,w,0),b.x=te*.5+.5,b.y=$*.5*w+.5,g.push(b.x,b.y),_++}for(let W=0;W<r;W++){const j=C+W,Q=U+W;S===!0?d.push(Q,Q+1,j):d.push(Q+1,Q,j),P+=3}c.addGroup(u,P,S===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vp extends An{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(s.slice(),3)),this.setAttribute("uv",new Zt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const x=new z,S=new z,C=new z;for(let b=0;b<n.length;b+=3)g(n[b+0],x),g(n[b+1],S),g(n[b+2],C),l(x,S,C,m)}function l(m,x,S,C){const b=C+1,E=[];for(let P=0;P<=b;P++){E[P]=[];const T=m.clone().lerp(S,P/b),w=x.clone().lerp(S,P/b),U=b-P;for(let W=0;W<=U;W++)W===0&&P===b?E[P][W]=T:E[P][W]=T.clone().lerp(w,W/U)}for(let P=0;P<b;P++)for(let T=0;T<2*(b-P)-1;T++){const w=Math.floor(T/2);T%2===0?(h(E[P][w+1]),h(E[P+1][w]),h(E[P][w])):(h(E[P][w+1]),h(E[P+1][w+1]),h(E[P+1][w]))}}function c(m){const x=new z;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(m),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function d(){const m=new z;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const S=p(m)/2/Math.PI+.5,C=u(m)/Math.PI+.5;a.push(S,1-C)}_(),f()}function f(){for(let m=0;m<a.length;m+=6){const x=a[m+0],S=a[m+2],C=a[m+4],b=Math.max(x,S,C),E=Math.min(x,S,C);b>.9&&E<.1&&(x<.2&&(a[m+0]+=1),S<.2&&(a[m+2]+=1),C<.2&&(a[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function g(m,x){const S=m*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function _(){const m=new z,x=new z,S=new z,C=new z,b=new qe,E=new qe,P=new qe;for(let T=0,w=0;T<s.length;T+=9,w+=6){m.set(s[T+0],s[T+1],s[T+2]),x.set(s[T+3],s[T+4],s[T+5]),S.set(s[T+6],s[T+7],s[T+8]),b.set(a[w+0],a[w+1]),E.set(a[w+2],a[w+3]),P.set(a[w+4],a[w+5]),C.copy(m).add(x).add(S).divideScalar(3);const U=p(C);y(b,w+0,m,U),y(E,w+2,x,U),y(P,w+4,S,U)}}function y(m,x,S,C){C<0&&m.x===1&&(a[x]=m.x-1),S.x===0&&S.z===0&&(a[x]=C/2/Math.PI+.5)}function p(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vp(e.vertices,e.indices,e.radius,e.details)}}class _p extends vp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _p(e.radius,e.detail)}}class Cc extends An{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,g=new z,_=new qe;for(let y=0;y<=r;y++){for(let p=0;p<=i;p++){const u=s+p/i*a;g.x=f*Math.cos(u),g.y=f*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),_.x=(g.x/n+1)/2,_.y=(g.y/n+1)/2,d.push(_.x,_.y)}f+=h}for(let y=0;y<r;y++){const p=y*(i+1);for(let u=0;u<i;u++){const m=u+p,x=m,S=m+i+1,C=m+i+2,b=m+1;o.push(x,S,b),o.push(S,C,b)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xi extends pa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H_,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const d0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class NP{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const g=c[f],_=c[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null}}}const LP=new NP;class yp{constructor(e){this.manager=e!==void 0?e:LP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yp.DEFAULT_MATERIAL_NAME="__DEFAULT";class DP extends yp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=d0.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=_o("img");function l(){d(),d0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class UP extends yp{constructor(e){super(e)}load(e,n,i,r){const s=new nn,a=new DP(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Sp extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const md=new gt,f0=new z,h0=new z;class ly{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;f0.setFromMatrixPosition(e.matrixWorld),n.position.copy(f0),h0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(h0),n.updateMatrixWorld(),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const p0=new gt,Da=new z,gd=new z;class IP extends ly{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Da.setFromMatrixPosition(e.matrixWorld),i.position.copy(Da),gd.copy(i.position),gd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(gd),i.updateMatrixWorld(),r.makeTranslation(-Da.x,-Da.y,-Da.z),p0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(p0)}}class OP extends Sp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new IP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class FP extends ly{constructor(){super(new ty(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m0 extends Sp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new FP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kP extends Sp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class BP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=g0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=g0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function g0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);function cy({theme:t="emerald",interactive:e=!0,className:n="w-full h-full"}){const i=q.useRef(null),{getAudioFrequencyData:r,isPlaying:s}=ui();return q.useEffect(()=>{const a=i.current;if(!a)return;const o=new nu,l=new $t(60,a.clientWidth/a.clientHeight,.1,1e3);l.position.z=18;const c=new tu({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setSize(a.clientWidth,a.clientHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.appendChild(c.domElement);const d=2e3,f=new An,h=new Float32Array(d*3),g=new Float32Array(d*3),_=new Float32Array(d*3),y=7.5,p=t==="artist"?new Xe(440020):new Xe(1096065),u=t==="artist"?new Xe(11032055):new Xe(3462041);for(let $=0;$<d;$++){const ee=Math.acos(1-2*($+.5)/d),I=Math.PI*(1+Math.sqrt(5))*$,ne=y*Math.sin(ee)*Math.cos(I),L=y*Math.sin(ee)*Math.sin(I),R=y*Math.cos(ee);h[$*3]=ne,h[$*3+1]=L,h[$*3+2]=R,g[$*3]=ne,g[$*3+1]=L,g[$*3+2]=R;const J=Math.random(),H=p.clone().lerp(u,J);_[$*3]=H.r,_[$*3+1]=H.g,_[$*3+2]=H.b}f.setAttribute("position",new Mn(h,3)),f.setAttribute("color",new Mn(_,3));const m=new xp({size:.18,vertexColors:!0,transparent:!0,opacity:.85,blending:wc}),x=new oy(f,m);o.add(x);const S=new _p(4.5,3),C=new Vr({color:t==="artist"?9133302:1096065,wireframe:!0,transparent:!0,opacity:.15}),b=new ht(S,C);o.add(b);let E=0,P=0,T=0,w=0;const U=$=>{if(!e)return;const ee=a.getBoundingClientRect(),I=$.clientX-ee.left-ee.width/2,ne=$.clientY-ee.top-ee.height/2;T=I/ee.width*1.5,w=ne/ee.height*1.5};window.addEventListener("mousemove",U);const W=()=>{a&&(l.aspect=a.clientWidth/a.clientHeight,l.updateProjectionMatrix(),c.setSize(a.clientWidth,a.clientHeight))};window.addEventListener("resize",W);let j,Q=new BP;const te=()=>{j=requestAnimationFrame(te);const $=Q.getElapsedTime(),ee=r();let I=0;if(s&&ee&&ee.length>0){let J=0;for(let H=0;H<16;H++)J+=ee[H];I=J/16/255}E+=(T-E)*.05,P+=(w-P)*.05,x.rotation.y=$*.25+E*.8,x.rotation.x=$*.15+P*.8,b.rotation.y=-$*.35,b.rotation.x=-$*.2;const ne=1+I*.45;b.scale.set(ne,ne,ne);const L=f.attributes.position.array,R=s?1+I*1.2:1;for(let J=0;J<d;J++){const H=J*3,F=g[H],G=g[H+1],ie=g[H+2],X=J%32,le=(ee[X]||0)/255,ge=Math.sin($*2.5+F*.5)*(.2+le*1.5),Te=R+ge*.2;L[H]=F*Te,L[H+1]=G*Te,L[H+2]=ie*Te}f.attributes.position.needsUpdate=!0,c.render(o,l)};return te(),()=>{cancelAnimationFrame(j),window.removeEventListener("mousemove",U),window.removeEventListener("resize",W),a&&c.domElement&&a.removeChild(c.domElement),f.dispose(),m.dispose(),S.dispose(),C.dispose(),c.dispose()}},[t,e,s,r]),v.jsx("div",{ref:i,className:`relative overflow-hidden pointer-events-none select-none ${n}`})}function uy({className:t="w-full h-40",barCount:e=32}){const n=q.useRef(null),{getAudioFrequencyData:i,isPlaying:r}=ui();return q.useEffect(()=>{const s=n.current;if(!s)return;const a=new nu,o=new $t(50,s.clientWidth/s.clientHeight,.1,1e3);o.position.set(0,4,14),o.lookAt(0,0,0);const l=new tu({alpha:!0,antialias:!0});l.setSize(s.clientWidth,s.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.appendChild(l.domElement);const c=[],d=.28,f=.42,g=-(e*f)/2,_=new fr(d,1,.25);for(let m=0;m<e;m++){const x=m/e,S=new Xe().lerpColors(new Xe(1096065),new Xe(440020),x),C=new Vr({color:S,transparent:!0,opacity:.85}),b=new ht(_,C);b.position.set(g+m*f,0,0),a.add(b),c.push(b)}const y=()=>{s&&(o.aspect=s.clientWidth/s.clientHeight,o.updateProjectionMatrix(),l.setSize(s.clientWidth,s.clientHeight))};window.addEventListener("resize",y);let p;const u=()=>{p=requestAnimationFrame(u);const m=i();for(let x=0;x<e;x++){const S=c[x];let C=0;if(r&&m&&m.length>0){const E=Math.floor(x/e*(m.length/2));C=(m[E]||0)/255}const b=Math.max(.15,C*6.5);S.scale.y+=(b-S.scale.y)*.25,S.position.y=S.scale.y/2}l.render(a,o)};return u(),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",y),s&&l.domElement&&s.removeChild(l.domElement),a.clear(),l.dispose()}},[e,r,i]),v.jsx("div",{ref:n,className:`relative overflow-hidden pointer-events-none ${t}`})}function zP(){const{isAuthenticated:t,isArtist:e,user:n}=Yc(),{playSong:i,currentSong:r,isPlaying:s,toggleFullscreen3D:a}=ui(),[o,l]=q.useState([]),[c,d]=q.useState([]),[f,h]=q.useState(""),[g,_]=q.useState(!0);q.useEffect(()=>{async function p(){var m,x;_(!0);try{if(t){const[S,C]=await Promise.allSettled([Dn.get(`/music${f?`?search=${encodeURIComponent(f)}`:""}`),Dn.get("/music/albums")]);S.status==="fulfilled"&&((m=S.value.data)!=null&&m.musics)&&l(S.value.data.musics),C.status==="fulfilled"&&((x=C.value.data)!=null&&x.albums)&&d(C.value.data.albums)}}catch(S){console.warn("Fetch music error:",S.message)}finally{_(!1)}}const u=setTimeout(p,200);return()=>clearTimeout(u)},[t,f]);const y=o.filter(p=>{var u,m,x;return((u=p.title)==null?void 0:u.toLowerCase().includes(f.toLowerCase()))||typeof p.artist=="object"&&((x=(m=p.artist)==null?void 0:m.username)==null?void 0:x.toLowerCase().includes(f.toLowerCase()))});return v.jsxs("div",{className:"min-h-screen bg-[#060911] text-white flex flex-col pb-32",children:[v.jsx(js,{onSearchChange:h,searchTerm:f}),v.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6",children:[v.jsxs("div",{className:"relative rounded-3xl overflow-hidden glass-card border border-white/10 p-6 sm:p-12 mb-10 shadow-2xl",children:[v.jsx("div",{className:"absolute -right-10 -top-10 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] opacity-60 pointer-events-none",children:v.jsx(cy,{theme:e?"artist":"emerald",interactive:!1})}),v.jsxs("div",{className:"relative z-10 max-w-xl",children:[v.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4",children:[v.jsx(Po,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"SPATIAL AUDIO • 3D EXPERIENCES"})]}),v.jsxs("h1",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4",children:["Immerse In Sound, ",v.jsx("br",{}),v.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent",children:"Feel Every Frequency."})]}),v.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:"Experience modern music with interactive 3D vinyl turntables, real-time Web Audio API visualizers, and seamless artist uploads."}),v.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[o.length>0&&v.jsxs("button",{onClick:()=>i(o[0],o),className:"flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all",children:[v.jsx(Pi,{className:"w-4 h-4 fill-current"}),v.jsx("span",{children:"Play Featured Track"})]}),v.jsxs("button",{onClick:a,className:"flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-white font-medium text-xs tracking-wider uppercase hover:border-emerald-500/40 transition-all",children:[v.jsx(pn,{className:"w-4 h-4 text-emerald-400"}),v.jsx("span",{children:"3D Turntable Stage"})]}),e&&v.jsxs(Yt,{to:"/artist/studio",className:"flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-300 font-medium text-xs tracking-wider uppercase transition-all",children:[v.jsx(Jr,{className:"w-4 h-4 text-cyan-400"}),v.jsx("span",{children:"Upload Song"})]})]})]}),v.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none",children:v.jsx(uy,{barCount:40})})]}),!t&&v.jsxs("div",{className:"mb-10 p-5 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"text-base font-bold text-white",children:"Join AURA 3D Music"}),v.jsx("p",{className:"text-xs text-slate-300",children:"Sign in to browse all songs, listen to albums, or upload as an artist."})]}),v.jsx(Yt,{to:"/login",className:"shrink-0 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105",children:"Sign In / Register"})]}),v.jsxs("section",{className:"mb-12",children:[v.jsxs("div",{className:"flex items-center justify-between mb-6",children:[v.jsxs("div",{className:"flex items-center gap-2.5",children:[v.jsx(dT,{className:"w-5 h-5 text-emerald-400"}),v.jsx("h2",{className:"text-xl font-bold tracking-tight text-white font-['Space_Grotesk']",children:"Trending Tracks"}),v.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["(",y.length,")"]})]}),e&&v.jsxs(Yt,{to:"/artist/studio",className:"text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1",children:[v.jsx(_T,{className:"w-3.5 h-3.5"}),"Upload New"]})]}),g?v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:[...Array(5)].map((p,u)=>v.jsx("div",{className:"aspect-square rounded-2xl bg-white/5 animate-pulse"},u))}):y.length>0?v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:y.map((p,u)=>v.jsx(TT,{song:p,playlist:y,index:u},p._id||p.id||u))}):v.jsxs("div",{className:"rounded-2xl glass-card border border-white/10 p-10 text-center",children:[v.jsx(pn,{className:"w-12 h-12 text-slate-500 mx-auto mb-3 animate-spin-slow"}),v.jsx("h4",{className:"text-base font-bold text-white mb-1",children:"No tracks found"}),v.jsx("p",{className:"text-xs text-slate-400 max-w-sm mx-auto mb-4",children:f?`No songs matched "${f}". Try another search keyword.`:"No songs have been uploaded to the platform yet."}),e?v.jsxs(Yt,{to:"/artist/studio",className:"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider",children:[v.jsx(Jr,{className:"w-4 h-4"}),"Upload First Track"]}):v.jsx(Yt,{to:"/login",className:"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider",children:"Sign in as Artist to Upload"})]})]}),c.length>0&&v.jsxs("section",{className:"mb-12",children:[v.jsx("div",{className:"flex items-center justify-between mb-6",children:v.jsxs("div",{className:"flex items-center gap-2.5",children:[v.jsx(pn,{className:"w-5 h-5 text-purple-400"}),v.jsx("h2",{className:"text-xl font-bold tracking-tight text-white font-['Space_Grotesk']",children:"Featured Albums"}),v.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["(",c.length,")"]})]})}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6",children:c.map((p,u)=>v.jsx(bT,{album:p,index:u},p._id||p.id||u))})]})]})]})}function HP({count:t=300,className:e="absolute inset-0 pointer-events-none"}){const n=q.useRef(null);return q.useEffect(()=>{const i=n.current;if(!i)return;const r=new nu,s=new $t(60,i.clientWidth/i.clientHeight,.1,1e3);s.position.z=20;const a=new tu({alpha:!0,antialias:!1});a.setSize(i.clientWidth,i.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),i.appendChild(a.domElement);const o=new An,l=new Float32Array(t*3),c=new Float32Array(t*3);for(let y=0;y<t;y++)l[y*3]=(Math.random()-.5)*35,l[y*3+1]=(Math.random()-.5)*35,l[y*3+2]=(Math.random()-.5)*25,c[y*3]=(Math.random()-.5)*.01,c[y*3+1]=Math.random()*.015+.005,c[y*3+2]=(Math.random()-.5)*.01;o.setAttribute("position",new Mn(l,3));const d=new xp({size:.12,color:1096065,transparent:!0,opacity:.45,blending:wc}),f=new oy(o,d);r.add(f);const h=()=>{i&&(s.aspect=i.clientWidth/i.clientHeight,s.updateProjectionMatrix(),a.setSize(i.clientWidth,i.clientHeight))};window.addEventListener("resize",h);let g;const _=()=>{g=requestAnimationFrame(_);const y=o.attributes.position.array;for(let p=0;p<t;p++)y[p*3+1]+=c[p*3+1],y[p*3]+=c[p*3],y[p*3+1]>18&&(y[p*3+1]=-18,y[p*3]=(Math.random()-.5)*35);o.attributes.position.needsUpdate=!0,f.rotation.y+=8e-4,a.render(r,s)};return _(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",h),i&&a.domElement&&i.removeChild(a.domElement),o.dispose(),d.dispose(),a.dispose()}},[t]),v.jsx("div",{ref:n,className:e})}function VP(){const{login:t,register:e,isAuthenticated:n}=Yc(),i=To(),[r,s]=q.useState(!1),[a,o]=q.useState("user"),[l,c]=q.useState(""),[d,f]=q.useState(""),[h,g]=q.useState(""),[_,y]=q.useState(""),[p,u]=q.useState(!1);nh.useEffect(()=>{n&&i(a==="artist"?"/artist/studio":"/")},[n,i,a]);const m=async S=>{var C,b;S.preventDefault(),y(""),u(!0);try{if(r){if(!l||!d||!h){y("All fields are required"),u(!1);return}await e(l,d,h,a)}else{const E=l||d;if(!E||!h){y("Please enter your username/email and password"),u(!1);return}await t(E,h)}i(a==="artist"?"/artist/studio":"/")}catch(E){console.error("Auth error:",E),y(((b=(C=E.response)==null?void 0:C.data)==null?void 0:b.message)||"Authentication failed. Please check credentials.")}finally{u(!1)}},x=a==="artist";return v.jsxs("div",{className:"relative min-h-screen w-full bg-[#05070e] text-white flex items-center justify-center p-4 overflow-hidden select-none",children:[v.jsx("div",{className:"absolute inset-0 z-0 opacity-70",children:v.jsx(cy,{theme:x?"artist":"emerald",interactive:!0})}),v.jsx(HP,{count:250}),v.jsx("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-colors duration-700 ${x?"bg-purple-600/15":"bg-emerald-500/15"}`}),v.jsxs("div",{className:"relative z-10 w-full max-w-md my-8",children:[v.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[v.jsxs(Yt,{to:"/",className:"flex items-center gap-3 mb-3 group",children:[v.jsx("div",{className:`w-12 h-12 rounded-2xl p-[1px] shadow-2xl transition-all duration-500 group-hover:scale-110 ${x?"bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 shadow-purple-500/30":"bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 shadow-emerald-500/30"}`,children:v.jsx("div",{className:"w-full h-full rounded-2xl bg-[#080b12] flex items-center justify-center",children:v.jsx(pn,{className:`w-7 h-7 transition-transform duration-700 group-hover:rotate-180 ${x?"text-cyan-400":"text-emerald-400"}`})})}),v.jsxs("div",{className:"flex flex-col text-left",children:[v.jsxs("span",{className:"text-2xl font-black tracking-wider bg-gradient-to-r from-white via-slate-100 to-emerald-400 bg-clip-text text-transparent font-['Space_Grotesk']",children:["AURA",v.jsx("span",{className:x?"text-cyan-400 text-xs ml-1":"text-emerald-400 text-xs ml-1",children:"3D"})]}),v.jsx("span",{className:"text-[10px] tracking-widest text-slate-400 uppercase font-mono",children:"Spatial Music Hub"})]})]}),v.jsx("p",{className:"text-xs text-slate-300 max-w-xs",children:x?"Step into the Artist Studio & publish your sound in 3D":"Listen to high-fidelity tracks with interactive 3D spatial visuals"})]}),v.jsxs(xo,{glowColor:x?"purple":"emerald",tiltDegree:8,className:"p-6 sm:p-8 backdrop-blur-2xl border border-white/15 bg-slate-950/80 shadow-2xl",children:[v.jsxs("div",{className:"mb-6 p-1 rounded-2xl bg-slate-900/90 border border-white/10 grid grid-cols-2 gap-1",children:[v.jsxs("button",{type:"button",onClick:()=>o("user"),className:`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${x?"text-slate-400 hover:text-white":"bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 font-bold"}`,children:[v.jsx(fT,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Listener"})]}),v.jsxs("button",{type:"button",onClick:()=>o("artist"),className:`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${x?"bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30 font-bold":"text-slate-400 hover:text-white"}`,children:[v.jsx(Po,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Artist Creator"})]})]}),v.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3 mb-6",children:[v.jsx("h2",{className:"text-base font-bold text-white tracking-wide",children:r?"Create 3D Account":"Welcome Back"}),v.jsx("button",{type:"button",onClick:()=>{s(!r),y("")},className:`text-xs font-medium underline-offset-4 hover:underline ${x?"text-cyan-400":"text-emerald-400"}`,children:r?"Already have account? Sign in":"New user? Create account"})]}),_&&v.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-rose-300 text-xs",children:[v.jsx(rp,{className:"w-4 h-4 shrink-0"}),v.jsx("span",{children:_})]}),v.jsxs("form",{onSubmit:m,className:"space-y-4",children:[v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5",children:[v.jsx(E_,{className:"w-3.5 h-3.5 text-slate-400"}),v.jsxs("span",{children:["Username ",r?"":"or Email"]})]}),v.jsx("input",{type:"text",required:!0,placeholder:r?"Choose a username":"Enter username or email",value:l,onChange:S=>c(S.target.value),className:"w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"})]}),r&&v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5",children:[v.jsx(gT,{className:"w-3.5 h-3.5 text-slate-400"}),v.jsx("span",{children:"Email Address"})]}),v.jsx("input",{type:"email",required:!0,placeholder:"name@example.com",value:d,onChange:S=>f(S.target.value),className:"w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"})]}),v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5",children:[v.jsx(pT,{className:"w-3.5 h-3.5 text-slate-400"}),v.jsx("span",{children:"Password"})]}),v.jsx("input",{type:"password",required:!0,placeholder:"Enter password",value:h,onChange:S=>g(S.target.value),className:"w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"})]}),v.jsx("button",{type:"submit",disabled:p,className:`w-full mt-2 py-3 rounded-xl font-bold text-sm tracking-wider uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 ${x?"bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-purple-600/30":"bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-black shadow-emerald-500/30"}`,children:p?v.jsx("div",{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"}):v.jsxs(v.Fragment,{children:[v.jsx("span",{children:r?"Create 3D Account":"Access Spatial Player"}),v.jsx(lT,{className:"w-4 h-4"})]})})]}),v.jsxs("div",{className:"mt-6 pt-4 border-t border-white/10 text-center",children:[v.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"Need a quick test account?"}),v.jsxs("div",{className:"flex items-center justify-center gap-2",children:[v.jsx("button",{type:"button",onClick:()=>{s(!0),o("user"),c(`listener_${Math.floor(Math.random()*1e3)}`),f(`user_${Math.floor(Math.random()*1e3)}@music.com`),g("password123")},className:"px-2.5 py-1 rounded-lg bg-white/5 hover:bg-emerald-500/15 border border-white/10 text-[10px] font-mono text-emerald-400 transition-colors",children:"+ New Listener"}),v.jsx("button",{type:"button",onClick:()=>{s(!0),o("artist"),c(`artist_${Math.floor(Math.random()*1e3)}`),f(`artist_${Math.floor(Math.random()*1e3)}@studio.com`),g("password123")},className:"px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-500/15 border border-white/10 text-[10px] font-mono text-purple-400 transition-colors",children:"+ New Artist"})]})]})]}),v.jsx("div",{className:"text-center mt-4",children:v.jsx(Yt,{to:"/",className:"text-xs text-slate-400 hover:text-white transition-colors",children:"← Return to Music Discovery"})})]})]})}var wp={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),R=L.getContext("2d");R.fillRect(0,0,1,1);var J=L.transferToImageBitmap();R.createPattern(J,"no-repeat")}catch{return!1}return!0}();function l(){}function c(L){var R=n.exports.Promise,J=R!==void 0?R:e.Promise;return typeof J=="function"?new J(L):(L(l,l),null)}var d=function(L,R){return{transform:function(J){if(L)return J;if(R.has(J))return R.get(J);var H=new OffscreenCanvas(J.width,J.height),F=H.getContext("2d");return F.drawImage(J,0,0),R.set(J,H),H},clear:function(){R.clear()}}}(o,new Map),f=function(){var L=Math.floor(16.666666666666668),R,J,H={},F=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(G){var ie=Math.random();return H[ie]=requestAnimationFrame(function X(le){F===le||F+L-1<le?(F=le,delete H[ie],G()):H[ie]=requestAnimationFrame(X)}),ie},J=function(G){H[G]&&cancelAnimationFrame(H[G])}):(R=function(G){return setTimeout(G,L)},J=function(G){return clearTimeout(G)}),{frame:R,cancel:J}}(),h=function(){var L,R,J={};function H(F){function G(ie,X){F.postMessage({options:ie||{},callback:X})}F.init=function(X){var le=X.transferControlToOffscreen();F.postMessage({canvas:le},[le])},F.fire=function(X,le,ge){if(R)return G(X,null),R;var Te=Math.random().toString(36).slice(2);return R=c(function(Le){function D(Ie){Ie.data.callback===Te&&(delete J[Te],F.removeEventListener("message",D),R=null,d.clear(),ge(),Le())}F.addEventListener("message",D),G(X,Te),J[Te]=D.bind(null,{data:{callback:Te}})}),R},F.reset=function(){F.postMessage({reset:!0});for(var X in J)J[X](),delete J[X]}}return function(){if(L)return L;if(!i&&s){var F=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([F])))}catch(G){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",G),null}H(L)}return L}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(L,R){return R?R(L):L}function y(L){return L!=null}function p(L,R,J){return _(L&&y(L[R])?L[R]:g[R],J)}function u(L){return L<0?0:Math.floor(L)}function m(L,R){return Math.floor(Math.random()*(R-L))+L}function x(L){return parseInt(L,16)}function S(L){return L.map(C)}function C(L){var R=String(L).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:x(R.substring(0,2)),g:x(R.substring(2,4)),b:x(R.substring(4,6))}}function b(L){var R=p(L,"origin",Object);return R.x=p(R,"x",Number),R.y=p(R,"y",Number),R}function E(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function P(L){var R=L.getBoundingClientRect();L.width=R.width,L.height=R.height}function T(L){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=L,R}function w(L,R,J,H,F,G,ie,X,le){L.save(),L.translate(R,J),L.rotate(G),L.scale(H,F),L.arc(0,0,1,ie,X,le),L.restore()}function U(L){var R=L.angle*(Math.PI/180),J=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-R+(.5*J-Math.random()*J),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function W(L,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var J=R.tick++/R.totalTicks,H=R.x+R.random*R.tiltCos,F=R.y+R.random*R.tiltSin,G=R.wobbleX+R.random*R.tiltCos,ie=R.wobbleY+R.random*R.tiltSin;if(L.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-J)+")",L.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))L.fill(ee(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(G-H)*.1,Math.abs(ie-F)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var X=Math.PI/10*R.wobble,le=Math.abs(G-H)*.1,ge=Math.abs(ie-F)*.1,Te=R.shape.bitmap.width*R.scalar,Le=R.shape.bitmap.height*R.scalar,D=new DOMMatrix([Math.cos(X)*le,Math.sin(X)*le,-Math.sin(X)*ge,Math.cos(X)*ge,R.x,R.y]);D.multiplySelf(new DOMMatrix(R.shape.matrix));var Ie=L.createPattern(d.transform(R.shape.bitmap),"no-repeat");Ie.setTransform(D),L.globalAlpha=1-J,L.fillStyle=Ie,L.fillRect(R.x-Te/2,R.y-Le/2,Te,Le),L.globalAlpha=1}else if(R.shape==="circle")L.ellipse?L.ellipse(R.x,R.y,Math.abs(G-H)*R.ovalScalar,Math.abs(ie-F)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):w(L,R.x,R.y,Math.abs(G-H)*R.ovalScalar,Math.abs(ie-F)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var ve=Math.PI/2*3,Oe=4*R.scalar,Se=8*R.scalar,Fe=R.x,ue=R.y,we=5,N=Math.PI/we;we--;)Fe=R.x+Math.cos(ve)*Se,ue=R.y+Math.sin(ve)*Se,L.lineTo(Fe,ue),ve+=N,Fe=R.x+Math.cos(ve)*Oe,ue=R.y+Math.sin(ve)*Oe,L.lineTo(Fe,ue),ve+=N;else L.moveTo(Math.floor(R.x),Math.floor(R.y)),L.lineTo(Math.floor(R.wobbleX),Math.floor(F)),L.lineTo(Math.floor(G),Math.floor(ie)),L.lineTo(Math.floor(H),Math.floor(R.wobbleY));return L.closePath(),L.fill(),R.tick<R.totalTicks}function j(L,R,J,H,F){var G=R.slice(),ie=L.getContext("2d"),X,le,ge=c(function(Te){function Le(){X=le=null,ie.clearRect(0,0,H.width,H.height),d.clear(),F(),Te()}function D(){i&&!(H.width===r.width&&H.height===r.height)&&(H.width=L.width=r.width,H.height=L.height=r.height),!H.width&&!H.height&&(J(L),H.width=L.width,H.height=L.height),ie.clearRect(0,0,H.width,H.height),G=G.filter(function(Ie){return W(ie,Ie)}),G.length?X=f.frame(D):Le()}X=f.frame(D),le=Le});return{addFettis:function(Te){return G=G.concat(Te),ge},canvas:L,promise:ge,reset:function(){X&&f.cancel(X),le&&le()}}}function Q(L,R){var J=!L,H=!!p(R||{},"resize"),F=!1,G=p(R,"disableForReducedMotion",Boolean),ie=s&&!!p(R||{},"useWorker"),X=ie?h():null,le=J?E:P,ge=L&&X?!!L.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Le;function D(ve,Oe,Se){for(var Fe=p(ve,"particleCount",u),ue=p(ve,"angle",Number),we=p(ve,"spread",Number),N=p(ve,"startVelocity",Number),M=p(ve,"decay",Number),Y=p(ve,"gravity",Number),re=p(ve,"drift",Number),ae=p(ve,"colors",S),ce=p(ve,"ticks",Number),Ue=p(ve,"shapes"),ye=p(ve,"scalar"),be=!!p(ve,"flat"),Ve=b(ve),fe=Fe,Me=[],Ke=L.width*Ve.x,ke=L.height*Ve.y;fe--;)Me.push(U({x:Ke,y:ke,angle:ue,spread:we,startVelocity:N,color:ae[fe%ae.length],shape:Ue[m(0,Ue.length)],ticks:ce,decay:M,gravity:Y,drift:re,scalar:ye,flat:be}));return Le?Le.addFettis(Me):(Le=j(L,Me,le,Oe,Se),Le.promise)}function Ie(ve){var Oe=G||p(ve,"disableForReducedMotion",Boolean),Se=p(ve,"zIndex",Number);if(Oe&&Te)return c(function(N){N()});J&&Le?L=Le.canvas:J&&!L&&(L=T(Se),document.body.appendChild(L)),H&&!ge&&le(L);var Fe={width:L.width,height:L.height};X&&!ge&&X.init(L),ge=!0,X&&(L.__confetti_initialized=!0);function ue(){if(X){var N={getBoundingClientRect:function(){if(!J)return L.getBoundingClientRect()}};le(N),X.postMessage({resize:{width:N.width,height:N.height}});return}Fe.width=Fe.height=null}function we(){Le=null,H&&(F=!1,e.removeEventListener("resize",ue)),J&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,ge=!1)}return H&&!F&&(F=!0,e.addEventListener("resize",ue,!1)),X?X.fire(ve,Fe,we):D(ve,Fe,we)}return Ie.reset=function(){X&&X.reset(),Le&&Le.reset()},Ie}var te;function $(){return te||(te=Q(null,{useWorker:!0,resize:!0})),te}function ee(L,R,J,H,F,G,ie){var X=new Path2D(L),le=new Path2D;le.addPath(X,new DOMMatrix(R));var ge=new Path2D;return ge.addPath(le,new DOMMatrix([Math.cos(ie)*F,Math.sin(ie)*F,-Math.sin(ie)*G,Math.cos(ie)*G,J,H])),ge}function I(L){if(!a)throw new Error("path confetti are not supported in this browser");var R,J;typeof L=="string"?R=L:(R=L.path,J=L.matrix);var H=new Path2D(R),F=document.createElement("canvas"),G=F.getContext("2d");if(!J){for(var ie=1e3,X=ie,le=ie,ge=0,Te=0,Le,D,Ie=0;Ie<ie;Ie+=2)for(var ve=0;ve<ie;ve+=2)G.isPointInPath(H,Ie,ve,"nonzero")&&(X=Math.min(X,Ie),le=Math.min(le,ve),ge=Math.max(ge,Ie),Te=Math.max(Te,ve));Le=ge-X,D=Te-le;var Oe=10,Se=Math.min(Oe/Le,Oe/D);J=[Se,0,0,Se,-Math.round(Le/2+X)*Se,-Math.round(D/2+le)*Se]}return{type:"path",path:R,matrix:J}}function ne(L){var R,J=1,H="#000000",F='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?R=L:(R=L.text,J="scalar"in L?L.scalar:J,F="fontFamily"in L?L.fontFamily:F,H="color"in L?L.color:H);var G=10*J,ie=""+G+"px "+F,X=new OffscreenCanvas(G,G),le=X.getContext("2d");le.font=ie;var ge=le.measureText(R),Te=Math.ceil(ge.actualBoundingBoxRight+ge.actualBoundingBoxLeft),Le=Math.ceil(ge.actualBoundingBoxAscent+ge.actualBoundingBoxDescent),D=2,Ie=ge.actualBoundingBoxLeft+D,ve=ge.actualBoundingBoxAscent+D;Te+=D+D,Le+=D+D,X=new OffscreenCanvas(Te,Le),le=X.getContext("2d"),le.font=ie,le.fillStyle=H,le.fillText(R,Ie,ve);var Oe=1/J;return{type:"bitmap",bitmap:X.transferToImageBitmap(),matrix:[Oe,0,0,Oe,-Te*Oe/2,-Le*Oe/2]}}n.exports=function(){return $().apply(this,arguments)},n.exports.reset=function(){$().reset()},n.exports.create=Q,n.exports.shapeFromPath=I,n.exports.shapeFromText=ne})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),wp,!1);const jP=wp.exports;wp.exports.create;function GP({isOpen:t,onClose:e,onUploadSuccess:n}){const[i,r]=q.useState(""),[s,a]=q.useState(null),[o,l]=q.useState(""),[c,d]=q.useState(!1),[f,h]=q.useState(!1),[g,_]=q.useState(""),[y,p]=q.useState(!1),u=q.useRef(new Audio),m=q.useRef(null);if(!t)return null;const x=E=>{if(!E)return;if(!E.type.startsWith("audio/")&&!E.name.match(/\.(mp3|wav|m4a|aac|flac|ogg)$/i)){_("Please select a valid audio file (.mp3, .wav, .m4a)");return}if(_(""),a(E),!i){const T=E.name.replace(/\.[^/.]+$/,"").replace(/[-_]/g," ");r(T)}const P=URL.createObjectURL(E);l(P),u.current.src=P},S=E=>{E.preventDefault(),p(!1),E.dataTransfer.files&&E.dataTransfer.files[0]&&x(E.dataTransfer.files[0])},C=()=>{if(!o)return;const E=u.current;c?(E.pause(),d(!1)):(E.play().then(()=>d(!0)).catch(console.error),E.onended=()=>d(!1))},b=async E=>{var P,T;if(E.preventDefault(),!i.trim()){_("Please enter a track title");return}if(!s){_("Please upload an audio file");return}h(!0),_("");try{const w=new FormData;w.append("title",i.trim()),w.append("music",s);const U=await Dn.post("/music/upload",w,{headers:{"Content-Type":"multipart/form-data"}});u.current.pause(),d(!1);try{jP({particleCount:120,spread:70,origin:{y:.6},colors:["#10b981","#06b6d4","#a855f7"]})}catch{}n&&n(U.data.music),e()}catch(w){console.error("Upload error:",w),_(((T=(P=w.response)==null?void 0:P.data)==null?void 0:T.message)||"Failed to upload song. Please try again.")}finally{h(!1)}};return v.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:v.jsxs("div",{className:"relative w-full max-w-lg rounded-3xl glass-card border border-purple-500/30 p-6 sm:p-8 shadow-2xl animate-fade-in",children:[v.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"}),v.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400",children:v.jsx(Jr,{className:"w-5 h-5"})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-white",children:"Upload New Track"}),v.jsx("p",{className:"text-xs text-purple-300/80 font-mono",children:"Artist Studio Release"})]})]}),v.jsx("button",{onClick:()=>{u.current.pause(),e()},className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:v.jsx(ap,{className:"w-5 h-5"})})]}),g&&v.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-300 text-xs",children:[v.jsx(rp,{className:"w-4 h-4 shrink-0"}),v.jsx("span",{children:g})]}),v.jsxs("form",{onSubmit:b,className:"space-y-5",children:[v.jsxs("div",{onDragOver:E=>{E.preventDefault(),p(!0)},onDragLeave:()=>p(!1),onDrop:S,onClick:()=>{var E;return(E=m.current)==null?void 0:E.click()},className:`relative rounded-2xl border-2 border-dashed p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${y?"border-cyan-400 bg-cyan-500/10 scale-[1.01]":s?"border-emerald-500/50 bg-emerald-500/5":"border-white/15 bg-slate-900/40 hover:border-purple-500/40 hover:bg-purple-500/5"}`,children:[v.jsx("input",{ref:m,type:"file",accept:"audio/*,.mp3,.wav,.m4a",onChange:E=>x(E.target.files[0]),className:"hidden"}),s?v.jsxs("div",{className:"flex flex-col items-center gap-2",children:[v.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400",children:v.jsx(uT,{className:"w-6 h-6"})}),v.jsx("p",{className:"text-sm font-semibold text-white truncate max-w-xs",children:s.name}),v.jsx("span",{className:"text-xs font-mono text-slate-400",children:ET(s.size)}),v.jsxs("button",{type:"button",onClick:E=>{E.stopPropagation(),C()},className:"mt-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono transition-all",children:[c?v.jsx(Zr,{className:"w-3.5 h-3.5 fill-current"}):v.jsx(Pi,{className:"w-3.5 h-3.5 fill-current"}),v.jsx("span",{children:c?"Pause Audio Preview":"Test Audio Preview"})]})]}):v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3 shadow-inner",children:v.jsx(pn,{className:"w-6 h-6 animate-spin-slow"})}),v.jsx("p",{className:"text-sm font-semibold text-white",children:"Drag & drop your audio file here"}),v.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Supports MP3, WAV, M4A, FLAC"}),v.jsx("span",{className:"mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300",children:"Browse Device"})]})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Song Title"}),v.jsx("input",{type:"text",required:!0,placeholder:"e.g. Midnight Cyber Symphony",value:i,onChange:E=>r(E.target.value),className:"w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"})]}),v.jsx("button",{type:"submit",disabled:f,className:"w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2",children:f?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"}),v.jsx("span",{children:"Publishing to Cloud..."})]}):v.jsxs(v.Fragment,{children:[v.jsx(Po,{className:"w-4 h-4"}),v.jsx("span",{children:"Publish Track"})]})})]})]})})}function WP({isOpen:t,onClose:e,myTracks:n=[],onAlbumCreated:i}){const[r,s]=q.useState(""),[a,o]=q.useState([]),[l,c]=q.useState(!1),[d,f]=q.useState("");if(!t)return null;const h=_=>{a.includes(_)?o(a.filter(y=>y!==_)):o([...a,_])},g=async _=>{var y,p;if(_.preventDefault(),!r.trim()){f("Please provide an album title");return}c(!0),f("");try{const u=await Dn.post("/music/album",{title:r.trim(),musics:a});i&&i(u.data.album),e()}catch(u){console.error("Create album error:",u),f(((p=(y=u.response)==null?void 0:y.data)==null?void 0:p.message)||"Failed to create album")}finally{c(!1)}};return v.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:v.jsxs("div",{className:"relative w-full max-w-md rounded-3xl glass-card border border-cyan-500/30 p-6 sm:p-8 shadow-2xl animate-fade-in",children:[v.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400",children:v.jsx(y_,{className:"w-5 h-5"})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-white",children:"Create New Album"}),v.jsx("p",{className:"text-xs text-cyan-300/80 font-mono",children:"Compile Your Discography"})]})]}),v.jsx("button",{onClick:e,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:v.jsx(ap,{className:"w-5 h-5"})})]}),d&&v.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-300 text-xs",children:[v.jsx(rp,{className:"w-4 h-4 shrink-0"}),v.jsx("span",{children:d})]}),v.jsxs("form",{onSubmit:g,className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Album Title"}),v.jsx("input",{type:"text",required:!0,placeholder:"e.g. Neon Horizon EP",value:r,onChange:_=>s(_.target.value),className:"w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex justify-between",children:v.jsxs("span",{children:["Select Tracks (",a.length," chosen)"]})}),v.jsx("div",{className:"max-h-48 overflow-y-auto space-y-1.5 pr-1",children:n.length===0?v.jsx("p",{className:"text-xs text-slate-400 py-3 text-center",children:"You haven't uploaded any tracks yet. Upload songs first!"}):n.map(_=>{const y=_._id||_.id,p=a.includes(y);return v.jsxs("div",{onClick:()=>h(y),className:`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors ${p?"bg-cyan-500/20 border border-cyan-500/40 text-cyan-200":"bg-slate-900/50 hover:bg-white/5 text-slate-300"}`,children:[v.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[v.jsx(sp,{className:"w-3.5 h-3.5 shrink-0 text-slate-400"}),v.jsx("span",{className:"text-xs font-medium truncate",children:_.title})]}),v.jsx("div",{className:`w-4 h-4 rounded border flex items-center justify-center ${p?"bg-cyan-400 border-cyan-400 text-black":"border-slate-500"}`,children:p&&v.jsx(cT,{className:"w-3 h-3 stroke-[3]"})})]},y)})})]}),v.jsx("button",{type:"submit",disabled:l,className:"w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-bold text-sm tracking-wider uppercase shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2",children:l?v.jsx("div",{className:"w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"}):v.jsxs(v.Fragment,{children:[v.jsx(Po,{className:"w-4 h-4"}),v.jsx("span",{children:"Create Album"})]})})]})]})})}function XP(){const{user:t,isAuthenticated:e,isArtist:n}=Yc(),{playSong:i,currentSong:r,isPlaying:s,togglePlay:a}=ui(),o=To(),[l,c]=q.useState([]),[d,f]=q.useState(!0),[h,g]=q.useState(!1),[_,y]=q.useState(!1),p=async()=>{var m;f(!0);try{const x=await Dn.get("/music/my-tracks");(m=x.data)!=null&&m.musics&&c(x.data.musics)}catch(x){console.warn("Fetch my tracks error:",x.message)}finally{f(!1)}};q.useEffect(()=>{if(!e){o("/login");return}n?p():f(!1)},[e,n,o]);const u=m=>{c(x=>[m,...x])};return n?v.jsxs("div",{className:"min-h-screen bg-[#060911] text-white flex flex-col pb-32",children:[v.jsx(js,{}),v.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8",children:[v.jsxs("div",{className:"relative rounded-3xl overflow-hidden glass-card border border-purple-500/25 p-6 sm:p-10 mb-10 shadow-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/40",children:[v.jsxs("div",{className:"relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",children:[v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] shadow-xl shadow-purple-500/30",children:v.jsx("div",{className:"w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center",children:v.jsx(Po,{className:"w-8 h-8 sm:w-10 sm:h-10 text-cyan-400"})})}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-widest",children:"ARTIST STUDIO"}),v.jsx("span",{className:"px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-[10px] font-mono text-purple-300",children:"Verified Creator"})]}),v.jsxs("h1",{className:"text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']",children:[t==null?void 0:t.username,"'s Studio"]}),v.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Upload audio master tracks, build albums, and broadcast your sound."})]})]}),v.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[v.jsxs("button",{onClick:()=>g(!0),className:"flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 hover:scale-105 transition-all",children:[v.jsx(Jr,{className:"w-4 h-4"}),v.jsx("span",{children:"Upload Song"})]}),v.jsxs("button",{onClick:()=>y(!0),className:"flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all",children:[v.jsx(y_,{className:"w-4 h-4 text-cyan-400"}),v.jsx("span",{children:"Create Album"})]})]})]}),v.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10",children:[v.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[v.jsx("span",{className:"text-[10px] font-mono uppercase text-slate-400",children:"Total Uploaded Tracks"}),v.jsx("p",{className:"text-xl font-bold text-white mt-0.5",children:l.length})]}),v.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[v.jsx("span",{className:"text-[10px] font-mono uppercase text-slate-400",children:"Studio Status"}),v.jsx("p",{className:"text-xl font-bold text-emerald-400 mt-0.5",children:"Online & Active"})]}),v.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1",children:[v.jsx("span",{className:"text-[10px] font-mono uppercase text-slate-400",children:"Spatial Audio Support"}),v.jsx("p",{className:"text-xl font-bold text-cyan-400 mt-0.5",children:"3D WebGL Enabled"})]})]})]}),v.jsxs("section",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-6",children:[v.jsxs("div",{className:"flex items-center gap-2.5",children:[v.jsx(sp,{className:"w-5 h-5 text-cyan-400"}),v.jsx("h2",{className:"text-xl font-bold tracking-tight text-white font-['Space_Grotesk']",children:"Your Uploaded Tracks"}),v.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["(",l.length,")"]})]}),v.jsx("button",{onClick:()=>g(!0),className:"text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1",children:"+ Upload Another"})]}),d?v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[...Array(3)].map((m,x)=>v.jsx("div",{className:"h-24 rounded-2xl bg-white/5 animate-pulse"},x))}):l.length>0?v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:l.map((m,x)=>{const S=((r==null?void 0:r._id)||(r==null?void 0:r.id))===((m==null?void 0:m._id)||(m==null?void 0:m.id)),C=S&&s,b=ur((m==null?void 0:m._id)||(m==null?void 0:m.title),x);return v.jsxs(xo,{glowColor:"cyan",className:"p-3.5 flex items-center justify-between gap-3 group",children:[v.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[v.jsxs("div",{className:"relative w-14 h-14 rounded-xl overflow-hidden bg-slate-900 shrink-0",children:[v.jsx("img",{src:b,alt:m.title,className:"w-full h-full object-cover"}),v.jsx("button",{onClick:()=>{S?a():i(m,l)},className:"absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:C?v.jsx(Zr,{className:"w-5 h-5 text-emerald-400 fill-current"}):v.jsx(Pi,{className:"w-5 h-5 text-white fill-current ml-0.5"})})]}),v.jsxs("div",{className:"min-w-0",children:[v.jsx("h4",{className:`text-sm font-bold truncate ${S?"text-cyan-400":"text-white"}`,children:m.title}),v.jsx("div",{className:"flex items-center gap-2 text-[11px] text-slate-400 mt-0.5",children:v.jsx("span",{className:"font-mono text-emerald-400",children:"Stream Ready"})})]})]}),v.jsx("button",{onClick:()=>{S?a():i(m,l)},className:`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform ${C?"bg-cyan-400 text-black shadow-lg shadow-cyan-400/40":"bg-white/10 hover:bg-white/20 text-white"}`,children:C?v.jsx(Zr,{className:"w-4 h-4 fill-current"}):v.jsx(Pi,{className:"w-4 h-4 fill-current ml-0.5"})})]},m._id||m.id||x)})}):v.jsxs("div",{className:"rounded-3xl glass-card border border-white/10 p-12 text-center",children:[v.jsx(pn,{className:"w-12 h-12 text-purple-400 mx-auto mb-3 animate-spin-slow"}),v.jsx("h3",{className:"text-base font-bold text-white mb-1",children:"Your Discography is Empty"}),v.jsx("p",{className:"text-xs text-slate-400 max-w-sm mx-auto mb-6",children:"Upload your first audio file (.mp3, .wav, .m4a) to start streaming on AURA 3D."}),v.jsxs("button",{onClick:()=>g(!0),className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform",children:[v.jsx(Jr,{className:"w-4 h-4"}),v.jsx("span",{children:"Upload First Track"})]})]})]})]}),v.jsx(GP,{isOpen:h,onClose:()=>g(!1),onUploadSuccess:u}),v.jsx(WP,{isOpen:_,onClose:()=>y(!1),myTracks:l,onAlbumCreated:m=>{p()}})]}):v.jsxs("div",{className:"min-h-screen bg-[#060911] text-white flex flex-col pb-24",children:[v.jsx(js,{}),v.jsx("div",{className:"flex-1 max-w-lg mx-auto px-4 flex items-center justify-center",children:v.jsxs(xo,{glowColor:"purple",className:"p-8 text-center",children:[v.jsx(wT,{className:"w-12 h-12 text-amber-400 mx-auto mb-4"}),v.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Artist Access Required"}),v.jsxs("p",{className:"text-xs text-slate-400 mb-6",children:["You are currently logged in as a ",v.jsx("strong",{children:"Listener"}),". To release songs and create albums, sign in or register with an ",v.jsx("strong",{children:"Artist"})," account."]}),v.jsx(Yt,{to:"/login",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform",children:"Switch to Artist Account"})]})})]})}function qP(){var g;const{id:t}=vM(),{playSong:e,currentSong:n,isPlaying:i,togglePlay:r}=ui(),[s,a]=q.useState(null),[o,l]=q.useState(!0);if(q.useEffect(()=>{async function _(){var y;l(!0);try{const p=await Dn.get(`/music/albums/${t}`);(y=p.data)!=null&&y.album&&a(p.data.album)}catch(p){console.warn("Fetch album error:",p.message)}finally{l(!1)}}t&&_()},[t]),o)return v.jsxs("div",{className:"min-h-screen bg-[#060911] text-white flex flex-col pb-24",children:[v.jsx(js,{}),v.jsx("div",{className:"flex-1 flex items-center justify-center",children:v.jsx(pn,{className:"w-10 h-10 text-emerald-400 animate-spin"})})]});if(!s)return v.jsxs("div",{className:"min-h-screen bg-[#060911] text-white flex flex-col pb-24",children:[v.jsx(js,{}),v.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-4",children:[v.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Album Not Found"}),v.jsx(Yt,{to:"/",className:"text-sm text-emerald-400 hover:underline",children:"← Return to Discovery"})]})]});const c=s.musics||[],d=ur(s._id||s.title,2),f=typeof s.artist=="object"?(g=s.artist)==null?void 0:g.username:"Artist",h=()=>{c.length>0&&e(c[0],c)};return v.jsxs("div",{className:"min-h-screen bg-[#060911] text-white flex flex-col pb-32",children:[v.jsx(js,{}),v.jsxs("main",{className:"flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6",children:[v.jsxs(Yt,{to:"/",className:"inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-6 transition-colors",children:[v.jsx(oT,{className:"w-4 h-4"}),v.jsx("span",{children:"Back to All Music"})]}),v.jsxs("div",{className:"relative rounded-3xl overflow-hidden glass-card border border-white/10 p-6 sm:p-8 mb-8 shadow-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8",children:[v.jsxs("div",{className:"relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group",children:[v.jsx("img",{src:d,alt:s.title,className:"w-full h-full object-cover"}),v.jsx("div",{className:"absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:v.jsx(pn,{className:"w-12 h-12 text-white animate-spin-slow"})})]}),v.jsxs("div",{className:"flex-1 text-center sm:text-left",children:[v.jsx("span",{className:"px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-[10px] font-mono text-purple-300",children:"STUDIO ALBUM"}),v.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white mt-2 font-['Space_Grotesk'] tracking-tight",children:s.title}),v.jsxs("p",{className:"text-sm text-slate-300 mt-1 flex items-center justify-center sm:justify-start gap-2",children:[v.jsxs("span",{children:["By ",v.jsx("strong",{children:f})]}),v.jsx("span",{children:"•"}),v.jsxs("span",{className:"font-mono text-slate-400",children:[c.length," Tracks"]})]}),v.jsx("div",{className:"mt-6 flex items-center justify-center sm:justify-start gap-3",children:c.length>0&&v.jsxs("button",{onClick:h,className:"flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all",children:[v.jsx(Pi,{className:"w-4 h-4 fill-current"}),v.jsx("span",{children:"Play Album"})]})})]})]}),v.jsxs("section",{className:"glass-card rounded-2xl border border-white/10 p-4 sm:p-6 shadow-xl",children:[v.jsxs("h3",{className:"text-base font-bold text-white mb-4 flex items-center gap-2",children:[v.jsx(S_,{className:"w-4 h-4 text-purple-400"}),v.jsx("span",{children:"Tracklist"})]}),c.length>0?v.jsx("div",{className:"space-y-1.5",children:c.map((_,y)=>{const p=((n==null?void 0:n._id)||(n==null?void 0:n.id))===((_==null?void 0:_._id)||(_==null?void 0:_.id)),u=p&&i;return v.jsxs("div",{onClick:()=>e(_,c),className:`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${p?"bg-emerald-500/20 border border-emerald-500/40 text-emerald-300":"hover:bg-white/5 text-slate-300"}`,children:[v.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[v.jsx("span",{className:"w-6 text-xs font-mono text-slate-500 text-center",children:y+1}),v.jsx("button",{onClick:m=>{m.stopPropagation(),p?r():e(_,c)},className:`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${u?"bg-emerald-500 text-black":"bg-white/10 text-white hover:bg-white/20"}`,children:u?v.jsx(Zr,{className:"w-3.5 h-3.5 fill-current"}):v.jsx(Pi,{className:"w-3.5 h-3.5 fill-current ml-0.5"})}),v.jsxs("div",{className:"min-w-0",children:[v.jsx("p",{className:`text-sm font-semibold truncate ${p?"text-emerald-400":"text-white"}`,children:_.title}),v.jsx("p",{className:"text-xs text-slate-400 truncate",children:f})]})]}),v.jsx("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-500",children:v.jsx(sp,{className:"w-3.5 h-3.5"})})]},_._id||_.id||y)})}):v.jsx("p",{className:"text-xs text-slate-400 py-6 text-center",children:"No tracks added to this album yet."})]})]})]})}function $P(){var C;const{currentSong:t,isPlaying:e,currentTime:n,duration:i,volume:r,isMuted:s,isLoop:a,isShuffle:o,togglePlay:l,nextSong:c,prevSong:d,seek:f,changeVolume:h,toggleMute:g,toggleLoop:_,toggleShuffle:y,toggleFullscreen3D:p}=ui();if(!t)return null;const u=ur(t._id||t.title),m=i?n/i*100:0,x=b=>{const P=parseFloat(b.target.value)/100*i;f(P)},S=typeof(t==null?void 0:t.artist)=="object"?((C=t==null?void 0:t.artist)==null?void 0:C.username)||"Unknown Artist":"Featured Artist";return v.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 px-2 sm:px-4 pb-2 sm:pb-3 pointer-events-none",children:v.jsx("div",{className:"max-w-7xl mx-auto rounded-2xl glass-card backdrop-blur-2xl border border-white/15 bg-slate-950/85 p-3 sm:p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] pointer-events-auto",children:v.jsxs("div",{className:"flex items-center justify-between gap-2 sm:gap-6",children:[v.jsxs("div",{className:"flex items-center gap-3 min-w-0 max-w-[200px] sm:max-w-[280px]",children:[v.jsxs("div",{className:"relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 group cursor-pointer",onClick:p,children:[v.jsx("img",{src:u,alt:t.title,className:"w-full h-full object-cover"}),v.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:v.jsx(xT,{className:"w-5 h-5 text-white"})})]}),v.jsx("div",{className:"hidden md:block shrink-0 -ml-5 z-[-1]",children:v.jsx("div",{className:`w-10 h-10 rounded-full bg-zinc-900 border border-white/20 vinyl-grooves flex items-center justify-center ${e?"animate-spin":""}`,children:v.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500/80"})})}),v.jsxs("div",{className:"flex flex-col min-w-0",children:[v.jsx("span",{className:"text-sm font-bold text-white truncate hover:underline cursor-pointer",onClick:p,children:t.title}),v.jsx("span",{className:"text-xs text-slate-400 truncate",children:S})]})]}),v.jsxs("div",{className:"flex-1 max-w-2xl flex flex-col items-center gap-1.5",children:[v.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[v.jsx("button",{onClick:y,title:"Shuffle",className:`p-1.5 rounded-full transition-colors ${o?"text-emerald-400 bg-emerald-500/15":"text-slate-400 hover:text-white"}`,children:v.jsx(MT,{className:"w-4 h-4"})}),v.jsx("button",{onClick:d,title:"Previous",className:"p-1 text-slate-300 hover:text-white transition-colors",children:v.jsx(w_,{className:"w-5 h-5 fill-current"})}),v.jsx("button",{onClick:l,title:e?"Pause":"Play",className:"w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-black flex items-center justify-center hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 transition-transform",children:e?v.jsx(Zr,{className:"w-5 h-5 fill-current"}):v.jsx(Pi,{className:"w-5 h-5 fill-current ml-0.5"})}),v.jsx("button",{onClick:c,title:"Next",className:"p-1 text-slate-300 hover:text-white transition-colors",children:v.jsx(M_,{className:"w-5 h-5 fill-current"})}),v.jsx("button",{onClick:_,title:"Repeat",className:`p-1.5 rounded-full transition-colors ${a?"text-emerald-400 bg-emerald-500/15":"text-slate-400 hover:text-white"}`,children:v.jsx(yT,{className:"w-4 h-4"})})]}),v.jsxs("div",{className:"w-full flex items-center gap-2 text-xs font-mono text-slate-400 select-none",children:[v.jsx("span",{className:"w-10 text-right",children:Sc(n)}),v.jsx("div",{className:"relative flex-1 group py-1 flex items-center",children:v.jsx("input",{type:"range",min:"0",max:"100",step:"0.1",value:isNaN(m)?0:m,onChange:x,className:"w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-400 group-hover:h-2 transition-all"})}),v.jsx("span",{className:"w-10",children:Sc(i)})]})]}),v.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[v.jsxs("div",{className:"hidden lg:flex items-center gap-2",children:[v.jsx("button",{onClick:g,className:"text-slate-400 hover:text-white transition-colors",children:s||r===0?v.jsx(b_,{className:"w-4 h-4 text-rose-400"}):v.jsx(T_,{className:"w-4 h-4"})}),v.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:s?0:r,onChange:b=>h(parseFloat(b.target.value)),className:"w-20 h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-400"})]}),v.jsxs("button",{onClick:p,title:"Launch Fullscreen 3D Stage",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase transition-all hover:scale-105 shadow-md shadow-emerald-500/20",children:[v.jsx(pn,{className:`w-4 h-4 text-emerald-400 ${e?"animate-spin":""}`}),v.jsx("span",{className:"hidden sm:inline",children:"3D Stage"})]})]})]})})})}function YP({coverUrl:t=null,songTitle:e="Untitled Track",artistName:n="Unknown Artist",className:i="w-full h-full min-h-[350px]"}){const r=q.useRef(null),{isPlaying:s,getAudioFrequencyData:a,currentSong:o}=ui(),l=t||ur(o?o._id||o.title:"default");return q.useEffect(()=>{const c=r.current;if(!c)return;const d=new nu,f=new $t(45,c.clientWidth/c.clientHeight,.1,1e3);f.position.set(0,18,20),f.lookAt(0,0,0);const h=new tu({alpha:!0,antialias:!0});h.setSize(c.clientWidth,c.clientHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.shadowMap.enabled=!0,h.shadowMap.type=C_,c.appendChild(h.domElement);const g=new kP(16777215,.7);d.add(g);const _=new m0(1096065,2);_.position.set(10,20,15),_.castShadow=!0,d.add(_);const y=new m0(440020,1.8);y.position.set(-15,15,-10),d.add(y);const p=new OP(11032055,2,30);p.position.set(0,5,5),d.add(p);const u=new fr(16,1.2,14),m=new xi({color:790557,roughness:.35,metalness:.75}),x=new ht(u,m);x.position.y=-.6,x.receiveShadow=!0,d.add(x);const S=new ni(6,6.2,.4,64),C=new xi({color:2371138,roughness:.2,metalness:.9}),b=new ht(S,C);b.position.set(-1.2,.2,0),x.add(b);const E=new kr;E.position.set(-1.2,.45,0),d.add(E);const P=new ni(5.6,5.6,.08,64),T=new xi({color:461070,roughness:.4,metalness:.85}),w=new ht(P,T);w.castShadow=!0,E.add(w);for(let N=2.4;N<=5.3;N+=.35){const M=new Cc(N,N+.05,64),Y=new Vr({color:2042173,side:qn,transparent:!0,opacity:.4}),re=new ht(M,Y);re.rotation.x=-Math.PI/2,re.position.y=.045,E.add(re)}new UP().load(l,N=>{const M=new ni(1.8,1.8,.09,32),Y=new Vr({map:N}),re=new ht(M,Y);E.add(re)},void 0,()=>{const N=new ni(1.8,1.8,.09,32),M=new xi({color:1096065,roughness:.5}),Y=new ht(N,M);E.add(Y)});const W=new ni(.2,.2,.6,16),j=new xi({color:14870768,metalness:.95,roughness:.1}),Q=new ht(W,j);Q.position.y=.3,E.add(Q);const te=new kr;te.position.set(5.5,.6,-4.5),d.add(te);const $=new ni(.6,.8,1.2,24),ee=new xi({color:3359061,metalness:.9,roughness:.2}),I=new ht($,ee);te.add(I);const ne=new kr;ne.position.set(0,.8,0),te.add(ne);const L=new ni(.1,.1,8.5,16),R=new xi({color:13621468,metalness:.95,roughness:.15}),J=new ht(L,R);J.rotation.x=Math.PI/2,J.position.set(0,0,4),ne.add(J);const H=new ni(.5,.5,.8,24),F=new xi({color:1096065,metalness:.8,roughness:.3}),G=new ht(H,F);G.rotation.x=Math.PI/2,G.position.set(0,0,-.6),ne.add(G);const ie=new fr(.4,.25,.9),X=new xi({color:988970,metalness:.5,roughness:.4}),le=new ht(ie,X);le.position.set(-.2,-.15,8.2),ne.add(le);const ge=new Cc(6.2,7.5,32),Te=new Vr({color:1096065,side:qn,transparent:!0,opacity:.35}),Le=new ht(ge,Te);Le.rotation.x=-Math.PI/2,Le.position.set(-1.2,.05,0),d.add(Le);let D=0,Ie=0;const ve=N=>{const M=c.getBoundingClientRect(),Y=(N.clientX-M.left)/M.width-.5,re=(N.clientY-M.top)/M.height-.5;D=Y*.4,Ie=re*.25};c.addEventListener("mousemove",ve);const Oe=()=>{c&&(f.aspect=c.clientWidth/c.clientHeight,f.updateProjectionMatrix(),h.setSize(c.clientWidth,c.clientHeight))};window.addEventListener("resize",Oe);let Se,Fe=0;const ue=-.42,we=()=>{Se=requestAnimationFrame(we);const N=a();let M=0;s&&N&&N.length>0&&(M=(N[2]||0)/255),s?(E.rotation.y+=.035,Fe+=(ue-Fe)*.05):Fe+=(0-Fe)*.05,ne.rotation.y=Fe,Le.material.opacity=s?.25+M*.5:.1,p.intensity=s?1.5+M*2.5:.8,f.position.x+=(D*10-f.position.x)*.05,f.position.y+=(18+Ie*5-f.position.y)*.05,f.lookAt(0,0,0),h.render(d,f)};return we(),()=>{cancelAnimationFrame(Se),c.removeEventListener("mousemove",ve),window.removeEventListener("resize",Oe),c&&h.domElement&&c.removeChild(h.domElement),d.clear(),h.dispose()}},[l,s,a,o]),v.jsxs("div",{className:`relative flex items-center justify-center select-none ${i}`,children:[v.jsx("div",{ref:r,className:"w-full h-full cursor-grab active:cursor-grabbing"}),v.jsxs("div",{className:"absolute bottom-3 left-4 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-2 shadow-lg pointer-events-none",children:[v.jsx("span",{className:`w-2 h-2 rounded-full ${s?"bg-emerald-400 animate-ping":"bg-slate-500"}`}),v.jsx("span",{children:s?"33⅓ RPM • REAL-TIME 3D":"TURNTABLE STANDBY"})]})]})}function KP(){var E;const{currentSong:t,isPlaying:e,currentTime:n,duration:i,volume:r,isMuted:s,queue:a,queueIndex:o,togglePlay:l,nextSong:c,prevSong:d,seek:f,changeVolume:h,toggleMute:g,playSong:_,isFullscreen3D:y,toggleFullscreen3D:p}=ui(),[u,m]=q.useState(!1);if(!y||!t)return null;const x=ur(t._id||t.title),S=i?n/i*100:0,C=P=>{const w=parseFloat(P.target.value)/100*i;f(w)},b=typeof(t==null?void 0:t.artist)=="object"?((E=t==null?void 0:t.artist)==null?void 0:E.username)||"Unknown Artist":"Featured Artist";return v.jsxs("div",{className:"fixed inset-0 z-50 bg-[#05070e]/95 backdrop-blur-3xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in select-none",children:[v.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"}),v.jsx("div",{className:"absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"}),v.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400",children:v.jsx(pn,{className:`w-5 h-5 ${e?"animate-spin":""}`})}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-widest",children:"3D TURNTABLE STAGE"}),v.jsx("span",{className:"px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-300",children:"Hi-Fi WebGL"})]}),v.jsx("h2",{className:"text-lg font-bold text-white tracking-wide",children:t.title})]})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("button",{onClick:()=>m(!u),className:`p-2.5 rounded-xl border border-white/10 transition-colors ${u?"bg-emerald-500/20 text-emerald-400":"bg-slate-900/60 text-slate-300 hover:text-white"}`,title:"Toggle Queue",children:v.jsx(hT,{className:"w-5 h-5"})}),v.jsx("button",{onClick:p,className:"p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors",title:"Exit 3D Stage",children:v.jsx(ap,{className:"w-5 h-5"})})]})]}),v.jsxs("div",{className:"relative flex-1 flex items-center justify-center my-2 overflow-hidden",children:[v.jsx("div",{className:"w-full max-w-4xl h-[420px] sm:h-[500px]",children:v.jsx(YP,{coverUrl:x,songTitle:t.title,artistName:b})}),u&&v.jsxs("div",{className:"absolute right-0 top-0 bottom-0 w-80 rounded-2xl glass-card border border-white/10 p-4 shadow-2xl flex flex-col z-20 animate-fade-in",children:[v.jsxs("div",{className:"flex items-center justify-between mb-3 pb-2 border-b border-white/10",children:[v.jsx("span",{className:"text-sm font-bold text-white",children:"Up Next"}),v.jsxs("span",{className:"text-xs font-mono text-emerald-400",children:[a.length," Tracks"]})]}),v.jsx("div",{className:"flex-1 overflow-y-auto space-y-2 pr-1",children:a.map((P,T)=>{var U;const w=T===o;return v.jsxs("div",{onClick:()=>_(P,a),className:`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all ${w?"bg-emerald-500/20 border border-emerald-500/40 text-emerald-300":"hover:bg-white/5 text-slate-300"}`,children:[v.jsx("span",{className:"w-4 text-xs font-mono text-slate-500",children:T+1}),v.jsxs("div",{className:"flex-1 min-w-0",children:[v.jsx("p",{className:"text-xs font-semibold truncate",children:P.title}),v.jsx("p",{className:"text-[10px] text-slate-400 truncate",children:typeof P.artist=="object"?(U=P.artist)==null?void 0:U.username:"Artist"})]}),w&&e&&v.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"})]},P._id||P.id||T)})})]})]}),v.jsx("div",{className:"relative z-10 w-full max-w-2xl mx-auto h-16 sm:h-20 mb-2",children:v.jsx(uy,{barCount:48})}),v.jsx("div",{className:"relative z-10 max-w-2xl mx-auto w-full glass-card p-4 rounded-2xl border border-white/10 shadow-2xl",children:v.jsxs("div",{className:"flex flex-col gap-3",children:[v.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-slate-400",children:[v.jsx("span",{children:Sc(n)}),v.jsx("input",{type:"range",min:"0",max:"100",step:"0.1",value:isNaN(S)?0:S,onChange:C,className:"w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-400"}),v.jsx("span",{children:Sc(i)})]}),v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("button",{onClick:g,className:"text-slate-400 hover:text-white transition-colors",children:s||r===0?v.jsx(b_,{className:"w-4 h-4 text-rose-400"}):v.jsx(T_,{className:"w-4 h-4"})}),v.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:s?0:r,onChange:P=>h(parseFloat(P.target.value)),className:"w-16 sm:w-24 h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-400"})]}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("button",{onClick:d,className:"p-2 text-slate-300 hover:text-white transition-colors",title:"Previous Track",children:v.jsx(w_,{className:"w-5 h-5 fill-current"})}),v.jsx("button",{onClick:l,className:"w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/40 transition-transform",title:e?"Pause":"Play",children:e?v.jsx(Zr,{className:"w-6 h-6 fill-current"}):v.jsx(Pi,{className:"w-6 h-6 fill-current ml-0.5"})}),v.jsx("button",{onClick:c,className:"p-2 text-slate-300 hover:text-white transition-colors",title:"Next Track",children:v.jsx(M_,{className:"w-5 h-5 fill-current"})})]}),v.jsxs("div",{className:"text-right hidden sm:block",children:[v.jsx("p",{className:"text-xs font-bold text-white truncate max-w-[140px]",children:t.title}),v.jsx("p",{className:"text-[10px] text-slate-400 truncate max-w-[140px]",children:b})]})]})]})})]})}function ZP(){return v.jsx(VM,{children:v.jsx(nT,{children:v.jsx(iT,{children:v.jsxs("div",{className:"min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black",children:[v.jsxs(IM,{children:[v.jsx(Ms,{path:"/",element:v.jsx(zP,{})}),v.jsx(Ms,{path:"/login",element:v.jsx(VP,{})}),v.jsx(Ms,{path:"/artist/studio",element:v.jsx(XP,{})}),v.jsx(Ms,{path:"/album/:id",element:v.jsx(qP,{})}),v.jsx(Ms,{path:"*",element:v.jsx(DM,{to:"/",replace:!0})})]}),v.jsx($P,{}),v.jsx(KP,{})]})})})})}xd.createRoot(document.getElementById("root")).render(v.jsx(nh.StrictMode,{children:v.jsx(ZP,{})}));
