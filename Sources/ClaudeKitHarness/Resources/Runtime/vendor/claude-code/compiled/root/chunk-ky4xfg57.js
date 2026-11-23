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
var chunk_ky4xfg57_exports = {};
__export(chunk_ky4xfg57_exports, {
  Mei: () => Mei,
  O9r: () => O9r
});
module.exports = __toCommonJS(chunk_ky4xfg57_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var t = 1, f = 65536, r = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Zc)().min(0).default(0)), m = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.Zc)() })), n = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(t), generation: (0, import_chunk_adx6804h.Zc)().min(1), appliedBeforeFirstAsk: (0, import_chunk_adx6804h.P)(), outcome: (0, import_chunk_adx6804h.F)(["applied", "partial"]), filesApplied: r(), filesRefused: r(), settingsWritten: (0, import_chunk_adx6804h.P)().default(false), replacedForeign: r(), writtenAtMs: (0, import_chunk_adx6804h.Zc)().min(0) }));
function Mei(o) {
  let e = n().safeParse({ ...o, version: t });
  if (!e.success) throw Error("home ready row is off-schema");
  return Buffer.from((0, import_chunk_w578pjby._)(e.data));
}
function O9r(o) {
  if (o.length > f) return { ok: false, reason: "oversize" };
  let e = (0, import_chunk_0jve1fep.et)(o.toString("utf8"), false), s = m().safeParse(e);
  if (s.success && s.data.version !== t) return { ok: false, reason: "unsupported_version" };
  let a = n().safeParse(e);
  if (!a.success) return { ok: false, reason: "malformed" };
  let { version: u, ...i } = a.data;
  return { ok: true, ready: i };
}
