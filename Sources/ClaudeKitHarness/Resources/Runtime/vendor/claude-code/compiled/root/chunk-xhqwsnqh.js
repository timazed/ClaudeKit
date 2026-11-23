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
var chunk_xhqwsnqh_exports = {};
__export(chunk_xhqwsnqh_exports, {
  $V: () => $V,
  B2n: () => B2n,
  JAr: () => JAr,
  UV: () => UV,
  W2n: () => W2n,
  ZG: () => ZG,
  ZTo: () => ZTo,
  ZTs: () => ZTs,
  _fn: () => _fn,
  eCo: () => eCo,
  eCs: () => eCs,
  hX: () => hX,
  iAl: () => iAl,
  iCs: () => iCs,
  iVi: () => iVi,
  nAl: () => nAl,
  nCs: () => nCs,
  nzt: () => nzt,
  oAl: () => oAl,
  oCs: () => oCs,
  oNe: () => oNe,
  rAl: () => rAl,
  rCs: () => rCs,
  sAl: () => sAl,
  sCs: () => sCs,
  tCs: () => tCs,
  tzt: () => tzt,
  xxe: () => xxe,
  yfn: () => yfn,
  zwe: () => zwe
});
module.exports = __toCommonJS(chunk_xhqwsnqh_exports);
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_q8sdrdma = require("/$bunfs/root/chunk-q8sdrdma.js");
var import_path = require("path");
function u(e) {
  let t = (0, import_chunk_sah8dzn4.zm)(e), n = URL.parse(e);
  if (n === null || !/^(?:http|ws)s?:$/.test(n.protocol)) return t;
  let r = `${n.protocol}//${n.host}`;
  return t === import_chunk_sah8dzn4.YA ? r : r + n.pathname.replace(/%7B/g, "{").replace(/%7D/g, "}");
}
function P(e) {
  let t = e.indexOf("${"), n = URL.parse(`${e.slice(0, t)}@slot.invalid`);
  if (t === -1 || n !== null && n.host !== "slot.invalid") return u(e);
  let r = e.lastIndexOf("@"), [o = ""] = /^(?:http|ws)s?:\/\//i.exec(e) ?? [], i = r === -1 ? e : o + e.slice(r + 1);
  return r > t ? import_chunk_sah8dzn4.YA : (0, import_chunk_sah8dzn4.zm)(i.replace(/[?#].*$/s, ""));
}
function B2n(e, t) {
  return { path: (0, import_path.isAbsolute)(t) ? (0, import_path.relative)(e, t).replaceAll(import_path.sep, "/") : t.slice(t.indexOf("/") + 1) };
}
function JAr(e, t, n) {
  let r = { event: e, ...t !== void 0 && { matcher: t } };
  switch (n.type) {
    case "command":
      return { ...r, type: n.type, command: n.command, ...n.args !== void 0 && { args: n.args } };
    case "script":
      return { ...r, type: "command", command: n.file ?? n.script ?? "", args: [] };
    case "http":
      return { ...r, type: n.type, url: u(n.url) };
    case "prompt":
    case "agent":
      return { ...r, type: n.type, prompt: n.prompt };
    case "mcp_tool":
      return { ...r, type: n.type, server: n.server, tool: n.tool };
  }
}
function nAl(e = {}) {
  return Object.entries(e).flatMap(([t, n]) => n.flatMap(({ matcher: r, hooks: o }) => o.map((i) => JAr(t, r, i))));
}
function ZTo(e) {
  let t = /^https?:\/\//.test(e) ? u(e) : (0, import_chunk_sah8dzn4.zm)(e).replace(/^(?!\.\/)/, "./");
  return { name: t, type: "mcpb", target: t };
}
function ZTs(e, t) {
  if ("command" in t) return { name: e, type: "stdio", target: t.command, ...t.args !== void 0 && { args: t.args } };
  return { name: e, type: t.type === "sse" || t.type === "ws" ? t.type : "http", target: "url" in t ? P(t.url) : "" };
}
function eCs(e, t) {
  return { name: e, command: t.command, ...t.args !== void 0 && { args: t.args } };
}
function tCs(e) {
  return { name: e.name, command: e.command };
}
var v = 6e4, tzt = (e) => e.isBuiltin !== true, h = (e) => e.some((t) => t.modulePath !== void 0);
function hX() {
  let e = (0, import_chunk_865at33z.ce)();
  return e.hookRegistrationInFlight ?? (e.hookRegistrationOwed ? e.hooksLoadAtStartup : void 0) ?? e.setupBeforeHooksLoad;
}
var w = () => (0, import_chunk_865at33z.ce)().neverNarrowed, xxe = (e) => typeof (0, import_chunk_865at33z.ce)().pluginVerdicts.get(e.source) === "string", oNe = (e) => e.filter((t) => !xxe(t)), W2n = (e, t) => t !== void 0 && !e.includes(`|${t}`) && e.map(import_chunk_mgntjepj.Lp).includes((0, import_chunk_mgntjepj.Lp)(t));
function $V(e, t, n) {
  let { pluginNarrowings: r, narrowedKeys: o } = (0, import_chunk_865at33z.ce)();
  return [...r.get(e)?.values() ?? []].every((i) => {
    let s = i[t];
    if (s === void 0 || w().has(e)) return true;
    let d = o.get(s) ?? new Set(s.map(import_chunk_wgyw76w5.di));
    return o.set(s, d), d.has((0, import_chunk_wgyw76w5.di)(n));
  });
}
function rAl(e, t) {
  return $V(e, "mcpServers", (0, import_chunk_865at33z.ce)().mcpEntriesListed.get((0, import_chunk_wgyw76w5.di)([e, t])));
}
function nCs(e) {
  let { source: t, hooksConfig: n, monitors: r } = e;
  return [...(0, import_chunk_865at33z.ce)().pluginNarrowings.get(t)?.values() ?? []].some((s) => s.hooks !== void 0 || s.monitors !== void 0) ? { ...e, hooksConfig: n && (0, import_chunk_khxw3ng0.er)(n, (s, d) => s?.map((a) => ({ ...a, hooks: a.hooks.filter((m) => $V(t, "hooks", JAr(d, a.matcher, m))) }))), monitors: r?.filter((s) => $V(t, "monitors", tCs(s))) } : e;
}
function oAl(e) {
  let { pluginNarrowings: t } = (0, import_chunk_865at33z.ce)();
  for (let [n, r] of t) {
    for (let o of r.keys()) if (e.get(n)?.includes(o) === false) r.delete(o);
    if (r.size === 0) t.delete(n);
  }
}
function zwe(e) {
  let { pluginVerdicts: t, pluginNarrowings: n } = (0, import_chunk_865at33z.ce)();
  return [...e === void 0 ? /* @__PURE__ */ new Set([...t.keys(), ...n.keys()]) : [e]].flatMap((o) => xxe({ source: o }) ? [(0, import_chunk_wgyw76w5.di)(o)] : [...n.get(o)?.values() ?? []].map(({ modules: i, ...s }) => s).filter((i) => Object.keys(i).length > 0).map((i) => (0, import_chunk_wgyw76w5.di)([o, i]))).sort().join(`
`);
}
var eCo = (e) => (0, import_chunk_865at33z.ce)().verdictRoots.get(e.source)?.has(e.path) === false, _fn = (e) => (0, import_chunk_865at33z.ce)().pluginVerdicts.has(e.source) && !eCo(e);
function p(e) {
  let { judgingNow: t, passSawNow: n } = (0, import_chunk_865at33z.ce)();
  return h(e) ? e.filter((r) => tzt(r) && !_fn(r) && !(n?.has(r.source) === true && t?.has(r.source) === false)) : [];
}
function rCs(e) {
  let t = p(e);
  return oNe(e).filter((n) => !t.includes(n));
}
var oCs = (e) => hX() === void 0 ? oNe(e) : rCs(e), sAl = (e) => (0, import_chunk_865at33z.ce)().hookSwapEpoch === 0 || (0, import_chunk_865at33z.ce)().partsBeingRebuilt > 0 ? rCs(e) : oCs(e), yfn = (e) => (0, import_chunk_865at33z.ce)().pluginVerdicts.size === 0 && (0, import_chunk_865at33z.ce)().pluginNarrowings.size === 0 ? e : { ...e, enabled: oNe(e.enabled).map(nCs) }, l = (e) => hX() !== void 0 && p(e.enabled).length > 0;
async function UV(e) {
  let t = setInterval(() => {
  }, v);
  try {
    return await e();
  } finally {
    clearInterval(t);
  }
}
async function c(e) {
  if (!e()) return;
  let t = (0, import_chunk_865at33z.ce)(), n = /* @__PURE__ */ new Set();
  await UV(async () => {
    for (let r = e() ? hX() : void 0; r !== void 0 && !n.has(r); r = e() ? hX() : void 0) {
      let o = r;
      await Promise.race([o.catch(() => {
      }).then(() => n.add(o)), t.verdictNoted.promise]);
    }
  });
}
var iVi = (e) => c(() => l(e)), iAl = (e, t) => c(() => t === void 0 ? !(0, import_chunk_865at33z.ce)().pluginVerdicts.has(e) : !_fn({ source: e, path: t }));
async function ZG(e) {
  let t = (0, import_chunk_865at33z.ce)();
  if (!(0, import_chunk_f9x2f6cx.Se)()) {
    if (l(e)) {
      if (t.listsBehindVerdict === void 0) t.listsBehindVerdict = { joined: Promise.withResolvers(), isJoining: false };
      else if (t.listsBehindVerdict.isJoining) t.listsBehindVerdict.isReadAhead = true;
    }
    return { ...e, enabled: oCs(e.enabled).map(nCs) };
  }
  return await iVi(e), yfn(e);
}
function sCs(e) {
  let t = (0, import_chunk_865at33z.ce)().listsBehindVerdict;
  if (t === void 0 || t.awaitedBy === e) return;
  return t.awaitedBy = e, (0, import_chunk_5appeerh.Tn)((0, import_chunk_5appeerh.me)(t.joined.promise, import_chunk_q8sdrdma.Gme), e, () => new import_chunk_jv7av99m.Ie()).catch(() => {
  });
}
function iCs() {
  let e = (0, import_chunk_865at33z.ce)();
  return hX() === void 0 && e.listsBehindVerdict === void 0 ? void 0 : c(() => hX() !== void 0).then(() => e.listsBehindVerdict && (0, import_chunk_5appeerh.me)(e.listsBehindVerdict.joined.promise, import_chunk_q8sdrdma.Gme));
}
function nzt() {
  let e = (0, import_chunk_865at33z.ce)().worktreeHooksRefused;
  return e.length === 0 ? void 0 : e.map(({ name: t, reason: n }) => `The WorktreeCreate hook of ${t} stayed out: ${n}.`).join(" ");
}
