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
var chunk_hy0sycbj_exports = {};
__export(chunk_hy0sycbj_exports, {
  $ko: () => $ko,
  AWn: () => AWn,
  Ble: () => Ble,
  Bre: () => Bre,
  D2t: () => D2t,
  DYe: () => DYe,
  Dcn: () => Dcn,
  Dko: () => Dko,
  Fko: () => Fko,
  Fws: () => Fws,
  Gkl: () => Gkl,
  H2t: () => H2t,
  Hko: () => Hko,
  Ivt: () => Ivt,
  Jkl: () => Jkl,
  Kkl: () => Kkl,
  Lko: () => Lko,
  M2t: () => M2t,
  Mko: () => Mko,
  Nko: () => Nko,
  Qkl: () => Qkl,
  RWn: () => RWn,
  SLe: () => SLe,
  Vkl: () => Vkl,
  Wkl: () => Wkl,
  XRe: () => XRe,
  Xkl: () => Xkl,
  Ykl: () => Ykl,
  cTr: () => cTr,
  jkl: () => jkl,
  nji: () => nji,
  oji: () => oji,
  qkl: () => qkl,
  rji: () => rji,
  uTr: () => uTr,
  xWn: () => xWn,
  zkl: () => zkl
});
module.exports = __toCommonJS(chunk_hy0sycbj_exports);
var import_chunk_4pgkmw1e = require("/$bunfs/root/chunk-4pgkmw1e.js");
var DYe = "2025-11-25", Bre = "2026-07-28", Wkl = "tengu_nimble_doorstop", SLe = "reopen_refetch", M2t = "before_handler", Mko = 4096, Hko = 16384, cTr = "The tool call was interrupted before a result was received. It may or may not have completed on the server \u2014 verify before assuming it succeeded, and retry if needed.", jkl = 1e3, Fws = "claudecode/callMark";
var Ivt = "anthropic/dataFlowSessions", H2t = "The outcome is unknown: the call may have finished, may still be running, or may never have started. Check what it did before you repeat it.";
function Dko(e, t) {
  return `MCP server "${e}" never answered tool "${t}". ${H2t}`;
}
function Gkl(e, t, o) {
  return `MCP server "${e}" tool "${t}" sent no response or progress for ${o}s, so Claude Code stopped waiting for it. This server runs in the app that hosts this session. ${H2t}`;
}
var zkl = "mcp_answer_stream_ended", Vkl = "mcp_call_not_sent_again", Dcn = "mcp_call_unanswered", Kkl = "The server asked the user a question, and no answer came before the time limit. Do not call this tool again in this turn. Tell the user that the server's question got no answer, and wait for their reply.", nji = "mcp_question_unanswered";
function qkl(e) {
  return `${e === "" ? "This call failed. That" : `The server replied: "${e}". That reply`} came after a question that the server asked about this call was declined, and the decline still stands. Another call for this action repeats the request that the question was about.`;
}
var Lko = "mcp_question_declined", XRe = 16777216, uTr = -32070, rji = { answerNotRead: true };
function Ykl(e) {
  return e.error !== void 0 || e.result?.isError === true;
}
function Nko(e, t) {
  return e instanceof Error && e.name === "HttpBodyOverflowError" || t === "stdout overflow" || t === "http body overflow";
}
var Fko = { code: uTr, message: "The answer to a status request for this task was too large to read, so the task's result will not be delivered. The task may have finished its work: check what it did before calling the tool again, and when you call it again, ask for less data." }, Ble = 5, r = 1e3, n = 3e4, Xkl = 1e4;
function AWn(e, t = Math.random, o) {
  return Math.round((0, import_chunk_4pgkmw1e.Id)({ attempt: e, baseMs: r, capMs: n, jitter: o, random: t }));
}
var Jkl = 8, oji = 3e4, Qkl = 3e5, RWn = 69;
function $ko(e, t) {
  return (0, import_chunk_4pgkmw1e.Id)({ attempt: e, baseMs: 15e3, capMs: 9e5, jitter: { kind: "proportional", ratio: 1 }, random: t });
}
var xWn = "inode/directory";
function D2t(e) {
  return e.replace(/[^\x20-\x7e]/g, "").slice(0, 32);
}
