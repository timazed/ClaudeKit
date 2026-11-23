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
var chunk_d19q7hh0_exports = {};
__export(chunk_d19q7hh0_exports, {
  bU: () => bU
});
module.exports = __toCommonJS(chunk_d19q7hh0_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
function bU(r, o) {
  let e = (0, import_chunk_jv7av99m.H3)((0, import_chunk_865at33z.rh)(r)?.code) ?? (0, import_chunk_jv7av99m.op)(r);
  return { transport: (0, import_chunk_np189awg.gI)(r), ...e !== void 0 && { err_code: e }, elapsed_ms: Math.round(performance.now() - o) };
}
