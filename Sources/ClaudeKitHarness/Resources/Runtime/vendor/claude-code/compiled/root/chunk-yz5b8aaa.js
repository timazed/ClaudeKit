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
var chunk_yz5b8aaa_exports = {};
__export(chunk_yz5b8aaa_exports, {
  $6n: () => $6n,
  AAt: () => AAt,
  Bm: () => Bm,
  COr: () => COr,
  EOr: () => EOr,
  EXe: () => EXe,
  K6t: () => K6t,
  Mhe: () => Mhe,
  Nmn: () => Nmn,
  Oke: () => Oke,
  Pke: () => Pke,
  RAt: () => RAt,
  TOr: () => TOr,
  U6n: () => U6n,
  V6t: () => V6t,
  _ee: () => _ee,
  _v: () => _v,
  a9i: () => a9i,
  aK: () => aK,
  cct: () => cct,
  gHl: () => gHl,
  gee: () => gee,
  gz: () => gz,
  hHl: () => hHl,
  hPo: () => hPo,
  i9i: () => i9i,
  iK: () => iK,
  kc: () => kc,
  koe: () => koe,
  l9i: () => l9i,
  mHl: () => mHl,
  mPo: () => mPo,
  oB: () => oB,
  pHl: () => pHl,
  q6t: () => q6t,
  s9i: () => s9i,
  vOr: () => vOr,
  vXe: () => vXe
});
module.exports = __toCommonJS(chunk_yz5b8aaa_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
class _v extends Error {
  authErrorKind;
  firstPartyBearer;
  requestedScope;
  mayPass;
  serverName;
  constructor(e, r, a = "token_expired", o, i, f = false) {
    super(r);
    this.authErrorKind = a;
    this.firstPartyBearer = o;
    this.requestedScope = i;
    this.mayPass = f;
    this.name = "McpAuthError", this.serverName = e;
  }
}
class EXe extends import_chunk_jv7av99m.A {
  code;
  facts;
  constructor(e, r, a) {
    super(e, "MCP tool file input rejected");
    this.code = r;
    this.facts = a;
  }
}
class iK extends import_chunk_jv7av99m.A {
  expiryKind;
  constructor(e, r = "session_expired_404") {
    super(r === "connection_closed_http" ? `MCP server "${e}" connection closed before the tool call was answered. The tool may have run: check whether it did before running it again.` : r === "connection_closed_call_not_run" ? `MCP server "${e}" connection closed before the tool call ran` : `MCP server "${e}" session expired`, "MCP session expired");
    this.expiryKind = r;
    this.name = "McpSessionExpiredError";
  }
  get mayHaveRun() {
    switch (this.expiryKind) {
      case "session_expired_404":
      case "connection_closed_call_refused":
      case "connection_closed_call_not_run":
        return false;
      case "connection_closed_http":
        return true;
    }
  }
}
class AAt extends import_chunk_jv7av99m.A {
  code;
  constructor(e, r = "unreadable") {
    if (r === "unreadable") super(`Couldn't read the stored credentials for MCP server "${e}", so the request didn't run. ${(0, import_chunk_cg8dqz0a.x)() === "macos" ? "If your Mac's keychain is locked, unlock it, then try again." : "Try again."}`, "MCP credential store could not be read");
    else super(`A request to MCP server "${e}" was sent without your stored credentials, so the server rejected it. The credentials are available now. Try again.`, "MCP credentials were read only after a request went out without them");
    this.code = "CREDENTIAL_STORE_UNAVAILABLE", this.name = "McpCredentialStoreUnavailableError";
  }
}
class Bm extends import_chunk_jv7av99m.A {
  mcpMeta;
  constructor(e, r, a, o) {
    super(e, r, o);
    this.mcpMeta = a;
    this.name = "McpToolCallError";
  }
}
function V6t(e) {
  return e instanceof Bm ? e.mcpMeta : void 0;
}
class mPo extends import_chunk_jv7av99m.A {
  constructor(e, r) {
    let a = typeof r?.message === "string" ? r.message : String(r);
    super(`MCP server "${e}" returned a malformed result that failed schema validation: ${a}`, "MCP server returned a malformed result");
    this.name = "McpResponseSchemaError", this.cause = r;
  }
}
class RAt extends import_chunk_jv7av99m.A {
  mcpErrorSource;
  why;
  constructor(e, r, a) {
    if (a.kind === "too_large") super(`The response from MCP server "${e}" for tool "${r}" was larger than ${Math.round(a.capBytes / 1024 / 1024)}MB, so it was not read. The tool may have run: check whether it did before running it again, and when you run it again, ask for less data.`, "MCP tool response over the size cap");
    else super(`The connection to MCP server "${e}" was closed because a message from the server was too large or could not be parsed, so the result of tool "${r}" was not read. The tool may have run: check whether it did before running it again. If its result may have been too large, ask for less data when you run it again.`, "MCP connection closed after an unreadable server message");
    this.name = "McpToolResultNotReadError", this.why = a, this.mcpErrorSource = a.kind === "too_large" ? "downstream_error" : "downstream_unreachable";
  }
}
function pHl(e) {
  return e === "malformed message after an auth challenge";
}
class EOr extends import_chunk_jv7av99m.A {
  mcpErrorSource = "downstream_error";
  constructor(e, r) {
    super(`The structured content in the response from MCP server "${e}" for tool "${r}" was not read here. This happens most often when it is too large, is nested too deep or holds a number that is too large. The tool may have run: check whether it did before calling it again, and ask for less data.`, "MCP tool response with structured content that is not read");
    this.name = "McpStructuredContentNotReadError";
  }
}
class vOr extends import_chunk_jv7av99m.A {
  constructor(e, r) {
    super(`The result of MCP tool "${r}" on server "${e}" arrived without its text. A result that is too large arrives this way. The tool may have run: check whether it did before running it again, and when you run it again, ask for less data.`, "MCP tool result arrived without its text blocks");
  }
}
function TOr(e) {
  return e === "http body overflow" || e === "malformed JSON-RPC message (response truncated)";
}
var Pke = -32003, z = -32042, W = ["downstream_error", "downstream_unreachable", "user_auth", "user_config", "other"], V = new Set(W), COr = /* @__PURE__ */ new Set(["ECONNREFUSED", "ETIMEDOUT", "ECONNRESET", "ECONNABORTED", "ENOTFOUND", "ENETUNREACH", "EHOSTUNREACH", "EAI_AGAIN", "ConnectionRefused", "ConnectionClosed", "FailedToOpenSocket", "ERR_SOCKET_CLOSED", "ERR_PROXY_TUNNEL"]), q = /* @__PURE__ */ new Set(["ERR_INVALID_URL", "MODULE_NOT_FOUND", "ENOENT", "ENOEXEC", "EACCES", "EPERM"]), Y = /* @__PURE__ */ new Set(["ESOCKETTIMEDOUT", "EPIPE", "CONNECT_TIMEOUT", "CONNECT_SUSPENDED", "REQUEST_TIMEOUT", "CONNECTION_CLOSED", "NOT_CONNECTED", "SEND_FAILED"]);
function J(e) {
  return ("errorCode" in e && typeof e.errorCode === "string" ? e.errorCode : (0, import_chunk_jv7av99m.w)(e)) !== void 0 && /^HTTP 40[13]\b/.test(e.message);
}
var Q = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.F)(import_chunk_xcgcdx61.I1l)), Z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("not_forwarded"), message: (0, import_chunk_adx6804h.n)(), reason: Q().optional().catch(void 0) }) }));
function P(e) {
  let a = e instanceof Error ? e.message : "", o = a.indexOf("Error POSTing to endpoint: ");
  if (o === -1) return;
  let i = Z().safeParse((0, import_chunk_0jve1fep.et)(a.slice(o + 27), false));
  return i.success ? i.data.error : void 0;
}
function mHl(e) {
  return P(e)?.message;
}
function hHl(e) {
  return P(e)?.reason;
}
function gz(e) {
  return b(e, false);
}
function b(e, r) {
  let a = e !== null && typeof e === "object" && "mcpErrorSource" in e ? e.mcpErrorSource : void 0;
  if (typeof a === "string" && V.has(a)) return a;
  if (e instanceof DOMException) return e.name === "TimeoutError" ? "downstream_unreachable" : "other";
  if (!(e instanceof Error)) return "other";
  if (e instanceof _v || e instanceof AAt) return "user_auth";
  if (e instanceof iK) return e.expiryKind === "session_expired_404" ? "downstream_error" : "downstream_unreachable";
  if (e instanceof Bm || e instanceof mPo) return "downstream_error";
  if (J(e)) return "user_auth";
  let o = "code" in e && typeof e.code === "number" ? e.code : "status" in e && typeof e.status === "number" ? e.status : void 0;
  if (o !== void 0) {
    if (o === Pke || o === z) return "other";
    if (o === -32001 || o === -32e3) return "downstream_unreachable";
    if (o < -32e3) return "downstream_error";
    if (o === 401 || o === 403) return e.name === "McpError" || e.name === "ProtocolError" || o === 403 ? "downstream_error" : "user_auth";
    if (o >= 400 && o <= 599) return "downstream_error";
    return e.name === "McpError" || e.name === "ProtocolError" ? "downstream_error" : "other";
  }
  let i = (0, import_chunk_jv7av99m.w)(e);
  if (i !== void 0) {
    if (i === "CLAUDEAI_BEARER_REJECTED") return "user_auth";
    if (q.has(i) || i.includes("CERT") || i.startsWith("UNABLE_TO_")) return "user_config";
    if (COr.has(i) || Y.has(i)) return "downstream_unreachable";
  }
  if (e.message.startsWith(import_chunk_jv7av99m.AFr)) return "downstream_unreachable";
  if (!r) {
    let f = e.cause;
    for (let E = 0; E < 4 && f !== void 0; E++) {
      let h = b(f, true);
      if (h !== "other") return h;
      f = f instanceof Error ? f.cause : void 0;
    }
  }
  return "other";
}
function gee() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_XAA;
}
function cct() {
  return (0, import_chunk_2yx6c1y2.vt)().xaaIdp;
}
async function aK(e) {
  if (e === void 0) return (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpOAuth;
  let r = await oB(e);
  return r === import_chunk_zzrn5zap.bs ? void 0 : r?.mcpOAuth;
}
var k = 1e3, D = 3e4, I = new import_chunk_2904xtvq.j(() => ({ inFlight: null, verdict: void 0, settledAt: 0, seenPopulated: false, generation: 0, keychainOnly: { inFlight: null, verdict: void 0, settledAt: 0, cacheGeneration: 0 } }));
function U(e) {
  return e !== import_chunk_zzrn5zap.bs && (!e || Object.keys(e).length === 0);
}
async function oB(e) {
  let r = (0, import_chunk_zzrn5zap.Er)();
  if (e !== void 0) {
    let h = I.of((0, import_chunk_f9x2f6cx.N)().host).keychainOnly, X = h.verdict === "answered" && h.cacheGeneration === (0, import_chunk_hazyxdac.h8)().generation && Date.now() - h.settledAt < D, S = await oB(), R = r.readAsyncStrict;
    if (S === import_chunk_zzrn5zap.bs || !R || X) return S;
    let { serverName: m, serverConfig: y } = e, M = kc(m, y), C = S?.mcpOAuth?.[M];
    if (C?.accessToken || C?.refreshToken || !e.challenged && !q6t(m, y, S?.mcpOAuth) || !(0, import_chunk_f9x2f6cx.Se)() || (0, import_chunk_zzrn5zap.Dze)() !== "keychain") return S;
    if (h.verdict === "failed" && Date.now() - h.settledAt < k) return import_chunk_zzrn5zap.bs;
    let G = (0, import_chunk_hazyxdac.h8)().generation;
    h.inFlight ??= R.call(r, void 0, { inaccessibleAs: "failure" }).then((O) => (h.verdict = O === import_chunk_zzrn5zap.bs ? "failed" : "answered", h.settledAt = Date.now(), h.cacheGeneration = G, O)).finally(() => {
      h.inFlight = null;
    });
    let g = await h.inFlight;
    if (g === import_chunk_zzrn5zap.bs || !e.challenged) return g ?? S;
    let T = g?.mcpOAuth?.[M];
    if (!T?.accessToken && !T?.refreshToken) return g ?? S;
    throw (0, import_chunk_k449cc64.He)(m, "Stored credentials turned up only after the server challenged a request sent without them; failing that request so the next one sends them"), new AAt(m, "read-too-late");
  }
  let a = await r.readAsync(), o = I.of((0, import_chunk_f9x2f6cx.N)().host), i = r.readAsyncStrict;
  if (!U(a)) return L(o), a;
  if (!i) return a;
  let f = Date.now() - o.settledAt;
  if (o.verdict === "failed" && f < k) return o.seenPopulated ? import_chunk_zzrn5zap.bs : a;
  if (o.verdict === "empty" && f < D) return a;
  o.inFlight ??= te(o, () => i.call(r));
  let E = await o.inFlight;
  return E === import_chunk_zzrn5zap.bs && !o.seenPopulated ? a : E;
}
function L(e) {
  if (e.seenPopulated = true, e.generation++, e.verdict === "empty") e.verdict = void 0;
}
async function te(e, r) {
  try {
    let a = e.generation, o = await r();
    if (o !== import_chunk_zzrn5zap.bs && !U(o)) e.verdict = void 0, L(e);
    else if (a !== e.generation) return o;
    else e.verdict = o === import_chunk_zzrn5zap.bs ? "failed" : "empty";
    return e.settledAt = Date.now(), o;
  } finally {
    e.inFlight = null;
  }
}
function kc(e, r) {
  let a = (0, import_chunk_w578pjby._)({ type: r.type, url: r.url, headers: r.headers || {} }), o = (0, import_crypto.createHash)("sha256").update(a).digest("hex").substring(0, 16);
  return `${e}|${o}`;
}
function s9i(e) {
  return Object.keys(e).some((r) => r.toLowerCase() === "authorization");
}
function _ee(e) {
  return s9i(e.headers ?? {});
}
var H = "/v1/design/", re = [H, "/v1/claude/test/", import_chunk_qdcbcsg7.zct];
function Mhe(e) {
  try {
    let r = new URL(e);
    if (r.protocol !== "https:" || !(0, import_chunk_zhr7rpv7.md)(r.href)) return false;
    if (re.some((a) => a.endsWith("/") ? r.pathname.startsWith(a) : r.pathname === a)) return true;
    return false;
  } catch {
    return false;
  }
}
function koe(e) {
  try {
    let r = new URL(e);
    return Mhe(r) && r.pathname.startsWith(H);
  } catch {
    return false;
  }
}
function Oke(e) {
  if (gee() && e.type !== "ws" && e.oauth?.xaa) return true;
  if (e.headersHelper || e.headers && Object.keys(e.headers).length > 0) return true;
  if (Mhe(e.url) && (0, import_chunk_zhr7rpv7.jn)()) return true;
  return false;
}
var ne = 8, oe = /* @__PURE__ */ new Set(["/_next/mcp", "/__mcp/sse"]);
function gHl(e) {
  let r = URL.parse(e.url);
  return r === null || !!r.username || !!r.password || !!r.search || r.pathname.replaceAll("/", "").length >= ne && !oe.has(r.pathname) || !!e.oauth || Oke(e);
}
function K6t(e, r) {
  return _ee(e) || (0, import_chunk_qdcbcsg7.Pl)(e) || Mhe(e.url) && (0, import_chunk_zhr7rpv7.jn)() && r;
}
async function vXe(e, r) {
  let a = await oB();
  if (a === import_chunk_zzrn5zap.bs) return true;
  return !!a?.mcpOAuth?.[kc(e, r)]?.refreshToken;
}
async function Nmn(e, r) {
  let a = kc(e, r), o = await (0, import_chunk_aj8wb2xh.RVt)((0, import_chunk_zzrn5zap.Er)(), (i) => {
    let f = i.mcpOAuth?.[a];
    return !!f?.accessToken || !!f?.refreshToken;
  }, void 0, { keepForFailedRead: true });
  if (o.some((i) => i.value === true)) return true;
  return o.some((i) => i.value === import_chunk_zzrn5zap.bs) && import_chunk_zzrn5zap.bs;
}
var i9i = 2592e6, ae = 6e4;
function $6n(e) {
  if (e === void 0) return false;
  let r = Date.now() - e;
  return r > -ae && r <= i9i;
}
function U6n(e) {
  return !!e && !e.accessToken && !e.refreshToken && e.discoveryState?.oauthMetadataFound === true;
}
function K(e) {
  return !e.oauth?.clientId && !e.oauth?.authServerMetadataUrl && !e.oauth?.xaa && !Oke(e);
}
function a9i(e, r, a, o = 0) {
  if (!K(r)) return false;
  let i = a?.[kc(e, r)], f = i?.discoveryState?.registrationNotOfferedAt;
  return U6n(i) && !i.clientId && f !== void 0 && f >= o && $6n(f);
}
async function l9i(e, r, a = 0) {
  if (r.type !== "http" && r.type !== "sse" || !K(r)) return {};
  let o = await aK().catch((i) => {
    (0, import_chunk_w578pjby.t)(`Could not read the credentials store to check whether ${e} offers client registration, so its status row will not say: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.l)("mcp_status_registration_mark", "store_read_failed");
    return;
  });
  if (!a9i(e, r, o, a)) return {};
  return (0, import_chunk_cqa9hrgx.u)("mcp_status_registration_mark"), { clientRegistrationUnavailable: true };
}
function q6t(e, r, a) {
  if (Oke(r)) return false;
  let o = a?.[kc(e, r)], i = o?.discoveryState?.registrationNotOfferedAt;
  if (r.redialToRelearnRegistration === true && i !== void 0 && !$6n(i)) return false;
  return U6n(o);
}
function hPo(e, r, a) {
  if (Oke(r)) return false;
  let o = a?.[kc(e, r)];
  return !!o?.accessToken && !o.refreshToken && o.expiresAt !== void 0 && o.expiresAt < Date.now();
}
