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
var chunk_sktqth1b_exports = {};
__export(chunk_sktqth1b_exports, {
  E5t: () => E5t,
  pZe: () => pZe
});
module.exports = __toCommonJS(chunk_sktqth1b_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_6bnjn6js = require("/$bunfs/root/chunk-6bnjn6js.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function Ee() {
}
function pZe(ae) {
  let n = (0, import_chunk_sng02qpc.k)(53), { offer: t, entry: c, credentials: s, onDone: f } = ae, [l, P] = (0, import_chunk_bs4h6795.y)(false), N = (0, import_chunk_bs4h6795.I)(false), b = (0, import_chunk_z8dyhx9v.Ns)(import_chunk_2t5dst6n._s), { refusedWithin: C, noteRefused: h } = (0, import_chunk_z8dyhx9v.po)(), x = (0, import_chunk_z8dyhx9v.Zu)(), u, i, v, d, w, A, B, S, E, H, D, K, O, j;
  if (n[0] !== l || n[1] !== s || n[2] !== c || n[3] !== b || n[4] !== h || n[5] !== t || n[6] !== f || n[7] !== C || n[8] !== x) {
    w = import_chunk_w1d7ygsk.Mn;
    no: {
      let a = (0, import_chunk_bzyb60p0.A6)();
      let m = (0, import_chunk_6bnjn6js.bIe)(t);
      let L2;
      if (n[23] !== t) L2 = (0, import_chunk_6bnjn6js.ojs)(t), n[23] = t, n[24] = L2;
      else L2 = n[24];
      let Y = L2;
      let T2;
      if (n[25] !== b || n[26] !== h || n[27] !== C) T2 = function W2() {
        if (b() || C(import_chunk_2t5dst6n._s)) {
          return h(), true;
        }
        return false;
      }, n[25] = b, n[26] = h, n[27] = C, n[28] = T2;
      else T2 = n[28];
      let W = T2;
      let ce;
      if (n[29] !== c || n[30] !== t || n[31] !== f || n[32] !== W) ce = function v2() {
        if (N.current || W()) {
          return;
        }
        N.current = true, f((0, import_chunk_6bnjn6js.ijs)(c, t));
      }, n[29] = c, n[30] = t, n[31] = f, n[32] = W, n[33] = ce;
      else ce = n[33];
      v = ce;
      j = function j2() {
        if (N.current || W()) {
          return;
        }
        N.current = true, P(true), (0, import_chunk_6bnjn6js.ljs)(c, s, t).then(f).catch(() => {
          f({ outcome: "unavailable", text: (0, import_chunk_bzyb60p0.Yw)(t.origin === "wall" ? a.unconfirmedLine : a.unconfirmedAnytimeLine, m) });
        });
      };
      if (l) {
        const q2 = (0, import_chunk_bzyb60p0.Yw)(a.confirmTitle, m);
        let le;
        if (n[34] === import_chunk_w1d7ygsk.R) le = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Resetting your limits\u2026 this usually takes a few seconds" }), n[34] = le;
        else le = n[34];
        w = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: q2, onCancel: Ee, exitOnCtrlCD: true, hideInputGuide: true, children: le });
        break no;
      }
      i = import_chunk_vs99e3g5.Oe;
      D = (0, import_chunk_bzyb60p0.Yw)(a.confirmTitle, m);
      K = v;
      let q;
      if (n[35] !== Y) q = Y === void 0 ? null : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: Y }), n[35] = Y, n[36] = q;
      else q = n[36];
      O = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [q, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: (0, import_chunk_bzyb60p0.Yw)(a.confirmBody, m) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_bzyb60p0.Yw)(a.confirmDetail, m) })] });
      u = import_chunk_65494s25.ar;
      d = W;
      A = x;
      B = import_chunk_2t5dst6n._s;
      S = true;
      E = (0, import_chunk_bzyb60p0.Yw)(a.confirmYes, m);
      H = (0, import_chunk_bzyb60p0.Yw)(a.confirmNo, m);
    }
    n[0] = l, n[1] = s, n[2] = c, n[3] = b, n[4] = h, n[5] = t, n[6] = f, n[7] = C, n[8] = x, n[9] = u, n[10] = i, n[11] = v, n[12] = d, n[13] = w, n[14] = A, n[15] = B, n[16] = S, n[17] = E, n[18] = H, n[19] = D, n[20] = K, n[21] = O, n[22] = j;
  } else u = n[9], i = n[10], v = n[11], d = n[12], w = n[13], A = n[14], B = n[15], S = n[16], E = n[17], H = n[18], D = n[19], K = n[20], O = n[21], j = n[22];
  if (w !== import_chunk_w1d7ygsk.Mn) return w;
  let L;
  if (n[37] !== u || n[38] !== v || n[39] !== d || n[40] !== A || n[41] !== B || n[42] !== S || n[43] !== E || n[44] !== H || n[45] !== j) L = (0, import_chunk_a46xeenj.e)(u, { refuseInput: d, openedAt: A, windowMs: B, hideIndexes: S, confirmLabel: E, cancelLabel: H, onConfirm: j, onCancel: v }), n[37] = u, n[38] = v, n[39] = d, n[40] = A, n[41] = B, n[42] = S, n[43] = E, n[44] = H, n[45] = j, n[46] = L;
  else L = n[46];
  let T;
  if (n[47] !== i || n[48] !== L || n[49] !== D || n[50] !== K || n[51] !== O) T = (0, import_chunk_a46xeenj.o)(i, { title: D, onCancel: K, children: [O, L] }), n[47] = i, n[48] = L, n[49] = D, n[50] = K, n[51] = O, n[52] = T;
  else T = n[52];
  return T;
}
(0, import_chunk_bs4h6795.G)();
function Re(a) {
  return { label: (0, import_chunk_6bnjn6js.swn)(a), value: a.kind };
}
function We(m) {
  return { label: m.text, value: m.kind, disabled: true };
}
function E5t(ae) {
  let n = (0, import_chunk_sng02qpc.k)(30), { offers: t, unusable: c, entry: s, credentials: f, onDone: l } = ae, [P, N] = (0, import_chunk_bs4h6795.y)(null), b = (0, import_chunk_bs4h6795.I)(false), C = (0, import_chunk_z8dyhx9v.Ns)(import_chunk_2t5dst6n._s), { refusedWithin: h, noteRefused: x } = (0, import_chunk_z8dyhx9v.po)();
  if (P !== null) {
    let u2;
    if (n[0] !== P || n[1] !== f || n[2] !== s || n[3] !== l) u2 = (0, import_chunk_a46xeenj.e)(pZe, { offer: P, entry: s, credentials: f, onDone: l }), n[0] = P, n[1] = f, n[2] = s, n[3] = l, n[4] = u2;
    else u2 = n[4];
    return u2;
  }
  let u;
  if (n[5] !== C || n[6] !== x || n[7] !== h) u = function i2() {
    if (C() || h(import_chunk_2t5dst6n._s)) {
      return x(), true;
    }
    return false;
  }, n[5] = C, n[6] = x, n[7] = h, n[8] = u;
  else u = n[8];
  let i = u, v;
  if (n[9] !== s || n[10] !== t || n[11] !== l || n[12] !== i) v = function d2() {
    if (b.current || i()) {
      return;
    }
    b.current = true, l((0, import_chunk_6bnjn6js.ajs)(s, t));
  }, n[9] = s, n[10] = t, n[11] = l, n[12] = i, n[13] = v;
  else v = n[13];
  let d = v, w;
  if (n[14] !== s || n[15] !== t || n[16] !== i) w = function E2(A) {
    let S = t.find((B) => B.kind === A);
    if (S === void 0 || b.current || i()) {
      return;
    }
    (0, import_chunk_6bnjn6js.B$o)(s, S), N(S);
  }, n[14] = s, n[15] = t, n[16] = i, n[17] = w;
  else w = n[17];
  let E = w, H;
  if (n[18] !== t || n[19] !== c) H = [...t.map(Re), ...c.map(We)], n[18] = t, n[19] = c, n[20] = H;
  else H = n[20];
  let D = H, K;
  if (n[21] === import_chunk_w1d7ygsk.R) K = (0, import_chunk_bzyb60p0.A6)(), n[21] = K;
  else K = n[21];
  let O;
  if (n[22] !== E || n[23] !== d || n[24] !== D || n[25] !== i) O = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: D, onChange: E, onCancel: d, refuseInput: i, selectedValue: import_chunk_s73318k8.Do, hideIndexes: true, visibleOptionCount: D.length }), n[22] = E, n[23] = d, n[24] = D, n[25] = i, n[26] = O;
  else O = n[26];
  let j;
  if (n[27] !== d || n[28] !== O) j = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: K.chooseTitle, onCancel: d, children: O }), n[27] = d, n[28] = O, n[29] = j;
  else j = n[29];
  return j;
}
