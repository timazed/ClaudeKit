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
var chunk_p58qz2p5_exports = {};
__export(chunk_p58qz2p5_exports, {
  AZn: () => AZn,
  S9s: () => S9s,
  nMe: () => nMe
});
module.exports = __toCommonJS(chunk_p58qz2p5_exports);
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
function nMe() {
  return (0, import_chunk_bzyb60p0.ESt)() || (0, import_chunk_bzyb60p0.Efe)(import_chunk_prn6030k.Xi, (0, import_chunk_prn6030k.aJe)());
}
function S9s() {
  if (!nMe()) return null;
  if ((0, import_chunk_bzyb60p0.Bmi)() && !(0, import_chunk_bzyb60p0.Efe)(import_chunk_prn6030k.Xi, (0, import_chunk_prn6030k.aJe)())) return import_chunk_bzyb60p0.Kns;
  return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}
function AZn(r) {
  let { mode: e, isBypassPermissionsModeAvailable: o } = (0, import_chunk_bz1f2qnq.Z)(r);
  return e === "bypassPermissions" || e === "plan" && o;
}
