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
var chunk_mspgntr4_exports = {};
__export(chunk_mspgntr4_exports, {
  Ezs: () => Ezs,
  Vjr: () => Vjr,
  vzs: () => vzs
});
module.exports = __toCommonJS(chunk_mspgntr4_exports);
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_kvavrh0f = require("/$bunfs/root/chunk-kvavrh0f.js");
var import_path = require("path");
function Ezs(s, { backstop: t = false } = {}) {
  return s.allowRules.sources.length > 0 || s.additionalDirectories.sources.length > 0 || !t && (s.hookSources.length > 0 || s.commandHelperSources.length > 0);
}
function vzs() {
  return { settingsFiles: [], allowRules: (0, import_chunk_kvavrh0f.Okn)(), additionalDirectories: (0, import_chunk_kvavrh0f.Ikn)(), hookSources: [], commandHelperSources: [] };
}
function Vjr(s) {
  let t = (0, import_path.resolve)(s), S = (0, import_chunk_6mfepmbb.bB)(t, import_chunk_2yx6c1y2.wv), a = (0, import_path.join)(t, ".claude", "settings.json"), r = (0, import_chunk_6mfepmbb.cO)(a).settings, u = (0, import_path.join)(S, ".claude", "settings.local.json"), g = (0, import_path.join)(t, ".claude", "settings.local.json"), o = [(0, import_chunk_6mfepmbb.cO)(u).settings, ...g === u ? [] : [(0, import_chunk_6mfepmbb.cO)(g).settings]].filter((e) => e !== null), h = o.length === 0 ? null : { permissions: { additionalDirectories: o.flatMap((e) => e.permissions?.additionalDirectories ?? []) } }, p = { projectSettings: r, localSettings: h }, l = { sources: [["projectSettings", ".claude/settings.json"], ["localSettings", ".claude/settings.local.json"]], read: (e) => p[e] ?? null, rules: (e) => e === "localSettings" ? o.flatMap((j) => (0, import_chunk_gbskgz33.k4)(j, e)) : (0, import_chunk_gbskgz33.k4)(p[e] ?? null, e) }, d = (e) => (0, import_chunk_kvavrh0f.MWo)(e) || (0, import_chunk_kvavrh0f.HWo)(e) || (0, import_chunk_kvavrh0f.DWo)(e) || (0, import_chunk_kvavrh0f.IWo)(e) || (0, import_chunk_kvavrh0f.LWo)(e), n = [], i = [];
  if ((0, import_chunk_kvavrh0f.PWo)(r)) n.push(".claude/settings.json");
  if (o.some(import_chunk_kvavrh0f.PWo)) n.push(".claude/settings.local.json");
  let m = (0, import_chunk_6zh1j84y.iko)(t);
  if (m !== null) n.push((0, import_chunk_xfj2cwfv.Gj)(m));
  if (d(r)) i.push(".claude/settings.json");
  if (o.some(d)) i.push(".claude/settings.local.json");
  let f = a === (0, import_chunk_2yx6c1y2._n)("userSettings");
  return { settingsFiles: (0, import_chunk_kvavrh0f.EXn)(l, t).filter((e) => !(f && e === ".claude/settings.json")), allowRules: (0, import_chunk_kvavrh0f.Okn)(l), additionalDirectories: (0, import_chunk_kvavrh0f.Ikn)(l), hookSources: n, commandHelperSources: i };
}
