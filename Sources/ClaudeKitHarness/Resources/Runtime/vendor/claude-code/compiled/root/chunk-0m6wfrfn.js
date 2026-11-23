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
var chunk_0m6wfrfn_exports = {};
__export(chunk_0m6wfrfn_exports, {
  SYs: () => SYs,
  _Ys: () => _Ys,
  gYs: () => gYs,
  l7l: () => l7l,
  yYs: () => yYs
});
module.exports = __toCommonJS(chunk_0m6wfrfn_exports);
var import_chunk_tryt5bb1 = require("/$bunfs/root/chunk-tryt5bb1.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_kp4gv8z9 = require("/$bunfs/root/chunk-kp4gv8z9.js");
function l7l(e) {
  let r = (0, import_chunk_929j4hj9.Fi)(), d = r.lastSentPreferredDeviceId, i = r.browserHints !== void 0 && r.browserHints.preferredDeviceId === void 0 && d !== void 0 && e.preferredDeviceId === d;
  r.lastSentPreferredDeviceId = e.preferredDeviceId, r.browserHints = e.preferredDeviceId === void 0 && e.localDeviceIds.length === 0 ? void 0 : i ? { ...e, preferredDeviceId: void 0 } : e, (0, import_chunk_w578pjby.t)(`[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0, 8) ?? "none"} local=${e.localDeviceIds.length}${i ? " (re-send; in-session pick stands)" : ""}`);
  let n = r.bridgeBinding;
  if (n && e.preferredDeviceId !== void 0 && e.preferredDeviceId !== d && n.socketClient.getSelectedDeviceId?.() !== e.preferredDeviceId) (0, import_chunk_tryt5bb1.q5o)(n.socketClient);
  (0, import_chunk_kp4gv8z9.bYs)(r);
}
function gYs(e) {
  let r = (0, import_chunk_929j4hj9.Fi)(), d = r.browserHints;
  if (!d || d.preferredDeviceId === void 0 || d.preferredDeviceId === e) return;
  r.browserHints = { ...d, preferredDeviceId: void 0 }, (0, import_chunk_kp4gv8z9.bYs)(r);
}
function _Ys(e) {
  return (0, import_chunk_929j4hj9.Fi)().browserHints?.preferredDeviceId ?? e();
}
function yYs() {
  let e = (0, import_chunk_929j4hj9.Fi)().browserHints;
  if (!e) return;
  return new Map(e.localDeviceIds.map((r) => [r, "live"]));
}
function SYs() {
  return (0, import_chunk_929j4hj9.Fi)().browserHints?.hostPlatform;
}
