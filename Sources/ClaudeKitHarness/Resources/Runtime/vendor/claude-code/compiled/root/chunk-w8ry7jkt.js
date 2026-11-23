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
var chunk_w8ry7jkt_exports = {};
__export(chunk_w8ry7jkt_exports, {
  DBa: () => DBa,
  LBa: () => LBa,
  NBa: () => NBa,
  P7r: () => P7r,
  ant: () => ant,
  b8o: () => b8o,
  gsr: () => gsr,
  hsr: () => hsr,
  kUe: () => kUe,
  psi: () => psi
});
module.exports = __toCommonJS(chunk_w8ry7jkt_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var o = "/v1/claudeai-agents/mcp", t = "f688f3fc-1d05-5bd1-9c48-9854ec083044", DBa = new import_chunk_pzzqg6s3.ze(() => ({})), LBa = new import_chunk_pzzqg6s3.ze(() => ({}));
function hsr(e, r) {
  let s = e.servers.get(r.name);
  return s !== void 0 && r.config.type === "http" && r.config.url === s && e.heldSinceBoot(r.name);
}
var kUe = /^file_[A-Za-z0-9_-]{1,128}$/, gsr = "get_task";
function P7r(e) {
  return e === "start_task" || e === "update_task";
}
function ant(e) {
  return (0, import_chunk_ts09sys6.kme)(e, { path: o, serverId: t });
}
function NBa(e) {
  if (e.config.type !== "http" || !(0, import_chunk_2mwshd9r.Yu)(e.config.url)) return false;
  return (0, import_chunk_f9x2f6cx.Y)() ? b8o(e) : ant(e);
}
function b8o(e) {
  if (e.config.type !== "http" || !(0, import_chunk_2mwshd9r.Yu)(e.config.url)) return false;
  try {
    return new URL(e.config.url).searchParams.getAll("toolbox_mcp_server_id").some((r) => r.toLowerCase() === t);
  } catch {
    return false;
  }
}
function psi(e) {
  return ant(e) || (0, import_chunk_f9x2f6cx.Y)() && b8o(e);
}
