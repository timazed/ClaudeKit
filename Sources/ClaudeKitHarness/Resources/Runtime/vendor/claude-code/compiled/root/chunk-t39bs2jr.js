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
var chunk_t39bs2jr_exports = {};
__export(chunk_t39bs2jr_exports, {
  D_n: () => D_n,
  Gna: () => Gna,
  Mw: () => Mw,
  O0r: () => O0r,
  P0r: () => P0r,
  Pu: () => Pu,
  TI: () => TI,
  Un: () => Un,
  Vna: () => Vna,
  Zoe: () => Zoe,
  jna: () => jna,
  jo: () => jo,
  k3: () => k3,
  mm: () => mm,
  zna: () => zna
});
module.exports = __toCommonJS(chunk_t39bs2jr_exports);
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_jwwzbnen = require("/$bunfs/root/chunk-jwwzbnen.js");
class t {
  filterPolicy = void 0;
  dropNotifier = void 0;
  senderDropWriter = void 0;
  malformedConfigReported = false;
  knownInboundRequestIds = /* @__PURE__ */ new Set();
  knownOutboundRequestIds = /* @__PURE__ */ new Set();
  automatedOutboundRequestIds = /* @__PURE__ */ new Set();
  deviceOutboundRequestIds = /* @__PURE__ */ new Set();
  elicitationOutboundRequestIds = /* @__PURE__ */ new Set();
  hostAskOutboundRequestIds = /* @__PURE__ */ new Set();
  filePartOutboundRequestIds = /* @__PURE__ */ new Set();
  resolvedPromptRequestIds = /* @__PURE__ */ new Set();
  recentDropEventIds = /* @__PURE__ */ new Set();
  commandDropNoticeWindow = { start: 0, count: 0 };
  messageDropNoticeWindow = { start: 0, count: 0 };
  reportedStrayDropCodes = /* @__PURE__ */ new Set();
  reportedCloudWorkerCodes = /* @__PURE__ */ new Set();
  clearWindowsForTesting() {
    this.knownInboundRequestIds.clear(), this.knownOutboundRequestIds.clear(), this.automatedOutboundRequestIds.clear(), this.deviceOutboundRequestIds.clear(), this.elicitationOutboundRequestIds.clear(), this.hostAskOutboundRequestIds.clear(), this.filePartOutboundRequestIds.clear(), this.resolvedPromptRequestIds.clear(), this.recentDropEventIds.clear(), this.commandDropNoticeWindow.start = 0, this.commandDropNoticeWindow.count = 0, this.messageDropNoticeWindow.start = 0, this.messageDropNoticeWindow.count = 0;
  }
  resetForTesting() {
    this.filterPolicy = void 0, this.dropNotifier = void 0, this.senderDropWriter = void 0, this.malformedConfigReported = false, this.clearWindowsForTesting(), this.reportedStrayDropCodes.clear(), this.reportedCloudWorkerCodes.clear();
  }
}
class r {
  outboundPeers = /* @__PURE__ */ new Set();
  outboundPosts = /* @__PURE__ */ new Set();
  subscriberStarted = false;
  subscriberStopping = false;
  liveSocket = null;
  enqueuePeerMessage = null;
  getCurrentMode = null;
  enqueueReceiveNotice = null;
  connectFailureStreak = null;
  outageWakeSent = false;
  identity = null;
  identityResolved = null;
  identityFailedClosed = null;
  stagedReceiveState = null;
  inboundRefused = null;
  restoredPeers = /* @__PURE__ */ new Map();
  repliesAwaitingConsent = /* @__PURE__ */ new Map();
  resumeCursor = null;
  resumeSeedUs = null;
  lastCursor = null;
  entriesInFlight = 0;
  replyAwaitsPublish = false;
  lastArmedSendAtMs = null;
  onReceiveStateChanged = null;
}
class s {
  held = /* @__PURE__ */ new Map();
  settled = [];
  reporter = void 0;
  sessionId = void 0;
  resetForTesting() {
    this.held.clear(), this.settled.length = 0, this.reporter = void 0, this.sessionId = void 0;
  }
}
class o {
  settled = void 0;
  inFlight = void 0;
  askedAt = Number.NEGATIVE_INFINITY;
  resetForTesting() {
    this.settled = void 0, this.inFlight = void 0, this.askedAt = Number.NEGATIVE_INFINITY;
  }
}
class i {
  checkouts = null;
  baseRefs = null;
  onMetadataChanged = null;
  lastEmittedBranches = {};
  report = null;
  reset() {
    this.checkouts = null, this.baseRefs = null, this.onMetadataChanged = null, this.lastEmittedBranches = {}, this.report = null;
  }
}
class d {
  attestation = new t();
  replHandle = null;
  foreignSwitchGuard = void 0;
  sdkHostedHandle = null;
  projectFilesDoor = null;
  supervisedBridgeSession = null;
  peerIdentityKey = null;
  walkCredentialKey = null;
  retiredHandles = /* @__PURE__ */ new WeakSet();
  lastReportedPermissionMode = void 0;
  lastKnownPermissionMode = void 0;
  lastReportedEffort = void 0;
  lastKnownEffort = void 0;
  lastReportedUltracodeActive = void 0;
  lastKnownUltracodeActive = void 0;
  lastKnownEffortRequestId = void 0;
  lastReportedModel = void 0;
  lastKnownModel = void 0;
  contextUsageMirror = void 0;
  tokenUsageMirror = void 0;
  lastReportedArtifacts = void 0;
  lastKnownArtifacts = void 0;
  artifactsEgressSuppressed = void 0;
  lastReportedCrossSessionInbound = void 0;
  lastKnownCrossSessionInbound = void 0;
  lastKnownPostTurnSummary = void 0;
  remoteEgressSuppressed = null;
  lastRateLimitMirror = void 0;
  lastAttachLimitRecheckAtMs = { allowed_warning: 0, rejected: 0 };
  dropSenderWriterByHandle = /* @__PURE__ */ new WeakMap();
  livePreviewByHandle = /* @__PURE__ */ new WeakMap();
  isLivePreviewOffByPerson = false;
  livePreviewEndedShares = [];
  antproto = new r();
  bridgeStateFramesGate = void 0;
  cseShimGate = void 0;
  placeholderWriteChain = Promise.resolve();
  placeholderSweepStarted = false;
  rcActiveImpressionRecorded = false;
  verboseRcActive = void 0;
  teleportedSessionIds = /* @__PURE__ */ new Set();
  endedSessions = /* @__PURE__ */ new Map();
  nameTagWriteChain = Promise.resolve();
  latestAppliedName = /* @__PURE__ */ new Map();
  connectTimeName = /* @__PURE__ */ new Map();
  diagnosticPolicyKick = void 0;
  bearerPlanFetch = void 0;
  remoteControlLockReason = void 0;
  uploadLimitTold = void 0;
  sessionUploadRoute = void 0;
  uploadResends = { underWay: 0, lastFailedAtMs: void 0 };
  imageScaleLock = (0, import_chunk_gjzwg6ck.Yee)();
  historySpoolDir = null;
  historyPrefetchEntries = /* @__PURE__ */ new Map();
  repoCheckouts = new i();
  inboundReadReceipts = new s();
  registryPolicyReask = new o();
}
var jna = new import_chunk_2904xtvq.j(() => new d());
function jo() {
  return jna.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Zoe(e) {
  if (!e.startsWith("cse_")) return e;
  return "session_" + e.slice(4);
}
var a = /^[a-zA-Z0-9_-]+$/;
function Mw(e, n) {
  if (!TI(e)) throw Error(`Invalid ${n}: contains unsafe characters`);
  return e;
}
function TI(e) {
  return e !== "" && a.test(e);
}
function P0r(e) {
  return TI(e) && !e.startsWith("-");
}
function Gna(e) {
  jo().cseShimGate = e;
}
function mm(e) {
  if (!e.startsWith("cse_")) return e;
  let n = jo().cseShimGate;
  if (n && !n()) return e;
  return Zoe(e);
}
function D_n(e) {
  return `remote-${e.slice(-8)}`;
}
function Pu(e) {
  if (!e.startsWith("session_")) return e;
  return "cse_" + e.slice(8);
}
function zna(e) {
  return (0, import_chunk_kr68f0mb.Nce)(Pu(e));
}
function O0r(e, n) {
  return e.startsWith("cse_") ? Pu(n) : mm(n);
}
function Un(e) {
  return e.replace(/^(?:session|cse)_/, "");
}
function k3(e) {
  return (e.startsWith("session_") || e.startsWith("cse_")) && TI(e) && Un(e) !== "";
}
function Vna(e) {
  let n = mm(e);
  return (0, import_chunk_jwwzbnen.sve)(n) === n ? n : null;
}
