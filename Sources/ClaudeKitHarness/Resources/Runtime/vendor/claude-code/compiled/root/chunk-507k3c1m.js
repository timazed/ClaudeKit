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
var chunk_507k3c1m_exports = {};
__export(chunk_507k3c1m_exports, {
  Apl: () => Apl,
  Cpl: () => Cpl,
  QHi: () => QHi,
  RR: () => RR,
  Rje: () => Rje,
  Tpl: () => Tpl,
  ZHi: () => ZHi,
  aan: () => aan,
  h1n: () => h1n,
  qSr: () => qSr,
  zho: () => zho
});
module.exports = __toCommonJS(chunk_507k3c1m_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var t = new import_chunk_pzzqg6s3.ze(() => ({ stands: false }));
function n() {
  return t.peek((0, import_chunk_f9x2f6cx.N)())?.stands === true;
}
var Rje = 5e3;
function RR() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_MCP_TASKS) return false;
  return (0, import_chunk_865at33z.b)("tengu_glowing_lark", (0, import_chunk_3t7ve0wy.Li)() === import_chunk_3t7ve0wy.oyn && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !(0, import_chunk_f9x2f6cx.st)());
}
function zho() {
  return RR() && (0, import_chunk_865at33z.b)("tengu_mcp_task_worker_wake", false);
}
var r = 12e4;
function Tpl() {
  {
    let e = (0, import_chunk_865at33z.b)("tengu_nested_acorn", 0);
    return typeof e === "number" && Number.isFinite(e) && e > 0 ? Math.min(e, r) : 0;
  }
  return 0;
}
function aan() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND;
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && (e === void 0 || e === "anthropic_cloud") && !(0, import_chunk_f9x2f6cx.st)() && !(0, import_chunk_3t7ve0wy.Yg)();
}
function qSr() {
  return RR() && ((0, import_chunk_f9x2f6cx.st)() ? (0, import_chunk_865at33z.b)("tengu_fluffy_wren", false) && n() : (0, import_chunk_865at33z.b)("tengu_zippy_piglet", false) && aan());
}
function Cpl() {
  return RR() && (0, import_chunk_865at33z.b)("tengu_distant_bell", false) && n();
}
function QHi() {
  return qSr() && (0, import_chunk_865at33z.b)("tengu_mossy_ferry", false);
}
function h1n() {
  return QHi() && !(0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_2zeyvjwb.qhe)("allow_mcp_task_worker_wake");
}
function ZHi() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND;
}
function Apl(e = false) {
  return RR() && !ZHi() && import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS !== 0 && (!(0, import_chunk_f9x2f6cx.Se)() || import_chunk_c203g5kd.s.CLAUDE_AUTO_BACKGROUND_TASKS === true || e) && !(0, import_chunk_f9x2f6cx.Hce)();
}
