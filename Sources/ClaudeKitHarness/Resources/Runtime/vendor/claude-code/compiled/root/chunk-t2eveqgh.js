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
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);
var chunk_t2eveqgh_exports = {};
__export(chunk_t2eveqgh_exports, {
  wnr: () => wnr
});
module.exports = __toCommonJS(chunk_t2eveqgh_exports);
var import_chunk_psv74hq2 = require("/$bunfs/root/chunk-psv74hq2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var gl = (0, import_chunk_w1d7ygsk.V)(function(fl) {
  Object.defineProperty(fl, "__esModule", { value: true });
  fl.VERSION = void 0;
  fl.VERSION = "0.208.0";
});
var x = (0, import_chunk_w1d7ygsk.V)(function(_l) {
  Object.defineProperty(_l, "__esModule", { value: true });
  _l.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = _l.DEFAULT_MAX_SEND_MESSAGE_LENGTH = _l.Propagate = _l.LogVerbosity = _l.Status = void 0;
  var ml;
  (function(e) {
    e[e.OK = 0] = "OK", e[e.CANCELLED = 1] = "CANCELLED", e[e.UNKNOWN = 2] = "UNKNOWN", e[e.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", e[e.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", e[e.NOT_FOUND = 5] = "NOT_FOUND", e[e.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", e[e.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", e[e.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", e[e.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", e[e.ABORTED = 10] = "ABORTED", e[e.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", e[e.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", e[e.INTERNAL = 13] = "INTERNAL", e[e.UNAVAILABLE = 14] = "UNAVAILABLE", e[e.DATA_LOSS = 15] = "DATA_LOSS", e[e.UNAUTHENTICATED = 16] = "UNAUTHENTICATED";
  })(ml || (_l.Status = ml = {}));
  var vl;
  (function(e) {
    e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.ERROR = 2] = "ERROR", e[e.NONE = 3] = "NONE";
  })(vl || (_l.LogVerbosity = vl = {}));
  var yl;
  (function(e) {
    e[e.DEADLINE = 1] = "DEADLINE", e[e.CENSUS_STATS_CONTEXT = 2] = "CENSUS_STATS_CONTEXT", e[e.CENSUS_TRACING_CONTEXT = 4] = "CENSUS_TRACING_CONTEXT", e[e.CANCELLATION = 8] = "CANCELLATION", e[e.DEFAULTS = 65535] = "DEFAULTS";
  })(yl || (_l.Propagate = yl = {}));
  _l.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
  _l.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4194304;
});
var ia = (0, import_chunk_w1d7ygsk.V)(function(bw, Fy) {
  Fy.exports = { name: "@grpc/grpc-js", version: "1.14.4", description: "gRPC Library for Node - pure JS implementation", homepage: "https://grpc.io/", repository: "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js", main: "build/src/index.js", engines: { node: ">=12.10.0" }, keywords: [], author: { name: "Google Inc." }, types: "build/src/index.d.ts", license: "Apache-2.0", devDependencies: { "@grpc/proto-loader": "file:../proto-loader", "@types/gulp": "^4.0.17", "@types/gulp-mocha": "0.0.37", "@types/lodash": "^4.14.202", "@types/mocha": "^10.0.6", "@types/ncp": "^2.0.8", "@types/node": ">=20.11.20", "@types/pify": "^5.0.4", "@types/semver": "^7.5.8", "@typescript-eslint/eslint-plugin": "^7.1.0", "@typescript-eslint/parser": "^7.1.0", "@typescript-eslint/typescript-estree": "^7.1.0", "clang-format": "^1.8.0", eslint: "^8.42.0", "eslint-config-prettier": "^8.8.0", "eslint-plugin-node": "^11.1.0", "eslint-plugin-prettier": "^4.2.1", execa: "^2.0.3", gulp: "^4.0.2", "gulp-mocha": "^6.0.0", lodash: "^4.17.21", madge: "^5.0.1", "mocha-jenkins-reporter": "^0.4.1", ncp: "^2.0.0", pify: "^4.0.1", prettier: "^2.8.8", rimraf: "^3.0.2", semver: "^7.6.0", "ts-node": "^10.9.2", typescript: "^5.3.3" }, contributors: [{ name: "Google Inc." }], scripts: { build: "npm run compile", clean: "rimraf ./build", compile: "tsc -p .", format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts', lint: "eslint src/*.ts test/*.ts", prepare: "npm run copy-protos && npm run generate-types && npm run generate-test-types && npm run compile", test: "gulp test", check: "npm run lint", fix: "eslint --fix src/*.ts test/*.ts", pretest: "npm run generate-types && npm run generate-test-types && npm run compile", posttest: "npm run check && madge -c ./build/src", "generate-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --includeDirs proto/ --include-dirs proto/ proto/xds/ proto/protoc-gen-validate/ -O src/generated/ --grpcLib ../index channelz.proto xds/service/orca/v3/orca.proto", "generate-test-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --include-dirs test/fixtures/ -O test/generated/ --grpcLib ../../src/index test_service.proto echo_service.proto", "copy-protos": "node ./copy-protos" }, dependencies: { "@grpc/proto-loader": "^0.8.0", "@js-sdsl/ordered-map": "^4.4.2" }, files: ["src/**/*.ts", "build/src/**/*.{js,d.ts,js.map}", "proto/**/*.proto", "proto/**/LICENSE", "LICENSE", "deps/envoy-api/envoy/api/v2/**/*.proto", "deps/envoy-api/envoy/config/**/*.proto", "deps/envoy-api/envoy/service/**/*.proto", "deps/envoy-api/envoy/type/**/*.proto", "deps/udpa/udpa/**/*.proto", "deps/googleapis/google/api/*.proto", "deps/googleapis/google/rpc/*.proto", "deps/protoc-gen-validate/validate/**/*.proto"] };
});
var K = (0, import_chunk_w1d7ygsk.V)(function(Rl) {
  var sa, na, aa, oa;
  Object.defineProperty(Rl, "__esModule", { value: true });
  Rl.log = Rl.setLoggerVerbosity = Rl.setLogger = Rl.getLogger = void 0;
  Rl.trace = Vy;
  Rl.isTracerEnabled = Tl;
  var _e = x(), Cl = (0, import_chunk_w1d7ygsk.ft)("process"), qy = ia().version, Uy = { error: (e, ...t) => {
    console.error("E " + e, ...t);
  }, info: (e, ...t) => {
    console.error("I " + e, ...t);
  }, debug: (e, ...t) => {
    console.error("D " + e, ...t);
  } }, gr = Uy, Rr = _e.LogVerbosity.ERROR, By = (na = (sa = process.env.GRPC_NODE_VERBOSITY) !== null && sa !== void 0 ? sa : process.env.GRPC_VERBOSITY) !== null && na !== void 0 ? na : "";
  switch (By.toUpperCase()) {
    case "DEBUG":
      Rr = _e.LogVerbosity.DEBUG;
      break;
    case "INFO":
      Rr = _e.LogVerbosity.INFO;
      break;
    case "ERROR":
      Rr = _e.LogVerbosity.ERROR;
      break;
    case "NONE":
      Rr = _e.LogVerbosity.NONE;
      break;
    default:
  }
  var zy = () => gr;
  Rl.getLogger = zy;
  var Hy = (e) => {
    gr = e;
  };
  Rl.setLogger = Hy;
  var Wy = (e) => {
    Rr = e;
  };
  Rl.setLoggerVerbosity = Wy;
  var jy = (e, ...t) => {
    let r;
    if (e >= Rr) {
      switch (e) {
        case _e.LogVerbosity.DEBUG:
          r = gr.debug;
          break;
        case _e.LogVerbosity.INFO:
          r = gr.info;
          break;
        case _e.LogVerbosity.ERROR:
          r = gr.error;
          break;
      }
      if (!r) r = gr.error;
      if (r) r.bind(gr)(...t);
    }
  };
  Rl.log = jy;
  var Gy = (oa = (aa = process.env.GRPC_NODE_TRACE) !== null && aa !== void 0 ? aa : process.env.GRPC_TRACE) !== null && oa !== void 0 ? oa : "", la = /* @__PURE__ */ new Set(), El = /* @__PURE__ */ new Set();
  for (let e of Gy.split(",")) if (e.startsWith("-")) El.add(e.substring(1));
  else la.add(e);
  var $y = la.has("all");
  function Vy(e, t, r) {
    if (Tl(t)) Rl.log(e, (/* @__PURE__ */ new Date()).toISOString() + " | v" + qy + " " + Cl.pid + " | " + t + " | " + r);
  }
  function Tl(e) {
    return !El.has(e) && ($y || la.has(e));
  }
});
var Qi = (0, import_chunk_w1d7ygsk.V)(function(bl) {
  Object.defineProperty(bl, "__esModule", { value: true });
  bl.getErrorMessage = Zy;
  bl.getErrorCode = e_;
  function Zy(e) {
    if (e instanceof Error) return e.message;
    else return String(e);
  }
  function e_(e) {
    if (typeof e === "object" && e !== null && "code" in e && typeof e.code === "number") return e.code;
    else return null;
  }
});
var ue = (0, import_chunk_w1d7ygsk.V)(function(Ml) {
  Object.defineProperty(Ml, "__esModule", { value: true });
  Ml.Metadata = void 0;
  var wl = K(), Al = x(), Pl = Qi(), i_ = /^[:0-9a-z_.-]+$/, s_ = /^[ -~]*$/;
  function n_(e) {
    return i_.test(e);
  }
  function a_(e) {
    return s_.test(e);
  }
  function Nl(e) {
    return e.endsWith("-bin");
  }
  function o_(e) {
    return !e.startsWith("grpc-");
  }
  function Zi(e) {
    return e.toLowerCase();
  }
  function Ol(e, t) {
    if (!n_(e)) throw Error('Metadata key "' + e + '" contains illegal characters');
    if (t !== null && t !== void 0) if (Nl(e)) {
      if (!Buffer.isBuffer(t)) throw Error("keys that end with '-bin' must have Buffer values");
    } else {
      if (Buffer.isBuffer(t)) throw Error("keys that don't end with '-bin' must have String values");
      if (!a_(t)) throw Error('Metadata string value "' + t + '" contains illegal characters');
    }
  }
  class es {
    constructor(e = {}) {
      this.internalRepr = /* @__PURE__ */ new Map(), this.opaqueData = /* @__PURE__ */ new Map(), this.options = e;
    }
    set(e, t) {
      e = Zi(e), Ol(e, t), this.internalRepr.set(e, [t]);
    }
    add(e, t) {
      e = Zi(e), Ol(e, t);
      let r = this.internalRepr.get(e);
      if (r === void 0) this.internalRepr.set(e, [t]);
      else r.push(t);
    }
    remove(e) {
      e = Zi(e), this.internalRepr.delete(e);
    }
    get(e) {
      return e = Zi(e), this.internalRepr.get(e) || [];
    }
    getMap() {
      let e = {};
      for (let [t, r] of this.internalRepr) if (r.length > 0) {
        let i = r[0];
        e[t] = Buffer.isBuffer(i) ? Buffer.from(i) : i;
      }
      return e;
    }
    clone() {
      let e = new es(this.options), t = e.internalRepr;
      for (let [r, i] of this.internalRepr) {
        let s = i.map((n) => {
          if (Buffer.isBuffer(n)) return Buffer.from(n);
          else return n;
        });
        t.set(r, s);
      }
      return e;
    }
    merge(e) {
      for (let [t, r] of e.internalRepr) {
        let i = (this.internalRepr.get(t) || []).concat(r);
        this.internalRepr.set(t, i);
      }
    }
    setOptions(e) {
      this.options = e;
    }
    getOptions() {
      return this.options;
    }
    toHttp2Headers() {
      let e = {};
      for (let [t, r] of this.internalRepr) {
        if (t.startsWith(":")) continue;
        e[t] = r.map(l_);
      }
      return e;
    }
    toJSON() {
      let e = {};
      for (let [t, r] of this.internalRepr) e[t] = r;
      return e;
    }
    setOpaque(e, t) {
      this.opaqueData.set(e, t);
    }
    getOpaque(e) {
      return this.opaqueData.get(e);
    }
    static fromHttp2Headers(e) {
      let t = new es();
      for (let r of Object.keys(e)) {
        if (r.charAt(0) === ":") continue;
        let i = e[r];
        try {
          if (Nl(r)) {
            if (Array.isArray(i)) i.forEach((s) => {
              t.add(r, Buffer.from(s, "base64"));
            });
            else if (i !== void 0) if (o_(r)) i.split(",").forEach((s) => {
              t.add(r, Buffer.from(s.trim(), "base64"));
            });
            else t.add(r, Buffer.from(i, "base64"));
          } else if (Array.isArray(i)) i.forEach((s) => {
            t.add(r, s);
          });
          else if (i !== void 0) t.add(r, i);
        } catch (s) {
          let n = `Failed to add metadata entry ${r}: ${i}. ${Pl.getErrorMessage(s)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
          wl.log(Al.LogVerbosity.ERROR, n);
        }
      }
      return t;
    }
  }
  Ml.Metadata = es;
  var l_ = (e) => Buffer.isBuffer(e) ? e.toString("base64") : e;
});
var rs = (0, import_chunk_w1d7ygsk.V)(function(xl) {
  Object.defineProperty(xl, "__esModule", { value: true });
  xl.CallCredentials = void 0;
  var br = ue();
  function c_(e) {
    return "getRequestHeaders" in e && typeof e.getRequestHeaders === "function";
  }
  class Or {
    static createFromMetadataGenerator(e) {
      return new ua(e);
    }
    static createFromGoogleCredential(e) {
      return Or.createFromMetadataGenerator((t, r) => {
        let i;
        if (c_(e)) i = e.getRequestHeaders(t.service_url);
        else i = new Promise((s, n) => {
          e.getRequestMetadata(t.service_url, (a, o) => {
            if (a) {
              n(a);
              return;
            }
            if (!o) {
              n(Error("Headers not set by metadata plugin"));
              return;
            }
            s(o);
          });
        });
        i.then((s) => {
          let n = new br.Metadata();
          for (let a of Object.keys(s)) n.add(a, s[a]);
          r(null, n);
        }, (s) => {
          r(s);
        });
      });
    }
    static createEmpty() {
      return new da();
    }
  }
  xl.CallCredentials = Or;
  class ts extends Or {
    constructor(e) {
      super();
      this.creds = e;
    }
    async generateMetadata(e) {
      let t = new br.Metadata(), r = await Promise.all(this.creds.map((i) => i.generateMetadata(e)));
      for (let i of r) t.merge(i);
      return t;
    }
    compose(e) {
      return new ts(this.creds.concat([e]));
    }
    _equals(e) {
      if (this === e) return true;
      if (e instanceof ts) return this.creds.every((t, r) => t._equals(e.creds[r]));
      else return false;
    }
  }
  class ua extends Or {
    constructor(e) {
      super();
      this.metadataGenerator = e;
    }
    generateMetadata(e) {
      return new Promise((t, r) => {
        this.metadataGenerator(e, (i, s) => {
          if (s !== void 0) t(s);
          else r(i);
        });
      });
    }
    compose(e) {
      return new ts([this, e]);
    }
    _equals(e) {
      if (this === e) return true;
      if (e instanceof ua) return this.metadataGenerator === e.metadataGenerator;
      else return false;
    }
  }
  class da extends Or {
    generateMetadata(e) {
      return Promise.resolve(new br.Metadata());
    }
    compose(e) {
      return e;
    }
    _equals(e) {
      return e instanceof da;
    }
  }
});
var fa = (0, import_chunk_w1d7ygsk.V)(function(Fl) {
  Object.defineProperty(Fl, "__esModule", { value: true });
  Fl.CIPHER_SUITES = void 0;
  Fl.getDefaultRootsData = u_;
  var Ll = (0, import_chunk_w1d7ygsk.ft)("fs");
  Fl.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
  var Dl = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH, ha = null;
  function u_() {
    if (Dl) {
      if (ha === null) ha = Ll.readFileSync(Dl);
      return ha;
    }
    return null;
  }
});
var we = (0, import_chunk_w1d7ygsk.V)(function(Bl) {
  Object.defineProperty(Bl, "__esModule", { value: true });
  Bl.parseUri = f_;
  Bl.splitHostPort = p_;
  Bl.combineHostPort = g_;
  Bl.uriToString = m_;
  var h_ = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
  function f_(e) {
    let t = h_.exec(e);
    if (t === null) return null;
    return { scheme: t[1], authority: t[2], path: t[3] };
  }
  var Ul = /^\d+$/;
  function p_(e) {
    if (e.startsWith("[")) {
      let t = e.indexOf("]");
      if (t === -1) return null;
      let r = e.substring(1, t);
      if (r.indexOf(":") === -1) return null;
      if (e.length > t + 1) if (e[t + 1] === ":") {
        let i = e.substring(t + 2);
        if (Ul.test(i)) return { host: r, port: +i };
        else return null;
      } else return null;
      else return { host: r };
    } else {
      let t = e.split(":");
      if (t.length === 2) if (Ul.test(t[1])) return { host: t[0], port: +t[1] };
      else return null;
      else return { host: e };
    }
  }
  function g_(e) {
    if (e.port === void 0) return e.host;
    else if (e.host.includes(":")) return `[${e.host}]:${e.port}`;
    else return `${e.host}:${e.port}`;
  }
  function m_(e) {
    let t = "";
    if (e.scheme !== void 0) t += e.scheme + ":";
    if (e.authority !== void 0) t += "//" + e.authority + "/";
    return t += e.path, t;
  }
});
var tt = (0, import_chunk_w1d7ygsk.V)(function(zl) {
  Object.defineProperty(zl, "__esModule", { value: true });
  zl.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = void 0;
  zl.registerResolver = C_;
  zl.registerDefaultScheme = E_;
  zl.createResolver = T_;
  zl.getDefaultAuthority = R_;
  zl.mapUriDefaultScheme = b_;
  var Ar = we();
  zl.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = "grpc.internal.config_selector";
  var wr = {}, pa = null;
  function C_(e, t) {
    wr[e] = t;
  }
  function E_(e) {
    pa = e;
  }
  function T_(e, t, r) {
    if (e.scheme !== void 0 && e.scheme in wr) return new wr[e.scheme](e, t, r);
    else throw Error(`No resolver could be created for target ${Ar.uriToString(e)}`);
  }
  function R_(e) {
    if (e.scheme !== void 0 && e.scheme in wr) return wr[e.scheme].getDefaultAuthority(e);
    else throw Error(`Invalid target ${Ar.uriToString(e)}`);
  }
  function b_(e) {
    if (e.scheme === void 0 || !(e.scheme in wr)) if (pa !== null) return { scheme: pa, authority: void 0, path: Ar.uriToString(e) };
    else return null;
    return e;
  }
});
var Mr = (0, import_chunk_w1d7ygsk.V)(function(Yl) {
  Object.defineProperty(Yl, "__esModule", { value: true });
  Yl.ChannelCredentials = void 0;
  Yl.createCertificateProviderChannelCredentials = M_;
  var ct = (0, import_chunk_w1d7ygsk.ft)("tls"), Wt = rs(), Pr = fa(), is = we(), Wl = tt(), jl = K(), Gl = x();
  function ga(e, t) {
    if (e && !(e instanceof Buffer)) throw TypeError(`${t}, if provided, must be a Buffer.`);
  }
  class Nr {
    compose(e) {
      return new ns(this, e);
    }
    static createSsl(e, t, r, i) {
      var s;
      if (ga(e, "Root certificate"), ga(t, "Private key"), ga(r, "Certificate chain"), t && !r) throw Error("Private key must be given with accompanying certificate chain");
      if (!t && r) throw Error("Certificate chain must be given with accompanying private key");
      let n = ct.createSecureContext({ ca: (s = e !== null && e !== void 0 ? e : Pr.getDefaultRootsData()) !== null && s !== void 0 ? s : void 0, key: t !== null && t !== void 0 ? t : void 0, cert: r !== null && r !== void 0 ? r : void 0, ciphers: Pr.CIPHER_SUITES });
      return new ss(n, i !== null && i !== void 0 ? i : {});
    }
    static createFromSecureContext(e, t) {
      return new ss(e, t !== null && t !== void 0 ? t : {});
    }
    static createInsecure() {
      return new ma();
    }
  }
  Yl.ChannelCredentials = Nr;
  class ma extends Nr {
    constructor() {
      super();
    }
    compose(e) {
      throw Error("Cannot compose insecure credentials");
    }
    _isSecure() {
      return false;
    }
    _equals(e) {
      return e instanceof ma;
    }
    _createSecureConnector(e, t, r) {
      return { connect(i) {
        return Promise.resolve({ socket: i, secure: false });
      }, waitForReady: () => Promise.resolve(), getCallCredentials: () => r !== null && r !== void 0 ? r : Wt.CallCredentials.createEmpty(), destroy() {
      } };
    }
  }
  function $l(e, t, r, i) {
    var s, n;
    let a = { secureContext: e }, o = r;
    if ("grpc.http_connect_target" in i) {
      let d = is.parseUri(i["grpc.http_connect_target"]);
      if (d) o = d;
    }
    let l = Wl.getDefaultAuthority(o), c = is.splitHostPort(l), u = (s = c === null || c === void 0 ? void 0 : c.host) !== null && s !== void 0 ? s : l;
    if (a.host = u, t.checkServerIdentity) a.checkServerIdentity = t.checkServerIdentity;
    if (t.rejectUnauthorized !== void 0) a.rejectUnauthorized = t.rejectUnauthorized;
    if (a.ALPNProtocols = ["h2"], i["grpc.ssl_target_name_override"]) {
      let d = i["grpc.ssl_target_name_override"], h = (n = a.checkServerIdentity) !== null && n !== void 0 ? n : ct.checkServerIdentity;
      a.checkServerIdentity = (m, f) => h(d, f), a.servername = d;
    } else a.servername = u;
    if (i["grpc-node.tls_enable_trace"]) a.enableTrace = true;
    return a;
  }
  class Vl {
    constructor(e, t) {
      this.connectionOptions = e, this.callCredentials = t;
    }
    connect(e) {
      let t = Object.assign({ socket: e }, this.connectionOptions);
      return new Promise((r, i) => {
        let s = ct.connect(t, () => {
          var n;
          if (((n = this.connectionOptions.rejectUnauthorized) !== null && n !== void 0 ? n : true) && !s.authorized) {
            i(s.authorizationError);
            return;
          }
          r({ socket: s, secure: true });
        });
        s.on("error", (n) => {
          i(n);
        });
      });
    }
    waitForReady() {
      return Promise.resolve();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {
    }
  }
  class ss extends Nr {
    constructor(e, t) {
      super();
      this.secureContext = e, this.verifyOptions = t;
    }
    _isSecure() {
      return true;
    }
    _equals(e) {
      if (this === e) return true;
      if (e instanceof ss) return this.secureContext === e.secureContext && this.verifyOptions.checkServerIdentity === e.verifyOptions.checkServerIdentity;
      else return false;
    }
    _createSecureConnector(e, t, r) {
      let i = $l(this.secureContext, this.verifyOptions, e, t);
      return new Vl(i, r !== null && r !== void 0 ? r : Wt.CallCredentials.createEmpty());
    }
  }
  class Ci extends Nr {
    constructor(e, t, r) {
      super();
      this.caCertificateProvider = e, this.identityCertificateProvider = t, this.verifyOptions = r, this.refcount = 0, this.latestCaUpdate = void 0, this.latestIdentityUpdate = void 0, this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this), this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this), this.secureContextWatchers = [];
    }
    _isSecure() {
      return true;
    }
    _equals(e) {
      var t, r;
      if (this === e) return true;
      if (e instanceof Ci) return this.caCertificateProvider === e.caCertificateProvider && this.identityCertificateProvider === e.identityCertificateProvider && ((t = this.verifyOptions) === null || t === void 0 ? void 0 : t.checkServerIdentity) === ((r = e.verifyOptions) === null || r === void 0 ? void 0 : r.checkServerIdentity);
      else return false;
    }
    ref() {
      var e;
      if (this.refcount === 0) this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener), (e = this.identityCertificateProvider) === null || e === void 0 || e.addIdentityCertificateListener(this.identityCertificateUpdateListener);
      this.refcount += 1;
    }
    unref() {
      var e;
      if (this.refcount -= 1, this.refcount === 0) this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener), (e = this.identityCertificateProvider) === null || e === void 0 || e.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
    _createSecureConnector(e, t, r) {
      return this.ref(), new Ci.SecureConnectorImpl(this, e, t, r !== null && r !== void 0 ? r : Wt.CallCredentials.createEmpty());
    }
    maybeUpdateWatchers() {
      if (this.hasReceivedUpdates()) {
        for (let e of this.secureContextWatchers) e(this.getLatestSecureContext());
        this.secureContextWatchers = [];
      }
    }
    handleCaCertificateUpdate(e) {
      this.latestCaUpdate = e, this.maybeUpdateWatchers();
    }
    handleIdentityCertitificateUpdate(e) {
      this.latestIdentityUpdate = e, this.maybeUpdateWatchers();
    }
    hasReceivedUpdates() {
      if (this.latestCaUpdate === void 0) return false;
      if (this.identityCertificateProvider && this.latestIdentityUpdate === void 0) return false;
      return true;
    }
    getSecureContext() {
      if (this.hasReceivedUpdates()) return Promise.resolve(this.getLatestSecureContext());
      else return new Promise((e) => {
        this.secureContextWatchers.push(e);
      });
    }
    getLatestSecureContext() {
      var e, t;
      if (!this.latestCaUpdate) return null;
      if (this.identityCertificateProvider !== null && !this.latestIdentityUpdate) return null;
      try {
        return ct.createSecureContext({ ca: this.latestCaUpdate.caCertificate, key: (e = this.latestIdentityUpdate) === null || e === void 0 ? void 0 : e.privateKey, cert: (t = this.latestIdentityUpdate) === null || t === void 0 ? void 0 : t.certificate, ciphers: Pr.CIPHER_SUITES });
      } catch (r) {
        return jl.log(Gl.LogVerbosity.ERROR, "Failed to createSecureContext with error " + r.message), null;
      }
    }
  }
  Ci.SecureConnectorImpl = class {
    constructor(e, t, r, i) {
      this.parent = e, this.channelTarget = t, this.options = r, this.callCredentials = i;
    }
    connect(e) {
      return new Promise((t, r) => {
        let i = this.parent.getLatestSecureContext();
        if (!i) {
          r(Error("Failed to load credentials"));
          return;
        }
        if (e.closed) r(Error("Socket closed while loading credentials"));
        let s = $l(i, this.parent.verifyOptions, this.channelTarget, this.options), n = Object.assign({ socket: e }, s), a = () => {
          r(Error("Socket closed"));
        }, o = (c) => {
          r(c);
        }, l = ct.connect(n, () => {
          var c;
          if (l.removeListener("close", a), l.removeListener("error", o), ((c = this.parent.verifyOptions.rejectUnauthorized) !== null && c !== void 0 ? c : true) && !l.authorized) {
            r(l.authorizationError);
            return;
          }
          t({ socket: l, secure: true });
        });
        l.once("close", a), l.once("error", o);
      });
    }
    async waitForReady() {
      await this.parent.getSecureContext();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {
      this.parent.unref();
    }
  };
  function M_(e, t, r) {
    return new Ci(e, t, r !== null && r !== void 0 ? r : {});
  }
  class ns extends Nr {
    constructor(e, t) {
      super();
      if (this.channelCredentials = e, this.callCredentials = t, !e._isSecure()) throw Error("Cannot compose insecure credentials");
    }
    compose(e) {
      let t = this.callCredentials.compose(e);
      return new ns(this.channelCredentials, t);
    }
    _isSecure() {
      return true;
    }
    _equals(e) {
      if (this === e) return true;
      if (e instanceof ns) return this.channelCredentials._equals(e.channelCredentials) && this.callCredentials._equals(e.callCredentials);
      else return false;
    }
    _createSecureConnector(e, t, r) {
      let i = this.callCredentials.compose(r !== null && r !== void 0 ? r : Wt.CallCredentials.createEmpty());
      return this.channelCredentials._createSecureConnector(e, t, i);
    }
  }
});
var Gt = (0, import_chunk_w1d7ygsk.V)(function(Zl) {
  Object.defineProperty(Zl, "__esModule", { value: true });
  Zl.createChildChannelControlHelper = x_;
  Zl.registerLoadBalancerType = k_;
  Zl.registerDefaultLoadBalancerType = D_;
  Zl.createLoadBalancer = L_;
  Zl.isLoadBalancerNameRegistered = F_;
  Zl.parseLoadBalancingConfig = Ql;
  Zl.getDefaultConfig = q_;
  Zl.selectLbConfigFromList = U_;
  var Jl = K(), Xl = x();
  function x_(e, t) {
    var r, i, s, n, a, o, l, c, u, d;
    return { createSubchannel: (i = (r = t.createSubchannel) === null || r === void 0 ? void 0 : r.bind(t)) !== null && i !== void 0 ? i : e.createSubchannel.bind(e), updateState: (n = (s = t.updateState) === null || s === void 0 ? void 0 : s.bind(t)) !== null && n !== void 0 ? n : e.updateState.bind(e), requestReresolution: (o = (a = t.requestReresolution) === null || a === void 0 ? void 0 : a.bind(t)) !== null && o !== void 0 ? o : e.requestReresolution.bind(e), addChannelzChild: (c = (l = t.addChannelzChild) === null || l === void 0 ? void 0 : l.bind(t)) !== null && c !== void 0 ? c : e.addChannelzChild.bind(e), removeChannelzChild: (d = (u = t.removeChannelzChild) === null || u === void 0 ? void 0 : u.bind(t)) !== null && d !== void 0 ? d : e.removeChannelzChild.bind(e) };
  }
  var jt = {}, Ei = null;
  function k_(e, t, r) {
    jt[e] = { LoadBalancer: t, LoadBalancingConfig: r };
  }
  function D_(e) {
    Ei = e;
  }
  function L_(e, t) {
    let r = e.getLoadBalancerName();
    if (r in jt) return new jt[r].LoadBalancer(t);
    else return null;
  }
  function F_(e) {
    return e in jt;
  }
  function Ql(e) {
    let t = Object.keys(e);
    if (t.length !== 1) throw Error("Provided load balancing config has multiple conflicting entries");
    let r = t[0];
    if (r in jt) try {
      return jt[r].LoadBalancingConfig.createFromJson(e[r]);
    } catch (i) {
      throw Error(`${r}: ${i.message}`);
    }
    else throw Error(`Unrecognized load balancing config name ${r}`);
  }
  function q_() {
    if (!Ei) throw Error("No default load balancer type registered");
    return new jt[Ei].LoadBalancingConfig();
  }
  function U_(e, t = false) {
    for (let r of e) try {
      return Ql(r);
    } catch (i) {
      Jl.log(Xl.LogVerbosity.DEBUG, "Config parsing failed with error", i.message);
      continue;
    }
    if (t) if (Ei) return new jt[Ei].LoadBalancingConfig();
    else return null;
    else return null;
  }
});
var va = (0, import_chunk_w1d7ygsk.V)(function(ic) {
  Object.defineProperty(ic, "__esModule", { value: true });
  ic.validateRetryThrottling = tc;
  ic.validateServiceConfig = rc;
  ic.extractAndSelectServiceConfig = iS;
  var ec = (0, import_chunk_w1d7ygsk.ft)("os"), $t = x(), as = /^\d+(\.\d{1,9})?s$/, Y_ = "node";
  function K_(e) {
    if ("service" in e && e.service !== "") {
      if (typeof e.service !== "string") throw Error(`Invalid method config name: invalid service: expected type string, got ${typeof e.service}`);
      if ("method" in e && e.method !== "") {
        if (typeof e.method !== "string") throw Error(`Invalid method config name: invalid method: expected type string, got ${typeof e.service}`);
        return { service: e.service, method: e.method };
      } else return { service: e.service };
    } else {
      if ("method" in e && e.method !== void 0) throw Error("Invalid method config name: method set with empty or unset service");
      return {};
    }
  }
  function J_(e) {
    if (!("maxAttempts" in e) || !Number.isInteger(e.maxAttempts) || e.maxAttempts < 2) throw Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
    if (!("initialBackoff" in e) || typeof e.initialBackoff !== "string" || !as.test(e.initialBackoff)) throw Error("Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s");
    if (!("maxBackoff" in e) || typeof e.maxBackoff !== "string" || !as.test(e.maxBackoff)) throw Error("Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s");
    if (!("backoffMultiplier" in e) || typeof e.backoffMultiplier !== "number" || e.backoffMultiplier <= 0) throw Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
    if (!("retryableStatusCodes" in e && Array.isArray(e.retryableStatusCodes))) throw Error("Invalid method config retry policy: retryableStatusCodes is required");
    if (e.retryableStatusCodes.length === 0) throw Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
    for (let t of e.retryableStatusCodes) if (typeof t === "number") {
      if (!Object.values($t.Status).includes(t)) throw Error("Invalid method config retry policy: retryableStatusCodes value not in status code range");
    } else if (typeof t === "string") {
      if (!Object.values($t.Status).includes(t.toUpperCase())) throw Error("Invalid method config retry policy: retryableStatusCodes value not a status code name");
    } else throw Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
    return { maxAttempts: e.maxAttempts, initialBackoff: e.initialBackoff, maxBackoff: e.maxBackoff, backoffMultiplier: e.backoffMultiplier, retryableStatusCodes: e.retryableStatusCodes };
  }
  function X_(e) {
    if (!("maxAttempts" in e) || !Number.isInteger(e.maxAttempts) || e.maxAttempts < 2) throw Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
    if ("hedgingDelay" in e && (typeof e.hedgingDelay !== "string" || !as.test(e.hedgingDelay))) throw Error("Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s");
    if ("nonFatalStatusCodes" in e && Array.isArray(e.nonFatalStatusCodes)) for (let r of e.nonFatalStatusCodes) if (typeof r === "number") {
      if (!Object.values($t.Status).includes(r)) throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not in status code range");
    } else if (typeof r === "string") {
      if (!Object.values($t.Status).includes(r.toUpperCase())) throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not a status code name");
    } else throw Error("Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number");
    let t = { maxAttempts: e.maxAttempts };
    if (e.hedgingDelay) t.hedgingDelay = e.hedgingDelay;
    if (e.nonFatalStatusCodes) t.nonFatalStatusCodes = e.nonFatalStatusCodes;
    return t;
  }
  function Z_(e) {
    var t;
    let r = { name: [] };
    if (!("name" in e) || !Array.isArray(e.name)) throw Error("Invalid method config: invalid name array");
    for (let i of e.name) r.name.push(K_(i));
    if ("waitForReady" in e) {
      if (typeof e.waitForReady !== "boolean") throw Error("Invalid method config: invalid waitForReady");
      r.waitForReady = e.waitForReady;
    }
    if ("timeout" in e) if (typeof e.timeout === "object") {
      if (!("seconds" in e.timeout) || typeof e.timeout.seconds !== "number") throw Error("Invalid method config: invalid timeout.seconds");
      if (!("nanos" in e.timeout) || typeof e.timeout.nanos !== "number") throw Error("Invalid method config: invalid timeout.nanos");
      r.timeout = e.timeout;
    } else if (typeof e.timeout === "string" && as.test(e.timeout)) {
      let i = e.timeout.substring(0, e.timeout.length - 1).split(".");
      r.timeout = { seconds: i[0] | 0, nanos: ((t = i[1]) !== null && t !== void 0 ? t : 0) | 0 };
    } else throw Error("Invalid method config: invalid timeout");
    if ("maxRequestBytes" in e) {
      if (typeof e.maxRequestBytes !== "number") throw Error("Invalid method config: invalid maxRequestBytes");
      r.maxRequestBytes = e.maxRequestBytes;
    }
    if ("maxResponseBytes" in e) {
      if (typeof e.maxResponseBytes !== "number") throw Error("Invalid method config: invalid maxRequestBytes");
      r.maxResponseBytes = e.maxResponseBytes;
    }
    if ("retryPolicy" in e) if ("hedgingPolicy" in e) throw Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified");
    else r.retryPolicy = J_(e.retryPolicy);
    else if ("hedgingPolicy" in e) r.hedgingPolicy = X_(e.hedgingPolicy);
    return r;
  }
  function tc(e) {
    if (!("maxTokens" in e) || typeof e.maxTokens !== "number" || e.maxTokens <= 0 || e.maxTokens > 1e3) throw Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
    if (!("tokenRatio" in e) || typeof e.tokenRatio !== "number" || e.tokenRatio <= 0) throw Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
    return { maxTokens: +e.maxTokens.toFixed(3), tokenRatio: +e.tokenRatio.toFixed(3) };
  }
  function eS(e) {
    if (!(typeof e === "object" && e !== null)) throw Error(`Invalid loadBalancingConfig: unexpected type ${typeof e}`);
    let t = Object.keys(e);
    if (t.length > 1) throw Error(`Invalid loadBalancingConfig: unexpected multiple keys ${t}`);
    if (t.length === 0) throw Error("Invalid loadBalancingConfig: load balancing policy name required");
    return { [t[0]]: e[t[0]] };
  }
  function rc(e) {
    let t = { loadBalancingConfig: [], methodConfig: [] };
    if ("loadBalancingPolicy" in e) if (typeof e.loadBalancingPolicy === "string") t.loadBalancingPolicy = e.loadBalancingPolicy;
    else throw Error("Invalid service config: invalid loadBalancingPolicy");
    if ("loadBalancingConfig" in e) if (Array.isArray(e.loadBalancingConfig)) for (let i of e.loadBalancingConfig) t.loadBalancingConfig.push(eS(i));
    else throw Error("Invalid service config: invalid loadBalancingConfig");
    if ("methodConfig" in e) {
      if (Array.isArray(e.methodConfig)) for (let i of e.methodConfig) t.methodConfig.push(Z_(i));
    }
    if ("retryThrottling" in e) t.retryThrottling = tc(e.retryThrottling);
    let r = [];
    for (let i of t.methodConfig) for (let s of i.name) {
      for (let n of r) if (s.service === n.service && s.method === n.method) throw Error(`Invalid service config: duplicate name ${s.service}/${s.method}`);
      r.push(s);
    }
    return t;
  }
  function tS(e) {
    if (!("serviceConfig" in e)) throw Error("Invalid service config choice: missing service config");
    let t = { serviceConfig: rc(e.serviceConfig) };
    if ("clientLanguage" in e) if (Array.isArray(e.clientLanguage)) {
      t.clientLanguage = [];
      for (let i of e.clientLanguage) if (typeof i === "string") t.clientLanguage.push(i);
      else throw Error("Invalid service config choice: invalid clientLanguage");
    } else throw Error("Invalid service config choice: invalid clientLanguage");
    if ("clientHostname" in e) if (Array.isArray(e.clientHostname)) {
      t.clientHostname = [];
      for (let i of e.clientHostname) if (typeof i === "string") t.clientHostname.push(i);
      else throw Error("Invalid service config choice: invalid clientHostname");
    } else throw Error("Invalid service config choice: invalid clientHostname");
    if ("percentage" in e) if (typeof e.percentage === "number" && 0 <= e.percentage && e.percentage <= 100) t.percentage = e.percentage;
    else throw Error("Invalid service config choice: invalid percentage");
    let r = ["clientLanguage", "percentage", "clientHostname", "serviceConfig"];
    for (let i in e) if (!r.includes(i)) throw Error(`Invalid service config choice: unexpected field ${i}`);
    return t;
  }
  function rS(e, t) {
    if (!Array.isArray(e)) throw Error("Invalid service config list");
    for (let r of e) {
      let i = tS(r);
      if (typeof i.percentage === "number" && t > i.percentage) continue;
      if (Array.isArray(i.clientHostname)) {
        let s = false;
        for (let n of i.clientHostname) if (n === ec.hostname()) s = true;
        if (!s) continue;
      }
      if (Array.isArray(i.clientLanguage)) {
        let s = false;
        for (let n of i.clientLanguage) if (n === Y_) s = true;
        if (!s) continue;
      }
      return i.serviceConfig;
    }
    throw Error("No matching service config found");
  }
  function iS(e, t) {
    for (let r of e) if (r.length > 0 && r[0].startsWith("grpc_config=")) {
      let i = r.join("").substring(12), s = JSON.parse(i);
      return rS(s, t);
    }
    return null;
  }
});
var Ae = (0, import_chunk_w1d7ygsk.V)(function(nc) {
  Object.defineProperty(nc, "__esModule", { value: true });
  nc.ConnectivityState = void 0;
  var sc;
  (function(e) {
    e[e.IDLE = 0] = "IDLE", e[e.CONNECTING = 1] = "CONNECTING", e[e.READY = 2] = "READY", e[e.TRANSIENT_FAILURE = 3] = "TRANSIENT_FAILURE", e[e.SHUTDOWN = 4] = "SHUTDOWN";
  })(sc || (nc.ConnectivityState = sc = {}));
});
var kt = (0, import_chunk_w1d7ygsk.V)(function(dc) {
  Object.defineProperty(dc, "__esModule", { value: true });
  dc.QueuePicker = dc.UnavailablePicker = dc.PickResultType = void 0;
  var oc = ue(), lc = x(), os;
  (function(e) {
    e[e.COMPLETE = 0] = "COMPLETE", e[e.QUEUE = 1] = "QUEUE", e[e.TRANSIENT_FAILURE = 2] = "TRANSIENT_FAILURE", e[e.DROP = 3] = "DROP";
  })(os || (dc.PickResultType = os = {}));
  class cc {
    constructor(e) {
      this.status = Object.assign({ code: lc.Status.UNAVAILABLE, details: "No connection established", metadata: new oc.Metadata() }, e);
    }
    pick(e) {
      return { pickResultType: os.TRANSIENT_FAILURE, subchannel: null, status: this.status, onCallStarted: null, onCallEnded: null };
    }
  }
  dc.UnavailablePicker = cc;
  class uc {
    constructor(e, t) {
      this.loadBalancer = e, this.childPicker = t, this.calledExitIdle = false;
    }
    pick(e) {
      if (!this.calledExitIdle) process.nextTick(() => {
        this.loadBalancer.exitIdle();
      }), this.calledExitIdle = true;
      if (this.childPicker) return this.childPicker.pick(e);
      else return { pickResultType: os.QUEUE, subchannel: null, status: null, onCallStarted: null, onCallEnded: null };
    }
  }
  dc.QueuePicker = uc;
});
var Ir = (0, import_chunk_w1d7ygsk.V)(function(gc) {
  Object.defineProperty(gc, "__esModule", { value: true });
  gc.BackoffTimeout = void 0;
  var fc = x(), pc = K(), cS = "backoff", uS = 1e3, dS = 1.6, hS = 12e4, fS = 0.2;
  function pS(e, t) {
    return Math.random() * (t - e) + e;
  }
  class ls {
    constructor(e, t) {
      if (this.callback = e, this.initialDelay = uS, this.multiplier = dS, this.maxDelay = hS, this.jitter = fS, this.running = false, this.hasRef = true, this.startTime = /* @__PURE__ */ new Date(), this.endTime = /* @__PURE__ */ new Date(), this.id = ls.getNextId(), t) {
        if (t.initialDelay) this.initialDelay = t.initialDelay;
        if (t.multiplier) this.multiplier = t.multiplier;
        if (t.jitter) this.jitter = t.jitter;
        if (t.maxDelay) this.maxDelay = t.maxDelay;
      }
      this.trace("constructed initialDelay=" + this.initialDelay + " multiplier=" + this.multiplier + " jitter=" + this.jitter + " maxDelay=" + this.maxDelay), this.nextDelay = this.initialDelay, this.timerId = setTimeout(() => {
      }, 0), clearTimeout(this.timerId);
    }
    static getNextId() {
      return this.nextId++;
    }
    trace(e) {
      pc.trace(fc.LogVerbosity.DEBUG, cS, "{" + this.id + "} " + e);
    }
    runTimer(e) {
      var t, r;
      if (this.trace("runTimer(delay=" + e + ")"), this.endTime = this.startTime, this.endTime.setMilliseconds(this.endTime.getMilliseconds() + e), clearTimeout(this.timerId), this.timerId = setTimeout(() => {
        this.trace("timer fired"), this.running = false, this.callback();
      }, e), !this.hasRef) (r = (t = this.timerId).unref) === null || r === void 0 || r.call(t);
    }
    runOnce() {
      this.trace("runOnce()"), this.running = true, this.startTime = /* @__PURE__ */ new Date(), this.runTimer(this.nextDelay);
      let e = Math.min(this.nextDelay * this.multiplier, this.maxDelay), t = e * this.jitter;
      this.nextDelay = e + pS(-t, t);
    }
    stop() {
      this.trace("stop()"), clearTimeout(this.timerId), this.running = false;
    }
    reset() {
      if (this.trace("reset() running=" + this.running), this.nextDelay = this.initialDelay, this.running) {
        let e = /* @__PURE__ */ new Date(), t = this.startTime;
        if (t.setMilliseconds(t.getMilliseconds() + this.nextDelay), clearTimeout(this.timerId), e < t) this.runTimer(t.getTime() - e.getTime());
        else this.running = false;
      }
    }
    isRunning() {
      return this.running;
    }
    ref() {
      var e, t;
      this.hasRef = true, (t = (e = this.timerId).ref) === null || t === void 0 || t.call(e);
    }
    unref() {
      var e, t;
      this.hasRef = false, (t = (e = this.timerId).unref) === null || t === void 0 || t.call(e);
    }
    getEndTime() {
      return this.endTime;
    }
  }
  gc.BackoffTimeout = ls;
  ls.nextId = 0;
});
var cs = (0, import_chunk_w1d7ygsk.V)(function(Sc) {
  Object.defineProperty(Sc, "__esModule", { value: true });
  Sc.ChildLoadBalancerHandler = void 0;
  var vc = Gt(), yc = Ae(), gS = "child_load_balancer_helper";
  class _c {
    constructor(e) {
      this.channelControlHelper = e, this.currentChild = null, this.pendingChild = null, this.latestConfig = null, this.ChildPolicyHelper = class {
        constructor(t) {
          this.parent = t, this.child = null;
        }
        createSubchannel(t, r) {
          return this.parent.channelControlHelper.createSubchannel(t, r);
        }
        updateState(t, r, i) {
          var s;
          if (this.calledByPendingChild()) {
            if (t === yc.ConnectivityState.CONNECTING) return;
            (s = this.parent.currentChild) === null || s === void 0 || s.destroy(), this.parent.currentChild = this.parent.pendingChild, this.parent.pendingChild = null;
          } else if (!this.calledByCurrentChild()) return;
          this.parent.channelControlHelper.updateState(t, r, i);
        }
        requestReresolution() {
          var t;
          let r = (t = this.parent.pendingChild) !== null && t !== void 0 ? t : this.parent.currentChild;
          if (this.child === r) this.parent.channelControlHelper.requestReresolution();
        }
        setChild(t) {
          this.child = t;
        }
        addChannelzChild(t) {
          this.parent.channelControlHelper.addChannelzChild(t);
        }
        removeChannelzChild(t) {
          this.parent.channelControlHelper.removeChannelzChild(t);
        }
        calledByPendingChild() {
          return this.child === this.parent.pendingChild;
        }
        calledByCurrentChild() {
          return this.child === this.parent.currentChild;
        }
      };
    }
    configUpdateRequiresNewPolicyInstance(e, t) {
      return e.getLoadBalancerName() !== t.getLoadBalancerName();
    }
    updateAddressList(e, t, r, i) {
      let s;
      if (this.currentChild === null || this.latestConfig === null || this.configUpdateRequiresNewPolicyInstance(this.latestConfig, t)) {
        let n = new this.ChildPolicyHelper(this), a = vc.createLoadBalancer(t, n);
        if (n.setChild(a), this.currentChild === null) this.currentChild = a, s = this.currentChild;
        else {
          if (this.pendingChild) this.pendingChild.destroy();
          this.pendingChild = a, s = this.pendingChild;
        }
      } else if (this.pendingChild === null) s = this.currentChild;
      else s = this.pendingChild;
      return this.latestConfig = t, s.updateAddressList(e, t, r, i);
    }
    exitIdle() {
      if (this.currentChild) {
        if (this.currentChild.exitIdle(), this.pendingChild) this.pendingChild.exitIdle();
      }
    }
    resetBackoff() {
      if (this.currentChild) {
        if (this.currentChild.resetBackoff(), this.pendingChild) this.pendingChild.resetBackoff();
      }
    }
    destroy() {
      if (this.currentChild) this.currentChild.destroy(), this.currentChild = null;
      if (this.pendingChild) this.pendingChild.destroy(), this.pendingChild = null;
    }
    getTypeName() {
      return gS;
    }
  }
  Sc.ChildLoadBalancerHandler = _c;
});
var kc = (0, import_chunk_w1d7ygsk.V)(function(Ic) {
  Object.defineProperty(Ic, "__esModule", { value: true });
  Ic.ResolvingLoadBalancer = void 0;
  var Tc = Gt(), Rc = va(), G = Ae(), us = tt(), ut = kt(), bc = Ir(), xr = x(), Oc = ue(), wc = K(), Ac = x(), Pc = we(), Nc = cs(), mS = "resolving_load_balancer";
  function Ec(e) {
    wc.trace(Ac.LogVerbosity.DEBUG, mS, e);
  }
  var vS = ["SERVICE_AND_METHOD", "SERVICE", "EMPTY"];
  function yS(e, t, r, i) {
    for (let s of r.name) switch (i) {
      case "EMPTY":
        if (!s.service && !s.method) return true;
        break;
      case "SERVICE":
        if (s.service === e && !s.method) return true;
        break;
      case "SERVICE_AND_METHOD":
        if (s.service === e && s.method === t) return true;
    }
    return false;
  }
  function _S(e, t, r, i) {
    for (let s of r) if (yS(e, t, s, i)) return s;
    return null;
  }
  function SS(e) {
    return { invoke(t, r) {
      var i, s;
      let n = t.split("/").filter((l) => l.length > 0), a = (i = n[0]) !== null && i !== void 0 ? i : "", o = (s = n[1]) !== null && s !== void 0 ? s : "";
      if (e && e.methodConfig) for (let l of vS) {
        let c = _S(a, o, e.methodConfig, l);
        if (c) return { methodConfig: c, pickInformation: {}, status: xr.Status.OK, dynamicFilterFactories: [] };
      }
      return { methodConfig: { name: [] }, pickInformation: {}, status: xr.Status.OK, dynamicFilterFactories: [] };
    }, unref() {
    } };
  }
  class Mc {
    constructor(e, t, r, i, s) {
      if (this.target = e, this.channelControlHelper = t, this.channelOptions = r, this.onSuccessfulResolution = i, this.onFailedResolution = s, this.latestChildState = G.ConnectivityState.IDLE, this.latestChildPicker = new ut.QueuePicker(this), this.latestChildErrorMessage = null, this.currentState = G.ConnectivityState.IDLE, this.previousServiceConfig = null, this.continueResolving = false, r["grpc.service_config"]) this.defaultServiceConfig = Rc.validateServiceConfig(JSON.parse(r["grpc.service_config"]));
      else this.defaultServiceConfig = { loadBalancingConfig: [], methodConfig: [] };
      this.updateState(G.ConnectivityState.IDLE, new ut.QueuePicker(this), null), this.childLoadBalancer = new Nc.ChildLoadBalancerHandler({ createSubchannel: t.createSubchannel.bind(t), requestReresolution: () => {
        if (this.backoffTimeout.isRunning()) Ec("requestReresolution delayed by backoff timer until " + this.backoffTimeout.getEndTime().toISOString()), this.continueResolving = true;
        else this.updateResolution();
      }, updateState: (a, o, l) => {
        this.latestChildState = a, this.latestChildPicker = o, this.latestChildErrorMessage = l, this.updateState(a, o, l);
      }, addChannelzChild: t.addChannelzChild.bind(t), removeChannelzChild: t.removeChannelzChild.bind(t) }), this.innerResolver = us.createResolver(e, this.handleResolverResult.bind(this), r);
      let n = { initialDelay: r["grpc.initial_reconnect_backoff_ms"], maxDelay: r["grpc.max_reconnect_backoff_ms"] };
      this.backoffTimeout = new bc.BackoffTimeout(() => {
        if (this.continueResolving) this.updateResolution(), this.continueResolving = false;
        else this.updateState(this.latestChildState, this.latestChildPicker, this.latestChildErrorMessage);
      }, n), this.backoffTimeout.unref();
    }
    handleResolverResult(e, t, r, i) {
      var s, n;
      this.backoffTimeout.stop(), this.backoffTimeout.reset();
      let a = true, o = null;
      if (r === null) o = this.defaultServiceConfig;
      else if (r.ok) o = r.value;
      else if (this.previousServiceConfig !== null) o = this.previousServiceConfig;
      else a = false, this.handleResolutionFailure(r.error);
      if (o !== null) {
        let l = (s = o === null || o === void 0 ? void 0 : o.loadBalancingConfig) !== null && s !== void 0 ? s : [], c = Tc.selectLbConfigFromList(l, true);
        if (c === null) a = false, this.handleResolutionFailure({ code: xr.Status.UNAVAILABLE, details: "All load balancer options in service config are not compatible", metadata: new Oc.Metadata() });
        else a = this.childLoadBalancer.updateAddressList(e, c, Object.assign(Object.assign({}, this.channelOptions), t), i);
      }
      if (a) this.onSuccessfulResolution(o, (n = t[us.CHANNEL_ARGS_CONFIG_SELECTOR_KEY]) !== null && n !== void 0 ? n : SS(o));
      return a;
    }
    updateResolution() {
      if (this.innerResolver.updateResolution(), this.currentState === G.ConnectivityState.IDLE) this.updateState(G.ConnectivityState.CONNECTING, this.latestChildPicker, this.latestChildErrorMessage);
      this.backoffTimeout.runOnce();
    }
    updateState(e, t, r) {
      if (Ec(Pc.uriToString(this.target) + " " + G.ConnectivityState[this.currentState] + " -> " + G.ConnectivityState[e]), e === G.ConnectivityState.IDLE) t = new ut.QueuePicker(this, t);
      this.currentState = e, this.channelControlHelper.updateState(e, t, r);
    }
    handleResolutionFailure(e) {
      if (this.latestChildState === G.ConnectivityState.IDLE) this.updateState(G.ConnectivityState.TRANSIENT_FAILURE, new ut.UnavailablePicker(e), e.details), this.onFailedResolution(e);
    }
    exitIdle() {
      if (this.currentState === G.ConnectivityState.IDLE || this.currentState === G.ConnectivityState.TRANSIENT_FAILURE) if (this.backoffTimeout.isRunning()) this.continueResolving = true;
      else this.updateResolution();
      this.childLoadBalancer.exitIdle();
    }
    updateAddressList(e, t) {
      throw Error("updateAddressList not supported on ResolvingLoadBalancer");
    }
    resetBackoff() {
      this.backoffTimeout.reset(), this.childLoadBalancer.resetBackoff();
    }
    destroy() {
      this.childLoadBalancer.destroy(), this.innerResolver.destroy(), this.backoffTimeout.reset(), this.backoffTimeout.stop(), this.latestChildState = G.ConnectivityState.IDLE, this.latestChildPicker = new ut.QueuePicker(this), this.currentState = G.ConnectivityState.IDLE, this.previousServiceConfig = null, this.continueResolving = false;
    }
    getTypeName() {
      return "resolving_load_balancer";
    }
  }
  Ic.ResolvingLoadBalancer = Mc;
});
var Fc = (0, import_chunk_w1d7ygsk.V)(function(Dc) {
  Object.defineProperty(Dc, "__esModule", { value: true });
  Dc.recognizedOptions = void 0;
  Dc.channelOptionsEqual = CS;
  Dc.recognizedOptions = { "grpc.ssl_target_name_override": true, "grpc.primary_user_agent": true, "grpc.secondary_user_agent": true, "grpc.default_authority": true, "grpc.keepalive_time_ms": true, "grpc.keepalive_timeout_ms": true, "grpc.keepalive_permit_without_calls": true, "grpc.service_config": true, "grpc.max_concurrent_streams": true, "grpc.initial_reconnect_backoff_ms": true, "grpc.max_reconnect_backoff_ms": true, "grpc.use_local_subchannel_pool": true, "grpc.max_send_message_length": true, "grpc.max_receive_message_length": true, "grpc.enable_http_proxy": true, "grpc.enable_channelz": true, "grpc.dns_min_time_between_resolutions_ms": true, "grpc.enable_retries": true, "grpc.per_rpc_retry_buffer_size": true, "grpc.retry_buffer_size": true, "grpc.max_connection_age_ms": true, "grpc.max_connection_age_grace_ms": true, "grpc-node.max_session_memory": true, "grpc.service_config_disable_resolution": true, "grpc.client_idle_timeout_ms": true, "grpc-node.tls_enable_trace": true, "grpc.lb.ring_hash.ring_size_cap": true, "grpc-node.retry_max_attempts_limit": true, "grpc-node.flow_control_window": true, "grpc.server_call_metric_recording": true };
  function CS(e, t) {
    let r = Object.keys(e).sort(), i = Object.keys(t).sort();
    if (r.length !== i.length) return false;
    for (let s = 0; s < r.length; s += 1) {
      if (r[s] !== i[s]) return false;
      if (e[r[s]] !== t[i[s]]) return false;
    }
    return true;
  }
});
var Pe = (0, import_chunk_w1d7ygsk.V)(function(zc) {
  Object.defineProperty(zc, "__esModule", { value: true });
  zc.EndpointMap = void 0;
  zc.isTcpSubchannelAddress = Ri;
  zc.subchannelAddressEqual = hs;
  zc.subchannelAddressToString = qc;
  zc.stringToSubchannelAddress = RS;
  zc.endpointEqual = bS;
  zc.endpointToString = OS;
  zc.endpointHasAddress = Uc;
  var ds = (0, import_chunk_w1d7ygsk.ft)("net");
  function Ri(e) {
    return "port" in e;
  }
  function hs(e, t) {
    if (!e && !t) return true;
    if (!e || !t) return false;
    if (Ri(e)) return Ri(t) && e.host === t.host && e.port === t.port;
    else return !Ri(t) && e.path === t.path;
  }
  function qc(e) {
    if (Ri(e)) if (ds.isIPv6(e.host)) return "[" + e.host + "]:" + e.port;
    else return e.host + ":" + e.port;
    else return e.path;
  }
  var TS = 443;
  function RS(e, t) {
    if (ds.isIP(e)) return { host: e, port: t !== null && t !== void 0 ? t : TS };
    else return { path: e };
  }
  function bS(e, t) {
    if (e.addresses.length !== t.addresses.length) return false;
    for (let r = 0; r < e.addresses.length; r++) if (!hs(e.addresses[r], t.addresses[r])) return false;
    return true;
  }
  function OS(e) {
    return "[" + e.addresses.map(qc).join(", ") + "]";
  }
  function Uc(e, t) {
    for (let r of e.addresses) if (hs(r, t)) return true;
    return false;
  }
  function Ti(e, t) {
    if (e.addresses.length !== t.addresses.length) return false;
    for (let r of e.addresses) {
      let i = false;
      for (let s of t.addresses) if (hs(r, s)) {
        i = true;
        break;
      }
      if (!i) return false;
    }
    return true;
  }
  class Bc {
    constructor() {
      this.map = /* @__PURE__ */ new Set();
    }
    get size() {
      return this.map.size;
    }
    getForSubchannelAddress(e) {
      for (let t of this.map) if (Uc(t.key, e)) return t.value;
      return;
    }
    deleteMissing(e) {
      let t = [];
      for (let r of this.map) {
        let i = false;
        for (let s of e) if (Ti(s, r.key)) i = true;
        if (!i) t.push(r.value), this.map.delete(r);
      }
      return t;
    }
    get(e) {
      for (let t of this.map) if (Ti(e, t.key)) return t.value;
      return;
    }
    set(e, t) {
      for (let r of this.map) if (Ti(e, r.key)) {
        r.value = t;
        return;
      }
      this.map.add({ key: e, value: t });
    }
    delete(e) {
      for (let t of this.map) if (Ti(e, t.key)) {
        this.map.delete(t);
        return;
      }
    }
    has(e) {
      for (let t of this.map) if (Ti(e, t.key)) return true;
      return false;
    }
    clear() {
      this.map.clear();
    }
    *keys() {
      for (let e of this.map) yield e.key;
    }
    *values() {
      for (let e of this.map) yield e.value;
    }
    *entries() {
      for (let e of this.map) yield [e.key, e.value];
    }
  }
  zc.EndpointMap = Bc;
});
var Xc = (0, import_chunk_w1d7ygsk.V)(function(Jc) {
  Object.defineProperty(Jc, "t", { value: true });
  class ya {
    constructor(e, t, r = 1) {
      this.i = void 0, this.h = void 0, this.o = void 0, this.u = e, this.l = t, this.p = r;
    }
    I() {
      let e = this, t = e.o.o === e;
      if (t && e.p === 1) e = e.h;
      else if (e.i) {
        e = e.i;
        while (e.h) e = e.h;
      } else {
        if (t) return e.o;
        let r = e.o;
        while (r.i === e) e = r, r = e.o;
        e = r;
      }
      return e;
    }
    B() {
      let e = this;
      if (e.h) {
        e = e.h;
        while (e.i) e = e.i;
        return e;
      } else {
        let t = e.o;
        while (t.h === e) e = t, t = e.o;
        if (e.h !== t) return t;
        else return e;
      }
    }
    _() {
      let e = this.o, t = this.h, r = t.i;
      if (e.o === this) e.o = t;
      else if (e.i === this) e.i = t;
      else e.h = t;
      if (t.o = e, t.i = this, this.o = t, this.h = r, r) r.o = this;
      return t;
    }
    g() {
      let e = this.o, t = this.i, r = t.h;
      if (e.o === this) e.o = t;
      else if (e.i === this) e.i = t;
      else e.h = t;
      if (t.o = e, t.h = this, this.o = t, this.i = r, r) r.o = this;
      return t;
    }
  }
  class Wc extends ya {
    constructor() {
      super(...arguments);
      this.M = 1;
    }
    _() {
      let e = super._();
      return this.O(), e.O(), e;
    }
    g() {
      let e = super.g();
      return this.O(), e.O(), e;
    }
    O() {
      if (this.M = 1, this.i) this.M += this.i.M;
      if (this.h) this.M += this.h.M;
    }
  }
  class jc {
    constructor(e = 0) {
      this.iteratorType = e;
    }
    equals(e) {
      return this.T === e.T;
    }
  }
  class Gc {
    constructor() {
      this.m = 0;
    }
    get length() {
      return this.m;
    }
    size() {
      return this.m;
    }
    empty() {
      return this.m === 0;
    }
  }
  class $c extends Gc {
  }
  function mr() {
    throw RangeError("Iterator access denied!");
  }
  class Vc extends $c {
    constructor(e = function(r, i) {
      if (r < i) return -1;
      if (r > i) return 1;
      return 0;
    }, t = false) {
      super();
      this.v = void 0, this.A = e, this.enableIndex = t, this.N = t ? Wc : ya, this.C = new this.N();
    }
    R(e, t) {
      let r = this.C;
      while (e) {
        let i = this.A(e.u, t);
        if (i < 0) e = e.h;
        else if (i > 0) r = e, e = e.i;
        else return e;
      }
      return r;
    }
    K(e, t) {
      let r = this.C;
      while (e) if (this.A(e.u, t) <= 0) e = e.h;
      else r = e, e = e.i;
      return r;
    }
    L(e, t) {
      let r = this.C;
      while (e) {
        let i = this.A(e.u, t);
        if (i < 0) r = e, e = e.h;
        else if (i > 0) e = e.i;
        else return e;
      }
      return r;
    }
    k(e, t) {
      let r = this.C;
      while (e) if (this.A(e.u, t) < 0) r = e, e = e.h;
      else e = e.i;
      return r;
    }
    P(e) {
      while (true) {
        let t = e.o;
        if (t === this.C) return;
        if (e.p === 1) {
          e.p = 0;
          return;
        }
        if (e === t.i) {
          let r = t.h;
          if (r.p === 1) if (r.p = 0, t.p = 1, t === this.v) this.v = t._();
          else t._();
          else if (r.h && r.h.p === 1) {
            if (r.p = t.p, t.p = 0, r.h.p = 0, t === this.v) this.v = t._();
            else t._();
            return;
          } else if (r.i && r.i.p === 1) r.p = 1, r.i.p = 0, r.g();
          else r.p = 1, e = t;
        } else {
          let r = t.i;
          if (r.p === 1) if (r.p = 0, t.p = 1, t === this.v) this.v = t.g();
          else t.g();
          else if (r.i && r.i.p === 1) {
            if (r.p = t.p, t.p = 0, r.i.p = 0, t === this.v) this.v = t.g();
            else t.g();
            return;
          } else if (r.h && r.h.p === 1) r.p = 1, r.h.p = 0, r._();
          else r.p = 1, e = t;
        }
      }
    }
    S(e) {
      if (this.m === 1) {
        this.clear();
        return;
      }
      let t = e;
      while (t.i || t.h) {
        if (t.h) {
          t = t.h;
          while (t.i) t = t.i;
        } else t = t.i;
        let i = e.u;
        e.u = t.u, t.u = i;
        let s = e.l;
        e.l = t.l, t.l = s, e = t;
      }
      if (this.C.i === t) this.C.i = t.o;
      else if (this.C.h === t) this.C.h = t.o;
      this.P(t);
      let r = t.o;
      if (t === r.i) r.i = void 0;
      else r.h = void 0;
      if (this.m -= 1, this.v.p = 0, this.enableIndex) while (r !== this.C) r.M -= 1, r = r.o;
    }
    U(e) {
      let t = typeof e === "number" ? e : void 0, r = typeof e === "function" ? e : void 0, i = typeof e > "u" ? [] : void 0, s = 0, n = this.v, a = [];
      while (a.length || n) if (n) a.push(n), n = n.i;
      else {
        if (n = a.pop(), s === t) return n;
        i && i.push(n), r && r(n, s, this), s += 1, n = n.h;
      }
      return i;
    }
    j(e) {
      while (true) {
        let t = e.o;
        if (t.p === 0) return;
        let r = t.o;
        if (t === r.i) {
          let i = r.h;
          if (i && i.p === 1) {
            if (i.p = t.p = 0, r === this.v) return;
            r.p = 1, e = r;
            continue;
          } else if (e === t.h) {
            if (e.p = 0, e.i) e.i.o = t;
            if (e.h) e.h.o = r;
            if (t.h = e.i, r.i = e.h, e.i = t, e.h = r, r === this.v) this.v = e, this.C.o = e;
            else {
              let s = r.o;
              if (s.i === r) s.i = e;
              else s.h = e;
            }
            e.o = r.o, t.o = e, r.o = e, r.p = 1;
          } else {
            if (t.p = 0, r === this.v) this.v = r.g();
            else r.g();
            r.p = 1;
            return;
          }
        } else {
          let i = r.i;
          if (i && i.p === 1) {
            if (i.p = t.p = 0, r === this.v) return;
            r.p = 1, e = r;
            continue;
          } else if (e === t.i) {
            if (e.p = 0, e.i) e.i.o = r;
            if (e.h) e.h.o = t;
            if (r.h = e.i, t.i = e.h, e.i = r, e.h = t, r === this.v) this.v = e, this.C.o = e;
            else {
              let s = r.o;
              if (s.i === r) s.i = e;
              else s.h = e;
            }
            e.o = r.o, t.o = e, r.o = e, r.p = 1;
          } else {
            if (t.p = 0, r === this.v) this.v = r._();
            else r._();
            r.p = 1;
            return;
          }
        }
        if (this.enableIndex) t.O(), r.O(), e.O();
        return;
      }
    }
    q(e, t, r) {
      if (this.v === void 0) return this.m += 1, this.v = new this.N(e, t, 0), this.v.o = this.C, this.C.o = this.C.i = this.C.h = this.v, this.m;
      let i, s = this.C.i, n = this.A(s.u, e);
      if (n === 0) return s.l = t, this.m;
      else if (n > 0) s.i = new this.N(e, t), s.i.o = s, i = s.i, this.C.i = i;
      else {
        let a = this.C.h, o = this.A(a.u, e);
        if (o === 0) return a.l = t, this.m;
        else if (o < 0) a.h = new this.N(e, t), a.h.o = a, i = a.h, this.C.h = i;
        else {
          if (r !== void 0) {
            let l = r.T;
            if (l !== this.C) {
              let c = this.A(l.u, e);
              if (c === 0) return l.l = t, this.m;
              else if (c > 0) {
                let u = l.I(), d = this.A(u.u, e);
                if (d === 0) return u.l = t, this.m;
                else if (d < 0) if (i = new this.N(e, t), u.h === void 0) u.h = i, i.o = u;
                else l.i = i, i.o = l;
              }
            }
          }
          if (i === void 0) {
            i = this.v;
            while (true) {
              let l = this.A(i.u, e);
              if (l > 0) {
                if (i.i === void 0) {
                  i.i = new this.N(e, t), i.i.o = i, i = i.i;
                  break;
                }
                i = i.i;
              } else if (l < 0) {
                if (i.h === void 0) {
                  i.h = new this.N(e, t), i.h.o = i, i = i.h;
                  break;
                }
                i = i.h;
              } else return i.l = t, this.m;
            }
          }
        }
      }
      if (this.enableIndex) {
        let a = i.o;
        while (a !== this.C) a.M += 1, a = a.o;
      }
      return this.j(i), this.m += 1, this.m;
    }
    H(e, t) {
      while (e) {
        let r = this.A(e.u, t);
        if (r < 0) e = e.h;
        else if (r > 0) e = e.i;
        else return e;
      }
      return e || this.C;
    }
    clear() {
      this.m = 0, this.v = void 0, this.C.o = void 0, this.C.i = this.C.h = void 0;
    }
    updateKeyByIterator(e, t) {
      let r = e.T;
      if (r === this.C) mr();
      if (this.m === 1) return r.u = t, true;
      let i = r.B().u;
      if (r === this.C.i) {
        if (this.A(i, t) > 0) return r.u = t, true;
        return false;
      }
      let s = r.I().u;
      if (r === this.C.h) {
        if (this.A(s, t) < 0) return r.u = t, true;
        return false;
      }
      if (this.A(s, t) >= 0 || this.A(i, t) <= 0) return false;
      return r.u = t, true;
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.m - 1) throw RangeError();
      let t = this.U(e);
      return this.S(t), this.m;
    }
    eraseElementByKey(e) {
      if (this.m === 0) return false;
      let t = this.H(this.v, e);
      if (t === this.C) return false;
      return this.S(t), true;
    }
    eraseElementByIterator(e) {
      let t = e.T;
      if (t === this.C) mr();
      let r = t.h === void 0;
      if (e.iteratorType === 0) {
        if (r) e.next();
      } else if (!r || t.i === void 0) e.next();
      return this.S(t), e;
    }
    getHeight() {
      if (this.m === 0) return 0;
      function e(t) {
        if (!t) return 0;
        return Math.max(e(t.i), e(t.h)) + 1;
      }
      return e(this.v);
    }
  }
  class Yc extends jc {
    constructor(e, t, r) {
      super(r);
      if (this.T = e, this.C = t, this.iteratorType === 0) this.pre = function() {
        if (this.T === this.C.i) mr();
        return this.T = this.T.I(), this;
      }, this.next = function() {
        if (this.T === this.C) mr();
        return this.T = this.T.B(), this;
      };
      else this.pre = function() {
        if (this.T === this.C.h) mr();
        return this.T = this.T.B(), this;
      }, this.next = function() {
        if (this.T === this.C) mr();
        return this.T = this.T.I(), this;
      };
    }
    get index() {
      let e = this.T, t = this.C.o;
      if (e === this.C) {
        if (t) return t.M - 1;
        return 0;
      }
      let r = 0;
      if (e.i) r += e.i.M;
      while (e !== t) {
        let i = e.o;
        if (e === i.h) {
          if (r += 1, i.i) r += i.i.M;
        }
        e = i;
      }
      return r;
    }
    isAccessible() {
      return this.T !== this.C;
    }
  }
  class rt extends Yc {
    constructor(e, t, r, i) {
      super(e, t, i);
      this.container = r;
    }
    get pointer() {
      if (this.T === this.C) mr();
      let e = this;
      return new Proxy([], { get(t, r) {
        if (r === "0") return e.T.u;
        else if (r === "1") return e.T.l;
        return t[0] = e.T.u, t[1] = e.T.l, t[r];
      }, set(t, r, i) {
        if (r !== "1") throw TypeError("prop must be 1");
        return e.T.l = i, true;
      } });
    }
    copy() {
      return new rt(this.T, this.C, this.container, this.iteratorType);
    }
  }
  class Kc extends Vc {
    constructor(e = [], t, r) {
      super(t, r);
      let i = this;
      e.forEach(function(s) {
        i.setElement(s[0], s[1]);
      });
    }
    begin() {
      return new rt(this.C.i || this.C, this.C, this);
    }
    end() {
      return new rt(this.C, this.C, this);
    }
    rBegin() {
      return new rt(this.C.h || this.C, this.C, this, 1);
    }
    rEnd() {
      return new rt(this.C, this.C, this, 1);
    }
    front() {
      if (this.m === 0) return;
      let e = this.C.i;
      return [e.u, e.l];
    }
    back() {
      if (this.m === 0) return;
      let e = this.C.h;
      return [e.u, e.l];
    }
    lowerBound(e) {
      let t = this.R(this.v, e);
      return new rt(t, this.C, this);
    }
    upperBound(e) {
      let t = this.K(this.v, e);
      return new rt(t, this.C, this);
    }
    reverseLowerBound(e) {
      let t = this.L(this.v, e);
      return new rt(t, this.C, this);
    }
    reverseUpperBound(e) {
      let t = this.k(this.v, e);
      return new rt(t, this.C, this);
    }
    forEach(e) {
      this.U(function(t, r, i) {
        e([t.u, t.l], r, i);
      });
    }
    setElement(e, t, r) {
      return this.q(e, t, r);
    }
    getElementByPos(e) {
      if (e < 0 || e > this.m - 1) throw RangeError();
      let t = this.U(e);
      return [t.u, t.l];
    }
    find(e) {
      let t = this.H(this.v, e);
      return new rt(t, this.C, this);
    }
    getElementByKey(e) {
      return this.H(this.v, e).l;
    }
    union(e) {
      let t = this;
      return e.forEach(function(r) {
        t.setElement(r[0], r[1]);
      }), this.m;
    }
    *[Symbol.iterator]() {
      let e = this.m, t = this.U();
      for (let r = 0; r < e; ++r) {
        let i = t[r];
        yield [i.u, i.l];
      }
    }
  }
  Jc.OrderedMap = Kc;
});
var fs = (0, import_chunk_w1d7ygsk.V)(function(Zc) {
  Object.defineProperty(Zc, "__esModule", { value: true });
  Zc.registerAdminService = DS;
  Zc.addAdminServicesToServer = LS;
  var Qc = [];
  function DS(e, t) {
    Qc.push({ getServiceDefinition: e, getHandlers: t });
  }
  function LS(e) {
    for (let { getServiceDefinition: t, getHandlers: r } of Qc) e.addService(t(), r());
  }
});
var ou = (0, import_chunk_w1d7ygsk.V)(function(nu) {
  Object.defineProperty(nu, "__esModule", { value: true });
  nu.ClientDuplexStreamImpl = nu.ClientWritableStreamImpl = nu.ClientReadableStreamImpl = nu.ClientUnaryCallImpl = void 0;
  nu.callErrorFromStatus = US;
  var eu = (0, import_chunk_w1d7ygsk.ft)("events"), kr = (0, import_chunk_w1d7ygsk.ft)("stream"), dt = x();
  function US(e, t) {
    let r = `${e.code} ${dt.Status[e.code]}: ${e.details}`, s = `${Error(r).stack}
for call at
${t}`;
    return Object.assign(Error(r), e, { stack: s });
  }
  class tu extends eu.EventEmitter {
    constructor() {
      super();
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(dt.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : "unknown";
    }
    getAuthContext() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && t !== void 0 ? t : null;
    }
  }
  nu.ClientUnaryCallImpl = tu;
  class ru extends kr.Readable {
    constructor(e) {
      super({ objectMode: true });
      this.deserialize = e;
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(dt.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : "unknown";
    }
    getAuthContext() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && t !== void 0 ? t : null;
    }
    _read(e) {
      var t;
      (t = this.call) === null || t === void 0 || t.startRead();
    }
  }
  nu.ClientReadableStreamImpl = ru;
  class iu extends kr.Writable {
    constructor(e) {
      super({ objectMode: true });
      this.serialize = e;
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(dt.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : "unknown";
    }
    getAuthContext() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && t !== void 0 ? t : null;
    }
    _write(e, t, r) {
      var i;
      let s = { callback: r }, n = Number(t);
      if (!Number.isNaN(n)) s.flags = n;
      (i = this.call) === null || i === void 0 || i.sendMessageWithContext(s, e);
    }
    _final(e) {
      var t;
      (t = this.call) === null || t === void 0 || t.halfClose(), e();
    }
  }
  nu.ClientWritableStreamImpl = iu;
  class su extends kr.Duplex {
    constructor(e, t) {
      super({ objectMode: true });
      this.serialize = e, this.deserialize = t;
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(dt.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : "unknown";
    }
    getAuthContext() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && t !== void 0 ? t : null;
    }
    _read(e) {
      var t;
      (t = this.call) === null || t === void 0 || t.startRead();
    }
    _write(e, t, r) {
      var i;
      let s = { callback: r }, n = Number(t);
      if (!Number.isNaN(n)) s.flags = n;
      (i = this.call) === null || i === void 0 || i.sendMessageWithContext(s, e);
    }
    _final(e) {
      var t;
      (t = this.call) === null || t === void 0 || t.halfClose(), e();
    }
  }
  nu.ClientDuplexStreamImpl = su;
});
var vr = (0, import_chunk_w1d7ygsk.V)(function(uu) {
  Object.defineProperty(uu, "__esModule", { value: true });
  uu.InterceptingListenerImpl = void 0;
  uu.statusOrFromValue = jS;
  uu.statusOrFromError = GS;
  uu.isInterceptingListener = $S;
  var lu = ue();
  function jS(e) {
    return { ok: true, value: e };
  }
  function GS(e) {
    var t;
    return { ok: false, error: Object.assign(Object.assign({}, e), { metadata: (t = e.metadata) !== null && t !== void 0 ? t : new lu.Metadata() }) };
  }
  function $S(e) {
    return e.onReceiveMetadata !== void 0 && e.onReceiveMetadata.length === 1;
  }
  class cu {
    constructor(e, t) {
      this.listener = e, this.nextListener = t, this.processingMetadata = false, this.hasPendingMessage = false, this.processingMessage = false, this.pendingStatus = null;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), this.pendingMessage = null, this.hasPendingMessage = false;
    }
    processPendingStatus() {
      if (this.pendingStatus) this.nextListener.onReceiveStatus(this.pendingStatus);
    }
    onReceiveMetadata(e) {
      this.processingMetadata = true, this.listener.onReceiveMetadata(e, (t) => {
        this.processingMetadata = false, this.nextListener.onReceiveMetadata(t), this.processPendingMessage(), this.processPendingStatus();
      });
    }
    onReceiveMessage(e) {
      this.processingMessage = true, this.listener.onReceiveMessage(e, (t) => {
        if (this.processingMessage = false, this.processingMetadata) this.pendingMessage = t, this.hasPendingMessage = true;
        else this.nextListener.onReceiveMessage(t), this.processPendingStatus();
      });
    }
    onReceiveStatus(e) {
      this.listener.onReceiveStatus(e, (t) => {
        if (this.processingMetadata || this.processingMessage) this.pendingStatus = t;
        else this.nextListener.onReceiveStatus(t);
      });
    }
  }
  uu.InterceptingListenerImpl = cu;
});
var Ca = (0, import_chunk_w1d7ygsk.V)(function(yu) {
  Object.defineProperty(yu, "__esModule", { value: true });
  yu.InterceptingCall = yu.RequesterBuilder = yu.ListenerBuilder = yu.InterceptorConfigurationError = void 0;
  yu.getInterceptingCall = QS;
  var hu = ue(), ps = vr(), gs = x(), ms = Qi();
  class Oi extends Error {
    constructor(e) {
      super(e);
      this.name = "InterceptorConfigurationError", Error.captureStackTrace(this, Oi);
    }
  }
  yu.InterceptorConfigurationError = Oi;
  class fu {
    constructor() {
      this.metadata = void 0, this.message = void 0, this.status = void 0;
    }
    withOnReceiveMetadata(e) {
      return this.metadata = e, this;
    }
    withOnReceiveMessage(e) {
      return this.message = e, this;
    }
    withOnReceiveStatus(e) {
      return this.status = e, this;
    }
    build() {
      return { onReceiveMetadata: this.metadata, onReceiveMessage: this.message, onReceiveStatus: this.status };
    }
  }
  yu.ListenerBuilder = fu;
  class pu {
    constructor() {
      this.start = void 0, this.message = void 0, this.halfClose = void 0, this.cancel = void 0;
    }
    withStart(e) {
      return this.start = e, this;
    }
    withSendMessage(e) {
      return this.message = e, this;
    }
    withHalfClose(e) {
      return this.halfClose = e, this;
    }
    withCancel(e) {
      return this.cancel = e, this;
    }
    build() {
      return { start: this.start, sendMessage: this.message, halfClose: this.halfClose, cancel: this.cancel };
    }
  }
  yu.RequesterBuilder = pu;
  var _a = { onReceiveMetadata: (e, t) => {
    t(e);
  }, onReceiveMessage: (e, t) => {
    t(e);
  }, onReceiveStatus: (e, t) => {
    t(e);
  } }, bi = { start: (e, t, r) => {
    r(e, t);
  }, sendMessage: (e, t) => {
    t(e);
  }, halfClose: (e) => {
    e();
  }, cancel: (e) => {
    e();
  } };
  class gu {
    constructor(e, t) {
      var r, i, s, n;
      if (this.nextCall = e, this.processingMetadata = false, this.pendingMessageContext = null, this.processingMessage = false, this.pendingHalfClose = false, t) this.requester = { start: (r = t.start) !== null && r !== void 0 ? r : bi.start, sendMessage: (i = t.sendMessage) !== null && i !== void 0 ? i : bi.sendMessage, halfClose: (s = t.halfClose) !== null && s !== void 0 ? s : bi.halfClose, cancel: (n = t.cancel) !== null && n !== void 0 ? n : bi.cancel };
      else this.requester = bi;
    }
    cancelWithStatus(e, t) {
      this.requester.cancel(() => {
        this.nextCall.cancelWithStatus(e, t);
      });
    }
    getPeer() {
      return this.nextCall.getPeer();
    }
    processPendingMessage() {
      if (this.pendingMessageContext) this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage), this.pendingMessageContext = null, this.pendingMessage = null;
    }
    processPendingHalfClose() {
      if (this.pendingHalfClose) this.nextCall.halfClose();
    }
    start(e, t) {
      var r, i, s, n, a, o;
      let l = { onReceiveMetadata: (i = (r = t === null || t === void 0 ? void 0 : t.onReceiveMetadata) === null || r === void 0 ? void 0 : r.bind(t)) !== null && i !== void 0 ? i : (c) => {
      }, onReceiveMessage: (n = (s = t === null || t === void 0 ? void 0 : t.onReceiveMessage) === null || s === void 0 ? void 0 : s.bind(t)) !== null && n !== void 0 ? n : (c) => {
      }, onReceiveStatus: (o = (a = t === null || t === void 0 ? void 0 : t.onReceiveStatus) === null || a === void 0 ? void 0 : a.bind(t)) !== null && o !== void 0 ? o : (c) => {
      } };
      this.processingMetadata = true, this.requester.start(e, l, (c, u) => {
        var d, h, m;
        this.processingMetadata = false;
        let f;
        if (ps.isInterceptingListener(u)) f = u;
        else {
          let y = { onReceiveMetadata: (d = u.onReceiveMetadata) !== null && d !== void 0 ? d : _a.onReceiveMetadata, onReceiveMessage: (h = u.onReceiveMessage) !== null && h !== void 0 ? h : _a.onReceiveMessage, onReceiveStatus: (m = u.onReceiveStatus) !== null && m !== void 0 ? m : _a.onReceiveStatus };
          f = new ps.InterceptingListenerImpl(y, l);
        }
        this.nextCall.start(c, f), this.processPendingMessage(), this.processPendingHalfClose();
      });
    }
    sendMessageWithContext(e, t) {
      this.processingMessage = true, this.requester.sendMessage(t, (r) => {
        if (this.processingMessage = false, this.processingMetadata) this.pendingMessageContext = e, this.pendingMessage = t;
        else this.nextCall.sendMessageWithContext(e, r), this.processPendingHalfClose();
      });
    }
    sendMessage(e) {
      this.sendMessageWithContext({}, e);
    }
    startRead() {
      this.nextCall.startRead();
    }
    halfClose() {
      this.requester.halfClose(() => {
        if (this.processingMetadata || this.processingMessage) this.pendingHalfClose = true;
        else this.nextCall.halfClose();
      });
    }
    getAuthContext() {
      return this.nextCall.getAuthContext();
    }
  }
  yu.InterceptingCall = gu;
  function JS(e, t, r) {
    var i, s;
    let n = (i = r.deadline) !== null && i !== void 0 ? i : 1 / 0, a = r.host, o = (s = r.parent) !== null && s !== void 0 ? s : null, { propagate_flags: l, credentials: c } = r, u = e.createCall(t, n, a, o, l);
    if (c) u.setCredentials(c);
    return u;
  }
  class Sa {
    constructor(e, t) {
      this.call = e, this.methodDefinition = t;
    }
    cancelWithStatus(e, t) {
      this.call.cancelWithStatus(e, t);
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMessageWithContext(e, t) {
      let r;
      try {
        r = this.methodDefinition.requestSerialize(t);
      } catch (i) {
        this.call.cancelWithStatus(gs.Status.INTERNAL, `Request message serialization failure: ${ms.getErrorMessage(i)}`);
        return;
      }
      this.call.sendMessageWithContext(e, r);
    }
    sendMessage(e) {
      this.sendMessageWithContext({}, e);
    }
    start(e, t) {
      let r = null;
      this.call.start(e, { onReceiveMetadata: (i) => {
        var s;
        (s = t === null || t === void 0 ? void 0 : t.onReceiveMetadata) === null || s === void 0 || s.call(t, i);
      }, onReceiveMessage: (i) => {
        var s;
        let n;
        try {
          n = this.methodDefinition.responseDeserialize(i);
        } catch (a) {
          r = { code: gs.Status.INTERNAL, details: `Response message parsing error: ${ms.getErrorMessage(a)}`, metadata: new hu.Metadata() }, this.call.cancelWithStatus(r.code, r.details);
          return;
        }
        (s = t === null || t === void 0 ? void 0 : t.onReceiveMessage) === null || s === void 0 || s.call(t, n);
      }, onReceiveStatus: (i) => {
        var s, n;
        if (r) (s = t === null || t === void 0 ? void 0 : t.onReceiveStatus) === null || s === void 0 || s.call(t, r);
        else (n = t === null || t === void 0 ? void 0 : t.onReceiveStatus) === null || n === void 0 || n.call(t, i);
      } });
    }
    startRead() {
      this.call.startRead();
    }
    halfClose() {
      this.call.halfClose();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
  }
  class mu extends Sa {
    constructor(e, t) {
      super(e, t);
    }
    start(e, t) {
      var r, i;
      let s = false, n = { onReceiveMetadata: (i = (r = t === null || t === void 0 ? void 0 : t.onReceiveMetadata) === null || r === void 0 ? void 0 : r.bind(t)) !== null && i !== void 0 ? i : (a) => {
      }, onReceiveMessage: (a) => {
        var o;
        s = true, (o = t === null || t === void 0 ? void 0 : t.onReceiveMessage) === null || o === void 0 || o.call(t, a);
      }, onReceiveStatus: (a) => {
        var o, l;
        if (!s) (o = t === null || t === void 0 ? void 0 : t.onReceiveMessage) === null || o === void 0 || o.call(t, null);
        (l = t === null || t === void 0 ? void 0 : t.onReceiveStatus) === null || l === void 0 || l.call(t, a);
      } };
      super.start(e, n), this.call.startRead();
    }
  }
  class vu extends Sa {
  }
  function XS(e, t, r) {
    let i = JS(e, r.path, t);
    if (r.responseStream) return new vu(i, r);
    else return new mu(i, r);
  }
  function QS(e, t, r, i) {
    if (e.clientInterceptors.length > 0 && e.clientInterceptorProviders.length > 0) throw new Oi("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
    if (e.callInterceptors.length > 0 && e.callInterceptorProviders.length > 0) throw new Oi("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
    let s = [];
    if (e.callInterceptors.length > 0 || e.callInterceptorProviders.length > 0) s = [].concat(e.callInterceptors, e.callInterceptorProviders.map((o) => o(t))).filter((o) => o);
    else s = [].concat(e.clientInterceptors, e.clientInterceptorProviders.map((o) => o(t))).filter((o) => o);
    let n = Object.assign({}, r, { method_definition: t });
    return s.reduceRight((o, l) => (c) => l(c, o), (o) => XS(i, o, t))(n);
  }
});
var Ta = (0, import_chunk_w1d7ygsk.V)(function(Ru) {
  Object.defineProperty(Ru, "__esModule", { value: true });
  Ru.Client = void 0;
  var ie = ou(), Cu = Ra(), Eu = Ae(), Se = x(), Be = ue(), Vt = Ca(), it = Symbol(), Dr = Symbol(), Lr = Symbol(), Dt = Symbol();
  function Ea(e) {
    return typeof e === "function";
  }
  function Fr(e) {
    var t;
    return ((t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`).slice(1).join(`
`)) || "no stack trace available";
  }
  class Tu {
    constructor(e, t, r = {}) {
      var i, s;
      if (r = Object.assign({}, r), this[Dr] = (i = r.interceptors) !== null && i !== void 0 ? i : [], delete r.interceptors, this[Lr] = (s = r.interceptor_providers) !== null && s !== void 0 ? s : [], delete r.interceptor_providers, this[Dr].length > 0 && this[Lr].length > 0) throw Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
      if (this[Dt] = r.callInvocationTransformer, delete r.callInvocationTransformer, r.channelOverride) this[it] = r.channelOverride;
      else if (r.channelFactoryOverride) {
        let n = r.channelFactoryOverride;
        delete r.channelFactoryOverride, this[it] = n(e, t, r);
      } else this[it] = new Cu.ChannelImplementation(e, t, r);
    }
    close() {
      this[it].close();
    }
    getChannel() {
      return this[it];
    }
    waitForReady(e, t) {
      let r = (i) => {
        if (i) {
          t(Error("Failed to connect before the deadline"));
          return;
        }
        let s;
        try {
          s = this[it].getConnectivityState(true);
        } catch (n) {
          t(Error("The channel has been closed"));
          return;
        }
        if (s === Eu.ConnectivityState.READY) t();
        else try {
          this[it].watchConnectivityState(s, e, r);
        } catch (n) {
          t(Error("The channel has been closed"));
        }
      };
      setImmediate(r);
    }
    checkOptionalUnaryResponseArguments(e, t, r) {
      if (Ea(e)) return { metadata: new Be.Metadata(), options: {}, callback: e };
      else if (Ea(t)) if (e instanceof Be.Metadata) return { metadata: e, options: {}, callback: t };
      else return { metadata: new Be.Metadata(), options: e, callback: t };
      else {
        if (!(e instanceof Be.Metadata && t instanceof Object && Ea(r))) throw Error("Incorrect arguments passed");
        return { metadata: e, options: t, callback: r };
      }
    }
    makeUnaryRequest(e, t, r, i, s, n, a) {
      var o, l;
      let c = this.checkOptionalUnaryResponseArguments(s, n, a), u = { path: e, requestStream: false, responseStream: false, requestSerialize: t, responseDeserialize: r }, d = { argument: i, metadata: c.metadata, call: new ie.ClientUnaryCallImpl(), channel: this[it], methodDefinition: u, callOptions: c.options, callback: c.callback };
      if (this[Dt]) d = this[Dt](d);
      let h = d.call, m = { clientInterceptors: this[Dr], clientInterceptorProviders: this[Lr], callInterceptors: (o = d.callOptions.interceptors) !== null && o !== void 0 ? o : [], callInterceptorProviders: (l = d.callOptions.interceptor_providers) !== null && l !== void 0 ? l : [] }, f = Vt.getInterceptingCall(m, d.methodDefinition, d.callOptions, d.channel);
      h.call = f;
      let y = null, C = false, E = Error();
      return f.start(d.metadata, { onReceiveMetadata: (A) => {
        h.emit("metadata", A);
      }, onReceiveMessage(A) {
        if (y !== null) f.cancelWithStatus(Se.Status.UNIMPLEMENTED, "Too many responses received");
        y = A;
      }, onReceiveStatus(A) {
        if (C) return;
        if (C = true, A.code === Se.Status.OK) if (y === null) {
          let te = Fr(E);
          d.callback(ie.callErrorFromStatus({ code: Se.Status.UNIMPLEMENTED, details: "No message received", metadata: A.metadata }, te));
        } else d.callback(null, y);
        else {
          let te = Fr(E);
          d.callback(ie.callErrorFromStatus(A, te));
        }
        E = null, h.emit("status", A);
      } }), f.sendMessage(i), f.halfClose(), h;
    }
    makeClientStreamRequest(e, t, r, i, s, n) {
      var a, o;
      let l = this.checkOptionalUnaryResponseArguments(i, s, n), c = { path: e, requestStream: true, responseStream: false, requestSerialize: t, responseDeserialize: r }, u = { metadata: l.metadata, call: new ie.ClientWritableStreamImpl(t), channel: this[it], methodDefinition: c, callOptions: l.options, callback: l.callback };
      if (this[Dt]) u = this[Dt](u);
      let d = u.call, h = { clientInterceptors: this[Dr], clientInterceptorProviders: this[Lr], callInterceptors: (a = u.callOptions.interceptors) !== null && a !== void 0 ? a : [], callInterceptorProviders: (o = u.callOptions.interceptor_providers) !== null && o !== void 0 ? o : [] }, m = Vt.getInterceptingCall(h, u.methodDefinition, u.callOptions, u.channel);
      d.call = m;
      let f = null, y = false, C = Error();
      return m.start(u.metadata, { onReceiveMetadata: (E) => {
        d.emit("metadata", E);
      }, onReceiveMessage(E) {
        if (f !== null) m.cancelWithStatus(Se.Status.UNIMPLEMENTED, "Too many responses received");
        f = E, m.startRead();
      }, onReceiveStatus(E) {
        if (y) return;
        if (y = true, E.code === Se.Status.OK) if (f === null) {
          let A = Fr(C);
          u.callback(ie.callErrorFromStatus({ code: Se.Status.UNIMPLEMENTED, details: "No message received", metadata: E.metadata }, A));
        } else u.callback(null, f);
        else {
          let A = Fr(C);
          u.callback(ie.callErrorFromStatus(E, A));
        }
        C = null, d.emit("status", E);
      } }), d;
    }
    checkMetadataAndOptions(e, t) {
      let r, i;
      if (e instanceof Be.Metadata) if (r = e, t) i = t;
      else i = {};
      else {
        if (e) i = e;
        else i = {};
        r = new Be.Metadata();
      }
      return { metadata: r, options: i };
    }
    makeServerStreamRequest(e, t, r, i, s, n) {
      var a, o;
      let l = this.checkMetadataAndOptions(s, n), c = { path: e, requestStream: false, responseStream: true, requestSerialize: t, responseDeserialize: r }, u = { argument: i, metadata: l.metadata, call: new ie.ClientReadableStreamImpl(r), channel: this[it], methodDefinition: c, callOptions: l.options };
      if (this[Dt]) u = this[Dt](u);
      let d = u.call, h = { clientInterceptors: this[Dr], clientInterceptorProviders: this[Lr], callInterceptors: (a = u.callOptions.interceptors) !== null && a !== void 0 ? a : [], callInterceptorProviders: (o = u.callOptions.interceptor_providers) !== null && o !== void 0 ? o : [] }, m = Vt.getInterceptingCall(h, u.methodDefinition, u.callOptions, u.channel);
      d.call = m;
      let f = false, y = Error();
      return m.start(u.metadata, { onReceiveMetadata(C) {
        d.emit("metadata", C);
      }, onReceiveMessage(C) {
        d.push(C);
      }, onReceiveStatus(C) {
        if (f) return;
        if (f = true, d.push(null), C.code !== Se.Status.OK) {
          let E = Fr(y);
          d.emit("error", ie.callErrorFromStatus(C, E));
        }
        y = null, d.emit("status", C);
      } }), m.sendMessage(i), m.halfClose(), d;
    }
    makeBidiStreamRequest(e, t, r, i, s) {
      var n, a;
      let o = this.checkMetadataAndOptions(i, s), l = { path: e, requestStream: true, responseStream: true, requestSerialize: t, responseDeserialize: r }, c = { metadata: o.metadata, call: new ie.ClientDuplexStreamImpl(t, r), channel: this[it], methodDefinition: l, callOptions: o.options };
      if (this[Dt]) c = this[Dt](c);
      let u = c.call, d = { clientInterceptors: this[Dr], clientInterceptorProviders: this[Lr], callInterceptors: (n = c.callOptions.interceptors) !== null && n !== void 0 ? n : [], callInterceptorProviders: (a = c.callOptions.interceptor_providers) !== null && a !== void 0 ? a : [] }, h = Vt.getInterceptingCall(d, c.methodDefinition, c.callOptions, c.channel);
      u.call = h;
      let m = false, f = Error();
      return h.start(c.metadata, { onReceiveMetadata(y) {
        u.emit("metadata", y);
      }, onReceiveMessage(y) {
        u.push(y);
      }, onReceiveStatus(y) {
        if (m) return;
        if (m = true, u.push(null), y.code !== Se.Status.OK) {
          let C = Fr(f);
          u.emit("error", ie.callErrorFromStatus(y, C));
        }
        f = null, u.emit("status", y);
      } }), u;
    }
  }
  Ru.Client = Tu;
});
var vs = (0, import_chunk_w1d7ygsk.V)(function(wu) {
  Object.defineProperty(wu, "__esModule", { value: true });
  wu.makeClientConstructor = Ou;
  wu.loadPackageDefinition = aC;
  var ht = Ta(), iC = { unary: ht.Client.prototype.makeUnaryRequest, server_stream: ht.Client.prototype.makeServerStreamRequest, client_stream: ht.Client.prototype.makeClientStreamRequest, bidi: ht.Client.prototype.makeBidiStreamRequest };
  function ba(e) {
    return ["__proto__", "prototype", "constructor"].includes(e);
  }
  function Ou(e, t, r) {
    if (!r) r = {};
    class i extends ht.Client {
    }
    return Object.keys(e).forEach((s) => {
      if (ba(s)) return;
      let n = e[s], a;
      if (typeof s === "string" && s.charAt(0) === "$") throw Error("Method names cannot start with $");
      if (n.requestStream) if (n.responseStream) a = "bidi";
      else a = "client_stream";
      else if (n.responseStream) a = "server_stream";
      else a = "unary";
      let { requestSerialize: o, responseDeserialize: l } = n, c = sC(iC[a], n.path, o, l);
      if (i.prototype[s] = c, Object.assign(i.prototype[s], n), n.originalName && !ba(n.originalName)) i.prototype[n.originalName] = i.prototype[s];
    }), i.service = e, i.serviceName = t, i;
  }
  function sC(e, t, r, i) {
    return function(...s) {
      return e.call(this, t, r, i, ...s);
    };
  }
  function nC(e) {
    return "format" in e;
  }
  function aC(e) {
    let t = {};
    for (let r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
      let i = e[r], s = r.split(".");
      if (s.some((o) => ba(o))) continue;
      let n = s[s.length - 1], a = t;
      for (let o of s.slice(0, -1)) {
        if (!a[o]) a[o] = {};
        a = a[o];
      }
      if (nC(i)) a[n] = i;
      else a[n] = Ou(i, n, {});
    }
    return t;
  }
});
var Qu = (0, import_chunk_w1d7ygsk.V)(function(Qw, Xu) {
  var cC = 1 / 0, uC = "[object Symbol]", dC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, hC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _s = "\\ud800-\\udfff", Du = "\\u0300-\\u036f\\ufe20-\\ufe23", Lu = "\\u20d0-\\u20f0", Fu = "\\u2700-\\u27bf", qu = "a-z\\xdf-\\xf6\\xf8-\\xff", fC = "\\xac\\xb1\\xd7\\xf7", pC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gC = "\\u2000-\\u206f", mC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Uu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Bu = "\\ufe0e\\ufe0f", zu = fC + pC + gC + mC, wa = "['\u2019]", vC = "[" + _s + "]", Au = "[" + zu + "]", ys = "[" + Du + Lu + "]", Hu = "\\d+", yC = "[" + Fu + "]", Wu = "[" + qu + "]", ju = "[^" + _s + zu + Hu + Fu + qu + Uu + "]", Oa = "\\ud83c[\\udffb-\\udfff]", _C = "(?:" + ys + "|" + Oa + ")", Gu = "[^" + _s + "]", Aa = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pa = "[\\ud800-\\udbff][\\udc00-\\udfff]", qr = "[" + Uu + "]", $u = "\\u200d", Pu = "(?:" + Wu + "|" + ju + ")", SC = "(?:" + qr + "|" + ju + ")", Nu = "(?:" + wa + "(?:d|ll|m|re|s|t|ve))?", Mu = "(?:" + wa + "(?:D|LL|M|RE|S|T|VE))?", Vu = _C + "?", Yu = "[" + Bu + "]?", CC = "(?:" + $u + "(?:" + [Gu, Aa, Pa].join("|") + ")" + Yu + Vu + ")*", Ku = Yu + Vu + CC, EC = "(?:" + [yC, Aa, Pa].join("|") + ")" + Ku, TC = "(?:" + [Gu + ys + "?", ys, Aa, Pa, vC].join("|") + ")", RC = RegExp(wa, "g"), bC = RegExp(ys, "g"), OC = RegExp(Oa + "(?=" + Oa + ")|" + TC + Ku, "g"), wC = RegExp([qr + "?" + Wu + "+" + Nu + "(?=" + [Au, qr, "$"].join("|") + ")", SC + "+" + Mu + "(?=" + [Au, qr + Pu, "$"].join("|") + ")", qr + "?" + Pu + "+" + Nu, qr + "+" + Mu, Hu, EC].join("|"), "g"), AC = RegExp("[" + $u + _s + Du + Lu + Bu + "]"), PC = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, NC = { "\xC0": "A", "\xC1": "A", "\xC2": "A", "\xC3": "A", "\xC4": "A", "\xC5": "A", "\xE0": "a", "\xE1": "a", "\xE2": "a", "\xE3": "a", "\xE4": "a", "\xE5": "a", "\xC7": "C", "\xE7": "c", "\xD0": "D", "\xF0": "d", "\xC8": "E", "\xC9": "E", "\xCA": "E", "\xCB": "E", "\xE8": "e", "\xE9": "e", "\xEA": "e", "\xEB": "e", "\xCC": "I", "\xCD": "I", "\xCE": "I", "\xCF": "I", "\xEC": "i", "\xED": "i", "\xEE": "i", "\xEF": "i", "\xD1": "N", "\xF1": "n", "\xD2": "O", "\xD3": "O", "\xD4": "O", "\xD5": "O", "\xD6": "O", "\xD8": "O", "\xF2": "o", "\xF3": "o", "\xF4": "o", "\xF5": "o", "\xF6": "o", "\xF8": "o", "\xD9": "U", "\xDA": "U", "\xDB": "U", "\xDC": "U", "\xF9": "u", "\xFA": "u", "\xFB": "u", "\xFC": "u", "\xDD": "Y", "\xFD": "y", "\xFF": "y", "\xC6": "Ae", "\xE6": "ae", "\xDE": "Th", "\xFE": "th", "\xDF": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\u012F": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S", "\u015E": "S", "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017F": "ss" }, MC = typeof global == "object" && global && global.Object === Object && global, IC = typeof self == "object" && self && self.Object === Object && self, xC = MC || IC || Function("return this")();
  function kC(e, t, r, i) {
    var s = -1, n = e ? e.length : 0;
    if (i && n) r = e[++s];
    while (++s < n) r = t(r, e[s], s, e);
    return r;
  }
  function DC(e) {
    return e.split("");
  }
  function LC(e) {
    return e.match(dC) || [];
  }
  function FC(e) {
    return function(t) {
      return e == null ? void 0 : e[t];
    };
  }
  var qC = FC(NC);
  function Ju(e) {
    return AC.test(e);
  }
  function UC(e) {
    return PC.test(e);
  }
  function BC(e) {
    return Ju(e) ? zC(e) : DC(e);
  }
  function zC(e) {
    return e.match(OC) || [];
  }
  function HC(e) {
    return e.match(wC) || [];
  }
  var WC = Object.prototype, jC = WC.toString, Iu = xC.Symbol, xu = Iu ? Iu.prototype : void 0, ku = xu ? xu.toString : void 0;
  function GC(e, t, r) {
    var i = -1, s = e.length;
    if (t < 0) t = -t > s ? 0 : s + t;
    if (r = r > s ? s : r, r < 0) r += s;
    s = t > r ? 0 : r - t >>> 0, t >>>= 0;
    var n = Array(s);
    while (++i < s) n[i] = e[i + t];
    return n;
  }
  function $C(e) {
    if (typeof e == "string") return e;
    if (XC(e)) return ku ? ku.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -cC ? "-0" : t;
  }
  function VC(e, t, r) {
    var i = e.length;
    return r = r === void 0 ? i : r, !t && r >= i ? e : GC(e, t, r);
  }
  function YC(e) {
    return function(t) {
      t = Ss(t);
      var r = Ju(t) ? BC(t) : void 0, i = r ? r[0] : t.charAt(0), s = r ? VC(r, 1).join("") : t.slice(1);
      return i[e]() + s;
    };
  }
  function KC(e) {
    return function(t) {
      return kC(rE(eE(t).replace(RC, "")), e, "");
    };
  }
  function JC(e) {
    return !!e && typeof e == "object";
  }
  function XC(e) {
    return typeof e == "symbol" || JC(e) && jC.call(e) == uC;
  }
  function Ss(e) {
    return e == null ? "" : $C(e);
  }
  var QC = KC(function(e, t, r) {
    return t = t.toLowerCase(), e + (r ? ZC(t) : t);
  });
  function ZC(e) {
    return tE(Ss(e).toLowerCase());
  }
  function eE(e) {
    return e = Ss(e), e && e.replace(hC, qC).replace(bC, "");
  }
  var tE = YC("toUpperCase");
  function rE(e, t, r) {
    if (e = Ss(e), t = r ? void 0 : t, t === void 0) return UC(e) ? HC(e) : LC(e);
    return e.match(t) || [];
  }
  Xu.exports = QC;
});
var ed = (0, import_chunk_w1d7ygsk.V)(function(Zw, Zu) {
  Zu.exports = Na;
  var iE = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
  function Na(e, t) {
    if (typeof e === "string") t = e, e = void 0;
    var r = [];
    function i(n) {
      if (typeof n !== "string") {
        var a = s();
        if (Na.verbose) console.log("codegen: " + a);
        if (a = "return " + a, n) {
          var o = Object.keys(n), l = Array(o.length + 1), c = Array(o.length), u = 0;
          while (u < o.length) l[u] = o[u], c[u] = n[o[u++]];
          return l[u] = a, Function.apply(null, l).apply(null, c);
        }
        return Function(a)();
      }
      var d = Array(arguments.length - 1), h = 0;
      while (h < d.length) d[h] = arguments[++h];
      if (h = 0, n = n.replace(/%([%dfijs])/g, function(f, y) {
        var C = d[h++];
        switch (y) {
          case "d":
          case "f":
            return String(Number(C));
          case "i":
            return String(Math.floor(C));
          case "j":
            return JSON.stringify(C);
          case "s":
            return String(C);
        }
        return "%";
      }), h !== d.length) throw Error("parameter count mismatch");
      return r.push(n), i;
    }
    function s(n) {
      return "function " + sE(n || t) + "(" + (e && e.join(",") || "") + `){
  ` + r.join(`
  `) + `
}`;
    }
    return i.toString = s, i;
  }
  Na.verbose = false;
  function sE(e) {
    if (!e) return "";
    if (e = String(e).replace(/[^\w$]/g, ""), !e) return "";
    if (/^\d/.test(e)) e = "_" + e;
    return iE.test(e) ? e + "_" : e;
  }
});
var td = (0, import_chunk_w1d7ygsk.V)(function(exports, module) {
  module.exports = inquire;
  function inquire(moduleName) {
    try {
      var mod = moduleName === "long" ? (0, import_chunk_psv74hq2.M4o)() : moduleName === "buffer" ? (0, import_chunk_w1d7ygsk.ft)("buffer") : moduleName === "fs" ? (0, import_chunk_w1d7ygsk.ft)("fs") : eval("quire".replace(/^/, "re"))(moduleName);
      if (mod && (mod.length || Object.keys(mod).length)) return mod;
    } catch (e) {
    }
    return null;
  }
});
var id = (0, import_chunk_w1d7ygsk.V)(function(eA, rd) {
  rd.exports = wi;
  var nE = (0, import_chunk_psv74hq2.HQs)(), aE = td(), Ma = aE("fs");
  function wi(e, t, r) {
    if (typeof t === "function") r = t, t = {};
    else if (!t) t = {};
    if (!r) return nE(wi, this, e, t);
    if (!t.xhr && Ma && Ma.readFile) return Ma.readFile(e, function(s, n) {
      return s && typeof XMLHttpRequest < "u" ? wi.xhr(e, t, r) : s ? r(s) : r(null, t.binary ? n : n.toString("utf8"));
    });
    return wi.xhr(e, t, r);
  }
  wi.xhr = function(t, r, i) {
    var s = new XMLHttpRequest();
    if (s.onreadystatechange = function() {
      if (s.readyState !== 4) return;
      if (s.status !== 0 && s.status !== 200) return i(Error("status " + s.status));
      if (r.binary) {
        var a = s.response;
        if (!a) {
          a = [];
          for (var o = 0; o < s.responseText.length; ++o) a.push(s.responseText.charCodeAt(o) & 255);
        }
        return i(null, typeof Uint8Array < "u" ? new Uint8Array(a) : a);
      }
      return i(null, s.responseText);
    }, r.binary) {
      if ("overrideMimeType" in s) s.overrideMimeType("text/plain; charset=x-user-defined");
      s.responseType = "arraybuffer";
    }
    s.open("GET", t), s.send();
  };
});
var ad = (0, import_chunk_w1d7ygsk.V)(function(nd) {
  var xa = nd, sd = xa.isAbsolute = function(t) {
    return /^(?:\/|\w+:)/.test(t);
  }, Ia = xa.normalize = function(t) {
    t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
    var r = t.split("/"), i = sd(t), s = "";
    if (i) s = r.shift() + "/";
    for (var n = 0; n < r.length; ) if (r[n] === "..") if (n > 0 && r[n - 1] !== "..") r.splice(--n, 2);
    else if (i) r.splice(n, 1);
    else ++n;
    else if (r[n] === ".") r.splice(n, 1);
    else ++n;
    return s + r.join("/");
  };
  xa.resolve = function(t, r, i) {
    if (!i) r = Ia(r);
    if (sd(r)) return r;
    if (!i) t = Ia(t);
    return (t = t.replace(/(?:\/|^)[^/]+$/, "")).length ? Ia(t + "/" + r) : r;
  };
});
var ld = (0, import_chunk_w1d7ygsk.V)(function(od) {
  var Cs = od;
  Cs.numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
  Cs.typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
  Cs.reservedRe = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
  Cs.unsafePropertyRe = /^(?:__proto__|prototype|constructor)$/;
});
var zr = (0, import_chunk_w1d7ygsk.V)(function(iA, dd) {
  dd.exports = U;
  var Es = Kt();
  ((U.prototype = Object.create(Es.prototype)).constructor = U).className = "Namespace";
  var ka = Yt(), Br = de(), oE = Sr(), yr, Ur, _r;
  U.fromJSON = function(t, r, i) {
    return i = Br.checkDepth(i), new U(t, r.options).addJSON(r.nested, i);
  };
  function cd(e, t) {
    if (!(e && e.length)) return;
    var r = {};
    for (var i = 0; i < e.length; ++i) r[e[i].name] = e[i].toJSON(t);
    return r;
  }
  U.arrayToJSON = cd;
  U.isReservedId = function(t, r) {
    if (t) {
      for (var i = 0; i < t.length; ++i) if (typeof t[i] !== "string" && t[i][0] <= r && t[i][1] > r) return true;
    }
    return false;
  };
  U.isReservedName = function(t, r) {
    if (t) {
      for (var i = 0; i < t.length; ++i) if (t[i] === r) return true;
    }
    return false;
  };
  function U(e, t) {
    Es.call(this, e, t), this.nested = void 0, this._nestedArray = null, this._lookupCache = /* @__PURE__ */ Object.create(null), this._needsRecursiveFeatureResolution = true, this._needsRecursiveResolve = true;
  }
  function ud(e) {
    e._nestedArray = null, e._lookupCache = /* @__PURE__ */ Object.create(null);
    var t = e;
    while (t = t.parent) t._lookupCache = /* @__PURE__ */ Object.create(null);
    return e;
  }
  Object.defineProperty(U.prototype, "nestedArray", { get: function() {
    return this._nestedArray || (this._nestedArray = Br.toArray(this.nested));
  } });
  U.prototype.toJSON = function(t) {
    return Br.toObject(["options", this.options, "nested", cd(this.nestedArray, t)]);
  };
  U.prototype.addJSON = function(t, r) {
    r = Br.checkDepth(r);
    var i = this;
    if (t) for (var s = Object.keys(t), n = 0, a; n < s.length; ++n) a = t[s[n]], i.add((a.fields !== void 0 ? yr.fromJSON : a.values !== void 0 ? _r.fromJSON : a.methods !== void 0 ? Ur.fromJSON : a.id !== void 0 ? ka.fromJSON : U.fromJSON)(s[n], a, r + 1));
    return this;
  };
  U.prototype.get = function(t) {
    return this.nested && Object.prototype.hasOwnProperty.call(this.nested, t) ? this.nested[t] : null;
  };
  U.prototype.getEnum = function(t) {
    if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, t) && this.nested[t] instanceof _r) return this.nested[t].values;
    throw Error("no such enum: " + t);
  };
  U.prototype.add = function(t) {
    if (!(t instanceof ka && t.extend !== void 0 || t instanceof yr || t instanceof oE || t instanceof _r || t instanceof Ur || t instanceof U)) throw TypeError("object must be a valid nested object");
    if (t.name === "__proto__") return this;
    if (!this.nested) this.nested = {};
    else {
      var r = this.get(t.name);
      if (r) if (r instanceof U && t instanceof U && !(r instanceof yr || r instanceof Ur)) {
        var i = r.nestedArray;
        for (var s = 0; s < i.length; ++s) t.add(i[s]);
        if (this.remove(r), !this.nested) this.nested = {};
        t.setOptions(r.options, true);
      } else throw Error("duplicate name '" + t.name + "' in " + this);
    }
    if (this.nested[t.name] = t, !(this instanceof yr || this instanceof Ur || this instanceof _r || this instanceof ka)) {
      if (!t._edition) t._edition = t._defaultEdition;
    }
    this._needsRecursiveFeatureResolution = true, this._needsRecursiveResolve = true;
    var n = this;
    while (n = n.parent) n._needsRecursiveFeatureResolution = true, n._needsRecursiveResolve = true;
    return t.onAdd(this), ud(this);
  };
  U.prototype.remove = function(t) {
    if (!(t instanceof Es)) throw TypeError("object must be a ReflectionObject");
    if (t.parent !== this) throw Error(t + " is not a member of " + this);
    if (delete this.nested[t.name], !Object.keys(this.nested).length) this.nested = void 0;
    return t.onRemove(this), ud(this);
  };
  U.prototype.define = function(t, r) {
    if (Br.isString(t)) t = t.split(".");
    else if (!Array.isArray(t)) throw TypeError("illegal path");
    if (t && t.length && t[0] === "") throw Error("path must be relative");
    var i = this;
    while (t.length > 0) {
      var s = t.shift();
      if (i.nested && i.nested[s]) {
        if (i = i.nested[s], !(i instanceof U)) throw Error("path conflicts with non-namespace objects");
      } else i.add(i = new U(s));
    }
    if (r) i.addJSON(r);
    return i;
  };
  U.prototype.resolveAll = function() {
    if (!this._needsRecursiveResolve) return this;
    this._resolveFeaturesRecursive(this._edition);
    var t = this.nestedArray, r = 0;
    this.resolve();
    while (r < t.length) if (t[r] instanceof U) t[r++].resolveAll();
    else t[r++].resolve();
    return this._needsRecursiveResolve = false, this;
  };
  U.prototype._resolveFeaturesRecursive = function(t) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return this._needsRecursiveFeatureResolution = false, t = this._edition || t, Es.prototype._resolveFeaturesRecursive.call(this, t), this.nestedArray.forEach((r) => {
      r._resolveFeaturesRecursive(t);
    }), this;
  };
  U.prototype.lookup = function(t, r, i) {
    if (typeof r === "boolean") i = r, r = void 0;
    else if (r && !Array.isArray(r)) r = [r];
    if (Br.isString(t) && t.length) {
      if (t === ".") return this.root;
      t = t.split(".");
    } else if (!t.length) return this;
    var s = t.join(".");
    if (t[0] === "") return this.root.lookup(t.slice(1), r);
    var n = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects["." + s];
    if (n && (!r || r.indexOf(n.constructor) > -1)) return n;
    if (n = this._lookupImpl(t, s), n && (!r || r.indexOf(n.constructor) > -1)) return n;
    if (i) return null;
    var a = this;
    while (a.parent) {
      if (n = a.parent._lookupImpl(t, s), n && (!r || r.indexOf(n.constructor) > -1)) return n;
      a = a.parent;
    }
    return null;
  };
  U.prototype._lookupImpl = function(t, r) {
    if (Object.prototype.hasOwnProperty.call(this._lookupCache, r)) return this._lookupCache[r];
    var i = this.get(t[0]), s = null;
    if (i) {
      if (t.length === 1) s = i;
      else if (i instanceof U) t = t.slice(1), s = i._lookupImpl(t, t.join("."));
    } else for (var n = 0; n < this.nestedArray.length; ++n) if (this._nestedArray[n] instanceof U && (i = this._nestedArray[n]._lookupImpl(t, r))) {
      s = i;
      break;
    }
    return this._lookupCache[r] = s, s;
  };
  U.prototype.lookupType = function(t) {
    var r = this.lookup(t, [yr]);
    if (!r) throw Error("no such type: " + t);
    return r;
  };
  U.prototype.lookupEnum = function(t) {
    var r = this.lookup(t, [_r]);
    if (!r) throw Error("no such Enum '" + t + "' in " + this);
    return r;
  };
  U.prototype.lookupTypeOrEnum = function(t) {
    var r = this.lookup(t, [yr, _r]);
    if (!r) throw Error("no such Type or Enum '" + t + "' in " + this);
    return r;
  };
  U.prototype.lookupService = function(t) {
    var r = this.lookup(t, [Ur]);
    if (!r) throw Error("no such Service '" + t + "' in " + this);
    return r;
  };
  U._configure = function(e, t, r) {
    yr = e, Ur = t, _r = r;
  };
});
var Ts = (0, import_chunk_w1d7ygsk.V)(function(sA, hd) {
  hd.exports = Lt;
  var Da = Yt();
  ((Lt.prototype = Object.create(Da.prototype)).constructor = Lt).className = "MapField";
  var lE = Cr(), Ai = de();
  function Lt(e, t, r, i, s, n) {
    if (Da.call(this, e, t, i, void 0, void 0, s, n), !Ai.isString(r)) throw TypeError("keyType must be a string");
    this.keyType = r, this.resolvedKeyType = null, this.map = true;
  }
  Lt.fromJSON = function(t, r) {
    return new Lt(t, r.id, r.keyType, r.type, r.options, r.comment);
  };
  Lt.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : false;
    return Ai.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", r ? this.comment : void 0]);
  };
  Lt.prototype.resolve = function() {
    if (this.resolved) return this;
    if (lE.mapKey[this.keyType] === void 0) throw Error("invalid key type: " + this.keyType);
    return Da.prototype.resolve.call(this);
  };
  Lt.d = function(t, r, i) {
    if (typeof i === "function") i = Ai.decorateType(i).name;
    else if (i && typeof i === "object") i = Ai.decorateEnum(i).name;
    return function(n, a) {
      Ai.decorateType(n.constructor).add(new Lt(a, t, r, i));
    };
  };
});
var Rs = (0, import_chunk_w1d7ygsk.V)(function(nA, fd) {
  fd.exports = Er;
  var La = Kt();
  ((Er.prototype = Object.create(La.prototype)).constructor = Er).className = "Method";
  var Hr = de();
  function Er(e, t, r, i, s, n, a, o, l) {
    if (Hr.isObject(s)) a = s, s = n = void 0;
    else if (Hr.isObject(n)) a = n, n = void 0;
    if (!(t === void 0 || Hr.isString(t))) throw TypeError("type must be a string");
    if (!Hr.isString(r)) throw TypeError("requestType must be a string");
    if (!Hr.isString(i)) throw TypeError("responseType must be a string");
    La.call(this, e, a), this.type = t || "rpc", this.requestType = r, this.requestStream = s ? true : void 0, this.responseType = i, this.responseStream = n ? true : void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = o, this.parsedOptions = l;
  }
  Er.fromJSON = function(t, r) {
    return new Er(t, r.type, r.requestType, r.responseType, r.requestStream, r.responseStream, r.options, r.comment, r.parsedOptions);
  };
  Er.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : false;
    return Hr.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", r ? this.comment : void 0, "parsedOptions", this.parsedOptions]);
  };
  Er.prototype.resolve = function() {
    if (this.resolved) return this;
    return this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), La.prototype.resolve.call(this);
  };
});
var bs = (0, import_chunk_w1d7ygsk.V)(function(aA, gd) {
  gd.exports = De;
  var Ft = zr();
  ((De.prototype = Object.create(Ft.prototype)).constructor = De).className = "Service";
  var Fa = Rs(), Wr = de(), cE = (0, import_chunk_psv74hq2.DQs)(), uE = Wr.patterns.reservedRe;
  function De(e, t) {
    Ft.call(this, e, t), this.methods = {}, this._methodsArray = null;
  }
  De.fromJSON = function(t, r, i) {
    i = Wr.checkDepth(i);
    var s = new De(t, r.options);
    if (r.methods) for (var n = Object.keys(r.methods), a = 0; a < n.length; ++a) s.add(Fa.fromJSON(n[a], r.methods[n[a]]));
    if (r.nested) s.addJSON(r.nested, i);
    if (r.edition) s._edition = r.edition;
    return s.comment = r.comment, s._defaultEdition = "proto3", s;
  };
  De.prototype.toJSON = function(t) {
    var r = Ft.prototype.toJSON.call(this, t), i = t ? Boolean(t.keepComments) : false;
    return Wr.toObject(["edition", this._editionToJSON(), "options", r && r.options || void 0, "methods", Ft.arrayToJSON(this.methodsArray, t) || {}, "nested", r && r.nested || void 0, "comment", i ? this.comment : void 0]);
  };
  Object.defineProperty(De.prototype, "methodsArray", { get: function() {
    return this._methodsArray || (this._methodsArray = Wr.toArray(this.methods));
  } });
  function pd(e) {
    return e._methodsArray = null, e;
  }
  De.prototype.get = function(t) {
    return Object.prototype.hasOwnProperty.call(this.methods, t) ? this.methods[t] : Ft.prototype.get.call(this, t);
  };
  De.prototype.resolveAll = function() {
    if (!this._needsRecursiveResolve) return this;
    Ft.prototype.resolve.call(this);
    var t = this.methodsArray;
    for (var r = 0; r < t.length; ++r) t[r].resolve();
    return this;
  };
  De.prototype._resolveFeaturesRecursive = function(t) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return t = this._edition || t, Ft.prototype._resolveFeaturesRecursive.call(this, t), this.methodsArray.forEach((r) => {
      r._resolveFeaturesRecursive(t);
    }), this;
  };
  De.prototype.add = function(t) {
    if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
    if (t instanceof Fa) {
      if (t.name === "__proto__") return this;
      return this.methods[t.name] = t, t.parent = this, pd(this);
    }
    return Ft.prototype.add.call(this, t);
  };
  De.prototype.remove = function(t) {
    if (t instanceof Fa) {
      if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
      return delete this.methods[t.name], t.parent = null, pd(this);
    }
    return Ft.prototype.remove.call(this, t);
  };
  De.prototype.create = function(t, r, i) {
    var s = new cE.Service(t, r, i);
    for (var n = 0, a; n < this.methodsArray.length; ++n) {
      var o = Wr.lcFirst((a = this._methodsArray[n]).resolve().name).replace(/[^$\w_]/g, "");
      s[o] = Wr.codegen(["r", "c"], uE.test(o) ? o + "_" : o)("return this.rpcCall(m,q,s,r,c)")({ m: a, q: a.resolvedRequestType.ctor, s: a.resolvedResponseType.ctor });
    }
    return s;
  };
});
var Os = (0, import_chunk_w1d7ygsk.V)(function(oA, md) {
  md.exports = pt;
  var dE = (0, import_chunk_psv74hq2.fgt)();
  function pt(e) {
    if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) {
      var i = t[r];
      if (i === "__proto__") continue;
      this[i] = e[i];
    }
  }
  pt.create = function(t) {
    return this.$type.create(t);
  };
  pt.encode = function(t, r) {
    return this.$type.encode(t, r);
  };
  pt.encodeDelimited = function(t, r) {
    return this.$type.encodeDelimited(t, r);
  };
  pt.decode = function(t) {
    return this.$type.decode(t);
  };
  pt.decodeDelimited = function(t) {
    return this.$type.decodeDelimited(t);
  };
  pt.verify = function(t) {
    return this.$type.verify(t);
  };
  pt.fromObject = function(t) {
    return this.$type.fromObject(t);
  };
  pt.toObject = function(t, r) {
    return this.$type.toObject(t, r);
  };
  pt.prototype.toJSON = function() {
    return this.$type.toObject(this, dE.toJSONOptions);
  };
});
var qa = (0, import_chunk_w1d7ygsk.V)(function(lA, yd) {
  yd.exports = pE;
  var hE = st(), qt = Cr(), vd = de();
  function fE(e) {
    return "missing required '" + e.name + "'";
  }
  function pE(e) {
    var t = vd.codegen(["r", "l", "e", "n"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("if(n===undefined)n=0")("if(n>Reader.recursionLimit)")('throw Error("maximum nesting depth exceeded")')("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function(o) {
      return o.map;
    }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){"), r = 0;
    for (; r < e.fieldsArray.length; ++r) {
      var i = e._fieldsArray[r].resolve(), s = i.resolvedType instanceof hE ? "int32" : i.type, n = "m" + vd.safeProp(i.name);
      if (t("case %i: {", i.id), i.map) {
        if (t("if(%s===util.emptyObject)", n)("%s={}", n)("var c2 = r.uint32()+r.pos"), qt.defaults[i.keyType] !== void 0) t("k=%j", qt.defaults[i.keyType]);
        else t("k=null");
        if (qt.defaults[s] !== void 0) t("value=%j", qt.defaults[s]);
        else t("value=null");
        if (t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", i.keyType)("case 2:"), qt.basic[s] === void 0) t("value=types[%i].decode(r,r.uint32(),undefined,n+1)", r);
        else t("value=r.%s()", s);
        if (t("break")("default:")("r.skipType(tag2&7,n)")("break")("}")("}"), qt.long[i.keyType] !== void 0) t('%s[typeof k==="object"?util.longToHash(k):k]=value', n);
        else {
          if (i.keyType === "string") t('if(k==="__proto__")')("util.makeProp(%s,k)", n);
          t("%s[k]=value", n);
        }
      } else if (i.repeated) {
        if (t("if(!(%s&&%s.length))", n, n)("%s=[]", n), qt.packed[s] !== void 0) t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", n, s)("}else");
        if (qt.basic[s] === void 0) t(i.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4),n+1))" : "%s.push(types[%i].decode(r,r.uint32(),undefined,n+1))", n, r);
        else t("%s.push(r.%s())", n, s);
      } else if (qt.basic[s] === void 0) t(i.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4),n+1)" : "%s=types[%i].decode(r,r.uint32(),undefined,n+1)", n, r);
      else t("%s=r.%s()", n, s);
      t("break")("}");
    }
    t("default:")("r.skipType(t&7,n)")("break")("}")("}");
    for (r = 0; r < e._fieldsArray.length; ++r) {
      var a = e._fieldsArray[r];
      if (a.required) t("if(!m.hasOwnProperty(%j))", a.name)("throw util.ProtocolError(%j,{instance:m})", fE(a));
    }
    return t("return m");
  }
});
var za = (0, import_chunk_w1d7ygsk.V)(function(cA, _d) {
  _d.exports = vE;
  var gE = st(), Ua = de();
  function ze(e, t) {
    return e.name + ": " + t + (e.repeated && t !== "array" ? "[]" : e.map && t !== "object" ? "{k:" + e.keyType + "}" : "") + " expected";
  }
  function Ba(e, t, r, i) {
    if (t.resolvedType) if (t.resolvedType instanceof gE) {
      e("switch(%s){", i)("default:")("return%j", ze(t, "enum value"));
      for (var s = Object.keys(t.resolvedType.values), n = 0; n < s.length; ++n) e("case %i:", t.resolvedType.values[s[n]]);
      e("break")("}");
    } else e("{")("var e=types[%i].verify(%s,n+1);", r, i)("if(e)")("return%j+e", t.name + ".")("}");
    else switch (t.type) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        e("if(!util.isInteger(%s))", i)("return%j", ze(t, "integer"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", ze(t, "integer|Long"));
        break;
      case "float":
      case "double":
        e('if(typeof %s!=="number")', i)("return%j", ze(t, "number"));
        break;
      case "bool":
        e('if(typeof %s!=="boolean")', i)("return%j", ze(t, "boolean"));
        break;
      case "string":
        e("if(!util.isString(%s))", i)("return%j", ze(t, "string"));
        break;
      case "bytes":
        e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", ze(t, "buffer"));
        break;
    }
    return e;
  }
  function mE(e, t, r) {
    switch (t.keyType) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        e("if(!util.key32Re.test(%s))", r)("return%j", ze(t, "integer key"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        e("if(!util.key64Re.test(%s))", r)("return%j", ze(t, "integer|Long key"));
        break;
      case "bool":
        e("if(!util.key2Re.test(%s))", r)("return%j", ze(t, "boolean key"));
        break;
    }
    return e;
  }
  function vE(e) {
    var t = Ua.codegen(["m", "n"], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")("return%j", "maximum nesting depth exceeded"), r = e.oneofsArray, i = {};
    if (r.length) t("var p={}");
    for (var s = 0; s < e.fieldsArray.length; ++s) {
      var n = e._fieldsArray[s].resolve(), a = "m" + Ua.safeProp(n.name);
      if (n.optional) t("if(%s!=null&&m.hasOwnProperty(%j)){", a, n.name);
      if (n.map) t("if(!util.isObject(%s))", a)("return%j", ze(n, "object"))("var k=Object.keys(%s)", a)("for(var i=0;i<k.length;++i){"), mE(t, n, "k[i]"), Ba(t, n, s, a + "[k[i]]")("}");
      else if (n.repeated) t("if(!Array.isArray(%s))", a)("return%j", ze(n, "array"))("for(var i=0;i<%s.length;++i){", a), Ba(t, n, s, a + "[i]")("}");
      else {
        if (n.partOf) {
          var o = Ua.safeProp(n.partOf.name);
          if (i[n.partOf.name] === 1) t("if(p%s===1)", o)("return%j", n.partOf.name + ": multiple values");
          i[n.partOf.name] = 1, t("p%s=1", o);
        }
        Ba(t, n, s, a);
      }
      if (n.optional) t("}");
    }
    return t("return null");
  }
});
var ja = (0, import_chunk_w1d7ygsk.V)(function(Cd) {
  var Sd = Cd, Pi = st(), gt = de();
  function Ha(e, t, r, i) {
    var s = false;
    if (t.resolvedType) if (t.resolvedType instanceof Pi) {
      e("switch(d%s){", i);
      for (var n = t.resolvedType.values, a = Object.keys(n), o = 0; o < a.length; ++o) {
        if (n[a[o]] === t.typeDefault && !s) {
          if (e("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', i, i, i), !t.repeated) e("break");
          s = true;
        }
        e("case%j:", a[o])("case %i:", n[a[o]])("m%s=%j", i, n[a[o]])("break");
      }
      e("}");
    } else e('if(typeof d%s!=="object")', i)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s,n+1)", i, r, i);
    else {
      var l = false;
      switch (t.type) {
        case "double":
        case "float":
          e("m%s=Number(d%s)", i, i);
          break;
        case "uint32":
        case "fixed32":
          e("m%s=d%s>>>0", i, i);
          break;
        case "int32":
        case "sint32":
        case "sfixed32":
          e("m%s=d%s|0", i, i);
          break;
        case "uint64":
          l = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", i, i, l)('else if(typeof d%s==="string")', i)("m%s=parseInt(d%s,10)", i, i)('else if(typeof d%s==="number")', i)("m%s=d%s", i, i)('else if(typeof d%s==="object")', i)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", i, i, i, l ? "true" : "");
          break;
        case "bytes":
          e('if(typeof d%s==="string")', i)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", i, i, i)("else if(d%s.length >= 0)", i)("m%s=d%s", i, i);
          break;
        case "string":
          e("m%s=String(d%s)", i, i);
          break;
        case "bool":
          e("m%s=Boolean(d%s)", i, i);
          break;
      }
    }
    return e;
  }
  Sd.fromObject = function(t) {
    var r = t.fieldsArray, i = gt.codegen(["d", "n"], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d")("if(n===undefined)n=0")("if(n>util.recursionLimit)")('throw Error("maximum nesting depth exceeded")');
    if (!r.length) return i("return new this.ctor");
    i("var m=new this.ctor");
    for (var s = 0; s < r.length; ++s) {
      var n = r[s].resolve(), a = gt.safeProp(n.name);
      if (n.map) i("if(d%s){", a)('if(typeof d%s!=="object")', a)("throw TypeError(%j)", n.fullName + ": object expected")("m%s={}", a)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", a), i('if(ks[i]==="__proto__")')("util.makeProp(m%s,ks[i])", a), Ha(i, n, s, a + "[ks[i]]")("}")("}");
      else if (n.repeated) i("if(d%s){", a)("if(!Array.isArray(d%s))", a)("throw TypeError(%j)", n.fullName + ": array expected")("m%s=[]", a)("for(var i=0;i<d%s.length;++i){", a), Ha(i, n, s, a + "[i]")("}")("}");
      else {
        if (!(n.resolvedType instanceof Pi)) i("if(d%s!=null){", a);
        if (Ha(i, n, s, a), !(n.resolvedType instanceof Pi)) i("}");
      }
    }
    return i("return m");
  };
  function Wa(e, t, r, i) {
    if (t.resolvedType) if (t.resolvedType instanceof Pi) e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", i, r, i, i, r, i, i);
    else e("d%s=types[%i].toObject(m%s,o)", i, r, i);
    else {
      var s = false;
      switch (t.type) {
        case "double":
        case "float":
          e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
          break;
        case "uint64":
          s = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e('if(typeof m%s==="number")', i)("d%s=o.longs===String?String(m%s):m%s", i, i, i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", i, i, i, i, s ? "true" : "", i);
          break;
        case "bytes":
          e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", i, i, i, i, i);
          break;
        default:
          e("d%s=m%s", i, i);
          break;
      }
    }
    return e;
  }
  Sd.toObject = function(t) {
    var r = t.fieldsArray.slice().sort(gt.compareFieldsById);
    if (!r.length) return gt.codegen()("return {}");
    var i = gt.codegen(["m", "o"], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), s = [], n = [], a = [], o = 0;
    for (; o < r.length; ++o) if (!r[o].partOf) (r[o].resolve().repeated ? s : r[o].map ? n : a).push(r[o]);
    if (s.length) {
      i("if(o.arrays||o.defaults){");
      for (o = 0; o < s.length; ++o) i("d%s=[]", gt.safeProp(s[o].name));
      i("}");
    }
    if (n.length) {
      i("if(o.objects||o.defaults){");
      for (o = 0; o < n.length; ++o) i("d%s={}", gt.safeProp(n[o].name));
      i("}");
    }
    if (a.length) {
      i("if(o.defaults){");
      for (o = 0; o < a.length; ++o) {
        var l = a[o], c = gt.safeProp(l.name);
        if (l.resolvedType instanceof Pi) i("d%s=o.enums===String?%j:%j", c, l.resolvedType.valuesById[l.typeDefault], l.typeDefault);
        else if (l.long) i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", l.typeDefault.low, l.typeDefault.high, l.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", c)("}else")("d%s=o.longs===String?%j:%i", c, l.typeDefault.toString(), l.typeDefault.toNumber());
        else if (l.bytes) {
          var u = Array.prototype.slice.call(l.typeDefault);
          i("if(o.bytes===String)d%s=%j", c, String.fromCharCode.apply(String, l.typeDefault))("else{")("d%s=%j", c, u)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", c, c)("}");
        } else i("d%s=%j", c, l.typeDefault);
      }
      i("}");
    }
    var d = false;
    for (o = 0; o < r.length; ++o) {
      var l = r[o], h = t._fieldsArray.indexOf(l), c = gt.safeProp(l.name);
      if (l.map) {
        if (!d) d = true, i("var ks2");
        i("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)("for(var j=0;j<ks2.length;++j){"), i('if(ks2[j]==="__proto__")')("util.makeProp(d%s,ks2[j])", c), Wa(i, l, h, c + "[ks2[j]]")("}");
      } else if (l.repeated) i("if(m%s&&m%s.length){", c, c)("d%s=[]", c)("for(var j=0;j<m%s.length;++j){", c), Wa(i, l, h, c + "[j]")("}");
      else if (i("if(m%s!=null&&m.hasOwnProperty(%j)){", c, l.name), Wa(i, l, h, c), l.partOf) i("if(o.oneofs)")("d%s=%j", gt.safeProp(l.partOf.name), l.name);
      i("}");
    }
    return i("return d");
  };
});
var Ga = (0, import_chunk_w1d7ygsk.V)(function(Ed) {
  var yE = Ed, _E = Os();
  yE[".google.protobuf.Any"] = { fromObject: function(e, t) {
    if (e && e["@type"]) {
      var r = e["@type"].substring(e["@type"].lastIndexOf("/") + 1), i = this.lookup(r);
      if (i) {
        var s = e["@type"].charAt(0) === "." ? e["@type"].slice(1) : e["@type"];
        if (s.indexOf("/") === -1) s = "/" + s;
        var n = t === void 0 ? 1 : t + 1;
        return this.create({ type_url: s, value: i.encode(i.fromObject(e, n)).finish() });
      }
    }
    return this.fromObject(e, t);
  }, toObject: function(e, t) {
    var r = "type.googleapis.com/", i = "", s = "";
    if (t && t.json && e.type_url && e.value) {
      s = e.type_url.substring(e.type_url.lastIndexOf("/") + 1), i = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
      var n = this.lookup(s);
      if (n) e = n.decode(e.value);
    }
    if (!(e instanceof this.ctor) && e instanceof _E) {
      var a = e.$type.toObject(e, t), o = e.$type.fullName[0] === "." ? e.$type.fullName.slice(1) : e.$type.fullName;
      if (i === "") i = r;
      return s = i + o, a["@type"] = s, a;
    }
    return this.toObject(e, t);
  } };
});
var Ps = (0, import_chunk_w1d7ygsk.V)(function(hA, Rd) {
  Rd.exports = J;
  var He = zr();
  ((J.prototype = Object.create(He.prototype)).constructor = J).className = "Type";
  var SE = st(), Ya = Sr(), ws = Yt(), CE = Ts(), EE = bs(), $a = Os(), Va = (0, import_chunk_psv74hq2.D4o)(), TE = (0, import_chunk_psv74hq2.H4o)(), ve = de(), RE = Ka(), bE = qa(), OE = za(), Td = ja(), wE = Ga();
  function J(e, t) {
    e = e.replace(/\W/g, ""), He.call(this, e, t), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
  }
  Object.defineProperties(J.prototype, { fieldsById: { get: function() {
    if (this._fieldsById) return this._fieldsById;
    this._fieldsById = {};
    for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
      var r = this.fields[e[t]], i = r.id;
      if (this._fieldsById[i]) throw Error("duplicate id " + i + " in " + this);
      this._fieldsById[i] = r;
    }
    return this._fieldsById;
  } }, fieldsArray: { get: function() {
    return this._fieldsArray || (this._fieldsArray = ve.toArray(this.fields));
  } }, oneofsArray: { get: function() {
    return this._oneofsArray || (this._oneofsArray = ve.toArray(this.oneofs));
  } }, ctor: { get: function() {
    return this._ctor || (this.ctor = J.generateConstructor(this)());
  }, set: function(e) {
    var t = e.prototype;
    if (!(t instanceof $a)) (e.prototype = new $a()).constructor = e, ve.merge(e.prototype, t);
    e.$type = e.prototype.$type = this, ve.merge(e, $a, true), this._ctor = e;
    var r = 0;
    for (; r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();
    var i = {};
    for (r = 0; r < this.oneofsArray.length; ++r) i[this._oneofsArray[r].resolve().name] = { get: ve.oneOfGetter(this._oneofsArray[r].oneof), set: ve.oneOfSetter(this._oneofsArray[r].oneof) };
    if (r) Object.defineProperties(e.prototype, i);
  } } });
  J.generateConstructor = function(t) {
    var r = ve.codegen(["p"], t.name);
    for (var i = 0, s; i < t.fieldsArray.length; ++i) if ((s = t._fieldsArray[i]).map) r("this%s={}", ve.safeProp(s.name));
    else if (s.repeated) r("this%s=[]", ve.safeProp(s.name));
    return r('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null&&ks[i]!=="__proto__")')("this[ks[i]]=p[ks[i]]");
  };
  function As(e) {
    return e._fieldsById = e._fieldsArray = e._oneofsArray = null, delete e.encode, delete e.decode, delete e.verify, e;
  }
  J.fromJSON = function(t, r, i) {
    i = ve.checkDepth(i);
    var s = new J(t, r.options);
    s.extensions = r.extensions, s.reserved = r.reserved;
    var n = Object.keys(r.fields), a = 0;
    for (; a < n.length; ++a) s.add((typeof r.fields[n[a]].keyType < "u" ? CE.fromJSON : ws.fromJSON)(n[a], r.fields[n[a]]));
    if (r.oneofs) for (n = Object.keys(r.oneofs), a = 0; a < n.length; ++a) s.add(Ya.fromJSON(n[a], r.oneofs[n[a]]));
    if (r.nested) for (n = Object.keys(r.nested), a = 0; a < n.length; ++a) {
      var o = r.nested[n[a]];
      s.add((o.id !== void 0 ? ws.fromJSON : o.fields !== void 0 ? J.fromJSON : o.values !== void 0 ? SE.fromJSON : o.methods !== void 0 ? EE.fromJSON : He.fromJSON)(n[a], o, i + 1));
    }
    if (r.extensions && r.extensions.length) s.extensions = r.extensions;
    if (r.reserved && r.reserved.length) s.reserved = r.reserved;
    if (r.group) s.group = true;
    if (r.comment) s.comment = r.comment;
    if (r.edition) s._edition = r.edition;
    return s._defaultEdition = "proto3", s;
  };
  J.prototype.toJSON = function(t) {
    var r = He.prototype.toJSON.call(this, t), i = t ? Boolean(t.keepComments) : false;
    return ve.toObject(["edition", this._editionToJSON(), "options", r && r.options || void 0, "oneofs", He.arrayToJSON(this.oneofsArray, t), "fields", He.arrayToJSON(this.fieldsArray.filter(function(s) {
      return !s.declaringField;
    }), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", r && r.nested || void 0, "comment", i ? this.comment : void 0]);
  };
  J.prototype.resolveAll = function() {
    if (!this._needsRecursiveResolve) return this;
    He.prototype.resolveAll.call(this);
    var t = this.oneofsArray;
    i = 0;
    while (i < t.length) t[i++].resolve();
    var r = this.fieldsArray, i = 0;
    while (i < r.length) r[i++].resolve();
    return this;
  };
  J.prototype._resolveFeaturesRecursive = function(t) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return t = this._edition || t, He.prototype._resolveFeaturesRecursive.call(this, t), this.oneofsArray.forEach((r) => {
      r._resolveFeatures(t);
    }), this.fieldsArray.forEach((r) => {
      r._resolveFeatures(t);
    }), this;
  };
  J.prototype.get = function(t) {
    if (Object.prototype.hasOwnProperty.call(this.fields, t)) return this.fields[t];
    if (this.oneofs && Object.prototype.hasOwnProperty.call(this.oneofs, t)) return this.oneofs[t];
    if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, t)) return this.nested[t];
    return null;
  };
  J.prototype.add = function(t) {
    if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
    if (t instanceof ws && t.extend === void 0) {
      if (this._fieldsById ? this._fieldsById[t.id] : this.fieldsById[t.id]) throw Error("duplicate id " + t.id + " in " + this);
      if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
      if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
      if (t.name === "__proto__") return this;
      if (t.parent) t.parent.remove(t);
      return this.fields[t.name] = t, t.message = this, t.onAdd(this), As(this);
    }
    if (t instanceof Ya) {
      if (t.name === "__proto__") return this;
      if (!this.oneofs) this.oneofs = {};
      return this.oneofs[t.name] = t, t.onAdd(this), As(this);
    }
    return He.prototype.add.call(this, t);
  };
  J.prototype.remove = function(t) {
    if (t instanceof ws && t.extend === void 0) {
      if (!this.fields || this.fields[t.name] !== t) throw Error(t + " is not a member of " + this);
      return delete this.fields[t.name], t.parent = null, t.onRemove(this), As(this);
    }
    if (t instanceof Ya) {
      if (!this.oneofs || this.oneofs[t.name] !== t) throw Error(t + " is not a member of " + this);
      return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), As(this);
    }
    return He.prototype.remove.call(this, t);
  };
  J.prototype.isReservedId = function(t) {
    return He.isReservedId(this.reserved, t);
  };
  J.prototype.isReservedName = function(t) {
    return He.isReservedName(this.reserved, t);
  };
  J.prototype.create = function(t) {
    return new this.ctor(t);
  };
  J.prototype.setup = function() {
    var t = this.fullName, r = [];
    for (var i = 0; i < this.fieldsArray.length; ++i) r.push(this._fieldsArray[i].resolve().resolvedType);
    this.encode = RE(this)({ Writer: TE, types: r, util: ve }), this.decode = bE(this)({ Reader: Va, types: r, util: ve }), this.verify = OE(this)({ types: r, util: ve }), this.fromObject = Td.fromObject(this)({ types: r, util: ve }), this.toObject = Td.toObject(this)({ types: r, util: ve });
    var s = wE[t];
    if (s) {
      var n = Object.create(this);
      n.fromObject = this.fromObject, this.fromObject = s.fromObject.bind(n), n.toObject = this.toObject, this.toObject = s.toObject.bind(n);
    }
    return this;
  };
  J.prototype.encode = function(t, r) {
    return this.setup().encode(t, r);
  };
  J.prototype.encodeDelimited = function(t, r) {
    return this.encode(t, r && r.len ? r.fork() : r).ldelim();
  };
  J.prototype.decode = function(t, r, i, s) {
    return this.setup().decode(t, r, i, s);
  };
  J.prototype.decodeDelimited = function(t) {
    if (!(t instanceof Va)) t = Va.create(t);
    return this.decode(t, t.uint32());
  };
  J.prototype.verify = function(t, r) {
    return this.setup().verify(t, r);
  };
  J.prototype.fromObject = function(t, r) {
    return this.setup().fromObject(t, r);
  };
  J.prototype.toObject = function(t, r) {
    return this.setup().toObject(t, r);
  };
  J.d = function(t) {
    return function(i) {
      ve.decorateType(i, t);
    };
  };
});
var xs = (0, import_chunk_w1d7ygsk.V)(function(fA, wd) {
  wd.exports = Le;
  var Is = zr();
  ((Le.prototype = Object.create(Is.prototype)).constructor = Le).className = "Root";
  var Ns = Yt(), Ja = st(), AE = Sr(), Ut = de(), Xa, Qa, Ni;
  function Le(e) {
    Is.call(this, "", e), this.deferred = [], this.files = [], this._edition = "proto2", this._fullyQualifiedObjects = {};
  }
  Le.fromJSON = function(t, r, i) {
    if (i = Ut.checkDepth(i), !r) r = new Le();
    if (t.options) r.setOptions(t.options);
    return r.addJSON(t.nested, i).resolveAll();
  };
  Le.prototype.resolvePath = Ut.path.resolve;
  Le.prototype.fetch = Ut.fetch;
  function Od() {
  }
  Le.prototype.load = function e(t, r, i) {
    if (typeof r === "function") i = r, r = void 0;
    var s = this;
    if (!i) return Ut.asPromise(e, s, t, r);
    var n = i === Od;
    function a(m, f) {
      if (!i) return;
      if (n) throw m;
      if (f) f.resolveAll();
      var y = i;
      i = null, y(m, f);
    }
    function o(m) {
      var f = m.lastIndexOf("google/protobuf/");
      if (f > -1) {
        var y = m.substring(f);
        if (y in Ni) return y;
      }
      return null;
    }
    function l(m, f) {
      try {
        if (Ut.isString(f) && f.charAt(0) === "{") f = JSON.parse(f);
        if (!Ut.isString(f)) s.setOptions(f.options).addJSON(f.nested);
        else {
          Qa.filename = m;
          var y = Qa(f, s, r), C, E = 0;
          if (y.imports) {
            for (; E < y.imports.length; ++E) if (C = o(y.imports[E]) || s.resolvePath(m, y.imports[E])) c(C);
          }
          if (y.weakImports) {
            for (E = 0; E < y.weakImports.length; ++E) if (C = o(y.weakImports[E]) || s.resolvePath(m, y.weakImports[E])) c(C, true);
          }
        }
      } catch (A) {
        a(A);
      }
      if (!n && !u) a(null, s);
    }
    function c(m, f) {
      if (m = o(m) || m, s.files.indexOf(m) > -1) return;
      if (s.files.push(m), m in Ni) {
        if (n) l(m, Ni[m]);
        else ++u, setTimeout(function() {
          --u, l(m, Ni[m]);
        });
        return;
      }
      if (n) {
        var y;
        try {
          y = Ut.fs.readFileSync(m).toString("utf8");
        } catch (C) {
          if (!f) a(C);
          return;
        }
        l(m, y);
      } else ++u, s.fetch(m, function(C, E) {
        if (--u, !i) return;
        if (C) {
          if (!f) a(C);
          else if (!u) a(null, s);
          return;
        }
        l(m, E);
      });
    }
    var u = 0;
    if (Ut.isString(t)) t = [t];
    for (var d = 0, h; d < t.length; ++d) if (h = s.resolvePath("", t[d])) c(h);
    if (n) return s.resolveAll(), s;
    if (!u) a(null, s);
    return s;
  };
  Le.prototype.loadSync = function(t, r) {
    if (!Ut.isNode) throw Error("not supported");
    return this.load(t, r, Od);
  };
  Le.prototype.resolveAll = function() {
    if (!this._needsRecursiveResolve) return this;
    if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(t) {
      return "'extend " + t.extend + "' in " + t.parent.fullName;
    }).join(", "));
    return Is.prototype.resolveAll.call(this);
  };
  var Ms = /^[A-Z]/;
  function bd(e, t) {
    var r = t.parent.lookup(t.extend);
    if (r) {
      var i = new Ns(t.fullName, t.id, t.type, t.rule, void 0, t.options);
      if (r.get(i.name)) return true;
      return i.declaringField = t, t.extensionField = i, r.add(i), true;
    }
    return false;
  }
  Le.prototype._handleAdd = function(t) {
    if (t instanceof Ns) {
      if (t.extend !== void 0 && !t.extensionField) {
        if (!bd(this, t)) this.deferred.push(t);
      }
    } else if (t instanceof Ja) {
      if (Ms.test(t.name)) t.parent[t.name] = t.values;
    } else if (!(t instanceof AE)) {
      if (t instanceof Xa) for (var r = 0; r < this.deferred.length; ) if (bd(this, this.deferred[r])) this.deferred.splice(r, 1);
      else ++r;
      for (var i = 0; i < t.nestedArray.length; ++i) this._handleAdd(t._nestedArray[i]);
      if (Ms.test(t.name)) t.parent[t.name] = t;
    }
    if (t instanceof Xa || t instanceof Ja || t instanceof Ns) this._fullyQualifiedObjects[t.fullName] = t;
  };
  Le.prototype._handleRemove = function(t) {
    if (t instanceof Ns) {
      if (t.extend !== void 0) if (t.extensionField) t.extensionField.parent.remove(t.extensionField), t.extensionField = null;
      else {
        var r = this.deferred.indexOf(t);
        if (r > -1) this.deferred.splice(r, 1);
      }
    } else if (t instanceof Ja) {
      if (Ms.test(t.name)) delete t.parent[t.name];
    } else if (t instanceof Is) {
      for (var i = 0; i < t.nestedArray.length; ++i) this._handleRemove(t._nestedArray[i]);
      if (Ms.test(t.name)) delete t.parent[t.name];
    }
    delete this._fullyQualifiedObjects[t.fullName];
  };
  Le._configure = function(e, t, r) {
    Xa = e, Qa = t, Ni = r;
  };
});
var de = (0, import_chunk_w1d7ygsk.V)(function(pA, Nd) {
  var Z = Nd.exports = (0, import_chunk_psv74hq2.fgt)(), Ad = (0, import_chunk_psv74hq2.LQs)(), Za, eo;
  Z.codegen = ed();
  Z.fetch = id();
  Z.path = ad();
  Z.patterns = ld();
  var Pd = Z.patterns.reservedRe, PE = Z.patterns.unsafePropertyRe;
  Z.fs = Z.inquire("fs");
  Z.checkDepth = function(t) {
    if (t === void 0) t = 0;
    if (t > Z.recursionLimit) throw Error("max depth exceeded");
    return t;
  };
  Z.toArray = function(t) {
    if (t) {
      var r = Object.keys(t), i = Array(r.length), s = 0;
      while (s < r.length) i[s] = t[r[s++]];
      return i;
    }
    return [];
  };
  Z.toObject = function(t) {
    var r = {}, i = 0;
    while (i < t.length) {
      var s = t[i++], n = t[i++];
      if (n !== void 0) r[s] = n;
    }
    return r;
  };
  Z.isReserved = function(t) {
    return Pd.test(t);
  };
  Z.safeProp = function(t) {
    if (!/^[$\w_]+$/.test(t) || Pd.test(t)) return "[" + JSON.stringify(t) + "]";
    return "." + t;
  };
  Z.ucFirst = function(t) {
    return t.charAt(0).toUpperCase() + t.substring(1);
  };
  var NE = /_([a-z])/g;
  Z.camelCase = function(t) {
    return t.substring(0, 1) + t.substring(1).replace(NE, function(r, i) {
      return i.toUpperCase();
    });
  };
  Z.compareFieldsById = function(t, r) {
    return t.id - r.id;
  };
  Z.decorateType = function(t, r) {
    if (t.$type) {
      if (r && t.$type.name !== r) Z.decorateRoot.remove(t.$type), t.$type.name = r, Z.decorateRoot.add(t.$type);
      return t.$type;
    }
    if (!Za) Za = Ps();
    var i = new Za(r || t.name);
    return Z.decorateRoot.add(i), i.ctor = t, Object.defineProperty(t, "$type", { value: i, enumerable: false }), Object.defineProperty(t.prototype, "$type", { value: i, enumerable: false }), i;
  };
  var ME = 0;
  Z.decorateEnum = function(t) {
    if (t.$type) return t.$type;
    if (!eo) eo = st();
    var r = new eo("Enum" + ME++, t);
    return Z.decorateRoot.add(r), Object.defineProperty(t, "$type", { value: r, enumerable: false }), r;
  };
  Z.setProperty = function(t, r, i, s) {
    function n(a, o, l) {
      var c = o.shift();
      if (PE.test(c)) return a;
      if (o.length > 0) a[c] = n(a[c] || {}, o, l);
      else {
        var u = a[c];
        if (u && s) return a;
        if (u) l = [].concat(u).concat(l);
        a[c] = l;
      }
      return a;
    }
    if (typeof t !== "object") throw TypeError("dst must be an object");
    if (!r) throw TypeError("path must be specified");
    return r = r.split("."), n(t, r, i);
  };
  Object.defineProperty(Z, "decorateRoot", { get: function() {
    return Ad.decorated || (Ad.decorated = new (xs())());
  } });
});
var Cr = (0, import_chunk_w1d7ygsk.V)(function(Md) {
  var Mi = Md, IE = de(), xE = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
  function Ii(e, t) {
    var r = 0, i = /* @__PURE__ */ Object.create(null);
    t |= 0;
    while (r < e.length) i[xE[r + t]] = e[r++];
    return i;
  }
  Mi.basic = Ii([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
  Mi.defaults = Ii([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", IE.emptyArray, null]);
  Mi.long = Ii([0, 0, 0, 1, 1], 7);
  Mi.mapKey = Ii([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
  Mi.packed = Ii([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
});
var Yt = (0, import_chunk_w1d7ygsk.V)(function(mA, xd) {
  xd.exports = he;
  var ki = Kt();
  ((he.prototype = Object.create(ki.prototype)).constructor = he).className = "Field";
  var Id = st(), to = Cr(), se = de(), xi, kE = /^required|optional|repeated$/;
  he.fromJSON = function(t, r) {
    var i = new he(t, r.id, r.type, r.rule, r.extend, r.options, r.comment);
    if (r.edition) i._edition = r.edition;
    return i._defaultEdition = "proto3", i;
  };
  function he(e, t, r, i, s, n, a) {
    if (se.isObject(i)) a = s, n = i, i = s = void 0;
    else if (se.isObject(s)) a = n, n = s, s = void 0;
    if (ki.call(this, e, n), !se.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");
    if (!se.isString(r)) throw TypeError("type must be a string");
    if (i !== void 0 && !kE.test(i = i.toString().toLowerCase())) throw TypeError("rule must be a string rule");
    if (s !== void 0 && !se.isString(s)) throw TypeError("extend must be a string");
    if (i === "proto3_optional") i = "optional";
    this.rule = i && i !== "optional" ? i : void 0, this.type = r, this.id = t, this.extend = s || void 0, this.repeated = i === "repeated", this.map = false, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = se.Long ? to.long[r] !== void 0 : false, this.bytes = r === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this.comment = a;
  }
  Object.defineProperty(he.prototype, "required", { get: function() {
    return this._features.field_presence === "LEGACY_REQUIRED";
  } });
  Object.defineProperty(he.prototype, "optional", { get: function() {
    return !this.required;
  } });
  Object.defineProperty(he.prototype, "delimited", { get: function() {
    return this.resolvedType instanceof xi && this._features.message_encoding === "DELIMITED";
  } });
  Object.defineProperty(he.prototype, "packed", { get: function() {
    return this._features.repeated_field_encoding === "PACKED";
  } });
  Object.defineProperty(he.prototype, "hasPresence", { get: function() {
    if (this.repeated || this.map) return false;
    return this.partOf || this.declaringField || this.extensionField || this._features.field_presence !== "IMPLICIT";
  } });
  he.prototype.setOption = function(t, r, i) {
    return ki.prototype.setOption.call(this, t, r, i);
  };
  he.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : false;
    return se.toObject(["edition", this._editionToJSON(), "rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", r ? this.comment : void 0]);
  };
  he.prototype.resolve = function() {
    if (this.resolved) return this;
    if ((this.typeDefault = to.defaults[this.type]) === void 0) if (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof xi) this.typeDefault = null;
    else this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
    else if (this.options && this.options.proto3_optional) this.typeDefault = null;
    if (this.options && this.options.default != null) {
      if (this.typeDefault = this.options.default, this.resolvedType instanceof Id && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
    if (this.options) {
      if (this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Id)) delete this.options.packed;
      if (!Object.keys(this.options).length) this.options = void 0;
    }
    if (this.long) {
      if (this.typeDefault = se.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze) Object.freeze(this.typeDefault);
    } else if (this.bytes && typeof this.typeDefault === "string") {
      var t;
      if (se.base64.test(this.typeDefault)) se.base64.decode(this.typeDefault, t = se.newBuffer(se.base64.length(this.typeDefault)), 0);
      else se.utf8.write(this.typeDefault, t = se.newBuffer(se.utf8.length(this.typeDefault)), 0);
      this.typeDefault = t;
    }
    if (this.map) this.defaultValue = se.emptyObject;
    else if (this.repeated) this.defaultValue = se.emptyArray;
    else this.defaultValue = this.typeDefault;
    if (this.parent instanceof xi) this.parent.ctor.prototype[this.name] = this.defaultValue;
    return ki.prototype.resolve.call(this);
  };
  he.prototype._inferLegacyProtoFeatures = function(t) {
    if (t !== "proto2" && t !== "proto3") return {};
    var r = {};
    if (this.rule === "required") r.field_presence = "LEGACY_REQUIRED";
    if (this.parent && to.defaults[this.type] === void 0) {
      var i = this.parent.get(this.type.split(".").pop());
      if (i && i instanceof xi && i.group) r.message_encoding = "DELIMITED";
    }
    if (this.getOption("packed") === true) r.repeated_field_encoding = "PACKED";
    else if (this.getOption("packed") === false) r.repeated_field_encoding = "EXPANDED";
    return r;
  };
  he.prototype._resolveFeatures = function(t) {
    return ki.prototype._resolveFeatures.call(this, this._edition || t);
  };
  he.d = function(t, r, i, s) {
    if (typeof r === "function") r = se.decorateType(r).name;
    else if (r && typeof r === "object") r = se.decorateEnum(r).name;
    return function(a, o) {
      se.decorateType(a.constructor).add(new he(o, t, r, i, { default: s }));
    };
  };
  he._configure = function(t) {
    xi = t;
  };
});
var Sr = (0, import_chunk_w1d7ygsk.V)(function(vA, Ld) {
  Ld.exports = Fe;
  var Ds = Kt();
  ((Fe.prototype = Object.create(Ds.prototype)).constructor = Fe).className = "OneOf";
  var kd = Yt(), ks = de();
  function Fe(e, t, r, i) {
    if (!Array.isArray(t)) r = t, t = void 0;
    if (Ds.call(this, e, r), !(t === void 0 || Array.isArray(t))) throw TypeError("fieldNames must be an Array");
    this.oneof = t || [], this.fieldsArray = [], this.comment = i;
  }
  Fe.fromJSON = function(t, r) {
    return new Fe(t, r.oneof, r.options, r.comment);
  };
  Fe.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : false;
    return ks.toObject(["options", this.options, "oneof", this.oneof, "comment", r ? this.comment : void 0]);
  };
  function Dd(e) {
    if (e.parent) {
      for (var t = 0; t < e.fieldsArray.length; ++t) if (!e.fieldsArray[t].parent) e.parent.add(e.fieldsArray[t]);
    }
  }
  Fe.prototype.add = function(t) {
    if (!(t instanceof kd)) throw TypeError("field must be a Field");
    if (t.parent && t.parent !== this.parent) t.parent.remove(t);
    return this.oneof.push(t.name), this.fieldsArray.push(t), t.partOf = this, Dd(this), this;
  };
  Fe.prototype.remove = function(t) {
    if (!(t instanceof kd)) throw TypeError("field must be a Field");
    var r = this.fieldsArray.indexOf(t);
    if (r < 0) throw Error(t + " is not a member of " + this);
    if (this.fieldsArray.splice(r, 1), r = this.oneof.indexOf(t.name), r > -1) this.oneof.splice(r, 1);
    return t.partOf = null, this;
  };
  Fe.prototype.onAdd = function(t) {
    Ds.prototype.onAdd.call(this, t);
    var r = this;
    for (var i = 0; i < this.oneof.length; ++i) {
      var s = t.get(this.oneof[i]);
      if (s && !s.partOf) s.partOf = r, r.fieldsArray.push(s);
    }
    Dd(this);
  };
  Fe.prototype.onRemove = function(t) {
    for (var r = 0, i; r < this.fieldsArray.length; ++r) if ((i = this.fieldsArray[r]).parent) i.parent.remove(i);
    Ds.prototype.onRemove.call(this, t);
  };
  Object.defineProperty(Fe.prototype, "isProto3Optional", { get: function() {
    if (this.fieldsArray == null || this.fieldsArray.length !== 1) return false;
    var e = this.fieldsArray[0];
    return e.options != null && e.options.proto3_optional === true;
  } });
  Fe.d = function() {
    var t = Array(arguments.length), r = 0;
    while (r < arguments.length) t[r] = arguments[r++];
    return function(s, n) {
      ks.decorateType(s.constructor).add(new Fe(n, t)), Object.defineProperty(s, n, { get: ks.oneOfGetter(t), set: ks.oneOfSetter(t) });
    };
  };
});
var Kt = (0, import_chunk_w1d7ygsk.V)(function(yA, Fd) {
  Fd.exports = ye;
  ye.className = "ReflectionObject";
  var DE = Sr(), Di = de(), Ls, LE = { enum_type: "OPEN", field_presence: "EXPLICIT", json_format: "ALLOW", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "PACKED", utf8_validation: "VERIFY" }, FE = { enum_type: "CLOSED", field_presence: "EXPLICIT", json_format: "LEGACY_BEST_EFFORT", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "EXPANDED", utf8_validation: "NONE" }, qE = { enum_type: "OPEN", field_presence: "IMPLICIT", json_format: "ALLOW", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "PACKED", utf8_validation: "VERIFY" };
  function ye(e, t) {
    if (!Di.isString(e)) throw TypeError("name must be a string");
    if (t && !Di.isObject(t)) throw TypeError("options must be an object");
    this.options = t, this.parsedOptions = null, this.name = e, this._edition = null, this._defaultEdition = "proto2", this._features = {}, this._featuresResolved = false, this.parent = null, this.resolved = false, this.comment = null, this.filename = null;
  }
  Object.defineProperties(ye.prototype, { root: { get: function() {
    var e = this;
    while (e.parent !== null) e = e.parent;
    return e;
  } }, fullName: { get: function() {
    var e = [this.name], t = this.parent;
    while (t) e.unshift(t.name), t = t.parent;
    return e.join(".");
  } } });
  ye.prototype.toJSON = function() {
    throw Error();
  };
  ye.prototype.onAdd = function(t) {
    if (this.parent && this.parent !== t) this.parent.remove(this);
    this.parent = t, this.resolved = false;
    var r = t.root;
    if (r instanceof Ls) r._handleAdd(this);
  };
  ye.prototype.onRemove = function(t) {
    var r = t.root;
    if (r instanceof Ls) r._handleRemove(this);
    this.parent = null, this.resolved = false;
  };
  ye.prototype.resolve = function() {
    if (this.resolved) return this;
    if (this.root instanceof Ls) this.resolved = true;
    return this;
  };
  ye.prototype._resolveFeaturesRecursive = function(t) {
    return this._resolveFeatures(this._edition || t);
  };
  ye.prototype._resolveFeatures = function(t) {
    if (this._featuresResolved) return;
    var r = {};
    if (!t) throw Error("Unknown edition for " + this.fullName);
    var i = Object.assign(this.options ? Object.assign({}, this.options.features) : {}, this._inferLegacyProtoFeatures(t));
    if (this._edition) {
      if (t === "proto2") r = Object.assign({}, FE);
      else if (t === "proto3") r = Object.assign({}, qE);
      else if (t === "2023") r = Object.assign({}, LE);
      else throw Error("Unknown edition: " + t);
      this._features = Object.assign(r, i || {}), this._featuresResolved = true;
      return;
    }
    if (this.partOf instanceof DE) {
      var s = Object.assign({}, this.partOf._features);
      this._features = Object.assign(s, i || {});
    } else if (this.declaringField) ;
    else if (this.parent) {
      var n = Object.assign({}, this.parent._features);
      this._features = Object.assign(n, i || {});
    } else throw Error("Unable to find a parent for " + this.fullName);
    if (this.extensionField) this.extensionField._features = this._features;
    this._featuresResolved = true;
  };
  ye.prototype._inferLegacyProtoFeatures = function() {
    return {};
  };
  ye.prototype.getOption = function(t) {
    if (this.options) return this.options[t];
    return;
  };
  ye.prototype.setOption = function(t, r, i) {
    if (t === "__proto__") return this;
    if (!this.options) this.options = {};
    if (/^features\./.test(t)) Di.setProperty(this.options, t, r, i);
    else if (!i || this.options[t] === void 0) {
      if (this.getOption(t) !== r) this.resolved = false;
      this.options[t] = r;
    }
    return this;
  };
  ye.prototype.setParsedOption = function(t, r, i) {
    if (t === "__proto__") return this;
    if (!this.parsedOptions) this.parsedOptions = [];
    var s = this.parsedOptions;
    if (i) {
      var n = s.find(function(l) {
        return Object.prototype.hasOwnProperty.call(l, t);
      });
      if (n) {
        var a = n[t];
        Di.setProperty(a, i, r);
      } else n = {}, n[t] = Di.setProperty({}, i, r), s.push(n);
    } else {
      var o = {};
      o[t] = r, s.push(o);
    }
    return this;
  };
  ye.prototype.setOptions = function(t, r) {
    if (t) for (var i = Object.keys(t), s = 0; s < i.length; ++s) this.setOption(i[s], t[i[s]], r);
    return this;
  };
  ye.prototype.toString = function() {
    var t = this.constructor.className, r = this.fullName;
    if (r.length) return t + " " + r;
    return t;
  };
  ye.prototype._editionToJSON = function() {
    if (!this._edition || this._edition === "proto3") return;
    return this._edition;
  };
  ye._configure = function(e) {
    Ls = e;
  };
});
var st = (0, import_chunk_w1d7ygsk.V)(function(_A, Ud) {
  Ud.exports = nt;
  var ro = Kt();
  ((nt.prototype = Object.create(ro.prototype)).constructor = nt).className = "Enum";
  var qd = zr(), Fs = de();
  function nt(e, t, r, i, s, n) {
    if (ro.call(this, e, r), t && typeof t !== "object") throw TypeError("values must be an object");
    if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = i, this.comments = s || {}, this.valuesOptions = n, this._valuesFeatures = {}, this.reserved = void 0, t) {
      for (var a = Object.keys(t), o = 0; o < a.length; ++o) if (a[o] !== "__proto__" && typeof t[a[o]] === "number") this.valuesById[this.values[a[o]] = t[a[o]]] = a[o];
    }
  }
  nt.prototype._resolveFeatures = function(t) {
    return t = this._edition || t, ro.prototype._resolveFeatures.call(this, t), Object.keys(this.values).forEach((r) => {
      var i = Object.assign({}, this._features);
      this._valuesFeatures[r] = Object.assign(i, this.valuesOptions && this.valuesOptions[r] && this.valuesOptions[r].features);
    }), this;
  };
  nt.fromJSON = function(t, r) {
    var i = new nt(t, r.values, r.options, r.comment, r.comments);
    if (i.reserved = r.reserved, r.edition) i._edition = r.edition;
    return i._defaultEdition = "proto3", i;
  };
  nt.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : false;
    return Fs.toObject(["edition", this._editionToJSON(), "options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", r ? this.comment : void 0, "comments", r ? this.comments : void 0]);
  };
  nt.prototype.add = function(t, r, i, s) {
    if (!Fs.isString(t)) throw TypeError("name must be a string");
    if (!Fs.isInteger(r)) throw TypeError("id must be an integer");
    if (t === "__proto__") return this;
    if (this.values[t] !== void 0) throw Error("duplicate name '" + t + "' in " + this);
    if (this.isReservedId(r)) throw Error("id " + r + " is reserved in " + this);
    if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
    if (this.valuesById[r] !== void 0) {
      if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + r + " in " + this);
      this.values[t] = r;
    } else this.valuesById[this.values[t] = r] = t;
    if (s) {
      if (this.valuesOptions === void 0) this.valuesOptions = {};
      this.valuesOptions[t] = s || null;
    }
    return this.comments[t] = i || null, this;
  };
  nt.prototype.remove = function(t) {
    if (!Fs.isString(t)) throw TypeError("name must be a string");
    var r = this.values[t];
    if (r == null) throw Error("name '" + t + "' does not exist in " + this);
    if (delete this.valuesById[r], delete this.values[t], delete this.comments[t], this.valuesOptions) delete this.valuesOptions[t];
    return this;
  };
  nt.prototype.isReservedId = function(t) {
    return qd.isReservedId(this.reserved, t);
  };
  nt.prototype.isReservedName = function(t) {
    return qd.isReservedName(this.reserved, t);
  };
});
var Ka = (0, import_chunk_w1d7ygsk.V)(function(SA, zd) {
  zd.exports = BE;
  var UE = st(), io = Cr(), so = de();
  function Bd(e, t, r, i) {
    return t.delimited ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, i, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, i, (t.id << 3 | 2) >>> 0);
  }
  function BE(e) {
    var t = so.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()"), r, i, s = e.fieldsArray.slice().sort(so.compareFieldsById);
    for (var r = 0; r < s.length; ++r) {
      var n = s[r].resolve(), a = e._fieldsArray.indexOf(n), o = n.resolvedType instanceof UE ? "int32" : n.type, l = io.basic[o];
      if (i = "m" + so.safeProp(n.name), n.map) {
        if (t("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", i, n.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (n.id << 3 | 2) >>> 0, 8 | io.mapKey[n.keyType], n.keyType), l === void 0) t("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", a, i);
        else t(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | l, o, i);
        t("}")("}");
      } else if (n.repeated) {
        if (t("if(%s!=null&&%s.length){", i, i), n.packed && io.packed[o] !== void 0) t("w.uint32(%i).fork()", (n.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", o, i)("w.ldelim()");
        else if (t("for(var i=0;i<%s.length;++i)", i), l === void 0) Bd(t, n, a, i + "[i]");
        else t("w.uint32(%i).%s(%s[i])", (n.id << 3 | l) >>> 0, o, i);
        t("}");
      } else {
        if (n.optional) t("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", i, n.name);
        if (l === void 0) Bd(t, n, a, i);
        else t("w.uint32(%i).%s(%s)", (n.id << 3 | l) >>> 0, o, i);
      }
    }
    return t("return w");
  }
});
var Wd = (0, import_chunk_w1d7ygsk.V)(function(CA, Hd) {
  var B = Hd.exports = (0, import_chunk_psv74hq2.NQs)();
  B.build = "light";
  function zE(e, t, r) {
    if (typeof t === "function") r = t, t = new B.Root();
    else if (!t) t = new B.Root();
    return t.load(e, r);
  }
  B.load = zE;
  function HE(e, t) {
    if (!t) t = new B.Root();
    return t.loadSync(e);
  }
  B.loadSync = HE;
  B.encoder = Ka();
  B.decoder = qa();
  B.verifier = za();
  B.converter = ja();
  B.ReflectionObject = Kt();
  B.Namespace = zr();
  B.Root = xs();
  B.Enum = st();
  B.Type = Ps();
  B.Field = Yt();
  B.OneOf = Sr();
  B.MapField = Ts();
  B.Service = bs();
  B.Method = Rs();
  B.Message = Os();
  B.wrappers = Ga();
  B.types = Cr();
  B.util = de();
  B.ReflectionObject._configure(B.Root);
  B.Namespace._configure(B.Type, B.Service, B.Enum);
  B.Root._configure(B.Type);
  B.Field._configure(B.Type);
});
var ao = (0, import_chunk_w1d7ygsk.V)(function(EA, $d) {
  $d.exports = Gd;
  var no = /[\s{}=;:[\],'"()<>]/g, WE = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, jE = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, GE = /^ *[*/]+ */, $E = /^\s*\*?\/*/, VE = /\n/g, YE = /\s/, KE = /\\(.?)/g, JE = { "0": "\0", r: "\r", n: `
`, t: "	" };
  function jd(e) {
    return e.replace(KE, function(t, r) {
      switch (r) {
        case "\\":
        case "":
          return r;
        default:
          return JE[r] || "";
      }
    });
  }
  Gd.unescape = jd;
  function Gd(e, t) {
    e = e.toString();
    var r = 0, i = e.length, s = 1, n = 0, a = {}, o = [], l = null;
    function c(v) {
      return Error("illegal " + v + " (line " + s + ")");
    }
    function u() {
      var v = l === "'" ? jE : WE;
      v.lastIndex = r - 1;
      var q = v.exec(e);
      if (!q) throw c("string");
      return r = v.lastIndex, C(l), l = null, jd(q[1]);
    }
    function d(v) {
      return e.charAt(v);
    }
    function h(v, q, O) {
      var H = { type: e.charAt(v++), lineEmpty: false, leading: O }, X;
      if (t) X = 2;
      else X = 3;
      var k = v - X, le;
      do
        if (--k < 0 || (le = e.charAt(k)) === `
`) {
          H.lineEmpty = true;
          break;
        }
      while (le === " " || le === "	");
      var qe = e.substring(v, q).split(VE);
      for (var Qe = 0; Qe < qe.length; ++Qe) qe[Qe] = qe[Qe].replace(t ? $E : GE, "").trim();
      H.text = qe.join(`
`).trim(), a[s] = H, n = s;
    }
    function m(v) {
      var q = f(v), O = e.substring(v, q), H = /^\s*\/\//.test(O);
      return H;
    }
    function f(v) {
      var q = v;
      while (q < i && d(q) !== `
`) q++;
      return q;
    }
    function y() {
      if (o.length > 0) return o.shift();
      if (l) return u();
      var v, q, O, H, X, k = r === 0;
      do {
        if (r === i) return null;
        v = false;
        while (YE.test(O = d(r))) {
          if (O === `
`) k = true, ++s;
          if (++r === i) return null;
        }
        if (d(r) === "/") {
          if (++r === i) throw c("comment");
          if (d(r) === "/") if (!t) {
            X = d(H = r + 1) === "/";
            while (d(++r) !== `
`) if (r === i) return null;
            if (++r, X) h(H, r - 1, k), k = true;
            ++s, v = true;
          } else {
            if (H = r, X = false, m(r - 1)) {
              X = true;
              do {
                if (r = f(r), r === i) break;
                if (r++, !k) break;
              } while (m(r));
            } else r = Math.min(i, f(r) + 1);
            if (X) h(H, r, k), k = true;
            s++, v = true;
          }
          else if ((O = d(r)) === "*") {
            H = r + 1, X = t || d(H) === "*";
            do {
              if (O === `
`) ++s;
              if (++r === i) throw c("comment");
              q = O, O = d(r);
            } while (q !== "*" || O !== "/");
            if (++r, X) h(H, r - 2, k), k = true;
            v = true;
          } else return "/";
        }
      } while (v);
      var le = r;
      no.lastIndex = 0;
      var qe = no.test(d(le++));
      if (!qe) while (le < i && !no.test(d(le))) ++le;
      var Qe = e.substring(r, r = le);
      if (Qe === '"' || Qe === "'") l = Qe;
      return Qe;
    }
    function C(v) {
      o.push(v);
    }
    function E() {
      if (!o.length) {
        var v = y();
        if (v === null) return null;
        C(v);
      }
      return o[0];
    }
    function A(v, q) {
      var O = E(), H = O === v;
      if (H) return y(), true;
      if (!q) throw c("token '" + O + "', '" + v + "' expected");
      return false;
    }
    function te(v) {
      var q = null, O;
      if (v === void 0) {
        if (O = a[s - 1], delete a[s - 1], O && (t || O.type === "*" || O.lineEmpty)) q = O.leading ? O.text : null;
      } else {
        if (n < v) E();
        if (O = a[v], delete a[v], O && !O.lineEmpty && (t || O.type === "/")) q = O.leading ? null : O.text;
      }
      return q;
    }
    return Object.defineProperty({ next: y, peek: E, push: C, skip: A, cmnt: te }, "line", { get: function() {
      return s;
    } });
  }
});
var Qd = (0, import_chunk_w1d7ygsk.V)(function(TA, Xd) {
  Xd.exports = Bt;
  Bt.filename = null;
  Bt.defaults = { keepCase: false };
  var XE = ao(), Vd = xs(), Yd = Ps(), Kd = Yt(), QE = Ts(), Jd = Sr(), ZE = st(), eT = bs(), tT = Rs(), rT = Kt(), iT = Cr(), yt = de(), sT = /^[1-9][0-9]*$/, nT = /^-?[1-9][0-9]*$/, aT = /^0[x][0-9a-fA-F]+$/, oT = /^-?0[x][0-9a-fA-F]+$/, lT = /^0[0-7]+$/, cT = /^-?0[0-7]+$/, uT = yt.patterns.numberRe, mt = /^[a-zA-Z_][a-zA-Z_0-9]*$/, vt = yt.patterns.typeRefRe;
  function Bt(e, t, r) {
    if (!(t instanceof Vd)) r = t, t = new Vd();
    if (!r) r = Bt.defaults;
    var i = r.preferTrailingComment || false, s = XE(e, r.alternateCommentMode || false), { next: n, push: a, peek: o, skip: l, cmnt: c } = s, u = true, d, h, m, f = "proto2", y = t, C = [], E = {}, A = r.keepCase ? function(g) {
      return g;
    } : yt.camelCase;
    function te() {
      C.forEach((g) => {
        g._edition = f, Object.keys(E).forEach((p) => {
          if (g.getOption(p) !== void 0) return;
          g.setOption(p, E[p], true);
        });
      });
    }
    function v(g, p, _) {
      var S = Bt.filename;
      if (!_) Bt.filename = null;
      return Error("illegal " + (p || "token") + " '" + g + "' (" + (S ? S + ", " : "") + "line " + s.line + ")");
    }
    function q() {
      var g = [], p;
      do {
        if ((p = n()) !== '"' && p !== "'") throw v(p);
        g.push(n()), l(p), p = o();
      } while (p === '"' || p === "'");
      return g.join("");
    }
    function O(g) {
      var p = n();
      switch (p) {
        case "'":
        case '"':
          return a(p), q();
        case "true":
        case "TRUE":
          return true;
        case "false":
        case "FALSE":
          return false;
      }
      try {
        return X(p, true);
      } catch (_) {
        if (g && vt.test(p)) return p;
        throw v(p, "value");
      }
    }
    function H(g, p) {
      var _, S;
      do
        if (p && ((_ = o()) === '"' || _ === "'")) {
          var w = q();
          if (g.push(w), f >= 2023) throw v(w, "id");
        } else try {
          g.push([S = k(n()), l("to", true) ? k(n()) : S]);
        } catch (M) {
          if (p && vt.test(_) && f >= 2023) g.push(_);
          else throw M;
        }
      while (l(",", true));
      var T = { options: void 0 };
      T.setOption = function(M, ce) {
        if (this.options === void 0) this.options = {};
        this.options[M] = ce;
      }, Ze(T, function(ce) {
        if (ce === "option") et(T, ce), l(";");
        else throw v(ce);
      }, function() {
        Xi(T);
      });
    }
    function X(g, p) {
      var _ = 1;
      if (g.charAt(0) === "-") _ = -1, g = g.substring(1);
      switch (g) {
        case "inf":
        case "INF":
        case "Inf":
          return _ * (1 / 0);
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return NaN;
        case "0":
          return 0;
      }
      if (sT.test(g)) return _ * parseInt(g, 10);
      if (aT.test(g)) return _ * parseInt(g, 16);
      if (lT.test(g)) return _ * parseInt(g, 8);
      if (uT.test(g)) return _ * parseFloat(g);
      throw v(g, "number", p);
    }
    function k(g, p) {
      switch (g) {
        case "max":
        case "MAX":
        case "Max":
          return 536870911;
        case "0":
          return 0;
      }
      if (!p && g.charAt(0) === "-") throw v(g, "id");
      if (nT.test(g)) return parseInt(g, 10);
      if (oT.test(g)) return parseInt(g, 16);
      if (cT.test(g)) return parseInt(g, 8);
      throw v(g, "id");
    }
    function le() {
      if (d !== void 0) throw v("package");
      if (d = n(), !vt.test(d)) throw v(d, "name");
      y = y.define(d), l(";");
    }
    function qe() {
      var g = o(), p;
      switch (g) {
        case "weak":
          p = m || (m = []), n();
          break;
        case "public":
          n();
        default:
          p = h || (h = []);
          break;
      }
      g = q(), l(";"), p.push(g);
    }
    function Qe() {
      if (l("="), f = q(), f < 2023) throw v(f, "syntax");
      l(";");
    }
    function Ry() {
      if (l("="), f = q(), !["2023"].includes(f)) throw v(f, "edition");
      l(";");
    }
    function ea(g, p, _) {
      switch (_ = yt.checkDepth(_), p) {
        case "option":
          return et(g, p), l(";"), true;
        case "message":
          return ul(g, p, _ + 1), true;
        case "enum":
          return dl(g, p), true;
        case "service":
          return Ny(g, p, _ + 1), true;
        case "extend":
          return Iy(g, p, _), true;
      }
      return false;
    }
    function Ze(g, p, _) {
      var S = s.line;
      if (g) {
        if (typeof g.comment !== "string") g.comment = c();
        g.filename = Bt.filename;
      }
      if (l("{", true)) {
        var w;
        while ((w = n()) !== "}") p(w);
        l(";", true);
      } else {
        if (_) _();
        if (l(";"), g && (typeof g.comment !== "string" || i)) g.comment = c(S) || g.comment;
      }
    }
    function ul(g, p, _) {
      if (_ = yt.checkDepth(_), !mt.test(p = n())) throw v(p, "type name");
      var S = new Yd(p);
      if (Ze(S, function(T) {
        if (ea(S, T, _)) return;
        switch (T) {
          case "map":
            Oy(S, T);
            break;
          case "required":
            if (f !== "proto2") throw v(T);
          case "repeated":
            Ue(S, T, void 0, _ + 1);
            break;
          case "optional":
            if (f === "proto3") Ue(S, "proto3_optional", void 0, _ + 1);
            else if (f !== "proto2") throw v(T);
            else Ue(S, "optional", void 0, _ + 1);
            break;
          case "oneof":
            wy(S, T, _ + 1);
            break;
          case "extensions":
            H(S.extensions || (S.extensions = []));
            break;
          case "reserved":
            H(S.reserved || (S.reserved = []), true);
            break;
          default:
            if (f === "proto2" || !vt.test(T)) throw v(T);
            a(T), Ue(S, "optional", void 0, _ + 1);
            break;
        }
      }), g.add(S), g === y) C.push(S);
    }
    function Ue(g, p, _, S) {
      var w = n();
      if (w === "group") {
        by(g, p, S);
        return;
      }
      while (w.endsWith(".") || o().startsWith(".")) w += n();
      if (!vt.test(w)) throw v(w, "type");
      var T = n();
      if (!mt.test(T)) throw v(T, "name");
      T = A(T), l("=");
      var M = new Kd(T, k(n()), w, p, _);
      if (Ze(M, function(Oe) {
        if (Oe === "option") et(M, Oe), l(";");
        else throw v(Oe);
      }, function() {
        Xi(M);
      }), p === "proto3_optional") {
        var ce = new Jd("_" + T);
        M.setOption("proto3_optional", true), ce.add(M), g.add(ce);
      } else g.add(M);
      if (g === y) C.push(M);
    }
    function by(g, p, _) {
      if (_ = yt.checkDepth(_), f >= 2023) throw v("group");
      var S = n();
      if (!mt.test(S)) throw v(S, "name");
      var w = yt.lcFirst(S);
      if (S === w) S = yt.ucFirst(S);
      l("=");
      var T = k(n()), M = new Yd(S);
      M.group = true;
      var ce = new Kd(w, T, S, p);
      ce.filename = Bt.filename, Ze(M, function(Oe) {
        switch (Oe) {
          case "option":
            et(M, Oe), l(";");
            break;
          case "required":
          case "repeated":
            Ue(M, Oe, void 0, _ + 1);
            break;
          case "optional":
            if (f === "proto3") Ue(M, "proto3_optional", void 0, _ + 1);
            else Ue(M, "optional", void 0, _ + 1);
            break;
          case "message":
            ul(M, Oe, _ + 1);
            break;
          case "enum":
            dl(M, Oe);
            break;
          case "reserved":
            H(M.reserved || (M.reserved = []), true);
            break;
          default:
            throw v(Oe);
        }
      }), g.add(M).add(ce);
    }
    function Oy(g) {
      l("<");
      var p = n();
      if (iT.mapKey[p] === void 0) throw v(p, "type");
      l(",");
      var _ = n();
      if (!vt.test(_)) throw v(_, "type");
      l(">");
      var S = n();
      if (!mt.test(S)) throw v(S, "name");
      l("=");
      var w = new QE(A(S), k(n()), p, _);
      Ze(w, function(M) {
        if (M === "option") et(w, M), l(";");
        else throw v(M);
      }, function() {
        Xi(w);
      }), g.add(w);
    }
    function wy(g, p, _) {
      if (!mt.test(p = n())) throw v(p, "name");
      var S = new Jd(A(p));
      Ze(S, function(T) {
        if (T === "option") et(S, T), l(";");
        else a(T), Ue(S, "optional", void 0, _);
      }), g.add(S);
    }
    function dl(g, p) {
      if (!mt.test(p = n())) throw v(p, "name");
      var _ = new ZE(p);
      if (Ze(_, function(w) {
        switch (w) {
          case "option":
            et(_, w), l(";");
            break;
          case "reserved":
            if (H(_.reserved || (_.reserved = []), true), _.reserved === void 0) _.reserved = [];
            break;
          default:
            Ay(_, w);
        }
      }), g.add(_), g === y) C.push(_);
    }
    function Ay(g, p) {
      if (!mt.test(p)) throw v(p, "name");
      l("=");
      var _ = k(n(), true), S = { options: void 0 };
      S.getOption = function(w) {
        return this.options[w];
      }, S.setOption = function(w, T) {
        rT.prototype.setOption.call(S, w, T);
      }, S.setParsedOption = function() {
        return;
      }, Ze(S, function(T) {
        if (T === "option") et(S, T), l(";");
        else throw v(T);
      }, function() {
        Xi(S);
      }), g.add(p, _, S.comment, S.parsedOptions || S.options);
    }
    function et(g, p) {
      var _, S, w = true;
      if (p === "option") p = n();
      while (p !== "=") {
        if (p === "(") {
          var T = n();
          l(")"), p = "(" + T + ")";
        }
        if (w) {
          if (w = false, p.includes(".") && !p.includes("(")) {
            var M = p.split(".");
            _ = M[0] + ".", p = M[1];
            continue;
          }
          _ = p;
        } else S = S ? S += p : p;
        p = n();
      }
      var ce = S ? _.concat(S) : _, lt = hl(g, ce);
      S = S && S[0] === "." ? S.slice(1) : S, _ = _ && _[_.length - 1] === "." ? _.slice(0, -1) : _, Py(g, _, lt, S);
    }
    function hl(g, p, _) {
      if (_ = yt.checkDepth(_), l("{", true)) {
        var S = {};
        while (!l("}", true)) {
          if (!mt.test(me = n())) throw v(me, "name");
          if (me === null) throw v(me, "end of input");
          var w, T = me;
          if (l(":", true), o() === "{") w = hl(g, p + "." + me, _ + 1);
          else if (o() === "[") {
            w = [];
            var M;
            if (l("[", true)) {
              do
                M = O(true), w.push(M);
              while (l(",", true));
              if (l("]"), typeof M < "u") ta(g, p + "." + me, M);
            }
          } else w = O(true), ta(g, p + "." + me, w);
          var ce = S[T];
          if (ce) w = [].concat(ce).concat(w);
          if (T !== "__proto__") S[T] = w;
          l(",", true), l(";", true);
        }
        return S;
      }
      var lt = O(true);
      return ta(g, p, lt), lt;
    }
    function ta(g, p, _) {
      if (y === g && /^features\./.test(p)) {
        E[p] = _;
        return;
      }
      if (g.setOption) g.setOption(p, _);
    }
    function Py(g, p, _, S) {
      if (g.setParsedOption) g.setParsedOption(p, _, S);
    }
    function Xi(g) {
      if (l("[", true)) {
        do
          et(g, "option");
        while (l(",", true));
        l("]");
      }
      return g;
    }
    function Ny(g, p, _) {
      if (_ = yt.checkDepth(_), !mt.test(p = n())) throw v(p, "service name");
      var S = new eT(p);
      if (Ze(S, function(T) {
        if (ea(S, T, _)) return;
        if (T === "rpc") My(S, T);
        else throw v(T);
      }), g.add(S), g === y) C.push(S);
    }
    function My(g, p) {
      var _ = c(), S = p;
      if (!mt.test(p = n())) throw v(p, "name");
      var w = p, T, M, ce, lt;
      if (l("("), l("stream", true)) M = true;
      if (!vt.test(p = n())) throw v(p);
      if (T = p, l(")"), l("returns"), l("("), l("stream", true)) lt = true;
      if (!vt.test(p = n())) throw v(p);
      ce = p, l(")");
      var Oe = new tT(w, S, T, ce, M, lt);
      Oe.comment = _, Ze(Oe, function(ra) {
        if (ra === "option") et(Oe, ra), l(";");
        else throw v(ra);
      }), g.add(Oe);
    }
    function Iy(g, p, _) {
      if (!vt.test(p = n())) throw v(p, "reference");
      var S = p;
      Ze(null, function(T) {
        switch (T) {
          case "required":
          case "repeated":
            Ue(g, T, S, _ + 1);
            break;
          case "optional":
            if (f === "proto3") Ue(g, "proto3_optional", S, _ + 1);
            else Ue(g, "optional", S, _ + 1);
            break;
          default:
            if (f === "proto2" || !vt.test(T)) throw v(T);
            a(T), Ue(g, "optional", S, _ + 1);
            break;
        }
      });
    }
    var me;
    while ((me = n()) !== null) switch (me) {
      case "package":
        if (!u) throw v(me);
        le();
        break;
      case "import":
        if (!u) throw v(me);
        qe();
        break;
      case "syntax":
        if (!u) throw v(me);
        Qe();
        break;
      case "edition":
        if (!u) throw v(me);
        Ry();
        break;
      case "option":
        et(y, me), l(";", true);
        break;
      default:
        if (ea(y, me, 0)) {
          u = false;
          continue;
        }
        throw v(me);
    }
    return te(), Bt.filename = null, { package: d, imports: h, weakImports: m, root: t };
  }
});
var th = (0, import_chunk_w1d7ygsk.V)(function(RA, eh) {
  eh.exports = at;
  var dT = /\/|\./;
  function at(e, t) {
    if (!dT.test(e)) e = "google/protobuf/" + e + ".proto", t = { nested: { google: { nested: { protobuf: { nested: t } } } } };
    at[e] = t;
  }
  at("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } });
  var Zd;
  at("duration", { Duration: Zd = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } });
  at("timestamp", { Timestamp: Zd });
  at("empty", { Empty: { fields: {} } });
  at("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } });
  at("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } });
  at("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } });
  at.get = function(t) {
    return at[t] || null;
  };
});
var qs = (0, import_chunk_w1d7ygsk.V)(function(bA, rh) {
  var Jt = rh.exports = Wd();
  Jt.build = "full";
  Jt.tokenize = ao();
  Jt.parse = Qd();
  Jt.common = th();
  Jt.Root._configure(Jt.Type, Jt.parse, Jt.common);
});
var oo = (0, import_chunk_w1d7ygsk.V)(function(OA, hT) {
  hT.exports = { nested: { google: { nested: { protobuf: { options: { go_package: "google.golang.org/protobuf/types/descriptorpb", java_package: "com.google.protobuf", java_outer_classname: "DescriptorProtos", csharp_namespace: "Google.Protobuf.Reflection", objc_class_prefix: "GPB", cc_enable_arenas: true, optimize_for: "SPEED" }, nested: { FileDescriptorSet: { edition: "proto2", fields: { file: { rule: "repeated", type: "FileDescriptorProto", id: 1 } }, extensions: [[536e6, 536e6]] }, Edition: { edition: "proto2", values: { EDITION_UNKNOWN: 0, EDITION_LEGACY: 900, EDITION_PROTO2: 998, EDITION_PROTO3: 999, EDITION_2023: 1e3, EDITION_2024: 1001, EDITION_1_TEST_ONLY: 1, EDITION_2_TEST_ONLY: 2, EDITION_99997_TEST_ONLY: 99997, EDITION_99998_TEST_ONLY: 99998, EDITION_99999_TEST_ONLY: 99999, EDITION_MAX: 2147483647 } }, FileDescriptorProto: { edition: "proto2", fields: { name: { type: "string", id: 1 }, package: { type: "string", id: 2 }, dependency: { rule: "repeated", type: "string", id: 3 }, publicDependency: { rule: "repeated", type: "int32", id: 10 }, weakDependency: { rule: "repeated", type: "int32", id: 11 }, optionDependency: { rule: "repeated", type: "string", id: 15 }, messageType: { rule: "repeated", type: "DescriptorProto", id: 4 }, enumType: { rule: "repeated", type: "EnumDescriptorProto", id: 5 }, service: { rule: "repeated", type: "ServiceDescriptorProto", id: 6 }, extension: { rule: "repeated", type: "FieldDescriptorProto", id: 7 }, options: { type: "FileOptions", id: 8 }, sourceCodeInfo: { type: "SourceCodeInfo", id: 9 }, syntax: { type: "string", id: 12 }, edition: { type: "Edition", id: 14 } } }, DescriptorProto: { edition: "proto2", fields: { name: { type: "string", id: 1 }, field: { rule: "repeated", type: "FieldDescriptorProto", id: 2 }, extension: { rule: "repeated", type: "FieldDescriptorProto", id: 6 }, nestedType: { rule: "repeated", type: "DescriptorProto", id: 3 }, enumType: { rule: "repeated", type: "EnumDescriptorProto", id: 4 }, extensionRange: { rule: "repeated", type: "ExtensionRange", id: 5 }, oneofDecl: { rule: "repeated", type: "OneofDescriptorProto", id: 8 }, options: { type: "MessageOptions", id: 7 }, reservedRange: { rule: "repeated", type: "ReservedRange", id: 9 }, reservedName: { rule: "repeated", type: "string", id: 10 }, visibility: { type: "SymbolVisibility", id: 11 } }, nested: { ExtensionRange: { fields: { start: { type: "int32", id: 1 }, end: { type: "int32", id: 2 }, options: { type: "ExtensionRangeOptions", id: 3 } } }, ReservedRange: { fields: { start: { type: "int32", id: 1 }, end: { type: "int32", id: 2 } } } } }, ExtensionRangeOptions: { edition: "proto2", fields: { uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 }, declaration: { rule: "repeated", type: "Declaration", id: 2, options: { retention: "RETENTION_SOURCE" } }, features: { type: "FeatureSet", id: 50 }, verification: { type: "VerificationState", id: 3, options: { default: "UNVERIFIED", retention: "RETENTION_SOURCE" } } }, extensions: [[1e3, 536870911]], nested: { Declaration: { fields: { number: { type: "int32", id: 1 }, fullName: { type: "string", id: 2 }, type: { type: "string", id: 3 }, reserved: { type: "bool", id: 5 }, repeated: { type: "bool", id: 6 } }, reserved: [[4, 4]] }, VerificationState: { values: { DECLARATION: 0, UNVERIFIED: 1 } } } }, FieldDescriptorProto: { edition: "proto2", fields: { name: { type: "string", id: 1 }, number: { type: "int32", id: 3 }, label: { type: "Label", id: 4 }, type: { type: "Type", id: 5 }, typeName: { type: "string", id: 6 }, extendee: { type: "string", id: 2 }, defaultValue: { type: "string", id: 7 }, oneofIndex: { type: "int32", id: 9 }, jsonName: { type: "string", id: 10 }, options: { type: "FieldOptions", id: 8 }, proto3Optional: { type: "bool", id: 17 } }, nested: { Type: { values: { TYPE_DOUBLE: 1, TYPE_FLOAT: 2, TYPE_INT64: 3, TYPE_UINT64: 4, TYPE_INT32: 5, TYPE_FIXED64: 6, TYPE_FIXED32: 7, TYPE_BOOL: 8, TYPE_STRING: 9, TYPE_GROUP: 10, TYPE_MESSAGE: 11, TYPE_BYTES: 12, TYPE_UINT32: 13, TYPE_ENUM: 14, TYPE_SFIXED32: 15, TYPE_SFIXED64: 16, TYPE_SINT32: 17, TYPE_SINT64: 18 } }, Label: { values: { LABEL_OPTIONAL: 1, LABEL_REPEATED: 3, LABEL_REQUIRED: 2 } } } }, OneofDescriptorProto: { edition: "proto2", fields: { name: { type: "string", id: 1 }, options: { type: "OneofOptions", id: 2 } } }, EnumDescriptorProto: { edition: "proto2", fields: { name: { type: "string", id: 1 }, value: { rule: "repeated", type: "EnumValueDescriptorProto", id: 2 }, options: { type: "EnumOptions", id: 3 }, reservedRange: { rule: "repeated", type: "EnumReservedRange", id: 4 }, reservedName: { rule: "repeated", type: "string", id: 5 }, visibility: { type: "SymbolVisibility", id: 6 } }, nested: { EnumReservedRange: { fields: { start: { type: "int32", id: 1 }, end: { type: "int32", id: 2 } } } } }, EnumValueDescriptorProto: { edition: "proto2", fields: { name: { type: "string", id: 1 }, number: { type: "int32", id: 2 }, options: { type: "EnumValueOptions", id: 3 } } }, ServiceDescriptorProto: { edition: "proto2", fields: { name: { type: "string", id: 1 }, method: { rule: "repeated", type: "MethodDescriptorProto", id: 2 }, options: { type: "ServiceOptions", id: 3 } } }, MethodDescriptorProto: { edition: "proto2", fields: { name: { type: "string", id: 1 }, inputType: { type: "string", id: 2 }, outputType: { type: "string", id: 3 }, options: { type: "MethodOptions", id: 4 }, clientStreaming: { type: "bool", id: 5 }, serverStreaming: { type: "bool", id: 6 } } }, FileOptions: { edition: "proto2", fields: { javaPackage: { type: "string", id: 1 }, javaOuterClassname: { type: "string", id: 8 }, javaMultipleFiles: { type: "bool", id: 10 }, javaGenerateEqualsAndHash: { type: "bool", id: 20, options: { deprecated: true } }, javaStringCheckUtf8: { type: "bool", id: 27 }, optimizeFor: { type: "OptimizeMode", id: 9, options: { default: "SPEED" } }, goPackage: { type: "string", id: 11 }, ccGenericServices: { type: "bool", id: 16 }, javaGenericServices: { type: "bool", id: 17 }, pyGenericServices: { type: "bool", id: 18 }, deprecated: { type: "bool", id: 23 }, ccEnableArenas: { type: "bool", id: 31, options: { default: true } }, objcClassPrefix: { type: "string", id: 36 }, csharpNamespace: { type: "string", id: 37 }, swiftPrefix: { type: "string", id: 39 }, phpClassPrefix: { type: "string", id: 40 }, phpNamespace: { type: "string", id: 41 }, phpMetadataNamespace: { type: "string", id: 44 }, rubyPackage: { type: "string", id: 45 }, features: { type: "FeatureSet", id: 50 }, uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 } }, extensions: [[1e3, 536870911]], reserved: [[42, 42], [38, 38], "php_generic_services"], nested: { OptimizeMode: { values: { SPEED: 1, CODE_SIZE: 2, LITE_RUNTIME: 3 } } } }, MessageOptions: { edition: "proto2", fields: { messageSetWireFormat: { type: "bool", id: 1 }, noStandardDescriptorAccessor: { type: "bool", id: 2 }, deprecated: { type: "bool", id: 3 }, mapEntry: { type: "bool", id: 7 }, deprecatedLegacyJsonFieldConflicts: { type: "bool", id: 11, options: { deprecated: true } }, features: { type: "FeatureSet", id: 12 }, uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 } }, extensions: [[1e3, 536870911]], reserved: [[4, 4], [5, 5], [6, 6], [8, 8], [9, 9]] }, FieldOptions: { edition: "proto2", fields: { ctype: { type: "CType", id: 1, options: { default: "STRING" } }, packed: { type: "bool", id: 2 }, jstype: { type: "JSType", id: 6, options: { default: "JS_NORMAL" } }, lazy: { type: "bool", id: 5 }, unverifiedLazy: { type: "bool", id: 15 }, deprecated: { type: "bool", id: 3 }, weak: { type: "bool", id: 10, options: { deprecated: true } }, debugRedact: { type: "bool", id: 16 }, retention: { type: "OptionRetention", id: 17 }, targets: { rule: "repeated", type: "OptionTargetType", id: 19 }, editionDefaults: { rule: "repeated", type: "EditionDefault", id: 20 }, features: { type: "FeatureSet", id: 21 }, featureSupport: { type: "FeatureSupport", id: 22 }, uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 } }, extensions: [[1e3, 536870911]], reserved: [[4, 4], [18, 18]], nested: { CType: { values: { STRING: 0, CORD: 1, STRING_PIECE: 2 } }, JSType: { values: { JS_NORMAL: 0, JS_STRING: 1, JS_NUMBER: 2 } }, OptionRetention: { values: { RETENTION_UNKNOWN: 0, RETENTION_RUNTIME: 1, RETENTION_SOURCE: 2 } }, OptionTargetType: { values: { TARGET_TYPE_UNKNOWN: 0, TARGET_TYPE_FILE: 1, TARGET_TYPE_EXTENSION_RANGE: 2, TARGET_TYPE_MESSAGE: 3, TARGET_TYPE_FIELD: 4, TARGET_TYPE_ONEOF: 5, TARGET_TYPE_ENUM: 6, TARGET_TYPE_ENUM_ENTRY: 7, TARGET_TYPE_SERVICE: 8, TARGET_TYPE_METHOD: 9 } }, EditionDefault: { fields: { edition: { type: "Edition", id: 3 }, value: { type: "string", id: 2 } } }, FeatureSupport: { fields: { editionIntroduced: { type: "Edition", id: 1 }, editionDeprecated: { type: "Edition", id: 2 }, deprecationWarning: { type: "string", id: 3 }, editionRemoved: { type: "Edition", id: 4 } } } } }, OneofOptions: { edition: "proto2", fields: { features: { type: "FeatureSet", id: 1 }, uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 } }, extensions: [[1e3, 536870911]] }, EnumOptions: { edition: "proto2", fields: { allowAlias: { type: "bool", id: 2 }, deprecated: { type: "bool", id: 3 }, deprecatedLegacyJsonFieldConflicts: { type: "bool", id: 6, options: { deprecated: true } }, features: { type: "FeatureSet", id: 7 }, uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 } }, extensions: [[1e3, 536870911]], reserved: [[5, 5]] }, EnumValueOptions: { edition: "proto2", fields: { deprecated: { type: "bool", id: 1 }, features: { type: "FeatureSet", id: 2 }, debugRedact: { type: "bool", id: 3 }, featureSupport: { type: "FieldOptions.FeatureSupport", id: 4 }, uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 } }, extensions: [[1e3, 536870911]] }, ServiceOptions: { edition: "proto2", fields: { features: { type: "FeatureSet", id: 34 }, deprecated: { type: "bool", id: 33 }, uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 } }, extensions: [[1e3, 536870911]] }, MethodOptions: { edition: "proto2", fields: { deprecated: { type: "bool", id: 33 }, idempotencyLevel: { type: "IdempotencyLevel", id: 34, options: { default: "IDEMPOTENCY_UNKNOWN" } }, features: { type: "FeatureSet", id: 35 }, uninterpretedOption: { rule: "repeated", type: "UninterpretedOption", id: 999 } }, extensions: [[1e3, 536870911]], nested: { IdempotencyLevel: { values: { IDEMPOTENCY_UNKNOWN: 0, NO_SIDE_EFFECTS: 1, IDEMPOTENT: 2 } } } }, UninterpretedOption: { edition: "proto2", fields: { name: { rule: "repeated", type: "NamePart", id: 2 }, identifierValue: { type: "string", id: 3 }, positiveIntValue: { type: "uint64", id: 4 }, negativeIntValue: { type: "int64", id: 5 }, doubleValue: { type: "double", id: 6 }, stringValue: { type: "bytes", id: 7 }, aggregateValue: { type: "string", id: 8 } }, nested: { NamePart: { fields: { namePart: { rule: "required", type: "string", id: 1 }, isExtension: { rule: "required", type: "bool", id: 2 } } } } }, FeatureSet: { edition: "proto2", fields: { fieldPresence: { type: "FieldPresence", id: 1, options: { retention: "RETENTION_RUNTIME", targets: "TARGET_TYPE_FILE", "feature_support.edition_introduced": "EDITION_2023", "edition_defaults.edition": "EDITION_2023", "edition_defaults.value": "EXPLICIT" } }, enumType: { type: "EnumType", id: 2, options: { retention: "RETENTION_RUNTIME", targets: "TARGET_TYPE_FILE", "feature_support.edition_introduced": "EDITION_2023", "edition_defaults.edition": "EDITION_PROTO3", "edition_defaults.value": "OPEN" } }, repeatedFieldEncoding: { type: "RepeatedFieldEncoding", id: 3, options: { retention: "RETENTION_RUNTIME", targets: "TARGET_TYPE_FILE", "feature_support.edition_introduced": "EDITION_2023", "edition_defaults.edition": "EDITION_PROTO3", "edition_defaults.value": "PACKED" } }, utf8Validation: { type: "Utf8Validation", id: 4, options: { retention: "RETENTION_RUNTIME", targets: "TARGET_TYPE_FILE", "feature_support.edition_introduced": "EDITION_2023", "edition_defaults.edition": "EDITION_PROTO3", "edition_defaults.value": "VERIFY" } }, messageEncoding: { type: "MessageEncoding", id: 5, options: { retention: "RETENTION_RUNTIME", targets: "TARGET_TYPE_FILE", "feature_support.edition_introduced": "EDITION_2023", "edition_defaults.edition": "EDITION_LEGACY", "edition_defaults.value": "LENGTH_PREFIXED" } }, jsonFormat: { type: "JsonFormat", id: 6, options: { retention: "RETENTION_RUNTIME", targets: "TARGET_TYPE_FILE", "feature_support.edition_introduced": "EDITION_2023", "edition_defaults.edition": "EDITION_PROTO3", "edition_defaults.value": "ALLOW" } }, enforceNamingStyle: { type: "EnforceNamingStyle", id: 7, options: { retention: "RETENTION_SOURCE", targets: "TARGET_TYPE_METHOD", "feature_support.edition_introduced": "EDITION_2024", "edition_defaults.edition": "EDITION_2024", "edition_defaults.value": "STYLE2024" } }, defaultSymbolVisibility: { type: "VisibilityFeature.DefaultSymbolVisibility", id: 8, options: { retention: "RETENTION_SOURCE", targets: "TARGET_TYPE_FILE", "feature_support.edition_introduced": "EDITION_2024", "edition_defaults.edition": "EDITION_2024", "edition_defaults.value": "EXPORT_TOP_LEVEL" } } }, extensions: [[1e3, 9994], [9995, 9999], [1e4, 1e4]], reserved: [[999, 999]], nested: { FieldPresence: { values: { FIELD_PRESENCE_UNKNOWN: 0, EXPLICIT: 1, IMPLICIT: 2, LEGACY_REQUIRED: 3 } }, EnumType: { values: { ENUM_TYPE_UNKNOWN: 0, OPEN: 1, CLOSED: 2 } }, RepeatedFieldEncoding: { values: { REPEATED_FIELD_ENCODING_UNKNOWN: 0, PACKED: 1, EXPANDED: 2 } }, Utf8Validation: { values: { UTF8_VALIDATION_UNKNOWN: 0, VERIFY: 2, NONE: 3 } }, MessageEncoding: { values: { MESSAGE_ENCODING_UNKNOWN: 0, LENGTH_PREFIXED: 1, DELIMITED: 2 } }, JsonFormat: { values: { JSON_FORMAT_UNKNOWN: 0, ALLOW: 1, LEGACY_BEST_EFFORT: 2 } }, EnforceNamingStyle: { values: { ENFORCE_NAMING_STYLE_UNKNOWN: 0, STYLE2024: 1, STYLE_LEGACY: 2 } }, VisibilityFeature: { fields: {}, reserved: [[1, 536870911]], nested: { DefaultSymbolVisibility: { values: { DEFAULT_SYMBOL_VISIBILITY_UNKNOWN: 0, EXPORT_ALL: 1, EXPORT_TOP_LEVEL: 2, LOCAL_ALL: 3, STRICT: 4 } } } } } }, FeatureSetDefaults: { edition: "proto2", fields: { defaults: { rule: "repeated", type: "FeatureSetEditionDefault", id: 1 }, minimumEdition: { type: "Edition", id: 4 }, maximumEdition: { type: "Edition", id: 5 } }, nested: { FeatureSetEditionDefault: { fields: { edition: { type: "Edition", id: 3 }, overridableFeatures: { type: "FeatureSet", id: 4 }, fixedFeatures: { type: "FeatureSet", id: 5 } }, reserved: [[1, 1], [2, 2], "features"] } } }, SourceCodeInfo: { edition: "proto2", fields: { location: { rule: "repeated", type: "Location", id: 1 } }, extensions: [[536e6, 536e6]], nested: { Location: { fields: { path: { rule: "repeated", type: "int32", id: 1, options: { packed: true } }, span: { rule: "repeated", type: "int32", id: 2, options: { packed: true } }, leadingComments: { type: "string", id: 3 }, trailingComments: { type: "string", id: 4 }, leadingDetachedComments: { rule: "repeated", type: "string", id: 6 } } } } }, GeneratedCodeInfo: { edition: "proto2", fields: { annotation: { rule: "repeated", type: "Annotation", id: 1 } }, nested: { Annotation: { fields: { path: { rule: "repeated", type: "int32", id: 1, options: { packed: true } }, sourceFile: { type: "string", id: 2 }, begin: { type: "int32", id: 3 }, end: { type: "int32", id: 4 }, semantic: { type: "Semantic", id: 5 } }, nested: { Semantic: { values: { NONE: 0, SET: 1, ALIAS: 2 } } } } } }, SymbolVisibility: { edition: "proto2", values: { VISIBILITY_UNSET: 0, VISIBILITY_LOCAL: 1, VISIBILITY_EXPORT: 2 } } } } } } } };
});
var uh = (0, import_chunk_w1d7ygsk.V)(function(I, ch) {
  var Ne = qs();
  ch.exports = I = Ne.descriptor = Ne.Root.fromJSON(oo()).lookup(".google.protobuf");
  var { Namespace: ih, Root: Li, Enum: zt, Type: ot, Field: Xt, MapField: fT, OneOf: Us, Service: Fi, Method: Bs } = Ne, sh = Ne.util.patterns, { numberRe: pT, typeRefRe: zs } = sh;
  Li.fromDescriptor = function(t) {
    if (typeof t.length === "number") t = I.FileDescriptorSet.decode(t);
    var r = new Li();
    if (t.file) {
      var i, s;
      for (var n = 0, a; n < t.file.length; ++n) {
        if (s = r, (i = t.file[n]).package && i.package.length) s = r.define(i.package);
        var o = TT(i);
        if (i.name && i.name.length) r.files.push(s.filename = i.name);
        if (i.messageType) for (a = 0; a < i.messageType.length; ++a) s.add(ot.fromDescriptor(i.messageType[a], o));
        if (i.enumType) for (a = 0; a < i.enumType.length; ++a) s.add(zt.fromDescriptor(i.enumType[a], o));
        if (i.extension) for (a = 0; a < i.extension.length; ++a) s.add(Xt.fromDescriptor(i.extension[a], o));
        if (i.service) for (a = 0; a < i.service.length; ++a) s.add(Fi.fromDescriptor(i.service[a], o));
        var l = jr(i.options, I.FileOptions);
        if (l) {
          var c = Object.keys(l);
          for (a = 0; a < c.length; ++a) s.setOption(c[a], l[c[a]]);
        }
      }
    }
    return r.resolveAll();
  };
  Li.prototype.toDescriptor = function(t) {
    var r = I.FileDescriptorSet.create();
    return nh(this, r.file, t), r;
  };
  function nh(e, t, r) {
    var i = I.FileDescriptorProto.create({ name: e.filename || (e.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto" });
    if (RT(r, i), !(e instanceof Li)) i.package = e.fullName.substring(1);
    for (var s = 0, n; s < e.nestedArray.length; ++s) if ((n = e._nestedArray[s]) instanceof ot) i.messageType.push(n.toDescriptor(r));
    else if (n instanceof zt) i.enumType.push(n.toDescriptor());
    else if (n instanceof Xt) i.extension.push(n.toDescriptor(r));
    else if (n instanceof Fi) i.service.push(n.toDescriptor());
    else if (n instanceof ih) nh(n, t, r);
    if (i.options = Gr(e.options, I.FileOptions), i.messageType.length + i.enumType.length + i.extension.length + i.service.length) t.push(i);
  }
  var gT = 0;
  ot.fromDescriptor = function(t, r, i) {
    if (typeof t.length === "number") t = I.DescriptorProto.decode(t);
    var s = new ot(t.name.length ? t.name : "Type" + gT++, jr(t.options, I.MessageOptions)), n;
    if (!i) s._edition = r;
    if (t.oneofDecl) for (n = 0; n < t.oneofDecl.length; ++n) s.add(Us.fromDescriptor(t.oneofDecl[n]));
    if (t.field) for (n = 0; n < t.field.length; ++n) {
      var a = Xt.fromDescriptor(t.field[n], r, true);
      if (s.add(a), t.field[n].hasOwnProperty("oneofIndex")) s.oneofsArray[t.field[n].oneofIndex].add(a);
    }
    if (t.extension) for (n = 0; n < t.extension.length; ++n) s.add(Xt.fromDescriptor(t.extension[n], r, true));
    if (t.nestedType) {
      for (n = 0; n < t.nestedType.length; ++n) if (s.add(ot.fromDescriptor(t.nestedType[n], r, true)), t.nestedType[n].options && t.nestedType[n].options.mapEntry) s.setOption("map_entry", true);
    }
    if (t.enumType) for (n = 0; n < t.enumType.length; ++n) s.add(zt.fromDescriptor(t.enumType[n], r, true));
    if (t.extensionRange && t.extensionRange.length) {
      s.extensions = [];
      for (n = 0; n < t.extensionRange.length; ++n) s.extensions.push([t.extensionRange[n].start, t.extensionRange[n].end]);
    }
    if (t.reservedRange && t.reservedRange.length || t.reservedName && t.reservedName.length) {
      if (s.reserved = [], t.reservedRange) for (n = 0; n < t.reservedRange.length; ++n) s.reserved.push([t.reservedRange[n].start, t.reservedRange[n].end]);
      if (t.reservedName) for (n = 0; n < t.reservedName.length; ++n) s.reserved.push(t.reservedName[n]);
    }
    return s;
  };
  ot.prototype.toDescriptor = function(t) {
    var r = I.DescriptorProto.create({ name: this.name }), i;
    for (i = 0; i < this.fieldsArray.length; ++i) {
      var s;
      if (r.field.push(s = this._fieldsArray[i].toDescriptor(t)), this._fieldsArray[i] instanceof fT) {
        var n = lo(this._fieldsArray[i].keyType, this._fieldsArray[i].resolvedKeyType, false), a = lo(this._fieldsArray[i].type, this._fieldsArray[i].resolvedType, false), o = a === 11 || a === 14 ? this._fieldsArray[i].resolvedType && lh(this.parent, this._fieldsArray[i].resolvedType) || this._fieldsArray[i].type : void 0;
        r.nestedType.push(I.DescriptorProto.create({ name: s.typeName, field: [I.FieldDescriptorProto.create({ name: "key", number: 1, label: 1, type: n }), I.FieldDescriptorProto.create({ name: "value", number: 2, label: 1, type: a, typeName: o })], options: I.MessageOptions.create({ mapEntry: true }) }));
      }
    }
    for (i = 0; i < this.oneofsArray.length; ++i) r.oneofDecl.push(this._oneofsArray[i].toDescriptor());
    for (i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof Xt) r.field.push(this._nestedArray[i].toDescriptor(t));
    else if (this._nestedArray[i] instanceof ot) r.nestedType.push(this._nestedArray[i].toDescriptor(t));
    else if (this._nestedArray[i] instanceof zt) r.enumType.push(this._nestedArray[i].toDescriptor());
    if (this.extensions) for (i = 0; i < this.extensions.length; ++i) r.extensionRange.push(I.DescriptorProto.ExtensionRange.create({ start: this.extensions[i][0], end: this.extensions[i][1] }));
    if (this.reserved) for (i = 0; i < this.reserved.length; ++i) if (typeof this.reserved[i] === "string") r.reservedName.push(this.reserved[i]);
    else r.reservedRange.push(I.DescriptorProto.ReservedRange.create({ start: this.reserved[i][0], end: this.reserved[i][1] }));
    return r.options = Gr(this.options, I.MessageOptions), r;
  };
  Xt.fromDescriptor = function(t, r, i) {
    if (typeof t.length === "number") t = I.DescriptorProto.decode(t);
    if (typeof t.number !== "number") throw Error("missing field id");
    var s = t.typeName, n;
    if (s != null && s !== "") {
      if (typeof s !== "string" || !zs.test(s)) throw Error("illegal type name: " + s);
      n = s;
    } else n = ST(t.type);
    var a;
    switch (t.label) {
      case 1:
        a = void 0;
        break;
      case 2:
        a = "required";
        break;
      case 3:
        a = "repeated";
        break;
      default:
        throw Error("illegal label: " + t.label);
    }
    var o = t.extendee;
    if (o != null && o !== "") {
      if (typeof o !== "string" || !zs.test(o)) throw Error("illegal type name: " + o);
    } else o = void 0;
    var l = new Xt(t.name.length ? t.name : "field" + t.number, t.number, n, a, o);
    if (!i) l._edition = r;
    if (l.options = jr(t.options, I.FieldOptions), t.proto3_optional) l.options.proto3_optional = true;
    if (t.defaultValue && t.defaultValue.length) {
      var c = t.defaultValue;
      switch (c) {
        case "true":
        case "TRUE":
          c = true;
          break;
        case "false":
        case "FALSE":
          c = false;
          break;
        default:
          var u = pT.exec(c);
          if (u) c = parseInt(c);
          break;
      }
      l.setOption("default", c);
    }
    if (CT(t.type)) {
      if (r === "proto3") {
        if (t.options && !t.options.packed) l.setOption("packed", false);
      } else if ((!r || r === "proto2") && t.options && t.options.packed) l.setOption("packed", true);
    }
    return l;
  };
  Xt.prototype.toDescriptor = function(t) {
    var r = I.FieldDescriptorProto.create({ name: this.name, number: this.id });
    if (this.map) r.type = 11, r.typeName = Ne.util.ucFirst(this.name), r.label = 3;
    else {
      switch (r.type = lo(this.type, this.resolve().resolvedType, this.delimited)) {
        case 10:
        case 11:
        case 14:
          r.typeName = this.resolvedType ? lh(this.parent, this.resolvedType) : this.type;
          break;
      }
      if (this.rule === "repeated") r.label = 3;
      else if (this.required && t === "proto2") r.label = 2;
      else r.label = 1;
    }
    if (r.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend, this.partOf && this.parent instanceof ot) {
      if ((r.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0) throw Error("missing oneof");
    }
    if (this.options) {
      if (r.options = Gr(this.options, I.FieldOptions), this.options.default != null) r.defaultValue = String(this.options.default);
      if (this.options.proto3_optional) r.proto3_optional = true;
    }
    if (t === "proto3") {
      if (!this.packed) (r.options || (r.options = I.FieldOptions.create())).packed = false;
    } else if ((!t || t === "proto2") && this.packed) (r.options || (r.options = I.FieldOptions.create())).packed = true;
    return r;
  };
  var mT = 0;
  zt.fromDescriptor = function(t, r, i) {
    if (typeof t.length === "number") t = I.EnumDescriptorProto.decode(t);
    var s = {};
    if (t.value) for (var n = 0; n < t.value.length; ++n) {
      var a = t.value[n].name, o = t.value[n].number || 0;
      s[a && a.length ? a : "NAME" + o] = o;
    }
    var l = new zt(t.name && t.name.length ? t.name : "Enum" + mT++, s, jr(t.options, I.EnumOptions));
    if (!i) l._edition = r;
    return l;
  };
  zt.prototype.toDescriptor = function() {
    var t = [];
    for (var r = 0, i = Object.keys(this.values); r < i.length; ++r) t.push(I.EnumValueDescriptorProto.create({ name: i[r], number: this.values[i[r]] }));
    return I.EnumDescriptorProto.create({ name: this.name, value: t, options: Gr(this.options, I.EnumOptions) });
  };
  var vT = 0;
  Us.fromDescriptor = function(t) {
    if (typeof t.length === "number") t = I.OneofDescriptorProto.decode(t);
    return new Us(t.name && t.name.length ? t.name : "oneof" + vT++);
  };
  Us.prototype.toDescriptor = function() {
    return I.OneofDescriptorProto.create({ name: this.name });
  };
  var yT = 0;
  Fi.fromDescriptor = function(t, r, i) {
    if (typeof t.length === "number") t = I.ServiceDescriptorProto.decode(t);
    var s = new Fi(t.name && t.name.length ? t.name : "Service" + yT++, jr(t.options, I.ServiceOptions));
    if (!i) s._edition = r;
    if (t.method) for (var n = 0; n < t.method.length; ++n) s.add(Bs.fromDescriptor(t.method[n]));
    return s;
  };
  Fi.prototype.toDescriptor = function() {
    var t = [];
    for (var r = 0; r < this.methodsArray.length; ++r) t.push(this._methodsArray[r].toDescriptor());
    return I.ServiceDescriptorProto.create({ name: this.name, method: t, options: Gr(this.options, I.ServiceOptions) });
  };
  var _T = 0;
  Bs.fromDescriptor = function(t) {
    if (typeof t.length === "number") t = I.MethodDescriptorProto.decode(t);
    var r = t.inputType, i = t.outputType;
    if (r != null && r !== "") {
      if (typeof r !== "string" || !zs.test(r)) throw Error("illegal type name: " + r);
    }
    if (i != null && i !== "") {
      if (typeof i !== "string" || !zs.test(i)) throw Error("illegal type name: " + i);
    }
    return new Bs(t.name && t.name.length ? t.name : "Method" + _T++, "rpc", r, i, Boolean(t.clientStreaming), Boolean(t.serverStreaming), jr(t.options, I.MethodOptions));
  };
  Bs.prototype.toDescriptor = function() {
    return I.MethodDescriptorProto.create({ name: this.name, inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType, outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType, clientStreaming: this.requestStream, serverStreaming: this.responseStream, options: Gr(this.options, I.MethodOptions) });
  };
  function ST(e) {
    switch (e) {
      case 1:
        return "double";
      case 2:
        return "float";
      case 3:
        return "int64";
      case 4:
        return "uint64";
      case 5:
        return "int32";
      case 6:
        return "fixed64";
      case 7:
        return "fixed32";
      case 8:
        return "bool";
      case 9:
        return "string";
      case 12:
        return "bytes";
      case 13:
        return "uint32";
      case 15:
        return "sfixed32";
      case 16:
        return "sfixed64";
      case 17:
        return "sint32";
      case 18:
        return "sint64";
    }
    throw Error("illegal type: " + e);
  }
  function CT(e) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return true;
    }
    return false;
  }
  function lo(e, t, r) {
    switch (e) {
      case "double":
        return 1;
      case "float":
        return 2;
      case "int64":
        return 3;
      case "uint64":
        return 4;
      case "int32":
        return 5;
      case "fixed64":
        return 6;
      case "fixed32":
        return 7;
      case "bool":
        return 8;
      case "string":
        return 9;
      case "bytes":
        return 12;
      case "uint32":
        return 13;
      case "sfixed32":
        return 15;
      case "sfixed64":
        return 16;
      case "sint32":
        return 17;
      case "sint64":
        return 18;
    }
    if (t instanceof zt) return 14;
    if (t instanceof ot) return r ? 10 : 11;
    throw Error("illegal type: " + e);
  }
  function ah(e, t) {
    var r = {};
    for (var i = 0, s, n; i < t.fieldsArray.length; ++i) {
      if ((n = (s = t._fieldsArray[i]).name) === "uninterpretedOption") continue;
      if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
      var a = ET(n);
      if (s.resolvedType instanceof ot) r[a] = ah(e[n], s.resolvedType);
      else if (s.resolvedType instanceof zt) r[a] = s.resolvedType.valuesById[e[n]];
      else r[a] = e[n];
    }
    return r;
  }
  function jr(e, t) {
    if (!e) return;
    return ah(t.toObject(e), t);
  }
  function oh(e, t) {
    var r = {}, i = Object.keys(e);
    for (var s = 0; s < i.length; ++s) {
      var n = i[s], a = Ne.util.camelCase(n);
      if (!Object.prototype.hasOwnProperty.call(t.fields, a)) continue;
      var o = t.fields[a];
      if (o.resolvedType instanceof ot) r[a] = oh(e[n], o.resolvedType);
      else r[a] = e[n];
      if (o.repeated && !Array.isArray(r[a])) r[a] = [r[a]];
    }
    return r;
  }
  function Gr(e, t) {
    if (!e) return;
    return t.fromObject(oh(e, t));
  }
  function lh(e, t) {
    var r = e.fullName.split("."), i = t.fullName.split("."), s = 0, n = 0, a = i.length - 1;
    if (!(e instanceof Li) && t instanceof ih) while (s < r.length && n < a && r[s] === i[n]) {
      var o = t.lookup(r[s++], true);
      if (o !== null && o !== t) break;
      ++n;
    }
    else for (; s < r.length && n < a && r[s] === i[n]; ++s, ++n) ;
    return i.slice(n).join(".");
  }
  function ET(e) {
    return e.substring(0, 1) + e.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function(t, r) {
      return "_" + r.toLowerCase();
    });
  }
  function TT(e) {
    if (e.syntax === "editions") switch (e.edition) {
      case I.Edition.EDITION_2023:
        return "2023";
      default:
        throw Error("Unsupported edition " + e.edition);
    }
    if (e.syntax === "proto3") return "proto3";
    return "proto2";
  }
  function RT(e, t) {
    if (!e) return;
    if (e === "proto2" || e === "proto3") t.syntax = e;
    else switch (t.syntax = "editions", e) {
      case "2023":
        t.edition = I.Edition.EDITION_2023;
        break;
      default:
        throw Error("Unsupported edition " + e);
    }
  }
});
var dh = (0, import_chunk_w1d7ygsk.V)(function(wA, bT) {
  bT.exports = { nested: { google: { nested: { protobuf: { nested: { Api: { fields: { name: { type: "string", id: 1 }, methods: { rule: "repeated", type: "Method", id: 2 }, options: { rule: "repeated", type: "Option", id: 3 }, version: { type: "string", id: 4 }, sourceContext: { type: "SourceContext", id: 5 }, mixins: { rule: "repeated", type: "Mixin", id: 6 }, syntax: { type: "Syntax", id: 7 } } }, Method: { fields: { name: { type: "string", id: 1 }, requestTypeUrl: { type: "string", id: 2 }, requestStreaming: { type: "bool", id: 3 }, responseTypeUrl: { type: "string", id: 4 }, responseStreaming: { type: "bool", id: 5 }, options: { rule: "repeated", type: "Option", id: 6 }, syntax: { type: "Syntax", id: 7 } } }, Mixin: { fields: { name: { type: "string", id: 1 }, root: { type: "string", id: 2 } } }, SourceContext: { fields: { fileName: { type: "string", id: 1 } } }, Option: { fields: { name: { type: "string", id: 1 }, value: { type: "Any", id: 2 } } }, Syntax: { values: { SYNTAX_PROTO2: 0, SYNTAX_PROTO3: 1 } } } } } } } };
});
var hh = (0, import_chunk_w1d7ygsk.V)(function(AA, OT) {
  OT.exports = { nested: { google: { nested: { protobuf: { nested: { SourceContext: { fields: { fileName: { type: "string", id: 1 } } } } } } } } };
});
var fh = (0, import_chunk_w1d7ygsk.V)(function(PA, wT) {
  wT.exports = { nested: { google: { nested: { protobuf: { nested: { Type: { fields: { name: { type: "string", id: 1 }, fields: { rule: "repeated", type: "Field", id: 2 }, oneofs: { rule: "repeated", type: "string", id: 3 }, options: { rule: "repeated", type: "Option", id: 4 }, sourceContext: { type: "SourceContext", id: 5 }, syntax: { type: "Syntax", id: 6 } } }, Field: { fields: { kind: { type: "Kind", id: 1 }, cardinality: { type: "Cardinality", id: 2 }, number: { type: "int32", id: 3 }, name: { type: "string", id: 4 }, typeUrl: { type: "string", id: 6 }, oneofIndex: { type: "int32", id: 7 }, packed: { type: "bool", id: 8 }, options: { rule: "repeated", type: "Option", id: 9 }, jsonName: { type: "string", id: 10 }, defaultValue: { type: "string", id: 11 } }, nested: { Kind: { values: { TYPE_UNKNOWN: 0, TYPE_DOUBLE: 1, TYPE_FLOAT: 2, TYPE_INT64: 3, TYPE_UINT64: 4, TYPE_INT32: 5, TYPE_FIXED64: 6, TYPE_FIXED32: 7, TYPE_BOOL: 8, TYPE_STRING: 9, TYPE_GROUP: 10, TYPE_MESSAGE: 11, TYPE_BYTES: 12, TYPE_UINT32: 13, TYPE_ENUM: 14, TYPE_SFIXED32: 15, TYPE_SFIXED64: 16, TYPE_SINT32: 17, TYPE_SINT64: 18 } }, Cardinality: { values: { CARDINALITY_UNKNOWN: 0, CARDINALITY_OPTIONAL: 1, CARDINALITY_REQUIRED: 2, CARDINALITY_REPEATED: 3 } } } }, Enum: { fields: { name: { type: "string", id: 1 }, enumvalue: { rule: "repeated", type: "EnumValue", id: 2 }, options: { rule: "repeated", type: "Option", id: 3 }, sourceContext: { type: "SourceContext", id: 4 }, syntax: { type: "Syntax", id: 5 } } }, EnumValue: { fields: { name: { type: "string", id: 1 }, number: { type: "int32", id: 2 }, options: { rule: "repeated", type: "Option", id: 3 } } }, Option: { fields: { name: { type: "string", id: 1 }, value: { type: "Any", id: 2 } } }, Syntax: { values: { SYNTAX_PROTO2: 0, SYNTAX_PROTO3: 1 } }, Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } }, SourceContext: { fields: { fileName: { type: "string", id: 1 } } } } } } } } };
});
var vh = (0, import_chunk_w1d7ygsk.V)(function(gh) {
  Object.defineProperty(gh, "__esModule", { value: true });
  gh.addCommonProtos = gh.loadProtosWithOptionsSync = gh.loadProtosWithOptions = void 0;
  var Hs = (0, import_chunk_w1d7ygsk.ft)("fs"), Ws = (0, import_chunk_w1d7ygsk.ft)("path"), We = qs();
  function ph(e, t) {
    let r = e.resolvePath;
    e.resolvePath = (i, s) => {
      if (Ws.isAbsolute(s)) return s;
      for (let n of t) {
        let a = Ws.join(n, s);
        try {
          return Hs.accessSync(a, Hs.constants.R_OK), a;
        } catch (o) {
          continue;
        }
      }
      return process.emitWarning(`${s} not found in any of the include paths ${t}`), r(i, s);
    };
  }
  async function AT(e, t) {
    let r = new We.Root();
    if (t = t || {}, t.includeDirs) {
      if (!Array.isArray(t.includeDirs)) return Promise.reject(Error("The includeDirs option must be an array"));
      ph(r, t.includeDirs);
    }
    let i = await r.load(e, t);
    return i.resolveAll(), i;
  }
  gh.loadProtosWithOptions = AT;
  function PT(e, t) {
    let r = new We.Root();
    if (t = t || {}, t.includeDirs) {
      if (!Array.isArray(t.includeDirs)) throw Error("The includeDirs option must be an array");
      ph(r, t.includeDirs);
    }
    let i = r.loadSync(e, t);
    return i.resolveAll(), i;
  }
  gh.loadProtosWithOptionsSync = PT;
  function NT() {
    let e = dh(), t = oo(), r = hh(), i = fh();
    We.common("api", e.nested.google.nested.protobuf.nested), We.common("descriptor", t.nested.google.nested.protobuf.nested), We.common("source_context", r.nested.google.nested.protobuf.nested), We.common("type", i.nested.google.nested.protobuf.nested);
  }
  gh.addCommonProtos = NT;
});
var fo = (0, import_chunk_w1d7ygsk.V)(function(Th) {
  Object.defineProperty(Th, "__esModule", { value: true });
  Th.loadFileDescriptorSetFromObject = Th.loadFileDescriptorSetFromBuffer = Th.fromJSON = Th.loadSync = Th.load = Th.IdempotencyLevel = Th.isAnyExtension = Th.Long = void 0;
  var xT = Qu(), ne = qs(), $r = uh(), Vr = vh(), kT = (0, import_chunk_psv74hq2.M4o)();
  Th.Long = kT;
  function DT(e) {
    return "@type" in e && typeof e["@type"] === "string";
  }
  Th.isAnyExtension = DT;
  var _h;
  (function(e) {
    e.IDEMPOTENCY_UNKNOWN = "IDEMPOTENCY_UNKNOWN", e.NO_SIDE_EFFECTS = "NO_SIDE_EFFECTS", e.IDEMPOTENT = "IDEMPOTENT";
  })(_h = Th.IdempotencyLevel || (Th.IdempotencyLevel = {}));
  var Sh = { longs: String, enums: String, bytes: String, defaults: true, oneofs: true, json: true };
  function LT(e, t) {
    if (e === "") return t;
    else return e + "." + t;
  }
  function FT(e) {
    return e instanceof ne.Service || e instanceof ne.Type || e instanceof ne.Enum;
  }
  function qT(e) {
    return e instanceof ne.Namespace || e instanceof ne.Root;
  }
  function Ch(e, t) {
    let r = LT(t, e.name);
    if (FT(e)) return [[r, e]];
    else if (qT(e) && typeof e.nested < "u") return Object.keys(e.nested).map((i) => Ch(e.nested[i], r)).reduce((i, s) => i.concat(s), []);
    return [];
  }
  function co(e, t) {
    return function(i) {
      return e.toObject(e.decode(i), t);
    };
  }
  function uo(e) {
    return function(r) {
      if (Array.isArray(r)) throw Error(`Failed to serialize message: expected object with ${e.name} structure, got array instead`);
      let i = e.fromObject(r);
      return e.encode(i).finish();
    };
  }
  function UT(e) {
    return (e || []).reduce((t, r) => {
      for (let [i, s] of Object.entries(r)) switch (i) {
        case "uninterpreted_option":
          t.uninterpreted_option.push(r.uninterpreted_option);
          break;
        default:
          t[i] = s;
      }
      return t;
    }, { deprecated: false, idempotency_level: _h.IDEMPOTENCY_UNKNOWN, uninterpreted_option: [] });
  }
  function BT(e, t, r, i) {
    let { resolvedRequestType: s, resolvedResponseType: n } = e;
    return { path: "/" + t + "/" + e.name, requestStream: !!e.requestStream, responseStream: !!e.responseStream, requestSerialize: uo(s), requestDeserialize: co(s, r), responseSerialize: uo(n), responseDeserialize: co(n, r), originalName: xT(e.name), requestType: ho(s, r, i), responseType: ho(n, r, i), options: UT(e.parsedOptions) };
  }
  function zT(e, t, r, i) {
    let s = {};
    for (let n of e.methodsArray) s[n.name] = BT(n, t, r, i);
    return s;
  }
  function ho(e, t, r) {
    let i = e.toDescriptor("proto3");
    return { format: "Protocol Buffer 3 DescriptorProto", type: i.$type.toObject(i, Sh), fileDescriptorProtos: r, serialize: uo(e), deserialize: co(e, t) };
  }
  function HT(e, t) {
    let r = e.toDescriptor("proto3");
    return { format: "Protocol Buffer 3 EnumDescriptorProto", type: r.$type.toObject(r, Sh), fileDescriptorProtos: t };
  }
  function WT(e, t, r, i) {
    if (e instanceof ne.Service) return zT(e, t, r, i);
    else if (e instanceof ne.Type) return ho(e, r, i);
    else if (e instanceof ne.Enum) return HT(e, i);
    else throw Error("Type mismatch in reflection object handling");
  }
  function js(e, t) {
    let r = {};
    e.resolveAll();
    let s = e.toDescriptor("proto3").file.map((n) => Buffer.from($r.FileDescriptorProto.encode(n).finish()));
    for (let [n, a] of Ch(e, "")) r[n] = WT(a, n, t, s);
    return r;
  }
  function Eh(e, t) {
    t = t || {};
    let r = ne.Root.fromDescriptor(e);
    return r.resolveAll(), js(r, t);
  }
  function jT(e, t) {
    return Vr.loadProtosWithOptions(e, t).then((r) => js(r, t));
  }
  Th.load = jT;
  function GT(e, t) {
    let r = Vr.loadProtosWithOptionsSync(e, t);
    return js(r, t);
  }
  Th.loadSync = GT;
  function $T(e, t) {
    t = t || {};
    let r = ne.Root.fromJSON(e);
    return r.resolveAll(), js(r, t);
  }
  Th.fromJSON = $T;
  function VT(e, t) {
    let r = $r.FileDescriptorSet.decode(e);
    return Eh(r, t);
  }
  Th.loadFileDescriptorSetFromBuffer = VT;
  function YT(e, t) {
    let r = $r.FileDescriptorSet.fromObject(e);
    return Eh(r, t);
  }
  Th.loadFileDescriptorSetFromObject = YT;
  Vr.addCommonProtos();
});
var Zt = (0, import_chunk_w1d7ygsk.V)(function(zh) {
  var __dirname = "/home/runner/work/apps/apps/apps/cli/node_modules/@grpc/grpc-js/build/src";
  Object.defineProperty(zh, "__esModule", { value: true });
  zh.registerChannelzSocket = zh.registerChannelzServer = zh.registerChannelzSubchannel = zh.registerChannelzChannel = zh.ChannelzCallTrackerStub = zh.ChannelzCallTracker = zh.ChannelzChildrenTrackerStub = zh.ChannelzChildrenTracker = zh.ChannelzTrace = zh.ChannelzTraceStub = void 0;
  zh.unregisterChannelzRef = r0;
  zh.getChannelzHandlers = Uh;
  zh.getChannelzServiceDefinition = Bh;
  zh.setup = f0;
  var Qt = (0, import_chunk_w1d7ygsk.ft)("net"), Me = Xc(), _t = Ae(), Ct = x(), Ph = Pe(), Nh = fs(), Mh = vs();
  function po(e) {
    return { channel_id: e.id, name: e.name };
  }
  function go(e) {
    return { subchannel_id: e.id, name: e.name };
  }
  function t0(e) {
    return { server_id: e.id };
  }
  function $s(e) {
    return { socket_id: e.id, name: e.name };
  }
  var bh = 32, mo = 100;
  class Ih {
    constructor() {
      this.events = [], this.creationTimestamp = /* @__PURE__ */ new Date(), this.eventsLogged = 0;
    }
    addTrace() {
    }
    getTraceMessage() {
      return { creation_timestamp: St(this.creationTimestamp), num_events_logged: this.eventsLogged, events: [] };
    }
  }
  zh.ChannelzTraceStub = Ih;
  class xh {
    constructor() {
      this.events = [], this.eventsLogged = 0, this.creationTimestamp = /* @__PURE__ */ new Date();
    }
    addTrace(e, t, r) {
      let i = /* @__PURE__ */ new Date();
      if (this.events.push({ description: t, severity: e, timestamp: i, childChannel: (r === null || r === void 0 ? void 0 : r.kind) === "channel" ? r : void 0, childSubchannel: (r === null || r === void 0 ? void 0 : r.kind) === "subchannel" ? r : void 0 }), this.events.length >= bh * 2) this.events = this.events.slice(bh);
      this.eventsLogged += 1;
    }
    getTraceMessage() {
      return { creation_timestamp: St(this.creationTimestamp), num_events_logged: this.eventsLogged, events: this.events.map((e) => ({ description: e.description, severity: e.severity, timestamp: St(e.timestamp), channel_ref: e.childChannel ? po(e.childChannel) : null, subchannel_ref: e.childSubchannel ? go(e.childSubchannel) : null })) };
    }
  }
  zh.ChannelzTrace = xh;
  class vo {
    constructor() {
      this.channelChildren = new Me.OrderedMap(), this.subchannelChildren = new Me.OrderedMap(), this.socketChildren = new Me.OrderedMap(), this.trackerMap = { ["channel"]: this.channelChildren, ["subchannel"]: this.subchannelChildren, ["socket"]: this.socketChildren };
    }
    refChild(e) {
      let t = this.trackerMap[e.kind], r = t.find(e.id);
      if (r.equals(t.end())) t.setElement(e.id, { ref: e, count: 1 }, r);
      else r.pointer[1].count += 1;
    }
    unrefChild(e) {
      let t = this.trackerMap[e.kind], r = t.getElementByKey(e.id);
      if (r !== void 0) {
        if (r.count -= 1, r.count === 0) t.eraseElementByKey(e.id);
      }
    }
    getChildLists() {
      return { channels: this.channelChildren, subchannels: this.subchannelChildren, sockets: this.socketChildren };
    }
  }
  zh.ChannelzChildrenTracker = vo;
  class kh extends vo {
    refChild() {
    }
    unrefChild() {
    }
  }
  zh.ChannelzChildrenTrackerStub = kh;
  class yo {
    constructor() {
      this.callsStarted = 0, this.callsSucceeded = 0, this.callsFailed = 0, this.lastCallStartedTimestamp = null;
    }
    addCallStarted() {
      this.callsStarted += 1, this.lastCallStartedTimestamp = /* @__PURE__ */ new Date();
    }
    addCallSucceeded() {
      this.callsSucceeded += 1;
    }
    addCallFailed() {
      this.callsFailed += 1;
    }
  }
  zh.ChannelzCallTracker = yo;
  class Dh extends yo {
    addCallStarted() {
    }
    addCallSucceeded() {
    }
    addCallFailed() {
    }
  }
  zh.ChannelzCallTrackerStub = Dh;
  var Ht = { ["channel"]: new Me.OrderedMap(), ["subchannel"]: new Me.OrderedMap(), ["server"]: new Me.OrderedMap(), ["socket"]: new Me.OrderedMap() }, Vs = (e) => {
    let t = 1;
    function r() {
      return t++;
    }
    let i = Ht[e];
    return (s, n, a) => {
      let o = r(), l = { id: o, name: s, kind: e };
      if (a) i.setElement(o, { ref: l, getInfo: n });
      return l;
    };
  };
  zh.registerChannelzChannel = Vs("channel");
  zh.registerChannelzSubchannel = Vs("subchannel");
  zh.registerChannelzServer = Vs("server");
  zh.registerChannelzSocket = Vs("socket");
  function r0(e) {
    Ht[e.kind].eraseElementByKey(e.id);
  }
  function i0(e) {
    let t = Number.parseInt(e, 16);
    return [t / 256 | 0, t % 256];
  }
  function Oh(e) {
    if (e === "") return [];
    let t = e.split(":").map((i) => i0(i));
    return [].concat(...t);
  }
  function s0(e) {
    return Qt.isIPv6(e) && e.toLowerCase().startsWith("::ffff:") && Qt.isIPv4(e.substring(7));
  }
  function wh(e) {
    return Buffer.from(Uint8Array.from(e.split(".").map((t) => Number.parseInt(t))));
  }
  function n0(e) {
    if (Qt.isIPv4(e)) return wh(e);
    else if (s0(e)) return wh(e.substring(7));
    else if (Qt.isIPv6(e)) {
      let t, r, i = e.indexOf("::");
      if (i === -1) t = e, r = "";
      else t = e.substring(0, i), r = e.substring(i + 2);
      let s = Buffer.from(Oh(t)), n = Buffer.from(Oh(r)), a = Buffer.alloc(16 - s.length - n.length, 0);
      return Buffer.concat([s, a, n]);
    } else return null;
  }
  function Lh(e) {
    switch (e) {
      case _t.ConnectivityState.CONNECTING:
        return { state: "CONNECTING" };
      case _t.ConnectivityState.IDLE:
        return { state: "IDLE" };
      case _t.ConnectivityState.READY:
        return { state: "READY" };
      case _t.ConnectivityState.SHUTDOWN:
        return { state: "SHUTDOWN" };
      case _t.ConnectivityState.TRANSIENT_FAILURE:
        return { state: "TRANSIENT_FAILURE" };
      default:
        return { state: "UNKNOWN" };
    }
  }
  function St(e) {
    if (!e) return null;
    let t = e.getTime();
    return { seconds: t / 1e3 | 0, nanos: t % 1e3 * 1e6 };
  }
  function Fh(e) {
    let t = e.getInfo(), r = [], i = [];
    return t.children.channels.forEach((s) => {
      r.push(po(s[1].ref));
    }), t.children.subchannels.forEach((s) => {
      i.push(go(s[1].ref));
    }), { ref: po(e.ref), data: { target: t.target, state: Lh(t.state), calls_started: t.callTracker.callsStarted, calls_succeeded: t.callTracker.callsSucceeded, calls_failed: t.callTracker.callsFailed, last_call_started_timestamp: St(t.callTracker.lastCallStartedTimestamp), trace: t.trace.getTraceMessage() }, channel_ref: r, subchannel_ref: i };
  }
  function a0(e, t) {
    let r = parseInt(e.request.channel_id, 10), i = Ht.channel.getElementByKey(r);
    if (i === void 0) {
      t({ code: Ct.Status.NOT_FOUND, details: "No channel data found for id " + r });
      return;
    }
    t(null, { channel: Fh(i) });
  }
  function o0(e, t) {
    let r = parseInt(e.request.max_results, 10) || mo, i = [], s = parseInt(e.request.start_channel_id, 10), n = Ht.channel, a;
    for (a = n.lowerBound(s); !a.equals(n.end()) && i.length < r; a = a.next()) i.push(Fh(a.pointer[1]));
    t(null, { channel: i, end: a.equals(n.end()) });
  }
  function qh(e) {
    let t = e.getInfo(), r = [];
    return t.listenerChildren.sockets.forEach((i) => {
      r.push($s(i[1].ref));
    }), { ref: t0(e.ref), data: { calls_started: t.callTracker.callsStarted, calls_succeeded: t.callTracker.callsSucceeded, calls_failed: t.callTracker.callsFailed, last_call_started_timestamp: St(t.callTracker.lastCallStartedTimestamp), trace: t.trace.getTraceMessage() }, listen_socket: r };
  }
  function l0(e, t) {
    let r = parseInt(e.request.server_id, 10), s = Ht.server.getElementByKey(r);
    if (s === void 0) {
      t({ code: Ct.Status.NOT_FOUND, details: "No server data found for id " + r });
      return;
    }
    t(null, { server: qh(s) });
  }
  function c0(e, t) {
    let r = parseInt(e.request.max_results, 10) || mo, i = parseInt(e.request.start_server_id, 10), s = Ht.server, n = [], a;
    for (a = s.lowerBound(i); !a.equals(s.end()) && n.length < r; a = a.next()) n.push(qh(a.pointer[1]));
    t(null, { server: n, end: a.equals(s.end()) });
  }
  function u0(e, t) {
    let r = parseInt(e.request.subchannel_id, 10), i = Ht.subchannel.getElementByKey(r);
    if (i === void 0) {
      t({ code: Ct.Status.NOT_FOUND, details: "No subchannel data found for id " + r });
      return;
    }
    let s = i.getInfo(), n = [];
    s.children.sockets.forEach((o) => {
      n.push($s(o[1].ref));
    });
    let a = { ref: go(i.ref), data: { target: s.target, state: Lh(s.state), calls_started: s.callTracker.callsStarted, calls_succeeded: s.callTracker.callsSucceeded, calls_failed: s.callTracker.callsFailed, last_call_started_timestamp: St(s.callTracker.lastCallStartedTimestamp), trace: s.trace.getTraceMessage() }, socket_ref: n };
    t(null, { subchannel: a });
  }
  function Ah(e) {
    var t;
    if (Ph.isTcpSubchannelAddress(e)) return { address: "tcpip_address", tcpip_address: { ip_address: (t = n0(e.host)) !== null && t !== void 0 ? t : void 0, port: e.port } };
    else return { address: "uds_address", uds_address: { filename: e.path } };
  }
  function d0(e, t) {
    var r, i, s, n, a;
    let o = parseInt(e.request.socket_id, 10), l = Ht.socket.getElementByKey(o);
    if (l === void 0) {
      t({ code: Ct.Status.NOT_FOUND, details: "No socket data found for id " + o });
      return;
    }
    let c = l.getInfo(), u = c.security ? { model: "tls", tls: { cipher_suite: c.security.cipherSuiteStandardName ? "standard_name" : "other_name", standard_name: (r = c.security.cipherSuiteStandardName) !== null && r !== void 0 ? r : void 0, other_name: (i = c.security.cipherSuiteOtherName) !== null && i !== void 0 ? i : void 0, local_certificate: (s = c.security.localCertificate) !== null && s !== void 0 ? s : void 0, remote_certificate: (n = c.security.remoteCertificate) !== null && n !== void 0 ? n : void 0 } } : null, d = { ref: $s(l.ref), local: c.localAddress ? Ah(c.localAddress) : null, remote: c.remoteAddress ? Ah(c.remoteAddress) : null, remote_name: (a = c.remoteName) !== null && a !== void 0 ? a : void 0, security: u, data: { keep_alives_sent: c.keepAlivesSent, streams_started: c.streamsStarted, streams_succeeded: c.streamsSucceeded, streams_failed: c.streamsFailed, last_local_stream_created_timestamp: St(c.lastLocalStreamCreatedTimestamp), last_remote_stream_created_timestamp: St(c.lastRemoteStreamCreatedTimestamp), messages_received: c.messagesReceived, messages_sent: c.messagesSent, last_message_received_timestamp: St(c.lastMessageReceivedTimestamp), last_message_sent_timestamp: St(c.lastMessageSentTimestamp), local_flow_control_window: c.localFlowControlWindow ? { value: c.localFlowControlWindow } : null, remote_flow_control_window: c.remoteFlowControlWindow ? { value: c.remoteFlowControlWindow } : null } };
    t(null, { socket: d });
  }
  function h0(e, t) {
    let r = parseInt(e.request.server_id, 10), i = Ht.server.getElementByKey(r);
    if (i === void 0) {
      t({ code: Ct.Status.NOT_FOUND, details: "No server data found for id " + r });
      return;
    }
    let s = parseInt(e.request.start_socket_id, 10), n = parseInt(e.request.max_results, 10) || mo, o = i.getInfo().sessionChildren.sockets, l = [], c;
    for (c = o.lowerBound(s); !c.equals(o.end()) && l.length < n; c = c.next()) l.push($s(c.pointer[1].ref));
    t(null, { socket_ref: l, end: c.equals(o.end()) });
  }
  function Uh() {
    return { GetChannel: a0, GetTopChannels: o0, GetServer: l0, GetServers: c0, GetSubchannel: u0, GetSocket: d0, GetServerSockets: h0 };
  }
  var Gs = null;
  function Bh() {
    if (Gs) return Gs;
    let e = fo().loadSync, t = e("channelz.proto", { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true, includeDirs: [`${__dirname}/../../proto`] });
    return Gs = Mh.loadPackageDefinition(t).grpc.channelz.v1.Channelz.service, Gs;
  }
  function f0() {
    Nh.registerAdminService(Bh, Uh);
  }
});
var Ys = (0, import_chunk_w1d7ygsk.V)(function(Wh) {
  Object.defineProperty(Wh, "__esModule", { value: true });
  Wh.getNextCallNumber = A0;
  var w0 = 0;
  function A0() {
    return w0++;
  }
});
var _o = (0, import_chunk_w1d7ygsk.V)(function(Gh) {
  Object.defineProperty(Gh, "__esModule", { value: true });
  Gh.CompressionAlgorithms = void 0;
  var jh;
  (function(e) {
    e[e.identity = 0] = "identity", e[e.deflate = 1] = "deflate", e[e.gzip = 2] = "gzip";
  })(jh || (Gh.CompressionAlgorithms = jh = {}));
});
var So = (0, import_chunk_w1d7ygsk.V)(function(Yh) {
  Object.defineProperty(Yh, "__esModule", { value: true });
  Yh.BaseFilter = void 0;
  class Vh {
    async sendMetadata(e) {
      return e;
    }
    receiveMetadata(e) {
      return e;
    }
    async sendMessage(e) {
      return e;
    }
    async receiveMessage(e) {
      return e;
    }
    receiveTrailers(e) {
      return e;
    }
  }
  Yh.BaseFilter = Vh;
});
var Eo = (0, import_chunk_w1d7ygsk.V)(function(sf) {
  Object.defineProperty(sf, "__esModule", { value: true });
  sf.CompressionFilterFactory = sf.CompressionFilter = void 0;
  var er = (0, import_chunk_w1d7ygsk.ft)("zlib"), Ks = _o(), Ce = x(), Xh = So(), Qh = K(), N0 = (e) => typeof e === "number" && typeof Ks.CompressionAlgorithms[e] === "string";
  class qi {
    async writeMessage(e, t) {
      let r = e;
      if (t) r = await this.compressMessage(r);
      let i = Buffer.allocUnsafe(r.length + 5);
      return i.writeUInt8(t ? 1 : 0, 0), i.writeUInt32BE(r.length, 1), r.copy(i, 5), i;
    }
    async readMessage(e) {
      let t = e.readUInt8(0) === 1, r = e.slice(5);
      if (t) r = await this.decompressMessage(r);
      return r;
    }
  }
  class Yr extends qi {
    async compressMessage(e) {
      return e;
    }
    async writeMessage(e, t) {
      let r = Buffer.allocUnsafe(e.length + 5);
      return r.writeUInt8(0, 0), r.writeUInt32BE(e.length, 1), e.copy(r, 5), r;
    }
    decompressMessage(e) {
      return Promise.reject(Error('Received compressed message but "grpc-encoding" header was identity'));
    }
  }
  class Zh extends qi {
    constructor(e) {
      super();
      this.maxRecvMessageLength = e;
    }
    compressMessage(e) {
      return new Promise((t, r) => {
        er.deflate(e, (i, s) => {
          if (i) r(i);
          else t(s);
        });
      });
    }
    decompressMessage(e) {
      return new Promise((t, r) => {
        let i = 0, s = [], n = er.createInflate();
        n.on("error", (a) => {
          r({ code: Ce.Status.INTERNAL, details: "Failed to decompress deflate-encoded message" });
        }), n.on("data", (a) => {
          if (s.push(a), i += a.byteLength, this.maxRecvMessageLength !== -1 && i > this.maxRecvMessageLength) n.destroy(), r({ code: Ce.Status.RESOURCE_EXHAUSTED, details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}` });
        }), n.on("end", () => {
          t(Buffer.concat(s));
        }), n.write(e), n.end();
      });
    }
  }
  class ef extends qi {
    constructor(e) {
      super();
      this.maxRecvMessageLength = e;
    }
    compressMessage(e) {
      return new Promise((t, r) => {
        er.gzip(e, (i, s) => {
          if (i) r(i);
          else t(s);
        });
      });
    }
    decompressMessage(e) {
      return new Promise((t, r) => {
        let i = 0, s = [], n = er.createGunzip();
        n.on("error", (a) => {
          r({ code: Ce.Status.INTERNAL, details: "Failed to decompress gzip-encoded message" });
        }), n.on("data", (a) => {
          if (s.push(a), i += a.byteLength, this.maxRecvMessageLength !== -1 && i > this.maxRecvMessageLength) n.destroy(), r({ code: Ce.Status.RESOURCE_EXHAUSTED, details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}` });
        }), n.on("end", () => {
          t(Buffer.concat(s));
        }), n.write(e), n.end();
      });
    }
  }
  class tf extends qi {
    constructor(e) {
      super();
      this.compressionName = e;
    }
    compressMessage(e) {
      return Promise.reject(Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
    }
    decompressMessage(e) {
      return Promise.reject(Error(`Compression method not supported: ${this.compressionName}`));
    }
  }
  function Jh(e, t) {
    switch (e) {
      case "identity":
        return new Yr();
      case "deflate":
        return new Zh(t);
      case "gzip":
        return new ef(t);
      default:
        return new tf(e);
    }
  }
  class Co extends Xh.BaseFilter {
    constructor(e, t) {
      var r, i, s;
      super();
      this.sharedFilterConfig = t, this.sendCompression = new Yr(), this.receiveCompression = new Yr(), this.currentCompressionAlgorithm = "identity";
      let n = e["grpc.default_compression_algorithm"];
      if (this.maxReceiveMessageLength = (r = e["grpc.max_receive_message_length"]) !== null && r !== void 0 ? r : Ce.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH, this.maxSendMessageLength = (i = e["grpc.max_send_message_length"]) !== null && i !== void 0 ? i : Ce.DEFAULT_MAX_SEND_MESSAGE_LENGTH, n !== void 0) if (N0(n)) {
        let a = Ks.CompressionAlgorithms[n], o = (s = t.serverSupportedEncodingHeader) === null || s === void 0 ? void 0 : s.split(",");
        if (!o || o.includes(a)) this.currentCompressionAlgorithm = a, this.sendCompression = Jh(this.currentCompressionAlgorithm, -1);
      } else Qh.log(Ce.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${n}`);
    }
    async sendMetadata(e) {
      let t = await e;
      if (t.set("grpc-accept-encoding", "identity,deflate,gzip"), t.set("accept-encoding", "identity"), this.currentCompressionAlgorithm === "identity") t.remove("grpc-encoding");
      else t.set("grpc-encoding", this.currentCompressionAlgorithm);
      return t;
    }
    receiveMetadata(e) {
      let t = e.get("grpc-encoding");
      if (t.length > 0) {
        let i = t[0];
        if (typeof i === "string") this.receiveCompression = Jh(i, this.maxReceiveMessageLength);
      }
      e.remove("grpc-encoding");
      let r = e.get("grpc-accept-encoding")[0];
      if (r) {
        if (this.sharedFilterConfig.serverSupportedEncodingHeader = r, !r.split(",").includes(this.currentCompressionAlgorithm)) this.sendCompression = new Yr(), this.currentCompressionAlgorithm = "identity";
      }
      return e.remove("grpc-accept-encoding"), e;
    }
    async sendMessage(e) {
      var t;
      let r = await e;
      if (this.maxSendMessageLength !== -1 && r.message.length > this.maxSendMessageLength) throw { code: Ce.Status.RESOURCE_EXHAUSTED, details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}` };
      let i;
      if (this.sendCompression instanceof Yr) i = false;
      else i = (((t = r.flags) !== null && t !== void 0 ? t : 0) & 2) === 0;
      return { message: await this.sendCompression.writeMessage(r.message, i), flags: r.flags };
    }
    async receiveMessage(e) {
      return this.receiveCompression.readMessage(await e);
    }
  }
  sf.CompressionFilter = Co;
  class rf {
    constructor(e, t) {
      this.options = t, this.sharedFilterConfig = {};
    }
    createFilter() {
      return new Co(this.options, this.sharedFilterConfig);
    }
  }
  sf.CompressionFilterFactory = rf;
});
var Ui = (0, import_chunk_w1d7ygsk.V)(function(af) {
  Object.defineProperty(af, "__esModule", { value: true });
  af.restrictControlPlaneStatusCode = x0;
  var ae = x(), I0 = [ae.Status.OK, ae.Status.INVALID_ARGUMENT, ae.Status.NOT_FOUND, ae.Status.ALREADY_EXISTS, ae.Status.FAILED_PRECONDITION, ae.Status.ABORTED, ae.Status.OUT_OF_RANGE, ae.Status.DATA_LOSS];
  function x0(e, t) {
    if (I0.includes(e)) return { code: ae.Status.INTERNAL, details: `Invalid status from control plane: ${e} ${ae.Status[e]} ${t}` };
    else return { code: e, details: t };
  }
});
var Kr = (0, import_chunk_w1d7ygsk.V)(function(of) {
  Object.defineProperty(of, "__esModule", { value: true });
  of.minDeadline = D0;
  of.getDeadlineTimeoutString = F0;
  of.getRelativeTimeout = U0;
  of.deadlineToString = B0;
  of.formatDateDifference = z0;
  function D0(...e) {
    let t = 1 / 0;
    for (let r of e) {
      let i = r instanceof Date ? r.getTime() : r;
      if (i < t) t = i;
    }
    return t;
  }
  var L0 = [["m", 1], ["S", 1e3], ["M", 6e4], ["H", 36e5]];
  function F0(e) {
    let t = (/* @__PURE__ */ new Date()).getTime();
    if (e instanceof Date) e = e.getTime();
    let r = Math.max(e - t, 0);
    for (let [i, s] of L0) {
      let n = r / s;
      if (n < 1e8) return String(Math.ceil(n)) + i;
    }
    throw Error("Deadline is too far in the future");
  }
  var q0 = 2147483647;
  function U0(e) {
    let t = e instanceof Date ? e.getTime() : e, r = (/* @__PURE__ */ new Date()).getTime(), i = t - r;
    if (i < 0) return 0;
    else if (i > q0) return 1 / 0;
    else return i;
  }
  function B0(e) {
    if (e instanceof Date) return e.toISOString();
    else {
      let t = new Date(e);
      if (Number.isNaN(t.getTime())) return "" + e;
      else return t.toISOString();
    }
  }
  function z0(e, t) {
    return ((t.getTime() - e.getTime()) / 1e3).toFixed(3) + "s";
  }
});
var Js = (0, import_chunk_w1d7ygsk.V)(function(lf) {
  Object.defineProperty(lf, "__esModule", { value: true });
  lf.FilterStackFactory = lf.FilterStack = void 0;
  class To {
    constructor(e) {
      this.filters = e;
    }
    sendMetadata(e) {
      let t = e;
      for (let r = 0; r < this.filters.length; r++) t = this.filters[r].sendMetadata(t);
      return t;
    }
    receiveMetadata(e) {
      let t = e;
      for (let r = this.filters.length - 1; r >= 0; r--) t = this.filters[r].receiveMetadata(t);
      return t;
    }
    sendMessage(e) {
      let t = e;
      for (let r = 0; r < this.filters.length; r++) t = this.filters[r].sendMessage(t);
      return t;
    }
    receiveMessage(e) {
      let t = e;
      for (let r = this.filters.length - 1; r >= 0; r--) t = this.filters[r].receiveMessage(t);
      return t;
    }
    receiveTrailers(e) {
      let t = e;
      for (let r = this.filters.length - 1; r >= 0; r--) t = this.filters[r].receiveTrailers(t);
      return t;
    }
    push(e) {
      this.filters.unshift(...e);
    }
    getFilters() {
      return this.filters;
    }
  }
  lf.FilterStack = To;
  class Ro {
    constructor(e) {
      this.factories = e;
    }
    push(e) {
      this.factories.unshift(...e);
    }
    clone() {
      return new Ro([...this.factories]);
    }
    createFilter() {
      return new To(this.factories.map((e) => e.createFilter()));
    }
  }
  lf.FilterStackFactory = Ro;
});
var Cf = (0, import_chunk_w1d7ygsk.V)(function(_f) {
  Object.defineProperty(_f, "__esModule", { value: true });
  _f.SingleSubchannelChannel = void 0;
  var uf = Ys(), Et = Zt(), df = Eo(), hf = Ae(), Tt = x(), ff = Ui(), pf = Kr(), gf = Js(), Jr = ue(), mf = tt(), tr = we();
  class vf {
    constructor(e, t, r, i, s) {
      var n, a;
      this.subchannel = e, this.method = t, this.options = i, this.callNumber = s, this.childCall = null, this.pendingMessage = null, this.readPending = false, this.halfClosePending = false, this.pendingStatus = null, this.readFilterPending = false, this.writeFilterPending = false;
      let o = this.method.split("/"), l = "";
      if (o.length >= 2) l = o[1];
      let c = (a = (n = tr.splitHostPort(this.options.host)) === null || n === void 0 ? void 0 : n.host) !== null && a !== void 0 ? a : "localhost";
      this.serviceUrl = `https://${c}/${l}`;
      let u = pf.getRelativeTimeout(i.deadline);
      if (u !== 1 / 0) if (u <= 0) this.cancelWithStatus(Tt.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
      else setTimeout(() => {
        this.cancelWithStatus(Tt.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
      }, u);
      this.filterStack = r.createFilter();
    }
    cancelWithStatus(e, t) {
      if (this.childCall) this.childCall.cancelWithStatus(e, t);
      else this.pendingStatus = { code: e, details: t, metadata: new Jr.Metadata() };
    }
    getPeer() {
      var e, t;
      return (t = (e = this.childCall) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : this.subchannel.getAddress();
    }
    async start(e, t) {
      if (this.pendingStatus) {
        t.onReceiveStatus(this.pendingStatus);
        return;
      }
      if (this.subchannel.getConnectivityState() !== hf.ConnectivityState.READY) {
        t.onReceiveStatus({ code: Tt.Status.UNAVAILABLE, details: "Subchannel not ready", metadata: new Jr.Metadata() });
        return;
      }
      let r = await this.filterStack.sendMetadata(Promise.resolve(e)), i;
      try {
        i = await this.subchannel.getCallCredentials().generateMetadata({ method_name: this.method, service_url: this.serviceUrl });
      } catch (n) {
        let a = n, { code: o, details: l } = ff.restrictControlPlaneStatusCode(typeof a.code === "number" ? a.code : Tt.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${a.message}`);
        t.onReceiveStatus({ code: o, details: l, metadata: new Jr.Metadata() });
        return;
      }
      i.merge(r);
      let s = { onReceiveMetadata: async (n) => {
        t.onReceiveMetadata(await this.filterStack.receiveMetadata(n));
      }, onReceiveMessage: async (n) => {
        this.readFilterPending = true;
        let a = await this.filterStack.receiveMessage(n);
        if (this.readFilterPending = false, t.onReceiveMessage(a), this.pendingStatus) t.onReceiveStatus(this.pendingStatus);
      }, onReceiveStatus: async (n) => {
        let a = await this.filterStack.receiveTrailers(n);
        if (this.readFilterPending) this.pendingStatus = a;
        else t.onReceiveStatus(a);
      } };
      if (this.childCall = this.subchannel.createCall(i, this.options.host, this.method, s), this.readPending) this.childCall.startRead();
      if (this.pendingMessage) this.childCall.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
      if (this.halfClosePending && !this.writeFilterPending) this.childCall.halfClose();
    }
    async sendMessageWithContext(e, t) {
      this.writeFilterPending = true;
      let r = await this.filterStack.sendMessage(Promise.resolve({ message: t, flags: e.flags }));
      if (this.writeFilterPending = false, this.childCall) {
        if (this.childCall.sendMessageWithContext(e, r.message), this.halfClosePending) this.childCall.halfClose();
      } else this.pendingMessage = { context: e, message: r.message };
    }
    startRead() {
      if (this.childCall) this.childCall.startRead();
      else this.readPending = true;
    }
    halfClose() {
      if (this.childCall && !this.writeFilterPending) this.childCall.halfClose();
      else this.halfClosePending = true;
    }
    getCallNumber() {
      return this.callNumber;
    }
    setCredentials(e) {
      throw Error("Method not implemented.");
    }
    getAuthContext() {
      if (this.childCall) return this.childCall.getAuthContext();
      else return null;
    }
  }
  class yf {
    constructor(e, t, r) {
      if (this.subchannel = e, this.target = t, this.channelzEnabled = false, this.channelzTrace = new Et.ChannelzTrace(), this.callTracker = new Et.ChannelzCallTracker(), this.childrenTracker = new Et.ChannelzChildrenTracker(), this.channelzEnabled = r["grpc.enable_channelz"] !== 0, this.channelzRef = Et.registerChannelzChannel(tr.uriToString(t), () => ({ target: `${tr.uriToString(t)} (${e.getAddress()})`, state: this.subchannel.getConnectivityState(), trace: this.channelzTrace, callTracker: this.callTracker, children: this.childrenTracker.getChildLists() }), this.channelzEnabled), this.channelzEnabled) this.childrenTracker.refChild(e.getChannelzRef());
      this.filterStackFactory = new gf.FilterStackFactory([new df.CompressionFilterFactory(this, r)]);
    }
    close() {
      if (this.channelzEnabled) this.childrenTracker.unrefChild(this.subchannel.getChannelzRef());
      Et.unregisterChannelzRef(this.channelzRef);
    }
    getTarget() {
      return tr.uriToString(this.target);
    }
    getConnectivityState(e) {
      throw Error("Method not implemented.");
    }
    watchConnectivityState(e, t, r) {
      throw Error("Method not implemented.");
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(e, t) {
      let r = { deadline: t, host: mf.getDefaultAuthority(this.target), flags: Tt.Propagate.DEFAULTS, parentCall: null };
      return new vf(this.subchannel, e, this.filterStackFactory, r, uf.getNextCallNumber());
    }
  }
  _f.SingleSubchannelChannel = yf;
});
var Pf = (0, import_chunk_w1d7ygsk.V)(function(wf) {
  Object.defineProperty(wf, "__esModule", { value: true });
  wf.Subchannel = void 0;
  var R = Ae(), Ef = Ir(), Xr = K(), rr = x(), Tf = we(), Rf = Pe(), oe = Zt(), bf = Cf(), Y0 = "subchannel", K0 = 2147483647;
  class Of {
    constructor(e, t, r, i, s) {
      var n;
      this.channelTarget = e, this.subchannelAddress = t, this.options = r, this.connector = s, this.connectivityState = R.ConnectivityState.IDLE, this.transport = null, this.continueConnecting = false, this.stateListeners = /* @__PURE__ */ new Set(), this.refcount = 0, this.channelzEnabled = true, this.dataProducers = /* @__PURE__ */ new Map(), this.subchannelChannel = null;
      let a = { initialDelay: r["grpc.initial_reconnect_backoff_ms"], maxDelay: r["grpc.max_reconnect_backoff_ms"] };
      if (this.backoffTimeout = new Ef.BackoffTimeout(() => {
        this.handleBackoffTimer();
      }, a), this.backoffTimeout.unref(), this.subchannelAddressString = Rf.subchannelAddressToString(t), this.keepaliveTime = (n = r["grpc.keepalive_time_ms"]) !== null && n !== void 0 ? n : -1, r["grpc.enable_channelz"] === 0) this.channelzEnabled = false, this.channelzTrace = new oe.ChannelzTraceStub(), this.callTracker = new oe.ChannelzCallTrackerStub(), this.childrenTracker = new oe.ChannelzChildrenTrackerStub(), this.streamTracker = new oe.ChannelzCallTrackerStub();
      else this.channelzTrace = new oe.ChannelzTrace(), this.callTracker = new oe.ChannelzCallTracker(), this.childrenTracker = new oe.ChannelzChildrenTracker(), this.streamTracker = new oe.ChannelzCallTracker();
      this.channelzRef = oe.registerChannelzSubchannel(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled), this.channelzTrace.addTrace("CT_INFO", "Subchannel created"), this.trace("Subchannel constructed with options " + JSON.stringify(r, void 0, 2)), this.secureConnector = i._createSecureConnector(e, r);
    }
    getChannelzInfo() {
      return { state: this.connectivityState, trace: this.channelzTrace, callTracker: this.callTracker, children: this.childrenTracker.getChildLists(), target: this.subchannelAddressString };
    }
    trace(e) {
      Xr.trace(rr.LogVerbosity.DEBUG, Y0, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    refTrace(e) {
      Xr.trace(rr.LogVerbosity.DEBUG, "subchannel_refcount", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    handleBackoffTimer() {
      if (this.continueConnecting) this.transitionToState([R.ConnectivityState.TRANSIENT_FAILURE], R.ConnectivityState.CONNECTING);
      else this.transitionToState([R.ConnectivityState.TRANSIENT_FAILURE], R.ConnectivityState.IDLE);
    }
    startBackoff() {
      this.backoffTimeout.runOnce();
    }
    stopBackoff() {
      this.backoffTimeout.stop(), this.backoffTimeout.reset();
    }
    startConnectingInternal() {
      let e = this.options;
      if (e["grpc.keepalive_time_ms"]) {
        let t = Math.min(this.keepaliveTime, K0);
        e = Object.assign(Object.assign({}, e), { "grpc.keepalive_time_ms": t });
      }
      this.connector.connect(this.subchannelAddress, this.secureConnector, e).then((t) => {
        if (this.transitionToState([R.ConnectivityState.CONNECTING], R.ConnectivityState.READY)) {
          if (this.transport = t, this.channelzEnabled) this.childrenTracker.refChild(t.getChannelzRef());
          t.addDisconnectListener((r) => {
            if (this.transitionToState([R.ConnectivityState.READY], R.ConnectivityState.IDLE), r && this.keepaliveTime > 0) this.keepaliveTime *= 2, Xr.log(rr.LogVerbosity.ERROR, `Connection to ${Tf.uriToString(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`);
          });
        } else t.shutdown();
      }, (t) => {
        this.transitionToState([R.ConnectivityState.CONNECTING], R.ConnectivityState.TRANSIENT_FAILURE, `${t}`);
      });
    }
    transitionToState(e, t, r) {
      var i, s;
      if (e.indexOf(this.connectivityState) === -1) return false;
      if (r) this.trace(R.ConnectivityState[this.connectivityState] + " -> " + R.ConnectivityState[t] + ' with error "' + r + '"');
      else this.trace(R.ConnectivityState[this.connectivityState] + " -> " + R.ConnectivityState[t]);
      if (this.channelzEnabled) this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + R.ConnectivityState[t]);
      let n = this.connectivityState;
      switch (this.connectivityState = t, t) {
        case R.ConnectivityState.READY:
          this.stopBackoff();
          break;
        case R.ConnectivityState.CONNECTING:
          this.startBackoff(), this.startConnectingInternal(), this.continueConnecting = false;
          break;
        case R.ConnectivityState.TRANSIENT_FAILURE:
          if (this.channelzEnabled && this.transport) this.childrenTracker.unrefChild(this.transport.getChannelzRef());
          if ((i = this.transport) === null || i === void 0 || i.shutdown(), this.transport = null, !this.backoffTimeout.isRunning()) process.nextTick(() => {
            this.handleBackoffTimer();
          });
          break;
        case R.ConnectivityState.IDLE:
          if (this.channelzEnabled && this.transport) this.childrenTracker.unrefChild(this.transport.getChannelzRef());
          (s = this.transport) === null || s === void 0 || s.shutdown(), this.transport = null;
          break;
        default:
          throw Error(`Invalid state: unknown ConnectivityState ${t}`);
      }
      for (let a of this.stateListeners) a(this, n, t, this.keepaliveTime, r);
      return true;
    }
    ref() {
      this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1)), this.refcount += 1;
    }
    unref() {
      if (this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1)), this.refcount -= 1, this.refcount === 0) this.channelzTrace.addTrace("CT_INFO", "Shutting down"), oe.unregisterChannelzRef(this.channelzRef), this.secureConnector.destroy(), process.nextTick(() => {
        this.transitionToState([R.ConnectivityState.CONNECTING, R.ConnectivityState.READY], R.ConnectivityState.IDLE);
      });
    }
    unrefIfOneRef() {
      if (this.refcount === 1) return this.unref(), true;
      return false;
    }
    createCall(e, t, r, i) {
      if (!this.transport) throw Error("Cannot create call, subchannel not READY");
      let s;
      if (this.channelzEnabled) this.callTracker.addCallStarted(), this.streamTracker.addCallStarted(), s = { onCallEnd: (n) => {
        if (n.code === rr.Status.OK) this.callTracker.addCallSucceeded();
        else this.callTracker.addCallFailed();
      } };
      else s = {};
      return this.transport.createCall(e, t, r, i, s);
    }
    startConnecting() {
      process.nextTick(() => {
        if (!this.transitionToState([R.ConnectivityState.IDLE], R.ConnectivityState.CONNECTING)) {
          if (this.connectivityState === R.ConnectivityState.TRANSIENT_FAILURE) this.continueConnecting = true;
        }
      });
    }
    getConnectivityState() {
      return this.connectivityState;
    }
    addConnectivityStateListener(e) {
      this.stateListeners.add(e);
    }
    removeConnectivityStateListener(e) {
      this.stateListeners.delete(e);
    }
    resetBackoff() {
      process.nextTick(() => {
        this.backoffTimeout.reset(), this.transitionToState([R.ConnectivityState.TRANSIENT_FAILURE], R.ConnectivityState.CONNECTING);
      });
    }
    getAddress() {
      return this.subchannelAddressString;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    isHealthy() {
      return true;
    }
    addHealthStateWatcher(e) {
    }
    removeHealthStateWatcher(e) {
    }
    getRealSubchannel() {
      return this;
    }
    realSubchannelEquals(e) {
      return e.getRealSubchannel() === this;
    }
    throttleKeepalive(e) {
      if (e > this.keepaliveTime) this.keepaliveTime = e;
    }
    getCallCredentials() {
      return this.secureConnector.getCallCredentials();
    }
    getChannel() {
      if (!this.subchannelChannel) this.subchannelChannel = new bf.SingleSubchannelChannel(this, this.channelTarget, this.options);
      return this.subchannelChannel;
    }
    addDataWatcher(e) {
      throw Error("Not implemented");
    }
    getOrCreateDataProducer(e, t) {
      let r = this.dataProducers.get(e);
      if (r) return r;
      let i = t(this);
      return this.dataProducers.set(e, i), i;
    }
    removeDataProducer(e) {
      this.dataProducers.delete(e);
    }
  }
  wf.Subchannel = Of;
});
var If = (0, import_chunk_w1d7ygsk.V)(function(Nf) {
  var bo;
  Object.defineProperty(Nf, "__esModule", { value: true });
  Nf.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = void 0;
  Nf.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = ((bo = process.env.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) !== null && bo !== void 0 ? bo : "false") === "true";
});
var Oo = (0, import_chunk_w1d7ygsk.V)(function(Uf) {
  Object.defineProperty(Uf, "__esModule", { value: true });
  Uf.DEFAULT_PORT = void 0;
  Uf.setup = Q0;
  var Xs = tt(), Qr = (0, import_chunk_w1d7ygsk.ft)("dns"), xf = va(), Zr = x(), je = vr(), kf = ue(), Df = K(), Lf = x(), Ee = we(), Qs = (0, import_chunk_w1d7ygsk.ft)("net"), Ff = Ir(), Zs = If(), J0 = "dns_resolver";
  function Rt(e) {
    Df.trace(Lf.LogVerbosity.DEBUG, J0, e);
  }
  Uf.DEFAULT_PORT = 443;
  var X0 = 3e4;
  class qf {
    constructor(e, t, r) {
      var i, s, n;
      if (this.target = e, this.listener = t, this.pendingLookupPromise = null, this.pendingTxtPromise = null, this.latestLookupResult = null, this.latestServiceConfigResult = null, this.continueResolving = false, this.isNextResolutionTimerRunning = false, this.isServiceConfigEnabled = true, this.returnedIpResult = false, this.alternativeResolver = new Qr.promises.Resolver(), Rt("Resolver constructed for target " + Ee.uriToString(e)), e.authority) this.alternativeResolver.setServers([e.authority]);
      let a = Ee.splitHostPort(e.path);
      if (a === null) this.ipResult = null, this.dnsHostname = null, this.port = null;
      else if (Qs.isIPv4(a.host) || Qs.isIPv6(a.host)) this.ipResult = [{ addresses: [{ host: a.host, port: (i = a.port) !== null && i !== void 0 ? i : Uf.DEFAULT_PORT }] }], this.dnsHostname = null, this.port = null;
      else this.ipResult = null, this.dnsHostname = a.host, this.port = (s = a.port) !== null && s !== void 0 ? s : Uf.DEFAULT_PORT;
      if (this.percentage = Math.random() * 100, r["grpc.service_config_disable_resolution"] === 1) this.isServiceConfigEnabled = false;
      this.defaultResolutionError = { code: Zr.Status.UNAVAILABLE, details: `Name resolution failed for target ${Ee.uriToString(this.target)}`, metadata: new kf.Metadata() };
      let o = { initialDelay: r["grpc.initial_reconnect_backoff_ms"], maxDelay: r["grpc.max_reconnect_backoff_ms"] };
      this.backoff = new Ff.BackoffTimeout(() => {
        if (this.continueResolving) this.startResolutionWithBackoff();
      }, o), this.backoff.unref(), this.minTimeBetweenResolutionsMs = (n = r["grpc.dns_min_time_between_resolutions_ms"]) !== null && n !== void 0 ? n : X0, this.nextResolutionTimer = setTimeout(() => {
      }, 0), clearTimeout(this.nextResolutionTimer);
    }
    startResolution() {
      if (this.ipResult !== null) {
        if (!this.returnedIpResult) Rt("Returning IP address for target " + Ee.uriToString(this.target)), setImmediate(() => {
          this.listener(je.statusOrFromValue(this.ipResult), {}, null, "");
        }), this.returnedIpResult = true;
        this.backoff.stop(), this.backoff.reset(), this.stopNextResolutionTimer();
        return;
      }
      if (this.dnsHostname === null) Rt("Failed to parse DNS address " + Ee.uriToString(this.target)), setImmediate(() => {
        this.listener(je.statusOrFromError({ code: Zr.Status.UNAVAILABLE, details: `Failed to parse DNS address ${Ee.uriToString(this.target)}` }), {}, null, "");
      }), this.stopNextResolutionTimer();
      else {
        if (this.pendingLookupPromise !== null) return;
        Rt("Looking up DNS hostname " + this.dnsHostname), this.latestLookupResult = null;
        let e = this.dnsHostname;
        if (this.pendingLookupPromise = this.lookup(e), this.pendingLookupPromise.then((t) => {
          if (this.pendingLookupPromise === null) return;
          this.pendingLookupPromise = null, this.latestLookupResult = je.statusOrFromValue(t.map((s) => ({ addresses: [s] })));
          let r = "[" + t.map((s) => s.host + ":" + s.port).join(",") + "]";
          Rt("Resolved addresses for target " + Ee.uriToString(this.target) + ": " + r);
          let i = this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
          this.handleHealthStatus(i);
        }, (t) => {
          if (this.pendingLookupPromise === null) return;
          Rt("Resolution error for target " + Ee.uriToString(this.target) + ": " + t.message), this.pendingLookupPromise = null, this.stopNextResolutionTimer(), this.listener(je.statusOrFromError(this.defaultResolutionError), {}, this.latestServiceConfigResult, "");
        }), this.isServiceConfigEnabled && this.pendingTxtPromise === null) this.pendingTxtPromise = this.resolveTxt(e), this.pendingTxtPromise.then((t) => {
          if (this.pendingTxtPromise === null) return;
          this.pendingTxtPromise = null;
          let r;
          try {
            if (r = xf.extractAndSelectServiceConfig(t, this.percentage), r) this.latestServiceConfigResult = je.statusOrFromValue(r);
            else this.latestServiceConfigResult = null;
          } catch (i) {
            this.latestServiceConfigResult = je.statusOrFromError({ code: Zr.Status.UNAVAILABLE, details: `Parsing service config failed with error ${i.message}` });
          }
          if (this.latestLookupResult !== null) this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
        }, (t) => {
        });
      }
    }
    handleHealthStatus(e) {
      if (e) this.backoff.stop(), this.backoff.reset();
      else this.continueResolving = true;
    }
    async lookup(e) {
      if (Zs.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
        Rt("Using alternative DNS resolver.");
        let r = await Promise.allSettled([this.alternativeResolver.resolve4(e), this.alternativeResolver.resolve6(e)]);
        if (r.every((i) => i.status === "rejected")) throw Error(r[0].reason);
        return r.reduce((i, s) => s.status === "fulfilled" ? [...i, ...s.value] : i, []).map((i) => ({ host: i, port: +this.port }));
      }
      return (await Qr.promises.lookup(e, { all: true })).map((r) => ({ host: r.address, port: +this.port }));
    }
    async resolveTxt(e) {
      if (Zs.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) return Rt("Using alternative DNS resolver."), this.alternativeResolver.resolveTxt(e);
      return Qr.promises.resolveTxt(e);
    }
    startNextResolutionTimer() {
      var e, t;
      clearTimeout(this.nextResolutionTimer), this.nextResolutionTimer = setTimeout(() => {
        if (this.stopNextResolutionTimer(), this.continueResolving) this.startResolutionWithBackoff();
      }, this.minTimeBetweenResolutionsMs), (t = (e = this.nextResolutionTimer).unref) === null || t === void 0 || t.call(e), this.isNextResolutionTimerRunning = true;
    }
    stopNextResolutionTimer() {
      clearTimeout(this.nextResolutionTimer), this.isNextResolutionTimerRunning = false;
    }
    startResolutionWithBackoff() {
      if (this.pendingLookupPromise === null) this.continueResolving = false, this.backoff.runOnce(), this.startNextResolutionTimer(), this.startResolution();
    }
    updateResolution() {
      if (this.pendingLookupPromise === null) if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
        if (this.isNextResolutionTimerRunning) Rt('resolution update delayed by "min time between resolutions" rate limit');
        else Rt("resolution update delayed by backoff timer until " + this.backoff.getEndTime().toISOString());
        this.continueResolving = true;
      } else this.startResolutionWithBackoff();
    }
    destroy() {
      this.continueResolving = false, this.backoff.reset(), this.backoff.stop(), this.stopNextResolutionTimer(), this.pendingLookupPromise = null, this.pendingTxtPromise = null, this.latestLookupResult = null, this.latestServiceConfigResult = null, this.returnedIpResult = false;
    }
    static getDefaultAuthority(e) {
      return e.path;
    }
  }
  function Q0() {
    Xs.registerResolver("dns", qf), Xs.registerDefaultScheme("dns");
  }
});
var wo = (0, import_chunk_w1d7ygsk.V)(function($f) {
  Object.defineProperty($f, "__esModule", { value: true });
  $f.parseCIDR = jf;
  $f.mapProxyName = nR;
  $f.getProxiedConnection = aR;
  var bt = K(), Ge = x(), rn = (0, import_chunk_w1d7ygsk.ft)("net"), Bf = (0, import_chunk_w1d7ygsk.ft)("http"), zf = K(), tn = Pe(), Ot = we(), Hf = (0, import_chunk_w1d7ygsk.ft)("url"), Wf = Oo(), eR = "proxy";
  function ei(e) {
    zf.trace(Ge.LogVerbosity.DEBUG, eR, e);
  }
  function tR() {
    let e = "", t = "";
    if (process.env.grpc_proxy) t = "grpc_proxy", e = process.env.grpc_proxy;
    else if (process.env.https_proxy) t = "https_proxy", e = process.env.https_proxy;
    else if (process.env.http_proxy) t = "http_proxy", e = process.env.http_proxy;
    else return {};
    let r;
    try {
      r = new Hf.URL(e);
    } catch (o) {
      return bt.log(Ge.LogVerbosity.ERROR, `cannot parse value of "${t}" env var`), {};
    }
    if (r.protocol !== "http:") return bt.log(Ge.LogVerbosity.ERROR, `"${r.protocol}" scheme not supported in proxy URI`), {};
    let i = null;
    if (r.username) if (r.password) bt.log(Ge.LogVerbosity.INFO, "userinfo found in proxy URI"), i = decodeURIComponent(`${r.username}:${r.password}`);
    else i = r.username;
    let s = r.hostname, n = r.port;
    if (n === "") n = "80";
    let a = { address: `${s}:${n}` };
    if (i) a.creds = i;
    return ei("Proxy server " + a.address + " set by environment variable " + t), a;
  }
  function rR() {
    let e = process.env.no_grpc_proxy, t = "no_grpc_proxy";
    if (!e) e = process.env.no_proxy, t = "no_proxy";
    if (e) return ei("No proxy server list set by environment variable " + t), e.split(",");
    else return [];
  }
  function jf(e) {
    let t = e.split("/");
    if (t.length !== 2) return null;
    let r = parseInt(t[1], 10);
    if (!rn.isIPv4(t[0]) || Number.isNaN(r) || r < 0 || r > 32) return null;
    return { ip: Gf(t[0]), prefixLength: r };
  }
  function Gf(e) {
    return e.split(".").reduce((t, r) => (t << 8) + parseInt(r, 10), 0);
  }
  function iR(e, t) {
    let r = e.ip, i = -1 << 32 - e.prefixLength;
    return (Gf(t) & i) === (r & i);
  }
  function sR(e) {
    for (let t of rR()) {
      let r = jf(t);
      if (rn.isIPv4(e) && r && iR(r, e)) return true;
      else if (e.endsWith(t)) return true;
    }
    return false;
  }
  function nR(e, t) {
    var r;
    let i = { target: e, extraOptions: {} };
    if (((r = t["grpc.enable_http_proxy"]) !== null && r !== void 0 ? r : 1) === 0) return i;
    if (e.scheme === "unix") return i;
    let s = tR();
    if (!s.address) return i;
    let n = Ot.splitHostPort(e.path);
    if (!n) return i;
    let a = n.host;
    if (sR(a)) return ei("Not using proxy for target in no_proxy list: " + Ot.uriToString(e)), i;
    let o = { "grpc.http_connect_target": Ot.uriToString(e) };
    if (s.creds) o["grpc.http_connect_creds"] = s.creds;
    return { target: { scheme: "dns", path: s.address }, extraOptions: o };
  }
  function aR(e, t) {
    var r;
    if (!("grpc.http_connect_target" in t)) return Promise.resolve(null);
    let i = t["grpc.http_connect_target"], s = Ot.parseUri(i);
    if (s === null) return Promise.resolve(null);
    let n = Ot.splitHostPort(s.path);
    if (n === null) return Promise.resolve(null);
    let a = `${n.host}:${(r = n.port) !== null && r !== void 0 ? r : Wf.DEFAULT_PORT}`, o = { method: "CONNECT", path: a }, l = { Host: a };
    if (tn.isTcpSubchannelAddress(e)) o.host = e.host, o.port = e.port;
    else o.socketPath = e.path;
    if ("grpc.http_connect_creds" in t) l["Proxy-Authorization"] = "Basic " + Buffer.from(t["grpc.http_connect_creds"]).toString("base64");
    o.headers = l;
    let c = tn.subchannelAddressToString(e);
    return ei("Using proxy " + c + " to connect to " + o.path), new Promise((u, d) => {
      let h = Bf.request(o);
      h.once("connect", (m, f, y) => {
        if (h.removeAllListeners(), f.removeAllListeners(), m.statusCode === 200) {
          if (ei("Successfully connected to " + o.path + " through proxy " + c), y.length > 0) f.unshift(y);
          ei("Successfully established a plaintext connection to " + o.path + " through proxy " + c), u(f);
        } else bt.log(Ge.LogVerbosity.ERROR, "Failed to connect to " + o.path + " through proxy " + c + " with status " + m.statusCode), d();
      }), h.once("error", (m) => {
        h.removeAllListeners(), bt.log(Ge.LogVerbosity.ERROR, "Failed to connect to proxy " + c + " with error " + m.message), d();
      }), h.end();
    });
  }
});
var Ao = (0, import_chunk_w1d7ygsk.V)(function(Yf) {
  Object.defineProperty(Yf, "__esModule", { value: true });
  Yf.StreamDecoder = void 0;
  var wt;
  (function(e) {
    e[e.NO_DATA = 0] = "NO_DATA", e[e.READING_SIZE = 1] = "READING_SIZE", e[e.READING_MESSAGE = 2] = "READING_MESSAGE";
  })(wt || (wt = {}));
  class Vf {
    constructor(e) {
      this.maxReadMessageLength = e, this.readState = wt.NO_DATA, this.readCompressFlag = Buffer.alloc(1), this.readPartialSize = Buffer.alloc(4), this.readSizeRemaining = 4, this.readMessageSize = 0, this.readPartialMessage = [], this.readMessageRemaining = 0;
    }
    write(e) {
      let t = 0, r, i = [];
      while (t < e.length) switch (this.readState) {
        case wt.NO_DATA:
          this.readCompressFlag = e.slice(t, t + 1), t += 1, this.readState = wt.READING_SIZE, this.readPartialSize.fill(0), this.readSizeRemaining = 4, this.readMessageSize = 0, this.readMessageRemaining = 0, this.readPartialMessage = [];
          break;
        case wt.READING_SIZE:
          if (r = Math.min(e.length - t, this.readSizeRemaining), e.copy(this.readPartialSize, 4 - this.readSizeRemaining, t, t + r), this.readSizeRemaining -= r, t += r, this.readSizeRemaining === 0) {
            if (this.readMessageSize = this.readPartialSize.readUInt32BE(0), this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength) throw Error(`Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`);
            if (this.readMessageRemaining = this.readMessageSize, this.readMessageRemaining > 0) this.readState = wt.READING_MESSAGE;
            else {
              let s = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
              this.readState = wt.NO_DATA, i.push(s);
            }
          }
          break;
        case wt.READING_MESSAGE:
          if (r = Math.min(e.length - t, this.readMessageRemaining), this.readPartialMessage.push(e.slice(t, t + r)), this.readMessageRemaining -= r, t += r, this.readMessageRemaining === 0) {
            let s = [this.readCompressFlag, this.readPartialSize].concat(this.readPartialMessage), n = Buffer.concat(s, this.readMessageSize + 5);
            this.readState = wt.NO_DATA, i.push(n);
          }
          break;
        default:
          throw Error("Unexpected read state");
      }
      return i;
    }
  }
  Yf.StreamDecoder = Vf;
});
var ip = (0, import_chunk_w1d7ygsk.V)(function(tp) {
  Object.defineProperty(tp, "__esModule", { value: true });
  tp.Http2SubchannelCall = void 0;
  var fe = (0, import_chunk_w1d7ygsk.ft)("http2"), Jf = (0, import_chunk_w1d7ygsk.ft)("os"), b = x(), pe = ue(), Xf = Ao(), Qf = K(), Zf = x(), uR = "subchannel_call";
  function dR(e) {
    for (let [t, r] of Object.entries(Jf.constants.errno)) if (r === e) return t;
    return "Unknown system error " + e;
  }
  function Po(e) {
    let t = `Received HTTP status code ${e}`, r;
    switch (e) {
      case 400:
        r = b.Status.INTERNAL;
        break;
      case 401:
        r = b.Status.UNAUTHENTICATED;
        break;
      case 403:
        r = b.Status.PERMISSION_DENIED;
        break;
      case 404:
        r = b.Status.UNIMPLEMENTED;
        break;
      case 429:
      case 502:
      case 503:
      case 504:
        r = b.Status.UNAVAILABLE;
        break;
      default:
        r = b.Status.UNKNOWN;
    }
    return { code: r, details: t, metadata: new pe.Metadata() };
  }
  class ep {
    constructor(e, t, r, i, s) {
      var n;
      this.http2Stream = e, this.callEventTracker = t, this.listener = r, this.transport = i, this.callId = s, this.isReadFilterPending = false, this.isPushPending = false, this.canPush = false, this.readsClosed = false, this.statusOutput = false, this.unpushedReadMessages = [], this.finalStatus = null, this.internalError = null, this.serverEndedCall = false, this.connectionDropped = false;
      let a = (n = i.getOptions()["grpc.max_receive_message_length"]) !== null && n !== void 0 ? n : b.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
      this.decoder = new Xf.StreamDecoder(a), e.on("response", (o, l) => {
        let c = "";
        for (let u of Object.keys(o)) c += "		" + u + ": " + o[u] + `
`;
        if (this.trace(`Received server headers:
` + c), this.httpStatusCode = o[":status"], l & fe.constants.NGHTTP2_FLAG_END_STREAM) this.handleTrailers(o);
        else {
          let u;
          try {
            u = pe.Metadata.fromHttp2Headers(o);
          } catch (d) {
            this.endCall({ code: b.Status.UNKNOWN, details: d.message, metadata: new pe.Metadata() });
            return;
          }
          this.listener.onReceiveMetadata(u);
        }
      }), e.on("trailers", (o) => {
        this.handleTrailers(o);
      }), e.on("data", (o) => {
        if (this.statusOutput) return;
        this.trace("receive HTTP/2 data frame of length " + o.length);
        let l;
        try {
          l = this.decoder.write(o);
        } catch (c) {
          if (this.httpStatusCode !== void 0 && this.httpStatusCode !== 200) {
            let u = Po(this.httpStatusCode);
            this.cancelWithStatus(u.code, u.details);
          } else this.cancelWithStatus(b.Status.RESOURCE_EXHAUSTED, c.message);
          return;
        }
        for (let c of l) this.trace("parsed message of length " + c.length), this.callEventTracker.addMessageReceived(), this.tryPush(c);
      }), e.on("end", () => {
        this.readsClosed = true, this.maybeOutputStatus();
      }), e.on("close", () => {
        this.serverEndedCall = true, process.nextTick(() => {
          var o;
          if (this.trace("HTTP/2 stream closed with code " + e.rstCode), ((o = this.finalStatus) === null || o === void 0 ? void 0 : o.code) === b.Status.OK) return;
          let l, c = "";
          switch (e.rstCode) {
            case fe.constants.NGHTTP2_NO_ERROR:
              if (this.finalStatus !== null) return;
              if (this.httpStatusCode && this.httpStatusCode !== 200) {
                let u = Po(this.httpStatusCode);
                l = u.code, c = u.details;
              } else l = b.Status.INTERNAL, c = `Received RST_STREAM with code ${e.rstCode} (Call ended without gRPC status)`;
              break;
            case fe.constants.NGHTTP2_REFUSED_STREAM:
              l = b.Status.UNAVAILABLE, c = "Stream refused by server";
              break;
            case fe.constants.NGHTTP2_CANCEL:
              if (this.connectionDropped) l = b.Status.UNAVAILABLE, c = "Connection dropped";
              else l = b.Status.CANCELLED, c = "Call cancelled";
              break;
            case fe.constants.NGHTTP2_ENHANCE_YOUR_CALM:
              l = b.Status.RESOURCE_EXHAUSTED, c = "Bandwidth exhausted or memory limit exceeded";
              break;
            case fe.constants.NGHTTP2_INADEQUATE_SECURITY:
              l = b.Status.PERMISSION_DENIED, c = "Protocol not secure enough";
              break;
            case fe.constants.NGHTTP2_INTERNAL_ERROR:
              if (l = b.Status.INTERNAL, this.internalError === null) c = `Received RST_STREAM with code ${e.rstCode} (Internal server error)`;
              else if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") l = b.Status.UNAVAILABLE, c = this.internalError.message;
              else c = `Received RST_STREAM with code ${e.rstCode} triggered by internal client error: ${this.internalError.message}`;
              break;
            default:
              l = b.Status.INTERNAL, c = `Received RST_STREAM with code ${e.rstCode}`;
          }
          this.endCall({ code: l, details: c, metadata: new pe.Metadata(), rstCode: e.rstCode });
        });
      }), e.on("error", (o) => {
        if (o.code !== "ERR_HTTP2_STREAM_ERROR") this.trace("Node error event: message=" + o.message + " code=" + o.code + " errno=" + dR(o.errno) + " syscall=" + o.syscall), this.internalError = o;
        this.callEventTracker.onStreamEnd(false);
      });
    }
    getDeadlineInfo() {
      return [`remote_addr=${this.getPeer()}`];
    }
    onDisconnect() {
      this.connectionDropped = true, setImmediate(() => {
        this.endCall({ code: b.Status.UNAVAILABLE, details: "Connection dropped", metadata: new pe.Metadata() });
      });
    }
    outputStatus() {
      if (!this.statusOutput) this.statusOutput = true, this.trace("ended with status: code=" + this.finalStatus.code + ' details="' + this.finalStatus.details + '"'), this.callEventTracker.onCallEnd(this.finalStatus), process.nextTick(() => {
        this.listener.onReceiveStatus(this.finalStatus);
      }), this.http2Stream.resume();
    }
    trace(e) {
      Qf.trace(Zf.LogVerbosity.DEBUG, uR, "[" + this.callId + "] " + e);
    }
    endCall(e) {
      if (this.finalStatus === null || this.finalStatus.code === b.Status.OK) this.finalStatus = e, this.maybeOutputStatus();
      this.destroyHttp2Stream();
    }
    maybeOutputStatus() {
      if (this.finalStatus !== null) {
        if (this.finalStatus.code !== b.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && !this.isReadFilterPending && !this.isPushPending) this.outputStatus();
      }
    }
    push(e) {
      this.trace("pushing to reader message of length " + (e instanceof Buffer ? e.length : null)), this.canPush = false, this.isPushPending = true, process.nextTick(() => {
        if (this.isPushPending = false, this.statusOutput) return;
        this.listener.onReceiveMessage(e), this.maybeOutputStatus();
      });
    }
    tryPush(e) {
      if (this.canPush) this.http2Stream.pause(), this.push(e);
      else this.trace("unpushedReadMessages.push message of length " + e.length), this.unpushedReadMessages.push(e);
    }
    handleTrailers(e) {
      this.serverEndedCall = true, this.callEventTracker.onStreamEnd(true);
      let t = "";
      for (let n of Object.keys(e)) t += "		" + n + ": " + e[n] + `
`;
      this.trace(`Received server trailers:
` + t);
      let r;
      try {
        r = pe.Metadata.fromHttp2Headers(e);
      } catch (n) {
        r = new pe.Metadata();
      }
      let i = r.getMap(), s;
      if (typeof i["grpc-status"] === "string") {
        let n = Number(i["grpc-status"]);
        this.trace("received status code " + n + " from server"), r.remove("grpc-status");
        let a = "";
        if (typeof i["grpc-message"] === "string") {
          try {
            a = decodeURI(i["grpc-message"]);
          } catch (o) {
            a = i["grpc-message"];
          }
          r.remove("grpc-message"), this.trace('received status details string "' + a + '" from server');
        }
        s = { code: n, details: a, metadata: r };
      } else if (this.httpStatusCode) s = Po(this.httpStatusCode), s.metadata = r;
      else s = { code: b.Status.UNKNOWN, details: "No status information received", metadata: r };
      this.endCall(s);
    }
    destroyHttp2Stream() {
      var e;
      if (this.http2Stream.destroyed) return;
      if (this.serverEndedCall) this.http2Stream.end();
      else {
        let t;
        if (((e = this.finalStatus) === null || e === void 0 ? void 0 : e.code) === b.Status.OK) t = fe.constants.NGHTTP2_NO_ERROR;
        else t = fe.constants.NGHTTP2_CANCEL;
        this.trace("close http2 stream with code " + t), this.http2Stream.close(t);
      }
    }
    cancelWithStatus(e, t) {
      this.trace("cancelWithStatus code: " + e + ' details: "' + t + '"'), this.endCall({ code: e, details: t, metadata: new pe.Metadata() });
    }
    getStatus() {
      return this.finalStatus;
    }
    getPeer() {
      return this.transport.getPeerName();
    }
    getCallNumber() {
      return this.callId;
    }
    getAuthContext() {
      return this.transport.getAuthContext();
    }
    startRead() {
      if (this.finalStatus !== null && this.finalStatus.code !== b.Status.OK) {
        this.readsClosed = true, this.maybeOutputStatus();
        return;
      }
      if (this.canPush = true, this.unpushedReadMessages.length > 0) {
        let e = this.unpushedReadMessages.shift();
        this.push(e);
        return;
      }
      this.http2Stream.resume();
    }
    sendMessageWithContext(e, t) {
      this.trace("write() called with message of length " + t.length);
      let r = (i) => {
        process.nextTick(() => {
          var s;
          let n = b.Status.UNAVAILABLE;
          if ((i === null || i === void 0 ? void 0 : i.code) === "ERR_STREAM_WRITE_AFTER_END") n = b.Status.INTERNAL;
          if (i) this.cancelWithStatus(n, `Write error: ${i.message}`);
          (s = e.callback) === null || s === void 0 || s.call(e);
        });
      };
      this.trace("sending data chunk of length " + t.length), this.callEventTracker.addMessageSent();
      try {
        this.http2Stream.write(t, r);
      } catch (i) {
        this.endCall({ code: b.Status.UNAVAILABLE, details: `Write failed with error ${i.message}`, metadata: new pe.Metadata() });
      }
    }
    halfClose() {
      this.trace("end() called"), this.trace("calling end() on HTTP/2 stream"), this.http2Stream.end();
    }
  }
  tp.Http2SubchannelCall = ep;
});
var pp = (0, import_chunk_w1d7ygsk.V)(function(hp) {
  Object.defineProperty(hp, "__esModule", { value: true });
  hp.Http2SubchannelConnector = void 0;
  var $e = (0, import_chunk_w1d7ygsk.ft)("http2"), sp = (0, import_chunk_w1d7ygsk.ft)("tls"), ir = Zt(), At = x(), np = wo(), Ve = K(), ap = tt(), sr = Pe(), ti = we(), op = (0, import_chunk_w1d7ygsk.ft)("net"), lp = ip(), cp = Ys(), No = "transport", hR = "transport_flowctrl", fR = ia().version, { HTTP2_HEADER_AUTHORITY: pR, HTTP2_HEADER_CONTENT_TYPE: gR, HTTP2_HEADER_METHOD: mR, HTTP2_HEADER_PATH: vR, HTTP2_HEADER_TE: yR, HTTP2_HEADER_USER_AGENT: _R } = $e.constants, SR = 2e4, CR = Buffer.from("too_many_pings", "ascii");
  class up {
    constructor(e, t, r, i) {
      if (this.session = e, this.options = r, this.remoteName = i, this.keepaliveTimer = null, this.pendingSendKeepalivePing = false, this.activeCalls = /* @__PURE__ */ new Set(), this.disconnectListeners = [], this.disconnectHandled = false, this.channelzEnabled = true, this.keepalivesSent = 0, this.messagesSent = 0, this.messagesReceived = 0, this.lastMessageSentTimestamp = null, this.lastMessageReceivedTimestamp = null, this.subchannelAddressString = sr.subchannelAddressToString(t), r["grpc.enable_channelz"] === 0) this.channelzEnabled = false, this.streamTracker = new ir.ChannelzCallTrackerStub();
      else this.streamTracker = new ir.ChannelzCallTracker();
      if (this.channelzRef = ir.registerChannelzSocket(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled), this.userAgent = [r["grpc.primary_user_agent"], `grpc-node-js/${fR}`, r["grpc.secondary_user_agent"]].filter((s) => s).join(" "), "grpc.keepalive_time_ms" in r) this.keepaliveTimeMs = r["grpc.keepalive_time_ms"];
      else this.keepaliveTimeMs = -1;
      if ("grpc.keepalive_timeout_ms" in r) this.keepaliveTimeoutMs = r["grpc.keepalive_timeout_ms"];
      else this.keepaliveTimeoutMs = SR;
      if ("grpc.keepalive_permit_without_calls" in r) this.keepaliveWithoutCalls = r["grpc.keepalive_permit_without_calls"] === 1;
      else this.keepaliveWithoutCalls = false;
      if (e.once("close", () => {
        this.trace("session closed"), this.handleDisconnect();
      }), e.once("goaway", (s, n, a) => {
        let o = false;
        if (s === $e.constants.NGHTTP2_ENHANCE_YOUR_CALM && a && a.equals(CR)) o = true;
        this.trace("connection closed by GOAWAY with code " + s + " and data " + (a === null || a === void 0 ? void 0 : a.toString())), this.reportDisconnectToOwner(o);
      }), e.once("error", (s) => {
        this.trace("connection closed with error " + s.message), this.handleDisconnect();
      }), e.socket.once("close", (s) => {
        this.trace("connection closed. hadError=" + s), this.handleDisconnect();
      }), Ve.isTracerEnabled(No)) e.on("remoteSettings", (s) => {
        this.trace("new settings received" + (this.session !== e ? " on the old connection" : "") + ": " + JSON.stringify(s));
      }), e.on("localSettings", (s) => {
        this.trace("local settings acknowledged by remote" + (this.session !== e ? " on the old connection" : "") + ": " + JSON.stringify(s));
      });
      if (this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer();
      if (e.socket instanceof sp.TLSSocket) this.authContext = { transportSecurityType: "ssl", sslPeerCertificate: e.socket.getPeerCertificate() };
      else this.authContext = {};
    }
    getChannelzInfo() {
      var e, t, r;
      let i = this.session.socket, s = i.remoteAddress ? sr.stringToSubchannelAddress(i.remoteAddress, i.remotePort) : null, n = i.localAddress ? sr.stringToSubchannelAddress(i.localAddress, i.localPort) : null, a;
      if (this.session.encrypted) {
        let l = i, c = l.getCipher(), u = l.getCertificate(), d = l.getPeerCertificate();
        a = { cipherSuiteStandardName: (e = c.standardName) !== null && e !== void 0 ? e : null, cipherSuiteOtherName: c.standardName ? null : c.name, localCertificate: u && "raw" in u ? u.raw : null, remoteCertificate: d && "raw" in d ? d.raw : null };
      } else a = null;
      return { remoteAddress: s, localAddress: n, security: a, remoteName: this.remoteName, streamsStarted: this.streamTracker.callsStarted, streamsSucceeded: this.streamTracker.callsSucceeded, streamsFailed: this.streamTracker.callsFailed, messagesSent: this.messagesSent, messagesReceived: this.messagesReceived, keepAlivesSent: this.keepalivesSent, lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp, lastRemoteStreamCreatedTimestamp: null, lastMessageSentTimestamp: this.lastMessageSentTimestamp, lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp, localFlowControlWindow: (t = this.session.state.localWindowSize) !== null && t !== void 0 ? t : null, remoteFlowControlWindow: (r = this.session.state.remoteWindowSize) !== null && r !== void 0 ? r : null };
    }
    trace(e) {
      Ve.trace(At.LogVerbosity.DEBUG, No, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    keepaliveTrace(e) {
      Ve.trace(At.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    flowControlTrace(e) {
      Ve.trace(At.LogVerbosity.DEBUG, hR, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    internalsTrace(e) {
      Ve.trace(At.LogVerbosity.DEBUG, "transport_internals", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    reportDisconnectToOwner(e) {
      if (this.disconnectHandled) return;
      this.disconnectHandled = true, this.disconnectListeners.forEach((t) => t(e));
    }
    handleDisconnect() {
      this.clearKeepaliveTimeout(), this.reportDisconnectToOwner(false);
      for (let e of this.activeCalls) e.onDisconnect();
      setImmediate(() => {
        this.session.destroy();
      });
    }
    addDisconnectListener(e) {
      this.disconnectListeners.push(e);
    }
    canSendPing() {
      return !this.session.destroyed && this.keepaliveTimeMs > 0 && (this.keepaliveWithoutCalls || this.activeCalls.size > 0);
    }
    maybeSendPing() {
      var e, t;
      if (!this.canSendPing()) {
        this.pendingSendKeepalivePing = true;
        return;
      }
      if (this.keepaliveTimer) {
        console.error("keepaliveTimeout is not null");
        return;
      }
      if (this.channelzEnabled) this.keepalivesSent += 1;
      this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms"), this.keepaliveTimer = setTimeout(() => {
        this.keepaliveTimer = null, this.keepaliveTrace("Ping timeout passed without response"), this.handleDisconnect();
      }, this.keepaliveTimeoutMs), (t = (e = this.keepaliveTimer).unref) === null || t === void 0 || t.call(e);
      let r = "";
      try {
        if (!this.session.ping((s, n, a) => {
          if (this.clearKeepaliveTimeout(), s) this.keepaliveTrace("Ping failed with error " + s.message), this.handleDisconnect();
          else this.keepaliveTrace("Received ping response"), this.maybeStartKeepalivePingTimer();
        })) r = "Ping returned false";
      } catch (i) {
        r = (i instanceof Error ? i.message : "") || "Unknown error";
      }
      if (r) this.keepaliveTrace("Ping send failed: " + r), this.handleDisconnect();
    }
    maybeStartKeepalivePingTimer() {
      var e, t;
      if (!this.canSendPing()) return;
      if (this.pendingSendKeepalivePing) this.pendingSendKeepalivePing = false, this.maybeSendPing();
      else if (!this.keepaliveTimer) this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), this.keepaliveTimer = setTimeout(() => {
        this.keepaliveTimer = null, this.maybeSendPing();
      }, this.keepaliveTimeMs), (t = (e = this.keepaliveTimer).unref) === null || t === void 0 || t.call(e);
    }
    clearKeepaliveTimeout() {
      if (this.keepaliveTimer) clearTimeout(this.keepaliveTimer), this.keepaliveTimer = null;
    }
    removeActiveCall(e) {
      if (this.activeCalls.delete(e), this.activeCalls.size === 0) this.session.unref();
    }
    addActiveCall(e) {
      if (this.activeCalls.add(e), this.activeCalls.size === 1) {
        if (this.session.ref(), !this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer();
      }
    }
    createCall(e, t, r, i, s) {
      let n = e.toHttp2Headers();
      n[pR] = t, n[_R] = this.userAgent, n[gR] = "application/grpc", n[mR] = "POST", n[vR] = r, n[yR] = "trailers";
      let a;
      try {
        a = this.session.request(n);
      } catch (c) {
        throw this.handleDisconnect(), c;
      }
      this.flowControlTrace("local window size: " + this.session.state.localWindowSize + " remote window size: " + this.session.state.remoteWindowSize), this.internalsTrace("session.closed=" + this.session.closed + " session.destroyed=" + this.session.destroyed + " session.socket.destroyed=" + this.session.socket.destroyed);
      let o, l;
      if (this.channelzEnabled) this.streamTracker.addCallStarted(), o = { addMessageSent: () => {
        var c;
        this.messagesSent += 1, this.lastMessageSentTimestamp = /* @__PURE__ */ new Date(), (c = s.addMessageSent) === null || c === void 0 || c.call(s);
      }, addMessageReceived: () => {
        var c;
        this.messagesReceived += 1, this.lastMessageReceivedTimestamp = /* @__PURE__ */ new Date(), (c = s.addMessageReceived) === null || c === void 0 || c.call(s);
      }, onCallEnd: (c) => {
        var u;
        (u = s.onCallEnd) === null || u === void 0 || u.call(s, c), this.removeActiveCall(l);
      }, onStreamEnd: (c) => {
        var u;
        if (c) this.streamTracker.addCallSucceeded();
        else this.streamTracker.addCallFailed();
        (u = s.onStreamEnd) === null || u === void 0 || u.call(s, c);
      } };
      else o = { addMessageSent: () => {
        var c;
        (c = s.addMessageSent) === null || c === void 0 || c.call(s);
      }, addMessageReceived: () => {
        var c;
        (c = s.addMessageReceived) === null || c === void 0 || c.call(s);
      }, onCallEnd: (c) => {
        var u;
        (u = s.onCallEnd) === null || u === void 0 || u.call(s, c), this.removeActiveCall(l);
      }, onStreamEnd: (c) => {
        var u;
        (u = s.onStreamEnd) === null || u === void 0 || u.call(s, c);
      } };
      return l = new lp.Http2SubchannelCall(a, o, i, this, cp.getNextCallNumber()), this.addActiveCall(l), l;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    getPeerName() {
      return this.subchannelAddressString;
    }
    getOptions() {
      return this.options;
    }
    getAuthContext() {
      return this.authContext;
    }
    shutdown() {
      this.session.close(), ir.unregisterChannelzRef(this.channelzRef);
    }
  }
  class dp {
    constructor(e) {
      this.channelTarget = e, this.session = null, this.isShutdown = false;
    }
    trace(e) {
      Ve.trace(At.LogVerbosity.DEBUG, No, ti.uriToString(this.channelTarget) + " " + e);
    }
    createSession(e, t, r) {
      if (this.isShutdown) return Promise.reject();
      if (e.socket.closed) return Promise.reject("Connection closed before starting HTTP/2 handshake");
      return new Promise((i, s) => {
        var n, a, o, l, c, u, d, h;
        let m = null, f = this.channelTarget;
        if ("grpc.http_connect_target" in r) {
          let k = ti.parseUri(r["grpc.http_connect_target"]);
          if (k) f = k, m = ti.uriToString(k);
        }
        let y = e.secure ? "https" : "http", C = ap.getDefaultAuthority(f), E = () => {
          var k;
          (k = this.session) === null || k === void 0 || k.destroy(), this.session = null, setImmediate(() => {
            if (!X) X = true, s(`${H.trim()} (${(/* @__PURE__ */ new Date()).toISOString()})`);
          });
        }, A = (k) => {
          var le;
          if ((le = this.session) === null || le === void 0 || le.destroy(), H = k.message, this.trace("connection failed with error " + H), !X) X = true, s(`${H} (${(/* @__PURE__ */ new Date()).toISOString()})`);
        }, te = { createConnection: (k, le) => e.socket, settings: { initialWindowSize: (l = (n = r["grpc-node.flow_control_window"]) !== null && n !== void 0 ? n : (o = (a = $e.getDefaultSettings) === null || a === void 0 ? void 0 : a.call($e)) === null || o === void 0 ? void 0 : o.initialWindowSize) !== null && l !== void 0 ? l : 65535 }, maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER, maxSessionMemory: (c = r["grpc-node.max_session_memory"]) !== null && c !== void 0 ? c : Number.MAX_SAFE_INTEGER }, v = $e.connect(`${y}://${C}`, te), q = (h = (d = (u = $e.getDefaultSettings) === null || u === void 0 ? void 0 : u.call($e)) === null || d === void 0 ? void 0 : d.initialWindowSize) !== null && h !== void 0 ? h : 65535, O = r["grpc-node.flow_control_window"];
        this.session = v;
        let H = "Failed to connect", X = false;
        v.unref(), v.once("remoteSettings", () => {
          var k;
          if (O && O > q) try {
            v.setLocalWindowSize(O);
          } catch (le) {
            let qe = O - ((k = v.state.localWindowSize) !== null && k !== void 0 ? k : q);
            if (qe > 0) v.incrementWindowSize(qe);
          }
          v.removeAllListeners(), e.socket.removeListener("close", E), e.socket.removeListener("error", A), i(new up(v, t, r, m)), this.session = null;
        }), v.once("close", E), v.once("error", A), e.socket.once("close", E), e.socket.once("error", A);
      });
    }
    tcpConnect(e, t) {
      return np.getProxiedConnection(e, t).then((r) => {
        if (r) return r;
        else return new Promise((i, s) => {
          let n = () => {
            s(Error("Socket closed"));
          }, a = (l) => {
            s(l);
          }, o = op.connect(e, () => {
            o.removeListener("close", n), o.removeListener("error", a), i(o);
          });
          o.once("close", n), o.once("error", a);
        });
      });
    }
    async connect(e, t, r) {
      if (this.isShutdown) return Promise.reject();
      let i = null, s = null, n = sr.subchannelAddressToString(e);
      try {
        return this.trace(n + " Waiting for secureConnector to be ready"), await t.waitForReady(), this.trace(n + " secureConnector is ready"), i = await this.tcpConnect(e, r), i.setNoDelay(), this.trace(n + " Established TCP connection"), s = await t.connect(i), this.trace(n + " Established secure connection"), this.createSession(s, e, r);
      } catch (a) {
        throw i === null || i === void 0 || i.destroy(), s === null || s === void 0 || s.socket.destroy(), a;
      }
    }
    shutdown() {
      var e;
      this.isShutdown = true, (e = this.session) === null || e === void 0 || e.close(), this.session = null;
    }
  }
  hp.Http2SubchannelConnector = dp;
});
var Ep = (0, import_chunk_w1d7ygsk.V)(function(Sp) {
  Object.defineProperty(Sp, "__esModule", { value: true });
  Sp.SubchannelPool = void 0;
  Sp.getSubchannelPool = RR;
  var gp = Fc(), mp = Pf(), vp = Pe(), yp = we(), _p = pp(), ER = 1e4;
  class sn {
    constructor() {
      this.pool = /* @__PURE__ */ Object.create(null), this.cleanupTimer = null;
    }
    unrefUnusedSubchannels() {
      let e = true;
      for (let t in this.pool) {
        let i = this.pool[t].filter((s) => !s.subchannel.unrefIfOneRef());
        if (i.length > 0) e = false;
        this.pool[t] = i;
      }
      if (e && this.cleanupTimer !== null) clearInterval(this.cleanupTimer), this.cleanupTimer = null;
    }
    ensureCleanupTask() {
      var e, t;
      if (this.cleanupTimer === null) this.cleanupTimer = setInterval(() => {
        this.unrefUnusedSubchannels();
      }, ER), (t = (e = this.cleanupTimer).unref) === null || t === void 0 || t.call(e);
    }
    getOrCreateSubchannel(e, t, r, i) {
      this.ensureCleanupTask();
      let s = yp.uriToString(e);
      if (s in this.pool) {
        let a = this.pool[s];
        for (let o of a) if (vp.subchannelAddressEqual(t, o.subchannelAddress) && gp.channelOptionsEqual(r, o.channelArguments) && i._equals(o.channelCredentials)) return o.subchannel;
      }
      let n = new mp.Subchannel(e, t, r, i, new _p.Http2SubchannelConnector(e));
      if (!(s in this.pool)) this.pool[s] = [];
      return this.pool[s].push({ subchannelAddress: t, channelArguments: r, channelCredentials: i, subchannel: n }), n.ref(), n;
    }
  }
  Sp.SubchannelPool = sn;
  var TR = new sn();
  function RR(e) {
    if (e) return TR;
    else return new sn();
  }
});
var Pp = (0, import_chunk_w1d7ygsk.V)(function(wp) {
  Object.defineProperty(wp, "__esModule", { value: true });
  wp.LoadBalancingCall = void 0;
  var nn = Ae(), nr = x(), an = Kr(), ar = ue(), Pt = kt(), Tp = we(), Rp = K(), ri = Ui(), bp = (0, import_chunk_w1d7ygsk.ft)("http2"), OR = "load_balancing_call";
  class Op {
    constructor(e, t, r, i, s, n, a) {
      var o, l;
      this.channel = e, this.callConfig = t, this.methodName = r, this.host = i, this.credentials = s, this.deadline = n, this.callNumber = a, this.child = null, this.readPending = false, this.pendingMessage = null, this.pendingHalfClose = false, this.ended = false, this.metadata = null, this.listener = null, this.onCallEnded = null, this.childStartTime = null;
      let c = this.methodName.split("/"), u = "";
      if (c.length >= 2) u = c[1];
      let d = (l = (o = Tp.splitHostPort(this.host)) === null || o === void 0 ? void 0 : o.host) !== null && l !== void 0 ? l : "localhost";
      this.serviceUrl = `https://${d}/${u}`, this.startTime = /* @__PURE__ */ new Date();
    }
    getDeadlineInfo() {
      var e, t;
      let r = [];
      if (this.childStartTime) {
        if (this.childStartTime > this.startTime) {
          if ((e = this.metadata) === null || e === void 0 ? void 0 : e.getOptions().waitForReady) r.push("wait_for_ready");
          r.push(`LB pick: ${an.formatDateDifference(this.startTime, this.childStartTime)}`);
        }
        return r.push(...this.child.getDeadlineInfo()), r;
      } else {
        if ((t = this.metadata) === null || t === void 0 ? void 0 : t.getOptions().waitForReady) r.push("wait_for_ready");
        r.push("Waiting for LB pick");
      }
      return r;
    }
    trace(e) {
      Rp.trace(nr.LogVerbosity.DEBUG, OR, "[" + this.callNumber + "] " + e);
    }
    outputStatus(e, t) {
      var r, i;
      if (!this.ended) {
        this.ended = true, this.trace("ended with status: code=" + e.code + ' details="' + e.details + '" start time=' + this.startTime.toISOString());
        let s = Object.assign(Object.assign({}, e), { progress: t });
        (r = this.listener) === null || r === void 0 || r.onReceiveStatus(s), (i = this.onCallEnded) === null || i === void 0 || i.call(this, s.code, s.details, s.metadata);
      }
    }
    doPick() {
      var e, t;
      if (this.ended) return;
      if (!this.metadata) throw Error("doPick called before start");
      this.trace("Pick called");
      let r = this.metadata.clone(), i = this.channel.doPick(r, this.callConfig.pickInformation), s = i.subchannel ? "(" + i.subchannel.getChannelzRef().id + ") " + i.subchannel.getAddress() : "" + i.subchannel;
      switch (this.trace("Pick result: " + Pt.PickResultType[i.pickResultType] + " subchannel: " + s + " status: " + ((e = i.status) === null || e === void 0 ? void 0 : e.code) + " " + ((t = i.status) === null || t === void 0 ? void 0 : t.details)), i.pickResultType) {
        case Pt.PickResultType.COMPLETE:
          this.credentials.compose(i.subchannel.getCallCredentials()).generateMetadata({ method_name: this.methodName, service_url: this.serviceUrl }).then((l) => {
            var c;
            if (this.ended) {
              this.trace("Credentials metadata generation finished after call ended");
              return;
            }
            if (r.merge(l), r.get("authorization").length > 1) this.outputStatus({ code: nr.Status.INTERNAL, details: '"authorization" metadata cannot have multiple values', metadata: new ar.Metadata() }, "PROCESSED");
            if (i.subchannel.getConnectivityState() !== nn.ConnectivityState.READY) {
              this.trace("Picked subchannel " + s + " has state " + nn.ConnectivityState[i.subchannel.getConnectivityState()] + " after getting credentials metadata. Retrying pick"), this.doPick();
              return;
            }
            if (this.deadline !== 1 / 0) r.set("grpc-timeout", an.getDeadlineTimeoutString(this.deadline));
            try {
              this.child = i.subchannel.getRealSubchannel().createCall(r, this.host, this.methodName, { onReceiveMetadata: (u) => {
                this.trace("Received metadata"), this.listener.onReceiveMetadata(u);
              }, onReceiveMessage: (u) => {
                this.trace("Received message"), this.listener.onReceiveMessage(u);
              }, onReceiveStatus: (u) => {
                if (this.trace("Received status"), u.rstCode === bp.constants.NGHTTP2_REFUSED_STREAM) this.outputStatus(u, "REFUSED");
                else this.outputStatus(u, "PROCESSED");
              } }), this.childStartTime = /* @__PURE__ */ new Date();
            } catch (u) {
              this.trace("Failed to start call on picked subchannel " + s + " with error " + u.message), this.outputStatus({ code: nr.Status.INTERNAL, details: "Failed to start HTTP/2 stream with error " + u.message, metadata: new ar.Metadata() }, "NOT_STARTED");
              return;
            }
            if ((c = i.onCallStarted) === null || c === void 0 || c.call(i), this.onCallEnded = i.onCallEnded, this.trace("Created child call [" + this.child.getCallNumber() + "]"), this.readPending) this.child.startRead();
            if (this.pendingMessage) this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
            if (this.pendingHalfClose) this.child.halfClose();
          }, (l) => {
            let { code: c, details: u } = ri.restrictControlPlaneStatusCode(typeof l.code === "number" ? l.code : nr.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${l.message}`);
            this.outputStatus({ code: c, details: u, metadata: new ar.Metadata() }, "PROCESSED");
          });
          break;
        case Pt.PickResultType.DROP:
          let { code: a, details: o } = ri.restrictControlPlaneStatusCode(i.status.code, i.status.details);
          setImmediate(() => {
            this.outputStatus({ code: a, details: o, metadata: i.status.metadata }, "DROP");
          });
          break;
        case Pt.PickResultType.TRANSIENT_FAILURE:
          if (this.metadata.getOptions().waitForReady) this.channel.queueCallForPick(this);
          else {
            let { code: l, details: c } = ri.restrictControlPlaneStatusCode(i.status.code, i.status.details);
            setImmediate(() => {
              this.outputStatus({ code: l, details: c, metadata: i.status.metadata }, "PROCESSED");
            });
          }
          break;
        case Pt.PickResultType.QUEUE:
          this.channel.queueCallForPick(this);
      }
    }
    cancelWithStatus(e, t) {
      var r;
      this.trace("cancelWithStatus code: " + e + ' details: "' + t + '"'), (r = this.child) === null || r === void 0 || r.cancelWithStatus(e, t), this.outputStatus({ code: e, details: t, metadata: new ar.Metadata() }, "PROCESSED");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.child) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : this.channel.getTarget();
    }
    start(e, t) {
      this.trace("start called"), this.listener = t, this.metadata = e, this.doPick();
    }
    sendMessageWithContext(e, t) {
      if (this.trace("write() called with message of length " + t.length), this.child) this.child.sendMessageWithContext(e, t);
      else this.pendingMessage = { context: e, message: t };
    }
    startRead() {
      if (this.trace("startRead called"), this.child) this.child.startRead();
      else this.readPending = true;
    }
    halfClose() {
      if (this.trace("halfClose called"), this.child) this.child.halfClose();
      else this.pendingHalfClose = true;
    }
    setCredentials(e) {
      throw Error("Method not implemented.");
    }
    getCallNumber() {
      return this.callNumber;
    }
    getAuthContext() {
      if (this.child) return this.child.getAuthContext();
      else return null;
    }
  }
  wp.LoadBalancingCall = Op;
});
var Lp = (0, import_chunk_w1d7ygsk.V)(function(kp) {
  Object.defineProperty(kp, "__esModule", { value: true });
  kp.ResolvingCall = void 0;
  var Np = rs(), Ie = x(), xe = Kr(), on = ue(), Mp = K(), Ip = Ui(), wR = "resolving_call";
  class xp {
    constructor(e, t, r, i, s) {
      if (this.channel = e, this.method = t, this.filterStackFactory = i, this.callNumber = s, this.child = null, this.readPending = false, this.pendingMessage = null, this.pendingHalfClose = false, this.ended = false, this.readFilterPending = false, this.writeFilterPending = false, this.pendingChildStatus = null, this.metadata = null, this.listener = null, this.statusWatchers = [], this.deadlineTimer = setTimeout(() => {
      }, 0), this.filterStack = null, this.deadlineStartTime = null, this.configReceivedTime = null, this.childStartTime = null, this.credentials = Np.CallCredentials.createEmpty(), this.deadline = r.deadline, this.host = r.host, r.parentCall) {
        if (r.flags & Ie.Propagate.CANCELLATION) r.parentCall.on("cancelled", () => {
          this.cancelWithStatus(Ie.Status.CANCELLED, "Cancelled by parent call");
        });
        if (r.flags & Ie.Propagate.DEADLINE) this.trace("Propagating deadline from parent: " + r.parentCall.getDeadline()), this.deadline = xe.minDeadline(this.deadline, r.parentCall.getDeadline());
      }
      this.trace("Created"), this.runDeadlineTimer();
    }
    trace(e) {
      Mp.trace(Ie.LogVerbosity.DEBUG, wR, "[" + this.callNumber + "] " + e);
    }
    runDeadlineTimer() {
      clearTimeout(this.deadlineTimer), this.deadlineStartTime = /* @__PURE__ */ new Date(), this.trace("Deadline: " + xe.deadlineToString(this.deadline));
      let e = xe.getRelativeTimeout(this.deadline);
      if (e !== 1 / 0) {
        this.trace("Deadline will be reached in " + e + "ms");
        let t = () => {
          if (!this.deadlineStartTime) {
            this.cancelWithStatus(Ie.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
            return;
          }
          let r = [], i = /* @__PURE__ */ new Date();
          if (r.push(`Deadline exceeded after ${xe.formatDateDifference(this.deadlineStartTime, i)}`), this.configReceivedTime) {
            if (this.configReceivedTime > this.deadlineStartTime) r.push(`name resolution: ${xe.formatDateDifference(this.deadlineStartTime, this.configReceivedTime)}`);
            if (this.childStartTime) {
              if (this.childStartTime > this.configReceivedTime) r.push(`metadata filters: ${xe.formatDateDifference(this.configReceivedTime, this.childStartTime)}`);
            } else r.push("waiting for metadata filters");
          } else r.push("waiting for name resolution");
          if (this.child) r.push(...this.child.getDeadlineInfo());
          this.cancelWithStatus(Ie.Status.DEADLINE_EXCEEDED, r.join(","));
        };
        if (e <= 0) process.nextTick(t);
        else this.deadlineTimer = setTimeout(t, e);
      }
    }
    outputStatus(e) {
      if (!this.ended) {
        if (this.ended = true, !this.filterStack) this.filterStack = this.filterStackFactory.createFilter();
        clearTimeout(this.deadlineTimer);
        let t = this.filterStack.receiveTrailers(e);
        this.trace("ended with status: code=" + t.code + ' details="' + t.details + '"'), this.statusWatchers.forEach((r) => r(t)), process.nextTick(() => {
          var r;
          (r = this.listener) === null || r === void 0 || r.onReceiveStatus(t);
        });
      }
    }
    sendMessageOnChild(e, t) {
      if (!this.child) throw Error("sendMessageonChild called with child not populated");
      let r = this.child;
      this.writeFilterPending = true, this.filterStack.sendMessage(Promise.resolve({ message: t, flags: e.flags })).then((i) => {
        if (this.writeFilterPending = false, r.sendMessageWithContext(e, i.message), this.pendingHalfClose) r.halfClose();
      }, (i) => {
        this.cancelWithStatus(i.code, i.details);
      });
    }
    getConfig() {
      if (this.ended) return;
      if (!this.metadata || !this.listener) throw Error("getConfig called before start");
      let e = this.channel.getConfig(this.method, this.metadata);
      if (e.type === "NONE") {
        this.channel.queueCallForConfig(this);
        return;
      } else if (e.type === "ERROR") {
        if (this.metadata.getOptions().waitForReady) this.channel.queueCallForConfig(this);
        else this.outputStatus(e.error);
        return;
      }
      this.configReceivedTime = /* @__PURE__ */ new Date();
      let t = e.config;
      if (t.status !== Ie.Status.OK) {
        let { code: r, details: i } = Ip.restrictControlPlaneStatusCode(t.status, "Failed to route call to method " + this.method);
        this.outputStatus({ code: r, details: i, metadata: new on.Metadata() });
        return;
      }
      if (t.methodConfig.timeout) {
        let r = /* @__PURE__ */ new Date();
        r.setSeconds(r.getSeconds() + t.methodConfig.timeout.seconds), r.setMilliseconds(r.getMilliseconds() + t.methodConfig.timeout.nanos / 1e6), this.deadline = xe.minDeadline(this.deadline, r), this.runDeadlineTimer();
      }
      this.filterStackFactory.push(t.dynamicFilterFactories), this.filterStack = this.filterStackFactory.createFilter(), this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then((r) => {
        if (this.child = this.channel.createRetryingCall(t, this.method, this.host, this.credentials, this.deadline), this.trace("Created child [" + this.child.getCallNumber() + "]"), this.childStartTime = /* @__PURE__ */ new Date(), this.child.start(r, { onReceiveMetadata: (i) => {
          this.trace("Received metadata"), this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(i));
        }, onReceiveMessage: (i) => {
          this.trace("Received message"), this.readFilterPending = true, this.filterStack.receiveMessage(i).then((s) => {
            if (this.trace("Finished filtering received message"), this.readFilterPending = false, this.listener.onReceiveMessage(s), this.pendingChildStatus) this.outputStatus(this.pendingChildStatus);
          }, (s) => {
            this.cancelWithStatus(s.code, s.details);
          });
        }, onReceiveStatus: (i) => {
          if (this.trace("Received status"), this.readFilterPending) this.pendingChildStatus = i;
          else this.outputStatus(i);
        } }), this.readPending) this.child.startRead();
        if (this.pendingMessage) this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message);
        else if (this.pendingHalfClose) this.child.halfClose();
      }, (r) => {
        this.outputStatus(r);
      });
    }
    reportResolverError(e) {
      var t;
      if ((t = this.metadata) === null || t === void 0 ? void 0 : t.getOptions().waitForReady) this.channel.queueCallForConfig(this);
      else this.outputStatus(e);
    }
    cancelWithStatus(e, t) {
      var r;
      this.trace("cancelWithStatus code: " + e + ' details: "' + t + '"'), (r = this.child) === null || r === void 0 || r.cancelWithStatus(e, t), this.outputStatus({ code: e, details: t, metadata: new on.Metadata() });
    }
    getPeer() {
      var e, t;
      return (t = (e = this.child) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : this.channel.getTarget();
    }
    start(e, t) {
      this.trace("start called"), this.metadata = e.clone(), this.listener = t, this.getConfig();
    }
    sendMessageWithContext(e, t) {
      if (this.trace("write() called with message of length " + t.length), this.child) this.sendMessageOnChild(e, t);
      else this.pendingMessage = { context: e, message: t };
    }
    startRead() {
      if (this.trace("startRead called"), this.child) this.child.startRead();
      else this.readPending = true;
    }
    halfClose() {
      if (this.trace("halfClose called"), this.child && !this.writeFilterPending) this.child.halfClose();
      else this.pendingHalfClose = true;
    }
    setCredentials(e) {
      this.credentials = e;
    }
    addStatusWatcher(e) {
      this.statusWatchers.push(e);
    }
    getCallNumber() {
      return this.callNumber;
    }
    getAuthContext() {
      if (this.child) return this.child.getAuthContext();
      else return null;
    }
  }
  kp.ResolvingCall = xp;
});
var Gp = (0, import_chunk_w1d7ygsk.V)(function(Wp) {
  Object.defineProperty(Wp, "__esModule", { value: true });
  Wp.RetryingCall = Wp.MessageBufferTracker = Wp.RetryThrottler = void 0;
  var or = x(), Fp = Kr(), qp = ue(), Up = K(), AR = "retrying_call";
  class Bp {
    constructor(e, t, r) {
      if (this.maxTokens = e, this.tokenRatio = t, r) this.tokens = r.tokens * (e / r.maxTokens);
      else this.tokens = e;
    }
    addCallSucceeded() {
      this.tokens = Math.min(this.tokens + this.tokenRatio, this.maxTokens);
    }
    addCallFailed() {
      this.tokens = Math.max(this.tokens - 1, 0);
    }
    canRetryCall() {
      return this.tokens > this.maxTokens / 2;
    }
  }
  Wp.RetryThrottler = Bp;
  class zp {
    constructor(e, t) {
      this.totalLimit = e, this.limitPerCall = t, this.totalAllocated = 0, this.allocatedPerCall = /* @__PURE__ */ new Map();
    }
    allocate(e, t) {
      var r;
      let i = (r = this.allocatedPerCall.get(t)) !== null && r !== void 0 ? r : 0;
      if (this.limitPerCall - i < e || this.totalLimit - this.totalAllocated < e) return false;
      return this.allocatedPerCall.set(t, i + e), this.totalAllocated += e, true;
    }
    free(e, t) {
      var r;
      if (this.totalAllocated < e) throw Error(`Invalid buffer allocation state: call ${t} freed ${e} > total allocated ${this.totalAllocated}`);
      this.totalAllocated -= e;
      let i = (r = this.allocatedPerCall.get(t)) !== null && r !== void 0 ? r : 0;
      if (i < e) throw Error(`Invalid buffer allocation state: call ${t} freed ${e} > allocated for call ${i}`);
      this.allocatedPerCall.set(t, i - e);
    }
    freeAll(e) {
      var t;
      let r = (t = this.allocatedPerCall.get(e)) !== null && t !== void 0 ? t : 0;
      if (this.totalAllocated < r) throw Error(`Invalid buffer allocation state: call ${e} allocated ${r} > total allocated ${this.totalAllocated}`);
      this.totalAllocated -= r, this.allocatedPerCall.delete(e);
    }
  }
  Wp.MessageBufferTracker = zp;
  var Mo = "grpc-previous-rpc-attempts", PR = 5;
  class Hp {
    constructor(e, t, r, i, s, n, a, o, l) {
      var c;
      this.channel = e, this.callConfig = t, this.methodName = r, this.host = i, this.credentials = s, this.deadline = n, this.callNumber = a, this.bufferTracker = o, this.retryThrottler = l, this.listener = null, this.initialMetadata = null, this.underlyingCalls = [], this.writeBuffer = [], this.writeBufferOffset = 0, this.readStarted = false, this.transparentRetryUsed = false, this.attempts = 0, this.hedgingTimer = null, this.committedCallIndex = null, this.initialRetryBackoffSec = 0, this.nextRetryBackoffSec = 0;
      let u = (c = e.getOptions()["grpc-node.retry_max_attempts_limit"]) !== null && c !== void 0 ? c : PR;
      if (e.getOptions()["grpc.enable_retries"] === 0) this.state = "NO_RETRY", this.maxAttempts = 1;
      else if (t.methodConfig.retryPolicy) {
        this.state = "RETRY";
        let d = t.methodConfig.retryPolicy;
        this.nextRetryBackoffSec = this.initialRetryBackoffSec = Number(d.initialBackoff.substring(0, d.initialBackoff.length - 1)), this.maxAttempts = Math.min(d.maxAttempts, u);
      } else if (t.methodConfig.hedgingPolicy) this.state = "HEDGING", this.maxAttempts = Math.min(t.methodConfig.hedgingPolicy.maxAttempts, u);
      else this.state = "TRANSPARENT_ONLY", this.maxAttempts = 1;
      this.startTime = /* @__PURE__ */ new Date();
    }
    getDeadlineInfo() {
      if (this.underlyingCalls.length === 0) return [];
      let e = [], t = this.underlyingCalls[this.underlyingCalls.length - 1];
      if (this.underlyingCalls.length > 1) e.push(`previous attempts: ${this.underlyingCalls.length - 1}`);
      if (t.startTime > this.startTime) e.push(`time to current attempt start: ${Fp.formatDateDifference(this.startTime, t.startTime)}`);
      return e.push(...t.call.getDeadlineInfo()), e;
    }
    getCallNumber() {
      return this.callNumber;
    }
    trace(e) {
      Up.trace(or.LogVerbosity.DEBUG, AR, "[" + this.callNumber + "] " + e);
    }
    reportStatus(e) {
      this.trace("ended with status: code=" + e.code + ' details="' + e.details + '" start time=' + this.startTime.toISOString()), this.bufferTracker.freeAll(this.callNumber), this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length, this.writeBuffer = [], process.nextTick(() => {
        var t;
        (t = this.listener) === null || t === void 0 || t.onReceiveStatus({ code: e.code, details: e.details, metadata: e.metadata });
      });
    }
    cancelWithStatus(e, t) {
      this.trace("cancelWithStatus code: " + e + ' details: "' + t + '"'), this.reportStatus({ code: e, details: t, metadata: new qp.Metadata() });
      for (let { call: r } of this.underlyingCalls) r.cancelWithStatus(e, t);
    }
    getPeer() {
      if (this.committedCallIndex !== null) return this.underlyingCalls[this.committedCallIndex].call.getPeer();
      else return "unknown";
    }
    getBufferEntry(e) {
      var t;
      return (t = this.writeBuffer[e - this.writeBufferOffset]) !== null && t !== void 0 ? t : { entryType: "FREED", allocated: false };
    }
    getNextBufferIndex() {
      return this.writeBufferOffset + this.writeBuffer.length;
    }
    clearSentMessages() {
      if (this.state !== "COMMITTED") return;
      let e;
      if (this.underlyingCalls[this.committedCallIndex].state === "COMPLETED") e = this.getNextBufferIndex();
      else e = this.underlyingCalls[this.committedCallIndex].nextMessageToSend;
      for (let t = this.writeBufferOffset; t < e; t++) {
        let r = this.getBufferEntry(t);
        if (r.allocated) this.bufferTracker.free(r.message.message.length, this.callNumber);
      }
      this.writeBuffer = this.writeBuffer.slice(e - this.writeBufferOffset), this.writeBufferOffset = e;
    }
    commitCall(e) {
      var t, r;
      if (this.state === "COMMITTED") return;
      this.trace("Committing call [" + this.underlyingCalls[e].call.getCallNumber() + "] at index " + e), this.state = "COMMITTED", (r = (t = this.callConfig).onCommitted) === null || r === void 0 || r.call(t), this.committedCallIndex = e;
      for (let i = 0; i < this.underlyingCalls.length; i++) {
        if (i === e) continue;
        if (this.underlyingCalls[i].state === "COMPLETED") continue;
        this.underlyingCalls[i].state = "COMPLETED", this.underlyingCalls[i].call.cancelWithStatus(or.Status.CANCELLED, "Discarded in favor of other hedged attempt");
      }
      this.clearSentMessages();
    }
    commitCallWithMostMessages() {
      if (this.state === "COMMITTED") return;
      let e = -1, t = -1;
      for (let [r, i] of this.underlyingCalls.entries()) if (i.state === "ACTIVE" && i.nextMessageToSend > e) e = i.nextMessageToSend, t = r;
      if (t === -1) this.state = "TRANSPARENT_ONLY";
      else this.commitCall(t);
    }
    isStatusCodeInList(e, t) {
      return e.some((r) => {
        var i;
        return r === t || r.toString().toLowerCase() === ((i = or.Status[t]) === null || i === void 0 ? void 0 : i.toLowerCase());
      });
    }
    getNextRetryJitter() {
      return Math.random() * 0.3999999999999999 + 0.8;
    }
    getNextRetryBackoffMs() {
      var e;
      let t = (e = this.callConfig) === null || e === void 0 ? void 0 : e.methodConfig.retryPolicy;
      if (!t) return 0;
      let i = this.getNextRetryJitter() * this.nextRetryBackoffSec * 1e3, s = Number(t.maxBackoff.substring(0, t.maxBackoff.length - 1));
      return this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * t.backoffMultiplier, s), i;
    }
    maybeRetryCall(e, t) {
      if (this.state !== "RETRY") {
        t(false);
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        t(false);
        return;
      }
      let r;
      if (e === null) r = this.getNextRetryBackoffMs();
      else if (e < 0) {
        this.state = "TRANSPARENT_ONLY", t(false);
        return;
      } else r = e, this.nextRetryBackoffSec = this.initialRetryBackoffSec;
      setTimeout(() => {
        var i, s;
        if (this.state !== "RETRY") {
          t(false);
          return;
        }
        if ((s = (i = this.retryThrottler) === null || i === void 0 ? void 0 : i.canRetryCall()) !== null && s !== void 0 ? s : true) t(true), this.attempts += 1, this.startNewAttempt();
        else this.trace("Retry attempt denied by throttling policy"), t(false);
      }, r);
    }
    countActiveCalls() {
      let e = 0;
      for (let t of this.underlyingCalls) if ((t === null || t === void 0 ? void 0 : t.state) === "ACTIVE") e += 1;
      return e;
    }
    handleProcessedStatus(e, t, r) {
      var i, s, n;
      switch (this.state) {
        case "COMMITTED":
        case "NO_RETRY":
        case "TRANSPARENT_ONLY":
          this.commitCall(t), this.reportStatus(e);
          break;
        case "HEDGING":
          if (this.isStatusCodeInList((i = this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes) !== null && i !== void 0 ? i : [], e.code)) {
            (s = this.retryThrottler) === null || s === void 0 || s.addCallFailed();
            let a;
            if (r === null) a = 0;
            else if (r < 0) {
              this.state = "TRANSPARENT_ONLY", this.commitCall(t), this.reportStatus(e);
              return;
            } else a = r;
            setTimeout(() => {
              if (this.maybeStartHedgingAttempt(), this.countActiveCalls() === 0) this.commitCall(t), this.reportStatus(e);
            }, a);
          } else this.commitCall(t), this.reportStatus(e);
          break;
        case "RETRY":
          if (this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, e.code)) (n = this.retryThrottler) === null || n === void 0 || n.addCallFailed(), this.maybeRetryCall(r, (a) => {
            if (!a) this.commitCall(t), this.reportStatus(e);
          });
          else this.commitCall(t), this.reportStatus(e);
          break;
      }
    }
    getPushback(e) {
      let t = e.get("grpc-retry-pushback-ms");
      if (t.length === 0) return null;
      try {
        return parseInt(t[0]);
      } catch (r) {
        return -1;
      }
    }
    handleChildStatus(e, t) {
      var r;
      if (this.underlyingCalls[t].state === "COMPLETED") return;
      if (this.trace("state=" + this.state + " handling status with progress " + e.progress + " from child [" + this.underlyingCalls[t].call.getCallNumber() + "] in state " + this.underlyingCalls[t].state), this.underlyingCalls[t].state = "COMPLETED", e.code === or.Status.OK) {
        (r = this.retryThrottler) === null || r === void 0 || r.addCallSucceeded(), this.commitCall(t), this.reportStatus(e);
        return;
      }
      if (this.state === "NO_RETRY") {
        this.commitCall(t), this.reportStatus(e);
        return;
      }
      if (this.state === "COMMITTED") {
        this.reportStatus(e);
        return;
      }
      let i = this.getPushback(e.metadata);
      switch (e.progress) {
        case "NOT_STARTED":
          this.startNewAttempt();
          break;
        case "REFUSED":
          if (this.transparentRetryUsed) this.handleProcessedStatus(e, t, i);
          else this.transparentRetryUsed = true, this.startNewAttempt();
          break;
        case "DROP":
          this.commitCall(t), this.reportStatus(e);
          break;
        case "PROCESSED":
          this.handleProcessedStatus(e, t, i);
          break;
      }
    }
    maybeStartHedgingAttempt() {
      if (this.state !== "HEDGING") return;
      if (!this.callConfig.methodConfig.hedgingPolicy) return;
      if (this.attempts >= this.maxAttempts) return;
      this.attempts += 1, this.startNewAttempt(), this.maybeStartHedgingTimer();
    }
    maybeStartHedgingTimer() {
      var e, t, r;
      if (this.hedgingTimer) clearTimeout(this.hedgingTimer);
      if (this.state !== "HEDGING") return;
      if (!this.callConfig.methodConfig.hedgingPolicy) return;
      let i = this.callConfig.methodConfig.hedgingPolicy;
      if (this.attempts >= this.maxAttempts) return;
      let s = (e = i.hedgingDelay) !== null && e !== void 0 ? e : "0s", n = Number(s.substring(0, s.length - 1));
      this.hedgingTimer = setTimeout(() => {
        this.maybeStartHedgingAttempt();
      }, n * 1e3), (r = (t = this.hedgingTimer).unref) === null || r === void 0 || r.call(t);
    }
    startNewAttempt() {
      let e = this.channel.createLoadBalancingCall(this.callConfig, this.methodName, this.host, this.credentials, this.deadline);
      this.trace("Created child call [" + e.getCallNumber() + "] for attempt " + this.attempts);
      let t = this.underlyingCalls.length;
      this.underlyingCalls.push({ state: "ACTIVE", call: e, nextMessageToSend: 0, startTime: /* @__PURE__ */ new Date() });
      let r = this.attempts - 1, i = this.initialMetadata.clone();
      if (r > 0) i.set(Mo, `${r}`);
      let s = false;
      if (e.start(i, { onReceiveMetadata: (n) => {
        if (this.trace("Received metadata from child [" + e.getCallNumber() + "]"), this.commitCall(t), s = true, r > 0) n.set(Mo, `${r}`);
        if (this.underlyingCalls[t].state === "ACTIVE") this.listener.onReceiveMetadata(n);
      }, onReceiveMessage: (n) => {
        if (this.trace("Received message from child [" + e.getCallNumber() + "]"), this.commitCall(t), this.underlyingCalls[t].state === "ACTIVE") this.listener.onReceiveMessage(n);
      }, onReceiveStatus: (n) => {
        if (this.trace("Received status from child [" + e.getCallNumber() + "]"), !s && r > 0) n.metadata.set(Mo, `${r}`);
        this.handleChildStatus(n, t);
      } }), this.sendNextChildMessage(t), this.readStarted) e.startRead();
    }
    start(e, t) {
      this.trace("start called"), this.listener = t, this.initialMetadata = e, this.attempts += 1, this.startNewAttempt(), this.maybeStartHedgingTimer();
    }
    handleChildWriteCompleted(e, t) {
      var r, i;
      (i = (r = this.getBufferEntry(t)).callback) === null || i === void 0 || i.call(r), this.clearSentMessages();
      let s = this.underlyingCalls[e];
      s.nextMessageToSend += 1, this.sendNextChildMessage(e);
    }
    sendNextChildMessage(e) {
      let t = this.underlyingCalls[e];
      if (t.state === "COMPLETED") return;
      let r = t.nextMessageToSend;
      if (this.getBufferEntry(r)) {
        let i = this.getBufferEntry(r);
        switch (i.entryType) {
          case "MESSAGE":
            if (t.call.sendMessageWithContext({ callback: (n) => {
              this.handleChildWriteCompleted(e, r);
            } }, i.message.message), this.getBufferEntry(r + 1).entryType === "HALF_CLOSE") this.trace("Sending halfClose immediately after message to child [" + t.call.getCallNumber() + "] - optimizing for unary/final message"), t.nextMessageToSend += 1, t.call.halfClose();
            break;
          case "HALF_CLOSE":
            t.nextMessageToSend += 1, t.call.halfClose();
            break;
          case "FREED":
            break;
        }
      }
    }
    sendMessageWithContext(e, t) {
      this.trace("write() called with message of length " + t.length);
      let r = { message: t, flags: e.flags }, i = this.getNextBufferIndex(), s = { entryType: "MESSAGE", message: r, allocated: this.bufferTracker.allocate(t.length, this.callNumber) };
      if (this.writeBuffer.push(s), s.allocated) {
        process.nextTick(() => {
          var n;
          (n = e.callback) === null || n === void 0 || n.call(e);
        });
        for (let [n, a] of this.underlyingCalls.entries()) if (a.state === "ACTIVE" && a.nextMessageToSend === i) a.call.sendMessageWithContext({ callback: (o) => {
          this.handleChildWriteCompleted(n, i);
        } }, t);
      } else {
        if (this.commitCallWithMostMessages(), this.committedCallIndex === null) return;
        let n = this.underlyingCalls[this.committedCallIndex];
        if (s.callback = e.callback, n.state === "ACTIVE" && n.nextMessageToSend === i) n.call.sendMessageWithContext({ callback: (a) => {
          this.handleChildWriteCompleted(this.committedCallIndex, i);
        } }, t);
      }
    }
    startRead() {
      this.trace("startRead called"), this.readStarted = true;
      for (let e of this.underlyingCalls) if ((e === null || e === void 0 ? void 0 : e.state) === "ACTIVE") e.call.startRead();
    }
    halfClose() {
      this.trace("halfClose called");
      let e = this.getNextBufferIndex();
      this.writeBuffer.push({ entryType: "HALF_CLOSE", allocated: false });
      for (let t of this.underlyingCalls) if ((t === null || t === void 0 ? void 0 : t.state) === "ACTIVE") {
        if (t.nextMessageToSend === e || t.nextMessageToSend === e - 1) this.trace("Sending halfClose immediately to child [" + t.call.getCallNumber() + "] - all messages already sent"), t.nextMessageToSend += 1, t.call.halfClose();
      }
    }
    setCredentials(e) {
      throw Error("Method not implemented.");
    }
    getMethod() {
      return this.methodName;
    }
    getHost() {
      return this.host;
    }
    getAuthContext() {
      if (this.committedCallIndex !== null) return this.underlyingCalls[this.committedCallIndex].call.getAuthContext();
      else return null;
    }
  }
  Wp.RetryingCall = Hp;
});
var Bi = (0, import_chunk_w1d7ygsk.V)(function(Vp) {
  Object.defineProperty(Vp, "__esModule", { value: true });
  Vp.BaseSubchannelWrapper = void 0;
  class $p {
    constructor(e) {
      this.child = e, this.healthy = true, this.healthListeners = /* @__PURE__ */ new Set(), this.refcount = 0, this.dataWatchers = /* @__PURE__ */ new Set(), e.addHealthStateWatcher((t) => {
        if (this.healthy) this.updateHealthListeners();
      });
    }
    updateHealthListeners() {
      for (let e of this.healthListeners) e(this.isHealthy());
    }
    getConnectivityState() {
      return this.child.getConnectivityState();
    }
    addConnectivityStateListener(e) {
      this.child.addConnectivityStateListener(e);
    }
    removeConnectivityStateListener(e) {
      this.child.removeConnectivityStateListener(e);
    }
    startConnecting() {
      this.child.startConnecting();
    }
    getAddress() {
      return this.child.getAddress();
    }
    throttleKeepalive(e) {
      this.child.throttleKeepalive(e);
    }
    ref() {
      this.child.ref(), this.refcount += 1;
    }
    unref() {
      if (this.child.unref(), this.refcount -= 1, this.refcount === 0) this.destroy();
    }
    destroy() {
      for (let e of this.dataWatchers) e.destroy();
    }
    getChannelzRef() {
      return this.child.getChannelzRef();
    }
    isHealthy() {
      return this.healthy && this.child.isHealthy();
    }
    addHealthStateWatcher(e) {
      this.healthListeners.add(e);
    }
    removeHealthStateWatcher(e) {
      this.healthListeners.delete(e);
    }
    addDataWatcher(e) {
      e.setSubchannel(this.getRealSubchannel()), this.dataWatchers.add(e);
    }
    setHealthy(e) {
      if (e !== this.healthy) {
        if (this.healthy = e, this.child.isHealthy()) this.updateHealthListeners();
      }
    }
    getRealSubchannel() {
      return this.child.getRealSubchannel();
    }
    realSubchannelEquals(e) {
      return this.getRealSubchannel() === e.getRealSubchannel();
    }
    getCallCredentials() {
      return this.child.getCallCredentials();
    }
    getChannel() {
      return this.child.getChannel();
    }
  }
  Vp.BaseSubchannelWrapper = $p;
});
var Io = (0, import_chunk_w1d7ygsk.V)(function(dg) {
  Object.defineProperty(dg, "__esModule", { value: true });
  dg.InternalChannel = dg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = void 0;
  var Kp = Mr(), Jp = kc(), Xp = Ep(), ni = kt(), Qp = ue(), Te = x(), Zp = Js(), eg = Eo(), cn = tt(), lr = K(), tg = wo(), cr = we(), ee = Ae(), Nt = Zt(), rg = Pp(), ig = Kr(), sg = Lp(), ii = Ys(), ng = Ui(), si = Gp(), ag = Bi(), IR = 2147483647, xR = 1e3, kR = 18e5, ln = /* @__PURE__ */ new Map(), DR = 16777216, LR = 1048576;
  class og extends ag.BaseSubchannelWrapper {
    constructor(e, t) {
      super(e);
      this.channel = t, this.refCount = 0, this.subchannelStateListener = (r, i, s, n) => {
        t.throttleKeepalive(n);
      };
    }
    ref() {
      if (this.refCount === 0) this.child.addConnectivityStateListener(this.subchannelStateListener), this.channel.addWrappedSubchannel(this);
      this.child.ref(), this.refCount += 1;
    }
    unref() {
      if (this.child.unref(), this.refCount -= 1, this.refCount <= 0) this.child.removeConnectivityStateListener(this.subchannelStateListener), this.channel.removeWrappedSubchannel(this);
    }
  }
  class lg {
    pick(e) {
      return { pickResultType: ni.PickResultType.DROP, status: { code: Te.Status.UNAVAILABLE, details: "Channel closed before call started", metadata: new Qp.Metadata() }, subchannel: null, onCallStarted: null, onCallEnded: null };
    }
  }
  dg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = "grpc.internal.no_subchannel";
  class cg {
    constructor(e) {
      this.target = e, this.trace = new Nt.ChannelzTrace(), this.callTracker = new Nt.ChannelzCallTracker(), this.childrenTracker = new Nt.ChannelzChildrenTracker(), this.state = ee.ConnectivityState.IDLE;
    }
    getChannelzInfoCallback() {
      return () => ({ target: this.target, state: this.state, trace: this.trace, callTracker: this.callTracker, children: this.childrenTracker.getChildLists() });
    }
  }
  class ug {
    constructor(e, t, r) {
      var i, s, n, a, o, l;
      if (this.credentials = t, this.options = r, this.connectivityState = ee.ConnectivityState.IDLE, this.currentPicker = new ni.UnavailablePicker(), this.configSelectionQueue = [], this.pickQueue = [], this.connectivityStateWatchers = [], this.callRefTimer = null, this.configSelector = null, this.currentResolutionError = null, this.wrappedSubchannels = /* @__PURE__ */ new Set(), this.callCount = 0, this.idleTimer = null, this.channelzEnabled = true, this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), typeof e !== "string") throw TypeError("Channel target must be a string");
      if (!(t instanceof Kp.ChannelCredentials)) throw TypeError("Channel credentials must be a ChannelCredentials object");
      if (r) {
        if (typeof r !== "object") throw TypeError("Channel options must be an object");
      }
      this.channelzInfoTracker = new cg(e);
      let c = cr.parseUri(e);
      if (c === null) throw Error(`Could not parse target name "${e}"`);
      let u = cn.mapUriDefaultScheme(c);
      if (u === null) throw Error(`Could not find a default scheme for target name "${e}"`);
      if (this.options["grpc.enable_channelz"] === 0) this.channelzEnabled = false;
      if (this.channelzRef = Nt.registerChannelzChannel(e, this.channelzInfoTracker.getChannelzInfoCallback(), this.channelzEnabled), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Channel created");
      if (this.options["grpc.default_authority"]) this.defaultAuthority = this.options["grpc.default_authority"];
      else this.defaultAuthority = cn.getDefaultAuthority(u);
      let d = tg.mapProxyName(u, r);
      this.target = d.target, this.options = Object.assign({}, this.options, d.extraOptions), this.subchannelPool = Xp.getSubchannelPool(((i = this.options["grpc.use_local_subchannel_pool"]) !== null && i !== void 0 ? i : 0) === 0), this.retryBufferTracker = new si.MessageBufferTracker((s = this.options["grpc.retry_buffer_size"]) !== null && s !== void 0 ? s : DR, (n = this.options["grpc.per_rpc_retry_buffer_size"]) !== null && n !== void 0 ? n : LR), this.keepaliveTime = (a = this.options["grpc.keepalive_time_ms"]) !== null && a !== void 0 ? a : -1, this.idleTimeoutMs = Math.max((o = this.options["grpc.client_idle_timeout_ms"]) !== null && o !== void 0 ? o : kR, xR);
      let h = { createSubchannel: (f, y) => {
        let C = {};
        for (let [te, v] of Object.entries(y)) if (!te.startsWith(dg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX)) C[te] = v;
        let E = this.subchannelPool.getOrCreateSubchannel(this.target, f, C, this.credentials);
        if (E.throttleKeepalive(this.keepaliveTime), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", E.getChannelzRef());
        return new og(E, this);
      }, updateState: (f, y) => {
        this.currentPicker = y;
        let C = this.pickQueue.slice();
        if (this.pickQueue = [], C.length > 0) this.callRefTimerUnref();
        for (let E of C) E.doPick();
        this.updateState(f);
      }, requestReresolution: () => {
        throw Error("Resolving load balancer should never call requestReresolution");
      }, addChannelzChild: (f) => {
        if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.refChild(f);
      }, removeChannelzChild: (f) => {
        if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.unrefChild(f);
      } };
      this.resolvingLoadBalancer = new Jp.ResolvingLoadBalancer(this.target, h, this.options, (f, y) => {
        var C;
        if (f.retryThrottling) ln.set(this.getTarget(), new si.RetryThrottler(f.retryThrottling.maxTokens, f.retryThrottling.tokenRatio, ln.get(this.getTarget())));
        else ln.delete(this.getTarget());
        if (this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Address resolution succeeded");
        (C = this.configSelector) === null || C === void 0 || C.unref(), this.configSelector = y, this.currentResolutionError = null, process.nextTick(() => {
          let E = this.configSelectionQueue;
          if (this.configSelectionQueue = [], E.length > 0) this.callRefTimerUnref();
          for (let A of E) A.getConfig();
        });
      }, (f) => {
        if (this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_WARNING", "Address resolution failed with code " + f.code + ' and details "' + f.details + '"');
        if (this.configSelectionQueue.length > 0) this.trace("Name resolution failed with calls queued for config selection");
        if (this.configSelector === null) this.currentResolutionError = Object.assign(Object.assign({}, ng.restrictControlPlaneStatusCode(f.code, f.details)), { metadata: f.metadata });
        let y = this.configSelectionQueue;
        if (this.configSelectionQueue = [], y.length > 0) this.callRefTimerUnref();
        for (let C of y) C.reportResolverError(f);
      }), this.filterStackFactory = new Zp.FilterStackFactory([new eg.CompressionFilterFactory(this, this.options)]), this.trace("Channel constructed with options " + JSON.stringify(r, void 0, 2));
      let m = Error();
      if (lr.isTracerEnabled("channel_stacktrace")) lr.trace(Te.LogVerbosity.DEBUG, "channel_stacktrace", "(" + this.channelzRef.id + `) Channel constructed 
` + ((l = m.stack) === null || l === void 0 ? void 0 : l.substring(m.stack.indexOf(`
`) + 1)));
      this.lastActivityTimestamp = /* @__PURE__ */ new Date();
    }
    trace(e, t) {
      lr.trace(t !== null && t !== void 0 ? t : Te.LogVerbosity.DEBUG, "channel", "(" + this.channelzRef.id + ") " + cr.uriToString(this.target) + " " + e);
    }
    callRefTimerRef() {
      var e, t, r, i;
      if (!this.callRefTimer) this.callRefTimer = setInterval(() => {
      }, IR);
      if (!((t = (e = this.callRefTimer).hasRef) === null || t === void 0 ? void 0 : t.call(e))) this.trace("callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length), (i = (r = this.callRefTimer).ref) === null || i === void 0 || i.call(r);
    }
    callRefTimerUnref() {
      var e, t, r;
      if (!((e = this.callRefTimer) === null || e === void 0 ? void 0 : e.hasRef) || this.callRefTimer.hasRef()) this.trace("callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length), (r = (t = this.callRefTimer) === null || t === void 0 ? void 0 : t.unref) === null || r === void 0 || r.call(t);
    }
    removeConnectivityStateWatcher(e) {
      let t = this.connectivityStateWatchers.findIndex((r) => r === e);
      if (t >= 0) this.connectivityStateWatchers.splice(t, 1);
    }
    updateState(e) {
      if (lr.trace(Te.LogVerbosity.DEBUG, "connectivity_state", "(" + this.channelzRef.id + ") " + cr.uriToString(this.target) + " " + ee.ConnectivityState[this.connectivityState] + " -> " + ee.ConnectivityState[e]), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Connectivity state change to " + ee.ConnectivityState[e]);
      this.connectivityState = e, this.channelzInfoTracker.state = e;
      let t = this.connectivityStateWatchers.slice();
      for (let r of t) if (e !== r.currentState) {
        if (r.timer) clearTimeout(r.timer);
        this.removeConnectivityStateWatcher(r), r.callback();
      }
      if (e !== ee.ConnectivityState.TRANSIENT_FAILURE) this.currentResolutionError = null;
    }
    throttleKeepalive(e) {
      if (e > this.keepaliveTime) {
        this.keepaliveTime = e;
        for (let t of this.wrappedSubchannels) t.throttleKeepalive(e);
      }
    }
    addWrappedSubchannel(e) {
      this.wrappedSubchannels.add(e);
    }
    removeWrappedSubchannel(e) {
      this.wrappedSubchannels.delete(e);
    }
    doPick(e, t) {
      return this.currentPicker.pick({ metadata: e, extraPickInfo: t });
    }
    queueCallForPick(e) {
      this.pickQueue.push(e), this.callRefTimerRef();
    }
    getConfig(e, t) {
      if (this.connectivityState !== ee.ConnectivityState.SHUTDOWN) this.resolvingLoadBalancer.exitIdle();
      if (this.configSelector) return { type: "SUCCESS", config: this.configSelector.invoke(e, t, this.randomChannelId) };
      else if (this.currentResolutionError) return { type: "ERROR", error: this.currentResolutionError };
      else return { type: "NONE" };
    }
    queueCallForConfig(e) {
      this.configSelectionQueue.push(e), this.callRefTimerRef();
    }
    enterIdle() {
      if (this.resolvingLoadBalancer.destroy(), this.updateState(ee.ConnectivityState.IDLE), this.currentPicker = new ni.QueuePicker(this.resolvingLoadBalancer), this.idleTimer) clearTimeout(this.idleTimer), this.idleTimer = null;
      if (this.callRefTimer) clearInterval(this.callRefTimer), this.callRefTimer = null;
    }
    startIdleTimeout(e) {
      var t, r;
      this.idleTimer = setTimeout(() => {
        if (this.callCount > 0) {
          this.startIdleTimeout(this.idleTimeoutMs);
          return;
        }
        let s = (/* @__PURE__ */ new Date()).valueOf() - this.lastActivityTimestamp.valueOf();
        if (s >= this.idleTimeoutMs) this.trace("Idle timer triggered after " + this.idleTimeoutMs + "ms of inactivity"), this.enterIdle();
        else this.startIdleTimeout(this.idleTimeoutMs - s);
      }, e), (r = (t = this.idleTimer).unref) === null || r === void 0 || r.call(t);
    }
    maybeStartIdleTimer() {
      if (this.connectivityState !== ee.ConnectivityState.SHUTDOWN && !this.idleTimer) this.startIdleTimeout(this.idleTimeoutMs);
    }
    onCallStart() {
      if (this.channelzEnabled) this.channelzInfoTracker.callTracker.addCallStarted();
      this.callCount += 1;
    }
    onCallEnd(e) {
      if (this.channelzEnabled) if (e.code === Te.Status.OK) this.channelzInfoTracker.callTracker.addCallSucceeded();
      else this.channelzInfoTracker.callTracker.addCallFailed();
      this.callCount -= 1, this.lastActivityTimestamp = /* @__PURE__ */ new Date(), this.maybeStartIdleTimer();
    }
    createLoadBalancingCall(e, t, r, i, s) {
      let n = ii.getNextCallNumber();
      return this.trace("createLoadBalancingCall [" + n + '] method="' + t + '"'), new rg.LoadBalancingCall(this, e, t, r, i, s, n);
    }
    createRetryingCall(e, t, r, i, s) {
      let n = ii.getNextCallNumber();
      return this.trace("createRetryingCall [" + n + '] method="' + t + '"'), new si.RetryingCall(this, e, t, r, i, s, n, this.retryBufferTracker, ln.get(this.getTarget()));
    }
    createResolvingCall(e, t, r, i, s) {
      let n = ii.getNextCallNumber();
      this.trace("createResolvingCall [" + n + '] method="' + e + '", deadline=' + ig.deadlineToString(t));
      let a = { deadline: t, flags: s !== null && s !== void 0 ? s : Te.Propagate.DEFAULTS, host: r !== null && r !== void 0 ? r : this.defaultAuthority, parentCall: i }, o = new sg.ResolvingCall(this, e, a, this.filterStackFactory.clone(), n);
      return this.onCallStart(), o.addStatusWatcher((l) => {
        this.onCallEnd(l);
      }), o;
    }
    close() {
      var e;
      this.resolvingLoadBalancer.destroy(), this.updateState(ee.ConnectivityState.SHUTDOWN), this.currentPicker = new lg();
      for (let t of this.configSelectionQueue) t.cancelWithStatus(Te.Status.UNAVAILABLE, "Channel closed before call started");
      this.configSelectionQueue = [];
      for (let t of this.pickQueue) t.cancelWithStatus(Te.Status.UNAVAILABLE, "Channel closed before call started");
      if (this.pickQueue = [], this.callRefTimer) clearInterval(this.callRefTimer);
      if (this.idleTimer) clearTimeout(this.idleTimer);
      if (this.channelzEnabled) Nt.unregisterChannelzRef(this.channelzRef);
      this.subchannelPool.unrefUnusedSubchannels(), (e = this.configSelector) === null || e === void 0 || e.unref(), this.configSelector = null;
    }
    getTarget() {
      return cr.uriToString(this.target);
    }
    getConnectivityState(e) {
      let t = this.connectivityState;
      if (e) this.resolvingLoadBalancer.exitIdle(), this.lastActivityTimestamp = /* @__PURE__ */ new Date(), this.maybeStartIdleTimer();
      return t;
    }
    watchConnectivityState(e, t, r) {
      if (this.connectivityState === ee.ConnectivityState.SHUTDOWN) throw Error("Channel has been shut down");
      let i = null;
      if (t !== 1 / 0) {
        let n = t instanceof Date ? t : new Date(t), a = /* @__PURE__ */ new Date();
        if (t === -1 / 0 || n <= a) {
          process.nextTick(r, Error("Deadline passed without connectivity state change"));
          return;
        }
        i = setTimeout(() => {
          this.removeConnectivityStateWatcher(s), r(Error("Deadline passed without connectivity state change"));
        }, n.getTime() - a.getTime());
      }
      let s = { currentState: e, callback: r, timer: i };
      this.connectivityStateWatchers.push(s);
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(e, t, r, i, s) {
      if (typeof e !== "string") throw TypeError("Channel#createCall: method must be a string");
      if (!(typeof t === "number" || t instanceof Date)) throw TypeError("Channel#createCall: deadline must be a number or Date");
      if (this.connectivityState === ee.ConnectivityState.SHUTDOWN) throw Error("Channel has been shut down");
      return this.createResolvingCall(e, t, r, i, s);
    }
    getOptions() {
      return this.options;
    }
  }
  dg.InternalChannel = ug;
});
var Ra = (0, import_chunk_w1d7ygsk.V)(function(vg) {
  Object.defineProperty(vg, "__esModule", { value: true });
  vg.ChannelImplementation = void 0;
  var pg = Mr(), gg = Io();
  class mg {
    constructor(e, t, r) {
      if (typeof e !== "string") throw TypeError("Channel target must be a string");
      if (!(t instanceof pg.ChannelCredentials)) throw TypeError("Channel credentials must be a ChannelCredentials object");
      if (r) {
        if (typeof r !== "object") throw TypeError("Channel options must be an object");
      }
      this.internalChannel = new gg.InternalChannel(e, t, r);
    }
    close() {
      this.internalChannel.close();
    }
    getTarget() {
      return this.internalChannel.getTarget();
    }
    getConnectivityState(e) {
      return this.internalChannel.getConnectivityState(e);
    }
    watchConnectivityState(e, t, r) {
      this.internalChannel.watchConnectivityState(e, t, r);
    }
    getChannelzRef() {
      return this.internalChannel.getChannelzRef();
    }
    createCall(e, t, r, i, s) {
      if (typeof e !== "string") throw TypeError("Channel#createCall: method must be a string");
      if (!(typeof t === "number" || t instanceof Date)) throw TypeError("Channel#createCall: deadline must be a number or Date");
      return this.internalChannel.createCall(e, t, r, i, s);
    }
  }
  vg.ChannelImplementation = mg;
});
var Og = (0, import_chunk_w1d7ygsk.V)(function(Rg) {
  Object.defineProperty(Rg, "__esModule", { value: true });
  Rg.ServerDuplexStreamImpl = Rg.ServerWritableStreamImpl = Rg.ServerReadableStreamImpl = Rg.ServerUnaryCallImpl = void 0;
  Rg.serverErrorToStatus = xo;
  var _g = (0, import_chunk_w1d7ygsk.ft)("events"), ai = (0, import_chunk_w1d7ygsk.ft)("stream"), oi = x(), un = ue();
  function xo(e, t) {
    var r;
    let i = { code: oi.Status.UNKNOWN, details: "message" in e ? e.message : "Unknown Error", metadata: (r = t !== null && t !== void 0 ? t : e.metadata) !== null && r !== void 0 ? r : null };
    if ("code" in e && typeof e.code === "number" && Number.isInteger(e.code)) {
      if (i.code = e.code, "details" in e && typeof e.details === "string") i.details = e.details;
    }
    return i;
  }
  class Sg extends _g.EventEmitter {
    constructor(e, t, r, i) {
      super();
      this.path = e, this.call = t, this.metadata = r, this.request = i, this.cancelled = false;
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  Rg.ServerUnaryCallImpl = Sg;
  class Cg extends ai.Readable {
    constructor(e, t, r) {
      super({ objectMode: true });
      this.path = e, this.call = t, this.metadata = r, this.cancelled = false;
    }
    _read(e) {
      this.call.startRead();
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  Rg.ServerReadableStreamImpl = Cg;
  class Eg extends ai.Writable {
    constructor(e, t, r, i) {
      super({ objectMode: true });
      this.path = e, this.call = t, this.metadata = r, this.request = i, this.pendingStatus = { code: oi.Status.OK, details: "OK" }, this.cancelled = false, this.trailingMetadata = new un.Metadata(), this.on("error", (s) => {
        this.pendingStatus = xo(s), this.end();
      });
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _write(e, t, r) {
      this.call.sendMessage(e, r);
    }
    _final(e) {
      var t;
      e(null), this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), { metadata: (t = this.pendingStatus.metadata) !== null && t !== void 0 ? t : this.trailingMetadata }));
    }
    end(e) {
      if (e) this.trailingMetadata = e;
      return super.end();
    }
  }
  Rg.ServerWritableStreamImpl = Eg;
  class Tg extends ai.Duplex {
    constructor(e, t, r) {
      super({ objectMode: true });
      this.path = e, this.call = t, this.metadata = r, this.pendingStatus = { code: oi.Status.OK, details: "OK" }, this.cancelled = false, this.trailingMetadata = new un.Metadata(), this.on("error", (i) => {
        this.pendingStatus = xo(i), this.end();
      });
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _read(e) {
      this.call.startRead();
    }
    _write(e, t, r) {
      this.call.sendMessage(e, r);
    }
    _final(e) {
      var t;
      e(null), this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), { metadata: (t = this.pendingStatus.metadata) !== null && t !== void 0 ? t : this.trailingMetadata }));
    }
    end(e) {
      if (e) this.trailingMetadata = e;
      return super.end();
    }
  }
  Rg.ServerDuplexStreamImpl = Tg;
});
var dn = (0, import_chunk_w1d7ygsk.V)(function(wg) {
  Object.defineProperty(wg, "__esModule", { value: true });
  wg.ServerCredentials = void 0;
  wg.createCertificateProviderServerCredentials = zR;
  wg.createServerCredentialsWithInterceptors = HR;
  var li = fa();
  class ci {
    constructor(e, t) {
      this.serverConstructorOptions = e, this.watchers = /* @__PURE__ */ new Set(), this.latestContextOptions = null, this.latestContextOptions = t !== null && t !== void 0 ? t : null;
    }
    _addWatcher(e) {
      this.watchers.add(e);
    }
    _removeWatcher(e) {
      this.watchers.delete(e);
    }
    getWatcherCount() {
      return this.watchers.size;
    }
    updateSecureContextOptions(e) {
      this.latestContextOptions = e;
      for (let t of this.watchers) t(this.latestContextOptions);
    }
    _isSecure() {
      return this.serverConstructorOptions !== null;
    }
    _getSecureContextOptions() {
      return this.latestContextOptions;
    }
    _getConstructorOptions() {
      return this.serverConstructorOptions;
    }
    _getInterceptors() {
      return [];
    }
    static createInsecure() {
      return new ko();
    }
    static createSsl(e, t, r = false) {
      var i;
      if (e !== null && !Buffer.isBuffer(e)) throw TypeError("rootCerts must be null or a Buffer");
      if (!Array.isArray(t)) throw TypeError("keyCertPairs must be an array");
      if (typeof r !== "boolean") throw TypeError("checkClientCertificate must be a boolean");
      let s = [], n = [];
      for (let a = 0; a < t.length; a++) {
        let o = t[a];
        if (o === null || typeof o !== "object") throw TypeError(`keyCertPair[${a}] must be an object`);
        if (!Buffer.isBuffer(o.private_key)) throw TypeError(`keyCertPair[${a}].private_key must be a Buffer`);
        if (!Buffer.isBuffer(o.cert_chain)) throw TypeError(`keyCertPair[${a}].cert_chain must be a Buffer`);
        s.push(o.cert_chain), n.push(o.private_key);
      }
      return new Do({ requestCert: r, ciphers: li.CIPHER_SUITES }, { ca: (i = e !== null && e !== void 0 ? e : li.getDefaultRootsData()) !== null && i !== void 0 ? i : void 0, cert: s, key: n });
    }
  }
  wg.ServerCredentials = ci;
  class ko extends ci {
    constructor() {
      super(null);
    }
    _getSettings() {
      return null;
    }
    _equals(e) {
      return e instanceof ko;
    }
  }
  class Do extends ci {
    constructor(e, t) {
      super(e, t);
      this.options = Object.assign(Object.assign({}, e), t);
    }
    _equals(e) {
      if (this === e) return true;
      if (!(e instanceof Do)) return false;
      if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(e.options.ca)) {
        if (!this.options.ca.equals(e.options.ca)) return false;
      } else if (this.options.ca !== e.options.ca) return false;
      if (Array.isArray(this.options.cert) && Array.isArray(e.options.cert)) {
        if (this.options.cert.length !== e.options.cert.length) return false;
        for (let t = 0; t < this.options.cert.length; t++) {
          let r = this.options.cert[t], i = e.options.cert[t];
          if (Buffer.isBuffer(r) && Buffer.isBuffer(i)) {
            if (!r.equals(i)) return false;
          } else if (r !== i) return false;
        }
      } else if (this.options.cert !== e.options.cert) return false;
      if (Array.isArray(this.options.key) && Array.isArray(e.options.key)) {
        if (this.options.key.length !== e.options.key.length) return false;
        for (let t = 0; t < this.options.key.length; t++) {
          let r = this.options.key[t], i = e.options.key[t];
          if (Buffer.isBuffer(r) && Buffer.isBuffer(i)) {
            if (!r.equals(i)) return false;
          } else if (r !== i) return false;
        }
      } else if (this.options.key !== e.options.key) return false;
      if (this.options.requestCert !== e.options.requestCert) return false;
      return true;
    }
  }
  class Lo extends ci {
    constructor(e, t, r) {
      super({ requestCert: t !== null, rejectUnauthorized: r, ciphers: li.CIPHER_SUITES });
      this.identityCertificateProvider = e, this.caCertificateProvider = t, this.requireClientCertificate = r, this.latestCaUpdate = null, this.latestIdentityUpdate = null, this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this), this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
    }
    _addWatcher(e) {
      var t;
      if (this.getWatcherCount() === 0) (t = this.caCertificateProvider) === null || t === void 0 || t.addCaCertificateListener(this.caCertificateUpdateListener), this.identityCertificateProvider.addIdentityCertificateListener(this.identityCertificateUpdateListener);
      super._addWatcher(e);
    }
    _removeWatcher(e) {
      var t;
      if (super._removeWatcher(e), this.getWatcherCount() === 0) (t = this.caCertificateProvider) === null || t === void 0 || t.removeCaCertificateListener(this.caCertificateUpdateListener), this.identityCertificateProvider.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
    _equals(e) {
      if (this === e) return true;
      if (!(e instanceof Lo)) return false;
      return this.caCertificateProvider === e.caCertificateProvider && this.identityCertificateProvider === e.identityCertificateProvider && this.requireClientCertificate === e.requireClientCertificate;
    }
    calculateSecureContextOptions() {
      var e;
      if (this.latestIdentityUpdate === null) return null;
      if (this.caCertificateProvider !== null && this.latestCaUpdate === null) return null;
      return { ca: (e = this.latestCaUpdate) === null || e === void 0 ? void 0 : e.caCertificate, cert: [this.latestIdentityUpdate.certificate], key: [this.latestIdentityUpdate.privateKey] };
    }
    finalizeUpdate() {
      let e = this.calculateSecureContextOptions();
      this.updateSecureContextOptions(e);
    }
    handleCaCertificateUpdate(e) {
      this.latestCaUpdate = e, this.finalizeUpdate();
    }
    handleIdentityCertitificateUpdate(e) {
      this.latestIdentityUpdate = e, this.finalizeUpdate();
    }
  }
  function zR(e, t, r) {
    return new Lo(e, t, r);
  }
  class Fo extends ci {
    constructor(e, t) {
      super({});
      this.childCredentials = e, this.interceptors = t;
    }
    _isSecure() {
      return this.childCredentials._isSecure();
    }
    _equals(e) {
      if (!(e instanceof Fo)) return false;
      if (!this.childCredentials._equals(e.childCredentials)) return false;
      if (this.interceptors.length !== e.interceptors.length) return false;
      for (let t = 0; t < this.interceptors.length; t++) if (this.interceptors[t] !== e.interceptors[t]) return false;
      return true;
    }
    _getInterceptors() {
      return this.interceptors;
    }
    _addWatcher(e) {
      this.childCredentials._addWatcher(e);
    }
    _removeWatcher(e) {
      this.childCredentials._removeWatcher(e);
    }
    _getConstructorOptions() {
      return this.childCredentials._getConstructorOptions();
    }
    _getSecureContextOptions() {
      return this.childCredentials._getSecureContextOptions();
    }
  }
  function HR(e, t) {
    return new Fo(e, t);
  }
});
var zi = (0, import_chunk_w1d7ygsk.V)(function(Pg) {
  Object.defineProperty(Pg, "__esModule", { value: true });
  Pg.durationMessageToDuration = GR;
  Pg.msToDuration = $R;
  Pg.durationToMs = VR;
  Pg.isDuration = YR;
  Pg.isDurationMessage = KR;
  Pg.parseDuration = XR;
  Pg.durationToString = QR;
  function GR(e) {
    return { seconds: Number.parseInt(e.seconds), nanos: e.nanos };
  }
  function $R(e) {
    return { seconds: e / 1e3 | 0, nanos: e % 1e3 * 1e6 | 0 };
  }
  function VR(e) {
    return e.seconds * 1e3 + e.nanos / 1e6 | 0;
  }
  function YR(e) {
    return typeof e.seconds === "number" && typeof e.nanos === "number";
  }
  function KR(e) {
    return typeof e.seconds === "string" && typeof e.nanos === "number";
  }
  var JR = /^(\d+)(?:\.(\d+))?s$/;
  function XR(e) {
    let t = e.match(JR);
    if (!t) return null;
    return { seconds: Number.parseInt(t[1], 10), nanos: t[2] ? Number.parseInt(t[2].padEnd(9, "0"), 10) : 0 };
  }
  function QR(e) {
    if (e.nanos === 0) return `${e.seconds}s`;
    let t;
    if (e.nanos % 1e6 === 0) t = 1e6;
    else if (e.nanos % 1e3 === 0) t = 1e3;
    else t = 1;
    return `${e.seconds}.${e.nanos / t}s`;
  }
});
var pn = (0, import_chunk_w1d7ygsk.V)(function(jg) {
  var __dirname = "/home/runner/work/apps/apps/apps/cli/node_modules/@grpc/grpc-js/build/src";
  Object.defineProperty(jg, "__esModule", { value: true });
  jg.OrcaOobMetricsSubchannelWrapper = jg.GRPC_METRICS_HEADER = jg.ServerMetricRecorder = jg.PerRequestMetricRecorder = void 0;
  jg.createOrcaClient = Ug;
  jg.createMetricsReader = ob;
  var Ig = vs(), ui = zi(), xg = Mr(), kg = Bi(), hn = x(), Dg = Ir(), Lg = Ae(), Ng = null;
  function fn() {
    if (Ng) return Ng;
    let e = fo().loadSync, t = e("xds/service/orca/v3/orca.proto", { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true, includeDirs: [`${__dirname}/../../proto/xds`, `${__dirname}/../../proto/protoc-gen-validate`] });
    return Ig.loadPackageDefinition(t);
  }
  class Fg {
    constructor() {
      this.message = {};
    }
    recordRequestCostMetric(e, t) {
      if (!this.message.request_cost) this.message.request_cost = {};
      this.message.request_cost[e] = t;
    }
    recordUtilizationMetric(e, t) {
      if (!this.message.utilization) this.message.utilization = {};
      this.message.utilization[e] = t;
    }
    recordNamedMetric(e, t) {
      if (!this.message.named_metrics) this.message.named_metrics = {};
      this.message.named_metrics[e] = t;
    }
    recordCPUUtilizationMetric(e) {
      this.message.cpu_utilization = e;
    }
    recordMemoryUtilizationMetric(e) {
      this.message.mem_utilization = e;
    }
    recordApplicationUtilizationMetric(e) {
      this.message.application_utilization = e;
    }
    recordQpsMetric(e) {
      this.message.rps_fractional = e;
    }
    recordEpsMetric(e) {
      this.message.eps = e;
    }
    serialize() {
      return fn().xds.data.orca.v3.OrcaLoadReport.serialize(this.message);
    }
  }
  jg.PerRequestMetricRecorder = Fg;
  var ab = 3e4;
  class qg {
    constructor() {
      this.message = {}, this.serviceImplementation = { StreamCoreMetrics: (e) => {
        let t = e.request.report_interval ? ui.durationToMs(ui.durationMessageToDuration(e.request.report_interval)) : ab, r = setInterval(() => {
          e.write(this.message);
        }, t);
        e.on("cancelled", () => {
          clearInterval(r);
        });
      } };
    }
    putUtilizationMetric(e, t) {
      if (!this.message.utilization) this.message.utilization = {};
      this.message.utilization[e] = t;
    }
    setAllUtilizationMetrics(e) {
      this.message.utilization = Object.assign({}, e);
    }
    deleteUtilizationMetric(e) {
      var t;
      (t = this.message.utilization) === null || t === void 0 || delete t[e];
    }
    setCpuUtilizationMetric(e) {
      this.message.cpu_utilization = e;
    }
    deleteCpuUtilizationMetric() {
      delete this.message.cpu_utilization;
    }
    setApplicationUtilizationMetric(e) {
      this.message.application_utilization = e;
    }
    deleteApplicationUtilizationMetric() {
      delete this.message.application_utilization;
    }
    setQpsMetric(e) {
      this.message.rps_fractional = e;
    }
    deleteQpsMetric() {
      delete this.message.rps_fractional;
    }
    setEpsMetric(e) {
      this.message.eps = e;
    }
    deleteEpsMetric() {
      delete this.message.eps;
    }
    addToServer(e) {
      let t = fn().xds.service.orca.v3.OpenRcaService.service;
      e.addService(t, this.serviceImplementation);
    }
  }
  jg.ServerMetricRecorder = qg;
  function Ug(e) {
    return new (fn()).xds.service.orca.v3.OpenRcaService("unused", xg.ChannelCredentials.createInsecure(), { channelOverride: e });
  }
  jg.GRPC_METRICS_HEADER = "endpoint-load-metrics-bin";
  var Mg = "grpc_orca_load_report";
  function ob(e, t) {
    return (r, i, s) => {
      let n = s.getOpaque(Mg);
      if (n) e(n);
      else {
        let a = s.get(jg.GRPC_METRICS_HEADER);
        if (a.length > 0) n = fn().xds.data.orca.v3.OrcaLoadReport.deserialize(a[0]), e(n), s.setOpaque(Mg, n);
      }
      if (t) t(r, i, s);
    };
  }
  var Bg = "orca_oob_metrics";
  class zg {
    constructor(e, t) {
      this.metricsListener = e, this.intervalMs = t, this.dataProducer = null;
    }
    setSubchannel(e) {
      let t = e.getOrCreateDataProducer(Bg, lb);
      this.dataProducer = t, t.addDataWatcher(this);
    }
    destroy() {
      var e;
      (e = this.dataProducer) === null || e === void 0 || e.removeDataWatcher(this);
    }
    getInterval() {
      return this.intervalMs;
    }
    onMetricsUpdate(e) {
      this.metricsListener(e);
    }
  }
  class Hg {
    constructor(e) {
      this.subchannel = e, this.dataWatchers = /* @__PURE__ */ new Set(), this.orcaSupported = true, this.metricsCall = null, this.currentInterval = 1 / 0, this.backoffTimer = new Dg.BackoffTimeout(() => this.updateMetricsSubscription()), this.subchannelStateListener = () => this.updateMetricsSubscription();
      let t = e.getChannel();
      this.client = Ug(t), e.addConnectivityStateListener(this.subchannelStateListener);
    }
    addDataWatcher(e) {
      this.dataWatchers.add(e), this.updateMetricsSubscription();
    }
    removeDataWatcher(e) {
      var t;
      if (this.dataWatchers.delete(e), this.dataWatchers.size === 0) this.subchannel.removeDataProducer(Bg), (t = this.metricsCall) === null || t === void 0 || t.cancel(), this.metricsCall = null, this.client.close(), this.subchannel.removeConnectivityStateListener(this.subchannelStateListener);
      else this.updateMetricsSubscription();
    }
    updateMetricsSubscription() {
      var e;
      if (this.dataWatchers.size === 0 || !this.orcaSupported || this.subchannel.getConnectivityState() !== Lg.ConnectivityState.READY) return;
      let t = Math.min(...Array.from(this.dataWatchers).map((r) => r.getInterval()));
      if (!this.metricsCall || t !== this.currentInterval) {
        (e = this.metricsCall) === null || e === void 0 || e.cancel(), this.currentInterval = t;
        let r = this.client.streamCoreMetrics({ report_interval: ui.msToDuration(t) });
        this.metricsCall = r, r.on("data", (i) => {
          this.dataWatchers.forEach((s) => {
            s.onMetricsUpdate(i);
          });
        }), r.on("error", (i) => {
          if (this.metricsCall = null, i.code === hn.Status.UNIMPLEMENTED) {
            this.orcaSupported = false;
            return;
          }
          if (i.code === hn.Status.CANCELLED) return;
          this.backoffTimer.runOnce();
        });
      }
    }
  }
  class Wg extends kg.BaseSubchannelWrapper {
    constructor(e, t, r) {
      super(e);
      this.addDataWatcher(new zg(t, r));
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  jg.OrcaOobMetricsSubchannelWrapper = Wg;
  function lb(e) {
    return new Hg(e);
  }
});
var zo = (0, import_chunk_w1d7ygsk.V)(function(sm) {
  Object.defineProperty(sm, "__esModule", { value: true });
  sm.BaseServerInterceptingCall = sm.ServerInterceptingCall = sm.ResponderBuilder = sm.ServerListenerBuilder = void 0;
  sm.isInterceptingServerListener = fb;
  sm.getServerInterceptingCall = yb;
  var ur = ue(), W = x(), Ye = (0, import_chunk_w1d7ygsk.ft)("http2"), vn = Qi(), yn = (0, import_chunk_w1d7ygsk.ft)("zlib"), Jg = Ao(), Sn = K(), Xg = (0, import_chunk_w1d7ygsk.ft)("tls"), _n = pn(), Qg = "server_call";
  function Tr(e) {
    Sn.trace(W.LogVerbosity.DEBUG, Qg, e);
  }
  class Zg {
    constructor() {
      this.metadata = void 0, this.message = void 0, this.halfClose = void 0, this.cancel = void 0;
    }
    withOnReceiveMetadata(e) {
      return this.metadata = e, this;
    }
    withOnReceiveMessage(e) {
      return this.message = e, this;
    }
    withOnReceiveHalfClose(e) {
      return this.halfClose = e, this;
    }
    withOnCancel(e) {
      return this.cancel = e, this;
    }
    build() {
      return { onReceiveMetadata: this.metadata, onReceiveMessage: this.message, onReceiveHalfClose: this.halfClose, onCancel: this.cancel };
    }
  }
  sm.ServerListenerBuilder = Zg;
  function fb(e) {
    return e.onReceiveMetadata !== void 0 && e.onReceiveMetadata.length === 1;
  }
  class em {
    constructor(e, t) {
      this.listener = e, this.nextListener = t, this.cancelled = false, this.processingMetadata = false, this.hasPendingMessage = false, this.pendingMessage = null, this.processingMessage = false, this.hasPendingHalfClose = false;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), this.pendingMessage = null, this.hasPendingMessage = false;
    }
    processPendingHalfClose() {
      if (this.hasPendingHalfClose) this.nextListener.onReceiveHalfClose(), this.hasPendingHalfClose = false;
    }
    onReceiveMetadata(e) {
      if (this.cancelled) return;
      this.processingMetadata = true, this.listener.onReceiveMetadata(e, (t) => {
        if (this.processingMetadata = false, this.cancelled) return;
        this.nextListener.onReceiveMetadata(t), this.processPendingMessage(), this.processPendingHalfClose();
      });
    }
    onReceiveMessage(e) {
      if (this.cancelled) return;
      this.processingMessage = true, this.listener.onReceiveMessage(e, (t) => {
        if (this.processingMessage = false, this.cancelled) return;
        if (this.processingMetadata) this.pendingMessage = t, this.hasPendingMessage = true;
        else this.nextListener.onReceiveMessage(t), this.processPendingHalfClose();
      });
    }
    onReceiveHalfClose() {
      if (this.cancelled) return;
      this.listener.onReceiveHalfClose(() => {
        if (this.cancelled) return;
        if (this.processingMetadata || this.processingMessage) this.hasPendingHalfClose = true;
        else this.nextListener.onReceiveHalfClose();
      });
    }
    onCancel() {
      this.cancelled = true, this.listener.onCancel(), this.nextListener.onCancel();
    }
  }
  class tm {
    constructor() {
      this.start = void 0, this.metadata = void 0, this.message = void 0, this.status = void 0;
    }
    withStart(e) {
      return this.start = e, this;
    }
    withSendMetadata(e) {
      return this.metadata = e, this;
    }
    withSendMessage(e) {
      return this.message = e, this;
    }
    withSendStatus(e) {
      return this.status = e, this;
    }
    build() {
      return { start: this.start, sendMetadata: this.metadata, sendMessage: this.message, sendStatus: this.status };
    }
  }
  sm.ResponderBuilder = tm;
  var gn = { onReceiveMetadata: (e, t) => {
    t(e);
  }, onReceiveMessage: (e, t) => {
    t(e);
  }, onReceiveHalfClose: (e) => {
    e();
  }, onCancel: () => {
  } }, mn = { start: (e) => {
    e();
  }, sendMetadata: (e, t) => {
    t(e);
  }, sendMessage: (e, t) => {
    t(e);
  }, sendStatus: (e, t) => {
    t(e);
  } };
  class rm {
    constructor(e, t) {
      var r, i, s, n;
      this.nextCall = e, this.processingMetadata = false, this.sentMetadata = false, this.processingMessage = false, this.pendingMessage = null, this.pendingMessageCallback = null, this.pendingStatus = null, this.responder = { start: (r = t === null || t === void 0 ? void 0 : t.start) !== null && r !== void 0 ? r : mn.start, sendMetadata: (i = t === null || t === void 0 ? void 0 : t.sendMetadata) !== null && i !== void 0 ? i : mn.sendMetadata, sendMessage: (s = t === null || t === void 0 ? void 0 : t.sendMessage) !== null && s !== void 0 ? s : mn.sendMessage, sendStatus: (n = t === null || t === void 0 ? void 0 : t.sendStatus) !== null && n !== void 0 ? n : mn.sendStatus };
    }
    processPendingMessage() {
      if (this.pendingMessageCallback) this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback), this.pendingMessage = null, this.pendingMessageCallback = null;
    }
    processPendingStatus() {
      if (this.pendingStatus) this.nextCall.sendStatus(this.pendingStatus), this.pendingStatus = null;
    }
    start(e) {
      this.responder.start((t) => {
        var r, i, s, n;
        let a = { onReceiveMetadata: (r = t === null || t === void 0 ? void 0 : t.onReceiveMetadata) !== null && r !== void 0 ? r : gn.onReceiveMetadata, onReceiveMessage: (i = t === null || t === void 0 ? void 0 : t.onReceiveMessage) !== null && i !== void 0 ? i : gn.onReceiveMessage, onReceiveHalfClose: (s = t === null || t === void 0 ? void 0 : t.onReceiveHalfClose) !== null && s !== void 0 ? s : gn.onReceiveHalfClose, onCancel: (n = t === null || t === void 0 ? void 0 : t.onCancel) !== null && n !== void 0 ? n : gn.onCancel }, o = new em(a, e);
        this.nextCall.start(o);
      });
    }
    sendMetadata(e) {
      this.processingMetadata = true, this.sentMetadata = true, this.responder.sendMetadata(e, (t) => {
        this.processingMetadata = false, this.nextCall.sendMetadata(t), this.processPendingMessage(), this.processPendingStatus();
      });
    }
    sendMessage(e, t) {
      if (this.processingMessage = true, !this.sentMetadata) this.sendMetadata(new ur.Metadata());
      this.responder.sendMessage(e, (r) => {
        if (this.processingMessage = false, this.processingMetadata) this.pendingMessage = r, this.pendingMessageCallback = t;
        else this.nextCall.sendMessage(r, t);
      });
    }
    sendStatus(e) {
      this.responder.sendStatus(e, (t) => {
        if (this.processingMetadata || this.processingMessage) this.pendingStatus = t;
        else this.nextCall.sendStatus(t);
      });
    }
    startRead() {
      this.nextCall.startRead();
    }
    getPeer() {
      return this.nextCall.getPeer();
    }
    getDeadline() {
      return this.nextCall.getDeadline();
    }
    getHost() {
      return this.nextCall.getHost();
    }
    getAuthContext() {
      return this.nextCall.getAuthContext();
    }
    getConnectionInfo() {
      return this.nextCall.getConnectionInfo();
    }
    getMetricsRecorder() {
      return this.nextCall.getMetricsRecorder();
    }
  }
  sm.ServerInterceptingCall = rm;
  var im = "grpc-accept-encoding", Uo = "grpc-encoding", Vg = "grpc-message", Yg = "grpc-status", qo = "grpc-timeout", pb = /(\d{1,8})\s*([HMSmun])/, gb = { H: 36e5, M: 6e4, S: 1e3, m: 1, u: 1e-3, n: 1e-6 }, mb = { [im]: "identity,deflate,gzip", [Uo]: "identity" }, Kg = { [Ye.constants.HTTP2_HEADER_STATUS]: Ye.constants.HTTP_STATUS_OK, [Ye.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto" }, vb = { waitForTrailers: true };
  class Bo {
    constructor(e, t, r, i, s) {
      var n, a;
      if (this.stream = e, this.callEventTracker = r, this.handler = i, this.listener = null, this.deadlineTimer = null, this.deadline = 1 / 0, this.maxSendMessageSize = W.DEFAULT_MAX_SEND_MESSAGE_LENGTH, this.maxReceiveMessageSize = W.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH, this.cancelled = false, this.metadataSent = false, this.wantTrailers = false, this.cancelNotified = false, this.incomingEncoding = "identity", this.readQueue = [], this.isReadPending = false, this.receivedHalfClose = false, this.streamEnded = false, this.metricsRecorder = new _n.PerRequestMetricRecorder(), this.stream.once("close", () => {
        var d;
        if (Tr("Request to method " + ((d = this.handler) === null || d === void 0 ? void 0 : d.path) + " stream closed with rstCode " + this.stream.rstCode), this.callEventTracker && !this.streamEnded) this.streamEnded = true, this.callEventTracker.onStreamEnd(false), this.callEventTracker.onCallEnd({ code: W.Status.CANCELLED, details: "Stream closed before sending status", metadata: null });
        this.notifyOnCancel();
      }), this.stream.on("data", (d) => {
        this.handleDataFrame(d);
      }), this.stream.pause(), this.stream.on("end", () => {
        this.handleEndEvent();
      }), "grpc.max_send_message_length" in s) this.maxSendMessageSize = s["grpc.max_send_message_length"];
      if ("grpc.max_receive_message_length" in s) this.maxReceiveMessageSize = s["grpc.max_receive_message_length"];
      this.host = (n = t[":authority"]) !== null && n !== void 0 ? n : t.host, this.decoder = new Jg.StreamDecoder(this.maxReceiveMessageSize);
      let o = ur.Metadata.fromHttp2Headers(t);
      if (Sn.isTracerEnabled(Qg)) Tr("Request to " + this.handler.path + " received headers " + JSON.stringify(o.toJSON()));
      let l = o.get(qo);
      if (l.length > 0) this.handleTimeoutHeader(l[0]);
      let c = o.get(Uo);
      if (c.length > 0) this.incomingEncoding = c[0];
      o.remove(qo), o.remove(Uo), o.remove(im), o.remove(Ye.constants.HTTP2_HEADER_ACCEPT_ENCODING), o.remove(Ye.constants.HTTP2_HEADER_TE), o.remove(Ye.constants.HTTP2_HEADER_CONTENT_TYPE), this.metadata = o;
      let u = (a = e.session) === null || a === void 0 ? void 0 : a.socket;
      this.connectionInfo = { localAddress: u === null || u === void 0 ? void 0 : u.localAddress, localPort: u === null || u === void 0 ? void 0 : u.localPort, remoteAddress: u === null || u === void 0 ? void 0 : u.remoteAddress, remotePort: u === null || u === void 0 ? void 0 : u.remotePort }, this.shouldSendMetrics = !!s["grpc.server_call_metric_recording"];
    }
    handleTimeoutHeader(e) {
      let t = e.toString().match(pb);
      if (t === null) {
        let s = { code: W.Status.INTERNAL, details: `Invalid ${qo} value "${e}"`, metadata: null };
        process.nextTick(() => {
          this.sendStatus(s);
        });
        return;
      }
      let r = +t[1] * gb[t[2]] | 0, i = /* @__PURE__ */ new Date();
      this.deadline = i.setMilliseconds(i.getMilliseconds() + r), this.deadlineTimer = setTimeout(() => {
        let s = { code: W.Status.DEADLINE_EXCEEDED, details: "Deadline exceeded", metadata: null };
        this.sendStatus(s);
      }, r);
    }
    checkCancelled() {
      if (!this.cancelled && (this.stream.destroyed || this.stream.closed)) this.notifyOnCancel(), this.cancelled = true;
      return this.cancelled;
    }
    notifyOnCancel() {
      if (this.cancelNotified) return;
      if (this.cancelNotified = true, this.cancelled = true, process.nextTick(() => {
        var e;
        (e = this.listener) === null || e === void 0 || e.onCancel();
      }), this.deadlineTimer) clearTimeout(this.deadlineTimer);
      this.stream.resume();
    }
    maybeSendMetadata() {
      if (!this.metadataSent) this.sendMetadata(new ur.Metadata());
    }
    serializeMessage(e) {
      let t = this.handler.serialize(e), r = t.byteLength, i = Buffer.allocUnsafe(r + 5);
      return i.writeUInt8(0, 0), i.writeUInt32BE(r, 1), t.copy(i, 5), i;
    }
    decompressMessage(e, t) {
      let r = e.subarray(5);
      if (t === "identity") return r;
      else if (t === "deflate" || t === "gzip") {
        let i;
        if (t === "deflate") i = yn.createInflate();
        else i = yn.createGunzip();
        return new Promise((s, n) => {
          let a = 0, o = [];
          i.on("error", (l) => {
            n({ code: W.Status.INTERNAL, details: "Failed to decompress message" });
          }), i.on("data", (l) => {
            if (o.push(l), a += l.byteLength, this.maxReceiveMessageSize !== -1 && a > this.maxReceiveMessageSize) i.destroy(), n({ code: W.Status.RESOURCE_EXHAUSTED, details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}` });
          }), i.on("end", () => {
            s(Buffer.concat(o));
          }), i.write(r), i.end();
        });
      } else return Promise.reject({ code: W.Status.UNIMPLEMENTED, details: `Received message compressed with unsupported encoding "${t}"` });
    }
    async decompressAndMaybePush(e) {
      if (e.type !== "COMPRESSED") throw Error(`Invalid queue entry type: ${e.type}`);
      let r = e.compressedMessage.readUInt8(0) === 1 ? this.incomingEncoding : "identity", i;
      try {
        i = await this.decompressMessage(e.compressedMessage, r);
      } catch (s) {
        this.sendStatus(s);
        return;
      }
      try {
        e.parsedMessage = this.handler.deserialize(i);
      } catch (s) {
        this.sendStatus({ code: W.Status.INTERNAL, details: `Error deserializing request: ${s.message}` });
        return;
      }
      e.type = "READABLE", this.maybePushNextMessage();
    }
    maybePushNextMessage() {
      if (this.listener && this.isReadPending && this.readQueue.length > 0 && this.readQueue[0].type !== "COMPRESSED") {
        this.isReadPending = false;
        let e = this.readQueue.shift();
        if (e.type === "READABLE") this.listener.onReceiveMessage(e.parsedMessage);
        else this.listener.onReceiveHalfClose();
      }
    }
    handleDataFrame(e) {
      var t;
      if (this.checkCancelled()) return;
      Tr("Request to " + this.handler.path + " received data frame of size " + e.length);
      let r;
      try {
        r = this.decoder.write(e);
      } catch (i) {
        this.sendStatus({ code: W.Status.RESOURCE_EXHAUSTED, details: i.message });
        return;
      }
      for (let i of r) {
        this.stream.pause();
        let s = { type: "COMPRESSED", compressedMessage: i, parsedMessage: null };
        this.readQueue.push(s), this.decompressAndMaybePush(s), (t = this.callEventTracker) === null || t === void 0 || t.addMessageReceived();
      }
    }
    handleEndEvent() {
      this.readQueue.push({ type: "HALF_CLOSE", compressedMessage: null, parsedMessage: null }), this.receivedHalfClose = true, this.maybePushNextMessage();
    }
    start(e) {
      if (Tr("Request to " + this.handler.path + " start called"), this.checkCancelled()) return;
      this.listener = e, e.onReceiveMetadata(this.metadata);
    }
    sendMetadata(e) {
      if (this.checkCancelled()) return;
      if (this.metadataSent) return;
      this.metadataSent = true;
      let t = e ? e.toHttp2Headers() : null, r = Object.assign(Object.assign(Object.assign({}, Kg), mb), t);
      this.stream.respond(r, vb);
    }
    sendMessage(e, t) {
      if (this.checkCancelled()) return;
      let r;
      try {
        r = this.serializeMessage(e);
      } catch (i) {
        this.sendStatus({ code: W.Status.INTERNAL, details: `Error serializing response: ${vn.getErrorMessage(i)}`, metadata: null });
        return;
      }
      if (this.maxSendMessageSize !== -1 && r.length - 5 > this.maxSendMessageSize) {
        this.sendStatus({ code: W.Status.RESOURCE_EXHAUSTED, details: `Sent message larger than max (${r.length} vs. ${this.maxSendMessageSize})`, metadata: null });
        return;
      }
      this.maybeSendMetadata(), Tr("Request to " + this.handler.path + " sent data frame of size " + r.length), this.stream.write(r, (i) => {
        var s;
        if (i) {
          this.sendStatus({ code: W.Status.INTERNAL, details: `Error writing message: ${vn.getErrorMessage(i)}`, metadata: null });
          return;
        }
        (s = this.callEventTracker) === null || s === void 0 || s.addMessageSent(), t();
      });
    }
    sendStatus(e) {
      var t, r, i;
      if (this.checkCancelled()) return;
      Tr("Request to method " + ((t = this.handler) === null || t === void 0 ? void 0 : t.path) + " ended with status code: " + W.Status[e.code] + " details: " + e.details);
      let s = (i = (r = e.metadata) === null || r === void 0 ? void 0 : r.clone()) !== null && i !== void 0 ? i : new ur.Metadata();
      if (this.shouldSendMetrics) s.set(_n.GRPC_METRICS_HEADER, this.metricsRecorder.serialize());
      if (this.metadataSent) if (!this.wantTrailers) this.wantTrailers = true, this.stream.once("wantTrailers", () => {
        if (this.callEventTracker && !this.streamEnded) this.streamEnded = true, this.callEventTracker.onStreamEnd(true), this.callEventTracker.onCallEnd(e);
        let n = Object.assign({ [Yg]: e.code, [Vg]: encodeURI(e.details) }, s.toHttp2Headers());
        this.stream.sendTrailers(n), this.notifyOnCancel();
      }), this.stream.end();
      else this.notifyOnCancel();
      else {
        if (this.callEventTracker && !this.streamEnded) this.streamEnded = true, this.callEventTracker.onStreamEnd(true), this.callEventTracker.onCallEnd(e);
        let n = Object.assign(Object.assign({ [Yg]: e.code, [Vg]: encodeURI(e.details) }, Kg), s.toHttp2Headers());
        this.stream.respond(n, { endStream: true }), this.notifyOnCancel();
      }
    }
    startRead() {
      if (Tr("Request to " + this.handler.path + " startRead called"), this.checkCancelled()) return;
      if (this.isReadPending = true, this.readQueue.length === 0) {
        if (!this.receivedHalfClose) this.stream.resume();
      } else this.maybePushNextMessage();
    }
    getPeer() {
      var e;
      let t = (e = this.stream.session) === null || e === void 0 ? void 0 : e.socket;
      if (t === null || t === void 0 ? void 0 : t.remoteAddress) if (t.remotePort) return `${t.remoteAddress}:${t.remotePort}`;
      else return t.remoteAddress;
      else return "unknown";
    }
    getDeadline() {
      return this.deadline;
    }
    getHost() {
      return this.host;
    }
    getAuthContext() {
      var e;
      if (((e = this.stream.session) === null || e === void 0 ? void 0 : e.socket) instanceof Xg.TLSSocket) {
        let t = this.stream.session.socket.getPeerCertificate();
        return { transportSecurityType: "ssl", sslPeerCertificate: t.raw ? t : void 0 };
      } else return {};
    }
    getConnectionInfo() {
      return this.connectionInfo;
    }
    getMetricsRecorder() {
      return this.metricsRecorder;
    }
  }
  sm.BaseServerInterceptingCall = Bo;
  function yb(e, t, r, i, s, n) {
    let a = { path: s.path, requestStream: s.type === "clientStream" || s.type === "bidi", responseStream: s.type === "serverStream" || s.type === "bidi", requestDeserialize: s.deserialize, responseSerialize: s.serialize }, o = new Bo(t, r, i, s, n);
    return e.reduce((l, c) => c(a, l), o);
  }
});
var dm = (0, import_chunk_w1d7ygsk.V)(function(dr) {
  var Rb = dr && dr.__runInitializers || function(e, t, r) {
    var i = arguments.length > 2;
    for (var s = 0; s < t.length; s++) r = i ? t[s].call(e, r) : t[s].call(e);
    return i ? r : void 0;
  }, bb = dr && dr.__esDecorate || function(e, t, r, i, s, n) {
    function a(E) {
      if (E !== void 0 && typeof E !== "function") throw TypeError("Function expected");
      return E;
    }
    var o = i.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", c = !t && e ? i.static ? e : e.prototype : null, u = t || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), d, h = false;
    for (var m = r.length - 1; m >= 0; m--) {
      var f = {};
      for (var y in i) f[y] = y === "access" ? {} : i[y];
      for (var y in i.access) f.access[y] = i.access[y];
      f.addInitializer = function(E) {
        if (h) throw TypeError("Cannot add initializers after decoration has completed");
        n.push(a(E || null));
      };
      var C = (0, r[m])(o === "accessor" ? { get: u.get, set: u.set } : u[l], f);
      if (o === "accessor") {
        if (C === void 0) continue;
        if (C === null || typeof C !== "object") throw TypeError("Object expected");
        if (d = a(C.get)) u.get = d;
        if (d = a(C.set)) u.set = d;
        if (d = a(C.init)) s.unshift(d);
      } else if (d = a(C)) if (o === "field") s.unshift(d);
      else u[l] = d;
    }
    if (c) Object.defineProperty(c, i.name, u);
    h = true;
  };
  Object.defineProperty(dr, "__esModule", { value: true });
  dr.Server = void 0;
  var Y = (0, import_chunk_w1d7ygsk.ft)("http2"), um = (0, import_chunk_w1d7ygsk.ft)("util"), P = x(), Je = Og(), hi = dn(), Cn = tt(), Ke = K(), Re = Pe(), re = we(), D = Zt(), En = zo(), di = 2147483647, Ho = 2147483647, Ob = 2e4, am = 2147483647, { HTTP2_HEADER_PATH: om } = Y.constants, wb = "server", lm = Buffer.from("max_age");
  function cm(e) {
    Ke.trace(P.LogVerbosity.DEBUG, "server_call", e);
  }
  function Ab() {
  }
  function Pb(e) {
    return function(t, r) {
      return um.deprecate(t, e);
    };
  }
  function Wo(e) {
    return { code: P.Status.UNIMPLEMENTED, details: `The server does not implement the method ${e}` };
  }
  function Nb(e, t) {
    let r = Wo(t);
    switch (e) {
      case "unary":
        return (i, s) => {
          s(r, null);
        };
      case "clientStream":
        return (i, s) => {
          s(r, null);
        };
      case "serverStream":
        return (i) => {
          i.emit("error", r);
        };
      case "bidi":
        return (i) => {
          i.emit("error", r);
        };
      default:
        throw Error(`Invalid handlerType ${e}`);
    }
  }
  var Mb = (() => {
    var e;
    let t = [], r;
    return e = class {
      constructor(s) {
        var n, a, o, l, c, u;
        if (this.boundPorts = (Rb(this, t), /* @__PURE__ */ new Map()), this.http2Servers = /* @__PURE__ */ new Map(), this.sessionIdleTimeouts = /* @__PURE__ */ new Map(), this.handlers = /* @__PURE__ */ new Map(), this.sessions = /* @__PURE__ */ new Map(), this.started = false, this.shutdown = false, this.serverAddressString = "null", this.channelzEnabled = true, this.options = s !== null && s !== void 0 ? s : {}, this.options["grpc.enable_channelz"] === 0) this.channelzEnabled = false, this.channelzTrace = new D.ChannelzTraceStub(), this.callTracker = new D.ChannelzCallTrackerStub(), this.listenerChildrenTracker = new D.ChannelzChildrenTrackerStub(), this.sessionChildrenTracker = new D.ChannelzChildrenTrackerStub();
        else this.channelzTrace = new D.ChannelzTrace(), this.callTracker = new D.ChannelzCallTracker(), this.listenerChildrenTracker = new D.ChannelzChildrenTracker(), this.sessionChildrenTracker = new D.ChannelzChildrenTracker();
        if (this.channelzRef = D.registerChannelzServer("server", () => this.getChannelzInfo(), this.channelzEnabled), this.channelzTrace.addTrace("CT_INFO", "Server created"), this.maxConnectionAgeMs = (n = this.options["grpc.max_connection_age_ms"]) !== null && n !== void 0 ? n : di, this.maxConnectionAgeGraceMs = (a = this.options["grpc.max_connection_age_grace_ms"]) !== null && a !== void 0 ? a : di, this.keepaliveTimeMs = (o = this.options["grpc.keepalive_time_ms"]) !== null && o !== void 0 ? o : Ho, this.keepaliveTimeoutMs = (l = this.options["grpc.keepalive_timeout_ms"]) !== null && l !== void 0 ? l : Ob, this.sessionIdleTimeout = (c = this.options["grpc.max_connection_idle_ms"]) !== null && c !== void 0 ? c : am, this.commonServerOptions = { maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER }, "grpc-node.max_session_memory" in this.options) this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
        else this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
        if ("grpc.max_concurrent_streams" in this.options) this.commonServerOptions.settings = { maxConcurrentStreams: this.options["grpc.max_concurrent_streams"] };
        this.interceptors = (u = this.options.interceptors) !== null && u !== void 0 ? u : [], this.trace("Server constructed");
      }
      getChannelzInfo() {
        return { trace: this.channelzTrace, callTracker: this.callTracker, listenerChildren: this.listenerChildrenTracker.getChildLists(), sessionChildren: this.sessionChildrenTracker.getChildLists() };
      }
      getChannelzSessionInfo(s) {
        var n, a, o;
        let l = this.sessions.get(s), c = s.socket, u = c.remoteAddress ? Re.stringToSubchannelAddress(c.remoteAddress, c.remotePort) : null, d = c.localAddress ? Re.stringToSubchannelAddress(c.localAddress, c.localPort) : null, h;
        if (s.encrypted) {
          let f = c, y = f.getCipher(), C = f.getCertificate(), E = f.getPeerCertificate();
          h = { cipherSuiteStandardName: (n = y.standardName) !== null && n !== void 0 ? n : null, cipherSuiteOtherName: y.standardName ? null : y.name, localCertificate: C && "raw" in C ? C.raw : null, remoteCertificate: E && "raw" in E ? E.raw : null };
        } else h = null;
        return { remoteAddress: u, localAddress: d, security: h, remoteName: null, streamsStarted: l.streamTracker.callsStarted, streamsSucceeded: l.streamTracker.callsSucceeded, streamsFailed: l.streamTracker.callsFailed, messagesSent: l.messagesSent, messagesReceived: l.messagesReceived, keepAlivesSent: l.keepAlivesSent, lastLocalStreamCreatedTimestamp: null, lastRemoteStreamCreatedTimestamp: l.streamTracker.lastCallStartedTimestamp, lastMessageSentTimestamp: l.lastMessageSentTimestamp, lastMessageReceivedTimestamp: l.lastMessageReceivedTimestamp, localFlowControlWindow: (a = s.state.localWindowSize) !== null && a !== void 0 ? a : null, remoteFlowControlWindow: (o = s.state.remoteWindowSize) !== null && o !== void 0 ? o : null };
      }
      trace(s) {
        Ke.trace(P.LogVerbosity.DEBUG, wb, "(" + this.channelzRef.id + ") " + s);
      }
      keepaliveTrace(s) {
        Ke.trace(P.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + s);
      }
      addProtoService() {
        throw Error("Not implemented. Use addService() instead");
      }
      addService(s, n) {
        if (s === null || typeof s !== "object" || n === null || typeof n !== "object") throw Error("addService() requires two objects as arguments");
        let a = Object.keys(s);
        if (a.length === 0) throw Error("Cannot add an empty service to a server");
        a.forEach((o) => {
          let l = s[o], c;
          if (l.requestStream) if (l.responseStream) c = "bidi";
          else c = "clientStream";
          else if (l.responseStream) c = "serverStream";
          else c = "unary";
          let u = n[o], d;
          if (u === void 0 && typeof l.originalName === "string") u = n[l.originalName];
          if (u !== void 0) d = u.bind(n);
          else d = Nb(c, o);
          if (this.register(l.path, d, l.responseSerialize, l.requestDeserialize, c) === false) throw Error(`Method handler for ${l.path} already provided.`);
        });
      }
      removeService(s) {
        if (s === null || typeof s !== "object") throw Error("removeService() requires object as argument");
        Object.keys(s).forEach((a) => {
          let o = s[a];
          this.unregister(o.path);
        });
      }
      bind(s, n) {
        throw Error("Not implemented. Use bindAsync() instead");
      }
      experimentalRegisterListenerToChannelz(s) {
        return D.registerChannelzSocket(Re.subchannelAddressToString(s), () => ({ localAddress: s, remoteAddress: null, security: null, remoteName: null, streamsStarted: 0, streamsSucceeded: 0, streamsFailed: 0, messagesSent: 0, messagesReceived: 0, keepAlivesSent: 0, lastLocalStreamCreatedTimestamp: null, lastRemoteStreamCreatedTimestamp: null, lastMessageSentTimestamp: null, lastMessageReceivedTimestamp: null, localFlowControlWindow: null, remoteFlowControlWindow: null }), this.channelzEnabled);
      }
      experimentalUnregisterListenerFromChannelz(s) {
        D.unregisterChannelzRef(s);
      }
      createHttp2Server(s) {
        let n;
        if (s._isSecure()) {
          let a = s._getConstructorOptions(), o = s._getSecureContextOptions(), l = Object.assign(Object.assign(Object.assign(Object.assign({}, this.commonServerOptions), a), o), { enableTrace: this.options["grpc-node.tls_enable_trace"] === 1 }), c = o !== null;
          this.trace("Initial credentials valid: " + c), n = Y.createSecureServer(l), n.prependListener("connection", (d) => {
            if (!c) this.trace("Dropped connection from " + JSON.stringify(d.address()) + " due to unloaded credentials"), d.destroy();
          }), n.on("secureConnection", (d) => {
            d.on("error", (h) => {
              this.trace("An incoming TLS connection closed with error: " + h.message);
            });
          });
          let u = (d) => {
            if (d) {
              let h = n;
              try {
                h.setSecureContext(d);
              } catch (m) {
                Ke.log(P.LogVerbosity.ERROR, "Failed to set secure context with error " + m.message), d = null;
              }
            }
            c = d !== null, this.trace("Post-update credentials valid: " + c);
          };
          s._addWatcher(u), n.on("close", () => {
            s._removeWatcher(u);
          });
        } else n = Y.createServer(this.commonServerOptions);
        return n.setTimeout(0, Ab), this._setupHandlers(n, s._getInterceptors()), n;
      }
      bindOneAddress(s, n) {
        this.trace("Attempting to bind " + Re.subchannelAddressToString(s));
        let a = this.createHttp2Server(n.credentials);
        return new Promise((o, l) => {
          let c = (u) => {
            this.trace("Failed to bind " + Re.subchannelAddressToString(s) + " with error " + u.message), o({ port: "port" in s ? s.port : 1, error: u.message });
          };
          a.once("error", c), a.listen(s, () => {
            let u = a.address(), d;
            if (typeof u === "string") d = { path: u };
            else d = { host: u.address, port: u.port };
            let h = this.experimentalRegisterListenerToChannelz(d);
            this.listenerChildrenTracker.refChild(h), this.http2Servers.set(a, { channelzRef: h, sessions: /* @__PURE__ */ new Set(), ownsChannelzRef: true }), n.listeningServers.add(a), this.trace("Successfully bound " + Re.subchannelAddressToString(d)), o({ port: "port" in d ? d.port : 1 }), a.removeListener("error", c);
          });
        });
      }
      async bindManyPorts(s, n) {
        if (s.length === 0) return { count: 0, port: 0, errors: [] };
        if (Re.isTcpSubchannelAddress(s[0]) && s[0].port === 0) {
          let a = await this.bindOneAddress(s[0], n);
          if (a.error) {
            let o = await this.bindManyPorts(s.slice(1), n);
            return Object.assign(Object.assign({}, o), { errors: [a.error, ...o.errors] });
          } else {
            let o = s.slice(1).map((u) => Re.isTcpSubchannelAddress(u) ? { host: u.host, port: a.port } : u), l = await Promise.all(o.map((u) => this.bindOneAddress(u, n))), c = [a, ...l];
            return { count: c.filter((u) => u.error === void 0).length, port: a.port, errors: c.filter((u) => u.error).map((u) => u.error) };
          }
        } else {
          let a = await Promise.all(s.map((o) => this.bindOneAddress(o, n)));
          return { count: a.filter((o) => o.error === void 0).length, port: a[0].port, errors: a.filter((o) => o.error).map((o) => o.error) };
        }
      }
      async bindAddressList(s, n) {
        let a = await this.bindManyPorts(s, n);
        if (a.count > 0) {
          if (a.count < s.length) Ke.log(P.LogVerbosity.INFO, `WARNING Only ${a.count} addresses added out of total ${s.length} resolved`);
          return a.port;
        } else {
          let o = `No address added out of total ${s.length} resolved`;
          throw Ke.log(P.LogVerbosity.ERROR, o), Error(`${o} errors: [${a.errors.join(",")}]`);
        }
      }
      resolvePort(s) {
        return new Promise((n, a) => {
          let o = false;
          Cn.createResolver(s, (u, d, h, m) => {
            if (o) return true;
            if (o = true, !u.ok) return a(Error(u.error.details)), true;
            let f = [].concat(...u.value.map((y) => y.addresses));
            if (f.length === 0) return a(Error(`No addresses resolved for port ${s}`)), true;
            return n(f), true;
          }, this.options).updateResolution();
        });
      }
      async bindPort(s, n) {
        let a = await this.resolvePort(s);
        if (n.cancelled) throw this.completeUnbind(n), Error("bindAsync operation cancelled by unbind call");
        let o = await this.bindAddressList(a, n);
        if (n.cancelled) throw this.completeUnbind(n), Error("bindAsync operation cancelled by unbind call");
        return o;
      }
      normalizePort(s) {
        let n = re.parseUri(s);
        if (n === null) throw Error(`Could not parse port "${s}"`);
        let a = Cn.mapUriDefaultScheme(n);
        if (a === null) throw Error(`Could not get a default scheme for port "${s}"`);
        return a;
      }
      bindAsync(s, n, a) {
        if (this.shutdown) throw Error("bindAsync called after shutdown");
        if (typeof s !== "string") throw TypeError("port must be a string");
        if (n === null || !(n instanceof hi.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        if (typeof a !== "function") throw TypeError("callback must be a function");
        this.trace("bindAsync port=" + s);
        let o = this.normalizePort(s), l = (h, m) => {
          process.nextTick(() => a(h, m));
        }, c = this.boundPorts.get(re.uriToString(o));
        if (c) {
          if (!n._equals(c.credentials)) {
            l(Error(`${s} already bound with incompatible credentials`), 0);
            return;
          }
          if (c.cancelled = false, c.completionPromise) c.completionPromise.then((h) => a(null, h), (h) => a(h, 0));
          else l(null, c.portNumber);
          return;
        }
        c = { mapKey: re.uriToString(o), originalUri: o, completionPromise: null, cancelled: false, portNumber: 0, credentials: n, listeningServers: /* @__PURE__ */ new Set() };
        let u = re.splitHostPort(o.path), d = this.bindPort(o, c);
        if (c.completionPromise = d, (u === null || u === void 0 ? void 0 : u.port) === 0) d.then((h) => {
          let m = { scheme: o.scheme, authority: o.authority, path: re.combineHostPort({ host: u.host, port: h }) };
          c.mapKey = re.uriToString(m), c.completionPromise = null, c.portNumber = h, this.boundPorts.set(c.mapKey, c), a(null, h);
        }, (h) => {
          a(h, 0);
        });
        else this.boundPorts.set(c.mapKey, c), d.then((h) => {
          c.completionPromise = null, c.portNumber = h, a(null, h);
        }, (h) => {
          a(h, 0);
        });
      }
      registerInjectorToChannelz() {
        return D.registerChannelzSocket("injector", () => ({ localAddress: null, remoteAddress: null, security: null, remoteName: null, streamsStarted: 0, streamsSucceeded: 0, streamsFailed: 0, messagesSent: 0, messagesReceived: 0, keepAlivesSent: 0, lastLocalStreamCreatedTimestamp: null, lastRemoteStreamCreatedTimestamp: null, lastMessageSentTimestamp: null, lastMessageReceivedTimestamp: null, localFlowControlWindow: null, remoteFlowControlWindow: null }), this.channelzEnabled);
      }
      experimentalCreateConnectionInjectorWithChannelzRef(s, n, a = false) {
        if (s === null || !(s instanceof hi.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        if (this.channelzEnabled) this.listenerChildrenTracker.refChild(n);
        let o = this.createHttp2Server(s), l = /* @__PURE__ */ new Set();
        return this.http2Servers.set(o, { channelzRef: n, sessions: l, ownsChannelzRef: a }), { injectConnection: (c) => {
          o.emit("connection", c);
        }, drain: (c) => {
          var u, d;
          for (let h of l) this.closeSession(h);
          (d = (u = setTimeout(() => {
            for (let h of l) h.destroy(Y.constants.NGHTTP2_CANCEL);
          }, c)).unref) === null || d === void 0 || d.call(u);
        }, destroy: () => {
          this.closeServer(o);
          for (let c of l) this.closeSession(c);
        } };
      }
      createConnectionInjector(s) {
        if (s === null || !(s instanceof hi.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        let n = this.registerInjectorToChannelz();
        return this.experimentalCreateConnectionInjectorWithChannelzRef(s, n, true);
      }
      closeServer(s, n) {
        this.trace("Closing server with address " + JSON.stringify(s.address()));
        let a = this.http2Servers.get(s);
        s.close(() => {
          if (a && a.ownsChannelzRef) this.listenerChildrenTracker.unrefChild(a.channelzRef), D.unregisterChannelzRef(a.channelzRef);
          this.http2Servers.delete(s), n === null || n === void 0 || n();
        });
      }
      closeSession(s, n) {
        var a;
        this.trace("Closing session initiated by " + ((a = s.socket) === null || a === void 0 ? void 0 : a.remoteAddress));
        let o = this.sessions.get(s), l = () => {
          if (o) this.sessionChildrenTracker.unrefChild(o.ref), D.unregisterChannelzRef(o.ref);
          n === null || n === void 0 || n();
        };
        if (s.closed) queueMicrotask(l);
        else s.close(l);
      }
      completeUnbind(s) {
        for (let n of s.listeningServers) {
          let a = this.http2Servers.get(n);
          if (this.closeServer(n, () => {
            s.listeningServers.delete(n);
          }), a) for (let o of a.sessions) this.closeSession(o);
        }
        this.boundPorts.delete(s.mapKey);
      }
      unbind(s) {
        this.trace("unbind port=" + s);
        let n = this.normalizePort(s), a = re.splitHostPort(n.path);
        if ((a === null || a === void 0 ? void 0 : a.port) === 0) throw Error("Cannot unbind port 0");
        let o = this.boundPorts.get(re.uriToString(n));
        if (o) if (this.trace("unbinding " + o.mapKey + " originally bound as " + re.uriToString(o.originalUri)), o.completionPromise) o.cancelled = true;
        else this.completeUnbind(o);
      }
      drain(s, n) {
        var a, o;
        this.trace("drain port=" + s + " graceTimeMs=" + n);
        let l = this.normalizePort(s), c = re.splitHostPort(l.path);
        if ((c === null || c === void 0 ? void 0 : c.port) === 0) throw Error("Cannot drain port 0");
        let u = this.boundPorts.get(re.uriToString(l));
        if (!u) return;
        let d = /* @__PURE__ */ new Set();
        for (let h of u.listeningServers) {
          let m = this.http2Servers.get(h);
          if (m) for (let f of m.sessions) d.add(f), this.closeSession(f, () => {
            d.delete(f);
          });
        }
        (o = (a = setTimeout(() => {
          for (let h of d) h.destroy(Y.constants.NGHTTP2_CANCEL);
        }, n)).unref) === null || o === void 0 || o.call(a);
      }
      forceShutdown() {
        for (let s of this.boundPorts.values()) s.cancelled = true;
        this.boundPorts.clear();
        for (let s of this.http2Servers.keys()) this.closeServer(s);
        this.sessions.forEach((s, n) => {
          this.closeSession(n), n.destroy(Y.constants.NGHTTP2_CANCEL);
        }), this.sessions.clear(), D.unregisterChannelzRef(this.channelzRef), this.shutdown = true;
      }
      register(s, n, a, o, l) {
        if (this.handlers.has(s)) return false;
        return this.handlers.set(s, { func: n, serialize: a, deserialize: o, type: l, path: s }), true;
      }
      unregister(s) {
        return this.handlers.delete(s);
      }
      start() {
        if (this.http2Servers.size === 0 || [...this.http2Servers.keys()].every((s) => !s.listening)) throw Error("server must be bound in order to start");
        if (this.started === true) throw Error("server is already started");
        this.started = true;
      }
      tryShutdown(s) {
        var n;
        let a = (c) => {
          D.unregisterChannelzRef(this.channelzRef), s(c);
        }, o = 0;
        function l() {
          if (o--, o === 0) a();
        }
        this.shutdown = true;
        for (let [c, u] of this.http2Servers.entries()) {
          o++;
          let d = u.channelzRef.name;
          this.trace("Waiting for server " + d + " to close"), this.closeServer(c, () => {
            this.trace("Server " + d + " finished closing"), l();
          });
          for (let h of u.sessions.keys()) {
            o++;
            let m = (n = h.socket) === null || n === void 0 ? void 0 : n.remoteAddress;
            this.trace("Waiting for session " + m + " to close"), this.closeSession(h, () => {
              this.trace("Session " + m + " finished closing"), l();
            });
          }
        }
        if (o === 0) a();
      }
      addHttp2Port() {
        throw Error("Not yet implemented");
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      _verifyContentType(s, n) {
        let a = n[Y.constants.HTTP2_HEADER_CONTENT_TYPE];
        if (typeof a !== "string" || !a.startsWith("application/grpc")) return s.respond({ [Y.constants.HTTP2_HEADER_STATUS]: Y.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE }, { endStream: true }), false;
        return true;
      }
      _retrieveHandler(s) {
        cm("Received call to method " + s + " at address " + this.serverAddressString);
        let n = this.handlers.get(s);
        if (n === void 0) return cm("No handler registered for method " + s + ". Sending UNIMPLEMENTED status."), null;
        return n;
      }
      _respondWithError(s, n, a = null) {
        var o, l;
        let c = Object.assign({ "grpc-status": (o = s.code) !== null && o !== void 0 ? o : P.Status.INTERNAL, "grpc-message": s.details, [Y.constants.HTTP2_HEADER_STATUS]: Y.constants.HTTP_STATUS_OK, [Y.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto" }, (l = s.metadata) === null || l === void 0 ? void 0 : l.toHttp2Headers());
        n.respond(c, { endStream: true }), this.callTracker.addCallFailed(), a === null || a === void 0 || a.streamTracker.addCallFailed();
      }
      _channelzHandler(s, n, a) {
        n.once("error", (h) => {
        }), this.onStreamOpened(n);
        let o = this.sessions.get(n.session);
        if (this.callTracker.addCallStarted(), o === null || o === void 0 || o.streamTracker.addCallStarted(), !this._verifyContentType(n, a)) {
          this.callTracker.addCallFailed(), o === null || o === void 0 || o.streamTracker.addCallFailed();
          return;
        }
        let l = a[om], c = this._retrieveHandler(l);
        if (!c) {
          this._respondWithError(Wo(l), n, o);
          return;
        }
        let u = { addMessageSent: () => {
          if (o) o.messagesSent += 1, o.lastMessageSentTimestamp = /* @__PURE__ */ new Date();
        }, addMessageReceived: () => {
          if (o) o.messagesReceived += 1, o.lastMessageReceivedTimestamp = /* @__PURE__ */ new Date();
        }, onCallEnd: (h) => {
          if (h.code === P.Status.OK) this.callTracker.addCallSucceeded();
          else this.callTracker.addCallFailed();
        }, onStreamEnd: (h) => {
          if (o) if (h) o.streamTracker.addCallSucceeded();
          else o.streamTracker.addCallFailed();
        } }, d = En.getServerInterceptingCall([...s, ...this.interceptors], n, a, u, c, this.options);
        if (!this._runHandlerForCall(d, c)) this.callTracker.addCallFailed(), o === null || o === void 0 || o.streamTracker.addCallFailed(), d.sendStatus({ code: P.Status.INTERNAL, details: `Unknown handler type: ${c.type}` });
      }
      _streamHandler(s, n, a) {
        if (n.once("error", (u) => {
        }), this.onStreamOpened(n), this._verifyContentType(n, a) !== true) return;
        let o = a[om], l = this._retrieveHandler(o);
        if (!l) {
          this._respondWithError(Wo(o), n, null);
          return;
        }
        let c = En.getServerInterceptingCall([...s, ...this.interceptors], n, a, null, l, this.options);
        if (!this._runHandlerForCall(c, l)) c.sendStatus({ code: P.Status.INTERNAL, details: `Unknown handler type: ${l.type}` });
      }
      _runHandlerForCall(s, n) {
        let { type: a } = n;
        if (a === "unary") Ib(s, n);
        else if (a === "clientStream") xb(s, n);
        else if (a === "serverStream") kb(s, n);
        else if (a === "bidi") Db(s, n);
        else return false;
        return true;
      }
      _setupHandlers(s, n) {
        if (s === null) return;
        let a = s.address(), o = "null";
        if (a) if (typeof a === "string") o = a;
        else o = a.address + ":" + a.port;
        this.serverAddressString = o;
        let l = this.channelzEnabled ? this._channelzHandler : this._streamHandler, c = this.channelzEnabled ? this._channelzSessionHandler(s) : this._sessionHandler(s);
        s.on("stream", l.bind(this, n)), s.on("session", c);
      }
      _sessionHandler(s) {
        return (n) => {
          var a, o;
          (a = this.http2Servers.get(s)) === null || a === void 0 || a.sessions.add(n);
          let l = null, c = null, u = null, d = false, h = this.enableIdleTimeout(n);
          if (this.maxConnectionAgeMs !== di) {
            let E = this.maxConnectionAgeMs / 10, A = Math.random() * E * 2 - E;
            l = setTimeout(() => {
              var te, v;
              d = true, this.trace("Connection dropped by max connection age: " + ((te = n.socket) === null || te === void 0 ? void 0 : te.remoteAddress));
              try {
                n.goaway(Y.constants.NGHTTP2_NO_ERROR, 2147483647, lm);
              } catch (q) {
                n.destroy();
                return;
              }
              if (n.close(), this.maxConnectionAgeGraceMs !== di) c = setTimeout(() => {
                n.destroy();
              }, this.maxConnectionAgeGraceMs), (v = c.unref) === null || v === void 0 || v.call(c);
            }, this.maxConnectionAgeMs + A), (o = l.unref) === null || o === void 0 || o.call(l);
          }
          let m = () => {
            if (u) clearTimeout(u), u = null;
          }, f = () => !n.destroyed && this.keepaliveTimeMs < Ho && this.keepaliveTimeMs > 0, y, C = () => {
            var E;
            if (!f()) return;
            this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), u = setTimeout(() => {
              m(), y();
            }, this.keepaliveTimeMs), (E = u.unref) === null || E === void 0 || E.call(u);
          };
          y = () => {
            var E;
            if (!f()) return;
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
            let A = "";
            try {
              if (!n.ping((v, q, O) => {
                if (m(), v) this.keepaliveTrace("Ping failed with error: " + v.message), d = true, n.destroy();
                else this.keepaliveTrace("Received ping response"), C();
              })) A = "Ping returned false";
            } catch (te) {
              A = (te instanceof Error ? te.message : "") || "Unknown error";
            }
            if (A) {
              this.keepaliveTrace("Ping send failed: " + A), this.trace("Connection dropped due to ping send error: " + A), d = true, n.destroy();
              return;
            }
            u = setTimeout(() => {
              m(), this.keepaliveTrace("Ping timeout passed without response"), this.trace("Connection dropped by keepalive timeout"), d = true, n.destroy();
            }, this.keepaliveTimeoutMs), (E = u.unref) === null || E === void 0 || E.call(u);
          }, C(), n.on("close", () => {
            var E, A;
            if (!d) this.trace(`Connection dropped by client ${(E = n.socket) === null || E === void 0 ? void 0 : E.remoteAddress}`);
            if (l) clearTimeout(l);
            if (c) clearTimeout(c);
            if (m(), h !== null) clearTimeout(h.timeout), this.sessionIdleTimeouts.delete(n);
            (A = this.http2Servers.get(s)) === null || A === void 0 || A.sessions.delete(n);
          });
        };
      }
      _channelzSessionHandler(s) {
        return (n) => {
          var a, o, l, c;
          let u = D.registerChannelzSocket((o = (a = n.socket) === null || a === void 0 ? void 0 : a.remoteAddress) !== null && o !== void 0 ? o : "unknown", this.getChannelzSessionInfo.bind(this, n), this.channelzEnabled), d = { ref: u, streamTracker: new D.ChannelzCallTracker(), messagesSent: 0, messagesReceived: 0, keepAlivesSent: 0, lastMessageSentTimestamp: null, lastMessageReceivedTimestamp: null };
          (l = this.http2Servers.get(s)) === null || l === void 0 || l.sessions.add(n), this.sessions.set(n, d);
          let h = `${n.socket.remoteAddress}:${n.socket.remotePort}`;
          this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + h), this.trace("Connection established by client " + h), this.sessionChildrenTracker.refChild(u);
          let m = null, f = null, y = null, C = false, E = this.enableIdleTimeout(n);
          if (this.maxConnectionAgeMs !== di) {
            let O = this.maxConnectionAgeMs / 10, H = Math.random() * O * 2 - O;
            m = setTimeout(() => {
              var X;
              C = true, this.channelzTrace.addTrace("CT_INFO", "Connection dropped by max connection age from " + h);
              try {
                n.goaway(Y.constants.NGHTTP2_NO_ERROR, 2147483647, lm);
              } catch (k) {
                n.destroy();
                return;
              }
              if (n.close(), this.maxConnectionAgeGraceMs !== di) f = setTimeout(() => {
                n.destroy();
              }, this.maxConnectionAgeGraceMs), (X = f.unref) === null || X === void 0 || X.call(f);
            }, this.maxConnectionAgeMs + H), (c = m.unref) === null || c === void 0 || c.call(m);
          }
          let A = () => {
            if (y) clearTimeout(y), y = null;
          }, te = () => !n.destroyed && this.keepaliveTimeMs < Ho && this.keepaliveTimeMs > 0, v, q = () => {
            var O;
            if (!te()) return;
            this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), y = setTimeout(() => {
              A(), v();
            }, this.keepaliveTimeMs), (O = y.unref) === null || O === void 0 || O.call(y);
          };
          v = () => {
            var O;
            if (!te()) return;
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
            let H = "";
            try {
              if (!n.ping((k, le, qe) => {
                if (A(), k) this.keepaliveTrace("Ping failed with error: " + k.message), this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to error of a ping frame " + k.message + " return in " + le), C = true, n.destroy();
                else this.keepaliveTrace("Received ping response"), q();
              })) H = "Ping returned false";
            } catch (X) {
              H = (X instanceof Error ? X.message : "") || "Unknown error";
            }
            if (H) {
              this.keepaliveTrace("Ping send failed: " + H), this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to ping send error: " + H), C = true, n.destroy();
              return;
            }
            d.keepAlivesSent += 1, y = setTimeout(() => {
              A(), this.keepaliveTrace("Ping timeout passed without response"), this.channelzTrace.addTrace("CT_INFO", "Connection dropped by keepalive timeout from " + h), C = true, n.destroy();
            }, this.keepaliveTimeoutMs), (O = y.unref) === null || O === void 0 || O.call(y);
          }, q(), n.on("close", () => {
            var O;
            if (!C) this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + h);
            if (this.sessionChildrenTracker.unrefChild(u), D.unregisterChannelzRef(u), m) clearTimeout(m);
            if (f) clearTimeout(f);
            if (A(), E !== null) clearTimeout(E.timeout), this.sessionIdleTimeouts.delete(n);
            (O = this.http2Servers.get(s)) === null || O === void 0 || O.sessions.delete(n), this.sessions.delete(n);
          });
        };
      }
      enableIdleTimeout(s) {
        var n, a;
        if (this.sessionIdleTimeout >= am) return null;
        let o = { activeStreams: 0, lastIdle: Date.now(), onClose: this.onStreamClose.bind(this, s), timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, s) };
        (a = (n = o.timeout).unref) === null || a === void 0 || a.call(n), this.sessionIdleTimeouts.set(s, o);
        let { socket: l } = s;
        return this.trace("Enable idle timeout for " + l.remoteAddress + ":" + l.remotePort), o;
      }
      onIdleTimeout(s, n) {
        let { socket: a } = n, o = s.sessionIdleTimeouts.get(n);
        if (o !== void 0 && o.activeStreams === 0) if (Date.now() - o.lastIdle >= s.sessionIdleTimeout) s.trace("Session idle timeout triggered for " + (a === null || a === void 0 ? void 0 : a.remoteAddress) + ":" + (a === null || a === void 0 ? void 0 : a.remotePort) + " last idle at " + o.lastIdle), s.closeSession(n);
        else o.timeout.refresh();
      }
      onStreamOpened(s) {
        let n = s.session, a = this.sessionIdleTimeouts.get(n);
        if (a) a.activeStreams += 1, s.once("close", a.onClose);
      }
      onStreamClose(s) {
        var n, a;
        let o = this.sessionIdleTimeouts.get(s);
        if (o) {
          if (o.activeStreams -= 1, o.activeStreams === 0) o.lastIdle = Date.now(), o.timeout.refresh(), this.trace("Session onStreamClose" + ((n = s.socket) === null || n === void 0 ? void 0 : n.remoteAddress) + ":" + ((a = s.socket) === null || a === void 0 ? void 0 : a.remotePort) + " at " + o.lastIdle);
        }
      }
    }, (() => {
      let i = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      if (r = [Pb("Calling start() is no longer necessary. It can be safely omitted.")], bb(e, null, r, { kind: "method", name: "start", static: false, private: false, access: { has: (s) => "start" in s, get: (s) => s.start }, metadata: i }, null, t), i) Object.defineProperty(e, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: i });
    })(), e;
  })();
  dr.Server = Mb;
  async function Ib(e, t) {
    let r;
    function i(a, o, l, c) {
      if (a) {
        e.sendStatus(Je.serverErrorToStatus(a, l));
        return;
      }
      e.sendMessage(o, () => {
        e.sendStatus({ code: P.Status.OK, details: "OK", metadata: l !== null && l !== void 0 ? l : null });
      });
    }
    let s, n = null;
    e.start({ onReceiveMetadata(a) {
      s = a, e.startRead();
    }, onReceiveMessage(a) {
      if (n) {
        e.sendStatus({ code: P.Status.UNIMPLEMENTED, details: `Received a second request message for server streaming method ${t.path}`, metadata: null });
        return;
      }
      n = a, e.startRead();
    }, onReceiveHalfClose() {
      if (!n) {
        e.sendStatus({ code: P.Status.UNIMPLEMENTED, details: `Received no request message for server streaming method ${t.path}`, metadata: null });
        return;
      }
      r = new Je.ServerWritableStreamImpl(t.path, e, s, n);
      try {
        t.func(r, i);
      } catch (a) {
        e.sendStatus({ code: P.Status.UNKNOWN, details: `Server method handler threw error ${a.message}`, metadata: null });
      }
    }, onCancel() {
      if (r) r.cancelled = true, r.emit("cancelled", "cancelled");
    } });
  }
  function xb(e, t) {
    let r;
    function i(s, n, a, o) {
      if (s) {
        e.sendStatus(Je.serverErrorToStatus(s, a));
        return;
      }
      e.sendMessage(n, () => {
        e.sendStatus({ code: P.Status.OK, details: "OK", metadata: a !== null && a !== void 0 ? a : null });
      });
    }
    e.start({ onReceiveMetadata(s) {
      r = new Je.ServerDuplexStreamImpl(t.path, e, s);
      try {
        t.func(r, i);
      } catch (n) {
        e.sendStatus({ code: P.Status.UNKNOWN, details: `Server method handler threw error ${n.message}`, metadata: null });
      }
    }, onReceiveMessage(s) {
      r.push(s);
    }, onReceiveHalfClose() {
      r.push(null);
    }, onCancel() {
      if (r) r.cancelled = true, r.emit("cancelled", "cancelled"), r.destroy();
    } });
  }
  function kb(e, t) {
    let r, i, s = null;
    e.start({ onReceiveMetadata(n) {
      i = n, e.startRead();
    }, onReceiveMessage(n) {
      if (s) {
        e.sendStatus({ code: P.Status.UNIMPLEMENTED, details: `Received a second request message for server streaming method ${t.path}`, metadata: null });
        return;
      }
      s = n, e.startRead();
    }, onReceiveHalfClose() {
      if (!s) {
        e.sendStatus({ code: P.Status.UNIMPLEMENTED, details: `Received no request message for server streaming method ${t.path}`, metadata: null });
        return;
      }
      r = new Je.ServerWritableStreamImpl(t.path, e, i, s);
      try {
        t.func(r);
      } catch (n) {
        e.sendStatus({ code: P.Status.UNKNOWN, details: `Server method handler threw error ${n.message}`, metadata: null });
      }
    }, onCancel() {
      if (r) r.cancelled = true, r.emit("cancelled", "cancelled"), r.destroy();
    } });
  }
  function Db(e, t) {
    let r;
    e.start({ onReceiveMetadata(i) {
      r = new Je.ServerDuplexStreamImpl(t.path, e, i);
      try {
        t.func(r);
      } catch (s) {
        e.sendStatus({ code: P.Status.UNKNOWN, details: `Server method handler threw error ${s.message}`, metadata: null });
      }
    }, onReceiveMessage(i) {
      r.push(i);
    }, onReceiveHalfClose() {
      r.push(null);
    }, onCancel() {
      if (r) r.cancelled = true, r.emit("cancelled", "cancelled"), r.destroy();
    } });
  }
});
var gm = (0, import_chunk_w1d7ygsk.V)(function(fm) {
  Object.defineProperty(fm, "__esModule", { value: true });
  fm.StatusBuilder = void 0;
  class hm {
    constructor() {
      this.code = null, this.details = null, this.metadata = null;
    }
    withCode(e) {
      return this.code = e, this;
    }
    withDetails(e) {
      return this.details = e, this;
    }
    withMetadata(e) {
      return this.metadata = e, this;
    }
    build() {
      let e = {};
      if (this.code !== null) e.code = this.code;
      if (this.details !== null) e.details = this.details;
      if (this.metadata !== null) e.metadata = this.metadata;
      return e;
    }
  }
  fm.StatusBuilder = hm;
});
var ji = (0, import_chunk_w1d7ygsk.V)(function(Tm) {
  Object.defineProperty(Tm, "__esModule", { value: true });
  Tm.LeafLoadBalancer = Tm.PickFirstLoadBalancer = Tm.PickFirstLoadBalancingConfig = void 0;
  Tm.shuffled = Sm;
  Tm.setup = Bb;
  var fi = Gt(), N = Ae(), be = kt(), Tn = Pe(), mm = K(), vm = x(), Rn = Pe(), bn = (0, import_chunk_w1d7ygsk.ft)("net"), ym = vr(), Lb = "pick_first";
  function Hi(e) {
    mm.trace(vm.LogVerbosity.DEBUG, Lb, e);
  }
  var Wi = "pick_first", Fb = 250;
  class pi {
    constructor(e) {
      this.shuffleAddressList = e;
    }
    getLoadBalancerName() {
      return Wi;
    }
    toJsonObject() {
      return { [Wi]: { shuffleAddressList: this.shuffleAddressList } };
    }
    getShuffleAddressList() {
      return this.shuffleAddressList;
    }
    static createFromJson(e) {
      if ("shuffleAddressList" in e && typeof e.shuffleAddressList !== "boolean") throw Error("pick_first config field shuffleAddressList must be a boolean if provided");
      return new pi(e.shuffleAddressList === true);
    }
  }
  Tm.PickFirstLoadBalancingConfig = pi;
  class _m {
    constructor(e) {
      this.subchannel = e;
    }
    pick(e) {
      return { pickResultType: be.PickResultType.COMPLETE, subchannel: this.subchannel, status: null, onCallStarted: null, onCallEnded: null };
    }
  }
  function Sm(e) {
    let t = e.slice();
    for (let r = t.length - 1; r > 1; r--) {
      let i = Math.floor(Math.random() * (r + 1)), s = t[r];
      t[r] = t[i], t[i] = s;
    }
    return t;
  }
  function qb(e) {
    if (e.length === 0) return [];
    let t = [], r = [], i = [], s = Rn.isTcpSubchannelAddress(e[0]) && bn.isIPv6(e[0].host);
    for (let o of e) if (Rn.isTcpSubchannelAddress(o) && bn.isIPv6(o.host)) r.push(o);
    else i.push(o);
    let n = s ? r : i, a = s ? i : r;
    for (let o = 0; o < Math.max(n.length, a.length); o++) {
      if (o < n.length) t.push(n[o]);
      if (o < a.length) t.push(a[o]);
    }
    return t;
  }
  var Cm = "grpc-node.internal.pick-first.report_health_status";
  class On {
    constructor(e) {
      this.channelControlHelper = e, this.children = [], this.currentState = N.ConnectivityState.IDLE, this.currentSubchannelIndex = 0, this.currentPick = null, this.subchannelStateListener = (t, r, i, s, n) => {
        this.onSubchannelStateUpdate(t, r, i, n);
      }, this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState(), this.stickyTransientFailureMode = false, this.reportHealthStatus = false, this.lastError = null, this.latestAddressList = null, this.latestOptions = {}, this.latestResolutionNote = "", this.connectionDelayTimeout = setTimeout(() => {
      }, 0), clearTimeout(this.connectionDelayTimeout);
    }
    allChildrenHaveReportedTF() {
      return this.children.every((e) => e.hasReportedTransientFailure);
    }
    resetChildrenReportedTF() {
      this.children.every((e) => e.hasReportedTransientFailure = false);
    }
    calculateAndReportNewState() {
      var e;
      if (this.currentPick) if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
        let t = `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`;
        this.updateState(N.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({ details: t }), t);
      } else this.updateState(N.ConnectivityState.READY, new _m(this.currentPick), null);
      else if (((e = this.latestAddressList) === null || e === void 0 ? void 0 : e.length) === 0) {
        let t = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
        this.updateState(N.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({ details: t }), t);
      } else if (this.children.length === 0) this.updateState(N.ConnectivityState.IDLE, new be.QueuePicker(this), null);
      else if (this.stickyTransientFailureMode) {
        let t = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
        this.updateState(N.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({ details: t }), t);
      } else this.updateState(N.ConnectivityState.CONNECTING, new be.QueuePicker(this), null);
    }
    requestReresolution() {
      this.channelControlHelper.requestReresolution();
    }
    maybeEnterStickyTransientFailureMode() {
      if (!this.allChildrenHaveReportedTF()) return;
      if (this.requestReresolution(), this.resetChildrenReportedTF(), this.stickyTransientFailureMode) {
        this.calculateAndReportNewState();
        return;
      }
      this.stickyTransientFailureMode = true;
      for (let { subchannel: e } of this.children) e.startConnecting();
      this.calculateAndReportNewState();
    }
    removeCurrentPick() {
      if (this.currentPick !== null) this.currentPick.removeConnectivityStateListener(this.subchannelStateListener), this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef()), this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener), this.currentPick.unref(), this.currentPick = null;
    }
    onSubchannelStateUpdate(e, t, r, i) {
      var s;
      if ((s = this.currentPick) === null || s === void 0 ? void 0 : s.realSubchannelEquals(e)) {
        if (r !== N.ConnectivityState.READY) this.removeCurrentPick(), this.calculateAndReportNewState();
        return;
      }
      for (let [n, a] of this.children.entries()) if (e.realSubchannelEquals(a.subchannel)) {
        if (r === N.ConnectivityState.READY) this.pickSubchannel(a.subchannel);
        if (r === N.ConnectivityState.TRANSIENT_FAILURE) {
          if (a.hasReportedTransientFailure = true, i) this.lastError = i;
          if (this.maybeEnterStickyTransientFailureMode(), n === this.currentSubchannelIndex) this.startNextSubchannelConnecting(n + 1);
        }
        a.subchannel.startConnecting();
        return;
      }
    }
    startNextSubchannelConnecting(e) {
      clearTimeout(this.connectionDelayTimeout);
      for (let [t, r] of this.children.entries()) if (t >= e) {
        let i = r.subchannel.getConnectivityState();
        if (i === N.ConnectivityState.IDLE || i === N.ConnectivityState.CONNECTING) {
          this.startConnecting(t);
          return;
        }
      }
      this.maybeEnterStickyTransientFailureMode();
    }
    startConnecting(e) {
      var t, r;
      if (clearTimeout(this.connectionDelayTimeout), this.currentSubchannelIndex = e, this.children[e].subchannel.getConnectivityState() === N.ConnectivityState.IDLE) Hi("Start connecting to subchannel with address " + this.children[e].subchannel.getAddress()), process.nextTick(() => {
        var i;
        (i = this.children[e]) === null || i === void 0 || i.subchannel.startConnecting();
      });
      this.connectionDelayTimeout = setTimeout(() => {
        this.startNextSubchannelConnecting(e + 1);
      }, Fb), (r = (t = this.connectionDelayTimeout).unref) === null || r === void 0 || r.call(t);
    }
    pickSubchannel(e) {
      Hi("Pick subchannel with address " + e.getAddress()), this.stickyTransientFailureMode = false, e.ref(), this.channelControlHelper.addChannelzChild(e.getChannelzRef()), this.removeCurrentPick(), this.resetSubchannelList(), e.addConnectivityStateListener(this.subchannelStateListener), e.addHealthStateWatcher(this.pickedSubchannelHealthListener), this.currentPick = e, clearTimeout(this.connectionDelayTimeout), this.calculateAndReportNewState();
    }
    updateState(e, t, r) {
      Hi(N.ConnectivityState[this.currentState] + " -> " + N.ConnectivityState[e]), this.currentState = e, this.channelControlHelper.updateState(e, t, r);
    }
    resetSubchannelList() {
      for (let e of this.children) e.subchannel.removeConnectivityStateListener(this.subchannelStateListener), e.subchannel.unref(), this.channelControlHelper.removeChannelzChild(e.subchannel.getChannelzRef());
      this.currentSubchannelIndex = 0, this.children = [];
    }
    connectToAddressList(e, t) {
      Hi("connectToAddressList([" + e.map((i) => Tn.subchannelAddressToString(i)) + "])");
      let r = e.map((i) => ({ subchannel: this.channelControlHelper.createSubchannel(i, t), hasReportedTransientFailure: false }));
      for (let { subchannel: i } of r) if (i.getConnectivityState() === N.ConnectivityState.READY) {
        this.pickSubchannel(i);
        return;
      }
      for (let { subchannel: i } of r) i.ref(), this.channelControlHelper.addChannelzChild(i.getChannelzRef());
      this.resetSubchannelList(), this.children = r;
      for (let { subchannel: i } of this.children) i.addConnectivityStateListener(this.subchannelStateListener);
      for (let i of this.children) if (i.subchannel.getConnectivityState() === N.ConnectivityState.TRANSIENT_FAILURE) i.hasReportedTransientFailure = true;
      this.startNextSubchannelConnecting(0), this.calculateAndReportNewState();
    }
    updateAddressList(e, t, r, i) {
      if (!(t instanceof pi)) return false;
      if (!e.ok) {
        if (this.children.length === 0 && this.currentPick === null) this.channelControlHelper.updateState(N.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker(e.error), e.error.details);
        return true;
      }
      let s = e.value;
      if (this.reportHealthStatus = r[Cm], t.getShuffleAddressList()) s = Sm(s);
      let n = [].concat(...s.map((o) => o.addresses));
      Hi("updateAddressList([" + n.map((o) => Tn.subchannelAddressToString(o)) + "])");
      let a = qb(n);
      if (this.latestAddressList = a, this.latestOptions = r, this.connectToAddressList(a, r), this.latestResolutionNote = i, n.length > 0) return true;
      else return this.lastError = "No addresses resolved", false;
    }
    exitIdle() {
      if (this.currentState === N.ConnectivityState.IDLE && this.latestAddressList) this.connectToAddressList(this.latestAddressList, this.latestOptions);
    }
    resetBackoff() {
    }
    destroy() {
      this.resetSubchannelList(), this.removeCurrentPick();
    }
    getTypeName() {
      return Wi;
    }
  }
  Tm.PickFirstLoadBalancer = On;
  var Ub = new pi(false);
  class Em {
    constructor(e, t, r, i) {
      this.endpoint = e, this.options = r, this.resolutionNote = i, this.latestState = N.ConnectivityState.IDLE;
      let s = fi.createChildChannelControlHelper(t, { updateState: (n, a, o) => {
        this.latestState = n, this.latestPicker = a, t.updateState(n, a, o);
      } });
      this.pickFirstBalancer = new On(s), this.latestPicker = new be.QueuePicker(this.pickFirstBalancer);
    }
    startConnecting() {
      this.pickFirstBalancer.updateAddressList(ym.statusOrFromValue([this.endpoint]), Ub, Object.assign(Object.assign({}, this.options), { [Cm]: true }), this.resolutionNote);
    }
    updateEndpoint(e, t) {
      if (this.options = t, this.endpoint = e, this.latestState !== N.ConnectivityState.IDLE) this.startConnecting();
    }
    getConnectivityState() {
      return this.latestState;
    }
    getPicker() {
      return this.latestPicker;
    }
    getEndpoint() {
      return this.endpoint;
    }
    exitIdle() {
      this.pickFirstBalancer.exitIdle();
    }
    destroy() {
      this.pickFirstBalancer.destroy();
    }
  }
  Tm.LeafLoadBalancer = Em;
  function Bb() {
    fi.registerLoadBalancerType(Wi, On, pi), fi.registerDefaultLoadBalancerType(Wi);
  }
});
var Im = (0, import_chunk_w1d7ygsk.V)(function(Nm) {
  Object.defineProperty(Nm, "__esModule", { value: true });
  Nm.FileWatcherCertificateProvider = void 0;
  var bm = (0, import_chunk_w1d7ygsk.ft)("fs"), Om = K(), wm = x(), Am = (0, import_chunk_w1d7ygsk.ft)("util"), Gb = "certificate_provider";
  function wn(e) {
    Om.trace(wm.LogVerbosity.DEBUG, Gb, e);
  }
  var jo = Am.promisify(bm.readFile);
  class Pm {
    constructor(e) {
      if (this.config = e, this.refreshTimer = null, this.fileResultPromise = null, this.latestCaUpdate = void 0, this.caListeners = /* @__PURE__ */ new Set(), this.latestIdentityUpdate = void 0, this.identityListeners = /* @__PURE__ */ new Set(), this.lastUpdateTime = null, e.certificateFile === void 0 !== (e.privateKeyFile === void 0)) throw Error("certificateFile and privateKeyFile must be set or unset together");
      if (e.certificateFile === void 0 && e.caCertificateFile === void 0) throw Error("At least one of certificateFile and caCertificateFile must be set");
      wn("File watcher constructed with config " + JSON.stringify(e));
    }
    updateCertificates() {
      if (this.fileResultPromise) return;
      this.fileResultPromise = Promise.allSettled([this.config.certificateFile ? jo(this.config.certificateFile) : Promise.reject(), this.config.privateKeyFile ? jo(this.config.privateKeyFile) : Promise.reject(), this.config.caCertificateFile ? jo(this.config.caCertificateFile) : Promise.reject()]), this.fileResultPromise.then(([e, t, r]) => {
        if (!this.refreshTimer) return;
        if (wn("File watcher read certificates certificate " + e.status + ", privateKey " + t.status + ", CA certificate " + r.status), this.lastUpdateTime = /* @__PURE__ */ new Date(), this.fileResultPromise = null, e.status === "fulfilled" && t.status === "fulfilled") this.latestIdentityUpdate = { certificate: e.value, privateKey: t.value };
        else this.latestIdentityUpdate = null;
        if (r.status === "fulfilled") this.latestCaUpdate = { caCertificate: r.value };
        else this.latestCaUpdate = null;
        for (let i of this.identityListeners) i(this.latestIdentityUpdate);
        for (let i of this.caListeners) i(this.latestCaUpdate);
      }), wn("File watcher initiated certificate update");
    }
    maybeStartWatchingFiles() {
      if (!this.refreshTimer) {
        let e = this.lastUpdateTime ? (/* @__PURE__ */ new Date()).getTime() - this.lastUpdateTime.getTime() : 1 / 0;
        if (e > this.config.refreshIntervalMs) this.updateCertificates();
        if (e > this.config.refreshIntervalMs * 2) this.latestCaUpdate = void 0, this.latestIdentityUpdate = void 0;
        this.refreshTimer = setInterval(() => this.updateCertificates(), this.config.refreshIntervalMs), wn("File watcher started watching");
      }
    }
    maybeStopWatchingFiles() {
      if (this.caListeners.size === 0 && this.identityListeners.size === 0) {
        if (this.fileResultPromise = null, this.refreshTimer) clearInterval(this.refreshTimer), this.refreshTimer = null;
      }
    }
    addCaCertificateListener(e) {
      if (this.caListeners.add(e), this.maybeStartWatchingFiles(), this.latestCaUpdate !== void 0) process.nextTick(e, this.latestCaUpdate);
    }
    removeCaCertificateListener(e) {
      this.caListeners.delete(e), this.maybeStopWatchingFiles();
    }
    addIdentityCertificateListener(e) {
      if (this.identityListeners.add(e), this.maybeStartWatchingFiles(), this.latestIdentityUpdate !== void 0) process.nextTick(e, this.latestIdentityUpdate);
    }
    removeIdentityCertificateListener(e) {
      this.identityListeners.delete(e), this.maybeStopWatchingFiles();
    }
  }
  Nm.FileWatcherCertificateProvider = Pm;
});
var Vo = (0, import_chunk_w1d7ygsk.V)(function(L) {
  Object.defineProperty(L, "__esModule", { value: true });
  L.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = L.createCertificateProviderChannelCredentials = L.FileWatcherCertificateProvider = L.createCertificateProviderServerCredentials = L.createServerCredentialsWithInterceptors = L.BaseSubchannelWrapper = L.registerAdminService = L.FilterStackFactory = L.BaseFilter = L.statusOrFromError = L.statusOrFromValue = L.PickResultType = L.QueuePicker = L.UnavailablePicker = L.ChildLoadBalancerHandler = L.EndpointMap = L.endpointHasAddress = L.endpointToString = L.subchannelAddressToString = L.LeafLoadBalancer = L.isLoadBalancerNameRegistered = L.parseLoadBalancingConfig = L.selectLbConfigFromList = L.registerLoadBalancerType = L.createChildChannelControlHelper = L.BackoffTimeout = L.parseDuration = L.durationToMs = L.splitHostPort = L.uriToString = L.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = L.createResolver = L.registerResolver = L.log = L.trace = void 0;
  var xm = K();
  Object.defineProperty(L, "trace", { enumerable: true, get: function() {
    return xm.trace;
  } });
  Object.defineProperty(L, "log", { enumerable: true, get: function() {
    return xm.log;
  } });
  var Go = tt();
  Object.defineProperty(L, "registerResolver", { enumerable: true, get: function() {
    return Go.registerResolver;
  } });
  Object.defineProperty(L, "createResolver", { enumerable: true, get: function() {
    return Go.createResolver;
  } });
  Object.defineProperty(L, "CHANNEL_ARGS_CONFIG_SELECTOR_KEY", { enumerable: true, get: function() {
    return Go.CHANNEL_ARGS_CONFIG_SELECTOR_KEY;
  } });
  var km = we();
  Object.defineProperty(L, "uriToString", { enumerable: true, get: function() {
    return km.uriToString;
  } });
  Object.defineProperty(L, "splitHostPort", { enumerable: true, get: function() {
    return km.splitHostPort;
  } });
  var Dm = zi();
  Object.defineProperty(L, "durationToMs", { enumerable: true, get: function() {
    return Dm.durationToMs;
  } });
  Object.defineProperty(L, "parseDuration", { enumerable: true, get: function() {
    return Dm.parseDuration;
  } });
  var $b = Ir();
  Object.defineProperty(L, "BackoffTimeout", { enumerable: true, get: function() {
    return $b.BackoffTimeout;
  } });
  var Gi = Gt();
  Object.defineProperty(L, "createChildChannelControlHelper", { enumerable: true, get: function() {
    return Gi.createChildChannelControlHelper;
  } });
  Object.defineProperty(L, "registerLoadBalancerType", { enumerable: true, get: function() {
    return Gi.registerLoadBalancerType;
  } });
  Object.defineProperty(L, "selectLbConfigFromList", { enumerable: true, get: function() {
    return Gi.selectLbConfigFromList;
  } });
  Object.defineProperty(L, "parseLoadBalancingConfig", { enumerable: true, get: function() {
    return Gi.parseLoadBalancingConfig;
  } });
  Object.defineProperty(L, "isLoadBalancerNameRegistered", { enumerable: true, get: function() {
    return Gi.isLoadBalancerNameRegistered;
  } });
  var Vb = ji();
  Object.defineProperty(L, "LeafLoadBalancer", { enumerable: true, get: function() {
    return Vb.LeafLoadBalancer;
  } });
  var An = Pe();
  Object.defineProperty(L, "subchannelAddressToString", { enumerable: true, get: function() {
    return An.subchannelAddressToString;
  } });
  Object.defineProperty(L, "endpointToString", { enumerable: true, get: function() {
    return An.endpointToString;
  } });
  Object.defineProperty(L, "endpointHasAddress", { enumerable: true, get: function() {
    return An.endpointHasAddress;
  } });
  Object.defineProperty(L, "EndpointMap", { enumerable: true, get: function() {
    return An.EndpointMap;
  } });
  var Yb = cs();
  Object.defineProperty(L, "ChildLoadBalancerHandler", { enumerable: true, get: function() {
    return Yb.ChildLoadBalancerHandler;
  } });
  var $o = kt();
  Object.defineProperty(L, "UnavailablePicker", { enumerable: true, get: function() {
    return $o.UnavailablePicker;
  } });
  Object.defineProperty(L, "QueuePicker", { enumerable: true, get: function() {
    return $o.QueuePicker;
  } });
  Object.defineProperty(L, "PickResultType", { enumerable: true, get: function() {
    return $o.PickResultType;
  } });
  var Lm = vr();
  Object.defineProperty(L, "statusOrFromValue", { enumerable: true, get: function() {
    return Lm.statusOrFromValue;
  } });
  Object.defineProperty(L, "statusOrFromError", { enumerable: true, get: function() {
    return Lm.statusOrFromError;
  } });
  var Kb = So();
  Object.defineProperty(L, "BaseFilter", { enumerable: true, get: function() {
    return Kb.BaseFilter;
  } });
  var Jb = Js();
  Object.defineProperty(L, "FilterStackFactory", { enumerable: true, get: function() {
    return Jb.FilterStackFactory;
  } });
  var Xb = fs();
  Object.defineProperty(L, "registerAdminService", { enumerable: true, get: function() {
    return Xb.registerAdminService;
  } });
  var Qb = Bi();
  Object.defineProperty(L, "BaseSubchannelWrapper", { enumerable: true, get: function() {
    return Qb.BaseSubchannelWrapper;
  } });
  var Fm = dn();
  Object.defineProperty(L, "createServerCredentialsWithInterceptors", { enumerable: true, get: function() {
    return Fm.createServerCredentialsWithInterceptors;
  } });
  Object.defineProperty(L, "createCertificateProviderServerCredentials", { enumerable: true, get: function() {
    return Fm.createCertificateProviderServerCredentials;
  } });
  var Zb = Im();
  Object.defineProperty(L, "FileWatcherCertificateProvider", { enumerable: true, get: function() {
    return Zb.FileWatcherCertificateProvider;
  } });
  var eO = Mr();
  Object.defineProperty(L, "createCertificateProviderChannelCredentials", { enumerable: true, get: function() {
    return eO.createCertificateProviderChannelCredentials;
  } });
  var tO = Io();
  Object.defineProperty(L, "SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX", { enumerable: true, get: function() {
    return tO.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX;
  } });
});
var Hm = (0, import_chunk_w1d7ygsk.V)(function(zm) {
  Object.defineProperty(zm, "__esModule", { value: true });
  zm.setup = iO;
  var qm = tt(), Um = vr();
  class Bm {
    constructor(e, t, r) {
      this.listener = t, this.hasReturnedResult = false, this.endpoints = [];
      let i;
      if (e.authority === "") i = "/" + e.path;
      else i = e.path;
      this.endpoints = [{ addresses: [{ path: i }] }];
    }
    updateResolution() {
      if (!this.hasReturnedResult) this.hasReturnedResult = true, process.nextTick(this.listener, Um.statusOrFromValue(this.endpoints), {}, null, "");
    }
    destroy() {
      this.hasReturnedResult = false;
    }
    static getDefaultAuthority(e) {
      return "localhost";
    }
  }
  function iO() {
    qm.registerResolver("unix", Bm);
  }
});
var Vm = (0, import_chunk_w1d7ygsk.V)(function($m) {
  Object.defineProperty($m, "__esModule", { value: true });
  $m.setup = oO;
  var Pn = (0, import_chunk_w1d7ygsk.ft)("net"), Nn = vr(), hr = x(), gi = ue(), Mn = tt(), jm = Pe(), In = we(), Gm = K(), nO = "ip_resolver";
  function Wm(e) {
    Gm.trace(hr.LogVerbosity.DEBUG, nO, e);
  }
  var Yo = "ipv4", Ko = "ipv6", aO = 443;
  class Jo {
    constructor(e, t, r) {
      var i;
      this.listener = t, this.endpoints = [], this.error = null, this.hasReturnedResult = false, Wm("Resolver constructed for target " + In.uriToString(e));
      let s = [];
      if (!(e.scheme === Yo || e.scheme === Ko)) {
        this.error = { code: hr.Status.UNAVAILABLE, details: `Unrecognized scheme ${e.scheme} in IP resolver`, metadata: new gi.Metadata() };
        return;
      }
      let n = e.path.split(",");
      for (let a of n) {
        let o = In.splitHostPort(a);
        if (o === null) {
          this.error = { code: hr.Status.UNAVAILABLE, details: `Failed to parse ${e.scheme} address ${a}`, metadata: new gi.Metadata() };
          return;
        }
        if (e.scheme === Yo && !Pn.isIPv4(o.host) || e.scheme === Ko && !Pn.isIPv6(o.host)) {
          this.error = { code: hr.Status.UNAVAILABLE, details: `Failed to parse ${e.scheme} address ${a}`, metadata: new gi.Metadata() };
          return;
        }
        s.push({ host: o.host, port: (i = o.port) !== null && i !== void 0 ? i : aO });
      }
      this.endpoints = s.map((a) => ({ addresses: [a] })), Wm("Parsed " + e.scheme + " address list " + s.map(jm.subchannelAddressToString));
    }
    updateResolution() {
      if (!this.hasReturnedResult) this.hasReturnedResult = true, process.nextTick(() => {
        if (this.error) this.listener(Nn.statusOrFromError(this.error), {}, null, "");
        else this.listener(Nn.statusOrFromValue(this.endpoints), {}, null, "");
      });
    }
    destroy() {
      this.hasReturnedResult = false;
    }
    static getDefaultAuthority(e) {
      return e.path.split(",")[0];
    }
  }
  function oO() {
    Mn.registerResolver(Yo, Jo), Mn.registerResolver(Ko, Jo);
  }
});
var tv = (0, import_chunk_w1d7ygsk.V)(function(Zm) {
  Object.defineProperty(Zm, "__esModule", { value: true });
  Zm.RoundRobinLoadBalancer = void 0;
  Zm.setup = dO;
  var Dn = Gt(), z = Ae(), Mt = kt(), Km = K(), Jm = x(), xn = Pe(), Xm = ji(), cO = "round_robin";
  function Ym(e) {
    Km.trace(Jm.LogVerbosity.DEBUG, cO, e);
  }
  var kn = "round_robin";
  class Ln {
    getLoadBalancerName() {
      return kn;
    }
    constructor() {
    }
    toJsonObject() {
      return { [kn]: {} };
    }
    static createFromJson(e) {
      return new Ln();
    }
  }
  class Qm {
    constructor(e, t = 0) {
      this.children = e, this.nextIndex = t;
    }
    pick(e) {
      let t = this.children[this.nextIndex].picker;
      return this.nextIndex = (this.nextIndex + 1) % this.children.length, t.pick(e);
    }
    peekNextEndpoint() {
      return this.children[this.nextIndex].endpoint;
    }
  }
  function uO(e, t) {
    return [...e.slice(t), ...e.slice(0, t)];
  }
  class Xo {
    constructor(e) {
      this.channelControlHelper = e, this.children = [], this.currentState = z.ConnectivityState.IDLE, this.currentReadyPicker = null, this.updatesPaused = false, this.lastError = null, this.childChannelControlHelper = Dn.createChildChannelControlHelper(e, { updateState: (t, r, i) => {
        if (this.currentState === z.ConnectivityState.READY && t !== z.ConnectivityState.READY) this.channelControlHelper.requestReresolution();
        if (i) this.lastError = i;
        this.calculateAndUpdateState();
      } });
    }
    countChildrenWithState(e) {
      return this.children.filter((t) => t.getConnectivityState() === e).length;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused) return;
      if (this.countChildrenWithState(z.ConnectivityState.READY) > 0) {
        let e = this.children.filter((r) => r.getConnectivityState() === z.ConnectivityState.READY), t = 0;
        if (this.currentReadyPicker !== null) {
          let r = this.currentReadyPicker.peekNextEndpoint();
          if (t = e.findIndex((i) => xn.endpointEqual(i.getEndpoint(), r)), t < 0) t = 0;
        }
        this.updateState(z.ConnectivityState.READY, new Qm(e.map((r) => ({ endpoint: r.getEndpoint(), picker: r.getPicker() })), t), null);
      } else if (this.countChildrenWithState(z.ConnectivityState.CONNECTING) > 0) this.updateState(z.ConnectivityState.CONNECTING, new Mt.QueuePicker(this), null);
      else if (this.countChildrenWithState(z.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        let e = `round_robin: No connection established. Last error: ${this.lastError}`;
        this.updateState(z.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({ details: e }), e);
      } else this.updateState(z.ConnectivityState.IDLE, new Mt.QueuePicker(this), null);
      for (let e of this.children) if (e.getConnectivityState() === z.ConnectivityState.IDLE) e.exitIdle();
    }
    updateState(e, t, r) {
      if (Ym(z.ConnectivityState[this.currentState] + " -> " + z.ConnectivityState[e]), e === z.ConnectivityState.READY) this.currentReadyPicker = t;
      else this.currentReadyPicker = null;
      this.currentState = e, this.channelControlHelper.updateState(e, t, r);
    }
    resetSubchannelList() {
      for (let e of this.children) e.destroy();
      this.children = [];
    }
    updateAddressList(e, t, r, i) {
      if (!(t instanceof Ln)) return false;
      if (!e.ok) {
        if (this.children.length === 0) this.updateState(z.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker(e.error), e.error.details);
        return true;
      }
      let s = Math.random() * e.value.length | 0, n = uO(e.value, s);
      if (this.resetSubchannelList(), n.length === 0) {
        let a = `No addresses resolved. Resolution note: ${i}`;
        this.updateState(z.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({ details: a }), a);
      }
      Ym("Connect to endpoint list " + n.map(xn.endpointToString)), this.updatesPaused = true, this.children = n.map((a) => new Xm.LeafLoadBalancer(a, this.childChannelControlHelper, r, i));
      for (let a of this.children) a.startConnecting();
      return this.updatesPaused = false, this.calculateAndUpdateState(), true;
    }
    exitIdle() {
    }
    resetBackoff() {
    }
    destroy() {
      this.resetSubchannelList();
    }
    getTypeName() {
      return kn;
    }
  }
  Zm.RoundRobinLoadBalancer = Xo;
  function dO() {
    Dn.registerLoadBalancerType(kn, Xo, Ln);
  }
});
var fv = (0, import_chunk_w1d7ygsk.V)(function(dv) {
  var Qo;
  Object.defineProperty(dv, "__esModule", { value: true });
  dv.OutlierDetectionLoadBalancer = dv.OutlierDetectionLoadBalancingConfig = void 0;
  dv.setup = vO;
  var rv = Ae(), qn = x(), ke = zi(), Un = Vo(), iv = Gt(), sv = cs(), nv = kt(), vi = Pe(), av = Bi(), ov = K(), fO = "outlier_detection";
  function ge(e) {
    ov.trace(qn.LogVerbosity.DEBUG, fO, e);
  }
  var tl = "outlier_detection", pO = ((Qo = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && Qo !== void 0 ? Qo : "true") === "true", gO = { stdev_factor: 1900, enforcement_percentage: 100, minimum_hosts: 5, request_volume: 100 }, mO = { threshold: 85, enforcement_percentage: 100, minimum_hosts: 5, request_volume: 50 };
  function mi(e, t, r, i) {
    if (t in e && e[t] !== void 0 && typeof e[t] !== r) {
      let s = i ? `${i}.${t}` : t;
      throw Error(`outlier detection config ${s} parse error: expected ${r}, got ${typeof e[t]}`);
    }
  }
  function Zo(e, t, r) {
    let i = r ? `${r}.${t}` : t;
    if (t in e && e[t] !== void 0) {
      if (!ke.isDuration(e[t])) throw Error(`outlier detection config ${i} parse error: expected Duration, got ${typeof e[t]}`);
      if (!(e[t].seconds >= 0 && e[t].seconds <= 315576e6 && e[t].nanos >= 0 && e[t].nanos <= 999999999)) throw Error(`outlier detection config ${i} parse error: values out of range for non-negative Duaration`);
    }
  }
  function Fn(e, t, r) {
    let i = r ? `${r}.${t}` : t;
    if (mi(e, t, "number", r), t in e && e[t] !== void 0 && !(e[t] >= 0 && e[t] <= 100)) throw Error(`outlier detection config ${i} parse error: value out of range for percentage (0-100)`);
  }
  class $i {
    constructor(e, t, r, i, s, n, a) {
      if (this.childPolicy = a, a.getLoadBalancerName() === "pick_first") throw Error("outlier_detection LB policy cannot have a pick_first child policy");
      this.intervalMs = e !== null && e !== void 0 ? e : 1e4, this.baseEjectionTimeMs = t !== null && t !== void 0 ? t : 3e4, this.maxEjectionTimeMs = r !== null && r !== void 0 ? r : 3e5, this.maxEjectionPercent = i !== null && i !== void 0 ? i : 10, this.successRateEjection = s ? Object.assign(Object.assign({}, gO), s) : null, this.failurePercentageEjection = n ? Object.assign(Object.assign({}, mO), n) : null;
    }
    getLoadBalancerName() {
      return tl;
    }
    toJsonObject() {
      var e, t;
      return { outlier_detection: { interval: ke.msToDuration(this.intervalMs), base_ejection_time: ke.msToDuration(this.baseEjectionTimeMs), max_ejection_time: ke.msToDuration(this.maxEjectionTimeMs), max_ejection_percent: this.maxEjectionPercent, success_rate_ejection: (e = this.successRateEjection) !== null && e !== void 0 ? e : void 0, failure_percentage_ejection: (t = this.failurePercentageEjection) !== null && t !== void 0 ? t : void 0, child_policy: [this.childPolicy.toJsonObject()] } };
    }
    getIntervalMs() {
      return this.intervalMs;
    }
    getBaseEjectionTimeMs() {
      return this.baseEjectionTimeMs;
    }
    getMaxEjectionTimeMs() {
      return this.maxEjectionTimeMs;
    }
    getMaxEjectionPercent() {
      return this.maxEjectionPercent;
    }
    getSuccessRateEjectionConfig() {
      return this.successRateEjection;
    }
    getFailurePercentageEjectionConfig() {
      return this.failurePercentageEjection;
    }
    getChildPolicy() {
      return this.childPolicy;
    }
    static createFromJson(e) {
      var t;
      if (Zo(e, "interval"), Zo(e, "base_ejection_time"), Zo(e, "max_ejection_time"), Fn(e, "max_ejection_percent"), "success_rate_ejection" in e && e.success_rate_ejection !== void 0) {
        if (typeof e.success_rate_ejection !== "object") throw Error("outlier detection config success_rate_ejection must be an object");
        mi(e.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection"), Fn(e.success_rate_ejection, "enforcement_percentage", "success_rate_ejection"), mi(e.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection"), mi(e.success_rate_ejection, "request_volume", "number", "success_rate_ejection");
      }
      if ("failure_percentage_ejection" in e && e.failure_percentage_ejection !== void 0) {
        if (typeof e.failure_percentage_ejection !== "object") throw Error("outlier detection config failure_percentage_ejection must be an object");
        Fn(e.failure_percentage_ejection, "threshold", "failure_percentage_ejection"), Fn(e.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection"), mi(e.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection"), mi(e.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection");
      }
      if (!("child_policy" in e) || !Array.isArray(e.child_policy)) throw Error("outlier detection config child_policy must be an array");
      let r = iv.selectLbConfigFromList(e.child_policy);
      if (!r) throw Error("outlier detection config child_policy: no valid recognized policy found");
      return new $i(e.interval ? ke.durationToMs(e.interval) : null, e.base_ejection_time ? ke.durationToMs(e.base_ejection_time) : null, e.max_ejection_time ? ke.durationToMs(e.max_ejection_time) : null, (t = e.max_ejection_percent) !== null && t !== void 0 ? t : null, e.success_rate_ejection, e.failure_percentage_ejection, r);
    }
  }
  dv.OutlierDetectionLoadBalancingConfig = $i;
  class lv extends av.BaseSubchannelWrapper {
    constructor(e, t) {
      super(e);
      this.mapEntry = t, this.refCount = 0;
    }
    ref() {
      this.child.ref(), this.refCount += 1;
    }
    unref() {
      if (this.child.unref(), this.refCount -= 1, this.refCount <= 0) {
        if (this.mapEntry) {
          let e = this.mapEntry.subchannelWrappers.indexOf(this);
          if (e >= 0) this.mapEntry.subchannelWrappers.splice(e, 1);
        }
      }
    }
    eject() {
      this.setHealthy(false);
    }
    uneject() {
      this.setHealthy(true);
    }
    getMapEntry() {
      return this.mapEntry;
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  function el() {
    return { success: 0, failure: 0 };
  }
  class cv {
    constructor() {
      this.activeBucket = el(), this.inactiveBucket = el();
    }
    addSuccess() {
      this.activeBucket.success += 1;
    }
    addFailure() {
      this.activeBucket.failure += 1;
    }
    switchBuckets() {
      this.inactiveBucket = this.activeBucket, this.activeBucket = el();
    }
    getLastSuccesses() {
      return this.inactiveBucket.success;
    }
    getLastFailures() {
      return this.inactiveBucket.failure;
    }
  }
  class uv {
    constructor(e, t) {
      this.wrappedPicker = e, this.countCalls = t;
    }
    pick(e) {
      let t = this.wrappedPicker.pick(e);
      if (t.pickResultType === nv.PickResultType.COMPLETE) {
        let r = t.subchannel, i = r.getMapEntry();
        if (i) {
          let s = t.onCallEnded;
          if (this.countCalls) s = (n, a, o) => {
            var l;
            if (n === qn.Status.OK) i.counter.addSuccess();
            else i.counter.addFailure();
            (l = t.onCallEnded) === null || l === void 0 || l.call(t, n, a, o);
          };
          return Object.assign(Object.assign({}, t), { subchannel: r.getWrappedSubchannel(), onCallEnded: s });
        } else return Object.assign(Object.assign({}, t), { subchannel: r.getWrappedSubchannel() });
      } else return t;
    }
  }
  class rl {
    constructor(e) {
      this.entryMap = new vi.EndpointMap(), this.latestConfig = null, this.timerStartTime = null, this.childBalancer = new sv.ChildLoadBalancerHandler(Un.createChildChannelControlHelper(e, { createSubchannel: (t, r) => {
        let i = e.createSubchannel(t, r), s = this.entryMap.getForSubchannelAddress(t), n = new lv(i, s);
        if ((s === null || s === void 0 ? void 0 : s.currentEjectionTimestamp) !== null) n.eject();
        return s === null || s === void 0 || s.subchannelWrappers.push(n), n;
      }, updateState: (t, r, i) => {
        if (t === rv.ConnectivityState.READY) e.updateState(t, new uv(r, this.isCountingEnabled()), i);
        else e.updateState(t, r, i);
      } })), this.ejectionTimer = setInterval(() => {
      }, 0), clearInterval(this.ejectionTimer);
    }
    isCountingEnabled() {
      return this.latestConfig !== null && (this.latestConfig.getSuccessRateEjectionConfig() !== null || this.latestConfig.getFailurePercentageEjectionConfig() !== null);
    }
    getCurrentEjectionPercent() {
      let e = 0;
      for (let t of this.entryMap.values()) if (t.currentEjectionTimestamp !== null) e += 1;
      return e * 100 / this.entryMap.size;
    }
    runSuccessRateCheck(e) {
      if (!this.latestConfig) return;
      let t = this.latestConfig.getSuccessRateEjectionConfig();
      if (!t) return;
      ge("Running success rate check");
      let r = t.request_volume, i = 0, s = [];
      for (let [u, d] of this.entryMap.entries()) {
        let h = d.counter.getLastSuccesses(), m = d.counter.getLastFailures();
        if (ge("Stats for " + vi.endpointToString(u) + ": successes=" + h + " failures=" + m + " targetRequestVolume=" + r), h + m >= r) i += 1, s.push(h / (h + m));
      }
      if (ge("Found " + i + " success rate candidates; currentEjectionPercent=" + this.getCurrentEjectionPercent() + " successRates=[" + s + "]"), i < t.minimum_hosts) return;
      let n = s.reduce((u, d) => u + d) / s.length, a = 0;
      for (let u of s) {
        let d = u - n;
        a += d * d;
      }
      let o = a / s.length, l = Math.sqrt(o), c = n - l * (t.stdev_factor / 1e3);
      ge("stdev=" + l + " ejectionThreshold=" + c);
      for (let [u, d] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
        let h = d.counter.getLastSuccesses(), m = d.counter.getLastFailures();
        if (h + m < r) continue;
        let f = h / (h + m);
        if (ge("Checking candidate " + u + " successRate=" + f), f < c) {
          let y = Math.random() * 100;
          if (ge("Candidate " + u + " randomNumber=" + y + " enforcement_percentage=" + t.enforcement_percentage), y < t.enforcement_percentage) ge("Ejecting candidate " + u), this.eject(d, e);
        }
      }
    }
    runFailurePercentageCheck(e) {
      if (!this.latestConfig) return;
      let t = this.latestConfig.getFailurePercentageEjectionConfig();
      if (!t) return;
      ge("Running failure percentage check. threshold=" + t.threshold + " request volume threshold=" + t.request_volume);
      let r = 0;
      for (let i of this.entryMap.values()) {
        let s = i.counter.getLastSuccesses(), n = i.counter.getLastFailures();
        if (s + n >= t.request_volume) r += 1;
      }
      if (r < t.minimum_hosts) return;
      for (let [i, s] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
        let n = s.counter.getLastSuccesses(), a = s.counter.getLastFailures();
        if (ge("Candidate successes=" + n + " failures=" + a), n + a < t.request_volume) continue;
        if (a * 100 / (a + n) > t.threshold) {
          let l = Math.random() * 100;
          if (ge("Candidate " + i + " randomNumber=" + l + " enforcement_percentage=" + t.enforcement_percentage), l < t.enforcement_percentage) ge("Ejecting candidate " + i), this.eject(s, e);
        }
      }
    }
    eject(e, t) {
      e.currentEjectionTimestamp = /* @__PURE__ */ new Date(), e.ejectionTimeMultiplier += 1;
      for (let r of e.subchannelWrappers) r.eject();
    }
    uneject(e) {
      e.currentEjectionTimestamp = null;
      for (let t of e.subchannelWrappers) t.uneject();
    }
    switchAllBuckets() {
      for (let e of this.entryMap.values()) e.counter.switchBuckets();
    }
    startTimer(e) {
      var t, r;
      this.ejectionTimer = setTimeout(() => this.runChecks(), e), (r = (t = this.ejectionTimer).unref) === null || r === void 0 || r.call(t);
    }
    runChecks() {
      let e = /* @__PURE__ */ new Date();
      if (ge("Ejection timer running"), this.switchAllBuckets(), !this.latestConfig) return;
      this.timerStartTime = e, this.startTimer(this.latestConfig.getIntervalMs()), this.runSuccessRateCheck(e), this.runFailurePercentageCheck(e);
      for (let [t, r] of this.entryMap.entries()) if (r.currentEjectionTimestamp === null) {
        if (r.ejectionTimeMultiplier > 0) r.ejectionTimeMultiplier -= 1;
      } else {
        let i = this.latestConfig.getBaseEjectionTimeMs(), s = this.latestConfig.getMaxEjectionTimeMs(), n = new Date(r.currentEjectionTimestamp.getTime());
        if (n.setMilliseconds(n.getMilliseconds() + Math.min(i * r.ejectionTimeMultiplier, Math.max(i, s))), n < /* @__PURE__ */ new Date()) ge("Unejecting " + t), this.uneject(r);
      }
    }
    updateAddressList(e, t, r, i) {
      if (!(t instanceof $i)) return false;
      if (ge("Received update with config: " + JSON.stringify(t.toJsonObject(), void 0, 2)), e.ok) {
        for (let n of e.value) if (!this.entryMap.has(n)) ge("Adding map entry for " + vi.endpointToString(n)), this.entryMap.set(n, { counter: new cv(), currentEjectionTimestamp: null, ejectionTimeMultiplier: 0, subchannelWrappers: [] });
        this.entryMap.deleteMissing(e.value);
      }
      let s = t.getChildPolicy();
      if (this.childBalancer.updateAddressList(e, s, r, i), t.getSuccessRateEjectionConfig() || t.getFailurePercentageEjectionConfig()) if (this.timerStartTime) {
        ge("Previous timer existed. Replacing timer"), clearTimeout(this.ejectionTimer);
        let n = t.getIntervalMs() - ((/* @__PURE__ */ new Date()).getTime() - this.timerStartTime.getTime());
        this.startTimer(n);
      } else ge("Starting new timer"), this.timerStartTime = /* @__PURE__ */ new Date(), this.startTimer(t.getIntervalMs()), this.switchAllBuckets();
      else {
        ge("Counting disabled. Cancelling timer."), this.timerStartTime = null, clearTimeout(this.ejectionTimer);
        for (let n of this.entryMap.values()) this.uneject(n), n.ejectionTimeMultiplier = 0;
      }
      return this.latestConfig = t, true;
    }
    exitIdle() {
      this.childBalancer.exitIdle();
    }
    resetBackoff() {
      this.childBalancer.resetBackoff();
    }
    destroy() {
      clearTimeout(this.ejectionTimer), this.childBalancer.destroy();
    }
    getTypeName() {
      return tl;
    }
  }
  dv.OutlierDetectionLoadBalancer = rl;
  function vO() {
    if (pO) Un.registerLoadBalancerType(tl, rl, $i);
  }
});
var vv = (0, import_chunk_w1d7ygsk.V)(function(gv) {
  Object.defineProperty(gv, "__esModule", { value: true });
  gv.PriorityQueue = void 0;
  var yi = 0, il = (e) => Math.floor(e / 2), Bn = (e) => e * 2 + 1, Vi = (e) => e * 2 + 2;
  class pv {
    constructor(e = (t, r) => t > r) {
      this.comparator = e, this.heap = [];
    }
    size() {
      return this.heap.length;
    }
    isEmpty() {
      return this.size() == 0;
    }
    peek() {
      return this.heap[yi];
    }
    push(...e) {
      return e.forEach((t) => {
        this.heap.push(t), this.siftUp();
      }), this.size();
    }
    pop() {
      let e = this.peek(), t = this.size() - 1;
      if (t > yi) this.swap(yi, t);
      return this.heap.pop(), this.siftDown(), e;
    }
    replace(e) {
      let t = this.peek();
      return this.heap[yi] = e, this.siftDown(), t;
    }
    greater(e, t) {
      return this.comparator(this.heap[e], this.heap[t]);
    }
    swap(e, t) {
      [this.heap[e], this.heap[t]] = [this.heap[t], this.heap[e]];
    }
    siftUp() {
      let e = this.size() - 1;
      while (e > yi && this.greater(e, il(e))) this.swap(e, il(e)), e = il(e);
    }
    siftDown() {
      let e = yi;
      while (Bn(e) < this.size() && this.greater(Bn(e), e) || Vi(e) < this.size() && this.greater(Vi(e), e)) {
        let t = Vi(e) < this.size() && this.greater(Vi(e), Bn(e)) ? Vi(e) : Bn(e);
        this.swap(e, t), e = t;
      }
    }
  }
  gv.PriorityQueue = pv;
});
var wv = (0, import_chunk_w1d7ygsk.V)(function(bv) {
  Object.defineProperty(bv, "__esModule", { value: true });
  bv.WeightedRoundRobinLoadBalancingConfig = void 0;
  bv.setup = OO;
  var F = Ae(), _v = x(), Q = zi(), Wn = Gt(), Sv = ji(), Cv = K(), jn = pn(), Xe = kt(), Ev = vv(), Hn = Pe(), SO = "weighted_round_robin";
  function sl(e) {
    Cv.trace(_v.LogVerbosity.DEBUG, SO, e);
  }
  var nl = "weighted_round_robin", CO = 1e4, EO = 1e4, TO = 18e4, RO = 1e3, bO = 1;
  function yv(e, t, r) {
    if (t in e && e[t] !== void 0 && typeof e[t] !== r) throw Error(`weighted round robin config ${t} parse error: expected ${r}, got ${typeof e[t]}`);
  }
  function zn(e, t) {
    if (t in e && e[t] !== void 0 && e[t] !== null) {
      let r;
      if (Q.isDuration(e[t])) r = e[t];
      else if (Q.isDurationMessage(e[t])) r = Q.durationMessageToDuration(e[t]);
      else if (typeof e[t] === "string") {
        let i = Q.parseDuration(e[t]);
        if (!i) throw Error(`weighted round robin config ${t}: failed to parse duration string ${e[t]}`);
        r = i;
      } else throw Error(`weighted round robin config ${t}: expected duration, got ${typeof e[t]}`);
      return Q.durationToMs(r);
    }
    return null;
  }
  class Yi {
    constructor(e, t, r, i, s, n) {
      this.enableOobLoadReport = e !== null && e !== void 0 ? e : false, this.oobLoadReportingPeriodMs = t !== null && t !== void 0 ? t : CO, this.blackoutPeriodMs = r !== null && r !== void 0 ? r : EO, this.weightExpirationPeriodMs = i !== null && i !== void 0 ? i : TO, this.weightUpdatePeriodMs = Math.max(s !== null && s !== void 0 ? s : RO, 100), this.errorUtilizationPenalty = n !== null && n !== void 0 ? n : bO;
    }
    getLoadBalancerName() {
      return nl;
    }
    toJsonObject() {
      return { enable_oob_load_report: this.enableOobLoadReport, oob_load_reporting_period: Q.durationToString(Q.msToDuration(this.oobLoadReportingPeriodMs)), blackout_period: Q.durationToString(Q.msToDuration(this.blackoutPeriodMs)), weight_expiration_period: Q.durationToString(Q.msToDuration(this.weightExpirationPeriodMs)), weight_update_period: Q.durationToString(Q.msToDuration(this.weightUpdatePeriodMs)), error_utilization_penalty: this.errorUtilizationPenalty };
    }
    static createFromJson(e) {
      if (yv(e, "enable_oob_load_report", "boolean"), yv(e, "error_utilization_penalty", "number"), e.error_utilization_penalty < 0) throw Error("weighted round robin config error_utilization_penalty < 0");
      return new Yi(e.enable_oob_load_report, zn(e, "oob_load_reporting_period"), zn(e, "blackout_period"), zn(e, "weight_expiration_period"), zn(e, "weight_update_period"), e.error_utilization_penalty);
    }
    getEnableOobLoadReport() {
      return this.enableOobLoadReport;
    }
    getOobLoadReportingPeriodMs() {
      return this.oobLoadReportingPeriodMs;
    }
    getBlackoutPeriodMs() {
      return this.blackoutPeriodMs;
    }
    getWeightExpirationPeriodMs() {
      return this.weightExpirationPeriodMs;
    }
    getWeightUpdatePeriodMs() {
      return this.weightUpdatePeriodMs;
    }
    getErrorUtilizationPenalty() {
      return this.errorUtilizationPenalty;
    }
  }
  bv.WeightedRoundRobinLoadBalancingConfig = Yi;
  class Tv {
    constructor(e, t) {
      this.metricsHandler = t, this.queue = new Ev.PriorityQueue((s, n) => s.deadline < n.deadline);
      let r = e.filter((s) => s.weight > 0), i;
      if (r.length < 2) i = 1;
      else {
        let s = 0;
        for (let { weight: n } of r) s += n;
        i = s / r.length;
      }
      for (let s of e) {
        let n = s.weight > 0 ? 1 / s.weight : i;
        this.queue.push({ endpointName: s.endpointName, picker: s.picker, period: n, deadline: Math.random() * n });
      }
    }
    pick(e) {
      let t = this.queue.pop();
      this.queue.push(Object.assign(Object.assign({}, t), { deadline: t.deadline + t.period }));
      let r = t.picker.pick(e);
      if (r.pickResultType === Xe.PickResultType.COMPLETE) if (this.metricsHandler) return Object.assign(Object.assign({}, r), { onCallEnded: jn.createMetricsReader((i) => this.metricsHandler(i, t.endpointName), r.onCallEnded) });
      else {
        let i = r.subchannel;
        return Object.assign(Object.assign({}, r), { subchannel: i.getWrappedSubchannel() });
      }
      else return r;
    }
  }
  class Rv {
    constructor(e) {
      this.channelControlHelper = e, this.latestConfig = null, this.children = /* @__PURE__ */ new Map(), this.currentState = F.ConnectivityState.IDLE, this.updatesPaused = false, this.lastError = null, this.weightUpdateTimer = null;
    }
    countChildrenWithState(e) {
      let t = 0;
      for (let r of this.children.values()) if (r.child.getConnectivityState() === e) t += 1;
      return t;
    }
    updateWeight(e, t) {
      var r, i;
      let { rps_fractional: s, application_utilization: n } = t;
      if (n > 0 && s > 0) n += t.eps / s * ((i = (r = this.latestConfig) === null || r === void 0 ? void 0 : r.getErrorUtilizationPenalty()) !== null && i !== void 0 ? i : 0);
      let a = n === 0 ? 0 : s / n;
      if (a === 0) return;
      let o = /* @__PURE__ */ new Date();
      if (e.nonEmptySince === null) e.nonEmptySince = o;
      e.lastUpdated = o, e.weight = a;
    }
    getWeight(e) {
      if (!this.latestConfig) return 0;
      let t = (/* @__PURE__ */ new Date()).getTime();
      if (t - e.lastUpdated.getTime() >= this.latestConfig.getWeightExpirationPeriodMs()) return e.nonEmptySince = null, 0;
      let r = this.latestConfig.getBlackoutPeriodMs();
      if (r > 0 && (e.nonEmptySince === null || t - e.nonEmptySince.getTime() < r)) return 0;
      return e.weight;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused || !this.latestConfig) return;
      if (this.countChildrenWithState(F.ConnectivityState.READY) > 0) {
        let e = [];
        for (let [r, i] of this.children) {
          if (i.child.getConnectivityState() !== F.ConnectivityState.READY) continue;
          e.push({ endpointName: r, picker: i.child.getPicker(), weight: this.getWeight(i) });
        }
        sl("Created picker with weights: " + e.map((r) => r.endpointName + ":" + r.weight).join(","));
        let t;
        if (!this.latestConfig.getEnableOobLoadReport()) t = (r, i) => {
          let s = this.children.get(i);
          if (s) this.updateWeight(s, r);
        };
        else t = null;
        this.updateState(F.ConnectivityState.READY, new Tv(e, t), null);
      } else if (this.countChildrenWithState(F.ConnectivityState.CONNECTING) > 0) this.updateState(F.ConnectivityState.CONNECTING, new Xe.QueuePicker(this), null);
      else if (this.countChildrenWithState(F.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        let e = `weighted_round_robin: No connection established. Last error: ${this.lastError}`;
        this.updateState(F.ConnectivityState.TRANSIENT_FAILURE, new Xe.UnavailablePicker({ details: e }), e);
      } else this.updateState(F.ConnectivityState.IDLE, new Xe.QueuePicker(this), null);
      for (let { child: e } of this.children.values()) if (e.getConnectivityState() === F.ConnectivityState.IDLE) e.exitIdle();
    }
    updateState(e, t, r) {
      sl(F.ConnectivityState[this.currentState] + " -> " + F.ConnectivityState[e]), this.currentState = e, this.channelControlHelper.updateState(e, t, r);
    }
    updateAddressList(e, t, r, i) {
      var s, n;
      if (!(t instanceof Yi)) return false;
      if (!e.ok) {
        if (this.children.size === 0) this.updateState(F.ConnectivityState.TRANSIENT_FAILURE, new Xe.UnavailablePicker(e.error), e.error.details);
        return true;
      }
      if (e.value.length === 0) {
        let l = `No addresses resolved. Resolution note: ${i}`;
        return this.updateState(F.ConnectivityState.TRANSIENT_FAILURE, new Xe.UnavailablePicker({ details: l }), l), false;
      }
      sl("Connect to endpoint list " + e.value.map(Hn.endpointToString));
      let a = /* @__PURE__ */ new Date(), o = /* @__PURE__ */ new Set();
      this.updatesPaused = true, this.latestConfig = t;
      for (let l of e.value) {
        let c = Hn.endpointToString(l);
        o.add(c);
        let u = this.children.get(c);
        if (!u) u = { child: new Sv.LeafLoadBalancer(l, Wn.createChildChannelControlHelper(this.channelControlHelper, { updateState: (d, h, m) => {
          if (this.currentState === F.ConnectivityState.READY && d !== F.ConnectivityState.READY) this.channelControlHelper.requestReresolution();
          if (d === F.ConnectivityState.READY) u.nonEmptySince = null;
          if (m) this.lastError = m;
          this.calculateAndUpdateState();
        }, createSubchannel: (d, h) => {
          let m = this.channelControlHelper.createSubchannel(d, h);
          if (u === null || u === void 0 ? void 0 : u.oobMetricsListener) return new jn.OrcaOobMetricsSubchannelWrapper(m, u.oobMetricsListener, this.latestConfig.getOobLoadReportingPeriodMs());
          else return m;
        } }), r, i), lastUpdated: a, nonEmptySince: null, weight: 0, oobMetricsListener: null }, this.children.set(c, u);
        if (t.getEnableOobLoadReport()) u.oobMetricsListener = (d) => {
          this.updateWeight(u, d);
        };
        else u.oobMetricsListener = null;
      }
      for (let [l, c] of this.children) if (o.has(l)) c.child.startConnecting();
      else c.child.destroy(), this.children.delete(l);
      if (this.updatesPaused = false, this.calculateAndUpdateState(), this.weightUpdateTimer) clearInterval(this.weightUpdateTimer);
      return this.weightUpdateTimer = (n = (s = setInterval(() => {
        if (this.currentState === F.ConnectivityState.READY) this.calculateAndUpdateState();
      }, t.getWeightUpdatePeriodMs())).unref) === null || n === void 0 ? void 0 : n.call(s), true;
    }
    exitIdle() {
    }
    resetBackoff() {
    }
    destroy() {
      for (let e of this.children.values()) e.child.destroy();
      if (this.children.clear(), this.weightUpdateTimer) clearInterval(this.weightUpdateTimer);
    }
    getTypeName() {
      return nl;
    }
  }
  function OO() {
    Wn.registerLoadBalancerType(nl, Rv, Yi);
  }
});
var Ki = (0, import_chunk_w1d7ygsk.V)(function(j) {
  Object.defineProperty(j, "__esModule", { value: true });
  j.experimental = j.ServerMetricRecorder = j.ServerInterceptingCall = j.ResponderBuilder = j.ServerListenerBuilder = j.addAdminServicesToServer = j.getChannelzHandlers = j.getChannelzServiceDefinition = j.InterceptorConfigurationError = j.InterceptingCall = j.RequesterBuilder = j.ListenerBuilder = j.StatusBuilder = j.getClientChannel = j.ServerCredentials = j.Server = j.setLogVerbosity = j.setLogger = j.load = j.loadObject = j.CallCredentials = j.ChannelCredentials = j.waitForClientReady = j.closeClient = j.Channel = j.makeGenericClientConstructor = j.makeClientConstructor = j.loadPackageDefinition = j.Client = j.compressionAlgorithms = j.propagate = j.connectivityState = j.status = j.logVerbosity = j.Metadata = j.credentials = void 0;
  var fr = rs();
  Object.defineProperty(j, "CallCredentials", { enumerable: true, get: function() {
    return fr.CallCredentials;
  } });
  var Av = Ra();
  Object.defineProperty(j, "Channel", { enumerable: true, get: function() {
    return Av.ChannelImplementation;
  } });
  var Pv = _o();
  Object.defineProperty(j, "compressionAlgorithms", { enumerable: true, get: function() {
    return Pv.CompressionAlgorithms;
  } });
  var Nv = Ae();
  Object.defineProperty(j, "connectivityState", { enumerable: true, get: function() {
    return Nv.ConnectivityState;
  } });
  var pr = Mr();
  Object.defineProperty(j, "ChannelCredentials", { enumerable: true, get: function() {
    return pr.ChannelCredentials;
  } });
  var Gn = Ta();
  Object.defineProperty(j, "Client", { enumerable: true, get: function() {
    return Gn.Client;
  } });
  var _i = x();
  Object.defineProperty(j, "logVerbosity", { enumerable: true, get: function() {
    return _i.LogVerbosity;
  } });
  Object.defineProperty(j, "status", { enumerable: true, get: function() {
    return _i.Status;
  } });
  Object.defineProperty(j, "propagate", { enumerable: true, get: function() {
    return _i.Propagate;
  } });
  var $n = K(), Si = vs();
  Object.defineProperty(j, "loadPackageDefinition", { enumerable: true, get: function() {
    return Si.loadPackageDefinition;
  } });
  Object.defineProperty(j, "makeClientConstructor", { enumerable: true, get: function() {
    return Si.makeClientConstructor;
  } });
  Object.defineProperty(j, "makeGenericClientConstructor", { enumerable: true, get: function() {
    return Si.makeClientConstructor;
  } });
  var Mv = ue();
  Object.defineProperty(j, "Metadata", { enumerable: true, get: function() {
    return Mv.Metadata;
  } });
  var Iv = dm();
  Object.defineProperty(j, "Server", { enumerable: true, get: function() {
    return Iv.Server;
  } });
  var xv = dn();
  Object.defineProperty(j, "ServerCredentials", { enumerable: true, get: function() {
    return xv.ServerCredentials;
  } });
  var kv = gm();
  Object.defineProperty(j, "StatusBuilder", { enumerable: true, get: function() {
    return kv.StatusBuilder;
  } });
  j.credentials = { combineChannelCredentials: (e, ...t) => t.reduce((r, i) => r.compose(i), e), combineCallCredentials: (e, ...t) => t.reduce((r, i) => r.compose(i), e), createInsecure: pr.ChannelCredentials.createInsecure, createSsl: pr.ChannelCredentials.createSsl, createFromSecureContext: pr.ChannelCredentials.createFromSecureContext, createFromMetadataGenerator: fr.CallCredentials.createFromMetadataGenerator, createFromGoogleCredential: fr.CallCredentials.createFromGoogleCredential, createEmpty: fr.CallCredentials.createEmpty };
  var AO = (e) => e.close();
  j.closeClient = AO;
  var PO = (e, t, r) => e.waitForReady(t, r);
  j.waitForClientReady = PO;
  var NO = (e, t) => {
    throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  j.loadObject = NO;
  var MO = (e, t, r) => {
    throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  j.load = MO;
  var IO = (e) => {
    $n.setLogger(e);
  };
  j.setLogger = IO;
  var xO = (e) => {
    $n.setLoggerVerbosity(e);
  };
  j.setLogVerbosity = xO;
  var kO = (e) => Gn.Client.prototype.getChannel.call(e);
  j.getClientChannel = kO;
  var Vn = Ca();
  Object.defineProperty(j, "ListenerBuilder", { enumerable: true, get: function() {
    return Vn.ListenerBuilder;
  } });
  Object.defineProperty(j, "RequesterBuilder", { enumerable: true, get: function() {
    return Vn.RequesterBuilder;
  } });
  Object.defineProperty(j, "InterceptingCall", { enumerable: true, get: function() {
    return Vn.InterceptingCall;
  } });
  Object.defineProperty(j, "InterceptorConfigurationError", { enumerable: true, get: function() {
    return Vn.InterceptorConfigurationError;
  } });
  var Dv = Zt();
  Object.defineProperty(j, "getChannelzServiceDefinition", { enumerable: true, get: function() {
    return Dv.getChannelzServiceDefinition;
  } });
  Object.defineProperty(j, "getChannelzHandlers", { enumerable: true, get: function() {
    return Dv.getChannelzHandlers;
  } });
  var DO = fs();
  Object.defineProperty(j, "addAdminServicesToServer", { enumerable: true, get: function() {
    return DO.addAdminServicesToServer;
  } });
  var al = zo();
  Object.defineProperty(j, "ServerListenerBuilder", { enumerable: true, get: function() {
    return al.ServerListenerBuilder;
  } });
  Object.defineProperty(j, "ResponderBuilder", { enumerable: true, get: function() {
    return al.ResponderBuilder;
  } });
  Object.defineProperty(j, "ServerInterceptingCall", { enumerable: true, get: function() {
    return al.ServerInterceptingCall;
  } });
  var LO = pn();
  Object.defineProperty(j, "ServerMetricRecorder", { enumerable: true, get: function() {
    return LO.ServerMetricRecorder;
  } });
  var FO = Vo();
  j.experimental = FO;
  var Lv = Oo(), Fv = Hm(), qv = Vm(), Uv = ji(), Bv = tv(), zv = fv(), Hv = wv(), Wv = Zt();
  (() => {
    Lv.setup(), Fv.setup(), qv.setup(), Uv.setup(), Bv.setup(), zv.setup(), Hv.setup(), Wv.setup();
  })();
});
var Yv = (0, import_chunk_w1d7ygsk.V)(function($v) {
  Object.defineProperty($v, "__esModule", { value: true });
  $v.createServiceClientConstructor = void 0;
  var Gv = Ki();
  function $O(e, t) {
    return Gv.makeGenericClientConstructor({ export: { path: e, requestStream: false, responseStream: false, requestSerialize: (i) => i, requestDeserialize: (i) => i, responseSerialize: (i) => i, responseDeserialize: (i) => i } }, t);
  }
  $v.createServiceClientConstructor = $O;
});
var Ji = (0, import_chunk_w1d7ygsk.V)(function(Xv) {
  Object.defineProperty(Xv, "__esModule", { value: true });
  Xv.createOtlpGrpcExporterTransport = Xv.GrpcExporterTransport = Xv.createEmptyMetadata = Xv.createSslCredentials = Xv.createInsecureCredentials = void 0;
  var Jv = gl(), Kv = `OTel-OTLP-Exporter-JavaScript/${Jv.VERSION}`;
  function VO(e) {
    if (e) return `${e} ${Kv}`;
    return Kv;
  }
  var YO = 0, KO = 2;
  function JO(e) {
    return e === "gzip" ? KO : YO;
  }
  function XO() {
    let { credentials: e } = Ki();
    return e.createInsecure();
  }
  Xv.createInsecureCredentials = XO;
  function QO(e, t, r) {
    let { credentials: i } = Ki();
    return i.createSsl(e, t, r);
  }
  Xv.createSslCredentials = QO;
  function ZO() {
    let { Metadata: e } = Ki();
    return new e();
  }
  Xv.createEmptyMetadata = ZO;
  class ol {
    _parameters;
    _client;
    _metadata;
    constructor(e) {
      this._parameters = e;
    }
    shutdown() {
      this._client?.close();
    }
    send(e, t) {
      let r = Buffer.from(e);
      if (this._client == null) {
        let { createServiceClientConstructor: i } = Yv();
        try {
          this._metadata = this._parameters.metadata();
        } catch (n) {
          return Promise.resolve({ status: "failure", error: n });
        }
        let s = i(this._parameters.grpcPath, this._parameters.grpcName);
        try {
          this._client = new s(this._parameters.address, this._parameters.credentials(), { "grpc.default_compression_algorithm": JO(this._parameters.compression), "grpc.primary_user_agent": VO(this._parameters.userAgent) });
        } catch (n) {
          return Promise.resolve({ status: "failure", error: n });
        }
      }
      return new Promise((i) => {
        let s = Date.now() + t;
        if (this._metadata == null) return i({ error: Error("metadata was null"), status: "failure" });
        this._client.export(r, this._metadata, { deadline: s }, (n, a) => {
          if (n) i({ status: "failure", error: n });
          else i({ data: a, status: "success" });
        });
      });
    }
  }
  Xv.GrpcExporterTransport = ol;
  function ew(e) {
    return new ol(e);
  }
  Xv.createOtlpGrpcExporterTransport = ew;
});
var sy = (0, import_chunk_w1d7ygsk.V)(function(ry) {
  Object.defineProperty(ry, "__esModule", { value: true });
  ry.getOtlpGrpcDefaultConfiguration = ry.mergeOtlpGrpcConfigurationWithDefaults = ry.validateAndNormalizeUrl = void 0;
  var Kn = (0, import_chunk_psv74hq2.vue)(), It = Ji(), ey = (0, import_chunk_w1d7ygsk.ft)("url"), Yn = (0, import_chunk_xfj2cwfv._u)();
  function ty(e) {
    if (e = e.trim(), !e.match(/^([\w]{1,8}):\/\//)) e = `https://${e}`;
    let r = new ey.URL(e);
    if (r.protocol === "unix:") return e;
    if (r.pathname && r.pathname !== "/") Yn.diag.warn("URL path should not be set when using grpc, the path part of the URL will be ignored.");
    if (r.protocol !== "" && !r.protocol?.match(/^(http)s?:$/)) Yn.diag.warn("URL protocol should be http(s)://. Using http://.");
    return r.host;
  }
  ry.validateAndNormalizeUrl = ty;
  function Zv(e, t) {
    for (let [r, i] of Object.entries(t.getMap())) if (e.get(r).length < 1) e.set(r, i);
  }
  function nw(e, t, r) {
    let i = e.url ?? t.url ?? r.url;
    return { ...Kn.mergeOtlpSharedConfigurationWithDefaults(e, t, r), metadata: () => {
      let s = r.metadata();
      return Zv(s, e.metadata?.().clone() ?? It.createEmptyMetadata()), Zv(s, t.metadata?.() ?? It.createEmptyMetadata()), s;
    }, url: ty(i), credentials: e.credentials ?? t.credentials?.(i) ?? r.credentials(i), userAgent: e.userAgent };
  }
  ry.mergeOtlpGrpcConfigurationWithDefaults = nw;
  function aw() {
    return { ...Kn.getSharedConfigurationDefaults(), metadata: () => It.createEmptyMetadata(), url: "http://localhost:4317", credentials: (e) => {
      if (e.startsWith("http://")) return () => It.createInsecureCredentials();
      else return () => It.createSslCredentials();
    } };
  }
  ry.getOtlpGrpcDefaultConfiguration = aw;
});
var hy = (0, import_chunk_w1d7ygsk.V)(function(uy) {
  Object.defineProperty(uy, "__esModule", { value: true });
  uy.getOtlpGrpcConfigurationFromEnv = void 0;
  var Jn = (0, import_chunk_xfj2cwfv.Q_)(), xt = Ji(), ay = (0, import_chunk_psv74hq2.iTe)(), oy = (0, import_chunk_w1d7ygsk.ft)("fs"), ly = (0, import_chunk_w1d7ygsk.ft)("path"), Xn = (0, import_chunk_xfj2cwfv._u)();
  function ll(e, t) {
    if (e != null && e !== "") return e;
    if (t != null && t !== "") return t;
    return;
  }
  function cw(e) {
    let t = process.env[`OTEL_EXPORTER_OTLP_${e}_HEADERS`]?.trim(), r = process.env.OTEL_EXPORTER_OTLP_HEADERS?.trim(), i = Jn.parseKeyPairsIntoRecord(t), s = Jn.parseKeyPairsIntoRecord(r);
    if (Object.keys(i).length === 0 && Object.keys(s).length === 0) return;
    let n = Object.assign({}, s, i), a = xt.createEmptyMetadata();
    for (let [o, l] of Object.entries(n)) a.set(o, l);
    return a;
  }
  function uw(e) {
    let t = cw(e);
    if (t == null) return;
    return () => t;
  }
  function dw(e) {
    let t = process.env[`OTEL_EXPORTER_OTLP_${e}_ENDPOINT`]?.trim(), r = process.env.OTEL_EXPORTER_OTLP_ENDPOINT?.trim();
    return ll(t, r);
  }
  function hw(e) {
    let t = process.env[`OTEL_EXPORTER_OTLP_${e}_INSECURE`]?.toLowerCase().trim(), r = process.env.OTEL_EXPORTER_OTLP_INSECURE?.toLowerCase().trim();
    return ll(t, r) === "true";
  }
  function cl(e, t, r) {
    let i = process.env[e]?.trim(), s = process.env[t]?.trim(), n = ll(i, s);
    if (n != null) try {
      return oy.readFileSync(ly.resolve(process.cwd(), n));
    } catch {
      Xn.diag.warn(r);
      return;
    }
    else return;
  }
  function fw(e) {
    return cl(`OTEL_EXPORTER_OTLP_${e}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
  }
  function pw(e) {
    return cl(`OTEL_EXPORTER_OTLP_${e}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
  }
  function ny(e) {
    return cl(`OTEL_EXPORTER_OTLP_${e}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
  }
  function cy(e) {
    let t = pw(e), r = fw(e), i = ny(e), s = t != null && r != null;
    if (i != null && !s) return Xn.diag.warn("Client key and certificate must both be provided, but one was missing - attempting to create credentials from just the root certificate"), xt.createSslCredentials(ny(e));
    return xt.createSslCredentials(i, t, r);
  }
  function gw(e) {
    if (hw(e)) return xt.createInsecureCredentials();
    return cy(e);
  }
  function mw(e) {
    return { ...ay.getSharedConfigurationFromEnvironment(e), metadata: uw(e), url: dw(e), credentials: (t) => {
      if (t.startsWith("http://")) return () => xt.createInsecureCredentials();
      else if (t.startsWith("https://")) return () => cy(e);
      return () => gw(e);
    } };
  }
  uy.getOtlpGrpcConfigurationFromEnv = mw;
});
var yy = (0, import_chunk_w1d7ygsk.V)(function(my) {
  Object.defineProperty(my, "__esModule", { value: true });
  my.convertLegacyOtlpGrpcOptions = void 0;
  var fy = (0, import_chunk_xfj2cwfv._u)(), Qn = sy(), py = Ji(), gy = hy();
  function vw(e, t) {
    if (e.headers) fy.diag.warn("Headers cannot be set when using grpc");
    let r = e.credentials;
    return Qn.mergeOtlpGrpcConfigurationWithDefaults({ url: e.url, metadata: () => e.metadata ?? py.createEmptyMetadata(), compression: e.compression, timeoutMillis: e.timeoutMillis, concurrencyLimit: e.concurrencyLimit, credentials: r != null ? () => r : void 0, userAgent: e.userAgent }, gy.getOtlpGrpcConfigurationFromEnv(t), Qn.getOtlpGrpcDefaultConfiguration());
  }
  my.convertLegacyOtlpGrpcOptions = vw;
});
var Ty = (0, import_chunk_w1d7ygsk.V)(function(Cy) {
  Object.defineProperty(Cy, "__esModule", { value: true });
  Cy.createOtlpGrpcExportDelegate = void 0;
  var _y = (0, import_chunk_psv74hq2.vue)(), Sy = Ji();
  function yw(e, t, r, i) {
    return _y.createOtlpNetworkExportDelegate(e, t, Sy.createOtlpGrpcExporterTransport({ address: e.url, compression: e.compression, credentials: e.credentials, metadata: e.metadata, userAgent: e.userAgent, grpcName: r, grpcPath: i }));
  }
  Cy.createOtlpGrpcExportDelegate = yw;
});
var wnr = (0, import_chunk_w1d7ygsk.V)(function(Zn) {
  Object.defineProperty(Zn, "__esModule", { value: true });
  Zn.createOtlpGrpcExportDelegate = Zn.convertLegacyOtlpGrpcOptions = void 0;
  var _w = yy();
  Object.defineProperty(Zn, "convertLegacyOtlpGrpcOptions", { enumerable: true, get: function() {
    return _w.convertLegacyOtlpGrpcOptions;
  } });
  var Sw = Ty();
  Object.defineProperty(Zn, "createOtlpGrpcExportDelegate", { enumerable: true, get: function() {
    return Sw.createOtlpGrpcExportDelegate;
  } });
});
