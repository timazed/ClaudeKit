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
var chunk_h0j0xf3h_exports = {};
__export(chunk_h0j0xf3h_exports, {
  Kmt: () => Kmt
});
module.exports = __toCommonJS(chunk_h0j0xf3h_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var t = "tengu_synthetic_fog", n = 5242880, _ = 65536, E = 33554432, o = 65536;
function r() {
  let e = (0, import_chunk_865at33z.b)(t, n);
  return typeof e === "number" && Number.isSafeInteger(e) && e >= _ && e <= E ? e : n;
}
function Kmt() {
  return r() - o;
}
