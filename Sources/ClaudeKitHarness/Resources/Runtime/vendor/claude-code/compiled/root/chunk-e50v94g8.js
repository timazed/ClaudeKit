const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_mqqq0hpm = require("/$bunfs/root/chunk-mqqq0hpm.js");
var import_chunk_pqpv4rnx = require("/$bunfs/root/chunk-pqpv4rnx.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
var import_chunk_2m7pv65a = require("/$bunfs/root/chunk-2m7pv65a.js");
var import_readline = require("readline");
var U = ".cloud_sessions_oauth_refresh.lock", F = 3e5;
async function R(e) {
  try {
    return (await (0, import_chunk_zzrn5zap.Er)().readAsync(e))?.cloudSessionsOauth ?? null;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Failed to read the cloud-sessions OAuth tokens: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" }), "unreadable";
  }
}
function H(e) {
  try {
    let n = (0, import_chunk_zzrn5zap.Er)().read()?.cloudSessionsOauth;
    return n !== void 0 && n.organizationUuid === e && Boolean(n.accessToken);
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Failed to read the cloud-sessions OAuth tokens: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" }), false;
  }
}
function M() {
  try {
    let e = (0, import_chunk_zzrn5zap.Er)().read()?.cloudSessionsOauth;
    return e?.standalone === true && Boolean(e.accessToken) ? { organizationUuid: e.organizationUuid, organizationName: e.organizationName, accountEmail: e.accountEmail } : void 0;
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`Failed to read the cloud-sessions OAuth tokens: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
    return;
  }
}
function D() {
  try {
    return (0, import_chunk_zzrn5zap.Er)().read()?.cloudSessionsSignInEnded === true;
  } catch {
    return false;
  }
}
async function x(e, n) {
  try {
    let f = false, h = await (0, import_chunk_zzrn5zap.Er)().mutate((c) => {
      if (n?.onlyIf && !n.onlyIf(c.cloudSessionsOauth)) return f = true, c;
      let o = { ...c, cloudSessionsOauth: e };
      return delete o.cloudSessionsSignInEnded, o;
    });
    return f ? { ...h, raced: true } : h;
  } catch (f) {
    return (0, import_chunk_w578pjby.t)(`Failed to save the cloud-sessions OAuth tokens: ${(0, import_chunk_jv7av99m.d)(f)}`, { level: "error" }), { success: false, warning: "Failed to save the cloud-sessions OAuth tokens" };
  }
}
async function v(e) {
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((n) => {
      if (!n.cloudSessionsOauth || !e(n.cloudSessionsOauth)) return n;
      let f = { ...n };
      if (delete f.cloudSessionsOauth, n.cloudSessionsOauth.standalone === true) f.cloudSessionsSignInEnded = true;
      return f;
    });
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`Failed to clear the cloud-sessions OAuth tokens: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" });
  }
}
async function y() {
  let e = (0, import_chunk_zzrn5zap.Er)();
  return e.invalidateCache?.(), (await e.readAsync())?.cloudSessionsOauth ?? null;
}
async function B({ organizationUuid: e, refusedAccessToken: n, credentials: f }) {
  if ((0, import_chunk_xcgcdx61.Wy)()) return { ok: false, reason: "needs_sign_in" };
  let h = await R(f);
  if (h === "unreadable") return { ok: false, reason: "refresh_failed", detail: "the credential store could not be read" };
  if (!h?.accessToken || h.organizationUuid !== e) return { ok: false, reason: "needs_sign_in" };
  if (!(0, import_chunk_865at33z.NR)(h.expiresAt) && h.accessToken !== n) return { ok: true, accessToken: h.accessToken };
  if ((0, import_chunk_f9x2f6cx.Y)()) return (0, import_chunk_cqa9hrgx.m)("oauth_token_refresh", "cloud_sessions_oauth_refresh_diskless"), { ok: false, reason: "needs_sign_in" };
  try {
    return await (0, import_chunk_2m7pv65a.olt)(U, async (c) => {
      let o = await y();
      if (!o?.accessToken || o.organizationUuid !== e) return { ok: false, reason: "needs_sign_in" };
      if (!(0, import_chunk_865at33z.NR)(o.expiresAt) && o.accessToken !== n) return { ok: true, accessToken: o.accessToken };
      if (!o.refreshToken || !Array.isArray(o.scopes) || o.scopes.length === 0) {
        let r = o.refreshToken;
        return await v((p) => p.refreshToken === r), { ok: false, reason: "needs_sign_in" };
      }
      if (c.isCompromised()) return (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised"), { ok: false, reason: "refresh_failed", detail: "another Claude Code process is renewing it right now" };
      let a = o.refreshToken;
      try {
        let r = await (0, import_chunk_865at33z.ide)(a, { clientId: o.clientId, scopes: o.scopes, skipProfileFetch: true });
        if (!r.refreshToken || !r.expiresAt) {
          if (r.refreshToken && r.refreshToken !== a) await (0, import_chunk_865at33z.mv)(r.refreshToken, o.clientId);
          return { ok: false, reason: "refresh_failed", detail: "the server's reply had no refresh token or expiry" };
        }
        if (!r.scopes.includes(import_chunk_ephf358x.g1e) || o.standalone === true && !J(r.scopes)) return await (0, import_chunk_865at33z.mv)(r.refreshToken, o.clientId), await v((g) => g.refreshToken === a), { ok: false, reason: "needs_sign_in", detail: "refresh response missing the sessions scope" };
        let p = await x({ accessToken: r.accessToken, refreshToken: r.refreshToken, expiresAt: r.expiresAt, scopes: r.scopes.filter((g) => import_chunk_ephf358x.F4n.some((S) => S === g)), clientId: o.clientId, organizationUuid: o.organizationUuid, ...o.standalone === true && { standalone: true, accountEmail: o.accountEmail, organizationName: o.organizationName } }, { onlyIf: (g) => g?.refreshToken === a });
        if (p.raced) {
          await (0, import_chunk_865at33z.mv)(r.refreshToken, o.clientId);
          let g = await y();
          return g?.accessToken && g.organizationUuid === e && !(0, import_chunk_865at33z.NR)(g.expiresAt) ? { ok: true, accessToken: g.accessToken } : { ok: false, reason: "needs_sign_in" };
        }
        if (!p.success) (0, import_chunk_w578pjby.t)("Cloud-sessions OAuth refresh succeeded but the new token could not be saved; using it for this session only.", { level: "error" });
        return { ok: true, accessToken: r.accessToken };
      } catch (r) {
        if (c.isCompromised()) {
          let p = await y();
          if (p?.accessToken && p.organizationUuid === e && !(0, import_chunk_865at33z.NR)(p.expiresAt)) return { ok: true, accessToken: p.accessToken };
          if (!(0, import_chunk_865at33z.N4)(r)) (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised");
          return { ok: false, reason: "refresh_failed", detail: "another Claude Code process is renewing it right now" };
        }
        if ((0, import_chunk_865at33z.eCt)(r)) return { ok: false, reason: "refresh_failed", onHoldMessage: (0, import_chunk_9b4aq7fb.WVn)((0, import_chunk_865at33z.$Co)(r)) };
        if ((0, import_chunk_865at33z.N4)(r)) return await v((p) => p.refreshToken === a), { ok: false, reason: "needs_sign_in", detail: "cloud-sessions authorization expired" };
        return (0, import_chunk_w578pjby.t)(`Cloud-sessions OAuth refresh failed: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" }), { ok: false, reason: "refresh_failed", detail: "the renewal request failed" };
      }
    });
  } catch (c) {
    if (c instanceof import_chunk_2m7pv65a.J2e) (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_contention");
    else (0, import_chunk_k449cc64.i)(c), (0, import_chunk_cqa9hrgx.m)("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_error");
    return { ok: false, reason: "refresh_failed", detail: "the renewal could not run; wait a moment" };
  }
}
function G() {
  return !(0, import_chunk_f9x2f6cx.Se)() && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE !== true;
}
var V = "Paste code here if prompted > ";
function j(e, { expectedState: n, onCode: f, onCancel: h }) {
  if (!e.input.isTTY || !e.output.isTTY) return;
  (0, import_chunk_k59mf0h7.UT)();
  let c = false, o = false, a = (0, import_readline.createInterface)({ input: e.input, output: e.output, prompt: V });
  return a.on("SIGINT", () => h()), a.on("close", () => {
    if (!c) h();
  }), a.on("line", (r) => {
    let p = r.trim();
    if (!p) {
      a.prompt();
      return;
    }
    let g = (0, import_chunk_mqqq0hpm.JRe)(p);
    if ("problem" in g) {
      e.output.write(`${g.problem}
`), a.prompt();
      return;
    }
    if (n !== void 0 && g.state !== n) {
      e.output.write(`That code is not from this sign-in. Paste the code shown after opening the address above.
`), a.prompt();
      return;
    }
    o = true, f(g);
  }), a.prompt(), { close: () => {
    if (c) return;
    if (c = true, !o) e.output.write(`
`);
    a.close();
  } };
}
async function W({ organizationUuid: e, standalone: n, onBrowserOpening: f, terminal: h = { input: process.stdin, output: process.stdout } }) {
  let c = (0, import_chunk_ephf358x.cn)().CLIENT_ID, o = n ? void 0 : (0, import_chunk_9b4aq7fb.tL)()?.accountEmail, a = new import_chunk_pqpv4rnx.y9(), r = false, p = false, g = false, S, A, w, I = false, E = () => {
  }, z = new Promise((_, C) => {
    E = C;
  });
  z.catch(() => {
  });
  try {
    let _ = a.startOAuthFlow(async (T, N) => {
      f?.(T), A = j(h, { expectedState: q(T), onCode: (L) => a.handleManualAuthCodeInput(L), onCancel: () => {
        if (I) return;
        p = true, g = true, E(Error("cloud-sessions sign-in cancelled"));
      } }), await (0, import_chunk_h3t3td58.ml)(N ?? T);
    }, { loginWithClaudeAi: n !== void 0, oauthClient: { clientId: c, scopes: import_chunk_ephf358x.F4n }, orgUUID: e, loginHint: o, skipBrowserOpen: true, successRedirectUrl: (0, import_chunk_ephf358x.cn)().CLAUDEAI_SUCCESS_URL });
    _.then((T) => {
      if (g && T.refreshToken) (0, import_chunk_865at33z.mv)(T.refreshToken, c);
    }).catch(() => {
    }), S = setTimeout(() => {
      r = true, g = true, E(Error("cloud-sessions sign-in timed out"));
    }, F);
    let C = await Promise.race([_, z]);
    if (I = true, A?.close(), n) return await n.store(C);
    let k = await K(C, c, e, o);
    if (!k.ok) return (0, import_chunk_cqa9hrgx.m)("cloud_sessions_console_sign_in", k.reason), k;
    w = k.slot;
    let O = await y();
    if (O?.refreshToken && O.refreshToken !== k.slot.refreshToken) await (0, import_chunk_865at33z.mv)(O.refreshToken, O.clientId);
    if (!(await x(k.slot)).success) return await (0, import_chunk_865at33z.mv)(k.slot.refreshToken, c), (0, import_chunk_cqa9hrgx.m)("cloud_sessions_console_sign_in", "save_failed"), { ok: false, reason: "save_failed", message: "Could not save the cloud-sessions credential to secure storage. Try again." };
    return w = void 0, (0, import_chunk_cqa9hrgx.u)("cloud_sessions_console_sign_in"), { ok: true, accessToken: k.slot.accessToken };
  } catch (_) {
    if (I = true, g = true, w !== void 0) await (0, import_chunk_865at33z.mv)(w.refreshToken, w.clientId);
    if (r) return (0, import_chunk_cqa9hrgx.m)("cloud_sessions_console_sign_in", "timed_out"), { ok: false, reason: "timed_out", message: "The browser sign-in for cloud sessions timed out after 5 minutes. Try again." };
    if (p) return (0, import_chunk_cqa9hrgx.l)("cloud_sessions_console_sign_in", "cancelled"), { ok: false, reason: "cancelled", message: "The sign-in for cloud sessions was cancelled." };
    return (0, import_chunk_w578pjby.t)(`Cloud-sessions sign-in failed: ${(0, import_chunk_jv7av99m.d)(_)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("cloud_sessions_console_sign_in", "failed"), { ok: false, reason: "failed", message: (0, import_chunk_9b4aq7fb.cIo)(_) ?? "The browser sign-in for cloud sessions failed. Try again." };
  } finally {
    if (S !== void 0) clearTimeout(S);
    A?.close(), a.cleanup();
  }
}
function b(e) {
  return (0, import_chunk_xfj2cwfv.Pi)(e).replace(/\s+/g, " ");
}
function J(e) {
  return e.length === import_chunk_ephf358x.F4n.length && import_chunk_ephf358x.F4n.every((n) => e.includes(n));
}
function q(e) {
  try {
    return new URL(e).searchParams.get("state") ?? void 0;
  } catch {
    return;
  }
}
async function K(e, n, f, h) {
  let c = async () => {
    if (e.refreshToken) await (0, import_chunk_865at33z.mv)(e.refreshToken, n);
  };
  if (!e.scopes.includes(import_chunk_ephf358x.g1e)) return await c(), { ok: false, reason: "scope_not_granted", message: "Your Console organization doesn't allow cloud sessions from Claude Code, so the sign-in didn't grant that permission. Cloud sessions stay unavailable with this sign-in." };
  let o = e.tokenAccount?.organizationUuid ?? e.profile?.organization.uuid;
  if (o === void 0) return await c(), { ok: false, reason: "invalid", message: "The sign-in didn't say which organization it was for, so it can't be used. Try again." };
  if (f !== void 0 && o.toLowerCase() !== f.toLowerCase()) return await c(), { ok: false, reason: "other_organization", message: "The sign-in was for a different organization than your Console sign-in. Sign in again and choose the same organization." };
  if (f === void 0) {
    let a = Q(e, o);
    if (a !== null) return await c(), { ok: false, ...a };
  }
  if (h !== void 0) {
    let a = (e.tokenAccount?.emailAddress || e.profile?.account.email)?.trim() || void 0;
    if (a === void 0) return await c(), { ok: false, reason: "invalid", message: "The sign-in didn't say which account it was for, so it can't be used. Try again." };
    if (a.trim().toLowerCase() !== h.trim().toLowerCase()) return await c(), { ok: false, reason: "other_account", message: `The sign-in was for ${a}, but your Console sign-in is ${h}. Sign in again as ${h}.` };
  }
  if (!e.refreshToken || !e.expiresAt) return await c(), { ok: false, reason: "invalid", message: "The sign-in came back without a refresh token or an expiry, so it could not be stored. Try again." };
  return { ok: true, slot: { accessToken: e.accessToken, refreshToken: e.refreshToken, expiresAt: e.expiresAt, scopes: e.scopes.filter((a) => import_chunk_ephf358x.F4n.some((r) => r === a)), clientId: n, organizationUuid: f ?? o, ...f === void 0 && { standalone: true, accountEmail: b(e.tokenAccount?.emailAddress || e.profile?.account.email || "").trim() || void 0, organizationName: e.profile && b(e.profile.organization.name) } } };
}
function Q(e, n) {
  return { reason: "invalid", message: "This sign-in is not available here." };
}
function X() {
  if (!(0, import_chunk_2nv4wrez.v9)() || (0, import_chunk_2nv4wrez.XYe)()) return "unknown";
  return (0, import_chunk_2zeyvjwb.uo)("ldr") ? "ldr" : "not_ldr";
}
(0, import_chunk_2zeyvjwb.YLl)({ organizationLabel: X, hasStored: H, standaloneSignIn: M, standaloneSignInEnded: D, canSignInHere: G, getValid: B, signIn: W });
