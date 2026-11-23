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
var chunk_v70mn5g6_exports = {};
__export(chunk_v70mn5g6_exports, {
  UIe: () => UIe
});
module.exports = __toCommonJS(chunk_v70mn5g6_exports);
var import_chunk_dbw5qqws = require("/$bunfs/root/chunk-dbw5qqws.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_8dns2jbk = require("/$bunfs/root/chunk-8dns2jbk.js");
var import_chunk_z2dejs1w = require("/$bunfs/root/chunk-z2dejs1w.js");
function UIe(t = {}) {
  let e = require("/$bunfs/root/chunk-5rmfekc6.js"), s = e.isTeammate() && e.isPlanModeRequired() ? "plan" : "default";
  return { sessionNoticesPoll: { pendingDeliveryUuids: [] }, settings: (0, import_chunk_2yx6c1y2.vt)(), tasks: {}, transcripts: {}, runningSubagents: 0, agentNameRegistry: /* @__PURE__ */ new Map(), sendMessagePins: {}, agentTypesInvokedThisSession: /* @__PURE__ */ new Set(), verbose: false, showMessageTimestamps: false, mainLoopModel: null, mainLoopModelForSession: null, isBriefOnly: false, slackTagConnected: false, briefTranscript: false, replBridgeEnabled: false, replBridgeExplicit: false, replBridgeOutboundOnly: false, replBridgeSessionActive: false, replBridgeSkipNextArchive: false, replBridgeSessionGroupingId: void 0, replBridgeInitialName: void 0, replBridgeError: void 0, replBridgeErrorKind: void 0, toolPermissionContext: { ...(0, import_chunk_4vsz8a99.Vd)(), mode: s }, attentionBudget: import_chunk_bzyb60p0.nJr, proactivityLevel: import_chunk_bzyb60p0.g_t, agent: void 0, agentDefinitions: { activeAgents: [], allAgents: [] }, fileHistory: { snapshots: [], trackedFiles: /* @__PURE__ */ new Set(), snapshotSequence: 0 }, attribution: (0, import_chunk_sjqze7qg.unn)(), mcp: { clientsInitialized: false, clients: [], tools: [], commands: [], resources: {}, resourceTemplates: {}, suppressedClaudeAiConnectors: [], pluginReconnectKey: 0 }, plugins: { enabled: [], disabled: [], commands: [], errors: [], warnings: [], installationStatus: { marketplaces: [], plugins: [] }, needsRefresh: false }, todos: {}, queuedRemoteNotifications: { pending: [], drainedIds: [], nudge: null, readsThisTurn: [], readsDroppedThisTurn: 0, unfinishedReads: [], nudgeHeldUntil: { request: 0, cut: 0 } }, prResolvedThisSession: false, frameUrls: {}, frameOpenFailedPath: null, frameOpenFailedSeen: false, artifactWatchApproved: false, artifactDbWriteApproved: false, artifactDbWriteHumanApproved: false, artifactDbReadConsentSlugs: import_chunk_dbw5qqws.Dgo, artifactDbReadHumanConsentSlugs: import_chunk_dbw5qqws.Lgo, artifactReadConsentSlugs: import_chunk_dbw5qqws.xbr, artifactConsentEpoch: 0, artifactAssetUploadConsentSlugs: import_chunk_dbw5qqws.Ngo, artifactAssetUploadHumanConsentSlugs: import_chunk_dbw5qqws.Fgo, artifactAssetReadConsentSlugs: import_chunk_dbw5qqws.Pbr, artifactAssetReadHumanConsentSlugs: import_chunk_dbw5qqws.Obr, artifactOutsideOrgConsentSlugs: import_chunk_dbw5qqws.Ibr, artifactHandlersReadConsentSlugs: import_chunk_dbw5qqws.$go, artifactHandlersReadHumanConsentSlugs: import_chunk_dbw5qqws.Ugo, artifactHandlersWriteConsentSlugs: import_chunk_dbw5qqws.Bgo, artifactHandlersWriteHumanConsentSlugs: import_chunk_dbw5qqws.Wgo, artifactRoomJoinConsentSlugs: import_chunk_dbw5qqws.Lan, artifactPlanPublishConsentPaths: import_chunk_dbw5qqws.Hgo, ultrareviewOverageConfirmed: false, thinkingEnabled: (0, import_chunk_865at33z.ahe)(), promptSuggestionEnabled: t.promptSuggestionEnabled ?? (0, import_chunk_8dns2jbk.qGr)(), awaySummaryEnabled: (0, import_chunk_z2dejs1w.s7t)(), displayedMessageContent: {}, inbox: { messages: [] }, pendingMemoryUpdates: [], pendingWorkerRequest: null, pendingSandboxRequest: null, promptSuggestion: { status: "empty" }, taskSummary: null, initialMessage: null, sessionEffort: { kind: "inherit" }, settingsEffortTable: { default: void 0, legacyUserEffort: void 0, byModel: {} }, ultracode: void 0, cacheMissAckedAtOutputTokens: -1, fastMode: false, storedImagePaths: /* @__PURE__ */ new Map(), imageDescriptions: /* @__PURE__ */ new Map(), classifierApprovals: { approvals: /* @__PURE__ */ new Map(), checking: /* @__PURE__ */ new Set() }, teammateColors: { assignments: /* @__PURE__ */ new Map(), index: 0 }, webBrowser: require("/$bunfs/root/chunk-nrrzzmhd.js").getDefaultWebBrowserState() };
}
