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
var chunk_s27zvffk_exports = {};
__export(chunk_s27zvffk_exports, {
  B5n: () => B5n,
  S1r: () => S1r,
  d9l: () => d9l,
  l9l: () => l9l
});
module.exports = __toCommonJS(chunk_s27zvffk_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_46fskppy = require("/$bunfs/root/chunk-46fskppy.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var d = "anthropic/toolHostInterface";
function S1r() {
  return B5n();
}
function B5n() {
  let { version: e } = import_chunk_46fskppy._vr;
  return { version: e, min_version: (0, import_chunk_46fskppy.Vbs)(import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION, e) };
}
function l9l() {
  let e = S1r(), r = import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION;
  if (r !== void 0 && e?.min_version !== r) (0, import_chunk_cqa9hrgx.l)("mcp_serve_tool_output", "launch_min_version_ignored", { launch_min_version: r, ...e && { daemon_interface_version: e.version, daemon_interface_min_version: e.min_version } });
  return { experimental: e === void 0 ? {} : { [d]: e } };
}
var u = 100;
function d9l(e, r) {
  let s = (0, import_chunk_0jve1fep.Le)(r) ? r[d] : void 0;
  if (s === void 0) return;
  let o = S1r();
  if (o === void 0) return;
  let i = typeof s === "string" && s.length <= u ? (0, import_chunk_46fskppy.Vdn)((0, import_chunk_0jve1fep.et)(s, false)) : void 0, a = i === void 0 ? "unreadable" : { peer_too_old: "session_too_old", self_too_old: "daemon_too_old", agreed: void 0 }[(0, import_chunk_46fskppy.Lat)(o, i).kind];
  if (a === void 0) return;
  let f = `${e} was not run: ${i === void 0 ? "this server could not read the version of the interface that its caller stated with the call" : a === "session_too_old" ? `this session speaks version ${i.version} of the interface to this server, which works with version ${o.min_version} or later` : `this session works with version ${i.min_version} or later of the interface to this server, which speaks version ${o.version}`}. Retrying won't help: tell the user.`;
  return (0, import_chunk_w578pjby.t)(`MCP server: ${f}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("mcp_serve_tool_output", `caller_interface_${a}`, { daemon_interface_min_version: o.min_version }), { isError: true, content: [{ type: "text", text: f }], _meta: { [d]: { refused: a, range: o } } };
}
var A = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ refused: (0, import_chunk_adx6804h.n)(), range: (0, import_chunk_adx6804h.ie)().optional() }));
