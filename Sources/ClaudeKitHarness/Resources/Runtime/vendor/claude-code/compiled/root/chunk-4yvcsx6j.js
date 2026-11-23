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
var chunk_4yvcsx6j_exports = {};
__export(chunk_4yvcsx6j_exports, {
  GKr: () => GKr,
  JZn: () => JZn,
  QYt: () => QYt,
  QZn: () => QZn,
  ROa: () => ROa,
  VKr: () => VKr,
  zKr: () => zKr
});
module.exports = __toCommonJS(chunk_4yvcsx6j_exports);
var JZn = "No messages to compact", GKr = "Compaction failed \xB7 conversation could not be reduced below the context limit", zKr = "Compaction failed \xB7 attached media exceeds size limits", QZn = "Error during compaction: ", QYt = "Could not compact";
var ROa = `conversation too long \xB7 ${"/clear to start fresh"}`, VKr = `attached media too large \xB7 ${"/clear to start fresh"}`;
