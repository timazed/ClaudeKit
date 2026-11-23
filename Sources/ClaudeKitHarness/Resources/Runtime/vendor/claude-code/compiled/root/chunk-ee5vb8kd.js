const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_ee5vb8kd_exports = {};
__export(chunk_ee5vb8kd_exports, {
  nvo: () => nvo
});
module.exports = __toCommonJS(chunk_ee5vb8kd_exports);
var import_chunk_9s46yyz1 = require("/$bunfs/root/chunk-9s46yyz1.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var xr = (0, import_chunk_w1d7ygsk.V)(function(xd, Ls) {
  var Pt = Object.prototype.hasOwnProperty, Ms = Object.prototype.toString, { defineProperty: Is, getOwnPropertyDescriptor: Us } = Object, js = function(t) {
    if (typeof Array.isArray === "function") return Array.isArray(t);
    return Ms.call(t) === "[object Array]";
  }, Ds = function(t) {
    if (!t || Ms.call(t) !== "[object Object]") return false;
    var r = Pt.call(t, "constructor"), s = t.constructor && t.constructor.prototype && Pt.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !r && !s) return false;
    var n;
    for (n in t) ;
    return typeof n > "u" || Pt.call(t, n);
  }, qs = function(t, r) {
    if (Is && r.name === "__proto__") Is(t, r.name, { enumerable: true, configurable: true, value: r.newValue, writable: true });
    else t[r.name] = r.newValue;
  }, Fs = function(t, r) {
    if (r === "__proto__") {
      if (!Pt.call(t, r)) return;
      else if (Us) return Us(t, r).value;
    }
    return t[r];
  };
  Ls.exports = function e() {
    var t, r, s, n, a, h, g = arguments[0], E = 1, k = arguments.length, T = false;
    if (typeof g === "boolean") T = g, g = arguments[1] || {}, E = 2;
    if (g == null || typeof g !== "object" && typeof g !== "function") g = {};
    for (; E < k; ++E) if (t = arguments[E], t != null) {
      for (r in t) if (s = Fs(g, r), n = Fs(t, r), g !== n) {
        if (T && n && (Ds(n) || (a = js(n)))) {
          if (a) a = false, h = s && js(s) ? s : [];
          else h = s && Ds(s) ? s : {};
          qs(g, { name: r, newValue: e(T, h, n) });
        } else if (typeof n < "u") qs(g, { name: r, newValue: n });
      }
    }
    return g;
  };
});
var Gs = (0, import_chunk_w1d7ygsk.V)(function(bd, kc) {
  kc.exports = { name: "gaxios", version: "7.1.4", description: "A simple common HTTP client specifically for Google APIs and services.", main: "build/cjs/src/index.js", types: "build/cjs/src/index.d.ts", files: ["build/"], exports: { ".": { import: { types: "./build/esm/src/index.d.ts", default: "./build/esm/src/index.js" }, require: { types: "./build/cjs/src/index.d.ts", default: "./build/cjs/src/index.js" } } }, scripts: { lint: "gts check --no-inline-config", test: "c8 mocha build/esm/test", "presystem-test": "npm run compile", "system-test": "mocha build/esm/system-test --timeout 80000", compile: "tsc -b ./tsconfig.json ./tsconfig.cjs.json && node utils/enable-esm.mjs", fix: "gts fix", prepare: "npm run compile", pretest: "npm run compile", webpack: "webpack", "prebrowser-test": "npm run compile", "browser-test": "node build/browser-test/browser-test-runner.js", docs: "jsdoc -c .jsdoc.js", "docs-test": "linkinator docs", "predocs-test": "npm run docs", "samples-test": "cd samples/ && npm link ../ && npm test && cd ../", prelint: "cd samples; npm link ../; npm install", clean: "gts clean" }, repository: { type: "git", directory: "packages/gaxios", url: "https://github.com/googleapis/google-cloud-node-core.git" }, keywords: ["google"], engines: { node: ">=18" }, author: "Google, LLC", license: "Apache-2.0", devDependencies: { "@babel/plugin-proposal-private-methods": "^7.18.6", "@types/cors": "^2.8.6", "@types/express": "^5.0.0", "@types/extend": "^3.0.1", "@types/mocha": "^10.0.10", "@types/multiparty": "4.2.1", "@types/mv": "^2.1.0", "@types/ncp": "^2.0.8", "@types/node": "^22.13.1", "@types/sinon": "^17.0.3", "@types/tmp": "^0.2.6", assert: "^2.0.0", browserify: "^17.0.0", c8: "^10.1.3", cors: "^2.8.5", express: "^5.0.0", gts: "^6.0.2", "is-docker": "^3.0.0", jsdoc: "^4.0.4", "jsdoc-fresh": "^5.0.0", "jsdoc-region-tag": "^4.0.0", karma: "^6.0.0", "karma-chrome-launcher": "^3.0.0", "karma-coverage": "^2.0.0", "karma-firefox-launcher": "^2.0.0", "karma-mocha": "^2.0.0", "karma-remap-coverage": "^0.1.5", "karma-sourcemap-loader": "^0.4.0", "karma-webpack": "^5.0.1", linkinator: "^6.1.2", mocha: "^11.1.0", multiparty: "^4.2.1", mv: "^2.1.1", ncp: "^2.0.0", nock: "^14.0.5", "null-loader": "^4.0.1", "pack-n-play": "^4.0.0", puppeteer: "^24.0.0", sinon: "^21.0.0", "stream-browserify": "^3.0.0", tmp: "0.2.5", "ts-loader": "^9.5.2", typescript: "5.8.3", webpack: "^5.97.1", "webpack-cli": "^6.0.1" }, dependencies: { extend: "^3.0.2", "https-proxy-agent": "^7.0.1", "node-fetch": "^3.3.2" }, homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/gaxios" };
});
var Hs = (0, import_chunk_w1d7ygsk.V)(function(Nd, Bs) {
  var Oc = Gs();
  Bs.exports = { pkg: Oc };
});
var Pr = (0, import_chunk_w1d7ygsk.V)(function(ye) {
  var Js = ye && ye.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(ye, "__esModule", { value: true });
  ye.GaxiosError = ye.GAXIOS_ERROR_SYMBOL = void 0;
  ye.defaultErrorRedactor = Ks;
  var $s = Js(xr()), Sc = Js(Hs()), br = Sc.default.pkg;
  ye.GAXIOS_ERROR_SYMBOL = Symbol.for(`${br.name}-gaxios-error`);
  class Nr extends Error {
    config;
    response;
    code;
    status;
    error;
    [ye.GAXIOS_ERROR_SYMBOL] = br.version;
    static [Symbol.hasInstance](e) {
      if (e && typeof e === "object" && ye.GAXIOS_ERROR_SYMBOL in e && e[ye.GAXIOS_ERROR_SYMBOL] === br.version) return true;
      return Function.prototype[Symbol.hasInstance].call(Nr, e);
    }
    constructor(e, t, r, s) {
      super(e, { cause: s });
      if (this.config = t, this.response = r, this.error = s instanceof Error ? s : void 0, this.config = (0, $s.default)(true, {}, t), this.response) this.response.config = (0, $s.default)(true, {}, this.response.config);
      if (this.response) {
        try {
          this.response.data = Rc(this.config.responseType, this.response?.bodyUsed ? this.response?.data : void 0);
        } catch {
        }
        this.status = this.response.status;
      }
      if (s instanceof DOMException) this.code = s.name;
      else if (s && typeof s === "object" && "code" in s && (typeof s.code === "string" || typeof s.code === "number")) this.code = s.code;
    }
    static extractAPIErrorFromResponse(e, t = "The request failed") {
      let r = t;
      if (typeof e.data === "string") r = e.data;
      if (e.data && typeof e.data === "object" && "error" in e.data && e.data.error && !e.ok) {
        if (typeof e.data.error === "string") return { message: e.data.error, code: e.status, status: e.statusText };
        if (typeof e.data.error === "object") {
          r = "message" in e.data.error && typeof e.data.error.message === "string" ? e.data.error.message : r;
          let s = "status" in e.data.error && typeof e.data.error.status === "string" ? e.data.error.status : e.statusText, n = "code" in e.data.error && typeof e.data.error.code === "number" ? e.data.error.code : e.status;
          if ("errors" in e.data.error && Array.isArray(e.data.error.errors)) {
            let a = [];
            for (let h of e.data.error.errors) if (typeof h === "object" && "message" in h && typeof h.message === "string") a.push(h.message);
            return Object.assign({ message: a.join(`
`) || r, code: n, status: s }, e.data.error);
          }
          return Object.assign({ message: r, code: n, status: s }, e.data.error);
        }
      }
      return { message: r, code: e.status, status: e.statusText };
    }
  }
  ye.GaxiosError = Nr;
  function Rc(e, t) {
    switch (e) {
      case "stream":
        return t;
      case "json":
        return JSON.parse(JSON.stringify(t));
      case "arraybuffer":
        return JSON.parse(Buffer.from(t).toString("utf8"));
      case "blob":
        return JSON.parse(t.text());
      default:
        return t;
    }
  }
  function Ks(e) {
    function r(a) {
      if (!a) return;
      a.forEach((h, g) => {
        if (/^authentication$/i.test(g) || /^authorization$/i.test(g) || /secret/i.test(g)) a.set(g, "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
      });
    }
    function s(a, h) {
      if (typeof a === "object" && a !== null && typeof a[h] === "string") {
        let g = a[h];
        if (/grant_type=/i.test(g) || /assertion=/i.test(g) || /secret/i.test(g)) a[h] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      }
    }
    function n(a) {
      if (!a || typeof a !== "object") return;
      else if (a instanceof FormData || a instanceof URLSearchParams || "forEach" in a && "set" in a) a.forEach((h, g) => {
        if (["grant_type", "assertion"].includes(g) || /secret/.test(g)) a.set(g, "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
      });
      else {
        if ("grant_type" in a) a.grant_type = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if ("assertion" in a) a.assertion = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if ("client_secret" in a) a.client_secret = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      }
    }
    if (e.config) {
      if (r(e.config.headers), s(e.config, "data"), n(e.config.data), s(e.config, "body"), n(e.config.body), e.config.url.searchParams.has("token")) e.config.url.searchParams.set("token", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
      if (e.config.url.searchParams.has("client_secret")) e.config.url.searchParams.set("client_secret", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
    }
    if (e.response) {
      if (Ks({ config: e.response.config }), r(e.response.headers), e.response.bodyUsed) s(e.response, "data"), n(e.response.data);
    }
    return e;
  }
});
var Ys = (0, import_chunk_w1d7ygsk.V)(function(Vs) {
  Object.defineProperty(Vs, "__esModule", { value: true });
  Vs.getRetryConfig = xc;
  async function xc(e) {
    let t = Ws(e);
    if (!e || !e.config || !t && !e.config.retry) return { shouldRetry: false };
    t = t || {}, t.currentRetryAttempt = t.currentRetryAttempt || 0, t.retry = t.retry === void 0 || t.retry === null ? 3 : t.retry, t.httpMethodsToRetry = t.httpMethodsToRetry || ["GET", "HEAD", "PUT", "OPTIONS", "DELETE"], t.noResponseRetries = t.noResponseRetries === void 0 || t.noResponseRetries === null ? 2 : t.noResponseRetries, t.retryDelayMultiplier = t.retryDelayMultiplier ? t.retryDelayMultiplier : 2, t.timeOfFirstRequest = t.timeOfFirstRequest ? t.timeOfFirstRequest : Date.now(), t.totalTimeout = t.totalTimeout ? t.totalTimeout : Number.MAX_SAFE_INTEGER, t.maxRetryDelay = t.maxRetryDelay ? t.maxRetryDelay : Number.MAX_SAFE_INTEGER;
    let r = [[100, 199], [408, 408], [429, 429], [500, 599]];
    if (t.statusCodesToRetry = t.statusCodesToRetry || r, e.config.retryConfig = t, !await (t.shouldRetry || bc)(e)) return { shouldRetry: false, config: e.config };
    let n = Nc(t);
    e.config.retryConfig.currentRetryAttempt += 1;
    let a = t.retryBackoff ? t.retryBackoff(e, n) : new Promise((h) => {
      setTimeout(h, n);
    });
    if (t.onRetryAttempt) await t.onRetryAttempt(e);
    return await a, { shouldRetry: true, config: e.config };
  }
  function bc(e) {
    let t = Ws(e);
    if (e.config.signal?.aborted && e.code !== "TimeoutError" || e.code === "AbortError") return false;
    if (!t || t.retry === 0) return false;
    if (!e.response && (t.currentRetryAttempt || 0) >= t.noResponseRetries) return false;
    if (!t.httpMethodsToRetry || !t.httpMethodsToRetry.includes(e.config.method?.toUpperCase() || "GET")) return false;
    if (e.response && e.response.status) {
      let r = false;
      for (let [s, n] of t.statusCodesToRetry) {
        let a = e.response.status;
        if (a >= s && a <= n) {
          r = true;
          break;
        }
      }
      if (!r) return false;
    }
    if (t.currentRetryAttempt = t.currentRetryAttempt || 0, t.currentRetryAttempt >= t.retry) return false;
    return true;
  }
  function Ws(e) {
    if (e && e.config && e.config.retryConfig) return e.config.retryConfig;
    return;
  }
  function Nc(e) {
    let r = (e.currentRetryAttempt ? 0 : e.retryDelay ?? 100) + (Math.pow(e.retryDelayMultiplier, e.currentRetryAttempt) - 1) / 2 * 1e3, s = e.totalTimeout - (Date.now() - e.timeOfFirstRequest);
    return Math.min(r, s, e.maxRetryDelay);
  }
});
var Ir = (0, import_chunk_w1d7ygsk.V)(function(zs) {
  Object.defineProperty(zs, "__esModule", { value: true });
  zs.GaxiosInterceptorManager = void 0;
  class Xs extends Set {
  }
  zs.GaxiosInterceptorManager = Xs;
});
var tn = (0, import_chunk_w1d7ygsk.V)(function(nt) {
  var Ic = nt && nt.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  }, st;
  Object.defineProperty(nt, "__esModule", { value: true });
  nt.Gaxios = void 0;
  var Uc = Ic(xr()), Zs = (0, import_chunk_w1d7ygsk.ft)("https"), ue = Pr(), en = Ys(), It = (0, import_chunk_w1d7ygsk.ft)("stream"), Ut = Ir(), jc = async () => globalThis.crypto?.randomUUID() || (await Promise.resolve().then(() => __toESM(require("crypto")))).randomUUID(), Dc = 204;
  class Ur {
    agentCache = /* @__PURE__ */ new Map();
    defaults;
    interceptors;
    constructor(e) {
      this.defaults = e || {}, this.interceptors = { request: new Ut.GaxiosInterceptorManager(), response: new Ut.GaxiosInterceptorManager() };
    }
    fetch(...e) {
      let t = e[0], r = e[1], s = void 0, n = new Headers();
      if (typeof t === "string") s = new URL(t);
      else if (t instanceof URL) s = t;
      else if (t && t.url) s = new URL(t.url);
      if (t && typeof t === "object" && "headers" in t) st.mergeHeaders(n, t.headers);
      if (r) st.mergeHeaders(n, new Headers(r.headers));
      if (typeof t === "object" && !(t instanceof URL)) return this.request({ ...r, ...t, headers: n, url: s });
      else return this.request({ ...r, headers: n, url: s });
    }
    async request(e = {}) {
      let t = await this.#s(e);
      return t = await this.#t(t), this.#r(this._request(t));
    }
    async _defaultAdapter(e) {
      let t = e.fetchImplementation || this.defaults.fetchImplementation || await st.#c(), r = { ...e };
      delete r.data;
      let s = await t(e.url, r), n = await this.getResponseData(e, s);
      if (!Object.getOwnPropertyDescriptor(s, "data")?.configurable) Object.defineProperties(s, { data: { configurable: true, writable: true, enumerable: true, value: n } });
      return Object.assign(s, { config: e, data: n });
    }
    async _request(e) {
      try {
        let t;
        if (e.adapter) t = await e.adapter(e, this._defaultAdapter.bind(this));
        else t = await this._defaultAdapter(e);
        if (!e.validateStatus(t.status)) {
          if (e.responseType === "stream") {
            let s = [];
            for await (let n of t.data) s.push(n);
            t.data = s.toString();
          }
          let r = ue.GaxiosError.extractAPIErrorFromResponse(t, `Request failed with status code ${t.status}`);
          throw new ue.GaxiosError(r?.message, e, t, r);
        }
        return t;
      } catch (t) {
        let r;
        if (t instanceof ue.GaxiosError) r = t;
        else if (t instanceof Error) r = new ue.GaxiosError(t.message, e, void 0, t);
        else r = new ue.GaxiosError("Unexpected Gaxios Error", e, void 0, t);
        let { shouldRetry: s, config: n } = await en.getRetryConfig(r);
        if (s && n) return r.config.retryConfig.currentRetryAttempt = n.retryConfig.currentRetryAttempt, e.retryConfig = r.config?.retryConfig, this.#n(e), this._request(e);
        if (e.errorRedactor) e.errorRedactor(r);
        throw r;
      }
    }
    async getResponseData(e, t) {
      if (t.status === Dc) return "";
      if (e.maxContentLength && t.headers.has("content-length") && e.maxContentLength < Number.parseInt(t.headers?.get("content-length") || "")) throw new ue.GaxiosError("Response's `Content-Length` is over the limit.", e, Object.assign(t, { config: e }));
      switch (e.responseType) {
        case "stream":
          return t.body;
        case "json": {
          let r = await t.text();
          try {
            return JSON.parse(r);
          } catch {
            return r;
          }
        }
        case "arraybuffer":
          return t.arrayBuffer();
        case "blob":
          return t.blob();
        case "text":
          return t.text();
        default:
          return this.getResponseDataFromContentType(t);
      }
    }
    #e(e, t = []) {
      let r = new URL(e), s = [...t], n = (process.env.NO_PROXY ?? process.env.no_proxy)?.split(",") || [];
      for (let a of n) s.push(a.trim());
      for (let a of s) if (a instanceof RegExp) {
        if (a.test(r.toString())) return false;
      } else if (a instanceof URL) {
        if (a.origin === r.origin) return false;
      } else if (a.startsWith("*.") || a.startsWith(".")) {
        let h = a.replace(/^\*\./, ".");
        if (r.hostname.endsWith(h)) return false;
      } else if (a === r.origin || a === r.hostname || a === r.href) return false;
      return true;
    }
    async #t(e) {
      let t = Promise.resolve(e);
      for (let r of this.interceptors.request.values()) if (r) t = t.then(r.resolved, r.rejected);
      return t;
    }
    async #r(e) {
      let t = Promise.resolve(e);
      for (let r of this.interceptors.response.values()) if (r) t = t.then(r.resolved, r.rejected);
      return t;
    }
    async #s(e) {
      let t = new Headers(this.defaults.headers);
      st.mergeHeaders(t, e.headers);
      let r = (0, Uc.default)(true, {}, this.defaults, e);
      if (!r.url) throw Error("URL is required.");
      if (r.baseURL) r.url = new URL(r.url, r.baseURL);
      if (r.url = new URL(r.url), r.params) if (r.paramsSerializer) {
        let a = r.paramsSerializer(r.params);
        if (a.startsWith("?")) a = a.slice(1);
        let h = r.url.toString().includes("?") ? "&" : "?";
        r.url = r.url + h + a;
      } else {
        let a = r.url instanceof URL ? r.url : new URL(r.url);
        for (let [h, g] of new URLSearchParams(r.params)) a.searchParams.append(h, g);
        r.url = a;
      }
      if (typeof e.maxContentLength === "number") r.size = e.maxContentLength;
      if (typeof e.maxRedirects === "number") r.follow = e.maxRedirects;
      let s = typeof r.data === "string" || r.data instanceof ArrayBuffer || r.data instanceof Blob || globalThis.File && r.data instanceof File || r.data instanceof FormData || r.data instanceof It.Readable || r.data instanceof ReadableStream || r.data instanceof String || r.data instanceof URLSearchParams || ArrayBuffer.isView(r.data) || ["Blob", "File", "FormData"].includes(r.data?.constructor?.name || "");
      if (r.multipart?.length) {
        let a = await jc();
        t.set("content-type", `multipart/related; boundary=${a}`), r.body = It.Readable.from(this.getMultipartRequest(r.multipart, a));
      } else if (s) r.body = r.data;
      else if (typeof r.data === "object") if (t.get("Content-Type") === "application/x-www-form-urlencoded") r.body = r.paramsSerializer ? r.paramsSerializer(r.data) : new URLSearchParams(r.data);
      else {
        if (!t.has("content-type")) t.set("content-type", "application/json");
        r.body = JSON.stringify(r.data);
      }
      else if (r.data) r.body = r.data;
      if (r.validateStatus = r.validateStatus || this.validateStatus, r.responseType = r.responseType || "unknown", !t.has("accept") && r.responseType === "json") t.set("accept", "application/json");
      let n = r.proxy || process?.env?.HTTPS_PROXY || process?.env?.https_proxy || process?.env?.HTTP_PROXY || process?.env?.http_proxy;
      if (r.agent) ;
      else if (n && this.#e(r.url, r.noProxy)) {
        let a = await st.#a();
        if (this.agentCache.has(n)) r.agent = this.agentCache.get(n);
        else r.agent = new a(n, { cert: r.cert, key: r.key }), this.agentCache.set(n, r.agent);
      } else if (r.cert && r.key) if (this.agentCache.has(r.key)) r.agent = this.agentCache.get(r.key);
      else r.agent = new Zs.Agent({ cert: r.cert, key: r.key }), this.agentCache.set(r.key, r.agent);
      if (typeof r.errorRedactor !== "function" && r.errorRedactor !== false) r.errorRedactor = ue.defaultErrorRedactor;
      if (r.body && !("duplex" in r)) r.duplex = "half";
      return this.#n(r), Object.assign(r, { headers: t, url: r.url instanceof URL ? r.url : new URL(r.url) });
    }
    #n(e) {
      if (e.timeout) {
        let t = AbortSignal.timeout(e.timeout);
        if (e.signal && !e.signal.aborted) e.signal = AbortSignal.any([e.signal, t]);
        else e.signal = t;
      }
    }
    validateStatus(e) {
      return e >= 200 && e < 300;
    }
    async getResponseDataFromContentType(e) {
      let t = e.headers.get("Content-Type");
      if (t === null) return e.text();
      if (t = t.toLowerCase(), t.includes("application/json")) {
        let r = await e.text();
        try {
          r = JSON.parse(r);
        } catch {
        }
        return r;
      } else if (t.match(/^text\//)) return e.text();
      else return e.blob();
    }
    async *getMultipartRequest(e, t) {
      let r = `--${t}--`;
      for (let s of e) {
        let n = s.headers.get("Content-Type") || "application/octet-stream";
        if (yield `--${t}\r
Content-Type: ${n}\r
\r
`, typeof s.content === "string") yield s.content;
        else yield* s.content;
        yield `\r
`;
      }
      yield r;
    }
    static #i;
    static #o;
    static async #a() {
      return this.#i ||= (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5s38v86a.js"))).then((m) => (0, import_chunk_w1d7ygsk.rt)(m.default))).HttpsProxyAgent, this.#i;
    }
    static async #c() {
      let e = typeof window < "u" && !!window;
      return this.#o ||= e ? window.fetch : (await Promise.resolve().then(() => __toESM(require("node-fetch")))).default, this.#o;
    }
    static mergeHeaders(e, ...t) {
      e = e instanceof Headers ? e : new Headers(e);
      for (let r of t) (r instanceof Headers ? r : new Headers(r)).forEach((n, a) => {
        a === "set-cookie" ? e.append(a, n) : e.set(a, n);
      });
      return e;
    }
  }
  nt.Gaxios = Ur;
  st = Ur;
});
var re = (0, import_chunk_w1d7ygsk.V)(function(ae) {
  var qc = ae && ae.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = { enumerable: true, get: function() {
      return t[r];
    } };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), Fc = ae && ae.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) qc(t, e, r);
  };
  Object.defineProperty(ae, "__esModule", { value: true });
  ae.instance = ae.Gaxios = ae.GaxiosError = void 0;
  ae.request = Lc;
  var jt = tn();
  Object.defineProperty(ae, "Gaxios", { enumerable: true, get: function() {
    return jt.Gaxios;
  } });
  var Mc = Pr();
  Object.defineProperty(ae, "GaxiosError", { enumerable: true, get: function() {
    return Mc.GaxiosError;
  } });
  Fc(Ir(), ae);
  ae.instance = new jt.Gaxios();
  async function Lc(e) {
    return ae.instance.request(e);
  }
});
var jr = (0, import_chunk_w1d7ygsk.V)(function(rn, Dt) {
  (function(e) {
    var t, r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, { ceil: s, floor: n } = Math, a = "[BigNumber Error] ", h = a + "Number primitive has more than 15 significant digits: ", g = 1e14, E = 14, k = 9007199254740991, T = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], U = 1e7, P = 1e9;
    function Y(j) {
      var I, M, K, C = A.prototype = { constructor: A, toString: null, valueOf: null }, ee = new A(1), W = 20, X = 4, ce = -7, de = 21, ze = -1e7, ke = 1e7, Qe = false, wt = 1, Le = 0, Cr = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: "\xA0", suffix: "" }, Ze = "0123456789abcdefghijklmnopqrstuvwxyz", vr = true;
      function A(i, o) {
        var c, y, l, f, m, u, d, _, p = this;
        if (!(p instanceof A)) return new A(i, o);
        if (o == null) {
          if (i && i._isBigNumber === true) {
            if (p.s = i.s, !i.c || i.e > ke) p.c = p.e = null;
            else if (i.e < ze) p.c = [p.e = 0];
            else p.e = i.e, p.c = i.c.slice();
            return;
          }
          if ((u = typeof i == "number") && i * 0 == 0) {
            if (p.s = 1 / i < 0 ? (i = -i, -1) : 1, i === ~~i) {
              for (f = 0, m = i; m >= 10; m /= 10, f++) ;
              if (f > ke) p.c = p.e = null;
              else p.e = f, p.c = [i];
              return;
            }
            _ = String(i);
          } else {
            if (!r.test(_ = String(i))) return K(p, _, u);
            p.s = _.charCodeAt(0) == 45 ? (_ = _.slice(1), -1) : 1;
          }
          if ((f = _.indexOf(".")) > -1) _ = _.replace(".", "");
          if ((m = _.search(/e/i)) > 0) {
            if (f < 0) f = m;
            f += +_.slice(m + 1), _ = _.substring(0, m);
          } else if (f < 0) f = _.length;
        } else {
          if (O(o, 2, Ze.length, "Base"), o == 10 && vr) return p = new A(i), pe(p, W + p.e + 1, X);
          if (_ = String(i), u = typeof i == "number") {
            if (i * 0 != 0) return K(p, _, u, o);
            if (p.s = 1 / i < 0 ? (_ = _.slice(1), -1) : 1, A.DEBUG && _.replace(/^0\.0*|\./, "").length > 15) throw Error(h + i);
          } else p.s = _.charCodeAt(0) === 45 ? (_ = _.slice(1), -1) : 1;
          c = Ze.slice(0, o), f = m = 0;
          for (d = _.length; m < d; m++) if (c.indexOf(y = _.charAt(m)) < 0) {
            if (y == ".") {
              if (m > f) {
                f = d;
                continue;
              }
            } else if (!l) {
              if (_ == _.toUpperCase() && (_ = _.toLowerCase()) || _ == _.toLowerCase() && (_ = _.toUpperCase())) {
                l = true, m = -1, f = 0;
                continue;
              }
            }
            return K(p, String(i), u, o);
          }
          if (u = false, _ = M(_, o, 10, p.s), (f = _.indexOf(".")) > -1) _ = _.replace(".", "");
          else f = _.length;
        }
        for (m = 0; _.charCodeAt(m) === 48; m++) ;
        for (d = _.length; _.charCodeAt(--d) === 48; ) ;
        if (_ = _.slice(m, ++d)) {
          if (d -= m, u && A.DEBUG && d > 15 && (i > k || i !== n(i))) throw Error(h + p.s * i);
          if ((f = f - m - 1) > ke) p.c = p.e = null;
          else if (f < ze) p.c = [p.e = 0];
          else {
            if (p.e = f, p.c = [], m = (f + 1) % E, f < 0) m += E;
            if (m < d) {
              if (m) p.c.push(+_.slice(0, m));
              for (d -= E; m < d; ) p.c.push(+_.slice(m, m += E));
              m = E - (_ = _.slice(m)).length;
            } else m -= d;
            for (; m--; _ += "0") ;
            p.c.push(+_);
          }
        } else p.c = [p.e = 0];
      }
      A.clone = Y, A.ROUND_UP = 0, A.ROUND_DOWN = 1, A.ROUND_CEIL = 2, A.ROUND_FLOOR = 3, A.ROUND_HALF_UP = 4, A.ROUND_HALF_DOWN = 5, A.ROUND_HALF_EVEN = 6, A.ROUND_HALF_CEIL = 7, A.ROUND_HALF_FLOOR = 8, A.EUCLID = 9, A.config = A.set = function(i) {
        var o, c;
        if (i != null) if (typeof i == "object") {
          if (i.hasOwnProperty(o = "DECIMAL_PLACES")) c = i[o], O(c, 0, P, o), W = c;
          if (i.hasOwnProperty(o = "ROUNDING_MODE")) c = i[o], O(c, 0, 8, o), X = c;
          if (i.hasOwnProperty(o = "EXPONENTIAL_AT")) if (c = i[o], c && c.pop) O(c[0], -P, 0, o), O(c[1], 0, P, o), ce = c[0], de = c[1];
          else O(c, -P, P, o), ce = -(de = c < 0 ? -c : c);
          if (i.hasOwnProperty(o = "RANGE")) if (c = i[o], c && c.pop) O(c[0], -P, -1, o), O(c[1], 1, P, o), ze = c[0], ke = c[1];
          else if (O(c, -P, P, o), c) ze = -(ke = c < 0 ? -c : c);
          else throw Error(a + o + " cannot be zero: " + c);
          if (i.hasOwnProperty(o = "CRYPTO")) if (c = i[o], c === !!c) if (c) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) Qe = c;
          else throw Qe = !c, Error(a + "crypto unavailable");
          else Qe = c;
          else throw Error(a + o + " not true or false: " + c);
          if (i.hasOwnProperty(o = "MODULO_MODE")) c = i[o], O(c, 0, 9, o), wt = c;
          if (i.hasOwnProperty(o = "POW_PRECISION")) c = i[o], O(c, 0, P, o), Le = c;
          if (i.hasOwnProperty(o = "FORMAT")) if (c = i[o], typeof c == "object") Cr = c;
          else throw Error(a + o + " not an object: " + c);
          if (i.hasOwnProperty(o = "ALPHABET")) if (c = i[o], typeof c == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(c)) vr = c.slice(0, 10) == "0123456789", Ze = c;
          else throw Error(a + o + " invalid: " + c);
        } else throw Error(a + "Object expected: " + i);
        return { DECIMAL_PLACES: W, ROUNDING_MODE: X, EXPONENTIAL_AT: [ce, de], RANGE: [ze, ke], CRYPTO: Qe, MODULO_MODE: wt, POW_PRECISION: Le, FORMAT: Cr, ALPHABET: Ze };
      }, A.isBigNumber = function(i) {
        if (!i || i._isBigNumber !== true) return false;
        if (!A.DEBUG) return true;
        var o, c, { c: y, e: l, s: f } = i;
        e: if ({}.toString.call(y) == "[object Array]") {
          if ((f === 1 || f === -1) && l >= -P && l <= P && l === n(l)) {
            if (y[0] === 0) {
              if (l === 0 && y.length === 1) return true;
              break e;
            }
            if (o = (l + 1) % E, o < 1) o += E;
            if (String(y[0]).length == o) {
              for (o = 0; o < y.length; o++) if (c = y[o], c < 0 || c >= g || c !== n(c)) break e;
              if (c !== 0) return true;
            }
          }
        } else if (y === null && l === null && (f === null || f === 1 || f === -1)) return true;
        throw Error(a + "Invalid BigNumber: " + i);
      }, A.maximum = A.max = function() {
        return Ps(arguments, -1);
      }, A.minimum = A.min = function() {
        return Ps(arguments, 1);
      }, A.random = (function() {
        var i = 9007199254740992, o = Math.random() * i & 2097151 ? function() {
          return n(Math.random() * i);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(c) {
          var y, l, f, m, u, d = 0, _ = [], p = new A(ee);
          if (c == null) c = W;
          else O(c, 0, P);
          if (m = s(c / E), Qe) if (crypto.getRandomValues) {
            y = crypto.getRandomValues(new Uint32Array(m *= 2));
            for (; d < m; ) if (u = y[d] * 131072 + (y[d + 1] >>> 11), u >= 9e15) l = crypto.getRandomValues(new Uint32Array(2)), y[d] = l[0], y[d + 1] = l[1];
            else _.push(u % 1e14), d += 2;
            d = m / 2;
          } else if (crypto.randomBytes) {
            y = crypto.randomBytes(m *= 7);
            for (; d < m; ) if (u = (y[d] & 31) * 281474976710656 + y[d + 1] * 1099511627776 + y[d + 2] * 4294967296 + y[d + 3] * 16777216 + (y[d + 4] << 16) + (y[d + 5] << 8) + y[d + 6], u >= 9e15) crypto.randomBytes(7).copy(y, d);
            else _.push(u % 1e14), d += 7;
            d = m / 7;
          } else throw Qe = false, Error(a + "crypto unavailable");
          if (!Qe) {
            for (; d < m; ) if (u = o(), u < 9e15) _[d++] = u % 1e14;
          }
          if (m = _[--d], c %= E, m && c) u = T[E - c], _[d] = n(m / u) * u;
          for (; _[d] === 0; _.pop(), d--) ;
          if (d < 0) _ = [f = 0];
          else {
            for (f = -1; _[0] === 0; _.splice(0, 1), f -= E) ;
            for (d = 1, u = _[0]; u >= 10; u /= 10, d++) ;
            if (d < E) f -= E - d;
          }
          return p.e = f, p.c = _, p;
        };
      })(), A.sum = function() {
        var i = 1, o = arguments, c = new A(o[0]);
        for (; i < o.length; ) c = c.plus(o[i++]);
        return c;
      }, M = /* @__PURE__ */ (function() {
        var i = "0123456789";
        function o(c, y, l, f) {
          var m, u = [0], d, _ = 0, p = c.length;
          for (; _ < p; ) {
            for (d = u.length; d--; u[d] *= y) ;
            u[0] += f.indexOf(c.charAt(_++));
            for (m = 0; m < u.length; m++) if (u[m] > l - 1) {
              if (u[m + 1] == null) u[m + 1] = 0;
              u[m + 1] += u[m] / l | 0, u[m] %= l;
            }
          }
          return u.reverse();
        }
        return function(c, y, l, f, m) {
          var u, d, _, p, w, R, x, F, z = c.indexOf("."), te = W, q = X;
          if (z >= 0) p = Le, Le = 0, c = c.replace(".", ""), F = new A(y), R = F.pow(c.length - z), Le = p, F.c = o(ie(S(R.c), R.e, "0"), 10, l, i), F.e = F.c.length;
          x = o(c, y, l, m ? (u = Ze, i) : (u = i, Ze)), _ = p = x.length;
          for (; x[--p] == 0; x.pop()) ;
          if (!x[0]) return u.charAt(0);
          if (z < 0) --_;
          else R.c = x, R.e = _, R.s = f, R = I(R, F, te, q, l), x = R.c, w = R.r, _ = R.e;
          if (d = _ + te + 1, z = x[d], p = l / 2, w = w || d < 0 || x[d + 1] != null, w = q < 4 ? (z != null || w) && (q == 0 || q == (R.s < 0 ? 3 : 2)) : z > p || z == p && (q == 4 || w || q == 6 && x[d - 1] & 1 || q == (R.s < 0 ? 8 : 7)), d < 1 || !x[0]) c = w ? ie(u.charAt(1), -te, u.charAt(0)) : u.charAt(0);
          else {
            if (x.length = d, w) {
              for (--l; ++x[--d] > l; ) if (x[d] = 0, !d) ++_, x = [1].concat(x);
            }
            for (p = x.length; !x[--p]; ) ;
            for (z = 0, c = ""; z <= p; c += u.charAt(x[z++])) ;
            c = ie(c, _, u.charAt(0));
          }
          return c;
        };
      })(), I = /* @__PURE__ */ (function() {
        function i(y, l, f) {
          var m, u, d, _, p = 0, w = y.length, R = l % U, x = l / U | 0;
          for (y = y.slice(); w--; ) d = y[w] % U, _ = y[w] / U | 0, m = x * d + _ * R, u = R * d + m % U * U + p, p = (u / f | 0) + (m / U | 0) + x * _, y[w] = u % f;
          if (p) y = [p].concat(y);
          return y;
        }
        function o(y, l, f, m) {
          var u, d;
          if (f != m) d = f > m ? 1 : -1;
          else for (u = d = 0; u < f; u++) if (y[u] != l[u]) {
            d = y[u] > l[u] ? 1 : -1;
            break;
          }
          return d;
        }
        function c(y, l, f, m) {
          var u = 0;
          for (; f--; ) y[f] -= u, u = y[f] < l[f] ? 1 : 0, y[f] = u * m + y[f] - l[f];
          for (; !y[0] && y.length > 1; y.splice(0, 1)) ;
        }
        return function(y, l, f, m, u) {
          var d, _, p, w, R, x, F, z, te, q, G, ne, Nt, Sr, Rr, xe, At, ge = y.s == l.s ? 1 : -1, oe = y.c, Q = l.c;
          if (!oe || !oe[0] || !Q || !Q[0]) return new A(!y.s || !l.s || (oe ? Q && oe[0] == Q[0] : !Q) ? NaN : oe && oe[0] == 0 || !Q ? ge * 0 : ge / 0);
          if (z = new A(ge), te = z.c = [], _ = y.e - l.e, ge = f + _ + 1, !u) u = g, _ = J(y.e / E) - J(l.e / E), ge = ge / E | 0;
          for (p = 0; Q[p] == (oe[p] || 0); p++) ;
          if (Q[p] > (oe[p] || 0)) _--;
          if (ge < 0) te.push(1), w = true;
          else {
            if (Sr = oe.length, xe = Q.length, p = 0, ge += 2, R = n(u / (Q[0] + 1)), R > 1) Q = i(Q, R, u), oe = i(oe, R, u), xe = Q.length, Sr = oe.length;
            Nt = xe, q = oe.slice(0, xe), G = q.length;
            for (; G < xe; q[G++] = 0) ;
            if (At = Q.slice(), At = [0].concat(At), Rr = Q[0], Q[1] >= u / 2) Rr++;
            do {
              if (R = 0, d = o(Q, q, xe, G), d < 0) {
                if (ne = q[0], xe != G) ne = ne * u + (q[1] || 0);
                if (R = n(ne / Rr), R > 1) {
                  if (R >= u) R = u - 1;
                  x = i(Q, R, u), F = x.length, G = q.length;
                  while (o(x, q, F, G) == 1) R--, c(x, xe < F ? At : Q, F, u), F = x.length, d = 1;
                } else {
                  if (R == 0) d = R = 1;
                  x = Q.slice(), F = x.length;
                }
                if (F < G) x = [0].concat(x);
                if (c(q, x, G, u), G = q.length, d == -1) while (o(Q, q, xe, G) < 1) R++, c(q, xe < G ? At : Q, G, u), G = q.length;
              } else if (d === 0) R++, q = [0];
              if (te[p++] = R, q[0]) q[G++] = oe[Nt] || 0;
              else q = [oe[Nt]], G = 1;
            } while ((Nt++ < Sr || q[0] != null) && ge--);
            if (w = q[0] != null, !te[0]) te.splice(0, 1);
          }
          if (u == g) {
            for (p = 1, ge = te[0]; ge >= 10; ge /= 10, p++) ;
            pe(z, f + (z.e = p + _ * E - 1) + 1, m, w);
          } else z.e = _, z.r = +w;
          return z;
        };
      })();
      function kr(i, o, c, y) {
        var l, f, m, u, d;
        if (c == null) c = X;
        else O(c, 0, 8);
        if (!i.c) return i.toString();
        if (l = i.c[0], m = i.e, o == null) d = S(i.c), d = y == 1 || y == 2 && (m <= ce || m >= de) ? Z(d, m) : ie(d, m, "0");
        else if (i = pe(new A(i), o, c), f = i.e, d = S(i.c), u = d.length, y == 1 || y == 2 && (o <= f || f <= ce)) {
          for (; u < o; d += "0", u++) ;
          d = Z(d, f);
        } else if (o -= m, d = ie(d, f, "0"), f + 1 > u) {
          if (--o > 0) for (d += "."; o--; d += "0") ;
        } else if (o += f - u, o > 0) {
          if (f + 1 == u) d += ".";
          for (; o--; d += "0") ;
        }
        return i.s < 0 && l ? "-" + d : d;
      }
      function Ps(i, o) {
        var c, y, l = 1, f = new A(i[0]);
        for (; l < i.length; l++) if (y = new A(i[l]), !y.s || (c = N(f, y)) === o || c === 0 && f.s === o) f = y;
        return f;
      }
      function Or(i, o, c) {
        var y = 1, l = o.length;
        for (; !o[--l]; o.pop()) ;
        for (l = o[0]; l >= 10; l /= 10, y++) ;
        if ((c = y + c * E - 1) > ke) i.c = i.e = null;
        else if (c < ze) i.c = [i.e = 0];
        else i.e = c, i.c = o;
        return i;
      }
      K = /* @__PURE__ */ (function() {
        var i = /^(-?)0([xbo])(?=\w[\w.]*$)/i, o = /^([^.]+)\.$/, c = /^\.([^.]+)$/, y = /^-?(Infinity|NaN)$/, l = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(f, m, u, d) {
          var _, p = u ? m : m.replace(l, "");
          if (y.test(p)) f.s = isNaN(p) ? null : p < 0 ? -1 : 1;
          else {
            if (!u) {
              if (p = p.replace(i, function(w, R, x) {
                return _ = (x = x.toLowerCase()) == "x" ? 16 : x == "b" ? 2 : 8, !d || d == _ ? R : w;
              }), d) _ = d, p = p.replace(o, "$1").replace(c, "0.$1");
              if (m != p) return new A(p, _);
            }
            if (A.DEBUG) throw Error(a + "Not a" + (d ? " base " + d : "") + " number: " + m);
            f.s = null;
          }
          f.c = f.e = null;
        };
      })();
      function pe(i, o, c, y) {
        var l, f, m, u, d, _, p, w = i.c, R = T;
        if (w) {
          e: {
            for (l = 1, u = w[0]; u >= 10; u /= 10, l++) ;
            if (f = o - l, f < 0) f += E, m = o, d = w[_ = 0], p = n(d / R[l - m - 1] % 10);
            else if (_ = s((f + 1) / E), _ >= w.length) if (y) {
              for (; w.length <= _; w.push(0)) ;
              d = p = 0, l = 1, f %= E, m = f - E + 1;
            } else break e;
            else {
              d = u = w[_];
              for (l = 1; u >= 10; u /= 10, l++) ;
              f %= E, m = f - E + l, p = m < 0 ? 0 : n(d / R[l - m - 1] % 10);
            }
            if (y = y || o < 0 || w[_ + 1] != null || (m < 0 ? d : d % R[l - m - 1]), y = c < 4 ? (p || y) && (c == 0 || c == (i.s < 0 ? 3 : 2)) : p > 5 || p == 5 && (c == 4 || y || c == 6 && (f > 0 ? m > 0 ? d / R[l - m] : 0 : w[_ - 1]) % 10 & 1 || c == (i.s < 0 ? 8 : 7)), o < 1 || !w[0]) {
              if (w.length = 0, y) o -= i.e + 1, w[0] = R[(E - o % E) % E], i.e = -o || 0;
              else w[0] = i.e = 0;
              return i;
            }
            if (f == 0) w.length = _, u = 1, _--;
            else w.length = _ + 1, u = R[E - f], w[_] = m > 0 ? n(d / R[l - m] % R[m]) * u : 0;
            if (y) for (; ; ) if (_ == 0) {
              for (f = 1, m = w[0]; m >= 10; m /= 10, f++) ;
              m = w[0] += u;
              for (u = 1; m >= 10; m /= 10, u++) ;
              if (f != u) {
                if (i.e++, w[0] == g) w[0] = 1;
              }
              break;
            } else {
              if (w[_] += u, w[_] != g) break;
              w[_--] = 0, u = 1;
            }
            for (f = w.length; w[--f] === 0; w.pop()) ;
          }
          if (i.e > ke) i.c = i.e = null;
          else if (i.e < ze) i.c = [i.e = 0];
        }
        return i;
      }
      function je(i) {
        var o, c = i.e;
        if (c === null) return i.toString();
        return o = S(i.c), o = c <= ce || c >= de ? Z(o, c) : ie(o, c, "0"), i.s < 0 ? "-" + o : o;
      }
      if (C.absoluteValue = C.abs = function() {
        var i = new A(this);
        if (i.s < 0) i.s = 1;
        return i;
      }, C.comparedTo = function(i, o) {
        return N(this, new A(i, o));
      }, C.decimalPlaces = C.dp = function(i, o) {
        var c, y, l, f = this;
        if (i != null) {
          if (O(i, 0, P), o == null) o = X;
          else O(o, 0, 8);
          return pe(new A(f), i + f.e + 1, o);
        }
        if (!(c = f.c)) return null;
        if (y = ((l = c.length - 1) - J(this.e / E)) * E, l = c[l]) for (; l % 10 == 0; l /= 10, y--) ;
        if (y < 0) y = 0;
        return y;
      }, C.dividedBy = C.div = function(i, o) {
        return I(this, new A(i, o), W, X);
      }, C.dividedToIntegerBy = C.idiv = function(i, o) {
        return I(this, new A(i, o), 0, 1);
      }, C.exponentiatedBy = C.pow = function(i, o) {
        var c, y, l, f, m, u, d, _, p, w = this;
        if (i = new A(i), i.c && !i.isInteger()) throw Error(a + "Exponent not an integer: " + je(i));
        if (o != null) o = new A(o);
        if (u = i.e > 14, !w.c || !w.c[0] || w.c[0] == 1 && !w.e && w.c.length == 1 || !i.c || !i.c[0]) return p = new A(Math.pow(+je(w), u ? i.s * (2 - L(i)) : +je(i))), o ? p.mod(o) : p;
        if (d = i.s < 0, o) {
          if (o.c ? !o.c[0] : !o.s) return new A(NaN);
          if (y = !d && w.isInteger() && o.isInteger(), y) w = w.mod(o);
        } else if (i.e > 9 && (w.e > 0 || w.e < -1 || (w.e == 0 ? w.c[0] > 1 || u && w.c[1] >= 24e7 : w.c[0] < 8e13 || u && w.c[0] <= 9999975e7))) {
          if (f = w.s < 0 && L(i) ? -0 : 0, w.e > -1) f = 1 / f;
          return new A(d ? 1 / f : f);
        } else if (Le) f = s(Le / E + 2);
        if (u) {
          if (c = new A(0.5), d) i.s = 1;
          _ = L(i);
        } else l = Math.abs(+je(i)), _ = l % 2;
        p = new A(ee);
        for (; ; ) {
          if (_) {
            if (p = p.times(w), !p.c) break;
            if (f) {
              if (p.c.length > f) p.c.length = f;
            } else if (y) p = p.mod(o);
          }
          if (l) {
            if (l = n(l / 2), l === 0) break;
            _ = l % 2;
          } else if (i = i.times(c), pe(i, i.e + 1, 1), i.e > 14) _ = L(i);
          else {
            if (l = +je(i), l === 0) break;
            _ = l % 2;
          }
          if (w = w.times(w), f) {
            if (w.c && w.c.length > f) w.c.length = f;
          } else if (y) w = w.mod(o);
        }
        if (y) return p;
        if (d) p = ee.div(p);
        return o ? p.mod(o) : f ? pe(p, Le, X, m) : p;
      }, C.integerValue = function(i) {
        var o = new A(this);
        if (i == null) i = X;
        else O(i, 0, 8);
        return pe(o, o.e + 1, i);
      }, C.isEqualTo = C.eq = function(i, o) {
        return N(this, new A(i, o)) === 0;
      }, C.isFinite = function() {
        return !!this.c;
      }, C.isGreaterThan = C.gt = function(i, o) {
        return N(this, new A(i, o)) > 0;
      }, C.isGreaterThanOrEqualTo = C.gte = function(i, o) {
        return (o = N(this, new A(i, o))) === 1 || o === 0;
      }, C.isInteger = function() {
        return !!this.c && J(this.e / E) > this.c.length - 2;
      }, C.isLessThan = C.lt = function(i, o) {
        return N(this, new A(i, o)) < 0;
      }, C.isLessThanOrEqualTo = C.lte = function(i, o) {
        return (o = N(this, new A(i, o))) === -1 || o === 0;
      }, C.isNaN = function() {
        return !this.s;
      }, C.isNegative = function() {
        return this.s < 0;
      }, C.isPositive = function() {
        return this.s > 0;
      }, C.isZero = function() {
        return !!this.c && this.c[0] == 0;
      }, C.minus = function(i, o) {
        var c, y, l, f, m = this, u = m.s;
        if (i = new A(i, o), o = i.s, !u || !o) return new A(NaN);
        if (u != o) return i.s = -o, m.plus(i);
        var d = m.e / E, _ = i.e / E, p = m.c, w = i.c;
        if (!d || !_) {
          if (!p || !w) return p ? (i.s = -o, i) : new A(w ? m : NaN);
          if (!p[0] || !w[0]) return w[0] ? (i.s = -o, i) : new A(p[0] ? m : X == 3 ? -0 : 0);
        }
        if (d = J(d), _ = J(_), p = p.slice(), u = d - _) {
          if (f = u < 0) u = -u, l = p;
          else _ = d, l = w;
          l.reverse();
          for (o = u; o--; l.push(0)) ;
          l.reverse();
        } else {
          y = (f = (u = p.length) < (o = w.length)) ? u : o;
          for (u = o = 0; o < y; o++) if (p[o] != w[o]) {
            f = p[o] < w[o];
            break;
          }
        }
        if (f) l = p, p = w, w = l, i.s = -i.s;
        if (o = (y = w.length) - (c = p.length), o > 0) for (; o--; p[c++] = 0) ;
        o = g - 1;
        for (; y > u; ) {
          if (p[--y] < w[y]) {
            for (c = y; c && !p[--c]; p[c] = o) ;
            --p[c], p[y] += g;
          }
          p[y] -= w[y];
        }
        for (; p[0] == 0; p.splice(0, 1), --_) ;
        if (!p[0]) return i.s = X == 3 ? -1 : 1, i.c = [i.e = 0], i;
        return Or(i, p, _);
      }, C.modulo = C.mod = function(i, o) {
        var c, y, l = this;
        if (i = new A(i, o), !l.c || !i.s || i.c && !i.c[0]) return new A(NaN);
        else if (!i.c || l.c && !l.c[0]) return new A(l);
        if (wt == 9) y = i.s, i.s = 1, c = I(l, i, 0, 3), i.s = y, c.s *= y;
        else c = I(l, i, 0, wt);
        if (i = l.minus(c.times(i)), !i.c[0] && wt == 1) i.s = l.s;
        return i;
      }, C.multipliedBy = C.times = function(i, o) {
        var c, y, l, f, m, u, d, _, p, w, R, x, F, z, te, q = this, G = q.c, ne = (i = new A(i, o)).c;
        if (!G || !ne || !G[0] || !ne[0]) {
          if (!q.s || !i.s || G && !G[0] && !ne || ne && !ne[0] && !G) i.c = i.e = i.s = null;
          else if (i.s *= q.s, !G || !ne) i.c = i.e = null;
          else i.c = [0], i.e = 0;
          return i;
        }
        if (y = J(q.e / E) + J(i.e / E), i.s *= q.s, d = G.length, w = ne.length, d < w) F = G, G = ne, ne = F, l = d, d = w, w = l;
        for (l = d + w, F = []; l--; F.push(0)) ;
        z = g, te = U;
        for (l = w; --l >= 0; ) {
          c = 0, R = ne[l] % te, x = ne[l] / te | 0;
          for (m = d, f = l + m; f > l; ) _ = G[--m] % te, p = G[m] / te | 0, u = x * _ + p * R, _ = R * _ + u % te * te + F[f] + c, c = (_ / z | 0) + (u / te | 0) + x * p, F[f--] = _ % z;
          F[f] = c;
        }
        if (c) ++y;
        else F.splice(0, 1);
        return Or(i, F, y);
      }, C.negated = function() {
        var i = new A(this);
        return i.s = -i.s || null, i;
      }, C.plus = function(i, o) {
        var c, y = this, l = y.s;
        if (i = new A(i, o), o = i.s, !l || !o) return new A(NaN);
        if (l != o) return i.s = -o, y.minus(i);
        var f = y.e / E, m = i.e / E, u = y.c, d = i.c;
        if (!f || !m) {
          if (!u || !d) return new A(l / 0);
          if (!u[0] || !d[0]) return d[0] ? i : new A(u[0] ? y : l * 0);
        }
        if (f = J(f), m = J(m), u = u.slice(), l = f - m) {
          if (l > 0) m = f, c = d;
          else l = -l, c = u;
          c.reverse();
          for (; l--; c.push(0)) ;
          c.reverse();
        }
        if (l = u.length, o = d.length, l - o < 0) c = d, d = u, u = c, o = l;
        for (l = 0; o; ) l = (u[--o] = u[o] + d[o] + l) / g | 0, u[o] = g === u[o] ? 0 : u[o] % g;
        if (l) u = [l].concat(u), ++m;
        return Or(i, u, m);
      }, C.precision = C.sd = function(i, o) {
        var c, y, l, f = this;
        if (i != null && i !== !!i) {
          if (O(i, 1, P), o == null) o = X;
          else O(o, 0, 8);
          return pe(new A(f), i, o);
        }
        if (!(c = f.c)) return null;
        if (l = c.length - 1, y = l * E + 1, l = c[l]) {
          for (; l % 10 == 0; l /= 10, y--) ;
          for (l = c[0]; l >= 10; l /= 10, y++) ;
        }
        if (i && f.e + 1 > y) y = f.e + 1;
        return y;
      }, C.shiftedBy = function(i) {
        return O(i, -k, k), this.times("1e" + i);
      }, C.squareRoot = C.sqrt = function() {
        var i, o, c, y, l, f = this, { c: m, s: u, e: d } = f, _ = W + 4, p = new A("0.5");
        if (u !== 1 || !m || !m[0]) return new A(!u || u < 0 && (!m || m[0]) ? NaN : m ? f : 1 / 0);
        if (u = Math.sqrt(+je(f)), u == 0 || u == 1 / 0) {
          if (o = S(m), (o.length + d) % 2 == 0) o += "0";
          if (u = Math.sqrt(+o), d = J((d + 1) / 2) - (d < 0 || d % 2), u == 1 / 0) o = "5e" + d;
          else o = u.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + d;
          c = new A(o);
        } else c = new A(u + "");
        if (c.c[0]) {
          if (d = c.e, u = d + _, u < 3) u = 0;
          for (; ; ) if (l = c, c = p.times(l.plus(I(f, l, _, 1))), S(l.c).slice(0, u) === (o = S(c.c)).slice(0, u)) {
            if (c.e < d) --u;
            if (o = o.slice(u - 3, u + 1), o == "9999" || !y && o == "4999") {
              if (!y) {
                if (pe(l, l.e + W + 2, 0), l.times(l).eq(f)) {
                  c = l;
                  break;
                }
              }
              _ += 4, u += 4, y = 1;
            } else {
              if (!+o || !+o.slice(1) && o.charAt(0) == "5") pe(c, c.e + W + 2, 1), i = !c.times(c).eq(f);
              break;
            }
          }
        }
        return pe(c, c.e + W + 1, X, i);
      }, C.toExponential = function(i, o) {
        if (i != null) O(i, 0, P), i++;
        return kr(this, i, o, 1);
      }, C.toFixed = function(i, o) {
        if (i != null) O(i, 0, P), i = i + this.e + 1;
        return kr(this, i, o);
      }, C.toFormat = function(i, o, c) {
        var y, l = this;
        if (c == null) if (i != null && o && typeof o == "object") c = o, o = null;
        else if (i && typeof i == "object") c = i, i = o = null;
        else c = Cr;
        else if (typeof c != "object") throw Error(a + "Argument not an object: " + c);
        if (y = l.toFixed(i, o), l.c) {
          var f, m = y.split("."), u = +c.groupSize, d = +c.secondaryGroupSize, _ = c.groupSeparator || "", p = m[0], w = m[1], R = l.s < 0, x = R ? p.slice(1) : p, F = x.length;
          if (d) f = u, u = d, d = f, F -= f;
          if (u > 0 && F > 0) {
            f = F % u || u, p = x.substr(0, f);
            for (; f < F; f += u) p += _ + x.substr(f, u);
            if (d > 0) p += _ + x.slice(f);
            if (R) p = "-" + p;
          }
          y = w ? p + (c.decimalSeparator || "") + ((d = +c.fractionGroupSize) ? w.replace(new RegExp("\\d{" + d + "}\\B", "g"), "$&" + (c.fractionGroupSeparator || "")) : w) : p;
        }
        return (c.prefix || "") + y + (c.suffix || "");
      }, C.toFraction = function(i) {
        var o, c, y, l, f, m, u, d, _, p, w, R, x = this, F = x.c;
        if (i != null) {
          if (u = new A(i), !u.isInteger() && (u.c || u.s !== 1) || u.lt(ee)) throw Error(a + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + je(u));
        }
        if (!F) return new A(x);
        o = new A(ee), _ = c = new A(ee), y = d = new A(ee), R = S(F), f = o.e = R.length - x.e - 1, o.c[0] = T[(m = f % E) < 0 ? E + m : m], i = !i || u.comparedTo(o) > 0 ? f > 0 ? o : _ : u, m = ke, ke = 1 / 0, u = new A(R), d.c[0] = 0;
        for (; ; ) {
          if (p = I(u, o, 0, 1), l = c.plus(p.times(y)), l.comparedTo(i) == 1) break;
          c = y, y = l, _ = d.plus(p.times(l = _)), d = l, o = u.minus(p.times(l = o)), u = l;
        }
        return l = I(i.minus(c), y, 0, 1), d = d.plus(l.times(_)), c = c.plus(l.times(y)), d.s = _.s = x.s, f = f * 2, w = I(_, y, f, X).minus(x).abs().comparedTo(I(d, c, f, X).minus(x).abs()) < 1 ? [_, y] : [d, c], ke = m, w;
      }, C.toNumber = function() {
        return +je(this);
      }, C.toPrecision = function(i, o) {
        if (i != null) O(i, 1, P);
        return kr(this, i, o, 2);
      }, C.toString = function(i) {
        var o, c = this, y = c.s, l = c.e;
        if (l === null) if (y) {
          if (o = "Infinity", y < 0) o = "-" + o;
        } else o = "NaN";
        else {
          if (i == null) o = l <= ce || l >= de ? Z(S(c.c), l) : ie(S(c.c), l, "0");
          else if (i === 10 && vr) c = pe(new A(c), W + l + 1, X), o = ie(S(c.c), c.e, "0");
          else O(i, 2, Ze.length, "Base"), o = M(ie(S(c.c), l, "0"), 10, i, y, true);
          if (y < 0 && c.c[0]) o = "-" + o;
        }
        return o;
      }, C.valueOf = C.toJSON = function() {
        return je(this);
      }, C._isBigNumber = true, j != null) A.set(j);
      return A;
    }
    function J(j) {
      var I = j | 0;
      return j > 0 || j === I ? I : I - 1;
    }
    function S(j) {
      var I, M, K = 1, C = j.length, ee = j[0] + "";
      for (; K < C; ) {
        I = j[K++] + "", M = E - I.length;
        for (; M--; I = "0" + I) ;
        ee += I;
      }
      for (C = ee.length; ee.charCodeAt(--C) === 48; ) ;
      return ee.slice(0, C + 1 || 1);
    }
    function N(j, I) {
      var M, K, C = j.c, ee = I.c, W = j.s, X = I.s, ce = j.e, de = I.e;
      if (!W || !X) return null;
      if (M = C && !C[0], K = ee && !ee[0], M || K) return M ? K ? 0 : -X : W;
      if (W != X) return W;
      if (M = W < 0, K = ce == de, !C || !ee) return K ? 0 : !C ^ M ? 1 : -1;
      if (!K) return ce > de ^ M ? 1 : -1;
      X = (ce = C.length) < (de = ee.length) ? ce : de;
      for (W = 0; W < X; W++) if (C[W] != ee[W]) return C[W] > ee[W] ^ M ? 1 : -1;
      return ce == de ? 0 : ce > de ^ M ? 1 : -1;
    }
    function O(j, I, M, K) {
      if (j < I || j > M || j !== n(j)) throw Error(a + (K || "Argument") + (typeof j == "number" ? j < I || j > M ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(j));
    }
    function L(j) {
      var I = j.c.length - 1;
      return J(j.e / E) == I && j.c[I] % 2 != 0;
    }
    function Z(j, I) {
      return (j.length > 1 ? j.charAt(0) + "." + j.slice(1) : j) + (I < 0 ? "e" : "e+") + I;
    }
    function ie(j, I, M) {
      var K, C;
      if (I < 0) {
        for (C = M + "."; ++I; C += M) ;
        j = C + j;
      } else if (K = j.length, ++I > K) {
        for (C = M, I -= K; --I; C += M) ;
        j += C;
      } else if (I < K) j = j.slice(0, I) + "." + j.slice(I);
      return j;
    }
    if (t = Y(), t.default = t.BigNumber = t, typeof define == "function" && define.amd) define(function() {
      return t;
    });
    else if (typeof Dt < "u" && Dt.exports) Dt.exports = t;
    else {
      if (!e) e = typeof self < "u" && self ? self : window;
      e.BigNumber = t;
    }
  })(rn);
});
var an = (0, import_chunk_w1d7ygsk.V)(function(qd, on) {
  var sn = jr(), nn = qd;
  (function() {
    function e(k) {
      return k < 10 ? "0" + k : k;
    }
    var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, r = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s, n, a = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, h;
    function g(k) {
      return r.lastIndex = 0, r.test(k) ? '"' + k.replace(r, function(T) {
        var U = a[T];
        return typeof U === "string" ? U : "\\u" + ("0000" + T.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + k + '"';
    }
    function E(k, T) {
      var U, P, Y, J, S = s, N, O = T[k], L = O != null && (O instanceof sn || sn.isBigNumber(O));
      if (O && typeof O === "object" && typeof O.toJSON === "function") O = O.toJSON(k);
      if (typeof h === "function") O = h.call(T, k, O);
      switch (typeof O) {
        case "string":
          if (L) return O;
          else return g(O);
        case "number":
          return isFinite(O) ? String(O) : "null";
        case "boolean":
        case "null":
        case "bigint":
          return String(O);
        case "object":
          if (!O) return "null";
          if (s += n, N = [], Object.prototype.toString.apply(O) === "[object Array]") {
            J = O.length;
            for (U = 0; U < J; U += 1) N[U] = E(U, O) || "null";
            return Y = N.length === 0 ? "[]" : s ? `[
` + s + N.join(`,
` + s) + `
` + S + "]" : "[" + N.join(",") + "]", s = S, Y;
          }
          if (h && typeof h === "object") {
            J = h.length;
            for (U = 0; U < J; U += 1) if (typeof h[U] === "string") {
              if (P = h[U], Y = E(P, O), Y) N.push(g(P) + (s ? ": " : ":") + Y);
            }
          } else Object.keys(O).forEach(function(Z) {
            var ie = E(Z, O);
            if (ie) N.push(g(Z) + (s ? ": " : ":") + ie);
          });
          return Y = N.length === 0 ? "{}" : s ? `{
` + s + N.join(`,
` + s) + `
` + S + "}" : "{" + N.join(",") + "}", s = S, Y;
      }
    }
    if (typeof nn.stringify !== "function") nn.stringify = function(k, T, U) {
      var P;
      if (s = "", n = "", typeof U === "number") for (P = 0; P < U; P += 1) n += " ";
      else if (typeof U === "string") n = U;
      if (h = T, T && typeof T !== "function" && (typeof T !== "object" || typeof T.length !== "number")) throw Error("JSON.stringify");
      return E("", { "": k });
    };
  })();
});
var un = (0, import_chunk_w1d7ygsk.V)(function(Fd, cn) {
  var qt = null, Gc = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/, Bc = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/, Hc = function(e) {
    var t = { strict: false, storeAsString: false, alwaysParseAsBig: false, useNativeBigInt: false, protoAction: "error", constructorAction: "error" };
    if (e !== void 0 && e !== null) {
      if (e.strict === true) t.strict = true;
      if (e.storeAsString === true) t.storeAsString = true;
      if (t.alwaysParseAsBig = e.alwaysParseAsBig === true ? e.alwaysParseAsBig : false, t.useNativeBigInt = e.useNativeBigInt === true ? e.useNativeBigInt : false, typeof e.constructorAction < "u") if (e.constructorAction === "error" || e.constructorAction === "ignore" || e.constructorAction === "preserve") t.constructorAction = e.constructorAction;
      else throw Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);
      if (typeof e.protoAction < "u") if (e.protoAction === "error" || e.protoAction === "ignore" || e.protoAction === "preserve") t.protoAction = e.protoAction;
      else throw Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);
    }
    var r, s, n = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" }, a, h = function(S) {
      throw { name: "SyntaxError", message: S, at: r, text: a };
    }, g = function(S) {
      if (S && S !== s) h("Expected '" + S + "' instead of '" + s + "'");
      return s = a.charAt(r), r += 1, s;
    }, E = function() {
      var S, N = "";
      if (s === "-") N = "-", g("-");
      while (s >= "0" && s <= "9") N += s, g();
      if (s === ".") {
        N += ".";
        while (g() && s >= "0" && s <= "9") N += s;
      }
      if (s === "e" || s === "E") {
        if (N += s, g(), s === "-" || s === "+") N += s, g();
        while (s >= "0" && s <= "9") N += s, g();
      }
      if (S = +N, !isFinite(S)) h("Bad number");
      else {
        if (qt == null) qt = jr();
        if (N.length > 15) return t.storeAsString ? N : t.useNativeBigInt ? BigInt(N) : new qt(N);
        else return !t.alwaysParseAsBig ? S : t.useNativeBigInt ? BigInt(S) : new qt(S);
      }
    }, k = function() {
      var S, N, O = "", L;
      if (s === '"') {
        var Z = r;
        while (g()) {
          if (s === '"') {
            if (r - 1 > Z) O += a.substring(Z, r - 1);
            return g(), O;
          }
          if (s === "\\") {
            if (r - 1 > Z) O += a.substring(Z, r - 1);
            if (g(), s === "u") {
              L = 0;
              for (N = 0; N < 4; N += 1) {
                if (S = parseInt(g(), 16), !isFinite(S)) break;
                L = L * 16 + S;
              }
              O += String.fromCharCode(L);
            } else if (typeof n[s] === "string") O += n[s];
            else break;
            Z = r;
          }
        }
      }
      h("Bad string");
    }, T = function() {
      while (s && s <= " ") g();
    }, U = function() {
      switch (s) {
        case "t":
          return g("t"), g("r"), g("u"), g("e"), true;
        case "f":
          return g("f"), g("a"), g("l"), g("s"), g("e"), false;
        case "n":
          return g("n"), g("u"), g("l"), g("l"), null;
      }
      h("Unexpected '" + s + "'");
    }, P, Y = function() {
      var S = [];
      if (s === "[") {
        if (g("["), T(), s === "]") return g("]"), S;
        while (s) {
          if (S.push(P()), T(), s === "]") return g("]"), S;
          g(","), T();
        }
      }
      h("Bad array");
    }, J = function() {
      var S, N = /* @__PURE__ */ Object.create(null);
      if (s === "{") {
        if (g("{"), T(), s === "}") return g("}"), N;
        while (s) {
          if (S = k(), T(), g(":"), t.strict === true && Object.hasOwnProperty.call(N, S)) h('Duplicate key "' + S + '"');
          if (Gc.test(S) === true) if (t.protoAction === "error") h("Object contains forbidden prototype property");
          else if (t.protoAction === "ignore") P();
          else N[S] = P();
          else if (Bc.test(S) === true) if (t.constructorAction === "error") h("Object contains forbidden constructor property");
          else if (t.constructorAction === "ignore") P();
          else N[S] = P();
          else N[S] = P();
          if (T(), s === "}") return g("}"), N;
          g(","), T();
        }
      }
      h("Bad object");
    };
    return P = function() {
      switch (T(), s) {
        case "{":
          return J();
        case "[":
          return Y();
        case '"':
          return k();
        case "-":
          return E();
        default:
          return s >= "0" && s <= "9" ? E() : U();
      }
    }, function(S, N) {
      var O;
      if (a = S + "", r = 0, s = " ", O = P(), T(), s) h("Syntax error");
      return typeof N === "function" ? (function L(Z, ie) {
        var j, I, M = Z[ie];
        if (M && typeof M === "object") Object.keys(M).forEach(function(K) {
          if (I = L(M, K), I !== void 0) M[K] = I;
          else delete M[K];
        });
        return N.call(Z, ie, M);
      })({ "": O }, "") : O;
    };
  };
  cn.exports = Hc;
});
var hn = (0, import_chunk_w1d7ygsk.V)(function(Md, Ft) {
  var ln = an().stringify, dn = un();
  Ft.exports = function(e) {
    return { parse: dn(e), stringify: ln };
  };
  Ft.exports.parse = dn();
  Ft.exports.stringify = ln;
});
var Dr = (0, import_chunk_w1d7ygsk.V)(function(_n) {
  Object.defineProperty(_n, "__esModule", { value: true });
  _n.GCE_LINUX_BIOS_PATHS = void 0;
  _n.isGoogleCloudServerless = fn;
  _n.isGoogleComputeEngineLinux = pn;
  _n.isGoogleComputeEngineMACAddress = gn;
  _n.isGoogleComputeEngine = yn;
  _n.detectGCPResidency = Jc;
  var Mt = (0, import_chunk_w1d7ygsk.ft)("fs"), Gt = (0, import_chunk_w1d7ygsk.ft)("os");
  _n.GCE_LINUX_BIOS_PATHS = { BIOS_DATE: "/sys/class/dmi/id/bios_date", BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor" };
  var $c = /^42:01/;
  function fn() {
    return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE);
  }
  function pn() {
    if (Gt.platform() !== "linux") return false;
    try {
      Mt.statSync(_n.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
      let e = Mt.readFileSync(_n.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
      return /Google/.test(e);
    } catch {
      return false;
    }
  }
  function gn() {
    let e = Gt.networkInterfaces();
    for (let t of Object.values(e)) {
      if (!t) continue;
      for (let { mac: r } of t) if ($c.test(r)) return true;
    }
    return false;
  }
  function yn() {
    return pn() || gn();
  }
  function Jc() {
    return fn() || yn();
  }
});
var wn = (0, import_chunk_w1d7ygsk.V)(function(mn) {
  Object.defineProperty(mn, "__esModule", { value: true });
  mn.Colours = void 0;
  class D {
    static isEnabled(e) {
      return e && e.isTTY && (typeof e.getColorDepth === "function" ? e.getColorDepth() > 2 : true);
    }
    static refresh() {
      if (D.enabled = D.isEnabled(process === null || process === void 0 ? void 0 : process.stderr), !this.enabled) D.reset = "", D.bright = "", D.dim = "", D.red = "", D.green = "", D.yellow = "", D.blue = "", D.magenta = "", D.cyan = "", D.white = "", D.grey = "";
      else D.reset = "\x1B[0m", D.bright = "\x1B[1m", D.dim = "\x1B[2m", D.red = "\x1B[31m", D.green = "\x1B[32m", D.yellow = "\x1B[33m", D.blue = "\x1B[34m", D.magenta = "\x1B[35m", D.cyan = "\x1B[36m", D.white = "\x1B[37m", D.grey = "\x1B[90m";
    }
  }
  mn.Colours = D;
  D.enabled = false;
  D.reset = "";
  D.bright = "";
  D.dim = "";
  D.red = "";
  D.green = "";
  D.yellow = "";
  D.blue = "";
  D.magenta = "";
  D.cyan = "";
  D.white = "";
  D.grey = "";
  D.refresh();
});
var Rn = (0, import_chunk_w1d7ygsk.V)(function(B) {
  var zc = B && B.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = { enumerable: true, get: function() {
      return t[r];
    } };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), Qc = B && B.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  } : function(e, t) {
    e.default = t;
  }), An = B && B.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(r) {
        var s = [];
        for (var n in r) if (Object.prototype.hasOwnProperty.call(r, n)) s[s.length] = n;
        return s;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (t != null) {
        for (var s = e(t), n = 0; n < s.length; n++) if (s[n] !== "default") zc(r, t, s[n]);
      }
      return Qc(r, t), r;
    };
  })();
  Object.defineProperty(B, "__esModule", { value: true });
  B.env = B.DebugLogBackendBase = B.placeholder = B.AdhocDebugLogger = B.LogSeverity = void 0;
  B.getNodeBackend = qr;
  B.getDebugBackend = Zc;
  B.getStructuredBackend = eu;
  B.setBackend = tu;
  B.log = Sn;
  var Tn = (0, import_chunk_w1d7ygsk.ft)("events"), Tt = An((0, import_chunk_w1d7ygsk.ft)("process")), Cn = An((0, import_chunk_w1d7ygsk.ft)("util")), H = wn(), Oe;
  (function(e) {
    e.DEFAULT = "DEFAULT", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR";
  })(Oe || (B.LogSeverity = Oe = {}));
  class Bt extends Tn.EventEmitter {
    constructor(e, t) {
      super();
      this.namespace = e, this.upstream = t, this.func = Object.assign(this.invoke.bind(this), { instance: this, on: (r, s) => this.on(r, s) }), this.func.debug = (...r) => this.invokeSeverity(Oe.DEBUG, ...r), this.func.info = (...r) => this.invokeSeverity(Oe.INFO, ...r), this.func.warn = (...r) => this.invokeSeverity(Oe.WARNING, ...r), this.func.error = (...r) => this.invokeSeverity(Oe.ERROR, ...r), this.func.sublog = (r) => Sn(r, this.func);
    }
    invoke(e, ...t) {
      if (this.upstream) try {
        this.upstream(e, ...t);
      } catch (r) {
      }
      try {
        this.emit("log", e, t);
      } catch (r) {
      }
    }
    invokeSeverity(e, ...t) {
      this.invoke({ severity: e }, ...t);
    }
  }
  B.AdhocDebugLogger = Bt;
  B.placeholder = new Bt("", () => {
  }).func;
  class Ct {
    constructor() {
      var e;
      this.cached = /* @__PURE__ */ new Map(), this.filters = [], this.filtersSet = false;
      let t = (e = Tt.env[B.env.nodeEnables]) !== null && e !== void 0 ? e : "*";
      if (t === "all") t = "*";
      this.filters = t.split(",");
    }
    log(e, t, ...r) {
      try {
        if (!this.filtersSet) this.setFilters(), this.filtersSet = true;
        let s = this.cached.get(e);
        if (!s) s = this.makeLogger(e), this.cached.set(e, s);
        s(t, ...r);
      } catch (s) {
        console.error(s);
      }
    }
  }
  B.DebugLogBackendBase = Ct;
  class vn extends Ct {
    constructor() {
      super(...arguments);
      this.enabledRegexp = /.*/g;
    }
    isEnabled(e) {
      return this.enabledRegexp.test(e);
    }
    makeLogger(e) {
      if (!this.enabledRegexp.test(e)) return () => {
      };
      return (t, ...r) => {
        var s;
        let n = `${H.Colours.green}${e}${H.Colours.reset}`, a = `${H.Colours.yellow}${Tt.pid}${H.Colours.reset}`, h;
        switch (t.severity) {
          case Oe.ERROR:
            h = `${H.Colours.red}${t.severity}${H.Colours.reset}`;
            break;
          case Oe.INFO:
            h = `${H.Colours.magenta}${t.severity}${H.Colours.reset}`;
            break;
          case Oe.WARNING:
            h = `${H.Colours.yellow}${t.severity}${H.Colours.reset}`;
            break;
          default:
            h = (s = t.severity) !== null && s !== void 0 ? s : Oe.DEFAULT;
            break;
        }
        let g = Cn.formatWithOptions({ colors: H.Colours.enabled }, ...r), E = Object.assign({}, t);
        delete E.severity;
        let k = Object.getOwnPropertyNames(E).length ? JSON.stringify(E) : "", T = k ? `${H.Colours.grey}${k}${H.Colours.reset}` : "";
        console.error("%s [%s|%s] %s%s", a, n, h, g, k ? ` ${T}` : "");
      };
    }
    setFilters() {
      let t = this.filters.join(",").replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
      this.enabledRegexp = new RegExp(`^${t}$`, "i");
    }
  }
  function qr() {
    return new vn();
  }
  class kn extends Ct {
    constructor(e) {
      super();
      this.debugPkg = e;
    }
    makeLogger(e) {
      let t = this.debugPkg(e);
      return (r, ...s) => {
        t(s[0], ...s.slice(1));
      };
    }
    setFilters() {
      var e;
      let t = (e = Tt.env.NODE_DEBUG) !== null && e !== void 0 ? e : "";
      Tt.env.NODE_DEBUG = `${t}${t ? "," : ""}${this.filters.join(",")}`;
    }
  }
  function Zc(e) {
    return new kn(e);
  }
  class On extends Ct {
    constructor(e) {
      var t;
      super();
      this.upstream = (t = e) !== null && t !== void 0 ? t : void 0;
    }
    makeLogger(e) {
      var t;
      let r = (t = this.upstream) === null || t === void 0 ? void 0 : t.makeLogger(e);
      return (s, ...n) => {
        var a;
        let h = (a = s.severity) !== null && a !== void 0 ? a : Oe.INFO, g = Object.assign({ severity: h, message: Cn.format(...n) }, s), E = JSON.stringify(g);
        if (r) r(s, E);
        else console.log("%s", E);
      };
    }
    setFilters() {
      var e;
      (e = this.upstream) === null || e === void 0 || e.setFilters();
    }
  }
  function eu(e) {
    return new On(e);
  }
  B.env = { nodeEnables: "GOOGLE_SDK_NODE_LOGGING" };
  var Fr = /* @__PURE__ */ new Map(), he = void 0;
  function tu(e) {
    he = e, Fr.clear();
  }
  function Sn(e, t) {
    if (!he) {
      if (!Tt.env[B.env.nodeEnables]) return B.placeholder;
    }
    if (!e) return B.placeholder;
    if (t) e = `${t.instance.namespace}:${e}`;
    let r = Fr.get(e);
    if (r) return r.func;
    if (he === null) return B.placeholder;
    else if (he === void 0) he = qr();
    let s = (() => {
      let n = void 0;
      return new Bt(e, (h, ...g) => {
        if (n !== he) {
          if (he === null) return;
          else if (he === void 0) he = qr();
          n = he;
        }
        he === null || he === void 0 || he.log(e, h, ...g);
      });
    })();
    return Fr.set(e, s), s.func;
  }
});
var Mr = (0, import_chunk_w1d7ygsk.V)(function(et) {
  var ru = et && et.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = { enumerable: true, get: function() {
      return t[r];
    } };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), su = et && et.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) ru(t, e, r);
  };
  Object.defineProperty(et, "__esModule", { value: true });
  su(Rn(), et);
});
var kt = (0, import_chunk_w1d7ygsk.V)(function(b) {
  var bn = b && b.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = { enumerable: true, get: function() {
      return t[r];
    } };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), nu = b && b.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  } : function(e, t) {
    e.default = t;
  }), iu = b && b.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(r) {
        var s = [];
        for (var n in r) if (Object.prototype.hasOwnProperty.call(r, n)) s[s.length] = n;
        return s;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (t != null) {
        for (var s = e(t), n = 0; n < s.length; n++) if (s[n] !== "default") bn(r, t, s[n]);
      }
      return nu(r, t), r;
    };
  })(), ou = b && b.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) bn(t, e, r);
  };
  Object.defineProperty(b, "__esModule", { value: true });
  b.gcpResidencyCache = b.METADATA_SERVER_DETECTION = b.HEADERS = b.HEADER_VALUE = b.HEADER_NAME = b.SECONDARY_HOST_ADDRESS = b.HOST_ADDRESS = b.BASE_PATH = void 0;
  b.instance = lu;
  b.project = du;
  b.universe = hu;
  b.bulk = fu;
  b.isAvailable = gu;
  b.resetIsAvailableCache = yu;
  b.getGCPResidency = Gr;
  b.setGCPResidency = In;
  b.requestTimeout = Un;
  var it = re(), Nn = hn(), Pn = Dr(), au = iu(Mr());
  b.BASE_PATH = "/computeMetadata/v1";
  b.HOST_ADDRESS = "http://169.254.169.254";
  b.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
  b.HEADER_NAME = "Metadata-Flavor";
  b.HEADER_VALUE = "Google";
  b.HEADERS = Object.freeze({ [b.HEADER_NAME]: b.HEADER_VALUE });
  var xn = au.log("gcp-metadata");
  b.METADATA_SERVER_DETECTION = Object.freeze({ "assume-present": "don't try to ping the metadata server, but assume it's present", none: "don't try to ping the metadata server, but don't try to use it either", "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)", "ping-only": "skip the BIOS probe, and go straight to pinging" });
  function Lr(e) {
    if (!e) e = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || b.HOST_ADDRESS;
    if (!/^https?:\/\//.test(e)) e = `http://${e}`;
    return new URL(b.BASE_PATH, e).href;
  }
  function cu(e) {
    Object.keys(e).forEach((t) => {
      switch (t) {
        case "params":
        case "property":
        case "headers":
          break;
        case "qs":
          throw Error("'qs' is not a valid configuration option. Please use 'params' instead.");
        default:
          throw Error(`'${t}' is not a valid configuration option.`);
      }
    });
  }
  async function vt(e, t = {}, r = 3, s = false) {
    let n = new Headers(b.HEADERS), a = "", h = {};
    if (typeof e === "object") {
      let U = e;
      new Headers(U.headers).forEach((P, Y) => n.set(Y, P)), a = U.metadataKey, h = U.params || h, r = U.noResponseRetries || r, s = U.fastFail || s;
    } else a = e;
    if (typeof t === "string") a += `/${t}`;
    else {
      if (cu(t), t.property) a += `/${t.property}`;
      new Headers(t.headers).forEach((U, P) => n.set(P, U)), h = t.params || h;
    }
    let g = s ? uu : it.request, E = { url: `${Lr()}/${a}`, headers: n, retryConfig: { noResponseRetries: r }, params: h, responseType: "text", timeout: Un() };
    xn.info("instance request %j", E);
    let k = await g(E);
    xn.info("instance metadata is %s", k.data);
    let T = k.headers.get(b.HEADER_NAME);
    if (T !== b.HEADER_VALUE) throw RangeError(`Invalid response from metadata service: incorrect ${b.HEADER_NAME} header. Expected '${b.HEADER_VALUE}', got ${T ? `'${T}'` : "no header"}`);
    if (typeof k.data === "string") try {
      return Nn.parse(k.data);
    } catch {
    }
    return k.data;
  }
  async function uu(e) {
    let t = { ...e, url: e.url?.toString().replace(Lr(), Lr(b.SECONDARY_HOST_ADDRESS)) }, r = it.request(e), s = it.request(t);
    return Promise.any([r, s]);
  }
  function lu(e) {
    return vt("instance", e);
  }
  function du(e) {
    return vt("project", e);
  }
  function hu(e) {
    return vt("universe", e);
  }
  async function fu(e) {
    let t = {};
    return await Promise.all(e.map((r) => (async () => {
      let s = await vt(r), n = r.metadataKey;
      t[n] = s;
    })())), t;
  }
  function pu() {
    return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
  }
  var Ht;
  async function gu() {
    if (process.env.METADATA_SERVER_DETECTION) {
      let e = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
      if (!(e in b.METADATA_SERVER_DETECTION)) throw RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${e}\`, but it should be \`${Object.keys(b.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
      switch (e) {
        case "assume-present":
          return true;
        case "none":
          return false;
        case "bios-only":
          return Gr();
        case "ping-only":
      }
    }
    try {
      if (Ht === void 0) Ht = vt("instance", void 0, pu(), !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
      return await Ht, true;
    } catch (e) {
      let t = e;
      if (process.env.DEBUG_AUTH) console.info(t);
      if (t.type === "request-timeout") return false;
      if (t.response && t.response.status === 404) return false;
      else {
        if (!(t.response && t.response.status === 404) && (!t.code || !["EHOSTDOWN", "EHOSTUNREACH", "ENETUNREACH", "ENOENT", "ENOTFOUND", "ECONNREFUSED"].includes(t.code.toString()))) {
          let r = "UNKNOWN";
          if (t.code) r = t.code.toString();
          process.emitWarning(`received unexpected error = ${t.message} code = ${r}`, "MetadataLookupWarning");
        }
        return false;
      }
    }
  }
  function yu() {
    Ht = void 0;
  }
  b.gcpResidencyCache = null;
  function Gr() {
    if (b.gcpResidencyCache === null) In();
    return b.gcpResidencyCache;
  }
  function In(e = null) {
    b.gcpResidencyCache = e !== null ? e : Pn.detectGCPResidency();
  }
  function Un() {
    return Gr() ? 0 : 3e3;
  }
  ou(Dr(), b);
});
var Dn = (0, import_chunk_w1d7ygsk.V)(function(vu) {
  vu.byteLength = mu;
  vu.toByteArray = wu;
  vu.fromByteArray = Cu;
  var be = [], _e = [], _u = typeof Uint8Array < "u" ? Uint8Array : Array, Br = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (Ge = 0, Hr = Br.length; Ge < Hr; ++Ge) be[Ge] = Br[Ge], _e[Br.charCodeAt(Ge)] = Ge;
  var Ge, Hr;
  _e[45] = 62;
  _e[95] = 63;
  function jn(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    if (r === -1) r = t;
    var s = r === t ? 0 : 4 - r % 4;
    return [r, s];
  }
  function mu(e) {
    var t = jn(e), r = t[0], s = t[1];
    return (r + s) * 3 / 4 - s;
  }
  function Eu(e, t, r) {
    return (t + r) * 3 / 4 - r;
  }
  function wu(e) {
    var t, r = jn(e), s = r[0], n = r[1], a = new _u(Eu(e, s, n)), h = 0, g = n > 0 ? s - 4 : s, E;
    for (E = 0; E < g; E += 4) t = _e[e.charCodeAt(E)] << 18 | _e[e.charCodeAt(E + 1)] << 12 | _e[e.charCodeAt(E + 2)] << 6 | _e[e.charCodeAt(E + 3)], a[h++] = t >> 16 & 255, a[h++] = t >> 8 & 255, a[h++] = t & 255;
    if (n === 2) t = _e[e.charCodeAt(E)] << 2 | _e[e.charCodeAt(E + 1)] >> 4, a[h++] = t & 255;
    if (n === 1) t = _e[e.charCodeAt(E)] << 10 | _e[e.charCodeAt(E + 1)] << 4 | _e[e.charCodeAt(E + 2)] >> 2, a[h++] = t >> 8 & 255, a[h++] = t & 255;
    return a;
  }
  function Au(e) {
    return be[e >> 18 & 63] + be[e >> 12 & 63] + be[e >> 6 & 63] + be[e & 63];
  }
  function Tu(e, t, r) {
    var s, n = [];
    for (var a = t; a < r; a += 3) s = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), n.push(Au(s));
    return n.join("");
  }
  function Cu(e) {
    var t, r = e.length, s = r % 3, n = [], a = 16383;
    for (var h = 0, g = r - s; h < g; h += a) n.push(Tu(e, h, h + a > g ? g : h + a));
    if (s === 1) t = e[r - 1], n.push(be[t >> 2] + be[t << 4 & 63] + "==");
    else if (s === 2) t = (e[r - 2] << 8) + e[r - 1], n.push(be[t >> 10] + be[t >> 4 & 63] + be[t << 2 & 63] + "=");
    return n.join("");
  }
});
var $r = (0, import_chunk_w1d7ygsk.V)(function(qn) {
  Object.defineProperty(qn, "__esModule", { value: true });
  qn.fromArrayBufferToHex = Ru;
  function Ru(e) {
    return Array.from(new Uint8Array(e)).map((r) => r.toString(16).padStart(2, "0")).join("");
  }
});
var Gn = (0, import_chunk_w1d7ygsk.V)(function(Mn) {
  Object.defineProperty(Mn, "__esModule", { value: true });
  Mn.BrowserCrypto = void 0;
  var me = Dn(), Fn = $r();
  class $t {
    constructor() {
      if (typeof window > "u" || window.crypto === void 0 || window.crypto.subtle === void 0) throw Error("SubtleCrypto not found. Make sure it's an https:// website.");
    }
    async sha256DigestBase64(e) {
      let t = new TextEncoder().encode(e), r = await window.crypto.subtle.digest("SHA-256", t);
      return me.fromByteArray(new Uint8Array(r));
    }
    randomBytesBase64(e) {
      let t = new Uint8Array(e);
      return window.crypto.getRandomValues(t), me.fromByteArray(t);
    }
    static padBase64(e) {
      while (e.length % 4 !== 0) e += "=";
      return e;
    }
    async verify(e, t, r) {
      let s = { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } }, n = new TextEncoder().encode(t), a = me.toByteArray($t.padBase64(r)), h = await window.crypto.subtle.importKey("jwk", e, s, true, ["verify"]);
      return await window.crypto.subtle.verify(s, h, Buffer.from(a), n);
    }
    async sign(e, t) {
      let r = { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } }, s = new TextEncoder().encode(t), n = await window.crypto.subtle.importKey("jwk", e, r, true, ["sign"]), a = await window.crypto.subtle.sign(r, n, s);
      return me.fromByteArray(new Uint8Array(a));
    }
    decodeBase64StringUtf8(e) {
      let t = me.toByteArray($t.padBase64(e));
      return new TextDecoder().decode(t);
    }
    encodeBase64StringUtf8(e) {
      let t = new TextEncoder().encode(e);
      return me.fromByteArray(t);
    }
    async sha256DigestHex(e) {
      let t = new TextEncoder().encode(e), r = await window.crypto.subtle.digest("SHA-256", t);
      return Fn.fromArrayBufferToHex(r);
    }
    async signWithHmacSha256(e, t) {
      let r = typeof e === "string" ? e : String.fromCharCode(...new Uint16Array(e)), s = new TextEncoder(), n = await window.crypto.subtle.importKey("raw", s.encode(r), { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
      return window.crypto.subtle.sign("HMAC", n, s.encode(t));
    }
  }
  Mn.BrowserCrypto = $t;
});
var Jn = (0, import_chunk_w1d7ygsk.V)(function(Hn) {
  Object.defineProperty(Hn, "__esModule", { value: true });
  Hn.NodeCrypto = void 0;
  var Ee = (0, import_chunk_w1d7ygsk.ft)("crypto");
  class Bn {
    async sha256DigestBase64(e) {
      return Ee.createHash("sha256").update(e).digest("base64");
    }
    randomBytesBase64(e) {
      return Ee.randomBytes(e).toString("base64");
    }
    async verify(e, t, r) {
      let s = Ee.createVerify("RSA-SHA256");
      return s.update(t), s.end(), s.verify(e, r, "base64");
    }
    async sign(e, t) {
      let r = Ee.createSign("RSA-SHA256");
      return r.update(t), r.end(), r.sign(e, "base64");
    }
    decodeBase64StringUtf8(e) {
      return Buffer.from(e, "base64").toString("utf-8");
    }
    encodeBase64StringUtf8(e) {
      return Buffer.from(e, "utf-8").toString("base64");
    }
    async sha256DigestHex(e) {
      return Ee.createHash("sha256").update(e).digest("hex");
    }
    async signWithHmacSha256(e, t) {
      let r = typeof e === "string" ? e : Nu(e);
      return bu(Ee.createHmac("sha256", r).update(t).digest());
    }
  }
  Hn.NodeCrypto = Bn;
  function bu(e) {
    let t = new ArrayBuffer(e.length), r = new Uint8Array(t);
    for (let s = 0; s < e.length; ++s) r[s] = e[s];
    return t;
  }
  function Nu(e) {
    return Buffer.from(e);
  }
});
var Ot = (0, import_chunk_w1d7ygsk.V)(function(De) {
  var Pu = De && De.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = { enumerable: true, get: function() {
      return t[r];
    } };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), Iu = De && De.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) Pu(t, e, r);
  };
  Object.defineProperty(De, "__esModule", { value: true });
  De.createCrypto = Uu;
  De.hasBrowserCrypto = Vn;
  var Kn = Gn(), Wn = Jn();
  Iu($r(), De);
  function Uu() {
    if (Vn()) return new Kn.BrowserCrypto();
    return new Wn.NodeCrypto();
  }
  function Vn() {
    return typeof window < "u" && typeof window.crypto < "u" && typeof window.crypto.subtle < "u";
  }
});
var Se = (0, import_chunk_w1d7ygsk.V)(function(Zn) {
  Object.defineProperty(Zn, "__esModule", { value: true });
  Zn.LRUCache = void 0;
  Zn.snakeToCamel = zn;
  Zn.originalOrCamelOptions = Du;
  Zn.removeUndefinedValuesInObject = qu;
  Zn.isValidFile = Fu;
  Zn.getWellKnownCertificateConfigFileLocation = Mu;
  var Xn = (0, import_chunk_w1d7ygsk.ft)("fs"), Jt = (0, import_chunk_w1d7ygsk.ft)("os"), ot = (0, import_chunk_w1d7ygsk.ft)("path"), ju = "certificate_config.json", Yn = "gcloud";
  function zn(e) {
    return e.replace(/([_][^_])/g, (t) => t.slice(1).toUpperCase());
  }
  function Du(e) {
    function t(r) {
      let s = e || {};
      return s[r] ?? s[zn(r)];
    }
    return { get: t };
  }
  class Qn {
    capacity;
    #e = /* @__PURE__ */ new Map();
    maxAge;
    constructor(e) {
      this.capacity = e.capacity, this.maxAge = e.maxAge;
    }
    #t(e, t) {
      this.#e.delete(e), this.#e.set(e, { value: t, lastAccessed: Date.now() });
    }
    set(e, t) {
      this.#t(e, t), this.#r();
    }
    get(e) {
      let t = this.#e.get(e);
      if (!t) return;
      return this.#t(e, t.value), this.#r(), t.value;
    }
    #r() {
      let e = this.maxAge ? Date.now() - this.maxAge : 0, t = this.#e.entries().next();
      while (!t.done && (this.#e.size > this.capacity || t.value[1].lastAccessed < e)) this.#e.delete(t.value[0]), t = this.#e.entries().next();
    }
  }
  Zn.LRUCache = Qn;
  function qu(e) {
    return Object.entries(e).forEach(([t, r]) => {
      if (r === void 0 || r === "undefined") delete e[t];
    }), e;
  }
  async function Fu(e) {
    try {
      return (await Xn.promises.lstat(e)).isFile();
    } catch (t) {
      return false;
    }
  }
  function Mu() {
    let e = process.env.CLOUDSDK_CONFIG || (Lu() ? ot.join(process.env.APPDATA || "", Yn) : ot.join(process.env.HOME || (() => {
      try {
        return Jt.homedir();
      } catch {
        return "";
      }
    })(), ".config", Yn));
    return ot.join(e, ju);
  }
  function Lu() {
    return Jt.platform().startsWith("win");
  }
});
var ti = (0, import_chunk_w1d7ygsk.V)(function(zd, Ku) {
  Ku.exports = { name: "google-auth-library", version: "10.6.2", author: "Google Inc.", description: "Google APIs Authentication Client Library for Node.js", engines: { node: ">=18" }, main: "./build/src/index.js", types: "./build/src/index.d.ts", repository: { type: "git", directory: "packages/google-auth-library-nodejs", url: "https://github.com/googleapis/google-cloud-node-core.git" }, keywords: ["google", "api", "google apis", "client", "client library"], dependencies: { "base64-js": "^1.3.0", "ecdsa-sig-formatter": "^1.0.11", gaxios: "^7.1.4", "gcp-metadata": "8.1.2", "google-logging-utils": "1.1.3", jws: "^4.0.0" }, devDependencies: { "@types/base64-js": "^1.2.5", "@types/jws": "^3.1.0", "@types/mocha": "^10.0.10", "@types/mv": "^2.1.0", "@types/ncp": "^2.0.8", "@types/node": "^24.0.0", "@types/sinon": "^21.0.0", "assert-rejects": "^1.0.0", c8: "^10.1.3", codecov: "^3.8.3", gts: "^6.0.2", "is-docker": "^3.0.0", jsdoc: "^4.0.4", "jsdoc-fresh": "^5.0.0", "jsdoc-region-tag": "^4.0.0", karma: "^6.0.0", "karma-chrome-launcher": "^3.0.0", "karma-coverage": "^2.0.0", "karma-firefox-launcher": "^2.0.0", "karma-mocha": "^2.0.0", "karma-sourcemap-loader": "^0.4.0", "karma-webpack": "^5.0.1", keypair: "^1.0.4", mocha: "^11.1.0", mv: "^2.1.1", ncp: "^2.0.0", nock: "^14.0.5", "null-loader": "^4.0.1", puppeteer: "^24.0.0", sinon: "^21.0.0", "ts-loader": "^9.5.2", typescript: "5.8.3", webpack: "^5.97.1", "webpack-cli": "^6.0.1" }, files: ["build/src", "!build/src/**/*.map"], scripts: { test: "c8 mocha build/test", clean: "gts clean", prepare: "npm run compile", lint: "gts check --no-inline-config", compile: "tsc -p .", fix: "gts fix", pretest: "npm run compile -- --sourceMap", docs: "jsdoc -c .jsdoc.js", "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../", "samples-test": "cd samples/ && npm link ../ && npm test && cd ../", "system-test": "mocha build/system-test --timeout 60000", "presystem-test": "npm run compile -- --sourceMap", webpack: "webpack", "browser-test": "karma start", "docs-test": "echo 'disabled until linkinator is fixed'", "predocs-test": "npm run docs", prelint: "cd samples; npm link ../; npm install" }, license: "Apache-2.0", homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/google-auth-library-nodejs" };
});
var Kr = (0, import_chunk_w1d7ygsk.V)(function(si) {
  Object.defineProperty(si, "__esModule", { value: true });
  si.USER_AGENT = si.PRODUCT_NAME = si.pkg = void 0;
  var Jr = ti();
  si.pkg = Jr;
  var ri = "google-api-nodejs-client";
  si.PRODUCT_NAME = ri;
  var Wu = `${ri}/${Jr.version}`;
  si.USER_AGENT = Wu;
});
var fe = (0, import_chunk_w1d7ygsk.V)(function(ci) {
  Object.defineProperty(ci, "__esModule", { value: true });
  ci.AuthClient = ci.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = ci.DEFAULT_UNIVERSE = void 0;
  var ii = (0, import_chunk_w1d7ygsk.ft)("events"), at = re(), oi = Se(), ai = Mr(), ct = Kr();
  ci.DEFAULT_UNIVERSE = "googleapis.com";
  ci.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 3e5;
  class se extends ii.EventEmitter {
    apiKey;
    projectId;
    quotaProjectId;
    transporter;
    credentials = {};
    eagerRefreshThresholdMillis = ci.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS;
    forceRefreshOnFailure = false;
    universeDomain = ci.DEFAULT_UNIVERSE;
    static RequestMethodNameSymbol = Symbol("request method name");
    static RequestLogIdSymbol = Symbol("request log id");
    constructor(e = {}) {
      super();
      let t = oi.originalOrCamelOptions(e);
      if (this.apiKey = e.apiKey, this.projectId = t.get("project_id") ?? null, this.quotaProjectId = t.get("quota_project_id"), this.credentials = t.get("credentials") ?? {}, this.universeDomain = t.get("universe_domain") ?? ci.DEFAULT_UNIVERSE, this.transporter = e.transporter ?? new at.Gaxios(e.transporterOptions), t.get("useAuthRequestParameters") !== false) this.transporter.interceptors.request.add(se.DEFAULT_REQUEST_INTERCEPTOR), this.transporter.interceptors.response.add(se.DEFAULT_RESPONSE_INTERCEPTOR);
      if (e.eagerRefreshThresholdMillis) this.eagerRefreshThresholdMillis = e.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = e.forceRefreshOnFailure ?? false;
    }
    fetch(...e) {
      let t = e[0], r = e[1], s = void 0, n = new Headers();
      if (typeof t === "string") s = new URL(t);
      else if (t instanceof URL) s = t;
      else if (t && t.url) s = new URL(t.url);
      if (t && typeof t === "object" && "headers" in t) at.Gaxios.mergeHeaders(n, t.headers);
      if (r) at.Gaxios.mergeHeaders(n, new Headers(r.headers));
      if (typeof t === "object" && !(t instanceof URL)) return this.request({ ...r, ...t, headers: n, url: s });
      else return this.request({ ...r, headers: n, url: s });
    }
    setCredentials(e) {
      this.credentials = e;
    }
    addSharedMetadataHeaders(e) {
      if (!e.has("x-goog-user-project") && this.quotaProjectId) e.set("x-goog-user-project", this.quotaProjectId);
      return e;
    }
    addUserProjectAndAuthHeaders(e, t) {
      let r = t.get("x-goog-user-project"), s = t.get("authorization");
      if (r) e.set("x-goog-user-project", r);
      if (s) e.set("authorization", s);
      return e;
    }
    static log = ai.log("auth");
    static DEFAULT_REQUEST_INTERCEPTOR = { resolved: async (e) => {
      if (!e.headers.has("x-goog-api-client")) {
        let r = process.version.replace(/^v/, "");
        e.headers.set("x-goog-api-client", `gl-node/${r}`);
      }
      let t = e.headers.get("User-Agent");
      if (!t) e.headers.set("User-Agent", ct.USER_AGENT);
      else if (!t.includes(`${ct.PRODUCT_NAME}/`)) e.headers.set("User-Agent", `${t} ${ct.USER_AGENT}`);
      try {
        let r = e, s = r[se.RequestMethodNameSymbol], n = `${Math.floor(Math.random() * 1e3)}`;
        r[se.RequestLogIdSymbol] = n;
        let a = { url: e.url, headers: e.headers };
        if (s) se.log.info("%s [%s] request %j", s, n, a);
        else se.log.info("[%s] request %j", n, a);
      } catch (r) {
      }
      return e;
    } };
    static DEFAULT_RESPONSE_INTERCEPTOR = { resolved: async (e) => {
      try {
        let t = e.config, r = t[se.RequestMethodNameSymbol], s = t[se.RequestLogIdSymbol];
        if (r) se.log.info("%s [%s] response %j", r, s, e.data);
        else se.log.info("[%s] response %j", s, e.data);
      } catch (t) {
      }
      return e;
    }, rejected: async (e) => {
      try {
        let t = e.config, r = t[se.RequestMethodNameSymbol], s = t[se.RequestLogIdSymbol];
        if (r) se.log.info("%s [%s] error %j", r, s, e.response?.data);
        else se.log.error("[%s] error %j", s, e.response?.data);
      } catch (t) {
      }
      throw e;
    } };
    static setMethodName(e, t) {
      try {
        let r = e;
        r[se.RequestMethodNameSymbol] = t;
      } catch (r) {
      }
    }
    static get RETRY_CONFIG() {
      return { retry: true, retryConfig: { httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"] } };
    }
  }
  ci.AuthClient = se;
});
var Vr = (0, import_chunk_w1d7ygsk.V)(function(hi) {
  Object.defineProperty(hi, "__esModule", { value: true });
  hi.LoginTicket = void 0;
  class di {
    envelope;
    payload;
    constructor(e, t) {
      this.envelope = e, this.payload = t;
    }
    getEnvelope() {
      return this.envelope;
    }
    getPayload() {
      return this.payload;
    }
    getUserId() {
      let e = this.getPayload();
      if (e && e.sub) return e.sub;
      return null;
    }
    getAttributes() {
      return { envelope: this.getEnvelope(), payload: this.getPayload() };
    }
  }
  hi.LoginTicket = di;
});
var tt = (0, import_chunk_w1d7ygsk.V)(function(Ei) {
  Object.defineProperty(Ei, "__esModule", { value: true });
  Ei.OAuth2Client = Ei.ClientAuthentication = Ei.CertificateFormat = Ei.CodeChallengeMethod = void 0;
  var Kt = re(), gi = (0, import_chunk_w1d7ygsk.ft)("querystring"), yi = (0, import_chunk_w1d7ygsk.ft)("stream"), _i = (0, import_chunk_9s46yyz1.VGi)(), Wt = Se(), ut = Ot(), Ae = fe(), mi = Vr(), pi;
  (function(e) {
    e.Plain = "plain", e.S256 = "S256";
  })(pi || (Ei.CodeChallengeMethod = pi = {}));
  var qe;
  (function(e) {
    e.PEM = "PEM", e.JWK = "JWK";
  })(qe || (Ei.CertificateFormat = qe = {}));
  var St;
  (function(e) {
    e.ClientSecretPost = "ClientSecretPost", e.ClientSecretBasic = "ClientSecretBasic", e.None = "None";
  })(St || (Ei.ClientAuthentication = St = {}));
  class we extends Ae.AuthClient {
    redirectUri;
    certificateCache = {};
    certificateExpiry = null;
    certificateCacheFormat = qe.PEM;
    refreshTokenPromises = /* @__PURE__ */ new Map();
    endpoints;
    issuers;
    clientAuthentication;
    _clientId;
    _clientSecret;
    refreshHandler;
    constructor(e = {}, t, r) {
      super(typeof e === "object" ? e : {});
      if (typeof e !== "object") e = { clientId: e, clientSecret: t, redirectUri: r };
      this._clientId = e.clientId || e.client_id, this._clientSecret = e.clientSecret || e.client_secret, this.redirectUri = e.redirectUri || e.redirect_uris?.[0], this.endpoints = { tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo", oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth", oauth2TokenUrl: "https://oauth2.googleapis.com/token", oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke", oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs", oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs", oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key", ...e.endpoints }, this.clientAuthentication = e.clientAuthentication || St.ClientSecretPost, this.issuers = e.issuers || ["accounts.google.com", "https://accounts.google.com", this.universeDomain];
    }
    static GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
    static CLOCK_SKEW_SECS_ = 300;
    static DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
    generateAuthUrl(e = {}) {
      if (e.code_challenge_method && !e.code_challenge) throw Error("If a code_challenge_method is provided, code_challenge must be included.");
      if (e.response_type = e.response_type || "code", e.client_id = e.client_id || this._clientId, e.redirect_uri = e.redirect_uri || this.redirectUri, Array.isArray(e.scope)) e.scope = e.scope.join(" ");
      return this.endpoints.oauth2AuthBaseUrl.toString() + "?" + gi.stringify(e);
    }
    generateCodeVerifier() {
      throw Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
    }
    async generateCodeVerifierAsync() {
      let e = ut.createCrypto(), r = e.randomBytesBase64(96).replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-"), n = (await e.sha256DigestBase64(r)).split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
      return { codeVerifier: r, codeChallenge: n };
    }
    getToken(e, t) {
      let r = typeof e === "string" ? { code: e } : e;
      if (t) this.getTokenAsync(r).then((s) => t(null, s.tokens, s.res), (s) => t(s, null, s.response));
      else return this.getTokenAsync(r);
    }
    async getTokenAsync(e) {
      let t = this.endpoints.oauth2TokenUrl.toString(), r = new Headers(), s = { client_id: e.client_id || this._clientId, code_verifier: e.codeVerifier, code: e.code, grant_type: "authorization_code", redirect_uri: e.redirect_uri || this.redirectUri };
      if (this.clientAuthentication === St.ClientSecretBasic) {
        let g = Buffer.from(`${this._clientId}:${this._clientSecret}`);
        r.set("authorization", `Basic ${g.toString("base64")}`);
      }
      if (this.clientAuthentication === St.ClientSecretPost) s.client_secret = this._clientSecret;
      let n = { ...we.RETRY_CONFIG, method: "POST", url: t, data: new URLSearchParams(Wt.removeUndefinedValuesInObject(s)), headers: r };
      Ae.AuthClient.setMethodName(n, "getTokenAsync");
      let a = await this.transporter.request(n), h = a.data;
      if (a.data && a.data.expires_in) h.expiry_date = (/* @__PURE__ */ new Date()).getTime() + a.data.expires_in * 1e3, delete h.expires_in;
      return this.emit("tokens", h), { tokens: h, res: a };
    }
    async refreshToken(e) {
      if (!e) return this.refreshTokenNoCache(e);
      if (this.refreshTokenPromises.has(e)) return this.refreshTokenPromises.get(e);
      let t = this.refreshTokenNoCache(e).then((r) => (this.refreshTokenPromises.delete(e), r), (r) => {
        throw this.refreshTokenPromises.delete(e), r;
      });
      return this.refreshTokenPromises.set(e, t), t;
    }
    async refreshTokenNoCache(e) {
      if (!e) throw Error("No refresh token is set.");
      let t = this.endpoints.oauth2TokenUrl.toString(), r = { refresh_token: e, client_id: this._clientId, client_secret: this._clientSecret, grant_type: "refresh_token" }, s;
      try {
        let a = { ...we.RETRY_CONFIG, method: "POST", url: t, data: new URLSearchParams(Wt.removeUndefinedValuesInObject(r)) };
        Ae.AuthClient.setMethodName(a, "refreshTokenNoCache"), s = await this.transporter.request(a);
      } catch (a) {
        if (a instanceof Kt.GaxiosError && a.message === "invalid_grant" && a.response?.data && /ReAuth/i.test(a.response.data.error_description)) a.message = JSON.stringify(a.response.data);
        throw a;
      }
      let n = s.data;
      if (s.data && s.data.expires_in) n.expiry_date = (/* @__PURE__ */ new Date()).getTime() + s.data.expires_in * 1e3, delete n.expires_in;
      return this.emit("tokens", n), { tokens: n, res: s };
    }
    refreshAccessToken(e) {
      if (e) this.refreshAccessTokenAsync().then((t) => e(null, t.credentials, t.res), e);
      else return this.refreshAccessTokenAsync();
    }
    async refreshAccessTokenAsync() {
      let e = await this.refreshToken(this.credentials.refresh_token), t = e.tokens;
      return t.refresh_token = this.credentials.refresh_token, this.credentials = t, { credentials: this.credentials, res: e.res };
    }
    getAccessToken(e) {
      if (e) this.getAccessTokenAsync().then((t) => e(null, t.token, t.res), e);
      else return this.getAccessTokenAsync();
    }
    async getAccessTokenAsync() {
      if (!this.credentials.access_token || this.isTokenExpiring()) {
        if (!this.credentials.refresh_token) if (this.refreshHandler) {
          let r = await this.processAndValidateRefreshHandler();
          if (r?.access_token) return this.setCredentials(r), { token: this.credentials.access_token };
        } else throw Error("No refresh token or refresh handler callback is set.");
        let t = await this.refreshAccessTokenAsync();
        if (!t.credentials || t.credentials && !t.credentials.access_token) throw Error("Could not refresh access token.");
        return { token: t.credentials.access_token, res: t.res };
      } else return { token: this.credentials.access_token };
    }
    async getRequestHeaders(e) {
      return (await this.getRequestMetadataAsync(e)).headers;
    }
    async getRequestMetadataAsync(e) {
      let t = this.credentials;
      if (!t.access_token && !t.refresh_token && !this.apiKey && !this.refreshHandler) throw Error("No access, refresh token, API key or refresh handler callback is set.");
      if (t.access_token && !this.isTokenExpiring()) {
        t.token_type = t.token_type || "Bearer";
        let h = new Headers({ authorization: t.token_type + " " + t.access_token });
        return { headers: this.addSharedMetadataHeaders(h) };
      }
      if (this.refreshHandler) {
        let h = await this.processAndValidateRefreshHandler();
        if (h?.access_token) {
          this.setCredentials(h);
          let g = new Headers({ authorization: "Bearer " + this.credentials.access_token });
          return { headers: this.addSharedMetadataHeaders(g) };
        }
      }
      if (this.apiKey) return { headers: new Headers({ "X-Goog-Api-Key": this.apiKey }) };
      let r = null, s = null;
      try {
        r = await this.refreshToken(t.refresh_token), s = r.tokens;
      } catch (h) {
        let g = h;
        if (g.response && (g.response.status === 403 || g.response.status === 404)) g.message = `Could not refresh access token: ${g.message}`;
        throw g;
      }
      let n = this.credentials;
      n.token_type = n.token_type || "Bearer", s.refresh_token = n.refresh_token, this.credentials = s;
      let a = new Headers({ authorization: n.token_type + " " + s.access_token });
      return { headers: this.addSharedMetadataHeaders(a), res: r.res };
    }
    static getRevokeTokenUrl(e) {
      return new we().getRevokeTokenURL(e).toString();
    }
    getRevokeTokenURL(e) {
      let t = new URL(this.endpoints.oauth2RevokeUrl);
      return t.searchParams.append("token", e), t;
    }
    revokeToken(e, t) {
      let r = { ...we.RETRY_CONFIG, url: this.getRevokeTokenURL(e).toString(), method: "POST" };
      if (Ae.AuthClient.setMethodName(r, "revokeToken"), t) this.transporter.request(r).then((s) => t(null, s), t);
      else return this.transporter.request(r);
    }
    revokeCredentials(e) {
      if (e) this.revokeCredentialsAsync().then((t) => e(null, t), e);
      else return this.revokeCredentialsAsync();
    }
    async revokeCredentialsAsync() {
      let e = this.credentials.access_token;
      if (this.credentials = {}, e) return this.revokeToken(e);
      else throw Error("No access token to revoke.");
    }
    request(e, t) {
      if (t) this.requestAsync(e).then((r) => t(null, r), (r) => t(r, r.response));
      else return this.requestAsync(e);
    }
    async requestAsync(e, t = false) {
      try {
        let r = await this.getRequestMetadataAsync();
        if (e.headers = Kt.Gaxios.mergeHeaders(e.headers), this.addUserProjectAndAuthHeaders(e.headers, r.headers), this.apiKey) e.headers.set("X-Goog-Api-Key", this.apiKey);
        return await this.transporter.request(e);
      } catch (r) {
        let s = r.response;
        if (s) {
          let n = s.status, a = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure), h = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler, g = s.config.data instanceof yi.Readable, E = n === 401 || n === 403;
          if (!t && E && !g && a) return await this.refreshAccessTokenAsync(), this.requestAsync(e, true);
          else if (!t && E && !g && h) {
            let k = await this.processAndValidateRefreshHandler();
            if (k?.access_token) this.setCredentials(k);
            return this.requestAsync(e, true);
          }
        }
        throw r;
      }
    }
    verifyIdToken(e, t) {
      if (t && typeof t !== "function") throw Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
      if (t) this.verifyIdTokenAsync(e).then((r) => t(null, r), t);
      else return this.verifyIdTokenAsync(e);
    }
    async verifyIdTokenAsync(e) {
      if (!e.idToken) throw Error("The verifyIdToken method requires an ID Token");
      let t = await this.getFederatedSignonCertsAsync();
      return await this.verifySignedJwtWithCertsAsync(e.idToken, t.certs, e.audience, this.issuers, e.maxExpiry);
    }
    async getTokenInfo(e) {
      let { data: t } = await this.transporter.request({ ...we.RETRY_CONFIG, method: "POST", headers: { "content-type": "application/x-www-form-urlencoded;charset=UTF-8", authorization: `Bearer ${e}` }, url: this.endpoints.tokenInfoUrl.toString() }), r = Object.assign({ expiry_date: (/* @__PURE__ */ new Date()).getTime() + t.expires_in * 1e3, scopes: t.scope.split(" ") }, t);
      return delete r.expires_in, delete r.scope, r;
    }
    getFederatedSignonCerts(e) {
      if (e) this.getFederatedSignonCertsAsync().then((t) => e(null, t.certs, t.res), e);
      else return this.getFederatedSignonCertsAsync();
    }
    async getFederatedSignonCertsAsync() {
      let e = (/* @__PURE__ */ new Date()).getTime(), t = ut.hasBrowserCrypto() ? qe.JWK : qe.PEM;
      if (this.certificateExpiry && e < this.certificateExpiry.getTime() && this.certificateCacheFormat === t) return { certs: this.certificateCache, format: t };
      let r, s;
      switch (t) {
        case qe.PEM:
          s = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
          break;
        case qe.JWK:
          s = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
          break;
        default:
          throw Error(`Unsupported certificate format ${t}`);
      }
      try {
        let E = { ...we.RETRY_CONFIG, url: s };
        Ae.AuthClient.setMethodName(E, "getFederatedSignonCertsAsync"), r = await this.transporter.request(E);
      } catch (E) {
        if (E instanceof Error) E.message = `Failed to retrieve verification certificates: ${E.message}`;
        throw E;
      }
      let n = r?.headers.get("cache-control"), a = -1;
      if (n) {
        let E = /max-age=(?<maxAge>[0-9]+)/.exec(n)?.groups?.maxAge;
        if (E) a = Number(E) * 1e3;
      }
      let h = {};
      switch (t) {
        case qe.PEM:
          h = r.data;
          break;
        case qe.JWK:
          for (let E of r.data.keys) h[E.kid] = E;
          break;
        default:
          throw Error(`Unsupported certificate format ${t}`);
      }
      let g = /* @__PURE__ */ new Date();
      return this.certificateExpiry = a === -1 ? null : new Date(g.getTime() + a), this.certificateCache = h, this.certificateCacheFormat = t, { certs: h, format: t, res: r };
    }
    getIapPublicKeys(e) {
      if (e) this.getIapPublicKeysAsync().then((t) => e(null, t.pubkeys, t.res), e);
      else return this.getIapPublicKeysAsync();
    }
    async getIapPublicKeysAsync() {
      let e, t = this.endpoints.oauth2IapPublicKeyUrl.toString();
      try {
        let r = { ...we.RETRY_CONFIG, url: t };
        Ae.AuthClient.setMethodName(r, "getIapPublicKeysAsync"), e = await this.transporter.request(r);
      } catch (r) {
        if (r instanceof Error) r.message = `Failed to retrieve verification certificates: ${r.message}`;
        throw r;
      }
      return { pubkeys: e.data, res: e };
    }
    verifySignedJwtWithCerts() {
      throw Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
    }
    async verifySignedJwtWithCertsAsync(e, t, r, s, n) {
      let a = ut.createCrypto();
      if (!n) n = we.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
      let h = e.split(".");
      if (h.length !== 3) throw Error("Wrong number of segments in token: " + e);
      let g = h[0] + "." + h[1], E = h[2], k, T;
      try {
        k = JSON.parse(a.decodeBase64StringUtf8(h[0]));
      } catch (L) {
        if (L instanceof Error) L.message = `Can't parse token envelope: ${h[0]}': ${L.message}`;
        throw L;
      }
      if (!k) throw Error("Can't parse token envelope: " + h[0]);
      try {
        T = JSON.parse(a.decodeBase64StringUtf8(h[1]));
      } catch (L) {
        if (L instanceof Error) L.message = `Can't parse token payload '${h[0]}`;
        throw L;
      }
      if (!T) throw Error("Can't parse token payload: " + h[1]);
      if (!Object.prototype.hasOwnProperty.call(t, k.kid)) throw Error("No pem found for envelope: " + JSON.stringify(k));
      let U = t[k.kid];
      if (k.alg === "ES256") E = _i.joseToDer(E, "ES256").toString("base64");
      if (!await a.verify(U, g, E)) throw Error("Invalid token signature: " + e);
      if (!T.iat) throw Error("No issue time in token: " + JSON.stringify(T));
      if (!T.exp) throw Error("No expiration time in token: " + JSON.stringify(T));
      let Y = Number(T.iat);
      if (isNaN(Y)) throw Error("iat field using invalid format");
      let J = Number(T.exp);
      if (isNaN(J)) throw Error("exp field using invalid format");
      let S = (/* @__PURE__ */ new Date()).getTime() / 1e3;
      if (J >= S + n) throw Error("Expiration time too far in future: " + JSON.stringify(T));
      let N = Y - we.CLOCK_SKEW_SECS_, O = J + we.CLOCK_SKEW_SECS_;
      if (S < N) throw Error("Token used too early, " + S + " < " + N + ": " + JSON.stringify(T));
      if (S > O) throw Error("Token used too late, " + S + " > " + O + ": " + JSON.stringify(T));
      if (s && s.indexOf(T.iss) < 0) throw Error("Invalid issuer, expected one of [" + s + "], but got " + T.iss);
      if (typeof r < "u" && r !== null) {
        let L = T.aud, Z = false;
        if (r.constructor === Array) Z = r.indexOf(L) > -1;
        else Z = L === r;
        if (!Z) throw Error("Wrong recipient, payload audience != requiredAudience");
      }
      return new mi.LoginTicket(k, T);
    }
    async processAndValidateRefreshHandler() {
      if (this.refreshHandler) {
        let e = await this.refreshHandler();
        if (!e.access_token) throw Error("No access token is returned by the refreshHandler callback.");
        return e;
      }
      return;
    }
    isTokenExpiring() {
      let e = this.credentials.expiry_date;
      return e ? e <= (/* @__PURE__ */ new Date()).getTime() + this.eagerRefreshThresholdMillis : false;
    }
  }
  Ei.OAuth2Client = we;
});
var Yr = (0, import_chunk_w1d7ygsk.V)(function(vi) {
  Object.defineProperty(vi, "__esModule", { value: true });
  vi.Compute = void 0;
  var Ai = re(), Vt = kt(), Ti = tt();
  class Ci extends Ti.OAuth2Client {
    serviceAccountEmail;
    scopes;
    constructor(e = {}) {
      super(e);
      this.credentials = { expiry_date: 1, refresh_token: "compute-placeholder" }, this.serviceAccountEmail = e.serviceAccountEmail || "default", this.scopes = Array.isArray(e.scopes) ? e.scopes : e.scopes ? [e.scopes] : [];
    }
    async refreshTokenNoCache() {
      let e = `service-accounts/${this.serviceAccountEmail}/token`, t;
      try {
        let s = { property: e };
        if (this.scopes.length > 0) s.params = { scopes: this.scopes.join(",") };
        t = await Vt.instance(s);
      } catch (s) {
        if (s instanceof Ai.GaxiosError) s.message = `Could not refresh access token: ${s.message}`, this.wrapError(s);
        throw s;
      }
      let r = t;
      if (t && t.expires_in) r.expiry_date = (/* @__PURE__ */ new Date()).getTime() + t.expires_in * 1e3, delete r.expires_in;
      return this.emit("tokens", r), { tokens: r, res: null };
    }
    async fetchIdToken(e) {
      let t = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${e}`, r;
      try {
        r = await Vt.instance({ property: t });
      } catch (s) {
        if (s instanceof Error) s.message = `Could not fetch ID token: ${s.message}`;
        throw s;
      }
      return r;
    }
    wrapError(e) {
      let t = e.response;
      if (t && t.status) {
        if (e.status = t.status, t.status === 403) e.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + e.message;
        else if (t.status === 404) e.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + e.message;
      }
    }
  }
  vi.Compute = Ci;
});
var Xr = (0, import_chunk_w1d7ygsk.V)(function(Ri) {
  Object.defineProperty(Ri, "__esModule", { value: true });
  Ri.IdTokenClient = void 0;
  var Oi = tt();
  class Si extends Oi.OAuth2Client {
    targetAudience;
    idTokenProvider;
    constructor(e) {
      super(e);
      this.targetAudience = e.targetAudience, this.idTokenProvider = e.idTokenProvider;
    }
    async getRequestMetadataAsync() {
      if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
        let t = await this.idTokenProvider.fetchIdToken(this.targetAudience);
        this.credentials = { id_token: t, expiry_date: this.getIdTokenExpiryDate(t) };
      }
      return { headers: new Headers({ authorization: "Bearer " + this.credentials.id_token }) };
    }
    getIdTokenExpiryDate(e) {
      let t = e.split(".")[1];
      if (t) return JSON.parse(Buffer.from(t, "base64").toString("ascii")).exp * 1e3;
    }
  }
  Ri.IdTokenClient = Si;
});
var zr = (0, import_chunk_w1d7ygsk.V)(function(bi) {
  Object.defineProperty(bi, "__esModule", { value: true });
  bi.GCPEnv = void 0;
  bi.clear = Zu;
  bi.getEnv = el;
  var Yt = kt(), Ne;
  (function(e) {
    e.APP_ENGINE = "APP_ENGINE", e.KUBERNETES_ENGINE = "KUBERNETES_ENGINE", e.CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS", e.COMPUTE_ENGINE = "COMPUTE_ENGINE", e.CLOUD_RUN = "CLOUD_RUN", e.CLOUD_RUN_JOBS = "CLOUD_RUN_JOBS", e.NONE = "NONE";
  })(Ne || (bi.GCPEnv = Ne = {}));
  var Rt;
  function Zu() {
    Rt = void 0;
  }
  async function el() {
    if (Rt) return Rt;
    return Rt = tl(), Rt;
  }
  async function tl() {
    let e = Ne.NONE;
    if (rl()) e = Ne.APP_ENGINE;
    else if (sl()) e = Ne.CLOUD_FUNCTIONS;
    else if (await al()) if (await ol()) e = Ne.KUBERNETES_ENGINE;
    else if (nl()) e = Ne.CLOUD_RUN;
    else if (il()) e = Ne.CLOUD_RUN_JOBS;
    else e = Ne.COMPUTE_ENGINE;
    else e = Ne.NONE;
    return e;
  }
  function rl() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
  }
  function sl() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
  }
  function nl() {
    return !!process.env.K_CONFIGURATION;
  }
  function il() {
    return !!process.env.CLOUD_RUN_JOB;
  }
  async function ol() {
    try {
      return await Yt.instance("attributes/cluster-name"), true;
    } catch (e) {
      return false;
    }
  }
  async function al() {
    return Yt.isAvailable();
  }
});
var ji = (0, import_chunk_w1d7ygsk.V)(function(Ui) {
  Object.defineProperty(Ui, "__esModule", { value: true });
  Ui.buildPayloadForJwsSign = Ii;
  Ui.getJwsSign = hl;
  var Pi = (0, import_chunk_9s46yyz1.Rjn)(), ll = "RS256", dl = "https://oauth2.googleapis.com/token";
  function Ii(e) {
    let t = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
    return { iss: e.iss, scope: e.scope, aud: dl, exp: t + 3600, iat: t, sub: e.sub, ...e.additionalClaims };
  }
  function hl(e) {
    let t = Ii(e);
    return Pi.sign({ header: { alg: ll }, payload: t, secret: e.key });
  }
});
var Fi = (0, import_chunk_w1d7ygsk.V)(function(qi) {
  Object.defineProperty(qi, "__esModule", { value: true });
  qi.getToken = ml;
  var Di = ji(), gl = "https://oauth2.googleapis.com/token", yl = "urn:ietf:params:oauth:grant-type:jwt-bearer", _l = (e) => ({ method: "POST", url: gl, data: new URLSearchParams({ grant_type: yl, assertion: Di.getJwsSign(e) }), responseType: "json", retryConfig: { httpMethodsToRetry: ["POST"] } });
  async function ml(e) {
    if (!e.transporter) throw Error("No transporter set.");
    try {
      let t = _l(e);
      return (await e.transporter.request(t)).data;
    } catch (t) {
      let r = t, s = r.response?.data;
      if (s?.error) r.message = `${s.error}: ${s.error_description}`;
      throw r;
    }
  }
});
var Bi = (0, import_chunk_w1d7ygsk.V)(function(Li) {
  Object.defineProperty(Li, "__esModule", { value: true });
  Li.ErrorWithCode = void 0;
  class Mi extends Error {
    code;
    constructor(e, t) {
      super(e);
      this.code = t;
    }
  }
  Li.ErrorWithCode = Mi;
});
var Qr = (0, import_chunk_w1d7ygsk.V)(function(Xi) {
  Object.defineProperty(Xi, "__esModule", { value: true });
  Xi.getCredentials = wl;
  var Hi = (0, import_chunk_w1d7ygsk.ft)("path"), Xt = (0, import_chunk_w1d7ygsk.ft)("fs"), $i = (0, import_chunk_w1d7ygsk.ft)("util"), He = Bi(), Ji = Xt.readFile ? $i.promisify(Xt.readFile) : async () => {
    throw new He.ErrorWithCode("use key rather than keyFile.", "MISSING_CREDENTIALS");
  }, Be;
  (function(e) {
    e.JSON = ".json", e.DER = ".der", e.CRT = ".crt", e.PEM = ".pem", e.P12 = ".p12", e.PFX = ".pfx";
  })(Be || (Be = {}));
  class Ki {
    keyFilePath;
    constructor(e) {
      this.keyFilePath = e;
    }
    async getCredentials() {
      let e = await Ji(this.keyFilePath, "utf8"), t;
      try {
        t = JSON.parse(e);
      } catch (n) {
        throw Error(`Invalid JSON key file: ${n.message}`);
      }
      let r = t.private_key, s = t.client_email;
      if (!r || !s) throw new He.ErrorWithCode("private_key and client_email are required.", "MISSING_CREDENTIALS");
      return { privateKey: r, clientEmail: s };
    }
  }
  class Wi {
    keyFilePath;
    constructor(e) {
      this.keyFilePath = e;
    }
    async getCredentials() {
      return { privateKey: await Ji(this.keyFilePath, "utf8") };
    }
  }
  class Vi {
    async getCredentials() {
      throw new He.ErrorWithCode("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
    }
  }
  class Yi {
    static create(e) {
      switch (Hi.extname(e)) {
        case Be.JSON:
          return new Ki(e);
        case Be.DER:
        case Be.CRT:
        case Be.PEM:
          return new Wi(e);
        case Be.P12:
        case Be.PFX:
          return new Vi();
        default:
          throw new He.ErrorWithCode("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
      }
    }
  }
  async function wl(e) {
    return Yi.create(e).getCredentials();
  }
});
var ro = (0, import_chunk_w1d7ygsk.V)(function(eo) {
  Object.defineProperty(eo, "__esModule", { value: true });
  eo.TokenHandler = void 0;
  var zi = Fi(), Qi = Qr();
  class Zi {
    token;
    tokenExpiresAt;
    inFlightRequest;
    tokenOptions;
    constructor(e) {
      this.tokenOptions = e;
    }
    async processCredentials() {
      if (!this.tokenOptions.key && !this.tokenOptions.keyFile) throw Error("No key or keyFile set.");
      if (!this.tokenOptions.key && this.tokenOptions.keyFile) {
        let e = await Qi.getCredentials(this.tokenOptions.keyFile);
        this.tokenOptions.key = e.privateKey, this.tokenOptions.email = e.clientEmail;
      }
    }
    isTokenExpiring() {
      if (!this.token || !this.tokenExpiresAt) return true;
      let e = (/* @__PURE__ */ new Date()).getTime(), t = this.tokenOptions.eagerRefreshThresholdMillis ?? 0;
      return this.tokenExpiresAt <= e + t;
    }
    hasExpired() {
      let e = (/* @__PURE__ */ new Date()).getTime();
      if (this.token && this.tokenExpiresAt) return (/* @__PURE__ */ new Date()).getTime() >= this.tokenExpiresAt;
      return true;
    }
    async getToken(e) {
      if (await this.processCredentials(), this.inFlightRequest && !e) return this.inFlightRequest;
      if (this.token && !this.isTokenExpiring() && !e) return this.token;
      try {
        this.inFlightRequest = zi.getToken(this.tokenOptions);
        let t = await this.inFlightRequest;
        return this.token = t, this.tokenExpiresAt = (/* @__PURE__ */ new Date()).getTime() + (t.expires_in ?? 0) * 1e3, t;
      } finally {
        this.inFlightRequest = void 0;
      }
    }
  }
  eo.TokenHandler = Zi;
});
var no = (0, import_chunk_w1d7ygsk.V)(function(so) {
  Object.defineProperty(so, "__esModule", { value: true });
  so.revokeToken = vl;
  var Tl = "https://oauth2.googleapis.com/revoke?token=", Cl = true;
  async function vl(e, t) {
    let r = Tl + e;
    return await t.request({ url: r, retry: Cl });
  }
});
var Zr = (0, import_chunk_w1d7ygsk.V)(function(co) {
  Object.defineProperty(co, "__esModule", { value: true });
  co.GoogleToken = void 0;
  var io = re(), zt = ro(), oo = no();
  class ao {
    tokenOptions;
    tokenHandler;
    constructor(e) {
      if (this.tokenOptions = e || {}, this.tokenOptions.transporter = this.tokenOptions.transporter || { request: (t) => io.request(t) }, !this.tokenOptions.iss) this.tokenOptions.iss = this.tokenOptions.email;
      if (typeof this.tokenOptions.scope === "object") this.tokenOptions.scope = this.tokenOptions.scope.join(" ");
      this.tokenHandler = new zt.TokenHandler(this.tokenOptions);
    }
    get expiresAt() {
      return this.tokenHandler.tokenExpiresAt;
    }
    get accessToken() {
      return this.tokenHandler.token?.access_token;
    }
    get idToken() {
      return this.tokenHandler.token?.id_token;
    }
    get tokenType() {
      return this.tokenHandler.token?.token_type;
    }
    get refreshToken() {
      return this.tokenHandler.token?.refresh_token;
    }
    hasExpired() {
      return this.tokenHandler.hasExpired();
    }
    isTokenExpiring() {
      return this.tokenHandler.isTokenExpiring();
    }
    getToken(e, t = { forceRefresh: false }) {
      let r;
      if (typeof e === "function") r = e;
      else if (typeof e === "object") t = e;
      let s = this.tokenHandler.getToken(t.forceRefresh ?? false);
      if (r) s.then((n) => r(null, n), r);
      return s;
    }
    revokeToken(e) {
      if (!this.accessToken) return Promise.reject(Error("No token to revoke."));
      let t = oo.revokeToken(this.accessToken, this.tokenOptions.transporter);
      if (e) t.then(() => e(), e);
      this.tokenHandler = new zt.TokenHandler(this.tokenOptions);
    }
    get googleTokenOptions() {
      return this.tokenOptions;
    }
  }
  co.GoogleToken = ao;
});
var ts = (0, import_chunk_w1d7ygsk.V)(function(po) {
  Object.defineProperty(po, "__esModule", { value: true });
  po.JWTAccess = void 0;
  var ho = (0, import_chunk_9s46yyz1.Rjn)(), fo = Se(), lo = { alg: "RS256", typ: "JWT" };
  class es {
    email;
    key;
    keyId;
    projectId;
    eagerRefreshThresholdMillis;
    cache = new fo.LRUCache({ capacity: 500, maxAge: 36e5 });
    constructor(e, t, r, s) {
      this.email = e, this.key = t, this.keyId = r, this.eagerRefreshThresholdMillis = s ?? 3e5;
    }
    getCachedKey(e, t) {
      let r = e;
      if (t && Array.isArray(t) && t.length) r = e ? `${e}_${t.join("_")}` : `${t.join("_")}`;
      else if (typeof t === "string") r = e ? `${e}_${t}` : t;
      if (!r) throw Error("Scopes or url must be provided");
      return r;
    }
    getRequestHeaders(e, t, r) {
      let s = this.getCachedKey(e, r), n = this.cache.get(s), a = Date.now();
      if (n && n.expiration - a > this.eagerRefreshThresholdMillis) return new Headers(n.headers);
      let h = Math.floor(Date.now() / 1e3), g = es.getExpirationTime(h), E;
      if (Array.isArray(r)) r = r.join(" ");
      if (r) E = { iss: this.email, sub: this.email, scope: r, exp: g, iat: h };
      else E = { iss: this.email, sub: this.email, aud: e, exp: g, iat: h };
      if (t) {
        for (let Y in E) if (t[Y]) throw Error(`The '${Y}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
      }
      let k = this.keyId ? { ...lo, kid: this.keyId } : lo, T = Object.assign(E, t), U = ho.sign({ header: k, payload: T, secret: this.key }), P = new Headers({ authorization: `Bearer ${U}` });
      return this.cache.set(s, { expiration: g * 1e3, headers: P }), P;
    }
    static getExpirationTime(e) {
      return e + 3600;
    }
    fromJSON(e) {
      if (!e) throw Error("Must pass in a JSON object containing the service account auth settings.");
      if (!e.client_email) throw Error("The incoming JSON object does not contain a client_email field");
      if (!e.private_key) throw Error("The incoming JSON object does not contain a private_key field");
      this.email = e.client_email, this.key = e.private_key, this.keyId = e.private_key_id, this.projectId = e.project_id;
    }
    fromStream(e, t) {
      if (t) this.fromStreamAsync(e).then(() => t(), t);
      else return this.fromStreamAsync(e);
    }
    fromStreamAsync(e) {
      return new Promise((t, r) => {
        if (!e) r(Error("Must pass in a stream containing the service account auth settings."));
        let s = "";
        e.setEncoding("utf8").on("data", (n) => s += n).on("error", r).on("end", () => {
          try {
            let n = JSON.parse(s);
            this.fromJSON(n), t();
          } catch (n) {
            r(n);
          }
        });
      });
    }
  }
  po.JWTAccess = es;
});
var ss = (0, import_chunk_w1d7ygsk.V)(function(Eo) {
  Object.defineProperty(Eo, "__esModule", { value: true });
  Eo.JWT = void 0;
  var Qt = Zr(), yo = Qr(), _o = ts(), mo = tt(), $e = fe();
  class rs extends mo.OAuth2Client {
    email;
    keyFile;
    key;
    keyId;
    defaultScopes;
    scopes;
    scope;
    subject;
    gtoken;
    additionalClaims;
    useJWTAccessWithScope;
    defaultServicePath;
    access;
    constructor(e = {}) {
      super(e);
      this.email = e.email, this.keyFile = e.keyFile, this.key = e.key, this.keyId = e.keyId, this.scopes = e.scopes, this.subject = e.subject, this.additionalClaims = e.additionalClaims, this.credentials = { refresh_token: "jwt-placeholder", expiry_date: 1 };
    }
    createScoped(e) {
      let t = new rs(this);
      return t.scopes = e, t;
    }
    async getRequestMetadataAsync(e) {
      e = this.defaultServicePath ? `https://${this.defaultServicePath}/` : e;
      let t = !this.hasUserScopes() && e || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== $e.DEFAULT_UNIVERSE;
      if (this.subject && this.universeDomain !== $e.DEFAULT_UNIVERSE) throw RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${$e.DEFAULT_UNIVERSE}`);
      if (!this.apiKey && t) if (this.additionalClaims && this.additionalClaims.target_audience) {
        let { tokens: r } = await this.refreshToken();
        return { headers: this.addSharedMetadataHeaders(new Headers({ authorization: `Bearer ${r.id_token}` })) };
      } else {
        if (!this.access) this.access = new _o.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
        let r;
        if (this.hasUserScopes()) r = this.scopes;
        else if (!e) r = this.defaultScopes;
        let s = this.useJWTAccessWithScope || this.universeDomain !== $e.DEFAULT_UNIVERSE, n = await this.access.getRequestHeaders(e ?? void 0, this.additionalClaims, s ? r : void 0);
        return { headers: this.addSharedMetadataHeaders(n) };
      }
      else if (this.hasAnyScopes() || this.apiKey) return super.getRequestMetadataAsync(e);
      else return { headers: new Headers() };
    }
    async fetchIdToken(e) {
      let t = new Qt.GoogleToken({ iss: this.email, sub: this.subject, scope: this.scopes || this.defaultScopes, keyFile: this.keyFile, key: this.key, additionalClaims: { target_audience: e }, transporter: this.transporter });
      if (await t.getToken({ forceRefresh: true }), !t.idToken) throw Error("Unknown error: Failed to fetch ID token");
      return t.idToken;
    }
    hasUserScopes() {
      if (!this.scopes) return false;
      return this.scopes.length > 0;
    }
    hasAnyScopes() {
      if (this.scopes && this.scopes.length > 0) return true;
      if (this.defaultScopes && this.defaultScopes.length > 0) return true;
      return false;
    }
    authorize(e) {
      if (e) this.authorizeAsync().then((t) => e(null, t), e);
      else return this.authorizeAsync();
    }
    async authorizeAsync() {
      let e = await this.refreshToken();
      if (!e) throw Error("No result returned");
      return this.credentials = e.tokens, this.credentials.refresh_token = "jwt-placeholder", this.key = this.gtoken.googleTokenOptions?.key, this.email = this.gtoken.googleTokenOptions?.iss, e.tokens;
    }
    async refreshTokenNoCache() {
      let e = this.createGToken(), r = { access_token: (await e.getToken({ forceRefresh: this.isTokenExpiring() })).access_token, token_type: "Bearer", expiry_date: e.expiresAt, id_token: e.idToken };
      return this.emit("tokens", r), { res: null, tokens: r };
    }
    createGToken() {
      if (!this.gtoken) this.gtoken = new Qt.GoogleToken({ iss: this.email, sub: this.subject, scope: this.scopes || this.defaultScopes, keyFile: this.keyFile, key: this.key, additionalClaims: this.additionalClaims, transporter: this.transporter });
      return this.gtoken;
    }
    fromJSON(e) {
      if (!e) throw Error("Must pass in a JSON object containing the service account auth settings.");
      if (!e.client_email) throw Error("The incoming JSON object does not contain a client_email field");
      if (!e.private_key) throw Error("The incoming JSON object does not contain a private_key field");
      this.email = e.client_email, this.key = e.private_key, this.keyId = e.private_key_id, this.projectId = e.project_id, this.quotaProjectId = e.quota_project_id, this.universeDomain = e.universe_domain || this.universeDomain;
    }
    fromStream(e, t) {
      if (t) this.fromStreamAsync(e).then(() => t(), t);
      else return this.fromStreamAsync(e);
    }
    fromStreamAsync(e) {
      return new Promise((t, r) => {
        if (!e) throw Error("Must pass in a stream containing the service account auth settings.");
        let s = "";
        e.setEncoding("utf8").on("error", r).on("data", (n) => s += n).on("end", () => {
          try {
            let n = JSON.parse(s);
            this.fromJSON(n), t();
          } catch (n) {
            r(n);
          }
        });
      });
    }
    fromAPIKey(e) {
      if (typeof e !== "string") throw Error("Must provide an API Key string.");
      this.apiKey = e;
    }
    async getCredentials() {
      if (this.key) return { private_key: this.key, client_email: this.email };
      else if (this.keyFile) {
        let e = this.createGToken(), t = await yo.getCredentials(this.keyFile);
        return { private_key: t.privateKey, client_email: t.clientEmail };
      }
      throw Error("A key or a keyFile must be provided to getCredentials.");
    }
  }
  Eo.JWT = rs;
});
var ns = (0, import_chunk_w1d7ygsk.V)(function(Co) {
  Object.defineProperty(Co, "__esModule", { value: true });
  Co.UserRefreshClient = Co.USER_REFRESH_ACCOUNT_TYPE = void 0;
  var Ao = tt(), To = fe();
  Co.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
  class Zt extends Ao.OAuth2Client {
    _refreshToken;
    constructor(e, t, r, s, n) {
      let a = e && typeof e === "object" ? e : { clientId: e, clientSecret: t, refreshToken: r, eagerRefreshThresholdMillis: s, forceRefreshOnFailure: n };
      super(a);
      this._refreshToken = a.refreshToken, this.credentials.refresh_token = a.refreshToken;
    }
    async refreshTokenNoCache() {
      return super.refreshTokenNoCache(this._refreshToken);
    }
    async fetchIdToken(e) {
      let t = { ...Zt.RETRY_CONFIG, url: this.endpoints.oauth2TokenUrl, method: "POST", data: new URLSearchParams({ client_id: this._clientId, client_secret: this._clientSecret, grant_type: "refresh_token", refresh_token: this._refreshToken, target_audience: e }), responseType: "json" };
      return To.AuthClient.setMethodName(t, "fetchIdToken"), (await this.transporter.request(t)).data.id_token;
    }
    fromJSON(e) {
      if (!e) throw Error("Must pass in a JSON object containing the user refresh token");
      if (e.type !== "authorized_user") throw Error('The incoming JSON object does not have the "authorized_user" type');
      if (!e.client_id) throw Error("The incoming JSON object does not contain a client_id field");
      if (!e.client_secret) throw Error("The incoming JSON object does not contain a client_secret field");
      if (!e.refresh_token) throw Error("The incoming JSON object does not contain a refresh_token field");
      this._clientId = e.client_id, this._clientSecret = e.client_secret, this._refreshToken = e.refresh_token, this.credentials.refresh_token = e.refresh_token, this.quotaProjectId = e.quota_project_id, this.universeDomain = e.universe_domain || this.universeDomain;
    }
    fromStream(e, t) {
      if (t) this.fromStreamAsync(e).then(() => t(), t);
      else return this.fromStreamAsync(e);
    }
    async fromStreamAsync(e) {
      return new Promise((t, r) => {
        if (!e) return r(Error("Must pass in a stream containing the user refresh token."));
        let s = "";
        e.setEncoding("utf8").on("error", r).on("data", (n) => s += n).on("end", () => {
          try {
            let n = JSON.parse(s);
            return this.fromJSON(n), t();
          } catch (n) {
            return r(n);
          }
        });
      });
    }
    static fromJSON(e) {
      let t = new Zt();
      return t.fromJSON(e), t;
    }
  }
  Co.UserRefreshClient = Zt;
});
var is = (0, import_chunk_w1d7ygsk.V)(function(So) {
  Object.defineProperty(So, "__esModule", { value: true });
  So.Impersonated = So.IMPERSONATED_ACCOUNT_TYPE = void 0;
  var er = tt(), ko = re(), Oo = Se();
  So.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
  class xt extends er.OAuth2Client {
    sourceClient;
    targetPrincipal;
    targetScopes;
    delegates;
    lifetime;
    endpoint;
    constructor(e = {}) {
      super(e);
      if (this.credentials = { expiry_date: 1, refresh_token: "impersonated-placeholder" }, this.sourceClient = e.sourceClient ?? new er.OAuth2Client(), this.targetPrincipal = e.targetPrincipal ?? "", this.delegates = e.delegates ?? [], this.targetScopes = e.targetScopes ?? [], this.lifetime = e.lifetime ?? 3600, !Oo.originalOrCamelOptions(e).get("universe_domain")) this.universeDomain = this.sourceClient.universeDomain;
      else if (this.sourceClient.universeDomain !== this.universeDomain) throw RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
      this.endpoint = e.endpoint ?? `https://iamcredentials.${this.universeDomain}`;
    }
    async sign(e) {
      await this.sourceClient.getAccessToken();
      let t = `projects/-/serviceAccounts/${this.targetPrincipal}`, r = `${this.endpoint}/v1/${t}:signBlob`, s = { delegates: this.delegates, payload: Buffer.from(e).toString("base64") };
      return (await this.sourceClient.request({ ...xt.RETRY_CONFIG, url: r, data: s, method: "POST" })).data;
    }
    getTargetPrincipal() {
      return this.targetPrincipal;
    }
    async refreshToken() {
      try {
        await this.sourceClient.getAccessToken();
        let e = "projects/-/serviceAccounts/" + this.targetPrincipal, t = `${this.endpoint}/v1/${e}:generateAccessToken`, r = { delegates: this.delegates, scope: this.targetScopes, lifetime: this.lifetime + "s" }, s = await this.sourceClient.request({ ...xt.RETRY_CONFIG, url: t, data: r, method: "POST" }), n = s.data;
        return this.credentials.access_token = n.accessToken, this.credentials.expiry_date = Date.parse(n.expireTime), { tokens: this.credentials, res: s };
      } catch (e) {
        if (!(e instanceof Error)) throw e;
        let t = 0, r = "";
        if (e instanceof ko.GaxiosError) t = e?.response?.data?.error?.status, r = e?.response?.data?.error?.message;
        if (t && r) throw e.message = `${t}: unable to impersonate: ${r}`, e;
        else throw e.message = `unable to impersonate: ${e}`, e;
      }
    }
    async fetchIdToken(e, t) {
      await this.sourceClient.getAccessToken();
      let r = `projects/-/serviceAccounts/${this.targetPrincipal}`, s = `${this.endpoint}/v1/${r}:generateIdToken`, n = { delegates: this.delegates, audience: e, includeEmail: t?.includeEmail ?? true, useEmailAzp: t?.includeEmail ?? true };
      return (await this.sourceClient.request({ ...xt.RETRY_CONFIG, url: s, data: n, method: "POST" })).data.token;
    }
  }
  So.Impersonated = xt;
});
var os = (0, import_chunk_w1d7ygsk.V)(function(No) {
  Object.defineProperty(No, "__esModule", { value: true });
  No.OAuthClientAuthHandler = void 0;
  No.getErrorFromOAuthErrorResponse = xl;
  var Te = re(), xo = Ot(), Rl = ["PUT", "POST", "PATCH"];
  class bo {
    #e = xo.createCrypto();
    #t;
    transporter;
    constructor(e) {
      if (e && "clientId" in e) this.#t = e, this.transporter = new Te.Gaxios();
      else this.#t = e?.clientAuthentication, this.transporter = e?.transporter || new Te.Gaxios();
    }
    applyClientAuthenticationOptions(e, t) {
      if (e.headers = Te.Gaxios.mergeHeaders(e.headers), this.injectAuthenticatedHeaders(e, t), !t) this.injectAuthenticatedRequestBody(e);
    }
    injectAuthenticatedHeaders(e, t) {
      if (t) e.headers = Te.Gaxios.mergeHeaders(e.headers, { authorization: `Bearer ${t}` });
      else if (this.#t?.confidentialClientType === "basic") {
        e.headers = Te.Gaxios.mergeHeaders(e.headers);
        let r = this.#t.clientId, s = this.#t.clientSecret || "", n = this.#e.encodeBase64StringUtf8(`${r}:${s}`);
        Te.Gaxios.mergeHeaders(e.headers, { authorization: `Basic ${n}` });
      }
    }
    injectAuthenticatedRequestBody(e) {
      if (this.#t?.confidentialClientType === "request-body") {
        let t = (e.method || "GET").toUpperCase();
        if (!Rl.includes(t)) throw Error(`${t} HTTP method does not support ${this.#t.confidentialClientType} client authentication`);
        let s = new Headers(e.headers).get("content-type");
        if (s?.startsWith("application/x-www-form-urlencoded") || e.data instanceof URLSearchParams) {
          let n = new URLSearchParams(e.data ?? "");
          n.append("client_id", this.#t.clientId), n.append("client_secret", this.#t.clientSecret || ""), e.data = n;
        } else if (s?.startsWith("application/json")) e.data = e.data || {}, Object.assign(e.data, { client_id: this.#t.clientId, client_secret: this.#t.clientSecret || "" });
        else throw Error(`${s} content-types are not supported with ${this.#t.confidentialClientType} client authentication`);
      }
    }
    static get RETRY_CONFIG() {
      return { retry: true, retryConfig: { httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"] } };
    }
  }
  No.OAuthClientAuthHandler = bo;
  function xl(e, t) {
    let { error: r, error_description: s, error_uri: n } = e, a = `Error code ${r}`;
    if (typeof s < "u") a += `: ${s}`;
    if (typeof n < "u") a += ` - ${n}`;
    let h = Error(a);
    if (t) {
      let g = Object.keys(t);
      if (t.stack) g.push("stack");
      g.forEach((E) => {
        if (E !== "message") Object.defineProperty(h, E, { value: t[E], writable: false, enumerable: true });
      });
    }
    return h;
  }
});
var rr = (0, import_chunk_w1d7ygsk.V)(function(Do) {
  Object.defineProperty(Do, "__esModule", { value: true });
  Do.StsCredentials = void 0;
  var Io = re(), Uo = fe(), tr = os(), jo = Se();
  class as extends tr.OAuthClientAuthHandler {
    #e;
    constructor(e = { tokenExchangeEndpoint: "" }, t) {
      if (typeof e !== "object" || e instanceof URL) e = { tokenExchangeEndpoint: e, clientAuthentication: t };
      super(e);
      this.#e = e.tokenExchangeEndpoint;
    }
    async exchangeToken(e, t, r) {
      let s = { grant_type: e.grantType, resource: e.resource, audience: e.audience, scope: e.scope?.join(" "), requested_token_type: e.requestedTokenType, subject_token: e.subjectToken, subject_token_type: e.subjectTokenType, actor_token: e.actingParty?.actorToken, actor_token_type: e.actingParty?.actorTokenType, options: r && JSON.stringify(r) }, n = { ...as.RETRY_CONFIG, url: this.#e.toString(), method: "POST", headers: t, data: new URLSearchParams(jo.removeUndefinedValuesInObject(s)), responseType: "json" };
      Uo.AuthClient.setMethodName(n, "exchangeToken"), this.applyClientAuthenticationOptions(n);
      try {
        let a = await this.transporter.request(n), h = a.data;
        return h.res = a, h;
      } catch (a) {
        if (a instanceof Io.GaxiosError && a.response) throw tr.getErrorFromOAuthErrorResponse(a.response.data, a);
        throw a;
      }
    }
  }
  Do.StsCredentials = as;
});
var Je = (0, import_chunk_w1d7ygsk.V)(function(Go) {
  Object.defineProperty(Go, "__esModule", { value: true });
  Go.BaseExternalAccountClient = Go.CLOUD_RESOURCE_MANAGER = Go.EXTERNAL_ACCOUNT_TYPE = Go.EXPIRATION_TIME_OFFSET = void 0;
  var sr = re(), Fo = (0, import_chunk_w1d7ygsk.ft)("stream"), lt = fe(), Mo = rr(), nr = Se(), Lo = Kr(), Nl = "urn:ietf:params:oauth:grant-type:token-exchange", Pl = "urn:ietf:params:oauth:token-type:access_token", cs = "https://www.googleapis.com/auth/cloud-platform", Il = 3600;
  Go.EXPIRATION_TIME_OFFSET = 3e5;
  Go.EXTERNAL_ACCOUNT_TYPE = "external_account";
  Go.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
  var Ul = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+", jl = "https://sts.{universeDomain}/v1/token";
  class ir extends lt.AuthClient {
    scopes;
    projectNumber;
    audience;
    subjectTokenType;
    stsCredential;
    clientAuth;
    credentialSourceType;
    cachedAccessToken;
    serviceAccountImpersonationUrl;
    serviceAccountImpersonationLifetime;
    workforcePoolUserProject;
    configLifetimeRequested;
    tokenUrl;
    cloudResourceManagerURL;
    supplierContext;
    #e = null;
    constructor(e) {
      super(e);
      let t = nr.originalOrCamelOptions(e), r = t.get("type");
      if (r && r !== Go.EXTERNAL_ACCOUNT_TYPE) throw Error(`Expected "${Go.EXTERNAL_ACCOUNT_TYPE}" type but received "${e.type}"`);
      let s = t.get("client_id"), n = t.get("client_secret");
      this.tokenUrl = t.get("token_url") ?? jl.replace("{universeDomain}", this.universeDomain);
      let a = t.get("subject_token_type"), h = t.get("workforce_pool_user_project"), g = t.get("service_account_impersonation_url"), E = t.get("service_account_impersonation"), k = nr.originalOrCamelOptions(E).get("token_lifetime_seconds");
      if (this.cloudResourceManagerURL = new URL(t.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`), s) this.clientAuth = { confidentialClientType: "basic", clientId: s, clientSecret: n };
      this.stsCredential = new Mo.StsCredentials({ tokenExchangeEndpoint: this.tokenUrl, clientAuthentication: this.clientAuth, transporter: new sr.Gaxios(this.transporter.defaults) }), this.scopes = t.get("scopes") || [cs], this.cachedAccessToken = null, this.audience = t.get("audience"), this.subjectTokenType = a, this.workforcePoolUserProject = h;
      let T = new RegExp(Ul);
      if (this.workforcePoolUserProject && !this.audience.match(T)) throw Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
      if (this.serviceAccountImpersonationUrl = g, this.serviceAccountImpersonationLifetime = k, this.serviceAccountImpersonationLifetime) this.configLifetimeRequested = true;
      else this.configLifetimeRequested = false, this.serviceAccountImpersonationLifetime = Il;
      this.projectNumber = this.getProjectNumber(this.audience), this.supplierContext = { audience: this.audience, subjectTokenType: this.subjectTokenType, transporter: this.transporter };
    }
    getServiceAccountEmail() {
      if (this.serviceAccountImpersonationUrl) {
        if (this.serviceAccountImpersonationUrl.length > 256) throw RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
        return /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(this.serviceAccountImpersonationUrl)?.groups?.email || null;
      }
      return null;
    }
    setCredentials(e) {
      super.setCredentials(e), this.cachedAccessToken = e;
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) await this.refreshAccessTokenAsync();
      return { token: this.cachedAccessToken.access_token, res: this.cachedAccessToken.res };
    }
    async getRequestHeaders() {
      let e = await this.getAccessToken(), t = new Headers({ authorization: `Bearer ${e.token}` });
      return this.addSharedMetadataHeaders(t);
    }
    request(e, t) {
      if (t) this.requestAsync(e).then((r) => t(null, r), (r) => t(r, r.response));
      else return this.requestAsync(e);
    }
    async getProjectId() {
      let e = this.projectNumber || this.workforcePoolUserProject;
      if (this.projectId) return this.projectId;
      else if (e) {
        let t = await this.getRequestHeaders(), r = { ...ir.RETRY_CONFIG, headers: t, url: `${this.cloudResourceManagerURL.toString()}${e}`, responseType: "json" };
        lt.AuthClient.setMethodName(r, "getProjectId");
        let s = await this.transporter.request(r);
        return this.projectId = s.data.projectId, this.projectId;
      }
      return null;
    }
    async requestAsync(e, t = false) {
      let r;
      try {
        let s = await this.getRequestHeaders();
        e.headers = sr.Gaxios.mergeHeaders(e.headers), this.addUserProjectAndAuthHeaders(e.headers, s), r = await this.transporter.request(e);
      } catch (s) {
        let n = s.response;
        if (n) {
          let a = n.status, h = n.config.data instanceof Fo.Readable;
          if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(e, true);
        }
        throw s;
      }
      return r;
    }
    async refreshAccessTokenAsync() {
      this.#e = this.#e || this.#t();
      try {
        return await this.#e;
      } finally {
        this.#e = null;
      }
    }
    async #t() {
      let e = await this.retrieveSubjectToken(), t = { grantType: Nl, audience: this.audience, requestedTokenType: Pl, subjectToken: e, subjectTokenType: this.subjectTokenType, scope: this.serviceAccountImpersonationUrl ? [cs] : this.getScopesArray() }, r = !this.clientAuth && this.workforcePoolUserProject ? { userProject: this.workforcePoolUserProject } : void 0, s = new Headers({ "x-goog-api-client": this.getMetricsHeaderValue() }), n = await this.stsCredential.exchangeToken(t, s, r);
      if (this.serviceAccountImpersonationUrl) this.cachedAccessToken = await this.getImpersonatedAccessToken(n.access_token);
      else if (n.expires_in) this.cachedAccessToken = { access_token: n.access_token, expiry_date: (/* @__PURE__ */ new Date()).getTime() + n.expires_in * 1e3, res: n.res };
      else this.cachedAccessToken = { access_token: n.access_token, res: n.res };
      return this.credentials = {}, Object.assign(this.credentials, this.cachedAccessToken), delete this.credentials.res, this.emit("tokens", { refresh_token: null, expiry_date: this.cachedAccessToken.expiry_date, access_token: this.cachedAccessToken.access_token, token_type: "Bearer", id_token: null }), this.cachedAccessToken;
    }
    getProjectNumber(e) {
      let t = e.match(/\/projects\/([^/]+)/);
      if (!t) return null;
      return t[1];
    }
    async getImpersonatedAccessToken(e) {
      let t = { ...ir.RETRY_CONFIG, url: this.serviceAccountImpersonationUrl, method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${e}` }, data: { scope: this.getScopesArray(), lifetime: this.serviceAccountImpersonationLifetime + "s" }, responseType: "json" };
      lt.AuthClient.setMethodName(t, "getImpersonatedAccessToken");
      let r = await this.transporter.request(t), s = r.data;
      return { access_token: s.accessToken, expiry_date: new Date(s.expireTime).getTime(), res: r };
    }
    isExpired(e) {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return e.expiry_date ? t >= e.expiry_date - this.eagerRefreshThresholdMillis : false;
    }
    getScopesArray() {
      if (typeof this.scopes === "string") return [this.scopes];
      return this.scopes || [cs];
    }
    getMetricsHeaderValue() {
      let e = process.version.replace(/^v/, ""), t = this.serviceAccountImpersonationUrl !== void 0, r = this.credentialSourceType ? this.credentialSourceType : "unknown";
      return `gl-node/${e} auth/${Lo.pkg.version} google-byoid-sdk source/${r} sa-impersonation/${t} config-lifetime/${this.configLifetimeRequested}`;
    }
    getTokenUrl() {
      return this.tokenUrl;
    }
  }
  Go.BaseExternalAccountClient = ir;
});
var Ko = (0, import_chunk_w1d7ygsk.V)(function($o) {
  Object.defineProperty($o, "__esModule", { value: true });
  $o.FileSubjectTokenSupplier = void 0;
  var dt = (0, import_chunk_w1d7ygsk.ft)("util"), ht = (0, import_chunk_w1d7ygsk.ft)("fs"), Fl = dt.promisify(ht.readFile ?? (() => {
  })), Ml = dt.promisify(ht.realpath ?? (() => {
  })), Ll = dt.promisify(ht.lstat ?? (() => {
  }));
  class Ho {
    filePath;
    formatType;
    subjectTokenFieldName;
    constructor(e) {
      this.filePath = e.filePath, this.formatType = e.formatType, this.subjectTokenFieldName = e.subjectTokenFieldName;
    }
    async getSubjectToken() {
      let e = this.filePath;
      try {
        if (e = await Ml(e), !(await Ll(e)).isFile()) throw Error();
      } catch (s) {
        if (s instanceof Error) s.message = `The file at ${e} does not exist, or it is not a file. ${s.message}`;
        throw s;
      }
      let t, r = await Fl(e, { encoding: "utf8" });
      if (this.formatType === "text") t = r;
      else if (this.formatType === "json" && this.subjectTokenFieldName) t = JSON.parse(r)[this.subjectTokenFieldName];
      if (!t) throw Error("Unable to parse the subject_token from the credential_source file");
      return t;
    }
  }
  $o.FileSubjectTokenSupplier = Ho;
});
var zo = (0, import_chunk_w1d7ygsk.V)(function(Yo) {
  Object.defineProperty(Yo, "__esModule", { value: true });
  Yo.UrlSubjectTokenSupplier = void 0;
  var Wo = fe();
  class Vo {
    url;
    headers;
    formatType;
    subjectTokenFieldName;
    additionalGaxiosOptions;
    constructor(e) {
      this.url = e.url, this.formatType = e.formatType, this.subjectTokenFieldName = e.subjectTokenFieldName, this.headers = e.headers, this.additionalGaxiosOptions = e.additionalGaxiosOptions;
    }
    async getSubjectToken(e) {
      let t = { ...this.additionalGaxiosOptions, url: this.url, method: "GET", headers: this.headers, responseType: this.formatType };
      Wo.AuthClient.setMethodName(t, "getSubjectToken");
      let r;
      if (this.formatType === "text") r = (await e.transporter.request(t)).data;
      else if (this.formatType === "json" && this.subjectTokenFieldName) r = (await e.transporter.request(t)).data[this.subjectTokenFieldName];
      if (!r) throw Error("Unable to parse the subject_token from the credential_source URL");
      return r;
    }
  }
  Yo.UrlSubjectTokenSupplier = Vo;
});
var ra = (0, import_chunk_w1d7ygsk.V)(function(ea) {
  Object.defineProperty(ea, "__esModule", { value: true });
  ea.CertificateSubjectTokenSupplier = ea.InvalidConfigurationError = ea.CertificateSourceUnavailableError = ea.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = void 0;
  var Ke = Se(), We = (0, import_chunk_w1d7ygsk.ft)("fs"), Ve = (0, import_chunk_w1d7ygsk.ft)("crypto"), Qo = (0, import_chunk_w1d7ygsk.ft)("https");
  ea.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = "GOOGLE_API_CERTIFICATE_CONFIG";
  class Fe extends Error {
    constructor(e) {
      super(e);
      this.name = "CertificateSourceUnavailableError";
    }
  }
  ea.CertificateSourceUnavailableError = Fe;
  class Re extends Error {
    constructor(e) {
      super(e);
      this.name = "InvalidConfigurationError";
    }
  }
  ea.InvalidConfigurationError = Re;
  class Zo {
    certificateConfigPath;
    trustChainPath;
    cert;
    key;
    constructor(e) {
      if (!e.useDefaultCertificateConfig && !e.certificateConfigLocation) throw new Re("Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.");
      if (e.useDefaultCertificateConfig && e.certificateConfigLocation) throw new Re("Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.");
      this.trustChainPath = e.trustChainPath, this.certificateConfigPath = e.certificateConfigLocation ?? "";
    }
    async createMtlsHttpsAgent() {
      if (!this.key || !this.cert) throw new Re("Cannot create mTLS Agent with missing certificate or key");
      return new Qo.Agent({ key: this.key, cert: this.cert });
    }
    async getSubjectToken() {
      this.certificateConfigPath = await this.#e();
      let { certPath: e, keyPath: t } = await this.#t();
      return { cert: this.cert, key: this.key } = await this.#r(e, t), await this.#s(this.cert);
    }
    async #e() {
      let e = this.certificateConfigPath;
      if (e) {
        if (await Ke.isValidFile(e)) return e;
        throw new Fe(`Provided certificate config path is invalid: ${e}`);
      }
      let t = process.env[ea.CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
      if (t) {
        if (await Ke.isValidFile(t)) return t;
        throw new Fe(`Path from environment variable "${ea.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${t}`);
      }
      let r = Ke.getWellKnownCertificateConfigFileLocation();
      if (await Ke.isValidFile(r)) return r;
      throw new Fe(`Could not find certificate configuration file. Searched override path, the "${ea.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${r}).`);
    }
    async #t() {
      let e = this.certificateConfigPath, t;
      try {
        t = await We.promises.readFile(e, "utf8");
      } catch (r) {
        throw new Fe(`Failed to read certificate config file at: ${e}`);
      }
      try {
        let r = JSON.parse(t), s = r?.cert_configs?.workload?.cert_path, n = r?.cert_configs?.workload?.key_path;
        if (!s || !n) throw new Re(`Certificate config file (${e}) is missing required "cert_path" or "key_path" in the workload config.`);
        return { certPath: s, keyPath: n };
      } catch (r) {
        if (r instanceof Re) throw r;
        throw new Re(`Failed to parse certificate config from ${e}: ${r.message}`);
      }
    }
    async #r(e, t) {
      let r, s;
      try {
        r = await We.promises.readFile(e), new Ve.X509Certificate(r);
      } catch (n) {
        let a = n instanceof Error ? n.message : String(n);
        throw new Fe(`Failed to read certificate file at ${e}: ${a}`);
      }
      try {
        s = await We.promises.readFile(t), Ve.createPrivateKey(s);
      } catch (n) {
        let a = n instanceof Error ? n.message : String(n);
        throw new Fe(`Failed to read private key file at ${t}: ${a}`);
      }
      return { cert: r, key: s };
    }
    async #s(e) {
      let t = new Ve.X509Certificate(e);
      if (!this.trustChainPath) return JSON.stringify([t.raw.toString("base64")]);
      try {
        let n = ((await We.promises.readFile(this.trustChainPath, "utf8")).match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g) ?? []).map((g, E) => {
          try {
            return new Ve.X509Certificate(g);
          } catch (k) {
            let T = k instanceof Error ? k.message : String(k);
            throw new Re(`Failed to parse certificate at index ${E} in trust chain file ${this.trustChainPath}: ${T}`);
          }
        }), a = n.findIndex((g) => t.raw.equals(g.raw)), h;
        if (a === -1) h = [t, ...n];
        else if (a === 0) h = n;
        else throw new Re(`Leaf certificate exists in the trust chain but is not the first entry (found at index ${a}).`);
        return JSON.stringify(h.map((g) => g.raw.toString("base64")));
      } catch (r) {
        if (r instanceof Re) throw r;
        let s = r instanceof Error ? r.message : String(r);
        throw new Fe(`Failed to process certificate chain from ${this.trustChainPath}: ${s}`);
      }
    }
  }
  ea.CertificateSubjectTokenSupplier = Zo;
});
var ds = (0, import_chunk_w1d7ygsk.V)(function(aa) {
  Object.defineProperty(aa, "__esModule", { value: true });
  aa.IdentityPoolClient = void 0;
  var sa = Je(), pt = Se(), na = Ko(), ia = zo(), ar = ra(), oa = rr(), cr = re();
  class ls extends sa.BaseExternalAccountClient {
    subjectTokenSupplier;
    constructor(e) {
      super(e);
      let t = pt.originalOrCamelOptions(e), r = t.get("credential_source"), s = t.get("subject_token_supplier");
      if (!r && !s) throw Error("A credential source or subject token supplier must be specified.");
      if (r && s) throw Error("Only one of credential source or subject token supplier can be specified.");
      if (s) this.subjectTokenSupplier = s, this.credentialSourceType = "programmatic";
      else {
        let n = pt.originalOrCamelOptions(r), a = pt.originalOrCamelOptions(n.get("format")), h = a.get("type") || "text", g = a.get("subject_token_field_name");
        if (h !== "json" && h !== "text") throw Error(`Invalid credential_source format "${h}"`);
        if (h === "json" && !g) throw Error("Missing subject_token_field_name for JSON credential_source format");
        let E = n.get("file"), k = n.get("url"), T = n.get("certificate"), U = n.get("headers");
        if (E && k || k && T || E && T) throw Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
        else if (E) this.credentialSourceType = "file", this.subjectTokenSupplier = new na.FileSubjectTokenSupplier({ filePath: E, formatType: h, subjectTokenFieldName: g });
        else if (k) this.credentialSourceType = "url", this.subjectTokenSupplier = new ia.UrlSubjectTokenSupplier({ url: k, formatType: h, subjectTokenFieldName: g, headers: U, additionalGaxiosOptions: ls.RETRY_CONFIG });
        else if (T) {
          this.credentialSourceType = "certificate";
          let P = new ar.CertificateSubjectTokenSupplier({ useDefaultCertificateConfig: T.use_default_certificate_config, certificateConfigLocation: T.certificate_config_location, trustChainPath: T.trust_chain_path });
          this.subjectTokenSupplier = P;
        } else throw Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
      }
    }
    async retrieveSubjectToken() {
      let e = await this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
      if (this.subjectTokenSupplier instanceof ar.CertificateSubjectTokenSupplier) {
        let t = await this.subjectTokenSupplier.createMtlsHttpsAgent();
        this.stsCredential = new oa.StsCredentials({ tokenExchangeEndpoint: this.getTokenUrl(), clientAuthentication: this.clientAuth, transporter: new cr.Gaxios({ ...this.transporter.defaults || {}, agent: t }) }), this.transporter = new cr.Gaxios({ ...this.transporter.defaults || {}, agent: t });
      }
      return e;
    }
  }
  aa.IdentityPoolClient = ls;
});
var hs = (0, import_chunk_w1d7ygsk.V)(function(da) {
  Object.defineProperty(da, "__esModule", { value: true });
  da.AwsRequestSigner = void 0;
  var Ye = re(), ur = Ot(), ua = "AWS4-HMAC-SHA256", Hl = "aws4_request";
  class la {
    getCredentials;
    region;
    crypto;
    constructor(e, t) {
      this.getCredentials = e, this.region = t, this.crypto = ur.createCrypto();
    }
    async getRequestOptions(e) {
      if (!e.url) throw RangeError('"url" is required in "amzOptions"');
      let t = typeof e.data === "object" ? JSON.stringify(e.data) : e.data, r = e.url, s = e.method || "GET", n = e.body || t, a = e.headers, h = await this.getCredentials(), g = new URL(r);
      if (typeof n !== "string" && n !== void 0) throw TypeError(`'requestPayload' is expected to be a string if provided. Got: ${n}`);
      let E = await Jl({ crypto: this.crypto, host: g.host, canonicalUri: g.pathname, canonicalQuerystring: g.search.slice(1), method: s, region: this.region, securityCredentials: h, requestPayload: n, additionalAmzHeaders: a }), k = Ye.Gaxios.mergeHeaders(E.amzDate ? { "x-amz-date": E.amzDate } : {}, { authorization: E.authorizationHeader, host: g.host }, a || {});
      if (h.token) Ye.Gaxios.mergeHeaders(k, { "x-amz-security-token": h.token });
      let T = { url: r, method: s, headers: k };
      if (n !== void 0) T.body = n;
      return T;
    }
  }
  da.AwsRequestSigner = la;
  async function bt(e, t, r) {
    return await e.signWithHmacSha256(t, r);
  }
  async function $l(e, t, r, s, n) {
    let a = await bt(e, `AWS4${t}`, r), h = await bt(e, a, s), g = await bt(e, h, n);
    return await bt(e, g, "aws4_request");
  }
  async function Jl(e) {
    let t = Ye.Gaxios.mergeHeaders(e.additionalAmzHeaders), r = e.requestPayload || "", s = e.host.split(".")[0], n = /* @__PURE__ */ new Date(), a = n.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, ""), h = n.toISOString().replace(/[-]/g, "").replace(/T.*/, "");
    if (e.securityCredentials.token) t.set("x-amz-security-token", e.securityCredentials.token);
    let g = Ye.Gaxios.mergeHeaders({ host: e.host }, t.has("date") ? {} : { "x-amz-date": a }, t), E = "", k = [...g.keys()].sort();
    k.forEach((L) => {
      E += `${L}:${g.get(L)}
`;
    });
    let T = k.join(";"), U = await e.crypto.sha256DigestHex(r), P = `${e.method.toUpperCase()}
${e.canonicalUri}
${e.canonicalQuerystring}
${E}
${T}
${U}`, Y = `${h}/${e.region}/${s}/${Hl}`, J = `${ua}
${a}
${Y}
` + await e.crypto.sha256DigestHex(P), S = await $l(e.crypto, e.securityCredentials.secretAccessKey, h, e.region, s), N = await bt(e.crypto, S, J), O = `${ua} Credential=${e.securityCredentials.accessKeyId}/${Y}, SignedHeaders=${T}, Signature=${ur.fromArrayBufferToHex(N)}`;
    return { amzDate: t.has("date") ? void 0 : a, authorizationHeader: O, canonicalQuerystring: e.canonicalQuerystring };
  }
});
var ya = (0, import_chunk_w1d7ygsk.V)(function(pa) {
  Object.defineProperty(pa, "__esModule", { value: true });
  pa.DefaultAwsSecurityCredentialsSupplier = void 0;
  var Xe = fe();
  class fa {
    regionUrl;
    securityCredentialsUrl;
    imdsV2SessionTokenUrl;
    additionalGaxiosOptions;
    constructor(e) {
      this.regionUrl = e.regionUrl, this.securityCredentialsUrl = e.securityCredentialsUrl, this.imdsV2SessionTokenUrl = e.imdsV2SessionTokenUrl, this.additionalGaxiosOptions = e.additionalGaxiosOptions;
    }
    async getAwsRegion(e) {
      if (this.#s) return this.#s;
      let t = new Headers();
      if (!this.#s && this.imdsV2SessionTokenUrl) t.set("x-aws-ec2-metadata-token", await this.#e(e.transporter));
      if (!this.regionUrl) throw RangeError('Unable to determine AWS region due to missing "options.credential_source.region_url"');
      let r = { ...this.additionalGaxiosOptions, url: this.regionUrl, method: "GET", responseType: "text", headers: t };
      Xe.AuthClient.setMethodName(r, "getAwsRegion");
      let s = await e.transporter.request(r);
      return s.data.substr(0, s.data.length - 1);
    }
    async getAwsSecurityCredentials(e) {
      if (this.#n) return this.#n;
      let t = new Headers();
      if (this.imdsV2SessionTokenUrl) t.set("x-aws-ec2-metadata-token", await this.#e(e.transporter));
      let r = await this.#t(t, e.transporter), s = await this.#r(r, t, e.transporter);
      return { accessKeyId: s.AccessKeyId, secretAccessKey: s.SecretAccessKey, token: s.Token };
    }
    async #e(e) {
      let t = { ...this.additionalGaxiosOptions, url: this.imdsV2SessionTokenUrl, method: "PUT", responseType: "text", headers: { "x-aws-ec2-metadata-token-ttl-seconds": "300" } };
      return Xe.AuthClient.setMethodName(t, "#getImdsV2SessionToken"), (await e.request(t)).data;
    }
    async #t(e, t) {
      if (!this.securityCredentialsUrl) throw Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
      let r = { ...this.additionalGaxiosOptions, url: this.securityCredentialsUrl, method: "GET", responseType: "text", headers: e };
      return Xe.AuthClient.setMethodName(r, "#getAwsRoleName"), (await t.request(r)).data;
    }
    async #r(e, t, r) {
      let s = { ...this.additionalGaxiosOptions, url: `${this.securityCredentialsUrl}/${e}`, headers: t, responseType: "json" };
      return Xe.AuthClient.setMethodName(s, "#retrieveAwsSecurityCredentials"), (await r.request(s)).data;
    }
    get #s() {
      return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null;
    }
    get #n() {
      if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) return { accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, token: process.env.AWS_SESSION_TOKEN };
      return null;
    }
  }
  pa.DefaultAwsSecurityCredentialsSupplier = fa;
});
var fs = (0, import_chunk_w1d7ygsk.V)(function(Aa) {
  Object.defineProperty(Aa, "__esModule", { value: true });
  Aa.AwsClient = void 0;
  var _a = hs(), ma = Je(), Ea = ya(), lr = Se(), wa = re();
  class dr extends ma.BaseExternalAccountClient {
    environmentId;
    awsSecurityCredentialsSupplier;
    regionalCredVerificationUrl;
    awsRequestSigner;
    region;
    static #e = "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15";
    static AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
    static AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254";
    constructor(e) {
      super(e);
      let t = lr.originalOrCamelOptions(e), r = t.get("credential_source"), s = t.get("aws_security_credentials_supplier");
      if (!r && !s) throw Error("A credential source or AWS security credentials supplier must be specified.");
      if (r && s) throw Error("Only one of credential source or AWS security credentials supplier can be specified.");
      if (s) this.awsSecurityCredentialsSupplier = s, this.regionalCredVerificationUrl = dr.#e, this.credentialSourceType = "programmatic";
      else {
        let n = lr.originalOrCamelOptions(r);
        this.environmentId = n.get("environment_id");
        let a = n.get("region_url"), h = n.get("url"), g = n.get("imdsv2_session_token_url");
        this.awsSecurityCredentialsSupplier = new Ea.DefaultAwsSecurityCredentialsSupplier({ regionUrl: a, securityCredentialsUrl: h, imdsV2SessionTokenUrl: g }), this.regionalCredVerificationUrl = n.get("regional_cred_verification_url"), this.credentialSourceType = "aws", this.validateEnvironmentId();
      }
      this.awsRequestSigner = null, this.region = "";
    }
    validateEnvironmentId() {
      let e = this.environmentId?.match(/^(aws)(\d+)$/);
      if (!e || !this.regionalCredVerificationUrl) throw Error('No valid AWS "credential_source" provided');
      else if (parseInt(e[2], 10) !== 1) throw Error(`aws version "${e[2]}" is not supported in the current build.`);
    }
    async retrieveSubjectToken() {
      if (!this.awsRequestSigner) this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext), this.awsRequestSigner = new _a.AwsRequestSigner(async () => this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext), this.region);
      let e = await this.awsRequestSigner.getRequestOptions({ ...dr.RETRY_CONFIG, url: this.regionalCredVerificationUrl.replace("{region}", this.region), method: "POST" }), t = [];
      return wa.Gaxios.mergeHeaders({ "x-goog-cloud-target-resource": this.audience }, e.headers).forEach((s, n) => t.push({ key: n, value: s })), encodeURIComponent(JSON.stringify({ url: e.url, method: e.method, headers: t }));
    }
  }
  Aa.AwsClient = dr;
});
var As = (0, import_chunk_w1d7ygsk.V)(function(ka) {
  Object.defineProperty(ka, "__esModule", { value: true });
  ka.InvalidSubjectTokenError = ka.InvalidMessageFieldError = ka.InvalidCodeFieldError = ka.InvalidTokenTypeFieldError = ka.InvalidExpirationTimeFieldError = ka.InvalidSuccessFieldError = ka.InvalidVersionFieldError = ka.ExecutableResponseError = ka.ExecutableResponse = void 0;
  var hr = "urn:ietf:params:oauth:token-type:saml2", ps = "urn:ietf:params:oauth:token-type:id_token", gs = "urn:ietf:params:oauth:token-type:jwt";
  class Ca {
    version;
    success;
    expirationTime;
    tokenType;
    errorCode;
    errorMessage;
    subjectToken;
    constructor(e) {
      if (!e.version) throw new ys("Executable response must contain a 'version' field.");
      if (e.success === void 0) throw new _s("Executable response must contain a 'success' field.");
      if (this.version = e.version, this.success = e.success, this.success) {
        if (this.expirationTime = e.expiration_time, this.tokenType = e.token_type, this.tokenType !== hr && this.tokenType !== ps && this.tokenType !== gs) throw new ms(`Executable response must contain a 'token_type' field when successful and it must be one of ${ps}, ${gs}, or ${hr}.`);
        if (this.tokenType === hr) {
          if (!e.saml_response) throw new fr(`Executable response must contain a 'saml_response' field when token_type=${hr}.`);
          this.subjectToken = e.saml_response;
        } else {
          if (!e.id_token) throw new fr(`Executable response must contain a 'id_token' field when token_type=${ps} or ${gs}.`);
          this.subjectToken = e.id_token;
        }
      } else {
        if (!e.code) throw new Es("Executable response must contain a 'code' field when unsuccessful.");
        if (!e.message) throw new ws("Executable response must contain a 'message' field when unsuccessful.");
        this.errorCode = e.code, this.errorMessage = e.message;
      }
    }
    isValid() {
      return !this.isExpired() && this.success;
    }
    isExpired() {
      return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1e3);
    }
  }
  ka.ExecutableResponse = Ca;
  class Me extends Error {
    constructor(e) {
      super(e);
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  ka.ExecutableResponseError = Me;
  class ys extends Me {
  }
  ka.InvalidVersionFieldError = ys;
  class _s extends Me {
  }
  ka.InvalidSuccessFieldError = _s;
  class va extends Me {
  }
  ka.InvalidExpirationTimeFieldError = va;
  class ms extends Me {
  }
  ka.InvalidTokenTypeFieldError = ms;
  class Es extends Me {
  }
  ka.InvalidCodeFieldError = Es;
  class ws extends Me {
  }
  ka.InvalidMessageFieldError = ws;
  class fr extends Me {
  }
  ka.InvalidSubjectTokenError = fr;
});
var vs = (0, import_chunk_w1d7ygsk.V)(function(Ra) {
  Object.defineProperty(Ra, "__esModule", { value: true });
  Ra.PluggableAuthHandler = Ra.ExecutableError = void 0;
  var le = As(), Sa = (0, import_chunk_w1d7ygsk.ft)("child_process"), gt = (0, import_chunk_w1d7ygsk.ft)("fs");
  class Ts extends Error {
    code;
    constructor(e, t) {
      super(`The executable failed with exit code: ${t} and error message: ${e}.`);
      this.code = t, Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  Ra.ExecutableError = Ts;
  class Cs {
    commandComponents;
    timeoutMillis;
    outputFile;
    constructor(e) {
      if (!e.command) throw Error("No command provided.");
      if (this.commandComponents = Cs.parseCommand(e.command), this.timeoutMillis = e.timeoutMillis, !this.timeoutMillis) throw Error("No timeoutMillis provided.");
      this.outputFile = e.outputFile;
    }
    retrieveResponseFromExecutable(e) {
      return new Promise((t, r) => {
        let s = Sa.spawn(this.commandComponents[0], this.commandComponents.slice(1), { env: { ...process.env, ...Object.fromEntries(e) } }), n = "";
        s.stdout.on("data", (h) => {
          n += h;
        }), s.stderr.on("data", (h) => {
          n += h;
        });
        let a = setTimeout(() => (s.removeAllListeners(), s.kill(), r(Error("The executable failed to finish within the timeout specified."))), this.timeoutMillis);
        s.on("close", (h) => {
          if (clearTimeout(a), h === 0) try {
            let g = JSON.parse(n), E = new le.ExecutableResponse(g);
            return t(E);
          } catch (g) {
            if (g instanceof le.ExecutableResponseError) return r(g);
            return r(new le.ExecutableResponseError(`The executable returned an invalid response: ${n}`));
          }
          else return r(new Ts(n, h.toString()));
        });
      });
    }
    async retrieveCachedResponse() {
      if (!this.outputFile || this.outputFile.length === 0) return;
      let e;
      try {
        e = await gt.promises.realpath(this.outputFile);
      } catch {
        return;
      }
      if (!(await gt.promises.lstat(e)).isFile()) return;
      let t = await gt.promises.readFile(e, { encoding: "utf8" });
      if (t === "") return;
      try {
        let r = JSON.parse(t);
        if (new le.ExecutableResponse(r).isValid()) return new le.ExecutableResponse(r);
        return;
      } catch (r) {
        if (r instanceof le.ExecutableResponseError) throw r;
        throw new le.ExecutableResponseError(`The output file contained an invalid response: ${t}`);
      }
    }
    static parseCommand(e) {
      let t = e.match(/(?:[^\s"]+|"[^"]*")+/g);
      if (!t) throw Error(`Provided command: "${e}" could not be parsed.`);
      for (let r = 0; r < t.length; r++) if (t[r][0] === '"' && t[r].slice(-1) === '"') t[r] = t[r].slice(1, -1);
      return t;
    }
  }
  Ra.PluggableAuthHandler = Cs;
});
var Os = (0, import_chunk_w1d7ygsk.V)(function(ks) {
  Object.defineProperty(ks, "__esModule", { value: true });
  ks.PluggableAuthClient = ks.ExecutableError = void 0;
  var Ia = Je(), Ua = As(), pr = vs(), td = vs();
  Object.defineProperty(ks, "ExecutableError", { enumerable: true, get: function() {
    return td.ExecutableError;
  } });
  var rd = 3e4, ba = 5e3, Na = 12e4, sd = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES", Pa = 1;
  class ja extends Ia.BaseExternalAccountClient {
    command;
    timeoutMillis;
    outputFile;
    handler;
    constructor(e) {
      super(e);
      if (!e.credential_source.executable) throw Error('No valid Pluggable Auth "credential_source" provided.');
      if (this.command = e.credential_source.executable.command, !this.command) throw Error('No valid Pluggable Auth "credential_source" provided.');
      if (e.credential_source.executable.timeout_millis === void 0) this.timeoutMillis = rd;
      else if (this.timeoutMillis = e.credential_source.executable.timeout_millis, this.timeoutMillis < ba || this.timeoutMillis > Na) throw Error(`Timeout must be between ${ba} and ${Na} milliseconds.`);
      this.outputFile = e.credential_source.executable.output_file, this.handler = new pr.PluggableAuthHandler({ command: this.command, timeoutMillis: this.timeoutMillis, outputFile: this.outputFile }), this.credentialSourceType = "executable";
    }
    async retrieveSubjectToken() {
      if (process.env[sd] !== "1") throw Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
      let e = void 0;
      if (this.outputFile) e = await this.handler.retrieveCachedResponse();
      if (!e) {
        let t = /* @__PURE__ */ new Map();
        if (t.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience), t.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType), t.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0"), this.outputFile) t.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
        let r = this.getServiceAccountEmail();
        if (r) t.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", r);
        e = await this.handler.retrieveResponseFromExecutable(t);
      }
      if (e.version > Pa) throw Error(`Version of executable is not currently supported, maximum supported version is ${Pa}.`);
      if (!e.success) throw new pr.ExecutableError(e.errorMessage, e.errorCode);
      if (this.outputFile) {
        if (!e.expirationTime) throw new Ua.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.");
      }
      if (e.isExpired()) throw Error("Executable response is expired.");
      return e.subjectToken;
    }
  }
  ks.PluggableAuthClient = ja;
});
var Ss = (0, import_chunk_w1d7ygsk.V)(function(Ba) {
  Object.defineProperty(Ba, "__esModule", { value: true });
  Ba.ExternalAccountClient = void 0;
  var qa = Je(), Fa = ds(), Ma = fs(), La = Os();
  class Ga {
    constructor() {
      throw Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
    }
    static fromJSON(e) {
      if (e && e.type === qa.EXTERNAL_ACCOUNT_TYPE) if (e.credential_source?.environment_id) return new Ma.AwsClient(e);
      else if (e.credential_source?.executable) return new La.PluggableAuthClient(e);
      else return new Fa.IdentityPoolClient(e);
      else return null;
    }
  }
  Ba.ExternalAccountClient = Ga;
});
var xs = (0, import_chunk_w1d7ygsk.V)(function(Wa) {
  Object.defineProperty(Wa, "__esModule", { value: true });
  Wa.ExternalAccountAuthorizedUserClient = Wa.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
  var yr = fe(), gr = os(), _r = re(), $a = (0, import_chunk_w1d7ygsk.ft)("stream"), Ja = Je();
  Wa.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
  var nd = "https://sts.{universeDomain}/v1/oauthtoken";
  class Rs extends gr.OAuthClientAuthHandler {
    #e;
    constructor(e) {
      super(e);
      this.#e = e.tokenRefreshEndpoint;
    }
    async refreshToken(e, t) {
      let r = { ...Rs.RETRY_CONFIG, url: this.#e, method: "POST", headers: t, data: new URLSearchParams({ grant_type: "refresh_token", refresh_token: e }), responseType: "json" };
      yr.AuthClient.setMethodName(r, "refreshToken"), this.applyClientAuthenticationOptions(r);
      try {
        let s = await this.transporter.request(r), n = s.data;
        return n.res = s, n;
      } catch (s) {
        if (s instanceof _r.GaxiosError && s.response) throw gr.getErrorFromOAuthErrorResponse(s.response.data, s);
        throw s;
      }
    }
  }
  class Ka extends yr.AuthClient {
    cachedAccessToken;
    externalAccountAuthorizedUserHandler;
    refreshToken;
    constructor(e) {
      super(e);
      if (e.universe_domain) this.universeDomain = e.universe_domain;
      this.refreshToken = e.refresh_token;
      let t = { confidentialClientType: "basic", clientId: e.client_id, clientSecret: e.client_secret };
      if (this.externalAccountAuthorizedUserHandler = new Rs({ tokenRefreshEndpoint: e.token_url ?? nd.replace("{universeDomain}", this.universeDomain), transporter: this.transporter, clientAuthentication: t }), this.cachedAccessToken = null, this.quotaProjectId = e.quota_project_id, typeof e?.eagerRefreshThresholdMillis !== "number") this.eagerRefreshThresholdMillis = Ja.EXPIRATION_TIME_OFFSET;
      else this.eagerRefreshThresholdMillis = e.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = !!e?.forceRefreshOnFailure;
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) await this.refreshAccessTokenAsync();
      return { token: this.cachedAccessToken.access_token, res: this.cachedAccessToken.res };
    }
    async getRequestHeaders() {
      let e = await this.getAccessToken(), t = new Headers({ authorization: `Bearer ${e.token}` });
      return this.addSharedMetadataHeaders(t);
    }
    request(e, t) {
      if (t) this.requestAsync(e).then((r) => t(null, r), (r) => t(r, r.response));
      else return this.requestAsync(e);
    }
    async requestAsync(e, t = false) {
      let r;
      try {
        let s = await this.getRequestHeaders();
        e.headers = _r.Gaxios.mergeHeaders(e.headers), this.addUserProjectAndAuthHeaders(e.headers, s), r = await this.transporter.request(e);
      } catch (s) {
        let n = s.response;
        if (n) {
          let a = n.status, h = n.config.data instanceof $a.Readable;
          if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(e, true);
        }
        throw s;
      }
      return r;
    }
    async refreshAccessTokenAsync() {
      let e = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
      if (this.cachedAccessToken = { access_token: e.access_token, expiry_date: (/* @__PURE__ */ new Date()).getTime() + e.expires_in * 1e3, res: e.res }, e.refresh_token !== void 0) this.refreshToken = e.refresh_token;
      return this.cachedAccessToken;
    }
    isExpired(e) {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return e.expiry_date ? t >= e.expiry_date - this.eagerRefreshThresholdMillis : false;
    }
  }
  Wa.ExternalAccountAuthorizedUserClient = Ka;
});
var ic = (0, import_chunk_w1d7ygsk.V)(function(sc) {
  Object.defineProperty(sc, "__esModule", { value: true });
  sc.GoogleAuth = sc.GoogleAuthExceptionMessages = void 0;
  var Ya = (0, import_chunk_w1d7ygsk.ft)("child_process"), Pe = (0, import_chunk_w1d7ygsk.ft)("fs"), Xa = re(), Ie = kt(), mr = (0, import_chunk_w1d7ygsk.ft)("os"), _t = (0, import_chunk_w1d7ygsk.ft)("path"), za = Ot(), Qa = Yr(), Za = Xr(), ec = zr(), Ce = ss(), Er = ns(), ve = is(), tc = Ss(), Ue = Je(), mt = fe(), wr = xs(), Ar = Se();
  sc.GoogleAuthExceptionMessages = { API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.", NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`, NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`, NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.", NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
To learn more about Universe Domain retrieval, visit: 
https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys` };
  class rc {
    checkIsGCE = void 0;
    useJWTAccessWithScope;
    defaultServicePath;
    get isGCE() {
      return this.checkIsGCE;
    }
    _findProjectIdPromise;
    _cachedProjectId;
    jsonContent = null;
    apiKey;
    cachedCredential = null;
    #e = null;
    defaultScopes;
    keyFilename;
    scopes;
    clientOptions = {};
    constructor(e = {}) {
      if (this._cachedProjectId = e.projectId || null, this.cachedCredential = e.authClient || null, this.keyFilename = e.keyFilename || e.keyFile, this.scopes = e.scopes, this.clientOptions = e.clientOptions || {}, this.jsonContent = e.credentials || null, this.apiKey = e.apiKey || this.clientOptions.apiKey || null, this.apiKey && (this.jsonContent || this.clientOptions.credentials)) throw RangeError(sc.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
      if (e.universeDomain) this.clientOptions.universeDomain = e.universeDomain;
    }
    setGapicJWTValues(e) {
      e.defaultServicePath = this.defaultServicePath, e.useJWTAccessWithScope = this.useJWTAccessWithScope, e.defaultScopes = this.defaultScopes;
    }
    getProjectId(e) {
      if (e) this.getProjectIdAsync().then((t) => e(null, t), e);
      else return this.getProjectIdAsync();
    }
    async getProjectIdOptional() {
      try {
        return await this.getProjectId();
      } catch (e) {
        if (e instanceof Error && e.message === sc.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) return null;
        else throw e;
      }
    }
    async findAndCacheProjectId() {
      let e = null;
      if (e ||= await this.getProductionProjectId(), e ||= await this.getFileProjectId(), e ||= await this.getDefaultServiceProjectId(), e ||= await this.getGCEProjectId(), e ||= await this.getExternalAccountClientProjectId(), e) return this._cachedProjectId = e, e;
      else throw Error(sc.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
    }
    async getProjectIdAsync() {
      if (this._cachedProjectId) return this._cachedProjectId;
      if (!this._findProjectIdPromise) this._findProjectIdPromise = this.findAndCacheProjectId();
      return this._findProjectIdPromise;
    }
    async getUniverseDomainFromMetadataServer() {
      let e;
      try {
        e = await Ie.universe("universe-domain"), e ||= mt.DEFAULT_UNIVERSE;
      } catch (t) {
        if (t && t?.response?.status === 404) e = mt.DEFAULT_UNIVERSE;
        else throw t;
      }
      return e;
    }
    async getUniverseDomain() {
      let e = Ar.originalOrCamelOptions(this.clientOptions).get("universe_domain");
      try {
        e ??= (await this.getClient()).universeDomain;
      } catch {
        e ??= mt.DEFAULT_UNIVERSE;
      }
      return e;
    }
    getAnyScopes() {
      return this.scopes || this.defaultScopes;
    }
    getApplicationDefault(e = {}, t) {
      let r;
      if (typeof e === "function") t = e;
      else r = e;
      if (t) this.getApplicationDefaultAsync(r).then((s) => t(null, s.credential, s.projectId), t);
      else return this.getApplicationDefaultAsync(r);
    }
    async getApplicationDefaultAsync(e = {}) {
      if (this.cachedCredential) return await this.#t(this.cachedCredential, null);
      let t;
      if (t = await this._tryGetApplicationCredentialsFromEnvironmentVariable(e), t) {
        if (t instanceof Ce.JWT) t.scopes = this.scopes;
        else if (t instanceof Ue.BaseExternalAccountClient) t.scopes = this.getAnyScopes();
        return await this.#t(t);
      }
      if (t = await this._tryGetApplicationCredentialsFromWellKnownFile(e), t) {
        if (t instanceof Ce.JWT) t.scopes = this.scopes;
        else if (t instanceof Ue.BaseExternalAccountClient) t.scopes = this.getAnyScopes();
        return await this.#t(t);
      }
      if (await this._checkIsGCE()) return e.scopes = this.getAnyScopes(), await this.#t(new Qa.Compute(e));
      throw Error(sc.GoogleAuthExceptionMessages.NO_ADC_FOUND);
    }
    async #t(e, t = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
      let r = await this.getProjectIdOptional();
      if (t) e.quotaProjectId = t;
      return this.cachedCredential = e, { credential: e, projectId: r };
    }
    async _checkIsGCE() {
      if (this.checkIsGCE === void 0) this.checkIsGCE = Ie.getGCPResidency() || await Ie.isAvailable();
      return this.checkIsGCE;
    }
    async _tryGetApplicationCredentialsFromEnvironmentVariable(e) {
      let t = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
      if (!t || t.length === 0) return null;
      try {
        return this._getApplicationCredentialsFromFilePath(t, e);
      } catch (r) {
        if (r instanceof Error) r.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${r.message}`;
        throw r;
      }
    }
    async _tryGetApplicationCredentialsFromWellKnownFile(e) {
      let t = null;
      if (this._isWindows()) t = process.env.APPDATA;
      else {
        let s = process.env.HOME || (() => {
          try {
            return mr.homedir();
          } catch {
            return "";
          }
        })();
        if (s) t = _t.join(s, ".config");
      }
      if (t) {
        if (t = _t.join(t, "gcloud", "application_default_credentials.json"), !Pe.existsSync(t)) t = null;
      }
      if (!t) return null;
      return await this._getApplicationCredentialsFromFilePath(t, e);
    }
    async _getApplicationCredentialsFromFilePath(e, t = {}) {
      if (!e || e.length === 0) throw Error("The file path is invalid.");
      try {
        if (e = Pe.realpathSync(e), !Pe.lstatSync(e).isFile()) throw Error();
      } catch (s) {
        if (s instanceof Error) s.message = `The file at ${e} does not exist, or it is not a file. ${s.message}`;
        throw s;
      }
      let r = Pe.createReadStream(e);
      return this.fromStream(r, t);
    }
    fromImpersonatedJSON(e) {
      if (!e) throw Error("Must pass in a JSON object containing an  impersonated refresh token");
      if (e.type !== ve.IMPERSONATED_ACCOUNT_TYPE) throw Error(`The incoming JSON object does not have the "${ve.IMPERSONATED_ACCOUNT_TYPE}" type`);
      if (!e.source_credentials) throw Error("The incoming JSON object does not contain a source_credentials field");
      if (!e.service_account_impersonation_url) throw Error("The incoming JSON object does not contain a service_account_impersonation_url field");
      let t = this.fromJSON(e.source_credentials, { transporterOptions: this.clientOptions.transporterOptions });
      if (e.service_account_impersonation_url?.length > 256) throw RangeError(`Target principal is too long: ${e.service_account_impersonation_url}`);
      let r = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(e.service_account_impersonation_url)?.groups?.target;
      if (!r) throw RangeError(`Cannot extract target principal from ${e.service_account_impersonation_url}`);
      let s = (this.scopes || e.scopes || this.defaultScopes) ?? [];
      return new ve.Impersonated({ ...e, transporterOptions: this.clientOptions.transporterOptions, sourceClient: t, targetPrincipal: r, targetScopes: Array.isArray(s) ? s : [s] });
    }
    fromJSON(e, t = {}) {
      let r, s = Ar.originalOrCamelOptions(t).get("universe_domain");
      if (e.type === Er.USER_REFRESH_ACCOUNT_TYPE) r = new Er.UserRefreshClient(t), r.fromJSON(e);
      else if (e.type === ve.IMPERSONATED_ACCOUNT_TYPE) r = this.fromImpersonatedJSON(e);
      else if (e.type === Ue.EXTERNAL_ACCOUNT_TYPE) r = tc.ExternalAccountClient.fromJSON({ ...e, ...t }), r.scopes = this.getAnyScopes();
      else if (e.type === wr.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) r = new wr.ExternalAccountAuthorizedUserClient({ ...e, ...t });
      else t.scopes = this.scopes, r = new Ce.JWT(t), this.setGapicJWTValues(r), r.fromJSON(e);
      if (s) r.universeDomain = s;
      return r;
    }
    _cacheClientFromJSON(e, t) {
      let r = this.fromJSON(e, t);
      return this.jsonContent = e, this.cachedCredential = r, r;
    }
    fromStream(e, t = {}, r) {
      let s = {};
      if (typeof t === "function") r = t;
      else s = t;
      if (r) this.fromStreamAsync(e, s).then((n) => r(null, n), r);
      else return this.fromStreamAsync(e, s);
    }
    fromStreamAsync(e, t) {
      return new Promise((r, s) => {
        if (!e) throw Error("Must pass in a stream containing the Google auth settings.");
        let n = [];
        e.setEncoding("utf8").on("error", s).on("data", (a) => n.push(a)).on("end", () => {
          try {
            try {
              let a = JSON.parse(n.join("")), h = this._cacheClientFromJSON(a, t);
              return r(h);
            } catch (a) {
              if (!this.keyFilename) throw a;
              let h = new Ce.JWT({ ...this.clientOptions, keyFile: this.keyFilename });
              return this.cachedCredential = h, this.setGapicJWTValues(h), r(h);
            }
          } catch (a) {
            return s(a);
          }
        });
      });
    }
    fromAPIKey(e, t = {}) {
      return new Ce.JWT({ ...t, apiKey: e });
    }
    _isWindows() {
      let e = mr.platform();
      if (e && e.length >= 3) {
        if (e.substring(0, 3).toLowerCase() === "win") return true;
      }
      return false;
    }
    async getDefaultServiceProjectId() {
      return new Promise((e) => {
        Ya.exec("gcloud config config-helper --format json", (t, r) => {
          if (!t && r) try {
            let s = JSON.parse(r).configuration.properties.core.project;
            e(s);
            return;
          } catch (s) {
          }
          e(null);
        });
      });
    }
    getProductionProjectId() {
      return process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project;
    }
    async getFileProjectId() {
      if (this.cachedCredential) return this.cachedCredential.projectId;
      if (this.keyFilename) {
        let t = await this.getClient();
        if (t && t.projectId) return t.projectId;
      }
      let e = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
      if (e) return e.projectId;
      else return null;
    }
    async getExternalAccountClientProjectId() {
      if (!this.jsonContent || this.jsonContent.type !== Ue.EXTERNAL_ACCOUNT_TYPE) return null;
      return await (await this.getClient()).getProjectId();
    }
    async getGCEProjectId() {
      try {
        return await Ie.project("project-id");
      } catch (e) {
        return null;
      }
    }
    getCredentials(e) {
      if (e) this.getCredentialsAsync().then((t) => e(null, t), e);
      else return this.getCredentialsAsync();
    }
    async getCredentialsAsync() {
      let e = await this.getClient();
      if (e instanceof ve.Impersonated) return { client_email: e.getTargetPrincipal() };
      if (e instanceof Ue.BaseExternalAccountClient) {
        let t = e.getServiceAccountEmail();
        if (t) return { client_email: t, universe_domain: e.universeDomain };
      }
      if (this.jsonContent) return { client_email: this.jsonContent.client_email, private_key: this.jsonContent.private_key, universe_domain: this.jsonContent.universe_domain };
      if (await this._checkIsGCE()) {
        let [t, r] = await Promise.all([Ie.instance("service-accounts/default/email"), this.getUniverseDomain()]);
        return { client_email: t, universe_domain: r };
      }
      throw Error(sc.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
    }
    async getClient() {
      if (this.cachedCredential) return this.cachedCredential;
      this.#e = this.#e || this.#r();
      try {
        return await this.#e;
      } finally {
        this.#e = null;
      }
    }
    async #r() {
      if (this.jsonContent) return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
      else if (this.keyFilename) {
        let e = _t.resolve(this.keyFilename), t = Pe.createReadStream(e);
        return await this.fromStreamAsync(t, this.clientOptions);
      } else if (this.apiKey) {
        let e = await this.fromAPIKey(this.apiKey, this.clientOptions);
        e.scopes = this.scopes;
        let { credential: t } = await this.#t(e);
        return t;
      } else {
        let { credential: e } = await this.getApplicationDefaultAsync(this.clientOptions);
        return e;
      }
    }
    async getIdTokenClient(e) {
      let t = await this.getClient();
      if (!("fetchIdToken" in t)) throw Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
      return new Za.IdTokenClient({ targetAudience: e, idTokenProvider: t });
    }
    async getAccessToken() {
      return (await (await this.getClient()).getAccessToken()).token;
    }
    async getRequestHeaders(e) {
      return (await this.getClient()).getRequestHeaders(e);
    }
    async authorizeRequest(e = {}) {
      let t = e.url, s = await (await this.getClient()).getRequestHeaders(t);
      return e.headers = Xa.Gaxios.mergeHeaders(e.headers, s), e;
    }
    async fetch(...e) {
      return (await this.getClient()).fetch(...e);
    }
    async request(e) {
      return (await this.getClient()).request(e);
    }
    getEnv() {
      return ec.getEnv();
    }
    async sign(e, t) {
      let r = await this.getClient(), s = await this.getUniverseDomain();
      if (t = t || `https://iamcredentials.${s}/v1/projects/-/serviceAccounts/`, r instanceof ve.Impersonated) return (await r.sign(e)).signedBlob;
      let n = za.createCrypto();
      if (r instanceof Ce.JWT && r.key) return await n.sign(r.key, e);
      let a = await this.getCredentials();
      if (!a.client_email) throw Error("Cannot sign data without `client_email`.");
      return this.signBlob(n, a.client_email, e, t);
    }
    async signBlob(e, t, r, s) {
      let n = new URL(s + `${t}:signBlob`);
      return (await this.request({ method: "POST", url: n.href, data: { payload: e.encodeBase64StringUtf8(r) }, retry: true, retryConfig: { httpMethodsToRetry: ["POST"] } })).data.signedBlob;
    }
  }
  sc.GoogleAuth = rc;
});
var uc = (0, import_chunk_w1d7ygsk.V)(function(ac) {
  Object.defineProperty(ac, "__esModule", { value: true });
  ac.IAMAuth = void 0;
  class oc {
    selector;
    token;
    constructor(e, t) {
      this.selector = e, this.token = t, this.selector = e, this.token = t;
    }
    getRequestHeaders() {
      return { "x-goog-iam-authority-selector": this.selector, "x-goog-iam-authorization-token": this.token };
    }
  }
  ac.IAMAuth = oc;
});
var yc = (0, import_chunk_w1d7ygsk.V)(function(pc) {
  Object.defineProperty(pc, "__esModule", { value: true });
  pc.DownscopedClient = pc.EXPIRATION_TIME_OFFSET = pc.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
  var lc = re(), dc = (0, import_chunk_w1d7ygsk.ft)("stream"), Et = fe(), hc = rr(), od = "urn:ietf:params:oauth:grant-type:token-exchange", ad = "urn:ietf:params:oauth:token-type:access_token", cd = "urn:ietf:params:oauth:token-type:access_token";
  pc.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
  pc.EXPIRATION_TIME_OFFSET = 3e5;
  class fc extends Et.AuthClient {
    authClient;
    credentialAccessBoundary;
    cachedDownscopedAccessToken;
    stsCredential;
    constructor(e, t = { accessBoundary: { accessBoundaryRules: [] } }) {
      super(e instanceof Et.AuthClient ? {} : e);
      if (e instanceof Et.AuthClient) this.authClient = e, this.credentialAccessBoundary = t;
      else this.authClient = e.authClient, this.credentialAccessBoundary = e.credentialAccessBoundary;
      if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0) throw Error("At least one access boundary rule needs to be defined.");
      else if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length > pc.MAX_ACCESS_BOUNDARY_RULES_COUNT) throw Error(`The provided access boundary has more than ${pc.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
      for (let r of this.credentialAccessBoundary.accessBoundary.accessBoundaryRules) if (r.availablePermissions.length === 0) throw Error("At least one permission should be defined in access boundary rules.");
      this.stsCredential = new hc.StsCredentials({ tokenExchangeEndpoint: `https://sts.${this.universeDomain}/v1/token` }), this.cachedDownscopedAccessToken = null;
    }
    setCredentials(e) {
      if (!e.expiry_date) throw Error("The access token expiry_date field is missing in the provided credentials.");
      super.setCredentials(e), this.cachedDownscopedAccessToken = e;
    }
    async getAccessToken() {
      if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) await this.refreshAccessTokenAsync();
      return { token: this.cachedDownscopedAccessToken.access_token, expirationTime: this.cachedDownscopedAccessToken.expiry_date, res: this.cachedDownscopedAccessToken.res };
    }
    async getRequestHeaders() {
      let e = await this.getAccessToken(), t = new Headers({ authorization: `Bearer ${e.token}` });
      return this.addSharedMetadataHeaders(t);
    }
    request(e, t) {
      if (t) this.requestAsync(e).then((r) => t(null, r), (r) => t(r, r.response));
      else return this.requestAsync(e);
    }
    async requestAsync(e, t = false) {
      let r;
      try {
        let s = await this.getRequestHeaders();
        e.headers = lc.Gaxios.mergeHeaders(e.headers), this.addUserProjectAndAuthHeaders(e.headers, s), r = await this.transporter.request(e);
      } catch (s) {
        let n = s.response;
        if (n) {
          let a = n.status, h = n.config.data instanceof dc.Readable;
          if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(e, true);
        }
        throw s;
      }
      return r;
    }
    async refreshAccessTokenAsync() {
      let e = (await this.authClient.getAccessToken()).token, t = { grantType: od, requestedTokenType: ad, subjectToken: e, subjectTokenType: cd }, r = await this.stsCredential.exchangeToken(t, void 0, this.credentialAccessBoundary), s = this.authClient.credentials?.expiry_date || null, n = r.expires_in ? (/* @__PURE__ */ new Date()).getTime() + r.expires_in * 1e3 : s;
      return this.cachedDownscopedAccessToken = { access_token: r.access_token, expiry_date: n, res: r.res }, this.credentials = {}, Object.assign(this.credentials, this.cachedDownscopedAccessToken), delete this.credentials.res, this.emit("tokens", { refresh_token: null, expiry_date: this.cachedDownscopedAccessToken.expiry_date, access_token: this.cachedDownscopedAccessToken.access_token, token_type: "Bearer", id_token: null }), this.cachedDownscopedAccessToken;
    }
    isExpired(e) {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return e.expiry_date ? t >= e.expiry_date - this.eagerRefreshThresholdMillis : false;
    }
  }
  pc.DownscopedClient = fc;
});
var Ac = (0, import_chunk_w1d7ygsk.V)(function(Ec) {
  Object.defineProperty(Ec, "__esModule", { value: true });
  Ec.PassThroughClient = void 0;
  var _c = fe();
  class mc extends _c.AuthClient {
    async request(e) {
      return this.transporter.request(e);
    }
    async getAccessToken() {
      return {};
    }
    async getRequestHeaders() {
      return new Headers();
    }
  }
  Ec.PassThroughClient = mc;
});
var nvo = (0, import_chunk_w1d7ygsk.V)(function(v) {
  var ld = v && v.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = { enumerable: true, get: function() {
      return t[r];
    } };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), dd = v && v.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) ld(t, e, r);
  };
  Object.defineProperty(v, "__esModule", { value: true });
  v.GoogleAuth = v.auth = v.PassThroughClient = v.ExternalAccountAuthorizedUserClient = v.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = v.ExecutableError = v.PluggableAuthClient = v.DownscopedClient = v.BaseExternalAccountClient = v.ExternalAccountClient = v.IdentityPoolClient = v.AwsRequestSigner = v.AwsClient = v.UserRefreshClient = v.LoginTicket = v.ClientAuthentication = v.OAuth2Client = v.CodeChallengeMethod = v.Impersonated = v.JWT = v.JWTAccess = v.IdTokenClient = v.IAMAuth = v.GCPEnv = v.Compute = v.DEFAULT_UNIVERSE = v.AuthClient = v.gaxios = v.gcpMetadata = void 0;
  var Tr = ic();
  Object.defineProperty(v, "GoogleAuth", { enumerable: true, get: function() {
    return Tr.GoogleAuth;
  } });
  v.gcpMetadata = kt();
  v.gaxios = re();
  var Tc = fe();
  Object.defineProperty(v, "AuthClient", { enumerable: true, get: function() {
    return Tc.AuthClient;
  } });
  Object.defineProperty(v, "DEFAULT_UNIVERSE", { enumerable: true, get: function() {
    return Tc.DEFAULT_UNIVERSE;
  } });
  var hd = Yr();
  Object.defineProperty(v, "Compute", { enumerable: true, get: function() {
    return hd.Compute;
  } });
  var fd = zr();
  Object.defineProperty(v, "GCPEnv", { enumerable: true, get: function() {
    return fd.GCPEnv;
  } });
  var pd = uc();
  Object.defineProperty(v, "IAMAuth", { enumerable: true, get: function() {
    return pd.IAMAuth;
  } });
  var gd = Xr();
  Object.defineProperty(v, "IdTokenClient", { enumerable: true, get: function() {
    return gd.IdTokenClient;
  } });
  var yd = ts();
  Object.defineProperty(v, "JWTAccess", { enumerable: true, get: function() {
    return yd.JWTAccess;
  } });
  var _d = ss();
  Object.defineProperty(v, "JWT", { enumerable: true, get: function() {
    return _d.JWT;
  } });
  var md = is();
  Object.defineProperty(v, "Impersonated", { enumerable: true, get: function() {
    return md.Impersonated;
  } });
  var Ns = tt();
  Object.defineProperty(v, "CodeChallengeMethod", { enumerable: true, get: function() {
    return Ns.CodeChallengeMethod;
  } });
  Object.defineProperty(v, "OAuth2Client", { enumerable: true, get: function() {
    return Ns.OAuth2Client;
  } });
  Object.defineProperty(v, "ClientAuthentication", { enumerable: true, get: function() {
    return Ns.ClientAuthentication;
  } });
  var Ed = Vr();
  Object.defineProperty(v, "LoginTicket", { enumerable: true, get: function() {
    return Ed.LoginTicket;
  } });
  var wd = ns();
  Object.defineProperty(v, "UserRefreshClient", { enumerable: true, get: function() {
    return wd.UserRefreshClient;
  } });
  var Ad = fs();
  Object.defineProperty(v, "AwsClient", { enumerable: true, get: function() {
    return Ad.AwsClient;
  } });
  var Td = hs();
  Object.defineProperty(v, "AwsRequestSigner", { enumerable: true, get: function() {
    return Td.AwsRequestSigner;
  } });
  var Cd = ds();
  Object.defineProperty(v, "IdentityPoolClient", { enumerable: true, get: function() {
    return Cd.IdentityPoolClient;
  } });
  var vd = Ss();
  Object.defineProperty(v, "ExternalAccountClient", { enumerable: true, get: function() {
    return vd.ExternalAccountClient;
  } });
  var kd = Je();
  Object.defineProperty(v, "BaseExternalAccountClient", { enumerable: true, get: function() {
    return kd.BaseExternalAccountClient;
  } });
  var Od = yc();
  Object.defineProperty(v, "DownscopedClient", { enumerable: true, get: function() {
    return Od.DownscopedClient;
  } });
  var Cc = Os();
  Object.defineProperty(v, "PluggableAuthClient", { enumerable: true, get: function() {
    return Cc.PluggableAuthClient;
  } });
  Object.defineProperty(v, "ExecutableError", { enumerable: true, get: function() {
    return Cc.ExecutableError;
  } });
  var vc = xs();
  Object.defineProperty(v, "EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE", { enumerable: true, get: function() {
    return vc.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE;
  } });
  Object.defineProperty(v, "ExternalAccountAuthorizedUserClient", { enumerable: true, get: function() {
    return vc.ExternalAccountAuthorizedUserClient;
  } });
  var Sd = Ac();
  Object.defineProperty(v, "PassThroughClient", { enumerable: true, get: function() {
    return Sd.PassThroughClient;
  } });
  dd(Zr(), v);
  var Rd = new Tr.GoogleAuth();
  v.auth = Rd;
});
