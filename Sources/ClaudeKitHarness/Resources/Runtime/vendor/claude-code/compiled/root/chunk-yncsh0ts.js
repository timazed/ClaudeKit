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
var chunk_yncsh0ts_exports = {};
__export(chunk_yncsh0ts_exports, {
  Aet: () => Aet,
  ERa: () => ERa,
  G6r: () => G6r,
  YKe: () => YKe,
  ZMt: () => ZMt,
  kRa: () => kRa,
  pYt: () => pYt,
  wRa: () => wRa
});
module.exports = __toCommonJS(chunk_yncsh0ts_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var ZMt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ name: (0, import_chunk_adx6804h.n)().optional() })), h = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ results: (0, import_chunk_adx6804h.C)(ZMt()), opt_in_required: (0, import_chunk_adx6804h.P)().optional(), message: (0, import_chunk_adx6804h.n)().nullish() }));
function Aet(e) {
  return !Array.isArray(e) && e.opt_in_required === true;
}
class YKe extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError";
  }
}
var R = 15e3, S = { search: "/api/oauth/organizations/:orgUUID/mcp/connectors/search", suggest: "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest", list: "/api/oauth/organizations/:orgUUID/mcp/connectors/list" };
async function g(e, o, s, i) {
  let l = (0, import_chunk_k67pwqya.GBi)();
  if (l !== void 0) return _(await l(e, o, s));
  let r = await import_chunk_865at33z.zt.post(S[e], o, { auth: "teleport-org", timeout: R, signal: s, credentials: i });
  if (!r.ok) throw Error(r.reason === "no-auth" ? "Not authenticated with a claude.ai account." : `connector route unavailable: ${r.reason}`);
  if (r.status >= 400) {
    let a = (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)(), message: (0, import_chunk_adx6804h.n)() }) }).safeParse(r.data);
    throw Error(a.success ? `connector route ${r.status} ${a.data.error.type}: ${a.data.error.message}` : `connector route ${r.status}`);
  }
  return _(r.data);
}
function _(e) {
  let o = h().safeParse(e);
  if (!o.success) throw Error("malformed connector response");
  if (o.data.opt_in_required) return { opt_in_required: true, message: o.data.message ?? "Enable connector suggestions in your Claude settings to use this." };
  return o.data.results;
}
function y(e) {
  if ((0, import_chunk_2zeyvjwb.hk)("allow_connector_suggest")) return;
  let o = (0, import_chunk_2zeyvjwb.zR)("allow_connector_suggest"), s = e === "search" ? "Connector search" : "Connector lookup";
  throw (0, import_chunk_cqa9hrgx.m)(e === "search" ? "connector_suggest_search" : "connector_suggest_lookup", o === "org_denied" ? "policy_denied" : o === "unregistered" ? "policy_mirror_unregistered" : o === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), new YKe((0, import_chunk_2zeyvjwb.NPe)("allow_connector_suggest", s, "is") ?? `${s} is unavailable right now; please try again.`);
}
async function wRa(e, o, s) {
  y("search");
  let i = await g("search", { keywords: e, include_custom: true }, o, s);
  if (!Aet(i)) (0, import_chunk_cqa9hrgx.u)("connector_suggest_search");
  return i;
}
async function kRa(e, o, s) {
  y("lookup");
  let i = await g("suggest", { uuids: e }, o, s);
  if (!Aet(i)) (0, import_chunk_cqa9hrgx.u)("connector_suggest_lookup");
  return i;
}
function G6r(e, o, s) {
  if ((0, import_chunk_k67pwqya.GBi)() !== void 0) return e;
  let i = import_chunk_qdcbcsg7.Ohn.peek(s)?.read?.(), l = /* @__PURE__ */ new Set();
  for (let r of o) {
    if (r.type === "disabled") continue;
    let a = r.config, f = ("headers" in a ? a.headers?.["X-MCP-Server-ID"] : void 0) ?? i?.[r.name];
    if (f) l.add(f.toLowerCase());
  }
  return e.map((r) => {
    let a = typeof r.installedServerId === "string" ? r.installedServerId : void 0;
    return { ...r, enabledInChat: a !== void 0 && l.has(a.toLowerCase()) };
  });
}
async function ERa(e, o) {
  let s = await g("list", {}, e, o);
  if (!Aet(s)) (0, import_chunk_cqa9hrgx.u)("connector_suggest_list");
  return s;
}
function pYt(e, o) {
  (0, import_chunk_w578pjby.t)(`[connector-suggest] ${e} failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)(e === "search" ? "connector_suggest_search" : e === "lookup" ? "connector_suggest_lookup" : "connector_suggest_list", "fetch_failed");
}
