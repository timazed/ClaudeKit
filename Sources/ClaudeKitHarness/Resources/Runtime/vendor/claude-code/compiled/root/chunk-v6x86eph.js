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
var chunk_v6x86eph_exports = {};
__export(chunk_v6x86eph_exports, {
  Lgt: () => Lgt,
  xor: () => xor
});
module.exports = __toCommonJS(chunk_v6x86eph_exports);
var import_chunk_racn22qq = require("/$bunfs/root/chunk-racn22qq.js");
function Lgt(r) {
  return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function xor(r) {
  if (r instanceof import_chunk_racn22qq.YL) return true;
  if (Lgt(r)) return false;
  if (r instanceof import_chunk_racn22qq.PO && (r.status === 403 || r.status === 401)) return r.code !== import_chunk_racn22qq.Ua.ClientHttpAuthentication && r.code !== import_chunk_racn22qq.Ua.ClientHttpForbidden;
  if (r instanceof Error && !(r instanceof import_chunk_racn22qq.ef) && !(r instanceof import_chunk_racn22qq.Xa) && "code" in r && (r.code === 403 || r.code === 401)) return true;
  return false;
}
