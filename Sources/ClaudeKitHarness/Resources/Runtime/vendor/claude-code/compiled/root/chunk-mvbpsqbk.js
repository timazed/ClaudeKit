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
var chunk_mvbpsqbk_exports = {};
__export(chunk_mvbpsqbk_exports, {
  $Ma: () => $Ma,
  A4r: () => A4r,
  BMa: () => BMa,
  EXs: () => EXs,
  GMa: () => GMa,
  KMa: () => KMa,
  TXs: () => TXs,
  UMa: () => UMa,
  VMa: () => VMa,
  WMa: () => WMa,
  YMa: () => YMa,
  ftr: () => ftr,
  jMa: () => jMa,
  qMa: () => qMa,
  vXs: () => vXs,
  zMa: () => zMa
});
module.exports = __toCommonJS(chunk_mvbpsqbk_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
(0, import_chunk_adx6804h.B)();
var k = 4e3, ftr = 16, x = 64, $Ma = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ action: (0, import_chunk_adx6804h.v)("yield_artifact_replies"), from: (0, import_chunk_adx6804h.n)().max(512), msg_id: (0, import_chunk_adx6804h.n)().min(1).max(128), session_id: (0, import_chunk_adx6804h.n)().max(512), slugs: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(128)).max(ftr), reason: (0, import_chunk_adx6804h.F)(["resume", "claim"]).catch("claim"), sent_at: (0, import_chunk_adx6804h.E)().finite(), claimed_at: (0, import_chunk_adx6804h.E)().finite().optional(), requester: (0, import_chunk_adx6804h.c)({ cwd: (0, import_chunk_adx6804h.ie)().optional(), tmux: (0, import_chunk_adx6804h.ie)().optional() }).optional() })), UMa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ action: (0, import_chunk_adx6804h.v)("artifact_replies_yielded"), orig_msg_id: (0, import_chunk_adx6804h.n)().max(128), yielded: (0, import_chunk_adx6804h.ie)().optional(), not_held: (0, import_chunk_adx6804h.ie)().optional(), refused: (0, import_chunk_adx6804h.ie)().optional() })), BMa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ action: (0, import_chunk_adx6804h.v)("unyield_artifact_replies"), orig_msg_id: (0, import_chunk_adx6804h.n)().max(128), slugs: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(128)).max(ftr), stopped: (0, import_chunk_adx6804h.P)().optional() })), A4r = { setTimeout: (e, s) => {
  let r = setTimeout(e, s);
  return r.unref?.(), r;
}, clearTimeout: (e) => clearTimeout(e) };
class A {
  outstanding = /* @__PURE__ */ new Map();
  pendingClaims = /* @__PURE__ */ new Map();
  holder = null;
  reverter = null;
  sendAnswer = null;
  ownAddress = null;
  delivered = /* @__PURE__ */ new Map();
  reset() {
    for (let e of this.outstanding.values()) e.timers.clearTimeout(e.timer);
    this.outstanding.clear(), this.pendingClaims.clear(), this.holder = null, this.reverter = null, this.sendAnswer = null, this.ownAddress = null, this.delivered.clear();
  }
}
var z = new import_chunk_2904xtvq.j(() => new A());
function y() {
  return z.of((0, import_chunk_f9x2f6cx.N)().host);
}
function b(e, s) {
  while (e.size > x) {
    let r = e.keys().next().value;
    if (r === void 0) break;
    let d = e.get(r);
    e.delete(r), s?.(d, r);
  }
}
function WMa(e, s, r) {
  let d = r.timers ?? A4r, o = y();
  return new Promise((f) => {
    let g = { asked: new Set(s), expectPid: r.expectPid, sentAt: r.sentAt, lost: /* @__PURE__ */ new Map(), resolve: f, onLate: r.onLate, timer: void 0, timers: d };
    g.timer = d.setTimeout(() => {
      if (o.outstanding.get(e) !== g || g.resolve === null) return;
      if (g.resolve = null, f({ kind: "timeout", lost: [...g.lost.keys()], lostTo: [...g.lost] }), g.onLate === void 0) o.outstanding.delete(e);
    }, r.timeoutMs ?? k), o.outstanding.set(e, g), b(o.outstanding, (a) => {
      a.timers.clearTimeout(a.timer), a.resolve?.({ kind: "timeout", lost: [...a.lost.keys()], lostTo: [...a.lost] }), a.resolve = null;
    });
  });
}
function jMa(e, s) {
  let r = `claim-${s}-${Math.random().toString(36).slice(2)}`, d = y(), o = { id: r, slugs: new Set(e), sentAt: s, lost: /* @__PURE__ */ new Map(), end: () => void d.pendingClaims.delete(r) };
  return d.pendingClaims.set(r, o), o;
}
function GMa(e) {
  let s = y(), r = s.outstanding.get(e);
  if (r === void 0) return [];
  return r.timers.clearTimeout(r.timer), s.outstanding.delete(e), [...r.lost];
}
function zMa(e) {
  return typeof e === "string" && y().outstanding.has(e);
}
function VMa(e, s) {
  let r = y(), d = r.outstanding.get(e.orig_msg_id);
  if (d === void 0) return false;
  if (d.expectPid !== void 0 && s !== void 0 && s !== d.expectPid) return (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "yield_answer_pid_mismatch"), false;
  d.timers.clearTimeout(d.timer);
  let o = (g) => Array.isArray(g) ? g.filter((a) => typeof a === "string" && d.asked.has(a)) : [], f = e.refused === true ? { kind: "refused" } : { kind: "yielded", yielded: o(e.yielded), notHeld: o(e.not_held) };
  if (d.resolve !== null) r.outstanding.delete(e.orig_msg_id), d.resolve({ ...f, lost: [...d.lost.keys()], lostTo: [...d.lost] });
  else {
    r.outstanding.delete(e.orig_msg_id), (0, import_chunk_cqa9hrgx.u)("artifact_live_subscribe", { yield_answer_late: true });
    try {
      d.onLate?.({ ...f, lost: [...d.lost.keys()], lostTo: [...d.lost] });
    } catch (g) {
      (0, import_chunk_k449cc64.i)(g);
    }
  }
  return true;
}
function EXs(e, s = null) {
  let r = y();
  r.holder = e, r.reverter = s;
}
function T(e, s, r, d) {
  let o = e.delivered.get(s);
  e.delivered.delete(s);
  let f = d?.pid ?? o?.pid;
  e.delivered.set(s, { slugs: /* @__PURE__ */ new Set([...o?.slugs ?? [], ...r]), pid: f, procStart: d?.procStart ?? o?.procStart });
  let g = (a, _) => {
    try {
      e.reverter?.(_, [...a.slugs]);
    } catch (m) {
      (0, import_chunk_k449cc64.i)(m);
    }
  };
  while (e.delivered.size > x) {
    let a = [...e.delivered].find(([_, m]) => _ !== s && f !== void 0 && m.pid === f);
    if (a === void 0) break;
    e.delivered.delete(a[0]), g(a[1], a[0]);
  }
  b(e.delivered, g);
}
function M(e, s) {
  if (e.delivered.size < x) return false;
  if (s === void 0) return true;
  for (let r of e.delivered.values()) if (r.pid === s) return false;
  return true;
}
function KMa() {
  return Y(y());
}
function Y(e, s) {
  let r = [];
  for (let [d, o] of [...e.delivered]) if (o.pid !== void 0 && (0, import_chunk_rb36kwbn.Wm)(o.pid)) r.push(...h(e, d, [...o.slugs], s));
  return H(e), r;
}
function qMa(e) {
  let s = y();
  for (let [r, d] of [...s.delivered]) if (d.slugs.delete(e) && d.slugs.size === 0) s.delivered.delete(r);
}
async function H(e) {
  for (let [s, r] of [...e.delivered]) {
    if (r.pid === void 0 || r.procStart === void 0) continue;
    let d;
    try {
      d = await (0, import_chunk_rb36kwbn.mS)(r.pid, r.procStart);
    } catch {
      d = void 0;
    }
    if (d === false && e.delivered.get(s) === r) (0, import_chunk_cqa9hrgx.u)("artifact_comments_autoreact", { yield_taker_reused: true }), h(e, s, [...r.slugs]);
  }
}
function h(e, s, r, d) {
  let o = e.delivered.get(s);
  if (o === void 0) return [];
  let f = [...r].filter((g) => o.slugs.delete(g));
  if (o.slugs.size === 0) e.delivered.delete(s);
  if (f.length === 0) return [];
  try {
    return e.reverter?.(s, f, d) ?? [];
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), [];
  }
}
function vXs(e, s = null) {
  let r = y();
  r.sendAnswer = e, r.ownAddress = s;
}
function D(e, s) {
  let r = s.claimed_at ?? s.sent_at, d = false, o = [...e.pendingClaims.values()];
  for (let [f, g] of e.outstanding) if (g.resolve !== null) o.push({ id: f, slugs: g.asked, sentAt: g.sentAt, lost: g.lost });
  for (let f of o) {
    if (!s.slugs.some((a) => f.slugs.has(a))) continue;
    if (r > f.sentAt || r === f.sentAt && s.from > (e.ownAddress ?? "")) {
      for (let a of s.slugs) if (f.slugs.has(a)) f.lost.set(a, s.from);
    } else d = true;
  }
  return d ? "refuse" : "proceed";
}
function TXs(e, s, r, d, o) {
  let f = r?.pid, g = r?.writeToken, a = y(), _ = a.sendAnswer;
  if (_ === null) return;
  let m;
  if (o?.refuse === true) m = "refused";
  else if (d - e.sent_at > k - 500 || e.sent_at > d + 1e3 || e.claimed_at !== void 0 && e.claimed_at > e.sent_at + 1e3) (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "yield_request_stale"), m = "refused";
  else if (D(a, e) === "refuse") m = "refused";
  else if (a.holder === null) m = { yielded: [], notHeld: [...e.slugs] };
  else try {
    if (Y(a, { transferring: new Set(e.slugs) }), M(a, r?.pid)) (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "yield_table_full"), m = "refused";
    else m = a.holder({ msgId: e.msg_id, slugs: e.slugs, reason: e.reason, requester: { cwd: e.requester?.cwd, tmux: e.requester?.tmux } });
  } catch (R) {
    (0, import_chunk_k449cc64.i)(R), (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "yield_handler_threw"), m = "refused";
  }
  let S = m === "refused" ? { orig_msg_id: e.msg_id, yielded: [], not_held: [], refused: true } : { orig_msg_id: e.msg_id, yielded: m.yielded.slice(0, ftr), not_held: m.notHeld.slice(0, ftr) }, w = m !== "refused" && m.yielded.length > 0 ? m : null;
  if (w !== null) T(a, e.msg_id, w.yielded, r);
  _(s, S, f, g).then(() => w?.onDelivered?.(), (R) => {
    if ((0, import_chunk_w578pjby.t)(`[reply-yield] answer to ${(0, import_chunk_p51r1nb3.Uk)(s)} failed: ${(0, import_chunk_p51r1nb3.XQ)(String(R))}`), w === null) return;
    if (!(0, import_chunk_p51r1nb3.vpe)(R)) {
      (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "yield_answer_send_ambiguous"), _(s, S, f, g).catch(() => {
      }), w.onDelivered?.();
      return;
    }
    (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "yield_answer_undelivered"), h(a, e.msg_id, w.yielded);
  });
}
function YMa(e, s) {
  let r = y(), d = r.delivered.get(e.orig_msg_id);
  if (d === void 0) return false;
  if (d.pid !== void 0 && s !== void 0 && s !== d.pid) return (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "unyield_pid_mismatch"), false;
  let o = h(r, e.orig_msg_id, e.slugs, { ...e.stopped === true && { stopped: new Set(e.slugs) } });
  return o.push(...Y(r)), (0, import_chunk_cqa9hrgx.u)("artifact_comments_autoreact", { yield_handed_back: o.length }), true;
}
