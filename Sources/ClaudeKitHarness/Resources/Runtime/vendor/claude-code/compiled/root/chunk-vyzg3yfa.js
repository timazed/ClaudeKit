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
var chunk_vyzg3yfa_exports = {};
__export(chunk_vyzg3yfa_exports, {
  QO: () => QO,
  _bo: () => _bo,
  bbs: () => bbs,
  g4: () => g4,
  gbo: () => gbo,
  kYe: () => kYe,
  tvr: () => tvr
});
module.exports = __toCommonJS(chunk_vyzg3yfa_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
function g4(r = (0, import_chunk_zhr7rpv7.ve)()) {
  if (r !== "firstParty" || !(0, import_chunk_zhr7rpv7.ya)()) return false;
  if ((0, import_chunk_zhr7rpv7.v3)()) return true;
  return n();
}
function gbo(r = (0, import_chunk_zhr7rpv7.ve)()) {
  if (r !== "firstParty" || !(0, import_chunk_zhr7rpv7.pc)()) return false;
  return n();
}
function QO(r = (0, import_chunk_zhr7rpv7.ve)()) {
  if (r !== "firstParty" || !(0, import_chunk_zhr7rpv7.pc)()) return false;
  if (import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL !== void 0 || !(0, import_chunk_865at33z.cl)() || !(0, import_chunk_865at33z.yM)()) return true;
  let t = (0, import_chunk_3f2ytgjw.Hwe)(), e = t === void 0 ? (0, import_chunk_9b4aq7fb.hFe)() ?? null : t;
  return e === null || (0, import_chunk_zhr7rpv7.md)(e);
}
function n() {
  if (import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL !== void 0 || !(0, import_chunk_865at33z.yM)()) return true;
  let r = (0, import_chunk_3f2ytgjw.Hwe)();
  return r === null || r !== void 0 && (0, import_chunk_zhr7rpv7.md)(r);
}
function o() {
  try {
    return (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET === void 0 && (0, import_chunk_zhr7rpv7.pc)() && !(0, import_chunk_865at33z.yM)();
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
    return;
  }
}
function kYe() {
  return o() ?? false;
}
function _bo() {
  return o() ?? true;
}
function tvr(r) {
  return (0, import_chunk_zhr7rpv7.md)(r.baseURL) && !(r.fetchOptions && "unix" in r.fetchOptions);
}
function bbs() {
  if (import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL !== void 0) return import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL;
  try {
    if ((0, import_chunk_865at33z.yM)()) {
      let r = (0, import_chunk_3f2ytgjw.Hwe)();
      if (typeof r === "string") return r;
    }
  } catch {
  }
  return "https://api.anthropic.com";
}
