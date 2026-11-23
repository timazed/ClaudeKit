const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_0tkterak_exports = {};
__export(chunk_0tkterak_exports, {
  $Zs: () => $Zs,
  $qe: () => $qe,
  ALa: () => ALa,
  BCn: () => BCn,
  BZs: () => BZs,
  CDt: () => CDt,
  CLa: () => CLa,
  Egt: () => Egt,
  FZs: () => FZs,
  GCn: () => GCn,
  HLa: () => HLa,
  ILa: () => ILa,
  MLa: () => MLa,
  OLa: () => OLa,
  PLa: () => PLa,
  PY: () => PY,
  RLa: () => RLa,
  UZs: () => UZs,
  WCn: () => WCn,
  WZs: () => WZs,
  gMe: () => gMe,
  i9r: () => i9r,
  jCn: () => jCn,
  jZs: () => jZs,
  mXt: () => mXt,
  n9r: () => n9r,
  o9r: () => o9r,
  orr: () => orr,
  pXt: () => pXt,
  r9r: () => r9r,
  rrr: () => rrr,
  s9r: () => s9r,
  t9r: () => t9r,
  vtt: () => vtt,
  xLa: () => xLa,
  xY: () => xY
});
module.exports = __toCommonJS(chunk_0tkterak_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_35s5d0tg = require("/$bunfs/root/chunk-35s5d0tg.js");
var import_chunk_j7dp96he = require("/$bunfs/root/chunk-j7dp96he.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var ge = "tengu_lantern_wick_release", Z = "tengu_lantern_wick_braid", Re = "tengu_lantern_wick_braid_text", Ae = "tengu_lantern_wick_braid_release", he = "tengu_lantern_wick_text_by_model", be = "tengu_lantern_wick_release_by_model";
function ee(e, t, n) {
  return q(e, n) ?? (0, import_chunk_865at33z.b)(t, "");
}
function q(e, t) {
  let n = (0, import_chunk_865at33z.b)(e, {});
  if (typeof n !== "object" || n === null) return;
  let o = n;
  return [t, (0, import_chunk_865at33z.St)(t), "default"].map((s) => o[s]).find((s) => typeof s === "string");
}
function te(e) {
  if ((0, import_chunk_cy0ck7w2.xoo)()) {
    let n = (0, import_chunk_kx2fp6pc.aPt)(e);
    if (n === null) {
      if (typeof e === "string" && e.trim() !== "") (0, import_chunk_cqa9hrgx.l)("usage_limit_served_text_rejected", "release_text");
      return "";
    }
    if (typeof e === "string" && n !== e.trim()) (0, import_chunk_cqa9hrgx.l)("usage_limit_served_text_altered", "release_text");
    return `[${n}]`;
  }
  let t = typeof e === "string" ? e.trim() : "";
  return t ? `[${t}]` : "";
}
function U(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type === "user" && n.usageLimitNote !== void 0) return n.usageLimitNote;
  }
  return;
}
function* CLa(e, { resumeActive: t, isMainLoop: n, querySource: o, depth: s, continuesInterruptedWork: r, model: _, toolUseContext: A, now: p, uuid: P }) {
  let { agentContext: E } = A, _e = !n && o.startsWith("agent:") && E.agentType !== "teammate" && !(E.agentType === "subagent" && E.workflowRunId);
  if (t || !(n || _e)) return e;
  let h = [];
  try {
    let R = n && s === 0 && (0, import_chunk_bzyb60p0.Eos)(e), L = R && (0, import_chunk_cy0ck7w2.cyi)();
    if (n && s === 0 && !L) (0, import_chunk_cy0ck7w2.dyi)();
    let X = false, D = false;
    if (n && (s > 0 || L)) {
      if (D = (0, import_chunk_cy0ck7w2.O8a)(), L && !D) {
        let d = U(e);
        if (d !== "wrap_up" && d !== "near_limit") (0, import_chunk_cy0ck7w2.dyi)();
      }
    }
    if (n ? D : (0, import_chunk_cy0ck7w2.cyi)() && (0, import_chunk_865at33z.b)(Z, false) === true && U(e) !== "wrap_up") {
      let d = (n ? null : (0, import_chunk_cy0ck7w2.oyi)((0, import_chunk_865at33z.b)(Re, ""))) ?? (0, import_chunk_cy0ck7w2.oyi)(ee(he, import_chunk_cy0ck7w2.m8a, _)), k = d !== null ? "custom" : (0, import_chunk_cy0ck7w2.p8a)((0, import_chunk_865at33z.b)(import_chunk_cy0ck7w2.f8a, "off"));
      if (k !== "off") {
        if (h.push((0, import_chunk_bzyb60p0.Me)({ content: d ?? (k === "next-steps" ? import_chunk_cy0ck7w2.h8a : import_chunk_cy0ck7w2.u8a), isMeta: true, turnCompanion: true, usageLimitNote: "wrap_up", now: p, uuidFn: P })), (0, import_chunk_cqa9hrgx.u)(n ? "usage_limit_grace_wrapup" : "usage_limit_grace_wrapup_subagent", { next_steps: k === "next-steps", custom: k === "custom" }), X = true, n) (0, import_chunk_cy0ck7w2.I8a)();
      }
    }
    let Y = !n || R ? (0, import_chunk_cy0ck7w2.KBe)() : null, J = Y !== null && Y.extraUsageStatus === void 0, G;
    if (n) {
      let d = s === 0 ? U(e) : void 0;
      G = !J && !r && (d === "wrap_up" || d === "near_limit");
    } else G = !J && U(e) === "wrap_up" && (0, import_chunk_865at33z.b)(Z, false) === true;
    if (G) {
      let d = (n ? "" : te((0, import_chunk_865at33z.b)(Ae, ""))) || te(ee(be, ge, _));
      if (d) h.push((0, import_chunk_bzyb60p0.Me)({ content: d, isMeta: true, turnCompanion: true, usageLimitNote: "release", now: p, uuidFn: P })), (0, import_chunk_cqa9hrgx.u)(n ? "usage_limit_grace_release" : "usage_limit_grace_release_subagent");
    }
    if (n && s > 0 && (0, import_chunk_cy0ck7w2.M8a)() && (0, import_chunk_865at33z.b)(import_chunk_cy0ck7w2.Poo, false)) {
      if (h.push((0, import_chunk_bzyb60p0.Pt)(import_chunk_cy0ck7w2._8a, import_chunk_cy0ck7w2.y8a)), !X) h.push((0, import_chunk_bzyb60p0.Me)({ content: import_chunk_cy0ck7w2.g8a, isMeta: true, turnCompanion: true, usageLimitNote: "near_limit", now: p, uuidFn: P }));
      if ((0, import_chunk_cqa9hrgx.u)("usage_limit_near_wrapup"), !(0, import_chunk_f9x2f6cx.Se)()) Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-8ccwg2ss.js"))).then(({ performRateLimitCheckpoint: d }) => d({ todos: A.getAppState().todos[A.agentId ?? (0, import_chunk_f9x2f6cx.W)()] ?? [], trigger: "near_limit" })).catch(() => {
      });
    }
  } catch (R) {
    (0, import_chunk_k449cc64.i)(R);
  }
  let O = [];
  for (let R of h) if (yield R, R.type === "user") O.push(R);
  return O.length === 0 ? e : [...e, ...O];
}
var ve = "later", H = "Your claude.ai usage limit has reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.", Ce = "tengu_lantern_wick_resume_by_model", se = "Your claude.ai usage is available again before the usage-limit reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.";
function ALa(e) {
  return e === H || e === se || mXt() && e.trim() === V().trim();
}
var ie = 3, ne = [6e4, 3e5], ye = 3e4, ke = 9e4, Ue = 18e5, Te = 216e5, we = 6e4;
function Qe() {
  return { state: { phase: "idle" }, consecutiveRearms: 0, continuationsSinceHumanPrompt: 0, humanPrompts: 0, armedAtMs: 0, armedFor: void 0, lastArmedResetsAtSeconds: 0, lastObservedMs: null, takeoverUuids: /* @__PURE__ */ new Set(), queuedBeforeArmUuids: /* @__PURE__ */ new Set(), handoffInProgress: false, dispatchingTakeoverUuids: /* @__PURE__ */ new Set(), pendingContinuationUuid: null, activeTurnClaim: null, episodeArmOrigin: "dialog", sleptThroughReset: false, confirmingMainModel: false, recheckRequestedWhileConfirming: false, armedResetKeys: /* @__PURE__ */ new Set(), autoArmDedupeResetKeys: /* @__PURE__ */ new Set(), changed: (0, import_chunk_69qhefwa.Be)(), events: (0, import_chunk_69qhefwa.Be)(), autoContinueKeyPresence: "unscanned", storageV5: void 0, unsubscribeSettingsChanges: null, unknowableRescanDelayMs: 2e3, unknowableRescanTimer: void 0, revocationRescan: "idle", revocationRescanGeneration: 0, limitsSubscriptionStarted: false, unsubscribeQuotaRejected: null, unsubscribeSessionSwitch: null };
}
var xe = new import_chunk_2904xtvq.j(Qe);
function c() {
  let e = (0, import_chunk_f9x2f6cx.N)().host, t = xe.of(e), n = import_chunk_bzyb60p0.Qnt.of(e);
  if (!n.provided) n.provide(() => g(t)), n.humanPrompts = () => t.humanPrompts, n.announceHeld = () => t.events.emit("workflow-held");
  return t;
}
function B(e, t, n = 0) {
  if (typeof e !== "number" && typeof e !== "string") return t;
  let o = Number(e);
  if (!Number.isFinite(o) || o < 0) return t;
  return Math.min(Math.max(Math.round(o), n), Te);
}
var Ie = 6e4;
function t9r() {
  return K(c());
}
function K(e) {
  return (0, import_chunk_35s5d0tg.a9r)(e.autoContinueKeyPresence);
}
function RLa(e) {
  let t = c();
  if (e === "auto_restore_cancel") return;
  if (!g(t)) return;
  x(t, "conversation_reset");
}
var Pe = 2;
async function T(e, t = Pe) {
  try {
    e.autoContinueKeyPresence = await (0, import_chunk_2yx6c1y2.IRt)("autoContinueAtUsageLimit", e.storageV5);
  } catch (n) {
    e.autoContinueKeyPresence = "unknowable", (0, import_chunk_k449cc64.i)(n);
  }
  if (e.autoContinueKeyPresence !== "unknowable") e.revocationRescan = "idle", e.revocationRescanGeneration++;
  if (clearTimeout(e.unknowableRescanTimer), e.autoContinueKeyPresence === "unknowable" && t > 0) e.unknowableRescanTimer = setTimeout((n, o) => {
    T(n, o);
  }, e.unknowableRescanDelayMs, e, t - 1), e.unknowableRescanTimer.unref?.();
}
function xLa() {
  let e = (0, import_chunk_2yx6c1y2.Lee)("autoContinueAtUsageLimit")[0]?.source;
  return e === void 0 || e === "userSettings";
}
function pXt(e) {
  return (0, import_chunk_865at33z.Rt)() && (0, import_chunk_865at33z.Sn)()?.billingType !== "usage_based" && (0, import_chunk_bzyb60p0.wx)(e) && e.dailyCapPaused !== true && !(0, import_chunk_cy0ck7w2.VBe)(e) && (0, import_chunk_35s5d0tg.DLa)();
}
function $qe() {
  return c().state;
}
function PLa() {
  let e = c();
  return e.state.phase === "armed" && e.episodeArmOrigin === "auto";
}
function ue(e) {
  let t = (0, import_chunk_cy0ck7w2.Ki)();
  if (t.status === "rejected" && t.resetsAt !== void 0) e.armedResetKeys.add(t.resetsAt);
}
function n9r(e) {
  return c().armedResetKeys.has(e);
}
function xY() {
  return c().state.phase === "armed";
}
function g(e) {
  return e.state.phase === "armed" || e.state.phase === "stale" || e.activeTurnClaim !== null || e.dispatchingTakeoverUuids.size > 0 || (0, import_chunk_bzyb60p0._C)().some((t) => w(e, t)) || (0, import_chunk_bzyb60p0.hoo)((t) => w(e, t));
}
function Ee(e) {
  return (0, import_chunk_tjdnrbvx._9)(e) && (0, import_chunk_bzyb60p0.One)(e);
}
function w(e, t) {
  return t.uuid !== void 0 && (t.uuid === e.pendingContinuationUuid || e.takeoverUuids.has(t.uuid));
}
function mXt() {
  return g(c());
}
function rrr(e) {
  return Q(c(), e);
}
function Q(e, t) {
  return t === "armed" || t === "stale" || z(e);
}
function BCn() {
  return z(c());
}
function z(e) {
  let t = e.pendingContinuationUuid;
  return t !== null && (0, import_chunk_bzyb60p0._C)().some((n) => n.uuid === t);
}
function WCn(e) {
  return e !== void 0 && e === c().pendingContinuationUuid;
}
function jCn(e) {
  return c().events.subscribe(e);
}
function orr(e) {
  return c().changed.subscribe(e);
}
function y(e, t) {
  e.state = t, e.changed.emit();
}
function Ne() {
  let e = (0, import_chunk_35s5d0tg.P3o)(), t = B(e.jitterMinMs, ye), n = Math.max(t, B(e.jitterMaxMs, ke));
  return Math.round(t + Math.random() * (n - t));
}
function Oe(e, t, n) {
  let o = e * 1e3 + Ne();
  if (t === null) return o;
  let s = ne[t] ?? ne.at(-1) ?? 0;
  return Math.max(o, n + s);
}
function FZs(e, t = Date.now(), n = "dialog", o) {
  return re(c(), e, t, n, o);
}
function re(e, t, n, o, s) {
  if (!pXt(t)) return false;
  if (pe(e, s), e.consecutiveRearms = 0, o === "dialog") e.continuationsSinceHumanPrompt = 0;
  e.takeoverUuids.clear(), e.dispatchingTakeoverUuids.clear(), e.queuedBeforeArmUuids.clear();
  for (let r of (0, import_chunk_bzyb60p0._C)()) if (Ee(r) || r.mode === "bash" && (0, import_chunk_bzyb60p0.One)(r)) r.uuid ??= (0, import_crypto.randomUUID)(), e.queuedBeforeArmUuids.add(r.uuid);
  return e.armedAtMs = n, e.armedFor = (0, import_chunk_j7dp96he.CS)(), (0, import_chunk_cqa9hrgx.u)("quota_auto_resume"), (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_offer_armed", { origin: (0, import_chunk_78g0060s.f)(o) }), ce(e, t.resetsAt ?? 0, null, n, o), e.events.emit("armed"), true;
}
function $Zs(e, t = Date.now(), n) {
  let o = c();
  if (!pXt(e)) return false;
  if (o.handoffInProgress) return false;
  if (!K(o) || !(0, import_chunk_35s5d0tg.l9r)()) return false;
  if ((0, import_chunk_865at33z.Na)()) return false;
  let s = e.resetsAt ?? 0;
  if (s * 1e3 - t > import_chunk_bzyb60p0.PPn) return false;
  if (je(e.rateLimitType, (0, import_chunk_865at33z.dt)())) return false;
  if (g(o) || o.autoArmDedupeResetKeys.has(s)) return false;
  if (o.continuationsSinceHumanPrompt >= ie) return me(o, s, "continuation_cap"), false;
  if (!re(o, e, t, "auto", n)) return false;
  return o.events.emit("auto-armed"), true;
}
function OLa(e, t, n = Date.now(), o) {
  try {
    let s = e && t === "completed" ? (0, import_chunk_cy0ck7w2.dfr)(n) : null;
    if (s === null) return false;
    let r = c();
    if (g(r)) return fe(r, s, "main_thread"), r.state.phase === "armed" && r.state.resetsAtSeconds === s.resetsAt;
    return $Zs(s, n, o);
  } catch (s) {
    return (0, import_chunk_k449cc64.i)(s), false;
  }
}
function ce(e, t, n, o, s = "dialog") {
  I(e), e.episodeArmOrigin = s, e.lastArmedResetsAtSeconds = t, e.autoArmDedupeResetKeys.add(t), e.armedResetKeys.add(t), ue(e), e.activeTurnClaim = null, e.sleptThroughReset = false, e.lastObservedMs = o;
  let r = Oe(t, n, o);
  (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_armed", { resets_in_sec: Math.max(0, Math.round(t - o / 1e3)), rearm: n === null ? 0 : n + 1 }), y(e, { phase: "armed", resetsAtSeconds: t, fireAtMs: r, consecutiveRearms: e.consecutiveRearms });
}
function CDt() {
  Le(c());
}
function gMe(e) {
  return (...t) => {
    let n = e(...t);
    if (n !== false) CDt();
    return n;
  };
}
async function Le(e) {
  if (e.state.phase !== "armed") return;
  if (e.confirmingMainModel) {
    e.recheckRequestedWhileConfirming = true;
    return;
  }
  e.confirmingMainModel = true;
  try {
    for (; ; ) {
      if (e.recheckRequestedWhileConfirming = false, (0, import_chunk_865at33z.cde)((0, import_chunk_865at33z.Ld)()) !== null) return;
      let t = (0, import_chunk_865at33z.dt)(), n = e.state, o = await (0, import_chunk_cy0ck7w2.$tn)(t, void 0, e.storageV5);
      if (e.state.phase !== "armed" || S(e, true)) return;
      if (e.recheckRequestedWhileConfirming || (0, import_chunk_865at33z.dt)() !== t || e.state !== n) continue;
      if (o === null || !Ke(o)) return;
      We(e);
      return;
    }
  } catch (t) {
    (0, import_chunk_k449cc64.i)(t);
  } finally {
    e.confirmingMainModel = false;
  }
}
function We(e) {
  de(e, se), (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_fired", { rearm: e.consecutiveRearms, waited_ms: Math.max(0, Math.round(Date.now() - e.armedAtMs)), early: 1 }), e.lastObservedMs = null, y(e, { phase: "idle" }), e.events.emit("fired-now");
}
function De(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
      return true;
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return false;
  }
}
function Ge(e) {
  switch (e) {
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return true;
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
      return false;
  }
}
function PY(e) {
  x(c(), e);
}
function x(e, t) {
  if (g(e)) ue(e);
  if (Ge(t)) e.autoArmDedupeResetKeys.clear();
  let n = Q(e, e.state.phase);
  if (C(e) && e.state.phase === "idle") (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_cancelled", { reason: (0, import_chunk_78g0060s.f)(t) });
  if (M(e, t), n && De(t)) e.events.emit("cancelled");
}
var r9r = { background_handoff: "Automatic continue cancelled \xB7 this session moved to the background, so the task will not resume on its own when the usage limit resets", relaunch: "Automatic continue cancelled \xB7 Claude Code relaunched during the wait, so the task will not resume on its own when the usage limit resets (send a prompt then to continue)", desktop_handoff: "Automatic continue cancelled \xB7 this session moved to Claude Desktop, so the task will not resume on its own when the usage limit resets (continue it there)", cloud_handoff: "Automatic continue cancelled \xB7 sending this session to the cloud, so the task will not resume here on its own when the usage limit resets (continue it in the cloud session)", process_exit: "Automatic continue cancelled \xB7 Claude Code exited during the wait, so the task will not resume on its own when the usage limit resets (send a prompt after the reset to continue)" };
function o9r(e) {
  let t = c();
  if (t.handoffInProgress = true, !g(t)) return false;
  let n = Q(t, t.state.phase);
  return x(t, e), n;
}
function Egt() {
  c().handoffInProgress = false;
}
function s9r(e, { dispatching: t = false, isTyped: n = false } = {}) {
  let o = c();
  if (o.continuationsSinceHumanPrompt = 0, n && (!(0, import_chunk_865at33z.wa)() || (0, import_chunk_865at33z.dm)() || (0, import_chunk_865at33z.XGn)())) o.humanPrompts++;
  if (!g(o)) return;
  if (le(o), o.takeoverUuids.add(e), t) o.dispatchingTakeoverUuids.add(e);
  o.changed.emit();
}
function I(e, { keepIfDrained: t = false } = {}) {
  if (e.pendingContinuationUuid === null) return false;
  let n = e.pendingContinuationUuid, o = (0, import_chunk_bzyb60p0.rS)((s) => s.uuid === n).length > 0;
  if (o || !t) e.pendingContinuationUuid = null, e.changed.emit();
  return o;
}
function qe(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "setting_off":
    case "manual_submit":
    case "conversation_reset":
    case "killswitch":
    case "rearm_cap":
    case "continuation_cap":
    case "horizon_exceeded":
    case "continuation_dropped":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return true;
    case "fired":
    case "stale":
      return false;
  }
}
function M(e, t) {
  if (e.state.phase === "idle") return;
  if (qe(t)) (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_cancelled", { reason: (0, import_chunk_78g0060s.f)(t) });
  y(e, { phase: "idle" });
}
function UZs(e, t) {
  let n = c();
  if (n.state.phase !== "armed" || S(n, (n.lastObservedMs ?? e) < n.state.fireAtMs + we)) return "idle";
  let o = n.lastObservedMs ?? n.state.fireAtMs;
  n.lastObservedMs = e;
  let s = e - o, r = B((0, import_chunk_35s5d0tg.P3o)().graceMs, Ue, Ie);
  if (s > r && e >= n.state.fireAtMs) n.sleptThroughReset = true;
  if (t || e < n.state.fireAtMs || (0, import_chunk_35s5d0tg.irr)(n.armedFor) === "missing") return "pending";
  if (n.sleptThroughReset) return n.sleptThroughReset = false, (0, import_chunk_cqa9hrgx.l)("quota_auto_resume", "stale"), (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_stale", { late_by_ms: Math.round(e - n.state.fireAtMs) }), y(n, { phase: "stale" }), n.events.emit("stale"), "stale";
  return de(n), (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_fired", { rearm: n.state.consecutiveRearms, waited_ms: Math.max(0, Math.round(e - n.armedAtMs)) }), M(n, "fired"), "fired";
}
function V() {
  let e = q(Ce, (0, import_chunk_865at33z.dt)());
  if ((0, import_chunk_cy0ck7w2.xoo)()) {
    let t = (0, import_chunk_kx2fp6pc.aPt)(e);
    if (t === null || /[/@]/.test(t) || import_chunk_bq31aqv6.iU.includes(t) || (0, import_chunk_bq31aqv6.bWe)(t) !== t) {
      if (e !== void 0 && e.trim() !== "") (0, import_chunk_cqa9hrgx.l)("usage_limit_served_text_rejected", "resume_prompt");
      return H;
    }
    if (e !== void 0 && t !== e.trim()) (0, import_chunk_cqa9hrgx.l)("usage_limit_served_text_altered", "resume_prompt");
    return t;
  }
  return e !== void 0 && e.trim() !== "" ? e : H;
}
function de(e, t = V()) {
  I(e), e.continuationsSinceHumanPrompt++;
  let n = (0, import_crypto.randomUUID)();
  e.pendingContinuationUuid = n, e.activeTurnClaim = null, e.changed.emit(), (0, import_chunk_bzyb60p0.HO)({ agentId: (0, import_chunk_f9x2f6cx.ot)(), mode: "prompt", priority: ve, value: t, uuid: n, origin: { kind: "auto-continuation" }, isMeta: true, skipSlashCommands: true, workload: import_chunk_xfj2cwfv.xhe });
}
function BZs() {
  return WZs() ? V() : null;
}
function WZs() {
  let e = c();
  return e.state.phase === "stale" && !S(e);
}
function ILa(e) {
  let t = c(), n = t.pendingContinuationUuid;
  if (n === null || !e.some((o) => o.uuid === n)) return e;
  if (!S(t)) return e;
  return e.filter((o) => o.uuid !== n);
}
function Fe(e) {
  if (e.episodeArmOrigin !== "auto" || K(e)) return e.revocationRescan = "idle", false;
  if ((0, import_chunk_35s5d0tg.srr)() === void 0 && e.autoContinueKeyPresence === "unknowable") {
    if (e.revocationRescan === "idle") {
      e.revocationRescan = "pending";
      let t = ++e.revocationRescanGeneration;
      return T(e).finally(() => {
        if (e.revocationRescan === "pending" && t === e.revocationRescanGeneration) e.revocationRescan = "done";
      }), false;
    }
    if (e.revocationRescan === "pending") return false;
  }
  return e.revocationRescan = "idle", true;
}
function S(e, t = false) {
  if (!(0, import_chunk_35s5d0tg.vgt)()) return v(e, "killswitch"), true;
  if (Fe(e)) return v(e, "setting_off"), true;
  let n = (0, import_chunk_35s5d0tg.irr)(e.armedFor);
  if (n === "other" || n === "missing" && !t) return e.autoArmDedupeResetKeys.clear(), v(e, "login_changed"), true;
  return false;
}
function le(e) {
  if (I(e, { keepIfDrained: true }), e.state.phase === "stale") (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_stale_resumed", {}), e.lastObservedMs = null, M(e, "stale");
  else if (e.state.phase === "armed") e.lastObservedMs = null, M(e, "manual_submit");
}
function v(e, t) {
  (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_cancelled", { reason: (0, import_chunk_78g0060s.f)(t) }), C(e), y(e, { phase: "idle" }), e.events.emit(t === "horizon_exceeded" ? "horizon-exceeded" : t === "rearm_cap" || t === "continuation_cap" ? "cap-exhausted" : t === "login_changed" ? "login-changed" : "disabled");
}
function me(e, t, n) {
  (0, import_chunk_cqa9hrgx.m)("quota_auto_resume", n), e.autoArmDedupeResetKeys.add(t), v(e, n);
}
function He(e, t) {
  return e.episodeArmOrigin === "auto" && t * 1e3 - Date.now() > import_chunk_bzyb60p0.PPn;
}
function MLa(e) {
  let t = c();
  for (let p of e.turnUuids) t.dispatchingTakeoverUuids.delete(p);
  if (e.isHumanTakeover) t.continuationsSinceHumanPrompt = 0;
  let n = t.pendingContinuationUuid !== null && e.turnUuids.includes(t.pendingContinuationUuid), o = e.turnUuids.some((p) => t.takeoverUuids.has(p)), s = Q(t, t.state.phase) || n, r = e.isHumanTakeover && !o && e.humanCommandUuids.length > 0 && e.humanCommandUuids.every((p) => p !== void 0 && t.queuedBeforeArmUuids.has(p)), _ = null;
  if (r && !n) return null;
  if (r) _ = "continuation";
  else if (e.isHumanTakeover && (o || s)) _ = "takeover", le(t);
  else if (n) _ = "continuation";
  if (_ === null) return null;
  if (t.activeTurnClaim !== null) (0, import_chunk_k449cc64.i)(Error("quota auto-resume: a turn claimed the episode while another claim was outstanding"));
  let A = { kind: _, queried: e.willQuery };
  return t.activeTurnClaim = A, t.changed.emit(), A;
}
function HLa(e, t) {
  let n = c();
  for (let r of t) n.dispatchingTakeoverUuids.delete(r);
  if (e !== null) {
    if (e !== n.activeTurnClaim) return;
    if (n.activeTurnClaim = null, n.changed.emit(), n.state.phase !== "idle") return;
    if ((0, import_chunk_bzyb60p0._C)().some((r) => w(n, r))) return;
    if (C(n), e.kind === "continuation" && !e.queried) oe(n);
    return;
  }
  let o = n.pendingContinuationUuid !== null && t.includes(n.pendingContinuationUuid);
  if ((o || t.some((r) => n.takeoverUuids.has(r))) && n.state.phase === "idle" && n.activeTurnClaim === null && !(0, import_chunk_bzyb60p0._C)().some((r) => w(n, r))) {
    if (C(n), o) oe(n);
  }
}
function oe(e) {
  (0, import_chunk_cqa9hrgx.m)("quota_auto_resume", "continuation_dropped"), (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_cancelled", { reason: (0, import_chunk_78g0060s.f)("continuation_dropped") }), e.events.emit("continuation-dropped");
}
function C(e) {
  e.consecutiveRearms = 0, e.lastArmedResetsAtSeconds = 0, e.episodeArmOrigin = "dialog", e.revocationRescan = "idle", e.revocationRescanGeneration++, e.takeoverUuids.clear(), e.dispatchingTakeoverUuids.clear(), e.queuedBeforeArmUuids.clear(), e.lastObservedMs = null, e.activeTurnClaim = null;
  let t = I(e);
  return e.changed.emit(), t;
}
function Ke(e) {
  return e.status !== "rejected" || e.isUsingOverage === true || e.overageInUse === true;
}
function fe(e, t, n) {
  if (!(0, import_chunk_bzyb60p0.wx)(t) || t.dailyCapPaused === true || !(0, import_chunk_35s5d0tg.zCn)()) return;
  let o = t.resetsAt ?? 0;
  if (g(e) && GCn(t.rateLimitType, (0, import_chunk_865at33z.dt)())) e.autoArmDedupeResetKeys.add(o);
  if (e.state.phase === "armed") {
    if (o * 1e3 > e.state.fireAtMs && GCn(t.rateLimitType, (0, import_chunk_865at33z.dt)())) F(e, o, null);
    return;
  }
  if (z(e)) return;
  if (e.state.phase === "stale") return;
  let s = e.activeTurnClaim;
  if (s === null) return;
  if (n !== "main_thread") return;
  if (s.kind === "takeover") {
    if (e.consecutiveRearms = 0, F(e, GCn(t.rateLimitType, (0, import_chunk_865at33z.dt)()) ? o : e.lastArmedResetsAtSeconds, null) && e.episodeArmOrigin === "auto") e.events.emit("taken-over");
    return;
  }
  if ((0, import_chunk_cy0ck7w2.VBe)(t) && e.episodeArmOrigin === "dialog") {
    (0, import_chunk_y53wbr8a.a)("tengu_quota_auto_resume_cancelled", { reason: (0, import_chunk_78g0060s.f)("no_limit_named") }), C(e);
    return;
  }
  if (e.continuationsSinceHumanPrompt >= ie) {
    me(e, o, "rearm_cap");
    return;
  }
  let r = e.consecutiveRearms;
  e.consecutiveRearms++, F(e, o, r);
}
function F(e, t, n) {
  if (S(e, true)) return false;
  if (He(e, t)) return v(e, "horizon_exceeded"), false;
  return ce(e, t, n, Date.now(), e.episodeArmOrigin), e.events.emit("rearmed"), true;
}
function je(e, t) {
  if (e !== "seven_day_opus" && e !== "seven_day_sonnet") return false;
  if (GCn(e, t)) return false;
  let n = (0, import_chunk_865at33z.cde)((0, import_chunk_865at33z.Ld)());
  if (e === "seven_day_opus" && n === "opus") return false;
  if (e === "seven_day_sonnet" && n === "sonnet") return false;
  return true;
}
function GCn(e, t) {
  switch (e) {
    case "five_hour":
    case "seven_day":
    case "overage":
      return true;
    case "seven_day_opus":
      return (0, import_chunk_865at33z.hNe)((0, import_chunk_865at33z.St)(t));
    case "seven_day_sonnet":
      return (0, import_chunk_865at33z.kKi)((0, import_chunk_865at33z.St)(t));
    case "seven_day_overage_included": {
      if ((0, import_chunk_865at33z.F9)(t)) return true;
      let n = (0, import_chunk_865at33z.DA)((0, import_chunk_865at33z.jt)(t));
      if (n === null) return false;
      let o = n.toLowerCase();
      return (0, import_chunk_cy0ck7w2.X3e)().some((s) => s.toLowerCase() === o);
    }
    case void 0:
      return false;
  }
  return false;
}
function i9r(e, t) {
  return GCn(e.rateLimitType, t) || (0, import_chunk_865at33z.St)(e.model, { identity: true }) === (0, import_chunk_865at33z.St)(t, { identity: true });
}
function jZs(e) {
  pe(c(), e);
}
function pe(e, t) {
  if (e.limitsSubscriptionStarted) return;
  e.limitsSubscriptionStarted = true, e.storageV5 = t, e.unsubscribeQuotaRejected = (0, import_chunk_cy0ck7w2.Ioo)((n, o) => fe(e, n, o)), T(e), e.unsubscribeSettingsChanges = import_chunk_trq47kfh.Ti.subscribe(() => {
    T(e);
  }), e.unsubscribeSessionSwitch = (0, import_chunk_f9x2f6cx.Bp)((n, o) => {
    if (vtt(o)) x(e, "conversation_reset"), e.handoffInProgress = false;
  });
}
function vtt(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "remote_attach":
      return true;
    case "fork":
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return false;
  }
}
