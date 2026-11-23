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
var chunk_fkcy40pm_exports = {};
__export(chunk_fkcy40pm_exports, {
  aKs: () => aKs,
  b$e: () => b$e
});
module.exports = __toCommonJS(chunk_fkcy40pm_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_5p1tkxex = require("/$bunfs/root/chunk-5p1tkxex.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function t(e) {
  if (!Array.isArray(e)) return (0, import_chunk_5p1tkxex.XAn)(e);
  return e.some((r) => (0, import_chunk_5p1tkxex.XAn)([r]));
}
function b$e(e) {
  if (t(e)) return "seeded-comment";
  return (Array.isArray(e) ? e.map(i) : [e]).some((n) => typeof n === "string" && (0, import_chunk_bzyb60p0.LUe)(n)) ? "teammate-reply" : void 0;
}
function aKs(e) {
  return b$e(Array.isArray(e) ? e.map((r) => typeof r === "object" && r !== null && "text" in r ? { ...r, text: o(r.text) } : r) : o(e));
}
function o(e) {
  return typeof e === "string" ? e.replaceAll(`<\\${import_chunk_k449cc64.h$}`, `<${import_chunk_k449cc64.h$}`) : e;
}
function i(e) {
  return typeof e === "object" && e !== null && "text" in e ? e.text : void 0;
}
