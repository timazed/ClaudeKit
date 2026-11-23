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
var chunk_khxw3ng0_exports = {};
__export(chunk_khxw3ng0_exports, {
  ADr: () => ADr,
  CDr: () => CDr,
  DHo: () => DHo,
  EDr: () => EDr,
  HHo: () => HHo,
  IDs: () => IDs,
  Jut: () => Jut,
  ODs: () => ODs,
  Rqn: () => Rqn,
  Sp: () => Sp,
  TDr: () => TDr,
  Zi: () => Zi,
  axt: () => axt,
  er: () => er,
  gta: () => gta,
  ixt: () => ixt,
  k$l: () => k$l,
  s_n: () => s_n,
  vDr: () => vDr,
  w$l: () => w$l
});
module.exports = __toCommonJS(chunk_khxw3ng0_exports);
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_4eswazsj = require("/$bunfs/root/chunk-4eswazsj.js");
var import_chunk_vyaqbqge = require("/$bunfs/root/chunk-vyaqbqge.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
function w(e, t) {
  var n = {};
  return t = (0, import_chunk_vyaqbqge.aP)(t, 3), (0, import_chunk_gd77dyw4.K_n)(e, function(o, r, _) {
    (0, import_chunk_4eswazsj.nse)(n, r, t(o, r, _));
  }), n;
}
var er = w;
function Zi(e, t) {
  if (t in e) return e[t];
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return;
  let n = Object.keys(e).find((o) => o.toUpperCase() === t.toUpperCase());
  return n === void 0 ? void 0 : e[n];
}
var Sp = "$defaults";
function Jut(e) {
  return (e ?? []).some((t) => t !== "$defaults");
}
function EDr(e) {
  return !!e?.length && !e.includes("$defaults");
}
function vDr(e, t, n) {
  if (!e?.length) return [...t];
  let o = false, r = [];
  for (let _ of e) {
    if (_ === "$defaults") {
      if (!o) r.push(...t), o = true;
      continue;
    }
    r.push(n(_));
  }
  return r;
}
function E(e, t) {
  return vDr(e, t.length > 0 ? [t] : [], (n) => `- ${n}`).join(`
`);
}
function w$l(e) {
  if (e.length === 0) return "";
  return `- User Deny Rules: The user has configured these permission deny rules: ${e.map((n) => `\`${n}\``).join(", ")}. Each rule names a tool and (optionally) an argument pattern that is already hard-blocked for that tool. Block the action if it accomplishes the same effect via a different tool \u2014 e.g. using Bash with \`python -c\`, \`sed -i\`, \`cat >\`, heredocs, or similar to write or edit a file that an Edit/Write/MultiEdit deny rule covers, or otherwise routing around a deny rule by switching tools. The named tool itself is enforced separately; your job here is to catch circumvention.`;
}
var y = ["user_allow_rules_to_replace", "user_soft_deny_rules_to_replace", "user_hard_deny_rules_to_replace", "user_environment_to_replace"], S = "<settings_deny_rules>";
function HHo(e, t, { collapseEmptySlotLines: n }) {
  let o = { user_allow_rules_to_replace: t.allow, user_soft_deny_rules_to_replace: t.softDeny, user_hard_deny_rules_to_replace: t.hardDeny, user_environment_to_replace: t.environment }, r = "";
  for (let _ = 0; _ < e.length; ) {
    let i = -1, a = -1, g = null, c = null;
    for (let d of y) {
      let p = `<${d}>`, s = e.indexOf(p, _);
      if (s === -1 || i !== -1 && s > i) continue;
      let h = `</${d}>`, f = e.indexOf(h, s + p.length);
      if (f === -1) continue;
      i = s, a = f + h.length, g = e.slice(s + p.length, f), c = d;
    }
    let l = e.indexOf(S, _);
    if (l !== -1 && (i === -1 || l < i)) i = l, a = l + S.length, c = null;
    if (i === -1) {
      r += e.slice(_);
      break;
    }
    let u = c === null ? t.settingsDenyBlock : E(o[c], g ?? "");
    r += e.slice(_, i);
    let m = e.startsWith(`
`, a) ? `
` : "";
    r += n ? u && `${u}
` : u + m, _ = a + m.length;
  }
  return r;
}
function Rqn(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function TDr(e) {
  let t = /^\[([^[\]]{1,80})\]/.exec(e)?.[1];
  return t && Rqn(t) || void 0;
}
var gta = ["account_standing_rule_changes", "auto_mode_bypass", "blind_apply", "browser_file_upload_exfil", "browser_input_exfil", "browser_js_exfil", "browser_navigate_exfil", "browser_shortcut_execution", "chatops_trigger_comments", "ci_bypass", "cloud_storage_mass_delete", "cluster_wide_workload_creation", "code_from_external", "code_that_leaks_when_run", "command_network_lists", "containment_escape", "create_public_surface", "create_rce_surface", "create_unsafe_agents", "credential_exploration", "credential_leakage", "credential_materialization", "data_exfiltration", "dns_domain_cert_changes", "excess_sensitive_detail", "exfil_scouting", "expose_local_services", "external_ingress_tunnel", "external_system_writes", "feature_flag_writes", "git_destructive", "instruction_poisoning", "interfere_with_workloads", "irreversible_deletion_general", "irreversible_local_destruction", "live_shared_artifact_sensitive_delta", "logging_audit_tampering", "merge_without_review", "modify_shared_resources", "node_lifecycle_operations", "out_of_place_publication", "package_registry_bypass", "permission_grant", "pii_data_handling", "production_deploy", "production_reads", "protected_scope_iac_apply", "public_data_sharing_upload", "real_world_transactions", "remote_repoint", "remote_shell_writes", "safety_bypass_flag", "sandbox_network_callback", "secret_store_writes", "security_test_removal", "security_weaken", "self_approval", "self_modification", "sensitive_remote_exec", "sensitive_source_provenance", "session_transcript_tampering", "shared_cluster_mutation", "shared_scratch_sweep", "third_party_attack", "tls_auth_weaken", "tmux_self_drive", "traffic_redirection", "unauthorized_persistence", "unrequested_artifact_publish", "unrequested_commit_in_a_connected_app", "untrusted_code_integration", "unverifiable_deletion_scope", "unverifiable_deletion_target"], DHo = ["cowork_browser_save", "cowork_delete_grant", "cowork_file_to_upload", "cowork_folder_access", "cowork_run_routine_now", "cowork_scheduled_task_delete", "cowork_scheduled_task_write", "cowork_skill_persistence", "cowork_upload_site", "cowork_web_file_sent"], ODs = ["access_added_as_a_means", "bot_check_circumvention", "consent_given_for_the_user", "identity_not_given", "notes_for_later_sessions", "save_over_an_occupied_name", "stated_interface_sidestepped", "walled_content_from_a_copy", "website_access_circumvention"], CDr = ["destructive_or_unwanted_actions", "sensitive_information_leakage", "unauthorized_access", "undermining_oversight", "unsanctioned_communication"];
var b = [], IDs = /* @__PURE__ */ new Set([...gta, ...b]), k$l = /* @__PURE__ */ new Set([...IDs, ...ODs, ...CDr]), ADr = /* @__PURE__ */ new Set([...IDs, ...DHo]);
function ixt(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 32 && n !== 9 || n >= 127 && n <= 159 || n === 8232 || n === 8233) return true;
  }
  return false;
}
var T = /[\p{Cf}\p{Default_Ignorable_Code_Point}\u2028\u2029\u2800\uFFF9-\uFFFB\u{1D173}-\u{1D17A}]/u;
function axt(e) {
  return T.test(e);
}
function s_n(e) {
  if (e.includes("<settings_") || y.some((t) => e.includes(`<${t}`) || e.includes(`</${t}`))) return "template_token";
  if (e.includes("<cc_automode") || e.includes("</cc_automode")) return "region_tag";
  return null;
}
