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
var chunk_6gdq9za5_exports = {};
__export(chunk_6gdq9za5_exports, {
  $Qn: () => $Qn,
  A$e: () => A$e,
  BQn: () => BQn,
  DQn: () => DQn,
  F6r: () => F6r,
  FQn: () => FQn,
  HQn: () => HQn,
  LQn: () => LQn,
  MQn: () => MQn,
  M_e: () => M_e,
  NQn: () => NQn,
  S3s: () => S3s,
  Svn: () => Svn,
  Tet: () => Tet,
  UQn: () => UQn,
  _3s: () => _3s,
  _vn: () => _vn,
  aYt: () => aYt,
  bvn: () => bvn,
  dYt: () => dYt,
  f3s: () => f3s,
  fRa: () => fRa,
  g3s: () => g3s,
  h3s: () => h3s,
  iYt: () => iYt,
  kht: () => kht,
  kvn: () => kvn,
  lYt: () => lYt,
  m3s: () => m3s,
  p3s: () => p3s,
  pRa: () => pRa,
  sYt: () => sYt,
  wvn: () => wvn,
  xzo: () => xzo,
  y3s: () => y3s,
  yvn: () => yvn
});
module.exports = __toCommonJS(chunk_6gdq9za5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
function _vn() {
  return (0, import_chunk_865at33z.b)("tengu_harbor_kite_mode_emit", true);
}
function N() {
  switch (xzo().decidedBy) {
    case "policySettings":
      return "managed-setting";
    case "repoSettings":
      return "repo-setting";
    case "invalidSetting":
      return "invalid-setting";
    case "flagSettings":
    case "userSettings":
    case void 0:
      return "explicit-setting";
  }
}
var m = { accept: 0, hold: 1, refuse: 2 }, B = 100, j = 1e4, C = new Set(import_chunk_pbteexar.LE);
function MQn(e) {
  if (e !== null) (0, import_chunk_mvszxaxb.Zo)().inbound.shuttingDown = false, D(), (0, import_chunk_mvszxaxb.Zo)().inbound.modeAtUnwire = void 0;
  else {
    let n = (0, import_chunk_mvszxaxb.Zo)().inbound.getCurrentMode;
    if (n !== null) try {
      (0, import_chunk_mvszxaxb.Zo)().inbound.modeAtUnwire = n();
    } catch {
      (0, import_chunk_mvszxaxb.Zo)().inbound.modeAtUnwire = void 0;
    }
  }
  if ((0, import_chunk_mvszxaxb.Zo)().inbound.getCurrentMode = e, e !== null) A$e("mode-changed");
}
function HQn(e) {
  (0, import_chunk_mvszxaxb.Zo)().inbound.onPeerHeld = e;
}
function f3s(e) {
  (0, import_chunk_mvszxaxb.Zo)().inbound.sendPeerReceipt = e;
}
function fRa(e, n) {
  (0, import_chunk_mvszxaxb.Zo)().inbound.sendPeerReceipt?.({ mode: "prompt", agentId: (0, import_chunk_f9x2f6cx.ot)(), value: "", origin: e }, n);
}
function sYt(e) {
  let n = (0, import_chunk_mvszxaxb.Zo)().inbound;
  if (n.publishAvailability = e, n.unsubscribeAvailabilityRefresh?.(), n.unsubscribeAvailabilityRefresh = null, e) yvn(), n.unsubscribeAvailabilityRefresh = (0, import_chunk_865at33z.ys)(yvn);
}
function yvn() {
  (0, import_chunk_mvszxaxb.Zo)().inbound.publishAvailability?.(bvn() === void 0);
}
function p3s(e) {
  (0, import_chunk_mvszxaxb.Zo)().inbound.recordCorrespondent = e;
}
var G = 750;
function D() {
  if ((0, import_chunk_mvszxaxb.Zo)().inbound.shutdownSettleHandle === null) (0, import_chunk_mvszxaxb.Zo)().inbound.shutdownSettleHandle = (0, import_chunk_w578pjby.Ct)(DQn);
}
async function DQn() {
  let e = (0, import_chunk_mvszxaxb.Zo)().inbound;
  if (e.shutdownSettleHandle?.(), e.shutdownSettleHandle = null, e.shuttingDown = true, e.held.length === 0) return;
  let n = e.held.splice(0, e.held.length);
  (0, import_chunk_w578pjby.t)(`[cross-session-inbound] shutdown: settling ${n.length} still-held peer message(s) as expired`);
  let o = [];
  for (let s of n) (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "session_ended"), o.push(e.sendPeerReceipt?.(s, "expired")), e.onPeerHoldDropped?.(s, "expired");
  await Promise.race([Promise.allSettled(o), (0, import_chunk_5appeerh.K)(G, void 0, { unref: true })]);
}
function m3s(e) {
  let { inbound: n } = (0, import_chunk_mvszxaxb.Zo)();
  return n.held.includes(e) ? n.announced.get(e) : void 0;
}
function LQn(e) {
  (0, import_chunk_mvszxaxb.Zo)().inbound.onPeerHoldDropped = e;
}
function NQn(e) {
  (0, import_chunk_mvszxaxb.Zo)().inbound.onPeerHoldReleased = e;
}
function M_e() {
  return xzo().value;
}
function xzo() {
  let e, n;
  for (let o of ["policySettings", "flagSettings", "userSettings"]) {
    if (!(0, import_chunk_xzvhvaa2.rn)(o)) continue;
    let s = (0, import_chunk_2yx6c1y2._e)(o)?.crossSessionInbound;
    if (s !== void 0) {
      e = s, n = o;
      break;
    }
  }
  for (let o of ["localSettings", "projectSettings"]) {
    if (!(0, import_chunk_xzvhvaa2.rn)(o)) continue;
    let s = (0, import_chunk_2yx6c1y2._e)(o)?.crossSessionInbound;
    if (s === void 0) continue;
    if (m[s] > m[e ?? "accept"]) e = s, n = "repoSettings";
    else if (s !== "accept" && e !== void 0 && m[s] === m[e] && n !== "policySettings") n = "repoSettings";
  }
  if (m[e ?? "accept"] < m.hold && T()) e = "hold", n = "invalidSetting";
  return { value: e, decidedBy: n };
}
function T() {
  return (0, import_chunk_2yx6c1y2._p)().errors.some((e) => e.path === import_chunk_6mfepmbb.qMs && e.severity === "warning" && !e.statusOnly);
}
function g(e) {
  switch (e) {
    case "accept":
      return { policy: "accept" };
    case "hold":
      return { policy: "hold", holdCause: N() };
    case "refuse":
      return { policy: "refuse", refuseCause: "opt-out" };
  }
}
function E() {
  return (0, import_chunk_znn7ks07.Hl)("receive") ? void 0 : { policy: "refuse", refuseCause: "kill-switch" };
}
function H() {
  let e = E();
  if (e) return e;
  let n = M_e();
  if (n !== void 0) return g(n);
  let o = P();
  if (o === null) return { policy: "hold", holdCause: "mode-unknown" };
  if (!C.has(o.mode)) return (0, import_chunk_w578pjby.t)(`[cross-session-inbound] unrecognized permission mode '${o.mode}' (fail-closed \u2192 hold)`), { policy: "hold", holdCause: "mode-unknown" };
  return R(o) ? { policy: "hold", holdCause: "bypass-default" } : { policy: "accept" };
}
function v(e) {
  let n = E();
  if (n) return n;
  return k(e, false);
}
function M(e) {
  return k(e, true);
}
function k(e, n) {
  let o = M_e();
  if (o !== void 0) return g(o);
  if (e?.selfSent) return { policy: "accept" };
  let s = P();
  if (s === null || !C.has(s.mode)) {
    if (s !== null) (0, import_chunk_w578pjby.t)(`[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed \u2192 hold)`);
    return { policy: "hold", holdCause: "mode-unknown" };
  }
  let r = aYt(s), c = n || _vn() ? e?.fromMode : void 0;
  if (c !== void 0) return c === r ? { policy: "accept" } : A("mode-mismatch", e);
  return r === "bypass" ? A("no-mode-asserted", e) : { policy: "accept" };
}
function iYt() {
  return (0, import_chunk_865at33z.b)("tengu_eager_sutton", false);
}
function A(e, n) {
  if (!iYt()) return { policy: "hold", holdCause: e };
  let o = FQn();
  return o === "anyone" && n?.sender !== void 0 || o === "mine" && n?.sender === "mine" ? { policy: "accept" } : { policy: "hold", holdCause: e };
}
function FQn() {
  let e = (0, import_chunk_mvszxaxb.Zo)().inbound.alwaysDeliver;
  return e?.madeIn === "prompting" && $Qn() === "bypass" ? "paused" : e?.scope;
}
function F6r(e) {
  let { inbound: n } = (0, import_chunk_mvszxaxb.Zo)();
  n.endAlwaysDeliver();
  let o = (0, import_chunk_f9x2f6cx.W)();
  n.alwaysDeliver = e && { ...e, stopWatching: (0, import_chunk_f9x2f6cx.Bp)((s) => {
    if (s !== o) n.endAlwaysDeliver();
  }) }, A$e("always-deliver");
}
function $Qn() {
  let e = P();
  return e === null ? "bypass" : aYt(e);
}
function h3s(e) {
  return iYt() ? (0, import_chunk_mvszxaxb.Zo)().inbound.senders.get(e) : void 0;
}
function R(e) {
  return e.mode === "bypassPermissions" || (0, import_chunk_xcgcdx61.OM)(e.mode, e.isBypassPermissionsModeAvailable);
}
function aYt(e) {
  return R(e) ? "bypass" : "prompting";
}
function kht() {
  return H().policy;
}
function g3s(e) {
  return v(e).policy;
}
function P() {
  let e = (0, import_chunk_mvszxaxb.Zo)().inbound.getCurrentMode;
  if (e === null) return (0, import_chunk_w578pjby.t)("[cross-session-inbound] permission-mode getter not wired (fail-closed \u2192 hold)"), null;
  try {
    return e();
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`[cross-session-inbound] mode getter threw (${(0, import_chunk_jv7av99m.d)(n)}; fail-closed \u2192 hold)`), null;
  }
}
function _3s() {
  if (M_e() !== void 0) return false;
  let e = P();
  if (e === null || !C.has(e.mode)) return false;
  return R(e);
}
function UQn(e, n) {
  if (n !== void 0) (0, import_chunk_mvszxaxb.Zo)().inbound.senders.set(e, n);
  return _(e, v(y(e)));
}
function y(e) {
  let n = e.origin;
  if (!n || n.kind !== "peer") return;
  return { fromMode: n.fromMode, selfSent: n.selfSent, sender: h3s(e) };
}
function O(e, n = "caller") {
  let o;
  if (e.priority === "later") {
    let { priority: s, ...r } = e;
    o = (0, import_chunk_bzyb60p0.Mos)(r, { receipt: n });
  } else o = (0, import_chunk_bzyb60p0.Mos)(e, { receipt: n });
  if (!o.admitted) {
    if (n === "caller-retries" && (o.reason === "rate-limited" || o.reason === "queue-full")) return "no-room-yet";
    return (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "dropped_on_release"), (0, import_chunk_mvszxaxb.Zo)().inbound.sendPeerReceipt?.(e, "dropped", { dropReason: o.reason, droppedMsgIds: [] }), false;
  }
  return (0, import_chunk_mvszxaxb.Zo)().inbound.recordCorrespondent?.(e), true;
}
function _(e, n) {
  let o = (0, import_chunk_mvszxaxb.Zo)().inbound;
  switch (yvn(), n.policy) {
    case "accept":
      return x("policy-accepts"), (0, import_chunk_cqa9hrgx.u)("peer_inbound_gate"), "accept";
    case "refuse":
      return Tet(n.refuseCause === "kill-switch" ? h(e) : `crossSessionInbound=refuse: ${h(e)}`, n.refuseCause), o.sendPeerReceipt?.(e, "refused"), "refused";
    case "hold": {
      let { holdCause: s } = n;
      if (o.shuttingDown) return (0, import_chunk_w578pjby.t)(`[cross-session-inbound] shutdown: not parking a late peer message \u2014 settled as expired: ${h(e)}`), o.sendPeerReceipt?.(e, "expired"), (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "shutdown_expired"), "refused";
      if (o.held.length >= B) {
        let r = o.held.shift();
        if (r) (0, import_chunk_w578pjby.t)(`[cross-session-inbound] hold buffer full \u2014 evicted oldest as expired: ${h(r)}`), (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "evicted"), o.sendPeerReceipt?.(r, "expired"), o.onPeerHoldDropped?.(r, "expired");
      }
      if (o.held.push(e), D(), (0, import_chunk_w578pjby.t)(`[cross-session-inbound] held inbound peer message (${o.held.length} held, cause=${s}): ${h(e)}`), (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", s === "mode-mismatch" ? `held_${y(e)?.fromMode}_sender` : `held_${s.replaceAll("-", "_")}`), o.onPeerHeld) o.onPeerHeld(e, o.held.length, s), o.announced.set(e, s);
      return o.sendPeerReceipt?.(e, "held"), "held";
    }
  }
}
function BQn(e) {
  if (!e) return "ungated";
  if (e.kind === "peer") return "hostInjected" in e && e.hostInjected === true ? "host-injected" : "peer";
  if (e.kind === "task-notification" && "subkind" in e && e.subkind === "peer-send-message") return "coordinator";
  return "ungated";
}
function lYt({ ingressOrigin: e, inboundOrigin: n, envelopePeer: o = false }) {
  return o || BQn(e) !== "ungated" && !q(e) || n === import_chunk_865at33z.tO;
}
function q(e) {
  return !!e && e.kind === "peer" && !("hostInjected" in e && e.hostInjected === true) && "inbound_origin" in e && e.inbound_origin === import_chunk_865at33z.vNe;
}
function Svn(e, n) {
  switch (BQn(e)) {
    case "peer":
      return UQn(n, "other");
    case "host-injected":
      return y3s(n);
    case "coordinator":
      return U(n);
    case "ungated":
      return "accept";
  }
}
function dYt(e) {
  switch (BQn(e)) {
    case "peer":
      return bvn();
    case "coordinator":
    case "host-injected":
      return M_e() === "refuse" ? "opt-out" : void 0;
    case "ungated":
      return;
  }
}
function bvn() {
  let e = H();
  if (e.policy !== "refuse") return;
  return e.refuseCause;
}
function L() {
  let e = M_e();
  return e !== void 0 ? g(e) : { policy: "accept" };
}
function U(e) {
  let n = M_e();
  if (n === void 0) return "accept";
  return _(e, g(n));
}
function y3s(e) {
  return _(e, M(y(e)));
}
function Tet(e, n) {
  if (yvn(), n === "kill-switch") {
    (0, import_chunk_w578pjby.t)(`[cross-session-inbound] refused inbound peer message \u2014 cross-session messaging disabled (kill switch) (${e})`), (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "kill_switch");
    return;
  }
  if (n === "declared-peer-deny-list") {
    (0, import_chunk_w578pjby.t)(`[cross-session-inbound] refused host-declared peer message \u2014 its frame states disallowed_tools, which a peer's turn cannot hold (${e})`, { level: "error" }), (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "declared_peer_deny_list");
    return;
  }
  (0, import_chunk_w578pjby.t)(`[cross-session-inbound] refused inbound peer message (${e})`), (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "refused");
}
function A$e(e) {
  if ((M_e() ?? "accept") !== "accept") (0, import_chunk_mvszxaxb.Zo)().inbound.endAlwaysDeliver();
  return yvn(), x(e);
}
function F(e) {
  switch (BQn(e.origin)) {
    case "coordinator":
      return L();
    case "host-injected":
      return M(y(e));
    case "peer":
    case "ungated":
      return v(y(e));
  }
}
function x(e) {
  let n = (0, import_chunk_mvszxaxb.Zo)().inbound, o = n.held;
  if (o.length === 0) return 0;
  let s = [], r = [], c = [], p = 0, S = 0;
  for (let i of o) {
    let a = F(i);
    if (a.policy === "accept") r.push(i);
    else if (a.policy === "refuse") {
      if (p += 1, a.refuseCause === "kill-switch") S += 1;
      (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "refused_after_hold"), n.sendPeerReceipt?.(i, "refused"), n.onPeerHoldDropped?.(i, "refused");
    } else if (s.push(i), n.waitedForRoom.delete(i), n.announced.get(i) !== a.holdCause) c.push([i, a.holdCause]);
  }
  o.length = 0, o.push(...s);
  for (let [i, a] of c) n.announced.set(i, a), n.onPeerHeld?.(i, o.length, a);
  if (p > 0) (0, import_chunk_w578pjby.t)(S === p ? `[cross-session-inbound] gate off \u2014 dropped ${p} parked peer message(s) (cross-session messaging disabled)` : `[cross-session-inbound] dropped ${p} held peer message(s) \u2014 policy is now refuse`);
  if (r.length === 0) return 0;
  let f = [], w = [], I = false;
  for (let i of r) {
    let a = O(i, iYt() ? "caller-retries" : "caller");
    if (a === "no-room-yet") o.push(i), w.push(i), n.announced.delete(i), I ||= !n.waitedForRoom.has(i), n.waitedForRoom.add(i), n.retryRelease ??= setTimeout((Q) => {
      Q.retryRelease = void 0, x("queue-has-room");
    }, j, n).unref();
    else if (a) f.push(i), (0, import_chunk_cqa9hrgx.u)("peer_inbound_gate");
    else n.onPeerHoldDropped?.(i, "dropped");
  }
  if ((0, import_chunk_w578pjby.t)(`[cross-session-inbound] released ${r.length} held peer message(s) (${e}) \u2014 ${f.length} admitted by the ingress guard; ${o.length} still held`), f.length > 0 || I) n.onPeerHoldReleased?.(f, f.every((i) => n.waitedForRoom.has(i)) ? "queue-has-room" : e, w);
  for (let i of f) n.sendPeerReceipt?.(i, "delivered");
  return r.length;
}
function wvn(e, n) {
  let o = (0, import_chunk_mvszxaxb.Zo)().inbound, s = o.held.indexOf(e);
  if (s === -1) return "gone";
  let [r] = o.held.splice(s, 1);
  if (!r) return "gone";
  if (n === "approve") {
    let p = F(r);
    if (p.policy === "refuse") {
      let f = p.refuseCause === "kill-switch";
      return (0, import_chunk_w578pjby.t)(`[cross-session-inbound] held peer message approved but policy is now refuse (${f ? "kill switch" : "opt-out"}) \u2014 dropped`), (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", "refused_after_hold"), o.sendPeerReceipt?.(r, "refused"), o.onPeerHoldDropped?.(r, "refused"), "dropped";
    }
    if (!O(r)) return (0, import_chunk_w578pjby.t)("[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release"), o.onPeerHoldDropped?.(r, "dropped"), "dropped-by-guard";
    return (0, import_chunk_w578pjby.t)("[cross-session-inbound] held peer message APPROVED \u2014 released to queue"), (0, import_chunk_cqa9hrgx.u)("peer_inbound_gate"), o.onPeerHoldReleased?.([r], "approved", []), o.sendPeerReceipt?.(r, "delivered"), "delivered";
  }
  (0, import_chunk_w578pjby.t)(`[cross-session-inbound] held peer message ${n === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} \u2014 dropped with denial receipt`);
  let c = n === "deny" ? "denied" : "expired";
  return (0, import_chunk_cqa9hrgx.l)("peer_inbound_gate", c), o.sendPeerReceipt?.(r, c), "dropped";
}
function pRa() {
  return (0, import_chunk_mvszxaxb.Zo)().inbound.held;
}
function kvn() {
  return (0, import_chunk_mvszxaxb.Zo)().inbound.held.length;
}
function S3s() {
  return (0, import_chunk_mvszxaxb.Zo)().inbound.shuttingDown;
}
function h(e) {
  let n = e.origin?.kind === "peer" && typeof e.origin.from === "string" ? e.origin.from : "unknown", o = typeof e.value === "string" ? e.value : "[blocks]";
  return `from=${(0, import_chunk_p51r1nb3.Uk)(n)} "${(0, import_chunk_p51r1nb3.Uk)(o, 60)}"`;
}
