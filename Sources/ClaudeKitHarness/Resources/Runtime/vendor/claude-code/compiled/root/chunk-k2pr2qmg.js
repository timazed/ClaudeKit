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
var chunk_k2pr2qmg_exports = {};
__export(chunk_k2pr2qmg_exports, {
  HXt: () => HXt,
  Nrr: () => Nrr,
  WDt: () => WDt,
  XNa: () => XNa,
  YNa: () => YNa,
  cTe: () => cTe,
  gAn: () => gAn,
  qNa: () => qNa,
  vMe: () => vMe
});
module.exports = __toCommonJS(chunk_k2pr2qmg_exports);
var import_path = require("path");
var cTe = ".ccr-seed", qNa = 501, gAn = import_path.posix.join(cTe, "manifest.json"), S = import_path.posix.join(cTe, "ready.json"), T = import_path.posix.join(cTe, "laptop.json"), x = import_path.posix.join(cTe, "worker.json"), vMe = import_path.posix.join(cTe, "home", "pack.json"), HXt = import_path.posix.join(cTe, "home", "ready.json");
var f = import_path.posix.join(cTe, "overlay.bundle"), s = 256, i = 500, _ = 4, c = 2, l = 1, r = _ + c + l, e = 200, E = 2, A = Math.min(e, i - r - E - e), L = s - r, YNa = 400;
function WDt(n) {
  let t = import_path.posix.join("/", n.replaceAll("\\", "/"));
  return t === `/${cTe}` || t.startsWith(`/${cTe}/`);
}
function Nrr(n) {
  return !n.split("/").some((t) => t === "" || t === "." || t === "..");
}
var R = /^\.\.namedfork$/i;
function XNa(n) {
  return n.split("/").some((t) => R.test(t));
}
