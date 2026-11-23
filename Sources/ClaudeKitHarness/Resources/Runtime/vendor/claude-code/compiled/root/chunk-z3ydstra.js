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
var chunk_z3ydstra_exports = {};
__export(chunk_z3ydstra_exports, {
  O6e: () => O6e,
  SL: () => SL,
  Tra: () => Tra,
  k4n: () => k4n,
  xB: () => xB
});
module.exports = __toCommonJS(chunk_z3ydstra_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Tra = (0, import_chunk_w1d7ygsk.V)(function(G) {
  var F = (e) => typeof ArrayBuffer === "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
  G.isArrayBuffer = F;
});
var k4n = (0, import_chunk_w1d7ygsk.V)(function(X) {
  var Y = Tra(), g = (0, import_chunk_w1d7ygsk.ft)("buffer"), z = (e, r = 0, t = e.byteLength - r) => {
    if (!Y.isArrayBuffer(e)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);
    return g.Buffer.from(e, r, t);
  }, Q = (e, r) => {
    if (typeof e !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
    return r ? g.Buffer.from(e, r) : g.Buffer.from(e);
  };
  X.fromArrayBuffer = z;
  X.fromString = Q;
});
var U = (0, import_chunk_w1d7ygsk.V)(function(R) {
  Object.defineProperty(R, "__esModule", { value: true });
  R.fromBase64 = void 0;
  var P = k4n(), K = /^[A-Za-z0-9+/]*={0,2}$/, W = (e) => {
    if (e.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
    if (!K.exec(e)) throw TypeError("Invalid base64 string.");
    let r = P.fromString(e, "base64");
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  };
  R.fromBase64 = W;
});
var SL = (0, import_chunk_w1d7ygsk.V)(function(te) {
  var x = k4n(), O = (e) => {
    let r = x.fromString(e, "utf8");
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, ee = (e) => {
    if (typeof e === "string") return O(e);
    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(e);
  }, re = (e) => {
    if (typeof e === "string") return e;
    if (typeof e !== "object" || typeof e.byteOffset !== "number" || typeof e.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    return x.fromArrayBuffer(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
  };
  te.fromUtf8 = O;
  te.toUint8Array = ee;
  te.toUtf8 = re;
});
var j = (0, import_chunk_w1d7ygsk.V)(function(_) {
  Object.defineProperty(_, "__esModule", { value: true });
  _.toBase64 = void 0;
  var q = k4n(), L = SL(), se = (e) => {
    let r;
    if (typeof e === "string") r = L.fromUtf8(e);
    else r = e;
    if (typeof r !== "object" || typeof r.byteOffset !== "number" || typeof r.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    return q.fromArrayBuffer(r.buffer, r.byteOffset, r.byteLength).toString("base64");
  };
  _.toBase64 = se;
});
var xB = (0, import_chunk_w1d7ygsk.V)(function(h) {
  var H = U(), C = j();
  Object.keys(H).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(h, e)) Object.defineProperty(h, e, { enumerable: true, get: function() {
      return H[e];
    } });
  });
  Object.keys(C).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(h, e)) Object.defineProperty(h, e, { enumerable: true, get: function() {
      return C[e];
    } });
  });
});
var O6e = (0, import_chunk_w1d7ygsk.V)(function(he) {
  var k = (0, import_chunk_3jjr3wje.yb)(), ie = (0, import_chunk_3jjr3wje.PIo)(), ae = xB();
  function I(e, r) {
    return new Request(e, r);
  }
  function ue(e = 0) {
    return new Promise((r, t) => {
      if (e) setTimeout(() => {
        let o = Error(`Request did not complete within ${e} ms`);
        o.name = "TimeoutError", t(o);
      }, e);
    });
  }
  var p = { supported: void 0 };
  class w {
    config;
    configProvider;
    static create(e) {
      if (typeof e?.handle === "function") return e;
      return new w(e);
    }
    constructor(e) {
      if (typeof e === "function") this.configProvider = e().then((r) => r || {});
      else this.config = e ?? {}, this.configProvider = Promise.resolve(this.config);
      if (p.supported === void 0) p.supported = Boolean(typeof Request < "u" && "keepalive" in I("https://[::1]"));
    }
    destroy() {
    }
    async handle(e, { abortSignal: r, requestTimeout: t } = {}) {
      if (!this.config) this.config = await this.configProvider;
      let o = t ?? this.config.requestTimeout, f = this.config.keepAlive === true, i = this.config.credentials;
      if (r?.aborted) {
        let n = Error("Request aborted");
        return n.name = "AbortError", Promise.reject(n);
      }
      let s = e.path, a = ie.buildQueryString(e.query || {});
      if (a) s += `?${a}`;
      if (e.fragment) s += `#${e.fragment}`;
      let c = "";
      if (e.username != null || e.password != null) {
        let n = e.username ?? "", l = e.password ?? "";
        c = `${n}:${l}@`;
      }
      let { port: B, method: m } = e, D = `${e.protocol}//${c}${e.hostname}${B ? `:${B}` : ""}${s}`, A = m === "GET" || m === "HEAD" ? void 0 : e.body, y = { body: A, headers: new Headers(e.headers), method: m, credentials: i };
      if (this.config?.cache) y.cache = this.config.cache;
      if (A) y.duplex = "half";
      if (typeof AbortController < "u") y.signal = r;
      if (p.supported) y.keepalive = f;
      if (typeof this.config.requestInit === "function") Object.assign(y, this.config.requestInit(e));
      let E = () => {
      }, M = I(D, y), v = [fetch(M).then((n) => {
        let l = n.headers, u = {};
        for (let b of l.entries()) u[b[0]] = b[1];
        if (n.body == null) return n.blob().then((b) => ({ response: new k.HttpResponse({ headers: u, reason: n.statusText, statusCode: n.status, body: b }) }));
        return { response: new k.HttpResponse({ headers: u, reason: n.statusText, statusCode: n.status, body: n.body }) };
      }), ue(o)];
      if (r) v.push(new Promise((n, l) => {
        let u = () => {
          let d = Error("Request aborted");
          d.name = "AbortError", l(d);
        };
        if (typeof r.addEventListener === "function") {
          let d = r;
          d.addEventListener("abort", u, { once: true }), E = () => d.removeEventListener("abort", u);
        } else r.onabort = u;
      }));
      return Promise.race(v).finally(E);
    }
    updateHttpClientConfig(e, r) {
      this.config = void 0, this.configProvider = this.configProvider.then((t) => (t[e] = r, t));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  }
  var ce = async (e) => {
    if (typeof Blob === "function" && e instanceof Blob || e.constructor?.name === "Blob") {
      if (Blob.prototype.arrayBuffer !== void 0) return new Uint8Array(await e.arrayBuffer());
      return ye(e);
    }
    return de(e);
  };
  async function ye(e) {
    let r = await le(e), t = ae.fromBase64(r);
    return new Uint8Array(t);
  }
  async function de(e) {
    let r = [], t = e.getReader(), o = false, f = 0;
    while (!o) {
      let { done: a, value: c } = await t.read();
      if (c) r.push(c), f += c.length;
      o = a;
    }
    let i = new Uint8Array(f), s = 0;
    for (let a of r) i.set(a, s), s += a.length;
    return i;
  }
  function le(e) {
    return new Promise((r, t) => {
      let o = new FileReader();
      o.onloadend = () => {
        if (o.readyState !== 2) return t(Error("Reader aborted too early"));
        let f = o.result ?? "", i = f.indexOf(","), s = i > -1 ? i + 1 : f.length;
        r(f.substring(s));
      }, o.onabort = () => t(Error("Read aborted")), o.onerror = () => t(o.error), o.readAsDataURL(e);
    });
  }
  he.FetchHttpHandler = w;
  he.keepAliveSupport = p;
  he.streamCollector = ce;
});
