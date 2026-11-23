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
var chunk_eynhxr3s_exports = {};
__export(chunk_eynhxr3s_exports, {
  default: () => chunk_eynhxr3s_default
});
module.exports = __toCommonJS(chunk_eynhxr3s_exports);
var import_chunk_49v4znp9 = require("/$bunfs/root/chunk-49v4znp9.js");
var import_chunk_t2eveqgh = require("/$bunfs/root/chunk-t2eveqgh.js");
var import_chunk_psv74hq2 = require("/$bunfs/root/chunk-psv74hq2.js");
var import_chunk_rwh01902 = require("/$bunfs/root/chunk-rwh01902.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var u = (0, import_chunk_w1d7ygsk.V)(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  i.OTLPMetricExporter = void 0;
  var o = (0, import_chunk_49v4znp9.p5r)(), e = (0, import_chunk_t2eveqgh.wnr)(), c = (0, import_chunk_psv74hq2.cie)();
  class p extends o.OTLPMetricExporterBase {
    constructor(t) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(t ?? {}, "METRICS"), c.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), t);
    }
  }
  i.OTLPMetricExporter = p;
});
var n = (0, import_chunk_w1d7ygsk.V)(function(r) {
  Object.defineProperty(r, "__esModule", { value: true });
  r.OTLPMetricExporter = void 0;
  var l = u();
  Object.defineProperty(r, "OTLPMetricExporter", { enumerable: true, get: function() {
    return l.OTLPMetricExporter;
  } });
});
var chunk_eynhxr3s_default = n();
