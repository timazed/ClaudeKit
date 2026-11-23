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
var chunk_fpcs74d2_exports = {};
__export(chunk_fpcs74d2_exports, {
  Fwo: () => Fwo,
  GBn: () => GBn,
  Nwo: () => Nwo,
  RYe: () => RYe,
  VBn: () => VBn,
  aWi: () => aWi,
  cWi: () => cWi,
  dWi: () => dWi,
  h2t: () => h2t,
  iWi: () => iWi,
  jRe: () => jRe,
  lWi: () => lWi,
  pws: () => pws,
  uWi: () => uWi,
  ucn: () => ucn,
  wvt: () => wvt,
  zBn: () => zBn,
  z_: () => z_,
  zat: () => zat
});
module.exports = __toCommonJS(chunk_fpcs74d2_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
function jRe(e) {
  let t = { serverName: e.name, scope: e.config.scope, pluginSource: e.config.pluginSource };
  return { ...t, ...n(e) };
}
function n({ name: e, config: t }) {
  let { scope: o, pluginSource: l, agentSource: i } = t;
  return { scope: o, pluginSource: l, ...i !== void 0 && { agentSource: i }, ...a(t) && { isBehindGateway: true }, ...(t.type === "claudeai-proxy" || "url" in t && ((0, import_chunk_qyhf6bts.KBn)(t.url) || t.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(t) && (0, import_chunk_3f4m74y6.ZFe)(e))) && { isAtProxy: true } };
}
function a(e) {
  return (0, import_chunk_xcgcdx61.g3)(e) || (e.type === "http" || e.type === "sse" || e.type === "ws") && e.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(e) && (0, import_chunk_2mwshd9r.zhe)(e.url) && (0, import_chunk_865at33z._Pr)(new URL(e.url));
}
var iWi = "io.modelcontextprotocol/skills";
function z_() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || (0, import_chunk_3t7ve0wy._4t)() || ["local-agent", "local_agent"].includes(import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT ?? "")) return false;
  if (import_chunk_3t7ve0wy.F6e.has(import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT ?? "") && !(0, import_chunk_3t7ve0wy.wLr)()) return false;
  return (0, import_chunk_865at33z.b)("tengu_wiggly_crystal", false);
}
function aWi() {
  return (0, import_chunk_865at33z.b)("tengu_encapsulated_sphinx", false) === true;
}
function GBn(e) {
  {
    if ((e?.isBehindGateway === true || e?.isAtProxy === true) && !aWi()) return lWi;
    if (e?.isBehindGateway === true) return;
    if (u()) return dWi;
    let t = (0, import_chunk_865at33z.or)();
    if ((t === "team" || t === "enterprise") && (0, import_chunk_2yx6c1y2.KR)()?.disableDirectMcpSkills !== false) return cWi;
    let o = p(t);
    if ((0, import_chunk_2zeyvjwb.uo)("hipaa") || (0, import_chunk_2zeyvjwb.uo)("zdr")) return pws;
    if (!o) return uWi;
    if (t === null && (0, import_chunk_2zeyvjwb.sNl)("allow_product_feedback")) return pws;
    if (S(e)) return c;
  }
  return;
}
function h2t(e) {
  return GBn(n(e));
}
function zBn(e) {
  return GBn(e) !== void 0;
}
var lWi = "The skills of connectors are turned off for now.", dWi = "Managed settings turn off the skills of MCP servers that this app connects to directly. Only an administrator can change that.", Nwo = "MCP skills are not available with this model, for this organization or in this conversation. Try a newer model or a new conversation.", cWi = "On the Team and Enterprise plans, this app uses the skills of an MCP server that it connects to directly only if managed settings turn them on. Only an administrator can change that.", pws = "The organization's policy does not allow the skills of MCP servers that this app connects to directly.", uWi = "This app has not received the organization's policy, so it uses no skill of an MCP server that it connects to directly.", c = "Managed settings allow the skills of an MCP server only if a plugin or the organization provides the server. Only an administrator can change that.";
function p(e) {
  try {
    return !(0, import_chunk_2zeyvjwb.WS)() && (e === "pro" || e === "max" || (0, import_chunk_2zeyvjwb.Vde)());
  } catch {
    return false;
  }
}
function u() {
  return (0, import_chunk_2yx6c1y2._e)("policySettings")?.disableDirectMcpSkills === true || (0, import_chunk_2yx6c1y2.Rp)().some((e) => e.disableDirectMcpSkills === true) || (0, import_chunk_2yx6c1y2.kK)().some((e) => e.disableDirectMcpSkills === true);
}
function S(e) {
  if (!(0, import_chunk_57sd0ak5.Dl)("skills")) return false;
  if (e?.pluginSource !== void 0) return (0, import_chunk_57sd0ak5.Ure)("skills", { source: "plugin", plugin: e.pluginSource });
  return e === void 0 || !((0, import_chunk_xcgcdx61.Pz)(e.scope) || (0, import_chunk_57sd0ak5.FU)(e.agentSource));
}
function wvt(e, t = (0, import_chunk_f9x2f6cx.ao)()) {
  return (0, import_chunk_865at33z.E_)(e) && !(0, import_chunk_f9x2f6cx.zl)(t, import_chunk_xfj2cwfv.J_);
}
function Fwo(e, t) {
  return e.type === "prompt" && e.loadedFrom === "mcp" && (!z_() || zBn(e.mcpInfo) || !wvt(t.modelFacts(), t.stickyBetas));
}
function RYe(e) {
  return z_() && h2t(e) === void 0;
}
function zat(e) {
  return z_() && !!e?.resources && VBn(e);
}
function VBn(e) {
  return e?.extensions?.[iWi] !== void 0;
}
function ucn(e) {
  return e.protocolEra === "modern" && VBn(e.capabilities);
}
