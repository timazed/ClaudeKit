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
var chunk_scytkwpe_exports = {};
__export(chunk_scytkwpe_exports, {
  Axa: () => Axa,
  Cxa: () => Cxa,
  D5s: () => D5s,
  Txa: () => Txa,
  ZKe: () => ZKe,
  r6o: () => r6o
});
module.exports = __toCommonJS(chunk_scytkwpe_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_97tvwnfb = require("/$bunfs/root/chunk-97tvwnfb.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_mahb4v28 = require("/$bunfs/root/chunk-mahb4v28.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_vh92d4r0 = require("/$bunfs/root/chunk-vh92d4r0.js");
var import_path = require("path");
function Txa() {
  return (0, import_chunk_ch6jxpf8.R_)(M);
}
function M() {
  let e = (0, import_chunk_d2tjaek4.kg)();
  if (e) throw new import_chunk_jgsh7w3m.h7(`${e} \u2014 the teammate is not started unwrapped; fix the launcher setting, then retry`);
  let o = process.env[import_chunk_xfj2cwfv.sHl], { cmd: r, prefixArgs: n } = o ? (0, import_chunk_66srb2mf.Jq)({ cmd: o, prefixArgs: [], target: o }) : (0, import_chunk_66srb2mf.Vf)({ pinToCurrentBinary: true });
  return [r, ...n];
}
function d(e, o) {
  if (o) return "plan";
  if (e === "plan" || e === "dontAsk") return "default";
  return e;
}
function Cxa({ planModeRequired: e, permissionMode: o, proactivityLevel: r, autoPickedByLevel: n = false }) {
  if (o === void 0) return [];
  let _ = d(o, e ?? false);
  if (!e && r !== void 0) _ = (0, import_chunk_bzyb60p0.xye)(_, r, n);
  switch (_) {
    case "bypassPermissions":
      return ["--dangerously-skip-permissions"];
    case "acceptEdits":
      return ["--permission-mode acceptEdits"];
    case "auto":
      return ["--permission-mode auto"];
    case "default":
    case "plan":
    case "dontAsk":
    case "bubble":
      return [`--permission-mode ${(0, import_chunk_xcgcdx61.Qc)(_)}`];
  }
}
var G = ["CLAUDE_CODE_USE_BEDROCK", "CLAUDE_CODE_USE_VERTEX", "CLAUDE_CODE_USE_FOUNDRY", "CLAUDE_CODE_USE_ANTHROPIC_AWS", "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD", "CLAUDE_CODE_USE_MANTLE", "CLAUDE_CODE_USE_GATEWAY", "CLAUDE_CODE_BRIDGE_SETTINGS_BINDING", "ANTHROPIC_AWS_WORKSPACE_ID", "ANTHROPIC_AWS_BASE_URL", "ANTHROPIC_AWS_API_KEY", "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH", "ANTHROPIC_GOOGLE_CLOUD_PROJECT", "GOOGLE_CLOUD_PROJECT", "ANTHROPIC_GOOGLE_CLOUD_LOCATION", "ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID", "ANTHROPIC_GOOGLE_CLOUD_BASE_URL", "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH", "AWS_BEARER_TOKEN_BEDROCK", "ANTHROPIC_BEDROCK_MANTLE_BASE_URL", "CLAUDE_CODE_SKIP_MANTLE_AUTH", "AWS_REGION", "AWS_DEFAULT_REGION", "AWS_PROFILE", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "ANTHROPIC_BEDROCK_SERVICE_TIER", "CLAUDE_CODE_AUTO_MODE_SERVER", "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS", "CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS", "ANTHROPIC_BEDROCK_REGION_PREFIX", "CLAUDE_CODE_SUBAGENT_EFFORT", "CLAUDE_CODE_SUBAGENT_MODEL", "CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL", "CLAUDE_CODE_DISABLE_PROACTIVITY", "CLAUDE_CODE_DISABLE_FILE_MENTIONS", "CLAUDE_CODE_DISABLE_WEB_FETCH", "CLAUDE_CODE_WEBFETCH_MCP_TOOL", "CLAUDE_CODE_DISABLE_MCP_TASKS", "CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_DISABLE_ULTRATHINK", "DISABLE_COMPACT", "CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG", "CLAUDE_CODE_STOP_ON_UNUSABLE_PROFILE", "CLAUDE_CODE_PERSONAL_CONFIG_FIX", "CLAUDE_CODE_MODEL_CATALOG", "ANTHROPIC_BASE_URL", "CLAUDE_CONFIG_DIR", "CLAUDE_CODE_REMOTE", "CLAUDE_CODE_REMOTE_MEMORY_DIR", "HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy", "NO_PROXY", "no_proxy", "CLAUDE_CODE_PROXY_RESOLVES_HOSTS", ...import_chunk_gd77dyw4.vOe, ...Object.keys(import_chunk_gd77dyw4.R6e), ...import_chunk_gd77dyw4.JDo, "CLAUDE_CODE_DISABLE_FEATURE_FLAGS", "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC", "CLAUDE_CODE_HOST_CREDS_FILE", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_WITHHOLD_PRODUCT_EVENTS", "DISABLE_ERROR_REPORTING", "DISABLE_GROWTHBOOK", "DISABLE_TELEMETRY", "DO_NOT_TRACK"];
function Axa() {
  return (0, import_chunk_ch6jxpf8.R_)(h);
}
function h() {
  let e = ["CLAUDECODE=1", "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1"], { sessionListId: o } = (0, import_chunk_mvszxaxb.Zo)().taskList;
  if (o) e.push(`CLAUDE_CODE_TASK_LIST_ID=${(0, import_chunk_vh92d4r0.No)([o])}`);
  if ((0, import_chunk_3t7ve0wy.IB)()) e.push("CLAUDE_CODE_HOST_GATEWAY_LINEAGE=1");
  if ((0, import_chunk_3t7ve0wy.Nw)() && !(0, import_chunk_3t7ve0wy.y4t)()) e.push("CLAUDE_CODE_OFF_PERSONS_MACHINE=1");
  let r = new Set((0, import_chunk_gd77dyw4.l1e)(process.env));
  r.delete("CLAUDE_CODE_HOST_CREDS_FILE");
  let n = (0, import_chunk_5e3gtsn9.PV)(process.env);
  for (let E of new Set(G)) {
    if (r.has(E)) continue;
    let i = E === "CLAUDE_CODE_AUTO_MODE_SERVER" && (0, import_chunk_69qhefwa.Ne)(n[E]) ? (0, import_chunk_nnk8tdzz.Qk)(() => import_chunk_c203g5kd.s.CLAUDE_CODE_AUTO_MODE_SERVER) : n[E];
    if (i !== void 0 && i !== "") e.push(`${E}=${(0, import_chunk_vh92d4r0.No)([i])}`);
    else if (process.env[E] !== i) e.push(`${E}=''`);
  }
  let _ = (0, import_chunk_97tvwnfb.l1n)(), p = _.profile ?? (0, import_chunk_nnk8tdzz.Qk)(import_chunk_9b4aq7fb.u8) ?? "", a = _.profile ? (0, import_chunk_3f2ytgjw.Dwe)()?.dir : (0, import_chunk_nnk8tdzz.Qk)(() => import_chunk_c203g5kd.s.ANTHROPIC_CONFIG_DIR?.trim());
  e.push(`ANTHROPIC_PROFILE=${(0, import_chunk_vh92d4r0.No)([p])}`), e.push(`ANTHROPIC_CONFIG_DIR=${(0, import_chunk_vh92d4r0.No)([a ? (0, import_path.resolve)(a) : ""])}`);
  let T = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (T !== void 0) e.push(`CLAUDE_SECURESTORAGE_CONFIG_DIR=${(0, import_chunk_vh92d4r0.No)([T])}`);
  let S = import_chunk_c203g5kd.s.CLAUDE_CODE_AUTO_MODE_TIER;
  if (S !== void 0) e.push(`CLAUDE_CODE_AUTO_MODE_TIER=${(0, import_chunk_vh92d4r0.No)([S])}`);
  return e.push(`CLAUDE_CODE_ATTRIBUTION_PROJECT=${(0, import_chunk_vh92d4r0.No)([import_chunk_c203g5kd.s.CLAUDE_CODE_ATTRIBUTION_PROJECT ?? ""])}`), e.push(`CLAUDE_CODE_USER_DELEGATED_SESSION_DIRECT_API=${import_chunk_c203g5kd.s.CLAUDE_CODE_USER_DELEGATED_SESSION_DIRECT_API ? "1" : "''"}`), e.push(`CLAUDE_CODE_USER_DELEGATED_SESSION=${import_chunk_c203g5kd.s.CLAUDE_CODE_USER_DELEGATED_SESSION ? "1" : "''"}`), e.push(`CLAUDE_CODE_USER_DELEGATED_SESSION_ANY_CHECK_MODEL=${import_chunk_c203g5kd.s.CLAUDE_CODE_USER_DELEGATED_SESSION_ANY_CHECK_MODEL ? "1" : "''"}`), e.push(`CLAUDE_CODE_USER_DELEGATED_SESSION_ALLOWED_CHECK_MODELS=${(0, import_chunk_vh92d4r0.No)([n.CLAUDE_CODE_USER_DELEGATED_SESSION_ALLOWED_CHECK_MODELS ?? ""])}`), e.push("CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS="), e.join(" ");
}
function ZKe(e, o) {
  let r = (0, import_chunk_vh92d4r0.No)([o]), n = r === o && o.includes(",") ? `'${o}'` : r;
  return (0, import_chunk_dw5px5e0.kte)(o) ? `${e} ${n}` : `${e}=${n}`;
}
var U = 50;
function r6o(e) {
  let o = (0, import_chunk_sah8dzn4.x3)(e, U), r = (0, import_chunk_7cfjrnwy.ee)(o, U);
  return r.length < o.length ? `${r}...` : r;
}
async function D5s(e, o) {
  let { name: r, teamName: n, prompt: _, color: p, planModeRequired: a, model: T } = e, { taskRegistry: S } = o, E = (0, import_chunk_865at33z.aee)(r, n), i = (0, import_chunk_ed372ykp.OT)("in_process_teammate"), D = e.resumableAgentId ?? (0, import_chunk_mzmcvr6c.qS)(r);
  (0, import_chunk_w578pjby.t)(`[spawnInProcessTeammate] Spawning ${E} (taskId: ${i})`);
  try {
    let A = (0, import_chunk_cbnm4p23._r)(), C = (0, import_chunk_f9x2f6cx.W)(), c = { agentId: E, agentName: r, teamName: n, color: p, planModeRequired: a, parentSessionId: C, resumableAgentId: D }, g = (0, import_chunk_wtm85h0y.MHl)({ agentId: E, agentName: r, teamName: n, color: p, planModeRequired: a, parentSessionId: C, hasTaskListTools: (0, import_chunk_0dht3xy7.YW)() && o.rootToolSurface.tools.some((L) => (0, import_chunk_4vsz8a99.gt)(L, import_chunk_mahb4v28.$m)), abortController: A });
    if ((0, import_chunk_z2xw6net.kkt)()) (0, import_chunk_z2xw6net.bho)(E, r, C);
    let P = e.description || r6o(_);
    (0, import_chunk_bzyb60p0.fBe)(D);
    let l = { ...(0, import_chunk_ed372ykp.tb)(i, "in_process_teammate", P, o.toolUseId, D), type: "in_process_teammate", status: "running", identity: c, spawnedWith: e.spawnedWith, prompt: e.shownPrompt ?? _, model: T, effort: e.effort, abortController: A, awaitingPlanApproval: false, permissionMode: e.permissionMode ?? d((0, import_chunk_bz1f2qnq.Z)(o).mode, a), isIdle: false, lastReportedToolCount: 0, lastReportedTokenCount: 0, pendingUserMessages: [] };
    S.register(l);
    let I = o.getAppState(), O = I.agentNameRegistry.get(r);
    if (O !== D) {
      let L = O !== void 0 ? I.tasks[O] : void 0, R = O !== void 0 && (L?.status === "running" || (0, import_chunk_4yjj7pjs.An)(L) || Object.values(I.tasks).some((f) => (0, import_chunk_z6hn62tj.Xm)(f) && f.status === "running" && f.identity.resumableAgentId === O)) ? o.agentLifecycle.allocateName(r) : r;
      if (R !== r) (0, import_chunk_w578pjby.t)(`[spawnInProcessTeammate] name "${r}" already routes to live ${O}; registry entry uses "${R}" instead`);
      o.agentLifecycle.registerName(R, D);
    }
    return (0, import_chunk_w578pjby.t)(`[spawnInProcessTeammate] Registered ${E} in AppState`), (0, import_chunk_cqa9hrgx.u)("swarm_in_process_spawn"), { ok: true, agentId: E, identity: c, taskId: i, outputFile: l.outputFile, abortController: A, teammateContext: g };
  } catch (A) {
    let C = A instanceof Error ? A.message : "Unknown error during spawn";
    return (0, import_chunk_w578pjby.t)(`[spawnInProcessTeammate] Failed to spawn ${E}: ${C}`), (0, import_chunk_cqa9hrgx.m)("swarm_in_process_spawn", "spawn_failed"), { ok: false, agentId: E, error: C };
  }
}
