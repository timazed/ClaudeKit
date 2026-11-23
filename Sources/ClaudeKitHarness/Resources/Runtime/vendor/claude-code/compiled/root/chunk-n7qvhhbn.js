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
var chunk_n7qvhhbn_exports = {};
__export(chunk_n7qvhhbn_exports, {
  FJt: () => FJt,
  Zgt: () => Zgt
});
module.exports = __toCommonJS(chunk_n7qvhhbn_exports);
var Zgt = ["toolUseResult", "tool_use_result", "mcpMeta", "remoteToolResult", "hostContent"], FJt = ["hostClassifierContext", "classifierMetaLines", "serverClassifierContext", "summarizeMetadata"];
