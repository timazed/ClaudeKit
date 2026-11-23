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
var chunk_rfp4xgxg_exports = {};
__export(chunk_rfp4xgxg_exports, {
  qOa: () => qOa,
  wYs: () => wYs
});
module.exports = __toCommonJS(chunk_rfp4xgxg_exports);
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_pzj67pdt = require("/$bunfs/root/chunk-pzj67pdt.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
function wYs() {
  return (0, import_chunk_sghy0qej.Pe)("bot_protected_tengu_virtual_quilt", { safe: true });
}
function qOa(t) {
  if (!wYs()) return {};
  return { isDisplayOnly: true, metaMessages: [`<system-reminder>
The output of /list-agents was shown to the user and not to you.${(0, import_chunk_4vsz8a99.tn)(t, import_chunk_pzj67pdt.Fu) ? ` To see what it lists, call ${import_chunk_pzj67pdt.Fu}.` : ""}
</system-reminder>`] };
}
