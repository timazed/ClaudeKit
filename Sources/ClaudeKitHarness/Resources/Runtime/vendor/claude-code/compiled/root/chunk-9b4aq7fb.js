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
var chunk_9b4aq7fb_exports = {};
__export(chunk_9b4aq7fb_exports, {
  $7i: () => $7i,
  $Vt: () => $Vt,
  B7i: () => B7i,
  BVn: () => BVn,
  BVt: () => BVt,
  Bhn: () => Bhn,
  CIs: () => CIs,
  D7i: () => D7i,
  EIs: () => EIs,
  EMr: () => EMr,
  F7i: () => F7i,
  FA: () => FA,
  FPe: () => FPe,
  FVt: () => FVt,
  G7i: () => G7i,
  GVn: () => GVn,
  GX: () => GX,
  Ize: () => Ize,
  Jct: () => Jct,
  K7i: () => K7i,
  L7i: () => L7i,
  N7i: () => N7i,
  Qke: () => Qke,
  SMr: () => SMr,
  TIs: () => TIs,
  U7i: () => U7i,
  UVn: () => UVn,
  UVt: () => UVt,
  Uhn: () => Uhn,
  V7i: () => V7i,
  VVn: () => VVn,
  W7i: () => W7i,
  WVn: () => WVn,
  Whn: () => Whn,
  _Nl: () => _Nl,
  bMr: () => bMr,
  c8: () => c8,
  cIo: () => cIo,
  cRt: () => cRt,
  dRt: () => dRt,
  fJe: () => fJe,
  fNl: () => fNl,
  fRt: () => fRt,
  gNl: () => gNl,
  gk: () => gk,
  hFe: () => hFe,
  hNl: () => hNl,
  i3: () => i3,
  j7i: () => j7i,
  jVn: () => jVn,
  jX: () => jX,
  jhn: () => jhn,
  kMr: () => kMr,
  mFe: () => mFe,
  mNl: () => mNl,
  og: () => og,
  pNl: () => pNl,
  tL: () => tL,
  u8: () => u8,
  uJe: () => uJe,
  uNl: () => uNl,
  uRt: () => uRt,
  vIs: () => vIs,
  wMr: () => wMr,
  yMr: () => yMr,
  z7i: () => z7i,
  zVn: () => zVn
});
module.exports = __toCommonJS(chunk_9b4aq7fb_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var UVn = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;
function P(e) {
  return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e);
}
var ee = { ")": "(", "]": "[", "}": "{" };
function FPe(e) {
  while (e.length > 0) {
    let r = e.at(-1);
    if (".,;:!?".includes(r)) {
      e = e.slice(0, -1);
      continue;
    }
    let o = ee[r];
    if (!o) break;
    let i = 0, u = 0;
    for (let a of e) if (a === o) i++;
    else if (a === r) u++;
    if (u > i) e = e.slice(0, -1);
    else break;
  }
  return e;
}
function D7i(e) {
  for (let r of e.matchAll(UVn)) return FPe(r[0]);
  return;
}
var re = "tengu_lively_beaver";
class k {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var H = new k();
function gNl(e) {
  return H.register(e);
}
function BVn() {
  let e = H.reader;
  if (!e) return false;
  try {
    return e(re, false) === true;
  } catch {
    return false;
  }
}
var Jct = "account_on_hold", Whn = "https://claude.ai/restricted", L7i = "TS-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", oe = new RegExp(`[?&]ref=(${L7i})(?:&|$)`);
function CIs(e) {
  return oe.exec(e)?.[1];
}
function x(e, r) {
  let o = CIs(r);
  return o ? `${e} (Reference: ${o})` : e;
}
var w = "Your account is on hold and can't use Claude Code. View details or appeal: ";
function WVn(e) {
  return x(`${w}${e}`, e);
}
function SMr(e) {
  return x(`Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`, e);
}
var N7i = WVn(Whn), bMr = `The account signed in to Claude Design is on hold. View details or appeal: ${Whn}`;
function F7i(e) {
  if (!BVn() || !e.startsWith(w)) return false;
  let [r = ""] = e.slice(w.length).split(" ");
  return P(r) && uJe(r) === r && !CIs(r) && e === WVn(r);
}
var C = 2048, se = /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;
function ae(e) {
  try {
    return e === new URL((0, import_chunk_ephf358x.cn)().CLAUDE_AI_ORIGIN).origin;
  } catch {
    return false;
  }
}
function uJe(e) {
  if (typeof e !== "string" || e.length > C) return Whn;
  let r;
  try {
    r = new URL(e);
  } catch {
    return Whn;
  }
  if (r.protocol !== "https:" || r.username || r.password || r.port || r.hash) return Whn;
  let o = r.hostname;
  return (o === "claude.ai" || o.endsWith(".claude.ai") || o === "anthropic.com" || o.endsWith(".anthropic.com") || ae(r.origin)) && r.href.length <= C && se.test(r.href) ? r.href : Whn;
}
var ue = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.F)(["invalid_grant", "access_denied"]), error_description: (0, import_chunk_adx6804h.v)(Jct), error_uri: (0, import_chunk_adx6804h.ie)().optional() }));
function wMr(e) {
  if (!BVn()) return null;
  let r = e;
  if (typeof r === "string") {
    if (!r.includes(Jct)) return null;
    try {
      r = (0, import_chunk_w578pjby.te)(r);
    } catch {
      return null;
    }
  }
  let o = ue().safeParse(r);
  return o.success ? { url: uJe(o.data.error_uri) } : null;
}
class Ize extends Error {
  url;
  constructor(e) {
    super("OAuth account is on hold");
    this.url = e;
    this.name = "OAuthAccountOnHoldError";
  }
}
class Qke extends Error {
  error;
  errorDescription;
  errorUri;
  displayMessage;
  constructor(e, r, o) {
    super("OAuth authorization was denied or failed");
    this.error = e;
    this.errorDescription = r;
    this.errorUri = o;
    this.name = "OAuthCallbackError", this.displayMessage = r ? `${e}: ${r}` : e;
  }
}
function jVn(e) {
  return e instanceof Qke && e.errorDescription === Jct;
}
function cIo(e) {
  return jVn(e) ? SMr(uJe(e.errorUri)) : void 0;
}
function FVt(e, r) {
  if (!jVn(e)) return;
  let o = uJe(e.errorUri);
  return x(`${r} is on hold and can't sign in. View details or appeal: ${o}`, o);
}
var uNl = "urn:ietf:params:oauth:grant-type:jwt-bearer", fNl = "refresh_token", EIs = "/v1/oauth/token", Uhn = "oauth-2025-04-20", pNl = "oidc-federation-2026-04-01", mNl = 120, Bhn = 30, hNl = 5, b = 1048576;
function vIs(e) {
  if (!e) return;
  let r;
  try {
    r = new URL(e);
  } catch (i) {
    throw new og(`Invalid token endpoint base URL "${e}": ${i}`);
  }
  if (r.protocol === "https:") return;
  let o = r.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (r.protocol === "http:" && (o === "localhost" || o === "127.0.0.1" || o === "::1")) return;
  throw new og(`Refusing to send credential over non-https token endpoint "${e}"`);
}
async function TIs(e, r) {
  let o = await de(e), i;
  try {
    i = JSON.parse(o);
  } catch {
    throw new og(`Token endpoint returned non-JSON response (status ${e.status})`, e.status, mFe(o), r);
  }
  if (!i.access_token) throw new og(`Token endpoint response missing access_token: ${JSON.stringify(mFe(i))}`, e.status, mFe(i), r);
  if (i.token_type && i.token_type.toLowerCase() !== "bearer") throw new og(`Token endpoint response: unsupported token_type "${i.token_type}" (want Bearer)`, e.status, mFe(i), r);
  return i;
}
var S = 2e3, ce = /* @__PURE__ */ new Set(["error", "error_description", "error_uri"]);
function mFe(e) {
  if (e == null) return e;
  if (typeof e === "string") {
    let r;
    try {
      r = JSON.parse(e);
    } catch {
      if (e.length <= S) return e;
      return e.slice(0, S) + `... <${e.length - S} more chars>`;
    }
    return JSON.stringify(mFe(r));
  }
  if (typeof e === "object" && !Array.isArray(e)) {
    let r = {};
    for (let [o, i] of Object.entries(e)) if (ce.has(o)) r[o] = i;
    return r;
  }
  return null;
}
async function yMr(e, r = (o) => console.warn(`anthropic-sdk: ${o}`)) {
  if (typeof process > "u") return;
  let { fs: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js"))), i = e, u;
  try {
    i = await o.promises.realpath(e), u = await o.promises.stat(i);
  } catch {
    return;
  }
  let a = u.mode & 511;
  if (a & 18) throw new og(`Credentials file at ${i} is group/world-writable (mode 0o${a.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${i}\`.`);
  if (a & 36) throw new og(`Credentials file at ${i} is group/world-readable (mode 0o${a.toString(8)}); run \`chmod 600 ${i}\` before retrying.`);
  if (typeof process.getuid === "function" && u.uid !== process.getuid()) r(`credentials file at ${i} is owned by uid ${u.uid} (current process uid ${process.getuid()}); verify this is intentional.`);
}
async function dRt(e, r) {
  let { fs: o, path: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js"))), u = i.dirname(e);
  await o.promises.mkdir(u, { recursive: true, mode: 448 });
  let a = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  try {
    let l = await o.promises.open(a, "w", 384);
    try {
      await l.writeFile(JSON.stringify(r, null, 2)), await l.sync();
    } finally {
      await l.close();
    }
    await o.promises.rename(a, e);
  } catch (l) {
    throw await o.promises.unlink(a).catch(() => {
    }), l;
  }
  try {
    let l = await o.promises.open(u, "r");
    try {
      await l.sync();
    } finally {
      await l.close();
    }
  } catch {
  }
}
async function de(e) {
  if (!e.body) return "";
  let r = e.body.getReader(), o = [], i = 0;
  for (; ; ) {
    let { done: a, value: l } = await r.read();
    if (a) break;
    if (i + l.length > b) {
      let _ = b - i;
      if (_ > 0) o.push(l.subarray(0, _));
      await r.cancel();
      break;
    }
    o.push(l), i += l.length;
  }
  let u;
  if (o.length === 1) u = o[0];
  else {
    u = new Uint8Array(o.reduce((l, _) => l + _.length, 0));
    let a = 0;
    for (let l of o) u.set(l, a), a += l.length;
  }
  return new TextDecoder("utf-8").decode(u);
}
class og extends import_chunk_jv7av99m.Mo {
  constructor(e, r = null, o = null, i = null) {
    super(e);
    this.statusCode = r, this.body = o, this.requestId = i;
  }
}
(0, import_chunk_adx6804h.B)();
function jX(e) {
  return !!e && /^[A-Za-z0-9_.-]+$/.test(e) && e !== "." && e !== "..";
}
var fe = "tengu_sorted_waterfall";
class D {
  reader = null;
  reading = false;
}
var I = new D();
function _Nl(e) {
  let r = I.reader;
  return I.reader = e, r;
}
function $Vt() {
  let e = false;
  if (I.reading) return e;
  I.reading = true;
  try {
    let r = I.reader?.(fe, e);
    return typeof r === "boolean" ? r : e;
  } catch {
    return e;
  } finally {
    I.reading = false;
  }
}
function cRt(e) {
  if (!(e instanceof og) || e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403) return null;
  return wMr(e.body);
}
function jhn(e) {
  return e instanceof og && e.statusCode === null && e.message.includes("has expired and no refresh is available");
}
function $7i(e) {
  Object.assign(e, { refreshTokenCleared: true });
}
function U7i(e) {
  return e instanceof og && "refreshTokenCleared" in e && e.refreshTokenCleared === true;
}
var GX = { created_by: "claude-code" }, Oe = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"];
class q {
  precedenceSource = { filled: false };
  unusableNamedProfile = void 0;
  authType = { filled: false };
  profileBaseUrl = { filled: false };
  accountInfo = { filled: false };
  federationIdentity = { filled: false };
  profileStoreDenyPaths = { filled: false };
  settingsBearerRejected = false;
  signInHoldOn = false;
  environmentHoldOn = false;
  primedFiles = void 0;
}
var g = new import_chunk_2904xtvq.j(() => new q());
function B7i(e) {
  let r = g.of((0, import_chunk_f9x2f6cx.N)().host);
  return r.signInHoldOn ||= e, r.signInHoldOn;
}
function W7i(e) {
  let r = g.of((0, import_chunk_f9x2f6cx.N)().host);
  return r.environmentHoldOn ||= e, r.environmentHoldOn;
}
function gk() {
  let e = g.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.precedenceSource.filled) return e.precedenceSource.value;
  let r = V();
  return e.precedenceSource = { filled: true, value: r }, e.unusableNamedProfile = r === null ? K() : void 0, r;
}
function K() {
  let e = u8();
  return e && $Vt() ? e : void 0;
}
function kMr() {
  let e = g.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.precedenceSource.filled) return e.unusableNamedProfile;
  let r = K();
  try {
    return r && V() === null ? r : void 0;
  } catch {
    return r;
  }
}
function EMr(e) {
  if (!jX(e)) return "invalid_name";
  let r = FA();
  if (r === null) return "no_config_dir";
  let o;
  try {
    o = h((0, import_path.join)(r, "configs", `${e}.json`));
    let i = o === null ? null : A(r, e);
    if (i === "oidc_federation" || i === "user_oauth") return "usable_since";
  } catch {
    return "not_found";
  }
  if (o === null) return "not_found";
  try {
    return (0, import_chunk_w578pjby.te)(o)?.authentication?.type === "user_oauth" ? "signed_out" : "unusable_config";
  } catch {
    return "unusable_config";
  }
}
function V() {
  let e = FA(), r = u8();
  if (r) {
    if (e === null) return null;
    let o = A(e, r);
    return o === "oidc_federation" || o === "user_oauth" ? "profile-explicit" : null;
  }
  if (X()) return "env-quad";
  if (e !== null) {
    let o = A(e, fJe(e));
    if (o === "oidc_federation" || o === "user_oauth") return "profile-implicit";
  }
  return null;
}
function j7i() {
  let e = g.of((0, import_chunk_f9x2f6cx.N)().host);
  e.precedenceSource = { filled: false }, e.authType = { filled: false }, e.profileBaseUrl = { filled: false }, e.federationIdentity = { filled: false }, e.profileStoreDenyPaths = { filled: false }, e.settingsBearerRejected = false, GVn();
}
function GVn() {
  g.of((0, import_chunk_f9x2f6cx.N)().host).accountInfo = { filled: false };
}
function UVt() {
  return gk() !== null;
}
function i3() {
  let e = g.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.authType.filled) return e.authType.value;
  let r = Re();
  return e.authType = { filled: true, value: r }, r;
}
function Re() {
  let e = gk();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let r = FA();
  if (r === null) return null;
  let o = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : fJe(r), i = A(r, o);
  return i === "oidc_federation" || i === "user_oauth" ? i : null;
}
function c8() {
  return gk() === "profile-implicit" && i3() === "user_oauth";
}
function tL() {
  let e = g.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.accountInfo.filled) return e.accountInfo.value;
  let r = ye();
  return e.accountInfo = { filled: true, value: r }, r;
}
function ye() {
  let e = gk();
  if (e === null || e === "env-quad") return;
  let r = FA();
  if (r === null) return;
  let o = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : fJe(r);
  return uRt(r, o);
}
function uRt(e, r) {
  let o = h(E(e, r));
  if (o === null) return;
  try {
    let i = JSON.parse(o);
    return { organizationUuid: i.organization_uuid, organizationName: i.organization_name, accountEmail: i.account_email, workspaceId: i.workspace_id, workspaceName: i.workspace_name, createdBy: i.created_by };
  } catch {
    return;
  }
}
function G7i(e, r) {
  try {
    let o = h(E(e, r)), { access_token: i } = JSON.parse(o ?? "{}");
    return typeof i === "string" ? i : void 0;
  } catch {
    return;
  }
}
function zVn() {
  let e = gk();
  if (e === "env-quad") {
    let r = import_chunk_c203g5kd.s.ANTHROPIC_WORKSPACE_ID;
    return `env-quad \xB7 org ${T(process.env.ANTHROPIC_ORGANIZATION_ID ?? "")} \xB7 rule ${T(process.env.ANTHROPIC_FEDERATION_RULE_ID ?? "")}${r ? ` \xB7 ws ${r.startsWith("wrkspc_") ? T(r) : r}` : ""}`;
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let r = FA(), o = r === null ? "default" : e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : fJe(r);
    return `credentials-file \xB7 ${i3() ?? "unknown"} \xB7 profile ${o}`;
  }
  return "inactive";
}
function T(e) {
  return e.length <= 6 ? e : `\u2026${e.slice(-6)}`;
}
function hFe() {
  let e = g.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.profileBaseUrl.filled) return e.profileBaseUrl.value;
  let r = Ae();
  return e.profileBaseUrl = { filled: true, value: r }, r;
}
function Ae() {
  let e = gk();
  if (e === null || e === "env-quad") return;
  let r = FA();
  if (r === null) return;
  try {
    let o = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : fJe(r), i = h((0, import_path.join)(r, "configs", `${o}.json`));
    if (i === null) return;
    let u = JSON.parse(i);
    return typeof u.base_url === "string" && u.base_url.trim() ? u.base_url.trim() : void 0;
  } catch {
    return;
  }
}
var Ee = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ organization_id: (0, import_chunk_adx6804h.n)().optional(), workspace_id: (0, import_chunk_adx6804h.n)().optional(), authentication: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)().optional(), federation_rule_id: (0, import_chunk_adx6804h.n)().optional() }).loose().optional() }).loose());
function fRt() {
  let e = g.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.federationIdentity.filled) return e.federationIdentity.value;
  let r = we();
  return e.federationIdentity = { filled: true, value: r }, r;
}
function we() {
  let e = gk();
  if (e === null) return;
  if (e === "env-quad") return L({ organizationId: import_chunk_c203g5kd.s.ANTHROPIC_ORGANIZATION_ID, federationRuleId: import_chunk_c203g5kd.s.ANTHROPIC_FEDERATION_RULE_ID, workspaceId: import_chunk_c203g5kd.s.ANTHROPIC_WORKSPACE_ID });
  let r = FA();
  if (r === null) return;
  try {
    let o = h((0, import_path.join)(r, "configs", `${BVt(r)}.json`));
    if (o === null) return;
    let i = Ee().safeParse((0, import_chunk_w578pjby.te)(o));
    if (!i.success || i.data.authentication?.type !== "oidc_federation") return;
    return L({ organizationId: i.data.organization_id, federationRuleId: i.data.authentication.federation_rule_id, workspaceId: i.data.workspace_id });
  } catch {
    return;
  }
}
function L({ organizationId: e, federationRuleId: r, workspaceId: o }) {
  let i = e?.trim(), u = r?.trim();
  if (!i || !u) return;
  let a = o?.trim() || void 0;
  return { organizationId: i, federationRuleId: u, ...a !== void 0 && { workspaceId: a } };
}
function z7i() {
  return g.of((0, import_chunk_f9x2f6cx.N)().host).settingsBearerRejected;
}
function V7i(e) {
  g.of((0, import_chunk_f9x2f6cx.N)().host).settingsBearerRejected = e;
}
var Fe = ["configs", "credentials"], xe = ["active_config"];
function VVn() {
  let e = g.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e.profileStoreDenyPaths.filled) return e.profileStoreDenyPaths.value;
  let { value: r, complete: o } = Ne();
  if (o) e.profileStoreDenyPaths = { filled: true, value: r };
  return r;
}
function Ne() {
  let e = FA();
  if (e === null) return { value: null, complete: true };
  let r = { dirs: [e], files: [] };
  try {
    let o = (0, import_path.resolve)(e);
    r = U(o) ? { dirs: Fe.map((a) => (0, import_path.join)(o, a)), files: xe.map((a) => (0, import_path.join)(o, a)) } : { dirs: [o], files: [] };
    let u = Te(e, BVt(e)).filter((a) => !r.dirs.some((l) => a === l || a.startsWith(l + import_path.sep)) && !r.files.includes(a) && !U(a) && !ve(a));
    return { value: { dirs: r.dirs, files: [...r.files, ...u] }, complete: true };
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`WIF profile store: could not resolve the active profile's credentials path (${(0, import_chunk_jv7av99m.d)(o)}); denying the store root only`, { level: "warn" }), { value: r, complete: false };
  }
}
function Se(e, r) {
  let o = E(e, r);
  if (!o) return (0, import_path.join)(e, "credentials", `${r}.json`);
  return typeof o === "string" ? o : null;
}
function Te(e, r) {
  let o = Se(e, r);
  if (o === null || !o.trim()) return [];
  return (0, import_chunk_4smdap7r.M)((0, import_path.isAbsolute)(o) ? [(0, import_path.resolve)(o)] : [(0, import_path.resolve)(e, o), (0, import_path.resolve)(o)]);
}
function fJe(e) {
  return h((0, import_path.join)(e, "active_config"))?.trim() || "default";
}
function BVt(e) {
  return import_chunk_c203g5kd.s.ANTHROPIC_PROFILE ?? fJe(e);
}
function A(e, r) {
  let o = h((0, import_path.join)(e, "configs", `${r}.json`));
  if (o === null) return null;
  let i;
  try {
    i = JSON.parse(o);
  } catch {
    return null;
  }
  let u = i?.authentication?.type ?? null;
  if (u === "user_oauth") {
    if (!h(E(e, r, i))?.trim()) return null;
  }
  return u;
}
function E(e, r, o) {
  if (o === void 0) {
    let i = h((0, import_path.join)(e, "configs", `${r}.json`));
    if (i !== null) try {
      o = JSON.parse(i);
    } catch {
    }
  }
  return o?.authentication?.credentials_path ?? (0, import_path.join)(e, "credentials", `${r}.json`);
}
function FA() {
  return Z()?.dir ?? null;
}
function Z() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return null;
  let e = process.env, r = e.ANTHROPIC_CONFIG_DIR?.trim();
  if (r) return { dir: r, space: "userNamed" };
  let o = e.XDG_CONFIG_HOME?.trim();
  if (o) return { dir: (0, import_path.join)(o, "anthropic"), space: "home" };
  let i = e.HOME?.trim();
  return i ? { dir: (0, import_path.join)(i, ".config", "anthropic"), space: "home" } : null;
}
function u8() {
  return process.env.ANTHROPIC_PROFILE?.trim();
}
function X() {
  return Oe.every((e) => process.env[e]?.trim());
}
function U(e) {
  let r = z(e);
  if (r === (0, import_path.parse)(r).root) return true;
  let o = (0, import_path.relative)(r, z((0, import_chunk_w578pjby.le)().cwd())), i = o.split(import_path.sep)[0];
  return o === "" || i !== ".." && !(0, import_path.isAbsolute)(o);
}
function z(e) {
  let r = (0, import_path.resolve)(e), o = "";
  for (; ; ) try {
    r = (0, import_path.join)(import_fs.realpathSync.native(r), o);
    break;
  } catch {
    let i = (0, import_path.dirname)(r);
    if (i === r) {
      r = (0, import_path.join)(r, o);
      break;
    }
    o = o ? (0, import_path.join)((0, import_path.basename)(r), o) : (0, import_path.basename)(r), r = i;
  }
  return r.toLowerCase();
}
function ve(e) {
  try {
    return (0, import_fs.lstatSync)(e).isDirectory();
  } catch {
    return false;
  }
}
function h(e) {
  let r = g.of((0, import_chunk_f9x2f6cx.N)().host).primedFiles;
  if (r !== void 0 && r.has(e)) return r.get(e) ?? null;
  try {
    return (0, import_fs.readFileSync)(e, "utf-8");
  } catch (o) {
    if ((0, import_chunk_jv7av99m.fn)(o) || (0, import_chunk_jv7av99m.Kz)(o)) return null;
    throw o;
  }
}
async function K7i(e) {
  let r = g.of((0, import_chunk_f9x2f6cx.N)().host), o = Z();
  if (r.precedenceSource.filled || o === null) return;
  let { dir: i, space: u } = o, a = /* @__PURE__ */ new Map(), l = async (m) => {
    let O;
    try {
      O = await e.hostFiles.readText(import_chunk_w578pjby.yS[u](m));
    } catch (y) {
      return (0, import_chunk_w578pjby.t)(`WIF profile read-ahead: the storage backend threw reading ${m}: ${(0, import_chunk_jv7av99m.d)(y)}`, { level: "warn" }), null;
    }
    if (O.ok) {
      let y = O.value.found ? O.value.value : null;
      return a.set(m, y), y;
    }
    if ((0, import_chunk_jv7av99m.HD)((0, import_chunk_7n1spq36.Xg)(O.error))) a.set(m, null);
    return null;
  }, _ = u8();
  if (!_ && X()) return;
  let Q = _ || (await l((0, import_path.join)(i, "active_config")))?.trim() || "default";
  await l((0, import_path.join)(i, "configs", `${Q}.json`)), r.primedFiles = a;
  try {
    gk(), i3();
  } catch (m) {
    (0, import_chunk_w578pjby.t)(`WIF profile read-ahead: left to the first reader: ${(0, import_chunk_jv7av99m.d)(m)}`);
  } finally {
    r.primedFiles = void 0;
  }
}
