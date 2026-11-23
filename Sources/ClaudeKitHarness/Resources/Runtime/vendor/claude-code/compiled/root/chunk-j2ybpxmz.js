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
var chunk_j2ybpxmz_exports = {};
__export(chunk_j2ybpxmz_exports, {
  Eks: () => Eks,
  GTr: () => GTr,
  kks: () => kks,
  o2i: () => o2i,
  zWn: () => zWn
});
module.exports = __toCommonJS(chunk_j2ybpxmz_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_3a2r0s2z = require("/$bunfs/root/chunk-3a2r0s2z.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var import_dns = require("dns");
var import_promises = require("dns/promises");
var import_zlib = require("zlib");
function kks({ maxBatchSize: e, getFlushIntervalMs: n, post: r }) {
  let o = [], a = null;
  async function d() {
    if (o.length === 0) return;
    let h = o;
    o = [], await r(h);
  }
  function c() {
    if (a) clearTimeout(a), a = null;
  }
  function p() {
    d().catch(() => {
    });
  }
  function T() {
    if (a) return;
    a = setTimeout(() => {
      a = null, p();
    }, n()).unref();
  }
  return { enqueue(h) {
    if (o.push(h), o.length >= e) c(), p();
    else T();
  }, flush: d, async shutdown() {
    c(), await d();
  }, drainForTesting() {
    c();
    let h = o;
    return o = [], h;
  } };
}
var k = "https://http-intake.logs.us5.datadoghq.com/api/v2/logs", Eks = "pubea5604404508cdd34afb69e6f42a05bc", G = 15e3, K = 100, W = 5e3, S = 3e5, x = [["tengu_stream_loop_exited_after_watchdog", /* @__PURE__ */ new Set(["model", "exit_delay_ms", "exit_path"])], ["tengu_streaming_error", /* @__PURE__ */ new Set(["error_type"])], ["tengu_streaming_idle_timeout", /* @__PURE__ */ new Set(["model", "timeout_ms", "tier", "bytes_received_before_stall", "time_to_first_byte_ms", "body_read_pending", "slept_ms"])], ["tengu_streaming_watchdog_retry", /* @__PURE__ */ new Set(["model", "retry_attempt", "after_thinking_only"])], ["tengu_thinking_signature_strip_retry", /* @__PURE__ */ new Set(["model", "query_source", "stripped_signed_count", "stripped_unsigned_count"])], ["tengu_tool_input_json_parse_fail", /* @__PURE__ */ new Set(["inputLen"])]], L = [["tengu_repl_script_end", /* @__PURE__ */ new Set(["outcome", "lane", "durationMs", "innerCallCount", "innerExecutedCount", "innerErrorCount", "innerDeclinedCount", "permissionMode", "hookContinueFalse", "path"])]], V = /* @__PURE__ */ new Set(["tengu_feature_ok", "tengu_feature_bad", "tengu_feature_sad", "tengu_teleport_menu", "tengu_teleport_permission_mode_refused", "tengu_tether_decision", "tengu_tether_live_outcome", "tengu_tether_echo_audit", "tengu_tether_unrecognised_400", "chrome_bridge_connection_succeeded", "chrome_bridge_connection_failed", "chrome_bridge_disconnected", "chrome_bridge_tool_call_completed", "chrome_bridge_tool_call_disconnected", "chrome_bridge_tool_call_error", "chrome_bridge_tool_call_lost", "chrome_bridge_tool_call_started", "chrome_bridge_tool_call_timeout", "tengu_api_error", "tengu_api_fallback_last_resort", "tengu_api_success", "tengu_upload_ahead", "tengu_typing_spell", "tengu_slow_prompt_hook", "tengu_artifact_disabled_session", "tengu_artifact_reject_breaker", "tengu_artifact_tool_recovered", "tengu_artifact_tool_withheld", "tengu_auto_mode_context_withheld", "tengu_auto_mode_decision", "tengu_auto_mode_local_classifier_call", "tengu_auto_mode_local_classifier_switched_off", "tengu_auto_mode_simulation_mark_wrong", "tengu_auto_mode_denial_limit_exceeded", "tengu_auto_mode_destructive_mcp_rule_allow", "tengu_auto_mode_fallback_to_ask", "tengu_auto_mode_malformed_tool_input", "tengu_auto_mode_reissue_exempt", "tengu_auto_mode_bash_prescreen_retry", "tengu_auto_mode_env_onboarding_accept", "tengu_auto_mode_env_onboarding_dismiss", "tengu_auto_mode_env_onboarding_later", "tengu_auto_mode_env_onboarding_shown", "tengu_auto_mode_outcome", "tengu_auto_mode_setup_wizard_answers", "tengu_auto_mode_setup_wizard_resolved", "tengu_auto_mode_setup_wizard_shown", "tengu_auto_mode_subsequent_approval", "tengu_bridge_token_absence_classified", "tengu_insights_auto_mode_recommendation", "tengu_brief_mode_enabled", "tengu_brief_mode_toggled", "tengu_brief_send", "tengu_cancel", "tengu_compact_after_prompt_too_long", "tengu_compact_failed", "tengu_copper_lantern", "tengu_deferred_tools_pool_change", "tengu_mcp_instructions_pool_change", "tengu_exit", "tengu_flicker", "tengu_headless_mcp_first_turn_join", "tengu_headless_mcp_launch_named_wait", "tengu_headless_mcp_prewait", "tengu_init", "tengu_mcp_degraded", "tengu_mcp_drive_file_reference_upload", "tengu_mcp_drive_file_reference_availability", "tengu_mcp_gmail_attachment_delivered", "tengu_mcp_gmail_attachment_not_saved", "tengu_mcp_gmail_attachment_used", "tengu_mcp_gmail_attachment_used_by_read", "tengu_mcp_gmail_attachment_used_by_shell", "tengu_mcp_gmail_attachment_used_by_send", "tengu_mcp_gmail_attachment_used_by_other", "tengu_mcp_gmail_get_message_not_read", "tengu_mcp_gmail_attachment_not_read", "tengu_mcp_gmail_file_reference_upload", "tengu_mcp_m365_file_reference_upload", "tengu_mcp_m365_read", "tengu_mcp_m365_read_retyped_likely", "tengu_mcp_m365_file_ask_availability", "tengu_mcp_m365_file_used", "tengu_mcp_m365_file_used_by_read", "tengu_mcp_m365_file_used_by_shell", "tengu_mcp_m365_file_used_by_send", "tengu_mcp_m365_file_used_by_other", "tengu_mcp_drive_download_kept_in_conversation", "tengu_mcp_drive_download_saved_as_text", "tengu_mcp_drive_download_cut_not_saved", "tengu_mcp_drive_download_save_failed", "tengu_mcp_drive_download_not_read_over_cap", "tengu_mcp_drive_download_not_read_malformed", "tengu_mcp_drive_download_retyped_likely", "tengu_mcp_first_tools_list", "tengu_mcp_list_changed", "tengu_mcp_listen_reopen", "tengu_mcp_message_stream_outcome", "tengu_mcp_listing_prior_rejected", "tengu_mcp_project_servers_approved", "tengu_mcp_sdk_generation", "tengu_mcp_server_connection_failed", "tengu_mcp_server_connection_succeeded", "tengu_mcp_tools_refreshed_mid_turn", "tengu_mcp_tripwire", "tengu_model_catalog_compare", "tengu_model_fallback_triggered", "tengu_live_model_switch", "tengu_refusal_fallback_triggered", "tengu_refusal_fallback_prompt_shown", "tengu_refusal_fallback_prompt_choice", "tengu_refusal_fallback_preference_prompt", "tengu_refusal_fallback_setting_changed", "tengu_refusal_fallback_suppressed", "tengu_refusal_fallback_dialog_suppressed", "tengu_refusal_fallback_supersedes", "tengu_refusal_fallback_route_declined", "tengu_refusal_fallback_notice_collapsed", "tengu_convolute_arcades_retry", "tengu_convolute_arcades_retry_outcome", "tengu_rotunda_pennant_applied", "tengu_rotunda_pennant_malformed", "tengu_rotunda_pennant_strip", "tengu_rotunda_pennant_credit_echoed", "tengu_rotunda_pennant_tools", "tengu_rotunda_pennant_chain_exhausted", "tengu_rotunda_pennant_esc", "tengu_refusal_retraction_evicted", "tengu_refusal_retraction_late_drop", "tengu_refusal_retraction_orphan_tool_result", "tengu_refusal_retraction_truncation_harvest", "tengu_refusal_retraction_unauthenticated_signal", "tengu_propose_skills", "tengu_propose_skills_kept_lines", "tengu_propose_skills_read_check", "tengu_oauth_error", "tengu_oauth_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_lock_acquired", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_lock_releasing", "tengu_oauth_token_refresh_lock_released", "tengu_oauth_token_refresh_lock_dead_holder_takeover", "tengu_policy_limits_cache_state_at_first_prompt", "tengu_policy_limits_fetch", "tengu_policy_limits_verdict_recovered", "tengu_projects_write_text_in_view", "tengu_ptl_surfaced_to_user", "tengu_query_error", "tengu_remote_tool_targets", "tengu_remote_tool_forward", "tengu_remote_tool_serve", "tengu_remote_tool_restart_adoption", "tengu_remote_tool_restart_adoption_dropped", "tengu_remote_tool_restart_adoption_unroutable", "tengu_remote_tool_verdict_hold", "tengu_remote_stream_regained", "tengu_sdk_oauth_refresh_unfulfilled", "tengu_rc_pill_clicked", "tengu_ranch_rc_shown", "tengu_ranch_rc_link_shown", "tengu_ccr_init_park_report", "tengu_orphaned_permission_applied", "tengu_orphaned_permission_closed_unrun", "tengu_orphaned_permission_unapplied_turn_end", "tengu_orphaned_permission_unapplied_turn_resumed", "tengu_turn_handoff_run", "tengu_turn_handoff_flag_wait", "tengu_turn_handoff_files_by_name", "tengu_turn_handoff_files_by_name_refresh", "tengu_turn_handoff_carried_writes", "tengu_turn_handoff_expired", "tengu_rewind_conversation_expired", "tengu_pending_action_republished", "tengu_resume_interrupted_turn", "tengu_resume_parked_permission", "tengu_resume_rescue_yield", "tengu_resume_stale_prompt_cancel", "tengu_resume_stale_turn_suppressed", "tengu_unattended_start", "tengu_request_user_dialog_implicit_cancel", "tengu_request_user_dialog_late_answer", "tengu_request_user_dialog_left_up", "tengu_request_user_dialog_requires_action", "tengu_request_user_dialog_response_ignored", "tengu_request_user_dialog_timeout", "tengu_chrome_setup_offered", "tengu_review_remote_teleport_failed", "tengu_supported_dialog_kinds_restored", "tengu_sdk_init_handshake", "tengu_sdk_mcp_false_unavailable", "tengu_sdk_result", "tengu_shutdown_pending_state", "tengu_sdk_schema_violation", "tengu_sdk_session_crash", "tengu_sdk_stall", "tengu_sdk_ttft", "tengu_session_file_read", "tengu_started", ...x.map(([e]) => e), ...L.map(([e]) => e), "tengu_tool_use_error", "tengu_tool_use_granted_in_prompt_permanent", "tengu_transcript_write_failed", "tengu_transcript_writer_recovered", "tengu_persistence_suppressed", "tengu_tool_use_granted_in_prompt_temporary", "tengu_tool_use_not_loaded", "tengu_tool_use_not_loaded_check_failed", "tengu_tool_use_rejected_in_prompt", "tengu_tool_use_success", "tengu_bash_tool_command_executed", "tengu_bash_tool_command_failed", "tengu_background_shell_settled", "tengu_uncaught_exception", "tengu_uncaught_exception_loop", "tengu_unhandled_rejection", "tengu_voice_recording_started", "tengu_voice_toggled", "tengu_vscode_sdk_stream_ended_no_result", "tengu_team_mem_sync_started", "tengu_timer", "tengu_bg_adopt", "tengu_bg_agent_action", "tengu_bg_agent_dispatch", "tengu_bg_agent_notification", "tengu_bg_agent_terminal", "tengu_bg_attach", "tengu_bg_attach_first_frame", "tengu_bg_attach_legacy_autorespawn", "tengu_bg_attach_outcome", "tengu_bg_classify", "tengu_bg_daemon_cold_start_ask", "tengu_bg_daemon_cold_start_ask_answer", "tengu_bg_daemon_install", "tengu_bg_daemon_service_poll_fallthrough", "tengu_bg_daemon_service_stale_exec", "tengu_bg_daemon_spawn_failed", "tengu_bg_daemon_wmi_fallback", "tengu_bg_daemon_zombie_false_positive", "tengu_bg_daemon_zombie_restart", "tengu_bg_dispatch", "tengu_bg_dispatch_fallback", "tengu_bg_dispatch_low_mem", "tengu_bg_dispatch_rescued", "tengu_bg_dispatch_sigkill_escalate", "tengu_bg_dispatch_stale_drop", "tengu_bg_exec_no_lastline", "tengu_bg_killjob_ctrl_fallback", "tengu_bg_orphan_reap", "tengu_bg_proto_mismatch", "tengu_bg_pty_unavailable", "tengu_bg_reply_outcome", "tengu_bg_respawn", "tengu_bg_respawn_downgrade_refused", "tengu_bg_respawn_exhausted", "tengu_bg_respawn_resume_conflict", "tengu_bg_prewarm_burst", "tengu_bg_respawn_stale", "tengu_bg_respawn_unconfirmed_bail", "tengu_bg_retired", "tengu_bg_roster_parse_failed", "tengu_bg_skew_nudge", "tengu_bg_spare_claim", "tengu_bg_spare_claim_fail", "tengu_bg_spare_spawn", "tengu_bg_worker_exit", "tengu_bg_worker_spawn", "tengu_daemon_config_reload", "tengu_daemon_exit", "tengu_daemon_idle_exit", "tengu_daemon_lease", "tengu_daemon_peer_uid_reject", "tengu_daemon_self_restart_on_upgrade", "tengu_daemon_start", "tengu_daemon_startup_crash", "tengu_daemon_upgrade_refused_stale_binary", "tengu_daemon_worker_crash", "tengu_daemon_worker_permanent_exit", "tengu_daemon_yield", "tengu_daemon_yield_takeover", "tengu_review_remote_ship_ask"]), Y = new Map([["tengu_auto_mode_context_withheld", /* @__PURE__ */ new Set(["reason", "bytes"])], ["tengu_background_shell_settled", /* @__PURE__ */ new Set(["outcome", "stop_cause", "stopped_by", "trigger", "subagent_owned", "unwanted", "elapsed_ms", "requested_timeout_ms", "deadline_ms", "duration_ms", "stall_duration_ms", "limit", "command_cpu_user_ms", "command_cpu_system_ms", "command_proc_cpu_ms", "command_cgroup_cpu_ms", "command_cgroup_shared", "reason", "left_process_running", "bash_command_kinds", "bash_programs", "bash_test_scope", "bash_test_outcome", "output_total_bytes", "triggered_note_rule", "triggered_note_shown", "repeat", "compared_statements", "changed_since_that_call", "earlier_test_outcome", "other_agent_repeat", "other_agent_direction", "other_agent_call_running_at_start", "other_agent_seconds_since_that_call", "other_agent_lines_changed_since_that_call", "other_agent_possible_writes_since_that_call", "other_agent_tests_and_lints_since_that_call", "other_agent_changed_since_that_call", "other_agent_earlier_call_outcome", "other_agent_ran_it_last", "other_agent_earlier_result_in_context"])], ...x, ...L, ["tengu_remote_tool_forward", /* @__PURE__ */ new Set(["outcome", "transport", "host_kind", "host_platform", "approval", "approved_by", "adoption", "refusal_code", "interface_agreed_version", "reconcile_trigger", "reconcile_result", "duration_ms", "time_to_terminal_ms", "asking_ms", "leg1_request_form", "leg1_call_envelope_why", "leg2_request_form", "leg2_call_envelope_why"])], ["tengu_remote_tool_serve", /* @__PURE__ */ new Set(["outcome", "op", "transport", "policy", "refusal_code", "failure_code", "disposition", "second_leg", "approval_decision", "session_interface", "interface_fit", "request_form", "shared_request_refusal", "part"])], ["tengu_remote_tool_restart_adoption", /* @__PURE__ */ new Set(["journaled", "adoptable", "adopted", "park_adopted"])], ["tengu_remote_tool_restart_adoption_dropped", /* @__PURE__ */ new Set(["dropped"])], ["tengu_remote_tool_restart_adoption_unroutable", /* @__PURE__ */ new Set(["where", "route_code", "parked_at_restart"])], ["tengu_remote_tool_verdict_hold", /* @__PURE__ */ new Set(["mode", "scope", "decision", "outcome", "serverClassifierNoVerdict", "serverClassifierRole", "serverClassifierOffReason", "reason", "permissionMode", "isSubagent", "wait_ms"])]]);
function Z(e, n) {
  let r = Y.get(e);
  if (r === void 0) return n;
  return (0, import_chunk_gd77dyw4.Hr)(n, (o, a) => a === "sample_rate" || r.has(a));
}
var X = ["arch", "attach_cold", "daemon_booted", "first_frame_kind", "surface", "via", "classifierModel", "classifierStage", "clientType", "decision", "entrypoint", "errorKind", "errorType", "failureKind", "fastPath", "sessionKind", "dispatchEntrypoint", "http_status_range", "http_status", "model", "op", "outcome", "platform", "projectsRole", "remoteControlLane", "projectsSession", "provider", "reason", "replMode", "server_reason", "server_type", "source", "subscriptionType", "toolName", "uncoveredTailReason", "userBucket", "userType", "version", "versionBase"];
function F(e) {
  return e.replace(/[A-Z]/g, (n) => `_${n.toLowerCase()}`);
}
var J = ["mcpServerName", "mcpServerBaseUrl", "mcpServerId", "toolUseContentLengths", "toolSchemaCharLengths", "toolSchemasHash", "errorMessageHash", "mcpServerKeyHash", "mcpToolName", "attributionMcpServer", "attributionMcpTool", "attributionSkill", "attributionMcpServerHash", "attributionMcpToolHash", "attributionSkillHash", "attributionAgentHash", "attributionPluginHash", "mcpServerNameHash", "mcpToolNameHash", "toolNameHash", "errorDetailsHash", "rh", "baseUrl", "skill_name_hash", "plugin_id_hash", "plugin_name_redacted", "marketplace_name_redacted", "plugin_name_previous", "plugin_id_hash_previous", "server_plugin_id", "plugin_version_sha", "skill_name_hashes", "parent_skill_name_hash", "item_name_hash", "pluginHookCountsByHash", "attachmentTypesSeen", "bash_places"], Q = new Set(J.map(F)), ee = /* @__PURE__ */ new Set(["is_repl_mode", "repl_mode_decision"]);
function te(e, n) {
  for (let r of Object.keys(e)) {
    let o = n(r);
    if (Q.has(o) || ee.has(o)) delete e[r];
    else if (o === "bash_command_kinds") {
      let a = e[r];
      if (typeof a === "string") e[r] = a.split(",").filter((d) => d !== "searches_whole_disk").join(",");
    }
  }
}
function _e(e, n) {
  if (e.startsWith("mcp__")) return "mcp";
  if (n && !(0, import_chunk_865at33z.GIl)(e)) return "mcp";
  return e;
}
var ne = ["tengu_mcp_list_changed", "tengu_mcp_degraded", "tengu_mcp_server_connection_succeeded", "tengu_mcp_server_connection_failed", "tengu_mcp_first_tools_list", "tengu_mcp_listen_reopen", "tengu_mcp_message_stream_outcome"];
function re(e) {
  return ne.includes(e);
}
var oe = 10, ae = 6e4, se = 200;
function ie(e, n, r, o) {
  let a = `${n}\0${r ?? "(no-server)"}`, d = e.get(a);
  if (!d) {
    if (e.size >= se) {
      let p = e.keys().next().value;
      if (p !== void 0) e.delete(p);
    }
    d = { windowStartMs: 0, forwardedInWindow: 0, droppedSinceForward: 0 }, e.set(a, d);
  }
  if (o - d.windowStartMs >= ae) d.windowStartMs = o, d.forwardedInWindow = 0;
  if (d.forwardedInWindow >= oe) return d.droppedSinceForward++, { admitted: false, droppedSinceLastForward: 0 };
  d.forwardedInWindow++;
  let c = d.droppedSinceForward;
  return d.droppedSinceForward = 0, { admitted: true, droppedSinceLastForward: c };
}
async function ue(e, n) {
  if (n.isPausedByEgressRefusal()) return false;
  let r = n.gzip !== "refused" && (import_chunk_c203g5kd.s.CLAUDE_CODE_GZIP_DATADOG_LOGS ?? (0, import_chunk_6e68m1dj.hn)());
  try {
    await import_chunk_np189awg.Xd.post(k, r ? (0, import_zlib.gzipSync)((0, import_chunk_w578pjby._)(e)) : e, { headers: { "Content-Type": "application/json", "DD-API-KEY": Eks, ...r && { "Content-Encoding": "gzip" } }, timeout: W });
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Failed to flush logs to Datadog: ${o}`, { level: "error" });
    let a = (0, import_chunk_3jjr3wje.fd)(o) ? o.response : void 0, d = (0, import_chunk_3jjr3wje.gD)(o);
    if (a && (0, import_chunk_3a2r0s2z.iX)(a.status, a.headers) || a?.status === 403 && a.headers["x-proxy-error"] !== void 0 || d?.connectStatus === 403 && (d.headers["x-deny-reason"] ?? "host_not_allowed") === "host_not_allowed" || (0, import_chunk_6e68m1dj.hn)() && (0, import_chunk_jv7av99m.w)(o) === "ENOTFOUND" && await I()) return (0, import_chunk_w578pjby.t)(`Logs are paused for ${S / 6e4} minutes and dropped unsent until then: a proxy refused the post to the logs host, or the host's name was not found on a second lookup`, { level: "warn" }), n.egressRefusalUnconfirmed = false, n.egressRefusedAt = Date.now(), false;
    let c = a?.status;
    if (!r || c === 429) return false;
    let p = c === void 0 ? "no_response" : `http_${c}`;
    return (0, import_chunk_w578pjby.t)(`Datadog did not take a gzipped log batch (${p}); resending it uncompressed, and sending later batches from this process uncompressed`, { level: "error" }), n.gzip = "refused", n.unreportedGzipFailure ??= p, n.postCurrent(e);
  }
  if (n.unreportedGzipFailure !== void 0) {
    let o = n.unreportedGzipFailure;
    n.unreportedGzipFailure = void 0, (0, import_chunk_cqa9hrgx.l)("datadog_logs_gzip", o);
  }
  if (r && n.gzip === "untried") n.gzip = "accepted", (0, import_chunk_cqa9hrgx.u)("datadog_logs_gzip");
  return true;
}
var de = 30, le = 2048;
class O {
  datadogInitialized = null;
  egressRefusedAt = -1 / 0;
  egressRefusalUnconfirmed = false;
  lookAheadStarted = false;
  gzip = "untried";
  unreportedGzipFailure;
  builtUnredacted = /* @__PURE__ */ new WeakSet();
  sender = kks({ maxBatchSize: K, getFlushIntervalMs: C, post: async (e) => {
    try {
      await this.postCurrent(e);
    } catch (n) {
      (0, import_chunk_w578pjby.t)(`Datadog log flush threw: ${n}`, { level: "error" });
    }
  } });
  isPausedByEgressRefusal() {
    let e = Date.now() - this.egressRefusedAt;
    if (e < 0) return this.egressRefusedAt = -1 / 0, false;
    return e < (this.egressRefusalUnconfirmed ? A() : S);
  }
  async askResolverAheadOfLogs() {
    if (this.lookAheadStarted && this.egressRefusedAt === -1 / 0 || this.isPausedByEgressRefusal()) return;
    let e = this.egressRefusedAt !== -1 / 0, n = e && this.egressRefusalUnconfirmed;
    this.lookAheadStarted = true, this.egressRefusedAt = -1 / 0;
    try {
      if (!(0, import_chunk_6e68m1dj.hn)() || !P()) return;
      let [r, o] = await Promise.all([import_dns.promises.lookup(new URL(k).hostname, { hints: import_dns.ADDRCONFIG }).then(() => "found", import_chunk_jv7av99m.w), I()]);
      if (!P() || this.isPausedByEgressRefusal()) return;
      if (r !== "ENOTFOUND" || !o) {
        if (n) (0, import_chunk_cqa9hrgx.l)("logs_host_lookup", r === "found" ? "name_found" : "no_clear_answer");
        return;
      }
      this.egressRefusalUnconfirmed = !e, this.egressRefusedAt = Date.now();
      let a = e ? `${S / 6e4} minutes` : `${A() / 1e3} seconds`;
      (0, import_chunk_w578pjby.t)(`Logs are paused for ${a} and dropped until then: DNS gives no address for the logs host`, { level: "warn" });
    } catch (r) {
      (0, import_chunk_k449cc64.i)(r);
    }
  }
  postCurrent(e) {
    if ((0, import_chunk_865at33z.W9)()) return Promise.resolve(false);
    let n = (0, import_chunk_865at33z.tXe)() ? e.filter((r) => !this.builtUnredacted.has(r)) : e;
    return n.length > 0 ? ue(n, this) : Promise.resolve(false);
  }
  initializeDatadog = (0, import_chunk_839h1d5e.Co)(async () => {
    if ((0, import_chunk_865at33z.i_)() || (0, import_chunk_865at33z.xOl)()) return this.datadogInitialized = false, false;
    try {
      return this.datadogInitialized = true, true;
    } catch (e) {
      return (0, import_chunk_k449cc64.i)(e), this.datadogInitialized = false, false;
    }
  });
  getUserBucket = (0, import_chunk_839h1d5e.Co)(() => {
    let e = (0, import_chunk_865at33z.$1)(), n = (0, import_crypto.createHash)("sha256").update(e).digest("hex");
    return parseInt(n.slice(0, 8), 16) % de;
  });
  peerRateWindows = /* @__PURE__ */ new Map();
  #e = /* @__PURE__ */ new Map();
  get snakeCaseKeyCount() {
    return this.#e.size;
  }
  toSnakeCase = (e) => {
    let n = this.#e.get(e);
    if (n === void 0) {
      if (n = F(e), this.#e.size < le) this.#e.set(e, n);
    }
    return n;
  };
}
var D = new import_chunk_2904xtvq.j(() => new O());
function o2i() {
  let e = D.of((0, import_chunk_f9x2f6cx.N)().host);
  e.initializeDatadog.cache?.clear?.(), e.datadogInitialized = null;
}
async function GTr() {
  await D.of((0, import_chunk_f9x2f6cx.N)().host).sender.shutdown();
}
function ge(e) {
  return e.replace(/^(\d+\.\d+\.\d+-(?:dev|engine|aot)\.\d{8})\.t\d+\.sha[a-f0-9]+$/, "$1");
}
function ce(e, { isTrustedAnt: n, onAnthropicHost: r }) {
  if (typeof e !== "string") return null;
  if (n) return e;
  if (e === import_chunk_865at33z.M4 && r) return e;
  if (!e.toLowerCase().includes("claude")) return null;
  let o = (0, import_chunk_865at33z.St)((0, import_chunk_zmb62hr5.Yt)(e), { identity: true });
  return o in import_chunk_865at33z.xGe ? o : "other";
}
function pe(e, n) {
  let r = n.feature_name;
  if (e !== "tengu_feature_ok" || r === void 0) return n;
  let o = (0, import_chunk_865at33z.b)("tengu_agile_glade", null), a = (0, import_chunk_0jve1fep.Le)(o) ? o[r] : void 0;
  if (typeof a !== "number") return n;
  let d = n.sample_rate, c = typeof d === "number" && d > 0 && d < 1 ? d : 1, p = (0, import_chunk_865at33z.Gzn)(a / c);
  if (p === null) return n;
  if (p === 0) return null;
  return { ...n, sample_rate: a };
}
async function zWn(e, n) {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return;
  let r = D.of((0, import_chunk_f9x2f6cx.N)().host), o = r.datadogInitialized;
  if (o === null) o = await r.initializeDatadog();
  if (!o || !V.has(e)) return;
  if (r.isPausedByEgressRefusal()) return;
  let a = pe(e, n);
  if (a === null) return;
  let d;
  if (re(e)) {
    let c = a.mcpServerKeyHash ?? a.mcpServerBaseUrl, p = ie(r.peerRateWindows, e, c === void 0 ? void 0 : String(c), Date.now());
    if (!p.admitted) return;
    if (p.droppedSinceLastForward > 0) d = p.droppedSinceLastForward;
  }
  r.askResolverAheadOfLogs();
  try {
    let c = await (0, import_chunk_865at33z.Xxs)({ model: a.model, betas: a.betas }), { envContext: p, head_sha: T, is_clean_tree_at_start: h, changed_file_count_at_start: me, untracked_file_count_at_start: fe, ...M } = c, g = { ...M, ...p, ...Z(e, a), userBucket: r.getUserBucket(), ...d !== void 0 && { droppedSinceLastForward: d } };
    if (te(g, r.toSnakeCase), typeof g.toolName === "string") g.toolName = _e(g.toolName, g.isMcp === true);
    if (g.model !== void 0) {
      let m = (0, import_chunk_zhr7rpv7.ya)(), f = ce(g.model, { isTrustedAnt: false, onAnthropicHost: m });
      if (f === null) return;
      g.model = f;
    }
    if (typeof g.version === "string") g.version = ge(g.version);
    if (g.status !== void 0 && g.status !== null) {
      let m = String(g.status);
      g.http_status = m;
      let f = m.charAt(0);
      if (f >= "1" && f <= "5") g.http_status_range = `${f}xx`;
      delete g.status;
    }
    let R = (0, import_chunk_865at33z.tXe)(), y = R ? (0, import_chunk_865at33z.COl)(g) : g, E = { ddsource: "nodejs", ddtags: [`event:${e}`, ...X.filter((m) => y[m] !== void 0 && y[m] !== null).map((m) => `${r.toSnakeCase(m)}:${y[m]}`)].join(","), message: e, service: "claude-code", hostname: "claude-code", env: "external" };
    for (let [m, f] of Object.entries(y)) if (f !== void 0 && f !== null) E[r.toSnakeCase(m)] = f;
    if (!R) r.builtUnredacted.add(E);
    r.sender.enqueue(E);
  } catch (c) {
    (0, import_chunk_k449cc64.i)(c);
  }
}
function A() {
  return C() + 5e3;
}
function C() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS || G;
}
async function I() {
  try {
    return await new import_promises.Resolver({ timeout: 1e3, tries: 1 }).resolve4(new URL(k).hostname), false;
  } catch (e) {
    return (0, import_chunk_jv7av99m.w)(e) === "ENOTFOUND";
  }
}
function P() {
  return (0, import_chunk_3jjr3wje.YX)(k) === void 0;
}
