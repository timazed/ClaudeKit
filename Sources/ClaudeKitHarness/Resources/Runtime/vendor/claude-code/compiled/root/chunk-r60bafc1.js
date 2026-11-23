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
var chunk_r60bafc1_exports = {};
__export(chunk_r60bafc1_exports, {
  A1i: () => A1i,
  AEt: () => AEt,
  C1i: () => C1i,
  CEt: () => CEt,
  E1i: () => E1i,
  NT: () => NT,
  Pc: () => Pc,
  S1i: () => S1i,
  T1i: () => T1i,
  Wyo: () => Wyo,
  Z8e: () => Z8e,
  _1i: () => _1i,
  _kr: () => _kr,
  b1i: () => b1i,
  bys: () => bys,
  dat: () => dat,
  eUn: () => eUn,
  g1i: () => g1i,
  gkr: () => gkr,
  hkr: () => hkr,
  hql: () => hql,
  jyo: () => jyo,
  k1i: () => k1i,
  kys: () => kys,
  mkr: () => mkr,
  n2e: () => n2e,
  tUn: () => tUn,
  v1i: () => v1i,
  vre: () => vre,
  w1i: () => w1i,
  wys: () => wys,
  y1i: () => y1i
});
module.exports = __toCommonJS(chunk_r60bafc1_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
function f(e, o) {
  let n = (0, import_chunk_t39bs2jr.jo)().dropSenderWriterByHandle;
  if (e !== null && e !== o) {
    let r = n.get(e);
    if (r) (0, import_chunk_53snsm3k.jEo)(r);
  }
  if (o !== null && o !== e && !o.outboundOnly) {
    let r = n.get(o);
    if (!r) r = (d) => {
      o.writeSdkMessages([d]);
    }, n.set(o, r);
    (0, import_chunk_53snsm3k.WEo)(r);
  }
}
function u(e) {
  if (e !== null && e?.outboundOnly !== true) (0, import_chunk_f9x2f6cx.en)().recordLastingEvent("RemoteControlLinked");
}
function mkr(e, o) {
  let n = (0, import_chunk_t39bs2jr.jo)(), r = g(e);
  u(e);
  let d = n.sdkHostedHandle;
  n.sdkHostedHandle = r, (0, import_chunk_865at33z.axo)(r ? (0, import_chunk_t39bs2jr.mm)(r.bridgeSessionId) : null, o).catch(() => {
  }), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, f(d, r);
}
function NT() {
  return (0, import_chunk_t39bs2jr.jo)().sdkHostedHandle;
}
function bys(e) {
  (0, import_chunk_t39bs2jr.jo)().foreignSwitchGuard = e;
}
async function eUn(e) {
  await (0, import_chunk_t39bs2jr.jo)().foreignSwitchGuard?.(e);
}
function Wyo(e, o) {
  let n = (0, import_chunk_t39bs2jr.jo)(), r = g(e);
  u(e);
  let d = n.replHandle;
  n.replHandle = r, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, f(d, r);
  let l = r ? (0, import_chunk_t39bs2jr.mm)(r.bridgeSessionId) : void 0;
  if (l !== void 0) import_chunk_c203g5kd.s.set("CLAUDE_CODE_BRIDGE_SESSION_ID", l);
  else import_chunk_c203g5kd.s.unset("CLAUDE_CODE_BRIDGE_SESSION_ID");
  (0, import_chunk_865at33z.axo)(l ?? null, o).catch(() => {
  });
}
function Pc() {
  return (0, import_chunk_t39bs2jr.jo)().replHandle;
}
function Z8e() {
  return Pc() !== null || NT() !== null;
}
function wys(e, o) {
  let n = (0, import_chunk_t39bs2jr.jo)();
  if (n.retiredHandles.add(e), n.replHandle === e) Wyo(null, o);
  if (n.sdkHostedHandle === e) mkr(null, o);
}
function CEt(e, o) {
  let n = (0, import_chunk_t39bs2jr.jo)(), r = n.replHandle ?? n.sdkHostedHandle;
  if (!r || r.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let d = (0, import_chunk_xcgcdx61.Qc)(e);
  if (n.lastReportedPermissionMode === d) return;
  n.lastReportedPermissionMode = d, r.reportMetadata({ permission_mode: d, ...o !== void 0 && { is_ultraplan_mode: o } });
}
function g1i() {
  let e = (0, import_chunk_t39bs2jr.jo)();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) CEt(e.lastKnownPermissionMode);
}
function _1i() {
  return (0, import_chunk_t39bs2jr.jo)().lastKnownPermissionMode;
}
function y1i(e, o, n) {
  u(), (0, import_chunk_f9x2f6cx.en)().recordLastingEvent("RemoteControlInput");
  let r = (0, import_chunk_t39bs2jr.k3)(e);
  if (!r) (0, import_chunk_w578pjby.t)("[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface", { level: "warn" });
  (0, import_chunk_t39bs2jr.jo)().supervisedBridgeSession = r ? { bridgeSessionId: e, owner: n, storageV5: o, selfTitle: void 0 } : null, (0, import_chunk_865at33z.axo)(r ? (0, import_chunk_t39bs2jr.mm)(e) : null, o).catch(() => {
  });
}
function hkr() {
  return (0, import_chunk_t39bs2jr.jo)().supervisedBridgeSession?.bridgeSessionId;
}
function S1i(e) {
  let o = (0, import_chunk_t39bs2jr.jo)().supervisedBridgeSession;
  if (o === null || Pc() !== null || NT() !== null) return;
  if (o.selfTitle = p(e), o.selfTitle !== void 0) (0, import_chunk_865at33z.$zn)(o.selfTitle, o.storageV5).catch(import_chunk_k449cc64.i);
}
function p(e) {
  return typeof e === "string" && (0, import_chunk_xfj2cwfv.iT)(e) !== "" ? e : void 0;
}
function a(e) {
  let o = hql(), n = (0, import_chunk_t39bs2jr.jo)(), r = n.peerIdentityKey;
  if (r !== null && r.host === e && r.credential === o) return r;
  let d = { host: e, credential: o };
  return n.peerIdentityKey = d, d;
}
function hql() {
  let { sameOwnerAccount: e } = require("/$bunfs/root/chunk-3n4jnb8b.js"), o = y(), n = (0, import_chunk_t39bs2jr.jo)(), r = n.walkCredentialKey;
  if (r !== null && e(r.owner, o)) return r;
  let d = { owner: o };
  return n.walkCredentialKey = d, d;
}
function y() {
  let { sessionsApiBearerFingerprint: e, isConsoleProfileSessionsCredential: o } = require("/$bunfs/root/chunk-s4watcfw.js"), { getStoredOauthAccountInfo: n } = require("/$bunfs/root/chunk-3n4jnb8b.js"), { getWIFAccountInfo: r } = require("/$bunfs/root/chunk-qe6fet48.js"), { env: d } = require("/$bunfs/root/chunk-48fpz2bp.js"), l = e();
  return { accountUuid: l ? `bearer:${l}` : void 0, organizationUuid: o() ? r()?.organizationUuid?.trim() || void 0 : d.CLAUDE_CODE_ORGANIZATION_UUID || n()?.organizationUuid };
}
async function b1i({ refresh: e, credentials: o }) {
  let { isCrossSessionMessagingEnabled: n } = require("/$bunfs/root/chunk-31ewt8qk.js");
  if (!n()) return;
  if (!(Pc() !== null || NT() !== null || (0, import_chunk_t39bs2jr.jo)().supervisedBridgeSession !== null)) {
    let { hasCloudPeerAccess: S } = require("/$bunfs/root/chunk-4h7ssxnk.js");
    if (!S()) return;
  }
  let { primeSessionsApiBearer: d } = require("/$bunfs/root/chunk-s4watcfw.js"), l = d({ refresh: e, credentials: o }).catch(() => {
  });
  if (e) {
    await l;
    return;
  }
  let { withDeadline: m } = require("/$bunfs/root/chunk-et2qhyh1.js");
  await m(l, w);
}
var w = 750;
function vre() {
  let e = Pc() ?? NT();
  if (e) return { key: a(e), bridgeSessionId: e.bridgeSessionId, selfTitle: e.selfTitle, live: (0, import_chunk_f9x2f6cx.Od)() };
  let o = (0, import_chunk_t39bs2jr.jo)().supervisedBridgeSession;
  return o ? { key: a(o), bridgeSessionId: o.bridgeSessionId, selfTitle: o.selfTitle, live: true } : null;
}
function tUn(e) {
  let o = (0, import_chunk_t39bs2jr.jo)(), n = o.replHandle ?? o.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  o.lastKnownCrossSessionInbound = e;
  let r = e ? "available" : "unavailable";
  if (o.lastReportedCrossSessionInbound === r) return;
  o.lastReportedCrossSessionInbound = r, n.reportMetadata({ cross_session_inbound: r });
}
function w1i() {
  let e = (0, import_chunk_t39bs2jr.jo)();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) tUn(e.lastKnownCrossSessionInbound);
}
function c(e) {
  let o = (0, import_chunk_t39bs2jr.jo)(), n = o.replHandle ?? o.sdkHostedHandle, r = o.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || r === null || r()) return;
  o.lastKnownPostTurnSummary = e, n.reportMetadata({ post_turn_summary: e });
}
function dat(e, o) {
  if (e?.notifyMetadataChanged({ post_turn_summary: o }), e?.onMetadataChanged) return;
  try {
    c(o);
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
  }
}
function k1i() {
  (0, import_chunk_t39bs2jr.jo)().lastKnownPostTurnSummary = null;
}
function E1i() {
  let e = (0, import_chunk_t39bs2jr.jo)().lastKnownPostTurnSummary;
  if (e) c(e);
}
function n2e(e) {
  let o = (0, import_chunk_t39bs2jr.jo)(), n = o.replHandle ?? o.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (o.lastKnownModel = e, o.lastReportedModel === e) return;
  o.lastReportedModel = e, n.reportMetadata({ model: e });
}
function v1i() {
  let e = (0, import_chunk_t39bs2jr.jo)();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) n2e(e.lastKnownModel);
}
function T1i() {
  (0, import_chunk_t39bs2jr.jo)().contextUsageMirror?.resend();
}
function kys(e, o) {
  let n = (0, import_chunk_t39bs2jr.jo)(), r = n.replHandle ?? n.sdkHostedHandle, d = (0, import_chunk_w578pjby._)(e);
  if (!r || r.outboundOnly || r.noHistoryBackfill || o() || n.lastReportedArtifacts === d || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = d, n.artifactsEgressSuppressed = o, r.reportMetadata({ artifacts: e.length === 0 ? null : e });
}
function C1i() {
  let e = (0, import_chunk_t39bs2jr.jo)();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) kys(e.lastKnownArtifacts, e.artifactsEgressSuppressed);
}
function jyo() {
  let e = vre();
  return e ? (0, import_chunk_t39bs2jr.mm)(e.bridgeSessionId) : void 0;
}
function gkr() {
  let e = jyo();
  return e ? (0, import_chunk_xfj2cwfv.BNe)(e) : void 0;
}
function _kr() {
  let e = Pc();
  return e && !e.outboundOnly ? (0, import_chunk_t39bs2jr.mm)(e.bridgeSessionId) : void 0;
}
function A1i() {
  return vre()?.selfTitle;
}
function AEt(e, o) {
  let n = Pc() ?? NT();
  if (n && (0, import_chunk_t39bs2jr.Un)(n.bridgeSessionId) === (0, import_chunk_t39bs2jr.Un)(e)) n.selfTitle = p(o);
}
function g(e) {
  return e !== null && (0, import_chunk_t39bs2jr.jo)().retiredHandles.has(e) ? null : e;
}
