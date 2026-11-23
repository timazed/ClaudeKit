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
var chunk_5s42se7d_exports = {};
__export(chunk_5s42se7d_exports, {
  D1a: () => D1a,
  F1a: () => F1a,
  H1a: () => H1a,
  I1a: () => I1a,
  L1a: () => L1a,
  M1a: () => M1a,
  N1a: () => N1a,
  O1a: () => O1a,
  R9o: () => R9o,
  Yqe: () => Yqe,
  Z8r: () => Z8r,
  eYr: () => eYr,
  eri: () => eri,
  nri: () => nri,
  tYr: () => tYr,
  tri: () => tri
});
module.exports = __toCommonJS(chunk_5s42se7d_exports);
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_an17w9qc = require("/$bunfs/root/chunk-an17w9qc.js");
var import_chunk_1pan7v6b = require("/$bunfs/root/chunk-1pan7v6b.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
var O = 8, Z8r = 120, R = 40, O1a = R + O, I1a = Z8r + O, B = (1 + import_chunk_mh32mevx.rGi) * 2, R9o = 400, g = "  ", E = '" +', Yqe = "* ", eYr = `${Yqe}Name may use look-alike characters.`, D = "sent as ", T = `${g}outside this session's folders`;
function eri(t) {
  return t === T || t === `${T}.`;
}
var v = /[\u1735\u2041\u2044\u2215\u22F0\u22F1\u233F-\u2342\u2571\u27CB\u29F6-\u29F8\u2AFB\u2AFD\u2E17\u2E4A\u2E5D\u2F03\u3033-\u3035\u31CF\u31D2\u31D3\uA718\uFF9E\uFF9F\uFFFD\u{16FE4}\u{1D23A}\u{1F67C}\u{1F67D}\u{1FBA0}-\u{1FBA3}]/u, X = /[\u3099\u309A]/, Z = new RegExp("\\p{Script=Latin}", "u"), N = new RegExp("\\p{M}", "u"), W = [new RegExp("\\p{Script=Arabic}", "u"), new RegExp("\\p{Script=Armenian}", "u"), new RegExp("\\p{Script=Bengali}", "u"), new RegExp("\\p{Script=Cyrillic}", "u"), new RegExp("\\p{Script=Devanagari}", "u"), new RegExp("\\p{Script=Ethiopic}", "u"), new RegExp("\\p{Script=Georgian}", "u"), new RegExp("\\p{Script=Greek}", "u"), new RegExp("\\p{Script=Gujarati}", "u"), new RegExp("\\p{Script=Gurmukhi}", "u"), new RegExp("\\p{Script=Hangul}", "u"), new RegExp("\\p{Script=Han}", "u"), new RegExp("\\p{Script=Hebrew}", "u"), new RegExp("\\p{Script=Hiragana}", "u"), new RegExp("\\p{Script=Katakana}", "u"), new RegExp("\\p{Script=Kannada}", "u"), new RegExp("\\p{Script=Khmer}", "u"), new RegExp("\\p{Script=Lao}", "u"), new RegExp("\\p{Script=Latin}", "u"), new RegExp("\\p{Script=Malayalam}", "u"), new RegExp("\\p{Script=Myanmar}", "u"), new RegExp("\\p{Script=Oriya}", "u"), new RegExp("\\p{Script=Sinhala}", "u"), new RegExp("\\p{Script=Tamil}", "u"), new RegExp("\\p{Script=Telugu}", "u"), new RegExp("\\p{Script=Thaana}", "u"), new RegExp("\\p{Script=Thai}", "u"), new RegExp("\\p{Script=Tibetan}", "u")], J = new RegExp(`(?![\\p{Script=Common}\\p{Script=Inherited}${W.map((t) => t.source).join("")}])\\p{L}`, "u"), Y = "\xAA\xBA", A = new RegExp("^(?:(?=\\p{L})\\p{Script=Latin}\\p{M}*)+$", "u"), q = new RegExp("(?=\\p{L})\\p{Script=Latin}", "u"), C = new RegExp("\\p{Nd}", "u"), Q = /[\p{L}\p{M}\p{Nd}]/u, x = new RegExp("(?![\\p{Script=Latin}\\p{Script=Common}\\p{Script=Inherited}])\\p{L}", "u"), h = new RegExp("^\\p{L}", "u"), y = new RegExp("\\p{Lm}", "u"), V = new RegExp("\\p{Script=Common}", "u"), b = /[\p{Script=Latin}\p{Script=Common}]/u, _ = /[\uff21-\uff3a\uff41-\uff5a]/, w = /[\uff10-\uff19]/, K = [new RegExp("\\p{Script=Cyrillic}", "u"), new RegExp("\\p{Script=Greek}", "u"), new RegExp("\\p{Script=Armenian}", "u"), new RegExp("\\p{Script=Cherokee}", "u"), new RegExp("\\p{Script=Coptic}", "u"), new RegExp("\\p{Script=Lisu}", "u")], tt = new RegExp("(?!\\p{Script=Inherited})[\\p{scx=Arabic}\\p{scx=Hebrew}\\p{scx=Syriac}\\p{scx=Thaana}\\p{scx=Nko}\\p{scx=Samaritan}\\p{scx=Mandaic}\\p{scx=Adlam}\\p{scx=Hanifi_Rohingya}\\p{scx=Yezidi}\\u{10800}-\\u{10FFF}\\u{1E800}-\\u{1EFFF}]", "u"), j = "\u0131", nt = new RegExp("^(?:[\\p{L}\\p{N}][\\p{L}\\p{M}]*|[\\p{P}\\p{S}]|\\p{Extended_Pictographic}\\p{Emoji_Modifier}?|\\p{Regional_Indicator}{2})$", "u");
function M1a(t) {
  let s = Math.min(Z8r, t - O);
  return s < R ? void 0 : s;
}
function tYr(t, s) {
  let { rows: d, isMarked: c } = I(t, s);
  return d.length + (c ? 1 : 0) <= import_chunk_an17w9qc.$$;
}
function tri(t) {
  return I(t, Z8r).isMarked;
}
function P(t) {
  return L("", t, "", R).map((s) => s.trimStart()).join(" ");
}
function H1a(t, s, d, c, o) {
  let { rows: i, isMarked: r } = I([...t.filter((S) => S.outside === true), ...t.filter((S) => S.outside !== true)], d), [e] = t, a = t.length === 1 && e !== void 0 && !r ? F(M(e.sentAs ?? (0, import_path.basename)((0, import_chunk_1pan7v6b.Zon)(e.path)))) : "", l = t.length !== 1 ? `copies of ${t.length} files` : a === "" || (0, import_chunk_an17w9qc.Xqe)(a) > d ? "a copy of 1 file" : `a copy of ${P(a)}`, n = (0, import_chunk_4smdap7r.U)(t, (S) => S.outside === true), u = n === 0 ? "" : ` (${t.length === 1 ? "" : `${n} `}outside this session's folders)`, p = P(nri(s)), f = [...o === void 0 ? [] : [`connector ${o}`], ...c === void 0 ? [] : [`Claude account ${(0, import_chunk_1pan7v6b.Qon)(c)}`]];
  return [`${[`Allowing this sends ${l}${u} through Anthropic`, `to ${p}, a third-party app. Its terms and privacy policy apply.${f.length === 0 ? "" : ` (${f.join(", ")})`}`, ...i].join(`
`)}.`, ...r ? [eYr] : []].join(`
`);
}
function D1a(t) {
  return t.split(`
`).some(eri);
}
function nri(t) {
  return (0, import_chunk_1pan7v6b.Qon)(t).replace(/['`]{2,}/g, import_chunk_kx2fp6pc.O3);
}
function L1a(t) {
  return typeof t === "string" && t.length <= 100 && /^(?!.*['`]{2})[\w.!#$%&'*+/=?^`{|}~-]+@[A-Za-z0-9.-]+$/.test(t) ? t : void 0;
}
function N1a(t) {
  return z(t)?.written;
}
function F1a(t) {
  return z(t)?.liesAt;
}
function z(t) {
  let s = t.split(`
`).slice(2), d = s.at(-1) === eYr, c = d ? s.slice(0, -1) : s, o = [], i = [], r = false;
  for (let e = 0; e < c.length; e++) {
    let a = c[e];
    if (!a.startsWith(Yqe)) continue;
    r = true;
    let l = a.startsWith(`${Yqe}the file at "`), n = a.startsWith(`${Yqe}${D}"`);
    if (!l && !n && !a.startsWith(`${Yqe}"`)) return;
    while (a.endsWith(E)) {
      if (e++, c[e]?.startsWith(`${g}"`) !== true) return;
      a = `${a.slice(0, -E.length)}${c[e].slice(g.length + 1)}`;
    }
    let u = (0, import_chunk_0jve1fep.et)(a.slice(a.indexOf('"'), a.lastIndexOf('"') + 1), false);
    if (typeof u !== "string") return;
    (l || n ? i : o).push(u);
  }
  return d === r ? { written: o, liesAt: i } : void 0;
}
function I(t, s) {
  let d = t.map((r) => ({ written: (0, import_chunk_1pan7v6b.Zon)(r.path), lies: (0, import_chunk_1pan7v6b.Cal)(r.path, (0, import_chunk_z6pfqf6e.pn)(r.realPath)) ? r.realPath : void 0, size: (0, import_chunk_7e12xj51.dn)(r.size), outside: r.outside === true, sentAs: r.sentAs })), c = d.flatMap(({ written: r, lies: e }) => e === void 0 ? [r] : [r, e]), o = new Map((0, import_chunk_mh32mevx.sGe)(c, M).map((r, e) => [c[e], F(r)])), i = new Set([...c, ...d.flatMap(({ sentAs: r }) => r === void 0 ? [] : [r])].filter(rt));
  return { rows: d.flatMap(({ written: r, lies: e, size: a, outside: l, sentAs: n }) => [...L(i.has(r) ? Yqe : "", o.get(r), ` (${a})`, s), ...e === void 0 ? [] : L(`${i.has(e) ? Yqe : g}the file at `, o.get(e), "", s), ...n === void 0 ? [] : L(`${i.has(n) ? Yqe : g}${D}`, F(M(n)), "", s), ...l ? [T] : []]), isMarked: i.size > 0 };
}
function F(t) {
  return t.replace(/[<>&`]|'{2,}/g, import_chunk_kx2fp6pc.O3);
}
function M(t) {
  let { letters: s, isCodedForLooks: d } = G(t), c = `"${s.map((o, i) => {
    let r = o.normalize("NFKC"), e = `${o}${r}`;
    return !tt.test(o) && !d[i] && nt.test(o) && (0, import_chunk_an17w9qc.Xqe)(o) <= B && (0, import_chunk_mgh1y10w.oe)(o) > 0 && !X.test(r) && !e.includes("/") && !v.test(e) && (0, import_chunk_r8478wtb.zPs)(e) === e && Array.from((0, import_chunk_em52jhgp.ul)().segment(`"${o}"`)).length === 3 ? o : o === '"' || o === "\\" ? `\\${o}` : (0, import_chunk_r8478wtb.zPs)(o, " ").replace(/[^ -~]/gu, import_chunk_kx2fp6pc.O3);
  }).join("")}"`;
  return (0, import_chunk_mh32mevx.Ta)(c).text === c ? c : (0, import_chunk_1pan7v6b.Qon)(t);
}
function G(t) {
  let s = Array.from((0, import_chunk_em52jhgp.ul)().segment(t), ({ segment: i }) => i), d = s.map((i) => {
    let r = String.fromCodePoint(i.codePointAt(0) ?? 0);
    if (Z.test(r)) return 0;
    let e = K.findIndex((a) => a.test(r));
    return e === -1 ? void 0 : e + 1;
  }), c = s.map((i, r) => d[r] === 0 && i !== j && Object.hasOwn(import_chunk_hr2stdq7.iOo.table, String.fromCodePoint(i.codePointAt(0) ?? 0))), o = 0;
  while (o < s.length) {
    let i = o;
    while (i < s.length && h.test(s[i])) i++;
    if (new Set(d.slice(o, i).filter((e) => e !== void 0)).size > 1) {
      for (let e = o; e < i; e++) if (d[e] !== void 0 && d[e] !== 0) c[e] = true;
    }
    o = Math.max(i, o + 1);
  }
  return { letters: s, scripts: d, isCodedForLooks: c };
}
function rt(t) {
  let { letters: s, scripts: d, isCodedForLooks: c } = G(t);
  if (c.includes(true) || J.test(t) || s.some((o, i) => d[i] !== void 0 && h.test(o) && N.test(o.normalize("NFC")))) return true;
  return t.split(/[\\/]/).some((o) => {
    let i = Array.from(o, (n) => {
      let u = C.test(n), p = n.codePointAt(0) ?? 0, f = 0;
      while (u && C.test(String.fromCodePoint(p - f - 1))) f++;
      return { character: n, reading: st(n), digit: u ? f % 10 : void 0 };
    });
    if (!i.some(({ reading: n }) => x.test(n)) && i.some(({ character: n, reading: u }) => u !== n && A.test(u))) return true;
    if (K.some((n) => {
      let u = i.filter(({ character: p }) => n.test(p) && h.test(p) && !y.test(p));
      return u.length > 0 && u.every(({ reading: p }) => A.test(p));
    })) return true;
    let r = [], e = [r];
    for (let n of i) if (Q.test(n.character) && !x.test(n.reading)) r.push(n);
    else r = [], e.push(r);
    let a = /* @__PURE__ */ new Set();
    for (let n of e) {
      let u = n.filter(({ character: f, reading: m }) => q.test(m) && b.test(f)), p = n.filter(({ digit: f }) => f !== void 0);
      if (u.length > 0) {
        let f = u.every(({ character: m }) => _.test(m));
        if (p.some(({ character: m }) => m > "\x7F" && !(f && w.test(m)))) return true;
      } else if (p.every(({ character: f, digit: m }) => m === 0 && !V.test(f))) for (let { character: f } of p) a.add(f);
    }
    if (Array.from(a).some((n) => {
      let u = W.find((p) => p.test(n));
      return u === void 0 || !i.some(({ character: p, digit: f }) => u.test(p) && (h.test(p) && !y.test(p) || (f ?? 0) > 0));
    })) return true;
    let l;
    for (let n of i) {
      if (N.test(n.character)) continue;
      let u = A.test(n.reading) && b.test(n.character);
      if (u && l !== void 0 && (n.reading !== n.character || l.reading !== l.character) && !(_.test(n.character) && _.test(l.character))) return true;
      l = u ? n : void 0;
    }
    return i.some(({ character: n, reading: u, digit: p }) => p !== void 0 && u !== n && !w.test(n));
  });
}
function st(t) {
  if (t <= "\x7F" || Y.includes(t)) return t;
  return k(t) ?? Array.from(t.normalize("NFKC"), (s) => k(s) ?? s).join("");
}
function k(t) {
  let [s = "", ...d] = t.normalize("NFD");
  return s !== j && Object.hasOwn(import_chunk_hr2stdq7.iOo.table, s) ? `${import_chunk_hr2stdq7.iOo.table[s]}${d.join("")}` : void 0;
}
function L(t, s, d, c) {
  let o = s.lastIndexOf('"'), i = s.slice(1, o), r = i.split(/(\\u[0-9a-f]{4}|\\.)/).flatMap((f, m) => m % 2 === 1 ? [f] : Array.from((0, import_chunk_em52jhgp.ul)().segment(f), ({ segment: S }) => S)), e = [], a = `${t}"`, l = "", n = (0, import_chunk_an17w9qc.Xqe)(i) + 1;
  for (let f of r) {
    let m = (0, import_chunk_an17w9qc.Xqe)(a) + (0, import_chunk_an17w9qc.Xqe)(l);
    if (l !== "" && m + n > c - 1 && m + (0, import_chunk_an17w9qc.Xqe)(f) + (0, import_chunk_an17w9qc.Xqe)(E) > c - 1) e.push(`${a}${l}${E}`), a = `${g}"`, l = "";
    l += f, n -= (0, import_chunk_an17w9qc.Xqe)(f);
  }
  let u = `${a}${l}"`, p = `${s.slice(o + 1)}${d}`;
  return p !== "" && (0, import_chunk_an17w9qc.Xqe)(u) + (0, import_chunk_an17w9qc.Xqe)(p) > c - 1 ? [...e, u, `${g}${p.trimStart()}`] : [...e, `${u}${p}`];
}
