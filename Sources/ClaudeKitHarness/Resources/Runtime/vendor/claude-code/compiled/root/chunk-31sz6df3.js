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
var chunk_31sz6df3_exports = {};
__export(chunk_31sz6df3_exports, {
  ACi: () => ACi,
  Pae: () => Pae,
  RCi: () => RCi
});
module.exports = __toCommonJS(chunk_31sz6df3_exports);
var Pae = "SuggestConnectors", ACi = "Resolve full connector payloads for directoryUuid values returned by SearchMcpRegistry.", RCi = `Resolve full connector payloads for a set of directoryUuid values returned by SearchMcpRegistry. Do NOT call this unless you already have directoryUuid values from a SearchMcpRegistry result, or installed connectors' server_id values listed in your system prompt \u2014 do not guess UUIDs or pass connector names.

Returns name, description, url, iconUrl, sample tool names, and whether the connector is already installed for the user's claude.ai org. installState reflects org-level auth, not whether tools are loaded this session \u2014 check ListConnectors' enabledInChat before claiming a connector is usable here. If a result looks relevant and is not installed, tell the user they could connect it via claude.ai; this tool does not itself connect anything.`;
