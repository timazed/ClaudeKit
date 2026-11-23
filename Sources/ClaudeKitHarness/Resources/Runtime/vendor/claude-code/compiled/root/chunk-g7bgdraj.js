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
var chunk_g7bgdraj_exports = {};
__export(chunk_g7bgdraj_exports, {
  Ite: () => Ite
});
module.exports = __toCommonJS(chunk_g7bgdraj_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_gd8mknr6 = require("/$bunfs/root/chunk-gd8mknr6.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_a2j3mm6r = require("/$bunfs/root/chunk-a2j3mm6r.js");
var import_chunk_096ekw6r = require("/$bunfs/root/chunk-096ekw6r.js");
var import_chunk_dw56fm8m = require("/$bunfs/root/chunk-dw56fm8m.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function Uo(_o) {
  return (0, import_chunk_mgh1y10w.oe)(_o.label);
}
function Go(et) {
  return et !== null;
}
function Io() {
}
function $o() {
}
var Ve = 60;
function Ite(eo) {
  let l = (0, import_chunk_sng02qpc.k)(109), { title: t, subtitle: c, fields: n, values: i, onChange: F, onSubmit: O, onCancel: f, submitLabel: J } = eo, W = J === void 0 ? "Save" : J, h = n.length + 1, [s, m] = (0, import_chunk_bs4h6795.y)(0), H;
  if (l[0] !== n[0] || l[1] !== i) H = () => {
    let te = n[0];
    return te?.type === "text" ? (i[te.key] ?? "").length : 0;
  }, l[0] = n[0], l[1] = i, l[2] = H;
  else H = l[2];
  let [T, ne] = (0, import_chunk_bs4h6795.y)(H), u = s < n.length ? n[s] : null, Q;
  if (l[3] !== n) Q = Math.max(...n.map(Uo)), l[3] = n, l[4] = Q;
  else Q = l[4];
  let B = Q, le;
  if (l[5] !== i) le = function A2(b) {
    if (b.type !== "text") {
      return null;
    }
    let X = i[b.key] ?? "";
    if (b.required && X.trim() === "") {
      return `${b.label} is required`;
    }
    return b.validate ? b.validate(X, i) : null;
  }, l[5] = i, l[6] = le;
  else le = l[6];
  let A = le, ie;
  if (l[7] !== A || l[8] !== n) ie = n.map(A).find(Go), l[7] = A, l[8] = n, l[9] = ie;
  else ie = l[9];
  let p = ie, D;
  if (l[10] !== n || l[11] !== s || l[12] !== h || l[13] !== i) D = function d2(oo) {
    let P = Math.max(0, Math.min(h - 1, oo));
    if (P === s) {
      return;
    }
    m(P);
    let x = n[P];
    if (x?.type === "text") ne((i[x.key] ?? "").length);
  }, l[10] = n, l[11] = s, l[12] = h, l[13] = i, l[14] = D;
  else D = l[14];
  let d = D, se;
  if (l[15] !== p || l[16] !== O) se = function w2() {
    if (p) {
      return;
    }
    O();
  }, l[15] = p, l[16] = O, l[17] = se;
  else se = l[17];
  let w = se, to;
  if (l[18] !== u || l[19] !== F || l[20] !== i) to = function q2(jo) {
    if (u?.type !== "select") {
      return;
    }
    let Y = u.options;
    let zo = i[u.key] ?? Y[0]?.value ?? "";
    let Qo = Y.findIndex((Jo) => Jo.value === zo);
    let no = Y[(Qo + jo + Y.length) % Y.length];
    if (no) F(u.key, no.value);
  }, l[18] = u, l[19] = F, l[20] = i, l[21] = to;
  else to = l[21];
  let q = to, ue;
  if (l[22] !== s || l[23] !== d) ue = { action: "select:previous", hint: "move", run: () => d(s - 1) }, l[22] = s, l[23] = d, l[24] = ue;
  else ue = l[24];
  let de;
  if (l[25] !== s || l[26] !== d) de = { action: "select:next", hint: "move", run: () => d(s + 1) }, l[25] = s, l[26] = d, l[27] = de;
  else de = l[27];
  let ce;
  if (l[28] !== s || l[29] !== u || l[30] !== d || l[31] !== w) ce = { action: "select:accept", hint: "continue", run: () => {
    if (u?.type === "text") {
      return false;
    }
    return u ? d(s + 1) : w();
  } }, l[28] = s, l[29] = u, l[30] = d, l[31] = w, l[32] = ce;
  else ce = l[32];
  let ae;
  if (l[33] !== f) ae = { action: "select:cancel", run: f }, l[33] = f, l[34] = ae;
  else ae = l[34];
  let fe;
  if (l[35] !== q) fe = { on: "left", hint: "", run: () => q(-1) }, l[35] = q, l[36] = fe;
  else fe = l[36];
  let lo;
  if (l[37] === import_chunk_w1d7ygsk.R) lo = ["left", "right"], l[37] = lo;
  else lo = l[37];
  const Ae = u?.type === "select" ? "change" : "";
  let me;
  if (l[38] !== q) me = () => q(1), l[38] = q, l[39] = me;
  else me = l[39];
  let pe;
  if (l[40] !== Ae || l[41] !== me) pe = { on: lo, hint: Ae, run: me }, l[40] = Ae, l[41] = me, l[42] = pe;
  else pe = l[42];
  let io, ro;
  if (l[43] === import_chunk_w1d7ygsk.R) io = { action: "confirm:nextField", run: Io }, ro = { action: "confirm:cycleMode", run: $o }, l[43] = io, l[44] = ro;
  else io = l[43], ro = l[44];
  let so;
  if (l[45] !== de || l[46] !== ce || l[47] !== ae || l[48] !== fe || l[49] !== pe || l[50] !== ue) so = [ue, de, ce, ae, fe, pe, io, ro], l[45] = de, l[46] = ce, l[47] = ae, l[48] = fe, l[49] = pe, l[50] = ue, l[51] = so;
  else so = l[51];
  let He = so;
  (0, import_chunk_096ekw6r.OZe)();
  let V = u ? i[u.key] ?? "" : "", uo;
  if (l[52] !== u || l[53] !== V || l[54] !== i) uo = u?.type === "text" && u.validate ? u.validate(V, i) : null, l[52] = u, l[53] = V, l[54] = i, l[55] = uo;
  else uo = l[55];
  let K = uo, co;
  if (l[56] !== K || l[57] !== u || l[58] !== V || l[59] !== i) co = !K && u?.hint ? u.hint(V, i) : void 0, l[56] = K, l[57] = u, l[58] = V, l[59] = i, l[60] = co;
  else co = l[60];
  let ve = co, ge;
  if (l[61] !== T || l[62] !== n || l[63] !== s || l[64] !== B || l[65] !== d || l[66] !== f || l[67] !== F || l[68] !== w || l[69] !== i) {
    let N2;
    if (l[71] !== T || l[72] !== n.length || l[73] !== s || l[74] !== B || l[75] !== d || l[76] !== f || l[77] !== F || l[78] !== w || l[79] !== i) N2 = (he, Pe) => {
      let Xo = Pe === s;
      let Yo = i[he.key] ?? "";
      return (0, import_chunk_a46xeenj.e)(Be, { field: he, value: Yo, isFocused: Xo, labelWidth: B, cursor: T, setCursor: ne, onChange: (Zo) => F(he.key, Zo), onCancel: f, onEnter: () => {
        if (Pe === n.length - 1) w();
        else d(Pe + 1);
      } }, he.key);
    }, l[71] = T, l[72] = n.length, l[73] = s, l[74] = B, l[75] = d, l[76] = f, l[77] = F, l[78] = w, l[79] = i, l[80] = N2;
    else N2 = l[80];
    ge = n.map(N2);
    l[61] = T, l[62] = n, l[63] = s, l[64] = B, l[65] = d, l[66] = f, l[67] = F, l[68] = w, l[69] = i, l[70] = ge;
  } else ge = l[70];
  const N = s === h - 1 ? "suggestion" : void 0, Ke = s === h - 1 ? import_chunk_7r4ehpnw.xe.pointer : " ";
  let be;
  if (l[81] !== N || l[82] !== Ke) be = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: N, children: [Ke, " "] }), l[81] = N, l[82] = Ke, l[83] = be;
  else be = l[83];
  const Le = s === h - 1, We = !!p;
  let Ce;
  if (l[84] !== W || l[85] !== Le || l[86] !== We) Ce = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: Le, dimColor: We, children: W }), l[84] = W, l[85] = Le, l[86] = We, l[87] = Ce;
  else Ce = l[87];
  let ye;
  if (l[88] !== p || l[89] !== s || l[90] !== h) ye = p && s === h - 1 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "error", children: [" \xB7 ", p] }), l[88] = p, l[89] = s, l[90] = h, l[91] = ye;
  else ye = l[91];
  let Fe;
  if (l[92] !== be || l[93] !== Ce || l[94] !== ye) Fe = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: [be, Ce, ye] }), l[92] = be, l[93] = Ce, l[94] = ye, l[95] = Fe;
  else Fe = l[95];
  let ke;
  if (l[96] !== K || l[97] !== ve) ke = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, minHeight: 1, children: K ? (0, import_chunk_a46xeenj.e)(import_chunk_dw56fm8m.Ca, { error: K }) : ve ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ve }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: " " }) }), l[96] = K, l[97] = ve, l[98] = ke;
  else ke = l[98];
  let Ee;
  if (l[99] !== He || l[100] !== ge || l[101] !== Fe || l[102] !== ke) Ee = (0, import_chunk_a46xeenj.o)(import_chunk_jczdrj4v.zi, { scope: "Select", claimFocus: true, flexDirection: "column", bindings: He, children: [ge, Fe, ke] }), l[99] = He, l[100] = ge, l[101] = Fe, l[102] = ke, l[103] = Ee;
  else Ee = l[103];
  let ao;
  if (l[104] !== f || l[105] !== c || l[106] !== Ee || l[107] !== t) ao = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: t, subtitle: c, onCancel: f, enterAction: "continue", isCancelActive: false, children: Ee }), l[104] = f, l[105] = c, l[106] = Ee, l[107] = t, l[108] = ao;
  else ao = l[108];
  return ao;
}
function Be(eo) {
  let m = (0, import_chunk_sng02qpc.k)(49), { field: t, value: c, isFocused: n, labelWidth: i, cursor: F, setCursor: O, onChange: f, onCancel: J, onEnter: W } = eo, h = (0, import_chunk_bs4h6795.I)(null), { columns: s } = (0, import_chunk_6n6exvyx.qe)(), l;
  if (m[0] !== s) l = () => h.current && (0, import_chunk_8bkqeb5d.Gr)(h.current).width || s, m[0] = s, m[1] = l;
  else l = m[1];
  let H = (0, import_chunk_8bkqeb5d.Wo)(l), te;
  if (m[2] !== t.label || m[3] !== i) te = " ".repeat(Math.max(0, i - (0, import_chunk_mgh1y10w.oe)(t.label))), m[2] = t.label, m[3] = i, m[4] = te;
  else te = m[4];
  let T = te, ne;
  if (m[5] !== t.required || m[6] !== t.type || m[7] !== c) ne = t.type === "text" && t.required && c.trim() === "", m[5] = t.required, m[6] = t.type, m[7] = c, m[8] = ne;
  else ne = m[8];
  let u = ne;
  const Q = n ? "suggestion" : void 0, B = n ? import_chunk_7r4ehpnw.xe.pointer : " ";
  let le;
  if (m[9] !== Q || m[10] !== B) le = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: Q, children: [B, " "] }), m[9] = Q, m[10] = B, m[11] = le;
  else le = m[11];
  let b = le;
  const X = !n;
  let A;
  if (m[12] !== u) A = u ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: "*" }) : " ", m[12] = u, m[13] = A;
  else A = m[13];
  let ie;
  if (m[14] !== t.label || m[15] !== T || m[16] !== X || m[17] !== A) ie = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: X, children: [t.label, A, T, " "] }), m[14] = t.label, m[15] = T, m[16] = X, m[17] = A, m[18] = ie;
  else ie = m[18];
  let p = ie;
  if (t.type === "select") {
    let D2;
    if (m[19] !== t.options || m[20] !== c) D2 = t.options.find((oo) => oo.value === c) ?? t.options[0], m[19] = t.options, m[20] = c, m[21] = D2;
    else D2 = m[21];
    let P = D2;
    let x2;
    if (m[22] !== n || m[23] !== P?.label || m[24] !== c) x2 = n ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [import_chunk_7r4ehpnw.xe.triangleLeft, " "] }), P?.label ?? c, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" ", import_chunk_7r4ehpnw.xe.triangleRight] })] }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: P?.label ?? c }), m[22] = n, m[23] = P?.label, m[24] = c, m[25] = x2;
    else x2 = m[25];
    let d2;
    if (m[26] !== p || m[27] !== b || m[28] !== x2) d2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [b, p, x2] }), m[26] = p, m[27] = b, m[28] = x2, m[29] = d2;
    else d2 = m[29];
    return d2;
  }
  let D;
  if (m[30] !== b) D = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: b }), m[30] = b, m[31] = D;
  else D = m[31];
  let x;
  if (m[32] !== p) x = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 1, children: p }), m[32] = p, m[33] = x;
  else x = m[33];
  let d;
  if (m[34] !== H || m[35] !== F || m[36] !== t.mask || m[37] !== t.placeholder || m[38] !== n || m[39] !== J || m[40] !== f || m[41] !== W || m[42] !== O || m[43] !== c) d = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: h, flexGrow: 1, flexShrink: 0, flexBasis: import_chunk_a2j3mm6r.Sve, children: n ? (0, import_chunk_a46xeenj.e)(import_chunk_gd8mknr6.fA, { value: c, onChange: f, onSubmit: () => W(), onExit: J, placeholder: t.placeholder, mask: t.mask, columns: t.mask ? Math.max(H, Ve) : H, cursorOffset: F, onChangeCursorOffset: O, disableCursorMovementForUpDownKeys: true, disableEscapeDoublePress: true, focus: true, showCursor: true }) : c ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: t.mask ? t.mask.repeat(Math.min((0, import_chunk_mgh1y10w.oe)(c), H)) : c }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: t.placeholder ?? "" }) }), m[34] = H, m[35] = F, m[36] = t.mask, m[37] = t.placeholder, m[38] = n, m[39] = J, m[40] = f, m[41] = W, m[42] = O, m[43] = c, m[44] = d;
  else d = m[44];
  let se;
  if (m[45] !== D || m[46] !== x || m[47] !== d) se = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [D, x, d] }), m[45] = D, m[46] = x, m[47] = d, m[48] = se;
  else se = m[48];
  return se;
}
