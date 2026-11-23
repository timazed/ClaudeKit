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
var chunk_52ckkfmm_exports = {};
__export(chunk_52ckkfmm_exports, {
  Fh: () => Fh
});
module.exports = __toCommonJS(chunk_52ckkfmm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class e {
  binding = void 0;
  currentToolUseContext = void 0;
  currentOnProgress = void 0;
  callsInFlight = 0;
  chordsDown = /* @__PURE__ */ new Set();
  leftButtonDown = false;
  lettingGoAtTurnEnd = false;
  keyFocusReadMs = {};
  unregisterLockCleanup = void 0;
  activeThisTurn = false;
  runLoopPump = void 0;
  runLoopPumpRetainCount = 0;
  escHotkeyRegistered = false;
  frozenCoordinateMode = void 0;
  holdsOrganizationNo = false;
  orgAppListsRead = void 0;
  hostAdapter = void 0;
  swiftModule = void 0;
  inputModule = void 0;
  registeredConfig = void 0;
  firstUseResolution = void 0;
  isOfferStanding = void 0;
  reset() {
    if (this.unregisterLockCleanup !== void 0 || this.escHotkeyRegistered || this.runLoopPump !== void 0) throw Error("ComputerUseSession.reset() called while the lock cleanup, Esc hotkey, or run-loop pump is still registered");
    this.binding = void 0, this.currentToolUseContext = void 0, this.currentOnProgress = void 0, this.callsInFlight = 0, this.chordsDown.clear(), this.leftButtonDown = false, this.lettingGoAtTurnEnd = false, this.keyFocusReadMs = {}, this.activeThisTurn = false, this.runLoopPumpRetainCount = 0, this.frozenCoordinateMode = void 0, this.holdsOrganizationNo = false, this.orgAppListsRead = void 0, this.hostAdapter = void 0, this.swiftModule = void 0, this.inputModule = void 0, this.registeredConfig = void 0, this.firstUseResolution = void 0, this.isOfferStanding = void 0;
  }
}
var n = new import_chunk_2904xtvq.j(() => new e());
function Fh() {
  return n.of((0, import_chunk_f9x2f6cx.N)().host);
}
