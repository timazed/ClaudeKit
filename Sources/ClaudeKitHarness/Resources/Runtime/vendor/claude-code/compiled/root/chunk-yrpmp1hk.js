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
var chunk_yrpmp1hk_exports = {};
__export(chunk_yrpmp1hk_exports, {
  HY: () => HY,
  IYr: () => IYr,
  J$a: () => J$a,
  Jri: () => Jri,
  OYr: () => OYr,
  PYr: () => PYr,
  Q$a: () => Q$a,
  Qri: () => Qri,
  Ror: () => Ror,
  U9o: () => U9o,
  X$a: () => X$a,
  Y$a: () => Y$a,
  Z$a: () => Z$a,
  Zqe: () => Zqe,
  Zri: () => Zri,
  _Ue: () => _Ue,
  eUa: () => eUa,
  eoi: () => eoi,
  fRn: () => fRn,
  hi: () => hi,
  n0t: () => n0t,
  nUa: () => nUa,
  noi: () => noi,
  oJt: () => oJt,
  qL: () => qL,
  rJt: () => rJt,
  tUa: () => tUa,
  toi: () => toi,
  xMe: () => xMe,
  xYr: () => xYr
});
module.exports = __toCommonJS(chunk_yrpmp1hk_exports);
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_yqt5s0xz = require("/$bunfs/root/chunk-yqt5s0xz.js");
var import_chunk_rwc528c4 = require("/$bunfs/root/chunk-rwc528c4.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
var import_path = require("path");
var import_crypto2 = require("crypto");
(0, import_chunk_adx6804h.B)();
function me(e) {
  if (e.kind !== "resolved" || !(0, import_chunk_sjqze7qg.U_)()) return;
  let r = (0, import_chunk_sjqze7qg.H6)(), i = r.lastResolvedAccountToken;
  if (r.lastResolvedAccountToken = e.token, i === void 0 || i === e.token) return;
  (0, import_chunk_qdcbcsg7.mt)().identityEpoch += 1, eoi(), qe();
}
function qe() {
  let e = (0, import_chunk_qdcbcsg7.mt)();
  if (!e.identityTrippedHandler) {
    e.identityTripUnowned = true;
    return;
  }
  queueMicrotask(() => {
    let r = (0, import_chunk_qdcbcsg7.mt)().identityTrippedHandler;
    if (!r) {
      (0, import_chunk_qdcbcsg7.mt)().identityTripUnowned = true;
      return;
    }
    try {
      r();
    } catch (i) {
      (0, import_chunk_w578pjby.t)(`MCP identity-change handler failed: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "warn" });
    }
  });
}
function xYr(e) {
  let r = (0, import_chunk_qdcbcsg7.mt)();
  return r.identityTrippedHandler = e, () => {
    if (r.identityTrippedHandler === e) r.identityTrippedHandler = null;
  };
}
function PYr() {
  let e = (0, import_chunk_qdcbcsg7.mt)(), r = e.identityTripUnowned;
  return e.identityTripUnowned = false, r;
}
function ce() {
  if (!(0, import_chunk_sjqze7qg.U_)()) return;
  me((0, import_chunk_sjqze7qg.nbi)());
}
function n0t() {
  let e = (0, import_chunk_sjqze7qg.nbi)();
  return me(e), e;
}
function Jri() {
  let e = n0t();
  return e.kind === "unwired" || e.kind === "incomplete" ? void 0 : e.token;
}
function hi() {
  return ce(), (0, import_chunk_qdcbcsg7.mt)().identityEpoch;
}
function Qri() {
  let e = (0, import_chunk_qdcbcsg7.mt)();
  if (!(0, import_chunk_sjqze7qg.U_)()) return e.identityEpoch;
  return e.identityEpoch += 1, e.identityEpoch;
}
var Qe = "baseline:rearmed";
function Y$a() {
  if (!(0, import_chunk_sjqze7qg.U_)()) return;
  Qri(), (0, import_chunk_sjqze7qg.H6)().lastResolvedAccountToken = Qe;
}
function Zri(e, r) {
  return (0, import_chunk_qdcbcsg7.Aze)(e, r) ? -1 : hi();
}
function HY(e) {
  return ce(), e === (0, import_chunk_qdcbcsg7.mt)().identityEpoch;
}
function eoi() {
  let e = (0, import_chunk_qdcbcsg7.mt)();
  if (e.identityChangedThisProcess) return;
  e.identityChangedThisProcess = true, (0, import_chunk_cqa9hrgx.l)("mcp_discovery_cache", "identity_changed");
}
function ve() {
  return ce(), (0, import_chunk_qdcbcsg7.mt)().identityChangedThisProcess;
}
var De = 32, q = 12, z = 16, U = "v2:", Se = Buffer.from("mcp-dc", "utf8"), nt = /^[A-Za-z0-9+/]{43}=$/;
function Ce(e) {
  if (typeof e !== "string" || !nt.test(e)) return;
  let r = Buffer.from(e, "base64");
  return r.length === De ? r : void 0;
}
async function Z() {
  let e = await (0, import_chunk_yz5b8aaa.oB)();
  if (e === import_chunk_zzrn5zap.bs) return;
  let r = Ee(e?.mcpDiscoveryCacheKey);
  if (r) return r;
  let i = (0, import_crypto2.randomBytes)(De).toString("base64"), o = false;
  try {
    o = (await (0, import_chunk_zzrn5zap.Er)().mutate((h) => Ce(h.mcpDiscoveryCacheKey) ? h : { ...h, mcpDiscoveryCacheKey: i })).success;
  } catch {
    o = false;
  }
  if (!o) return;
  let a = await (0, import_chunk_yz5b8aaa.oB)();
  if (a === import_chunk_zzrn5zap.bs) return;
  return Ee(a?.mcpDiscoveryCacheKey);
}
function Ee(e) {
  return Ce(e);
}
function ke(e, r, i) {
  if (!Number.isInteger(e) || e < 0 || e > 255) throw Error("discovery-cache seal: schema version must fit one byte");
  let o = [r, i].map((h) => Buffer.from(h, "utf8")), a = Buffer.allocUnsafe(Se.length + 1 + o.reduce((h, y) => h + 4 + y.length, 0)), f = Se.copy(a, 0);
  f = a.writeUInt8(e, f);
  for (let h of o) f = a.writeUInt32BE(h.length, f), f += h.copy(a, f);
  return a;
}
function _e(e, r) {
  let i = (0, import_crypto2.randomBytes)(q), o = (0, import_crypto2.createCipheriv)("aes-256-gcm", e.key, i, { authTagLength: z });
  o.setAAD(e.aad);
  let a = Buffer.concat([o.update(r, "utf8"), o.final()]), f = o.getAuthTag();
  return U + Q(e.cacheKey) + ":" + Buffer.concat([i, a, f]).toString("base64url");
}
function Q(e) {
  return (0, import_crypto2.createHash)("sha256").update(e, "utf8").digest().subarray(0, Re).toString("base64url");
}
var Re = 16, be = Math.ceil(Re * 4 / 3), it = new RegExp(`^[A-Za-z0-9_-]{${be}}$`), ot = /^[A-Za-z0-9_-]*$/;
function Me(e) {
  return Ae(e)?.digest;
}
function Ae(e) {
  if (!e.startsWith(U)) return;
  let r = U.length + be;
  if (e.length <= r || e[r] !== ":") return;
  let i = e.slice(U.length, r), o = e.slice(r + 1);
  if (!it.test(i) || !ot.test(o)) return;
  return { digest: i, body: o };
}
function ae(e, r) {
  if (!r.startsWith(U)) return { ok: false, reason: "v1" };
  let i = Ae(r);
  if (!i) return { ok: false, reason: "short" };
  if (i.digest !== Q(e.cacheKey)) return { ok: false, reason: "header" };
  let o = Buffer.from(i.body, "base64url");
  if (o.length < q + z) return { ok: false, reason: "short" };
  let a = o.subarray(0, q), f = o.subarray(o.length - z), h = o.subarray(q, o.length - z);
  try {
    let y = (0, import_crypto2.createDecipheriv)("aes-256-gcm", e.key, a, { authTagLength: z });
    return y.setAuthTag(f), y.setAAD(e.aad), { ok: true, plaintext: Buffer.concat([y.update(h), y.final()]).toString("utf8") };
  } catch {
    return { ok: false, reason: "tag" };
  }
}
function X$a(e) {
  let r = (0, import_chunk_sjqze7qg.H6)();
  r.accountResolver = e, r.lastResolvedAccountToken = void 0;
}
function J$a(e) {
  (0, import_chunk_sjqze7qg.H6)().eraResolver = e;
}
function ct() {
  return (0, import_chunk_sjqze7qg.H6)().eraResolver();
}
function Q$a() {
  return (0, import_chunk_sjqze7qg.H6)().accountResolver !== void 0;
}
function qL(e) {
  switch (e.type) {
    case "stdio":
    case void 0:
    case "sdk":
    case "sse-ide":
    case "ws-ide":
      return false;
    default:
      return true;
  }
}
function rJt(e, r) {
  return !HY(r) && qL(e);
}
function Ror(e, r) {
  return { name: e, type: "failed", config: r, error: import_chunk_271xsh6x.uan, errorCode: "IDENTITY_CHANGED" };
}
function OYr(e) {
  return e.some((r) => qL(r.config));
}
function dt() {
  return n0t().token;
}
var ue = 1, ut = 900, ft = 14400, lt = 604800, pt = 1;
function Ie() {
  let e = import_chunk_c203g5kd.s.MCP_DISCOVERY_CACHE_STRIKES;
  return e && e > 0 ? e : pt;
}
var yt = 384, Oe = 448, te = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule().discoveryWireSchemas();
  return (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(ue), serverName: (0, import_chunk_adx6804h.n)(), cacheKey: (0, import_chunk_adx6804h.n)(), savedAt: (0, import_chunk_adx6804h.E)(), toolsSavedAt: (0, import_chunk_adx6804h.E)().optional(), consecutiveRefreshFailures: (0, import_chunk_adx6804h.E)().int().nonnegative(), serverInfo: e.implementation.optional(), negotiatedEra: (0, import_chunk_adx6804h.F)(import_chunk_sjqze7qg.Lis).optional(), capabilities: e.serverCapabilities, tools: (0, import_chunk_adx6804h.C)(e.tool), commands: (0, import_chunk_adx6804h.C)(e.prompt), resources: (0, import_chunk_adx6804h.C)(e.resource), templates: (0, import_chunk_adx6804h.C)(e.resourceTemplate).optional() });
});
function ht() {
  let e = import_chunk_c203g5kd.s.MCP_DISCOVERY_CACHE_TTL_S;
  return Math.min((e && e > 0 ? e : ut) * 1e3, Le());
}
function Le() {
  let e = import_chunk_c203g5kd.s.MCP_DISCOVERY_CACHE_MAX_STALE_S;
  return Math.min(e && e > 0 ? e : ft, lt) * 1e3;
}
function oJt(e) {
  return Ve(e) === void 0;
}
function gt(e) {
  return re.some((r) => r.reason === e);
}
var re = [{ prop: "discoveryCache", reason: "opt-out", excludes: (e) => e === false, normalize: (e) => e === false ? false : void 0, valueDomain: [void 0, false] }, { prop: "headersHelper", reason: "headers-helper", excludes: (e) => Boolean(e), normalize: (e) => e ? e : void 0, valueDomain: [void 0] }];
function Fe(e) {
  let r = { ...e };
  for (let { prop: i, normalize: o } of re) {
    if (!(i in r)) continue;
    let a = o(r[i]);
    if (a === void 0) delete r[i];
    else r[i] = a;
  }
  return r;
}
function vt(e) {
  let r = e;
  if (typeof r.url === "string" && (0, import_chunk_418mqjww.zoe)(r.url)) return true;
  if (r.headers && typeof r.headers === "object") {
    for (let i of Object.values(r.headers)) if (typeof i === "string" && (0, import_chunk_418mqjww.zoe)(i)) return true;
  }
  return false;
}
var St = ["MCP_DISCOVERY_CACHE_TTL_S", "MCP_DISCOVERY_CACHE_MAX_STALE_S", "MCP_DISCOVERY_CACHE_STRIKES"], Et = [import_chunk_qdcbcsg7.Rze, import_chunk_qdcbcsg7.Qx, import_chunk_qdcbcsg7.ri];
function Be(e) {
  let r = process.env[e];
  return r !== void 0 && (0, import_chunk_5e3gtsn9.QH)(e, r);
}
function $e() {
  return (0, import_chunk_6e68m1dj.hn)() && import_chunk_c203g5kd.s.MCP_DISCOVERY_CACHE === true && !Be("MCP_DISCOVERY_CACHE");
}
function Ke(e) {
  if (!$e() || St.some(Be) || e.type !== "http" || e.scope !== "dynamic" || e.agentSource !== void 0 || (0, import_chunk_xcgcdx61.jl)(e)) return false;
  let r = (0, import_chunk_2mwshd9r.pB)(e.url);
  if (r === null) return false;
  let i = (0, import_chunk_t39bs2jr.Un)(r.sessionSegment);
  if (!(0, import_chunk_t39bs2jr.k3)(r.sessionSegment) || !import_chunk_f2dee02n.Ql.ownCcrSessionIds.some((g) => (0, import_chunk_t39bs2jr.Un)(g) === i)) return false;
  let o = (0, import_chunk_yqt5s0xz._N)(e.headers, "x-mcp-server-id"), a = o[0];
  if (o.length !== 1 || a === void 0 || !import_chunk_2mwshd9r.xVn.test(a) || r.toolboxMcpServerId !== a || r.mcpServerId === a) return false;
  let f = (0, import_chunk_yqt5s0xz._N)(e.headers, import_chunk_yqt5s0xz.$be);
  if (f.length !== 1 || f[0] !== "directory" && f[0] !== "custom") return false;
  if ((0, import_chunk_yqt5s0xz._N)(e.headers, import_chunk_yqt5s0xz.Wpe).length > 0 || !r.upstreamUrl || /^ccr-owner-resolved:/i.test(r.upstreamUrl)) return false;
  let h = [r.mcpServerId, a], y = [`cse_${i}`, `session_${i}`];
  return !((0, import_chunk_2mwshd9r.cFe)(e.url) || h.some((g) => import_chunk_2mwshd9r.Chn.includes(g)) || [...(0, import_chunk_865at33z.zRo)(), ...Et].some((g) => y.some((S) => h.includes((0, import_chunk_qdcbcsg7.Ioe)(S, g)))));
}
function U9o(e) {
  return oJt(e) && !Ke(e);
}
function Ve(e) {
  let r = (0, import_chunk_sjqze7qg.JHn)();
  if (r !== void 0) return r;
  if (ve()) return "identity-changed";
  if (e.type !== "http" && e.type !== "sse") return "transport";
  if ((0, import_chunk_qdcbcsg7.Pl)(e) || (0, import_chunk_qdcbcsg7.rMr)(e)) return "cli-owned";
  if (vt(e)) return "env-placeholder";
  if ((0, import_chunk_yz5b8aaa.Mhe)(e.url) && !(0, import_chunk_yz5b8aaa._ee)(e)) return "ambient-credential";
  if ((0, import_chunk_2mwshd9r.Yu)(e.url)) {
    if (!Ke(e)) return "ambient-credential";
  } else if ($e()) return "ambient-credential";
  let i = e;
  for (let { prop: o, reason: a, excludes: f } of re) if (f(i[o])) return a;
  return;
}
function O() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "mcp-discovery-cache");
}
async function wt(e, r) {
  if (!oJt(r)) return false;
  return (await ze(e, r)).kind !== "degenerate";
}
async function ze(e, r) {
  if (r.type !== "http" && r.type !== "sse") return { kind: "none" };
  let i = await (0, import_chunk_yz5b8aaa.oB)();
  if (i === import_chunk_zzrn5zap.bs) return { kind: "degenerate" };
  let o = i?.mcpOAuth?.[(0, import_chunk_yz5b8aaa.kc)(e, r)];
  if (!o) return { kind: "none" };
  let a = o.refreshToken;
  if (!a) return { kind: "degenerate" };
  return { kind: "resolved", hash: (0, import_chunk_ccm69jjy.Je)(a).slice(0, 16) };
}
async function Dt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return "grant:none";
  let i = await ze(e, r);
  switch (i.kind) {
    case "none":
      return "grant:none";
    case "resolved":
      return `grant:${i.hash}`;
    case "degenerate":
      return;
  }
}
async function kt(e, r) {
  let i = n0t();
  if (i.kind === "unwired" || i.kind === "incomplete") return;
  let o = await Dt(e, r);
  if (o === void 0) return;
  let a = [i.token];
  if (r.type === "http" || r.type === "sse") a.push(o);
  return { fingerprint: (0, import_crypto.createHash)("sha256").update(a.join("\0")).digest("hex"), grantToken: o };
}
function fe(e, r, i, o) {
  let a = [e, r, `era:${i}`, { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION ?? "unknown", ...o ? ["offer:io.modelcontextprotocol/ui"] : []].join("\0");
  return `${(0, import_crypto.createHash)("sha256").update(a).digest("hex").slice(0, 32)}.json`;
}
var _t = /^[0-9a-f]{16}\0/;
function xMe(e) {
  let r = `${e}-`, i = (0, import_chunk_sjqze7qg.H6)().filePathMemo;
  for (let o of i.keys()) {
    if (!o.startsWith(r)) continue;
    if (_t.test(o.slice(r.length))) i.delete(o);
  }
}
function T(e, r) {
  return (0, import_chunk_3bjtjsgp.Uo)(e, Fe(r));
}
async function Rt(e, r) {
  return (await A(e, r))?.path;
}
async function _Ue(e, r) {
  if (!(0, import_chunk_sjqze7qg.U_)()) return;
  try {
    return (await A(e, r))?.legToken;
  } catch {
    return;
  }
}
async function A(e, r) {
  let i = T(e, r), o = ct(), a = (0, import_chunk_7625rswd.c1n)(), f = dt(), h = `${i}\0${f}\0era:${o}\0ui:${a}`, y = (0, import_chunk_sjqze7qg.H6)().filePathMemo, g = y.get(h);
  if (g) return g;
  let S = (async () => {
    let D = await kt(e, r);
    if (D === void 0) return;
    return { path: (0, import_path.join)(O(), fe(i, D.fingerprint, o, a)), grantToken: D.grantToken, fingerprint: D.fingerprint, cacheKey: i, aad: ke(ue, i, D.fingerprint), legToken: `${D.grantToken}\0era:${o}\0${f}` };
  })();
  y.set(h, S);
  let k = () => {
    if (y.get(h) === S) y.delete(h);
  };
  return S.then((D) => {
    if (D === void 0) k();
  }, k), S;
}
function L() {
  return (0, import_chunk_sjqze7qg.H6)().storage;
}
function M() {
  return (0, import_chunk_sjqze7qg.H6)().storageV5;
}
function le(e) {
  return import_chunk_hkvzj051.at.userConfigDir("mcp-discovery-cache", [(0, import_path.basename)(e)]);
}
var bt = { namespace: "userConfigDir", dir: "mcp-discovery-cache" }, H = 8388608;
function pe(e) {
  return Math.max(e.savedAt, e.toolsSavedAt ?? 0);
}
class j extends Error {
  reason;
  constructor(e, r) {
    super(r);
    this.reason = e;
    this.name = "RefusedDiscoveryEntryError";
  }
}
class ye extends j {
  constructor() {
    super("oversize", "discovery-cache: oversize entry");
    this.name = "OversizeDiscoveryEntryError";
  }
}
class N extends j {
  constructor() {
    super("symlink", "discovery-cache: symlinked entry refused");
    this.name = "SymlinkedDiscoveryEntryError";
  }
}
class ee extends j {
  constructor() {
    super("non-regular", "discovery-cache: non-regular entry refused");
    this.name = "NonRegularDiscoveryEntryError";
  }
}
function ne(e) {
  return e instanceof j;
}
async function ie(e, r) {
  let i = (0, import_chunk_sjqze7qg.H6)().readGate;
  if (i) await i;
  if (r) return Mt(r, e);
  try {
    if (import_chunk_09gzjq1e.Fo === 0) {
      let a = await L().lstat(e);
      if (a === void 0) return;
      if (a.isSymbolicLink) throw new N();
      if (!a.isFile) throw new ee();
    }
    let o;
    try {
      o = await L().readTail(e, H + 1, { noFollow: true });
    } catch (a) {
      let f = (0, import_chunk_jv7av99m.w)(a);
      if (f === "ELOOP") throw new N();
      if (f === "ENXIO") throw new ee();
      throw a;
    }
    if (o.length > H) throw new ye();
    return o.toString("utf8");
  } catch (o) {
    if ((0, import_chunk_jv7av99m.J)(o)) return;
    throw o;
  }
}
async function Mt(e, r) {
  let i = le(r), o = await e.read([{ key: i, offset: 0, length: H + 1 }], { symlinks: "refuse" });
  if (!o.ok) {
    let f = "cause" in o.error ? (0, import_chunk_jv7av99m.w)(o.error.cause) : void 0;
    if (f === "ELOOP") throw new N();
    if (f === "ENXIO") throw new ee();
    throw Error("discovery-cache: read failed", { cause: o.error });
  }
  let a = o.value.items[0];
  if (!a.found) return;
  if (a.totalBytes > H) throw new ye();
  return Buffer.from(a.value).toString("utf8");
}
async function At(e, r, i) {
  if (i) {
    let a = await i.write(le(e), r);
    if (!a.ok) throw Error("discovery-cache: write failed", { cause: a.error });
    return;
  }
  let o = L();
  await o.mkdir(O(), Oe), await o.atomicWrite(e, r, yt);
}
async function Pt(e) {
  if (!e) return L().list(O());
  let r = [], i;
  do {
    let o = await e.listEntries(bt, { skipKeyStats: true, skipScopeStats: true, ...i !== void 0 && { cursor: i } });
    if (!o.ok) throw Error("discovery-cache: list failed", { cause: o.error });
    for (let a of o.value.items) if (a.kind === "key" && a.key.namespace === "userConfigDir") {
      let f = a.key.relPath[0];
      if (f !== void 0 && a.key.relPath.length === 1) r.push(f);
    }
    i = o.value.cursor;
  } while (i);
  return r;
}
async function Y(e, r) {
  if (r) {
    let i = await r.delete(le(e));
    if (!i.ok) throw Error("discovery-cache: delete failed", { cause: i.error });
    return;
  }
  try {
    await L().delete(e);
  } catch (i) {
    if (!(0, import_chunk_jv7av99m.J)(i)) throw i;
  }
}
async function Z$a(e, r, i = Date.now()) {
  let o = Ve(r);
  if (o !== void 0 && !gt(o)) return { kind: "miss", reason: o === "transport" ? "transport" : "disabled" };
  if (o !== void 0) {
    V();
    let R = Bt(e, r), P = Ht(R), se = (0, import_chunk_sjqze7qg.H6)().admissionPurgedKeySets;
    if (!se.has(P)) se.add(P), Ft(e, r, R).then((Xe) => {
      if (!Xe) se.delete(P);
    });
    return (0, import_chunk_k449cc64.He)(e, `discovery-cache: ${o} \u2014 purging this server's cache-key family, serving miss`), { kind: "miss", reason: "disabled" };
  }
  let a;
  try {
    a = await A(e, r);
  } catch (R) {
    return (0, import_chunk_k449cc64.He)(e, `discovery-cache: fingerprint failed: ${R}`), { kind: "miss", reason: "no-fingerprint" };
  }
  if (a === void 0) return { kind: "miss", reason: "no-fingerprint" };
  let f = a.path, h = () => {
    x(f, e, void 0).catch(() => {
    });
  }, y = () => (h(), (0, import_chunk_cqa9hrgx.m)("mcp_discovery_cache", "corrupt_entry"), { kind: "miss", reason: "corrupt" }), g;
  try {
    g = await ie(f, M());
  } catch (R) {
    if (ne(R)) return (0, import_chunk_k449cc64.He)(e, `discovery-cache: ${R.reason} entry, deleting`), y();
    return (0, import_chunk_k449cc64.He)(e, `discovery-cache: read failed: ${R}`), { kind: "miss", reason: "absent" };
  }
  if (g === void 0) return { kind: "miss", reason: "absent" };
  let S = await Ge(g, a, e, () => x(f, e, void 0));
  if (S.miss) {
    if (S.miss === "unsealed") if (S.cause === "v1") (0, import_chunk_cqa9hrgx.l)("mcp_discovery_cache", "unsealed_v1");
    else (0, import_chunk_cqa9hrgx.m)("mcp_discovery_cache", `unsealed_${S.cause}`);
    return { kind: "miss", reason: S.miss };
  }
  let k = te().safeParse((0, import_chunk_0jve1fep.et)(S.plaintext, false));
  if (!k.success) return (0, import_chunk_k449cc64.He)(e, "discovery-cache: corrupt entry, deleting"), y();
  let D = k.data;
  if (D.cacheKey !== T(e, r)) return (0, import_chunk_k449cc64.He)(e, "discovery-cache: entry keyed for another server, deleting"), y();
  if (D.consecutiveRefreshFailures >= Ie()) return h(), { kind: "miss", reason: "strike-threshold" };
  let b = Le();
  if (pe(D) - i > b) return h(), { kind: "miss", reason: "expired" };
  let _ = Math.max(0, i - D.savedAt);
  if (_ >= b) return h(), { kind: "miss", reason: "expired" };
  if (_ < ht() && !(D.capabilities.tools && D.tools.length === 0)) return { kind: "fresh", entry: D, ageMs: _ };
  return { kind: "stale", entry: D, ageMs: _ };
}
function W(e, r, i) {
  return (0, import_chunk_sjqze7qg.H6)().serializeWrite(e, i).catch((o) => {
    (0, import_chunk_k449cc64.He)(r, `discovery-cache: write op failed: ${o}`);
  });
}
function X(e) {
  return (0, import_chunk_sjqze7qg.H6)().deleteGenerationByCacheKey.get(e) ?? 0;
}
function oe(e) {
  (0, import_chunk_sjqze7qg.H6)().deleteGenerationByCacheKey.set(e, X(e) + 1);
}
var Ue = 8;
async function xt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return [];
  let i = await (0, import_chunk_yz5b8aaa.oB)();
  if (i === import_chunk_zzrn5zap.bs) return import_chunk_zzrn5zap.bs;
  let o = (0, import_chunk_yz5b8aaa.kc)(e, r), a = i?.mcpOAuth?.[o], f = [];
  if (typeof a?.accessToken === "string") f.push(a.accessToken);
  if (typeof a?.refreshToken === "string") f.push(a.refreshToken);
  if (typeof a?.clientSecret === "string") f.push(a.clientSecret);
  let h = i?.mcpOAuthClientConfig?.[o]?.clientSecret;
  if (typeof h === "string") f.push(h);
  return f;
}
var de = /auth|token|key|secret|cookie|session|sig|pass|cred|bearer/i, Tt = /^\s*[A-Za-z][A-Za-z0-9!#$%&'*+.^_`|~-]*\s+(?=\S)/;
function Ye(e, r, i) {
  if (typeof r !== "string" || !de.test(e)) return;
  if (i(r.trim()), i(r.replace(Tt, "").trim()), /^cookie$/i.test(e)) for (let o of r.split(";")) {
    let a = o.indexOf("=");
    i((a === -1 ? o : o.slice(a + 1)).trim());
  }
}
function fRn(e, r) {
  let i = (0, import_chunk_rwc528c4.KD)();
  if (i.recordingOff()) return;
  let o = /* @__PURE__ */ new Map();
  for (let [a, f] of Object.entries(e ?? {})) o.set(a.toLowerCase(), f);
  for (let [a, f] of Object.entries(r)) {
    if (o.get(a.toLowerCase()) === f) continue;
    Ye(a, f, (h) => {
      if (h.length >= Ue) i.record(h);
    });
  }
}
var It = 268435456;
function Pe(e) {
  let r = [e], i = (0, import_chunk_w578pjby.cs)(e).slice(1, -1);
  if (i !== e) r.push(i);
  try {
    let o = encodeURIComponent(e);
    if (o !== e) r.push(o);
  } catch {
  }
  return r;
}
function Ot(e, r, i = []) {
  let o = r, a = /* @__PURE__ */ new Set(), f = (y) => {
    if (y !== void 0 && y.length >= Ue) a.add(y);
  };
  for (let [y, g] of Object.entries(o.headers ?? {})) Ye(y, g, f);
  try {
    let y = typeof o.url === "string" ? new URL(o.url) : void 0;
    for (let [g, S] of y?.searchParams.entries() ?? []) if (de.test(g)) for (let k of Pe(S)) f(k);
    for (let g of y?.search.replace(/^\?/, "").split("&") ?? []) {
      let S = g.indexOf("=");
      if (S > 0 && de.test(g.slice(0, S))) f(g.slice(S + 1));
    }
    for (let g of y ? [y.password, y.username] : []) if (g) {
      f(g);
      try {
        f(decodeURIComponent(g));
      } catch {
      }
    }
  } catch {
  }
  for (let y of i) f(y);
  let h = (0, import_chunk_rwc528c4.KD)().snapshot();
  if (!h.complete) return "presented-log-incomplete";
  for (let y of h.atoms) f(y);
  if (a.size * e.length > It) return "scan-budget";
  for (let y of a) for (let g of Pe(y)) if (e.includes(g)) return "material";
  return;
}
function he(e, r) {
  return { key: e, cacheKey: r.cacheKey, aad: r.aad };
}
async function Ge(e, r, i, o) {
  let a = await Z();
  if (a === void 0) return (0, import_chunk_k449cc64.He)(i, "Discovery cache: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process"), (0, import_chunk_sjqze7qg.tbi)(), { miss: "key-unavailable" };
  let f = ae(he(a, r), e);
  if (f.ok) return { plaintext: f.plaintext };
  (0, import_chunk_k449cc64.He)(i, `Discovery cache: entry did not open (${f.reason}) \u2014 discarded`);
  try {
    await o();
  } catch (h) {
    (0, import_chunk_k449cc64.He)(i, `discovery-cache: reap after failed open skipped ${h}`);
  }
  return { miss: "unsealed", cause: f.reason };
}
function I({ verdict: e, code: r }) {
  if (e === "written") (0, import_chunk_cqa9hrgx.u)("mcp_discovery_cache");
  else if (e === "terminal") (0, import_chunk_cqa9hrgx.m)("mcp_discovery_cache", r);
  else (0, import_chunk_cqa9hrgx.l)("mcp_discovery_cache", r);
  return e;
}
async function ge(e) {
  let { path: r, serverName: i, config: o, cacheKey: a, entry: f, context: h, label: y } = e;
  if ((0, import_chunk_sjqze7qg.JHn)() !== void 0) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: the cache turned off since this round started`), { verdict: "superseded", code: "disabled" };
  if ((0, import_chunk_qdcbcsg7.Aze)(i, o)) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: nobody asked for the dial that listed this`), { verdict: "superseded", code: "unasked_dial" };
  if (X(a) !== e.capturedDeleteGeneration) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: entry deleted since this round started (tombstone)`), { verdict: "superseded", code: "tombstone" };
  if (!HY(h.identityEpoch)) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: identity changed since this round was fetched (stale epoch)`), { verdict: "superseded", code: "stale_epoch" };
  let g = await Z();
  if (g === void 0) return (0, import_chunk_sjqze7qg.tbi)(), (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process`), { verdict: "superseded", code: "key_unavailable" };
  let S;
  try {
    S = await xt(i, o);
  } catch {
    S = import_chunk_zzrn5zap.bs;
  }
  if (S === import_chunk_zzrn5zap.bs) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: OAuth token store unreadable (cannot verify no secrets on disk)`), { verdict: "transient", code: "transient" };
  let k;
  try {
    k = await A(i, o);
  } catch {
    return { verdict: "transient", code: "transient" };
  }
  if (k === void 0 || k.path !== r || k.legToken !== h.grantLeg) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: grant or era changed since this round was fetched (stale leg)`), { verdict: "superseded", code: "stale_grant" };
  let D = te().safeParse(f);
  if (!D.success) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: entry failed schema validation`), { verdict: "terminal", code: "schema" };
  let b = (0, import_chunk_w578pjby.cs)(D.data);
  if (Buffer.byteLength(b, "utf8") > H) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: serialized entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), { verdict: "terminal", code: "oversize" };
  if ((0, import_chunk_sjqze7qg.JHn)() !== void 0) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: the cache turned off since this round started`), { verdict: "superseded", code: "disabled" };
  let _ = Ot(b, o, S);
  if (_ !== void 0) {
    if ((0, import_chunk_rwc528c4.KD)().takeOverflowNotice()) (0, import_chunk_k449cc64.He)(i, "Discovery cache: presented-credential log is full \u2014 cache writes are refused for the rest of this process");
    if (_ === "scan-budget") return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: secret-material scan exceeds its work budget (materials \xD7 entry size) \u2014 not scanned, not written`), { verdict: "terminal", code: "scan_budget" };
    if (_ === "presented-log-incomplete") return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: presented-credential log incomplete (cannot verify no secrets on disk)`), { verdict: "terminal", code: "presented_log_incomplete" };
    return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: entry would carry presented secret material`), { verdict: "terminal", code: "secret_material" };
  }
  let R = _e(he(g, k), b);
  if (Buffer.byteLength(R, "utf8") > H) return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: sealed entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), { verdict: "terminal", code: "oversize" };
  try {
    await At(r, R, M());
  } catch (P) {
    return (0, import_chunk_k449cc64.He)(i, `Discovery cache ${y} refused: disk write failed (${(0, import_chunk_jv7av99m.d)(P)})`), { verdict: "transient", code: "transient" };
  }
  return { verdict: "written", code: "written" };
}
async function x(e, r, i) {
  if (i !== void 0) oe(i);
  await W(e, r, () => Y(e, M()));
}
async function Lt(e, r) {
  await Promise.race([e.then(() => {
  }, () => {
  }), (0, import_chunk_5appeerh.K)(r, void 0, { unref: true })]);
}
async function Zqe(e, r = 1500) {
  V(), await Lt(e, r);
}
function V() {
  if (!(0, import_chunk_sjqze7qg.A5)()) return;
  let e = (0, import_chunk_sjqze7qg.H6)();
  if (e.flushCleanup) return;
  e.flushCleanup = (0, import_chunk_w578pjby.Ct)(() => e.drain(import_chunk_sjqze7qg.hXa));
}
async function eUa(e, r, i, o) {
  let a = o.now ?? Date.now(), f = T(e, r), h = X(f);
  if (!HY(o.identityEpoch)) return "superseded";
  if (o.grantLeg === void 0) return "superseded";
  if (!oJt(r)) return "superseded";
  V();
  let y;
  try {
    y = await A(e, r);
  } catch {
    return I({ verdict: "transient", code: "transient" });
  }
  if (y === void 0) return "superseded";
  if (y.legToken !== o.grantLeg) return (0, import_chunk_k449cc64.He)(e, "Discovery cache write refused: grant changed since this round was fetched (stale grant)"), I({ verdict: "superseded", code: "stale_grant" });
  let g = y.path, S = { v: ue, serverName: e, cacheKey: f, savedAt: a, consecutiveRefreshFailures: 0, ...i.serverInfo && { serverInfo: i.serverInfo }, ...i.negotiatedEra !== void 0 && { negotiatedEra: i.negotiatedEra }, capabilities: i.capabilities, tools: i.tools, commands: i.commands, resources: i.resources, templates: i.templates }, k = g, D;
  return await W(k, e, async () => {
    if (!await wt(e, r)) return;
    let b;
    try {
      b = await ie(k, M());
    } catch (_) {
      if (!ne(_)) {
        (0, import_chunk_k449cc64.He)(e, `Discovery cache write deferred: existing entry unreadable (${(0, import_chunk_jv7av99m.d)(_)})`), D = { verdict: "transient", code: "transient" };
        return;
      }
      b = void 0;
    }
    if (b !== void 0) {
      let _ = await Z(), R = _ && y ? ae(he(_, y), b) : void 0, P = R?.ok ? te().safeParse((0, import_chunk_0jve1fep.et)(R.plaintext, false)) : void 0;
      if (P?.success && pe(P.data) > a) {
        D = { verdict: "superseded", code: "fresher_on_disk" };
        return;
      }
    }
    D = await ge({ path: k, serverName: e, config: r, cacheKey: f, entry: S, context: o, capturedDeleteGeneration: h, label: "write" });
  }), D ? I(D) : "superseded";
}
async function je(e, r) {
  let i = e.path, o;
  try {
    o = await ie(i, M());
  } catch (h) {
    if (ne(h)) {
      await Y(i, M());
      return;
    }
    throw h;
  }
  if (o === void 0) return;
  let a = await Ge(o, e, r, () => Y(i, M()));
  if (a.miss) return;
  let f = te().safeParse((0, import_chunk_0jve1fep.et)(a.plaintext, false));
  if (!f.success) {
    await Y(i, M());
    return;
  }
  return f.data;
}
async function tUa(e, r, i, o) {
  if (!HY(o.identityEpoch)) return;
  if (o.grantLeg === void 0) return;
  let a = T(e, r), f = X(a);
  if (V(), !oJt(r)) return;
  let h;
  try {
    h = await A(e, r);
  } catch {
    I({ verdict: "transient", code: "transient" });
    return;
  }
  if (h === void 0) return;
  if (h.legToken !== o.grantLeg) {
    (0, import_chunk_k449cc64.He)(e, "Discovery cache tools merge refused: grant changed since this refresh was fetched (stale grant)"), I({ verdict: "superseded", code: "stale_grant" });
    return;
  }
  let y = h.path;
  await W(y, e, async () => {
    let g = await je(h, e);
    if (!g) return;
    if (pe(g) > o.fetchedAt) {
      I({ verdict: "superseded", code: "fresher_on_disk" });
      return;
    }
    let S = { ...g, tools: i, ...Number.isFinite(o.fetchedAt) && o.fetchedAt > g.savedAt && { toolsSavedAt: o.fetchedAt } };
    I(await ge({ path: y, serverName: e, config: r, cacheKey: a, entry: S, context: o, capturedDeleteGeneration: f, label: "tools merge" }));
  });
}
async function toi(e, r, i) {
  if (!HY(i.identityEpoch)) return;
  if ((0, import_chunk_qdcbcsg7.Aze)(e, r)) return;
  if (i.grantLeg === void 0) return;
  let o = T(e, r), a = X(o);
  if (V(), !oJt(r)) return;
  let f;
  try {
    f = await A(e, r);
  } catch {
    return;
  }
  if (f === void 0) return;
  if (f.legToken !== i.grantLeg) {
    (0, import_chunk_k449cc64.He)(e, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
    return;
  }
  let h = f.path;
  await W(h, e, async () => {
    let y = await je(f, e);
    if (!y) return;
    if (!HY(i.identityEpoch)) {
      (0, import_chunk_k449cc64.He)(e, "Discovery cache refresh-failure strike refused: identity changed since this refresh was fetched (stale epoch)");
      return;
    }
    let g;
    try {
      g = await A(e, r);
    } catch {
      return;
    }
    if (g === void 0 || g.path !== h || g.legToken !== i.grantLeg) {
      (0, import_chunk_k449cc64.He)(e, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
      return;
    }
    let S = { ...y, consecutiveRefreshFailures: y.consecutiveRefreshFailures + 1 };
    if (S.consecutiveRefreshFailures >= Ie()) {
      oe(o), await Y(h, M());
      return;
    }
    await ge({ path: h, serverName: e, config: r, cacheKey: o, entry: S, context: i, capturedDeleteGeneration: a, label: "refresh-failure strike" });
  });
}
function IYr(e, r) {
  (async () => {
    let i = hi();
    await toi(e, r, { identityEpoch: i, grantLeg: await _Ue(e, r) });
  })().catch((i) => (0, import_chunk_w578pjby.t)(`discovery-cache: strike after failed lazy dial of "${e}" did not land: ${(0, import_chunk_jv7av99m.d)(i)}`));
}
async function We(e, r) {
  for (let a of r) oe(a);
  let i = new Set([...r].map(Q)), o = await Pt(M());
  for (let a of o) {
    if (!a.endsWith(".json")) continue;
    let f = (0, import_path.join)(O(), a);
    try {
      let h;
      try {
        h = await ie(f, M());
      } catch (g) {
        if (ne(g)) {
          await x(f, e, void 0);
          continue;
        }
        throw g;
      }
      if (h === void 0) continue;
      let y = Me(h);
      if (y === void 0) {
        await x(f, e, void 0);
        continue;
      }
      if (i.has(y)) await x(f, e, void 0);
    } catch (h) {
      (0, import_chunk_k449cc64.He)(e, `discovery-cache: purge scan skipped ${h}`);
    }
  }
}
async function xe(e, r) {
  await We(e, /* @__PURE__ */ new Set([T(e, r)]));
}
function Ft(e, r, i) {
  let o = O(), a = false;
  return W(o, e, async () => {
    let f;
    try {
      f = (await A(e, r))?.fingerprint;
    } catch {
      f = void 0;
    }
    if (f === void 0) {
      await We(e, i), a = true;
      return;
    }
    let h = [];
    for (let y of i) {
      let g = y;
      for (let S of import_chunk_sjqze7qg.Lis) for (let k of [false, true]) h.push(x((0, import_path.join)(o, fe(y, f, S, k)), e, g)), g = void 0;
    }
    await Promise.all(h), a = true;
  }).then(() => a);
}
function Bt(e, r) {
  let i = Fe(r), o = re.map(({ prop: h, normalize: y, valueDomain: g }) => {
    let S = new Set(g.map((D) => y(D))), k = i[h];
    if (k !== void 0) S.add(k);
    return { prop: h, states: [...S] };
  }), a = /* @__PURE__ */ new Set(), f = (h, y) => {
    if (h === o.length) {
      a.add((0, import_chunk_3bjtjsgp.Uo)(e, y));
      return;
    }
    let { prop: g, states: S } = o[h];
    for (let k of S) {
      let D = { ...y };
      if (k === void 0) delete D[g];
      else D[g] = k;
      f(h + 1, D);
    }
  };
  return f(0, { ...i }), a;
}
function Ht(e) {
  return [...e].sort().join(`
`);
}
async function noi(e, r) {
  if (r.type !== "http" && r.type !== "sse") return;
  if (!(0, import_chunk_sjqze7qg.A5)()) return;
  V(), oe(T(e, r));
  try {
    let i = await A(e, r);
    if (i === void 0) {
      await xe(e, r);
      return;
    }
    let o = T(e, r), a = O(), f = new Set(import_chunk_sjqze7qg.Lis.flatMap((y) => [false, true].map((g) => (0, import_path.join)(a, fe(o, i.fingerprint, y, g))))), h = [x(i.path, e, o)];
    for (let y of f) if (y !== i.path) h.push(x(y, e, void 0));
    await Promise.all(h), await xe(e, r);
  } catch (i) {
    (0, import_chunk_k449cc64.He)(e, `discovery-cache: delete failed: ${i}`);
  }
}
async function nUa(e, r) {
  let i;
  try {
    i = await Rt(e, r);
  } catch {
    return async () => {
    };
  }
  if (i === void 0) return async () => {
  };
  try {
    return await L().mkdir(O(), Oe), await (0, import_chunk_2yx6c1y2.Rc)(i, { realpath: false, retries: 0, stale: 6e4, onCompromised: (o) => (0, import_chunk_k449cc64.He)(e, `discovery-cache: refresh lock compromised, skipping refresh: ${o}`) });
  } catch (o) {
    let a = o instanceof Error ? o.message : String(o);
    if (o?.code === "ELOCKED" || a.includes("already being held")) {
      (0, import_chunk_k449cc64.He)(e, "discovery-cache: refresh lock held elsewhere, skipping");
      return;
    }
    return (0, import_chunk_k449cc64.He)(e, `discovery-cache: lock error, proceeding: ${a}`), async () => {
    };
  }
}
