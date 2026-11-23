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
var chunk_8m5q5cts_exports = {};
__export(chunk_8m5q5cts_exports, {
  HYe: () => HYe,
  KP: () => KP,
  Ule: () => Ule,
  ll: () => ll
});
module.exports = __toCommonJS(chunk_8m5q5cts_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var HYe = ["theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled"];
function ll(o, r, s) {
  let i = (0, import_chunk_xzvhvaa2.Ko)();
  for (let e = i.length - 1; e >= 0; e--) {
    let t = i[e], n = (0, import_chunk_2yx6c1y2._e)(t)?.[o];
    if ((0, import_chunk_8hfdvrr1.fc)(n, s ? [s] : []) === void 0) continue;
    if (t === "projectSettings" && i.includes("userSettings") && (0, import_chunk_2yx6c1y2.vm)()) continue;
    return { value: n, source: t };
  }
  if (HYe.includes(o)) {
    let e = o, t = (0, import_chunk_865at33z.ge)()[e];
    if (t !== void 0 && t !== import_chunk_865at33z.QU[e]) {
      let n = (0, import_chunk_865at33z.WPr)(e) ? (0, import_chunk_865at33z.Qzn)(e, t) : (0, import_chunk_865at33z.cXe)(e, t);
      if (n !== void 0) return { value: n, source: "legacyGlobalConfig" };
    }
  }
  return { value: r, source: "default" };
}
function KP({ error: o }) {
  if (o) (0, import_chunk_r3mm3x33.Br)().saveFailed.emit();
}
function Ule(o, r, s) {
  (0, import_chunk_2yx6c1y2.Mr)("userSettings", { [o]: r }, void 0, s).then(KP);
}
