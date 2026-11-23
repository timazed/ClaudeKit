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
var chunk_v6v1wr72_exports = {};
__export(chunk_v6v1wr72_exports, {
  Nqr: () => Nqr,
  m7s: () => m7s
});
module.exports = __toCommonJS(chunk_v6v1wr72_exports);
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
function m7s(e) {
  let r = e.args !== void 0 ? `, args: ${(0, import_chunk_w578pjby._)(e.args)}` : "";
  return `${import_chunk_jar84hn9.xc}({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${r}})`;
}
function Nqr(e) {
  return e.scriptPath !== void 0 && e.workflowRunId !== void 0 ? `
<recovery>${(0, import_chunk_hr2stdq7.sn)(`Its finished agent calls are saved. Only if the user asks you to resume it, call: ${m7s(e)}`)}</recovery>` : "";
}
