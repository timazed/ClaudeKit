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
var chunk_fwhva0e1_exports = {};
__export(chunk_fwhva0e1_exports, {
  D8t: () => D8t,
  uzr: () => uzr,
  vMt: () => vMt
});
module.exports = __toCommonJS(chunk_fwhva0e1_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var t = "(value set by your organization)";
function vMt(r, e) {
  if (e !== "managed") return r;
  return { ...r, url: (0, import_chunk_2mwshd9r.uLl)(r.url) ?? t, ...r.headers && { headers: (0, import_chunk_khxw3ng0.er)(r.headers, () => t) } };
}
function D8t(r) {
  return r === "cached" ? "pending" : r;
}
function uzr(r) {
  return r.map((e) => {
    let o;
    if (e.config.type === "sse" || e.config.type === "http") o = vMt({ type: e.config.type, url: e.config.url, headers: e.config.headers }, e.config.scope);
    else if (e.config.type === "claudeai-proxy") o = { type: "claudeai-proxy", url: e.config.url, id: e.config.id };
    else if (e.config.type === "stdio" || e.config.type === void 0) o = { type: "stdio", command: e.config.command, args: e.config.args };
    return { name: e.name, status: D8t(e.type), config: o, scope: e.config.scope, source: (0, import_chunk_ts09sys6.XH)(e.name, e.config), serverInfo: (0, import_chunk_xcgcdx61.ji)(e) ? e.serverInfo : void 0, error: e.type === "failed" ? e.error : void 0, error_code: (0, import_chunk_xfj2cwfv.$xo)(e) };
  });
}
