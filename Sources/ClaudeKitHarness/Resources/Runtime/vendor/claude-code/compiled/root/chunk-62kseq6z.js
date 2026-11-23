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
var chunk_62kseq6z_exports = {};
__export(chunk_62kseq6z_exports, {
  L2s: () => L2s,
  MIe: () => MIe,
  N2s: () => N2s,
  S7n: () => S7n,
  tue: () => tue
});
module.exports = __toCommonJS(chunk_62kseq6z_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_gd8mknr6 = require("/$bunfs/root/chunk-gd8mknr6.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_5h9h52az = require("/$bunfs/root/chunk-5h9h52az.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function ut(t) {
  let { watchLoop: e } = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.sp);
  (0, import_chunk_bs4h6795.H)(() => t ? e() : void 0, [t, e]);
}
function ae(t, e) {
  if (e?.offset === t.offset && e.text === t.text) return e.column;
  let r = t.startOfLogicalLine().offset, n = on(t.text, r, t.offset);
  return t.text[t.offset] === "	" ? n + De("	", n) - 1 : n;
}
function on(t, e, r) {
  let n = 0;
  for (let { segment: s } of (0, import_chunk_em52jhgp.ul)().segment(t.slice(e, r))) n += De(s, n);
  return n;
}
function ue(t, e, r, n) {
  let s = 0;
  for (let { segment: o, index: i } of (0, import_chunk_em52jhgp.ul)().segment(t.slice(e, r))) if (s += De(o, s), s > n) return e + i;
  return r;
}
function De(t, e) {
  return t === "	" ? import_chunk_f64qna2j.yze - e % import_chunk_f64qna2j.yze : (0, import_chunk_mgh1y10w.oe)(t);
}
var sn = { "(": ["(", ")"], ")": ["(", ")"], b: ["(", ")"], "[": ["[", "]"], "]": ["[", "]"], "{": ["{", "}"], "}": ["{", "}"], B: ["{", "}"], "<": ["<", ">"], ">": ["<", ">"], '"': ['"', '"'], "'": ["'", "'"], "`": ["`", "`"] };
function re(t, e, r, n) {
  if (r === "w") return lt(t, e, n, import_chunk_gd8mknr6.xIt);
  if (r === "W") return lt(t, e, n, (o) => !(0, import_chunk_gd8mknr6.Lmt)(o));
  let s = sn[r];
  if (s) {
    let [o, i] = s;
    return o === i ? an(t, e, o, n) : un(t, e, o, i, n);
  }
  return null;
}
function lt(t, e, r, n) {
  let s = [];
  for (let { segment: h, index: O } of (0, import_chunk_em52jhgp.ul)().segment(t)) s.push({ segment: h, index: O });
  if (s.length === 0) return null;
  let o = s.length - 1;
  for (let h = 0; h < s.length; h++) {
    let O = s[h], v = h + 1 < s.length ? s[h + 1].index : t.length;
    if (e >= O.index && e < v) {
      o = h;
      break;
    }
  }
  let i = (h) => s[h]?.segment ?? "", l = (h) => h < s.length ? s[h].index : t.length, c = (h) => i(h) !== `
` && (0, import_chunk_gd8mknr6.Lmt)(i(h)), p = (h) => n(i(h)), m = (h) => (0, import_chunk_gd8mknr6.A9t)(i(h)), C = o, b = o;
  if (p(o)) {
    while (C > 0 && p(C - 1)) C--;
    while (b < s.length && p(b)) b++;
  } else if ((0, import_chunk_gd8mknr6.Lmt)(i(o))) {
    let h = (P) => (0, import_chunk_gd8mknr6.Lmt)(i(P)), O = e >= t.length, v = r && !O ? c : h;
    while (b < s.length && v(b)) b++;
    let A = !r && b === s.length, W = O || A ? h : c;
    while (C > 0 && W(C - 1)) C--;
    return { start: l(C), end: l(b) };
  } else if (m(o)) {
    while (C > 0 && m(C - 1)) C--;
    while (b < s.length && m(b)) b++;
  }
  if (!r) if (b < s.length && c(b)) while (b < s.length && c(b)) b++;
  else {
    let h = C;
    while (h > 0 && c(h - 1)) h--;
    if (h > 0 && i(h - 1) !== `
`) C = h;
  }
  return { start: l(C), end: l(b) };
}
function an(t, e, r, n) {
  let s = t.lastIndexOf(`
`, e - 1) + 1, o = t.indexOf(`
`, e), i = o === -1 ? t.length : o, l = t.slice(s, i), c = e - s, p = [];
  for (let m = 0; m < l.length; m++) if (l[m] === r) p.push(m);
  for (let m = 0; m < p.length - 1; m += 2) {
    let C = p[m], b = p[m + 1];
    if (C <= c && c <= b) return n ? { start: s + C + 1, end: s + b } : { start: s + C, end: s + b + 1 };
  }
  return null;
}
function un(t, e, r, n, s) {
  let o = 0, i = -1;
  for (let c = e; c >= 0; c--) if (t[c] === n && c !== e) o++;
  else if (t[c] === r) {
    if (o === 0) {
      i = c;
      break;
    }
    o--;
  }
  if (i === -1) return null;
  o = 0;
  let l = -1;
  for (let c = i + 1; c < t.length; c++) if (t[c] === r) o++;
  else if (t[c] === n) {
    if (o === 0) {
      l = c;
      break;
    }
    o--;
  }
  if (l === -1) return null;
  return s ? { start: i + 1, end: l } : { start: i, end: l + 1 };
}
var Ke = /* @__PURE__ */ new Map([["d", "delete"], ["c", "change"], ["y", "yank"]]), z = "\b", ft = /* @__PURE__ */ new Set(["h", "l", " ", "\b", "j", "k", "w", "b", "e", "W", "B", "E", "0", "^", "$", "%"]), Oe = /* @__PURE__ */ new Set(["h", "l", " ", "\b"]), he = /* @__PURE__ */ new Map([["f", "f"], ["F", "F"], ["t", "t"], ["T", "T"]]), Be = /* @__PURE__ */ new Map([["i", "inner"], ["a", "around"]]), Ue = /* @__PURE__ */ new Set(["w", "W", '"', "'", "`", "(", ")", "b", "[", "]", "{", "}", "B", "<", ">"]), ct = 1e4;
function dt() {
  return { mode: "INSERT", insertedText: "" };
}
function pt() {
  return { lastFind: null, register: "", registerIsLinewise: false };
}
function J(t, e, r) {
  if (t === "%" && r !== 1) return e;
  let n = e;
  for (let s = 0; s < r; s++) {
    let o = ln(t, n);
    if (o.equals(n)) break;
    n = o;
  }
  return n;
}
function ln(t, e) {
  switch (t) {
    case "h":
      return e.offset === e.startOfLogicalLine().offset ? e : e.left();
    case "l":
      return e.offset === e.endOfLogicalLine().offset ? e : e.right();
    case " ":
      return e.right();
    case z:
      return e.left();
    case "j":
      return e.downLogicalLine();
    case "k":
      return e.upLogicalLine();
    case "gj":
      return e.down();
    case "gk":
      return e.up();
    case "w":
      return e.nextVimWord();
    case "b":
      return e.prevVimWord();
    case "e":
      return e.endOfVimWord();
    case "W":
      return e.nextWORD();
    case "B":
      return e.prevWORD();
    case "E":
      return e.endOfWORD();
    case "0":
      return e.startOfLogicalLine();
    case "^":
      return e.firstNonBlankInLogicalLine();
    case "$":
      return e.lastCharInLogicalLine();
    case "G":
      return e.startOfLastLine();
    case "%": {
      let r = fn((0, import_chunk_gd8mknr6.Gya)(e.text), e.offset);
      return r === null ? e : new import_chunk_gd8mknr6.pl(e.measuredText, r);
    }
    default:
      return e;
  }
}
function fn(t, e) {
  let r = t.indexOf(`
`, e), n = r === -1 ? t.length : r, s = t.slice(e, n).search(/[()[\]{}]/);
  if (s === -1) return null;
  let o = e + s, i = re(t, o, t[o], false);
  if (!i) return null;
  return i.start === o ? i.end - 1 : i.start;
}
function _e(t) {
  return "eE$%".includes(t);
}
function mt(t) {
  return "jkG".includes(t) || t === "gg";
}
function Q(t, e, r, n) {
  if (e === "gj" || e === "gk") {
    let i = ce(e, r, n);
    if (i.rowsRunOut) {
      n.setOffset(tue(n.cursor, i.offset));
      return;
    }
  }
  let s = J(e, n.cursor, r);
  if (mt(e)) {
    let i = F(n.text, n.cursor.offset), l = F(n.text, s.offset);
    if (l !== i) {
      let c = ee(n.text, s.offset), p = n.text.indexOf(`
`, c), m = p === -1 ? n.text.length : p, C = ue(n.text, c, m, ae(n.cursor, n.wantedColumn)), b = C === m && m > c && tue(n.cursor, m) === m ? n.cursor.measuredText.prevOffset(m) : C, h = e === "k" ? Ve(n.cursor, b, c) : Math.min(n.cursor.offset, s.offset);
      le(t, i, l, n, h), U(n, { type: "operator", op: t, motion: e, count: r });
    }
    return;
  }
  if (e === "%" && s.equals(n.cursor)) return;
  if (s.equals(n.cursor) && !_e(e)) {
    let i = (e === "w" || e === "W") && r > 0;
    if (e === "0" || e === "^" || i || Oe.has(e)) {
      if (t === "yank") n.setRegister("", false);
      else if (t === "change") n.enterInsert(n.cursor.offset);
      U(n, { type: "operator", op: t, motion: e, count: r });
    }
    return;
  }
  let o = cn(n.cursor, s, e, t, r);
  if (o.from === o.to && !(o.linewise && e === " ")) {
    if (t === "change" || t === "yank") n.setRegister("", false);
    if (t === "change") n.enterInsert(o.from), U(n, { type: "operator", op: t, motion: e, count: r });
    return;
  }
  if (o.linewise && t !== "change") le(t, F(n.text, o.from), F(n.text, Math.max(o.from, o.to - 1)), n, n.cursor.offset);
  else Se(t, o.from, o.to, n, o.linewise);
  U(n, { type: "operator", op: t, motion: e, count: r });
}
function xe(t, e, r, n, s) {
  let o = s.cursor.findCharacter(r, e, n);
  if (o === null) return;
  let i = new import_chunk_gd8mknr6.pl(s.cursor.measuredText, o), l = dn(s.cursor, i, e);
  Se(t, l.from, l.to, s), s.setLastFind(e, r), U(s, { type: "operatorFind", op: t, find: e, char: r, count: n });
}
function Ce(t, e, r, n, s) {
  let o = re(s.text, s.cursor.offset, r, e === "inner");
  if (!o) return;
  Se(t, o.start, o.end, s);
  let { start: i } = o, l = e === "inner" && n === 1 && i > 0 && "([{<".includes(s.text[i - 1] ?? " ") && s.text[i] === `
`;
  if (t === "yank" && l) s.setOffset(i + 1);
  U(s, { type: "operatorTextObj", op: t, objType: r, scope: e, count: n });
}
function Z(t, e, r) {
  if (e < 1) return;
  let n = F(r.text, r.cursor.offset);
  if (e > 1 && !r.cursor.text.includes(`
`, r.cursor.offset)) return;
  let { offset: s } = r.cursor, o = r.text[s] === `
` ? r.cursor.placeholderEndingAt(s) : null, i = o !== null && (0, import_chunk_8704k7wd.f9e)(r.text.slice(o.start, o.end));
  le(t, n, n + e - 1, r, i ? r.cursor.startOfLogicalLine().offset : s), U(r, { type: "operator", op: t, motion: t[0], count: e });
}
function Te(t, e) {
  let r = e.cursor.offset;
  if (r >= e.text.length) return;
  let n = yt(e, t);
  if (n === r) return;
  let s = e.text.slice(r, n), o = e.text.slice(0, r) + e.text.slice(n);
  e.setRegister(s, false), e.setText(o), e.setOffset(MIe(o, r)), e.recordChange({ type: "x", count: t });
}
function Ie(t, e) {
  let r = e.cursor.offset, n = yt(e, t);
  if (n > r) e.setRegister(e.text.slice(r, n), false), e.setText(e.text.slice(0, r) + e.text.slice(n));
  e.enterInsert(r), e.recordChange({ type: "substitute", count: t });
}
function Re(t, e, r) {
  let n = r.cursor.offset, s = r.text, o = n;
  for (let i = 0; i < e; i++) {
    if (o >= s.length || s[o] === `
`) return;
    o += (0, import_chunk_em52jhgp.n3)(s.slice(o)).length || 1;
  }
  r.setText(s.slice(0, n) + t.repeat(e) + s.slice(o)), r.setOffset(n + t.length * (e - 1)), r.recordChange({ type: "replace", char: t, count: e });
}
function ve(t, e) {
  let r = e.cursor.measuredText.columns, n = e.text, s = e.cursor.offset, o = 0;
  while (s < n.length && n[s] !== `
` && o < t) {
    let l = (0, import_chunk_em52jhgp.n3)(n.slice(s)), c = l.length, p = (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).normalize("NFC");
    n = n.slice(0, s) + p + n.slice(s + c), s += p.length, o++;
  }
  if (o === 0) return;
  let i = import_chunk_gd8mknr6.pl.fromText(n, r);
  e.setText(n), e.setOffset(tue(i, s)), e.recordChange({ type: "toggleCase", count: t });
}
function He(t, e) {
  let r = e.text.split(`
`), n = F(e.cursor.text, e.cursor.offset);
  if (n >= r.length - 1) {
    if (t >= 3) e.setOffset(ee(e.cursor.text, e.cursor.offset)), e.recordChange({ type: "join", count: 2 });
    return;
  }
  let s = Math.min(Math.max(t, 2) - 1, r.length - n - 1);
  Ot(r, n, s, e);
}
function Ot(t, e, r, n) {
  let s = t[e], o = s.length, i = s;
  for (let p = 1; p <= r; p++) {
    o = s.length;
    let m = t[e + p].replace(/^[ \t\r]+/, "");
    if (m.length > 0 && s.length > 0 && !m.startsWith(")") && !/[ \t]$/.test(i)) s += " ";
    s += m, i = m;
  }
  let l = [...t.slice(0, e), s, ...t.slice(e + r + 1)], c = l.join(`
`);
  n.setText(c), n.setOffset(MIe(c, Y(l, e) + o)), n.recordChange({ type: "join", count: r + 1 });
}
function we(t, e, r) {
  let n = r.getRegister();
  if (!n) return;
  r.recordChange({ type: "paste", after: t, count: e });
  let s = r.getRegisterIsLinewise(), o = s && n.endsWith(`
`) ? n.slice(0, -1) : n;
  if (s) {
    let i = r.text, l = i.split(`
`), c = F(r.cursor.text, r.cursor.offset), p = t ? c + 1 : c, m = o.split(`
`), C = [];
    for (let W = 0; W < e; W++) C.push(...m);
    let b = [...l.slice(0, p), ...C, ...l.slice(p)], h = b.join(`
`), O = Y(b, p), v = import_chunk_gd8mknr6.pl.fromText(m[0] ?? "", r.cursor.measuredText.columns), A = Ne(v);
    r.setText(h, { previous: { value: i, cursorOffset: O } }), r.setOffset(O + (v.placeholderStartingAt(A) ? 0 : A));
  } else {
    let i = o.repeat(e), l = r.cursor.offset, c = r.text[l] === `
` && (l === 0 || r.text[l - 1] === `
`), p = t && l < r.text.length && !c ? r.cursor.measuredText.nextOffset(l) : l, m = r.text.slice(0, p) + i + r.text.slice(p), C = i.includes(`
`) ? MIe(m, p) : p + i.length - ((0, import_chunk_em52jhgp.wz)(i).length || 1);
    r.setText(m, { previous: { value: r.text, cursorOffset: p } }), r.setOffset(C);
  }
}
function Le(t, e, r) {
  let s = r.text.split(`
`), o = F(r.cursor.text, r.cursor.offset);
  if (e > 1 && o === s.length - 1) return;
  let i = Math.min(e, s.length - o);
  $e(s, o, o + i - 1, t);
  let l = s.join(`
`), c = pe(s[o] ?? "");
  r.setText(l), r.setOffset(Y(s, o) + c), r.recordChange({ type: "indent", dir: t, count: e });
}
function fe(t, e) {
  let r = e.text, n = r.split(`
`), s = F(e.cursor.text, e.cursor.offset), o = t === "below" ? s + 1 : s, i = [...n.slice(0, o), "", ...n.slice(o)], l = i.join(`
`), c = Y(i, o);
  e.setText(l, { previous: { value: r, cursorOffset: c } }), e.enterInsert(c), e.recordChange({ type: "openLine", direction: t });
}
function U(t, e) {
  if (e.op !== "yank") t.recordChange(e);
}
function yt(t, e) {
  let r = t.cursor;
  for (let n = 0; n < e && !r.isAtEnd(); n++) {
    if (t.text[r.offset] === `
`) break;
    r = r.right();
  }
  return r.offset;
}
function Y(t, e) {
  return t.slice(0, e).join(`
`).length + (e > 0 ? 1 : 0);
}
function cn(t, e, r, n, s) {
  let o = Math.min(t.offset, e.offset), i = Math.max(t.offset, e.offset), l = false, c = r === "w" || r === "W", p = c && n === "change", m = c && n !== "change", C = t.text[t.offset], b = (C === " " || C === "	" || C === `
`) && t.snapOutOfPlaceholder(t.offset, "start") === t.offset;
  if (p && b) {
    if (i = gt(t, r, s, i), i > o && t.text[i - 1] === `
`) {
      i -= 1;
      let v = t.startOfLogicalLine().offset;
      if (/^[ \t]*$/.test(t.text.slice(v, o))) o = v, l = true;
    }
  } else if (p) {
    let v = t;
    for (let se = 0; se < s - 1; se++) do
      v = r === "w" ? v.nextVimWord() : v.nextWORD();
    while (t.isOnEmptyLine(v.offset));
    let A = r === "w" ? v.endOfVimWord() : v.endOfWORD(), W = t.measuredText.nextOffset(v.offset), P = r === "w" ? v.nextVimWord() : v.nextWORD();
    if ((W >= t.text.length || (0, import_chunk_gd8mknr6.Lmt)(t.text[W] ?? "") || P.offset === W) && !(0, import_chunk_gd8mknr6.Lmt)(t.text[t.offset] ?? "") && !(0, import_chunk_gd8mknr6.Lmt)(t.text[v.offset] ?? "")) A = v;
    i = t.measuredText.nextOffset(A.offset);
  } else if (_e(r) && (r === "%" || t.offset <= e.offset) && t.text[i] !== `
`) i = t.measuredText.nextOffset(i);
  else if (m) i = gt(t, r, s, i);
  let h = ee(t.text, o), O = /^[ \t]*$/.test(t.text.slice(h, o));
  if ((r === " " || m) && i > o && t.text[i - 1] === `
`) l = O, o = l ? h : o, i = l && n !== "change" ? i : i - 1;
  else if (m && n === "delete" && O && t.text.slice(o, i).includes(`
`) && /^[ \t]*(\n|$)/.test(t.text.slice(i))) o = h, l = true;
  return o = t.snapOutOfPlaceholder(o, "start"), i = t.snapOutOfPlaceholder(i, "end"), { from: o, to: i, linewise: l };
}
function gt(t, e, r, n) {
  let s = J(e, t, r - 1), o = s.endOfLogicalLine().offset;
  if (n <= o) return n;
  return o > s.offset ? o : o + 1;
}
function dn(t, e, r) {
  let n = Math.max(t.offset, e.offset), s = t.snapOutOfPlaceholder(Math.min(t.offset, e.offset), "start"), o = t.snapOutOfPlaceholder(t.measuredText.nextOffset(n), "end");
  return { from: s, to: o };
}
function Se(t, e, r, n, s = false) {
  let o = n.text.slice(e, r);
  if (s && !o.endsWith(`
`)) o = o + `
`;
  if (o || t !== "delete") n.setRegister(o, s);
  if (t === "yank") n.setOffset(tue(n.cursor, e));
  else if (t === "delete") {
    let i = n.text.slice(0, e) + n.text.slice(r);
    n.setText(i), n.setOffset(MIe(i, e));
  } else if (t === "change") {
    let i = n.text.slice(0, e) + n.text.slice(r);
    n.setText(i), n.enterInsert(e);
  }
}
function MIe(t, e) {
  if (t[e] === `
` && e > 0 && t[e - 1] !== `
`) return e - ((0, import_chunk_em52jhgp.wz)(t.slice(0, e)).length || 1);
  if (e >= t.length && !t.endsWith(`
`)) return Math.max(0, t.length - ((0, import_chunk_em52jhgp.wz)(t).length || 1));
  return e;
}
function Ve(t, e, r) {
  let n = Ge(t, e), s = e;
  while (n && n.start > r) s = t.measuredText.prevOffset(n.start), n = Ge(t, s);
  if (!n) return s;
  let o = n.end;
  while (n = Ge(t, o)) o = n.end;
  return o;
}
function Ge(t, e) {
  let r = t.snapOutOfPlaceholder(e, "start");
  return t.placeholderStartingAt(r);
}
function tue(t, e, r = t.text) {
  let n = MIe(r, e);
  return t.snapOutOfPlaceholder(n, "start") === n ? n : e;
}
function ce(t, e, r) {
  let { cursor: n } = r, s = J(t, n, e), o = n.measuredText.getWrappedLines(), i = n.getPosition().line, c = (t === "gj" ? o.length - 1 - i : i) < e, p = o[i], m = o[s.getPosition().line], C = p?.startOffset === 0 || p?.isPrecededByNewline, b = m?.startOffset === 0 || m?.isPrecededByNewline;
  if (s.equals(n) || !C || !b || !m) return { offset: s.offset, column: null, rowsRunOut: c };
  let h = ae(n, r.wantedColumn), O = m.startOffset + m.text.length, v = ue(n.text, m.startOffset, O, h), A = Ve(n, v, m.startOffset), W = !m.endsWithNewline && O < n.text.length;
  return { offset: A === O && W ? n.measuredText.prevOffset(O) : A, column: h, rowsRunOut: c };
}
function ee(t, e) {
  if (e === 0) return 0;
  let r = t.lastIndexOf(`
`, e - 1);
  return r === -1 ? 0 : r + 1;
}
function Me(t, e) {
  if (e) {
    let r = (0, import_chunk_7cfjrnwy.Mt)(t, `
`);
    return t.endsWith(`
`) ? r : r + 1;
  }
  return (0, import_chunk_em52jhgp.Uke)(t);
}
function de(t, e, r) {
  let n = t.text;
  if (r) {
    let i = ee(n, t.cursor.offset), l = i;
    for (let c = 0; c < e; c++) {
      let p = n.indexOf(`
`, l);
      if (p === -1) {
        l = n.length;
        break;
      }
      l = p + 1;
    }
    return { from: i, to: l };
  }
  let s = t.cursor.offset, o = s;
  for (let i = 0; i < e && o < n.length; i++) o = t.cursor.measuredText.nextOffset(o);
  return { from: s, to: o };
}
function ke(t, e, r) {
  let n = Math.min(t, e.cursor.offset), s = Math.max(t, e.cursor.offset);
  if (!r) return { from: n, to: e.cursor.measuredText.nextOffset(s) };
  let o = e.text, i = ee(o, n), l = o.indexOf(`
`, s), c = l === -1 ? o.length : l + 1;
  return { from: i, to: c };
}
function $e(t, e, r, n) {
  for (let o = e; o <= r; o++) {
    let i = t[o] ?? "";
    if (i === "") continue;
    if (n === ">") t[o] = "  " + i;
    else if (i.startsWith("  ")) t[o] = i.slice(2);
    else if (i.startsWith("	")) t[o] = i.slice(1);
    else {
      let l = 0;
      while (l < i.length && l < 2 && /\s/.test(i[l])) l++;
      t[o] = i.slice(l);
    }
  }
}
function bt(t, e, r) {
  let n = Math.min(t, e.cursor.offset), s = Math.max(t, e.cursor.offset), o = e.text, i = (0, import_chunk_7cfjrnwy.Mt)(o.slice(0, n), `
`), l = (0, import_chunk_7cfjrnwy.Mt)(o.slice(n, s), `
`) + 1, c = o.split(`
`);
  if (i >= c.length - 1) {
    e.setOffset(r ? ee(e.cursor.text, n) : MIe(e.cursor.text, n)), e.recordChange({ type: "join", count: 2 });
    return;
  }
  let p = Math.max(1, Math.min(l - 1, c.length - i - 1));
  Ot(c, i, p, e);
}
function ht(t, e) {
  let r = e.text.split(`
`);
  if (F(e.cursor.text, e.cursor.offset) < r.length - 1) He(t, e);
}
function xt(t, e, r, n) {
  let s = Math.min(r, n.cursor.offset), o = Math.max(r, n.cursor.offset), i = n.text, l = (0, import_chunk_7cfjrnwy.Mt)(i.slice(0, s), `
`), c = l + (0, import_chunk_7cfjrnwy.Mt)(i.slice(s, o), `
`), p = i.split(`
`);
  for (let b = 0; b < e; b++) $e(p, l, c, t);
  let m = p.join(`
`), C = pe(p[l] ?? "");
  n.setText(m), n.setOffset(Y(p, l) + C), n.recordChange({ type: "visualIndent", dir: t, count: e, lines: c - l + 1 });
}
function Ct(t, e, r, n) {
  let s = n.text, o = s.split(`
`), i = (0, import_chunk_7cfjrnwy.Mt)(s.slice(0, n.cursor.offset), `
`), l = Math.min(i + r - 1, o.length - 1);
  for (let m = 0; m < e; m++) $e(o, i, l, t);
  let c = o.join(`
`), p = pe(o[i] ?? "");
  n.setText(c), n.setOffset(Y(o, i) + p);
}
function Tt(t, e, r, n, s, o = false) {
  if (s && t === "change") {
    let i = n.text.slice(e, r), l = i;
    if (!l.endsWith(`
`)) l += `
`;
    n.setRegister(l, true);
    let c = n.text.slice(0, e), p = n.text.slice(r), m = p !== "" || i.endsWith(`
`) && !o;
    n.setText(c + (m ? `
` : "") + p), n.enterInsert(e);
    return;
  }
  if (s && t === "delete") {
    let i = n.text.slice(e, r);
    if (!i.endsWith(`
`)) i += `
`;
    n.setRegister(i, true);
    let l = e;
    if (r === n.text.length && e > 0 && n.text[e - 1] === `
`) l -= 1;
    let c = r < n.text.length, p = n.text.slice(0, l) + n.text.slice(r);
    n.setText(p);
    let m = c ? e : ee(p, p.length), C = p.indexOf(`
`, m), b = C === -1 ? p.length : C, h = import_chunk_gd8mknr6.pl.fromText(p.slice(m, b), n.cursor.measuredText.columns + 1), O = Ft(h, c), v = !c && h.placeholderStartingAt(O) !== null;
    n.setOffset(v ? MIe(p, p.length) : m + O);
    return;
  }
  Se(t, e, r, n, s);
}
function It(t, e, r, n) {
  let { from: s, to: o } = ke(e, r, n), i = Me(r.text.slice(s, o), n);
  Tt(t, s, o, r, n, Pt(e, r, n)), U(r, { type: "visualOp", op: t, span: i, linewise: n });
}
function Rt(t, e, r, n) {
  let { from: s, to: o } = de(n, e, r);
  if (s === o && !(r && n.text.length > 0)) return;
  Tt(t, s, o, n, r);
}
function vt(t, e, r) {
  let { from: n, to: s } = de(r, t, e);
  if (n === s && !e) return;
  let o = r.text.slice(n, s), i = o;
  if (e && !i.endsWith(`
`)) i += `
`;
  r.setRegister(i, e);
  let l = r.text.slice(s), c = e && (l !== "" || o.endsWith(`
`)) ? `
` + l : l;
  r.setText(r.text.slice(0, n) + c), r.enterInsert(n);
}
function wt(t, e, r, n) {
  let s = n.text.slice(e, r), o = "";
  for (let { segment: c } of (0, import_chunk_em52jhgp.ul)().segment(s)) o += c === `
` ? `
` : t;
  let i = n.text.slice(0, e) + o + n.text.slice(r), l = n.cursor;
  n.setText(i), n.setOffset(tue(l, e, i));
}
function Lt(t, e, r, n) {
  let { from: s, to: o } = ke(e, r, n), i = Me(r.text.slice(s, o), n);
  wt(t, s, o, r), r.recordChange({ type: "visualReplace", char: t, span: i, linewise: n });
}
function St(t, e, r, n) {
  let { from: s, to: o } = de(n, e, r);
  if (s === o) return;
  wt(t, s, o, n);
}
function Vt(t, e, r, n) {
  let s = n.text.slice(e, r), o = "";
  for (let { segment: c } of (0, import_chunk_em52jhgp.ul)().segment(s)) if (t === "upper") o += c.toUpperCase();
  else if (t === "lower") o += c.toLowerCase();
  else o += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  let i = n.text.slice(0, e) + o + n.text.slice(r), l = n.cursor;
  n.setText(i), n.setOffset(tue(l, e, i));
}
function kt(t, e, r, n) {
  let { from: s, to: o } = ke(e, r, n), i = Me(r.text.slice(s, o), n);
  Vt(t, s, o, r), r.recordChange({ type: "visualCase", caseOp: t, span: i, linewise: n });
}
function Et(t, e, r, n) {
  let { from: s, to: o } = de(n, e, r);
  if (s === o) return;
  Vt(t, s, o, n);
}
function At(t, e, r) {
  let n = e.getRegister();
  if (!n) return;
  let s = e.getRegisterIsLinewise(), { from: o, to: i } = ke(t, e, r), l = e.text.slice(o, i), c = Me(l, r);
  jt(n, s, o, i, e, r, Pt(t, e, r)), e.recordChange({ type: "visualPaste", content: n, registerLinewise: s, selectionEndsLine: l.endsWith(`
`), selectionOnOneLine: !l.slice(0, -1).includes(`
`), span: c, linewise: r });
}
function Nt(t, e, r, n, s, o, i) {
  let { from: l, to: c } = de(i, s, o);
  if (l === c && !o) return;
  jt(t, e, l, !o && n ? Math.min(c, i.cursor.endOfLogicalLine().offset + (r ? 1 : 0)) : c, i, o, false);
}
function jt(t, e, r, n, s, o, i) {
  let l = s.text.slice(r, n), c = e ? t.replace(/\n$/, "") : t, p = l.endsWith(`
`) && !i, m = t, C = r;
  if (o) m = p ? c + `
` : c;
  else if (e) m = s.text ? `
` + c + `
` : `
` + c, C = r + 1;
  let b = l;
  if (o && !p) b += `
`;
  if (b) s.setRegister(b, o);
  let h = s.text.slice(0, r) + m + s.text.slice(n);
  if (s.setText(h), o || e) {
    let O = import_chunk_gd8mknr6.pl.fromText(h, s.cursor.measuredText.columns, C), v = Ne(O);
    s.setOffset(O.placeholderStartingAt(v) ? C : v);
  } else if (m.includes(`
`)) s.setOffset(tue(s.cursor, r, h));
  else {
    let O = (0, import_chunk_em52jhgp.wz)(m);
    s.setOffset(Math.max(r, r + m.length - (O.length || 1)));
  }
}
function Ee(t, e, r) {
  let n = e === 0 ? r.cursor.startOfLastLine() : r.cursor.goToLine(e);
  le(t, F(r.text, r.cursor.offset), F(r.text, n.offset), r, Math.min(r.cursor.offset, Ne(n))), U(r, { type: "operator", op: t, motion: "G", count: e });
}
function Ae(t, e, r) {
  let n = e === 1 ? r.cursor.startOfFirstLine() : r.cursor.goToLine(e);
  le(t, F(r.text, r.cursor.offset), F(r.text, n.offset), r, Math.min(r.cursor.offset, Ne(n))), U(r, { type: "operator", op: t, motion: "gg", count: e });
}
function le(t, e, r, n, s) {
  let o = n.text.split(`
`), i = Math.min(e, r), l = Math.min(Math.max(e, r) + 1, o.length), c = o.slice(0, i), p = o.slice(l), m = Y(o, i), C = o.slice(i, l).map((b) => b + `
`).join("");
  if (n.setRegister(C, true), t === "yank") {
    let b = MIe(n.text, s);
    n.setOffset(s === n.text.length ? Wt(n.cursor, b) : n.cursor.snapOutOfPlaceholder(b, "start"));
  } else if (t === "delete") {
    let b = [...c, ...p];
    n.setText(b.join(`
`));
    let h = Math.max(0, Math.min(i, b.length - 1)), O = import_chunk_gd8mknr6.pl.fromText(b[h] ?? "", n.cursor.measuredText.columns + 1);
    n.setOffset(Y(b, h) + Ft(O, p.length > 0));
  } else if (t === "change") n.setText([...c, "", ...p].join(`
`)), n.enterInsert(m);
}
function F(t, e) {
  return (0, import_chunk_7cfjrnwy.Mt)(t.slice(0, e), `
`);
}
function pe(t) {
  let e = 0;
  for (let { segment: r, index: n } of (0, import_chunk_em52jhgp.ul)().segment(t)) if (e = n, r !== " " && r !== "	") break;
  return e;
}
function Ft(t, e) {
  let r = pe(t.text);
  if (t.placeholderStartingAt(r) === null) return r;
  if (r > 0 || e) return 0;
  let n = MIe(t.text, t.text.length);
  return Wt(t, n);
}
function Wt(t, e) {
  let r = t.snapOutOfPlaceholder(e, "start");
  if (r === e) return e;
  let n = t.snapOutOfPlaceholder(e, "end");
  return (0, import_chunk_8704k7wd.f9e)(t.text.slice(r, n)) ? n : r;
}
function Ne(t) {
  let e = t.startOfLogicalLine().offset, r = t.endOfLogicalLine().offset;
  return e + pe(t.text.slice(e, r));
}
function Pt(t, e, r) {
  return r && e.text.endsWith(`
`) && Math.max(t, e.cursor.offset) >= e.text.length;
}
var Dt = 1e3;
function pn(t) {
  let e = /* @__PURE__ */ new Map();
  for (let [r, n] of Object.entries(t)) {
    if (typeof n !== "string" || n.toLowerCase() !== "<esc>") continue;
    let s = r.normalize("NFC");
    if (!/^[^\p{C}\p{Z}]{2}$/u.test(s) || (0, import_chunk_em52jhgp.Uke)(s) !== 2) continue;
    e.set(s, "<Esc>");
  }
  return e;
}
function S7n() {
  return pn((0, import_chunk_2yx6c1y2.iL)("vimInsertModeRemaps")[0] ?? {});
}
function ze(t, e, r) {
  switch (t.type) {
    case "idle":
      return mn(e, r);
    case "count":
      return gn(t, e, r);
    case "operator":
      return On(t, e, r);
    case "operatorCount":
      return yn(t, e, r);
    case "operatorFind":
      return bn(t, e, r);
    case "operatorTextObj":
      return hn(t, e, r);
    case "find":
      return xn(t, e, r);
    case "g":
      return Cn(t, e, r);
    case "operatorG":
      return Tn(t, e, r);
    case "replace":
      return In(t, e, r);
    case "indent":
      return Rn(t, e, r);
  }
}
function Kt(t, e, r, n) {
  let s = Ke.get(t);
  if (s) return { next: { type: "operator", op: s, count: e, countTyped: r } };
  if (t === "G") return n.setOffset(r ? n.cursor.goToLine(e).offset : n.text.lastIndexOf(`
`) + 1), { next: { type: "idle" } };
  if (t === "j" || t === "k") {
    let { offset: i, column: l } = $t(t === "j", e, n), { text: c } = n.cursor;
    if (i === null) return { next: { type: "idle" }, wanted: { column: l, offset: n.cursor.offset, text: c } };
    let p = tue(n.cursor, i);
    return n.setOffset(p), { next: { type: "idle" }, wanted: { column: l, offset: p, text: c } };
  }
  if (t === "$") {
    let i = n.cursor.lastCharInLogicalLine().offset, l = { column: 1 / 0, offset: i, text: n.cursor.text };
    return n.setOffset(i), { next: { type: "idle" }, wanted: l };
  }
  if (Je(t, r)) {
    let i = t === " " || t === z ? kn(t, n.cursor, e) : J(t, n.cursor, e), l = tue(i, i.offset);
    if (l === n.cursor.offset && Ht(t)) return { next: { type: "idle" } };
    return n.setOffset(l), { next: { type: "idle" }, wanted: null };
  }
  let o = he.get(t);
  if (o) return { next: { type: "find", find: o, count: e } };
  if (t === ".") return n.onDotRepeat?.(r ? e : void 0), { next: { type: "idle" } };
  switch (t) {
    case "g":
      return { next: { type: "g", count: e } };
    case "r":
      return { next: { type: "replace", count: e } };
    case ">":
    case "<":
      return { next: { type: "indent", dir: t, count: e } };
    case "~":
      ve(e, n);
      break;
    case "x":
      return Te(e, n), { next: { type: "idle" }, wanted: null };
    case "s":
      Ie(e, n);
      break;
    case "S":
      Z("change", e, n);
      break;
    case "J":
      He(e, n);
      break;
    case "p":
    case "P": {
      let i = n.getRegister() === "";
      return we(t === "p", e, n), i ? { next: { type: "idle" } } : { next: { type: "idle" }, wanted: null };
    }
    case "D":
      return Q("delete", "$", 1, n), { next: { type: "idle" }, wanted: null };
    case "C":
      Q("change", "$", 1, n);
      break;
    case "Y":
      Z("yank", e, n);
      break;
    case ";":
    case ",":
      Ut(t === ",", e, n);
      break;
    case "u":
      return n.onUndo?.(), { next: { type: "idle" }, wanted: null };
    case "i":
    case "I":
    case "a":
    case "A":
      Mn(t, n);
      break;
    case "o":
      fe("below", n);
      break;
    case "O":
      fe("above", n);
      break;
  }
  return { next: { type: "idle" } };
}
function Bt(t, e, r, n, s) {
  let o = Be.get(n);
  if (o) return { next: { type: "operatorTextObj", op: t, count: e, scope: o } };
  let i = he.get(n);
  if (i) return { next: { type: "operatorFind", op: t, count: e, find: i } };
  if (Je(n, r)) return Q(t, n, e, s), n === "j" || n === "k" || n === "%" ? { next: { type: "idle" } } : { next: { type: "idle" }, wanted: null };
  if (n === "G") return Ee(t, r ? e : 0, s), { next: { type: "idle" } };
  if (n === "g") return { next: { type: "operatorG", op: t, count: e } };
  return null;
}
function mn(t, e) {
  if (/[1-9]/.test(t)) return { next: { type: "count", count: parseInt(t, 10) } };
  if (t === "0") return e.setOffset(e.cursor.startOfLogicalLine().offset), { next: { type: "idle" } };
  return Kt(t, 1, false, e);
}
function gn(t, e, r) {
  if (/[0-9]/.test(e)) return { next: { type: "count", count: Xe(t.count, e) } };
  return Kt(e, t.count, true, r);
}
function On(t, e, r) {
  if (e === t.op[0]) return Z(t.op, t.count, r), { next: { type: "idle" } };
  if (/[1-9]/.test(e)) return { next: { type: "operatorCount", op: t.op, count: t.count, motionCount: parseInt(e, 10) } };
  let n = t.countTyped ?? false, s = Bt(t.op, t.count, n, e, r);
  if (s) return s;
  return { next: { type: "idle" } };
}
function yn(t, e, r) {
  if (/[0-9]/.test(e)) return { next: { ...t, motionCount: Xe(t.motionCount, e) } };
  let n = t.count * t.motionCount;
  if (e === t.op[0]) return Z(t.op, n, r), { next: { type: "idle" } };
  let s = Bt(t.op, n, true, e, r);
  if (s) return s;
  return { next: { type: "idle" } };
}
function bn(t, e, r) {
  if (e !== "") r.setLastFind(t.find, e);
  return xe(t.op, t.find, e, t.count, r), { next: { type: "idle" } };
}
function hn(t, e, r) {
  if (Ue.has(e)) Ce(t.op, t.scope, e, t.count, r);
  return { next: { type: "idle" } };
}
function xn(t, e, r) {
  if (e !== "") r.setLastFind(t.find, e);
  let n = r.cursor.findCharacter(e, t.find, t.count);
  if (n !== null) r.setOffset(n);
  return { next: { type: "idle" } };
}
function Cn(t, e, r) {
  if (e === "j" || e === "k") return zt(ce(`g${e}`, t.count, r), r);
  if (e === "g") if (t.count > 1) {
    let n = r.text.split(`
`), s = Math.min(t.count - 1, n.length - 1), o = 0;
    for (let i = 0; i < s; i++) o += (n[i]?.length ?? 0) + 1;
    r.setOffset(o);
  } else r.setOffset(r.cursor.startOfFirstLine().offset);
  return { next: { type: "idle" } };
}
function Tn(t, e, r) {
  if (e === "j" || e === "k") {
    let n = ce(`g${e}`, t.count, r);
    if (n.rowsRunOut) return zt(n, r);
    return Q(t.op, `g${e}`, t.count, r), { next: { type: "idle" } };
  }
  if (e === "g") Ae(t.op, t.count, r);
  return { next: { type: "idle" } };
}
function In(t, e, r) {
  if (e === "") return { next: { type: "idle" } };
  return Re(e, t.count, r), { next: { type: "idle" } };
}
function Rn(t, e, r) {
  if (e === t.dir) Le(t.dir, t.count, r);
  return { next: { type: "idle" } };
}
function Ut(t, e, r) {
  let n = r.getLastFind();
  if (!n) return;
  let s = n.type;
  if (t) s = { f: "F", F: "f", t: "T", T: "t" }[s];
  let o = r.cursor.findCharacter(n.char, s, e);
  if (o !== null) r.setOffset(o);
}
function _t(t, e, r) {
  switch (t.type) {
    case "idle":
      return vn(e, r);
    case "count":
      return wn(t, e, r);
    case "find":
      return Ln(t, e, r);
    case "g":
      return Sn(t, e, r);
    case "replace":
      if (e === "") return { next: { type: "idle" } };
      return { exit: "replace", char: e };
    case "textObject":
      return Vn(t, e, r);
  }
}
function Gt(t, e, r, n) {
  let s = Ke.get(t);
  if (s) return { exit: "operator", op: s };
  if (t === "G") return n.setOffset(r ? n.cursor.goToLine(e).offset : n.text.lastIndexOf(`
`) + 1), { next: { type: "idle" } };
  switch (t) {
    case "x":
      return { exit: "operator", op: "delete" };
    case "s":
      return { exit: "operator", op: "change" };
    case "X":
    case "D":
      return { exit: "operator", op: "delete", forceLinewise: true };
    case "C":
    case "S":
    case "R":
      return { exit: "operator", op: "change", forceLinewise: true };
    case "Y":
      return { exit: "operator", op: "yank", forceLinewise: true };
    case "r":
      return { next: { type: "replace" } };
    case "~":
      return { exit: "case", op: "toggle" };
    case "u":
      return { exit: "case", op: "lower" };
    case "U":
      return { exit: "case", op: "upper" };
    case "p":
    case "P":
      return { exit: "paste" };
    case ">":
    case "<":
      return { exit: "indent", dir: t, count: e };
    case "v":
    case "V":
      return { exit: "toggleKind", key: t };
    case "o":
      return { exit: "swap" };
    case "J":
      return { exit: "join" };
    case "$": {
      let l = n.cursor.endOfLogicalLine().offset, c = { column: 1 / 0, offset: l, text: n.cursor.text };
      return n.setOffset(l), { next: { type: "idle" }, wanted: c };
    }
    case "g":
      return { next: { type: "g", count: e } };
    case ";":
    case ",":
      return Ut(t === ",", e, n), { next: { type: "idle" } };
  }
  let o = Be.get(t);
  if (o) return { next: { type: "textObject", scope: o, count: e } };
  if (t === "j" || t === "k") {
    let l = $t(t === "j", e, n), c = l.offset ?? n.cursor.offset, p = { column: l.column, offset: c, text: n.cursor.text };
    return n.setOffset(c), { next: { type: "idle" }, wanted: p };
  }
  if (Je(t, r)) {
    let { offset: l } = J(t, n.cursor, e);
    if (l === n.cursor.offset && Ht(t)) return { next: { type: "idle" } };
    return n.setOffset(l), { next: { type: "idle" } };
  }
  let i = he.get(t);
  if (i) return { next: { type: "find", find: i, count: e } };
  return null;
}
function vn(t, e) {
  if (/[1-9]/.test(t)) return { next: { type: "count", count: parseInt(t, 10) } };
  if (t === "0") return e.setOffset(e.cursor.startOfLogicalLine().offset), { next: { type: "idle" } };
  return Gt(t, 1, false, e) ?? { next: { type: "idle" } };
}
function wn(t, e, r) {
  if (/[0-9]/.test(e)) return { next: { type: "count", count: Xe(t.count, e) } };
  return Gt(e, t.count, true, r) ?? { next: { type: "idle" } };
}
function Ln(t, e, r) {
  if (e !== "") r.setLastFind(t.find, e);
  let n = r.cursor.findCharacter(e, t.find, t.count);
  if (n !== null) r.setOffset(n);
  return { next: { type: "idle" } };
}
function Sn(t, e, r) {
  if (e === "j" || e === "k") {
    let { offset: n, column: s } = ce(`g${e}`, t.count, r), o = s === null ? null : { column: s, offset: n, text: r.cursor.text };
    return r.setOffset(n), { next: { type: "idle" }, wanted: o };
  }
  if (e === "g") {
    let n = t.count > 1 ? r.cursor.goToLine(t.count) : r.cursor.startOfFirstLine();
    r.setOffset(n.offset);
  }
  return { next: { type: "idle" } };
}
function Vn(t, e, r) {
  if (Ue.has(e)) {
    let n = re(r.text, r.cursor.offset, e, t.scope === "inner");
    if (n) return { exit: "selectRange", start: n.start, end: n.end };
  }
  return { next: { type: "idle" } };
}
function Je(t, e) {
  return ft.has(t) && !(t === "%" && e);
}
function Ht(t) {
  return Oe.has(t) || t === "%";
}
function Xe(t, e) {
  return Math.min(t * 10 + parseInt(e, 10), ct);
}
function Ye(t, e) {
  switch (t) {
    case "i":
      return e.offset;
    case "I":
      return e.firstNonBlankInLogicalLine().offset;
    case "a":
      return e.isAtEnd() || e.text[e.offset] === `
` ? e.offset : e.right().offset;
    case "A":
      return e.endOfLogicalLine().offset;
  }
}
function Mn(t, e) {
  e.enterInsert(Ye(t, e.cursor)), e.recordChange({ type: "insertCommand", key: t });
}
function kn(t, e, r) {
  let n = e;
  for (let s = 0; s < r; s++) {
    let o = J(t, n, 1), { text: i, offset: l } = o;
    if (i[l] === `
` && l > 0 && i[l - 1] !== `
`) o = t === z ? new import_chunk_gd8mknr6.pl(o.measuredText, tue(o, l)) : J(t, o, 1);
    if (o.equals(n)) break;
    n = o;
  }
  return n;
}
function $t(t, e, r) {
  let { cursor: n } = r, s = n.text, o = n.startOfLogicalLine().offset, i = ae(n, r.wantedColumn), l = o;
  for (let C = 0; C < e; C++) if (t) {
    let b = s.indexOf(`
`, l);
    if (b === -1) break;
    l = b + 1;
  } else if (l === 0) break;
  else l = l === 1 ? 0 : s.lastIndexOf(`
`, l - 2) + 1;
  if (l === o) return { offset: null, column: i };
  let c = s.indexOf(`
`, l), p = c === -1 ? s.length : c, m = ue(s, l, p, i);
  return { offset: Ve(n, m, l), column: i };
}
function zt(t, e) {
  let r = tue(e.cursor, t.offset);
  if (r === e.cursor.offset) return { next: { type: "idle" } };
  let n = t.column === null ? null : { column: t.column, offset: r, text: e.cursor.text };
  return e.setOffset(r), { next: { type: "idle" }, wanted: n };
}
var En = /^\x1b(?![[\]P_\\])[\x21-\x7e]$/, tt = /* @__PURE__ */ new Set(["backspace", "delete", "tab", "home", "end", "pageup", "pagedown", "insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function qe(t, e) {
  return (e || t.name === "") && !tt.has(t.name);
}
function Qe(t) {
  if (!t) return false;
  switch (t.type) {
    case "insertCommand":
    case "openLine":
    case "substitute":
      return true;
    case "operator":
    case "operatorFind":
    case "operatorTextObj":
    case "visualOp":
      return t.op === "change";
    default:
      return false;
  }
}
function An(t) {
  switch (t.type) {
    case "x":
    case "substitute":
    case "paste":
    case "operatorTextObj":
      return true;
    case "operator":
      return !["h", "l", " ", z, "gj", "gk", "%"].includes(t.motion);
    default:
      return false;
  }
}
function Ze(t, e) {
  return { ...t, setText: (r, n) => {
    e(), t.setText(r, n);
  }, setOffset: (r) => {
    e(), t.setOffset(r);
  }, enterInsert: (r) => {
    e(), t.enterInsert(r);
  }, setRegister: (r, n) => {
    e(), t.setRegister(r, n);
  } };
}
function Jt(t, e) {
  let r = tue(t, t.offset);
  if (r !== t.offset) e.setOffset(r);
  return r;
}
function et(t, e, r) {
  if (t.wanted !== void 0) return t.wanted ?? void 0;
  return e ? void 0 : r;
}
function L2s(t) {
  let { value: e, onChange: r, columns: n, disableEscapeDoublePress: s, onModeChange: o, onUndo: i, onOpenHistorySearch: l, onToggleHelp: c, onHistoryUp: p, onHistoryDown: m, inputFilter: C, getInputMode: b, isActive: h } = t, O = (0, import_chunk_bs4h6795.I)(dt()), [v, A] = (0, import_chunk_bs4h6795.y)("INSERT"), [W, P] = (0, import_chunk_bs4h6795.y)(null), [nt, se] = (0, import_chunk_bs4h6795.y)(false);
  ut(h && v === "INSERT");
  let te = (0, import_chunk_bs4h6795.I)(null), ne = (0, import_chunk_bs4h6795.I)(Nn()), X = (0, import_chunk_bs4h6795.I)(null), me = (0, import_chunk_bs4h6795.I)(null), je = (0, import_chunk_bs4h6795.I)(null);
  function Xt(a, d) {
    let f = O.current;
    if (f.mode === "INSERT" && !d.ctrl && !d.meta && qe(d, [...d.key].length === 1)) O.current = { mode: "INSERT", insertedText: f.insertedText + a.normalize("NFC") };
  }
  let Yt = (0, import_chunk_bs4h6795.ye)((a, d = "") => {
    let f = O.current;
    if (f.mode !== "INSERT") return;
    let g = d !== "" && f.insertedText.endsWith(d) ? f.insertedText.slice(0, -d.length) : f.insertedText;
    O.current = { mode: "INSERT", insertedText: g + a };
  }, []);
  function rt(a, d, f, g) {
    for (let x of a.keys()) if (x.startsWith(d)) {
      te.current = { char: d, at: Date.now(), offsetAfter: f, recorded: g };
      return;
    }
  }
  let qt = (0, import_chunk_bs4h6795.ye)(() => {
    te.current = null;
  }, []), Qt = (0, import_chunk_bs4h6795.ye)(() => {
    let a = O.current;
    if (a.mode !== "INSERT") O.current = { ...a, wanted: void 0 };
  }, []), Fe = (0, import_chunk_bs4h6795.ye)((a, d) => {
    if (d !== void 0) a.setOffset(d);
    te.current = null, me.current = null, je.current = null, O.current = { mode: "INSERT", insertedText: "" }, A("INSERT"), P(null), o?.("INSERT");
  }, [o]), D = (0, import_chunk_bs4h6795.ye)((a, d) => {
    let f = O.current;
    if (f.mode === "INSERT") {
      let g = X.current, x = g === me.current;
      if (g?.type === "visualOp" && g.op === "change" && x) X.current = { type: "visualChange", span: g.span, linewise: g.linewise, text: f.insertedText ?? "" };
      else if (Qe(g) && g.type !== "visualOp" && x && (f.insertedText || (d?.buffer ? d.buffer.text : e.normalize("NFC")) === je.current)) X.current = { ...g, insertedText: f.insertedText };
      else if (f.insertedText || d?.claimEmptyInsert && !Qe(g)) X.current = { type: "insert", text: f.insertedText };
      let R = d?.buffer ? d.buffer.offset : a.offset, M = d?.buffer ? d.buffer.text : e.normalize("NFC");
      if (R > 0 && M[R - 1] !== `
`) {
        let S = R > M.length ? 1 : (0, import_chunk_em52jhgp.wz)(M.slice(0, R)).length;
        a.setOffset(R - S);
      } else if (d?.buffer) a.setOffset(R);
    }
    O.current = { mode: "NORMAL", command: { type: "idle" } }, A("NORMAL"), P(null), o?.("NORMAL");
  }, [o, e]), We = (0, import_chunk_bs4h6795.ye)((a, d, f) => {
    O.current = { mode: "VISUAL", kind: d, anchor: a, command: { type: "idle" }, wanted: f };
    let g = d === "line" ? "VISUAL LINE" : "VISUAL";
    A(g), P(a), o?.(g);
  }, [o]);
  function ie(a, d, f = false) {
    let g;
    return { cursor: a, text: a.text, setText: (x, R) => {
      g = x, r(x, R);
    }, setOffset: (x) => d.setOffset(x), enterInsert: (x) => {
      Fe(d, x), je.current = g ?? a.text;
    }, getRegister: () => ne.current.register, getRegisterIsLinewise: () => ne.current.registerIsLinewise, setRegister: (x, R) => {
      ne.current.register = x, ne.current.registerIsLinewise = R;
    }, getLastFind: () => ne.current.lastFind, setLastFind: (x, R) => {
      ne.current.lastFind = { type: x, char: R };
    }, recordChange: f ? () => {
    } : (x) => {
      if (X.current = x, Qe(x) && O.current.mode === "INSERT") me.current = x;
    } };
  }
  function ot(a, d, f) {
    let g = a.text;
    return { ...a, setText: (x, R) => {
      let M = { value: g, cursorOffset: a.cursor.offset };
      g = x, a.setText(x, R ?? { previous: M });
    }, enterInsert: (x) => {
      let R = g.slice(0, x) + d + g.slice(x), M = { value: g, cursorOffset: x }, S = ge(R, f, M) ? d.slice(1) : d;
      a.setText(R, { previous: M });
      let V = g.slice(0, x), w = (V + S).normalize("NFC"), K = w.startsWith(V) ? (0, import_chunk_em52jhgp.wz)(w.slice(V.length)) : "", L = K && !/^[\p{Mn}\p{Me}]/u.test(K) ? K : (0, import_chunk_em52jhgp.wz)(w), k = w.endsWith(`
`) ? w.length : w.length - L.length, N = x > 0 && V[x - 1] !== `
` ? x - (0, import_chunk_em52jhgp.wz)(V).length : x;
      a.setOffset(S ? k : N);
    } };
  }
  function ge(a, d, f) {
    return b !== void 0 && (0, import_chunk_5h9h52az.TTa)({ nextValue: a, value: f?.value ?? e, cursorOffset: f?.cursorOffset ?? d.offset, mode: b() });
  }
  function st(a, d, f, g) {
    if (a.type === "insertCommand") {
      if (a.insertedText === void 0) return;
      let x = Ye(a.key, d);
      d = new import_chunk_gd8mknr6.pl(d.measuredText, x), a = { type: "insert", text: a.insertedText };
    }
    if ("insertedText" in a && a.insertedText !== void 0) f = ot(f, a.insertedText, g);
    switch (a.type) {
      case "insert":
        if (a.text) {
          let x = d.insert(a.text), R = ge(x.text, g);
          f.setText(x.text);
          let M = R ? x.text.slice(1) : x.text, S = x.offset - (R ? 1 : 0);
          f.setOffset(M[S - 1] === `
` ? S : S - (0, import_chunk_em52jhgp.wz)(M.slice(0, S)).length);
        }
        break;
      case "x":
        Te(a.count, f);
        break;
      case "substitute":
        Ie(a.count, f);
        break;
      case "replace":
        Re(a.char, a.count, f);
        break;
      case "toggleCase":
        ve(a.count, f);
        break;
      case "indent":
        Le(a.dir, a.count, f);
        break;
      case "join":
        ht(a.count, f);
        break;
      case "openLine":
        fe(a.direction, f);
        break;
      case "operator":
        if (a.motion === a.op[0]) Z(a.op, a.count, f);
        else if (a.motion === "gg") Ae(a.op, a.count, f);
        else if (a.motion === "G") Ee(a.op, a.count, f);
        else Q(a.op, a.motion, a.count, f);
        break;
      case "operatorFind":
        xe(a.op, a.find, a.char, a.count, f);
        break;
      case "operatorTextObj":
        Ce(a.op, a.scope, a.objType, a.count, f);
        break;
      case "visualOp":
        Rt(a.op, a.span, a.linewise, f);
        break;
      case "visualReplace":
        St(a.char, a.span, a.linewise, f);
        break;
      case "visualCase":
        Et(a.caseOp, a.span, a.linewise, f);
        break;
      case "visualPaste":
        Nt(a.content, a.registerLinewise, a.selectionEndsLine, a.selectionOnOneLine, a.span, a.linewise, f);
        break;
      case "visualIndent":
        Ct(a.dir, a.count, a.lines, f);
        break;
      case "visualChange":
        vt(a.span, a.linewise, ot(f, a.text, g));
        break;
      case "paste":
        we(a.after, a.count, f);
        break;
    }
  }
  function it(a) {
    let d = X.current;
    if (d && a !== void 0 && "count" in d && An(d)) return { ...d, count: a };
    return d;
  }
  function at(a, d, f) {
    let g = it(f);
    if (!g) return;
    let x = import_chunk_gd8mknr6.pl.fromText(e, n, a.offset);
    st(g, x, { ...ie(x, a, true), wantedColumn: d }, a);
  }
  function Zt(a, d) {
    let f = e.normalize("NFC"), g = d.offset, x = (S, V) => {
      let w = V?.previous;
      if (!ge(S, d, w)) f = S;
      else if (S.length !== (w?.value ?? e).length + 1) f = S.slice(1);
      r(S, V);
    }, R = (S, V) => {
      let w = it(V);
      if (!w) return;
      let K = import_chunk_gd8mknr6.pl.fromText(f, n, g);
      st(w, K, { ...ie(K, d, true), text: f, setText: x, setOffset: (L) => {
        g = L, d.setOffset(L);
      }, enterInsert: (L) => {
        g = L, Fe(d, L);
      }, wantedColumn: S }, d);
    }, M = [...a];
    for (let S = 0; S < M.length; S++) {
      if (O.current.mode === "INSERT") {
        let T = M.slice(S).join(""), B = S7n();
        if (B.size > 0 && B.has(T.normalize("NFC"))) {
          (0, import_chunk_cqa9hrgx.u)("vim_insert_remap"), D(d, { buffer: { text: f, offset: g }, claimEmptyInsert: true });
          return;
        }
        let E = import_chunk_gd8mknr6.pl.fromText(f, n, g).insert(T), q = ge(E.text, d), _ = E.offset - (q ? 1 : 0);
        r(E.text), d.setOffset(_), O.current = { mode: "INSERT", insertedText: O.current.insertedText + T };
        let rn = q ? T.slice(1) : T, Pe = (0, import_chunk_em52jhgp.wz)(E.text.slice(0, E.offset));
        if (Pe && rn.endsWith(Pe)) rt(B, Pe, _, true);
        return;
      }
      let V = O.current;
      if (V.mode !== "NORMAL") return;
      let w = M[S];
      if ((w === "v" || w === "V") && (V.command.type === "idle" || V.command.type === "count")) {
        We(g, w === "V" ? "line" : "char", V.wanted);
        return;
      }
      let K = import_chunk_gd8mknr6.pl.fromText(f, n, g), L = false, k = { ...ie(K, d, false), text: f, setText: x, setOffset: (T) => {
        g = T, d.setOffset(T);
      }, enterInsert: (T) => {
        g = T, Fe(d, T);
      }, onDotRepeat: (T) => {
        L ||= X.current !== null, R(V.wanted, T);
      }, wantedColumn: V.wanted }, N = Ze(k, () => {
        L = true;
      }), j = ze(V.command, w, N);
      if (O.current.mode === "NORMAL") O.current = { mode: "NORMAL", command: j.next, wanted: et(j, L, V.wanted) };
    }
  }
  function en(a, d) {
    tn(a, d);
    let f = O.current;
    se(f.mode !== "INSERT" && f.command.type !== "idle");
  }
  function tn(a, d) {
    let f = O.current;
    if (f.mode === "INSERT" && a.readLate && En.test(a.sequence) && a.readAsEscapeThenKey()) {
      a.preventDefault();
      return;
    }
    let g = import_chunk_gd8mknr6.pl.fromText(e, n, d.offset), x = () => C?.(a.key, a);
    if (!(a.name === "left" && !a.ctrl && !a.meta && !a.fn && !a.superKey && !a.shift)) d.disarmLeftArrowConfirm?.();
    let R = te.current;
    if (te.current = null, a.ctrl || a.meta) {
      if (f.mode === "VISUAL") {
        x(), D(d), a.preventDefault();
        return;
      }
      d.handleKeyDown(a);
      return;
    }
    if (a.name === "escape") {
      if (x(), f.mode === "NORMAL") O.current = { mode: "NORMAL", command: { type: "idle" }, wanted: f.wanted };
      else if (f.mode === "VISUAL" && f.command.type !== "idle") O.current = { ...f, command: { type: "idle" } };
      else {
        if (f.mode === "VISUAL") Jt(g, d);
        D(d);
      }
      if (!s) a.preventDefault();
      return;
    }
    if (a.name === "return" && f.mode !== "VISUAL") {
      d.handleKeyDown(a);
      return;
    }
    if (f.mode === "INSERT") {
      if (a.name === "backspace" || a.name === "delete") {
        if (f.insertedText.length > 0) O.current = { mode: "INSERT", insertedText: f.insertedText.slice(0, -((0, import_chunk_em52jhgp.wz)(f.insertedText).length || 1)) };
      }
      let L = S7n();
      if (L.size > 0) {
        let k = a.key.normalize("NFC"), N = [...k].length, j = N === 1, T = qe(a, j);
        if (T && N <= 2 && R && L.has(R.char + (0, import_chunk_em52jhgp.n3)(k)) && Date.now() - R.at <= Dt && d.offset === R.offsetAfter && g.text.startsWith(R.char, g.offset - R.char.length)) {
          if (x(), R.recorded && f.insertedText.endsWith(R.char)) O.current = { mode: "INSERT", insertedText: f.insertedText.slice(0, -R.char.length) };
          let q = g.offset - R.char.length, _ = g.text.slice(0, q) + g.text.slice(g.offset);
          r(_), (0, import_chunk_cqa9hrgx.u)("vim_insert_remap"), D(d, { buffer: { text: _, offset: q }, claimEmptyInsert: true }), a.preventDefault();
          return;
        }
        if (T && !j && L.has(k)) {
          x(), (0, import_chunk_cqa9hrgx.u)("vim_insert_remap"), D(d, { claimEmptyInsert: true }), a.preventDefault();
          return;
        }
        let E = T ? (0, import_chunk_em52jhgp.wz)(k) : "";
        if (E) rt(L, E, d.offset + k.length, qe(a, [...a.key].length === 1));
      }
      d.handleKeyDown(a);
      return;
    }
    if (f.mode === "VISUAL") {
      let L = false, k = Ze({ ...ie(g, d, false), onUndo: i, onDotRepeat: () => at(d, f.wanted), wantedColumn: f.wanted }, () => {
        L = true;
      }), N = f.command.type === "idle" || f.command.type === "count", j = a.key;
      if (a.name === "left") j = N ? "h" : "";
      else if (a.name === "right") j = N ? "l" : "";
      else if (a.name === "up") j = N ? "k" : "";
      else if (a.name === "down") j = N ? "j" : "";
      else if (a.name === "return") j = N ? "j" : `
`;
      else if (a.name === "backspace") j = N ? z : "";
      else if (a.name === "delete") j = N && f.command.type !== "count" ? "x" : "";
      else if (a.key === "" || tt.has(a.name)) {
        a.preventDefault();
        return;
      } else if ([...a.key].length > 1) {
        a.preventDefault();
        return;
      }
      x();
      let T = _t(f.command, j, k), B = f.kind === "line";
      if ("next" in T) O.current = { mode: "VISUAL", kind: f.kind, anchor: f.anchor, command: T.next, wanted: et(T, L, f.wanted) };
      else switch (T.exit) {
        case "operator":
          if (It(T.op, f.anchor, k, B || T.forceLinewise === true), O.current.mode === "VISUAL") D(d);
          break;
        case "replace":
          Lt(T.char, f.anchor, k, B), D(d);
          break;
        case "case":
          kt(T.op, f.anchor, k, B), D(d);
          break;
        case "paste":
          if (k.getRegister()) At(f.anchor, k, B), D(d);
          else O.current = { ...f, command: { type: "idle" } };
          break;
        case "join":
          bt(f.anchor, k, B), D(d);
          break;
        case "indent":
          xt(T.dir, T.count, f.anchor, k), D(d);
          break;
        case "swap": {
          let E = g.offset;
          d.setOffset(f.anchor), O.current = { mode: "VISUAL", kind: f.kind, anchor: E, command: { type: "idle" } }, P(E);
          break;
        }
        case "selectRange": {
          let E = T.end > T.start ? g.measuredText.prevOffset(T.end) : T.start;
          d.setOffset(E), O.current = { mode: "VISUAL", kind: f.kind, anchor: T.start, command: { type: "idle" } }, P(T.start);
          break;
        }
        default: {
          let E = T.key === "V" ? "line" : "char";
          if (E === f.kind) {
            let q = Jt(g, d);
            D(d);
            let { wanted: _ } = f;
            if (_?.offset === g.offset && _.text === g.text) O.current = { mode: "NORMAL", command: { type: "idle" }, wanted: { ..._, offset: q } };
          } else We(f.anchor, E, f.wanted);
          break;
        }
      }
      a.preventDefault();
      return;
    }
    if (f.mode !== "NORMAL") return;
    if (f.command.type === "idle" && !a.shift && (a.name === "up" || a.name === "down" || a.name === "left" && g.text === "")) {
      d.handleKeyDown(a);
      return;
    }
    if (f.command.type === "idle" && a.key === "?" && c) {
      c(), a.preventDefault();
      return;
    }
    if (x(), f.command.type === "idle" && a.key === "/" && l) {
      l(), a.preventDefault();
      return;
    }
    if (f.command.type === "idle") {
      if (a.key === "k") {
        let L = g.text.indexOf(`
`);
        if (L === -1 || g.offset <= L) {
          p?.(), a.preventDefault();
          return;
        }
      }
      if (a.key === "j") {
        let L = g.text.lastIndexOf(`
`);
        if (L === -1 || g.offset > L) {
          m?.(), a.preventDefault();
          return;
        }
      }
    }
    let M = false, S = Ze({ ...ie(g, d, false), onUndo: i, onDotRepeat: (L) => {
      M ||= X.current !== null, at(d, f.wanted, L);
    }, wantedColumn: f.wanted }, () => {
      M = true;
    }), V = f.command.type === "idle" || f.command.type === "count" || f.command.type === "operator" || f.command.type === "operatorCount", w = a.key;
    if (a.name === "left") w = "h";
    else if (a.name === "right") w = "l";
    else if (a.name === "up") w = "k";
    else if (a.name === "down") w = "j";
    else if (V && a.name === "backspace") w = z;
    else if (V && f.command.type !== "count" && a.name === "delete") w = "x";
    else if (a.key === "" || tt.has(a.name)) return;
    else if ([...a.key].length > 1) {
      Zt(a.key, d), a.preventDefault();
      return;
    }
    if ((w === "v" || w === "V") && (f.command.type === "idle" || f.command.type === "count")) {
      We(g.offset, w === "V" ? "line" : "char", f.wanted);
      return;
    }
    let K = ze(f.command, w, S);
    if (O.current.mode === "NORMAL") O.current = { mode: "NORMAL", command: K.next, wanted: et(K, M, f.wanted) };
    a.preventDefault();
  }
  let nn = (0, import_chunk_bs4h6795.ye)((a, d) => {
    if (te.current = null, me.current = null, a === "INSERT") O.current = { mode: "INSERT", insertedText: "" }, P(null);
    else if (a === "NORMAL") O.current = { mode: "NORMAL", command: { type: "idle" } }, P(null);
    else {
      let f = a === "VISUAL LINE" ? "line" : "char", g = d.offset;
      O.current = { mode: "VISUAL", kind: f, anchor: g, command: { type: "idle" } }, P(g);
    }
    A(a), se(false), o?.(a);
  }, [o]);
  return { handleKeyDown: en, mode: v, setMode: nn, visualAnchor: W, recordInsertedText: Xt, recordInsert: Yt, cancelPendingRemap: qt, forgetColumn: Qt, isCommandPending: nt };
}
function N2s(t) {
  let { inputFilter: e } = t, r = (0, import_chunk_bs4h6795.I)(null), n = L2s({ value: t.value, onChange: (o, i) => {
    if (o === "" && t.value !== "") r.current?.();
    t.onChange(o, i);
  }, columns: t.columns, disableEscapeDoublePress: t.disableEscapeDoublePress, onModeChange: t.onModeChange, onUndo: t.onUndo && (() => {
    r.current?.(), t.onUndo?.();
  }), onOpenHistorySearch: t.onOpenHistorySearch, onToggleHelp: t.onToggleHelp, onHistoryUp: t.onHistoryUp && (() => {
    r.current?.(), t.onHistoryUp?.();
  }), onHistoryDown: t.onHistoryDown && (() => {
    r.current?.(), t.onHistoryDown?.();
  }), inputFilter: e, getInputMode: t.getInputMode, isActive: t.focus !== false }), s = (0, import_chunk_gd8mknr6.YWr)({ ...t, selectionAnchor: n.visualAnchor, selectionLinewise: n.mode === "VISUAL LINE", isCursorOnCharacter: n.mode !== "INSERT", inputFilter: (o, i) => {
    let l = e ? e(o, i) : o;
    if (o === `
` && (i.name === "return" || i.name === "enter" || i.ctrl && i.name === "j")) {
      let c = i.name === "return" && t.multiline === true && t.disableBackslashReturn !== true;
      n.recordInsert(l, c ? "\\" : "");
    } else n.recordInsertedText(l, i);
    return l;
  } });
  return r.current = s.noteKeystrokeEmptied ?? null, { ...s, handleKeyDown: (o) => n.handleKeyDown(o, s), recordInsert: n.recordInsert, mode: n.mode, setMode: (o) => n.setMode(o, s), cancelPendingRemap: n.cancelPendingRemap, forgetColumn: n.forgetColumn, isCommandPending: n.isCommandPending };
}
function Nn() {
  let t = (0, import_chunk_f9x2f6cx.vda)();
  if (t) return t;
  let e = pt();
  return (0, import_chunk_f9x2f6cx.Tda)(e), e;
}
