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
var chunk_4mh8nmh5_exports = {};
__export(chunk_4mh8nmh5_exports, {
  Hit: () => Hit,
  KBt: () => KBt,
  Sl: () => Sl,
  T1n: () => T1n,
  bml: () => bml,
  ebr: () => ebr,
  hDi: () => hDi,
  kml: () => kml,
  mDi: () => mDi,
  ngo: () => ngo,
  pDi: () => pDi,
  rgo: () => rgo,
  v1n: () => v1n,
  wml: () => wml
});
module.exports = __toCommonJS(chunk_4mh8nmh5_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_jtppe9b0 = require("/$bunfs/root/chunk-jtppe9b0.js");
var import_chunk_4xgvg9z4 = require("/$bunfs/root/chunk-4xgvg9z4.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_crypto = require("crypto");
var import_crypto2 = require("crypto");
var v1n = "__SYSTEM_PROMPT_STATIC_BREAKPOINT__";
function T1n(e, n = import_chunk_xcgcdx61.bD) {
  let r = e.indexOf(n);
  while (r !== -1) {
    let o = r === 0 ? 0 : e.lastIndexOf(`
`, r - 1) + 1, p = e.indexOf(`
`, r), l = p === -1 ? e.length : p;
    if (e.slice(o, l).trim() === n) {
      let f = e.slice(0, o), A = e.slice(l);
      return [...f.trim() ? [f] : [], n, ...A.trim() ? [A] : []];
    }
    if (p === -1) break;
    r = e.indexOf(n, p + 1);
  }
  return [e];
}
function pDi(e) {
  if (!e.includes(v1n)) return [e];
  return T1n(e, v1n).filter((n) => n !== v1n);
}
function KBt(e, n) {
  return typeof e === "string" ? T1n(e) : Array.isArray(e) ? e : n;
}
function ebr(e, n, r) {
  let o = r ? e.indexOf(import_chunk_xcgcdx61.bD) : -1;
  if (o === -1) return [...e, ...O(n)];
  return [...e.slice(0, o), ...O(n.filter(([p]) => p === "shared")), ...e.slice(o), ...O(n.filter(([p]) => p === "session"))];
}
function O(e) {
  return e.flatMap(([, n]) => n ? [n] : []);
}
var F = "59cf53e54c78";
function j(e) {
  let n = e.find((o) => o.type === "user" && !o.isMeta);
  if (!n) return "";
  let r = n.message.content;
  if (typeof r === "string") return r;
  if (Array.isArray(r)) {
    let o = r.find((p) => p.type === "text");
    if (o && o.type === "text") return o.text;
  }
  return "";
}
function mDi(e, n) {
  let o = [4, 7, 20].map((f) => e[f] || "0").join(""), p = `${F}${o}${n}`;
  return (0, import_crypto2.createHash)("sha256").update(p).digest("hex").slice(0, 3);
}
function bml(e) {
  let n = j(e);
  return mDi(n, { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION);
}
function Sl(e) {
  return e;
}
var L = /* @__PURE__ */ new Set(["ti", "os", "sb", "he", "uf", "ap", "tk"]), R = 512;
function M(e) {
  let n = {};
  for (let [r, o] of Object.entries(e)) if (!L.has(r) && (typeof o === "string" || typeof o === "number" || typeof o === "boolean")) n[r] = o;
  return n;
}
var k = "You are Claude Code, Anthropic's official CLI for Claude.", B = "You are Claude Code, Anthropic's official CLI for Claude, running within the Claude Agent SDK.", v = "You are a Claude agent, built on Anthropic's Claude Agent SDK.", N = [k, B, v], I = new Set(N);
function ngo(e) {
  return I.has(e);
}
function rgo(e) {
  if ((0, import_chunk_zhr7rpv7.ve)() === "vertex") return k;
  if (e?.recorded !== void 0) return e.recorded;
  if (e?.isNonInteractive) {
    if (e.hasAppendSystemPrompt) return B;
    return v;
  }
  return k;
}
function wml(e, n, r) {
  let o = (0, import_chunk_865at33z.d4i)(r.fingerprint, r.agentContext, r.previousRequestId, r.promptId, r.turnOrigin, r.turnPosition, { attributionProject: (0, import_chunk_jtppe9b0._Di)(), responseBeforeCompaction: r.responseBeforeCompaction }), p = Sl([o, n, ...e].filter(Boolean));
  return J(p), p;
}
function kml(e, n) {
  let r = (0, import_chunk_865at33z.d4i)(n.fingerprint, n.agentContext, void 0, void 0, void 0, void 0, { ignoreEnvOptOut: n.forceAttributionHeader === true && !(0, import_chunk_865at33z.yM)(), attributionProject: (0, import_chunk_jtppe9b0._Di)() });
  if (!r) return e;
  return [{ type: "text", text: r }, ...e];
}
function J(e) {
  try {
    let [n] = hDi(e, { skipTelemetry: true }), r = n?.text;
    (0, import_chunk_y53wbr8a.a)("tengu_sysprompt_block", { length: r?.length ?? 0, hash: r ? (0, import_chunk_49zxha55.Ce)((0, import_crypto.createHash)("sha256").update(r).digest("hex")) : (0, import_chunk_78g0060s.S)("") });
  } catch (n) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(n), "system prompt block telemetry failed"));
  }
}
function hDi(e, n) {
  let r = (0, import_chunk_865at33z.QZ)(), o = e.findIndex((u) => u === import_chunk_xcgcdx61.bD);
  if (r && n?.skipGlobalCacheForSystemPrompt && o === -1) {
    if (!n?.skipTelemetry) (0, import_chunk_y53wbr8a.a)("tengu_sysprompt_using_tool_based_cache", { promptBlockCount: e.length });
    let u, c, C, b = [];
    for (let d of e) {
      if (!d) continue;
      if (d === import_chunk_xcgcdx61.bD) continue;
      if (d.startsWith(import_chunk_4xgvg9z4.qBt)) u = d;
      else if (I.has(d)) c = d;
      else if (d === import_chunk_4xgvg9z4.tbr) C = d;
      else b.push(d);
    }
    let y = [];
    if (u) y.push({ text: u, cacheScope: null });
    if (c) y.push({ text: c, cacheScope: "org" });
    if (C && u && c) y.push({ text: C, cacheScope: null });
    let g = b.join(`

`);
    if (g) y.push({ text: g, cacheScope: "org" });
    return y;
  }
  if (r) {
    if (o !== -1) {
      let u, c, C, b = [], y = [];
      for (let P = 0; P < e.length; P++) {
        let m = e[P];
        if (!m || m === import_chunk_xcgcdx61.bD) continue;
        if (m.startsWith(import_chunk_4xgvg9z4.qBt)) u = m;
        else if (I.has(m)) c = m;
        else if (m === import_chunk_4xgvg9z4.tbr) C = m;
        else if (P < o) b.push(m);
        else y.push(m);
      }
      let g = [];
      if (u) g.push({ text: u, cacheScope: null });
      if (c) g.push({ text: c, cacheScope: null });
      if (C && u && c) g.push({ text: C, cacheScope: null });
      let d = b.join(`

`), T = d ? pDi(d) : [];
      for (let P of T) g.push({ text: P, cacheScope: "global" });
      let E = y.join(`

`);
      if (E) g.push({ text: E, cacheScope: T.length > 1 ? null : "org" });
      if (!n?.skipTelemetry) (0, import_chunk_y53wbr8a.a)("tengu_sysprompt_boundary_found", { blockCount: g.length, staticBlockLength: d.length, dynamicBlockLength: E.length });
      return g;
    } else if (!n?.skipTelemetry) (0, import_chunk_y53wbr8a.a)("tengu_sysprompt_missing_boundary_marker", { promptBlockCount: e.length });
  }
  let p, l, f, A = [];
  for (let [u, c] of e.entries()) {
    if (!c || c === import_chunk_xcgcdx61.bD) continue;
    if (c.startsWith(import_chunk_4xgvg9z4.qBt)) p = c;
    else if (I.has(c)) l = c;
    else if (c === import_chunk_4xgvg9z4.tbr) f = c;
    else A.push(u < o ? pDi(c).join("") : c);
  }
  let x = [];
  if (p) x.push({ text: p, cacheScope: null });
  if (l) x.push({ text: l, cacheScope: "org" });
  if (f && p && l) x.push({ text: f, cacheScope: null });
  let h = A.join(`

`);
  if (h) x.push({ text: h, cacheScope: "org" });
  return x;
}
function Hit({ agentContext: e, servedSessionMode: n } = {}) {
  let r = {}, o = process.env.CLAUDE_CODE_EXTRA_METADATA;
  if (o) {
    let c = (0, import_chunk_0jve1fep.et)(o, false);
    if (c && typeof c === "object" && !Array.isArray(c)) r = M(c);
    else (0, import_chunk_w578pjby.t)(`CLAUDE_CODE_EXTRA_METADATA env var must be a JSON object, but was given ${o}`, { level: "error" });
  }
  let p = {}, l, f = (0, import_chunk_wtm85h0y.cD)(), A = (0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) && (0, import_chunk_zhr7rpv7.jn)() ? (0, import_chunk_865at33z.Adt)(e) : void 0, x = { ...l && { ti: l }, device_id: (0, import_chunk_865at33z.$1)(), account_uuid: (0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) && import_chunk_c203g5kd.s.CLAUDE_CODE_ACCOUNT_UUID || (0, import_chunk_865at33z.Sw)()?.accountUuid || (0, import_chunk_865at33z.Sn)()?.accountUuid || "", session_id: (0, import_chunk_f9x2f6cx.W)(), ...f && { parent_session_id: f }, ...A && { tk: A } }, h = { ...p, ...r, ...x };
  if ((Object.keys(r).length > 0 || Object.keys(p).length > 0) && (0, import_chunk_w578pjby._)(h).length > R) {
    if (h = { ...p, ...x }, (0, import_chunk_w578pjby._)(h).length > R) h = x;
  }
  return { user_id: (0, import_chunk_w578pjby._)(h) };
}
