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
var chunk_fc3gfgch_exports = {};
__export(chunk_fc3gfgch_exports, {
  R7: () => R7,
  Sho: () => Sho
});
module.exports = __toCommonJS(chunk_fc3gfgch_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var t = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ server: (0, import_chunk_adx6804h.n)().min(1), tool: (0, import_chunk_adx6804h.n)().min(1), askHost: (0, import_chunk_adx6804h.P)().optional() }));
function R7() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_WEBFETCH_MCP_TOOL;
  if (!e) return;
  return t().safeParse((0, import_chunk_0jve1fep.et)(e, false)).data ?? "unreadable";
}
function Sho() {
  let e = R7();
  if (typeof e !== "object") return [];
  return ["web_fetch_mcp_tool_v1", ...e.askHost ? ["web_fetch_mcp_tool_ask_host_v1"] : []];
}
