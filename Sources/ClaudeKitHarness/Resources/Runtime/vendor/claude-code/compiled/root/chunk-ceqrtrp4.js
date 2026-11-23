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
var chunk_ceqrtrp4_exports = {};
__export(chunk_ceqrtrp4_exports, {
  P5r: () => P5r,
  R5r: () => R5r,
  Rnr: () => Rnr,
  hgt: () => hgt,
  x5r: () => x5r
});
module.exports = __toCommonJS(chunk_ceqrtrp4_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_ag2pf657 = require("/$bunfs/root/chunk-ag2pf657.js");
var hgt = { accepted: "Allowed", declined: "Not allowed", unset: "Not asked yet" }, t = "Turned off by your organization's settings (remoteTools.allowUnattendedServing)", o = "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";
function Rnr() {
  return (0, import_chunk_ag2pf657.Q4o)() === "user" ? o : t;
}
function R5r(e) {
  return (0, import_chunk_ag2pf657.K_e)() !== "unset" || (0, import_chunk_ag2pf657.Z4o)() || e;
}
function x5r() {
  return (0, import_chunk_ag2pf657.K_e)() === "accepted" || (0, import_chunk_ag2pf657.Z4o)();
}
async function P5r(e) {
  if (e === "accepted" && (0, import_chunk_ag2pf657.fie)()) return "forbidden";
  let n = e === "accepted" ? "accepted" : (0, import_chunk_ag2pf657.K_e)() === "accepted" ? "revoked" : "declined";
  if (!await (0, import_chunk_ag2pf657._gt)(e)) return "not_saved";
  return (0, import_chunk_y53wbr8a.a)("tengu_served_unattended_consent", { action: (0, import_chunk_78g0060s.f)(n), surface: (0, import_chunk_78g0060s.S)("cli") }), "saved";
}
