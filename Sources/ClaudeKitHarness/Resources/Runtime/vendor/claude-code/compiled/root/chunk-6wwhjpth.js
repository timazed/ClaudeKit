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
var chunk_6wwhjpth_exports = {};
__export(chunk_6wwhjpth_exports, {
  Kjs: () => Kjs,
  Vjs: () => Vjs,
  bUo: () => bUo,
  kUo: () => kUo,
  kmt: () => kmt,
  s9t: () => s9t,
  wUo: () => wUo,
  wwn: () => wwn
});
module.exports = __toCommonJS(chunk_6wwhjpth_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jm07ya5t = require("/$bunfs/root/chunk-jm07ya5t.js");
var import_chunk_d71b3bew = require("/$bunfs/root/chunk-d71b3bew.js");
class wwn extends Error {
  fallbackCures;
  causeSummary;
  constructor(e, o) {
    super(e, { cause: o.cause });
    this.fallbackCures = o.fallbackCures, this.causeSummary = o.fallbackCures ? o.causeSummary : null;
  }
}
class k extends import_chunk_jv7av99m.gr {
}
class kmt extends Error {
  constructor() {
    super("The sign-in was cancelled before anything was stored.");
  }
}
function bUo(e = (0, import_chunk_865at33z.qT)(), o = (0, import_chunk_865at33z.TRs)()) {
  return (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && !o && (0, import_chunk_2yx6c1y2.vt)().forceLoginOrgUUID === void 0 && e !== "claudeai";
}
function s9t({ afterInstall: e = false } = {}) {
  return (0, import_chunk_865at33z.lz)(false).valid && (0, import_chunk_tvttgr51.xee)("firstParty") === void 0 && (0, import_chunk_2yx6c1y2.bI)().filter(import_chunk_6mfepmbb.rF).every(import_chunk_2yx6c1y2.y8) && bUo((0, import_chunk_865at33z.qT)(), !e && (0, import_chunk_865at33z.TRs)());
}
var Vjs = "Login blocked: signing in to Console without an API key is not available on this machine. Choose another way to sign in.";
async function Kjs(e, o, a = {}) {
  try {
    let r = await kUo(await wUo(e, o, a), a);
    return (0, import_chunk_cqa9hrgx.u)("oauth_console_profile_login"), r;
  } catch (r) {
    if (r instanceof kmt) (0, import_chunk_cqa9hrgx.l)("oauth_console_profile_login", "cancelled");
    else if (r instanceof wwn && r.fallbackCures) (0, import_chunk_cqa9hrgx.l)("oauth_console_profile_login", "refused_fell_back");
    else if (r instanceof k) (0, import_chunk_cqa9hrgx.m)("oauth_console_profile_login", "not_console_organization");
    else (0, import_chunk_cqa9hrgx.m)("oauth_console_profile_login", r instanceof wwn ? "refused" : "error");
    throw r;
  }
}
async function wUo(e, o, { loginHint: a, loginMethod: r, orgUUID: g, onCallbackListenerUnavailable: n, skipBrowserOpen: c }) {
  try {
    await (0, import_chunk_jm07ya5t.wCn)();
  } catch (s) {
    let f = (0, import_chunk_jm07ya5t.s5r)(s);
    if (f === null) throw s;
    let p = (0, import_chunk_jm07ya5t.E0a)(s);
    throw new wwn((0, import_chunk_jv7av99m.d)(s), f && p !== null ? { fallbackCures: true, causeSummary: p, cause: s } : { fallbackCures: false, cause: s });
  }
  return e.startOAuthFlow(o, { loginWithClaudeAi: false, oauthClient: { clientId: import_chunk_jm07ya5t.bCn, scopes: import_chunk_jm07ya5t.k0a }, loginHint: a, loginMethod: r, orgUUID: g, onCallbackListenerUnavailable: n, skipBrowserOpen: c });
}
async function kUo(e, { signal: o, onInstallStart: a, storageV5: r, credentials: g }) {
  let n = { ...e, profile: e.profile ?? await (0, import_chunk_865at33z.ehe)(e.accessToken) }, c = A(n);
  if (c instanceof Error) throw await h(n), c;
  let s = await C();
  if (o?.aborted) throw await h(n), new kmt();
  a?.(), await y(s);
  let { departingLoginMayRemain: f, ...p } = await (0, import_chunk_d71b3bew.qjs)(n, { storageV5: r, credentials: g }), w;
  try {
    let i = n.tokenAccount;
    w = await (0, import_chunk_jm07ya5t.v0a)({ accessToken: n.accessToken, refreshToken: c.refreshToken, expiresAtMs: c.expiresAtMs, scopes: n.scopes, organizationUuid: i?.organizationUuid ?? n.profile?.organization.uuid, organizationName: i?.organizationName ?? n.profile?.organization.name, accountEmail: i?.emailAddress ?? n.profile?.account.email, workspaceId: i?.workspaceId, workspaceName: i?.workspaceName });
  } catch (i) {
    if (!await (0, import_chunk_jm07ya5t.i5r)(c.refreshToken)) await h(n);
    throw i;
  }
  return await (0, import_chunk_865at33z.xRr)(n.accessToken, r).catch((i) => (0, import_chunk_w578pjby.t)(String(i), { level: "error" })), await (0, import_chunk_d71b3bew.Yjs)({ storageV5: r, credentials: g, ...p }), { ...w, ...f && { departingLoginMayRemain: f } };
}
async function C() {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return null;
  let e = (0, import_chunk_zzrn5zap.Er)();
  e.invalidateCache?.();
  let o = (await e.readAsync())?.claudeAiOauth;
  return o?.refreshToken ? { refreshToken: o.refreshToken, clientId: o.clientId } : null;
}
async function y(e) {
  if (e === null) return;
  await (0, import_chunk_865at33z.mv)(e.refreshToken, e.clientId);
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((o) => ({ ...o, claudeAiOauth: void 0 }));
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Console profile login: could not clear the replaced claude.ai login record: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
function A(e) {
  let o = e.profile?.organization.organization_type;
  if (o && o !== "api_individual" && o !== "api_team") {
    let a = (0, import_chunk_865at33z.qT)() === "console" ? "This computer's settings require a Console sign-in (forceLoginMethod). Sign in again with a Console account. To get one, go to https://platform.claude.com or ask your administrator." : 'To use a Claude subscription, sign in again and select "Claude account with subscription". To pay for API usage, set up a Console account at https://platform.claude.com and sign in again.';
    return new k(`This sign-in isn't for an Anthropic Console account, so Claude Code can't use it. Nothing on this computer changed. ${a}`);
  }
  if (!e.scopes.includes(import_chunk_ephf358x.uP)) return Error("The organization didn't grant inference access to this sign-in, so Claude Code can't use it.");
  if (!e.refreshToken) return Error("The sign-in came back without a refresh token, so it would stop working within hours. Try again.");
  if (e.expiresAt === null || !Number.isFinite(e.expiresAt)) return Error("The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.");
  return { refreshToken: e.refreshToken, expiresAtMs: e.expiresAt };
}
async function h(e) {
  if (e.refreshToken) await (0, import_chunk_865at33z.mv)(e.refreshToken, import_chunk_jm07ya5t.bCn);
}
