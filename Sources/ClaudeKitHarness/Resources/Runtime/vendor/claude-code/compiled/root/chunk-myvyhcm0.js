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
var chunk_myvyhcm0_exports = {};
__export(chunk_myvyhcm0_exports, {
  $Vn: () => $Vn,
  Zn: () => Zn,
  cNl: () => cNl
});
module.exports = __toCommonJS(chunk_myvyhcm0_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
function Zn(r) {
  return (0, import_chunk_78g0060s.Fr)((0, import_chunk_ccm69jjy.Je)(r).slice(0, 12));
}
function cNl(r) {
  return (0, import_chunk_78g0060s.Fr)((0, import_chunk_ccm69jjy.Je)(r).slice(0, 12));
}
var t = /^[0-9a-f]{12}$/;
function $Vn(r) {
  return t.test(r) ? (0, import_chunk_78g0060s.Fr)(r) : void 0;
}
