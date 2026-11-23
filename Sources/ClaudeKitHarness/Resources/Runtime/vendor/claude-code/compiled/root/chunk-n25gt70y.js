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
var chunk_n25gt70y_exports = {};
__export(chunk_n25gt70y_exports, {
  JAt: () => JAt,
  Jj: () => Jj,
  LIr: () => LIr,
  Mct: () => Mct,
  Poe: () => Poe,
  YXe: () => YXe,
  _Vn: () => _Vn,
  _Yi: () => _Yi,
  aYi: () => aYi,
  c0l: () => c0l,
  cYi: () => cYi,
  dYi: () => dYi,
  f0l: () => f0l,
  fOo: () => fOo,
  fYi: () => fYi,
  gYi: () => gYi,
  hI: () => hI,
  hYi: () => hYi,
  iYi: () => iYi,
  lYi: () => lYi,
  mYi: () => mYi,
  oYi: () => oYi,
  pYi: () => pYi,
  rYi: () => rYi,
  sYi: () => sYi,
  u0l: () => u0l,
  uYi: () => uYi,
  uhn: () => uhn,
  yVn: () => yVn
});
module.exports = __toCommonJS(chunk_n25gt70y_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tp0b74sz = require("/$bunfs/root/chunk-tp0b74sz.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var rYi = ["signed_out", "identity_changed", "transient", "refresh_failed"];
function c0l(e) {
  return rYi.some((n) => n === e);
}
var _ = 0, g, p = 0;
function u0l(e) {
  if (_++, g = { reason: e, generation: _ }, e === "transient") oYi();
}
function oYi() {
  p++;
}
function sYi() {
  return p;
}
function f0l() {
  _++, g = void 0;
}
function fOo() {
  return g;
}
function _Vn() {
  return _;
}
class H {
  token = null;
  everHeld = /* @__PURE__ */ new Set();
  identity = null;
  hasIdentitySaidNothing = false;
  identityReasksMade = 0;
  identityOf = null;
  endedAtRead = null;
  hasEndToSettle = false;
  renewalHoldOffUntilMs = 0;
  judgeReplacement = null;
  readFlag = null;
  replacing = Promise.resolve();
  startupAskIds = /* @__PURE__ */ new Set();
  wasLauncherStarted = false;
  wasOpenToSignIn = false;
}
var i = new import_chunk_2904xtvq.j(() => new H()), A = (0, import_chunk_c203g5kd.T3)(Object.fromEntries([...import_chunk_gd77dyw4.GA, ...import_chunk_gd77dyw4.f2, ...import_chunk_gd77dyw4.Oge, ...import_chunk_gd77dyw4.Sra, "ANTHROPIC_UNIX_SOCKET", "CLAUDE_CODE_CUSTOM_OAUTH_URL", "ANTHROPIC_BASE_URL", "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_HOST_CREDS_FILE", "CLAUDE_SESSION_INGRESS_TOKEN_FILE", ...import_chunk_gd77dyw4.kce].map((e) => [e, import_chunk_72r477hv.L.rawStr()])), null), S = 6e4, k = [5e3, 3e4, 12e4], D = 6e5;
function hI() {
  let e = i.of((0, import_chunk_f9x2f6cx.N)().host);
  return e.wasLauncherStarted ||= Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_AUTH_ENV_VAR), e.wasOpenToSignIn ||= e.wasLauncherStarted && import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT !== "claude-desktop-3p", e.wasLauncherStarted;
}
function iYi() {
  return hI(), i.of((0, import_chunk_f9x2f6cx.N)().host).wasOpenToSignIn;
}
function aYi() {
  let e = i.of((0, import_chunk_f9x2f6cx.N)().host);
  e.wasLauncherStarted = false, e.wasOpenToSignIn = false, hI();
}
function JAt() {
  if (!hI()) return "not_launcher_started";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN) return "switched_off";
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return "not_first_party";
  if ((0, import_chunk_tp0b74sz.Q1)()) return "gateway_mandate";
  if ((0, import_chunk_2yx6c1y2.JPe)().forceLoginMethod === "console") return "login_method_pin";
  if (!(0, import_chunk_zhr7rpv7.pc)()) return "custom_base_url";
  let e = E((n) => {
    let o = A[n];
    return typeof o === "string" ? o : void 0;
  });
  if (e !== null) return e;
  try {
    if (!w((0, import_chunk_ephf358x.cn)().BASE_API_URL)) return "api_base_not_anthropic";
  } catch {
    return "api_base_not_anthropic";
  }
  if ((0, import_chunk_ephf358x.PI)() === "-local-oauth") return "endpoint_override";
  if ((0, import_chunk_fzp6hh55.sut)() || (0, import_chunk_fzp6hh55.Zx)() || (0, import_chunk_fzp6hh55.wK)() || [...import_chunk_gd77dyw4.Oge, "CLAUDE_BG_AUTH_SNAPSHOT_PATH"].some((n) => (0, import_chunk_f9x2f6cx.NNr)(n)) || (0, import_chunk_2gtmjt3y.Xn)() && (0, import_chunk_2yx6c1y2._e)("flagSettings")?.apiKeyHelper || import_chunk_c203g5kd.s.CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER) return "launcher_credential";
  try {
    let { envs: n, apiKeyHelper: o, unread: r } = (0, import_chunk_2yx6c1y2.SKn)();
    if (o || n.some((l) => E((c) => l[c]) !== null)) return "machine_policy_credential";
    if (n.some((l) => (0, import_chunk_69qhefwa.Ne)(l.CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN))) return "switched_off";
    if (r) return "machine_policy_unread";
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`[launcher-host-login] the read of the machine's managed settings threw (${n instanceof Error ? n.name : "unknown"})`, { level: "error" }), "machine_policy_unread";
  }
  if ((0, import_chunk_xcgcdx61.QKt)()) return "served_policy_unread";
  try {
    let { readFlag: n } = i.of((0, import_chunk_f9x2f6cx.N)().host);
    return n?.("tengu_kestrel_lantern", true) === false ? "switched_off" : null;
  } catch {
    return null;
  }
}
function Jj() {
  if (!hI()) return null;
  let e = i.of((0, import_chunk_f9x2f6cx.N)().host);
  return e.token !== null && f(e) === null ? e.token : null;
}
function yVn() {
  let e = i.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.token !== null) f(e);
  if (e.endedAtRead !== null) e.endedAtRead = null, (0, import_chunk_cqa9hrgx.m)("auth_launcher_host_login", "refused_while_held");
  let n = e.hasEndToSettle;
  return e.hasEndToSettle = false, n;
}
function lYi(e) {
  i.of((0, import_chunk_f9x2f6cx.N)().host).readFlag = e;
}
function dYi(e) {
  i.of((0, import_chunk_f9x2f6cx.N)().host).judgeReplacement = e;
}
function cYi(e) {
  if (!e || JAt() !== null) return false;
  let n = i.of((0, import_chunk_f9x2f6cx.N)().host);
  return n.token = e, n.everHeld.add((0, import_chunk_ccm69jjy.Je)(e)), true;
}
function Mct(e) {
  let n = i.of((0, import_chunk_f9x2f6cx.N)().host).everHeld;
  return n.size > 0 && n.has((0, import_chunk_ccm69jjy.Je)(e));
}
function LIr(e) {
  return Mct(e) && Jj() === null;
}
function Poe(e) {
  return e !== null && Mct(e.accessToken) ? null : e;
}
function uhn(e) {
  let n = i.of((0, import_chunk_f9x2f6cx.N)().host);
  if (n.identityOf = e, n.identity !== null && !n.hasIdentitySaidNothing) return n.identity;
  let o = Jj();
  if (o === null) return n.identity ?? Promise.resolve(null);
  let r = e(o).catch(() => null);
  return n.identity = r, n.hasIdentitySaidNothing = false, r.then((l) => {
    if (l !== null || n.identity !== r) return;
    n.hasIdentitySaidNothing = true;
    let c = k[n.identityReasksMade] ?? D;
    n.identityReasksMade += 1, setTimeout(T, c, n, r, e).unref();
  }), r;
}
function T(e, n, o) {
  try {
    if (e.identity === n && i.of((0, import_chunk_f9x2f6cx.N)().host) === e) uhn(o);
  } catch {
    (0, import_chunk_w578pjby.t)("[launcher-host-login] asking again whose sign-in this is threw", { level: "warn" });
  }
}
function uYi() {
  return i.of((0, import_chunk_f9x2f6cx.N)().host).identity;
}
function fYi() {
  let { identityOf: e } = i.of((0, import_chunk_f9x2f6cx.N)().host);
  return e === null ? Promise.resolve(null) : uhn(e);
}
function pYi(e) {
  i.of((0, import_chunk_f9x2f6cx.N)().host).startupAskIds.add(e);
}
function mYi(e) {
  return hI() && typeof e === "string" && i.of((0, import_chunk_f9x2f6cx.N)().host).startupAskIds.has(e);
}
function YXe() {
  let e = i.of((0, import_chunk_f9x2f6cx.N)().host), n = e.token !== null;
  return e.token = null, e.hasEndToSettle ||= n, n;
}
function f(e) {
  let n = JAt();
  if (n !== null && e.token !== null) e.token = null, e.endedAtRead = n, e.hasEndToSettle = true, (0, import_chunk_w578pjby.t)(`[launcher-host-login] the desktop app's sign-in is over for this process (refused_while_held: ${n})`, { level: "warn" });
  return n;
}
function hYi(e, n = "refused", o, r) {
  let l = i.of((0, import_chunk_f9x2f6cx.N)().host);
  return R(l, () => C(l, e, n, o, r));
}
function gYi(e) {
  let n = i.of((0, import_chunk_f9x2f6cx.N)().host), o;
  try {
    o = f(n);
  } catch (r) {
    return y(r), null;
  }
  if (!e || n.token === null || o !== null) return (0, import_chunk_w578pjby.t)(`[launcher-host-login] refused a pushed claude.ai token (${o ?? (e ? "none_held" : "empty")})`, { level: "warn" }), null;
  return R(n, () => O(n, e));
}
function R(e, n) {
  let o = e.replacing.then(n).catch((r) => (y(r), false));
  return e.replacing = o, o;
}
function y(e) {
  (0, import_chunk_w578pjby.t)(`[launcher-host-login] replacing the token held threw (${e instanceof Error ? e.name : "unknown"})`, { level: "error" });
}
async function C(e, n, o, r, l) {
  if (e.token === null || f(e) !== null) return false;
  if (e.token !== n) return true;
  let c = (0, import_chunk_f9x2f6cx.Bge)();
  if (!c || Date.now() < e.renewalHoldOffUntilMs) return false;
  let I = _Vn(), a;
  try {
    a = await c(o, r);
  } catch (d) {
    return (0, import_chunk_w578pjby.t)(`[launcher-host-login] oauth_token_refresh failed (${d instanceof Error ? d.name : "unknown"})`, { level: "warn" }), e.renewalHoldOffUntilMs = Date.now() + S, (0, import_chunk_cqa9hrgx.m)("auth_launcher_host_login", "request_failed"), false;
  }
  if (e.token === null) return false;
  if (JAt() !== null) return h(e, "refused_after_answer"), false;
  if (!a || a === n) l?.(a ? "same_token" : "none");
  if (!a) {
    let d = fOo();
    if (d !== void 0 && d.generation > I && d.reason === "identity_changed") return h(e, "identity_changed"), false;
    return (0, import_chunk_cqa9hrgx.m)("auth_launcher_host_login", "no_token"), false;
  }
  if (a === n) {
    if (o === "refused" && !(0, import_chunk_f9x2f6cx.nNr)(r)) (0, import_chunk_cqa9hrgx.m)("auth_launcher_host_login", "same_token");
    return false;
  }
  return O(e, a, true);
}
async function O(e, n, o = false) {
  if (e.token === null || f(e) !== null) return false;
  if (n === e.token) return true;
  let r = "refused";
  try {
    if (e.judgeReplacement !== null) r = await e.judgeReplacement(n);
  } catch (l) {
    (0, import_chunk_w578pjby.t)(`[launcher-host-login] the replacement could not be judged (${l instanceof Error ? l.name : "unknown"})`, { level: "error" });
  }
  if (e.token === null) return false;
  if (r === "held_unknown" && o) return h(e, "identity_never_learned"), false;
  if (r === "unverified" || r === "held_unknown") return e.renewalHoldOffUntilMs = Date.now() + S, (0, import_chunk_cqa9hrgx.m)("auth_launcher_host_login", "replacement_unverified"), false;
  if (r === "allowed" && JAt() === null) return e.token = n, e.everHeld.add((0, import_chunk_ccm69jjy.Je)(n)), (0, import_chunk_f9x2f6cx.i3t)(true), (0, import_chunk_cqa9hrgx.u)("auth_launcher_host_login"), true;
  return h(e, r === "allowed" ? "refused_after_answer" : "replacement_refused"), false;
}
function h(e, n) {
  e.token = null, e.hasEndToSettle = true, (0, import_chunk_w578pjby.t)(`[launcher-host-login] the desktop app's sign-in is over for this process (${n})`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("auth_launcher_host_login", n);
}
function E(e) {
  if (import_chunk_gd77dyw4.GA.some((o) => o.startsWith("CLAUDE_CODE_USE_") && (0, import_chunk_69qhefwa.Ne)(e(o)))) return "not_first_party";
  if (e("ANTHROPIC_UNIX_SOCKET")?.trim()) return "unix_socket";
  if (e("CLAUDE_CODE_CUSTOM_OAUTH_URL")?.trim()) return "custom_oauth_deployment";
  let n = e("ANTHROPIC_BASE_URL")?.trim();
  if (n && !w(n)) return "insecure_base_url";
  if (import_chunk_gd77dyw4.Sra.some((o) => e(o)?.trim())) return "endpoint_override";
  if (e("ANTHROPIC_CUSTOM_HEADERS")?.trim() || e("CLAUDE_CODE_HOST_CREDS_FILE")?.trim() || e("CLAUDE_SESSION_INGRESS_TOKEN_FILE")?.trim() || import_chunk_gd77dyw4.f2.some((o) => e(o)?.trim()) || import_chunk_gd77dyw4.Oge.some((o) => e(o)?.trim())) return "launcher_credential";
  if (import_chunk_gd77dyw4.kce.some((o) => {
    let r = e(o);
    return r !== void 0 && r !== "1";
  })) return "tls_verification_disabled";
  return null;
}
function _Yi() {
  return import_chunk_gd77dyw4.kce.some((e) => {
    let n = A[e];
    return n !== void 0 && n !== "1";
  });
}
function w(e) {
  return (0, import_chunk_zhr7rpv7.md)(e) && new URL(e).protocol === "https:";
}
