const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_4smdap7r_exports = {};
__export(chunk_4smdap7r_exports, {
  Bca: () => Bca,
  Kge: () => Kge,
  M: () => M,
  Nr: () => Nr,
  Qyn: () => Qyn,
  U: () => U,
  Xy: () => Xy,
  bT: () => bT,
  v3t: () => v3t
});
module.exports = __toCommonJS(chunk_4smdap7r_exports);
function v3t(e, n) {
  return e.flatMap((t, r) => r ? [n(r), t] : [t]);
}
function U(e, n) {
  let t = 0;
  for (let r of e) t += +!!n(r);
  return t;
}
function Kge(e, n) {
  if (e === n) return true;
  if (e === void 0 || n === void 0 || e.size !== n.size) return false;
  for (let t of e) if (!n.has(t)) return false;
  return true;
}
function Xy(e, n) {
  if (e === n) return true;
  if (e === void 0 || n === void 0 || e.length !== n.length) return false;
  for (let t = 0; t < e.length; t++) if (e[t] !== n[t]) return false;
  return true;
}
function M(e) {
  return [...new Set(e)];
}
function bT(e, n) {
  let t = /* @__PURE__ */ new Set(), r = [];
  for (let o of e) {
    let i = n(o);
    if (!t.has(i)) t.add(i), r.push(o);
  }
  return r;
}
function Qyn(e, n) {
  let t = /* @__PURE__ */ new Map();
  for (let r of e) {
    let o = n(r);
    if (!t.has(o)) t.set(o, r);
  }
  return t;
}
function Nr(e) {
  if (!Array.isArray(e)) return [];
  return e.every((n) => typeof n === "string") ? e : e.filter((n) => typeof n === "string");
}
function Bca(e, n) {
  let t = Math.min(e.length, n.length), r = 0;
  while (r < t && e[r] === n[r]) r++;
  return r;
}
