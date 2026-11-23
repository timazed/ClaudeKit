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
var chunk_a3qepapr_exports = {};
__export(chunk_a3qepapr_exports, {
  P8l: () => P8l,
  lMt: () => lMt,
  nVs: () => nVs,
  oVs: () => oVs,
  rVs: () => rVs
});
module.exports = __toCommonJS(chunk_a3qepapr_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_rvyhd8z3 = require("/$bunfs/root/chunk-rvyhd8z3.js");
var import_crypto = require("crypto");
function lMt() {
  let { value: e, source: r } = (0, import_chunk_865at33z.gn)(import_chunk_rvyhd8z3.rze, null);
  return { flag: n(e), source: r };
}
function n(e) {
  let { flag: r, problem: o } = (0, import_chunk_865at33z.NRs)(e);
  if (o !== void 0) (0, import_chunk_w578pjby.t)(`org-config gate: ${import_chunk_rvyhd8z3.rze} is malformed (${o}); treating as off`, { level: "warn" });
  return r;
}
async function nVs(e, r, o) {
  let a = await (0, import_chunk_865at33z.t3i)(import_chunk_rvyhd8z3.rze, null, e, r, o);
  return a.served ? { flag: n(a.value), source: "payload" } : void 0;
}
function P8l(e = lMt, r = import_chunk_865at33z.zN) {
  let { flag: o, source: a } = e();
  return o.enabled || a === "fallback" && r();
}
function rVs(e) {
  let r = (0, import_crypto.createHash)("sha256").update(`org_config_gate:${e}`).digest("hex");
  return parseInt(r.slice(0, 8), 16) % 100;
}
function oVs(e, r) {
  return e.enabled && r < e.percent;
}
