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
var chunk_a2j3mm6r_exports = {};
__export(chunk_a2j3mm6r_exports, {
  Sve: () => Sve,
  VE: () => VE
});
module.exports = __toCommonJS(chunk_a2j3mm6r_exports);
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_qqkcytvr = require("/$bunfs/root/chunk-qqkcytvr.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function me(U) {
  return U.width === "fill";
}
function fe(U) {
  return import_chunk_bs4h6795.dy.toArray(U.props.children);
}
function ue(we) {
  return we.header !== void 0;
}
function he(pe) {
  return pe.header;
}
var E = { start: "flex-start", center: "center", end: "flex-end" }, F = 2, Sve = 12, q = 20;
function Y(s) {
  if (typeof s === "string" || typeof s === "number") return true;
  if ((0, import_chunk_bs4h6795.y_)(s) && s.type === import_chunk_bs4h6795.nf) return true;
  return false;
}
function M(s, t, c) {
  if (!Y(s)) return s;
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: t.dim && !c, bold: t.bold || c, children: s });
}
function S(s) {
  return (0, import_chunk_mgh1y10w.oe)((0, import_chunk_qqkcytvr.cW)(s));
}
function v(s, t, c, w) {
  let b = s.length, i = s.map((n, a) => {
    let l = c ? S(n.header) : 0;
    for (let u of t) l = Math.max(l, S(u[a]));
    return l;
  }), f = Array(b), m = [];
  for (let n = 0; n < b; n++) {
    let a = s[n].width;
    if (a === "fill") f[n] = 0;
    else if (typeof a === "number") f[n] = a;
    else if (a && "ratio" in a && a.ratio !== void 0) m.push(n), f[n] = 0;
    else if (a) f[n] = (0, import_chunk_8bkqeb5d.Du)(i[n], a.min ?? 0, a.max ?? 1 / 0);
    else f[n] = i[n];
  }
  if (m.length > 0) {
    let n = f.reduce((u, d) => u + d, 0), a = Math.max(0, w - F * (b - 1) - n), l = m.reduce((u, d) => u + (s[d].width.ratio ?? 0), 0);
    for (let u of m) {
      let d = s[u].width, R = l > 0 ? Math.floor(a * (d.ratio ?? 0) / l) : 0;
      f[u] = (0, import_chunk_8bkqeb5d.Du)(R, d.min ?? 1, d.max ?? 1 / 0);
    }
  }
  return f;
}
function B(s) {
  let m = (0, import_chunk_sng02qpc.k)(23), { cells: t, columns: c, widths: w, isHeader: b } = s, i = c.length - 1, f = c[i]?.width, n;
  if (m[0] !== t || m[1] !== i) n = (0, import_chunk_8bkqeb5d.Du)(S(t[i]), Sve, q), m[0] = t, m[1] = i, m[2] = n;
  else n = m[2];
  let a = n, l = f === "fill" ? a : f === void 0 ? Math.min(a, w[i] ?? 0) : 0, u;
  if (m[3] !== c) u = c.findIndex(me), m[3] = c, m[4] = u;
  else u = m[4];
  let d = u === i;
  const R = l > 0 ? "wrap" : "nowrap";
  let W;
  if (m[5] !== t || m[6] !== c || m[7] !== l || m[8] !== b || m[9] !== d || m[10] !== i || m[11] !== w) {
    let H2;
    if (m[13] !== t || m[14] !== l || m[15] !== b || m[16] !== d || m[17] !== i || m[18] !== w) H2 = (y, h) => y.width === "fill" ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, flexShrink: 1, flexBasis: d ? l : 0, minWidth: h === i ? Sve : 1, justifyContent: E[y.align ?? "start"], children: M(t[h], y, b) }, h) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: w[h] || void 0, flexShrink: h === i && y.width === void 0 ? 1 : 0, flexBasis: h === i && l > 0 ? l : void 0, flexGrow: h === i && l > 0 ? 1 : 0, maxWidth: h === i && l > 0 ? w[h] : void 0, justifyContent: E[y.align ?? "start"], children: M(t[h], y, b) }, h), m[13] = t, m[14] = l, m[15] = b, m[16] = d, m[17] = i, m[18] = w, m[19] = H2;
    else H2 = m[19];
    W = c.map(H2);
    m[5] = t, m[6] = c, m[7] = l, m[8] = b, m[9] = d, m[10] = i, m[11] = w, m[12] = W;
  } else W = m[12];
  let H;
  if (m[20] !== R || m[21] !== W) H = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "row", columnGap: F, flexWrap: R, children: W }), m[20] = R, m[21] = W, m[22] = H;
  else H = m[22];
  return H;
}
function Z(s) {
  let c = (0, import_chunk_sng02qpc.k)(2), { children: t } = s, w;
  if (c[0] !== t) w = (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: t }), c[0] = t, c[1] = w;
  else w = c[1];
  return w;
}
function J(s) {
  let f = (0, import_chunk_sng02qpc.k)(12), { columns: t, children: c, forceWidth: w } = s, { columns: b } = (0, import_chunk_6n6exvyx.qe)(), i = w ?? b, m, n, a, l;
  if (f[0] !== c || f[1] !== t || f[2] !== i) {
    let u = import_chunk_bs4h6795.dy.toArray(c).filter(import_chunk_bs4h6795.y_);
    let d = u.map(fe);
    let R = t.some(ue);
    let W = v(t, d, R, i);
    m = import_chunk_8bkqeb5d.g;
    n = "column";
    a = R && (0, import_chunk_a46xeenj.e)(B, { cells: t.map(he), columns: t, widths: W, isHeader: true });
    l = d.map((H, y) => (0, import_chunk_a46xeenj.e)(B, { cells: H, columns: t, widths: W, isHeader: false }, u[y].key ?? y));
    f[0] = c, f[1] = t, f[2] = i, f[3] = m, f[4] = n, f[5] = a, f[6] = l;
  } else m = f[3], n = f[4], a = f[5], l = f[6];
  let h;
  if (f[7] !== m || f[8] !== n || f[9] !== a || f[10] !== l) h = (0, import_chunk_a46xeenj.o)(m, { flexDirection: n, children: [a, l] }), f[7] = m, f[8] = n, f[9] = a, f[10] = l, f[11] = h;
  else h = f[11];
  return h;
}
var VE = Object.assign(J, { Row: Z });
