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
var chunk_rkksytw2_exports = {};
__export(chunk_rkksytw2_exports, {
  Nve: () => Nve,
  YGr: () => YGr,
  aet: () => aet,
  iKs: () => iKs,
  zIe: () => zIe
});
module.exports = __toCommonJS(chunk_rkksytw2_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_x7880gvk = require("/$bunfs/root/chunk-x7880gvk.js");
function iKs(e) {
  if (e) import_chunk_x7880gvk.nd.terminalFocusGainedAt = Date.now();
  if (!e && import_chunk_x7880gvk.nd.terminalFocus === "blurred") return;
  import_chunk_x7880gvk.nd.terminalFocus = e ? "focused" : "blurred", (0, import_chunk_f9x2f6cx.hia)(e), import_chunk_x7880gvk.nd.terminalFocusChanged.emit();
}
function zIe() {
  return import_chunk_x7880gvk.nd.terminalFocus !== "blurred";
}
function Nve() {
  return import_chunk_x7880gvk.nd.terminalFocus;
}
function YGr() {
  return import_chunk_x7880gvk.nd.terminalFocusGainedAt;
}
function aet(e) {
  return import_chunk_x7880gvk.nd.terminalFocusChanged.subscribe(e);
}
