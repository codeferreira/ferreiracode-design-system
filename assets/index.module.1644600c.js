var u=Object.defineProperty;var c=(e,n)=>u(e,"name",{value:n,configurable:!0});import{r as o}from"./jsx-runtime.3ba806ba.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},p.apply(this,arguments)}c(p,"_extends");function m(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}c(m,"$6ed0406888f73fc4$var$setRef");function x(...e){return n=>e.forEach(r=>m(r,n))}c(x,"$6ed0406888f73fc4$export$43e446d32b3d21af");const $=o.exports.forwardRef((e,n)=>{const{children:r,...t}=e,s=o.exports.Children.toArray(r),l=s.find(E);if(l){const i=l.props.children,a=s.map(d=>d===l?o.exports.Children.count(i)>1?o.exports.Children.only(null):o.exports.isValidElement(i)?i.props.children:null:d);return o.exports.createElement(f,p({},t,{ref:n}),o.exports.isValidElement(i)?o.exports.cloneElement(i,void 0,a):null)}return o.exports.createElement(f,p({},t,{ref:n}),r)});$.displayName="Slot";const f=o.exports.forwardRef((e,n)=>{const{children:r,...t}=e;return o.exports.isValidElement(r)?o.exports.cloneElement(r,{...y(t,r.props),ref:x(n,r.ref)}):o.exports.Children.count(r)>1?o.exports.Children.only(null):null});f.displayName="SlotClone";const h=c(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function E(e){return o.exports.isValidElement(e)&&e.type===h}c(E,"$5e63c961fc1ce211$var$isSlottable");function y(e,n){const r={...n};for(const t in n){const s=e[t],l=n[t];/^on[A-Z]/.test(t)?r[t]=(...a)=>{l==null||l(...a),s==null||s(...a)}:t==="style"?r[t]={...s,...l}:t==="className"&&(r[t]=[s,l].filter(Boolean).join(" "))}return{...e,...r}}c(y,"$5e63c961fc1ce211$var$mergeProps");export{$};
//# sourceMappingURL=index.module.1644600c.js.map
