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
var chunk_8mxqzyge_exports = {};
__export(chunk_8mxqzyge_exports, {
  FIa: () => FIa,
  Lqr: () => Lqr,
  Uer: () => Uer,
  c7s: () => c7s,
  y7t: () => y7t
});
module.exports = __toCommonJS(chunk_8mxqzyge_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_6qga2yp9 = require("/$bunfs/root/chunk-6qga2yp9.js");
var c7s = { killed: "Stopped because the workflow was stopped", failed: "Stopped because the workflow failed", completed: "Stopped because the workflow finished without waiting for it" }, a = new Set(Object.values(c7s));
function Lqr(r) {
  return r.endedWithRun !== void 0 || r.error !== void 0 && a.has(r.error);
}
var i = 40960, l = 400;
function y7t(r, o) {
  let n = r.filter(import_chunk_6qga2yp9.Wer);
  return o ? (0, import_chunk_6qga2yp9.$Ia)(n) : n;
}
function FIa(r) {
  if (Buffer.byteLength((0, import_chunk_w578pjby._)(r)) <= i) return { rows: r, omitted: 0 };
  let o = r.map((e) => e.type !== "workflow_agent" ? e : { type: e.type, index: e.index, label: e.label, agentId: e.agentId, isolation: e.isolation, promptFramed: e.promptFramed, state: e.state, phaseIndex: e.phaseIndex, error: e.error, endedWithRun: e.endedWithRun, skipped: e.skipped, blocked: e.blocked, cached: e.cached, queuedAt: e.queuedAt, startedAt: e.startedAt, tokens: e.tokens, toolCalls: e.toolCalls, durationMs: e.durationMs }), n = o.filter((e) => e.type === "workflow_phase" || e.state === "error");
  if (Buffer.byteLength((0, import_chunk_w578pjby._)(n)) >= i) o = o.map((e) => {
    if (e.type !== "workflow_agent" || e.error === void 0 || e.error.length <= l) return e;
    let t = (0, import_chunk_sah8dzn4.x3)(e.error, l), d = (0, import_chunk_7cfjrnwy.ee)(t, l);
    return { ...e, error: d.length < t.length ? `${d}\u2026` : d };
  });
  let s = /* @__PURE__ */ new Set(), f = 2;
  for (let e of [...o.filter((t) => t.type === "workflow_phase"), ...o.filter((t) => t.type === "workflow_agent" && t.state === "error"), ...o.filter((t) => t.type === "workflow_agent" && t.state !== "error")]) {
    let t = Buffer.byteLength((0, import_chunk_w578pjby.cs)(e)) + 1;
    if (f + t <= i) f += t, s.add(e);
  }
  return { rows: o.filter((e) => s.has(e)), omitted: o.length - s.size };
}
function Uer({ startedAt: r, queuedAt: o, tokens: n }) {
  return r !== void 0 || o === void 0 || (n ?? 0) > 0;
}
