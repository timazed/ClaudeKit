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
var chunk_ve5qgcmh_exports = {};
__export(chunk_ve5qgcmh_exports, {
  Eon: () => Eon,
  IAi: () => IAi,
  Zco: () => Zco,
  wgr: () => wgr,
  xst: () => xst
});
module.exports = __toCommonJS(chunk_ve5qgcmh_exports);
var Eon = "[Image: ", xst = "[Image source: ", wgr = "[Document source: ", IAi = "[Image not shown, read it from ";
function Zco(A) {
  return `[Image not shown, read it from ${A}]`;
}
