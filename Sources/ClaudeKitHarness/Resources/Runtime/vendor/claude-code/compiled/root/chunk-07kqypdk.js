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
var chunk_07kqypdk_exports = {};
__export(chunk_07kqypdk_exports, {
  CCi: () => CCi,
  TCi: () => TCi,
  jq: () => jq
});
module.exports = __toCommonJS(chunk_07kqypdk_exports);
var import_chunk_31sz6df3 = require("/$bunfs/root/chunk-31sz6df3.js");
var jq = "SearchMcpRegistry", TCi = "Search the MCP connector registry by keyword to discover connectors that might help complete the task.", CCi = `Search the MCP connector registry by keyword. Call this when connecting to an MCP server might help complete the task \u2014 whether or not the user named a specific product.

Named-product examples:
- "check my Asana tasks" \u2192 keywords ["asana", "tasks", "todo"]
- "find issues in Jira" \u2192 keywords ["jira", "issues"]

Intent-based examples (no product named):
- "help me manage my tasks" \u2192 keywords ["tasks", "todo", "project management"]
- "pull up the design mockups" \u2192 keywords ["design", "figma", "mockup"]

Returns a ranked list with directoryUuid, name, description, sample tool names, installState (org-level), and enabledInChat (this session). Results include the org's custom connectors (ones the org configured that are not in the public directory) when they match the keywords. enabledInChat: false means the connector's tools are not loaded in this session; the field does not say why. ${import_chunk_31sz6df3.Pae} takes a result's directoryUuid whatever its installState is, not only that of a connector that is not installed. The user can also check a connector, and its tool permissions, in their claude.ai connector settings. Do not name a setting for this chat alone; there may be none. ${jq} does not itself connect anything.`;
