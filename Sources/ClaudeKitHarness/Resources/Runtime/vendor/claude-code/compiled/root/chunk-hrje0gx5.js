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
var chunk_hrje0gx5_exports = {};
__export(chunk_hrje0gx5_exports, {
  C_e: () => C_e,
  J2r: () => J2r,
  J6s: () => J6s,
  Ojo: () => Ojo,
  Pjo: () => Pjo,
  Q6s: () => Q6s,
  Qmt: () => Qmt,
  Rjo: () => Rjo,
  X2r: () => X2r,
  X6s: () => X6s,
  Y2r: () => Y2r,
  Y6s: () => Y6s,
  Z6s: () => Z6s,
  _$e: () => _$e,
  _8t: () => _8t,
  aMt: () => aMt,
  cka: () => cka,
  dka: () => dka,
  eJn: () => eJn,
  eVs: () => eVs,
  nEn: () => nEn,
  nJn: () => nJn,
  q2r: () => q2r,
  q6s: () => q6s,
  tJn: () => tJn,
  tVs: () => tVs,
  uka: () => uka,
  xjo: () => xjo
});
module.exports = __toCommonJS(chunk_hrje0gx5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_zs6b24vw = require("/$bunfs/root/chunk-zs6b24vw.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var import_chunk_a3qepapr = require("/$bunfs/root/chunk-a3qepapr.js");
var import_chunk_pbbjnb48 = require("/$bunfs/root/chunk-pbbjnb48.js");
var import_chunk_rvyhd8z3 = require("/$bunfs/root/chunk-rvyhd8z3.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function Y(e, n) {
  let r = (0, import_chunk_865at33z.FRs)(n.tier, n.tierVerifiedAtMs, e.graceTtlHours, n.nowMs ?? Date.now());
  if (r !== null || n.tier === null) return { tier: r, credentialShape: n.credentialShape };
  return { tier: null, credentialShape: n.credentialShape === "stored_login" ? "untiered_login" : n.credentialShape };
}
function _$e(e, n) {
  if (n.provider !== "firstParty") return { candidate: false, exclusion: "provider" };
  if (!n.firstPartyBaseUrl) return { candidate: false, exclusion: "base_url" };
  if (n.authRecoveryCommand) return { candidate: false, exclusion: "auth_command" };
  let r = Y(e, n);
  switch (r.credentialShape) {
    case "stored_login":
    case "untiered_login":
      break;
    case "api_key":
    case "env_token_only":
    case "key_helper_only":
    case "none":
      return { candidate: false, exclusion: "credential_shape" };
  }
  let o = (0, import_chunk_rvyhd8z3.fmn)(r.tier) || r.credentialShape !== "untiered_login" || n.storedLoginOrigin !== true ? r.tier : e.plans[0] ?? "team";
  if (!(0, import_chunk_rvyhd8z3.fmn)(o)) return { candidate: false, exclusion: "tier_unknown" };
  if (!e.enabled) return { candidate: false, exclusion: "flag_off" };
  if (!e.plans.includes(o)) return { candidate: false, exclusion: "tier_not_in_plans" };
  if (n.hostToken === true && !e.hostTokens) return { candidate: false, exclusion: "host_token" };
  if (!(0, import_chunk_a3qepapr.oVs)(e, n.bucket)) return { candidate: false, exclusion: "rollout_percent" };
  return { candidate: true, tier: o };
}
var J = 36e5;
function Rjo(e, n) {
  if (e.exemptReasons.includes(n)) return true;
  return n === "refused_not_entitled" && !e.refuseNotEntitled;
}
function Q(e, n) {
  if ((0, import_chunk_rvyhd8z3.qPr)(e.reason) === "fetched") return "fetched";
  if (!e.hasAdmittedCache) return "no";
  if (e.admittedCacheAgeMs === void 0 || e.admittedCacheAgeMs < 0) return "no";
  return e.admittedCacheAgeMs <= n * J ? "cached" : "no";
}
function aMt(e) {
  let { flag: n, candidacy: r, surface: o } = e, a = e.blockedMs ?? 0;
  if (!n.enabled || !r.candidate) return { verdict: "pass", blockedMs: a, surface: o };
  let c = [["policy", e.policy], ["settings", e.settings]], u = false;
  for (let [l, m] of c) {
    if ((0, import_chunk_rvyhd8z3.qPr)(m.reason) !== "refused") continue;
    if (Rjo(n, m.reason)) {
      u = true;
      continue;
    }
    return { verdict: "refused", reason: m.reason, resource: l, blockedMs: a, surface: o };
  }
  let d = false, g;
  for (let [l, m] of c) {
    let h = Q(m, n.graceTtlHours);
    if (h === "fetched") continue;
    if (h === "cached") {
      d = true;
      continue;
    }
    if (Rjo(n, m.reason)) {
      u = true;
      continue;
    }
    if (g === void 0 || g[1].reason === "unavailable_pending" && m.reason !== "unavailable_pending") g = [l, m];
  }
  if (g !== void 0) return { verdict: "blocked", reason: g[1].reason, resource: g[0], blockedMs: a, surface: o };
  return { verdict: u ? "pass_exempt" : d ? "pass_cached" : "pass", blockedMs: a, surface: o };
}
function X(e) {
  if (e.hasOAuthToken && e.oauthEffective) return e.subscriptionType === null ? "untiered_login" : "stored_login";
  if (e.apiKeyEnv) return "api_key";
  if (e.envToken) return "env_token_only";
  if (e.keyHelper) return "key_helper_only";
  return "none";
}
function y() {
  try {
    switch ((0, import_chunk_865at33z.xa)().source) {
      case "claude.ai":
        return (0, import_chunk_865at33z.wa)();
      case "CCR_OAUTH_TOKEN_FILE":
      case "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR":
        return (0, import_chunk_865at33z.wa)() && (0, import_chunk_865at33z.Vg)();
      default:
        return false;
    }
  } catch {
    return true;
  }
}
function Z() {
  try {
    return (0, import_chunk_865at33z.wa)();
  } catch {
    return false;
  }
}
function E() {
  let e = (0, import_chunk_865at33z.dm)();
  return X({ hasOAuthToken: e, oauthEffective: e && Z(), subscriptionType: (0, import_chunk_865at33z.Jxe)(), apiKeyEnv: !!import_chunk_c203g5kd.s.ANTHROPIC_API_KEY, envToken: (0, import_chunk_865at33z.eg)() !== void 0, keyHelper: (0, import_chunk_865at33z.o_)() !== void 0 });
}
function _8t(e) {
  let n = E(), r = y();
  return { provider: (0, import_chunk_zhr7rpv7.ve)(), firstPartyBaseUrl: (0, import_chunk_zhr7rpv7.pc)(), authRecoveryCommand: e.authRecoveryCommand, tier: (0, import_chunk_865at33z.Jxe)(), credentialShape: n, storedLoginOrigin: r, hostToken: n === "stored_login" && !r, tierVerifiedAtMs: (0, import_chunk_865at33z.wpn)(), nowMs: Date.now(), bucket: (0, import_chunk_a3qepapr.rVs)((0, import_chunk_865at33z.$1)()) };
}
function _(e, n) {
  let r = e?.[n];
  return typeof r === "string" ? r : void 0;
}
function M(e, n) {
  let r = e?.[n];
  return typeof r === "number" ? r : void 0;
}
function ee(e, n) {
  let r = M(n, "policy_cache_age_ms"), o = e?.hadCache === true || e?.source === "cache", a = { hasAdmittedCache: o, admittedCacheAgeMs: o ? r : void 0 };
  if (_(n, "policy_ineligible_reason") !== void 0 || e?.source === "ineligible") return { ...a, reason: "not_attempted" };
  let c = _(n, "policy_load_state");
  if (c === "succeeded" || n?.policy_live_verdict === true || e?.source === "fetch") return { ...a, reason: "ok" };
  if (e?.source === "none") return { ...a, reason: "none_configured" };
  if (c === "in_flight" || c === "not_started" || c === void 0 && e === void 0) return { ...a, reason: "unavailable_pending" };
  let u = _(n, "policy_server_error_code"), d = _(n, "policy_server_auth_denial"), g = M(n, "policy_http_status");
  return { ...a, reason: S(_(n, "policy_error_code"), _(n, "policy_credential_state"), g, _(n, "policy_server_error_type"), import_chunk_2nv4wrez._Eo.find((l) => l === u), import_chunk_2nv4wrez.Gvl.find((l) => l === d)), httpStatus: g };
}
function q2r(e) {
  return e === 429 || e === 408 || e === 409 || e === 425;
}
function F(e) {
  return e === "other" ? void 0 : e;
}
function H(e, n, r) {
  return e === "dead" && (0, import_chunk_865at33z.Vqi)(n, r) !== "organization";
}
function xjo(e, n, r, o) {
  if (F(n) === void 0) return;
  let a = (0, import_chunk_865at33z.Vqi)(r, o);
  if (a === "organization") return "refused_not_entitled";
  if (a === "credential") return "refused_credential";
  if (e === 404) return "none_configured";
  if (e === 401 || e === void 0) return;
  if (e === 403) return "refused_not_entitled";
  if (q2r(e) || e >= 500) return;
  return "unavailable_server";
}
function S(e, n, r, o, a, c) {
  if (H(n, a, c)) return "refused_credential";
  let u = F(o), d = xjo(r, u, a, c);
  if (d !== void 0 && (e === "auth_failed" || e === "request_failed")) return d;
  switch (e) {
    case "auth_failed":
      if (n === "dead") return "refused_credential";
      if (r === 401) return "unavailable_credential_refresh";
      if (r === 403) return "blocked_by_intermediary";
      if (r === void 0 && u === void 0) return n === void 0 ? "client_no_credentials" : "unavailable_credential_refresh";
      return "refused_not_entitled";
    case "timeout":
      return "unavailable_timeout";
    case "network_error":
      return "unavailable_connect";
    case "request_failed":
      if (q2r(r)) return "unavailable_rate_limited";
      if (r === 304 || r === 404) return "blocked_by_intermediary";
      return r === void 0 ? "unavailable_connect" : "unavailable_server";
    case "spurious_304":
    case "stale_tunnel_credential":
      return "unavailable_server";
    case "parse_failed":
      return "blocked_by_intermediary";
    case "session_changed":
    case void 0:
      return "unavailable_pending";
    default:
      return "client_error";
  }
}
function w() {
  let e = false;
  try {
    e = (0, import_chunk_xcgcdx61.Yb)() !== null;
  } catch {
    e = false;
  }
  let n;
  try {
    n = e ? (0, import_chunk_p1ewvgeh.gyl)() : void 0;
  } catch {
    n = void 0;
  }
  return { present: e, ageMs: n };
}
var te = /* @__PURE__ */ new Set(["sandboxed_entrypoint", "claude_tag", "hermetic_remote_session"]);
function R(e, n, r, o = { present: false, ageMs: void 0 }, a = false) {
  let c = o.present || e?.hadCache === true || e?.source === "cache" || n?.state === "stale_cache", u = { hasAdmittedCache: c, admittedCacheAgeMs: c ? o.ageMs : void 0 }, d = r ?? (n?.state === "ineligible" ? n.reason : void 0);
  if (d !== void 0 || e?.source === "ineligible") return { ...u, reason: d !== void 0 && te.has(d) && !a ? "not_required" : "not_attempted" };
  if (n?.state === "ok") return { ...u, reason: n.hasSettings ? "ok" : "none_configured" };
  if (e?.source === "fetch") return { ...u, reason: "ok" };
  if (e?.source === "none") return { ...u, reason: "none_configured" };
  if (n?.state === "failed" || n?.state === "stale_cache") return { ...u, reason: ne(n.failure.errorKind, n.failure.httpStatus, n.failure.serverErrorType, n.failure.credentialState, n.failure.serverErrorCode, n.failure.serverAuthDenial, n.failure.noResponse), httpStatus: n.failure.httpStatus };
  if (e?.source === "error" || e?.source === "rejected") return { ...u, reason: "client_error" };
  return { ...u, reason: "unavailable_pending" };
}
function ne(e, n, r, o, a, c, u) {
  if (H(o, a, c)) return "refused_credential";
  let d = F(r), l = xjo(n ?? (e === "http_401" ? 401 : e === "http_403" ? 403 : void 0), d, a, c);
  if (l !== void 0 && (e === "http_401" || e === "http_403" || e === "http_4xx")) return l;
  switch (e) {
    case "http_401":
      return o === "dead" ? "refused_credential" : "unavailable_credential_refresh";
    case "profile_credential_error":
      return "refused_credential";
    case "http_403":
      return o === "dead" ? "refused_credential" : "blocked_by_intermediary";
    case "parse_error":
      return "blocked_by_intermediary";
    case "http_4xx":
      if (q2r(n)) return "unavailable_rate_limited";
      return "blocked_by_intermediary";
    case "ruled_empty":
    case "sign_in_off":
      return "unavailable_settings_unusable";
    case "http_5xx":
      return "unavailable_server";
    case "timeout":
      return "unavailable_timeout";
    case "network_error":
      return "unavailable_connect";
    case "no_auth_available":
    case "api_key_not_sent":
      return "client_no_credentials";
    case "unknown_error":
      if (n === 304) return "blocked_by_intermediary";
      return u === true ? "unavailable_connect" : "client_error";
    default:
      return "client_error";
  }
}
function re() {
  return (0, import_chunk_f9x2f6cx.Se)() ? "noninteractive" : "startup";
}
function ie(e, n, r, o, a, c = "fallback", u = { present: false, ageMs: void 0 }, d = false, g) {
  let l = _$e(e, n), m = _$e({ ...e, enabled: true, plans: ["team", "enterprise"], percent: 100 }, n), h = ee(r.policy, r.policyGateFields), b = R(r.settings, o, a, u, d), P = { flag: { ...e, enabled: true, plans: ["team", "enterprise"], percent: 100 }, candidacy: m, policy: h, settings: b, surface: re() }, G = aMt(P);
  return { decision: (0, import_chunk_78g0060s.f)(G.verdict), decision_reason: (0, import_chunk_78g0060s.fe)(G.reason), decision_resource: (0, import_chunk_78g0060s.fe)(G.resource), surface: (0, import_chunk_78g0060s.f)(G.surface), blocked_ms: 0, candidate_if_armed: m.candidate, exclusion_if_armed: (0, import_chunk_78g0060s.fe)(m.candidate ? void 0 : m.exclusion), candidate_now: l.candidate, exclusion_now: (0, import_chunk_78g0060s.fe)(l.candidate ? void 0 : l.exclusion), flag_enabled: e.enabled, flag_source: (0, import_chunk_78g0060s.f)(c), flag_percent: e.percent, grace_ttl_hours: e.graceTtlHours, tier: (0, import_chunk_78g0060s.fe)(ue(n.tier)), credential_shape: (0, import_chunk_78g0060s.f)(n.credentialShape), policy_reason: (0, import_chunk_78g0060s.f)(h.reason), policy_has_cache: h.hasAdmittedCache, policy_cache_age_ms: h.admittedCacheAgeMs, settings_reason: (0, import_chunk_78g0060s.f)(b.reason), settings_has_cache: b.hasAdmittedCache, settings_cache_age_ms: b.admittedCacheAgeMs, ...oe(P, g) };
}
function oe(e, n) {
  if (n === void 0) return {};
  try {
    let r = n();
    return { settings_stored_copy: (0, import_chunk_78g0060s.f)(r.settings.storedCopy), policy_stored_copy: (0, import_chunk_78g0060s.f)(r.policy.storedCopy), settings_live_signed: (0, import_chunk_78g0060s.f)(r.settings.liveSigned), policy_live_signed: (0, import_chunk_78g0060s.f)(r.policy.liveSigned), decision_if_strict: (0, import_chunk_78g0060s.f)(ae(e, r)) };
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config gate: the signature facts threw (${(0, import_chunk_7q6ee47s.M0)(r)})`, "org-config gate: the signature facts threw")), {};
  }
}
function ae(e, n) {
  let r = D(e, n, true), o = D(e, n, false);
  return r === o ? r : "pending";
}
function D(e, n, r) {
  return aMt({ ...e, policy: L(e.policy, n.policy, r), settings: L(e.settings, n.settings, r) }).verdict;
}
function L(e, { storedCopy: n }, r) {
  return n === "trusted" || n === "not_read" || n === "pending" && r ? e : { ...e, hasAdmittedCache: false, admittedCacheAgeMs: void 0 };
}
function dka(e) {
  (0, import_chunk_7q6ee47s.Tvl)((n) => {
    let { flag: r, source: o } = (0, import_chunk_a3qepapr.lMt)();
    return ie(r, _8t(e), n, (0, import_chunk_xcgcdx61.Tm)(), (0, import_chunk_xcgcdx61.mge)(), o, w(), y(), e.readSignatureFacts);
  }, e.settle === void 0 ? void 0 : ce(e.settle, se));
}
var se = 35e3;
function ce(e, n) {
  return () => Promise.race([e().catch(() => {
  }), (0, import_chunk_5appeerh.K)(n, void 0, { unref: true })]);
}
function ue(e) {
  switch (e) {
    case "max":
    case "pro":
    case "team":
    case "enterprise":
      return e;
    default:
      return;
  }
}
function ge(e) {
  let n = { hasAdmittedCache: e.hasCache, admittedCacheAgeMs: e.hasCache ? e.cacheAgeMs : void 0 };
  if (!e.eligible) return { ...n, reason: "not_attempted" };
  let r = !e.loadFromEarlierGeneration;
  if (e.liveVerdict || r && e.loadState === "succeeded") return { ...n, reason: "ok" };
  let o = e.latestLoad;
  if (o !== void 0) return o.succeeded ? { ...n, reason: "ok" } : { ...n, reason: S(o.errorCode, o.credentialState, o.httpStatus, o.serverErrorType, o.serverErrorCode, o.serverAuthDenial), httpStatus: o.httpStatus };
  if (!r) return { ...n, reason: "unavailable_pending" };
  if (e.loadState === "not_started" || e.loadState === "in_flight") {
    let a = e.loadLastAttempt;
    return a === void 0 ? { ...n, reason: "unavailable_pending" } : { ...n, reason: S(a.errorCode, "unknown", a.httpStatus, a.serverErrorType, a.serverErrorCode, a.serverAuthDenial), httpStatus: a.httpStatus };
  }
  return { ...n, reason: S(e.loadErrorCode, e.loadCredentialState, e.loadHttpStatus, e.loadServerErrorType, e.loadServerErrorCode, e.loadServerAuthDenial), httpStatus: e.loadHttpStatus };
}
function q6s() {
  return ge((0, import_chunk_7q6ee47s.Dks)());
}
function Y6s() {
  return R(void 0, (0, import_chunk_xcgcdx61.Tm)(), (0, import_chunk_xcgcdx61.mge)(), w(), y());
}
function W() {
  return { policy: q6s(), settings: Y6s() };
}
function z(e, n) {
  let r = n === void 0 ? void 0 : e[n].httpStatus, o = (0, import_chunk_865at33z.Sn)()?.organizationName;
  return { organizationName: o === void 0 || o === null ? void 0 : (0, import_chunk_13h3tw8q.js)(o), httpStatus: r };
}
var N = "api.anthropic.com/api/claude_code/policy_limits and api.anthropic.com/api/claude_code/settings";
function p(e) {
  let n = e.organizationName !== void 0 ? (0, import_chunk_13h3tw8q.js)(e.organizationName).trim() : "";
  return n !== "" ? n : "Your organization";
}
function C(e) {
  return e.requestId !== void 0 ? ` Request id: ${(0, import_chunk_13h3tw8q.js)(e.requestId)}.` : "";
}
function Pjo(e, n = {}) {
  if (e.verdict === "pass" || e.verdict === "pass_cached" || e.verdict === "pass_exempt") return;
  switch (e.reason) {
    case "refused_credential":
      return "Your Claude session has expired. Sign in again to continue (claude auth login).";
    case "refused_not_entitled":
      return `${p(n)} doesn't allow Claude Code for this account. Ask an admin of your organization, or sign in with a different account (claude auth login).${C(n)}`;
    case "refused_other":
      return `${p(n)} refused this session's organization settings${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. Sign in again, or ask an admin of your organization.${C(n)}`;
    case "blocked_by_intermediary":
      return `Claude Code couldn't load your organization's settings: the reply came from a network proxy, not Anthropic${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus}, no request id)` : ""}. ${p(n)} requires these settings before a session can start. Ask IT to allow HTTPS to ${N}, then retry.`;
    case "unavailable_timeout":
      return `Claude Code couldn't load your organization's settings (timed out). ${p(n)} requires them before a session can start. ${v(e)} check https://status.anthropic.com if this persists.${C(n)}${(0, import_chunk_w58msjm6.UJt)()}`;
    case "unavailable_connect":
      return `Claude Code couldn't reach Anthropic to load your organization's settings (could not connect). ${p(n)} requires them before a session can start. Check your network connection and retry; if you are on a corporate network, ask IT to allow HTTPS to ${N}.${(0, import_chunk_w58msjm6.UJt)()}`;
    case "unavailable_server":
      return `Claude Code couldn't load your organization's settings: Anthropic returned an error${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. ${p(n)} requires them before a session can start. ${v(e)} check https://status.anthropic.com if this persists.${C(n)}`;
    case "unavailable_rate_limited":
      return `Claude Code couldn't load your organization's settings: Anthropic asked it to retry shortly${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. ${p(n)} requires them before a session can start. ${v(e)} check https://status.anthropic.com if this persists.${C(n)}`;
    case "unavailable_credential_refresh":
      return e.surface === "noninteractive" ? `Claude Code couldn't verify your sign-in with Anthropic yet (its sign-in token was still being refreshed, often by another Claude Code process), so it couldn't load your organization's settings. ${p(n)} requires them before a session can start. ${v(e)} if this persists, sign in again (claude auth login).${C(n)}` : `Claude Code couldn't verify your sign-in with Anthropic yet, so it couldn't load your organization's settings. ${p(n)} requires them before a session can start. ${v(e)} if this persists, sign in again (claude auth login).${C(n)}`;
    case "unavailable_pending":
      return `Claude Code is still loading your organization's settings. ${p(n)} requires them before a session can start; this usually takes a few seconds.`;
    case "unavailable_settings_unusable":
      return `Claude Code couldn't apply your organization's managed settings: none of the settings the server returned could be applied as written. ${p(n)} requires them before a session can start. Ask your administrator to fix the published settings, then retry.${C(n)}`;
    case "client_no_credentials":
    case "client_error":
      return `Claude Code couldn't load your organization's settings because of an internal error. ${p(n)} requires them before a session can start. Retry, and if this persists report it with /bug.${C(n)}`;
    case "not_attempted":
      return `Claude Code does not load your organization's settings in the mode this session was launched in, and ${p(n)} requires them before a session can start. If CLAUDE_CODE_ENTRYPOINT or a remote-session variable is set in your environment, unset it and start Claude Code again; otherwise sign in again (claude auth login).`;
    case "ok":
    case "none_configured":
    case "not_required":
    case void 0:
      return;
  }
}
function v(e) {
  switch (e.surface) {
    case "startup":
      return "Retrying;";
    case "noninteractive":
      return "Try again;";
    case "login":
      return "Retry shortly;";
  }
}
function C_e(e) {
  return e.verdict === "blocked" || e.verdict === "refused";
}
function Y2r(e) {
  return e.verdict === "refused" ? "org_config_refused" : "org_config_required_unavailable";
}
function X6s(e) {
  return e.verdict === "refused" || e.reason === "not_attempted" || e.reason === "client_no_credentials" || e.reason === "unavailable_credential_refresh";
}
function le() {
  let e = () => {
  };
  return { recorded: new Promise((r) => {
    e = (0, import_chunk_xcgcdx61.pce)(() => {
      e(), r();
    });
  }), dispose: e };
}
var pe = { kickPolicy: import_chunk_7q6ee47s.zvt, kickSettings: ye, policySettled: import_chunk_7q6ee47s.Zh, settingsSettled: import_chunk_w58msjm6.Ih, planReverified: () => (0, import_chunk_865at33z.VAl)() ?? Promise.resolve(), pendingConsentDialog: import_chunk_zs6b24vw.e_t, nextSettingsOutcome: le, now: () => performance.now() };
async function Ce(e, n = pe) {
  let r = n.now();
  try {
    n.kickPolicy();
  } catch (a) {
    (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config gate: the policy kick threw (${(0, import_chunk_7q6ee47s.M0)(a)})`, "org-config gate: the policy kick threw"));
  }
  try {
    n.kickSettings();
  } catch (a) {
    (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config gate: the settings kick threw (${(0, import_chunk_7q6ee47s.M0)(a)})`, "org-config gate: the settings kick threw"));
  }
  await (0, import_chunk_5appeerh.me)(Promise.all([n.policySettled().catch(() => {
  }), n.settingsSettled().catch(() => {
  }), n.planReverified?.().catch(() => {
  })]), e);
  let o = n.pendingConsentDialog();
  if (o !== null) {
    let a = n.nextSettingsOutcome();
    try {
      await o.catch(() => {
      }), await (0, import_chunk_5appeerh.me)(Promise.all([n.settingsSettled().catch(() => {
      }), a.recorded]), e);
    } finally {
      a.dispose();
    }
  }
  return Math.max(0, Math.round(n.now() - r));
}
var he = /* @__PURE__ */ new Set(["no_auth", "unsupported_subscription"]);
function _e(e, n) {
  if (n.storedLoginOrigin !== true) return false;
  if (n.credentialShape !== "stored_login" && n.credentialShape !== "untiered_login") return false;
  switch (e) {
    case "no_auth":
      return true;
    case "unsupported_subscription":
      return n.credentialShape === "untiered_login" || n.tier === null || (0, import_chunk_rvyhd8z3.fmn)(n.tier);
    default:
      return false;
  }
}
var j = { memoizedReason: import_chunk_xcgcdx61.mge, inputs: () => ({ credentialShape: E(), storedLoginOrigin: y(), tier: (0, import_chunk_865at33z.Jxe)() }), reset: import_chunk_xcgcdx61.fDr }, q = (0, import_chunk_t57w17k7.de)({ seen: /* @__PURE__ */ new Set() }, (e) => {
  e.seen = /* @__PURE__ */ new Set();
});
function B(e = j) {
  let n = e.memoizedReason();
  if (!he.has(n ?? "")) return false;
  let r = e.inputs();
  if (!_e(n, r)) return false;
  let o = `${n}|${r.credentialShape}|${r.tier}`;
  if (q.seen.has(o)) return false;
  return q.seen.add(o), e.reset(), (0, import_chunk_w578pjby.t)(`org-config gate: settings eligibility (${n}) predates the stored login; re-evaluating`), true;
}
function ye(e = j, n = () => (0, import_chunk_w58msjm6.mnt)()) {
  if (!B(e)) return;
  n().catch((r) => (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config gate: the settings load threw (${(0, import_chunk_7q6ee47s.M0)(r)})`, "org-config gate: the settings load threw")));
}
function k(e) {
  if (e.readFlag !== void 0) return { flag: e.readFlag(), source: e.readFlagSource?.() ?? "override" };
  return (0, import_chunk_a3qepapr.lMt)();
}
function O(e, n, r, o) {
  return { decision: { verdict: "pass", blockedMs: 0, surface: o }, message: void 0, flag: e, flagSource: n, candidacy: r, armed: false, context: {}, attempt: 0, decidedWithoutWaiting: true, outcomes: void 0 };
}
var x = { candidate: false, exclusion: "flag_off" };
function J6s(e, n, r) {
  return e !== "fallback" || !r() || n();
}
function eJn(e) {
  let { flag: n, source: r } = k(e);
  if (!n.enabled && J6s(r, e.isFlagFetchHeld ?? nEn, e.isFlagCacheEmpty ?? import_chunk_865at33z.zN)) return O(n, r, x, e.surface);
  let o = _$e(n, (e.readCandidateInputs ?? _8t)({ authRecoveryCommand: e.authRecoveryCommand }));
  if (!n.enabled || !o.candidate) return O(n, r, o, e.surface);
  return I(e, n, r, o, 0, 0, { report: false, decidedWithoutWaiting: true });
}
async function cka(e) {
  let n = e.isFlagFetchHeld ?? nEn, r = e.isFlagCacheEmpty ?? import_chunk_865at33z.zN;
  if (e.afterSignIn === true) await ke(e);
  let o = eJn(e);
  if (nJn(o, n, r)) await eVs(e.fetchFlag), o = eJn(e);
  if (!o.armed || o.outcomes === void 0) return o;
  if (o = await Q6s(o, () => eJn(e), e.primeSettingsCacheAge), !o.armed || o.outcomes === void 0) return o;
  if (!C_e(o.decision)) return await (e.report ?? Qmt)(o, o.outcomes), o;
  let { flag: a, flagSource: c } = o, [u] = await Promise.all([(e.settle ?? Ce)(a.budgetMs), tJn(c, n, r) ? J2r(a.budgetMs, e.fetchFlag) : void 0]), d = k(e);
  if (!d.flag.enabled) return O(d.flag, d.source, x, e.surface);
  let g = _$e(d.flag, (e.readCandidateInputs ?? _8t)({ authRecoveryCommand: e.authRecoveryCommand }));
  if (!g.candidate) return O(d.flag, d.source, g, e.surface);
  return I(e, d.flag, d.source, g, u, 0, { report: true, decidedWithoutWaiting: false });
}
async function Q6s(e, n, r = be) {
  if (!e.armed || e.outcomes === void 0 || !C_e(e.decision) || !Oe(e.outcomes)) return e;
  return await r(), n();
}
function Oe(e) {
  return e.settings.hasAdmittedCache && e.settings.admittedCacheAgeMs === void 0;
}
async function be() {
  await (0, import_chunk_p1ewvgeh.Zkr)().then(() => {
    return;
  }, () => {
    return;
  });
}
function Z6s(e, n, r = 1) {
  let { flag: o, source: a } = k(e);
  if (!o.enabled) return O(o, a, x, e.surface);
  let c = _$e(o, (e.readCandidateInputs ?? _8t)({ authRecoveryCommand: e.authRecoveryCommand }));
  if (!c.candidate) return O(o, a, c, e.surface);
  return I(e, o, a, c, n, r, { report: true, decidedWithoutWaiting: false });
}
function I(e, n, r, o, a, c, u) {
  let d = (e.readOutcomes ?? W)(), g = aMt({ flag: n, candidacy: o, policy: d.policy, settings: d.settings, surface: e.surface, blockedMs: a }), l = (e.readContext ?? z)(d, g.resource), m = { decision: g, message: Pjo(g, l), flag: n, flagSource: r, candidacy: o, armed: true, context: l, attempt: c, decidedWithoutWaiting: u.decidedWithoutWaiting, outcomes: d };
  if (u.report) (e.report ?? Qmt)(m, d);
  return m;
}
function Qmt(e, n, r) {
  let { decision: o, flag: a, candidacy: c } = e, u = (0, import_chunk_y53wbr8a.Ma)("tengu_org_config_gate", { decision: (0, import_chunk_78g0060s.f)(o.verdict), decision_reason: (0, import_chunk_78g0060s.fe)(o.reason), decision_resource: (0, import_chunk_78g0060s.fe)(o.resource), surface: (0, import_chunk_78g0060s.f)(o.surface), blocked_ms: o.blockedMs, attempt: e.attempt, decided_without_waiting: e.decidedWithoutWaiting, final_outcome: (0, import_chunk_78g0060s.fe)(r?.outcome), recovered_after_ms: r?.recoveredAfterMs, tier: (0, import_chunk_78g0060s.fe)(c.candidate ? c.tier : void 0), flag_source: (0, import_chunk_78g0060s.f)(e.flagSource), flag_percent: a.percent, grace_ttl_hours: a.graceTtlHours, budget_ms: a.budgetMs, policy_reason: (0, import_chunk_78g0060s.fe)(n?.policy.reason), policy_has_cache: n?.policy.hasAdmittedCache, policy_cache_age_ms: n?.policy.admittedCacheAgeMs, settings_reason: (0, import_chunk_78g0060s.fe)(n?.settings.reason), settings_has_cache: n?.settings.hasAdmittedCache, settings_cache_age_ms: n?.settings.admittedCacheAgeMs, http_status: e.context.httpStatus }).catch(() => {
  }), d = !U.done && (r !== void 0 || e.attempt === 0 && !C_e(o));
  if (d) U.done = true;
  let g = !d ? void 0 : o.verdict === "pass" ? (0, import_chunk_cqa9hrgx.To)("org_config_gate") : o.verdict === "pass_cached" || o.verdict === "pass_exempt" ? (0, import_chunk_cqa9hrgx.oi)("org_config_gate", o.verdict) : (0, import_chunk_cqa9hrgx.Gt)("org_config_gate", o.reason ?? o.verdict), l = Promise.all([u, g]).then(() => {
    return;
  });
  return T.set.add(l), l.finally(() => T.set.delete(l)), (0, import_chunk_w578pjby.t)(`org-config gate: ${o.verdict}${o.reason ? ` (${o.resource} ${o.reason})` : ""} on ${o.surface} after ${o.blockedMs}ms`), l;
}
var U = (0, import_chunk_t57w17k7.de)({ done: false }, (e) => {
  e.done = false;
}), T = (0, import_chunk_t57w17k7.de)({ set: /* @__PURE__ */ new Set() }, (e) => {
  e.set = /* @__PURE__ */ new Set();
});
async function X2r() {
  await Promise.allSettled([...T.set]);
}
async function Ojo(e = B) {
  try {
    e();
  } catch (n) {
    (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config gate: the settings re-evaluation threw (${(0, import_chunk_7q6ee47s.M0)(n)})`, "org-config gate: the settings re-evaluation threw"));
  }
  await Promise.all([(0, import_chunk_7q6ee47s.Z2t)({ singleAttempt: true }).catch((n) => (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config gate: the policy retry threw (${(0, import_chunk_7q6ee47s.M0)(n)})`, "org-config gate: the policy retry threw"))), (0, import_chunk_w58msjm6.mnt)(void 0, void 0, { singleAttempt: true }).catch((n) => ((0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config gate: the settings retry threw (${(0, import_chunk_7q6ee47s.M0)(n)})`, "org-config gate: the settings retry threw")), false)), (0, import_chunk_5appeerh.me)((0, import_chunk_865at33z.z0)().catch((n) => (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config gate: the flag refresh threw (${(0, import_chunk_7q6ee47s.M0)(n)})`, "org-config gate: the flag refresh threw"))), Ge)]);
}
var Ge = 3e3;
function tJn(e, n = nEn, r = import_chunk_865at33z.zN) {
  if (e === "disk") return !n();
  return e === "fallback" && r() && !n();
}
function nJn(e, n = nEn, r = import_chunk_865at33z.zN) {
  return !e.armed && e.flagSource === "fallback" && !e.candidacy.candidate && e.candidacy.exclusion === "flag_off" && r() && !n();
}
function nEn() {
  return (0, import_chunk_865at33z.azt)((0, import_chunk_2mwkxzk6.Fne)()) || !(0, import_chunk_865at33z.bke)();
}
function uka() {
  return (0, import_chunk_865at33z.azt)((0, import_chunk_2mwkxzk6.Fne)());
}
async function J2r(e, n = import_chunk_865at33z.ci) {
  await (0, import_chunk_5appeerh.me)(n().then(() => {
    return;
  }, () => {
    return;
  }), e);
}
async function ke(e) {
  let { source: n } = k(e);
  if (n !== "disk" && n !== "fallback") return;
  if ((e.isFlagFetchHeld ?? nEn)()) return;
  await J2r(import_chunk_pbbjnb48.gU, e.fetchFlag);
}
var V = (0, import_chunk_t57w17k7.de)({ byFetcher: /* @__PURE__ */ new WeakMap() }, (e) => {
  e.byFetcher = /* @__PURE__ */ new WeakMap();
});
function eVs(e = import_chunk_865at33z.ci) {
  let n = V.byFetcher.get(e);
  if (n === void 0) n = J2r(import_chunk_pbbjnb48.gU, e), V.byFetcher.set(e, n);
  return n;
}
var Ee = [15e3, 15e3, 3e4, 6e4, 18e4, 6e5], Fe = 0.3;
function tVs(e, n = Math.random) {
  let r = Ee[e];
  if (r === void 0) return;
  let o = (n() * 2 - 1) * Fe;
  return Math.max(1e3, Math.round(r * (1 + o)));
}
