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
var chunk_vhpt9t1j_exports = {};
__export(chunk_vhpt9t1j_exports, {
  Dil: () => Dil,
  Hil: () => Hil,
  Px: () => Px,
  Won: () => Won,
  e_r: () => e_r,
  hAe: () => hAe,
  ofo: () => ofo,
  rfo: () => rfo,
  zus: () => zus
});
module.exports = __toCommonJS(chunk_vhpt9t1j_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_5qhr9bm2 = require("/$bunfs/root/chunk-5qhr9bm2.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_0a69wnzr = require("/$bunfs/root/chunk-0a69wnzr.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_path = require("path");
class d {
  loaderSide = null;
  register(e) {
    this.loaderSide = e;
  }
}
var a = new d();
function Hil(e) {
  a.register(e);
}
function rfo() {
  let e = a.loaderSide;
  if (!e) throw Error("MCP skill builders not registered \u2014 loadSkillsDir.ts has not been evaluated yet");
  return e;
}
var hAe = (e, r, t) => ({ frontmatterAsWritten: e, ...t !== void 0 && { frontmatterProblem: t }, ...r !== void 0 && (0, import_path.isAbsolute)(r) && { path: r } }), Dil = (e) => ({ frontmatterAsWritten: {}, frontmatterProblem: e });
function Won(e, r) {
  let t = { copies: /* @__PURE__ */ new Map(), hasCollided: false }, { frontmatterAsWritten: o, asWrittenProblem: n } = e, s, c;
  try {
    s = m(o, t), c = n && l(n);
  } catch {
    return hAe({}, r, "could not be scrubbed");
  }
  return t.hasCollided ? hAe({}, r, "has two keys that read the same once scrubbed") : hAe(s, r, c);
}
var l = (e) => (0, import_chunk_4vsz8a99.Fdn)((0, import_chunk_kx2fp6pc.N4t)(e).replace(/[\u2028\u2029]/g, ""));
function p(e, r) {
  if (typeof e === "string") return l(e);
  if (typeof e !== "object" || e === null) return e;
  let t = r.copies.get(e);
  if (t !== void 0) return t;
  if (!Array.isArray(e)) return m(e, r);
  let o = [];
  r.copies.set(e, o);
  for (let n of e) o.push(p(n, r));
  return o;
}
function m(e, r) {
  let t = {};
  r.copies.set(e, t);
  for (let [o, n] of Object.entries(e)) {
    let s = l(o);
    r.hasCollided ||= Object.hasOwn(t, s), Object.defineProperty(t, s, { value: p(n, r), enumerable: true, writable: true, configurable: true });
  }
  return t;
}
var u = /* @__PURE__ */ new Map([["/v1/design/mcp", "1537e6f4-1590-5ce6-82db-7db8b963e346"], [import_chunk_qdcbcsg7.zct, import_chunk_qdcbcsg7.Pze], ["/v1/claude/test/mcp", "dbe91a49-efd5-52c4-b7b8-79dccffe42c5"]]), S = /* @__PURE__ */ new Map([["https://platform.claude.com/docs/mcp", "b9b3f5f5-35c9-4e39-8913-eeeb74714ffa"]]);
function zus(e) {
  let r = e.type === "http" ? URL.parse(e.url) : null;
  if (r === null || r.href !== `https://${r.hostname}${r.pathname}`) return;
  return (0, import_chunk_2mwshd9r.iRt)(r.hostname) ? u.get(r.pathname) : S.get(r.href);
}
function Px(e, r = "") {
  try {
    let { name: t, config: o } = e, n = (0, import_chunk_qdcbcsg7.Pl)(o);
    return (0, import_chunk_1ek4hhs6.Xsn)({ serverName: t, toolName: r, addressRegistryId: zus(o), scope: o.scope, source: (0, import_chunk_ts09sys6.XH)(t, o), serverType: o.type ?? "stdio", serverId: (0, import_chunk_qyhf6bts.eh)(o), ...(0, import_chunk_5qhr9bm2.Bpe)(e), pluginSource: o.pluginSource, servedForPlugin: (0, import_chunk_1ek4hhs6.myr)(o), ...n && { cliOwned: true }, ...(0, import_chunk_865at33z.omn)(e, r) && { accountMemoryServer: true }, ...(n && t === import_chunk_qdcbcsg7.ri || (0, import_chunk_865at33z.oD)(o)) && { artifactsServer: true }, ...(0, import_chunk_prn6030k._b)(t) && (0, import_chunk_865at33z.uI)(o) && { hostedChromeServer: true }, ...o.type === "sdk" && (0, import_chunk_ts09sys6.P0)(o) && { dataFlowServerGiven: o.dataFlowServer }, ..."url" in o && (0, import_chunk_3jjr3wje.nL)(o.url) && { anthropicAddress: true } }) ?? { type: "unknown" };
  } catch (t) {
    return (0, import_chunk_k449cc64.i)(t), { type: "unknown" };
  }
}
async function ofo(e, r, t) {
  let o = r.isolationLatch, n = (0, import_chunk_f9x2f6cx.en)();
  if (n.connectorDownloadsInReach() === "found" || n.connectorDataFromEarlierDownload()) (0, import_chunk_4chf71g6.lho)(o);
  if (o !== void 0 && o.current !== "connectors" && (0, import_chunk_4chf71g6.are)()) {
    let s = (0, import_chunk_4chf71g6.rSr)(e, r, o, t);
    if (s !== null && s !== "connectors") return (0, import_chunk_4chf71g6.oSr)(e, r, t, await (0, import_chunk_0a69wnzr.gkt)((0, import_chunk_f9x2f6cx.en)()));
  }
  return (0, import_chunk_4chf71g6.oSr)(e, r, t);
}
async function e_r(e) {
  let r = e.isolationLatch;
  if (r !== void 0 && r.current !== "connectors" && (0, import_chunk_4chf71g6.are)()) return (0, import_chunk_0a69wnzr.gkt)((0, import_chunk_f9x2f6cx.en)());
  return;
}
