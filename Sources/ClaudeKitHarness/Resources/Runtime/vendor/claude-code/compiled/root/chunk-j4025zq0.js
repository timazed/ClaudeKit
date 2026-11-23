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
var chunk_j4025zq0_exports = {};
__export(chunk_j4025zq0_exports, {
  F1i: () => F1i,
  Hys: () => Hys,
  WZl: () => WZl
});
module.exports = __toCommonJS(chunk_j4025zq0_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_a9c4wn56 = require("/$bunfs/root/chunk-a9c4wn56.js");
function F1i() {
  if (!n()) return false;
  if (!(0, import_chunk_865at33z.Rt)() || !l() || r()) return false;
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_HARBOR_KITE_CLOUD) || u() && (0, import_chunk_865at33z.b)("tengu_tidy_starfish", false);
}
var a = /* @__PURE__ */ new Set(["cli", "claude-desktop", "claude-vscode"]);
function u() {
  return !(0, import_chunk_f9x2f6cx.Od)() && a.has((0, import_chunk_3t7ve0wy.Li)()) && !(0, import_chunk_3t7ve0wy.Yg)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_2nv4wrez.iGt)() === void 0 && !(0, import_chunk_2nv4wrez.hw)() && ((0, import_chunk_xfj2cwfv.lze)() !== null || !(0, import_chunk_xfj2cwfv._Pe)() && (0, import_chunk_865at33z.mRs)(import_chunk_ephf358x.g1e));
}
function n() {
  return (0, import_chunk_znn7ks07.Hl)() && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && !(0, import_chunk_k449cc64.wt)() && (0, import_chunk_2nv4wrez.Rn)("allow_remote_sessions");
}
function r() {
  return (0, import_chunk_a9c4wn56._le)() !== void 0 && !(0, import_chunk_865at33z.bqi)() && (0, import_chunk_865at33z.b)("tengu_rosy_rocket", true);
}
function Hys() {
  return r() && (0, import_chunk_3t7ve0wy.U6e)() && (0, import_chunk_3t7ve0wy.Hge)() && !(0, import_chunk_f9x2f6cx.st)() && !(0, import_chunk_865at33z.nee)((0, import_chunk_f9x2f6cx.fg)()) && n();
}
function WZl(e, t) {
  if (!Hys()) return "";
  let o = t?.();
  return `
Your user's sessions outside this machine are not searched by name here. If '${e}' is one of them, nothing was sent to it.${o === void 0 ? "" : ` ${o} can message one by its session id.`}`;
}
function l() {
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_ORGANIZATION_UUID) || Boolean((0, import_chunk_865at33z.Sn)()?.organizationUuid) || (0, import_chunk_865at33z.Qf)();
}
