const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_ra3kqnyn_exports = {};
__export(chunk_ra3kqnyn_exports, {
  UBr: () => UBr,
  V$o: () => V$o,
  a_e: () => a_e,
  l_e: () => l_e
});
module.exports = __toCommonJS(chunk_ra3kqnyn_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_hghmr3e2 = require("/$bunfs/root/chunk-hghmr3e2.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var to = { default: { eyes: "open", arms: "down", feet: "both" }, "arms-up": { eyes: "open", arms: "up", feet: "both" }, "look-left": { eyes: "left", arms: "down", feet: "both" }, "look-right": { eyes: "right", arms: "down", feet: "both" } }, J = { down: { r1L: " \u2590", r1R: "", r2L: "\u259D\u259C", r2R: "\u2588\u2580" }, up: { r1L: "\u2597\u259F", r1R: "\u2584", r2L: " \u259C", r2R: "\u2588\u2598" }, "one-up": { r1L: " \u2590", r1R: "\u2584", r2L: "\u259D\u259C", r2R: "\u2588\u2598" } }, K = { open: [{ glyphs: "\u259B\u2588\u2588\u2588\u259B\u2588" }], left: [{ glyphs: "\u259F\u2588\u2588\u2588\u259F\u2588" }], right: [{ glyphs: "\u2588\u259F\u2588\u2588\u2588\u259F" }], closed: [{ glyphs: "\u2582", lid: true }, { glyphs: "\u2588\u2588\u2588" }, { glyphs: "\u2582", lid: true }, { glyphs: "\u2588" }], wink: [{ glyphs: "\u259B\u2588\u2588\u2588" }, { glyphs: "\u2582", lid: true }, { glyphs: "\u2588" }] }, M = { both: " \u259D\u259D   \u259D\u259D ", left: " \u259D\u259D      ", right: "      \u259D\u259D " }, Q = { open: " \u2597   \u2596 ", left: " \u2598   \u2598 ", right: " \u259D   \u259D ", closed: " \u2582   \u2582 ", wink: " \u2597   \u2582 " }, U = { "right-12": [{ glyphs: " \u2590\u2588\u259C\u2588\u2588\u259B\u2588 ", from: 2, to: 8 }, { glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580", from: 2, to: 7 }, { glyphs: " \u259D\u259D   \u259D\u259D ", from: 0, to: 0 }], "right-30": [{ glyphs: "  \u2588\u259B\u2588\u2588\u259B\u258C ", from: 2, to: 7 }, { glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ", from: 2, to: 7 }, { glyphs: "  \u2598\u2598  \u2598\u2598 ", from: 0, to: 0 }], "right-55": [{ glyphs: "  \u2590\u2588\u259B\u2588\u259C  ", from: 3, to: 7 }, { glyphs: "  \u2590\u2588\u2588\u2588\u2588  ", from: 3, to: 7 }, { glyphs: "  \u259D\u259D \u259D\u259D  ", from: 0, to: 0 }], "right-75": [{ glyphs: "   \u2588\u2588\u259B\u258C  ", from: 3, to: 6 }, { glyphs: "   \u2588\u2588\u2588\u258C  ", from: 3, to: 6 }, { glyphs: "   \u2598  \u2598  ", from: 0, to: 0 }], edge: [{ glyphs: "   \u2590\u2588\u2588   ", from: 4, to: 6 }, { glyphs: "   \u2590\u2588\u2588   ", from: 4, to: 6 }, { glyphs: "   \u259D \u259D   ", from: 0, to: 0 }], "back-105": [{ glyphs: "   \u2588\u2588\u2588\u258C  ", from: 3, to: 6 }, { glyphs: "   \u2588\u2588\u2588\u258C  ", from: 3, to: 6 }, { glyphs: "   \u2598  \u2598  ", from: 0, to: 0 }], "back-125": [{ glyphs: "  \u2590\u2588\u2588\u2588\u2588  ", from: 3, to: 7 }, { glyphs: "  \u2590\u2588\u2588\u2588\u2588  ", from: 3, to: 7 }, { glyphs: "  \u259D\u259D \u259D\u259D  ", from: 0, to: 0 }], "back-150": [{ glyphs: "  \u2588\u2588\u2588\u2588\u2588\u258C ", from: 2, to: 7 }, { glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ", from: 2, to: 7 }, { glyphs: "  \u2598\u2598  \u2598\u2598 ", from: 0, to: 0 }], back: [{ glyphs: " \u2590\u2588\u2588\u2588\u2588\u2588\u2588 ", from: 2, to: 8 }, { glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580", from: 2, to: 7 }, { glyphs: " \u259D\u259D   \u259D\u259D ", from: 0, to: 0 }], "left-75": [{ glyphs: "   \u259B\u2588\u2588\u258C  ", from: 3, to: 6 }, { glyphs: "   \u2588\u2588\u2588\u258C  ", from: 3, to: 6 }, { glyphs: "   \u2598  \u2598  ", from: 0, to: 0 }], "left-55": [{ glyphs: "  \u2590\u259C\u259B\u2588\u2588  ", from: 3, to: 7 }, { glyphs: "  \u2590\u2588\u2588\u2588\u2588  ", from: 3, to: 7 }, { glyphs: "  \u259D\u259D \u259D\u259D  ", from: 0, to: 0 }], "left-30": [{ glyphs: "  \u259B\u2588\u2588\u259B\u2588\u258C ", from: 2, to: 7 }, { glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ", from: 2, to: 7 }, { glyphs: "  \u2598\u2598  \u2598\u2598 ", from: 0, to: 0 }], "left-12": [{ glyphs: " \u2590\u259B\u2588\u2588\u2588\u259C\u2588 ", from: 2, to: 8 }, { glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580", from: 2, to: 7 }, { glyphs: " \u259D\u259D   \u259D\u259D ", from: 0, to: 0 }] };
function V$o(a) {
  return typeof a === "string" ? to[a] : a;
}
function UBr(a) {
  return typeof a !== "string" && "facing" in a;
}
function a_e() {
  return !(0, import_chunk_hghmr3e2._Dt)();
}
function l_e(a) {
  let p = (0, import_chunk_sng02qpc.k)(47), t;
  if (p[0] !== a) t = a === void 0 ? {} : a, p[0] = a, p[1] = t;
  else t = p[1];
  let { pose: y, color: m, paint: f } = t, l = y === void 0 ? "default" : y, s = m === void 0 ? "clawd_body" : m;
  if ((0, import_chunk_8bkqeb5d.Xe)()) {
    return null;
  }
  if (UBr(l)) {
    let d2;
    if (p[2] !== s || p[3] !== l) d2 = a_e() ? (0, import_chunk_a46xeenj.e)(q, { facing: l.facing, color: s }) : (0, import_chunk_a46xeenj.e)(S, { eyes: "open", color: s }), p[2] = s, p[3] = l, p[4] = d2;
    else d2 = p[4];
    return d2;
  }
  let d;
  if (p[5] !== l) d = V$o(l), p[5] = l, p[6] = d;
  else d = p[6];
  let i = d;
  if (!a_e()) {
    let u2;
    if (p[7] !== s || p[8] !== i.eyes) u2 = (0, import_chunk_a46xeenj.e)(S, { eyes: i.eyes, color: s }), p[7] = s, p[8] = i.eyes, p[9] = u2;
    else u2 = p[9];
    return u2;
  }
  let h = J[i.arms], u;
  if (p[10] !== s || p[11] !== f) u = f ?? (() => s), p[10] = s, p[11] = f, p[12] = u;
  else u = p[12];
  let n = u, b;
  if (p[13] !== i.eyes) {
    b = [];
    for (const yo of K[i.eyes]) {
      let z = b.at(-1);
      b.push({ span: yo, column: z ? z.column + z.span.glyphs.length : 2 });
    }
    p[13] = i.eyes, p[14] = b;
  } else b = p[14];
  let _;
  if (p[15] !== h.r1L || p[16] !== n) _ = (0, import_chunk_a46xeenj.e)(c, { glyphs: h.r1L, column: 0, row: 0, paint: n }), p[15] = h.r1L, p[16] = n, p[17] = _;
  else _ = p[17];
  let A;
  if (p[18] !== n || p[19] !== b) A = b.map((x2) => {
    let { span: oo, column: ro } = x2;
    return (0, import_chunk_a46xeenj.e)(c, { glyphs: oo.glyphs, column: ro, row: 0, paint: n, on: oo.lid ? "lid" : "eyes" }, ro);
  }), p[18] = n, p[19] = b, p[20] = A;
  else A = p[20];
  let x;
  if (p[21] !== h.r1R || p[22] !== n) x = (0, import_chunk_a46xeenj.e)(c, { glyphs: h.r1R, column: 8, row: 0, paint: n }), p[21] = h.r1R, p[22] = n, p[23] = x;
  else x = p[23];
  let D;
  if (p[24] !== _ || p[25] !== A || p[26] !== x) D = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [_, A, x] }), p[24] = _, p[25] = A, p[26] = x, p[27] = D;
  else D = p[27];
  let T;
  if (p[28] !== h.r2L || p[29] !== n) T = (0, import_chunk_a46xeenj.e)(c, { glyphs: h.r2L, column: 0, row: 1, paint: n }), p[28] = h.r2L, p[29] = n, p[30] = T;
  else T = p[30];
  let N;
  if (p[31] !== n) N = (0, import_chunk_a46xeenj.e)(c, { glyphs: "\u2588\u2588\u2588\u2588\u2588", column: 2, row: 1, paint: n, on: "eyes" }), p[31] = n, p[32] = N;
  else N = p[32];
  let B;
  if (p[33] !== h.r2R || p[34] !== n) B = (0, import_chunk_a46xeenj.e)(c, { glyphs: h.r2R, column: 7, row: 1, paint: n }), p[33] = h.r2R, p[34] = n, p[35] = B;
  else B = p[35];
  let V;
  if (p[36] !== T || p[37] !== N || p[38] !== B) V = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [T, N, B] }), p[36] = T, p[37] = N, p[38] = B, p[39] = V;
  else V = p[39];
  const H = M[i.feet];
  let j;
  if (p[40] !== n || p[41] !== H) j = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: (0, import_chunk_a46xeenj.e)(c, { glyphs: H, column: 0, row: 2, paint: n }) }), p[40] = n, p[41] = H, p[42] = j;
  else j = p[42];
  let eo;
  if (p[43] !== V || p[44] !== j || p[45] !== D) eo = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexShrink: 0, children: [D, V, j] }), p[43] = V, p[44] = j, p[45] = D, p[46] = eo;
  else eo = p[46];
  return eo;
}
function c({ glyphs: a, column: p, row: t, paint: y, on: m }) {
  let f = [];
  for (let [l, s] of Array.from(a).entries()) {
    let w = f.at(-1), d = s === " " && w ? w.color : y(p + l, t);
    if (w?.color === d) w.glyphs += s;
    else f.push({ glyphs: s, color: d });
  }
  return f.map((l, s) => (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: m === "lid" ? "clawd_background" : l.color, backgroundColor: m === "lid" ? l.color : m && "clawd_background", children: l.glyphs }, s));
}
function q(a) {
  let m = (0, import_chunk_sng02qpc.k)(7), { facing: p, color: t } = a;
  const y = U[p];
  let f;
  if (m[0] !== t || m[1] !== y) {
    let l2;
    if (m[3] !== t) l2 = (s, w) => {
      let { glyphs: d, from: i, to: u } = s;
      return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: t, children: [d.slice(0, i), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { backgroundColor: "clawd_background", children: d.slice(i, u) }), d.slice(u)] }, w);
    }, m[3] = t, m[4] = l2;
    else l2 = m[4];
    f = y.map(l2);
    m[0] = t, m[1] = y, m[2] = f;
  } else f = m[2];
  let l;
  if (m[5] !== f) l = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexShrink: 0, children: f }), m[5] = f, m[6] = l;
  else l = m[6];
  return l;
}
function S(a) {
  let y = (0, import_chunk_sng02qpc.k)(19), { eyes: p, color: t } = a, m;
  if (y[0] !== t) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: t, children: "\u2597" }), y[0] = t, y[1] = m;
  else m = y[1];
  const f = Q[p];
  let l;
  if (y[2] !== t || y[3] !== f) l = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "clawd_background", backgroundColor: t, children: f }), y[2] = t, y[3] = f, y[4] = l;
  else l = y[4];
  let s;
  if (y[5] !== t) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: t, children: "\u2596" }), y[5] = t, y[6] = s;
  else s = y[6];
  let w;
  if (y[7] !== m || y[8] !== l || y[9] !== s) w = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [m, l, s] }), y[7] = m, y[8] = l, y[9] = s, y[10] = w;
  else w = y[10];
  let d;
  if (y[11] === import_chunk_w1d7ygsk.R) d = " ".repeat(7), y[11] = d;
  else d = y[11];
  let i, u;
  if (y[12] !== t) i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { backgroundColor: t, children: d }), u = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: t, children: "\u2598\u2598   \u259D\u259D" }), y[12] = t, y[13] = i, y[14] = u;
  else i = y[13], u = y[14];
  let h;
  if (y[15] !== w || y[16] !== i || y[17] !== u) h = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", alignItems: "center", children: [w, i, u] }), y[15] = w, y[16] = i, y[17] = u, y[18] = h;
  else h = y[18];
  return h;
}
