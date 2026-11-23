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
var chunk_t844hmfx_exports = {};
__export(chunk_t844hmfx_exports, {
  LEGACY_WORKFLOW_TOOL_NAME: () => import_chunk_jar84hn9.Qhr,
  WORKFLOW_JOURNAL_HOST_COPY_FLAG: () => import_chunk_jar84hn9.DCi,
  WORKFLOW_RUN_ID_PATTERN: () => import_chunk_jar84hn9.k$t,
  WORKFLOW_SUBAGENT_TYPE: () => import_chunk_jar84hn9.vLn,
  WORKFLOW_TOOL_NAME: () => import_chunk_jar84hn9.xc,
  WORKFLOW_TRANSCRIPT_SUBDIR: () => import_chunk_jar84hn9.TLn
});
module.exports = __toCommonJS(chunk_t844hmfx_exports);
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
