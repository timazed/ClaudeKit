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
var chunk_929j4hj9_exports = {};
__export(chunk_929j4hj9_exports, {
  Fi: () => Fi,
  M8e: () => M8e,
  ahl: () => ahl,
  chl: () => chl,
  dhl: () => dhl,
  fZ: () => fZ,
  lhl: () => lhl,
  m$n: () => m$n,
  p_o: () => p_o
});
module.exports = __toCommonJS(chunk_929j4hj9_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var t = new import_chunk_pzzqg6s3.ze(() => /* @__PURE__ */ new Map());
function ahl(e) {
  let n = `${e}_l${(0, import_crypto.randomUUID)().slice(0, 8)}`;
  return t.of((0, import_chunk_f9x2f6cx.N)()).set(n, e), n;
}
function lhl(e, n) {
  return typeof e === "string" && e.startsWith(`${n}_l`);
}
function fZ(e) {
  return t.peek((0, import_chunk_f9x2f6cx.N)())?.get(e) ?? e;
}
function p_o(e) {
  t.peek((0, import_chunk_f9x2f6cx.N)())?.delete(e);
}
class i {
  bridgeBinding = void 0;
  chromeTabGroupTitle = void 0;
  chatTabGroupTitleAsks = void 0;
  browserHints = void 0;
  lastSentPreferredDeviceId = void 0;
  supersededHintSink = void 0;
  supersededHintRecorded = null;
  resolvedHostByToolUseId = /* @__PURE__ */ new Map();
  shouldAutoEnable = void 0;
  wiredThisSession = false;
  systemPromptSection = "";
  attachedInstructions = "";
  installUpsellResolution = void 0;
  installUpsellBypassSuppressionCounted = false;
  trackedTabIds = /* @__PURE__ */ new Set();
  tabGroupCleanupRegistered = false;
  unsubscribeSessionSwitch = void 0;
  unregisterExitCleanup = void 0;
  closesInFlight = /* @__PURE__ */ new Map();
  lastExecutedTabUrlByScope = /* @__PURE__ */ new Map();
  resolvedUrlByToolUseId = /* @__PURE__ */ new Map();
  lastNavigateEndedAt = void 0;
  browserRosterVersion = 0;
  browserRosterChanged = (0, import_chunk_69qhefwa.Be)();
  noBrowserFound = void 0;
  relayConnectFailed = void 0;
  disconnectedAnswerCount = 0;
  disconnectedAnswerTexts = /* @__PURE__ */ new Set();
  notConnectedSeenByPriorWorker = false;
  notConnectedMirrored = false;
  chromeSetupOfferArm = void 0;
  chromeSetupOfferArmMirrored = false;
  chromeSetupOfferStateUnread = false;
  lastTurnClientPlatform = void 0;
  reset() {
    this.bridgeBinding = void 0, this.chromeTabGroupTitle = void 0, this.chatTabGroupTitleAsks = void 0, this.browserHints = void 0, this.lastSentPreferredDeviceId = void 0, this.supersededHintSink = void 0, this.supersededHintRecorded = null, this.resolvedHostByToolUseId = /* @__PURE__ */ new Map(), this.shouldAutoEnable = void 0, this.wiredThisSession = false, this.systemPromptSection = "", this.attachedInstructions = "", this.installUpsellResolution = void 0, this.installUpsellBypassSuppressionCounted = false, this.trackedTabIds = /* @__PURE__ */ new Set(), this.tabGroupCleanupRegistered = false, this.unsubscribeSessionSwitch?.(), this.unsubscribeSessionSwitch = void 0, this.unregisterExitCleanup?.(), this.unregisterExitCleanup = void 0, this.closesInFlight = /* @__PURE__ */ new Map(), this.lastExecutedTabUrlByScope = /* @__PURE__ */ new Map(), this.resolvedUrlByToolUseId = /* @__PURE__ */ new Map(), this.lastNavigateEndedAt = void 0, this.browserRosterVersion++, this.noBrowserFound = void 0, this.relayConnectFailed = void 0, this.disconnectedAnswerCount = 0, this.notConnectedSeenByPriorWorker = false, this.notConnectedMirrored = false, this.chromeSetupOfferArm = void 0, this.chromeSetupOfferArmMirrored = false, this.chromeSetupOfferStateUnread = false, this.lastTurnClientPlatform = void 0, this.disconnectedAnswerTexts = /* @__PURE__ */ new Set();
  }
}
function M8e(e) {
  return e === "ios" || e === "android";
}
var m$n = new import_chunk_2904xtvq.j(() => new i());
function Fi() {
  return m$n.of((0, import_chunk_f9x2f6cx.N)().host);
}
var o = 3e3;
function dhl() {
  let e = Fi().lastNavigateEndedAt;
  return e !== void 0 && import_chunk_5appeerh.Gi.monotonicNow() - e < o;
}
function chl(e) {
  let n = Fi().resolvedHostByToolUseId.get(fZ(e));
  if (n !== void 0) n.keepHostPin = true;
}
