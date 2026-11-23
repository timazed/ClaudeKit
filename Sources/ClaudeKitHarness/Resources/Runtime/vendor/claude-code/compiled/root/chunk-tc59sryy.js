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
var chunk_tc59sryy_exports = {};
__export(chunk_tc59sryy_exports, {
  OZl: () => OZl,
  PZl: () => PZl,
  Wje: () => Wje,
  xZl: () => xZl
});
module.exports = __toCommonJS(chunk_tc59sryy_exports);
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
function Wje() {
  return (0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_w50zedgp.cZ)() && !(0, import_chunk_42tcgre6.M8)();
}
function xZl(t) {
  return Wje() && (0, import_chunk_w50zedgp.oRe)(t);
}
var E = 750, l = 3e3;
function PZl() {
  return { debounceMs: E, maxWaitMs: l };
}
function OZl({ news: t, subscribe: d, signal: o, settled: n, nothingToLingerFor: m, debounceMs: f, maxWaitMs: p }) {
  return new Promise((c) => {
    let r = false, i, u, b = d(s);
    function e() {
      if (r) return;
      r = true, clearTimeout(i), clearTimeout(u), b(), o.removeEventListener("abort", e), n?.removeEventListener("abort", a), c();
    }
    function a() {
      s();
    }
    function s() {
      if (r || t().length === 0 && n?.aborted !== true) return;
      if (n?.aborted === true && m?.() === true) {
        e();
        return;
      }
      if (clearTimeout(i), i = setTimeout(e, f), u === void 0) u = setTimeout(e, p);
    }
    if (o.aborted) {
      e();
      return;
    }
    o.addEventListener("abort", e, { once: true }), n?.addEventListener("abort", a, { once: true }), s();
  });
}
