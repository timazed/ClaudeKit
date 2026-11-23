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
var chunk_nydsr46r_exports = {};
__export(chunk_nydsr46r_exports, {
  Iii: () => Iii,
  bXr: () => bXr,
  qRn: () => qRn
});
module.exports = __toCommonJS(chunk_nydsr46r_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var Iii = "published-floor.json", l = 1, h = 32, a = 65536, F = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(l), sources: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)().min(1).max(64), (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.E)().int().nonnegative(), issuedAt: (0, import_chunk_adx6804h.n)().max(64), recordedAt: (0, import_chunk_adx6804h.E)().int().nonnegative() })) }));
function u() {
  return (0, import_path.join)((0, import_chunk_865at33z.j9)(), Iii);
}
function s() {
  return (0, import_chunk_zhr7rpv7.vr)().publishedCatalogFloorMarks;
}
async function bXr(e) {
  return await f(), s().get(e)?.version ?? 0;
}
async function qRn(e, r, o = Date.now()) {
  await f();
  let i = s().get(e);
  if (i !== void 0 && i.version >= r.version) return;
  s().set(e, { version: r.version, issuedAt: (r.issued_at ?? "").slice(0, 64), recordedAt: o }), await C();
}
function f() {
  let e = (0, import_chunk_zhr7rpv7.vr)();
  return e.publishedCatalogFloorRead ??= g().then(m), e.publishedCatalogFloorRead;
}
function m(e) {
  if (e === void 0) return;
  for (let [r, o] of e) {
    let i = s().get(r);
    if (i === void 0 || o.version > i.version) s().set(r, o);
  }
}
async function g() {
  let e;
  try {
    e = await (0, import_chunk_865at33z.uoe)().readTail(u(), a + 1, { noFollow: true });
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) (0, import_chunk_w578pjby.t)(`[publishedCatalog] floor file read failed: ${(0, import_chunk_jv7av99m.w)(o) ?? "unknown"}; no persisted version marks this session`);
    return;
  }
  let r = e.length > a ? void 0 : F().safeParse((0, import_chunk_0jve1fep.et)(e.toString("utf8"), false));
  if (!r?.success) {
    (0, import_chunk_w578pjby.t)(`[publishedCatalog] floor file ${r === void 0 ? "oversized" : "invalid"}; no persisted version marks this session`);
    return;
  }
  return new Map(Object.entries(r.data.sources));
}
function C() {
  let e = (0, import_chunk_zhr7rpv7.vr)(), r = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(d, d);
  return e.publishedCatalogFloorWrite = r, r;
}
async function d() {
  try {
    m(await g());
    let e = [...s().entries()].sort(([, o], [, i]) => i.recordedAt - o.recordedAt).slice(0, h), r = (0, import_chunk_865at33z.uoe)();
    await r.mkdir((0, import_chunk_865at33z.j9)()), await r.atomicWrite(u(), (0, import_chunk_w578pjby._)({ version: l, sources: Object.fromEntries(e) }), 384);
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[publishedCatalog] floor file write failed: ${(0, import_chunk_jv7av99m.w)(e) ?? "unknown"}`);
  }
}
