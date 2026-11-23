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
var chunk_73yzwkej_exports = {};
__export(chunk_73yzwkej_exports, {
  PYl: () => PYl,
  zGo: () => zGo
});
module.exports = __toCommonJS(chunk_73yzwkej_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_sxscgpaq = require("/$bunfs/root/chunk-sxscgpaq.js");
function zGo(o = import_chunk_865at33z.Yi) {
  if ((0, import_chunk_f9x2f6cx.Y)() || !o()) return;
  let e = null, t = [];
  if ((0, import_chunk_xcgcdx61.Si)() !== null) e = require("/$bunfs/root/chunk-jg0eem7v.js"), t = e.providerBoundRoute();
  (0, import_chunk_5e3gtsn9.w1)(), (0, import_chunk_5e3gtsn9.Uji)(), (0, import_chunk_sxscgpaq.Q8o)(), e?.resetProviderBoundCachesIfMoved(t);
}
function PYl() {
  return (0, import_chunk_865at33z.ys)(() => {
    if (!(0, import_chunk_5e3gtsn9.gks)() && (0, import_chunk_5e3gtsn9.Kji)()) zGo(import_chunk_865at33z.Yk);
  });
}
