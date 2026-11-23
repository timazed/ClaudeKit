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
var chunk_q5veqmrm_exports = {};
__export(chunk_q5veqmrm_exports, {
  GQ: () => GQ,
  Rst: () => Rst,
  ZW: () => ZW,
  zSe: () => zSe
});
module.exports = __toCommonJS(chunk_q5veqmrm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_p2s0km69 = require("/$bunfs/root/chunk-p2s0km69.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
function Rst(e) {
  let n = { CLAUDECODE: "1", CLAUDE_CODE_SESSION_ID: e.sessionId, CLAUDE_CODE_CHILD_SESSION: "1", CLAUDE_CODE_SESSION_ATTENDED: (0, import_chunk_3t7ve0wy.KA)() ? "1" : "0", CLAUDE_PID: String(process.pid), ...!e.isDisplayOnly && (0, import_chunk_p2s0km69.Vit)(e.sessionId) };
  if ((0, import_chunk_f9x2f6cx.en)().lastingConnectorDownloads() !== void 0) n.CLAUDE_CODE_STARTER_MAY_HOLD_CONNECTOR_FILE = "1";
  if (e.source === "agent") n.AI_AGENT = (0, import_chunk_tb84sczh.Gca)("agent");
  if (e.effortLevel !== void 0) n.CLAUDE_EFFORT = e.effortLevel;
  if ((0, import_chunk_zhr7rpv7.hLr)()) {
    let o = (0, import_chunk_z2xw6net.TBt)();
    if (o !== void 0) n.TRACEPARENT = o;
  }
  return n;
}
function zSe(e) {
  return { sessionId: e.session_id, effortLevel: e.effort?.level, source: "harness" };
}
function ZW() {
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION || import_chunk_c203g5kd.s.CLAUDECODE);
}
function t(e) {
  return e && e.length ? (0, import_chunk_pbteexar.lxt)(e) : [];
}
var GQ = t;
