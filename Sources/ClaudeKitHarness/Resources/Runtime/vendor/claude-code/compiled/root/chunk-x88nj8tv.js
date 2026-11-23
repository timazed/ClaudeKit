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
var chunk_x88nj8tv_exports = {};
__export(chunk_x88nj8tv_exports, {
  b8r: () => b8r,
  jXt: () => jXt,
  nni: () => nni,
  pTe: () => pTe,
  tni: () => tni,
  w8r: () => w8r
});
module.exports = __toCommonJS(chunk_x88nj8tv_exports);
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
function jXt() {
  return (0, import_chunk_qdcbcsg7.mt)().reconnect;
}
function b8r() {
  return (0, import_chunk_qdcbcsg7.mt)().toggle;
}
function pTe() {
  return (0, import_chunk_qdcbcsg7.mt)().isDisabled;
}
function w8r() {
  return (0, import_chunk_qdcbcsg7.mt)().dialBlockCause;
}
function tni(e, n, r, c) {
  let o = (0, import_chunk_qdcbcsg7.mt)();
  o.reconnect = e, o.toggle = n, o.isDisabled = r, o.dialBlockCause = c;
}
function nni() {
  let e = (0, import_chunk_qdcbcsg7.mt)();
  e.reconnect = null, e.toggle = null, e.isDisabled = null, e.dialBlockCause = null;
}
