const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_v4nbanbx_exports = {};
__export(chunk_v4nbanbx_exports, {
  str: () => str
});
module.exports = __toCommonJS(chunk_v4nbanbx_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_qr6brph0 = require("/$bunfs/root/chunk-qr6brph0.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_b1ejc6w6 = require("/$bunfs/root/chunk-b1ejc6w6.js");
var import_chunk_cpv7yv0r = require("/$bunfs/root/chunk-cpv7yv0r.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
async function str(n, e, o, r = {}) {
  var _stack = [];
  try {
    let { extraMessages: i, forkOrigin: p, narrowCanUseTool: d, runScope: a, runLimitKind: I, launchedByClient: g } = r, G = e.session.id;
    if (K(e)) return null;
    let R = await (0, import_chunk_q2404y26.bst)(e), S = e.renderedSystemPrompt;
    if (!S) {
      if (S = await ne(e, R), !S) return (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_fork_prompt_missing"), null;
    }
    let U = await (0, import_chunk_knp99ee7.NF)({ agentDefinition: import_chunk_bzyb60p0.zY, model: "inherit", toolUseContext: a ? a(e) : e, run: "spawn", detached: true, onModelRestricted: (0, import_chunk_cpv7yv0r.ett)(import_chunk_bzyb60p0.zY.agentType, e.appendSystemMessage) }), T = U.model, N = te(r.nameHint ?? n), f = e.agentLifecycle.allocateName(N), M = r.description ?? n, w = j(M, f), P = r.signal ?? e.abortController.signal, s = r.raisesAgentSpawn ? await x({ prompt: n, description: w, name: f }, e, P) : void 0;
    const O = __using(_stack, s?.starting);
    if (e.session.id !== G || s !== void 0 && O !== import_chunk_qr6brph0.K4r && (0, import_chunk_bzyb60p0.Kxn)(P, true)) throw new import_chunk_jv7av99m.Ie();
    if (s?.deny !== void 0) return (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_denied_by_hook"), s;
    if (K(e) || g?.turnRuns() === true) return null;
    if (s) (0, import_chunk_bzyb60p0.iar)({ toolUseContext: e }, s.isRewritten);
    let l = !s || e.agentLifecycle.allocateName(f) === f ? f : e.agentLifecycle.allocateName(N), k = s?.spawn.prompt ?? n, B = s?.spawn.description ?? w, A = B !== w ? B.replace(/\s+/g, " ").trim() : l === f ? w : j(M, l), D = g ? import_chunk_bzyb60p0.oci : import_chunk_bzyb60p0.zY, t = (0, import_chunk_mzmcvr6c.qS)(g?.job ?? (r.nameHint !== void 0 && r.nameHintHoldsNoUserContent ? l : void 0)), { taskRegistry: c } = e, V = Date.now(), b = (0, import_chunk_865at33z.oh)(e.agentContext) + 1, v = (0, import_chunk_f9x2f6cx.ot)(), L = g ? false : (0, import_chunk_bzyb60p0.qLt)(e, v), h = (0, import_chunk_bzyb60p0.i5)(), E = e.abortController.signal, C = h === void 0 || (0, import_chunk_jg3mepas.A9)() ? void 0 : (0, import_chunk_bzyb60p0.WZt)(h, { toolUseId: void 0, callerAgentId: e.agentId, signal: E });
    if (h !== void 0 && (C === void 0 || C.confirm(E) !== void 0)) return (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_background_launch_closed"), null;
    let { clientLaunches: H } = (0, import_chunk_trwykz8a.mn)();
    if (g) H.add(t);
    let y = (0, import_chunk_bzyb60p0.yHe)({ outputFileReadable: (0, import_chunk_bzyb60p0.q$)(R), ownerCanContinueAgents: L, agentId: t, ownerAgentId: v, spawnDepth: b, description: A, prompt: k, model: T, selectedAgent: D, taskRegistry: c, toolUseId: e.toolUseId, pluginRewrote: s?.isRewritten, sessionScratch: e.session.sessionScratch }), _ = y.abortController;
    if (C !== void 0 && !C.handOver({ agentId: y.agentId, abortController: _ })) return (0, import_chunk_bzyb60p0.XI)(y.agentId, c, "system", void 0, { lifecycleNotStarted: true }), (0, import_chunk_bzyb60p0.ZL)(y.agentId, c), H.delete(t), (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_background_launch_not_taken"), null;
    if (e.appendSystemMessage?.((0, import_chunk_b1ejc6w6.lMa)(t, A)), e.agentLifecycle.registerName(l, (0, import_chunk_mzmcvr6c.ro)(t)), d) (0, import_chunk_trwykz8a.mn)().canUseToolNarrowings.set(t, d);
    if (a) (0, import_chunk_trwykz8a.mn)().runScopes.set(t, a);
    if (I) (0, import_chunk_trwykz8a.mn)().runLimitKinds.set(t, I);
    (0, import_chunk_trwykz8a.mn)().agentSpawned.emit({ agentId: t, agentType: import_chunk_bzyb60p0.zY.agentType, parentAgentId: e.agentId, taskRegistry: c });
    let W = { prompt: k, resolvedAgentModel: T, isBuiltInAgent: true, startTime: V, agentType: import_chunk_bzyb60p0.zY.agentType, isAsync: true, agentDepth: b, callerCanContinueAgents: L, source: import_chunk_bzyb60p0.zY.source }, F = { agentId: t, parentAgentId: e.agentId, depth: b, ...(0, import_chunk_865at33z.s6t)(e) && { spawnedByMainThread: true }, parentSessionId: (0, import_chunk_wtm85h0y.cD)(), agentType: "subagent", subagentName: import_chunk_bzyb60p0.zY.agentType, displayName: l, isAsync: true, isBackgroundAgent: true, isBuiltIn: true, ...(0, import_chunk_865at33z.uz)(e.agentContext) && { forkOfMainConversation: true }, invocationKind: "spawn", invocationEmitted: false, ...(0, import_chunk_865at33z.CX)(e.agentContext) }, q = c.takeConcurrencySlot(), { onToolPool: z, reviewTools: Q } = (0, import_chunk_knp99ee7.tTe)(e.options.tools);
    return (0, import_chunk_865at33z.Qme)(import_chunk_865at33z.N1, F, () => (0, import_chunk_knp99ee7.j_e)({ taskId: y.agentId, abortController: _, makeStream: (J, X, Y) => (0, import_chunk_knp99ee7.VL)({ onQueryProgress: X, onStreamTokenEstimate: Y, agentDefinition: D, turnPrompt: k, promptMessages: [...i ?? [], (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "text", text: (0, import_chunk_bzyb60p0.uZr)(k) }] })], toolUseContext: a ? a(e) : e, canUseTool: d ? d(o) : o, isAsync: true, querySource: (0, import_chunk_qr6brph0.Zve)(import_chunk_bzyb60p0.zY.agentType, true), forkOrigin: p, spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill, spawnedByForkedSkill: e.options.spawnedByForkedSkill, model: "inherit", modelFacts: U, override: { systemPrompt: S, parentSystemPrompt: true, agentId: (0, import_chunk_mzmcvr6c.ro)(y.agentId), agentContext: F, abortController: _, requireCanUseTool: d ? true : void 0 }, availableTools: e.options.tools, forkContextMessages: e.messages, useExactTools: true, onCacheSafeParams: J, onToolPool: z, description: A, name: l }), metadata: { ...W, agentContext: F }, definedBy: import_chunk_bzyb60p0.zY, description: A, toolUseContext: e, reviewTools: Q, taskRegistry: c, agentIdForCleanup: t, enableSummarization: !g, getWorktreeResult: async () => ({}), onRunSettled: q })), O?.started({ agentId: t, model: T }), (0, import_chunk_cqa9hrgx.u)("subagent_launch"), { agentId: t, name: l };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
async function x(n, e, o) {
  let r = [], i = await (0, import_chunk_qr6brph0.Str)({ ...n, tool_use_id: "", agent: import_chunk_bzyb60p0.zY, agents: [], model: void 0, parentModel: e.loopModel, parentAgentId: e.agentId, permissionMode: (0, import_chunk_bz1f2qnq.Z)(e).mode, background: true, fork: true, cwd: void 0, signal: o, origin: e.hookOrigin }, (d) => (0, import_chunk_bzyb60p0.uSt)({ ...d, isUnfolded: true, trace: (a) => {
    r = a;
  } }));
  if (i.deny === void 0) return i;
  let p = (0, import_chunk_bzyb60p0.pLt)(r, "deny", i.deny)?.plugin;
  return { ...i, deniedBy: p === void 0 ? "A plugin" : `The ${p} plugin` };
}
function K(n) {
  if (n.getAppState().endedByModel) return (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_fork_ended_by_model"), true;
  if ((0, import_chunk_c4zg4pwc.dl)()) return (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_fork_coordinator_mode"), true;
  if ((0, import_chunk_865at33z.jfn)()) return (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_fork_session_starts_none"), true;
  return false;
}
function j(n, e) {
  let o = (typeof n === "function" ? n(e) : n).replace(/\s+/g, " ").trim();
  return o.length > 50 ? (0, import_chunk_7cfjrnwy.ee)(o, 49) + "\u2026" : o;
}
async function ne(n, e) {
  let o = n.getAppState(), r = o.agent ? o.agentDefinitions.activeAgents.find((p) => p.agentType === o.agent) : void 0, i = await (0, import_chunk_bzyb60p0.eG)(e, n.modelFacts.model);
  return (0, import_chunk_bzyb60p0.Nye)({ mainThreadAgentDefinition: r, toolUseContext: n, customSystemPrompt: n.options.customSystemPrompt, defaultSystemPrompt: i, appendSystemPrompt: n.options.appendSystemPrompt, model: n.modelFacts.model });
}
function te(n) {
  return n.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}
