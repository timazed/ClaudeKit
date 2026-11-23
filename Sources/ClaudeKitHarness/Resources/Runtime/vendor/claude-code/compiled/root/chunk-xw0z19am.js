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
var chunk_xw0z19am_exports = {};
__export(chunk_xw0z19am_exports, {
  bIt: () => bIt
});
module.exports = __toCommonJS(chunk_xw0z19am_exports);
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_zr4j0m9s = require("/$bunfs/root/chunk-zr4j0m9s.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
(0, import_chunk_bs4h6795.G)();
function Ze(nt) {
  return nt;
}
function Ie(Oe) {
  return Oe.slice(0, -((0, import_chunk_em52jhgp.wz)(Oe).length || 1));
}
function et(ne) {
  return /[^\n]$/.test(ne) ? ne + `
` : ne;
}
function tt() {
  return (0, import_chunk_bzyb60p0.Da)(1);
}
function te(u, d) {
  let s = (0, import_chunk_sng02qpc.k)(26), [h, q] = (0, import_chunk_bs4h6795.y)(0), m = (0, import_chunk_8bkqeb5d.oo)(import_chunk_65494s25.qK, h), A = (0, import_chunk_65494s25.X1e)() && m, f = (0, import_chunk_8bkqeb5d.Xe)(), S = (0, import_chunk_8bkqeb5d.si)(), O;
  if (s[0] !== u) O = () => u && (0, import_chunk_k59mf0h7.kj)(), s[0] = u, s[1] = O;
  else O = s[1];
  let [w, C] = (0, import_chunk_bs4h6795.y)(O), [p, T] = (0, import_chunk_bs4h6795.y)();
  if (p !== void 0 && !A) T(void 0), C(true);
  let oe;
  if (s[2] !== p) oe = { follows: p, isEscape: false }, s[2] = p, s[3] = oe;
  else oe = s[3];
  let c = (0, import_chunk_bs4h6795.I)(oe), F = (0, import_chunk_bs4h6795.I)(0), W;
  if (s[4] !== S) W = () => (0, import_chunk_2t5dst6n.Ha)(S, F.current, import_chunk_8bkqeb5d.fkn), s[4] = S, s[5] = W;
  else W = s[5];
  let l = W, H;
  if (s[6] !== u || s[7] !== f) H = function n2(N) {
    if (f) {
      return;
    }
    if (C(true), T(void 0), F.current = Date.now(), u) (0, import_chunk_k59mf0h7.PZ)(N((0, import_chunk_k59mf0h7.S9)()));
  }, s[6] = u, s[7] = f, s[8] = H;
  else H = s[8];
  let n = H;
  (0, import_chunk_f3ymc800.OF)();
  let D;
  if (s[9] !== p || s[10] !== A || s[11] !== w || s[12] !== l || s[13] !== n) D = (b, t, P) => {
    let _ = !t.ctrl && !t.meta && !t.super;
    let R = t.ctrl ? b === "n" : t.downArrow;
    let v = t.ctrl ? b === "p" : t.upArrow;
    let B = b || P;
    c.current = { follows: p, isEscape: t.escape };
    let se = A && !l() && !t.shift && !t.meta;
    if (T(se && R ? "down" : se && v ? "up" : void 0), (R || v) && !se) n(Ze);
    else if (t.backspace) n(Ie);
    else if (t.return && w && p === void 0) n(et);
    else if (_ && new RegExp("^\\P{Cc}", "u").test(B)) n((ot) => ot + B);
  }, s[9] = p, s[10] = A, s[11] = w, s[12] = l, s[13] = n, s[14] = D;
  else D = s[14];
  (0, import_chunk_6fvsq616.Pa)(D);
  const re = w && !f;
  let xe;
  if (s[15] !== u || s[16] !== d || s[17] !== w || s[18] !== f || s[19] !== l || s[20] !== n || s[21] !== h || s[22] !== re) {
    let Ce;
    if (s[24] !== n) Ce = (st) => n((rt) => rt + st.replace(/\r\n?/g, `
`)), s[24] = n, s[25] = Ce;
    else Ce = s[25];
    xe = { refusals: h, isHeld: re, takes(He) {
      if (f) {
        return true;
      }
      let be = import_chunk_8bkqeb5d.wP.currentEvent === null;
      let { follows: Re, isEscape: ve } = c.current;
      let Ee = He ? !d && (be || Re === "down") : be || (ve ? !l() : !w || Re !== void 0);
      if (!Ee) C(true), q(h + (He || !ve ? 1 : 0));
      else if (u && (0, import_chunk_k59mf0h7.S9)().trim().length === 1) (0, import_chunk_k59mf0h7.PZ)("");
      return Ee;
    }, noteText: Ce };
    s[15] = u, s[16] = d, s[17] = w, s[18] = f, s[19] = l, s[20] = n, s[21] = h, s[22] = re, s[23] = xe;
  } else xe = s[23];
  return xe;
}
function bIt(u) {
  let c = (0, import_chunk_sng02qpc.k)(33), { folder: d, atStartup: h, onAnswer: q } = u, m = h === void 0 ? false : h;
  (0, import_chunk_vs99e3g5.$l)(tt, void 0, m);
  let { frame: A, isShort: f, isCutOff: S } = (0, import_chunk_zr4j0m9s.JYn)(), s = (0, import_chunk_6n6exvyx.rl)() && S, { refusals: O, isHeld: w, takes: C, noteText: p } = te(m, s), T = `Esc to ${m ? "exit" : "cancel"}`, oe = m && (0, import_chunk_k59mf0h7.kj)() ? " (your text is kept)" : "", F;
  if (c[0] !== m || c[1] !== q) F = (W) => {
    (0, import_chunk_y53wbr8a.a)("tengu_added_folder_trust_answered", { trusted: W, atStartup: m }), q(W);
  }, c[0] = m, c[1] = q, c[2] = F;
  else F = c[2];
  let l = F, H;
  if (c[3] !== s || c[4] !== T) H = s && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "warning", children: [T, " \xB7 To add it, first make the window taller"] }), c[3] = s, c[4] = T, c[5] = H;
  else H = c[5];
  let N;
  if (c[6] !== p) N = (n) => p(n.text), c[6] = p, c[7] = N;
  else N = c[7];
  const D = m ? "at startup" : "later", b = w ? `${T} \xB7 To add it, press \u2193 to Yes, then Enter${oe}` : void 0;
  let t, P;
  if (c[8] !== l) t = () => {
    if (!(0, import_chunk_bzyb60p0.Zr)()) l(true);
  }, P = () => l(false), c[8] = l, c[9] = t, c[10] = P;
  else t = c[9], P = c[10];
  let _;
  if (c[11] !== d.path || c[12] !== d.repository || c[13] !== f || c[14] !== D || c[15] !== b || c[16] !== t || c[17] !== P || c[18] !== C) _ = (0, import_chunk_a46xeenj.e)(import_chunk_zr4j0m9s.xwn, { adding: D, isShort: f, takes: C, hint: b, directory: d.path, trustRoot: d.repository, onConfirm: t, onCancel: P }), c[11] = d.path, c[12] = d.repository, c[13] = f, c[14] = D, c[15] = b, c[16] = t, c[17] = P, c[18] = C, c[19] = _;
  else _ = c[19];
  let R;
  if (c[20] !== A || c[21] !== O || c[22] !== N || c[23] !== _) R = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: A, flexDirection: "column", flexShrink: 0, tabIndex: 0, autoFocus: true, onPaste: N, children: _ }, O), c[20] = A, c[21] = O, c[22] = N, c[23] = _, c[24] = R;
  else R = c[24];
  let v;
  if (c[25] !== d.path || c[26] !== s || c[27] !== S) v = S && !s && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, children: [" Adding: ", (0, import_chunk_xfj2cwfv.Ake)(d.path)] }), c[25] = d.path, c[26] = s, c[27] = S, c[28] = v;
  else v = c[28];
  let B;
  if (c[29] !== R || c[30] !== v || c[31] !== H) B = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [H, R, v] }), c[29] = R, c[30] = v, c[31] = H, c[32] = B;
  else B = c[32];
  return B;
}
