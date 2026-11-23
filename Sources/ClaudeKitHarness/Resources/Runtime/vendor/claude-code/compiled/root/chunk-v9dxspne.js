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
var chunk_v9dxspne_exports = {};
__export(chunk_v9dxspne_exports, {
  Eve: () => Eve,
  F7n: () => F7n,
  GZe: () => GZe,
  JBo: () => JBo,
  JK: () => JK,
  Js: () => Js,
  Jya: () => Jya,
  N7n: () => N7n,
  XBo: () => XBo,
  YBo: () => YBo,
  jZe: () => jZe,
  lkn: () => lkn,
  mKe: () => mKe
});
module.exports = __toCommonJS(chunk_v9dxspne_exports);
var import_chunk_x7880gvk = require("/$bunfs/root/chunk-x7880gvk.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_3dxkbe9d = require("/$bunfs/root/chunk-3dxkbe9d.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_8ym8b8h9 = require("/$bunfs/root/chunk-8ym8b8h9.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function N7n() {
  return (0, import_chunk_8ym8b8h9._h)();
}
function Q(t) {
  return t.mounts > 0;
}
function jZe(t, n) {
  let s = t.current?.key === n, l = t.queue.some((f) => f.key === n), m2 = t.pinned.some((f) => f.key === n);
  if (!s && !l && !m2) return t;
  return { current: s ? null : t.current, queue: t.queue.filter((f) => f.key !== n), pinned: m2 ? t.pinned.filter((f) => f.key !== n) : t.pinned };
}
function JK(t) {
  return t.diffPanelVisible || t.paneHoldsToasts;
}
function Eve(t, n) {
  return t !== null && (!n || t.exemptFromDiffPanelHold === true);
}
function GZe(t, n) {
  return n && t !== null && XBo(t)?.surface === "gauge";
}
function mKe() {
  return (0, import_chunk_3dxkbe9d.$e)(import_chunk_x7880gvk.nd.headerGauge, Q);
}
var F7n = 8e3;
function D() {
  return { clearTimer: { current: null }, mountCount: { current: 0 }, transcriptSink: { registered: null }, saidInTranscript: /* @__PURE__ */ new Map() };
}
var S = (0, import_chunk_bs4h6795.an)(null);
function YBo(t) {
  let l = (0, import_chunk_sng02qpc.k)(3), { children: n } = t, [s] = (0, import_chunk_bs4h6795.y)(D), m2;
  if (l[0] !== n || l[1] !== s) m2 = (0, import_chunk_a46xeenj.e)(S.Provider, { value: s, children: n }), l[0] = n, l[1] = s, l[2] = m2;
  else m2 = l[2];
  return m2;
}
function I({ presentationContext: t, isScreenReaderEnabled: n }) {
  return N7n() && !n && (0, import_chunk_8bkqeb5d.ckn)(t) === "fullscreen";
}
function E(t, { transcriptSink: n, saidInTranscript: s }, l) {
  if (false) switch (m.routeNotification(t.key)) {
    case "suppress":
    case "queue":
    case "transcript":
  }
  return t;
}
function XBo(t) {
  return;
}
function Jya(t) {
  let n = (0, import_chunk_bs4h6795.be)(S);
  (0, import_chunk_bs4h6795.It)(() => {
    if (n === null) return;
    return n.transcriptSink.registered = t, () => {
      if (n.transcriptSink.registered === t) n.transcriptSink.registered = null;
    };
  }, [n, t]);
}
function JBo() {
  let n = (0, import_chunk_sng02qpc.k)(2), t = (0, import_chunk_bs4h6795.be)(S), s;
  if (n[0] !== t?.transcriptSink.registered) s = (l) => t?.transcriptSink.registered?.write({ text: l, level: "notice" }, void 0) !== void 0, n[0] = t?.transcriptSink.registered, n[1] = s;
  else s = n[1];
  return s;
}
function Js() {
  let t = (0, import_chunk_74h6kcya.lo)(), n = (0, import_chunk_74h6kcya.Kr)(), s = (0, import_chunk_8bkqeb5d.ir)(), l = (0, import_chunk_bs4h6795.be)(S), [m2] = (0, import_chunk_bs4h6795.y)(D), f = l ?? m2, { clearTimer: o, mountCount: q } = f, h = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.$It), g = (0, import_chunk_8bkqeb5d.Xe)(), d = (0, import_chunk_bs4h6795.ye)(() => {
    let p = I({ presentationContext: h, isScreenReaderEnabled: g }), r = N7n() ? t.getState().notifications.queue.filter((u) => E(u, f, p) === "handled") : [];
    n((u) => {
      let i = r.length === 0 ? u : { ...u, notifications: { ...u.notifications, queue: u.notifications.queue.filter((c) => !r.includes(c)) } }, a = O(JK(i) ? i.notifications.queue.filter((c) => c.exemptFromDiffPanelHold) : i.notifications.queue);
      if (!a) return i;
      let { current: N } = i.notifications, R = N !== null && N.priority !== "immediate" && (a.priority === "immediate" && a.heldDuringDiffPanel === true || P(N) && !P(a)) ? N : null;
      if (N !== null && R === null) return i;
      let x = a.key;
      return o.current?.(), o.current = s.setTimeout(() => {
        o.current = null, n((c) => {
          if (c.notifications.current?.key !== x) return c;
          return { ...c, notifications: { ...c.notifications, current: null } };
        }), d();
      }, a.timeoutMs ?? F7n), { ...i, notifications: { ...i.notifications, queue: [...R !== null && V(R, a) ? [R] : [], ...i.notifications.queue.filter((c) => c !== a)], current: a.heldDuringDiffPanel ? { ...a, heldDuringDiffPanel: void 0 } : a } };
    });
  }, [n, t, f, o, s, h, g]), A = (0, import_chunk_bs4h6795.ye)((p) => {
    let r = N7n() ? E(p, f, I({ presentationContext: h, isScreenReaderEnabled: g })) : p;
    if (r === "handled") return;
    if (r.pinned) {
      n((i) => {
        if (i.notifications.pinned.some((a) => a.key === r.key)) return i;
        return { ...i, notifications: { ...i.notifications, pinned: [...i.notifications.pinned, r] } };
      });
      return;
    }
    if (r.priority === "immediate" && r.waitsItsTurn !== true && !JK(t.getState())) {
      if (o.current) o.current(), o.current = null;
      o.current = s.setTimeout(() => {
        o.current = null, n((i) => {
          if (i.notifications.current?.key !== r.key) return i;
          return { ...i, notifications: { ...i.notifications, queue: i.notifications.queue.filter((a) => !r.invalidates?.includes(a.key)), current: null } };
        }), d();
      }, r.timeoutMs ?? F7n), n((i) => ({ ...i, notifications: { ...i.notifications, current: r, queue: [...i.notifications.current ? [i.notifications.current] : [], ...i.notifications.queue].filter((a) => V(a, r)) } }));
      return;
    }
    let u = r.priority === "immediate" ? { ...r, heldDuringDiffPanel: true } : r;
    n((i) => {
      if (u.fold && i.notifications.current?.key === u.key) {
        let c = u.fold(i.notifications.current, u);
        if (o.current) o.current(), o.current = null;
        let b = c.key;
        return o.current = s.setTimeout(() => {
          o.current = null, n((T) => {
            if (T.notifications.current?.key !== b) return T;
            return { ...T, notifications: { ...T.notifications, current: null } };
          }), d();
        }, c.timeoutMs ?? F7n), { ...i, notifications: { ...i.notifications, current: c } };
      }
      let a = u.fold ? i.notifications.queue.findIndex((c) => c.key === u.key) : -1;
      if (u.fold && a !== -1) {
        let c = u.fold(i.notifications.queue[a], u), b = [...i.notifications.queue];
        return b[a] = c, { ...i, notifications: { ...i.notifications, queue: b } };
      }
      if (!(!new Set(i.notifications.queue.map((c) => c.key)).has(u.key) && i.notifications.current?.key !== u.key)) return i;
      let x = i.notifications.current !== null && u.invalidates?.includes(i.notifications.current.key);
      if (x && o.current) o.current(), o.current = null;
      return { ...i, notifications: { ...i.notifications, current: x ? null : i.notifications.current, queue: [...i.notifications.queue.filter((c) => V(c, u)), u] } };
    }), d();
  }, [n, t, f, d, o, s, h, g]), w = (0, import_chunk_bs4h6795.ye)((p) => {
    n((r) => {
      let u = jZe(r.notifications, p);
      if (u === r.notifications) return r;
      if (r.notifications.current?.key === p && o.current) o.current(), o.current = null;
      return { ...r, notifications: u };
    }), d();
  }, [n, d, o, f, h, g]);
  return (0, import_chunk_bs4h6795.H)(() => {
    if (q.current++, t.getState().notifications.queue.length > 0) d();
    return () => {
      if (q.current--, q.current === 0 && o.current) o.current(), o.current = null;
    };
  }, []), { addNotification: A, removeNotification: w, processQueue: d };
}
var lkn = { immediate: 0, high: 1, medium: 2, low: 3 };
function V(t, n) {
  return (t.priority !== "immediate" || t.requeueOnPreempt === true || t.heldDuringDiffPanel === true) && !n.invalidates?.includes(t.key);
}
var L = 36e5;
function P(t) {
  return t.priority !== "immediate" && (t.timeoutMs ?? F7n) >= L;
}
function O(t) {
  if (t.length === 0) return;
  let n = t.filter((s) => !P(s));
  return (n.length > 0 ? n : t).reduce((s, l) => lkn[l.priority] < lkn[s.priority] ? l : s);
}
