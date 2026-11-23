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
var chunk_fe2jgj1j_exports = {};
__export(chunk_fe2jgj1j_exports, {
  vGt: () => vGt
});
module.exports = __toCommonJS(chunk_fe2jgj1j_exports);
var import_chunk_s2z83xnv = require("/$bunfs/root/chunk-s2z83xnv.js");
var import_chunk_jybgpkft = require("/$bunfs/root/chunk-jybgpkft.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var vGt = (0, import_chunk_w1d7ygsk.V)(function(Re) {
  var f = (0, import_chunk_s2z83xnv.Bjn)(), d = (0, import_chunk_z3ydstra.SL)(), ue = (0, import_chunk_z3ydstra.Tra)(), k = (0, import_chunk_3jjr3wje.yb)(), O = (0, import_chunk_jybgpkft.Aj)(), R = (0, import_chunk_3jjr3wje.gXi)(), Y = "X-Amz-Algorithm", K = "X-Amz-Credential", m = "X-Amz-Date", j = "X-Amz-SignedHeaders", Q = "X-Amz-Expires", U = "X-Amz-Signature", v = "X-Amz-Security-Token", Ae = "X-Amz-Region-Set", x = "authorization", P = m.toLowerCase(), q = "date", z = [x, P, q], B = U.toLowerCase(), S = "x-amz-content-sha256", X = v.toLowerCase(), Ee = "host", F = { authorization: true, "cache-control": true, connection: true, expect: true, from: true, "keep-alive": true, "max-forwards": true, pragma: true, referer: true, te: true, trailer: true, "transfer-encoding": true, upgrade: true, "user-agent": true, "x-amzn-trace-id": true }, W = /^proxy-/, Z = /^sec-/, he = [/^proxy-/i, /^sec-/i], _ = "AWS4-HMAC-SHA256", fe = "AWS4-ECDSA-P256-SHA256", J = "AWS4-HMAC-SHA256-PAYLOAD", ee = "UNSIGNED-PAYLOAD", te = 50, N = "aws4_request", se = 604800, y = {}, w = [], D = (e, t, r) => `${e}/${t}/${r}/${N}`, re = async (e, t, r, s, n) => {
    let a = await M(e, t.secretAccessKey, t.accessKeyId), o = `${r}:${s}:${n}:${f.toHex(a)}:${t.sessionToken}`;
    if (o in y) return y[o];
    w.push(o);
    while (w.length > te) delete y[w.shift()];
    let i = `AWS4${t.secretAccessKey}`;
    for (let c of [r, s, n, N]) i = await M(e, i, c);
    return y[o] = i;
  }, le = () => {
    w.length = 0, Object.keys(y).forEach((e) => {
      delete y[e];
    });
  }, M = (e, t, r) => {
    let s = new e(t);
    return s.update(d.toUint8Array(r)), s.digest();
  }, T = ({ headers: e }, t, r) => {
    let s = {};
    for (let n of Object.keys(e).sort()) {
      if (e[n] == null) continue;
      let a = n.toLowerCase();
      if (a in F || t?.has(a) || W.test(a) || Z.test(a)) {
        if (!r || r && !r.has(a)) continue;
      }
      s[a] = e[n].trim().replace(/\s+/g, " ");
    }
    return s;
  }, H = async ({ headers: e, body: t }, r) => {
    for (let s of Object.keys(e)) if (s.toLowerCase() === S) return e[s];
    if (t == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    else if (typeof t === "string" || ArrayBuffer.isView(t) || ue.isArrayBuffer(t)) {
      let s = new r();
      return s.update(d.toUint8Array(t)), f.toHex(await s.digest());
    }
    return ee;
  };
  class ne {
    format(e) {
      let t = [];
      for (let n of Object.keys(e)) {
        let a = d.fromUtf8(n);
        t.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(e[n]));
      }
      let r = new Uint8Array(t.reduce((n, a) => n + a.byteLength, 0)), s = 0;
      for (let n of t) r.set(n, s), s += n.byteLength;
      return r;
    }
    formatHeaderValue(e) {
      switch (e.type) {
        case "boolean":
          return Uint8Array.from([e.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, e.value]);
        case "short":
          let t = new DataView(new ArrayBuffer(3));
          return t.setUint8(0, 3), t.setInt16(1, e.value, false), new Uint8Array(t.buffer);
        case "integer":
          let r = new DataView(new ArrayBuffer(5));
          return r.setUint8(0, 4), r.setInt32(1, e.value, false), new Uint8Array(r.buffer);
        case "long":
          let s = new Uint8Array(9);
          return s[0] = 5, s.set(e.value.bytes, 1), s;
        case "binary":
          let n = new DataView(new ArrayBuffer(3 + e.value.byteLength));
          n.setUint8(0, 6), n.setUint16(1, e.value.byteLength, false);
          let a = new Uint8Array(n.buffer);
          return a.set(e.value, 3), a;
        case "string":
          let o = d.fromUtf8(e.value), i = new DataView(new ArrayBuffer(3 + o.byteLength));
          i.setUint8(0, 7), i.setUint16(1, o.byteLength, false);
          let c = new Uint8Array(i.buffer);
          return c.set(o, 3), c;
        case "timestamp":
          let A = new Uint8Array(9);
          return A[0] = 8, A.set(b.fromNumber(e.value.valueOf()).bytes, 1), A;
        case "uuid":
          if (!ge.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
          let u = new Uint8Array(17);
          return u[0] = 9, u.set(f.fromHex(e.value.replace(/\-/g, "")), 1), u;
      }
    }
  }
  var ge = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  class b {
    bytes;
    constructor(e) {
      if (this.bytes = e, e.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
    }
    static fromNumber(e) {
      if (e > 9223372036854776e3 || e < -9223372036854776e3) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
      let t = new Uint8Array(8);
      for (let r = 7, s = Math.abs(Math.round(e)); r > -1 && s > 0; r--, s /= 256) t[r] = s;
      if (e < 0) G(t);
      return new b(t);
    }
    valueOf() {
      let e = this.bytes.slice(0), t = e[0] & 128;
      if (t) G(e);
      return parseInt(f.toHex(e), 16) * (t ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  }
  function G(e) {
    for (let t = 0; t < 8; t++) e[t] ^= 255;
    for (let t = 7; t > -1; t--) if (e[t]++, e[t] !== 0) break;
  }
  var ae = (e, t) => {
    e = e.toLowerCase();
    for (let r of Object.keys(t)) if (e === r.toLowerCase()) return true;
    return false;
  }, oe = (e, t = {}) => {
    let { headers: r, query: s = {} } = k.HttpRequest.clone(e);
    for (let n of Object.keys(r)) {
      let a = n.toLowerCase();
      if (a.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(a) || t.hoistableHeaders?.has(a)) s[n] = r[n], delete r[n];
    }
    return { ...e, headers: r, query: s };
  }, I = (e) => {
    e = k.HttpRequest.clone(e);
    for (let t of Object.keys(e.headers)) if (z.indexOf(t.toLowerCase()) > -1) delete e.headers[t];
    return e;
  }, ie = ({ query: e = {} }) => {
    let t = [], r = {};
    for (let s of Object.keys(e)) {
      if (s.toLowerCase() === B) continue;
      let n = R.escapeUri(s);
      t.push(n);
      let a = e[s];
      if (typeof a === "string") r[n] = `${n}=${R.escapeUri(a)}`;
      else if (Array.isArray(a)) r[n] = a.slice(0).reduce((o, i) => o.concat([`${n}=${R.escapeUri(i)}`]), []).sort().join("&");
    }
    return t.sort().map((s) => r[s]).filter((s) => s).join("&");
  }, de = (e) => ye(e).toISOString().replace(/\.\d{3}Z$/, "Z"), ye = (e) => {
    if (typeof e === "number") return new Date(e * 1e3);
    if (typeof e === "string") {
      if (Number(e)) return new Date(Number(e) * 1e3);
      return new Date(e);
    }
    return e;
  };
  class C {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({ applyChecksum: e, credentials: t, region: r, service: s, sha256: n, uriEscapePath: a = true }) {
      this.service = s, this.sha256 = n, this.uriEscapePath = a, this.applyChecksum = typeof e === "boolean" ? e : true, this.regionProvider = O.normalizeProvider(r), this.credentialProvider = O.normalizeProvider(t);
    }
    createCanonicalRequest(e, t, r) {
      let s = Object.keys(t).sort();
      return `${e.method}
${this.getCanonicalPath(e)}
${ie(e)}
${s.map((n) => `${n}:${t[n]}`).join(`
`)}

${s.join(";")}
${r}`;
    }
    async createStringToSign(e, t, r, s) {
      let n = new this.sha256();
      n.update(d.toUint8Array(r));
      let a = await n.digest();
      return `${s}
${e}
${t}
${f.toHex(a)}`;
    }
    getCanonicalPath({ path: e }) {
      if (this.uriEscapePath) {
        let t = [];
        for (let n of e.split("/")) {
          if (n?.length === 0) continue;
          if (n === ".") continue;
          if (n === "..") t.pop();
          else t.push(n);
        }
        let r = `${e?.startsWith("/") ? "/" : ""}${t.join("/")}${t.length > 0 && e?.endsWith("/") ? "/" : ""}`;
        return R.escapeUri(r).replace(/%2F/g, "/");
      }
      return e;
    }
    validateResolvedCredentials(e) {
      if (typeof e !== "object" || typeof e.accessKeyId !== "string" || typeof e.secretAccessKey !== "string") throw Error("Resolved credential object is not valid");
    }
    formatDate(e) {
      let t = de(e).replace(/[\-:]/g, "");
      return { longDate: t, shortDate: t.slice(0, 8) };
    }
    getCanonicalHeaderList(e) {
      return Object.keys(e).sort().join(";");
    }
  }
  class ce extends C {
    headerFormatter = new ne();
    constructor({ applyChecksum: e, credentials: t, region: r, service: s, sha256: n, uriEscapePath: a = true }) {
      super({ applyChecksum: e, credentials: t, region: r, service: s, sha256: n, uriEscapePath: a });
    }
    async presign(e, t = {}) {
      let { signingDate: r = /* @__PURE__ */ new Date(), expiresIn: s = 3600, unsignableHeaders: n, unhoistableHeaders: a, signableHeaders: o, hoistableHeaders: i, signingRegion: c, signingService: A } = t, u = await this.credentialProvider();
      this.validateResolvedCredentials(u);
      let h = c ?? await this.regionProvider(), { longDate: l, shortDate: g } = this.formatDate(r);
      if (s > se) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      let p = D(g, h, A ?? this.service), E = oe(I(e), { unhoistableHeaders: a, hoistableHeaders: i });
      if (u.sessionToken) E.query[v] = u.sessionToken;
      E.query[Y] = _, E.query[K] = `${u.accessKeyId}/${p}`, E.query[m] = l, E.query[Q] = s.toString(10);
      let L = T(E, n, o);
      return E.query[j] = this.getCanonicalHeaderList(L), E.query[U] = await this.getSignature(l, p, this.getSigningKey(u, h, g, A), this.createCanonicalRequest(E, L, await H(e, this.sha256))), E;
    }
    async sign(e, t) {
      if (typeof e === "string") return this.signString(e, t);
      else if (e.headers && e.payload) return this.signEvent(e, t);
      else if (e.message) return this.signMessage(e, t);
      else return this.signRequest(e, t);
    }
    async signEvent({ headers: e, payload: t }, { signingDate: r = /* @__PURE__ */ new Date(), priorSignature: s, signingRegion: n, signingService: a }) {
      let o = n ?? await this.regionProvider(), { shortDate: i, longDate: c } = this.formatDate(r), A = D(i, o, a ?? this.service), u = await H({ headers: {}, body: t }, this.sha256), h = new this.sha256();
      h.update(e);
      let l = f.toHex(await h.digest()), g = [J, c, A, s, l, u].join(`
`);
      return this.signString(g, { signingDate: r, signingRegion: o, signingService: a });
    }
    async signMessage(e, { signingDate: t = /* @__PURE__ */ new Date(), signingRegion: r, signingService: s }) {
      return this.signEvent({ headers: this.headerFormatter.format(e.message.headers), payload: e.message.body }, { signingDate: t, signingRegion: r, signingService: s, priorSignature: e.priorSignature }).then((a) => ({ message: e.message, signature: a }));
    }
    async signString(e, { signingDate: t = /* @__PURE__ */ new Date(), signingRegion: r, signingService: s } = {}) {
      let n = await this.credentialProvider();
      this.validateResolvedCredentials(n);
      let a = r ?? await this.regionProvider(), { shortDate: o } = this.formatDate(t), i = new this.sha256(await this.getSigningKey(n, a, o, s));
      return i.update(d.toUint8Array(e)), f.toHex(await i.digest());
    }
    async signRequest(e, { signingDate: t = /* @__PURE__ */ new Date(), signableHeaders: r, unsignableHeaders: s, signingRegion: n, signingService: a } = {}) {
      let o = await this.credentialProvider();
      this.validateResolvedCredentials(o);
      let i = n ?? await this.regionProvider(), c = I(e), { longDate: A, shortDate: u } = this.formatDate(t), h = D(u, i, a ?? this.service);
      if (c.headers[P] = A, o.sessionToken) c.headers[X] = o.sessionToken;
      let l = await H(c, this.sha256);
      if (!ae(S, c.headers) && this.applyChecksum) c.headers[S] = l;
      let g = T(c, s, r), p = await this.getSignature(A, h, this.getSigningKey(o, i, u, a), this.createCanonicalRequest(c, g, l));
      return c.headers[x] = `${_} Credential=${o.accessKeyId}/${h}, SignedHeaders=${this.getCanonicalHeaderList(g)}, Signature=${p}`, c;
    }
    async getSignature(e, t, r, s) {
      let n = await this.createStringToSign(e, t, s, _), a = new this.sha256(await r);
      return a.update(d.toUint8Array(n)), f.toHex(await a.digest());
    }
    getSigningKey(e, t, r, s) {
      return re(this.sha256, e, r, t, s || this.service);
    }
  }
  var pe = { SignatureV4a: null };
  Re.ALGORITHM_IDENTIFIER = _;
  Re.ALGORITHM_IDENTIFIER_V4A = fe;
  Re.ALGORITHM_QUERY_PARAM = Y;
  Re.ALWAYS_UNSIGNABLE_HEADERS = F;
  Re.AMZ_DATE_HEADER = P;
  Re.AMZ_DATE_QUERY_PARAM = m;
  Re.AUTH_HEADER = x;
  Re.CREDENTIAL_QUERY_PARAM = K;
  Re.DATE_HEADER = q;
  Re.EVENT_ALGORITHM_IDENTIFIER = J;
  Re.EXPIRES_QUERY_PARAM = Q;
  Re.GENERATED_HEADERS = z;
  Re.HOST_HEADER = Ee;
  Re.KEY_TYPE_IDENTIFIER = N;
  Re.MAX_CACHE_SIZE = te;
  Re.MAX_PRESIGNED_TTL = se;
  Re.PROXY_HEADER_PATTERN = W;
  Re.REGION_SET_PARAM = Ae;
  Re.SEC_HEADER_PATTERN = Z;
  Re.SHA256_HEADER = S;
  Re.SIGNATURE_HEADER = B;
  Re.SIGNATURE_QUERY_PARAM = U;
  Re.SIGNED_HEADERS_QUERY_PARAM = j;
  Re.SignatureV4 = ce;
  Re.SignatureV4Base = C;
  Re.TOKEN_HEADER = X;
  Re.TOKEN_QUERY_PARAM = v;
  Re.UNSIGNABLE_PATTERNS = he;
  Re.UNSIGNED_PAYLOAD = ee;
  Re.clearCredentialCache = le;
  Re.createScope = D;
  Re.getCanonicalHeaders = T;
  Re.getCanonicalQuery = ie;
  Re.getPayloadHash = H;
  Re.getSigningKey = re;
  Re.hasHeader = ae;
  Re.moveHeadersToQuery = oe;
  Re.prepareRequest = I;
  Re.signatureV4aContainer = pe;
});
