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
var chunk_72r477hv_exports = {};
__export(chunk_72r477hv_exports, {
  L: () => L,
  QBl: () => QBl
});
module.exports = __toCommonJS(chunk_72r477hv_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
function r(n) {
  return { parse: (e) => n(f(e)) };
}
function o(n) {
  let e = n?.trim();
  return e ? e : void 0;
}
function f(n) {
  return n === void 0 ? void 0 : String(n);
}
var l = r(o), s = r((n) => n), a = r((n) => (0, import_chunk_69qhefwa.Ne)(n)), m = r((n) => {
  if ((0, import_chunk_69qhefwa.Ne)(n)) return true;
  if ((0, import_chunk_69qhefwa.Oi)(n)) return false;
  return;
}), b = t();
function QBl(n) {
  if (typeof n === "boolean") return n ? "1" : "0";
  return String(n);
}
var L = { str: () => l, rawStr: () => s, bool: () => a, triBool: () => m, int: (n) => n ? t(n) : b, names: (n) => r((e) => {
  let i = /* @__PURE__ */ new Set();
  for (let u of e?.split(",") ?? []) {
    let d = u.trim();
    if (d.length > 0) i.add(d);
    if (i.size === n) break;
  }
  return i.size > 0 ? Object.freeze([...i]) : void 0;
}), enum: (n) => r((e) => e !== void 0 && n.includes(e.trim()) ? e.trim() : void 0) };
function t(n) {
  return r((e) => {
    if (e === void 0) return;
    if (n?.digitsOnly && !/^[+-]?\d+$/.test(e.trim())) return;
    if (n?.wholeValue && !/^[+-]?\d+$/.test(e.trim()) && (0, import_chunk_2gtmjt3y.Rca)(e.trim()) === void 0) return;
    let i = (0, import_chunk_2gtmjt3y.Ch)(e);
    if (!Number.isFinite(i)) return;
    if (n?.min !== void 0 && i < n.min) return;
    if (n?.max !== void 0 && i > n.max) return;
    return i;
  });
}
