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
var chunk_6xncmctp_exports = {};
__export(chunk_6xncmctp_exports, {
  JZe: () => JZe,
  yWo: () => yWo
});
module.exports = __toCommonJS(chunk_6xncmctp_exports);
function R(n) {
  let r = [];
  for (let t = 0; t < n.length; t++) {
    let s = C(n[t]), a = s < 0 ? 2 : s < 10 ? 0 : 1, m = r.at(-1);
    if (m?.mode === a) m.end++;
    else r.push({ mode: a, start: t, end: t + 1 });
  }
  return r;
}
function F(n, r) {
  let t = [{ mode: -1, bits: 0, rank: 0 }], s = new Uint8Array(n.length * 3), a = new Uint8Array(n.length * 3);
  for (let c = 0; c < n.length; c++) {
    let { mode: h, start: d, end: g } = n[c], p = [];
    for (let b = h; b < 3; b++) {
      let e = L(b, g - d), u = { mode: b, bits: 1 / 0, rank: 0 };
      for (let [l, o] of t.entries()) {
        let i = o.bits + e;
        if (o.mode !== b) i += 4 + S(b, r);
        else if (b === 1 && h === 0) i -= g - d & 1;
        if (i < u.bits) u = { mode: b, bits: i, rank: l };
      }
      p.push(u);
    }
    t = p.sort((b, e) => b.bits - e.bits || b.rank - e.rank);
    for (let b = 0; b < t.length; b++) s[c * 3 + b] = t[b].mode, a[c * 3 + b] = t[b].rank;
  }
  let m = [], f = 0;
  for (let c = n.length - 1; c >= 0; c--) {
    let { start: h, end: d } = n[c], g = s[c * 3 + f], p = m.at(-1);
    if (p?.mode === g) p.start = h;
    else m.push({ mode: g, start: h, end: d });
    f = a[c * 3 + f];
  }
  return m.reverse();
}
function C(n) {
  return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".indexOf(String.fromCharCode(n));
}
function K(n, r) {
  let t = 0;
  for (let { mode: s, start: a, end: m } of n) t += 4 + S(s, r) + L(s, m - a);
  return t;
}
function S(n, r) {
  let t = r < 10 ? 0 : r < 27 ? 1 : 2;
  return n < 2 ? 10 - n + 2 * t : t === 0 ? 8 : 16;
}
function L(n, r) {
  return Math.ceil(n === 0 ? r * 10 / 3 : n === 1 ? r * 5.5 : r * 8);
}
var Q = "7afkqikouikoqumosussssuuqs", G = "11111222244444666678899acccdefghijjklmop";
function P(n) {
  return n === 1 ? 0 : Math.floor(n / 7) + 2;
}
function I(n) {
  return D(n) - q(n) * j(n);
}
function V(n, r, t) {
  let s = new Uint8Array(I(t)), a = 0;
  for (let { mode: o, start: i, end: y } of r) {
    a = B(s, a, 1 << o, 4), a = B(s, a, y - i, S(o, t));
    let k = 3 - o, w = [10, 45, 256][o];
    for (let x = i; x < y; x += k) {
      let O = Math.min(k, y - x), U = 0;
      for (let M = x; M < x + O; M++) {
        let E = n[M];
        U = U * w + (o < 2 ? C(E) : E);
      }
      a = B(s, a, U, Math.ceil(O * Math.log2(w)));
    }
  }
  let m = a + 11 >> 3;
  for (let o = m; o < s.length; o++) s[o] = o - m & 1 ? 17 : 236;
  let f = new Uint8Array(510), c = new Uint8Array(256);
  for (let o = 0, i = 1; o < 255; o++) f[o] = f[o + 255] = i, c[i] = o, i = i & 128 ? i << 1 ^ 285 : i << 1;
  let h = q(t), d = new Uint8Array(h);
  for (let o = 0; o < h; o++) {
    for (let i = o; i > 0; i--) d[i] ^= f[c[d[i - 1]] + o];
    d[0] ^= f[o];
  }
  let g = j(t), p = Math.floor(s.length / g), b = g - s.length % g, e = new Uint8Array(D(t)), u = new Uint8Array(h + 1), l = 0;
  for (let o = 0; o < g; o++) {
    u.fill(0);
    for (let i = 0; i < p + (o < b ? 0 : 1); i++) {
      let y = s[l++];
      e[i * g + o - (i < p ? 0 : b)] = y;
      let k = y ^ u[0];
      for (let w = 0; w < h; w++) u[w] = u[w + 1] ^ (k && f[c[k] + c[d[w]]]);
    }
    for (let i = 0; i < h; i++) e[s.length + i * g + o] = u[i];
  }
  return e;
}
function B(n, r, t, s) {
  for (let a = s - 1; a >= 0; a--, r++) n[r >> 3] |= (t >> a & 1) << 7 - (r & 7);
  return r;
}
function q(n) {
  return parseInt(Q[n - 1] ?? "u", 36);
}
function j(n) {
  return parseInt(G[n - 1], 36);
}
function D(n) {
  let r = n * 4 + 17, t = P(n), s = 192, a = n < 7 ? 31 : 67, m = 2 * (r - 16), f = t && (t ** 2 - 3) * 25 - (t - 2) * 10;
  return r ** 2 - 192 - a - m - f >> 3;
}
var A = 255;
function yWo(n, r = 4) {
  if (n === "") throw Error("No input text");
  encodeURI(n);
  let t = new TextEncoder().encode(n), s = R(t), a = F(s, T(s) || 40), m = T(a);
  if (m === 0) throw Error("The amount of data is too big to be stored in a QR Code");
  let f = m * 4 + 17, c = J(V(t, a, m), m), h = W(c, f), d = Array(f + 2 * r + 1).fill(32);
  d[d.length - 1] = 10;
  let g = String.fromCharCode(...d).repeat(r / 2), p = g;
  for (let b = 0; b < c.length; b += 2 * f) {
    for (let e = 0; e < f; e++) {
      let u = c[b + e] >> h & 1, l = (c[b + f + e] ?? 0) >> h & 1;
      d[r + e] = " \u2584\u2580\u2588".charCodeAt(u * 2 + l);
    }
    p += String.fromCharCode(...d);
  }
  return p + g.slice(0, -1);
}
async function JZe(n, r) {
  return yWo(n, r);
}
function T(n) {
  for (let r = 1; r <= 40; r++) if (K(n, r) <= I(r) * 8) return r;
  return 0;
}
function J(n, r) {
  let t = r * 4 + 17, s = new Uint8Array(t * t), a = new Uint8Array(t * t), m = t - 7, f = [[3, 3, 4], [3, m + 3, 4], [m + 3, 3, 4]], c = P(r), h = 2 * Math.ceil((m - 6) / (c - 1) / 2 - 0.25);
  for (let e = 0; e < c; e++) for (let u = 0; u < c; u++) {
    let l = e === c - 1 ? 6 : m - e * h, o = u === c - 1 ? 6 : m - u * h;
    if (!(Math.min(l, o) === 6 && [12, m + 6].includes(l + o))) f.push([l, o, 2]);
  }
  for (let [e, u, l] of f) for (let o = -l; o <= l; o++) for (let i = -l; i <= l; i++) {
    let y = e + o, k = u + i;
    if (y >= 0 && y < t && k >= 0 && k < t) {
      let w = Math.max(Math.abs(o), Math.abs(i));
      a[y * t + k] = 1, s[y * t + k] = w === l / 2 || w === 4 ? 0 : A;
    }
  }
  for (let e = 8; e < m; e++) a[6 * t + e] = a[e * t + 6] = 1, s[6 * t + e] = s[e * t + 6] = e & 1 ? 0 : A;
  let d = _(r, 7973, 12);
  for (let e = 0; r >= 7 && e < 18; e++) {
    let u = Math.floor(e / 3), l = m - 4 + e % 3;
    a[u * t + l] = a[l * t + u] = 1, s[u * t + l] = s[l * t + u] = d >> e & 1 ? A : 0;
  }
  let g = [];
  for (let e = 8, u = t; e >= 8 * t || u > 0; e += u) {
    if (!a[e]) g.push(e);
    if (e === 8 * t + 8) u = -1;
  }
  for (let e = 0; e < 8; e++) {
    let u = _(8 | e, 1335, 10) ^ 21522;
    for (let [l, o] of g.entries()) {
      let i = l < 8 ? 9 * t - 1 - l : (m + l - 8) * t + 8;
      a[o] = a[i] = 1, s[o] |= (u >> l & 1) << e, s[i] |= (u >> l & 1) << e;
    }
  }
  a[(m - 1) * t + 8] = 1, s[(m - 1) * t + 8] = A;
  let p = new Uint8Array(72).map((e, u) => {
    let l = Math.floor(u / 6), o = u % 6, i = l + o, y = l * o;
    return (i % 2 ? 0 : 1) | (l % 2 ? 0 : 2) | (o % 3 ? 0 : 4) | (i % 3 ? 0 : 8) | (((l >> 1) + Math.floor(o / 3)) % 2 ? 0 : 16) | (y % 6 ? 0 : 32) | ((y + y % 3) % 2 ? 0 : 64) | ((i + y % 3) % 2 ? 0 : 128);
  }), b = 0;
  for (let e = 0; e < t >> 1; e++) {
    let u = t - 1 - 2 * e;
    for (let l = 0; l < t * 2; l++) {
      let o = e & 1 ? l >> 1 : t - 1 - (l >> 1), i = u - (l & 1) - (u > 6 ? 0 : 1);
      if (!a[o * t + i]) {
        let y = (n[b >> 3] ?? 0) >> 7 - (b & 7) & 1;
        s[o * t + i] = p[o % 12 * 6 + i % 6] ^ (y ? A : 0), b++;
      }
    }
  }
  return s;
}
function _(n, r, t) {
  let s = n << t;
  for (let a = 5; a >= 0; a--) if (s >> a + t & 1) s ^= r << a;
  return n << t | s;
}
function W(n, r) {
  let t = new Int32Array(256), s = new Int32Array(256);
  for (let f = 0; f < r; f++) {
    H(n, f * r, 1, r, t), H(n, f, r, r, t);
    for (let c = f * r; c < (f + 1) * r; c++) {
      let h = n[c];
      if (s[h]++, f > 0 && c > f * r) {
        let d = h ^ n[c - 1] | h ^ n[c - r] | h ^ n[c - r - 1];
        t[d ^ A] += 3;
      }
    }
  }
  let a = 0, m = 1 / 0;
  for (let f = 0; f < 8; f++) {
    let c = 0, h = 0;
    for (let d = 1 << f; d < 256; d = d + 1 | 1 << f) c += t[d], h += s[d];
    if (c += 10 * Math.abs(Math.ceil(h * 20 / n.length) - 10), c < m) m = c, a = f;
  }
  return a;
}
function H(n, r, t, s, a) {
  let m = 0;
  for (let f = 4; f < s; f++) {
    let c = r + f * t, h = n[c - 4 * t], d = n[c - 3 * t], g = n[c - 2 * t], p = n[c - t], b = n[c], e = (h ^ d | d ^ g | g ^ p | p ^ b) ^ A;
    a[e]++, a[e & ~m] += 2, m = e;
    let u = ~h & d & g & p & ~b;
    if (u && f > 4 && f < s - 1) {
      let l = u & n[c - 5 * t] & n[c + t];
      if (f >= 9) a[l & ~N(n, c - 9 * t, t)] += 40;
      if (f < s - 5) a[l & ~N(n, c + 2 * t, t)] += 40;
    }
  }
}
function N(n, r, t) {
  return n[r] | n[r + t] | n[r + 2 * t] | n[r + 3 * t];
}
