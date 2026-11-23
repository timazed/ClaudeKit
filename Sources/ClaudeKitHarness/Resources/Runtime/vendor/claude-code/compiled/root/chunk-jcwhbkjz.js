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
var chunk_jcwhbkjz_exports = {};
__export(chunk_jcwhbkjz_exports, {
  ADi: () => ADi,
  Aml: () => Aml,
  P1n: () => P1n,
  RDi: () => RDi,
  Tan: () => Tan,
  Whs: () => Whs,
  _Zl: () => _Zl,
  gZl: () => gZl,
  hZl: () => hZl,
  jhs: () => jhs,
  mZl: () => mZl,
  pZl: () => pZl
});
module.exports = __toCommonJS(chunk_jcwhbkjz_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_48y9ek17 = require("/$bunfs/root/chunk-48y9ek17.js");
var import_chunk_ge2k4m17 = require("/$bunfs/root/chunk-ge2k4m17.js");
var import_chunk_2m7pv65a = require("/$bunfs/root/chunk-2m7pv65a.js");
var import_chunk_xm6zq75j = require("/$bunfs/root/chunk-xm6zq75j.js");
var Whs = "org:desktop_config", T = [import_chunk_ephf358x.LK, Whs];
function P1n() {
  let e;
  try {
    e = (0, import_chunk_ephf358x.cn)();
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`hybridSettingsGrantOption: the OAuth configuration could not be read: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" });
    return;
  }
  if (!e.HYBRID_SETTINGS_SCOPE_REGISTERED) return;
  return { scope: Whs, successRedirectUrl: e.CLAUDEAI_SUCCESS_URL };
}
function jhs(e) {
  return Array.isArray(e) && e.includes(Whs) && e.every((n) => T.includes(n));
}
var g = { signIn(e, ...n) {
  return e.startOAuthFlow(...n);
}, profile(e) {
  return (0, import_chunk_865at33z.ehe)(e);
}, refresh(e, n) {
  return (0, import_chunk_865at33z.ide)(e, n);
}, revoke(e, n) {
  return (0, import_chunk_865at33z.mv)(e, n);
}, settings(e, n, c) {
  return c(`${(0, import_chunk_ephf358x.cn)().BASE_API_URL}/v1/desktop/orgs/${e}/claude_code/bootstrap`, `Bearer ${n}`);
} };
function pZl(e, ...[n, c]) {
  let s = (0, import_chunk_ephf358x.cn)();
  return g.signIn(e, n, { ...c, oauthClient: { clientId: s.CLIENT_ID, scopes: T }, skipProfileFetch: true, successRedirectUrl: s.CLAUDEAI_SUCCESS_URL });
}
var z = 2e3, S = 500, v = { ok: false, reason: "interrupted", message: "Sign-in was interrupted." };
async function Aml(e) {
  try {
    return (await (0, import_chunk_zzrn5zap.Er)().readAsync(e))?.hybridOauth ?? null;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Failed to read organization sign-in tokens: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" }), null;
  }
}
async function mZl() {
  let e = await Aml();
  return e?.accessToken && RDi(e).ok ? e.organizationUuid : null;
}
async function ADi({ tokens: e, allowedOrganizationUuids: n, getSettingsDocument: c, signal: s, whyNoNewProcess: o }) {
  if (!(0, import_chunk_865at33z.lz)(true).valid) return Tan(e, { ok: false, reason: "login_method_not_allowed", message: "This computer's settings require a different sign-in method (forceLoginMethod), so it can't sign in to your organization." });
  if (n?.length === 0) return Tan(e, { ok: false, reason: "organization_not_allowed", message: "This computer's managed settings allow no organization to sign in. Ask your administrator to check forceLoginOrgUUID." });
  let h = { clientId: (0, import_chunk_ephf358x.cn)().CLIENT_ID, oauthEnvironment: (0, import_chunk_ephf358x.PI)() }, { clientId: a } = h, r = await E(e, h, n, (I, H) => c(I, H, s));
  if (!r.ok) {
    if (e.refreshToken) await g.revoke(e.refreshToken, a);
    if (s?.aborted) return (0, import_chunk_cqa9hrgx.l)("auth_hybrid_sign_in", "interrupted"), v;
    if (r.reason === "not_turned_on") (0, import_chunk_cqa9hrgx.l)("auth_hybrid_sign_in", r.reason);
    else (0, import_chunk_cqa9hrgx.m)("auth_hybrid_sign_in", r.reason);
    return r;
  }
  if (s?.aborted) return await g.revoke(r.slot.refreshToken, a), (0, import_chunk_cqa9hrgx.l)("auth_hybrid_sign_in", "interrupted"), v;
  let y = !(0, import_chunk_xcgcdx61.WJe)(), k = y ? o?.() : void 0;
  if (k !== void 0) return await g.revoke(r.slot.refreshToken, a), (0, import_chunk_cqa9hrgx.m)("auth_hybrid_sign_in", "no_new_process"), { ok: false, reason: "no_new_process", message: `This sign-in wasn't saved. Only a new session can use it, and ${k}. This session and the agents that it started go on as before. To sign in, open a new terminal, then run ${(0, import_chunk_xcgcdx61.oP)()}.` };
  if (y) (0, import_chunk_xcgcdx61.eta)();
  let f = await A(r.slot);
  if (!f.success) return await g.revoke(r.slot.refreshToken, a), await O((I) => I.refreshToken === r.slot.refreshToken), (0, import_chunk_cqa9hrgx.m)("auth_hybrid_sign_in", "save_failed"), { ok: false, reason: "save_failed", message: y ? "Couldn't save the sign-in to secure storage. Try signing in again. Until Claude Code starts again, this session doesn't send requests." : "Couldn't save the sign-in to secure storage. Try signing in again." };
  let w = f.replaced;
  if (w && w.refreshToken !== r.slot.refreshToken && (0, import_chunk_xm6zq75j.yGt)(w)) await g.revoke(w.refreshToken, w.clientId);
  return (0, import_chunk_cqa9hrgx.u)("auth_hybrid_sign_in"), { ok: true, organizationUuid: r.slot.organizationUuid };
}
async function Tan(e, n) {
  if (e.refreshToken) await g.revoke(e.refreshToken, (0, import_chunk_ephf358x.cn)().CLIENT_ID);
  return (0, import_chunk_cqa9hrgx.m)("auth_hybrid_sign_in", n.reason), n;
}
async function hZl(e) {
  if (!(0, import_chunk_xm6zq75j.yGt)(e)) {
    (0, import_chunk_w578pjby.t)("Removed an organization sign-in from another OAuth environment without a revoke.");
    return;
  }
  await g.revoke(e.refreshToken, e.clientId);
}
function gZl(e, n, c) {
  return g.settings(e, n, c);
}
async function _Zl(e) {
  let n = await Aml();
  if (!n?.accessToken || !(0, import_chunk_xm6zq75j.yGt)(n) || !b(n.scopes)) return { ok: false, reason: "needs_sign_in" };
  let c = p(n, e);
  if (c) return c;
  try {
    return await (0, import_chunk_2m7pv65a.olt)(import_chunk_ge2k4m17.x$i, async (s) => {
      let o = await _();
      if (!o?.accessToken || !(0, import_chunk_xm6zq75j.yGt)(o)) return { ok: false, reason: "needs_sign_in" };
      let h = p(o, e);
      if (h) return h;
      let a = o.refreshToken;
      if (!a) return await O((r) => r.refreshToken === a), { ok: false, reason: "needs_sign_in" };
      if (s.isCompromised()) return (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "hybrid_oauth_refresh_lock_compromised"), { ok: false, reason: "refresh_failed", detail: "another process is refreshing the organization sign-in's token" };
      try {
        let r = await g.refresh(a, { scopes: [...T], clientId: o.clientId, skipProfileFetch: true });
        if (!r.refreshToken || !r.expiresAt) {
          if (r.refreshToken && r.refreshToken !== a) await g.revoke(r.refreshToken, o.clientId);
          return { ok: false, reason: "refresh_failed", detail: "refresh response missing refresh_token or expiry" };
        }
        if (!b(r.scopes)) return await g.revoke(r.refreshToken, o.clientId), await O((f) => f.refreshToken === a), { ok: false, reason: "needs_sign_in", detail: "refresh response missing a scope of the organization sign-in" };
        let y = { ...o, accessToken: r.accessToken, refreshToken: r.refreshToken, expiresAt: r.expiresAt, scopes: [...T] }, k = await A(y, { onlyIf: (f) => f?.refreshToken === a });
        if (k.raced) {
          await g.revoke(r.refreshToken, o.clientId);
          let f = await _();
          return p(f, e) ?? { ok: false, reason: "needs_sign_in" };
        }
        if (!k.success) (0, import_chunk_w578pjby.t)("Organization sign-in refresh succeeded but persist failed; continuing with in-memory token.", { level: "error" });
        return RDi(y);
      } catch (r) {
        if (s.isCompromised()) {
          let y = await _(), k = p(y, e);
          if (k) return k;
          return { ok: false, reason: "refresh_failed", detail: "another process is refreshing the organization sign-in's token" };
        }
        if ((0, import_chunk_865at33z.N4)(r)) {
          let y = await _();
          for (let f = 0; y?.refreshToken === a && f < z; f += S) await (0, import_chunk_5appeerh.K)(S), y = await _();
          let k = p(y, e);
          if (k?.ok) return (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "hybrid_oauth_refresh_race_recovered"), k;
          return await O((f) => f.refreshToken === a), { ok: false, reason: "needs_sign_in", detail: "organization sign-in expired" };
        }
        return { ok: false, reason: (0, import_chunk_865at33z.tKi)(r) ? "refresh_refused" : "refresh_failed", detail: (0, import_chunk_jv7av99m.d)(r) };
      }
    });
  } catch (s) {
    if (s instanceof import_chunk_2m7pv65a.J2e) {
      (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "hybrid_oauth_refresh_lock_contention");
      let o = e === void 0 ? null : await _().catch(() => null), h = p(o, e);
      if (h) return h;
    } else (0, import_chunk_k449cc64.i)(s), (0, import_chunk_cqa9hrgx.m)("oauth_token_refresh", "hybrid_oauth_refresh_lock_error");
    return { ok: false, reason: "refresh_failed", detail: (0, import_chunk_jv7av99m.d)(s) };
  }
}
async function E(e, n, c, s) {
  if (Array.isArray(e.scopes) && e.scopes.includes(Whs) && !e.scopes.includes(import_chunk_ephf358x.LK)) return { ok: false, reason: "invalid", message: "The sign-in didn't grant reading your profile, so the organization could not be confirmed and the sign-in was not saved. Try signing in again." };
  if (b(e.scopes) && !jhs(e.scopes)) return { ok: false, reason: "invalid", message: "This sign-in gave Claude Code more access than it asked for. Claude Code didn't save it. Sign in again and choose the organization that's set up to use Claude through another provider (Amazon Bedrock, Google Vertex AI, Microsoft Foundry or a gateway)." };
  if (!e.refreshToken || !e.expiresAt || !b(e.scopes)) return { ok: false, reason: "invalid", message: "This sign-in didn't let Claude Code read your organization's settings. Claude Code didn't save it. You need this sign-in only if your administrators manage Claude Code in Anthropic's Enterprise Admin Console. If they do, try again, or ask them to check the organization's setup." };
  let o = await g.profile(e.accessToken);
  if (!o) return { ok: false, reason: "unverified", message: "Couldn't confirm which organization you signed in to. Try signing in again." };
  let h = o.organization.uuid.toLowerCase();
  if (o.organization.hybrid !== true) return { ok: false, reason: "not_hybrid", message: "The organization you chose isn't set up to use Claude through another provider (Amazon Bedrock, Google Vertex AI, Microsoft Foundry or a gateway). If your company has such an organization, sign in again and choose it. If not, you don't need this sign-in." };
  if (c !== null && !c.some((r) => r.toLowerCase() === h)) return { ok: false, reason: "organization_not_allowed", message: "You signed in to an organization that this computer's managed settings don't allow. Sign in again and choose the organization that those settings name (forceLoginOrgUUID). If you don't know which one that is, ask your administrator." };
  let a;
  try {
    a = await (0, import_chunk_48y9ek17.GGi)(await g.settings(h, e.accessToken, s), h);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`Organization sign-in: no settings document to read the switch from: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
  if (a === void 0) return { ok: false, reason: "settings_unreadable", message: "Claude Code could not read the settings of the organization that you chose. This sign-in was not saved. If that organization allows access only from its own network, connect to that network. If this version of Claude Code is out of date, run `claude update`. Then sign in again." };
  if (!a) return { ok: false, reason: "not_turned_on", message: "You chose an organization that is managed in Anthropic's Enterprise Admin Console. It has not turned on Claude Code sign-in for you. This sign-in was not saved. If you wanted to use your Claude subscription (individual, Team, or Enterprise), sign in again and choose the account or organization that has it. If you wanted to use this organization, ask one of its owners to turn on Claude Code sign-in in the admin console. Then sign in again." };
  return { ok: true, slot: { accessToken: e.accessToken, refreshToken: e.refreshToken, expiresAt: e.expiresAt, scopes: [...T], ...n, organizationUuid: h, accountUuid: o.account.uuid.toLowerCase() } };
}
async function A(e, n) {
  try {
    let c = false, s, o, h = await (0, import_chunk_zzrn5zap.Er)().mutate((a) => {
      if (n?.onlyIf && !n.onlyIf(a.hybridOauth)) return c = true, a;
      s = a.hybridOauth;
      let r = { ...a, hybridOauth: e };
      if (s?.organizationUuid !== e.organizationUuid || s.accountUuid !== e.accountUuid) o = { stored: a.hybridGatewayAuth }, delete r.hybridGatewayAuth, delete r.hybridGatewayIdp;
      return r;
    });
    if (o !== void 0) (0, import_chunk_xcgcdx61.o_n)();
    if (h.success) await C(o);
    return { success: h.success, raced: c, replaced: s };
  } catch (c) {
    return (0, import_chunk_w578pjby.t)(`Failed to save organization sign-in tokens: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "error" }), { success: false };
  }
}
async function O(e) {
  try {
    let n, c = await (0, import_chunk_zzrn5zap.Er)().mutate((s) => {
      if (!s.hybridOauth || !e(s.hybridOauth)) return s;
      n = { stored: s.hybridGatewayAuth };
      let o = { ...s };
      return delete o.hybridOauth, delete o.hybridGatewayAuth, delete o.hybridGatewayIdp, o;
    });
    if (n !== void 0) (0, import_chunk_xcgcdx61.o_n)();
    if (c.success) await C(n);
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`Failed to clear organization sign-in tokens: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" });
  }
}
async function C(e) {
  if (e === void 0) return;
  if ((0, import_chunk_xcgcdx61.Tqn)(null), e.stored) await (0, import_chunk_np189awg.XIr)(e.stored, void 0, false);
}
async function _() {
  let e = (0, import_chunk_zzrn5zap.Er)();
  return e.invalidateCache?.(), (await e.readAsync())?.hybridOauth ?? null;
}
function b(e) {
  return Array.isArray(e) && T.every((n) => e.includes(n));
}
function p(e, n) {
  return e?.accessToken && !(0, import_chunk_865at33z.NR)(e.expiresAt) && e.accessToken !== n ? RDi(e) : null;
}
function RDi(e) {
  if (!(0, import_chunk_xm6zq75j.yGt)(e) || !b(e.scopes)) return { ok: false, reason: "needs_sign_in" };
  return { ok: true, accessToken: e.accessToken, organizationUuid: e.organizationUuid, scopes: e.scopes };
}
