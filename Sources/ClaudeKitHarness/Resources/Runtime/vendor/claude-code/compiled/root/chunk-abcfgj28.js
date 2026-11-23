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
var chunk_abcfgj28_exports = {};
__export(chunk_abcfgj28_exports, {
  MBo: () => MBo,
  Xwn: () => Xwn
});
module.exports = __toCommonJS(chunk_abcfgj28_exports);
var import_chunk_v70mn5g6 = require("/$bunfs/root/chunk-v70mn5g6.js");
var MBo = { accountKey: null, ownMessageIds: [], wireAccountId: null };
function Xwn() {
  return { ...(0, import_chunk_v70mn5g6.UIe)(), taskDecorations: {}, agentRowHidden: void 0, agentRowDraws: {}, prStatus: null, prNeedsAuth: false, expandedView: "none", replTab: "convo", panelFileView: null, diffPanelVisible: false, paneHoldsToasts: false, coordinatorTaskIndex: -1, workflowFooterIndex: 0, viewSelectionMode: "none", queueEditIndex: null, footerSelection: null, footerLinks: [], remoteSessionUrl: void 0, projectsSelfIdentity: MBo, remoteConnectionStatus: "connecting", remoteModeSessions: {}, remoteBootstrap: null, remoteBackgroundTasks: [], remoteWorkflowRuns: [], remoteForegroundTask: "none", remoteWorkerReportedGone: false, workerInventory: null, hasRemoteReplyChannel: false, replBridgeAutoOnByDefault: false, replBridgeConnected: false, replBridgeReconnecting: false, replBridgeConnectUrl: void 0, replBridgeSessionUrl: void 0, replBridgeEnvironmentId: void 0, replBridgeSessionId: void 0, setupIssues: { sandboxDeniesOnAnotherHostCount: 0, modelDeprecationWarning: null, modelRestrictedWarning: null, unknownModelWindowWarning: null, securityWarnings: [], existingClaudeSubscription: null }, notifications: { current: null, queue: [], pinned: [] }, autoUpdaterResult: null, activeOverlays: /* @__PURE__ */ new Set() };
}
