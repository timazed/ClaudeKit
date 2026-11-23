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
var chunk_x7880gvk_exports = {};
__export(chunk_x7880gvk_exports, {
  nd: () => nd
});
module.exports = __toCommonJS(chunk_x7880gvk_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var t = { notice: null, shownLoggedForDraftId: null, promptedCount: 0, sessionDraftCount: 0, seededFromDisk: false, seedStarted: false, toolCallCount: 0 };
class n {
  autoDenyPresence = (0, import_chunk_69qhefwa.Be)();
  mainLoopBusy = (0, import_chunk_se72nykz.ps)({ busy: false });
  blockingToolProgress = (0, import_chunk_se72nykz.ps)({ active: false });
  dialogHostUnmounted = (0, import_chunk_se72nykz.ps)({ unmounted: false });
  onScreenBlockingDialog = (0, import_chunk_se72nykz.ps)({ surfaceMounted: false, kind: null });
  headerGauge = (0, import_chunk_se72nykz.ps)({ mounts: 0 });
  pendingSurveyFeedbackSource = null;
  terminalFocus = "unknown";
  terminalFocusGainedAt = Number.NEGATIVE_INFINITY;
  terminalFocusChanged = (0, import_chunk_69qhefwa.Be)();
  feedbackNotice = (0, import_chunk_se72nykz.ps)(t);
  promptDigitCaptures = (0, import_chunk_se72nykz.ps)({ count: 0 });
  clawdEntranceTaken = false;
  startupUpdateSummary = void 0;
  orgMemoryWritesRowSeen = false;
  orgMemoryReadRowSeen = false;
  remoteHomeSettingsRowSeen = false;
  configRowsSeen = /* @__PURE__ */ new Set();
  configRowNotices = /* @__PURE__ */ new Map();
}
var nd = (0, import_chunk_t57w17k7.de)(new n(), (o) => {
  o.configRowsSeen.clear(), o.configRowNotices.clear(), o.mainLoopBusy.setState((e) => e.busy ? { busy: false } : e), o.headerGauge.setState((e) => e.mounts === 0 ? e : { mounts: 0 });
});
