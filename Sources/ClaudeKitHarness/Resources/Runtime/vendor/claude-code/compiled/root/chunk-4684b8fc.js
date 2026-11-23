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
var chunk_4684b8fc_exports = {};
__export(chunk_4684b8fc_exports, {
  Ael: () => Ael,
  Cel: () => Cel,
  Xmr: () => Xmr,
  yae: () => yae
});
module.exports = __toCommonJS(chunk_4684b8fc_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var J = typeof Bun > "u" ? 0 : 0.035;
function N({ round: n, slotLimit: t, matched: e }, r) {
  let i = Math.min(n - 1, t) - r + 1, o = Math.max(0, Math.min(i, (n >> 1) - r));
  return (o > 0 ? 80 : 0) + o * (115 + J * i) + (i - o) * 30 + e * 3;
}
var Q = 1e4, Y = 3e4, k = 134217728;
function _(n, t, e, r) {
  let { maxEditLength: i, timeout: o, maxSearchSteps: s = 1 / 0 } = e, c = r?.steps, l = Date.now(), p = l + (o ?? 1 / 0), u = e.maxSearchSteps === void 0 ? ((o ?? 1 / 0) + 1) * 1e6 : 1 / 0, d = n, g = t, a = F(), f = [F()], h = { bits: new Int32Array(4), used: 0, rows: [] };
  for (let w = 0; !U(a, h, d, g, c); w = a.firstSlot) {
    let S = Date.now();
    if (!(a.round <= (i ?? 1 / 0) && S <= p) || (u -= N(a, w)) < 0) return;
    let y = Math.min(a.round, a.slotLimit) - a.firstSlot + 1, A = a.steps + y, R = Q + 8 * (n.length + t.length) + (r?.size ?? 0);
    if (d === n && (A > Math.min(s, R) || (S - l - 1) * Y > R)) {
      while (c?.next().done === false) ;
      let H = n.length < t.length ? n : t, O = /* @__PURE__ */ new Map();
      for (let x = 0; x < H.length; x++) O.set(H[x], x);
      d = z(n, O), g = z(t, O);
      let M = e.skipsSearchOfUnshared && K(d, g);
      if (M) {
        let x = M[0].length + M[1].length, T = n.length - x, W = t.length - x;
        return T * W > s || T + W > (i ?? 1 / 0) ? void 0 : M;
      }
    }
    if (A > s) return;
    if (h.used + y > k) f.push({ ...a, reach: a.reach.slice() }), h.used = 0;
  }
  let m = new Uint8Array(a.round + 1), L = (a.round + n.length - t.length) / 2;
  for (let w = a.round; w > 0; ) {
    let S = f.pop(), y = Math.max(1, S.round);
    if (w < a.round) {
      h.used = 0;
      while (S.round <= w) if (U(S, h, d, g), Date.now() > p) return;
    }
    for (; w >= y; w--) {
      let A = h.rows[w] + L;
      m[w] = h.bits[A >> 5] >> A & 1, L -= 1 - m[w];
    }
  }
  let b = [], E = 0, I = 0;
  for (let w = 0; w <= a.round; w++) {
    if (w > 0) I += m[w], E += 1 - m[w];
    let S = C(d, g, E, I);
    if (E += S, I += S, S > 0 || w === a.round) b.push({ oldEnd: E, newEnd: I, length: S });
  }
  return b;
}
function F() {
  return { round: 0, firstSlot: 0, slotLimit: 1 / 0, steps: -1, matched: 0, reach: new Int32Array(8) };
}
function U(n, t, e, r, i) {
  let { round: o, firstSlot: s, reach: c } = n, l = Math.min(o, n.slotLimit), p = t.used >> 5, u = p + (l - s >> 5) + 1;
  if (u > t.bits.length) t.bits = V(t.bits, u < k >> 8 ? 2 * u : u + (k >> 5));
  let { bits: d } = t;
  d.fill(0, p, u);
  let g = t.used - s;
  t.rows[o] = g, t.used = u << 5, n.matched = 0;
  let a = s > 0 ? c[s - 1] : -1;
  for (let f = s; f <= l; f++) {
    if (e instanceof Int32Array && r instanceof Int32Array) f = Z(n, d, g, e, r, f, l, a), a = c.at(-1);
    let h = c[f], m = a + 1;
    if (a < h) m = h, d[g + f >> 5] |= 1 << g + f;
    a = h, n.matched -= m;
    let L = o - 2 * f, b, E;
    do
      m += C(e, r, m, m + L), b = m === e.length, E = m + L === r.length;
    while (b !== E && i?.next().done === false);
    if (b && E) return true;
    if (n.matched += m, c[f] = m, E) n.firstSlot = f + 1;
    else if (b) {
      n.slotLimit = f;
      break;
    }
  }
  if (l + 3 > c.length) n.reach = V(c, 2 * c.length);
  return n.reach[l + 1] = -1, n.steps += Math.min(l, n.slotLimit) - s + 1, n.round++, false;
}
function Z(n, t, e, r, i, o, s, c) {
  let { reach: l, round: p } = n, u = 0, d = c, g = o;
  for (let a = p - 2 * o; g < s; g++, a -= 2) {
    let f = l[g], h = d < f, m = h ? f : d + 1, L = m, b = Math.min(r.length, i.length - a);
    while (L < b && r[L] === i[L + a]) L++;
    if (L === b) break;
    if (h) t[e + g >> 5] |= 1 << e + g;
    u += L - m, l[g] = L, d = f;
  }
  return n.matched += u, l[l.length - 1] = d, g;
}
function C(n, t, e, r) {
  let i = Math.min(n.length - e, t.length - r), o = 0;
  while (o < i && n[e + o] === t[r + o]) o++;
  return o;
}
function V(n, t) {
  let e = new Int32Array(t);
  return e.set(n), e;
}
function z(n, t) {
  let e = new Int32Array(n.length);
  for (let r = 0; r < n.length; r++) e[r] = t.get(n[r]) ?? -1;
  return e;
}
function K(n, t) {
  let e = Math.min(n.length, t.length), r = C(n, t, 0, 0), i = 0;
  while (r + i < e && n[n.length - i - 1] === t[t.length - i - 1]) i++;
  let o = new Uint8Array(e);
  for (let s of n.subarray(r, n.length - i)) o[s] = 1;
  if (t.subarray(r).some((s) => o[s])) return;
  for (let s of n.subarray(n.length - i)) o[s] = 1;
  return t.subarray(r, t.length - i).some((s) => o[s]) ? void 0 : [{ oldEnd: r, newEnd: r, length: r }, { oldEnd: n.length, newEnd: t.length, length: i }];
}
var nn = "\\ No newline at end of file", X = 128;
function Cel(n, t) {
  return v(n, t, _(n, t, {}), (e) => e);
}
function Ael(n, t) {
  let e = j(n), r = j(t);
  return v(e, r, _(e, r, {}), (i) => i.join(""));
}
function Xmr(n, t, e = {}) {
  let r = q(n, t, 1, e);
  if (!r) return;
  let [{ oldLines: i, newLines: o, head: s, headLines: c, tail: l }, p] = r, u = v(i, o, p, (d) => d.at(-1).endsWith(`
`) ? d.join(`
`).slice(0, -1) : d.join(`
`) + `
`);
  if (s) u[0].count += c, u[0].value = s + u[0].value;
  if (l) u.at(-1).count += (0, import_chunk_7cfjrnwy.Mt)(l.slice(0, -1), `
`) + 1, u.at(-1).value += l;
  return u;
}
function yae(n, t, e, r, i, o, s) {
  let { context: c } = s, l = q(e, r, c, s);
  if (!l) return;
  let [{ oldLines: p, newLines: u, headLines: d }, g] = l, a = d + 1, f = [], h, m = 0, L = 0;
  for (let b of g) {
    let E = b.oldEnd - b.length, I = b.newEnd - b.length;
    if (E > m || I > L) {
      if (!h) {
        let y = Math.min(c, m);
        h = { oldStart: a + m - y, oldLines: y, newStart: a + L - y, newLines: y, lines: [] }, f.push(h), D(h, " ", u, L - y, L);
      }
      D(h, "-", p, m, E), D(h, "+", u, L, I);
      let w = b.length <= 2 * c && b !== g.at(-1), S = w ? b.length : Math.min(c, b.length);
      if (D(h, " ", u, I, I + S), h.oldLines += E - m + S, h.newLines += I - L + S, !w) h = void 0;
    }
    m = b.oldEnd, L = b.newEnd;
  }
  return { oldFileName: n, newFileName: t, oldHeader: i, newHeader: o, hunks: f };
}
function v(n, t, e, r) {
  let i = [], o = 0, s = 0;
  for (let { oldEnd: c, newEnd: l, length: p } of e) {
    let u = c - p, d = l - p;
    if (u > o) i.push({ count: u - o, added: false, removed: true, value: r(n.slice(o, u)) });
    if (d > s) i.push({ count: d - s, added: true, removed: false, value: r(t.slice(s, d)) });
    if (p > 0) i.push({ count: p, added: false, removed: false, value: r(t.slice(d, l)) });
    o = c, s = l;
  }
  return i;
}
function q(n, t, e, r) {
  let i = Math.min(n.length, t.length), o = G(n, t, i, 1), s = G(n, t, i - o, -1), c = o;
  for (let h = 0; h <= e && c > 0; h++) c = c > 1 ? n.lastIndexOf(`
`, c - 2) + 1 : 0;
  let l = n.slice(n.length - s), p = l.slice(l.indexOf(`
`) + 1 || s), u = n.slice(0, c), d = { oldLines: P(n.slice(c, n.length - p.length)), newLines: P(t.slice(c, t.length - p.length)), head: u, headLines: (0, import_chunk_7cfjrnwy.Mt)(u, `
`), tail: p }, g = tn(d), a = _(d.oldLines, d.newLines, r, { steps: g, size: p.length });
  if (!a) return;
  let f = a.at(-1);
  while (f.length < e && !g.next().done) f.length += d.oldLines.length - f.oldEnd, f.oldEnd = d.oldLines.length, f.newEnd = d.newLines.length;
  return [d, a];
}
function* tn(n) {
  for (let t = X; n.tail; t *= 2) {
    let e = n.tail.indexOf(`
`, t) + 1 || n.tail.length;
    for (let r of P(n.tail.slice(0, e))) n.oldLines.push(r), n.newLines.push(r);
    n.tail = n.tail.slice(e), yield;
  }
}
function G(n, t, e, r) {
  let i = 0;
  for (let o = 1073741824; o >= X; o /= 2) {
    let s = i + o;
    if (s <= e && (r === 1 ? n.slice(i, s) === t.slice(i, s) : n.slice(-s, n.length - i) === t.slice(-s, t.length - i))) i = s;
  }
  return i;
}
function P(n) {
  let t = n.split(`
`), e = t.pop();
  if (e) t.push(e + `
`);
  return t;
}
function j(n) {
  let t = [];
  for (let e = 0, r = 0; e < n.length; e = r) {
    let i = B(n, r++);
    if (i) while (r < n.length && B(n, r) === i) r++;
    else if (n.startsWith(`\r
`, e) || n.codePointAt(e) > 65535) r++;
    t.push(n.slice(e, r));
  }
  return t;
}
function B(n, t) {
  let e = n.charCodeAt(t), r = e | 32;
  if (e < 192 ? r >= 97 && r <= 122 || e >= 48 && e <= 57 || e === 95 || e === 173 : e < 768 ? r !== 247 && e !== 711 && (e < 728 || e > 733) : e >> 8 === 30) return "word";
  return e !== 10 && e !== 13 && !n[t].trim() ? "space" : void 0;
}
function D(n, t, e, r, i) {
  if (r === i) return;
  let o = (t + e.slice(r, i).join(`
` + t)).split(`
`);
  for (let s of o) n.lines.push(s || nn);
}
