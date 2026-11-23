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
var chunk_6v7p7bta_exports = {};
__export(chunk_6v7p7bta_exports, {
  Run: () => Run,
  Tj: () => Tj,
  Ujn: () => Ujn,
  _zi: () => _zi,
  gzi: () => gzi
});
module.exports = __toCommonJS(chunk_6v7p7bta_exports);
var import_chunk_s2z83xnv = require("/$bunfs/root/chunk-s2z83xnv.js");
var import_chunk_fwgg708q = require("/$bunfs/root/chunk-fwgg708q.js");
var import_chunk_jybgpkft = require("/$bunfs/root/chunk-jybgpkft.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var me = (0, import_chunk_w1d7ygsk.V)(function(je) {
  Object.defineProperty(je, "__esModule", { value: true });
  je.ChecksumStream = void 0;
  var Ae = (0, import_chunk_z3ydstra.xB)(), De = (0, import_chunk_w1d7ygsk.ft)("stream");
  class qe extends De.Duplex {
    expectedChecksum;
    checksumSourceLocation;
    checksum;
    source;
    base64Encoder;
    constructor({ expectedChecksum: e, checksum: t, source: r, checksumSourceLocation: s, base64Encoder: n }) {
      super();
      if (typeof r.pipe === "function") this.source = r;
      else throw Error(`@smithy/util-stream: unsupported source type ${r?.constructor?.name ?? r} in ChecksumStream.`);
      this.base64Encoder = n ?? Ae.toBase64, this.expectedChecksum = e, this.checksum = t, this.checksumSourceLocation = s, this.source.pipe(this);
    }
    _read(e) {
    }
    _write(e, t, r) {
      try {
        this.checksum.update(e), this.push(e);
      } catch (s) {
        return r(s);
      }
      return r();
    }
    async _final(e) {
      try {
        let t = await this.checksum.digest(), r = this.base64Encoder(t);
        if (this.expectedChecksum !== r) return e(Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${r}" in response header "${this.checksumSourceLocation}".`));
      } catch (t) {
        return e(t);
      }
      return this.push(null), e();
    }
  }
  je.ChecksumStream = qe;
});
var R = (0, import_chunk_w1d7ygsk.V)(function(Le) {
  Object.defineProperty(Le, "__esModule", { value: true });
  Le.isBlob = Le.isReadableStream = void 0;
  var Pr = (e) => typeof ReadableStream === "function" && (e?.constructor?.name === ReadableStream.name || e instanceof ReadableStream);
  Le.isReadableStream = Pr;
  var Nr = (e) => typeof Blob === "function" && (e?.constructor?.name === Blob.name || e instanceof Blob);
  Le.isBlob = Nr;
});
var Je = (0, import_chunk_w1d7ygsk.V)(function(He) {
  Object.defineProperty(He, "__esModule", { value: true });
  He.ChecksumStream = void 0;
  var Ar = typeof ReadableStream === "function" ? ReadableStream : function() {
  };
  class Fe extends Ar {
  }
  He.ChecksumStream = Fe;
});
var Ze = (0, import_chunk_w1d7ygsk.V)(function(Ge) {
  Object.defineProperty(Ge, "__esModule", { value: true });
  Ge.createChecksumStream = void 0;
  var We = (0, import_chunk_z3ydstra.xB)(), Ve = R(), Qe = Je(), Dr = ({ expectedChecksum: e, checksum: t, source: r, checksumSourceLocation: s, base64Encoder: n }) => {
    if (!Ve.isReadableStream(r)) throw Error(`@smithy/util-stream: unsupported source type ${r?.constructor?.name ?? r} in ChecksumStream.`);
    let i = n ?? We.toBase64;
    if (typeof TransformStream !== "function") throw Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
    let a = new TransformStream({ start() {
    }, async transform(c, u) {
      t.update(c), u.enqueue(c);
    }, async flush(c) {
      let u = await t.digest(), h = i(u);
      if (e !== h) {
        let f = Error(`Checksum mismatch: expected "${e}" but received "${h}" in response header "${s}".`);
        c.error(f);
      } else c.terminate();
    } });
    r.pipeThrough(a);
    let o = a.readable;
    return Object.setPrototypeOf(o, Qe.ChecksumStream.prototype), o;
  };
  Ge.createChecksumStream = Dr;
});
var rt = (0, import_chunk_w1d7ygsk.V)(function(tt) {
  Object.defineProperty(tt, "__esModule", { value: true });
  tt.createChecksumStream = qr;
  var Ke = R(), Xe = me(), et = Ze();
  function qr(e) {
    if (typeof ReadableStream === "function" && Ke.isReadableStream(e.source)) return et.createChecksumStream(e);
    return new Xe.ChecksumStream(e);
  }
});
var le = (0, import_chunk_w1d7ygsk.V)(function(nt) {
  Object.defineProperty(nt, "__esModule", { value: true });
  nt.ByteArrayCollector = void 0;
  class st {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(e) {
      this.allocByteArray = e;
    }
    push(e) {
      this.byteArrays.push(e), this.byteLength += e.byteLength;
    }
    flush() {
      if (this.byteArrays.length === 1) {
        let r = this.byteArrays[0];
        return this.reset(), r;
      }
      let e = this.allocByteArray(this.byteLength), t = 0;
      for (let r = 0; r < this.byteArrays.length; ++r) {
        let s = this.byteArrays[r];
        e.set(s, t), t += s.byteLength;
      }
      return this.reset(), e;
    }
    reset() {
      this.byteArrays = [], this.byteLength = 0;
    }
  }
  nt.ByteArrayCollector = st;
});
var mt = (0, import_chunk_w1d7ygsk.V)(function(ht) {
  Object.defineProperty(ht, "__esModule", { value: true });
  ht.createBufferedReadable = void 0;
  ht.createBufferedReadableStream = at;
  ht.merge = ct;
  ht.flush = Z;
  ht.sizeOf = P;
  ht.modeOf = ut;
  var ot = le();
  function at(e, t, r) {
    let s = e.getReader(), n = false, i = 0, a = ["", new ot.ByteArrayCollector((u) => new Uint8Array(u))], o = -1, c = async (u) => {
      let { value: h, done: f } = await s.read(), d = h;
      if (f) {
        if (o !== -1) {
          let l = Z(a, o);
          if (P(l) > 0) u.enqueue(l);
        }
        u.close();
      } else {
        let l = ut(d, false);
        if (o !== l) {
          if (o >= 0) u.enqueue(Z(a, o));
          o = l;
        }
        if (o === -1) {
          u.enqueue(d);
          return;
        }
        let m = P(d);
        i += m;
        let p = P(a[o]);
        if (m >= t && p === 0) u.enqueue(d);
        else {
          let S = ct(a, o, d);
          if (!n && i > t * 2) n = true, r?.warn(`@smithy/util-stream - stream chunk size ${m} is below threshold of ${t}, automatically buffering.`);
          if (S >= t) u.enqueue(Z(a, o));
          else await c(u);
        }
      }
    };
    return new ReadableStream({ pull: c });
  }
  ht.createBufferedReadable = at;
  function ct(e, t, r) {
    switch (t) {
      case 0:
        return e[0] += r, P(e[0]);
      case 1:
      case 2:
        return e[t].push(r), P(e[t]);
    }
  }
  function Z(e, t) {
    switch (t) {
      case 0:
        let r = e[0];
        return e[0] = "", r;
      case 1:
      case 2:
        return e[t].flush();
    }
    throw Error(`@smithy/util-stream - invalid index ${t} given to flush()`);
  }
  function P(e) {
    return e?.byteLength ?? e?.length ?? 0;
  }
  function ut(e, t = true) {
    if (t && typeof Buffer < "u" && e instanceof Buffer) return 2;
    if (e instanceof Uint8Array) return 1;
    if (typeof e === "string") return 0;
    return -1;
  }
});
var bt = (0, import_chunk_w1d7ygsk.V)(function(yt) {
  Object.defineProperty(yt, "__esModule", { value: true });
  yt.createBufferedReadable = vr;
  var lt = (0, import_chunk_w1d7ygsk.ft)("stream"), K = le(), y = mt(), pt = R();
  function vr(e, t, r) {
    if (pt.isReadableStream(e)) return y.createBufferedReadableStream(e, t, r);
    let s = new lt.Readable({ read() {
    } }), n = false, i = 0, a = ["", new K.ByteArrayCollector((c) => new Uint8Array(c)), new K.ByteArrayCollector((c) => Buffer.from(new Uint8Array(c)))], o = -1;
    return e.on("data", (c) => {
      let u = y.modeOf(c, true);
      if (o !== u) {
        if (o >= 0) s.push(y.flush(a, o));
        o = u;
      }
      if (o === -1) {
        s.push(c);
        return;
      }
      let h = y.sizeOf(c);
      i += h;
      let f = y.sizeOf(a[o]);
      if (h >= t && f === 0) s.push(c);
      else {
        let d = y.merge(a, o, c);
        if (!n && i > t * 2) n = true, r?.warn(`@smithy/util-stream - stream chunk size ${h} is below threshold of ${t}, automatically buffering.`);
        if (d >= t) s.push(y.flush(a, o));
      }
    }), e.on("end", () => {
      if (o !== -1) {
        let c = y.flush(a, o);
        if (y.sizeOf(c) > 0) s.push(c);
      }
      s.push(null);
    }), s;
  }
});
var xt = (0, import_chunk_w1d7ygsk.V)(function(St) {
  Object.defineProperty(St, "__esModule", { value: true });
  St.getAwsChunkedEncodingStream = void 0;
  var gt = (0, import_chunk_w1d7ygsk.ft)("stream"), Wr = (e, t) => {
    let { base64Encoder: r, bodyLengthChecker: s, checksumAlgorithmFn: n, checksumLocationName: i, streamHasher: a } = t, o = r !== void 0 && n !== void 0 && i !== void 0 && a !== void 0, c = o ? a(n, e) : void 0, u = new gt.Readable({ read: () => {
    } });
    return e.on("data", (h) => {
      let f = s(h) || 0;
      u.push(`${f.toString(16)}\r
`), u.push(h), u.push(`\r
`);
    }), e.on("end", async () => {
      if (u.push(`0\r
`), o) {
        let h = r(await c);
        u.push(`${i}:${h}\r
`), u.push(`\r
`);
      }
      u.push(null);
    }), u;
  };
  St.getAwsChunkedEncodingStream = Wr;
});
var Et = (0, import_chunk_w1d7ygsk.V)(function(Tt) {
  Object.defineProperty(Tt, "__esModule", { value: true });
  Tt.headStream = Vr;
  async function Vr(e, t) {
    let r = 0, s = [], n = e.getReader(), i = false;
    while (!i) {
      let { done: c, value: u } = await n.read();
      if (u) s.push(u), r += u?.byteLength ?? 0;
      if (r >= t) break;
      i = c;
    }
    n.releaseLock();
    let a = new Uint8Array(Math.min(t, r)), o = 0;
    for (let c of s) {
      if (c.byteLength > a.byteLength - o) {
        a.set(c.subarray(0, a.byteLength - o), o);
        break;
      } else a.set(c, o);
      o += c.length;
    }
    return a;
  }
});
var Bt = (0, import_chunk_w1d7ygsk.V)(function($t) {
  Object.defineProperty($t, "__esModule", { value: true });
  $t.headStream = void 0;
  var _t = (0, import_chunk_w1d7ygsk.ft)("stream"), Mt = Et(), Ct = R(), Gr = (e, t) => {
    if (Ct.isReadableStream(e)) return Mt.headStream(e, t);
    return new Promise((r, s) => {
      let n = new Ot();
      n.limit = t, e.pipe(n), e.on("error", (i) => {
        n.end(), s(i);
      }), n.on("error", s), n.on("finish", function() {
        let i = new Uint8Array(Buffer.concat(this.buffers));
        r(i);
      });
    });
  };
  $t.headStream = Gr;
  class Ot extends _t.Writable {
    buffers = [];
    limit = 1 / 0;
    bytesBuffered = 0;
    _write(e, t, r) {
      if (this.buffers.push(e), this.bytesBuffered += e.byteLength ?? 0, this.bytesBuffered >= this.limit) {
        let s = this.bytesBuffered - this.limit, n = this.buffers[this.buffers.length - 1];
        this.buffers[this.buffers.length - 1] = n.subarray(0, n.byteLength - s), this.emit("finish");
      }
      r();
    }
  }
});
var Ut = (0, import_chunk_w1d7ygsk.V)(function(qt) {
  Object.defineProperty(qt, "__esModule", { value: true });
  qt.sdkStreamMixin = void 0;
  var Nt = (0, import_chunk_z3ydstra.O6e)(), zt = (0, import_chunk_z3ydstra.xB)(), At = (0, import_chunk_s2z83xnv.Bjn)(), Dt = (0, import_chunk_z3ydstra.SL)(), X = R(), It = "The stream has already been transformed.", Yr = (e) => {
    if (!Pt(e) && !X.isReadableStream(e)) {
      let n = e?.__proto__?.constructor?.name || e;
      throw Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${n}`);
    }
    let t = false, r = async () => {
      if (t) throw Error(It);
      return t = true, await Nt.streamCollector(e);
    }, s = (n) => {
      if (typeof n.stream !== "function") throw Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
      return n.stream();
    };
    return Object.assign(e, { transformToByteArray: r, transformToString: async (n) => {
      let i = await r();
      if (n === "base64") return zt.toBase64(i);
      else if (n === "hex") return At.toHex(i);
      else if (n === void 0 || n === "utf8" || n === "utf-8") return Dt.toUtf8(i);
      else if (typeof TextDecoder === "function") return new TextDecoder(n).decode(i);
      else throw Error("TextDecoder is not available, please make sure polyfill is provided.");
    }, transformToWebStream: () => {
      if (t) throw Error(It);
      if (t = true, Pt(e)) return s(e);
      else if (X.isReadableStream(e)) return e;
      else throw Error(`Cannot transform payload to web stream, got ${e}`);
    } });
  };
  qt.sdkStreamMixin = Yr;
  var Pt = (e) => typeof Blob === "function" && e instanceof Blob;
});
var Wt = (0, import_chunk_w1d7ygsk.V)(function(vt) {
  Object.defineProperty(vt, "__esModule", { value: true });
  vt.sdkStreamMixin = void 0;
  var kt = (0, import_chunk_3jjr3wje.SK)(), Ft = (0, import_chunk_z3ydstra.k4n)(), N = (0, import_chunk_w1d7ygsk.ft)("stream"), Ht = Ut(), Lt = "The stream has already been transformed.", Zr = (e) => {
    if (!(e instanceof N.Readable)) try {
      return Ht.sdkStreamMixin(e);
    } catch (s) {
      let n = e?.__proto__?.constructor?.name || e;
      throw Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${n}`);
    }
    let t = false, r = async () => {
      if (t) throw Error(Lt);
      return t = true, await kt.streamCollector(e);
    };
    return Object.assign(e, { transformToByteArray: r, transformToString: async (s) => {
      let n = await r();
      if (s === void 0 || Buffer.isEncoding(s)) return Ft.fromArrayBuffer(n.buffer, n.byteOffset, n.byteLength).toString(s);
      else return new TextDecoder(s).decode(n);
    }, transformToWebStream: () => {
      if (t) throw Error(Lt);
      if (e.readableFlowing !== null) throw Error("The stream has been consumed by other callbacks.");
      if (typeof N.Readable.toWeb !== "function") throw Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
      return t = true, N.Readable.toWeb(e);
    } });
  };
  vt.sdkStreamMixin = Zr;
});
var Qt = (0, import_chunk_w1d7ygsk.V)(function(Vt) {
  Object.defineProperty(Vt, "__esModule", { value: true });
  Vt.splitStream = Kr;
  async function Kr(e) {
    if (typeof e.stream === "function") e = e.stream();
    return e.tee();
  }
});
var Zt = (0, import_chunk_w1d7ygsk.V)(function(Yt) {
  Object.defineProperty(Yt, "__esModule", { value: true });
  Yt.splitStream = es;
  var ee = (0, import_chunk_w1d7ygsk.ft)("stream"), Gt = Qt(), te = R();
  async function es(e) {
    if (te.isReadableStream(e) || te.isBlob(e)) return Gt.splitStream(e);
    let t = new ee.PassThrough(), r = new ee.PassThrough();
    return e.pipe(t), e.pipe(r), [t, r];
  }
});
var gzi = (0, import_chunk_w1d7ygsk.V)(function(b) {
  var Kt = (0, import_chunk_z3ydstra.xB)(), Xt = (0, import_chunk_z3ydstra.SL)(), er = me(), tr = rt(), rr = bt(), sr = xt(), nr = Bt(), ir = Wt(), or = Zt(), ar = R();
  class j extends Uint8Array {
    static fromString(e, t = "utf-8") {
      if (typeof e === "string") {
        if (t === "base64") return j.mutate(Kt.fromBase64(e));
        return j.mutate(Xt.fromUtf8(e));
      }
      throw Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`);
    }
    static mutate(e) {
      return Object.setPrototypeOf(e, j.prototype), e;
    }
    transformToString(e = "utf-8") {
      if (e === "base64") return Kt.toBase64(this);
      return Xt.toUtf8(this);
    }
  }
  b.Uint8ArrayBlobAdapter = j;
  Object.keys(er).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) Object.defineProperty(b, e, { enumerable: true, get: function() {
      return er[e];
    } });
  });
  Object.keys(tr).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) Object.defineProperty(b, e, { enumerable: true, get: function() {
      return tr[e];
    } });
  });
  Object.keys(rr).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) Object.defineProperty(b, e, { enumerable: true, get: function() {
      return rr[e];
    } });
  });
  Object.keys(sr).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) Object.defineProperty(b, e, { enumerable: true, get: function() {
      return sr[e];
    } });
  });
  Object.keys(nr).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) Object.defineProperty(b, e, { enumerable: true, get: function() {
      return nr[e];
    } });
  });
  Object.keys(ir).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) Object.defineProperty(b, e, { enumerable: true, get: function() {
      return ir[e];
    } });
  });
  Object.keys(or).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) Object.defineProperty(b, e, { enumerable: true, get: function() {
      return or[e];
    } });
  });
  Object.keys(ar).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) Object.defineProperty(b, e, { enumerable: true, get: function() {
      return ar[e];
    } });
  });
});
var Tj = (0, import_chunk_w1d7ygsk.V)(function(ps) {
  var ss = (0, import_chunk_3jjr3wje.yb)(), cr = (0, import_chunk_jybgpkft.Aj)(), re = (e) => {
    if (typeof e === "function") return e();
    return e;
  }, be = (e, t, r, s, n) => ({ name: t, namespace: e, traits: r, input: s, output: n }), ns = (e) => (t, r) => async (s) => {
    let { response: n } = await t(s), { operationSchema: i } = cr.getSmithyContext(r), [, a, o, c, u, h] = i ?? [];
    try {
      let f = await e.protocol.deserializeResponse(be(a, o, c, u, h), { ...e, ...r }, n);
      return { response: n, output: f };
    } catch (f) {
      if (Object.defineProperty(f, "$response", { value: n, enumerable: false, writable: false, configurable: false }), !("$metadata" in f)) {
        try {
          f.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
        } catch (l) {
          if (!r.logger || r.logger?.constructor?.name === "NoOpLogger") console.warn("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
          else r.logger?.warn?.("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
        }
        if (typeof f.$responseBodyText < "u") {
          if (f.$response) f.$response.body = f.$responseBodyText;
        }
        try {
          if (ss.HttpResponse.isInstance(n)) {
            let { headers: l = {} } = n, m = Object.entries(l);
            f.$metadata = { httpStatusCode: n.statusCode, requestId: pe(/^x-[\w-]+-request-?id$/, m), extendedRequestId: pe(/^x-[\w-]+-id-2$/, m), cfId: pe(/^x-[\w-]+-cf-id$/, m) };
          }
        } catch (l) {
        }
      }
      throw f;
    }
  }, pe = (e, t) => (t.find(([r]) => r.match(e)) || [void 0, void 0])[1], is = (e) => (t, r) => async (s) => {
    let { operationSchema: n } = cr.getSmithyContext(r), [, i, a, o, c, u] = n ?? [], h = r.endpointV2?.url && e.urlParser ? async () => e.urlParser(r.endpointV2.url) : e.endpoint, f = await e.protocol.serializeRequest(be(i, a, o, c, u), s.input, { ...e, ...r, endpoint: h });
    return t({ ...s, request: f });
  }, ur = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"], override: true }, hr = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: true };
  function os(e) {
    return { applyToStack: (t) => {
      t.add(is(e), hr), t.add(ns(e), ur), e.protocol.setSerdeContext(e);
    } };
  }
  class w {
    name;
    namespace;
    traits;
    static assign(e, t) {
      return Object.assign(e, t);
    }
    static [Symbol.hasInstance](e) {
      let t = this.prototype.isPrototypeOf(e);
      if (!t && typeof e === "object" && e !== null) return e.symbol === this.symbol;
      return t;
    }
    getName() {
      return this.namespace + "#" + this.name;
    }
  }
  class se extends w {
    static symbol = Symbol.for("@smithy/lis");
    name;
    traits;
    valueSchema;
    symbol = se.symbol;
  }
  var as = (e, t, r, s) => w.assign(new se(), { name: t, namespace: e, traits: r, valueSchema: s });
  class ne extends w {
    static symbol = Symbol.for("@smithy/map");
    name;
    traits;
    keySchema;
    valueSchema;
    symbol = ne.symbol;
  }
  var cs = (e, t, r, s, n) => w.assign(new ne(), { name: t, namespace: e, traits: r, keySchema: s, valueSchema: n });
  class ie extends w {
    static symbol = Symbol.for("@smithy/ope");
    name;
    traits;
    input;
    output;
    symbol = ie.symbol;
  }
  var us = (e, t, r, s, n) => w.assign(new ie(), { name: t, namespace: e, traits: r, input: s, output: n });
  class k extends w {
    static symbol = Symbol.for("@smithy/str");
    name;
    traits;
    memberNames;
    memberList;
    symbol = k.symbol;
  }
  var hs = (e, t, r, s, n) => w.assign(new k(), { name: t, namespace: e, traits: r, memberNames: s, memberList: n });
  class oe extends k {
    static symbol = Symbol.for("@smithy/err");
    ctor;
    symbol = oe.symbol;
  }
  var fs = (e, t, r, s, n, i) => w.assign(new oe(), { name: t, namespace: e, traits: r, memberNames: s, memberList: n, ctor: null });
  function L(e) {
    if (typeof e === "object") return e;
    e = e | 0;
    let t = {}, r = 0;
    for (let s of ["httpLabel", "idempotent", "idempotencyToken", "sensitive", "httpPayload", "httpResponseCode", "httpQueryParams"]) if ((e >> r++ & 1) === 1) t[s] = 1;
    return t;
  }
  class M {
    ref;
    memberName;
    static symbol = Symbol.for("@smithy/nor");
    symbol = M.symbol;
    name;
    schema;
    _isMemberSchema;
    traits;
    memberTraits;
    normalizedTraits;
    constructor(e, t) {
      this.ref = e, this.memberName = t;
      let r = [], s = e, n = e;
      this._isMemberSchema = false;
      while (ye(s)) r.push(s[1]), s = s[0], n = re(s), this._isMemberSchema = true;
      if (r.length > 0) {
        this.memberTraits = {};
        for (let i = r.length - 1; i >= 0; --i) {
          let a = r[i];
          Object.assign(this.memberTraits, L(a));
        }
      } else this.memberTraits = 0;
      if (n instanceof M) {
        let i = this.memberTraits;
        Object.assign(this, n), this.memberTraits = Object.assign({}, i, n.getMemberTraits(), this.getMemberTraits()), this.normalizedTraits = void 0, this.memberName = t ?? n.memberName;
        return;
      }
      if (this.schema = re(n), fr(this.schema)) this.name = `${this.schema[1]}#${this.schema[2]}`, this.traits = this.schema[3];
      else this.name = this.memberName ?? String(n), this.traits = 0;
      if (this._isMemberSchema && !t) throw Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
    }
    static [Symbol.hasInstance](e) {
      let t = this.prototype.isPrototypeOf(e);
      if (!t && typeof e === "object" && e !== null) return e.symbol === this.symbol;
      return t;
    }
    static of(e) {
      let t = re(e);
      if (t instanceof M) return t;
      if (ye(t)) {
        let [r, s] = t;
        if (r instanceof M) return Object.assign(r.getMergedTraits(), L(s)), r;
        throw Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(e, null, 2)}.`);
      }
      return new M(t);
    }
    getSchema() {
      let e = this.schema;
      if (e[0] === 0) return e[4];
      return e;
    }
    getName(e = false) {
      let { name: t } = this;
      return !e && t && t.includes("#") ? t.split("#")[1] : t || void 0;
    }
    getMemberName() {
      return this.memberName;
    }
    isMemberSchema() {
      return this._isMemberSchema;
    }
    isListSchema() {
      let e = this.getSchema();
      return typeof e === "number" ? e >= 64 && e < 128 : e[0] === 1;
    }
    isMapSchema() {
      let e = this.getSchema();
      return typeof e === "number" ? e >= 128 && e <= 255 : e[0] === 2;
    }
    isStructSchema() {
      let e = this.getSchema();
      return e[0] === 3 || e[0] === -3;
    }
    isBlobSchema() {
      let e = this.getSchema();
      return e === 21 || e === 42;
    }
    isTimestampSchema() {
      let e = this.getSchema();
      return typeof e === "number" && e >= 4 && e <= 7;
    }
    isUnitSchema() {
      return this.getSchema() === "unit";
    }
    isDocumentSchema() {
      return this.getSchema() === 15;
    }
    isStringSchema() {
      return this.getSchema() === 0;
    }
    isBooleanSchema() {
      return this.getSchema() === 2;
    }
    isNumericSchema() {
      return this.getSchema() === 1;
    }
    isBigIntegerSchema() {
      return this.getSchema() === 17;
    }
    isBigDecimalSchema() {
      return this.getSchema() === 19;
    }
    isStreaming() {
      let { streaming: e } = this.getMergedTraits();
      return !!e || this.getSchema() === 42;
    }
    isIdempotencyToken() {
      let e = (n) => (n & 4) === 4 || !!n?.idempotencyToken, { normalizedTraits: t, traits: r, memberTraits: s } = this;
      return e(t) || e(r) || e(s);
    }
    getMergedTraits() {
      return this.normalizedTraits ?? (this.normalizedTraits = { ...this.getOwnTraits(), ...this.getMemberTraits() });
    }
    getMemberTraits() {
      return L(this.memberTraits);
    }
    getOwnTraits() {
      return L(this.traits);
    }
    getKeySchema() {
      let [e, t] = [this.isDocumentSchema(), this.isMapSchema()];
      if (!e && !t) throw Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
      let r = this.getSchema(), s = e ? 15 : r[4] ?? 0;
      return U([s, 0], "key");
    }
    getValueSchema() {
      let e = this.getSchema(), [t, r, s] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()], n = typeof e === "number" ? 63 & e : e && typeof e === "object" && (r || s) ? e[3 + e[0]] : t ? 15 : void 0;
      if (n != null) return U([n, 0], r ? "value" : "member");
      throw Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
    }
    getMemberSchema(e) {
      let t = this.getSchema();
      if (this.isStructSchema() && t[4].includes(e)) {
        let r = t[4].indexOf(e), s = t[5][r];
        return U(ye(s) ? s : [s, 0], e);
      }
      if (this.isDocumentSchema()) return U([15, 0], e);
      throw Error(`@smithy/core/schema - ${this.getName(true)} has no no member=${e}.`);
    }
    getMemberSchemas() {
      let e = {};
      try {
        for (let [t, r] of this.structIterator()) e[t] = r;
      } catch (t) {
      }
      return e;
    }
    getEventStreamMember() {
      if (this.isStructSchema()) {
        for (let [e, t] of this.structIterator()) if (t.isStreaming() && t.isStructSchema()) return e;
      }
      return "";
    }
    *structIterator() {
      if (this.isUnitSchema()) return;
      if (!this.isStructSchema()) throw Error("@smithy/core/schema - cannot iterate non-struct schema.");
      let e = this.getSchema();
      for (let t = 0; t < e[4].length; ++t) yield [e[4][t], U([e[5][t], 0], e[4][t])];
    }
  }
  function U(e, t) {
    if (e instanceof M) return Object.assign(e, { memberName: t, _isMemberSchema: true });
    return new M(e, t);
  }
  var ye = (e) => Array.isArray(e) && e.length === 2, fr = (e) => Array.isArray(e) && e.length >= 5;
  class F extends w {
    static symbol = Symbol.for("@smithy/sim");
    name;
    schemaRef;
    traits;
    symbol = F.symbol;
  }
  var ds = (e, t, r, s) => w.assign(new F(), { name: t, namespace: e, traits: s, schemaRef: r }), ms = (e, t, r, s) => w.assign(new F(), { name: t, namespace: e, traits: r, schemaRef: s }), ls = { BLOB: 21, STREAMING_BLOB: 42, BOOLEAN: 2, STRING: 0, NUMERIC: 1, BIG_INTEGER: 17, BIG_DECIMAL: 19, DOCUMENT: 15, TIMESTAMP_DEFAULT: 4, TIMESTAMP_DATE_TIME: 5, TIMESTAMP_HTTP_DATE: 6, TIMESTAMP_EPOCH_SECONDS: 7, LIST_MODIFIER: 64, MAP_MODIFIER: 128 };
  class _ {
    namespace;
    schemas;
    exceptions;
    static registries = /* @__PURE__ */ new Map();
    constructor(e, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map()) {
      this.namespace = e, this.schemas = t, this.exceptions = r;
    }
    static for(e) {
      if (!_.registries.has(e)) _.registries.set(e, new _(e));
      return _.registries.get(e);
    }
    register(e, t) {
      let r = this.normalizeShapeId(e);
      _.for(r.split("#")[0]).schemas.set(r, t);
    }
    getSchema(e) {
      let t = this.normalizeShapeId(e);
      if (!this.schemas.has(t)) throw Error(`@smithy/core/schema - schema not found for ${t}`);
      return this.schemas.get(t);
    }
    registerError(e, t) {
      let r = e, s = _.for(r[1]);
      s.schemas.set(r[1] + "#" + r[2], r), s.exceptions.set(r, t);
    }
    getErrorCtor(e) {
      let t = e;
      return _.for(t[1]).exceptions.get(t);
    }
    getBaseException() {
      for (let e of this.exceptions.keys()) if (Array.isArray(e)) {
        let [, t, r] = e, s = t + "#" + r;
        if (s.startsWith("smithy.ts.sdk.synthetic.") && s.endsWith("ServiceException")) return e;
      }
      return;
    }
    find(e) {
      return [...this.schemas.values()].find(e);
    }
    clear() {
      this.schemas.clear(), this.exceptions.clear();
    }
    normalizeShapeId(e) {
      if (e.includes("#")) return e;
      return this.namespace + "#" + e;
    }
  }
  ps.ErrorSchema = oe;
  ps.ListSchema = se;
  ps.MapSchema = ne;
  ps.NormalizedSchema = M;
  ps.OperationSchema = ie;
  ps.SCHEMA = ls;
  ps.Schema = w;
  ps.SimpleSchema = F;
  ps.StructureSchema = k;
  ps.TypeRegistry = _;
  ps.deref = re;
  ps.deserializerMiddlewareOption = ur;
  ps.error = fs;
  ps.getSchemaSerdePlugin = os;
  ps.isStaticSchema = fr;
  ps.list = as;
  ps.map = cs;
  ps.op = us;
  ps.operation = be;
  ps.serializerMiddlewareOption = hr;
  ps.sim = ds;
  ps.simAdapter = ms;
  ps.struct = hs;
  ps.translateTraits = L;
});
var yr = (0, import_chunk_w1d7ygsk.V)(function(lr) {
  Object.defineProperty(lr, "__esModule", { value: true });
  lr.randomUUID = void 0;
  var mr = (0, import_chunk_fwgg708q.rTt)(), dr = mr.__importDefault((0, import_chunk_w1d7ygsk.ft)("crypto"));
  lr.randomUUID = dr.default.randomUUID.bind(dr.default);
});
var _zi = (0, import_chunk_w1d7ygsk.V)(function(ks) {
  var br = yr(), g = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0")), Ls = () => {
    if (br.randomUUID) return br.randomUUID();
    let e = new Uint8Array(16);
    return crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, g[e[0]] + g[e[1]] + g[e[2]] + g[e[3]] + "-" + g[e[4]] + g[e[5]] + "-" + g[e[6]] + g[e[7]] + "-" + g[e[8]] + g[e[9]] + "-" + g[e[10]] + g[e[11]] + g[e[12]] + g[e[13]] + g[e[14]] + g[e[15]];
  };
  ks.v4 = Ls;
});
var Ujn = (0, import_chunk_w1d7ygsk.V)(function(Cr) {
  var Hs = _zi(), vs = (e, t, r = (s) => s) => e, Js = (e) => {
    switch (e) {
      case "true":
        return true;
      case "false":
        return false;
      default:
        throw Error(`Unable to parse boolean value "${e}"`);
    }
  }, Ws = (e) => {
    if (e === null || e === void 0) return;
    if (typeof e === "number") {
      if (e === 0 || e === 1) W.warn(ce(`Expected boolean, got ${typeof e}: ${e}`));
      if (e === 0) return false;
      if (e === 1) return true;
    }
    if (typeof e === "string") {
      let t = e.toLowerCase();
      if (t === "false" || t === "true") W.warn(ce(`Expected boolean, got ${typeof e}: ${e}`));
      if (t === "false") return false;
      if (t === "true") return true;
    }
    if (typeof e === "boolean") return e;
    throw TypeError(`Expected boolean, got ${typeof e}: ${e}`);
  }, v = (e) => {
    if (e === null || e === void 0) return;
    if (typeof e === "string") {
      let t = parseFloat(e);
      if (!Number.isNaN(t)) {
        if (String(t) !== String(e)) W.warn(ce(`Expected number but observed string: ${e}`));
        return t;
      }
    }
    if (typeof e === "number") return e;
    throw TypeError(`Expected number, got ${typeof e}: ${e}`);
  }, Vs = Math.ceil(34028234663852886e22), ae = (e) => {
    let t = v(e);
    if (t !== void 0 && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0) {
      if (Math.abs(t) > Vs) throw TypeError(`Expected 32-bit float, got ${e}`);
    }
    return t;
  }, J = (e) => {
    if (e === null || e === void 0) return;
    if (Number.isInteger(e) && !Number.isNaN(e)) return e;
    throw TypeError(`Expected integer, got ${typeof e}: ${e}`);
  }, Qs = J, Se = (e) => Te(e, 32), we = (e) => Te(e, 16), xe = (e) => Te(e, 8), Te = (e, t) => {
    let r = J(e);
    if (r !== void 0 && Gs(r, t) !== r) throw TypeError(`Expected ${t}-bit integer, got ${e}`);
    return r;
  }, Gs = (e, t) => {
    switch (t) {
      case 32:
        return Int32Array.of(e)[0];
      case 16:
        return Int16Array.of(e)[0];
      case 8:
        return Int8Array.of(e)[0];
    }
  }, Ys = (e, t) => {
    if (e === null || e === void 0) {
      if (t) throw TypeError(`Expected a non-null value for ${t}`);
      throw TypeError("Expected a non-null value");
    }
    return e;
  }, Sr = (e) => {
    if (e === null || e === void 0) return;
    if (typeof e === "object" && !Array.isArray(e)) return e;
    let t = Array.isArray(e) ? "array" : typeof e;
    throw TypeError(`Expected object, got ${t}: ${e}`);
  }, Zs = (e) => {
    if (e === null || e === void 0) return;
    if (typeof e === "string") return e;
    if (["boolean", "number", "bigint"].includes(typeof e)) return W.warn(ce(`Expected string, got ${typeof e}: ${e}`)), String(e);
    throw TypeError(`Expected string, got ${typeof e}: ${e}`);
  }, Ks = (e) => {
    if (e === null || e === void 0) return;
    let t = Sr(e), r = Object.entries(t).filter(([, s]) => s != null).map(([s]) => s);
    if (r.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
    if (r.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${r} were not null.`);
    return t;
  }, Ee = (e) => {
    if (typeof e == "string") return v(D(e));
    return v(e);
  }, Xs = Ee, wr = (e) => {
    if (typeof e == "string") return ae(D(e));
    return ae(e);
  }, en = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, D = (e) => {
    let t = e.match(en);
    if (t === null || t[0].length !== e.length) throw TypeError("Expected real number, got implicit NaN");
    return parseFloat(e);
  }, _e = (e) => {
    if (typeof e == "string") return xr(e);
    return v(e);
  }, tn = _e, rn = _e, sn = (e) => {
    if (typeof e == "string") return xr(e);
    return ae(e);
  }, xr = (e) => {
    switch (e) {
      case "NaN":
        return NaN;
      case "Infinity":
        return 1 / 0;
      case "-Infinity":
        return -1 / 0;
      default:
        throw Error(`Unable to parse float value: ${e}`);
    }
  }, Tr = (e) => {
    if (typeof e === "string") return J(D(e));
    return J(e);
  }, nn = Tr, on = (e) => {
    if (typeof e === "string") return Se(D(e));
    return Se(e);
  }, z = (e) => {
    if (typeof e === "string") return we(D(e));
    return we(e);
  }, Er = (e) => {
    if (typeof e === "string") return xe(D(e));
    return xe(e);
  }, ce = (e) => String(TypeError(e).stack || e).split(`
`).slice(0, 5).filter((t) => !t.includes("stackTraceWarning")).join(`
`), W = { warn: console.warn }, an = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Me = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function cn(e) {
    let t = e.getUTCFullYear(), r = e.getUTCMonth(), s = e.getUTCDay(), n = e.getUTCDate(), i = e.getUTCHours(), a = e.getUTCMinutes(), o = e.getUTCSeconds(), c = n < 10 ? `0${n}` : `${n}`, u = i < 10 ? `0${i}` : `${i}`, h = a < 10 ? `0${a}` : `${a}`, f = o < 10 ? `0${o}` : `${o}`;
    return `${an[s]}, ${c} ${Me[r]} ${t} ${u}:${h}:${f} GMT`;
  }
  var un = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/), hn = (e) => {
    if (e === null || e === void 0) return;
    if (typeof e !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
    let t = un.exec(e);
    if (!t) throw TypeError("Invalid RFC-3339 date-time value");
    let [r, s, n, i, a, o, c, u] = t, h = z(A(s)), f = E(n, "month", 1, 12), d = E(i, "day", 1, 31);
    return H(h, f, d, { hours: a, minutes: o, seconds: c, fractionalMilliseconds: u });
  }, fn = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/), dn = (e) => {
    if (e === null || e === void 0) return;
    if (typeof e !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
    let t = fn.exec(e);
    if (!t) throw TypeError("Invalid RFC-3339 date-time value");
    let [r, s, n, i, a, o, c, u, h] = t, f = z(A(s)), d = E(n, "month", 1, 12), l = E(i, "day", 1, 31), m = H(f, d, l, { hours: a, minutes: o, seconds: c, fractionalMilliseconds: u });
    if (h.toUpperCase() != "Z") m.setTime(m.getTime() - Mn(h));
    return m;
  }, mn = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), ln = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), pn = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/), yn = (e) => {
    if (e === null || e === void 0) return;
    if (typeof e !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
    let t = mn.exec(e);
    if (t) {
      let [r, s, n, i, a, o, c, u] = t;
      return H(z(A(i)), ge(n), E(s, "day", 1, 31), { hours: a, minutes: o, seconds: c, fractionalMilliseconds: u });
    }
    if (t = ln.exec(e), t) {
      let [r, s, n, i, a, o, c, u] = t;
      return wn(H(gn(i), ge(n), E(s, "day", 1, 31), { hours: a, minutes: o, seconds: c, fractionalMilliseconds: u }));
    }
    if (t = pn.exec(e), t) {
      let [r, s, n, i, a, o, c, u] = t;
      return H(z(A(u)), ge(s), E(n.trimLeft(), "day", 1, 31), { hours: i, minutes: a, seconds: o, fractionalMilliseconds: c });
    }
    throw TypeError("Invalid RFC-7231 date-time value");
  }, bn = (e) => {
    if (e === null || e === void 0) return;
    let t;
    if (typeof e === "number") t = e;
    else if (typeof e === "string") t = Ee(e);
    else if (typeof e === "object" && e.tag === 1) t = e.value;
    else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    return new Date(Math.round(t * 1e3));
  }, H = (e, t, r, s) => {
    let n = t - 1;
    return Tn(e, n, r), new Date(Date.UTC(e, n, r, E(s.hours, "hour", 0, 23), E(s.minutes, "minute", 0, 59), E(s.seconds, "seconds", 0, 60), _n(s.fractionalMilliseconds)));
  }, gn = (e) => {
    let t = (/* @__PURE__ */ new Date()).getUTCFullYear(), r = Math.floor(t / 100) * 100 + z(A(e));
    if (r < t) return r + 100;
    return r;
  }, Sn = 15768e8, wn = (e) => {
    if (e.getTime() - (/* @__PURE__ */ new Date()).getTime() > Sn) return new Date(Date.UTC(e.getUTCFullYear() - 100, e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()));
    return e;
  }, ge = (e) => {
    let t = Me.indexOf(e);
    if (t < 0) throw TypeError(`Invalid month: ${e}`);
    return t + 1;
  }, xn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Tn = (e, t, r) => {
    let s = xn[t];
    if (t === 1 && En(e)) s = 29;
    if (r > s) throw TypeError(`Invalid day for ${Me[t]} in ${e}: ${r}`);
  }, En = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), E = (e, t, r, s) => {
    let n = Er(A(e));
    if (n < r || n > s) throw TypeError(`${t} must be between ${r} and ${s}, inclusive`);
    return n;
  }, _n = (e) => {
    if (e === null || e === void 0) return 0;
    return wr("0." + e) * 1e3;
  }, Mn = (e) => {
    let t = e[0], r = 1;
    if (t == "+") r = 1;
    else if (t == "-") r = -1;
    else throw TypeError(`Offset direction, ${t}, must be "+" or "-"`);
    let s = Number(e.substring(1, 3)), n = Number(e.substring(4, 6));
    return r * (s * 60 + n) * 60 * 1e3;
  }, A = (e) => {
    let t = 0;
    while (t < e.length - 1 && e.charAt(t) === "0") t++;
    if (t === 0) return e;
    return e.slice(t);
  }, B = function(t) {
    return Object.assign(new String(t), { deserializeJSON() {
      return JSON.parse(String(t));
    }, toString() {
      return String(t);
    }, toJSON() {
      return String(t);
    } });
  };
  B.from = (e) => {
    if (e && typeof e === "object" && (e instanceof B || "deserializeJSON" in e)) return e;
    else if (typeof e === "string" || Object.getPrototypeOf(e) === String.prototype) return B(String(e));
    return B(JSON.stringify(e));
  };
  B.fromObject = B.from;
  function Cn(e) {
    if (e.includes(",") || e.includes('"')) e = `"${e.replace(/"/g, '\\"')}"`;
    return e;
  }
  var Ce = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?", Oe = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)", $e = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?", _r = "(\\d?\\d)", Mr = "(\\d{4})", On = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/), $n = new RegExp(`^${Ce}, ${_r} ${Oe} ${Mr} ${$e} GMT$`), Rn = new RegExp(`^${Ce}, ${_r}-${Oe}-(\\d\\d) ${$e} GMT$`), Bn = new RegExp(`^${Ce} ${Oe} ( [1-9]|\\d\\d) ${$e} ${Mr}$`), In = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Pn = (e) => {
    if (e == null) return;
    let t = NaN;
    if (typeof e === "number") t = e;
    else if (typeof e === "string") {
      if (!/^-?\d*\.?\d+$/.test(e)) throw TypeError("parseEpochTimestamp - numeric string invalid.");
      t = Number.parseFloat(e);
    } else if (typeof e === "object" && e.tag === 1) t = e.value;
    if (isNaN(t) || Math.abs(t) === 1 / 0) throw TypeError("Epoch timestamps must be valid finite numbers.");
    return new Date(Math.round(t * 1e3));
  }, Nn = (e) => {
    if (e == null) return;
    if (typeof e !== "string") throw TypeError("RFC3339 timestamps must be strings");
    let t = On.exec(e);
    if (!t) throw TypeError(`Invalid RFC3339 timestamp format ${e}`);
    let [, r, s, n, i, a, o, , c, u] = t;
    C(s, 1, 12), C(n, 1, 31), C(i, 0, 23), C(a, 0, 59), C(o, 0, 60);
    let h = new Date(Date.UTC(Number(r), Number(s) - 1, Number(n), Number(i), Number(a), Number(o), Number(c) ? Math.round(parseFloat(`0.${c}`) * 1e3) : 0));
    if (h.setUTCFullYear(Number(r)), u.toUpperCase() != "Z") {
      let [, f, d, l] = /([+-])(\d\d):(\d\d)/.exec(u) || [void 0, "+", 0, 0], m = f === "-" ? 1 : -1;
      h.setTime(h.getTime() + m * (Number(d) * 60 * 60 * 1e3 + Number(l) * 60 * 1e3));
    }
    return h;
  }, zn = (e) => {
    if (e == null) return;
    if (typeof e !== "string") throw TypeError("RFC7231 timestamps must be strings.");
    let t, r, s, n, i, a, o, c;
    if (c = $n.exec(e)) [, t, r, s, n, i, a, o] = c;
    else if (c = Rn.exec(e)) [, t, r, s, n, i, a, o] = c, s = (Number(s) + 1900).toString();
    else if (c = Bn.exec(e)) [, r, t, n, i, a, o, s] = c;
    if (s && a) {
      let u = Date.UTC(Number(s), In.indexOf(r), Number(t), Number(n), Number(i), Number(a), o ? Math.round(parseFloat(`0.${o}`) * 1e3) : 0);
      C(t, 1, 31), C(n, 0, 23), C(i, 0, 59), C(a, 0, 60);
      let h = new Date(u);
      return h.setUTCFullYear(Number(s)), h;
    }
    throw TypeError(`Invalid RFC7231 date-time value ${e}.`);
  };
  function C(e, t, r) {
    let s = Number(e);
    if (s < t || s > r) throw Error(`Value ${s} out of range [${t}, ${r}]`);
  }
  function An(e, t, r) {
    if (r <= 0 || !Number.isInteger(r)) throw Error("Invalid number of delimiters (" + r + ") for splitEvery.");
    let s = e.split(t);
    if (r === 1) return s;
    let n = [], i = "";
    for (let a = 0; a < s.length; a++) {
      if (i === "") i = s[a];
      else i += t + s[a];
      if ((a + 1) % r === 0) n.push(i), i = "";
    }
    if (i !== "") n.push(i);
    return n;
  }
  var Dn = (e) => {
    let t = e.length, r = [], s = false, n = void 0, i = 0;
    for (let a = 0; a < t; ++a) {
      let o = e[a];
      switch (o) {
        case '"':
          if (n !== "\\") s = !s;
          break;
        case ",":
          if (!s) r.push(e.slice(i, a)), i = a + 1;
          break;
      }
      n = o;
    }
    return r.push(e.slice(i)), r.map((a) => {
      a = a.trim();
      let o = a.length;
      if (o < 2) return a;
      if (a[0] === '"' && a[o - 1] === '"') a = a.slice(1, o - 1);
      return a.replace(/\\"/g, '"');
    });
  }, gr = /^-?\d*(\.\d+)?$/;
  class ue {
    string;
    type;
    constructor(e, t) {
      if (this.string = e, this.type = t, !gr.test(e)) throw Error('@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".');
    }
    toString() {
      return this.string;
    }
    static [Symbol.hasInstance](e) {
      if (!e || typeof e !== "object") return false;
      let t = e;
      return ue.prototype.isPrototypeOf(e) || t.type === "bigDecimal" && gr.test(t.string);
    }
  }
  function qn(e) {
    return new ue(String(e), "bigDecimal");
  }
  Object.defineProperty(Cr, "generateIdempotencyToken", { enumerable: true, get: function() {
    return Hs.v4;
  } });
  Cr.LazyJsonString = B;
  Cr.NumericValue = ue;
  Cr._parseEpochTimestamp = Pn;
  Cr._parseRfc3339DateTimeWithOffset = Nn;
  Cr._parseRfc7231DateTime = zn;
  Cr.copyDocumentWithTransform = vs;
  Cr.dateToUtcString = cn;
  Cr.expectBoolean = Ws;
  Cr.expectByte = xe;
  Cr.expectFloat32 = ae;
  Cr.expectInt = Qs;
  Cr.expectInt32 = Se;
  Cr.expectLong = J;
  Cr.expectNonNull = Ys;
  Cr.expectNumber = v;
  Cr.expectObject = Sr;
  Cr.expectShort = we;
  Cr.expectString = Zs;
  Cr.expectUnion = Ks;
  Cr.handleFloat = tn;
  Cr.limitedParseDouble = _e;
  Cr.limitedParseFloat = rn;
  Cr.limitedParseFloat32 = sn;
  Cr.logger = W;
  Cr.nv = qn;
  Cr.parseBoolean = Js;
  Cr.parseEpochTimestamp = bn;
  Cr.parseRfc3339DateTime = hn;
  Cr.parseRfc3339DateTimeWithOffset = dn;
  Cr.parseRfc7231DateTime = yn;
  Cr.quoteHeader = Cn;
  Cr.splitEvery = An;
  Cr.splitHeader = Dn;
  Cr.strictParseByte = Er;
  Cr.strictParseDouble = Ee;
  Cr.strictParseFloat = Xs;
  Cr.strictParseFloat32 = wr;
  Cr.strictParseInt = nn;
  Cr.strictParseInt32 = on;
  Cr.strictParseLong = Tr;
  Cr.strictParseShort = z;
});
var Run = (0, import_chunk_w1d7ygsk.V)(function(Ci) {
  var he = gzi(), T = Tj(), x = Ujn(), Q = (0, import_chunk_3jjr3wje.yb)(), fe = (0, import_chunk_z3ydstra.xB)(), Re = (0, import_chunk_z3ydstra.SL)(), I = async (e = new Uint8Array(), t) => {
    if (e instanceof Uint8Array) return he.Uint8ArrayBlobAdapter.mutate(e);
    if (!e) return he.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    let r = t.streamCollector(e);
    return he.Uint8ArrayBlobAdapter.mutate(await r);
  };
  function G(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function(t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  class q {
    serdeContext;
    setSerdeContext(e) {
      this.serdeContext = e;
    }
  }
  class de extends q {
    options;
    constructor(e) {
      super();
      this.options = e;
    }
    getRequestType() {
      return Q.HttpRequest;
    }
    getResponseType() {
      return Q.HttpResponse;
    }
    setSerdeContext(e) {
      if (this.serdeContext = e, this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e), this.getPayloadCodec()) this.getPayloadCodec().setSerdeContext(e);
    }
    updateServiceEndpoint(e, t) {
      if ("url" in t) {
        if (e.protocol = t.url.protocol, e.hostname = t.url.hostname, e.port = t.url.port ? Number(t.url.port) : void 0, e.path = t.url.pathname, e.fragment = t.url.hash || void 0, e.username = t.url.username || void 0, e.password = t.url.password || void 0, !e.query) e.query = {};
        for (let [r, s] of t.url.searchParams.entries()) e.query[r] = s;
        return e;
      } else return e.protocol = t.protocol, e.hostname = t.hostname, e.port = t.port ? Number(t.port) : void 0, e.path = t.path, e.query = { ...t.query }, e;
    }
    setHostPrefix(e, t, r) {
      let s = T.NormalizedSchema.of(t.input), n = T.translateTraits(t.traits ?? {});
      if (n.endpoint) {
        let i = n.endpoint?.[0];
        if (typeof i === "string") {
          let a = [...s.structIterator()].filter(([, o]) => o.getMergedTraits().hostLabel);
          for (let [o] of a) {
            let c = r[o];
            if (typeof c !== "string") throw Error(`@smithy/core/schema - ${o} in input must be a string as hostLabel.`);
            i = i.replace(`{${o}}`, c);
          }
          e.hostname = i + e.hostname;
        }
      }
    }
    deserializeMetadata(e) {
      return { httpStatusCode: e.statusCode, requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"], extendedRequestId: e.headers["x-amz-id-2"], cfId: e.headers["x-amz-cf-id"] };
    }
    async serializeEventStream({ eventStream: e, requestSchema: t, initialRequest: r }) {
      return (await this.loadEventStreamCapability()).serializeEventStream({ eventStream: e, requestSchema: t, initialRequest: r });
    }
    async deserializeEventStream({ response: e, responseSchema: t, initialResponseContainer: r }) {
      return (await this.loadEventStreamCapability()).deserializeEventStream({ response: e, responseSchema: t, initialResponseContainer: r });
    }
    async loadEventStreamCapability() {
      let { EventStreamSerde: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1g374pth.js")));
      return new e({ marshaller: this.getEventStreamMarshaller(), serializer: this.serializer, deserializer: this.deserializer, serdeContext: this.serdeContext, defaultContentType: this.getDefaultContentType() });
    }
    getDefaultContentType() {
      throw Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
    }
    async deserializeHttpMessage(e, t, r, s, n) {
      return [];
    }
    getEventStreamMarshaller() {
      let e = this.serdeContext;
      if (!e.eventStreamMarshaller) throw Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
      return e.eventStreamMarshaller;
    }
  }
  class Or extends de {
    async serializeRequest(e, t, r) {
      let s = { ...t ?? {} }, n = this.serializer, i = {}, a = {}, o = await r.endpoint(), c = T.NormalizedSchema.of(e?.input), u = c.getSchema(), h = false, f, d = new Q.HttpRequest({ protocol: "", hostname: "", port: void 0, path: "", fragment: void 0, query: i, headers: a, body: void 0 });
      if (o) {
        this.updateServiceEndpoint(d, o), this.setHostPrefix(d, e, s);
        let l = T.translateTraits(e.traits);
        if (l.http) {
          d.method = l.http[0];
          let [m, p] = l.http[1].split("?");
          if (d.path == "/") d.path = m;
          else d.path += m;
          let S = new URLSearchParams(p ?? "");
          Object.assign(i, Object.fromEntries(S));
        }
      }
      for (let [l, m] of c.structIterator()) {
        let p = m.getMergedTraits() ?? {}, S = s[l];
        if (S == null && !m.isIdempotencyToken()) continue;
        if (p.httpPayload) {
          if (m.isStreaming()) if (m.isStructSchema()) {
            if (s[l]) f = await this.serializeEventStream({ eventStream: s[l], requestSchema: c });
          } else f = S;
          else n.write(m, S), f = n.flush();
          delete s[l];
        } else if (p.httpLabel) {
          n.write(m, S);
          let O = n.flush();
          if (d.path.includes(`{${l}+}`)) d.path = d.path.replace(`{${l}+}`, O.split("/").map(G).join("/"));
          else if (d.path.includes(`{${l}}`)) d.path = d.path.replace(`{${l}}`, G(O));
          delete s[l];
        } else if (p.httpHeader) n.write(m, S), a[p.httpHeader.toLowerCase()] = String(n.flush()), delete s[l];
        else if (typeof p.httpPrefixHeaders === "string") {
          for (let [O, Y] of Object.entries(S)) {
            let ze = p.httpPrefixHeaders + O;
            n.write([m.getValueSchema(), { httpHeader: ze }], Y), a[ze.toLowerCase()] = n.flush();
          }
          delete s[l];
        } else if (p.httpQuery || p.httpQueryParams) this.serializeQuery(m, S, i), delete s[l];
        else h = true;
      }
      if (h && s) n.write(u, s), f = n.flush();
      return d.headers = a, d.query = i, d.body = f, d;
    }
    serializeQuery(e, t, r) {
      let s = this.serializer, n = e.getMergedTraits();
      if (n.httpQueryParams) {
        for (let [i, a] of Object.entries(t)) if (!(i in r)) {
          let o = e.getValueSchema();
          Object.assign(o.getMergedTraits(), { ...n, httpQuery: i, httpQueryParams: void 0 }), this.serializeQuery(o, a, r);
        }
        return;
      }
      if (e.isListSchema()) {
        let i = !!e.getMergedTraits().sparse, a = [];
        for (let o of t) {
          s.write([e.getValueSchema(), n], o);
          let c = s.flush();
          if (i || c !== void 0) a.push(c);
        }
        r[n.httpQuery] = a;
      } else s.write([e, n], t), r[n.httpQuery] = s.flush();
    }
    async deserializeResponse(e, t, r) {
      let s = this.deserializer, n = T.NormalizedSchema.of(e.output), i = {};
      if (r.statusCode >= 300) {
        let o = await I(r.body, t);
        if (o.byteLength > 0) Object.assign(i, await s.read(15, o));
        throw await this.handleError(e, t, r, i, this.deserializeMetadata(r)), Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
      }
      for (let o in r.headers) {
        let c = r.headers[o];
        delete r.headers[o], r.headers[o.toLowerCase()] = c;
      }
      let a = await this.deserializeHttpMessage(n, t, r, i);
      if (a.length) {
        let o = await I(r.body, t);
        if (o.byteLength > 0) {
          let c = await s.read(n, o);
          for (let u of a) i[u] = c[u];
        }
      } else if (a.discardResponseBody) await I(r.body, t);
      return i.$metadata = this.deserializeMetadata(r), i;
    }
    async deserializeHttpMessage(e, t, r, s, n) {
      let i;
      if (s instanceof Set) i = n;
      else i = s;
      let a = true, o = this.deserializer, c = T.NormalizedSchema.of(e), u = [];
      for (let [h, f] of c.structIterator()) {
        let d = f.getMemberTraits();
        if (d.httpPayload) {
          if (a = false, f.isStreaming()) if (f.isStructSchema()) i[h] = await this.deserializeEventStream({ response: r, responseSchema: c });
          else i[h] = he.sdkStreamMixin(r.body);
          else if (r.body) {
            let m = await I(r.body, t);
            if (m.byteLength > 0) i[h] = await o.read(f, m);
          }
        } else if (d.httpHeader) {
          let l = String(d.httpHeader).toLowerCase(), m = r.headers[l];
          if (m != null) if (f.isListSchema()) {
            let p = f.getValueSchema();
            p.getMergedTraits().httpHeader = l;
            let S;
            if (p.isTimestampSchema() && p.getSchema() === 4) S = x.splitEvery(m, ",", 2);
            else S = x.splitHeader(m);
            let O = [];
            for (let Y of S) O.push(await o.read(p, Y.trim()));
            i[h] = O;
          } else i[h] = await o.read(f, m);
        } else if (d.httpPrefixHeaders !== void 0) {
          i[h] = {};
          for (let [l, m] of Object.entries(r.headers)) if (l.startsWith(d.httpPrefixHeaders)) {
            let p = f.getValueSchema();
            p.getMergedTraits().httpHeader = l, i[h][l.slice(d.httpPrefixHeaders.length)] = await o.read(p, m);
          }
        } else if (d.httpResponseCode) i[h] = r.statusCode;
        else u.push(h);
      }
      return u.discardResponseBody = a, u;
    }
  }
  class $r extends de {
    async serializeRequest(e, t, r) {
      let s = this.serializer, n = {}, i = {}, a = await r.endpoint(), o = T.NormalizedSchema.of(e?.input), c = o.getSchema(), u, h = new Q.HttpRequest({ protocol: "", hostname: "", port: void 0, path: "/", fragment: void 0, query: n, headers: i, body: void 0 });
      if (a) this.updateServiceEndpoint(h, a), this.setHostPrefix(h, e, t);
      let f = { ...t };
      if (t) {
        let d = o.getEventStreamMember();
        if (d) {
          if (f[d]) {
            let l = {};
            for (let [m, p] of o.structIterator()) if (m !== d && f[m]) s.write(p, f[m]), l[m] = s.flush();
            u = await this.serializeEventStream({ eventStream: f[d], requestSchema: o, initialRequest: l });
          }
        } else s.write(c, f), u = s.flush();
      }
      return h.headers = i, h.query = n, h.body = u, h.method = "POST", h;
    }
    async deserializeResponse(e, t, r) {
      let s = this.deserializer, n = T.NormalizedSchema.of(e.output), i = {};
      if (r.statusCode >= 300) {
        let o = await I(r.body, t);
        if (o.byteLength > 0) Object.assign(i, await s.read(15, o));
        throw await this.handleError(e, t, r, i, this.deserializeMetadata(r)), Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
      }
      for (let o in r.headers) {
        let c = r.headers[o];
        delete r.headers[o], r.headers[o.toLowerCase()] = c;
      }
      let a = n.getEventStreamMember();
      if (a) i[a] = await this.deserializeEventStream({ response: r, responseSchema: n, initialResponseContainer: i });
      else {
        let o = await I(r.body, t);
        if (o.byteLength > 0) Object.assign(i, await s.read(n, o));
      }
      return i.$metadata = this.deserializeMetadata(r), i;
    }
  }
  var Rr = (e, t, r, s, n, i) => {
    if (t != null && t[r] !== void 0) {
      let a = s();
      if (a.length <= 0) throw Error("Empty value provided for input HTTP label: " + r + ".");
      e = e.replace(n, i ? a.split("/").map((o) => G(o)).join("/") : G(a));
    } else throw Error("No value provided for input HTTP label: " + r + ".");
    return e;
  };
  function Mi(e, t) {
    return new Be(e, t);
  }
  class Be {
    input;
    context;
    query = {};
    method = "";
    headers = {};
    path = "";
    body = null;
    hostname = "";
    resolvePathStack = [];
    constructor(e, t) {
      this.input = e, this.context = t;
    }
    async build() {
      let { hostname: e, protocol: t = "https", port: r, path: s } = await this.context.endpoint();
      this.path = s;
      for (let n of this.resolvePathStack) n(this.path);
      return new Q.HttpRequest({ protocol: t, hostname: this.hostname || e, port: r, method: this.method, path: this.path, query: this.query, body: this.body, headers: this.headers });
    }
    hn(e) {
      return this.hostname = e, this;
    }
    bp(e) {
      return this.resolvePathStack.push((t) => {
        this.path = `${t?.endsWith("/") ? t.slice(0, -1) : t || ""}` + e;
      }), this;
    }
    p(e, t, r, s) {
      return this.resolvePathStack.push((n) => {
        this.path = Rr(n, this.input, e, t, r, s);
      }), this;
    }
    h(e) {
      return this.headers = e, this;
    }
    q(e) {
      return this.query = e, this;
    }
    b(e) {
      return this.body = e, this;
    }
    m(e) {
      return this.method = e, this;
    }
  }
  function Ie(e, t) {
    if (t.timestampFormat.useTrait) {
      if (e.isTimestampSchema() && (e.getSchema() === 5 || e.getSchema() === 6 || e.getSchema() === 7)) return e.getSchema();
    }
    let { httpLabel: r, httpPrefixHeaders: s, httpHeader: n, httpQuery: i } = e.getMergedTraits();
    return (t.httpBindings ? typeof s === "string" || Boolean(n) ? 6 : Boolean(i) || Boolean(r) ? 5 : void 0 : void 0) ?? t.timestampFormat.default;
  }
  class Pe extends q {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    read(e, t) {
      let r = T.NormalizedSchema.of(e);
      if (r.isListSchema()) return x.splitHeader(t).map((s) => this.read(r.getValueSchema(), s));
      if (r.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? fe.fromBase64)(t);
      if (r.isTimestampSchema()) switch (Ie(r, this.settings)) {
        case 5:
          return x._parseRfc3339DateTimeWithOffset(t);
        case 6:
          return x._parseRfc7231DateTime(t);
        case 7:
          return x._parseEpochTimestamp(t);
        default:
          return console.warn("Missing timestamp format, parsing value with Date constructor:", t), new Date(t);
      }
      if (r.isStringSchema()) {
        let s = r.getMergedTraits().mediaType, n = t;
        if (s) {
          if (r.getMergedTraits().httpHeader) n = this.base64ToUtf8(n);
          if (s === "application/json" || s.endsWith("+json")) n = x.LazyJsonString.from(n);
          return n;
        }
      }
      if (r.isNumericSchema()) return Number(t);
      if (r.isBigIntegerSchema()) return BigInt(t);
      if (r.isBigDecimalSchema()) return new x.NumericValue(t, "bigDecimal");
      if (r.isBooleanSchema()) return String(t).toLowerCase() === "true";
      return t;
    }
    base64ToUtf8(e) {
      return (this.serdeContext?.utf8Encoder ?? Re.toUtf8)((this.serdeContext?.base64Decoder ?? fe.fromBase64)(e));
    }
  }
  class Br extends q {
    codecDeserializer;
    stringDeserializer;
    constructor(e, t) {
      super();
      this.codecDeserializer = e, this.stringDeserializer = new Pe(t);
    }
    setSerdeContext(e) {
      this.stringDeserializer.setSerdeContext(e), this.codecDeserializer.setSerdeContext(e), this.serdeContext = e;
    }
    read(e, t) {
      let r = T.NormalizedSchema.of(e), s = r.getMergedTraits(), n = this.serdeContext?.utf8Encoder ?? Re.toUtf8;
      if (s.httpHeader || s.httpResponseCode) return this.stringDeserializer.read(r, n(t));
      if (s.httpPayload) {
        if (r.isBlobSchema()) {
          let i = this.serdeContext?.utf8Decoder ?? Re.fromUtf8;
          if (typeof t === "string") return i(t);
          return t;
        } else if (r.isStringSchema()) {
          if ("byteLength" in t) return n(t);
          return t;
        }
      }
      return this.codecDeserializer.read(r, t);
    }
  }
  class Ne extends q {
    settings;
    stringBuffer = "";
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      let r = T.NormalizedSchema.of(e);
      switch (typeof t) {
        case "object":
          if (t === null) {
            this.stringBuffer = "null";
            return;
          }
          if (r.isTimestampSchema()) {
            if (!(t instanceof Date)) throw Error(`@smithy/core/protocols - received non-Date value ${t} when schema expected Date in ${r.getName(true)}`);
            switch (Ie(r, this.settings)) {
              case 5:
                this.stringBuffer = t.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                this.stringBuffer = x.dateToUtcString(t);
                break;
              case 7:
                this.stringBuffer = String(t.getTime() / 1e3);
                break;
              default:
                console.warn("Missing timestamp format, using epoch seconds", t), this.stringBuffer = String(t.getTime() / 1e3);
            }
            return;
          }
          if (r.isBlobSchema() && "byteLength" in t) {
            this.stringBuffer = (this.serdeContext?.base64Encoder ?? fe.toBase64)(t);
            return;
          }
          if (r.isListSchema() && Array.isArray(t)) {
            let i = "";
            for (let a of t) {
              this.write([r.getValueSchema(), r.getMergedTraits()], a);
              let o = this.flush(), c = r.getValueSchema().isTimestampSchema() ? o : x.quoteHeader(o);
              if (i !== "") i += ", ";
              i += c;
            }
            this.stringBuffer = i;
            return;
          }
          this.stringBuffer = JSON.stringify(t, null, 2);
          break;
        case "string":
          let s = r.getMergedTraits().mediaType, n = t;
          if (s) {
            if (s === "application/json" || s.endsWith("+json")) n = x.LazyJsonString.from(n);
            if (r.getMergedTraits().httpHeader) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? fe.toBase64)(n.toString());
              return;
            }
          }
          this.stringBuffer = t;
          break;
        default:
          if (r.isIdempotencyToken()) this.stringBuffer = x.generateIdempotencyToken();
          else this.stringBuffer = String(t);
      }
    }
    flush() {
      let e = this.stringBuffer;
      return this.stringBuffer = "", e;
    }
  }
  class Ir {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(e, t, r = new Ne(t)) {
      this.codecSerializer = e, this.stringSerializer = r;
    }
    setSerdeContext(e) {
      this.codecSerializer.setSerdeContext(e), this.stringSerializer.setSerdeContext(e);
    }
    write(e, t) {
      let r = T.NormalizedSchema.of(e), s = r.getMergedTraits();
      if (s.httpHeader || s.httpLabel || s.httpQuery) {
        this.stringSerializer.write(r, t), this.buffer = this.stringSerializer.flush();
        return;
      }
      return this.codecSerializer.write(r, t);
    }
    flush() {
      if (this.buffer !== void 0) {
        let e = this.buffer;
        return this.buffer = void 0, e;
      }
      return this.codecSerializer.flush();
    }
  }
  Ci.FromStringShapeDeserializer = Pe;
  Ci.HttpBindingProtocol = Or;
  Ci.HttpInterceptingShapeDeserializer = Br;
  Ci.HttpInterceptingShapeSerializer = Ir;
  Ci.HttpProtocol = de;
  Ci.RequestBuilder = Be;
  Ci.RpcProtocol = $r;
  Ci.SerdeContext = q;
  Ci.ToStringShapeSerializer = Ne;
  Ci.collectBody = I;
  Ci.determineTimestampFormat = Ie;
  Ci.extendedEncodeURIComponent = G;
  Ci.requestBuilder = Mi;
  Ci.resolvedPath = Rr;
});
