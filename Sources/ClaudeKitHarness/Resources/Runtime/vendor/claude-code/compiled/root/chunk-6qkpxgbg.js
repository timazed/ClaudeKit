const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_6qkpxgbg_exports = {};
__export(chunk_6qkpxgbg_exports, {
  Dmt: () => Dmt,
  FZe: () => FZe,
  NZe: () => NZe,
  S_e: () => S_e,
  VWr: () => VWr,
  XS: () => XS,
  cKe: () => cKe,
  dKe: () => dKe,
  hf: () => hf,
  kp: () => kp,
  yBo: () => yBo
});
module.exports = __toCommonJS(chunk_6qkpxgbg_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_3j73ps7b = require("/$bunfs/root/chunk-3j73ps7b.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function no(S) {
  return (0, import_chunk_bs4h6795.y_)(S) ? S.key : "";
}
var XS = "userMessageBackground";
function NZe(c = "tint") {
  return import_chunk_d57v19zt.Re.level === 0 ? "inverse" : c;
}
var A = (0, import_chunk_bs4h6795.an)("");
function S_e(c) {
  let t = (0, import_chunk_sng02qpc.k)(14), i, s;
  if (t[0] !== c) ({ windowStart: s, ...i } = c), t[0] = c, t[1] = i, t[2] = s;
  else i = t[1], s = t[2];
  let a = s === void 0 ? 0 : s, f, h, l;
  if (t[3] !== i.children || t[4] !== a) {
    let u = import_chunk_bs4h6795.dy.toArray(i.children).map(no);
    f = A.Provider;
    h = a;
    l = u.join();
    t[3] = i.children, t[4] = a, t[5] = f, t[6] = h, t[7] = l;
  } else f = t[5], h = t[6], l = t[7];
  const n = `${h} ${l}`;
  let m;
  if (t[8] !== i) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", ...i }), t[8] = i, t[9] = m;
  else m = t[9];
  let w;
  if (t[10] !== f || t[11] !== n || t[12] !== m) w = (0, import_chunk_a46xeenj.e)(f, { value: n, children: m }), t[10] = f, t[11] = n, t[12] = m, t[13] = w;
  else w = t[13];
  return w;
}
function Dmt(c) {
  let f = (0, import_chunk_sng02qpc.k)(5), t = (0, import_chunk_bs4h6795.be)(A), [i, s] = (0, import_chunk_bs4h6795.y)(null), a = c && i === t;
  if (i !== null && !a) s(null);
  let h;
  if (f[0] !== t) h = (l) => s(l ? t : null), f[0] = t, f[1] = h;
  else h = f[1];
  let u;
  if (f[2] !== a || f[3] !== h) u = [a, h], f[2] = a, f[3] = h, f[4] = u;
  else u = f[4];
  return u;
}
function kp(c) {
  let x = (0, import_chunk_sng02qpc.k)(47), { isFocused: t, isSelected: i, children: s, description: a, showScrollDown: f, showScrollUp: h, styled: l, disabled: u, idle: n, declareCursor: m, onClick: w, hoverStyle: S, onHoverChange: T } = c, C = i === void 0 ? false : i, b = l === void 0 ? true : l, v = u === void 0 ? false : u, U = n === void 0 ? false : n, ee = S === void 0 ? "tint" : S, P = !v && w !== void 0, E = !v && (w !== void 0 || T !== void 0), [oe, _] = Dmt(E), d = oe && P, p = NZe(ee), _e;
  if (x[0] !== T || x[1] !== _) _e = (De) => {
    _(De), T?.(De);
  }, x[0] = T, x[1] = _, x[2] = _e;
  else _e = x[2];
  let N = _e, Ae;
  if (x[3] !== v || x[4] !== U || x[5] !== t || x[6] !== C || x[7] !== b) Ae = function Be2() {
    if (v) {
      return "inactive";
    }
    if (!b) {
      return;
    }
    if (C) {
      return "success";
    }
    if (t && !U) {
      return "suggestion";
    }
  }, x[3] = v, x[4] = U, x[5] = t, x[6] = C, x[7] = b, x[8] = Ae;
  else Ae = x[8];
  let Be = Ae, re = Be();
  const ne = t && !v && m !== false;
  let Fe;
  if (x[9] !== ne) Fe = { line: 0, column: 0, active: ne }, x[9] = ne, x[10] = Fe;
  else Fe = x[10];
  let te = (0, import_chunk_8bkqeb5d.EP)(Fe);
  const le = d && p === "tint" ? XS : void 0, ie = P ? w : void 0;
  let B;
  if (x[11] !== E || x[12] !== N) B = E ? () => N(true) : void 0, x[11] = E, x[12] = N, x[13] = B;
  else B = x[13];
  let F;
  if (x[14] !== E || x[15] !== N) F = E ? () => N(false) : void 0, x[14] = E, x[15] = N, x[16] = F;
  else F = x[16];
  const se = d && p === "pointer", de = d && p === "inverse";
  let O;
  if (x[17] !== v || x[18] !== U || x[19] !== t || x[20] !== f || x[21] !== h || x[22] !== se || x[23] !== de) O = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(Q, { disabled: v, isFocused: t, idle: U, showScrollUp: h, showScrollDown: f, hovered: se, inverse: de }) }), x[17] = v, x[18] = U, x[19] = t, x[20] = f, x[21] = h, x[22] = se, x[23] = de, x[24] = O;
  else O = x[24];
  let L;
  if (x[25] !== s || x[26] !== v || x[27] !== b || x[28] !== re) L = b ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: re, dimColor: v, wrap: "truncate-end", children: s }) : s, x[25] = s, x[26] = v, x[27] = b, x[28] = re, x[29] = L;
  else L = x[29];
  let V;
  if (x[30] !== v || x[31] !== C) V = C && !v && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": "(selected)", color: "success", children: import_chunk_7r4ehpnw.xe.tick }) }), x[30] = v, x[31] = C, x[32] = V;
  else V = x[32];
  let j;
  if (x[33] !== O || x[34] !== L || x[35] !== V) j = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", gap: 1, children: [O, L, V] }), x[33] = O, x[34] = L, x[35] = V, x[36] = j;
  else j = x[36];
  let K;
  if (x[37] !== a) K = a && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: a }) }), x[37] = a, x[38] = K;
  else K = x[38];
  let Oe;
  if (x[39] !== te || x[40] !== le || x[41] !== ie || x[42] !== B || x[43] !== F || x[44] !== j || x[45] !== K) Oe = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: te, flexDirection: "column", backgroundColor: le, onClick: ie, onMouseEnter: B, onMouseLeave: F, children: [j, K] }), x[39] = te, x[40] = le, x[41] = ie, x[42] = B, x[43] = F, x[44] = j, x[45] = K, x[46] = Oe;
  else Oe = x[46];
  return Oe;
}
function Q(c) {
  let u = (0, import_chunk_sng02qpc.k)(12), { disabled: t, isFocused: i, idle: s, showScrollUp: a, showScrollDown: f, hovered: h, inverse: l } = c;
  if (t) {
    let n2;
    if (u[0] === import_chunk_w1d7ygsk.R) n2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, children: " " }), u[0] = n2;
    else n2 = u[0];
    return n2;
  }
  if (i) {
    const n2 = s ? void 0 : "suggestion";
    let m;
    if (u[1] !== s || u[2] !== l || u[3] !== n2) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, color: n2, dimColor: s, inverse: l, children: import_chunk_7r4ehpnw.xe.pointer }), u[1] = s, u[2] = l, u[3] = n2, u[4] = m;
    else m = u[4];
    return m;
  }
  if (f) {
    let n2;
    if (u[5] !== l) n2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": "(more below)", dimColor: true, inverse: l, children: import_chunk_7r4ehpnw.xe.arrowDown }), u[5] = l, u[6] = n2;
    else n2 = u[6];
    return n2;
  }
  if (a) {
    let n2;
    if (u[7] !== l) n2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": "(more above)", dimColor: true, inverse: l, children: import_chunk_7r4ehpnw.xe.arrowUp }), u[7] = l, u[8] = n2;
    else n2 = u[8];
    return n2;
  }
  if (h) {
    let n2;
    if (u[9] === import_chunk_w1d7ygsk.R) n2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, dimColor: true, children: import_chunk_7r4ehpnw.xe.pointer }), u[9] = n2;
    else n2 = u[9];
    return n2;
  }
  let n;
  if (u[10] !== l) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, inverse: l, children: " " }), u[10] = l, u[11] = n;
  else n = u[11];
  return n;
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var to = 150, lo = 400, io = 60, VWr = 1;
function yBo(c, t) {
  return Math.abs(t.col - c.col) <= VWr && Math.abs(t.row - c.row) <= VWr;
}
function dKe({ children: c, paddingX: t = 0, onPress: i, repeat: s = false }) {
  let a = (0, import_chunk_8bkqeb5d.ir)(), f = (0, import_chunk_3j73ps7b.Ab)(), h = NZe(), [l, u] = (0, import_chunk_bs4h6795.y)(false), [n, m] = (0, import_chunk_bs4h6795.y)(false), w = (0, import_chunk_bs4h6795.I)(null), [S, T] = (0, import_chunk_bs4h6795.y)(null), C = (0, import_chunk_bs4h6795.I)(null);
  (0, import_chunk_bs4h6795.H)(() => () => C.current?.(), []);
  let b = i !== void 0;
  if (!b && (l || n || S !== null)) u(false), m(false), T(null);
  (0, import_chunk_bs4h6795.H)(() => {
    if (!b) w.current = null;
  }, [b]);
  let v = (0, import_chunk_bs4h6795.mo)((d) => {
    let p = w.current;
    if (p !== d) return;
    p.hasActed = true, i?.({ row: p.row });
  });
  (0, import_chunk_bs4h6795.H)(() => {
    if (S === null) return;
    let d = a.setTimeout(function p() {
      v(S), d = a.setTimeout(p, io);
    }, lo);
    return () => d();
  }, [S, a]);
  function U(d) {
    if (d.stopImmediatePropagation(), C.current !== null || f(d)) return;
    d.endClickChain(), m(true), C.current = a.setTimeout(() => {
      C.current = null, m(false), i?.(d);
    }, to);
  }
  function ee(d) {
    if (d.type === "down" && d.button === 0) {
      let p = { col: d.col, row: d.row, hasActed: false };
      w.current = p, m(true), T(p);
    } else if (d.type === "up") {
      let p = w.current;
      if (w.current = null, m(false), T(null), p !== null && !p.hasActed && !d.isUnreported && yBo(p, d)) i?.({ row: p.row });
    }
  }
  let P = h === "inverse", E = P ? void 0 : n ? "text" : l ? XS : void 0, [oe = "", ..._] = c;
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { paddingLeft: t, flexShrink: 1, alignSelf: "flex-start", backgroundColor: E, onClick: b && !s ? U : void 0, onPointer: b && s ? ee : void 0, onMouseEnter: b ? () => u(true) : void 0, onMouseLeave: b ? () => u(false) : void 0, hoverFollowsPaint: b, noSelect: true, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: n && !P ? "inverseText" : void 0, dimColor: !n, inverse: n && P, wrap: "truncate-end", children: l && !n && P ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { inverse: true, children: oe }), _.join("")] }) : c }), t > 0 && b && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: t, flexShrink: 1e3 })] });
}
var Ue = 1e3;
function cKe() {
  let t = (0, import_chunk_sng02qpc.k)(2), c = (0, import_chunk_8bkqeb5d.ir)(), i;
  if (t[0] !== c) i = () => {
    let s = { at: Number.NEGATIVE_INFINITY, row: -1 };
    return { pressed: (a) => {
      s = { at: c.now(), row: a.row };
    }, dropsClick: (f) => {
      if (f.row !== s.row || c.now() - s.at >= Ue) {
        return false;
      }
      return f.dropAsStray(), true;
    } };
  }, t[0] = c, t[1] = i;
  else i = t[1];
  let [h] = (0, import_chunk_bs4h6795.y)(i);
  return h;
}
var FZe = (0, import_chunk_bs4h6795.an)(() => false);
function hf(c) {
  let l = (0, import_chunk_sng02qpc.k)(6), { direction: t, count: i, onPress: s } = c;
  if (i <= 0) {
    return null;
  }
  let a = t === "above" ? import_chunk_xcgcdx61.AK : import_chunk_xcgcdx61.i2;
  const f = `${i} more ${t}`, h = `${a} ${i} more`;
  let u;
  if (l[0] !== s || l[1] !== h) u = (0, import_chunk_a46xeenj.e)(dKe, { paddingX: 1, onPress: s, children: h }), l[0] = s, l[1] = h, l[2] = u;
  else u = l[2];
  let n;
  if (l[3] !== f || l[4] !== u) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 1, "aria-label": f, children: u }), l[3] = f, l[4] = u, l[5] = n;
  else n = l[5];
  return n;
}
