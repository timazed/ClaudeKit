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
var chunk_40j5bbmz_exports = {};
__export(chunk_40j5bbmz_exports, {
  $Wr: () => $Wr,
  C2s: () => C2s,
  Dya: () => Dya,
  p7n: () => p7n
});
module.exports = __toCommonJS(chunk_40j5bbmz_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_6b5tg8j3 = require("/$bunfs/root/chunk-6b5tg8j3.js");
var import_chunk_vj6gt5th = require("/$bunfs/root/chunk-vj6gt5th.js");
var import_chunk_4ssv8fte = require("/$bunfs/root/chunk-4ssv8fte.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_x8bs72nm = require("/$bunfs/root/chunk-x8bs72nm.js");
var import_chunk_4684b8fc = require("/$bunfs/root/chunk-4684b8fc.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_path = require("path");
var G = "\x1B[0m", A = "\x1B[2m", U = "\x1B[22m";
function u(e, n, t) {
  return { r: e, g: n, b: t, a: 255 };
}
function b(e) {
  return { r: e, g: 0, b: 0, a: 0 };
}
var B = { r: 0, g: 0, b: 0, a: 1 }, he = B;
function Z(e) {
  if (e.includes("ansi")) return "ansi";
  return import_chunk_d57v19zt.Re.level >= 3 ? "truecolor" : "color256";
}
var P = [0, 95, 135, 175, 215, 255];
function be(e, n, t) {
  let l = (m) => m < 48 ? 0 : m < 115 ? 1 : m < 155 ? 2 : m < 195 ? 3 : m < 235 ? 4 : 5, o = l(e), i = l(n), r = l(t), c = 16 + 36 * o + 6 * i + r, a = Math.round((e + n + t) / 3);
  if (a < 5) return 16;
  if (a > 244 && o === i && i === r) return c;
  let d = Math.max(0, Math.min(23, Math.round((a - 8) / 10))), g = 232 + d, k = 8 + d * 10, f = P[o], S = P[i], p = P[r], C = (e - f) ** 2 + (n - S) ** 2 + (t - p) ** 2;
  return (e - k) ** 2 + (n - k) ** 2 + (t - k) ** 2 < C ? g : c;
}
function O(e, n, t) {
  if (e.a === 0) {
    let o = e.r;
    if (o < 8) return `\x1B[${(n ? 30 : 40) + o}m`;
    if (o < 16) return `\x1B[${(n ? 90 : 100) + (o - 8)}m`;
    return `\x1B[${n ? 38 : 48};5;${o}m`;
  }
  if (e.a === 1) return n ? "\x1B[39m" : "\x1B[49m";
  let l = n ? 38 : 48;
  if (t === "truecolor") return `\x1B[${l};2;${e.r};${e.g};${e.b}m`;
  return `\x1B[${l};5;${be(e.r, e.g, e.b)}m`;
}
function I(e, n, t, l) {
  let o = l ? G + A : G;
  for (let [i, r] of e) {
    if (o += O(i.foreground, true, n), !t) o += O(i.background, false, n);
    o += r;
  }
  return o + G;
}
function ke(e) {
  if (e.includes("ansi")) return "ansi";
  if (e.includes("dark")) return "Monokai Extended";
  return "GitHub";
}
var E = u(248, 248, 242), _ = u(51, 51, 51), F = /* @__PURE__ */ new Map([["keyword", u(249, 38, 114)], ["_storage", u(102, 217, 239)], ["built_in", u(166, 226, 46)], ["type", u(166, 226, 46)], ["literal", u(190, 132, 255)], ["number", u(190, 132, 255)], ["string", u(230, 219, 116)], ["title", u(166, 226, 46)], ["title.function", u(166, 226, 46)], ["title.class", u(166, 226, 46)], ["title.class.inherited", u(166, 226, 46)], ["params", u(253, 151, 31)], ["comment", u(117, 113, 94)], ["meta", u(117, 113, 94)], ["attr", u(166, 226, 46)], ["attribute", u(166, 226, 46)], ["variable", E], ["variable.language", E], ["property", E], ["operator", u(249, 38, 114)], ["punctuation", E], ["symbol", u(190, 132, 255)], ["regexp", u(230, 219, 116)], ["subst", E]]), Ce = new Map([...F, ["keyword", b(218)], ["operator", b(218)], ["literal", b(183)], ["number", b(183)], ["symbol", b(183)], ["params", b(215)], ["comment", b(250)], ["meta", b(250)]]), K = /* @__PURE__ */ new Map([["keyword", u(167, 29, 93)], ["_storage", u(167, 29, 93)], ["built_in", u(0, 134, 179)], ["type", u(0, 134, 179)], ["literal", u(0, 134, 179)], ["number", u(0, 134, 179)], ["string", u(24, 54, 145)], ["title", u(121, 93, 163)], ["title.function", u(121, 93, 163)], ["title.class", _], ["title.class.inherited", _], ["params", u(0, 134, 179)], ["comment", u(150, 152, 150)], ["meta", u(150, 152, 150)], ["attr", u(0, 134, 179)], ["attribute", u(0, 134, 179)], ["variable", u(0, 134, 179)], ["variable.language", u(0, 134, 179)], ["property", u(0, 134, 179)], ["operator", u(167, 29, 93)], ["punctuation", _], ["symbol", u(0, 134, 179)], ["regexp", u(24, 54, 145)], ["subst", _]]), ye = /* @__PURE__ */ new Set(["const", "let", "var", "function", "class", "type", "interface", "enum", "namespace", "module", "def", "fn", "func", "struct", "trait", "impl"]), xe = /* @__PURE__ */ new Map([["keyword", b(13)], ["_storage", b(14)], ["built_in", b(14)], ["type", b(14)], ["literal", b(12)], ["number", b(12)], ["string", b(10)], ["title", b(11)], ["title.function", b(11)], ["title.class", b(11)], ["comment", b(8)], ["meta", b(8)]]);
function ee(e, n) {
  let t = e.includes("dark"), l = e.includes("ansi"), o = e.includes("daltonized"), i = n === "truecolor";
  if (l) return { addLine: B, addWord: B, addDecoration: b(10), deleteLine: B, deleteWord: B, deleteDecoration: b(9), foreground: t ? b(7) : b(0), background: B, scopes: xe };
  if (t) {
    let g = E, k = u(61, 1, 0), f = u(92, 2, 0), S = u(220, 90, 90), p = i ? void 0 : Ce;
    if (o) return { addLine: i ? u(0, 27, 41) : b(17), addWord: i ? u(0, 48, 71) : b(24), addDecoration: u(81, 160, 200), deleteLine: k, deleteWord: f, deleteDecoration: S, foreground: g, background: B, scopes: F, addScopes: p };
    return { addLine: i ? u(2, 40, 0) : b(22), addWord: i ? u(4, 71, 0) : b(28), addDecoration: u(80, 200, 80), deleteLine: k, deleteWord: f, deleteDecoration: S, foreground: g, background: B, scopes: F, addScopes: p };
  }
  let r = _, c = u(255, 220, 220), a = u(255, 199, 199), d = u(207, 34, 46);
  if (o) return { addLine: u(219, 237, 255), addWord: u(179, 217, 255), addDecoration: u(36, 87, 138), deleteLine: c, deleteWord: a, deleteDecoration: d, foreground: r, background: B, scopes: K };
  return { addLine: u(220, 255, 220), addWord: u(178, 255, 178), addDecoration: u(36, 138, 61), deleteLine: c, deleteWord: a, deleteDecoration: d, foreground: r, background: B, scopes: K };
}
var Se = /* @__PURE__ */ new Map([["black", 0], ["red", 1], ["green", 2], ["yellow", 3], ["blue", 4], ["magenta", 5], ["cyan", 6], ["white", 7], ["blackBright", 8], ["redBright", 9], ["greenBright", 10], ["yellowBright", 11], ["blueBright", 12], ["magentaBright", 13], ["cyanBright", 14], ["whiteBright", 15]]);
function v(e) {
  if (e === void 0) return null;
  let n = /^rgb\(\s?(\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\s?\)$/.exec(e);
  if (n) return u(Number(n[1]), Number(n[2]), Number(n[3]));
  let t = /^#([0-9a-fA-F]{6})$/.exec(e);
  if (t) {
    let i = parseInt(t[1], 16);
    return u(i >> 16, i >> 8 & 255, i & 255);
  }
  let l = /^#([0-9a-fA-F]{3})$/.exec(e);
  if (l) {
    let [i, r, c] = l[1];
    return u(parseInt(i + i, 16), parseInt(r + r, 16), parseInt(c + c, 16));
  }
  let o = /^ansi256\(\s?(\d{1,3})\s?\)$/.exec(e);
  if (o) return b(Number(o[1]));
  if (e.startsWith("ansi:")) {
    let i = Se.get(e.slice(5));
    return i === void 0 ? null : b(i);
  }
  return null;
}
function Te(e, n, t) {
  let l = v((t ? n.diffAddedDimmed : void 0) ?? n.diffAdded), o = v((t ? n.diffRemovedDimmed : void 0) ?? n.diffRemoved), i = v(n.diffAddedWord), r = v(n.diffRemovedWord);
  return { ...e, addLine: l ?? e.addLine, deleteLine: o ?? e.deleteLine, addWord: i ?? e.addWord, deleteWord: r ?? e.deleteWord };
}
function D(e) {
  return { foreground: e.foreground, background: e.background };
}
function H(e, n) {
  switch (e) {
    case "+":
      return n.addLine;
    case "-":
      return n.deleteLine;
    case " ":
    case "\\":
      return n.background;
  }
}
function we(e, n) {
  switch (e) {
    case "+":
      return n.addWord;
    case "-":
      return n.deleteWord;
    case " ":
    case "\\":
      return n.background;
  }
}
function ne(e, n) {
  switch (e) {
    case "+":
      return n.addDecoration;
    case "-":
      return n.deleteDecoration;
    case " ":
    case "\\":
      return n.foreground;
  }
}
var X = /* @__PURE__ */ new Map([["Dockerfile", "dockerfile"], ["Makefile", "makefile"], ["Rakefile", "ruby"], ["Gemfile", "ruby"], ["CMakeLists", "cmake"]]);
function te(e, n) {
  let t = (0, import_path.basename)(e), l = (0, import_path.extname)(e).slice(1), o = (0, import_chunk_7cfjrnwy.nt)(t, "."), i = X.get(t) ?? X.get(o);
  if (i) {
    let r = (0, import_chunk_vj6gt5th.OIe)(i);
    if (r) return r;
  }
  if (l) {
    let r = (0, import_chunk_vj6gt5th.OIe)(l);
    if (r) return r;
  }
  if (n) {
    let r = n.startsWith("\uFEFF") ? n.slice(1) : n;
    if (r.startsWith("#!")) {
      if (r.includes("bash") || r.includes("/sh")) return (0, import_chunk_vj6gt5th.OIe)("bash");
      if (r.includes("python")) return (0, import_chunk_vj6gt5th.OIe)("python");
      if (r.includes("node")) return (0, import_chunk_vj6gt5th.OIe)("javascript");
      if (r.includes("ruby")) return (0, import_chunk_vj6gt5th.OIe)("ruby");
      if (r.includes("perl")) return (0, import_chunk_vj6gt5th.OIe)("perl");
    }
    if (r.startsWith("<?php")) return (0, import_chunk_vj6gt5th.OIe)("php");
    if (r.startsWith("<?xml")) return (0, import_chunk_vj6gt5th.OIe)("xml");
  }
  return null;
}
function Be(e, n, t) {
  if (!e) return t.foreground;
  if (e === "keyword" && ye.has(n.trim())) return t.scopes.get("_storage") ?? t.foreground;
  return t.scopes.get(e) ?? t.scopes.get((0, import_chunk_7cfjrnwy.nt)(e, ".")) ?? t.foreground;
}
function re(e, n, t, l) {
  let o = e.scope ?? t;
  for (let i of e.children) if (typeof i === "string") {
    let r = Be(o, i, n);
    l.push([{ foreground: r, background: n.background }, i]);
  } else re(i, n, o, l);
}
function se(e, n, t) {
  let l = n + `
`;
  if (!e.lang) return [[D(t), l]];
  if (l.length > import_chunk_6b5tg8j3.kHn) e.limited ??= (0, import_chunk_6b5tg8j3.Dyi)((0, import_chunk_vj6gt5th.h7n)(), e.lang);
  let o = (0, import_chunk_6b5tg8j3.Myi)(l, e.limited ?? e.lang);
  if (e.squares += o, o > 0 && e.squares > import_chunk_6b5tg8j3.Zoo) return [[D(t), l]];
  let i = `${import_chunk_6b5tg8j3.bCe.pluginGrammarGeneration}\0${e.lang}\0${l}`, r = N.get(i);
  if (r === void 0) {
    if (r = Le(e, e.lang, l), r === void 0) return [[D(t), l]];
    if (N.size >= Me) N.clear();
    if (l.length <= import_chunk_6b5tg8j3.kHn) N.set(i, r);
  }
  let c = [];
  return re(r, t, void 0, c), Ee(c);
}
var Me = 2048, N = /* @__PURE__ */ new Map();
function Le(e, n, t) {
  let l;
  try {
    l = (0, import_chunk_vj6gt5th.h7n)().highlight(t, { language: n, ignoreIllegals: true });
  } catch {
    e.lang = null;
    return;
  }
  return l.tree;
}
function Ee(e) {
  let n = e.map(([, o]) => o), t = (0, import_chunk_em52jhgp.oOo)(n);
  if (t === n) return e;
  let l = [];
  for (let o = 0; o < e.length; o++) {
    let i = t[o];
    if (i.length > 0) l.push([e[o][0], i]);
  }
  return l;
}
var De = 0.4;
function z(e) {
  let n = [], t = 0;
  while (t < e.length) {
    let l = e[t];
    if (/[\p{L}\p{N}_]/u.test(l)) {
      let o = t + 1;
      while (o < e.length && /[\p{L}\p{N}_]/u.test(e[o])) o++;
      n.push(e.slice(t, o)), t = o;
    } else if (/\s/.test(l)) {
      let o = t + 1;
      while (o < e.length && /\s/.test(e[o])) o++;
      n.push(e.slice(t, o)), t = o;
    } else {
      let i = e.codePointAt(t) > 65535 ? 2 : 1;
      n.push(e.slice(t, t + i)), t += i;
    }
  }
  return n;
}
function _e(e) {
  let n = [], t = 0;
  while (t < e.length) if (e[t] === "-") {
    let l = t, o = t;
    while (o < e.length && e[o] === "-") o++;
    let i = e[o] === "\\" ? o + 1 : o, r = i;
    while (r < e.length && e[r] === "+") r++;
    let c = o - l, a = r - i;
    if (c > 0 && a > 0) {
      let d = Math.min(c, a);
      for (let g = 0; g < d; g++) n.push([l + g, i + g]);
      t = r;
    } else t = o;
  } else t++;
  return n;
}
function We(e, n) {
  let t = z(e), l = z(n), o = (0, import_chunk_4684b8fc.Cel)(t, l), i = e.length + n.length, r = 0, c = [], a = [], d = 0, g = 0;
  for (let k of o) {
    let f = k.value.reduce((S, p) => S + p.length, 0);
    if (k.removed) r += f, c.push({ start: d, end: d + f }), d += f;
    else if (k.added) r += f, a.push({ start: g, end: g + f }), g += f;
    else d += f, g += f;
  }
  if (i > 0 && r / i > De) return [[], []];
  return [c, a];
}
function ie(e) {
  e.lines = e.lines.map((n) => n.flatMap(([t, l]) => l.split(`
`).filter((o) => o.length > 0).map((o) => [t, o])));
}
function Ie(e) {
  if (e.length !== 1) return false;
  let n = e.codePointAt(0);
  for (let [t, l] of import_chunk_4ssv8fte.vTt) if (n >= t && n <= l) return true;
  return false;
}
var le = /^[\x20-\x7e]*$/;
function Y(e) {
  if (e === "	") return 8;
  if (Ie(e)) return 1;
  return (0, import_chunk_mgh1y10w.oe)(e);
}
function W(e) {
  if (!import_chunk_8bkqeb5d.pjr.test(e)) return (0, import_chunk_mgh1y10w.oe)(e);
  let n = e.split(import_chunk_4ssv8fte.ofn), t = n.length - 1;
  for (let l of n) t += (0, import_chunk_mgh1y10w.oe)(l);
  return t;
}
function Q(e) {
  return e.map(([, n]) => n).join("");
}
var ve = 256;
function ce(e, n) {
  if (le.test(n)) return n.length;
  let t = e.slice(-ve);
  return W(t + n) - W(t);
}
function Ne(e, n, t) {
  return O(e.foreground, true, n) + (t ? "" : O(e.background, false, n));
}
function Oe(e, n, t) {
  let l = [], o = null;
  for (let [i, r] of e) {
    let c = Ne(i, n, t), a = l.at(-1);
    if (a && c === o) l[l.length - 1] = [a[0], a[1] + r];
    else l.push([i, r]), o = c;
  }
  return l;
}
function Ae(e) {
  if (!e.some(([, o]) => o.includes("	"))) return e;
  let n = "", t = 0, l = [];
  for (let [o, i] of e) {
    let r = i.split("	"), c = "";
    for (let a = 0; a < r.length; a++) {
      let d = a === 0 ? r[a] : (0, import_chunk_7cfjrnwy.xd)(" ", 8 - t % 8) + r[a];
      t += ce(n, d), c += d, n += d;
    }
    l.push([o, c]);
  }
  return l;
}
function ae(e, n, t, l, o) {
  let i = [];
  for (let r of e.lines) {
    let c = i.length, a = [], d = "", g = 0;
    for (let [k, f] of Ae(Oe(r, l, o))) {
      let S = g + ce(d, f);
      if (S <= n) {
        if (f.length > 0) a.push([k, f]), d += f, g = S;
        continue;
      }
      if (n >= 1 && le.test(f)) {
        let h = 0, m = n - g;
        while (f.length - h > m) {
          if (m > 0) a.push([k, f.slice(h, h + m)]), h += m;
          if (a.length > 0) i.push(a), a = [], d = "";
          g = 0, m = n;
        }
        if (h < f.length) a.push([k, f.slice(h)]), d += f.slice(h), g += f.length - h;
        continue;
      }
      let p = 0, C = 0;
      for (let { segment: h, index: m } of (0, import_chunk_em52jhgp.ul)().segment(f)) {
        let x = Y(h);
        if (g + C + x > n) {
          if (m > p) a.push([k, f.slice(p, m)]);
          if (a.length > 0) i.push(a), a = [], d = "", g = 0;
          if (p = m, C = 0, x > n) {
            i.push([[k, f.slice(m, m + h.length)]]), p = m + h.length;
            continue;
          }
        }
        C += x;
      }
      if (p < f.length) a.push([k, f.slice(p)]), d += f.slice(p), g = W(d);
    }
    if (a.length > 0 || i.length === c) i.push(a);
  }
  if (e.lines = i, e.lines = e.lines.map((r) => {
    let c = Q(r);
    if (W(c) <= n) return r;
    let a = Math.max(0, n - 1), d = [[0, 0, 0]], g = 0, k = 0;
    e: for (let x = 0; x < r.length; x++) {
      let y = r[x][1];
      for (let { segment: w, index: T } of (0, import_chunk_em52jhgp.ul)().segment(y)) {
        if (g += Y(w), g > a) break e;
        let M = T + w.length;
        d.push([x, M, k + M]);
      }
      k += y.length;
    }
    let f = 0, S = d.length - 1;
    while (f < S) {
      let x = f + S + 1 >> 1;
      if (W(c.slice(0, d[x][2])) <= a) f = x;
      else S = x - 1;
    }
    let [p, C] = d[f], h = r.slice(0, p);
    if (C > 0) h.push([r[p][0], r[p][1].slice(0, C)]);
    let m = h.at(-1)?.[0] ?? r[0][0];
    return h.push([m, "\u2026"]), h;
  }), e.marker === "+" || e.marker === "-") {
    let r = H(e.marker, t), c = { foreground: t.foreground, background: r };
    for (let a of e.lines) {
      let d = W(Q(a));
      if (d < n) a.push([c, (0, import_chunk_7cfjrnwy.xd)(" ", n - d)]);
    }
  }
}
function ue(e, n, t, l) {
  let o = { foreground: e.marker ? ne(e.marker, n) : n.foreground, background: e.marker ? H(e.marker, n) : n.background }, i = e.marker === null || e.marker === " ";
  for (let r = 0; r < e.lines.length; r++) {
    let c = r === 0 && e.lineNumber !== null ? ` ${String(e.lineNumber).padStart(t)} ` : " ".repeat(t + 2), a = i && !l ? `${A}${c}${U}` : c;
    e.lines[r].unshift([o, a]);
  }
}
function He(e, n) {
  if (!e.marker) return;
  let t = { foreground: ne(e.marker, n), background: H(e.marker, n) }, l = e.marker === "\\" ? `${A}${e.marker}${U}` : e.marker;
  for (let o of e.lines) o.unshift([t, l]);
}
function Ge(e) {
  for (let n of e.lines) if (n.length > 0) {
    n[0][1] = A + n[0][1];
    let t = n.length - 1;
    n[t][1] = n[t][1] + U;
  }
}
function $e(e, n) {
  if (n.length === 0) return n;
  let t = [0];
  for (let r of (0, import_chunk_em52jhgp.ul)().segment(e)) t.push(r.index + r.segment.length);
  let l = (r) => {
    let c = 0, a = t.length - 1;
    while (c < a) {
      let d = c + a + 1 >> 1;
      if (t[d] <= r) c = d;
      else a = d - 1;
    }
    return t[c];
  }, o = (r) => {
    let c = 0, a = t.length - 1;
    while (c < a) {
      let d = c + a >> 1;
      if (t[d] >= r) a = d;
      else c = d + 1;
    }
    return t[c];
  }, i = [];
  for (let r of n) {
    let c = l(Math.min(r.start, e.length)), a = Math.max(c, o(Math.min(r.end, e.length))), d = i.at(-1);
    if (d && c <= d.end) d.end = Math.max(d.end, a);
    else i.push({ start: c, end: a });
  }
  return i;
}
function Pe(e, n, t) {
  if (!e.marker) return;
  let l = H(e.marker, n), o = we(e.marker, n), i = e.lines.map((d) => d.map(([, g]) => g).join("")).join(""), r = $e(i, t), c = 0, a = 0;
  for (let d = 0; d < e.lines.length; d++) {
    let g = [];
    for (let [k, f] of e.lines[d]) {
      let S = a, p = a + f.length;
      while (c < r.length && r[c].end <= S) c++;
      if (c >= r.length) {
        g.push([{ ...k, background: l }, f]), a = p;
        continue;
      }
      let C = f, h = S;
      while (C.length > 0 && c < r.length) {
        let m = r[c], x = h >= m.start && h < m.end, y;
        if (x) y = Math.min(m.end, p);
        else if (m.start > h && m.start < p) y = m.start;
        else y = p;
        let w = y - h, T = C.slice(0, w);
        if (g.push([{ ...k, background: x ? o : l }, T]), C = C.slice(w), h = y, h >= m.end) c++;
      }
      if (C.length > 0) g.push([{ ...k, background: l }, C]);
      a = p;
    }
    e.lines[d] = g;
  }
}
function de(e) {
  return e.map((n) => n.map(([t, l]) => t.background === B && (t.foreground === E || t.foreground === _) ? [{ ...t, foreground: he }, l] : [t, l]));
}
function Fe(e) {
  let n = Math.max(0, e.oldStart + e.oldLines - 1), t = Math.max(0, e.newStart + e.newLines - 1);
  return Math.max(n, t);
}
function Ue(e) {
  return e === "+" || e === "-" || e === "\\" ? e : " ";
}
var V = 2, J = 1;
class j {
  hunk;
  filePath;
  firstLine;
  prefixContent;
  constructor(e, n, t, l) {
    this.hunk = e, this.filePath = t, this.firstLine = n, this.prefixContent = l ?? null;
  }
  render(e, n, t, l, o = false) {
    let { rows: i, mode: r } = this.buildRows(e, n, t, l, o);
    return i.map((c) => I(c, r, false, t));
  }
  renderSplit(e, n, t, l, o = false) {
    let { rows: i, mode: r } = this.buildRows(e, n, t, l, o);
    return { gutters: i.map((c) => I(c.slice(0, V), r, false, t)), contents: i.map((c) => I(c.slice(V), r, false, t)) };
  }
  buildRows(e, n, t, l, o) {
    let i = Z(e), r = ee(e, i), c = l ? Te(r, l, t) : r, d = { lang: te(this.filePath, this.firstLine), stack: null, squares: 0 };
    this.prefixContent;
    let g = String(Fe(this.hunk)).length, k = this.hunk.oldStart, f = this.hunk.newStart, S = Math.max(1, n - g - 2 - 1), p = (y) => this.hunk.rowsBroken === true && y.startsWith(import_chunk_x8bs72nm.SY), C = this.hunk.lines.map((y) => {
      let w = Ue(y.slice(0, 1)), { code: T, truncatedChars: M } = (0, import_chunk_x8bs72nm.tqe)(y, 1), L;
      switch (w) {
        case "+":
          L = p(T) ? f - 1 : f++;
          break;
        case "-":
          L = k++;
          break;
        case " ":
          L = f, k++, f++;
          break;
        case "\\":
          L = null;
          break;
      }
      return { lineNumber: L, marker: w, code: T, truncatedChars: M };
    }), h = C.map(() => []);
    if (!t) {
      let y = C.map((w) => w.marker);
      for (let [w, T] of _e(y)) {
        let [M, L] = We(C[w].code, C[T].code);
        h[w] = M, h[T] = L;
      }
    }
    let m = { ...c, scopes: c.addScopes ?? c.scopes }, x = [];
    for (let y = 0; y < C.length; y++) {
      let { lineNumber: w, marker: T, code: M, truncatedChars: L } = C[y], ge = T === "-" || T === "\\" || T === "+" && p(M) ? [[D(c), M]] : se(d, M, T === "+" ? m : c), R = { marker: T, lineNumber: w, lines: [ge] };
      if (ie(R), Pe(R, c, h[y]), L > 0) R.lines[0].push([D(c), (0, import_chunk_x8bs72nm.Rht)(L)]);
      if (ae(R, S, c, i, false), T === "\\" || i === "ansi" && T === "-") Ge(R);
      He(R, c), ue(R, c, g, t), x.push(...R.lines);
    }
    return { rows: o ? x : de(x), mode: i };
  }
}
class q {
  code;
  filePath;
  rowsBroken;
  constructor(e, n, t = false) {
    this.code = e, this.filePath = n, this.rowsBroken = t;
  }
  render(e, n, t, l = false) {
    let { rows: o, mode: i } = this.buildRows(e, n, t, l);
    return o.map((r) => I(r, i, true, t));
  }
  renderSplit(e, n, t, l = false) {
    let { rows: o, mode: i } = this.buildRows(e, n, t, l);
    return { gutters: o.map((r) => I(r.slice(0, J), i, true, t)), contents: o.map((r) => I(r.slice(J), i, true, t)) };
  }
  buildRows(e, n, t, l) {
    let o = Z(e), i = ee(e, o), r = this.code.split(`
`);
    if (r.at(-1) === "") r.pop();
    let c = r[0] ?? null, d = { lang: te(this.filePath, c), stack: null, squares: 0 }, g = String(r.length).length, k = Math.max(1, n - g - 2), f = [], S = 0;
    for (let p = 0; p < r.length; p++) {
      let { code: C, truncatedChars: h } = (0, import_chunk_x8bs72nm.tqe)(r[p]), m = this.rowsBroken && p > 0 && C.startsWith(import_chunk_x8bs72nm.SY);
      S += m ? 0 : 1;
      let x = m ? [[D(i), C]] : se(d, C, i);
      if (h > 0) x.push([D(i), (0, import_chunk_x8bs72nm.Rht)(h)]);
      let y = { marker: null, lineNumber: S, lines: [x] };
      ie(y), ae(y, k, i, o, true), ue(y, i, g, t), f.push(...y.lines);
    }
    return { rows: l ? f : de(f), mode: o };
  }
}
function fe(e) {
  return { theme: ke(e), source: null };
}
function p7n() {
  if ((0, import_chunk_69qhefwa.Oi)(import_chunk_c203g5kd.s.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) return "env";
  return null;
}
function Dya() {
  return p7n() === null ? j : null;
}
function $Wr() {
  return p7n() === null ? q : null;
}
function C2s(e) {
  return p7n() === null ? fe(e) : null;
}
