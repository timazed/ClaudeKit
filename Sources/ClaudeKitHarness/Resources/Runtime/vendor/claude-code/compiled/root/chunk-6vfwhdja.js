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
var chunk_6vfwhdja_exports = {};
__export(chunk_6vfwhdja_exports, {
  HBo: () => HBo,
  R7n: () => R7n
});
module.exports = __toCommonJS(chunk_6vfwhdja_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_z6fw3k9q = require("/$bunfs/root/chunk-z6fw3k9q.js");
var import_chunk_7ch4vsmn = require("/$bunfs/root/chunk-7ch4vsmn.js");
var import_chunk_78edkytf = require("/$bunfs/root/chunk-78edkytf.js");
var import_chunk_6hz903p5 = require("/$bunfs/root/chunk-6hz903p5.js");
var import_chunk_208y07t1 = require("/$bunfs/root/chunk-208y07t1.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function x(r) {
  let { bySlug: n } = (0, import_chunk_6hz903p5.R4r)();
  if (n.size === 0) return r;
  return r.map((e) => {
    let f = Math.min((n.get(e.slug) ?? 0) + (e.unattendedReplies ?? 0), import_chunk_6hz903p5.x7t);
    return f > 0 ? { ...e, unattendedReplies: f } : e;
  });
}
var O = 2e3, y = "exit-handoff agent flush timeout";
function L() {
  let r = import_chunk_z6fw3k9q.x_e.of((0, import_chunk_f9x2f6cx.N)().host).last;
  return [...(0, import_chunk_rb36kwbn.pk)()?.adoptShellOutputReadRoot ? [(0, import_chunk_rb36kwbn.pk)().adoptShellOutputReadRoot] : [], ...r ? [(0, import_chunk_zsz02y6d.QEr)((0, import_chunk_zsz02y6d.pbo)(r.worktreePath))] : []];
}
function E(r) {
  let n = (0, import_chunk_865at33z.Kc)() ? (0, import_chunk_865at33z.j0)() : void 0, e = n && (0, import_chunk_0rkwgmhx.se)().builtInArtifactHiddenForMcp ? (0, import_chunk_4smdap7r.M)([...Array.from((0, import_chunk_0rkwgmhx.se)().live.supervisors.values()).filter((o) => o.autoReactWiring !== void 0).map((o) => o.slug), ...Object.values(r).flatMap((o) => o.type === "monitor_ws" && o.status === "running" && o.autoReactArmed === true && o.frameLive !== void 0 ? [o.frameLive.slug] : [])]) : [];
  if (!n || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (n) {
      let o = (0, import_chunk_0rkwgmhx.se)().live;
      if ((0, import_chunk_7ch4vsmn.tjr)(n), o.bootingWiredArms.size > 0) (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "booting_consent_uncarried");
      (0, import_chunk_6hz903p5.ptr)(/* @__PURE__ */ new Set([...o.inFlightSubscribes, ...e]));
    }
    return { shells: [], workflows: [], agents: [], unresumedAgents: [], unresumedWorkflows: [], frameLive: [], frameLiveTaskIds: [], wakeOnlyFrameLiveSlugs: e, jobDir: void 0, agentTranscriptPaths: {}, workflowTranscriptDirs: {}, projectTempDir: (0, import_chunk_rb36kwbn.pk)()?.adoptShellOutputRoot ?? (0, import_chunk_zsz02y6d.PC)(), mergeShellOutputReadRoots: L() };
  }
  let f = (0, import_chunk_7ch4vsmn.w_e)(r), g = Object.values(r), p = g.filter((o) => (0, import_chunk_7ch4vsmn.rjr)(o, f)), h = g.filter((o) => (0, import_chunk_7ch4vsmn.WBo)(o, f)), S = (0, import_chunk_7ch4vsmn.UBo)(n), T = (o) => !(0, import_chunk_0rkwgmhx.se)().autoReact.userDisarmed && !(0, import_chunk_208y07t1.mE)(o.slug), b = (0, import_chunk_7ch4vsmn.tjr)(n), v = x((0, import_chunk_7ch4vsmn.$Bo)([{ entries: (0, import_chunk_7ch4vsmn.ZWr)(r), fallbackBasis: Date.now() }, { entries: b.filter(T), fallbackBasis: Date.now() }, { entries: (0, import_chunk_7ch4vsmn.iGs)(n).filter(T), fallbackBasis: Date.now() }])), k = new Set(v.map((o) => o.slug)), A = (0, import_chunk_0rkwgmhx.se)().live;
  if ([...A.bootingWiredArms.keys()].some((o) => !k.has(o))) (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "booting_consent_uncarried");
  return (0, import_chunk_6hz903p5.ptr)(/* @__PURE__ */ new Set([...k, ...A.inFlightSubscribes, ...e])), { shells: g.filter((o) => (0, import_chunk_7ch4vsmn.BBo)(o, f) && o.agentId === void 0), workflows: p, agents: h, unresumedAgents: S.agents, unresumedWorkflows: S.workflows, frameLive: v, frameLiveTaskIds: Object.values(r).filter((o) => (0, import_chunk_7ch4vsmn.rue)(o) && o.frameLive !== void 0 && k.has(o.frameLive.slug)).map((o) => o.id), wakeOnlyFrameLiveSlugs: e, jobDir: n, agentTranscriptPaths: Object.fromEntries(h.map((o) => [o.agentId, (0, import_chunk_hsqa3g9e.$g)((0, import_chunk_mzmcvr6c.ro)(o.agentId))])), workflowTranscriptDirs: Object.fromEntries(p.map((o) => [o.workflowRunId, (0, import_chunk_78edkytf.UJ)(o.workflowRunId)])), projectTempDir: (0, import_chunk_rb36kwbn.pk)()?.adoptShellOutputRoot ?? (0, import_chunk_zsz02y6d.PC)(), mergeShellOutputReadRoots: L(), sessionId: (0, import_chunk_865at33z.Sy)() ? (0, import_chunk_f9x2f6cx.W)() : void 0 };
}
function F({ shells: r, workflows: n, agents: e, unresumedAgents: f, unresumedWorkflows: g, frameLive: p, jobDir: h, agentTranscriptPaths: S, workflowTranscriptDirs: T, projectTempDir: b, mergeShellOutputReadRoots: v, sessionId: k }, A) {
  for (let c of n) c.abortController?.abort((0, import_chunk_cbnm4p23.hl)("background"));
  for (let c of e) c.abortController?.abort((0, import_chunk_cbnm4p23.hl)("background"));
  let o = (async () => {
    let c = [];
    if (e.length > 0) {
      try {
        await (0, import_chunk_5appeerh.qt)((async () => {
          await (0, import_chunk_ayyyz8kh.Kd)(), await (0, import_chunk_bzyb60p0.Pf)();
        })(), O, y);
      } catch (d) {
        let R = d instanceof Error && d.message === y;
        (0, import_chunk_cqa9hrgx.l)("task_local_agent_exit_handoff", R ? "flush_timeout" : "flush_failed"), (0, import_chunk_w578pjby.t)(`exit handoff: agent transcript flush failed: ${d}`, { level: "warn" });
      }
      c = await Promise.all(e.map((d) => (0, import_chunk_7ch4vsmn.NBo)(d, { derivedTranscriptPath: S[d.agentId] })));
    }
    c.push(...f);
    let w = (await Promise.all(r.map((d) => (0, import_chunk_7ch4vsmn.LBo)(d, { rerootOutputsTo: b })))).filter((d) => d !== null), _ = [...await Promise.all(n.map((d) => (0, import_chunk_7ch4vsmn.FBo)(d, { derivedTranscriptDir: T[d.workflowRunId] }))), ...g];
    if (w.length === 0 && _.length === 0 && c.length === 0 && p.length === 0 || !h) return;
    try {
      if (await (0, import_chunk_7ch4vsmn.H9t)(h, { writtenAtMs: Date.now(), origin: "exit", ...k !== void 0 && { sessionIds: [k] }, shells: w, cron: [], workflows: _, agents: c, ...p.length > 0 && { frameLive: p } }, { mergeShellOutputRoot: [b, ...v ?? []] }, A), (0, import_chunk_y53wbr8a.a)("tengu_adopt_exit_handoff", { adopted_shells: w.length, adopted_workflows: _.length, adopted_agents: c.length, adopted_frame_live: p.length }), w.length > 0) (0, import_chunk_cqa9hrgx.u)("task_local_shell_exit_handoff");
      if (_.length > 0) (0, import_chunk_cqa9hrgx.u)("task_local_workflow_exit_handoff");
      if (c.length > 0) (0, import_chunk_cqa9hrgx.u)("task_local_agent_exit_handoff");
      (0, import_chunk_w578pjby.t)(`exit handoff: ${w.length} background shell(s), ${_.length} workflow(s), ${c.length} agent(s), and ${p.length} comment-monitoring consent record(s) handed to the next wake of this session`);
    } catch (d) {
      for (let R of r) try {
        R.shellCommand?.kill();
      } catch {
      }
      if (r.length > 0) (0, import_chunk_cqa9hrgx.m)("task_local_shell_exit_handoff", "write_failed");
      if (n.length > 0) (0, import_chunk_cqa9hrgx.m)("task_local_workflow_exit_handoff", "write_failed");
      if (c.length > 0) (0, import_chunk_cqa9hrgx.m)("task_local_agent_exit_handoff", "write_failed");
      if (p.length > 0 && h !== void 0) (0, import_chunk_7ch4vsmn.sGs)(h, p), (0, import_chunk_cqa9hrgx.m)("artifact_live_subscribe", "consent_exit_write_failed");
      (0, import_chunk_w578pjby.t)(`exit handoff: adopt.json write failed: ${d}`, { level: "warn" });
    }
  })();
  return (0, import_chunk_bzyb60p0.P2a)(o), o;
}
function R7n(r, n) {
  let e = E(r), f = e.shells.length > 0 || e.workflows.length > 0 || e.agents.length > 0 || e.unresumedAgents.length > 0 || e.unresumedWorkflows.length > 0 || e.frameLive.length > 0 ? F(e, n) : void 0, g = new Set([...e.shells, ...e.workflows, ...e.agents].map((p) => p.id));
  return HBo(r, g), f;
}
function HBo(r, n = /* @__PURE__ */ new Set()) {
  for (let e of Object.values(r)) {
    if (e.status !== "running" || n.has(e.id)) continue;
    try {
      if ((0, import_chunk_sjqze7qg.If)(e)) e.shellCommand?.kill((0, import_chunk_xfj2cwfv.nn)() ? { cause: "session_exit" } : void 0), e.shellCommand?.cleanup();
      else if ((0, import_chunk_xfj2cwfv.nn)()) {
        (0, import_chunk_4f4ysf31.Lg)(e.id);
        continue;
      } else if ("abortController" in e) e.abortController?.abort();
      if (!((0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_z6hn62tj.SBt)(e)) && !(0, import_chunk_z6hn62tj.Kf)(e)) (0, import_chunk_865at33z.dk)(e.id, "stopped", { toolUseId: e.toolUseId, summary: e.description, ambient: (0, import_chunk_z6hn62tj.lj)(e) });
      (0, import_chunk_4f4ysf31.Lg)(e.id);
    } catch (f) {
      (0, import_chunk_k449cc64.i)(f);
    }
  }
}
