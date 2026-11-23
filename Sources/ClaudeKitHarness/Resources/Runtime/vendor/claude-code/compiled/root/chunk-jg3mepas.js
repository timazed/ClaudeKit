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
var chunk_jg3mepas_exports = {};
__export(chunk_jg3mepas_exports, {
  A9: () => A9,
  CTl: () => CTl,
  EEs: () => EEs,
  ETl: () => ETl,
  Ly: () => Ly,
  SGi: () => SGi,
  Slt: () => Slt,
  TTl: () => TTl,
  Xvt: () => Xvt,
  Yle: () => Yle,
  Yvt: () => Yvt,
  bGi: () => bGi,
  cxe: () => cxe,
  kCr: () => kCr,
  th: () => th,
  uxe: () => uxe,
  vEs: () => vEs,
  vTl: () => vTl
});
module.exports = __toCommonJS(chunk_jg3mepas_exports);
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var n = (0, import_chunk_t57w17k7.de)({ work: null, text: null, stopsAfterReply: false, sentBashTextStops: null }, (e) => {
  e.work = null, e.text = null, e.stopsAfterReply = false, e.sentBashTextStops = null;
}), SGi = "In this session, once your reply ends and until the user writes again, you may not be told when a background command ends, and a few minutes later the command is likely stopped along with every other process left running here; run in the foreground, with a long enough `timeout`, any command that must finish and can finish within the foreground maximum, and otherwise tell the user it will likely be stopped a few minutes after your reply.";
function ETl(e) {
  n.work = e;
}
function EEs() {
  return n.work?.() ?? false;
}
function vTl(e) {
  n.text = e, n.stopsAfterReply = false;
}
function Ly() {
  if (!n.stopsAfterReply && n.text?.() === true) n.stopsAfterReply = true;
  return n.stopsAfterReply;
}
function bGi(e) {
  if (e !== void 0) n.sentBashTextStops = (n.sentBashTextStops ?? true) && e.includes(SGi);
}
function TTl() {
  return n.sentBashTextStops === true;
}
function th() {
  return (0, import_chunk_8ewjdpbn.Kp)().backgroundTasksDisabled || cxe();
}
function cxe() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || (0, import_chunk_2gtmjt3y.Xn)();
}
function Yvt() {
  let e = (0, import_chunk_8ewjdpbn.Kp)();
  return e.backgroundShellsKeptElsewhere && e.backgroundWaitAfterReplyMinutes === 0 || Ly();
}
function Xvt() {
  return Ly() && !A9() && !(0, import_chunk_wtm85h0y._z)();
}
function uxe() {
  let e = (0, import_chunk_8ewjdpbn.Kp)();
  return e.backgroundTasksDisabled && !e.backgroundShellsKeptElsewhere || cxe();
}
function vEs(e) {
  return (0, import_chunk_8ewjdpbn.Kp)().mcpServerMovedForMessages === e && !cxe();
}
function A9() {
  let e = (0, import_chunk_8ewjdpbn.Kp)();
  return e.backgroundTasksDisabled && e.backgroundLaunchRule === void 0 || e.backgroundAgentLaunchDisabled || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || (0, import_chunk_2gtmjt3y.Xn)();
}
function Yle() {
  return th() || (0, import_chunk_8ewjdpbn.Kp)().backgroundAgentLaunchDisabled;
}
function Slt() {
  let e = (0, import_chunk_8ewjdpbn.Kp)();
  if (!e.foregroundAgentMovesAdmitted) return Yle();
  return e.backgroundAgentLaunchDisabled || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || (0, import_chunk_2gtmjt3y.Xn)();
}
function CTl() {
  let e = (0, import_chunk_8ewjdpbn.Kp)();
  return e.backgroundLaunchRule !== void 0 && !e.backgroundLaunchByDefault && !A9();
}
function kCr() {
  return (0, import_chunk_8ewjdpbn.Kp)().backgroundLaunchByDefault && !A9();
}
