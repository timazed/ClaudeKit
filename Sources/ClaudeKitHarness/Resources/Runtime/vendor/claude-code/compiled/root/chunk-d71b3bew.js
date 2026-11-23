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
var chunk_d71b3bew_exports = {};
__export(chunk_d71b3bew_exports, {
  $Yn: () => $Yn,
  FYn: () => FYn,
  NYn: () => NYn,
  Xjs: () => Xjs,
  Yjs: () => Yjs,
  eKe: () => eKe,
  mIt: () => mIt,
  qjs: () => qjs,
  rWr: () => rWr
});
module.exports = __toCommonJS(chunk_d71b3bew_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_14rwvvs9 = require("/$bunfs/root/chunk-14rwvvs9.js");
var import_chunk_9xz0nsgn = require("/$bunfs/root/chunk-9xz0nsgn.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
async function R(e, o) {
  try {
    if ((0, import_chunk_865at33z.ge)().claudeCodeFirstTokenDate !== void 0) {
      (0, import_chunk_cqa9hrgx.u)("api_first_token_date_fetch");
      return;
    }
    let c = await import_chunk_865at33z.zt.get("/api/organization/claude_code_first_token_date", { auth: "async", timeout: 1e4, credentials: o });
    if (!c.ok) {
      if (c.reason === "no-auth") (0, import_chunk_w578pjby.t)(`Failed to get auth headers for first-token-date fetch: ${c.detail}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("api_first_token_date_fetch", "request_failed");
      return;
    }
    let g = c.data?.first_token_date ?? null;
    if (g !== null) {
      let n = new Date(g).getTime();
      if (isNaN(n)) {
        (0, import_chunk_k449cc64.i)(Error(`Received invalid first_token_date from API: ${g}`)), (0, import_chunk_cqa9hrgx.m)("api_first_token_date_fetch", "invalid_date");
        return;
      }
    }
    await (0, import_chunk_865at33z.Ke)((n) => ({ ...n, claudeCodeFirstTokenDate: g }), e), (0, import_chunk_cqa9hrgx.u)("api_first_token_date_fetch");
  } catch (r) {
    if ((0, import_chunk_jv7av99m.M_)(r)) (0, import_chunk_w578pjby.t)(`Failed to fetch first token date: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(r);
    (0, import_chunk_cqa9hrgx.m)("api_first_token_date_fetch", "request_failed");
  }
}
var D = "Couldn't save your login. Try logging in again.", N = "Couldn't save your login. If your Mac's keychain is locked, unlock it and log in again.", eKe = "Sign in again to take your previous account or API key off the config file.";
async function mIt(e, { storageV5: o, credentials: r } = {}) {
  let { departingLoginMayRemain: c, ...g } = await qjs(e, { storageV5: o, credentials: r, keepStoredLogin: (0, import_chunk_865at33z.L4)(e.scopes) && Boolean(e.refreshToken && e.expiresAt) }), n = await (0, import_chunk_865at33z.lRs)({ ...e, ...g.incomingIdentity }, r, "sign_in", import_chunk_14rwvvs9.r5r);
  if ((0, import_chunk_865at33z.ck)({ ownWriteLanded: n.success && n.backendName !== void 0 }), process.env.CLAUDE_CODE_OAUTH_TOKEN) if (n.success) import_chunk_c203g5kd.s.unset("CLAUDE_CODE_OAUTH_TOKEN");
  else import_chunk_c203g5kd.s.set("CLAUDE_CODE_OAUTH_TOKEN", e.accessToken);
  if ((0, import_chunk_f9x2f6cx.wse)()) (0, import_chunk_f9x2f6cx.w2)(n.success ? null : e.accessToken), (0, import_chunk_f9x2f6cx.C3n)(false);
  if ((0, import_chunk_f9x2f6cx.LNr)(n.success ? null : e.accessToken), "transient" in n && n.transient === true && !import_chunk_c203g5kd.s.CLAUDE_CODE_OAUTH_TOKEN && !(0, import_chunk_f9x2f6cx.wse)()) throw new import_chunk_jv7av99m.gr((0, import_chunk_cg8dqz0a.x)() === "macos" ? N : D);
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0) await b(r);
  let { warning: p } = n;
  if (p) (0, import_chunk_y53wbr8a.a)("tengu_oauth_storage_warning", { warning: p === import_chunk_zzrn5zap.WIs || p === import_chunk_865at33z.oRs ? (0, import_chunk_78g0060s.f)(p) : (0, import_chunk_78g0060s.S)("other") });
  await (0, import_chunk_865at33z.xRr)(e.accessToken, o).catch((_) => (0, import_chunk_w578pjby.t)(String(_), { level: "error" }));
  let O;
  if ((0, import_chunk_865at33z.L4)(e.scopes)) await R(o, r).catch((_) => (0, import_chunk_w578pjby.t)(String(_), { level: "error" }));
  else {
    let _ = await (0, import_chunk_865at33z.QVi)(e.accessToken, o);
    if (!_) throw Error("Unable to create API key. The server accepted the request but did not return a key.");
    O = (0, import_chunk_865at33z.the)(_);
  }
  return await Yjs({ storageV5: o, credentials: r, ...g }), { ...c && { departingLoginMayRemain: c }, storage: { success: n.success, backendName: n.backendName, transient: n.transient, fallbackWritten: n.fallbackWritten, ...O !== void 0 && { mintedApiKeyTail: O }, landedToken: { accessToken: e.accessToken, refreshToken: e.refreshToken, clientId: e.clientId }, sessionAuth: n.success || (0, import_chunk_865at33z.kqi)(e.accessToken) ? "fresh" : (0, import_chunk_865at33z.dm)() ? "previous" : "none" } };
}
async function qjs(e, { storageV5: o, credentials: r, keepStoredLogin: c = false }) {
  let g = (0, import_chunk_865at33z.Sn)(), n = { accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid, organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid }, p = (0, import_chunk_865at33z.uc)(g, n), O = (0, import_chunk_865at33z.uc)((0, import_chunk_865at33z.Sw)(), n), _ = await (0, import_chunk_865at33z.v_)(r), T = O && (_ === "env" || _ === "fd" || _ === "store" && p) ? "same_account" : "account_switch", y = (0, import_chunk_865at33z.uc)((0, import_chunk_865at33z.Dc)(), n), h = c && Boolean(n.organizationUuid) && y && (0, import_chunk_865at33z.uc)(await (0, import_chunk_865at33z.uS)(o), n), v = await (0, import_chunk_14rwvvs9.ptt)({ clearOnboarding: false, preserveInProcessTokens: true, preserveNonAnthropicAuth: true, keepStoredLogin: h, storageV5: o, preserveQuotaAutoResume: p, artifactAccount: T, incomingIdentity: n, credentials: r }), E = false;
  if (v !== void 0) {
    if (!await (0, import_chunk_865at33z.ww)((C) => {
      let I = { ...C };
      return I.primaryApiKey = void 0, (0, import_chunk_14rwvvs9.n5r)(I);
    }, o) && await (0, import_chunk_865at33z.t6n)(o) !== void 0) (0, import_chunk_w578pjby.t)("A sign-in could not take the last account or API key off the config file.", { level: "error" }), E = true;
  }
  (0, import_chunk_f9x2f6cx.SPt)(null), (0, import_chunk_xfj2cwfv._Xe)(null);
  let l = e.profile ?? await (0, import_chunk_865at33z.ehe)(e.accessToken);
  if (l?.account && l.organization) (0, import_chunk_865at33z.PRr)({ accountUuid: l.account.uuid, emailAddress: l.account.email, organizationUuid: l.organization.uuid, displayName: l.account.display_name || void 0, fullName: l.account.full_name || void 0, hasExtraUsageEnabled: l.organization.has_extra_usage_enabled ?? void 0, billingType: l.organization.billing_type ?? void 0, subscriptionCreatedAt: l.organization.subscription_created_at ?? void 0, accountCreatedAt: l.account.created_at, ccOnboardingFlags: l.organization.cc_onboarding_flags ?? {}, claudeCodeTrialEndsAt: l.organization.claude_code_trial_ends_at ?? null, claudeCodeTrialDurationDays: l.organization.claude_code_trial_duration_days ?? null, seatTier: l.organization.seat_tier ?? null, singleSeatTeam: l.organization.single_seat_team ?? void 0, planDisplayName: (0, import_chunk_865at33z.DCo)(l), profileFetchedAt: Date.now() }, o, { isSameAccountSignIn: y });
  else if (e.tokenAccount) (0, import_chunk_865at33z.PRr)({ accountUuid: e.tokenAccount.uuid, emailAddress: e.tokenAccount.emailAddress, organizationUuid: e.tokenAccount.organizationUuid }, o, { isSameAccountSignIn: y });
  return (0, import_chunk_xfr8663h.wLe)({ action: "login", success: true, authMethod: "oauth" }), { preserveQuotaAutoResume: p, artifactAccount: T, incomingIdentity: n, departingLoginMayRemain: E };
}
async function Yjs({ storageV5: e, credentials: o, preserveQuotaAutoResume: r = false, incomingIdentity: c }) {
  if (await (0, import_chunk_14rwvvs9.o5r)(e, { preserveQuotaAutoResume: r, artifactAccount: "same_account", incomingIdentity: c }), (0, import_chunk_m15w38ag.ne)() && o !== void 0) await b(o);
  await (0, import_chunk_9xz0nsgn.h4e)(e, o);
}
async function b(e) {
  (0, import_chunk_865at33z.dke)(), await (0, import_chunk_865at33z.pp)(e);
}
var F = "The refused sign-in could not be fully undone: this machine's previous sign-in state could not be confirmed restored, and the refused sign-in was revoked. Sign in again (claude auth login, or /login).", L = "The refused sign-in could not be fully undone: this machine's previous sign-in state could not be confirmed restored, and the refused sign-in may still be valid. Sign in again (claude auth login, or /login), and ask your admin to revoke it if this device is shared.";
function NYn(e) {
  return e.revoked ? F : L;
}
function U(e) {
  return (0, import_chunk_jv7av99m.w)(e) === "ELOCKED" || (0, import_chunk_jv7av99m.fn)(e) || (0, import_chunk_jv7av99m.HD)((0, import_chunk_jv7av99m.kO)(e));
}
function FYn(e) {
  return (0, import_chunk_jv7av99m.tH)(e instanceof Error ? e.name : void 0) ?? (e === null ? "null" : typeof e);
}
function rWr(e, o) {
  if (U(e)) {
    (0, import_chunk_w578pjby.t)(`Rolling back a refused sign-in failed (${o}; ${FYn(e)}: ${(0, import_chunk_jv7av99m.w)(e) ?? (0, import_chunk_jv7av99m.kO)(e) ?? "no errno"})`, { level: "error" });
    return;
  }
  (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`Rolling back a refused sign-in threw (${o}: ${FYn(e)})`, "Rolling back a refused sign-in threw"));
}
async function Xjs(e, { storageV5: o, credentials: r }) {
  let c = e?.mintedApiKeyTail, g = false;
  if (c !== void 0) {
    for (let k of [import_chunk_865at33z.tAs, () => (0, import_chunk_865at33z.Pxr)(o)]) try {
      await k();
    } catch (T) {
      rWr(T, "credential store"), g = true;
    }
    await (0, import_chunk_865at33z.ww)((k) => {
      let { approved: T, rejected: y } = (0, import_chunk_865at33z.q4)(k);
      return { ...k, customApiKeyResponses: { approved: T.filter((h) => h !== c), rejected: y } };
    }, o);
  }
  if (e === void 0 || e.success) {
    let k = await (0, import_chunk_14rwvvs9.ptt)({ clearOnboarding: false, preserveNonAnthropicAuth: true, storageV5: o, credentials: r });
    return { restored: k === void 0 && !g, revoked: k !== "key_on_file" && c === void 0 };
  }
  import_chunk_c203g5kd.s.unset("CLAUDE_CODE_OAUTH_TOKEN"), (0, import_chunk_f9x2f6cx.w2)(null), (0, import_chunk_f9x2f6cx.SPt)(null), (0, import_chunk_865at33z.ck)();
  let n = e.landedToken, p = true, O = false;
  if (n !== void 0) {
    let k = n.refreshToken !== null && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" ? n.refreshToken : null, T = (0, import_chunk_zzrn5zap.Er)();
    try {
      await (0, import_chunk_aj8wb2xh.JIr)(T, (h) => {
        if (h.claudeAiOauth?.accessToken !== n.accessToken) return h;
        let { claudeAiOauth: v, ...E } = h;
        return E;
      }, r), p = !(await (0, import_chunk_aj8wb2xh.RVt)(T, (h) => h.claudeAiOauth?.accessToken, r)).some((h) => h.value === import_chunk_zzrn5zap.bs || h.value === n.accessToken);
    } catch (y) {
      rWr(y, "credential store"), p = false;
    } finally {
      if (k !== null) try {
        O = await (0, import_chunk_865at33z.gGn)(k, n.clientId);
      } catch (y) {
        (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`Revoking a refused sign-in's token threw (${FYn(y)})`, "Revoking a refused sign-in's token threw"));
      }
    }
  }
  await (0, import_chunk_14rwvvs9.o5r)(o, { artifactAccount: (0, import_chunk_865at33z.dm)() ? "account_switch" : "signed_out", credentials: r });
  let _ = await (0, import_chunk_14rwvvs9.vQs)(o);
  return { restored: p && _, revoked: O };
}
async function $Yn(e, o, r) {
  switch (e.reason) {
    case "org_pin_mismatch":
    case "org_verify_failed":
    case "managed_settings_invalid":
      break;
    case "org_pin_api_key_conflict":
    case "provider_not_allowed":
      if (o?.mintedApiKeyTail === void 0) return;
  }
  try {
    return await Xjs(o, r);
  } catch (c) {
    return rWr(c, "sign-out"), { restored: false, revoked: false };
  }
}
