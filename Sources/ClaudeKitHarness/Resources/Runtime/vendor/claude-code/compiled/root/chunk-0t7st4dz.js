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
var chunk_0t7st4dz_exports = {};
__export(chunk_0t7st4dz_exports, {
  Kh: () => Kh,
  Lv: () => Lv,
  WZe: () => WZe
});
module.exports = __toCommonJS(chunk_0t7st4dz_exports);
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
function Lv(e) {
  return e ?? false;
}
var WZe = -100;
function Kh() {
  return Lv((0, import_chunk_74h6kcya.Ps)((e) => e.settings.prefersReducedMotion));
}
