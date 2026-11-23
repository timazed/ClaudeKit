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
var chunk_6g5bpe4r_exports = {};
__export(chunk_6g5bpe4r_exports, {
  OTLPMetricExporter: () => t
});
module.exports = __toCommonJS(chunk_6g5bpe4r_exports);
var import_chunk_49v4znp9 = require("/$bunfs/root/chunk-49v4znp9.js");
var import_chunk_psv74hq2 = require("/$bunfs/root/chunk-psv74hq2.js");
var import_chunk_rwh01902 = require("/$bunfs/root/chunk-rwh01902.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var o = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_49v4znp9.p5r)()), p = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_psv74hq2.cie)()), r = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_psv74hq2.iTe)());
class t extends o.OTLPMetricExporterBase {
  constructor(e) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", { "Content-Type": "application/x-protobuf" }), p.ProtobufMetricsSerializer), e);
  }
}
