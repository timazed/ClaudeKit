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
var chunk_59mwkeke_exports = {};
__export(chunk_59mwkeke_exports, {
  Bws: () => Bws,
  Fcn: () => Fcn,
  Hvt: () => Hvt,
  LYe: () => LYe,
  Ncn: () => Ncn,
  PWn: () => PWn,
  Uws: () => Uws,
  Zkl: () => Zkl,
  aji: () => aji,
  eEl: () => eEl,
  hTr: () => hTr,
  hu: () => hu,
  iji: () => iji,
  mTr: () => mTr,
  tEl: () => tEl,
  yd: () => yd
});
module.exports = __toCommonJS(chunk_59mwkeke_exports);
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_fraf4m31 = require("/$bunfs/root/chunk-fraf4m31.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_wqe8b1g0 = require("/$bunfs/root/chunk-wqe8b1g0.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var import_chunk_9p9dsn6j = require("/$bunfs/root/chunk-9p9dsn6j.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var yd = (e) => e.link !== void 0;
var mTr = (0, import_chunk_r0q0n8n3.Xr)();
var Ncn = (e, o) => /* @__PURE__ */ new Set([...o ?? [], e]);
var hTr = (0, import_chunk_t57w17k7.de)((0, import_chunk_69qhefwa.Be)(), (e) => {
  e.clear();
});
function l() {
  let e = (0, import_chunk_r0q0n8n3.Xr)();
  return { get: e.get, set(o) {
    e.set(o), hTr.emit();
  } };
}
var LYe = (0, import_chunk_t57w17k7.de)(l(), (e) => e.set(void 0)), Zkl = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0)), iji = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0));
function Fcn(e, o, t) {
  let n = iji.get();
  if (n === void 0 || n.ids.size === 0) return { managedIds: o, order: t };
  return { managedIds: n.ids.has(e) ? Ncn(e, o) : o, order: { ...t, prepend: n.prepend ?? (t.from.prepend === "user" ? [] : t.prepend), append: n.append ?? (t.from.append === "user" ? [] : t.append), from: { prepend: "policy", append: "policy" } } };
}
var eEl = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0));
function PWn(e) {
  let o = LYe.get()?.get(e.pluginStorageId);
  return o !== void 0 && o.plugin.name === e.pluginName && ((0, import_chunk_xcgcdx61.is)(e.pluginStorageId) === import_chunk_xcgcdx61.qs || (0, import_chunk_xcgcdx61.ZRt)(e.pluginStorageId)) && mTr.get() !== void 0 && (0, import_chunk_fraf4m31.O0)(e.pluginStorageId) === void 0 ? o : void 0;
}
var r = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0)), u = ({ source: e }) => (0, import_chunk_xhqwsnqh.xxe)({ source: e }) && !r.get()?.some((o) => o.source === e && o.mayBeRequired);
function tEl() {
  let e = r.get(), o = e?.filter(u).map((t) => t.source) ?? [];
  return e?.filter((t) => t.mayBeRequired && (0, import_chunk_xhqwsnqh.W2n)(o, t.source)).map((t) => `|${t.source}`).concat(o);
}
function aji() {
  let e = [...LYe.get()?.values() ?? []].flatMap(({ plugin: t }) => PWn({ pluginName: t.name, pluginStorageId: t.source }) === void 0 ? [] : [t]), o = new Set(e.map((t) => t.source));
  return o.size === 0 ? e : [...e, ...(r.get() ?? []).filter(({ source: t }) => !o.has(t))];
}
function Hvt(e) {
  let o = LYe.get();
  return o !== void 0 && !yd(e) && o.get(e.args.pluginStorageId)?.plugin.name !== e.args.pluginName;
}
var Uws = (0, import_chunk_r0q0n8n3.Xr)();
var Bws = (0, import_chunk_r0q0n8n3.Xr)();
function hu(e) {
  if (Hvt(e)) return false;
  let o = (0, import_chunk_865at33z.ce)().admissionText;
  if ((e.judgedUnder ?? null) === o) return true;
  let t = e.args.pluginStorageId;
  return (0, import_chunk_9p9dsn6j.gX)(t) || e.args.sealed === true && Bws.get()?.(t) === true || !(0, import_chunk_wqe8b1g0.XAr)(t, Uws.get()?.() ?? null);
}
