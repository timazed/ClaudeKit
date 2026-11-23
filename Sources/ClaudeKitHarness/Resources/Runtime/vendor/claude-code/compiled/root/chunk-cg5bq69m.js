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
var chunk_cg5bq69m_exports = {};
__export(chunk_cg5bq69m_exports, {
  withHeldParts: () => A
});
module.exports = __toCommonJS(chunk_cg5bq69m_exports);
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_drrj083m = require("/$bunfs/root/chunk-drrj083m.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var f = 8, m = (0, import_chunk_drrj083m.fHn)();
function p(r, n) {
  if (!(0, import_chunk_ma3kja9f.T)(r) || n.size === 0) return r;
  let { type: i, props: t, children: o } = r, { source: u, ir: a, ...c } = (0, import_chunk_ma3kja9f.T)(t) ? t : {};
  if (i === "Svg" && typeof u === "string") {
    let e = (0, import_chunk_ccm69jjy.Je)(u);
    return n.delete(e) ? { ...r, props: { sourceHash: e, ...c } } : r;
  }
  let s = i === "Shader" && (0, import_chunk_ma3kja9f.T)(a) ? m(a) : void 0;
  return { ...r, ...s !== void 0 && n.delete(s) && { props: { irHash: s, ...c } }, ...Array.isArray(o) && { children: o.map((e) => p(e, n)) } };
}
function A(r, n) {
  return Array.isArray(n) && n.length <= f && n.every((t) => typeof t === "string" && import_chunk_ccm69jjy.fm.test(t)) ? p(r, new Set(n)) : r;
}
