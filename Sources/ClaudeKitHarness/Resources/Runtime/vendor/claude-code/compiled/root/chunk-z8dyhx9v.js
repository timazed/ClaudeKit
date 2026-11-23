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
var chunk_z8dyhx9v_exports = {};
__export(chunk_z8dyhx9v_exports, {
  F2s: () => F2s,
  GWr: () => GWr,
  Ns: () => Ns,
  Zu: () => Zu,
  b7n: () => b7n,
  gBo: () => gBo,
  jf: () => jf,
  po: () => po,
  wve: () => wve,
  y_e: () => y_e
});
module.exports = __toCommonJS(chunk_z8dyhx9v_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_fc9svvyv = require("/$bunfs/root/chunk-fc9svvyv.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_dwa7jc2e = require("/$bunfs/root/chunk-dwa7jc2e.js");
var import_chunk_qqkcytvr = require("/$bunfs/root/chunk-qqkcytvr.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_hn0x7v1y = require("/$bunfs/root/chunk-hn0x7v1y.js");
var import_chunk_vh9td94q = require("/$bunfs/root/chunk-vh9td94q.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_util = require("util");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
class Le extends Map {
  first;
  last;
  constructor(n) {
    let t = [], i, f, p, u = 0;
    for (let l of n) {
      let s = { value: l.value, previous: p, next: void 0, index: u };
      if (p) p.next = s;
      i ||= s, f = s, t.push([l.value, s]), u++, p = s;
    }
    super(t);
    this.first = i, this.last = f;
  }
}
function je(n) {
  let { visibleFromIndex: t, visibleToIndex: i } = n;
  return n.moreRows === "slotEach" ? { from: t > 0 ? t + 1 : t, to: i < n.optionMap.size ? i - 1 : i } : { from: t, to: i };
}
function Jn(n) {
  let t = n.focusedValue === void 0 ? void 0 : n.optionMap.get(n.focusedValue)?.index, { from: i, to: f } = je(n), p = t === void 0 ? 0 : t < i ? -1 : t >= f ? 1 : 0;
  return p === 0 || n.moreRows !== "slotEach" ? n : { ...n, visibleFromIndex: n.visibleFromIndex + p, visibleToIndex: n.visibleToIndex + p };
}
function _e(n, t, i) {
  return (n * t < 0 ? n : n % (2 * i)) + t;
}
var eo = (n, t) => {
  let i = Jn(no(n, t)), f = (t.type === "set-focus" ? t.overshoot : void 0) ?? (i.focusedValue === n.focusedValue ? i.overshoot : 0);
  return f === i.overshoot ? i : { ...i, overshoot: f };
}, no = (n, t) => {
  let i = je(n), { size: f } = n.optionMap, p = n.moreRows === "slotEach" ? i.to - i.from : n.visibleOptionCount;
  switch (t.type) {
    case "focus-next-option": {
      if (n.focusedValue === void 0) return n;
      let u = n.optionMap.get(n.focusedValue);
      if (!u) return n;
      if (n.overshoot < 0 || !u.next && t.stopsAtLastRow) return { ...n, overshoot: _e(n.overshoot, 1, f) };
      let l = u.next || n.optionMap.first;
      if (!l) return n;
      if (!u.next && l === n.optionMap.first) return { ...n, focusedValue: l.value, visibleFromIndex: 0, visibleToIndex: n.visibleOptionCount };
      if (!(l.index >= n.visibleToIndex)) return { ...n, focusedValue: l.value };
      let T = Math.min(n.optionMap.size, n.visibleToIndex + 1), c = T - n.visibleOptionCount;
      return { ...n, focusedValue: l.value, visibleFromIndex: c, visibleToIndex: T };
    }
    case "focus-previous-option": {
      if (n.focusedValue === void 0) return n;
      let u = n.optionMap.get(n.focusedValue);
      if (!u) return n;
      if (n.overshoot > 0 || !u.previous && t.holdsFirstRow) return { ...n, overshoot: _e(n.overshoot, -1, f) };
      let l = u.previous || n.optionMap.last;
      if (!l) return n;
      if (!u.previous && l === n.optionMap.last) {
        let h = n.optionMap.size, v = Math.max(0, h - n.visibleOptionCount);
        return { ...n, focusedValue: l.value, visibleFromIndex: v, visibleToIndex: h };
      }
      if (!(l.index <= n.visibleFromIndex)) return { ...n, focusedValue: l.value };
      let T = Math.max(0, n.visibleFromIndex - 1), c = T + n.visibleOptionCount;
      return { ...n, focusedValue: l.value, visibleFromIndex: T, visibleToIndex: c };
    }
    case "focus-next-page": {
      if (n.focusedValue === void 0) return n;
      let u = n.optionMap.get(n.focusedValue);
      if (!u) return n;
      let l = Math.min(n.optionMap.size - 1, u.index + p), s = n.optionMap.first;
      while (s && s.index < l) if (s.next) s = s.next;
      else break;
      if (!s) return n;
      let T = Math.min(n.optionMap.size, s.index + 1), c = Math.max(0, T - n.visibleOptionCount);
      return { ...n, focusedValue: s.value, visibleFromIndex: c, visibleToIndex: T, overshoot: 0 };
    }
    case "focus-previous-page": {
      if (n.focusedValue === void 0) return n;
      let u = n.optionMap.get(n.focusedValue);
      if (!u) return n;
      let l = Math.max(0, u.index - p), s = n.optionMap.first;
      while (s && s.index < l) if (s.next) s = s.next;
      else break;
      if (!s) return n;
      let T = Math.max(0, s.index), c = Math.min(n.optionMap.size, T + n.visibleOptionCount);
      return { ...n, focusedValue: s.value, visibleFromIndex: T, visibleToIndex: c, overshoot: 0 };
    }
    case "reset":
      return { ...t.state, overshoot: n.overshoot };
    case "scroll-viewport": {
      let u = Math.min(Math.max(0, n.optionMap.size - n.visibleOptionCount), Math.max(0, n.visibleFromIndex + t.delta));
      if (u === n.visibleFromIndex) return n;
      let l = Math.min(n.optionMap.size, u + n.visibleOptionCount), s = n.focusedValue === void 0 ? void 0 : n.optionMap.get(n.focusedValue), T = { ...n, visibleFromIndex: u, visibleToIndex: l }, { from: c, to: h } = je(T);
      while (s?.next && s.index < c) s = s.next;
      while (s?.previous && s.index >= h) s = s.previous;
      return { ...T, focusedValue: s?.value };
    }
    case "set-focus": {
      if (n.focusedValue === t.value) return n;
      let u = n.optionMap.get(t.value);
      if (!u) return n;
      if (u.index >= n.visibleFromIndex && u.index < n.visibleToIndex) return { ...n, focusedValue: t.value };
      let l, s;
      if (u.index < n.visibleFromIndex) l = u.index, s = Math.min(n.optionMap.size, l + n.visibleOptionCount);
      else s = Math.min(n.optionMap.size, u.index + 1), l = Math.max(0, s - n.visibleOptionCount);
      return { ...n, focusedValue: t.value, visibleFromIndex: l, visibleToIndex: s };
    }
  }
}, qn = ({ visibleOptionCount: n, options: t, initialFocusValue: i, currentViewport: f, focusAtMiddle: p = false, moreRows: u = "none" }) => {
  let l = typeof n === "number" ? Math.min(n, t.length) : t.length, s = { slotEach: 3, slotShared: 3, linesKept: 1, none: 1 }, T = l < t.length && l >= s[u] ? u : "none", c = T === "slotShared" ? l - 1 : l, h = new Le(t), v = i !== void 0 && h.get(i), W = v ? i : h.first?.value, b = 0, m = c;
  if (v) {
    let F = v.index;
    if (p) b = Math.max(0, Math.min(F - (c > 2 ? Math.floor(c / 2) : 0), h.size - c)), m = Math.min(h.size, b + c);
    else if (f) if (F >= f.visibleFromIndex && F < f.visibleToIndex) {
      if (b = f.visibleFromIndex, m = Math.min(h.size, b + c), F >= m) m = Math.min(h.size, F + 1), b = Math.max(0, m - c);
      if (m - b < c) b = Math.max(0, m - c);
    } else if (F < f.visibleFromIndex) {
      if (b = F, m = Math.min(h.size, b + c), m - b < c) b = Math.max(0, m - c);
    } else m = Math.min(h.size, F + 1), b = Math.max(0, m - c);
    else if (F >= c) m = Math.min(h.size, F + 1), b = Math.max(0, m - c);
    b = Math.max(0, Math.min(b, h.size - 1)), m = Math.min(h.size, Math.max(c, m));
  }
  return Jn({ optionMap: h, visibleOptionCount: c, focusedValue: W, visibleFromIndex: b, visibleToIndex: m, moreRows: T, overshoot: 0 });
};
function GWr({ visibleOptionCount: n = 5, moreRows: t, options: i, onFocus: f, focusValue: p, scrollFocusToMiddleOnOptionsChange: u = false, stopsAtLastRow: l = false, holdsFirstRow: s = false }) {
  let [T, c, h] = (0, import_chunk_hn0x7v1y.fu)(() => qn({ visibleOptionCount: n, moreRows: t, options: i, initialFocusValue: p })), v = (0, import_chunk_bs4h6795.ye)((C) => {
    c((M) => eo(M, C));
  }, [c]), W = (0, import_chunk_bs4h6795.mo)((C) => f?.(C)), b = (0, import_chunk_bs4h6795.I)(void 0), [m, F] = (0, import_chunk_bs4h6795.y)(i), [O, d] = (0, import_chunk_bs4h6795.y)(n), [L, D] = (0, import_chunk_bs4h6795.y)(t), z = i !== m && !(0, import_util.isDeepStrictEqual)(i, m), J = n !== O || t !== L;
  if (z || J) {
    let C = h();
    if (v({ type: "reset", state: qn({ visibleOptionCount: n, moreRows: t, options: i, initialFocusValue: z ? p ?? C.focusedValue : C.focusedValue ?? p, currentViewport: { visibleFromIndex: C.visibleFromIndex, visibleToIndex: C.visibleToIndex }, focusAtMiddle: z && u }) }), z) F(i);
    if (J) d(n), D(t);
  }
  let S = (0, import_chunk_bs4h6795.ye)((C) => {
    v(C);
    let M = yn(h().focusedValue, i);
    if (M !== void 0 && M !== b.current) b.current = M, f?.(M);
  }, [v, h, i, f]), j = (0, import_chunk_bs4h6795.ye)(() => {
    S({ type: "focus-next-option", stopsAtLastRow: l });
  }, [S, l]), V = (0, import_chunk_bs4h6795.ye)(() => {
    S({ type: "focus-previous-option", holdsFirstRow: s });
  }, [S, s]), P = (0, import_chunk_bs4h6795.ye)(() => {
    S({ type: "focus-next-page" });
  }, [S]), x = (0, import_chunk_bs4h6795.ye)(() => {
    S({ type: "focus-previous-page" });
  }, [S]), E = (0, import_chunk_bs4h6795.ye)((C) => {
    let M = h().visibleFromIndex;
    return S({ type: "scroll-viewport", delta: C }), h().visibleFromIndex !== M;
  }, [S, h]), ae = (0, import_chunk_bs4h6795.ye)((C, M = 0) => {
    if (C !== void 0) S({ type: "set-focus", value: C, overshoot: M });
  }, [S]), X = je(T), Re = (0, import_chunk_bs4h6795.re)(() => i.map((C, M) => ({ ...C, index: M })).slice(X.from, X.to), [i, X.from, X.to]), Y = (0, import_chunk_bs4h6795.re)(() => yn(T.focusedValue, i), [T.focusedValue, i]), ue = (0, import_chunk_bs4h6795.ye)(() => yn(h().focusedValue, i), [h, i]);
  return (0, import_chunk_bs4h6795.H)(() => {
    if (Y === void 0) {
      b.current = void 0;
      return;
    }
    if (Y !== b.current) b.current = Y, W(Y);
  }, [Y]), (0, import_chunk_bs4h6795.H)(() => {
    if (p !== void 0) v({ type: "set-focus", value: p });
  }, [p, v]), { focusedValue: Y, getFocusedValue: ue, visibleFromIndex: X.from, visibleToIndex: X.to, moreRows: T.moreRows, visibleOptions: Re, focusNextOption: j, focusPreviousOption: V, focusNextPage: P, focusPreviousPage: x, focusOption: ae, scrollViewport: E, options: i };
}
function yn(n, t) {
  if (n === void 0) return;
  if (t.some((i) => i.value === n)) return n;
  return t[0]?.value;
}
function y_e() {
  let n = !(0, import_chunk_vh9td94q.MF)()?.takesUnusedKeys;
  return (t) => t.key || (0, import_chunk_8bkqeb5d.nWo)(t, n);
}
(0, import_chunk_bs4h6795.G)();
function Ns(n = import_chunk_2t5dst6n.KE) {
  let t = (0, import_chunk_8bkqeb5d.si)(), i = Zu();
  return (0, import_chunk_bs4h6795.ye)(() => (0, import_chunk_2t5dst6n.Ha)(t, i(), n), [t, i, n]);
}
function Zu() {
  let [n] = (0, import_chunk_bs4h6795.y)(Date.now), t = (0, import_chunk_2t5dst6n.hx)(n);
  return (0, import_chunk_bs4h6795.ye)(() => t(n), [t, n]);
}
function jf(n, t = import_chunk_2t5dst6n.KE) {
  let i = (0, import_chunk_8bkqeb5d.oo)(t, n);
  return { remountKey: i ? "settled" : "held", settled: i };
}
function b7n() {
  let [n, t] = (0, import_chunk_bs4h6795.y)(0), i = (0, import_chunk_bs4h6795.ye)(() => t((f) => f + 1), []);
  return { epoch: n, noteAttempt: i };
}
function po() {
  let n = (0, import_chunk_8bkqeb5d.si)(), t = (0, import_chunk_bs4h6795.I)(null), { epoch: i, noteAttempt: f } = b7n(), p = (0, import_chunk_bs4h6795.ye)((l = import_chunk_2t5dst6n.KE) => t.current !== null && (0, import_chunk_2t5dst6n.QK)(n, t.current, l), [n]), u = (0, import_chunk_bs4h6795.ye)(() => {
    t.current = Date.now(), f();
  }, [f]);
  return { refusedWithin: p, noteRefused: u, epoch: i };
}
function Lo(xr) {
  return String(xr.value);
}
function jo() {
  return null;
}
function _o() {
  return null;
}
function Uo() {
  return "";
}
function Go() {
  return null;
}
function Ho() {
  return "";
}
function qo() {
  return "";
}
function Jo() {
  return null;
}
function Qo() {
  return null;
}
function Xo() {
  return null;
}
function Yo() {
  return "";
}
function Zo() {
  return "";
}
function er() {
  return "";
}
function nr() {
  return "";
}
function tr() {
  return null;
}
function or() {
  return null;
}
function rr() {
  return null;
}
function ir(hr) {
  return hr.type !== "input";
}
function ur() {
  return "";
}
function sr(gr, yr) {
  return gr - yr;
}
function lr(Tr) {
  return String(Tr + 1);
}
function ar() {
  return null;
}
function fr() {
  return "";
}
function cr() {
  return null;
}
function dr() {
  return null;
}
function te(n) {
  let p = (0, import_chunk_sng02qpc.k)(3), [t, i] = (0, import_chunk_bs4h6795.y)(n), f = (0, import_chunk_bs4h6795.I)(n), u;
  if (p[0] === import_chunk_w1d7ygsk.R) u = (l) => {
    f.current = l(f.current), i(f.current);
  }, p[0] = u;
  else u = p[0];
  let s = u, T;
  if (p[1] !== t) T = [t, f, s], p[1] = t, p[2] = T;
  else T = p[2];
  return T;
}
function Ne() {
  return te("");
}
function Pn(n) {
  if (n.length <= 1) return n[0] ?? "";
  if (n.length === 2) return `${n[0]} or ${n[1]}`;
  return `${n.slice(0, -1).join(", ")}, or ${n.at(-1)}`;
}
var Tn = 300;
function so(n) {
  return ` \u2026 +${n} more characters`;
}
function Xn(n) {
  if (n.length <= Tn) return n;
  let t = (0, import_chunk_7cfjrnwy.Ea)(n, Tn);
  if (t === n) return n;
  let i = [...n].length - Tn;
  return t + so(i);
}
function Ft(n, t, i) {
  let l = (0, import_chunk_sng02qpc.k)(22), f = t === void 0 ? import_chunk_2t5dst6n.KE : t, p = (0, import_chunk_8bkqeb5d.si)(), u = Ns(f), s;
  if (l[0] !== n || l[1] !== p || l[2] !== u || l[3] !== f) s = n === void 0 ? u : () => (0, import_chunk_2t5dst6n.Ha)(p, n(), f), l[0] = n, l[1] = p, l[2] = u, l[3] = f, l[4] = s;
  else s = l[4];
  let T = s, c;
  if (l[5] !== p || l[6] !== T || l[7] !== i) c = () => {
    let h = i();
    return T() || h !== void 0 && (0, import_chunk_2t5dst6n.QK)(p, h, import_chunk_2t5dst6n._s);
  }, l[5] = p, l[6] = T, l[7] = i, l[8] = c;
  else c = l[8];
  let v = c, { refusedWithin: W, noteRefused: b } = po(), m;
  if (l[9] !== v || l[10] !== b || l[11] !== W || l[12] !== f) m = () => {
    if (v() || W(f)) {
      return b(), true;
    }
    return false;
  }, l[9] = v, l[10] = b, l[11] = W, l[12] = f, l[13] = m;
  else m = l[13];
  let F = m, O;
  if (l[14] !== v || l[15] !== b || l[16] !== W || l[17] !== f) O = () => {
    if (!v() && !W(f)) {
      return false;
    }
    return b(), true;
  }, l[14] = v, l[15] = b, l[16] = W, l[17] = f, l[18] = O;
  else O = l[18];
  let d = O, L;
  if (l[19] !== F || l[20] !== d) L = { refuse: F, refuseCharacter: d }, l[19] = F, l[20] = d, l[21] = L;
  else L = l[21];
  return L;
}
function Nn(n) {
  return n.superKey && !n.ctrl && !n.meta && n.shortcutKey.length === 1;
}
function $n(n, t, i, f) {
  let p = n.rawEndedWithFocusTail ? n.text.replace(/\[[IO]$/, "") : n.text;
  if (p === "") return;
  n.preventDefault();
  let u = i.current + p;
  if (t.onChange(u) === false) return;
  f(() => u);
}
function wve({ options: n, onChange: t, onFocus: i, onCancel: f, isDisabled: p = false, disableSelection: u = false, defaultValue: l, refuseInput: s, refuseStrayText: T = false, holdsFirstRow: c = false, headings: h, drawLabels: v = false, hidePromptWhileDisabled: W = false, stopsAtLastRow: b = false, onOpenEditor: m }) {
  let [F, O, d] = Ne(), [L, D] = (0, import_chunk_bs4h6795.y)(null), z = (0, import_chunk_bs4h6795.I)(null), { refusedWithin: J, noteRefused: S } = po(), j = (0, import_chunk_qbrmmydq.B6n)(), [V, P, x] = te(null), E = (0, import_chunk_bs4h6795.I)(0), ae = n.map((a) => String(a.value)).join("\0"), [X, Re] = (0, import_chunk_bs4h6795.y)(ae);
  if (X !== ae) Re(ae), x(() => null), d(() => "");
  let [Y, ue, C] = te(null);
  if (X !== ae && Y !== null) C(() => null), d(() => "");
  let M = Y && n[Y.index - 1]?.type === "input" ? n[Y.index - 1] : null, Me = (0, import_chunk_bs4h6795.I)(null);
  (0, import_chunk_dwa7jc2e.Dv)(Me, !p), (0, import_chunk_fc9svvyv.Cd)("select", !!f && !p);
  let se = (a) => {
    if (u) return;
    if (M) {
      if (a === "" && !M.screenReaderEmptySubmit) {
        D("Enter some text, or Escape for the list.");
        return;
      }
      if (t?.(M.value) === false) return;
      d(() => ""), C(() => null);
      return;
    }
    let A = Number.parseInt(a, 10);
    if (!Number.isFinite(A) || A < 1 || A > n.length) {
      D(n.length === 0 ? `"${a}" isn't an option. Nothing to select.` : `"${a}" isn't an option. Enter a number between 1 and ${n.length}.`), d(() => "");
      return;
    }
    let w = n[A - 1];
    if (w.disabled) {
      D(`Option ${A} is disabled.`), d(() => "");
      return;
    }
    if (w.type === "input") {
      C(() => ({ index: A })), x(() => null);
      let K = w.initialValue ?? "";
      d(() => K), w.onChange(K), i?.(w.value);
      return;
    }
    if (t?.(w.value) === false) return;
    d(() => ""), x(() => null);
  };
  (0, import_chunk_bs4h6795.H)(() => () => {
    ue.current = null;
  }, [ue]), (0, import_chunk_6fvsq616.In)("chat:externalEditor", () => {
    let a = ue.current;
    if (a === null || !M || !m) return;
    m(O.current, (A) => {
      if (ue.current !== a) return;
      if (M.onChange(A) === false) return;
      d(() => A);
    });
  }, { context: "Chat", isActive: !p && !u && !!m && M !== null });
  let sn = y_e(), Oe = (a) => {
    if (p) return;
    if (a.key === "escape" && a.name === "escape") {
      if (a.preventDefault(), M) {
        if (M.onChange(M.initialValue ?? "") === false) return;
        C(() => null), d(() => "");
        let K = n.find((Z) => Z.type !== "input") ?? n[0];
        if (K) i?.(K.value);
        return;
      }
      f?.();
      return;
    }
    if (u) {
      if (T && ((0, import_chunk_8bkqeb5d.kP)(a) || Nn(a))) fe();
      return;
    }
    if (a.key === "return" && a.name === "return") {
      if (a.preventDefault(), Se() && z.current !== "digit") return;
      if (z.current !== null) {
        z.current = null, d(() => ""), x(() => null), D(`Nothing was chosen. Enter a number between 1 and ${n.length}.`), S();
        return;
      }
      if (M || O.current.length > 0) {
        se(O.current);
        return;
      }
      if (j && P.current !== null) se(String(P.current + 1));
      return;
    }
    if ((a.key === "backspace" || a.key === "delete") && a.name === a.key) {
      a.preventDefault();
      let K = O.current, Z = (0, import_chunk_7cfjrnwy.ee)(K, K.length - 1);
      if (M && M.onChange(Z) === false) return;
      d(() => Z);
      return;
    }
    if (j && !M && ue.current === null && (a.name === "up" || a.name === "down")) {
      if (a.preventDefault(), Se()) return;
      z.current = null, D(null), d(() => "");
      let K = n.length;
      if (K === 0) return;
      let Z = P.current, ce = a.name === "down" ? 1 : -1, ne = Z === null ? 0 : E.current, Ke = ne * ce < 0 || (ce === 1 ? b && Z === K - 1 : c && (Z ?? 0) === 0);
      E.current = Ke ? _e(ne, ce, K) : 0;
      let Be = Ke ? Z ?? 0 : Z === null ? ce === 1 ? 0 : K - 1 : (Z + ce + K) % K;
      x(() => Be);
      let Ee = n[Be];
      if (Ee) i?.(Ee.value);
      return;
    }
    if (M) {
      if (a.preventDefault(), (0, import_chunk_8bkqeb5d.kP)(a)) {
        let K = O.current + a.key;
        if (M.onChange(K) === false) return;
        d(() => K);
      }
      return;
    }
    let A = (0, import_chunk_7cfjrnwy.SJ)(sn(a)), w = T && (a.ctrl || a.meta || a.superKey);
    if (/^[0-9]$/.test(A) && !w) {
      if (a.preventDefault(), z.current !== null) return;
      if (Se()) {
        if (T) z.current = J() ? "text" : "digit", D(null);
        return;
      }
      D(null), d((K) => K + A), x(() => null);
    } else if (T && ((0, import_chunk_8bkqeb5d.kP)(a) || Nn(a))) a.preventDefault(), fe();
  };
  function fe() {
    z.current = "text", D(null), d(() => ""), x(() => null), S();
  }
  function Se() {
    if (s?.()) return true;
    if (!J()) return false;
    return S(), true;
  }
  function Kn(a) {
    if (!u && M) $n(a, M, O, d);
    else if (T) fe();
  }
  let $e = M ? `Enter text for option ${Y?.index} (${(0, import_chunk_qqkcytvr.cW)(M.label)}), or Escape for the list: ${(0, import_chunk_mh32mevx.xl)((0, import_chunk_mh32mevx.of)(F))}` : n.length === 0 ? `Nothing to select${f ? ". Escape to cancel" : ""}: ${F}` : `Select with numbers [1-${n.length}]${j ? " or up / down arrow keys" : ""}. Then ${Pn(["Enter to submit", ...f ? ["Escape to cancel"] : []])}: ${F}`, U = (0, import_chunk_8bkqeb5d.EP)({ line: 0, column: (0, import_chunk_mgh1y10w.oe)($e), active: !p && !u && V === null, visible: true });
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: Me, flexDirection: "column", ...p ? {} : { tabIndex: 0, onKeyDown: Oe, onPaste: Kn }, children: [n.map((a, A) => (0, import_chunk_a46xeenj.o)(import_chunk_bs4h6795.nf, { children: [h?.get(A), (0, import_chunk_a46xeenj.e)(un, { index: A + 1, option: a, selected: l !== void 0 && a.value === l, focused: V === A && !p && !u, drawLabel: v })] }, String(a.value))), h?.get(n.length), L && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: L }), !u && !(p && W) && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: U, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: $e }) })] });
}
function gBo(n) {
  let v = (0, import_chunk_sng02qpc.k)(108), { options: t, defaultValue: i, onChange: f, onSubmit: p, onFocus: u, onCancel: l, isDisabled: s, submitButtonText: T, refuseInput: c, onOpenEditor: h } = n, W;
  if (v[0] !== i) W = i === void 0 ? [] : i, v[0] = i, v[1] = W;
  else W = v[1];
  let b = W, m = s === void 0 ? false : s, [F, O, d] = Ne(), [L, D] = (0, import_chunk_bs4h6795.y)(null), z;
  if (v[2] === import_chunk_w1d7ygsk.R) z = (0, import_chunk_qbrmmydq.B6n)(), v[2] = z;
  else z = v[2];
  let J = z, [S, j, V] = te(null), [P, x, E] = te(null), ae;
  if (v[3] !== t) ae = t.map(Lo).join("\0"), v[3] = t, v[4] = ae;
  else ae = v[4];
  let X = ae, [Re, Y] = (0, import_chunk_bs4h6795.y)(X);
  if (Re !== X) Y(X), V(jo), E(_o), d(Uo);
  let ue;
  if (v[5] !== b || v[6] !== t) ue = () => new Set(t.flatMap((C, M) => !C.disabled && b.includes(C.value) ? [M] : [])), v[5] = b, v[6] = t, v[7] = ue;
  else ue = v[7];
  let Me = ue, [se, sn] = (0, import_chunk_bs4h6795.y)(null), Oe = (0, import_chunk_bs4h6795.I)(false), fe = (0, import_chunk_bs4h6795.I)(false), Se;
  if (v[8] !== p || v[9] !== se) Se = () => {
    if (se !== null) {
      let Kn = [...se];
      sn(null), Oe.current = false, p?.(Kn);
    }
  }, v[8] = p, v[9] = se, v[10] = Se;
  else Se = v[10];
  let $e;
  if (v[11] !== se) $e = [se], v[11] = se, v[12] = $e;
  else $e = v[12];
  (0, import_chunk_bs4h6795.H)(Se, $e);
  let [U, a, A] = te(null);
  if (Re !== X && U !== null) A(Go), d(Ho);
  let w = U && t[U.index - 1]?.type === "input" ? t[U.index - 1] : null, K = (0, import_chunk_bs4h6795.I)(null);
  (0, import_chunk_dwa7jc2e.Dv)(K, !m), (0, import_chunk_fc9svvyv.Cd)("multi-select", !!l && !m);
  let Z;
  if (v[13] !== f || v[14] !== d || v[15] !== V || v[16] !== A || v[17] !== E) Z = (ce) => {
    if (Oe.current = true, f?.([...ce]) === false) {
      Oe.current = false;
      return;
    }
    sn(ce), d(qo), A(Jo), V(Qo), E(Xo);
  }, v[13] = f, v[14] = d, v[15] = V, v[16] = A, v[17] = E, v[18] = Z;
  else Z = v[18];
  let ne = Z, Ke;
  if (v[19] !== b || v[20] !== ne || v[21] !== w || v[22] !== U || v[23] !== u || v[24] !== t || v[25] !== d || v[26] !== V || v[27] !== A || v[28] !== E) Ke = (Be) => {
    if (w && U) {
      if (Be === "") {
        D("Enter some text, or Escape for the list.");
        return;
      }
      ne([...U.stashed, w.value]);
      return;
    }
    let Ee = Be.trim();
    if (Ee === "") {
      ne(b);
      return;
    }
    let Vt = Ee.split(/[\s,]+/).filter(Boolean);
    if (Vt.length === 0) {
      ne(b);
      return;
    }
    let Dt = /* @__PURE__ */ new Set();
    let Bn = [];
    let ve = null;
    for (const ln of Vt) {
      if (!/^\d+$/.test(ln)) {
        D(`"${ln}" isn't an option. Enter numbers between 1 and ${t.length}, comma- or space-separated.`), d(Yo);
        return;
      }
      let be = Number.parseInt(ln, 10);
      if (Dt.has(be)) {
        continue;
      }
      if (Dt.add(be), be < 1 || be > t.length) {
        D(`"${ln}" isn't an option. Enter numbers between 1 and ${t.length}, comma- or space-separated.`), d(Zo);
        return;
      }
      let an = t[be - 1];
      if (an.disabled) {
        D(`Option ${be} is disabled.`), d(er);
        return;
      }
      if (an.type === "input") {
        if (ve) {
          D("Only one free-text option can be included per selection."), d(nr);
          return;
        }
        ve = { index: be, opt: an };
        continue;
      }
      Bn.push(an.value);
    }
    if (ve?.opt) {
      A(() => ({ index: ve.index, stashed: Bn, raw: Ee })), V(tr), E(or);
      let At = ve.opt.initialValue ?? "";
      d(() => At), ve.opt.onChange(At), u?.(ve.opt.value);
      return;
    }
    ne(Bn);
  }, v[19] = b, v[20] = ne, v[21] = w, v[22] = U, v[23] = u, v[24] = t, v[25] = d, v[26] = V, v[27] = A, v[28] = E, v[29] = Ke;
  else Ke = v[29];
  let fn = Ke, Ct, kt;
  if (v[30] !== a) Ct = () => () => {
    a.current = null;
  }, kt = [a], v[30] = a, v[31] = Ct, v[32] = kt;
  else Ct = v[31], kt = v[32];
  (0, import_chunk_bs4h6795.H)(Ct, kt);
  let Pt;
  if (v[33] !== O || v[34] !== w || v[35] !== a || v[36] !== h || v[37] !== d) Pt = () => {
    let Nt = a.current;
    if (Nt === null || !w || !h) {
      return;
    }
    h(O.current, ($t) => {
      if (a.current !== Nt) {
        return;
      }
      if (w.onChange($t) === false) {
        return;
      }
      d(() => $t);
    });
  }, v[33] = O, v[34] = w, v[35] = a, v[36] = h, v[37] = d, v[38] = Pt;
  else Pt = v[38];
  const Wn = !m && !!h && w !== null;
  let Kt;
  if (v[39] !== Wn) Kt = { context: "Chat", isActive: Wn }, v[39] = Wn, v[40] = Kt;
  else Kt = v[40];
  (0, import_chunk_6fvsq616.In)("chat:externalEditor", Pt, Kt);
  let cn = y_e(), Bt;
  if (v[41] !== O || v[42] !== Me || v[43] !== ne || v[44] !== j || v[45] !== w || v[46] !== U || v[47] !== a || v[48] !== m || v[49] !== cn || v[50] !== l || v[51] !== u || v[52] !== t || v[53] !== c || v[54] !== d || v[55] !== V || v[56] !== A || v[57] !== E || v[58] !== fn || v[59] !== x) Bt = (B) => {
    if (m) {
      return;
    }
    if (B.key === "escape" && B.name === "escape") {
      if (B.preventDefault(), U) {
        let { raw: pr } = U;
        A(rr), d(() => pr);
        let Wt = t.find(ir) ?? t[0];
        if (Wt) u?.(Wt.value);
        return;
      }
      l?.();
      return;
    }
    if (B.key === "return" && B.name === "return") {
      if (B.preventDefault(), fe.current) {
        c?.(), fe.current = false, d(ur), D("Part of that entry arrived before the list was ready \u2014 enter your selection again.");
        return;
      }
      if (c?.()) {
        return;
      }
      if (Oe.current) {
        return;
      }
      if (J && !w && O.current.length === 0 && x.current !== null) {
        let zt = [...x.current].sort(sr);
        if (zt.length === 0) ne([]);
        else fn(zt.map(lr).join(" "));
        return;
      }
      fn(O.current);
      return;
    }
    if ((B.key === "backspace" || B.key === "delete") && B.name === B.key) {
      B.preventDefault();
      let zn = O.current;
      let Ln = (0, import_chunk_7cfjrnwy.ee)(zn, zn.length - 1);
      if (w && w.onChange(Ln) === false) {
        return;
      }
      if (d(() => Ln), !w && zn !== Ln) E(ar);
      return;
    }
    if (J && !w && a.current === null && (B.name === "up" || B.name === "down")) {
      if (B.preventDefault(), c?.()) {
        return;
      }
      D(null), d(fr), fe.current = false;
      let dn = t.length;
      if (dn === 0) {
        return;
      }
      let Lt = j.current;
      let jt = Lt === null ? B.name === "down" ? 0 : dn - 1 : (Lt + (B.name === "down" ? 1 : -1) + dn) % dn;
      V(() => jt);
      let _t = t[jt];
      if (_t) u?.(_t.value);
      return;
    }
    if (J && !w && a.current === null && j.current !== null && (0, import_chunk_7cfjrnwy.jEe)(cn(B)) === " ") {
      if (B.preventDefault(), c?.()) {
        return;
      }
      let We = j.current;
      let Ut = t[We];
      if (!Ut) {
        return;
      }
      if (Ut.disabled) {
        D(`Option ${We + 1} is disabled.`);
        return;
      }
      D(null), E((mr) => {
        let pn = new Set(mr ?? Me());
        if (pn.has(We)) pn.delete(We);
        else pn.add(We);
        return pn;
      });
      return;
    }
    if (w) {
      if (B.preventDefault(), (0, import_chunk_8bkqeb5d.kP)(B)) {
        let Gt = O.current + B.key;
        if (w.onChange(Gt) === false) {
          return;
        }
        d(() => Gt);
      }
      return;
    }
    let Ht = (0, import_chunk_7cfjrnwy.jEe)((0, import_chunk_7cfjrnwy.SJ)(cn(B))).replace("\uFF0C", ",").replace("\u3001", ",");
    if (/^[0-9, ]$/.test(Ht)) {
      if (B.preventDefault(), fe.current) {
        c?.();
        return;
      }
      if (c?.()) {
        fe.current = true;
        return;
      }
      D(null), d((vr) => vr + Ht), V(cr), E(dr);
    }
  }, v[41] = O, v[42] = Me, v[43] = ne, v[44] = j, v[45] = w, v[46] = U, v[47] = a, v[48] = m, v[49] = cn, v[50] = l, v[51] = u, v[52] = t, v[53] = c, v[54] = d, v[55] = V, v[56] = A, v[57] = E, v[58] = fn, v[59] = x, v[60] = Bt;
  else Bt = v[60];
  let jn = Bt, qt;
  if (v[61] !== O || v[62] !== w || v[63] !== d) qt = function mn2(br) {
    if (w) $n(br, w, O, d);
  }, v[61] = O, v[62] = w, v[63] = d, v[64] = qt;
  else qt = v[64];
  let mn = qt, Jt;
  if (v[65] !== F || v[66] !== b || v[67] !== w || v[68] !== U?.index || v[69] !== l || v[70] !== t.length || v[71] !== T || v[72] !== P) Jt = w ? `Enter text for option ${U?.index} (${(0, import_chunk_qqkcytvr.cW)(w.label)}), or Escape for the list: ${(0, import_chunk_mh32mevx.xl)((0, import_chunk_mh32mevx.of)(F))}` : `Select with numbers [1-${t.length}] (comma- or space-separated for several)${J ? " or up / down arrow keys" : ""}. Then ${Pn([...J ? ["Space to toggle"] : [], `Enter to ${T ?? "submit"}`, ...b.length > 0 && P === null ? ["bare Enter for defaults"] : [], ...l ? ["Escape to cancel"] : []])}: ${F}`, v[65] = F, v[66] = b, v[67] = w, v[68] = U?.index, v[69] = l, v[70] = t.length, v[71] = T, v[72] = P, v[73] = Jt;
  else Jt = v[73];
  let Fe = Jt, vn;
  if (v[74] !== Fe) vn = (0, import_chunk_mgh1y10w.oe)(Fe), v[74] = Fe, v[75] = vn;
  else vn = v[75];
  const _n = !m && S === null;
  let Qt;
  if (v[76] !== vn || v[77] !== _n) Qt = { line: 0, column: vn, active: _n, visible: true }, v[76] = vn, v[77] = _n, v[78] = Qt;
  else Qt = v[78];
  let Un = (0, import_chunk_8bkqeb5d.EP)(Qt), Xt;
  if (v[79] !== b) Xt = new Set(b), v[79] = b, v[80] = Xt;
  else Xt = v[80];
  let ze = Xt, bn;
  if (v[81] !== jn || v[82] !== mn || v[83] !== m) bn = m ? {} : { tabIndex: 0, onKeyDown: jn, onPaste: mn }, v[81] = jn, v[82] = mn, v[83] = m, v[84] = bn;
  else bn = v[84];
  let xn;
  if (v[85] !== ze || v[86] !== S || v[87] !== m || v[88] !== t || v[89] !== P) {
    let xe2;
    if (v[91] !== ze || v[92] !== S || v[93] !== m || v[94] !== P) xe2 = (Gn, Hn) => (0, import_chunk_a46xeenj.e)(un, { index: Hn + 1, option: Gn, selected: P ? P.has(Hn) : ze.has(Gn.value), focused: S === Hn && !m }, String(Gn.value)), v[91] = ze, v[92] = S, v[93] = m, v[94] = P, v[95] = xe2;
    else xe2 = v[95];
    xn = t.map(xe2);
    v[85] = ze, v[86] = S, v[87] = m, v[88] = t, v[89] = P, v[90] = xn;
  } else xn = v[90];
  let xe;
  if (v[96] !== L) xe = L && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: L }), v[96] = L, v[97] = xe;
  else xe = v[97];
  let hn;
  if (v[98] !== Fe) hn = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: Fe }), v[98] = Fe, v[99] = hn;
  else hn = v[99];
  let gn;
  if (v[100] !== Un || v[101] !== hn) gn = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: Un, children: hn }), v[100] = Un, v[101] = hn, v[102] = gn;
  else gn = v[102];
  let Yt;
  if (v[103] !== bn || v[104] !== xn || v[105] !== xe || v[106] !== gn) Yt = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: K, flexDirection: "column", ...bn, children: [xn, xe, gn] }), v[103] = bn, v[104] = xn, v[105] = xe, v[106] = gn, v[107] = Yt;
  else Yt = v[107];
  return Yt;
}
function un(n) {
  let s = (0, import_chunk_sng02qpc.k)(28), { index: t, option: i, selected: f, focused: p, drawLabel: u } = n, l = u === void 0 ? false : u, T;
  if (s[0] !== p) T = { line: 0, column: 0, active: p, visible: true }, s[0] = p, s[1] = T;
  else T = s[1];
  let c = (0, import_chunk_8bkqeb5d.EP)(T), h;
  if (s[2] !== i.label) h = (0, import_chunk_qqkcytvr.cW)(i.label), s[2] = i.label, s[3] = h;
  else h = s[3];
  let v = h;
  const W = i.description ?? "";
  let b;
  if (s[4] !== W) b = (0, import_chunk_wbk1hf21.Tl)(W), s[4] = W, s[5] = b;
  else b = s[5];
  let m = b, F = m ? ` \u2014 ${m}` : "";
  const O = `${v}${F}`;
  let d;
  if (s[6] !== O) d = Xn(O), s[6] = O, s[7] = d;
  else d = s[7];
  let L = d;
  const D = i.disabled ? "(disabled)" : null, z = f ? "(selected)" : null;
  let J;
  if (s[8] !== D || s[9] !== z) J = [D, z].filter(Boolean), s[8] = D, s[9] = z, s[10] = J;
  else J = s[10];
  let S = J.join(" ");
  if (l) {
    const j2 = S ? ` ${S}` : "";
    let V2;
    if (s[11] !== t || s[12] !== j2) V2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [t, ".", j2] }), s[11] = t, s[12] = j2, s[13] = V2;
    else V2 = s[13];
    let P2;
    if (s[14] !== m) P2 = m && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["\u2014 ", m] }), s[14] = m, s[15] = P2;
    else P2 = s[15];
    let x;
    if (s[16] !== c || s[17] !== i.label || s[18] !== V2 || s[19] !== P2) x = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: c, children: [V2, i.label, P2] }), s[16] = c, s[17] = i.label, s[18] = V2, s[19] = P2, s[20] = x;
    else x = s[20];
    return x;
  }
  const j = S ? `${S} ` : "";
  let V;
  if (s[21] !== L || s[22] !== t || s[23] !== j) V = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [t, ". ", j, L] }), s[21] = L, s[22] = t, s[23] = j, s[24] = V;
  else V = s[24];
  let P;
  if (s[25] !== c || s[26] !== V) P = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: c, children: V }), s[25] = c, s[26] = V, s[27] = P;
  else P = s[27];
  return P;
}
function F2s({ confirmLabel: n, cancelLabel: t, onConfirm: i, onCancel: f, refuseInput: p, openedAt: u, windowMs: l }) {
  let [s, T, c] = Ne(), [h, v] = (0, import_chunk_bs4h6795.y)(null), W = (0, import_chunk_bs4h6795.I)(null);
  (0, import_chunk_dwa7jc2e.Dv)(W, true), (0, import_chunk_fc9svvyv.Cd)("select", true);
  let { refuse: b, refuseCharacter: m } = Ft(u, l, () => D()?.endedAt);
  function F() {
    return (p?.() ?? false) || b();
  }
  function O() {
    return (p?.() ?? false) || m();
  }
  function d() {
    let x = D();
    return x !== void 0 && x.endedAt === void 0;
  }
  function L() {
    v(null), z(void 0);
  }
  function D() {
    let x = W.current?.parentNode?.confirmEntry;
    return x?.openedAt === u ? x : void 0;
  }
  function z(x) {
    let E = W.current?.parentNode;
    if (E !== void 0) E.confirmEntry = { openedAt: u, endedAt: x };
  }
  let J = (x) => {
    let E = x.trim().toLowerCase();
    if (E === "y" || E === "yes") return i();
    if (E === "n" || E === "no") return f();
    v("Answer y or n."), c(() => "");
  }, S = (x) => {
    if (x.key === "escape" && x.name === "escape") {
      if (x.preventDefault(), F()) {
        L();
        return;
      }
      return f();
    }
    if (x.key === "return" && x.name === "return") {
      if (x.preventDefault(), d() || F()) return z(Date.now()), J("");
      return J(T.current);
    }
    if ((x.key === "backspace" || x.key === "delete") && x.name === x.key) {
      x.preventDefault(), c((E) => E.slice(0, -1));
      return;
    }
    if (Nn(x)) {
      x.preventDefault(), L();
      return;
    }
    if (x.key.length === 1 && !x.ctrl) {
      if (x.preventDefault(), d()) {
        O();
        return;
      }
      if (O()) {
        L();
        return;
      }
      v(null), c((E) => E + x.key);
      return;
    }
    if (x.key.length > 1 && !x.ctrl && !x.meta && O()) L();
  };
  function j() {
    if (O()) L();
  }
  let V = `Enter y/n: ${s}`, P = (0, import_chunk_8bkqeb5d.EP)({ line: 0, column: (0, import_chunk_mgh1y10w.oe)(V), active: true, visible: true });
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: W, flexDirection: "column", tabIndex: 0, onKeyDown: S, onPaste: j, children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["y. ", (0, import_chunk_qqkcytvr.cW)(n)] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["n. ", (0, import_chunk_qqkcytvr.cW)(t)] }), h && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: h }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: P, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: V }) })] });
}
