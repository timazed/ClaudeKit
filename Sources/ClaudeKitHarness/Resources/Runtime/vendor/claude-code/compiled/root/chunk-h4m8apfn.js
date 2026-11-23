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
var chunk_h4m8apfn_exports = {};
__export(chunk_h4m8apfn_exports, {
  BBr: () => BBr,
  HL: () => HL,
  K$o: () => K$o,
  Yce: () => Yce,
  hYn: () => hYn,
  q1e: () => q1e,
  sIt: () => sIt
});
module.exports = __toCommonJS(chunk_h4m8apfn_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_t7wkkwx8 = require("/$bunfs/root/chunk-t7wkkwx8.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_qnwkdfwp = require("/$bunfs/root/chunk-qnwkdfwp.js");
var import_chunk_wmbdbvfy = require("/$bunfs/root/chunk-wmbdbvfy.js");
var import_chunk_g5nv2yk4 = require("/$bunfs/root/chunk-g5nv2yk4.js");
var import_chunk_5tb3z575 = require("/$bunfs/root/chunk-5tb3z575.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_1cer6q9x = require("/$bunfs/root/chunk-1cer6q9x.js");
var import_chunk_1cd88bge = require("/$bunfs/root/chunk-1cd88bge.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Yce = {};
(0, import_chunk_w1d7ygsk.jr)(Yce, { default: () => Yce, deliveredBy: () => V, useUserMessageSite: () => sIt });
function q1e(i, t = /* @__PURE__ */ new Date()) {
  let n = new Date(i);
  if (Number.isNaN(n.getTime())) return "";
  let s = (0, import_chunk_1cd88bge.ygt)(), d = (0, import_chunk_1cd88bge.aXt)(), { timeZone: c } = d, f = z(t, c) - z(n, c), a = Math.round(f / 864e5), m = "older";
  if (a === 0) m = "today";
  else if (a > 0 && a < 7) m = "week";
  if (d.kind === "preset") return (0, import_chunk_1cd88bge.n3o)(d, de[m], s, n);
  let p = (0, import_chunk_1cd88bge.oLa)(d.pattern, c, n);
  if (m === "today") return p;
  let C = (0, import_chunk_em52jhgp.Eee)(s, (0, import_chunk_em52jhgp.Rct)(le[m], c)).format(n);
  return m === "week" ? `${C} ${p}` : `${C}, ${p}`;
}
var de = { today: { hour: "numeric", minute: "2-digit" }, week: { weekday: "long", hour: "numeric", minute: "2-digit" }, older: { weekday: "long", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" } }, le = { week: { weekday: "long" }, older: { weekday: "long", month: "short", day: "numeric" } };
function z(i, t) {
  if (!t) return new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
  let n = (0, import_chunk_em52jhgp.Eee)("en-US", (0, import_chunk_em52jhgp.Rct)(ce, t)).formatToParts(i), s = {};
  for (let d of n) s[d.type] = d.value;
  return Date.UTC(Number(s.year), Number(s.month) - 1, Number(s.day));
}
var ce = { year: "numeric", month: "2-digit", day: "2-digit" };
function V(i) {
  switch (i.kind) {
    case "plugin":
      return i.name;
    case "channel":
      return (0, import_chunk_px0hhsq7.hOe)(i.server)?.pluginName;
    default:
      return;
  }
}
function sIt({ messageId: i, stored: t, text: n, isExpanded: s, task: d, sender: c, draw: f }) {
  let a = (0, import_chunk_wgyw76w5.di)(d), m = (0, import_chunk_wgyw76w5.di)(c), p = (0, import_chunk_t7wkkwx8.N2)("UserMessage", () => ({ requestId: i, props: { text: n, origin: (0, import_chunk_bzyb60p0.vXo)(t), isExpanded: s, ...d !== void 0 && { task: d }, ...c !== void 0 && { from: c } } }), [i, n, t, s, a, m]);
  return (0, import_chunk_t7wkkwx8.iY)(p, (C) => f(C.props.text), V(p.props.origin));
}
var ue = 1e4, fe = 2500, he = 2500;
function BBr(i) {
  if (i.length <= ue) return i;
  let t = (0, import_chunk_7cfjrnwy.ee)(i, fe), n = (0, import_chunk_7cfjrnwy.qa)(i, he), s = (0, import_chunk_7cfjrnwy.Mt)(i, `
`, t.length) - (0, import_chunk_7cfjrnwy.Mt)(n, `
`), d = i.length - t.length - n.length;
  return { head: t, hiddenLines: s, hiddenChars: d, tail: n };
}
var ge = 4e3;
function K$o(i) {
  return i.length <= ge && !((0, import_chunk_865at33z.Pzt)() && (0, import_chunk_bq31aqv6.WCe)(i).length > 0);
}
function hYn(i) {
  let u = (0, import_chunk_sng02qpc.k)(36), { text: t, useBriefLayout: n, timestamp: s, bodyOnly: d, awaitingModel: c, markLinks: f } = i, a = d === void 0 ? false : d, m = c === void 0 ? false : c, p = (0, import_chunk_qnwkdfwp.y9t)(), C = p?.isQueued ?? false, l = typeof t === "object", y = l && t.hiddenLines === 0 ? t.hiddenChars : void 0, R;
  if (u[0] !== t || u[1] !== l) R = !l && K$o(t), u[0] = t, u[1] = l, u[2] = R;
  else R = u[2];
  let M = R, w = p?.selectionHighlight === "on", x = C || m;
  if (n || a) {
    let A2;
    if (u[3] !== s) A2 = s ? q1e(s) : "", u[3] = s, u[4] = A2;
    else A2 = u[4];
    let Y = A2;
    let v = w ? "suggestion" : x ? "inactive" : "text";
    const b2 = a ? 0 : 2;
    let D2;
    if (u[5] !== a || u[6] !== w || u[7] !== Y || u[8] !== x) D2 = a ? null : (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [w ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { "aria-label": "selected:", color: "suggestion", children: [import_chunk_7r4ehpnw.xe.pointer, " "] }) : null, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: w ? "suggestion" : x ? "inactive" : "briefLabelYou", children: "You" }), Y ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" ", Y] }) : null] }), u[5] = a, u[6] = w, u[7] = Y, u[8] = x, u[9] = D2;
    else D2 = u[9];
    let X;
    if (u[10] !== a || u[11] !== y || u[12] !== f || u[13] !== M || u[14] !== t || u[15] !== v || u[16] !== l || u[17] !== x) X = l ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: v, children: t.head }), (0, import_chunk_a46xeenj.e)(T, { hiddenLines: t.hiddenLines, hiddenChars: y, indent: a ? 0 : 2 }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: v, children: t.tail })] }) : M ? (0, import_chunk_a46xeenj.e)(import_chunk_t7wkkwx8.ru, { promptMode: true, color: v, monochrome: x, markLinks: f, children: t }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: v, children: t }), u[10] = a, u[11] = y, u[12] = f, u[13] = M, u[14] = t, u[15] = v, u[16] = l, u[17] = x, u[18] = X;
    else X = u[18];
    let se;
    if (u[19] !== b2 || u[20] !== D2 || u[21] !== X) se = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingLeft: b2, children: [D2, X] }), u[19] = b2, u[20] = D2, u[21] = X, u[22] = se;
    else se = u[22];
    return se;
  }
  let H = w ? "suggestion" : x ? "inactive" : "text", A;
  if (u[23] !== p?.selectionHighlight || u[24] !== w) A = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: p?.selectionHighlight === "off" ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "  " }) : (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { "aria-label": w ? "selected:" : "you:", color: w ? "suggestion" : "inactive", children: [import_chunk_7r4ehpnw.xe.pointer, " "] }) }), u[23] = p?.selectionHighlight, u[24] = w, u[25] = A;
  else A = u[25];
  let b;
  if (u[26] !== y || u[27] !== M || u[28] !== t || u[29] !== H || u[30] !== l || u[31] !== x) b = l ? (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.e)(L, { text: t.head, color: H }), (0, import_chunk_a46xeenj.e)(T, { hiddenLines: t.hiddenLines, hiddenChars: y, indent: 3 }), (0, import_chunk_a46xeenj.e)(L, { text: t.tail, color: H })] }) : M ? (0, import_chunk_a46xeenj.e)(import_chunk_t7wkkwx8.ru, { promptMode: true, color: H, monochrome: x, children: t }) : (0, import_chunk_a46xeenj.e)(L, { text: t, color: H }), u[26] = y, u[27] = M, u[28] = t, u[29] = H, u[30] = l, u[31] = x, u[32] = b;
  else b = u[32];
  let D;
  if (u[33] !== A || u[34] !== b) D = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [A, b] }), u[33] = A, u[34] = b, u[35] = D;
  else D = u[35];
  return D;
}
function T(i) {
  let c = (0, import_chunk_sng02qpc.k)(7), { hiddenLines: t, hiddenChars: n, indent: s } = i, d = `${t} ${t === 1 ? "line" : "lines"}`, f;
  if (c[0] !== n || c[1] !== t || c[2] !== d) f = n === void 0 ? `(${d} hidden)` : t === 0 ? `(~${(0, import_chunk_f64qna2j.zAt)(n)} KB hidden)` : `(${d}, ~${(0, import_chunk_f64qna2j.zAt)(n)} KB hidden)`, c[0] = n, c[1] = t, c[2] = d, c[3] = f;
  else f = c[3];
  let a = f, m;
  if (c[4] !== s || c[5] !== a) m = (0, import_chunk_a46xeenj.e)(import_chunk_5tb3z575.nm, { title: a, titleAlign: "start", color: "subtle", padding: s }), c[4] = s, c[5] = a, c[6] = m;
  else m = c[6];
  return m;
}
function L(i) {
  let c = (0, import_chunk_sng02qpc.k)(9), { text: t, color: n } = i, s = (0, import_chunk_wmbdbvfy.Rf)(), d = (0, import_chunk_g5nv2yk4.bS)(), f, a;
  if (c[0] !== n || c[1] !== d || c[2] !== s || c[3] !== t) {
    a = import_chunk_w1d7ygsk.Mn;
    C: {
      let m = (0, import_chunk_bq31aqv6.WCe)(t);
      if (m.length === 0 || !(0, import_chunk_k67pwqya.pLe)((0, import_chunk_865at33z.ZP)(s), d)) {
        let p;
        if (c[6] !== n || c[7] !== t) p = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: n, children: t }), c[6] = n, c[7] = t, c[8] = p;
        else p = c[8];
        a = p;
        break C;
      }
      let l = [];
      let y = 0;
      for (const u of m) {
        if (u.start > y) l.push((0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: n, children: t.slice(y, u.start) }, `plain-${y}`));
        for (let R = u.start; R < u.end; R++) l.push((0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: (0, import_chunk_865at33z.JZ)(R - u.start), children: t[R] }, `rb-${R}`));
        y = u.end;
      }
      if (y < t.length) l.push((0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: n, children: t.slice(y) }, `plain-${y}`));
      f = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: l });
    }
    c[0] = n, c[1] = d, c[2] = s, c[3] = t, c[4] = f, c[5] = a;
  } else f = c[4], a = c[5];
  if (a !== import_chunk_w1d7ygsk.Mn) return a;
  return f;
}
function HL(i) {
  let n = (0, import_chunk_sng02qpc.k)(19), { text: t } = i, s, d, c, f, a, m, p, C;
  if (n[0] !== t) {
    C = import_chunk_w1d7ygsk.Mn;
    y: {
      let l = BBr(t);
      if (typeof l === "string") {
        C = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "wrap", children: (0, import_chunk_1cer6q9x.JE)(l) });
        break y;
      }
      d = import_chunk_ee10yhqw.Q;
      a = true;
      m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "wrap", children: (0, import_chunk_1cer6q9x.JE)(l.head) });
      p = (0, import_chunk_a46xeenj.e)(T, { hiddenLines: l.hiddenLines, hiddenChars: l.hiddenChars, indent: 0 });
      s = import_chunk_8bkqeb5d.r;
      c = "wrap";
      f = (0, import_chunk_1cer6q9x.JE)(l.tail);
    }
    n[0] = t, n[1] = s, n[2] = d, n[3] = c, n[4] = f, n[5] = a, n[6] = m, n[7] = p, n[8] = C;
  } else s = n[1], d = n[2], c = n[3], f = n[4], a = n[5], m = n[6], p = n[7], C = n[8];
  if (C !== import_chunk_w1d7ygsk.Mn) return C;
  let u;
  if (n[9] !== s || n[10] !== c || n[11] !== f) u = (0, import_chunk_a46xeenj.e)(s, { wrap: c, children: f }), n[9] = s, n[10] = c, n[11] = f, n[12] = u;
  else u = n[12];
  let R;
  if (n[13] !== d || n[14] !== a || n[15] !== m || n[16] !== p || n[17] !== u) R = (0, import_chunk_a46xeenj.o)(d, { compact: a, children: [m, p, u] }), n[13] = d, n[14] = a, n[15] = m, n[16] = p, n[17] = u, n[18] = R;
  else R = n[18];
  return R;
}
