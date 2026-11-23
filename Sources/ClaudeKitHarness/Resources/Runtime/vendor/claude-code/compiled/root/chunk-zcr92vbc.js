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
var chunk_zcr92vbc_exports = {};
__export(chunk_zcr92vbc_exports, {
  C8n: () => C8n,
  MOt: () => MOt,
  ZBs: () => ZBs,
  c$o: () => c$o,
  cga: () => cga,
  eWs: () => eWs,
  f$o: () => f$o,
  p$o: () => p$o,
  tBr: () => tBr,
  u$o: () => u$o
});
module.exports = __toCommonJS(chunk_zcr92vbc_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_rs9a21f2 = require("/$bunfs/root/chunk-rs9a21f2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var k = "tengu_fluttering_rose";
function y(e) {
  return `Claude Code can't suggest another way to sign in unless claude.ai offers it as a connector: Connect it there${e ? ", get this server's own entry removed (while that entry exists, a connector at the same address may not load in new sessions)" : ""}, then start a new session.`;
}
function _() {
  return (0, import_chunk_865at33z.b)(k, false) === true;
}
var S = { "plugin-author": "The plugin's author", administrator: "Your admin", configurer: "Whoever configured this server" }, c$o = /* @__PURE__ */ new Set(["id_jag_with_auto_connect", "auto_connect", "auth_allows_auto_connect"]);
async function tBr(e, t, n, a) {
  if (!_() || n.type !== "sse" && n.type !== "http" || !await (0, import_chunk_rs9a21f2.nBr)(e, t, n)) return;
  let o = (0, import_chunk_qdcbcsg7.mt)(), i = (0, import_chunk_yz5b8aaa.q6t)(t, { ...n, redialToRelearnRegistration: void 0 }, await (0, import_chunk_yz5b8aaa.aK)()) ? o.claudeAiConfigsFetch : null, { listed: p, connectorNames: g, connectors: m } = MOt(i === null ? {} : await i, n), r;
  switch (n.scope) {
    case "local":
    case "user":
    case "project":
      r = { kind: "register-app", fixer: "you" };
      break;
    case "enterprise":
    case "managed":
      r = { kind: "register-app", fixer: "administrator" };
      break;
    case "dynamic":
    case "agent":
    case "claudeai":
      r = { kind: "register-app", fixer: (0, import_chunk_xcgcdx61.jl)(n) ? "plugin-author" : "configurer" };
      break;
  }
  let [C] = m;
  if ((0, import_chunk_rs9a21f2.uga)(e)) r = { kind: "follow-service-setup", fixer: r.fixer };
  else if (m.some((c) => c.ineligibleReason === "connected")) r = { kind: "connected", connectorNames: g };
  else if (m.some((c) => c$o.has(c.ineligibleReason ?? ""))) r = { kind: "organization-connects" };
  else if (C !== void 0) r = { kind: "connect", connectorNames: g, url: (m.length === 1 && C.ineligibleReason ? (0, import_chunk_sjqze7qg.fae)(C) : null) ?? (0, import_chunk_sjqze7qg.VF)() };
  else if (!p && i !== null && o.claudeAiConnectorListSettledSeq === o.claudeAiConnectorListFetchSeq) {
    if (o.officialUrls === void 0 && (a === "mcp_login" || o.officialUrlsFetchAwaitsLookup)) await (0, import_chunk_865at33z.Sxs)();
    await o.officialUrlsFetch;
    let c = (0, import_chunk_2mwshd9r.jde)(n);
    if (c !== void 0 && (0, import_chunk_865at33z.bxs)(c)) switch ((0, import_chunk_865at33z.or)()) {
      case "pro":
      case "max":
        r = { kind: "connect", url: (0, import_chunk_sjqze7qg.VF)(), connectorNames: g };
        break;
      case "team":
      case "enterprise":
        r = { kind: "ask-admin" };
        break;
      case null:
        break;
    }
  }
  let h = { advice: (0, import_chunk_78g0060s.f)(r.kind), site: (0, import_chunk_78g0060s.f)(a) };
  switch (r.kind) {
    case "connected":
    case "connect":
    case "organization-connects":
      await (0, import_chunk_cqa9hrgx.To)("mcp_registration_advice", h);
      break;
    case "ask-admin":
    case "register-app":
      await (0, import_chunk_cqa9hrgx.oi)("mcp_registration_advice", "no_route_known", h);
      break;
    case "follow-service-setup":
      await (0, import_chunk_cqa9hrgx.oi)("mcp_registration_advice", "registration_gone", h);
      break;
  }
  return r;
}
async function cga(e, t, n) {
  let a = await ZBs(e, n);
  return u$o(a === "list_refused" ? "list_unavailable" : a, t);
}
async function ZBs(e, { storageV5: t, credentials: n }, a, o = false) {
  let i = (0, import_chunk_qdcbcsg7.mt)();
  if (i.claudeAiConnectorListStatus !== "settled") return "list_unavailable";
  let p = i.claudeAiConfigsFetch;
  (0, import_chunk_sjqze7qg.yot)();
  let g = await (0, import_chunk_sjqze7qg.T5)(n, o), { connectorNames: m, connectors: r, unsure: C } = p$o(g, e, a);
  if (i.claudeAiConnectorListSettledSeq !== i.claudeAiConnectorListFetchSeq) return i.claudeAiConfigsFetch ??= p, (0, import_chunk_sjqze7qg.sbt)(g) ? "list_unavailable" : "list_refused";
  let h = require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
  if (C) {
    let d = f$o(e) ?? e;
    for (let v of MOt(g, d).connectorNames) await h.removeMcpAuthCacheEntry(v, t);
    return "address_unclear";
  }
  let c = r.some((d) => d.ineligibleReason === "connected");
  if (!c && r.every((d) => d.eligible === false)) return "not_connected";
  for (let d of m) await h.removeMcpAuthCacheEntry(d, t);
  return c ? "connected" : r.some((d) => c$o.has(d.ineligibleReason ?? "")) ? "needs_no_sign_in" : "state_unknown";
}
function C8n(e) {
  switch (e.kind) {
    case "connected":
      return "This service doesn't accept sign-ins from Claude Code. It's already connected through your Claude account, and its tools load as a claude.ai connector. If they're missing, restart Claude Code.";
    case "connect":
      return "This service doesn't accept sign-ins from Claude Code. Connect it on claude.ai to use it here.";
    case "organization-connects":
      return "This service doesn't accept sign-ins from Claude Code. Your organization connects it for you on claude.ai. If its tools are missing, ask your admin.";
    case "ask-admin":
      return "This service doesn't accept sign-ins from Claude Code. No claude.ai connector for it is available to you. Your admin can add one or give you access.";
    case "register-app":
      if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return `Claude Code couldn't register with this service. ${y(e.fixer !== "plugin-author")}
Connectors are at ${(0, import_chunk_sjqze7qg.VF)()}`;
      return e.fixer === "you" ? "This service doesn't accept sign-ins from Claude Code. To fix that, register an app with the service (redirect URL http://localhost:<port>/callback), then remove this server and add it again with the same options plus --client-id <id>, --callback-port <port> and, if the service issues a secret, --client-secret." : `This service doesn't accept sign-ins from Claude Code. ${S[e.fixer]} can fix that by registering an app with the service.`;
    case "follow-service-setup":
      return `This service no longer lets Claude Code register to sign in at this address (HTTP 410 Gone). ${e.fixer === "you" ? "Update" : `${S[e.fixer]} can update`} this server's entry by following the service's current setup instructions.`;
  }
}
function u$o(e, t) {
  let n = { waited_ms: Date.now() - t };
  switch (e) {
    case "connected":
    case "not_connected":
    case "needs_no_sign_in":
      (0, import_chunk_cqa9hrgx.u)("mcp_claudeai_handoff", { ...n, outcome: (0, import_chunk_78g0060s.f)(e) });
      break;
    case "state_unknown":
    case "address_unclear":
    case "list_unavailable":
      (0, import_chunk_cqa9hrgx.l)("mcp_claudeai_handoff", e, n);
      break;
  }
  return e;
}
function MOt(e, t) {
  let n = (0, import_chunk_bzyb60p0.RP)(t), a = (0, import_chunk_gd77dyw4.Hr)(e, (i) => n !== null && (0, import_chunk_bzyb60p0.RP)(i) === n), o = (0, import_chunk_gd77dyw4.Hr)((0, import_chunk_bzyb60p0.SH)(a).allowed, (i, p) => !(0, import_chunk_bzyb60p0.gi)(p) && !(i.type === "claudeai-proxy" && (0, import_chunk_7625rswd.mpl)(i.id)));
  return { listed: Object.keys(a).length > 0, connectorNames: Object.keys(o), connectors: Object.values(o).flatMap((i) => i.type === "claudeai-proxy" ? [i] : []) };
}
function eWs(e) {
  return new Set(Object.values(e).flatMap((t) => t.type === "claudeai-proxy" ? [t.id] : []));
}
function f$o(e) {
  if (!("url" in e) || !URL.parse(e.url)?.search) return;
  let t = (0, import_chunk_865at33z.Upn)(e.url);
  return t.includes("?") ? void 0 : { ...e, url: t };
}
function p$o(e, t, n) {
  let a = MOt(e, t), o = f$o(t);
  if (a.listed || o === void 0) return { ...a, unsure: false };
  let i = MOt((0, import_chunk_gd77dyw4.Hr)(e, (p) => n !== void 0 && p.type === "claudeai-proxy" && !n.has(p.id)), o);
  return { ...i, unsure: !i.listed && MOt(e, o).listed };
}
