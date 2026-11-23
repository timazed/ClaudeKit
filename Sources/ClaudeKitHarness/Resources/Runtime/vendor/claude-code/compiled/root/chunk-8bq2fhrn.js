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
var chunk_8bq2fhrn_exports = {};
__export(chunk_8bq2fhrn_exports, {
  E4l: () => E4l,
  TTt: () => TTt,
  WGt: () => WGt,
  c7e: () => c7e,
  d7e: () => d7e,
  v4l: () => v4l,
  wTs: () => wTs
});
module.exports = __toCommonJS(chunk_8bq2fhrn_exports);
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
function wTs(o, r, t) {
  if (o === void 0) return true;
  if (Array.isArray(o)) return o.some((m) => wTs(m, r, t));
  if (!(0, import_chunk_may4s35x.K_)(o) || Object.keys(o).join() !== r) return false;
  let e = o[r];
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function E4l(o, r) {
  if (!(0, import_chunk_may4s35x.mX)(o)) throw new import_chunk_hcg738hf.je(`${r}: the matcher must be a plain object (a partial of e)`);
  (0, import_chunk_may4s35x.X6i)(o, r, "");
}
var v4l = (o, r = "matcher", t = false) => (0, import_chunk_may4s35x.q6i)(o, r, "", t);
var d7e = (o, r, t) => (0, import_chunk_may4s35x.YGt)(o, r, { test: import_chunk_may4s35x.MTo, names: t });
var c7e = (o, r, t) => (0, import_chunk_may4s35x.YGt)(o, r, { test: () => true, names: t });
var s = (o, r, t, e = c7e) => Array.isArray(o) ? o.some((m) => s(m, r, t, e)) : !(0, import_chunk_may4s35x.K_)(o) || !Object.hasOwn(o, r.field) || e(o[r.field], r.value, t);
function WGt(o, r, t, e = c7e) {
  let m = Object.keys(r);
  if (m.length === 0) return true;
  if (Array.isArray(o)) return Object.entries(r).every(([n, a]) => s(o, { field: n, value: a }, t && (0, import_chunk_may4s35x.G6i)(t, n), e));
  if (!(0, import_chunk_may4s35x.K_)(o)) return true;
  for (let n of m) if (Object.hasOwn(o, n) && !e(o[n], r[n], t && (0, import_chunk_may4s35x.G6i)(t, n))) return false;
  return true;
}
var TTt = (o, r, t) => s(o, { field: r, value: t });
