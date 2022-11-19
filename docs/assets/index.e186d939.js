(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const x={};function z(e){x.context=e}const Ve=(e,t)=>e===t,be=Symbol("solid-proxy"),te={equals:Ve};let Fe=Le;const $=1,ne=2,xe={owned:null,cleanups:null,context:null,owner:null},ie={};var y=null;let j=null,w=null,S=null,I=null,fe=0;function Ae(e,t){const n=w,r=y,o=e.length===0,s=o?xe:{owned:null,cleanups:null,context:null,owner:t||r},l=o?e:()=>e(()=>P(()=>ge(s)));y=s,w=null;try{return L(l,!0)}finally{w=n,y=r}}function R(e,t){t=t?Object.assign({},te,t):te;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Re(n,o));return[Ce.bind(n),r]}function ye(e,t,n){const r=pe(e,t,!0,$);J(r)}function G(e,t,n){const r=pe(e,t,!1,$);J(r)}function A(e,t,n){n=n?Object.assign({},te,n):te;const r=pe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,J(r),Ce.bind(r)}function We(e,t,n){let r,o,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,s=t||{}):(r=e,o=t,s=n||{});let l=null,i=ie,c=null,u=!1,f="initialValue"in s,h=typeof r=="function"&&A(r);const m=new Set,[v,g]=(s.storage||R)(s.initialValue),[T,k]=R(void 0),[_,U]=R(void 0,{equals:!1}),[N,O]=R(f?"ready":"unresolved");if(x.context){c=`${x.context.id}${x.context.count++}`;let a;s.ssrLoadFrom==="initial"?i=s.initialValue:x.load&&(a=x.load(c))&&(i=a[0])}function q(a,d,b,C){return l===a&&(l=null,f=!0,(a===i||d===i)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(C,{value:d})),i=ie,Q(d,b)),d}function Q(a,d){L(()=>{d||g(()=>a),O(d?"errored":"ready"),k(d);for(const b of m.keys())b.decrement();m.clear()},!1)}function V(){const a=Qe,d=v(),b=T();if(b&&!l)throw b;return w&&!w.user&&a&&ye(()=>{_(),l&&(a.resolved||m.has(a)||(a.increment(),m.add(a)))}),d}function p(a=!0){if(a!==!1&&u)return;u=!1;const d=h?h():r;if(d==null||d===!1){q(l,P(v));return}const b=i!==ie?i:P(()=>o(d,{value:v(),refetching:a}));return typeof b!="object"||!(b&&"then"in b)?(q(l,b),b):(l=b,u=!0,queueMicrotask(()=>u=!1),L(()=>{O(f?"refreshing":"pending"),U()},!1),b.then(C=>q(b,C,void 0,d),C=>q(b,void 0,ke(C))))}return Object.defineProperties(V,{state:{get:()=>N()},error:{get:()=>T()},loading:{get(){const a=N();return a==="pending"||a==="refreshing"}},latest:{get(){if(!f)return V();const a=T();if(a&&!l)throw a;return v()}}}),h?ye(()=>p(!1)):p(!1),[V,{refetch:p,mutate:g}]}function P(e){const t=w;w=null;try{return e()}finally{w=t}}function Se(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(s){s=!1;return}const c=P(()=>t(i,o,l));return o=i,c}}function Ee(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function Ge(){return y}function Xe(e,t){const n=y;y=e;try{return L(t,!0)}finally{y=n}}function Je(e){const t=w,n=y;return Promise.resolve().then(()=>{w=t,y=n;let r;return L(e,!1),w=y=null,r?r.done:void 0})}function Pe(e,t){const n=Symbol("context");return{id:n,Provider:Ze(n),defaultValue:e}}function he(e){let t;return(t=$e(y,e.id))!==void 0?t:e.defaultValue}function de(e){const t=A(e),n=A(()=>ue(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Qe;function Ce(){const e=j;if(this.sources&&(this.state||e))if(this.state===$||e)J(this);else{const t=S;S=null,L(()=>re(this),!1),S=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Re(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&L(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=j&&j.running;l&&j.disposed.has(s),(l&&!s.tState||!l&&!s.state)&&(s.pure?S.push(s):I.push(s),s.observers&&Te(s)),l||(s.state=$)}if(S.length>1e6)throw S=[],new Error},!1)),t}function J(e){if(!e.fn)return;ge(e);const t=y,n=w,r=fe;w=y=e,Ye(e,e.value,r),w=n,y=t}function Ye(e,t,n){let r;try{r=e.fn(t)}catch(o){e.pure&&(e.state=$),Ne(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Re(e,r):e.value=r,e.updatedAt=n)}function pe(e,t,n,r=$,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==xe&&(y.owned?y.owned.push(s):y.owned=[s]),s}function Oe(e){const t=j;if(e.state===0||t)return;if(e.state===ne||t)return re(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===$||t)J(e);else if(e.state===ne||t){const o=S;S=null,L(()=>re(e,n[0]),!1),S=o}}function L(e,t){if(S)return e();let n=!1;t||(S=[]),I?n=!0:I=[],fe++;try{const r=e();return ze(n),r}catch(r){S||(I=null),Ne(r)}}function ze(e){if(S&&(Le(S),S=null),e)return;const t=I;I=null,t.length&&L(()=>Fe(t),!1)}function Le(e){for(let t=0;t<e.length;t++)Oe(e[t])}function re(e,t){const n=j;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===$||n?o!==t&&Oe(o):(o.state===ne||n)&&re(o,t))}}function Te(e){const t=j;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ne,r.pure?S.push(r):I.push(r),r.observers&&Te(r))}}function ge(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)ge(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ke(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ne(e){throw e=ke(e),e}function $e(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:$e(e.owner,t):void 0}function ue(e){if(typeof e=="function"&&!e.length)return ue(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ue(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ze(e,t){return function(r){let o;return G(()=>o=P(()=>(y.context={[e]:r.value},de(()=>r.children))),void 0),o}}function E(e,t){return P(()=>e(t||{}))}function Z(){return!0}const et={get(e,t,n){return t===be?n:e.get(t)},has(e,t){return e.has(t)},set:Z,deleteProperty:Z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Z,deleteProperty:Z}},ownKeys(e){return e.keys()}};function le(e){return(e=typeof e=="function"?e():e)?e:{}}function tt(...e){if(e.some(n=>n&&(be in n||typeof n=="function")))return new Proxy({get(n){for(let r=e.length-1;r>=0;r--){const o=le(e[r])[n];if(o!==void 0)return o}},has(n){for(let r=e.length-1;r>=0;r--)if(n in le(e[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<e.length;r++)n.push(...Object.keys(le(e[r])));return[...new Set(n)]}},et);const t={};for(let n=e.length-1;n>=0;n--)if(e[n]){const r=Object.getOwnPropertyDescriptors(e[n]);for(const o in r)o in t||Object.defineProperty(t,o,{enumerable:!0,get(){for(let s=e.length-1;s>=0;s--){const l=(e[s]||{})[o];if(l!==void 0)return l}}})}return t}function nt(e){let t,n;const r=o=>{const s=x.context;if(s){const[i,c]=R();(n||(n=e())).then(u=>{z(s),c(()=>u.default),z()}),t=i}else if(t){const i=t();if(i)return i(o)}else{const[i]=We(()=>(n||(n=e())).then(c=>c.default));t=i}let l;return A(()=>(l=t())&&P(()=>{if(!s)return l(o);const i=x.context;z(s);const c=l(o);return z(i),c}))};return r.preload=()=>n||((n=e()).then(o=>t=()=>o.default),n),r}function qe(e){let t=!1;const n=e.keyed,r=A(()=>e.when,void 0,{equals:(o,s)=>t?o===s:!o==!s});return A(()=>{const o=r();if(o){const s=e.children,l=typeof s=="function"&&s.length>0;return t=n||l,l?P(()=>s(o)):s}return e.fallback})}function rt(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,c=t[o-1].nextSibling,u=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const f=s<r?i?n[i-1].nextSibling:n[s-i]:c;for(;i<s;)e.insertBefore(n[i++],f)}else if(s===i)for(;l<o;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const f=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],f),t[o]=n[s]}else{if(!u){u=new Map;let h=i;for(;h<s;)u.set(n[h],h++)}const f=u.get(t[l]);if(f!=null)if(i<f&&f<s){let h=l,m=1,v;for(;++h<o&&h<s&&!((v=u.get(t[h]))==null||v!==f+m);)m++;if(m>f-i){const g=t[l];for(;i<f;)e.insertBefore(n[i++],g)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const me="_$DX_DELEGATE";function ot(e,t,n,r={}){let o;return Ae(s=>{o=s,t===document?e():ce(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function Be(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function st(e,t=window.document){const n=t[me]||(t[me]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,it))}}function ce(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return oe(e,t,r,n);G(o=>oe(e,t(),o,n),r)}function it(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function oe(e,t,n,r,o){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(x.context)return n;if(s==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=H(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(x.context)return n;n=H(e,n,r)}else{if(s==="function")return G(()=>{let i=t();for(;typeof i=="function";)i=i();n=oe(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(ae(i,t,n,o))return G(()=>n=oe(e,i,n,r,!0)),()=>n;if(x.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=H(e,n,r),l)return n}else c?n.length===0?we(e,i,r):rt(e,n,i):(n&&H(e),we(e,i));n=i}else if(t instanceof Node){if(x.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=H(e,n,r,t);H(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ae(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],c=n&&n[s];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=ae(e,i,c)||o;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();o=ae(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||o}else e.push(i),o=!0;else{const u=String(i);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return o}function we(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function H(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const c=i.parentNode===e;!s&&!l?c?e.replaceChild(o,i):e.insertBefore(o,n):c&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const lt=!1;function ut(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function ct([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function at(e){try{return document.querySelector(e)}catch{return null}}function ft(e,t){const n=at(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function ht(e,t,n,r){let o=!1;const s=i=>typeof i=="string"?{value:i}:i,l=ct(R(s(e()),{equals:(i,c)=>i.value===c.value}),void 0,i=>(!o&&t(i),i));return n&&Ee(n((i=e())=>{o=!0,l[1](s(i)),o=!1})),{signal:l,utils:r}}function dt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:R({value:""})};return e}function pt(){return ht(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),ft(window.location.hash.slice(1),n)},e=>ut(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const gt=/^(?:[a-z0-9]+:)?\/\//i,yt=/^\/+|\/+$/g;function W(e,t=!1){const n=e.replace(yt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ee(e,t,n){if(gt.test(t))return;const r=W(e),o=n&&W(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+W(t,!s)}function mt(e,t){if(e==null)throw new Error(t);return e}function je(e,t){return W(e).replace(/\/*(\*.*)?$/g,"")+W(t)}function wt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function K(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function vt(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return l=>{const i=l.split("/").filter(Boolean),c=i.length-s;if(c<0||c>0&&r===void 0&&!t)return null;const u={path:s?"":"/",params:{}};for(let f=0;f<s;f++){const h=o[f],m=i[f];if(h[0]===":")u.params[h.slice(1)]=m;else if(h.localeCompare(m,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${m}`}return r&&(u.params[r]=c?i.slice(-c).join("/"):""),u}}function bt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ie(e){const t=new Map,n=Ge();return new Proxy({},{get(r,o){return t.has(o)||Xe(n,()=>t.set(o,A(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function _e(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return _e(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const xt=100,Ue=Pe(),se=Pe(),De=()=>mt(he(Ue),"Make sure your app is wrapped in a <Router />");let X;const Me=()=>X||he(se)||De().base;function At(e,t="",n){const{component:r,data:o,children:s}=e,l=!s||Array.isArray(s)&&!s.length,i={key:e,element:r?()=>E(r,{}):()=>{const{element:c}=e;return c===void 0&&n?E(n,{}):c},preload:e.component?r.preload:e.preload,data:o};return He(e.path).reduce((c,u)=>{for(const f of _e(u)){const h=je(t,f),m=l?h:h.split("/*",1)[0];c.push({...i,originalPath:f,pattern:m,matcher:vt(m,!l)})}return c},[])}function St(e,t=0){return{routes:e,score:bt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(n);if(!l)return null;r.unshift({...l,route:s})}return r}}}function He(e){return Array.isArray(e)?e:[e]}function Ke(e,t="",n,r=[],o=[]){const s=He(e);for(let l=0,i=s.length;l<i;l++){const c=s[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=At(c,t,n);for(const f of u){if(r.push(f),c.children)Ke(c.children,f.pattern,n,r,o);else{const h=St([...r],o.length);o.push(h)}r.pop()}}}return r.length?o:o.sort((l,i)=>i.score-l.score)}function Et(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Pt(e,t){const n=new URL("http://sar"),r=A(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),o=A(()=>K(r().pathname)),s=A(()=>K(r().search,!0)),l=A(()=>K(r().hash)),i=A(()=>"");return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Ie(Se(s,()=>wt(r())))}}function Ct(e,t="",n,r){const{signal:[o,s],utils:l={}}=dt(e),i=l.parsePath||(p=>p),c=l.renderPath||(p=>p),u=ee("",t),f=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[h,m]=R(!1),v=async p=>{m(!0);try{await Je(p)}finally{m(!1)}},[g,T]=R(o().value),[k,_]=R(o().state),U=Pt(g,k),N=[],O={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(p){return ee(u,p)}};if(n)try{X=O,O.data=n({data:void 0,params:{},location:U,navigate:Q(O)})}finally{X=void 0}function q(p,a,d){P(()=>{if(typeof a=="number"){a&&(l.go?l.go(a):console.warn("Router integration does not support relative routing"));return}const{replace:b,resolve:C,scroll:D,state:B}={replace:!1,resolve:!0,scroll:!0,...d},M=C?p.resolvePath(a):ee("",a);if(M===void 0)throw new Error(`Path '${a}' is not a routable path`);if(N.length>=xt)throw new Error("Too many redirects");const F=g();if((M!==F||B!==k())&&!lt){const Y=N.push({value:F,replace:b,scroll:D,state:k()});v(()=>{T(M),_(B)}).then(()=>{N.length===Y&&V({value:M,state:B})})}})}function Q(p){return p=p||he(se)||O,(a,d)=>q(p,a,d)}function V(p){const a=N[0];a&&((p.value!==a.value||p.state!==a.state)&&s({...p,replace:a.replace,scroll:a.scroll}),N.length=0)}G(()=>{const{value:p,state:a}=o();P(()=>{p!==g()&&v(()=>{T(p),_(a)})})});{let p=function(a){if(a.defaultPrevented||a.button!==0||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)return;const d=a.composedPath().find(Y=>Y instanceof Node&&Y.nodeName.toUpperCase()==="A");if(!d||!d.hasAttribute("link"))return;const b=d.href;if(d.target||!b&&!d.hasAttribute("state"))return;const C=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||C&&C.includes("external"))return;const D=new URL(b),B=K(D.pathname);if(D.origin!==window.location.origin||u&&B&&!B.toLowerCase().startsWith(u.toLowerCase()))return;const M=i(B+K(D.search,!0)+K(D.hash)),F=d.getAttribute("state");a.preventDefault(),q(O,M,{resolve:!1,replace:d.hasAttribute("replace"),scroll:!d.hasAttribute("noscroll"),state:F&&JSON.parse(F)})};st(["click"]),document.addEventListener("click",p),Ee(()=>document.removeEventListener("click",p))}return{base:O,out:f,location:U,isRouting:h,renderPath:c,parsePath:i,navigatorFactory:Q}}function Rt(e,t,n,r){const{base:o,location:s,navigatorFactory:l}=e,{pattern:i,element:c,preload:u,data:f}=r().route,h=A(()=>r().path),m=Ie(()=>r().params);u&&u();const v={parent:t,pattern:i,get child(){return n()},path:h,params:m,data:t.data,outlet:c,resolvePath(g){return ee(o.path(),g,h())}};if(f)try{X=v,v.data=f({data:t.data,params:m,location:s,navigate:l(v)})}finally{X=void 0}return v}const Ot=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,l=t||pt(),i=Ct(l,r,o);return E(Ue.Provider,{value:i,get children(){return e.children}})},Lt=e=>{const t=De(),n=Me(),r=de(()=>e.children),o=A(()=>Ke(r(),je(n.pattern,e.base||""),kt)),s=A(()=>Et(o(),t.location.pathname));t.out&&t.out.matches.push(s().map(({route:u,path:f,params:h})=>({originalPath:u.originalPath,pattern:u.pattern,path:f,params:h})));const l=[];let i;const c=A(Se(s,(u,f,h)=>{let m=f&&u.length===f.length;const v=[];for(let g=0,T=u.length;g<T;g++){const k=f&&f[g],_=u[g];h&&k&&_.route.key===k.route.key?v[g]=h[g]:(m=!1,l[g]&&l[g](),Ae(U=>{l[g]=U,v[g]=Rt(t,v[g-1]||n,()=>c()[g+1],()=>s()[g])}))}return l.splice(u.length).forEach(g=>g()),h&&m?h:(i=v[0],v)}));return E(qe,{get when(){return c()&&i},children:u=>E(se.Provider,{value:u,get children(){return u.outlet()}})})},Tt=e=>{const t=de(()=>e.children);return tt(e,{get children(){return t()}})},kt=()=>{const e=Me();return E(qe,{get when(){return e.child},children:t=>E(se.Provider,{value:t,get children(){return t.outlet()}})})};const Nt="modulepreload",$t=function(e,t){return new URL(e,t).href},ve={},qt=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=$t(s,r),s in ve)return;ve[s]=!0;const l=s.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const h=o[f];if(h.href===s&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${i}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Nt,l||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),l)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};const Bt=Be('<div class="header my-20"><section class="left-title"><div class="name">Eva Malek</div><div class="title">Motion Graphics Designer</div></section><section class="right-links space-x-10 items-center justify-center"><div class="link">Animation</div><div class="link">Reel</div><div class="link">Contact</div></section></div>');function jt({}){return Bt.cloneNode(!0)}const It=Be("<div></div>"),_t=nt(()=>qt(()=>import("./Home.7d8da88c.js"),[],import.meta.url)),Ut=()=>(()=>{const e=It.cloneNode(!0);return ce(e,E(jt,{}),null),ce(e,E(Lt,{get children(){return E(Tt,{path:"/",component:_t})}}),null),e})();ot(()=>E(Ot,{get children(){return E(Ut,{})}}),document.getElementById("root"));export{Be as t};