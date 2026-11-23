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
var chunk_8tg38aha_exports = {};
__export(chunk_8tg38aha_exports, {
  Ew: () => Ew,
  PAt: () => PAt,
  RHl: () => RHl,
  bPe: () => bPe,
  g9i: () => g9i,
  h9i: () => h9i,
  xHl: () => xHl
});
module.exports = __toCommonJS(chunk_8tg38aha_exports);
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var PAt = "(invalid tool name)";
function Ew(e) {
  return (0, import_chunk_adx6804h.oc)(e);
}
function bPe(e) {
  return e;
}
function h9i(e) {
  return e;
}
function RHl(e) {
  return e;
}
function xHl(e) {
  return e;
}
function g9i(e) {
  if (Object.getPrototypeOf(e) !== Array.prototype) throw TypeError("mintDisplayedUpdates: non-plain array in mint input \u2014 plain data only");
  if (!Number.isSafeInteger(e.length) || e.length < 0) throw TypeError("mintDisplayedUpdates: non-integer length in mint input \u2014 plain data only");
  let o = [];
  for (let r = 0; r < e.length; r++) {
    if (!(r in e)) throw TypeError("mintDisplayedUpdates: sparse mint input \u2014 plain data only");
    o.push(p(e[r]));
  }
  return Object.freeze(o);
}
function p(e, o = /* @__PURE__ */ new WeakMap()) {
  if (typeof e === "function") throw TypeError("deepFreezePlainData: function in mint input \u2014 plain data only");
  if (e !== null && typeof e === "object") {
    let r = o.get(e);
    if (r !== void 0) return r;
    let s = Object.getPrototypeOf(e);
    if (!(Array.isArray(e) ? s === Array.prototype : s === Object.prototype || s === null)) throw TypeError("deepFreezePlainData: non-plain prototype in mint input \u2014 plain data only");
    let i = Object.getOwnPropertyDescriptors(e);
    for (let t of Object.keys(i)) {
      let n = i[t];
      if (n && (n.get !== void 0 || n.set !== void 0)) throw TypeError("deepFreezePlainData: accessor property in mint input \u2014 plain data only");
    }
    if (Object.getOwnPropertySymbols(e).length > 0) throw TypeError("deepFreezePlainData: symbol-keyed property in mint input \u2014 plain data only");
    for (let t of Object.keys(i)) {
      let n = i[t];
      if (n && n.enumerable === false && !(Array.isArray(e) && t === "length")) throw TypeError("deepFreezePlainData: non-enumerable property in mint input \u2014 plain data only");
    }
    let a = Array.isArray(e) ? [] : {};
    o.set(e, a);
    for (let t of Object.keys(i)) {
      if (Array.isArray(e) && t === "length") continue;
      if (t === "__proto__" || t === "constructor") throw TypeError("deepFreezePlainData: prototype-key property in mint input \u2014 plain data only");
      let n = i[t];
      Object.defineProperty(a, t, { value: p(n?.value, o), enumerable: true, writable: false, configurable: false });
    }
    return Object.freeze(a), a;
  }
  return e;
}
