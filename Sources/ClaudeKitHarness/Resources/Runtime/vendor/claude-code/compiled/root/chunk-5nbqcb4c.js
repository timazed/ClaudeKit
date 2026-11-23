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
var chunk_5nbqcb4c_exports = {};
__export(chunk_5nbqcb4c_exports, {
  LF: () => LF,
  PKe: () => PKe,
  tMt: () => tMt,
  zba: () => zba
});
module.exports = __toCommonJS(chunk_5nbqcb4c_exports);
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var r = /* @__PURE__ */ new Set([import_chunk_hn3cwwzt.ke, import_chunk_rb36kwbn.yt]);
function PKe(e) {
  return r.has(e);
}
function zba(e, n) {
  return PKe(e) ? e : n;
}
function tMt(e) {
  return e === import_chunk_rb36kwbn.yt ? "Select-Object -First, Select-Object -Last or Select-String" : "head, tail or grep";
}
function LF(e) {
  return e.isMcp !== true && PKe(e.name);
}
