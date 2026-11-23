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
var chunk_4hdjh9tw_exports = {};
__export(chunk_4hdjh9tw_exports, {
  OTLPLogExporter: () => r
});
module.exports = __toCommonJS(chunk_4hdjh9tw_exports);
var import_chunk_psv74hq2 = require("/$bunfs/root/chunk-psv74hq2.js");
var import_chunk_rwh01902 = require("/$bunfs/root/chunk-rwh01902.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var t = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_psv74hq2.vue)()), e = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_psv74hq2.cie)()), o = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_psv74hq2.iTe)());
class r extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", { "Content-Type": "application/x-protobuf" }), e.ProtobufLogsSerializer));
  }
}
