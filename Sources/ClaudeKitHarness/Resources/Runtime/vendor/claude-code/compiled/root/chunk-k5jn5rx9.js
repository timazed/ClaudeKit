const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_k5jn5rx9_exports = {};
__export(chunk_k5jn5rx9_exports, {
  $8: () => $8,
  A4n: () => A4n,
  C4n: () => C4n,
  CBl: () => CBl,
  Cft: () => Cft,
  Fra: () => Fra,
  R4n: () => R4n,
  TBl: () => TBl,
  fLs: () => fLs,
  m0o: () => m0o,
  mLs: () => mLs,
  ote: () => ote,
  p1e: () => p1e,
  pLs: () => pLs,
  ts: () => ts,
  vBl: () => vBl,
  wb: () => wb
});
module.exports = __toCommonJS(chunk_k5jn5rx9_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_os = __toESM(require("os"));
var import_path = require("path");
function C4n() {
  for (let e of [process.env.CCR_SPAWN_TIMESTAMP_MS, process.env.CLAUDE_CODE_SPAWN_TIMESTAMP_MS]) {
    if (e === void 0 || e.trim() === "") continue;
    let o = Number.parseInt(e, 10);
    if (Number.isFinite(o)) return o;
  }
  return;
}
var Z = ["init_after_graceful_shutdown", "init_network_configured", "preAction_after_init", "preAction_after_migrations", "preAction_after_remote_settings", "action_handler_start", "action_before_mcp_policy_wait", "action_before_permission_context", "action_after_input_prompt", "action_before_setup", "action_after_policy_limits_cold_await", "action_after_setup", "action_commands_loaded", "action_mcp_configs_loaded", "action_before_listed_mods", "action_after_plugins_init", "before_validateForceLoginOrg", "before_connectMcp", "after_connectMcp_claudeai", "before_print_import", "after_print_import", "runHeadless_entry", "after_grove_check", "before_sandbox_init", "after_sandbox_init", "before_loadInitialMessages", "resume_load_entry", "resume_conversation_loaded", "resume_hooks_wait_ended", "resume_state_restored", "resume_worktree_restored", "resume_transcript_adopted", "loadInitialMessages_returned", "after_loadInitialMessages", "after_modelStrings", "before_runHeadlessStreaming", "stdin_listen_started", "initialize_handling_started", "initialize_after_workspace_trust", "initialize_before_reply"], Q = new Set(Z);
function D(e) {
  return Q.has(e);
}
var m0o = "startup_mark";
var vBl = 64;
var g = (0, import_chunk_t57w17k7.de)({ writeLine: void 0, ended: false, written: /* @__PURE__ */ new Set() }, (e) => {
  e.writeLine = void 0, e.ended = false, e.written.clear();
});
function TBl(e) {
  if (g.ended || g.writeLine !== void 0) return;
  g.writeLine = e;
}
function ote(e) {
  if (g.writeLine === void 0) return;
  if (!D(e) || g.written.has(e)) return;
  g.written.add(e);
  try {
    g.writeLine(`{"type":"keep_alive","${m0o}":"${e}"}
`);
  } catch (o) {
    A4n(), (0, import_chunk_w578pjby.t)(`The start-up mark report ended, because its writer threw: ${o instanceof Error && typeof o.message === "string" ? o.message : typeof o}`, { level: "error" });
  }
}
function A4n() {
  g.writeLine = void 0, g.ended = true;
}
var I = null;
function p1e() {
  if (!I) I = (0, import_chunk_w1d7ygsk.ft)("perf_hooks").performance;
  return I;
}
function Cft(e) {
  return e.toFixed(3);
}
function fLs(e, o, r, i, p, d, f = "") {
  let n = i ? ` | RSS: ${(0, import_chunk_7e12xj51.dn)(i.rss)}, Heap: ${(0, import_chunk_7e12xj51.dn)(i.heapUsed)}` : "";
  return `[+${Cft(e).padStart(p)}ms] (+${Cft(o).padStart(d)}ms) ${r}${f}${n}`;
}
var A = import_chunk_c203g5kd.s.CLAUDE_CODE_PROFILE_STARTUP, ee = 0.05, v = Math.random() < ee;
function CBl() {
  return v;
}
var te = A || v, k = "headless_";
class U {
  current = -1;
  turn0Marks = [];
  advance() {
    this.current++;
  }
}
var re = new import_chunk_2904xtvq.j(() => new U());
function x() {
  return re.of((0, import_chunk_f9x2f6cx.N)().host);
}
function F() {
  return x().turn0Marks;
}
function ne() {
  let e = p1e(), o = e.getEntriesByType("mark");
  for (let r of o) if (r.name.startsWith(k)) e.clearMarks(r.name);
}
function pLs() {
  if (!L()) return;
  let e = x();
  if (e.advance(), ne(), p1e().mark(`${k}turn_start`), A) (0, import_chunk_w578pjby.t)(`[headlessProfiler] Started turn ${e.current}`);
}
function wb(e) {
  if (ote(e), !L()) return;
  let o = p1e();
  if (o.mark(`${k}${e}`), A) (0, import_chunk_w578pjby.t)(`[headlessProfiler] Checkpoint: ${e} at ${o.now().toFixed(1)}ms`);
}
function mLs() {
  if (!L()) return;
  let r = p1e().getEntriesByType("mark").filter((c) => c.name.startsWith(k));
  if (r.length === 0) return;
  let i = /* @__PURE__ */ new Map();
  for (let c of r) {
    let u = c.name.slice(k.length);
    i.set(u, c.startTime);
  }
  let p = i.get("turn_start");
  if (p === void 0) return;
  let d = x(), f = d.current;
  if (A && f === 0) d.turn0Marks = r.map(({ name: c, startTime: u }) => ({ name: c, startTime: u }));
  let n = { turn_number: f };
  if (f === 0) for (let [c, [u, m]] of Object.entries({ load_initial_messages_ms: ["before_loadInitialMessages", "after_loadInitialMessages"], system_prompt_ms: ["before_getSystemPrompt", "after_getSystemPrompt"], streaming_setup_ms: ["before_runHeadlessStreaming", "stdin_listen_started"], stdin_wait_ms: ["stdin_listen_started", "run_entry"], mcp_prewait_ms: ["before_mcp_prewait", "after_mcp_prewait"], grove_check_ms: ["before_grove_check", "after_grove_check"] })) {
    let l = i.get(u), y = i.get(m);
    if (l !== void 0 && y !== void 0 && y > l) n[c] = Math.round(y - l);
  }
  let M = i.get("system_message_yielded");
  if (M !== void 0 && f === 0) n.time_to_system_message_ms = Math.round(M);
  let h = i.get("query_started");
  if (h !== void 0) n.time_to_query_start_ms = Math.round(h - p);
  let T = i.get("first_chunk");
  if (T !== void 0) n.time_to_first_response_ms = Math.round(T - p);
  let E = i.get("api_request_sent");
  if (h !== void 0 && E !== void 0) n.query_overhead_ms = Math.round(E - h);
  let b = oe(r);
  if (b.length > 0) {
    n.query_round_count = b.length;
    let c = b.flatMap((m) => m.overheadMs === void 0 ? [] : [m.overheadMs]);
    if (c.length > 0) n.query_overhead_first_ms = c[0], n.query_overhead_max_ms = c.reduce((m, l) => Math.max(m, l)), n.query_overhead_total_ms = c.reduce((m, l) => m + l, 0);
    let u = b[0]?.firstChunkAt;
    if (u !== void 0) n.time_to_first_response_first_round_ms = Math.round(u - p);
  }
  if (n.checkpoint_count = r.length, import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT) n.entrypoint = (0, import_chunk_78g0060s.fe)((0, import_chunk_3t7ve0wy.fh)()) ?? (0, import_chunk_78g0060s.S)("other");
  if (v) (0, import_chunk_y53wbr8a.a)("tengu_headless_latency", n);
  if (A) (0, import_chunk_w578pjby.t)(`[headlessProfiler] Turn ${f} metrics: ${(0, import_chunk_w578pjby._)(n)}`);
}
function oe(e) {
  let o = [];
  for (let r of e) {
    let i = r.name.startsWith(k) ? r.name.slice(k.length) : r.name, p = o.at(-1);
    if (i === "query_started") o.push({ startedAt: r.startTime });
    else if (p !== void 0 && i === "api_request_sent") p.dispatchedAt ??= r.startTime;
    else if (p !== void 0 && i === "first_chunk") p.firstChunkAt ??= r.startTime;
  }
  return o.map((r) => ({ ...r.dispatchedAt !== void 0 && { overheadMs: Math.round(r.dispatchedAt - r.startedAt) }, ...r.firstChunkAt !== void 0 && { firstChunkAt: r.firstChunkAt } }));
}
function L() {
  return te && (0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_f9x2f6cx.Y)();
}
var R = import_chunk_c203g5kd.s.CLAUDE_CODE_PROFILE_STARTUP, se = 5e-3, J = Math.random() < se, w = R || J;
class V {
  memorySnapshots = [];
  startupContext = {};
  bootstrapEntry = "cli";
  onceMarked = /* @__PURE__ */ new Set();
  reported = false;
  lateReported = false;
  firstEmitPhases = /* @__PURE__ */ new Set();
}
var ae = new import_chunk_2904xtvq.j(() => new V());
function P() {
  return (0, import_chunk_f9x2f6cx.kr)(ae);
}
var _e = { import_time: ["cli_entry", "main_tsx_imports_loaded"], main_imports: ["cli_before_main_import", "main_tsx_entry"], cli_own_imports: ["cli_entry", "cli_before_prefetch_launches"], cli_prefetch_launch: ["cli_before_prefetch_launches", "cli_before_main_import"], mdm_keychain_await: ["preAction_start", "preAction_after_mdm"], init_time: ["init_function_start", "init_function_end"], init_safe_env: ["init_configs_enabled", "init_safe_env_vars_applied"], init_network: ["init_after_remote_settings_check", "init_network_configured"], init_tail: ["init_network_configured", "init_function_end"], init_preconnect: ["init_before_preconnect", "init_after_preconnect"], init_git_bash_probe: ["init_before_shell_detect", "init_git_bash_probed"], init_powershell_probe: ["init_git_bash_probed", "init_after_shell_detect"], settings_time: ["eagerLoadSettings_start", "eagerLoadSettings_end"], tools_loaded: ["init_function_end", "action_tools_loaded"], preaction_tail: ["init_function_end", "action_handler_start"], action_prologue: ["action_handler_start", "action_after_input_prompt"], action_setup_span: ["action_after_input_prompt", "action_after_setup"], setup_uds_messaging: ["setup_uds_start", "setup_uds_end"], setup_uds_import: ["setup_uds_start", "setup_uds_imported"], setup_uds_dir: ["setup_uds_imported", "uds_inbox_dir_ready"], setup_uds_listen: ["uds_inbox_dir_ready", "uds_inbox_listening"], setup_uds_publish: ["uds_inbox_listening", "uds_inbox_key_published"], mcp_configs: ["action_tools_loaded", "action_mcp_configs_loaded"], commands_load: ["action_tools_loaded", "action_commands_loaded"], model_catalog: ["action_commands_loaded", "action_model_catalog_decided"], model_resolve: ["action_model_catalog_decided", "action_model_resolved"], client_data_and_screens: ["action_model_resolved", "action_after_setup_screens"], mcp_configs_read: ["action_after_setup_screens", "action_mcp_configs_read"], mcp_policy_wait: ["action_mcp_configs_read", "action_mcp_policy_waited"], plugins_init: ["action_mcp_configs_loaded", "action_after_plugins_init"], headless_setup: ["action_after_plugins_init", "before_validateForceLoginOrg"], force_login_org: ["before_validateForceLoginOrg", "before_connectMcp"], mcp_connect: ["before_connectMcp", "after_connectMcp_claudeai"], mcp_connect_user: ["before_mcp_connect_user", "after_mcp_connect_user"], mcp_connect_connector: ["before_mcp_connect_connector", "after_mcp_connect_connector"], growthbook_init: ["before_growthbook_init", "after_growthbook_init"], prewait: ["after_connectMcp_claudeai", "after_print_import"], sandbox_init: ["before_sandbox_init", "after_sandbox_init"], load_initial_messages: ["before_loadInitialMessages", "after_loadInitialMessages"], process_user_input: ["before_processUserInput", "after_processUserInput"], total_time: ["cli_entry", "main_after_run"] }, ce = /* @__PURE__ */ new Set(["total_time", "main_imports", "mdm_keychain_await", "init_safe_env", "init_network", "init_tail", "init_preconnect", "init_git_bash_probe", "init_powershell_probe", "mcp_connect_user", "mcp_connect_connector", "growthbook_init", "preaction_tail", "action_prologue", "action_setup_span", "setup_uds_messaging", "setup_uds_import", "setup_uds_dir", "setup_uds_listen", "setup_uds_publish", "cli_own_imports", "cli_prefetch_launch", "commands_load", "model_catalog", "model_resolve", "client_data_and_screens", "mcp_configs_read", "mcp_policy_wait"]);
if (w) ts("profiler_initialized");
var q = w ? Date.now() : void 0, O = w ? Math.round(process.uptime() * 1e3) : void 0;
function $8(e) {
  if (!w) return;
  Object.assign(P().startupContext, e);
}
function Fra() {
  return P().bootstrapEntry;
}
function ts(e, { once: o = false } = {}) {
  if (ote(e), !w) return false;
  let { onceMarked: r, memorySnapshots: i } = P();
  if (o) {
    if (r.has(e)) return false;
    r.add(e);
  }
  if (p1e().mark(e), R) i.push(process.memoryUsage());
  return true;
}
function B({ memorySnapshots: e }) {
  if (!R) return "Startup profiling not enabled";
  let r = p1e().getEntriesByType("mark");
  if (r.length === 0) return "No profiling checkpoints recorded";
  let i = [];
  i.push("=".repeat(80)), i.push("STARTUP PROFILING REPORT"), i.push("=".repeat(80)), i.push("");
  let p = 0;
  for (let [f, n] of r.entries()) i.push(fLs(n.startTime, n.startTime - p, n.name, e[f], 8, 7)), p = n.startTime;
  let d = r.at(-1);
  return i.push(""), i.push(`Total startup time: ${Cft(d?.startTime ?? 0)}ms`), i.push("=".repeat(80)), i.join(`
`);
}
function R4n() {
  let e = P();
  if (e.reported) {
    if (!e.lateReported) e.lateReported = true, K({ late: true }), G(e);
    return;
  }
  e.reported = true, K({ late: false }), G(e);
}
function G(e) {
  if (!R) return;
  let o = pe(), r = (0, import_path.dirname)(o);
  (0, import_chunk_w578pjby.le)().mkdirSync(r), (0, import_chunk_w578pjby.I4t)(o, B(e), { encoding: "utf8", flush: true });
  let d = p1e().getEntriesByType("mark");
  (0, import_chunk_w578pjby.I4t)(ue(), JSON.stringify({ metadata: X(e, { late: false }) ?? {}, marks: d.map((f) => ({ name: f.name, startTime: f.startTime })), memory: e.memorySnapshots, nodeBootMs: O, headlessTurn0Marks: F() }, null, 2), { encoding: "utf8", flush: true }), (0, import_chunk_w578pjby.t)("Startup profiling report:"), (0, import_chunk_w578pjby.t)(B(e));
}
function pe() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "startup-perf", `${(0, import_chunk_f9x2f6cx.W)()}.txt`);
}
function ue() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "startup-perf", `${(0, import_chunk_f9x2f6cx.W)()}.json`);
}
function X({ firstEmitPhases: e, startupContext: o }, { late: r }) {
  let p = p1e().getEntriesByType("mark");
  if (p.length === 0) return null;
  let d = /* @__PURE__ */ new Map();
  for (let c of p) d.set(c.name, c.startTime);
  let f = d.get("main_after_run"), n = {}, M = 0, h = 0;
  for (let [c, [u, m]] of Object.entries(_e)) {
    if (r && e.has(c)) continue;
    let l = d.get(u), y = d.get(m);
    if (l !== void 0 && y !== void 0) {
      let C = Math.round(y - l);
      if (n[`${c}_ms`] = C, M++, !r) e.add(c);
      if (!ce.has(c) && (f === void 0 || y <= f)) h += C;
    }
  }
  if (r) {
    if (M === 0) return null;
    n.late = true;
  } else n.late = false;
  let T = n.total_time_ms;
  if (typeof T === "number") n.gap_unaccounted_ms = Math.max(0, T - h);
  n.free_mem_mb = Math.round(import_os.default.freemem() / 1048576), n.load_avg_1m = Math.round((import_os.default.loadavg()[0] ?? 0) * 100) / 100, n.checkpoint_count = p.length;
  let E = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (E) n.ccr_session_id = (0, import_chunk_49zxha55.Ce)(E);
  if (O !== void 0) n.node_boot_ms = O;
  let b = C4n();
  if (b !== void 0 && q !== void 0) n.spawn_to_first_checkpoint_ms = Math.round(q - b);
  return Object.assign(n, o), n;
}
function K({ late: e } = { late: false }) {
  if (!J || (0, import_chunk_f9x2f6cx.Pd)()) return;
  let o = X(P(), { late: e });
  if (o === null) return;
  (0, import_chunk_y53wbr8a.a)("tengu_startup_perf", o);
}
