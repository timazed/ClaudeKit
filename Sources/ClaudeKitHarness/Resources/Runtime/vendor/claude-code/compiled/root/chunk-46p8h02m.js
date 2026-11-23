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
var chunk_46p8h02m_exports = {};
__export(chunk_46p8h02m_exports, {
  Cor: () => Cor,
  gYr: () => gYr,
  oRn: () => oRn,
  xri: () => xri
});
module.exports = __toCommonJS(chunk_46p8h02m_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_apmh0yjy = require("/$bunfs/root/chunk-apmh0yjy.js");
var import_chunk_jhasw6a0 = require("/$bunfs/root/chunk-jhasw6a0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var o = "", r = "", oRn = "mcp", gYr = "mcp-display-only";
var a = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({}).passthrough()), xri = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)() }).passthrough()), (0, import_chunk_adx6804h.VA)()]).describe("MCP tool execution result"));
function i(e) {
  if (!Array.isArray(e) || !e.some(u)) return e;
  return e.map((t) => u(t) ? { ...t, source: { ...t.source, data: "" } } : t);
}
function m(e) {
  return Array.isArray(e) && e.some(s) ? e.filter((t) => !s(t)) : e;
}
function s(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data === "";
}
function u(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data !== "";
}
var Cor = (0, import_chunk_4vsz8a99.vn)({ isMcp: true, registryToolId: import_chunk_4vsz8a99.Bdn, isOpenWorld() {
  return false;
}, name: "mcp", uiTableKey: oRn, backgrounding: "self", maxResultSizeChars: 1e5, async description() {
  return r;
}, async prompt() {
  return o;
}, get inputSchema() {
  return a();
}, get outputSchema() {
  return xri();
}, create() {
  return { async call() {
    return { data: "" };
  }, async checkPermissions() {
    return { behavior: "passthrough", message: "MCPTool requires permission." };
  } };
}, renderToolUseMessage(e, { verbose: t }) {
  return (0, import_chunk_apmh0yjy.eJt)(e, { verbose: t });
}, userFacingName: () => "mcp", stripForCreation: (e) => (0, import_chunk_jhasw6a0._Ba)(i(e)), mapToolResultToToolResultBlockParam(e, t) {
  return { tool_use_id: t, type: "tool_result", content: (0, import_chunk_jhasw6a0.EJt)(m(e)) };
} });
