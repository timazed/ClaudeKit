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
var chunk_2t5dst6n_exports = {};
__export(chunk_2t5dst6n_exports, {
  $7n: () => $7n,
  AGs: () => AGs,
  CGs: () => CGs,
  DIe: () => DIe,
  HF: () => HF,
  Ha: () => Ha,
  K3: () => K3,
  KE: () => KE,
  QK: () => QK,
  Qya: () => Qya,
  TGs: () => TGs,
  TO: () => TO,
  U7n: () => U7n,
  U9t: () => U9t,
  Wmt: () => Wmt,
  _s: () => _s,
  aY: () => aY,
  cjr: () => cjr,
  djr: () => djr,
  fE: () => fE,
  g_: () => g_,
  hx: () => hx,
  n$e: () => n$e,
  oR: () => oR,
  pA: () => pA,
  vve: () => vve
});
module.exports = __toCommonJS(chunk_2t5dst6n_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_02gf2emt = require("/$bunfs/root/chunk-02gf2emt.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var KE = 150, _s = 250, vve = 700, K3 = 1e3, HF = 600;
function Ha(e, t, n = KE) {
  return QK(e, t, n) || TGs(e, Math.min(n, KE));
}
function TGs(e, t = KE) {
  let n = e.resumedAt?.();
  return n !== void 0 && QK(e, n, t);
}
function QK(e, t, n) {
  let r = e() - t;
  if (r >= 0) return r < n;
  return t <= Date.now();
}
function djr(e) {
  let t = (0, import_chunk_8bkqeb5d.si)(), [n, r] = (0, import_chunk_bs4h6795.y)(() => ({ key: e, at: Date.now() }));
  if (n.key !== e) r({ key: e, at: Date.now() });
  let l = hx(n.at);
  return function() {
    return Ha(t, l(n.at));
  };
}
function hx(e) {
  let [t] = (0, import_chunk_bs4h6795.y)(() => e !== 0 && Date.now() - e >= KE ? e : 0), n = e === t ? 0 : e, r = (0, import_chunk_bs4h6795.I)({ stamp: 0, at: 0, painted: false }), l = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.ukn) ?? R;
  return (0, import_chunk_bs4h6795.MSe)(() => {
    if (n === 0 || r.current.stamp === n && r.current.painted) return;
    let d = r.current.stamp === n ? r.current.at : n;
    r.current = { stamp: n, at: d, painted: false };
    let a = l(() => {
      r.current = { stamp: n, at: Math.max(r.current.at, Date.now()), painted: true }, a();
    });
    return a;
  }, [n, l]), (0, import_chunk_bs4h6795.It)(() => {
    if (n !== 0 && r.current.stamp === n && !r.current.painted) r.current = { stamp: n, at: Math.max(n, Date.now()), painted: false };
  }, [n]), (0, import_chunk_bs4h6795.ye)((d) => d === r.current.stamp ? r.current.at : d, []);
}
function R() {
  return () => {
  };
}
function fE(e) {
  return e.open.findLast((t) => !t.userInvoked) ?? null;
}
function n$e(e) {
  return e.open.findLast((t) => t.userInvoked === true) ?? null;
}
function CGs(e, t) {
  return e.open.some((n) => n.kind === t);
}
function U9t(e) {
  return e.open.length > 0;
}
function AGs(e = () => Date.now()) {
  let t = (0, import_chunk_se72nykz.ps)({ open: [] }), n = [fE(t.getState()), n$e(t.getState())];
  t.subscribe(() => {
    let o = [fE(t.getState()), n$e(t.getState())];
    if (o.some((s, u) => s !== null && s !== n[u])) (0, import_chunk_qbrmmydq.Y6t)();
    n = o;
  });
  let r = (0, import_chunk_69qhefwa.Be)(), l = new import_chunk_02gf2emt.U5s(), d = Number.NEGATIVE_INFINITY, a, c = /* @__PURE__ */ new Set(), f = (o, s) => `${o}:${s}`, i = (o) => {
    for (let s of c) if (s.startsWith(`${o}:`)) c.delete(s);
  }, g = (o) => {
    let { removed: s, closedBlockingTopBare: u } = h(t, o);
    if (!s) return false;
    if (u) d = Date.now();
    return i(o), true;
  }, D = { getState: t.getState, subscribe: t.subscribe, onClosed: r.subscribe, askTally: l, open(o) {
    if (o.countedAsk !== void 0) l.join(o.countedAsk);
    t.setState((s) => {
      let u = o.place === "queue" ? A(s.open, o) : void 0;
      if (u !== void 0) return { open: [...s.open.slice(0, u), o, ...s.open.slice(u)] };
      let p = fE(s), b = p?.holdsTop === true && k(p, o) && o.succeeds !== true;
      if ((o.place === "under" || b) && s.open.some((m) => m.userInvoked !== true)) return { open: [o, ...s.open] };
      let S = s.open.some((m) => k(m, o)) || o.userInvoked !== true && s.open.some((m) => m.userInvoked === true), v = o.userInvoked !== true && Ha(e, d), x = S || v ? { ...o, shownAt: Date.now() } : o;
      return { open: [...s.open, x] };
    });
  }, update(o, s) {
    t.setState((u) => {
      let p = u.open.findIndex((S) => S.id === o);
      if (p === -1) return u;
      let b = u.open.slice();
      return b[p] = { ...u.open[p], payload: s, shownAt: Date.now() }, { open: b };
    });
  }, answer(o, s) {
    if (t.getState().open.find((u) => u.id === o)?.countedAsk?.settle(), !g(o)) return;
    r.emit({ id: o, type: "answered", result: s });
  }, dismiss(o) {
    if (!g(o)) return;
    r.emit({ id: o, type: "dismissed" });
  }, firstReveal(o, s) {
    if (!t.getState().open.some((p) => p.id === o)) return false;
    let u = f(o, s);
    if (c.has(u)) return false;
    return c.add(u), true;
  }, hasRevealed(o, s) {
    return c.has(f(o, s));
  }, noteEscapeRecovered() {
    a = e();
  }, isBehindRecoveredEscape() {
    return a === e();
  }, dismissKind(o) {
    for (let s of t.getState().open) if (s.kind === o) D.dismiss(s.id);
  } };
  return D;
}
function h(e, t) {
  let n = false, r = false;
  return e.setState((l) => {
    let d = l.open.find((g) => g.id === t);
    if (!d) return l;
    n = true;
    let a = l.open.filter((g) => g !== d), c = l.open.filter((g) => k(g, d)), f = c.at(-1) === d, i = c.at(-2);
    if (r = f && !i && d.userInvoked !== true, !f || !i) return { open: a };
    return { open: a.map((g) => g === i ? { ...i, shownAt: Date.now(), revealSeq: (i.revealSeq ?? 0) + 1 } : g) };
  }), { removed: n, closedBlockingTopBare: r };
}
function A(e, t) {
  let n = t.askOrder ?? Number.POSITIVE_INFINITY, r = e.findIndex((a) => a.place !== void 0 && a.askOrder !== void 0 && a.askOrder <= n);
  if (r === -1) {
    let a = e.findLastIndex((i) => i.place === "queue" && i.askOrder !== void 0), c = e.findLastIndex((i) => i.place !== void 0 && i.askOrder !== void 0), f = e.slice(c + 1).some((i) => i.askOrder === void 0 && i.holdsTop !== true && i.userInvoked !== true);
    r = a !== -1 && !f ? c + 1 : e.findIndex((i) => i.place === void 0 && i.askOrder !== void 0);
  }
  if (r === -1) return;
  let l = e.findIndex((a) => a.place === void 0 && a.askOrder !== void 0);
  if (l !== -1 && l < r) r = l;
  return e.slice(r).some((a) => a.userInvoked !== true) ? r : void 0;
}
function k(e, t) {
  return e.userInvoked === true === (t.userInvoked === true);
}
var TO = (0, import_chunk_bs4h6795.an)(null);
function g_() {
  let e = (0, import_chunk_bs4h6795.be)(TO);
  if (!e) throw ReferenceError("useDialogStore cannot be called outside of a DialogStoreContext provider (mounted by <AppStateProvider />)");
  return e;
}
function DIe() {
  let e = g_(), t = () => U9t(e.getState());
  return (0, import_chunk_bs4h6795.Ot)(e.subscribe, t, t);
}
function aY() {
  let e = g_(), t = () => fE(e.getState()) !== null;
  return (0, import_chunk_bs4h6795.Ot)(e.subscribe, t, t);
}
function pA(e) {
  let t = g_(), n = () => CGs(t.getState(), e);
  return (0, import_chunk_bs4h6795.Ot)(t.subscribe, n, n);
}
function $7n() {
  let e = g_(), t = () => n$e(e.getState());
  return (0, import_chunk_bs4h6795.Ot)(e.subscribe, t, t);
}
function Qya() {
  let e = g_(), t = () => fE(e.getState());
  return (0, import_chunk_bs4h6795.Ot)(e.subscribe, t, t);
}
function U7n(e) {
  let t = g_(), n = () => Wmt(fE(t.getState()), e);
  return (0, import_chunk_bs4h6795.Ot)(t.subscribe, n, n);
}
function Wmt(e, t) {
  return e?.hideWhile?.includes(t) === true;
}
function cjr() {
  let e = g_(), t = () => fE(e.getState())?.kind;
  return (0, import_chunk_bs4h6795.Ot)(e.subscribe, t, t);
}
function oR(e) {
  let t = g_(), n = () => e(t.getState());
  return (0, import_chunk_bs4h6795.Ot)(t.subscribe, n, n);
}
