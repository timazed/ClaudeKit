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
var chunk_cwkztn5x_exports = {};
__export(chunk_cwkztn5x_exports, {
  kfo: () => kfo,
  oal: () => oal,
  td: () => td
});
module.exports = __toCommonJS(chunk_cwkztn5x_exports);
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_vs7p9j3v = require("/$bunfs/root/chunk-vs7p9j3v.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_kec02mj3 = require("/$bunfs/root/chunk-kec02mj3.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var a = 20, l = /* @__PURE__ */ new Set(["mcp_invalid_oauth_token", "mcp_unauthorized_after_token_refresh", "mcp_oauth_token_refresh_failed", "mcp_oauth_no_refresh_token"]);
class u {
  connections = /* @__PURE__ */ new Map();
  toolLists = new import_chunk_1frjyv5h.Uf({ max: a });
  resourceLists = new import_chunk_1frjyv5h.Uf({ max: a });
  resourceTemplateLists = new import_chunk_1frjyv5h.Uf({ max: a });
  commandLists = new import_chunk_1frjyv5h.Uf({ max: a });
  reauthInFlight = /* @__PURE__ */ new Map();
  settledCachedDialFailures = /* @__PURE__ */ new Map();
  refusedCachedRows = /* @__PURE__ */ new Set();
  namesSentByLiveClient = /* @__PURE__ */ new WeakMap();
  lapsedCcrSignIns = /* @__PURE__ */ new Set();
  removedNames = /* @__PURE__ */ new Set();
  removedConfigs = /* @__PURE__ */ new WeakSet();
  uncodedCcrRefusals = /* @__PURE__ */ new Set();
  urlsOnDrainingHosts = /* @__PURE__ */ new Set();
  urlsOfContainersThatStopSoon = /* @__PURE__ */ new Set();
  containerRestartsByUrl = /* @__PURE__ */ new Map();
  toolContainerAskedFor = void 0;
  liveClients = /* @__PURE__ */ new Set();
  ccrTicketSource = void 0;
  ccrMemoryCallHeaders = void 0;
  mayNoteCcrDialAnswer(e, t) {
    return t.status === 401 || t.status === 403 || this.lapsedCcrSignIns.has(e) || this.uncodedCcrRefusals.has(e);
  }
  noteCcrDialAnswer(e, t) {
    let n = t.headers.get("X-Mcp-Error-Code") ?? "";
    if (t.status === 401 && l.has(n)) this.lapsedCcrSignIns.add(e);
    else this.lapsedCcrSignIns.delete(e);
    if ((t.status === 401 || t.status === 403) && !l.has(n) && n !== "mcp_unauthorized_no_token") this.uncodedCcrRefusals.add(e);
    else this.uncodedCcrRefusals.delete(e);
  }
  lapsedSignInKey(e) {
    return this.lapsedCcrSignIns.has(e) ? e : void 0;
  }
  restoreLapsed(e, t) {
    if (e === t) this.lapsedCcrSignIns.add(t);
  }
  putCcrSessionTicket(e, t) {
    t.delete(import_chunk_kec02mj3.Lkt);
    let n = e ? this.ccrTicketSource?.sessionTicketFor(t.get("Authorization") ?? void 0) : void 0;
    if (n !== void 0) t.set(import_chunk_kec02mj3.Lkt, n);
  }
  putCcrMemoryCallHeaders(e) {
    for (let [t, n] of Object.entries(this.ccrMemoryCallHeaders?.() ?? {})) e.set(t, n);
  }
  noteToolPortMarks(e, t) {
    if (t.headers.get("x-ccr-tool-container-host-draining") === "1") if (this.urlsOnDrainingHosts.add(String(e)), t.headers.get("x-ccr-tool-container-stops-soon") === "1") this.urlsOfContainersThatStopSoon.add(String(e));
    else this.urlsOfContainersThatStopSoon.delete(String(e));
    let n = t.headers.get("x-ccr-tool-container-restart");
    if (n === "replaced" || n === "restarted" && !this.containerRestartsByUrl.has(String(e))) this.containerRestartsByUrl.set(String(e), n);
  }
  forgetListings() {
    this.toolLists.clear(), this.resourceLists.clear(), this.resourceTemplateLists.clear(), this.commandLists.clear();
  }
}
function td() {
  let e = (0, import_chunk_qdcbcsg7.mt)();
  if (e.connectionCache === null) e.connectionCache = new u(), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.connections), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.settledCachedDialFailures), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.refusedCachedRows), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.lapsedCcrSignIns), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.removedNames), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.uncodedCcrRefusals), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.urlsOnDrainingHosts), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.urlsOfContainersThatStopSoon), (0, import_chunk_jk26f2gn.f$)(e.connectionCache.containerRestartsByUrl);
  return e.connectionCache;
}
function oal(e, t, n, r) {
  function i(...o) {
    let s = t(...o);
    return g(n(), s, () => {
      let d = r(() => e(...o), () => n().get(s) === d, o);
      return d;
    });
  }
  let c = { get: (o) => n().get(o), set(o, s) {
    return n().set(o, s), c;
  }, has: (o) => n().has(o), delete: (o) => n().delete(o), clear: () => n().clear() };
  return Object.assign(i, { cache: c });
}
function kfo(e, t, n, r) {
  function i(...o) {
    let [s] = o;
    return g(n(), t(...o), () => s.type === "connected" && s.capabilities?.[r] ? (0, import_chunk_vs7p9j3v.Pfo)(s, () => e(...o)) : e(...o));
  }
  return Object.assign(i, { cache: { get: (o) => n().peek(o), set: (o, s) => void n().set(o, s), has: (o) => n().has(o), delete: (o) => n().delete(o), clear: () => n().clear(), size: () => n().size } });
}
function g(e, t, n) {
  let r = e.get(t);
  if (r !== void 0) return r;
  let i = n();
  return e.set(t, i), i;
}
