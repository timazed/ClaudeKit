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
var chunk_0aj1162w_exports = {};
__export(chunk_0aj1162w_exports, {
  f9t: () => f9t
});
module.exports = __toCommonJS(chunk_0aj1162w_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_zvx9zp0y = require("/$bunfs/root/chunk-zvx9zp0y.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_xw0z19am = require("/$bunfs/root/chunk-xw0z19am.js");
var import_chunk_hnh569cb = require("/$bunfs/root/chunk-hnh569cb.js");
var import_chunk_ykad4ek3 = require("/$bunfs/root/chunk-ykad4ek3.js");
var import_chunk_yss9hm8r = require("/$bunfs/root/chunk-yss9hm8r.js");
var import_chunk_8zg5scwx = require("/$bunfs/root/chunk-8zg5scwx.js");
var import_chunk_3pqaw3hv = require("/$bunfs/root/chunk-3pqaw3hv.js");
var import_chunk_8z6a79mx = require("/$bunfs/root/chunk-8z6a79mx.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var M = [{ value: "yes-session", label: "Yes, for this session" }, { value: "yes-remember", label: "Yes, and remember this directory" }, { value: "no", label: "No" }];
function P() {
  let K = (0, import_chunk_sng02qpc.k)(1), s;
  if (K[0] === import_chunk_w1d7ygsk.R) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on." }), K[0] = s;
  else s = K[0];
  return s;
}
function O(K) {
  let d = (0, import_chunk_sng02qpc.k)(5), { path: s } = K, t;
  if (d[0] !== s) t = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "permission", children: s }), d[0] = s, d[1] = t;
  else t = d[1];
  let p;
  if (d[2] === import_chunk_w1d7ygsk.R) p = (0, import_chunk_a46xeenj.e)(P, {}), d[2] = p;
  else p = d[2];
  let n;
  if (d[3] !== t) n = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [t, p] }), d[3] = t, d[4] = n;
  else n = d[4];
  return n;
}
function X(K) {
  let l = (0, import_chunk_sng02qpc.k)(13), { value: s, onChange: d, onSubmit: t, error: p, suggestions: n, selectedSuggestion: v } = K, T;
  if (l[0] !== n.length) T = n.length > 0 ? [{ on: ["up", "down"], hint: "navigate" }, { on: "tab", hint: "complete" }] : null, l[0] = n.length, l[1] = T;
  else T = l[1];
  (0, import_chunk_zvx9zp0y.nl)(T);
  let m;
  if (l[2] !== p || l[3] !== d || l[4] !== t || l[5] !== s) m = (0, import_chunk_a46xeenj.e)(import_chunk_yss9hm8r.hd, { label: "Directory path", placeholder: "../other-project", value: s, onChange: d, onSubmit: t, error: p, disableCursorMovementForUpDownKeys: true }), l[2] = p, l[3] = d, l[4] = t, l[5] = s, l[6] = m;
  else m = l[6];
  let h;
  if (l[7] !== v || l[8] !== n) h = n.length > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8zg5scwx.xZe, { suggestions: n, selectedSuggestion: v, noPad: true }), l[7] = v, l[8] = n, l[9] = h;
  else h = l[9];
  let i;
  if (l[10] !== m || l[11] !== h) i = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [m, h] }), l[10] = m, l[11] = h, l[12] = i;
  else i = l[12];
  return i;
}
function f9t(K) {
  let i = (0, import_chunk_sng02qpc.k)(45), { onAddDirectory: s, onAlreadyAccessible: d, onCancel: t, permissionContext: p, directoryPath: n } = K, v = (0, import_chunk_ykad4ek3.Eo)(), [l, T] = (0, import_chunk_bs4h6795.y)(""), [m, h] = (0, import_chunk_bs4h6795.y)(null), pe;
  if (i[0] === import_chunk_w1d7ygsk.R) pe = [], i[0] = pe;
  else pe = i[0];
  let [c, me] = (0, import_chunk_bs4h6795.y)(pe), [w, U] = (0, import_chunk_bs4h6795.y)(0), [f, ye] = (0, import_chunk_bs4h6795.y)(), he;
  if (i[1] !== v) he = async (fe) => {
    if (!fe) {
      me([]), U(0);
      return;
    }
    let Ze = await (0, import_chunk_3pqaw3hv.H1r)(v, fe);
    me(Ze), U(0);
  }, i[1] = v, i[2] = he;
  else he = i[2];
  let E = (0, import_chunk_8bkqeb5d.dY)(he, 100), be, Se;
  if (i[3] !== E || i[4] !== l) be = () => {
    E(l);
  }, Se = [l, E], i[3] = E, i[4] = l, i[5] = be, i[6] = Se;
  else be = i[5], Se = i[6];
  (0, import_chunk_bs4h6795.H)(be, Se);
  let ve;
  if (i[7] === import_chunk_w1d7ygsk.R) ve = ($e) => {
    let _e = $e.id + "/";
    T(_e), h(null);
  }, i[7] = ve;
  else ve = i[7];
  let et = ve, I, N;
  if (i[8] !== s || i[9] !== d || i[10] !== p) N = async (tt) => {
    let Z = await (0, import_chunk_hnh569cb.EMe)(tt, p);
    let we = (0, import_chunk_hnh569cb.iAn)(Z);
    if (we === void 0) I(Z);
    else ye({ folder: we, result: Z });
  }, I = (C) => {
    if (C.resultType === "success") {
      s(C.absolutePath, false);
      return;
    }
    if (C.resultType === "alreadyInWorkingDirectory" && !C.isExactMatch && d?.(C)) {
      return;
    }
    h((0, import_chunk_hnh569cb.rUe)(C));
  }, i[8] = s, i[9] = d, i[10] = p, i[11] = I, i[12] = N;
  else I = i[11], N = i[12];
  let Ce;
  if (i[13] !== w || i[14] !== c) Ce = (a) => {
    if (c.length > 0) {
      if (a.name === "tab") {
        a.preventDefault();
        let Ae = c[w];
        if (Ae) et(Ae);
        return;
      }
      if (a.name === "up" || a.ctrl && a.name === "p") {
        a.preventDefault(), U((De) => De <= 0 ? c.length - 1 : De - 1);
        return;
      }
      if (a.name === "down" || a.ctrl && a.name === "n") {
        a.preventDefault(), U((Pe) => Pe >= c.length - 1 ? 0 : Pe + 1);
        return;
      }
    }
  }, i[13] = w, i[14] = c, i[15] = Ce;
  else Ce = i[15];
  let _ = Ce, ke;
  if (i[16] !== n || i[17] !== s || i[18] !== t) ke = (ot) => {
    if (!n) {
      return;
    }
    Pt: switch (ot) {
      case "yes-session": {
        s(n, false);
        break Pt;
      }
      case "yes-remember": {
        s(n, true);
        break Pt;
      }
      case "no": {
        t();
      }
    }
  }, i[16] = n, i[17] = s, i[18] = t, i[19] = ke;
  else ke = i[19];
  let j = ke;
  if (f !== void 0) {
    let g2;
    if (i[20] !== I || i[21] !== t || i[22] !== f.result) g2 = (nt) => {
      if (ye(void 0), nt) I(f.result);
      else t();
    }, i[20] = I, i[21] = t, i[22] = f.result, i[23] = g2;
    else g2 = i[23];
    let A2;
    if (i[24] !== g2 || i[25] !== f.folder) A2 = (0, import_chunk_a46xeenj.e)(import_chunk_xw0z19am.bIt, { folder: f.folder, onAnswer: g2 }), i[24] = g2, i[25] = f.folder, i[26] = A2;
    else A2 = i[26];
    return A2;
  }
  let g;
  if (i[27] !== t) g = [{ action: "confirm:no", run: t }], i[27] = t, i[28] = g;
  else g = i[28];
  const A = n ? void 0 : "add";
  let V;
  if (i[29] !== l || i[30] !== n || i[31] !== m || i[32] !== j || i[33] !== N || i[34] !== w || i[35] !== c) V = n ? (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.e)(O, { path: n }), (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { declineValue: "no", options: M, onChange: j, onCancel: () => j("no") })] }) : (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.e)(P, {}), (0, import_chunk_a46xeenj.e)(X, { value: l, onChange: (rt) => {
    h(null), T(rt);
  }, onSubmit: N, error: m, suggestions: c, selectedSuggestion: w })] }), i[29] = l, i[30] = n, i[31] = m, i[32] = j, i[33] = N, i[34] = w, i[35] = c, i[36] = V;
  else V = i[36];
  let W;
  if (i[37] !== t || i[38] !== V || i[39] !== g || i[40] !== A) W = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: "Add directory to workspace", onCancel: t, isCancelActive: false, keys: g, enterAction: A, children: V }), i[37] = t, i[38] = V, i[39] = g, i[40] = A, i[41] = W;
  else W = i[41];
  let Re;
  if (i[42] !== _ || i[43] !== W) Re = (0, import_chunk_a46xeenj.e)(import_chunk_8z6a79mx.il, { onKeyDown: _, children: W }), i[42] = _, i[43] = W, i[44] = Re;
  else Re = i[44];
  return Re;
}
