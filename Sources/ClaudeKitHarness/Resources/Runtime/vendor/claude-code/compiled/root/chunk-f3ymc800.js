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
var chunk_f3ymc800_exports = {};
__export(chunk_f3ymc800_exports, {
  $se: () => $se,
  EIt: () => EIt,
  OF: () => OF,
  OJ: () => OJ,
  Qce: () => Qce,
  e7n: () => e7n,
  u_e: () => u_e,
  xya: () => xya
});
module.exports = __toCommonJS(chunk_f3ymc800_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var u_e = (0, import_chunk_bs4h6795.an)(null);
function xya() {
  let s = (0, import_chunk_bs4h6795.be)(u_e), n = (0, import_chunk_bs4h6795.be)(import_chunk_2t5dst6n.TO);
  return () => {
    if (s === null || !n) return;
    try {
      n.getState().open.find((t) => t.id === s)?.onClaimed?.();
    } catch (t) {
      (0, import_chunk_k449cc64.i)(t);
    }
  };
}
function e7n() {
  let s = (0, import_chunk_bs4h6795.be)(u_e), n = (0, import_chunk_bs4h6795.be)(import_chunk_2t5dst6n.TO), t = s === null || !n ? void 0 : n.getState().open.find((l) => l.id === s)?.countedAsk, d = t === void 0 ? void 0 : n?.askTally;
  return (0, import_chunk_bs4h6795.Ot)(d?.subscribe ?? X, () => t === void 0 || !d ? null : d.positionLabel(t));
}
function OJ(s, n, { perReveal: t = false } = {}) {
  let d = (0, import_chunk_bs4h6795.be)(u_e), l = (0, import_chunk_bs4h6795.be)(import_chunk_2t5dst6n.TO), f = (0, import_chunk_bs4h6795.mo)(n), [m] = (0, import_chunk_bs4h6795.y)(() => t && d !== null && l ? l.getState().open.find((D) => D.id === d)?.revealSeq ?? 0 : 0);
  (0, import_chunk_bs4h6795.H)(() => {
    if (d !== null && l) {
      if (!l.firstReveal(d, t ? `${s}@${m}` : s)) return;
    }
    f();
  }, [d, l, s, t, m]);
}
function X() {
  return () => {
  };
}
(0, import_chunk_bs4h6795.G)();
function Qce() {
  let s = (0, import_chunk_sng02qpc.k)(1), n;
  if (s[0] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: "Not answered yet" }), s[0] = n;
  else n = s[0];
  return n;
}
var EIt = (0, import_chunk_bs4h6795.an)(false);
function $se(s) {
  let p = (0, import_chunk_sng02qpc.k)(19), { isMenu: n, shows: t, owner: d, onDropped: l } = s, f = d === void 0 ? null : d, m = (0, import_chunk_bs4h6795.be)(u_e) !== null, D = (0, import_chunk_bs4h6795.be)(EIt), u = n ?? (m ? void 0 : D), w = (0, import_chunk_bs4h6795.I)(null), [c, de] = (0, import_chunk_bs4h6795.y)(null), [S, le] = (0, import_chunk_bs4h6795.y)(false), L, P;
  if (p[0] !== u) L = () => u === void 0 ? void 0 : _(w.current), P = [u], p[0] = u, p[1] = L, p[2] = P;
  else L = p[1], P = p[2];
  (0, import_chunk_bs4h6795.It)(L, P);
  let j;
  if (p[3] !== u || p[4] !== c || p[5] !== l || p[6] !== f) j = () => {
    if (u === void 0) {
      return;
    }
    F(w.current, { isMenu: u, owner: f, onChange(z, J) {
      let E = z === void 0 ? null : z === null ? "choose" : "again";
      if (de(E), E === null) {
        return;
      }
      if (le(W(w.current)), l?.(J === "click" ? void 0 : J), c !== E) (0, import_chunk_y53wbr8a.a)("tengu_dialog_key_dropped", { is_menu: u, several_keys: E === "choose" });
    } });
  }, p[3] = u, p[4] = c, p[5] = l, p[6] = f, p[7] = j;
  else j = p[7];
  (0, import_chunk_bs4h6795.It)(j);
  let Q;
  if (p[8] === import_chunk_w1d7ygsk.R) Q = () => B(w.current), p[8] = Q;
  else Q = p[8];
  let U;
  if (p[9] !== t) U = [t], p[9] = t, p[10] = U;
  else U = p[10];
  (0, import_chunk_bs4h6795.MSe)(Q, U);
  const O = c === null ? "none" : "flex";
  let N;
  if (p[11] !== S) N = S ? { top: 0 } : { bottom: 0 }, p[11] = S, p[12] = N;
  else N = p[12];
  let M;
  if (p[13] !== c) M = c !== null && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(Qce, {}), c === "choose" ? `${import_chunk_xcgcdx61.i2} after a second` : "wait a second, then press again"] }) }), p[13] = c, p[14] = M;
  else M = p[14];
  let V;
  if (p[15] !== O || p[16] !== N || p[17] !== M) V = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: w, display: O, position: "absolute", ...N, width: "100%", height: 1, paddingLeft: 1, opaque: true, children: M }), p[15] = O, p[16] = N, p[17] = M, p[18] = V;
  else V = p[18];
  return V;
}
function OF(s) {
  let l = (0, import_chunk_sng02qpc.k)(5), n = s === void 0 ? true : s, { wantEveryKey: t } = (0, import_chunk_8bkqeb5d.si)(), d = (0, import_chunk_bs4h6795.be)(u_e), f, m;
  if (l[0] !== n || l[1] !== d || l[2] !== t) f = () => n ? t?.(d) : void 0, m = [n, t, d], l[0] = n, l[1] = d, l[2] = t, l[3] = f, l[4] = m;
  else f = l[3], m = l[4];
  (0, import_chunk_bs4h6795.It)(f, m);
}
function _(s) {
  let n = s.parentNode;
  return n.firstFrame = s.firstFrame ?? n.firstFrame, () => {
    n.wait = void 0;
  };
}
function F(s, n) {
  let t = s.parentNode;
  t.wait = { ...t.wait, ...n };
}
function B(s) {
  let n = s?.parentNode;
  while (n && !n.wait) n = n.parentNode;
  if (n) (0, import_chunk_8bkqeb5d.k_e)(n);
}
function W(s) {
  let n = s.parentNode, t = (0, import_chunk_8bkqeb5d.cH)(n).activeElement ?? n, d = t.yogaNode?.getComputedHeight() ?? 0;
  for (let l = t; l !== n; l = l.parentNode ?? n) d += l.yogaNode?.getComputedTop() ?? 0;
  return d >= (n.yogaNode?.getComputedHeight() ?? 0);
}
