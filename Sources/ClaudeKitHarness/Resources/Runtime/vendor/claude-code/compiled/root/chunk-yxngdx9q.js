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
var chunk_yxngdx9q_exports = {};
__export(chunk_yxngdx9q_exports, {
  Mse: () => Mse,
  _$o: () => _$o,
  bBr: () => bBr,
  cWs: () => cWs,
  gZe: () => gZe,
  imt: () => imt,
  smt: () => smt,
  z8n: () => z8n
});
module.exports = __toCommonJS(chunk_yxngdx9q_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var import_chunk_a3qepapr = require("/$bunfs/root/chunk-a3qepapr.js");
var import_chunk_hrje0gx5 = require("/$bunfs/root/chunk-hrje0gx5.js");
var import_chunk_d71b3bew = require("/$bunfs/root/chunk-d71b3bew.js");
var import_chunk_pbbjnb48 = require("/$bunfs/root/chunk-pbbjnb48.js");
var import_chunk_rvyhd8z3 = require("/$bunfs/root/chunk-rvyhd8z3.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
function H(e) {
  let o = e !== null && typeof e === "object" && e.isAxiosError === true ? e.response : void 0;
  if (o === void 0) return { hasSchema: false, requestIdPresent: false, htmlPage: false };
  let r = (0, import_chunk_7q6ee47s.nGe)(o.headers ?? {}), u = (0, import_chunk_7q6ee47s.jvt)(e), n = (0, import_chunk_7q6ee47s.zYe)({ serverErrorType: u.serverErrorType, serverErrorStamped: true });
  return { hasSchema: n !== void 0, requestIdPresent: r.requestIdPresent === true, htmlPage: r.responseContentType === "html", errorType: n, errorCode: u.serverErrorCode };
}
function M(e) {
  let { kind: o, status: r } = (0, import_chunk_jv7av99m.$i)(e), u = H(e), n = u.hasSchema && u.requestIdPresent ? (0, import_chunk_hrje0gx5.xjo)(r, u.errorType, u.errorCode, (0, import_chunk_7q6ee47s.jvt)(e).serverAuthDenial) : void 0;
  switch (o) {
    case "auth":
      if (n !== void 0) return { reason: n, httpStatus: r };
      if (!u.hasSchema || !u.requestIdPresent || u.htmlPage) return { reason: "blocked_by_intermediary", httpStatus: r };
      if (r === 401) return { reason: "unavailable_credential_refresh", httpStatus: r };
      return { reason: "refused_not_entitled", httpStatus: r };
    case "timeout":
      return { reason: "unavailable_timeout" };
    case "network":
      return { reason: "unavailable_connect" };
    case "http":
      if (r === void 0) return { reason: "unavailable_connect" };
      if (r >= 500) return { reason: "unavailable_server", httpStatus: r };
      if (r >= 300 && r < 400) return { reason: "blocked_by_intermediary", httpStatus: r };
      if ((0, import_chunk_hrje0gx5.q2r)(r)) return { reason: "unavailable_rate_limited", httpStatus: r };
      if (r === 407 || n === void 0) return { reason: "blocked_by_intermediary", httpStatus: r };
      return { reason: n, httpStatus: r };
    case "other":
      return { reason: "client_error" };
  }
}
function U(e, o) {
  if (e !== "client_error") return;
  (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`org-config login probe threw before reaching the transport (${(0, import_chunk_d71b3bew.FYn)(o)})`, "org-config login probe threw before reaching the transport"));
}
async function D(e, o, r = {}) {
  let u = r.baseApiUrl ?? (0, import_chunk_ephf358x.cn)().BASE_API_URL, n = { Authorization: `Bearer ${e}`, "anthropic-beta": import_chunk_ephf358x.ff }, c = { hasAdmittedCache: false }, l = (async () => {
    try {
      let a = await (r.requestPolicy ?? import_chunk_7q6ee47s.JTr)({ endpoint: (0, import_chunk_7q6ee47s.Mks)(u), authHeaders: n, timeoutMs: o, signal: AbortSignal.timeout(o), acceptAny2xx: true });
      if (a.kind === "not_modified" || !a.contentType.includes("json") || !a.requestIdPresent) return { outcome: { ...c, reason: "blocked_by_intermediary" } };
      return { outcome: { ...c, reason: "ok" } };
    } catch (a) {
      let { reason: m, httpStatus: p } = M(a);
      return U(m, a), { outcome: { ...c, reason: m, ...p !== void 0 && { httpStatus: p } }, httpStatus: p };
    }
  })(), h = (async () => {
    try {
      let { status: a, contentType: m, requestIdPresent: p } = await (r.requestSettings ?? import_chunk_w58msjm6.Uii)(e, { timeoutMs: o });
      if (!p || a === 304 || a === 200 && !m.includes("json")) return { outcome: { ...c, reason: "blocked_by_intermediary", httpStatus: a }, httpStatus: a };
      return { outcome: { ...c, reason: a === 404 || a === 204 ? "none_configured" : "ok" } };
    } catch (a) {
      let { reason: m, httpStatus: p } = M(a);
      return U(m, a), { outcome: { ...c, reason: m, ...p !== void 0 && { httpStatus: p } }, httpStatus: p };
    }
  })(), [w, y] = await Promise.all([l, h]);
  return { policy: w.outcome, settings: y.outcome, httpStatus: w.httpStatus ?? y.httpStatus };
}
function N(e) {
  return { accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid, organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid, email: e.profile?.account?.email ?? e.tokenAccount?.emailAddress };
}
function smt(e) {
  return (0, import_chunk_ephf358x.Hft)(e.scopes) && (e.profile === void 0 || e.subscriptionType === null || e.subscriptionTypeSource === "profile" && e.subscriptionTypeVerifiedAt === void 0);
}
function L(e, o) {
  let { reason: r } = e.settings;
  if ((0, import_chunk_rvyhd8z3.qPr)(r) === "refused" && !(0, import_chunk_hrje0gx5.Rjo)(o, r)) return e;
  return { ...e, settings: { hasAdmittedCache: false, reason: "not_attempted" } };
}
async function imt(e) {
  let o = () => e.readFlag !== void 0 ? { flag: e.readFlag(), source: e.readFlagSource?.() ?? "override" } : (0, import_chunk_a3qepapr.lMt)(), r = e.startupGateFollows === true, u = !r || e.untieredLogin === true, { flag: n, source: c } = o(), l = e.isFlagFetchHeld ?? import_chunk_hrje0gx5.uka, h = e.isFlagCacheEmpty ?? import_chunk_865at33z.zN;
  if (!n.enabled && (0, import_chunk_hrje0gx5.J6s)(c, l, h) && r) return { ok: true };
  let y = (e.readCandidateInputs ?? import_chunk_hrje0gx5._8t)({ authRecoveryCommand: false }), a = e.newLogin, m = e.untieredLogin === true ? { ...y, hostToken: false, tier: null, credentialShape: "untiered_login", storedLoginOrigin: true, tierVerifiedAtMs: void 0 } : a !== void 0 ? { ...y, hostToken: false, tier: a.subscriptionType, credentialShape: !(0, import_chunk_ephf358x.Hft)(a.scopes) ? "api_key" : a.subscriptionType === null ? "untiered_login" : "stored_login", storedLoginOrigin: true, tierVerifiedAtMs: a.subscriptionTypeSource === "profile" ? a.subscriptionTypeVerifiedAt ?? null : void 0 } : { ...y, hostToken: false }, p = e.untieredLogin === true, C = (s) => p ? { ...m, tier: s.plans[0] ?? "team", credentialShape: "stored_login", tierVerifiedAtMs: void 0 } : m, S = (s) => {
    let v = e.newLogin === void 0 ? (0, import_chunk_865at33z.Sn)() : void 0, P = e.newLogin !== void 0 ? N(e.newLogin) : { accountUuid: v?.accountUuid, organizationUuid: v?.organizationUuid, email: v?.emailAddress }, V = P.accountUuid === void 0 && P.organizationUuid === void 0;
    return (0, import_chunk_5appeerh.me)((e.fetchServedFlag ?? import_chunk_a3qepapr.nVs)(e.accessToken, P, s).catch(() => {
      return;
    }), s).then((k) => k !== void 0 && V && !(k.flag.enabled && (0, import_chunk_hrje0gx5._$e)(k.flag, C(k.flag)).candidate) ? void 0 : k);
  }, g = (0, import_chunk_hrje0gx5._$e)(n, C(n)), O = "no";
  if ((0, import_chunk_hrje0gx5.nJn)({ armed: n.enabled && g.candidate, flagSource: c, candidacy: g }, l, h)) {
    let s = await S(Math.min(n.budgetMs, import_chunk_pbbjnb48.gU));
    O = s !== void 0 ? "served" : "nothing_in_time", { flag: n, source: c } = s ?? o(), g = (0, import_chunk_hrje0gx5._$e)(n, C(n));
  }
  let G = !r && c !== "override" && c !== "disabled" && !l();
  if (G && O === "no" && !g.candidate && K(g.exclusion)) {
    let s = await S(Math.min(n.budgetMs, import_chunk_pbbjnb48.gU));
    if (O = s !== void 0 ? "served" : "nothing_in_time", s !== void 0) ({ flag: n, source: c } = s), g = (0, import_chunk_hrje0gx5._$e)(n, C(n));
  }
  if (!n.enabled || !g.candidate) return { ok: true };
  let _ = performance.now(), I = O !== "served" && (G || (0, import_chunk_hrje0gx5.tJn)(c, l, h)) ? S(n.budgetMs) : void 0, T = e.tokenUsedElsewhere !== true && (0, import_chunk_42nfpkzm.Qji)(), E = await (e.probe ?? D)(e.accessToken, n.budgetMs), d = T ? L(E, n) : E, f = (0, import_chunk_hrje0gx5.aMt)({ flag: n, candidacy: g, policy: d.policy, settings: d.settings, surface: "login", blockedMs: Math.max(0, Math.round(performance.now() - _)) });
  if (f.verdict !== "pass" && I !== void 0) {
    let s = await I ?? { flag: n, source: c }, v = (0, import_chunk_hrje0gx5._$e)(s.flag, C(s.flag));
    if (!s.flag.enabled || !v.candidate) return (0, import_chunk_w578pjby.t)(`org-config gate (login): policy=${d.policy.reason} settings=${d.settings.reason} \u2192 released by the served flag`), { ok: true };
    if (n = s.flag, c = s.source, g = v, T) d = L(E, n);
    f = (0, import_chunk_hrje0gx5.aMt)({ flag: n, candidacy: g, policy: d.policy, settings: d.settings, surface: "login", blockedMs: Math.max(0, Math.round(performance.now() - _)) });
  }
  if (u && f.verdict === "blocked" && J(f.reason)) {
    let s = n.budgetMs - Math.max(0, Math.round(performance.now() - _));
    if (s > 0) {
      if (d = await (e.probe ?? D)(e.accessToken, s), T) d = L(d, n);
      f = (0, import_chunk_hrje0gx5.aMt)({ flag: n, candidacy: g, policy: d.policy, settings: d.settings, surface: "login", blockedMs: Math.max(0, Math.round(performance.now() - _)) });
    }
  }
  let F = e.organizationName ?? (a !== void 0 ? void 0 : (0, import_chunk_865at33z.Sn)()?.organizationName), x = { policy: d.policy, settings: d.settings }, R = { organizationName: F === void 0 || F === null ? void 0 : (0, import_chunk_13h3tw8q.js)(F), httpStatus: f.resource === void 0 ? void 0 : x[f.resource].httpStatus ?? d.httpStatus }, b = { decision: f, message: (0, import_chunk_hrje0gx5.Pjo)(f, R), flag: n, flagSource: c, candidacy: g, armed: true, context: R, attempt: 0, decidedWithoutWaiting: false, outcomes: x };
  if (await (e.report ?? ((s) => (0, import_chunk_hrje0gx5.Qmt)(s, s.outcomes)))(b), (0, import_chunk_w578pjby.t)(`org-config gate (login): policy=${d.policy.reason} settings=${d.settings.reason} \u2192 ${f.verdict}`), !(0, import_chunk_hrje0gx5.C_e)(f)) return { ok: true, evaluation: b };
  if (f.verdict === "blocked" && !u) return { ok: true, evaluation: b, warning: cWs(b) };
  return { ok: false, evaluation: b, message: b.message ?? "Claude Code couldn't load your organization's settings, which it requires before this sign-in can be used." };
}
function cWs(e) {
  let { reason: o } = e.decision;
  return `Signed in. Claude Code couldn't verify your organization's settings yet${o !== void 0 ? ` (${q(o)})` : ""}; it will check again when you start a session.`;
}
async function bBr(e) {
  let { minted: o, ...r } = e, u = e.readCandidateInputs ?? import_chunk_hrje0gx5._8t, n = await imt({ ...r, newLogin: o, untieredLogin: smt(o), startupGateFollows: false, tokenUsedElsewhere: true, organizationName: e.organizationName ?? o.profile?.organization?.name ?? o.tokenAccount?.organizationName, readCandidateInputs: (h) => ({ ...u(h), provider: "firstParty", firstPartyBaseUrl: true }) });
  if (n.ok) return n;
  let c = await _$o({ accessToken: e.accessToken, ...o }, "withheld mint", e.revoke);
  if (n.evaluation.decision.verdict === "refused") return { ok: false, evaluation: n.evaluation, message: `${n.message} ${z(c)}` };
  let { reason: l } = n.evaluation.decision;
  return { ok: false, evaluation: n.evaluation, message: `Couldn't verify your organization's settings${l !== void 0 ? ` (${q(l)})` : ""}. ${j(l)}. ${z(c)}${l === "unavailable_connect" || l === "unavailable_timeout" ? (0, import_chunk_w58msjm6.UJt)() : ""}` };
}
var B = "Anthropic reported the token revoked; it was not shown.", W = "The token could not be confirmed revoked and was not shown \u2014 ask your admin to revoke it in Console.";
function z(e) {
  return e ? B : W;
}
function j(e) {
  switch (e) {
    case "unavailable_connect":
    case "unavailable_timeout":
      return "Retry when the network is available";
    case "blocked_by_intermediary":
      return "A network proxy or gateway answered instead of Anthropic \u2014 retry from a network that reaches it directly";
    case "unavailable_settings_unusable":
      return "Ask an admin to fix the organization's managed settings, then retry";
    case "unavailable_server":
    case "unavailable_rate_limited":
    case "unavailable_credential_refresh":
    case "unavailable_pending":
    default:
      return "Retry shortly";
  }
}
async function Mse(e) {
  return await _$o(e, "refused sign-in") ? "Anthropic reported the new sign-in revoked; your previous login is unchanged." : "The new sign-in could not be confirmed revoked \u2014 ask your admin to revoke it if this device is shared; your previous login is unchanged.";
}
async function _$o(e, o, r = import_chunk_865at33z.gGn) {
  if (o !== "withheld mint" && (0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return false;
  let u = e.refreshToken ?? null;
  try {
    return await r(u ?? e.accessToken, e.clientId, u !== null ? "refresh_token" : "access_token");
  } catch (n) {
    return (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`Revoking a ${o}'s grant threw (${(0, import_chunk_d71b3bew.FYn)(n)})`, "Revoking an uninstalled grant threw")), false;
  }
}
function K(e) {
  switch (e) {
    case "flag_off":
    case "tier_not_in_plans":
    case "rollout_percent":
      return true;
    default:
      return false;
  }
}
function J(e) {
  switch (e) {
    case "unavailable_timeout":
    case "unavailable_connect":
    case "unavailable_server":
    case "unavailable_rate_limited":
    case "unavailable_credential_refresh":
    case "unavailable_pending":
      return true;
    default:
      return false;
  }
}
function q(e) {
  switch (e) {
    case "unavailable_timeout":
      return "timed out";
    case "unavailable_connect":
      return "could not connect";
    case "unavailable_server":
      return "Anthropic returned an error";
    case "unavailable_rate_limited":
      return "asked to retry shortly";
    case "unavailable_credential_refresh":
      return "sign-in not yet accepted";
    case "blocked_by_intermediary":
      return "a network proxy answered instead of Anthropic";
    case "unavailable_pending":
      return "still loading";
    case "unavailable_settings_unusable":
      return "the published settings could not be applied";
    case "not_attempted":
      return "not loaded in the mode this process was launched in";
    default:
      return "not yet available";
  }
}
function z8n(e) {
  let { verdict: o, reason: r } = e.decision;
  return o === "refused" ? "refused" : r === "not_attempted" ? "not_loaded_in_launch_mode" : "unavailable";
}
class gZe extends import_chunk_jv7av99m.A {
  evaluation;
  constructor(e, o) {
    super(e, "OrgConfigLoginRefusedError: the org-config gate refused a completed sign-in");
    this.evaluation = o;
    this.name = "OrgConfigLoginRefusedError";
  }
}
