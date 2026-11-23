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
var chunk_gyyf94kt_exports = {};
__export(chunk_gyyf94kt_exports, {
  H0a: () => H0a,
  M0a: () => M0a
});
module.exports = __toCommonJS(chunk_gyyf94kt_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var S = 36e5, _ = 864e5, p = "/api/claude_code/organizations/metrics_enabled";
class a extends Error {
}
async function w() {
  let e = (0, import_chunk_865at33z._7e)(await (0, import_chunk_865at33z.JV)(), `${(0, import_chunk_ephf358x.cn)().BASE_API_URL}${p}`);
  if (e.error) throw new a("Auth error: no credential usable for the metrics opt-out check");
  let n = await (0, import_chunk_xfj2cwfv.VN)(5e3, ({ timeout: r, signal: o }) => import_chunk_865at33z.zt.get(p, { auth: "none", headers: e.headers, timeout: r, signal: o, bypassEssentialTrafficOnly: true, maxRedirects: 0 }));
  if (!n.ok) throw new a(`metrics_enabled unavailable: ${n.reason}`);
  if (typeof n.data?.metrics_logging_enabled !== "boolean") throw Error("metrics_enabled response missing metrics_logging_enabled");
  return n.data;
}
async function M(e) {
  try {
    let n = await (0, import_chunk_865at33z.jx)(w, { also403Revoked: true, gateToSessionOAuthCredential: true, oauthRefreshLatch: e });
    return e.attempted = false, (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} Metrics opt-out API response: enabled=${n.metrics_logging_enabled}`), (0, import_chunk_cqa9hrgx.u)("api_metrics_opt_out_check"), { enabled: n.metrics_logging_enabled, hasError: false };
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} Failed to check metrics opt-out status: ${(0, import_chunk_jv7av99m.d)(n)}`, n instanceof a ? { level: "error" } : void 0), (0, import_chunk_cqa9hrgx.m)("api_metrics_opt_out_check", "request_failed"), { enabled: false, hasError: true };
  }
}
var y = new import_chunk_2904xtvq.j(() => {
  let e = { attempted: false };
  return { memo: (0, import_chunk_jk26f2gn.kOe)(() => M(e), S), oauthRefreshLatch: e };
}), E = new import_chunk_2904xtvq.j(() => ({ identity: void 0 }));
function f() {
  let { key: e, source: n } = (0, import_chunk_865at33z.lm)();
  if (e === null) return null;
  if (n === "apiKeyHelper") {
    let r = (0, import_chunk_865at33z.o_)();
    return r ? `key:helper:${(0, import_chunk_ccm69jjy.Je)(r).slice(0, 16)}` : null;
  }
  return `key:${(0, import_chunk_ccm69jjy.Je)(e).slice(0, 16)}`;
}
function l(e) {
  let n = (0, import_chunk_865at33z.Sw)();
  if (n !== void 0) return n.organizationUuid !== void 0 ? `acct:${n.accountUuid}/${n.organizationUuid}` : null;
  if (!e?.accountUuid || !e.organizationUuid) return null;
  return import_chunk_c203g5kd.s.CLAUDE_CODE_OAUTH_TOKEN || (0, import_chunk_f9x2f6cx.wse)() || (0, import_chunk_n25gt70y.Jj)() !== null ? null : `acct:${e.accountUuid}/${e.organizationUuid}`;
}
function c() {
  let e = (0, import_chunk_865at33z.Sn)();
  if (e !== void 0) return l(e);
  return (0, import_chunk_865at33z.wa)() ? null : f();
}
async function g(e) {
  let n = (0, import_chunk_865at33z.Sn)();
  if (n === void 0) return (0, import_chunk_865at33z.wa)() ? null : f();
  if ((0, import_chunk_865at33z.Sw)() !== void 0) return l(n);
  return l(await (0, import_chunk_865at33z.uS)(e));
}
function P() {
  let e = (0, import_chunk_865at33z.Sn)();
  if (e !== void 0 || (0, import_chunk_865at33z.wa)()) {
    let n = (0, import_chunk_865at33z.Sw)();
    if (n !== void 0) return `acct:${n.accountUuid}/${n.organizationUuid ?? "?"}`;
    if (e !== void 0) return `acct:${e.accountUuid ?? "?"}/${e.organizationUuid ?? "?"}`;
    return "oauth:no-record";
  }
  return f() ?? "none";
}
function I() {
  let e = (0, import_chunk_f9x2f6cx.N)().host, n = y.of(e), r = E.of(e), o = P();
  if (r.identity !== void 0 && r.identity !== o) n.memo.cache.clear(), n.oauthRefreshLatch.attempted = false;
  return r.identity = o, n.memo();
}
function M0a() {
  let e = (0, import_chunk_f9x2f6cx.N)().host, n = y.of(e);
  n.memo.cache.clear(), n.oauthRefreshLatch.attempted = false, E.of(e).identity = void 0;
}
async function b(e) {
  let n = c() === null ? null : await g(e), r = await I();
  if (r.hasError) return r;
  if (n === null) return r;
  if (await g(e) !== n) return (0, import_chunk_cqa9hrgx.m)("api_metrics_opt_out_check", "principal_changed_mid_flight"), { enabled: false, hasError: true };
  if (c() !== n) return r;
  let o = k(n);
  if (o !== void 0 && o.enabled === r.enabled && Date.now() - o.timestamp < _) return r;
  return await (0, import_chunk_865at33z.Ke)((C) => T(C, n, r.enabled), e), r;
}
function T(e, n, r) {
  if (c() !== n || n.startsWith("acct:") && e.oauthAccount === void 0) return e;
  return { ...e, metricsStatusCache: void 0, metricsStatusCacheByPrincipal: F({ ...e.metricsStatusCacheByPrincipal, [n]: { enabled: r, timestamp: Date.now() } }) };
}
var R = 8;
function F(e) {
  let r = Object.entries(e).filter(([, o]) => A(o)).sort(([, o], [, h]) => h.timestamp - o.timestamp).slice(0, R);
  return Object.fromEntries(r);
}
function A(e) {
  return typeof e?.enabled === "boolean" && Number.isFinite(e.timestamp) && e.timestamp <= Date.now();
}
function k(e) {
  let n = (0, import_chunk_865at33z.ge)().metricsStatusCacheByPrincipal?.[e];
  return n !== void 0 && A(n) ? n : void 0;
}
async function H0a(e) {
  if ((0, import_chunk_865at33z.Rt)() && !(0, import_chunk_865at33z.Qf)()) return { enabled: false, hasError: false };
  let n = c(), r = n === null ? void 0 : k(n);
  if (r !== void 0) {
    if (Date.now() - r.timestamp > _) b(e).catch(import_chunk_k449cc64.i);
    return { enabled: r.enabled, hasError: false };
  }
  return b(e);
}
