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
var chunk_n1bj1qv8_exports = {};
__export(chunk_n1bj1qv8_exports, {
  uvn: () => uvn,
  x4s: () => x4s
});
module.exports = __toCommonJS(chunk_n1bj1qv8_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_crypto = require("crypto");
var x4s = "repl-error-";
function uvn(e, { clientsDrawCalls: t, shownOnCall: s, stoppedBy: o, withheldScriptToolUseId: r }) {
  let n = `${x4s}${(0, import_crypto.randomUUID)()}`, i = t && { visibleToRemoteClients: true };
  return [{ ...(0, import_chunk_bzyb60p0.La)({ content: [{ type: "tool_use", id: n, name: import_chunk_h4t4qfaq.vo, input: {} }], isVirtual: true }), ...i, ...s && { scriptErrorCopy: true } }, { ...(0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", tool_use_id: n, content: e, is_error: true }], toolUseResult: { error: e, ...o !== void 0 && { stoppedBy: o }, ...s && { shownOnCall: true } }, isVirtual: true }), turnCompanion: true, ...i, ...t && { remoteToolResult: { kind: "stored", text: e } }, ...r !== void 0 && { withheldScriptToolUseId: r } }];
}
