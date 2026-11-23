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
var chunk_epgpxkgh_exports = {};
__export(chunk_epgpxkgh_exports, {
  Rtr: () => Rtr
});
module.exports = __toCommonJS(chunk_epgpxkgh_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_a8ey418s = require("/$bunfs/root/chunk-a8ey418s.js");
function Rtr(a, t) {
  return (0, import_chunk_0dht3xy7.yol)(a, (e) => e.replace(/\.jsonl$/, t), (e) => {
    if (e.namespace !== "transcript" || e.agentId === void 0) return;
    let n = ["subagents", ...e.agentRelPath ?? [], `agent-${e.agentId}${t}`], r = import_chunk_hkvzj051.at.sidecar(e.projectKey, e.sessionId, n);
    return n.length <= import_chunk_a8ey418s.DUi && (0, import_chunk_fp3vnecp.db)(r) === void 0 ? r : void 0;
  });
}
