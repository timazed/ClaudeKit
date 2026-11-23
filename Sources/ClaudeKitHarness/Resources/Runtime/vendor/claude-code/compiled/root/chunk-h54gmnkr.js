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
var chunk_h54gmnkr_exports = {};
__export(chunk_h54gmnkr_exports, {
  J8s: () => J8s,
  LOa: () => LOa,
  X8s: () => X8s,
  YKr: () => YKr,
  _Ht: () => _Ht,
  qKr: () => qKr
});
module.exports = __toCommonJS(chunk_h54gmnkr_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
function _Ht(e = (0, import_chunk_865at33z.ge)()) {
  let n = e.firstWeek?.marks;
  return Array.isArray(n) ? import_chunk_sjqze7qg.GYa.filter((t) => n.includes(t)) : [];
}
function qKr(e = (0, import_chunk_865at33z.ge)()) {
  return e.firstWeek?.over === true;
}
function X8s() {
  let e = _Ht();
  return e.includes("in") && !e.includes("off") && !qKr();
}
function LOa(e, n, t) {
  (0, import_chunk_865at33z.Ke)((o) => {
    let r = _Ht(o), a = e.filter((f) => !r.includes(f));
    return s(o, n) && !qKr(o) && a.length > 0 && (a.includes("in") || r.includes("in")) ? { ...o, firstWeek: { marks: [...r, ...a] } } : o;
  }, t).catch(import_chunk_k449cc64.i);
}
function J8s({ accountUuid: e, hasEntered: n }, t) {
  (0, import_chunk_865at33z.Ke)((o) => s(o, e) && _Ht(o).includes("in") === n ? { ...o, firstWeek: { marks: _Ht(o).filter((r) => !/^q\d-/.test(r)), over: true } } : o, t).catch(import_chunk_k449cc64.i);
}
function YKr(e) {
  if ((0, import_chunk_865at33z.ge)().firstWeek !== void 0) (0, import_chunk_865at33z.Ke)((n) => ({ ...n, firstWeek: void 0 }), e).catch(import_chunk_k449cc64.i);
}
function s(e, n) {
  return e.oauthAccount?.accountUuid === n;
}
