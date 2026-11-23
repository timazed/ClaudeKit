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
var chunk_5xc7tar9_exports = {};
__export(chunk_5xc7tar9_exports, {
  Zti: () => Zti
});
module.exports = __toCommonJS(chunk_5xc7tar9_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_gy3c59ma = require("/$bunfs/root/chunk-gy3c59ma.js");
var import_chunk_w8j62fk4 = require("/$bunfs/root/chunk-w8j62fk4.js");
var Zti = { async kill(s, a, T, y, c, m) {
  let e = a.get(s), r = e?.type === "mcp_task" ? e.sidecarSessionId : void 0, p = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0, k = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
  if (e?.type === "mcp_task") e.abortController?.abort(), e.driveAbortController?.abort(), e.sep2663Cancel?.();
  let n = false, d;
  if (a.update(s, (o) => {
    if (o.notified || o.status !== "running") return o;
    return n = true, d = o.endingGoesTo, { ...o, status: "killed", endTime: Date.now(), endingGoesTo: void 0, parked: void 0, pollerWait: void 0, newsToConfirm: void 0, notified: true };
  }), n && e?.type === "mcp_task") {
    try {
      d?.("stopped"), e.onWorkerWakeOutcome?.({ kind: "stopped" });
    } catch (o) {
      (0, import_chunk_w578pjby.t)("McpTask.kill: onWorkerWakeOutcome or endingGoesTo threw, the stop continues"), (0, import_chunk_k449cc64.i)(o);
    }
    try {
      e.newsToConfirm?.forEach((o) => o());
    } catch (o) {
      (0, import_chunk_w578pjby.t)("McpTask.kill: a confirm of mcp_tasks_changed threw, the stop continues"), (0, import_chunk_k449cc64.i)(o);
    }
  }
  let l = (0, import_chunk_trwykz8a.WR)(s);
  if ((async () => {
    if (await k, n && m !== void 0 && e?.type === "mcp_task" && e.polledBy !== void 0 && r !== void 0 && l !== void 0) {
      let o = { registryId: s, sessionId: r, runId: l, toolUseId: e.toolUseId, endedAt: Date.now(), serverName: e.serverName, toolName: e.toolName, mcpTaskId: e.mcpTaskId, status: "cancelled", code: import_chunk_w8j62fk4.v8r, statusMessage: "stopped by the user or by the app connected to this session. No result will follow. The MCP server may already have done some of the work, or may still finish it." };
      (0, import_chunk_gy3c59ma.S8r)(o), await (0, import_chunk_w8j62fk4.T8r)(o, c, (0, import_chunk_w8j62fk4.Vqe)(r, p)).catch((f) => (0, import_chunk_w578pjby.t)(`McpTask.kill writeMcpTaskOutcome: ${String(f)}`));
    }
    await (0, import_chunk_w8j62fk4.Mue)(s, c, r, p);
  })().catch((o) => (0, import_chunk_w578pjby.t)(`McpTask.kill deleteMcpTaskMetadata: ${String(o)}`)), n && e?.type === "mcp_task" && e.protocol === "sep2663") (0, import_chunk_cqa9hrgx.u)("mcp_task_stop");
} };
