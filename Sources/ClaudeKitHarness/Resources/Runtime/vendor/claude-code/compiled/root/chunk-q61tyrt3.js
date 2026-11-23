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
var chunk_q61tyrt3_exports = {};
__export(chunk_q61tyrt3_exports, {
  Aga: () => Aga,
  Cga: () => Cga,
  O5t: () => O5t,
  _Br: () => _Br,
  yBr: () => yBr
});
module.exports = __toCommonJS(chunk_q61tyrt3_exports);
var r, a;
function n() {
  if (r !== void 0 && a === "external") return r;
  return a = "external", r = [], r;
}
function Cga() {
  return n().map((e) => e.id);
}
function Aga(e) {
  for (let t of n()) {
    let o = t.digests.find((i) => i.sha256 === e);
    if (o) return { template: t, label: o.label };
  }
  return;
}
function O5t(e) {
  return n().find((t) => t.id === e);
}
function _Br(e) {
  return e.event === "PreToolUse";
}
function yBr() {
  return true;
}
