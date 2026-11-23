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
var chunk_yegw2jm5_exports = {};
__export(chunk_yegw2jm5_exports, {
  D7t: () => D7t,
  G4r: () => G4r,
  H7t: () => H7t,
  M7t: () => M7t
});
module.exports = __toCommonJS(chunk_yegw2jm5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var A = "tengu_settled_wren";
function M7t(e, o) {
  return e === void 0 ? o : (0, import_chunk_jg3mepas.Slt)();
}
function G4r(e, o) {
  return { autoBackgroundMs: !o && (import_chunk_c203g5kd.s.CLAUDE_AUTO_BACKGROUND_TASKS || e?.armsMoveTimer?.() === true) ? 12e4 : void 0, waitsOnRuleMove: e !== void 0 && !o };
}
function H7t(e, o, r) {
  return r ? e.then(() => "done") : Promise.race([e.then(() => "done"), o.then(() => "backgrounded")]);
}
function D7t({ outcome: e, registration: o, agentContext: r, wait: c, ownerAgentId: k, taskRegistry: t, sessionScratch: l, agentTask: a }) {
  let { taskId: n } = o, d = e === "done" && a.hasAgentChildKeepalive(n, t);
  if (d) a.backgroundAgentTask(n, t);
  let i = t.get(n)?.status, p = e === "backgrounded" && !d && i !== void 0 && i !== "running" && !a.hasAgentChildKeepalive(n, t), g = e === "backgrounded" && !p;
  if (!g && !d) return false;
  if (c.moved = true, r.backgroundMove ??= {}, r.backgroundMove.moved = true, g) {
    if (a.startWorkerCheckinForBackgroundedAgent(n, t, l), (0, import_chunk_3t7ve0wy.kl)() && (0, import_chunk_865at33z.b)(A, false)) r.isBackgroundAgent = true, (0, import_chunk_cqa9hrgx.u)("task_local_agent_moved_counts_as_background");
  }
  if (o.detachParentAbortRelay(), (0, import_chunk_wx7ffn80.Mvl)(n), !(0, import_chunk_f9x2f6cx.Se)()) (0, import_chunk_4yjj7pjs.EH)(k, `agent:${n}`, t);
  return true;
}
