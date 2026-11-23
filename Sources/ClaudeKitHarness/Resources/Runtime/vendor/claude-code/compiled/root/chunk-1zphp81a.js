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
var chunk_1zphp81a_exports = {};
__export(chunk_1zphp81a_exports, {
  CYs: () => CYs,
  EHt: () => EHt,
  l6: () => l6,
  ler: () => ler
});
module.exports = __toCommonJS(chunk_1zphp81a_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_3b9jqhjk = require("/$bunfs/root/chunk-3b9jqhjk.js");
function l6(e) {
  let s = (0, import_chunk_bzyb60p0.JS)(), o = !!e.isAutoModeAvailable && s;
  if (!o) (0, import_chunk_w578pjby.t)(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${s} reason=${(0, import_chunk_bzyb60p0.gH)()}`);
  return o;
}
function ler(e) {
  return !!e.isBypassPermissionsModeAvailable && !(0, import_chunk_3b9jqhjk.OC)();
}
function EHt(e) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (ler(e)) return "bypassPermissions";
      if (l6(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (l6(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function CYs(e, s) {
  let o = EHt(e);
  return { nextMode: o, context: (0, import_chunk_awvk50qj.zD)(e.mode, o, e, s) };
}
