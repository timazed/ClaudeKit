const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_g7b7m49w_exports = {};
__export(chunk_g7b7m49w_exports, {
  Lqs: () => Lqs,
  Nqs: () => Nqs,
  aCa: () => aCa,
  iCa: () => iCa,
  lCa: () => lCa,
  mYl: () => mYl,
  pYl: () => pYl
});
module.exports = __toCommonJS(chunk_g7b7m49w_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_hemj7fh0 = require("/$bunfs/root/chunk-hemj7fh0.js");
var import_chunk_2m7pv65a = require("/$bunfs/root/chunk-2m7pv65a.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var V = ".hybrid_gateway_idp_refresh.lock", X = 12e4, H = 1e4, Q = 131072, O = "Run /login in Claude Code, or run claude auth login --organization-gateway in a terminal.", W = /^[\p{L}\p{N}.!#$%&'*+/=?^_`{|}~@-]{1,254}$/u, Z = (0, import_chunk_2cbgkbm2.p)(() => {
  let r = (0, import_chunk_adx6804h.E)().max(864e13);
  return (0, import_chunk_adx6804h.c)({ binding: (0, import_chunk_adx6804h.c)({ organizationUuid: (0, import_chunk_adx6804h.n)(), gatewayUrl: (0, import_chunk_adx6804h.n)(), issuer: (0, import_chunk_adx6804h.n)().optional(), authorizationUrl: (0, import_chunk_adx6804h.n)().optional(), tokenUrl: (0, import_chunk_adx6804h.n)().optional(), clientId: (0, import_chunk_adx6804h.n)(), resource: (0, import_chunk_adx6804h.n)().optional(), scopes: (0, import_chunk_adx6804h.n)(), bearerTokenType: (0, import_chunk_adx6804h.F)(["id_token", "access_token"]) }), accountUuid: (0, import_chunk_adx6804h.n)(), tokenEndpoint: (0, import_chunk_adx6804h.n)(), bearer: (0, import_chunk_adx6804h.n)(), bearerExpiresAt: r, receivedAt: r, signedInAt: r, settingsFetchedAt: r, refreshToken: (0, import_chunk_adx6804h.n)().optional(), grantedScopes: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), renewable: (0, import_chunk_adx6804h.v)(false).optional(), signedInAs: (0, import_chunk_adx6804h.n)().regex(W).optional().catch(void 0) });
});
function L(r) {
  let e = Z().safeParse(r?.hybridGatewayIdp);
  return e.success && r?.hybridOauth?.organizationUuid === e.data.binding.organizationUuid && r.hybridOauth.accountUuid === e.data.accountUuid ? e.data : void 0;
}
function iCa(r) {
  let { oidc: e } = r;
  return { organizationUuid: r.organizationUuid, gatewayUrl: r.gatewayUrl, ...e.issuer ? { issuer: e.issuer } : { ...e.authorizationUrl !== void 0 && { authorizationUrl: e.authorizationUrl }, ...e.tokenUrl !== void 0 && { tokenUrl: e.tokenUrl } }, clientId: e.clientId, ...e.resource !== void 0 && { resource: e.resource }, scopes: e.scopes ?? "", bearerTokenType: e.bearerTokenType ?? "id_token" };
}
async function Lqs(r) {
  let e = (0, import_chunk_zzrn5zap.Er)();
  e.invalidateCache?.();
  let a = await e.readAsync(), o = L(a);
  if (o !== void 0 && q(r, o)) {
    let { GatewayIdpError: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kt4prr9v.js")));
    throw new i("settings_changed", lCa("settings_changed"));
  }
  if (a?.hybridOauth?.organizationUuid !== r.organizationUuid) {
    let { GatewayIdpError: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kt4prr9v.js")));
    throw new i("sign_in_ended", "Claude Code could not find the organization sign-in in secure storage. Run /login in Claude Code and choose the organization that your administrators manage in Anthropic's Enterprise Admin Console. Then sign in to its gateway.");
  }
  return a.hybridOauth.accountUuid;
}
async function Nqs(r, e, a, o, i) {
  let { GatewayIdpError: f, gatewayIdpBearer: s, HEADER_SAFE: I } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kt4prr9v.js"))), y = s(r.oidc, a, o);
  if (y === void 0) {
    let g = r.oidc.bearerTokenType === "access_token" ? a.accessToken : a.idToken;
    throw g === void 0 ? new f("no_bearer", "Your organization's identity provider did not send an ID token. Ask your administrator to check that its app registration issues ID tokens.") : I.test(g) ? new f("no_expiry", "Your organization's identity provider sent a token with no expiry time and no way to renew it. Ask your administrator.") : new f("no_bearer", "Your organization's identity provider sent a token that Claude Code cannot send to the gateway. Ask your administrator.");
  }
  let A = a.idToken === void 0 ? null : (0, import_chunk_np189awg.hD)(a.idToken), h = (0, import_chunk_ma3kja9f.T)(A) ? [A.email, A.preferred_username].find((g) => typeof g === "string" && W.test(g)) : void 0, w = { binding: iCa(r), accountUuid: i, tokenEndpoint: e.tokenEndpoint, bearer: y.bearer, bearerExpiresAt: y.expiresAt, receivedAt: o, signedInAt: o, settingsFetchedAt: r.fetchedAt, ...a.refreshToken !== void 0 && { refreshToken: a.refreshToken }, ...a.grantedScopes !== void 0 && { grantedScopes: a.grantedScopes }, ...h !== void 0 && { signedInAs: h } };
  if (!J(w)) throw new f("stale_bearer", "By this computer's clock, the token from your organization's identity provider has expired or is about to expire. Check the date and time on this computer. Then sign in again.");
  if (K(w)) throw new f("too_large", "Your sign-in is too large for Claude Code to save in secure storage. Ask your administrator to check your organization's identity provider and sign-in settings.");
  let U = false, b = false, R = false;
  try {
    U = (await (0, import_chunk_zzrn5zap.Er)().mutate((g) => {
      if (g.hybridOauth?.organizationUuid !== r.organizationUuid || g.hybridOauth.accountUuid !== i) return b = true, g;
      let x = L(g);
      if (x !== void 0 && q(r, x)) return R = true, g;
      return { ...g, hybridGatewayIdp: w };
    })).success;
  } catch (g) {
    (0, import_chunk_w578pjby.t)(`[gateway-idp] failed to save the grant: ${(0, import_chunk_jv7av99m.d)(g)}`, { level: "error" });
  }
  if (b) throw new f("sign_in_ended", "The organization sign-in changed while you were signing in to the gateway. Run /login in Claude Code and choose the organization that your administrators manage in Anthropic's Enterprise Admin Console. Then sign in to its gateway.");
  if (R) throw new f("settings_changed", lCa("settings_changed"));
  if (!U) throw new f("save_failed", "Claude Code could not save your sign-in to secure storage. Try again.");
  return (0, import_chunk_xcgcdx61.o_n)(w), w;
}
async function aCa(r, e = {}) {
  let a = e.now ?? Date.now, o = await S(false), i = z(r, o);
  if (i !== void 0) return i;
  if (o !== void 0 && o.bearer !== e.refused && D(o, a())) return { ok: true, bearer: o.bearer, expiresAt: o.bearerExpiresAt };
  if ((0, import_chunk_f9x2f6cx.Y)()) return (0, import_chunk_cqa9hrgx.l)("hybrid_gateway_idp_refresh", "diskless"), G(o, e.refused, a());
  try {
    return await (0, import_chunk_2m7pv65a.olt)(V, async (f) => {
      let s = await S(true), I = z(r, s);
      if (I !== void 0 || s === void 0) return I ?? { ok: false, reason: "not_signed_in" };
      if (s.bearer !== e.refused && D(s, a())) return { ok: true, bearer: s.bearer, expiresAt: s.bearerExpiresAt };
      if (s.refreshToken === void 0 || s.renewable === false) {
        let y = G(s, void 0, a());
        return !y.ok ? { ok: false, reason: "sign_in_again" } : s.bearer === e.refused ? { ok: false, reason: "refused" } : y;
      }
      if (f.isCompromised()) return (0, import_chunk_cqa9hrgx.l)("hybrid_gateway_idp_refresh", "lock_compromised"), G(s, e.refused, a());
      if (k().readFailed && k().spent === void 0) {
        let y = G(s, e.refused, a());
        return y.ok ? y : { ok: false, reason: "could_not_read" };
      }
      return await ee(r, s, s.refreshToken, e.refused, a, f.isCompromised);
    });
  } catch (f) {
    if (f instanceof import_chunk_2m7pv65a.J2e) {
      (0, import_chunk_cqa9hrgx.l)("hybrid_gateway_idp_refresh", "lock_contention");
      let s = await S(true);
      return z(r, s) ?? G(s, e.refused, a());
    }
    return (0, import_chunk_w578pjby.t)(`[gateway-idp] refresh lock failed: ${(0, import_chunk_jv7av99m.d)(f)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("hybrid_gateway_idp_refresh", "lock_error"), { ok: false, reason: "refresh_failed" };
  }
}
async function pYl(r, e) {
  let a = await S(true);
  if (a !== void 0 && a.receivedAt > e) return aCa(r);
  return aCa(r, { ...a !== void 0 && { refused: a.bearer } });
}
function lCa(r) {
  switch (r) {
    case "not_signed_in":
      return `You are not signed in to your organization's gateway. ${O}`;
    case "could_not_read":
      return "Claude Code could not read your saved sign-in to your organization's gateway. Try again in a moment.";
    case "settings_changed":
      return "Your organization changed its gateway sign-in settings. Start Claude Code again.";
    case "sign_in_again":
      return `Your sign-in to your organization's gateway has ended. ${O}`;
    case "renewal_refused":
      return `The request to renew your sign-in to your organization's gateway was refused. ${O} If the sign-in fails too, ask your administrator.`;
    case "refused":
      return `Your organization's gateway did not accept your sign-in. Claude Code cannot renew it. ${O}`;
    case "refresh_failed":
      return `Claude Code could not renew your sign-in to your organization's gateway. Check your network. If this continues, sign in again. ${O}`;
  }
}
function mYl(r, e) {
  if ((0, import_chunk_xcgcdx61.rxt)()?.areOffLimits() !== false) return r === void 0 ? void 0 : "this process may not use it";
  let a = r === void 0 || k().readFailed ? void 0 : k().held, o = a === void 0 ? (0, import_chunk_zzrn5zap.Er)().read() : void 0, i = a ?? L(o), f = r === void 0 ? void 0 : z(r, i), s = r !== void 0 && (0, import_chunk_xcgcdx61.yDr)(r.organizationUuid) ? "you can't sign in now; the Managed settings (remote) row shows why" : "run /login, or claude auth login --organization-gateway";
  if (f !== void 0 && !f.ok) return f.reason === "settings_changed" ? "your organization changed the sign-in settings \xB7 start Claude Code again" : f.reason === "could_not_read" && !o?.hybridOauth ? "the saved sign-in could not be read \xB7 try again in a moment" : `not signed in \xB7 ${s}`;
  if (i === void 0) return;
  let I = i.refreshToken !== void 0 && i.renewable !== false;
  if (!I && i.bearerExpiresAt - e <= H) return `sign-in ended \xB7 ${s}`;
  let y = i.binding.issuer ?? i.binding.authorizationUrl ?? i.tokenEndpoint, A = URL.canParse(y) ? ` through ${new URL(y).host}` : "", h = r === void 0 && URL.canParse(i.binding.gatewayUrl) ? ` to ${new URL(i.binding.gatewayUrl).host}` : "", w = i.signedInAs === void 0 ? "" : ` as ${i.signedInAs}`;
  return I ? `signed in${h}${w}${A}` : `signed in${h}${w}${A} until ${(0, import_chunk_hemj7fh0.aQn)(new Date(i.bearerExpiresAt).toISOString())}`;
}
async function ee(r, e, a, o, i, f) {
  let s = k(), { GatewayIdpError: I, gatewayIdpBearer: y, refreshGatewayIdpTokens: A } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kt4prr9v.js"))), h;
  try {
    h = await A(r.oidc, e.tokenEndpoint, a, e.grantedScopes);
  } catch (g) {
    if (f()) {
      let M = await S(true);
      return z(r, M) ?? G(M, o, i());
    }
    if (g instanceof I && g.failure === "invalid_grant") return await ne(P(e, s.spent)), (0, import_chunk_xcgcdx61.o_n)(), (0, import_chunk_cqa9hrgx.m)("hybrid_gateway_idp_refresh", "invalid_grant"), { ok: false, reason: "sign_in_again" };
    let x = g instanceof I ? g.failure : "unknown";
    (0, import_chunk_cqa9hrgx.m)("hybrid_gateway_idp_refresh", x);
    let N = G(e, o, i());
    return !N.ok && x === "renewal_refused" ? { ok: false, reason: x } : N;
  }
  let w = i(), U = y(r.oidc, h, w), b = U === void 0 ? void 0 : { ...e, bearer: U.bearer, bearerExpiresAt: U.expiresAt, receivedAt: w, ...h.refreshToken !== void 0 && { refreshToken: h.refreshToken }, ...h.grantedScopes !== void 0 && { grantedScopes: h.grantedScopes } };
  if (b !== void 0 && K(b)) return (0, import_chunk_cqa9hrgx.m)("hybrid_gateway_idp_refresh", "too_large"), G(e, o, i());
  if (b === void 0 || !J(b)) {
    await j({ ...e, renewable: false }, P(e, s.spent)), (0, import_chunk_cqa9hrgx.m)("hybrid_gateway_idp_refresh", "no_fresh_bearer");
    let g = G(e, o, i());
    return g.ok ? g : { ok: false, reason: "sign_in_again" };
  }
  let R = await j(b, P(e, s.spent));
  if (R === "raced") {
    let g = await S(true);
    return z(r, g) ?? (g !== void 0 && D(g, i()) ? { ok: true, bearer: g.bearer, expiresAt: g.bearerExpiresAt } : { ok: false, reason: "not_signed_in" });
  }
  if (s.held = b, R === "failed") s.spent ??= a, (0, import_chunk_cqa9hrgx.l)("hybrid_gateway_idp_refresh", "save_failed");
  else s.spent = void 0, (0, import_chunk_cqa9hrgx.u)("hybrid_gateway_idp_refresh");
  return { ok: true, bearer: b.bearer, expiresAt: b.bearerExpiresAt };
}
function G(r, e, a) {
  return r !== void 0 && r.bearer !== e && r.bearerExpiresAt - a > H ? { ok: true, bearer: r.bearer, expiresAt: r.bearerExpiresAt } : { ok: false, reason: "refresh_failed" };
}
function z(r, e) {
  if (e === void 0) return { ok: false, reason: k().readFailed ? "could_not_read" : "not_signed_in" };
  let a = iCa(r), o = { organizationUuid: e.binding.organizationUuid === a.organizationUuid, gatewayUrl: e.binding.gatewayUrl === a.gatewayUrl, issuer: e.binding.issuer === a.issuer, authorizationUrl: e.binding.authorizationUrl === a.authorizationUrl, tokenUrl: e.binding.tokenUrl === a.tokenUrl, clientId: e.binding.clientId === a.clientId, resource: e.binding.resource === a.resource, scopes: e.binding.scopes === a.scopes, bearerTokenType: e.binding.bearerTokenType === a.bearerTokenType }, i = a.tokenUrl === void 0 || e.tokenEndpoint === a.tokenUrl;
  if (Object.values(o).every(Boolean) && i) return;
  return { ok: false, reason: e.binding.organizationUuid === r.organizationUuid && e.settingsFetchedAt > r.fetchedAt ? "settings_changed" : "not_signed_in" };
}
function q(r, e) {
  let a = z(r, e);
  return a !== void 0 && !a.ok && a.reason === "settings_changed";
}
function J(r) {
  return r.bearerExpiresAt - r.receivedAt > H;
}
function K(r) {
  return Buffer.byteLength((0, import_chunk_w578pjby._)(r)) > Q;
}
function D(r, e) {
  let a = r.bearerExpiresAt - r.receivedAt;
  return r.bearerExpiresAt - e > Math.min(X, a / 2);
}
function k() {
  return (0, import_chunk_xcgcdx61.y3)().identityProviderGrant;
}
async function S(r) {
  let e = (0, import_chunk_zzrn5zap.Er)();
  if (r) e.invalidateCache?.({ keepForFailedRead: true });
  let a = k(), o = r || a.spent !== void 0 ? void 0 : await e.readAsync(), i = L(o) !== void 0 ? o : await (e.readAsyncStrict?.(void 0, { inaccessibleAs: "failureIfTransient" }) ?? e.readAsync());
  if (k() !== a) return k().held;
  if (a.readFailed = i === import_chunk_zzrn5zap.bs, i === import_chunk_zzrn5zap.bs) return (0, import_chunk_cqa9hrgx.l)("hybrid_gateway_idp_refresh", "read_failed"), a.held;
  let f = L(i);
  if (a.spent !== void 0 && f?.refreshToken === a.spent && f.signedInAt === a.held?.signedInAt) return a.held;
  return a.spent = void 0, a.held = f, f;
}
function P(r, e) {
  return (a) => a.signedInAt === r.signedInAt && (a.refreshToken === r.refreshToken || e !== void 0 && a.refreshToken === e);
}
async function j(r, e) {
  let a = false;
  try {
    let o = await (0, import_chunk_zzrn5zap.Er)().mutate((i) => {
      if (i.hybridGatewayIdp === void 0 || !e(i.hybridGatewayIdp)) return a = true, i;
      return { ...i, hybridGatewayIdp: r };
    });
    return a ? "raced" : o.success ? "saved" : "failed";
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`[gateway-idp] failed to save the grant: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" }), "failed";
  }
}
async function ne(r) {
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((e) => {
      if (e.hybridGatewayIdp === void 0 || !r(e.hybridGatewayIdp)) return e;
      let a = { ...e };
      return delete a.hybridGatewayIdp, a;
    });
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[gateway-idp] failed to clear the grant: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
  }
}
