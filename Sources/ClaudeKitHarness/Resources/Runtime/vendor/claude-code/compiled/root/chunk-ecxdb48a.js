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
var chunk_ecxdb48a_exports = {};
__export(chunk_ecxdb48a_exports, {
  $Ie: () => $Ie,
  Jba: () => Jba,
  Kba: () => Kba,
  Qba: () => Qba,
  Vba: () => Vba,
  Xba: () => Xba,
  Yba: () => Yba,
  Zba: () => Zba,
  Zzs: () => Zzs,
  a2r: () => a2r,
  awa: () => awa,
  cwa: () => cwa,
  d2r: () => d2r,
  dwa: () => dwa,
  e6s: () => e6s,
  ewa: () => ewa,
  f8t: () => f8t,
  iwa: () => iwa,
  l2r: () => l2r,
  lwa: () => lwa,
  njo: () => njo,
  nwa: () => nwa,
  owa: () => owa,
  qba: () => qba,
  rjo: () => rjo,
  rwa: () => rwa,
  swa: () => swa,
  twa: () => twa,
  uwa: () => uwa
});
module.exports = __toCommonJS(chunk_ecxdb48a_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
function a2r({ field: e, targetName: t }) {
  let n = `${e} is not available on ${t}.`;
  return e === "run_in_background" ? `${n} The calling session has no way to poll a background task there. Run it in the foreground, or in the session's own environment.` : n;
}
function Vba({ toolName: e, targetName: t }) {
  return `${e} on ${t} is served for Claude Code remote tool execution and must be called through a cloud session's forwarder.`;
}
function Kba({ toolName: e, targetName: t }) {
  return `${e} on ${t} speaks a different remote tool execution protocol version than the caller. Update Claude Code on both machines.`;
}
function qba({ refusal: e, toolName: t, targetName: n }) {
  return `${n} refused this ${t} request: ${k(e, n)}. Nothing ran for this request. ${_(e, n)}`;
}
function _(e, t) {
  switch (e.what) {
    case "too_large":
      return "Sending it again unchanged will not help. If its input is large or deeply nested, a call with a smaller or flatter input may go through; if not, tell the user instead of retrying.";
    case "unmarked":
      return "Sending it again will not help: tell the user instead of retrying.";
    case "no_step":
    case "both_formats":
    case "not_honoured":
    case "malformed":
      return `Sending it again will not help: tell the user that updating Claude Code on ${t} may fix this.`;
    default:
      return e;
  }
}
function k(e, t) {
  switch (e.what) {
    case "unmarked":
      return `Anthropic's service did not mark it as checked, and ${t} takes this kind of request only with that mark`;
    case "no_step":
      return "it is not in the format that Anthropic's service said it was in";
    case "both_formats":
      return "it mixes fields of two request formats";
    case "too_large":
      return `it is larger, or more deeply nested, than ${t} accepts`;
    case "not_honoured":
      return v(e.part, t);
    case "malformed":
      return `${t} could not read it`;
    default:
      return e;
  }
}
function v(e, t) {
  switch (e) {
    case "check":
    case "run":
    case "decline":
      return `it asks for the step "${e}", which ${t} does not take`;
    case "permission_context":
    case "approval.permission_context":
      return `its field "${e}" may hold only a permission mode that ${t} knows`;
    default:
      return `it has the field "${e}", which ${t} does not take`;
  }
}
function Yba({ misfit: e, targetName: t, approvalCame: n }) {
  let s = `the call was not run${n ? ", though an approval came with it" : ""}`;
  return e === "self_too_old" ? `Claude on ${t} is too old for this session \u2014 ${s}. Retrying will not help: tell the user to update the Claude app or Claude Code on ${t}, then open this session again.` : `This session's Claude Code is too old for ${t} \u2014 ${s}. Retrying will not help: tell the user to start a new session.`;
}
function Zzs({ stoppedBy: e, targetName: t }) {
  switch (e) {
    case "deadline":
      return `The call was stopped on ${t} at its deadline before the command started \u2014 nothing ran.`;
    case "shutdown":
      return `The call was stopped because Claude Code on ${t} is shutting down, before the command started \u2014 nothing ran.`;
    case "cancel":
      return `The call was cancelled on ${t} before the command started \u2014 nothing ran.`;
  }
}
function njo({ targetName: e, why: t }) {
  return `${t === "gone" ? `That permission request is no longer pending on ${e}` : `This approval answers a different request than the one pending on ${e}`}, so nothing ran. Run the tool again if it is still needed.`;
}
function Xba({ requestedMs: e, appliedMs: t, targetName: n }) {
  let s = (0, import_chunk_f64qna2j.Cn)(e, { hideTrailingZeros: true }), o = (0, import_chunk_f64qna2j.Cn)(t, { hideTrailingZeros: true });
  if (s === o) s = `${e}ms`, o = `${t}ms`;
  return `The ${s} timeout this call asked for exceeds the ${o} ${n} allows a command \u2014 it was held to ${o}.`;
}
var w = 3, x = { operation_not_permitted: "Operation not permitted", read_only_file_system: "Read-only file system", launch_services: "a LaunchServices error (-10810)", sandbox_unavailable: "the sandbox could not start" };
function Jba({ targetName: e, failed: t, violationRecorded: n, filesystemConfined: s, symptoms: o, deniedPathsNamed: a, firstWord: i }) {
  let h = a.slice(0, w).join(", "), u = a.length - w, m = u > 0 ? `${h} and ${u} more` : h, l = a.length === 1, r = a.length === 0 ? "" : `${m} (its settings deny ${l ? "that path" : "those paths"}). In this command ${l ? "that path looks" : "those paths look"} missing or empty even if ${l ? "it exists" : "they exist"} on ${e}. Do not substitute another file for ${l ? "it" : "them"}: tell the user ${l ? "it is" : "they are"} blocked.`, g = s ? `Commands this session runs on ${e} run inside Claude Code's sandbox there. A path its settings deny looks missing or empty to them, writes outside the working folders fail, and only allowed network hosts are reachable. If something you expect is absent, say it may be the sandbox rather than working around it.` : `Commands this session runs on ${e} run inside Claude Code's sandbox there, which lets them reach only allowed network hosts and does not restrict their file reads or writes.`;
  if (!t && !n) {
    if (r !== "") return `This ran inside ${e}'s sandbox, which hides ${r}`;
    return i ? g : void 0;
  }
  let b = i ? g : `This ran inside ${e}'s sandbox.`, p = t && !i && r === "" ? " Tell the user rather than working around it." : "", d = o.filter((c) => c !== "sandbox_unavailable"), y = d.includes("launch_services") ? " (opening an app or system service is blocked there: run that step outside the sandbox or ask the user to open it)" : "", f = o.includes("sandbox_unavailable") ? ` Its output is only a bwrap or sandbox-exec error, which usually means the sandbox could not start and the command never ran. If so, running it again will not help: tell the user the sandbox on ${e} may not be starting.` : n ? ` The sandbox_violations lines in its output name what it blocked${t ? ", and if that is what failed it, running it again unchanged will fail the same way" : ", and that stays blocked on a rerun"}.${p}` : d.length > 0 ? ` Its output says ${d.map((c) => x[c]).join(" and ")}, which there usually means the sandbox refused it${y}, and if so running it again unchanged will fail the same way.${p}` : "";
  if (r === "" && f === "" && !i) return s ? `This ran inside ${e}'s sandbox: if it failed on a missing path, a refused write or an unreachable host, that may be the sandbox rather than the command.` : `This ran inside ${e}'s sandbox: if it failed reaching a network host, that may be the sandbox rather than the command.`;
  return `${b}${r === "" ? "" : ` It hides ${r}`}${f}`;
}
function Qba({ targetName: e, shellId: t, outputPath: n, limitMs: s }) {
  let o = (0, import_chunk_f64qna2j.Cn)(s, { hideTrailingZeros: true });
  return `Command running in the background on ${e} with ID: ${t}. Output is being written there to: ${n}. This session is not notified when it finishes. Whether it is still running is told by ${e} itself: not by that file, which holds only what the command has printed (a program that buffers its output shows it there only when it flushes), and never by pgrep, ps, pkill or a network request from a later command, because where ${e} sandboxes commands each command sees only its own processes and its own network, so a command that is running looks absent from there. It is stopped after ${o} in the background, or earlier if ${e} stops serving this session.`;
}
function l2r(e, t) {
  switch (e) {
    case "caller_stopped":
      return "by this session";
    case "stopped_by_person":
      return `by the person at ${t}`;
    case "time_limit":
      return "at its time limit";
    case "serving_ended":
      return `when ${t} quit serving`;
    case "serving_off":
      return "when serving shut off";
    case "serving_check_failed":
      return `when ${t} could not check whether it still serves this session`;
    case "call_stopped":
      return "when its call ended";
  }
}
function rjo(e, { targetName: t, max: n }) {
  switch (e) {
    case "full":
      return `${t} already has ${n} background ${(0, import_chunk_7cfjrnwy.O)(n, "command")} running or waiting for approval for this session, the most it takes at a time. Nothing was started. Wait for one to finish, or run this one in the foreground.`;
    case "sandbox_down":
      return `${t} has Claude Code's sandbox switched on, but the sandbox is not running there, so it starts no command in the background. Nothing was started.`;
    case "unavailable":
      return `${t} cannot run a command in the background for this session right now. Nothing was left running. Run it in the foreground.`;
  }
}
function Zba({ toolName: e, targetName: t }) {
  return `${e} is not served on ${t}.`;
}
function d2r({ targetName: e, kind: t, subject: n }) {
  switch (t) {
    case "read":
      return `${e} does not let a cloud session read the credential that authorizes this connection (${n}). Nothing was read.`;
    case "write":
      return `${e} does not let a cloud session change the credential file that authorizes this connection (${n}). Nothing was written.`;
    case "keychain":
      return `${e} does not let a cloud session query its credential store (\`${n}\`). Nothing was run. Either the command names one of the store's tools or APIs, or it has more quoting or escaping than could be checked for such a name; if it names none, split it into simpler commands.`;
    case "keychain_files":
      return `${e} does not let a cloud session open this Mac's keychain files (${n}). Nothing was read or written.`;
    case "credential_store_files":
      return `${e} does not let a cloud session open this computer's Credential Manager files (${n}). Nothing was read or written.`;
    case "exec_ingest":
      return `${e} does not let a cloud session write to ${n}, which its background daemon would execute. Nothing was written.`;
    case "personal_credential":
      return `${e} does not let a cloud session read or change its SSH keys, cloud-provider credentials or saved developer-tool logins (${n}). Nothing was read or written.`;
  }
}
function ewa({ targetName: e }) {
  return `${e} does not let a cloud session change its Claude Code settings files, or the folder that holds them. Nothing was run. Tell the user: those settings can only be changed on ${e} itself.`;
}
function twa({ targetName: e }) {
  return `${e} does not let a cloud session change its Claude Code settings files. Nothing was changed. Tell the user: those settings can only be changed on ${e} itself.`;
}
function nwa({ targetName: e, toolName: t }) {
  return `${e} could not finish checking its permission rules for this ${t} call, so the call was not run and nobody was asked. Sending the same call again is unlikely to help. Tell the user: this is an error on ${e}, not a refusal by one of its rules.`;
}
function rwa({ targetName: e, limit: t }) {
  return `${e} already keeps state for ${t} cloud ${(0, import_chunk_7cfjrnwy.O)(t, "session")}, the most it holds at once \u2014 this session was not added and nothing ran. Tell the user: restarting Claude Code on ${e} frees those seats. Do not retry in a loop.`;
}
function owa({ targetName: e }) {
  return `Claude Code on ${e} has only just started and had not finished loading the hooks and settings it checks every call against before this call's time ran out \u2014 nothing ran. Send the call again in a moment. If it is refused this way again, tell the user that Claude Code on ${e} is not finishing its start-up.`;
}
function swa({ targetName: e }) {
  return `${e} changed how it allows this session's calls while this one was being checked \u2014 nothing ran. Send the call again.`;
}
function e6s({ targetName: e, remedy: t }) {
  return `${e} is set to run this session's calls only inside a VM, and the VM is not available \u2014 nothing ran. Sending the call again will not change that. Tell the user that the VM on ${e} is not available${t === void 0 ? ", and that its owner can check Claude Code there." : `. ${t}`}`;
}
function iwa({ targetName: e }) {
  return `${e} could not read all of its settings when this call arrived, so it could not tell whether this session's calls may run there or only inside a VM \u2014 nothing ran. The call can be sent again in a moment. If it is refused this way again, tell the user that Claude Code on ${e} cannot read its settings, and that its owner can check the settings files there and whether the organization's settings have loaded.`;
}
function awa({ targetName: e, leg: t, endedAsk: n, ageMs: s }) {
  let o = t === "call" ? "This call" : "This answer to a permission request", a = n ? "the request it answered was withdrawn and nothing ran. Send the call again if it is still wanted." : t === "call" ? "nothing ran. Send it again if it is still wanted." : "nothing ran for it.";
  return s === void 0 ? `${o} reached ${e} over a connection that could not be dated against the service's clock, so whether it is still current is unknown \u2014 ${a}` : `${o} reached ${e} ${(0, import_chunk_f64qna2j.Cn)(s)} after it was sent (the machine was asleep, offline, or reconnecting), after this session had stopped waiting for it \u2014 ${a}`;
}
function f8t({ targetName: e, status: t, subtype: n }) {
  let s = `${(0, import_chunk_53snsm3k.hGt)({ status: t, payloadType: "control_request", subtype: n })} Nothing was done for it on ${e}. Sending it again will not change that: tell the user instead of retrying.`;
  return t === "UNSPECIFIED" && n === "remote_tool_call" ? `${s} Retrying, reconnecting ${e} or changing a setting on it is unlikely to fix this, and a new session is unlikely to help: ${e} got no confirmation it could read from Anthropic's service that this session is the sender. Tell the user that, ask them to report it to Anthropic, and continue without ${e}.` : s;
}
function lwa({ targetName: e }) {
  return `${e} could not check this session with Anthropic's service just now, so nothing was done for this request. That can pass: do other work, or wait, for about 45 seconds, then send the call again. If you have reason to think that it already ran or is still running, check that first. If it is refused this way three times, tell the user and continue without ${e}.`;
}
function dwa({ targetName: e, state: t }) {
  switch (t) {
    case "declined":
      return `This session's attached repositories were not marked trusted, so its calls to ${e} are not accepted \u2014 nothing was done for this one. Sending it again will not change that: ask the person to answer the trust question, and tell them what stays blocked until they do.`;
    case "nothing_to_mark":
    case "not_marked":
      return `This session has repositories or files attached that its owner has not said they trust, so its calls to ${e} are not accepted. Nothing was done for this one. Sending the same call again will not change that. Call ${import_chunk_r9ecxfn9.Z5e} once. If it refuses with a trust question, put the question to the person: their yes clears this. If it lists folders, call ${import_chunk_r9ecxfn9.Q5e} for the folder this session was using: the person's Allow clears this. If you have neither tool, if neither asks the person anything, or if ${e} still refuses after their answer, tell them plainly what stays blocked, and that a new session with no repository and none of their files can run a quick command.`;
  }
}
function cwa({ targetName: e, askAgeMs: t, windowMs: n, dated: s }) {
  let o = Math.round(n / 36e5), a = Math.floor(t / 864e5), i = a >= 2 ? `${a} days` : "more than a day", h = s ? `${i} after the request was raised \u2014 longer than an answer` : `over a channel that carries no delivery time, ${i} after the request was raised \u2014 longer than such an answer`;
  return `This approval reached ${e} ${h} is honoured for (${o} ${(0, import_chunk_7cfjrnwy.O)(o, "hour")}) \u2014 so the request was withdrawn and nothing ran. Send the call again if it is still wanted.`;
}
function uwa({ targetName: e, limit: t }) {
  return `${e} already has ${t} approval ${(0, import_chunk_7cfjrnwy.O)(t, "request")} from this session waiting, the most it holds at once, so it did not ask about this call and this call was not run. Send it again once some of them have been answered.`;
}
function $Ie({ targetName: e, reason: t }) {
  switch (t) {
    case "evicted":
      return `An older pending approval on ${e} was withdrawn because too many were waiting \u2014 it did not run.`;
    case "tool_withdrawn":
      return `The tool is no longer offered on ${e} \u2014 nothing ran.`;
    case "host_unbound":
      return `${e} stopped serving this session while the permission request was open \u2014 nothing ran.`;
    case "host_stopped":
      return `Claude Code on ${e} stopped while the permission request was open \u2014 nothing ran.`;
    case "stale_answer":
      return `The answer to this permission request reached ${e} after the session had stopped waiting for it \u2014 the request was withdrawn and nothing ran.`;
    case "replaced_by_retry":
      return `A newer copy of this call now carries the permission request on ${e}; this one was withdrawn and nothing ran under it.`;
    case "record_evicted":
      return `${e} no longer holds a record of this permission request \u2014 nothing ran under it.`;
    case "no_answer":
      return `Nobody answered the permission request for this call on ${e} in the time the session waits \u2014 it was withdrawn and nothing ran.`;
    case "host_withdrawn":
      return `Claude Code on ${e} left the session while the permission request was open \u2014 nothing ran.`;
    case "superseded":
      return `A newer Claude Code on ${e} took over while the permission request was open \u2014 nothing ran.`;
    case "unrecognized":
      return `The permission request on ${e} ended for a reason this version of Claude Code does not recognise \u2014 nothing is known to have run.`;
  }
}
