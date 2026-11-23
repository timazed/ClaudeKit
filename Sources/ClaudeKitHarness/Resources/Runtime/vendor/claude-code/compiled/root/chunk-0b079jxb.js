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
var chunk_0b079jxb_exports = {};
__export(chunk_0b079jxb_exports, {
  cpa: () => cpa,
  j5n: () => j5n
});
module.exports = __toCommonJS(chunk_0b079jxb_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_path = require("path");
function f(s, o, n) {
  let r = /* @__PURE__ */ new Set();
  for (let [t, a] of o.dirsById) for (let u of a) if ((0, import_chunk_mgntjepj.Lp)((0, import_chunk_bzyb60p0.nG)(u)) === s) r.add(t);
  return { isListed: r.size > 0, copy: n.find((t) => t.bucket === o.bucket && t.pluginId !== void 0 && r.has(t.pluginId)) };
}
function cpa(...[s, o, n, ...r]) {
  return o.lastCompleteList !== null && n !== null && j5n(s, o, n, ...r) === "local_copy_wins" ? f((0, import_chunk_mgntjepj.Lp)(s), o.lastCompleteList, n).copy?.pluginName : void 0;
}
function j5n(s, { accountListing: o, lastCompleteList: n }, r, t, a) {
  try {
    if (!(0, import_chunk_jhdsf4g3.Ion)()) return "sync_not_armed";
    if (!(0, import_chunk_jhdsf4g3.Zne)() || (0, import_chunk_f9x2f6cx.X8)()) return "sync_off";
    if (o === "refused") return "listing_refused";
    if (n === null || r === null) return "unknown";
    let u = (0, import_chunk_mgntjepj.Lp)(s), { isListed: m, copy: d } = f(u, n, r);
    if (!m) return "absent_from_listing";
    switch (d?.outcome) {
      case void 0: {
        let l = t.find((c) => {
          let e = (0, import_chunk_bzyb60p0.stn)(c);
          return e !== void 0 && (0, import_path.basename)((0, import_path.dirname)(e)) === n.bucket && (0, import_chunk_mgntjepj.Lp)((0, import_chunk_bzyb60p0.nG)(e)) === u;
        });
        switch (l?.type) {
          case void 0:
            return "no_copy_at_load";
          case "path-not-found":
            return l.errno === void 0 ? "no_copy_at_load" : "folder_load_failed";
          case "generic-error":
            return l.guardHookRefused ? "guard_hook_refused" : "folder_load_failed";
          default:
            return "folder_load_failed";
        }
      }
      case "held_back":
        return "held_back";
      case "not_loaded": {
        let l = (0, import_chunk_xcgcdx61.FJe)(d.pluginName, import_chunk_xcgcdx61.qs);
        if (a.some((e) => e.type === "synced-plugin-shadowed" && e.source === l)) return "local_copy_wins";
        if (d.managed) return "not_loaded";
        if (r.find((e) => (0, import_chunk_xcgcdx61.Kt)(e.pluginName) === (0, import_chunk_xcgcdx61.Kt)(d.pluginName)) !== d) return "same_name";
        if (t.some((e) => (0, import_chunk_mgntjepj.zme)(e) && e.source === l)) return "dependency_unmet";
        return d.defaultOff ? "default_off" : "not_loaded";
      }
      case "loaded":
        return "unknown";
    }
  } catch (u) {
    return (0, import_chunk_42tcgre6.q)("warn", "plugins_sync_absence_unreadable"), (0, import_chunk_k449cc64.i)(u), "unknown";
  }
}
