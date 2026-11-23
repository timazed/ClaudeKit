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
var chunk_ag73x1p3_exports = {};
__export(chunk_ag73x1p3_exports, {
  SBa: () => SBa,
  bBa: () => bBa,
  kBa: () => kBa,
  usr: () => usr,
  wBa: () => wBa,
  yBa: () => yBa
});
module.exports = __toCommonJS(chunk_ag73x1p3_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_async_hooks = require("async_hooks");
var usr = /* @__PURE__ */ new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "EAI_AGAIN", "FailedToOpenSocket", "ERR_PROXY_TUNNEL"]), b = new import_async_hooks.AsyncLocalStorage();
function yBa(n, d, i, t) {
  return n === void 0 ? b.exit(i) : b.run({ tool: d, toolUseId: n, meta: t }, i);
}
var h = new import_async_hooks.AsyncLocalStorage();
function SBa(n, d) {
  return h.run(n, d);
}
function j(n, d, i) {
  let { params: t } = Object(n);
  return Object.assign({}, n, { params: Object.assign({}, t, { _meta: Object.assign({}, Object(t)._meta, i, { "claudecode/toolUseId": d }) }) });
}
function bBa(n) {
  let { method: d, params: i } = Object(n), t = Object(i)._meta?.["claudecode/toolUseId"];
  return d !== "tools/call" || typeof t !== "string" || (0, import_chunk_929j4hj9.fZ)(t) === t ? n : j(n, (0, import_chunk_929j4hj9.fZ)(t));
}
function wBa(n, d, i) {
  let t = { started: 0, ranNothing: [] }, c = n.send.bind(n);
  return n.send = (s, u) => {
    if (typeof s !== "object" || s === null || !("method" in s) || s.method !== "tools/call") return c(s, u);
    let R = ++t.started, o = "params" in s ? s.params : void 0, f = typeof o === "object" && o !== null && "_meta" in o ? o._meta : void 0, l = typeof f === "object" && f !== null && "claudecode/toolUseId" in f ? f["claudecode/toolUseId"] : void 0, p = l === void 0 ? b.getStore() : void 0, a = typeof l === "string" ? (0, import_chunk_929j4hj9.fZ)(l) : p !== void 0 && typeof o === "object" && o !== null && "name" in o && o.name === p.tool ? (0, import_chunk_929j4hj9.fZ)(p.toolUseId) : void 0, g = typeof l === "string" ? [...i].filter((e) => e.toolUseId !== void 0 && (0, import_chunk_929j4hj9.fZ)(e.toolUseId) === a) : [], S = typeof o === "object" && o !== null && "inputResponses" in o ? o.inputResponses : void 0, y = typeof S === "object" && S !== null ? Object.values(S).map((e) => typeof e === "object" && e !== null && "action" in e ? e.action : void 0) : [];
    for (let e of g) {
      if (e.toolUseId = a, e.ownSends !== void 0) e.ownSends.started++;
      e.sentDecline = g.length !== 1 ? void 0 : y.includes("decline") || !y.includes("accept") && e.sentDecline;
    }
    let r = g.length === 1 ? g[0]?.ownSends : void 0, I = a === void 0 || a === l ? s : j(s, a, p?.meta), m = h.getStore(), O = m?.sends === t && typeof o === "object" && o !== null && "name" in o && o.name === m.tool ? m.failed : void 0, { requestSignal: T } = Object(u), C = O === void 0 ? u : Object.assign({}, u, { requestSignal: T instanceof AbortSignal ? AbortSignal.any([T, O]) : O });
    return c(I, C).catch((e) => {
      if (usr.has((0, import_chunk_jv7av99m.w)(e) ?? "") || e instanceof Error && d(e) && !(0, import_chunk_m0xr8k74.IHi)(o)) {
        if (t.ranNothing.push(R), r !== void 0) r.ranNothing++;
      } else if (r !== void 0) r.failed = (r.failed ?? 0) + 1;
      throw e;
    });
  }, t;
}
function kBa(n, d, i) {
  if (i !== void 0 && i.started > 0) return i.ranNothing === i.started;
  if (n === void 0 || d === void 0) return false;
  let t = n.started - d;
  return t > 0 && (0, import_chunk_4smdap7r.U)(n.ranNothing, (c) => c > d) === t;
}
