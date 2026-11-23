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
var chunk_se72nykz_exports = {};
__export(chunk_se72nykz_exports, {
  EVt: () => EVt,
  MIr: () => MIr,
  Xj: () => Xj,
  cOo: () => cOo,
  ps: () => ps,
  qXe: () => qXe,
  uOo: () => uOo
});
module.exports = __toCommonJS(chunk_se72nykz_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
function Xj(t, e) {
  return (r) => t((S) => c(S, e, S[e], r(S[e])));
}
function MIr(t) {
  return (e) => t((r) => {
    let S = e(r);
    return Object.is(S, r) ? r : { ...r, ...S };
  });
}
function cOo(t) {
  return { getSnapshot: t.getSnapshot, getState: t.getState, setState: MIr(t.setState), subscribe: t.subscribe };
}
function qXe(t, e, r) {
  return { get: () => t()[r], set: Xj(e, r) };
}
function EVt(t, e) {
  return (r, S) => ({ get: () => r()[t] ?? e, set: (a) => S((s) => {
    let n = s[t] ?? e;
    return c(s, t, n, a(n));
  }) });
}
function uOo(t) {
  let e = t;
  return { get: () => e, set: (r) => {
    e = r(e);
  } };
}
function ps(t, e) {
  let r = t, S = /* @__PURE__ */ new Set(), a = e && (0, import_chunk_69qhefwa.$ce)(e), s = () => r;
  return { getSnapshot: s, getState: s, setState: (n) => {
    let o = r, i = n(o);
    if (Object.is(i, o)) return;
    r = i, a?.({ newState: i, oldState: o });
    for (let u of S) u();
  }, subscribe: (n) => {
    let o = (0, import_chunk_69qhefwa.$ce)(n);
    return S.add(o), () => S.delete(o);
  } };
}
function c(t, e, r, S) {
  return Object.is(S, r) ? t : { ...t, [e]: S };
}
