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
var chunk_5qhr9bm2_exports = {};
__export(chunk_5qhr9bm2_exports, {
  $Li: () => $Li,
  $hl: () => $hl,
  Bpe: () => Bpe,
  FLi: () => FLi,
  Fhl: () => Fhl,
  NLi: () => NLi,
  Uhl: () => Uhl,
  Zit: () => Zit
});
module.exports = __toCommonJS(chunk_5qhr9bm2_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_yqt5s0xz = require("/$bunfs/root/chunk-yqt5s0xz.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var l = /* @__PURE__ */ new Map([[import_chunk_qdcbcsg7.mB, { id: import_chunk_qdcbcsg7.DVt, at: "/api/mcp/claude_ai" }], [import_chunk_qdcbcsg7.Khe, { id: import_chunk_qdcbcsg7.jct, at: "/api/cowork/widgets_mcp" }], [import_chunk_qdcbcsg7.Rze, { id: import_chunk_qdcbcsg7.wLl, at: "https://sandbox.claudemcpcontent.com/imagine_mcp" }]]), m = /* @__PURE__ */ new Map([[import_chunk_qdcbcsg7.jOo, "/v1/code/mcp/cowork"], ["ccr-slack-thread", "/v2/ccr-sessions/-/slack-thread/mcp"], ["amb", "/v2/ccr-sessions/-/amb/mcp"], ["sms_reply", "/v2/ccr-sessions/-/amb/mcp"], ["imessage_reply", "/v2/ccr-sessions/-/amb/mcp"], ["linq_reply", "/v2/ccr-sessions/-/linq/mcp"], [import_chunk_qdcbcsg7.rJe, "/v2/ccr-sessions/-/email/mcp"]]), v = /* @__PURE__ */ new Map([["amb", "198512bb-d7b0-5792-b76a-5888f40e1a58"]]);
function Fhl(e) {
  return !l.has(e) && !m.has(e) && !e.startsWith(import_chunk_3f4m74y6.ZDr);
}
var M = 2048, C = /^https:\/\/(?:[^/?#@\\\s]*@)?(\[[0-9a-f:.]+\]|[a-z0-9._-]+)(?::[0-9]*)?(?:[/?#][^@\\\t\r\n]*)?$/i, u = { serverProvenance: void 0, serverUrl: void 0, serverOrigin: void 0 }, h = { serverProvenance: "configured", serverUrl: void 0, serverOrigin: void 0 };
function R(e) {
  return e.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(e);
}
function $hl(e, r) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && (!import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND || import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud") && !(0, import_chunk_3t7ve0wy.Yg)() && !(0, import_chunk_3t7ve0wy.kk)() && "url" in r && typeof r.url === "string") {
    let n = "headers" in r ? r.headers : void 0;
    if ((0, import_chunk_yqt5s0xz._N)(n, import_chunk_yqt5s0xz.Wpe).length > 0) return;
    let t = (0, import_chunk_qdcbcsg7.mt)();
    t.ccrLaunchMcpUrls.set(e, r.url), t.ccrLaunchMcpOrigins.set(e, (0, import_chunk_yqt5s0xz._N)(n, import_chunk_yqt5s0xz.$be));
  }
}
function g(e) {
  let r = C.exec(e)?.[1];
  if (!r?.startsWith("[") && !/\.[^.]/.test(r ?? "")) return;
  let n = (0, import_chunk_2mwshd9r.jde)({ type: "http", url: e });
  return n?.startsWith("https://") && n.length <= M && !n.includes("@") ? n : void 0;
}
var NLi = "url-redacted.invalid";
function c(e, r) {
  let n = e === void 0 ? void 0 : g(e);
  if (n === void 0) return { serverProvenance: "connector", serverUrl: void 0, serverOrigin: r };
  let { hostname: t, pathname: o } = new URL(n), d = t.replace(/\.+$/, "");
  return { serverProvenance: "connector", serverUrl: d === NLi || d.endsWith(".localhost") || o.split("/").some((a) => a.startsWith("redacted-")) ? void 0 : n, serverOrigin: r };
}
var P = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new WeakMap());
function y(e) {
  let r = (0, import_chunk_f9x2f6cx.kr)(P), n = import_chunk_f2dee02n.Ql.atStartup, t = r.get(e);
  if (t !== void 0 && t.url === e.url && t.ingressBase === n) return t;
  let o = { url: e.url, ingressBase: n, proxied: void 0 };
  if ((0, import_chunk_2mwshd9r.Yu)(e.url)) {
    let { hostname: d, pathname: a, search: p, searchParams: S } = new URL(e.url), _ = (0, import_chunk_2mwshd9r.pB)(e.url);
    o.proxied = { isToolContainerRoute: (0, import_chunk_2mwshd9r.lRt)(e.url), queryReadsTheSame: (0, import_chunk_865at33z.MNe)(e.url, ["mcp_url", "mcp_server_url", "toolbox_mcp_server_id"]), hostname: d, pathname: a, search: p, namedAddress: c(Zit(S.get("mcp_url") || S.get("mcp_server_url") || void 0)).serverUrl, route: _, upstreamAddress: g(_?.upstreamUrl ?? "") };
  }
  return r.set(e, o), o;
}
function E(e) {
  return (0, import_chunk_4smdap7r.U)([/[A-Z]/, /[a-z]/, /[0-9]/], (r) => r.test(e));
}
function I(e) {
  let r;
  try {
    r = decodeURIComponent(e);
  } catch {
    return true;
  }
  return /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i.test(r) || r.length >= 20 && /^sk[-_]/iu.test(r) || (r.match(/[A-Za-z0-9]{20,}/g) ?? []).some((n) => E(n) >= 2) || (r.match(/[A-Za-z0-9_+/-]{20,}/g) ?? []).some((n) => E(n) === 3);
}
function Zit(e) {
  return e !== void 0 && URL.canParse(e) && !new URL(e).pathname.split("/").some(I) ? e : void 0;
}
function FLi(e, r) {
  if ((0, import_chunk_f9x2f6cx.st)()) {
    let t = import_chunk_yqt5s0xz.jpe.peek((0, import_chunk_f9x2f6cx.N)())?.read?.(e, r);
    return t === void 0 || (0, import_chunk_yqt5s0xz._N)(t, import_chunk_yqt5s0xz.Wpe).length > 0 ? void 0 : (0, import_chunk_yqt5s0xz._N)(t, import_chunk_yqt5s0xz.$be);
  }
  let n = (0, import_chunk_qdcbcsg7.mt)();
  return n.ccrLaunchMcpUrls.get(e) === r ? n.ccrLaunchMcpOrigins.get(e) : void 0;
}
function $Li(e, r, n = (0, import_chunk_2mwshd9r.pB)(r), t = g(n?.upstreamUrl ?? "")) {
  let o = l.get(e);
  if (o === void 0 || n === null || t === void 0 || !(0, import_chunk_865at33z.MNe)(r, import_chunk_2mwshd9r.Rhn) || n.toolboxMcpServerId !== o.id || !import_chunk_f2dee02n.Ql.ownCcrSessionIds.some((d) => (0, import_chunk_t39bs2jr.Un)(d) === (0, import_chunk_t39bs2jr.Un)(n.sessionSegment)) || !(0, import_chunk_2mwshd9r.AVn)((0, import_chunk_t39bs2jr.Un)(n.sessionSegment), e).includes(n.mcpServerId)) return;
  return f(o.at, t) ? t : void 0;
}
function f(e, r) {
  if (!e.startsWith("/")) return r === e;
  let n = URL.parse(r)?.hostname ?? "";
  return (0, import_chunk_2mwshd9r.iRt)(n) && r === `https://${n}${e}`;
}
function Uhl(e, r) {
  let { serverProvenance: n, serverUrl: t, serverOrigin: o } = r, d = (0, import_chunk_2mwshd9r.Xke)();
  if (n !== "connector" || t === void 0 || o !== void 0 || d === null || !f("/", `${d}/`)) return;
  let a = l.get(e);
  if (a !== void 0) return f(a.at, t) ? a.id : void 0;
  let p = m.get(e);
  return p !== void 0 && f(p, t) ? v.get(e) : void 0;
}
function A(e) {
  return e.relayed === true ? c(void 0) : h;
}
function Bpe(e) {
  try {
    let { config: r } = e;
    switch (r.type) {
      case "claudeai-proxy":
        return c(r.scope === "claudeai" && r.urlReportable === true ? r.noDirectoryEntry === true ? Zit(r.url) : r.url : void 0);
      case "sdk": {
        if ((0, import_chunk_f9x2f6cx.st)() && !(0, import_chunk_ts09sys6.P0)(r)) return A(r);
        let n = (0, import_chunk_ts09sys6.sji)(e);
        if (typeof n?.serverId !== "string") return u;
        return c(n.serverId === (0, import_chunk_ts09sys6.pTr)(e) && typeof n.serverUrl === "string" ? n.serverUrl : void 0);
      }
      case "http":
      case "sse":
      case "ws": {
        if (e.name === import_chunk_qdcbcsg7.$n && r.scope === "dynamic") return c(void 0);
        let { proxied: n } = y(r);
        if (n !== void 0) {
          if (!R(r)) return c(void 0);
          if (n.isToolContainerRoute) return u;
          if (!n.queryReadsTheSame) return c(void 0);
          if (n.pathname === m.get(e.name) && n.search === "" && (0, import_chunk_2mwshd9r.iRt)(n.hostname)) return c(r.url);
          let o = FLi(e.name, r.url);
          if (o?.length === 1 && o[0] !== "") return { serverProvenance: "connector", serverUrl: o[0] === "directory" || o[0] === "statsig" ? n.namedAddress : void 0, serverOrigin: o[0] };
          return c((0, import_chunk_qdcbcsg7.Moe)(r) === l.get(e.name)?.id ? $Li(e.name, r.url, n.route, n.upstreamAddress) : void 0);
        }
        let t = URL.canParse(r.url) ? new URL(r.url).hostname.replace(/\.$/, "") : "";
        if ((0, import_chunk_dvkg7v5x.P_)(t)) return u;
        if (e.name.startsWith(import_chunk_3f4m74y6.ZDr) && R(r)) return c((0, import_chunk_qdcbcsg7.mt)().ccrLaunchMcpUrls.get(e.name) === r.url ? Zit(r.url) : void 0);
        return h;
      }
      default:
        return u;
    }
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
    let { type: n } = e.config;
    return n === void 0 || n === "stdio" || n === "sse-ide" || n === "ws-ide" ? u : c(void 0);
  }
}
