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
var chunk_jannkkyp_exports = {};
__export(chunk_jannkkyp_exports, {
  CIe: () => CIe,
  JVe: () => JVe,
  uwn: () => uwn,
  wjs: () => wjs
});
module.exports = __toCommonJS(chunk_jannkkyp_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_b7hj8816 = require("/$bunfs/root/chunk-b7hj8816.js");
var import_chunk_sfhx01p4 = require("/$bunfs/root/chunk-sfhx01p4.js");
var import_chunk_yhzdv0wf = require("/$bunfs/root/chunk-yhzdv0wf.js");
var import_chunk_c7hg08xn = require("/$bunfs/root/chunk-c7hg08xn.js");
var import_chunk_47n6tps8 = require("/$bunfs/root/chunk-47n6tps8.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function JVe(d) {
  let t = (0, import_chunk_sng02qpc.k)(11), { elapsedTimeSeconds: n, timeoutMs: p } = d;
  if (n === void 0 && !p) {
    return null;
  }
  let i;
  if (t[0] !== n) i = n !== void 0 && (0, import_chunk_f64qna2j.Cn)(n * 1e3), t[0] = n, t[1] = i;
  else i = t[1];
  let s;
  if (t[2] !== p) s = p && `timeout ${(0, import_chunk_f64qna2j.Cn)(p, { hideTrailingZeros: true })}`, t[2] = p, t[3] = s;
  else s = t[3];
  let l;
  if (t[4] !== i || t[5] !== s) l = [i, s], t[4] = i, t[5] = s, t[6] = l;
  else l = t[6];
  let u = l, a;
  if (t[7] !== u) a = u.filter(Boolean), t[7] = u, t[8] = a;
  else a = t[8];
  const m = a.join(" \xB7 ");
  let L;
  if (t[9] !== m) L = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["(", m, ")"] }), t[9] = m, t[10] = L;
  else L = t[10];
  return L;
}
var h = 5, Z = 5;
function CIe(d) {
  let m = (0, import_chunk_sng02qpc.k)(31), { output: n, fullOutput: p, elapsedTimeSeconds: t, totalLines: i, totalBytes: s, timeoutMs: l, verbose: u } = d, { columns: a } = (0, import_chunk_6n6exvyx.qe)(), L;
  if (m[0] !== a || m[1] !== n || m[2] !== u) L = u ? null : z(n, a), m[0] = a, m[1] = n, m[2] = u, m[3] = L;
  else L = m[3];
  let f = L, I;
  if (m[4] !== p || m[5] !== f) I = f ? f.text : (0, import_chunk_wbk1hf21.Tl)(p.trim()), m[4] = p, m[5] = f, m[6] = I;
  else I = m[6];
  let S = I;
  if (!S) {
    let T2;
    if (m[7] === import_chunk_w1d7ygsk.R) T2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Running\u2026 " }), m[7] = T2;
    else T2 = m[7];
    let c2;
    if (m[8] !== t || m[9] !== l) c2 = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.o)(import_chunk_sfhx01p4.LL, { children: [T2, (0, import_chunk_a46xeenj.e)(JVe, { elapsedTimeSeconds: t, timeoutMs: l })] }) }), m[8] = t, m[9] = l, m[10] = c2;
    else c2 = m[10];
    return c2;
  }
  let X = f ? h : (0, import_chunk_7cfjrnwy.Mt)(p, `
`) + 1, C = (i ? Math.max(0, i - X) : 0) + (f?.dropped ?? 0), T;
  if (m[11] !== C || m[12] !== s || m[13] !== i) T = s && i ? `~${i} lines` : (0, import_chunk_f64qna2j.$y)(C), m[11] = C, m[12] = s, m[13] = i, m[14] = T;
  else T = m[14];
  let M = T, c;
  if (m[15] !== S) c = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: S }) }), m[15] = S, m[16] = c;
  else c = m[16];
  let y;
  if (m[17] !== M) y = M ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: M }) : null, m[17] = M, m[18] = y;
  else y = m[18];
  let x;
  if (m[19] !== t || m[20] !== l) x = (0, import_chunk_a46xeenj.e)(JVe, { elapsedTimeSeconds: t, timeoutMs: l }), m[19] = t, m[20] = l, m[21] = x;
  else x = m[21];
  let P;
  if (m[22] !== s) P = s ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_7e12xj51.dn)(s) }) : null, m[22] = s, m[23] = P;
  else P = m[23];
  let B;
  if (m[24] !== y || m[25] !== x || m[26] !== P) B = (0, import_chunk_a46xeenj.o)(import_chunk_47n6tps8.Vh, { children: [y, x, P] }), m[24] = y, m[25] = x, m[26] = P, m[27] = B;
  else B = m[27];
  let U;
  if (m[28] !== c || m[29] !== B) U = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.e)(import_chunk_sfhx01p4.LL, { children: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [c, B] }) }) }), m[28] = c, m[29] = B, m[30] = U;
  else U = m[30];
  return U;
}
function wjs({ output: d, fullOutput: n, totalLines: p }, t) {
  if (!n.trim()) return false;
  return (p ?? 0) > h || z(d, t).clipped;
}
function z(d, n) {
  let p = Math.max(1, n - Z), t = (0, import_chunk_wbk1hf21.Tl)(d.trim()).replace(/\r\n?/g, `
`).split(`
`).filter((u) => u), i = [], s = 0, l = t.length;
  while (l > 0 && s < h) {
    let u = t[--l], a = (0, import_chunk_f64qna2j.Au)(u, p, { hard: true, trim: false }).split(`
`), m = h - s;
    if (a.length > m) return i.unshift((0, import_chunk_7cfjrnwy.sA)(a.slice(-m).join(""), " ")), { text: i.join(`
`), clipped: true, dropped: l };
    i.unshift(u), s += a.length;
  }
  return { text: i.join(`
`), clipped: l > 0, dropped: l };
}
function uwn(d) {
  let t = (0, import_chunk_sng02qpc.k)(10), { path: n, size: p } = d, i;
  if (t[0] !== p) i = p ? ` (${(0, import_chunk_7e12xj51.dn)(p)} in all)` : "", t[0] = p, t[1] = i;
  else i = t[1];
  let s;
  if (t[2] !== n) s = (0, import_chunk_2yx6c1y2.Po)(n), t[2] = n, t[3] = s;
  else s = t[3];
  let l;
  if (t[4] !== n || t[5] !== s) l = (0, import_chunk_a46xeenj.e)(import_chunk_yhzdv0wf.Af, { filePath: n, children: s }), t[4] = n, t[5] = s, t[6] = l;
  else l = t[6];
  let u;
  if (t[7] !== i || t[8] !== l) u = (0, import_chunk_a46xeenj.o)(import_chunk_c7hg08xn.At, { children: ["\u2026 more output", i, " saved to", " ", l] }), t[7] = i, t[8] = l, t[9] = u;
  else u = t[9];
  return u;
}
