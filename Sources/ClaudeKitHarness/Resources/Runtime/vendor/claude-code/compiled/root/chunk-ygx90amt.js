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
var chunk_ygx90amt_exports = {};
__export(chunk_ygx90amt_exports, {
  Wwe: () => Wwe,
  b4l: () => b4l,
  k4l: () => k4l,
  w4l: () => w4l
});
module.exports = __toCommonJS(chunk_ygx90amt_exports);
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var e = (0, import_chunk_t57w17k7.de)((0, import_chunk_865at33z.Yl)(), (o) => o.set(null));
function b4l(o) {
  let t = o !== void 0 && o !== null;
  e.set(t ? (0, import_chunk_may4s35x.O4l)(o) : null);
}
function w4l(o) {
  return (0, import_chunk_may4s35x.z6i)(o) !== void 0 ? e.get() ?? void 0 : void 0;
}
function k4l(o, t) {
  if ((0, import_chunk_may4s35x.z6i)(o) !== void 0) e.set(t ?? null);
}
function Wwe(o) {
  let t = (0, import_chunk_may4s35x.z6i)(o), m = e.get() ?? import_chunk_may4s35x.I4l;
  return t === void 0 ? void 0 : { table: m, paths: t };
}
