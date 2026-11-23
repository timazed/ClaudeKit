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
var chunk_tp3c5q2s_exports = {};
__export(chunk_tp3c5q2s_exports, {
  A_n: () => A_n,
  Ft: () => Ft,
  Gqn: () => Gqn,
  Jb: () => Jb,
  Kee: () => Kee,
  Qa: () => Qa,
  Qe: () => Qe,
  Va: () => Va,
  XJe: () => XJe,
  Xb: () => Xb,
  hL: () => hL,
  kge: () => kge,
  nUl: () => nUl,
  nna: () => nna
});
module.exports = __toCommonJS(chunk_tp3c5q2s_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
function Xb(n) {
  return (0, import_chunk_kx2fp6pc.Yn)(XJe((0, import_chunk_7cfjrnwy.qy)(n))).replace(/ {2,}/g, " ").trim();
}
var g = /\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]|\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/g, p = 4;
function XJe(n) {
  let e = n;
  for (let t = 0; t < p; t++) {
    let r = e.replace(g, "");
    if (r === e) break;
    e = r;
  }
  return e;
}
function Ft(n, e = 160) {
  return kge(Xb(u(n, e)).normalize("NFC").replace(/[`\uff40\u02cb\u1fef\u2035]/g, "'").replace(import_chunk_03kvdj1s.fDo, ""), e);
}
var a = new RegExp(`[^\\S ]|[${import_chunk_kx2fp6pc.nw}]`, "u");
function A_n(n, e) {
  return n.length <= e && !a.test(n) && Ft(n, e) === n.replaceAll("`", "'");
}
function Gqn(n, e = 2e3) {
  let t = Xb(u(n, e));
  return t.length > e ? `${(0, import_chunk_7cfjrnwy.ee)(t, e)}\u2026` : t;
}
function kge(n, e = 2e3) {
  return n.length > e ? `${(0, import_chunk_7cfjrnwy.ee)(n, e)}\u2026` : n;
}
function Kee(n, e = 160) {
  let t = (0, import_chunk_7cfjrnwy.qy)(n).replace(/[\p{Cc}\p{Cf}]/gu, (r) => /\s/.test(r) ? r : "").replace(/\s+/g, " ").trim();
  return t.length > e ? `${(0, import_chunk_7cfjrnwy.ee)(t, e)}\u2026` : t;
}
function Va(n, e = 300) {
  return Ft(n ?? "", e);
}
function Qe(n, e = 300) {
  return Ft(n ?? "", e).replace(import_chunk_03kvdj1s.JDs, "").replace(/[\u02bb\u02bc]/g, "\u2019").replace(/"/g, "\u201D").replace(/'/g, "\u2019").replace(import_chunk_03kvdj1s.fDo, "");
}
function Qa(n, e) {
  let t = (0, import_chunk_7cfjrnwy.Wr)((0, import_chunk_7cfjrnwy.I_)((0, import_chunk_7cfjrnwy.qy)(n).replace(/\s+/g, " "))).normalize("NFC").replace(import_chunk_03kvdj1s.JDs, "'").replace(/["\u02BB\u02BC]/g, "'").replace(import_chunk_03kvdj1s.fDo, "").trim();
  if (!t) return "";
  return `\u201C${e ? (0, import_chunk_7cfjrnwy.PD)(t, e.head, e.tail, () => "\u2026") : t}\u201D`;
}
function Jb(n) {
  let e = Qa(n).replace(/[`\uff40\u02cb\u1fef\u2035]/g, "'").replace(import_chunk_03kvdj1s.fDo, "");
  return e === "" ? "(no printable name)" : e === `\u201C${n}\u201D` ? e : `${e} (not its exact spelling)`;
}
function nUl(n, e) {
  let t = Qa(n) || "\u201C\u201D";
  return t.length <= e ? t : Qa(n, { head: e - 3, tail: 0 });
}
function nna(n, { head: e, tail: t }) {
  if (n.length <= e + t) return n;
  let r = e > 0 ? (0, import_chunk_7cfjrnwy.ee)(n, e) : "", i = t > 0 ? (0, import_chunk_7cfjrnwy.qa)(n, t) : "", o = (r.match(/\u201C/g)?.length ?? 0) > (r.match(/\u201D/g)?.length ?? 0), s = i.indexOf("\u201D"), c = i.indexOf("\u201C"), l = s !== -1 && (c === -1 || s < c);
  return `${r}${o === l ? "\u2026" : o ? "\u2026\u201D\u2026" : "\u2026\u201C\u2026"}${i}`;
}
function u(n, e) {
  let t = (0, import_chunk_7cfjrnwy.ee)(n, e * 8);
  if (t.length === n.length) return t;
  let r = /\x1b(?:[\]PX^_][^\x1b\x07]*\x1b?|\[[\x30-\x3f]*[\x20-\x2f]*)$/.exec(t);
  if (r === null) return t;
  let i = n.slice(r.index);
  return (i[1] === "[" ? /^\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]/.test(i) : /^\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/.test(i)) ? t.slice(0, r.index) : t;
}
function hL(n, { isComposed: e } = {}) {
  let t = (0, import_chunk_jv7av99m.d)(n);
  return e?.(n) ? Gqn(t, 2e3) : Ft(t, 500);
}
