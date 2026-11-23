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
var chunk_mgh1y10w_exports = {};
__export(chunk_mgh1y10w_exports, {
  Bqn: () => Bqn,
  Eqt: () => Eqt,
  X$l: () => X$l,
  Y$l: () => Y$l,
  Zta: () => Zta,
  cDo: () => cDo,
  e0r: () => e0r,
  gxt: () => gxt,
  hxt: () => hxt,
  oe: () => oe,
  q$l: () => q$l,
  v_n: () => v_n
});
module.exports = __toCommonJS(chunk_mgh1y10w_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var Eqt = 16384;
function Bqn(e, u) {
  if (typeof Bun > "u" || typeof Bun.ant?.CellSegmenter !== "function") throw Error("This runtime has no Bun.ant.CellSegmenter. Run Claude Code on the @anthropic-ai/bun-internal version pinned in package.json.");
  return new Bun.ant.CellSegmenter({ ambiguousIsNarrow: true, substitute: e, screen: u });
}
var m = /[\u093b\u093e-\u0940\u0949-\u094c\u0982\u09be-\u09c0\u09c7\u09c8\u09cb\u09cc\u09d7\u0a3e-\u0a40\u0abe-\u0ac0\u0ac9\u0acb\u0acc\u0b02\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd7\u0c01\u0c02\u0c41-\u0c44\u0c82\u0cbe\u0cc0-\u0cc4\u0cc7\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0d02\u0d3e-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c]/, e0r = /[\u17a4\u17d8\u261d\u26f9\u270c\u270d\u2e3a\u2e3b\u3248-\u324f\u{1f1e6}-\u{1f1ff}\u{1f3cb}\u{1f3cc}\u{1f574}\u{1f575}\u{1f590}\u{1f93b}\u{1f946}]/u, N = new RegExp(m.source.slice(0, -1) + e0r.source.slice(1), "u"), A = 8, x = /[\u200d\u{1f3fb}-\u{1f3ff}\u{e0020}-\u{e007f}]/u, p = 255, h = 4096, B = new RegExp("\\p{Cs}", "gu"), a, o, c = [], g = 0, T, d;
function q$l(e) {
  if (a === void 0) a = e, o = d = void 0;
}
function v_n(e) {
  return N.test(e) || !!a && x.test(e);
}
function Y$l(e) {
  return e.split(m).length - 1 > A ? m.exec(e)?.[0].codePointAt(0) : void 0;
}
function Zta(e, u) {
  return Math.max(Math.min(e.split(m).length - 1, A) + Number(u === 1 && e0r.test(e)), a && x.test(e) ? (a(e) ?? 0) - u : 0);
}
function hxt(e) {
  return v_n(e) ? C(e).extra : 0;
}
function X$l(e) {
  let { cells: u, count: t } = C(e), r = /* @__PURE__ */ new Map(), n = 0, s = 0;
  for (let i = 0; i < t; i++) {
    let l = u[2 * i], f = o.graphemes[l], b = e.indexOf(f, n);
    if (b === -1 || E(e.slice(n, b))) return;
    n = b + f.length, s += c[l], r.set(n, s);
  }
  return E(e.slice(n)) ? void 0 : r.set(e.length, s);
}
function E(e) {
  return e !== "" && Bun.stringWidth(e) > 0;
}
function gxt(e, u, t) {
  if (!v_n(e)) return Bun.sliceAnsi(e, u, t);
  let r = C(e), n = r.columns ??= _(r);
  return Bun.sliceAnsi(e, y(n, u), y(n, t));
}
function y({ ours: e, buns: u }, t) {
  return u[e.findIndex((r) => r >= t)] ?? u.at(-1) + t - e.at(-1);
}
function _({ cells: e, count: u }) {
  let t = [0], r = [0];
  for (let n = 0; n < u; n++) {
    let s = e[2 * n + 1] & p;
    if (s === p) s = Bun.stringWidth(o.graphemes[e[2 * n]]);
    r.push(r[n] + s), t.push(t[n] + s + c[e[2 * n]]);
  }
  return { ours: t, buns: r };
}
function C(e) {
  if (d?.text === e) return d;
  if (d) I();
  else queueMicrotask(I);
  if (!o) o = Bqn([]), c = [], g = 0;
  let u = (0, import_chunk_wbk1hf21.Dr)((0, import_chunk_7cfjrnwy.Cf)(e) ? e : e.replace(B, "\uDC00")), { cells: t, runs: r } = u.length > h ? S(u.length) : T ??= S(h), n = o.segment(u, t, r, false), s = 0;
  for (let i = 0; i < n; i++) {
    let l = t[2 * i];
    if (c[l] === void 0) {
      let f = o.graphemes[l];
      g += f.length, c[l] = Zta(f, t[2 * i + 1] & p);
    }
    s += c[l];
  }
  return d = { text: e, cells: t, count: n, extra: s };
}
function I() {
  if (d = void 0, g > Eqt) o = void 0, c = [];
}
function S(e) {
  return { cells: new Int32Array(2 * e), runs: new Int32Array(2 * e) };
}
var M = { ambiguousIsNarrow: true };
function oe(e) {
  return cDo(e) + hxt(e);
}
function cDo(e) {
  return Bun.stringWidth(e, M);
}
