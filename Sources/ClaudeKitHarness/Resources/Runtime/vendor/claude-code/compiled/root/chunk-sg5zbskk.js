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
var chunk_sg5zbskk_exports = {};
__export(chunk_sg5zbskk_exports, {
  ALe: () => ALe,
  C9: () => C9,
  DEo: () => DEo,
  Gql: () => Gql,
  JYe: () => JYe,
  LEo: () => LEo,
  Pme: () => Pme,
  QYe: () => QYe,
  RLe: () => RLe,
  aEs: () => aEs,
  aGe: () => aGe,
  aGi: () => aGi,
  cCr: () => cCr,
  cGi: () => cGi,
  cjn: () => cjn,
  dGi: () => dGi,
  djn: () => djn,
  fCr: () => fCr,
  ged: () => ged,
  hed: () => hed,
  iEs: () => iEs,
  iGi: () => iGi,
  lEs: () => lEs,
  lGi: () => lGi,
  lxe: () => lxe,
  med: () => med,
  ped: () => ped,
  sEs: () => sEs,
  sGi: () => sGi,
  tT: () => tT,
  uCr: () => uCr,
  uun: () => uun
});
module.exports = __toCommonJS(chunk_sg5zbskk_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_kcy9vg4b = require("/$bunfs/root/chunk-kcy9vg4b.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_sr33d2zd = require("/$bunfs/root/chunk-sr33d2zd.js");
var import_chunk_fm523nqz = require("/$bunfs/root/chunk-fm523nqz.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_os = require("os");
var l = "tengu_sessions_elevated_auth_enforcement", c = "require_trusted_devices", F = "tengu_sessions_elevated_auth_disable_proactive_enrollment", K = 3e5, Y = 864e5;
class x {
  storedTokenRead = void 0;
  lastEnrollAttemptAtMs = 0;
  automaticEnrollmentNoticePending = false;
  automaticEnrollmentNoticeRaised = (0, import_chunk_69qhefwa.Be)();
  signInEnrollmentsInFlight = 0;
}
var v = new import_chunk_2904xtvq.j(() => new x()), cCr = "This computer was enrolled as a trusted device for your account (you will also get an email). If you did not expect this, review your devices in claude.ai settings.";
function sEs() {
  let e = v.of((0, import_chunk_f9x2f6cx.N)().host), n = e.automaticEnrollmentNoticePending;
  return e.automaticEnrollmentNoticePending = false, n;
}
function sGi(e) {
  return v.of((0, import_chunk_f9x2f6cx.N)().host).automaticEnrollmentNoticeRaised.subscribe(e);
}
function iGi() {
  if (sEs()) process.stderr.write(`${cCr}
`);
}
var uun = "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.";
function aGe() {
  return (0, import_chunk_865at33z.b)(F, false);
}
function U() {
  return require("/$bunfs/root/chunk-7bg0909g.js");
}
function p() {
  return require("/$bunfs/root/chunk-ts9zreqg.js");
}
function Pme() {
  if (!(0, import_chunk_865at33z.b)(l, false)) return false;
  return p().isPolicyAllowed(c);
}
function JYe() {
  if (!(0, import_chunk_865at33z.b)(l, false)) return false;
  return p().isPolicyEnforced(c);
}
function aGi() {
  if (!(0, import_chunk_sghy0qej.Pe)(l, { safe: true })) return false;
  let e = p();
  return e.isPolicyEnforcedOrHintedByRefusedCache(c) || e.isPolicyVerdictAbsent();
}
function ped() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && !import_chunk_c203g5kd.s.CLAUDE_TRUSTED_DEVICE_TOKEN && JYe();
}
var M = "not reachable with this tool from a cloud session: that session requires a trusted device, and this cloud session has none to show", iEs = `${M}. Tell your user it was not sent; do not look for another tool to send it with`, Z = /^(?:cse|session)_[0-9A-Za-z_-]{1,128}$/;
function aEs(e) {
  return e === void 0 || !Z.test(e.sessionId) ? void 0 : `This target may be reachable with ${e.sendTool}, the session service's own tool, if your user has allowed this cloud session to reach that computer; that session's id there is "${e.sessionId}". A tool of that name on any other server is not it.`;
}
function med(e, n) {
  let r = `Nothing was sent: Remote Control session '${e}' is`, o = aEs(n);
  return o === void 0 ? `${r} ${iEs}.` : `${r} ${M}. ${o}`;
}
function QYe() {
  if (!(0, import_chunk_sghy0qej.Pe)("tengu_bridge_attestation_enforce", { safe: true })) return import_chunk_53snsm3k.SEs;
  if (!(0, import_chunk_sghy0qej.Pe)(l, { safe: true }) || !p().isPolicyEnforcedOrHintedByRefusedCache(c)) return import_chunk_53snsm3k.SEs;
  return Q();
}
var J = "VERIFIED_KEYLESS_DEVICE", H = "tengu_bridge_attestation_enforce_config";
function Q() {
  try {
    let { value: e, source: n } = (0, import_chunk_865at33z.gn)(H, {});
    switch (n) {
      case "payload":
        return (0, import_chunk_865at33z.wf)() ? w(e, y()) : (0, import_chunk_53snsm3k.bEs)(e);
      case "disk":
        return w(e, y());
      case "override":
        return w(e, P());
      default:
        return P();
    }
  } catch {
    return y();
  }
}
function P() {
  return (0, import_chunk_865at33z.ni)() && !(0, import_chunk_865at33z.wf)() ? (0, import_chunk_53snsm3k.bEs)((0, import_chunk_865at33z.RX)()[H] ?? {}) : y();
}
function y() {
  return { enforce: true, acceptLevel: J, acceptStatuses: /* @__PURE__ */ new Set() };
}
function w(e, n) {
  return { ...n, acceptLevel: (0, import_chunk_53snsm3k.mTl)((0, import_chunk_53snsm3k.bEs)(e).acceptLevel, n.acceptLevel) };
}
function uCr() {
  let e = v.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.storedTokenRead !== void 0) return e.storedTokenRead;
  let n = X();
  return e.storedTokenRead = n, n;
}
async function X() {
  let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
  if (e) return e;
  return (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.trustedDeviceToken;
}
async function tT() {
  if (!Pme() || (0, import_chunk_2zeyvjwb.JLl)()) return;
  return uCr();
}
async function DEo() {
  if (!JYe()) return false;
  if (await uCr()) return false;
  return true;
}
async function ee() {
  if (!await DEo()) return null;
  let e = (0, import_chunk_fm523nqz.glt)();
  if (e !== null) return e;
  if (aGe()) return uun;
  return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}
async function lGi(e) {
  return await (0, import_chunk_865at33z.FC)(l), await lEs(e), ee();
}
function ALe(e, n) {
  (0, import_chunk_w578pjby.t)(`${e} untrusted_device read as ${n.kind}${"subReason" in n ? ` (sub_reason ${(0, import_chunk_tp3c5q2s.Ft)(n.subReason, 64)})` : ""}; not re-enrolling`);
}
function C9() {
  v.of((0, import_chunk_f9x2f6cx.N)().host).storedTokenRead = void 0;
}
async function RLe(e, n) {
  if (!Pme()) return;
  C9();
  let r = await tT();
  if (!r || r === e) {
    let o = await Gql(r), h = v.of((0, import_chunk_f9x2f6cx.N)().host);
    if (o !== "none") (0, import_chunk_w578pjby.t)(o === "recent" ? "[trusted-device] The refused device token is one an earlier refusal enrolled; not enrolling again" : "[trusted-device] The stored time of the last enrollment after a refusal is unusable; not enrolling until a sign-in clears it");
    else if (Date.now() - h.lastEnrollAttemptAtMs >= K) h.lastEnrollAttemptAtMs = Date.now(), await fCr({ trigger: "server_denied", credentials: n }), r = await tT();
  }
  if (!r || r === e) return;
  return (0, import_chunk_w578pjby.t)("[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry"), r;
}
async function Gql(e) {
  if (!e) return "none";
  let n = await (0, import_chunk_zzrn5zap.Er)().readAsync(), r = n?.trustedDeviceEnrolledAfterRefusalAtMs;
  if (n?.trustedDeviceToken !== e || r === void 0) return "none";
  let o = Date.now();
  if (!Number.isSafeInteger(r) || r <= 0 || r > o) return "unusable";
  return o - r < Y ? "recent" : "none";
}
async function djn(e, n, r) {
  let o = await RLe(e, r);
  if (!o) return;
  return n(o);
}
var te = "the server requires a trusted device, and trusted-device enrollment is not turned on for this session, so this computer was not enrolled. Try again in a few minutes; if it keeps failing, contact your administrator", dGi = "session expired for trusted-device check \u2014 run /login to re-authenticate";
function lxe(e, n = { justEnrolled: false }) {
  if (e?.kind === "signature_wanted") return import_chunk_sr33d2zd.PLe;
  let r = (0, import_chunk_fm523nqz.mGt)();
  if (r !== null) return r;
  if (!Pme()) return te;
  if (aGe()) return uun;
  return n.justEnrolled ? "this computer was just enrolled as a trusted device, but the server has not accepted it yet. Try again in a few minutes. If it keeps failing, sign in again with /login, then retry" : "this computer is not a trusted device for your account yet, and it could not be enrolled automatically right now. Try again in a few minutes. If it keeps failing, sign in again with /login, then retry";
}
async function lEs(e) {
  if (!JYe()) return;
  if (C9(), !await DEo()) return;
  if (aGe()) return;
  (0, import_chunk_w578pjby.t)("[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token"), await fCr({ lazy: true, credentials: e });
}
async function hed(e) {
  if (!Pme()) return (0, import_chunk_w578pjby.Zp)("trusted_devices_off");
  if (C9(), await uCr()) return (0, import_chunk_w578pjby.oy)(void 0);
  if (aGe()) return (0, import_chunk_w578pjby.Zp)("enrollment_paused");
  return (0, import_chunk_w578pjby.t)("[trusted-device] Not enrolled, enrolling for a device-bound session"), await fCr({ trigger: "device_bind", credentials: e }), await tT() ? (0, import_chunk_w578pjby.oy)(void 0) : (0, import_chunk_w578pjby.Zp)("not_given");
}
function cGi() {
  let { isClaudeAISubscriber: e } = require("/$bunfs/root/chunk-3n4jnb8b.js");
  if (!(0, import_chunk_zhr7rpv7.jn)() || !e()) {
    LEo();
    return;
  }
  if (aGe()) {
    LEo();
    return;
  }
  C9(), (0, import_chunk_zzrn5zap.Er)().mutate((n) => n.trustedDeviceToken || n.trustedDeviceEnrolledAfterRefusalAtMs !== void 0 ? { ...n, trustedDeviceToken: void 0, trustedDeviceEnrolledAfterRefusalAtMs: void 0 } : n).catch(() => {
  });
}
async function LEo() {
  let e = (0, import_chunk_zzrn5zap.Er)();
  if ((await e.readAsync().catch(() => null))?.trustedDeviceEnrolledAfterRefusalAtMs === void 0) return;
  await e.mutate((r) => r.trustedDeviceEnrolledAfterRefusalAtMs === void 0 ? r : { ...r, trustedDeviceEnrolledAfterRefusalAtMs: void 0 }).catch(() => {
  });
}
function cjn() {
  return B((0, import_chunk_865at33z.b)(l, false));
}
async function ged() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true) return "no_cloud_container";
  if (!C()) return "no";
  return await (0, import_chunk_5appeerh.me)((async () => {
    let n = await (0, import_chunk_865at33z.FC)(l);
    if (!n) return (0, import_chunk_865at33z.k6t)(l) ? "no_gate_off" : "no";
    await U().waitForPolicyLimitsToLoad();
    let r = B(n), o = p();
    return r === "no" && C() && !o.isPolicyEnforced(c) && (!o.isPolicyLimitsEligible() || o.isSessionVerdictFromServerFetch() && !o.isSessionVerdictDisowned()) ? "no_not_required" : r;
  })(), ne).catch(() => {
    return;
  }) ?? cjn();
}
var ne = 5e3;
function B(e) {
  if (!e || !C() || !p().isPolicyEnforced(c)) return "no";
  return aGe() ? "paused" : "enrolls";
}
function C() {
  let { isClaudeAISubscriber: e } = require("/$bunfs/root/chunk-3n4jnb8b.js");
  return !(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true || import_chunk_c203g5kd.s.DISABLE_LOGIN_COMMAND || !(0, import_chunk_zhr7rpv7.jn)() || !e() || process.env.CLAUDE_TRUSTED_DEVICE_TOKEN || (0, import_chunk_k449cc64.wt)());
}
async function fCr({ trigger: e = "proactive", lazy: n = false, credentials: r }) {
  let { isClaudeAISubscriber: o, isConsumerSubscriber: h, getClaudeAIOAuthTokens: R, checkAndRefreshOAuthTokenIfNeeded: V } = require("/$bunfs/root/chunk-3n4jnb8b.js"), { loginToHandOn: I } = require("/$bunfs/root/chunk-d0frsvsd.js");
  if (!(0, import_chunk_zhr7rpv7.jn)() || !o()) return;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true) {
    (0, import_chunk_w578pjby.t)("[trusted-device] In a cloud container, skipping enrollment");
    return;
  }
  let T = v.of((0, import_chunk_f9x2f6cx.N)().host), D = e === "proactive" && !n;
  if (D) T.signInEnrollmentsInFlight++;
  try {
    if (!await (0, import_chunk_865at33z.FC)(l)) {
      (0, import_chunk_w578pjby.t)(`[trusted-device] Gate ${l} is off, skipping enrollment`);
      return;
    }
    if (aGe()) {
      (0, import_chunk_w578pjby.t)(`[trusted-device] Proactive enrollment disabled via ${F}, skipping`);
      return;
    }
    if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
      (0, import_chunk_w578pjby.t)("[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)");
      return;
    }
    await U().waitForPolicyLimitsToLoad();
    let A = p(), L = A.isPolicyEnforced(c), G = e === "server_denied" || e === "device_bind" && h();
    if (!(L || G && A.isPolicyAllowed(c))) {
      (0, import_chunk_w578pjby.t)(`[trusted-device] Org has not enabled ${c}, skipping enrollment`);
      return;
    }
    if ((0, import_chunk_k449cc64.wt)()) {
      (0, import_chunk_w578pjby.t)("[trusted-device] Essential traffic only, skipping enrollment");
      return;
    }
    if (await V({ credentials: r }), !I(R())?.accessToken) {
      (0, import_chunk_w578pjby.t)("[trusted-device] No OAuth token, skipping enrollment");
      return;
    }
    let O = await (0, import_chunk_xfj2cwfv.eB)(e === "server_denied") ?? await (0, import_chunk_xfj2cwfv.eB)(), k = O ?? I(R())?.accessToken;
    if (!k) {
      (0, import_chunk_w578pjby.t)("[trusted-device] The sign-in ended while waiting for the host's cloud-sessions token, skipping enrollment");
      return;
    }
    let g = { trigger: (0, import_chunk_78g0060s.f)(e), org_enforced: L, sessions_bearer: O !== null }, q = (0, import_chunk_ephf358x.cn)().BASE_API_URL, E;
    try {
      E = await import_chunk_kcy9vg4b.LS.post(`${q}/api/auth/trusted_devices`, { display_name: `Claude Code on ${(0, import_os.hostname)()} \xB7 ${(0, import_chunk_cg8dqz0a.Nft)("darwin")}` }, { headers: { "User-Agent": (0, import_chunk_tb84sczh.Ri)(), Authorization: `Bearer ${k}`, "Content-Type": "application/json" }, timeout: 1e4, validateStatus: (a) => a < 500 });
    } catch (a) {
      (0, import_chunk_w578pjby.t)(`[trusted-device] Enrollment request failed: ${(0, import_chunk_jv7av99m.d)(a)}`), (0, import_chunk_cqa9hrgx.m)("bridge_trusted_device_enroll", "request_failed", g);
      return;
    }
    if (E.status !== 200 && E.status !== 201) {
      (0, import_chunk_w578pjby.t)(`[trusted-device] Enrollment failed ${E.status}: ${(0, import_chunk_w578pjby._)(E.data).slice(0, 200)}`), (0, import_chunk_cqa9hrgx.m)("bridge_trusted_device_enroll", "http_error", g);
      return;
    }
    let S = E.data?.device_token;
    if (!S || typeof S !== "string") {
      (0, import_chunk_w578pjby.t)("[trusted-device] Enrollment response missing device_token field"), (0, import_chunk_cqa9hrgx.m)("bridge_trusted_device_enroll", "missing_token", g);
      return;
    }
    try {
      let a = await (0, import_chunk_zzrn5zap.Er)().mutate((W) => ({ ...W, trustedDeviceToken: S, trustedDeviceEnrolledAfterRefusalAtMs: e === "server_denied" ? Date.now() : void 0 }));
      if (!a.success) {
        (0, import_chunk_w578pjby.t)(`[trusted-device] Failed to persist token: ${a.warning ?? "unknown"}`), (0, import_chunk_cqa9hrgx.m)("bridge_trusted_device_enroll", "storage_failed", g);
        return;
      }
      C9(), (0, import_chunk_w578pjby.t)(`[trusted-device] Enrolled device_id=${E.data.device_id ?? "unknown"}`), (0, import_chunk_cqa9hrgx.u)("bridge_trusted_device_enroll", g);
    } catch (a) {
      (0, import_chunk_w578pjby.t)(`[trusted-device] Storage write failed: ${(0, import_chunk_jv7av99m.d)(a)}`), (0, import_chunk_cqa9hrgx.m)("bridge_trusted_device_enroll", "storage_failed", g);
      return;
    }
    if (D || T.signInEnrollmentsInFlight > 0) return;
    try {
      if ((0, import_chunk_f9x2f6cx.Se)()) {
        if ((0, import_chunk_w578pjby.t)(`[trusted-device] ${cCr}`), process.stderr.isTTY) process.stderr.write(`${cCr}
`);
      } else T.automaticEnrollmentNoticePending = true, T.automaticEnrollmentNoticeRaised.emit();
    } catch (a) {
      (0, import_chunk_k449cc64.i)(a);
    }
  } catch (A) {
    (0, import_chunk_w578pjby.t)(`[trusted-device] Enrollment error: ${(0, import_chunk_jv7av99m.d)(A)}`), (0, import_chunk_cqa9hrgx.m)("bridge_trusted_device_enroll", "unexpected_error", { trigger: (0, import_chunk_78g0060s.f)(e) });
  } finally {
    if (D) T.signInEnrollmentsInFlight--;
  }
}
