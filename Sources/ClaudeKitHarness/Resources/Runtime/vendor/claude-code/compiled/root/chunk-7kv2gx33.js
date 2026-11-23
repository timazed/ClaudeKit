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
var chunk_7kv2gx33_exports = {};
__export(chunk_7kv2gx33_exports, {
  $Ys: () => $Ys,
  SIa: () => SIa,
  yIa: () => yIa
});
module.exports = __toCommonJS(chunk_7kv2gx33_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var $Ys = "CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH";
async function yIa(e) {
  if (e?.isBypassPermissionsModeAvailable === false && !e.isBypassHeldForAutoSwitch) return {};
  let i = e?.isBypassHeldForAutoSwitch ? await (0, import_chunk_rb36kwbn.jhe)(process.pid) : void 0;
  return { [$Ys]: i === void 0 ? "seen" : `held:${process.pid}:${i}` };
}
async function SIa() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH;
  if (import_chunk_c203g5kd.s.unset("CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH"), !e) return;
  let i = /^held:(\d{1,10}):(.{1,64})$/.exec(e), n = Number(i?.[1]);
  if (i === null || n !== process.pid && n !== process.ppid) return "seen";
  return await (0, import_chunk_rb36kwbn.jhe)(n) === i[2] ? "held" : "seen";
}
