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
var chunk_tnmn1726_exports = {};
__export(chunk_tnmn1726_exports, {
  Bon: () => Bon,
  nfo: () => nfo,
  ope: () => ope,
  tfo: () => tfo
});
module.exports = __toCommonJS(chunk_tnmn1726_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
class g extends Error {
  kind;
  constructor(t) {
    super();
    this.kind = t;
  }
}
var C = [[48, 57]], S = [[48, 57], [65, 90], [95, 95], [97, 122]], T = [[9, 13], [32, 32], [160, 160], [5760, 5760], [8192, 8202], [8232, 8233], [8239, 8239], [8287, 8287], [12288, 12288], [65279, 65279]], M = { d: C, D: R(C), w: S, W: R(S), s: T, S: R(T) }, D = R([[10, 10], [13, 13], [8232, 8233]]), B = /^[ -/:-@[-`{-~]$/, v = /^\{(\d+)(?:(,)(\d*))?\}/, G = /^([A-Za-z_$][\w$]*)>/, K = /\((?!\?)|\(\?<(?![=!])/, X = /\(\?<(?![=!])/, j = 100, F = 48, q = "^$\\.*+?()[]{}|", z = [[65, 90], [97, 122]];
function O(t, e) {
  let n = 0, r = t.length;
  while (n < r) {
    let o = n + r >> 1;
    if (e > t[o][1]) n = o + 1;
    else r = o;
  }
  return n < t.length && e >= t[n][0];
}
function R(t) {
  let e = [], n = 0;
  for (let [r, o] of t) {
    if (r > n) e.push([n, r - 1]);
    n = o + 1;
  }
  if (n <= 65535) e.push([n, 65535]);
  return e;
}
function U(t) {
  let e = [];
  for (let [n, r] of t.toSorted((o, i) => o[0] - i[0])) {
    let o = e.at(-1);
    if (o !== void 0 && n <= o[1] + 1) o[1] = Math.max(o[1], r);
    else e.push([n, r]);
  }
  return e;
}
function N(t, e, n) {
  let r = [[t, e]];
  if (!n) return r;
  if (e > 127) throw new g("flags_group");
  for (let [o, i] of z) if (t <= i && e >= o) r.push([Math.max(t, o) ^ 32, Math.min(e, i) ^ 32]);
  return r;
}
function V(t) {
  let e = 0, n = 0, r = false, o = /* @__PURE__ */ new Set();
  function i(s) {
    if (!t.startsWith(s, e)) return false;
    return e += s.length, true;
  }
  function m() {
    if (e >= t.length) throw new g("other");
    return t.charCodeAt(e++);
  }
  function c() {
    let s = [p()];
    while (i("|")) s.push(p());
    return { type: "either", options: s };
  }
  function p() {
    let s = [];
    while (e < t.length && t[e] !== "|" && t[e] !== ")") s.push(h());
    return { type: "sequence", items: s };
  }
  function h() {
    if (i("^")) return { type: "start" };
    if (i("$")) return { type: "end" };
    if (i("\\b")) return { type: "boundary" };
    if (i("\\B")) return { type: "notBoundary" };
    let s = _(), f = 0, a = 1 / 0;
    if (i("+")) f = 1;
    else if (i("?")) a = 1;
    else if (!i("*")) {
      let d = t[e] === "{" ? v.exec(t.slice(e)) : null;
      if (d === null) return s;
      if (e += d[0].length, f = Number(d[1]), d[2] === void 0) a = f;
      else if (d[3] !== "") a = Number(d[3]);
      if (a < f) throw new g("other");
    }
    if (s.type === "look" && s.isBehind) throw new g("other");
    return i("?"), { type: "repeat", item: s, least: f, most: a };
  }
  function _() {
    if (i("(")) return A();
    if (i(".")) return { type: "set", set: D };
    if (i("[")) return { type: "set", set: y() };
    if (i("\\")) {
      let f = w();
      return typeof f === "number" ? { type: "unit", unit: f } : { type: "set", set: f };
    }
    if (q.includes(t[e] ?? "")) throw new g("legacy_grammar");
    let s = m();
    return r ? { type: "set", set: U(N(s, s, r)) } : { type: "unit", unit: s };
  }
  function A() {
    if (++n > j) throw new g("too_large");
    let s = r, f, a = false;
    if (i("?=")) f = false;
    else if (i("?!")) f = true;
    else if (i("?<=")) f = false, a = true;
    else if (i("?<!")) f = true, a = true;
    else if (i("?<")) {
      let u = G.exec(t.slice(e))?.[1];
      if (u === void 0 || o.has(u)) throw new g("other");
      o.add(u), e += u.length + 1;
    } else if (i("?i:")) r = true;
    else if (t[e] === "?" && !i("?:")) throw new g("flags_group");
    let d = c();
    if (!i(")")) throw new g("other");
    return n--, r = s, f === void 0 ? d : { type: "look", item: d, isNegative: f, isBehind: a };
  }
  function w(s = false) {
    let f = m(), a = String.fromCharCode(f);
    if (Object.hasOwn(M, a)) return M[a];
    if (!B.test(a)) {
      let d = a === "k" ? X : K, u = !s && /[1-9k]/.test(a) && d.test(t);
      throw new g(u ? "back_reference" : "escape");
    }
    return f;
  }
  function y() {
    let s = i("^"), f = [];
    while (!i("]")) {
      let a = i("\\") ? w(true) : m(), d = t[e] === "-" && t[e + 1] !== "]";
      if (typeof a !== "number") {
        if (d) throw new g("legacy_grammar");
        f.push(...a);
        continue;
      }
      if (!d) {
        f.push(...N(a, a, r));
        continue;
      }
      e++;
      let u = i("\\") ? w(true) : m();
      if (typeof u !== "number") throw new g("legacy_grammar");
      if (u < a) throw new g("other");
      f.push(...N(a, u, r));
    }
    return s ? R(U(f)) : U(f);
  }
  let b = c();
  if (e < t.length) throw new g("other");
  return b;
}
var l = { match: 0, unit: 1, set: 2, jump: 3, split: 4, start: 5, end: 6, boundary: 7, notBoundary: 8, look: 9 };
function L(t) {
  if (--t.left < 0) throw new g("too_large");
}
function P(t) {
  return { room: t, ops: [], to: [], other: [], sets: [] };
}
function x(t, e, n = 0, r) {
  return L(t.room), t.to.push(n), t.other.push(0), t.sets.push(r), t.ops.push(e) - 1;
}
function E(t, e, n, r) {
  L(e.room);
  let { ops: o, to: i, other: m } = e;
  switch (t.type) {
    case "unit":
      x(e, l.unit, t.unit);
      return;
    case "set":
      x(e, l.set, 0, t.set);
      return;
    case "start":
    case "end":
    case "boundary":
    case "notBoundary":
      x(e, l[t.type]);
      return;
    case "look": {
      let c = n.indexOf.get(t);
      if (c === void 0) {
        let p = P(e.room);
        E(t.item, p, n, !t.isBehind), x(p, l.match);
        let { isNegative: h, isBehind: _ } = t;
        c = n.list.push({ places: p, isNegative: h, isBehind: _ }) - 1, n.indexOf.set(t, c);
      }
      x(e, l.look, c);
      return;
    }
    case "sequence":
      for (let c of r ? t.items.toReversed() : t.items) E(c, e, n, r);
      return;
    case "either": {
      let c = [];
      for (let p of t.options.slice(0, -1)) {
        let h = x(e, l.split, o.length + 1);
        E(p, e, n, r), c.push(x(e, l.jump)), m[h] = o.length;
      }
      E(t.options.at(-1), e, n, r);
      for (let p of c) i[p] = o.length;
      return;
    }
    case "repeat": {
      let c = o.length;
      for (let h = 0; h < t.least; h++) c = o.length, E(t.item, e, n, r);
      if (t.most === 1 / 0) {
        if (t.least > 0) {
          let _ = x(e, l.split, c);
          m[_] = o.length;
          return;
        }
        let h = x(e, l.split, o.length + 1);
        E(t.item, e, n, r), x(e, l.jump, h), m[h] = o.length;
        return;
      }
      let p = [];
      for (let h = t.least; h < t.most; h++) p.push(x(e, l.split, o.length + 1)), E(t.item, e, n, r);
      for (let h of p) m[h] = o.length;
    }
  }
}
function k({ ops: t, to: e, other: n, sets: r }, o, i, m, c = false) {
  let p = new Int32Array(t.length).fill(-1), h = new Int32Array(t.length), _ = new Int32Array(t.length), A = 0, w = 0, y = c ? o.length : 0;
  function b(s) {
    if (p[s] !== y) p[s] = y, h[A++] = s;
  }
  for (; ; ) {
    while (w > 0) b(_[--w]);
    b(0);
    let s = y > 0 ? o.charCodeAt(y - 1) : -1, f = y < o.length ? o.charCodeAt(y) : -1, a = c ? s : f, d = O(S, s) !== O(S, f);
    while (A > 0) {
      let u = h[--A];
      switch (t[u]) {
        case l.match:
          if (m === void 0) return true;
          m[y] = 1;
          break;
        case l.unit:
          if (a === e[u]) _[w++] = u + 1;
          break;
        case l.set:
          if (O(r[u], a)) _[w++] = u + 1;
          break;
        case l.split:
          b(n[u]), b(e[u]);
          break;
        case l.jump:
          b(e[u]);
          break;
        case l.start:
          if (s < 0) b(u + 1);
          break;
        case l.end:
          if (f < 0) b(u + 1);
          break;
        case l.boundary:
        case l.notBoundary:
          if (d === (t[u] === l.boundary)) b(u + 1);
          break;
        default:
          if (i[e[u]][y] === 1) b(u + 1);
      }
    }
    if (a < 0) return false;
    y += c ? -1 : 1;
  }
}
function W(t, e) {
  let n = P(e), r = { list: [], indexOf: /* @__PURE__ */ new Map() };
  return E(t, n, r, false), x(n, l.match), (o) => {
    let i = [];
    for (let m of r.list) {
      let c = new Uint8Array(o.length + 1);
      k(m.places, o, i, c, !m.isBehind), i.push(m.isNegative ? c.map((p) => 1 - p) : c);
    }
    return k(n, o, i);
  };
}
function Z(t) {
  try {
    let e = F * (t.length + 1), n = { left: e };
    return { test: W(V(t), n), size: e - n.left };
  } catch (e) {
    if (e instanceof g) return e.kind;
    throw e;
  }
}
function H(t) {
  let e = Z(t);
  return typeof e === "object" ? e : void 0;
}
var Bon = 1024, tfo = 16384, J = tfo, I = 512, Q = 6, tt = 2048;
class ope extends Error {
}
function et(t) {
  let e = t.length > J ? void 0 : H(t);
  if (e !== void 0) return e;
  if (t.length > tt) return "not_read";
  try {
    return new RegExp(t), "not_read";
  } catch {
    return "invalid";
  }
}
function nt(t, { size: e }) {
  let n = Q * (t.length + 1) * (I + 1);
  return Math.min(I, Math.floor(n / e) - 1);
}
function nfo(t) {
  if (!(0, import_chunk_f9x2f6cx.Y)()) return new RegExp(t);
  let e = et(t);
  if (e === "invalid") throw SyntaxError("invalid hook matcher");
  if (typeof e === "string") throw new ope("This hook's matcher cannot be tested in a cloud session: it has to be rewritten.");
  let n = nt(t, e);
  return { test(r) {
    if (r.length > n) throw new ope(`The name that this hook's matcher is tested against (for a tool call, the tool's name) has over ${n} characters, the most that a cloud session tests this matcher against.`);
    return e.test(r);
  } };
}
