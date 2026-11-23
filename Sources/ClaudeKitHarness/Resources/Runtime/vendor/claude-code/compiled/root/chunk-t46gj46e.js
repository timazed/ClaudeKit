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
var chunk_t46gj46e_exports = {};
__export(chunk_t46gj46e_exports, {
  Trr: () => Trr,
  Xei: () => Xei,
  Yei: () => Yei
});
module.exports = __toCommonJS(chunk_t46gj46e_exports);
var import_chunk_31sz6df3 = require("/$bunfs/root/chunk-31sz6df3.js");
var import_chunk_07kqypdk = require("/$bunfs/root/chunk-07kqypdk.js");
var Trr = "ListConnectors", Yei = "List the MCP connectors installed for the user's claude.ai org, optionally filtered by keyword.", Xei = `List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable \u2014 treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false means the connector's tools are not loaded in this session; the field does not say why. The user can check a connector, and its tool permissions, in their claude.ai connector settings. Do not name a setting for this chat alone; there may be none. To recommend connectors the user does NOT have yet, use ${import_chunk_07kqypdk.jq} \u2192 ${import_chunk_31sz6df3.Pae} instead; this tool does not itself connect anything.`;
