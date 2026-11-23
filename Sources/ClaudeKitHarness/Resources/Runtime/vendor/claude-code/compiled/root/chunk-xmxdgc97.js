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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
var chunk_xmxdgc97_exports = {};
__export(chunk_xmxdgc97_exports, {
  DefaultAzureCredential: () => Qg,
  getBearerTokenProvider: () => iw
});
module.exports = __toCommonJS(chunk_xmxdgc97_exports);
var import_chunk_vppgpr94 = require("/$bunfs/root/chunk-vppgpr94.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_9s46yyz1 = require("/$bunfs/root/chunk-9s46yyz1.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_os = require("os");
var import_util = __toESM(require("util"));
var Wl = __toESM(require("process"));
var import_crypto = require("crypto");
var import_util2 = require("util");
var en = __toESM(require("http"));
var tn = __toESM(require("https"));
var di = __toESM(require("zlib"));
var import_stream = require("stream");
var import_stream2 = require("stream");
var on = __toESM(require("os"));
var pi = __toESM(require("process"));
var import_http = __toESM(require("http"));
var import_https = __toESM(require("https"));
var import_crypto2 = require("crypto");
var import_crypto3 = require("crypto");
var import_crypto4 = __toESM(require("crypto"));
var import_crypto5 = __toESM(require("crypto"));
var import_http2 = __toESM(require("http"));
var import_fs = require("fs");
var import_path = __toESM(require("path"));
var import_promises = require("fs/promises");
var import_child_process = __toESM(require("child_process"));
var import_child_process2 = __toESM(require("child_process"));
var Fg = __toESM(require("child_process"));
var import_crypto6 = require("crypto");
var import_promises2 = require("fs/promises");
var xd = (0, import_chunk_w1d7ygsk.V)(function(Ye) {
  var qy = Ye && Ye.__createBinding || (Object.create ? function(e, t, r, n) {
    if (n === void 0) n = r;
    var o = Object.getOwnPropertyDescriptor(t, r);
    if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) o = { enumerable: true, get: function() {
      return t[r];
    } };
    Object.defineProperty(e, n, o);
  } : function(e, t, r, n) {
    if (n === void 0) n = r;
    e[n] = t[r];
  }), zy = Ye && Ye.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  } : function(e, t) {
    e.default = t;
  }), Od = Ye && Ye.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) {
      for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) qy(t, e, r);
    }
    return zy(t, e), t;
  }, Gy = Ye && Ye.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(Ye, "__esModule", { value: true });
  Ye.HttpProxyAgent = void 0;
  var jy = Od((0, import_chunk_w1d7ygsk.ft)("net")), Vy = Od((0, import_chunk_w1d7ygsk.ft)("tls")), Ky = Gy((0, import_chunk_3jjr3wje.eMs)()), Nd = (0, import_chunk_w1d7ygsk.ft)("events"), Pd = (0, import_chunk_3jjr3wje.OXi)(), fi = (0, import_chunk_w1d7ygsk.ft)("url"), nn = (0, Ky.default)("http-proxy-agent");
  class Wa extends Pd.Agent {
    constructor(e, t) {
      super(t);
      this.proxy = typeof e === "string" ? new fi.URL(e) : e, this.proxyHeaders = t?.headers ?? {}, nn("Creating new HttpProxyAgent instance: %o", this.proxy.href);
      let r = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), n = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = { ...t ? Yy(t, "headers") : null, host: r, port: n };
    }
    addRequest(e, t) {
      e._header = null, this.setRequestProps(e, t), super.addRequest(e, t);
    }
    setRequestProps(e, t) {
      let { proxy: r } = this, n = t.secureEndpoint ? "https:" : "http:", o = e.getHeader("host") || "localhost", i = `${n}//${o}`, s = new fi.URL(e.path, i);
      if (t.port !== 80) s.port = String(t.port);
      e.path = String(s);
      let a = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
      if (r.username || r.password) {
        let c = `${decodeURIComponent(r.username)}:${decodeURIComponent(r.password)}`;
        a["Proxy-Authorization"] = `Basic ${Buffer.from(c).toString("base64")}`;
      }
      if (!a["Proxy-Connection"]) a["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let c of Object.keys(a)) {
        let l = a[c];
        if (l) e.setHeader(c, l);
      }
    }
    async connect(e, t) {
      if (e._header = null, !e.path.includes("://")) this.setRequestProps(e, t);
      let r, n;
      if (nn("Regenerating stored HTTP header string for request"), e._implicitHeader(), e.outputData && e.outputData.length > 0) nn("Patching connection write() output buffer with updated header"), r = e.outputData[0].data, n = r.indexOf(`\r
\r
`) + 4, e.outputData[0].data = e._header + r.substring(n), nn("Output buffer: %o", e.outputData[0].data);
      let o;
      if (this.proxy.protocol === "https:") nn("Creating `tls.Socket`: %o", this.connectOpts), o = Vy.connect(this.connectOpts);
      else nn("Creating `net.Socket`: %o", this.connectOpts), o = jy.connect(this.connectOpts);
      return await Nd.once(o, "connect"), o;
    }
  }
  Wa.protocols = ["http", "https"];
  Ye.HttpProxyAgent = Wa;
  function Yy(e, ...t) {
    let r = {}, n;
    for (n in e) if (!t.includes(n)) r[n] = e[n];
    return r;
  }
});
var uu = (0, import_chunk_w1d7ygsk.V)(function(lu) {
  Object.defineProperty(lu, "__esModule", { value: true });
  lu.state = void 0;
  lu.state = { instrumenterImplementation: void 0 };
});
var Iu = (0, import_chunk_w1d7ygsk.V)(function(Cu) {
  Object.defineProperty(Cu, "__esModule", { value: true });
  Cu.state = void 0;
  Cu.state = { operationRequestMap: /* @__PURE__ */ new WeakMap() };
});
var jc = (0, import_chunk_w1d7ygsk.V)(function(bq, Mf) {
  var ZT = (0, import_chunk_9s46yyz1.Rjn)();
  Mf.exports = function(e, t) {
    t = t || {};
    var r = ZT.decode(e, t);
    if (!r) return null;
    var n = r.payload;
    if (typeof n === "string") try {
      var o = JSON.parse(n);
      if (o !== null && typeof o === "object") n = o;
    } catch (i) {
    }
    if (t.complete === true) return { header: r.header, payload: n, signature: r.signature };
    return n;
  };
});
var qo = (0, import_chunk_w1d7ygsk.V)(function(Oq, Df) {
  var Ns = function(e, t) {
    if (Error.call(this, e), Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    if (this.name = "JsonWebTokenError", this.message = e, t) this.inner = t;
  };
  Ns.prototype = Object.create(Error.prototype);
  Ns.prototype.constructor = Ns;
  Df.exports = Ns;
});
var Vc = (0, import_chunk_w1d7ygsk.V)(function(Nq, Lf) {
  var Uf = qo(), Ps = function(e, t) {
    Uf.call(this, e), this.name = "NotBeforeError", this.date = t;
  };
  Ps.prototype = Object.create(Uf.prototype);
  Ps.prototype.constructor = Ps;
  Lf.exports = Ps;
});
var Kc = (0, import_chunk_w1d7ygsk.V)(function(Pq, $f) {
  var Hf = qo(), xs = function(e, t) {
    Hf.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t;
  };
  xs.prototype = Object.create(Hf.prototype);
  xs.prototype.constructor = xs;
  $f.exports = xs;
});
var Yc = (0, import_chunk_w1d7ygsk.V)(function(xq, Ff) {
  var eC = (0, import_chunk_3jjr3wje.PXi)();
  Ff.exports = function(e, t) {
    var r = t || Math.floor(Date.now() / 1e3);
    if (typeof e === "string") {
      var n = eC(e);
      if (typeof n > "u") return;
      return Math.floor(r + n / 1e3);
    } else if (typeof e === "number") return r + e;
    else return;
  };
});
var zo = (0, import_chunk_w1d7ygsk.V)(function(Mq, Bf) {
  var tC = Number.MAX_SAFE_INTEGER || 9007199254740991, rC = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  Bf.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH: 16, MAX_SAFE_BUILD_LENGTH: 250, MAX_SAFE_INTEGER: tC, RELEASE_TYPES: rC, SEMVER_SPEC_VERSION: "2.0.0", FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
});
var Go = (0, import_chunk_w1d7ygsk.V)(function(Dq, qf) {
  var nC = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  };
  qf.exports = nC;
});
var Kn = (0, import_chunk_w1d7ygsk.V)(function(Tt, zf) {
  var { MAX_SAFE_COMPONENT_LENGTH: Wc, MAX_SAFE_BUILD_LENGTH: oC, MAX_LENGTH: iC } = zo(), sC = Go();
  Tt = zf.exports = {};
  var aC = Tt.re = [], cC = Tt.safeRe = [], C = Tt.src = [], lC = Tt.safeSrc = [], A = Tt.t = {}, dC = 0, Qc = "[a-zA-Z0-9-]", uC = [["\\s", 1], ["\\d", iC], [Qc, oC]], hC = (e) => {
    for (let [t, r] of uC) e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
    return e;
  }, D = (e, t, r) => {
    let n = hC(t), o = dC++;
    sC(e, o, t), A[e] = o, C[o] = t, lC[o] = n, aC[o] = new RegExp(t, r ? "g" : void 0), cC[o] = new RegExp(n, r ? "g" : void 0);
  };
  D("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  D("NUMERICIDENTIFIERLOOSE", "\\d+");
  D("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${Qc}*`);
  D("MAINVERSION", `(${C[A.NUMERICIDENTIFIER]})\\.(${C[A.NUMERICIDENTIFIER]})\\.(${C[A.NUMERICIDENTIFIER]})`);
  D("MAINVERSIONLOOSE", `(${C[A.NUMERICIDENTIFIERLOOSE]})\\.(${C[A.NUMERICIDENTIFIERLOOSE]})\\.(${C[A.NUMERICIDENTIFIERLOOSE]})`);
  D("PRERELEASEIDENTIFIER", `(?:${C[A.NONNUMERICIDENTIFIER]}|${C[A.NUMERICIDENTIFIER]})`);
  D("PRERELEASEIDENTIFIERLOOSE", `(?:${C[A.NONNUMERICIDENTIFIER]}|${C[A.NUMERICIDENTIFIERLOOSE]})`);
  D("PRERELEASE", `(?:-(${C[A.PRERELEASEIDENTIFIER]}(?:\\.${C[A.PRERELEASEIDENTIFIER]})*))`);
  D("PRERELEASELOOSE", `(?:-?(${C[A.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${C[A.PRERELEASEIDENTIFIERLOOSE]})*))`);
  D("BUILDIDENTIFIER", `${Qc}+`);
  D("BUILD", `(?:\\+(${C[A.BUILDIDENTIFIER]}(?:\\.${C[A.BUILDIDENTIFIER]})*))`);
  D("FULLPLAIN", `v?${C[A.MAINVERSION]}${C[A.PRERELEASE]}?${C[A.BUILD]}?`);
  D("FULL", `^${C[A.FULLPLAIN]}$`);
  D("LOOSEPLAIN", `[v=\\s]*${C[A.MAINVERSIONLOOSE]}${C[A.PRERELEASELOOSE]}?${C[A.BUILD]}?`);
  D("LOOSE", `^${C[A.LOOSEPLAIN]}$`);
  D("GTLT", "((?:<|>)?=?)");
  D("XRANGEIDENTIFIERLOOSE", `${C[A.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  D("XRANGEIDENTIFIER", `${C[A.NUMERICIDENTIFIER]}|x|X|\\*`);
  D("XRANGEPLAIN", `[v=\\s]*(${C[A.XRANGEIDENTIFIER]})(?:\\.(${C[A.XRANGEIDENTIFIER]})(?:\\.(${C[A.XRANGEIDENTIFIER]})(?:${C[A.PRERELEASE]})?${C[A.BUILD]}?)?)?`);
  D("XRANGEPLAINLOOSE", `[v=\\s]*(${C[A.XRANGEIDENTIFIERLOOSE]})(?:\\.(${C[A.XRANGEIDENTIFIERLOOSE]})(?:\\.(${C[A.XRANGEIDENTIFIERLOOSE]})(?:${C[A.PRERELEASELOOSE]})?${C[A.BUILD]}?)?)?`);
  D("XRANGE", `^${C[A.GTLT]}\\s*${C[A.XRANGEPLAIN]}$`);
  D("XRANGELOOSE", `^${C[A.GTLT]}\\s*${C[A.XRANGEPLAINLOOSE]}$`);
  D("COERCEPLAIN", `(^|[^\\d])(\\d{1,${Wc}})(?:\\.(\\d{1,${Wc}}))?(?:\\.(\\d{1,${Wc}}))?`);
  D("COERCE", `${C[A.COERCEPLAIN]}(?:$|[^\\d])`);
  D("COERCEFULL", C[A.COERCEPLAIN] + `(?:${C[A.PRERELEASE]})?(?:${C[A.BUILD]})?(?:$|[^\\d])`);
  D("COERCERTL", C[A.COERCE], true);
  D("COERCERTLFULL", C[A.COERCEFULL], true);
  D("LONETILDE", "(?:~>?)");
  D("TILDETRIM", `(\\s*)${C[A.LONETILDE]}\\s+`, true);
  Tt.tildeTrimReplace = "$1~";
  D("TILDE", `^${C[A.LONETILDE]}${C[A.XRANGEPLAIN]}$`);
  D("TILDELOOSE", `^${C[A.LONETILDE]}${C[A.XRANGEPLAINLOOSE]}$`);
  D("LONECARET", "(?:\\^)");
  D("CARETTRIM", `(\\s*)${C[A.LONECARET]}\\s+`, true);
  Tt.caretTrimReplace = "$1^";
  D("CARET", `^${C[A.LONECARET]}${C[A.XRANGEPLAIN]}$`);
  D("CARETLOOSE", `^${C[A.LONECARET]}${C[A.XRANGEPLAINLOOSE]}$`);
  D("COMPARATORLOOSE", `^${C[A.GTLT]}\\s*(${C[A.LOOSEPLAIN]})$|^$`);
  D("COMPARATOR", `^${C[A.GTLT]}\\s*(${C[A.FULLPLAIN]})$|^$`);
  D("COMPARATORTRIM", `(\\s*)${C[A.GTLT]}\\s*(${C[A.LOOSEPLAIN]}|${C[A.XRANGEPLAIN]})`, true);
  Tt.comparatorTrimReplace = "$1$2$3";
  D("HYPHENRANGE", `^\\s*(${C[A.XRANGEPLAIN]})\\s+-\\s+(${C[A.XRANGEPLAIN]})\\s*$`);
  D("HYPHENRANGELOOSE", `^\\s*(${C[A.XRANGEPLAINLOOSE]})\\s+-\\s+(${C[A.XRANGEPLAINLOOSE]})\\s*$`);
  D("STAR", "(<|>)?=?\\s*\\*");
  D("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  D("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var Ms = (0, import_chunk_w1d7ygsk.V)(function(Uq, Gf) {
  var fC = Object.freeze({ loose: true }), mC = Object.freeze({}), pC = (e) => {
    if (!e) return mC;
    if (typeof e !== "object") return fC;
    return e;
  };
  Gf.exports = pC;
});
var Xc = (0, import_chunk_w1d7ygsk.V)(function(Lq, Kf) {
  var jf = /^[0-9]+$/, Vf = (e, t) => {
    if (typeof e === "number" && typeof t === "number") return e === t ? 0 : e < t ? -1 : 1;
    let r = jf.test(e), n = jf.test(t);
    if (r && n) e = +e, t = +t;
    return e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
  }, gC = (e, t) => Vf(t, e);
  Kf.exports = { compareIdentifiers: Vf, rcompareIdentifiers: gC };
});
var _e = (0, import_chunk_w1d7ygsk.V)(function(Hq, Wf) {
  var Ds = Go(), { MAX_LENGTH: Yf, MAX_SAFE_INTEGER: Us } = zo(), { safeRe: Ls, t: Hs } = Kn(), yC = Ms(), { compareIdentifiers: Jc } = Xc();
  class ct {
    constructor(e, t) {
      if (t = yC(t), e instanceof ct) if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
      else e = e.version;
      else if (typeof e !== "string") throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
      if (e.length > Yf) throw TypeError(`version is longer than ${Yf} characters`);
      Ds("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
      let r = e.trim().match(t.loose ? Ls[Hs.LOOSE] : Ls[Hs.FULL]);
      if (!r) throw TypeError(`Invalid Version: ${e}`);
      if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Us || this.major < 0) throw TypeError("Invalid major version");
      if (this.minor > Us || this.minor < 0) throw TypeError("Invalid minor version");
      if (this.patch > Us || this.patch < 0) throw TypeError("Invalid patch version");
      if (!r[4]) this.prerelease = [];
      else this.prerelease = r[4].split(".").map((n) => {
        if (/^[0-9]+$/.test(n)) {
          let o = +n;
          if (o >= 0 && o < Us) return o;
        }
        return n;
      });
      this.build = r[5] ? r[5].split(".") : [], this.format();
    }
    format() {
      if (this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length) this.version += `-${this.prerelease.join(".")}`;
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(e) {
      if (Ds("SemVer.compare", this.version, this.options, e), !(e instanceof ct)) {
        if (typeof e === "string" && e === this.version) return 0;
        e = new ct(e, this.options);
      }
      if (e.version === this.version) return 0;
      return this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      if (!(e instanceof ct)) e = new ct(e, this.options);
      if (this.major < e.major) return -1;
      if (this.major > e.major) return 1;
      if (this.minor < e.minor) return -1;
      if (this.minor > e.minor) return 1;
      if (this.patch < e.patch) return -1;
      if (this.patch > e.patch) return 1;
      return 0;
    }
    comparePre(e) {
      if (!(e instanceof ct)) e = new ct(e, this.options);
      if (this.prerelease.length && !e.prerelease.length) return -1;
      else if (!this.prerelease.length && e.prerelease.length) return 1;
      else if (!this.prerelease.length && !e.prerelease.length) return 0;
      let t = 0;
      do {
        let r = this.prerelease[t], n = e.prerelease[t];
        if (Ds("prerelease compare", t, r, n), r === void 0 && n === void 0) return 0;
        else if (n === void 0) return 1;
        else if (r === void 0) return -1;
        else if (r === n) continue;
        else return Jc(r, n);
      } while (++t);
    }
    compareBuild(e) {
      if (!(e instanceof ct)) e = new ct(e, this.options);
      let t = 0;
      do {
        let r = this.build[t], n = e.build[t];
        if (Ds("build compare", t, r, n), r === void 0 && n === void 0) return 0;
        else if (n === void 0) return 1;
        else if (r === void 0) return -1;
        else if (r === n) continue;
        else return Jc(r, n);
      } while (++t);
    }
    inc(e, t, r) {
      if (e.startsWith("pre")) {
        if (!t && r === false) throw Error("invalid increment argument: identifier is empty");
        if (t) {
          let n = `-${t}`.match(this.options.loose ? Ls[Hs.PRERELEASELOOSE] : Ls[Hs.PRERELEASE]);
          if (!n || n[1] !== t) throw Error(`invalid identifier: ${t}`);
        }
      }
      switch (e) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, r);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, r);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", t, r), this.inc("pre", t, r);
          break;
        case "prerelease":
          if (this.prerelease.length === 0) this.inc("patch", t, r);
          this.inc("pre", t, r);
          break;
        case "release":
          if (this.prerelease.length === 0) throw Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
          this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
          this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) this.patch++;
          this.prerelease = [];
          break;
        case "pre": {
          let n = Number(r) ? 1 : 0;
          if (this.prerelease.length === 0) this.prerelease = [n];
          else {
            let o = this.prerelease.length;
            while (--o >= 0) if (typeof this.prerelease[o] === "number") this.prerelease[o]++, o = -2;
            if (o === -1) {
              if (t === this.prerelease.join(".") && r === false) throw Error("invalid increment argument: identifier already exists");
              this.prerelease.push(n);
            }
          }
          if (t) {
            let o = [t, n];
            if (r === false) o = [t];
            if (Jc(this.prerelease[0], t) === 0) {
              if (isNaN(this.prerelease[1])) this.prerelease = o;
            } else this.prerelease = o;
          }
          break;
        }
        default:
          throw Error(`invalid increment argument: ${e}`);
      }
      if (this.raw = this.format(), this.build.length) this.raw += `+${this.build.join(".")}`;
      return this;
    }
  }
  Wf.exports = ct;
});
var qr = (0, import_chunk_w1d7ygsk.V)(function($q, Xf) {
  var Qf = _e(), EC = (e, t, r = false) => {
    if (e instanceof Qf) return e;
    try {
      return new Qf(e, t);
    } catch (n) {
      if (!r) return null;
      throw n;
    }
  };
  Xf.exports = EC;
});
var Zf = (0, import_chunk_w1d7ygsk.V)(function(Fq, Jf) {
  var TC = qr(), CC = (e, t) => {
    let r = TC(e, t);
    return r ? r.version : null;
  };
  Jf.exports = CC;
});
var tm = (0, import_chunk_w1d7ygsk.V)(function(Bq, em) {
  var AC = qr(), IC = (e, t) => {
    let r = AC(e.trim().replace(/^[=v]+/, ""), t);
    return r ? r.version : null;
  };
  em.exports = IC;
});
var om = (0, import_chunk_w1d7ygsk.V)(function(qq, nm) {
  var rm = _e(), _C = (e, t, r, n, o) => {
    if (typeof r === "string") o = n, n = r, r = void 0;
    try {
      return new rm(e instanceof rm ? e.version : e, r).inc(t, n, o).version;
    } catch (i) {
      return null;
    }
  };
  nm.exports = _C;
});
var am = (0, import_chunk_w1d7ygsk.V)(function(zq, sm) {
  var im = qr(), SC = (e, t) => {
    let r = im(e, null, true), n = im(t, null, true), o = r.compare(n);
    if (o === 0) return null;
    let i = o > 0, s = i ? r : n, a = i ? n : r, c = !!s.prerelease.length;
    if (!!a.prerelease.length && !c) {
      if (!a.patch && !a.minor) return "major";
      if (a.compareMain(s) === 0) {
        if (a.minor && !a.patch) return "minor";
        return "patch";
      }
    }
    let d = c ? "pre" : "";
    if (r.major !== n.major) return d + "major";
    if (r.minor !== n.minor) return d + "minor";
    if (r.patch !== n.patch) return d + "patch";
    return "prerelease";
  };
  sm.exports = SC;
});
var lm = (0, import_chunk_w1d7ygsk.V)(function(Gq, cm) {
  var RC = _e(), wC = (e, t) => new RC(e, t).major;
  cm.exports = wC;
});
var um = (0, import_chunk_w1d7ygsk.V)(function(jq, dm) {
  var vC = _e(), kC = (e, t) => new vC(e, t).minor;
  dm.exports = kC;
});
var fm = (0, import_chunk_w1d7ygsk.V)(function(Vq, hm) {
  var bC = _e(), OC = (e, t) => new bC(e, t).patch;
  hm.exports = OC;
});
var pm = (0, import_chunk_w1d7ygsk.V)(function(Kq, mm) {
  var NC = qr(), PC = (e, t) => {
    let r = NC(e, t);
    return r && r.prerelease.length ? r.prerelease : null;
  };
  mm.exports = PC;
});
var Je = (0, import_chunk_w1d7ygsk.V)(function(Yq, ym) {
  var gm = _e(), xC = (e, t, r) => new gm(e, r).compare(new gm(t, r));
  ym.exports = xC;
});
var Tm = (0, import_chunk_w1d7ygsk.V)(function(Wq, Em) {
  var MC = Je(), DC = (e, t, r) => MC(t, e, r);
  Em.exports = DC;
});
var Am = (0, import_chunk_w1d7ygsk.V)(function(Qq, Cm) {
  var UC = Je(), LC = (e, t) => UC(e, t, true);
  Cm.exports = LC;
});
var $s = (0, import_chunk_w1d7ygsk.V)(function(Xq, _m) {
  var Im = _e(), HC = (e, t, r) => {
    let n = new Im(e, r), o = new Im(t, r);
    return n.compare(o) || n.compareBuild(o);
  };
  _m.exports = HC;
});
var Rm = (0, import_chunk_w1d7ygsk.V)(function(Jq, Sm) {
  var $C = $s(), FC = (e, t) => e.sort((r, n) => $C(r, n, t));
  Sm.exports = FC;
});
var vm = (0, import_chunk_w1d7ygsk.V)(function(Zq, wm) {
  var BC = $s(), qC = (e, t) => e.sort((r, n) => BC(n, r, t));
  wm.exports = qC;
});
var jo = (0, import_chunk_w1d7ygsk.V)(function(ez, km) {
  var zC = Je(), GC = (e, t, r) => zC(e, t, r) > 0;
  km.exports = GC;
});
var Fs = (0, import_chunk_w1d7ygsk.V)(function(tz, bm) {
  var jC = Je(), VC = (e, t, r) => jC(e, t, r) < 0;
  bm.exports = VC;
});
var Zc = (0, import_chunk_w1d7ygsk.V)(function(rz, Om) {
  var KC = Je(), YC = (e, t, r) => KC(e, t, r) === 0;
  Om.exports = YC;
});
var el = (0, import_chunk_w1d7ygsk.V)(function(nz, Nm) {
  var WC = Je(), QC = (e, t, r) => WC(e, t, r) !== 0;
  Nm.exports = QC;
});
var Bs = (0, import_chunk_w1d7ygsk.V)(function(oz, Pm) {
  var XC = Je(), JC = (e, t, r) => XC(e, t, r) >= 0;
  Pm.exports = JC;
});
var qs = (0, import_chunk_w1d7ygsk.V)(function(iz, xm) {
  var ZC = Je(), eA = (e, t, r) => ZC(e, t, r) <= 0;
  xm.exports = eA;
});
var tl = (0, import_chunk_w1d7ygsk.V)(function(sz, Mm) {
  var tA = Zc(), rA = el(), nA = jo(), oA = Bs(), iA = Fs(), sA = qs(), aA = (e, t, r, n) => {
    switch (t) {
      case "===":
        if (typeof e === "object") e = e.version;
        if (typeof r === "object") r = r.version;
        return e === r;
      case "!==":
        if (typeof e === "object") e = e.version;
        if (typeof r === "object") r = r.version;
        return e !== r;
      case "":
      case "=":
      case "==":
        return tA(e, r, n);
      case "!=":
        return rA(e, r, n);
      case ">":
        return nA(e, r, n);
      case ">=":
        return oA(e, r, n);
      case "<":
        return iA(e, r, n);
      case "<=":
        return sA(e, r, n);
      default:
        throw TypeError(`Invalid operator: ${t}`);
    }
  };
  Mm.exports = aA;
});
var Um = (0, import_chunk_w1d7ygsk.V)(function(az, Dm) {
  var cA = _e(), lA = qr(), { safeRe: zs, t: Gs } = Kn(), dA = (e, t) => {
    if (e instanceof cA) return e;
    if (typeof e === "number") e = String(e);
    if (typeof e !== "string") return null;
    t = t || {};
    let r = null;
    if (!t.rtl) r = e.match(t.includePrerelease ? zs[Gs.COERCEFULL] : zs[Gs.COERCE]);
    else {
      let c = t.includePrerelease ? zs[Gs.COERCERTLFULL] : zs[Gs.COERCERTL], l;
      while ((l = c.exec(e)) && (!r || r.index + r[0].length !== e.length)) {
        if (!r || l.index + l[0].length !== r.index + r[0].length) r = l;
        c.lastIndex = l.index + l[1].length + l[2].length;
      }
      c.lastIndex = -1;
    }
    if (r === null) return null;
    let n = r[2], o = r[3] || "0", i = r[4] || "0", s = t.includePrerelease && r[5] ? `-${r[5]}` : "", a = t.includePrerelease && r[6] ? `+${r[6]}` : "";
    return lA(`${n}.${o}.${i}${s}${a}`, t);
  };
  Dm.exports = dA;
});
var $m = (0, import_chunk_w1d7ygsk.V)(function(cz, Hm) {
  class Lm {
    constructor() {
      this.max = 1e3, this.map = /* @__PURE__ */ new Map();
    }
    get(e) {
      let t = this.map.get(e);
      if (t === void 0) return;
      else return this.map.delete(e), this.map.set(e, t), t;
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, t) {
      if (!this.delete(e) && t !== void 0) {
        if (this.map.size >= this.max) {
          let n = this.map.keys().next().value;
          this.delete(n);
        }
        this.map.set(e, t);
      }
      return this;
    }
  }
  Hm.exports = Lm;
});
var Ze = (0, import_chunk_w1d7ygsk.V)(function(lz, zm) {
  var uA = /\s+/g;
  class Vo {
    constructor(e, t) {
      if (t = fA(t), e instanceof Vo) if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
      else return new Vo(e.raw, t);
      if (e instanceof js) return this.raw = e.value, this.set = [[e]], this.formatted = void 0, this;
      if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().replace(uA, " "), this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((r) => r.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let r = this.set[0];
        if (this.set = this.set.filter((n) => !Bm(n[0])), this.set.length === 0) this.set = [r];
        else if (this.set.length > 1) {
          for (let n of this.set) if (n.length === 1 && CA(n[0])) {
            this.set = [n];
            break;
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let e = 0; e < this.set.length; e++) {
          if (e > 0) this.formatted += "||";
          let t = this.set[e];
          for (let r = 0; r < t.length; r++) {
            if (r > 0) this.formatted += " ";
            this.formatted += t[r].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(e) {
      let r = ((this.options.includePrerelease && EA) | (this.options.loose && TA)) + ":" + e, n = Fm.get(r);
      if (n) return n;
      let o = this.options.loose, i = o ? Ne[Se.HYPHENRANGELOOSE] : Ne[Se.HYPHENRANGE];
      e = e.replace(i, OA(this.options.includePrerelease)), te("hyphen replace", e), e = e.replace(Ne[Se.COMPARATORTRIM], pA), te("comparator trim", e), e = e.replace(Ne[Se.TILDETRIM], gA), te("tilde trim", e), e = e.replace(Ne[Se.CARETTRIM], yA), te("caret trim", e);
      let s = e.split(" ").map((d) => AA(d, this.options)).join(" ").split(/\s+/).map((d) => bA(d, this.options));
      if (o) s = s.filter((d) => (te("loose invalid filter", d, this.options), !!d.match(Ne[Se.COMPARATORLOOSE])));
      te("range list", s);
      let a = /* @__PURE__ */ new Map(), c = s.map((d) => new js(d, this.options));
      for (let d of c) {
        if (Bm(d)) return [d];
        a.set(d.value, d);
      }
      if (a.size > 1 && a.has("")) a.delete("");
      let l = [...a.values()];
      return Fm.set(r, l), l;
    }
    intersects(e, t) {
      if (!(e instanceof Vo)) throw TypeError("a Range is required");
      return this.set.some((r) => qm(r, t) && e.set.some((n) => qm(n, t) && r.every((o) => n.every((i) => o.intersects(i, t)))));
    }
    test(e) {
      if (!e) return false;
      if (typeof e === "string") try {
        e = new mA(e, this.options);
      } catch (t) {
        return false;
      }
      for (let t = 0; t < this.set.length; t++) if (NA(this.set[t], e, this.options)) return true;
      return false;
    }
  }
  zm.exports = Vo;
  var hA = $m(), Fm = new hA(), fA = Ms(), js = Ko(), te = Go(), mA = _e(), { safeRe: Ne, t: Se, comparatorTrimReplace: pA, tildeTrimReplace: gA, caretTrimReplace: yA } = Kn(), { FLAG_INCLUDE_PRERELEASE: EA, FLAG_LOOSE: TA } = zo(), Bm = (e) => e.value === "<0.0.0-0", CA = (e) => e.value === "", qm = (e, t) => {
    let r = true, n = e.slice(), o = n.pop();
    while (r && n.length) r = n.every((i) => o.intersects(i, t)), o = n.pop();
    return r;
  }, AA = (e, t) => (e = e.replace(Ne[Se.BUILD], ""), te("comp", e, t), e = SA(e, t), te("caret", e), e = IA(e, t), te("tildes", e), e = wA(e, t), te("xrange", e), e = kA(e, t), te("stars", e), e), Pe = (e) => !e || e.toLowerCase() === "x" || e === "*", IA = (e, t) => e.trim().split(/\s+/).map((r) => _A(r, t)).join(" "), _A = (e, t) => {
    let r = t.loose ? Ne[Se.TILDELOOSE] : Ne[Se.TILDE];
    return e.replace(r, (n, o, i, s, a) => {
      te("tilde", e, n, o, i, s, a);
      let c;
      if (Pe(o)) c = "";
      else if (Pe(i)) c = `>=${o}.0.0 <${+o + 1}.0.0-0`;
      else if (Pe(s)) c = `>=${o}.${i}.0 <${o}.${+i + 1}.0-0`;
      else if (a) te("replaceTilde pr", a), c = `>=${o}.${i}.${s}-${a} <${o}.${+i + 1}.0-0`;
      else c = `>=${o}.${i}.${s} <${o}.${+i + 1}.0-0`;
      return te("tilde return", c), c;
    });
  }, SA = (e, t) => e.trim().split(/\s+/).map((r) => RA(r, t)).join(" "), RA = (e, t) => {
    te("caret", e, t);
    let r = t.loose ? Ne[Se.CARETLOOSE] : Ne[Se.CARET], n = t.includePrerelease ? "-0" : "";
    return e.replace(r, (o, i, s, a, c) => {
      te("caret", e, o, i, s, a, c);
      let l;
      if (Pe(i)) l = "";
      else if (Pe(s)) l = `>=${i}.0.0${n} <${+i + 1}.0.0-0`;
      else if (Pe(a)) if (i === "0") l = `>=${i}.${s}.0${n} <${i}.${+s + 1}.0-0`;
      else l = `>=${i}.${s}.0${n} <${+i + 1}.0.0-0`;
      else if (c) if (te("replaceCaret pr", c), i === "0") if (s === "0") l = `>=${i}.${s}.${a}-${c} <${i}.${s}.${+a + 1}-0`;
      else l = `>=${i}.${s}.${a}-${c} <${i}.${+s + 1}.0-0`;
      else l = `>=${i}.${s}.${a}-${c} <${+i + 1}.0.0-0`;
      else if (te("no pr"), i === "0") if (s === "0") l = `>=${i}.${s}.${a}${n} <${i}.${s}.${+a + 1}-0`;
      else l = `>=${i}.${s}.${a}${n} <${i}.${+s + 1}.0-0`;
      else l = `>=${i}.${s}.${a} <${+i + 1}.0.0-0`;
      return te("caret return", l), l;
    });
  }, wA = (e, t) => (te("replaceXRanges", e, t), e.split(/\s+/).map((r) => vA(r, t)).join(" ")), vA = (e, t) => {
    e = e.trim();
    let r = t.loose ? Ne[Se.XRANGELOOSE] : Ne[Se.XRANGE];
    return e.replace(r, (n, o, i, s, a, c) => {
      te("xRange", e, n, o, i, s, a, c);
      let l = Pe(i), d = l || Pe(s), u = d || Pe(a), m = u;
      if (o === "=" && m) o = "";
      if (c = t.includePrerelease ? "-0" : "", l) if (o === ">" || o === "<") n = "<0.0.0-0";
      else n = "*";
      else if (o && m) {
        if (d) s = 0;
        if (a = 0, o === ">") if (o = ">=", d) i = +i + 1, s = 0, a = 0;
        else s = +s + 1, a = 0;
        else if (o === "<=") if (o = "<", d) i = +i + 1;
        else s = +s + 1;
        if (o === "<") c = "-0";
        n = `${o + i}.${s}.${a}${c}`;
      } else if (d) n = `>=${i}.0.0${c} <${+i + 1}.0.0-0`;
      else if (u) n = `>=${i}.${s}.0${c} <${i}.${+s + 1}.0-0`;
      return te("xRange return", n), n;
    });
  }, kA = (e, t) => (te("replaceStars", e, t), e.trim().replace(Ne[Se.STAR], "")), bA = (e, t) => (te("replaceGTE0", e, t), e.trim().replace(Ne[t.includePrerelease ? Se.GTE0PRE : Se.GTE0], "")), OA = (e) => (t, r, n, o, i, s, a, c, l, d, u, m) => {
    if (Pe(n)) r = "";
    else if (Pe(o)) r = `>=${n}.0.0${e ? "-0" : ""}`;
    else if (Pe(i)) r = `>=${n}.${o}.0${e ? "-0" : ""}`;
    else if (s) r = `>=${r}`;
    else r = `>=${r}${e ? "-0" : ""}`;
    if (Pe(l)) c = "";
    else if (Pe(d)) c = `<${+l + 1}.0.0-0`;
    else if (Pe(u)) c = `<${l}.${+d + 1}.0-0`;
    else if (m) c = `<=${l}.${d}.${u}-${m}`;
    else if (e) c = `<${l}.${d}.${+u + 1}-0`;
    else c = `<=${c}`;
    return `${r} ${c}`.trim();
  }, NA = (e, t, r) => {
    for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return false;
    if (t.prerelease.length && !r.includePrerelease) {
      for (let n = 0; n < e.length; n++) {
        if (te(e[n].semver), e[n].semver === js.ANY) continue;
        if (e[n].semver.prerelease.length > 0) {
          let o = e[n].semver;
          if (o.major === t.major && o.minor === t.minor && o.patch === t.patch) return true;
        }
      }
      return false;
    }
    return true;
  };
});
var Ko = (0, import_chunk_w1d7ygsk.V)(function(dz, Wm) {
  var Yo = Symbol("SemVer ANY");
  class Vs {
    static get ANY() {
      return Yo;
    }
    constructor(e, t) {
      if (t = Gm(t), e instanceof Vs) if (e.loose === !!t.loose) return e;
      else e = e.value;
      if (e = e.trim().split(/\s+/).join(" "), nl("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === Yo) this.value = "";
      else this.value = this.operator + this.semver.version;
      nl("comp", this);
    }
    parse(e) {
      let t = this.options.loose ? jm[Vm.COMPARATORLOOSE] : jm[Vm.COMPARATOR], r = e.match(t);
      if (!r) throw TypeError(`Invalid comparator: ${e}`);
      if (this.operator = r[1] !== void 0 ? r[1] : "", this.operator === "=") this.operator = "";
      if (!r[2]) this.semver = Yo;
      else this.semver = new Km(r[2], this.options.loose);
    }
    toString() {
      return this.value;
    }
    test(e) {
      if (nl("Comparator.test", e, this.options.loose), this.semver === Yo || e === Yo) return true;
      if (typeof e === "string") try {
        e = new Km(e, this.options);
      } catch (t) {
        return false;
      }
      return rl(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
      if (!(e instanceof Vs)) throw TypeError("a Comparator is required");
      if (this.operator === "") {
        if (this.value === "") return true;
        return new Ym(e.value, t).test(this.value);
      } else if (e.operator === "") {
        if (e.value === "") return true;
        return new Ym(this.value, t).test(e.semver);
      }
      if (t = Gm(t), t.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0")) return false;
      if (!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) return false;
      if (this.operator.startsWith(">") && e.operator.startsWith(">")) return true;
      if (this.operator.startsWith("<") && e.operator.startsWith("<")) return true;
      if (this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=")) return true;
      if (rl(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) return true;
      if (rl(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")) return true;
      return false;
    }
  }
  Wm.exports = Vs;
  var Gm = Ms(), { safeRe: jm, t: Vm } = Kn(), rl = tl(), nl = Go(), Km = _e(), Ym = Ze();
});
var Wo = (0, import_chunk_w1d7ygsk.V)(function(uz, Qm) {
  var PA = Ze(), xA = (e, t, r) => {
    try {
      t = new PA(t, r);
    } catch (n) {
      return false;
    }
    return t.test(e);
  };
  Qm.exports = xA;
});
var Jm = (0, import_chunk_w1d7ygsk.V)(function(hz, Xm) {
  var MA = Ze(), DA = (e, t) => new MA(e, t).set.map((r) => r.map((n) => n.value).join(" ").trim().split(" "));
  Xm.exports = DA;
});
var ep = (0, import_chunk_w1d7ygsk.V)(function(fz, Zm) {
  var UA = _e(), LA = Ze(), HA = (e, t, r) => {
    let n = null, o = null, i = null;
    try {
      i = new LA(t, r);
    } catch (s) {
      return null;
    }
    return e.forEach((s) => {
      if (i.test(s)) {
        if (!n || o.compare(s) === -1) n = s, o = new UA(n, r);
      }
    }), n;
  };
  Zm.exports = HA;
});
var rp = (0, import_chunk_w1d7ygsk.V)(function(mz, tp) {
  var $A = _e(), FA = Ze(), BA = (e, t, r) => {
    let n = null, o = null, i = null;
    try {
      i = new FA(t, r);
    } catch (s) {
      return null;
    }
    return e.forEach((s) => {
      if (i.test(s)) {
        if (!n || o.compare(s) === 1) n = s, o = new $A(n, r);
      }
    }), n;
  };
  tp.exports = BA;
});
var ip = (0, import_chunk_w1d7ygsk.V)(function(pz, op) {
  var ol = _e(), qA = Ze(), np = jo(), zA = (e, t) => {
    e = new qA(e, t);
    let r = new ol("0.0.0");
    if (e.test(r)) return r;
    if (r = new ol("0.0.0-0"), e.test(r)) return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
      let o = e.set[n], i = null;
      if (o.forEach((s) => {
        let a = new ol(s.semver.version);
        switch (s.operator) {
          case ">":
            if (a.prerelease.length === 0) a.patch++;
            else a.prerelease.push(0);
            a.raw = a.format();
          case "":
          case ">=":
            if (!i || np(a, i)) i = a;
            break;
          case "<":
          case "<=":
            break;
          default:
            throw Error(`Unexpected operation: ${s.operator}`);
        }
      }), i && (!r || np(r, i))) r = i;
    }
    if (r && e.test(r)) return r;
    return null;
  };
  op.exports = zA;
});
var ap = (0, import_chunk_w1d7ygsk.V)(function(gz, sp) {
  var GA = Ze(), jA = (e, t) => {
    try {
      return new GA(e, t).range || "*";
    } catch (r) {
      return null;
    }
  };
  sp.exports = jA;
});
var Ks = (0, import_chunk_w1d7ygsk.V)(function(yz, up) {
  var VA = _e(), dp = Ko(), { ANY: KA } = dp, YA = Ze(), WA = Wo(), cp = jo(), lp = Fs(), QA = qs(), XA = Bs(), JA = (e, t, r, n) => {
    e = new VA(e, n), t = new YA(t, n);
    let o, i, s, a, c;
    switch (r) {
      case ">":
        o = cp, i = QA, s = lp, a = ">", c = ">=";
        break;
      case "<":
        o = lp, i = XA, s = cp, a = "<", c = "<=";
        break;
      default:
        throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (WA(e, t, n)) return false;
    for (let l = 0; l < t.set.length; ++l) {
      let d = t.set[l], u = null, m = null;
      if (d.forEach((h) => {
        if (h.semver === KA) h = new dp(">=0.0.0");
        if (u = u || h, m = m || h, o(h.semver, u.semver, n)) u = h;
        else if (s(h.semver, m.semver, n)) m = h;
      }), u.operator === a || u.operator === c) return false;
      if ((!m.operator || m.operator === a) && i(e, m.semver)) return false;
      else if (m.operator === c && s(e, m.semver)) return false;
    }
    return true;
  };
  up.exports = JA;
});
var fp = (0, import_chunk_w1d7ygsk.V)(function(Ez, hp) {
  var ZA = Ks(), eI = (e, t, r) => ZA(e, t, ">", r);
  hp.exports = eI;
});
var pp = (0, import_chunk_w1d7ygsk.V)(function(Tz, mp) {
  var tI = Ks(), rI = (e, t, r) => tI(e, t, "<", r);
  mp.exports = rI;
});
var Ep = (0, import_chunk_w1d7ygsk.V)(function(Cz, yp) {
  var gp = Ze(), nI = (e, t, r) => (e = new gp(e, r), t = new gp(t, r), e.intersects(t, r));
  yp.exports = nI;
});
var Cp = (0, import_chunk_w1d7ygsk.V)(function(Az, Tp) {
  var oI = Wo(), iI = Je();
  Tp.exports = (e, t, r) => {
    let n = [], o = null, i = null, s = e.sort((d, u) => iI(d, u, r));
    for (let d of s) if (oI(d, t, r)) {
      if (i = d, !o) o = d;
    } else {
      if (i) n.push([o, i]);
      i = null, o = null;
    }
    if (o) n.push([o, null]);
    let a = [];
    for (let [d, u] of n) if (d === u) a.push(d);
    else if (!u && d === s[0]) a.push("*");
    else if (!u) a.push(`>=${d}`);
    else if (d === s[0]) a.push(`<=${u}`);
    else a.push(`${d} - ${u}`);
    let c = a.join(" || "), l = typeof t.raw === "string" ? t.raw : String(t);
    return c.length < l.length ? c : t;
  };
});
var wp = (0, import_chunk_w1d7ygsk.V)(function(Iz, Rp) {
  var Ap = Ze(), sl = Ko(), { ANY: il } = sl, Qo = Wo(), al = Je(), sI = (e, t, r = {}) => {
    if (e === t) return true;
    e = new Ap(e, r), t = new Ap(t, r);
    let n = false;
    e: for (let o of e.set) {
      for (let i of t.set) {
        let s = cI(o, i, r);
        if (n = n || s !== null, s) continue e;
      }
      if (n) return false;
    }
    return true;
  }, aI = [new sl(">=0.0.0-0")], Ip = [new sl(">=0.0.0")], cI = (e, t, r) => {
    if (e === t) return true;
    if (e.length === 1 && e[0].semver === il) if (t.length === 1 && t[0].semver === il) return true;
    else if (r.includePrerelease) e = aI;
    else e = Ip;
    if (t.length === 1 && t[0].semver === il) if (r.includePrerelease) return true;
    else t = Ip;
    let n = /* @__PURE__ */ new Set(), o, i;
    for (let h of e) if (h.operator === ">" || h.operator === ">=") o = _p(o, h, r);
    else if (h.operator === "<" || h.operator === "<=") i = Sp(i, h, r);
    else n.add(h.semver);
    if (n.size > 1) return null;
    let s;
    if (o && i) {
      if (s = al(o.semver, i.semver, r), s > 0) return null;
      else if (s === 0 && (o.operator !== ">=" || i.operator !== "<=")) return null;
    }
    for (let h of n) {
      if (o && !Qo(h, String(o), r)) return null;
      if (i && !Qo(h, String(i), r)) return null;
      for (let y of t) if (!Qo(h, String(y), r)) return false;
      return true;
    }
    let a, c, l, d, u = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : false, m = o && !r.includePrerelease && o.semver.prerelease.length ? o.semver : false;
    if (u && u.prerelease.length === 1 && i.operator === "<" && u.prerelease[0] === 0) u = false;
    for (let h of t) {
      if (d = d || h.operator === ">" || h.operator === ">=", l = l || h.operator === "<" || h.operator === "<=", o) {
        if (m) {
          if (h.semver.prerelease && h.semver.prerelease.length && h.semver.major === m.major && h.semver.minor === m.minor && h.semver.patch === m.patch) m = false;
        }
        if (h.operator === ">" || h.operator === ">=") {
          if (a = _p(o, h, r), a === h && a !== o) return false;
        } else if (o.operator === ">=" && !Qo(o.semver, String(h), r)) return false;
      }
      if (i) {
        if (u) {
          if (h.semver.prerelease && h.semver.prerelease.length && h.semver.major === u.major && h.semver.minor === u.minor && h.semver.patch === u.patch) u = false;
        }
        if (h.operator === "<" || h.operator === "<=") {
          if (c = Sp(i, h, r), c === h && c !== i) return false;
        } else if (i.operator === "<=" && !Qo(i.semver, String(h), r)) return false;
      }
      if (!h.operator && (i || o) && s !== 0) return false;
    }
    if (o && l && !i && s !== 0) return false;
    if (i && d && !o && s !== 0) return false;
    if (m || u) return false;
    return true;
  }, _p = (e, t, r) => {
    if (!e) return t;
    let n = al(e.semver, t.semver, r);
    return n > 0 ? e : n < 0 ? t : t.operator === ">" && e.operator === ">=" ? t : e;
  }, Sp = (e, t, r) => {
    if (!e) return t;
    let n = al(e.semver, t.semver, r);
    return n < 0 ? e : n > 0 ? t : t.operator === "<" && e.operator === "<=" ? t : e;
  };
  Rp.exports = sI;
});
var Qs = (0, import_chunk_w1d7ygsk.V)(function(_z, vp) {
  var Yn = Kn(), Ys = zo(), lI = _e(), Ws = Xc(), dI = qr(), uI = Zf(), hI = tm(), fI = om(), mI = am(), pI = lm(), gI = um(), yI = fm(), EI = pm(), TI = Je(), CI = Tm(), AI = Am(), II = $s(), _I = Rm(), SI = vm(), RI = jo(), wI = Fs(), vI = Zc(), kI = el(), bI = Bs(), OI = qs(), NI = tl(), PI = Um(), xI = Ko(), MI = Ze(), DI = Wo(), UI = Jm(), LI = ep(), HI = rp(), $I = ip(), FI = ap(), BI = Ks(), qI = fp(), zI = pp(), GI = Ep(), jI = Cp(), VI = wp();
  vp.exports = { parse: dI, valid: uI, clean: hI, inc: fI, diff: mI, major: pI, minor: gI, patch: yI, prerelease: EI, compare: TI, rcompare: CI, compareLoose: AI, compareBuild: II, sort: _I, rsort: SI, gt: RI, lt: wI, eq: vI, neq: kI, gte: bI, lte: OI, cmp: NI, coerce: PI, Comparator: xI, Range: MI, satisfies: DI, toComparators: UI, maxSatisfying: LI, minSatisfying: HI, minVersion: $I, validRange: FI, outside: BI, gtr: qI, ltr: zI, intersects: GI, simplifyRange: jI, subset: VI, SemVer: lI, re: Yn.re, src: Yn.src, tokens: Yn.t, SEMVER_SPEC_VERSION: Ys.SEMVER_SPEC_VERSION, RELEASE_TYPES: Ys.RELEASE_TYPES, compareIdentifiers: Ws.compareIdentifiers, rcompareIdentifiers: Ws.rcompareIdentifiers };
});
var Op = (0, import_chunk_w1d7ygsk.V)(function(Sz, bp) {
  var kp = Qs();
  bp.exports = kp.satisfies(process.version, ">=15.7.0");
});
var xp = (0, import_chunk_w1d7ygsk.V)(function(Rz, Pp) {
  var Np = Qs();
  Pp.exports = Np.satisfies(process.version, ">=16.9.0");
});
var cl = (0, import_chunk_w1d7ygsk.V)(function(wz, Mp) {
  var KI = Op(), YI = xp(), WI = { ec: ["ES256", "ES384", "ES512"], rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"], "rsa-pss": ["PS256", "PS384", "PS512"] }, QI = { ES256: "prime256v1", ES384: "secp384r1", ES512: "secp521r1" };
  Mp.exports = function(e, t) {
    if (!e || !t) return;
    let r = t.asymmetricKeyType;
    if (!r) return;
    let n = WI[r];
    if (!n) throw Error(`Unknown key type "${r}".`);
    if (!n.includes(e)) throw Error(`"alg" parameter for "${r}" key type must be one of: ${n.join(", ")}.`);
    if (KI) switch (r) {
      case "ec":
        let o = t.asymmetricKeyDetails.namedCurve, i = QI[e];
        if (o !== i) throw Error(`"alg" parameter "${e}" requires curve "${i}".`);
        break;
      case "rsa-pss":
        if (YI) {
          let s = parseInt(e.slice(-3), 10), { hashAlgorithm: a, mgf1HashAlgorithm: c, saltLength: l } = t.asymmetricKeyDetails;
          if (a !== `sha${s}` || c !== a) throw Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e}.`);
          if (l !== void 0 && l > s >> 3) throw Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e}.`);
        }
        break;
    }
  };
});
var ll = (0, import_chunk_w1d7ygsk.V)(function(vz, Dp) {
  var XI = Qs();
  Dp.exports = XI.satisfies(process.version, "^6.12.0 || >=8.0.0");
});
var $p = (0, import_chunk_w1d7ygsk.V)(function(kz, Hp) {
  var J = qo(), JI = Vc(), Up = Kc(), ZI = jc(), e_ = Yc(), t_ = cl(), r_ = ll(), Lp = (0, import_chunk_9s46yyz1.Rjn)(), { KeyObject: n_, createSecretKey: o_, createPublicKey: i_ } = (0, import_chunk_w1d7ygsk.ft)("crypto"), dl = ["RS256", "RS384", "RS512"], s_ = ["ES256", "ES384", "ES512"], ul = ["RS256", "RS384", "RS512"], a_ = ["HS256", "HS384", "HS512"];
  if (r_) dl.splice(dl.length, 0, "PS256", "PS384", "PS512"), ul.splice(ul.length, 0, "PS256", "PS384", "PS512");
  Hp.exports = function(e, t, r, n) {
    if (typeof r === "function" && !n) n = r, r = {};
    if (!r) r = {};
    r = Object.assign({}, r);
    let o;
    if (n) o = n;
    else o = function(d, u) {
      if (d) throw d;
      return u;
    };
    if (r.clockTimestamp && typeof r.clockTimestamp !== "number") return o(new J("clockTimestamp must be a number"));
    if (r.nonce !== void 0 && (typeof r.nonce !== "string" || r.nonce.trim() === "")) return o(new J("nonce must be a non-empty string"));
    if (r.allowInvalidAsymmetricKeyTypes !== void 0 && typeof r.allowInvalidAsymmetricKeyTypes !== "boolean") return o(new J("allowInvalidAsymmetricKeyTypes must be a boolean"));
    let i = r.clockTimestamp || Math.floor(Date.now() / 1e3);
    if (!e) return o(new J("jwt must be provided"));
    if (typeof e !== "string") return o(new J("jwt must be a string"));
    let s = e.split(".");
    if (s.length !== 3) return o(new J("jwt malformed"));
    let a;
    try {
      a = ZI(e, { complete: true });
    } catch (d) {
      return o(d);
    }
    if (!a) return o(new J("invalid token"));
    let c = a.header, l;
    if (typeof t === "function") {
      if (!n) return o(new J("verify must be called asynchronous if secret or public key is provided as a callback"));
      l = t;
    } else l = function(d, u) {
      return u(null, t);
    };
    return l(c, function(d, u) {
      if (d) return o(new J("error in secret or public key callback: " + d.message));
      let m = s[2].trim() !== "";
      if (!m && u) return o(new J("jwt signature is required"));
      if (m && !u) return o(new J("secret or public key must be provided"));
      if (!m && !r.algorithms) return o(new J('please specify "none" in "algorithms" to verify unsigned tokens'));
      if (u != null && !(u instanceof n_)) try {
        u = i_(u);
      } catch (E) {
        try {
          u = o_(typeof u === "string" ? Buffer.from(u) : u);
        } catch (S) {
          return o(new J("secretOrPublicKey is not valid key material"));
        }
      }
      if (!r.algorithms) if (u.type === "secret") r.algorithms = a_;
      else if (["rsa", "rsa-pss"].includes(u.asymmetricKeyType)) r.algorithms = ul;
      else if (u.asymmetricKeyType === "ec") r.algorithms = s_;
      else r.algorithms = dl;
      if (r.algorithms.indexOf(a.header.alg) === -1) return o(new J("invalid algorithm"));
      if (c.alg.startsWith("HS") && u.type !== "secret") return o(new J(`secretOrPublicKey must be a symmetric key when using ${c.alg}`));
      else if (/^(?:RS|PS|ES)/.test(c.alg) && u.type !== "public") return o(new J(`secretOrPublicKey must be an asymmetric key when using ${c.alg}`));
      if (!r.allowInvalidAsymmetricKeyTypes) try {
        t_(c.alg, u);
      } catch (E) {
        return o(E);
      }
      let h;
      try {
        h = Lp.verify(e, a.header.alg, u);
      } catch (E) {
        return o(E);
      }
      if (!h) return o(new J("invalid signature"));
      let y = a.payload;
      if (typeof y.nbf < "u" && !r.ignoreNotBefore) {
        if (typeof y.nbf !== "number") return o(new J("invalid nbf value"));
        if (y.nbf > i + (r.clockTolerance || 0)) return o(new JI("jwt not active", new Date(y.nbf * 1e3)));
      }
      if (typeof y.exp < "u" && !r.ignoreExpiration) {
        if (typeof y.exp !== "number") return o(new J("invalid exp value"));
        if (i >= y.exp + (r.clockTolerance || 0)) return o(new Up("jwt expired", new Date(y.exp * 1e3)));
      }
      if (r.audience) {
        let E = Array.isArray(r.audience) ? r.audience : [r.audience];
        if (!(Array.isArray(y.aud) ? y.aud : [y.aud]).some(function(H) {
          return E.some(function(z) {
            return z instanceof RegExp ? z.test(H) : z === H;
          });
        })) return o(new J("jwt audience invalid. expected: " + E.join(" or ")));
      }
      if (r.issuer) {
        if (typeof r.issuer === "string" && y.iss !== r.issuer || Array.isArray(r.issuer) && r.issuer.indexOf(y.iss) === -1) return o(new J("jwt issuer invalid. expected: " + r.issuer));
      }
      if (r.subject) {
        if (y.sub !== r.subject) return o(new J("jwt subject invalid. expected: " + r.subject));
      }
      if (r.jwtid) {
        if (y.jti !== r.jwtid) return o(new J("jwt jwtid invalid. expected: " + r.jwtid));
      }
      if (r.nonce) {
        if (y.nonce !== r.nonce) return o(new J("jwt nonce invalid. expected: " + r.nonce));
      }
      if (r.maxAge) {
        if (typeof y.iat !== "number") return o(new J("iat required when maxAge is specified"));
        let E = e_(r.maxAge, y.iat);
        if (typeof E > "u") return o(new J('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        if (i >= E + (r.clockTolerance || 0)) return o(new Up("maxAge exceeded", new Date(E * 1e3)));
      }
      if (r.complete === true) {
        let E = a.signature;
        return o(null, { header: c, payload: y, signature: E });
      }
      return o(null, y);
    });
  };
});
var jp = (0, import_chunk_w1d7ygsk.V)(function(bz, Gp) {
  var Fp = 1 / 0, qp = 9007199254740991, c_ = 17976931348623157e292, Bp = NaN, l_ = "[object Arguments]", d_ = "[object Function]", u_ = "[object GeneratorFunction]", h_ = "[object String]", f_ = "[object Symbol]", m_ = /^\s+|\s+$/g, p_ = /^[-+]0x[0-9a-f]+$/i, g_ = /^0b[01]+$/i, y_ = /^0o[0-7]+$/i, E_ = /^(?:0|[1-9]\d*)$/, T_ = parseInt;
  function C_(e, t) {
    var r = -1, n = e ? e.length : 0, o = Array(n);
    while (++r < n) o[r] = t(e[r], r, e);
    return o;
  }
  function A_(e, t, r, n) {
    var o = e.length, i = r + (n ? 1 : -1);
    while (n ? i-- : ++i < o) if (t(e[i], i, e)) return i;
    return -1;
  }
  function I_(e, t, r) {
    if (t !== t) return A_(e, __, r);
    var n = r - 1, o = e.length;
    while (++n < o) if (e[n] === t) return n;
    return -1;
  }
  function __(e) {
    return e !== e;
  }
  function S_(e, t) {
    var r = -1, n = Array(e);
    while (++r < e) n[r] = t(r);
    return n;
  }
  function R_(e, t) {
    return C_(t, function(r) {
      return e[r];
    });
  }
  function w_(e, t) {
    return function(r) {
      return e(t(r));
    };
  }
  var Xs = Object.prototype, { hasOwnProperty: fl, toString: Js, propertyIsEnumerable: v_ } = Xs, k_ = w_(Object.keys, Object), b_ = Math.max;
  function O_(e, t) {
    var r = zp(e) || D_(e) ? S_(e.length, String) : [], n = r.length, o = !!n;
    for (var i in e) if ((t || fl.call(e, i)) && !(o && (i == "length" || P_(i, n)))) r.push(i);
    return r;
  }
  function N_(e) {
    if (!x_(e)) return k_(e);
    var t = [];
    for (var r in Object(e)) if (fl.call(e, r) && r != "constructor") t.push(r);
    return t;
  }
  function P_(e, t) {
    return t = t == null ? qp : t, !!t && (typeof e == "number" || E_.test(e)) && (e > -1 && e % 1 == 0 && e < t);
  }
  function x_(e) {
    var t = e && e.constructor, r = typeof t == "function" && t.prototype || Xs;
    return e === r;
  }
  function M_(e, t, r, n) {
    e = ml(e) ? e : j_(e), r = r && !n ? q_(r) : 0;
    var o = e.length;
    if (r < 0) r = b_(o + r, 0);
    return $_(e) ? r <= o && e.indexOf(t, r) > -1 : !!o && I_(e, t, r) > -1;
  }
  function D_(e) {
    return U_(e) && fl.call(e, "callee") && (!v_.call(e, "callee") || Js.call(e) == l_);
  }
  var zp = Array.isArray;
  function ml(e) {
    return e != null && H_(e.length) && !L_(e);
  }
  function U_(e) {
    return pl(e) && ml(e);
  }
  function L_(e) {
    var t = hl(e) ? Js.call(e) : "";
    return t == d_ || t == u_;
  }
  function H_(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qp;
  }
  function hl(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function pl(e) {
    return !!e && typeof e == "object";
  }
  function $_(e) {
    return typeof e == "string" || !zp(e) && pl(e) && Js.call(e) == h_;
  }
  function F_(e) {
    return typeof e == "symbol" || pl(e) && Js.call(e) == f_;
  }
  function B_(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = z_(e), e === Fp || e === -Fp) {
      var t = e < 0 ? -1 : 1;
      return t * c_;
    }
    return e === e ? e : 0;
  }
  function q_(e) {
    var t = B_(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function z_(e) {
    if (typeof e == "number") return e;
    if (F_(e)) return Bp;
    if (hl(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = hl(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(m_, "");
    var r = g_.test(e);
    return r || y_.test(e) ? T_(e.slice(2), r ? 2 : 8) : p_.test(e) ? Bp : +e;
  }
  function G_(e) {
    return ml(e) ? O_(e) : N_(e);
  }
  function j_(e) {
    return e ? R_(e, G_(e)) : [];
  }
  Gp.exports = M_;
});
var Kp = (0, import_chunk_w1d7ygsk.V)(function(Oz, Vp) {
  var V_ = "[object Boolean]", K_ = Object.prototype, Y_ = K_.toString;
  function W_(e) {
    return e === true || e === false || Q_(e) && Y_.call(e) == V_;
  }
  function Q_(e) {
    return !!e && typeof e == "object";
  }
  Vp.exports = W_;
});
var Jp = (0, import_chunk_w1d7ygsk.V)(function(Nz, Xp) {
  var Yp = 1 / 0, X_ = 17976931348623157e292, Wp = NaN, J_ = "[object Symbol]", Z_ = /^\s+|\s+$/g, eS = /^[-+]0x[0-9a-f]+$/i, tS = /^0b[01]+$/i, rS = /^0o[0-7]+$/i, nS = parseInt, oS = Object.prototype, iS = oS.toString;
  function sS(e) {
    return typeof e == "number" && e == dS(e);
  }
  function Qp(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function aS(e) {
    return !!e && typeof e == "object";
  }
  function cS(e) {
    return typeof e == "symbol" || aS(e) && iS.call(e) == J_;
  }
  function lS(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = uS(e), e === Yp || e === -Yp) {
      var t = e < 0 ? -1 : 1;
      return t * X_;
    }
    return e === e ? e : 0;
  }
  function dS(e) {
    var t = lS(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function uS(e) {
    if (typeof e == "number") return e;
    if (cS(e)) return Wp;
    if (Qp(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = Qp(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(Z_, "");
    var r = tS.test(e);
    return r || rS.test(e) ? nS(e.slice(2), r ? 2 : 8) : eS.test(e) ? Wp : +e;
  }
  Xp.exports = sS;
});
var eg = (0, import_chunk_w1d7ygsk.V)(function(Pz, Zp) {
  var hS = "[object Number]", fS = Object.prototype, mS = fS.toString;
  function pS(e) {
    return !!e && typeof e == "object";
  }
  function gS(e) {
    return typeof e == "number" || pS(e) && mS.call(e) == hS;
  }
  Zp.exports = gS;
});
var og = (0, import_chunk_w1d7ygsk.V)(function(xz, ng) {
  var yS = "[object Object]";
  function ES(e) {
    var t = false;
    if (e != null && typeof e.toString != "function") try {
      t = !!(e + "");
    } catch (r) {
    }
    return t;
  }
  function TS(e, t) {
    return function(r) {
      return e(t(r));
    };
  }
  var CS = Function.prototype, tg = Object.prototype, rg = CS.toString, AS = tg.hasOwnProperty, IS = rg.call(Object), _S = tg.toString, SS = TS(Object.getPrototypeOf, Object);
  function RS(e) {
    return !!e && typeof e == "object";
  }
  function wS(e) {
    if (!RS(e) || _S.call(e) != yS || ES(e)) return false;
    var t = SS(e);
    if (t === null) return true;
    var r = AS.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && rg.call(r) == IS;
  }
  ng.exports = wS;
});
var sg = (0, import_chunk_w1d7ygsk.V)(function(Mz, ig) {
  var vS = "[object String]", kS = Object.prototype, bS = kS.toString, OS = Array.isArray;
  function NS(e) {
    return !!e && typeof e == "object";
  }
  function PS(e) {
    return typeof e == "string" || !OS(e) && NS(e) && bS.call(e) == vS;
  }
  ig.exports = PS;
});
var ug = (0, import_chunk_w1d7ygsk.V)(function(Dz, dg) {
  var xS = "Expected a function", ag = 1 / 0, MS = 17976931348623157e292, cg = NaN, DS = "[object Symbol]", US = /^\s+|\s+$/g, LS = /^[-+]0x[0-9a-f]+$/i, HS = /^0b[01]+$/i, $S = /^0o[0-7]+$/i, FS = parseInt, BS = Object.prototype, qS = BS.toString;
  function zS(e, t) {
    var r;
    if (typeof t != "function") throw TypeError(xS);
    return e = YS(e), function() {
      if (--e > 0) r = t.apply(this, arguments);
      if (e <= 1) t = void 0;
      return r;
    };
  }
  function GS(e) {
    return zS(2, e);
  }
  function lg(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function jS(e) {
    return !!e && typeof e == "object";
  }
  function VS(e) {
    return typeof e == "symbol" || jS(e) && qS.call(e) == DS;
  }
  function KS(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = WS(e), e === ag || e === -ag) {
      var t = e < 0 ? -1 : 1;
      return t * MS;
    }
    return e === e ? e : 0;
  }
  function YS(e) {
    var t = KS(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function WS(e) {
    if (typeof e == "number") return e;
    if (VS(e)) return cg;
    if (lg(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = lg(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(US, "");
    var r = HS.test(e);
    return r || $S.test(e) ? FS(e.slice(2), r ? 2 : 8) : LS.test(e) ? cg : +e;
  }
  dg.exports = GS;
});
var Cg = (0, import_chunk_w1d7ygsk.V)(function(Uz, Tg) {
  var hg = Yc(), QS = ll(), XS = cl(), ea = (0, import_chunk_9s46yyz1.Rjn)(), pg = jp(), Zs = Kp(), fg = Jp(), gl = eg(), gg = og(), cr = sg(), JS = ug(), { KeyObject: ZS, createSecretKey: eR, createPrivateKey: tR } = (0, import_chunk_w1d7ygsk.ft)("crypto"), yg = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
  if (QS) yg.splice(3, 0, "PS256", "PS384", "PS512");
  var rR = { expiresIn: { isValid: function(e) {
    return fg(e) || cr(e) && e;
  }, message: '"expiresIn" should be a number of seconds or string representing a timespan' }, notBefore: { isValid: function(e) {
    return fg(e) || cr(e) && e;
  }, message: '"notBefore" should be a number of seconds or string representing a timespan' }, audience: { isValid: function(e) {
    return cr(e) || Array.isArray(e);
  }, message: '"audience" must be a string or array' }, algorithm: { isValid: pg.bind(null, yg), message: '"algorithm" must be a valid string enum value' }, header: { isValid: gg, message: '"header" must be an object' }, encoding: { isValid: cr, message: '"encoding" must be a string' }, issuer: { isValid: cr, message: '"issuer" must be a string' }, subject: { isValid: cr, message: '"subject" must be a string' }, jwtid: { isValid: cr, message: '"jwtid" must be a string' }, noTimestamp: { isValid: Zs, message: '"noTimestamp" must be a boolean' }, keyid: { isValid: cr, message: '"keyid" must be a string' }, mutatePayload: { isValid: Zs, message: '"mutatePayload" must be a boolean' }, allowInsecureKeySizes: { isValid: Zs, message: '"allowInsecureKeySizes" must be a boolean' }, allowInvalidAsymmetricKeyTypes: { isValid: Zs, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' } }, nR = { iat: { isValid: gl, message: '"iat" should be a number of seconds' }, exp: { isValid: gl, message: '"exp" should be a number of seconds' }, nbf: { isValid: gl, message: '"nbf" should be a number of seconds' } };
  function Eg(e, t, r, n) {
    if (!gg(r)) throw Error('Expected "' + n + '" to be a plain object.');
    Object.keys(r).forEach(function(o) {
      let i = e[o];
      if (!i) {
        if (!t) throw Error('"' + o + '" is not allowed in "' + n + '"');
        return;
      }
      if (!i.isValid(r[o])) throw Error(i.message);
    });
  }
  function oR(e) {
    return Eg(rR, false, e, "options");
  }
  function iR(e) {
    return Eg(nR, true, e, "payload");
  }
  var mg = { audience: "aud", issuer: "iss", subject: "sub", jwtid: "jti" }, sR = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"];
  Tg.exports = function(e, t, r, n) {
    if (typeof r === "function") n = r, r = {};
    else r = r || {};
    let o = typeof e === "object" && !Buffer.isBuffer(e), i = Object.assign({ alg: r.algorithm || "HS256", typ: o ? "JWT" : void 0, kid: r.keyid }, r.header);
    function s(l) {
      if (n) return n(l);
      throw l;
    }
    if (!t && r.algorithm !== "none") return s(Error("secretOrPrivateKey must have a value"));
    if (t != null && !(t instanceof ZS)) try {
      t = tR(t);
    } catch (l) {
      try {
        t = eR(typeof t === "string" ? Buffer.from(t) : t);
      } catch (d) {
        return s(Error("secretOrPrivateKey is not valid key material"));
      }
    }
    if (i.alg.startsWith("HS") && t.type !== "secret") return s(Error(`secretOrPrivateKey must be a symmetric key when using ${i.alg}`));
    else if (/^(?:RS|PS|ES)/.test(i.alg)) {
      if (t.type !== "private") return s(Error(`secretOrPrivateKey must be an asymmetric key when using ${i.alg}`));
      if (!r.allowInsecureKeySizes && !i.alg.startsWith("ES") && t.asymmetricKeyDetails !== void 0 && t.asymmetricKeyDetails.modulusLength < 2048) return s(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`));
    }
    if (typeof e > "u") return s(Error("payload is required"));
    else if (o) {
      try {
        iR(e);
      } catch (l) {
        return s(l);
      }
      if (!r.mutatePayload) e = Object.assign({}, e);
    } else {
      let l = sR.filter(function(d) {
        return typeof r[d] < "u";
      });
      if (l.length > 0) return s(Error("invalid " + l.join(",") + " option for " + typeof e + " payload"));
    }
    if (typeof e.exp < "u" && typeof r.expiresIn < "u") return s(Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    if (typeof e.nbf < "u" && typeof r.notBefore < "u") return s(Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    try {
      oR(r);
    } catch (l) {
      return s(l);
    }
    if (!r.allowInvalidAsymmetricKeyTypes) try {
      XS(i.alg, t);
    } catch (l) {
      return s(l);
    }
    let a = e.iat || Math.floor(Date.now() / 1e3);
    if (r.noTimestamp) delete e.iat;
    else if (o) e.iat = a;
    if (typeof r.notBefore < "u") {
      try {
        e.nbf = hg(r.notBefore, a);
      } catch (l) {
        return s(l);
      }
      if (typeof e.nbf > "u") return s(Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    if (typeof r.expiresIn < "u" && typeof e === "object") {
      try {
        e.exp = hg(r.expiresIn, a);
      } catch (l) {
        return s(l);
      }
      if (typeof e.exp > "u") return s(Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    Object.keys(mg).forEach(function(l) {
      let d = mg[l];
      if (typeof r[l] < "u") {
        if (typeof e[d] < "u") return s(Error('Bad "options.' + l + '" option. The payload already has an "' + d + '" property.'));
        e[d] = r[l];
      }
    });
    let c = r.encoding || "utf8";
    if (typeof n === "function") n = n && JS(n), ea.createSign({ header: i, privateKey: t, payload: e, encoding: c }).once("error", n).once("done", function(l) {
      if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(i.alg) && l.length < 256) return n(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`));
      n(null, l);
    });
    else {
      let l = ea.sign({ header: i, payload: e, secret: t, encoding: c });
      if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(i.alg) && l.length < 256) throw Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`);
      return l;
    }
  };
});
var Ig = (0, import_chunk_w1d7ygsk.V)(function(Lz, Ag) {
  Ag.exports = { decode: jc(), verify: $p(), sign: Cg(), JsonWebTokenError: qo(), NotBeforeError: Vc(), TokenExpiredError: Kc() };
});
var ri = "4.10.1", ga = "04b07795-8ddb-461a-bbee-02f9e1bf7b46", Bl = "common", pa;
(function(e) {
  e.AzureChina = "https://login.chinacloudapi.cn", e.AzureGermany = "https://login.microsoftonline.de", e.AzureGovernment = "https://login.microsoftonline.us", e.AzurePublicCloud = "https://login.microsoftonline.com";
})(pa || (pa = {}));
var eo = pa.AzurePublicCloud, ql = "login.microsoftonline.com", zl = ["*"], Gl = "cae", jl = "nocae", Vl = "msal.cache";
var ya = void 0;
var Kl = void 0;
function Jg(e) {
  var t, r, n, o, i, s, a;
  let c = { cache: {}, broker: { isEnabled: (r = (t = e.brokerOptions) === null || t === void 0 ? void 0 : t.enabled) !== null && r !== void 0 ? r : false, enableMsaPassthrough: (o = (n = e.brokerOptions) === null || n === void 0 ? void 0 : n.legacyEnableMsaPassthrough) !== null && o !== void 0 ? o : false, parentWindowHandle: (i = e.brokerOptions) === null || i === void 0 ? void 0 : i.parentWindowHandle } };
  if ((s = e.tokenCachePersistenceOptions) === null || s === void 0 ? void 0 : s.enabled) {
    if (ya === void 0) throw Error(["Persistent token caching was requested, but no persistence provider was configured.", "You must install the identity-cache-persistence plugin package (`npm install --save @azure/identity-cache-persistence`)", "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling", "`useIdentityPlugin(cachePersistencePlugin)` before using `tokenCachePersistenceOptions`."].join(" "));
    let l = e.tokenCachePersistenceOptions.name || Vl;
    c.cache.cachePlugin = ya(Object.assign({ name: `${l}.${jl}` }, e.tokenCachePersistenceOptions)), c.cache.cachePluginCae = ya(Object.assign({ name: `${l}.${Gl}` }, e.tokenCachePersistenceOptions));
  }
  if ((a = e.brokerOptions) === null || a === void 0 ? void 0 : a.enabled) {
    if (Kl === void 0) throw Error(["Broker for WAM was requested to be enabled, but no native broker was configured.", "You must install the identity-broker plugin package (`npm install --save @azure/identity-broker`)", "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling", "`useIdentityPlugin(createNativeBrokerPlugin())` before using `enableBroker`."].join(" "));
    c.broker.nativeBrokerPlugin = Kl.broker;
  }
  return c;
}
var Yl = { generatePluginConfiguration: Jg };
function Ql(e, ...t) {
  Wl.stderr.write(`${import_util.default.format(e, ...t)}${import_os.EOL}`);
}
var Xl = typeof process < "u" && process.env && process.env.DEBUG || void 0, Jl, Ea = [], Ta = [], ni = [];
if (Xl) Ca(Xl);
var Zl = Object.assign((e) => ed(e), { enable: Ca, enabled: Aa, disable: ty, log: Ql });
function Ca(e) {
  Jl = e, Ea = [], Ta = [];
  let t = /\*/g, r = e.split(",").map((n) => n.trim().replace(t, ".*?"));
  for (let n of r) if (n.startsWith("-")) Ta.push(new RegExp(`^${n.substr(1)}$`));
  else Ea.push(new RegExp(`^${n}$`));
  for (let n of ni) n.enabled = Aa(n.namespace);
}
function Aa(e) {
  if (e.endsWith("*")) return true;
  for (let t of Ta) if (t.test(e)) return false;
  for (let t of Ea) if (t.test(e)) return true;
  return false;
}
function ty() {
  let e = Jl || "";
  return Ca(""), e;
}
function ed(e) {
  let t = Object.assign(r, { enabled: Aa(e), destroy: ry, log: Zl.log, namespace: e, extend: ny });
  function r(...n) {
    if (!t.enabled) return;
    if (n.length > 0) n[0] = `${e} ${n[0]}`;
    t.log(...n);
  }
  return ni.push(t), t;
}
function ry() {
  let e = ni.indexOf(this);
  if (e >= 0) return ni.splice(e, 1), true;
  return false;
}
function ny(e) {
  let t = ed(`${this.namespace}:${e}`);
  return t.log = this.log, t;
}
var Zr = Zl;
var Ia = ["verbose", "info", "warning", "error"], td = { verbose: 400, info: 300, warning: 200, error: 100 };
function rd(e, t) {
  t.log = (...r) => {
    e.log(...r);
  };
}
function nd(e) {
  return Ia.includes(e);
}
function oi(e) {
  let t = /* @__PURE__ */ new Set(), r = typeof process < "u" && process.env && process.env[e.logLevelEnvVarName] || void 0, n, o = Zr(e.namespace);
  o.log = (...d) => {
    Zr.log(...d);
  };
  function i(d) {
    if (d && !nd(d)) throw Error(`Unknown log level '${d}'. Acceptable values: ${Ia.join(",")}`);
    n = d;
    let u = [];
    for (let m of t) if (s(m)) u.push(m.namespace);
    Zr.enable(u.join(","));
  }
  if (r) if (nd(r)) i(r);
  else console.error(`${e.logLevelEnvVarName} set to unknown log level '${r}'; logging is not enabled. Acceptable values: ${Ia.join(", ")}.`);
  function s(d) {
    return Boolean(n && td[d.level] <= td[n]);
  }
  function a(d, u) {
    let m = Object.assign(d.extend(u), { level: u });
    if (rd(d, m), s(m)) {
      let h = Zr.disable();
      Zr.enable(h + "," + m.namespace);
    }
    return t.add(m), m;
  }
  function c() {
    return n;
  }
  function l(d) {
    let u = o.extend(d);
    return rd(o, u), { error: a(u, "error"), warning: a(u, "warning"), info: a(u, "info"), verbose: a(u, "verbose") };
  }
  return { setLogLevel: i, getLogLevel: c, createClientLogger: l, logger: o };
}
var od = oi({ logLevelEnvVarName: "TYPESPEC_RUNTIME_LOG_LEVEL", namespace: "typeSpecRuntime" }), pw = od.logger;
function ii(e) {
  return od.createClientLogger(e);
}
var _a = oi({ logLevelEnvVarName: "AZURE_LOG_LEVEL", namespace: "azure" }), Cw = _a.logger;
function si() {
  return _a.getLogLevel();
}
function qt(e) {
  return _a.createClientLogger(e);
}
var Ke = qt("identity");
function ai(e) {
  return e.reduce((t, r) => {
    if (process.env[r]) t.assigned.push(r);
    else t.missing.push(r);
    return t;
  }, { missing: [], assigned: [] });
}
function ge(e) {
  return `SUCCESS. Scopes: ${Array.isArray(e) ? e.join(", ") : e}.`;
}
function K(e, t) {
  let r = "ERROR.";
  if (e === null || e === void 0 ? void 0 : e.length) r += ` Scopes: ${Array.isArray(e) ? e.join(", ") : e}.`;
  return `${r} Error message: ${typeof t === "string" ? t : t.message}.`;
}
function id(e, t, r = Ke) {
  let n = t ? `${t.fullTitle} ${e}` : e;
  function o(c) {
    r.info(`${n} =>`, c);
  }
  function i(c) {
    r.warning(`${n} =>`, c);
  }
  function s(c) {
    r.verbose(`${n} =>`, c);
  }
  function a(c) {
    r.error(`${n} =>`, c);
  }
  return { title: e, fullTitle: n, info: o, warning: i, verbose: s, error: a };
}
function G(e, t = Ke) {
  let r = id(e, void 0, t);
  return Object.assign(Object.assign({}, r), { parent: t, getToken: id("=> getToken()", r, t) });
}
function oy(e) {
  return e && typeof e.error === "string" && typeof e.error_description === "string";
}
var iy = "CredentialUnavailableError";
class v extends Error {
  constructor(e, t) {
    super(e, t);
    this.name = iy;
  }
}
var Sa = "AuthenticationError";
class to extends Error {
  constructor(e, t, r) {
    let n = { error: "unknown", errorDescription: "An unknown error occurred and no additional details are available." };
    if (oy(t)) n = sd(t);
    else if (typeof t === "string") try {
      let o = JSON.parse(t);
      n = sd(o);
    } catch (o) {
      if (e === 400) n = { error: "invalid_request", errorDescription: `The service indicated that the request was invalid.

${t}` };
      else n = { error: "unknown_error", errorDescription: `An unknown error has occurred. Response body:

${t}` };
    }
    else n = { error: "unknown_error", errorDescription: "An unknown error occurred and no additional details are available." };
    super(`${n.error} Status code: ${e}
More details:
${n.errorDescription},`, r);
    this.statusCode = e, this.errorResponse = n, this.name = Sa;
  }
}
var sy = "AggregateAuthenticationError";
class Ra extends Error {
  constructor(e, t) {
    let r = e.join(`
`);
    super(`${t}
${r}`);
    this.errors = e, this.name = sy;
  }
}
function sd(e) {
  return { error: e.error, errorDescription: e.error_description, correlationId: e.correlation_id, errorCodes: e.error_codes, timestamp: e.timestamp, traceId: e.trace_id };
}
class It extends Error {
  constructor(e) {
    super(e.message, e.cause ? { cause: e.cause } : void 0);
    this.scopes = e.scopes, this.getTokenOptions = e.getTokenOptions, this.name = "AuthenticationRequiredError";
  }
}
function ay(e) {
  return `The current credential is not configured to acquire tokens for tenant ${e}. To enable acquiring tokens for this tenant add it to the AdditionallyAllowedTenants on the credential options, or add "*" to AdditionallyAllowedTenants to allow acquiring tokens for any tenant.`;
}
function Re(e, t, r = [], n) {
  var o;
  let i;
  if (process.env.AZURE_IDENTITY_DISABLE_MULTITENANTAUTH) i = e;
  else if (e === "adfs") i = e;
  else i = (o = t === null || t === void 0 ? void 0 : t.tenantId) !== null && o !== void 0 ? o : e;
  if (e && i !== e && !r.includes("*") && !r.some((s) => s.localeCompare(i) === 0)) {
    let s = ay(i);
    throw n === null || n === void 0 || n.info(s), new v(s);
  }
  return i;
}
function xe(e, t) {
  if (!t.match(/^[0-9a-zA-Z-.]+$/)) {
    let r = Error("Invalid tenant id provided. You can locate your tenant id by following the instructions listed here: https://learn.microsoft.com/partner-center/find-ids-and-domain-names.");
    throw e.info(K("", r)), r;
  }
}
function ad(e, t, r) {
  if (t) return xe(e, t), t;
  if (!r) r = ga;
  if (r !== ga) return "common";
  return "organizations";
}
function Me(e) {
  if (!e || e.length === 0) return [];
  if (e.includes("*")) return zl;
  return e;
}
function ci(e) {
  return e.toLowerCase();
}
function* cy(e) {
  for (let t of e.values()) yield [t.name, t.value];
}
class cd {
  constructor(e) {
    if (this._headersMap = /* @__PURE__ */ new Map(), e) for (let t of Object.keys(e)) this.set(t, e[t]);
  }
  set(e, t) {
    this._headersMap.set(ci(e), { name: e, value: String(t).trim() });
  }
  get(e) {
    var t;
    return (t = this._headersMap.get(ci(e))) === null || t === void 0 ? void 0 : t.value;
  }
  has(e) {
    return this._headersMap.has(ci(e));
  }
  delete(e) {
    this._headersMap.delete(ci(e));
  }
  toJSON(e = {}) {
    let t = {};
    if (e.preserveCase) for (let r of this._headersMap.values()) t[r.name] = r.value;
    else for (let [r, n] of this._headersMap) t[r] = n.value;
    return t;
  }
  toString() {
    return JSON.stringify(this.toJSON({ preserveCase: true }));
  }
  [Symbol.iterator]() {
    return cy(this._headersMap);
  }
}
function dt(e) {
  return new cd(e);
}
var wa, dy = typeof ((wa = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || wa === void 0 ? void 0 : wa.randomUUID) === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : import_crypto.randomUUID;
function ro() {
  return dy();
}
class ld {
  constructor(e) {
    var t, r, n, o, i, s, a;
    this.url = e.url, this.body = e.body, this.headers = (t = e.headers) !== null && t !== void 0 ? t : dt(), this.method = (r = e.method) !== null && r !== void 0 ? r : "GET", this.timeout = (n = e.timeout) !== null && n !== void 0 ? n : 0, this.multipartBody = e.multipartBody, this.formData = e.formData, this.disableKeepAlive = (o = e.disableKeepAlive) !== null && o !== void 0 ? o : false, this.proxySettings = e.proxySettings, this.streamResponseStatusCodes = e.streamResponseStatusCodes, this.withCredentials = (i = e.withCredentials) !== null && i !== void 0 ? i : false, this.abortSignal = e.abortSignal, this.onUploadProgress = e.onUploadProgress, this.onDownloadProgress = e.onDownloadProgress, this.requestId = e.requestId || ro(), this.allowInsecureConnection = (s = e.allowInsecureConnection) !== null && s !== void 0 ? s : false, this.enableBrowserStreams = (a = e.enableBrowserStreams) !== null && a !== void 0 ? a : false, this.requestOverrides = e.requestOverrides, this.authSchemes = e.authSchemes;
  }
}
function va(e) {
  return new ld(e);
}
var dd = /* @__PURE__ */ new Set(["Deserialize", "Serialize", "Retry", "Sign"]);
class li {
  constructor(e) {
    var t;
    this._policies = [], this._policies = (t = e === null || e === void 0 ? void 0 : e.slice(0)) !== null && t !== void 0 ? t : [], this._orderedPolicies = void 0;
  }
  addPolicy(e, t = {}) {
    if (t.phase && t.afterPhase) throw Error("Policies inside a phase cannot specify afterPhase.");
    if (t.phase && !dd.has(t.phase)) throw Error(`Invalid phase name: ${t.phase}`);
    if (t.afterPhase && !dd.has(t.afterPhase)) throw Error(`Invalid afterPhase name: ${t.afterPhase}`);
    this._policies.push({ policy: e, options: t }), this._orderedPolicies = void 0;
  }
  removePolicy(e) {
    let t = [];
    return this._policies = this._policies.filter((r) => {
      if (e.name && r.policy.name === e.name || e.phase && r.options.phase === e.phase) return t.push(r.policy), false;
      else return true;
    }), this._orderedPolicies = void 0, t;
  }
  sendRequest(e, t) {
    return this.getOrderedPolicies().reduceRight((o, i) => (s) => i.sendRequest(s, o), (o) => e.sendRequest(o))(t);
  }
  getOrderedPolicies() {
    if (!this._orderedPolicies) this._orderedPolicies = this.orderPolicies();
    return this._orderedPolicies;
  }
  clone() {
    return new li(this._policies);
  }
  static create() {
    return new li();
  }
  orderPolicies() {
    let e = [], t = /* @__PURE__ */ new Map();
    function r(h) {
      return { name: h, policies: /* @__PURE__ */ new Set(), hasRun: false, hasAfterPolicies: false };
    }
    let n = r("Serialize"), o = r("None"), i = r("Deserialize"), s = r("Retry"), a = r("Sign"), c = [n, o, i, s, a];
    function l(h) {
      if (h === "Retry") return s;
      else if (h === "Serialize") return n;
      else if (h === "Deserialize") return i;
      else if (h === "Sign") return a;
      else return o;
    }
    for (let h of this._policies) {
      let { policy: y, options: E } = h, S = y.name;
      if (t.has(S)) throw Error("Duplicate policy names not allowed in pipeline");
      let b = { policy: y, dependsOn: /* @__PURE__ */ new Set(), dependants: /* @__PURE__ */ new Set() };
      if (E.afterPhase) b.afterPhase = l(E.afterPhase), b.afterPhase.hasAfterPolicies = true;
      t.set(S, b), l(E.phase).policies.add(b);
    }
    for (let h of this._policies) {
      let { policy: y, options: E } = h, S = y.name, b = t.get(S);
      if (!b) throw Error(`Missing node for policy ${S}`);
      if (E.afterPolicies) for (let H of E.afterPolicies) {
        let z = t.get(H);
        if (z) b.dependsOn.add(z), z.dependants.add(b);
      }
      if (E.beforePolicies) for (let H of E.beforePolicies) {
        let z = t.get(H);
        if (z) z.dependsOn.add(b), b.dependants.add(z);
      }
    }
    function d(h) {
      h.hasRun = true;
      for (let y of h.policies) {
        if (y.afterPhase && (!y.afterPhase.hasRun || y.afterPhase.policies.size)) continue;
        if (y.dependsOn.size === 0) {
          e.push(y.policy);
          for (let E of y.dependants) E.dependsOn.delete(y);
          t.delete(y.policy.name), h.policies.delete(y);
        }
      }
    }
    function u() {
      for (let h of c) {
        if (d(h), h.policies.size > 0 && h !== o) {
          if (!o.hasRun) d(o);
          return;
        }
        if (h.hasAfterPolicies) d(o);
      }
    }
    let m = 0;
    while (t.size > 0) {
      m++;
      let h = e.length;
      if (u(), e.length <= h && m > 1) throw Error("Cannot satisfy policy dependencies due to requirements cycle.");
    }
    return e;
  }
}
function ka() {
  return li.create();
}
function no(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function fr(e) {
  if (no(e)) {
    let t = typeof e.name === "string", r = typeof e.message === "string";
    return t && r;
  }
  return false;
}
var ud = import_util2.inspect.custom;
var ba = "REDACTED", hy = ["x-ms-client-request-id", "x-ms-return-client-request-id", "x-ms-useragent", "x-ms-correlation-request-id", "x-ms-request-id", "client-request-id", "ms-cv", "return-client-request-id", "traceparent", "Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Origin", "Accept", "Accept-Encoding", "Cache-Control", "Connection", "Content-Length", "Content-Type", "Date", "ETag", "Expires", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "Last-Modified", "Pragma", "Request-Id", "Retry-After", "Server", "Transfer-Encoding", "User-Agent", "WWW-Authenticate"], fy = ["api-version"];
class ut {
  constructor({ additionalAllowedHeaderNames: e = [], additionalAllowedQueryParameters: t = [] } = {}) {
    e = hy.concat(e), t = fy.concat(t), this.allowedHeaderNames = new Set(e.map((r) => r.toLowerCase())), this.allowedQueryParameters = new Set(t.map((r) => r.toLowerCase()));
  }
  sanitize(e) {
    let t = /* @__PURE__ */ new Set();
    return JSON.stringify(e, (r, n) => {
      if (n instanceof Error) return Object.assign(Object.assign({}, n), { name: n.name, message: n.message });
      if (r === "headers") return this.sanitizeHeaders(n);
      else if (r === "url") return this.sanitizeUrl(n);
      else if (r === "query") return this.sanitizeQuery(n);
      else if (r === "body") return;
      else if (r === "response") return;
      else if (r === "operationSpec") return;
      else if (Array.isArray(n) || no(n)) {
        if (t.has(n)) return "[Circular]";
        t.add(n);
      }
      return n;
    }, 2);
  }
  sanitizeUrl(e) {
    if (typeof e !== "string" || e === null || e === "") return e;
    let t = new URL(e);
    if (!t.search) return e;
    for (let [r] of t.searchParams) if (!this.allowedQueryParameters.has(r.toLowerCase())) t.searchParams.set(r, ba);
    return t.toString();
  }
  sanitizeHeaders(e) {
    let t = {};
    for (let r of Object.keys(e)) if (this.allowedHeaderNames.has(r.toLowerCase())) t[r] = e[r];
    else t[r] = ba;
    return t;
  }
  sanitizeQuery(e) {
    if (typeof e !== "object" || e === null) return e;
    let t = {};
    for (let r of Object.keys(e)) if (this.allowedQueryParameters.has(r.toLowerCase())) t[r] = e[r];
    else t[r] = ba;
    return t;
  }
}
var my = new ut();
class De extends Error {
  constructor(e, t = {}) {
    super(e);
    this.name = "RestError", this.code = t.code, this.statusCode = t.statusCode, Object.defineProperty(this, "request", { value: t.request, enumerable: false }), Object.defineProperty(this, "response", { value: t.response, enumerable: false }), Object.defineProperty(this, ud, { value: () => `RestError: ${this.message} 
 ${my.sanitize(Object.assign(Object.assign({}, this), { request: this.request, response: this.response }))}`, enumerable: false }), Object.setPrototypeOf(this, De.prototype);
  }
}
De.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
De.PARSE_ERROR = "PARSE_ERROR";
function Oa(e) {
  if (e instanceof De) return true;
  return fr(e) && e.name === "RestError";
}
class zt extends Error {
  constructor(e) {
    super(e);
    this.name = "AbortError";
  }
}
var et = ii("ts-http-runtime");
var gy = {};
function oo(e) {
  return e && typeof e.pipe === "function";
}
function hd(e) {
  if (e.readable === false) return Promise.resolve();
  return new Promise((t) => {
    let r = () => {
      t(), e.removeListener("close", r), e.removeListener("end", r), e.removeListener("error", r);
    };
    e.on("close", r), e.on("end", r), e.on("error", r);
  });
}
function fd(e) {
  return e && typeof e.byteLength === "number";
}
class Na extends import_stream.Transform {
  _transform(e, t, r) {
    this.push(e), this.loadedBytes += e.length;
    try {
      this.progressCallback({ loadedBytes: this.loadedBytes }), r();
    } catch (n) {
      r(n);
    }
  }
  constructor(e) {
    super();
    this.loadedBytes = 0, this.progressCallback = e;
  }
}
class md {
  constructor() {
    this.cachedHttpsAgents = /* @__PURE__ */ new WeakMap();
  }
  async sendRequest(e) {
    var t, r, n;
    let o = new AbortController(), i;
    if (e.abortSignal) {
      if (e.abortSignal.aborted) throw new zt("The operation was aborted. Request has already been canceled.");
      i = (u) => {
        if (u.type === "abort") o.abort();
      }, e.abortSignal.addEventListener("abort", i);
    }
    let s;
    if (e.timeout > 0) s = setTimeout(() => {
      let u = new ut();
      et.info(`request to '${u.sanitizeUrl(e.url)}' timed out. canceling...`), o.abort();
    }, e.timeout);
    let a = e.headers.get("Accept-Encoding"), c = (a === null || a === void 0 ? void 0 : a.includes("gzip")) || (a === null || a === void 0 ? void 0 : a.includes("deflate")), l = typeof e.body === "function" ? e.body() : e.body;
    if (l && !e.headers.has("Content-Length")) {
      let u = Cy(l);
      if (u !== null) e.headers.set("Content-Length", u);
    }
    let d;
    try {
      if (l && e.onUploadProgress) {
        let S = e.onUploadProgress, b = new Na(S);
        if (b.on("error", (H) => {
          et.error("Error in upload progress", H);
        }), oo(l)) l.pipe(b);
        else b.end(l);
        l = b;
      }
      let u = await this.makeRequest(e, o, l);
      if (s !== void 0) clearTimeout(s);
      let m = yy(u), y = { status: (t = u.statusCode) !== null && t !== void 0 ? t : 0, headers: m, request: e };
      if (e.method === "HEAD") return u.resume(), y;
      d = c ? Ey(u, m) : u;
      let E = e.onDownloadProgress;
      if (E) {
        let S = new Na(E);
        S.on("error", (b) => {
          et.error("Error in download progress", b);
        }), d.pipe(S), d = S;
      }
      if (((r = e.streamResponseStatusCodes) === null || r === void 0 ? void 0 : r.has(Number.POSITIVE_INFINITY)) || ((n = e.streamResponseStatusCodes) === null || n === void 0 ? void 0 : n.has(y.status))) y.readableStreamBody = d;
      else y.bodyAsText = await Ty(d);
      return y;
    } finally {
      if (e.abortSignal && i) {
        let u = Promise.resolve();
        if (oo(l)) u = hd(l);
        let m = Promise.resolve();
        if (oo(d)) m = hd(d);
        Promise.all([u, m]).then(() => {
          var h;
          if (i) (h = e.abortSignal) === null || h === void 0 || h.removeEventListener("abort", i);
        }).catch((h) => {
          et.warning("Error when cleaning up abortListener on httpRequest", h);
        });
      }
    }
  }
  makeRequest(e, t, r) {
    var n;
    let o = new URL(e.url), i = o.protocol !== "https:";
    if (i && !e.allowInsecureConnection) throw Error(`Cannot connect to ${e.url} while allowInsecureConnection is false.`);
    let s = (n = e.agent) !== null && n !== void 0 ? n : this.getOrCreateAgent(e, i), a = Object.assign({ agent: s, hostname: o.hostname, path: `${o.pathname}${o.search}`, port: o.port, method: e.method, headers: e.headers.toJSON({ preserveCase: true }) }, e.requestOverrides);
    return new Promise((c, l) => {
      let d = i ? en.request(a, c) : tn.request(a, c);
      if (d.once("error", (u) => {
        var m;
        l(new De(u.message, { code: (m = u.code) !== null && m !== void 0 ? m : De.REQUEST_SEND_ERROR, request: e }));
      }), t.signal.addEventListener("abort", () => {
        let u = new zt("The operation was aborted. Rejecting from abort signal callback while making request.");
        d.destroy(u), l(u);
      }), r && oo(r)) r.pipe(d);
      else if (r) if (typeof r === "string" || Buffer.isBuffer(r)) d.end(r);
      else if (fd(r)) d.end(ArrayBuffer.isView(r) ? Buffer.from(r.buffer) : Buffer.from(r));
      else et.error("Unrecognized body type", r), l(new De("Unrecognized body type"));
      else d.end();
    });
  }
  getOrCreateAgent(e, t) {
    var r;
    let n = e.disableKeepAlive;
    if (t) {
      if (n) return en.globalAgent;
      if (!this.cachedHttpAgent) this.cachedHttpAgent = new en.Agent({ keepAlive: true });
      return this.cachedHttpAgent;
    } else {
      if (n && !e.tlsSettings) return tn.globalAgent;
      let o = (r = e.tlsSettings) !== null && r !== void 0 ? r : gy, i = this.cachedHttpsAgents.get(o);
      if (i && i.options.keepAlive === !n) return i;
      return et.info("No cached TLS Agent exist, creating a new Agent"), i = new tn.Agent(Object.assign({ keepAlive: !n }, o)), this.cachedHttpsAgents.set(o, i), i;
    }
  }
}
function yy(e) {
  let t = dt();
  for (let r of Object.keys(e.headers)) {
    let n = e.headers[r];
    if (Array.isArray(n)) {
      if (n.length > 0) t.set(r, n[0]);
    } else if (n) t.set(r, n);
  }
  return t;
}
function Ey(e, t) {
  let r = t.get("Content-Encoding");
  if (r === "gzip") {
    let n = di.createGunzip();
    return e.pipe(n), n;
  } else if (r === "deflate") {
    let n = di.createInflate();
    return e.pipe(n), n;
  }
  return e;
}
function Ty(e) {
  return new Promise((t, r) => {
    let n = [];
    e.on("data", (o) => {
      if (Buffer.isBuffer(o)) n.push(o);
      else n.push(Buffer.from(o));
    }), e.on("end", () => {
      t(Buffer.concat(n).toString("utf8"));
    }), e.on("error", (o) => {
      if (o && (o === null || o === void 0 ? void 0 : o.name) === "AbortError") r(o);
      else r(new De(`Error reading response as text: ${o.message}`, { code: De.PARSE_ERROR }));
    });
  });
}
function Cy(e) {
  if (!e) return 0;
  else if (Buffer.isBuffer(e)) return e.length;
  else if (oo(e)) return null;
  else if (fd(e)) return e.byteLength;
  else if (typeof e === "string") return Buffer.from(e).length;
  else return null;
}
function pd() {
  return new md();
}
function Pa() {
  return pd();
}
function io() {
  return ka();
}
var _t = qt("core-rest-pipeline");
function xa(e) {
  return { name: "agentPolicy", sendRequest: async (t, r) => {
    if (!t.agent) t.agent = e;
    return r(t);
  } };
}
function Ma() {
  return { name: "decompressResponsePolicy", async sendRequest(e, t) {
    if (e.method !== "HEAD") e.headers.set("Accept-Encoding", "gzip,deflate");
    return t(e);
  } };
}
function Da(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e;
}
function so(e, t) {
  let r = t.retryDelayInMs * Math.pow(2, e), n = Math.min(t.maxRetryDelayInMs, r);
  return { retryAfterInMs: n / 2 + Da(0, n / 2) };
}
var Ay = "The operation was aborted.";
function gd(e, t, r) {
  return new Promise((n, o) => {
    let i = void 0, s = void 0, a = () => o(new zt((r === null || r === void 0 ? void 0 : r.abortErrorMsg) ? r === null || r === void 0 ? void 0 : r.abortErrorMsg : Ay)), c = () => {
      if ((r === null || r === void 0 ? void 0 : r.abortSignal) && s) r.abortSignal.removeEventListener("abort", s);
    };
    if (s = () => {
      if (i) clearTimeout(i);
      return c(), a();
    }, (r === null || r === void 0 ? void 0 : r.abortSignal) && r.abortSignal.aborted) return a();
    if (i = setTimeout(() => {
      c(), n(t);
    }, e), r === null || r === void 0 ? void 0 : r.abortSignal) r.abortSignal.addEventListener("abort", s);
  });
}
function yd(e, t) {
  let r = e.headers.get(t);
  if (!r) return;
  let n = Number(r);
  if (Number.isNaN(n)) return;
  return n;
}
var Ua = "Retry-After", Iy = ["retry-after-ms", "x-ms-retry-after-ms", Ua];
function Ed(e) {
  if (!(e && [429, 503].includes(e.status))) return;
  try {
    for (let o of Iy) {
      let i = yd(e, o);
      if (i === 0 || i) return i * (o === Ua ? 1e3 : 1);
    }
    let t = e.headers.get(Ua);
    if (!t) return;
    let n = Date.parse(t) - Date.now();
    return Number.isFinite(n) ? Math.max(0, n) : void 0;
  } catch (t) {
    return;
  }
}
function Td(e) {
  return Number.isFinite(Ed(e));
}
function Cd() {
  return { name: "throttlingRetryStrategy", retry({ response: e }) {
    let t = Ed(e);
    if (!Number.isFinite(t)) return { skipStrategy: true };
    return { retryAfterInMs: t };
  } };
}
var _y = 1e3, Sy = 64e3;
function Ad(e = {}) {
  var t, r;
  let n = (t = e.retryDelayInMs) !== null && t !== void 0 ? t : _y, o = (r = e.maxRetryDelayInMs) !== null && r !== void 0 ? r : Sy;
  return { name: "exponentialRetryStrategy", retry({ retryCount: i, response: s, responseError: a }) {
    let c = wy(a), l = c && e.ignoreSystemErrors, d = Ry(s), u = d && e.ignoreHttpStatusCodes;
    if (s && (Td(s) || !d) || u || l) return { skipStrategy: true };
    if (a && !c && !d) return { errorToThrow: a };
    return so(i, { retryDelayInMs: n, maxRetryDelayInMs: o });
  } };
}
function Ry(e) {
  return Boolean(e && e.status !== void 0 && (e.status >= 500 || e.status === 408) && e.status !== 501 && e.status !== 505);
}
function wy(e) {
  if (!e) return false;
  return e.code === "ETIMEDOUT" || e.code === "ESOCKETTIMEDOUT" || e.code === "ECONNREFUSED" || e.code === "ECONNRESET" || e.code === "ENOENT" || e.code === "ENOTFOUND";
}
var ao = 3;
var vy = ii("ts-http-runtime retryPolicy"), ky = "retryPolicy";
function co(e, t = { maxRetries: ao }) {
  let r = t.logger || vy;
  return { name: ky, async sendRequest(n, o) {
    var i, s;
    let a, c, l = -1;
    e: while (true) {
      l += 1, a = void 0, c = void 0;
      try {
        r.info(`Retry ${l}: Attempting to send request`, n.requestId), a = await o(n), r.info(`Retry ${l}: Received a response from request`, n.requestId);
      } catch (d) {
        if (r.error(`Retry ${l}: Received an error from request`, n.requestId), c = d, !d || c.name !== "RestError") throw d;
        a = c.response;
      }
      if ((i = n.abortSignal) === null || i === void 0 ? void 0 : i.aborted) throw r.error(`Retry ${l}: Request aborted.`), new zt();
      if (l >= ((s = t.maxRetries) !== null && s !== void 0 ? s : ao)) if (r.info(`Retry ${l}: Maximum retries reached. Returning the last received response, or throwing the last received error.`), c) throw c;
      else if (a) return a;
      else throw Error("Maximum retries reached with no response or error to throw");
      r.info(`Retry ${l}: Processing ${e.length} retry strategies.`);
      t: for (let d of e) {
        let u = d.logger || r;
        u.info(`Retry ${l}: Processing retry strategy ${d.name}.`);
        let m = d.retry({ retryCount: l, response: a, responseError: c });
        if (m.skipStrategy) {
          u.info(`Retry ${l}: Skipped.`);
          continue t;
        }
        let { errorToThrow: h, retryAfterInMs: y, redirectTo: E } = m;
        if (h) throw u.error(`Retry ${l}: Retry strategy ${d.name} throws error:`, h), h;
        if (y || y === 0) {
          u.info(`Retry ${l}: Retry strategy ${d.name} retries after ${y}`), await gd(y, void 0, { abortSignal: n.abortSignal });
          continue e;
        }
        if (E) {
          u.info(`Retry ${l}: Retry strategy ${d.name} redirects to ${E}`), n.url = E;
          continue e;
        }
      }
      if (c) throw r.info("None of the retry strategies could work with the received error. Throwing it."), c;
      if (a) return r.info("None of the retry strategies could work with the received response. Returning it."), a;
    }
  } };
}
var La = "defaultRetryPolicy";
function Ha(e = {}) {
  var t;
  return { name: La, sendRequest: co([Cd(), Ad(e)], { maxRetries: (t = e.maxRetries) !== null && t !== void 0 ? t : ao }).sendRequest };
}
function ht(e, t) {
  return Buffer.from(e, t);
}
var $a, Fa, Ba, qa, Id = typeof window < "u" && typeof window.document < "u", _d = typeof self === "object" && typeof (self === null || self === void 0 ? void 0 : self.importScripts) === "function" && ((($a = self.constructor) === null || $a === void 0 ? void 0 : $a.name) === "DedicatedWorkerGlobalScope" || ((Fa = self.constructor) === null || Fa === void 0 ? void 0 : Fa.name) === "ServiceWorkerGlobalScope" || ((Ba = self.constructor) === null || Ba === void 0 ? void 0 : Ba.name) === "SharedWorkerGlobalScope"), Sd = typeof Deno < "u" && typeof Deno.version < "u" && typeof Deno.version.deno < "u", Rd = typeof Bun < "u" && typeof Bun.version < "u", rn = typeof globalThis.process < "u" && Boolean(globalThis.process.version) && Boolean((qa = globalThis.process.versions) === null || qa === void 0 ? void 0 : qa.node);
var wd = typeof navigator < "u" && (navigator === null || navigator === void 0 ? void 0 : navigator.product) === "ReactNative";
var za = "formDataPolicy";
function by(e) {
  var t;
  let r = {};
  for (let [n, o] of e.entries()) (t = r[n]) !== null && t !== void 0 || (r[n] = []), r[n].push(o);
  return r;
}
function Ga() {
  return { name: za, async sendRequest(e, t) {
    if (rn && typeof FormData < "u" && e.body instanceof FormData) e.formData = by(e.body), e.body = void 0;
    if (e.formData) {
      let r = e.headers.get("Content-Type");
      if (r && r.indexOf("application/x-www-form-urlencoded") !== -1) e.body = Oy(e.formData);
      else await Ny(e.formData, e);
      e.formData = void 0;
    }
    return t(e);
  } };
}
function Oy(e) {
  let t = new URLSearchParams();
  for (let [r, n] of Object.entries(e)) if (Array.isArray(n)) for (let o of n) t.append(r, o.toString());
  else t.append(r, n.toString());
  return t.toString();
}
async function Ny(e, t) {
  let r = t.headers.get("Content-Type");
  if (r && !r.startsWith("multipart/form-data")) return;
  t.headers.set("Content-Type", r !== null && r !== void 0 ? r : "multipart/form-data");
  let n = [];
  for (let [o, i] of Object.entries(e)) for (let s of Array.isArray(i) ? i : [i]) if (typeof s === "string") n.push({ headers: dt({ "Content-Disposition": `form-data; name="${o}"` }), body: ht(s, "utf-8") });
  else if (s === void 0 || s === null || typeof s !== "object") throw Error(`Unexpected value for key ${o}: ${s}. Value should be serialized to string first.`);
  else {
    let a = s.name || "blob", c = dt();
    c.set("Content-Disposition", `form-data; name="${o}"; filename="${a}"`), c.set("Content-Type", s.type || "application/octet-stream"), n.push({ headers: c, body: s });
  }
  t.multipartBody = { parts: n };
}
var ja = "logPolicy";
function Va(e = {}) {
  var t;
  let r = (t = e.logger) !== null && t !== void 0 ? t : et.info, n = new ut({ additionalAllowedHeaderNames: e.additionalAllowedHeaderNames, additionalAllowedQueryParameters: e.additionalAllowedQueryParameters });
  return { name: ja, async sendRequest(o, i) {
    if (!r.enabled) return i(o);
    r(`Request: ${n.sanitize(o)}`);
    let s = await i(o);
    return r(`Response status code: ${s.status}`), r(`Headers: ${n.sanitize(s.headers)}`), s;
  } };
}
function ui(e) {
  return typeof e.stream === "function";
}
function vd() {
  return (0, import_chunk_vppgpr94.lzi)(this, arguments, function* () {
    let t = this.getReader();
    try {
      while (true) {
        let { done: r, value: n } = yield (0, import_chunk_vppgpr94.$jn)(t.read());
        if (r) return yield (0, import_chunk_vppgpr94.$jn)(void 0);
        yield yield (0, import_chunk_vppgpr94.$jn)(n);
      }
    } finally {
      t.releaseLock();
    }
  });
}
function Py(e) {
  if (!e[Symbol.asyncIterator]) e[Symbol.asyncIterator] = vd.bind(e);
  if (!e.values) e.values = vd.bind(e);
}
function kd(e) {
  if (e instanceof ReadableStream) return Py(e), import_stream2.Readable.fromWeb(e);
  else return e;
}
function xy(e) {
  if (e instanceof Uint8Array) return import_stream2.Readable.from(Buffer.from(e));
  else if (ui(e)) return kd(e.stream());
  else return kd(e);
}
async function bd(e) {
  return function() {
    let t = e.map((r) => typeof r === "function" ? r() : r).map(xy);
    return import_stream2.Readable.from((function() {
      return (0, import_chunk_vppgpr94.lzi)(this, arguments, function* () {
        var r, n, o, i;
        for (let l of t) try {
          for (var s = true, a = (n = void 0, (0, import_chunk_vppgpr94.WTl)(l)), c; c = yield (0, import_chunk_vppgpr94.$jn)(a.next()), r = c.done, !r; s = true) i = c.value, s = false, yield yield (0, import_chunk_vppgpr94.$jn)(i);
        } catch (d) {
          n = { error: d };
        } finally {
          try {
            if (!s && !r && (o = a.return)) yield (0, import_chunk_vppgpr94.$jn)(o.call(a));
          } finally {
            if (n) throw n.error;
          }
        }
      });
    })());
  };
}
function My() {
  return `----AzSDKFormBoundary${ro()}`;
}
function Dy(e) {
  let t = "";
  for (let [r, n] of e) t += `${r}: ${n}\r
`;
  return t;
}
function Uy(e) {
  if (e instanceof Uint8Array) return e.byteLength;
  else if (ui(e)) return e.size === -1 ? void 0 : e.size;
  else return;
}
function Ly(e) {
  let t = 0;
  for (let r of e) {
    let n = Uy(r);
    if (n === void 0) return;
    else t += n;
  }
  return t;
}
async function Hy(e, t, r) {
  let n = [ht(`--${r}`, "utf-8"), ...t.flatMap((i) => [ht(`\r
`, "utf-8"), ht(Dy(i.headers), "utf-8"), ht(`\r
`, "utf-8"), i.body, ht(`\r
--${r}`, "utf-8")]), ht(`--\r
\r
`, "utf-8")], o = Ly(n);
  if (o) e.headers.set("Content-Length", o);
  e.body = await bd(n);
}
var hi = "multipartPolicy", $y = 70, Fy = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?");
function By(e) {
  if (e.length > $y) throw Error(`Multipart boundary "${e}" exceeds maximum length of 70 characters`);
  if (Array.from(e).some((t) => !Fy.has(t))) throw Error(`Multipart boundary "${e}" contains invalid characters`);
}
function Ya() {
  return { name: hi, async sendRequest(e, t) {
    var r;
    if (!e.multipartBody) return t(e);
    if (e.body) throw Error("multipartBody and regular body cannot be set at the same time");
    let n = e.multipartBody.boundary, o = (r = e.headers.get("Content-Type")) !== null && r !== void 0 ? r : "multipart/mixed", i = o.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
    if (!i) throw Error(`Got multipart request body, but content-type header was not multipart: ${o}`);
    let [, s, a] = i;
    if (a && n && a !== n) throw Error(`Multipart boundary was specified as ${a} in the header, but got ${n} in the request body`);
    if (n !== null && n !== void 0 || (n = a), n) By(n);
    else n = My();
    return e.headers.set("Content-Type", `${s}; boundary=${n}`), await Hy(e, e.multipartBody.parts, n), e.multipartBody = void 0, t(e);
  } };
}
var Ld = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.tMs)(), 1), Hd = (0, import_chunk_w1d7ygsk.rt)(xd(), 1);
var Wy = "HTTPS_PROXY", Qy = "HTTP_PROXY", Xy = "ALL_PROXY", Jy = "NO_PROXY", Qa = "proxyPolicy", Md = [], $d = false, Zy = /* @__PURE__ */ new Map();
function mi(e) {
  if (process.env[e]) return process.env[e];
  else if (process.env[e.toLowerCase()]) return process.env[e.toLowerCase()];
  return;
}
function eE() {
  if (!process) return;
  let e = mi(Wy), t = mi(Xy), r = mi(Qy);
  return e || t || r;
}
function tE(e, t, r) {
  if (t.length === 0) return false;
  let n = new URL(e).hostname;
  if (r === null || r === void 0 ? void 0 : r.has(n)) return r.get(n);
  let o = false;
  for (let i of t) if (i[0] === ".") {
    if (n.endsWith(i)) o = true;
    else if (n.length === i.length - 1 && n === i.slice(1)) o = true;
  } else if (n === i) o = true;
  return r === null || r === void 0 || r.set(n, o), o;
}
function rE() {
  let e = mi(Jy);
  if ($d = true, e) return e.split(",").map((t) => t.trim()).filter((t) => t.length);
  return [];
}
function nE() {
  let e = eE();
  return e ? new URL(e) : void 0;
}
function Dd(e) {
  let t;
  try {
    t = new URL(e.host);
  } catch (r) {
    throw Error(`Expecting a valid host string in proxy settings, but found "${e.host}".`);
  }
  if (t.port = String(e.port), e.username) t.username = e.username;
  if (e.password) t.password = e.password;
  return t;
}
function Ud(e, t, r) {
  if (e.agent) return;
  let o = new URL(e.url).protocol !== "https:";
  if (e.tlsSettings) et.warning("TLS settings are not supported in combination with custom Proxy, certificates provided to the client will be ignored.");
  let i = e.headers.toJSON();
  if (o) {
    if (!t.httpProxyAgent) t.httpProxyAgent = new Hd.HttpProxyAgent(r, { headers: i });
    e.agent = t.httpProxyAgent;
  } else {
    if (!t.httpsProxyAgent) t.httpsProxyAgent = new Ld.HttpsProxyAgent(r, { headers: i });
    e.agent = t.httpsProxyAgent;
  }
}
function Xa(e, t) {
  if (!$d) Md.push(...rE());
  let r = e ? Dd(e) : nE(), n = {};
  return { name: Qa, async sendRequest(o, i) {
    var s;
    if (!o.proxySettings && r && !tE(o.url, (s = t === null || t === void 0 ? void 0 : t.customNoProxyList) !== null && s !== void 0 ? s : Md, (t === null || t === void 0 ? void 0 : t.customNoProxyList) ? void 0 : Zy)) Ud(o, n, r);
    else if (o.proxySettings) Ud(o, n, Dd(o.proxySettings));
    return i(o);
  } };
}
var Fd = ["GET", "HEAD"];
function Ja(e = {}) {
  let { maxRetries: t = 20 } = e;
  return { name: "redirectPolicy", async sendRequest(r, n) {
    let o = await n(r);
    return Bd(n, o, t);
  } };
}
async function Bd(e, t, r, n = 0) {
  let { request: o, status: i, headers: s } = t, a = s.get("location");
  if (a && (i === 300 || i === 301 && Fd.includes(o.method) || i === 302 && Fd.includes(o.method) || i === 303 && o.method === "POST" || i === 307) && n < r) {
    let c = new URL(a, o.url);
    if (o.url = c.toString(), i === 303) o.method = "GET", o.headers.delete("Content-Length"), delete o.body;
    o.headers.delete("Authorization");
    let l = await e(o);
    return Bd(e, l, r, n + 1);
  }
  return t;
}
function Za(e) {
  return { name: "tlsPolicy", sendRequest: async (t, r) => {
    if (!t.tlsSettings) t.tlsSettings = e;
    return r(t);
  } };
}
function qd(e = {}) {
  return Va(Object.assign({ logger: _t.info }, e));
}
function zd(e = {}) {
  return Ja(e);
}
function Gd() {
  return "User-Agent";
}
async function jd(e) {
  if (pi && pi.versions) {
    let t = pi.versions;
    if (t.bun) e.set("Bun", t.bun);
    else if (t.deno) e.set("Deno", t.deno);
    else if (t.node) e.set("Node", t.node);
  }
  e.set("OS", `(${on.arch()}-${on.type()}-${on.release()})`);
}
var gi = "1.21.0", Vd = 3;
function lE(e) {
  let t = [];
  for (let [r, n] of e) {
    let o = n ? `${r}/${n}` : r;
    t.push(o);
  }
  return t.join(" ");
}
function Kd() {
  return Gd();
}
async function yi(e) {
  let t = /* @__PURE__ */ new Map();
  t.set("core-rest-pipeline", gi), await jd(t);
  let r = lE(t);
  return e ? `${e} ${r}` : r;
}
var Yd = Kd(), dE = "userAgentPolicy";
function Wd(e = {}) {
  let t = yi(e.userAgentPrefix);
  return { name: dE, async sendRequest(r, n) {
    if (!r.headers.has(Yd)) r.headers.set(Yd, await t);
    return n(r);
  } };
}
class sn extends Error {
  constructor(e) {
    super(e);
    this.name = "AbortError";
  }
}
function Qd(e, t) {
  let { cleanupBeforeAbort: r, abortSignal: n, abortErrorMsg: o } = t !== null && t !== void 0 ? t : {};
  return new Promise((i, s) => {
    function a() {
      s(new sn(o !== null && o !== void 0 ? o : "The operation was aborted."));
    }
    function c() {
      n === null || n === void 0 || n.removeEventListener("abort", l);
    }
    function l() {
      r === null || r === void 0 || r(), c(), a();
    }
    if (n === null || n === void 0 ? void 0 : n.aborted) return a();
    try {
      e((d) => {
        c(), i(d);
      }, (d) => {
        c(), s(d);
      });
    } catch (d) {
      s(d);
    }
    n === null || n === void 0 || n.addEventListener("abort", l);
  });
}
var fE = "The delay was aborted.";
function ec(e, t) {
  let r, { abortSignal: n, abortErrorMsg: o } = t !== null && t !== void 0 ? t : {};
  return Qd((i) => {
    r = setTimeout(i, e);
  }, { cleanupBeforeAbort: () => clearTimeout(r), abortSignal: n, abortErrorMsg: o !== null && o !== void 0 ? o : fE });
}
function an(e) {
  if (fr(e)) return e.message;
  else {
    let t;
    try {
      if (typeof e === "object" && e) t = JSON.stringify(e);
      else t = String(e);
    } catch (r) {
      t = "[unable to stringify input]";
    }
    return `Unknown error ${t}`;
  }
}
function Xd(e, t) {
  return so(e, t);
}
function Ei(e) {
  return fr(e);
}
var Ti = rn, lo = rn;
var Jd = Symbol("rawContent");
function tc(e) {
  return typeof e[Jd] === "function";
}
function Zd(e) {
  if (tc(e)) return e[Jd]();
  else return e;
}
var rc = hi;
function eu() {
  let e = Ya();
  return { name: rc, sendRequest: async (t, r) => {
    if (t.multipartBody) {
      for (let n of t.multipartBody.parts) if (tc(n.body)) n.body = Zd(n.body);
    }
    return e.sendRequest(t, r);
  } };
}
function tu() {
  return Ma();
}
function ru(e = {}) {
  return Ha(e);
}
function nu() {
  return Ga();
}
function ou(e, t) {
  return Xa(e, t);
}
function iu(e = "x-ms-client-request-id") {
  return { name: "setClientRequestIdPolicy", async sendRequest(t, r) {
    if (!t.headers.has(e)) t.headers.set(e, t.requestId);
    return r(t);
  } };
}
function su(e) {
  return xa(e);
}
function au(e) {
  return Za(e);
}
var cn = { span: Symbol.for("@azure/core-tracing span"), namespace: Symbol.for("@azure/core-tracing namespace") };
function cu(e = {}) {
  let t = new uo(e.parentContext);
  if (e.span) t = t.setValue(cn.span, e.span);
  if (e.namespace) t = t.setValue(cn.namespace, e.namespace);
  return t;
}
class uo {
  constructor(e) {
    this._contextMap = e instanceof uo ? new Map(e._contextMap) : /* @__PURE__ */ new Map();
  }
  setValue(e, t) {
    let r = new uo(this);
    return r._contextMap.set(e, t), r;
  }
  getValue(e) {
    return this._contextMap.get(e);
  }
  deleteValue(e) {
    let t = new uo(this);
    return t._contextMap.delete(e), t;
  }
}
var hu = (0, import_chunk_w1d7ygsk.rt)(uu(), 1), Ci = hu.state;
function mE() {
  return { end: () => {
  }, isRecording: () => false, recordException: () => {
  }, setAttribute: () => {
  }, setStatus: () => {
  }, addEvent: () => {
  } };
}
function pE() {
  return { createRequestHeaders: () => ({}), parseTraceparentHeader: () => {
    return;
  }, startSpan: (e, t) => ({ span: mE(), tracingContext: cu({ parentContext: t.tracingContext }) }), withContext(e, t, ...r) {
    return t(...r);
  } };
}
function ho() {
  if (!Ci.instrumenterImplementation) Ci.instrumenterImplementation = pE();
  return Ci.instrumenterImplementation;
}
function fo(e) {
  let { namespace: t, packageName: r, packageVersion: n } = e;
  function o(l, d, u) {
    var m;
    let h = ho().startSpan(l, Object.assign(Object.assign({}, u), { packageName: r, packageVersion: n, tracingContext: (m = d === null || d === void 0 ? void 0 : d.tracingOptions) === null || m === void 0 ? void 0 : m.tracingContext })), { tracingContext: y, span: E } = h;
    if (!y.getValue(cn.namespace)) y = y.setValue(cn.namespace, t);
    E.setAttribute("az.namespace", y.getValue(cn.namespace));
    let S = Object.assign({}, d, { tracingOptions: Object.assign(Object.assign({}, d === null || d === void 0 ? void 0 : d.tracingOptions), { tracingContext: y }) });
    return { span: E, updatedOptions: S };
  }
  async function i(l, d, u, m) {
    let { span: h, updatedOptions: y } = o(l, d, m);
    try {
      let E = await s(y.tracingOptions.tracingContext, () => Promise.resolve(u(y, h)));
      return h.setStatus({ status: "success" }), E;
    } catch (E) {
      throw h.setStatus({ status: "error", error: E }), E;
    } finally {
      h.end();
    }
  }
  function s(l, d, ...u) {
    return ho().withContext(l, d, ...u);
  }
  function a(l) {
    return ho().parseTraceparentHeader(l);
  }
  function c(l) {
    return ho().createRequestHeaders(l);
  }
  return { startSpan: o, withSpan: i, withContext: s, parseTraceparentHeader: a, createRequestHeaders: c };
}
var ln = De;
function mo(e) {
  return Oa(e);
}
var gE = "tracingPolicy";
function fu(e = {}) {
  let t = yi(e.userAgentPrefix), r = new ut({ additionalAllowedQueryParameters: e.additionalAllowedQueryParameters }), n = yE();
  return { name: gE, async sendRequest(o, i) {
    var s;
    if (!n) return i(o);
    let a = await t, c = { "http.url": r.sanitizeUrl(o.url), "http.method": o.method, "http.user_agent": a, requestId: o.requestId };
    if (a) c["http.user_agent"] = a;
    let { span: l, tracingContext: d } = (s = EE(n, o, c)) !== null && s !== void 0 ? s : {};
    if (!l || !d) return i(o);
    try {
      let u = await n.withContext(d, i, o);
      return CE(l, u), u;
    } catch (u) {
      throw TE(l, u), u;
    }
  } };
}
function yE() {
  try {
    return fo({ namespace: "", packageName: "@azure/core-rest-pipeline", packageVersion: gi });
  } catch (e) {
    _t.warning(`Error when creating the TracingClient: ${an(e)}`);
    return;
  }
}
function EE(e, t, r) {
  try {
    let { span: n, updatedOptions: o } = e.startSpan(`HTTP ${t.method}`, { tracingOptions: t.tracingOptions }, { spanKind: "client", spanAttributes: r });
    if (!n.isRecording()) {
      n.end();
      return;
    }
    let i = e.createRequestHeaders(o.tracingOptions.tracingContext);
    for (let [s, a] of Object.entries(i)) t.headers.set(s, a);
    return { span: n, tracingContext: o.tracingOptions.tracingContext };
  } catch (n) {
    _t.warning(`Skipping creating a tracing span due to an error: ${an(n)}`);
    return;
  }
}
function TE(e, t) {
  try {
    if (e.setStatus({ status: "error", error: Ei(t) ? t : void 0 }), mo(t) && t.statusCode) e.setAttribute("http.status_code", t.statusCode);
    e.end();
  } catch (r) {
    _t.warning(`Skipping tracing span processing due to an error: ${an(r)}`);
  }
}
function CE(e, t) {
  try {
    e.setAttribute("http.status_code", t.status);
    let r = t.headers.get("x-ms-request-id");
    if (r) e.setAttribute("serviceRequestId", r);
    if (t.status >= 400) e.setStatus({ status: "error" });
    e.end();
  } catch (r) {
    _t.warning(`Skipping tracing span processing due to an error: ${an(r)}`);
  }
}
function Ai(e) {
  if (e instanceof AbortSignal) return { abortSignal: e };
  if (e.aborted) return { abortSignal: AbortSignal.abort(e.reason) };
  let t = new AbortController(), r = true;
  function n() {
    if (r) e.removeEventListener("abort", o), r = false;
  }
  function o() {
    t.abort(e.reason), n();
  }
  return e.addEventListener("abort", o), { abortSignal: t.signal, cleanup: n };
}
var AE = "wrapAbortSignalLikePolicy";
function mu() {
  return { name: AE, sendRequest: async (e, t) => {
    if (!e.abortSignal) return t(e);
    let { abortSignal: r, cleanup: n } = Ai(e.abortSignal);
    e.abortSignal = r;
    try {
      return await t(e);
    } finally {
      n === null || n === void 0 || n();
    }
  } };
}
function nc(e) {
  var t;
  let r = io();
  if (lo) {
    if (e.agent) r.addPolicy(su(e.agent));
    if (e.tlsOptions) r.addPolicy(au(e.tlsOptions));
    r.addPolicy(ou(e.proxyOptions)), r.addPolicy(tu());
  }
  if (r.addPolicy(mu()), r.addPolicy(nu(), { beforePolicies: [rc] }), r.addPolicy(Wd(e.userAgentOptions)), r.addPolicy(iu((t = e.telemetryOptions) === null || t === void 0 ? void 0 : t.clientRequestIdHeaderName)), r.addPolicy(eu(), { afterPhase: "Deserialize" }), r.addPolicy(ru(e.retryOptions), { phase: "Retry" }), r.addPolicy(fu(Object.assign(Object.assign({}, e.userAgentOptions), e.loggingOptions)), { afterPhase: "Retry" }), lo) r.addPolicy(zd(e.redirectOptions), { afterPhase: "Retry" });
  return r.addPolicy(qd(e.loggingOptions), { afterPhase: "Sign" }), r;
}
function oc() {
  let e = Pa();
  return { async sendRequest(t) {
    let { abortSignal: r, cleanup: n } = t.abortSignal ? Ai(t.abortSignal) : {};
    try {
      return t.abortSignal = r, await e.sendRequest(t);
    } finally {
      n === null || n === void 0 || n();
    }
  } };
}
function mr(e) {
  return dt(e);
}
function tt(e) {
  return va(e);
}
var IE = qt("core-rest-pipeline retryPolicy");
function ic(e, t = { maxRetries: Vd }) {
  return co(e, Object.assign({ logger: IE }, t));
}
var _E = { forcedRefreshWindowInMs: 1e3, retryIntervalInMs: 3e3, refreshWindowInMs: 12e4 };
async function SE(e, t, r) {
  async function n() {
    if (Date.now() < r) try {
      return await e();
    } catch (i) {
      return null;
    }
    else {
      let i = await e();
      if (i === null) throw Error("Failed to refresh access token.");
      return i;
    }
  }
  let o = await n();
  while (o === null) await ec(t), o = await n();
  return o;
}
function pu(e, t) {
  let r = null, n = null, o, i = Object.assign(Object.assign({}, _E), t), s = { get isRefreshing() {
    return r !== null;
  }, get shouldRefresh() {
    var c;
    if (s.isRefreshing) return false;
    if ((n === null || n === void 0 ? void 0 : n.refreshAfterTimestamp) && n.refreshAfterTimestamp < Date.now()) return true;
    return ((c = n === null || n === void 0 ? void 0 : n.expiresOnTimestamp) !== null && c !== void 0 ? c : 0) - i.refreshWindowInMs < Date.now();
  }, get mustRefresh() {
    return n === null || n.expiresOnTimestamp - i.forcedRefreshWindowInMs < Date.now();
  } };
  function a(c, l) {
    var d;
    if (!s.isRefreshing) r = SE(() => e.getToken(c, l), i.retryIntervalInMs, (d = n === null || n === void 0 ? void 0 : n.expiresOnTimestamp) !== null && d !== void 0 ? d : Date.now()).then((m) => (r = null, n = m, o = l.tenantId, n)).catch((m) => {
      throw r = null, n = null, o = void 0, m;
    });
    return r;
  }
  return async (c, l) => {
    let d = Boolean(l.claims), u = o !== l.tenantId;
    if (d) n = null;
    if (u || d || s.mustRefresh) return a(c, l);
    if (s.shouldRefresh) a(c, l);
    return n;
  };
}
var Tu = "bearerTokenAuthenticationPolicy";
async function Ii(e, t) {
  try {
    return [await t(e), void 0];
  } catch (r) {
    if (mo(r) && r.response) return [r.response, r];
    else throw r;
  }
}
async function RE(e) {
  let { scopes: t, getAccessToken: r, request: n } = e, o = { abortSignal: n.abortSignal, tracingOptions: n.tracingOptions, enableCae: true }, i = await r(t, o);
  if (i) e.request.headers.set("Authorization", `Bearer ${i.token}`);
}
function gu(e) {
  return e.status === 401 && e.headers.has("WWW-Authenticate");
}
async function yu(e, t) {
  var r;
  let { scopes: n } = e, o = await e.getAccessToken(n, { enableCae: true, claims: t });
  if (!o) return false;
  return e.request.headers.set("Authorization", `${(r = o.tokenType) !== null && r !== void 0 ? r : "Bearer"} ${o.token}`), true;
}
function po(e) {
  var t, r, n;
  let { credential: o, scopes: i, challengeCallbacks: s } = e, a = e.logger || _t, c = { authorizeRequest: (r = (t = s === null || s === void 0 ? void 0 : s.authorizeRequest) === null || t === void 0 ? void 0 : t.bind(s)) !== null && r !== void 0 ? r : RE, authorizeRequestOnChallenge: (n = s === null || s === void 0 ? void 0 : s.authorizeRequestOnChallenge) === null || n === void 0 ? void 0 : n.bind(s) }, l = o ? pu(o) : () => Promise.resolve(null);
  return { name: Tu, async sendRequest(d, u) {
    if (!d.url.toLowerCase().startsWith("https://")) throw Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
    await c.authorizeRequest({ scopes: Array.isArray(i) ? i : [i], request: d, getAccessToken: l, logger: a });
    let m, h, y;
    if ([m, h] = await Ii(d, u), gu(m)) {
      let E = Eu(m.headers.get("WWW-Authenticate"));
      if (E) {
        let S;
        try {
          S = atob(E);
        } catch (b) {
          return a.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${E}`), m;
        }
        if (y = await yu({ scopes: Array.isArray(i) ? i : [i], response: m, request: d, getAccessToken: l, logger: a }, S), y) [m, h] = await Ii(d, u);
      } else if (c.authorizeRequestOnChallenge) {
        if (y = await c.authorizeRequestOnChallenge({ scopes: Array.isArray(i) ? i : [i], request: d, response: m, getAccessToken: l, logger: a }), y) [m, h] = await Ii(d, u);
        if (gu(m)) {
          if (E = Eu(m.headers.get("WWW-Authenticate")), E) {
            let S;
            try {
              S = atob(E);
            } catch (b) {
              return a.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${E}`), m;
            }
            if (y = await yu({ scopes: Array.isArray(i) ? i : [i], response: m, request: d, getAccessToken: l, logger: a }, S), y) [m, h] = await Ii(d, u);
          }
        }
      }
    }
    if (h) throw h;
    else return m;
  } };
}
function wE(e) {
  let t = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g, r = /(\w+)="([^"]*)"/g, n = [], o;
  while ((o = t.exec(e)) !== null) {
    let i = o[1], s = o[2], a = {}, c;
    while ((c = r.exec(s)) !== null) a[c[1]] = c[2];
    n.push({ scheme: i, params: a });
  }
  return n;
}
function Eu(e) {
  var t;
  if (!e) return;
  return (t = wE(e).find((n) => n.scheme === "Bearer" && n.params.claims && n.params.error === "insufficient_claims")) === null || t === void 0 ? void 0 : t.params.claims;
}
var sc = "$", _i = "_";
function vE(e, t) {
  return t !== "Composite" && t !== "Dictionary" && (typeof e === "string" || typeof e === "number" || typeof e === "boolean" || (t === null || t === void 0 ? void 0 : t.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i)) !== null || e === void 0 || e === null);
}
function kE(e) {
  let t = Object.assign(Object.assign({}, e.headers), e.body);
  if (e.hasNullableType && Object.getOwnPropertyNames(t).length === 0) return e.shouldWrapBody ? { body: null } : null;
  else return e.shouldWrapBody ? Object.assign(Object.assign({}, e.headers), { body: e.body }) : t;
}
function ac(e, t) {
  var r, n;
  let o = e.parsedHeaders;
  if (e.request.method === "HEAD") return Object.assign(Object.assign({}, o), { body: e.parsedBody });
  let i = t && t.bodyMapper, s = Boolean(i === null || i === void 0 ? void 0 : i.nullable), a = i === null || i === void 0 ? void 0 : i.type.name;
  if (a === "Stream") return Object.assign(Object.assign({}, o), { blobBody: e.blobBody, readableStreamBody: e.readableStreamBody });
  let c = a === "Composite" && i.type.modelProperties || {}, l = Object.keys(c).some((d) => c[d].serializedName === "");
  if (a === "Sequence" || l) {
    let d = (r = e.parsedBody) !== null && r !== void 0 ? r : [];
    for (let u of Object.keys(c)) if (c[u].serializedName) d[u] = (n = e.parsedBody) === null || n === void 0 ? void 0 : n[u];
    if (o) for (let u of Object.keys(o)) d[u] = o[u];
    return s && !e.parsedBody && !o && Object.getOwnPropertyNames(c).length === 0 ? null : d;
  }
  return kE({ body: e.parsedBody, headers: o, hasNullableType: s, shouldWrapBody: vE(e.parsedBody, a) });
}
var St = { Base64Url: "Base64Url", Boolean: "Boolean", ByteArray: "ByteArray", Composite: "Composite", Date: "Date", DateTime: "DateTime", DateTimeRfc1123: "DateTimeRfc1123", Dictionary: "Dictionary", Enum: "Enum", Number: "Number", Object: "Object", Sequence: "Sequence", String: "String", Stream: "Stream", TimeSpan: "TimeSpan", UnixTime: "UnixTime" };
var _u = (0, import_chunk_w1d7ygsk.rt)(Iu(), 1), cc = _u.state;
function Gt(e, t, r) {
  let { parameterPath: n, mapper: o } = t, i;
  if (typeof n === "string") n = [n];
  if (Array.isArray(n)) {
    if (n.length > 0) if (o.isConstant) i = o.defaultValue;
    else {
      let s = Su(e, n);
      if (!s.propertyFound && r) s = Su(r, n);
      let a = false;
      if (!s.propertyFound) a = o.required || n[0] === "options" && n.length === 2;
      i = a ? o.defaultValue : s.propertyValue;
    }
  } else {
    if (o.required) i = {};
    for (let s in n) {
      let a = o.type.modelProperties[s], c = n[s], l = Gt(e, { parameterPath: c, mapper: a }, r);
      if (l !== void 0) {
        if (!i) i = {};
        i[s] = l;
      }
    }
  }
  return i;
}
function Su(e, t) {
  let r = { propertyFound: false }, n = 0;
  for (; n < t.length; ++n) {
    let o = t[n];
    if (e && o in e) e = e[o];
    else break;
  }
  if (n === t.length) r.propertyValue = e, r.propertyFound = true;
  return r;
}
var Ru = Symbol.for("@azure/core-client original request");
function bE(e) {
  return Ru in e;
}
function Rt(e) {
  if (bE(e)) return Rt(e[Ru]);
  let t = cc.operationRequestMap.get(e);
  if (!t) t = {}, cc.operationRequestMap.set(e, t);
  return t;
}
var OE = ["application/json", "text/json"], NE = ["application/xml", "application/atom+xml"], PE = "deserializationPolicy";
function wu(e = {}) {
  var t, r, n, o, i, s, a;
  let c = (r = (t = e.expectedContentTypes) === null || t === void 0 ? void 0 : t.json) !== null && r !== void 0 ? r : OE, l = (o = (n = e.expectedContentTypes) === null || n === void 0 ? void 0 : n.xml) !== null && o !== void 0 ? o : NE, { parseXML: d, serializerOptions: u } = e, m = { xml: { rootName: (i = u === null || u === void 0 ? void 0 : u.xml.rootName) !== null && i !== void 0 ? i : "", includeRoot: (s = u === null || u === void 0 ? void 0 : u.xml.includeRoot) !== null && s !== void 0 ? s : false, xmlCharKey: (a = u === null || u === void 0 ? void 0 : u.xml.xmlCharKey) !== null && a !== void 0 ? a : _i } };
  return { name: PE, async sendRequest(h, y) {
    let E = await y(h);
    return DE(c, l, E, m, d);
  } };
}
function xE(e) {
  let t, r = e.request, n = Rt(r), o = n === null || n === void 0 ? void 0 : n.operationSpec;
  if (o) if (!(n === null || n === void 0 ? void 0 : n.operationResponseGetter)) t = o.responses[e.status];
  else t = n === null || n === void 0 ? void 0 : n.operationResponseGetter(o, e);
  return t;
}
function ME(e) {
  let t = e.request, r = Rt(t), n = r === null || r === void 0 ? void 0 : r.shouldDeserialize, o;
  if (n === void 0) o = true;
  else if (typeof n === "boolean") o = n;
  else o = n(e);
  return o;
}
async function DE(e, t, r, n, o) {
  let i = await HE(e, t, r, n, o);
  if (!ME(i)) return i;
  let s = Rt(i.request), a = s === null || s === void 0 ? void 0 : s.operationSpec;
  if (!a || !a.responses) return i;
  let c = xE(i), { error: l, shouldReturnResponse: d } = LE(i, a, c, n);
  if (l) throw l;
  else if (d) return i;
  if (c) {
    if (c.bodyMapper) {
      let u = i.parsedBody;
      if (a.isXML && c.bodyMapper.type.name === St.Sequence) u = typeof u === "object" ? u[c.bodyMapper.xmlElementName] : [];
      try {
        i.parsedBody = a.serializer.deserialize(c.bodyMapper, u, "operationRes.parsedBody", n);
      } catch (m) {
        throw new ln(`Error ${m} occurred in deserializing the responseBody - ${i.bodyAsText}`, { statusCode: i.status, request: i.request, response: i });
      }
    } else if (a.httpMethod === "HEAD") i.parsedBody = r.status >= 200 && r.status < 300;
    if (c.headersMapper) i.parsedHeaders = a.serializer.deserialize(c.headersMapper, i.headers.toJSON(), "operationRes.parsedHeaders", { xml: {}, ignoreUnknownProperties: true });
  }
  return i;
}
function UE(e) {
  let t = Object.keys(e.responses);
  return t.length === 0 || t.length === 1 && t[0] === "default";
}
function LE(e, t, r, n) {
  var o, i, s, a, c;
  let l = 200 <= e.status && e.status < 300;
  if (UE(t) ? l : !!r) if (r) {
    if (!r.isError) return { error: null, shouldReturnResponse: false };
  } else return { error: null, shouldReturnResponse: false };
  let u = r !== null && r !== void 0 ? r : t.responses.default, m = ((o = e.request.streamResponseStatusCodes) === null || o === void 0 ? void 0 : o.has(e.status)) ? `Unexpected status code: ${e.status}` : e.bodyAsText, h = new ln(m, { statusCode: e.status, request: e.request, response: e });
  if (!u && !(((s = (i = e.parsedBody) === null || i === void 0 ? void 0 : i.error) === null || s === void 0 ? void 0 : s.code) && ((c = (a = e.parsedBody) === null || a === void 0 ? void 0 : a.error) === null || c === void 0 ? void 0 : c.message))) throw h;
  let y = u === null || u === void 0 ? void 0 : u.bodyMapper, E = u === null || u === void 0 ? void 0 : u.headersMapper;
  try {
    if (e.parsedBody) {
      let S = e.parsedBody, b;
      if (y) {
        let z = S;
        if (t.isXML && y.type.name === St.Sequence) {
          z = [];
          let re = y.xmlElementName;
          if (typeof S === "object" && re) z = S[re];
        }
        b = t.serializer.deserialize(y, z, "error.response.parsedBody", n);
      }
      let H = S.error || b || S;
      if (h.code = H.code, H.message) h.message = H.message;
      if (y) h.response.parsedBody = b;
    }
    if (e.headers && E) h.response.parsedHeaders = t.serializer.deserialize(E, e.headers.toJSON(), "operationRes.parsedHeaders");
  } catch (S) {
    h.message = `Error "${S.message}" occurred in deserializing the responseBody - "${e.bodyAsText}" for the default response.`;
  }
  return { error: h, shouldReturnResponse: false };
}
async function HE(e, t, r, n, o) {
  var i;
  if (!((i = r.request.streamResponseStatusCodes) === null || i === void 0 ? void 0 : i.has(r.status)) && r.bodyAsText) {
    let s = r.bodyAsText, a = r.headers.get("Content-Type") || "", c = !a ? [] : a.split(";").map((l) => l.toLowerCase());
    try {
      if (c.length === 0 || c.some((l) => e.indexOf(l) !== -1)) return r.parsedBody = JSON.parse(s), r;
      else if (c.some((l) => t.indexOf(l) !== -1)) {
        if (!o) throw Error("Parsing XML not supported.");
        let l = await o(s, n.xml);
        return r.parsedBody = l, r;
      }
    } catch (l) {
      let d = `Error "${l}" occurred while parsing the response body - ${r.bodyAsText}.`, u = l.code || ln.PARSE_ERROR;
      throw new ln(d, { code: u, statusCode: r.status, request: r.request, response: r });
    }
  }
  return r;
}
function vu(e) {
  let t = /* @__PURE__ */ new Set();
  for (let r in e.responses) {
    let n = e.responses[r];
    if (n.bodyMapper && n.bodyMapper.type.name === St.Stream) t.add(Number(r));
  }
  return t;
}
function mt(e) {
  let { parameterPath: t, mapper: r } = e, n;
  if (typeof t === "string") n = t;
  else if (Array.isArray(t)) n = t.join(".");
  else n = r.serializedName;
  return n;
}
var $E = "serializationPolicy";
function ku(e = {}) {
  let t = e.stringifyXML;
  return { name: $E, async sendRequest(r, n) {
    let o = Rt(r), i = o === null || o === void 0 ? void 0 : o.operationSpec, s = o === null || o === void 0 ? void 0 : o.operationArguments;
    if (i && s) FE(r, s, i), BE(r, s, i, t);
    return n(r);
  } };
}
function FE(e, t, r) {
  var n, o;
  if (r.headerParameters) for (let s of r.headerParameters) {
    let a = Gt(t, s);
    if (a !== null && a !== void 0 || s.mapper.required) {
      a = r.serializer.serialize(s.mapper, a, mt(s));
      let c = s.mapper.headerCollectionPrefix;
      if (c) for (let l of Object.keys(a)) e.headers.set(c + l, a[l]);
      else e.headers.set(s.mapper.serializedName || mt(s), a);
    }
  }
  let i = (o = (n = t.options) === null || n === void 0 ? void 0 : n.requestOptions) === null || o === void 0 ? void 0 : o.customHeaders;
  if (i) for (let s of Object.keys(i)) e.headers.set(s, i[s]);
}
function BE(e, t, r, n = function() {
  throw Error("XML serialization unsupported!");
}) {
  var o, i, s, a, c;
  let l = (o = t.options) === null || o === void 0 ? void 0 : o.serializerOptions, d = { xml: { rootName: (i = l === null || l === void 0 ? void 0 : l.xml.rootName) !== null && i !== void 0 ? i : "", includeRoot: (s = l === null || l === void 0 ? void 0 : l.xml.includeRoot) !== null && s !== void 0 ? s : false, xmlCharKey: (a = l === null || l === void 0 ? void 0 : l.xml.xmlCharKey) !== null && a !== void 0 ? a : _i } }, u = d.xml.xmlCharKey;
  if (r.requestBody && r.requestBody.mapper) {
    e.body = Gt(t, r.requestBody);
    let m = r.requestBody.mapper, { required: h, serializedName: y, xmlName: E, xmlElementName: S, xmlNamespace: b, xmlNamespacePrefix: H, nullable: z } = m, re = m.type.name;
    try {
      if (e.body !== void 0 && e.body !== null || z && e.body === null || h) {
        let _ = mt(r.requestBody);
        e.body = r.serializer.serialize(m, e.body, _, d);
        let I = re === St.Stream;
        if (r.isXML) {
          let T = H ? `xmlns:${H}` : "xmlns", R = qE(b, T, re, e.body, d);
          if (re === St.Sequence) e.body = n(zE(R, S || E || y, T, b), { rootName: E || y, xmlCharKey: u });
          else if (!I) e.body = n(R, { rootName: E || y, xmlCharKey: u });
        } else if (re === St.String && (((c = r.contentType) === null || c === void 0 ? void 0 : c.match("text/plain")) || r.mediaType === "text")) return;
        else if (!I) e.body = JSON.stringify(e.body);
      }
    } catch (_) {
      throw Error(`Error "${_.message}" occurred in serializing the payload - ${JSON.stringify(y, void 0, "  ")}.`);
    }
  } else if (r.formDataParameters && r.formDataParameters.length > 0) {
    e.formData = {};
    for (let m of r.formDataParameters) {
      let h = Gt(t, m);
      if (h !== void 0 && h !== null) {
        let y = m.mapper.serializedName || mt(m);
        e.formData[y] = r.serializer.serialize(m.mapper, h, mt(m), d);
      }
    }
  }
}
function qE(e, t, r, n, o) {
  if (e && !["Composite", "Sequence", "Dictionary"].includes(r)) {
    let i = {};
    return i[o.xml.xmlCharKey] = n, i[sc] = { [t]: e }, i;
  }
  return n;
}
function zE(e, t, r, n) {
  if (!Array.isArray(e)) e = [e];
  if (!r || !n) return { [t]: e };
  let o = { [t]: e };
  return o[sc] = { [r]: n }, o;
}
function bu(e = {}) {
  let t = nc(e !== null && e !== void 0 ? e : {});
  if (e.credentialOptions) t.addPolicy(po({ credential: e.credentialOptions.credential, scopes: e.credentialOptions.credentialScopes }));
  return t.addPolicy(ku(e.serializationOptions), { phase: "Serialize" }), t.addPolicy(wu(e.deserializationOptions), { phase: "Deserialize" }), t;
}
var lc;
function Ou() {
  if (!lc) lc = oc();
  return lc;
}
var GE = { CSV: ",", SSV: " ", Multi: "Multi", TSV: "	", Pipes: "|" };
function Pu(e, t, r, n) {
  let o = jE(t, r, n), i = false, s = Nu(e, o);
  if (t.path) {
    let l = Nu(t.path, o);
    if (t.path === "/{nextLink}" && l.startsWith("/")) l = l.substring(1);
    if (VE(l)) s = l, i = true;
    else s = KE(s, l);
  }
  let { queryParams: a, sequenceParams: c } = YE(t, r, n);
  return s = QE(s, a, c, i), s;
}
function Nu(e, t) {
  let r = e;
  for (let [n, o] of t) r = r.split(n).join(o);
  return r;
}
function jE(e, t, r) {
  var n;
  let o = /* @__PURE__ */ new Map();
  if ((n = e.urlParameters) === null || n === void 0 ? void 0 : n.length) for (let i of e.urlParameters) {
    let s = Gt(t, i, r), a = mt(i);
    if (s = e.serializer.serialize(i.mapper, s, a), !i.skipEncoding) s = encodeURIComponent(s);
    o.set(`{${i.mapper.serializedName || a}}`, s);
  }
  return o;
}
function VE(e) {
  return e.includes("://");
}
function KE(e, t) {
  if (!t) return e;
  let r = new URL(e), n = r.pathname;
  if (!n.endsWith("/")) n = `${n}/`;
  if (t.startsWith("/")) t = t.substring(1);
  let o = t.indexOf("?");
  if (o !== -1) {
    let i = t.substring(0, o), s = t.substring(o + 1);
    if (n = n + i, s) r.search = r.search ? `${r.search}&${s}` : s;
  } else n = n + t;
  return r.pathname = n, r.toString();
}
function YE(e, t, r) {
  var n;
  let o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
  if ((n = e.queryParameters) === null || n === void 0 ? void 0 : n.length) for (let s of e.queryParameters) {
    if (s.mapper.type.name === "Sequence" && s.mapper.serializedName) i.add(s.mapper.serializedName);
    let a = Gt(t, s, r);
    if (a !== void 0 && a !== null || s.mapper.required) {
      a = e.serializer.serialize(s.mapper, a, mt(s));
      let c = s.collectionFormat ? GE[s.collectionFormat] : "";
      if (Array.isArray(a)) a = a.map((l) => {
        if (l === null || l === void 0) return "";
        return l;
      });
      if (s.collectionFormat === "Multi" && a.length === 0) continue;
      else if (Array.isArray(a) && (s.collectionFormat === "SSV" || s.collectionFormat === "TSV")) a = a.join(c);
      if (!s.skipEncoding) if (Array.isArray(a)) a = a.map((l) => encodeURIComponent(l));
      else a = encodeURIComponent(a);
      if (Array.isArray(a) && (s.collectionFormat === "CSV" || s.collectionFormat === "Pipes")) a = a.join(c);
      o.set(s.mapper.serializedName || mt(s), a);
    }
  }
  return { queryParams: o, sequenceParams: i };
}
function WE(e) {
  let t = /* @__PURE__ */ new Map();
  if (!e || e[0] !== "?") return t;
  e = e.slice(1);
  let r = e.split("&");
  for (let n of r) {
    let [o, i] = n.split("=", 2), s = t.get(o);
    if (s) if (Array.isArray(s)) s.push(i);
    else t.set(o, [s, i]);
    else t.set(o, i);
  }
  return t;
}
function QE(e, t, r, n = false) {
  if (t.size === 0) return e;
  let o = new URL(e), i = WE(o.search);
  for (let [a, c] of t) {
    let l = i.get(a);
    if (Array.isArray(l)) if (Array.isArray(c)) {
      l.push(...c);
      let d = new Set(l);
      i.set(a, Array.from(d));
    } else l.push(c);
    else if (l) {
      if (Array.isArray(c)) c.unshift(l);
      else if (r.has(a)) i.set(a, [l, c]);
      if (!n) i.set(a, c);
    } else i.set(a, c);
  }
  let s = [];
  for (let [a, c] of i) if (typeof c === "string") s.push(`${a}=${c}`);
  else if (Array.isArray(c)) for (let l of c) s.push(`${a}=${l}`);
  else s.push(`${a}=${c}`);
  return o.search = s.length ? `?${s.join("&")}` : "", o.toString();
}
var xu = qt("core-client");
class Si {
  constructor(e = {}) {
    var t, r;
    if (this._requestContentType = e.requestContentType, this._endpoint = (t = e.endpoint) !== null && t !== void 0 ? t : e.baseUri, e.baseUri) xu.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
    if (this._allowInsecureConnection = e.allowInsecureConnection, this._httpClient = e.httpClient || Ou(), this.pipeline = e.pipeline || XE(e), (r = e.additionalPolicies) === null || r === void 0 ? void 0 : r.length) for (let { policy: n, position: o } of e.additionalPolicies) {
      let i = o === "perRetry" ? "Sign" : void 0;
      this.pipeline.addPolicy(n, { afterPhase: i });
    }
  }
  async sendRequest(e) {
    return this.pipeline.sendRequest(this._httpClient, e);
  }
  async sendOperationRequest(e, t) {
    let r = t.baseUrl || this._endpoint;
    if (!r) throw Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
    let n = Pu(r, t, e, this), o = tt({ url: n });
    o.method = t.httpMethod;
    let i = Rt(o);
    i.operationSpec = t, i.operationArguments = e;
    let s = t.contentType || this._requestContentType;
    if (s && t.requestBody) o.headers.set("Content-Type", s);
    let a = e.options;
    if (a) {
      let c = a.requestOptions;
      if (c) {
        if (c.timeout) o.timeout = c.timeout;
        if (c.onUploadProgress) o.onUploadProgress = c.onUploadProgress;
        if (c.onDownloadProgress) o.onDownloadProgress = c.onDownloadProgress;
        if (c.shouldDeserialize !== void 0) i.shouldDeserialize = c.shouldDeserialize;
        if (c.allowInsecureConnection) o.allowInsecureConnection = true;
      }
      if (a.abortSignal) o.abortSignal = a.abortSignal;
      if (a.tracingOptions) o.tracingOptions = a.tracingOptions;
    }
    if (this._allowInsecureConnection) o.allowInsecureConnection = true;
    if (o.streamResponseStatusCodes === void 0) o.streamResponseStatusCodes = vu(t);
    try {
      let c = await this.sendRequest(o), l = ac(c, t.responses[c.status]);
      if (a === null || a === void 0 ? void 0 : a.onResponse) a.onResponse(c, l);
      return l;
    } catch (c) {
      if (typeof c === "object" && (c === null || c === void 0 ? void 0 : c.response)) {
        let l = c.response, d = ac(l, t.responses[c.statusCode] || t.responses.default);
        if (c.details = d, a === null || a === void 0 ? void 0 : a.onResponse) a.onResponse(l, d, c);
      }
      throw c;
    }
  }
}
function XE(e) {
  let t = JE(e), r = e.credential && t ? { credentialScopes: t, credential: e.credential } : void 0;
  return bu(Object.assign(Object.assign({}, e), { credentialOptions: r }));
}
function JE(e) {
  if (e.credentialScopes) return e.credentialScopes;
  if (e.endpoint) return `${e.endpoint}/.default`;
  if (e.baseUri) return `${e.baseUri}/.default`;
  if (e.credential && !e.credentialScopes) throw Error("When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy");
  return;
}
function Mu(e) {
  if (e === "adfs") return "oauth2/token";
  else return "oauth2/v2.0/token";
}
var ne = fo({ namespace: "Microsoft.AAD", packageName: "@azure/identity", packageVersion: ri });
var Du = "Specifying a `clientId` or `resourceId` is not supported by the Service Fabric managed identity environment. The managed identity configuration is determined by the Service Fabric cluster resource configuration. See https://aka.ms/servicefabricmi for more information";
function go(e) {
  let t = "";
  if (Array.isArray(e)) {
    if (e.length !== 1) return;
    t = e[0];
  } else if (typeof e === "string") t = e;
  if (!t.endsWith("/.default")) return t;
  return t.substr(0, t.lastIndexOf("/.default"));
}
function Uu(e) {
  if (typeof e.expires_on === "number") return e.expires_on * 1e3;
  if (typeof e.expires_on === "string") {
    let t = +e.expires_on;
    if (!isNaN(t)) return t * 1e3;
    let r = Date.parse(e.expires_on);
    if (!isNaN(r)) return r;
  }
  if (typeof e.expires_in === "number") return Date.now() + e.expires_in * 1e3;
  throw Error(`Failed to parse token expiration from body. expires_in="${e.expires_in}", expires_on="${e.expires_on}"`);
}
function Lu(e) {
  if (e.refresh_on) {
    if (typeof e.refresh_on === "number") return e.refresh_on * 1e3;
    if (typeof e.refresh_on === "string") {
      let t = +e.refresh_on;
      if (!isNaN(t)) return t * 1e3;
      let r = Date.parse(e.refresh_on);
      if (!isNaN(r)) return r;
    }
    throw Error(`Failed to parse refresh_on from body. refresh_on="${e.refresh_on}"`);
  } else return;
}
var yo = "noCorrelationId";
function ZE(e) {
  let t = e === null || e === void 0 ? void 0 : e.authorityHost;
  if (Ti) t = t !== null && t !== void 0 ? t : process.env.AZURE_AUTHORITY_HOST;
  return t !== null && t !== void 0 ? t : eo;
}
class dn extends Si {
  constructor(e) {
    var t, r;
    let n = `azsdk-js-identity/${ri}`, o = ((t = e === null || e === void 0 ? void 0 : e.userAgentOptions) === null || t === void 0 ? void 0 : t.userAgentPrefix) ? `${e.userAgentOptions.userAgentPrefix} ${n}` : `${n}`, i = ZE(e);
    if (!i.startsWith("https:")) throw Error("The authorityHost address must use the 'https' protocol.");
    super(Object.assign(Object.assign({ requestContentType: "application/json; charset=utf-8", retryOptions: { maxRetries: 3 } }, e), { userAgentOptions: { userAgentPrefix: o }, baseUri: i }));
    if (this.allowInsecureConnection = false, this.authorityHost = i, this.abortControllers = /* @__PURE__ */ new Map(), this.allowLoggingAccountIdentifiers = (r = e === null || e === void 0 ? void 0 : e.loggingOptions) === null || r === void 0 ? void 0 : r.allowLoggingAccountIdentifiers, this.tokenCredentialOptions = Object.assign({}, e), e === null || e === void 0 ? void 0 : e.allowInsecureConnection) this.allowInsecureConnection = e.allowInsecureConnection;
  }
  async sendTokenRequest(e) {
    Ke.info(`IdentityClient: sending token request to [${e.url}]`);
    let t = await this.sendRequest(e);
    if (t.bodyAsText && (t.status === 200 || t.status === 201)) {
      let r = JSON.parse(t.bodyAsText);
      if (!r.access_token) return null;
      this.logIdentifiers(t);
      let n = { accessToken: { token: r.access_token, expiresOnTimestamp: Uu(r), refreshAfterTimestamp: Lu(r), tokenType: "Bearer" }, refreshToken: r.refresh_token };
      return Ke.info(`IdentityClient: [${e.url}] token acquired, expires on ${n.accessToken.expiresOnTimestamp}`), n;
    } else {
      let r = new to(t.status, t.bodyAsText);
      throw Ke.warning(`IdentityClient: authentication error. HTTP status: ${t.status}, ${r.errorResponse.errorDescription}`), r;
    }
  }
  async refreshAccessToken(e, t, r, n, o, i = {}) {
    if (n === void 0) return null;
    Ke.info(`IdentityClient: refreshing access token with client ID: ${t}, scopes: ${r} started`);
    let s = { grant_type: "refresh_token", client_id: t, refresh_token: n, scope: r };
    if (o !== void 0) s.client_secret = o;
    let a = new URLSearchParams(s);
    return ne.withSpan("IdentityClient.refreshAccessToken", i, async (c) => {
      try {
        let l = Mu(e), d = tt({ url: `${this.authorityHost}/${e}/${l}`, method: "POST", body: a.toString(), abortSignal: i.abortSignal, headers: mr({ Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" }), tracingOptions: c.tracingOptions }), u = await this.sendTokenRequest(d);
        return Ke.info(`IdentityClient: refreshed token for client ID: ${t}`), u;
      } catch (l) {
        if (l.name === Sa && l.errorResponse.error === "interaction_required") return Ke.info(`IdentityClient: interaction required for client ID: ${t}`), null;
        else throw Ke.warning(`IdentityClient: failed refreshing token for client ID: ${t}: ${l}`), l;
      }
    });
  }
  generateAbortSignal(e) {
    let t = new AbortController(), r = this.abortControllers.get(e) || [];
    r.push(t), this.abortControllers.set(e, r);
    let n = t.signal.onabort;
    return t.signal.onabort = (...o) => {
      if (this.abortControllers.set(e, void 0), n) n.apply(t.signal, o);
    }, t.signal;
  }
  abortRequests(e) {
    let t = e || yo, r = [...this.abortControllers.get(t) || [], ...this.abortControllers.get(yo) || []];
    if (!r.length) return;
    for (let n of r) n.abort();
    this.abortControllers.set(t, void 0);
  }
  getCorrelationId(e) {
    var t;
    let r = (t = e === null || e === void 0 ? void 0 : e.body) === null || t === void 0 ? void 0 : t.split("&").map((n) => n.split("=")).find(([n]) => n === "client-request-id");
    return r && r.length ? r[1] || yo : yo;
  }
  async sendGetRequestAsync(e, t) {
    let r = tt({ url: e, method: "GET", body: t === null || t === void 0 ? void 0 : t.body, allowInsecureConnection: this.allowInsecureConnection, headers: mr(t === null || t === void 0 ? void 0 : t.headers), abortSignal: this.generateAbortSignal(yo) }), n = await this.sendRequest(r);
    return this.logIdentifiers(n), { body: n.bodyAsText ? JSON.parse(n.bodyAsText) : void 0, headers: n.headers.toJSON(), status: n.status };
  }
  async sendPostRequestAsync(e, t) {
    let r = tt({ url: e, method: "POST", body: t === null || t === void 0 ? void 0 : t.body, headers: mr(t === null || t === void 0 ? void 0 : t.headers), allowInsecureConnection: this.allowInsecureConnection, abortSignal: this.generateAbortSignal(this.getCorrelationId(t)) }), n = await this.sendRequest(r);
    return this.logIdentifiers(n), { body: n.bodyAsText ? JSON.parse(n.bodyAsText) : void 0, headers: n.headers.toJSON(), status: n.status };
  }
  getTokenCredentialOptions() {
    return this.tokenCredentialOptions;
  }
  logIdentifiers(e) {
    if (!this.allowLoggingAccountIdentifiers || !e.bodyAsText) return;
    let t = "No User Principal Name available";
    try {
      let n = (e.parsedBody || JSON.parse(e.bodyAsText)).access_token;
      if (!n) return;
      let o = n.split(".")[1], { appid: i, upn: s, tid: a, oid: c } = JSON.parse(Buffer.from(o, "base64").toString("utf8"));
      Ke.info(`[Authenticated account] Client ID: ${i}. Tenant ID: ${a}. User Principal Name: ${s || t}. Object ID (user): ${c}`);
    } catch (r) {
      Ke.warning("allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:", r.message);
    }
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class un {
  static serializeJSONBlob(e) {
    return JSON.stringify(e);
  }
  static serializeAccounts(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = { home_account_id: n.homeAccountId, environment: n.environment, realm: n.realm, local_account_id: n.localAccountId, username: n.username, authority_type: n.authorityType, name: n.name, client_info: n.clientInfo, last_modification_time: n.lastModificationTime, last_modification_app: n.lastModificationApp, tenantProfiles: n.tenantProfiles?.map((o) => JSON.stringify(o)) };
    }), t;
  }
  static serializeIdTokens(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = { home_account_id: n.homeAccountId, environment: n.environment, credential_type: n.credentialType, client_id: n.clientId, secret: n.secret, realm: n.realm };
    }), t;
  }
  static serializeAccessTokens(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = { home_account_id: n.homeAccountId, environment: n.environment, credential_type: n.credentialType, client_id: n.clientId, secret: n.secret, realm: n.realm, target: n.target, cached_at: n.cachedAt, expires_on: n.expiresOn, extended_expires_on: n.extendedExpiresOn, refresh_on: n.refreshOn, key_id: n.keyId, token_type: n.tokenType, requestedClaims: n.requestedClaims, requestedClaimsHash: n.requestedClaimsHash, userAssertionHash: n.userAssertionHash };
    }), t;
  }
  static serializeRefreshTokens(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = { home_account_id: n.homeAccountId, environment: n.environment, credential_type: n.credentialType, client_id: n.clientId, secret: n.secret, family_id: n.familyId, target: n.target, realm: n.realm };
    }), t;
  }
  static serializeAppMetadata(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = { client_id: n.clientId, environment: n.environment, family_id: n.familyId };
    }), t;
  }
  static serializeAllCache(e) {
    return { Account: this.serializeAccounts(e.accounts), IdToken: this.serializeIdTokens(e.idTokens), AccessToken: this.serializeAccessTokens(e.accessTokens), RefreshToken: this.serializeRefreshTokens(e.refreshTokens), AppMetadata: this.serializeAppMetadata(e.appMetadata) };
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var p = { LIBRARY_NAME: "MSAL.JS", SKU: "msal.js.common", DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/", DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com", DEFAULT_COMMON_TENANT: "common", ADFS: "adfs", DSTS: "dstsv2", AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=", CIAM_AUTH_URL: ".ciamlogin.com", AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com", RESOURCE_DELIM: "|", NO_ACCOUNT: "NO_ACCOUNT", CLAIMS: "claims", CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad", OPENID_SCOPE: "openid", PROFILE_SCOPE: "profile", OFFLINE_ACCESS_SCOPE: "offline_access", EMAIL_SCOPE: "email", CODE_GRANT_TYPE: "authorization_code", RT_GRANT_TYPE: "refresh_token", S256_CODE_CHALLENGE_METHOD: "S256", URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8", AUTHORIZATION_PENDING: "authorization_pending", NOT_DEFINED: "not_defined", EMPTY_STRING: "", NOT_APPLICABLE: "N/A", NOT_AVAILABLE: "Not Available", FORWARD_SLASH: "/", IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location", IMDS_VERSION: "2020-06-01", IMDS_TIMEOUT: 2e3, AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect", REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com", KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"], SHR_NONCE_VALIDITY: 240, INVALID_INSTANCE: "invalid_instance" }, N = { SUCCESS: 200, SUCCESS_RANGE_START: 200, SUCCESS_RANGE_END: 299, REDIRECT: 302, CLIENT_ERROR: 400, CLIENT_ERROR_RANGE_START: 400, BAD_REQUEST: 400, UNAUTHORIZED: 401, NOT_FOUND: 404, REQUEST_TIMEOUT: 408, GONE: 410, TOO_MANY_REQUESTS: 429, CLIENT_ERROR_RANGE_END: 499, SERVER_ERROR: 500, SERVER_ERROR_RANGE_START: 500, SERVICE_UNAVAILABLE: 503, GATEWAY_TIMEOUT: 504, SERVER_ERROR_RANGE_END: 599, MULTI_SIDED_ERROR: 600 };
var Ae = [p.OPENID_SCOPE, p.PROFILE_SCOPE, p.OFFLINE_ACCESS_SCOPE], dc = [...Ae, p.EMAIL_SCOPE], X = { CONTENT_TYPE: "Content-Type", CONTENT_LENGTH: "Content-Length", RETRY_AFTER: "Retry-After", CCS_HEADER: "X-AnchorMailbox", WWWAuthenticate: "WWW-Authenticate", AuthenticationInfo: "Authentication-Info", X_MS_REQUEST_ID: "x-ms-request-id", X_MS_HTTP_VERSION: "x-ms-httpver" };
var Ue = { COMMON: "common", ORGANIZATIONS: "organizations", CONSUMERS: "consumers" }, pr = { ACCESS_TOKEN: "access_token", XMS_CC: "xms_cc" }, gr = { LOGIN: "login", SELECT_ACCOUNT: "select_account", CONSENT: "consent", NONE: "none", CREATE: "create", NO_SESSION: "no_session" }, Ri = { PLAIN: "plain", S256: "S256" }, hn = { CODE: "code", IDTOKEN_TOKEN: "id_token token", IDTOKEN_TOKEN_REFRESHTOKEN: "id_token token refresh_token" };
var wt = { QUERY: "query", FRAGMENT: "fragment", FORM_POST: "form_post" }, Le = { IMPLICIT_GRANT: "implicit", AUTHORIZATION_CODE_GRANT: "authorization_code", CLIENT_CREDENTIALS_GRANT: "client_credentials", RESOURCE_OWNER_PASSWORD_GRANT: "password", REFRESH_TOKEN_GRANT: "refresh_token", DEVICE_CODE_GRANT: "device_code", JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer" }, yr = { MSSTS_ACCOUNT_TYPE: "MSSTS", ADFS_ACCOUNT_TYPE: "ADFS", MSAV1_ACCOUNT_TYPE: "MSA", GENERIC_ACCOUNT_TYPE: "Generic" }, vt = { CACHE_KEY_SEPARATOR: "-", CLIENT_INFO_SEPARATOR: "." }, Y = { ID_TOKEN: "IdToken", ACCESS_TOKEN: "AccessToken", ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme", REFRESH_TOKEN: "RefreshToken" };
var Eo = "appmetadata", Hu = "client_info", jt = "1", fn = { CACHE_KEY: "authority-metadata", REFRESH_TIME_SECONDS: 86400 }, we = { CONFIG: "config", CACHE: "cache", NETWORK: "network", HARDCODED_VALUES: "hardcoded_values" }, me = { SCHEMA_VERSION: 5, MAX_LAST_HEADER_BYTES: 330, MAX_CACHED_ERRORS: 50, CACHE_KEY: "server-telemetry", CATEGORY_SEPARATOR: "|", VALUE_SEPARATOR: ",", OVERFLOW_TRUE: "1", OVERFLOW_FALSE: "0", UNKNOWN_ERROR: "unknown_error" }, F = { BEARER: "Bearer", POP: "pop", SSH: "ssh-cert" }, pt = { DEFAULT_THROTTLE_TIME_SECONDS: 60, DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600, THROTTLING_PREFIX: "throttling", X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429" }, To = { INVALID_GRANT_ERROR: "invalid_grant", CLIENT_MISMATCH_ERROR: "client_mismatch" }, Co = { username: "username", password: "password" }, Er = { FAILED_AUTO_DETECTION: "1", INTERNAL_CACHE: "2", ENVIRONMENT_VARIABLE: "3", IMDS: "4" }, wi = { CONFIGURED_NO_AUTO_DETECTION: "2", AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4", AUTO_DETECTION_REQUESTED_FAILED: "5" }, Q = { NOT_APPLICABLE: "0", FORCE_REFRESH_OR_CLAIMS: "1", NO_CACHED_ACCESS_TOKEN: "2", CACHED_ACCESS_TOKEN_EXPIRED: "3", PROACTIVELY_REFRESHED: "4" };
var mn = 300, Ee = { BASE64: "base64", HEX: "hex", UTF8: "utf-8" };
/*! @azure/msal-common v15.13.1 2025-10-29 */
var vi = "unexpected_error", Ao = "post_request_failed";
/*! @azure/msal-common v15.13.1 2025-10-29 */
var ki = { [vi]: "Unexpected error in authentication.", [Ao]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details." }, $u = { unexpectedError: { code: vi, desc: ki[vi] }, postRequestFailed: { code: Ao, desc: ki[Ao] } };
class x extends Error {
  constructor(e, t, r) {
    let n = t ? `${e}: ${t}` : e;
    super(n);
    Object.setPrototypeOf(this, x.prototype), this.errorCode = e || p.EMPTY_STRING, this.errorMessage = t || p.EMPTY_STRING, this.subError = r || p.EMPTY_STRING, this.name = "AuthError";
  }
  setCorrelationId(e) {
    this.correlationId = e;
  }
}
function hc(e, t) {
  return new x(e, t ? `${ki[e]} ${t}` : ki[e]);
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Tr = "client_info_decoding_error", pn = "client_info_empty_error", Cr = "token_parsing_error", gn = "null_or_empty_token", He = "endpoints_resolution_error", Vt = "network_error", yn = "openid_config_error", En = "hash_not_deserialized", Ar = "invalid_state", Io = "state_mismatch", bi = "state_not_found", Tn = "nonce_mismatch", Kt = "auth_time_not_found", Cn = "max_age_transpired", An = "multiple_matching_tokens", Oi = "multiple_matching_accounts", In = "multiple_matching_appMetadata", _n = "request_cannot_be_made", Sn = "cannot_remove_empty_scope", Rn = "cannot_append_scopeset", Ir = "empty_input_scopeset", _o = "device_code_polling_cancelled", So = "device_code_expired", Ro = "device_code_unknown_error", Yt = "no_account_in_silent_request", wn = "invalid_cache_record", Wt = "invalid_cache_environment", Ni = "no_account_found", _r = "no_crypto_object", Pi = "unexpected_credential_type", wo = "invalid_assertion", vn = "invalid_client_credential", nt = "token_refresh_required", vo = "user_timeout_reached", kn = "token_claims_cnf_required_for_signedjwt", xi = "authorization_code_missing_from_server_response", Mi = "binding_key_not_removed", bn = "end_session_endpoint_not_supported", On = "key_id_missing", Di = "no_network_connectivity", Ui = "user_canceled", ko = "missing_tenant_id_error", U = "method_not_implemented", Li = "nested_app_auth_bridge_disabled";
/*! @azure/msal-common v15.13.1 2025-10-29 */
var P = { [Tr]: "The client info could not be parsed/decoded correctly", [pn]: "The client info was empty", [Cr]: "Token cannot be parsed", [gn]: "The token is null or empty", [He]: "Endpoints cannot be resolved", [Vt]: "Network request failed", [yn]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.", [En]: "The hash parameters could not be deserialized", [Ar]: "State was not the expected format", [Io]: "State mismatch error", [bi]: "State not found", [Tn]: "Nonce mismatch error", [Kt]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.", [Cn]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.", [An]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.", [Oi]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account", [In]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata", [_n]: "Token request cannot be made without authorization code or refresh token.", [Sn]: "Cannot remove null or empty scope from ScopeSet", [Rn]: "Cannot append ScopeSet", [Ir]: "Empty input ScopeSet cannot be processed", [_o]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.", [So]: "Device code is expired.", [Ro]: "Device code stopped polling for unknown reasons.", [Yt]: "Please pass an account object, silent flow is not supported without account information", [wn]: "Cache record object was null or undefined.", [Wt]: "Invalid environment when attempting to create cache entry", [Ni]: "No account found in cache for given key.", [_r]: "No crypto object detected.", [Pi]: "Unexpected credential type.", [wo]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515", [vn]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential", [nt]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.", [vo]: "User defined timeout for device code polling reached", [kn]: "Cannot generate a POP jwt if the token_claims are not populated", [xi]: "Server response does not contain an authorization code to proceed", [Mi]: "Could not remove the credential's binding key from storage.", [bn]: "The provided authority does not support logout", [On]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.", [Di]: "No network connectivity. Check your internet connection.", [Ui]: "User cancelled the flow.", [ko]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.", [U]: "This method has not been implemented", [Li]: "The nested app auth bridge is disabled" }, Fu = { clientInfoDecodingError: { code: Tr, desc: P[Tr] }, clientInfoEmptyError: { code: pn, desc: P[pn] }, tokenParsingError: { code: Cr, desc: P[Cr] }, nullOrEmptyToken: { code: gn, desc: P[gn] }, endpointResolutionError: { code: He, desc: P[He] }, networkError: { code: Vt, desc: P[Vt] }, unableToGetOpenidConfigError: { code: yn, desc: P[yn] }, hashNotDeserialized: { code: En, desc: P[En] }, invalidStateError: { code: Ar, desc: P[Ar] }, stateMismatchError: { code: Io, desc: P[Io] }, stateNotFoundError: { code: bi, desc: P[bi] }, nonceMismatchError: { code: Tn, desc: P[Tn] }, authTimeNotFoundError: { code: Kt, desc: P[Kt] }, maxAgeTranspired: { code: Cn, desc: P[Cn] }, multipleMatchingTokens: { code: An, desc: P[An] }, multipleMatchingAccounts: { code: Oi, desc: P[Oi] }, multipleMatchingAppMetadata: { code: In, desc: P[In] }, tokenRequestCannotBeMade: { code: _n, desc: P[_n] }, removeEmptyScopeError: { code: Sn, desc: P[Sn] }, appendScopeSetError: { code: Rn, desc: P[Rn] }, emptyInputScopeSetError: { code: Ir, desc: P[Ir] }, DeviceCodePollingCancelled: { code: _o, desc: P[_o] }, DeviceCodeExpired: { code: So, desc: P[So] }, DeviceCodeUnknownError: { code: Ro, desc: P[Ro] }, NoAccountInSilentRequest: { code: Yt, desc: P[Yt] }, invalidCacheRecord: { code: wn, desc: P[wn] }, invalidCacheEnvironment: { code: Wt, desc: P[Wt] }, noAccountFound: { code: Ni, desc: P[Ni] }, noCryptoObj: { code: _r, desc: P[_r] }, unexpectedCredentialType: { code: Pi, desc: P[Pi] }, invalidAssertion: { code: wo, desc: P[wo] }, invalidClientCredential: { code: vn, desc: P[vn] }, tokenRefreshRequired: { code: nt, desc: P[nt] }, userTimeoutReached: { code: vo, desc: P[vo] }, tokenClaimsRequired: { code: kn, desc: P[kn] }, noAuthorizationCodeFromServer: { code: xi, desc: P[xi] }, bindingKeyNotRemovedError: { code: Mi, desc: P[Mi] }, logoutNotSupported: { code: bn, desc: P[bn] }, keyIdMissing: { code: On, desc: P[On] }, noNetworkConnectivity: { code: Di, desc: P[Di] }, userCanceledError: { code: Ui, desc: P[Ui] }, missingTenantIdError: { code: ko, desc: P[ko] }, nestedAppAuthBridgeDisabled: { code: Li, desc: P[Li] } };
class Sr extends x {
  constructor(e, t) {
    super(e, t ? `${P[e]}: ${t}` : P[e]);
    this.name = "ClientAuthError", Object.setPrototypeOf(this, Sr.prototype);
  }
}
function g(e, t) {
  return new Sr(e, t);
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Nn = { createNewGuid: () => {
  throw g(U);
}, base64Decode: () => {
  throw g(U);
}, base64Encode: () => {
  throw g(U);
}, base64UrlEncode: () => {
  throw g(U);
}, encodeKid: () => {
  throw g(U);
}, async getPublicKeyThumbprint() {
  throw g(U);
}, async removeTokenBindingKey() {
  throw g(U);
}, async clearKeystore() {
  throw g(U);
}, async signJwt() {
  throw g(U);
}, async hashString() {
  throw g(U);
} };
/*! @azure/msal-common v15.13.1 2025-10-29 */
var j;
(function(e) {
  e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Info = 2] = "Info", e[e.Verbose = 3] = "Verbose", e[e.Trace = 4] = "Trace";
})(j || (j = {}));
class ze {
  constructor(e, t, r) {
    this.level = j.Info;
    let n = () => {
      return;
    }, o = e || ze.createDefaultLoggerOptions();
    this.localCallback = o.loggerCallback || n, this.piiLoggingEnabled = o.piiLoggingEnabled || false, this.level = typeof o.logLevel === "number" ? o.logLevel : j.Info, this.correlationId = o.correlationId || p.EMPTY_STRING, this.packageName = t || p.EMPTY_STRING, this.packageVersion = r || p.EMPTY_STRING;
  }
  static createDefaultLoggerOptions() {
    return { loggerCallback: () => {
    }, piiLoggingEnabled: false, logLevel: j.Info };
  }
  clone(e, t, r) {
    return new ze({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: r || this.correlationId }, e, t);
  }
  logMessage(e, t) {
    if (t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii) return;
    let o = `${`[${(/* @__PURE__ */ new Date()).toUTCString()}] : [${t.correlationId || this.correlationId || ""}]`} : ${this.packageName}@${this.packageVersion} : ${j[t.logLevel]} - ${e}`;
    this.executeCallback(t.logLevel, o, t.containsPii || false);
  }
  executeCallback(e, t, r) {
    if (this.localCallback) this.localCallback(e, t, r);
  }
  error(e, t) {
    this.logMessage(e, { logLevel: j.Error, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  errorPii(e, t) {
    this.logMessage(e, { logLevel: j.Error, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  warning(e, t) {
    this.logMessage(e, { logLevel: j.Warning, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  warningPii(e, t) {
    this.logMessage(e, { logLevel: j.Warning, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  info(e, t) {
    this.logMessage(e, { logLevel: j.Info, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  infoPii(e, t) {
    this.logMessage(e, { logLevel: j.Info, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  verbose(e, t) {
    this.logMessage(e, { logLevel: j.Verbose, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  verbosePii(e, t) {
    this.logMessage(e, { logLevel: j.Verbose, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  trace(e, t) {
    this.logMessage(e, { logLevel: j.Trace, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  tracePii(e, t) {
    this.logMessage(e, { logLevel: j.Trace, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || false;
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Hi = "@azure/msal-common", Pn = "15.13.1";
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Qt = { None: "none", AzurePublic: "https://login.microsoftonline.com", AzurePpe: "https://login.windows-ppe.net", AzureChina: "https://login.chinacloudapi.cn", AzureGermany: "https://login.microsoftonline.de", AzureUsGovernment: "https://login.microsoftonline.us" };
/*! @azure/msal-common v15.13.1 2025-10-29 */
var xn = "redirect_uri_empty", $i = "claims_request_parsing_error", Mn = "authority_uri_insecure", kt = "url_parse_error", Rr = "empty_url_error", Dn = "empty_input_scopes_error", wr = "invalid_claims", Un = "token_request_empty", Ln = "logout_request_empty", Fi = "invalid_code_challenge_method", Hn = "pkce_params_missing", vr = "invalid_cloud_discovery_metadata", $n = "invalid_authority_metadata", Fn = "untrusted_authority", Xt = "missing_ssh_jwk", Bi = "missing_ssh_kid", qi = "missing_nonce_authentication_header", zi = "invalid_authentication_header", Gi = "cannot_set_OIDCOptions", ji = "cannot_allow_platform_broker", Vi = "authority_mismatch", Ki = "invalid_request_method_for_EAR", Yi = "invalid_authorize_post_body_parameters";
/*! @azure/msal-common v15.13.1 2025-10-29 */
var oe = { [xn]: "A redirect URI is required for all calls, and none has been set.", [$i]: "Could not parse the given claims request object.", [Mn]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options", [kt]: "URL could not be parsed into appropriate segments.", [Rr]: "URL was empty or null.", [Dn]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.", [wr]: "Given claims parameter must be a stringified JSON object.", [Un]: "Token request was empty and not found in cache.", [Ln]: "The logout request was null or undefined.", [Fi]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".', [Hn]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request", [vr]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields", [$n]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.", [Fn]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.", [Xt]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.", [Bi]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.", [qi]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.", [zi]: "Invalid authentication header provided", [Gi]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.", [ji]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.", [Vi]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.", [Yi]: "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.", [Ki]: "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST." }, Bu = { redirectUriNotSet: { code: xn, desc: oe[xn] }, claimsRequestParsingError: { code: $i, desc: oe[$i] }, authorityUriInsecure: { code: Mn, desc: oe[Mn] }, urlParseError: { code: kt, desc: oe[kt] }, urlEmptyError: { code: Rr, desc: oe[Rr] }, emptyScopesError: { code: Dn, desc: oe[Dn] }, invalidClaimsRequest: { code: wr, desc: oe[wr] }, tokenRequestEmptyError: { code: Un, desc: oe[Un] }, logoutRequestEmptyError: { code: Ln, desc: oe[Ln] }, invalidCodeChallengeMethod: { code: Fi, desc: oe[Fi] }, invalidCodeChallengeParams: { code: Hn, desc: oe[Hn] }, invalidCloudDiscoveryMetadata: { code: vr, desc: oe[vr] }, invalidAuthorityMetadata: { code: $n, desc: oe[$n] }, untrustedAuthority: { code: Fn, desc: oe[Fn] }, missingSshJwk: { code: Xt, desc: oe[Xt] }, missingSshKid: { code: Bi, desc: oe[Bi] }, missingNonceAuthenticationHeader: { code: qi, desc: oe[qi] }, invalidAuthenticationHeader: { code: zi, desc: oe[zi] }, cannotSetOIDCOptions: { code: Gi, desc: oe[Gi] }, cannotAllowPlatformBroker: { code: ji, desc: oe[ji] }, authorityMismatch: { code: Vi, desc: oe[Vi] }, invalidAuthorizePostBodyParameters: { code: Yi, desc: oe[Yi] }, invalidRequestMethodForEAR: { code: Ki, desc: oe[Ki] } };
class bo extends x {
  constructor(e) {
    super(e, oe[e]);
    this.name = "ClientConfigurationError", Object.setPrototypeOf(this, bo.prototype);
  }
}
function W(e) {
  return new bo(e);
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class se {
  static isEmptyObj(e) {
    if (e) try {
      let t = JSON.parse(e);
      return Object.keys(t).length === 0;
    } catch (t) {
    }
    return true;
  }
  static startsWith(e, t) {
    return e.indexOf(t) === 0;
  }
  static endsWith(e, t) {
    return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
  }
  static queryStringToObject(e) {
    let t = {}, r = e.split("&"), n = (o) => decodeURIComponent(o.replace(/\+/g, " "));
    return r.forEach((o) => {
      if (o.trim()) {
        let [i, s] = o.split(/=(.+)/g, 2);
        if (i && s) t[n(i)] = n(s);
      }
    }), t;
  }
  static trimArrayEntries(e) {
    return e.map((t) => t.trim());
  }
  static removeEmptyStringsFromArray(e) {
    return e.filter((t) => !!t);
  }
  static jsonParseHelper(e) {
    try {
      return JSON.parse(e);
    } catch (t) {
      return null;
    }
  }
  static matchPattern(e, t) {
    return new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(t);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class ce {
  constructor(e) {
    let t = e ? se.trimArrayEntries([...e]) : [], r = t ? se.removeEmptyStringsFromArray(t) : [];
    if (!r || !r.length) throw W(Dn);
    this.scopes = /* @__PURE__ */ new Set(), r.forEach((n) => this.scopes.add(n));
  }
  static fromString(e) {
    let r = (e || p.EMPTY_STRING).split(" ");
    return new ce(r);
  }
  static createSearchScopes(e) {
    let t = e && e.length > 0 ? e : [...Ae], r = new ce(t);
    if (!r.containsOnlyOIDCScopes()) r.removeOIDCScopes();
    else r.removeScope(p.OFFLINE_ACCESS_SCOPE);
    return r;
  }
  containsScope(e) {
    let t = this.printScopesLowerCase().split(" "), r = new ce(t);
    return e ? r.scopes.has(e.toLowerCase()) : false;
  }
  containsScopeSet(e) {
    if (!e || e.scopes.size <= 0) return false;
    return this.scopes.size >= e.scopes.size && e.asArray().every((t) => this.containsScope(t));
  }
  containsOnlyOIDCScopes() {
    let e = 0;
    return dc.forEach((t) => {
      if (this.containsScope(t)) e += 1;
    }), this.scopes.size === e;
  }
  appendScope(e) {
    if (e) this.scopes.add(e.trim());
  }
  appendScopes(e) {
    try {
      e.forEach((t) => this.appendScope(t));
    } catch (t) {
      throw g(Rn);
    }
  }
  removeScope(e) {
    if (!e) throw g(Sn);
    this.scopes.delete(e.trim());
  }
  removeOIDCScopes() {
    dc.forEach((e) => {
      this.scopes.delete(e);
    });
  }
  unionScopeSets(e) {
    if (!e) throw g(Ir);
    let t = /* @__PURE__ */ new Set();
    return e.scopes.forEach((r) => t.add(r.toLowerCase())), this.scopes.forEach((r) => t.add(r.toLowerCase())), t;
  }
  intersectingScopeSets(e) {
    if (!e) throw g(Ir);
    if (!e.containsOnlyOIDCScopes()) e.removeOIDCScopes();
    let t = this.unionScopeSets(e), r = e.getScopeCount(), n = this.getScopeCount();
    return t.size < n + r;
  }
  getScopeCount() {
    return this.scopes.size;
  }
  asArray() {
    let e = [];
    return this.scopes.forEach((t) => e.push(t)), e;
  }
  printScopes() {
    if (this.scopes) return this.asArray().join(" ");
    return p.EMPTY_STRING;
  }
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function Bn(e, t) {
  if (!e) throw g(pn);
  try {
    let r = t(e);
    return JSON.parse(r);
  } catch (r) {
    throw g(Tr);
  }
}
function yt(e) {
  if (!e) throw g(Tr);
  let t = e.split(vt.CLIENT_INFO_SEPARATOR, 2);
  return { uid: t[0], utid: t.length < 2 ? p.EMPTY_STRING : t[1] };
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function qu(e, t) {
  return !!e && !!t && e === t.split(".")[1];
}
function Oo(e, t, r, n) {
  if (n) {
    let { oid: o, sub: i, tid: s, name: a, tfp: c, acr: l, preferred_username: d, upn: u, login_hint: m } = n, h = s || c || l || "";
    return { tenantId: h, localAccountId: o || i || "", name: a, username: d || u || "", loginHint: m, isHomeTenant: qu(h, e) };
  } else return { tenantId: r, localAccountId: t, username: "", isHomeTenant: qu(r, e) };
}
function Wi(e, t, r, n) {
  let o = e;
  if (t) {
    let { isHomeTenant: i, ...s } = t;
    o = { ...e, ...s };
  }
  if (r) {
    let { isHomeTenant: i, ...s } = Oo(e.homeAccountId, e.localAccountId, e.tenantId, r);
    return o = { ...o, ...s, idTokenClaims: r, idToken: n }, o;
  }
  return o;
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var We = { Default: 0, Adfs: 1, Dsts: 2, Ciam: 3 };
/*! @azure/msal-common v15.13.1 2025-10-29 */
function Qi(e) {
  if (e) return e.tid || e.tfp || e.acr || null;
  return null;
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var ve = { AAD: "AAD", OIDC: "OIDC", EAR: "EAR" };
/*! @azure/msal-common v15.13.1 2025-10-29 */
class ye {
  static getAccountInfo(e) {
    return { homeAccountId: e.homeAccountId, environment: e.environment, tenantId: e.realm, username: e.username, localAccountId: e.localAccountId, loginHint: e.loginHint, name: e.name, nativeAccountId: e.nativeAccountId, authorityType: e.authorityType, tenantProfiles: new Map((e.tenantProfiles || []).map((t) => [t.tenantId, t])), dataBoundary: e.dataBoundary };
  }
  isSingleTenant() {
    return !this.tenantProfiles;
  }
  static createAccount(e, t, r) {
    let n = new ye();
    if (t.authorityType === We.Adfs) n.authorityType = yr.ADFS_ACCOUNT_TYPE;
    else if (t.protocolMode === ve.OIDC) n.authorityType = yr.GENERIC_ACCOUNT_TYPE;
    else n.authorityType = yr.MSSTS_ACCOUNT_TYPE;
    let o;
    if (e.clientInfo && r) {
      if (o = Bn(e.clientInfo, r), o.xms_tdbr) n.dataBoundary = o.xms_tdbr === "EU" ? "EU" : "None";
    }
    n.clientInfo = e.clientInfo, n.homeAccountId = e.homeAccountId, n.nativeAccountId = e.nativeAccountId;
    let i = e.environment || t && t.getPreferredCache();
    if (!i) throw g(Wt);
    n.environment = i, n.realm = o?.utid || Qi(e.idTokenClaims) || "", n.localAccountId = o?.uid || e.idTokenClaims?.oid || e.idTokenClaims?.sub || "";
    let s = e.idTokenClaims?.preferred_username || e.idTokenClaims?.upn, a = e.idTokenClaims?.emails ? e.idTokenClaims.emails[0] : null;
    if (n.username = s || a || "", n.loginHint = e.idTokenClaims?.login_hint, n.name = e.idTokenClaims?.name || "", n.cloudGraphHostName = e.cloudGraphHostName, n.msGraphHost = e.msGraphHost, e.tenantProfiles) n.tenantProfiles = e.tenantProfiles;
    else {
      let c = Oo(e.homeAccountId, n.localAccountId, n.realm, e.idTokenClaims);
      n.tenantProfiles = [c];
    }
    return n;
  }
  static createFromAccountInfo(e, t, r) {
    let n = new ye();
    return n.authorityType = e.authorityType || yr.GENERIC_ACCOUNT_TYPE, n.homeAccountId = e.homeAccountId, n.localAccountId = e.localAccountId, n.nativeAccountId = e.nativeAccountId, n.realm = e.tenantId, n.environment = e.environment, n.username = e.username, n.name = e.name, n.loginHint = e.loginHint, n.cloudGraphHostName = t, n.msGraphHost = r, n.tenantProfiles = Array.from(e.tenantProfiles?.values() || []), n.dataBoundary = e.dataBoundary, n;
  }
  static generateHomeAccountId(e, t, r, n, o) {
    if (!(t === We.Adfs || t === We.Dsts)) {
      if (e) try {
        let i = Bn(e, n.base64Decode);
        if (i.uid && i.utid) return `${i.uid}.${i.utid}`;
      } catch (i) {
      }
      r.warning("No client info in response");
    }
    return o?.sub || "";
  }
  static isAccountEntity(e) {
    if (!e) return false;
    return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType");
  }
  static accountInfoIsEqual(e, t, r) {
    if (!e || !t) return false;
    let n = true;
    if (r) {
      let o = e.idTokenClaims || {}, i = t.idTokenClaims || {};
      n = o.iat === i.iat && o.nonce === i.nonce;
    }
    return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.loginHint === t.loginHint && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && n;
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function bt(e, t) {
  let r = eT(e);
  try {
    let n = t(r);
    return JSON.parse(n);
  } catch (n) {
    throw g(Cr);
  }
}
function zu(e) {
  if (!e.signin_state) return false;
  let t = ["kmsi", "dvc_dmjd"];
  return e.signin_state.some((n) => t.includes(n.trim().toLowerCase()));
}
function eT(e) {
  if (!e) throw g(gn);
  let r = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);
  if (!r || r.length < 4) throw g(Cr);
  return r[2];
}
function Xi(e, t) {
  if (t === 0 || Date.now() - 3e5 > e + t) throw g(Cn);
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function tT(e) {
  if (e.startsWith("#/")) return e.substring(2);
  else if (e.startsWith("#") || e.startsWith("?")) return e.substring(1);
  return e;
}
function mc(e) {
  if (!e || e.indexOf("=") < 0) return null;
  try {
    let t = tT(e), r = Object.fromEntries(new URLSearchParams(t));
    if (r.code || r.ear_jwe || r.error || r.error_description || r.state) return r;
  } catch (t) {
    throw g(En);
  }
  return null;
}
function Te(e, t = true, r) {
  let n = [];
  return e.forEach((o, i) => {
    if (!t && r && i in r) n.push(`${i}=${o}`);
    else n.push(`${i}=${encodeURIComponent(o)}`);
  }), n.join("&");
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class M {
  get urlString() {
    return this._urlString;
  }
  constructor(e) {
    if (this._urlString = e, !this._urlString) throw W(Rr);
    if (!e.includes("#")) this._urlString = M.canonicalizeUri(e);
  }
  static canonicalizeUri(e) {
    if (e) {
      let t = e.toLowerCase();
      if (se.endsWith(t, "?")) t = t.slice(0, -1);
      else if (se.endsWith(t, "?/")) t = t.slice(0, -2);
      if (!se.endsWith(t, "/")) t += "/";
      return t;
    }
    return e;
  }
  validateAsUri() {
    let e;
    try {
      e = this.getUrlComponents();
    } catch (t) {
      throw W(kt);
    }
    if (!e.HostNameAndPort || !e.PathSegments) throw W(kt);
    if (!e.Protocol || e.Protocol.toLowerCase() !== "https:") throw W(Mn);
  }
  static appendQueryString(e, t) {
    if (!t) return e;
    return e.indexOf("?") < 0 ? `${e}?${t}` : `${e}&${t}`;
  }
  static removeHashFromUrl(e) {
    return M.canonicalizeUri(e.split("#")[0]);
  }
  replaceTenantPath(e) {
    let t = this.getUrlComponents(), r = t.PathSegments;
    if (e && r.length !== 0 && (r[0] === Ue.COMMON || r[0] === Ue.ORGANIZATIONS)) r[0] = e;
    return M.constructAuthorityUriFromObject(t);
  }
  getUrlComponents() {
    let e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), t = this.urlString.match(e);
    if (!t) throw W(kt);
    let r = { Protocol: t[1], HostNameAndPort: t[4], AbsolutePath: t[5], QueryString: t[7] }, n = r.AbsolutePath.split("/");
    if (n = n.filter((o) => o && o.length > 0), r.PathSegments = n, r.QueryString && r.QueryString.endsWith("/")) r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1);
    return r;
  }
  static getDomainFromUrl(e) {
    let t = RegExp("^([^:/?#]+://)?([^/?#]*)"), r = e.match(t);
    if (!r) throw W(kt);
    return r[2];
  }
  static getAbsoluteUrl(e, t) {
    if (e[0] === p.FORWARD_SLASH) {
      let n = new M(t).getUrlComponents();
      return n.Protocol + "//" + n.HostNameAndPort + e;
    }
    return e;
  }
  static constructAuthorityUriFromObject(e) {
    return new M(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
  }
  static hashContainsKnownProperties(e) {
    return !!mc(e);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Vu = { endpointMetadata: { "login.microsoftonline.com": { token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys", issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout" }, "login.chinacloudapi.cn": { token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys", issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout" }, "login.microsoftonline.us": { token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys", issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout" } }, instanceDiscoveryMetadata: { metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } }, { endpointMetadata: pc, instanceDiscoveryMetadata: gc } = Vu, yc = /* @__PURE__ */ new Set();
gc.metadata.forEach((e) => {
  e.aliases.forEach((t) => {
    yc.add(t);
  });
});
function Ku(e, t) {
  let r, n = e.canonicalAuthority;
  if (n) {
    let o = new M(n).getUrlComponents().HostNameAndPort;
    r = ju(o, e.cloudDiscoveryMetadata?.metadata, we.CONFIG, t) || ju(o, gc.metadata, we.HARDCODED_VALUES, t) || e.knownAuthorities;
  }
  return r || [];
}
function ju(e, t, r, n) {
  if (n?.trace(`getAliasesFromMetadata called with source: ${r}`), e && t) {
    let o = No(t, e);
    if (o) return n?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${r}, returning aliases`), o.aliases;
    else n?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${r}`);
  }
  return null;
}
function Yu(e) {
  return No(gc.metadata, e);
}
function No(e, t) {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n.aliases.includes(t)) return n;
  }
  return null;
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Ec = "cache_quota_exceeded", Ji = "cache_error_unknown";
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Tc = { [Ec]: "Exceeded cache storage capacity.", [Ji]: "Unexpected error occurred when using cache storage." };
class Po extends x {
  constructor(e, t) {
    let r = t || (Tc[e] ? Tc[e] : Tc[Ji]);
    super(`${e}: ${r}`);
    Object.setPrototypeOf(this, Po.prototype), this.name = "CacheError", this.errorCode = e, this.errorMessage = r;
  }
}
function Wu(e) {
  if (!(e instanceof Error)) return new Po(Ji);
  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.message.includes("exceeded the quota")) return new Po(Ec);
  else return new Po(e.name, e.message);
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class br {
  constructor(e, t, r, n, o) {
    this.clientId = e, this.cryptoImpl = t, this.commonLogger = r.clone(Hi, Pn), this.staticAuthorityOptions = o, this.performanceClient = n;
  }
  getAllAccounts(e, t) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(e, t), t, e);
  }
  getAccountInfoFilteredBy(e, t) {
    if (Object.keys(e).length === 0 || Object.values(e).every((n) => !n)) return this.commonLogger.warning("getAccountInfoFilteredBy: Account filter is empty or invalid, returning null"), null;
    let r = this.getAllAccounts(e, t);
    if (r.length > 1) return r.sort((o) => o.idTokenClaims ? -1 : 1)[0];
    else if (r.length === 1) return r[0];
    else return null;
  }
  getBaseAccountInfo(e, t) {
    let r = this.getAccountsFilteredBy(e, t);
    if (r.length > 0) return ye.getAccountInfo(r[0]);
    else return null;
  }
  buildTenantProfiles(e, t, r) {
    return e.flatMap((n) => this.getTenantProfilesFromAccountEntity(n, t, r?.tenantId, r));
  }
  getTenantedAccountInfoByFilter(e, t, r, n, o) {
    let i = null, s;
    if (o) {
      if (!this.tenantProfileMatchesFilter(r, o)) return null;
    }
    let a = this.getIdToken(e, n, t, r.tenantId);
    if (a) {
      if (s = bt(a.secret, this.cryptoImpl.base64Decode), !this.idTokenClaimsMatchTenantProfileFilter(s, o)) return null;
    }
    return i = Wi(e, r, s, a?.secret), i;
  }
  getTenantProfilesFromAccountEntity(e, t, r, n) {
    let o = ye.getAccountInfo(e), i = o.tenantProfiles || /* @__PURE__ */ new Map(), s = this.getTokenKeys();
    if (r) {
      let c = i.get(r);
      if (c) i = /* @__PURE__ */ new Map([[r, c]]);
      else return [];
    }
    let a = [];
    return i.forEach((c) => {
      let l = this.getTenantedAccountInfoByFilter(o, s, c, t, n);
      if (l) a.push(l);
    }), a;
  }
  tenantProfileMatchesFilter(e, t) {
    if (!!t.localAccountId && !this.matchLocalAccountIdFromTenantProfile(e, t.localAccountId)) return false;
    if (!!t.name && e.name !== t.name) return false;
    if (t.isHomeTenant !== void 0 && e.isHomeTenant !== t.isHomeTenant) return false;
    return true;
  }
  idTokenClaimsMatchTenantProfileFilter(e, t) {
    if (t) {
      if (!!t.localAccountId && !this.matchLocalAccountIdFromTokenClaims(e, t.localAccountId)) return false;
      if (!!t.loginHint && !this.matchLoginHintFromTokenClaims(e, t.loginHint)) return false;
      if (!!t.username && !this.matchUsername(e.preferred_username, t.username)) return false;
      if (!!t.name && !this.matchName(e, t.name)) return false;
      if (!!t.sid && !this.matchSid(e, t.sid)) return false;
    }
    return true;
  }
  async saveCacheRecord(e, t, r, n) {
    if (!e) throw g(wn);
    try {
      if (e.account) await this.setAccount(e.account, t, r);
      if (!!e.idToken && n?.idToken !== false) await this.setIdTokenCredential(e.idToken, t, r);
      if (!!e.accessToken && n?.accessToken !== false) await this.saveAccessToken(e.accessToken, t, r);
      if (!!e.refreshToken && n?.refreshToken !== false) await this.setRefreshTokenCredential(e.refreshToken, t, r);
      if (e.appMetadata) this.setAppMetadata(e.appMetadata, t);
    } catch (o) {
      if (this.commonLogger?.error("CacheManager.saveCacheRecord: failed"), o instanceof x) throw o;
      else throw Wu(o);
    }
  }
  async saveAccessToken(e, t, r) {
    let n = { clientId: e.clientId, credentialType: e.credentialType, environment: e.environment, homeAccountId: e.homeAccountId, realm: e.realm, tokenType: e.tokenType, requestedClaimsHash: e.requestedClaimsHash }, o = this.getTokenKeys(), i = ce.fromString(e.target);
    o.accessToken.forEach((s) => {
      if (!this.accessTokenKeyMatchesFilter(s, n, false)) return;
      let a = this.getAccessTokenCredential(s, t);
      if (a && this.credentialMatchesFilter(a, n)) {
        if (ce.fromString(a.target).intersectingScopeSets(i)) this.removeAccessToken(s, t);
      }
    }), await this.setAccessTokenCredential(e, t, r);
  }
  getAccountsFilteredBy(e, t) {
    let r = this.getAccountKeys(), n = [];
    return r.forEach((o) => {
      let i = this.getAccount(o, t);
      if (!i) return;
      if (!!e.homeAccountId && !this.matchHomeAccountId(i, e.homeAccountId)) return;
      if (!!e.username && !this.matchUsername(i.username, e.username)) return;
      if (!!e.environment && !this.matchEnvironment(i, e.environment)) return;
      if (!!e.realm && !this.matchRealm(i, e.realm)) return;
      if (!!e.nativeAccountId && !this.matchNativeAccountId(i, e.nativeAccountId)) return;
      if (!!e.authorityType && !this.matchAuthorityType(i, e.authorityType)) return;
      let s = { localAccountId: e?.localAccountId, name: e?.name }, a = i.tenantProfiles?.filter((c) => this.tenantProfileMatchesFilter(c, s));
      if (a && a.length === 0) return;
      n.push(i);
    }), n;
  }
  credentialMatchesFilter(e, t) {
    if (!!t.clientId && !this.matchClientId(e, t.clientId)) return false;
    if (!!t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash)) return false;
    if (typeof t.homeAccountId === "string" && !this.matchHomeAccountId(e, t.homeAccountId)) return false;
    if (!!t.environment && !this.matchEnvironment(e, t.environment)) return false;
    if (!!t.realm && !this.matchRealm(e, t.realm)) return false;
    if (!!t.credentialType && !this.matchCredentialType(e, t.credentialType)) return false;
    if (!!t.familyId && !this.matchFamilyId(e, t.familyId)) return false;
    if (!!t.target && !this.matchTarget(e, t.target)) return false;
    if (t.requestedClaimsHash || e.requestedClaimsHash) {
      if (e.requestedClaimsHash !== t.requestedClaimsHash) return false;
    }
    if (e.credentialType === Y.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
      if (!!t.tokenType && !this.matchTokenType(e, t.tokenType)) return false;
      if (t.tokenType === F.SSH) {
        if (t.keyId && !this.matchKeyId(e, t.keyId)) return false;
      }
    }
    return true;
  }
  getAppMetadataFilteredBy(e) {
    let t = this.getKeys(), r = {};
    return t.forEach((n) => {
      if (!this.isAppMetadata(n)) return;
      let o = this.getAppMetadata(n);
      if (!o) return;
      if (!!e.environment && !this.matchEnvironment(o, e.environment)) return;
      if (!!e.clientId && !this.matchClientId(o, e.clientId)) return;
      r[n] = o;
    }), r;
  }
  getAuthorityMetadataByAlias(e) {
    let t = this.getAuthorityMetadataKeys(), r = null;
    return t.forEach((n) => {
      if (!this.isAuthorityMetadata(n) || n.indexOf(this.clientId) === -1) return;
      let o = this.getAuthorityMetadata(n);
      if (!o) return;
      if (o.aliases.indexOf(e) === -1) return;
      r = o;
    }), r;
  }
  removeAllAccounts(e) {
    this.getAllAccounts({}, e).forEach((r) => {
      this.removeAccount(r, e);
    });
  }
  removeAccount(e, t) {
    this.removeAccountContext(e, t);
    let r = this.getAccountKeys(), n = (o) => o.includes(e.homeAccountId) && o.includes(e.environment);
    r.filter(n).forEach((o) => {
      this.removeItem(o, t), this.performanceClient.incrementFields({ accountsRemoved: 1 }, t);
    });
  }
  removeAccountContext(e, t) {
    let r = this.getTokenKeys(), n = (o) => o.includes(e.homeAccountId) && o.includes(e.environment);
    r.idToken.filter(n).forEach((o) => {
      this.removeIdToken(o, t);
    }), r.accessToken.filter(n).forEach((o) => {
      this.removeAccessToken(o, t);
    }), r.refreshToken.filter(n).forEach((o) => {
      this.removeRefreshToken(o, t);
    });
  }
  removeAccessToken(e, t) {
    let r = this.getAccessTokenCredential(e, t);
    if (this.removeItem(e, t), this.performanceClient.incrementFields({ accessTokensRemoved: 1 }, t), !r || r.credentialType.toLowerCase() !== Y.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || r.tokenType !== F.POP) return;
    let n = r.keyId;
    if (n) this.cryptoImpl.removeTokenBindingKey(n).catch(() => {
      this.commonLogger.error(`Failed to remove token binding key ${n}`, t), this.performanceClient?.incrementFields({ removeTokenBindingKeyFailure: 1 }, t);
    });
  }
  removeAppMetadata(e) {
    return this.getKeys().forEach((r) => {
      if (this.isAppMetadata(r)) this.removeItem(r, e);
    }), true;
  }
  getIdToken(e, t, r, n, o) {
    this.commonLogger.trace("CacheManager - getIdToken called");
    let i = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: Y.ID_TOKEN, clientId: this.clientId, realm: n }, s = this.getIdTokensByFilter(i, t, r), a = s.size;
    if (a < 1) return this.commonLogger.info("CacheManager:getIdToken - No token found"), null;
    else if (a > 1) {
      let c = s;
      if (!n) {
        let l = /* @__PURE__ */ new Map();
        s.forEach((u, m) => {
          if (u.realm === e.tenantId) l.set(m, u);
        });
        let d = l.size;
        if (d < 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"), s.values().next().value;
        else if (d === 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"), l.values().next().value;
        else c = l;
      }
      if (this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"), c.forEach((l, d) => {
        this.removeIdToken(d, t);
      }), o && t) o.addFields({ multiMatchedID: s.size }, t);
      return null;
    }
    return this.commonLogger.info("CacheManager:getIdToken - Returning ID token"), s.values().next().value;
  }
  getIdTokensByFilter(e, t, r) {
    let n = r && r.idToken || this.getTokenKeys().idToken, o = /* @__PURE__ */ new Map();
    return n.forEach((i) => {
      if (!this.idTokenKeyMatchesFilter(i, { clientId: this.clientId, ...e })) return;
      let s = this.getIdTokenCredential(i, t);
      if (s && this.credentialMatchesFilter(s, e)) o.set(i, s);
    }), o;
  }
  idTokenKeyMatchesFilter(e, t) {
    let r = e.toLowerCase();
    if (t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1) return false;
    if (t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1) return false;
    return true;
  }
  removeIdToken(e, t) {
    this.removeItem(e, t);
  }
  removeRefreshToken(e, t) {
    this.removeItem(e, t);
  }
  getAccessToken(e, t, r, n) {
    let o = t.correlationId;
    this.commonLogger.trace("CacheManager - getAccessToken called", o);
    let i = ce.createSearchScopes(t.scopes), s = t.authenticationScheme || F.BEARER, a = s && s.toLowerCase() !== F.BEARER.toLowerCase() ? Y.ACCESS_TOKEN_WITH_AUTH_SCHEME : Y.ACCESS_TOKEN, c = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: a, clientId: this.clientId, realm: n || e.tenantId, target: i, tokenType: s, keyId: t.sshKid, requestedClaimsHash: t.requestedClaimsHash }, l = r && r.accessToken || this.getTokenKeys().accessToken, d = [];
    l.forEach((m) => {
      if (this.accessTokenKeyMatchesFilter(m, c, true)) {
        let h = this.getAccessTokenCredential(m, o);
        if (h && this.credentialMatchesFilter(h, c)) d.push(h);
      }
    });
    let u = d.length;
    if (u < 1) return this.commonLogger.info("CacheManager:getAccessToken - No token found", o), null;
    else if (u > 1) return this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them", o), d.forEach((m) => {
      this.removeAccessToken(this.generateCredentialKey(m), o);
    }), this.performanceClient.addFields({ multiMatchedAT: d.length }, o), null;
    return this.commonLogger.info("CacheManager:getAccessToken - Returning access token", o), d[0];
  }
  accessTokenKeyMatchesFilter(e, t, r) {
    let n = e.toLowerCase();
    if (t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1) return false;
    if (t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1) return false;
    if (t.realm && n.indexOf(t.realm.toLowerCase()) === -1) return false;
    if (t.requestedClaimsHash && n.indexOf(t.requestedClaimsHash.toLowerCase()) === -1) return false;
    if (t.target) {
      let o = t.target.asArray();
      for (let i = 0; i < o.length; i++) if (r && !n.includes(o[i].toLowerCase())) return false;
      else if (!r && n.includes(o[i].toLowerCase())) return true;
    }
    return true;
  }
  getAccessTokensByFilter(e, t) {
    let r = this.getTokenKeys(), n = [];
    return r.accessToken.forEach((o) => {
      if (!this.accessTokenKeyMatchesFilter(o, e, true)) return;
      let i = this.getAccessTokenCredential(o, t);
      if (i && this.credentialMatchesFilter(i, e)) n.push(i);
    }), n;
  }
  getRefreshToken(e, t, r, n, o) {
    this.commonLogger.trace("CacheManager - getRefreshToken called");
    let i = t ? jt : void 0, s = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: Y.REFRESH_TOKEN, clientId: this.clientId, familyId: i }, a = n && n.refreshToken || this.getTokenKeys().refreshToken, c = [];
    a.forEach((d) => {
      if (this.refreshTokenKeyMatchesFilter(d, s)) {
        let u = this.getRefreshTokenCredential(d, r);
        if (u && this.credentialMatchesFilter(u, s)) c.push(u);
      }
    });
    let l = c.length;
    if (l < 1) return this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null;
    if (l > 1 && o && r) o.addFields({ multiMatchedRT: l }, r);
    return this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), c[0];
  }
  refreshTokenKeyMatchesFilter(e, t) {
    let r = e.toLowerCase();
    if (t.familyId && r.indexOf(t.familyId.toLowerCase()) === -1) return false;
    if (!t.familyId && t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1) return false;
    if (t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1) return false;
    return true;
  }
  readAppMetadataFromCache(e) {
    let t = { environment: e, clientId: this.clientId }, r = this.getAppMetadataFilteredBy(t), n = Object.keys(r).map((i) => r[i]), o = n.length;
    if (o < 1) return null;
    else if (o > 1) throw g(In);
    return n[0];
  }
  isAppMetadataFOCI(e) {
    let t = this.readAppMetadataFromCache(e);
    return !!(t && t.familyId === jt);
  }
  matchHomeAccountId(e, t) {
    return typeof e.homeAccountId === "string" && t === e.homeAccountId;
  }
  matchLocalAccountIdFromTokenClaims(e, t) {
    let r = e.oid || e.sub;
    return t === r;
  }
  matchLocalAccountIdFromTenantProfile(e, t) {
    return e.localAccountId === t;
  }
  matchName(e, t) {
    return t.toLowerCase() === e.name?.toLowerCase();
  }
  matchUsername(e, t) {
    return !!(e && typeof e === "string" && t?.toLowerCase() === e.toLowerCase());
  }
  matchUserAssertionHash(e, t) {
    return !!(e.userAssertionHash && t === e.userAssertionHash);
  }
  matchEnvironment(e, t) {
    if (this.staticAuthorityOptions) {
      let n = Ku(this.staticAuthorityOptions, this.commonLogger);
      if (n.includes(t) && n.includes(e.environment)) return true;
    }
    let r = this.getAuthorityMetadataByAlias(t);
    if (r && r.aliases.indexOf(e.environment) > -1) return true;
    return false;
  }
  matchCredentialType(e, t) {
    return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
  }
  matchClientId(e, t) {
    return !!(e.clientId && t === e.clientId);
  }
  matchFamilyId(e, t) {
    return !!(e.familyId && t === e.familyId);
  }
  matchRealm(e, t) {
    return e.realm?.toLowerCase() === t.toLowerCase();
  }
  matchNativeAccountId(e, t) {
    return !!(e.nativeAccountId && t === e.nativeAccountId);
  }
  matchLoginHintFromTokenClaims(e, t) {
    if (e.login_hint === t) return true;
    if (e.preferred_username === t) return true;
    if (e.upn === t) return true;
    return false;
  }
  matchSid(e, t) {
    return e.sid === t;
  }
  matchAuthorityType(e, t) {
    return !!(e.authorityType && t.toLowerCase() === e.authorityType.toLowerCase());
  }
  matchTarget(e, t) {
    if (e.credentialType !== Y.ACCESS_TOKEN && e.credentialType !== Y.ACCESS_TOKEN_WITH_AUTH_SCHEME || !e.target) return false;
    return ce.fromString(e.target).containsScopeSet(t);
  }
  matchTokenType(e, t) {
    return !!(e.tokenType && e.tokenType === t);
  }
  matchKeyId(e, t) {
    return !!(e.keyId && e.keyId === t);
  }
  isAppMetadata(e) {
    return e.indexOf(Eo) !== -1;
  }
  isAuthorityMetadata(e) {
    return e.indexOf(fn.CACHE_KEY) !== -1;
  }
  generateAuthorityMetadataCacheKey(e) {
    return `${fn.CACHE_KEY}-${this.clientId}-${e}`;
  }
  static toObject(e, t) {
    for (let r in t) e[r] = t[r];
    return e;
  }
}
class Zi extends br {
  async setAccount() {
    throw g(U);
  }
  getAccount() {
    throw g(U);
  }
  async setIdTokenCredential() {
    throw g(U);
  }
  getIdTokenCredential() {
    throw g(U);
  }
  async setAccessTokenCredential() {
    throw g(U);
  }
  getAccessTokenCredential() {
    throw g(U);
  }
  async setRefreshTokenCredential() {
    throw g(U);
  }
  getRefreshTokenCredential() {
    throw g(U);
  }
  setAppMetadata() {
    throw g(U);
  }
  getAppMetadata() {
    throw g(U);
  }
  setServerTelemetry() {
    throw g(U);
  }
  getServerTelemetry() {
    throw g(U);
  }
  setAuthorityMetadata() {
    throw g(U);
  }
  getAuthorityMetadata() {
    throw g(U);
  }
  getAuthorityMetadataKeys() {
    throw g(U);
  }
  setThrottlingCache() {
    throw g(U);
  }
  getThrottlingCache() {
    throw g(U);
  }
  removeItem() {
    throw g(U);
  }
  getKeys() {
    throw g(U);
  }
  getAccountKeys() {
    throw g(U);
  }
  getTokenKeys() {
    throw g(U);
  }
  generateCredentialKey() {
    throw g(U);
  }
  generateAccountKey() {
    throw g(U);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var f = { AcquireTokenByCode: "acquireTokenByCode", AcquireTokenByRefreshToken: "acquireTokenByRefreshToken", AcquireTokenSilent: "acquireTokenSilent", AcquireTokenSilentAsync: "acquireTokenSilentAsync", AcquireTokenPopup: "acquireTokenPopup", AcquireTokenPreRedirect: "acquireTokenPreRedirect", AcquireTokenRedirect: "acquireTokenRedirect", CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint", CryptoOptsSignJwt: "cryptoOptsSignJwt", SilentCacheClientAcquireToken: "silentCacheClientAcquireToken", SilentIframeClientAcquireToken: "silentIframeClientAcquireToken", AwaitConcurrentIframe: "awaitConcurrentIframe", SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken", SsoSilent: "ssoSilent", StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority", FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker", NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken", BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders", NetworkClientSendPostRequestAsync: "networkClientSendPostRequestAsync", RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint", AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint", BrokerHandhshake: "brokerHandshake", AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker", AcquireTokenByBroker: "acquireTokenByBroker", RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest", RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken", RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken", RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken", RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody", AcquireTokenFromCache: "acquireTokenFromCache", SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken", SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord", AcquireTokenBySilentIframe: "acquireTokenBySilentIframe", InitializeBaseRequest: "initializeBaseRequest", InitializeSilentRequest: "initializeSilentRequest", InitializeClientApplication: "initializeClientApplication", InitializeCache: "initializeCache", SilentIframeClientTokenHelper: "silentIframeClientTokenHelper", SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest", SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash", SilentHandlerLoadFrame: "silentHandlerLoadFrame", SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync", StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient", StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration", StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest", GetAuthCodeUrl: "getAuthCodeUrl", GetStandardParams: "getStandardParams", HandleCodeResponseFromServer: "handleCodeResponseFromServer", HandleCodeResponse: "handleCodeResponse", HandleResponseEar: "handleResponseEar", HandleResponsePlatformBroker: "handleResponsePlatformBroker", HandleResponseCode: "handleResponseCode", UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority", AuthClientAcquireToken: "authClientAcquireToken", AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest", AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody", PopTokenGenerateCnf: "popTokenGenerateCnf", PopTokenGenerateKid: "popTokenGenerateKid", HandleServerTokenResponse: "handleServerTokenResponse", DeserializeResponse: "deserializeResponse", AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance", AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync", AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources", AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork", AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata", AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork", AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata", AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation", RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion", RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS", RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion", AcquireTokenByCodeAsync: "acquireTokenByCodeAsync", GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork", GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement", HandleRedirectPromiseMeasurement: "handleRedirectPromise", HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise", UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement", UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken", NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake", NativeGenerateAuthResult: "nativeGenerateAuthResult", RemoveHiddenIframe: "removeHiddenIframe", ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims", CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken", ImportExistingCache: "importExistingCache", SetUserData: "setUserData", LocalStorageUpdated: "localStorageUpdated", GeneratePkceCodes: "generatePkceCodes", GenerateCodeVerifier: "generateCodeVerifier", GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier", Sha256Digest: "sha256Digest", GetRandomValues: "getRandomValues", GenerateHKDF: "generateHKDF", GenerateBaseKey: "generateBaseKey", Base64Decode: "base64Decode", UrlEncodeArr: "urlEncodeArr", Encrypt: "encrypt", Decrypt: "decrypt", GenerateEarKey: "generateEarKey", DecryptEarResponse: "decryptEarResponse" }, zM = /* @__PURE__ */ new Map([[f.AcquireTokenByCode, "ATByCode"], [f.AcquireTokenByRefreshToken, "ATByRT"], [f.AcquireTokenSilent, "ATS"], [f.AcquireTokenSilentAsync, "ATSAsync"], [f.AcquireTokenPopup, "ATPopup"], [f.AcquireTokenRedirect, "ATRedirect"], [f.CryptoOptsGetPublicKeyThumbprint, "CryptoGetPKThumb"], [f.CryptoOptsSignJwt, "CryptoSignJwt"], [f.SilentCacheClientAcquireToken, "SltCacheClientAT"], [f.SilentIframeClientAcquireToken, "SltIframeClientAT"], [f.SilentRefreshClientAcquireToken, "SltRClientAT"], [f.SsoSilent, "SsoSlt"], [f.StandardInteractionClientGetDiscoveredAuthority, "StdIntClientGetDiscAuth"], [f.FetchAccountIdWithNativeBroker, "FetchAccIdWithNtvBroker"], [f.NativeInteractionClientAcquireToken, "NtvIntClientAT"], [f.BaseClientCreateTokenRequestHeaders, "BaseClientCreateTReqHead"], [f.NetworkClientSendPostRequestAsync, "NetClientSendPost"], [f.RefreshTokenClientExecutePostToTokenEndpoint, "RTClientExecPost"], [f.AuthorizationCodeClientExecutePostToTokenEndpoint, "AuthCodeClientExecPost"], [f.BrokerHandhshake, "BrokerHandshake"], [f.AcquireTokenByRefreshTokenInBroker, "ATByRTInBroker"], [f.AcquireTokenByBroker, "ATByBroker"], [f.RefreshTokenClientExecuteTokenRequest, "RTClientExecTReq"], [f.RefreshTokenClientAcquireToken, "RTClientAT"], [f.RefreshTokenClientAcquireTokenWithCachedRefreshToken, "RTClientATWithCachedRT"], [f.RefreshTokenClientAcquireTokenByRefreshToken, "RTClientATByRT"], [f.RefreshTokenClientCreateTokenRequestBody, "RTClientCreateTReqBody"], [f.AcquireTokenFromCache, "ATFromCache"], [f.SilentFlowClientAcquireCachedToken, "SltFlowClientATCached"], [f.SilentFlowClientGenerateResultFromCacheRecord, "SltFlowClientGenResFromCache"], [f.AcquireTokenBySilentIframe, "ATBySltIframe"], [f.InitializeBaseRequest, "InitBaseReq"], [f.InitializeSilentRequest, "InitSltReq"], [f.InitializeClientApplication, "InitClientApplication"], [f.InitializeCache, "InitCache"], [f.ImportExistingCache, "importCache"], [f.SetUserData, "setUserData"], [f.LocalStorageUpdated, "localStorageUpdated"], [f.SilentIframeClientTokenHelper, "SIClientTHelper"], [f.SilentHandlerInitiateAuthRequest, "SHandlerInitAuthReq"], [f.SilentHandlerMonitorIframeForHash, "SltHandlerMonitorIframeForHash"], [f.SilentHandlerLoadFrame, "SHandlerLoadFrame"], [f.SilentHandlerLoadFrameSync, "SHandlerLoadFrameSync"], [f.StandardInteractionClientCreateAuthCodeClient, "StdIntClientCreateAuthCodeClient"], [f.StandardInteractionClientGetClientConfiguration, "StdIntClientGetClientConf"], [f.StandardInteractionClientInitializeAuthorizationRequest, "StdIntClientInitAuthReq"], [f.GetAuthCodeUrl, "GetAuthCodeUrl"], [f.HandleCodeResponseFromServer, "HandleCodeResFromServer"], [f.HandleCodeResponse, "HandleCodeResp"], [f.HandleResponseEar, "HandleRespEar"], [f.HandleResponseCode, "HandleRespCode"], [f.HandleResponsePlatformBroker, "HandleRespPlatBroker"], [f.UpdateTokenEndpointAuthority, "UpdTEndpointAuth"], [f.AuthClientAcquireToken, "AuthClientAT"], [f.AuthClientExecuteTokenRequest, "AuthClientExecTReq"], [f.AuthClientCreateTokenRequestBody, "AuthClientCreateTReqBody"], [f.PopTokenGenerateCnf, "PopTGenCnf"], [f.PopTokenGenerateKid, "PopTGenKid"], [f.HandleServerTokenResponse, "HandleServerTRes"], [f.DeserializeResponse, "DeserializeRes"], [f.AuthorityFactoryCreateDiscoveredInstance, "AuthFactCreateDiscInst"], [f.AuthorityResolveEndpointsAsync, "AuthResolveEndpointsAsync"], [f.AuthorityResolveEndpointsFromLocalSources, "AuthResolveEndpointsFromLocal"], [f.AuthorityGetCloudDiscoveryMetadataFromNetwork, "AuthGetCDMetaFromNet"], [f.AuthorityUpdateCloudDiscoveryMetadata, "AuthUpdCDMeta"], [f.AuthorityGetEndpointMetadataFromNetwork, "AuthUpdCDMetaFromNet"], [f.AuthorityUpdateEndpointMetadata, "AuthUpdEndpointMeta"], [f.AuthorityUpdateMetadataWithRegionalInformation, "AuthUpdMetaWithRegInfo"], [f.RegionDiscoveryDetectRegion, "RegDiscDetectReg"], [f.RegionDiscoveryGetRegionFromIMDS, "RegDiscGetRegFromIMDS"], [f.RegionDiscoveryGetCurrentVersion, "RegDiscGetCurrentVer"], [f.AcquireTokenByCodeAsync, "ATByCodeAsync"], [f.GetEndpointMetadataFromNetwork, "GetEndpointMetaFromNet"], [f.GetCloudDiscoveryMetadataFromNetworkMeasurement, "GetCDMetaFromNet"], [f.HandleRedirectPromiseMeasurement, "HandleRedirectPromise"], [f.HandleNativeRedirectPromiseMeasurement, "HandleNtvRedirectPromise"], [f.UpdateCloudDiscoveryMetadataMeasurement, "UpdateCDMeta"], [f.UsernamePasswordClientAcquireToken, "UserPassClientAT"], [f.NativeMessageHandlerHandshake, "NtvMsgHandlerHandshake"], [f.NativeGenerateAuthResult, "NtvGenAuthRes"], [f.RemoveHiddenIframe, "RemoveHiddenIframe"], [f.ClearTokensAndKeysWithClaims, "ClearTAndKeysWithClaims"], [f.CacheManagerGetRefreshToken, "CacheManagerGetRT"], [f.GeneratePkceCodes, "GenPkceCodes"], [f.GenerateCodeVerifier, "GenCodeVerifier"], [f.GenerateCodeChallengeFromVerifier, "GenCodeChallengeFromVerifier"], [f.Sha256Digest, "Sha256Digest"], [f.GetRandomValues, "GetRandomValues"], [f.GenerateHKDF, "genHKDF"], [f.GenerateBaseKey, "genBaseKey"], [f.Base64Decode, "b64Decode"], [f.UrlEncodeArr, "urlEncArr"], [f.Encrypt, "encrypt"], [f.Decrypt, "decrypt"], [f.GenerateEarKey, "genEarKey"], [f.DecryptEarResponse, "decryptEarResp"]]), Qu = { NotStarted: 0, InProgress: 1, Completed: 2 };
/*! @azure/msal-common v15.13.1 2025-10-29 */
class Cc {
  startMeasurement() {
    return;
  }
  endMeasurement() {
    return;
  }
  flushMeasurement() {
    return null;
  }
}
class qn {
  generateId() {
    return "callback-id";
  }
  startMeasurement(e, t) {
    return { end: () => null, discard: () => {
    }, add: () => {
    }, increment: () => {
    }, event: { eventId: this.generateId(), status: Qu.InProgress, authority: "", libraryName: "", libraryVersion: "", clientId: "", name: e, startTimeMs: Date.now(), correlationId: t || "" }, measurement: new Cc() };
  }
  startPerformanceMeasurement() {
    return new Cc();
  }
  calculateQueuedTime() {
    return 0;
  }
  addQueueMeasurement() {
    return;
  }
  setPreQueueTime() {
    return;
  }
  endMeasurement() {
    return null;
  }
  discardMeasurements() {
    return;
  }
  removePerformanceCallback() {
    return true;
  }
  addPerformanceCallback() {
    return "";
  }
  emitEvents() {
    return;
  }
  addFields() {
    return;
  }
  incrementFields() {
    return;
  }
  cacheEventByCorrelationId() {
    return;
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var rT = { tokenRenewalOffsetSeconds: mn, preventCorsPreflight: false }, nT = { loggerCallback: () => {
}, piiLoggingEnabled: false, logLevel: j.Info, correlationId: p.EMPTY_STRING }, oT = { claimsBasedCachingEnabled: false }, iT = { async sendGetRequestAsync() {
  throw g(U);
}, async sendPostRequestAsync() {
  throw g(U);
} }, sT = { sku: p.SKU, version: Pn, cpu: p.EMPTY_STRING, os: p.EMPTY_STRING }, aT = { clientSecret: p.EMPTY_STRING, clientAssertion: void 0 }, cT = { azureCloudInstance: Qt.None, tenant: `${p.DEFAULT_COMMON_TENANT}` }, lT = { application: { appName: "", appVersion: "" } };
function Xu({ authOptions: e, systemOptions: t, loggerOptions: r, cacheOptions: n, storageInterface: o, networkInterface: i, cryptoInterface: s, clientCredentials: a, libraryInfo: c, telemetry: l, serverTelemetryManager: d, persistencePlugin: u, serializableCache: m }) {
  let h = { ...nT, ...r };
  return { authOptions: dT(e), systemOptions: { ...rT, ...t }, loggerOptions: h, cacheOptions: { ...oT, ...n }, storageInterface: o || new Zi(e.clientId, Nn, new ze(h), new qn()), networkInterface: i || iT, cryptoInterface: s || Nn, clientCredentials: a || aT, libraryInfo: { ...sT, ...c }, telemetry: { ...lT, ...l }, serverTelemetryManager: d || null, persistencePlugin: u || null, serializableCache: m || null };
}
function dT(e) {
  return { clientCapabilities: [], azureCloudOptions: cT, skipAuthorityMetadataCache: false, instanceAware: false, encodeExtraQueryParams: false, ...e };
}
function es(e) {
  return e.authOptions.authority.options.protocolMode === ve.OIDC;
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var ke = { HOME_ACCOUNT_ID: "home_account_id", UPN: "UPN" };
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Ot = "client_id", Ac = "redirect_uri", Ju = "response_type", Zu = "response_mode", eh = "grant_type", th = "claims", rh = "scope";
var nh = "refresh_token";
var oh = "state", ih = "nonce", sh = "prompt";
var ah = "code", ch = "code_challenge", lh = "code_challenge_method", dh = "code_verifier", uh = "client-request-id", hh = "x-client-SKU", fh = "x-client-VER", mh = "x-client-OS", ph = "x-client-CPU", gh = "x-client-current-telemetry", yh = "x-client-last-telemetry", Eh = "x-ms-lib-capability", Th = "x-app-name", Ch = "x-app-ver", Ah = "post_logout_redirect_uri", Ih = "id_token_hint", _h = "device_code", Sh = "client_secret", Rh = "client_assertion", wh = "client_assertion_type", Ic = "token_type", _c = "req_cnf", vh = "assertion", kh = "requested_token_use", uT = "on_behalf_of";
var Sc = "return_spa_code";
var bh = "logout_hint", Oh = "sid", Nh = "login_hint", Ph = "domain_hint", xh = "x-client-xtra-sku", ts = "brk_client_id", Rc = "brk_redirect_uri", xo = "instance_aware";
/*! @azure/msal-common v15.13.1 2025-10-29 */
function zn(e, t, r) {
  if (!t) return;
  let n = e.get(Ot);
  if (n && e.has(ts)) r?.addFields({ embeddedClientId: n, embeddedRedirectUri: e.get(Ac) }, t);
}
function Mh(e, t) {
  e.set(Ju, t);
}
function Dh(e, t) {
  e.set(Zu, t ? t : wt.QUERY);
}
function ot(e, t, r = true, n = Ae) {
  if (r && !n.includes("openid") && !t.includes("openid")) n.push("openid");
  let o = r ? [...t || [], ...n] : t || [], i = new ce(o);
  e.set(rh, i.printScopes());
}
function it(e, t) {
  e.set(Ot, t);
}
function Gn(e, t) {
  e.set(Ac, t);
}
function Uh(e, t) {
  e.set(Ah, t);
}
function Lh(e, t) {
  e.set(Ih, t);
}
function Hh(e, t) {
  e.set(Ph, t);
}
function Mo(e, t) {
  e.set(Nh, t);
}
function Jt(e, t) {
  e.set(X.CCS_HEADER, `UPN:${t}`);
}
function Zt(e, t) {
  e.set(X.CCS_HEADER, `Oid:${t.uid}@${t.utid}`);
}
function vc(e, t) {
  e.set(Oh, t);
}
function st(e, t, r) {
  let n = gT(t, r);
  try {
    JSON.parse(n);
  } catch (o) {
    throw W(wr);
  }
  e.set(th, n);
}
function Et(e, t) {
  e.set(uh, t);
}
function Nt(e, t) {
  if (e.set(hh, t.sku), e.set(fh, t.version), t.os) e.set(mh, t.os);
  if (t.cpu) e.set(ph, t.cpu);
}
function Pt(e, t) {
  if (t?.appName) e.set(Th, t.appName);
  if (t?.appVersion) e.set(Ch, t.appVersion);
}
function $h(e, t) {
  e.set(sh, t);
}
function rs(e, t) {
  if (t) e.set(oh, t);
}
function Fh(e, t) {
  e.set(ih, t);
}
function hT(e, t, r) {
  if (t && r) e.set(ch, t), e.set(lh, r);
  else throw W(Hn);
}
function Bh(e, t) {
  e.set(ah, t);
}
function fT(e, t) {
  e.set(_h, t);
}
function qh(e, t) {
  e.set(nh, t);
}
function zh(e, t) {
  e.set(dh, t);
}
function Or(e, t) {
  e.set(Sh, t);
}
function Nr(e, t) {
  if (t) e.set(Rh, t);
}
function Pr(e, t) {
  if (t) e.set(wh, t);
}
function mT(e, t) {
  e.set(vh, t);
}
function pT(e, t) {
  e.set(kh, t);
}
function er(e, t) {
  e.set(eh, t);
}
function xt(e) {
  e.set(Hu, "1");
}
function ns(e) {
  if (!e.has(xo)) e.set(xo, "true");
}
function Ge(e, t) {
  Object.entries(t).forEach(([r, n]) => {
    if (!e.has(r) && n) e.set(r, n);
  });
}
function gT(e, t) {
  let r;
  if (!e) r = {};
  else try {
    r = JSON.parse(e);
  } catch (n) {
    throw W(wr);
  }
  if (t && t.length > 0) {
    if (!r.hasOwnProperty(pr.ACCESS_TOKEN)) r[pr.ACCESS_TOKEN] = {};
    r[pr.ACCESS_TOKEN][pr.XMS_CC] = { values: t };
  }
  return JSON.stringify(r);
}
function yT(e, t) {
  e.set(Co.username, t);
}
function ET(e, t) {
  e.set(Co.password, t);
}
function os(e, t) {
  if (t) e.set(Ic, F.POP), e.set(_c, t);
}
function is(e, t) {
  if (t) e.set(Ic, F.SSH), e.set(_c, t);
}
function tr(e, t) {
  e.set(gh, t.generateCurrentRequestHeaderValue()), e.set(yh, t.generateLastRequestHeaderValue());
}
function rr(e) {
  e.set(Eh, pt.X_MS_LIB_CAPABILITY_VALUE);
}
function Gh(e, t) {
  e.set(bh, t);
}
function nr(e, t, r) {
  if (!e.has(ts)) e.set(ts, t);
  if (!e.has(Rc)) e.set(Rc, r);
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function jh(e) {
  return e.hasOwnProperty("authorization_endpoint") && e.hasOwnProperty("token_endpoint") && e.hasOwnProperty("issuer") && e.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function Vh(e) {
  return e.hasOwnProperty("tenant_discovery_endpoint") && e.hasOwnProperty("metadata");
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function Kh(e) {
  return e.hasOwnProperty("error") && e.hasOwnProperty("error_description");
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Yh = (e, t, r, n, o) => (...i) => {
  r.trace(`Executing function ${t}`);
  let s = n?.startMeasurement(t, o);
  if (o) {
    let a = t + "CallCount";
    n?.incrementFields({ [a]: 1 }, o);
  }
  try {
    let a = e(...i);
    return s?.end({ success: true }), r.trace(`Returning result from ${t}`), a;
  } catch (a) {
    r.trace(`Error occurred in ${t}`);
    try {
      r.trace(JSON.stringify(a));
    } catch (c) {
      r.trace("Unable to print error message.");
    }
    throw s?.end({ success: false }, a), a;
  }
}, q = (e, t, r, n, o) => (...i) => {
  r.trace(`Executing function ${t}`);
  let s = n?.startMeasurement(t, o);
  if (o) {
    let a = t + "CallCount";
    n?.incrementFields({ [a]: 1 }, o);
  }
  return n?.setPreQueueTime(t, o), e(...i).then((a) => (r.trace(`Returning result from ${t}`), s?.end({ success: true }), a)).catch((a) => {
    r.trace(`Error occurred in ${t}`);
    try {
      r.trace(JSON.stringify(a));
    } catch (c) {
      r.trace("Unable to print error message.");
    }
    throw s?.end({ success: false }, a), a;
  });
};
/*! @azure/msal-common v15.13.1 2025-10-29 */
class Do {
  constructor(e, t, r, n) {
    this.networkInterface = e, this.logger = t, this.performanceClient = r, this.correlationId = n;
  }
  async detectRegion(e, t) {
    this.performanceClient?.addQueueMeasurement(f.RegionDiscoveryDetectRegion, this.correlationId);
    let r = e;
    if (!r) {
      let n = Do.IMDS_OPTIONS;
      try {
        let o = await q(this.getRegionFromIMDS.bind(this), f.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(p.IMDS_VERSION, n);
        if (o.status === N.SUCCESS) r = o.body, t.region_source = Er.IMDS;
        if (o.status === N.BAD_REQUEST) {
          let i = await q(this.getCurrentVersion.bind(this), f.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(n);
          if (!i) return t.region_source = Er.FAILED_AUTO_DETECTION, null;
          let s = await q(this.getRegionFromIMDS.bind(this), f.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(i, n);
          if (s.status === N.SUCCESS) r = s.body, t.region_source = Er.IMDS;
        }
      } catch (o) {
        return t.region_source = Er.FAILED_AUTO_DETECTION, null;
      }
    } else t.region_source = Er.ENVIRONMENT_VARIABLE;
    if (!r) t.region_source = Er.FAILED_AUTO_DETECTION;
    return r || null;
  }
  async getRegionFromIMDS(e, t) {
    return this.performanceClient?.addQueueMeasurement(f.RegionDiscoveryGetRegionFromIMDS, this.correlationId), this.networkInterface.sendGetRequestAsync(`${p.IMDS_ENDPOINT}?api-version=${e}&format=text`, t, p.IMDS_TIMEOUT);
  }
  async getCurrentVersion(e) {
    this.performanceClient?.addQueueMeasurement(f.RegionDiscoveryGetCurrentVersion, this.correlationId);
    try {
      let t = await this.networkInterface.sendGetRequestAsync(`${p.IMDS_ENDPOINT}?format=json`, e);
      if (t.status === N.BAD_REQUEST && t.body && t.body["newest-versions"] && t.body["newest-versions"].length > 0) return t.body["newest-versions"][0];
      return null;
    } catch (t) {
      return null;
    }
  }
}
Do.IMDS_OPTIONS = { headers: { Metadata: "true" } };
/*! @azure/msal-common v15.13.1 2025-10-29 */
function Z() {
  return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
}
function ss(e) {
  if (e) return new Date(Number(e) * 1e3);
  return /* @__PURE__ */ new Date();
}
function or(e, t) {
  let r = Number(e) || 0;
  return Z() + t > r;
}
function Wh(e) {
  return Number(e) > Z();
}
function TT(e, t) {
  return new Promise((r) => setTimeout(() => r(t), e));
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function Qh(e, t, r, n, o) {
  return { credentialType: Y.ID_TOKEN, homeAccountId: e, environment: t, clientId: n, secret: r, realm: o, lastUpdatedAt: Date.now().toString() };
}
function Xh(e, t, r, n, o, i, s, a, c, l, d, u, m, h, y) {
  let E = { homeAccountId: e, credentialType: Y.ACCESS_TOKEN, secret: r, cachedAt: Z().toString(), expiresOn: s.toString(), extendedExpiresOn: a.toString(), environment: t, clientId: n, realm: o, target: i, tokenType: d || F.BEARER, lastUpdatedAt: Date.now().toString() };
  if (u) E.userAssertionHash = u;
  if (l) E.refreshOn = l.toString();
  if (h) E.requestedClaims = h, E.requestedClaimsHash = y;
  if (E.tokenType?.toLowerCase() !== F.BEARER.toLowerCase()) switch (E.credentialType = Y.ACCESS_TOKEN_WITH_AUTH_SCHEME, E.tokenType) {
    case F.POP:
      let S = bt(r, c);
      if (!S?.cnf?.kid) throw g(kn);
      E.keyId = S.cnf.kid;
      break;
    case F.SSH:
      E.keyId = m;
  }
  return E;
}
function Jh(e, t, r, n, o, i, s) {
  let a = { credentialType: Y.REFRESH_TOKEN, homeAccountId: e, environment: t, clientId: n, secret: r, lastUpdatedAt: Date.now().toString() };
  if (i) a.userAssertionHash = i;
  if (o) a.familyId = o;
  if (s) a.expiresOn = s.toString();
  return a;
}
function kc(e) {
  return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret");
}
function Zh(e) {
  if (!e) return false;
  return kc(e) && e.hasOwnProperty("realm") && e.hasOwnProperty("target") && (e.credentialType === Y.ACCESS_TOKEN || e.credentialType === Y.ACCESS_TOKEN_WITH_AUTH_SCHEME);
}
function ef(e) {
  if (!e) return false;
  return kc(e) && e.hasOwnProperty("realm") && e.credentialType === Y.ID_TOKEN;
}
function tf(e) {
  if (!e) return false;
  return kc(e) && e.credentialType === Y.REFRESH_TOKEN;
}
function CT(e, t) {
  let r = e.indexOf(me.CACHE_KEY) === 0, n = true;
  if (t) n = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits");
  return r && n;
}
function AT(e, t) {
  let r = false;
  if (e) r = e.indexOf(pt.THROTTLING_PREFIX) === 0;
  let n = true;
  if (t) n = t.hasOwnProperty("throttleTime");
  return r && n;
}
function IT({ environment: e, clientId: t }) {
  return [Eo, e, t].join(vt.CACHE_KEY_SEPARATOR).toLowerCase();
}
function rf(e, t) {
  if (!t) return false;
  return e.indexOf(Eo) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment");
}
function _T(e, t) {
  if (!t) return false;
  return e.indexOf(fn.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri");
}
function bc() {
  return Z() + fn.REFRESH_TIME_SECONDS;
}
function Uo(e, t, r) {
  e.authorization_endpoint = t.authorization_endpoint, e.token_endpoint = t.token_endpoint, e.end_session_endpoint = t.end_session_endpoint, e.issuer = t.issuer, e.endpointsFromNetwork = r, e.jwks_uri = t.jwks_uri;
}
function as(e, t, r) {
  e.aliases = t.aliases, e.preferred_cache = t.preferred_cache, e.preferred_network = t.preferred_network, e.aliasesFromNetwork = r;
}
function Oc(e) {
  return e.expiresAt <= Z();
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class pe {
  constructor(e, t, r, n, o, i, s, a) {
    this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = r, this.authorityOptions = n, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = o, this.performanceClient = s, this.correlationId = i, this.managedIdentity = a || false, this.regionDiscovery = new Do(t, this.logger, this.performanceClient, this.correlationId);
  }
  getAuthorityType(e) {
    if (e.HostNameAndPort.endsWith(p.CIAM_AUTH_URL)) return We.Ciam;
    let t = e.PathSegments;
    if (t.length) switch (t[0].toLowerCase()) {
      case p.ADFS:
        return We.Adfs;
      case p.DSTS:
        return We.Dsts;
    }
    return We.Default;
  }
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  get options() {
    return this.authorityOptions;
  }
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  set canonicalAuthority(e) {
    this._canonicalAuthority = new M(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
  }
  get canonicalAuthorityUrlComponents() {
    if (!this._canonicalAuthorityUrlComponents) this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
    return this._canonicalAuthorityUrlComponents;
  }
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  get authorizationEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint);
    else throw g(He);
  }
  get tokenEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint);
    else throw g(He);
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
    else throw g(He);
  }
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) throw g(bn);
      return this.replacePath(this.metadata.end_session_endpoint);
    } else throw g(He);
  }
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer);
    else throw g(He);
  }
  get jwksUri() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri);
    else throw g(He);
  }
  canReplaceTenant(e) {
    return e.PathSegments.length === 1 && !pe.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === We.Default && this.protocolMode !== ve.OIDC;
  }
  replaceTenant(e) {
    return e.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  replacePath(e) {
    let t = e, n = new M(this.metadata.canonical_authority).getUrlComponents(), o = n.PathSegments;
    return this.canonicalAuthorityUrlComponents.PathSegments.forEach((s, a) => {
      let c = o[a];
      if (a === 0 && this.canReplaceTenant(n)) {
        let l = new M(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
        if (c !== l) this.logger.verbose(`Replacing tenant domain name ${c} with id ${l}`), c = l;
      }
      if (s !== c) t = t.replace(`/${c}/`, `/${s}/`);
    }), this.replaceTenant(t);
  }
  get defaultOpenIdConfigurationEndpoint() {
    let e = this.hostnameAndPort;
    if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === We.Adfs || this.protocolMode === ve.OIDC && !this.isAliasOfKnownMicrosoftAuthority(e)) return `${this.canonicalAuthority}.well-known/openid-configuration`;
    return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  discoveryComplete() {
    return !!this.metadata;
  }
  async resolveEndpointsAsync() {
    this.performanceClient?.addQueueMeasurement(f.AuthorityResolveEndpointsAsync, this.correlationId);
    let e = this.getCurrentMetadataEntity(), t = await q(this.updateCloudDiscoveryMetadata.bind(this), f.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(e);
    this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, e.preferred_network);
    let r = await q(this.updateEndpointMetadata.bind(this), f.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(e);
    this.updateCachedMetadata(e, t, { source: r }), this.performanceClient?.addFields({ cloudDiscoverySource: t, authorityEndpointSource: r }, this.correlationId);
  }
  getCurrentMetadataEntity() {
    let e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
    if (!e) e = { aliases: [], preferred_cache: this.hostnameAndPort, preferred_network: this.hostnameAndPort, canonical_authority: this.canonicalAuthority, authorization_endpoint: "", token_endpoint: "", end_session_endpoint: "", issuer: "", aliasesFromNetwork: false, endpointsFromNetwork: false, expiresAt: bc(), jwks_uri: "" };
    return e;
  }
  updateCachedMetadata(e, t, r) {
    if (t !== we.CACHE && r?.source !== we.CACHE) e.expiresAt = bc(), e.canonical_authority = this.canonicalAuthority;
    let n = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache);
    this.cacheManager.setAuthorityMetadata(n, e), this.metadata = e;
  }
  async updateEndpointMetadata(e) {
    this.performanceClient?.addQueueMeasurement(f.AuthorityUpdateEndpointMetadata, this.correlationId);
    let t = this.updateEndpointMetadataFromLocalSources(e);
    if (t) {
      if (t.source === we.HARDCODED_VALUES) {
        if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
          if (t.metadata) {
            let n = await q(this.updateMetadataWithRegionalInformation.bind(this), f.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(t.metadata);
            Uo(e, n, false), e.canonical_authority = this.canonicalAuthority;
          }
        }
      }
      return t.source;
    }
    let r = await q(this.getEndpointMetadataFromNetwork.bind(this), f.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (r) {
      if (this.authorityOptions.azureRegionConfiguration?.azureRegion) r = await q(this.updateMetadataWithRegionalInformation.bind(this), f.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(r);
      return Uo(e, r, true), we.NETWORK;
    } else throw g(yn, this.defaultOpenIdConfigurationEndpoint);
  }
  updateEndpointMetadataFromLocalSources(e) {
    this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
    let t = this.getEndpointMetadataFromConfig();
    if (t) return this.logger.verbose("Found endpoint metadata in authority configuration"), Uo(e, t, false), { source: we.CONFIG };
    if (this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."), this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
    else {
      let n = this.getEndpointMetadataFromHardcodedValues();
      if (n) return Uo(e, n, false), { source: we.HARDCODED_VALUES, metadata: n };
      else this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
    }
    let r = Oc(e);
    if (this.isAuthoritySameType(e) && e.endpointsFromNetwork && !r) return this.logger.verbose("Found endpoint metadata in the cache."), { source: we.CACHE };
    else if (r) this.logger.verbose("The metadata entity is expired.");
    return null;
  }
  isAuthoritySameType(e) {
    return new M(e.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  }
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata) try {
      return JSON.parse(this.authorityOptions.authorityMetadata);
    } catch (e) {
      throw W($n);
    }
    return null;
  }
  async getEndpointMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(f.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
    let e = {}, t = this.defaultOpenIdConfigurationEndpoint;
    this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${t}`);
    try {
      let r = await this.networkInterface.sendGetRequestAsync(t, e);
      if (jh(r.body)) return r.body;
      else return this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"), null;
    } catch (r) {
      return this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${r}`), null;
    }
  }
  getEndpointMetadataFromHardcodedValues() {
    if (this.hostnameAndPort in pc) return pc[this.hostnameAndPort];
    return null;
  }
  async updateMetadataWithRegionalInformation(e) {
    this.performanceClient?.addQueueMeasurement(f.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
    let t = this.authorityOptions.azureRegionConfiguration?.azureRegion;
    if (t) {
      if (t !== p.AZURE_REGION_AUTO_DISCOVER_FLAG) return this.regionDiscoveryMetadata.region_outcome = wi.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = t, pe.replaceWithRegionalInformation(e, t);
      let r = await q(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), f.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
      if (r) return this.regionDiscoveryMetadata.region_outcome = wi.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = r, pe.replaceWithRegionalInformation(e, r);
      this.regionDiscoveryMetadata.region_outcome = wi.AUTO_DETECTION_REQUESTED_FAILED;
    }
    return e;
  }
  async updateCloudDiscoveryMetadata(e) {
    this.performanceClient?.addQueueMeasurement(f.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
    let t = this.updateCloudDiscoveryMetadataFromLocalSources(e);
    if (t) return t;
    let r = await q(this.getCloudDiscoveryMetadataFromNetwork.bind(this), f.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (r) return as(e, r, true), we.NETWORK;
    throw W(Fn);
  }
  updateCloudDiscoveryMetadataFromLocalSources(e) {
    this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration"), this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || p.NOT_APPLICABLE}`), this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || p.NOT_APPLICABLE}`), this.logger.verbosePii(`Canonical Authority: ${e.canonical_authority || p.NOT_APPLICABLE}`);
    let t = this.getCloudDiscoveryMetadataFromConfig();
    if (t) return this.logger.verbose("Found cloud discovery metadata in authority configuration"), as(e, t, false), we.CONFIG;
    if (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."), this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
    else {
      let n = Yu(this.hostnameAndPort);
      if (n) return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), as(e, n, false), we.HARDCODED_VALUES;
      this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
    }
    let r = Oc(e);
    if (this.isAuthoritySameType(e) && e.aliasesFromNetwork && !r) return this.logger.verbose("Found cloud discovery metadata in the cache."), we.CACHE;
    else if (r) this.logger.verbose("The metadata entity is expired.");
    return null;
  }
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === We.Ciam) return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), pe.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
      try {
        this.logger.verbose("Attempting to parse the cloud discovery metadata.");
        let e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata), t = No(e.metadata, this.hostnameAndPort);
        if (this.logger.verbose("Parsed the cloud discovery metadata."), t) return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), t;
        else this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
      } catch (e) {
        throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), W(vr);
      }
    }
    if (this.isInKnownAuthorities()) return this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), pe.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    return null;
  }
  async getCloudDiscoveryMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(f.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
    let e = `${p.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`, t = {}, r = null;
    try {
      let n = await this.networkInterface.sendGetRequestAsync(e, t), o, i;
      if (Vh(n.body)) o = n.body, i = o.metadata, this.logger.verbosePii(`tenant_discovery_endpoint is: ${o.tenant_discovery_endpoint}`);
      else if (Kh(n.body)) {
        if (this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${n.status}`), o = n.body, o.error === p.INVALID_INSTANCE) return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), null;
        this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${o.error}`), this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${o.error_description}`), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), i = [];
      } else return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), null;
      this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), r = No(i, this.hostnameAndPort);
    } catch (n) {
      if (n instanceof x) this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${n.errorCode}
Error Description: ${n.errorMessage}`);
      else {
        let o = n;
        this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${o.name}
Error Description: ${o.message}`);
      }
      return null;
    }
    if (!r) this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), r = pe.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    return r;
  }
  isInKnownAuthorities() {
    return this.authorityOptions.knownAuthorities.filter((t) => t && M.getDomainFromUrl(t).toLowerCase() === this.hostnameAndPort).length > 0;
  }
  static generateAuthority(e, t) {
    let r;
    if (t && t.azureCloudInstance !== Qt.None) {
      let n = t.tenant ? t.tenant : p.DEFAULT_COMMON_TENANT;
      r = `${t.azureCloudInstance}/${n}/`;
    }
    return r ? r : e;
  }
  static createCloudDiscoveryMetadataFromHost(e) {
    return { preferred_network: e, preferred_cache: e, aliases: [e] };
  }
  getPreferredCache() {
    if (this.managedIdentity) return p.DEFAULT_AUTHORITY_HOST;
    else if (this.discoveryComplete()) return this.metadata.preferred_cache;
    else throw g(He);
  }
  isAlias(e) {
    return this.metadata.aliases.indexOf(e) > -1;
  }
  isAliasOfKnownMicrosoftAuthority(e) {
    return yc.has(e);
  }
  static isPublicCloudAuthority(e) {
    return p.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
  }
  static buildRegionalAuthorityString(e, t, r) {
    let n = new M(e);
    n.validateAsUri();
    let o = n.getUrlComponents(), i = `${t}.${o.HostNameAndPort}`;
    if (this.isPublicCloudAuthority(o.HostNameAndPort)) i = `${t}.${p.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
    let s = M.constructAuthorityUriFromObject({ ...n.getUrlComponents(), HostNameAndPort: i }).urlString;
    if (r) return `${s}?${r}`;
    return s;
  }
  static replaceWithRegionalInformation(e, t) {
    let r = { ...e };
    if (r.authorization_endpoint = pe.buildRegionalAuthorityString(r.authorization_endpoint, t), r.token_endpoint = pe.buildRegionalAuthorityString(r.token_endpoint, t), r.end_session_endpoint) r.end_session_endpoint = pe.buildRegionalAuthorityString(r.end_session_endpoint, t);
    return r;
  }
  static transformCIAMAuthority(e) {
    let t = e, n = new M(e).getUrlComponents();
    if (n.PathSegments.length === 0 && n.HostNameAndPort.endsWith(p.CIAM_AUTH_URL)) {
      let o = n.HostNameAndPort.split(".")[0];
      t = `${t}${o}${p.AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return t;
  }
}
pe.reservedTenantDomains = /* @__PURE__ */ new Set(["{tenant}", "{tenantid}", Ue.COMMON, Ue.CONSUMERS, Ue.ORGANIZATIONS]);
function of(e) {
  let n = new M(e).getUrlComponents().PathSegments.slice(-1)[0]?.toLowerCase();
  switch (n) {
    case Ue.COMMON:
    case Ue.ORGANIZATIONS:
    case Ue.CONSUMERS:
      return;
    default:
      return n;
  }
}
function cs(e) {
  return e.endsWith(p.FORWARD_SLASH) ? e : `${e}${p.FORWARD_SLASH}`;
}
function Nc(e) {
  let t = e.cloudDiscoveryMetadata, r = void 0;
  if (t) try {
    r = JSON.parse(t);
  } catch (n) {
    throw W(vr);
  }
  return { canonicalAuthority: e.authority ? cs(e.authority) : void 0, knownAuthorities: e.knownAuthorities, cloudDiscoveryMetadata: r };
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
async function Pc(e, t, r, n, o, i, s) {
  s?.addQueueMeasurement(f.AuthorityFactoryCreateDiscoveredInstance, i);
  let a = pe.transformCIAMAuthority(cs(e)), c = new pe(a, t, r, n, o, i, s);
  try {
    return await q(c.resolveEndpointsAsync.bind(c), f.AuthorityResolveEndpointsAsync, o, s, i)(), c;
  } catch (l) {
    throw g(He);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class Qe extends x {
  constructor(e, t, r, n, o) {
    super(e, t, r);
    this.name = "ServerError", this.errorNo = n, this.status = o, Object.setPrototypeOf(this, Qe.prototype);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function jn(e, t, r) {
  return { clientId: e, authority: t.authority, scopes: t.scopes, homeAccountIdentifier: r, claims: t.claims, authenticationScheme: t.authenticationScheme, resourceRequestMethod: t.resourceRequestMethod, resourceRequestUri: t.resourceRequestUri, shrClaims: t.shrClaims, sshKid: t.sshKid, embeddedClientId: t.embeddedClientId || t.tokenBodyParameters?.clientId };
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class Mt {
  static generateThrottlingStorageKey(e) {
    return `${pt.THROTTLING_PREFIX}.${JSON.stringify(e)}`;
  }
  static preProcess(e, t, r) {
    let n = Mt.generateThrottlingStorageKey(t), o = e.getThrottlingCache(n);
    if (o) {
      if (o.throttleTime < Date.now()) {
        e.removeItem(n, r);
        return;
      }
      throw new Qe(o.errorCodes?.join(" ") || p.EMPTY_STRING, o.errorMessage, o.subError);
    }
  }
  static postProcess(e, t, r, n) {
    if (Mt.checkResponseStatus(r) || Mt.checkResponseForRetryAfter(r)) {
      let o = { throttleTime: Mt.calculateThrottleTime(parseInt(r.headers[X.RETRY_AFTER])), error: r.body.error, errorCodes: r.body.error_codes, errorMessage: r.body.error_description, subError: r.body.suberror };
      e.setThrottlingCache(Mt.generateThrottlingStorageKey(t), o, n);
    }
  }
  static checkResponseStatus(e) {
    return e.status === 429 || e.status >= 500 && e.status < 600;
  }
  static checkResponseForRetryAfter(e) {
    if (e.headers) return e.headers.hasOwnProperty(X.RETRY_AFTER) && (e.status < 200 || e.status >= 300);
    return false;
  }
  static calculateThrottleTime(e) {
    let t = e <= 0 ? 0 : e, r = Date.now() / 1e3;
    return Math.floor(Math.min(r + (t || pt.DEFAULT_THROTTLE_TIME_SECONDS), r + pt.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
  }
  static removeThrottle(e, t, r, n) {
    let o = jn(t, r, n), i = this.generateThrottlingStorageKey(o);
    e.removeItem(i, r.correlationId);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class ls extends x {
  constructor(e, t, r) {
    super(e.errorCode, e.errorMessage, e.subError);
    Object.setPrototypeOf(this, ls.prototype), this.name = "NetworkError", this.error = e, this.httpStatus = t, this.responseHeaders = r;
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class Ie {
  constructor(e, t) {
    this.config = Xu(e), this.logger = new ze(this.config.loggerOptions, Hi, Pn), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
  }
  createTokenRequestHeaders(e) {
    let t = {};
    if (t[X.CONTENT_TYPE] = p.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e) switch (e.type) {
      case ke.HOME_ACCOUNT_ID:
        try {
          let r = yt(e.credential);
          t[X.CCS_HEADER] = `Oid:${r.uid}@${r.utid}`;
        } catch (r) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + r);
        }
        break;
      case ke.UPN:
        t[X.CCS_HEADER] = `UPN: ${e.credential}`;
        break;
    }
    return t;
  }
  async executePostToTokenEndpoint(e, t, r, n, o, i) {
    if (i) this.performanceClient?.addQueueMeasurement(i, o);
    let s = await this.sendPostRequest(n, e, { body: t, headers: r }, o);
    if (this.config.serverTelemetryManager && s.status < 500 && s.status !== 429) this.config.serverTelemetryManager.clearTelemetryCache();
    return s;
  }
  async sendPostRequest(e, t, r, n) {
    Mt.preProcess(this.cacheManager, e, n);
    let o;
    try {
      o = await q(this.networkClient.sendPostRequestAsync.bind(this.networkClient), f.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, n)(t, r);
      let i = o.headers || {};
      this.performanceClient?.addFields({ refreshTokenSize: o.body.refresh_token?.length || 0, httpVerToken: i[X.X_MS_HTTP_VERSION] || "", requestId: i[X.X_MS_REQUEST_ID] || "" }, n);
    } catch (i) {
      if (i instanceof ls) {
        let s = i.responseHeaders;
        if (s) this.performanceClient?.addFields({ httpVerToken: s[X.X_MS_HTTP_VERSION] || "", requestId: s[X.X_MS_REQUEST_ID] || "", contentTypeHeader: s[X.CONTENT_TYPE] || void 0, contentLengthHeader: s[X.CONTENT_LENGTH] || void 0, httpStatus: i.httpStatus }, n);
        throw i.error;
      }
      if (i instanceof x) throw i;
      else throw g(Vt);
    }
    return Mt.postProcess(this.cacheManager, e, o, n), o;
  }
  async updateAuthority(e, t) {
    this.performanceClient?.addQueueMeasurement(f.UpdateTokenEndpointAuthority, t);
    let r = `https://${e}/${this.authority.tenant}/`, n = await Pc(r, this.networkClient, this.cacheManager, this.authority.options, this.logger, t, this.performanceClient);
    this.authority = n;
  }
  createTokenQueryParameters(e) {
    let t = /* @__PURE__ */ new Map();
    if (e.embeddedClientId) nr(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenQueryParameters) Ge(t, e.tokenQueryParameters);
    return Et(t, e.correlationId), zn(t, e.correlationId, this.performanceClient), Te(t);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var Dr = "no_tokens_found", ds = "native_account_unavailable", us = "refresh_token_expired", xc = "ux_not_allowed", af = "interaction_required", cf = "consent_required", lf = "login_required", Ur = "bad_token";
/*! @azure/msal-common v15.13.1 2025-10-29 */
var df = [af, cf, lf, Ur, xc], RT = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required", "bad_token"], hs = { [Dr]: "No refresh token found in the cache. Please sign-in.", [ds]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.", [us]: "Refresh token has expired.", [Ur]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.", [xc]: "`canShowUI` flag in Edge was set to false. User interaction required on web page. Please invoke an interactive API to resolve." }, wT = { noTokensFoundError: { code: Dr, desc: hs[Dr] }, native_account_unavailable: { code: ds, desc: hs[ds] }, bad_token: { code: Ur, desc: hs[Ur] } };
class Dt extends x {
  constructor(e, t, r, n, o, i, s, a) {
    super(e, t, r);
    Object.setPrototypeOf(this, Dt.prototype), this.timestamp = n || p.EMPTY_STRING, this.traceId = o || p.EMPTY_STRING, this.correlationId = i || p.EMPTY_STRING, this.claims = s || p.EMPTY_STRING, this.name = "InteractionRequiredAuthError", this.errorNo = a;
  }
}
function uf(e, t, r) {
  let n = !!e && df.indexOf(e) > -1, o = !!r && RT.indexOf(r) > -1, i = !!t && df.some((s) => t.indexOf(s) > -1);
  return n || i || o;
}
function Mc(e) {
  return new Dt(e, hs[e]);
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class fs {
  static setRequestState(e, t, r) {
    let n = fs.generateLibraryState(e, r);
    return t ? `${n}${p.RESOURCE_DELIM}${t}` : n;
  }
  static generateLibraryState(e, t) {
    if (!e) throw g(_r);
    let r = { id: e.createNewGuid() };
    if (t) r.meta = t;
    let n = JSON.stringify(r);
    return e.base64Encode(n);
  }
  static parseRequestState(e, t) {
    if (!e) throw g(_r);
    if (!t) throw g(Ar);
    try {
      let r = t.split(p.RESOURCE_DELIM), n = r[0], o = r.length > 1 ? r.slice(1).join(p.RESOURCE_DELIM) : p.EMPTY_STRING, i = e.base64Decode(n), s = JSON.parse(i);
      return { userRequestState: o || p.EMPTY_STRING, libraryState: s };
    } catch (r) {
      throw g(Ar);
    }
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var vT = { SW: "sw" };
class Lr {
  constructor(e, t) {
    this.cryptoUtils = e, this.performanceClient = t;
  }
  async generateCnf(e, t) {
    this.performanceClient?.addQueueMeasurement(f.PopTokenGenerateCnf, e.correlationId);
    let r = await q(this.generateKid.bind(this), f.PopTokenGenerateCnf, t, this.performanceClient, e.correlationId)(e), n = this.cryptoUtils.base64UrlEncode(JSON.stringify(r));
    return { kid: r.kid, reqCnfString: n };
  }
  async generateKid(e) {
    return this.performanceClient?.addQueueMeasurement(f.PopTokenGenerateKid, e.correlationId), { kid: await this.cryptoUtils.getPublicKeyThumbprint(e), xms_ksl: vT.SW };
  }
  async signPopToken(e, t, r) {
    return this.signPayload(e, t, r);
  }
  async signPayload(e, t, r, n) {
    let { resourceRequestMethod: o, resourceRequestUri: i, shrClaims: s, shrNonce: a, shrOptions: c } = r, d = (i ? new M(i) : void 0)?.getUrlComponents();
    return this.cryptoUtils.signJwt({ at: e, ts: Z(), m: o?.toUpperCase(), u: d?.HostNameAndPort, nonce: a || this.cryptoUtils.createNewGuid(), p: d?.AbsolutePath, q: d?.QueryString ? [[], d.QueryString] : void 0, client_claims: s || void 0, ...n }, t, c, r.correlationId);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class at {
  constructor(e, t) {
    this.cache = e, this.hasChanged = t;
  }
  get cacheHasChanged() {
    return this.hasChanged;
  }
  get tokenCache() {
    return this.cache;
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class le {
  constructor(e, t, r, n, o, i, s) {
    this.clientId = e, this.cacheStorage = t, this.cryptoObj = r, this.logger = n, this.serializableCache = o, this.persistencePlugin = i, this.performanceClient = s;
  }
  validateTokenResponse(e, t) {
    if (e.error || e.error_description || e.suberror) {
      let r = `Error(s): ${e.error_codes || p.NOT_AVAILABLE} - Timestamp: ${e.timestamp || p.NOT_AVAILABLE} - Description: ${e.error_description || p.NOT_AVAILABLE} - Correlation ID: ${e.correlation_id || p.NOT_AVAILABLE} - Trace ID: ${e.trace_id || p.NOT_AVAILABLE}`, n = e.error_codes?.length ? e.error_codes[0] : void 0, o = new Qe(e.error, r, e.suberror, n, e.status);
      if (t && e.status && e.status >= N.SERVER_ERROR_RANGE_START && e.status <= N.SERVER_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${o}`);
        return;
      } else if (t && e.status && e.status >= N.CLIENT_ERROR_RANGE_START && e.status <= N.CLIENT_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${o}`);
        return;
      }
      if (uf(e.error, e.error_description, e.suberror)) throw new Dt(e.error, e.error_description, e.suberror, e.timestamp || p.EMPTY_STRING, e.trace_id || p.EMPTY_STRING, e.correlation_id || p.EMPTY_STRING, e.claims || p.EMPTY_STRING, n);
      throw o;
    }
  }
  async handleServerTokenResponse(e, t, r, n, o, i, s, a, c) {
    this.performanceClient?.addQueueMeasurement(f.HandleServerTokenResponse, e.correlation_id);
    let l;
    if (e.id_token) {
      if (l = bt(e.id_token || p.EMPTY_STRING, this.cryptoObj.base64Decode), o && o.nonce) {
        if (l.nonce !== o.nonce) throw g(Tn);
      }
      if (n.maxAge || n.maxAge === 0) {
        let h = l.auth_time;
        if (!h) throw g(Kt);
        Xi(h, n.maxAge);
      }
    }
    this.homeAccountIdentifier = ye.generateHomeAccountId(e.client_info || p.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, l);
    let d;
    if (!!o && !!o.state) d = fs.parseRequestState(this.cryptoObj, o.state);
    e.key_id = e.key_id || n.sshKid || void 0;
    let u = this.generateCacheRecord(e, t, r, n, l, i, o), m;
    try {
      if (this.persistencePlugin && this.serializableCache) this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), m = new at(this.serializableCache, true), await this.persistencePlugin.beforeCacheAccess(m);
      if (s && !a && u.account) {
        let h = this.cacheStorage.generateAccountKey(ye.getAccountInfo(u.account));
        if (!this.cacheStorage.getAccount(h, n.correlationId)) return this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), await le.generateAuthenticationResult(this.cryptoObj, t, u, false, n, l, d, void 0, c);
      }
      await this.cacheStorage.saveCacheRecord(u, n.correlationId, zu(l || {}), n.storeInCache);
    } finally {
      if (this.persistencePlugin && this.serializableCache && m) this.logger.verbose("Persistence enabled, calling afterCacheAccess"), await this.persistencePlugin.afterCacheAccess(m);
    }
    return le.generateAuthenticationResult(this.cryptoObj, t, u, false, n, l, d, e, c);
  }
  generateCacheRecord(e, t, r, n, o, i, s) {
    let a = t.getPreferredCache();
    if (!a) throw g(Wt);
    let c = Qi(o), l, d;
    if (e.id_token && !!o) l = Qh(this.homeAccountIdentifier, a, e.id_token, this.clientId, c || ""), d = hf(this.cacheStorage, t, this.homeAccountIdentifier, this.cryptoObj.base64Decode, n.correlationId, o, e.client_info, a, c, s, void 0, this.logger);
    let u = null;
    if (e.access_token) {
      let y = e.scope ? ce.fromString(e.scope) : new ce(n.scopes || []), E = (typeof e.expires_in === "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, S = (typeof e.ext_expires_in === "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, b = (typeof e.refresh_in === "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, H = r + E, z = H + S, re = b && b > 0 ? r + b : void 0;
      u = Xh(this.homeAccountIdentifier, a, e.access_token, this.clientId, c || t.tenant || "", y.printScopes(), H, z, this.cryptoObj.base64Decode, re, e.token_type, i, e.key_id, n.claims, n.requestedClaimsHash);
    }
    let m = null;
    if (e.refresh_token) {
      let y;
      if (e.refresh_token_expires_in) {
        let E = typeof e.refresh_token_expires_in === "string" ? parseInt(e.refresh_token_expires_in, 10) : e.refresh_token_expires_in;
        y = r + E;
      }
      m = Jh(this.homeAccountIdentifier, a, e.refresh_token, this.clientId, e.foci, i, y);
    }
    let h = null;
    if (e.foci) h = { clientId: this.clientId, environment: a, familyId: e.foci };
    return { account: d, idToken: l, accessToken: u, refreshToken: m, appMetadata: h };
  }
  static async generateAuthenticationResult(e, t, r, n, o, i, s, a, c) {
    let l = p.EMPTY_STRING, d = [], u = null, m, h, y = p.EMPTY_STRING;
    if (r.accessToken) {
      if (r.accessToken.tokenType === F.POP && !o.popKid) {
        let H = new Lr(e), { secret: z, keyId: re } = r.accessToken;
        if (!re) throw g(On);
        l = await H.signPopToken(z, re, o);
      } else l = r.accessToken.secret;
      if (d = ce.fromString(r.accessToken.target).asArray(), u = ss(r.accessToken.expiresOn), m = ss(r.accessToken.extendedExpiresOn), r.accessToken.refreshOn) h = ss(r.accessToken.refreshOn);
    }
    if (r.appMetadata) y = r.appMetadata.familyId === jt ? jt : "";
    let E = i?.oid || i?.sub || "", S = i?.tid || "";
    if (a?.spa_accountid && !!r.account) r.account.nativeAccountId = a?.spa_accountid;
    let b = r.account ? Wi(ye.getAccountInfo(r.account), void 0, i, r.idToken?.secret) : null;
    return { authority: t.canonicalAuthority, uniqueId: E, tenantId: S, scopes: d, account: b, idToken: r?.idToken?.secret || "", idTokenClaims: i || {}, accessToken: l, fromCache: n, expiresOn: u, extExpiresOn: m, refreshOn: h, correlationId: o.correlationId, requestId: c || p.EMPTY_STRING, familyId: y, tokenType: r.accessToken?.tokenType || p.EMPTY_STRING, state: s ? s.userRequestState : p.EMPTY_STRING, cloudGraphHostName: r.account?.cloudGraphHostName || p.EMPTY_STRING, msGraphHost: r.account?.msGraphHost || p.EMPTY_STRING, code: a?.spa_code, fromNativeBroker: false };
  }
}
function hf(e, t, r, n, o, i, s, a, c, l, d, u) {
  u?.verbose("setCachedAccount called");
  let h = e.getAccountKeys().find((H) => H.startsWith(r)), y = null;
  if (h) y = e.getAccount(h, o);
  let E = y || ye.createAccount({ homeAccountId: r, idTokenClaims: i, clientInfo: s, environment: a, cloudGraphHostName: l?.cloud_graph_host_name, msGraphHost: l?.msgraph_host, nativeAccountId: d }, t, n), S = E.tenantProfiles || [], b = c || E.realm;
  if (b && !S.find((H) => H.tenantId === b)) {
    let H = Oo(r, E.localAccountId, b, i);
    S.push(H);
  }
  return E.tenantProfiles = S, E;
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
async function be(e, t, r) {
  if (typeof e === "string") return e;
  else return e({ clientId: t, tokenEndpoint: r });
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class ms extends Ie {
  constructor(e, t) {
    super(e, t);
    this.includeRedirectUri = true, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
  }
  async acquireToken(e, t) {
    if (this.performanceClient?.addQueueMeasurement(f.AuthClientAcquireToken, e.correlationId), !e.code) throw g(_n);
    let r = Z(), n = await q(this.executeTokenRequest.bind(this), f.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(this.authority, e), o = n.headers?.[X.X_MS_REQUEST_ID], i = new le(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
    return i.validateTokenResponse(n.body), q(i.handleServerTokenResponse.bind(i), f.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(n.body, this.authority, r, e, t, void 0, void 0, void 0, o);
  }
  getLogoutUri(e) {
    if (!e) throw W(Ln);
    let t = this.createLogoutUrlQueryString(e);
    return M.appendQueryString(this.authority.endSessionEndpoint, t);
  }
  async executeTokenRequest(e, t) {
    this.performanceClient?.addQueueMeasurement(f.AuthClientExecuteTokenRequest, t.correlationId);
    let r = this.createTokenQueryParameters(t), n = M.appendQueryString(e.tokenEndpoint, r), o = await q(this.createTokenRequestBody.bind(this), f.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, t.correlationId)(t), i = void 0;
    if (t.clientInfo) try {
      let c = Bn(t.clientInfo, this.cryptoUtils.base64Decode);
      i = { credential: `${c.uid}${vt.CLIENT_INFO_SEPARATOR}${c.utid}`, type: ke.HOME_ACCOUNT_ID };
    } catch (c) {
      this.logger.verbose("Could not parse client info for CCS Header: " + c);
    }
    let s = this.createTokenRequestHeaders(i || t.ccsCredential), a = jn(this.config.authOptions.clientId, t);
    return q(this.executePostToTokenEndpoint.bind(this), f.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, t.correlationId)(n, o, s, a, t.correlationId, f.AuthorizationCodeClientExecutePostToTokenEndpoint);
  }
  async createTokenRequestBody(e) {
    this.performanceClient?.addQueueMeasurement(f.AuthClientCreateTokenRequestBody, e.correlationId);
    let t = /* @__PURE__ */ new Map();
    if (it(t, e.embeddedClientId || e.tokenBodyParameters?.[Ot] || this.config.authOptions.clientId), !this.includeRedirectUri) {
      if (!e.redirectUri) throw W(xn);
    } else Gn(t, e.redirectUri);
    if (ot(t, e.scopes, true, this.oidcDefaultScopes), Bh(t, e.code), Nt(t, this.config.libraryInfo), Pt(t, this.config.telemetry.application), rr(t), this.serverTelemetryManager && !es(this.config)) tr(t, this.serverTelemetryManager);
    if (e.codeVerifier) zh(t, e.codeVerifier);
    if (this.config.clientCredentials.clientSecret) Or(t, this.config.clientCredentials.clientSecret);
    if (this.config.clientCredentials.clientAssertion) {
      let n = this.config.clientCredentials.clientAssertion;
      Nr(t, await be(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Pr(t, n.assertionType);
    }
    if (er(t, Le.AUTHORIZATION_CODE_GRANT), xt(t), e.authenticationScheme === F.POP) {
      let n = new Lr(this.cryptoUtils, this.performanceClient), o;
      if (!e.popKid) o = (await q(n.generateCnf.bind(n), f.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString;
      else o = this.cryptoUtils.encodeKid(e.popKid);
      os(t, o);
    } else if (e.authenticationScheme === F.SSH) if (e.sshJwk) is(t, e.sshJwk);
    else throw W(Xt);
    if (!se.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) st(t, e.claims, this.config.authOptions.clientCapabilities);
    let r = void 0;
    if (e.clientInfo) try {
      let n = Bn(e.clientInfo, this.cryptoUtils.base64Decode);
      r = { credential: `${n.uid}${vt.CLIENT_INFO_SEPARATOR}${n.utid}`, type: ke.HOME_ACCOUNT_ID };
    } catch (n) {
      this.logger.verbose("Could not parse client info for CCS Header: " + n);
    }
    else r = e.ccsCredential;
    if (this.config.systemOptions.preventCorsPreflight && r) switch (r.type) {
      case ke.HOME_ACCOUNT_ID:
        try {
          let n = yt(r.credential);
          Zt(t, n);
        } catch (n) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + n);
        }
        break;
      case ke.UPN:
        Jt(t, r.credential);
        break;
    }
    if (e.embeddedClientId) nr(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenBodyParameters) Ge(t, e.tokenBodyParameters);
    if (e.enableSpaAuthorizationCode && (!e.tokenBodyParameters || !e.tokenBodyParameters[Sc])) Ge(t, { [Sc]: "1" });
    return zn(t, e.correlationId, this.performanceClient), Te(t);
  }
  createLogoutUrlQueryString(e) {
    let t = /* @__PURE__ */ new Map();
    if (e.postLogoutRedirectUri) Uh(t, e.postLogoutRedirectUri);
    if (e.correlationId) Et(t, e.correlationId);
    if (e.idTokenHint) Lh(t, e.idTokenHint);
    if (e.state) rs(t, e.state);
    if (e.logoutHint) Gh(t, e.logoutHint);
    if (e.extraQueryParameters) Ge(t, e.extraQueryParameters);
    if (this.config.authOptions.instanceAware) ns(t);
    return Te(t, this.config.authOptions.encodeExtraQueryParams, e.extraQueryParameters);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var kT = 300;
class Vn extends Ie {
  constructor(e, t) {
    super(e, t);
  }
  async acquireToken(e) {
    this.performanceClient?.addQueueMeasurement(f.RefreshTokenClientAcquireToken, e.correlationId);
    let t = Z(), r = await q(this.executeTokenRequest.bind(this), f.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(e, this.authority), n = r.headers?.[X.X_MS_REQUEST_ID], o = new le(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return o.validateTokenResponse(r.body), q(o.handleServerTokenResponse.bind(o), f.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(r.body, this.authority, t, e, void 0, void 0, true, e.forceCache, n);
  }
  async acquireTokenByRefreshToken(e) {
    if (!e) throw W(Un);
    if (this.performanceClient?.addQueueMeasurement(f.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), !e.account) throw g(Yt);
    if (this.cacheManager.isAppMetadataFOCI(e.account.environment)) try {
      return await q(this.acquireTokenWithCachedRefreshToken.bind(this), f.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, true);
    } catch (r) {
      let n = r instanceof Dt && r.errorCode === Dr, o = r instanceof Qe && r.errorCode === To.INVALID_GRANT_ERROR && r.subError === To.CLIENT_MISMATCH_ERROR;
      if (n || o) return q(this.acquireTokenWithCachedRefreshToken.bind(this), f.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, false);
      else throw r;
    }
    return q(this.acquireTokenWithCachedRefreshToken.bind(this), f.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, false);
  }
  async acquireTokenWithCachedRefreshToken(e, t) {
    this.performanceClient?.addQueueMeasurement(f.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId);
    let r = Yh(this.cacheManager.getRefreshToken.bind(this.cacheManager), f.CacheManagerGetRefreshToken, this.logger, this.performanceClient, e.correlationId)(e.account, t, e.correlationId, void 0, this.performanceClient);
    if (!r) throw Mc(Dr);
    if (r.expiresOn && or(r.expiresOn, e.refreshTokenExpirationOffsetSeconds || kT)) throw this.performanceClient?.addFields({ rtExpiresOnMs: Number(r.expiresOn) }, e.correlationId), Mc(us);
    let n = { ...e, refreshToken: r.secret, authenticationScheme: e.authenticationScheme || F.BEARER, ccsCredential: { credential: e.account.homeAccountId, type: ke.HOME_ACCOUNT_ID } };
    try {
      return await q(this.acquireToken.bind(this), f.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(n);
    } catch (o) {
      if (o instanceof Dt) {
        if (this.performanceClient?.addFields({ rtExpiresOnMs: Number(r.expiresOn) }, e.correlationId), o.subError === Ur) {
          this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
          let i = this.cacheManager.generateCredentialKey(r);
          this.cacheManager.removeRefreshToken(i, e.correlationId);
        }
      }
      throw o;
    }
  }
  async executeTokenRequest(e, t) {
    this.performanceClient?.addQueueMeasurement(f.RefreshTokenClientExecuteTokenRequest, e.correlationId);
    let r = this.createTokenQueryParameters(e), n = M.appendQueryString(t.tokenEndpoint, r), o = await q(this.createTokenRequestBody.bind(this), f.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, e.correlationId)(e), i = this.createTokenRequestHeaders(e.ccsCredential), s = jn(this.config.authOptions.clientId, e);
    return q(this.executePostToTokenEndpoint.bind(this), f.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, e.correlationId)(n, o, i, s, e.correlationId, f.RefreshTokenClientExecutePostToTokenEndpoint);
  }
  async createTokenRequestBody(e) {
    this.performanceClient?.addQueueMeasurement(f.RefreshTokenClientCreateTokenRequestBody, e.correlationId);
    let t = /* @__PURE__ */ new Map();
    if (it(t, e.embeddedClientId || e.tokenBodyParameters?.[Ot] || this.config.authOptions.clientId), e.redirectUri) Gn(t, e.redirectUri);
    if (ot(t, e.scopes, true, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes), er(t, Le.REFRESH_TOKEN_GRANT), xt(t), Nt(t, this.config.libraryInfo), Pt(t, this.config.telemetry.application), rr(t), this.serverTelemetryManager && !es(this.config)) tr(t, this.serverTelemetryManager);
    if (qh(t, e.refreshToken), this.config.clientCredentials.clientSecret) Or(t, this.config.clientCredentials.clientSecret);
    if (this.config.clientCredentials.clientAssertion) {
      let r = this.config.clientCredentials.clientAssertion;
      Nr(t, await be(r.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Pr(t, r.assertionType);
    }
    if (e.authenticationScheme === F.POP) {
      let r = new Lr(this.cryptoUtils, this.performanceClient), n;
      if (!e.popKid) n = (await q(r.generateCnf.bind(r), f.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString;
      else n = this.cryptoUtils.encodeKid(e.popKid);
      os(t, n);
    } else if (e.authenticationScheme === F.SSH) if (e.sshJwk) is(t, e.sshJwk);
    else throw W(Xt);
    if (!se.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) st(t, e.claims, this.config.authOptions.clientCapabilities);
    if (this.config.systemOptions.preventCorsPreflight && e.ccsCredential) switch (e.ccsCredential.type) {
      case ke.HOME_ACCOUNT_ID:
        try {
          let r = yt(e.ccsCredential.credential);
          Zt(t, r);
        } catch (r) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + r);
        }
        break;
      case ke.UPN:
        Jt(t, e.ccsCredential.credential);
        break;
    }
    if (e.embeddedClientId) nr(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenBodyParameters) Ge(t, e.tokenBodyParameters);
    return zn(t, e.correlationId, this.performanceClient), Te(t);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
class ps extends Ie {
  constructor(e, t) {
    super(e, t);
  }
  async acquireCachedToken(e) {
    this.performanceClient?.addQueueMeasurement(f.SilentFlowClientAcquireCachedToken, e.correlationId);
    let t = Q.NOT_APPLICABLE;
    if (e.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !se.isEmptyObj(e.claims)) throw this.setCacheOutcome(Q.FORCE_REFRESH_OR_CLAIMS, e.correlationId), g(nt);
    if (!e.account) throw g(Yt);
    let r = e.account.tenantId || of(e.authority), n = this.cacheManager.getTokenKeys(), o = this.cacheManager.getAccessToken(e.account, e, n, r);
    if (!o) throw this.setCacheOutcome(Q.NO_CACHED_ACCESS_TOKEN, e.correlationId), g(nt);
    else if (Wh(o.cachedAt) || or(o.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.setCacheOutcome(Q.CACHED_ACCESS_TOKEN_EXPIRED, e.correlationId), g(nt);
    else if (o.refreshOn && or(o.refreshOn, 0)) t = Q.PROACTIVELY_REFRESHED;
    let i = e.authority || this.authority.getPreferredCache(), s = { account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(e.account), e.correlationId), accessToken: o, idToken: this.cacheManager.getIdToken(e.account, e.correlationId, n, r, this.performanceClient), refreshToken: null, appMetadata: this.cacheManager.readAppMetadataFromCache(i) };
    if (this.setCacheOutcome(t, e.correlationId), this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
    return [await q(this.generateResultFromCacheRecord.bind(this), f.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, e.correlationId)(s, e), t];
  }
  setCacheOutcome(e, t) {
    if (this.serverTelemetryManager?.setCacheOutcome(e), this.performanceClient?.addFields({ cacheOutcome: e }, t), e !== Q.NOT_APPLICABLE) this.logger.info(`Token refresh is required due to cache outcome: ${e}`);
  }
  async generateResultFromCacheRecord(e, t) {
    this.performanceClient?.addQueueMeasurement(f.SilentFlowClientGenerateResultFromCacheRecord, t.correlationId);
    let r;
    if (e.idToken) r = bt(e.idToken.secret, this.config.cryptoInterface.base64Decode);
    if (t.maxAge || t.maxAge === 0) {
      let n = r?.auth_time;
      if (!n) throw g(Kt);
      Xi(n, t.maxAge);
    }
    return le.generateAuthenticationResult(this.cryptoUtils, this.authority, e, true, t, r);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
function bT(e, t, r, n) {
  let o = t.correlationId, i = /* @__PURE__ */ new Map();
  it(i, t.embeddedClientId || t.extraQueryParameters?.[Ot] || e.clientId);
  let s = [...t.scopes || [], ...t.extraScopesToConsent || []];
  if (ot(i, s, true, e.authority.options.OIDCOptions?.defaultScopes), Gn(i, t.redirectUri), Et(i, o), Dh(i, t.responseMode), xt(i), t.prompt) $h(i, t.prompt), n?.addFields({ prompt: t.prompt }, o);
  if (t.domainHint) Hh(i, t.domainHint), n?.addFields({ domainHintFromRequest: true }, o);
  if (t.prompt !== gr.SELECT_ACCOUNT) {
    if (t.sid && t.prompt === gr.NONE) r.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), vc(i, t.sid), n?.addFields({ sidFromRequest: true }, o);
    else if (t.account) {
      let a = NT(t.account), c = PT(t.account);
      if (c && t.domainHint) r.warning('AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint'), c = null;
      if (c) {
        r.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), Mo(i, c), n?.addFields({ loginHintFromClaim: true }, o);
        try {
          let l = yt(t.account.homeAccountId);
          Zt(i, l);
        } catch (l) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      } else if (a && t.prompt === gr.NONE) {
        r.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), vc(i, a), n?.addFields({ sidFromClaim: true }, o);
        try {
          let l = yt(t.account.homeAccountId);
          Zt(i, l);
        } catch (l) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      } else if (t.loginHint) r.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), Mo(i, t.loginHint), Jt(i, t.loginHint), n?.addFields({ loginHintFromRequest: true }, o);
      else if (t.account.username) {
        r.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), Mo(i, t.account.username), n?.addFields({ loginHintFromUpn: true }, o);
        try {
          let l = yt(t.account.homeAccountId);
          Zt(i, l);
        } catch (l) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      }
    } else if (t.loginHint) r.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), Mo(i, t.loginHint), Jt(i, t.loginHint), n?.addFields({ loginHintFromRequest: true }, o);
  } else r.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
  if (t.nonce) Fh(i, t.nonce);
  if (t.state) rs(i, t.state);
  if (t.claims || e.clientCapabilities && e.clientCapabilities.length > 0) st(i, t.claims, e.clientCapabilities);
  if (t.embeddedClientId) nr(i, e.clientId, e.redirectUri);
  if (e.instanceAware && (!t.extraQueryParameters || !Object.keys(t.extraQueryParameters).includes(xo))) ns(i);
  return i;
}
function OT(e, t, r, n) {
  let o = Te(t, r, n);
  return M.appendQueryString(e.authorizationEndpoint, o);
}
function NT(e) {
  return e.idTokenClaims?.sid || null;
}
function PT(e) {
  return e.loginHint || e.idTokenClaims?.login_hint || null;
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
var mf = ",", pf = "|";
function xT(e) {
  let { skus: t, libraryName: r, libraryVersion: n, extensionName: o, extensionVersion: i } = e, s = /* @__PURE__ */ new Map([[0, [r, n]], [2, [o, i]]]), a = [];
  if (t?.length) {
    if (a = t.split(mf), a.length < 4) return t;
  } else a = Array.from({ length: 4 }, () => pf);
  return s.forEach((c, l) => {
    if (c.length === 2 && c[0]?.length && c[1]?.length) MT({ skuArr: a, index: l, skuName: c[0], skuVersion: c[1] });
  }), a.join(mf);
}
function MT(e) {
  let { skuArr: t, index: r, skuName: n, skuVersion: o } = e;
  if (r >= t.length) return;
  t[r] = [n, o].join(pf);
}
class ir {
  constructor(e, t) {
    this.cacheOutcome = Q.NOT_APPLICABLE, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || p.EMPTY_STRING, this.wrapperVer = e.wrapperVer || p.EMPTY_STRING, this.telemetryCacheKey = me.CACHE_KEY + vt.CACHE_KEY_SEPARATOR + e.clientId;
  }
  generateCurrentRequestHeaderValue() {
    let e = `${this.apiId}${me.VALUE_SEPARATOR}${this.cacheOutcome}`, t = [this.wrapperSKU, this.wrapperVer], r = this.getNativeBrokerErrorCode();
    if (r?.length) t.push(`broker_error=${r}`);
    let n = t.join(me.VALUE_SEPARATOR), o = this.getRegionDiscoveryFields(), i = [e, o].join(me.VALUE_SEPARATOR);
    return [me.SCHEMA_VERSION, i, n].join(me.CATEGORY_SEPARATOR);
  }
  generateLastRequestHeaderValue() {
    let e = this.getLastRequests(), t = ir.maxErrorsToSend(e), r = e.failedRequests.slice(0, 2 * t).join(me.VALUE_SEPARATOR), n = e.errors.slice(0, t).join(me.VALUE_SEPARATOR), o = e.errors.length, i = t < o ? me.OVERFLOW_TRUE : me.OVERFLOW_FALSE, s = [o, i].join(me.VALUE_SEPARATOR);
    return [me.SCHEMA_VERSION, e.cacheHits, r, n, s].join(me.CATEGORY_SEPARATOR);
  }
  cacheFailedRequest(e) {
    let t = this.getLastRequests();
    if (t.errors.length >= me.MAX_CACHED_ERRORS) t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift();
    if (t.failedRequests.push(this.apiId, this.correlationId), e instanceof Error && !!e && e.toString()) if (e instanceof x) if (e.subError) t.errors.push(e.subError);
    else if (e.errorCode) t.errors.push(e.errorCode);
    else t.errors.push(e.toString());
    else t.errors.push(e.toString());
    else t.errors.push(me.UNKNOWN_ERROR);
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
    return;
  }
  incrementCacheHits() {
    let e = this.getLastRequests();
    return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId), e.cacheHits;
  }
  getLastRequests() {
    let e = { failedRequests: [], errors: [], cacheHits: 0 };
    return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
  }
  clearTelemetryCache() {
    let e = this.getLastRequests(), t = ir.maxErrorsToSend(e), r = e.errors.length;
    if (t === r) this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
    else {
      let n = { failedRequests: e.failedRequests.slice(t * 2), errors: e.errors.slice(t), cacheHits: 0 };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n, this.correlationId);
    }
  }
  static maxErrorsToSend(e) {
    let t, r = 0, n = 0, o = e.errors.length;
    for (t = 0; t < o; t++) {
      let i = e.failedRequests[2 * t] || p.EMPTY_STRING, s = e.failedRequests[2 * t + 1] || p.EMPTY_STRING, a = e.errors[t] || p.EMPTY_STRING;
      if (n += i.toString().length + s.toString().length + a.length + 3, n < me.MAX_LAST_HEADER_BYTES) r += 1;
      else break;
    }
    return r;
  }
  getRegionDiscoveryFields() {
    let e = [];
    return e.push(this.regionUsed || p.EMPTY_STRING), e.push(this.regionSource || p.EMPTY_STRING), e.push(this.regionOutcome || p.EMPTY_STRING), e.join(",");
  }
  updateRegionDiscoveryMetadata(e) {
    this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
  }
  setCacheOutcome(e) {
    this.cacheOutcome = e;
  }
  setNativeBrokerErrorCode(e) {
    let t = this.getLastRequests();
    t.nativeBrokerErrorCode = e, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
  }
  getNativeBrokerErrorCode() {
    return this.getLastRequests().nativeBrokerErrorCode;
  }
  clearNativeBrokerErrorCode() {
    let e = this.getLastRequests();
    delete e.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId);
  }
  static makeExtraSkuString(e) {
    return xT(e);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Hr {
  static deserializeJSONBlob(e) {
    return !e ? {} : JSON.parse(e);
  }
  static deserializeAccounts(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r], o = { homeAccountId: n.home_account_id, environment: n.environment, realm: n.realm, localAccountId: n.local_account_id, username: n.username, authorityType: n.authority_type, name: n.name, clientInfo: n.client_info, lastModificationTime: n.last_modification_time, lastModificationApp: n.last_modification_app, tenantProfiles: n.tenantProfiles?.map((s) => JSON.parse(s)), lastUpdatedAt: Date.now().toString() }, i = new ye();
      br.toObject(i, o), t[r] = i;
    });
    return t;
  }
  static deserializeIdTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r], o = { homeAccountId: n.home_account_id, environment: n.environment, credentialType: n.credential_type, clientId: n.client_id, secret: n.secret, realm: n.realm, lastUpdatedAt: Date.now().toString() };
      t[r] = o;
    });
    return t;
  }
  static deserializeAccessTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r], o = { homeAccountId: n.home_account_id, environment: n.environment, credentialType: n.credential_type, clientId: n.client_id, secret: n.secret, realm: n.realm, target: n.target, cachedAt: n.cached_at, expiresOn: n.expires_on, extendedExpiresOn: n.extended_expires_on, refreshOn: n.refresh_on, keyId: n.key_id, tokenType: n.token_type, requestedClaims: n.requestedClaims, requestedClaimsHash: n.requestedClaimsHash, userAssertionHash: n.userAssertionHash, lastUpdatedAt: Date.now().toString() };
      t[r] = o;
    });
    return t;
  }
  static deserializeRefreshTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r], o = { homeAccountId: n.home_account_id, environment: n.environment, credentialType: n.credential_type, clientId: n.client_id, secret: n.secret, familyId: n.family_id, target: n.target, realm: n.realm, lastUpdatedAt: Date.now().toString() };
      t[r] = o;
    });
    return t;
  }
  static deserializeAppMetadata(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = { clientId: n.client_id, environment: n.environment, familyId: n.family_id };
    });
    return t;
  }
  static deserializeAllCache(e) {
    return { accounts: e.Account ? this.deserializeAccounts(e.Account) : {}, idTokens: e.IdToken ? this.deserializeIdTokens(e.IdToken) : {}, accessTokens: e.AccessToken ? this.deserializeAccessTokens(e.AccessToken) : {}, refreshTokens: e.RefreshToken ? this.deserializeRefreshTokens(e.RefreshToken) : {}, appMetadata: e.AppMetadata ? this.deserializeAppMetadata(e.AppMetadata) : {} };
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
/*! @azure/msal-node v3.8.1 2025-10-29 */
var gf = "system_assigned_managed_identity", qT = "managed_identity", Dc = `https://login.microsoftonline.com/${qT}/`, $e = { AUTHORIZATION_HEADER_NAME: "Authorization", METADATA_HEADER_NAME: "Metadata", APP_SERVICE_SECRET_HEADER_NAME: "X-IDENTITY-HEADER", ML_AND_SF_SECRET_HEADER_NAME: "secret" }, he = { API_VERSION: "api-version", RESOURCE: "resource", SHA256_TOKEN_TO_REFRESH: "token_sha256_to_refresh", XMS_CC: "xms_cc" }, k = { AZURE_POD_IDENTITY_AUTHORITY_HOST: "AZURE_POD_IDENTITY_AUTHORITY_HOST", DEFAULT_IDENTITY_CLIENT_ID: "DEFAULT_IDENTITY_CLIENT_ID", IDENTITY_ENDPOINT: "IDENTITY_ENDPOINT", IDENTITY_HEADER: "IDENTITY_HEADER", IDENTITY_SERVER_THUMBPRINT: "IDENTITY_SERVER_THUMBPRINT", IMDS_ENDPOINT: "IMDS_ENDPOINT", MSI_ENDPOINT: "MSI_ENDPOINT", MSI_SECRET: "MSI_SECRET" }, O = { APP_SERVICE: "AppService", AZURE_ARC: "AzureArc", CLOUD_SHELL: "CloudShell", DEFAULT_TO_IMDS: "DefaultToImds", IMDS: "Imds", MACHINE_LEARNING: "MachineLearning", SERVICE_FABRIC: "ServiceFabric" }, ae = { SYSTEM_ASSIGNED: "system-assigned", USER_ASSIGNED_CLIENT_ID: "user-assigned-client-id", USER_ASSIGNED_RESOURCE_ID: "user-assigned-resource-id", USER_ASSIGNED_OBJECT_ID: "user-assigned-object-id" }, ee = { GET: "get", POST: "post" }, gs = { SUCCESS_RANGE_START: N.SUCCESS_RANGE_START, SUCCESS_RANGE_END: N.SUCCESS_RANGE_END, SERVER_ERROR: N.SERVER_ERROR }, yf = "REGION_NAME", Ef = "MSAL_FORCE_REGION", Tf = 32, Cf = { SHA256: "sha256" }, ys = { CV_CHARSET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~" }, Uc = { KEY_SEPARATOR: "-" }, Oe = { MSAL_SKU: "msal.js.node", JWT_BEARER_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer", AUTHORIZATION_PENDING: "authorization_pending", HTTP_PROTOCOL: "http://", LOCALHOST: "localhost" }, Ut = { acquireTokenSilent: 62, acquireTokenByUsernamePassword: 371, acquireTokenByDeviceCode: 671, acquireTokenByClientCredential: 771, acquireTokenByCode: 871, acquireTokenByRefreshToken: 872 }, Xe = { RSA_256: "RS256", PSS_256: "PS256", X5T_256: "x5t#S256", X5T: "x5t", X5C: "x5c", AUDIENCE: "aud", EXPIRATION_TIME: "exp", ISSUER: "iss", SUBJECT: "sub", NOT_BEFORE: "nbf", JWT_ID: "jti" }, Es = { INTERVAL_MS: 100, TIMEOUT_MS: 5e3 }, Af = 4096;
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Lo {
  static getNetworkResponse(e, t, r) {
    return { headers: e, body: t, status: r };
  }
  static urlToHttpOptions(e) {
    let t = { protocol: e.protocol, hostname: e.hostname && e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname, hash: e.hash, search: e.search, pathname: e.pathname, path: `${e.pathname || ""}${e.search || ""}`, href: e.href };
    if (e.port !== "") t.port = Number(e.port);
    if (e.username || e.password) t.auth = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
    return t;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Ho {
  constructor(e, t) {
    this.proxyUrl = e || "", this.customAgentOptions = t || {};
  }
  async sendGetRequestAsync(e, t, r) {
    if (this.proxyUrl) return _f(e, this.proxyUrl, ee.GET, t, this.customAgentOptions, r);
    else return Sf(e, ee.GET, t, this.customAgentOptions, r);
  }
  async sendPostRequestAsync(e, t) {
    if (this.proxyUrl) return _f(e, this.proxyUrl, ee.POST, t, this.customAgentOptions);
    else return Sf(e, ee.POST, t, this.customAgentOptions);
  }
}
var _f = (e, t, r, n, o, i) => {
  let s = new URL(e), a = new URL(t), c = n?.headers || {}, l = { host: a.hostname, port: a.port, method: "CONNECT", path: s.hostname, headers: c };
  if (o && Object.keys(o).length) l.agent = new import_http.default.Agent(o);
  let d = "";
  if (r === ee.POST) {
    let m = n?.body || "";
    d = `Content-Type: application/x-www-form-urlencoded\r
Content-Length: ${m.length}\r
\r
${m}`;
  } else if (i) l.timeout = i;
  let u = `${r.toUpperCase()} ${s.href} HTTP/1.1\r
Host: ${s.host}\r
Connection: close\r
` + d + `\r
`;
  return new Promise((m, h) => {
    let y = import_http.default.request(l);
    if (i) y.on("timeout", () => {
      y.destroy(), h(Error("Request time out"));
    });
    y.end(), y.on("connect", (E, S) => {
      let b = E?.statusCode || gs.SERVER_ERROR;
      if (b < gs.SUCCESS_RANGE_START || b > gs.SUCCESS_RANGE_END) y.destroy(), S.destroy(), h(Error(`Error connecting to proxy. Http status code: ${E.statusCode}. Http status message: ${E?.statusMessage || "Unknown"}`));
      S.write(u);
      let H = [];
      S.on("data", (z) => {
        H.push(z);
      }), S.on("end", () => {
        let re = Buffer.concat([...H]).toString().split(`\r
`), _ = parseInt(re[0].split(" ")[1]), I = re[0].split(" ").slice(2).join(" "), T = re[re.length - 1], R = re.slice(1, re.length - 2), B = /* @__PURE__ */ new Map();
        R.forEach((hr) => {
          let Fl = hr.split(new RegExp(/:\s(.*)/s)), Xg = Fl[0], ma = Fl[1];
          try {
            let ti = JSON.parse(ma);
            if (ti && typeof ti === "object") ma = ti;
          } catch (ti) {
          }
          B.set(Xg, ma);
        });
        let L = Object.fromEntries(B), de = Lo.getNetworkResponse(L, Rf(_, I, L, T), _);
        if ((_ < N.SUCCESS_RANGE_START || _ > N.SUCCESS_RANGE_END) && de.body.error !== Oe.AUTHORIZATION_PENDING) y.destroy();
        m(de);
      }), S.on("error", (z) => {
        y.destroy(), S.destroy(), h(Error(z.toString()));
      });
    }), y.on("error", (E) => {
      y.destroy(), h(Error(E.toString()));
    });
  });
}, Sf = (e, t, r, n, o) => {
  let i = t === ee.POST, s = r?.body || "", a = new URL(e), c = r?.headers || {}, l = { method: t, headers: c, ...Lo.urlToHttpOptions(a) };
  if (n && Object.keys(n).length) l.agent = new import_https.default.Agent(n);
  if (i) l.headers = { ...l.headers, "Content-Length": s.length };
  else if (o) l.timeout = o;
  return new Promise((d, u) => {
    let m;
    if (l.protocol === "http:") m = import_http.default.request(l);
    else m = import_https.default.request(l);
    if (i) m.write(s);
    if (o) m.on("timeout", () => {
      m.destroy(), u(Error("Request time out"));
    });
    m.end(), m.on("response", (h) => {
      let { headers: y, statusCode: E, statusMessage: S } = h, b = [];
      h.on("data", (H) => {
        b.push(H);
      }), h.on("end", () => {
        let H = Buffer.concat([...b]).toString(), z = y, re = Lo.getNetworkResponse(z, Rf(E, S, z, H), E);
        if ((E < N.SUCCESS_RANGE_START || E > N.SUCCESS_RANGE_END) && re.body.error !== Oe.AUTHORIZATION_PENDING) m.destroy();
        d(re);
      });
    }), m.on("error", (h) => {
      m.destroy(), u(Error(h.toString()));
    });
  });
}, Rf = (e, t, r, n) => {
  let o;
  try {
    o = JSON.parse(n);
  } catch (i) {
    let s, a;
    if (e >= N.CLIENT_ERROR_RANGE_START && e <= N.CLIENT_ERROR_RANGE_END) s = "client_error", a = "A client";
    else if (e >= N.SERVER_ERROR_RANGE_START && e <= N.SERVER_ERROR_RANGE_END) s = "server_error", a = "A server";
    else s = "unknown_error", a = "An unknown";
    o = { error: s, error_description: `${a} error occured.
Http status code: ${e}
Http status message: ${t || "Unknown"}
Headers: ${JSON.stringify(r)}` };
  }
  return o;
};
/*! @azure/msal-node v3.8.1 2025-10-29 */
var Ts = "invalid_file_extension", Cs = "invalid_file_path", sr = "invalid_managed_identity_id_type", As = "invalid_secret", wf = "missing_client_id", vf = "network_unavailable", Is = "platform_not_supported", _s = "unable_to_create_azure_arc", Ss = "unable_to_create_cloud_shell", Rs = "unable_to_create_source", $o = "unable_to_read_secret_file", kf = "user_assigned_not_available_at_runtime", ws = "www_authenticate_header_missing", vs = "www_authenticate_header_unsupported_format", $r = { [k.AZURE_POD_IDENTITY_AUTHORITY_HOST]: "azure_pod_identity_authority_host_url_malformed", [k.IDENTITY_ENDPOINT]: "identity_endpoint_url_malformed", [k.IMDS_ENDPOINT]: "imds_endpoint_url_malformed", [k.MSI_ENDPOINT]: "msi_endpoint_url_malformed" };
/*! @azure/msal-node v3.8.1 2025-10-29 */
var zT = { [Ts]: "The file path in the WWW-Authenticate header does not contain a .key file.", [Cs]: "The file path in the WWW-Authenticate header is not in a valid Windows or Linux Format.", [sr]: "More than one ManagedIdentityIdType was provided.", [As]: "The secret in the file on the file path in the WWW-Authenticate header is greater than 4096 bytes.", [Is]: "The platform is not supported by Azure Arc. Azure Arc only supports Windows and Linux.", [wf]: "A ManagedIdentityId id was not provided.", [$r.AZURE_POD_IDENTITY_AUTHORITY_HOST]: `The Managed Identity's '${k.AZURE_POD_IDENTITY_AUTHORITY_HOST}' environment variable is malformed.`, [$r.IDENTITY_ENDPOINT]: `The Managed Identity's '${k.IDENTITY_ENDPOINT}' environment variable is malformed.`, [$r.IMDS_ENDPOINT]: `The Managed Identity's '${k.IMDS_ENDPOINT}' environment variable is malformed.`, [$r.MSI_ENDPOINT]: `The Managed Identity's '${k.MSI_ENDPOINT}' environment variable is malformed.`, [vf]: "Authentication unavailable. The request to the managed identity endpoint timed out.", [_s]: "Azure Arc Managed Identities can only be system assigned.", [Ss]: "Cloud Shell Managed Identities can only be system assigned.", [Rs]: "Unable to create a Managed Identity source based on environment variables.", [$o]: "Unable to read the secret file.", [kf]: "Service Fabric user assigned managed identity ClientId or ResourceId is not configurable at runtime.", [ws]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is missing.", [vs]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is in an unsupported format." };
class Hc extends x {
  constructor(e) {
    super(e, zT[e]);
    this.name = "ManagedIdentityError", Object.setPrototypeOf(this, Hc.prototype);
  }
}
function ue(e) {
  return new Hc(e);
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class $c {
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e;
  }
  get idType() {
    return this._idType;
  }
  set idType(e) {
    this._idType = e;
  }
  constructor(e) {
    let t = e?.userAssignedClientId, r = e?.userAssignedResourceId, n = e?.userAssignedObjectId;
    if (t) {
      if (r || n) throw ue(sr);
      this.id = t, this.idType = ae.USER_ASSIGNED_CLIENT_ID;
    } else if (r) {
      if (t || n) throw ue(sr);
      this.id = r, this.idType = ae.USER_ASSIGNED_RESOURCE_ID;
    } else if (n) {
      if (t || r) throw ue(sr);
      this.id = n, this.idType = ae.USER_ASSIGNED_OBJECT_ID;
    } else this.id = gf, this.idType = ae.SYSTEM_ASSIGNED;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var fe = { invalidLoopbackAddressType: { code: "invalid_loopback_server_address_type", desc: "Loopback server address is not type string. This is unexpected." }, unableToLoadRedirectUri: { code: "unable_to_load_redirectUrl", desc: "Loopback server callback was invoked without a url. This is unexpected." }, noAuthCodeInResponse: { code: "no_auth_code_in_response", desc: "No auth code found in the server response. Please check your network trace to determine what happened." }, noLoopbackServerExists: { code: "no_loopback_server_exists", desc: "No loopback server exists yet." }, loopbackServerAlreadyExists: { code: "loopback_server_already_exists", desc: "Loopback server already exists. Cannot create another." }, loopbackServerTimeout: { code: "loopback_server_timeout", desc: "Timed out waiting for auth code listener to be registered." }, stateNotFoundError: { code: "state_not_found", desc: "State not found. Please verify that the request originated from msal." }, thumbprintMissing: { code: "thumbprint_missing_from_client_certificate", desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint." }, redirectUriNotSupported: { code: "redirect_uri_not_supported", desc: "RedirectUri is not supported in this scenario. Please remove redirectUri from the request." } };
class ie extends x {
  constructor(e, t) {
    super(e, t);
    this.name = "NodeAuthError";
  }
  static createInvalidLoopbackAddressTypeError() {
    return new ie(fe.invalidLoopbackAddressType.code, `${fe.invalidLoopbackAddressType.desc}`);
  }
  static createUnableToLoadRedirectUrlError() {
    return new ie(fe.unableToLoadRedirectUri.code, `${fe.unableToLoadRedirectUri.desc}`);
  }
  static createNoAuthCodeInResponseError() {
    return new ie(fe.noAuthCodeInResponse.code, `${fe.noAuthCodeInResponse.desc}`);
  }
  static createNoLoopbackServerExistsError() {
    return new ie(fe.noLoopbackServerExists.code, `${fe.noLoopbackServerExists.desc}`);
  }
  static createLoopbackServerAlreadyExistsError() {
    return new ie(fe.loopbackServerAlreadyExists.code, `${fe.loopbackServerAlreadyExists.desc}`);
  }
  static createLoopbackServerTimeoutError() {
    return new ie(fe.loopbackServerTimeout.code, `${fe.loopbackServerTimeout.desc}`);
  }
  static createStateNotFoundError() {
    return new ie(fe.stateNotFoundError.code, fe.stateNotFoundError.desc);
  }
  static createThumbprintMissingError() {
    return new ie(fe.thumbprintMissing.code, fe.thumbprintMissing.desc);
  }
  static createRedirectUriNotSupportedError() {
    return new ie(fe.redirectUriNotSupported.code, fe.redirectUriNotSupported.desc);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var GT = { clientId: p.EMPTY_STRING, authority: p.DEFAULT_AUTHORITY, clientSecret: p.EMPTY_STRING, clientAssertion: p.EMPTY_STRING, clientCertificate: { thumbprint: p.EMPTY_STRING, thumbprintSha256: p.EMPTY_STRING, privateKey: p.EMPTY_STRING, x5c: p.EMPTY_STRING }, knownAuthorities: [], cloudDiscoveryMetadata: p.EMPTY_STRING, authorityMetadata: p.EMPTY_STRING, clientCapabilities: [], protocolMode: ve.AAD, azureCloudOptions: { azureCloudInstance: Qt.None, tenant: p.EMPTY_STRING }, skipAuthorityMetadataCache: false, encodeExtraQueryParams: false }, jT = { claimsBasedCachingEnabled: false }, Fc = { loggerCallback: () => {
}, piiLoggingEnabled: false, logLevel: j.Info }, VT = { loggerOptions: Fc, networkClient: new Ho(), proxyUrl: p.EMPTY_STRING, customAgentOptions: {}, disableInternalRetries: false }, KT = { application: { appName: p.EMPTY_STRING, appVersion: p.EMPTY_STRING } };
function bf({ auth: e, broker: t, cache: r, system: n, telemetry: o }) {
  let i = { ...VT, networkClient: new Ho(n?.proxyUrl, n?.customAgentOptions), loggerOptions: n?.loggerOptions || Fc, disableInternalRetries: n?.disableInternalRetries || false };
  if (!!e.clientCertificate && !e.clientCertificate.thumbprint && !e.clientCertificate.thumbprintSha256) throw ie.createStateNotFoundError();
  return { auth: { ...GT, ...e }, broker: { ...t }, cache: { ...jT, ...r }, system: { ...i, ...n }, telemetry: { ...KT, ...o } };
}
function Of({ clientCapabilities: e, managedIdentityIdParams: t, system: r }) {
  let n = new $c(t), o = r?.loggerOptions || Fc, i;
  if (r?.networkClient) i = r.networkClient;
  else i = new Ho(r?.proxyUrl, r?.customAgentOptions);
  return { clientCapabilities: e || [], managedIdentityId: n, system: { loggerOptions: o, networkClient: i }, disableInternalRetries: r?.disableInternalRetries || false };
}
var Bc = { randomUUID: import_crypto2.randomUUID };
var bs = new Uint8Array(256), ks = bs.length;
function qc() {
  if (ks > bs.length - 16) (0, import_crypto3.randomFillSync)(bs), ks = 0;
  return bs.slice(ks, ks += 16);
}
var Ce = [];
for (let e = 0; e < 256; ++e) Ce.push((e + 256).toString(16).slice(1));
function Nf(e, t = 0) {
  return (Ce[e[t + 0]] + Ce[e[t + 1]] + Ce[e[t + 2]] + Ce[e[t + 3]] + "-" + Ce[e[t + 4]] + Ce[e[t + 5]] + "-" + Ce[e[t + 6]] + Ce[e[t + 7]] + "-" + Ce[e[t + 8]] + Ce[e[t + 9]] + "-" + Ce[e[t + 10]] + Ce[e[t + 11]] + Ce[e[t + 12]] + Ce[e[t + 13]] + Ce[e[t + 14]] + Ce[e[t + 15]]).toLowerCase();
}
function QT(e, t, r) {
  if (Bc.randomUUID && !t && !e) return Bc.randomUUID();
  e = e || {};
  let n = e.random ?? e.rng?.() ?? qc();
  if (n.length < 16) throw Error("Random bytes length must be >= 16");
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    if (r = r || 0, r < 0 || r + 16 > t.length) throw RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let o = 0; o < 16; ++o) t[r + o] = n[o];
    return t;
  }
  return Nf(n);
}
var zc = QT;
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Fo {
  generateGuid() {
    return zc();
  }
  isGuid(e) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Fe {
  static base64Encode(e, t) {
    return Buffer.from(e, t).toString(Ee.BASE64);
  }
  static base64EncodeUrl(e, t) {
    return Fe.base64Encode(e, t).replace(/=/g, p.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
  }
  static base64Decode(e) {
    return Buffer.from(e, Ee.BASE64).toString("utf8");
  }
  static base64DecodeUrl(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    while (t.length % 4) t += "=";
    return Fe.base64Decode(t);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Fr {
  sha256(e) {
    return import_crypto4.default.createHash(Cf.SHA256).update(e).digest();
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Gc {
  constructor() {
    this.hashUtils = new Fr();
  }
  async generatePkceCodes() {
    let e = this.generateCodeVerifier(), t = this.generateCodeChallengeFromVerifier(e);
    return { verifier: e, challenge: t };
  }
  generateCodeVerifier() {
    let e = [], t = 256 - 256 % ys.CV_CHARSET.length;
    while (e.length <= Tf) {
      let n = import_crypto5.default.randomBytes(1)[0];
      if (n >= t) continue;
      let o = n % ys.CV_CHARSET.length;
      e.push(ys.CV_CHARSET[o]);
    }
    let r = e.join(p.EMPTY_STRING);
    return Fe.base64EncodeUrl(r);
  }
  generateCodeChallengeFromVerifier(e) {
    return Fe.base64EncodeUrl(this.hashUtils.sha256(e).toString(Ee.BASE64), Ee.BASE64);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class ar {
  constructor() {
    this.pkceGenerator = new Gc(), this.guidGenerator = new Fo(), this.hashUtils = new Fr();
  }
  base64UrlEncode() {
    throw Error("Method not implemented.");
  }
  encodeKid() {
    throw Error("Method not implemented.");
  }
  createNewGuid() {
    return this.guidGenerator.generateGuid();
  }
  base64Encode(e) {
    return Fe.base64Encode(e);
  }
  base64Decode(e) {
    return Fe.base64Decode(e);
  }
  generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  }
  getPublicKeyThumbprint() {
    throw Error("Method not implemented.");
  }
  removeTokenBindingKey() {
    throw Error("Method not implemented.");
  }
  clearKeystore() {
    throw Error("Method not implemented.");
  }
  signJwt() {
    throw Error("Method not implemented.");
  }
  async hashString(e) {
    return Fe.base64EncodeUrl(this.hashUtils.sha256(e).toString(Ee.BASE64), Ee.BASE64);
  }
}
/*! @azure/msal-common v15.13.1 2025-10-29 */
/*! @azure/msal-node v3.8.1 2025-10-29 */
function Pf(e) {
  let t = e.credentialType === Y.REFRESH_TOKEN && e.familyId || e.clientId, r = e.tokenType && e.tokenType.toLowerCase() !== F.BEARER.toLowerCase() ? e.tokenType.toLowerCase() : "";
  return [e.homeAccountId, e.environment, e.credentialType, t, e.realm || "", e.target || "", e.requestedClaimsHash || "", r].join(Uc.KEY_SEPARATOR).toLowerCase();
}
function xf(e) {
  let t = e.homeAccountId.split(".")[1];
  return [e.homeAccountId, e.environment, t || e.tenantId || ""].join(Uc.KEY_SEPARATOR).toLowerCase();
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Br extends br {
  constructor(e, t, r, n) {
    super(t, r, e, new qn(), n);
    this.cache = {}, this.changeEmitters = [], this.logger = e;
  }
  registerChangeEmitter(e) {
    this.changeEmitters.push(e);
  }
  emitChange() {
    this.changeEmitters.forEach((e) => e.call(null));
  }
  cacheToInMemoryCache(e) {
    let t = { accounts: {}, idTokens: {}, accessTokens: {}, refreshTokens: {}, appMetadata: {} };
    for (let r in e) {
      let n = e[r];
      if (typeof n !== "object") continue;
      if (n instanceof ye) t.accounts[r] = n;
      else if (ef(n)) t.idTokens[r] = n;
      else if (Zh(n)) t.accessTokens[r] = n;
      else if (tf(n)) t.refreshTokens[r] = n;
      else if (rf(r, n)) t.appMetadata[r] = n;
      else continue;
    }
    return t;
  }
  inMemoryCacheToCache(e) {
    let t = this.getCache();
    return t = { ...t, ...e.accounts, ...e.idTokens, ...e.accessTokens, ...e.refreshTokens, ...e.appMetadata }, t;
  }
  getInMemoryCache() {
    return this.logger.trace("Getting in-memory cache"), this.cacheToInMemoryCache(this.getCache());
  }
  setInMemoryCache(e) {
    this.logger.trace("Setting in-memory cache");
    let t = this.inMemoryCacheToCache(e);
    this.setCache(t), this.emitChange();
  }
  getCache() {
    return this.logger.trace("Getting cache key-value store"), this.cache;
  }
  setCache(e) {
    this.logger.trace("Setting cache key value store"), this.cache = e, this.emitChange();
  }
  getItem(e) {
    return this.logger.tracePii(`Item key: ${e}`), this.getCache()[e];
  }
  setItem(e, t) {
    this.logger.tracePii(`Item key: ${e}`);
    let r = this.getCache();
    r[e] = t, this.setCache(r);
  }
  generateCredentialKey(e) {
    return Pf(e);
  }
  generateAccountKey(e) {
    return xf(e);
  }
  getAccountKeys() {
    let e = this.getInMemoryCache();
    return Object.keys(e.accounts);
  }
  getTokenKeys() {
    let e = this.getInMemoryCache();
    return { idToken: Object.keys(e.idTokens), accessToken: Object.keys(e.accessTokens), refreshToken: Object.keys(e.refreshTokens) };
  }
  getAccount(e) {
    return this.getItem(e) ? Object.assign(new ye(), this.getItem(e)) : null;
  }
  async setAccount(e) {
    let t = this.generateAccountKey(ye.getAccountInfo(e));
    this.setItem(t, e);
  }
  getIdTokenCredential(e) {
    let t = this.getItem(e);
    if (ef(t)) return t;
    return null;
  }
  async setIdTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getAccessTokenCredential(e) {
    let t = this.getItem(e);
    if (Zh(t)) return t;
    return null;
  }
  async setAccessTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getRefreshTokenCredential(e) {
    let t = this.getItem(e);
    if (tf(t)) return t;
    return null;
  }
  async setRefreshTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getAppMetadata(e) {
    let t = this.getItem(e);
    if (rf(e, t)) return t;
    return null;
  }
  setAppMetadata(e) {
    let t = IT(e);
    this.setItem(t, e);
  }
  getServerTelemetry(e) {
    let t = this.getItem(e);
    if (t && CT(e, t)) return t;
    return null;
  }
  setServerTelemetry(e, t) {
    this.setItem(e, t);
  }
  getAuthorityMetadata(e) {
    let t = this.getItem(e);
    if (t && _T(e, t)) return t;
    return null;
  }
  getAuthorityMetadataKeys() {
    return this.getKeys().filter((e) => this.isAuthorityMetadata(e));
  }
  setAuthorityMetadata(e, t) {
    this.setItem(e, t);
  }
  getThrottlingCache(e) {
    let t = this.getItem(e);
    if (t && AT(e, t)) return t;
    return null;
  }
  setThrottlingCache(e, t) {
    this.setItem(e, t);
  }
  removeItem(e) {
    this.logger.tracePii(`Item key: ${e}`);
    let t = false, r = this.getCache();
    if (r[e]) delete r[e], t = true;
    if (t) this.setCache(r), this.emitChange();
    return t;
  }
  removeOutdatedAccount(e) {
    this.removeItem(e);
  }
  containsKey(e) {
    return this.getKeys().includes(e);
  }
  getKeys() {
    this.logger.trace("Retrieving all cache keys");
    let e = this.getCache();
    return [...Object.keys(e)];
  }
  clear() {
    this.logger.trace("Clearing cache entries created by MSAL"), this.getKeys().forEach((t) => {
      this.removeItem(t);
    }), this.emitChange();
  }
  static generateInMemoryCache(e) {
    return Hr.deserializeAllCache(Hr.deserializeJSONBlob(e));
  }
  static generateJsonCache(e) {
    return un.serializeAllCache(e);
  }
  updateCredentialCacheKey(e, t) {
    let r = this.generateCredentialKey(t);
    if (e !== r) {
      let n = this.getItem(e);
      if (n) return this.removeItem(e), this.setItem(r, n), this.logger.verbose(`Updated an outdated ${t.credentialType} cache key`), r;
      else this.logger.error(`Attempted to update an outdated ${t.credentialType} cache key but no item matching the outdated key was found in storage`);
    }
    return e;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var Bo = { Account: {}, IdToken: {}, AccessToken: {}, RefreshToken: {}, AppMetadata: {} };
class Os {
  constructor(e, t, r) {
    if (this.cacheHasChanged = false, this.storage = e, this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this)), r) this.persistence = r;
    this.logger = t;
  }
  hasChanged() {
    return this.cacheHasChanged;
  }
  serialize() {
    this.logger.trace("Serializing in-memory cache");
    let e = un.serializeAllCache(this.storage.getInMemoryCache());
    if (this.cacheSnapshot) this.logger.trace("Reading cache snapshot from disk"), e = this.mergeState(JSON.parse(this.cacheSnapshot), e);
    else this.logger.trace("No cache snapshot to merge");
    return this.cacheHasChanged = false, JSON.stringify(e);
  }
  deserialize(e) {
    if (this.logger.trace("Deserializing JSON to in-memory cache"), this.cacheSnapshot = e, this.cacheSnapshot) {
      this.logger.trace("Reading cache snapshot from disk");
      let t = Hr.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
      this.storage.setInMemoryCache(t);
    } else this.logger.trace("No cache snapshot to deserialize");
  }
  getKVStore() {
    return this.storage.getCache();
  }
  getCacheSnapshot() {
    let e = Br.generateInMemoryCache(this.cacheSnapshot);
    return this.storage.inMemoryCacheToCache(e);
  }
  async getAllAccounts(e = new ar().createNewGuid()) {
    this.logger.trace("getAllAccounts called");
    let t;
    try {
      if (this.persistence) t = new at(this, false), await this.persistence.beforeCacheAccess(t);
      return this.storage.getAllAccounts({}, e);
    } finally {
      if (this.persistence && t) await this.persistence.afterCacheAccess(t);
    }
  }
  async getAccountByHomeId(e) {
    let t = await this.getAllAccounts();
    if (e && t && t.length) return t.filter((r) => r.homeAccountId === e)[0] || null;
    else return null;
  }
  async getAccountByLocalId(e) {
    let t = await this.getAllAccounts();
    if (e && t && t.length) return t.filter((r) => r.localAccountId === e)[0] || null;
    else return null;
  }
  async removeAccount(e, t) {
    this.logger.trace("removeAccount called");
    let r;
    try {
      if (this.persistence) r = new at(this, true), await this.persistence.beforeCacheAccess(r);
      this.storage.removeAccount(e, t || new Fo().generateGuid());
    } finally {
      if (this.persistence && r) await this.persistence.afterCacheAccess(r);
    }
  }
  async overwriteCache() {
    if (!this.persistence) {
      this.logger.info("No persistence layer specified, cache cannot be overwritten");
      return;
    }
    this.logger.info("Overwriting in-memory cache with persistent cache"), this.storage.clear();
    let e = new at(this, false);
    await this.persistence.beforeCacheAccess(e);
    let t = this.getCacheSnapshot();
    this.storage.setCache(t), await this.persistence.afterCacheAccess(e);
  }
  handleChangeEvent() {
    this.cacheHasChanged = true;
  }
  mergeState(e, t) {
    this.logger.trace("Merging in-memory cache with cache snapshot");
    let r = this.mergeRemovals(e, t);
    return this.mergeUpdates(r, t);
  }
  mergeUpdates(e, t) {
    return Object.keys(t).forEach((r) => {
      let n = t[r];
      if (!e.hasOwnProperty(r)) {
        if (n !== null) e[r] = n;
      } else {
        let o = n !== null, i = typeof n === "object", s = !Array.isArray(n), a = typeof e[r] < "u" && e[r] !== null;
        if (o && i && s && a) this.mergeUpdates(e[r], n);
        else e[r] = n;
      }
    }), e;
  }
  mergeRemovals(e, t) {
    this.logger.trace("Remove updated entries in cache");
    let r = e.Account ? this.mergeRemovalsDict(e.Account, t.Account) : e.Account, n = e.AccessToken ? this.mergeRemovalsDict(e.AccessToken, t.AccessToken) : e.AccessToken, o = e.RefreshToken ? this.mergeRemovalsDict(e.RefreshToken, t.RefreshToken) : e.RefreshToken, i = e.IdToken ? this.mergeRemovalsDict(e.IdToken, t.IdToken) : e.IdToken, s = e.AppMetadata ? this.mergeRemovalsDict(e.AppMetadata, t.AppMetadata) : e.AppMetadata;
    return { ...e, Account: r, AccessToken: n, RefreshToken: o, IdToken: i, AppMetadata: s };
  }
  mergeRemovalsDict(e, t) {
    let r = { ...e };
    return Object.keys(e).forEach((n) => {
      if (!t || !t.hasOwnProperty(n)) delete r[n];
    }), r;
  }
  overlayDefaults(e) {
    return this.logger.trace("Overlaying input cache with the default cache"), { Account: { ...Bo.Account, ...e.Account }, IdToken: { ...Bo.IdToken, ...e.IdToken }, AccessToken: { ...Bo.AccessToken, ...e.AccessToken }, RefreshToken: { ...Bo.RefreshToken, ...e.RefreshToken }, AppMetadata: { ...Bo.AppMetadata, ...e.AppMetadata } };
  }
}
var _g = (0, import_chunk_w1d7ygsk.rt)(Ig(), 1);
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Ct {
  static fromAssertion(e) {
    let t = new Ct();
    return t.jwt = e, t;
  }
  static fromCertificate(e, t, r) {
    let n = new Ct();
    if (n.privateKey = t, n.thumbprint = e, n.useSha256 = false, r) n.publicCertificate = this.parseCertificate(r);
    return n;
  }
  static fromCertificateWithSha256Thumbprint(e, t, r) {
    let n = new Ct();
    if (n.privateKey = t, n.thumbprint = e, n.useSha256 = true, r) n.publicCertificate = this.parseCertificate(r);
    return n;
  }
  getJwt(e, t, r) {
    if (this.privateKey && this.thumbprint) {
      if (this.jwt && !this.isExpired() && t === this.issuer && r === this.jwtAudience) return this.jwt;
      return this.createJwt(e, t, r);
    }
    if (this.jwt) return this.jwt;
    throw g(wo);
  }
  createJwt(e, t, r) {
    this.issuer = t, this.jwtAudience = r;
    let n = Z();
    this.expirationTime = n + 600;
    let i = { alg: this.useSha256 ? Xe.PSS_256 : Xe.RSA_256 }, s = this.useSha256 ? Xe.X5T_256 : Xe.X5T;
    if (Object.assign(i, { [s]: Fe.base64EncodeUrl(this.thumbprint, Ee.HEX) }), this.publicCertificate) Object.assign(i, { [Xe.X5C]: this.publicCertificate });
    let a = { [Xe.AUDIENCE]: this.jwtAudience, [Xe.EXPIRATION_TIME]: this.expirationTime, [Xe.ISSUER]: this.issuer, [Xe.SUBJECT]: this.issuer, [Xe.NOT_BEFORE]: n, [Xe.JWT_ID]: e.createNewGuid() };
    return this.jwt = _g.default.sign(a, this.privateKey, { header: i }), this.jwt;
  }
  isExpired() {
    return this.expirationTime < Z();
  }
  static parseCertificate(e) {
    let t = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs, r = [], n;
    while ((n = t.exec(e)) !== null) r.push(n[1].replace(/\r*\n/g, p.EMPTY_STRING));
    return r;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var ta = "@azure/msal-node", At = "3.8.1";
/*! @azure/msal-node v3.8.1 2025-10-29 */
class ra extends Ie {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    this.logger.info("in acquireToken call in username-password client");
    let t = Z(), r = await this.executeTokenRequest(this.authority, e), n = new le(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return n.validateTokenResponse(r.body), n.handleServerTokenResponse(r.body, this.authority, t, e);
  }
  async executeTokenRequest(e, t) {
    let r = this.createTokenQueryParameters(t), n = M.appendQueryString(e.tokenEndpoint, r), o = await this.createTokenRequestBody(t), i = this.createTokenRequestHeaders({ credential: t.username, type: ke.UPN }), s = { clientId: this.config.authOptions.clientId, authority: e.canonicalAuthority, scopes: t.scopes, claims: t.claims, authenticationScheme: t.authenticationScheme, resourceRequestMethod: t.resourceRequestMethod, resourceRequestUri: t.resourceRequestUri, shrClaims: t.shrClaims, sshKid: t.sshKid };
    return this.executePostToTokenEndpoint(n, o, i, s, t.correlationId);
  }
  async createTokenRequestBody(e) {
    let t = /* @__PURE__ */ new Map();
    if (it(t, this.config.authOptions.clientId), yT(t, e.username), ET(t, e.password), ot(t, e.scopes), Mh(t, hn.IDTOKEN_TOKEN), er(t, Le.RESOURCE_OWNER_PASSWORD_GRANT), xt(t), Nt(t, this.config.libraryInfo), Pt(t, this.config.telemetry.application), rr(t), this.serverTelemetryManager) tr(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (Et(t, r), this.config.clientCredentials.clientSecret) Or(t, this.config.clientCredentials.clientSecret);
    let n = this.config.clientCredentials.clientAssertion;
    if (n) Nr(t, await be(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Pr(t, n.assertionType);
    if (!se.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) st(t, e.claims, this.config.authOptions.clientCapabilities);
    if (this.config.systemOptions.preventCorsPreflight && e.username) Jt(t, e.username);
    return Te(t);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
function Sg(e, t, r, n) {
  let o = bT({ ...e.auth, authority: t, redirectUri: r.redirectUri || "" }, r, n);
  if (Nt(o, { sku: Oe.MSAL_SKU, version: At, cpu: "arm64", os: "darwin" }), e.auth.protocolMode !== ve.OIDC) Pt(o, e.telemetry.application);
  if (Mh(o, hn.CODE), r.codeChallenge && r.codeChallengeMethod) hT(o, r.codeChallenge, r.codeChallengeMethod);
  return Ge(o, r.extraQueryParameters || {}), OT(t, o, e.auth.encodeExtraQueryParams, r.extraQueryParameters);
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Wn {
  constructor(e) {
    this.config = bf(e), this.cryptoProvider = new ar(), this.logger = new ze(this.config.system.loggerOptions, ta, At), this.storage = new Br(this.logger, this.config.auth.clientId, this.cryptoProvider, Nc(this.config.auth)), this.tokenCache = new Os(this.storage, this.logger, this.config.cache.cachePlugin);
  }
  async getAuthCodeUrl(e) {
    this.logger.info("getAuthCodeUrl called", e.correlationId);
    let t = { ...e, ...await this.initializeBaseRequest(e), responseMode: e.responseMode || wt.QUERY, authenticationScheme: F.BEARER, state: e.state || "", nonce: e.nonce || "" }, r = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions);
    return Sg(this.config, r, t, this.logger);
  }
  async acquireTokenByCode(e, t) {
    if (this.logger.info("acquireTokenByCode called"), e.state && t) this.logger.info("acquireTokenByCode - validating state"), this.validateState(e.state, t.state || ""), t = { ...t, state: "" };
    let r = { ...e, ...await this.initializeBaseRequest(e), authenticationScheme: F.BEARER }, n = this.initializeServerTelemetryManager(Ut.acquireTokenByCode, r.correlationId);
    try {
      let o = await this.createAuthority(r.authority, r.correlationId, void 0, e.azureCloudOptions), i = await this.buildOauthClientConfiguration(o, r.correlationId, r.redirectUri, n), s = new ms(i);
      return this.logger.verbose("Auth code client created", r.correlationId), await s.acquireToken(r, t);
    } catch (o) {
      if (o instanceof x) o.setCorrelationId(r.correlationId);
      throw n.cacheFailedRequest(o), o;
    }
  }
  async acquireTokenByRefreshToken(e) {
    this.logger.info("acquireTokenByRefreshToken called", e.correlationId);
    let t = { ...e, ...await this.initializeBaseRequest(e), authenticationScheme: F.BEARER }, r = this.initializeServerTelemetryManager(Ut.acquireTokenByRefreshToken, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), o = await this.buildOauthClientConfiguration(n, t.correlationId, t.redirectUri || "", r), i = new Vn(o);
      return this.logger.verbose("Refresh token client created", t.correlationId), await i.acquireToken(t);
    } catch (n) {
      if (n instanceof x) n.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(n), n;
    }
  }
  async acquireTokenSilent(e) {
    let t = { ...e, ...await this.initializeBaseRequest(e), forceRefresh: e.forceRefresh || false }, r = this.initializeServerTelemetryManager(Ut.acquireTokenSilent, t.correlationId, t.forceRefresh);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), o = await this.buildOauthClientConfiguration(n, t.correlationId, t.redirectUri || "", r), i = new ps(o);
      this.logger.verbose("Silent flow client created", t.correlationId);
      try {
        return await this.tokenCache.overwriteCache(), await this.acquireCachedTokenSilent(t, i, o);
      } catch (s) {
        if (s instanceof Sr && s.errorCode === nt) return new Vn(o).acquireTokenByRefreshToken(t);
        throw s;
      }
    } catch (n) {
      if (n instanceof x) n.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(n), n;
    }
  }
  async acquireCachedTokenSilent(e, t, r) {
    let [n, o] = await t.acquireCachedToken({ ...e, scopes: e.scopes?.length ? e.scopes : [...Ae] });
    if (o === Q.PROACTIVELY_REFRESHED) {
      this.logger.info("ClientApplication:acquireCachedTokenSilent - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
      let i = new Vn(r);
      try {
        await i.acquireTokenByRefreshToken(e);
      } catch {
      }
    }
    return n;
  }
  async acquireTokenByUsernamePassword(e) {
    this.logger.info("acquireTokenByUsernamePassword called", e.correlationId);
    let t = { ...e, ...await this.initializeBaseRequest(e) }, r = this.initializeServerTelemetryManager(Ut.acquireTokenByUsernamePassword, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), o = await this.buildOauthClientConfiguration(n, t.correlationId, "", r), i = new ra(o);
      return this.logger.verbose("Username password client created", t.correlationId), await i.acquireToken(t);
    } catch (n) {
      if (n instanceof x) n.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(n), n;
    }
  }
  getTokenCache() {
    return this.logger.info("getTokenCache called"), this.tokenCache;
  }
  validateState(e, t) {
    if (!e) throw ie.createStateNotFoundError();
    if (e !== t) throw g(Io);
  }
  getLogger() {
    return this.logger;
  }
  setLogger(e) {
    this.logger = e;
  }
  async buildOauthClientConfiguration(e, t, r, n) {
    return this.logger.verbose("buildOauthClientConfiguration called", t), this.logger.info(`Building oauth client configuration with the following authority: ${e.tokenEndpoint}.`, t), n?.updateRegionDiscoveryMetadata(e.regionDiscoveryMetadata), { authOptions: { clientId: this.config.auth.clientId, authority: e, clientCapabilities: this.config.auth.clientCapabilities, redirectUri: r }, loggerOptions: { logLevel: this.config.system.loggerOptions.logLevel, loggerCallback: this.config.system.loggerOptions.loggerCallback, piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled, correlationId: t }, cacheOptions: { claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled }, cryptoInterface: this.cryptoProvider, networkInterface: this.config.system.networkClient, storageInterface: this.storage, serverTelemetryManager: n, clientCredentials: { clientSecret: this.clientSecret, clientAssertion: await this.getClientAssertion(e) }, libraryInfo: { sku: Oe.MSAL_SKU, version: At, cpu: "arm64", os: "darwin" }, telemetry: this.config.telemetry, persistencePlugin: this.config.cache.cachePlugin, serializableCache: this.tokenCache };
  }
  async getClientAssertion(e) {
    if (this.developerProvidedClientAssertion) this.clientAssertion = Ct.fromAssertion(await be(this.developerProvidedClientAssertion, this.config.auth.clientId, e.tokenEndpoint));
    return this.clientAssertion && { assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, e.tokenEndpoint), assertionType: Oe.JWT_BEARER_ASSERTION_TYPE };
  }
  async initializeBaseRequest(e) {
    if (this.logger.verbose("initializeRequestScopes called", e.correlationId), e.authenticationScheme && e.authenticationScheme === F.POP) this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", e.correlationId);
    if (e.authenticationScheme = F.BEARER, this.config.cache.claimsBasedCachingEnabled && e.claims && !se.isEmptyObj(e.claims)) e.requestedClaimsHash = await this.cryptoProvider.hashString(e.claims);
    return { ...e, scopes: [...e && e.scopes || [], ...Ae], correlationId: e && e.correlationId || this.cryptoProvider.createNewGuid(), authority: e.authority || this.config.auth.authority };
  }
  initializeServerTelemetryManager(e, t, r) {
    let n = { clientId: this.config.auth.clientId, correlationId: t, apiId: e, forceRefresh: r || false };
    return new ir(n, this.storage);
  }
  async createAuthority(e, t, r, n) {
    this.logger.verbose("createAuthority called", t);
    let o = pe.generateAuthority(e, n || this.config.auth.azureCloudOptions), i = { protocolMode: this.config.auth.protocolMode, knownAuthorities: this.config.auth.knownAuthorities, cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata, authorityMetadata: this.config.auth.authorityMetadata, azureRegionConfiguration: r, skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache };
    return Pc(o, this.config.system.networkClient, this.storage, i, this.logger, t);
  }
  clearCache() {
    this.storage.clear();
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class yl {
  async listenForAuthCode(e, t) {
    if (this.server) throw ie.createLoopbackServerAlreadyExistsError();
    return new Promise((r, n) => {
      this.server = import_http2.default.createServer((o, i) => {
        let s = o.url;
        if (!s) {
          i.end(t || "Error occurred loading redirectUrl"), n(ie.createUnableToLoadRedirectUrlError());
          return;
        } else if (s === p.FORWARD_SLASH) {
          i.end(e || "Auth code was successfully acquired. You can close this window now.");
          return;
        }
        let a = this.getRedirectUri(), c = new URL(s, a), l = mc(c.search) || {};
        if (l.code) i.writeHead(N.REDIRECT, { location: a }), i.end();
        if (l.error) i.end(t || `Error occurred: ${l.error}`);
        r(l);
      }), this.server.listen(0, "127.0.0.1");
    });
  }
  getRedirectUri() {
    if (!this.server || !this.server.listening) throw ie.createNoLoopbackServerExistsError();
    let e = this.server.address();
    if (!e || typeof e === "string" || !e.port) throw this.closeServer(), ie.createInvalidLoopbackAddressTypeError();
    let t = e && e.port;
    return `${Oe.HTTP_PROTOCOL}${Oe.LOCALHOST}:${t}`;
  }
  closeServer() {
    if (this.server) {
      if (this.server.close(), typeof this.server.closeAllConnections === "function") this.server.closeAllConnections();
      this.server.unref(), this.server = void 0;
    }
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class na extends Ie {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    let t = await this.getDeviceCode(e);
    e.deviceCodeCallback(t);
    let r = Z(), n = await this.acquireTokenWithDeviceCode(e, t), o = new le(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return o.validateTokenResponse(n), o.handleServerTokenResponse(n, this.authority, r, e);
  }
  async getDeviceCode(e) {
    let t = this.createExtraQueryParameters(e), r = M.appendQueryString(this.authority.deviceCodeEndpoint, t), n = this.createQueryString(e), o = this.createTokenRequestHeaders(), i = { clientId: this.config.authOptions.clientId, authority: e.authority, scopes: e.scopes, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid };
    return this.executePostRequestToDeviceCodeEndpoint(r, n, o, i, e.correlationId);
  }
  createExtraQueryParameters(e) {
    let t = /* @__PURE__ */ new Map();
    if (e.extraQueryParameters) Ge(t, e.extraQueryParameters);
    return Te(t);
  }
  async executePostRequestToDeviceCodeEndpoint(e, t, r, n, o) {
    let { body: { user_code: i, device_code: s, verification_uri: a, expires_in: c, interval: l, message: d } } = await this.sendPostRequest(n, e, { body: t, headers: r }, o);
    return { userCode: i, deviceCode: s, verificationUri: a, expiresIn: c, interval: l, message: d };
  }
  createQueryString(e) {
    let t = /* @__PURE__ */ new Map();
    if (ot(t, e.scopes), it(t, this.config.authOptions.clientId), e.extraQueryParameters) Ge(t, e.extraQueryParameters);
    if (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) st(t, e.claims, this.config.authOptions.clientCapabilities);
    return Te(t);
  }
  continuePolling(e, t, r) {
    if (r) throw this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true"), g(_o);
    else if (t && t < e && Z() > t) throw this.logger.error(`User defined timeout for device code polling reached. The timeout was set for ${t}`), g(vo);
    else if (Z() > e) {
      if (t) this.logger.verbose(`User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${t}`);
      throw this.logger.error(`Device code expired. Expiration time of device code was ${e}`), g(So);
    }
    return true;
  }
  async acquireTokenWithDeviceCode(e, t) {
    let r = this.createTokenQueryParameters(e), n = M.appendQueryString(this.authority.tokenEndpoint, r), o = this.createTokenRequestBody(e, t), i = this.createTokenRequestHeaders(), s = e.timeout ? Z() + e.timeout : void 0, a = Z() + t.expiresIn, c = t.interval * 1e3;
    while (this.continuePolling(a, s, e.cancel)) {
      let l = { clientId: this.config.authOptions.clientId, authority: e.authority, scopes: e.scopes, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid }, d = await this.executePostToTokenEndpoint(n, o, i, l, e.correlationId);
      if (d.body && d.body.error) if (d.body.error === p.AUTHORIZATION_PENDING) this.logger.info("Authorization pending. Continue polling."), await TT(c);
      else throw this.logger.info("Unexpected error in polling from the server"), hc(Ao, d.body.error);
      else return this.logger.verbose("Authorization completed successfully. Polling stopped."), d.body;
    }
    throw this.logger.error("Polling stopped for unknown reasons."), g(Ro);
  }
  createTokenRequestBody(e, t) {
    let r = /* @__PURE__ */ new Map();
    ot(r, e.scopes), it(r, this.config.authOptions.clientId), er(r, Le.DEVICE_CODE_GRANT), fT(r, t.deviceCode);
    let n = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (Et(r, n), xt(r), Nt(r, this.config.libraryInfo), Pt(r, this.config.telemetry.application), rr(r), this.serverTelemetryManager) tr(r, this.serverTelemetryManager);
    if (!se.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) st(r, e.claims, this.config.authOptions.clientCapabilities);
    return Te(r);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class oa extends Wn {
  constructor(e) {
    super(e);
    if (this.config.broker.nativeBrokerPlugin) if (this.config.broker.nativeBrokerPlugin.isBrokerAvailable) this.nativeBrokerPlugin = this.config.broker.nativeBrokerPlugin, this.nativeBrokerPlugin.setLogger(this.config.system.loggerOptions);
    else this.logger.warning("NativeBroker implementation was provided but the broker is unavailable.");
    this.skus = ir.makeExtraSkuString({ libraryName: Oe.MSAL_SKU, libraryVersion: At });
  }
  async acquireTokenByDeviceCode(e) {
    this.logger.info("acquireTokenByDeviceCode called", e.correlationId);
    let t = Object.assign(e, await this.initializeBaseRequest(e)), r = this.initializeServerTelemetryManager(Ut.acquireTokenByDeviceCode, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), o = await this.buildOauthClientConfiguration(n, t.correlationId, "", r), i = new na(o);
      return this.logger.verbose("Device code client created", t.correlationId), await i.acquireToken(t);
    } catch (n) {
      if (n instanceof x) n.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(n), n;
    }
  }
  async acquireTokenInteractive(e) {
    let t = e.correlationId || this.cryptoProvider.createNewGuid();
    this.logger.trace("acquireTokenInteractive called", t);
    let { openBrowser: r, successTemplate: n, errorTemplate: o, windowHandle: i, loopbackClient: s, ...a } = e;
    if (this.nativeBrokerPlugin) {
      let h = { ...a, clientId: this.config.auth.clientId, scopes: e.scopes || Ae, redirectUri: e.redirectUri || "", authority: e.authority || this.config.auth.authority, correlationId: t, extraParameters: { ...a.extraQueryParameters, ...a.tokenQueryParameters, [xh]: this.skus }, accountId: a.account?.nativeAccountId };
      return this.nativeBrokerPlugin.acquireTokenInteractive(h, i);
    }
    if (e.redirectUri) {
      if (!this.config.broker.nativeBrokerPlugin) throw ie.createRedirectUriNotSupportedError();
      e.redirectUri = "";
    }
    let { verifier: c, challenge: l } = await this.cryptoProvider.generatePkceCodes(), d = s || new yl(), u = {}, m = null;
    try {
      let h = d.listenForAuthCode(n, o).then((z) => {
        u = z;
      }).catch((z) => {
        m = z;
      }), y = await this.waitForRedirectUri(d), E = { ...a, correlationId: t, scopes: e.scopes || Ae, redirectUri: y, responseMode: wt.QUERY, codeChallenge: l, codeChallengeMethod: Ri.S256 }, S = await this.getAuthCodeUrl(E);
      if (await r(S), await h, m) throw m;
      if (u.error) throw new Qe(u.error, u.error_description, u.suberror);
      else if (!u.code) throw ie.createNoAuthCodeInResponseError();
      let b = u.client_info, H = { code: u.code, codeVerifier: c, clientInfo: b || p.EMPTY_STRING, ...E };
      return await this.acquireTokenByCode(H);
    } finally {
      d.closeServer();
    }
  }
  async acquireTokenSilent(e) {
    let t = e.correlationId || this.cryptoProvider.createNewGuid();
    if (this.logger.trace("acquireTokenSilent called", t), this.nativeBrokerPlugin) {
      let r = { ...e, clientId: this.config.auth.clientId, scopes: e.scopes || Ae, redirectUri: e.redirectUri || "", authority: e.authority || this.config.auth.authority, correlationId: t, extraParameters: { ...e.tokenQueryParameters, [xh]: this.skus }, accountId: e.account.nativeAccountId, forceRefresh: e.forceRefresh || false };
      return this.nativeBrokerPlugin.acquireTokenSilent(r);
    }
    if (e.redirectUri) {
      if (!this.config.broker.nativeBrokerPlugin) throw ie.createRedirectUriNotSupportedError();
      e.redirectUri = "";
    }
    return super.acquireTokenSilent(e);
  }
  async signOut(e) {
    if (this.nativeBrokerPlugin && e.account.nativeAccountId) {
      let t = { clientId: this.config.auth.clientId, accountId: e.account.nativeAccountId, correlationId: e.correlationId || this.cryptoProvider.createNewGuid() };
      await this.nativeBrokerPlugin.signOut(t);
    }
    await this.getTokenCache().removeAccount(e.account, e.correlationId);
  }
  async getAllAccounts() {
    if (this.nativeBrokerPlugin) {
      let e = this.cryptoProvider.createNewGuid();
      return this.nativeBrokerPlugin.getAllAccounts(this.config.auth.clientId, e);
    }
    return this.getTokenCache().getAllAccounts();
  }
  async waitForRedirectUri(e) {
    return new Promise((t, r) => {
      let n = 0, o = setInterval(() => {
        if (Es.TIMEOUT_MS / Es.INTERVAL_MS < n) {
          clearInterval(o), r(ie.createLoopbackServerTimeoutError());
          return;
        }
        try {
          let i = e.getRedirectUri();
          clearInterval(o), t(i);
          return;
        } catch (i) {
          if (i instanceof x && i.errorCode === fe.noLoopbackServerExists.code) {
            n++;
            return;
          }
          clearInterval(o), r(i);
          return;
        }
      }, Es.INTERVAL_MS);
    });
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Qn extends Ie {
  constructor(e, t) {
    super(e);
    this.appTokenProvider = t;
  }
  async acquireToken(e) {
    if (e.skipCache || e.claims) return this.executeTokenRequest(e, this.authority);
    let [t, r] = await this.getCachedAuthenticationResult(e, this.config, this.cryptoUtils, this.authority, this.cacheManager, this.serverTelemetryManager);
    if (t) {
      if (r === Q.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
        let n = true;
        await this.executeTokenRequest(e, this.authority, n);
      }
      return t;
    } else return this.executeTokenRequest(e, this.authority);
  }
  async getCachedAuthenticationResult(e, t, r, n, o, i) {
    let s = t, a = t, c = Q.NOT_APPLICABLE, l;
    if (s.serializableCache && s.persistencePlugin) l = new at(s.serializableCache, false), await s.persistencePlugin.beforeCacheAccess(l);
    let d = this.readAccessTokenFromCache(n, a.managedIdentityId?.id || s.authOptions.clientId, new ce(e.scopes || []), o, e.correlationId);
    if (s.serializableCache && s.persistencePlugin && l) await s.persistencePlugin.afterCacheAccess(l);
    if (!d) return i?.setCacheOutcome(Q.NO_CACHED_ACCESS_TOKEN), [null, Q.NO_CACHED_ACCESS_TOKEN];
    if (or(d.expiresOn, s.systemOptions?.tokenRenewalOffsetSeconds || mn)) return i?.setCacheOutcome(Q.CACHED_ACCESS_TOKEN_EXPIRED), [null, Q.CACHED_ACCESS_TOKEN_EXPIRED];
    if (d.refreshOn && or(d.refreshOn.toString(), 0)) c = Q.PROACTIVELY_REFRESHED, i?.setCacheOutcome(Q.PROACTIVELY_REFRESHED);
    return [await le.generateAuthenticationResult(r, n, { account: null, idToken: null, accessToken: d, refreshToken: null, appMetadata: null }, true, e), c];
  }
  readAccessTokenFromCache(e, t, r, n, o) {
    let i = { homeAccountId: p.EMPTY_STRING, environment: e.canonicalAuthorityUrlComponents.HostNameAndPort, credentialType: Y.ACCESS_TOKEN, clientId: t, realm: e.tenant, target: ce.createSearchScopes(r.asArray()) }, s = n.getAccessTokensByFilter(i, o);
    if (s.length < 1) return null;
    else if (s.length > 1) throw g(An);
    return s[0];
  }
  async executeTokenRequest(e, t, r) {
    let n, o;
    if (this.appTokenProvider) {
      this.logger.info("Using appTokenProvider extensibility.");
      let a = { correlationId: e.correlationId, tenantId: this.config.authOptions.authority.tenant, scopes: e.scopes, claims: e.claims };
      o = Z();
      let c = await this.appTokenProvider(a);
      n = { access_token: c.accessToken, expires_in: c.expiresInSeconds, refresh_in: c.refreshInSeconds, token_type: F.BEARER };
    } else {
      let a = this.createTokenQueryParameters(e), c = M.appendQueryString(t.tokenEndpoint, a), l = await this.createTokenRequestBody(e), d = this.createTokenRequestHeaders(), u = { clientId: this.config.authOptions.clientId, authority: e.authority, scopes: e.scopes, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid };
      this.logger.info("Sending token request to endpoint: " + t.tokenEndpoint), o = Z();
      let m = await this.executePostToTokenEndpoint(c, l, d, u, e.correlationId);
      n = m.body, n.status = m.status;
    }
    let i = new le(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return i.validateTokenResponse(n, r), await i.handleServerTokenResponse(n, this.authority, o, e);
  }
  async createTokenRequestBody(e) {
    let t = /* @__PURE__ */ new Map();
    if (it(t, this.config.authOptions.clientId), ot(t, e.scopes, false), er(t, Le.CLIENT_CREDENTIALS_GRANT), Nt(t, this.config.libraryInfo), Pt(t, this.config.telemetry.application), rr(t), this.serverTelemetryManager) tr(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (Et(t, r), this.config.clientCredentials.clientSecret) Or(t, this.config.clientCredentials.clientSecret);
    let n = e.clientAssertion || this.config.clientCredentials.clientAssertion;
    if (n) Nr(t, await be(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Pr(t, n.assertionType);
    if (!se.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) st(t, e.claims, this.config.authOptions.clientCapabilities);
    return Te(t);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class ia extends Ie {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    if (this.scopeSet = new ce(e.scopes || []), this.userAssertionHash = await this.cryptoUtils.hashString(e.oboAssertion), e.skipCache || e.claims) return this.executeTokenRequest(e, this.authority, this.userAssertionHash);
    try {
      return await this.getCachedAuthenticationResult(e);
    } catch (t) {
      return await this.executeTokenRequest(e, this.authority, this.userAssertionHash);
    }
  }
  async getCachedAuthenticationResult(e) {
    let t = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, e);
    if (!t) throw this.serverTelemetryManager?.setCacheOutcome(Q.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), g(nt);
    else if (or(t.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.serverTelemetryManager?.setCacheOutcome(Q.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info(`OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`), g(nt);
    let r = this.readIdTokenFromCacheForOBO(t.homeAccountId, e.correlationId), n, o = null;
    if (r) {
      n = bt(r.secret, Fe.base64Decode);
      let i = n.oid || n.sub, s = { homeAccountId: r.homeAccountId, environment: r.environment, tenantId: r.realm, username: p.EMPTY_STRING, localAccountId: i || p.EMPTY_STRING };
      o = this.cacheManager.getAccount(this.cacheManager.generateAccountKey(s), e.correlationId);
    }
    if (this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
    return le.generateAuthenticationResult(this.cryptoUtils, this.authority, { account: o, accessToken: t, idToken: r, refreshToken: null, appMetadata: null }, true, e, n);
  }
  readIdTokenFromCacheForOBO(e, t) {
    let r = { homeAccountId: e, environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort, credentialType: Y.ID_TOKEN, clientId: this.config.authOptions.clientId, realm: this.authority.tenant }, n = this.cacheManager.getIdTokensByFilter(r, t);
    if (Object.values(n).length < 1) return null;
    return Object.values(n)[0];
  }
  readAccessTokenFromCacheForOBO(e, t) {
    let r = t.authenticationScheme || F.BEARER, o = { credentialType: r && r.toLowerCase() !== F.BEARER.toLowerCase() ? Y.ACCESS_TOKEN_WITH_AUTH_SCHEME : Y.ACCESS_TOKEN, clientId: e, target: ce.createSearchScopes(this.scopeSet.asArray()), tokenType: r, keyId: t.sshKid, requestedClaimsHash: t.requestedClaimsHash, userAssertionHash: this.userAssertionHash }, i = this.cacheManager.getAccessTokensByFilter(o, t.correlationId), s = i.length;
    if (s < 1) return null;
    else if (s > 1) throw g(An);
    return i[0];
  }
  async executeTokenRequest(e, t, r) {
    let n = this.createTokenQueryParameters(e), o = M.appendQueryString(t.tokenEndpoint, n), i = await this.createTokenRequestBody(e), s = this.createTokenRequestHeaders(), a = { clientId: this.config.authOptions.clientId, authority: e.authority, scopes: e.scopes, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid }, c = Z(), l = await this.executePostToTokenEndpoint(o, i, s, a, e.correlationId), d = new le(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return d.validateTokenResponse(l.body), await d.handleServerTokenResponse(l.body, this.authority, c, e, void 0, r);
  }
  async createTokenRequestBody(e) {
    let t = /* @__PURE__ */ new Map();
    if (it(t, this.config.authOptions.clientId), ot(t, e.scopes), er(t, Le.JWT_BEARER), xt(t), Nt(t, this.config.libraryInfo), Pt(t, this.config.telemetry.application), rr(t), this.serverTelemetryManager) tr(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (Et(t, r), pT(t, uT), mT(t, e.oboAssertion), this.config.clientCredentials.clientSecret) Or(t, this.config.clientCredentials.clientSecret);
    let n = this.config.clientCredentials.clientAssertion;
    if (n) Nr(t, await be(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Pr(t, n.assertionType);
    if (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) st(t, e.claims, this.config.authOptions.clientCapabilities);
    return Te(t);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class sa extends Wn {
  constructor(e) {
    super(e);
    let t = !!this.config.auth.clientSecret, r = !!this.config.auth.clientAssertion, n = (!!this.config.auth.clientCertificate?.thumbprint || !!this.config.auth.clientCertificate?.thumbprintSha256) && !!this.config.auth.clientCertificate?.privateKey;
    if (this.appTokenProvider) return;
    if (t && r || r && n || t && n) throw g(vn);
    if (this.config.auth.clientSecret) {
      this.clientSecret = this.config.auth.clientSecret;
      return;
    }
    if (this.config.auth.clientAssertion) {
      this.developerProvidedClientAssertion = this.config.auth.clientAssertion;
      return;
    }
    if (!n) throw g(vn);
    else this.clientAssertion = this.config.auth.clientCertificate.thumbprintSha256 ? Ct.fromCertificateWithSha256Thumbprint(this.config.auth.clientCertificate.thumbprintSha256, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c) : Ct.fromCertificate(this.config.auth.clientCertificate.thumbprint, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c);
    this.appTokenProvider = void 0;
  }
  SetAppTokenProvider(e) {
    this.appTokenProvider = e;
  }
  async acquireTokenByClientCredential(e) {
    this.logger.info("acquireTokenByClientCredential called", e.correlationId);
    let t;
    if (e.clientAssertion) t = { assertion: await be(e.clientAssertion, this.config.auth.clientId), assertionType: Oe.JWT_BEARER_ASSERTION_TYPE };
    let r = await this.initializeBaseRequest(e), n = { ...r, scopes: r.scopes.filter((u) => !Ae.includes(u)) }, o = { ...e, ...n, clientAssertion: t }, s = new M(o.authority).getUrlComponents().PathSegments[0];
    if (Object.values(Ue).includes(s)) throw g(ko);
    let a = process.env[Ef], c;
    if (o.azureRegion !== "DisableMsalForceRegion") if (!o.azureRegion && a) c = a;
    else c = o.azureRegion;
    let l = { azureRegion: c, environmentRegion: process.env[yf] }, d = this.initializeServerTelemetryManager(Ut.acquireTokenByClientCredential, o.correlationId, o.skipCache);
    try {
      let u = await this.createAuthority(o.authority, o.correlationId, l, e.azureCloudOptions), m = await this.buildOauthClientConfiguration(u, o.correlationId, "", d), h = new Qn(m, this.appTokenProvider);
      return this.logger.verbose("Client credential client created", o.correlationId), await h.acquireToken(o);
    } catch (u) {
      if (u instanceof x) u.setCorrelationId(o.correlationId);
      throw d.cacheFailedRequest(u), u;
    }
  }
  async acquireTokenOnBehalfOf(e) {
    this.logger.info("acquireTokenOnBehalfOf called", e.correlationId);
    let t = { ...e, ...await this.initializeBaseRequest(e) };
    try {
      let r = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), n = await this.buildOauthClientConfiguration(r, t.correlationId, "", void 0), o = new ia(n);
      return this.logger.verbose("On behalf of client created", t.correlationId), await o.acquireToken(t);
    } catch (r) {
      if (r instanceof x) r.setCorrelationId(t.correlationId);
      throw r;
    }
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
function Rg(e) {
  if (typeof e !== "string") return false;
  let t = new Date(e);
  return !isNaN(t.getTime()) && t.toISOString() === e;
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class El {
  constructor(e, t, r) {
    this.httpClientNoRetries = e, this.retryPolicy = t, this.logger = r;
  }
  async sendNetworkRequestAsyncHelper(e, t, r) {
    if (e === ee.GET) return this.httpClientNoRetries.sendGetRequestAsync(t, r);
    else return this.httpClientNoRetries.sendPostRequestAsync(t, r);
  }
  async sendNetworkRequestAsync(e, t, r) {
    let n = await this.sendNetworkRequestAsyncHelper(e, t, r);
    if ("isNewRequest" in this.retryPolicy) this.retryPolicy.isNewRequest = true;
    let o = 0;
    while (await this.retryPolicy.pauseForRetry(n.status, o, this.logger, n.headers[X.RETRY_AFTER])) n = await this.sendNetworkRequestAsyncHelper(e, t, r), o++;
    return n;
  }
  async sendGetRequestAsync(e, t) {
    return this.sendNetworkRequestAsync(ee.GET, e, t);
  }
  async sendPostRequestAsync(e, t) {
    return this.sendNetworkRequestAsync(ee.POST, e, t);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var zr = { MANAGED_IDENTITY_CLIENT_ID_2017: "clientid", MANAGED_IDENTITY_CLIENT_ID: "client_id", MANAGED_IDENTITY_OBJECT_ID: "object_id", MANAGED_IDENTITY_RESOURCE_ID_IMDS: "msi_res_id", MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS: "mi_res_id" };
class Be {
  constructor(e, t, r, n, o) {
    this.logger = e, this.nodeStorage = t, this.networkClient = r, this.cryptoProvider = n, this.disableInternalRetries = o;
  }
  async getServerTokenResponseAsync(e, t, r, n) {
    return this.getServerTokenResponse(e);
  }
  getServerTokenResponse(e) {
    let t, r;
    if (e.body.expires_on) {
      if (Rg(e.body.expires_on)) e.body.expires_on = new Date(e.body.expires_on).getTime() / 1e3;
      if (r = e.body.expires_on - Z(), r > 7200) t = r / 2;
    }
    return { status: e.status, access_token: e.body.access_token, expires_in: r, scope: e.body.resource, token_type: e.body.token_type, refresh_in: t, correlation_id: e.body.correlation_id || e.body.correlationId, error: typeof e.body.error === "string" ? e.body.error : e.body.error?.code, error_description: e.body.message || (typeof e.body.error === "string" ? e.body.error_description : e.body.error?.message), error_codes: e.body.error_codes, timestamp: e.body.timestamp, trace_id: e.body.trace_id };
  }
  async acquireTokenWithManagedIdentity(e, t, r, n) {
    let o = this.createRequest(e.resource, t);
    if (e.revokedTokenSha256Hash) this.logger.info(`[Managed Identity] The following claims are present in the request: ${e.claims}`), o.queryParameters[he.SHA256_TOKEN_TO_REFRESH] = e.revokedTokenSha256Hash;
    if (e.clientCapabilities?.length) {
      let m = e.clientCapabilities.toString();
      this.logger.info(`[Managed Identity] The following client capabilities are present in the request: ${m}`), o.queryParameters[he.XMS_CC] = m;
    }
    let i = o.headers;
    i[X.CONTENT_TYPE] = p.URL_FORM_CONTENT_TYPE;
    let s = { headers: i };
    if (Object.keys(o.bodyParameters).length) s.body = o.computeParametersBodyString();
    let a = this.disableInternalRetries ? this.networkClient : new El(this.networkClient, o.retryPolicy, this.logger), c = Z(), l;
    try {
      if (o.httpMethod === ee.POST) l = await a.sendPostRequestAsync(o.computeUri(), s);
      else l = await a.sendGetRequestAsync(o.computeUri(), s);
    } catch (m) {
      if (m instanceof x) throw m;
      else throw g(Vt);
    }
    let d = new le(t.id, this.nodeStorage, this.cryptoProvider, this.logger, null, null), u = await this.getServerTokenResponseAsync(l, a, o, s);
    return d.validateTokenResponse(u, n), d.handleServerTokenResponse(u, r, c, e);
  }
  getManagedIdentityUserAssignedIdQueryParameterKey(e, t, r) {
    switch (e) {
      case ae.USER_ASSIGNED_CLIENT_ID:
        return this.logger.info(`[Managed Identity] [API version ${r ? "2017+" : "2019+"}] Adding user assigned client id to the request.`), r ? zr.MANAGED_IDENTITY_CLIENT_ID_2017 : zr.MANAGED_IDENTITY_CLIENT_ID;
      case ae.USER_ASSIGNED_RESOURCE_ID:
        return this.logger.info("[Managed Identity] Adding user assigned resource id to the request."), t ? zr.MANAGED_IDENTITY_RESOURCE_ID_IMDS : zr.MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS;
      case ae.USER_ASSIGNED_OBJECT_ID:
        return this.logger.info("[Managed Identity] Adding user assigned object id to the request."), zr.MANAGED_IDENTITY_OBJECT_ID;
      default:
        throw ue(sr);
    }
  }
}
Be.getValidatedEnvVariableUrlString = (e, t, r, n) => {
  try {
    return new M(t).urlString;
  } catch (o) {
    throw n.info(`[Managed Identity] ${r} managed identity is unavailable because the '${e}' environment variable is malformed.`), ue($r[e]);
  }
};
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Tl {
  calculateDelay(e, t) {
    if (!e) return t;
    let r = Math.round(parseFloat(e) * 1e3);
    if (isNaN(r)) r = new Date(e).valueOf() - (/* @__PURE__ */ new Date()).valueOf();
    return Math.max(t, r);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var cR = 3, lR = 1e3, dR = [N.NOT_FOUND, N.REQUEST_TIMEOUT, N.TOO_MANY_REQUESTS, N.SERVER_ERROR, N.SERVICE_UNAVAILABLE, N.GATEWAY_TIMEOUT];
class aa {
  constructor() {
    this.linearRetryStrategy = new Tl();
  }
  static get DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS() {
    return lR;
  }
  async pauseForRetry(e, t, r, n) {
    if (dR.includes(e) && t < cR) {
      let o = this.linearRetryStrategy.calculateDelay(n, aa.DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS);
      return r.verbose(`Retrying request in ${o}ms (retry attempt: ${t + 1})`), await new Promise((i) => setTimeout(i, o)), true;
    }
    return false;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class je {
  constructor(e, t, r) {
    this.httpMethod = e, this._baseEndpoint = t, this.headers = {}, this.bodyParameters = {}, this.queryParameters = {}, this.retryPolicy = r || new aa();
  }
  computeUri() {
    let e = /* @__PURE__ */ new Map();
    if (this.queryParameters) Ge(e, this.queryParameters);
    let t = Te(e);
    return M.appendQueryString(this._baseEndpoint, t);
  }
  computeParametersBodyString() {
    let e = /* @__PURE__ */ new Map();
    if (this.bodyParameters) Ge(e, this.bodyParameters);
    return Te(e);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var uR = "2019-08-01";
class Gr extends Be {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.identityEndpoint = i, this.identityHeader = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[k.IDENTITY_ENDPOINT], t = process.env[k.IDENTITY_HEADER];
    return [e, t];
  }
  static tryCreate(e, t, r, n, o) {
    let [i, s] = Gr.getEnvironmentVariables();
    if (!i || !s) return e.info(`[Managed Identity] ${O.APP_SERVICE} managed identity is unavailable because one or both of the '${k.IDENTITY_HEADER}' and '${k.IDENTITY_ENDPOINT}' environment variables are not defined.`), null;
    let a = Gr.getValidatedEnvVariableUrlString(k.IDENTITY_ENDPOINT, i, O.APP_SERVICE, e);
    return e.info(`[Managed Identity] Environment variables validation passed for ${O.APP_SERVICE} managed identity. Endpoint URI: ${a}. Creating ${O.APP_SERVICE} managed identity.`), new Gr(e, t, r, n, o, i, s);
  }
  createRequest(e, t) {
    let r = new je(ee.GET, this.identityEndpoint);
    if (r.headers[$e.APP_SERVICE_SECRET_HEADER_NAME] = this.identityHeader, r.queryParameters[he.API_VERSION] = uR, r.queryParameters[he.RESOURCE] = e, t.idType !== ae.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)] = t.id;
    return r;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var gR = "2019-11-01", vg = "http://127.0.0.1:40342/metadata/identity/oauth2/token", kg = "N/A: himds executable exists", bg = { win32: `${process.env.ProgramData}\\AzureConnectedMachineAgent\\Tokens\\`, linux: "/var/opt/azcmagent/tokens/" }, yR = { win32: `${process.env.ProgramFiles}\\AzureConnectedMachineAgent\\himds.exe`, linux: "/opt/azcmagent/bin/himds" };
class lr extends Be {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.identityEndpoint = i;
  }
  static getEnvironmentVariables() {
    let e = process.env[k.IDENTITY_ENDPOINT], t = process.env[k.IMDS_ENDPOINT];
    if (!e || !t) {
      let r = yR.darwin;
      try {
        (0, import_fs.accessSync)(r, import_fs.constants.F_OK | import_fs.constants.R_OK), e = vg, t = kg;
      } catch (n) {
      }
    }
    return [e, t];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s, a] = lr.getEnvironmentVariables();
    if (!s || !a) return e.info(`[Managed Identity] ${O.AZURE_ARC} managed identity is unavailable through environment variables because one or both of '${k.IDENTITY_ENDPOINT}' and '${k.IMDS_ENDPOINT}' are not defined. ${O.AZURE_ARC} managed identity is also unavailable through file detection.`), null;
    if (a === kg) e.info(`[Managed Identity] ${O.AZURE_ARC} managed identity is available through file detection. Defaulting to known ${O.AZURE_ARC} endpoint: ${vg}. Creating ${O.AZURE_ARC} managed identity.`);
    else {
      let c = lr.getValidatedEnvVariableUrlString(k.IDENTITY_ENDPOINT, s, O.AZURE_ARC, e);
      c.endsWith("/") && c.slice(0, -1), lr.getValidatedEnvVariableUrlString(k.IMDS_ENDPOINT, a, O.AZURE_ARC, e), e.info(`[Managed Identity] Environment variables validation passed for ${O.AZURE_ARC} managed identity. Endpoint URI: ${c}. Creating ${O.AZURE_ARC} managed identity.`);
    }
    if (i.idType !== ae.SYSTEM_ASSIGNED) throw ue(_s);
    return new lr(e, t, r, n, o, s);
  }
  createRequest(e) {
    let t = new je(ee.GET, this.identityEndpoint.replace("localhost", "127.0.0.1"));
    return t.headers[$e.METADATA_HEADER_NAME] = "true", t.queryParameters[he.API_VERSION] = gR, t.queryParameters[he.RESOURCE] = e, t;
  }
  async getServerTokenResponseAsync(e, t, r, n) {
    let o;
    if (e.status === N.UNAUTHORIZED) {
      let i = e.headers["www-authenticate"];
      if (!i) throw ue(ws);
      if (!i.includes("Basic realm=")) throw ue(vs);
      let s = i.split("Basic realm=")[1];
      if (!bg.hasOwnProperty("darwin")) throw ue(Is);
      let a = bg.darwin, c = import_path.default.basename(s);
      if (!c.endsWith(".key")) throw ue(Ts);
      if (a + c !== s) throw ue(Cs);
      let l;
      try {
        l = await (0, import_fs.statSync)(s).size;
      } catch (m) {
        throw ue($o);
      }
      if (l > Af) throw ue(As);
      let d;
      try {
        d = (0, import_fs.readFileSync)(s, Ee.UTF8);
      } catch (m) {
        throw ue($o);
      }
      let u = `Basic ${d}`;
      this.logger.info("[Managed Identity] Adding authorization header to the request."), r.headers[$e.AUTHORIZATION_HEADER_NAME] = u;
      try {
        o = await t.sendGetRequestAsync(r.computeUri(), n);
      } catch (m) {
        if (m instanceof x) throw m;
        else throw g(Vt);
      }
    }
    return this.getServerTokenResponse(o || e);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class jr extends Be {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.msiEndpoint = i;
  }
  static getEnvironmentVariables() {
    return [process.env[k.MSI_ENDPOINT]];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s] = jr.getEnvironmentVariables();
    if (!s) return e.info(`[Managed Identity] ${O.CLOUD_SHELL} managed identity is unavailable because the '${k.MSI_ENDPOINT} environment variable is not defined.`), null;
    let a = jr.getValidatedEnvVariableUrlString(k.MSI_ENDPOINT, s, O.CLOUD_SHELL, e);
    if (e.info(`[Managed Identity] Environment variable validation passed for ${O.CLOUD_SHELL} managed identity. Endpoint URI: ${a}. Creating ${O.CLOUD_SHELL} managed identity.`), i.idType !== ae.SYSTEM_ASSIGNED) throw ue(Ss);
    return new jr(e, t, r, n, o, s);
  }
  createRequest(e) {
    let t = new je(ee.POST, this.msiEndpoint);
    return t.headers[$e.METADATA_HEADER_NAME] = "true", t.bodyParameters[he.RESOURCE] = e, t;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Cl {
  constructor(e, t, r) {
    this.minExponentialBackoff = e, this.maxExponentialBackoff = t, this.exponentialDeltaBackoff = r;
  }
  calculateDelay(e) {
    if (e === 0) return this.minExponentialBackoff;
    return Math.min(Math.pow(2, e - 1) * this.exponentialDeltaBackoff, this.maxExponentialBackoff);
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var ER = [N.NOT_FOUND, N.REQUEST_TIMEOUT, N.GONE, N.TOO_MANY_REQUESTS], TR = 3, CR = 7, AR = 1e3, IR = 4e3, _R = 2e3, SR = 1e4;
class Vr {
  constructor() {
    this.exponentialRetryStrategy = new Cl(Vr.MIN_EXPONENTIAL_BACKOFF_MS, Vr.MAX_EXPONENTIAL_BACKOFF_MS, Vr.EXPONENTIAL_DELTA_BACKOFF_MS);
  }
  static get MIN_EXPONENTIAL_BACKOFF_MS() {
    return AR;
  }
  static get MAX_EXPONENTIAL_BACKOFF_MS() {
    return IR;
  }
  static get EXPONENTIAL_DELTA_BACKOFF_MS() {
    return _R;
  }
  static get HTTP_STATUS_GONE_RETRY_AFTER_MS() {
    return SR;
  }
  set isNewRequest(e) {
    this._isNewRequest = e;
  }
  async pauseForRetry(e, t, r) {
    if (this._isNewRequest) this._isNewRequest = false, this.maxRetries = e === N.GONE ? CR : TR;
    if ((ER.includes(e) || e >= N.SERVER_ERROR_RANGE_START && e <= N.SERVER_ERROR_RANGE_END && t < this.maxRetries) && t < this.maxRetries) {
      let n = e === N.GONE ? Vr.HTTP_STATUS_GONE_RETRY_AFTER_MS : this.exponentialRetryStrategy.calculateDelay(t);
      return r.verbose(`Retrying request in ${n}ms (retry attempt: ${t + 1})`), await new Promise((o) => setTimeout(o, n)), true;
    }
    return false;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var Og = "/metadata/identity/oauth2/token", RR = `http://169.254.169.254${Og}`, wR = "2018-02-01";
class Xo extends Be {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.identityEndpoint = i;
  }
  static tryCreate(e, t, r, n, o) {
    let i;
    if (process.env[k.AZURE_POD_IDENTITY_AUTHORITY_HOST]) e.info(`[Managed Identity] Environment variable ${k.AZURE_POD_IDENTITY_AUTHORITY_HOST} for ${O.IMDS} returned endpoint: ${process.env[k.AZURE_POD_IDENTITY_AUTHORITY_HOST]}`), i = Xo.getValidatedEnvVariableUrlString(k.AZURE_POD_IDENTITY_AUTHORITY_HOST, `${process.env[k.AZURE_POD_IDENTITY_AUTHORITY_HOST]}${Og}`, O.IMDS, e);
    else e.info(`[Managed Identity] Unable to find ${k.AZURE_POD_IDENTITY_AUTHORITY_HOST} environment variable for ${O.IMDS}, using the default endpoint.`), i = RR;
    return new Xo(e, t, r, n, o, i);
  }
  createRequest(e, t) {
    let r = new je(ee.GET, this.identityEndpoint);
    if (r.headers[$e.METADATA_HEADER_NAME] = "true", r.queryParameters[he.API_VERSION] = wR, r.queryParameters[he.RESOURCE] = e, t.idType !== ae.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, true)] = t.id;
    return r.retryPolicy = new Vr(), r;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var vR = "2019-07-01-preview";
class Kr extends Be {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.identityEndpoint = i, this.identityHeader = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[k.IDENTITY_ENDPOINT], t = process.env[k.IDENTITY_HEADER], r = process.env[k.IDENTITY_SERVER_THUMBPRINT];
    return [e, t, r];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s, a, c] = Kr.getEnvironmentVariables();
    if (!s || !a || !c) return e.info(`[Managed Identity] ${O.SERVICE_FABRIC} managed identity is unavailable because one or all of the '${k.IDENTITY_HEADER}', '${k.IDENTITY_ENDPOINT}' or '${k.IDENTITY_SERVER_THUMBPRINT}' environment variables are not defined.`), null;
    let l = Kr.getValidatedEnvVariableUrlString(k.IDENTITY_ENDPOINT, s, O.SERVICE_FABRIC, e);
    if (e.info(`[Managed Identity] Environment variables validation passed for ${O.SERVICE_FABRIC} managed identity. Endpoint URI: ${l}. Creating ${O.SERVICE_FABRIC} managed identity.`), i.idType !== ae.SYSTEM_ASSIGNED) e.warning(`[Managed Identity] ${O.SERVICE_FABRIC} user assigned managed identity is configured in the cluster, not during runtime. See also: https://learn.microsoft.com/en-us/azure/service-fabric/configure-existing-cluster-enable-managed-identity-token-service.`);
    return new Kr(e, t, r, n, o, s, a);
  }
  createRequest(e, t) {
    let r = new je(ee.GET, this.identityEndpoint);
    if (r.headers[$e.ML_AND_SF_SECRET_HEADER_NAME] = this.identityHeader, r.queryParameters[he.API_VERSION] = vR, r.queryParameters[he.RESOURCE] = e, t.idType !== ae.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)] = t.id;
    return r;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var kR = "2017-09-01", bR = `Only client id is supported for user-assigned managed identity in ${O.MACHINE_LEARNING}.`;
class Yr extends Be {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.msiEndpoint = i, this.secret = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[k.MSI_ENDPOINT], t = process.env[k.MSI_SECRET];
    return [e, t];
  }
  static tryCreate(e, t, r, n, o) {
    let [i, s] = Yr.getEnvironmentVariables();
    if (!i || !s) return e.info(`[Managed Identity] ${O.MACHINE_LEARNING} managed identity is unavailable because one or both of the '${k.MSI_ENDPOINT}' and '${k.MSI_SECRET}' environment variables are not defined.`), null;
    let a = Yr.getValidatedEnvVariableUrlString(k.MSI_ENDPOINT, i, O.MACHINE_LEARNING, e);
    return e.info(`[Managed Identity] Environment variables validation passed for ${O.MACHINE_LEARNING} managed identity. Endpoint URI: ${a}. Creating ${O.MACHINE_LEARNING} managed identity.`), new Yr(e, t, r, n, o, i, s);
  }
  createRequest(e, t) {
    let r = new je(ee.GET, this.msiEndpoint);
    if (r.headers[$e.METADATA_HEADER_NAME] = "true", r.headers[$e.ML_AND_SF_SECRET_HEADER_NAME] = this.secret, r.queryParameters[he.API_VERSION] = kR, r.queryParameters[he.RESOURCE] = e, t.idType === ae.SYSTEM_ASSIGNED) r.queryParameters[zr.MANAGED_IDENTITY_CLIENT_ID_2017] = process.env[k.DEFAULT_IDENTITY_CLIENT_ID];
    else if (t.idType === ae.USER_ASSIGNED_CLIENT_ID) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, false, true)] = t.id;
    else throw Error(bR);
    return r;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
class Lt {
  constructor(e, t, r, n, o) {
    this.logger = e, this.nodeStorage = t, this.networkClient = r, this.cryptoProvider = n, this.disableInternalRetries = o;
  }
  async sendManagedIdentityTokenRequest(e, t, r, n) {
    if (!Lt.identitySource) Lt.identitySource = this.selectManagedIdentitySource(this.logger, this.nodeStorage, this.networkClient, this.cryptoProvider, this.disableInternalRetries, t);
    return Lt.identitySource.acquireTokenWithManagedIdentity(e, t, r, n);
  }
  allEnvironmentVariablesAreDefined(e) {
    return Object.values(e).every((t) => t !== void 0);
  }
  getManagedIdentitySource() {
    return Lt.sourceName = this.allEnvironmentVariablesAreDefined(Kr.getEnvironmentVariables()) ? O.SERVICE_FABRIC : this.allEnvironmentVariablesAreDefined(Gr.getEnvironmentVariables()) ? O.APP_SERVICE : this.allEnvironmentVariablesAreDefined(Yr.getEnvironmentVariables()) ? O.MACHINE_LEARNING : this.allEnvironmentVariablesAreDefined(jr.getEnvironmentVariables()) ? O.CLOUD_SHELL : this.allEnvironmentVariablesAreDefined(lr.getEnvironmentVariables()) ? O.AZURE_ARC : O.DEFAULT_TO_IMDS, Lt.sourceName;
  }
  selectManagedIdentitySource(e, t, r, n, o, i) {
    let s = Kr.tryCreate(e, t, r, n, o, i) || Gr.tryCreate(e, t, r, n, o) || Yr.tryCreate(e, t, r, n, o) || jr.tryCreate(e, t, r, n, o, i) || lr.tryCreate(e, t, r, n, o, i) || Xo.tryCreate(e, t, r, n, o);
    if (!s) throw ue(Rs);
    return s;
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
var OR = [O.SERVICE_FABRIC];
class Ht {
  constructor(e) {
    this.config = Of(e || {}), this.logger = new ze(this.config.system.loggerOptions, ta, At);
    let t = { canonicalAuthority: p.DEFAULT_AUTHORITY };
    if (!Ht.nodeStorage) Ht.nodeStorage = new Br(this.logger, this.config.managedIdentityId.id, Nn, t);
    this.networkClient = this.config.system.networkClient, this.cryptoProvider = new ar();
    let r = { protocolMode: ve.AAD, knownAuthorities: [Dc], cloudDiscoveryMetadata: "", authorityMetadata: "" };
    this.fakeAuthority = new pe(Dc, this.networkClient, Ht.nodeStorage, r, this.logger, this.cryptoProvider.createNewGuid(), void 0, true), this.fakeClientCredentialClient = new Qn({ authOptions: { clientId: this.config.managedIdentityId.id, authority: this.fakeAuthority } }), this.managedIdentityClient = new Lt(this.logger, Ht.nodeStorage, this.networkClient, this.cryptoProvider, this.config.disableInternalRetries), this.hashUtils = new Fr();
  }
  async acquireToken(e) {
    if (!e.resource) throw W(Rr);
    let t = { forceRefresh: e.forceRefresh, resource: e.resource.replace("/.default", ""), scopes: [e.resource.replace("/.default", "")], authority: this.fakeAuthority.canonicalAuthority, correlationId: this.cryptoProvider.createNewGuid(), claims: e.claims, clientCapabilities: this.config.clientCapabilities };
    if (t.forceRefresh) return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
    let [r, n] = await this.fakeClientCredentialClient.getCachedAuthenticationResult(t, this.config, this.cryptoProvider, this.fakeAuthority, Ht.nodeStorage);
    if (t.claims) {
      let o = this.managedIdentityClient.getManagedIdentitySource();
      if (r && OR.includes(o)) {
        let i = this.hashUtils.sha256(r.accessToken).toString(Ee.HEX);
        t.revokedTokenSha256Hash = i;
      }
      return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
    }
    if (r) {
      if (n === Q.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
        let o = true;
        await this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority, o);
      }
      return r;
    } else return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
  }
  async acquireTokenFromManagedIdentity(e, t, r, n) {
    return this.managedIdentityClient.sendManagedIdentityTokenRequest(e, t, r, n);
  }
  getManagedIdentitySource() {
    return Lt.sourceName || this.managedIdentityClient.getManagedIdentitySource();
  }
}
/*! @azure/msal-node v3.8.1 2025-10-29 */
/*! @azure/msal-node v3.8.1 2025-10-29 */
var Jo = G("IdentityUtils"), NR = "1.0";
function Xn(e, t, r) {
  let n = (o) => (Jo.getToken.info(o), new It({ scopes: Array.isArray(e) ? e : [e], getTokenOptions: r, message: o }));
  if (!t) throw n("No response");
  if (!t.expiresOn) throw n('Response had no "expiresOn" property.');
  if (!t.accessToken) throw n('Response had no "accessToken" property.');
}
function Il(e) {
  let t = e === null || e === void 0 ? void 0 : e.authorityHost;
  if (!t && lo) t = process.env.AZURE_AUTHORITY_HOST;
  return t !== null && t !== void 0 ? t : eo;
}
function _l(e, t) {
  if (!t) t = eo;
  if (new RegExp(`${e}/?$`).test(t)) return t;
  if (t.endsWith("/")) return t + e;
  else return `${t}/${e}`;
}
function Ng(e, t, r) {
  if (e === "adfs" && t || r) return [t];
  return [];
}
var ca = (e, t = Ti ? "Node" : "Browser") => (r, n, o) => {
  if (o) return;
  switch (r) {
    case j.Error:
      e.info(`MSAL ${t} V2 error: ${n}`);
      return;
    case j.Info:
      e.info(`MSAL ${t} V2 info message: ${n}`);
      return;
    case j.Verbose:
      e.info(`MSAL ${t} V2 verbose message: ${n}`);
      return;
    case j.Warning:
      e.info(`MSAL ${t} V2 warning: ${n}`);
      return;
  }
};
function la(e) {
  switch (e) {
    case "error":
      return j.Error;
    case "info":
      return j.Info;
    case "verbose":
      return j.Verbose;
    case "warning":
      return j.Warning;
    default:
      return j.Info;
  }
}
function Wr(e, t, r) {
  if (t.name === "AuthError" || t.name === "ClientAuthError" || t.name === "BrowserAuthError") {
    let n = t;
    switch (n.errorCode) {
      case "endpoints_resolution_error":
        return Jo.info(K(e, t.message)), new v(t.message);
      case "device_code_polling_cancelled":
        return new sn("The authentication has been aborted by the caller.");
      case "consent_required":
      case "interaction_required":
      case "login_required":
        Jo.info(K(e, `Authentication returned errorCode ${n.errorCode}`));
        break;
      default:
        Jo.info(K(e, `Failed to acquire token: ${t.message}`));
        break;
    }
  }
  if (t.name === "ClientConfigurationError" || t.name === "BrowserConfigurationAuthError" || t.name === "AbortError" || t.name === "AuthenticationError") return t;
  if (t.name === "NativeAuthError") return Jo.info(K(e, `Error from the native broker: ${t.message} with status code: ${t.statusCode}`)), t;
  return new It({ scopes: e, getTokenOptions: r, message: t.message });
}
function Pg(e) {
  return { localAccountId: e.homeAccountId, environment: e.authority, username: e.username, homeAccountId: e.homeAccountId, tenantId: e.tenantId };
}
function xg(e, t) {
  var r;
  return { authority: (r = t.environment) !== null && r !== void 0 ? r : ql, homeAccountId: t.homeAccountId, tenantId: t.tenantId || Bl, username: t.username, clientId: e, version: NR };
}
var PR = 64e3;
function Mg(e) {
  return ic([{ name: "imdsRetryPolicy", retry: ({ retryCount: t, response: r }) => {
    if ((r === null || r === void 0 ? void 0 : r.status) !== 404) return { skipStrategy: true };
    return Xd(t, { retryDelayInMs: e.startDelayInMs, maxRetryDelayInMs: PR });
  } }], { maxRetries: e.maxRetries });
}
var $t = "ManagedIdentityCredential - IMDS", Qr = G($t), xR = "http://169.254.169.254", MR = "/metadata/identity/oauth2/token";
function DR(e) {
  var t;
  if (!go(e)) throw Error(`${$t}: Multiple scopes are not supported.`);
  let n = new URL(MR, (t = process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) !== null && t !== void 0 ? t : xR), o = { Accept: "application/json" };
  return { url: `${n}`, method: "GET", headers: mr(o) };
}
var Dg = { name: "imdsMsi", async isAvailable(e) {
  let { scopes: t, identityClient: r, getTokenOptions: n } = e, o = go(t);
  if (!o) return Qr.info(`${$t}: Unavailable. Multiple scopes are not supported.`), false;
  if (process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) return true;
  if (!r) throw Error("Missing IdentityClient");
  let i = DR(o);
  return ne.withSpan("ManagedIdentityCredential-pingImdsEndpoint", n !== null && n !== void 0 ? n : {}, async (s) => {
    var a, c;
    i.tracingOptions = s.tracingOptions;
    let l = tt(i);
    l.timeout = ((a = s.requestOptions) === null || a === void 0 ? void 0 : a.timeout) || 1e3, l.allowInsecureConnection = true;
    let d;
    try {
      Qr.info(`${$t}: Pinging the Azure IMDS endpoint`), d = await r.sendRequest(l);
    } catch (u) {
      if (Ei(u)) Qr.verbose(`${$t}: Caught error ${u.name}: ${u.message}`);
      return Qr.info(`${$t}: The Azure IMDS endpoint is unavailable`), false;
    }
    if (d.status === 403) {
      if ((c = d.bodyAsText) === null || c === void 0 ? void 0 : c.includes("unreachable")) return Qr.info(`${$t}: The Azure IMDS endpoint is unavailable`), Qr.info(`${$t}: ${d.bodyAsText}`), false;
    }
    return Qr.info(`${$t}: The Azure IMDS endpoint is available`), true;
  });
} };
var Sl;
(function(e) {
  e.AutoDiscoverRegion = "AutoDiscoverRegion", e.USWest = "westus", e.USWest2 = "westus2", e.USCentral = "centralus", e.USEast = "eastus", e.USEast2 = "eastus2", e.USNorthCentral = "northcentralus", e.USSouthCentral = "southcentralus", e.USWestCentral = "westcentralus", e.CanadaCentral = "canadacentral", e.CanadaEast = "canadaeast", e.BrazilSouth = "brazilsouth", e.EuropeNorth = "northeurope", e.EuropeWest = "westeurope", e.UKSouth = "uksouth", e.UKWest = "ukwest", e.FranceCentral = "francecentral", e.FranceSouth = "francesouth", e.SwitzerlandNorth = "switzerlandnorth", e.SwitzerlandWest = "switzerlandwest", e.GermanyNorth = "germanynorth", e.GermanyWestCentral = "germanywestcentral", e.NorwayWest = "norwaywest", e.NorwayEast = "norwayeast", e.AsiaEast = "eastasia", e.AsiaSouthEast = "southeastasia", e.JapanEast = "japaneast", e.JapanWest = "japanwest", e.AustraliaEast = "australiaeast", e.AustraliaSouthEast = "australiasoutheast", e.AustraliaCentral = "australiacentral", e.AustraliaCentral2 = "australiacentral2", e.IndiaCentral = "centralindia", e.IndiaSouth = "southindia", e.IndiaWest = "westindia", e.KoreaSouth = "koreasouth", e.KoreaCentral = "koreacentral", e.UAECentral = "uaecentral", e.UAENorth = "uaenorth", e.SouthAfricaNorth = "southafricanorth", e.SouthAfricaWest = "southafricawest", e.ChinaNorth = "chinanorth", e.ChinaEast = "chinaeast", e.ChinaNorth2 = "chinanorth2", e.ChinaEast2 = "chinaeast2", e.GermanyCentral = "germanycentral", e.GermanyNorthEast = "germanynortheast", e.GovernmentUSVirginia = "usgovvirginia", e.GovernmentUSIowa = "usgoviowa", e.GovernmentUSArizona = "usgovarizona", e.GovernmentUSTexas = "usgovtexas", e.GovernmentUSDodEast = "usdodeast", e.GovernmentUSDodCentral = "usdodcentral";
})(Sl || (Sl = {}));
function da(e) {
  var t, r;
  let n = e;
  if (n === void 0 && ((r = (t = globalThis.process) === null || t === void 0 ? void 0 : t.env) === null || r === void 0 ? void 0 : r.AZURE_REGIONAL_AUTHORITY_NAME) !== void 0) n = process.env.AZURE_REGIONAL_AUTHORITY_NAME;
  if (n === Sl.AutoDiscoverRegion) return "AUTO_DISCOVER";
  return n;
}
var qe = G("MsalClient");
function UR(e, t, r = {}) {
  var n, o, i;
  let s = ad((n = r.logger) !== null && n !== void 0 ? n : qe, t, e), a = _l(s, Il(r)), c = new dn(Object.assign(Object.assign({}, r.tokenCredentialOptions), { authorityHost: a, loggingOptions: r.loggingOptions }));
  return { auth: { clientId: e, authority: a, knownAuthorities: Ng(s, a, r.disableInstanceDiscovery) }, system: { networkClient: c, loggerOptions: { loggerCallback: ca((o = r.logger) !== null && o !== void 0 ? o : qe), logLevel: la(si()), piiLoggingEnabled: (i = r.loggingOptions) === null || i === void 0 ? void 0 : i.enableUnsafeSupportLogging } } };
}
function dr(e, t, r = {}) {
  var n;
  let o = { msalConfig: UR(e, t, r), cachedAccount: r.authenticationRecord ? Pg(r.authenticationRecord) : null, pluginConfiguration: Yl.generatePluginConfiguration(r), logger: (n = r.logger) !== null && n !== void 0 ? n : qe }, i = /* @__PURE__ */ new Map();
  async function s(_ = {}) {
    let I = _.enableCae ? "CAE" : "default", T = i.get(I);
    if (T) return o.logger.getToken.info("Existing PublicClientApplication found in cache, returning it."), T;
    o.logger.getToken.info(`Creating new PublicClientApplication with CAE ${_.enableCae ? "enabled" : "disabled"}.`);
    let R = _.enableCae ? o.pluginConfiguration.cache.cachePluginCae : o.pluginConfiguration.cache.cachePlugin;
    return o.msalConfig.auth.clientCapabilities = _.enableCae ? ["cp1"] : void 0, T = new oa(Object.assign(Object.assign({}, o.msalConfig), { broker: { nativeBrokerPlugin: o.pluginConfiguration.broker.nativeBrokerPlugin }, cache: { cachePlugin: await R } })), i.set(I, T), T;
  }
  let a = /* @__PURE__ */ new Map();
  async function c(_ = {}) {
    let I = _.enableCae ? "CAE" : "default", T = a.get(I);
    if (T) return o.logger.getToken.info("Existing ConfidentialClientApplication found in cache, returning it."), T;
    o.logger.getToken.info(`Creating new ConfidentialClientApplication with CAE ${_.enableCae ? "enabled" : "disabled"}.`);
    let R = _.enableCae ? o.pluginConfiguration.cache.cachePluginCae : o.pluginConfiguration.cache.cachePlugin;
    return o.msalConfig.auth.clientCapabilities = _.enableCae ? ["cp1"] : void 0, T = new sa(Object.assign(Object.assign({}, o.msalConfig), { broker: { nativeBrokerPlugin: o.pluginConfiguration.broker.nativeBrokerPlugin }, cache: { cachePlugin: await R } })), a.set(I, T), T;
  }
  async function l(_, I, T = {}) {
    if (o.cachedAccount === null) throw o.logger.getToken.info("No cached account found in local state."), new It({ scopes: I });
    if (T.claims) o.cachedClaims = T.claims;
    let R = { account: o.cachedAccount, scopes: I, claims: o.cachedClaims };
    if (o.pluginConfiguration.broker.isEnabled) {
      if (R.tokenQueryParameters || (R.tokenQueryParameters = {}), o.pluginConfiguration.broker.enableMsaPassthrough) R.tokenQueryParameters.msal_request_type = "consumer_passthrough";
    }
    if (T.proofOfPossessionOptions) R.shrNonce = T.proofOfPossessionOptions.nonce, R.authenticationScheme = "pop", R.resourceRequestMethod = T.proofOfPossessionOptions.resourceRequestMethod, R.resourceRequestUri = T.proofOfPossessionOptions.resourceRequestUrl;
    o.logger.getToken.info("Attempting to acquire token silently");
    try {
      return await _.acquireTokenSilent(R);
    } catch (B) {
      throw Wr(I, B, T);
    }
  }
  function d(_) {
    if (_ === null || _ === void 0 ? void 0 : _.tenantId) return _l(_.tenantId, Il(r));
    return o.msalConfig.auth.authority;
  }
  async function u(_, I, T, R) {
    var B, w;
    let L = null;
    try {
      L = await l(_, I, T);
    } catch (de) {
      if (de.name !== "AuthenticationRequiredError") throw de;
      if (T.disableAutomaticAuthentication) throw new It({ scopes: I, getTokenOptions: T, message: "Automatic authentication has been disabled. You may call the authentication() method." });
    }
    if (L === null) try {
      L = await R();
    } catch (de) {
      throw Wr(I, de, T);
    }
    return Xn(I, L, T), o.cachedAccount = (B = L === null || L === void 0 ? void 0 : L.account) !== null && B !== void 0 ? B : null, o.logger.getToken.info(ge(I)), { token: L.accessToken, expiresOnTimestamp: L.expiresOn.getTime(), refreshAfterTimestamp: (w = L.refreshOn) === null || w === void 0 ? void 0 : w.getTime(), tokenType: L.tokenType };
  }
  async function m(_, I, T = {}) {
    var R;
    o.logger.getToken.info("Attempting to acquire token using client secret"), o.msalConfig.auth.clientSecret = I;
    let B = await c(T);
    try {
      let w = await B.acquireTokenByClientCredential({ scopes: _, authority: d(T), azureRegion: da(), claims: T === null || T === void 0 ? void 0 : T.claims });
      return Xn(_, w, T), o.logger.getToken.info(ge(_)), { token: w.accessToken, expiresOnTimestamp: w.expiresOn.getTime(), refreshAfterTimestamp: (R = w.refreshOn) === null || R === void 0 ? void 0 : R.getTime(), tokenType: w.tokenType };
    } catch (w) {
      throw Wr(_, w, T);
    }
  }
  async function h(_, I, T = {}) {
    var R;
    o.logger.getToken.info("Attempting to acquire token using client assertion"), o.msalConfig.auth.clientAssertion = I;
    let B = await c(T);
    try {
      let w = await B.acquireTokenByClientCredential({ scopes: _, authority: d(T), azureRegion: da(), claims: T === null || T === void 0 ? void 0 : T.claims, clientAssertion: I });
      return Xn(_, w, T), o.logger.getToken.info(ge(_)), { token: w.accessToken, expiresOnTimestamp: w.expiresOn.getTime(), refreshAfterTimestamp: (R = w.refreshOn) === null || R === void 0 ? void 0 : R.getTime(), tokenType: w.tokenType };
    } catch (w) {
      throw Wr(_, w, T);
    }
  }
  async function y(_, I, T = {}) {
    var R;
    o.logger.getToken.info("Attempting to acquire token using client certificate"), o.msalConfig.auth.clientCertificate = I;
    let B = await c(T);
    try {
      let w = await B.acquireTokenByClientCredential({ scopes: _, authority: d(T), azureRegion: da(), claims: T === null || T === void 0 ? void 0 : T.claims });
      return Xn(_, w, T), o.logger.getToken.info(ge(_)), { token: w.accessToken, expiresOnTimestamp: w.expiresOn.getTime(), refreshAfterTimestamp: (R = w.refreshOn) === null || R === void 0 ? void 0 : R.getTime(), tokenType: w.tokenType };
    } catch (w) {
      throw Wr(_, w, T);
    }
  }
  async function E(_, I, T = {}) {
    o.logger.getToken.info("Attempting to acquire token using device code");
    let R = await s(T);
    return u(R, _, T, () => {
      var B, w;
      let L = { scopes: _, cancel: (w = (B = T === null || T === void 0 ? void 0 : T.abortSignal) === null || B === void 0 ? void 0 : B.aborted) !== null && w !== void 0 ? w : false, deviceCodeCallback: I, authority: d(T), claims: T === null || T === void 0 ? void 0 : T.claims }, de = R.acquireTokenByDeviceCode(L);
      if (T.abortSignal) T.abortSignal.addEventListener("abort", () => {
        L.cancel = true;
      });
      return de;
    });
  }
  async function S(_, I, T, R = {}) {
    o.logger.getToken.info("Attempting to acquire token using username and password");
    let B = await s(R);
    return u(B, _, R, () => {
      let w = { scopes: _, username: I, password: T, authority: d(R), claims: R === null || R === void 0 ? void 0 : R.claims };
      return B.acquireTokenByUsernamePassword(w);
    });
  }
  function b() {
    if (!o.cachedAccount) return;
    return xg(e, o.cachedAccount);
  }
  async function H(_, I, T, R, B = {}) {
    o.logger.getToken.info("Attempting to acquire token using authorization code");
    let w;
    if (R) o.msalConfig.auth.clientSecret = R, w = await c(B);
    else w = await s(B);
    return u(w, _, B, () => w.acquireTokenByCode({ scopes: _, redirectUri: I, code: T, authority: d(B), claims: B === null || B === void 0 ? void 0 : B.claims }));
  }
  async function z(_, I, T, R = {}) {
    var B;
    if (qe.getToken.info("Attempting to acquire token on behalf of another user"), typeof T === "string") qe.getToken.info("Using client secret for on behalf of flow"), o.msalConfig.auth.clientSecret = T;
    else if (typeof T === "function") qe.getToken.info("Using client assertion callback for on behalf of flow"), o.msalConfig.auth.clientAssertion = T;
    else qe.getToken.info("Using client certificate for on behalf of flow"), o.msalConfig.auth.clientCertificate = T;
    let w = await c(R);
    try {
      let L = await w.acquireTokenOnBehalfOf({ scopes: _, authority: d(R), claims: R.claims, oboAssertion: I });
      return Xn(_, L, R), qe.getToken.info(ge(_)), { token: L.accessToken, expiresOnTimestamp: L.expiresOn.getTime(), refreshAfterTimestamp: (B = L.refreshOn) === null || B === void 0 ? void 0 : B.getTime(), tokenType: L.tokenType };
    } catch (L) {
      throw Wr(_, L, R);
    }
  }
  async function re(_, I = {}) {
    qe.getToken.info("Attempting to acquire token interactively");
    let T = await s(I);
    async function R(w) {
      var L;
      qe.verbose("Authentication will resume through the broker");
      let de = B();
      if (o.pluginConfiguration.broker.parentWindowHandle) de.windowHandle = Buffer.from(o.pluginConfiguration.broker.parentWindowHandle);
      else qe.warning("Parent window handle is not specified for the broker. This may cause unexpected behavior. Please provide the parentWindowHandle.");
      if (o.pluginConfiguration.broker.enableMsaPassthrough) ((L = de.tokenQueryParameters) !== null && L !== void 0 ? L : de.tokenQueryParameters = {}).msal_request_type = "consumer_passthrough";
      if (w) de.prompt = "none", qe.verbose("Attempting broker authentication using the default broker account");
      else qe.verbose("Attempting broker authentication without the default broker account");
      if (I.proofOfPossessionOptions) de.shrNonce = I.proofOfPossessionOptions.nonce, de.authenticationScheme = "pop", de.resourceRequestMethod = I.proofOfPossessionOptions.resourceRequestMethod, de.resourceRequestUri = I.proofOfPossessionOptions.resourceRequestUrl;
      try {
        return await T.acquireTokenInteractive(de);
      } catch (hr) {
        if (qe.verbose(`Failed to authenticate through the broker: ${hr.message}`), w) return R(false);
        else throw hr;
      }
    }
    function B() {
      var w, L;
      return { openBrowser: async (de) => {
        let hr = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-8wnd1hkr.js")));
        await hr.default(de, { wait: true, newInstance: true });
      }, scopes: _, authority: d(I), claims: I === null || I === void 0 ? void 0 : I.claims, loginHint: I === null || I === void 0 ? void 0 : I.loginHint, errorTemplate: (w = I === null || I === void 0 ? void 0 : I.browserCustomizationOptions) === null || w === void 0 ? void 0 : w.errorMessage, successTemplate: (L = I === null || I === void 0 ? void 0 : I.browserCustomizationOptions) === null || L === void 0 ? void 0 : L.successMessage, prompt: (I === null || I === void 0 ? void 0 : I.loginHint) ? "login" : "select_account" };
    }
    return u(T, _, I, async () => {
      var w;
      let L = B();
      if (o.pluginConfiguration.broker.isEnabled) return R((w = o.pluginConfiguration.broker.useDefaultBrokerAccount) !== null && w !== void 0 ? w : false);
      if (I.proofOfPossessionOptions) L.shrNonce = I.proofOfPossessionOptions.nonce, L.authenticationScheme = "pop", L.resourceRequestMethod = I.proofOfPossessionOptions.resourceRequestMethod, L.resourceRequestUri = I.proofOfPossessionOptions.resourceRequestUrl;
      return T.acquireTokenInteractive(L);
    });
  }
  return { getActiveAccount: b, getTokenByClientSecret: m, getTokenByClientAssertion: h, getTokenByClientCertificate: y, getTokenByDeviceCode: E, getTokenByUsernamePassword: S, getTokenByAuthorizationCode: H, getTokenOnBehalfOf: z, getTokenByInteractiveRequest: re };
}
var Ug = G("ClientAssertionCredential");
class Rl {
  constructor(e, t, r, n = {}) {
    if (!e) throw new v("ClientAssertionCredential: tenantId is a required parameter.");
    if (!t) throw new v("ClientAssertionCredential: clientId is a required parameter.");
    if (!r) throw new v("ClientAssertionCredential: clientAssertion is a required parameter.");
    this.tenantId = e, this.additionallyAllowedTenantIds = Me(n === null || n === void 0 ? void 0 : n.additionallyAllowedTenants), this.options = n, this.getAssertion = r, this.msalClient = dr(t, e, Object.assign(Object.assign({}, n), { logger: Ug, tokenCredentialOptions: this.options }));
  }
  async getToken(e, t = {}) {
    return ne.withSpan(`${this.constructor.name}.getToken`, t, async (r) => {
      r.tenantId = Re(this.tenantId, r, this.additionallyAllowedTenantIds, Ug);
      let n = Array.isArray(e) ? e : [e];
      return this.msalClient.getTokenByClientAssertion(n, this.getAssertion, r);
    });
  }
}
var Xr = "WorkloadIdentityCredential", HR = ["AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_FEDERATED_TOKEN_FILE"], Zo = G(Xr);
class Jr {
  constructor(e) {
    this.azureFederatedTokenFileContent = void 0, this.cacheDate = void 0;
    let t = ai(HR).assigned.join(", ");
    Zo.info(`Found the following environment variables: ${t}`);
    let r = e !== null && e !== void 0 ? e : {}, n = r.tenantId || process.env.AZURE_TENANT_ID, o = r.clientId || process.env.AZURE_CLIENT_ID;
    if (this.federatedTokenFilePath = r.tokenFilePath || process.env.AZURE_FEDERATED_TOKEN_FILE, n) xe(Zo, n);
    if (!o) throw new v(`${Xr}: is unavailable. clientId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_CLIENT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    if (!n) throw new v(`${Xr}: is unavailable. tenantId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_TENANT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    if (!this.federatedTokenFilePath) throw new v(`${Xr}: is unavailable. federatedTokenFilePath is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_FEDERATED_TOKEN_FILE".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    Zo.info(`Invoking ClientAssertionCredential with tenant ID: ${n}, clientId: ${r.clientId} and federated token path: [REDACTED]`), this.client = new Rl(n, o, this.readFileContents.bind(this), e);
  }
  async getToken(e, t) {
    if (!this.client) {
      let r = `${Xr}: is unavailable. tenantId, clientId, and federatedTokenFilePath are required parameters. 
      In DefaultAzureCredential and ManagedIdentityCredential, these can be provided as environment variables - 
      "AZURE_TENANT_ID",
      "AZURE_CLIENT_ID",
      "AZURE_FEDERATED_TOKEN_FILE". See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`;
      throw Zo.info(r), new v(r);
    }
    return Zo.info("Invoking getToken() of Client Assertion Credential"), this.client.getToken(e, t);
  }
  async readFileContents() {
    if (this.cacheDate !== void 0 && Date.now() - this.cacheDate >= 3e5) this.azureFederatedTokenFileContent = void 0;
    if (!this.federatedTokenFilePath) throw new v(`${Xr}: is unavailable. Invalid file path provided ${this.federatedTokenFilePath}.`);
    if (!this.azureFederatedTokenFileContent) {
      let t = (await (0, import_promises.readFile)(this.federatedTokenFilePath, "utf8")).trim();
      if (!t) throw new v(`${Xr}: is unavailable. No content on the file ${this.federatedTokenFilePath}.`);
      else this.azureFederatedTokenFileContent = t, this.cacheDate = Date.now();
    }
    return this.azureFederatedTokenFileContent;
  }
}
var Lg = "ManagedIdentityCredential - Token Exchange", $R = G(Lg), wl = { name: "tokenExchangeMsi", async isAvailable(e) {
  let t = process.env, r = Boolean((e || t.AZURE_CLIENT_ID) && t.AZURE_TENANT_ID && process.env.AZURE_FEDERATED_TOKEN_FILE);
  if (!r) $R.info(`${Lg}: Unavailable. The environment variables needed are: AZURE_CLIENT_ID (or the client ID sent through the parameters), AZURE_TENANT_ID and AZURE_FEDERATED_TOKEN_FILE`);
  return r;
}, async getToken(e, t = {}) {
  let { scopes: r, clientId: n } = e, o = {};
  return new Jr(Object.assign(Object.assign({ clientId: n, tenantId: process.env.AZURE_TENANT_ID, tokenFilePath: process.env.AZURE_FEDERATED_TOKEN_FILE }, o), { disableInstanceDiscovery: true })).getToken(r, t);
} };
var Ve = G("ManagedIdentityCredential");
class Jn {
  constructor(e, t) {
    var r, n;
    this.msiRetryConfig = { maxRetries: 5, startDelayInMs: 800, intervalIncrement: 2 };
    let o;
    if (typeof e === "string") this.clientId = e, o = t !== null && t !== void 0 ? t : {};
    else this.clientId = e === null || e === void 0 ? void 0 : e.clientId, o = e !== null && e !== void 0 ? e : {};
    this.resourceId = o === null || o === void 0 ? void 0 : o.resourceId, this.objectId = o === null || o === void 0 ? void 0 : o.objectId;
    let i = [{ key: "clientId", value: this.clientId }, { key: "resourceId", value: this.resourceId }, { key: "objectId", value: this.objectId }].filter((a) => a.value);
    if (i.length > 1) throw Error(`ManagedIdentityCredential: only one of 'clientId', 'resourceId', or 'objectId' can be provided. Received values: ${JSON.stringify({ clientId: this.clientId, resourceId: this.resourceId, objectId: this.objectId })}`);
    if (o.allowInsecureConnection = true, ((r = o.retryOptions) === null || r === void 0 ? void 0 : r.maxRetries) !== void 0) this.msiRetryConfig.maxRetries = o.retryOptions.maxRetries;
    this.identityClient = new dn(Object.assign(Object.assign({}, o), { additionalPolicies: [{ policy: Mg(this.msiRetryConfig), position: "perCall" }] })), this.managedIdentityApp = new Ht({ managedIdentityIdParams: { userAssignedClientId: this.clientId, userAssignedResourceId: this.resourceId, userAssignedObjectId: this.objectId }, system: { disableInternalRetries: true, networkClient: this.identityClient, loggerOptions: { logLevel: la(si()), piiLoggingEnabled: (n = o.loggingOptions) === null || n === void 0 ? void 0 : n.enableUnsafeSupportLogging, loggerCallback: ca(Ve) } } }), this.isAvailableIdentityClient = new dn(Object.assign(Object.assign({}, o), { retryOptions: { maxRetries: 0 } }));
    let s = this.managedIdentityApp.getManagedIdentitySource();
    if (s === "CloudShell") {
      if (this.clientId || this.resourceId || this.objectId) throw Ve.warning(`CloudShell MSI detected with user-provided IDs - throwing. Received values: ${JSON.stringify({ clientId: this.clientId, resourceId: this.resourceId, objectId: this.objectId })}.`), new v("ManagedIdentityCredential: Specifying a user-assigned managed identity is not supported for CloudShell at runtime. When using Managed Identity in CloudShell, omit the clientId, resourceId, and objectId parameters.");
    }
    if (s === "ServiceFabric") {
      if (this.clientId || this.resourceId || this.objectId) throw Ve.warning(`Service Fabric detected with user-provided IDs - throwing. Received values: ${JSON.stringify({ clientId: this.clientId, resourceId: this.resourceId, objectId: this.objectId })}.`), new v(`ManagedIdentityCredential: ${Du}`);
    }
    if (Ve.info(`Using ${s} managed identity.`), i.length === 1) {
      let { key: a, value: c } = i[0];
      Ve.info(`${s} with ${a}: ${c}`);
    }
  }
  async getToken(e, t = {}) {
    Ve.getToken.info("Using the MSAL provider for Managed Identity.");
    let r = go(e);
    if (!r) throw new v(`ManagedIdentityCredential: Multiple scopes are not supported. Scopes: ${JSON.stringify(e)}`);
    return ne.withSpan("ManagedIdentityCredential.getToken", t, async () => {
      var n;
      try {
        let o = await wl.isAvailable(this.clientId), i = this.managedIdentityApp.getManagedIdentitySource(), s = i === "DefaultToImds" || i === "Imds";
        if (Ve.getToken.info(`MSAL Identity source: ${i}`), o) {
          Ve.getToken.info("Using the token exchange managed identity.");
          let c = await wl.getToken({ scopes: e, clientId: this.clientId, identityClient: this.identityClient, retryConfig: this.msiRetryConfig, resourceId: this.resourceId });
          if (c === null) throw new v("Attempted to use the token exchange managed identity, but received a null response.");
          return c;
        } else if (s) {
          if (Ve.getToken.info("Using the IMDS endpoint to probe for availability."), !await Dg.isAvailable({ scopes: e, clientId: this.clientId, getTokenOptions: t, identityClient: this.isAvailableIdentityClient, resourceId: this.resourceId })) throw new v("Attempted to use the IMDS endpoint, but it is not available.");
        }
        Ve.getToken.info("Calling into MSAL for managed identity token.");
        let a = await this.managedIdentityApp.acquireToken({ resource: r });
        return this.ensureValidMsalToken(e, a, t), Ve.getToken.info(ge(e)), { expiresOnTimestamp: a.expiresOn.getTime(), token: a.accessToken, refreshAfterTimestamp: (n = a.refreshOn) === null || n === void 0 ? void 0 : n.getTime(), tokenType: "Bearer" };
      } catch (o) {
        if (Ve.getToken.error(K(e, o)), o.name === "AuthenticationRequiredError") throw o;
        if (FR(o)) throw new v(`ManagedIdentityCredential: Network unreachable. Message: ${o.message}`, { cause: o });
        throw new v(`ManagedIdentityCredential: Authentication failed. Message ${o.message}`, { cause: o });
      }
    });
  }
  ensureValidMsalToken(e, t, r) {
    let n = (o) => (Ve.getToken.info(o), new It({ scopes: Array.isArray(e) ? e : [e], getTokenOptions: r, message: o }));
    if (!t) throw n("No response.");
    if (!t.expiresOn) throw n('Response had no "expiresOn" property.');
    if (!t.accessToken) throw n('Response had no "accessToken" property.');
  }
}
function FR(e) {
  if (e.errorCode === "network_error") return true;
  if (e.code === "ENETUNREACH" || e.code === "EHOSTUNREACH") return true;
  if (e.statusCode === 403 || e.code === 403) {
    if (e.message.includes("unreachable")) return true;
  }
  return false;
}
function ua(e) {
  return Array.isArray(e) ? e : [e];
}
function Zn(e, t) {
  if (!e.match(/^[0-9a-zA-Z-_.:/]+$/)) {
    let r = Error("Invalid scope was specified by the user or calling client");
    throw t.getToken.info(K(e, r)), r;
  }
}
function ha(e) {
  return e.replace(/\/.default$/, "");
}
function vl(e, t) {
  if (!t.match(/^[0-9a-zA-Z-._ ]+$/)) {
    let r = Error("Invalid subscription provided. You can locate your subscription by following the instructions listed here: https://learn.microsoft.com/azure/azure-portal/get-subscription-tenant-id.");
    throw e.info(K("", r)), r;
  }
}
var lt = G("AzureCliCredential"), Hg = { getSafeWorkingDir() {
  return "/bin";
}, async getAzureCliAccessToken(e, t, r, n) {
  let o = [], i = [];
  if (t) o = ["--tenant", t];
  if (r) i = ["--subscription", `"${r}"`];
  return new Promise((s, a) => {
    try {
      import_child_process.default.execFile("az", ["account", "get-access-token", "--output", "json", "--resource", e, ...o, ...i], { cwd: Hg.getSafeWorkingDir(), shell: true, timeout: n }, (c, l, d) => {
        s({ stdout: l, stderr: d, error: c });
      });
    } catch (c) {
      a(c);
    }
  });
} };
class kl {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) xe(lt, e === null || e === void 0 ? void 0 : e.tenantId), this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    if (e === null || e === void 0 ? void 0 : e.subscription) vl(lt, e === null || e === void 0 ? void 0 : e.subscription), this.subscription = e === null || e === void 0 ? void 0 : e.subscription;
    this.additionallyAllowedTenantIds = Me(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getToken(e, t = {}) {
    let r = Re(this.tenantId, t, this.additionallyAllowedTenantIds);
    if (r) xe(lt, r);
    if (this.subscription) vl(lt, this.subscription);
    let n = typeof e === "string" ? e : e[0];
    return lt.getToken.info(`Using the scope ${n}`), ne.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      var o, i, s, a;
      try {
        Zn(n, lt);
        let c = ha(n), l = await Hg.getAzureCliAccessToken(c, r, this.subscription, this.timeout), d = (o = l.stderr) === null || o === void 0 ? void 0 : o.match("(.*)az login --scope(.*)"), u = ((i = l.stderr) === null || i === void 0 ? void 0 : i.match("(.*)az login(.*)")) && !d;
        if (((s = l.stderr) === null || s === void 0 ? void 0 : s.match("az:(.*)not found")) || ((a = l.stderr) === null || a === void 0 ? void 0 : a.startsWith("'az' is not recognized"))) {
          let h = new v("Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.");
          throw lt.getToken.info(K(e, h)), h;
        }
        if (u) {
          let h = new v("Please run 'az login' from a command prompt to authenticate before using this credential.");
          throw lt.getToken.info(K(e, h)), h;
        }
        try {
          let h = l.stdout, y = this.parseRawResponse(h);
          return lt.getToken.info(ge(e)), y;
        } catch (h) {
          if (l.stderr) throw new v(l.stderr);
          throw h;
        }
      } catch (c) {
        let l = c.name === "CredentialUnavailableError" ? c : new v(c.message || "Unknown error while trying to retrieve the access token");
        throw lt.getToken.info(K(e, l)), l;
      }
    });
  }
  parseRawResponse(e) {
    let t = JSON.parse(e), r = t.accessToken, n = Number.parseInt(t.expires_on, 10) * 1e3;
    if (!isNaN(n)) return lt.getToken.info("expires_on is available and is valid, using it"), { token: r, expiresOnTimestamp: n, tokenType: "Bearer" };
    if (n = new Date(t.expiresOn).getTime(), isNaN(n)) throw new v(`Unexpected response from Azure CLI when getting token. Expected "expiresOn" to be a RFC3339 date string. Got: "${t.expiresOn}"`);
    return { token: r, expiresOnTimestamp: n, tokenType: "Bearer" };
  }
}
var ur = G("AzureDeveloperCliCredential"), $g = { getSafeWorkingDir() {
  return "/bin";
}, async getAzdAccessToken(e, t, r) {
  let n = [];
  if (t) n = ["--tenant-id", t];
  return new Promise((o, i) => {
    try {
      import_child_process2.default.execFile("azd", ["auth", "token", "--output", "json", ...e.reduce((s, a) => s.concat("--scope", a), []), ...n], { cwd: $g.getSafeWorkingDir(), timeout: r }, (s, a, c) => {
        o({ stdout: a, stderr: c, error: s });
      });
    } catch (s) {
      i(s);
    }
  });
} };
class bl {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) xe(ur, e === null || e === void 0 ? void 0 : e.tenantId), this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    this.additionallyAllowedTenantIds = Me(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getToken(e, t = {}) {
    let r = Re(this.tenantId, t, this.additionallyAllowedTenantIds);
    if (r) xe(ur, r);
    let n;
    if (typeof e === "string") n = [e];
    else n = e;
    return ur.getToken.info(`Using the scopes ${e}`), ne.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      var o, i, s, a;
      try {
        n.forEach((u) => {
          Zn(u, ur);
        });
        let c = await $g.getAzdAccessToken(n, r, this.timeout), l = ((o = c.stderr) === null || o === void 0 ? void 0 : o.match("not logged in, run `azd login` to login")) || ((i = c.stderr) === null || i === void 0 ? void 0 : i.match("not logged in, run `azd auth login` to login"));
        if (((s = c.stderr) === null || s === void 0 ? void 0 : s.match("azd:(.*)not found")) || ((a = c.stderr) === null || a === void 0 ? void 0 : a.startsWith("'azd' is not recognized")) || c.error && c.error.code === "ENOENT") {
          let u = new v("Azure Developer CLI couldn't be found. To mitigate this issue, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
          throw ur.getToken.info(K(e, u)), u;
        }
        if (l) {
          let u = new v("Please run 'azd auth login' from a command prompt to authenticate before using this credential. For more information, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
          throw ur.getToken.info(K(e, u)), u;
        }
        try {
          let u = JSON.parse(c.stdout);
          return ur.getToken.info(ge(e)), { token: u.token, expiresOnTimestamp: new Date(u.expiresOn).getTime(), tokenType: "Bearer" };
        } catch (u) {
          if (c.stderr) throw new v(c.stderr);
          throw u;
        }
      } catch (c) {
        let l = c.name === "CredentialUnavailableError" ? c : new v(c.message || "Unknown error while trying to retrieve the access token");
        throw ur.getToken.info(K(e, l)), l;
      }
    });
  }
}
var Bg = { execFile(e, t, r) {
  return new Promise((n, o) => {
    Fg.execFile(e, t, r, (i, s, a) => {
      if (Buffer.isBuffer(s)) s = s.toString("utf8");
      if (Buffer.isBuffer(a)) a = a.toString("utf8");
      if (a || i) o(a ? Error(a) : i);
      else n(s);
    });
  });
} };
var Ft = G("AzurePowerShellCredential"), zg = false;
function Gg(e) {
  if (zg) return `${e}.exe`;
  else return e;
}
async function qg(e, t) {
  let r = [];
  for (let n of e) {
    let [o, ...i] = n, s = await Bg.execFile(o, i, { encoding: "utf8", timeout: t });
    r.push(s);
  }
  return r;
}
var jg = { login: "Run Connect-AzAccount to login", installed: "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory" }, Ol = { login: "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.", installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`, troubleshoot: "To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot." }, zR = (e) => e.message.match(`(.*)${jg.login}(.*)`), GR = (e) => e.message.match(jg.installed), Nl = [Gg("pwsh")];
if (zg) Nl.push(Gg("powershell"));
class Pl {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) xe(Ft, e === null || e === void 0 ? void 0 : e.tenantId), this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    this.additionallyAllowedTenantIds = Me(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getAzurePowerShellAccessToken(e, t, r) {
    for (let n of [...Nl]) {
      try {
        await qg([[n, "/?"]], r);
      } catch (s) {
        Nl.shift();
        continue;
      }
      let i = (await qg([[n, "-NoProfile", "-NonInteractive", "-Command", `
          $tenantId = "${t !== null && t !== void 0 ? t : ""}"
          $m = Import-Module Az.Accounts -MinimumVersion 2.2.0 -PassThru
          $useSecureString = $m.Version -ge [version]'2.17.0'

          $params = @{
            ResourceUrl = "${e}"
          }

          if ($tenantId.Length -gt 0) {
            $params["TenantId"] = $tenantId
          }

          if ($useSecureString) {
            $params["AsSecureString"] = $true
          }

          $token = Get-AzAccessToken @params

          $result = New-Object -TypeName PSObject
          $result | Add-Member -MemberType NoteProperty -Name ExpiresOn -Value $token.ExpiresOn
          if ($useSecureString) {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value (ConvertFrom-SecureString -AsPlainText $token.Token)
          } else {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value $token.Token
          }

          Write-Output (ConvertTo-Json $result)
          `]]))[0];
      return jR(i);
    }
    throw Error("Unable to execute PowerShell. Ensure that it is installed in your system");
  }
  async getToken(e, t = {}) {
    return ne.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      let r = Re(this.tenantId, t, this.additionallyAllowedTenantIds), n = typeof e === "string" ? e : e[0];
      if (r) xe(Ft, r);
      try {
        Zn(n, Ft), Ft.getToken.info(`Using the scope ${n}`);
        let o = ha(n), i = await this.getAzurePowerShellAccessToken(o, r, this.timeout);
        return Ft.getToken.info(ge(e)), { token: i.Token, expiresOnTimestamp: new Date(i.ExpiresOn).getTime(), tokenType: "Bearer" };
      } catch (o) {
        if (GR(o)) {
          let s = new v(Ol.installed);
          throw Ft.getToken.info(K(n, s)), s;
        } else if (zR(o)) {
          let s = new v(Ol.login);
          throw Ft.getToken.info(K(n, s)), s;
        }
        let i = new v(`${o}. ${Ol.troubleshoot}`);
        throw Ft.getToken.info(K(n, i)), i;
      }
    });
  }
}
async function jR(e) {
  let t = /{[^{}]*}/g, r = e.match(t), n = e;
  if (r) try {
    for (let o of r) try {
      let i = JSON.parse(o);
      if (i === null || i === void 0 ? void 0 : i.Token) {
        if (n = n.replace(o, ""), n) Ft.getToken.warning(n);
        return i;
      }
    } catch (i) {
      continue;
    }
  } catch (o) {
    throw Error(`Unable to parse the output of PowerShell. Received output: ${e}`);
  }
  throw Error(`No access token found in the output. Received output: ${e}`);
}
var xl = G("ChainedTokenCredential");
class Ml {
  constructor(...e) {
    this._sources = [], this._sources = e;
  }
  async getToken(e, t = {}) {
    let { token: r } = await this.getTokenInternal(e, t);
    return r;
  }
  async getTokenInternal(e, t = {}) {
    let r = null, n, o = [];
    return ne.withSpan("ChainedTokenCredential.getToken", t, async (i) => {
      for (let s = 0; s < this._sources.length && r === null; s++) try {
        r = await this._sources[s].getToken(e, i), n = this._sources[s];
      } catch (a) {
        if (a.name === "CredentialUnavailableError" || a.name === "AuthenticationRequiredError") o.push(a);
        else throw xl.getToken.info(K(e, a)), a;
      }
      if (!r && o.length > 0) {
        let s = new Ra(o, "ChainedTokenCredential authentication failed.");
        throw xl.getToken.info(K(e, s)), s;
      }
      if (xl.getToken.info(`Result for ${n.constructor.name}: ${ge(e)}`), r === null) throw new v("Failed to retrieve a valid token");
      return { token: r, successfulCredential: n };
    });
  }
}
var ei = "ClientCertificateCredential", Kg = G(ei);
class Dl {
  constructor(e, t, r, n = {}) {
    if (!e || !t) throw Error(`${ei}: tenantId and clientId are required parameters.`);
    this.tenantId = e, this.additionallyAllowedTenantIds = Me(n === null || n === void 0 ? void 0 : n.additionallyAllowedTenants), this.sendCertificateChain = n.sendCertificateChain, this.certificateConfiguration = Object.assign({}, typeof r === "string" ? { certificatePath: r } : r);
    let o = this.certificateConfiguration.certificate, i = this.certificateConfiguration.certificatePath;
    if (!this.certificateConfiguration || !(o || i)) throw Error(`${ei}: Provide either a PEM certificate in string form, or the path to that certificate in the filesystem. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    if (o && i) throw Error(`${ei}: To avoid unexpected behaviors, providing both the contents of a PEM certificate and the path to a PEM certificate is forbidden. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    this.msalClient = dr(t, e, Object.assign(Object.assign({}, n), { logger: Kg, tokenCredentialOptions: n }));
  }
  async getToken(e, t = {}) {
    return ne.withSpan(`${ei}.getToken`, t, async (r) => {
      r.tenantId = Re(this.tenantId, r, this.additionallyAllowedTenantIds, Kg);
      let n = Array.isArray(e) ? e : [e], o = await this.buildClientCertificate();
      return this.msalClient.getTokenByClientCertificate(n, o, r);
    });
  }
  async buildClientCertificate() {
    var e;
    let t = await YR(this.certificateConfiguration, (e = this.sendCertificateChain) !== null && e !== void 0 ? e : false), r;
    if (this.certificateConfiguration.certificatePassword !== void 0) r = (0, import_crypto6.createPrivateKey)({ key: t.certificateContents, passphrase: this.certificateConfiguration.certificatePassword, format: "pem" }).export({ format: "pem", type: "pkcs8" }).toString();
    else r = t.certificateContents;
    return { thumbprint: t.thumbprint, thumbprintSha256: t.thumbprintSha256, privateKey: r, x5c: t.x5c };
  }
}
async function YR(e, t) {
  let { certificate: r, certificatePath: n } = e, o = r || await (0, import_promises2.readFile)(n, "utf8"), i = t ? o : void 0, s = /(-+BEGIN CERTIFICATE-+)(\n\r?|\r\n?)([A-Za-z0-9+/\n\r]+=*)(\n\r?|\r\n?)(-+END CERTIFICATE-+)/g, a = [], c;
  do
    if (c = s.exec(o), c) a.push(c[3]);
  while (c);
  if (a.length === 0) throw Error("The file at the specified path does not contain a PEM-encoded certificate.");
  let l = (0, import_crypto6.createHash)("sha1").update(Buffer.from(a[0], "base64")).digest("hex").toUpperCase(), d = (0, import_crypto6.createHash)("sha256").update(Buffer.from(a[0], "base64")).digest("hex").toUpperCase();
  return { certificateContents: o, thumbprintSha256: d, thumbprint: l, x5c: i };
}
var Yg = G("ClientSecretCredential");
class Ul {
  constructor(e, t, r, n = {}) {
    if (!e) throw new v("ClientSecretCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    if (!t) throw new v("ClientSecretCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    if (!r) throw new v("ClientSecretCredential: clientSecret is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    this.clientSecret = r, this.tenantId = e, this.additionallyAllowedTenantIds = Me(n === null || n === void 0 ? void 0 : n.additionallyAllowedTenants), this.msalClient = dr(t, e, Object.assign(Object.assign({}, n), { logger: Yg, tokenCredentialOptions: n }));
  }
  async getToken(e, t = {}) {
    return ne.withSpan(`${this.constructor.name}.getToken`, t, async (r) => {
      r.tenantId = Re(this.tenantId, r, this.additionallyAllowedTenantIds, Yg);
      let n = ua(e);
      return this.msalClient.getTokenByClientSecret(n, this.clientSecret, r);
    });
  }
}
var WR = G("UsernamePasswordCredential");
class Ll {
  constructor(e, t, r, n, o = {}) {
    if (!e) throw new v("UsernamePasswordCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!t) throw new v("UsernamePasswordCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!r) throw new v("UsernamePasswordCredential: username is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!n) throw new v("UsernamePasswordCredential: password is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    this.tenantId = e, this.additionallyAllowedTenantIds = Me(o === null || o === void 0 ? void 0 : o.additionallyAllowedTenants), this.username = r, this.password = n, this.msalClient = dr(t, this.tenantId, Object.assign(Object.assign({}, o), { tokenCredentialOptions: o !== null && o !== void 0 ? o : {} }));
  }
  async getToken(e, t = {}) {
    return ne.withSpan(`${this.constructor.name}.getToken`, t, async (r) => {
      r.tenantId = Re(this.tenantId, r, this.additionallyAllowedTenantIds, WR);
      let n = ua(e);
      return this.msalClient.getTokenByUsernamePassword(n, this.username, this.password, r);
    });
  }
}
var QR = ["AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET", "AZURE_CLIENT_CERTIFICATE_PATH", "AZURE_CLIENT_CERTIFICATE_PASSWORD", "AZURE_USERNAME", "AZURE_PASSWORD", "AZURE_ADDITIONALLY_ALLOWED_TENANTS", "AZURE_CLIENT_SEND_CERTIFICATE_CHAIN"];
function XR() {
  var e;
  return ((e = process.env.AZURE_ADDITIONALLY_ALLOWED_TENANTS) !== null && e !== void 0 ? e : "").split(";");
}
var fa = "EnvironmentCredential", Bt = G(fa);
function JR() {
  var e;
  let t = ((e = process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN) !== null && e !== void 0 ? e : "").toLowerCase(), r = t === "true" || t === "1";
  return Bt.verbose(`AZURE_CLIENT_SEND_CERTIFICATE_CHAIN: ${process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN}; sendCertificateChain: ${r}`), r;
}
class Hl {
  constructor(e) {
    this._credential = void 0;
    let t = ai(QR).assigned.join(", ");
    Bt.info(`Found the following environment variables: ${t}`);
    let r = process.env.AZURE_TENANT_ID, n = process.env.AZURE_CLIENT_ID, o = process.env.AZURE_CLIENT_SECRET, i = XR(), s = JR(), a = Object.assign(Object.assign({}, e), { additionallyAllowedTenantIds: i, sendCertificateChain: s });
    if (r) xe(Bt, r);
    if (r && n && o) {
      Bt.info(`Invoking ClientSecretCredential with tenant ID: ${r}, clientId: ${n} and clientSecret: [REDACTED]`), this._credential = new Ul(r, n, o, a);
      return;
    }
    let c = process.env.AZURE_CLIENT_CERTIFICATE_PATH, l = process.env.AZURE_CLIENT_CERTIFICATE_PASSWORD;
    if (r && n && c) {
      Bt.info(`Invoking ClientCertificateCredential with tenant ID: ${r}, clientId: ${n} and certificatePath: ${c}`), this._credential = new Dl(r, n, { certificatePath: c, certificatePassword: l }, a);
      return;
    }
    let d = process.env.AZURE_USERNAME, u = process.env.AZURE_PASSWORD;
    if (r && n && d && u) Bt.info(`Invoking UsernamePasswordCredential with tenant ID: ${r}, clientId: ${n} and username: ${d}`), Bt.warning("Environment is configured to use username and password authentication. This authentication method is deprecated, as it doesn't support multifactor authentication (MFA). Use a more secure credential. For more details, see https://aka.ms/azsdk/identity/mfa."), this._credential = new Ll(r, n, d, u, a);
  }
  async getToken(e, t = {}) {
    return ne.withSpan(`${fa}.getToken`, t, async (r) => {
      if (this._credential) try {
        let n = await this._credential.getToken(e, r);
        return Bt.getToken.info(ge(e)), n;
      } catch (n) {
        let o = new to(400, { error: `${fa} authentication failed. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`, error_description: n.message.toString().split("More details:").join("") });
        throw Bt.getToken.info(K(e, o)), o;
      }
      throw new v(`${fa} is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`);
    });
  }
}
var $l = G("DefaultAzureCredential");
function ZR(e = {}) {
  var t, r, n, o;
  (t = e.retryOptions) !== null && t !== void 0 || (e.retryOptions = { maxRetries: 5, retryDelayInMs: 800 });
  let i = (r = e === null || e === void 0 ? void 0 : e.managedIdentityClientId) !== null && r !== void 0 ? r : process.env.AZURE_CLIENT_ID, s = (n = e === null || e === void 0 ? void 0 : e.workloadIdentityClientId) !== null && n !== void 0 ? n : i, a = e === null || e === void 0 ? void 0 : e.managedIdentityResourceId, c = process.env.AZURE_FEDERATED_TOKEN_FILE, l = (o = e === null || e === void 0 ? void 0 : e.tenantId) !== null && o !== void 0 ? o : process.env.AZURE_TENANT_ID;
  if (a) {
    let d = Object.assign(Object.assign({}, e), { resourceId: a });
    return new Jn(d);
  }
  if (c && s) {
    let d = Object.assign(Object.assign({}, e), { tenantId: l });
    return new Jn(s, d);
  }
  if (i) {
    let d = Object.assign(Object.assign({}, e), { clientId: i });
    return new Jn(d);
  }
  return new Jn(e);
}
function ew(e) {
  var t, r, n;
  let o = (t = e === null || e === void 0 ? void 0 : e.managedIdentityClientId) !== null && t !== void 0 ? t : process.env.AZURE_CLIENT_ID, i = (r = e === null || e === void 0 ? void 0 : e.workloadIdentityClientId) !== null && r !== void 0 ? r : o, s = process.env.AZURE_FEDERATED_TOKEN_FILE, a = (n = e === null || e === void 0 ? void 0 : e.tenantId) !== null && n !== void 0 ? n : process.env.AZURE_TENANT_ID;
  if (s && i) {
    let c = Object.assign(Object.assign({}, e), { tenantId: a, clientId: i, tokenFilePath: s });
    return new Jr(c);
  }
  if (a) {
    let c = Object.assign(Object.assign({}, e), { tenantId: a });
    return new Jr(c);
  }
  return new Jr(e);
}
function tw(e = {}) {
  let t = e.processTimeoutInMs;
  return new bl(Object.assign({ processTimeoutInMs: t }, e));
}
function rw(e = {}) {
  let t = e.processTimeoutInMs;
  return new kl(Object.assign({ processTimeoutInMs: t }, e));
}
function nw(e = {}) {
  let t = e.processTimeoutInMs;
  return new Pl(Object.assign({ processTimeoutInMs: t }, e));
}
function ow(e = {}) {
  return new Hl(e);
}
class Wg {
  constructor(e, t) {
    this.credentialName = e, this.credentialUnavailableErrorMessage = t;
  }
  getToken() {
    return $l.getToken.info(`Skipping ${this.credentialName}, reason: ${this.credentialUnavailableErrorMessage}`), Promise.resolve(null);
  }
}
class Qg extends Ml {
  constructor(e) {
    let t = process.env.AZURE_TOKEN_CREDENTIALS ? process.env.AZURE_TOKEN_CREDENTIALS.trim().toLowerCase() : void 0, r = [rw, nw, tw], n = [ow, ew, ZR], o = [];
    if (t) switch (t) {
      case "dev":
        o = r;
        break;
      case "prod":
        o = n;
        break;
      default: {
        let s = `Invalid value for AZURE_TOKEN_CREDENTIALS = ${process.env.AZURE_TOKEN_CREDENTIALS}. Valid values are 'prod' or 'dev'.`;
        throw $l.warning(s), Error(s);
      }
    }
    else o = [...n, ...r];
    let i = o.map((s) => {
      try {
        return s(e);
      } catch (a) {
        return $l.warning(`Skipped ${s.name} because of an error creating the credential: ${a}`), new Wg(s.name, a.message);
      }
    });
    super(...i);
  }
}
function iw(e, t, r) {
  let { abortSignal: n, tracingOptions: o } = r || {}, i = io();
  i.addPolicy(po({ credential: e, scopes: t }));
  async function s() {
    var a;
    let l = (a = (await i.sendRequest({ sendRequest: (d) => Promise.resolve({ request: d, status: 200, headers: d.headers }) }, tt({ url: "https://example.com", abortSignal: n, tracingOptions: o }))).headers.get("authorization")) === null || a === void 0 ? void 0 : a.split(" ")[1];
    if (!l) throw Error("Failed to get access token");
    return l;
  }
  return s;
}
