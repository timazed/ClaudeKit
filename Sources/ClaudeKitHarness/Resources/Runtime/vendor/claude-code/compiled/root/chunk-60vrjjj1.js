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
var chunk_60vrjjj1_exports = {};
__export(chunk_60vrjjj1_exports, {
  $ki: () => $ki,
  Bki: () => Bki,
  Gao: () => Gao,
  Gki: () => Gki,
  Kki: () => Kki,
  SZa: () => SZa,
  Uki: () => Uki,
  Vki: () => Vki,
  Wki: () => Wki,
  als: () => als,
  bZa: () => bZa,
  ern: () => ern,
  ils: () => ils,
  jao: () => jao,
  jki: () => jki,
  lls: () => lls,
  sls: () => sls,
  zki: () => zki
});
module.exports = __toCommonJS(chunk_60vrjjj1_exports);
var ern = "self_hosted_runner_get_pool", sls = "self_hosted_runner_list_runners", ils = "self_hosted_runner_list_sessions", SZa = "self_hosted_runner_list_secrets", jao = "self_hosted_runner_spawn_local", als = "self_hosted_runner_read_health", lls = "self_hosted_runner_read_metrics", bZa = "self_hosted_runner_tail_log", Gao = "self_hosted_runner_requeue_session";
var $ki = `Read a self-hosted environment's aggregate state (alive_runner_count, available_capacity_total, capacity_in_use, pending_session_count, unplaceable_session_count, backing_off_count, circuit_broken_count).${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`, Uki = `List runners registered to a self-hosted environment, with per-runner lease_expires_at, locked_account_id/email, and assigned_session_count.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`, Bki = `List sessions queued/assigned in a self-hosted environment (status, failure_log[], excluded_runner_ids, spawn_attempt, spawn_last_error).${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`, Wki = `List environment secrets (jti, label, created_at, revoked, last_used_at). Secret values are never returned \u2014 only metadata.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`, jki = "Spawn a self-hosted runner as a detached background process on THIS machine using this binary's `self-hosted-runner` subcommand. Always passes `--base-dir` (the runner's default of /workspace is unwritable on operator laptops) and uses space-separated flags only. Returns {pid, log_path, health_port, command} \u2014 `command` is the equivalent shell line for the operator's cheat sheet. This is for the zero\u2192aha proof; production deployment (k8s / docker-compose) is taught, not tooled.", Gki = "GET http://127.0.0.1:{health_port}/healthz on the local runner (2s timeout). Returns the health JSON, or {disabled:true} when health_port is 0, or {unreachable:true,error} when nothing is listening.", zki = "GET http://127.0.0.1:{health_port}/metrics on the local runner and parse the `claude_code_self_hosted_runner_*` Prometheus gauges into {capacity, active_sessions, last_poll_age_seconds, locked_account_email?}.", Vki = "Read the last N bytes of the runner's --log-file with the shared secret redaction (key=value secrets, sk-ant/Bearer/Basic, URL userinfo, JWTs, and VCS/service PATs \u2014 see redact() in src/utils/secretRedaction.ts for the current rule set) applied before the content reaches model context.", Kki = `Requeue an assigned session onto a different runner. Appends the observed runner to the session's excluded_runner_ids so the queue pop doesn't immediately hand it back. Takes session_id + runner_id (the runner the caller observed failing). Only write operation in the doctor tool suite.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`;
