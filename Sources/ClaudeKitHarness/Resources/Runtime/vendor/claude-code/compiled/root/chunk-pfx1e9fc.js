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
var chunk_pfx1e9fc_exports = {};
__export(chunk_pfx1e9fc_exports, {
  WJn: () => WJn
});
module.exports = __toCommonJS(chunk_pfx1e9fc_exports);
function WJn(o) {
  switch (o.type) {
    case "hook_additional_context":
      return o.hookName === "prompt.submit" || o.hookName === "prompt.mention" || o.hookName === "tool.call" ? { kind: "plugin", event: o.hookName } : { kind: "hook", event: o.hookEvent };
    case "hook_blocking_error":
    case "hook_stopped_continuation":
    case "hook_success":
    case "hook_non_blocking_error":
    case "hook_error_during_execution":
    case "hook_system_message":
    case "hook_cancelled":
    case "hook_permission_decision":
    case "hook_deferred_tool":
    case "async_hook_response":
      return { kind: "hook", event: o.hookEvent };
    default:
      return { kind: "engine" };
  }
}
