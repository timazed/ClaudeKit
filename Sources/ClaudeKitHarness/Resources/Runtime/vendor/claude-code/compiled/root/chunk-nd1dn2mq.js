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
var chunk_nd1dn2mq_exports = {};
__export(chunk_nd1dn2mq_exports, {
  Ezo: () => Ezo,
  O6r: () => O6r,
  e3s: () => e3s,
  qMt: () => qMt,
  sRa: () => sRa,
  t3s: () => t3s
});
module.exports = __toCommonJS(chunk_nd1dn2mq_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_ynbv8e5n = require("/$bunfs/root/chunk-ynbv8e5n.js");
var Ezo = (e) => ({ agentType: e || "teammate", source: "built-in" });
class a extends Error {
  constructor(e) {
    super(e);
    this.name = "CutOffAgentCallError";
  }
}
function e3s(e) {
  return `This call stood for agent ${e}, which stopped when the container was restarted. This call does not resume it and launched nothing. Send agent ${e} a message, or launch a new agent, if you still need the work.`;
}
function O6r(e, n) {
  return `Agent ${e} stopped when the container was restarted. It may have done some or all of its work by then. It was not resumed: ${n}`;
}
function t3s(e, n) {
  let t = e.get(n);
  return (0, import_chunk_4yjj7pjs.An)(t) && t.movedAtUnansweredPrompt ? { waitsAtPermissionPrompt: true } : {};
}
class qMt {
  #e = /* @__PURE__ */ new Map();
  adopt(e, n, t) {
    this.#e.set(e, { agentId: n, resume: t });
  }
  take(e) {
    let n = e === void 0 ? void 0 : this.#e.get(e);
    if (e !== void 0 && n !== void 0) this.#e.set(e, { ...n, resume: void 0 });
    return n;
  }
}
async function sRa({ agentId: e, resume: n }, t) {
  if (n === void 0) throw new a(e3s(e));
  let o;
  try {
    o = await n(t);
  } catch (r) {
    let s = t.taskRegistry.get(e), f = (0, import_chunk_jv7av99m.Fe)(r) ? "stopped" : "failed", g = (0, import_chunk_ynbv8e5n.zXs)(r, e), p = (0, import_chunk_ynbv8e5n.z$e)(r) && (0, import_chunk_4yjj7pjs.An)(s) ? (0, import_chunk_knp99ee7.W_e)(t, e, s.agentType, g)(f) : void 0;
    if (t.abortController.signal.aborted) throw (0, import_chunk_knp99ee7.eTe)(p), r;
    if ((0, import_chunk_ynbv8e5n.z$e)(r)) {
      let l = `The container was restarted and agent ${e} was resumed. ${(0, import_chunk_jv7av99m.Fe)(r) ? `Agent ${e} was stopped before it finished` : `Agent ${e} failed while running: ${(0, import_chunk_jv7av99m.d)(r)}`}`;
      if (!(0, import_chunk_4yjj7pjs.An)(s)) throw new a(l);
      let h = t.taskRegistry.getTranscript(e)?.messages ?? [], w;
      try {
        w = (0, import_chunk_knp99ee7.e3r)((0, import_chunk_jv7av99m.D)(r), h);
      } catch (u) {
        if (u !== r) (0, import_chunk_k449cc64.i)(u);
        let y = new a(l);
        throw p ? await (0, import_chunk_knp99ee7.uMe)(y, p, t.abortController.signal) : y;
      }
      let A = (0, import_chunk_ynbv8e5n.jXs)(r, e);
      return { status: "completed", report: await (0, import_chunk_knp99ee7.t3r)((0, import_chunk_knp99ee7.rtt)(w.history.filter((u) => u.type !== "assistant" || !u.isApiErrorMessage), e, { prompt: s.prompt, resolvedAgentModel: s.model ?? "", startTime: s.startTime, agentType: s.agentType, callerCanContinueAgents: s.ownerCanContinueAgents, persistedToolResultFiles: s.webFetchSavedFiles, priorCarriedMarkers: (0, import_chunk_ynbv8e5n.VXs)(r), isBuiltInAgent: false, isAsync: true, agentDepth: s.spawnDepth ?? 1 }, { suppressTelemetry: true, handback: A }), { agentId: e, agentMessages: h, agentType: (0, import_chunk_78g0060s.Yge)(s.agentType, false), child: "agent", consumed: A?.at(-1)?.consumed, cutoffNote: (0, import_chunk_knp99ee7.lJs)(l), definedBy: g, status: f, tools: (0, import_chunk_ynbv8e5n.GXs)(r, e) ?? t.options.tools, toolUseContext: t }) };
    }
    if (r instanceof import_chunk_ynbv8e5n.gf) throw new a(O6r(e, r.message));
    throw r;
  }
  if (o.deniedByPlugin !== void 0) throw new a(O6r(e, o.deniedByPlugin));
  if (o.movedRunEnded !== void 0) return { status: "async_launched", agentId: e, description: o.description, outputFile: o.outputFile ?? "", ...t3s(t.taskRegistry, e) };
  let m = t.taskRegistry.get(e), c = (0, import_chunk_4yjj7pjs.An)(m) ? m.result : void 0;
  if (c === void 0) throw new a(o.alreadyCompleted ? `Agent ${e} had finished when the container was restarted, but its report was lost with the restart. It was not run again. Send it a message to ask for its report.` : `Agent ${e} was resumed after the container was restarted and ended without a report.`);
  return { status: "completed", report: (0, import_chunk_knp99ee7.dJs)(c, t) };
}
