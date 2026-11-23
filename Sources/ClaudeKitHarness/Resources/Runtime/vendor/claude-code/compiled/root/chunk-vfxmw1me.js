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
var chunk_vfxmw1me_exports = {};
__export(chunk_vfxmw1me_exports, {
  K0e: () => K0e,
  X1i: () => X1i,
  nYe: () => nYe,
  q_l: () => q_l
});
module.exports = __toCommonJS(chunk_vfxmw1me_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var n = "Error POSTing to endpoint: MCP server not allowed";
function q_l(t) {
  if (!(t instanceof Error)) return false;
  let e = t.message.trimEnd();
  if (e === `Streamable HTTP error: ${n}`) return "code" in t && t.code === 403;
  if (e !== n) return false;
  return "status" in t ? t.status === 403 : "telemetryMessage" in t && typeof t.telemetryMessage === "string" && t.telemetryMessage.startsWith("SdkHttpError ");
}
function nYe() {
  return ((0, import_chunk_f9x2f6cx.fg)() ?? []).find((t) => t.name === import_chunk_qdcbcsg7.ri);
}
function X1i() {
  return (0, import_chunk_0rkwgmhx.v0)() ? (0, import_chunk_0rkwgmhx.se)().mcpEntryRowNotServed : null;
}
function K0e(t) {
  return X1i() === t;
}
