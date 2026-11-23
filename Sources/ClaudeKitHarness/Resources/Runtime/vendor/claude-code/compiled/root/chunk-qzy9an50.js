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
var chunk_qzy9an50_exports = {};
__export(chunk_qzy9an50_exports, {
  dXr: () => dXr,
  fWa: () => fWa,
  uWa: () => uWa
});
module.exports = __toCommonJS(chunk_qzy9an50_exports);
var import_crypto = require("crypto");
var dXr = "X-Ccs-Host-Assertion";
function uWa(s) {
  return `/v1/code/sessions/${s}/worker/events`;
}
function fWa(s) {
  return (0, import_crypto.createHash)("sha256").update(s).digest("base64url");
}
