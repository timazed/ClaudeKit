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
var chunk_sah8dzn4_exports = {};
__export(chunk_sah8dzn4_exports, {
  $Lr: () => $Lr,
  $Ls: () => $Ls,
  $ge: () => $ge,
  As: () => As,
  D4t: () => D4t,
  FLr: () => FLr,
  FLs: () => FLs,
  G6e: () => G6e,
  H4t: () => H4t,
  Jft: () => Jft,
  NLr: () => NLr,
  Q0o: () => Q0o,
  R3: () => R3,
  S1e: () => S1e,
  SWl: () => SWl,
  WEe: () => WEe,
  XA: () => XA,
  YA: () => YA,
  _J: () => _J,
  _Wl: () => _Wl,
  ag: () => ag,
  asa: () => asa,
  bWl: () => bWl,
  csa: () => csa,
  dsa: () => dsa,
  e3n: () => e3n,
  fsa: () => fsa,
  gWl: () => gWl,
  hWl: () => hWl,
  iPt: () => iPt,
  isa: () => isa,
  j6e: () => j6e,
  lsa: () => lsa,
  mWl: () => mWl,
  t3n: () => t3n,
  usa: () => usa,
  ute: () => ute,
  x3: () => x3,
  yJ: () => yJ,
  yWl: () => yWl,
  z8: () => z8,
  zm: () => zm
});
module.exports = __toCommonJS(chunk_sah8dzn4_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function Ie(e) {
  let n = new Int32Array(e.length);
  for (let t = 0; t < e.length; t++) n[t] = t;
  return { text: e, origin: n };
}
function Ce(e, n, t) {
  let s = [];
  for (let r of e.text.matchAll(n)) {
    let { keep: i, insert: o, keepEnd: c = 0 } = t(r), l = r.index ?? 0, a = r[0].length, u = Math.min(Math.max(i | 0, 0), a), g = Math.min(Math.max(c | 0, 0), a - u);
    s.push([l + u, l + a - g, o]);
  }
  return G(e, s);
}
function G(e, n) {
  if (n.length === 0) return e;
  let { text: t, origin: s } = e, r = t.length;
  for (let [a, u, g] of n) r += g.length - (u - a);
  let i = new Int32Array(r), o = [], c = 0, l = 0;
  for (let [a, u, g] of n) o.push(t.slice(c, a)), i.set(s.subarray(c, a), l), l += a - c, o.push(g), i.fill(-1, l, l + g.length), l += g.length, c = u;
  return o.push(t.slice(c)), i.set(s.subarray(c), l), { text: o.join(""), origin: i };
}
function re(e, n, t) {
  return { text: e.text.slice(n, t), origin: e.origin.slice(n, t) };
}
function _J(e) {
  let n = 0;
  while (n < e.length && e.charCodeAt(n) <= 32) n++;
  let t = e.slice(n), s = /^([A-Za-z0-9][A-Za-z0-9+.-]*):\/\//.exec(t), r = s?.[1]?.toLowerCase(), i = s ? t.slice(s[0].length) : t, o = i.indexOf(":"), c = i.indexOf("/");
  if (!(r !== void 0 ? r !== "file" : o !== -1 && (c === -1 || o < c) && !/^[A-Za-z]:/.test(i))) {
    let h = s ? U(i) : i;
    return h.includes("@[") || h.startsWith("[");
  }
  let a = U(i), u = s ? /^(?:[^@/?#\\[\]]+@)?(\[[0-9A-Fa-f:.]+\])(?::\d*)?(?=\/|$)/.exec(a) : /^[^@:/[\]]+@(\[[0-9A-Fa-f:.]+\])(?=:)/.exec(a), g = u !== null && !!Jft(`ssh://${u[1]}/`)?.hostname;
  return /[[\]]/.test(a.slice(g ? u[0].length : 0));
}
function Jft(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function U(e) {
  return e.replace(/%([0-9A-Fa-f]{2})/g, (n, t) => {
    let s = parseInt(t, 16);
    return s === 0 ? n : String.fromCharCode(s);
  });
}
function $ge(e, { asRewritten: n = false } = {}) {
  let t = e.trimStart(), s = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(t);
  if (s) {
    let r = s[1]?.toLowerCase();
    if (r === "file") return null;
    if (r === "http" || r === "https") {
      let i = Jft(t);
      return i?.hostname ? { host: i.hostname, path: i.pathname } : null;
    }
    return Oe(e3n(t.slice(s[0].length)), "/");
  }
  return Oe(n ? e3n(t) : t, ":");
}
function Ke(e, n) {
  let t = e.indexOf("@["), s = t === -1 ? 0 : t + 1, r = e[s] === "[" ? s : -1, i = r === -1 ? -1 : e.indexOf("]", r + 1), o = e.indexOf(n, i === -1 ? 0 : i + 1);
  return { open: r, close: i, cut: o };
}
function Oe(e, n) {
  let { open: t, close: s, cut: r } = Ke(e, n), i = t === -1 ? 0 : t, o = e.indexOf("/");
  if (n === ":" && (r === -1 || o !== -1 && o < e.indexOf(":"))) return null;
  let c = r === -1 ? "" : e.slice(n === ":" ? r + 1 : r);
  if (s !== -1) {
    let g = e.slice(s + 1, r === -1 ? e.length : r), h = e.slice(0, i) + e.slice(i + 1, s), x = De(g) !== g ? h : De(h), f = x.slice(x.lastIndexOf("@") + 1), p = Jft(`ssh://[${f}]/`)?.hostname;
    return f ? { host: p || f, path: c } : null;
  }
  let l = r === -1 ? e : e.slice(0, r), a = l.slice(l.lastIndexOf("@") + 1);
  if (a.startsWith("[")) return null;
  let u = n === "/" ? a.replace(/:\d*$/, "") : a;
  return u ? { host: u, path: c } : null;
}
function Le(e) {
  let { text: n, from: t } = An(e), { close: s, cut: r } = Ke(n, "/"), i = r === -1 ? n.length : r, o = [], c = (l, a) => {
    let u = n.lastIndexOf("@", a - 1);
    if (u >= l) o.push([t(l), t(u)]);
  };
  if (s === -1) c(0, i);
  else c(0, s), c(s + 1, i);
  return o;
}
function e3n(e) {
  return e.replace(/(?:%(?!00)[0-9A-Fa-f]{2})+/g, (n) => {
    try {
      return decodeURIComponent(n);
    } catch {
      return U(n);
    }
  });
}
function An(e) {
  if (!e.includes("%")) return { text: e, from: (r) => r };
  let n = [], t = "", s = 0;
  for (let r of e.matchAll(/(?:%(?!00)[0-9A-Fa-f]{2})+/g)) {
    for (let a = s; a < r.index; a++) n.push(a);
    t += e.slice(s, r.index);
    let i, o;
    try {
      i = decodeURIComponent(r[0]), o = Array.from(i, (a) => {
        let u = a.codePointAt(0);
        return u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
      });
    } catch {
      i = U(r[0]), o = Array.from(i, () => 1);
    }
    let c = r.index, l = 0;
    for (let a of o) {
      let u = i.codePointAt(l) > 65535 ? 2 : 1;
      for (let g = 0; g < u; g++) n.push(c);
      l += u, c += 3 * a;
    }
    t += i, s = r.index + r[0].length;
  }
  for (let r = s; r <= e.length; r++) n.push(r);
  return { text: t + e.slice(s), from: (r) => n[r] };
}
function De(e) {
  let n = e.indexOf(":"), t = e.slice(n + 1);
  if (n === -1 || !/^[ \t\n\v\f\r]*[+-]?\d+$/.test(t)) return e;
  let s = Number.parseInt(t.trim(), 10);
  return s >= 0 && s < 65536 ? e.slice(0, n) : e;
}
var bn = /\s/g, Rn = /[\n\r\u2028\u2029]/g, kn = /(?:@|%40)(?:\[|%5B)/gi, Sn = /^(?:\[|%5B)/i, _n = /\]|%5D/gi, isa = /(?:^|[^A-Za-z0-9+.-])(?:https?|wss?|ftps?)$/i, Ne = /(?:^|[^A-Za-z0-9+.-])(?:ssh|git|git\+ssh|ssh\+git)$/i, Tn = /[,;|&]/g, $n = /(?:^|[^A-Za-z0-9+.-])[A-Za-z][A-Za-z0-9+.-]{0,31}$/, wn = /["'`|,;&<>()[\]\\@/?#]|%40|%5B/i, In = /["'`]/, Cn = /[;|&\n]/g, ze = /\[REDACTED|\*\*\*:\*\*\*/g, Pe = `@|%40|${ze.source}`, On = 64, Dn = 2048, Kn = /[\s"'`]/g;
function ie(e) {
  let n = [], t = b(e, Kn), s = 0;
  for (let r = e.indexOf("://"); r !== -1; ) {
    let i = r + 3;
    if (r >= s && Ne.test(e.slice(Math.max(0, r - 8), r))) {
      s = Math.min(t(i), i + Dn);
      for (let [o, c] of Le(e.slice(i, s))) n.push([i + o, i + c]);
    }
    r = e.indexOf("://", i);
  }
  return n;
}
function mWl(e) {
  return Be(e).spans;
}
function Be(e) {
  let n = [], t = [], s = b(e, bn), r = b(e, /\//g), i = oe(e, kn), o = b(e, _n), c = b(e, /\//g), l = b(e, Cn), a = b(e, /[/?#]/g), u = b(e, Tn), g = b(e, /@/g), h = b(e, /%40/gi), x = b(e, ze), f = b(e, /[:%]/g), p = b(e, /["'`,;|&<>{}()]/g), E = Me(e, false), A = Me(e, true);
  for (let m = e.indexOf("://"); m !== -1; ) {
    let d = m + 3, O = e.indexOf("://", d), k = s(d), W = g(d), I;
    if (isa.test(e.slice(Math.max(0, m - 8), m))) {
      let R = Math.min(a(d), k), L = Math.min(u(d), R);
      if (I = W < R ? Math.max(E(d, R), A(W, R)) : Math.max(E(d, Math.min(r(d), k)), A(d, L)), I <= d) {
        let v = Math.min(R, l(d));
        t.push({ start: d, fieldEnd: Math.min(L, v), lastEncodedAt: A(d, v) });
      }
    } else {
      let R = Math.min(r(d), k), L = Math.min(k, O === -1 ? e.length : O), v = Ne.test(e.slice(Math.max(0, m - 8), m)), Z = v ? i(d) : null, Te = v ? Sn.exec(e.slice(d, d + 3)) : null, yn = [[Te !== null ? d + Te[0].length : -1, L], [Z !== null && Z.index < L ? Z.index + Z[0].length : -1, k]];
      for (let [$e, xn] of yn) {
        let we = $e === -1 ? k : o($e);
        if (we < xn) R = Math.max(R, Math.min(c(we), k));
      }
      I = Math.max(E(d, R), A(d, R));
    }
    if (I > d) n.push({ start: d, end: I, separatorEnd: I + (e[I] === "@" ? 1 : 3), loginEnd: W <= I ? W : Math.min(h(d), I) });
    else {
      let R = x(d);
      if (R > d && R < Math.min(k, r(d), p(d)) && f(d) < R) n.push({ start: d, end: R, separatorEnd: R, loginEnd: R });
    }
    m = O;
  }
  return { spans: n, hostParts: t };
}
function We(e, n) {
  let { spans: t, hostParts: s } = Be(e);
  if (t.length === 0 && s.length === 0) return [];
  let r = n(), i = b(e, /[\s"'>}|,;&`)\]]/g), o = b(e, /\s/g), c = [], l = [];
  for (let f of t) c.push({ start: f.start, end: f.end, loginEnd: f.loginEnd }), l.push({ ...f, userinfo: f });
  let a = H(e, r);
  for (let f of s) {
    let p = a(f.start)[0];
    if (p && p.keyStart < f.fieldEnd && e.slice(f.start, p.keyStart).includes("%")) {
      let E = f.lastEncodedAt > p.keyStart ? f.lastEncodedAt : p.valueStart;
      c.push({ start: f.start, end: E, loginEnd: E }), l.push(E > p.valueStart ? { start: f.start, end: E, userinfo: { start: f.start, end: E, separatorEnd: E + 3, loginEnd: E } } : { start: f.start, end: E });
    }
  }
  if (l.length === 0) return [];
  c.sort((f, p) => f.start - p.start);
  let u = H(e, r), g = 0;
  for (let f = 0, p = u(f); p[0] !== void 0; ) {
    let E, A = null;
    for (let d of p) if (A = d.valueEnd(), A !== null) {
      E = d;
      break;
    }
    if (E === void 0 || A === null) {
      f = p[0].keyStart + 1, p = u(f);
      continue;
    }
    while (g < c.length && c[g].start <= E.keyStart) g++;
    let m = c[g];
    if (m !== void 0 && m.start < A) {
      let d = e[E.valueStart] ?? "", k = (d === '"' || d === "'") && A - 1 > E.valueStart && e[A - 1] === d ? Math.max(A, m.end) : o(Math.max(A, m.end, i(m.loginEnd + 1)));
      l.push({ start: E.valueStart, end: k });
    }
    f = A, p = u(f);
  }
  let h = { nextKey: H(e, r), plainKeys: H(e, r), nextLineEnd: b(e, Rn), span: 0, lineEnd: -1, resumeAt: 0, overflowEnd: Un(e, () => h.lineEnd) }, x = [];
  for (let f of Nn(l)) {
    let p = x.at(-1);
    x.push(p !== void 0 && f.start < p.end ? Ue(e, { start: x.pop().start, end: Math.max(p.end, f.end) }, h) : Ue(e, f, h));
  }
  return x.map((f) => f.userinfo ? f : Mn(e, f));
}
var ve = /* @__PURE__ */ new WeakMap();
function Ln(e) {
  let n = ve.get(e);
  if (!n) n = { word: new RegExp(e.word, "gi"), notTail: new RegExp(`(?!${e.tail})[^]`, "gi"), separator: new RegExp(e.separator, "iy"), value: new RegExp(e.value, "iy") }, ve.set(e, n);
  return n;
}
function H(e, n) {
  let t = n.map((s) => {
    let { word: r, notTail: i, separator: o, value: c } = Ln(s), l = oe(e, r), a = b(e, i), u = -1, g = -1, h = -1, x = null, f = (m) => {
      if (m !== h) h = m, c.lastIndex = m, x = c.test(e) ? c.lastIndex : null;
      return x;
    }, p = (m) => {
      if (m !== u) u = m, o.lastIndex = m, g = o.test(e) ? o.lastIndex : -1;
      return g;
    }, E = -1, A = null;
    return (m) => {
      if (E !== -1 && m >= E && (A === null || m <= A.keyStart)) return A;
      E = m, A = null;
      for (let d = l(m); d !== null; ) {
        let O = d.index + d[0].length, k = p(s.tail ? a(O) : O);
        if (k !== -1) {
          A = { keyStart: d.index, valueStart: k, valueEnd: () => f(k) };
          break;
        }
        d = l(d.index + 1);
      }
      return A;
    };
  });
  return (s) => {
    let r = [];
    for (let i of t) {
      let o = i(s);
      if (o && (!r[0] || o.keyStart <= r[0].keyStart)) r = r[0] && o.keyStart === r[0].keyStart ? [...r, o] : [o];
    }
    return r;
  };
}
function Ue(e, n, t) {
  if (n.userinfo && vn(e, n.userinfo, t)) return n;
  let s = n.end;
  t.resumeAt = Math.max(t.resumeAt, n.start);
  for (let r = t.nextKey(t.resumeAt); r[0] !== void 0 && r[0].keyStart < s; ) {
    let i = r[0].keyStart;
    if (i > t.lineEnd) {
      let a = t.nextLineEnd(i);
      t.span = On * (a - t.lineEnd), t.lineEnd = a;
    }
    let o = null, c = r[0];
    for (let a of r) if (o = a.valueEnd(), o !== null) {
      c = a;
      break;
    }
    let l = o ?? c.valueStart;
    if (t.span -= l - i, t.span < 0) return { start: n.start, end: Math.max(s, t.overflowEnd(n.start)) };
    s = Math.max(s, l), t.resumeAt = c.valueStart, r = t.nextKey(t.resumeAt);
  }
  return s === n.end ? n : { start: n.start, end: s };
}
function vn(e, n, t) {
  if (e[n.end] !== "@" || wn.test(e.slice(n.start, n.end)) || !$n.test(e.slice(Math.max(0, n.start - 36), n.start - 3))) return false;
  for (let s = t.plainKeys(n.start); s[0] !== void 0 && s[0].keyStart < n.end; s = t.plainKeys(s[0].keyStart + 1)) if (s.some((r) => r.valueStart === n.end)) return false;
  return true;
}
function Un(e, n) {
  let t = b(e, /["'`]/g), s = -1, r = e.length;
  return (i) => {
    if (n() !== s) s = n(), r = t(i) < s ? e.length : s;
    return r;
  };
}
function Mn(e, n) {
  let t = e[n.end - 1];
  if (t === void 0 || !In.test(t)) return n;
  return (e.slice(n.start, n.end).split(t).length - 1) % 2 === 1 ? { start: n.start, end: n.end - 1 } : n;
}
function Nn(e) {
  e.sort((t, s) => t.start - s.start || s.end - t.end);
  let n = [];
  for (let t of e) {
    let s = n.at(-1);
    if (s === void 0 || t.start >= s.end) n.push(t);
    else n[n.length - 1] = { start: s.start, end: Math.max(s.end, t.end) };
  }
  return n;
}
function b(e, n) {
  let t = oe(e, n);
  return (s) => t(s)?.index ?? e.length;
}
function oe(e, n) {
  let t = -1, s = null;
  return (r) => {
    if (t === -1 || r < t || s !== null && r > s.index) n.lastIndex = r, s = n.exec(e), t = r;
    return s;
  };
}
function Me(e, n) {
  let t = n ? "%40" : "@", s = new Int32Array(16), r = 0, i = 0;
  return (o, c) => {
    let l = Math.min(c, e.length) - t.length;
    while (i <= l) {
      let h = e.indexOf(t, i);
      if (h === -1) {
        i = e.length;
        break;
      }
      if (r === s.length) {
        let x = new Int32Array(r * 2);
        x.set(s), s = x;
      }
      s[r++] = h, i = h + 1;
    }
    let a = 0, u = r;
    while (a < u) {
      let h = a + u >>> 1;
      if (s[h] <= l) a = h + 1;
      else u = h;
    }
    let g = a === 0 ? -1 : s[a - 1];
    return g >= o ? g : -1;
  };
}
var X = String.raw`api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|memory[_-]?request[_-]?mac|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret`, ue = "Bearer|Basic", Ze = { operations: 33792, code: 16605 }, Ge = 2097152, nn = { run: import_chunk_kx2fp6pc.r3n, members: import_chunk_kx2fp6pc.b1e, room: { operations: 384912, code: 425553 }, roomForEscapedKeys: { operations: 577280, code: 638329 } }, zn = { run: "", members: "", room: { operations: 114048, code: 24907 }, roomForEscapedKeys: { operations: 171072, code: 37360 } }, Pn = new RegExp(`[\\x00-\\x7f\\s\\u0085]${import_chunk_kx2fp6pc.rLo.source}`);
class T {
  build;
  roomOf;
  withoutInvisibles;
  withInvisibles;
  static thisRun;
  constructor(e, n = (t) => t.room) {
    this.build = e;
    this.roomOf = n;
  }
  for(e) {
    return Pn.test(e) ? this.withInvisibles ??= this.make(nn) : this.withoutInvisibles ??= this.make(zn);
  }
  make(e) {
    let n = this.roomOf(e);
    if (n === void 0 || typeof Bun > "u" || !("transfer" in ArrayBuffer.prototype)) return this.build(e);
    if (T.thisRun?.refusal !== void 0) throw T.thisRun.refusal;
    let t = this.build(e), s = [[Ze.operations, n.operations], [Ze.code, n.code]];
    if (T.thisRun === void 0) s.push([Ge, Ge]);
    let r = [], i;
    try {
      for (let [o, c] of s) for (let l = o; ; l = Math.floor(l * 1.5)) if (r.push(Buffer.allocUnsafeSlow(Math.min(l, c)).buffer), l >= c) break;
    } catch (o) {
      i = o;
    }
    for (let o of r) o.transfer(0);
    if (T.thisRun === void 0) queueMicrotask(() => {
      T.thisRun = void 0;
    });
    if (T.thisRun = { refusal: i }, i !== void 0) throw i;
    return t;
  }
}
function tn({ members: e }) {
  return `[\\s\\u0085${e}]`;
}
var He = "[^\\s\\u0085,;&}\\])]+", Ve = "(?![\\w\\[({$/+=~!@%^?\\\\-])", q = "\\n\\r\\x0b\\x0c\\u0085\\u2028\\u2029", C = "[\\s\\u0085]", asa = new RegExp(tn(nn)), hWl = new RegExp(`(?:[=:]|["']|\\b(?:${(0, import_chunk_kx2fp6pc.Qft)("bearer|basic")}))$`, "i"), Bn = `\\\\+(?:"[^"${q}]*(?<!\\\\)(?=\\\\+")|'[^'${q}]*(?<!\\\\)(?=\\\\+'))`, Fe = `[^\\s\\u0085,;&})"'\\\\]+`, fe = "AWS|GOOGLE|GCP|GCLOUD|AZURE", _ = "[\\w=-]", w = `${_}{20,}(?:\\.[0-9a-z]{9})?`, Wn = "[\\w.-]{0,256}(?![\\w.-])", Je = `${C}*(?!${C})`;
function z(e) {
  let { run: n, members: t } = e, s = (0, import_chunk_kx2fp6pc.Qft)(X, n), r = tn(e), i = `(?:${(0, import_chunk_kx2fp6pc.Qft)(ue, n)})${t && `[${t}]*`}[\\s\\u0085]+`, o = `"[^"${q}]*"|'[^'${q}]*'|"[^"]*"${Ve}|'[^']*'${Ve}|[^\\s-]{0,4}\\[REDACTED\\]['"\`]?|${i}(?:\\[REDACTED\\]|${He})|${He}`, c = `(?:${s})${Wn}`, l = `\\b(?:${(0, import_chunk_kx2fp6pc.Qft)(fe, n)})${n}_\\w+`, a = `[^\\s\\u0085,;&}\\])"']{0,64}?(?:${c}|${l})`;
  return { sensitiveKeyWord: s, authScheme: i, sensitiveAssign: `${c}(?:${n}["'])?${r}*[=:]${Je}(${o})`, cloudEnvVar: `${l}${r}*[=:]${C}*(${o})`, sensitiveAssignEscaped: `${c}${n}\\\\+["']${r}*[=:]${Je}(${Bn}|${i}${Fe}|${Fe}|\\\\+["'][^\\s\\u0085,;&})"'\\\\]*)`, nextKey: `(?:${i})?(?:[{[(]{0,8}(?:"${a}"|'${a}')|${a})${r}*[=:]`, nextKeyOrEscaped: `(?:${i})?(?:[{[(]{0,8}(?:"${a}"|'${a}'|\\\\+"${a}\\\\+"|\\\\+'${a}\\\\+')|${a})${r}*[=:]`, urlKeyRules: [{ word: `(?:${s})`, tail: "[\\w.-]", separator: `["']?${C}*[=:]${C}*`, value: o }, { word: `\\b(?:${fe})_\\w`, tail: "\\w", separator: `${C}*[=:]${C}*`, value: o }, { word: `\\b(?:${ue})`, tail: "", separator: `${C}+`, value: "[A-Za-z0-9+/=._~-]{20,}" }] };
}
var sn = /\\["']/, rn = "\\][^\\s\"'>}|,;&`)\\]]*", P = "[A-Za-z0-9_-]", ge = `${P}{10}${P}*`, je = `\\.${ge}\\.${ge}`, me = `(?<!${P})(?=${P}+${je})(?:${P}*?-)??(eyJ${ge}${je})`, on = `(?:${fe})_`, M = "\\[REDACTED\\]", Ee = [{ id: "url-userinfo", needs: "@", needsUrl: true, source: `:\\/\\/((["'])[^/@\\s]*\\2(?=@)|(?:[^/@\\s"'|,;&\`]+(?=@))|[^/@\\s"'|,;&\`]*["'|,;&\`][^/@\\s]*@)@?`, confidence: "low" }, { id: "gcp-service-account", needs: "\\.iam\\.gserviceaccount\\.com", source: "\\b([a-z0-9-]{1,64}@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b", flags: "i", confidence: "low" }, { id: "loose-anthropic-key", needs: "sk-", source: "\\b(sk-ant-?[\\w-]{10,})", confidence: "low" }, { id: "http-auth-scheme", needs: ue, source: (e) => `\\b${e.authScheme}([A-Za-z0-9+/=._~-]{20,})`, flags: "i", confidence: "low" }, { id: "loose-jwt", needs: "eyJ", prefilter: /eyJ/, source: me, confidence: "low" }, { id: "sensitive-assign", needs: X, source: (e) => e.sensitiveAssign, flags: "i", confidence: "low" }, { id: "cloud-env-var", needs: on, source: (e) => e.cloudEnvVar, flags: "i", confidence: "low" }, { id: "url-userinfo-tail", needs: M, source: ":\\/\\/(\\[REDACTED\\](?!@|%40[^\\s\"'>}|,;&`)\\]@/]*(?:[\\s\"'>}|,;&`)\\]/]|$))[^\\s\"'>}|,;&`)\\]]*?(?=[\\s\"'>}|,;&`)\\]]|:\\/\\/|$))", confidence: "low" }, { id: "url-userinfo-later-at", needs: M, source: ":\\/\\/(\\[REDACTED\\]@(?:[^\\s:/?#\"'>}|,;&`)\\]]|:(?!\\/\\/)){0,256})(?=@|%40)", confidence: "low" }, { id: "url-userinfo-encoded", needs: `%40|${M}`, needsUrl: true, source: ":\\/\\/((?:\\[REDACTED\\]@)?(?:(?:[^/?#@\\s\"',;&<>|)\\]{}`[]*[\"'`<>{}[\\]][^/?#@\\s,;&|{}\"'`<>[\\]()]*(?=%40))|[^/?#@\\s\"',;&<>|)\\]}`[]+(?=%40)|(?=[^/?#@\\s\"',;&<>|)\\]}`[]*?(?:%|:[^/?#@\\s\"',;&<>|)\\]}`[]))[^/?#@\\s\"',;&<>|)\\]}`[]+(?=\\[REDACTED\\])))", confidence: "low" }, { id: "masked-value-rest", needs: M, source: `\\[REDACTED\\](${rn})`, confidence: "low" }, { id: "anthropic-signed-key-rest", needs: M, redactOnly: true, prefilter: /\[REDACTED\]\.eyJ/, source: "\\[REDACTED\\]\\.(eyJ[\\w-]+\\.[\\w-]+)", confidence: "low" }, { id: "sensitive-assign-escaped", needs: X, redactOnly: true, prefilter: sn, source: (e) => e.sensitiveAssignEscaped, flags: "i", confidence: "low" }, { id: "aws-access-token", needs: "A3T|AKIA|ASIA|ABIA|ACCA", source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b", confidence: "high" }, { id: "gcp-api-key", needs: "AIza", source: "\\b(AIza[\\w-]{35})(?![\\w-])", confidence: "high" }, { id: "google-oauth-client-secret", needs: "GOCSPX-", source: "\\bGOCSPX-[\\w-]{28}(?![\\w-])", confidence: "high" }, { id: "azure-ad-client-secret", needs: "Q~", source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`, confidence: "high" }, { id: "digitalocean-pat", needs: "dop_v1_", source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "digitalocean-access-token", needs: "doo_v1_", source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "anthropic-api-key", needs: "sk-", source: `\\b(sk[-]ant[-]api03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "anthropic-admin-api-key", needs: "sk-", source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "anthropic-oauth-token", needs: "sk-", source: `\\b(sk-ant-(?:oat|ort)\\d{2}-[\\w-]{20,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, run: "[\\w-]", confidence: "high" }, { id: "openai-api-key", needs: "sk-", source: "sk-[A-Za-z0-9_-]{8,200}T3BlbkFJ[A-Za-z0-9_-]{8,200}", confidence: "high" }, { id: "openai-legacy-api-key", needs: "sk-", source: "\\bsk-[a-zA-Z0-9]{48}(?![a-zA-Z0-9])", confidence: "high" }, { id: "huggingface-access-token", needs: "hf_", source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "supabase-secret-key", needs: "sb_secret_", source: "\\bsb_secret_[A-Za-z0-9_-]{20,}", confidence: "high" }, { id: "supabase-access-token", needs: "sbp_", source: "\\bsbp_[a-z0-9]{40,}", confidence: "high" }, { id: "github-pat", needs: "ghp_", source: "ghp_[0-9a-zA-Z]{36}", confidence: "high" }, { id: "github-fine-grained-pat", needs: "github_pat_", source: "github_pat_\\w{82}", confidence: "high" }, { id: "github-app-token", needs: "ghu_|ghs_", source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}", confidence: "high" }, { id: "github-oauth", needs: "gho_", source: "gho_[0-9a-zA-Z]{36}", confidence: "high" }, { id: "github-refresh-token", needs: "ghr_", source: "ghr_[0-9a-zA-Z]{36}", confidence: "high" }, { id: "gitlab-pat", needs: "glpat-", source: `glpat-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-deploy-token", needs: "gldt-", source: `gldt-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-runner-authentication-token", needs: "glrt-", source: `glrt-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-oauth-app-secret", needs: "gloas-", source: `gloas-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-pipeline-trigger-token", needs: "glptt-", source: `glptt-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-kubernetes-agent-token", needs: "glagent-", source: `glagent-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-incoming-mail-token", needs: "glimt-", source: `glimt-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-scim-oauth-token", needs: "glsoat-", source: `glsoat-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-ci-build-token", needs: "glcbt-", source: `glcbt-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-feed-token", needs: "glft-", source: `glft-${w}`, displayRun: _, confidence: "high" }, { id: "gitlab-feature-flag-client-token", needs: "glffct-", source: `glffct-${w}`, displayRun: _, confidence: "high" }, { id: "slack-bot-token", needs: "xox", source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*", confidence: "high" }, { id: "slack-user-token", needs: "xox", source: "xox[a-z](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}", confidence: "high" }, { id: "slack-rotation-token", needs: "xox", source: "xoxe(?:\\.xox[a-z])?-[0-9]-[A-Za-z0-9-]{28,}", confidence: "high" }, { id: "slack-app-token", needs: "xapp-", source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+", flags: "i", confidence: "high" }, { id: "slack-workflow-token", needs: "xwfp-", source: "\\bxwfp-[a-zA-Z0-9-]{20,}", confidence: "high" }, { id: "slack-webhook-url", needs: "hooks\\.slack\\.com/", source: "(?:https?://)?hooks\\.slack\\.com/(?:services|workflows|triggers)/[A-Za-z0-9+/_-]{40,}", flags: "i", confidence: "high" }, { id: "twilio-api-key", needs: "SK[0-9a-fA-F]", source: "SK[0-9a-fA-F]{32}", confidence: "high" }, { id: "sendgrid-api-token", needs: "SG\\.", source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "npm-access-token", needs: "npm_", source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "pypi-upload-token", needs: "pypi-AgEIcHlwaS5vcmc", source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}", confidence: "high" }, { id: "databricks-api-token", needs: "dapi[a-f0-9]", source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "hashicorp-tf-api-token", needs: "\\.atlasv1\\.", source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}", confidence: "high" }, { id: "pulumi-api-token", needs: "pul-", source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "postman-api-token", needs: "PMAK-", source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "grafana-api-key", needs: "eyJ", source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "grafana-cloud-api-token", needs: "glc_", source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "grafana-service-account-token", needs: "glsa_", source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "sentry-user-token", needs: "sntryu_", source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "sentry-org-token", needs: "sntrys_", source: "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}", confidence: "high" }, { id: "stripe-access-token", needs: "(?:sk|rk)_(?:test|live|prod)_", source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`, confidence: "high" }, { id: "shopify-access-token", needs: "shpat_", source: "shpat_[a-fA-F0-9]{32}", confidence: "high" }, { id: "shopify-shared-secret", needs: "shpss_", source: "shpss_[a-fA-F0-9]{32}", confidence: "high" }], Zn = 64, V = "-----", F = "BEGIN";
function he(e, n, t) {
  let s = t ? /(?:-----BEGIN[ A-Z0-9_-]{0,100}?|\[REDACTED(?:-[A-Z]{1,20})?\](?:-{1,4}BEGIN)?([ A-Z0-9_-]{0,100}?))PRIVATE KEY(?: BLOCK)?-----/gi : /-----BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi, r = t ? /(?:-----END[ A-Z0-9_-]{0,100}?|\[REDACTED(?:-[A-Z]{1,20})?\](?:-{1,4}END)?([ A-Z0-9_-]{0,100}?))PRIVATE KEY(?: BLOCK)?-----/gi : /-----END[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
  s.lastIndex = n;
  let i = ce(s, e);
  if (!i) return null;
  r.lastIndex = i.index + i[0].length + Zn;
  let o = ce(r, e);
  if (!o) return null;
  while (o[0].startsWith("[")) {
    let c = ce(r, e);
    if (!c) break;
    o = c;
  }
  return { start: i.index, end: o.index + o[0].length };
}
function ce(e, n) {
  let t = e.exec(n);
  while (t?.[1] !== void 0 && /^-|--/.test(t[1])) e.lastIndex = t.index + 1, t = e.exec(n);
  return t;
}
function Gn(e) {
  return he(e, 0, true) !== null;
}
function t3n(e) {
  let n = cn(e);
  if (n.length === 0) return e;
  let t = "", s = 0;
  for (let r of n) t += e.slice(s, r.start) + "[REDACTED]", s = r.end;
  return t + e.slice(s);
}
function gWl(e) {
  return t3n(e).replace(/(?:-----BEGIN|\[REDACTED(?:-[A-Z]{1,20})?\])[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----[\s\S]*/i, "[REDACTED]");
}
function Hn(e) {
  let n = [];
  if (!/\[REDACTED/i.test(e)) return n;
  for (let { start: t, end: s } of an(e, 0, true)) {
    let r = t;
    for (let i of e.slice(t, s).matchAll(/-----(?:BEGIN|END)[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi)) n.push({ start: r, end: t + i.index }), r = t + i.index + i[0].length;
    n.push({ start: r, end: s });
  }
  return n.filter((t) => t.end - t.start >= 10);
}
function cn(e) {
  let n = V.length, t = e.indexOf(V);
  while (t !== -1) {
    while (e.charCodeAt(t + n) === 45) t++;
    let s = 0;
    while (s < F.length && (e.charCodeAt(t + n + s) | 32) === (F.charCodeAt(s) | 32)) s++;
    if (s === F.length) break;
    t = e.indexOf(V, t + n);
  }
  return t === -1 ? [] : an(e, t, false);
}
function an(e, n, t) {
  let s = [];
  for (let r = he(e, n, t); r; r = he(e, r.end, t)) s.push(r);
  return s;
}
var pe = `(?:[\\x60'"\\s;]|\\\\[nr]|$)`, ae = "(?=[^a-zA-Z0-9_\\-+=]|$)", Ye = "(?<![a-zA-Z0-9_\\-])";
function Vn() {
  return Ee.map(({ id: e, confidence: n, source: t, flags: s = "", displayRun: r }) => {
    let i = { id: e, confidence: n }, o = s.replace("g", "") + "g";
    if (n !== "high" || typeof t !== "string") return { ...i, regexFor: B(t, o) };
    let c = ln(t);
    if (r === void 0) return { ...i, regexFor: B(Ye + c + ae, o) };
    return { ...i, prefilter: new RegExp(c, s.replace("g", "")), regexFor: B(`(?<!${r})(?=${r}+${ae})${r}*?${Ye}(${c})${ae}`, o) };
  });
}
function N(e) {
  return Ee.map((n) => {
    let t = (n.flags ?? "").replace("g", ""), s = { id: n.id, confidence: n.confidence, ...n.redactOnly === true && { redactOnly: n.redactOnly }, ...n.prefilter !== void 0 && { prefilter: n.prefilter } };
    if (n.run === void 0 || typeof n.source !== "string") return { ...s, regexFor: B(n.source, e ? t + "g" : n.flags ?? "") };
    return { ...s, prefilter: new RegExp(ln(n.source), t), regexFor: B(`(?:(?<!${n.run})|(?<=\\\\[nr]))(?=${n.run}+${pe})${n.run}*?${n.source}`, e ? t + "g" : t) };
  });
}
function B(e, n) {
  if (typeof e === "string") {
    let s = new RegExp(e, n);
    return () => s;
  }
  let t = new T((s) => new RegExp(e(z(s)), n), () => {
    return;
  });
  return (s) => t.for(s);
}
function ln(e) {
  return e.endsWith(pe) ? e.slice(0, -pe.length) : e;
}
function J(e, n) {
  if (typeof n !== "string") return "[REDACTED]";
  let t = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? n[0] : "", s = e.lastIndexOf(n);
  return `${e.slice(0, s)}${t}[REDACTED]${t}${e.slice(s + n.length)}`;
}
function Fn(e) {
  let n = e[1];
  if (typeof n !== "string") return { keep: 0, insert: "[REDACTED]" };
  let t = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? 1 : 0, s = e[0].lastIndexOf(n);
  return { keep: s + t, insert: "[REDACTED]", keepEnd: e[0].length - s - n.length + t };
}
function Q(e, n) {
  let t = Yn(e, n), s = We(e, () => n.urlKeyRules.for(e)).map(({ start: o, end: c }) => {
    let l = /^(["'])[^]*\1$/.test(e.slice(o, c)) ? 1 : 0;
    return [o + l, c - l];
  }), r = ie(e), i = Hn(e).map(({ start: o, end: c }) => [o, c]);
  return r.length === 0 && t.length === 0 && i.length === 0 ? s : un([...s, ...r, ...t, ...i]);
}
var Jn = new RegExp(rn, "y"), jn = 512;
function Yn(e, { emptyKeys: n, escapedEmptyKeys: t }) {
  let s = Xe(e, n.for(e));
  return sn.test(e) ? [...s, ...Xe(e, t.for(e))] : s;
}
function Xe(e, { assign: n, nextKey: t, valueWithWhitespace: s, skipsStrays: r }) {
  let i = [], o, c = 0, l = Jn;
  n.lastIndex = 0;
  for (let a = n.exec(e); a !== null; a = n.exec(e)) {
    let u = a[1] ?? a[2] ?? a[3], g = a.index + a[0].length, h = g - u.length;
    t.lastIndex = h;
    let x = u.length <= jn && t.test(e) ? t.lastIndex : void 0;
    if (x !== void 0 && x < g) {
      if (s.lastIndex = x, !s.test(e)) x = void 0;
    }
    if (r && o !== void 0 && a.index >= o && a.index < c && x === void 0) {
      o = void 0, n.lastIndex = c;
      continue;
    }
    if (o !== void 0 && a.index < o) {
      let f = /^(["'])[^]*\1$/.test(u), p = f && c <= h ? 1 : 0;
      l.lastIndex = g, i.push([h + p, !f && l.test(e) ? l.lastIndex : g - p]);
    }
    if (c = g, o = x, o !== void 0) n.lastIndex = h;
  }
  return i;
}
function un(e) {
  let n = e.filter(([s, r]) => r > s).sort((s, r) => s[0] - r[0]), t = [];
  for (let [s, r] of n) {
    let i = t.at(-1);
    if (i !== void 0 && s <= i[1]) i[1] = Math.max(i[1], r);
    else t.push([s, r]);
  }
  return t;
}
function K(e, n) {
  let { text: t, origin: s } = e, r = [], i = 0;
  for (let o = 0; o < t.length; ) {
    let c = s[o];
    while (i < n.length && n[i][1] <= c) i++;
    let l = n[i];
    if (c < 0 || l === void 0 || c < l[0]) {
      o++;
      continue;
    }
    let a = o;
    while (a > 0 && s[a - 1] < 0) a--;
    while (o < t.length && (s[o] < 0 || s[o] >= l[0] && s[o] < l[1])) o++;
    let u = r.at(-1);
    if (u !== void 0 && u[1] >= a) u[1] = o;
    else r.push([a, o, "[REDACTED]"]);
  }
  return G(e, r);
}
var Xn = 512, qn = 512, Qn = [{ needs: Pe, needsUrl: true }, { needs: `${V}${F}|\\[REDACTED`, flags: "i" }, { needs: X, flags: "i" }, { needs: on, flags: "i" }], et = 1e4;
function tt() {
  let e = /* @__PURE__ */ new Set(["[^\\x00-\\x7f]"]), n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
  for (let { needs: s, needsUrl: r, flags: i } of [...Ee, ...Qn]) if (r === true) t.add(s);
  else if (i?.includes("i") === true) n.add(s);
  else e.add(s);
  return { exactCase: new RegExp([...e].join("|")), anyCase: new RegExp([...n].join("|"), "i"), inUrl: new RegExp([...t].join("|"), "i") };
}
class dn {
  testRules = null;
  redactRules = null;
  displayRules = null;
  keyScans = { urlKeyRules: new T((e) => z(e).urlKeyRules), emptyKeys: new T((e) => {
    let n = z(e);
    return { assign: new RegExp(`${n.sensitiveAssign}|${n.cloudEnvVar}`, "gi"), nextKey: new RegExp(n.nextKey, "iy"), valueWithWhitespace: new RegExp(`["']|${n.authScheme}`, "iy"), skipsStrays: false };
  }), escapedEmptyKeys: new T((e) => {
    let n = z(e);
    return { assign: new RegExp(`${n.sensitiveAssign}|${n.cloudEnvVar}|${n.sensitiveAssignEscaped}`, "gi"), nextKey: new RegExp(n.nextKeyOrEscaped, "iy"), valueWithWhitespace: new RegExp(`\\\\*["']|${n.authScheme}`, "iy"), skipsStrays: true };
  }, (e) => e.roomForEscapedKeys) };
  sensitiveKeyWord = new T((e) => new RegExp(z(e).sensitiveKeyWord, "i"), () => {
    return;
  });
  needs = null;
  resultCache = /* @__PURE__ */ new Map();
  mayHoldSecret(e) {
    return this.needs ??= tt(), typeof e !== "string" || e.length > et || this.needs.exactCase.test(e) || this.needs.anyCase.test(e) || e.includes("://") && this.needs.inUrl.test(e);
  }
  scan(e) {
    this.testRules ??= N(false);
    let n = [];
    for (let t of this.testRules) if (t.confidence === "high" && t.prefilter?.test(e) !== false && t.regexFor(e).test(e)) n.push({ ruleId: t.id, label: t.id.split("-").map((s) => wt[s] ?? (0, import_chunk_7cfjrnwy.wi)(s)).join(" ") });
    if (Gn(e)) n.push({ ruleId: "private-key", label: "Private Key" });
    return n;
  }
  redactContext(e, n = false) {
    this.redactRules ??= N(true);
    let t = t3n(e);
    for (let s of this.redactRules) if (s.confidence === "low" && le(s, n, t)) t = t.replace(s.regexFor(t), J);
    return t;
  }
  redactTokens(e) {
    this.redactRules ??= N(true);
    let n = e;
    for (let t of this.redactRules) if (t.confidence === "high" && t.prefilter?.test(n) !== false) n = n.replace(t.regexFor(n), J);
    return n;
  }
  trackedByRules(e, n = false) {
    return this.trackedTokens(this.trackedContext(e, n));
  }
  trackedContext(e, n = false) {
    let t = G(Ie(e), cn(e).map(({ start: s, end: r }) => [s, r, "[REDACTED]"]));
    return this.trackedRules(t, "low", n);
  }
  redactOnlyRules(e) {
    this.redactRules ??= N(true);
    let n = e;
    for (let t of this.redactRules) if (t.redactOnly === true && le(t, true, n)) n = n.replace(t.regexFor(n), J);
    return n;
  }
  trackedTokens(e) {
    return this.trackedRules(e, "high");
  }
  trackedRules(e, n, t = false) {
    this.redactRules ??= N(true);
    let s = e;
    for (let r of this.redactRules) if (r.confidence === n && le(r, t, s.text)) {
      let i = r.regexFor(s.text);
      i.lastIndex = 0, s = Ce(s, i, Fn);
    }
    return s;
  }
  redactWithUrlRanges(e) {
    let n = Q(e, this.keyScans);
    return n.length === 0 ? this.redactTokens(this.redactContext(e, true)) : K(this.trackedByRules(e, true), n).text;
  }
  redactTracked(e) {
    return K(this.trackedByRules(e, true), Q(e, this.keyScans));
  }
  redact(e) {
    if (!this.mayHoldSecret(e)) return e;
    let n = e.length <= Xn;
    if (n) {
      let s = this.resultCache.get(e);
      if (s !== void 0) return s;
    }
    let t = this.redactWithUrlRanges(e);
    if (n) {
      if (this.resultCache.size >= qn) this.resultCache.delete(this.resultCache.keys().next().value);
      this.resultCache.set(e, t);
    }
    return t;
  }
  redactForDisplay(e) {
    this.displayRules ??= Vn();
    let n = e;
    for (let t of this.displayRules) {
      if (t.confidence !== "high" || t.prefilter?.test(n) === false) continue;
      n = n.replace(t.regexFor(n), ct);
    }
    return n;
  }
}
var y = new dn();
function S1e(e) {
  return y.scan(e);
}
var H4t = "[hidden for privacy]", fn = (0, import_chunk_t57w17k7.de)({ reporter: void 0 }, (e) => {
  e.reporter = void 0;
});
function _Wl(e) {
  fn.reporter = e;
}
function j6e(e) {
  try {
    fn.reporter?.(e);
  } catch {
  }
}
function lsa(e) {
  try {
    return y.redact(e);
  } catch (n) {
    j6e(n);
    return;
  }
}
function As(e) {
  return lsa(e) ?? H4t;
}
function R3(e) {
  return y.redactTokens(y.redactContext(e));
}
var st = /:\/\/\[REDACTED\](?=[.-])/g, qe = "[REDACTED\uE000]";
function dsa(e) {
  let n = e.replaceAll("\uE000", "\uFFFD").replace(st, `://${qe}`);
  return y.redactTokens(y.redactContext(n).replaceAll(qe, "[REDACTED]"));
}
function FLs(e) {
  return y.redactContext(e);
}
function ute(e) {
  return y.redactTokens(e);
}
var Bt = new RegExp(me), Wt = new RegExp(me, "g");
var iPt = 16384;
function x3(e, n) {
  try {
    return rt(e, n);
  } catch (t) {
    return j6e(t), H4t;
  }
}
function rt(e, n) {
  let t = Q(e, y.keyScans);
  if (t.length === 0) return En(y.redactContext(e, true), n);
  let s = y.trackedContext(e, true);
  for (let r = n + 2 * iPt; ; r *= 2) {
    if (s.text.length <= r) return K(y.trackedTokens(s), t).text;
    let i = y.trackedTokens(re(s, 0, r)), o = i.text.length - iPt;
    if (o >= n) {
      let c = (0, import_chunk_7cfjrnwy.ee)(i.text, o).length, l = K(re(i, 0, c), t);
      if (l.text.length >= n) return l.text;
    }
  }
}
function yWl(e, n) {
  return En(FLs(e), n);
}
var it = /[$\x60|;&<>()\s]/, ot = /[/.@:~*?\\]/;
function ct(e, n) {
  let t = typeof n === "string" ? n : e;
  if (it.test(t) || ot.test(t)) return e;
  return J(e, n);
}
function z8(e) {
  return y.redactForDisplay(e);
}
function yJ(e, n = As) {
  if (typeof e === "string") return n(e);
  if (Array.isArray(e)) return e.map((t) => yJ(t, n));
  if (e !== null && typeof e === "object") {
    let t = /* @__PURE__ */ Object.create(null), s = Object.entries(e), r = n === As ? usa(s.map(([i]) => i)) : void 0;
    for (let [i, [o, c]] of s.entries()) {
      let l = r ? r[i] : o;
      if (typeof c === "string") {
        if (n === As) {
          t[l] = csa(o, c);
          continue;
        }
        let a = `${o}: `, u = n(a + c);
        t[l] = u === H4t ? H4t : u.startsWith(a) ? u.slice(a.length) : n(c);
      } else t[l] = yJ(c, n);
    }
    return t;
  }
  return e;
}
function csa(e, n) {
  try {
    return at(e, n);
  } catch (t) {
    return j6e(t), H4t;
  }
}
function at(e, n) {
  let t = `${e}: `, s = t + n, r = Q(s, y.keyScans);
  if (r.length === 0) {
    let l = y.redact(s);
    if (l.startsWith(t)) return l.slice(t.length);
    let a = R3(s);
    return a.startsWith(t) ? y.redactOnlyRules(a.slice(t.length)) : y.redact(n);
  }
  let i = [];
  for (let [l, a] of r) if (a > t.length) i.push([Math.max(l, t.length), a]);
  let o = y.trackedByRules(s, true);
  if (o.text.startsWith(t)) return K(o, i).text.slice(t.length);
  let c = y.trackedByRules(s);
  return c.text.startsWith(t) ? y.redactOnlyRules(K(c, i).text.slice(t.length)) : y.redact(n);
}
function usa(e, n = As) {
  let t = e.map((i) => n(i));
  if (t.every((i, o) => i === e[o])) return t;
  let s = new Set(t.filter((i, o) => i === e[o])), r = /* @__PURE__ */ new Map();
  return t.map((i, o) => {
    if (i === e[o]) return i;
    let c = i, l = r.get(i) ?? 2;
    while (s.has(c)) c = `${i} (${l})`, l++;
    return r.set(i, l), s.add(c), c;
  });
}
function NLr(e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let [t, s] of Object.entries(e)) n[t] = y.sensitiveKeyWord.for(t).test(t) ? "[REDACTED]" : s;
  return n;
}
var YA = "[redacted URL]";
function Qe(e) {
  let n = S(e);
  if (!/%(?:40|3a|5c)/i.test(n)) return e;
  let t = /^(?:https?|wss?|ftp|file):/i.test(n);
  return n.replace(t ? /%(40|3a)/gi : /%(40|3a|5c)/gi, (s, r) => String.fromCharCode(parseInt(r, 16)));
}
function ye(e, n, t) {
  let s = n(e), r = Qe(e);
  if (s === t || r === e) return s;
  return s !== null && Qe(s) === n(r) ? s : t;
}
function FLr(e) {
  return ye(e, lt, null);
}
function lt(e) {
  try {
    let n = new URL(e);
    if (!n.host || be(e) || Ae(n) || ke(e, n) || pn(e)) return null;
    return n.username = "", n.password = "", n.search = "", n.hash = "", n.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}
var fsa = /[@:]|\/\//;
function $Ls(e) {
  let n = FLr(e);
  if (n === null) return null;
  let { protocol: t, host: s, pathname: r } = new URL(n);
  if (!fsa.test(r)) return n;
  let i = r.replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\/{2,}/g, (o) => `/${(0, import_chunk_7cfjrnwy.xd)("%2F", o.length - 1)}`);
  return `${t}//${s}${i}`;
}
function Q0o(e) {
  let n = [], t = 0;
  for (let [s, r] of un(ie(e))) n.push(e.slice(t, s), "[REDACTED]"), t = r;
  return n.push(e.slice(t)), n.join("").replace(/:\/\/[^/?#]*(@|%40)/g, (s, r) => r === "@" ? "://" : "://[REDACTED]%40");
}
function XA(e) {
  return ye(e, j, YA);
}
function j(e) {
  if (!e) return e;
  if (te(e) || hn(e) || be(e)) return YA;
  try {
    let n = new URL(e);
    if (!n.host) throw TypeError("opaque");
    if ((n.username !== "" || n.password !== "") && `${n.pathname}${n.search}${n.hash}`.includes("@") || Ae(n) || ke(e, n)) return YA;
    return n.username = "", n.password = "", n.search = "", n.hash = "", n.toString().replace(/\/$/, "");
  } catch {
    let n = S(e), t = Se(n), s = n.slice(t), r = _e(s), i = s.search(/[?#]/);
    if (r !== -1 && i !== -1 && i < r) return YA;
    let o = r === -1 ? s : s.slice(r + 1), c = o.search(/[?#]/);
    if (c !== -1 && o.includes("@", c) && (r !== -1 || !kt(o, c, t !== 0))) return YA;
    let l = (0, import_chunk_7cfjrnwy.nt)((0, import_chunk_7cfjrnwy.nt)(r === -1 ? n : n.slice(t + r + 1), "?"), "#"), a = l.lastIndexOf("@"), u = a === -1 ? l : l.slice(a + 1);
    return D(u) && !D(n) && !/^:\d+\/?$/.test(u.startsWith("[") ? u.slice(u.indexOf("]") + 1) : u.slice(u.indexOf(":"))) ? YA : u;
  }
}
var xe = /^(?:(?:file:\/\/)?[a-z]:(?:\\|\/(?!\/))|\\\\)/i;
function zm(e) {
  return ye(e, ut, YA);
}
function ut(e) {
  if (te(e) || be(e)) return YA;
  if (xe.test(e)) {
    let r = e.indexOf("?", e.startsWith("\\\\?\\") ? 4 : 0);
    return r === -1 ? e : e.slice(0, r);
  }
  if (hn(e) && !Rt(e)) return YA;
  let n;
  try {
    n = new URL(e);
  } catch {
    return Y(e, en(e) ? j(e) : e);
  }
  if (!n.host) return Y(e, n.search || n.hash || en(e) ? j(e) : e);
  if (ke(e, n)) return YA;
  let t = n.username !== "" && Re(n.protocol.slice(0, -1)), s = n.username !== "" && !/^[^:]*:\//.test(S(e));
  return Y(e, t || s || n.password || se(n.username) || Ae(n) || n.search || n.hash ? j(e) : e);
}
function D4t(e) {
  return Y(e, XA(e));
}
function G6e(e, n, t) {
  return n === "" || n === t ? e : e.split(n).join(t);
}
function WEe(e, n) {
  let t = typeof n === "string" || n === void 0 ? [n] : n;
  for (let s of t) {
    let r = dt(s), i = s && r.length > 0 ? zm(s) : "";
    for (let o of r) e = G6e(e, o, i);
  }
  return ag(e);
}
function dt(e) {
  if (!e || !mn.test(e) || zm(e) === e) return [];
  let n = [e], t = Se(e), s = e.slice(t), r = s.indexOf("/");
  for (let i of /* @__PURE__ */ new Set([s.indexOf("@"), _e(s)])) if (t !== 0 && i !== -1 && (r === -1 || i < r)) n.push(e.slice(0, t) + s.slice(i + 1));
  return n;
}
function ft(e) {
  let n = S(e), t = Se(n), s = t !== 0, r = n.indexOf("#");
  if (n.includes("?") || r !== -1 && (s || n.includes("@", r))) return true;
  let i = n.slice(t), o = _e(i);
  if (o === -1) return false;
  let c = n.slice(0, t - 3), l = /^(?:ftps?|wss?)$/i.test(c) ? i.slice(0, o).replace(/^[/\\]+/, "") : i.slice(0, o);
  return se(l) || s && (/https?$/i.test(c) || !l.includes("/") && Re(c));
}
var $Lr = /:|%3a/i;
function Ae(e) {
  return !e.hostname.startsWith("[") && /%3a/i.test(e.hostname) && `${e.pathname}${e.search}${e.hash}`.includes("@");
}
function se(e) {
  return $Lr.test(e);
}
function be(e) {
  let n = S(e), t = n.indexOf(":"), s = t === -1 ? "" : n.slice(0, t);
  if (!/^[a-z][a-z0-9+.-]*$/i.test(s) || !/(?:ssh|git\+ssh|ssh\+git|git|file)$/i.test(s) || xe.test(n)) return false;
  let r = n.slice(t + 1), i = (0, import_chunk_7cfjrnwy.nt)(r.slice(/^\/*/.exec(r)[0].length), "/"), o = i.search(/[?#]/);
  if (!(/%40/i.test(i) || o !== -1 && i.includes("@", o))) return false;
  let c = i.replace(/%([0-9a-f]{2})/gi, (a, u) => String.fromCharCode(parseInt(u, 16))), l = c.lastIndexOf("@");
  return l !== -1 && c.slice(0, l).includes(":");
}
function D(e) {
  let n = e.indexOf(":"), t = e.indexOf("/");
  return n > 0 && !e.includes("://") && (t === -1 || n < t);
}
function Y(e, n) {
  let t = (r, i) => {
    let o = S(r);
    return gt(r) || /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\//i.test(o) && i !== r && !i.toLowerCase().startsWith(o.slice(0, o.indexOf("://") + 3).toLowerCase()) || D(r) && (ht(r) || /[\t\n\r]/.test(r) || pt(r, i));
  };
  return n !== e && D(n) && !D(e) || t(e, n) || t(n, n) ? YA : n;
}
function gt(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""), t = /^[a-z+\t\n\r]*:[\t\n\r]*\/[\t\n\r]*\//i.exec(n), s = t !== null && /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\/$/i.test(t[0].replace(/[\t\n\r]/g, "")) ? t : null;
  if (!s && !D(e)) return false;
  let r = s ? /^(?:[\w.~+-]+(?::[^@/?#%\s[\]]*)?@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\])?(?::[\w~-]*)?(?:\/|$)/i : /^(?:[\w.~+-]+@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\]):/i, i = s ? n.slice(s[0].length) : e, o = s ? i.slice(Math.max(i.indexOf("/"), 0)) : "";
  return !r.test(i) || /(?:@|%40)(?:\[|%5b)/i.test(o);
}
function ht(e) {
  try {
    return new URL(e).host !== "";
  } catch {
    return false;
  }
}
function pt(e, n) {
  let t = S(e), s = t.indexOf(":"), r = t.slice(0, s);
  if (s <= 0 || /[/?#]/.test(r) || e.includes("://")) return false;
  let i = r.lastIndexOf("@"), o = t.indexOf("@["), c = o !== -1 ? o + 1 : t.startsWith("[") ? 0 : -1, l = r.slice(i + 1);
  if (c !== -1) {
    let a = t.indexOf("]", c);
    if (c !== i + 1 || t[a + 1] !== ":" || /[/?#@\\]/.test(t.slice(c + 1, a))) return true;
    l = t.slice(c, a + 1);
  }
  return n !== e && n !== YA && !n.startsWith(`${l}:`);
}
function en(e) {
  return ft(e) || mt(e);
}
function mt(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""), t = n.indexOf("://");
  if (t !== -1 && /[?#]/.test(n)) return true;
  let s = (0, import_chunk_7cfjrnwy.nt)(t === -1 ? n : n.slice(t + 3), "/"), r = s.lastIndexOf("@");
  return r !== -1 && (se(s.slice(0, r)) || t !== -1 && Re(n.slice(0, t)));
}
function Re(e) {
  return !/^(?:ssh|git\+ssh|ssh\+git)$/i.test(e);
}
function S(e) {
  return e.replace(/^[\u0000-\u0020]+/, "").replace(/[\t\n\r]/g, "");
}
var ne = "(^|[^a-z0-9+.-]|%[0-9a-f]{2})", Et = "https?|wss?|ftps?", gn = "ssh\\+git|git\\+ssh|ssh|git", yt = new RegExp(`[a-z](?:[a-z0-9+.-]{1,31}:\\/+|:\\/\\/)|(?:https?|ftps?):(?!\\/)|${ne}(?:wss?|file):(?!\\/)|${ne}(?:${gn}):(?!\\/)(?=[^@/?#\\s]*?(?::|%3a))`, "i");
function te(e, { forDestination: n = false } = {}) {
  let t = S(e).replace(/\\/g, "/"), s = t.search(/[?#]/), r = s === -1 ? t : t.slice(0, s), i = (n ? /^[a-z][a-z0-9+.-]*:\/*/i.exec(r) : null) ?? /:\/+/.exec(r);
  if (!i) return false;
  let o = i.index + i[0].length, c = (n ? yt : /[a-z][a-z0-9+.-]{1,31}:\/+/i).exec(r.slice(o)), l = o + (c?.index ?? 0) + (c?.[0].length ?? 0);
  return c !== null && (t.includes("@", l) || /%40/i.test((0, import_chunk_7cfjrnwy.nt)(t.slice(l), "/")));
}
function hn(e) {
  let n = S(e);
  if (xe.test(n) || /^file:/i.test(n)) return false;
  return pn(e);
}
function pn(e) {
  let n = S(e), t = n.search(/[?#]/), r = (t === -1 ? n : n.slice(0, t)).indexOf("\\");
  return r !== -1 && n.includes("@", r);
}
function xt(e) {
  let n = S(e), t = /(?:ssh|git\+ssh|ssh\+git|git):\/\//i.exec(n);
  if (!t) return false;
  let s = n.slice(t.index + t[0].length).replace(/%40/gi, "@").replace(/%5b/gi, "["), r = s.search(/[/?#]/);
  return r !== -1 && s.includes("@[", r);
}
function At(e, n) {
  if (!/^(?:ssh|git|git\+ssh|ssh\+git):$/i.test(n.protocol)) return false;
  let t = $ge(S(e))?.host;
  return t !== void 0 && t.toLowerCase() !== e3n(n.hostname).toLowerCase();
}
function ke(e, n) {
  return te(e, { forDestination: true }) || te(n.href, { forDestination: true }) || xt(e) || At(e, n) || n.protocol === "file:" && bt(e);
}
function bt(e) {
  let n = S(e), t = n.search(/[?#]/), r = (t === -1 ? n : n.slice(0, t)).indexOf("\\"), i = n.lastIndexOf("@");
  return r !== -1 && i > r && /:|%3a/i.test(n.slice(r, i));
}
function Rt(e) {
  return /^[\w .+~@\\/-]*$/.test(e) && !/\\(?:[^A-Za-z0-9@]|$)| $|\.[_~+]*\.|(?:^|\/)[_~+]*\.[_~+]*$/.test(e) && !/(?:^|[^\\])@|@[^\\/ ]*(?:[/ ]|$)/.test(e);
}
function Se(e) {
  let n = e.indexOf("://");
  return n !== -1 && /^[a-z][a-z0-9+.-]*$/i.test(e.slice(0, n)) ? n + 3 : 0;
}
function _e(e) {
  let n = e.indexOf("@");
  if (n === -1) return -1;
  let t = e.search(/[?#]/);
  if (t !== -1 && t < n && e.lastIndexOf("/", t) !== -1) return -1;
  let s = e.indexOf("/", n);
  return e.lastIndexOf("@", s === -1 ? e.length : s);
}
function kt(e, n, t) {
  let s = e.indexOf("/");
  if (s <= 0 || s > n) return false;
  let r = e.slice(0, s).replace(/^\[[^\]]*\]/, "");
  return !se(t ? r.replace(/:\d+$/, "") : r);
}
var St = /[a-z][a-z0-9+.-]{0,31}:\/\/[^\s'"`<>]+/gi, mn = /[\s'"`<>]/, SWl = "whitespace, quotes, backticks or angle brackets";
function bWl(e) {
  return /^https?:\/\//i.test(e) && !mn.test(e);
}
var _t = /(^|[\s'"`<>])([^\s'"`<>]*(?:@|%40)[^\s'"`<>]*)/gi, Tt = new RegExp(`${ne}(?:${Et}):(?!\\/\\/)|${ne}(?:${gn}):(?!\\/\\/)`, "gi");
function $t(e) {
  let n = e.toLowerCase(), t = Math.max(n.lastIndexOf("@"), n.lastIndexOf("%40"));
  for (let s of e.matchAll(Tt)) {
    let r = s.index + s[0].length;
    if (t < r) return -1;
    let i = s.index + (s[1] ?? s[2] ?? "").length;
    if (s[2] === void 0) return i;
    let o = n.indexOf(":", r), c = Math.min(o === -1 ? t : o, t);
    if (o !== -1 && o < t || n.slice(r, c).includes("%3a")) return i;
  }
  return -1;
}
function ag(e) {
  if (!e) return e;
  return e.replace(St, (n) => zm(n)).replace(_t, (n, t, s) => {
    let r = $t(s);
    return r === -1 ? t + s : t + s.slice(0, r) + zm(s.slice(r));
  });
}
function le(e, n, t) {
  return (n || e.redactOnly !== true) && (e.prefilter === void 0 || e.prefilter.test(t));
}
function En(e, n) {
  for (let t = n + 2 * iPt; ; t *= 2) {
    if (e.length <= t) return ute(e);
    let s = ute(e.slice(0, t)), r = s.length - iPt;
    if (r >= n) return (0, import_chunk_7cfjrnwy.ee)(s, r);
  }
}
var wt = { aws: "AWS", gcp: "GCP", api: "API", pat: "PAT", ad: "AD", tf: "TF", oauth: "OAuth", npm: "NPM", pypi: "PyPI", jwt: "JWT", ci: "CI", scim: "SCIM", github: "GitHub", gitlab: "GitLab", openai: "OpenAI", digitalocean: "DigitalOcean", huggingface: "HuggingFace", hashicorp: "HashiCorp", sendgrid: "SendGrid" };
