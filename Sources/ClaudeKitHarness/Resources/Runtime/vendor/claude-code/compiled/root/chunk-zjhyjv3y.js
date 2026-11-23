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
var chunk_zjhyjv3y_exports = {};
__export(chunk_zjhyjv3y_exports, {
  $El: () => $El,
  BEl: () => BEl,
  FEl: () => FEl,
  GEl: () => GEl,
  Hji: () => Hji,
  JEl: () => JEl,
  KEl: () => KEl,
  NEl: () => NEl,
  QEl: () => QEl,
  UEl: () => UEl,
  VEl: () => VEl,
  WEl: () => WEl,
  XEl: () => XEl,
  YEl: () => YEl,
  Z2e: () => Z2e,
  ZEl: () => ZEl,
  avl: () => avl,
  dvl: () => dvl,
  evl: () => evl,
  iEo: () => iEo,
  ivl: () => ivl,
  jEl: () => jEl,
  lvl: () => lvl,
  nEo: () => nEo,
  nvl: () => nvl,
  oEo: () => oEo,
  ovl: () => ovl,
  pks: () => pks,
  qEl: () => qEl,
  rEo: () => rEo,
  rvl: () => rvl,
  sEo: () => sEo,
  svl: () => svl,
  tvl: () => tvl,
  zEl: () => zEl,
  zo: () => zo
});
module.exports = __toCommonJS(chunk_zjhyjv3y_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_etk95yep = require("/$bunfs/root/chunk-etk95yep.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_axd2vhx2 = require("/$bunfs/root/chunk-axd2vhx2.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_ae4rjsvk = require("/$bunfs/root/chunk-ae4rjsvk.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var b = ["runner_prep_total_ms", "runner_prep_git_proxy_config_ms", "runner_prep_reset_remote_ms", "runner_prep_outcome_branch_ms", "runner_prep_repo_settings_ms", "runner_prep_config_seed_ms", "runner_prep_remote_refetch_ms"], h = 604800, y = { git_have_age_s: h, git_pack_count: 1e4, standby_idle_s: h, healthz_claim_visible_ms: 6e5 }, R = 36e5, w = 6e5, P = new Set(b);
function v(e) {
  return Object.hasOwn(y, e);
}
function T(e) {
  return P.has(e);
}
function F(e) {
  return false;
}
function C(e) {
  return false;
}
function c(e, r) {
  if (typeof e !== "number" || !Number.isFinite(e)) return;
  let t = Math.round(e);
  return t < 0 ? void 0 : Math.min(t, r);
}
function S(e, r) {
  let t = Object.hasOwn(e, r) ? Reflect.get(e, r) : void 0;
  return typeof t === "object" && t !== null ? t : void 0;
}
function A(e) {
  if (typeof e !== "object" || e === null) return;
  let r = {};
  for (let [n, u] of Object.entries(S(e, "fields") ?? {})) if (v(n)) {
    let _ = c(u, y[n]);
    if (_ !== void 0) r[n] = _;
  }
  let t = {};
  for (let [n, u] of Object.entries(S(e, "phases") ?? {})) if (T(n) || C(n)) {
    let _ = c(u, R);
    if (_ !== void 0) t[n] = _;
  } else if (F(n)) {
    let _ = c(u, w);
    if (_ !== void 0) t[n] = _;
  }
  if (Object.keys(r).length === 0 && Object.keys(t).length === 0) return;
  return { fields: r, phases: t };
}
var M = 8192;
function k(e) {
  if (!e || e.length > M) return;
  try {
    return A((0, import_chunk_w578pjby.te)(e));
  } catch {
    return;
  }
}
function nEo() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_FEATURE_FLAGS_KICK_FROM_INIT || import_chunk_c203g5kd.s.CLAUDE_CODE_GROWTHBOOK_KICK_FROM_INIT;
}
function rEo() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_FEATURE_FLAGS_KICK_ON_WARM_CACHE || import_chunk_c203g5kd.s.CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE;
}
var E = ["to_spare_loaded", "to_claim", "to_input_ready", "to_first_message", "to_first_turn"], x = 10, O = { atMs: 0, cpuMs: 0, procStat: { minorFaults: 0, majorFaults: 0, childrenMinorFaults: 0, childrenCpuTicks: 0 }, storageReadBytes: 0 };
function H() {
  try {
    if ((0, import_chunk_f9x2f6cx.Y)()) return;
    let e = process.cpuUsage(), r = performance.now(), t, n;
    return { atMs: r, cpuMs: (e.user + e.system) / 1e3, procStat: t, storageReadBytes: n, threads: (0, import_chunk_ae4rjsvk.Gjn)() };
  } catch {
    (0, import_chunk_42tcgre6.q)("error", "startup_process_sample_failed");
    return;
  }
}
function d(e, r) {
  return Math.max(0, Math.round(r - e));
}
class m {
  sample;
  threadsAtStart;
  threadsAtClaim;
  ends = {};
  constructor(e = H, r = import_chunk_ae4rjsvk.xzi, t = import_chunk_ae4rjsvk.Pzi) {
    this.sample = e;
    this.threadsAtStart = r;
    this.threadsAtClaim = t;
  }
  end(e) {
    this.ends[e] ??= this.sample();
  }
  stretches() {
    let e = [], r = { ...O, threads: this.threadsAtStart() };
    for (let t of E) {
      let n = this.ends[t];
      if (n === void 0 || n.atMs < r.atMs) continue;
      let u = t === "to_claim" ? { ...n, threads: n.threads ?? this.threadsAtClaim() } : n;
      e.push({ name: t, from: r, to: u }), r = u;
    }
    return ["to_input_ready", "to_first_turn"].every((t) => e.some((n) => n.name === t)) ? e : [];
  }
  toWire() {
    let e = {};
    for (let { name: r, from: t, to: n } of this.stretches()) e[r] = { cpu_ms: d(t.cpuMs, n.cpuMs), wall_ms: Math.max(0, Math.ceil(n.atMs - t.atMs)), ...t.procStat && n.procStat && { minor_faults: d(t.procStat.minorFaults, n.procStat.minorFaults), major_faults: d(t.procStat.majorFaults, n.procStat.majorFaults), children_cpu_ms: d(t.procStat.childrenCpuTicks, n.procStat.childrenCpuTicks) * x, children_minor_faults: d(t.procStat.childrenMinorFaults, n.procStat.childrenMinorFaults) }, ...t.storageReadBytes !== void 0 && n.storageReadBytes !== void 0 && { storage_read_kib: d(t.storageReadBytes / 1024, n.storageReadBytes / 1024) } };
    return Object.keys(e).length > 0 ? e : void 0;
  }
  threadsToWire() {
    let e = {};
    for (let { name: r, from: t, to: n } of this.stretches()) {
      let u = t.threads && n.threads && (0, import_chunk_ae4rjsvk.RGt)((0, import_chunk_ae4rjsvk.Pun)(t.threads, n.threads), t.atMs === 0 ? 1 / 0 : n.atMs - t.atMs);
      if (u !== void 0) e[r] = u;
    }
    return Object.keys(e).length > 0 ? e : void 0;
  }
}
var I = { input_ready_ms: "to_input_ready", first_message_read_ms: "to_first_message" }, W = ["spawn_to_exec_ms", "node_boot_ms", "pre_action_ms", "settings_load_ms", "setup_ms", "growthbook_init_ms", "tools_commands_load_ms", "hooks_init_ms", "mcp_connect_ms", "print_import_ms", "headless_prologue_ms", "grove_check_ms", "await_initialize_ms", "init_emit_ms"], D = /* @__PURE__ */ new Set(["project_settings", "official_plugin", "mounted_plugin", "other_plugin"]);
class g {
  phases = {};
  phaseStarts = {};
  warmSpareClaimed = false;
  hydratePrefetchSettledAt = void 0;
  resumeHydratePrefetch = void 0;
  resumeHydrateOnDiskBytes = void 0;
  resumeHydrateCcrBytes = void 0;
  resumeHydrateCcrEvents = void 0;
  resumeHydrateDeltaEvents = void 0;
  resumeHydrateDeltaFetchAttempted = void 0;
  resumeHydrateAnchorWalkback = void 0;
  resumeTranscriptScan = void 0;
  resumeTranscriptReadAhead = void 0;
  pluginFullLoads = 0;
  userContextBuilds = 0;
  sdkMcpDialRuns = 0;
  sdkMcpServersDialed = 0;
  flagFetchKick = void 0;
  flagFetchKickJudgedAtMs = void 0;
  warmWakeEarlyFetch = void 0;
  kickOnWarmCache = void 0;
  hooksInitSource = void 0;
  hooksInitOrigins = void 0;
  hooksInitWithoutSilent = { own: 0, any: 0 };
  resumeHooksWaitShadow = void 0;
  pluginsSyncRound = void 0;
  policyAnswer = void 0;
  processStretches = new m();
  maySendProcessStretches = void 0;
  flagFetchWaitedMs = 0;
  hooksInitWaitGivenUp = false;
  consumed = false;
  reported = false;
  apiRequestSentFromSpawnMs = void 0;
  apiRequestSentFromSpawnConsumed = false;
  recordPhase(e, r, t) {
    if (e === "first_message_read_ms") (0, import_chunk_etk95yep.Azi)();
    if (this.consumed) return;
    if (e === "skills_load_ms" && this.phases[e] !== void 0) return;
    if (e === "hooks_init_ms" && this.hooksInitWaitGivenUp) return;
    if (this.phases[e] = Math.round(r), t !== void 0) this.phaseStarts[e] = Math.round(t);
    let n = I[e];
    if (n !== void 0) this.endProcessStretch(n);
  }
  endProcessStretch(e) {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !this.consumed) this.processStretches.end(e);
  }
  markSpareLoaded() {
    this.endProcessStretch("to_spare_loaded");
  }
  markTurnBegan(e) {
    this.endProcessStretch("to_first_turn"), this.maySendProcessStretches = e;
  }
  recordHooksInitWait(e, r) {
    this.recordPhase("hooks_init_ms", e, r), this.hooksInitWaitGivenUp = true;
  }
  getRecordedPhase(e) {
    return this.phases[e];
  }
  recordSpawnToExec() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("spawn_to_exec_ms", Date.now() - process.uptime() * 1e3 - e, e - performance.timeOrigin);
  }
  markWarmSpareClaimed() {
    this.warmSpareClaimed = true, this.endProcessStretch("to_claim");
  }
  markFlagFetchKick(e) {
    this.flagFetchKick = e, this.flagFetchKickJudgedAtMs = Math.round(performance.now());
  }
  getFlagFetchKick() {
    return this.flagFetchKick;
  }
  markWarmCacheKickAsks(e) {
    this.warmWakeEarlyFetch = e, this.kickOnWarmCache = rEo();
  }
  markHooksInitSource(e) {
    this.hooksInitSource = e;
  }
  noteHooksInitOrigin(e, r, t, n) {
    if (this.consumed || !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !import_chunk_c203g5kd.s.CLAUDE_CODE_EMIT_STARTUP_TIMING) return;
    let u = e(), _ = u === "user_settings" || u === "local_settings", { own: p, any: l } = this.hooksInitWithoutSilent;
    this.hooksInitWithoutSilent = { own: n && _ ? p : Math.max(p, r), any: n && (_ || D.has(u)) ? l : Math.max(l, r) }, this.hooksInitOrigins = { ms: { ...this.hooksInitOrigins?.ms, [u]: Math.max(this.hooksInitOrigins?.ms[u] ?? 0, r) }, maySend: t };
  }
  markResumeHooksWaitShadow(e) {
    this.resumeHooksWaitShadow = e;
  }
  markPluginsSyncRound(e, r) {
    this.pluginsSyncRound = { round: e, maySend: r };
  }
  markPolicyAnswerReader(e, r) {
    this.policyAnswer = { read: e, maySend: r };
  }
  readPolicyAnswer() {
    if (!this.policyAnswer?.maySend()) return;
    try {
      return this.policyAnswer.read();
    } catch (e) {
      return (0, import_chunk_k449cc64.i)(Error("Could not read the organization's policy state, so policy_answer says report_failed", { cause: e })), { answer: "report_failed" };
    }
  }
  noteFlagFetchWait(e) {
    this.flagFetchWaitedMs += e;
  }
  getFlagFetchWaitedMs() {
    return this.flagFetchWaitedMs;
  }
  noteSdkMcpDial(e) {
    if (e <= 0) return;
    this.sdkMcpDialRuns++, this.sdkMcpServersDialed += e;
  }
  notePluginFullLoad() {
    if (this.consumed) return;
    this.pluginFullLoads++;
  }
  noteUserContextBuild() {
    if (this.consumed) return;
    this.userContextBuilds++;
  }
  wasWarmSpareClaimed() {
    return this.warmSpareClaimed;
  }
  markHydratePrefetchSettled() {
    this.hydratePrefetchSettledAt = performance.now();
  }
  markResumeHydratePrefetch(e, r) {
    this.resumeHydratePrefetch = e === null ? "miss" : this.hydratePrefetchSettledAt !== void 0 && this.hydratePrefetchSettledAt < r ? "hit" : "pending";
  }
  markResumeHydrateDelta(e, r, t, n, u, _) {
    this.resumeHydrateOnDiskBytes = e, this.resumeHydrateCcrBytes = r, this.resumeHydrateCcrEvents = t, this.resumeHydrateDeltaEvents = n, this.resumeHydrateDeltaFetchAttempted = u, this.resumeHydrateAnchorWalkback = _;
  }
  markResumeTranscriptScan(e) {
    if (this.resumeTranscriptScan !== void 0) return;
    this.resumeTranscriptScan = e, this.recordPhase("resume_transcript_scan_ms", e.scanMs + (this.resumeTranscriptReadAhead?.durationMs ?? 0), this.resumeTranscriptReadAhead?.startMs ?? e.scanStartMs);
  }
  markResumeTranscriptReadAhead(e, r) {
    let t = this.resumeTranscriptReadAhead;
    this.resumeTranscriptReadAhead = { durationMs: e + (t?.durationMs ?? 0), startMs: t?.startMs ?? r };
  }
  recordFirstMessageReadFromSpawn() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("first_message_read_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
  }
  recordInputReadyFromSpawn() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("input_ready_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
  }
  consume() {
    if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !import_chunk_c203g5kd.s.CLAUDE_CODE_EMIT_STARTUP_TIMING) return;
    if (this.consumed || Object.keys(this.phases).length === 0) return;
    this.consumed = true;
    let e = k(import_chunk_c203g5kd.So.CCR_RUNNER_STARTUP_TIMING), r = !(0, import_chunk_f9x2f6cx.Y)(), t = this.maySendProcessStretches?.() ?? false, n = this.readPolicyAnswer();
    return { ...e?.fields, entrypoint: import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT ?? "unknown", warm_spare_claimed: this.warmSpareClaimed, resume_hydrate_prefetch: this.resumeHydratePrefetch, resume_hydrate_on_disk_bytes: this.resumeHydrateOnDiskBytes, resume_hydrate_ccr_bytes: this.resumeHydrateCcrBytes, resume_hydrate_ccr_events: this.resumeHydrateCcrEvents, resume_hydrate_delta_events: this.resumeHydrateDeltaEvents, resume_hydrate_delta_fetch_attempted: this.resumeHydrateDeltaFetchAttempted, resume_hydrate_anchor_walkback: this.resumeHydrateAnchorWalkback, resume_transcript_bytes: this.resumeTranscriptScan?.bytes, resume_transcript_kept_bytes: this.resumeTranscriptScan?.keptBytes, resume_transcript_earlier_metadata_bytes: this.resumeTranscriptScan?.earlierMetadataBytes, resume_transcript_boundary: this.resumeTranscriptScan?.boundary, resume_transcript_plain_kept_bytes: this.resumeTranscriptScan?.plainKeptBytes, resume_transcript_boundary_other_key_order: this.resumeTranscriptScan?.boundaryOtherKeyOrder, resume_transcript_keeping_boundaries: this.resumeTranscriptScan?.keepingBoundaries, resume_transcript_reach_bytes: this.resumeTranscriptScan?.reachBytes, resume_transcript_backfilled_all: this.resumeTranscriptScan?.backfilledAll, resume_transcript_rows: this.resumeTranscriptScan?.rows, resume_transcript_rows_other_key_order: this.resumeTranscriptScan?.rowsOtherKeyOrder, resume_transcript_rows_unindexed: this.resumeTranscriptScan?.rowsUnindexed, resume_transcript_listed_rows: this.resumeTranscriptScan?.listedRows, resume_transcript_listed_rows_bytes: this.resumeTranscriptScan?.listedRowsBytes, resume_transcript_listed_rows_other_key_order: this.resumeTranscriptScan?.listedRowsOtherKeyOrder, resume_transcript_listed_span_bytes: this.resumeTranscriptScan?.listedSpanBytes, resume_transcript_straggler_ancestors: this.resumeTranscriptScan?.stragglerAncestors, resume_transcript_parents_not_found: this.resumeTranscriptScan?.parentsNotFound, resume_transcript_list_unused: this.resumeTranscriptScan?.listUnused, resume_transcript_tool_copy_chars: this.resumeTranscriptScan?.toolCopyChars, resume_transcript_scanned_bytes: this.resumeTranscriptScan?.scannedBytes, resume_transcript_head: this.resumeTranscriptScan?.head, resume_transcript_next_head: this.resumeTranscriptScan?.nextHead, resume_transcript_head_rows: this.resumeTranscriptScan?.headRows, resume_transcript_head_pieces: this.resumeTranscriptScan?.headPieces, delta_reset: import_chunk_c203g5kd.So.CCR_DELTA_RESET, plugin_full_loads: this.pluginFullLoads, user_context_builds: this.userContextBuilds, sdk_mcp_dial_runs: this.sdkMcpDialRuns, sdk_mcp_servers_dialed: this.sdkMcpServersDialed, flag_fetch_kick: this.flagFetchKick, flag_fetch_kick_judged_at_ms: r ? this.flagFetchKickJudgedAtMs : void 0, warm_wake_early_fetch: this.warmWakeEarlyFetch, kick_on_warm_cache: this.kickOnWarmCache, hooks_init_source: this.hooksInitSource, ...this.hooksInitOrigins?.maySend() && { hooks_init_origin_ms: this.hooksInitOrigins.ms, hooks_init_without_silent_ms: this.hooksInitWithoutSilent }, resume_hooks_wait_shadow: this.resumeHooksWaitShadow, plugins_sync_round: this.pluginsSyncRound?.maySend() ? this.pluginsSyncRound.round : void 0, policy_answer: n?.answer, policy_answer_reason: n?.reason, process_stretches: t ? this.processStretches.toWire() : void 0, process_stretch_threads: t ? this.processStretches.threadsToWire() : void 0, ...t && r && { process_start_tuning: (0, import_chunk_axd2vhx2.FCr)(), process_start_purge_delay_ms: (0, import_chunk_axd2vhx2.$Cr)() }, cli_trial_keys: (0, import_chunk_6e68m1dj.hn)() ? (import_chunk_c203g5kd.s.CLAUDE_CODE_CHROME_LATE_MCP_SERVER === true ? 2 : 0) + (import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_MCP_DEBUG_LOG_FILES === true ? 4 : 0) : void 0, phases: { ...e?.phases, ...r ? this.phases : this.durations() }, ...r && { time_origin_ms: performance.timeOrigin, phase_start_ms: { ...this.phaseStarts } } };
  }
  telemetryFields() {
    if ((0, import_chunk_f9x2f6cx.Y)()) return;
    if (this.reported || Object.keys(this.phases).length === 0) return;
    this.reported = true;
    let e = {}, r = 0;
    for (let n of W) {
      let u = this.phases[n];
      if (u !== void 0) e[n] = u, r += u;
    }
    let t = 0;
    for (let n of Object.values(this.phases)) t += n ?? 0;
    return { ...e, other_ms: t - r, phase_count: Object.keys(this.phases).length, warm_spare_claimed: this.warmSpareClaimed, plugin_full_loads: this.pluginFullLoads, user_context_builds: this.userContextBuilds, sdk_mcp_dial_runs: this.sdkMcpDialRuns, sdk_mcp_servers_dialed: this.sdkMcpServersDialed, flag_fetch_kick: (0, import_chunk_78g0060s.fe)(this.flagFetchKick), hooks_init_source: (0, import_chunk_78g0060s.fe)(this.hooksInitSource), resume_hydrate_prefetch: (0, import_chunk_78g0060s.fe)(this.resumeHydratePrefetch) };
  }
  durations() {
    return (0, import_chunk_gd77dyw4.Hr)(this.phases, (e, r) => r !== "spawn_to_exec_ms" && this.phaseStarts[r] !== 0);
  }
  recordApiRequestSentFromSpawn() {
    if (this.apiRequestSentFromSpawnMs !== void 0) return;
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.apiRequestSentFromSpawnMs = Date.now() - e;
  }
  consumeApiRequestSentFromSpawn() {
    if (this.apiRequestSentFromSpawnConsumed || this.apiRequestSentFromSpawnMs === void 0) return;
    return this.apiRequestSentFromSpawnConsumed = true, { ms: this.apiRequestSentFromSpawnMs, warmSpareClaimed: this.warmSpareClaimed, flagFetchKick: this.flagFetchKick, timeOriginMs: (0, import_chunk_f9x2f6cx.Y)() ? void 0 : performance.timeOrigin };
  }
}
var Hji = new import_chunk_2904xtvq.j(() => new g());
function o() {
  return Hji.of((0, import_chunk_f9x2f6cx.N)().host);
}
function zo(e, r, t) {
  o().recordPhase(e, r, t);
}
function oEo(e, r) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) o().recordPhase(e, performance.now() - r, r);
}
function NEl(e, r) {
  o().recordHooksInitWait(e, r);
}
function Z2e(e) {
  return o().getRecordedPhase(e);
}
function FEl() {
  o().recordSpawnToExec();
}
function sEo() {
  o().markWarmSpareClaimed();
}
function $El() {
  o().markSpareLoaded();
}
function UEl(e) {
  o().markTurnBegan(e);
}
function BEl() {
  o().notePluginFullLoad();
}
function WEl() {
  o().noteUserContextBuild();
}
function jEl() {
  return o().wasWarmSpareClaimed();
}
function GEl(e) {
  o().markFlagFetchKick(e);
}
function zEl() {
  return o().getFlagFetchKick();
}
function VEl(e) {
  o().markWarmCacheKickAsks(e);
}
function KEl(e) {
  o().markHooksInitSource(e);
}
function qEl(e, r, t, n) {
  try {
    o().noteHooksInitOrigin(e, r, t, n);
  } catch (u) {
    (0, import_chunk_k449cc64.i)(Error("SessionStart hook origin not recorded", { cause: u }));
  }
}
function YEl(e) {
  o().markResumeHooksWaitShadow(e);
}
function XEl(e, r) {
  o().markPolicyAnswerReader(e, r);
}
function JEl() {
  try {
    let e = o().readPolicyAnswer();
    return { ...e && { policy_answer: e.answer }, ...e?.reason && { policy_answer_reason: e.reason } };
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(Error("Could not work out whether policy_answer may go on a refused message's result, so that result goes without it", { cause: e })), {};
  }
}
function QEl(e) {
  o().noteFlagFetchWait(e);
}
function ZEl() {
  return o().getFlagFetchWaitedMs();
}
function evl(e) {
  o().noteSdkMcpDial(e);
}
function tvl() {
  o().markHydratePrefetchSettled();
}
function nvl(e, r) {
  o().markResumeHydratePrefetch(e, r);
}
function rvl(e) {
  o().markResumeTranscriptScan(e);
}
function pks(e, r) {
  o().markResumeTranscriptReadAhead(e, r);
}
function ovl(e, r, t, n, u, _) {
  o().markResumeHydrateDelta(e, r, t, n, u, _);
}
function svl() {
  o().recordFirstMessageReadFromSpawn();
}
function ivl() {
  o().recordInputReadyFromSpawn();
}
function avl() {
  return o().consume();
}
function iEo(e) {
  if (!(0, import_chunk_k5jn5rx9.CBl)()) return;
  let r = o().telemetryFields();
  if (r === void 0) return;
  (0, import_chunk_y53wbr8a.a)("tengu_startup_timing", { ...r, site: (0, import_chunk_78g0060s.f)(e) });
}
function lvl() {
  o().recordApiRequestSentFromSpawn();
}
function dvl() {
  return o().consumeApiRequestSentFromSpawn();
}
