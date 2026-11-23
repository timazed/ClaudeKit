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
var chunk_1tzm94k1_exports = {};
__export(chunk_1tzm94k1_exports, {
  Bh: () => Bh
});
module.exports = __toCommonJS(chunk_1tzm94k1_exports);
var import_chunk_6v7p7bta = require("/$bunfs/root/chunk-6v7p7bta.js");
var import_chunk_tpn2kte3 = require("/$bunfs/root/chunk-tpn2kte3.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var P = (0, import_chunk_w1d7ygsk.V)(function(J) {
  var x = (e, t) => {
    let r = [];
    if (e) r.push(e);
    if (t) for (let n of t) r.push(n);
    return r;
  }, v = (e, t) => `${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, N = () => {
    let e = [], t = [], r = false, n = /* @__PURE__ */ new Set(), a = (i) => i.sort((s, l) => F[l.step] - F[s.step] || A[l.priority || "normal"] - A[s.priority || "normal"]), o = (i) => {
      let s = false, l = (h) => {
        let m = x(h.name, h.aliases);
        if (m.includes(i)) {
          s = true;
          for (let c of m) n.delete(c);
          return false;
        }
        return true;
      };
      return e = e.filter(l), t = t.filter(l), s;
    }, d = (i) => {
      let s = false, l = (h) => {
        if (h.middleware === i) {
          s = true;
          for (let m of x(h.name, h.aliases)) n.delete(m);
          return false;
        }
        return true;
      };
      return e = e.filter(l), t = t.filter(l), s;
    }, u = (i) => (e.forEach((s) => {
      i.add(s.middleware, { ...s });
    }), t.forEach((s) => {
      i.addRelativeTo(s.middleware, { ...s });
    }), i.identifyOnResolve?.(C.identifyOnResolve()), i), g = (i) => {
      let s = [];
      return i.before.forEach((l) => {
        if (l.before.length === 0 && l.after.length === 0) s.push(l);
        else s.push(...g(l));
      }), s.push(i), i.after.reverse().forEach((l) => {
        if (l.before.length === 0 && l.after.length === 0) s.push(l);
        else s.push(...g(l));
      }), s;
    }, w = (i = false) => {
      let s = [], l = [], h = {};
      return e.forEach((c) => {
        let f = { ...c, before: [], after: [] };
        for (let p of x(f.name, f.aliases)) h[p] = f;
        s.push(f);
      }), t.forEach((c) => {
        let f = { ...c, before: [], after: [] };
        for (let p of x(f.name, f.aliases)) h[p] = f;
        l.push(f);
      }), l.forEach((c) => {
        if (c.toMiddleware) {
          let f = h[c.toMiddleware];
          if (f === void 0) {
            if (i) return;
            throw Error(`${c.toMiddleware} is not found when adding ${v(c.name, c.aliases)} middleware ${c.relation} ${c.toMiddleware}`);
          }
          if (c.relation === "after") f.after.push(c);
          if (c.relation === "before") f.before.push(c);
        }
      }), a(s).map(g).reduce((c, f) => (c.push(...f), c), []);
    }, C = { add: (i, s = {}) => {
      let { name: l, override: h, aliases: m } = s, c = { step: "initialize", priority: "normal", middleware: i, ...s }, f = x(l, m);
      if (f.length > 0) {
        if (f.some((p) => n.has(p))) {
          if (!h) throw Error(`Duplicate middleware name '${v(l, m)}'`);
          for (let p of f) {
            let S = e.findIndex((E) => E.name === p || E.aliases?.some((M) => M === p));
            if (S === -1) continue;
            let y = e[S];
            if (y.step !== c.step || c.priority !== y.priority) throw Error(`"${v(y.name, y.aliases)}" middleware with ${y.priority} priority in ${y.step} step cannot be overridden by "${v(l, m)}" middleware with ${c.priority} priority in ${c.step} step.`);
            e.splice(S, 1);
          }
        }
        for (let p of f) n.add(p);
      }
      e.push(c);
    }, addRelativeTo: (i, s) => {
      let { name: l, override: h, aliases: m } = s, c = { middleware: i, ...s }, f = x(l, m);
      if (f.length > 0) {
        if (f.some((p) => n.has(p))) {
          if (!h) throw Error(`Duplicate middleware name '${v(l, m)}'`);
          for (let p of f) {
            let S = t.findIndex((E) => E.name === p || E.aliases?.some((M) => M === p));
            if (S === -1) continue;
            let y = t[S];
            if (y.toMiddleware !== c.toMiddleware || y.relation !== c.relation) throw Error(`"${v(y.name, y.aliases)}" middleware ${y.relation} "${y.toMiddleware}" middleware cannot be overridden by "${v(l, m)}" middleware ${c.relation} "${c.toMiddleware}" middleware.`);
            t.splice(S, 1);
          }
        }
        for (let p of f) n.add(p);
      }
      t.push(c);
    }, clone: () => u(N()), use: (i) => {
      i.applyToStack(C);
    }, remove: (i) => {
      if (typeof i === "string") return o(i);
      else return d(i);
    }, removeByTag: (i) => {
      let s = false, l = (h) => {
        let { tags: m, name: c, aliases: f } = h;
        if (m && m.includes(i)) {
          let p = x(c, f);
          for (let S of p) n.delete(S);
          return s = true, false;
        }
        return true;
      };
      return e = e.filter(l), t = t.filter(l), s;
    }, concat: (i) => {
      let s = u(N());
      return s.use(i), s.identifyOnResolve(r || s.identifyOnResolve() || (i.identifyOnResolve?.() ?? false)), s;
    }, applyToStack: u, identify: () => w(true).map((i) => {
      let s = i.step ?? i.relation + " " + i.toMiddleware;
      return v(i.name, i.aliases) + " - " + s;
    }), identifyOnResolve(i) {
      if (typeof i === "boolean") r = i;
      return r;
    }, resolve: (i, s) => {
      for (let l of w().map((h) => h.middleware).reverse()) i = l(i, s);
      if (r) console.log(C.identify());
      return i;
    } };
    return C;
  }, F = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 }, A = { high: 3, normal: 2, low: 1 };
  J.constructStack = N;
});
var Bh = (0, import_chunk_w1d7ygsk.V)(function(_) {
  var L = P(), k = (0, import_chunk_6v7p7bta.Run)(), z = (0, import_chunk_tpn2kte3.uQe)(), K = (0, import_chunk_6v7p7bta.Tj)(), q = (0, import_chunk_6v7p7bta.Ujn)();
  class j {
    config;
    middlewareStack = L.constructStack();
    initConfig;
    handlers;
    constructor(e) {
      this.config = e;
    }
    send(e, t, r) {
      let n = typeof t !== "function" ? t : void 0, a = typeof t === "function" ? t : r, o = n === void 0 && this.config.cacheMiddleware === true, d;
      if (o) {
        if (!this.handlers) this.handlers = /* @__PURE__ */ new WeakMap();
        let u = this.handlers;
        if (u.has(e.constructor)) d = u.get(e.constructor);
        else d = e.resolveMiddleware(this.middlewareStack, this.config, n), u.set(e.constructor, d);
      } else delete this.handlers, d = e.resolveMiddleware(this.middlewareStack, this.config, n);
      if (a) d(e).then((u) => a(null, u.output), (u) => a(u)).catch(() => {
      });
      else return d(e).then((u) => u.output);
    }
    destroy() {
      this.config?.requestHandler?.destroy?.(), delete this.handlers;
    }
  }
  var b = "***SensitiveInformation***";
  function O(e, t) {
    if (t == null) return t;
    let r = K.NormalizedSchema.of(e);
    if (r.getMergedTraits().sensitive) return b;
    if (r.isListSchema()) {
      if (!!r.getValueSchema().getMergedTraits().sensitive) return b;
    } else if (r.isMapSchema()) {
      if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive) return b;
    } else if (r.isStructSchema() && typeof t === "object") {
      let n = t, a = {};
      for (let [o, d] of r.structIterator()) if (n[o] != null) a[o] = O(d, n[o]);
      return a;
    }
    return t;
  }
  class T {
    middlewareStack = L.constructStack();
    schema;
    static classBuilder() {
      return new W();
    }
    resolveMiddlewareWithContext(e, t, r, { middlewareFn: n, clientName: a, commandName: o, inputFilterSensitiveLog: d, outputFilterSensitiveLog: u, smithyContext: g, additionalContext: w, CommandCtor: C }) {
      for (let m of n.bind(this)(C, e, t, r)) this.middlewareStack.use(m);
      let i = e.concat(this.middlewareStack), { logger: s } = t, l = { logger: s, clientName: a, commandName: o, inputFilterSensitiveLog: d, outputFilterSensitiveLog: u, [z.SMITHY_CONTEXT_KEY]: { commandInstance: this, ...g }, ...w }, { requestHandler: h } = t;
      return i.resolve((m) => h.handle(m.request, r || {}), l);
    }
  }
  class W {
    _init = () => {
    };
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = void 0;
    _outputFilterSensitiveLog = void 0;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(e) {
      this._init = e;
    }
    ep(e) {
      return this._ep = e, this;
    }
    m(e) {
      return this._middlewareFn = e, this;
    }
    s(e, t, r = {}) {
      return this._smithyContext = { service: e, operation: t, ...r }, this;
    }
    c(e = {}) {
      return this._additionalContext = e, this;
    }
    n(e, t) {
      return this._clientName = e, this._commandName = t, this;
    }
    f(e = (r) => r, t = (r) => r) {
      return this._inputFilterSensitiveLog = e, this._outputFilterSensitiveLog = t, this;
    }
    ser(e) {
      return this._serializer = e, this;
    }
    de(e) {
      return this._deserializer = e, this;
    }
    sc(e) {
      return this._operationSchema = e, this._smithyContext.operationSchema = e, this;
    }
    build() {
      let e = this, t;
      return t = class extends T {
        input;
        static getEndpointParameterInstructions() {
          return e._ep;
        }
        constructor(...[r]) {
          super();
          this.input = r ?? {}, e._init(this), this.schema = e._operationSchema;
        }
        resolveMiddleware(r, n, a) {
          let o = e._operationSchema, d = o?.[4] ?? o?.input, u = o?.[5] ?? o?.output;
          return this.resolveMiddlewareWithContext(r, n, a, { CommandCtor: t, middlewareFn: e._middlewareFn, clientName: e._clientName, commandName: e._commandName, inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (o ? O.bind(null, d) : (g) => g), outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (o ? O.bind(null, u) : (g) => g), smithyContext: e._smithyContext, additionalContext: e._additionalContext });
        }
        serialize = e._serializer;
        deserialize = e._deserializer;
      };
    }
  }
  var ee = "***SensitiveInformation***", te = (e, t) => {
    for (let r of Object.keys(e)) {
      let n = e[r], a = async function(d, u, g) {
        let w = new n(d);
        if (typeof u === "function") this.send(w, u);
        else if (typeof g === "function") {
          if (typeof u !== "object") throw Error(`Expected http options but got ${typeof u}`);
          this.send(w, u || {}, g);
        } else return this.send(w, u);
      }, o = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
      t.prototype[o] = a;
    }
  };
  class I extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(e) {
      super(e.message);
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata;
    }
    static isInstance(e) {
      if (!e) return false;
      let t = e;
      return I.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && (t.$fault === "client" || t.$fault === "server");
    }
    static [Symbol.hasInstance](e) {
      if (!e) return false;
      let t = e;
      if (this === I) return I.isInstance(e);
      if (I.isInstance(e)) {
        if (t.name && this.name) return this.prototype.isPrototypeOf(e) || t.name === this.name;
        return this.prototype.isPrototypeOf(e);
      }
      return false;
    }
  }
  var B = (e, t = {}) => {
    Object.entries(t).filter(([, n]) => n !== void 0).forEach(([n, a]) => {
      if (e[n] == null || e[n] === "") e[n] = a;
    });
    let r = e.message || e.Message || "UnknownError";
    return e.message = r, delete e.Message, e;
  }, H = ({ output: e, parsedBody: t, exceptionCtor: r, errorCode: n }) => {
    let a = ne(e), o = a.httpStatusCode ? a.httpStatusCode + "" : void 0, d = new r({ name: t?.code || t?.Code || n || o || "UnknownError", $fault: "client", $metadata: a });
    throw B(d, t);
  }, re = (e) => ({ output: t, parsedBody: r, errorCode: n }) => {
    H({ output: t, parsedBody: r, exceptionCtor: e, errorCode: n });
  }, ne = (e) => ({ httpStatusCode: e.statusCode, requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"], extendedRequestId: e.headers["x-amz-id-2"], cfId: e.headers["x-amz-cf-id"] }), ie = (e) => {
    switch (e) {
      case "standard":
        return { retryMode: "standard", connectionTimeout: 3100 };
      case "in-region":
        return { retryMode: "standard", connectionTimeout: 1100 };
      case "cross-region":
        return { retryMode: "standard", connectionTimeout: 3100 };
      case "mobile":
        return { retryMode: "standard", connectionTimeout: 3e4 };
      default:
        return {};
    }
  }, D = false, se = (e) => {
    if (e && !D && parseInt(e.substring(1, e.indexOf("."))) < 16) D = true;
  }, oe = (e) => {
    let t = [];
    for (let r in z.AlgorithmId) {
      let n = z.AlgorithmId[r];
      if (e[n] === void 0) continue;
      t.push({ algorithmId: () => n, checksumConstructor: () => e[n] });
    }
    return { addChecksumAlgorithm(r) {
      t.push(r);
    }, checksumAlgorithms() {
      return t;
    } };
  }, ae = (e) => {
    let t = {};
    return e.checksumAlgorithms().forEach((r) => {
      t[r.algorithmId()] = r.checksumConstructor();
    }), t;
  }, le = (e) => ({ setRetryStrategy(t) {
    e.retryStrategy = t;
  }, retryStrategy() {
    return e.retryStrategy;
  } }), ce = (e) => {
    let t = {};
    return t.retryStrategy = e.retryStrategy(), t;
  }, U = (e) => Object.assign(oe(e), le(e)), de = U, ue = (e) => Object.assign(ae(e), ce(e)), fe = (e) => Array.isArray(e) ? e : [e], G = (e) => {
    for (let r in e) if (e.hasOwnProperty(r) && e[r]["#text"] !== void 0) e[r] = e[r]["#text"];
    else if (typeof e[r] === "object" && e[r] !== null) e[r] = G(e[r]);
    return e;
  }, he = (e) => e != null;
  class Y {
    trace() {
    }
    debug() {
    }
    info() {
    }
    warn() {
    }
    error() {
    }
  }
  function Z(e, t, r) {
    let n, a, o;
    if (typeof t > "u" && typeof r > "u") n = {}, o = e;
    else if (n = e, typeof t === "function") return a = t, o = r, ge(n, a, o);
    else o = t;
    for (let d of Object.keys(o)) {
      if (!Array.isArray(o[d])) {
        n[d] = o[d];
        continue;
      }
      X(n, null, o, d);
    }
    return n;
  }
  var me = (e) => {
    let t = {};
    for (let [r, n] of Object.entries(e || {})) t[r] = [, n];
    return t;
  }, pe = (e, t) => {
    let r = {};
    for (let n in t) X(r, e, t, n);
    return r;
  }, ge = (e, t, r) => Z(e, Object.entries(r).reduce((n, [a, o]) => {
    if (Array.isArray(o)) n[a] = o;
    else if (typeof o === "function") n[a] = [t, o()];
    else n[a] = [t, o];
    return n;
  }, {})), X = (e, t, r, n) => {
    if (t !== null) {
      let d = r[n];
      if (typeof d === "function") d = [, d];
      let [u = ye, g = we, w = n] = d;
      if (typeof u === "function" && u(t[w]) || typeof u !== "function" && !!u) e[n] = g(t[w]);
      return;
    }
    let [a, o] = r[n];
    if (typeof o === "function") {
      let d, u = a === void 0 && (d = o()) != null, g = typeof a === "function" && !!a(void 0) || typeof a !== "function" && !!a;
      if (u) e[n] = d;
      else if (g) e[n] = o();
    } else {
      let d = a === void 0 && o != null, u = typeof a === "function" && !!a(o) || typeof a !== "function" && !!a;
      if (d || u) e[n] = o;
    }
  }, ye = (e) => e != null, we = (e) => e, Se = (e) => {
    if (e !== e) return "NaN";
    switch (e) {
      case 1 / 0:
        return "Infinity";
      case -1 / 0:
        return "-Infinity";
      default:
        return e;
    }
  }, ve = (e) => e.toISOString().replace(".000Z", "Z"), R = (e) => {
    if (e == null) return {};
    if (Array.isArray(e)) return e.filter((t) => t != null).map(R);
    if (typeof e === "object") {
      let t = {};
      for (let r of Object.keys(e)) {
        if (e[r] == null) continue;
        t[r] = R(e[r]);
      }
      return t;
    }
    return e;
  };
  Object.defineProperty(_, "collectBody", { enumerable: true, get: function() {
    return k.collectBody;
  } });
  Object.defineProperty(_, "extendedEncodeURIComponent", { enumerable: true, get: function() {
    return k.extendedEncodeURIComponent;
  } });
  Object.defineProperty(_, "resolvedPath", { enumerable: true, get: function() {
    return k.resolvedPath;
  } });
  _.Client = j;
  _.Command = T;
  _.NoOpLogger = Y;
  _.SENSITIVE_STRING = ee;
  _.ServiceException = I;
  _._json = R;
  _.convertMap = me;
  _.createAggregatedClient = te;
  _.decorateServiceException = B;
  _.emitWarningIfUnsupportedVersion = se;
  _.getArrayIfSingleItem = fe;
  _.getDefaultClientConfiguration = de;
  _.getDefaultExtensionConfiguration = U;
  _.getValueFromTextNode = G;
  _.isSerializableHeaderValue = he;
  _.loadConfigsForDefaultMode = ie;
  _.map = Z;
  _.resolveDefaultRuntimeConfig = ue;
  _.serializeDateTime = ve;
  _.serializeFloat = Se;
  _.take = pe;
  _.throwDefaultError = H;
  _.withBaseException = re;
  Object.keys(q).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(_, e)) Object.defineProperty(_, e, { enumerable: true, get: function() {
      return q[e];
    } });
  });
});
