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
var chunk_65494s25_exports = {};
__export(chunk_65494s25_exports, {
  X1e: () => X1e,
  ar: () => ar,
  qK: () => qK
});
module.exports = __toCommonJS(chunk_65494s25_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_ddk99w14 = require("/$bunfs/root/chunk-ddk99w14.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var qK = 500;
function X1e(L = qK) {
  let o = (0, import_chunk_ddk99w14.Op)();
  return (0, import_chunk_8bkqeb5d.oo)(L, o);
}
function ar(L) {
  let a = (0, import_chunk_sng02qpc.k)(36), { onConfirm: o, onCancel: n, confirmLabel: U, cancelLabel: _, cancelFirst: V, onUpFromFirstItem: h, focus: X, hideIndexes: Y, disablePrintableKeybindings: q, onDownFromLastItem: R, refuseInput: l, openedAt: M, windowMs: se, armAfterMs: v } = L, i = U === void 0 ? "Yes" : U, t = _ === void 0 ? "No" : _, g = V === void 0 ? false : V, ae = X === void 0 ? "confirm" : X, x = Y === void 0 ? false : Y, D = q === void 0 ? false : q, [N] = (0, import_chunk_bs4h6795.y)(ae), c = X1e(v ?? null) || v === void 0;
  if ((0, import_chunk_8bkqeb5d.Xe)()) {
    const s2 = se ?? v;
    let m2;
    if (a[0] !== t || a[1] !== i || a[2] !== n || a[3] !== o || a[4] !== M || a[5] !== l || a[6] !== s2) m2 = (0, import_chunk_a46xeenj.e)(import_chunk_z8dyhx9v.F2s, { confirmLabel: i, cancelLabel: t, onConfirm: o, onCancel: n, refuseInput: l, openedAt: M, windowMs: s2 }), a[0] = t, a[1] = i, a[2] = n, a[3] = o, a[4] = M, a[5] = l, a[6] = s2, a[7] = m2;
    else m2 = a[7];
    return m2;
  }
  let s;
  if (a[8] !== i || a[9] !== c) s = c ? i : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: i }), a[8] = i, a[9] = c, a[10] = s;
  else s = a[10];
  let m;
  if (a[11] !== s) m = { label: s, value: "confirm" }, a[11] = s, a[12] = m;
  else m = a[12];
  let d = m, f;
  if (a[13] !== t || a[14] !== c) f = c ? t : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: t }), a[13] = t, a[14] = c, a[15] = f;
  else f = a[15];
  let z;
  if (a[16] !== f) z = { label: f, value: "cancel" }, a[16] = f, a[17] = z;
  else z = a[17];
  let u = z, b;
  if (a[18] !== u || a[19] !== g || a[20] !== d) b = g ? [u, d] : [d, u], a[18] = u, a[19] = g, a[20] = d, a[21] = b;
  else b = a[21];
  const P = !c;
  let p;
  if (a[22] !== n || a[23] !== o) p = (ie) => ie === "confirm" ? o() : n(), a[22] = n, a[23] = o, a[24] = p;
  else p = a[24];
  let B;
  if (a[25] !== D || a[26] !== x || a[27] !== n || a[28] !== R || a[29] !== h || a[30] !== l || a[31] !== N || a[32] !== b || a[33] !== P || a[34] !== p) B = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: b, onUpFromFirstItem: h, selectedValue: import_chunk_s73318k8.Do, hideIndexes: x, disablePrintableKeybindings: D, declineValue: "cancel", isDisabled: P, onDownFromLastItem: R, refuseInput: l, defaultFocusValue: N, onChange: p, onCancel: n }), a[25] = D, a[26] = x, a[27] = n, a[28] = R, a[29] = h, a[30] = l, a[31] = N, a[32] = b, a[33] = P, a[34] = p, a[35] = B;
  else B = a[35];
  return B;
}
