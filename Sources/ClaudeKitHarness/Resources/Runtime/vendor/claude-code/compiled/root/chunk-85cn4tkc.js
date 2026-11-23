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
var chunk_85cn4tkc_exports = {};
__export(chunk_85cn4tkc_exports, {
  Mbn: () => Mbn,
  P8n: () => P8n,
  R8n: () => R8n,
  oWs: () => oWs,
  sWs: () => sWs,
  x8n: () => x8n
});
module.exports = __toCommonJS(chunk_85cn4tkc_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_vp3hv9ky = require("/$bunfs/root/chunk-vp3hv9ky.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_8x650tx8 = require("/$bunfs/root/chunk-8x650tx8.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var T = 1e4, B = 3e5, G = 10, x = 6e5, W = /* @__PURE__ */ new Set(["http", "sse", "ws", "claudeai-proxy"]), j = 8, J = /* @__PURE__ */ new Set(["/_next/mcp", "/__mcp/sse"]), Y = /* @__PURE__ */ new Set(["POLICY_BLOCKED", "CLAUDEAI_CONNECTORS_DISABLED", "DISABLED", "UNCONFIGURED", "INVALID_CONFIG", "IDENTITY_CHANGED", "SHUTTING_DOWN"]), K = /* @__PURE__ */ new Set([import_chunk_271xsh6x.uan, import_chunk_271xsh6x.pan, import_chunk_271xsh6x.man]), V = /* @__PURE__ */ new Set(["AUTH_HEADER_REJECTED", "HEADERS_HELPER_AUTH_REJECTED"]), X = /* @__PURE__ */ new Set(["FIRST_PARTY_AUTH_REJECTED", "CLAUDEAI_BEARER_REJECTED"]), k = import_chunk_bzyb60p0.qUe;
function oWs(e) {
  if (k(e)) return "rate_limited";
  if (e.type === "failed" && V.has(e.errorCode)) return "header_refused";
  return e.type === "needs-auth" || e.type === "failed" && X.has(e.errorCode) || e.type === "connected" && e.discoveryBearerRejected === true ? "refused" : void 0;
}
function R8n(e) {
  return e.type === "connected" ? !e.toolsListError && !e.discoveryBearerRejected : e.type === "disabled" || O(e);
}
function q({ config: e }) {
  if (e.type === "claudeai-proxy" || !("url" in e)) return false;
  let t = URL.parse(e.url)?.hostname ?? "", a = (0, import_chunk_dvkg7v5x.REe)(t.replace(/^\[|\]$/g, ""));
  return (0, import_chunk_dvkg7v5x.DM)(t) || a === "loopback" || a === "this_network" || a === "unspecified";
}
function x8n({ config: e }) {
  return e.type === "claudeai-proxy" || "url" in e && (/^(https|wss):$/.test(URL.parse(e.url)?.protocol ?? "") || (0, import_chunk_2mwshd9r.Yu)(e.url));
}
function Mbn(e) {
  return "url" in e.config && (q(e) || !x8n(e)) && (0, import_chunk_ha393e1n.E_r)();
}
function z({ name: e, config: t }) {
  if (t.type !== "http" && t.type !== "sse" && t.type !== "ws") return false;
  let a = URL.parse(t.url);
  return a !== null && !a.username && !a.password && !a.search && (a.pathname.replaceAll("/", "").length < j || J.has(a.pathname)) && (t.type === "ws" || !t.oauth) && !(0, import_chunk_yz5b8aaa.Oke)(t) && !(0, import_chunk_2mwshd9r.Wde)(e, t);
}
function b(e, t) {
  return e.config === t.config || (0, import_chunk_3bjtjsgp.n4)(e.config) === (0, import_chunk_3bjtjsgp.n4)(t.config);
}
function O(e) {
  return e.type === "failed" && (Y.has(e.errorCode) || K.has(e.error) || (0, import_chunk_bzyb60p0.Aza)(e) || (0, import_chunk_271xsh6x.xje)(e.error) || (0, import_chunk_271xsh6x.Fkt)(e.error) || (0, import_chunk_271xsh6x.Pje)(e.error) || (0, import_chunk_271xsh6x.fre)(e) || (0, import_chunk_271xsh6x.oDi)(e) || e.proxyConnectStatus === 403 && e.config.type !== "claudeai-proxy" && "url" in e.config && (0, import_chunk_bzyb60p0.LYo)(e.config.url));
}
async function Q({ name: e, config: t }) {
  if (t.type !== "http" && t.type !== "sse") return "some";
  let a = !x8n({ name: e, config: t }) && await (0, import_chunk_yz5b8aaa.Nmn)(e, t);
  if (a) return a === import_chunk_zzrn5zap.bs ? "store_unreadable" : "token_stored";
  let s = await (0, import_chunk_yz5b8aaa.oB)({ serverName: e, serverConfig: t, challenged: false });
  if (s === import_chunk_zzrn5zap.bs) return "store_unreadable";
  if ((0, import_chunk_vp3hv9ky.RYr)(e, t, s?.mcpOAuth)) return "no_sign_in";
  let c = s?.mcpOAuth?.[(0, import_chunk_yz5b8aaa.kc)(e, t)];
  return c?.accessToken || c?.refreshToken || (0, import_chunk_yz5b8aaa.Oke)(t) || (0, import_chunk_2mwshd9r.Wde)(e, t) ? "some" : "none";
}
function M(e) {
  return e === "no_sign_in" || e === "token_stored" || e === "store_unreadable";
}
function sWs(e, t, a = {}) {
  return { rows: t, allows: ({ name: s, config: c }) => {
    let p = (0, import_chunk_xcgcdx61.ko)(a, s) ?? (import_chunk_bzyb60p0.hQ.has(c.scope) ? (0, import_chunk_bzyb60p0.xP)(s) : c);
    return p !== null && (p === c || (0, import_chunk_3bjtjsgp.n4)(p) === (0, import_chunk_3bjtjsgp.n4)(c)) && !(0, import_chunk_qdcbcsg7.Pl)(c) && !(0, import_chunk_bzyb60p0.gi)(s) && !(0, import_chunk_bzyb60p0.zu)(s, c);
  }, dial: async (s, c) => {
    let { client: p } = await e(s.name, { discardDiscovery: false, onlyRow: s, mayStart: c });
    if (p === s) return "not_dialed";
    let S = oWs(p);
    if (S !== void 0) return S;
    if (p.type === "connected") return s.type === "failed" || R8n(p) ? "connected" : "not_connected";
    return p.type === "failed" && !O(p) ? "not_connected" : "not_dialed";
  } };
}
function P8n(e) {
  let t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new WeakMap(), c = (r) => {
    let n = Q(r).catch(() => "store_unreadable"), o = { held: n, goodUntil: 1 / 0 };
    return s.set(r, o), n.then((_) => {
      if (_ === "store_unreadable") o.goodUntil = performance.now() + T;
    }), n;
  }, p = (r) => {
    let n = t.get(r.name);
    return n && b(n.row, r) ? n : void 0;
  }, S = (r) => {
    try {
      let n = e.rows().find((o) => o.name === r.name);
      return (n?.type === "failed" || n?.type === "needs-auth") && W.has(n.config.type) && b(n, r) && !O(n) && !(0, import_chunk_qdcbcsg7.$Oo)(n.name) && !k(n) && (0, import_chunk_qdcbcsg7.mt)().searchRedialFailures.get(n.name)?.rateLimitedRow !== n && (x8n(n) || z(n)) && !Mbn(n) && e.allows(n) ? n : void 0;
    } catch (n) {
      (0, import_chunk_k449cc64.i)(n);
      return;
    }
  }, E = async (r) => {
    let { name: n, config: o } = r;
    (0, import_chunk_hazyxdac.wFe)();
    let _ = await c(r);
    if (M(_)) return _;
    let { heldSignInOnlyDials: h, dialedWithoutOAuth: C } = (0, import_chunk_qdcbcsg7.mt)(), A = (0, import_chunk_qdcbcsg7.Aze)(n, o);
    a.add(n);
    try {
      let D = await e.dial(r, () => {
        if (S(r) !== r) return false;
        if (!x8n(r) && "url" in o) C.set(n, o.url);
        return h.add(n), true;
      });
      if (!A && e.rows().some((y) => y.name === n && "heldBy" in y)) (0, import_chunk_qdcbcsg7.tJe)(n, o);
      return D === "refused" && _ === "none" ? "asks_for_sign_in" : D;
    } finally {
      h.delete(n), a.delete(n);
    }
  }, U = async (r) => {
    let n = L(r.name)?.count ?? 0, o = await E(r).catch((h) => ((0, import_chunk_k449cc64.He)(r.name, `Re-dial threw: ${(0, import_chunk_jv7av99m.d)(h)}`), "not_connected")), _ = e.rows().find((h) => h.name === r.name);
    if (o === "not_dialed" && _?.type === "connected") o = "connected";
    if (o === "not_connected" && _ && O(_)) o = "not_dialed";
    if (o === "connected") (0, import_chunk_qdcbcsg7.mt)().searchRedialFailures.delete(r.name);
    else if (M(o)) H(r.name, n, { leftAlone: true });
    else H(r.name, n + (o === "not_dialed" ? 0 : 1), o === "rate_limited" ? { rateLimitedRow: _ } : {});
    return o;
  }, I = { allows: (r) => (p(r) ?? S(r)) !== void 0, async offers(r) {
    let n = S(r);
    if (n === void 0) return false;
    let o = s.get(n);
    return !M(await (o && performance.now() < o.goodUntil ? o.held : c(n)));
  }, waitRanOut: (r) => p(r)?.waitRanOut === true, async redial(r, { cause: n, waitMs: o, signal: _, tools: h }) {
    let C = /* @__PURE__ */ new Map(), A = [];
    for (let R of r) {
      let { name: m } = R, g = N(m) === 0, v = t.has(m) ? void 0 : S(R);
      if (v !== void 0 && g) t.set(m, { row: v, ends: U(v).finally(() => t.delete(m)) });
      let P = p(R);
      if (P !== void 0) {
        C.set(m, "wait_ran_out");
        let w = P.ends.then((F) => C.set(m, F));
        if (!P.waitRanOut) A.push(w);
      } else if (v !== void 0) {
        let w = L(m);
        C.set(m, w?.count && !w.leftAlone ? "too_soon" : "not_dialed");
      }
    }
    if (C.size === 0) return [];
    try {
      await (0, import_chunk_5appeerh.me)((0, import_chunk_5appeerh.Tn)(Promise.all(A), _, () => new import_chunk_jv7av99m.Ie()), o);
    } catch {
      return [];
    }
    let D = [], y;
    for (let [R, m] of C) {
      if (m === "connected") continue;
      y ??= m;
      let g = t.get(R);
      if (m === "wait_ran_out" && g && o > 0) g.waitRanOut = true;
      if (m !== "not_dialed" && !M(m) && (m !== "wait_ran_out" || a.has(R)) && !(0, import_chunk_8x650tx8.WH)(R)) D.push(Z(R, m, h?.() ?? []));
    }
    if (y === void 0) (0, import_chunk_cqa9hrgx.u)("mcp_search_redial", { cause: (0, import_chunk_78g0060s.f)(n) });
    else if (A.length > 0) (0, import_chunk_cqa9hrgx.l)("mcp_search_redial", y, { cause: (0, import_chunk_78g0060s.f)(n) });
    return D;
  } };
  return (0, import_chunk_qdcbcsg7.mt)().searchRedial = I, () => {
    let r = (0, import_chunk_qdcbcsg7.mt)();
    if (r.searchRedial === I) r.searchRedial = null;
  };
}
function Z(e, t, a) {
  let s = `MCP server "${(0, import_chunk_271xsh6x.xr)(e)}"`, c = Math.ceil(N(e) / 1e3), p = a.find(({ mcpInfo: E }) => E?.isAuthStub === true && E.serverName === e && E.toolName === import_chunk_b83x8d52.qfe), S = `The user needs to sign in${p ? ` (${(0, import_chunk_px0hhsq7.Ev)(p.name)} starts that)` : ""}. Continue without this server, and tell them if the task depends on it.`;
  switch (t) {
    case "refused":
      return `Claude Code connected to ${s} again with its existing sign-in and was refused. ${S}`;
    case "header_refused":
      return `Claude Code connected to ${s} again, and it rejected the credential in its configuration (a header or headersHelper). The user needs to update it. Continue without this server, and tell them if the task depends on it.`;
    case "rate_limited":
      return `Claude Code tried to connect to ${s} again, and it answered that it gets too many requests (429). A call or search does not try it again. Continue without this server, and tell the user if the task depends on it.`;
    case "asks_for_sign_in":
      return `Claude Code connected to ${s} again, and it asks for a sign-in. ${S}`;
    case "not_connected":
      return `Claude Code tried to connect to ${s} again and could not. It can be tried again in ${c} s.`;
    case "too_soon":
      return `${s} did not connect when it was last tried, and is not tried again for ${c} s.`;
    case "wait_ran_out":
      return `${s} is still connecting. Try again shortly.`;
  }
}
function L(e) {
  let t = (0, import_chunk_qdcbcsg7.mt)().searchRedialFailures.get(e);
  return t !== void 0 && performance.now() - t.endedAt < x ? t : void 0;
}
function N(e) {
  let t = L(e);
  if (t === void 0) return 0;
  let a = t.leftAlone ? T : t.count >= G ? x : Math.min(T * 2 ** Math.max(t.count - 1, 0), B);
  return Math.max(0, t.endedAt + a - performance.now());
}
function H(e, t, a) {
  (0, import_chunk_qdcbcsg7.mt)().searchRedialFailures.set(e, { count: t, ...a, endedAt: performance.now() });
}
