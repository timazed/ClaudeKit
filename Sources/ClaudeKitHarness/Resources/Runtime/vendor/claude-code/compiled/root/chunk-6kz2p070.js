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
var chunk_6kz2p070_exports = {};
__export(chunk_6kz2p070_exports, {
  b9r: () => b9r,
  mrr: () => mrr
});
module.exports = __toCommonJS(chunk_6kz2p070_exports);
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
class L {
  #t = [];
  #e = [];
  #n = new Int32Array(0);
  #r = new Uint16Array(0);
  #s = new Uint16Array(0);
  #o = new Int32Array(0);
  #a = new Int32Array(64);
  #c = new Int32Array(64);
  #i = 0;
  reset(t) {
    let n = t.length;
    this.#t = t, this.#e = Array(n).fill(""), this.#n = new Int32Array(n), this.#r = new Uint16Array(n), this.#s = new Uint16Array(n), this.#o = new Int32Array(n), this.#i = 0;
  }
  index(t, n) {
    for (let s = t; s < n; s++) {
      let o = this.#t[s], e = o.toLowerCase();
      this.#e[s] = e;
      let i = e.length;
      this.#r[s] = i;
      let l = 0, r = 0, a = 0;
      for (let p = 0; p < i; p++) {
        let m = e.charCodeAt(p);
        if (m >= 97 && m <= 122) l |= 1 << m - 97, a |= 1 << m - 97;
        else if ((m === 47 || m === 92) && p < i - 1) r = p + 1, a = 0;
      }
      this.#n[s] = l, this.#s[s] = i === o.length ? r : 0, this.#o[s] = a;
    }
  }
  publish(t) {
    this.#i = t;
  }
  search(t, n) {
    let s = t !== t.toLowerCase(), o = Math.min(t.length, 64), e = [], i = 0;
    for (let c = 0; c < o; c++) {
      let u = t.charAt(c);
      e.push(u);
      let h = u.charCodeAt(0);
      if (h >= 97 && h <= 122) i |= 1 << h - 97;
    }
    let l = o * 24 + 8 + 32, r = [], a = -1 / 0, p = this.#t, m = this.#e, v = this.#n, R = this.#r, x = this.#s, B = this.#o, z = this.#i, w = this.#a, O = this.#c;
    t: for (let c = 0; c < z; c++) {
      if ((v[c] & i) !== i) continue;
      let u = s ? p[c] : m[c], h = u.indexOf(e[0]);
      if (h === -1) continue;
      w[0] = h;
      let A = 0, C = 0, S = h;
      for (let f = 1; f < o; f++) {
        if (h = u.indexOf(e[f], S + 1), h === -1) continue t;
        w[f] = h;
        let g = h - S - 1;
        if (g === 0) C += 4;
        else A += 3 + g * 1;
        S = h;
      }
      let b = x[c], y = A > 0 && w[0] < b && (B[c] & i) === i ? M(u, e, b, O) : -1 / 0;
      if (r.length === n && l + Math.max(C - A, y) <= a) continue;
      let E = p[c], _ = R[c], d = C - A + U(E, w, o), I = 0;
      if (y !== -1 / 0) {
        let f = y + U(E, O, o);
        if (f >= d) d = f, I = b;
      }
      if (d += o * 16 + Math.max(0, 32 - (_ >> 2)), r.length < n) {
        if (r.push({ pathIndex: c, fuzzScore: d, scanFrom: I }), r.length === n) r.sort((f, g) => f.fuzzScore - g.fuzzScore), a = r[0].fuzzScore;
      } else if (d > a) {
        let f = 0, g = r.length;
        while (f < g) {
          let N = f + g >> 1;
          if (r[N].fuzzScore < d) f = N + 1;
          else g = N;
        }
        r.splice(f, 0, { pathIndex: c, fuzzScore: d, scanFrom: I }), r.shift(), a = r[0].fuzzScore;
      }
    }
    r.sort((c, u) => u.fuzzScore - c.fuzzScore);
    let P = r.length, T = [];
    for (let c = 0; c < P; c++) {
      let u = r[c].pathIndex, h = p[u], A = m[u], C = s ? h : A, S = [], b = r[c].scanFrom;
      for (let _ = 0; _ < o; _++) {
        let d = C.indexOf(e[_], b);
        S.push(d), b = d + 1;
      }
      if (!s && A.length !== h.length) j(h, S);
      let y = c / P, E = h.includes("test") ? Math.min(y * 1.05, 1) : y;
      T.push({ path: h, score: E, positions: S });
    }
    return T;
  }
}
function M(t, n, s, o) {
  let e = 0, i = s - 1;
  for (let l = 0; l < n.length; l++) {
    let r = t.indexOf(n[l], i + 1);
    if (r === -1) return -1 / 0;
    o[l] = r;
    let a = r - i - 1;
    if (l > 0) e += a === 0 ? 4 : -(3 + a * 1);
    i = r;
  }
  return e;
}
function U(t, n, s) {
  let o = 0;
  for (let e = 0; e < s; e++) o += G(t, n[e]);
  return o;
}
function G(t, n) {
  if (n === 0) return 8;
  let s = t.charCodeAt(n - 1);
  if (Y(s)) return 8;
  if (F(s) && H(t.charCodeAt(n))) return 6;
  return 0;
}
function Y(t) {
  return t === 47 || t === 92 || t === 45 || t === 95 || t === 46 || t === 32;
}
function F(t) {
  return t >= 97 && t <= 122;
}
function H(t) {
  return t >= 65 && t <= 90;
}
function j(t, n) {
  let s = 0, o = 0, e = 0;
  while (e < n.length && s < t.length) {
    let i = t.codePointAt(s), l = i > 65535 ? 2 : 1, r = String.fromCodePoint(i).toLowerCase().length;
    while (e < n.length && n[e] < o + r) n[e] = s, e++;
    s += l, o += r;
  }
}
var X = 100, mrr = 4;
class b9r {
  table = new L();
  topLevelCache = null;
  buildGen = 0;
  loadFromFileList(t) {
    let n = /* @__PURE__ */ new Set(), s = [];
    for (let o of t) if (o.length > 0 && !n.has(o)) n.add(o), s.push(o);
    this.buildIndex(s);
  }
  loadFromFileListAsync(t) {
    let n = () => {
    }, s = new Promise((e) => {
      n = e;
    }), o = this.buildAsync(t, n);
    return { queryable: s, done: o };
  }
  async buildAsync(t, n) {
    let s = ++this.buildGen, o = /* @__PURE__ */ new Set(), e = [], i = performance.now();
    for (let r = 0; r < t.length; r++) {
      let a = t[r];
      if (a.length > 0 && !o.has(a)) o.add(a), e.push(a);
      if ((r & 255) === 255 && performance.now() - i > mrr) {
        if (await (0, import_chunk_ayyyz8kh.Kd)(), this.buildGen !== s) return n(), false;
        i = performance.now();
      }
    }
    this.reset(e), i = performance.now();
    let l = true;
    for (let r = 0; r < e.length; r += 256) {
      let a = r + 256;
      if (this.table.index(r, Math.min(a, e.length)), a <= e.length && performance.now() - i > mrr) {
        if (this.table.publish(a), l) n(), l = false;
        if (await (0, import_chunk_ayyyz8kh.Kd)(), this.buildGen !== s) return false;
        i = performance.now();
      }
    }
    return this.table.publish(e.length), n(), true;
  }
  buildIndex(t) {
    this.buildGen++, this.reset(t), this.table.index(0, t.length), this.table.publish(t.length);
  }
  reset(t) {
    this.table.reset(t), this.topLevelCache = k(t, X);
  }
  search(t, n) {
    if (n <= 0) return [];
    if (t.length === 0) {
      if (this.topLevelCache) return this.topLevelCache.slice(0, n).map(({ path: s, score: o }) => ({ path: s, score: o, positions: [] }));
      return [];
    }
    return this.table.search(t, n);
  }
}
function k(t, n) {
  let s = /* @__PURE__ */ new Set();
  for (let e of t) {
    let i = e.length;
    for (let r = 0; r < e.length; r++) {
      let a = e.charCodeAt(r);
      if (a === 47 || a === 92) {
        i = r;
        break;
      }
    }
    let l = e.slice(0, i);
    if (l.length > 0) {
      if (s.add(l), s.size >= n) break;
    }
  }
  let o = Array.from(s);
  return o.sort((e, i) => {
    let l = e.length - i.length;
    if (l !== 0) return l;
    return e < i ? -1 : e > i ? 1 : 0;
  }), o.map((e) => ({ path: e, score: 0, positions: [] }));
}
