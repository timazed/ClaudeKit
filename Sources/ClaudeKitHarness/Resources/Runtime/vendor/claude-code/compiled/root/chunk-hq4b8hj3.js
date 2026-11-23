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
var chunk_hq4b8hj3_exports = {};
__export(chunk_hq4b8hj3_exports, {
  fUe: () => fUe,
  x8r: () => x8r,
  zFa: () => zFa
});
module.exports = __toCommonJS(chunk_hq4b8hj3_exports);
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
function fUe(e, r) {
  return `${(0, import_chunk_cy0ck7w2.Vi)(e) ?? ""}/${(0, import_chunk_cy0ck7w2.Vi)(r) ?? ""}`;
}
function zFa(e) {
  return (0, import_chunk_cy0ck7w2.Vi)(e) ?? "";
}
function x8r({ serverName: e, toolName: r, mcpTaskId: o, toolUseId: s, pollIntervalMs: a, abortController: n, backgroundedToDeliverMessage: i, protocol: p, driveAbortController: l, ttlExpiresAt: c }) {
  let t = (0, import_chunk_ed372ykp.OT)("mcp_task");
  return { ...(0, import_chunk_ed372ykp.tb)(t, "mcp_task", fUe(e, r), s), type: "mcp_task", status: "running", serverName: e, toolName: r, mcpTaskId: o ?? t, mcpStatus: "working", pollIntervalMs: a, abortController: n, backgroundedToDeliverMessage: i, protocol: p, driveAbortController: l, ttlExpiresAt: c };
}
