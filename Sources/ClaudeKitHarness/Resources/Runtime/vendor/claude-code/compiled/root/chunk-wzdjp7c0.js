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
var chunk_wzdjp7c0_exports = {};
__export(chunk_wzdjp7c0_exports, {
  Ssa: () => Ssa,
  cLo: () => cLo,
  dg: () => dg,
  f_: () => f_
});
module.exports = __toCommonJS(chunk_wzdjp7c0_exports);
function f_() {
  return true;
}
function dg() {
  return typeof Bun < "u" && Bun.isStandaloneExecutable === true;
}
function cLo() {
  if (!f_() || dg()) return false;
  let n = Bun.main;
  if (Ssa(n)) return false;
  return /\.[cm]?tsx?$/.test(n);
}
function Ssa(n) {
  return /^(?:\/\$bunfs|[a-z]:[\\/]~BUN)(?:[\\/]|$)/i.test(n);
}
