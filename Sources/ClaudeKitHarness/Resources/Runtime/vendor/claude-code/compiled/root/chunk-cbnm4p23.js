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
var chunk_cbnm4p23_exports = {};
__export(chunk_cbnm4p23_exports, {
  AIo: () => AIo,
  AMr: () => AMr,
  Ai: () => Ai,
  BIs: () => BIs,
  CIo: () => CIo,
  DNl: () => DNl,
  Ez: () => Ez,
  HNl: () => HNl,
  INl: () => INl,
  JT: () => JT,
  MNl: () => MNl,
  ONl: () => ONl,
  PMr: () => PMr,
  PNl: () => PNl,
  RIo: () => RIo,
  RMr: () => RMr,
  TIo: () => TIo,
  UA: () => UA,
  VX: () => VX,
  WPe: () => WPe,
  XT: () => XT,
  _r: () => _r,
  bFe: () => bFe,
  eKn: () => eKn,
  hl: () => hl,
  iXi: () => iXi,
  jPe: () => jPe,
  l3: () => l3,
  sd: () => sd,
  tKn: () => tKn,
  xMr: () => xMr,
  yK: () => yK
});
module.exports = __toCommonJS(chunk_cbnm4p23_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_events = require("events");
var TIo = 1e3;
function eKn(e, r, o, { unref: t } = { unref: true }) {
  let n = { onExpire: e, clock: o, expiresAt: o.monotonicNow() + r, unref: t, cancel: void 0 };
  return d(n, r), { clear: w.bind(void 0, n) };
}
function d(e, r) {
  e.cancel = e.clock.setTimeout(R.bind(void 0, e), Math.min(Math.max(0, r || 0), 2147483647), { unref: e.unref });
}
function R(e) {
  e.cancel = void 0;
  let r = e.expiresAt - e.clock.monotonicNow();
  if (!(r > 1e3)) {
    e.onExpire();
    return;
  }
  d(e, r);
}
function w(e) {
  e.cancel?.(), e.cancel = void 0;
}
var E = 50;
function _r(e = E) {
  let r = new AbortController();
  return (0, import_events.setMaxListeners)(e, r.signal), r;
}
function k(e) {
  let r = this.deref();
  e.deref()?.abort(r?.signal.reason);
}
function S(e) {
  let r = this.deref(), o = e.deref();
  if (r && o) r.signal.removeEventListener("abort", o);
}
var _ = new FinalizationRegistry(({ parentSignalRef: e, handler: r }) => {
  e.deref()?.removeEventListener("abort", r);
}), i = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
function g() {
  i.delete(this), l.delete(this);
}
function c(e, r, o) {
  i.set(r.signal, r), r.signal.addEventListener("abort", g, { once: true });
  let t = new WeakRef(r), n = new WeakRef(e);
  if (e.signal.aborted) {
    o.call(n, t);
    return;
  }
  if (i.has(e.signal)) l.set(r.signal, e);
  let a = o.bind(n, t);
  e.signal.addEventListener("abort", a, { once: true }), _.register(r, { parentSignalRef: new WeakRef(e.signal), handler: a }), r.signal.addEventListener("abort", S.bind(n, new WeakRef(a)), { once: true });
}
var x = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set());
function l3(e, r, o) {
  if (r === void 0) return o;
  let t = x.of(e), n = { controller: r };
  return t.add(n), o.finally(() => {
    t.delete(n);
  });
}
function sd(e, r) {
  let o = _r(r);
  return c(e, o, k), o;
}
class yK extends AbortController {
  turnController;
  constructor(e) {
    super();
    this.turnController = e;
    (0, import_events.setMaxListeners)(E, this.signal), c(e, this, k);
  }
}
var m = "ask-withdrawn-by-asker", s = new DOMException(m, "AbortError");
function PNl(e) {
  e.abort(s);
}
function AMr(e) {
  return e.aborted && Ai(e.reason) === m;
}
var u = "call-cut-by-plugin", C = new DOMException(u, "AbortError");
function CIo() {
  return C;
}
function XT(e) {
  let r = e.reason;
  return r instanceof Error && r.message === u;
}
function AIo(e, r) {
  let o = new yK(e);
  if (o.signal.addEventListener("abort", () => {
    if (!r.aborted && !e.signal.aborted) e.abort(o.signal.reason);
  }, { once: true }), r.aborted) o.abort(s);
  else r.addEventListener("abort", () => o.abort(s), { once: true });
  return o;
}
function JT(e) {
  let r = e;
  while (r instanceof yK) r = r.turnController;
  return r;
}
function VX(e, r) {
  if (e.signal.aborted) return r.abort(e.signal.reason), () => {
  };
  let o = () => r.abort(e.signal.reason);
  return e.signal.addEventListener("abort", o, { once: true }), () => e.signal.removeEventListener("abort", o);
}
function tKn(e, r, o) {
  e.signal.addEventListener("abort", () => {
    if (!o.aborted && !r.signal.aborted) r.abort(e.signal.reason);
  }, { once: true });
}
var v = { "user-cancel": new DOMException("user-cancel", "AbortError"), "remote-cancel": new DOMException("remote-cancel", "AbortError"), shutdown: new DOMException("shutdown", "AbortError"), interrupt: new DOMException("interrupt", "AbortError"), "turn-abort": new DOMException("turn-abort", "AbortError"), background: new DOMException("background", "AbortError"), "refusal-fallback-edit": new DOMException("refusal-fallback-edit", "AbortError"), "recovery-timeout": new DOMException("recovery-timeout", "AbortError"), "permission-stop": new DOMException("permission-stop", "AbortError"), "safety-monitor-block": new DOMException("safety-monitor-block", "AbortError") };
function hl(e) {
  return v[e];
}
function Ai(e) {
  return e instanceof DOMException && e.name === "AbortError" ? e.message : e;
}
async function ONl(e, r, o) {
  let t = RMr(r, (n) => Ai(n) !== "interrupt");
  try {
    return await (0, import_chunk_5appeerh.Tn)(e, t.signal, o);
  } finally {
    t.release();
  }
}
function RMr(e, r) {
  let o = new AbortController();
  function t() {
    if (r(e.reason)) o.abort();
  }
  if (e.aborted) t();
  else e.addEventListener("abort", t, { once: true });
  return { signal: o.signal, release: () => e.removeEventListener("abort", t) };
}
var y = /* @__PURE__ */ new Set(["user-cancel", "remote-cancel", "shutdown", "interrupt", "turn-abort", "safety-monitor-block"]);
function xMr(e) {
  return y.has(Ai(e));
}
var O = /* @__PURE__ */ new Set(["user-cancel", "remote-cancel"]);
function WPe(e) {
  return O.has(Ai(e));
}
var T = /* @__PURE__ */ new Set(["remote-cancel", "interrupt"]);
function INl(e) {
  return T.has(Ai(e));
}
var h = /* @__PURE__ */ new Set(["interrupt", "turn-abort", "refusal-fallback-edit", "permission-stop", "safety-monitor-block", u]);
function jPe(e) {
  return h.has(Ai(e));
}
function UA(e) {
  return Ai(e.reason) === "shutdown" ? true : void 0;
}
var b = "server-fallback-tombstone";
function Ez(e) {
  return e.aborted && Ai(e.reason) === b;
}
var M = new DOMException(b, "AbortError");
function PMr() {
  return M;
}
var A = "subagent-park", D = new DOMException(A, "AbortError");
function MNl() {
  return D;
}
function iXi(e) {
  return e.aborted && Ai(e.reason) === A;
}
function bFe(e) {
  switch (Ai(e)) {
    case "user-cancel":
      return "user_cancel";
    case "remote-cancel":
      return "remote_cancel";
    case "shutdown":
      return "shutdown";
    case "interrupt":
      return "interrupt";
    case "turn-abort":
      return "interrupt";
    case "background":
      return "background";
    case "recovery-timeout":
      return "recovery_timeout";
    case "permission-stop":
      return "turn_teardown";
    case b:
      return "server_fallback_tombstone";
    case A:
      return "subagent_park";
    default:
      return "turn_teardown";
  }
}
function HNl(e) {
  switch (e) {
    case "user_cancel":
    case "remote_cancel":
    case "shutdown":
    case "interrupt":
    case "background":
    case "subagent_park":
      return true;
    case "turn_teardown":
    case "recovery_timeout":
    case "server_fallback_tombstone":
      return false;
  }
}
function L(e) {
  let r = this.deref(), o = e.deref();
  if (!r || !o) return;
  if (l.delete(o.signal), xMr(r.signal.reason)) o.abort(r.signal.reason);
}
var f = 6e5;
function BIs(e) {
  if (Number.isNaN(e)) return f;
  return Math.min(36e5, Math.max(f, Math.round(e * 1.5)));
}
function W(e) {
  e.deref()?.abort(hl("recovery-timeout"));
}
function RIo(e, r, o) {
  return eKn(W.bind(void 0, new WeakRef(e)), r, o);
}
function DNl(e, r, o) {
  let t = _r();
  if (c(e, t, L), t.signal.aborted) return t;
  return t.signal.addEventListener("abort", RIo(t, r, o).clear, { once: true }), t;
}
