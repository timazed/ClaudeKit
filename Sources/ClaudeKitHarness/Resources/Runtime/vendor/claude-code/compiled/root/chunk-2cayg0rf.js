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
var chunk_2cayg0rf_exports = {};
__export(chunk_2cayg0rf_exports, {
  SVs: () => SVs,
  dGr: () => dGr,
  lEn: () => lEn,
  mY: () => mY,
  yVs: () => yVs
});
module.exports = __toCommonJS(chunk_2cayg0rf_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var r = null;
function lEn(n, o) {
  if (n === import_chunk_gq1dr8pm.Zq.kind || n === import_chunk_bzyb60p0.trt.kind) return true;
  if (n === import_chunk_p3d6wgn7.eyr) return o === "sdk_host";
  if (n === import_chunk_p3d6wgn7.Qst) return o === "sdk_host";
  if (n === import_chunk_p3d6wgn7.tyr) return o === "sdk_host";
  return o === "sdk_host" && r !== null && r.slackConnectDialogs.some((e) => e.kind === n);
}
function dGr(n) {
  return !lEn(n, "sdk_host") || lEn(n, "remote_control");
}
var s = /\u2028|\u2029/g, i = "tengu_sober_inkwell";
function t() {
  return (0, import_chunk_sghy0qej.Pe)(i, { safe: true });
}
function yVs(n) {
  return (0, import_chunk_w578pjby._)(n).replace(s, (o) => o === "\u2028" ? "\\u2028" : "\\u2029");
}
function mY(n) {
  if (t()) return (0, import_chunk_kx2fp6pc.K8)((0, import_chunk_w578pjby._)(n));
  return yVs(n);
}
function SVs(n, o) {
  if (t()) return (0, import_chunk_kx2fp6pc.K8)((0, import_chunk_w578pjby._)(n, null, o));
  return (0, import_chunk_w578pjby._)(n, null, o);
}
