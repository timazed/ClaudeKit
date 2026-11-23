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
var chunk_cfhna86s_exports = {};
__export(chunk_cfhna86s_exports, {
  J5s: () => J5s,
  Q5s: () => Q5s,
  Vxa: () => Vxa,
  X5s: () => X5s,
  Y5s: () => Y5s,
  h6o: () => h6o
});
module.exports = __toCommonJS(chunk_cfhna86s_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_tkg68a1m = require("/$bunfs/root/chunk-tkg68a1m.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var Vxa = (t) => `${t.path} (${(0, import_chunk_7e12xj51.dn)(t.bytes)})`;
var Y5s = (t, r) => [t].filter((e) => e > 0).map((e) => `and ${e} more ${(0, import_chunk_7cfjrnwy.O)(e, r)} not named here`);
var h6o = (t) => (/^ */.exec(t)?.[0] ?? "") + (0, import_chunk_tp3c5q2s.Ft)(t, import_chunk_tkg68a1m.jve);
var X5s = (t) => [t].filter((r) => r > 0).map((r) => `${r} ${(0, import_chunk_7cfjrnwy.O)(r, "entry stays", "entries stay")} on this machine (secrets, links, ignored files)`);
var J5s = (t) => [t ?? []].flat().flatMap((r) => [`Writes this manifest first, to ${r.path}:`, ...r.text.trimEnd().split(`
`)]);
var a = (t) => `stays here: ${t.path} (${t.words})`;
var Q5s = (t) => [...t.files.map(Vxa), ...Y5s(t.unnamed?.files ?? 0, "file"), ...t.stays.map(a), ...Y5s(t.unnamed?.stays ?? 0, "entry")].map(h6o);
