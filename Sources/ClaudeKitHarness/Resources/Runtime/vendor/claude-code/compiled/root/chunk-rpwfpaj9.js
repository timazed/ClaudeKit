const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_rpwfpaj9_exports = {};
__export(chunk_rpwfpaj9_exports, {
  JYl: () => JYl,
  XYl: () => XYl,
  q6o: () => q6o
});
module.exports = __toCommonJS(chunk_rpwfpaj9_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_8k7k08kg = require("/$bunfs/root/chunk-8k7k08kg.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var u = "bot_protected_tengu_humble_anchor";
function XYl(o, e, n) {
  let l = { name: import_chunk_pmryp5f3.Fn }, s = r(e, "ask"), a = (0, import_chunk_ht27b0vz.Di)(e, l) !== null || s.some((t) => (0, import_chunk_tfs0ssqe.B$t)(t, o.name, o)) || [...s, ...r(e, "deny")].some((t) => (0, import_chunk_ht27b0vz.iwe)(t)?.key === "args"), m = o.type === "prompt" && (0, import_chunk_8k7k08kg.D9s)({ ...o, disallowedTools: void 0, kind: void 0, policyGate: void 0, requires: void 0, ...(o.allowedTools ?? []).length > 0 && !(0, import_chunk_gbskgz33.gws)(o) && (0, import_chunk_vhsysgcd.nal)() }), i = { ...e, alwaysAllowRules: { ...e.alwaysAllowRules, command: void 0 } }, d = m || (0, import_chunk_xcgcdx61.zRt)({}, e.mode, e.isBypassPermissionsModeAvailable, n.forRemoteExecution) || (0, import_chunk_ht27b0vz.m1)(i, l) !== null || r(i, "allow").some((t) => !(0, import_chunk_sxd14zzs.rit)(t) && (0, import_chunk_tfs0ssqe.Tuo)(t, o.name, o) === "allow");
  return (a || !d) && o.loadedFrom !== "mcp" && o.userInvocable !== false && !(o.name === import_chunk_nwk8fexj.aRe && o.loadedFrom === "bundled") && !(0, import_chunk_c4zg4pwc.Cme)(n) && (0, import_chunk_sghy0qej.Pe)(u, { safe: true });
}
var q6o = /^--tend\s+[1-9]\d{0,9}$/;
function JYl(o, e) {
  let n = (0, import_chunk_mgntjepj.vg)(o);
  if (n === import_chunk_nwk8fexj.yU && q6o.test(e)) return import_chunk_nwk8fexj.yU;
  return [...(0, import_chunk_865at33z.to)().unshadowableBundledSkills].find((l) => (0, import_chunk_mgntjepj.vg)(l.name) === n)?.name;
}
function r(o, e) {
  return [...(0, import_chunk_ht27b0vz.Gk)(o, import_chunk_pmryp5f3.Fn, e).keys()];
}
