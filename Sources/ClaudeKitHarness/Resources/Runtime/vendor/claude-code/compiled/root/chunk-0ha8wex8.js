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
var chunk_0ha8wex8_exports = {};
__export(chunk_0ha8wex8_exports, {
  $Po: () => $Po,
  $Xe: () => $Xe,
  BPo: () => BPo,
  BXe: () => BXe,
  EPe: () => EPe,
  FPo: () => FPo,
  J6n: () => J6n,
  K1: () => K1,
  Kmn: () => Kmn,
  LX: () => LX,
  Lke: () => Lke,
  NAt: () => NAt,
  NPo: () => NPo,
  Q6n: () => Q6n,
  SOs: () => SOs,
  Sct: () => Sct,
  UPo: () => UPo,
  UXe: () => UXe,
  Vmn: () => Vmn,
  WC: () => WC,
  WPo: () => WPo,
  WXe: () => WXe,
  X6n: () => X6n,
  XNe: () => XNe,
  Xmn: () => Xmn,
  YNe: () => YNe,
  Ymn: () => Ymn,
  Z6n: () => Z6n,
  _Os: () => _Os,
  _ze: () => _ze,
  a8i: () => a8i,
  aIr: () => aIr,
  bOs: () => bOs,
  bz: () => bz,
  c8i: () => c8i,
  cVt: () => cVt,
  d8i: () => d8i,
  dB: () => dB,
  dT: () => dT,
  e3: () => e3,
  eDl: () => eDl,
  eVn: () => eVn,
  fD: () => fD,
  fOs: () => fOs,
  gOs: () => gOs,
  gze: () => gze,
  hOs: () => hOs,
  hp: () => hp,
  hze: () => hze,
  i8i: () => i8i,
  iIr: () => iIr,
  l8i: () => l8i,
  lIr: () => lIr,
  mI: () => mI,
  mOs: () => mOs,
  mze: () => mze,
  n8i: () => n8i,
  nDl: () => nDl,
  o8i: () => o8i,
  oIr: () => oIr,
  ou: () => ou,
  pOs: () => pOs,
  q1: () => q1,
  qmn: () => qmn,
  r8i: () => r8i,
  rg: () => rg,
  s8i: () => s8i,
  sIr: () => sIr,
  tDl: () => tDl,
  vPe: () => vPe,
  yOs: () => yOs,
  yct: () => yct,
  zmn: () => zmn
});
module.exports = __toCommonJS(chunk_0ha8wex8_exports);
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var WC = "[Request interrupted by user]", ou = "[Request interrupted by user for tool use]", dB = "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]", zmn = "[Tool call did not complete: the plugin that made it cancelled it. Nothing refused it.]", mze = "A safety monitor blocked this turn, so this tool call was cancelled. If it had already started, some of its effects may have happened.", i = "[Request interrupted: the session ended before this agent finished. Nobody asked it to stop.]", n8i = "[This turn ended before it finished.]", dT = "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]", fD = "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]", bz = "[Agent call interrupted: the process running this conversation stopped before this agent finished, so it returned no result. Nobody asked it to stop.]", mI = "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.", Lke = "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]", YNe = "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]", hze = "[Tool call skipped: the turn paused before this call ran. Nothing refused it and it had no effects; re-run it if still needed.]", EPe = "[Tool call not completed: an approval request expired with no answer, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]", vPe = "[Tool call not completed: an approval request was still unanswered when the message that follows arrived and was closed, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]", $Xe = "[Tool call not completed: an approval request was still unanswered when the message that follows arrived, so the action awaiting approval has not run. Nobody refused it. The request is still open; a newer approval request in this conversation would replace it.]", UXe = "[Tool call not completed: a safety check did not clear the action awaiting approval and left the decision to a person. The approval request was closed with no answer, so the action did not run.]", BXe = "[Tool call not completed: a safety check did not clear the action awaiting approval and left the decision to a person. The approval request was still unanswered when the message that follows arrived, so the action has not run. The request is still open; a newer approval request in this conversation would replace it.]";
function NPo(e) {
  return e === "[Tool call not completed: an approval request was still unanswered when the message that follows arrived, so the action awaiting approval has not run. Nobody refused it. The request is still open; a newer approval request in this conversation would replace it.]" || e === "[Tool call not completed: a safety check did not clear the action awaiting approval and left the decision to a person. The approval request was still unanswered when the message that follows arrived, so the action has not run. The request is still open; a newer approval request in this conversation would replace it.]";
}
var gze = ["[Request interrupted by user]", "[Request interrupted: the session ended before this agent finished. Nobody asked it to stop.]", "[This turn ended before it finished.]", "[Agent call interrupted: the process running this conversation stopped before this agent finished, so it returned no result. Nobody asked it to stop.]", "[Request interrupted by user for tool use]", "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]", "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]", "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]", "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.", "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]", "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]"];
function rg(e) {
  if (e.type !== "user") return false;
  let t = e.message?.content;
  if (typeof t === "string") return gze.some((o) => t.startsWith(o));
  if (!Array.isArray(t)) return false;
  return t.length > 0 && t.every((o) => {
    let s = o?.type === "text" ? o.text : o?.type === "tool_result" && o.is_error === true ? o.content : void 0;
    return typeof s === "string" && gze.some((n) => s.startsWith(n));
  });
}
var NAt = "User denied permission", Vmn = "User aborted", X6n = "This tool call was refused and did not run: the permission answer for it could not be matched to this call. Do not run it again unless the user asks you to.", r8i = "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file).", hp = "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). STOP what you are doing and wait for the user to tell you how to proceed.", Kmn = `${hp} Correction to the text above: this call was stopped while running, not refused before it ran. It may have run in part or in full, and its changes may have been written. No permission prompt was involved. Work it started elsewhere (a remote command, a background process) may still be running, so check before starting the same work again. The instruction to stop and wait still stands.`, qmn = `${hp} Correction to the text above: this call was stopped while running, not refused before it ran. It may have run in part or in full, and files it sends may have reached the connector. Tell the user before sending any of them again. The instruction to stop and wait still stands.`;
function oIr(e) {
  return typeof e === "string" && e.startsWith(r8i) && !e.startsWith(Kmn) && !e.startsWith(qmn);
}
var sIr = "User rejected tool use";
function _ze(e) {
  return e.type === "user" && (e.toolUseResult === sIr || rg(e));
}
var K1 = "API Error: Request was aborted.", yct = `The user sent a new message while you were working:
`, Sct = "Operation stopped by hook";
function iIr(e) {
  return e.startsWith(mI) || e.startsWith(Lke) || e.startsWith(YNe) || e.startsWith(hze);
}
var WXe = `

Note: The user's next message may contain a correction or preference. Pay close attention \u2014 if they explain what went wrong or how they'd prefer you to work, consider saving that to memory for future sessions.`;
function LX(e, { toolDenialKind: t, remoteToolDenialKind: o }, s) {
  if (t !== void 0) return s.includes(t);
  if (o === void 0 || !s.includes(o) || typeof e !== "string") return false;
  let n = e.endsWith(WXe) ? e.slice(0, -WXe.length) : e;
  return n === hp || n === Kmn || n === qmn || gze.includes(n);
}
function e3(e) {
  if (e.type !== "user" || e.interruptedByShutdown !== true) return false;
  let t = e.message?.content;
  return Array.isArray(t) && t.some((o) => o.type === "tool_result");
}
function Ymn(e) {
  if (e.interruptedByShutdown !== true || !Array.isArray(e.message.content)) return e;
  if (!e3(e)) return rg(e) ? { ...e, message: { ...e.message, content: [{ type: "text", text: i }] } } : e;
  return { ...e, toolUseResult: dT, toolDenialKind: "interrupted", message: { ...e.message, content: e.message.content.map((t) => t.type === "tool_result" ? { ...t, content: dT } : t) } };
}
var fOs = ` hook feedback:
`, o8i = ["Stop", "TeammateIdle", "TaskCreated", "TaskCompleted"];
function FPo(e, t) {
  return `${e}${fOs}${t}`;
}
var J6n = "[structured-output-enforce]", s8i = "", cVt = "[projects-reply-gate]", Q6n = "Linked in your reply but not sent:", Xmn = "The previous response failed to produce a valid tool call. Please retry the tool call now.", i8i = "Your tool call was malformed and could not be parsed. Please retry.", Z6n = "[Your previous response had no visible output. Please continue and produce a user-visible response.]", pOs = "<system-reminder>\nAbout the update above only: other background work is still running. If this update needs no action and holds nothing the user needs to know yet, end your turn now with an empty reply. An empty reply is a valid, complete turn: write no text, not even a line saying that nothing is new, and call no tool in its place, whether to wait, to check for more or to do nothing (such as `true`). Tell them now about a failure, a risk, a surprise, a result they asked to hear about, or a decision you need from them, even if they asked for one summary at the end. If all the work they asked for is now done, say so.\n</system-reminder>", aIr = "The PermissionDenied hook indicated you may retry this tool call.", eVn = "The turn did not end: a tool call in your last message asked to end it, but another call in that message failed. Deal with the failure, then finish the turn. The calls that succeeded took effect, so do not repeat them.", $Po = "Your response above was stopped by a safety classifier \u2014 this is not a tool or API error. The rest of it was withheld, and tool calls in it that had not finished did not run. Do not produce that content again, even reworded.", mOs = $Po + ' Exception: a tool call whose result reads "Interrupted" was already running when the response was stopped; it may have partially or fully completed.', a = " Assume the stop was right. Tell the person that an automated safety check stopped the response and don't guess why it happened.", a8i = $Po + a, l8i = mOs + a + " You can still check how far the interrupted call got.", UPo = "Output token limit hit. Resume directly \u2014 no apology, no recap of what you were doing. Pick up mid-thought if that is where the cut happened. Break remaining work into smaller pieces.", BPo = "Output token limit hit while you were still reasoning, before this response produced any text or tool call. That reasoning was not kept and is not part of this conversation, so there is nothing to resume. Continue from the conversation above: reason much more briefly and produce your answer or next tool call well within the output limit.", hOs = "Your response was cut off because it exceeded the output token limit. Continue from where you left off and finish the response. Start a new code fence or table header first if you were inside one.", WPo = "Output token limit hit. Your caller does not receive an answer in pieces. If you were giving your final answer, give the whole answer again, more briefly \u2014 no apology, no mention of the cut-off. Otherwise continue the work in smaller pieces.", gOs = "Output token limit hit again. Your caller does not receive an answer in pieces. If you were giving your final answer, give the whole answer in at most half the length of your last attempt: keep every item and cut the detail. Do not shorten text that must stay exact, such as code, data or translations. If it cannot be made that short, say so in your first line, then give what fits. If you were not giving your final answer, continue the work in smaller pieces.", _Os = "Your response was cut off because it exceeded the output token limit. The cut fell inside a tool call, so that call did not run and nothing of it was kept. Make the call again in a shorter response: split long content across several smaller tool calls. For a long file, write the first part and then append the rest in later calls.", E = "[Your previous response reached the output limit with no visible output. Please continue and produce a brief user-visible response or tool call right away.]", yOs = "Your response above was cut off mid-stream. Resume directly from where it stops \u2014 no apology, no recap. If none of it survived, answer the request from the start.", SOs = "Your response above was cut off mid-stream and only your next message is delivered. Write the complete response again from the start \u2014 no apology, no mention of the cut-off.", lIr = "Goal check-in: \xAB", _ = [J6n, s8i, cVt, import_chunk_4x1jja6d.$Ir, Q6n, lIr].filter((e) => e.length > 0), bOs = [UPo, BPo, E, hOs, WPo, gOs, _Os, yOs, SOs], u = [Xmn, i8i, Z6n, pOs, aIr, eVn, $Po, mOs, a8i, l8i, ...bOs];
function q1(e) {
  if (e.type !== "user" || e.isMeta !== true) return false;
  let t = r(e.message?.content);
  if (t === void 0) return false;
  if (_.some((o) => t.startsWith(o))) return true;
  if (u.includes(t)) return true;
  return o8i.some((o) => t.startsWith(`${o}${fOs}`));
}
function eDl(e) {
  if (!q1(e)) return false;
  let t = r(e.message?.content);
  return t === yOs || t === SOs;
}
function d8i(e) {
  return q1(e) && bOs.includes(r(e.message?.content) ?? "");
}
function tDl(e) {
  return q1(e) && r(e.message?.content) === Z6n;
}
function c8i(e) {
  return q1(e) && r(e.message?.content) === pOs;
}
function nDl(e) {
  return q1(e) && r(e.message?.content) === eVn;
}
function r(e) {
  if (typeof e === "string") return e;
  let t = Array.isArray(e) ? e[0] : void 0;
  if (typeof t === "object" && t !== null && "type" in t && t.type === "text" && "text" in t && typeof t.text === "string") return t.text;
  return;
}
var XNe = /* @__PURE__ */ new Set([WC, ou, mI, hp, import_chunk_bp9b0hd8.OD]);
