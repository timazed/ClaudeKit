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
var chunk_49v4znp9_exports = {};
__export(chunk_49v4znp9_exports, {
  p5r: () => p5r
});
module.exports = __toCommonJS(chunk_49v4znp9_exports);
var import_chunk_psv74hq2 = require("/$bunfs/root/chunk-psv74hq2.js");
var import_chunk_rwh01902 = require("/$bunfs/root/chunk-rwh01902.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var l = (0, import_chunk_w1d7ygsk.V)(function(y) {
  Object.defineProperty(y, "__esModule", { value: true });
  y.AggregationTemporalityPreference = void 0;
  var U;
  (function(r) {
    r[r.DELTA = 0] = "DELTA", r[r.CUMULATIVE = 1] = "CUMULATIVE", r[r.LOWMEMORY = 2] = "LOWMEMORY";
  })(U = y.AggregationTemporalityPreference || (y.AggregationTemporalityPreference = {}));
});
var s = (0, import_chunk_w1d7ygsk.V)(function(M) {
  Object.defineProperty(M, "__esModule", { value: true });
  M.OTLPMetricExporterBase = M.LowMemoryTemporalitySelector = M.DeltaTemporalitySelector = M.CumulativeTemporalitySelector = void 0;
  var O = (0, import_chunk_xfj2cwfv.Q_)(), e = (0, import_chunk_rwh01902.pgt)(), o = l(), g = (0, import_chunk_psv74hq2.vue)(), _ = (0, import_chunk_xfj2cwfv._u)(), I = () => e.AggregationTemporality.CUMULATIVE;
  M.CumulativeTemporalitySelector = I;
  var b = (r) => {
    switch (r) {
      case e.InstrumentType.COUNTER:
      case e.InstrumentType.OBSERVABLE_COUNTER:
      case e.InstrumentType.GAUGE:
      case e.InstrumentType.HISTOGRAM:
      case e.InstrumentType.OBSERVABLE_GAUGE:
        return e.AggregationTemporality.DELTA;
      case e.InstrumentType.UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
        return e.AggregationTemporality.CUMULATIVE;
    }
  };
  M.DeltaTemporalitySelector = b;
  var B = (r) => {
    switch (r) {
      case e.InstrumentType.COUNTER:
      case e.InstrumentType.HISTOGRAM:
        return e.AggregationTemporality.DELTA;
      case e.InstrumentType.GAUGE:
      case e.InstrumentType.UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_COUNTER:
      case e.InstrumentType.OBSERVABLE_GAUGE:
        return e.AggregationTemporality.CUMULATIVE;
    }
  };
  M.LowMemoryTemporalitySelector = B;
  function D() {
    let r = (O.getStringFromEnv("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
    if (r === "cumulative") return M.CumulativeTemporalitySelector;
    if (r === "delta") return M.DeltaTemporalitySelector;
    if (r === "lowmemory") return M.LowMemoryTemporalitySelector;
    return _.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${r}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`), M.CumulativeTemporalitySelector;
  }
  function j(r) {
    if (r != null) {
      if (r === o.AggregationTemporalityPreference.DELTA) return M.DeltaTemporalitySelector;
      else if (r === o.AggregationTemporalityPreference.LOWMEMORY) return M.LowMemoryTemporalitySelector;
      return M.CumulativeTemporalitySelector;
    }
    return D();
  }
  var N = Object.freeze({ type: e.AggregationType.DEFAULT });
  function w(r) {
    return r?.aggregationPreference ?? (() => N);
  }
  class L extends g.OTLPExporterBase {
    _aggregationTemporalitySelector;
    _aggregationSelector;
    constructor(r, E) {
      super(r);
      this._aggregationSelector = w(E), this._aggregationTemporalitySelector = j(E?.temporalityPreference);
    }
    selectAggregation(r) {
      return this._aggregationSelector(r);
    }
    selectAggregationTemporality(r) {
      return this._aggregationTemporalitySelector(r);
    }
  }
  M.OTLPMetricExporterBase = L;
});
var v = (0, import_chunk_w1d7ygsk.V)(function(d) {
  Object.defineProperty(d, "__esModule", { value: true });
  d.OTLPMetricExporter = void 0;
  var S = s(), x = (0, import_chunk_psv74hq2.cie)(), n = (0, import_chunk_psv74hq2.iTe)();
  class A extends S.OTLPMetricExporterBase {
    constructor(r) {
      super(n.createOtlpHttpExportDelegate(n.convertLegacyHttpOptions(r ?? {}, "METRICS", "v1/metrics", { "Content-Type": "application/json" }), x.JsonMetricsSerializer), r);
    }
  }
  d.OTLPMetricExporter = A;
});
var R = (0, import_chunk_w1d7ygsk.V)(function(T) {
  Object.defineProperty(T, "__esModule", { value: true });
  T.OTLPMetricExporter = void 0;
  var q = v();
  Object.defineProperty(T, "OTLPMetricExporter", { enumerable: true, get: function() {
    return q.OTLPMetricExporter;
  } });
});
var C = (0, import_chunk_w1d7ygsk.V)(function(m) {
  Object.defineProperty(m, "__esModule", { value: true });
  m.OTLPMetricExporter = void 0;
  var h = R();
  Object.defineProperty(m, "OTLPMetricExporter", { enumerable: true, get: function() {
    return h.OTLPMetricExporter;
  } });
});
var p5r = (0, import_chunk_w1d7ygsk.V)(function(t) {
  Object.defineProperty(t, "__esModule", { value: true });
  t.OTLPMetricExporterBase = t.LowMemoryTemporalitySelector = t.DeltaTemporalitySelector = t.CumulativeTemporalitySelector = t.AggregationTemporalityPreference = t.OTLPMetricExporter = void 0;
  var F = C();
  Object.defineProperty(t, "OTLPMetricExporter", { enumerable: true, get: function() {
    return F.OTLPMetricExporter;
  } });
  var Y = l();
  Object.defineProperty(t, "AggregationTemporalityPreference", { enumerable: true, get: function() {
    return Y.AggregationTemporalityPreference;
  } });
  var a = s();
  Object.defineProperty(t, "CumulativeTemporalitySelector", { enumerable: true, get: function() {
    return a.CumulativeTemporalitySelector;
  } });
  Object.defineProperty(t, "DeltaTemporalitySelector", { enumerable: true, get: function() {
    return a.DeltaTemporalitySelector;
  } });
  Object.defineProperty(t, "LowMemoryTemporalitySelector", { enumerable: true, get: function() {
    return a.LowMemoryTemporalitySelector;
  } });
  Object.defineProperty(t, "OTLPMetricExporterBase", { enumerable: true, get: function() {
    return a.OTLPMetricExporterBase;
  } });
});
