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
var chunk_sgar51s8_exports = {};
__export(chunk_sgar51s8_exports, {
  I0t: () => I0t,
  Jsr: () => Jsr,
  O0t: () => O0t,
  Xsr: () => Xsr,
  Ysr: () => Ysr,
  sye: () => sye,
  yYo: () => yYo
});
module.exports = __toCommonJS(chunk_sgar51s8_exports);
var import_path = require("path");
var O0t = "bundles", yYo = 36e5, Ysr = (0, import_path.join)("claude.app", "Contents", "MacOS", "claude"), n = String.raw`(\d[A-Za-z0-9._+-]*)@[0-9a-f]{12}\.[0-9a-f]{8}`, Xsr = new RegExp(`^${n}$`), r = new RegExp(String.raw`[\\/]versions[\\/]bundles[\\/]${n}[\\/]claude\.app[\\/]Contents[\\/]MacOS[\\/]claude$`);
function sye(e) {
  return r.exec(e)?.[1];
}
function Jsr(e) {
  return sye(e) ?? (0, import_path.basename)(e);
}
function I0t(e) {
  return e.uid === process.getuid?.() && (e.mode & 18) === 0;
}
