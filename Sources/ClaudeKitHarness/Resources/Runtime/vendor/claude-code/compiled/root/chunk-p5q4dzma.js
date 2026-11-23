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
var chunk_p5q4dzma_exports = {};
__export(chunk_p5q4dzma_exports, {
  Cha: () => Cha,
  LD: () => LD,
  U1o: () => U1o,
  c5t: () => c5t,
  hbn: () => hbn,
  u5t: () => u5t
});
module.exports = __toCommonJS(chunk_p5q4dzma_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_czdx79v3 = require("/$bunfs/root/chunk-czdx79v3.js");
var import_chunk_3ah5kacx = require("/$bunfs/root/chunk-3ah5kacx.js");
var import_chunk_qqkcytvr = require("/$bunfs/root/chunk-qqkcytvr.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var pe = { claude: "briefLabelClaude", you: "briefLabelYou" }, ee = "\u2502 ";
function y(n) {
  return (0, import_chunk_xfj2cwfv.Pi)(n);
}
function LD(n, t, l = false) {
  let s = Math.max(1, t), u = [];
  for (let m of n.split(`
`)) {
    if (m === "") {
      u.push("");
      continue;
    }
    for (let h of (0, import_chunk_f64qna2j.Au)(m, s, { hard: true, trim: !l }).split(`
`)) u.push(...(0, import_chunk_mgh1y10w.oe)(h) <= s ? [h] : (0, import_chunk_f64qna2j.GXe)(h, s));
  }
  return u;
}
function le(n, t) {
  let l = (0, import_chunk_mgh1y10w.oe)(n);
  return l >= t ? n : n + (0, import_chunk_7cfjrnwy.xd)(" ", t - l);
}
function fe(n) {
  return `${import_chunk_3ah5kacx.P3r[n.who]} \u2192 ${import_chunk_3ah5kacx.O3r[n.produces]}`;
}
function W(n, t, l, s) {
  return LD(y(n), t - ee.length, true).map((u, m) => (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ee }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: s, children: u === "" ? " " : u })] }, `${l}${m}`));
}
function c5t(n, t) {
  return W(n.trim(), t, "msg", false);
}
function F(n, t, l, s, u) {
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: t }), l !== null ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" (", l, ")"] }) : null, s !== null ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["  ", (0, import_chunk_f64qna2j.Tt)(s, Math.max(1, u - (0, import_chunk_mgh1y10w.oe)(t) - 8))] }) : null] }, n);
}
function ge(n) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: " " }, n);
}
function xe(n, t, l, s) {
  let u = `${t + 1}. `, m = " ".repeat(u.length), h = s, c = [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: u }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: le((0, import_chunk_f64qna2j.Tt)(y(n.title), h), h) }), "  ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: pe[n.who], children: import_chunk_3ah5kacx.P3r[n.who] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \u2192 ", import_chunk_3ah5kacx.O3r[n.produces]] })] }, `t${t}`)];
  return LD(y(n.description), l - u.length).forEach((a, i) => c.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [m, a] }, `d${t}.${i}`))), LD(`from ${y(n.basis)}`, l - u.length).forEach((a, i) => c.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [m, i === 0 ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { italic: true, children: "from" }), a.slice(4)] }) : a] }, `b${t}.${i}`))), c;
}
function ne(n, t, l) {
  let s = [], u = (c) => {
    if (s.length > 0) s.push(ge(`gap${s.length}`));
    s.push(c);
  };
  if (n.name !== void 0 || n.icon !== void 0 || n.color !== void 0) {
    let c = n.color !== void 0 ? import_chunk_3ah5kacx.PDa[n.color] : void 0, a = [...n.icon !== void 0 ? [["icon", n.icon]] : [], ...n.color !== void 0 ? [["color", n.color]] : []], i = a.reduce((P, [b, p]) => P + 3 + b.length + 1 + (0, import_chunk_mgh1y10w.oe)(p), 0), d = Math.max(6, t - 22 - 7 - i);
    s.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Name, icon and color" }), "  ", n.name !== void 0 ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "name " }), "\u201C", (0, import_chunk_f64qna2j.Tt)(y(n.name), d), "\u201D"] }) : null, a.map(([P, b], p) => (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [p > 0 || n.name !== void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: " \xB7 " }) : null, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [P, " "] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: c, children: b })] }, P))] }, "card"));
  }
  if (n.summary !== void 0 && n.summary.trim() !== "") s.push(...W(n.summary.trim(), t, "sum", true));
  let m = n.sessions ?? [];
  if (m.length > 0) {
    u(F("threads", "Threads", m.length, null, t));
    let c = Math.max(1, Math.min(Math.max(...m.map((a) => (0, import_chunk_mgh1y10w.oe)(y(a.title)))), t - 3 - Math.max(...m.map((a) => (0, import_chunk_mgh1y10w.oe)(fe(a)))) - 2));
    m.forEach((a, i) => s.push(...xe(a, i, t, c)));
  }
  let h = n.routines ?? [];
  if (h.length > 0) {
    u(F("routines", "Routines", h.length, "off until you turn one on", t));
    let c = (i) => `${y(i.cron_expression)} UTC`, a = Math.max(1, Math.min(Math.max(...h.map((i) => (0, import_chunk_mgh1y10w.oe)(y(i.name)))), t - 2 - Math.max(...h.map((i) => (0, import_chunk_mgh1y10w.oe)(c(i)))) - 2));
    h.forEach((i, d) => {
      let P = c(i);
      if (s.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\xB7 " }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: le((0, import_chunk_f64qna2j.Tt)(y(i.name), a), a) }), "  ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "permission", children: P })] }, `r${d}`)), i.description !== void 0 && i.description !== "") LD(y(i.description), t - 2).forEach((b, p) => s.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["  ", b] }, `rd${d}.${p}`)));
    });
  }
  if (n.instructions !== void 0 && n.instructions.trim() !== "") u(F("instructions", "Project instructions", null, l.existingProject ? "replace the project\u2019s current ones when applied" : "set on the project on Yes", t)), s.push(...W(n.instructions.trim(), t, "ins", false));
  if (m.length + h.length > 0) u(F("prompts", h.length === 0 ? "Thread instructions" : m.length === 0 ? "Routine instructions" : "Thread and routine instructions", null, h.length === 0 ? "what each thread starts with" : m.length === 0 ? "what each routine starts with" : "what each thread and routine starts with", t)), m.forEach((c, a) => {
    s.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: [a + 1, ". ", y(c.title)] }, `pt${a}`)), W(c.prompt.trim(), t - 3, `pp${a}.`, true).forEach((i) => s.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["   ", i] }, `i${String(i.key)}`)));
  }), h.forEach((c, a) => {
    s.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: ["\xB7 ", y(c.name)] }, `rt${a}`)), W(c.prompt.trim(), t - 3, `rp${a}.`, true).forEach((i) => s.push((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["   ", i] }, `i${String(i.key)}`)));
  });
  if (n.evidence?.sessions_matched !== void 0) u((0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: ["The draft counts ", n.evidence.sessions_matched, " of this folder\u2019s", " ", (0, import_chunk_7cfjrnwy.O)(n.evidence.sessions_matched, "session"), " as this stream of work."] }, "evidence"));
  return s;
}
var U1o = "Drafted by Claude from this session";
function I(n, t, l) {
  let s = n.sessions?.length ?? 0, u = n.routines?.length ?? 0, m = n.instructions !== void 0 && n.instructions.trim() !== "";
  return [`Brief  ${[s > 0 ? `${s} ${(0, import_chunk_7cfjrnwy.O)(s, "thread")}` : null, u > 0 ? `${u} ${(0, import_chunk_7cfjrnwy.O)(u, "routine")}` : null, m ? "instructions" : null, s + u === 0 && !m ? "summary only" : null, `${(t / 1024).toFixed(1)} KB`].filter((c) => c !== null).join(" \xB7 ")}`, l === null ? "" : ce(l, "show as text")].filter((c) => c !== "").join("  ");
}
function J(n, t) {
  return [(0, import_chunk_f64qna2j.$y)(n), ce(t, "expand")].filter((l) => l !== "").join(" ");
}
function ce(n, t) {
  return (0, import_chunk_paah1wya.ym)({ chord: n, action: t, parens: true, format: { keyCase: "lower" } });
}
function Cha(n, t, l, s) {
  return Math.max(LD(I(n, t, l), s, true).length, LD(I(n, t, null), s, true).length + LD(J(Math.max(1, t), l), s, true).length);
}
function u5t(n, t, l) {
  if (l === null) return Math.min(n.length, t);
  let s = 0, u = 0;
  for (let m of n) {
    if (s += LD((0, import_chunk_qqkcytvr.cW)(m), l, true).length, s > t) break;
    u++;
  }
  return u;
}
function hbn(n) {
  let d = (0, import_chunk_sng02qpc.k)(61), { proposal: t, proposalBytes: l, existingProject: s, width: u, maxRows: m, marginTop: h, transcriptChord: c, screenReaderColumns: a, messageFrom: i } = n, P;
  if (d[0] !== s || d[1] !== i || d[2] !== t || d[3] !== u) P = i !== null ? c5t(t.summary ?? "", u) : ne(t, u, { existingProject: s }), d[0] = s, d[1] = i, d[2] = t, d[3] = u, d[4] = P;
  else P = d[4];
  let b = P, p;
  if (d[5] !== m || d[6] !== b || d[7] !== a) {
    p = b.slice(0, u5t(b, m, a));
    while (p.length < b.length && p.length > 1 && String(p.at(-1)?.key).startsWith("gap")) p.pop();
    d[5] = m, d[6] = b, d[7] = a, d[8] = p;
  } else p = d[8];
  let f = b.length - p.length;
  if (i !== null) {
    const C2 = a !== null ? 0 : h;
    const T2 = a !== null ? 0 : 1;
    let x2;
    if (d[9] !== f) x2 = f > 0 ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "warning", wrap: "truncate-end", children: [(0, import_chunk_f64qna2j.$y)(f), ". Make this terminal taller to read and send it."] }) : null, d[9] = f, d[10] = x2;
    else x2 = d[10];
    let w2;
    if (d[11] !== i || d[12] !== a) w2 = i === "drafted" ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [a !== null ? "" : "  ", U1o] }) : null, d[11] = i, d[12] = a, d[13] = w2;
    else w2 = d[13];
    let j2;
    if (d[14] !== p || d[15] !== C2 || d[16] !== T2 || d[17] !== x2 || d[18] !== w2) j2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginTop: C2, paddingLeft: T2, children: [p, x2, w2] }), d[14] = p, d[15] = C2, d[16] = T2, d[17] = x2, d[18] = w2, d[19] = j2;
    else j2 = d[19];
    return j2;
  }
  if (a !== null) {
    const C2 = f === 0 ? c : null;
    let T2;
    if (d[20] !== t || d[21] !== l || d[22] !== C2) T2 = I(t, l, C2), d[20] = t, d[21] = l, d[22] = C2, d[23] = T2;
    else T2 = d[23];
    let x2;
    if (d[24] !== T2) x2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: T2 }), d[24] = T2, d[25] = x2;
    else x2 = d[25];
    let w2;
    if (d[26] !== f || d[27] !== c) w2 = f > 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: J(f, c) }) : null, d[26] = f, d[27] = c, d[28] = w2;
    else w2 = d[28];
    let j2;
    if (d[29] !== p || d[30] !== x2 || d[31] !== w2) j2 = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [x2, p, w2] }), d[29] = p, d[30] = x2, d[31] = w2, d[32] = j2;
    else j2 = d[32];
    return j2;
  }
  let L = t.sessions?.length ?? 0, B = t.routines?.length ?? 0, me = t.instructions !== void 0 && t.instructions.trim() !== "", C;
  if (d[33] === import_chunk_w1d7ygsk.R) C = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Brief" }), d[33] = C;
  else C = d[33];
  let T;
  if (d[34] !== L) T = L > 0 ? `${L} ${(0, import_chunk_7cfjrnwy.O)(L, "thread")}` : null, d[34] = L, d[35] = T;
  else T = d[35];
  let x;
  if (d[36] !== B) x = B > 0 ? `${B} ${(0, import_chunk_7cfjrnwy.O)(B, "routine")}` : null, d[36] = B, d[37] = x;
  else x = d[37];
  const w = me ? "instructions" : null, j = L + B === 0 && !me ? "summary only" : null, V = l / 1024;
  let de;
  if (d[38] !== V) de = V.toFixed(1), d[38] = V, d[39] = de;
  else de = d[39];
  const Z = `${de} KB`;
  let U;
  if (d[40] !== T || d[41] !== x || d[42] !== w || d[43] !== j || d[44] !== Z) U = (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [T, x, w, j, Z] }), d[40] = T, d[41] = x, d[42] = w, d[43] = j, d[44] = Z, d[45] = U;
  else U = d[45];
  let K;
  if (d[46] !== f || d[47] !== c) K = f === 0 ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: ["  ", (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: c, action: "show as text", parens: true, format: { keyCase: "lower" } })] }) : null, d[46] = f, d[47] = c, d[48] = K;
  else K = d[48];
  let N;
  if (d[49] !== U || d[50] !== K) N = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: [C, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["  ", U, K] })] }), d[49] = U, d[50] = K, d[51] = N;
  else N = d[51];
  let Y;
  if (d[52] !== f) Y = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: (0, import_chunk_a46xeenj.e)(import_chunk_czdx79v3.hc, { count: f, expandable: true }) }), d[52] = f, d[53] = Y;
  else Y = d[53];
  let X;
  if (d[54] !== p || d[55] !== Y) X = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingLeft: 1, children: [p, Y] }), d[54] = p, d[55] = Y, d[56] = X;
  else X = d[56];
  let he;
  if (d[57] !== h || d[58] !== N || d[59] !== X) he = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginTop: h, children: [N, X] }), d[57] = h, d[58] = N, d[59] = X, d[60] = he;
  else he = d[60];
  return he;
}
