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
var chunk_qh0nzvn2_exports = {};
__export(chunk_qh0nzvn2_exports, {
  Aue: () => Aue,
  D3o: () => D3o,
  F$: () => F$,
  RDt: () => RDt,
  XLa: () => XLa,
  YLa: () => YLa,
  eei: () => eei,
  frr: () => frr,
  g9r: () => g9r,
  qLa: () => qLa,
  tei: () => tei,
  urr: () => urr,
  xDt: () => xDt,
  yMe: () => yMe,
  yXt: () => yXt
});
module.exports = __toCommonJS(chunk_qh0nzvn2_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_69q893ed = require("/$bunfs/root/chunk-69q893ed.js");
var import_chunk_15rtfjxv = require("/$bunfs/root/chunk-15rtfjxv.js");
var C = require("/$bunfs/root/chunk-08xt8741.js"), yXt = 60, Aue = 3600, RDt = (0, import_chunk_69qhefwa.Be)(), D3o = (0, import_chunk_69qhefwa.Be)(), F = 6e5, x = 1200, D = 1;
function urr(e, o) {
  (0, import_chunk_y53wbr8a.a)("tengu_loop_ended", { reason: (0, import_chunk_78g0060s.f)(e), ...o }), (0, import_chunk_f9x2f6cx.LLo)(true), (0, import_chunk_f9x2f6cx.L3n)();
}
function qLa() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return (0, import_chunk_865at33z.b)("tengu_kairos_loop_keepalive", false);
}
function g9r(e, o, n, i, r) {
  return E(e, o, { viaKeepalive: false, reason: n, toolUseId: i, owner: { caller: r } });
}
function YLa(e, o) {
  if ((0, import_chunk_f9x2f6cx.VNs)() >= D) return (0, import_chunk_w578pjby.t)("[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"), urr("model_stopped", { via_keepalive: true }), null;
  return E(x, e, { viaKeepalive: true, owner: { rearmedFor: o } });
}
function frr() {
  (0, import_chunk_f9x2f6cx.LLo)(false), (0, import_chunk_f9x2f6cx.L3n)(), D3o.emit();
}
function yMe() {
  let e = (0, import_chunk_f9x2f6cx.c3t)(), o = (0, import_chunk_f9x2f6cx.eu)().filter((i) => i.kind === "loop"), n = (0, import_chunk_f9x2f6cx.jge)();
  if ((0, import_chunk_f9x2f6cx.Gyn)(null), (0, import_chunk_f9x2f6cx.YNr)(0), (0, import_chunk_f9x2f6cx.J8)(o.map((i) => i.id)), o.length === 0) w();
  for (let i of o) (0, import_chunk_f9x2f6cx.d3t)(i.prompt);
  if (n !== null) (0, import_chunk_f9x2f6cx.d3t)(n);
  if (D3o.emit(), e) return (0, import_chunk_w578pjby.t)("[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed"), o.length;
  return (0, import_chunk_w578pjby.t)(`[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${n !== null ? ", tick in flight" : ""})`), urr("model_stopped", { via_keepalive: false }), (0, import_chunk_cqa9hrgx.u)("loop_schedule_wakeup"), o.length;
}
function E(e, o, n) {
  let { viaKeepalive: i, reason: r, toolUseId: p, owner: d } = n;
  if (!i) (0, import_chunk_f9x2f6cx.YNr)(0);
  let c = T(), m = Date.now(), _ = (0, import_chunk_f9x2f6cx.Lla)(o), S = _ !== void 0 && m > _.lastScheduledFor + Aue * 1e3, g = _ === void 0 || S ? m : _.startedAt, L = (0, import_chunk_69q893ed.yW)().recurringMaxAgeMs;
  if (L > 0 && m - g >= L) {
    if (!_?.agedOut) (0, import_chunk_f9x2f6cx.zNs)(o, { startedAt: g, lastScheduledFor: m - (Aue - yXt) * 1e3, agedOut: true }), (0, import_chunk_y53wbr8a.a)("tengu_loop_dynamic_wakeup_aged_out", { loop_age_ms: m - g, max_age_ms: L }), urr("aged_out", { via_keepalive: i }), (0, import_chunk_cqa9hrgx.l)("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null;
  }
  let { clamped: h, wasClamped: k, targetMs: v, createdAt: M } = P(e);
  if (A({ targetMs: v, createdAt: M, prompt: o, reason: r, chainStartedAt: g, viaKeepalive: i, toolUseId: p, owner: d }), i) return (0, import_chunk_f9x2f6cx.YNr)((0, import_chunk_f9x2f6cx.VNs)() + 1), (0, import_chunk_w578pjby.t)(`[loop] keepalive armed (model did not reschedule): ${h}s fallback`), (0, import_chunk_y53wbr8a.a)("tengu_loop_keepalive_fired", { clamped_delay_seconds: h, prompt_is_sentinel: C.isLoopDefaultSentinel(o) }), (0, import_chunk_cqa9hrgx.l)("loop_schedule_wakeup", "model_no_reschedule"), { scheduledFor: v, clampedDelaySeconds: h, wasClamped: k };
  return (0, import_chunk_w578pjby.t)(`[loop] dynamic wakeup scheduled: ${h}s${k ? ` (clamped from ${e}s)` : ""}${r !== void 0 ? ` \u2014 ${r}` : ""}`), (0, import_chunk_y53wbr8a.a)("tengu_loop_dynamic_wakeup_scheduled", { chosen_delay_seconds: Number.isFinite(e) ? e : 0, clamped_delay_seconds: h, was_clamped: k, reason_length: r?.length ?? 0, superseded_count: c }), (0, import_chunk_cqa9hrgx.u)("loop_schedule_wakeup"), { scheduledFor: v, clampedDelaySeconds: h, wasClamped: k };
}
function XLa({ scheduledFor: e, prompt: o, reason: n, chainStartedAt: i, plugin: r }) {
  let p = Date.now();
  if (e <= p || F$()) return;
  A({ targetMs: e, createdAt: Math.max(p, e - 6e4), prompt: o, reason: n, chainStartedAt: Math.min(i, p), viaKeepalive: false, toolUseId: void 0, owner: { rearmedFor: r } }), (0, import_chunk_w578pjby.t)(`[loop] re-armed pending wakeup for ${new Date(e).toISOString()} after resume`);
}
function A({ targetMs: e, createdAt: o, prompt: n, reason: i, chainStartedAt: r, viaKeepalive: p, toolUseId: d, owner: c }) {
  let m = "rearmedFor" in c ? c.rearmedFor : (0, import_chunk_xfj2cwfv.yXe)(c.caller);
  if ((0, import_chunk_f9x2f6cx.IQe)({ id: O(), cron: tei(e), prompt: n, createdAt: o, kind: "loop", scheduledFor: e, reason: i, ...p && { keepalive: true }, ...m !== void 0 && { plugin: m } }), (0, import_chunk_f9x2f6cx.zNs)(n, { startedAt: r, lastScheduledFor: e }), (0, import_chunk_f9x2f6cx.GOe)(true), (0, import_chunk_f9x2f6cx.LLo)(false), d !== void 0) (0, import_chunk_f9x2f6cx.N3n)({ toolUseId: d, scheduledFor: e, chainStartedAt: r });
}
function P(e) {
  let o;
  if (Number.isNaN(e)) o = yXt;
  else if (e === 1 / 0) o = Aue;
  else if (e === -1 / 0) o = yXt;
  else o = Math.round(e);
  let n = Math.max(yXt, Math.min(Aue, o)), i = !Number.isFinite(e) || o !== n, r = Date.now(), p = r + n * 1e3, d = eei(p), c = (0, import_chunk_69q893ed.yW)().cacheLeadMs;
  if (c > 0 && n * 1e3 <= import_chunk_0kyr8hth.kdo) {
    let _ = import_chunk_0kyr8hth.kdo - c;
    while (d - r > _ && d - 6e4 >= r + yXt * 1e3) d -= 6e4;
  }
  if (c > 0) {
    let _ = (0, import_chunk_f9x2f6cx.UB)() ?? r, g = (r - _ <= F ? Math.min(r, _) : r) + import_chunk_15rtfjxv.SR - c;
    while (d > g && d - 6e4 >= r + yXt * 1e3) d -= 6e4;
  }
  let m = p < d ? p : d - 1;
  return { clamped: n, wasClamped: i, targetMs: d, createdAt: m };
}
function eei(e) {
  return Math.ceil(e / 6e4) * 6e4;
}
function tei(e) {
  let o = new Date(e);
  return `${o.getMinutes()} ${o.getHours()} * * *`;
}
function O() {
  return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
}
function T() {
  let e = (0, import_chunk_f9x2f6cx.eu)().filter((o) => o.kind === "loop").map((o) => o.id);
  if (e.length === 0) return 0;
  return (0, import_chunk_f9x2f6cx.J8)(e);
}
function w() {
  (0, import_chunk_f9x2f6cx.N3n)(void 0);
}
function F$() {
  return (0, import_chunk_f9x2f6cx.eu)().some((e) => e.kind === "loop");
}
function xDt() {
  let e = (0, import_chunk_f9x2f6cx.eu)().filter((n) => n.kind === "loop"), o = (0, import_chunk_f9x2f6cx.jge)();
  if ((0, import_chunk_f9x2f6cx.Gyn)(null), (0, import_chunk_f9x2f6cx.YNr)(0), e.length === 0) w();
  if (e.length === 0 && o === null) return 0;
  (0, import_chunk_f9x2f6cx.J8)(e.map((n) => n.id));
  for (let n of e) (0, import_chunk_f9x2f6cx.d3t)(n.prompt);
  if (o !== null) (0, import_chunk_f9x2f6cx.d3t)(o);
  return (0, import_chunk_w578pjby.t)(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`), urr("user_abort", { loops_cancelled: e.length }), (0, import_chunk_cqa9hrgx.u)("loop_cancel_all"), RDt.emit(), e.length;
}
