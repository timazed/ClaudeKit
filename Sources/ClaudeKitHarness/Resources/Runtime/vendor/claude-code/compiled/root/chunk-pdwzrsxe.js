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
var chunk_pdwzrsxe_exports = {};
__export(chunk_pdwzrsxe_exports, {
  Aqo: () => Aqo,
  KHt: () => KHt,
  Rqo: () => Rqo,
  ogt: () => ogt
});
module.exports = __toCommonJS(chunk_pdwzrsxe_exports);
class D {
  threshold;
  ignoreLocation;
  pattern;
  pieces = [];
  row;
  constructor(r, o, p) {
    this.threshold = o;
    this.ignoreLocation = p;
    let i = r.toLowerCase();
    this.pattern = i, this.row = new Int32Array(p ? 0 : i.length + Math.ceil(o * 100) + 2);
    for (let t = 0; t < i.length; t += 32) {
      let s = Math.max(0, Math.min(t, i.length - 32)), u = i.slice(s, s + 32), e = { text: u, offset: s, ascii: new Int32Array(128), other: /* @__PURE__ */ new Map() };
      for (let l = 0; l < u.length; l++) {
        let n = u.charCodeAt(l), a = k(e, n) | 1 << l;
        if (n < 128) e.ascii[n] = a;
        else e.other.set(n, a);
      }
      this.pieces.push(e);
    }
  }
  grade(r) {
    let o = r.toLowerCase();
    if (o === this.pattern) return 0;
    let p = 0, i = false;
    for (let t of this.pieces) {
      let s = 1e-3;
      if (!this.ignoreLocation) s = I(t, o, this.threshold, this.row);
      else if (!o.includes(t.text)) {
        let u = x(t, o, 0, o.length, 1);
        s = u <= this.threshold && u < 1 ? u : -1;
      }
      i ||= s > 0, p += Math.abs(s);
    }
    return i ? p / this.pieces.length : -1;
  }
}
function k(r, o) {
  return o < 128 ? r.ascii[o] : r.other.get(o) ?? 0;
}
function x(r, o, p, i, t) {
  let s = r.text.length, u = s - 1, e = -1, l = 0, n = s, a = s;
  for (let d = p; d < i && a > t; d++) {
    let S = k(r, o.charCodeAt(d)), m = (S & e) + e ^ e | S | l, g = l | ~(m | e), c = e & m;
    if (n += (g >>> u & 1) - (c >>> u & 1), n < a) a = n;
    l = g << 1 & m, e = c << 1 | ~(g << 1 | m);
  }
  return a / s;
}
function I(r, o, p, i) {
  let t = r.text.length, s = Math.min(r.offset, o.length), u = Math.ceil(p * 100) + 1, e = Math.max(0, s - u), l = Math.min(s + u + t, o.length);
  if (x(r, o, e, l, 0) > p) return -1;
  let n = 1 << t - 1, a = p, d = 1, S = false;
  for (let m = 0; m < t && m / t <= a; m++) {
    let g = m / t, c = Math.floor((a - g) * 100) + 1;
    while (g + c / 100 > a) c--;
    let y = m === 0 ? 0 : -1, h = Math.max(0, s - c), b = Math.min(s + c + t, o.length), R = i[b], f = (1 << m) - 1 << t - m;
    i[b] = f;
    while (b > h) {
      b--;
      let K = i[b];
      if (f = (f >>> 1 | n) & k(r, o.charCodeAt(b)) | ((K | R) >>> 1 | n | R) & y, i[b] = f, R = K, f & 1) {
        let C = Math.abs(b - s);
        if (d = g + C / 100, C <= c) S = true, a = d, c = C, h = Math.max(0, s - C - 1);
        if (b <= s) break;
      }
    }
  }
  return d = Math.max(1e-3, d), S ? d : -d;
}
class P {
  #t;
  #e;
  constructor(r) {
    this.#e = new Float64Array(r.texts.length), this.#t = r;
  }
  search(r, o, p) {
    let { owners: i, texts: t, weights: s } = this.#t, u = new D(r, o, p), e = [], l = -1;
    for (let n = 0; n < t.length; n++) {
      let a = t[n], d = u.grade(a);
      if (d < 0) continue;
      let S = i[n];
      if (S !== l) l = S, e.push({ owner: S, score: 1 });
      let m = this.#e[n];
      if (m === 0) {
        let g = 0;
        for (let y = 0; y < a.length; ) {
          let h = a.indexOf(" ", y);
          if (h !== y) g++;
          y = h < 0 ? a.length : h + 1;
        }
        let c = Math.round(1 / Math.sqrt(g) * 1e3) / 1e3;
        m = this.#e[n] = s[n] * c;
      }
      e.at(-1).score *= (d || Number.EPSILON) ** m;
    }
    return e.sort((n, a) => n.score - a.score);
  }
}
class KHt {
  items;
  options;
  index;
  constructor(r, o) {
    this.items = r;
    this.options = o;
    let p = o.keys.map((t) => typeof t === "string" ? { path: t.split("."), weight: 1 } : { path: t.name.split("."), weight: t.weight }), i = { owners: [], texts: [], weights: [] };
    for (let t = 0; t < r.length; t++) for (let { path: s, weight: u } of p) {
      let e = r[t];
      for (let l of s) e = typeof e === "object" && e !== null ? Reflect.get(e, l) : void 0;
      if (typeof e === "number" || typeof e === "boolean") e = Object.is(e, -0) ? "-0" : String(e);
      T(i, e, t, u);
    }
    this.index = new P(i);
  }
  search(r, { limit: o } = {}) {
    let { threshold: p, ignoreLocation: i = false } = this.options;
    return this.index.search(r, p, i).slice(0, o).map(({ owner: t, score: s }) => ({ item: this.items[t], score: s }));
  }
}
function T(r, o, p, i) {
  if (Array.isArray(o)) for (let t = o.length - 1; t >= 0; t--) T(r, o[t], p, i);
  else if (typeof o === "string" && o.trim() !== "") r.owners.push(p), r.texts.push(o), r.weights.push(i);
}
var Aqo = /[:_-]/g, v = 10;
class Rqo {
  items;
  fuse;
  lastSearch = null;
  constructor(r) {
    this.items = r.map((o) => {
      let { name: p, displayName: i } = o, t = p.split(Aqo).filter(Boolean), s = i !== p ? i.split(Aqo).filter(Boolean) : [], u = /* @__PURE__ */ new Set();
      for (let e of (o.description ?? "").toLowerCase().split(/\s+/)) if (/[^a-z0-9]/.test(e)) {
        u.add(e.replace(/[^a-z0-9]/g, ""));
        for (let l of e.split(/[^a-z0-9]+/)) u.add(l);
      } else u.add(e);
      return u.delete(""), { partKey: t.length > 1 ? t : void 0, displayPartKey: s.length > 1 ? s : void 0, commandName: p, displayName: i, candidate: o, aliasKey: o.aliases, descriptionWords: [...u].sort() };
    }), this.fuse = new KHt(this.items, { threshold: 0.3, keys: [{ name: "commandName", weight: 3 }, { name: "displayName", weight: 2 }, { name: "partKey", weight: 2 }, { name: "aliasKey", weight: 2 }, { name: "displayPartKey", weight: 1 }] });
  }
  search(r, o) {
    let { getScoreBoost: p, filter: i } = o ?? {}, t = r.trim().toLowerCase(), s = this.lastSearch?.query === t ? this.lastSearch.rows : void 0;
    if (!s) {
      s = this.fuse.search(t).map((l) => ({ item: l.item, bucket: Math.floor(l.score * 10), descriptionHits: 0 }));
      let e = t.replace(/[^a-z0-9]/g, "");
      if (e !== "") {
        let l = new Set(s.map((n) => n.item));
        for (let n of this.items) {
          if (l.has(n)) continue;
          let a = n.descriptionWords, d = 0, S = a.length;
          while (d < S) {
            let g = d + S >>> 1, c = a[g];
            if (c !== void 0 && c < e) d = g + 1;
            else S = g;
          }
          let m = 0;
          while (a[d + m]?.startsWith(e)) m++;
          if (m > 0) s.push({ item: n, bucket: v, descriptionHits: m });
        }
      }
      this.lastSearch = { query: t, rows: s };
    }
    if (i) s = s.filter((e) => i(e.item.candidate));
    let u = s.map((e) => {
      let l = e.item.commandName.toLowerCase(), n = e.item.displayName.toLowerCase(), a = e.item.aliasKey?.map((b) => b.toLowerCase()) ?? [], d = l === t || n === t, S = a.includes(t), m = Math.min(l.startsWith(t) ? l.length : 1 / 0, n.startsWith(t) ? n.length : 1 / 0), g = a.find((b) => b.startsWith(t)), c = g ? g.length : 1 / 0, y = p ? p(e.item.candidate) : 0, h = [d ? 0 : 1, S ? 0 : 1, m, c, e.bucket, -e.descriptionHits, -y];
      return { candidate: e.item.candidate, rankKey: h };
    });
    return u.sort((e, l) => {
      for (let n = 0; n < e.rankKey.length; n++) {
        let a = e.rankKey[n] ?? 0, d = l.rankKey[n] ?? 0;
        if (a < d) return -1;
        if (a > d) return 1;
      }
      return 0;
    }), u.map(({ candidate: e }) => e);
  }
}
class ogt extends Error {
}
