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
var chunk_vs99e3g5_exports = {};
__export(chunk_vs99e3g5_exports, {
  $l: () => $l,
  Oe: () => Oe,
  Own: () => Own,
  YUo: () => YUo,
  iW: () => iW,
  sW: () => sW
});
module.exports = __toCommonJS(chunk_vs99e3g5_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_09dxdt5c = require("/$bunfs/root/chunk-09dxdt5c.js");
var import_chunk_er4k5wmh = require("/$bunfs/root/chunk-er4k5wmh.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_7g0kta79 = require("/$bunfs/root/chunk-7g0kta79.js");
var import_chunk_dfcadv0m = require("/$bunfs/root/chunk-dfcadv0m.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_s64r734v = require("/$bunfs/root/chunk-s64r734v.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function $l(x, i, n = true) {
  let { handleInterrupt: l, handleExit: t, exitState: d } = YUo(i, x), a = (0, import_chunk_bs4h6795.re)(() => ({ "app:interrupt": l, "app:exit": t }), [l, t]);
  return (0, import_chunk_6fvsq616.gs)(a, { context: "Global", isActive: n }), d;
}
function sW(x, i, n = true) {
  let { handleInterrupt: l, handleExit: t, exitState: d } = YUo(i, x);
  return { entries: (0, import_chunk_bs4h6795.re)(() => n ? [{ action: "app:interrupt", run: l }, { action: "app:exit", run: t }] : [], [n, l, t]), exitState: d };
}
function YUo(x, i) {
  let { exit: n } = (0, import_chunk_8bkqeb5d.gx)(), [l, t] = (0, import_chunk_bs4h6795.y)({ pending: false, keyName: null }), d = (0, import_chunk_bs4h6795.re)(() => i ?? n, [i, n]), a = (0, import_chunk_s64r734v.aW)(), p = (0, import_chunk_09dxdt5c.cu)("app:interrupt", "Global", "Ctrl-C"), c = (0, import_chunk_09dxdt5c.cu)("app:exit", "Global", "Ctrl-D"), E = a && p ? p : "Ctrl-C", C = a && c ? c : "Ctrl-D", f = (0, import_chunk_er4k5wmh.nue)((s) => t({ pending: s, keyName: E }), d), b = (0, import_chunk_er4k5wmh.nue)((s) => t({ pending: s, keyName: C }), d), u = (0, import_chunk_bs4h6795.ye)(() => {
    if (x?.()) return;
    f();
  }, [f, x]), h = (0, import_chunk_bs4h6795.ye)(() => {
    b();
  }, [b]);
  return { handleInterrupt: u, handleExit: h, exitState: l };
}
(0, import_chunk_bs4h6795.G)();
function gt() {
  return false;
}
function Nt() {
  return false;
}
function Oe(x) {
  let m = (0, import_chunk_sng02qpc.k)(53), { title: i, titleEnd: n, titleSuffix: l, subtitle: t, isSubtitleDimmed: d, children: a, onCancel: p, escapeAction: c, enterAction: E, keys: C, pressAgainAction: f, color: b, hideInputGuide: u, hideBorder: h, inputGuide: s, truncateInputGuide: O, isCancelActive: Te, onInterrupt: At, exitOnCtrlCD: Me, onExit: _e } = x, Y = d === void 0 ? true : d, Z = f === void 0 ? c ?? "cancel" : f, ee = b === void 0 ? "permission" : b, T = Te === void 0 ? true : Te, kt = Me === void 0 ? false : Me, M = (0, import_chunk_7g0kta79.Hte)(), [Gt] = (0, import_chunk_bs4h6795.y)(gt), te = M || Gt, Be;
  if (m[0] !== ee || m[1] !== te) Be = Own(ee, te), m[0] = ee, m[1] = te, m[2] = Be;
  else Be = m[2];
  let _ = Be, ie = M ? void 0 : _, B = kt || _e !== void 0, { entries: ne, exitState: N } = sW(B ? _e : p, At, T), j;
  if (m[3] !== c || m[4] !== T || m[5] !== p) j = T ? [{ action: "confirm:no", run: p, hint: c }] : [], m[3] = c, m[4] = T, m[5] = p, m[6] = j;
  else j = m[6];
  let L;
  if (m[7] !== C) L = C ?? [], m[7] = C, m[8] = L;
  else L = m[8];
  let je;
  if (m[9] !== ne || m[10] !== j || m[11] !== L) je = [...j, ...ne, ...L], m[9] = ne, m[10] = j, m[11] = L, m[12] = je;
  else je = m[12];
  let oe = je, D = (0, import_chunk_bs4h6795.be)(import_chunk_6n6exvyx.Rb), le = (0, import_chunk_bs4h6795.I)(null), [X, Ot] = (0, import_chunk_bs4h6795.y)(t ? 2 : 1), Le;
  if (m[13] !== D || m[14] !== X) Le = () => {
    if (!D || !le.current) {
      return;
    }
    let Xe = (0, import_chunk_8bkqeb5d.Gr)(le.current).height;
    if (Xe !== X) Ot(Xe);
  }, m[13] = D, m[14] = X, m[15] = Le;
  else Le = m[15];
  (0, import_chunk_bs4h6795.It)(Le);
  let ce = (i === null ? 0 : X + 1) + (u ? 0 : 2), Fe;
  if (m[16] !== D || m[17] !== ce) Fe = D ? { ...D, rows: Math.max(0, D.rows - ce) } : null, m[16] = D, m[17] = ce, m[18] = Fe;
  else Fe = m[18];
  let se = Fe, Ue;
  if (m[19] !== B || m[20] !== N || m[21] !== s || m[22] !== Z) Ue = typeof s === "function" ? s(N) : N.pending ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Press ", N.keyName, " again to", " ", B ? "exit" : Z] }) : s != null ? s : void 0, m[19] = B, m[20] = N, m[21] = s, m[22] = Z, m[23] = Ue;
  else Ue = m[23];
  let de = Ue, ue = typeof s === "function" || N.pending || s != null, He;
  if (m[24] !== de || m[25] !== E || m[26] !== c || m[27] !== u || m[28] !== ue || m[29] !== O) He = !u && (0, import_chunk_a46xeenj.e)(import_chunk_jczdrj4v.Rm, { enterAction: E, escapeAction: c, children: ue ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, wrap: O ? "truncate" : void 0, children: de }) : void 0 }), m[24] = de, m[25] = E, m[26] = c, m[27] = u, m[28] = ue, m[29] = O, m[30] = He;
  else He = m[30];
  let me = He;
  const pe = h || M ? 0 : 1;
  let F;
  if (m[31] !== Y || m[32] !== t || m[33] !== i || m[34] !== ie || m[35] !== n || m[36] !== l) F = i !== null && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: le, flexDirection: "column", children: (0, import_chunk_a46xeenj.e)(A, { title: i, titleEnd: n, titleSuffix: l, subtitle: t, isSubtitleDimmed: Y, color: ie }) }), m[31] = Y, m[32] = t, m[33] = i, m[34] = ie, m[35] = n, m[36] = l, m[37] = F;
  else F = m[37];
  let U;
  if (m[38] !== se || m[39] !== a) U = (0, import_chunk_a46xeenj.e)(import_chunk_6n6exvyx.Rb, { value: se, children: a }), m[38] = se, m[39] = a, m[40] = U;
  else U = m[40];
  let H;
  if (m[41] !== F || m[42] !== U) H = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [F, U] }), m[41] = F, m[42] = U, m[43] = H;
  else H = m[43];
  let qe;
  if (m[44] === import_chunk_w1d7ygsk.R) qe = (0, import_chunk_a46xeenj.e)(import_chunk_f3ymc800.$se, {}), m[44] = qe;
  else qe = m[44];
  let ze;
  if (m[45] !== oe || m[46] !== me || m[47] !== pe || m[48] !== H) ze = (0, import_chunk_a46xeenj.o)(import_chunk_jczdrj4v.zi, { scope: "Confirmation", claimFocus: true, flexGrow: pe, flexDirection: "column", bindings: oe, children: [H, me, qe] }), m[45] = oe, m[46] = me, m[47] = pe, m[48] = H, m[49] = ze;
  else ze = m[49];
  let q = ze;
  if (h || M) {
    return q;
  }
  let Je;
  if (m[50] !== q || m[51] !== _) Je = (0, import_chunk_a46xeenj.e)(import_chunk_dfcadv0m.Ph, { color: _, children: q }), m[50] = q, m[51] = _, m[52] = Je;
  else Je = m[52];
  return Je;
}
function iW(x) {
  let f = (0, import_chunk_sng02qpc.k)(17), { title: i, titleEnd: n, titleSuffix: l, subtitle: t, isSubtitleDimmed: d, color: a, insetX: p, children: c } = x, E = a === void 0 ? "permission" : a, [C] = (0, import_chunk_bs4h6795.y)(Nt), b;
  if (f[0] !== E || f[1] !== C) b = Own(E, C), f[0] = E, f[1] = C, f[2] = b;
  else b = f[2];
  let u = b, h;
  if (f[3] !== u || f[4] !== d || f[5] !== t || f[6] !== i || f[7] !== n || f[8] !== l) h = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(A, { title: i, titleEnd: n, titleSuffix: l, subtitle: t, isSubtitleDimmed: d, color: u }) }), f[3] = u, f[4] = d, f[5] = t, f[6] = i, f[7] = n, f[8] = l, f[9] = h;
  else h = f[9];
  let s;
  if (f[10] !== c || f[11] !== h) s = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [h, c] }), f[10] = c, f[11] = h, f[12] = s;
  else s = f[12];
  let O;
  if (f[13] !== u || f[14] !== p || f[15] !== s) O = (0, import_chunk_a46xeenj.e)(import_chunk_dfcadv0m.Ph, { color: u, insetX: p, children: s }), f[13] = u, f[14] = p, f[15] = s, f[16] = O;
  else O = f[16];
  return O;
}
function A(x) {
  let c = (0, import_chunk_sng02qpc.k)(13), { title: i, titleEnd: n, titleSuffix: l, subtitle: t, isSubtitleDimmed: d, color: a } = x, p = d === void 0 ? true : d, E;
  if (c[0] !== a || c[1] !== i || c[2] !== l) E = l == null ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: a, children: i }) : (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: a, children: i }), l] }), c[0] = a, c[1] = i, c[2] = l, c[3] = E;
  else E = c[3];
  let C = E, f;
  if (c[4] !== n || c[5] !== C) f = n ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { justifyContent: "space-between", gap: 2, children: [C, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-start", children: n })] }) : C, c[4] = n, c[5] = C, c[6] = f;
  else f = c[6];
  let b;
  if (c[7] !== p || c[8] !== t) b = t && (p ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: t }) : t), c[7] = p, c[8] = t, c[9] = b;
  else b = c[9];
  let u;
  if (c[10] !== f || c[11] !== b) u = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [f, b] }), c[10] = f, c[11] = b, c[12] = u;
  else u = c[12];
  return u;
}
function Own(x, i) {
  return x;
}
