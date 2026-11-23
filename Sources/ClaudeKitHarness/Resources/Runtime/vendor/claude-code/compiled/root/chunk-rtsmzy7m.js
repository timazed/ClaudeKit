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
var chunk_rtsmzy7m_exports = {};
__export(chunk_rtsmzy7m_exports, {
  D$t: () => D$t,
  KLn: () => KLn,
  UO: () => UO,
  _sl: () => _sl
});
module.exports = __toCommonJS(chunk_rtsmzy7m_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_1s8tg9aq = require("/$bunfs/root/chunk-1s8tg9aq.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var m = ["user", "project", "local", "agent"];
function s(o, e) {
  let { mcpInfo: n } = o;
  if (n === void 0) return false;
  let r = n.effectiveMaxPermission;
  if (r === void 0 ? (0, import_chunk_7625rswd.zHi)(n.serverId) === "blocked" : r === "blocked" && u(n)) return true;
  let i = e?.();
  if (i === void 0) return false;
  let { mcpServerPolicy: p } = i.alwaysDenyRules, a = { ...(0, import_chunk_bz1f2qnq.yme)(i.alwaysDenyRules), ...f(n) && { mcpServerPolicy: p } };
  return (0, import_chunk_ht27b0vz.Tr)({ ...i, alwaysDenyRules: a }, o) !== null;
}
function u(o) {
  return o.cliOwned !== true && o.artifactsServer !== true && !c(o);
}
function c(o) {
  return o.pluginSource !== void 0 || m.includes(o.scope);
}
function f(o) {
  let e = o.serverProvenance === "connector" && (o.serverType === "http" || o.serverType === "sse");
  return (o.effectiveMaxPermission === void 0 || c(o)) && !e;
}
var KLn = (o, e, n) => s(o, n) ? { ceiling: "deny" } : (0, import_chunk_1s8tg9aq.zO)(o, e) ? { ceiling: "ask" } : {};
var UO = (o, e) => ({ tool: (0, import_chunk_865at33z.hb)(o.name), ceiling: KLn(o, void 0, e).ceiling, isCeilingUnread: void 0 });
function D$t(o) {
  return o.hook.type === "callback" && o.hook.internal === true;
}
function _sl(o, e) {
  if ((0, import_chunk_j4z7srhg.ec)()) {
    let n = o.filter(D$t), r = o.length - n.length;
    if (r > 0) (0, import_chunk_w578pjby.t)(`Hooks: ${r} ${e} ${(0, import_chunk_7cfjrnwy.O)(r, "hook")} from settings or plugins not run: claude mcp serve --transport http never runs them (intended)`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)((0, import_chunk_cqa9hrgx.dJ)(e), "not_run_in_tool_server_daemon", { num_dropped: r });
    return n;
  }
  return o;
}
