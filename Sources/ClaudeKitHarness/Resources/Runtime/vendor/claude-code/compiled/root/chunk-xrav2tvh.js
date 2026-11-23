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
var chunk_xrav2tvh_exports = {};
__export(chunk_xrav2tvh_exports, {
  KEo: () => KEo,
  Ome: () => Ome,
  WT: () => WT,
  kTl: () => kTl
});
module.exports = __toCommonJS(chunk_xrav2tvh_exports);
function WT(e) {
  return e === "aborted_streaming" || e === "aborted_tools";
}
function Ome(e) {
  if (e === void 0) return false;
  switch (e) {
    case "blocking_limit":
    case "rapid_refill_breaker":
    case "prompt_too_long":
    case "image_error":
    case "model_error":
    case "api_error":
    case "malformed_tool_use_exhausted":
    case "budget_exhausted":
    case "structured_output_retry_exhausted":
    case "tool_deferred_unavailable":
    case "turn_setup_failed":
      return true;
    case "aborted_streaming":
    case "aborted_tools":
    case "stop_hook_prevented":
    case "hook_stopped":
    case "tool_deferred":
    case "max_turns":
    case "background_requested":
    case "completed":
      return false;
    default:
      return false;
  }
}
function kTl(e) {
  return e.reason === "api_error" ? `api_error_${e.errorKind ?? "unknown"}` : e.reason;
}
function KEo(e) {
  return WT(e) || Ome(e);
}
