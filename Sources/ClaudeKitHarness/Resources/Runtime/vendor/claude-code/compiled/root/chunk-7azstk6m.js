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
var chunk_7azstk6m_exports = {};
__export(chunk_7azstk6m_exports, {
  A7n: () => A7n,
  C7n: () => C7n,
  IBo: () => IBo,
  IIt: () => IIt,
  JWr: () => JWr,
  Nv: () => Nv,
  OBo: () => OBo,
  OIt: () => OIt,
  V2s: () => V2s,
  Ywn: () => Ywn,
  b_e: () => b_e
});
module.exports = __toCommonJS(chunk_7azstk6m_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_rxcv97gm = require("/$bunfs/root/chunk-rxcv97gm.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_v9dxspne = require("/$bunfs/root/chunk-v9dxspne.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_f2cpz56c = require("/$bunfs/root/chunk-f2cpz56c.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_q4pszsad = require("/$bunfs/root/chunk-q4pszsad.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_ykad4ek3 = require("/$bunfs/root/chunk-ykad4ek3.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_6c9p0fd9 = require("/$bunfs/root/chunk-6c9p0fd9.js");
var import_chunk_xr7b2tpa = require("/$bunfs/root/chunk-xr7b2tpa.js");
var import_chunk_k7fvzexf = require("/$bunfs/root/chunk-k7fvzexf.js");
var import_chunk_9rvw567f = require("/$bunfs/root/chunk-9rvw567f.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_9wz0b70s = require("/$bunfs/root/chunk-9wz0b70s.js");
var import_chunk_f0sbddj1 = require("/$bunfs/root/chunk-f0sbddj1.js");
var import_chunk_7ch4vsmn = require("/$bunfs/root/chunk-7ch4vsmn.js");
var import_chunk_g6s9cndm = require("/$bunfs/root/chunk-g6s9cndm.js");
var import_chunk_tjja7dsj = require("/$bunfs/root/chunk-tjja7dsj.js");
var import_chunk_7tdejx4j = require("/$bunfs/root/chunk-7tdejx4j.js");
var import_chunk_abcfgj28 = require("/$bunfs/root/chunk-abcfgj28.js");
var import_chunk_6vfwhdja = require("/$bunfs/root/chunk-6vfwhdja.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_kdpctb21 = require("/$bunfs/root/chunk-kdpctb21.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var oe = (0, import_chunk_bs4h6795.an)(void 0);
function ie(n) {
  let s = (0, import_chunk_sng02qpc.k)(3), { getFpsMetrics: r, children: o } = n, l;
  if (s[0] !== o || s[1] !== r) l = (0, import_chunk_a46xeenj.e)(oe.Provider, { value: r, children: o }), s[0] = o, s[1] = r, s[2] = l;
  else l = s[2];
  return l;
}
function OBo() {
  return (0, import_chunk_bs4h6795.be)(oe);
}
(0, import_chunk_bs4h6795.G)();
function He(n, r) {
  let o = r / 100 * (n.length - 1), s = Math.floor(o), l = Math.ceil(o);
  if (s === l) return n[s];
  return n[s] + (n[l] - n[s]) * (o - s);
}
var We = 1024;
function IBo() {
  let n = /* @__PURE__ */ new Map();
  return { observe(r, o) {
    let s = n.get(r);
    if (!s) s = { reservoir: [], count: 0, sum: 0, min: o, max: o }, n.set(r, s);
    if (s.count++, s.sum += o, o < s.min) s.min = o;
    if (o > s.max) s.max = o;
    if (s.reservoir.length < We) s.reservoir.push(o);
    else {
      let l = Math.floor(Math.random() * s.count);
      if (l < We) s.reservoir[l] = o;
    }
  }, getAll() {
    let r = {};
    for (let [o, s] of n) {
      if (s.count === 0) continue;
      r[`${o}_count`] = s.count, r[`${o}_min`] = s.min, r[`${o}_max`] = s.max, r[`${o}_avg`] = s.sum / s.count;
      let l = [...s.reservoir].sort((b, C) => b - C);
      r[`${o}_p50`] = He(l, 50), r[`${o}_p95`] = He(l, 95), r[`${o}_p99`] = He(l, 99);
    }
    return r;
  } };
}
var Ge = (0, import_chunk_bs4h6795.an)(null);
function le(n) {
  let s = (0, import_chunk_sng02qpc.k)(8), { store: r, children: o } = n, l;
  if (s[0] === import_chunk_w1d7ygsk.R) l = IBo(), s[0] = l;
  else l = s[0];
  let C = r ?? l, { storageV5: N } = (0, import_chunk_3jkk3v3z.Ve)(), V, _;
  if (s[1] !== N || s[2] !== C) V = () => {
    let c = false;
    let U = (0, import_chunk_m15w38ag.ne)() && N !== void 0 ? (0, import_chunk_w578pjby.oA)(async () => {
      let D = C.getAll();
      if (Object.keys(D).length > 0) await (0, import_chunk_865at33z.kw)((d) => ({ ...d, lastSessionMetrics: D }), N);
      c = true;
    }) : void 0;
    let F = () => {
      if (c) {
        return;
      }
      let j = C.getAll();
      if (Object.keys(j).length > 0) (0, import_chunk_865at33z.o6n)((W) => ({ ...W, lastSessionMetrics: j }));
    };
    return process.on("exit", F), () => {
      U?.(), process.off("exit", F);
    };
  }, _ = [C, N], s[1] = N, s[2] = C, s[3] = V, s[4] = _;
  else V = s[3], _ = s[4];
  (0, import_chunk_bs4h6795.H)(V, _);
  let K;
  if (s[5] !== o || s[6] !== C) K = (0, import_chunk_a46xeenj.e)(Ge.Provider, { value: C, children: o }), s[5] = o, s[6] = C, s[7] = K;
  else K = s[7];
  return K;
}
(0, import_chunk_bs4h6795.G)();
class C7n extends import_chunk_8bkqeb5d.zZe {
  action;
  sourceEvent;
  isChordCompletion;
  origin;
  constructor(n, r) {
    super("action", { bubbles: true, cancelable: true });
    this.action = n, this.sourceEvent = r?.sourceEvent ?? null, this.isChordCompletion = r?.isChordCompletion ?? false, this.origin = r?.origin ?? "single";
  }
  consume() {
    this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation();
  }
  get consumed() {
    return this._isPropagationStopped();
  }
}
var Ywn = (0, import_chunk_t57w17k7.de)((0, import_chunk_se72nykz.ps)({ counts: /* @__PURE__ */ new Map() }), (n) => n.setState(() => ({ counts: /* @__PURE__ */ new Map() })));
function ze(n) {
  Ywn.setState((r) => {
    let o = new Map(r.counts);
    return o.set(n, (o.get(n) ?? 0) + 1), { counts: o };
  });
}
function qe(n) {
  Ywn.setState((r) => {
    let o = r.counts.get(n);
    if (o === void 0) return r;
    let s = new Map(r.counts);
    if (o <= 1) s.delete(n);
    else s.set(n, o - 1);
    return { counts: s };
  });
}
function JWr(n, r) {
  return n.counts.has(r);
}
var Je = 3e3;
function OIt(n) {
  let s = (0, import_chunk_sng02qpc.k)(4), { children: r } = n;
  if ((0, import_chunk_9js1xpg4.$d)()) {
    let l2;
    if (s[0] !== r) l2 = (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: r }), s[0] = r, s[1] = l2;
    else l2 = s[1];
    return l2;
  }
  let l;
  if (s[2] !== r) l = (0, import_chunk_a46xeenj.e)(Ze, { children: r }), s[2] = r, s[3] = l;
  else l = s[3];
  return l;
}
function Ze({ children: n }) {
  let [{ bindings: r }, o] = (0, import_chunk_bs4h6795.y)(() => {
    let S = (0, import_chunk_y8kqnbqt.F0n)(import_chunk_y8kqnbqt.OP);
    return (0, import_chunk_w578pjby.t)(`[keybindings] KeybindingSetup initialized with ${S.bindings.length} bindings, ${S.warnings.length} warnings`), S;
  }), s = (0, import_chunk_8bkqeb5d.ir)(), { addNotification: l } = (0, import_chunk_v9dxspne.Js)(), b = (0, import_chunk_bs4h6795.I)(null), [C, N] = (0, import_chunk_bs4h6795.y)(null), V = (0, import_chunk_bs4h6795.I)(null), _ = (0, import_chunk_bs4h6795.I)(/* @__PURE__ */ new Map()), c = (0, import_chunk_bs4h6795.I)(/* @__PURE__ */ new Set()), D = (0, import_chunk_bs4h6795.I)(/* @__PURE__ */ new Set()), d = (0, import_chunk_bs4h6795.I)(null), [U] = (0, import_chunk_bs4h6795.y)(import_chunk_9js1xpg4.B7n), j = (0, import_chunk_bs4h6795.ye)((S) => {
    c.current.add(S), ze(S);
  }, []), W = (0, import_chunk_bs4h6795.ye)((S) => {
    c.current.delete(S), qe(S);
  }, []), F = (0, import_chunk_bs4h6795.ye)(() => {
    V.current?.(), V.current = null;
  }, []), K = (0, import_chunk_bs4h6795.ye)((S) => {
    if (F(), S !== null) V.current = s.setTimeout(() => {
      (0, import_chunk_w578pjby.t)("[keybindings] Chord timeout - cancelling"), b.current = null, N(null);
      let a = (0, import_chunk_y8kqnbqt.M5)(S, (0, import_chunk_y8kqnbqt.JF)());
      l({ key: "chord-timeout", kind: "feedback", text: `${a} cancelled \xB7 no next key within ${Je / 1e3}s`, row1Hint: `${a} timed out`, priority: "immediate", timeoutMs: 3e3 });
    }, Je);
    b.current = S, N(S);
  }, [l, F, s]);
  return (0, import_chunk_bs4h6795.H)(() => {
    (0, import_chunk_y8kqnbqt.ntl)(import_chunk_y8kqnbqt.OP);
    let S = import_chunk_y8kqnbqt.OP.changed.subscribe((a) => {
      o(a), (0, import_chunk_w578pjby.t)(`[keybindings] Reloaded: ${a.bindings.length} bindings, ${a.warnings.length} warnings`);
    });
    return () => {
      S(), F();
    };
  }, [F]), (0, import_chunk_a46xeenj.e)(import_chunk_9js1xpg4.dkn, { bindings: r, pendingChordRef: b, pendingChord: C, activeContexts: c.current, registerActiveContext: j, unregisterActiveContext: W, handlerRegistryRef: _, preDispatchRef: D, singleKeyEventRef: d, keyHandlerRegistry: U, children: (0, import_chunk_a46xeenj.e)(Lt, { bindings: r, pendingChordRef: b, setPendingChord: K, activeContexts: c.current, handlerRegistryRef: _, preDispatchRef: D, singleKeyEventRef: d, keyHandlerRegistry: U, children: n }) });
}
function Xe(n) {
  let r = [...n], o = new Set(r.filter((s) => !s.fallback).map((s) => s.action));
  return [...r.filter((s) => !s.fallback), ...r.filter((s) => s.fallback && !o.has(s.action))];
}
function et(n) {
  return !n.ctrl && !n.meta && !n.superKey;
}
var Gt = import_chunk_q4pszsad.kTt.map((n) => (0, import_chunk_y8kqnbqt.wae)(n.key));
function tt(n) {
  let r = (0, import_chunk_y8kqnbqt.VCe)(n);
  return r !== null && Gt.some((o) => (0, import_chunk_y8kqnbqt.EWe)(o, r));
}
function Lt({ bindings: n, pendingChordRef: r, setPendingChord: o, activeContexts: s, handlerRegistryRef: l, preDispatchRef: b, singleKeyEventRef: C, keyHandlerRegistry: N, children: V }) {
  let _ = (0, import_chunk_bs4h6795.I)([]), c = (0, import_chunk_bs4h6795.I)(null), D = (0, import_chunk_bs4h6795.I)("legacy"), d = (0, import_chunk_bs4h6795.ye)((a, u, p, v) => {
    for (let m of b.current) try {
      if (m.handler(a, u, p) === true) return v(), true;
    } catch (g) {
      (0, import_chunk_k449cc64.i)(g);
    }
    return false;
  }, [b]), U = (a, u, p, v) => {
    let m = l.current;
    if (!m) return false;
    let g = [...m.values()].flatMap((h) => [...h]), E = [...new Set(g.filter((h) => !h.fallback).map((h) => h.context)), ...s, "Global"], f = (0, import_chunk_y8kqnbqt.q1t)(a, E, n, u), M = f.type === "match" && g.some((h) => !h.fallback && h.action === f.action) ? f.action : null, B = M === null ? [p] : [M, p], x = tt(a);
    for (let h of B) {
      let [T] = Xe(m.get(h) ?? []).filter((w) => !(w.fallback && x));
      if (T) return T.handler(), (0, import_chunk_y8kqnbqt.ihr)(h), v(), true;
    }
    if (x) return false;
    return v(), true;
  }, j = (a, u, p, v, m, g = false) => {
    let E = l.current, f = tt(a), M = /* @__PURE__ */ new Set();
    if (E) {
      for (let A of E.values()) for (let L of A) if (!(f && L.fallback)) M.add(L.context);
    }
    let B = [...M, ...s, "Global"], x = r.current, h = x !== null, T = (0, import_chunk_y8kqnbqt.q1t)(a, B, n, x);
    switch (T.type) {
      case "chord_started":
        D.current = "legacy", o(T.pending), m();
        return;
      case "chord_cancelled":
        o(null), m();
        return;
      case "unbound":
        if (o(null), h) {
          m();
          return;
        }
        break;
      case "match":
        if (o(null), h) {
          U(a, x, T.action, m);
          return;
        }
        break;
      case "none":
        break;
    }
    if (!E) return;
    if (!g && d(u, p, v, m)) return;
    let w = /* @__PURE__ */ new Map(), z = Xe([...E.values()].flatMap((A) => [...A])), P = et(a) || f, X;
    for (let A of z) {
      if (!A.singleKey || A.fallback && P) continue;
      let L;
      if (A.fallback && !s.has(A.context)) X ??= (() => {
        let Q = (0, import_chunk_y8kqnbqt.q1t)(a, [...s, "Global"], n, null);
        return Q.type === "match" ? Q.action : null;
      })(), L = X;
      else L = w.get(A.context);
      if (L === void 0) {
        let Q = (0, import_chunk_y8kqnbqt.q1t)(a, [...s, A.context, "Global"], n, null);
        L = Q.type === "match" ? Q.action : null, w.set(A.context, L);
      }
      if (L === A.action) {
        let Q = C.current;
        C.current = a;
        let te;
        try {
          te = A.handler();
        } finally {
          C.current = Q;
        }
        if (te !== false) {
          (0, import_chunk_y8kqnbqt.ihr)(L), m();
          return;
        }
      }
    }
  }, W = (a, u, p, v, m, g) => {
    let E = N, f = (T, w) => {
    };
    if (E.swallowAll.size > 0) {
      f(null, true), g();
      return;
    }
    if (r.current !== null && D.current === "legacy") {
      f(null, false), j(u, p, v, m, g);
      return;
    }
    let M = Qt(a.target), B = r.current !== null && D.current === "scopeChain";
    if (M.length === 0 && E.preemptiveScopes.size === 0 && !B) {
      f(null, false), j(u, p, v, m, g);
      return;
    }
    let x = ce(a.target);
    if (E.preemptiveScopes.size > 0 && !B) {
      let T = [...E.preemptiveScopes.keys(), "Global"], w = (0, import_chunk_y8kqnbqt.hds)(u, T, n, null);
      if (w.type === "match" && x) {
        if (je(x, a, w.action, false, a.type === "wheel" ? "wheel" : "single")) {
          f(w.action, true), (0, import_chunk_y8kqnbqt.ihr)(w.action);
          return;
        }
      }
    }
    if (!B && x?.attributes.textEntry === true && et(u) && [...u.key].length === 1) {
      f(null, d(p, v, m, g));
      return;
    }
    if (B) {
      let T = r.current, w = (0, import_chunk_y8kqnbqt.hds)(u, _.current, n, T);
      if (w.type === "chord_started") {
        D.current = "scopeChain", o(w.pending), g(), f(null, true);
        return;
      }
      if (w.type === "match") {
        o(null);
        let z = c.current;
        c.current = null, _.current = [];
        let P = z && x && (0, import_chunk_8bkqeb5d.Tve)(z, (0, import_chunk_8bkqeb5d.B9t)(x)) ? z : x;
        if (P) {
          if (je(P, a, w.action, true, "chord")) {
            f(w.action, true), (0, import_chunk_y8kqnbqt.ihr)(w.action);
            return;
          }
        }
        f(w.action, U(u, T, w.action, g));
        return;
      }
      c.current = null, _.current = [], f(null, false), j(u, p, v, m, g);
      return;
    }
    let h = (0, import_chunk_y8kqnbqt.hds)(u, M, n, null);
    switch (h.type) {
      case "chord_started":
        _.current = M, c.current = x ?? null, D.current = "scopeChain", o(h.pending), g(), f(null, true);
        return;
      case "match": {
        if (!x) {
          f(h.action, false), j(u, p, v, m, g);
          return;
        }
        if (d(p, v, m, g)) {
          o(null), f(h.action, true);
          return;
        }
        if (je(x, a, h.action, false, a.type === "wheel" ? "wheel" : "single")) {
          o(null), f(h.action, true), (0, import_chunk_y8kqnbqt.ihr)(h.action);
          return;
        }
        f(h.action, false), j(u, p, v, m, g, true);
        return;
      }
      case "unbound":
        if (d(p, v, m, g)) {
          o(null), f(null, true);
          return;
        }
        o(null), f(null, false);
        return;
      default:
        f(null, false), j(u, p, v, m, g);
        return;
    }
  }, F = (a) => {
    let { input: u, key: p } = (0, import_chunk_9js1xpg4.Zya)(a);
    W(a, a, u, p, a.sequence, () => ot(a));
  }, K = (a) => {
    if (Ut(a.target, a.currentTarget, a.col, a.row)) return;
    let u = { name: a.deltaY < 0 ? "wheelup" : "wheeldown", key: "", ctrl: a.ctrl, shift: a.shift, meta: a.meta, superKey: false }, p = { upArrow: false, downArrow: false, leftArrow: false, rightArrow: false, pageDown: false, pageUp: false, wheelUp: a.deltaY < 0, wheelDown: a.deltaY > 0, home: false, end: false, return: false, escape: false, tab: false, backspace: false, delete: false, ctrl: a.ctrl, shift: a.shift, meta: a.meta, super: false };
    W(a, u, "", p, "", () => ot(a));
  }, S = (0, import_chunk_bs4h6795.I)(null);
  return (0, import_chunk_bs4h6795.It)(() => {
    if (!S.current) return;
    let a = (0, import_chunk_8bkqeb5d.cH)(S.current), u = () => {
      let p = S.current;
      if (!p || a.activeElement === p) return;
      if (a.activeElement === null) {
        a.focus(p);
        return;
      }
      let v = p.parentNode;
      while (v) {
        if (v === a.activeElement) {
          a.focus(p);
          return;
        }
        v = v.parentNode;
      }
    };
    return u(), a.subscribe(u);
  }, []), (0, import_chunk_a46xeenj.e)(import_chunk_3jkk3v3z.kS, { ref: S, keybindingScope: "Global", tabIndex: -1, flexDirection: "column", flexGrow: 1, onKeyDownCapture: F, onWheelCapture: K, children: V });
}
function ot(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function $t(n) {
  return n !== null && "attributes" in n;
}
function ce(n) {
  return $t(n) ? n : void 0;
}
function Ut(n, r, o, s) {
  let l = ce(n), b = ce(r);
  while (l && l !== b) {
    if (l._eventHandlers?.onWheel && (o === void 0 || s === void 0 || typeof l.attributes.tabIndex === "number" || (0, import_chunk_8bkqeb5d.Gse)(l, o, s) !== null)) return true;
    l = l.parentNode;
  }
  return false;
}
function Qt(n) {
  let r = [], o = ce(n);
  while (o) {
    let s = o.attributes.keybindingScope;
    if (typeof s === "string" && (0, import_chunk_q4pszsad.NCl)(s)) r.push(s);
    o = o.parentNode;
  }
  return r;
}
function je(n, r, o, s, l) {
  let b = new C7n(o, { sourceEvent: r, isChordCompletion: s, origin: l });
  return import_chunk_8bkqeb5d.wP.dispatch(n, b), b.consumed;
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var ue = (0, import_chunk_bs4h6795.an)(null);
function J(n) {
  let s = (0, import_chunk_sng02qpc.k)(3), { children: r } = n, o = (0, import_chunk_bs4h6795.I)(null), l;
  if (s[0] === import_chunk_w1d7ygsk.R) l = { setHandler: (b) => {
    o.current = b;
  }, tryDelete: (C) => o.current?.(C) ?? false }, s[0] = l;
  else l = s[0];
  let N = l, V;
  if (s[1] !== r) V = (0, import_chunk_a46xeenj.e)(ue.Provider, { value: N, children: r }), s[1] = r, s[2] = V;
  else V = s[2];
  return V;
}
function A7n() {
  let n = (0, import_chunk_bs4h6795.be)(ue);
  if (!n) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)");
  }
  return n;
}
(0, import_chunk_bs4h6795.G)();
class pe {
  queue = [];
  waiters = [];
  changed = (0, import_chunk_69qhefwa.Be)();
  _revision = 0;
  get length() {
    return this.queue.length;
  }
  get revision() {
    return this._revision;
  }
  send(n) {
    this._revision++;
    let r = this.waiters.findIndex((o) => o.fn(n));
    if (r !== -1) {
      let o = this.waiters.splice(r, 1)[0];
      if (o) {
        o.resolve(n), this.notify();
        return;
      }
    }
    this.queue.push(n), this.notify();
  }
  poll(n = () => true) {
    let r = this.queue.findIndex(n);
    if (r === -1) return;
    return this.queue.splice(r, 1)[0];
  }
  receive(n = () => true) {
    let r = this.queue.findIndex(n);
    if (r !== -1) {
      let o = this.queue.splice(r, 1)[0];
      if (o) return this.notify(), Promise.resolve(o);
    }
    return new Promise((o) => {
      this.waiters.push({ fn: n, resolve: o });
    });
  }
  subscribe = this.changed.subscribe;
  notify() {
    this.changed.emit();
  }
}
var fe = (0, import_chunk_bs4h6795.an)(void 0);
function me(n) {
  let o = (0, import_chunk_sng02qpc.k)(3), { children: r } = n, s;
  if (o[0] === import_chunk_w1d7ygsk.R) s = new pe(), o[0] = s;
  else s = o[0];
  let l = s, b;
  if (o[1] !== r) b = (0, import_chunk_a46xeenj.e)(fe.Provider, { value: l, children: r }), o[1] = r, o[2] = b;
  else b = o[2];
  return b;
}
function V2s() {
  let n = (0, import_chunk_bs4h6795.be)(fe);
  if (!n) {
    throw Error("useMailbox must be used within a MailboxProvider");
  }
  return n;
}
(0, import_chunk_bs4h6795.G)();
function IIt(n) {
  let r = (0, import_chunk_bs4h6795.mo)(n);
  (0, import_chunk_bs4h6795.H)(() => import_chunk_trq47kfh.Ti.subscribe((o, s) => {
    let l = (0, import_chunk_2yx6c1y2.zr)();
    r(o, l, s);
  }), []);
}
(0, import_chunk_bs4h6795.G)();
var ge = (0, import_chunk_bs4h6795.an)(null);
function b_e() {
  let n = (0, import_chunk_bs4h6795.be)(ge);
  if (!n) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return n;
}
function xo(_e) {
  return _e.expandedView === "tasks" ? { ..._e, expandedView: "none" } : _e;
}
var he = (0, import_chunk_bs4h6795.an)(false), q = null;
function Se(n) {
  let c = (0, import_chunk_sng02qpc.k)(87), { children: r, store: o, initialState: s, onChangeAppState: l, fleetNudgeStore: b, writesExitHandoff: C, sessionHooks: N } = n, V = C === void 0 ? false : C;
  if ((0, import_chunk_bs4h6795.be)(he)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider");
  }
  let D;
  if (c[0] !== s || c[1] !== l || c[2] !== o) D = () => o ?? (0, import_chunk_se72nykz.ps)(s ?? (0, import_chunk_abcfgj28.Xwn)(), l), c[0] = s, c[1] = l, c[2] = o, c[3] = D;
  else D = c[3];
  let [d] = (0, import_chunk_bs4h6795.y)(D), U;
  if (c[4] !== N) U = () => N ?? (0, import_chunk_jhdsf4g3.cAe)(), c[4] = N, c[5] = U;
  else U = c[5];
  let [j] = (0, import_chunk_bs4h6795.y)(U), W = (0, import_chunk_8bkqeb5d.si)(), F;
  if (c[6] !== W) F = () => (0, import_chunk_2t5dst6n.AGs)(W), c[6] = W, c[7] = F;
  else F = c[7];
  let [K] = (0, import_chunk_bs4h6795.y)(F), [S] = (0, import_chunk_bs4h6795.y)(import_chunk_9rvw567f.wGs), { storageV5: a } = (0, import_chunk_3jkk3v3z.Ve)(), u = (0, import_chunk_ykad4ek3.mx)(), p;
  if (c[8] !== a || c[9] !== d) p = () => new import_chunk_9wz0b70s.zBo(a, globalThis, () => d.setState(xo)), c[8] = a, c[9] = d, c[10] = p;
  else p = c[10];
  let [v] = (0, import_chunk_bs4h6795.y)(p), m;
  if (c[11] !== b || c[12] !== a) m = () => b ?? new import_chunk_f0sbddj1.LIt({ storageV5: a }), c[11] = b, c[12] = a, c[13] = m;
  else m = c[13];
  let [g] = (0, import_chunk_bs4h6795.y)(m), E;
  if (c[14] !== a) E = () => q ? new q.SessionRosterStore({ storageV5: a }) : null, c[14] = a, c[15] = E;
  else E = c[15];
  let [f] = (0, import_chunk_bs4h6795.y)(E), [M] = (0, import_chunk_bs4h6795.y)(V), [B] = (0, import_chunk_bs4h6795.y)(a), x, h;
  if (c[16] !== B || c[17] !== d || c[18] !== M) x = () => {
    let T = M ? () => (0, import_chunk_6vfwhdja.R7n)(d.getState().tasks, B) : () => (0, import_chunk_6vfwhdja.HBo)(d.getState().tasks);
    let w = (0, import_chunk_w578pjby.Ct)(T);
    return () => {
      T(), w();
    };
  }, h = [d, M, B], c[16] = B, c[17] = d, c[18] = M, c[19] = x, c[20] = h;
  else x = c[19], h = c[20];
  (0, import_chunk_bs4h6795.H)(x, h);
  let z;
  if (c[21] !== d) z = () => import_chunk_xr7b2tpa.I9t.over(d), c[21] = d, c[22] = z;
  else z = c[22];
  let [P] = (0, import_chunk_bs4h6795.y)(z), X;
  if (c[23] !== d) X = () => import_chunk_kdpctb21.BJ.over(d), c[23] = d, c[24] = X;
  else X = c[24];
  let [A] = (0, import_chunk_bs4h6795.y)(X), L;
  if (c[25] !== P || c[26] !== u?.mcpSessionWiring) L = () => u?.mcpSessionWiring.acquireConnections(P), c[25] = P, c[26] = u?.mcpSessionWiring, c[27] = L;
  else L = c[27];
  let Q;
  if (c[28] !== P || c[29] !== u) Q = [u, P], c[28] = P, c[29] = u, c[30] = Q;
  else Q = c[30];
  (0, import_chunk_bs4h6795.H)(L, Q);
  let te;
  if (c[31] !== d) te = () => import_chunk_k7fvzexf.VXt.over(d), c[31] = d, c[32] = te;
  else te = c[32];
  let [ve] = (0, import_chunk_bs4h6795.y)(te), bt, xt;
  if (c[33] !== ve || c[34] !== u) bt = () => {
    if (u === void 0) {
      return;
    }
    return import_chunk_k7fvzexf.LAn.of(u).acquire(ve);
  }, xt = [u, ve], c[33] = ve, c[34] = u, c[35] = bt, c[36] = xt;
  else bt = c[35], xt = c[36];
  (0, import_chunk_bs4h6795.H)(bt, xt);
  let Rt, Pt;
  if (c[37] !== P) Rt = () => (0, import_chunk_f9x2f6cx.tFs)(() => P.get().clients), Pt = [P], c[37] = P, c[38] = Rt, c[39] = Pt;
  else Rt = c[38], Pt = c[39];
  (0, import_chunk_bs4h6795.H)(Rt, Pt);
  let wt, kt;
  if (c[40] !== P) wt = () => (0, import_chunk_f9x2f6cx.nFs)((Do, jo, To) => P.swapServerTools(Do, jo, To)), kt = [P], c[40] = P, c[41] = wt, c[42] = kt;
  else wt = c[41], kt = c[42];
  (0, import_chunk_bs4h6795.H)(wt, kt);
  let Kt;
  if (c[43] !== d.setState) Kt = () => (0, import_chunk_7ch4vsmn.H7n)(d.setState), c[43] = d.setState, c[44] = Kt;
  else Kt = c[44];
  let Et;
  if (c[45] !== d) Et = [d], c[45] = d, c[46] = Et;
  else Et = c[46];
  (0, import_chunk_bs4h6795.H)(Kt, Et);
  let Mt;
  if (c[47] !== u || c[48] !== a || c[49] !== d || c[50] !== o) Mt = (Bo, Lr, Io) => {
    if ((0, import_chunk_g6s9cndm.x7n)(u, Bo, d.setState, a, { ...Io, isSessionStore: o !== void 0 }), !(0, import_chunk_f9x2f6cx.Hn)()) (0, import_chunk_tjja7dsj.R8t)(d.getState().toolPermissionContext, d.setState, d.getState().fastMode);
  }, c[47] = u, c[48] = a, c[49] = d, c[50] = o, c[51] = Mt;
  else Mt = c[51];
  let xe = (0, import_chunk_bs4h6795.mo)(Mt);
  IIt(xe);
  let Nt;
  if (c[52] !== xe) Nt = () => {
    (0, import_chunk_g6s9cndm.P7n)(() => xe("policySettings"));
  }, c[52] = xe, c[53] = Nt;
  else Nt = c[53];
  let At;
  if (c[54] === import_chunk_w1d7ygsk.R) At = [], c[54] = At;
  else At = c[54];
  (0, import_chunk_bs4h6795.H)(Nt, At);
  const Fe = u ?? null;
  let Re;
  if (c[55] !== r || c[56] !== f) Re = q && f ? (0, import_chunk_a46xeenj.e)(q.SessionRosterStoreContext.Provider, { value: f, children: r }) : r, c[55] = r, c[56] = f, c[57] = Re;
  else Re = c[57];
  let Ce;
  if (c[58] !== Re) Ce = (0, import_chunk_a46xeenj.e)(import_chunk_rxcv97gm.Qwn, { children: (0, import_chunk_a46xeenj.e)(J, { children: Re }) }), c[58] = Re, c[59] = Ce;
  else Ce = c[59];
  let Pe;
  if (c[60] !== g || c[61] !== Ce) Pe = (0, import_chunk_a46xeenj.e)(import_chunk_f0sbddj1.sjr.Provider, { value: g, children: Ce }), c[60] = g, c[61] = Ce, c[62] = Pe;
  else Pe = c[62];
  let we;
  if (c[63] !== Pe || c[64] !== v) we = (0, import_chunk_a46xeenj.e)(import_chunk_9wz0b70s.VBo.Provider, { value: v, children: Pe }), c[63] = Pe, c[64] = v, c[65] = we;
  else we = c[65];
  let ke;
  if (c[66] !== S || c[67] !== we) ke = (0, import_chunk_a46xeenj.e)(import_chunk_9rvw567f.$9t.Provider, { value: S, children: we }), c[66] = S, c[67] = we, c[68] = ke;
  else ke = c[68];
  let Ke;
  if (c[69] !== K || c[70] !== ke) Ke = (0, import_chunk_a46xeenj.e)(me, { children: (0, import_chunk_a46xeenj.e)(import_chunk_7tdejx4j.qBo, { children: (0, import_chunk_a46xeenj.e)(import_chunk_2t5dst6n.TO.Provider, { value: K, children: ke }) }) }), c[69] = K, c[70] = ke, c[71] = Ke;
  else Ke = c[71];
  let Ee;
  if (c[72] !== j || c[73] !== Ke) Ee = (0, import_chunk_a46xeenj.e)(ge.Provider, { value: j, children: Ke }), c[72] = j, c[73] = Ke, c[74] = Ee;
  else Ee = c[74];
  let Me;
  if (c[75] !== Fe || c[76] !== Ee) Me = (0, import_chunk_a46xeenj.e)(import_chunk_74h6kcya.QBo.Provider, { value: Fe, children: Ee }), c[75] = Fe, c[76] = Ee, c[77] = Me;
  else Me = c[77];
  let Ne;
  if (c[78] !== A || c[79] !== Me) Ne = (0, import_chunk_a46xeenj.e)(import_chunk_74h6kcya.eWo.Provider, { value: A, children: Me }), c[78] = A, c[79] = Me, c[80] = Ne;
  else Ne = c[80];
  let Ae;
  if (c[81] !== P || c[82] !== Ne) Ae = (0, import_chunk_a46xeenj.e)(import_chunk_74h6kcya.ZBo.Provider, { value: P, children: Ne }), c[81] = P, c[82] = Ne, c[83] = Ae;
  else Ae = c[83];
  let Ht;
  if (c[84] !== d || c[85] !== Ae) Ht = (0, import_chunk_a46xeenj.e)(he.Provider, { value: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_74h6kcya.uW.Provider, { value: d, children: Ae }) }), c[84] = d, c[85] = Ae, c[86] = Ht;
  else Ht = c[86];
  return Ht;
}
function Nv(n) {
  let K = (0, import_chunk_sng02qpc.k)(32), { session: r, host: o, project: s, storageV5: l, messageQueue: b, store: C, initialState: N, onChangeAppState: V, fleetNudgeStore: _, sessionHooks: c, writesExitHandoff: D, getFpsMetrics: d, stats: U, keybindings: j, children: W } = n, F = j === void 0 ? true : j, S;
  if (K[0] !== l) S = (0, import_chunk_f2cpz56c.zcn)(l), K[0] = l, K[1] = S;
  else S = K[1];
  let a = S, u;
  if (K[2] !== W || K[3] !== F) u = F ? (0, import_chunk_a46xeenj.e)(OIt, { children: W }) : W, K[2] = W, K[3] = F, K[4] = u;
  else u = K[4];
  let p;
  if (K[5] !== u) p = (0, import_chunk_a46xeenj.e)(import_chunk_v9dxspne.YBo, { children: (0, import_chunk_a46xeenj.e)(import_chunk_rxcv97gm.Qwn, { children: (0, import_chunk_a46xeenj.e)(J, { children: u }) }) }), K[5] = u, K[6] = p;
  else p = K[6];
  let v;
  if (K[7] !== _ || K[8] !== N || K[9] !== V || K[10] !== c || K[11] !== C || K[12] !== p || K[13] !== D) v = (0, import_chunk_a46xeenj.e)(Se, { store: C, initialState: N, onChangeAppState: V, fleetNudgeStore: _, sessionHooks: c, writesExitHandoff: D, children: p }), K[7] = _, K[8] = N, K[9] = V, K[10] = c, K[11] = C, K[12] = p, K[13] = D, K[14] = v;
  else v = K[14];
  let m = v, g;
  if (K[15] !== m || K[16] !== o || K[17] !== s || K[18] !== r) g = r !== void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_ykad4ek3.jBo, { session: r, children: m }) : o !== void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_ykad4ek3.GBo, { host: o, project: s, children: m }) : m, K[15] = m, K[16] = o, K[17] = s, K[18] = r, K[19] = g;
  else g = K[19];
  let E;
  if (K[20] !== U || K[21] !== g) E = (0, import_chunk_a46xeenj.e)(le, { store: U, children: g }), K[20] = U, K[21] = g, K[22] = E;
  else E = K[22];
  let f;
  if (K[23] !== d || K[24] !== E) f = (0, import_chunk_a46xeenj.e)(ie, { getFpsMetrics: d, children: E }), K[23] = d, K[24] = E, K[25] = f;
  else f = K[25];
  let M = f, B;
  if (K[26] !== b || K[27] !== M) B = b === void 0 ? M : (0, import_chunk_a46xeenj.e)(import_chunk_6c9p0fd9.N9t, { queue: b, children: M }), K[26] = b, K[27] = M, K[28] = B;
  else B = K[28];
  let x = B;
  if (l === void 0) {
    return x;
  }
  let h;
  if (K[29] !== x || K[30] !== a) h = (0, import_chunk_a46xeenj.e)(import_chunk_3jkk3v3z.mkn, { ...a, children: x }), K[29] = x, K[30] = a, K[31] = h;
  else h = K[31];
  return h;
}
