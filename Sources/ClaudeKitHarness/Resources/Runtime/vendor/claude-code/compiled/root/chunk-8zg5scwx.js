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
var chunk_8zg5scwx_exports = {};
__export(chunk_8zg5scwx_exports, {
  PZe: () => PZe,
  RIe: () => RIe,
  _2s: () => _2s,
  m9t: () => m9t,
  oKe: () => oKe,
  p9t: () => p9t,
  xIe: () => xIe,
  xZe: () => xZe
});
module.exports = __toCommonJS(chunk_8zg5scwx_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_3j73ps7b = require("/$bunfs/root/chunk-3j73ps7b.js");
var import_chunk_6qkpxgbg = require("/$bunfs/root/chunk-6qkpxgbg.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_v9dxspne = require("/$bunfs/root/chunk-v9dxspne.js");
var import_chunk_g54xmq2r = require("/$bunfs/root/chunk-g54xmq2r.js");
var import_chunk_r95g2as8 = require("/$bunfs/root/chunk-r95g2as8.js");
var import_chunk_5yhrnn87 = require("/$bunfs/root/chunk-5yhrnn87.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var Te = /\s+/g;
function p9t(n) {
  let s = n.arrowedSuggestionId;
  return s != null && n.suggestions[n.selectedSuggestion]?.id === s ? s : null;
}
function Vt(n, s, t, i) {
  let c = (p) => n[p] ?? 1, a = (p) => {
    let d = p + 1, x = c(p);
    while (d < n.length && x + c(d) <= s) x += c(d), d++;
    return { start: p, end: d, usedRows: x };
  }, l = a(Math.max(0, Math.min(i, n.length - 1)));
  if (t >= l.end) l = a(t);
  else if (t < l.start) l = { start: t, end: t + 1, usedRows: c(t) };
  while (l.start > 0 && l.usedRows + c(l.start - 1) <= s) l.start--, l.usedRows += c(l.start);
  return a(l.start);
}
var Ht = 5, Ze = 30;
function ot(n) {
  if (n.startsWith("file-")) return "+";
  if (n.startsWith("mcp-resource-")) return import_chunk_xcgcdx61.tP;
  if (n.startsWith("mcp-template")) return import_chunk_xcgcdx61.tP;
  if (n.startsWith("agent-")) return "*";
  return "+";
}
function rt(n, s, t = false) {
  let i = n.toLowerCase();
  if (i.length !== n.length) return [];
  let c = i.indexOf(s);
  if (c !== -1) return $t(n, [[c, c + s.length]]);
  if (t) return [];
  let a = [], l = 0;
  for (let p of s) {
    let d = i.indexOf(p, l);
    if (d === -1) return [];
    let x = d + p.length, b = a.at(-1);
    if (b && b[1] === d) b[1] = x;
    else a.push([d, x]);
    l = x;
  }
  return $t(n, a);
}
function ee(n) {
  let p = (0, import_chunk_sng02qpc.k)(13), { text: s, query: t, color: i, isSelected: c, bold: a, contiguousOnly: l } = n, d, x;
  if (p[0] !== a || p[1] !== i || p[2] !== l || p[3] !== c || p[4] !== t || p[5] !== s) {
    x = import_chunk_w1d7ygsk.Mn;
    te: {
      let b = t ? rt(s, t, l) : [];
      if (b.length === 0) {
        const u = !c;
        let H;
        if (p[8] !== a || p[9] !== i || p[10] !== u || p[11] !== s) H = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: i, dimColor: u, bold: a, children: s }), p[8] = a, p[9] = i, p[10] = u, p[11] = s, p[12] = H;
        else H = p[12];
        x = H;
        break te;
      }
      let L = [];
      let F = (N, j, ne) => {
        if (N >= j) {
          return;
        }
        L.push((0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: i, dimColor: !ne && !c, bold: a || ne, children: s.slice(N, j) }, N));
      };
      let E = 0;
      for (const [fe, U] of b) F(E, fe, false), F(fe, U, true), E = U;
      F(E, s.length, false);
      d = (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: L });
    }
    p[0] = a, p[1] = i, p[2] = l, p[3] = c, p[4] = t, p[5] = s, p[6] = d, p[7] = x;
  } else d = p[6], x = p[7];
  if (x !== import_chunk_w1d7ygsk.Mn) return x;
  return d;
}
function Ee(n) {
  return n.startsWith("file-") || n.startsWith("mcp-resource-") || n.startsWith("mcp-template") || n.startsWith("agent-");
}
var It = (0, import_chunk_bs4h6795.dw)(function(s) {
  let u = (0, import_chunk_sng02qpc.k)(106), { item: t, maxColumnWidth: i, describedNameWidth: c, isSelected: a, allowWrap: l } = s, p = l === void 0 ? true : l, d = (0, import_chunk_6n6exvyx.qe)().columns, x = (0, import_chunk_8bkqeb5d.Xe)(), b = Ee(t.id), H;
  if (u[0] !== t.id) H = t.id.startsWith("emoji:"), u[0] = t.id, u[1] = H;
  else H = u[1];
  let te = H, L = x && !te ? "" : a ? `${import_chunk_7r4ehpnw.xe.pointer} ` : "  ", N = (0, import_chunk_mgh1y10w.oe)(L);
  if (b) {
    let j2;
    if (u[2] !== t.id) j2 = ot(t.id), u[2] = t.id, u[3] = j2;
    else j2 = u[3];
    let ne = j2;
    let F = a ? "suggestion" : void 0;
    let E = !a;
    let fe = t.id.startsWith("file-");
    let U = t.id.startsWith("mcp-resource-");
    let T2;
    if (u[4] !== t.id) T2 = t.id.startsWith("mcp-template-value::"), u[4] = t.id, u[5] = T2;
    else T2 = u[5];
    let Y = T2;
    let O = t.id.startsWith("mcp-template::");
    let q = t.description ? 3 : 0;
    let B;
    if (fe || O || Y) {
      let w3;
      if (u[6] !== t.description) w3 = t.description ? Math.min(20, (0, import_chunk_mgh1y10w.oe)(t.description)) : 0, u[6] = t.description, u[7] = w3;
      else w3 = u[7];
      let $e = w3;
      let z = d - N - 2 - 4 - q - $e;
      let R3;
      if (u[8] !== Y || u[9] !== t.displayText || u[10] !== z) R3 = Y ? (0, import_chunk_f64qna2j.Y1)(t.displayText, z) : (0, import_chunk_f64qna2j.Jc)(t.displayText, z), u[8] = Y, u[9] = t.displayText, u[10] = z, u[11] = R3;
      else R3 = u[11];
      B = R3;
    } else if (U) {
      let w3;
      if (u[12] !== t.displayText) w3 = (0, import_chunk_f64qna2j.Tt)(t.displayText, Ze), u[12] = t.displayText, u[13] = w3;
      else w3 = u[13];
      B = w3;
    } else B = t.displayText;
    let M = (0, import_chunk_mgh1y10w.oe)(B);
    let S = x ? M : Math.max(M, Math.min(c, Math.floor(d * 0.4)));
    let w2;
    if (u[14] !== x || u[15] !== S || u[16] !== M || u[17] !== q) w2 = x ? " \u2013 " : (0, import_chunk_7cfjrnwy.xd)(" ", S - M + q), u[14] = x, u[15] = S, u[16] = M, u[17] = q, u[18] = w2;
    else w2 = u[18];
    let K = w2;
    let P = d - N - 2 - S - q - 4;
    let _;
    if (t.description) {
      let Se = Math.max(0, P);
      let R3;
      if (u[19] !== t.description || u[20] !== Se) R3 = (0, import_chunk_f64qna2j.Tt)(t.description.replace(Te, " "), Se), u[19] = t.description, u[20] = Se, u[21] = R3;
      else R3 = u[21];
      let tt = R3;
      _ = `${L}${ne} ${B}${K}${tt}`;
    } else _ = `${L}${ne} ${B}`;
    let R2;
    if (u[22] !== E || u[23] !== _ || u[24] !== F) R2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: F, dimColor: E, wrap: "truncate", children: _ }), u[22] = E, u[23] = _, u[24] = F, u[25] = R2;
    else R2 = u[25];
    return R2;
  }
  let he = t.description || t.tag || t.kind !== void 0 || t.sourceTag, ge = i ?? (0, import_chunk_mgh1y10w.oe)(t.displayText) + 5, j;
  if (u[26] !== ge || u[27] !== d || u[28] !== he || u[29] !== x || u[30] !== t) j = he ? et(t, d, ge, x) : Math.min(ge, d - 4), u[26] = ge, u[27] = d, u[28] = he, u[29] = x, u[30] = t, u[31] = j;
  else j = u[31];
  let A = j, D = t.color || (a ? "suggestion" : void 0), m = !a, h = te && a, v = A - 2 - (he && !te ? N : 0), W = t.displayText;
  if ((0, import_chunk_mgh1y10w.oe)(W) > v) {
    let T2;
    if (u[32] !== W || u[33] !== v) T2 = W.includes("/") || W.includes("\\") ? (0, import_chunk_f64qna2j.Y1)(W, v) : (0, import_chunk_f64qna2j.Tt)(W, v), u[32] = W, u[33] = v, u[34] = T2;
    else T2 = u[34];
    W = T2;
  }
  let T;
  if (u[35] !== A || u[36] !== W || u[37] !== N) T = " ".repeat(Math.max(0, A - (0, import_chunk_mgh1y10w.oe)(W) - N)), u[35] = A, u[36] = W, u[37] = N, u[38] = T;
  else T = u[38];
  let ie = T, se = t.tag ? `[${t.tag}] ` : "", Ie = (0, import_chunk_mgh1y10w.oe)(se), ce, J, Q, w, R;
  if (u[39] !== t) {
    let { kindLaneText: Pe2, kindLabel: jt, sourceText: ke2 } = ve(t);
    J = Pe2;
    Q = ke2;
    ce = jt === "skill" ? "skill" : jt === "agent" ? "background" : void 0;
    w = (0, import_chunk_mgh1y10w.oe)(J);
    R = (0, import_chunk_mgh1y10w.oe)(Q);
    u[39] = t, u[40] = ce, u[41] = J, u[42] = Q, u[43] = w, u[44] = R;
  } else ce = u[40], J = u[41], Q = u[42], w = u[43], R = u[44];
  let Ae = w + R, je = Math.max(0, d - A - Ie - Ae - 4), We, we, Ce, Pe, ke;
  if (u[45] !== p || u[46] !== h || u[47] !== d || u[48] !== je || u[49] !== A || u[50] !== W || u[51] !== a || u[52] !== t.description || u[53] !== t.query || u[54] !== ce || u[55] !== J || u[56] !== Ae || u[57] !== ie || u[58] !== L || u[59] !== m || u[60] !== Q || u[61] !== se || u[62] !== Ie || u[63] !== D) {
    ke = import_chunk_w1d7ygsk.Mn;
    So: {
      let qt = t.description ? t.description.replace(Te, " ").trim() : "";
      let [Wn, Bt] = p ? Ot(qt, je) : [(0, import_chunk_f64qna2j.Tt)(qt, je), ""];
      We = a ? "suggestion" : void 0;
      let le2;
      if (u[69] !== h || u[70] !== L || u[71] !== m || u[72] !== D) le2 = L ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: D, dimColor: m, bold: h, children: L }) : null, u[69] = h, u[70] = L, u[71] = m, u[72] = D, u[73] = le2;
      else le2 = u[73];
      let ue2;
      if (u[74] !== h || u[75] !== W || u[76] !== a || u[77] !== t.query || u[78] !== D) ue2 = (0, import_chunk_a46xeenj.e)(ee, { text: W, query: t.query, color: D, isSelected: a, bold: h }), u[74] = h, u[75] = W, u[76] = a, u[77] = t.query, u[78] = D, u[79] = ue2;
      else ue2 = u[79];
      let me2;
      if (u[80] !== h || u[81] !== ie || u[82] !== m || u[83] !== D) me2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: D, dimColor: m, bold: h, children: ie }), u[80] = h, u[81] = ie, u[82] = m, u[83] = D, u[84] = me2;
      else me2 = u[84];
      let Re2;
      if (u[85] !== ce || u[86] !== J) Re2 = J ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: ce, dimColor: ce === void 0, children: J }) : null, u[85] = ce, u[86] = J, u[87] = Re2;
      else Re2 = u[87];
      let Kt;
      if (u[88] !== se) Kt = se ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: se }) : null, u[88] = se, u[89] = Kt;
      else Kt = u[89];
      let _t;
      if (u[90] !== Q) _t = Q ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: Q }) : null, u[90] = Q, u[91] = _t;
      else _t = u[91];
      we = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: [le2, ue2, me2, Re2, Kt, _t, (0, import_chunk_a46xeenj.e)(ee, { text: Wn, query: t.query, color: We, isSelected: a, bold: h, contiguousOnly: true })] });
      if (!Bt) {
        ke = we;
        break So;
      }
      Ce = A + Ie + Ae;
      Pe = (0, import_chunk_f64qna2j.Tt)(Bt, Math.max(0, d - Ce - 4));
    }
    u[45] = p, u[46] = h, u[47] = d, u[48] = je, u[49] = A, u[50] = W, u[51] = a, u[52] = t.description, u[53] = t.query, u[54] = ce, u[55] = J, u[56] = Ae, u[57] = ie, u[58] = L, u[59] = m, u[60] = Q, u[61] = se, u[62] = Ie, u[63] = D, u[64] = We, u[65] = we, u[66] = Ce, u[67] = Pe, u[68] = ke;
  } else We = u[64], we = u[65], Ce = u[66], Pe = u[67], ke = u[68];
  if (ke !== import_chunk_w1d7ygsk.Mn) return ke;
  let nt = Pe, le;
  if (u[92] !== Ce) le = " ".repeat(Ce), u[92] = Ce, u[93] = le;
  else le = u[93];
  let ue;
  if (u[94] !== h || u[95] !== We || u[96] !== nt || u[97] !== a || u[98] !== t.query) ue = (0, import_chunk_a46xeenj.e)(ee, { text: nt, query: t.query, color: We, isSelected: a, bold: h, contiguousOnly: true }), u[94] = h, u[95] = We, u[96] = nt, u[97] = a, u[98] = t.query, u[99] = ue;
  else ue = u[99];
  let me;
  if (u[100] !== ue || u[101] !== le) me = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: [le, ue] }), u[100] = ue, u[101] = le, u[102] = me;
  else me = u[102];
  let Re;
  if (u[103] !== we || u[104] !== me) Re = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [we, me] }), u[103] = we, u[104] = me, u[105] = Re;
  else Re = u[105];
  return Re;
});
function xZe({ suggestions: n, selectedSuggestion: s, maxColumnWidth: t, emptyMessage: i, overlay: c, noPad: a, onSelect: l, hoveredId: p, onHoverChange: d, cursorRowId: x, keepWindow: b = false }) {
  let { rows: u, columns: H } = (0, import_chunk_6n6exvyx.qe)(), te = (0, import_chunk_8bkqeb5d.Xe)(), L = (0, import_chunk_3j73ps7b.Ab)(), N = (0, import_chunk_bs4h6795.re)(() => t ?? n.reduce((m, h) => Math.max(m, (0, import_chunk_mgh1y10w.oe)((0, import_chunk_7cfjrnwy.i3n)(h.displayText))), 0) + 5, [n, t]), j = (0, import_chunk_bs4h6795.re)(() => n.reduce((m, h) => {
    if (!h.description || !Ee(h.id)) return m;
    let v = (0, import_chunk_mgh1y10w.oe)((0, import_chunk_7cfjrnwy.i3n)(h.displayText));
    return Math.max(m, h.id.startsWith("mcp-resource-") ? Math.min(v, Ze) : v);
  }, 0), [n]), [ne, F] = (0, import_chunk_bs4h6795.y)(null), E = c ? Ht : Math.max(1, Math.min(Math.max(6, Math.floor(u / 2)), u - 3));
  if (n.length === 0) {
    if (!i) return null;
    let m = a ? 0 : Math.max(0, E - 1);
    return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", justifyContent: c ? void 0 : "flex-end", children: [(0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { children: i }), Array.from({ length: m }, (h, v) => (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: " " }, `pad-${v}`))] });
  }
  let fe = te || b || c, U = !fe && E >= 3 && n.length > E, T = U ? E - 1 : E, Y = Math.max(0, Math.min(s, n.length - 1)), O = Math.max(0, Y - T), q = n.slice(O, Y + T + 1).map(mn), B = T >= 2, w = Y - O, $e = q.map((m) => B ? un(m, H, N, te) : 1), z = fe || !U && $e.reduce((m, h) => m + h, 0) <= T, R = U || n.length < T, M = $e.map((m, h) => z || R && h === w ? m : 1), S = w, K = w + 1, P = M[w] ?? 1, _ = 0, Se = Math.floor(T / 2);
  while (S > 0 && P < T && _ + (M[S - 1] ?? 1) <= Se) S--, _ += M[S] ?? 1;
  P += _;
  while (K < q.length && P + (M[K] ?? 1) <= T) P += M[K] ?? 1, K++;
  while (S > 0 && P + (M[S - 1] ?? 1) <= T) S--, P += M[S] ?? 1;
  if (b) {
    let m = Vt(M, T, w, (ne ?? O + S) - O);
    if (S = m.start, K = m.end, P = m.usedRows, O + S !== ne) F(O + S);
  }
  let tt = q.slice(S, K), he = !a ? T : z ? 0 : Math.min(T, n.length + 1), ge = Math.max(0, he - P), A = n[s]?.id, D = p != null && n.some((m) => m.id === p) ? p : void 0;
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", justifyContent: c ? void 0 : "flex-end", onMouseLeave: l ? () => d?.(null) : void 0, children: [tt.map((m, h) => {
    let v = O + S + h, W = (0, import_chunk_a46xeenj.e)(It, { item: m, maxColumnWidth: N, describedNameWidth: j, isSelected: m.id === (D ?? A), allowWrap: B && (z || R && S + h === w) }, m.id);
    if (x != null && m.id === x) return (0, import_chunk_a46xeenj.e)(import_chunk_r95g2as8.Rwn, { active: true, children: W }, m.id);
    if (!l) return W;
    return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { onMouseEnter: () => d?.(m.id), onClick: (ie) => {
      if (L(ie)) return;
      l(v, m.id);
    }, children: W }, m.id);
  }), U && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { onMouseEnter: l ? () => d?.(null) : void 0, children: [(0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "above", count: O + S }), (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "below", count: n.length - O - K })] }), Array.from({ length: ge }, (m, h) => (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: " " }, `pad-${h}`))] });
}
var _2s = (0, import_chunk_bs4h6795.dw)(xZe);
function ve(n) {
  let t = n.kind === void 0 || n.kind === "action" ? "" : n.kind === "info" ? "config" : n.kind, i = n.kind === void 0 ? "" : t + (0, import_chunk_7cfjrnwy.xd)(" ", 7 - (0, import_chunk_mgh1y10w.oe)(t)), c = n.sourceTag ? `[${n.sourceTag}] ` : "";
  return { kindLaneText: i, kindLabel: t, sourceText: c };
}
function et(n, s, t, i) {
  let c = Math.floor(s * 0.4);
  return t > c ? c + ln(n, s, i) : t;
}
function ln(n, s, t) {
  if (t || n.id.startsWith("emoji:")) return 0;
  let i = n.tag ? (0, import_chunk_mgh1y10w.oe)(`[${n.tag}] `) : 0, { kindLaneText: c, sourceText: a } = ve(n), l = s - Math.floor(s * 0.4) - i - (0, import_chunk_mgh1y10w.oe)(c) - (0, import_chunk_mgh1y10w.oe)(a) - 4 - (n.description ? 1 : 0), p = (0, import_chunk_mgh1y10w.oe)(`${import_chunk_7r4ehpnw.xe.pointer} `);
  return l < 0 ? p : Math.min(p, l);
}
function un(n, s, t, i) {
  if (Ee(n.id) || !n.description) return 1;
  let c = et(n, s, t, i), a = n.tag ? (0, import_chunk_mgh1y10w.oe)(`[${n.tag}] `) : 0, { kindLaneText: l, sourceText: p } = ve(n), d = Math.max(0, s - c - a - (0, import_chunk_mgh1y10w.oe)(l) - (0, import_chunk_mgh1y10w.oe)(p) - 4);
  if (d <= 0) return 1;
  let x = n.description.replace(Te, " ").trim();
  return (0, import_chunk_mgh1y10w.oe)(x) > d ? 2 : 1;
}
function mn(n) {
  let s = (0, import_chunk_7cfjrnwy.i3n)(n.displayText), t = n.description && (0, import_chunk_7cfjrnwy.Wr)(n.description), i = n.tag && (0, import_chunk_7cfjrnwy.Wr)(n.tag), c = n.sourceTag && (0, import_chunk_7cfjrnwy.Wr)(n.sourceTag);
  if (s === n.displayText && t === n.description && i === n.tag && c === n.sourceTag) return n;
  return { ...n, displayText: s, description: t, tag: i, sourceTag: c };
}
function Ot(n, s) {
  if (s <= 0 || (0, import_chunk_mgh1y10w.oe)(n) <= s) return [n, ""];
  let t = (0, import_chunk_f64qna2j.uB)(n, s), i = n.slice(t.length);
  if (i.startsWith(" ")) return [t, i.trimStart()];
  let c = t.lastIndexOf(" ");
  if (c > 0) return [t.slice(0, c), n.slice(c + 1)];
  return [t, i];
}
var pn = /[^\u0020-\u02ff]/;
function $t(n, s) {
  if (s.length === 0 || !pn.test(n)) return s;
  let t = /* @__PURE__ */ new Set();
  for (let { index: c } of (0, import_chunk_em52jhgp.ul)().segment(n)) t.add(c);
  let i = [];
  for (let [c, a] of s) {
    let l = c;
    while (l > 0 && !t.has(l)) l--;
    let p = a;
    while (p < n.length && !t.has(p)) p++;
    let d = i.at(-1);
    if (d && l <= d[1]) d[1] = Math.max(d[1], p);
    else i.push([l, p]);
  }
  return i;
}
var m9t = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (n) => n.set(void 0));
var RIe = () => m9t.get() ?? { kept: void 0, takenAfter: 0, runs: 0 };
var xIe = () => m9t.set({ ...RIe(), kept: void 0 });
function Oe(n) {
  let t = (0, import_chunk_sng02qpc.k)(2), { text: s } = n, i;
  if (t[0] !== s) i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, wrap: "truncate-end", children: s }), t[0] = s, t[1] = i;
  else i = t[1];
  return i;
}
function PZe({ segments: n }) {
  return n.map((s, t) => {
    let i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: s.color, dimColor: s.dim, bold: s.bold, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: s.text }) }, t);
    return s.url === void 0 ? i : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: s.url, children: i }, t);
  });
}
function kn(te) {
  return te.notifications.current;
}
function oKe(n) {
  let p = (0, import_chunk_sng02qpc.k)(20), { drawnOnRow1: s } = n, t = s === void 0 ? false : s, i = (0, import_chunk_74h6kcya.X)(kn), c = (0, import_chunk_74h6kcya.X)(import_chunk_v9dxspne.JK), a = (0, import_chunk_g54xmq2r.Ak)(), l = (0, import_chunk_v9dxspne.mKe)();
  if (!i || !(0, import_chunk_v9dxspne.Eve)(i, c) || a && (0, import_chunk_v9dxspne.GZe)(i, l)) {
    return null;
  }
  if (t) {
    return null;
  }
  let d;
  if (p[0] !== i || p[1] !== a) d = a ? (0, import_chunk_v9dxspne.XBo)(i) : void 0, p[0] = i, p[1] = a, p[2] = d;
  else d = p[2];
  let x = d;
  if (x?.surface === "toast") {
    let b2;
    if (p[3] !== i.key || p[4] !== x.text) b2 = (0, import_chunk_a46xeenj.e)(Oe, { text: x.text }, i.key), p[3] = i.key, p[4] = x.text, p[5] = b2;
    else b2 = p[5];
    return b2;
  }
  if ("jsx" in i) {
    let b2;
    if (p[6] !== i.jsx || p[7] !== i.key) b2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: i.jsx }, i.key), p[6] = i.jsx, p[7] = i.key, p[8] = b2;
    else b2 = p[8];
    return b2;
  }
  if ("segments" in i) {
    let b2;
    if (p[9] !== i.segments) b2 = (0, import_chunk_a46xeenj.e)(PZe, { segments: i.segments }), p[9] = i.segments, p[10] = b2;
    else b2 = p[10];
    let u2;
    if (p[11] !== i.key || p[12] !== b2) u2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: b2 }, i.key), p[11] = i.key, p[12] = b2, p[13] = u2;
    else u2 = p[13];
    return u2;
  }
  const b = !i.color;
  let u;
  if (p[14] !== i.text) u = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: i.text }), p[14] = i.text, p[15] = u;
  else u = p[15];
  let H;
  if (p[16] !== i.color || p[17] !== b || p[18] !== u) H = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: i.color, dimColor: b, wrap: "truncate", children: u }), p[16] = i.color, p[17] = b, p[18] = u, p[19] = H;
  else H = p[19];
  return H;
}
