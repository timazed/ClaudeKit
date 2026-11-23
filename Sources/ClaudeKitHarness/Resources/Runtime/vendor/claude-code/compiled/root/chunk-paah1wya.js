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
var chunk_paah1wya_exports = {};
__export(chunk_paah1wya_exports, {
  Ee: () => Ee,
  PBo: () => PBo,
  ym: () => ym
});
module.exports = __toCommonJS(chunk_paah1wya_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var L = { default: { keyCase: "title", modCase: "lower", caretCtrl: false, modSep: "+", arrowSep: "/", chordSep: " ", shiftAsCase: false, charCase: "preserve", platform: "other" }, compact: { keyCase: "lower", modCase: "lower", caretCtrl: true, modSep: "+", arrowSep: "", chordSep: " ", shiftAsCase: true, charCase: "preserve", platform: "other" }, symbol: { keyCase: "glyph", modCase: "glyph", caretCtrl: false, modSep: "", arrowSep: "", chordSep: " ", shiftAsCase: true, charCase: "upper", platform: "other" } };
function D(t) {
  let { style: r, ...s } = t;
  return { ...L[r ?? "default"], ...N(s) };
}
function N(t) {
  let r = {};
  for (let s in t) if (t[s] !== void 0) r[s] = t[s];
  return r;
}
function PBo(t, r = {}) {
  let s = D(r), n = (i) => z(i, s), a = (i) => i.map(n).join(s.chordSep);
  if (t.length === 0) return "";
  if (t.length === 1) return a(t[0]);
  let l = t.every((i) => i.length === 1) ? t.map((i) => i[0]) : void 0;
  if (!l) return t.map(a).join("/");
  let p = I(l, s), c = l.every((i) => H.has(i.key)) && (!!p || l.every((i) => g(i, s).length === 0)) ? s.arrowSep : "/";
  if (p) {
    let i = l.map((f) => n({ ...f, ...Y }));
    return X(p, s) + i.join(c);
  }
  return l.map(n).join(c);
}
var _ = { enter: ["Enter", "enter", "\u23CE"], escape: ["Esc", "esc", "\u238B"], tab: ["Tab", "tab", "\u21E5"], " ": ["Space", "space", "\u2423"], backspace: ["Backspace", "backspace", "\u232B"], delete: ["Delete", "delete", "\u2326"], up: ["\u2191", "\u2191", "\u2191"], down: ["\u2193", "\u2193", "\u2193"], left: ["\u2190", "\u2190", "\u2190"], right: ["\u2192", "\u2192", "\u2192"], pageup: ["PageUp", "pgup", "\u21DE"], pagedown: ["PageDown", "pgdn", "\u21DF"], home: ["Home", "home", "\u2196"], end: ["End", "end", "\u2198"] }, B = { title: 0, lower: 1, glyph: 2 }, U = { ctrl: { lower: "ctrl", title: "Ctrl", glyph: "\u2303" }, shift: { lower: "shift", title: "Shift", glyph: "\u21E7" }, alt: { lower: (t) => t === "macos" ? "opt" : "alt", title: (t) => t === "macos" ? "Opt" : "Alt", glyph: "\u2325" }, super: { lower: (t) => t === "macos" ? "cmd" : "super", title: (t) => t === "macos" ? "Cmd" : "Super", glyph: "\u2318" } }, H = /* @__PURE__ */ new Set(["up", "down", "left", "right"]), Y = { ctrl: false, alt: false, shift: false, meta: false, super: false };
function C(t) {
  let r = [];
  if (t.ctrl) r.push("ctrl");
  if (t.shift) r.push("shift");
  if (t.alt || t.meta) r.push("alt");
  if (t.super) r.push("super");
  return r;
}
function y(t, r) {
  let s = U[t][r.modCase];
  return typeof s === "function" ? s(r.platform) : s;
}
function q(t, r) {
  let s = _[t];
  if (s) return s[B[r.keyCase]];
  return r.charCase === "upper" ? t.toUpperCase() : t;
}
function w(t) {
  return t.shift && !t.ctrl && !t.alt && !t.meta && !t.super && t.key.length === 1 && t.key >= "a" && t.key <= "z";
}
function z(t, r) {
  if (r.shiftAsCase && w(t)) return t.key.toUpperCase();
  let s = C(t), n = q(t.key, r);
  if (r.caretCtrl && s.length === 1 && s[0] === "ctrl") return `^${n}`;
  if (r.modCase === "glyph") return s.map((a) => y(a, r)).join("") + n;
  return [...s.map((a) => y(a, r)), n].join(r.modSep);
}
function I(t, r) {
  let [s, ...n] = t;
  if (!g(s, r).length) return;
  return n.every((l) => W(s, l, r)) ? s : void 0;
}
function g(t, r) {
  if (r.shiftAsCase && w(t)) return [];
  return C(t);
}
function W(t, r, s) {
  let n = g(t, s), a = g(r, s);
  return n.length === a.length && n.every((l, p) => l === a[p]);
}
function X(t, r) {
  let s = C(t);
  if (r.caretCtrl && s.length === 1 && s[0] === "ctrl") return "^";
  if (r.modCase === "glyph") return s.map((n) => y(n, r)).join("");
  return s.map((n) => y(n, r)).join(r.modSep) + r.modSep;
}
function Ee(t) {
  let f = (0, import_chunk_sng02qpc.k)(15), { chord: r, action: s, format: n, parens: a, bold: l, terse: p } = t, E = a === void 0 ? false : a, c = l === void 0 ? false : l, i = p === void 0 ? false : p, x;
  if (f[0] === import_chunk_w1d7ygsk.R) x = b(), f[0] = x;
  else x = f[0];
  let Z = x, T;
  if (f[1] !== r || f[2] !== n) T = v(r, n, Z), f[1] = r, f[2] = n, f[3] = T;
  else T = f[3];
  let u = T;
  if (!u) {
    return null;
  }
  let F;
  if (f[4] !== c || f[5] !== u) F = c ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.qh, { bold: true, children: u }) : u, f[4] = c, f[5] = u, f[6] = F;
  else F = f[6];
  let d = F, m = i ? " " : " to ";
  if (E) {
    let h2;
    if (f[7] !== s || f[8] !== m || f[9] !== d) h2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.qh, { children: ["(", d, m, s, ")"] }), f[7] = s, f[8] = m, f[9] = d, f[10] = h2;
    else h2 = f[10];
    return h2;
  }
  let h;
  if (f[11] !== s || f[12] !== m || f[13] !== d) h = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.qh, { children: [d, m, s] }), f[11] = s, f[12] = m, f[13] = d, f[14] = h;
  else h = f[14];
  return h;
}
function ym({ chord: t, action: r, format: s, parens: n = false, terse: a = false }) {
  let l = v(t, s, b());
  if (!l) return "";
  let p = `${l}${a ? " " : " to "}${r}`;
  return n ? `(${p})` : p;
}
function b() {
  return (0, import_chunk_y8kqnbqt.JF)() === "macos" ? "macos" : "other";
}
function v(t, r, s) {
  let n = (typeof t === "string" ? [t] : t).filter((a) => a !== "");
  return PBo(n.map(import_chunk_y8kqnbqt.GCe), { ...r, platform: r?.platform ?? s });
}
