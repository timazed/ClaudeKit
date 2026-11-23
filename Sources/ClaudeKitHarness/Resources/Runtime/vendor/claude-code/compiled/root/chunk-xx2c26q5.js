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
var chunk_xx2c26q5_exports = {};
__export(chunk_xx2c26q5_exports, {
  Highlighter: () => De
});
module.exports = __toCommonJS(chunk_xx2c26q5_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var _ = {};
(0, import_chunk_w1d7ygsk.jr)(_, { APOS_STRING_MODE: () => ge, BACKSLASH_ESCAPE: () => M, BINARY_NUMBER_MODE: () => Re, BINARY_NUMBER_RE: () => he, COMMENT: () => S, C_BLOCK_COMMENT_MODE: () => be, C_LINE_COMMENT_MODE: () => me, C_NUMBER_MODE: () => we, C_NUMBER_RE: () => fe, END_SAME_AS_BEGIN: () => Ne, HASH_COMMENT_MODE: () => ye, IDENT_RE: () => de, MATCH_NOTHING_RE: () => B, METHOD_GUARD: () => Oe, NUMBER_MODE: () => Ee, NUMBER_RE: () => ce, PHRASAL_WORDS_MODE: () => Se, QUOTE_STRING_MODE: () => pe, REGEXP_MODE: () => Me, RE_STARTERS_RE: () => ue, SHEBANG: () => Ae, TITLE_MODE: () => xe, UNDERSCORE_IDENT_RE: () => le, UNDERSCORE_TITLE_MODE: () => ve, inherit: () => R, regex: () => _e, sourceOf: () => m });
var x = 128, F = 129, H = 130, G = 1, K = 2, W = 4, T = 8, te = /\\(?:[pPu]\{[^}]*\}|u[\dA-Fa-f]{4}(?:\\u[Dd][C-Fc-f]..)?|x[\dA-Fa-f]{2}|c[A-Za-z]|k<[^>]*>|\d+|[^])|\[(?:\\[^]|[^\]\\])*\]|\((?:\?(?:<?[=!]|<[^>]*>|[a-z-]*:))?|[^]/uy, ne = /(?:[*+?]|\{(\d+)(?:,\d*)?\})\??/y, se = /(?:[^()[\\|]+|\\[^]|\[(?:\\[^]|[^\]\\])*\])*/y, re = /[^\0-\x7f]|^\[\^|\\[\dSWDspux]|^\./i, ie = String.fromCharCode(...Array.from({ length: 128 }, (e, t) => 127 - t)), p = w(() => "0", "00"), E = w(() => "f", "ff"), oe = /* @__PURE__ */ new Map([["^", w(() => "9", "99")], ["$", w((e) => /[\n\r]/.test(e) ? "f" : "0", "f0")], ["\\b", w((e) => /\w/.test(e) ? "d" : "a", "af")], ["\\B", w((e) => /\w/.test(e) ? "a" : "d", "df")]]), z = { starts: E, passes: E };
class k {
  flags;
  known = /* @__PURE__ */ new Map();
  source = "";
  at = 0;
  constructor(e) {
    this.flags = e;
  }
  of(e) {
    if (!this.flags.includes("u") && /\\(?:[pPu]\{|k<)/.test(e)) return E;
    this.source = e, this.at = 0;
    let { starts: t, passes: s } = this.choice(E);
    return t | s;
  }
  choice(e) {
    let t = p, s = p, n = e;
    for (; ; ) {
      if (n === p) this.take(se);
      let r = this.take(te)?.[0];
      if (r === void 0 || r === ")") return { starts: t, passes: s | n };
      if (r === "|") s |= n, n = e;
      else if (n !== p) {
        let i = r[0] === "(" ? this.group(r) : this.single(r), o = this.take(ne);
        if (t |= n & i.starts, !o || o[0][0] === "+" || Number(o[1])) n &= i.passes;
      } else if (r[0] === "(") this.choice(p);
    }
  }
  group(e) {
    let t = this.choice(E);
    if (e === "(?=") return { starts: p, passes: t.starts | t.passes };
    if (/[=!]$/.test(e)) return { starts: p, passes: E };
    return /[a-z-]:/.test(e) ? z : t;
  }
  single(e) {
    let t = this.known.get(e);
    if (!t) t = ae(e, this.flags), this.known.set(e, t);
    return t;
  }
  take(e) {
    e.lastIndex = this.at;
    let t = e.exec(this.source);
    return this.at += t?.[0].length ?? 0, t;
  }
}
function P(e) {
  let t = (e | p).toString(16), s = new Uint8Array(t.length);
  for (let n = 0; n <= 130; n++) {
    let r = t.charCodeAt(130 - n);
    s[n] = (r & 15) + (r > 57 ? 9 : 0);
  }
  return s;
}
function ae(e, t) {
  let s = oe.get(e);
  if (s) return { starts: p, passes: s };
  if (/^\\(?:\d|k<)/.test(e)) return z;
  let n = /^(?:\\(?=\W)|(?!\.))([ -~])$/.exec(e)?.[1];
  if (n && t !== "miu") {
    let a = p;
    for (let l of t === "mi" ? n.toLowerCase() + n.toUpperCase() : n) a |= 15n << BigInt(l.charCodeAt(0) * 4);
    return { starts: a, passes: p };
  }
  let r = re.test(e) || t === "miu", i = new RegExp(e.replace(/^[{}\]]$/, "\\$&"), t), o = w((a) => i.test(a) ? "f" : "0", r ? "0f" : "00");
  return { starts: o === p || /^\\[pPuc]/.test(e) ? E : o, passes: p };
}
function w(e, t) {
  return BigInt(`0xf${t}${Array.from(ie, e).join("")}`);
}
var de = "[A-Za-z]\\w*", le = "[A-Z_a-z]\\w*", ce = "\\b\\d+(\\.\\d+)?", he = "\\b(0b[01]+)", fe = "(-?)(\\b0[Xx][\\dA-Fa-f]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([Ee][+-]?\\d+)?)", ue = "!|%|&|\\*|\\+|,|-|/=|/|:|;|<<|<<=|<=?|={1,3}|>{1,3}=?|\\?|\\[|\\^|\\{|\\||\\(|!==?|&&|\\|\\||[-%&*+^|]=|~", B = /\b\B/, M = b({ begin: "\\\\[^]", relevance: 0 }), ge = X("'"), pe = X('"'), me = b(S("//", "$")), be = b(S("/\\*", "\\*/")), ye = b(S("#", "$")), Ee = O("number", "\\b\\d+(\\.\\d+)?"), we = O("number", "(-?)(\\b0[Xx][\\dA-Fa-f]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([Ee][+-]?\\d+)?)"), Re = O("number", "\\b(0b[01]+)"), xe = O("title", "[A-Za-z]\\w*"), ve = O("title", "[A-Z_a-z]\\w*"), Oe = b({ begin: "\\.\\s*[A-Z_a-z]\\w*", relevance: 0 }), Me = b({ scope: "regexp", begin: /\/(?=[^\n/]*\/)/, end: /\/[gimuy]*/, contains: [M, { begin: /\[/, end: /\]/, relevance: 0, contains: [M] }] }), Se = b({ begin: /\b(I'm|an?|are|but|doesn't|don't|enough|going|gonna|isn't|just|like|more|pretty|should|simply|so|such|they?|will|won't|wtf|your?)\b/ }), _e = { concat: (...e) => e.map(m).join(""), lookahead: (e) => `(?=${m(e)})`, optional: (e) => `(?:${m(e)})?`, anyNumberOfTimes: (e) => `(?:${m(e)})*`, either(...e) {
  let [t] = e.slice(-1);
  if (t === null) throw TypeError("the last choice is null");
  let s = t && Y(t) && t.capture, n = t && Y(t) ? e.slice(0, -1) : e;
  return `(${s ? "" : "?:"}${n.map(m).join("|")})`;
} };
function m(e) {
  if (typeof e === "string") return e;
  return e && typeof e === "object" && "source" in e ? String(e.source) : "";
}
function R(e, ...t) {
  let s = /* @__PURE__ */ Object.create(null);
  for (let n of [e, ...t]) for (let r in n) s[r] = Reflect.get(Object(n), r);
  return s;
}
function S(e, t, s = {}) {
  let r = s ?? {};
  return R({ scope: "comment", begin: e, end: t }, r, { contains: [...r.contains ?? [], { scope: "doctag", begin: " *(?=(?:BUG|FIXME|HACK|NOTE|OPTIMIZE|TODO|XXX):)", end: new RegExp("(?:BUG|FIXME|HACK|NOTE|OPTIMIZE|TODO|XXX):"), excludeBegin: true, startsBlanks: true, relevance: 0 }, { begin: " +(?:(?:I|a|at|i[fnst]|on|so|to|us|[A-Za-z]+(?:'(?:[dnst]|ll|re|ve)|-[a-z]+)|[A-Za-z][a-z]{2,})\\.?:?\\.? ){3}", startsBlanks: true }] });
}
function Ae(e = {}) {
  let s = { scope: "meta", begin: new RegExp("^#! *\\/"), end: /$/, relevance: 0, "on:begin"(n, r) {
    if (n.index > 0) r.ignoreMatch();
  } };
  if (e.binary) e.begin = `^#! *\\/.*\\b${m(e.binary)}\\b.*`;
  return R(s, e);
}
function Ne(e) {
  return Object.assign(e, { "on:begin"(t, s) {
    s.data.mark = t[1];
  }, "on:end"(t, s) {
    if (s.data.mark !== t[1]) s.ignoreMatch();
  } });
}
function Y(e) {
  return e.constructor === Object;
}
function b(e) {
  for (let t of Object.freeze(e.contains ?? [])) if (t !== "self") b(t);
  return Object.freeze(e);
}
function X(e) {
  return b({ scope: "string", begin: e, end: e, illegal: "\\n", contains: [M] });
}
function O(e, t) {
  return b({ scope: e, begin: t, relevance: 0 });
}
class Z {
  source;
  grammar;
  built;
  reached;
  where;
  looksBack;
  constructor(e, t) {
    this.source = e;
    this.grammar = t;
    this.looksBack = /\\b|\^|\(\?<[=!]/i.test(e);
  }
  get expression() {
    return this.built ??= this.grammar.building(() => new RegExp(this.source, `${this.grammar.flags}y`));
  }
  get openings() {
    return this.where ??= P(this.reach);
  }
  get reach() {
    return this.reached ??= this.grammar.building(() => this.grammar.openings.of(this.source));
  }
}
class q {
  mode;
  depth;
  scope;
  relevance = 1;
  begin;
  end;
  ends = [];
  beginPaint;
  endPaint;
  keywords;
  words;
  inner = [];
  starts;
  rules = [];
  cuts = [0];
  notes;
  where;
  constructor(e, t) {
    this.mode = e;
    this.depth = t;
    this.notes = e.data === void 0 ? {} : e.data;
  }
  get openings() {
    return this.where ??= P(this.rules.reduce((e, { probe: t }) => e | t.reach, 0n));
  }
}
var Te = 1e3, ke = new Set("and for if in list not of or parent then value".split(" "));
class L {
  language;
  flags;
  openings;
  root;
  scopes;
  probes = /* @__PURE__ */ new Map();
  states = /* @__PURE__ */ new Map();
  variants = /* @__PURE__ */ new Map();
  isBroken = false;
  constructor(e) {
    this.language = e;
    if (this.flags = `m${e.case_insensitive ? "i" : ""}${e.unicodeRegex ? "u" : ""}`, this.scopes = new Map(Object.entries(e.classNameAliases ?? {})), this.openings = new k(this.flags), e.contains?.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    this.root = this.stateOf(e, void 0);
  }
  building(e) {
    try {
      return e();
    } catch (t) {
      throw this.isBroken = true, t;
    }
  }
  check() {
    for (let e of this.probes.values()) e.expression.lastIndex = e.openings.length;
  }
  named(e) {
    return this.scopes.get(e) || e;
  }
  probeOf(e) {
    let t = Be(e), s = this.probes.get(t);
    if (!s) s = new Z(t, this), this.probes.set(t, s);
    return s;
  }
  stateOf(e, t) {
    let s = this.states.get(e);
    if (s) return s;
    let n = e.beforeMatch ? Pe(e.beforeMatch, e) : e, r = new q(n, (t?.depth ?? 0) + 1);
    if (r.depth > Te) throw RangeError("a mode holds itself without end");
    if (this.states.set(e, r), n.match && (n.begin || n.end)) throw Error("begin & end are not supported with match");
    let i = n.keywords, o = n.className === void 0 ? n.scope : n.className, a = o && typeof o === "object";
    r.scope = typeof o === "string" ? o : void 0, r.relevance = n.relevance === void 0 ? 1 : n.relevance;
    let [l, d] = this.painted(n.match || n.begin, a ? o : n.beginScope, n.skip || n.excludeBegin || n.returnBegin), c = l;
    if (t && n.beginKeywords) c = `\\b(${n.beginKeywords.replaceAll(" ", "|")})(?!\\.)(?:\\b|(?=\\s))`, i ||= n.beginKeywords, r.relevance = n.relevance === void 0 ? 0 : n.relevance;
    let [f, u] = this.painted(n.end, n.endScope, n.skip || n.excludeEnd || n.returnEnd);
    if (r.beginPaint = typeof d === "string" ? this.named(d) : d, r.endPaint = u, i) {
      let h = typeof i === "object" && "$pattern" in i ? i.$pattern : void 0;
      r.keywords = /* @__PURE__ */ new Map(), this.learn(i, "keyword", r.keywords), r.words = new RegExp(m(h || /\w+/), `${this.flags}g`);
    }
    if (t) {
      if (r.begin = this.probeOf(c || ""), f || !n.endsWithParent) r.end = this.probeOf(f || ""), r.ends.push(r.end);
      if (n.endsWithParent) r.ends.push(...t.ends);
    }
    if (r.inner = (n.contains || []).flatMap((h) => this.spelledOut(h === "self" ? e : h)).map((h) => this.stateOf(h, r)), n.starts && Object(n.starts) !== n.starts) throw TypeError("starts takes a mode");
    if (Array.isArray(n.illegal) && n.illegal.slice(-1)[0] === null) throw TypeError("illegal takes expressions");
    return r.starts = n.starts && this.stateOf(n.starts, t), r.rules = [...r.inner.map((h) => ({ probe: h.begin, enters: h })), ...r.ends.map((h) => ({ probe: h })), ...[n.illegal || []].flat().map((h) => ({ probe: this.probeOf(h), isRefusal: true }))], r;
  }
  spelledOut(e) {
    if (!e.variants) {
      let { starts: s } = e;
      return V(e) && !this.states.has(e) ? [R(e, { starts: s && !this.states.has(s) ? R(s) : s })] : [e].flat();
    }
    let t = this.variants.get(e);
    if (!t) t = e.variants.map((s) => R(e, { variants: void 0 }, s)), this.variants.set(e, t);
    return t;
  }
  painted(e, t, s) {
    if (!Array.isArray(e)) return [e, typeof t === "string" ? t : void 0];
    if (s || !t) throw Error("a list of expressions takes scopes by place, and stays put");
    let n = [], r = 0;
    return [e.map((o, a) => {
      let l = ++r, d = typeof t === "string" ? void 0 : t[a + 1];
      n.push([l, d && this.named(d)]);
      let c = m(o);
      return r += new RegExp(`${c}|`).exec("").length - 1, `(${c.replace(/\\([1-9]\d*)|\\[^]|\[(?:\\[^]|[^\]\\])*\]/g, (f, u) => u ? `\\${Number(u) + l}` : f)})`;
    }).join(""), n];
  }
  learn(e, t, s) {
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (let [r, i] of Object.entries(e)) if (r !== "$pattern") this.learn(i, r, s);
      return;
    }
    let n = { scope: this.named(t), worth: 1, isUnseen: t[0] === "_" };
    for (let r of typeof e === "string" ? e.split(" ") : e) {
      let [i, o] = (this.language.case_insensitive ? r.toLowerCase() : r).split("|");
      s.set(i, o || ke.has(i.toLowerCase()) ? { ...n, worth: Number(o || 0) } : n);
    }
  }
}
function V(e) {
  return Boolean(e && (e.endsWithParent || V(e.starts)));
}
function Pe(e, t) {
  if (t.starts) throw Error("beforeMatch cannot be used with starts");
  return { keywords: t.keywords, begin: `${m(e)}(?=${m(t.match || t.begin)})`, relevance: 0, starts: { relevance: 0, contains: [{ ...t, beforeMatch: void 0, endsParent: true }] } };
}
function Be(e) {
  return e && typeof e !== "string" && typeof e !== "function" && !(typeof e === "object" && "source" in e) ? B.source : m(e);
}
class A extends Error {
}
class J {
  data;
  isMatchIgnored;
  constructor(e) {
    this.data = e, this.isMatchIgnored = false;
  }
  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}
var Le = 7, Ie = 1e5, Q = Uint8Array.from({ length: x }, (e, t) => {
  let s = String.fromCharCode(t);
  if (/\w/.test(s)) return K;
  return /[\n\r]/.test(s) ? G : W;
});
class I {
  language;
  code;
  tree;
  grammar;
  reader;
  relevance = 0;
  isIllegal = false;
  failure;
  frame;
  held = "";
  from = 0;
  to = 0;
  uses = /* @__PURE__ */ new Map();
  left = /* @__PURE__ */ new Map();
  constructor(e, t, s, n, r, i) {
    this.language = e;
    this.code = t;
    this.tree = s;
    this.grammar = n;
    this.reader = r;
    this.frame = i ?? { state: n.root };
  }
  run(e) {
    let { code: t, tree: s } = this, n = [];
    for (let c = this.frame; c; c = c.parent) if (c.state.scope && c.parent) n.unshift(c.state.scope);
    n.forEach((c) => s.open(c));
    let r = 0, i = 0, o = 0, a = 0, l = false, d = -1;
    for (; ; ) {
      let { state: c } = this.frame, { rules: f } = c;
      if (!l) a = 0;
      if (a > 0 && f[a] && !c.cuts.includes(a)) c.cuts.unshift(a);
      let u = this.find(f, a, r, a > 0 ? r : t.length);
      if (u < 0 && a > 0) u = this.find(f, 0, r + 1, t.length);
      if (u < 0) break;
      l = false;
      let { from: h, to: y } = this, v = f[u];
      this.held += t.slice(r, h);
      let g = -1;
      if (v.enters) {
        d = h;
        let j = u - c.cuts.find((ee) => ee <= u);
        if (g = this.enter(v.enters, j), g < 0) a += j + 1, l = a !== c.inner.length, g = l ? h : h + 1, this.held += t.slice(h, g);
      } else if (!v.isRefusal && h === y && h === d) d = -1, g = h + 1, this.held += t.slice(h, g);
      else {
        if (d = -1, v.isRefusal) {
          if (!e) throw new A();
          if (h === y) this.held += t.charAt(h) || `
`, g = h + 1;
        } else g = this.leave(v.probe);
        if (g < 0) g = y, this.held += t.slice(h, y);
      }
      if (o = g > i ? 0 : o + 1, i = Math.max(i, g), o > Ie) throw Error("the grammar does not move on through the text");
      r = g;
    }
    this.held += t.slice(r), this.flush(), s.finish();
  }
  find(e, t, s, n) {
    let { code: r } = this, i = this.frame.state.openings, o = this.grammar.language.unicodeRegex, a = s > 0 ? r.charCodeAt(s - 1) : 10, l = a < x ? Q[a] : T;
    for (; s <= n; s++) {
      let d = s < r.length ? r.charCodeAt(s) : -1, c = d < x ? Q[d] : T;
      if (d < 0) d = F;
      else if (d >= x) d = (d | 1) === 8233 ? H : x;
      if (i[d] & l && !(o && this.isSecondHalf(s))) for (let f = t; f < e.length; f++) {
        let { probe: u, enters: h } = e[f];
        if (u.openings[d] & l) {
          let { expression: y } = u;
          if (y.lastIndex = s, !(h?.mode.startsBlanks && d === 32 && r[s - 1] === " ") && y.test(r)) return this.from = s, this.to = y.lastIndex, f;
        }
      }
      l = c;
    }
    return -1;
  }
  isSecondHalf(e) {
    return (this.code.codePointAt(e - 1) ?? 0) > 65535;
  }
  enter(e, t) {
    let { code: s, from: n, to: r } = this, { mode: i } = e;
    if (i.beginKeywords && s[n - 1] === "." || this.isTurnedDown(e, e.begin, t)) return -1;
    let o = s.slice(n, r);
    if (i.skip) this.held += o;
    else {
      if (i.excludeBegin) this.held += o;
      if (this.flush(), !i.returnBegin && !i.excludeBegin) this.held = o;
    }
    return this.push(e, e.begin), i.returnBegin ? n : r;
  }
  leave(e) {
    let { code: t, from: s, to: n } = this, r = this.frame;
    while (r && !this.isEndOf(r.state, e)) r = r.state.mode.endsWithParent ? r.parent : void 0;
    while (r?.state.mode.endsParent && r.parent) r = r.parent;
    if (!r) return -1;
    let { mode: i, endPaint: o } = this.frame.state, a = t.slice(s, n);
    if (o) if (this.flush(), typeof o === "string") this.paint(a, o);
    else this.paintGroups(o, e, a);
    else if (i.skip) this.held += a;
    else {
      if (!i.returnEnd && !i.excludeEnd) this.held += a;
      if (this.flush(), i.excludeEnd) this.held = a;
    }
    for (let l = this.frame; l !== r.parent; l = l.parent) {
      if (l.state.scope) this.tree.close();
      if (!l.state.mode.skip && !l.state.mode.subLanguage) this.relevance += l.state.relevance;
    }
    if (this.frame = r.parent, r.state.starts) this.push(r.state.starts, e);
    return i.returnEnd ? s : n;
  }
  isEndOf(e, t) {
    let { end: s } = e;
    if (!s) return false;
    if (s !== t || s.looksBack) {
      if (s.expression.lastIndex = 0, !s.expression.test(this.code.slice(this.from))) return false;
    }
    return !this.isTurnedDown(e, t);
  }
  isTurnedDown(e, t, s) {
    let { mode: n } = e, r = s === void 0, i = n[r ? "on:end" : "on:begin"];
    if (!i) return false;
    let o = this.groupsOf(t), a = new J(e.notes);
    if (r) o.type = "end", i.call(n, o, a);
    else i(Object.assign(o, { type: "begin", rule: n, position: s }), a);
    return a.isMatchIgnored;
  }
  groupsOf({ expression: e }) {
    return e.lastIndex = this.from, e.exec(this.code);
  }
  push(e, t) {
    let { scope: s, beginPaint: n } = e;
    if (s) this.tree.open(this.grammar.named(s));
    if (typeof n === "string") this.paint(this.held, n), this.held = "";
    else if (n) this.paintGroups(n, t, this.held);
    this.frame = { state: e, parent: this.frame };
  }
  paint(e, t) {
    if (e !== "") this.tree.open(t), this.tree.add(e), this.tree.close();
  }
  paintGroups(e, t, s) {
    let n = this.groupsOf(t);
    if (e.map(([r]) => n[r]).join("") !== s) throw Error("the groups of a match do not spell its text");
    for (let [r, i] of e) if (i) this.paint(n[r] ?? "", i);
    else this.held = n[r] ?? "", this.paintKeywords();
    this.held = "";
  }
  flush() {
    let { state: e } = this.frame, { subLanguage: t } = e.mode;
    if (t === void 0 || t === null) this.paintKeywords();
    else if (this.held !== "") {
      let s = typeof t === "string", n = this.reader(this.held, t, s ? this.left.get(t) : void 0);
      if (n) {
        if (s) this.left.set(t, n.frame);
        if (e.relevance > 0) this.relevance += n.relevance;
        this.tree.graft(n.tree, n.language);
      } else this.tree.add(this.held);
    }
    this.held = "";
  }
  paintKeywords() {
    let { held: e, tree: t } = this, { keywords: s, words: n } = this.frame.state;
    if (!s || !n) {
      t.add(e);
      return;
    }
    let r = this.grammar.language.case_insensitive, i = 0;
    n.lastIndex = 0;
    for (let o = n.exec(e); o; o = n.exec(e)) {
      let a = r ? o[0].toLowerCase() : o[0], l = s.get(a);
      if (l) {
        let d = (this.uses.get(a) ?? 0) + 1;
        if (this.uses.set(a, d), d <= Le) this.relevance += l.worth;
        if (t.add(e.slice(i, o.index)), i = o.index, !l.isUnseen) this.paint(o[0], l.scope), i = n.lastIndex;
      }
      if (o[0] === "") {
        let d = n.unicode && (e.codePointAt(o.index) ?? 0) > 65535;
        n.lastIndex += d ? 2 : 1;
      }
    }
    t.add(e.slice(i));
  }
}
var Ce = /* @__PURE__ */ new Map([["&", "&amp;"], ["<", "&lt;"], [">", "&gt;"], ['"', "&quot;"], ["'", "&#x27;"]]);
class C {
  rootNode = { children: [] };
  stack = [this.rootNode];
  tip = this.rootNode;
  open(e) {
    let t = { children: [], scope: e };
    this.tip.children.push(t), this.stack.push(t), this.tip = t;
  }
  close() {
    let e = this.stack[this.stack.length - 2];
    if (e) this.stack.pop(), this.tip = e;
  }
  add(e) {
    if (e !== "") this.tip.children.push(e);
  }
  graft(e, t) {
    if (t) e.rootNode.scope = `language:${t}`;
    this.tip.children.push(e.rootNode);
  }
  finish() {
  }
}
function D(e, t = "hljs-") {
  if (typeof e === "string") return e.replace(/[&<>"']/g, (r) => Ce.get(r) ?? r);
  let s = e.children.map((r) => D(r, t)).join("");
  if (!e.scope) return s;
  return `<span class="${e.scope.startsWith("language:") ? e.scope.replace(":", "-") : `${t}${e.scope.split(".").map((r, i) => r + "_".repeat(i)).join(" ")}`}">${s}</span>`;
}
var N = { name: "Plain text", disableAutodetect: true };
class De {
  Tree = C;
  shared = _;
  watchers = [];
  languages = /* @__PURE__ */ new Map();
  guessedAmong;
  checksWhole = false;
  isStrict = false;
  aliases = /* @__PURE__ */ new Map();
  grammars = /* @__PURE__ */ new WeakMap();
  tried = /* @__PURE__ */ new WeakSet();
  broken = /* @__PURE__ */ new WeakSet();
  registerLanguage(e, t) {
    let s = t(_);
    s.name ||= e, this.languages.set(e, s), this.registerAliases([s.aliases ?? []].flat(), e);
  }
  keepUnusable(e) {
    this.languages.set(e, false);
  }
  registerAliases(e, t) {
    for (let s of e) this.aliases.set(s.toLowerCase(), t);
  }
  unregisterLanguage(e) {
    this.languages.delete(e);
    for (let [t, s] of this.aliases) if (s === e) this.aliases.delete(t);
  }
  listLanguages() {
    return [...this.languages.keys()];
  }
  getLanguage(e) {
    let t = (e || "").toLowerCase();
    return this.languages.get(t) || this.languages.get(this.aliases.get(t) ?? t) || void 0;
  }
  check(e) {
    let t = this.getLanguage(e) ?? N;
    this.tried.add(t);
    try {
      this.grammarOf(t).check();
    } catch (s) {
      throw this.broken.add(t), s;
    }
  }
  highlight(e, { language: t, ignoreIllegals: s = true }) {
    for (let i of this.watchers) i.before?.(e, t);
    let n = this.getLanguage(t);
    if (!n) throw Error("Unknown language");
    let r = this.read(e, t, n, s, false);
    for (let i of this.watchers) i.after?.();
    return U(r);
  }
  highlightAuto(e, t) {
    let [s, n] = this.guess(e, t, false);
    return Object.assign(U(s), { secondBest: n && U(n) });
  }
  grammarOf(e) {
    let t = this.grammars.get(e);
    if (!t) t = new L(e), this.grammars.set(e, t);
    return t;
  }
  read(e, t, s, n, r, i) {
    let o = !this.tried.has(s);
    this.tried.add(s);
    let a = this.grammarOf(N), l;
    if (this.broken.has(s)) l = { error: TypeError("the grammar could not be built") };
    else try {
      if (a = this.grammarOf(s), o && this.checksWhole) a.check();
    } catch (c) {
      if (this.broken.add(s), o && (r || this.checksWhole || this.isStrict)) throw c;
      l = { error: c };
    }
    let d = new I(t, e, new this.Tree(), a, (c, f, u) => {
      if (typeof f !== "string") return this.guess(c, f.length ? f : void 0, true)[0];
      let h = this.languages.get(f);
      return h ? this.read(c, f, h, true, true, u) : void 0;
    }, i);
    if (l) {
      if (this.isStrict) throw l.error;
      return d.failure = r ? void 0 : l, d.tree.add(e), d;
    }
    if (a.language === N) return d.tree.add(e), d;
    try {
      d.run(n);
    } catch (c) {
      let f = c instanceof A;
      if (a.isBroken && !this.broken.has(s)) {
        if (this.broken.add(s), r) throw c;
      }
      if (this.isStrict && !f) throw c;
      d.relevance = 0, d.isIllegal = f, d.failure = f || r ? void 0 : { error: c }, d.tree.rootNode.children = [e];
    }
    return d;
  }
  guess(e, t, s) {
    let n = t ?? (this.guessedAmong || this.listLanguages());
    if (!$e(n)) throw TypeError("the languages to guess among are not a list");
    let r = n.filter((o) => this.getLanguage(o)), i = [this.read(e, void 0, N, true, s)];
    for (let o of r) {
      let a = this.getLanguage(o);
      if (a && !a.disableAutodetect) i.push(this.read(e, o, a, false, s));
    }
    return i.sort((o, a) => a.relevance - o.relevance || Number(this.widens(o, a)) || -Number(this.widens(a, o)));
  }
  widens(e, t) {
    return t.language !== void 0 && this.getLanguage(e.language ?? "")?.supersetOf === t.language;
  }
}
function $e(e) {
  return typeof e === "object" && e !== null && "filter" in e && typeof e.filter === "function";
}
function U(e) {
  return { language: e.language, relevance: e.relevance, illegal: e.isIllegal, tree: e.tree.rootNode, ...e.failure && { errorRaised: e.failure.error }, get value() {
    return D(e.tree.rootNode);
  } };
}
