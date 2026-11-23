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
var chunk_cdfjrfzp_exports = {};
__export(chunk_cdfjrfzp_exports, {
  A$a: () => A$a,
  C$a: () => C$a,
  D9o: () => D9o,
  E$a: () => E$a,
  Iri: () => Iri,
  L9o: () => L9o,
  Mri: () => Mri,
  Ori: () => Ori,
  Pri: () => Pri,
  R$a: () => R$a,
  S$a: () => S$a,
  T$a: () => T$a,
  _$a: () => _$a,
  b$a: () => b$a,
  c$a: () => c$a,
  d$a: () => d$a,
  e0t: () => e0t,
  f$a: () => f$a,
  g$a: () => g$a,
  h$a: () => h$a,
  k$a: () => k$a,
  l$a: () => l$a,
  m$a: () => m$a,
  p$a: () => p$a,
  sRn: () => sRn,
  u$a: () => u$a,
  v$a: () => v$a,
  w$a: () => w$a,
  x$a: () => x$a,
  y$a: () => y$a,
  yYr: () => yYr
});
module.exports = __toCommonJS(chunk_cdfjrfzp_exports);
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_52cad0n6 = require("/$bunfs/root/chunk-52cad0n6.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_crypto = require("crypto");
var k = 512, w = /* @__PURE__ */ new Set(["find", "get_page_text", "read_page", "read_console_messages", "read_network_requests"]), b = /* @__PURE__ */ new Set(["screenshot", "zoom"]);
function D9o(e, n) {
  return w.has(e) || e === "computer" && b.has(n.action);
}
function l$a(e, n) {
  return D9o(e, n) || e === "computer" && n.action === "wait";
}
var O = /* @__PURE__ */ new Set(["left_click", "right_click", "double_click", "triple_click", "left_click_drag", "type"]);
function R(e) {
  return e === "Return" || e === "Enter";
}
function Pri(e, n) {
  return e === "form_input" || e === "javascript_tool" || e === "computer" && (O.has(n.action) || n.action === "key" && R(n.text)) ? (0, import_crypto.createHash)("sha256").update(`${e} ${(0, import_chunk_w578pjby._)(n)}`).digest("hex").slice(0, 16) : void 0;
}
function d$a(e, n) {
  return e === "form_input" || e === "javascript_tool" || e === "computer" && (n.action === "type" || n.action === "key");
}
var s = new import_chunk_pzzqg6s3.ze(() => /* @__PURE__ */ new Map());
function l(e, n) {
  let t = s.of(e), o = t.get(n);
  if (o !== void 0) return o;
  let r = {};
  if (t.set(n, r), t.size > k) t.delete(t.keys().next().value ?? n);
  return r;
}
function c$a(e, n, t, o) {
  l(e, n).read = { tabId: t, site: o };
}
function u$a(e, n) {
  l(e, n).readTried = true;
}
function f$a(e, n, t) {
  let o = l(e, n);
  if (o.side !== "skipped") o.side = t;
}
function p$a(e, n) {
  l(e, n).opensAllowedSite = true;
}
function m$a(e, n) {
  return s.peek(e)?.get(n)?.opensAllowedSite === true;
}
function Ori(e, n) {
  let t = s.peek(e)?.get(n);
  return t?.opensAllowedSite === true && t.sent?.siteOnClassifierAllow !== void 0 && t.sent.askedAfterSend !== true;
}
function h$a(e, n) {
  l(e, n.toolUseId).sent = { tabId: typeof n.input.tabId === "number" ? n.input.tabId : void 0, judgedByTabSite: n.judgedByTabSite, onlyLooks: D9o(n.toolName, n.input), act: Pri(n.toolName, n.input), siteOnClassifierAllow: n.siteOnClassifierAllow };
}
function m(e, n) {
  let t = s.peek(e)?.get(n)?.sent;
  if (t !== void 0) t.answered = true;
}
function g(e, n) {
  let t = s.peek(e)?.get(n)?.sent;
  if (t !== void 0) t.askedAfterSend = true;
}
function g$a(e, n) {
  return s.peek(e)?.get(n)?.readTried === true;
}
function L9o(e, n) {
  return s.peek(e)?.get(n)?.side;
}
function _$a(e, n) {
  let t = s.peek(e)?.get(n)?.sent;
  return t?.onlyLooks === true && t.askedAfterSend !== true && t.tabId !== void 0 && t.siteOnClassifierAllow !== void 0 ? { tabId: t.tabId, site: t.siteOnClassifierAllow } : void 0;
}
function f(e) {
  return e?.flatMap(({ message: n }) => Array.isArray(n.content) ? n.content.flatMap((t) => t.type === "tool_use" ? [t.id] : []) : []);
}
function y$a(e, n) {
  return n === void 0 || f(e)?.some((t) => n.has(t)) !== false;
}
function S$a(e, n) {
  return f(e)?.[0] ?? n;
}
function b$a(e, n) {
  let t = s.peek(e);
  return f(n)?.map((o) => t?.get(o)?.sent?.act).findLast((o) => o !== void 0);
}
function w$a(e, n, t) {
  let o = s.peek(e), r = f(n), d = r?.[0], a = d === void 0 ? void 0 : o?.get(d)?.read;
  if (a === void 0 || a.tabId !== t) return;
  let { site: u } = a, p = "reads";
  for (let y of r ?? []) {
    let i = o?.get(y)?.sent;
    if (i === void 0 || !i.judgedByTabSite || i.answered !== true || i.askedAfterSend === true || i.tabId !== t || i.siteOnClassifierAllow !== u) return;
    if (!i.onlyLooks) p = "acts";
  }
  return { site: u, after: p };
}
var k$a = "claudecode/chromeSite", Iri = "claudecode/chromeLateCardSite", C = 253, c = /^[a-z0-9._-]+$/, x = /^\[[0-9a-f:.]+\]$/;
function sRn(e) {
  return e.length <= C && c.test(e);
}
function Mri(e) {
  if (typeof e !== "string") return false;
  let n = (0, import_chunk_52cad0n6.bUe)(e);
  return sRn(n) && (n === e || S(e.slice(n.length + 1)));
}
var E$a = new import_chunk_pzzqg6s3.ze(() => /* @__PURE__ */ new Map());
function v$a(e, n) {
  if (Mri(n)) (0, import_chunk_929j4hj9.Fi)().resolvedHostByToolUseId.set(e, { host: n });
}
function T$a(e, n) {
  if (e.name !== import_chunk_prn6030k.Xi || !(0, import_chunk_865at33z.uI)(e.config) || !(0, import_chunk_ma3kja9f.T)(n) || n.chrome_site === void 0 && n.chrome_site_port === void 0) return;
  let { chrome_site: t, chrome_site_port: o } = n;
  if (typeof t !== "string" || t.length > C || !(c.test(t) || x.test(t)) || h(`https://${t}`) !== t || o !== void 0 && !S(o)) return { kind: "unreadable" };
  return { kind: "named", site: o === void 0 ? t : `${t}:${o}`, offersGrant: o === void 0 && c.test(t) && n.chrome_offers_site_grant === "true" };
}
function C$a(e) {
  if (e.toolUseId !== void 0) m(e.session, e.toolUseId);
}
function A$a(e, n) {
  if (e.name === import_chunk_prn6030k.Xi && (0, import_chunk_865at33z.uI)(e.config) && n.toolUseId !== void 0) g(n.session, n.toolUseId);
}
function R$a(e, n) {
  let t = (0, import_chunk_52cad0n6.Fue)(n);
  if (e.kind !== "unreadable") {
    let o = (0, import_chunk_52cad0n6.yTe)(t, e.site);
    return o && { ...o, decideLocation: "pre-ask" };
  }
  if (t.denied.size === 0) return;
  return { behavior: "deny", message: "Claude in Chrome could not tell which site this call would act on, so it could not check the sites that are denied.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: unreadable site", classifierApprovable: false }, decideLocation: "pre-ask" };
}
function x$a(e, n, t, o) {
  if (e.kind !== "named") return;
  let { site: r } = e, d = E(n, t).some((u) => h(u) !== r), a = !d && e.offersGrant && !(0, import_chunk_drk264d0.Ey)(o) && o.forRemoteExecution !== true;
  return { behavior: "ask", message: "Claude in Chrome requires permission.", decisionReason: { type: "other", reason: d ? `Claude in Chrome action on ${r}, which may also leave that site` : `Claude in Chrome action on ${r}` }, ...a ? { suggestions: [{ type: "addRules", rules: [{ toolName: import_chunk_1w26p6p9.g7, ruleContent: r }], behavior: "allow", destination: "session" }] } : { suppressAlwaysAllowRule: true } };
}
function S(e) {
  return typeof e === "string" && /^[0-9]{1,5}$/.test(e) && String(Number(e)) === e && Number(e) <= 65535;
}
function h(e) {
  if (typeof e !== "string" || (0, import_chunk_52cad0n6.yJt)(e)) return;
  let n = (0, import_chunk_52cad0n6.IMe)(e);
  return n && (0, import_chunk_52cad0n6.B$)(n.host);
}
function E(e, n) {
  if (e === "navigate") return [n.url];
  if (e !== "browser_batch" || !Array.isArray(n.actions)) return [];
  return n.actions.flatMap((t) => (0, import_chunk_ma3kja9f.T)(t) && t.name === "navigate" ? [(0, import_chunk_ma3kja9f.T)(t.input) ? t.input.url : void 0] : []);
}
var e0t = 2e3, yYr = 15e3;
