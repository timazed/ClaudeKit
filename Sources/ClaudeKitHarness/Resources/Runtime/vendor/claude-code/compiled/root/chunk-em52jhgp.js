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
var chunk_em52jhgp_exports = {};
__export(chunk_em52jhgp_exports, {
  Bke: () => Bke,
  DDl: () => DDl,
  Eee: () => Eee,
  HDl: () => HDl,
  LDl: () => LDl,
  MDl: () => MDl,
  NDl: () => NDl,
  Rct: () => Rct,
  Uke: () => Uke,
  V8i: () => V8i,
  n3: () => n3,
  oOo: () => oOo,
  ul: () => ul,
  wz: () => wz,
  z8i: () => z8i
});
module.exports = __toCommonJS(chunk_em52jhgp_exports);
var a = null, s = null, u = null;
function MDl() {
  if (!u) u = new Intl.DisplayNames(["en"], { type: "language" });
  return u;
}
function ul() {
  if (!a) a = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  return a;
}
function n3(e) {
  if (!e) return "";
  return ul().segment(e)[Symbol.iterator]().next().value?.segment ?? "";
}
function wz(e) {
  if (!e) return "";
  let t = "";
  for (let { segment: r } of ul().segment(e)) t = r;
  return t;
}
function Uke(e) {
  if (!e) return 0;
  let t = 0;
  for (let r of ul().segment(e)) t++;
  return t;
}
function Bke(e) {
  if (!e) return [];
  return Array.from(ul().segment(e), (t) => t.segment);
}
function oOo(e) {
  if (e.length < 2) return e;
  let t = e.join("");
  if (!y(t)) return e;
  let r = [], n = "", i = 0, o = e[0].length;
  for (let { segment: h, index: I } of ul().segment(t)) {
    while (I >= o && i < e.length - 1) r.push(n), n = "", i++, o += e[i].length;
    n += h;
  }
  r.push(n);
  while (r.length < e.length) r.push("");
  return r;
}
function y(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r >= 128 || r === 13) return true;
  }
  return false;
}
function z8i() {
  if (!s) s = new Intl.Segmenter(void 0, { granularity: "word" });
  return s;
}
function HDl(e) {
  let t = e.trim();
  if (t === "") return 0;
  let r = t.split(/\s+/).length, n = 0;
  for (let i of z8i().segment(t)) if (i.isWordLike) n++;
  return Math.max(r, n);
}
var m = /* @__PURE__ */ new Map();
function V8i(e, t) {
  let r = `${e}:${t}`, n = m.get(r);
  if (!n) n = new Intl.RelativeTimeFormat("en", { style: e, numeric: t }), m.set(r, n);
  return n;
}
var g = null;
function DDl() {
  if (!g) g = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return g;
}
var l = null;
function LDl() {
  if (l === null) try {
    let e = Intl.DateTimeFormat().resolvedOptions().locale;
    l = new Intl.Locale(e).language;
  } catch {
    l = void 0;
  }
  return l;
}
var f = /* @__PURE__ */ new WeakMap();
function p(e) {
  if (!e) return "";
  let t = f.get(e);
  if (t !== void 0) return t;
  let r = Object.entries(e).sort(([i], [o]) => i < o ? -1 : i > o ? 1 : 0), n = "";
  for (let [i, o] of r) n += `${i}=${String(o)};`;
  return f.set(e, n), n;
}
var c = /* @__PURE__ */ new Map();
function Rct(e, t) {
  return t ? { ...e, timeZone: t } : e;
}
function Eee(e, t) {
  let r = `${e ?? ""}|${p(t)}`, n = c.get(r);
  if (!n) n = new Intl.DateTimeFormat(e, t), c.set(r, n);
  return n;
}
var d = /* @__PURE__ */ new Map();
function NDl(e, t) {
  let r = `${e ?? ""}|${p(t)}`, n = d.get(r);
  if (!n) n = new Intl.NumberFormat(e, t), d.set(r, n);
  return n;
}
