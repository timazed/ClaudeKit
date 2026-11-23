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
var chunk_pr9gw20a_exports = {};
__export(chunk_pr9gw20a_exports, {
  aXs: () => aXs
});
module.exports = __toCommonJS(chunk_pr9gw20a_exports);
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function aXs({ toolUseID: n, parentToolUseID: s, data: e, withheldInput: o }) {
  if (e.scriptHelper === true) return;
  let t = o ?? ((0, import_chunk_ma3kja9f.T)(e.toolInput) ? e.toolInput : {});
  return { type: "tool_progress", tool_use_id: n, tool_name: e.toolName, parent_tool_use_id: s, elapsed_time_seconds: 0, inner_call: { tool_name: e.toolName, tool_input: t, tool_use_id: e.toolUseId, phase: e.phase, ...o !== void 0 && { input_withheld: true } }, repl_call: { inner_tool_name: e.toolName, inner_tool_input: t, inner_tool_use_id: e.toolUseId, phase: e.phase } };
}
