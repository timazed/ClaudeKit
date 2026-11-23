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
var chunk_kp4gv8z9_exports = {};
__export(chunk_kp4gv8z9_exports, {
  KOa: () => KOa,
  bYs: () => bYs
});
module.exports = __toCommonJS(chunk_kp4gv8z9_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
function bYs(r) {
  let t = r.supersededHintSink;
  if (t === void 0) return;
  let e = r.browserHints !== void 0 && r.browserHints.preferredDeviceId === void 0 ? r.lastSentPreferredDeviceId ?? null : null;
  if (e === r.supersededHintRecorded) return;
  r.supersededHintRecorded = e, t.notifyInternalMetadataChanged({ chrome_hint_superseded: e });
}
function KOa(r, t) {
  if (r === null || !(0, import_chunk_3t7ve0wy.Sa)() || !(0, import_chunk_3t7ve0wy._F)()) return;
  try {
    let e = (0, import_chunk_929j4hj9.Fi)();
    e.supersededHintSink = t;
    let n = r.internal?.chrome_hint_superseded;
    if (n == null && r.readFailed !== true) return;
    let o = "mark_unreadable";
    if (typeof n === "string") {
      let d = (0, import_chunk_865at33z.ge)().chromeExtension?.pairedDeviceId;
      if (d && e.browserHints === void 0) {
        e.supersededHintRecorded = n, e.lastSentPreferredDeviceId = n, e.browserHints = { preferredDeviceId: void 0, localDeviceIds: [], hostPlatform: void 0 }, (0, import_chunk_cqa9hrgx.u)("chrome_superseded_hint_restore");
        return;
      }
      o = d ? "hint_came_first" : "no_pairing";
    }
    t.notifyInternalMetadataChanged({ chrome_hint_superseded: null }), (0, import_chunk_cqa9hrgx.l)("chrome_superseded_hint_restore", o);
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
  }
}
