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
var chunk_e9gframp_exports = {};
__export(chunk_e9gframp_exports, {
  jpt: () => jpt
});
module.exports = __toCommonJS(chunk_e9gframp_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
function jpt(e, r) {
  if (r) return {};
  return { borderColor: o(e), borderStyle: "round", borderLeft: false, borderRight: false, borderBottom: true };
}
function o(e) {
  if (e === "bash") return "bashBorder";
  if ((0, import_chunk_wtm85h0y._z)()) return "promptBorder";
  let r = (0, import_chunk_wtm85h0y.Y0)();
  return (0, import_chunk_xfj2cwfv.zj)(r) ? import_chunk_xfj2cwfv.q0[r] : "promptBorder";
}
