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
var chunk_5zps0wmn_exports = {};
__export(chunk_5zps0wmn_exports, {
  Gq: () => Gq,
  Ib: () => Ib,
  Lh: () => Lh,
  Qi: () => Qi,
  aAe: () => aAe,
  qLn: () => qLn
});
module.exports = __toCommonJS(chunk_5zps0wmn_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_ygx90amt = require("/$bunfs/root/chunk-ygx90amt.js");
var import_chunk_vnc2yc9b = require("/$bunfs/root/chunk-vnc2yc9b.js");
var import_chunk_8bq2fhrn = require("/$bunfs/root/chunk-8bq2fhrn.js");
var Lh = (o) => o.name === import_chunk_xcgcdx61.OFe && (0, import_chunk_59mwkeke.yd)(o);
var Ib = (o) => {
  let e = o.startsWith("classic.") || o === "tool.describe" || o === "tool.call" || o === "tool.run" || o === "tool.check";
  return (0, import_chunk_865at33z.ce)().loadedModules.filter((t) => !(e && Lh(t)) && !(o === "tool.check" && t.name === import_chunk_vnc2yc9b.Ogr && (0, import_chunk_59mwkeke.yd)(t)));
};
function qLn(o, e, t, s) {
  let r = typeof t.tool === "string" ? { ...t, tool: (0, import_chunk_865at33z.hb)(t.tool) } : t, l = (0, import_chunk_59mwkeke.yd)(o) ? import_chunk_8bq2fhrn.d7e : import_chunk_8bq2fhrn.c7e;
  return [o.matcherFor(e)].flat(1 / 0).some((d) => (0, import_chunk_8bq2fhrn.WGt)(d, r, s, l));
}
function Qi(o, e, t) {
  let s = e && (0, import_chunk_ygx90amt.Wwe)(o);
  return (t ?? (0, import_chunk_865at33z.ce)().loadedModules).some((r) => r.hooks(o) && (0, import_chunk_59mwkeke.hu)(r) && (e === void 0 || qLn(r, o, e, s)));
}
var Gq = (o, e = Ib("tool.call")) => Qi("tool.call", { tool: o }, e) || Qi("tool.run", { tool: o }, e);
var i = "toolu_01AAAAAAAAAAAAAAAAAAAAAA", aAe = (o, e, t = i) => Qi("tool.check", o, e) || Qi("tool.judge", { ...o, tool_use_id: t }, e.flatMap((s) => [s.matcherFor("tool.judge")].flat(1 / 0).map((r) => ({ ...s, matcherFor: () => r }))));
