const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_0jve1fep_exports = {};
__export(chunk_0jve1fep_exports, {
  $ta: () => $ta,
  Dqn: () => Dqn,
  Hqn: () => Hqn,
  KHo: () => KHo,
  Le: () => Le,
  Sge: () => Sge,
  Uta: () => Uta,
  VHo: () => VHo,
  Vee: () => Vee,
  Ys: () => Ys,
  et: () => et,
  fF: () => fF,
  g_n: () => g_n,
  h_n: () => h_n,
  mOe: () => mOe,
  m_n: () => m_n,
  nft: () => nft,
  qHo: () => qHo,
  tft: () => tft,
  v$l: () => v$l,
  yge: () => yge
});
module.exports = __toCommonJS(chunk_0jve1fep_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var te = __toESM(require("buffer"));
var import_promises = require("fs/promises");
function Ys(e) {
  return e.startsWith("\uFEFF") ? e.slice(1) : e;
}
function Sge(e) {
  return e.replace(/[-_]/g, "").toLowerCase();
}
function qHo(e) {
  return new Map(e.map((n) => [Sge(n), n]));
}
function Le(e) {
  if (typeof e !== "object" || e === null) return false;
  let n = Object.getPrototypeOf(e);
  return n === Object.prototype || n === null;
}
function x(e) {
  return e >= 48 && e <= 57;
}
function W(e) {
  if (x(e)) return e - 48;
  let n = (e | 32) - 97;
  return n >= 0 && n < 6 ? n + 10 : -1;
}
function V(e) {
  switch (e) {
    case 34:
      return '"';
    case 92:
      return "\\";
    case 47:
      return "/";
    case 98:
      return "\b";
    case 102:
      return "\f";
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 116:
      return "	";
    default:
      return;
  }
}
class b {
  text;
  position = 0;
  token = 14;
  offset = 0;
  error = 0;
  line = 0;
  lineStart = 0;
  tokenLine = 0;
  tokenLineStart = 0;
  valueStart = 0;
  valueEnd = 0;
  hasEscape = false;
  constructor(e) {
    this.text = e;
  }
  value() {
    let { text: e, valueEnd: n } = this;
    if (!this.hasEscape) return e.slice(this.valueStart, n);
    let r = "", o = this.valueStart;
    for (; ; ) {
      let s = e.indexOf("\\", o);
      if (s < 0 || s >= n) return r + e.slice(o, n);
      r += e.slice(o, s), o = s + 2;
      let c = e.charCodeAt(s + 1);
      if (c !== 117) {
        r += V(c) ?? "";
        continue;
      }
      let a = 0;
      for (let l = o + 4; o < l; o++) {
        let u = W(e.charCodeAt(o));
        if (u < 0) {
          a = -1;
          break;
        }
        a = a * 16 + u;
      }
      if (a >= 0) r += String.fromCharCode(a);
    }
  }
  skipWhitespace() {
    let { text: e } = this, { position: n } = this;
    for (; ; ) {
      let r = e.charCodeAt(n);
      if (r === 32 || r === 9) n++;
      else if (r === 10 || r === 13) n = this.passLineBreak(n);
      else {
        this.position = n;
        return;
      }
    }
  }
  scan() {
    let { text: e, position: n } = this;
    if (this.error = 0, this.hasEscape = false, this.tokenLine = this.line, this.tokenLineStart = this.lineStart, n >= e.length) return this.offset = e.length, this.token = 15;
    this.offset = this.valueStart = n, this.position = n + 1;
    let r = e.charCodeAt(n);
    switch (r) {
      case 34:
        return this.scanString(), this.token = 10;
      case 44:
        return this.token = 5;
      case 58:
        return this.token = 6;
      case 123:
        return this.token = 1;
      case 125:
        return this.token = 2;
      case 91:
        return this.token = 3;
      case 93:
        return this.token = 4;
      case 47:
        return this.token = this.scanComment();
    }
    if (x(r)) return this.scanNumber(n), this.token = 11;
    if (r !== 45) return this.token = this.scanWord();
    if (x(e.charCodeAt(n + 1))) return this.scanNumber(n + 1), this.token = 11;
    return this.token = 14;
  }
  passLineBreak(e) {
    let { text: n } = this, r = n.charCodeAt(e) === 13 && n.charCodeAt(e + 1) === 10;
    return this.line++, this.lineStart = e + (r ? 2 : 1);
  }
  scanString() {
    let { text: e } = this, { length: n } = e, r = this.valueStart = this.position;
    for (; r < n; r++) {
      let o = e.charCodeAt(r);
      if (o === 34) {
        this.valueEnd = r, this.position = r + 1;
        return;
      }
      if (o === 92) {
        this.hasEscape = true;
        let s = e.charCodeAt(++r);
        if (s === 117) {
          let c = r + 4;
          while (r < c && W(e.charCodeAt(r + 1)) >= 0) r++;
          if (r < c) this.error = 4;
        } else if (V(s) === void 0) this.error = 5;
      } else if (o < 32) {
        if (o === 10 || o === 13) break;
        this.error = 6;
      }
    }
    this.error = 2, this.position = this.valueEnd = Math.min(r, n);
  }
  passDigits(e) {
    let { text: n } = this, r = e;
    while (x(n.charCodeAt(r))) r++;
    return r;
  }
  scanNumber(e) {
    let { text: n } = this, r = n.charCodeAt(e) === 48 ? e + 1 : this.passDigits(e);
    if (n.charCodeAt(r) === 46) {
      let o = r + 1;
      if (r = this.passDigits(o), r === o) {
        this.error = 3, this.position = this.valueEnd = r;
        return;
      }
    }
    if (this.position = this.valueEnd = r, (n.charCodeAt(r) | 32) === 101) {
      let o = n.charCodeAt(r + 1), s = r + (o === 43 || o === 45 ? 2 : 1);
      if (this.position = this.passDigits(s), this.position === s) this.error = 3;
      else this.valueEnd = this.position;
    }
  }
  scanComment() {
    let { text: e } = this, { length: n } = e, r = e.charCodeAt(this.position), o = this.position + 1;
    if (r === 47) {
      for (; o < n; o++) {
        let a = e.charCodeAt(o);
        if (a === 10 || a === 13) break;
      }
      return this.position = o, 12;
    }
    if (r !== 42) return 14;
    let s = e.indexOf("*/", o), c = s < 0 ? n - 1 : s + 2;
    while (o < c) {
      let a = e.charCodeAt(o);
      o = a === 10 || a === 13 ? this.passLineBreak(o) : o + 1;
    }
    if (s < 0) this.error = 1, o++;
    return this.position = o, 13;
  }
  scanWord() {
    let { text: e, offset: n } = this, { length: r } = e, o = this.position;
    e: for (; o < r; o++) switch (e.charCodeAt(o)) {
      case 32:
      case 9:
      case 10:
      case 13:
      case 34:
      case 44:
      case 58:
      case 47:
      case 123:
      case 125:
      case 91:
      case 93:
        break e;
    }
    if (this.position = o, o - n === 4) {
      if (e.startsWith("true", n)) return 8;
      if (e.startsWith("null", n)) return 7;
    }
    return o - n === 5 && e.startsWith("false", n) ? 9 : 14;
  }
}
function y(e) {
  return e === 12 || e === 13;
}
function G(e, n) {
  let r = e.charCodeAt(n);
  return r === 10 || r === 13;
}
function J(e, n) {
  let r = n;
  while (r > 0 && !G(e, r - 1)) r--;
  return r;
}
function w(e, n) {
  let r = n;
  while (r < e.length && !G(e, r)) r++;
  return r;
}
function z(e, n) {
  let r = w(e, 0);
  return r === e.length ? n.eol || `
` : e.startsWith(`\r
`, r) ? `\r
` : e.charAt(r);
}
function ie(e, n, r, o) {
  if (e === 14) return 0;
  if (r && y(e)) return 3;
  let s = r && y(n);
  switch (e) {
    case 1:
    case 3:
    case 5:
      return 3;
    case 13:
    case 6:
      return s ? 3 : 2;
    case 10:
      return s ? 3 : 1;
    default:
      if (s && !o) return 3;
      return n === 5 || n === 15 ? 1 : 0;
  }
}
function Q(e, n, r, o) {
  let s = n.offset, c = s + n.length, a = J(e, s), l = w(e, c), u = e.substring(a, l), p = " ".repeat(r), f = 0;
  for (let k of /^[ \t]*/.exec(u)[0]) f += k === "	" ? r : 1;
  let d = Math.floor(f / r), h = new b(u), S = [], T = [], m;
  while (m !== 15) {
    let { position: k, line: E, token: U } = h;
    h.skipWhitespace();
    let I = h.line > E, g = h.scan(), O, j = g !== 14 && !h.error;
    if (m === void 0) O = p.repeat(d), j &&= g !== 15, m = g;
    else if (!I && y(g)) O = " ";
    else {
      let N;
      if (g === 2 || g === 4) {
        let v = m === g - 1;
        d -= v ? 0 : 1, N = v ? 1 : 3;
      } else {
        let v = m === 1 || m === 3;
        d += v ? 1 : 0, N = ie(m, g, I, U === 12);
      }
      if (j &&= N !== 0, g === 15) O = "";
      else if (N === 3 || U === 12) {
        let v = Math.max(d, 0);
        O = T[v] ??= o + p.repeat(v);
      } else O = N === 2 ? " " : "";
      m = g;
    }
    let M = h.offset - k;
    if (j && a + k < c && a + h.offset > s && (Math.max(M, 0) !== O.length || !u.startsWith(O, k))) S.push({ offset: a + k, length: M, content: O });
  }
  return S;
}
class C {
  listener;
  options;
  scanner;
  constructor(e, n, r = {}) {
    this.listener = n;
    this.options = r;
    this.scanner = new b(e);
  }
  walk() {
    if (this.next(), !this.walkValue()) this.listener.fault(4, this.scanner);
    else if (this.scanner.token !== 15) this.listener.fault(9, this.scanner);
  }
  next() {
    for (; ; ) {
      this.scanner.skipWhitespace();
      let e = this.scanner.scan();
      if (y(e) && this.options.disallowComments) {
        this.listener.fault(10, this.scanner);
        continue;
      }
      if (this.scanner.error !== 0) this.listener.fault(this.scanner.error + 10, this.scanner);
      if (e === 14) this.listener.fault(1, this.scanner);
      else if (!y(e)) return e;
    }
  }
  skipToCommaOr(e) {
    let { token: n } = this.scanner;
    while (n !== e && n !== 5 && n !== 15) n = this.next();
  }
  walkValue() {
    let { token: e } = this.scanner;
    if (e >= 7 && e <= 11) return this.listener.literal(this.scanner), this.next(), true;
    let n = e === 1;
    if (n) this.listener.objectBegin(this.scanner);
    else if (e === 3) this.listener.arrayBegin(this.scanner);
    else return false;
    let r = n ? 2 : 4;
    this.next();
    for (let o = true; this.scanner.token !== r && this.scanner.token !== 15; o = false) {
      if (this.scanner.token === 5) {
        if (o) this.listener.fault(4, this.scanner);
        if (this.listener.comma(this.scanner), this.next() === r && this.options.allowTrailingComma) break;
      } else if (!o) this.listener.fault(6, this.scanner);
      if (!(n ? this.walkProperty() : this.walkValue())) this.listener.fault(4, this.scanner), this.skipToCommaOr(r);
    }
    if (n) this.listener.objectEnd(this.scanner);
    else this.listener.arrayEnd(this.scanner);
    if (this.scanner.token === r) this.next();
    else this.listener.fault(n ? 7 : 8, this.scanner);
    return true;
  }
  walkProperty() {
    if (this.scanner.token !== 10) return this.listener.fault(3, this.scanner), this.skipToCommaOr(2), false;
    if (this.listener.property(this.scanner), this.next() !== 6) return this.listener.fault(5, this.scanner), this.skipToCommaOr(2), true;
    if (this.next(), !this.walkValue()) this.listener.fault(4, this.scanner), this.skipToCommaOr(2);
    return true;
  }
}
function B(e, n) {
  return { error: e, offset: n.offset, length: n.position - n.offset };
}
function L(e) {
  switch (e.token) {
    case 10:
      return e.value();
    case 11:
      return Number(e.value());
    case 7:
      return null;
    default:
      return e.token === 8;
  }
}
class Y {
  errors;
  root;
  parent;
  constructor(e) {
    this.errors = e;
  }
  begin(e, n) {
    let { parent: r } = this;
    if (r) this.parent = { type: e, offset: n, length: -1, parent: r, children: [] }, r.children.push(this.parent);
    else this.root = this.parent = { type: e, offset: n, length: -1, children: [] };
  }
  close(e) {
    let { parent: n } = this;
    if (n) n.length = e - n.offset, this.parent = n.parent;
  }
  closeProperty(e) {
    if (this.parent?.type === "property") this.close(e);
  }
  addLiteral(e) {
    let { parent: n } = this, { offset: r } = e, o = L(e), s = typeof o === "string" ? "string" : typeof o === "number" ? "number" : o === null ? "null" : "boolean", c = e.position - r;
    if (n) n.children.push({ type: s, offset: r, length: c, parent: n, value: o });
    else this.root = { type: s, offset: r, length: c, value: o };
  }
  objectBegin(e) {
    this.begin("object", e.offset);
  }
  property(e) {
    this.begin("property", e.offset), this.addLiteral(e);
  }
  objectEnd(e) {
    this.closeProperty(e.position), this.arrayEnd(e);
  }
  arrayBegin(e) {
    this.begin("array", e.offset);
  }
  arrayEnd(e) {
    this.close(e.position), this.closeProperty(e.position);
  }
  literal(e) {
    this.addLiteral(e), this.closeProperty(e.position);
  }
  comma(e) {
    this.closeProperty(e.offset);
  }
  fault(e, n) {
    this.errors?.push(B(e, n));
  }
}
function F(e, n, r) {
  let o = new Y(n);
  return new C(e, o, r).walk(), o.root;
}
function A(e, n) {
  let r = e;
  for (let o of n) if (typeof o === "string") r = r?.type === "object" ? r.children?.find(({ children: s }) => s?.length === 2 && s[0]?.value === o)?.children?.[1] : void 0;
  else r = r?.type === "array" ? r.children?.[o] : void 0;
  return r;
}
function m_n(e, n) {
  let r = "", o = e.length;
  for (let { offset: s, length: c, content: a } of n.toSorted((l, u) => l.offset - u.offset || l.length - u.length).reverse()) {
    if (s + c > o) throw Error("Overlapping edit");
    r = a + e.substring(s + c, o) + r, o = s;
  }
  return e.substring(0, o) + r;
}
function Z(e) {
  return JSON.stringify(e);
}
function X(e, n, r) {
  let o = e.children ?? [], s = o[Math.min(n, o.length) - 1];
  return s ? { offset: s.offset + s.length, length: 0, content: `,${r}` } : { offset: e.offset + 1, length: 0, content: o.length > 0 ? `${r},` : r };
}
function se(e, n, r, o) {
  let s = n.length - 1, c = A(e, n.slice(0, s)), a = r;
  while (!c && s >= 0) {
    let f = n[s--];
    a = typeof f === "string" ? { [f]: a } : [a], c = A(e, n.slice(0, s));
  }
  let l = n[s], u = Z(a);
  if (!c || s < 0) return { offset: e?.offset ?? 0, length: e?.length ?? 0, content: u };
  let p = c.children ?? [];
  if (typeof l === "string" && c.type === "object") {
    let f = A(c, [l]);
    return f ? { offset: f.offset, length: f.length, content: u } : X(c, p.length, `${Z(l)}: ${u}`);
  }
  if (typeof l === "number" && c.type === "array") {
    let f = o ? void 0 : p[l];
    return f ? { offset: f.offset, length: f.length, content: u } : X(c, l, u);
  }
  throw typeof l === "number" ? Error("Can not add index to a parent that is no array") : Error("Can not add property to a parent that is no object");
}
function ae(e, n, r) {
  let o = J(e, n.offset), s = n.offset + n.length, c = Math.min(w(e, s), e.length), a = e.slice(o, n.offset) + n.content + e.slice(s, c), l = n.length > 0, u = l ? n.offset - o : 0, p = l ? u + n.content.length : a.length, f = Q(a, { offset: u, length: p - u }, r.tabSize || 4, z(o > 0 ? e : e.slice(c), r)), d = new b(e), h = o;
  while (d.position < n.offset && d.token !== 15) if (d.skipWhitespace(), d.scan(), d.offset < o && d.position > o) h = d.offset;
  if (d.offset < n.offset && (d.token === 12 || d.error === 1 || d.error === 2)) throw Error("Can not edit inside a comment or string");
  if (h < o) {
    let E = e.slice(h, o);
    if (H(E + a) !== H(E + m_n(a, f))) f = [];
  }
  let S = f[0], T = f.at(-1);
  if (S && T) u = Math.min(u, S.offset), p = Math.max(p, T.offset + T.length);
  let m = a.length - p, k = m_n(a, f);
  return { offset: o + u, length: c - m - o - u, content: k.slice(u, k.length - m) };
}
function Hqn(e, n, r, { formattingOptions: o, isArrayInsertion: s }) {
  let c = se(F(e), n, r, s);
  return [ae(e, c, o)];
}
function H(e) {
  let n = new b(e), r = "";
  for (; ; ) {
    n.skipWhitespace();
    let o = n.scan();
    if (o === 15) return r;
    if (!y(o)) r += `${e.slice(n.offset, n.position)}
`;
    else if (n.error) return `${r}/*`;
  }
}
class q {
  errors;
  roots = [];
  container = this.roots;
  outer = [];
  name = "";
  constructor(e) {
    this.errors = e;
  }
  add(e) {
    let { container: n, name: r } = this;
    if (Array.isArray(n)) n.push(e);
    else if (r !== "__proto__") n[r] = e;
  }
  begin(e) {
    this.add(e), this.outer.push(this.container), this.container = e;
  }
  objectBegin() {
    this.begin({});
  }
  property(e) {
    this.name = e.value();
  }
  objectEnd() {
    this.container = this.outer.pop() ?? this.roots;
  }
  arrayBegin() {
    this.begin([]);
  }
  arrayEnd() {
    this.container = this.outer.pop() ?? this.roots;
  }
  literal(e) {
    this.add(L(e));
  }
  comma() {
  }
  fault(e, n) {
    this.errors?.push(B(e, n));
  }
}
function ce(e, n) {
  let r = "", o = 0, s = 0, c = -1;
  for (let a = 0; a < e.length; a++) {
    let l = e.charCodeAt(a);
    if (l === 32 || l === 10 || l === 9 || l === 13) continue;
    if (l === 47) {
      let p = e.charCodeAt(a + 1) === 42, f = p ? e.indexOf("*/", a + 2) + 2 : w(e, a);
      if (n?.disallowComments || (p ? f === 1 : e.charCodeAt(a + 1) !== 47)) return;
      if (s === 44 && c >= o) r += e.slice(o, c);
      else if (s !== 44) r += `${e.slice(o, a)} `;
      o = f, a = f - 1;
      continue;
    }
    let u = l === 125 || l === 93;
    if (s === 44) {
      if (u && !n?.allowTrailingComma) return;
      if (c < o) r += u ? "" : ",";
      else if (u) r += e.slice(o, c), o = a;
    }
    if (l === 34) {
      let p = 1;
      while (p % 2 === 1 && a >= 0) {
        a = e.indexOf('"', a + 1), p = 0;
        while (e.charCodeAt(a - p - 1) === 92) p++;
      }
      if (a < 0) return;
    } else if (l === 44) {
      if (s === 123 || s === 91) return;
      c = a;
    }
    s = l;
  }
  return s === 44 ? void 0 : r + e.slice(o);
}
function tft(e, n, r) {
  let o = /__proto__|\\u00[5-7]/.test(e) ? void 0 : ce(e, r);
  if (o !== void 0) try {
    return JSON.parse(o);
  } catch {
  }
  let s = new q(n);
  return new C(e, s, r).walk(), s.roots[0];
}
class K {
  visitor;
  constructor(e) {
    this.visitor = e;
  }
  objectBegin() {
    this.visitor.onObjectBegin?.();
  }
  property(e) {
    this.visitor.onObjectProperty?.(e.value());
  }
  objectEnd() {
    this.visitor.onObjectEnd?.();
  }
  arrayBegin() {
  }
  arrayEnd() {
  }
  literal() {
  }
  comma() {
  }
  fault(e, n) {
    this.visitor.onError?.(e, n.offset, n.position - n.offset, n.tokenLine, n.offset - n.tokenLineStart);
  }
}
function R(e, n, r) {
  new C(e, new K(n), r).walk();
}
var Dqn = "__unparsedToolInput";
function VHo() {
  return { [Dqn]: { raw: "", len: 0 } };
}
function Vee(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return false;
  let n = Object.entries(e);
  if (n.length !== 1) return false;
  let [r, o] = n[0];
  return r === Dqn && typeof o === "object" && o !== null && typeof o.raw === "string" && typeof o.len === "number";
}
function yge(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let n = Object.entries(e);
  if (n.length !== 1) return null;
  let [r, o] = n[0];
  if (r !== Dqn || typeof o !== "object" || o === null) return null;
  let { raw: s, len: c } = o;
  if (typeof s !== "string" || typeof c !== "number") return null;
  return `input JSON failed to parse \u2014 ${c} bytes`;
}
var pe = 8192;
function ne(e, n) {
  try {
    return { ok: true, value: JSON.parse(Ys(e)) };
  } catch (r) {
    if (n) (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)(r, `safeParseJSON: invalid JSON (${r instanceof Error ? r.constructor.name : typeof r}, ${e.length} bytes)`));
    return { ok: false };
  }
}
class re {
  cached = (0, import_chunk_jk26f2gn.u$)(ne, (e) => e, 50);
  cache = this.cached.cache;
  parse(e, n) {
    return this.cached(e, n);
  }
}
var ee = new re();
function fF(e) {
  return e.trim().replace(/^```[a-zA-Z]*\s*/, "").replace(/\s*```$/, "").trim();
}
var et = Object.assign(function(n, r = true) {
  if (!n) return null;
  let o = n.length > pe ? ne(n, r) : ee.parse(n, r);
  return o.ok ? o.value : null;
}, { cache: ee.cache });
function nft(e) {
  if (!e) return null;
  try {
    return tft(Ys(e));
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Failed to parse JSONC: ${n instanceof Error ? n.message : String(n)}`, { level: "error" }), null;
  }
}
function KHo(e) {
  let n;
  try {
    R(Ys(e), { onError: (r, o, s, c, a) => {
      n ??= { line: c + 1, column: a + 1 };
    } }, { disallowComments: true });
  } catch {
  }
  return n;
}
function $ta() {
  return Bun.JSONL?.parseChunk;
}
function de(e, n) {
  if (typeof e !== "string" && !te.isAscii(e)) {
    let a = he(e, n);
    if (a !== void 0) return a;
  }
  let r = e.length, o = n(e);
  if (!o.error || o.done || o.read >= r) return o.values;
  let { values: s, read: c } = o;
  while (c < r) {
    let a = typeof e === "string" ? e.indexOf(`
`, c) : e.indexOf(10, c);
    if (a === -1) break;
    c = a + 1;
    let l = n(e, c);
    if (l.values.length > 0) s = s.concat(l.values);
    if (!l.error || l.done || l.read >= r) break;
    c = l.read;
  }
  return s;
}
function he(e, n) {
  let r = [], o = e.length;
  for (let s = 0; s < o; ) {
    let c = e.indexOf(10, s), a = c === -1 ? o : c;
    if (a > s) {
      if (s > 0 && e[s] === 239 && e[s + 1] === 187 && e[s + 2] === 191) return;
      let l = n(e.subarray(s, a));
      if (l.error || !l.done && a < o) return;
      for (let u of l.values) r.push(u);
    }
    s = a + 1;
  }
  return r;
}
function me(e) {
  let n = e.length, r = 0;
  if (e[0] === 239 && e[1] === 187 && e[2] === 191) r = 3;
  let o = [];
  while (r < n) {
    let s = e.indexOf(10, r);
    if (s === -1) s = n;
    let c = e.toString("utf8", r, s).trim();
    if (r = s + 1, !c) continue;
    try {
      o.push(JSON.parse(c));
    } catch {
    }
  }
  return o;
}
function ge(e) {
  let n = Ys(e), r = n.length, o = 0, s = [];
  while (o < r) {
    let c = n.indexOf(`
`, o);
    if (c === -1) c = r;
    let a = n.substring(o, c).trim();
    if (o = c + 1, !a) continue;
    try {
      s.push(JSON.parse(a));
    } catch {
    }
  }
  return s;
}
function mOe(e) {
  let n = $ta();
  if (n) return de(e, n);
  if (typeof e === "string") return ge(e);
  return me(e);
}
var h_n = 104857600;
async function g_n(e) {
  var _stack = [];
  try {
    let { size: n } = await (0, import_promises.stat)(e);
    if (n <= h_n) return mOe(await (0, import_promises.readFile)(e));
    const r = __using(_stack, await (0, import_promises.open)(e, "r"), true);
    let o = Buffer.allocUnsafe(h_n), s = 0, c = n - h_n;
    while (s < h_n) {
      let { bytesRead: l } = await r.read(o, s, h_n - s, c + s);
      if (l === 0) break;
      s += l;
    }
    let a = o.indexOf(10);
    if (a !== -1 && a < s - 1) return mOe(o.subarray(a + 1, s));
    return mOe(o.subarray(0, s));
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
function Uta(e, n, r) {
  if (!e || e.trim() === "") return (0, import_chunk_w578pjby._)({ [n]: r }, null, 4);
  let o = Ys(e);
  try {
    let s = [], c = tft(o, s);
    if (s.length > 0 || c === null || typeof c !== "object" || Array.isArray(c)) return e;
    let a = Hqn(o, [n], r, { formattingOptions: { insertSpaces: true, tabSize: 4 } });
    if (!a || a.length === 0) return o;
    return m_n(o, a);
  } catch (s) {
    return (0, import_chunk_w578pjby.t)(`Failed to set JSONC property "${n}": ${s instanceof Error ? s.message : String(s)}`, { level: "error" }), e;
  }
}
function v$l(e, n) {
  if (!e || e.trim() === "") return (0, import_chunk_w578pjby._)([n], null, 4);
  let r = Ys(e), o = tft(r);
  if (Array.isArray(o)) {
    let s = o.length, l = Hqn(r, s === 0 ? [0] : [s], n, { formattingOptions: { insertSpaces: true, tabSize: 4 }, isArrayInsertion: true });
    if (!l || l.length === 0) {
      let u = [...o, n];
      return (0, import_chunk_w578pjby._)(u, null, 4);
    }
    return m_n(r, l);
  } else return (0, import_chunk_w578pjby._)([n], null, 4);
}
