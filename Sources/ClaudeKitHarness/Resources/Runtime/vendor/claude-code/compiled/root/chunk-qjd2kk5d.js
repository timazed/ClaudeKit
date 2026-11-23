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
var chunk_qjd2kk5d_exports = {};
__export(chunk_qjd2kk5d_exports, {
  Dtr: () => Dtr,
  Eqe: () => Eqe,
  f3r: () => f3r,
  p3r: () => p3r
});
module.exports = __toCommonJS(chunk_qjd2kk5d_exports);
var import_chunk_1cer6q9x = require("/$bunfs/root/chunk-1cer6q9x.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
function t(r) {
  return "isApiErrorMessage" in r && r.isApiErrorMessage === true;
}
function Dtr(r) {
  return t(r) && r.error == null && r.api_error_status == null;
}
function f3r(r) {
  return r.is_api_error_message === true || t(r);
}
function Eqe(r) {
  return (0, import_chunk_1cer6q9x.JE)((0, import_chunk_wbk1hf21.Tl)(r));
}
function p3r(r) {
  return r.map((e) => e.type === "text" && "text" in e && typeof e.text === "string" ? { ...e, text: Eqe(e.text) } : e);
}
