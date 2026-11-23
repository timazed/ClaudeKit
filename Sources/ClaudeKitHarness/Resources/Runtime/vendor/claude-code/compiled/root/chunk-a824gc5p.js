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
var chunk_a824gc5p_exports = {};
__export(chunk_a824gc5p_exports, {
  CWr: () => CWr,
  E2s: () => E2s,
  HZe: () => HZe,
  Iya: () => Iya,
  MZe: () => MZe,
  Mwn: () => Mwn,
  Omt: () => Omt,
  Oya: () => Oya,
  _9t: () => _9t,
  i7n: () => i7n,
  m_e: () => m_e,
  o7n: () => o7n,
  s7n: () => s7n,
  vO: () => vO
});
module.exports = __toCommonJS(chunk_a824gc5p_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_gdmb039p = require("/$bunfs/root/chunk-gdmb039p.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_3j73ps7b = require("/$bunfs/root/chunk-3j73ps7b.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_ffh9jsxe = require("/$bunfs/root/chunk-ffh9jsxe.js");
var import_chunk_qnwkdfwp = require("/$bunfs/root/chunk-qnwkdfwp.js");
var import_chunk_9rvw567f = require("/$bunfs/root/chunk-9rvw567f.js");
var import_chunk_8dkwjpxx = require("/$bunfs/root/chunk-8dkwjpxx.js");
var import_chunk_0t7st4dz = require("/$bunfs/root/chunk-0t7st4dz.js");
var import_chunk_8ym8b8h9 = require("/$bunfs/root/chunk-8ym8b8h9.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function tt(n, t, l, i) {
  let m = n[t] ? (0, import_chunk_gdmb039p.XK)(n[t]) : null, h = n[l] ? (0, import_chunk_gdmb039p.XK)(n[l]) : null;
  if (m && h) return (0, import_chunk_gdmb039p.dH)((0, import_chunk_gdmb039p.$D)(m, h, (0, import_chunk_gdmb039p.Wse)(i)));
  return i > 0.5 ? l : t;
}
var CWr = "\u25CF", te = 2e3, ee = { r: 0, g: 0, b: 0 };
function Omt(n) {
  let B = (0, import_chunk_sng02qpc.k)(34), { frame: t, messageColor: l, stalledIntensity: i, thinkingIntensity: m, reducedMotion: h, time: c } = n, M = i === void 0 ? 0 : i, s = m === void 0 ? 0 : m, O = h === void 0 ? false : h, A = c === void 0 ? 0 : c, S = (0, import_chunk_3jkk3v3z.mC)();
  if (O) {
    let p = 1 - (0, import_chunk_gdmb039p.PIt)(A, te);
    let P = s > 0 ? "warning" : l;
    let E = S[P];
    let L, v, D, x2, u2, d2, b2, K2;
    if (B[0] !== E || B[1] !== p || B[2] !== P) {
      let W = E ? (0, import_chunk_gdmb039p.XK)(E) : null;
      D = W && (0, import_chunk_gdmb039p.$D)((0, import_chunk_gdmb039p.$D)(W, ee, 0.5), W, (0, import_chunk_gdmb039p.Wse)(p));
      v = import_chunk_8bkqeb5d.g;
      u2 = true;
      d2 = "wrap";
      b2 = 1;
      K2 = 2;
      L = import_chunk_8bkqeb5d.r;
      x2 = D ? (0, import_chunk_gdmb039p.dH)(D) : P;
      B[0] = E, B[1] = p, B[2] = P, B[3] = L, B[4] = v, B[5] = D, B[6] = x2, B[7] = u2, B[8] = d2, B[9] = b2, B[10] = K2;
    } else L = B[3], v = B[4], D = B[5], x2 = B[6], u2 = B[7], d2 = B[8], b2 = B[9], K2 = B[10];
    const T = !D && p < 0.5;
    const w = s >= 0.5;
    let C;
    if (B[11] !== L || B[12] !== T || B[13] !== w || B[14] !== x2) C = (0, import_chunk_a46xeenj.e)(L, { color: x2, dimColor: T, bold: w, children: CWr }), B[11] = L, B[12] = T, B[13] = w, B[14] = x2, B[15] = C;
    else C = B[15];
    let _;
    if (B[16] !== v || B[17] !== C || B[18] !== u2 || B[19] !== d2 || B[20] !== b2 || B[21] !== K2) _ = (0, import_chunk_a46xeenj.e)(v, { "aria-hidden": u2, flexWrap: d2, height: b2, width: K2, children: C }), B[16] = v, B[17] = C, B[18] = u2, B[19] = d2, B[20] = b2, B[21] = K2, B[22] = _;
    else _ = B[22];
    return _;
  }
  let x;
  if (B[23] === import_chunk_w1d7ygsk.R) x = (0, import_chunk_gdmb039p.BZe)(), B[23] = x;
  else x = B[23];
  let et = x, q = M > 0, u;
  if (B[24] !== q || B[25] !== l || B[26] !== M || B[27] !== S || B[28] !== s) u = q ? tt(S, l, "error", M) : s > 0 ? tt(S, l, "warning", s) : l, B[24] = q, B[25] = l, B[26] = M, B[27] = S, B[28] = s, B[29] = u;
  else u = B[29];
  let j = u;
  const d = !q && s >= 0.5, b = et[t % et.length];
  let K;
  if (B[30] !== j || B[31] !== d || B[32] !== b) K = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: d, color: j, children: b }) }), B[30] = j, B[31] = d, B[32] = b, B[33] = K;
  else K = B[33];
  return K;
}
(0, import_chunk_bs4h6795.G)();
function Mwn(n) {
  let h = (0, import_chunk_sng02qpc.k)(17), { command: t, args: l, color: i } = n, m = l === void 0 ? t : `${t} ${l}`, c;
  if (h[0] === import_chunk_w1d7ygsk.R) c = (0, import_chunk_bzyb60p0.JMn)(), h[0] = c;
  else c = h[0];
  let M = c, [s, O] = (0, import_chunk_bs4h6795.y)(false), A = (0, import_chunk_3j73ps7b.Ab)();
  if (!M) {
    let S2;
    if (h[1] !== i || h[2] !== m) S2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { underline: true, color: i, children: ["/", m] }), h[1] = i, h[2] = m, h[3] = S2;
    else S2 = h[3];
    return S2;
  }
  let S;
  if (h[4] !== t || h[5] !== m || h[6] !== A) S = (p) => {
    if (A(p)) {
      return;
    }
    (0, import_chunk_y53wbr8a.a)("tengu_slash_link_clicked", { command: (0, import_chunk_78g0060s.f)(t) }), M(m, { kind: "human" });
  }, h[4] = t, h[5] = m, h[6] = A, h[7] = S;
  else S = h[7];
  let P, E;
  if (h[8] === import_chunk_w1d7ygsk.R) P = () => O(true), E = () => O(false), h[8] = P, h[9] = E;
  else P = h[8], E = h[9];
  let B;
  if (h[10] !== i || h[11] !== s || h[12] !== m) B = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { underline: true, bold: s, color: i, children: ["/", m] }), h[10] = i, h[11] = s, h[12] = m, h[13] = B;
  else B = h[13];
  let L;
  if (h[14] !== S || h[15] !== B) L = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { onClick: S, onMouseEnter: P, onMouseLeave: E, children: B }), h[14] = S, h[15] = B, h[16] = L;
  else L = h[16];
  return L;
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var MZe = (0, import_chunk_bs4h6795.an)(false), o7n = (0, import_chunk_bs4h6795.an)(false);
var m_e = (0, import_chunk_bs4h6795.an)(false);
function HZe(n) {
  let E = (0, import_chunk_sng02qpc.k)(26), { tone: t, text: l, detail: i, subLines: m, linkify: h } = n, c = h ? import_chunk_8dkwjpxx.I$ : import_chunk_8bkqeb5d.r, s = (0, import_chunk_bs4h6795.be)(o7n) ? " " : n.state === "live" && !n.reducedMotion ? import_chunk_xcgcdx61.UMo[n.frame % import_chunk_xcgcdx61.UMo.length] : import_chunk_xcgcdx61.uEe, O = t === "gold" ? "warning" : t === "red" ? "error" : void 0, A = t === "red";
  const S = t === "dim", p = t === "red" ? "error:" : t === "gold" ? "warning:" : void 0, P = t === "dim";
  let B;
  if (E[0] !== s || E[1] !== O || E[2] !== S || E[3] !== p || E[4] !== P) B = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { "aria-hidden": S, "aria-label": p, italic: true, color: O, dimColor: P, children: [s, " "] }), E[0] = s, E[1] = O, E[2] = S, E[3] = p, E[4] = P, E[5] = B;
  else B = E[5];
  const L = A ? "error" : void 0, v = !A;
  let D;
  if (E[6] !== c || E[7] !== l) D = (0, import_chunk_a46xeenj.e)(c, { children: l }), E[6] = c, E[7] = l, E[8] = D;
  else D = E[8];
  let x;
  if (E[9] !== c || E[10] !== i) x = i !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 ", (0, import_chunk_a46xeenj.e)(c, { children: i })] }), E[9] = c, E[10] = i, E[11] = x;
  else x = E[11];
  let u;
  if (E[12] !== L || E[13] !== v || E[14] !== D || E[15] !== x) u = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { italic: true, color: L, dimColor: v, children: [D, x] }), E[12] = L, E[13] = v, E[14] = D, E[15] = x, E[16] = u;
  else u = E[16];
  let d;
  if (E[17] !== c || E[18] !== m) d = m?.map((b, K) => (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.e)(c, { children: b }) }, K)), E[17] = c, E[18] = m, E[19] = d;
  else d = E[19];
  let W;
  if (E[20] !== u || E[21] !== d) W = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexGrow: 1, children: [u, d] }), E[20] = u, E[21] = d, E[22] = W;
  else W = E[22];
  let T;
  if (E[23] !== W || E[24] !== B) T = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [B, W] }), E[23] = W, E[24] = B, E[25] = T;
  else T = E[25];
  return T;
}
var Ot = 150;
function s7n(n) {
  let O = (0, import_chunk_sng02qpc.k)(8), { tone: t, text: l } = n, i = (0, import_chunk_0t7st4dz.Kh)(), m = (0, import_chunk_8bkqeb5d.Xe)(), h = i || m, [c, M] = (0, import_chunk_8bkqeb5d.gc)(h ? null : Ot);
  const s = Math.floor(M / Ot);
  let A;
  if (O[0] !== h || O[1] !== s || O[2] !== l || O[3] !== t) A = (0, import_chunk_a46xeenj.e)(HZe, { state: "live", tone: t, text: l, linkify: false, frame: s, reducedMotion: h }), O[0] = h, O[1] = s, O[2] = l, O[3] = t, O[4] = A;
  else A = O[4];
  let S;
  if (O[5] !== c || O[6] !== A) S = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: c, flexDirection: "column", children: A }), O[5] = c, O[6] = A, O[7] = S;
  else S = O[7];
  return S;
}
function vO(n) {
  let t = (0, import_chunk_ffh9jsxe.bve)(), l = (0, import_chunk_qnwkdfwp.y9t)()?.isQueued === true;
  return !n && !t && !l && (0, import_chunk_8ym8b8h9._h)();
}
function E2s(n) {
  let t = vO(n), l = (0, import_chunk_qnwkdfwp.y9t)();
  return l?.isQueued === true ? l.noticeSystemLines : t;
}
(0, import_chunk_bs4h6795.G)();
function i7n(n) {
  let p = (0, import_chunk_sng02qpc.k)(52), { message: t, mode: l, messageColor: i, glimmerIndex: m, flashOpacity: h, shimmerColor: c, stalledIntensity: M, thinkingIntensity: s } = n, O = M === void 0 ? 0 : M, A = s === void 0 ? 0 : s, S = (0, import_chunk_3jkk3v3z.mC)(), P;
  if (p[0] !== t) {
    P = [];
    for (const { segment: E } of (0, import_chunk_em52jhgp.ul)().segment(t)) P.push({ segment: E, width: (0, import_chunk_mgh1y10w.oe)(E) });
    p[0] = t, p[1] = P;
  } else P = p[1];
  let B;
  if (p[2] !== t) B = (0, import_chunk_mgh1y10w.oe)(t), p[2] = t, p[3] = B;
  else B = p[3];
  let L;
  if (p[4] !== P || p[5] !== B) L = { segments: P, messageWidth: B }, p[4] = P, p[5] = B, p[6] = L;
  else L = p[6];
  let { segments: v, messageWidth: D } = L;
  if (!t) {
    return null;
  }
  let x = m - 1, u = m + 1, d;
  if (p[7] !== i || p[8] !== O || p[9] !== S || p[10] !== A) d = O > 0 ? tt(S, i, "error", O) : A > 0 ? tt(S, i, "warning", A) : void 0, p[7] = i, p[8] = O, p[9] = S, p[10] = A, p[11] = d;
  else d = p[11];
  let b = d, K;
  if (p[12] !== h || p[13] !== i || p[14] !== D || p[15] !== l || p[16] !== c || p[17] !== u || p[18] !== x || p[19] !== S || p[20] !== b) K = b ?? (l === "tool-use" ? tt(S, i, c, h) : x >= D || u < 0 ? i : void 0), p[12] = h, p[13] = i, p[14] = D, p[15] = l, p[16] = c, p[17] = u, p[18] = x, p[19] = S, p[20] = b, p[21] = K;
  else K = p[21];
  let W = K;
  if (W !== void 0) {
    let T2;
    if (p[22] !== t || p[23] !== W) T2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: W, children: t }), p[22] = t, p[23] = W, p[24] = T2;
    else T2 = p[24];
    const w2 = b ?? i;
    let C2;
    if (p[25] !== w2) C2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: w2, children: " " }), p[25] = w2, p[26] = C2;
    else C2 = p[26];
    let _2;
    if (p[27] !== T2 || p[28] !== C2) _2 = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [T2, C2] }), p[27] = T2, p[28] = C2, p[29] = _2;
    else _2 = p[29];
    return _2;
  }
  let et = Math.max(0, x), q, j, U;
  if (p[30] !== et || p[31] !== v || p[32] !== u) {
    let F = 0;
    j = "";
    U = "";
    q = "";
    for (const { segment: Q, width: J } of v) {
      if (F + J <= et) j = j + Q;
      else if (F > u) q = q + Q;
      else U = U + Q;
      F = F + J;
    }
    p[30] = et, p[31] = v, p[32] = u, p[33] = q, p[34] = j, p[35] = U;
  } else q = p[33], j = p[34], U = p[35];
  let T;
  if (p[36] !== j || p[37] !== i) T = j && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: i, children: j }), p[36] = j, p[37] = i, p[38] = T;
  else T = p[38];
  let w;
  if (p[39] !== U || p[40] !== c) w = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: c, children: U }), p[39] = U, p[40] = c, p[41] = w;
  else w = p[41];
  let C;
  if (p[42] !== q || p[43] !== i) C = q && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: i, children: q }), p[42] = q, p[43] = i, p[44] = C;
  else C = p[44];
  let _;
  if (p[45] !== i) _ = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: i, children: " " }), p[45] = i, p[46] = _;
  else _ = p[46];
  let ot;
  if (p[47] !== _ || p[48] !== T || p[49] !== w || p[50] !== C) ot = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [T, w, C, _] }), p[47] = _, p[48] = T, p[49] = w, p[50] = C, p[51] = ot;
  else ot = p[51];
  return ot;
}
(0, import_chunk_bs4h6795.G)();
function Le() {
  return { toolWindowStart: null, toolWindowEnd: null, thinkingBurstStart: null, wasThinking: false };
}
function Ne(n, t) {
  let { toolWindowStart: l, toolWindowEnd: i, thinkingBurstStart: m } = n;
  if (t.hasActiveTools) {
    if (t.toolWindowStartedAt !== null) l = Math.min(t.toolWindowStartedAt, t.now);
    else if (l === null || i !== null) l = t.now;
    i = null;
  } else if (l !== null && i === null) i = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) l = null, i = null;
  if (t.isThinking) {
    if (!n.wasThinking) m = t.now;
  } else m = null;
  return { toolWindowStart: l, toolWindowEnd: i, thinkingBurstStart: m, wasThinking: t.isThinking };
}
function Oe(n, t) {
  if (t.showToolCallTimer && t.hasActiveTools && n.toolWindowStart !== null) {
    let l = t.now - n.toolWindowStart;
    if (l >= 2e3) return { kind: "tool-running", toolMs: l };
  }
  if (t.outputLimitRecovery !== null && !t.hasActiveTools) return { kind: "recovering", recovery: t.outputLimitRecovery };
  if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && n.toolWindowStart !== null && n.toolWindowEnd !== null) {
    let l = n.toolWindowEnd - n.toolWindowStart;
    if (l >= 2e3) return { kind: "tool-done", toolMs: l };
  }
  if (t.thinkingStatus === "thinking" && !t.hasActiveTools) return { kind: "thinking", thinkingMs: n.thinkingBurstStart !== null ? t.now - n.thinkingBurstStart : 0 };
  if (typeof t.thinkingStatus === "number") return { kind: "thought-for", thoughtMs: t.thinkingStatus };
  return { kind: "none" };
}
function Pe(n, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || n.thinkingBurstStart === null) return 0;
  let l = t.now - n.thinkingBurstStart;
  return Math.min(Math.max((l - 1e4) / 1e4, 0), 1);
}
(0, import_chunk_bs4h6795.G)();
function We(n, t, l = false, i = false, m) {
  let h = (0, import_chunk_bs4h6795.I)(n), c = (0, import_chunk_bs4h6795.I)(t), M = (0, import_chunk_bs4h6795.I)(0), s = (0, import_chunk_bs4h6795.I)(n), O = (0, import_chunk_bs4h6795.I)(m);
  if (t > c.current || O.current !== m) O.current = m, h.current = n, c.current = t, M.current = 0, s.current = n;
  else if (t < c.current) c.current = t;
  let A;
  if (l) A = 0, h.current = n;
  else A = n - h.current;
  let S = A > 1e4 && !l, p = S ? Math.min((A - 1e4) / 1e4, 1) : 0;
  if (!i && (p > 0 || M.current > 0)) {
    let E = n - s.current;
    if (E >= 50) {
      let B = Math.floor(E / 50), L = M.current;
      for (let v = 0; v < B; v++) {
        let D = p - L;
        if (Math.abs(D) < 0.01) {
          L = p;
          break;
        }
        L += D * 0.1;
      }
      M.current = L, s.current = n;
    }
  } else M.current = p, s.current = n;
  let P = i ? p : M.current;
  return { isStalled: S, stalledIntensity: P, timeSinceLastToken: A };
}
var bn = [1e4, 45e3, 3e5], xn = 2e3, Mn = 2e3, _n = 200, Jt = 10, In = 1e4, vn = 2e4, En = 3e4, Bn = 45e3;
function An(n) {
  let t = (0, import_chunk_gdmb039p.PIt)(n, Mn);
  return Math.round(t * ((0, import_chunk_gdmb039p.T7n)().length - 1));
}
function Ln(n) {
  return `thought for ${Math.max(1, Math.round(n / 1e3))}s`;
}
function Nn({ attempt: n, limit: t }) {
  return n > 1 ? `picking the thought back up (${n} of ${t})` : "picking the thought back up";
}
function On(n) {
  if (n >= Bn) return "deep in thought";
  if (n >= En) return "thinking some more";
  if (n >= vn) return "thinking more";
  if (n >= In) return "still thinking";
  return "thinking";
}
function Pn(n) {
  return (0, import_chunk_gdmb039p.Wse)((Math.sin(n / 1e3 * Math.PI) + 1) / 2);
}
function De({ mode: n, reducedMotion: t, hasActiveTools: l, toolWindowStartedAt: i, responseLength: m, message: h, overrideColor: c, loadingStartTime: M, totalPausedMs: s, pauseStartTime: O, thinkingStatus: A, effortSuffix: S, isCompacting: p, compactingStartTime: P, isResponseHeld: E = false, showToolCallTimer: B, outputLimitRecovery: L = null, agentId: v, glimmerParked: D = false }) {
  let [x, u] = (0, import_chunk_8bkqeb5d.gc)(t ? null : n === "requesting" && !D ? 50 : 100), d = Date.now(), K = p && P !== null ? Math.max(0, d - P) : O !== null ? O - M - s : d - M - s, W = (0, import_chunk_bs4h6795.I)(Le()), T = { now: d, isThinking: n === "thinking", hasActiveTools: l, toolWindowStartedAt: i !== null && i >= M ? i : null, thinkingStatus: A, showToolCallTimer: B, outputLimitRecovery: L };
  W.current = Ne(W.current, T);
  let w = Oe(W.current, T), C = Pe(W.current, T), _ = m, et = l || n === "thinking" || p && n !== "responding" || E || O !== null, { isStalled: q, stalledIntensity: j, timeSinceLastToken: U } = We(u, _, et, t, v), F = (0, import_chunk_bs4h6795.I)(/* @__PURE__ */ new Set()), Q = (0, import_chunk_bs4h6795.I)(0), J = (0, import_chunk_bs4h6795.I)(v);
  if (J.current !== v) J.current = v, F.current = /* @__PURE__ */ new Set(), Q.current = 0;
  if (U === 0) {
    if (F.current.size > 0) (0, import_chunk_y53wbr8a.a)("tengu_spinner_stall_cleared", { max_stall_ms: Math.round(Q.current), mode: (0, import_chunk_78g0060s.f)(n), override_color: c != null, response_length: _, thresholds_fired: F.current.size }), F.current = /* @__PURE__ */ new Set(), Q.current = 0;
  } else {
    if (U > Q.current) Q.current = U;
    for (let z of bn) if (U >= z && !F.current.has(z)) F.current.add(z), (0, import_chunk_y53wbr8a.a)("tengu_spinner_stalled_ui", { threshold_ms: z, mode: (0, import_chunk_78g0060s.f)(n), override_color: c != null, time_since_last_token_ms: Math.round(U), response_length: _, render_loop_dark: U - z > 5e3 });
  }
  let ot = t ? 0 : An(u), X = n === "requesting" ? 50 : _n, St = (0, import_chunk_bs4h6795.re)(() => (0, import_chunk_mgh1y10w.oe)(h), [h]), Rt = St + 2 * Jt, rt = Math.floor(u / X), dt = t ? -100 : q ? -100 : n === "requesting" ? rt % Rt - Jt : St + Jt - rt % Rt, wt = t ? 0 : n === "tool-use" ? Pn(u) : 0, Y = (0, import_chunk_bs4h6795.I)(_), V = (0, import_chunk_bs4h6795.I)(u), st = (0, import_chunk_bs4h6795.I)(v);
  if (st.current !== v || Math.abs(_ - Y.current) > xn) st.current = v, Y.current = _, V.current = u;
  if (t) Y.current = _, V.current = u;
  else {
    let z = Math.floor((u - V.current) / 50);
    if (z > 0) {
      V.current += z * 50;
      for (let At = 0; At < z; At++) {
        let mt = _ - Y.current;
        if (mt === 0) break;
        let kt = Math.abs(mt), ut;
        if (kt < 70) ut = 3;
        else if (kt < 200) ut = Math.max(8, Math.ceil(kt * 0.15));
        else ut = 50;
        Y.current = mt > 0 ? Math.min(Y.current + ut, _) : Math.max(Y.current - ut, _);
      }
    }
  }
  let Dt = Y.current, Ct = Math.round(Dt / 4), nt = (0, import_chunk_bs4h6795.I)(0), ft = (0, import_chunk_bs4h6795.I)(u);
  if (n !== "thinking" || l) nt.current = 0, ft.current = u;
  else if (!t && (C > 0 || nt.current > 0)) {
    let z = u - ft.current;
    if (z >= 50) {
      let At = Math.floor(z / 50), mt = nt.current;
      for (let kt = 0; kt < At; kt++) {
        let ut = C - mt;
        if (Math.abs(ut) < 0.01) {
          mt = C;
          break;
        }
        mt += ut * 0.1;
      }
      nt.current = mt, ft.current = u;
    }
  } else nt.current = C, ft.current = u;
  let gt = t ? C : nt.current, lt = (0, import_chunk_f64qna2j.Cn)(K), It = (0, import_chunk_mgh1y10w.oe)(lt), pt = Ct, vt = (0, import_chunk_f64qna2j.Ec)(pt), Et = `${import_chunk_7r4ehpnw.xe.arrowDown} ${vt} tokens`, Bt = (0, import_chunk_mgh1y10w.oe)(Et), bt = w.kind === "thinking" ? On(w.thinkingMs) : "thinking", Z;
  switch (w.kind) {
    case "tool-running":
      Z = `running tool for ${(0, import_chunk_f64qna2j.Cn)(w.toolMs)}`;
      break;
    case "tool-done":
      Z = `ran tool for ${(0, import_chunk_f64qna2j.Cn)(w.toolMs)}`;
      break;
    case "recovering":
      Z = Nn(w.recovery);
      break;
    case "thinking":
      Z = `${bt}${S}`;
      break;
    case "thought-for":
      Z = Ln(w.thoughtMs);
      break;
    case "none":
      Z = null;
      break;
  }
  let xt = Z ? (0, import_chunk_mgh1y10w.oe)(Z) : 0;
  return { viewportRef: x, time: u, elapsedMs: K, frame: ot, glimmerIndex: dt, flashOpacity: wt, stalledIntensity: j, thinkingIntensity: gt, statusText: w, progressiveThinkingBase: bt, thinkingText: Z, thinkingWidth: xt, timerText: lt, timerWidth: It, totalTokens: pt, tokenCount: vt, tokensWidth: Bt, glimmerMessageWidth: St };
}
function Oya(n) {
  let [t, l] = (0, import_chunk_bs4h6795.y)(null), i = (0, import_chunk_bs4h6795.I)(null), m = (0, import_chunk_bs4h6795.I)([]), h = (0, import_chunk_8bkqeb5d.ir)();
  return (0, import_chunk_bs4h6795.H)(() => {
    if (n === "thinking") {
      if (i.current === null) {
        for (let c of m.current) c();
        m.current = [], i.current = Date.now(), l("thinking");
      }
    } else if (i.current !== null) {
      let c = Date.now() - i.current, M = Math.max(0, 2e3 - c);
      i.current = null;
      let s = () => {
        l(c), m.current.push(h.setTimeout(() => l(null), 2e3));
      };
      if (M > 0) m.current.push(h.setTimeout(s, M));
      else s();
    }
  }, [n, h]), (0, import_chunk_bs4h6795.H)(() => () => {
    for (let c of m.current) c();
    m.current = [];
  }, []), t;
}
var Wn = (0, import_chunk_mgh1y10w.oe)(" \xB7 "), Ge = (0, import_chunk_mgh1y10w.oe)("thinking"), Dn = 16e3, $e = 3e3, Gn = 2;
function $n(n, t, l) {
  let i = (0, import_chunk_gdmb039p.XK)(l.inactive), m = (0, import_chunk_gdmb039p.XK)(l.inactiveShimmer), h = (0, import_chunk_gdmb039p.XK)(l.warning);
  if (!i || !m || !h) return t > 0.5 ? "warning" : void 0;
  let c = (n - $e) / 1e3, M = n < $e ? 0 : (Math.sin(c * Math.PI * 2 / Gn) + 1) / 2, s = (0, import_chunk_gdmb039p.$D)(i, m, (0, import_chunk_gdmb039p.Wse)(M));
  return (0, import_chunk_gdmb039p.dH)(t > 0 ? (0, import_chunk_gdmb039p.$D)(s, h, (0, import_chunk_gdmb039p.Wse)(t)) : s);
}
function Iya({ mode: n, reducedMotion: t, hasActiveTools: l, toolWindowStartedAt: i, responseLengthRef: m, message: h, messageColor: c, shimmerColor: M, overrideColor: s, loadingStartTimeRef: O, totalPausedMsRef: A, pauseStartTimeRef: S, spinnerSuffix: p, verbose: P, columns: E, thinkingStatus: B, effortSuffix: L, isCompacting: v = false, compactingStartTime: D = null, isResponseHeld: x = false, showToolCallTimer: u = false, retryStatus: d = null, outputLimitRecovery: b = null, agentId: K }) {
  let W = De({ mode: n, reducedMotion: t, hasActiveTools: l, toolWindowStartedAt: i, responseLength: m.current, message: h, overrideColor: s, loadingStartTime: O.current, totalPausedMs: A.current, pauseStartTime: S.current, thinkingStatus: B, effortSuffix: L, isCompacting: v, compactingStartTime: D, isResponseHeld: x, showToolCallTimer: u, outputLimitRecovery: b, agentId: K }), T = (0, import_chunk_3jkk3v3z.mC)(), w = (0, import_chunk_8bkqeb5d.Xe)(), C = vO(P), { viewportRef: _, time: et, elapsedMs: q, frame: j, glimmerIndex: U, flashOpacity: F, stalledIntensity: Q, thinkingIntensity: J, statusText: ot, progressiveThinkingBase: X, timerText: St, timerWidth: Rt, totalTokens: rt, tokenCount: dt, tokensWidth: wt, glimmerMessageWidth: Y } = W, { thinkingText: V, thinkingWidth: st } = W, Dt = Y + 2, Ct = Wn, nt = V !== null, ft = P || nt || v || rt > 0 || q > Dn || Boolean(p), gt = E - Dt - 5, lt = nt && gt > st;
  if (!lt && nt && ot.kind === "thinking" && (L || X !== "thinking")) {
    if (gt > Ge) V = "thinking", st = Ge, lt = true;
  }
  let It = lt ? st + Ct : 0, pt = ft && gt > It + Rt, vt = It + (pt ? Rt + Ct : 0), Et = ft && rt > 0 && gt > vt + wt, Bt = lt && ot.kind === "thinking" && !p && !pt && !Et, bt = $n(et, J, T), Z = J > 0 ? "warning" : void 0, xt = [...p ? [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: p }, "suffix")] : [], ...!w && pt ? [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: St }, "elapsedTime")] : [], ...!w && Et ? [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [(0, import_chunk_a46xeenj.e)(Ve, { mode: n }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [dt, " tokens"] })] }, "tokens")] : [], ...!w && lt && V ? [ot.kind === "thinking" && !t ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: !bt, color: bt, children: Bt ? `(${V})` : V }, "thinking") : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: !Z, color: Z, children: V }, "thinking")] : []], z = xt.length > 0 ? Bt ? (0, import_chunk_a46xeenj.e)(import_chunk_wvchre07.it, { children: xt }) : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "(" }), (0, import_chunk_a46xeenj.e)(import_chunk_wvchre07.it, { children: xt }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ")" })] }) : null;
  if (v && d === null && C) return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: _, flexDirection: "column", marginTop: 1, width: "100%", children: (0, import_chunk_a46xeenj.e)(s7n, { tone: "dim", text: (0, import_chunk_7cfjrnwy.Lm)(h, "\u2026") }) });
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: _, flexDirection: "column", width: "100%", children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "row", flexWrap: "wrap", marginTop: 1, width: "100%", children: d ? (0, import_chunk_a46xeenj.e)(_9t, { status: d, columns: E }) : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(Omt, { frame: j, messageColor: c, stalledIntensity: s ? 0 : Q, thinkingIntensity: s ? 0 : J, reducedMotion: t, time: et }), (0, import_chunk_a46xeenj.e)(i7n, { message: h, mode: n, messageColor: c, glimmerIndex: U, flashOpacity: F, shimmerColor: M, stalledIntensity: s ? 0 : Q, thinkingIntensity: s ? 0 : J }), z] }) }) });
}
function _9t(n) {
  let s = (0, import_chunk_sng02qpc.k)(68), { status: t, columns: l } = n, i = (0, import_chunk_8bkqeb5d.Xe)(), [m, , h] = (0, import_chunk_8bkqeb5d.DF)(), [c, M] = (0, import_chunk_bs4h6795.y)(0), O;
  if (s[0] !== h) O = () => {
    if (h()) M(Date.now());
  }, s[0] = h, s[1] = O;
  else O = s[1];
  (0, import_chunk_8bkqeb5d.Al)(O, i ? null : 1e3);
  let A = Math.min(t.deadline - c, t.deadline - Date.now()), S = Math.max(0, Math.ceil(A / 1e3)) * 1e3, p;
  if (s[2] !== t.kind) p = t.kind === "low_priority_waiting" ? (0, import_chunk_gq1dr8pm.NAe)().waitBanner : null, s[2] = t.kind, s[3] = p;
  else p = s[3];
  let P = p;
  const E = S >= 3e5;
  let B;
  if (s[4] !== S || s[5] !== E) B = (0, import_chunk_f64qna2j.Cn)(S, { mostSignificantOnly: E }), s[4] = S, s[5] = E, s[6] = B;
  else B = s[6];
  let L = B, v;
  if (s[7] === import_chunk_w1d7ygsk.R) v = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: import_chunk_xcgcdx61.SD }), s[7] = v;
  else v = s[7];
  let D;
  if (s[8] !== m) D = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: m, "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: v }), s[8] = m, s[9] = D;
  else D = s[9];
  let x = D;
  if (t.kind === "stalled") {
    const u2 = ` \xB7 will retry in ${L} \xB7 check your network`;
    let d2;
    if (s[10] !== u2) d2 = (0, import_chunk_a46xeenj.e)(at, { message: "Waiting for API response", children: u2 }), s[10] = u2, s[11] = d2;
    else d2 = s[11];
    let b2;
    if (s[12] !== x || s[13] !== d2) b2 = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [x, d2] }), s[12] = x, s[13] = d2, s[14] = b2;
    else b2 = s[14];
    return b2;
  }
  if (t.kind === "low_priority_waiting") {
    let K = ` \xB7 next try in ${L} \xB7 attempt ${t.attempt} \xB7 esc to interrupt`;
    let W = Math.max(10, l - 2 - (0, import_chunk_mgh1y10w.oe)(K) - 2);
    let u2;
    if (s[15] === import_chunk_w1d7ygsk.R) u2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: import_chunk_xcgcdx61.SD }), s[15] = u2;
    else u2 = s[15];
    let d2;
    if (s[16] !== m) d2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: m, "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: u2 }), s[16] = m, s[17] = d2;
    else d2 = s[17];
    const b2 = P ?? "";
    let T2;
    if (s[18] !== W || s[19] !== b2) T2 = (0, import_chunk_f64qna2j.Tt)(b2, W), s[18] = W, s[19] = b2, s[20] = T2;
    else T2 = s[20];
    let w2;
    if (s[21] !== T2 || s[22] !== K) w2 = (0, import_chunk_a46xeenj.e)(at, { color: "warning", message: T2, children: K }), s[21] = T2, s[22] = K, s[23] = w2;
    else w2 = s[23];
    let C;
    if (s[24] !== w2 || s[25] !== d2) C = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [d2, w2] }), s[24] = w2, s[25] = d2, s[26] = C;
    else C = s[26];
    return C;
  }
  if (t.kind === "auto_mode_unavailable") {
    const u2 = ` \xB7 next try in ${L} \xB7 attempt ${t.attempt}/${t.maxRetries} \xB7 `;
    let d2;
    if (s[27] === import_chunk_w1d7ygsk.R) d2 = (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "interrupt", format: { keyCase: "lower" } }), s[27] = d2;
    else d2 = s[27];
    let b2;
    if (s[28] !== u2) b2 = (0, import_chunk_a46xeenj.o)(at, { message: "Auto mode check unavailable", children: [u2, d2] }), s[28] = u2, s[29] = b2;
    else b2 = s[29];
    let T2;
    if (s[30] !== x || s[31] !== b2) T2 = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [x, b2] }), s[30] = x, s[31] = b2, s[32] = T2;
    else T2 = s[32];
    return T2;
  }
  let _ = t.error.noResponse;
  if (_) {
    let et = t.attempt >= t.maxRetries;
    let u2;
    if (s[33] !== _.retryWaitMs) u2 = (0, import_chunk_f64qna2j.vy)(_.retryWaitMs), s[33] = _.retryWaitMs, s[34] = u2;
    else u2 = s[34];
    let q = u2;
    let j = et ? ` \xB7 retrying once, waiting up to ${q}` : ` \xB7 retrying, waiting up to ${q} \xB7 attempt ${t.attempt}/${t.maxRetries}`;
    let U = Math.max(10, l - 2 - (0, import_chunk_mgh1y10w.oe)(j) - 2);
    let d2;
    if (s[35] !== _.waitedMs) d2 = (0, import_chunk_f64qna2j.vy)(_.waitedMs), s[35] = _.waitedMs, s[36] = d2;
    else d2 = s[36];
    const b2 = `No response from the API after ${d2}`;
    let T2;
    if (s[37] !== U || s[38] !== b2) T2 = (0, import_chunk_f64qna2j.Tt)(b2, U), s[37] = U, s[38] = b2, s[39] = T2;
    else T2 = s[39];
    let w2;
    if (s[40] !== T2) w2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: T2 }), s[40] = T2, s[41] = w2;
    else w2 = s[41];
    let C;
    if (s[42] !== j) C = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: j }), s[42] = j, s[43] = C;
    else C = s[43];
    let F;
    if (s[44] !== w2 || s[45] !== C) F = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [w2, C] }), s[44] = w2, s[45] = C, s[46] = F;
    else F = s[46];
    let Q;
    if (s[47] === import_chunk_w1d7ygsk.R) Q = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "A proxy or gateway that buffers streaming responses can cause this \xB7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait" }), s[47] = Q;
    else Q = s[47];
    let J;
    if (s[48] !== F) J = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexBasis: 0, flexDirection: "column", flexGrow: 1, flexShrink: 1, children: [F, Q] }), s[48] = F, s[49] = J;
    else J = s[49];
    let ot;
    if (s[50] !== x || s[51] !== J) ot = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [x, J] }), s[50] = x, s[51] = J, s[52] = ot;
    else ot = s[52];
    return ot;
  }
  let X = t.error.rateLimits, u;
  if (s[53] !== X) u = X?.resetsAt ? ` (${(0, import_chunk_f64qna2j.X0)(X.resetsAt)})` : "", s[53] = X, s[54] = u;
  else u = s[54];
  let rt = ` \xB7 ${S === 0 ? "retrying\u2026" : `retrying in ${L}${u}`} \xB7 attempt ${t.attempt}/${t.maxRetries}`, dt = t.attempt >= Math.min(3, t.maxRetries) || t.error.isNetworkDown || t.error.connection?.isSSLError || X, d;
  if (s[55] !== X || s[56] !== dt || s[57] !== t.error.formatted) {
    let wt = X?.rateLimitType ? (0, import_chunk_cy0ck7w2.nyi)(X.rateLimitType) : "usage limit";
    d = !dt ? import_chunk_9rvw567f.ajr : X ? `${wt[0]?.toUpperCase()}${wt.slice(1)} reached` : t.error.formatted;
    s[55] = X, s[56] = dt, s[57] = t.error.formatted, s[58] = d;
  } else d = s[58];
  let Y = d, V = Math.max(10, l - 2 - (0, import_chunk_mgh1y10w.oe)(rt) - 2), b;
  if (s[59] !== V || s[60] !== Y) b = (0, import_chunk_f64qna2j.Tt)(Y, V), s[59] = V, s[60] = Y, s[61] = b;
  else b = s[61];
  let st = b, T;
  if (s[62] !== rt || s[63] !== st) T = (0, import_chunk_a46xeenj.e)(at, { message: st, children: rt }), s[62] = rt, s[63] = st, s[64] = T;
  else T = s[64];
  let w;
  if (s[65] !== x || s[66] !== T) w = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [x, T] }), s[65] = x, s[66] = T, s[67] = w;
  else w = s[67];
  return w;
}
function at(n) {
  let h = (0, import_chunk_sng02qpc.k)(6), { message: t, color: l, children: i } = n, m = l === void 0 ? "error" : l, c;
  if (h[0] !== m || h[1] !== t) c = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: m, children: t }), h[0] = m, h[1] = t, h[2] = c;
  else c = h[2];
  let M;
  if (h[3] !== i || h[4] !== c) M = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexBasis: 0, flexGrow: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [c, i] }) }), h[3] = i, h[4] = c, h[5] = M;
  else M = h[5];
  return M;
}
function Ve(n) {
  let l = (0, import_chunk_sng02qpc.k)(2), { mode: t } = n;
  switch (t) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking": {
      let i;
      if (l[0] === import_chunk_w1d7ygsk.R) i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, dimColor: true, children: import_chunk_7r4ehpnw.xe.arrowDown }) }), l[0] = i;
      else i = l[0];
      return i;
    }
    case "requesting": {
      let i;
      if (l[1] === import_chunk_w1d7ygsk.R) i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, dimColor: true, children: import_chunk_7r4ehpnw.xe.arrowUp }) }), l[1] = i;
      else i = l[1];
      return i;
    }
  }
}
