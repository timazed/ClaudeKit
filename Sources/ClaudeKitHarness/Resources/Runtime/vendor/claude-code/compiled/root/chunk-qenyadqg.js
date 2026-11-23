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
var chunk_qenyadqg_exports = {};
__export(chunk_qenyadqg_exports, {
  kri: () => kri,
  pYr: () => pYr,
  t$a: () => t$a
});
module.exports = __toCommonJS(chunk_qenyadqg_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function kri() {
  return (0, import_chunk_865at33z.b)("tengu_mcp_claudeai_eligibility_gate", false);
}
function t$a() {
  return (0, import_chunk_865at33z.b)("tengu_delightful_hamster", false) === true;
}
function pYr(e) {
  return e.type === "claudeai-proxy" && e.eligible === false && kri();
}
