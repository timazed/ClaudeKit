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
var chunk_tvbk4t18_exports = {};
__export(chunk_tvbk4t18_exports, {
  GT: () => GT,
  e7e: () => e7e,
  mM: () => mM,
  zGi: () => zGi
});
module.exports = __toCommonJS(chunk_tvbk4t18_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var zGi = new RegExp(`[\\p{Cc}\\p{Cf}\\p{Zl}\\p{Zp}${import_chunk_kx2fp6pc.V6e}\\u2800]|(?!\\u0020)\\p{Zs}`, "u");
var t = new RegExp(`${zGi.source}|\\p{Cs}`, "u"), i = new RegExp(t.source, "gu");
function GT(n) {
  return t.test(n);
}
function e7e(n, e) {
  return n.split(/\r?\n/).some(GT) ? `${e} is not shown here because it holds hidden or control characters` : n;
}
function mM(n) {
  return GT(n) ? "a path not shown here because it holds hidden or control characters" : n;
}
