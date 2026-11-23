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
var chunk_pkzhb7kv_exports = {};
__export(chunk_pkzhb7kv_exports, {
  Dkr: () => Dkr,
  Gys: () => Gys,
  Hkr: () => Hkr,
  Ikr: () => Ikr,
  J1i: () => J1i,
  KZl: () => KZl,
  Mkr: () => Mkr,
  Q1i: () => Q1i,
  VZl: () => VZl,
  Wys: () => Wys,
  Ybe: () => Ybe,
  Z1i: () => Z1i,
  ble: () => ble,
  hj: () => hj,
  iSo: () => iSo,
  jys: () => jys,
  pUn: () => pUn,
  rYe: () => rYe,
  rd: () => rd,
  sSo: () => sSo,
  uat: () => uat,
  yZ: () => yZ,
  zys: () => zys
});
module.exports = __toCommonJS(chunk_pkzhb7kv_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0rbztqww = require("/$bunfs/root/chunk-0rbztqww.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var uat = "read_artifact", Wys = "get_artifact", pUn = "read_file", jys = "read_shared_artifact", ble = "read_comments", rYe = "reply_comment", sSo = "resolve_comment", Ybe = "reply_shared_comment", J1i = "list_types", Ikr = "describe_type", Mkr = "list_artifacts";
function yZ() {
  return !(0, import_chunk_6e68m1dj.Ru)() && (!!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || !!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID || (0, import_chunk_5rd4zsth.Nc)() !== null);
}
function Gys() {
  return (0, import_chunk_0rbztqww.C$i)() && !(0, import_chunk_6e68m1dj.Ru)() && !yZ() && !import_chunk_c203g5kd.s.CLAUDE_CODE_WEBFETCH_USE_CCR_PROXY && !import_chunk_c203g5kd.s.CLAUDE_CODE_WEBFETCH_MCP_TOOL;
}
function Q1i(t) {
  return Gys() && (0, import_chunk_r8478wtb.j9i)(t);
}
function hj(t) {
  return (0, import_chunk_px0hhsq7.lr)(import_chunk_qdcbcsg7.ri, t);
}
function iSo(t) {
  return { name: hj(t), mcpInfo: { serverName: import_chunk_qdcbcsg7.ri, toolName: t } };
}
function rd() {
  return (0, import_chunk_0rkwgmhx.v0)() && (0, import_chunk_0rkwgmhx.se)().builtInArtifactHiddenForMcp;
}
function Hkr(t) {
  let o = import_chunk_r8478wtb.e8;
  return [t.name, t.underlyingV1ToolName, t.familyParentToolName].some((e) => e !== void 0 && o.includes(e));
}
function Z1i(t) {
  return rd() && t.some((o) => o.mcpInfo?.serverName === import_chunk_qdcbcsg7.ri);
}
function VZl(t) {
  return rd() && t.mcpInfo?.serverName === import_chunk_qdcbcsg7.ri;
}
function KZl(t) {
  if (!rd()) return [];
  return [uat, Wys, ...t ? [pUn] : []].map(iSo);
}
class n {
  tool = null;
  register(t) {
    this.tool = t;
  }
}
var zys = new n();
function Dkr() {
  return rd() ? zys.tool ?? void 0 : void 0;
}
