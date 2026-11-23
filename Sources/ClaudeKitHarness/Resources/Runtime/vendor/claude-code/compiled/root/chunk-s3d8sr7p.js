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
var chunk_s3d8sr7p_exports = {};
__export(chunk_s3d8sr7p_exports, {
  stt: () => stt
});
module.exports = __toCommonJS(chunk_s3d8sr7p_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
function stt(e, o) {
  if ((0, import_chunk_xfj2cwfv.Ihe)(e)) return;
  return { uuid: typeof e.source_uuid === "string" && e.source_uuid ? e.source_uuid : o, content: e.prompt, isMeta: Boolean(e.isMeta), origin: (0, import_chunk_xfj2cwfv.K0)(e.origin, e.commandMode, e.runId) };
}
