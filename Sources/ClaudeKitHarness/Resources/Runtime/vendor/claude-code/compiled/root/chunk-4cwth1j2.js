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
var chunk_4cwth1j2_exports = {};
__export(chunk_4cwth1j2_exports, {
  I5r: () => I5r,
  Lnr: () => Lnr,
  O5r: () => O5r,
  sZs: () => sZs,
  uie: () => uie
});
module.exports = __toCommonJS(chunk_4cwth1j2_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
function O5r() {
  let e = (0, import_chunk_865at33z.QV)();
  if (e.error) return (0, import_chunk_865at33z.EVi)() ? "gateway" : "no_creds";
  let t = e.headers["x-api-key"];
  return t && (0, import_chunk_865at33z.Yme)(t) === null ? "gateway" : null;
}
function Lnr() {
  return (0, import_chunk_2yx6c1y2.iL)("feedbackDrafts")[0] ?? "notify";
}
function sZs() {
  if ((0, import_chunk_gq1dr8pm.JQ)() !== null) return false;
  if ((0, import_chunk_3t7ve0wy.xft)()) return false;
  if ((0, import_chunk_3t7ve0wy.ste)()) return false;
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return false;
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_SEND_FEEDBACK;
  if (e === false) return false;
  return (e === true && false || (0, import_chunk_865at33z.b)("tengu_juniper_relay", false)) && O5r() !== "gateway";
}
function uie() {
  return Lnr() !== "off" && sZs();
}
function I5r(e, { storageV5: t, via: r }) {
  let n = (0, import_chunk_m15w38ag.ne)() && t !== void 0 ? (0, import_chunk_2yx6c1y2.Mr)("userSettings", { feedbackDrafts: e }, void 0, t) : (0, import_chunk_2yx6c1y2.Mr)("userSettings", { feedbackDrafts: e });
  return (0, import_chunk_y53wbr8a.a)("tengu_feedback_drafts_setting_changed", { value: (0, import_chunk_78g0060s.f)(e), via: (0, import_chunk_78g0060s.f)(r) }), n;
}
