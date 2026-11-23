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
var chunk_c6fbq8rk_exports = {};
__export(chunk_c6fbq8rk_exports, {
  DJt: () => DJt,
  ETe: () => ETe,
  RUe: () => RUe,
  nXr: () => nXr,
  oWa: () => oWa,
  rWa: () => rWa,
  tXr: () => tXr
});
module.exports = __toCommonJS(chunk_c6fbq8rk_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
function RUe(e, r) {
  let o = (0, import_chunk_k67pwqya.G_)(e, r);
  return typeof o === "string" ? o : null;
}
function tXr(e, { model: r, getAppState: o, setAppState: s }) {
  if (!(0, import_chunk_7d2qr9z5.Qps)()) return (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "disabled"), { ok: false, error: "apply_flag_settings: effort changes over Remote Control are turned off" };
  let f, n, d = false;
  if ("effortLevel" in e && !(0, import_chunk_k67pwqya.Pwo)(r, e.effortLevel, o())) {
    if (d = true, e.effortLevel != null) {
      let u = (0, import_chunk_k67pwqya.AZ)(e.effortLevel) ?? (0, import_chunk_k67pwqya._vt)(e.effortLevel);
      if (typeof u !== "string" || !(0, import_chunk_k67pwqya.nk)(u)) return (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "invalid_effort_level"), { ok: false, error: "apply_flag_settings: unrecognized effortLevel" };
      f = u, n = (0, import_chunk_k67pwqya.gwe)(u, r);
    }
    let p = (0, import_chunk_k67pwqya.rk)();
    if (p !== void 0 && n !== p) return (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "env_override"), { ok: false, error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session" };
  }
  let c = (0, import_chunk_k67pwqya.$2e)(e.effortLevel) === "ultracode", a = "ultracode" in e ? e.ultracode === true : void 0;
  if ((a === true || a === void 0 && c) && !(0, import_chunk_k67pwqya.jG)(r)) return (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "ultracode_unavailable"), { ok: false, error: `apply_flag_settings: ultracode is not available for this session (${(0, import_chunk_k67pwqya.jG)() ? `${r} does not support it` : "dynamic workflows are off"})` };
  s((p) => {
    let u = d && !c && (0, import_chunk_k67pwqya.xwo)(r, p, f), i = p;
    if (d) {
      let g = (0, import_chunk_k67pwqya.uLe)(n);
      if (!(0, import_chunk_k67pwqya.WRe)(i.sessionEffort, g)) i = { ...i, sessionEffort: g };
    }
    if (a === void 0) {
      if (c) {
        if (!i.ultracode) i = { ...i, ultracode: true };
      } else if (u && i.ultracode) i = { ...i, ultracode: false };
    } else if ((i.ultracode ?? false) !== a) i = { ...i, ultracode: a };
    return i;
  });
  let l = o();
  return (0, import_chunk_w578pjby.t)(`[bridge] apply_flag_settings applied effort=${(0, import_chunk_k67pwqya.bc)(l) ?? "auto"} ultracode=${l.ultracode === true}`), { ok: true };
}
function rWa(e, { getAppState: r, setAppState: o, latch: s }) {
  let f = (0, import_chunk_k67pwqya.rcn)(e.trim()).level, n = f === void 0 ? void 0 : (0, import_chunk_k67pwqya.ows)(f);
  if (n === void 0) return { ok: false, error: "unrecognized effort" };
  let d = (0, import_chunk_k67pwqya.$2e)(f) === "ultracode", c = !d && s.seedSetUltracode;
  return s.seedSetUltracode = d, o((a) => {
    let l = a;
    if (!(0, import_chunk_k67pwqya.WRe)(a.sessionEffort, (0, import_chunk_k67pwqya.Nle)(n))) l = { ...l, sessionEffort: (0, import_chunk_k67pwqya.Nle)(n) };
    if (d && !l.ultracode) l = { ...l, ultracode: true };
    else if (c && l.ultracode) l = { ...l, ultracode: false };
    return l;
  }), (0, import_chunk_w578pjby.t)(`[bridge] effort seeded effort=${(0, import_chunk_k67pwqya.bc)(r()) ?? "auto"} ultracode=${r().ultracode === true}`), { ok: true };
}
function DJt({ level: e, ultracodeActive: r, requestId: o }) {
  let s = E();
  if (!s || !(0, import_chunk_7d2qr9z5.Qps)()) return;
  let f = (0, import_chunk_t39bs2jr.jo)(), n = {};
  if (e !== void 0) {
    if (f.lastKnownEffort = e, f.lastReportedEffort !== e) f.lastReportedEffort = e, n.effort_level = e;
  }
  if (r !== void 0) {
    if (f.lastKnownUltracodeActive = r, f.lastReportedUltracodeActive !== r) f.lastReportedUltracodeActive = r, n.is_ultracode_active = r || null;
  }
  if (o !== void 0) f.lastKnownEffortRequestId = o, n.effort_request_id = o;
  if (Object.keys(n).length > 0) s.reportMetadata(n);
}
function ETe(e, r) {
  if (!E()) return;
  let o = (0, import_chunk_k67pwqya.Hvr)(e, (0, import_chunk_k67pwqya.bc)(r, e) ?? (0, import_chunk_k67pwqya.ccn)(e));
  DJt({ level: o === void 0 ? null : RUe(e, o), ultracodeActive: (0, import_chunk_k67pwqya.IC)(r.ultracode, e) });
}
function nXr(e) {
  DJt({ requestId: (0, import_chunk_k67pwqya.Iwo)(e) });
}
function E() {
  let e = (0, import_chunk_t39bs2jr.jo)(), r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null;
}
function oWa() {
  let e = (0, import_chunk_t39bs2jr.jo)();
  e.lastReportedEffort = void 0, e.lastReportedUltracodeActive = void 0, DJt({ level: e.lastKnownEffort, ultracodeActive: e.lastKnownUltracodeActive, requestId: e.lastKnownEffortRequestId });
}
