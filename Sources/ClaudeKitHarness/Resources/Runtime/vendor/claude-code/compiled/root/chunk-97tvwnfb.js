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
var chunk_97tvwnfb_exports = {};
__export(chunk_97tvwnfb_exports, {
  GSr: () => GSr,
  P7: () => P7,
  Uho: () => Uho,
  d1n: () => d1n,
  khs: () => khs,
  l1n: () => l1n,
  npl: () => npl,
  oan: () => oan,
  rpl: () => rpl
});
module.exports = __toCommonJS(chunk_97tvwnfb_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_g3a1gwww = require("/$bunfs/root/chunk-g3a1gwww.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_crypto = require("crypto");
var c = /^[A-Za-z0-9_-]{1,64}$/;
function l1n() {
  let e = o();
  if (e?.startsWith("profile:")) return { pin: e, profile: (0, import_chunk_3f2ytgjw.Dwe)()?.profile };
  if (e !== void 0 && (0, import_chunk_t8x29mwc.rle)(e)) return { pin: (0, import_chunk_t8x29mwc.Cje)(e) };
  return u() ?? { pin: a()?.kind ?? (m() ? import_chunk_t8x29mwc.E8e : "none") };
}
function khs() {
  if (!l()) return;
  let e = o();
  if (e !== void 0 && (0, import_chunk_t8x29mwc.rle)(e)) return e;
  if (p() || u() !== void 0) return;
  let n = a();
  if (n === void 0 || n.kind === "env-oauth") return;
  return _(n.kind, n.secret);
}
function p() {
  return (0, import_chunk_gd77dyw4.kft)(process.env) || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID !== void 0 || (0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || !(0, import_chunk_zhr7rpv7.ya)();
}
function m() {
  return !(0, import_chunk_9b4aq7fb.u8)() && !p() && !(0, import_chunk_865at33z.U4)() && !f() && !(0, import_chunk_865at33z.cl)() && (0, import_chunk_865at33z.gdt)((0, import_chunk_n25gt70y.Poe)((0, import_chunk_865at33z.tr)()));
}
function npl(e) {
  let [n, , i] = e?.[import_chunk_t8x29mwc.Sg]?.split(":") ?? [], r = (0, import_chunk_ch6jxpf8.R_)(import_chunk_3f2ytgjw.Dwe);
  return n !== "profile" || r === void 0 || !e?.ANTHROPIC_PROFILE || (0, import_chunk_g3a1gwww.VSr)(r.dir, e.ANTHROPIC_PROFILE) === i;
}
function d1n() {
  return (0, import_chunk_ch6jxpf8.R_)(() => l1n().pin.startsWith("profile:"));
}
function o() {
  let e = (0, import_chunk_865at33z.Qt)() ? import_chunk_c203g5kd.s.CLAUDE_BG_SESSION_CREDENTIAL : void 0;
  return e !== void 0 && (0, import_chunk_t8x29mwc.S0e)(e) ? e : void 0;
}
function u() {
  let e = (0, import_chunk_9b4aq7fb.gk)();
  if (e !== "profile-explicit" && e !== "profile-implicit" || (0, import_chunk_9b4aq7fb.c8)() || !(0, import_chunk_865at33z.cl)() || f()) return;
  let n = (0, import_chunk_3f2ytgjw.Dwe)();
  if (n === void 0) return;
  let { dir: i, profile: r, organization: d } = n, A = (0, import_chunk_g3a1gwww.VSr)(i, r);
  return { pin: `profile:${(o() === void 0 && (0, import_chunk_9b4aq7fb.fRt)() === void 0 && d !== void 0 && c.test(d) ? d : C(i, r)) ?? ""}:${A}`, profile: r };
}
function f() {
  let { key: e, source: n } = (0, import_chunk_865at33z.lm)({ skipRetrievingKeyFromApiKeyHelper: true });
  return e !== null && (n !== "ANTHROPIC_API_KEY" || !import_chunk_c203g5kd.s.ANTHROPIC_API_KEY || (0, import_chunk_865at33z.pdt)());
}
function O() {
  return (0, import_chunk_865at33z.lm)({ skipRetrievingKeyFromApiKeyHelper: true }).source;
}
function C(e, n) {
  try {
    let i = (0, import_chunk_9b4aq7fb.fRt)()?.organizationId ?? (0, import_chunk_9b4aq7fb.uRt)(e, n)?.organizationUuid;
    return i !== void 0 && c.test(i) ? i : void 0;
  } catch {
    (0, import_chunk_w578pjby.t)("Could not read the profile's credentials file, so this session's sign-in record names no organization", { level: "warn" });
    return;
  }
}
function Uho() {
  return oan() || g();
}
function oan() {
  return o()?.startsWith("profile:") === true && (0, import_chunk_9b4aq7fb.B7i)((0, import_chunk_865at33z.b)("tengu_tethered_buoy", true) !== false);
}
function g() {
  let e = o();
  return e !== void 0 && (0, import_chunk_t8x29mwc.rle)(e) && (0, import_chunk_9b4aq7fb.W7i)(l());
}
function l() {
  return (0, import_chunk_865at33z.b)("tengu_steady_anchor", true) !== false;
}
function GSr() {
  return oan() ? "session_profile" : "session_environment";
}
function P7() {
  if (g()) return !h();
  if (!oan()) return false;
  let [, e, n] = o()?.split(":") ?? [], [, i, r] = u()?.pin.split(":") ?? [];
  return r !== n || i !== e;
}
function h() {
  let [e, n, i] = o()?.split(":") ?? [], r = (0, import_chunk_ch6jxpf8.R_)(a);
  return r !== void 0 && r.kind === e && P(n ?? "", r.secret) === i;
}
var _ = (0, import_chunk_839h1d5e.Co)(import_chunk_g3a1gwww.opl, I), P = (0, import_chunk_839h1d5e.Co)(import_chunk_g3a1gwww.WHi, I);
function I(e, n) {
  return `${e} ${(0, import_crypto.createHash)("sha256").update(n).digest("hex")}`;
}
function a() {
  let e = (0, import_chunk_865at33z.eg)();
  if (e) return { kind: "env-token", secret: e };
  if ((0, import_chunk_865at33z.U4)()) return;
  if (import_chunk_c203g5kd.s.ANTHROPIC_API_KEY && O() === "ANTHROPIC_API_KEY" && ((0, import_chunk_865at33z.D1)() || (0, import_chunk_865at33z.pdt)())) return { kind: "env-key", secret: import_chunk_c203g5kd.s.ANTHROPIC_API_KEY };
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_OAUTH_TOKEN) return { kind: "env-oauth", secret: import_chunk_c203g5kd.s.CLAUDE_CODE_OAUTH_TOKEN };
  return (0, import_chunk_9b4aq7fb.gk)() === "env-quad" && (0, import_chunk_865at33z.cl)() && !f() ? { kind: "env-federation", secret: (0, import_chunk_g3a1gwww.BHi)([import_chunk_c203g5kd.s.ANTHROPIC_FEDERATION_RULE_ID, import_chunk_c203g5kd.s.ANTHROPIC_ORGANIZATION_ID]) } : void 0;
}
function rpl() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_OAUTH_TOKEN && import_chunk_c203g5kd.s.ANTHROPIC_PROFILE && (0, import_chunk_9b4aq7fb.gk)() === "profile-explicit" && l1n().pin === "env-oauth" && l() && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID === void 0 && !(0, import_chunk_gd77dyw4.kft)(process.env) ? _("env-setup", import_chunk_c203g5kd.s.CLAUDE_CODE_OAUTH_TOKEN) : void 0;
}
