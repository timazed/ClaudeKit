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
var chunk_japjcyrh_exports = {};
__export(chunk_japjcyrh_exports, {
  DYl: () => DYl,
  rzo: () => rzo,
  wht: () => wht
});
module.exports = __toCommonJS(chunk_japjcyrh_exports);
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_6dfy8crz = require("/$bunfs/root/chunk-6dfy8crz.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
function rzo(e) {
  return (0, import_chunk_4vsz8a99.gt)(e, import_chunk_hn3cwwzt.ke) && !(0, import_chunk_wwft95x8.Gd)() || (0, import_chunk_4vsz8a99.gt)(e, import_chunk_rb36kwbn.yt) && !(0, import_chunk_wwft95x8.vR)();
}
function f(e) {
  return e.isMcp !== true && ((0, import_chunk_4vsz8a99.gt)(e, import_chunk_3grsnd7a.Vo) || (0, import_chunk_4vsz8a99.gt)(e, import_chunk_6dfy8crz.Vv));
}
function DYl(e, t, s) {
  return e.some((r) => r.isMcp !== true && (0, import_chunk_4vsz8a99.gt)(r, import_chunk_h4t4qfaq.vo)) ? wht(e, t, s) : [];
}
function wht(e, t, s) {
  let r = (0, import_chunk_b83x8d52.i$t)((0, import_chunk_b83x8d52.IP)((0, import_chunk_bzyb60p0.dfe)().filter((o) => !rzo(o)), t)), n = s === void 0 ? r : r.filter((o) => s.has(o.name)), a = new Set(e.map((o) => o.name)), i = e.filter((o) => !(0, import_chunk_4vsz8a99.gt)(o, import_chunk_h4t4qfaq.vo) && (o.isMcp === true || !(0, import_chunk_4vsz8a99.gt)(o, import_chunk_2b1wcpvk.ga)) && !(0, import_chunk_4vsz8a99.GP)(o) && !f(o));
  for (let o of n) if (!a.has(o.name)) i.push(o);
  let l = t.toolAliases ?? {};
  if ([import_chunk_hn3cwwzt.ke, import_chunk_k883m4fq.De].some((o) => Object.hasOwn(l, o) && l[o] !== o) && i.some((o) => o.isMcp !== true && (0, import_chunk_4vsz8a99.gt)(o, import_chunk_hn3cwwzt.ke))) {
    let o = (0, import_chunk_bzyb60p0.b6)();
    return i.filter((m) => m.isMcp === true || !o.has(m.name));
  }
  return i;
}
