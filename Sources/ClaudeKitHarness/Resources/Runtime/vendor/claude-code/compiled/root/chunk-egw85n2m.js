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
var chunk_egw85n2m_exports = {};
__export(chunk_egw85n2m_exports, {
  _8s: () => _8s,
  eOa: () => eOa,
  y8s: () => y8s
});
module.exports = __toCommonJS(chunk_egw85n2m_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_zyws26f3 = require("/$bunfs/root/chunk-zyws26f3.js");
var import_chunk_1zphp81a = require("/$bunfs/root/chunk-1zphp81a.js");
function _8s(o, e, { trigger: n, offerBypass: i = true } = {}) {
  let t = y8s(o, e, { offerBypass: i });
  return { level: o, currentMode: e.mode, nextMode: t, context: (0, import_chunk_awvk50qj.zD)(e.mode, t, e, n) };
}
function y8s(o, e, { offerBypass: n = true } = {}) {
  let i = e.mode === "plan" ? e.prePlanMode ?? "plan" : e.mode, t = (0, import_chunk_k67pwqya.N2e)(o, { isAutoModeAvailable: (0, import_chunk_1zphp81a.l6)(e), isBypassPermissionsModeAvailable: n && (0, import_chunk_1zphp81a.ler)(e) && (i === "bypassPermissions" || (0, import_chunk_k67pwqya.hvt)() === void 0) }, e.proactivityBaseline?.mode), r = e.proactivityBaseline?.mode, s = r === "acceptEdits" ? r : (0, import_chunk_bzyb60p0.E6)(e) ? void 0 : i;
  return (0, import_chunk_k67pwqya.Wat)(o, t, s) === void 0 ? t : "default";
}
function eOa(o, e, n, { offerBypass: i = true } = {}) {
  let t;
  if (e((r) => {
    if (r.proactivityLevel === o) return r;
    let s = _8s(o, r.toolPermissionContext, { offerBypass: i });
    return t = { from: r.proactivityLevel, toMode: s.nextMode, modeChanged: s.nextMode !== s.currentMode }, { ...r, proactivityLevel: o, toolPermissionContext: { ...s.context, mode: s.nextMode, startupModeDecidedByProactivityLevel: void 0 } };
  }), t === void 0) return;
  if (c(o, n, { source: "sdk_host", from: t.from, toMode: t.toMode }), t.modeChanged || (0, import_chunk_bzyb60p0.gKa)(t.from, o)) setImmediate(() => {
    import_chunk_bzyb60p0.PW.emit();
  });
}
function c(o, e, { source: n, from: i, toMode: t }) {
  (0, import_chunk_zyws26f3.nOa)(o, e), (0, import_chunk_y53wbr8a.a)("tengu_proactivity_cycle", { level: (0, import_chunk_78g0060s.f)(o), from: (0, import_chunk_78g0060s.f)(i), to_mode: (0, import_chunk_78g0060s.f)(t), source: (0, import_chunk_78g0060s.f)(n) }), (0, import_chunk_cqa9hrgx.u)("proactivity_cycle");
}
