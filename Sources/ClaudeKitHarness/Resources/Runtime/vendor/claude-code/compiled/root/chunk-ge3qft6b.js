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
var chunk_ge3qft6b_exports = {};
__export(chunk_ge3qft6b_exports, {
  $T: () => $T,
  HRe: () => HRe,
  R0: () => R0,
  TZ: () => TZ,
  Vjt: () => Vjt,
  _bl: () => _bl,
  abl: () => abl,
  cbl: () => cbl,
  dbl: () => dbl,
  fbl: () => fbl,
  gbl: () => gbl,
  hbl: () => hbl,
  ibl: () => ibl,
  ivr: () => ivr,
  lbl: () => lbl,
  mbl: () => mbl,
  nBi: () => nBi,
  nbl: () => nbl,
  obl: () => obl,
  pbl: () => pbl,
  pme: () => pme,
  rBi: () => rBi,
  rbl: () => rbl,
  sbl: () => sbl,
  tBi: () => tBi,
  ubl: () => ubl,
  vbo: () => vbo
});
module.exports = __toCommonJS(chunk_ge3qft6b_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_0djtvg5h = require("/$bunfs/root/chunk-0djtvg5h.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
(0, import_chunk_adx6804h.B)();
function M(e) {
  return !(0, import_chunk_3t7ve0wy.M4n)() && (0, import_chunk_zhr7rpv7._T)(e, "fable_5_2_prompt_bundle") === true;
}
var V = "tengu_fennel_godwit";
function vbo(e) {
  if (e === void 0) return false;
  if ((0, import_chunk_zhr7rpv7._T)((0, import_chunk_865at33z.St)(e), "opus_5_prompt_bundle", e) !== true) return false;
  return !(0, import_chunk_865at33z.b)(V, false);
}
function _(e) {
  return !(0, import_chunk_3t7ve0wy.M4n)() && (0, import_chunk_zhr7rpv7._T)(e, "opus_5_5_prompt_bundle") === true;
}
var z = /* @__PURE__ */ new Set(["turn_updates", "bash_output_audience_note", "silent_turn_reminder", "thinking_display_updates"]), G = /* @__PURE__ */ new Set(["bison_cairn", "larch_cistern"]), Y = /* @__PURE__ */ new Set(["silent_turn_reminder", "original_games_guidance"]), K = /* @__PURE__ */ new Set(["silent_turn_reminder", "original_games_guidance", "finishing_work_guidance", "memory_guidance", "timed_silent_turn_reminder"]), Z = 64, q = "tengu_model_capability_from_client_data", h = "tengu_model_capability_off_from_client_data";
function $T(e, o, r, l) {
  if (l !== void 0) return l;
  let d = (0, import_chunk_zhr7rpv7._T)(o, e, r);
  if (d === void 0) return F(e, o, r);
  if (d !== ((0, import_chunk_zhr7rpv7.e0o)(o, e, r) === true || F(e, o, r)) && (0, import_chunk_zhr7rpv7.dLr)(e, o) === void 0) {
    let u = L(e, o, r);
    if (u !== void 0) J(d ? q : h, e, u);
  }
  return d;
}
function nbl(e, o, r) {
  let l = (0, import_chunk_zhr7rpv7.Rra)(o);
  return [...(0, import_chunk_865at33z.PVi)(r, o) ?? [], ...l.keys()].findLast((d) => d.startsWith(e) && l.get(d) !== false)?.slice(e.length);
}
function J(e, o, r) {
  let l = r.model ?? (0, import_chunk_zmb62hr5.ur)((0, import_chunk_865at33z.dt)()), d = (0, import_chunk_n5qd9b6p.Ar)().clientDataCapabilityLogged ??= /* @__PURE__ */ new Map(), u = (0, import_chunk_f9x2f6cx.W)(), c = d.get(u);
  if (c === void 0) {
    if (c = /* @__PURE__ */ new Set(), d.set(u, c), d.size > Z) {
      let y = d.keys().next().value;
      if (y !== void 0) d.delete(y);
    }
  }
  let g = `${e === h ? "-" : ""}${o}:${l}`;
  if (!c.has(g)) c.add(g), (0, import_chunk_y53wbr8a.a)(e, { capability: (0, import_chunk_78g0060s.f)(o), model: (0, import_chunk_865at33z.Xt)(l) });
}
function A() {
  try {
    return (0, import_chunk_865at33z.St)((0, import_chunk_865at33z.dt)());
  } catch {
    return null;
  }
}
function F(e, o, r) {
  return z.has(e) && (0, import_chunk_0djtvg5h.Vat)(o) || G.has(e) && vbo(r) || Y.has(e) && _(o) || K.has(e) && M(o);
}
function L(e, o, r) {
  if ((0, import_chunk_865at33z.H4)()) return;
  try {
    let l = (0, import_chunk_865at33z.uPs)(r ?? (A() === o ? void 0 : o), e);
    return typeof l?.data?.[e] === "boolean" ? l : void 0;
  } catch (l) {
    if (!(0, import_chunk_jv7av99m.MD)(l, "Config accessed before allowed.")) (0, import_chunk_k449cc64.i)(l);
    return;
  }
}
function Q(e, o, r) {
  let l = L(e, o, r);
  return l && l.data?.[e] === true;
}
(0, import_chunk_zhr7rpv7.hBl)(Q, A);
function rbl(e) {
  return false;
}
function Vjt(e) {
  return (0, import_chunk_zmb62hr5.Yt)(e) === "claude-opus-4-8";
}
function tBi(e) {
  return (0, import_chunk_zmb62hr5.Yt)(e) === "claude-fable-5-2";
}
function obl(e) {
  return (0, import_chunk_zmb62hr5.Yt)(e) === "claude-mythos-5-2";
}
function sbl(e) {
  return false;
}
function ibl(e) {
  return false;
}
var X = /* @__PURE__ */ new Set(["claude-opus-4-6", "claude-haiku-4-5", "claude-opus-4-5", "claude-opus-4-1", "claude-opus-4-0", "claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet", "claude-3-5-haiku"]);
function O(e) {
  return X.has((0, import_chunk_zmb62hr5.Yt)(e));
}
function abl(e, o) {
  if (o === void 0) return O(e);
  return o.model !== void 0 && O(o.model);
}
var P = "tengu_loggia_roster", R = [], ee = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().trim())), D;
function ne() {
  let e = (0, import_chunk_865at33z.b)(P, R), o = D;
  if (o !== void 0 && o.raw === e) return o.ids;
  let r = ee().safeParse(e);
  if (!r.success) (0, import_chunk_w578pjby.t)(`GrowthBook: ${P} is not a JSON array of model ids; treating it as empty`, { level: "warn" });
  let l = r.success ? r.data : R;
  return D = { raw: e, ids: l }, l;
}
function nBi(e) {
  return ne().some((o) => (0, import_chunk_zmb62hr5.dP)(e, o));
}
function lbl() {
  return (0, import_chunk_865at33z.b)("tengu_wondrous_oasis", false);
}
function dbl() {
  return (0, import_chunk_865at33z.b)("tengu_quiet_larch", false) === true;
}
function U(e, o) {
  let r = (0, import_chunk_865at33z.X_)()?.[e];
  return typeof r === "object" && r !== null && Object.entries(r).some(([l, d]) => d === true && o.includes(l));
}
function cbl(e) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_BASALT_COVE || U("basalt_cove", e);
}
var k = "tengu_thrifty_sonic";
function oe() {
  let e = m();
  return (0, import_chunk_865at33z.H4)() ? e.bashFirstSessionAssignmentCompiledOnly() : e.bashFirstSessionAssignment();
}
function x() {
  let e = TZ((0, import_chunk_865at33z.dt)()), o = (0, import_chunk_865at33z.St)(e), r = (0, import_chunk_zhr7rpv7._T)(o, "thrifty_sonic", e);
  if (r === false) return "none";
  if ((0, import_chunk_0djtvg5h.Vat)(o) || _(o) || (0, import_chunk_865at33z.X_)()?.[k] === true || r) return "forced";
  return (0, import_chunk_865at33z.pCt)(e) ? "cohort" : "none";
}
function ivr() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_THRIFTY_SONIC !== void 0) return import_chunk_c203g5kd.s.CLAUDE_CODE_THRIFTY_SONIC;
  switch (oe()) {
    case "forced":
      return true;
    case "none":
      return false;
    case "cohort":
      return (0, import_chunk_865at33z.b)(k, false);
  }
}
var T = "tengu_cozy_teapot";
function w(e) {
  return e === "strict" || e === "relaxed" ? e : void 0;
}
function ubl() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_COZY_TEAPOT ?? m().bashFirstSteerVariant();
}
function te() {
  return w((0, import_chunk_865at33z.X_)()?.[T]) ?? (_((0, import_chunk_865at33z.St)(TZ((0, import_chunk_865at33z.dt)()))) ? "relaxed" : void 0) ?? w((0, import_chunk_865at33z.Lt)(T, null)) ?? "strict";
}
var re = "tengu_gorse_plover", S = "tengu_willow_tern";
function ie(e, o) {
  return e || (0, import_chunk_865at33z.X_)()?.[o] === true || (0, import_chunk_865at33z.b)(o, false);
}
function fbl() {
  let e = (0, import_chunk_n5qd9b6p.Ar)();
  return e.bashActFirstEnabled ??= ie(import_chunk_c203g5kd.s.CLAUDE_CODE_GORSE_PLOVER, re), e.bashActFirstEnabled;
}
function pbl(e) {
  return $T("amber_astrolabe", (0, import_chunk_865at33z.St)(e), e, import_chunk_c203g5kd.s.CLAUDE_CODE_AMBER_ASTROLABE || void 0);
}
function mbl(e) {
  return $T("bison_cairn", (0, import_chunk_865at33z.St)(e), e, import_chunk_c203g5kd.s.CLAUDE_CODE_BISON_CAIRN);
}
function hbl(e) {
  return $T("larch_cistern", (0, import_chunk_865at33z.St)(e), e, import_chunk_c203g5kd.s.CLAUDE_CODE_LARCH_CISTERN || void 0);
}
function rBi() {
  let e = (0, import_chunk_865at33z.X_)()?.[S];
  if (typeof e === "boolean") return e;
  if (e !== void 0) {
    let o = m();
    if (!o.unusableWritingOverrideTold) o.unusableWritingOverrideTold = true, (0, import_chunk_w578pjby.t)(`willow_tern: ignoring non-boolean clientData ${S} value of type ${typeof e}`);
  }
  return;
}
function gbl(e) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_WILLOW_TERN) return true;
  let o = rBi();
  if (o !== void 0) return o;
  if (e === void 0) return false;
  let r = (0, import_chunk_865at33z.St)(e);
  if ((0, import_chunk_0djtvg5h.Vat)(r)) return true;
  if ((0, import_chunk_zhr7rpv7._T)(r, "opus_5_prompt_bundle", e) !== true) return false;
  return (0, import_chunk_865at33z.b)(S, false);
}
function HRe() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_SIMPLE;
}
function ae(e) {
  let o = (0, import_chunk_865at33z.St)(e, { deterministic: true }), r = (0, import_chunk_zhr7rpv7._T)(o, "lean_prompt", e);
  if (r !== void 0) return !r;
  return o.includes("claude-3-") || o === "claude-haiku-4-5" || o === "claude-sonnet-4-0" || o === "claude-sonnet-4-5" || o === "claude-sonnet-4-6" || o === "claude-sonnet-5" || o === "claude-opus-4-0" || o === "claude-opus-4-1" || o === "claude-opus-4-5" || o === "claude-opus-4-6" || o === "claude-opus-4-7";
}
function pme(e) {
  let o = m();
  return (0, import_chunk_865at33z.H4)() ? o.leanPromptCompiledOnly(e) : o.leanPrompt(e);
}
function R0(e) {
  return e.leanPrompt ?? pme(e.model);
}
function I(e) {
  if (!e) return false;
  if ((0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return true;
  if ((0, import_chunk_69qhefwa.Oi)(import_chunk_c203g5kd.s.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return false;
  if (!ae(e)) return true;
  if ((0, import_chunk_865at33z.b)("tengu_velvet_tide", false)) return true;
  return U("simple_system_prompt", (0, import_chunk_865at33z.St)(e));
}
var se = "breezy_horizon";
function TZ(e) {
  if (e === void 0) return;
  let o = m();
  return (0, import_chunk_865at33z.H4)() ? o.modelForPromptCompiledOnly(e) : o.modelForPrompt(e);
}
function _bl(e) {
  let o = m().modelForPrompt;
  return o.cache.has(e) ? o(e) : void 0;
}
function v(e) {
  let o = import_chunk_c203g5kd.s.CLAUDE_CODE_BREEZY_HORIZON;
  if ((0, import_chunk_69qhefwa.Oi)(o)) return e;
  let r = (0, import_chunk_865at33z.Tu)(e), l = (0, import_chunk_865at33z.X_)()?.[se], d = o ?? (typeof l === "object" && l !== null ? Object.entries(l).find(([g]) => g === r)?.[1] : void 0);
  if (d === void 0) return e;
  let u = o !== void 0 ? "env" : "client_data";
  if (typeof d !== "string" || !le(d)) return (0, import_chunk_w578pjby.t)(`[breezy_horizon] ${u}: ignoring ${String(d)} for ${r}: not a model id`, { level: "warn" }), e;
  let c = (0, import_chunk_865at33z.Tu)(d);
  if (c === r) {
    if (!(0, import_chunk_zmb62hr5.zA)((0, import_chunk_zmb62hr5.Qd)(d))) (0, import_chunk_w578pjby.t)(`[breezy_horizon] ${u}: ${d} names ${r} itself, so it maps nothing`, { level: "warn" });
    return e;
  }
  let E = m().promptModelSwapsLogged;
  if (!E.has(e)) E.add(e), (0, import_chunk_y53wbr8a.a)("tengu_breezy_horizon", { from_model: (0, import_chunk_865at33z.Xt)(r), to_model: (0, import_chunk_865at33z.Xt)(c), source: (0, import_chunk_78g0060s.f)(u) });
  return d;
}
function le(e) {
  return (0, import_chunk_865at33z._Ne)(e) || (0, import_chunk_zmb62hr5.zA)((0, import_chunk_zmb62hr5.Qd)(e));
}
class H {
  bashFirstSessionAssignment = (0, import_chunk_839h1d5e.Co)(x);
  bashFirstSessionAssignmentCompiledOnly = (0, import_chunk_839h1d5e.Co)(x);
  bashFirstSteerVariant = (0, import_chunk_839h1d5e.Co)(te);
  leanPrompt = (0, import_chunk_839h1d5e.Co)(I);
  leanPromptCompiledOnly = (0, import_chunk_839h1d5e.Co)(I);
  modelForPrompt = (0, import_chunk_839h1d5e.Co)(v);
  modelForPromptCompiledOnly = (0, import_chunk_839h1d5e.Co)(v);
  promptModelSwapsLogged = /* @__PURE__ */ new Set();
  unusableWritingOverrideTold = false;
}
var de = new import_chunk_2904xtvq.j(() => new H());
function m() {
  return de.of((0, import_chunk_f9x2f6cx.N)().host);
}
