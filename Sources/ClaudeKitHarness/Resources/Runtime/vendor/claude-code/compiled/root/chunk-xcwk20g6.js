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
var chunk_xcwk20g6_exports = {};
__export(chunk_xcwk20g6_exports, {
  JIa: () => JIa,
  Jqr: () => Jqr,
  P7s: () => P7s,
  QIa: () => QIa,
  Qqr: () => Qqr,
  XIa: () => XIa,
  YIa: () => YIa,
  ZIa: () => ZIa,
  Zqr: () => Zqr,
  e4r: () => e4r,
  qer: () => qer
});
module.exports = __toCommonJS(chunk_xcwk20g6_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_4dnx2vkh = require("/$bunfs/root/chunk-4dnx2vkh.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_859v5edd = require("/$bunfs/root/chunk-859v5edd.js");
var import_chunk_7ds2xzy3 = require("/$bunfs/root/chunk-7ds2xzy3.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_yegw2jm5 = require("/$bunfs/root/chunk-yegw2jm5.js");
var import_chunk_5dea9071 = require("/$bunfs/root/chunk-5dea9071.js");
var import_chunk_cpv7yv0r = require("/$bunfs/root/chunk-cpv7yv0r.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_path = require("path");
var oe = 100;
async function j(e) {
  if ((0, import_chunk_0pb268nk.Lr)("skills") || !(0, import_chunk_xzvhvaa2.rn)("projectSettings") || (0, import_chunk_57sd0ak5.Dl)("skills") || (0, import_chunk_f9x2f6cx.us)() !== null || (0, import_chunk_f9x2f6cx.Y)()) return [];
  let o = (0, import_chunk_w5s307zm.dr)(e);
  if (o === null) return [];
  let n = await (0, import_chunk_859v5edd.sre)(o);
  if (!n.ok) return [];
  let m = await (0, import_chunk_bzyb60p0.nBe)(o, [...n.args, "status", "--porcelain", "-z", import_chunk_gd77dyw4.zy, "--untracked-files=normal"]);
  if (!m.ok) return [];
  let p = m.stdout.split("\0"), s = /* @__PURE__ */ new Map();
  for (let r = 0; r < p.length; r++) {
    let c = p[r] ?? "";
    if (c.length < 4) continue;
    let f = [c.slice(3)];
    if (/[RC]/.test(c.slice(0, 2))) r++, f.push(p[r] ?? "");
    for (let d of f) {
      let g = (0, import_path.resolve)(o, d);
      if (d !== "" && g !== o && s.size < oe && (0, import_chunk_z6pfqf6e.Ya)(o, g, { alreadyComparable: true })) s.set((0, import_path.dirname)(g), g);
    }
  }
  return [...s.values()];
}
function P7s(e, o, n) {
  return e.filter((m) => m.type === "prompt" && (0, import_chunk_tfs0ssqe.ZLn)(m, o) && (0, import_chunk_tfs0ssqe.KSe)(m) && (0, import_chunk_kx2fp6pc.V8)(m.name) && !(m.context === "fork" && n !== void 0 && (0, import_chunk_tfs0ssqe.V6)(m) === n));
}
async function qer(e, o, n) {
  if (e.type !== "prompt" || e.unqualifiedName != null) return null;
  if (o !== null && n.session !== void 0 && (0, import_chunk_sjqze7qg.tDe)(e.name) !== null) try {
    let s = await j(o);
    if (s.length > 0) await (0, import_chunk_bzyb60p0.dFt)(await (0, import_chunk_bzyb60p0.R_i)(n.session.host, s, o, n.storageV5));
  } catch (s) {
    if ((0, import_chunk_jv7av99m.pa)(s)) (0, import_chunk_w578pjby.t)(`[skills] Changed files not searched for nested skills: ${s}`);
    else (0, import_chunk_k449cc64.i)(s);
  }
  if ((0, import_chunk_bzyb60p0.cFt)().length === 0 && (0, import_chunk_f9x2f6cx.tu)().length === 0) return null;
  if (!n.options.tools.some((s) => (0, import_chunk_4vsz8a99.gt)(s, import_chunk_pmryp5f3.Fn))) return null;
  let m = P7s(await (0, import_chunk_bzyb60p0.Fm)(o, n.storageV5), e.name, n.options.spawnedBySkill);
  if (m.length === 0) return null;
  let p = m.map((s) => {
    let r = s.name.slice(0, s.name.length - e.name.length - 1);
    return `- \`${s.name}\` \u2014 for files under ${r}/`;
  });
  return (0, import_chunk_y53wbr8a.a)("tengu_skill_scoped_variant_note", { variant_count: m.length }), (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Qs)([`Directory-scoped variants of the "${e.name}" skill exist in this repo:`, ...p, `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${import_chunk_pmryp5f3.Fn} tool and follow it instead \u2014 it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.`].join(`
`)), isMeta: true });
}
function Qqr(e, o, n) {
  if (n || o.spawnedByWorkflowRunId !== void 0 || (0, import_chunk_jg3mepas.Yle)() || (0, import_chunk_f9x2f6cx.Se)()) return false;
  return e.background ?? true;
}
function JIa(e, o) {
  return (0, import_chunk_f9x2f6cx.Se)() && o.agentId === void 0 && o.hookCaller === void 0 && !o.innerCall && e.background !== false && !(0, import_chunk_yegw2jm5.M7t)((0, import_chunk_bzyb60p0.i5)(), (0, import_chunk_jg3mepas.Yle)()) && (0, import_chunk_865at33z.b)("tengu_fizzy_panda", false) === true && !(0, import_chunk_bz1f2qnq.Z)(o).pollEventDeliveryGuard && !V(e, o.taskRegistry);
}
async function QIa({ agentId: e, storageV5: o, ...n }) {
  let m = z(n);
  return W(m) && x(e, m, o);
}
function V(e, o) {
  return Object.values(o.all()).some((n) => n.type === "local_agent" && !(0, import_chunk_ed372ykp.$o)(n.status) && n.forkedSkillName === e.name);
}
function W(e) {
  let { success: o } = (0, import_chunk_bzyb60p0.uJr)().safeParse(e);
  if (!o) (0, import_chunk_cqa9hrgx.l)("subagent_launch", "forked_skill_scoping_unpersistable");
  return o;
}
async function x(e, o, n) {
  try {
    return await (0, import_chunk_5dea9071.yHa)((0, import_chunk_mzmcvr6c.ro)(e), o, n), true;
  } catch (m) {
    return re(m), (0, import_chunk_cqa9hrgx.l)("subagent_launch", "forked_skill_scoping_write_failed"), false;
  }
}
function H(e) {
  return e.length > 50 ? (0, import_chunk_7cfjrnwy.ee)(e, 49) + "\u2026" : e;
}
function z({ command: e, spawnedBySkill: o, agentDefinition: n, frozenCommandDenies: m }) {
  return { skillName: e.name, attributionName: o, ...n.effort !== void 0 && { effort: n.effort }, ...m !== void 0 && m.length > 0 && { frozenCommandDenies: [...m] } };
}
async function Zqr({ agentId: e, agentDefinition: o, command: n, description: m, prompt: p, promptMessages: s, context: r, canUseTool: c, getAppState: f, permissionLayers: d, readFileState: g, availableTools: A, webFetchReadmissionAllowed: y, spawnedBySkill: h, recordInvocationOnSuccess: w, frozenCommandDenies: _, requireCanUseTool: T }) {
  let { taskRegistry: k } = r, D = Date.now(), C = H(m), v = (0, import_chunk_865at33z.oh)(r.agentContext) + 1, R = () => {
    if (r.abortController.signal.aborted) {
      if ((0, import_chunk_cbnm4p23.Ai)(r.abortController.signal.reason) !== "interrupt") throw new import_chunk_jv7av99m.Ie();
    }
    let O = V(n, k);
    if (O) (0, import_chunk_cqa9hrgx.l)("subagent_launch", "forked_skill_live_duplicate");
    return O;
  };
  if (R()) return null;
  let M = (0, import_chunk_7ds2xzy3.MP)();
  if (v > M) return (0, import_chunk_cqa9hrgx.l)("subagent_launch", "forked_skill_depth_cap"), null;
  let S = z({ command: n, spawnedBySkill: h, agentDefinition: o, frozenCommandDenies: _ });
  if (!W(S)) return null;
  let I = await (0, import_chunk_knp99ee7.NF)({ agentDefinition: o, model: n.model, toolUseContext: { ...r, getAppState: f, permissionLayers: d }, run: "spawn", detached: true, onModelRestricted: (0, import_chunk_cpv7yv0r.ett)(h, r.appendSystemMessage) }), F = I.model;
  if (!await x(e, S, r.storageV5)) return null;
  if (R()) return null;
  let B = (0, import_chunk_bzyb60p0._ne)(r.agentId, k) ?? (0, import_chunk_f9x2f6cx.ot)(), P = (0, import_chunk_bzyb60p0.qLt)(r, B), U = (0, import_chunk_bzyb60p0.yHe)({ outputFileReadable: (0, import_chunk_bzyb60p0.q$)((0, import_chunk_q2404y26.wA)(r)), ownerCanContinueAgents: P, agentId: e, ownerAgentId: B, parentAgentId: r.agentId, spawnDepth: v, description: C, prompt: p, model: F, selectedAgent: o, taskRegistry: k, toolUseId: r.toolUseId, forkedSkillName: n.name, sessionScratch: r.session.sessionScratch }), L = U.abortController, E = r.agentLifecycle.allocateName(n.name);
  r.agentLifecycle.registerName(E, (0, import_chunk_mzmcvr6c.ro)(e)), (0, import_chunk_4yjj7pjs.EH)((0, import_chunk_bzyb60p0._ne)(r.agentId, k), `agent:${e}`, k);
  let N = { agentId: e, parentAgentId: r.agentId, depth: v, ...(0, import_chunk_865at33z.s6t)(r) && { spawnedByMainThread: true }, parentSessionId: (0, import_chunk_wtm85h0y.cD)(), agentType: "subagent", subagentName: o.agentType, isBuiltIn: (0, import_chunk_bzyb60p0.ic)(o), displayName: E, isAsync: true, isBackgroundAgent: true, invocationKind: "spawn", invocationEmitted: false, ...(0, import_chunk_865at33z.CX)(r.agentContext) }, K = { prompt: p, resolvedAgentModel: F, isBuiltInAgent: (0, import_chunk_bzyb60p0.ic)(o), startTime: D, agentType: o.agentType, isAsync: true, agentDepth: v, callerCanContinueAgents: P, source: o.source }, { onToolPool: G, reviewTools: q } = (0, import_chunk_knp99ee7.tTe)(r.options.tools);
  return (0, import_chunk_865at33z.Qme)(import_chunk_865at33z.N1, N, () => (0, import_chunk_knp99ee7.j_e)({ taskId: U.agentId, abortController: L, makeStream: (O, X, J) => (0, import_chunk_knp99ee7.VL)({ agentDefinition: o, promptMessages: s, turnPrompt: p, staysInHookCall: true, toolUseContext: { ...r, getAppState: f, permissionLayers: d }, canUseTool: c, isAsync: true, querySource: "agent:custom", spawnedBySkill: h, spawnedByForkedSkill: true, model: n.model, modelFacts: I, availableTools: A, webFetchReadmissionAllowed: y, override: { agentId: (0, import_chunk_mzmcvr6c.ro)(e), agentContext: N, abortController: L, readFileState: g, requireCanUseTool: T }, onCacheSafeParams: O, onQueryProgress: X, onStreamTokenEstimate: J, onToolPool: G, description: C, name: E }), metadata: { ...K, agentContext: N }, definedBy: n, description: C, toolUseContext: r, reviewTools: q, taskRegistry: k, agentIdForCleanup: e, enableSummarization: true, getWorktreeResult: async () => ({}), onTerminalSuccess: w })), (0, import_chunk_cqa9hrgx.u)("subagent_launch"), { agentId: e, name: E };
}
async function ZIa({ agentContext: e, runAgentParams: o, command: n, description: m, prompt: p, context: s, wait: r, onMessage: c, recordInvocationOnSuccess: f }) {
  let { agentId: d } = e, { taskRegistry: g, toolUseId: A } = s, { agentDefinition: y, modelFacts: h, override: w } = o, _ = Date.now(), T = H(m), k = (0, import_chunk_f9x2f6cx.ot)(), D = (0, import_chunk_bzyb60p0.qLt)(s, k);
  (0, import_chunk_bzyb60p0.nur)(d);
  let C = (0, import_chunk_bzyb60p0.sen)({ agentId: d, ownerAgentId: k, spawnDepth: (0, import_chunk_865at33z.oh)(e), description: T, prompt: p, model: h.model, selectedAgent: y, taskRegistry: g, parentAbortController: s.abortController, waitsOnRuleMove: (0, import_chunk_bzyb60p0.i5)() !== void 0, isDirectCall: true, toolUseId: A, outputFileReadable: (0, import_chunk_bzyb60p0.q$)((0, import_chunk_q2404y26.wA)(s)), ownerCanContinueAgents: D, forkedSkillName: n.name }), { onToolPool: v, reviewTools: R } = (0, import_chunk_knp99ee7.tTe)(s.options.tools);
  try {
    let S = (0, import_chunk_865at33z.N1)(e, () => (0, import_chunk_knp99ee7.j_e)({ taskId: d, abortController: C.abortController, makeStream: (F, B, P) => (0, import_chunk_knp99ee7.VL)({ ...o, override: { ...w, abortController: C.abortController }, toolUseId: A, description: T, onCacheSafeParams: F, onQueryProgress: B, onStreamTokenEstimate: P, onToolPool: v }), metadata: { prompt: p, resolvedAgentModel: h.model, isBuiltInAgent: (0, import_chunk_bzyb60p0.ic)(y), startTime: _, agentType: y.agentType, isAsync: false, agentDepth: (0, import_chunk_865at33z.oh)(e), callerCanContinueAgents: D, source: y.source, agentContext: e }, definedBy: n, description: T, toolUseContext: s, reviewTools: R, taskRegistry: g, agentIdForCleanup: d, enableSummarization: false, getWorktreeResult: async () => ({}), onMessage: (F) => {
      if (!r.moved) c(F);
    }, shouldNotifyOwner: () => r.moved, onTerminalSuccess: f })), I = await (0, import_chunk_yegw2jm5.H7t)(S, C.backgroundSignal, false);
    if (!(0, import_chunk_yegw2jm5.D7t)({ outcome: I, registration: C, agentContext: e, wait: r, ownerAgentId: k, taskRegistry: g, sessionScratch: s.session.sessionScratch, agentTask: { startWorkerCheckinForBackgroundedAgent: import_chunk_bzyb60p0.ien, backgroundAgentTask: import_chunk_bzyb60p0.ZTe, hasAgentChildKeepalive: import_chunk_bzyb60p0.jie } })) {
      await S;
      return;
    }
  } catch (S) {
    if (S instanceof import_chunk_knp99ee7.K$e) return;
    throw !s.abortController.signal.aborted && g.get(d)?.status === "failed" && (0, import_chunk_jv7av99m.Fe)(S) ? Error("Agent stalled (stream watchdog)") : S;
  } finally {
    if (C.detachParentAbortRelay(), !r.moved) (0, import_chunk_bzyb60p0.Deo)(d, g, { toolUseId: A, summary: T, startTime: _ });
  }
  let M = s.agentLifecycle.allocateName(n.name);
  return s.agentLifecycle.registerName(M, (0, import_chunk_mzmcvr6c.ro)(d)), (0, import_chunk_cqa9hrgx.u)("subagent_launch"), (0, import_chunk_cqa9hrgx.u)("skill_moved_to_background"), { agentId: d, name: M };
}
function re(e) {
  (0, import_chunk_w578pjby.t)(`Failed to write forked-skill scoping sidecar: ${e}`);
}
function e4r({ agentId: e, parentAgentId: o, spawnDepth: n, skillName: m, prompt: p, selectedAgent: s, taskRegistry: r, toolUseId: c, callerAbortController: f }) {
  if (!(0, import_chunk_4dnx2vkh.Dln)()) return { abortController: f, remove() {
  } };
  let d = (0, import_chunk_cbnm4p23._r)(), g = (0, import_chunk_cbnm4p23.VX)(f, d), A = (0, import_chunk_4yjj7pjs.Ytn)(e, d);
  (0, import_chunk_bzyb60p0.fBe)(e);
  let y = `/${m}`, h = (0, import_chunk_bzyb60p0.xui)({ agentId: e, ownerAgentId: (0, import_chunk_bzyb60p0._ne)(o, r) ?? (0, import_chunk_f9x2f6cx.ot)(), parentAgentId: o, spawnDepth: n, description: y, prompt: p, selectedAgent: s, toolUseId: c, abortController: d, forkWorker: true });
  return r.register(h), { abortController: d, remove(w) {
    g(), A(), r.remove(e), (0, import_chunk_4f4ysf31.Lg)(e), (0, import_chunk_865at33z.dk)(e, d.signal.aborted ? "stopped" : w, { toolUseId: c, summary: y, outputFile: h.outputFile, skipTranscript: true, ambient: true });
  } };
}
var Jqr = `

...

[Output abbreviated due to length limit]`;
function YIa() {
  let e = (0, import_chunk_865at33z.b)("tengu_fuzzy_quilt", 0);
  return typeof e === "number" && e > Jqr.length ? e : 0;
}
function XIa(e, o) {
  let n = 0;
  for (let r of e) n += r.type === "text" ? r.text.length : 0;
  if (o === 0 || n <= o) return e;
  let m = o - Jqr.length, p = false, s = [];
  for (let r of e) if (r.type !== "text") s.push(r);
  else if (!p && r.text.length <= m) s.push(r), m -= r.text.length;
  else if (!p) {
    p = true;
    let c = r.text.charCodeAt(m - 1), f = c >= 55296 && c <= 56319 ? m - 1 : m;
    s.push({ ...r, text: r.text.slice(0, f) + Jqr });
  }
  return s;
}
