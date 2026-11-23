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
var chunk_thxnftw8_exports = {};
__export(chunk_thxnftw8_exports, {
  $Ca: () => $Ca,
  $Mt: () => $Mt,
  BCa: () => BCa,
  DCa: () => DCa,
  FCa: () => FCa,
  GCa: () => GCa,
  JCa: () => JCa,
  JGo: () => JGo,
  KCa: () => KCa,
  LCa: () => LCa,
  NCa: () => NCa,
  QCa: () => QCa,
  QGo: () => QGo,
  S4s: () => S4s,
  S6r: () => S6r,
  UCa: () => UCa,
  UMt: () => UMt,
  VCa: () => VCa,
  WCa: () => WCa,
  XCa: () => XCa,
  XGo: () => XGo,
  YCa: () => YCa,
  YGo: () => YGo,
  ZCa: () => ZCa,
  _4s: () => _4s,
  _6r: () => _6r,
  aAa: () => aAa,
  avn: () => avn,
  b4s: () => b4s,
  bht: () => bht,
  cAa: () => cAa,
  dAa: () => dAa,
  eAa: () => eAa,
  f4s: () => f4s,
  f6r: () => f6r,
  g4s: () => g4s,
  g6r: () => g6r,
  h4s: () => h4s,
  h6r: () => h6r,
  iAa: () => iAa,
  ivn: () => ivn,
  jCa: () => jCa,
  k4s: () => k4s,
  lAa: () => lAa,
  m4s: () => m4s,
  m6r: () => m6r,
  nAa: () => nAa,
  oAa: () => oAa,
  p4s: () => p4s,
  p6r: () => p6r,
  qCa: () => qCa,
  rAa: () => rAa,
  sAa: () => sAa,
  tAa: () => tAa,
  u6r: () => u6r,
  uAa: () => uAa,
  w4s: () => w4s,
  wet: () => wet,
  y4s: () => y4s,
  y6r: () => y6r,
  zCa: () => zCa
});
module.exports = __toCommonJS(chunk_thxnftw8_exports);
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_v9v4rc1a = require("/$bunfs/root/chunk-v9v4rc1a.js");
var import_chunk_xf6symkh = require("/$bunfs/root/chunk-xf6symkh.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
function YGo({ requested: e, attached: t }) {
  let n = (0, import_chunk_syr33dp2.YH)(e);
  if ((0, import_chunk_syr33dp2.Oat)(e) && !(0, import_chunk_syr33dp2.kV)(e)) return `No machine named "${n}" is attached to this session \u2014 to run this in the session's own environment, omit "${import_chunk_syr33dp2.io}".`;
  let s = t.length > 0 ? `Attached: ${t.join(", ")}.` : "No machine is attached to this session: only this session's own environment is available \u2014 it is not the user's machine, so do not describe it as one.", o = n !== e.trim() && t.some((r) => r === n || r === `${n} (offline)`) ? " (the name as written contains extra or invisible characters)" : "";
  return `No machine named "${n}"${o} is attached to this session. ${s}`;
}
var v = "this session's Claude Code is the older of the two: a newer cloud environment is needed, not a change on the machine";
function x(e, t) {
  let n = import_chunk_syr33dp2.Jjt.map((r) => `v${r}`).join("/"), s = Math.max(...import_chunk_syr33dp2.Jjt);
  return { what: `the two Claude Code builds share no remote-tool protocol version (${t.length > 0 ? `its remote-tool protocol ${t.map((r) => `v${r}`).join("/")}, ours ${n}` : `it names no remote-tool protocol version this session reads; ours is ${n}`})`, remedy: t.length === 0 ? "whichever of the two is older needs updating" : Math.max(...t) < s ? `Claude Code on ${e} is the older of the two and needs updating` : v };
}
function R(e, t) {
  return t === "computer" ? { what: "its Claude Code is older than this session works with", remedy: `Claude Code on ${e} needs updating (or the Claude desktop app, if that is what runs it there)` } : { what: "its Claude Code works only with a newer Claude Code than this session runs", remedy: v };
}
function u6r({ name: e, why: t, runsOnlyThere: n, servedInsteadBy: s }) {
  let { what: o, remedy: r } = t.cause === "wire" ? x(e, t.announced) : R(e, t.older), l = s !== void 0 ? `${s.toolName} has no home ${a()}; ${s.name} serves it \u2014 set "${import_chunk_syr33dp2.io}" to "${s.name}".` : n === void 0 ? `Omit "${import_chunk_syr33dp2.io}" to run it ${a()} instead.` : `${n} exists only on ${e}, so it cannot run from this session until then.`;
  return `${e} is attached but ${o}; the call did not run; ${r}. ${l}`;
}
function XGo() {
  return `The user's computer could not be reached right now; the call did not run. Do not call it again in this turn: do the rest of the task without it, and tell the user what is blocked. ${import_chunk_v9v4rc1a.xb["away.ending"]()}`;
}
function DCa(e) {
  return `The user's computer is not ready yet \u2014 it may still be connecting (or running tools for cloud sessions is switched off on it, or this session could not verify it), so this session cannot tell yet whether "${(0, import_chunk_syr33dp2.YH)(e)}" is its name; the call did not run. Try once more in a few seconds; if it is still not ready, tell the user.`;
}
function y(e, t) {
  return t ? `for "${(0, import_chunk_syr33dp2.YH)(e)}" to reconnect after this session's cloud environment restarted` : `for "${(0, import_chunk_syr33dp2.YH)(e)}" to connect (this session could not reach it either)`;
}
var f = "the computer may be asleep or offline, Claude may not be running on it, running tools for cloud sessions may be switched off on it, or this session could not verify it", k = "Do not send this call again yet. If you have not asked for a folder on that computer since that wait, look the user's computer folders up and, if that computer is listed as online, ask for the folder this session was using there (the user approves the request); when it is attached, send the call again. Otherwise, or if the request does not bring the computer back, ask the user to check that Claude is running on that computer.";
function LCa(e, t, n = true, s = false) {
  return `This call waited ${Math.round(t / 1e3)} s ${y(e, n)}; it did not \u2014 ${f}. Nothing was sent. ${s ? k : "Ask the user to check that Claude is running on that computer rather than retrying immediately."}`;
}
function NCa(e, t, n = true, s = false) {
  return `This session already waited ${Math.round(t / 1e3)} s earlier ${y(e, n)}, and it still has not \u2014 ${f}. Nothing was sent. ${s ? k : "Ask the user to check that Claude is running on that computer."}`;
}
function f4s(e) {
  return `"${(0, import_chunk_syr33dp2.YH)(e)}" cannot run anything for this session right now: Claude on that computer stopped offering its tools here (the Claude app there may have closed or lost its connection, or running tools for cloud sessions was switched off on it). Nothing was sent. Ask the user to check that Claude is running on that computer, and to open the Claude app there if it was closed; if this session got the computer by asking to use one of its folders, look the folders up and ask to use that folder again afterwards.`;
}
function w(e) {
  return (0, import_chunk_2hdy50wd.Ccn)() ? `Do not call ${e}'s tools until it is attached again.` : `Do not call ${e} with "${import_chunk_syr33dp2.io}" until it is attached again.`;
}
function C(e, t) {
  switch (t) {
    case "idle":
      return `${e} stopped serving this session because the session had run nothing on it for a while: an idle computer frees its place for other sessions. Nothing on ${e} needs restarting and there is nothing to ask the user to fix. If the task still needs ${e}, look the user's computer folders up and ask for that folder again (the user approves the request); otherwise do the rest of the task without it. ${w(e)}`;
    case "released":
      return `The person at ${e} disconnected this session from the folder it was using there. Nothing on ${e} is down. Do the rest of the task without ${e} and tell the user what that leaves undone; ask for the folder again only if the user wants you to. ${w(e)}`;
  }
}
function JGo(e, t) {
  let n = (0, import_chunk_syr33dp2.YH)(e);
  return `${n} is no longer attached to this session; the call did not run. ${C(n, t)}`;
}
function p4s() {
  return "A computer is offering its tools to this session over an older connection that this session does not accept; the call did not run. If it is the user's computer, Claude Code on it needs updating. Do not retry until the user says it has been updated.";
}
function FCa() {
  return `The user's computer is linked to this session, but Claude on it has not connected \u2014 ${f}; the call did not run. Ask the user to check that Claude is running on that computer.`;
}
var m4s = "most often because Claude there was quit, Remote Control or running tools for cloud sessions was turned off on it, or this session was disconnected from that computer; more rarely Claude there stopped offering its tools by itself, and then says why on that computer";
function ivn(e, t = "machine") {
  let n = `${e} is not answering right now, most often because its Claude is not connected to this session (Claude is not running on ${e}, the computer is asleep or offline, or it is reconnecting after another session used it); the call did not run.`;
  if (t === "this_side") return `${n} Try again shortly, or ask the user to check that Claude is open on ${e}.`;
  return `${n} Do not call ${e} again in this turn: do the rest of the task without ${e}, and tell the user what is blocked and that opening Claude on ${e}, with the computer awake and online, is what brings it back. ${import_chunk_v9v4rc1a.xb["away.ending"]()}`;
}
function f6r(e, t, n, s, { cause: o, lastHeardAt: r, leftFor: l } = {}) {
  let _ = r === void 0 ? "" : `last heard from at ${M(new Date(r))} UTC; `, i = `${e} could not be reached from this session (${_}${t}); the call did not run.`;
  if (n === "this_side") return `${i} If Claude is not running on ${e}, or is no longer connected to this session, ask the user to check it; a call that was too large to deliver will not succeed on a retry.`;
  let g = s ? "" : ", and to say when it is back", h = import_chunk_v9v4rc1a.xb["away.until"](s ? e : void 0), d = s ? "" : ` ${import_chunk_v9v4rc1a.xb["away.ending"]()}`;
  switch (o) {
    case "asleep":
      return `${i} Waking the computer is all the user needs to do to bring ${e} back. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
    case "signed_off":
      if (l !== void 0) return `${i} ${C(e, l)}`;
      return `${i} Its Claude stopped serving this session by its own word, ${m4s}: ask the user to open Claude on ${e} again with Remote Control on${g}. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
    case "busy":
      return `${i} The last thing heard from it was its word that it was busy running a command and could not hear this session, so Claude on ${e} and the computer are most likely fine and it is the connection between them and this session that is down: ask the user to check that computer's network, and not to quit Claude there, which would stop the command it is running${s ? "" : "; and to say when it is back"}. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
    case void 0:
      return `${i} If Claude is not running on ${e}, or is no longer connected to this session, ask the user to check it${g}. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
    case "silent":
      return `${i} Most likely Claude on ${e} is no longer running (the app was closed, say) or lost its connection, or the computer went to sleep or offline: ask the user to open Claude on ${e} again with the computer awake and online${g}. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
  }
}
function $Ca({ name: e, toolName: t }) {
  return `${e} announced ${t} in a form this session cannot read (a version or naming mismatch between the two Claude Code builds \u2014 update whichever is older); nothing ran.`;
}
function $Mt({ name: e, toolName: t }) {
  return `${e} does not serve ${t} right now (its MCP server may have disconnected there); nothing ran.`;
}
function p6r({ name: e, toolName: t }) {
  return `${e}'s MCP tools are not available in this session right now; ${t} did not run.`;
}
function UCa({ name: e, toolName: t }) {
  return `${t} runs only on ${e}; omit "${import_chunk_syr33dp2.io}".`;
}
function h4s({ toolName: e, machines: t }) {
  let [n, ...s] = t;
  return s.length === 0 ? `${e} cannot run ${a()} \u2014 this session's own environment has no ${e}; it runs on ${n}: omit "${import_chunk_syr33dp2.io}" or set it to "${n}".` : `${e} cannot run ${a()} \u2014 this session's own environment has no ${e} \u2014 and ${t.length} attached machines serve it, so the call must say which: set "${import_chunk_syr33dp2.io}" to one of ${t.join(", ")}. Nothing ran.`;
}
function BCa({ name: e, toolName: t }) {
  return `${e} is no longer attached to this session, and this session's own environment has no ${t}: there is nowhere to run it until a computer that serves ${t} attaches again. Nothing ran; do not retry it ${a()} with another tool.`;
}
function WCa({ name: e, toolName: t, servedBy: n }) {
  return `${e} does not serve ${t}, and this session's own environment has none; ${n} serves it \u2014 set "${import_chunk_syr33dp2.io}" to "${n}" or omit it. Nothing ran.`;
}
function jCa({ name: e, toolName: t }) {
  return `Running ${t} on ${e} is not available in this session right now, and this session's own environment has no ${t}; it did not run.`;
}
function GCa({ name: e, toolName: t }) {
  return `${e} does not serve ${t} right now (its Claude Code there may have restarted without it, or be an older version), and this session's own environment has no ${t}; nothing ran.`;
}
function zCa({ name: e, toolName: t, served: n, offersMcpTools: s }) {
  if (n.length === 0 && s) return `This session has none of its built-in tools on ${e}, so ${t} did not run. Work on ${e} goes through its own tools (mcp__${import_chunk_qdcbcsg7.$n}__\u2026); omit "${import_chunk_syr33dp2.io}" only for a call that is meant to run ${a()}.`;
  let o = n.length === 0 ? "" : ` \u2014 or do it on ${e} through a tool it does serve there (${n.join(", ")})`;
  return `${e} does not serve ${t} right now (its Claude Code may be an older version); omit "${import_chunk_syr33dp2.io}" to run it ${a()}${o}.`;
}
function bht({ name: e, ruleMessage: t }) {
  return `${t} ${e} was not contacted.`;
}
function VCa({ name: e, toolName: t, path: n, spellingIs: s }) {
  return `${t} was given "${D(n, T)}", which is ${s} \u2014 a spelling this session cannot match to its own path rules as written. Use the file's full path as ${e} shows it. ${e} was not contacted.`;
}
var N = { hook: "A hook's approval", host_prompt: "The approval given in the app running this session", prompt: "The user's approval", classifier: "The approval" };
function KCa({ toolName: e, name: t, by: n }) {
  return `${N[n]} changed this ${e} call, but ${t} runs only the call it asked permission for, so the request there was withdrawn and nothing ran. Do not guess at the change: tell the user that the approval changed the call and that nothing ran.`;
}
function QGo({ name: e, requestBytes: t, capBytes: n }) {
  return `This call's input is ${m(t)} MiB, over the ${m(n)} MiB limit for calls to ${e}; it was not sent.`;
}
function m6r({ name: e, capMs: t, left: n = false }) {
  return n ? `${e} did not answer within ${Math.round(t / 1e3)}s, and what became of the call could not be learned from it afterwards; the request was left with ${e}, so the command may have run or may still be running there. Check its effect on ${e} before repeating it.` : `${e} did not answer within ${Math.round(t / 1e3)}s, and what became of the call could not be learned from it afterwards, so it was withdrawn there; it may have partially run. Check its effect on ${e} before repeating it.`;
}
function qCa(e) {
  return `${e} disconnected during the call. If the command had started, it has most likely continued to run there, but its result could not be delivered. Do not simply re-run it \u2014 first check whether it took effect (e.g. whether the file, commit or process now exists) or ask the user.`;
}
function c(e, t) {
  switch (t) {
    case "in_progress":
      return `${e} answered that this call was already under way there from an earlier attempt`;
    case "dropped":
      return `The connection to ${e} dropped during the call`;
    case "timed_out":
      return `${e} did not answer this call within this session's time limit`;
    case "unverified_refusal":
      return `A sender this session could not verify reported the call to ${e} refused`;
    case "classifier_refused":
      return `This session's automatic check (not a person) had approved the call to ${e}, and a sender this session could not verify reported it refused`;
    case "write_unresolved":
      return `This session could not confirm that this call was sent to ${e} in time (its connection to the service was backed up: the upload had not completed, or ended without an answer)`;
    case "approval_write_unresolved":
      return `This session could not confirm that your approval was sent to ${e} in time (its connection to the service was backed up: the upload had not completed, or ended without an answer)`;
  }
}
function YCa(e) {
  return `This call may or may not have reached ${e}: this session's connection to the service was backed up and the upload carrying it could not be confirmed in time, and what became of it could not be learned from ${e} afterwards. This is not a problem with ${e}. Check whether the command took effect before re-running it.`;
}
function XCa(e) {
  return `This session's upload of your approval could not be confirmed in time (its connection to the service was backed up); whether ${e} received it and ran the command could not be learned from it afterwards. This is not a problem with ${e}. Check whether the command ran before retrying it.`;
}
function JCa(e) {
  return `A sender this session could not verify reported this call refused, and ${e} could not be asked what became of it; whether it ran there is not confirmed. Check its effect before re-running it.`;
}
function h6r({ name: e, state: t, cause: n }) {
  let s = n === "unasked" ? `${e} answered that this call is still under way there` : `${c(e, n)}; asked again, ${e} reports`;
  switch (t) {
    case "running":
      return `${s}${n === "unasked" ? "" : " the command is STILL RUNNING there"}; its outcome is not known yet. Do not re-run it \u2014 check on its effect later, or ask the user.`;
    case "admitting":
      return `${s}${n === "unasked" ? " \u2014" : ""} it had received the call but nothing had started yet; whether it then ran is not known. Check on its effect before repeating it, or ask the user.`;
    case "awaiting_approval":
      return `${s}${n === "unasked" ? " \u2014" : ""} it was waiting for a permission decision and nothing had run, but it no longer accepts an answer to that question, so check on its effect before retrying it, or ask the user.`;
  }
}
function g4s(e, t, n) {
  let s = t === "dropped" ? `The connection to ${e} dropped before your approval reached it` : t === "classifier_refused" ? `This session's automatic check (not a person) had approved the call; a sender this session could not verify reported the approval refused, and ${e} had not run it when asked` : t === "unverified_refusal" ? `A sender this session could not verify reported your approval refused, and ${e} had not received it when asked` : t === "write_unresolved" || t === "approval_write_unresolved" ? `This session's upload of your approval could not be confirmed in time (its connection to the service was backed up), and ${e} had not received it when asked` : `${e} did not answer your approval within this session's time limit and had not received it when asked`, o = t === "unverified_refusal" ? "If the user answered from a surface this session cannot verify, send the call again and have them approve from the terminal or desktop prompt, unedited." : t === "classifier_refused" ? `Retry once if it is still needed. If it is refused again, stop and tell the user that this tool on ${e} needs their own approval.` : "It is safe to retry the call if it is still wanted.";
  return n ? `${s}; the request was withdrawn there and nothing ran. ${o}` : `${s}; the request was then withdrawn, but whether a delayed copy of the approval reached it first is not known. Check whether the command ran before retrying it.`;
}
function QCa(e, t, n) {
  return n === "desktop_app" ? `${c(e, t)}, and the Claude desktop app has restarted since and has no record of it. It may have run there (partially or fully): check its effect before repeating it.` : `${c(e, t)}, and Claude Code on ${e} has restarted since: the command was lost with it. It may have partially run before the restart \u2014 check its effect before repeating it.`;
}
function ZCa(e, t, n) {
  return `${c(e, t)}, and ${e} reports it never received it: it did not run. ${t === "unverified_refusal" && n === "desktop_app" ? "It is safe to retry; if it is refused the same way again, tell the user." : "It is safe to retry."}`;
}
function eAa(e, t) {
  return `Waiting up to ${t} s for ${(0, import_chunk_syr33dp2.YH)(e)} to reconnect\u2026`;
}
function tAa(e, t) {
  return `waited ${t} s for ${e} to reconnect after this session's environment restarted`;
}
function _4s(e) {
  return `Reconnecting to ${e} to learn what happened to the call\u2026`;
}
function g6r(e = "completed") {
  switch (e) {
    case "completed":
      return "(delivered after reconnect \u2014 the first reply was lost; this is the recorded result, the command was not run again)";
    case "refused":
      return "(delivered after reconnect \u2014 the first reply was lost; this is the refusal recorded then, nothing ran)";
    case "failed":
      return "(delivered after reconnect \u2014 the first reply was lost; this is how the call ended, it was not run again)";
  }
}
function _6r(e, t = "completed") {
  let n = e === void 0 || !Number.isFinite(e) || Math.abs(e) > 864e13 ? "earlier" : `at ${M(new Date(e))} UTC`;
  switch (t) {
    case "completed":
      return `(replayed \u2014 this call already ran ${n}; it was not run again)`;
    case "refused":
      return `(replayed \u2014 this is the refusal recorded ${n}; nothing ran then or now)`;
    case "failed":
      return `(replayed \u2014 this is how the call ended ${n}; it was not run again)`;
  }
}
function M(e) {
  return [e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()].map((t) => String(t).padStart(2, "0")).join(":");
}
function y6r({ name: e, detail: t }) {
  return `The call to ${e} failed in transit (${p(t, u)}); it may not have run.`;
}
function avn({ name: e, message: t }) {
  return `[refused by ${(0, import_chunk_syr33dp2.YH)(e)}] ${p(t, u)}`;
}
function nAa({ name: e, message: t }) {
  return `[refused \u2014 did not run on ${(0, import_chunk_syr33dp2.YH)(e)}] ${p(t, u)}`;
}
function rAa({ name: e, message: t }) {
  return `[failed on ${(0, import_chunk_syr33dp2.YH)(e)}] ${p(t, u)}`;
}
var T = 256, u = 8192, A = { prompt: "approved at a permission prompt", host_prompt: "approved at a permission prompt", hook: "approved by a permission hook", classifier: "approved by the auto-mode classifier", unasked: "no approval needed" };
function y4s(e) {
  return A[e];
}
function oAa(e, t, n, s = false) {
  let o = s && n === "unasked" ? void 0 : n, r = o === void 0 ? "" : ` \xB7 ${y4s(o)}`;
  return `[${s ? "on" : "ran on"} ${(0, import_chunk_syr33dp2.YH)(e)} \xB7 ${t === "" ? "unknown directory" : t}${r}]`;
}
function wet(e, t) {
  return (0, import_chunk_r8478wtb.IOr)(S(e.trim(), t?.trim()), T, { isDirectory: true });
}
function S(e, t) {
  let n = t?.replace(/[\\/]$/, "");
  if (!n) return e;
  if (e === n) return "~";
  let s = e.slice(n.length);
  return e.startsWith(n) && /^[\\/]/.test(s) ? `~${s}` : e;
}
function D(e, t) {
  return (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_xf6symkh.Z7)(e), t);
}
function p(e, t) {
  return (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_xf6symkh.r2t)(e), t);
}
function m(e) {
  return (e / 1048576).toFixed(2);
}
function a() {
  return (0, import_chunk_syr33dp2.p9)() === "container" ? "in the container" : "on this machine";
}
function S4s(e) {
  return `The approval for this call could not be verified as the user's own answer, so ${e} did not run it and nothing ran (its earlier permission request for this call may stay open there; that is harmless). To proceed, send the call again and have the user approve from the terminal or desktop prompt, unedited.`;
}
function sAa(e, t) {
  return `This session's automatic check approved this ${t} call, but only a person's approval counts for ${t} on ${e}, so nothing ran. Retry once if it is still needed. If it is refused again, stop and tell the user that ${t} on ${e} needs their own approval.`;
}
function b4s(e, t) {
  return t === "desktop_app" ? `The session service holds no approval from the user for this call, so nothing ran on ${e}. The call needs their approval on a card, and this session could not show them one or got no answer. Retry once if the call is still needed. If it is refused the same way, tell the user that the call needs their approval and that this session could not get it.` : `The approval for this call could not be verified as the user's own answer, so the call was not cleared to run on ${e} and nothing ran. Ask again and have the user approve from the terminal or desktop prompt, unedited.`;
}
function iAa({ name: e, capMs: t }) {
  return `The call to ${e} could not be sent within ${Math.round(t / 1e3)}s \u2014 this session's connection to the service was backed up \u2014 so it was withdrawn while still queued here. Most likely nothing ran on ${e}: if the call reaches it late, its withdrawal arrives with it (for a command with side effects, check before repeating it). This is not a problem with ${e}; try the call again.`;
}
function aAa({ name: e, capMs: t }) {
  return `Nothing ran on ${e}: the call could not be sent within ${Math.round(t / 1e3)}s \u2014 this session's connection to the service was backed up \u2014 and it was taken back before it left this session, so ${e} never received it. This is not a problem with ${e}; try the call again.`;
}
function w4s({ name: e, capMs: t }) {
  return `The call had reached ${e} and asked for approval there, but the user's approval could not be sent within ${Math.round(t / 1e3)}s \u2014 this session's connection to the service was backed up \u2014 and it was taken back before it left this session, so ${e} never received it and nothing ran; the pending request on ${e} is withdrawn. This is not a problem with ${e}; send the call again and the user will be asked once more.`;
}
function lAa({ name: e, capMs: t }) {
  return `The user's approval could not be sent to ${e} within ${Math.round(t / 1e3)}s \u2014 this session's connection to the service was backed up \u2014 so it was withdrawn while still queued here, and the pending request on ${e} with it. Most likely nothing ran: if the approval still reaches ${e} late, its cancellation arrives with it (for a command with side effects, check before repeating it). This is not a problem with ${e}; send the call again and the user will be asked once more.`;
}
function dAa({ name: e, capMs: t }) {
  return `The call had reached ${e} and asked for approval there, but the check that ${e} is still connected could not be sent within ${Math.round(t / 1e3)}s \u2014 this session's connection to the service was backed up \u2014 so the user's approval was never sent and the pending request on ${e} is withdrawn; nothing ran. This is not a problem with ${e}; send the call again and the user will be asked once more.`;
}
function cAa({ name: e, capMs: t }) {
  return `A liveness check to ${e} could not be sent within ${Math.round(t / 1e3)}s \u2014 this session's connection to the service was backed up; the call was not sent and nothing ran. This is not a problem with ${e}; try the call again.`;
}
function uAa({ name: e, why: t, unsent: n }) {
  let s = t === "withdrawn" ? `Claude Code on ${e} withdrew from this session (it exited or stopped serving)` : `Claude Code on ${e} restarted`;
  return n ? `${s} before this call reached it; nothing ran there, and no result will arrive for it.` : `The call was interrupted: ${s} while the call was with it, so no result will arrive for it. It may have partially run \u2014 check its effects on ${e} before repeating it.`;
}
function S6r() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_violin_winding", false) === true;
  } catch {
    return false;
  }
}
var E = "announces_return";
function k4s(e) {
  return e.source === "session" && e.description?.capabilities?.includes(E) === true;
}
function UMt(e) {
  return S6r() && e.transport.isAway?.() === true && (k4s(e) || e.transport.isRechecked?.() === true);
}
