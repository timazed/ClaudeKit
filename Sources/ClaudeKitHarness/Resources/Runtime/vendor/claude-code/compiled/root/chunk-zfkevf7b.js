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
var chunk_zfkevf7b_exports = {};
__export(chunk_zfkevf7b_exports, {
  G8s: () => G8s,
  WKr: () => WKr,
  ZYl: () => ZYl,
  cqe: () => cqe,
  e7l: () => e7l,
  j8s: () => j8s
});
module.exports = __toCommonJS(chunk_zfkevf7b_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_k4bqn7hc = require("/$bunfs/root/chunk-k4bqn7hc.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var j = 25, I = "public", U = 3, G = 200, H = 8e3, q = 36e5, Y = 8388608, F = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().min(1), name: (0, import_chunk_adx6804h.n)().min(1), summary: (0, import_chunk_adx6804h.n)().optional().catch(void 0), description: (0, import_chunk_adx6804h.n)().optional().catch(void 0), release: (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.n)() }).optional().catch(void 0), publisher: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)() }).optional().catch(void 0), links: (0, import_chunk_adx6804h.c)({ documentation: (0, import_chunk_adx6804h.n)().optional().catch(void 0) }).optional().catch(void 0), surfaces: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().catch(void 0), source: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("directory"), repository: (0, import_chunk_adx6804h.c)({ url: (0, import_chunk_adx6804h.n)().min(1), path: (0, import_chunk_adx6804h.n)().optional(), reviewed_commit: (0, import_chunk_adx6804h.n)().optional() }) }), checks: (0, import_chunk_adx6804h.c)({ review: (0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.n)(), by: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)() }).optional().catch(void 0) }) }) }));
function WKr(e) {
  return F().safeParse(A(e)).data;
}
function N(e) {
  if ((0, import_chunk_xcgcdx61.LJe)(e) !== null) return true;
  if (!e.startsWith("https://") || (0, import_chunk_43nz5n02.tse)(e)) return false;
  let o;
  try {
    o = new URL(e);
  } catch {
    return false;
  }
  return !(0, import_chunk_43nz5n02.Ro)(o.hostname) && !(0, import_chunk_43nz5n02.d4n)(o.hostname, "ssh.github.com");
}
function j8s(e) {
  let { state: o, by: h } = e.checks.review;
  if (o !== "done") return false;
  switch (h?.type) {
    case "partner":
      return N(e.source.repository.url);
    case "anthropic":
      return (0, import_chunk_xcgcdx61.Ugn)(e.source.repository.url);
    default:
      return false;
  }
}
var V = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ data: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).nullish(), next_page: (0, import_chunk_adx6804h.n)().nullish() }));
function cqe() {
  return (0, import_chunk_2zeyvjwb.hk)("allow_plugin_directory_search") && (0, import_chunk_wj4me9k5.uv)() === null;
}
function ZYl() {
  let e = (0, import_chunk_2zeyvjwb.zR)("allow_plugin_directory_search");
  return (e === "cache_miss" || e === "unregistered" ? null : (0, import_chunk_2zeyvjwb.NPe)("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment";
}
function e7l() {
  if (cqe() || (0, import_chunk_wj4me9k5.uv)() !== null) return null;
  return "policy-not-known";
}
async function G8s({ query: e, pageToken: o, signal: h, pageSize: w = j, include: P, keepTokenWhenEmpty: O = false }) {
  let L = (0, import_chunk_7cfjrnwy.ee)(e.trim(), G), d = L !== "", y = o !== void 0, _ = performance.now();
  if (!(0, import_chunk_2zeyvjwb.hk)("allow_plugin_directory_search")) {
    let i = (0, import_chunk_2zeyvjwb.zR)("allow_plugin_directory_search");
    return z("unavailable", _, d, y, { cause: (0, import_chunk_78g0060s.f)("policy") }), (0, import_chunk_cqa9hrgx.m)("plugin_directory_search", i === "org_denied" ? "policy_denied" : i === "unregistered" ? "policy_mirror_unregistered" : i === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), { ok: false, reason: "unavailable", cause: "policy", message: (i === "cache_miss" || i === "unregistered" ? null : (0, import_chunk_2zeyvjwb.NPe)("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment", blockedBy: i === "org_denied" || i === "latched" ? "policy_limit" : void 0 };
  }
  let M = (0, import_chunk_wj4me9k5.uv)();
  if (M !== null) return z("unavailable", _, d, y, { cause: (0, import_chunk_78g0060s.f)("policy") }), { ok: false, reason: "unavailable", cause: "policy", message: "it is blocked by your organization", blockedBy: M };
  let D = [], E = 0, S = 0, b = o;
  try {
    do {
      let s = new URLSearchParams({ limit: String(w), visibility: I });
      if (P !== void 0) s.set("include", P);
      if (d) s.set("q", L);
      if (b !== void 0) s.set("page", b);
      let r = await import_chunk_865at33z.zt.get(`${import_chunk_865at33z.ARo}?${s}`, { auth: "none", publicPluginDirectoryCatalog: true, proxyOptionsFor: import_chunk_k4bqn7hc.xA, timeout: H, maxContentLength: Y, signal: h, validateStatus: () => true });
      if (S++, !r.ok) {
        let g = r.reason === "essential-traffic-only", R = g ? "essential-traffic-only" : "data-residency";
        return z("unavailable", _, d, y, { cause: (0, import_chunk_78g0060s.f)(R) }), (0, import_chunk_cqa9hrgx.l)("plugin_directory_search", g ? "essential_traffic_only" : "data_residency"), { ok: false, reason: "unavailable", cause: R };
      }
      if (r.status === 404) return z("not_served", _, d, y, { http_status: 404 }), (0, import_chunk_cqa9hrgx.l)("plugin_directory_search", "not_served"), { ok: false, reason: "not-served" };
      if (r.status >= 400) {
        z("failed", _, d, y, { error_kind: (0, import_chunk_78g0060s.f)("http"), http_status: r.status }), (0, import_chunk_cqa9hrgx.m)("plugin_directory_search", `http_${r.status}`);
        let g;
        if (r.status === 400 && y) g = "it could not continue this results page; search again to start from the first page";
        else if (r.status === 429 || r.status >= 500) g = "it is temporarily unavailable; try again shortly";
        else g = `the request failed (HTTP ${r.status})`;
        let R = r.status === 429 || r.status === 503 ? (0, import_chunk_865at33z.qp)(r.response.headers["retry-after"]) : void 0;
        return { ok: false, reason: "failed", message: g, ...R !== void 0 && { retryAfterMs: Math.min(R, q) } };
      }
      let x = V().safeParse(r.data);
      if (!x.success) return z("failed", _, d, y, { error_kind: (0, import_chunk_78g0060s.f)("invalid_schema") }), (0, import_chunk_cqa9hrgx.m)("plugin_directory_search", "invalid_schema"), { ok: false, reason: "failed", message: "it returned a response Claude Code could not read" };
      for (let g of x.data.data ?? []) {
        let R = WKr(g);
        if (R) D.push(R);
        else E++;
      }
      b = x.data.next_page || void 0;
    } while (D.length < w && b !== void 0 && S < U);
    let i = D.length === 0 && b !== void 0, k = i && !O;
    if (k) b = void 0;
    return z("success", _, d, y, { result_count: D.length, skipped_count: E, request_count: S, has_more: b !== void 0, chase_exhausted: i }), (0, import_chunk_cqa9hrgx.u)("plugin_directory_search"), { ok: true, page: { listings: D, nextPageToken: b, skippedRows: E, truncated: k || void 0 } };
  } catch (i) {
    if (h?.aborted) return { ok: false, reason: "aborted" };
    let { kind: k, status: s, message: r } = (0, import_chunk_jv7av99m.$i)(i);
    return (0, import_chunk_w578pjby.t)(`plugin directory search failed (${k}${s ? ` ${s}` : ""}): ${r}`), z("failed", _, d, y, { error_kind: (0, import_chunk_78g0060s.f)(k), ...s !== void 0 && { http_status: s } }), (0, import_chunk_cqa9hrgx.m)("plugin_directory_search", k), { ok: false, reason: "failed", message: s === void 0 && k !== "other" ? "it could not be reached; check your network connection" : "the request failed" };
  }
}
function A(e) {
  if (Array.isArray(e)) return e.map(A);
  if ((0, import_chunk_ma3kja9f.T)(e)) {
    let o = {};
    for (let [h, w] of Object.entries(e)) if (w !== null) o[h] = A(w);
    return o;
  }
  return e;
}
function z(e, o, h, w, P = {}) {
  (0, import_chunk_y53wbr8a.a)("tengu_plugin_directory_search", { outcome: (0, import_chunk_78g0060s.f)(e), has_query: h, is_continuation: w, duration_ms: Math.round(performance.now() - o), ...P });
}
