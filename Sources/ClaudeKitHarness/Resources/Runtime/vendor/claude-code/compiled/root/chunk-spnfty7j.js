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
var chunk_spnfty7j_exports = {};
__export(chunk_spnfty7j_exports, {
  $kt: () => $kt,
  Oit: () => Oit,
  Oje: () => Oje,
  Pbe: () => Pbe,
  dDi: () => dDi,
  rZ: () => rZ
});
module.exports = __toCommonJS(chunk_spnfty7j_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var Pbe = 128, rZ = /^[\x21-\x7e]+$/, $kt = "io.modelcontextprotocol/tasks";
function Oit(r) {
  return (0, import_chunk_7cfjrnwy.ee)(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), Pbe);
}
function Oje(r) {
  return (0, import_chunk_7cfjrnwy.ee)(Oit(r), 8);
}
function dDi(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1e3 ? `${r}ms` : (0, import_chunk_f64qna2j.Cn)(r);
}
