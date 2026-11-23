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
var chunk_5p1tkxex_exports = {};
__export(chunk_5p1tkxex_exports, {
  A1a: () => A1a,
  A9o: () => A9o,
  C1a: () => C1a,
  C9o: () => C9o,
  E1a: () => E1a,
  Gni: () => Gni,
  J8r: () => J8r,
  JAn: () => JAn,
  P1a: () => P1a,
  QDt: () => QDt,
  R1a: () => R1a,
  T1a: () => T1a,
  X8r: () => X8r,
  XAn: () => XAn,
  Y8r: () => Y8r,
  bor: () => bor,
  k1a: () => k1a,
  q8r: () => q8r,
  v1a: () => v1a,
  wor: () => wor,
  x1a: () => x1a,
  zni: () => zni
});
module.exports = __toCommonJS(chunk_5p1tkxex_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_vwr252r7 = require("/$bunfs/root/chunk-vwr252r7.js");
var bor = "[Artifact comment sent to Claude]", wor = "Artifact: ", p = "Comment thread: ", c = "Sent to Claude at: ", q8r = "[Artifact comments sent to Claude]", h = "Comment threads: ", Gni = "desktop_app", L = 5e3, w = 100, I = 32, O = 256, E = 32, R = "tengu_madrone_spindle_corbel";
function Y8r() {
  return (0, import_chunk_865at33z.b)(R, false) === true;
}
var f = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, k = /^[1-9][0-9]{0,5}$/;
function C9o(e) {
  return e != null && f.test(e);
}
function u(e, t, n) {
  return `${e.toLowerCase()}:${t.toLowerCase()}:${n}`;
}
function A(e, t) {
  return `${e.toLowerCase()}:*:${t}`;
}
function XAn(e) {
  let t = JAn(e);
  return t !== null && (t.startsWith(bor) || t.startsWith(q8r));
}
function QDt(e) {
  if (!e.startsWith(bor)) return null;
  let t = e.split(`
`, 4);
  if (t.length < 4 || t[0] !== bor) return null;
  let n = t[1], o = t[2], s = t[3];
  if (!n.startsWith(wor) || !o.startsWith(p) || !s.startsWith(c)) return null;
  let i = (0, import_chunk_r8478wtb.Dn)(n.slice(wor.length).trim())?.slug, l = o.slice(p.length).trim(), r = s.slice(c.length);
  if (i === void 0 || (0, import_chunk_mzmcvr6c.ht)(l) === null || !f.test(r)) return null;
  return { slug: i, threadId: l, gestureAt: r };
}
function _(e) {
  if (!e.startsWith(q8r)) return null;
  let t = e.split(`
`, 4);
  if (t.length < 4 || t[0] !== q8r) return null;
  let n = t[1], o = t[2], s = t[3];
  if (!n.startsWith(wor) || !o.startsWith(h) || !s.startsWith(c)) return null;
  let i = (0, import_chunk_r8478wtb.Dn)(n.slice(wor.length).trim())?.slug, l = o.slice(h.length), r = s.slice(c.length);
  if (i === void 0 || !k.test(l) || !f.test(r)) return null;
  return { slug: i, count: Number(l), gestureAt: r };
}
function C(e) {
  let t = QDt(e);
  if (t !== null) return u(t.slug, t.threadId, t.gestureAt);
  let n = _(e);
  return n === null ? null : A(n.slug, n.gestureAt);
}
var x = /\[Artifact comments? sent to Claude\][^\n]{0,200}\nArtifact:[ \t]*(\S+)/g, v = /(?:in artifact ([0-9a-f-]{36}) \u2014 [^\n[\]]{0,200}?; )?fenced as page-quote-|\[Sent to Claude from an artifact(?:'|&#39;)s page\](?:\nArtifact: ([^\s[]+))?/g, T = "resolve it yourself only if I ask you to in this session. If you have no tool that can reply in the thread, or it cannot post your reply, answer here in the session instead.";
function X8r(e) {
  let t = y(e).join(`
`);
  for (let [, n] of t.matchAll(x)) {
    let o = (0, import_chunk_r8478wtb.Dn)(n ?? "")?.slug;
    if (o !== void 0) (0, import_chunk_qtg8rez4.jkr)(o);
  }
  g(e, void 0);
}
function y(e) {
  return Array.isArray(e) ? e.map((t) => JAn([t]) ?? "") : [JAn(e) ?? ""];
}
function g(e, t) {
  let n = y(e);
  for (let [o, s] of n.entries()) {
    let i = o === n.length - 1 ? t : void 0;
    for (let [, r, d] of s.matchAll(v)) (0, import_chunk_qtg8rez4.Zys)(r ?? (0, import_chunk_r8478wtb.Dn)(d ?? "")?.slug ?? i);
    let l = s.trimEnd().endsWith(T);
    for (let r of s.matchAll(x)) if (r[0].startsWith(bor) && !(l && r.index === 0)) (0, import_chunk_qtg8rez4.Zys)((0, import_chunk_r8478wtb.Dn)(r[1] ?? "")?.slug);
  }
}
function k1a(e) {
  if (e.seededSummon !== true) return X8r(e.value), null;
  let t = JAn(e.value), n = t === null ? null : C(t);
  if (t === null || n === null) return X8r(e.value), null;
  let o = QDt(t);
  if (o !== null) (0, import_chunk_qtg8rez4.Jys)(o.slug, o.threadId, o.gestureAt);
  else {
    let s = _(t);
    if (s !== null) (0, import_chunk_qtg8rez4.i2e)(s.slug);
  }
  if (g(e.value, o?.slug), e.shouldQuery === false) return null;
  if (D([n]), o !== null) N(n, o);
  return n;
}
function E1a(e) {
  if (e.seededSummon !== true) return X8r(e.value), null;
  if (e.shouldQuery === false) return null;
  let t = JAn(e.value), n = t === null ? null : C(t);
  if (t === null || n === null) return null;
  let o = QDt(t);
  if (o !== null) (0, import_chunk_qtg8rez4.Jys)(o.slug, o.threadId, o.gestureAt);
  return g(e.value, o?.slug), D([n]), n;
}
function N(e, t) {
  let { open: n } = (0, import_chunk_0rkwgmhx.se)().summonSeeds;
  n.delete(e), n.set(e, { slug: t.slug.toLowerCase(), threadId: t.threadId.toLowerCase(), gestureAt: t.gestureAt });
  while (n.size > E) {
    let o = n.keys().next().value;
    if (o === void 0) break;
    n.delete(o);
  }
}
function v1a(e, t, n) {
  let { open: o, settled: s } = (0, import_chunk_0rkwgmhx.se)().summonSeeds, i = e.toLowerCase(), l = t.toLowerCase();
  for (let [d, a] of o) if (a.slug === i && a.threadId === l) o.delete(d);
  let r = n == null ? null : QDt(n);
  if (r !== null && r.slug.toLowerCase() === i && r.threadId.toLowerCase() === l) {
    let d = u(r.slug, r.threadId, r.gestureAt);
    s.delete(d), s.add(d);
    while (s.size > E) {
      let a = s.values().next().value;
      if (a === void 0) break;
      s.delete(a);
    }
  }
}
function T1a(e) {
  return (0, import_chunk_0rkwgmhx.se)().summonSeeds.settled.has(u(e.slug, e.threadId, e.gestureAt));
}
function C1a(e) {
  return (0, import_chunk_0rkwgmhx.se)().summonSeeds.open.get(u(e.slug, e.threadId, e.gestureAt));
}
function A1a(e) {
  return e.declared === true && !e.isRemoteIO && e.isSynthetic !== true && !e.peerDelivered && e.inboundOrigin === void 0 && (e.clientPlatform === void 0 || e.clientPlatform === Gni);
}
function R1a(e, t) {
  let n = [];
  for (let o of t) for (let s of (0, import_chunk_vwr252r7.Git)(o)) if (C9o(s.toClaudeAt)) n.push(u(e, o.id, s.toClaudeAt));
  return M((0, import_chunk_0rkwgmhx.se)().summonSeeds.readClaims, n, O), n.length;
}
function M(e, t, n) {
  for (let o of t) e.delete(o), e.add(o);
  while (e.size > n) {
    let o = e.values().next().value;
    if (o === void 0) break;
    e.delete(o);
  }
}
function D(e) {
  M((0, import_chunk_0rkwgmhx.se)().summonSeeds.claims, e, I);
}
var S = { hostSeeded: true };
function J8r(e, t, n, o = S) {
  return (0, import_chunk_0rkwgmhx.se)().summonSeeds.readClaims.has(u(e, t, n)) || o.hostSeeded && A9o(e, t, n);
}
function A9o(e, t, n) {
  let { claims: o } = (0, import_chunk_0rkwgmhx.se)().summonSeeds;
  return o.has(u(e, t, n)) || o.has(A(e, n));
}
function m(e, t, n, o = S) {
  return n.length > 0 && n.every((s) => J8r(e, t, s, o));
}
function zni(e, t, n, o = S) {
  if (!m(e, t, n, o)) return false;
  let { claims: s, readClaims: i } = (0, import_chunk_0rkwgmhx.se)().summonSeeds;
  for (let l of n) if (i.delete(u(e, t, l)), o.hostSeeded) s.delete(u(e, t, l));
  return true;
}
function x1a(e, t, n) {
  let { readClaims: o } = (0, import_chunk_0rkwgmhx.se)().summonSeeds;
  for (let s of n) o.delete(u(e, t, s));
}
async function P1a(e, t, n, o) {
  let s = (0, import_chunk_0rkwgmhx.se)().summonSeeds.graceMsOverride ?? L, i = Date.now() + s;
  while (Date.now() < i) {
    if (o.aborted) return false;
    if (m(e, t, n)) return true;
    await (0, import_chunk_5appeerh.K)(Math.min(w, Math.max(1, i - Date.now())), o);
  }
  return m(e, t, n);
}
function JAn(e) {
  if (typeof e === "string") return e;
  if (Array.isArray(e)) {
    let t = e.at(-1);
    if (t?.type === "text" && typeof t.text === "string") return t.text;
  }
  return null;
}
