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
var chunk_8n6jzsq4_exports = {};
__export(chunk_8n6jzsq4_exports, {
  J1e: () => J1e,
  Jce: () => Jce,
  Mte: () => Mte,
  Qn: () => Qn,
  oW: () => oW,
  sc: () => sc,
  y2s: () => y2s
});
module.exports = __toCommonJS(chunk_8n6jzsq4_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_qqkcytvr = require("/$bunfs/root/chunk-qqkcytvr.js");
var import_chunk_dwa7jc2e = require("/$bunfs/root/chunk-dwa7jc2e.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_hn0x7v1y = require("/$bunfs/root/chunk-hn0x7v1y.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_vh9td94q = require("/$bunfs/root/chunk-vh9td94q.js");
var import_chunk_3j73ps7b = require("/$bunfs/root/chunk-3j73ps7b.js");
var import_chunk_zvx9zp0y = require("/$bunfs/root/chunk-zvx9zp0y.js");
var import_chunk_6qkpxgbg = require("/$bunfs/root/chunk-6qkpxgbg.js");
var import_chunk_qrgafffd = require("/$bunfs/root/chunk-qrgafffd.js");
var import_chunk_p23qhs14 = require("/$bunfs/root/chunk-p23qhs14.js");
var import_chunk_vwqr9jnb = require("/$bunfs/root/chunk-vwqr9jnb.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_5yhrnn87 = require("/$bunfs/root/chunk-5yhrnn87.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function Do() {
  let n = (0, import_chunk_bs4h6795.be)(import_chunk_qrgafffd.ZYn), { subscribeHoverTracked: t, isHoverTracked: s } = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.sp), a = (0, import_chunk_bs4h6795.Ot)(t, s);
  return n ?? a;
}
(0, import_chunk_bs4h6795.G)();
var Cn = 5;
function ro(n) {
  let f = (0, import_chunk_sng02qpc.k)(50), { offset: t, visible: s, total: a, height: c, onScrollTo: m, onScrollBy: d, arrows: E } = n, W = c === void 0 ? s : c, M = E === void 0 ? false : E, h = (0, import_chunk_bs4h6795.I)(null), [x, p] = (0, import_chunk_bs4h6795.y)(false), [S, X] = (0, import_chunk_bs4h6795.y)(false), F = m !== void 0, A, O;
  if (f[0] !== F) A = () => {
    if (!F && h.current !== null && h.current.jump !== null) h.current = null;
  }, O = [F], f[0] = F, f[1] = A, f[2] = O;
  else A = f[1], O = f[2];
  if ((0, import_chunk_bs4h6795.H)(A, O), a <= s || W < 1) {
    return null;
  }
  let b = M && W >= Cn, D = b ? W - 2 : W, te;
  if (f[3] !== D || f[4] !== t || f[5] !== a || f[6] !== s) te = Ho({ offset: t, visible: s, total: a, height: D }), f[3] = D, f[4] = t, f[5] = a, f[6] = s, f[7] = te;
  else te = f[7];
  let { top: L, size: N } = te, de = D - L - N, Q;
  if (f[8] !== D || f[9] !== t || f[10] !== m || f[11] !== N || f[12] !== L || f[13] !== a || f[14] !== s) {
    let j = function(T, ue, re) {
      let l = In({ top: ue - T.trackRow - T.grab, visible: T.visible, total: T.total, height: T.height });
      let w = l >= T.total - T.visible ? T.total - Math.min(T.visible, s) : l;
      if (w === T.asked) {
        return;
      }
      if (T.asked = w, !re) m?.(w);
    };
    Q = function Q2(C) {
      let P = h.current;
      if (C.type === "up") {
        if (h.current = null, p(false), P !== null && P.jump !== null && !C.isUnreported && (0, import_chunk_6qkpxgbg.yBo)(P.jump, C)) j({ ...P, asked: t }, C.row, false);
        return;
      }
      if (C.type === "down" && C.button === 0) {
        let U = C.localRow >= L && C.localRow < L + N;
        let Z = { trackRow: C.row - C.localRow, visible: s, total: a, height: D, grab: U ? C.localRow - L : Math.floor(N / 2), asked: t, jump: U ? null : { col: C.col, row: C.row } };
        if (h.current = Z, p(true), U) j(Z, C.row, true);
        return;
      }
      if (P === null) {
        return;
      }
      if (P.jump !== null) {
        if (Math.abs(C.row - P.jump.row) <= import_chunk_6qkpxgbg.VWr) {
          return;
        }
        P.jump = null;
      }
      j(P, C.row, false);
    };
    f[8] = D, f[9] = t, f[10] = m, f[11] = N, f[12] = L, f[13] = a, f[14] = s, f[15] = Q;
  } else Q = f[15];
  let u = S || x ? "suggestion" : void 0, ie;
  if (f[16] !== b || f[17] !== t || f[18] !== d) ie = b && (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.dKe, { repeat: true, onPress: d && t > 0 ? () => d(-1) : void 0, children: import_chunk_xcgcdx61.AK }), f[16] = b, f[17] = t, f[18] = d, f[19] = ie;
  else ie = f[19];
  const q = m || x ? Q : void 0;
  let _;
  if (f[20] !== m) _ = m && (() => X(true)), f[20] = m, f[21] = _;
  else _ = f[21];
  let z;
  if (f[22] !== m) z = m && (() => X(false)), f[22] = m, f[23] = z;
  else z = f[23];
  let le;
  if (f[24] !== L) le = L > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: Pe(import_chunk_xcgcdx61.eC.pipe, L) }), f[24] = L, f[25] = le;
  else le = f[25];
  let Y;
  if (f[26] !== N) Y = Pe(import_chunk_xcgcdx61.yZi, N), f[26] = N, f[27] = Y;
  else Y = f[27];
  let me;
  if (f[28] !== Y || f[29] !== u) me = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: u, children: Y }), f[28] = Y, f[29] = u, f[30] = me;
  else me = f[30];
  let ee;
  if (f[31] !== de) ee = de > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: Pe(import_chunk_xcgcdx61.eC.pipe, de) }), f[31] = de, f[32] = ee;
  else ee = f[32];
  let Ce;
  if (f[33] !== le || f[34] !== me || f[35] !== ee || f[36] !== q || f[37] !== _ || f[38] !== z) Ce = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.hg, { flexDirection: "column", flexShrink: 0, onPointer: q, onMouseEnter: _, onMouseLeave: z, children: [le, me, ee] }), f[33] = le, f[34] = me, f[35] = ee, f[36] = q, f[37] = _, f[38] = z, f[39] = Ce;
  else Ce = f[39];
  let B;
  if (f[40] !== b || f[41] !== t || f[42] !== d || f[43] !== a || f[44] !== s) B = b && (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.dKe, { repeat: true, onPress: d && t < a - s ? () => d(1) : void 0, children: import_chunk_xcgcdx61.i2 }), f[40] = b, f[41] = t, f[42] = d, f[43] = a, f[44] = s, f[45] = B;
  else B = f[45];
  let Me;
  if (f[46] !== Ce || f[47] !== B || f[48] !== ie) Me = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.sR, { children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexShrink: 0, children: [ie, Ce, B] }) }), f[46] = Ce, f[47] = B, f[48] = ie, f[49] = Me;
  else Me = f[49];
  return Me;
}
function Ho({ offset: n, visible: t, total: s, height: a }) {
  let c = (0, import_chunk_8bkqeb5d.Du)(Math.round(t / s * a), 1, Math.max(1, a - 1)), m = a - c, d = s - t;
  if (n <= 0) return { top: 0, size: c };
  if (n >= d) return { top: m, size: c };
  let E = Math.round(n / d * m);
  if (m < 2) return { top: E, size: c };
  return { top: (0, import_chunk_8bkqeb5d.Du)(E, 1, m - 1), size: c };
}
function In({ top: n, visible: t, total: s, height: a }) {
  let { size: c } = Ho({ offset: 0, visible: t, total: s, height: a }), m = a - c, d = s - t;
  if (n <= 0) return 0;
  if (n >= m) return d;
  let E = Math.round(n / m * d);
  if (d < 2) return E;
  return (0, import_chunk_8bkqeb5d.Du)(E, 1, d - 1);
}
function Pe(n, t) {
  return Array.from({ length: t }, () => n).join(`
`);
}
function io(n) {
  let W = (0, import_chunk_sng02qpc.k)(12), { bar: t, height: s, children: a } = n, [c, m] = (0, import_chunk_bs4h6795.y)(false), d = Do();
  if (c && !d) m(false);
  let E = d && t.total > t.visible, M, h;
  if (W[0] === import_chunk_w1d7ygsk.R) M = () => m(true), h = () => m(false), W[0] = M, W[1] = h;
  else M = W[0], h = W[1];
  let x;
  if (W[2] !== a) x = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexGrow: 1, children: a }), W[2] = a, W[3] = x;
  else x = W[3];
  let p;
  if (W[4] !== t || W[5] !== E || W[6] !== s || W[7] !== c) p = E && (c ? (0, import_chunk_a46xeenj.e)(ro, { ...t, height: s }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: 1, flexShrink: 0 })), W[4] = t, W[5] = E, W[6] = s, W[7] = c, W[8] = p;
  else p = W[8];
  let S;
  if (W[9] !== x || W[10] !== p) S = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { gap: 1, onMouseEnter: M, onMouseLeave: h, children: [x, p] }), W[9] = x, W[10] = p, W[11] = S;
  else S = W[11];
  return S;
}
(0, import_chunk_bs4h6795.G)();
function y2s(n, t, s) {
  let a = (0, import_chunk_8bkqeb5d.Du)(n - s + 1, 0, Math.max(0, t - s)), c = Math.min(a + s, t);
  return { windowStart: a, windowEnd: c, moreAbove: a, moreBelow: t - c };
}
var rr = /* @__PURE__ */ new Set();
function Nn({ lineCount: n, visibleCount: t, cursorLine: s, getCursorLine: a, headings: c = rr, boundaries: m, markerLines: d = 0, onScroll: E }) {
  let W = Math.max(0, n - 1), M = (0, import_chunk_8bkqeb5d.Du)(s, 0, W), h = () => (0, import_chunk_8bkqeb5d.Du)(a(), 0, W), x = t + 2 * d, p = 0;
  while (p < n && c.has(p)) p++;
  let S = n - 1;
  while (S >= 0 && c.has(S)) S--;
  function X(l, w) {
    return (l > p ? d : 0) + (w <= S ? d : 0);
  }
  function F(l) {
    return l <= 0 || l >= n || m === void 0 || m.has(l) || c.has(l);
  }
  function f(l) {
    let w = Math.min(l + 1, n);
    while (!F(w)) w++;
    return w;
  }
  function A(l) {
    return F(l) && !(l > p && l <= p + d);
  }
  function O(l, w) {
    let u = l + w;
    while (u > 0 && u < n && !A(u)) u += w;
    return (0, import_chunk_8bkqeb5d.Du)(u, 0, n);
  }
  function b(l) {
    for (let w = Math.min(l + x, n); w > l; w--) if (F(w) && w - l + X(l, w) <= x) return w;
    return f(l);
  }
  let D = 0;
  for (let l = n - 1; l >= 0; l--) if (A(l) && b(l) < n) {
    D = O(l, 1);
    break;
  }
  function te(l) {
    let w = b(l);
    return c.has(w - 1) && w < n;
  }
  function L(l) {
    let w = b(l);
    for (let u = l; u < w; u++) if (!c.has(u)) return true;
    return false;
  }
  function N(l, w) {
    let u = l;
    while (!F(u)) u--;
    let ie = f(u), q = ie > S ? n : ie, _ = Math.min(u, D);
    while (!A(_)) _--;
    let z = u <= p ? 0 : _;
    while (z < _ && b(z) < ie) z = O(z, 1);
    let le = Math.min(_, Math.max(0, q - x));
    while (le < _ && (!A(le) || b(le) < q)) le++;
    let Y = (0, import_chunk_8bkqeb5d.Du)(w ?? le, Math.min(le, z), z);
    while (!A(Y)) Y--;
    if (w !== null && w > u) for (let me = O(Y, -1); me < Y && b(me) >= q && (c.has(Y - 1) || te(Y)); me = O(me, -1)) Y = me;
    return Y;
  }
  let [de, Q, C] = (0, import_chunk_hn0x7v1y.fu)(null, (l) => l === null ? null : N(M, l)), P = de ?? N(M, null), j = b(P);
  function U(l) {
    let w = N(h(), C()), u = (0, import_chunk_8bkqeb5d.Du)(l, 0, D);
    while (!A(u)) u--;
    let ie = u < w ? -1 : 1;
    while (u !== w && u > 0 && u < D && (c.has(u - 1) && (ie < 0 || !c.has(u)) || te(u) || !L(u))) u = O(u, ie);
    let q = L(u) ? u : w;
    Q(q);
    let _ = q, z = b(q);
    while (_ < z && N(_, q) !== q) _++;
    while (z > _ && N(z - 1, q) !== q) z--;
    E?.(_, z);
  }
  function Z(l) {
    let w = N(h(), C());
    for (let u = 0; u < Math.abs(l); u++) w = O(w, l < 0 ? -1 : 1);
    if (l !== 0) U(w);
  }
  let T = j - P >= n, ue = T ? 0 : Math.max(0, x - X(P, j) - j + P), re = j - P + ue;
  return { windowStart: P, windowEnd: j, spareLines: ue, fits: T, getWindow: () => {
    let l = N(h(), C());
    return { windowStart: l, windowEnd: b(l) };
  }, scrollBy: Z, scrollTo: U, pin: () => Q(N(h(), C())), bar: { offset: P, visible: re, total: n, onScrollTo: T ? void 0 : (l) => U(l + re >= n ? D : l), onScrollBy: T ? void 0 : Z } };
}
function No({ count: n, visibleCount: t, headingLines: s, rowHeights: a, moreRowLines: c = false, rowKeys: m, resetKey: d, initialCursor: E = 0, isDisabled: W = false, onAccept: M, onRowKeyDown: h, rowActions: x = [], namesEnter: p = true, onCursorChange: S, edge: X = "wrap", onUpFromFirstItem: F, onDownFromLastItem: f, declineHomeEnd: A = false, keybindingContext: O = "Select" }) {
  let b = (0, import_chunk_bs4h6795.I)(null), D = Math.max(0, n - 1), te = (0, import_chunk_p23qhs14.PIe)(b), { focusDirection: L } = (0, import_chunk_8bkqeb5d.KZe)(), N = Mte(W);
  function de(i) {
    if (!Object.is(i.resetKey, d)) return 0;
    let v = (0, import_chunk_8bkqeb5d.Du)(i.index, 0, D);
    if (i.key === void 0 || m?.[v] === i.key) return v;
    let V = m?.indexOf(i.key) ?? -1;
    return V < 0 ? v : V;
  }
  function Q(i, v) {
    let V = m?.[i];
    return v?.index === i && v.key === V && Object.is(v.resetKey, d) ? v : { index: i, key: V, resetKey: d };
  }
  let [{ index: C }, P, j] = (0, import_chunk_hn0x7v1y.fu)(() => Q((0, import_chunk_8bkqeb5d.Du)(E, 0, D)), (i) => Q(de(i), i));
  function U() {
    return de(j());
  }
  let Z = new Set(s), T = Z.size;
  for (let i = 0; i < n; i++) T += a?.[i] ?? 1;
  let ue = [], re = [0], l = /* @__PURE__ */ new Set();
  for (let i = 0, v = 0; i < T; i++) {
    if (i >= v) {
      if (l.add(i), !Z.has(i)) v = i + (a?.[ue.length] ?? 1), ue.push(i);
    }
    re.push(ue.length);
  }
  let w = c ? 1 : 0;
  function u(i) {
    if (K.fits) return false;
    Y((v) => {
      let V = K.getWindow(), J = (0, import_chunk_8bkqeb5d.Du)((ue[v] ?? 0) + i * (V.windowEnd - V.windowStart), 0, T - 1);
      while (!l.has(J)) J--;
      return (0, import_chunk_8bkqeb5d.Du)(i > 0 ? Math.max((re[J + 1] ?? 0) - 1, v + 1) : Math.min(re[J] ?? 0, v - 1), 0, D);
    });
  }
  function ie(i) {
    if (U() === (i < 0 ? 0 : D)) {
      let v = i < 0 ? F : f;
      if (v) {
        v();
        return;
      }
      if (L(i < 0 ? "up" : "down")) return;
    }
    Y((v) => X === "wrap" && n > 0 ? (v + i + n) % n : v + i);
  }
  function q(i) {
    if (A && K.fits) return false;
    Y(i);
  }
  let _ = (0, import_chunk_bs4h6795.I)(null), z = (0, import_chunk_bs4h6795.mo)(le);
  (0, import_chunk_bs4h6795.H)(() => z(C), [C, n]);
  function le(i) {
    let v = _.current;
    if (_.current = n === 0 ? null : { cursor: i, count: n }, n > 0 && (v?.cursor !== i || v.count !== n)) S?.(i);
  }
  function Y(i) {
    let v = (0, import_chunk_8bkqeb5d.Du)(typeof i === "function" ? i(U()) : i, 0, D);
    P((V) => Q(v, V)), le(v);
  }
  let me = { "select:next": () => ie(1), "select:previous": () => ie(-1), "select:pageDown": () => u(1), "select:pageUp": () => u(-1), "select:first": () => q(0), "select:last": () => q(D), ...M && { "select:accept": () => M(U()) } };
  (0, import_chunk_6fvsq616.gs)((0, import_chunk_khxw3ng0.er)(me, (i) => () => Mte(W) ? false : i()), { context: O, isActive: te && !N && n > 0 });
  let [ee, Ce] = (0, import_chunk_bs4h6795.y)(false);
  if (te && !ee) Ce(true);
  let B = [];
  if (n > 1 || F) B.push("select:previous");
  if (n > 1 || f) B.push("select:next");
  if (n > 0 && M && p) B.push("select:accept");
  (0, import_chunk_zvx9zp0y.nl)(N || ee && !te ? null : [...B.map((i) => ({ action: i, scope: O })), ...n > 0 ? x.map(({ on: i, hint: v }) => ({ on: i, hint: v })) : []]);
  let Me = (0, import_chunk_9js1xpg4.$d)() !== null;
  function ce(i) {
    if (Mte(W) || n === 0) return;
    let v = U();
    if (i.key === "return" && M && !Me) {
      M(v), i.preventDefault(), i.stopImmediatePropagation();
      return;
    }
    let V = x.find(({ on: J }) => J === i.key);
    if (V && !i.ctrl && !i.defaultPrevented) {
      i.preventDefault(), V.run(v);
      return;
    }
    h?.(i, v);
  }
  let K = Nn({ lineCount: T, visibleCount: t, cursorLine: ue[C] ?? 0, getCursorLine: () => ue[U()] ?? 0, headings: Z, boundaries: l, markerLines: w, onScroll: (i, v) => {
    let V = U(), J = re[i] ?? 0, ve = (re[v] ?? n) - 1;
    Y(J > ve ? V : (0, import_chunk_8bkqeb5d.Du)(V, J, ve));
  } });
  function xo(i) {
    if (i.deltaY === 0 || Mte(W)) return;
    K.scrollBy(i.deltaY > 0 ? 1 : -1), i.stopImmediatePropagation();
  }
  function ko(i, v = false) {
    if (!v && Mte(W)) return;
    K.scrollTo(i < 0 ? 0 : T);
  }
  function Je(i) {
    K.pin(), Y((0, import_chunk_8bkqeb5d.Du)(i, 0, D));
  }
  return { cursor: C, windowStart: K.windowStart, windowEnd: K.windowEnd, spareLines: K.spareLines, moreAbove: re[K.windowStart] ?? 0, moreBelow: n - (re[K.windowEnd] ?? n), getCursor: U, isCursor: (i) => i === C && n > 0, hasFocus: te, scrollBar: { ...K.bar, onScrollTo: N ? void 0 : K.bar.onScrollTo, onScrollBy: N ? void 0 : K.bar.onScrollBy }, setCursor: Je, scrollToEdge: ko, containerRef: b, bind: { ref: b, tabIndex: 0, onKeyDown: ce, onWheel: !N && !K.fits ? xo : void 0 } };
}
function Mte(n) {
  return typeof n === "function" ? n() : n === true;
}
(0, import_chunk_bs4h6795.G)();
function J1e(n) {
  let t = (0, import_chunk_bs4h6795.I)(null), s = (0, import_chunk_vh9td94q.MF)(), a = (0, import_chunk_6n6exvyx.qe)(), c = (0, import_chunk_bs4h6795.be)(import_chunk_6n6exvyx.Rb), m = (0, import_chunk_bs4h6795.be)(import_chunk_vwqr9jnb.c_e), d = c === null ? m : null, E = c === null ? a.rows : s?.rows ?? c.rows;
  function W() {
    let f = t.current, A = s?.box.current ?? (d && f);
    if (f === null || s !== null && s.box.current === null) return null;
    let O = Number.POSITIVE_INFINITY, b = 0;
    while (f !== A && f.parentNode !== void 0) {
      b += ir(f, f.parentNode), f = f.parentNode;
      for (let L of [f.style.height, f.style.maxHeight]) if (typeof L === "number") O = Math.min(O, L - b);
    }
    let D = d?.();
    if (D === null) return null;
    let te = D !== void 0 ? D + (0, import_chunk_8bkqeb5d.Gr)(f).height : c !== null ? E : E - (s?.reserve ?? import_chunk_vh9td94q.$2);
    return { rows: Math.min(O, te - b), beside: b };
  }
  let M = (0, import_chunk_8bkqeb5d.Wo)(() => W()?.rows ?? null), h = (0, import_chunk_8bkqeb5d.Wo)(() => W()?.beside ?? 0), x = (0, import_chunk_8bkqeb5d.Wo)(() => t.current === null ? 0 : (0, import_chunk_8bkqeb5d.Gr)(t.current).width), p = `${E} ${x}`, [S, X] = (0, import_chunk_bs4h6795.y)({ size: p, beside: h });
  if (S.size !== p || h > S.beside) X({ size: p, beside: h });
  let F = (0, import_chunk_bs4h6795.be)(import_chunk_vwqr9jnb.Pmt);
  return (0, import_chunk_bs4h6795.It)(() => d === null ? void 0 : F?.({ rows: () => t.current === null ? 0 : (0, import_chunk_8bkqeb5d.Gr)(t.current).height, owed: n }), [d, F, n]), { box: t, rows: M === null ? null : M - (S.beside - h), rowsNow: M, isCutFromTheBottom: c !== null || d !== null };
}
function ir(n, t) {
  let s = t.nodeName === "ink-root" || t.style.flexDirection?.startsWith("column"), a = 0;
  for (let { yogaNode: c, style: m } of s ? t.childNodes : [n]) if (c !== void 0 && m.position !== "absolute") a = Math.max(a, c.getComputedTop() + c.getComputedHeight() + c.getComputedMargin(3));
  return a - (0, import_chunk_8bkqeb5d.Gr)(n).height + (t.yogaNode?.getComputedPadding(3) ?? 0) + (t.yogaNode?.getComputedBorder(3) ?? 0);
}
function zr(A, O) {
  return { label: A, value: O };
}
function Vr(F, f) {
  return F + f;
}
var so = 3, Tn = 7, bo = (0, import_chunk_bs4h6795.an)(false);
function oW() {
  return (0, import_chunk_bs4h6795.be)(bo);
}
function wt(n) {
  let c = (0, import_chunk_sng02qpc.k)(30), t = (0, import_chunk_8bkqeb5d.Xe)(), { onFocus: s, onSelect: a } = n, m;
  if (c[0] !== t || c[1] !== a) m = t && a !== void 0 ? [] : null, c[0] = t, c[1] = a, c[2] = m;
  else m = c[2];
  if ((0, import_chunk_zvx9zp0y.nl)(m), t && a !== void 0) {
    let d, E;
    if (c[3] !== n.children) {
      E = [];
      d = /* @__PURE__ */ new Map();
      for (const W of import_chunk_bs4h6795.dy.toArray(n.children)) {
        if (!we(W)) {
          E.push(W);
          continue;
        }
        d.set(E.length, [...d.get(E.length) ?? [], W]);
      }
      c[3] = n.children, c[4] = d, c[5] = E;
    } else d = c[4], E = c[5];
    if (E.length === 0) {
      let M3;
      if (c[6] !== n.emptyMessage) M3 = n.emptyMessage ? (0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { children: n.emptyMessage }) : null, c[6] = n.emptyMessage, c[7] = M3;
      else M3 = c[7];
      return M3;
    }
    let M2;
    if (c[8] !== n.isDisabled) M2 = (h) => {
      if (Mte(n.isDisabled) || h.ctrl) {
        return;
      }
      if (h.key === "return" || h.key === " ") h.stopPropagation();
    }, c[8] = n.isDisabled, c[9] = M2;
    else M2 = c[9];
    let x;
    if (c[10] !== E) x = E.map(zr), c[10] = E, c[11] = x;
    else x = c[11];
    let p;
    if (c[12] !== n.isDisabled) p = Mte(n.isDisabled), c[12] = n.isDisabled, c[13] = p;
    else p = c[13];
    let S;
    if (c[14] !== s || c[15] !== a) S = (X) => {
      s?.(X), a(X);
    }, c[14] = s, c[15] = a, c[16] = S;
    else S = c[16];
    let F;
    if (c[17] !== d || c[18] !== s || c[19] !== x || c[20] !== p || c[21] !== S) F = (0, import_chunk_a46xeenj.e)(import_chunk_z8dyhx9v.wve, { options: x, headings: d, drawLabels: true, isDisabled: p, onFocus: s, onChange: S }), c[17] = d, c[18] = s, c[19] = x, c[20] = p, c[21] = S, c[22] = F;
    else F = c[22];
    let f;
    if (c[23] !== M2 || c[24] !== F) f = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", onKeyDown: M2, children: F }), c[23] = M2, c[24] = F, c[25] = f;
    else f = c[25];
    return f;
  }
  if (n.visibleCount === void 0) {
    let M2;
    if (c[26] !== n) M2 = (0, import_chunk_a46xeenj.e)(on, { ...n }), c[26] = n, c[27] = M2;
    else M2 = c[27];
    return M2;
  }
  let M;
  if (c[28] !== n) M = (0, import_chunk_a46xeenj.e)($e, { props: n, visibleCount: n.visibleCount }), c[28] = n, c[29] = M;
  else M = c[29];
  return M;
}
function on(n) {
  let s = (0, import_chunk_sng02qpc.k)(12), t = (0, import_chunk_6n6exvyx.qe)(), a;
  if (s[0] !== n.children || s[1] !== n.emptyMessage) {
    let c = import_chunk_bs4h6795.dy.toArray(n.children);
    a = c.every(we) ? Number(Boolean(n.emptyMessage)) : c.map(ho).reduce(Vr, 0);
    s[0] = n.children, s[1] = n.emptyMessage, s[2] = a;
  } else a = s[2];
  let m = a, { box: d, rows: E, isCutFromTheBottom: W } = J1e(Math.min(m, n.maxVisibleCount ?? m)), M = n.maxVisibleCount ?? (W ? Infinity : Math.max(Tn, Math.floor(t.rows / 2))), h = Math.max(1, Math.min(E ?? so, M)), x = h === 1 ? "none" : h < so && n.overflowHint !== "none" ? "glyph" : n.overflowHint === "count" ? void 0 : n.overflowHint, p;
  if (s[3] !== x || s[4] !== n) p = { ...n, overflowHint: x }, s[3] = x, s[4] = n, s[5] = p;
  else p = s[5];
  let S;
  if (s[6] !== h || s[7] !== p) S = (0, import_chunk_a46xeenj.e)($e, { props: p, visibleCount: h }), s[6] = h, s[7] = p, s[8] = S;
  else S = s[8];
  let X;
  if (s[9] !== d || s[10] !== S) X = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: d, flexDirection: "column", children: S }), s[9] = d, s[10] = S, s[11] = X;
  else X = s[11];
  return X;
}
function $e(n) {
  let K = (0, import_chunk_sng02qpc.k)(41), { props: t, visibleCount: s } = n, { children: a, defaultFocusIndex: c, resetKey: m, onSelect: d, onFocus: E, onRowKeyDown: W, rowActions: M, isDisabled: h, onDisabledRowClick: x, wrap: p, onUpFromFirstItem: S, onDownFromLastItem: X, declineHomeEnd: F, keybindingContext: f, overflowHint: A, scrollBar: O, emptyMessage: b, hoverStyle: D, rowClick: te, styled: L } = t, N = p === void 0 ? true : p, de = F === void 0 ? false : F, Q = O === void 0 ? true : O, C = te === void 0 ? "select" : te, P = L === void 0 ? false : L, j = import_chunk_bs4h6795.dy.toArray(a), U = [], Z = 0;
  for (const T of j) U.push(ho(T)), Z = Z + (U.at(-1) ?? 1);
  let ue = A === void 0 && Z > s, re = ue ? Math.max(1, s - 2) : s, l = ue && re === s - 2, w = [], u = [], ie = [], q = [], _ = [], z = 0;
  for (const [le, Y] of j.entries()) {
    if (q.push(u.length), _.push(z), we(Y)) {
      w.push(z++);
      continue;
    }
    u.push(Math.min(U[le] ?? 1, re)), ie.push((0, import_chunk_bs4h6795.y_)(Y) ? Y.key ?? void 0 : void 0), z = z + (u.at(-1) ?? 1);
  }
  let me = u.length, ee = Mte(h), { containerRef: Ce, ...B } = No({ count: me, visibleCount: re, moreRowLines: l, headingLines: w, rowHeights: u, rowKeys: ie, resetKey: m, initialCursor: c, isDisabled: h, edge: N ? "wrap" : "clamp", onUpFromFirstItem: S, onDownFromLastItem: X, declineHomeEnd: de, keybindingContext: f, onAccept: d, onRowKeyDown: W, rowActions: M, namesEnter: C === "select", onCursorChange: E });
  (0, import_chunk_dwa7jc2e.Dv)(Ce, !ee);
  let Me = (0, import_chunk_3j73ps7b.Ab)(), ce = (0, import_chunk_6qkpxgbg.cKe)(), xo;
  if (K[0] !== Me || K[1] !== ce) xo = (ko) => Me(ko) || ce.dropsClick(ko), K[0] = Me, K[1] = ce, K[2] = xo;
  else xo = K[2];
  let Je = xo;
  if (me === 0) {
    let i;
    if (K[3] !== b) i = b && (0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { children: b }), K[3] = b, K[4] = i;
    else i = K[4];
    let v = i;
    const V2 = Q ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", ...B.bind, children: v }) : (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.S_e, { ...B.bind, children: v });
    let J2;
    if (K[5] !== V2 || K[6] !== ce.dropsClick) J2 = (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.FZe, { value: ce.dropsClick, children: V2 }), K[5] = V2, K[6] = ce.dropsClick, K[7] = J2;
    else J2 = K[7];
    return J2;
  }
  let ve = A === void 0 || A === "glyph" && s === 1 ? "count" : A, { windowStart: De, windowEnd: ui, moreAbove: Wt, moreBelow: Ft } = B, Tt = j.flatMap((mi, Nt) => {
    let wn = _[Nt] ?? 0;
    return wn >= De && wn < ui ? [{ child: mi, index: Nt, line: wn }] : [];
  }), At = (pi) => ee && x === void 0 ? void 0 : (fi) => {
    if (B.scrollToEdge(pi, ee), ce.pressed(fi), ee) x?.(B.getCursor());
  }, Qe = ve === "count" && (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "above", count: Wt, onPress: At(-1) }), Ze = ve === "count" && (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "below", count: Ft, onPress: At(1) }), Ae = Tt.map((i, vn) => {
    let { child: Te, index: Kt, line: jt } = i;
    let Ut = (0, import_chunk_bs4h6795.y_)(Te) ? Te.key ?? jt : jt;
    let zt = vn === 0 && Wt > 0;
    let gn = vn === Tt.length - 1 && Ft > 0;
    if (we(Te)) {
      let bi = ve === "count" && gn && vn > 0 && !we(j[Kt + 1]);
      return (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { isFocused: false, showScrollUp: ve === "glyph" && zt, showScrollDown: ve === "glyph" && gn, styled: false, children: bi ? (0, import_chunk_a46xeenj.e)(sc.Heading, {}) : Te }, Ut);
    }
    let Ee = q[Kt] ?? 0;
    let Vt = B.isCursor(Ee);
    return (0, import_chunk_a46xeenj.e)(bo.Provider, { value: Vt && !ee, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", height: u[Ee], overflow: "hidden", onClick: ee && x !== void 0 ? (_t) => {
      if (_t.droppedAsStray || Je(_t)) {
        return;
      }
      B.setCursor(Ee), x(Ee);
    } : C === "move" && !ee && d !== void 0 ? ($t) => {
      if ($t.droppedAsStray || Je($t) || Mte(h)) {
        return;
      }
      B.setCursor(Ee);
    } : void 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { isFocused: Vt, idle: ee, showScrollUp: ve === "glyph" && zt, showScrollDown: ve === "glyph" && gn, styled: P, hoverStyle: D, declareCursor: !ee && nn(Te)?.declareCursor !== false, onClick: ee || d === void 0 || C === "move" ? void 0 : (hi) => {
      if (Je(hi) || Mte(h)) {
        return;
      }
      B.setCursor(Ee), d(Ee);
    }, children: Te }) }) }, Ut);
  }), V;
  if (K[8] !== B.spareLines) V = B.spareLines > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, height: B.spareLines }), K[8] = B.spareLines, K[9] = V;
  else V = K[9];
  let Ke = V;
  if (!Q) {
    let J2;
    if (K[10] !== Qe || K[11] !== Ze || K[12] !== B.bind || K[13] !== Ae || K[14] !== Ke || K[15] !== De) J2 = (0, import_chunk_a46xeenj.o)(import_chunk_6qkpxgbg.S_e, { windowStart: De, ...B.bind, children: [Qe, Ae, Ke, Ze] }), K[10] = Qe, K[11] = Ze, K[12] = B.bind, K[13] = Ae, K[14] = Ke, K[15] = De, K[16] = J2;
    else J2 = K[16];
    let je2;
    if (K[17] !== J2 || K[18] !== ce.dropsClick) je2 = (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.FZe, { value: ce.dropsClick, children: J2 }), K[17] = J2, K[18] = ce.dropsClick, K[19] = je2;
    else je2 = K[19];
    return je2;
  }
  let J;
  if (K[20] !== Ae || K[21] !== Ke || K[22] !== De) J = (0, import_chunk_a46xeenj.o)(import_chunk_6qkpxgbg.S_e, { windowStart: De, children: [Ae, Ke] }), K[20] = Ae, K[21] = Ke, K[22] = De, K[23] = J;
  else J = K[23];
  let yn = J;
  const je = l ? null : Qe;
  let So;
  if (K[24] !== l || K[25] !== B.scrollBar) So = l ? { ...B.scrollBar, arrows: true } : B.scrollBar, K[24] = l, K[25] = B.scrollBar, K[26] = So;
  else So = K[26];
  const Rn = l ? s : void 0, xn = l ? Qe : null, kn = l ? Ze : null;
  let Co;
  if (K[27] !== yn || K[28] !== So || K[29] !== Rn || K[30] !== xn || K[31] !== kn) Co = (0, import_chunk_a46xeenj.o)(io, { bar: So, height: Rn, children: [xn, yn, kn] }), K[27] = yn, K[28] = So, K[29] = Rn, K[30] = xn, K[31] = kn, K[32] = Co;
  else Co = K[32];
  const Sn = l ? null : Ze;
  let Mo;
  if (K[33] !== B.bind || K[34] !== je || K[35] !== Co || K[36] !== Sn) Mo = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", ...B.bind, children: [je, Co, Sn] }), K[33] = B.bind, K[34] = je, K[35] = Co, K[36] = Sn, K[37] = Mo;
  else Mo = K[37];
  let Yt;
  if (K[38] !== Mo || K[39] !== ce.dropsClick) Yt = (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.FZe, { value: ce.dropsClick, children: Mo }), K[38] = Mo, K[39] = ce.dropsClick, K[40] = Yt;
  else Yt = K[40];
  return Yt;
}
function tn(n) {
  let s = (0, import_chunk_sng02qpc.k)(2), { children: t } = n, a;
  if (s[0] !== t) a = (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: t }), s[0] = t, s[1] = a;
  else a = s[1];
  return a;
}
function rn(n) {
  let s = (0, import_chunk_sng02qpc.k)(2), { children: t } = n, a;
  if (s[0] !== t) a = (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: t }), s[0] = t, s[1] = a;
  else a = s[1];
  return a;
}
function we(n) {
  return (0, import_chunk_bs4h6795.y_)(n) && n.type === rn;
}
function ho(n) {
  let t = nn(n)?.lines ?? 1;
  return Number.isFinite(t) ? Math.max(1, Math.trunc(t)) : 1;
}
function nn(n) {
  return (0, import_chunk_bs4h6795.y_)(n) && n.type === tn ? n.props : void 0;
}
var sc = Object.assign(wt, { Item: tn, Heading: rn });
function si() {
  return /* @__PURE__ */ new Set();
}
function li(Z) {
  if (!Ne(Z)) {
    return 0;
  }
  let { icon: T } = Z.props;
  return (0, import_chunk_bs4h6795.y_)(T) && T.type === import_chunk_5h92z04c.ln ? (0, import_chunk_5h92z04c.O9t)() : (0, import_chunk_mgh1y10w.oe)((0, import_chunk_qqkcytvr.cW)(T));
}
function ci(ue) {
  return Re(ue.props.meta).length > 0;
}
function di(re) {
  return (0, import_chunk_mgh1y10w.oe)(Jce(re.props.label));
}
function ai(l) {
  return (0, import_chunk_mgh1y10w.oe)(Re(l.props.meta).join(" \xB7 "));
}
var vt = 2, yo = 3, gt = 50, yt = 6;
function Pt(n) {
  let t = (0, import_chunk_sng02qpc.k)(30), s, a;
  if (t[0] !== n) ({ children: s, ...a } = n), t[0] = n, t[1] = s, t[2] = a;
  else s = t[1], a = t[2];
  let c = (0, import_chunk_6n6exvyx.Qo)((0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.ay) ?? { rows: 0, columns: 0 }), m = (0, import_chunk_bs4h6795.I)(null), [d] = (0, import_chunk_bs4h6795.y)(si), E;
  if (t[3] !== d || t[4] !== c) E = () => {
    let [W] = d;
    if (W) {
      return (0, import_chunk_8bkqeb5d.Gr)(W).width;
    }
    return (m.current && (0, import_chunk_8bkqeb5d.Gr)(m.current).width || c.columns) - vt;
  }, t[3] = d, t[4] = c, t[5] = E;
  else E = t[5];
  let M = (0, import_chunk_8bkqeb5d.Wo)(E), h, x, p, S, X, F;
  if (t[6] !== s || t[7] !== a || t[8] !== d || t[9] !== M) {
    let f = import_chunk_bs4h6795.dy.toArray(s);
    let A = f.filter(Ne);
    let O = Math.max(0, ...f.map(li));
    let b = A.filter(ci);
    let D = Math.min(gt, Math.max(0, ...b.map(di)));
    let te = Math.max(0, ...b.map(ai));
    let L = M - (O > 0 ? O + 1 : 0) - yo;
    let N = L - Math.min(D, Math.max(Math.ceil(L / 2), L - te));
    let Q = D + te > L && L < 2 * yt ? 0 : Math.min(N, Math.max(0, ...b.map((de) => (0, import_chunk_mgh1y10w.oe)(Ro(Re(de.props.meta), N)))));
    let C = Math.min(D, L - Q);
    x = import_chunk_8bkqeb5d.g;
    X = m;
    F = "column";
    h = sc;
    p = a;
    let P2;
    if (t[16] !== Q || t[17] !== O || t[18] !== C || t[19] !== d) P2 = (j) => Ne(j) ? (0, import_chunk_a46xeenj.e)(sc.Item, { lines: Jce(j.props.description) ? 2 : 1, children: (0, import_chunk_a46xeenj.e)(hn, { item: j.props, iconWidth: O, nameWidth: C, factsWidth: Q, rowLines: d }) }, j.key) : j, t[16] = Q, t[17] = O, t[18] = C, t[19] = d, t[20] = P2;
    else P2 = t[20];
    S = f.map(P2);
    t[6] = s, t[7] = a, t[8] = d, t[9] = M, t[10] = h, t[11] = x, t[12] = p, t[13] = S, t[14] = X, t[15] = F;
  } else h = t[10], x = t[11], p = t[12], S = t[13], X = t[14], F = t[15];
  let P;
  if (t[21] !== h || t[22] !== p || t[23] !== S) P = (0, import_chunk_a46xeenj.e)(h, { ...p, children: S }), t[21] = h, t[22] = p, t[23] = S, t[24] = P;
  else P = t[24];
  let U;
  if (t[25] !== x || t[26] !== X || t[27] !== F || t[28] !== P) U = (0, import_chunk_a46xeenj.e)(x, { ref: X, flexDirection: F, children: P }), t[25] = x, t[26] = X, t[27] = F, t[28] = P, t[29] = U;
  else U = t[29];
  return U;
}
function hn(n) {
  let S = (0, import_chunk_sng02qpc.k)(42), { item: t, iconWidth: s, nameWidth: a, factsWidth: c, rowLines: m } = n, { icon: d, meta: E, ...W } = t, M = oW(), h = (0, import_chunk_8bkqeb5d.Xe)(), x = Jce(W.label), p = Jce(W.description), X, F;
  if (S[0] !== p || S[1] !== c || S[2] !== d || S[3] !== h || S[4] !== x || S[5] !== E) {
    F = import_chunk_w1d7ygsk.Mn;
    te: {
      let f = Re(E);
      if (h) {
        const A2 = f.length > 0 && `, ${f.join(" \xB7 ")}`;
        const O2 = p && `. ${p}`;
        let b2;
        if (S[8] !== x || S[9] !== A2 || S[10] !== O2) b2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [x, A2, O2] }), S[8] = x, S[9] = A2, S[10] = O2, S[11] = b2;
        else b2 = S[11];
        let D2;
        if (S[12] !== d || S[13] !== b2) D2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [d, b2] }), S[12] = d, S[13] = b2, S[14] = D2;
        else D2 = S[14];
        F = D2;
        break te;
      }
      X = c > 0 && f.length > 0 ? Ro(f, c) : void 0;
    }
    S[0] = p, S[1] = c, S[2] = d, S[3] = h, S[4] = x, S[5] = E, S[6] = X, S[7] = F;
  } else X = S[6], F = S[7];
  if (F !== import_chunk_w1d7ygsk.Mn) return F;
  let L = X, A;
  if (S[15] !== m) A = (N) => {
    if (!N) {
      return;
    }
    return m.add(N), () => {
      m.delete(N);
    };
  }, S[15] = m, S[16] = A;
  else A = S[16];
  let O;
  if (S[17] !== d || S[18] !== s) O = s > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, width: s, marginRight: 1, children: d }), S[17] = d, S[18] = s, S[19] = O;
  else O = S[19];
  const b = L === void 0 ? 1 : 0, D = L === void 0 ? void 0 : a, de = L === void 0 ? 0 : yo, Q = M ? "suggestion" : void 0;
  let C;
  if (S[20] !== x || S[21] !== Q) C = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: Q, wrap: "truncate-end", children: x }), S[20] = x, S[21] = Q, S[22] = C;
  else C = S[22];
  let P;
  if (S[23] !== C || S[24] !== b || S[25] !== D || S[26] !== de) P = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: b, width: D, marginRight: de, children: C }), S[23] = C, S[24] = b, S[25] = D, S[26] = de, S[27] = P;
  else P = S[27];
  let j;
  if (S[28] !== c || S[29] !== L) j = L !== void 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 1, maxWidth: c, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: L }) }), S[28] = c, S[29] = L, S[30] = j;
  else j = S[30];
  let U;
  if (S[31] !== P || S[32] !== j || S[33] !== A || S[34] !== O) U = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: A, children: [O, P, j] }), S[31] = P, S[32] = j, S[33] = A, S[34] = O, S[35] = U;
  else U = S[35];
  let Z;
  if (S[36] !== p || S[37] !== s) Z = p && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: s > 0 ? s + 1 : 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: p }) }), S[36] = p, S[37] = s, S[38] = Z;
  else Z = S[38];
  let T;
  if (S[39] !== U || S[40] !== Z) T = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexGrow: 1, flexShrink: 1, children: [U, Z] }), S[39] = U, S[40] = Z, S[41] = T;
  else T = S[41];
  return T;
}
function Ht(n) {
  return null;
}
function Ne(n) {
  return (0, import_chunk_bs4h6795.y_)(n) && n.type === Ht;
}
function Re(n) {
  return (n ?? []).map(Jce).filter((t) => t !== "");
}
function Ro(n, t) {
  return n.map((s, a) => n.slice(0, a + 1).join(" \xB7 ")).findLast((s, a) => a === 0 || (0, import_chunk_mgh1y10w.oe)(s) <= t) ?? "";
}
function Jce(n) {
  if (typeof n === "string") return (0, import_chunk_7cfjrnwy.Wr)(n);
  return typeof n === "number" || typeof n === "boolean" ? String(n) : "";
}
var Qn = Object.assign(Pt, { Item: Ht });
