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
var chunk_9cvzjmj9_exports = {};
__export(chunk_9cvzjmj9_exports, {
  Rya: () => Rya,
  zE: () => zE
});
module.exports = __toCommonJS(chunk_9cvzjmj9_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_ddk99w14 = require("/$bunfs/root/chunk-ddk99w14.js");
var import_chunk_gd8mknr6 = require("/$bunfs/root/chunk-gd8mknr6.js");
var import_chunk_snett3g5 = require("/$bunfs/root/chunk-snett3g5.js");
var import_chunk_3j73ps7b = require("/$bunfs/root/chunk-3j73ps7b.js");
var import_chunk_hn0x7v1y = require("/$bunfs/root/chunk-hn0x7v1y.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_zvx9zp0y = require("/$bunfs/root/chunk-zvx9zp0y.js");
var import_chunk_6qkpxgbg = require("/$bunfs/root/chunk-6qkpxgbg.js");
var import_chunk_8n6jzsq4 = require("/$bunfs/root/chunk-8n6jzsq4.js");
var import_chunk_a2j3mm6r = require("/$bunfs/root/chunk-a2j3mm6r.js");
var import_chunk_97b6xx64 = require("/$bunfs/root/chunk-97b6xx64.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var rn = 32, re = 2, ee = 2, we = 2, xe = "wrap-trim", Le = true, Ee = (0, import_chunk_bs4h6795.an)(void 0), ie = (0, import_chunk_bs4h6795.an)(false), ke = (0, import_chunk_bs4h6795.an)(false);
function sn({ children: t, ...n }) {
  let s = (0, import_chunk_6n6exvyx.Qo)((0, import_chunk_6n6exvyx.qe)()), l = (0, import_chunk_bs4h6795.I)(null), [p] = (0, import_chunk_bs4h6795.y)(() => /* @__PURE__ */ new Set()), d = (0, import_chunk_8bkqeb5d.Wo)(() => {
    let [i] = p;
    return i && (0, import_chunk_8bkqeb5d.Gr)(i).width || l.current && (0, import_chunk_8bkqeb5d.Gr)(l.current).width || s.columns;
  }), m = (0, import_chunk_3j73ps7b.Ab)(), [a] = (0, import_chunk_bs4h6795.y)(() => /* @__PURE__ */ new WeakMap()), S = import_chunk_bs4h6795.dy.toArray(t), b = S.filter(nn), h = Math.min(Math.max(0, ...b.map((i) => (0, import_chunk_mgh1y10w.oe)((0, import_chunk_8n6jzsq4.Jce)(i.props.label)))), Math.max(rn, d - ee - re - Math.max(import_chunk_a2j3mm6r.Sve, ...b.map((i) => en(i.props.children))))), P = d - ee - h - re < import_chunk_a2j3mm6r.Sve, w = b.filter((i) => !C(i.props.children, Z)), H = (0, import_chunk_8n6jzsq4.Mte)(n.isDisabled), c = P ? d - ee - we : d - ee - h - re, [D, u, v] = (0, import_chunk_hn0x7v1y.fu)(void 0), [E, M] = (0, import_chunk_bs4h6795.y)(void 0), K = (0, import_chunk_bs4h6795.I)(null), { focusManager: Q } = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.sp), W = (0, import_chunk_snett3g5.Iv)({ isActive: true, columns: c, backspaceExitsOnEmpty: false, onExit: () => L(true, true), onCancel: () => L(false), onExitUp: () => L(true, true), onExitDown: () => L(true, true) });
  function L(i, x = false) {
    let f = v();
    if (f === void 0) return true;
    let N = b.find((X) => X.key === f.key)?.props.children, A = W.queryRef.current, T = i && A !== f.from && C(N, Y) ? N.props.validate?.(A) ?? null : null;
    if (T !== null && x) return M({ draft: A, reason: T }), false;
    if (u(void 0), M(void 0), K.current && Q?.activeElement === K.current) Q.blur();
    if (!i || T !== null || !C(N, Y) || N.props.disabled) return true;
    if (A !== f.from) De(a, N.props, A), N.props.onChange(A);
    return true;
  }
  function V(i) {
    let x = i?.props.children;
    if (!C(x, Y) || x.props.disabled || typeof i?.key !== "string") return An(x, a);
    let f = { key: i.key, from: In(x.props, a) };
    return { accept: () => {
      L(true), W.setQuery(f.from), u(f);
    } };
  }
  let j = S.map((i, x) => {
    if (!nn(i)) return (0, import_chunk_bs4h6795.y_)(i) && i.type === import_chunk_8n6jzsq4.sc.Heading ? i : (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.sc.Heading, { children: i }, (0, import_chunk_bs4h6795.y_)(i) ? i.key : x);
    let { children: f } = i.props, N = (0, import_chunk_8n6jzsq4.Jce)(i.props.label), A = D?.key === i.key && E?.draft === W.query ? E.reason : void 0, T = A ?? (0, import_chunk_8n6jzsq4.Jce)(i.props.description), X = T ? (0, import_chunk_7cfjrnwy.Mt)((0, import_chunk_8bkqeb5d.Ud)(T, Math.max(1, d - ee), xe), `
`) + 1 : 0, O = !(!H || n.onDisabledRowClick !== void 0) || D?.key === i.key ? void 0 : V(i).accept, F = C(f, se) || C(f, de) || C(f, le) ? en(f) : 0, B = (0, import_chunk_a46xeenj.e)(tn, { label: N, description: T, ink: i.props.ink, refused: A !== void 0, onClick: O && ((z) => {
      if (m(z) || (0, import_chunk_8n6jzsq4.Mte)(n.isDisabled) && n.onDisabledRowClick === void 0) return;
      O();
    }), labelColumn: h, stacked: P, targetWidth: Math.max(0, Math.min(F, c)), rowLines: C(f, Z) ? void 0 : p, children: (0, import_chunk_a46xeenj.e)(Ee, { value: D?.key === i.key && !H && C(f, Y) && !f.props.disabled ? { editor: W, room: c, input: K, end: L } : void 0, children: f }) });
    return C(f, Z) ? (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.sc.Heading, { children: B }, i.key) : (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.sc.Item, { declareCursor: D?.key !== i.key, lines: (P ? 2 : 1) + X, children: B }, i.key);
  });
  if (w.length === 0) return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: l, flexDirection: "column", children: [j.length === 0 && n.emptyMessage && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: n.emptyMessage }), j.map((i, x) => (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { isFocused: false, styled: false, children: i }, (0, import_chunk_bs4h6795.y_)(i) ? i.key : x))] });
  let U = (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.sc, { ...n, rowClick: "move", onFocus: (i) => {
    if (w[i]?.key !== v()?.key) L(true);
    n.onFocus?.(i);
  }, onSelect: (i) => {
    if (v() !== void 0) {
      L(true, true);
      return;
    }
    V(w[i]).accept?.();
  }, onRowKeyDown: (i, x) => {
    if (v() !== void 0) {
      W.handleKeyDown(i);
      return;
    }
    if (i.ctrl || i.meta) return;
    let f = V(w[x]), N = i.key === " " ? f.accept : i.key === "left" ? f.previous : i.key === "right" ? f.next : void 0;
    if (N === void 0) return;
    i.preventDefault(), N();
  }, children: j });
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: l, flexDirection: "column", children: (0, import_chunk_a46xeenj.e)(ie, { value: H, children: U }) });
}
function tn(t) {
  let u = (0, import_chunk_sng02qpc.k)(54), { label: n, description: s, ink: l, refused: p, onClick: d, labelColumn: m, stacked: a, targetWidth: S, rowLines: b, children: h } = t, P = (0, import_chunk_8n6jzsq4.oW)(), w = (0, import_chunk_8bkqeb5d.Xe)(), [H, c] = (0, import_chunk_6qkpxgbg.Dmt)(d !== void 0), D = (0, import_chunk_bs4h6795.be)(import_chunk_6qkpxgbg.FZe);
  if (w) {
    let v2;
    if (u[0] !== n) v2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [n, ","] }), u[0] = n, u[1] = v2;
    else v2 = u[1];
    let E2;
    if (u[2] !== h || u[3] !== v2) E2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [v2, h] }), u[2] = h, u[3] = v2, u[4] = E2;
    else E2 = u[4];
    let M2;
    if (u[5] !== s) M2 = s && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: s }), u[5] = s, u[6] = M2;
    else M2 = u[6];
    let K2;
    if (u[7] !== E2 || u[8] !== M2) K2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [E2, M2] }), u[7] = E2, u[8] = M2, u[9] = K2;
    else K2 = u[9];
    return K2;
  }
  let v;
  if (u[10] !== b) v = (Q) => {
    let W = Q?.parentNode;
    if (!b || !W) {
      return;
    }
    return b.add(W), () => {
      b.delete(W);
    };
  }, u[10] = b, u[11] = v;
  else v = u[11];
  const E = a ? "column" : "row", M = a ? void 0 : m, K = a ? 0 : re, L = l === "locked", V = P && l !== "locked" ? "suggestion" : void 0;
  let j;
  if (u[12] !== n || u[13] !== L || u[14] !== V) j = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: L, color: V, wrap: "truncate-end", children: n }), u[12] = n, u[13] = L, u[14] = V, u[15] = j;
  else j = u[15];
  let U;
  if (u[16] !== M || u[17] !== K || u[18] !== j) U = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: M, marginRight: K, flexShrink: 0, children: j }), u[16] = M, u[17] = K, u[18] = j, u[19] = U;
  else U = u[19];
  const i = a ? we : 0, x = H ? import_chunk_6qkpxgbg.XS : void 0;
  let f;
  if (u[20] !== D || u[21] !== d) f = d && ((N) => {
    if (!D(N)) d(N);
  }), u[20] = D, u[21] = d, u[22] = f;
  else f = u[22];
  let A;
  if (u[23] !== d || u[24] !== c) A = d && (() => c(true)), u[23] = d, u[24] = c, u[25] = A;
  else A = u[25];
  let T;
  if (u[26] !== d || u[27] !== c) T = d && (() => c(false)), u[26] = d, u[27] = c, u[28] = T;
  else T = u[28];
  const X = l !== void 0;
  let q;
  if (u[29] !== h || u[30] !== X) q = (0, import_chunk_a46xeenj.e)(ke, { value: X, children: h }), u[29] = h, u[30] = X, u[31] = q;
  else q = u[31];
  let O;
  if (u[32] !== x || u[33] !== f || u[34] !== A || u[35] !== T || u[36] !== q || u[37] !== S) O = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { minWidth: S, backgroundColor: x, onClick: f, onMouseEnter: A, onMouseLeave: T, children: q }), u[32] = x, u[33] = f, u[34] = A, u[35] = T, u[36] = q, u[37] = S, u[38] = O;
  else O = u[38];
  let F;
  if (u[39] !== O || u[40] !== i) F = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: i, children: O }), u[39] = O, u[40] = i, u[41] = F;
  else F = u[41];
  let B;
  if (u[42] !== F || u[43] !== E || u[44] !== U) B = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: E, children: [U, F] }), u[42] = F, u[43] = E, u[44] = U, u[45] = B;
  else B = u[45];
  let z;
  if (u[46] !== s || u[47] !== p || u[48] !== b) z = s && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: !p, color: p ? "error" : void 0, wrap: b === void 0 ? "truncate-end" : xe, children: s }), u[46] = s, u[47] = p, u[48] = b, u[49] = z;
  else z = u[49];
  let Se;
  if (u[50] !== v || u[51] !== B || u[52] !== z) Se = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: v, flexDirection: "column", children: [B, z] }), u[50] = v, u[51] = B, u[52] = z, u[53] = Se;
  else Se = u[53];
  return Se;
}
function _(t) {
  let P = (0, import_chunk_sng02qpc.k)(20), { spoken: n, disabled: s, before: l, after: p, keyHint: d, children: m } = t, a = s === void 0 ? false : s, S = (0, import_chunk_8n6jzsq4.oW)(), b = (0, import_chunk_bs4h6795.be)(ke), h = (0, import_chunk_bs4h6795.be)(ie), w;
  if (P[0] !== a || P[1] !== S || P[2] !== h || P[3] !== d) w = d && S && !a && !h ? [d] : null, P[0] = a, P[1] = S, P[2] = h, P[3] = d, P[4] = w;
  else w = P[4];
  if ((0, import_chunk_zvx9zp0y.nl)(w), (0, import_chunk_8bkqeb5d.Xe)()) {
    const c2 = a && ", unavailable";
    let D2;
    if (P[5] !== n || P[6] !== c2) D2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [n, c2] }), P[5] = n, P[6] = c2, P[7] = D2;
    else D2 = P[7];
    return D2;
  }
  const c = a || b;
  let D;
  if (P[8] !== l) D = l && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: l }), P[8] = l, P[9] = D;
  else D = P[9];
  const u = S && !a && !b ? "suggestion" : void 0;
  let v;
  if (P[10] !== m || P[11] !== u) v = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: u, children: m }), P[10] = m, P[11] = u, P[12] = v;
  else v = P[12];
  let E;
  if (P[13] !== p) E = p && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: p }), P[13] = p, P[14] = E;
  else E = P[14];
  let M;
  if (P[15] !== c || P[16] !== D || P[17] !== v || P[18] !== E) M = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: c, wrap: "truncate-end", children: [D, v, E] }), P[15] = c, P[16] = D, P[17] = v, P[18] = E, P[19] = M;
  else M = P[19];
  return M;
}
function Te(t) {
  let s = (0, import_chunk_sng02qpc.k)(2), { children: n } = t, l;
  if (s[0] !== n) l = (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: n }), s[0] = n, s[1] = l;
  else l = s[1];
  return l;
}
function se(t) {
  let p = (0, import_chunk_sng02qpc.k)(4), { value: n, disabled: s } = t, l = n ? "on" : "off", d;
  if (p[0] === import_chunk_w1d7ygsk.R) d = { on: "space", hint: "toggle" }, p[0] = d;
  else d = p[0];
  let m;
  if (p[1] !== s || p[2] !== l) m = (0, import_chunk_a46xeenj.e)(_, { spoken: l, disabled: s, keyHint: d, children: l }), p[1] = s, p[2] = l, p[3] = m;
  else m = p[3];
  return m;
}
function de(t) {
  let m = (0, import_chunk_sng02qpc.k)(9), { value: n, options: s, disabled: l } = t, p = (0, import_chunk_bs4h6795.be)(ie), d = (0, import_chunk_8n6jzsq4.oW)(), a;
  if (m[0] !== s || m[1] !== n) a = s.find((S) => S.value === n)?.label ?? n, m[0] = s, m[1] = n, m[2] = a;
  else a = m[2];
  let b = a, h = !l && !p && (d || !Le), P;
  if (m[3] === import_chunk_w1d7ygsk.R) P = { on: ["left", "right"], hint: "adjust" }, m[3] = P;
  else P = m[3];
  const w = h ? "\u2039 " : void 0, H = h ? " \u203A" : void 0;
  let c;
  if (m[4] !== l || m[5] !== b || m[6] !== w || m[7] !== H) c = (0, import_chunk_a46xeenj.e)(_, { spoken: b, disabled: l, keyHint: P, before: w, after: H, children: b }), m[4] = l, m[5] = b, m[6] = w, m[7] = H, m[8] = c;
  else c = m[8];
  return c;
}
function ge(t) {
  let p = (0, import_chunk_sng02qpc.k)(6), { children: n, disabled: s } = t;
  const l = n ? `${n}, opens` : "opens";
  let d;
  if (p[0] === import_chunk_w1d7ygsk.R) d = { on: "enter", hint: "open" }, p[0] = d;
  else d = p[0];
  const m = n ? " \u203A" : "\u203A";
  let a;
  if (p[1] !== n || p[2] !== s || p[3] !== l || p[4] !== m) a = (0, import_chunk_a46xeenj.e)(_, { spoken: l, disabled: s, keyHint: d, after: m, children: n }), p[1] = n, p[2] = s, p[3] = l, p[4] = m, p[5] = a;
  else a = p[5];
  return a;
}
function le(t) {
  let p = (0, import_chunk_sng02qpc.k)(5), { children: n, disabled: s } = t;
  const l = n ? `${n}, button` : "button";
  let d;
  if (p[0] === import_chunk_w1d7ygsk.R) d = { on: "enter", hint: "select" }, p[0] = d;
  else d = p[0];
  let m;
  if (p[1] !== n || p[2] !== s || p[3] !== l) m = (0, import_chunk_a46xeenj.e)(_, { spoken: l, disabled: s, keyHint: d, children: n }), p[1] = n, p[2] = s, p[3] = l, p[4] = m;
  else m = p[4];
  return m;
}
function Z(t) {
  let p = (0, import_chunk_sng02qpc.k)(6), { children: n, disabled: s } = t;
  const l = n || "empty";
  let d;
  if (p[0] !== n) d = n || (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\u2014" }), p[0] = n, p[1] = d;
  else d = p[1];
  let m;
  if (p[2] !== s || p[3] !== l || p[4] !== d) m = (0, import_chunk_a46xeenj.e)(_, { spoken: l, disabled: s, children: d }), p[2] = s, p[3] = l, p[4] = d, p[5] = m;
  else m = p[5];
  return m;
}
function Y(t) {
  let a = (0, import_chunk_sng02qpc.k)(81), { value: n, placeholder: s, disabled: l } = t, p = (0, import_chunk_bs4h6795.be)(Ee), d = (0, import_chunk_8bkqeb5d.Xe)(), m = (0, import_chunk_ddk99w14.Op)(), S;
  if (a[0] !== p) S = p ? [{ on: "enter", hint: "save" }] : null, a[0] = p, a[1] = S;
  else S = a[1];
  let b;
  if (a[2] === import_chunk_w1d7ygsk.R) b = { isTyping: true }, a[2] = b;
  else b = a[2];
  if ((0, import_chunk_zvx9zp0y.nl)(S, b), p === void 0) {
    const h2 = `${n || "empty"}, edit text`;
    let P2;
    if (a[3] === import_chunk_w1d7ygsk.R) P2 = { on: "enter", hint: "edit" }, a[3] = P2;
    else P2 = a[3];
    let w2;
    if (a[4] !== s || a[5] !== n) w2 = n || (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: s }), a[4] = s, a[5] = n, a[6] = w2;
    else w2 = a[6];
    let H2;
    if (a[7] !== l || a[8] !== h2 || a[9] !== w2) H2 = (0, import_chunk_a46xeenj.e)(_, { spoken: h2, disabled: l, keyHint: P2, children: w2 }), a[7] = l, a[8] = h2, a[9] = w2, a[10] = H2;
    else H2 = a[10];
    return H2;
  }
  let { editor: c, input: D, end: u } = p, v, E, M, K, Q, W, L, V, j, U, h, P, w, H, i, x, f;
  if (a[11] !== p.room || a[12] !== c || a[13] !== u || a[14] !== D || a[15] !== d || a[16] !== m) {
    let N = import_chunk_gd8mknr6.pl.fromText(c.query, p.room, c.cursorOffset);
    let A = m && !d && !(0, import_chunk_97b6xx64.fY)() ? " " : "";
    let T2;
    if (a[34] !== u) T2 = () => u(true, true) ? false : void 0, a[34] = u, a[35] = T2;
    else T2 = a[35];
    let X = T2;
    Q = import_chunk_jczdrj4v.zi;
    j = "Select";
    let q2;
    if (a[36] !== u) q2 = { action: "select:cancel", run: () => {
      u(false);
    } }, a[36] = u, a[37] = q2;
    else q2 = a[37];
    let O2;
    if (a[38] !== c) O2 = { action: "select:first", hint: "", run: () => c.setCursorOffset(0) }, a[38] = c, a[39] = O2;
    else O2 = a[39];
    let F2;
    if (a[40] !== c) F2 = { action: "select:last", hint: "", run: () => c.setCursorOffset(c.queryRef.current.length) }, a[40] = c, a[41] = F2;
    else F2 = a[41];
    let B2, z;
    if (a[42] !== X) B2 = { action: "select:previous", run: X }, z = { action: "select:next", run: X }, a[42] = X, a[43] = B2, a[44] = z;
    else B2 = a[43], z = a[44];
    if (a[45] !== q2 || a[46] !== O2 || a[47] !== F2 || a[48] !== B2 || a[49] !== z) U = [q2, O2, F2, B2, z], a[45] = q2, a[46] = O2, a[47] = F2, a[48] = B2, a[49] = z, a[50] = U;
    else U = a[50];
    K = import_chunk_8bkqeb5d.g;
    if (a[51] !== u) V = (Se) => u(Se.relatedTarget !== null), a[51] = u, a[52] = V;
    else V = a[52];
    M = import_chunk_8bkqeb5d.Cve;
    i = D;
    x = true;
    f = { line: 0, column: N.getPosition().column, visible: true };
    if (a[53] !== c) W = (Me) => {
      if (c.handleKeyDown(Me), Me.defaultPrevented) Me.stopImmediatePropagation();
    }, a[53] = c, a[54] = W;
    else W = a[54];
    L = c.handlePaste;
    E = import_chunk_8bkqeb5d.r;
    P = "truncate-end";
    w = true;
    H = true;
    v = import_chunk_8bkqeb5d.rr;
    h = N.render(A, "", import_chunk_d57v19zt.Eoe, void 0, 1, void 0, void 0, d);
    a[11] = p.room, a[12] = c, a[13] = u, a[14] = D, a[15] = d, a[16] = m, a[17] = v, a[18] = E, a[19] = M, a[20] = K, a[21] = Q, a[22] = W, a[23] = L, a[24] = V, a[25] = j, a[26] = U, a[27] = h, a[28] = P, a[29] = w, a[30] = H, a[31] = i, a[32] = x, a[33] = f;
  } else v = a[17], E = a[18], M = a[19], K = a[20], Q = a[21], W = a[22], L = a[23], V = a[24], j = a[25], U = a[26], h = a[27], P = a[28], w = a[29], H = a[30], i = a[31], x = a[32], f = a[33];
  let T;
  if (a[55] !== v || a[56] !== h) T = (0, import_chunk_a46xeenj.e)(v, { children: h }), a[55] = v, a[56] = h, a[57] = T;
  else T = a[57];
  let q;
  if (a[58] !== E || a[59] !== T || a[60] !== P || a[61] !== w || a[62] !== H) q = (0, import_chunk_a46xeenj.e)(E, { wrap: P, "aria-preserve-whitespace": w, dangerouslyAllowHiddenCharacters: H, children: T }), a[58] = E, a[59] = T, a[60] = P, a[61] = w, a[62] = H, a[63] = q;
  else q = a[63];
  let O;
  if (a[64] !== M || a[65] !== W || a[66] !== L || a[67] !== q || a[68] !== i || a[69] !== x || a[70] !== f) O = (0, import_chunk_a46xeenj.e)(M, { ref: i, autoFocus: x, caret: f, onKeyDown: W, onPaste: L, children: q }), a[64] = M, a[65] = W, a[66] = L, a[67] = q, a[68] = i, a[69] = x, a[70] = f, a[71] = O;
  else O = a[71];
  let F;
  if (a[72] !== K || a[73] !== V || a[74] !== O) F = (0, import_chunk_a46xeenj.e)(K, { onBlur: V, children: O }), a[72] = K, a[73] = V, a[74] = O, a[75] = F;
  else F = a[75];
  let B;
  if (a[76] !== Q || a[77] !== j || a[78] !== U || a[79] !== F) B = (0, import_chunk_a46xeenj.e)(Q, { scope: j, bindings: U, children: F }), a[76] = Q, a[77] = j, a[78] = U, a[79] = F, a[80] = B;
  else B = a[80];
  return B;
}
function en(t) {
  if (C(t, se)) return (0, import_chunk_mgh1y10w.oe)("off");
  if (C(t, de)) return Math.max(0, ...t.props.options.map((n) => te(n.label))) + (t.props.disabled ? 0 : (0, import_chunk_mgh1y10w.oe)("\u2039  \u203A"));
  if (C(t, ge)) {
    let { children: n } = t.props;
    return n ? te(n) + (0, import_chunk_mgh1y10w.oe)(" \u203A") : (0, import_chunk_mgh1y10w.oe)("\u203A");
  }
  if (C(t, le)) return te(t.props.children ?? "");
  if (C(t, Z)) return te(t.props.children || "\u2014");
  if (C(t, Y)) return te(t.props.value || (t.props.placeholder ?? "")) + 1;
  return 0;
}
function Rya(t) {
  let n = (0, import_chunk_8n6jzsq4.Jce)(t);
  return 2 + (n ? (0, import_chunk_7cfjrnwy.Mt)(n, " ") + 1 : 0);
}
function te(t) {
  return Math.max(0, ...t.split(`
`).map((n) => (0, import_chunk_mgh1y10w.oe)(n)));
}
function An(t, n) {
  if (C(t, se) && !t.props.disabled) {
    let s = Fn.bind(void 0, t.props, n);
    return { accept: s, previous: s, next: s };
  }
  if (C(t, de) && !t.props.disabled) {
    let { props: s } = t, l = (p) => () => {
      let d = s.options.length, m = s.options.findIndex((b) => b.value === (n.get(s) ?? s.value)), a = Math.max(m, p === 1 ? -1 : 0), S = s.options[(a + p + d) % d];
      if (S === void 0) return;
      De(n, s, S.value), s.onChange(S.value);
    };
    return { accept: l(1), next: l(1), previous: l(-1) };
  }
  if (C(t, ge) && !t.props.disabled) return { accept: t.props.onOpen, next: t.props.onOpen };
  if (C(t, le) && !t.props.disabled) return { accept: t.props.onPress };
  return {};
}
function Fn(t, n) {
  let s = !(n.get(t) ?? t.value);
  De(n, t, s), t.onChange(s);
}
function De(t, n, s) {
  t.set(n, s), queueMicrotask(() => t.delete(n));
}
function In(t, n) {
  let s = n.get(t);
  return typeof s === "string" ? s : t.value;
}
function nn(t) {
  return (0, import_chunk_bs4h6795.y_)(t) && t.type === Te;
}
function C(t, n) {
  return (0, import_chunk_bs4h6795.y_)(t) && t.type === n;
}
var zE = Object.assign(sn, { Field: Te, Toggle: se, Select: de, Text: Y, Link: ge, Button: le, Value: Z });
