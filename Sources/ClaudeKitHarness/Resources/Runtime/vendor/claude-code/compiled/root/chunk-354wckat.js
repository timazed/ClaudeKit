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
var chunk_354wckat_exports = {};
__export(chunk_354wckat_exports, {
  default: () => chunk_354wckat_default
});
module.exports = __toCommonJS(chunk_354wckat_exports);
var import_chunk_t2eveqgh = require("/$bunfs/root/chunk-t2eveqgh.js");
var import_chunk_psv74hq2 = require("/$bunfs/root/chunk-psv74hq2.js");
var import_chunk_rwh01902 = require("/$bunfs/root/chunk-rwh01902.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var u = (0, import_chunk_w1d7ygsk.V)(function(s) {
  Object.defineProperty(s, "__esModule", { value: true });
  s.OTLPLogExporter = void 0;
  var e = (0, import_chunk_t2eveqgh.wnr)(), t = (0, import_chunk_psv74hq2.cie)(), o = (0, import_chunk_psv74hq2.vue)();
  class p extends o.OTLPExporterBase {
    constructor(L = {}) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L, "LOGS"), t.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"));
    }
  }
  s.OTLPLogExporter = p;
});
var n = (0, import_chunk_w1d7ygsk.V)(function(r) {
  Object.defineProperty(r, "__esModule", { value: true });
  r.OTLPLogExporter = void 0;
  var i = u();
  Object.defineProperty(r, "OTLPLogExporter", { enumerable: true, get: function() {
    return i.OTLPLogExporter;
  } });
});
var chunk_354wckat_default = n();
