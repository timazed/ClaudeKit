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
var chunk_e9tagpmb_exports = {};
__export(chunk_e9tagpmb_exports, {
  Dei: () => Dei,
  Srr: () => Srr,
  yNa: () => yNa,
  z3o: () => z3o
});
module.exports = __toCommonJS(chunk_e9tagpmb_exports);
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var f = 64, m = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ generation: (0, import_chunk_adx6804h.E)().int().min(1), etag: (0, import_chunk_adx6804h.n)().optional(), allow: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), at: (0, import_chunk_adx6804h.E)(), tried: (0, import_chunk_adx6804h.v)(true).optional() }));
function Dei(o) {
  return (0, import_crypto.createHash)("sha256").update(o, "utf8").digest("hex").slice(0, 32);
}
function g(o) {
  return (0, import_chunk_t39bs2jr.Un)(o);
}
function Srr(o) {
  let e = (0, import_chunk_865at33z.ge)().remoteHomeSettingsSent?.[g(o)];
  if (e === void 0) return;
  let r = m().safeParse(e);
  return r.success ? r.data : void 0;
}
function yNa(o) {
  let e = Srr(o);
  return e !== void 0 && e.tried !== true;
}
async function z3o(o, e, r) {
  let i = g(o);
  if (!await (0, import_chunk_865at33z.ww)((d) => ({ ...d, remoteHomeSettingsSent: w({ ...d.remoteHomeSettingsSent, [i]: S(d.remoteHomeSettingsSent?.[i], e) }) }), r)) (0, import_chunk_y53wbr8a.a)("tengu_home_seed_record_unwritten", {}), (0, import_chunk_w578pjby.t)("home settings: the record of what was sent could not be written", { level: "warn" });
}
function S(o, e) {
  let r = m().safeParse(o).data, { tried: i, ...s } = e, d = !e.etag && (r ? r.tried : e.tried);
  return { ...s, ...d && { tried: true }, generation: Math.max(e.generation, r?.generation ?? 0), allow: e.allow.filter((l) => e.etag || !r || r.allow.includes(l)) };
}
function w(o) {
  let e = Object.entries(o).flatMap(([r, i]) => {
    let s = m().safeParse(i);
    return s.success && Number.isFinite(s.data.at) ? [[r, s.data]] : [];
  });
  return Object.fromEntries(e.toSorted(([, r], [, i]) => i.at - r.at).slice(0, f));
}
