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
var chunk_814mdk98_exports = {};
__export(chunk_814mdk98_exports, {
  IKe: () => IKe,
  fwa: () => fwa,
  m$e: () => m$e,
  n6s: () => n6s,
  u2r: () => u2r
});
module.exports = __toCommonJS(chunk_814mdk98_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_sg5zbskk = require("/$bunfs/root/chunk-sg5zbskk.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
function n6s() {
  if (!(0, import_chunk_sjqze7qg.Abi)()) return "off";
  try {
    return (0, import_chunk_865at33z.b)("tengu_vast_tulip", false) === true ? "enforce" : "observe";
  } catch {
    return (0, import_chunk_w578pjby.t)("tool host attestation: reading tengu_vast_tulip threw; observing", { level: "warn" }), "observe";
  }
}
function s(e) {
  let o = (0, import_chunk_sg5zbskk.QYe)(), { status: r, meetsLevel: n, configException: i } = (0, import_chunk_53snsm3k.gun)(e, o, { isCloudWorker: false });
  return { status: r, verdict: !o.enforce ? "not_policed" : n ? "pass" : i ? "config_exception" : "below_floor" };
}
function m$e(e) {
  let o = n6s();
  return o === "off" ? void 0 : { mode: o, ...s((0, import_chunk_53snsm3k.Mwe)(e)) };
}
function IKe(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor";
}
function u2r() {
  let e = m$e("UNSPECIFIED");
  return { attestation: e, heldBack: IKe(e) };
}
function fwa(e) {
  try {
    e?.(import_chunk_r9ecxfn9.Vhr, import_chunk_r9ecxfn9._l["repository_trust.served_calls.unattested"]);
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`[remote-tools] the notice sink threw on ${import_chunk_r9ecxfn9.Vhr}: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
