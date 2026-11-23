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
var chunk_drk264d0_exports = {};
__export(chunk_drk264d0_exports, {
  AOr: () => AOr,
  CXe: () => CXe,
  Ey: () => Ey,
  TXe: () => TXe,
  Z_: () => Z_,
  d9i: () => d9i,
  gPo: () => gPo,
  jPs: () => jPs
});
module.exports = __toCommonJS(chunk_drk264d0_exports);
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_h485hv2e = require("/$bunfs/root/chunk-h485hv2e.js");
function d9i(e) {
  return e.hookCaller;
}
function Z_(e) {
  return (e.agentId === void 0 || e.agentId === e.agentCall?.agentId) && e.forRemoteExecution !== true && e.forPromptShellCommand === void 0 ? e.hookCaller : void 0;
}
function Ey(e) {
  return e.hookCaller !== void 0 || e.pluginSteered === true;
}
function gPo(e) {
  let n = d9i(e);
  if (n !== void 0) return (0, import_chunk_kx2fp6pc.jLr)(n) ? n : "";
  return Ey(e) ? "" : void 0;
}
function TXe(e) {
  return e?.type === "remote-agent" || e?.type === "plugin";
}
function AOr(e, n) {
  return [...e.filter((r) => r.value === n), ...e.filter((r) => r.value !== n)];
}
function jPs(e) {
  if (!Array.isArray(e)) return null;
  try {
    return e.filter((n) => typeof n === "object" && n !== null && "type" in n && n.type === "addDirectories");
  } catch {
    return null;
  }
}
var CXe = (0, import_chunk_h485hv2e.ds)({ kind: "permission_prompt", payload: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_8tg38aha.Ew)((e) => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e)), result: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_8tg38aha.Ew)((e) => typeof e === "object" && e !== null && "behavior" in e)), default: { behavior: "cancelled" } });
