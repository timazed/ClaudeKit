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
var chunk_35s5d0tg_exports = {};
__export(chunk_35s5d0tg_exports, {
  DLa: () => DLa,
  P3o: () => P3o,
  a9r: () => a9r,
  irr: () => irr,
  l9r: () => l9r,
  srr: () => srr,
  vgt: () => vgt,
  zCn: () => zCn
});
module.exports = __toCommonJS(chunk_35s5d0tg_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_j7dp96he = require("/$bunfs/root/chunk-j7dp96he.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
function srr() {
  return (0, import_chunk_2yx6c1y2.iL)("autoContinueAtUsageLimit")[0];
}
function a9r(e) {
  return srr() ?? e === "absent";
}
var i = "tengu_marble_heron";
function P3o() {
  let e = t();
  return o(e) ? e : {};
}
function vgt() {
  let e = t();
  return r(o(e) ? e.enabled : e);
}
function zCn() {
  return (0, import_chunk_f9x2f6cx.Cl)() && !(0, import_chunk_865at33z.Qt)() && !(0, import_chunk_t7fzcstv.bt)();
}
function DLa() {
  return zCn() && vgt();
}
function l9r() {
  return r(P3o().autoArm);
}
function t() {
  return (0, import_chunk_865at33z.b)(i, {});
}
function o(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function r(e) {
  if (e === void 0) return true;
  if (typeof e === "string") {
    let n = e.trim().toLowerCase();
    return n !== "" && n !== "false" && n !== "0";
  }
  return Boolean(e);
}
function irr(e) {
  if (!(0, import_chunk_sghy0qej.Pe)("tengu_encapsulated_crab", { safe: true })) return "same";
  let n = (0, import_chunk_j7dp96he.CS)();
  if (!(0, import_chunk_865at33z.Rt)() || e && !n || e?.organizationUuid && !n?.organizationUuid) return "missing";
  return n && !(0, import_chunk_865at33z.uc)(n, e) ? "other" : "same";
}
