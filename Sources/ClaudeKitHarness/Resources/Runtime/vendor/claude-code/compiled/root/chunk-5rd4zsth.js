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
var chunk_5rd4zsth_exports = {};
__export(chunk_5rd4zsth_exports, {
  DIo: () => DIo,
  JX: () => JX,
  LIo: () => LIo,
  NIo: () => NIo,
  Nc: () => Nc,
  UMr: () => UMr,
  VPe: () => VPe,
  _B: () => _B,
  jNl: () => jNl
});
module.exports = __toCommonJS(chunk_5rd4zsth_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
function t() {
  return (0, import_chunk_fzp6hh55.sMs)({ envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", wellKnownPath: import_chunk_fzp6hh55.KPe, readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? import_chunk_fzp6hh55.KPe, label: "token", fileLabel: "session ingress token", getCached: import_chunk_f9x2f6cx._Pt, setCached: import_chunk_f9x2f6cx.iVe, skipInReviewOrigin: true });
}
async function jNl(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await (0, import_chunk_fzp6hh55.iMs)({ envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", wellKnownPath: import_chunk_fzp6hh55.KPe, readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? import_chunk_fzp6hh55.KPe, label: "token", fileLabel: "session ingress token", getCached: import_chunk_f9x2f6cx._Pt, setCached: import_chunk_f9x2f6cx.iVe, credentials: e, skipInReviewOrigin: true });
}
function Nc() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return t();
}
function _B() {
  return Nc() !== null;
}
function JX() {
  let e = Nc();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = { Cookie: `sessionKey=${e}` }, r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) n["X-Organization-Uuid"] = r;
    return n;
  }
  return VPe(e);
}
function VPe(e) {
  return e ? { Authorization: `Bearer ${e}`, ...UMr() } : {};
}
var DIo = "x-ccr-affinity-key";
function UMr() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_CCR_AFFINITY_KEY;
  return e ? { [DIo]: e } : {};
}
function LIo(e) {
  e.delete(DIo);
  let n = import_chunk_c203g5kd.s.CLAUDE_CODE_CCR_AFFINITY_KEY;
  if (n) e.set(DIo, n);
}
function NIo(e) {
  import_chunk_c203g5kd.s.set("CLAUDE_CODE_SESSION_ACCESS_TOKEN", e);
}
