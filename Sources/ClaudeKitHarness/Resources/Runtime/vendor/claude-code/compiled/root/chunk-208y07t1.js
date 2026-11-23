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
var chunk_208y07t1_exports = {};
__export(chunk_208y07t1_exports, {
  $Js: () => $Js,
  ADa: () => ADa,
  Btr: () => Btr,
  CDa: () => CDa,
  CY: () => CY,
  E3r: () => E3r,
  EDa: () => EDa,
  Eue: () => Eue,
  FJs: () => FJs,
  LJs: () => LJs,
  NJs: () => NJs,
  RDa: () => RDa,
  Rqe: () => Rqe,
  SDa: () => SDa,
  TDa: () => TDa,
  Utr: () => Utr,
  Uv: () => Uv,
  Y7t: () => Y7t,
  bDa: () => bDa,
  fMe: () => fMe,
  iCn: () => iCn,
  itt: () => itt,
  jJ: () => jJ,
  kDa: () => kDa,
  mE: () => mE,
  pE: () => pE,
  q7t: () => q7t,
  u6: () => u6,
  v3r: () => v3r,
  vDa: () => vDa,
  wDa: () => wDa
});
module.exports = __toCommonJS(chunk_208y07t1_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
function Rqe(e) {
  let { wakes: t } = (0, import_chunk_0rkwgmhx.se)().wakes, n = t.get(e);
  if (!n) n = { coalesceTimer: null, rescanWanted: false, lastScanScheduledAt: 0, rescanArgs: null, newestKickAt: 0, kickSettled: true, kickCount: 0, pendingConfirm: null, pendingSeed: null, lastWakeArgs: null, inFlightScan: null, idleRescanCancel: null, idleRescanUnmuted: false, idlePassOwed: null, cancelGeneration: 0, readRetryTimer: null, readRetryAttempts: 0 }, t.set(e, n);
  return n;
}
function fMe(e) {
  for (let [t, n] of (0, import_chunk_0rkwgmhx.se)().wakes.wakes) {
    if (e !== void 0 && t !== e) continue;
    if (n.coalesceTimer) clearTimeout(n.coalesceTimer), n.coalesceTimer = null;
    if (n.rescanWanted = false, n.pendingConfirm = null, n.pendingSeed = null, n.newestKickAt = 0, n.kickSettled = true, n.lastScanScheduledAt = 0, n.rescanArgs = null, n.idleRescanCancel?.(), n.idleRescanCancel = null, n.idleRescanUnmuted = false, n.idlePassOwed = null, n.readRetryTimer) clearTimeout(n.readRetryTimer), n.readRetryTimer = null;
    n.readRetryAttempts = 0, n.cancelGeneration++;
  }
}
function iCn() {
  (0, import_chunk_0rkwgmhx.se)().wakes.scanGeneration++;
}
function Utr(e) {
  let { slugEpochs: t } = (0, import_chunk_0rkwgmhx.se)().wakes;
  t.set(e, (t.get(e) ?? 0) + 1);
}
function l(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.slugEpochs.get(e) ?? 0;
}
function jJ(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.scanGeneration + l(e);
}
function Eue(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.stopGenerations.get(e) ?? 0;
}
function i(e) {
  let { stopGenerations: t } = (0, import_chunk_0rkwgmhx.se)().wakes;
  t.set(e, (t.get(e) ?? 0) + 1);
}
function E3r(e, t) {
  let { latchChangedAt: n } = (0, import_chunk_0rkwgmhx.se)().wakes;
  if (t === void 0) n.set(e, Date.now());
  else if (Number.isFinite(t)) n.set(e, Math.min(t, Date.now()));
  else n.delete(e);
}
var a = E3r;
function LJs(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.latchChangedAt.get(e);
}
function Btr(e) {
  let { wakes: t } = (0, import_chunk_0rkwgmhx.se)();
  a(e), t.stoppedSlugs.add(e), t.sweptSlugs.delete(e), t.orphanedSweptSlugs.delete(e), i(e), t.pendingResumeDisclosure.delete(e);
}
function v3r(e) {
  let { wakes: t } = (0, import_chunk_0rkwgmhx.se)();
  if (t.stoppedSlugs.has(e)) a(e);
  t.stoppedSlugs.delete(e), t.sweptSlugs.delete(e), t.orphanedSweptSlugs.delete(e);
}
function pE(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.stoppedSlugs.has(e);
}
function mE(e) {
  let t = (0, import_chunk_0rkwgmhx.se)();
  return t.wakes.stoppedSlugs.has(e) || t.durable.stopLatches.isStopped(e);
}
function q7t(e) {
  let { wakes: t } = (0, import_chunk_0rkwgmhx.se)();
  if (!t.stoppedSlugs.has(e)) a(e), t.stoppedSlugs.add(e), t.sweptSlugs.add(e), i(e);
  else {
    let n = t.yieldedSlugs.get(e);
    if (n !== void 0) n.wasPaused = true, i(e);
  }
  t.humanTurnAtScanGeneration = null, t.liftedAtScanGeneration.delete(e), t.orphanedSweptSlugs.delete(e), t.pendingResumeDisclosure.delete(e);
}
function Uv(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.sweptSlugs.has(e);
}
function SDa() {
  return (0, import_chunk_0rkwgmhx.se)().wakes.sweptSlugs;
}
function bDa() {
  let { wakes: e } = (0, import_chunk_0rkwgmhx.se)();
  for (let t of e.sweptSlugs) e.orphanedSweptSlugs.add(t);
}
function NJs(e, t) {
  let { wakes: n } = (0, import_chunk_0rkwgmhx.se)(), o = n.yieldedSlugs.get(e);
  if (o !== void 0) {
    o.msgIds.add(t);
    return;
  }
  let r = n.sweptSlugs.has(e) && !n.orphanedSweptSlugs.has(e), s = { msgIds: /* @__PURE__ */ new Set([t]), wasPaused: r, stopGeneration: -1, scanGeneration: n.scanGeneration, announced: false, stoppedElsewhere: false, latchClockBefore: n.latchChangedAt.get(e) };
  n.yieldedSlugs.set(e, s);
  let c = n.humanTurnAtScanGeneration;
  q7t(e), n.humanTurnAtScanGeneration = c, a(e, s.latchClockBefore ?? Number.NaN), s.stopGeneration = Eue(e);
}
function wDa(e) {
  let t = (0, import_chunk_0rkwgmhx.se)().wakes.yieldedSlugs.get(e);
  if (t !== void 0) t.announced = true;
}
function kDa(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.yieldedSlugs.get(e)?.announced === true;
}
function EDa(e, t) {
  let { wakes: n } = (0, import_chunk_0rkwgmhx.se)(), o = n.yieldedSlugs.get(e);
  if (o === void 0 || !o.msgIds.delete(t) || o.msgIds.size > 0) return false;
  if (n.yieldedSlugs.delete(e), !o.wasPaused && Eue(e) === o.stopGeneration && n.scanGeneration === o.scanGeneration) v3r(e), a(e, o.latchClockBefore ?? Number.NaN);
  else a(e);
  return true;
}
function vDa(e) {
  (0, import_chunk_0rkwgmhx.se)().wakes.yieldedSlugs.delete(e);
}
function TDa(e, t) {
  let n = (0, import_chunk_0rkwgmhx.se)().wakes.yieldedSlugs.get(e);
  if (n === void 0 || !n.msgIds.has(t)) return false;
  return n.stoppedElsewhere = true, Btr(e), true;
}
function CDa(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.yieldedSlugs.get(e)?.stoppedElsewhere === true;
}
function CY(e) {
  return (0, import_chunk_0rkwgmhx.se)().wakes.yieldedSlugs.has(e);
}
function FJs(e) {
  let { wakes: t } = (0, import_chunk_0rkwgmhx.se)(), n = t.yieldedSlugs.get(e);
  return n !== void 0 && !n.wasPaused && Eue(e) === n.stopGeneration && t.scanGeneration === n.scanGeneration;
}
function itt(e) {
  let { wakes: t } = (0, import_chunk_0rkwgmhx.se)();
  return t.orphanedSweptSlugs.has(e) || t.yieldedSlugs.has(e);
}
function $Js(e) {
  let { autoReact: t, live: n, builtInArtifactHiddenForMcp: o } = (0, import_chunk_0rkwgmhx.se)(), r = n.supervisors.get(e);
  return t.userDisarmed || mE(e) || t.wakeEnabledMemo === false || (o ? r !== void 0 && !r.stopped && r.autoReactWiring === void 0 || t.artifacts.get(e)?.ruleWithheldNoted === true : (t.artifacts.get(e)?.lastProbeDeniedBy ?? null) !== null) || r !== void 0 && !r.stopped && r.armedVia === "mcp_write";
}
function d(e, t, n) {
  if (t(n), !e.summonArmOkReported) e.summonArmOkReported = true, (0, import_chunk_cqa9hrgx.u)("artifact_summon_arm_emit");
}
function p(e, t, n) {
  let o = e.activitySenders.get(t);
  if (o === void 0) return;
  let r = e.summonDeclared.get(t);
  if (n && r !== true) e.summonDeclared.set(t, true), d(e, o, "arm:0");
  else if (!n && r === true) e.summonDeclared.set(t, false), d(e, o, "arm");
}
function u6(e, t) {
  p(e, t, $Js(t));
}
function Y7t(e) {
  for (let t of e.activitySenders.keys()) u6(e, t);
}
function ADa(e, t) {
  e.summonDeclared.delete(t), u6(e, t);
}
function RDa(e, t) {
  e.summonDeclared.delete(t);
}
