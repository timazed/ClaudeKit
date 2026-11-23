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
var chunk_yss9hm8r_exports = {};
__export(chunk_yss9hm8r_exports, {
  hd: () => hd
});
module.exports = __toCommonJS(chunk_yss9hm8r_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_gd8mknr6 = require("/$bunfs/root/chunk-gd8mknr6.js");
var import_chunk_6qkpxgbg = require("/$bunfs/root/chunk-6qkpxgbg.js");
var import_chunk_bw6akpwn = require("/$bunfs/root/chunk-bw6akpwn.js");
var import_chunk_dw56fm8m = require("/$bunfs/root/chunk-dw56fm8m.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_8ym8b8h9 = require("/$bunfs/root/chunk-8ym8b8h9.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var ve = 8, we = 2, Fe = 12, Oe = 2;
function hd(re) {
  let n = (0, import_chunk_sng02qpc.k)(85), x, u, m, b, h, C, E, je, v, ze, B, oe, ie, t, w, Je;
  if (n[0] !== re) ({ label: C, prefix: B, hint: b, warning: w, error: m, isFocused: oe, width: Je, value: t, placeholder: ze, onChange: E, onSubmit: v, multiline: ie, inputFilter: h, cursorOffset: x, onChangeCursorOffset: je, ...u } = re), n[0] = re, n[1] = x, n[2] = u, n[3] = m, n[4] = b, n[5] = h, n[6] = C, n[7] = E, n[8] = je, n[9] = v, n[10] = ze, n[11] = B, n[12] = oe, n[13] = ie, n[14] = t, n[15] = w, n[16] = Je;
  else x = n[1], u = n[2], m = n[3], b = n[4], h = n[5], C = n[6], E = n[7], je = n[8], v = n[9], ze = n[10], B = n[11], oe = n[12], ie = n[13], t = n[14], w = n[15], Je = n[16];
  let l = oe === void 0 ? true : oe, d = ie === void 0 ? false : ie, F = (0, import_chunk_8bkqeb5d.Xe)(), [gt] = (0, import_chunk_bs4h6795.y)(import_chunk_8ym8b8h9._h), D = !F && !gt, P = D ? B : B ? `> ${B}` : ">", R = (0, import_chunk_6n6exvyx.qe)(), { rows: se } = (0, import_chunk_6n6exvyx.Qo)(R), le = (0, import_chunk_bs4h6795.I)(null), Qe;
  if (n[17] !== R) Qe = () => le.current && (0, import_chunk_8bkqeb5d.Gr)(le.current).width || R.columns, n[17] = R, n[18] = Qe;
  else Qe = n[18];
  let Ct = (0, import_chunk_8bkqeb5d.Wo)(Qe), [s, Ye] = (0, import_chunk_bs4h6795.y)(t.length), Ze;
  if (n[19] !== s || n[20] !== t) Ze = { text: t, before: t, caret: s }, n[19] = s, n[20] = t, n[21] = Ze;
  else Ze = n[21];
  let [a, ue] = (0, import_chunk_bs4h6795.y)(Ze);
  if (t !== a.text) ue({ text: t, before: t, caret: s }), Ye(t === a.before ? a.caret : t.length);
  else if (t !== a.before) ue({ text: t, before: t, caret: s });
  let f = Math.max(Oe, Ct), O, ae, L, et;
  if (n[22] !== s || n[23] !== x || n[24] !== u || n[25] !== F || n[26] !== se || n[27] !== f || n[28] !== t) {
    let ce = (0, import_chunk_8bkqeb5d.Du)(se - Fe, we, ve);
    let nt = import_chunk_gd8mknr6.pl.fromText(t, f, x ?? s);
    ae = nt.measuredText.lineCount;
    O = !F && !u.mask && ae > ce;
    L = O ? ce - 1 : ce;
    et = nt.getViewportStartLine(L);
    n[22] = s, n[23] = x, n[24] = u, n[25] = F, n[26] = se, n[27] = f, n[28] = t, n[29] = O, n[30] = ae, n[31] = L, n[32] = et;
  } else O = n[29], ae = n[30], L = n[31], et = n[32];
  let T = et, me = ae - T - L, A = (0, import_chunk_8bkqeb5d.si)(), rt = (0, import_chunk_bs4h6795.I)(void 0), de = (0, import_chunk_bs4h6795.I)(false);
  const fe = Je ?? "100%";
  let N;
  if (n[33] !== C) N = C && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: C }), n[33] = C, n[34] = N;
  else N = n[34];
  const pe = Boolean(m);
  let M;
  if (n[35] !== l || n[36] !== D || n[37] !== pe) M = (0, import_chunk_bw6akpwn.kIt)({ isFramed: D, isFocused: l, isInvalid: pe }), n[35] = l, n[36] = D, n[37] = pe, n[38] = M;
  else M = n[38];
  let H;
  if (n[39] !== P) H = P && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: P }) }), n[39] = P, n[40] = H;
  else H = n[40];
  const xe = ze ?? void 0;
  let U;
  if (n[41] !== s || n[42] !== E || n[43] !== t) U = (ot) => {
    ue({ text: ot, before: t, caret: s }), E(ot);
  }, n[41] = s, n[42] = E, n[43] = t, n[44] = U;
  else U = n[44];
  let V;
  if (n[45] !== A || n[46] !== v) V = v && ((vt) => {
    if (de.current || rt.current === A()) {
      return;
    }
    rt.current = A();
    let it = v(vt);
    if (it instanceof Promise) de.current = true, it.finally(() => {
      de.current = false;
    });
  }), n[45] = A, n[46] = v, n[47] = V;
  else V = n[47];
  const be = x ?? s, he = je ?? Ye, ge = F ? void 0 : L, Ce = !l;
  let _;
  if (n[48] !== h || n[49] !== d) _ = (st, wt) => (h ? h(st, wt) : st).replace(/\r\n|\r|\n/g, d ? `
` : ""), n[48] = h, n[49] = d, n[50] = _;
  else _ = n[50];
  let q;
  if (n[51] !== a.text || n[52] !== u || n[53] !== l || n[54] !== d || n[55] !== xe || n[56] !== U || n[57] !== V || n[58] !== be || n[59] !== he || n[60] !== ge || n[61] !== Ce || n[62] !== _ || n[63] !== f) q = (0, import_chunk_a46xeenj.e)(import_chunk_gd8mknr6.fA, { ...u, placeholder: xe, value: a.text, onChange: U, onSubmit: V, cursorOffset: be, onChangeCursorOffset: he, columns: f, maxVisibleLines: ge, focus: l, showCursor: l, dimColor: Ce, multiline: d, inputFilter: _, disableBackslashReturn: true, historyOnClear: false, clearOnSubmit: false }), n[51] = a.text, n[52] = u, n[53] = l, n[54] = d, n[55] = xe, n[56] = U, n[57] = V, n[58] = be, n[59] = he, n[60] = ge, n[61] = Ce, n[62] = _, n[63] = f, n[64] = q;
  else q = n[64];
  let K;
  if (n[65] !== T || n[66] !== me || n[67] !== O) K = O && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "above", count: T }), (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "below", count: me })] }), n[65] = T, n[66] = me, n[67] = O, n[68] = K;
  else K = n[68];
  let W;
  if (n[69] !== q || n[70] !== K) W = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: le, flexDirection: "column", flexGrow: 1, flexBasis: 0, minHeight: 1, children: [q, K] }), n[69] = q, n[70] = K, n[71] = W;
  else W = n[71];
  let j;
  if (n[72] !== H || n[73] !== W || n[74] !== M) j = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ...M, gap: 1, children: [H, W] }), n[72] = H, n[73] = W, n[74] = M, n[75] = j;
  else j = n[75];
  let z;
  if (n[76] !== m || n[77] !== b || n[78] !== w) z = m ? (0, import_chunk_a46xeenj.e)(import_chunk_dw56fm8m.Ca, { error: m }) : w ? (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "warning", children: w }) : b ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: b }) : null, n[76] = m, n[77] = b, n[78] = w, n[79] = z;
  else z = n[79];
  let lt;
  if (n[80] !== j || n[81] !== z || n[82] !== fe || n[83] !== N) lt = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexShrink: 0, width: fe, children: [N, j, z] }), n[80] = j, n[81] = z, n[82] = fe, n[83] = N, n[84] = lt;
  else lt = n[84];
  return lt;
}
