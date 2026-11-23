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
var chunk_skrb3t34_exports = {};
__export(chunk_skrb3t34_exports, {
  I4o: () => I4o,
  MQs: () => MQs,
  bnr: () => bnr,
  c5r: () => c5r,
  f5r: () => f5r,
  htt: () => htt,
  u5r: () => u5r,
  ugt: () => ugt
});
module.exports = __toCommonJS(chunk_skrb3t34_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_pqpv4rnx = require("/$bunfs/root/chunk-pqpv4rnx.js");
var import_chunk_2m7pv65a = require("/$bunfs/root/chunk-2m7pv65a.js");
async function htt(n) {
  try {
    return (await (0, import_chunk_zzrn5zap.Er)().readAsync(n))?.designOauth ?? null;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`Failed to read design OAuth tokens: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" }), null;
  }
}
async function c5r(n, o) {
  try {
    let a = false, r = await (0, import_chunk_zzrn5zap.Er)().mutate((e) => {
      if (o?.onlyIf && !o.onlyIf(e.designOauth)) return a = true, e;
      return { ...e, designOauth: n };
    });
    return a ? { ...r, raced: true } : r;
  } catch (a) {
    return (0, import_chunk_w578pjby.t)(`Failed to save design OAuth tokens: ${(0, import_chunk_jv7av99m.d)(a)}`, { level: "error" }), { success: false, warning: "Failed to save design OAuth tokens" };
  }
}
async function T(n) {
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((o) => {
      if (!o.designOauth) return o;
      if (!n(o.designOauth)) return o;
      let a = { ...o };
      return delete a.designOauth, a;
    });
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Failed to clear design OAuth tokens: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
var A = ".design_oauth_refresh.lock";
async function p() {
  let n = (0, import_chunk_zzrn5zap.Er)();
  return n.invalidateCache?.(), (await n.readAsync())?.designOauth ?? null;
}
async function MQs(n) {
  if ((0, import_chunk_xcgcdx61.Wy)()) return { ok: false, reason: "needs_design_login" };
  let o = await htt(n);
  if (!o?.accessToken) return { ok: false, reason: "needs_design_login" };
  if (!(0, import_chunk_865at33z.NR)(o.expiresAt)) return { ok: true, accessToken: o.accessToken };
  if ((0, import_chunk_f9x2f6cx.Y)()) return (0, import_chunk_cqa9hrgx.m)("oauth_token_refresh", "design_oauth_refresh_diskless"), { ok: false, reason: "needs_design_login" };
  try {
    return await (0, import_chunk_2m7pv65a.olt)(A, async (a) => {
      let r = await p();
      if (!r?.accessToken) return { ok: false, reason: "needs_design_login" };
      if (!(0, import_chunk_865at33z.NR)(r.expiresAt)) return { ok: true, accessToken: r.accessToken };
      if (!r.refreshToken) {
        let e = r.refreshToken;
        return await T((u) => u.refreshToken === e), { ok: false, reason: "needs_design_login" };
      }
      if (!Array.isArray(r.scopes) || r.scopes.length === 0) {
        let e = r.refreshToken;
        return await T((u) => u.refreshToken === e), { ok: false, reason: "needs_design_login" };
      }
      if (a.isCompromised()) return (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "design_oauth_refresh_lock_compromised"), { ok: false, reason: "design_refresh_failed", detail: "another process is refreshing the design token" };
      try {
        let e = await (0, import_chunk_865at33z.ide)(r.refreshToken, { clientId: r.clientId, scopes: r.scopes, skipProfileFetch: true });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== r.refreshToken) await (0, import_chunk_865at33z.mv)(e.refreshToken, r.clientId);
          return { ok: false, reason: "design_refresh_failed", detail: "refresh response missing refresh_token or expiry" };
        }
        if (!import_chunk_ephf358x.Dft.every((c) => e.scopes.includes(c))) {
          await (0, import_chunk_865at33z.mv)(e.refreshToken, r.clientId);
          let c = r.refreshToken;
          return await T((f) => f.refreshToken === c), { ok: false, reason: "needs_design_login", detail: "refresh response missing design scopes" };
        }
        let u = r.refreshToken, h = await c5r({ accessToken: e.accessToken, refreshToken: e.refreshToken, expiresAt: e.expiresAt, scopes: e.scopes.filter((c) => import_chunk_ephf358x.Dft.some((f) => f === c)), clientId: r.clientId }, { onlyIf: (c) => c?.refreshToken === u });
        if (h.raced) {
          await (0, import_chunk_865at33z.mv)(e.refreshToken, r.clientId);
          let c = await p();
          return c?.accessToken && !(0, import_chunk_865at33z.NR)(c.expiresAt) ? { ok: true, accessToken: c.accessToken } : { ok: false, reason: "needs_design_login" };
        }
        if (!h.success) (0, import_chunk_w578pjby.t)("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", { level: "error" });
        return { ok: true, accessToken: e.accessToken };
      } catch (e) {
        if (a.isCompromised()) {
          let u = await p();
          if (u?.accessToken && !(0, import_chunk_865at33z.NR)(u.expiresAt)) return { ok: true, accessToken: u.accessToken };
          if (!(0, import_chunk_865at33z.N4)(e)) (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return { ok: false, reason: "design_refresh_failed", detail: "another process is refreshing the design token" };
        }
        if ((0, import_chunk_865at33z.eCt)(e)) return { ok: false, reason: "account_on_hold" };
        if ((0, import_chunk_865at33z.N4)(e)) {
          let u = r.refreshToken;
          return await T((h) => h.refreshToken === u), { ok: false, reason: "needs_design_login", detail: "design authorization expired" };
        }
        return { ok: false, reason: "design_refresh_failed", detail: (0, import_chunk_jv7av99m.d)(e) };
      }
    });
  } catch (a) {
    if (a instanceof import_chunk_2m7pv65a.J2e) (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "design_oauth_refresh_lock_contention");
    else (0, import_chunk_k449cc64.i)(a), (0, import_chunk_cqa9hrgx.m)("oauth_token_refresh", "design_oauth_refresh_lock_error");
    return { ok: false, reason: "design_refresh_failed", detail: (0, import_chunk_jv7av99m.d)(a) };
  }
}
function u5r() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? (0, import_chunk_ephf358x.cn)().DESIGN_CLIENT_ID;
}
function ugt() {
  return !u5r().startsWith("00000000-");
}
async function I4o(n, o) {
  let a = import_chunk_ephf358x.Dft.filter((r) => !n.scopes.includes(r));
  if (a.length > 0) {
    if (n.refreshToken) await (0, import_chunk_865at33z.mv)(n.refreshToken, o);
    return { ok: false, message: `The authorization server did not grant the design scopes (missing: ${a.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.` };
  }
  if (!n.refreshToken || !n.expiresAt) {
    if (n.refreshToken) await (0, import_chunk_865at33z.mv)(n.refreshToken, o);
    return { ok: false, message: "The token response was missing a refresh token or expiry \u2014 cannot store a usable design credential." };
  }
  return { ok: true, slot: { accessToken: n.accessToken, refreshToken: n.refreshToken, expiresAt: n.expiresAt, scopes: n.scopes.filter((r) => import_chunk_ephf358x.Dft.some((e) => e === r)), clientId: o } };
}
function bnr() {
  return import_chunk_c203g5kd.s.isSSH() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true || (0, import_chunk_f9x2f6cx.Hn)();
}
var w = 3e5;
async function f5r(n, o) {
  if (n?.aborted) return { ok: false, reason: "interrupted", message: "Design login was interrupted." };
  if (!ugt()) return { ok: false, reason: "unconfigured", message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client." };
  if (bnr() && !o?.onManualCode) return { ok: false, reason: "remote", message: "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead \u2014 it supports pasting the authorization code manually." };
  let a = u5r(), r = new import_chunk_pqpv4rnx.y9(), e = false, u = false, h;
  try {
    let c = o?.onAuthUrl;
    o?.onManualCode?.((k, _) => r.handleManualAuthCodeInput({ authorizationCode: k, state: _ }));
    let f = r.startOAuthFlow(c ? async (k, _) => {
      c(_ ?? k, k);
    } : async () => {
    }, { loginWithClaudeAi: true, oauthClient: { clientId: a, scopes: import_chunk_ephf358x.Dft }, skipProfileFetch: true, successRedirectUrl: (0, import_chunk_ephf358x.cn)().CLAUDEAI_SUCCESS_URL, ...c && { skipBrowserOpen: true } });
    f.then((k) => {
      if (u && k.refreshToken) (0, import_chunk_865at33z.mv)(k.refreshToken, a);
    }).catch(() => {
    });
    let O = await Promise.race([f, new Promise((k, _) => {
      h = setTimeout(() => {
        e = true, u = true, _(Error("design login timed out"));
      }, w), n?.addEventListener("abort", () => {
        u = true, _(Error("design login interrupted"));
      }, { once: true });
    })]), g = await I4o(O, a);
    if (!g.ok) return { ok: false, reason: "invalid", message: g.message };
    if (n?.aborted) return await (0, import_chunk_865at33z.mv)(g.slot.refreshToken, g.slot.clientId), { ok: false, reason: "interrupted", message: "Design login was interrupted." };
    if (!(await c5r(g.slot)).success) return await (0, import_chunk_865at33z.mv)(g.slot.refreshToken, g.slot.clientId), { ok: false, reason: "save_failed", message: "Could not save the design credential to secure storage. Retry, or run /design-login." };
    return { ok: true, accessToken: g.slot.accessToken };
  } catch (c) {
    if (u = true, n?.aborted) return { ok: false, reason: "interrupted", message: "Design login was interrupted." };
    if (e) return { ok: false, reason: "timed_out", message: "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow." };
    if (c instanceof import_chunk_pqpv4rnx.NYe) return { ok: false, reason: "code_refused", message: c.message };
    let f = (0, import_chunk_9b4aq7fb.FVt)(c, "This Claude Design account");
    if (f) return { ok: false, reason: "account_on_hold", message: f };
    return { ok: false, reason: "failed", cause: (0, import_chunk_jv7av99m.d)(c), message: `The browser authorization failed (${(0, import_chunk_jv7av99m.d)(c)}). Run /design-login to retry with the manual flow.` };
  } finally {
    if (h !== void 0) clearTimeout(h);
    r.cleanup();
  }
}
