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
var chunk_xrxwvvj6_exports = {};
__export(chunk_xrxwvvj6_exports, {
  R6r: () => R6r,
  mvn: () => mvn
});
module.exports = __toCommonJS(chunk_xrxwvvj6_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
function mvn(e, t, s) {
  return () => {
    if (s?.aborted === true) return;
    let n = t();
    return e.getCommandQueueSnapshot().some(o) || e.someSubmissionInFlight((r) => u(r, n)) || (s === void 0 ? e.getInFlightDrainBatchStanding() !== "appended" && e.someInFlightDrainCommand((r) => u(r, n)) : e.getInFlightDrainBatchStanding() === "passed-over" && e.someInFlightDrainCommand(o)) ? void 0 : n;
  };
}
function u(e, t) {
  return o(e) && (e.uuid === void 0 || t.findLast((s) => s.uuid === e.uuid) === void 0);
}
function o(e) {
  if (!(0, import_chunk_tjdnrbvx.Tc)(e)) return false;
  switch (e.mode) {
    case "task-notification":
      return false;
    case "poll-event": {
      let t = e.pollEvent?.provenance?.authority;
      return t !== void 0 && t !== "peer-agent" && t !== "world-event" && !(0, import_chunk_3grsnd7a.xPe)(e.pollEvent?.provenance);
    }
    case "prompt":
    case "bash":
      return (0, import_chunk_865at33z.gOl)(e);
    case "orphaned-permission":
      return true;
  }
  return true;
}
var d = () => {
};
function R6r(e, t, s) {
  let n = () => {
    let a = t.get(e);
    return (0, import_chunk_4yjj7pjs.An)(a) ? a : void 0;
  }, r = () => n()?.status === "running", i = () => m(n(), s);
  return { turn: { agentId: e, guard: { get isActive() {
    return r();
  }, get isRunning() {
    return r();
  }, isDispatchingForModel: false, subscribe: () => d }, get abortController() {
    return n()?.abortController ?? null;
  }, readEvidence: () => ({ isHeldByDialog: false, isToolCallStarting: (t.getTranscript(e)?.inProgressToolUseIDs.size ?? 0) > 0, isCompacting: false, isMainRequestAnnounced: false }), interruptForSubmit: void 0, endsUnmovableShells: false }, messageQueue: { getCommandQueueSnapshot: i, getCommandQueue: i, subscribe: () => d, isFoldInFlight: () => false, isMidTurnFoldSuspended: () => false, promoteToNow: () => false, demoteFromNow: () => false }, transcript: { getSnapshot: () => p(t.getTranscript(e)?.messages ?? [], m(n())) } };
}
function m(e, t) {
  if (e === void 0) return [];
  let s = [];
  for (let n of e.pendingMessages) {
    let r = t !== void 0 ? t.get(n) : n.origin?.kind === "human" ? n.shownAs : void 0;
    if (r !== void 0) s.push({ value: n.text, mode: "prompt", uuid: r, agentId: (0, import_chunk_mzmcvr6c.ro)(e.agentId), origin: n.origin });
  }
  return s;
}
function p(e, t) {
  if (t.length === 0) return e;
  let s = new Set(t.map((n) => n.uuid));
  return e.filter((n) => !s.has(n.uuid));
}
