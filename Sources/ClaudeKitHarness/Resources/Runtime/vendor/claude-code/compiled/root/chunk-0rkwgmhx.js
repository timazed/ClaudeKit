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
var chunk_0rkwgmhx_exports = {};
__export(chunk_0rkwgmhx_exports, {
  A$i: () => A$i,
  BEt: () => BEt,
  Jkr: () => Jkr,
  R$i: () => R$i,
  SSo: () => SSo,
  Xkr: () => Xkr,
  Ykr: () => Ykr,
  adn: () => adn,
  ayl: () => ayl,
  cyl: () => cyl,
  dyl: () => dyl,
  fyl: () => fyl,
  idn: () => idn,
  iyl: () => iyl,
  lM: () => lM,
  ldn: () => ldn,
  lyl: () => lyl,
  pyl: () => pyl,
  se: () => se,
  uyl: () => uyl,
  v0: () => v0,
  wRe: () => wRe,
  z7: () => z7
});
module.exports = __toCommonJS(chunk_0rkwgmhx_exports);
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_crypto = require("crypto");
class a {
  #e = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  note(e, t, n) {
    if (this.#n.has(e)) return;
    let s = this.#e.get(e);
    if (s !== void 0) {
      if (s.has(t)) return;
      if (s.size >= 4) {
        this.#t(e);
        return;
      }
      s.set(t, n);
      return;
    }
    if (this.#e.size >= 256) {
      let d = 128;
      for (let r of this.#e.keys()) if (this.#t(r), --d === 0) break;
    }
    this.#e.set(e, /* @__PURE__ */ new Map([[t, n]]));
  }
  #t(e) {
    this.#e.delete(e), this.#n.add(e);
  }
  take(e, t) {
    let n = this.#e.get(e);
    return this.#e.delete(e), n?.get(t);
  }
}
class p {
  #e;
  #n;
  #t;
  #r = false;
  constructor(e, t, n) {
    this.#e = e, this.#n = t, this.#t = n;
  }
  settle(e) {
    if (this.#r) return;
    if (this.#r = true, this.#e.get(this.#n) !== this.#t) return;
    if (this.#t.pending--, e.wasWatching || e.teardown !== "unsent") this.#t.confirmed = true;
    if (this.#t.pending === 0 && !this.#t.confirmed) this.#e.delete(this.#n);
  }
}
class l {
  #e = /* @__PURE__ */ new Map();
  #n = 1;
  #t = /* @__PURE__ */ new Set();
  #r = new a();
  isStopped(e) {
    return this.#e.has(e);
  }
  stoppedSlugs() {
    return this.#e.keys();
  }
  latchGeneration(e) {
    return this.#e.get(e)?.generation;
  }
  recordStop(e) {
    this.#t.delete(e);
    let t = this.#e.get(e);
    if (t === void 0) t = { pending: 0, confirmed: false, generation: this.#n++ }, this.#e.set(e, t);
    else t.generation = this.#n++;
    return t.pending++, new p(this.#e, e, t);
  }
  reaffirmStop(e) {
    this.#t.delete(e);
    let t = this.#e.get(e);
    if (t === void 0) this.confirmStop(e);
    else t.confirmed = true;
  }
  confirmStop(e) {
    this.#t.delete(e);
    let t = this.#e.get(e);
    if (t === void 0) this.#e.set(e, { pending: 0, confirmed: true, generation: this.#n++ });
    else t.confirmed = true, t.generation = this.#n++;
  }
  noteRelatchAsk(e, t) {
    this.#r.note(e, t, this.latchGeneration(t));
  }
  takeRelatchAsk(e, t) {
    return this.#r.take(e, t);
  }
  clearByApprovedRewatch(e, t) {
    let n = this.#e.get(e);
    if (n === void 0 || n.generation !== t) return;
    this.#e.delete(e), this.#t.add(e);
  }
  noteApprovedWatch(e) {
    if (!this.#e.has(e)) this.#t.add(e);
  }
  wasClearedByRewatch(e) {
    return this.#t.has(e) && !this.#e.has(e);
  }
}
var h = { baseMs: 1e3, capMs: 3e4, minUptimeMs: 6e4, maxConsecutiveFailures: 10, spreadMinMs: 1e3, spreadMaxMs: 2e4, seedDeferMaxMs: 18e4, idleTtlMs: 126e5, handshakeDeadlineMs: 15e4, stallThresholdMs: 1e4, stallMinMs: 3e4, stallMaxMs: 6e4, longStallMinMs: 12e4, longStallMaxMs: 24e4, maxStallMs: 18e5, stallOutJitterMs: 9e5 }, b = 3e4, M = 100, g = { baseMs: 1e3, capMs: 3e4, minUptimeMs: 6e4, stallThresholdMs: 1e4, stallMinMs: 6e4, stallMaxMs: 6e5, maxConsecutiveRefusals: 10, handshakeDeadlineMs: 3e4 }, y = { ...g, presenceMs: 15e3 }, w = { ...g, keepaliveMs: 25e3 };
function z7(e, t) {
  return `${e ?? "main"}
${t}`;
}
function m(e) {
  let t = [...e.codeliveredFollowups.values()];
  e.codeliveredFollowups.clear();
  for (let { revoke: n } of t) n("reset");
  e.coordinatorEditors.clear(), e.editorSettleWatch?.(), e.editorSettleWatch = null;
}
function Ykr(e, t, n) {
  let s = i().current;
  if (s === void 0) return;
  for (let [d, r] of s.codeliveredFollowups) if (r.slug === e && r.agentId !== n?.exceptAgentId) s.codeliveredFollowups.delete(d), r.revoke(t);
}
var A = 64, lM = 25, wRe = 3 * lM;
function v() {
  return { live: { handoffGeneration: 0, inFlightSubscribes: /* @__PURE__ */ new Set(), inFlightWiredIntent: /* @__PURE__ */ new Set(), retiredInFlightArms: /* @__PURE__ */ new Set(), armSettleWaiters: /* @__PURE__ */ new Map(), bootingWiredArms: /* @__PURE__ */ new Map(), pendingInFlightWiring: /* @__PURE__ */ new Map(), supervisors: /* @__PURE__ */ new Map(), heardVersions: /* @__PURE__ */ new Map(), heardAheadOfClockReported: false, commentCensus: /* @__PURE__ */ new Map(), pendingRegistrations: 0, rewatchTiming: { ...h }, mostRecentPublishSlug: void 0, pendingSubagentArms: /* @__PURE__ */ new Map(), finishedSubagentAdopters: /* @__PURE__ */ new Set(), activitySenders: /* @__PURE__ */ new Map(), agentActivitySinks: /* @__PURE__ */ new Map(), activityRefreshTimer: void 0, activityOnsetTimer: void 0, activityClearTimer: void 0, activityRefreshMs: b, activityEdgeDebounceMs: M, activityUnsubscribe: void 0, disposed: false, activityOkReported: false, summonDeclared: /* @__PURE__ */ new Map(), summonArmOkReported: false, armOutcomes: /* @__PURE__ */ new Map(), mcpWriteSlugs: /* @__PURE__ */ new Map(), announcedArmFailures: /* @__PURE__ */ new Set(), nonEditorSlugs: /* @__PURE__ */ new Set(), repliesConsent: { outstanding: /* @__PURE__ */ new Map(), declined: /* @__PURE__ */ new Map(), approved: /* @__PURE__ */ new Set() }, inFlightGenerations: /* @__PURE__ */ new Map(), lastArtifactToolCallAt: 0, endAll: void 0 }, autoReact: { artifacts: /* @__PURE__ */ new Map(), optIn: null, responderDispatchOptIn: null, userDisarmed: false, enabledMemo: null, wakeEnabledMemo: null, unattendedReplies: /* @__PURE__ */ new Map(), postSeq: 0, probeSeq: 0, chainToolUseIds: /* @__PURE__ */ new Map(), coalesceMsOverride: null, maxAutoTurnsOverride: null, confirmDwellMsOverride: null, readRetryDelaysMsOverride: null, fastAckFlagRefresh: null, fastAckFlagRefreshDeadlineMsOverride: null, fastAckSelectDeadlineMsOverride: null, pendingLedger: null, ledgerLastWritten: null, ledgerLastWriteAt: null, ledgerLastWriteSid: null, ledgerLastWriteAccount: void 0, ledgerFailureSeqAtWrite: null, ledgerDeferredSince: null, ledgerLastAppend: null, ledgerOwnerSid: null, ledgerRetiredSids: /* @__PURE__ */ new Set(), ledgerExitCleanup: void 0, ledgerExitReStamp: void 0, ledgerTimer: void 0, ledgerStorageV5: void 0, ledgerMaxAgeMsOverride: null, ledgerDebounceMsOverride: null, composeDeadlineMsOverride: null }, summonSeeds: { claims: /* @__PURE__ */ new Set(), readClaims: /* @__PURE__ */ new Set(), graceMsOverride: null, open: /* @__PURE__ */ new Map(), settled: /* @__PURE__ */ new Set() }, wakes: { wakes: /* @__PURE__ */ new Map(), stoppedSlugs: /* @__PURE__ */ new Set(), sweptSlugs: /* @__PURE__ */ new Set(), orphanedSweptSlugs: /* @__PURE__ */ new Set(), yieldedSlugs: /* @__PURE__ */ new Map(), takenFrom: /* @__PURE__ */ new Map(), latchChangedAt: /* @__PURE__ */ new Map(), liftedAtScanGeneration: /* @__PURE__ */ new Map(), humanTurnAtScanGeneration: null, pendingResumeDisclosure: /* @__PURE__ */ new Set(), scanGeneration: 0, slugEpochs: /* @__PURE__ */ new Map(), stopGenerations: /* @__PURE__ */ new Map(), resumeSights: new a() }, autoEditAttribution: { staged: /* @__PURE__ */ new Map(), chainPublishIds: /* @__PURE__ */ new Set(), chainPublishSlots: /* @__PURE__ */ new Map() }, summonAnswers: /* @__PURE__ */ new Map(), pipelineReplyOrigins: /* @__PURE__ */ new Map(), summonStatus: { sidBySlug: /* @__PURE__ */ new Map(), seqBySid: /* @__PURE__ */ new Map(), routeAbsentSince: null, handOffs: /* @__PURE__ */ new Map(), queuedWakes: /* @__PURE__ */ new Map() }, noticeCoalesce: /* @__PURE__ */ new Map(), shareStatus: { bySlug: /* @__PURE__ */ new Map(), probeBoots: /* @__PURE__ */ new Map(), filePathToSlug: /* @__PURE__ */ new Map(), pendingNoticeSlugs: /* @__PURE__ */ new Map(), otherComments: /* @__PURE__ */ new Map(), otherCommentSeq: 0, pageText: { seq: 0, elsewhereSeq: 0 }, noticeReadSights: { comments: new a(), read_db: new a(), read: new a(), verify: new a(), webfetch: new a() }, capsReadsInFlight: /* @__PURE__ */ new Map(), checkProbesInFlight: /* @__PURE__ */ new Map(), outsideCommentReads: /* @__PURE__ */ new Set(), outsideCommentsHanded: /* @__PURE__ */ new Set() }, postedReplyIds: /* @__PURE__ */ new Set(), cleanReplyIds: /* @__PURE__ */ new Set(), frameRelay: { declinedUntil: /* @__PURE__ */ new Map(), tunnelDeclinedUntil: /* @__PURE__ */ new Map(), hopFailedUntil: /* @__PURE__ */ new Map(), servedUntil: /* @__PURE__ */ new Map(), vouched: /* @__PURE__ */ new Set(), directRefusedUntil: /* @__PURE__ */ new Map(), botContextNoted: false }, builtInArtifactHiddenForMcp: false, mcpEntryRowNotServed: null, heldCcrArtifactsEntry: false, scratchpadStartedForCcrEntry: null, routeOnlyMcpEntryLogged: false, askFirstSection: null, contentHostEgressDenied: /* @__PURE__ */ new Set(), contentHostEgressProbed: /* @__PURE__ */ new Map(), contentHostEgressUnanswered: /* @__PURE__ */ new Set(), contentHostEgressInFlight: /* @__PURE__ */ new Map(), sessionHintsRefusedAt: void 0, leaveOutMissingRefusedAt: void 0, sandboxEgress: /* @__PURE__ */ new Map(), roster: void 0, rosterHeard: void 0, rosterWait: void 0, rosterWaitOver: false, assetsOnRoster: false, accountEpoch: 0, conversationEpoch: 0, ownPrincipalTokens: /* @__PURE__ */ new Map(), ownPrincipalTokenAccount: null, ownPrincipalTokenEpoch: 0, profileNames: /* @__PURE__ */ new Map(), profileIdsServed: /* @__PURE__ */ new Map(), profileIdsForgets: /* @__PURE__ */ new Map(), strandedMints: /* @__PURE__ */ new Map(), reservedMints: /* @__PURE__ */ new Set(), mcpTriedMints: /* @__PURE__ */ new Set(), mintedRoundTripPublishSignals: /* @__PURE__ */ new WeakSet(), readsMarked: { toolUses: /* @__PURE__ */ new Set(), outputs: /* @__PURE__ */ new WeakSet() }, durable: { rows: /* @__PURE__ */ new Map(), registrySink: null, registryPublished: "null", unwatchedSlugs: /* @__PURE__ */ new Set(), orphanTriggers: /* @__PURE__ */ new Set(), pendingRestoredRows: /* @__PURE__ */ new Map(), slugOps: /* @__PURE__ */ new Map(), stopLatches: new l(), firstWatchAskSights: new a(), pendingOps: /* @__PURE__ */ new Set(), originatorRefused: false, subscribeForbidden: null, subscribeUnrelayed: null, watchUrlWithheld: null, watchUrlGranted: false, armsInFlight: /* @__PURE__ */ new Map(), armOutcomes: /* @__PURE__ */ new Map(), announcedArmFailures: /* @__PURE__ */ new Set(), claudeDocSlugs: /* @__PURE__ */ new Set() }, room: { conns: /* @__PURE__ */ new Map(), nonces: /* @__PURE__ */ new Map(), endedOwners: /* @__PURE__ */ new Map(), timing: { ...y } }, presence: { conns: /* @__PURE__ */ new Map(), declined: /* @__PURE__ */ new Set(), timing: { ...w } }, commentMonitorIntent: { sid: null, bySlug: /* @__PURE__ */ new Map(), pendingRestore: null, lastWritten: null, wroteCurrentLine: false, failureSeqAtWrite: 0, storageV5: void 0, unsubscribeSwitch: void 0, unregisterExitDrain: void 0, transcriptPath: null, parked: /* @__PURE__ */ new Map(), writeChain: Promise.resolve(), owedLines: /* @__PURE__ */ new Map(), pendingLines: /* @__PURE__ */ new Map(), exitStamped: false, tornStops: /* @__PURE__ */ new Set(), forgottenAt: /* @__PURE__ */ new Map(), leftWith: null, unsubscribeMaterialized: void 0, earlySeed: void 0, onFile: false, adoptPendingFor: null }, approvedRootBases: /* @__PURE__ */ new Map(), commentTargets: /* @__PURE__ */ new Map(), refusedPublishBodies: /* @__PURE__ */ new Map(), approvedSourcePins: /* @__PURE__ */ new Map(), verifiedAttachments: /* @__PURE__ */ new Map(), approvedCopySources: /* @__PURE__ */ new Map(), gatedThumbnailHrefs: /* @__PURE__ */ new Map(), approvalStashEvicted: false, publishObservationNonce: (0, import_crypto.randomUUID)(), consumedPublishApprovals: /* @__PURE__ */ new Set(), crashedPublishChecks: /* @__PURE__ */ new Set(), readDeliveries: /* @__PURE__ */ new Map(), pendingHandoverReads: /* @__PURE__ */ new Map(), savedArtifactCopies: { copies: /* @__PURE__ */ new Map(), unwrapped: 0, pending: /* @__PURE__ */ new Map() }, frozenWatchRail: void 0, frozenArtifactTypes: void 0, frozenAssets: void 0, frozenCopyFrom: void 0, frozenPublishEdits: void 0, frozenHotUpdate: void 0, frozenPathPin: void 0, frozenPathPinAck: void 0, pathPinSeq: 0, pathPins: /* @__PURE__ */ new Map(), frozenDbStrReplace: void 0, frozenArtifactPins: void 0, frozenMultiFile: void 0, createdFromType: /* @__PURE__ */ new Map(), deferredSurface: /* @__PURE__ */ new Map(), remoteControlSkippedSlugs: /* @__PURE__ */ new Set(), typeInstanceFiles: /* @__PURE__ */ new Map(), publishedSources: /* @__PURE__ */ new Map(), typeCatalogVouch: /* @__PURE__ */ new Map(), typeDescriptions: /* @__PURE__ */ new Map(), attestedTypeArtifacts: /* @__PURE__ */ new Map(), typeCapabilityReads: /* @__PURE__ */ new Map(), verify: { lastPublish: void 0, reads: /* @__PURE__ */ new Map() }, ownPublishedSlugs: /* @__PURE__ */ new Map(), ownCreatedSlugs: /* @__PURE__ */ new Map(), dbUndeclaredAt: /* @__PURE__ */ new Map(), dbUndeclaredDroppedAt: /* @__PURE__ */ new Map(), bootServed: /* @__PURE__ */ new Map(), roomJoinArming: /* @__PURE__ */ new Set(), roomStoppedByUser: /* @__PURE__ */ new Set(), roomArmAsked: /* @__PURE__ */ new Map(), roomArmRefusedByUser: /* @__PURE__ */ new Set(), coordinatorEditors: /* @__PURE__ */ new Map(), editorSettleWatch: null, codeliveredFollowups: /* @__PURE__ */ new Map(), toolsetLatch: null, resultNotes: { kindSaid: false, watchCodesSaid: /* @__PURE__ */ new Set(), previewedPaths: /* @__PURE__ */ new Set(), previewHintedPaths: /* @__PURE__ */ new Set() }, inheritedTypeGrantLatch: null, routineRunTainted: false, routineSourceWriteRefused: false, quietCapsCardKept: false, routineTypeInstances: /* @__PURE__ */ new Map(), routineRelayNotCarried: null, routineRepublishedPaths: /* @__PURE__ */ new Set(), laneNoticeSlugs: /* @__PURE__ */ new Map(), commentReads: /* @__PURE__ */ new Map(), commentReadAtBySlug: /* @__PURE__ */ new Map(), commentRepublishedPaths: /* @__PURE__ */ new Set(), askClassConsent: /* @__PURE__ */ new Set(), askClassPersonConsent: /* @__PURE__ */ new Set(), askClassOutsideOrgConsent: /* @__PURE__ */ new Set(), askNamedOtherOrg: /* @__PURE__ */ new Map(), askClassRequestShown: /* @__PURE__ */ new Map(), askConnectorsShown: /* @__PURE__ */ new Map(), askClassPending: /* @__PURE__ */ new Map(), publishCommentCards: /* @__PURE__ */ new Map(), askClassFirstWords: /* @__PURE__ */ new Map(), planAudienceAsked: /* @__PURE__ */ new Map(), notedUnreadRefusals: /* @__PURE__ */ new Map(), notedPlacementRefusals: /* @__PURE__ */ new Map(), askCards: /* @__PURE__ */ new Map(), askClassCards: /* @__PURE__ */ new Map(), askCardFacts: /* @__PURE__ */ new Map(), dbWriteOpSights: new a(), askClassTaken: /* @__PURE__ */ new Map(), askClassPersonAsked: /* @__PURE__ */ new Map(), askClassNoClassifier: /* @__PURE__ */ new Map(), askClassTakenByPerson: /* @__PURE__ */ new Map(), askTelemetry: /* @__PURE__ */ new Map(), consentCheckScopes: /* @__PURE__ */ new Map(), consentCheckScopesEvicted: false, designGuardFired: false, quickstartGuidanceToolUseId: void 0, drawnDesignBodies: /* @__PURE__ */ new Map(), quickstartRan: /* @__PURE__ */ new Map(), designSystemTypeSlug: void 0, artifactDisabledSessionEvaluated: false, artifactWithheldReasonsLogged: [], artifactWithheldRecoveryLogged: false, artifactRegisteredSeen: false, artifactWithheldListedLogged: false, artifactPolicyFetchAnswer: null, heldStartupTelemetry: null, anchorSnippets: /* @__PURE__ */ new Map(), marked: { plain: void 0 }, bundleEmbedVerdicts: { hljs: void 0 }, blockStripVerdicts: { hljs: void 0, mermaid: void 0 }, rejectBreaker: new import_chunk_1frjyv5h.Uf({ max: A }) };
}
function Xkr(e) {
  if (e.stopped = true, e.abort.abort(), e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  delete e.lease, delete e.renewable, delete e.wake;
}
class f {
  current = void 0;
}
var R = new import_chunk_pzzqg6s3.ze(() => new f());
function i() {
  return R.of((0, import_chunk_f9x2f6cx.N)());
}
function se() {
  let e = i();
  return e.current ??= v(), e.current;
}
function idn(e) {
  let t = se();
  t.deferredSurface.delete(e), t.remoteControlSkippedSlugs.delete(e);
}
function iyl(e, t) {
  let n = i().current?.autoReact.artifacts.get(e)?.threads.get(t);
  if (n !== void 0) n.lastAutoReplyAt = Date.now();
}
function adn() {
  let e = i().current;
  if (e === void 0) return;
  e.refusedPublishBodies.clear(), A$i();
}
function A$i() {
  let e = i().current;
  if (e === void 0) return;
  for (let t of e.pendingHandoverReads.values()) t.linesReturned.clear(), t.linesPrepared.clear(), t.completedBy.clear(), t.confirmsResendFor.clear();
  e.readDeliveries.clear();
}
function ayl(e) {
  let t = i().current;
  if (t === void 0) return;
  let n = t.refusedPublishBodies, s = z7(void 0, "");
  for (let [d, r] of n) {
    if (!d.startsWith(s)) continue;
    if (!e.has(r.batch)) n.delete(d);
    else if (r.observedFrom !== void 0 && r.observedFrom !== "" && !e.has(r.observedFrom)) delete r.observedFrom;
  }
}
function Jkr() {
  return i().current?.room;
}
function lyl() {
  return i().current?.presence;
}
function SSo(e) {
  let t = i().current?.presence;
  t?.disposeSlug?.(t, e);
}
function dyl(e) {
  let t = i().current?.presence;
  t?.retireSlug?.(t, e);
}
function cyl(e) {
  return i().current?.presence.declined.has(e) === true;
}
function v0() {
  return i().current !== void 0;
}
function uyl() {
  let e = Jkr();
  e?.consentChanged?.(e);
}
function fyl(e) {
  let t = Jkr();
  t?.accountChanged?.(t, e);
}
function BEt() {
  let e = Jkr();
  e?.dispose?.(e);
}
function R$i(e) {
  e.ownPrincipalTokens.clear(), e.ownPrincipalTokenAccount = null, e.ownPrincipalTokenEpoch++;
}
function pyl(e = "signed_out", t) {
  let n = i().current;
  if (n === void 0) return;
  if (R$i(n), n.profileNames.clear(), n.profileIdsServed.clear(), e !== "same_account") {
    n.roster = void 0, n.rosterHeard = void 0, n.rosterWait = void 0, n.rosterWaitOver = false, n.assetsOnRoster = false, n.accountEpoch++, n.askClassOutsideOrgConsent.clear(), n.askNamedOtherOrg.clear(), n.postedReplyIds.clear(), n.commentTargets.clear(), n.summonStatus.handOffs.clear(), n.summonStatus.queuedWakes.clear(), n.verify.lastPublish = void 0, n.verify.reads.clear(), n.ownPublishedSlugs.clear(), n.ownCreatedSlugs.clear(), n.dbUndeclaredAt.clear(), n.dbUndeclaredDroppedAt.clear(), n.bootServed.clear(), n.routineTypeInstances.clear(), n.strandedMints.clear(), n.reservedMints.clear(), n.mcpTriedMints.clear(), n.askClassFirstWords.clear(), n.live.heardVersions.clear(), n.roomJoinArming.clear(), m(n);
    for (let r of n.live.supervisors.values()) delete r.lease, delete r.renewable;
    n.live.nonEditorSlugs.clear(), n.laneNoticeSlugs.clear(), n.commentReads.clear(), n.lastOthersCommentReadAt = Date.now(), n.cleanReplyIds.clear();
    for (let r of n.shareStatus.otherComments.values()) r.judged.clear(), r.judgedSends.clear(), r.publishAnsweredSeq = void 0, r.publishAnsweredSources = void 0;
    n.live.pendingSubagentArms.clear(), n.live.finishedSubagentAdopters.clear(), n.live.repliesConsent.outstanding.clear(), n.live.repliesConsent.declined.clear(), n.live.repliesConsent.approved.clear();
    for (let r of n.autoReact.artifacts.values()) {
      r.heldReplyDeclined = false, r.heldReplyChain = null;
      for (let o of r.threads.values()) o.ownReplyIds.clear(), o.ownReplyIdsIncomplete = false;
    }
    n.live.endAll?.(e), n.createdFromType.clear(), n.deferredSurface.clear(), n.remoteControlSkippedSlugs.clear(), n.typeInstanceFiles.clear(), n.publishedSources.clear(), n.pathPins.clear(), n.typeCatalogVouch.clear(), n.typeDescriptions.clear(), n.attestedTypeArtifacts.clear(), n.typeCapabilityReads.clear(), n.quickstartRan.clear(), n.anchorSnippets.clear(), n.shareStatus.accountBoundaryAt = Date.now(), n.shareStatus.probeBoots.clear();
    for (let [r, o] of n.shareStatus.bySlug) if (o.probeErrorCode !== void 0 || o.role !== void 0 || o.outsideOrgReader !== void 0 || o.outsideAudience === false || o.external !== void 0 || o.endpointConnectors !== void 0 || o.connectorsIssuedAt !== void 0 || o.lastConnectorsReadToolUseId !== void 0) {
      let { probeErrorCode: C, probeGone: k, role: P, outsideOrgReader: T, outsideAudience: u, external: O, endpointConnectors: E, connectorsIssuedAt: x, lastConnectorsReadToolUseId: D, ...c } = o;
      n.shareStatus.bySlug.set(r, u === true ? { ...c, outsideAudience: u } : c);
    }
  }
  let { room: s, presence: d } = n;
  s.accountChanged?.(s, t), d.accountChanged?.(d, t);
}
function ldn(e) {
  let t = i().current;
  if (t === void 0) return;
  if (e?.continuesConversation !== true) {
    t.conversationEpoch++, t.shareStatus.outsideCommentReads.clear(), t.shareStatus.outsideCommentsHanded.clear(), t.ownPublishedSlugs.clear(), t.ownCreatedSlugs.clear(), t.routineTypeInstances.clear(), t.strandedMints.clear(), t.reservedMints.clear(), t.mcpTriedMints.clear(), t.askClassFirstWords.clear(), t.live.heardVersions.clear(), t.roomJoinArming.clear(), t.roomStoppedByUser.clear(), t.roomArmAsked.clear(), t.roomArmRefusedByUser.clear(), m(t), t.live.nonEditorSlugs.clear(), t.live.pendingSubagentArms.clear(), t.live.finishedSubagentAdopters.clear(), t.live.repliesConsent.outstanding.clear(), t.live.repliesConsent.declined.clear(), t.live.repliesConsent.approved.clear();
    for (let n of t.shareStatus.otherComments.values()) n.publishAnsweredSeq = void 0, n.publishAnsweredSources = void 0;
    t.deferredSurface.clear(), t.remoteControlSkippedSlugs.clear(), t.askFirstSection = null;
  }
  if (t.createdFromType.clear(), t.verify.lastPublish = void 0, t.verify.reads.clear(), e?.continuesConversation !== true) t.pathPins.clear(), t.publishedSources.clear(), t.resultNotes.kindSaid = false, t.resultNotes.watchCodesSaid.clear(), t.resultNotes.previewedPaths.clear(), t.resultNotes.previewHintedPaths.clear();
}
