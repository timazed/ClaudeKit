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
var chunk_sk0gc06z_exports = {};
__export(chunk_sk0gc06z_exports, {
  Eds: () => Eds,
  Z1t: () => Z1t,
  kae: () => kae,
  nnl: () => nnl,
  onl: () => onl,
  p7: () => p7,
  rnl: () => rnl,
  wdo: () => wdo
});
module.exports = __toCommonJS(chunk_sk0gc06z_exports);
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var a = 12e4, s = 6e5;
function p7(n = process.env) {
  let e = n.BASH_DEFAULT_TIMEOUT_MS;
  if (e) {
    let t = (0, import_chunk_2gtmjt3y.Ch)(e);
    if (!isNaN(t) && t > 0) return t;
  }
  return a;
}
function kae(n = process.env) {
  let e = n.BASH_MAX_TIMEOUT_MS;
  if (e) {
    let t = (0, import_chunk_2gtmjt3y.Ch)(e);
    if (!isNaN(t) && t > 0) return Math.max(t, p7(n));
  }
  return Math.max(s, p7(n));
}
var nnl = 18e5, Eds = 72e5;
function rnl(n) {
  return Math.min(Math.max(n, kae()), 2147483647);
}
function onl(n, e) {
  return Math.max(n, p7(e));
}
function Z1t(n, e) {
  return n !== void 0 && n > 0 ? e : void 0;
}
var i = 2e3;
function wdo({ requestedTimeoutMs: n, isMainAgent: e, canAutoBackground: t, subagentCapMs: o = 0, env: u = process.env }) {
  if (!t) return n;
  let r = e ? (0, import_chunk_2gtmjt3y.Ch)(u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS) : o;
  if (isNaN(r) || r <= 0) return n;
  return Math.min(n, Math.max(r, i));
}
