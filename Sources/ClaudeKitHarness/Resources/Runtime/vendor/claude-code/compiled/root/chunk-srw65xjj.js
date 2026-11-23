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
var chunk_srw65xjj_exports = {};
__export(chunk_srw65xjj_exports, {
  IVr: () => IVr
});
module.exports = __toCommonJS(chunk_srw65xjj_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var n = /^[A-Za-z0-9][A-Za-z0-9 ._+()-]{0,63}$/;
function IVr(t) {
  if (n.test(t)) return (0, import_chunk_78g0060s.Fr)(t);
  return (0, import_chunk_78g0060s.S)("nonconforming");
}
