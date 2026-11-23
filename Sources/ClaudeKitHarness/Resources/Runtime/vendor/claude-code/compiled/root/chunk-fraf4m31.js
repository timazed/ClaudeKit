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
var chunk_fraf4m31_exports = {};
__export(chunk_fraf4m31_exports, {
  $cn: () => $cn,
  Dvt: () => Dvt,
  Eme: () => Eme,
  O0: () => O0,
  Uko: () => Uko,
  Wre: () => Wre,
  _Tr: () => _Tr,
  gTr: () => gTr
});
module.exports = __toCommonJS(chunk_fraf4m31_exports);
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var gTr = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0));
var p = /* @__PURE__ */ new Set(["github", "git", "url", "npm", "settings"]), Uko = (e) => [...e?.prependPlugins ?? [], ...e?.appendPlugins ?? []], d = (e) => Object.entries(e?.enabledPlugins ?? {}).flatMap(([n, t]) => t === true ? [n] : []), g = (e) => [...Uko(e), ...d(e)], o = (e, n) => e.some((t) => (0, import_chunk_xcgcdx61.Kt)(t) === (0, import_chunk_xcgcdx61.Kt)(n));
function a(e, n) {
  let { marketplace: t } = (0, import_chunk_xcgcdx61.Kn)(n);
  if (t === void 0) return;
  let r = e?.extraKnownMarketplaces ?? {}, u = Object.keys(r).find((f) => (0, import_chunk_xcgcdx61.Kt)(f) === (0, import_chunk_xcgcdx61.Kt)(t)), i = u === void 0 ? void 0 : r[u]?.source;
  return i !== void 0 && p.has(i.source) ? i : void 0;
}
function s(e, n) {
  return o(d(e), n) ? a(e, n) : void 0;
}
function c() {
  let e = (0, import_chunk_2yx6c1y2.c3)();
  return e.servedSnapshot || e.settings !== null && !(0, import_chunk_xcgcdx61.VFe)();
}
function Dvt(e) {
  if ((0, import_chunk_r0q0n8n3.sNe)()) return;
  if (c()) return s((0, import_chunk_2yx6c1y2.Aw)(), e);
  let n = (0, import_chunk_2yx6c1y2.c3)(), t = s((0, import_chunk_2yx6c1y2.KR)(), e);
  if (t === void 0 || o(Uko(n.settings), e) || s(n.settings, e) !== void 0) return t;
  let r = (0, import_chunk_2yx6c1y2.Aw)();
  return o(g(r), e) ? a(r, e) : void 0;
}
var l = (e) => Object.entries(gTr.get()?.().plugins ?? {}).some(([n, t]) => (0, import_chunk_xcgcdx61.Kt)(n) === (0, import_chunk_xcgcdx61.Kt)(e) && t.some((r) => r.copyHash !== void 0 && r.version !== void 0)), _Tr = (e) => d(e).filter((n) => s(e, n) !== void 0 && l(n)), Wre = (e) => o(Uko(c() ? (0, import_chunk_2yx6c1y2.Aw)() : (0, import_chunk_2yx6c1y2.KR)()), e), $cn = (e) => Dvt(e) !== void 0 && !Wre(e);
function Eme(e) {
  let n = Dvt(e);
  return n !== void 0 && (l(e) || Wre(e)) ? n : void 0;
}
function O0(e) {
  let n = Eme(e), t = (0, import_chunk_865at33z.ce)().listedCopyProofs.get((0, import_chunk_xcgcdx61.Kt)(e)) === "matched";
  return n !== void 0 && (t || Wre(e)) ? n : void 0;
}
