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
var chunk_n5gnv02g_exports = {};
__export(chunk_n5gnv02g_exports, {
  default: () => chunk_n5gnv02g_default
});
module.exports = __toCommonJS(chunk_n5gnv02g_exports);
var import_chunk_rwh01902 = require("/$bunfs/root/chunk-rwh01902.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var E = (0, import_chunk_w1d7ygsk.V)(function(w) {
  Object.defineProperty(w, "__esModule", { value: true });
  w.PrometheusSerializer = void 0;
  var I = (0, import_chunk_xfj2cwfv._u)(), o = (0, import_chunk_rwh01902.pgt)(), P = (0, import_chunk_xfj2cwfv.Q_)(), g = (0, import_chunk_xfj2cwfv.ict)(), q = "otel.scope.schema_url";
  function S(e) {
    return e.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
  }
  function y(e = "") {
    if (typeof e !== "string") e = JSON.stringify(e);
    return S(e).replace(/"/g, '\\"');
  }
  var D = /[^a-z0-9_]/gi, H = /_{2,}/g;
  function O(e) {
    return e.replace(D, "_").replace(H, "_");
  }
  function F(e, t) {
    if (!e.endsWith("_total") && t.dataPointType === o.DataPointType.SUM && t.isMonotonic) e = e + "_total";
    return e;
  }
  function j(e) {
    if (e === 1 / 0) return "+Inf";
    else if (e === -1 / 0) return "-Inf";
    else return `${e}`;
  }
  function k(e) {
    switch (e.dataPointType) {
      case o.DataPointType.SUM:
        if (e.isMonotonic) return "counter";
        return "gauge";
      case o.DataPointType.GAUGE:
        return "gauge";
      case o.DataPointType.HISTOGRAM:
        return "histogram";
      default:
        return "untyped";
    }
  }
  function m(e, t, r, i, s) {
    let n = false, a = "";
    for (let [u, _] of Object.entries(t)) {
      let c = O(u);
      n = true, a += `${a.length > 0 ? "," : ""}${c}="${y(_)}"`;
    }
    if (s) for (let [u, _] of Object.entries(s)) {
      let c = O(u);
      n = true, a += `${a.length > 0 ? "," : ""}${c}="${y(_)}"`;
    }
    if (n) e += `{${a}}`;
    return `${e} ${j(r)}${i !== void 0 ? " " + String(i) : ""}
`;
  }
  var G = "# no registered metrics";
  class R {
    _prefix;
    _appendTimestamp;
    _additionalAttributes;
    _withResourceConstantLabels;
    _withoutScopeInfo;
    _withoutTargetInfo;
    constructor(e, t = false, r, i, s) {
      if (e) this._prefix = e + "_";
      this._appendTimestamp = t, this._withResourceConstantLabels = r, this._withoutScopeInfo = !!s, this._withoutTargetInfo = !!i;
    }
    serialize(e) {
      let t = "";
      this._additionalAttributes = this._filterResourceConstantLabels(e.resource.attributes, this._withResourceConstantLabels);
      for (let r of e.scopeMetrics) t += this._serializeScopeMetrics(r);
      if (t === "") t += G;
      return this._serializeResource(e.resource) + t;
    }
    _filterResourceConstantLabels(e, t) {
      if (t) {
        let r = {};
        for (let [i, s] of Object.entries(e)) if (i.match(t)) r[i] = s;
        return r;
      }
      return;
    }
    _serializeScopeMetrics(e) {
      let t = "";
      for (let r of e.metrics) t += this._serializeMetricData(r, e.scope) + `
`;
      return t;
    }
    _serializeMetricData(e, t) {
      let r = O(S(e.descriptor.name));
      if (this._prefix) r = `${this._prefix}${r}`;
      let i = e.dataPointType;
      r = F(r, e);
      let s = `# HELP ${r} ${S(e.descriptor.description || "description missing")}`, n = e.descriptor.unit ? `
# UNIT ${r} ${S(e.descriptor.unit)}` : "", a = `# TYPE ${r} ${k(e)}`, u;
      if (this._withoutScopeInfo) u = this._additionalAttributes;
      else {
        let c = { [g.ATTR_OTEL_SCOPE_NAME]: t.name };
        if (t.schemaUrl) c[q] = t.schemaUrl;
        if (t.version) c[g.ATTR_OTEL_SCOPE_VERSION] = t.version;
        u = Object.assign(c, this._additionalAttributes);
      }
      let _ = "";
      switch (i) {
        case o.DataPointType.SUM:
        case o.DataPointType.GAUGE: {
          _ = e.dataPoints.map((c) => this._serializeSingularDataPoint(r, e, c, u)).join("");
          break;
        }
        case o.DataPointType.HISTOGRAM: {
          _ = e.dataPoints.map((c) => this._serializeHistogramDataPoint(r, e, c, u)).join("");
          break;
        }
        default:
          I.diag.error(`Unrecognizable DataPointType: ${i} for metric "${r}"`);
      }
      return `${s}${n}
${a}
${_}`.trim();
    }
    _serializeSingularDataPoint(e, t, r, i) {
      let s = "", { value: n, attributes: a } = r, u = P.hrTimeToMilliseconds(r.endTime);
      return s += m(e, a, n, this._appendTimestamp ? u : void 0, i), s;
    }
    _serializeHistogramDataPoint(e, t, r, i) {
      let s = "", { attributes: n, value: a } = r, u = P.hrTimeToMilliseconds(r.endTime);
      for (let f of ["count", "sum"]) {
        let T = a[f];
        if (T != null) s += m(e + "_" + f, n, T, this._appendTimestamp ? u : void 0, i);
      }
      let _ = 0, c = a.buckets.counts.entries(), v = false;
      for (let [f, T] of c) {
        _ += T;
        let d = a.buckets.boundaries[f];
        if (d === void 0 && v) break;
        if (d === 1 / 0) v = true;
        s += m(e + "_bucket", n, _, this._appendTimestamp ? u : void 0, Object.assign({}, i, { le: d === void 0 || d === 1 / 0 ? "+Inf" : String(d) }));
      }
      return s;
    }
    _serializeResource(e) {
      if (this._withoutTargetInfo === true) return "";
      let t = "target_info", r = `# HELP ${t} Target metadata`, i = `# TYPE ${t} gauge`, s = m(t, e.attributes, 1).trim();
      return `${r}
${i}
${s}
`;
    }
  }
  w.PrometheusSerializer = R;
});
var C = (0, import_chunk_w1d7ygsk.V)(function(x) {
  Object.defineProperty(x, "__esModule", { value: true });
  x.PrometheusExporter = void 0;
  var p = (0, import_chunk_xfj2cwfv._u)(), U = (0, import_chunk_xfj2cwfv.Q_)(), h = (0, import_chunk_rwh01902.pgt)(), L = (0, import_chunk_w1d7ygsk.ft)("http"), M = E(), z = (0, import_chunk_w1d7ygsk.ft)("url");
  class l extends h.MetricReader {
    static DEFAULT_OPTIONS = { host: void 0, port: 9464, endpoint: "/metrics", prefix: "", appendTimestamp: false, withResourceConstantLabels: void 0, withoutScopeInfo: false, withoutTargetInfo: false };
    _host;
    _port;
    _baseUrl;
    _endpoint;
    _server;
    _prefix;
    _appendTimestamp;
    _serializer;
    _startServerPromise;
    constructor(e = {}, t = () => {
    }) {
      super({ aggregationSelector: (n) => ({ type: h.AggregationType.DEFAULT }), aggregationTemporalitySelector: (n) => h.AggregationTemporality.CUMULATIVE, metricProducers: e.metricProducers });
      this._host = e.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || l.DEFAULT_OPTIONS.host, this._port = e.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || l.DEFAULT_OPTIONS.port, this._prefix = e.prefix || l.DEFAULT_OPTIONS.prefix, this._appendTimestamp = typeof e.appendTimestamp === "boolean" ? e.appendTimestamp : l.DEFAULT_OPTIONS.appendTimestamp;
      let r = e.withResourceConstantLabels || l.DEFAULT_OPTIONS.withResourceConstantLabels, i = e.withoutScopeInfo || l.DEFAULT_OPTIONS.withoutScopeInfo, s = e.withoutTargetInfo || l.DEFAULT_OPTIONS.withoutTargetInfo;
      if (this._server = L.createServer(this._requestHandler).unref(), this._serializer = new M.PrometheusSerializer(this._prefix, this._appendTimestamp, r, s, i), this._baseUrl = `http://${this._host}:${this._port}/`, this._endpoint = (e.endpoint || l.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, "/$1"), e.preventServerStart !== true) this.startServer().then(t, (n) => {
        p.diag.error(n), t(n);
      });
      else if (t) queueMicrotask(t);
    }
    async onForceFlush() {
    }
    onShutdown() {
      return this.stopServer();
    }
    stopServer() {
      if (!this._server) return p.diag.debug("Prometheus stopServer() was called but server was never started."), Promise.resolve();
      else return new Promise((e) => {
        this._server.close((t) => {
          if (!t) p.diag.debug("Prometheus exporter was stopped");
          else if (t.code !== "ERR_SERVER_NOT_RUNNING") U.globalErrorHandler(t);
          e();
        });
      });
    }
    startServer() {
      return this._startServerPromise ??= new Promise((e, t) => {
        this._server.once("error", t), this._server.listen({ port: this._port, host: this._host }, () => {
          p.diag.debug(`Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`), e();
        });
      }), this._startServerPromise;
    }
    getMetricsRequestHandler(e, t) {
      this._exportMetrics(t);
    }
    _requestHandler = (e, t) => {
      let r;
      try {
        if (e.url != null) r = new z.URL(e.url, this._baseUrl).pathname;
      } catch {
        t.statusCode = 400, t.end("Bad Request");
        return;
      }
      if (r === this._endpoint) this._exportMetrics(t);
      else this._notFound(t);
    };
    _exportMetrics = (e) => {
      e.statusCode = 200, e.setHeader("content-type", "text/plain"), this.collect().then((t) => {
        let { resourceMetrics: r, errors: i } = t;
        if (i.length) p.diag.error("PrometheusExporter: metrics collection errors", ...i);
        e.end(this._serializer.serialize(r));
      }, (t) => {
        e.end(`# failed to export metrics: ${t}`);
      });
    };
    _notFound = (e) => {
      e.statusCode = 404, e.end();
    };
  }
  x.PrometheusExporter = l;
});
var J = (0, import_chunk_w1d7ygsk.V)(function(b) {
  Object.defineProperty(b, "__esModule", { value: true });
  b.PrometheusSerializer = b.PrometheusExporter = void 0;
  var B = C();
  Object.defineProperty(b, "PrometheusExporter", { enumerable: true, get: function() {
    return B.PrometheusExporter;
  } });
  var X = E();
  Object.defineProperty(b, "PrometheusSerializer", { enumerable: true, get: function() {
    return X.PrometheusSerializer;
  } });
});
var chunk_n5gnv02g_default = J();
