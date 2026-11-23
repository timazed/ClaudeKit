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
var chunk_x8v62cn3_exports = {};
__export(chunk_x8v62cn3_exports, {
  $Le: () => $Le,
  BLe: () => BLe,
  DLe: () => DLe,
  FLe: () => FLe,
  FZ: () => FZ,
  LLe: () => LLe,
  MN: () => MN,
  NLe: () => NLe,
  ULe: () => ULe,
  WLe: () => WLe,
  gxe: () => gxe,
  hxe: () => hxe,
  jLe: () => jLe,
  mxe: () => mxe,
  pxe: () => pxe,
  uX: () => uX
});
module.exports = __toCommonJS(chunk_x8v62cn3_exports);
var import_chunk_qrv5kr16 = require("/$bunfs/root/chunk-qrv5kr16.js");
var import_chunk_tf0gwgs2 = require("/$bunfs/root/chunk-tf0gwgs2.js");
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_djjqrhyf = require("/$bunfs/root/chunk-djjqrhyf.js");
var import_chunk_fe2jgj1j = require("/$bunfs/root/chunk-fe2jgj1j.js");
var import_chunk_eebp24wr = require("/$bunfs/root/chunk-eebp24wr.js");
var import_chunk_1tzm94k1 = require("/$bunfs/root/chunk-1tzm94k1.js");
var import_chunk_6v7p7bta = require("/$bunfs/root/chunk-6v7p7bta.js");
var import_chunk_4vm1ywmw = require("/$bunfs/root/chunk-4vm1ywmw.js");
var import_chunk_jybgpkft = require("/$bunfs/root/chunk-jybgpkft.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var DLe = (0, import_chunk_w1d7ygsk.V)(function(oo) {
  var so = (0, import_chunk_3jjr3wje.yb)();
  function no(e) {
    return e;
  }
  var zr = (e) => (t) => async (r) => {
    if (!so.HttpRequest.isInstance(r.request)) return t(r);
    let { request: s } = r, { handlerProtocol: o = "" } = e.requestHandler.metadata || {};
    if (o.indexOf("h2") >= 0 && !s.headers[":authority"]) delete s.headers.host, s.headers[":authority"] = s.hostname + (s.port ? ":" + s.port : "");
    else if (!s.headers.host) {
      let a = s.hostname;
      if (s.port != null) a += `:${s.port}`;
      s.headers.host = a;
    }
    return t(r);
  }, $r = { name: "hostHeaderMiddleware", step: "build", priority: "low", tags: ["HOST"], override: true }, io = (e) => ({ applyToStack: (t) => {
    t.add(zr(e), $r);
  } });
  oo.getHostHeaderPlugin = io;
  oo.hostHeaderMiddleware = zr;
  oo.hostHeaderMiddlewareOptions = $r;
  oo.resolveHostHeaderConfig = no;
});
var LLe = (0, import_chunk_w1d7ygsk.V)(function(fo) {
  var Br = () => (e, t) => async (r) => {
    try {
      let s = await e(r), { clientName: o, commandName: a, logger: c, dynamoDbDocumentClientOptions: d = {} } = t, { overrideInputFilterSensitiveLog: f, overrideOutputFilterSensitiveLog: m } = d, y = f ?? t.inputFilterSensitiveLog, b = m ?? t.outputFilterSensitiveLog, { $metadata: x, ...N } = s.output;
      return c?.info?.({ clientName: o, commandName: a, input: y(r.input), output: b(N), metadata: x }), s;
    } catch (s) {
      let { clientName: o, commandName: a, logger: c, dynamoDbDocumentClientOptions: d = {} } = t, { overrideInputFilterSensitiveLog: f } = d, m = f ?? t.inputFilterSensitiveLog;
      throw c?.error?.({ clientName: o, commandName: a, input: m(r.input), error: s, metadata: s.$metadata }), s;
    }
  }, Lr = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize", override: true }, ho = (e) => ({ applyToStack: (t) => {
    t.add(Br(), Lr);
  } });
  fo.getLoggerPlugin = ho;
  fo.loggerMiddleware = Br;
  fo.loggerMiddlewareOptions = Lr;
});
var Vr = (0, import_chunk_w1d7ygsk.V)(function(yo) {
  var ve = { REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"), X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"), TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID") }, xt = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
  if (!xt) globalThis.awslambda = globalThis.awslambda || {};
  class Ge {
    static PROTECTED_KEYS = ve;
    isProtectedKey(e) {
      return Object.values(ve).includes(e);
    }
    getRequestId() {
      return this.get(ve.REQUEST_ID) ?? "-";
    }
    getXRayTraceId() {
      return this.get(ve.X_RAY_TRACE_ID);
    }
    getTenantId() {
      return this.get(ve.TENANT_ID);
    }
  }
  class Ur extends Ge {
    currentContext;
    getContext() {
      return this.currentContext;
    }
    hasContext() {
      return this.currentContext !== void 0;
    }
    get(e) {
      return this.currentContext?.[e];
    }
    set(e, t) {
      if (this.isProtectedKey(e)) throw Error(`Cannot modify protected Lambda context field: ${String(e)}`);
      this.currentContext = this.currentContext || {}, this.currentContext[e] = t;
    }
    run(e, t) {
      this.currentContext = e;
      try {
        return t();
      } finally {
        this.currentContext = void 0;
      }
    }
  }
  class Nt extends Ge {
    als;
    static async create() {
      let e = new Nt(), t = await Promise.resolve().then(() => __toESM(require("async_hooks")));
      return e.als = new t.AsyncLocalStorage(), e;
    }
    getContext() {
      return this.als.getStore();
    }
    hasContext() {
      return this.als.getStore() !== void 0;
    }
    get(e) {
      return this.als.getStore()?.[e];
    }
    set(e, t) {
      if (this.isProtectedKey(e)) throw Error(`Cannot modify protected Lambda context field: ${String(e)}`);
      let r = this.als.getStore();
      if (!r) throw Error("No context available");
      r[e] = t;
    }
    run(e, t) {
      return this.als.run(e, t);
    }
  }
  yo.InvokeStore = void 0;
  (function(e) {
    let t = null;
    async function r() {
      if (!t) t = (async () => {
        let o = "AWS_LAMBDA_MAX_CONCURRENCY" in process.env ? await Nt.create() : new Ur();
        if (!xt && globalThis.awslambda?.InvokeStore) return globalThis.awslambda.InvokeStore;
        else if (!xt && globalThis.awslambda) return globalThis.awslambda.InvokeStore = o, o;
        else return o;
      })();
      return t;
    }
    e.getInstanceAsync = r, e._testing = process.env.AWS_LAMBDA_BENCHMARK_MODE === "1" ? { reset: () => {
      if (t = null, globalThis.awslambda?.InvokeStore) delete globalThis.awslambda.InvokeStore;
      globalThis.awslambda = {};
    } } : void 0;
  })(yo.InvokeStore || (yo.InvokeStore = {}));
  yo.InvokeStoreBase = Ge;
});
var Gr = (0, import_chunk_w1d7ygsk.V)(function(qr) {
  Object.defineProperty(qr, "__esModule", { value: true });
  qr.recursionDetectionMiddleware = void 0;
  var Fr = Vr(), jr = (0, import_chunk_3jjr3wje.yb)(), Tt = "X-Amzn-Trace-Id", So = "AWS_LAMBDA_FUNCTION_NAME", wo = "_X_AMZN_TRACE_ID", xo = () => (e) => async (t) => {
    let { request: r } = t;
    if (!jr.HttpRequest.isInstance(r)) return e(t);
    let s = Object.keys(r.headers ?? {}).find((y) => y.toLowerCase() === Tt.toLowerCase()) ?? Tt;
    if (r.headers.hasOwnProperty(s)) return e(t);
    let o = process.env[So], a = process.env[wo], f = (await Fr.InvokeStore.getInstanceAsync())?.getXRayTraceId() ?? a, m = (y) => typeof y === "string" && y.length > 0;
    if (m(o) && m(f)) r.headers[Tt] = f;
    return e({ ...t, request: r });
  };
  qr.recursionDetectionMiddleware = xo;
});
var NLe = (0, import_chunk_w1d7ygsk.V)(function(Ct) {
  var _t = Gr(), bo = { step: "build", tags: ["RECURSION_DETECTION"], name: "recursionDetectionMiddleware", override: true, priority: "low" }, No = (e) => ({ applyToStack: (t) => {
    t.add(_t.recursionDetectionMiddleware(), bo);
  } });
  Ct.getRecursionDetectionPlugin = No;
  Object.keys(_t).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(Ct, e)) Object.defineProperty(Ct, e, { enumerable: true, get: function() {
      return _t[e];
    } });
  });
});
var pxe = (0, import_chunk_w1d7ygsk.V)(function(Xe) {
  var Ce = (0, import_chunk_djjqrhyf.Mme)(), _o = (0, import_chunk_eebp24wr.Kre)(), Wr = (e, t = false) => {
    if (t) {
      for (let r of e.split(".")) if (!Wr(r)) return false;
      return true;
    }
    if (!Ce.isValidHostLabel(e)) return false;
    if (e.length < 3 || e.length > 63) return false;
    if (e !== e.toLowerCase()) return false;
    if (Ce.isIpAddress(e)) return false;
    return true;
  }, Xr = ":", Co = "/", Ao = (e) => {
    let t = e.split(Xr);
    if (t.length < 6) return null;
    let [r, s, o, a, c, ...d] = t;
    if (r !== "arn" || s === "" || o === "" || d.join(Xr) === "") return null;
    let f = d.map((m) => m.split(Co)).flat();
    return { partition: s, service: o, region: a, accountId: c, resourceId: f };
  }, Ro = [{ id: "aws", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-east-1", name: "aws", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$", regions: { "af-south-1": { description: "Africa (Cape Town)" }, "ap-east-1": { description: "Asia Pacific (Hong Kong)" }, "ap-east-2": { description: "Asia Pacific (Taipei)" }, "ap-northeast-1": { description: "Asia Pacific (Tokyo)" }, "ap-northeast-2": { description: "Asia Pacific (Seoul)" }, "ap-northeast-3": { description: "Asia Pacific (Osaka)" }, "ap-south-1": { description: "Asia Pacific (Mumbai)" }, "ap-south-2": { description: "Asia Pacific (Hyderabad)" }, "ap-southeast-1": { description: "Asia Pacific (Singapore)" }, "ap-southeast-2": { description: "Asia Pacific (Sydney)" }, "ap-southeast-3": { description: "Asia Pacific (Jakarta)" }, "ap-southeast-4": { description: "Asia Pacific (Melbourne)" }, "ap-southeast-5": { description: "Asia Pacific (Malaysia)" }, "ap-southeast-6": { description: "Asia Pacific (New Zealand)" }, "ap-southeast-7": { description: "Asia Pacific (Thailand)" }, "aws-global": { description: "aws global region" }, "ca-central-1": { description: "Canada (Central)" }, "ca-west-1": { description: "Canada West (Calgary)" }, "eu-central-1": { description: "Europe (Frankfurt)" }, "eu-central-2": { description: "Europe (Zurich)" }, "eu-north-1": { description: "Europe (Stockholm)" }, "eu-south-1": { description: "Europe (Milan)" }, "eu-south-2": { description: "Europe (Spain)" }, "eu-west-1": { description: "Europe (Ireland)" }, "eu-west-2": { description: "Europe (London)" }, "eu-west-3": { description: "Europe (Paris)" }, "il-central-1": { description: "Israel (Tel Aviv)" }, "me-central-1": { description: "Middle East (UAE)" }, "me-south-1": { description: "Middle East (Bahrain)" }, "mx-central-1": { description: "Mexico (Central)" }, "sa-east-1": { description: "South America (Sao Paulo)" }, "us-east-1": { description: "US East (N. Virginia)" }, "us-east-2": { description: "US East (Ohio)" }, "us-west-1": { description: "US West (N. California)" }, "us-west-2": { description: "US West (Oregon)" } } }, { id: "aws-cn", outputs: { dnsSuffix: "amazonaws.com.cn", dualStackDnsSuffix: "api.amazonwebservices.com.cn", implicitGlobalRegion: "cn-northwest-1", name: "aws-cn", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^cn\\-\\w+\\-\\d+$", regions: { "aws-cn-global": { description: "aws-cn global region" }, "cn-north-1": { description: "China (Beijing)" }, "cn-northwest-1": { description: "China (Ningxia)" } } }, { id: "aws-eusc", outputs: { dnsSuffix: "amazonaws.eu", dualStackDnsSuffix: "api.amazonwebservices.eu", implicitGlobalRegion: "eusc-de-east-1", name: "aws-eusc", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$", regions: { "eusc-de-east-1": { description: "EU (Germany)" } } }, { id: "aws-iso", outputs: { dnsSuffix: "c2s.ic.gov", dualStackDnsSuffix: "api.aws.ic.gov", implicitGlobalRegion: "us-iso-east-1", name: "aws-iso", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-iso\\-\\w+\\-\\d+$", regions: { "aws-iso-global": { description: "aws-iso global region" }, "us-iso-east-1": { description: "US ISO East" }, "us-iso-west-1": { description: "US ISO WEST" } } }, { id: "aws-iso-b", outputs: { dnsSuffix: "sc2s.sgov.gov", dualStackDnsSuffix: "api.aws.scloud", implicitGlobalRegion: "us-isob-east-1", name: "aws-iso-b", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-isob\\-\\w+\\-\\d+$", regions: { "aws-iso-b-global": { description: "aws-iso-b global region" }, "us-isob-east-1": { description: "US ISOB East (Ohio)" }, "us-isob-west-1": { description: "US ISOB West" } } }, { id: "aws-iso-e", outputs: { dnsSuffix: "cloud.adc-e.uk", dualStackDnsSuffix: "api.cloud-aws.adc-e.uk", implicitGlobalRegion: "eu-isoe-west-1", name: "aws-iso-e", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$", regions: { "aws-iso-e-global": { description: "aws-iso-e global region" }, "eu-isoe-west-1": { description: "EU ISOE West" } } }, { id: "aws-iso-f", outputs: { dnsSuffix: "csp.hci.ic.gov", dualStackDnsSuffix: "api.aws.hci.ic.gov", implicitGlobalRegion: "us-isof-south-1", name: "aws-iso-f", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-isof\\-\\w+\\-\\d+$", regions: { "aws-iso-f-global": { description: "aws-iso-f global region" }, "us-isof-east-1": { description: "US ISOF EAST" }, "us-isof-south-1": { description: "US ISOF SOUTH" } } }, { id: "aws-us-gov", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-gov-west-1", name: "aws-us-gov", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-gov\\-\\w+\\-\\d+$", regions: { "aws-us-gov-global": { description: "aws-us-gov global region" }, "us-gov-east-1": { description: "AWS GovCloud (US-East)" }, "us-gov-west-1": { description: "AWS GovCloud (US-West)" } } }], Io = "1.1", Kr = { partitions: Ro, version: Io }, Qr = Kr, Yr = "", Jr = (e) => {
    let { partitions: t } = Qr;
    for (let s of t) {
      let { regions: o, outputs: a } = s;
      for (let [c, d] of Object.entries(o)) if (c === e) return { ...a, ...d };
    }
    for (let s of t) {
      let { regionRegex: o, outputs: a } = s;
      if (new RegExp(o).test(e)) return { ...a };
    }
    let r = t.find((s) => s.id === "aws");
    if (!r) throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    return { ...r.outputs };
  }, Zr = (e, t = "") => {
    Qr = e, Yr = t;
  }, Oo = () => {
    Zr(Kr, "");
  }, Mo = () => Yr, es = { isVirtualHostableS3Bucket: Wr, parseArn: Ao, partition: Jr };
  Ce.customEndpointFunctions.aws = es;
  var Do = (e) => {
    if (typeof e.endpointProvider !== "function") throw Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
    let { endpoint: t } = e;
    if (t === void 0) e.endpoint = async () => ts(e.endpointProvider({ Region: typeof e.region === "function" ? await e.region() : e.region, UseDualStack: typeof e.useDualstackEndpoint === "function" ? await e.useDualstackEndpoint() : e.useDualstackEndpoint, UseFIPS: typeof e.useFipsEndpoint === "function" ? await e.useFipsEndpoint() : e.useFipsEndpoint, Endpoint: void 0 }, { logger: e.logger }));
    return e;
  }, ts = (e) => _o.parseUrl(e.url);
  Object.defineProperty(Xe, "EndpointError", { enumerable: true, get: function() {
    return Ce.EndpointError;
  } });
  Object.defineProperty(Xe, "isIpAddress", { enumerable: true, get: function() {
    return Ce.isIpAddress;
  } });
  Object.defineProperty(Xe, "resolveEndpoint", { enumerable: true, get: function() {
    return Ce.resolveEndpoint;
  } });
  Xe.awsEndpointFunctions = es;
  Xe.getUserAgentPrefix = Mo;
  Xe.partition = Jr;
  Xe.resolveDefaultAwsRegionalEndpointsConfig = Do;
  Xe.setPartitionInfo = Zr;
  Xe.toEndpointV1 = ts;
  Xe.useDefaultPartitionInfo = Oo;
});
var ss = (0, import_chunk_w1d7ygsk.V)(function(Vo) {
  var rs = typeof TextEncoder == "function" ? new TextEncoder() : null, Uo = (e) => {
    if (typeof e === "string") {
      if (rs) return rs.encode(e).byteLength;
      let t = e.length;
      for (let r = t - 1; r >= 0; r--) {
        let s = e.charCodeAt(r);
        if (s > 127 && s <= 2047) t++;
        else if (s > 2047 && s <= 65535) t += 2;
        if (s >= 56320 && s <= 57343) r--;
      }
      return t;
    } else if (typeof e.byteLength === "number") return e.byteLength;
    else if (typeof e.size === "number") return e.size;
    throw Error(`Body Length computation failed for ${e}`);
  };
  Vo.calculateBodyLength = Uo;
});
var Ut = (0, import_chunk_w1d7ygsk.V)(function(da) {
  var Je = (0, import_chunk_6v7p7bta.Ujn)(), as = (0, import_chunk_z3ydstra.SL)(), $e = (0, import_chunk_6v7p7bta.Run)(), jo = (0, import_chunk_3jjr3wje.yb)(), qo = ss(), Ae = (0, import_chunk_6v7p7bta.Tj)(), Ho = (0, import_chunk_jybgpkft.Aj)(), cs = (0, import_chunk_z3ydstra.xB)(), Qe = 0, Ye = 1, Ne = 2, fe = 3, ze = 4, We = 5, us = 6, At = 7, ls = 20, Ot = 21, ds = 22, Go = 23, Dt = 24, Te = 25, _e = 26, pe = 27, Pt = 31;
  function Re(e) {
    return typeof Buffer < "u" ? Buffer.alloc(e) : new Uint8Array(e);
  }
  var kt = Symbol("@smithy/core/cbor::tagSymbol");
  function vt(e) {
    return e[kt] = true, e;
  }
  var Xo = typeof TextDecoder < "u", Wo = typeof Buffer < "u", U = Re(0), ue = new DataView(U.buffer, U.byteOffset, U.byteLength), ns = Xo ? new TextDecoder() : null, D = 0;
  function Ko(e) {
    U = e, ue = new DataView(U.buffer, U.byteOffset, U.byteLength);
  }
  function le(e, t) {
    if (e >= t) throw Error("unexpected end of (decode) payload.");
    let r = (U[e] & 224) >> 5, s = U[e] & 31;
    switch (r) {
      case Qe:
      case Ye:
      case us:
        let o, a;
        if (s < 24) o = s, a = 1;
        else switch (s) {
          case Dt:
          case Te:
          case _e:
          case pe:
            let c = fs[s], d = c + 1;
            if (a = d, t - e < d) throw Error(`countLength ${c} greater than remaining buf len.`);
            let f = e + 1;
            if (c === 1) o = U[f];
            else if (c === 2) o = ue.getUint16(f);
            else if (c === 4) o = ue.getUint32(f);
            else o = ue.getBigUint64(f);
            break;
          default:
            throw Error(`unexpected minor value ${s}.`);
        }
        if (r === Qe) return D = a, Rt(o);
        else if (r === Ye) {
          let c;
          if (typeof o === "bigint") c = BigInt(-1) - o;
          else c = -1 - o;
          return D = a, Rt(c);
        } else if (s === 2 || s === 3) {
          let c = Be(e + a, t), d = BigInt(0), f = e + a + D;
          for (let m = f; m < f + c; ++m) d = d << BigInt(8) | BigInt(U[m]);
          return D = a + D + c, s === 3 ? -d - BigInt(1) : d;
        } else if (s === 4) {
          let c = le(e + a, t), [d, f] = c, m = f < 0 ? -1 : 1, y = "0".repeat(Math.abs(d) + 1) + String(BigInt(m) * BigInt(f)), b, x = f < 0 ? "-" : "";
          if (b = d === 0 ? y : y.slice(0, y.length + d) + "." + y.slice(d), b = b.replace(/^0+/g, ""), b === "") b = "0";
          if (b[0] === ".") b = "0" + b;
          return b = x + b, D = a + D, Je.nv(b);
        } else {
          let c = le(e + a, t);
          return D = a + D, vt({ tag: Rt(o), value: c });
        }
      case fe:
      case We:
      case ze:
      case Ne:
        if (s === Pt) switch (r) {
          case fe:
            return Zo(e, t);
          case We:
            return na(e, t);
          case ze:
            return ra(e, t);
          case Ne:
            return ea(e, t);
        }
        else switch (r) {
          case fe:
            return Jo(e, t);
          case We:
            return sa(e, t);
          case ze:
            return ta(e, t);
          case Ne:
            return zt(e, t);
        }
      default:
        return ia(e, t);
    }
  }
  function hs(e, t, r) {
    if (Wo && e.constructor?.name === "Buffer") return e.toString("utf-8", t, r);
    if (ns) return ns.decode(e.subarray(t, r));
    return as.toUtf8(e.subarray(t, r));
  }
  function Qo(e) {
    let t = Number(e);
    if (t < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < t) console.warn(Error(`@smithy/core/cbor - truncating BigInt(${e}) to ${t} with loss of precision.`));
    return t;
  }
  var fs = { [Dt]: 1, [Te]: 2, [_e]: 4, [pe]: 8 };
  function Yo(e, t) {
    let r = e >> 7, s = (e & 124) >> 2, o = (e & 3) << 8 | t, a = r === 0 ? 1 : -1, c, d;
    if (s === 0) if (o === 0) return 0;
    else c = Math.pow(2, -14), d = 0;
    else if (s === 31) if (o === 0) return a * (1 / 0);
    else return NaN;
    else c = Math.pow(2, s - 15), d = 1;
    return d += o / 1024, a * (c * d);
  }
  function Be(e, t) {
    let r = U[e] & 31;
    if (r < 24) return D = 1, r;
    if (r === Dt || r === Te || r === _e || r === pe) {
      let s = fs[r];
      if (D = s + 1, t - e < D) throw Error(`countLength ${s} greater than remaining buf len.`);
      let o = e + 1;
      if (s === 1) return U[o];
      else if (s === 2) return ue.getUint16(o);
      else if (s === 4) return ue.getUint32(o);
      return Qo(ue.getBigUint64(o));
    }
    throw Error(`unexpected minor value ${r}.`);
  }
  function Jo(e, t) {
    let r = Be(e, t), s = D;
    if (e += s, t - e < r) throw Error(`string len ${r} greater than remaining buf len.`);
    let o = hs(U, e, e + r);
    return D = s + r, o;
  }
  function Zo(e, t) {
    e += 1;
    let r = [];
    for (let s = e; e < t; ) {
      if (U[e] === 255) {
        let f = Re(r.length);
        return f.set(r, 0), D = e - s + 2, hs(f, 0, f.length);
      }
      let o = (U[e] & 224) >> 5, a = U[e] & 31;
      if (o !== fe) throw Error(`unexpected major type ${o} in indefinite string.`);
      if (a === Pt) throw Error("nested indefinite string.");
      let c = zt(e, t);
      e += D;
      for (let f = 0; f < c.length; ++f) r.push(c[f]);
    }
    throw Error("expected break marker.");
  }
  function zt(e, t) {
    let r = Be(e, t), s = D;
    if (e += s, t - e < r) throw Error(`unstructured byte string len ${r} greater than remaining buf len.`);
    let o = U.subarray(e, e + r);
    return D = s + r, o;
  }
  function ea(e, t) {
    e += 1;
    let r = [];
    for (let s = e; e < t; ) {
      if (U[e] === 255) {
        let f = Re(r.length);
        return f.set(r, 0), D = e - s + 2, f;
      }
      let o = (U[e] & 224) >> 5, a = U[e] & 31;
      if (o !== Ne) throw Error(`unexpected major type ${o} in indefinite string.`);
      if (a === Pt) throw Error("nested indefinite string.");
      let c = zt(e, t);
      e += D;
      for (let f = 0; f < c.length; ++f) r.push(c[f]);
    }
    throw Error("expected break marker.");
  }
  function ta(e, t) {
    let r = Be(e, t), s = D;
    e += s;
    let o = e, a = Array(r);
    for (let c = 0; c < r; ++c) {
      let d = le(e, t), f = D;
      a[c] = d, e += f;
    }
    return D = s + (e - o), a;
  }
  function ra(e, t) {
    e += 1;
    let r = [];
    for (let s = e; e < t; ) {
      if (U[e] === 255) return D = e - s + 2, r;
      let o = le(e, t);
      e += D, r.push(o);
    }
    throw Error("expected break marker.");
  }
  function sa(e, t) {
    let r = Be(e, t), s = D;
    e += s;
    let o = e, a = {};
    for (let c = 0; c < r; ++c) {
      if (e >= t) throw Error("unexpected end of map payload.");
      let d = (U[e] & 224) >> 5;
      if (d !== fe) throw Error(`unexpected major type ${d} for map key at index ${e}.`);
      let f = le(e, t);
      e += D;
      let m = le(e, t);
      e += D, a[f] = m;
    }
    return D = s + (e - o), a;
  }
  function na(e, t) {
    e += 1;
    let r = e, s = {};
    for (; e < t; ) {
      if (e >= t) throw Error("unexpected end of map payload.");
      if (U[e] === 255) return D = e - r + 2, s;
      let o = (U[e] & 224) >> 5;
      if (o !== fe) throw Error(`unexpected major type ${o} for map key.`);
      let a = le(e, t);
      e += D;
      let c = le(e, t);
      e += D, s[a] = c;
    }
    throw Error("expected break marker.");
  }
  function ia(e, t) {
    let r = U[e] & 31;
    switch (r) {
      case Ot:
      case ls:
        return D = 1, r === Ot;
      case ds:
        return D = 1, null;
      case Go:
        return D = 1, null;
      case Te:
        if (t - e < 3) throw Error("incomplete float16 at end of buf.");
        return D = 3, Yo(U[e + 1], U[e + 2]);
      case _e:
        if (t - e < 5) throw Error("incomplete float32 at end of buf.");
        return D = 5, ue.getFloat32(e + 1);
      case pe:
        if (t - e < 9) throw Error("incomplete float64 at end of buf.");
        return D = 9, ue.getFloat64(e + 1);
      default:
        throw Error(`unexpected minor value ${r}.`);
    }
  }
  function Rt(e) {
    if (typeof e === "number") return e;
    let t = Number(e);
    if (Number.MIN_SAFE_INTEGER <= t && t <= Number.MAX_SAFE_INTEGER) return t;
    return e;
  }
  var is = typeof Buffer < "u", oa = 2048, I = Re(oa), ce = new DataView(I.buffer, I.byteOffset, I.byteLength), A = 0;
  function It(e) {
    if (I.byteLength - A < e) if (A < 16e6) Mt(Math.max(I.byteLength * 4, I.byteLength + e));
    else Mt(I.byteLength + e + 16e6);
  }
  function os() {
    let e = Re(A);
    return e.set(I.subarray(0, A), 0), A = 0, e;
  }
  function Mt(e) {
    let t = I;
    if (I = Re(e), t) if (t.copy) t.copy(I, 0, 0, t.byteLength);
    else I.set(t, 0);
    ce = new DataView(I.buffer, I.byteOffset, I.byteLength);
  }
  function ae(e, t) {
    if (t < 24) I[A++] = e << 5 | t;
    else if (t < 256) I[A++] = e << 5 | 24, I[A++] = t;
    else if (t < 65536) I[A++] = e << 5 | Te, ce.setUint16(A, t), A += 2;
    else if (t < 4294967296) I[A++] = e << 5 | _e, ce.setUint32(A, t), A += 4;
    else I[A++] = e << 5 | pe, ce.setBigUint64(A, typeof t === "bigint" ? t : BigInt(t)), A += 8;
  }
  function aa(e) {
    let t = [e];
    while (t.length) {
      let r = t.pop();
      if (It(typeof r === "string" ? r.length * 4 : 64), typeof r === "string") {
        if (is) ae(fe, Buffer.byteLength(r)), A += I.write(r, A);
        else {
          let s = as.fromUtf8(r);
          ae(fe, s.byteLength), I.set(s, A), A += s.byteLength;
        }
        continue;
      } else if (typeof r === "number") {
        if (Number.isInteger(r)) {
          let s = r >= 0, o = s ? Qe : Ye, a = s ? r : -r - 1;
          if (a < 24) I[A++] = o << 5 | a;
          else if (a < 256) I[A++] = o << 5 | 24, I[A++] = a;
          else if (a < 65536) I[A++] = o << 5 | Te, I[A++] = a >> 8, I[A++] = a;
          else if (a < 4294967296) I[A++] = o << 5 | _e, ce.setUint32(A, a), A += 4;
          else I[A++] = o << 5 | pe, ce.setBigUint64(A, BigInt(a)), A += 8;
          continue;
        }
        I[A++] = At << 5 | pe, ce.setFloat64(A, r), A += 8;
        continue;
      } else if (typeof r === "bigint") {
        let s = r >= 0, o = s ? Qe : Ye, a = s ? r : -r - BigInt(1), c = Number(a);
        if (c < 24) I[A++] = o << 5 | c;
        else if (c < 256) I[A++] = o << 5 | 24, I[A++] = c;
        else if (c < 65536) I[A++] = o << 5 | Te, I[A++] = c >> 8, I[A++] = c & 255;
        else if (c < 4294967296) I[A++] = o << 5 | _e, ce.setUint32(A, c), A += 4;
        else if (a < BigInt("18446744073709551616")) I[A++] = o << 5 | pe, ce.setBigUint64(A, a), A += 8;
        else {
          let d = a.toString(2), f = new Uint8Array(Math.ceil(d.length / 8)), m = a, y = 0;
          while (f.byteLength - ++y >= 0) f[f.byteLength - y] = Number(m & BigInt(255)), m >>= BigInt(8);
          if (It(f.byteLength * 2), I[A++] = s ? 194 : 195, is) ae(Ne, Buffer.byteLength(f));
          else ae(Ne, f.byteLength);
          I.set(f, A), A += f.byteLength;
        }
        continue;
      } else if (r === null) {
        I[A++] = At << 5 | ds;
        continue;
      } else if (typeof r === "boolean") {
        I[A++] = At << 5 | (r ? Ot : ls);
        continue;
      } else if (typeof r > "u") throw Error("@smithy/core/cbor: client may not serialize undefined value.");
      else if (Array.isArray(r)) {
        for (let s = r.length - 1; s >= 0; --s) t.push(r[s]);
        ae(ze, r.length);
        continue;
      } else if (typeof r.byteLength === "number") {
        It(r.length * 2), ae(Ne, r.length), I.set(r, A), A += r.byteLength;
        continue;
      } else if (typeof r === "object") {
        if (r instanceof Je.NumericValue) {
          let o = r.string.indexOf("."), a = o === -1 ? 0 : o - r.string.length + 1, c = BigInt(r.string.replace(".", ""));
          I[A++] = 196, t.push(c), t.push(a), ae(ze, 2);
          continue;
        }
        if (r[kt]) if ("tag" in r && "value" in r) {
          t.push(r.value), ae(us, r.tag);
          continue;
        } else throw Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(r));
        let s = Object.keys(r);
        for (let o = s.length - 1; o >= 0; --o) {
          let a = s[o];
          t.push(r[a]), t.push(a);
        }
        ae(We, s.length);
        continue;
      }
      throw Error(`data type ${r?.constructor?.name ?? typeof r} not compatible for encoding.`);
    }
  }
  var Ze = { deserialize(e) {
    return Ko(e), le(0, e.length);
  }, serialize(e) {
    try {
      return aa(e), os();
    } catch (t) {
      throw os(), t;
    }
  }, resizeEncodingBuffer(e) {
    Mt(e);
  } }, ps = (e, t) => $e.collectBody(e, t).then(async (r) => {
    if (r.length) try {
      return Ze.deserialize(r);
    } catch (s) {
      throw Object.defineProperty(s, "$responseBodyText", { value: t.utf8Encoder(r) }), s;
    }
    return {};
  }), Ke = (e) => vt({ tag: 1, value: e.getTime() / 1e3 }), ca = async (e, t) => {
    let r = await ps(e, t);
    return r.message = r.message ?? r.Message, r;
  }, ms = (e, t) => {
    let r = (o) => {
      let a = o;
      if (typeof a === "number") a = a.toString();
      if (a.indexOf(",") >= 0) a = a.split(",")[0];
      if (a.indexOf(":") >= 0) a = a.split(":")[0];
      if (a.indexOf("#") >= 0) a = a.split("#")[1];
      return a;
    };
    if (t.__type !== void 0) return r(t.__type);
    let s = Object.keys(t).find((o) => o.toLowerCase() === "code");
    if (s && t[s] !== void 0) return r(t[s]);
  }, ua = (e) => {
    if (String(e.headers["smithy-protocol"]).toLowerCase() !== "rpc-v2-cbor") throw Error("Malformed RPCv2 CBOR response, status: " + e.statusCode);
  }, la = async (e, t, r, s, o) => {
    let { hostname: a, protocol: c = "https", port: d, path: f } = await e.endpoint(), m = { protocol: c, hostname: a, port: d, method: "POST", path: f.endsWith("/") ? f.slice(0, -1) + r : f + r, headers: { ...t } };
    if (s !== void 0) m.hostname = s;
    if (o !== void 0) {
      m.body = o;
      try {
        m.headers["content-length"] = String(qo.calculateBodyLength(o));
      } catch (y) {
      }
    }
    return new jo.HttpRequest(m);
  };
  class $t extends $e.SerdeContext {
    createSerializer() {
      let e = new Bt();
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new Lt();
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class Bt extends $e.SerdeContext {
    value;
    write(e, t) {
      this.value = this.serialize(e, t);
    }
    serialize(e, t) {
      let r = Ae.NormalizedSchema.of(e);
      if (t == null) {
        if (r.isIdempotencyToken()) return Je.generateIdempotencyToken();
        return t;
      }
      if (r.isBlobSchema()) {
        if (typeof t === "string") return (this.serdeContext?.base64Decoder ?? cs.fromBase64)(t);
        return t;
      }
      if (r.isTimestampSchema()) {
        if (typeof t === "number" || typeof t === "bigint") return Ke(new Date(Number(t) / 1e3 | 0));
        return Ke(t);
      }
      if (typeof t === "function" || typeof t === "object") {
        let s = t;
        if (r.isListSchema() && Array.isArray(s)) {
          let a = !!r.getMergedTraits().sparse, c = [], d = 0;
          for (let f of s) {
            let m = this.serialize(r.getValueSchema(), f);
            if (m != null || a) c[d++] = m;
          }
          return c;
        }
        if (s instanceof Date) return Ke(s);
        let o = {};
        if (r.isMapSchema()) {
          let a = !!r.getMergedTraits().sparse;
          for (let c of Object.keys(s)) {
            let d = this.serialize(r.getValueSchema(), s[c]);
            if (d != null || a) o[c] = d;
          }
        } else if (r.isStructSchema()) for (let [a, c] of r.structIterator()) {
          let d = this.serialize(c, s[a]);
          if (d != null) o[a] = d;
        }
        else if (r.isDocumentSchema()) for (let a of Object.keys(s)) o[a] = this.serialize(r.getValueSchema(), s[a]);
        return o;
      }
      return t;
    }
    flush() {
      let e = Ze.serialize(this.value);
      return this.value = void 0, e;
    }
  }
  class Lt extends $e.SerdeContext {
    read(e, t) {
      let r = Ze.deserialize(t);
      return this.readValue(e, r);
    }
    readValue(e, t) {
      let r = Ae.NormalizedSchema.of(e);
      if (r.isTimestampSchema() && typeof t === "number") return Je._parseEpochTimestamp(t);
      if (r.isBlobSchema()) {
        if (typeof t === "string") return (this.serdeContext?.base64Decoder ?? cs.fromBase64)(t);
        return t;
      }
      if (typeof t > "u" || typeof t === "boolean" || typeof t === "number" || typeof t === "string" || typeof t === "bigint" || typeof t === "symbol") return t;
      else if (typeof t === "function" || typeof t === "object") {
        if (t === null) return null;
        if ("byteLength" in t) return t;
        if (t instanceof Date) return t;
        if (r.isDocumentSchema()) return t;
        if (r.isListSchema()) {
          let o = [], a = r.getValueSchema(), c = !!r.getMergedTraits().sparse;
          for (let d of t) {
            let f = this.readValue(a, d);
            if (f != null || c) o.push(f);
          }
          return o;
        }
        let s = {};
        if (r.isMapSchema()) {
          let o = !!r.getMergedTraits().sparse, a = r.getValueSchema();
          for (let c of Object.keys(t)) {
            let d = this.readValue(a, t[c]);
            if (d != null || o) s[c] = d;
          }
        } else if (r.isStructSchema()) for (let [o, a] of r.structIterator()) {
          let c = this.readValue(a, t[o]);
          if (c != null) s[o] = c;
        }
        return s;
      } else return t;
    }
  }
  class gs extends $e.RpcProtocol {
    codec = new $t();
    serializer = this.codec.createSerializer();
    deserializer = this.codec.createDeserializer();
    constructor({ defaultNamespace: e }) {
      super({ defaultNamespace: e });
    }
    getShapeId() {
      return "smithy.protocols#rpcv2Cbor";
    }
    getPayloadCodec() {
      return this.codec;
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (Object.assign(s.headers, { "content-type": this.getDefaultContentType(), "smithy-protocol": "rpc-v2-cbor", accept: this.getDefaultContentType() }), Ae.deref(e.input) === "unit") delete s.body, delete s.headers["content-type"];
      else {
        if (!s.body) this.serializer.write(15, {}), s.body = this.serializer.flush();
        try {
          s.headers["content-length"] = String(s.body.byteLength);
        } catch (d) {
        }
      }
      let { service: o, operation: a } = Ho.getSmithyContext(r), c = `/service/${o}/operation/${a}`;
      if (s.path.endsWith("/")) s.path += c.slice(1);
      else s.path += c;
      return s;
    }
    async deserializeResponse(e, t, r) {
      return super.deserializeResponse(e, t, r);
    }
    async handleError(e, t, r, s, o) {
      let a = ms(r, s) ?? "Unknown", c = this.options.defaultNamespace;
      if (a.includes("#")) [c] = a.split("#");
      let d = { $metadata: o, $fault: r.statusCode <= 500 ? "client" : "server" }, f = Ae.TypeRegistry.for(c), m;
      try {
        m = f.getSchema(a);
      } catch (R) {
        if (s.Message) s.message = s.Message;
        let F = Ae.TypeRegistry.for("smithy.ts.sdk.synthetic." + c), k = F.getBaseException();
        if (k) {
          let W = F.getErrorCtor(k);
          throw Object.assign(new W({ name: a }), d, s);
        }
        throw Object.assign(Error(a), d, s);
      }
      let y = Ae.NormalizedSchema.of(m), b = f.getErrorCtor(m), x = s.message ?? s.Message ?? "Unknown", N = new b(x), T = {};
      for (let [R, F] of y.structIterator()) T[R] = this.deserializer.readValue(F, s[R]);
      throw Object.assign(N, d, { $fault: y.getMergedTraits().error, message: x }, T);
    }
    getDefaultContentType() {
      return "application/cbor";
    }
  }
  da.CborCodec = $t;
  da.CborShapeDeserializer = Lt;
  da.CborShapeSerializer = Bt;
  da.SmithyRpcV2CborProtocol = gs;
  da.buildHttpRpcRequest = la;
  da.cbor = Ze;
  da.checkCborResponse = ua;
  da.dateToTag = Ke;
  da.loadSmithyRpcV2CborErrorCode = ms;
  da.parseCborBody = ps;
  da.parseCborErrorBody = ca;
  da.tag = vt;
  da.tagSymbol = kt;
});
var Es = (0, import_chunk_w1d7ygsk.V)(function(Eh, ys) {
  (() => {
    var e = { d: (n, i) => {
      for (var u in i) e.o(i, u) && !e.o(n, u) && Object.defineProperty(n, u, { enumerable: true, get: i[u] });
    }, o: (n, i) => Object.prototype.hasOwnProperty.call(n, i), r: (n) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: true });
    } }, t = {};
    e.r(t), e.d(t, { XMLBuilder: () => to, XMLParser: () => Mr, XMLValidator: () => ro });
    let r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", s = new RegExp("^[" + r + "][" + r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
    function o(n, i) {
      let u = [], l = i.exec(n);
      for (; l; ) {
        let p = [];
        p.startIndex = i.lastIndex - l[0].length;
        let h = l.length;
        for (let S = 0; S < h; S++) p.push(l[S]);
        u.push(p), l = i.exec(n);
      }
      return u;
    }
    let a = function(n) {
      return s.exec(n) != null;
    }, c = ["hasOwnProperty", "toString", "valueOf", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__"], d = ["__proto__", "constructor", "prototype"], f = { allowBooleanAttributes: false, unpairedTags: [] };
    function m(n, i) {
      i = Object.assign({}, f, i);
      let u = [], l = false, p = false;
      n[0] === "\uFEFF" && (n = n.substr(1));
      for (let h = 0; h < n.length; h++) if (n[h] === "<" && n[h + 1] === "?") {
        if (h += 2, h = b(n, h), h.err) return h;
      } else {
        if (n[h] !== "<") {
          if (y(n[h])) continue;
          return O("InvalidChar", "char '" + n[h] + "' is not expected.", q(n, h));
        }
        {
          let S = h;
          if (h++, n[h] === "!") {
            h = x(n, h);
            continue;
          }
          {
            let g = false;
            n[h] === "/" && (g = true, h++);
            let E = "";
            for (; h < n.length && n[h] !== ">" && n[h] !== " " && n[h] !== "	" && n[h] !== `
` && n[h] !== "\r"; h++) E += n[h];
            if (E = E.trim(), E[E.length - 1] === "/" && (E = E.substring(0, E.length - 1), h--), !Pe(E)) {
              let _;
              return _ = E.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + E + "' is an invalid name.", O("InvalidTag", _, q(n, h));
            }
            let w = R(n, h);
            if (w === false) return O("InvalidAttr", "Attributes for '" + E + "' have open quote.", q(n, h));
            let C = w.value;
            if (h = w.index, C[C.length - 1] === "/") {
              let _ = h - C.length;
              C = C.substring(0, C.length - 1);
              let v = k(C, i);
              if (v !== true) return O(v.err.code, v.err.msg, q(n, _ + v.err.line));
              l = true;
            } else if (g) {
              if (!w.tagClosed) return O("InvalidTag", "Closing tag '" + E + "' doesn't have proper closing.", q(n, h));
              if (C.trim().length > 0) return O("InvalidTag", "Closing tag '" + E + "' can't have attributes or invalid starting.", q(n, S));
              if (u.length === 0) return O("InvalidTag", "Closing tag '" + E + "' has not been opened.", q(n, S));
              {
                let _ = u.pop();
                if (E !== _.tagName) {
                  let v = q(n, _.tagStartPos);
                  return O("InvalidTag", "Expected closing tag '" + _.tagName + "' (opened in line " + v.line + ", col " + v.col + ") instead of closing tag '" + E + "'.", q(n, S));
                }
                u.length == 0 && (p = true);
              }
            } else {
              let _ = k(C, i);
              if (_ !== true) return O(_.err.code, _.err.msg, q(n, h - C.length + _.err.line));
              if (p === true) return O("InvalidXml", "Multiple possible root nodes found.", q(n, h));
              i.unpairedTags.indexOf(E) !== -1 || u.push({ tagName: E, tagStartPos: S }), l = true;
            }
            for (h++; h < n.length; h++) if (n[h] === "<") {
              if (n[h + 1] === "!") {
                h++, h = x(n, h);
                continue;
              }
              if (n[h + 1] !== "?") break;
              if (h = b(n, ++h), h.err) return h;
            } else if (n[h] === "&") {
              let _ = W(n, h);
              if (_ == -1) return O("InvalidChar", "char '&' is not expected.", q(n, h));
              h = _;
            } else if (p === true && !y(n[h])) return O("InvalidXml", "Extra text at the end", q(n, h));
            n[h] === "<" && h--;
          }
        }
      }
      return l ? u.length == 1 ? O("InvalidTag", "Unclosed tag '" + u[0].tagName + "'.", q(n, u[0].tagStartPos)) : !(u.length > 0) || O("InvalidXml", "Invalid '" + JSON.stringify(u.map((h) => h.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : O("InvalidXml", "Start tag expected.", 1);
    }
    function y(n) {
      return n === " " || n === "	" || n === `
` || n === "\r";
    }
    function b(n, i) {
      let u = i;
      for (; i < n.length; i++) if (n[i] == "?" || n[i] == " ") {
        let l = n.substr(u, i - u);
        if (i > 5 && l === "xml") return O("InvalidXml", "XML declaration allowed only at the start of the document.", q(n, i));
        if (n[i] == "?" && n[i + 1] == ">") {
          i++;
          break;
        }
        continue;
      }
      return i;
    }
    function x(n, i) {
      if (n.length > i + 5 && n[i + 1] === "-" && n[i + 2] === "-") {
        for (i += 3; i < n.length; i++) if (n[i] === "-" && n[i + 1] === "-" && n[i + 2] === ">") {
          i += 2;
          break;
        }
      } else if (n.length > i + 8 && n[i + 1] === "D" && n[i + 2] === "O" && n[i + 3] === "C" && n[i + 4] === "T" && n[i + 5] === "Y" && n[i + 6] === "P" && n[i + 7] === "E") {
        let u = 1;
        for (i += 8; i < n.length; i++) if (n[i] === "<") u++;
        else if (n[i] === ">" && (u--, u === 0)) break;
      } else if (n.length > i + 9 && n[i + 1] === "[" && n[i + 2] === "C" && n[i + 3] === "D" && n[i + 4] === "A" && n[i + 5] === "T" && n[i + 6] === "A" && n[i + 7] === "[") {
        for (i += 8; i < n.length; i++) if (n[i] === "]" && n[i + 1] === "]" && n[i + 2] === ">") {
          i += 2;
          break;
        }
      }
      return i;
    }
    let N = '"', T = "'";
    function R(n, i) {
      let u = "", l = "", p = false;
      for (; i < n.length; i++) {
        if (n[i] === N || n[i] === T) l === "" ? l = n[i] : l !== n[i] || (l = "");
        else if (n[i] === ">" && l === "") {
          p = true;
          break;
        }
        u += n[i];
      }
      return l === "" && { value: u, index: i, tagClosed: p };
    }
    let F = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function k(n, i) {
      let u = o(n, F), l = {};
      for (let p = 0; p < u.length; p++) {
        if (u[p][1].length === 0) return O("InvalidAttr", "Attribute '" + u[p][2] + "' has no space in starting.", K(u[p]));
        if (u[p][3] !== void 0 && u[p][4] === void 0) return O("InvalidAttr", "Attribute '" + u[p][2] + "' is without value.", K(u[p]));
        if (u[p][3] === void 0 && !i.allowBooleanAttributes) return O("InvalidAttr", "boolean attribute '" + u[p][2] + "' is not allowed.", K(u[p]));
        let h = u[p][2];
        if (!ee(h)) return O("InvalidAttr", "Attribute '" + h + "' is an invalid name.", K(u[p]));
        if (Object.prototype.hasOwnProperty.call(l, h)) return O("InvalidAttr", "Attribute '" + h + "' is repeated.", K(u[p]));
        l[h] = 1;
      }
      return true;
    }
    function W(n, i) {
      if (n[++i] === ";") return -1;
      if (n[i] === "#") return (function(l, p) {
        let h = /\d/;
        for (l[p] === "x" && (p++, h = /[\da-fA-F]/); p < l.length; p++) {
          if (l[p] === ";") return p;
          if (!l[p].match(h)) break;
        }
        return -1;
      })(n, ++i);
      let u = 0;
      for (; i < n.length; i++, u++) if (!(n[i].match(/\w/) && u < 20)) {
        if (n[i] === ";") break;
        return -1;
      }
      return i;
    }
    function O(n, i, u) {
      return { err: { code: n, msg: i, line: u.line || u, col: u.col } };
    }
    function ee(n) {
      return a(n);
    }
    function Pe(n) {
      return a(n);
    }
    function q(n, i) {
      let u = n.substring(0, i).split(/\r?\n/);
      return { line: u.length, col: u[u.length - 1].length + 1 };
    }
    function K(n) {
      return n.startIndex + n[1].length;
    }
    let Nr = (n) => c.includes(n) ? "__" + n : n, xi = { preserveOrder: false, attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, removeNSPrefix: false, allowBooleanAttributes: false, parseTagValue: true, parseAttributeValue: false, trimValues: true, cdataPropName: false, numberParseOptions: { hex: true, leadingZeros: true, eNotation: true }, tagValueProcessor: function(n, i) {
      return i;
    }, attributeValueProcessor: function(n, i) {
      return i;
    }, stopNodes: [], alwaysCreateTextNode: false, isArray: () => false, commentPropName: false, unpairedTags: [], processEntities: true, htmlEntities: false, ignoreDeclaration: false, ignorePiTags: false, transformTagName: false, transformAttributeName: false, updateTag: function(n, i, u) {
      return n;
    }, captureMetaData: false, maxNestedTags: 100, strictReservedNames: true, jPath: true, onDangerousProperty: Nr };
    function bi(n, i) {
      if (typeof n != "string") return;
      let u = n.toLowerCase();
      if (c.some((l) => u === l.toLowerCase())) throw Error(`[SECURITY] Invalid ${i}: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
      if (d.some((l) => u === l.toLowerCase())) throw Error(`[SECURITY] Invalid ${i}: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
    }
    function Tr(n) {
      return typeof n == "boolean" ? { enabled: n, maxEntitySize: 1e4, maxExpansionDepth: 10, maxTotalExpansions: 1e3, maxExpandedLength: 1e5, maxEntityCount: 100, allowedTags: null, tagFilter: null } : typeof n == "object" && n !== null ? { enabled: n.enabled !== false, maxEntitySize: Math.max(1, n.maxEntitySize ?? 1e4), maxExpansionDepth: Math.max(1, n.maxExpansionDepth ?? 10), maxTotalExpansions: Math.max(1, n.maxTotalExpansions ?? 1e3), maxExpandedLength: Math.max(1, n.maxExpandedLength ?? 1e5), maxEntityCount: Math.max(1, n.maxEntityCount ?? 100), allowedTags: n.allowedTags ?? null, tagFilter: n.tagFilter ?? null } : Tr(true);
    }
    let Ni = function(n) {
      let i = Object.assign({}, xi, n), u = [{ value: i.attributeNamePrefix, name: "attributeNamePrefix" }, { value: i.attributesGroupName, name: "attributesGroupName" }, { value: i.textNodeName, name: "textNodeName" }, { value: i.cdataPropName, name: "cdataPropName" }, { value: i.commentPropName, name: "commentPropName" }];
      for (let { value: l, name: p } of u) l && bi(l, p);
      return i.onDangerousProperty === null && (i.onDangerousProperty = Nr), i.processEntities = Tr(i.processEntities), i.stopNodes && Array.isArray(i.stopNodes) && (i.stopNodes = i.stopNodes.map((l) => typeof l == "string" && l.startsWith("*.") ? ".." + l.substring(2) : l)), i;
    }, pt;
    pt = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
    class oe {
      constructor(n) {
        this.tagname = n, this.child = [], this[":@"] = /* @__PURE__ */ Object.create(null);
      }
      add(n, i) {
        n === "__proto__" && (n = "#__proto__"), this.child.push({ [n]: i });
      }
      addChild(n, i) {
        n.tagname === "__proto__" && (n.tagname = "#__proto__"), n[":@"] && Object.keys(n[":@"]).length > 0 ? this.child.push({ [n.tagname]: n.child, ":@": n[":@"] }) : this.child.push({ [n.tagname]: n.child }), i !== void 0 && (this.child[this.child.length - 1][pt] = { startIndex: i });
      }
      static getMetaDataSymbol() {
        return pt;
      }
    }
    class _r {
      constructor(n) {
        this.suppressValidationErr = !n, this.options = n;
      }
      readDocType(n, i) {
        let u = /* @__PURE__ */ Object.create(null), l = 0;
        if (n[i + 3] !== "O" || n[i + 4] !== "C" || n[i + 5] !== "T" || n[i + 6] !== "Y" || n[i + 7] !== "P" || n[i + 8] !== "E") throw Error("Invalid Tag instead of DOCTYPE");
        {
          i += 9;
          let p = 1, h = false, S = false, g = "";
          for (; i < n.length; i++) if (n[i] !== "<" || S) if (n[i] === ">") {
            if (S ? n[i - 1] === "-" && n[i - 2] === "-" && (S = false, p--) : p--, p === 0) break;
          } else n[i] === "[" ? h = true : g += n[i];
          else {
            if (h && we(n, "!ENTITY", i)) {
              let E, w;
              if (i += 7, [E, w, i] = this.readEntityExp(n, i + 1, this.suppressValidationErr), w.indexOf("&") === -1) {
                if (this.options.enabled !== false && this.options.maxEntityCount != null && l >= this.options.maxEntityCount) throw Error(`Entity count (${l + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
                let C = E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                u[E] = { regx: RegExp(`&${C};`, "g"), val: w }, l++;
              }
            } else if (h && we(n, "!ELEMENT", i)) {
              i += 8;
              let { index: E } = this.readElementExp(n, i + 1);
              i = E;
            } else if (h && we(n, "!ATTLIST", i)) i += 8;
            else if (h && we(n, "!NOTATION", i)) {
              i += 9;
              let { index: E } = this.readNotationExp(n, i + 1, this.suppressValidationErr);
              i = E;
            } else {
              if (!we(n, "!--", i)) throw Error("Invalid DOCTYPE");
              S = true;
            }
            p++, g = "";
          }
          if (p !== 0) throw Error("Unclosed DOCTYPE");
        }
        return { entities: u, i };
      }
      readEntityExp(n, i) {
        let u = i = J(n, i);
        for (; i < n.length && !/\s/.test(n[i]) && n[i] !== '"' && n[i] !== "'"; ) i++;
        let l = n.substring(u, i);
        if (ke(l), i = J(n, i), !this.suppressValidationErr) {
          if (n.substring(i, i + 6).toUpperCase() === "SYSTEM") throw Error("External entities are not supported");
          if (n[i] === "%") throw Error("Parameter entities are not supported");
        }
        let p = "";
        if ([i, p] = this.readIdentifierVal(n, i, "entity"), this.options.enabled !== false && this.options.maxEntitySize != null && p.length > this.options.maxEntitySize) throw Error(`Entity "${l}" size (${p.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
        return [l, p, --i];
      }
      readNotationExp(n, i) {
        let u = i = J(n, i);
        for (; i < n.length && !/\s/.test(n[i]); ) i++;
        let l = n.substring(u, i);
        !this.suppressValidationErr && ke(l), i = J(n, i);
        let p = n.substring(i, i + 6).toUpperCase();
        if (!this.suppressValidationErr && p !== "SYSTEM" && p !== "PUBLIC") throw Error(`Expected SYSTEM or PUBLIC, found "${p}"`);
        i += p.length, i = J(n, i);
        let h = null, S = null;
        if (p === "PUBLIC") [i, h] = this.readIdentifierVal(n, i, "publicIdentifier"), n[i = J(n, i)] !== '"' && n[i] !== "'" || ([i, S] = this.readIdentifierVal(n, i, "systemIdentifier"));
        else if (p === "SYSTEM" && ([i, S] = this.readIdentifierVal(n, i, "systemIdentifier"), !this.suppressValidationErr && !S)) throw Error("Missing mandatory system identifier for SYSTEM notation");
        return { notationName: l, publicIdentifier: h, systemIdentifier: S, index: --i };
      }
      readIdentifierVal(n, i, u) {
        let l = "", p = n[i];
        if (p !== '"' && p !== "'") throw Error(`Expected quoted string, found "${p}"`);
        let h = ++i;
        for (; i < n.length && n[i] !== p; ) i++;
        if (l = n.substring(h, i), n[i] !== p) throw Error(`Unterminated ${u} value`);
        return [++i, l];
      }
      readElementExp(n, i) {
        let u = i = J(n, i);
        for (; i < n.length && !/\s/.test(n[i]); ) i++;
        let l = n.substring(u, i);
        if (!this.suppressValidationErr && !a(l)) throw Error(`Invalid element name: "${l}"`);
        let p = "";
        if (n[i = J(n, i)] === "E" && we(n, "MPTY", i)) i += 4;
        else if (n[i] === "A" && we(n, "NY", i)) i += 2;
        else if (n[i] === "(") {
          let h = ++i;
          for (; i < n.length && n[i] !== ")"; ) i++;
          if (p = n.substring(h, i), n[i] !== ")") throw Error("Unterminated content model");
        } else if (!this.suppressValidationErr) throw Error(`Invalid Element Expression, found "${n[i]}"`);
        return { elementName: l, contentModel: p.trim(), index: i };
      }
      readAttlistExp(n, i) {
        let u = i = J(n, i);
        for (; i < n.length && !/\s/.test(n[i]); ) i++;
        let l = n.substring(u, i);
        for (ke(l), u = i = J(n, i); i < n.length && !/\s/.test(n[i]); ) i++;
        let p = n.substring(u, i);
        if (!ke(p)) throw Error(`Invalid attribute name: "${p}"`);
        i = J(n, i);
        let h = "";
        if (n.substring(i, i + 8).toUpperCase() === "NOTATION") {
          if (h = "NOTATION", n[i = J(n, i += 8)] !== "(") throw Error(`Expected '(', found "${n[i]}"`);
          i++;
          let g = [];
          for (; i < n.length && n[i] !== ")"; ) {
            let E = i;
            for (; i < n.length && n[i] !== "|" && n[i] !== ")"; ) i++;
            let w = n.substring(E, i);
            if (w = w.trim(), !ke(w)) throw Error(`Invalid notation name: "${w}"`);
            g.push(w), n[i] === "|" && (i++, i = J(n, i));
          }
          if (n[i] !== ")") throw Error("Unterminated list of notations");
          i++, h += " (" + g.join("|") + ")";
        } else {
          let g = i;
          for (; i < n.length && !/\s/.test(n[i]); ) i++;
          h += n.substring(g, i);
          let E = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
          if (!this.suppressValidationErr && !E.includes(h.toUpperCase())) throw Error(`Invalid attribute type: "${h}"`);
        }
        i = J(n, i);
        let S = "";
        return n.substring(i, i + 8).toUpperCase() === "#REQUIRED" ? (S = "#REQUIRED", i += 8) : n.substring(i, i + 7).toUpperCase() === "#IMPLIED" ? (S = "#IMPLIED", i += 7) : [i, S] = this.readIdentifierVal(n, i, "ATTLIST"), { elementName: l, attributeName: p, attributeType: h, defaultValue: S, index: i };
      }
    }
    let J = (n, i) => {
      for (; i < n.length && /\s/.test(n[i]); ) i++;
      return i;
    };
    function we(n, i, u) {
      for (let l = 0; l < i.length; l++) if (i[l] !== n[u + l + 1]) return false;
      return true;
    }
    function ke(n) {
      if (a(n)) return n;
      throw Error(`Invalid entity name ${n}`);
    }
    let Ti = /^[-+]?0x[a-fA-F0-9]+$/, _i = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Ci = { hex: true, leadingZeros: true, decimalPoint: ".", eNotation: true, infinity: "original" }, Ai = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/, Ri = /* @__PURE__ */ new Set(["push", "pop", "reset", "updateCurrent", "restore"]);
    class He {
      constructor(n = {}) {
        this.separator = n.separator || ".", this.path = [], this.siblingStacks = [];
      }
      push(n, i = null, u = null) {
        this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
        let l = this.path.length;
        this.siblingStacks[l] || (this.siblingStacks[l] = /* @__PURE__ */ new Map());
        let p = this.siblingStacks[l], h = u ? `${u}:${n}` : n, S = p.get(h) || 0, g = 0;
        for (let w of p.values()) g += w;
        p.set(h, S + 1);
        let E = { tag: n, position: g, counter: S };
        u != null && (E.namespace = u), i != null && (E.values = i), this.path.push(E);
      }
      pop() {
        if (this.path.length === 0) return;
        let n = this.path.pop();
        return this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1), n;
      }
      updateCurrent(n) {
        if (this.path.length > 0) {
          let i = this.path[this.path.length - 1];
          n != null && (i.values = n);
        }
      }
      getCurrentTag() {
        return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
      }
      getCurrentNamespace() {
        return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
      }
      getAttrValue(n) {
        if (this.path.length === 0) return;
        return this.path[this.path.length - 1].values?.[n];
      }
      hasAttr(n) {
        if (this.path.length === 0) return false;
        let i = this.path[this.path.length - 1];
        return i.values !== void 0 && n in i.values;
      }
      getPosition() {
        return this.path.length === 0 ? -1 : this.path[this.path.length - 1].position ?? 0;
      }
      getCounter() {
        return this.path.length === 0 ? -1 : this.path[this.path.length - 1].counter ?? 0;
      }
      getIndex() {
        return this.getPosition();
      }
      getDepth() {
        return this.path.length;
      }
      toString(n, i = true) {
        let u = n || this.separator;
        return this.path.map((l) => i && l.namespace ? `${l.namespace}:${l.tag}` : l.tag).join(u);
      }
      toArray() {
        return this.path.map((n) => n.tag);
      }
      reset() {
        this.path = [], this.siblingStacks = [];
      }
      matches(n) {
        let i = n.segments;
        return i.length !== 0 && (n.hasDeepWildcard() ? this._matchWithDeepWildcard(i) : this._matchSimple(i));
      }
      _matchSimple(n) {
        if (this.path.length !== n.length) return false;
        for (let i = 0; i < n.length; i++) {
          let u = n[i], l = this.path[i], p = i === this.path.length - 1;
          if (!this._matchSegment(u, l, p)) return false;
        }
        return true;
      }
      _matchWithDeepWildcard(n) {
        let i = this.path.length - 1, u = n.length - 1;
        for (; u >= 0 && i >= 0; ) {
          let l = n[u];
          if (l.type === "deep-wildcard") {
            if (u--, u < 0) return true;
            let p = n[u], h = false;
            for (let S = i; S >= 0; S--) {
              let g = S === this.path.length - 1;
              if (this._matchSegment(p, this.path[S], g)) {
                i = S - 1, u--, h = true;
                break;
              }
            }
            if (!h) return false;
          } else {
            let p = i === this.path.length - 1;
            if (!this._matchSegment(l, this.path[i], p)) return false;
            i--, u--;
          }
        }
        return u < 0;
      }
      _matchSegment(n, i, u) {
        if (n.tag !== "*" && n.tag !== i.tag) return false;
        if (n.namespace !== void 0 && n.namespace !== "*" && n.namespace !== i.namespace) return false;
        if (n.attrName !== void 0) {
          if (!u) return false;
          if (!i.values || !(n.attrName in i.values)) return false;
          if (n.attrValue !== void 0) {
            let l = i.values[n.attrName];
            if (String(l) !== String(n.attrValue)) return false;
          }
        }
        if (n.position !== void 0) {
          if (!u) return false;
          let l = i.counter ?? 0;
          if (n.position === "first" && l !== 0) return false;
          if (n.position === "odd" && l % 2 != 1) return false;
          if (n.position === "even" && l % 2 != 0) return false;
          if (n.position === "nth" && l !== n.positionValue) return false;
        }
        return true;
      }
      snapshot() {
        return { path: this.path.map((n) => ({ ...n })), siblingStacks: this.siblingStacks.map((n) => new Map(n)) };
      }
      restore(n) {
        this.path = n.path.map((i) => ({ ...i })), this.siblingStacks = n.siblingStacks.map((i) => new Map(i));
      }
      readOnly() {
        return new Proxy(this, { get(n, i, u) {
          if (Ri.has(i)) return () => {
            throw TypeError(`Cannot call '${i}' on a read-only Matcher. Obtain a writable instance to mutate state.`);
          };
          let l = Reflect.get(n, i, u);
          return i === "path" || i === "siblingStacks" ? Object.freeze(Array.isArray(l) ? l.map((p) => p instanceof Map ? Object.freeze(new Map(p)) : Object.freeze({ ...p })) : l) : typeof l == "function" ? l.bind(n) : l;
        }, set(n, i) {
          throw TypeError(`Cannot set property '${String(i)}' on a read-only Matcher.`);
        }, deleteProperty(n, i) {
          throw TypeError(`Cannot delete property '${String(i)}' from a read-only Matcher.`);
        } });
      }
    }
    class xe {
      constructor(n, i = {}) {
        this.pattern = n, this.separator = i.separator || ".", this.segments = this._parse(n), this._hasDeepWildcard = this.segments.some((u) => u.type === "deep-wildcard"), this._hasAttributeCondition = this.segments.some((u) => u.attrName !== void 0), this._hasPositionSelector = this.segments.some((u) => u.position !== void 0);
      }
      _parse(n) {
        let i = [], u = 0, l = "";
        for (; u < n.length; ) n[u] === this.separator ? u + 1 < n.length && n[u + 1] === this.separator ? (l.trim() && (i.push(this._parseSegment(l.trim())), l = ""), i.push({ type: "deep-wildcard" }), u += 2) : (l.trim() && i.push(this._parseSegment(l.trim())), l = "", u++) : (l += n[u], u++);
        return l.trim() && i.push(this._parseSegment(l.trim())), i;
      }
      _parseSegment(n) {
        let i = { type: "tag" }, u = null, l = n, p = n.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
        if (p && (l = p[1] + p[3], p[2])) {
          let w = p[2].slice(1, -1);
          w && (u = w);
        }
        let h, S, g = l;
        if (l.includes("::")) {
          let w = l.indexOf("::");
          if (h = l.substring(0, w).trim(), g = l.substring(w + 2).trim(), !h) throw Error(`Invalid namespace in pattern: ${n}`);
        }
        let E = null;
        if (g.includes(":")) {
          let w = g.lastIndexOf(":"), C = g.substring(0, w).trim(), _ = g.substring(w + 1).trim();
          ["first", "last", "odd", "even"].includes(_) || /^nth\(\d+\)$/.test(_) ? (S = C, E = _) : S = g;
        } else S = g;
        if (!S) throw Error(`Invalid segment pattern: ${n}`);
        if (i.tag = S, h && (i.namespace = h), u) if (u.includes("=")) {
          let w = u.indexOf("=");
          i.attrName = u.substring(0, w).trim(), i.attrValue = u.substring(w + 1).trim();
        } else i.attrName = u.trim();
        if (E) {
          let w = E.match(/^nth\((\d+)\)$/);
          w ? (i.position = "nth", i.positionValue = parseInt(w[1], 10)) : i.position = E;
        }
        return i;
      }
      get length() {
        return this.segments.length;
      }
      hasDeepWildcard() {
        return this._hasDeepWildcard;
      }
      hasAttributeCondition() {
        return this._hasAttributeCondition;
      }
      hasPositionSelector() {
        return this._hasPositionSelector;
      }
      toString() {
        return this.pattern;
      }
    }
    function Ii(n, i) {
      if (!n) return {};
      let u = i.attributesGroupName ? n[i.attributesGroupName] : n;
      if (!u) return {};
      let l = {};
      for (let p in u) p.startsWith(i.attributeNamePrefix) ? l[p.substring(i.attributeNamePrefix.length)] = u[p] : l[p] = u[p];
      return l;
    }
    function Oi(n) {
      if (!n || typeof n != "string") return;
      let i = n.indexOf(":");
      if (i !== -1 && i > 0) {
        let u = n.substring(0, i);
        if (u !== "xmlns") return u;
      }
    }
    class Cr {
      constructor(n) {
        var i;
        if (this.options = n, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "\xA2" }, pound: { regex: /&(pound|#163);/g, val: "\xA3" }, yen: { regex: /&(yen|#165);/g, val: "\xA5" }, euro: { regex: /&(euro|#8364);/g, val: "\u20AC" }, copyright: { regex: /&(copy|#169);/g, val: "\xA9" }, reg: { regex: /&(reg|#174);/g, val: "\xAE" }, inr: { regex: /&(inr|#8377);/g, val: "\u20B9" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (u, l) => Rr(l, 10, "&#") }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (u, l) => Rr(l, 16, "&#x") } }, this.addExternalEntities = Mi, this.parseXml = zi, this.parseTextData = Di, this.resolveNameSpace = Pi, this.buildAttributesMap = vi, this.isItStopNode = Ui, this.replaceEntitiesValue = Bi, this.readStopNodeData = Vi, this.saveTextToParentTag = Li, this.addChild = $i, this.ignoreAttributesFn = typeof (i = this.options.ignoreAttributes) == "function" ? i : Array.isArray(i) ? (u) => {
          for (let l of i) {
            if (typeof l == "string" && u === l) return true;
            if (l instanceof RegExp && l.test(u)) return true;
          }
        } : () => false, this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.matcher = new He(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = false, this.options.stopNodes && this.options.stopNodes.length > 0) {
          this.stopNodeExpressions = [];
          for (let u = 0; u < this.options.stopNodes.length; u++) {
            let l = this.options.stopNodes[u];
            typeof l == "string" ? this.stopNodeExpressions.push(new xe(l)) : l instanceof xe && this.stopNodeExpressions.push(l);
          }
        }
      }
    }
    function Mi(n) {
      let i = Object.keys(n);
      for (let u = 0; u < i.length; u++) {
        let l = i[u], p = l.replace(/[.\-+*:]/g, "\\.");
        this.lastEntities[l] = { regex: new RegExp("&" + p + ";", "g"), val: n[l] };
      }
    }
    function Di(n, i, u, l, p, h, S) {
      if (n !== void 0 && (this.options.trimValues && !l && (n = n.trim()), n.length > 0)) {
        S || (n = this.replaceEntitiesValue(n, i, u));
        let g = this.options.jPath ? u.toString() : u, E = this.options.tagValueProcessor(i, n, g, p, h);
        return E == null ? n : typeof E != typeof n || E !== n ? E : this.options.trimValues || n.trim() === n ? Ar(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
      }
    }
    function Pi(n) {
      if (this.options.removeNSPrefix) {
        let i = n.split(":"), u = n.charAt(0) === "/" ? "/" : "";
        if (i[0] === "xmlns") return "";
        i.length === 2 && (n = u + i[1]);
      }
      return n;
    }
    let ki = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function vi(n, i, u) {
      if (this.options.ignoreAttributes !== true && typeof n == "string") {
        let l = o(n, ki), p = l.length, h = {}, S = {};
        for (let g = 0; g < p; g++) {
          let E = this.resolveNameSpace(l[g][1]), w = l[g][4];
          if (E.length && w !== void 0) {
            let C = w;
            this.options.trimValues && (C = C.trim()), C = this.replaceEntitiesValue(C, u, this.readonlyMatcher), S[E] = C;
          }
        }
        Object.keys(S).length > 0 && typeof i == "object" && i.updateCurrent && i.updateCurrent(S);
        for (let g = 0; g < p; g++) {
          let E = this.resolveNameSpace(l[g][1]), w = this.options.jPath ? i.toString() : this.readonlyMatcher;
          if (this.ignoreAttributesFn(E, w)) continue;
          let C = l[g][4], _ = this.options.attributeNamePrefix + E;
          if (E.length) if (this.options.transformAttributeName && (_ = this.options.transformAttributeName(_)), _ = Ir(_, this.options), C !== void 0) {
            this.options.trimValues && (C = C.trim()), C = this.replaceEntitiesValue(C, u, this.readonlyMatcher);
            let v = this.options.jPath ? i.toString() : this.readonlyMatcher, M = this.options.attributeValueProcessor(E, C, v);
            h[_] = M == null ? C : typeof M != typeof C || M !== C ? M : Ar(C, this.options.parseAttributeValue, this.options.numberParseOptions);
          } else this.options.allowBooleanAttributes && (h[_] = true);
        }
        if (!Object.keys(h).length) return;
        if (this.options.attributesGroupName) {
          let g = {};
          return g[this.options.attributesGroupName] = h, g;
        }
        return h;
      }
    }
    let zi = function(n) {
      n = n.replace(/\r\n?/g, `
`);
      let i = new oe("!xml"), u = i, l = "";
      this.matcher.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
      let p = new _r(this.options.processEntities);
      for (let h = 0; h < n.length; h++) if (n[h] === "<") if (n[h + 1] === "/") {
        let S = be(n, ">", h, "Closing Tag is not closed."), g = n.substring(h + 2, S).trim();
        if (this.options.removeNSPrefix) {
          let w = g.indexOf(":");
          w !== -1 && (g = g.substr(w + 1));
        }
        g = gt(this.options.transformTagName, g, "", this.options).tagName, u && (l = this.saveTextToParentTag(l, u, this.readonlyMatcher));
        let E = this.matcher.getCurrentTag();
        if (g && this.options.unpairedTags.indexOf(g) !== -1) throw Error(`Unpaired tag can not be used as closing tag: </${g}>`);
        E && this.options.unpairedTags.indexOf(E) !== -1 && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = false, u = this.tagsNodeStack.pop(), l = "", h = S;
      } else if (n[h + 1] === "?") {
        let S = mt(n, h, false, "?>");
        if (!S) throw Error("Pi Tag is not closed.");
        if (l = this.saveTextToParentTag(l, u, this.readonlyMatcher), this.options.ignoreDeclaration && S.tagName === "?xml" || this.options.ignorePiTags) ;
        else {
          let g = new oe(S.tagName);
          g.add(this.options.textNodeName, ""), S.tagName !== S.tagExp && S.attrExpPresent && (g[":@"] = this.buildAttributesMap(S.tagExp, this.matcher, S.tagName)), this.addChild(u, g, this.readonlyMatcher, h);
        }
        h = S.closeIndex + 1;
      } else if (n.substr(h + 1, 3) === "!--") {
        let S = be(n, "-->", h + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          let g = n.substring(h + 4, S - 2);
          l = this.saveTextToParentTag(l, u, this.readonlyMatcher), u.add(this.options.commentPropName, [{ [this.options.textNodeName]: g }]);
        }
        h = S;
      } else if (n.substr(h + 1, 2) === "!D") {
        let S = p.readDocType(n, h);
        this.docTypeEntities = S.entities, h = S.i;
      } else if (n.substr(h + 1, 2) === "![") {
        let S = be(n, "]]>", h, "CDATA is not closed.") - 2, g = n.substring(h + 9, S);
        l = this.saveTextToParentTag(l, u, this.readonlyMatcher);
        let E = this.parseTextData(g, u.tagname, this.readonlyMatcher, true, false, true, true);
        E == null && (E = ""), this.options.cdataPropName ? u.add(this.options.cdataPropName, [{ [this.options.textNodeName]: g }]) : u.add(this.options.textNodeName, E), h = S + 2;
      } else {
        let S = mt(n, h, this.options.removeNSPrefix);
        if (!S) {
          let Z = n.substring(Math.max(0, h - 50), Math.min(n.length, h + 50));
          throw Error(`readTagExp returned undefined at position ${h}. Context: "${Z}"`);
        }
        let { tagName: g, rawTagName: E, tagExp: w, attrExpPresent: C, closeIndex: _ } = S;
        if ({ tagName: g, tagExp: w } = gt(this.options.transformTagName, g, w, this.options), this.options.strictReservedNames && (g === this.options.commentPropName || g === this.options.cdataPropName || g === this.options.textNodeName || g === this.options.attributesGroupName)) throw Error(`Invalid tag name: ${g}`);
        u && l && u.tagname !== "!xml" && (l = this.saveTextToParentTag(l, u, this.readonlyMatcher, false));
        let v = u;
        v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (u = this.tagsNodeStack.pop(), this.matcher.pop());
        let M = false;
        w.length > 0 && w.lastIndexOf("/") === w.length - 1 && (M = true, g[g.length - 1] === "/" ? (g = g.substr(0, g.length - 1), w = g) : w = w.substr(0, w.length - 1), C = g !== w);
        let P, z = null, ne = {};
        P = Oi(E), g !== i.tagname && this.matcher.push(g, {}, P), g !== w && C && (z = this.buildAttributesMap(w, this.matcher, g), z && (ne = Ii(z, this.options))), g !== i.tagname && (this.isCurrentNodeStopNode = this.isItStopNode(this.stopNodeExpressions, this.matcher));
        let H = h;
        if (this.isCurrentNodeStopNode) {
          let Z = "";
          if (M) h = S.closeIndex;
          else if (this.options.unpairedTags.indexOf(g) !== -1) h = S.closeIndex;
          else {
            let wt = this.readStopNodeData(n, E, _ + 1);
            if (!wt) throw Error(`Unexpected end of ${E}`);
            h = wt.i, Z = wt.tagContent;
          }
          let St = new oe(g);
          z && (St[":@"] = z), St.add(this.options.textNodeName, Z), this.matcher.pop(), this.isCurrentNodeStopNode = false, this.addChild(u, St, this.readonlyMatcher, H);
        } else {
          if (M) {
            ({ tagName: g, tagExp: w } = gt(this.options.transformTagName, g, w, this.options));
            let Z = new oe(g);
            z && (Z[":@"] = z), this.addChild(u, Z, this.readonlyMatcher, H), this.matcher.pop(), this.isCurrentNodeStopNode = false;
          } else {
            if (this.options.unpairedTags.indexOf(g) !== -1) {
              let Z = new oe(g);
              z && (Z[":@"] = z), this.addChild(u, Z, this.readonlyMatcher, H), this.matcher.pop(), this.isCurrentNodeStopNode = false, h = S.closeIndex;
              continue;
            }
            {
              let Z = new oe(g);
              if (this.tagsNodeStack.length > this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
              this.tagsNodeStack.push(u), z && (Z[":@"] = z), this.addChild(u, Z, this.readonlyMatcher, H), u = Z;
            }
          }
          l = "", h = _;
        }
      }
      else l += n[h];
      return i.child;
    };
    function $i(n, i, u, l) {
      this.options.captureMetaData || (l = void 0);
      let p = this.options.jPath ? u.toString() : u, h = this.options.updateTag(i.tagname, p, i[":@"]);
      h === false || (typeof h == "string" ? (i.tagname = h, n.addChild(i, l)) : n.addChild(i, l));
    }
    function Bi(n, i, u) {
      let l = this.options.processEntities;
      if (!l || !l.enabled) return n;
      if (l.allowedTags) {
        let p = this.options.jPath ? u.toString() : u;
        if (!(Array.isArray(l.allowedTags) ? l.allowedTags.includes(i) : l.allowedTags(i, p))) return n;
      }
      if (l.tagFilter) {
        let p = this.options.jPath ? u.toString() : u;
        if (!l.tagFilter(i, p)) return n;
      }
      for (let p of Object.keys(this.docTypeEntities)) {
        let h = this.docTypeEntities[p], S = n.match(h.regx);
        if (S) {
          if (this.entityExpansionCount += S.length, l.maxTotalExpansions && this.entityExpansionCount > l.maxTotalExpansions) throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${l.maxTotalExpansions}`);
          let g = n.length;
          if (n = n.replace(h.regx, h.val), l.maxExpandedLength && (this.currentExpandedLength += n.length - g, this.currentExpandedLength > l.maxExpandedLength)) throw Error(`Total expanded content size exceeded: ${this.currentExpandedLength} > ${l.maxExpandedLength}`);
        }
      }
      for (let p of Object.keys(this.lastEntities)) {
        let h = this.lastEntities[p], S = n.match(h.regex);
        if (S && (this.entityExpansionCount += S.length, l.maxTotalExpansions && this.entityExpansionCount > l.maxTotalExpansions)) throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${l.maxTotalExpansions}`);
        n = n.replace(h.regex, h.val);
      }
      if (n.indexOf("&") === -1) return n;
      if (this.options.htmlEntities) for (let p of Object.keys(this.htmlEntities)) {
        let h = this.htmlEntities[p], S = n.match(h.regex);
        if (S && (this.entityExpansionCount += S.length, l.maxTotalExpansions && this.entityExpansionCount > l.maxTotalExpansions)) throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${l.maxTotalExpansions}`);
        n = n.replace(h.regex, h.val);
      }
      return n.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    function Li(n, i, u, l) {
      return n && (l === void 0 && (l = i.child.length === 0), (n = this.parseTextData(n, i.tagname, u, false, !!i[":@"] && Object.keys(i[":@"]).length !== 0, l)) !== void 0 && n !== "" && i.add(this.options.textNodeName, n), n = ""), n;
    }
    function Ui(n, i) {
      if (!n || n.length === 0) return false;
      for (let u = 0; u < n.length; u++) if (i.matches(n[u])) return true;
      return false;
    }
    function be(n, i, u, l) {
      let p = n.indexOf(i, u);
      if (p === -1) throw Error(l);
      return p + i.length - 1;
    }
    function mt(n, i, u, l = ">") {
      let p = (function(_, v, M = ">") {
        let P, z = "";
        for (let ne = v; ne < _.length; ne++) {
          let H = _[ne];
          if (P) H === P && (P = "");
          else if (H === '"' || H === "'") P = H;
          else if (H === M[0]) {
            if (!M[1]) return { data: z, index: ne };
            if (_[ne + 1] === M[1]) return { data: z, index: ne };
          } else H === "	" && (H = " ");
          z += H;
        }
      })(n, i + 1, l);
      if (!p) return;
      let { data: h, index: S } = p, g = h.search(/\s/), E = h, w = true;
      g !== -1 && (E = h.substring(0, g), h = h.substring(g + 1).trimStart());
      let C = E;
      if (u) {
        let _ = E.indexOf(":");
        _ !== -1 && (E = E.substr(_ + 1), w = E !== p.data.substr(_ + 1));
      }
      return { tagName: E, tagExp: h, closeIndex: S, attrExpPresent: w, rawTagName: C };
    }
    function Vi(n, i, u) {
      let l = u, p = 1;
      for (; u < n.length; u++) if (n[u] === "<") if (n[u + 1] === "/") {
        let h = be(n, ">", u, `${i} is not closed`);
        if (n.substring(u + 2, h).trim() === i && (p--, p === 0)) return { tagContent: n.substring(l, u), i: h };
        u = h;
      } else if (n[u + 1] === "?") u = be(n, "?>", u + 1, "StopNode is not closed.");
      else if (n.substr(u + 1, 3) === "!--") u = be(n, "-->", u + 3, "StopNode is not closed.");
      else if (n.substr(u + 1, 2) === "![") u = be(n, "]]>", u, "StopNode is not closed.") - 2;
      else {
        let h = mt(n, u, ">");
        h && ((h && h.tagName) === i && h.tagExp[h.tagExp.length - 1] !== "/" && p++, u = h.closeIndex);
      }
    }
    function Ar(n, i, u) {
      if (i && typeof n == "string") {
        let l = n.trim();
        return l === "true" || l !== "false" && (function(p, h = {}) {
          if (h = Object.assign({}, Ci, h), !p || typeof p != "string") return p;
          let S = p.trim();
          if (h.skipLike !== void 0 && h.skipLike.test(S)) return p;
          if (p === "0") return 0;
          if (h.hex && Ti.test(S)) return (function(E) {
            if (parseInt) return parseInt(E, 16);
            if (Number.parseInt) return Number.parseInt(E, 16);
            if (window && window.parseInt) return window.parseInt(E, 16);
            throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
          })(S);
          if (isFinite(S)) {
            if (S.includes("e") || S.includes("E")) return (function(E, w, C) {
              if (!C.eNotation) return E;
              let _ = w.match(Ai);
              if (_) {
                let v = _[1] || "", M = _[3].indexOf("e") === -1 ? "E" : "e", P = _[2], z = v ? E[P.length + 1] === M : E[P.length] === M;
                return P.length > 1 && z ? E : (P.length !== 1 || !_[3].startsWith(`.${M}`) && _[3][0] !== M) && P.length > 0 ? C.leadingZeros && !z ? (w = (_[1] || "") + _[3], Number(w)) : E : Number(w);
              }
              return E;
            })(p, S, h);
            {
              let E = _i.exec(S);
              if (E) {
                let w = E[1] || "", C = E[2], _ = (g = E[3]) && g.indexOf(".") !== -1 ? ((g = g.replace(/0+$/, "")) === "." ? g = "0" : g[0] === "." ? g = "0" + g : g[g.length - 1] === "." && (g = g.substring(0, g.length - 1)), g) : g, v = w ? p[C.length + 1] === "." : p[C.length] === ".";
                if (!h.leadingZeros && (C.length > 1 || C.length === 1 && !v)) return p;
                {
                  let M = Number(S), P = String(M);
                  if (M === 0) return M;
                  if (P.search(/[eE]/) !== -1) return h.eNotation ? M : p;
                  if (S.indexOf(".") !== -1) return P === "0" || P === _ || P === `${w}${_}` ? M : p;
                  let z = C ? _ : S;
                  return C ? z === P || w + z === P ? M : p : z === P || z === w + P ? M : p;
                }
              }
              return p;
            }
          }
          var g;
          return (function(E, w, C) {
            let _ = w === 1 / 0;
            switch (C.infinity.toLowerCase()) {
              case "null":
                return null;
              case "infinity":
                return w;
              case "string":
                return _ ? "Infinity" : "-Infinity";
              default:
                return E;
            }
          })(p, Number(S), h);
        })(n, u);
      }
      return n !== void 0 ? n : "";
    }
    function Rr(n, i, u) {
      let l = Number.parseInt(n, i);
      return l >= 0 && l <= 1114111 ? String.fromCodePoint(l) : u + n + ";";
    }
    function gt(n, i, u, l) {
      if (n) {
        let p = n(i);
        u === i && (u = p), i = p;
      }
      return { tagName: i = Ir(i, l), tagExp: u };
    }
    function Ir(n, i) {
      if (d.includes(n)) throw Error(`[SECURITY] Invalid name: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
      return c.includes(n) ? i.onDangerousProperty(n) : n;
    }
    let yt = oe.getMetaDataSymbol();
    function Fi(n, i) {
      if (!n || typeof n != "object") return {};
      if (!i) return n;
      let u = {};
      for (let l in n) l.startsWith(i) ? u[l.substring(i.length)] = n[l] : u[l] = n[l];
      return u;
    }
    function ji(n, i, u, l) {
      return Or(n, i, u, l);
    }
    function Or(n, i, u, l) {
      let p, h = {};
      for (let S = 0; S < n.length; S++) {
        let g = n[S], E = qi(g);
        if (E !== void 0 && E !== i.textNodeName) {
          let w = Fi(g[":@"] || {}, i.attributeNamePrefix);
          u.push(E, w);
        }
        if (E === i.textNodeName) p === void 0 ? p = g[E] : p += "" + g[E];
        else {
          if (E === void 0) continue;
          if (g[E]) {
            let w = Or(g[E], i, u, l), C = Gi(w, i);
            if (g[":@"] ? Hi(w, g[":@"], l, i) : Object.keys(w).length !== 1 || w[i.textNodeName] === void 0 || i.alwaysCreateTextNode ? Object.keys(w).length === 0 && (i.alwaysCreateTextNode ? w[i.textNodeName] = "" : w = "") : w = w[i.textNodeName], g[yt] !== void 0 && typeof w == "object" && w !== null && (w[yt] = g[yt]), h[E] !== void 0 && Object.prototype.hasOwnProperty.call(h, E)) Array.isArray(h[E]) || (h[E] = [h[E]]), h[E].push(w);
            else {
              let _ = i.jPath ? l.toString() : l;
              i.isArray(E, _, C) ? h[E] = [w] : h[E] = w;
            }
            E !== void 0 && E !== i.textNodeName && u.pop();
          }
        }
      }
      return typeof p == "string" ? p.length > 0 && (h[i.textNodeName] = p) : p !== void 0 && (h[i.textNodeName] = p), h;
    }
    function qi(n) {
      let i = Object.keys(n);
      for (let u = 0; u < i.length; u++) {
        let l = i[u];
        if (l !== ":@") return l;
      }
    }
    function Hi(n, i, u, l) {
      if (i) {
        let p = Object.keys(i), h = p.length;
        for (let S = 0; S < h; S++) {
          let g = p[S], E = g.startsWith(l.attributeNamePrefix) ? g.substring(l.attributeNamePrefix.length) : g, w = l.jPath ? u.toString() + "." + E : u;
          l.isArray(g, w, true, true) ? n[g] = [i[g]] : n[g] = i[g];
        }
      }
    }
    function Gi(n, i) {
      let { textNodeName: u } = i, l = Object.keys(n).length;
      return l === 0 || !(l !== 1 || !n[u] && typeof n[u] != "boolean" && n[u] !== 0);
    }
    class Mr {
      constructor(n) {
        this.externalEntities = {}, this.options = Ni(n);
      }
      parse(n, i) {
        if (typeof n != "string" && n.toString) n = n.toString();
        else if (typeof n != "string") throw Error("XML data is accepted in String or Bytes[] form.");
        if (i) {
          i === true && (i = {});
          let p = m(n, i);
          if (p !== true) throw Error(`${p.err.msg}:${p.err.line}:${p.err.col}`);
        }
        let u = new Cr(this.options);
        u.addExternalEntities(this.externalEntities);
        let l = u.parseXml(n);
        return this.options.preserveOrder || l === void 0 ? l : ji(l, this.options, u.matcher, u.readonlyMatcher);
      }
      addEntity(n, i) {
        if (i.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
        if (n.indexOf("&") !== -1 || n.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        if (i === "&") throw Error("An entity with value '&' is not permitted");
        this.externalEntities[n] = i;
      }
      static getMetaDataSymbol() {
        return oe.getMetaDataSymbol();
      }
    }
    function Xi(n, i) {
      let u = "";
      i.format && i.indentBy.length > 0 && (u = `
`);
      let l = [];
      if (i.stopNodes && Array.isArray(i.stopNodes)) for (let p = 0; p < i.stopNodes.length; p++) {
        let h = i.stopNodes[p];
        typeof h == "string" ? l.push(new xe(h)) : h instanceof xe && l.push(h);
      }
      return Dr(n, i, u, new He(), l);
    }
    function Dr(n, i, u, l, p) {
      let h = "", S = false;
      if (i.maxNestedTags && l.getDepth() > i.maxNestedTags) throw Error("Maximum nested tags exceeded");
      if (!Array.isArray(n)) {
        if (n != null) {
          let g = n.toString();
          return g = Et(g, i), g;
        }
        return "";
      }
      for (let g = 0; g < n.length; g++) {
        let E = n[g], w = kr(E);
        if (w === void 0) continue;
        let C = Wi(E[":@"], i);
        l.push(w, C);
        let _ = Qi(l, p);
        if (w === i.textNodeName) {
          let z = E[w];
          _ || (z = i.tagValueProcessor(w, z), z = Et(z, i)), S && (h += u), h += z, S = false, l.pop();
          continue;
        }
        if (w === i.cdataPropName) {
          S && (h += u), h += `<![CDATA[${E[w][0][i.textNodeName]}]]>`, S = false, l.pop();
          continue;
        }
        if (w === i.commentPropName) {
          h += u + `<!--${E[w][0][i.textNodeName]}-->`, S = true, l.pop();
          continue;
        }
        if (w[0] === "?") {
          let z = vr(E[":@"], i, _), ne = w === "?xml" ? "" : u, H = E[w][0][i.textNodeName];
          H = H.length !== 0 ? " " + H : "", h += ne + `<${w}${H}${z}?>`, S = true, l.pop();
          continue;
        }
        let v = u;
        v !== "" && (v += i.indentBy);
        let M = u + `<${w}${vr(E[":@"], i, _)}`, P;
        P = _ ? Pr(E[w], i) : Dr(E[w], i, v, l, p), i.unpairedTags.indexOf(w) !== -1 ? i.suppressUnpairedNode ? h += M + ">" : h += M + "/>" : P && P.length !== 0 || !i.suppressEmptyNode ? P && P.endsWith(">") ? h += M + `>${P}${u}</${w}>` : (h += M + ">", P && u !== "" && (P.includes("/>") || P.includes("</")) ? h += u + i.indentBy + P + u : h += P, h += `</${w}>`) : h += M + "/>", S = true, l.pop();
      }
      return h;
    }
    function Wi(n, i) {
      if (!n || i.ignoreAttributes) return null;
      let u = {}, l = false;
      for (let p in n) Object.prototype.hasOwnProperty.call(n, p) && (u[p.startsWith(i.attributeNamePrefix) ? p.substr(i.attributeNamePrefix.length) : p] = n[p], l = true);
      return l ? u : null;
    }
    function Pr(n, i) {
      if (!Array.isArray(n)) return n != null ? n.toString() : "";
      let u = "";
      for (let l = 0; l < n.length; l++) {
        let p = n[l], h = kr(p);
        if (h === i.textNodeName) u += p[h];
        else if (h === i.cdataPropName) u += p[h][0][i.textNodeName];
        else if (h === i.commentPropName) u += p[h][0][i.textNodeName];
        else {
          if (h && h[0] === "?") continue;
          if (h) {
            let S = Ki(p[":@"], i), g = Pr(p[h], i);
            g && g.length !== 0 ? u += `<${h}${S}>${g}</${h}>` : u += `<${h}${S}/>`;
          }
        }
      }
      return u;
    }
    function Ki(n, i) {
      let u = "";
      if (n && !i.ignoreAttributes) for (let l in n) {
        if (!Object.prototype.hasOwnProperty.call(n, l)) continue;
        let p = n[l];
        p === true && i.suppressBooleanAttributes ? u += ` ${l.substr(i.attributeNamePrefix.length)}` : u += ` ${l.substr(i.attributeNamePrefix.length)}="${p}"`;
      }
      return u;
    }
    function kr(n) {
      let i = Object.keys(n);
      for (let u = 0; u < i.length; u++) {
        let l = i[u];
        if (Object.prototype.hasOwnProperty.call(n, l) && l !== ":@") return l;
      }
    }
    function vr(n, i, u) {
      let l = "";
      if (n && !i.ignoreAttributes) for (let p in n) {
        if (!Object.prototype.hasOwnProperty.call(n, p)) continue;
        let h;
        u ? h = n[p] : (h = i.attributeValueProcessor(p, n[p]), h = Et(h, i)), h === true && i.suppressBooleanAttributes ? l += ` ${p.substr(i.attributeNamePrefix.length)}` : l += ` ${p.substr(i.attributeNamePrefix.length)}="${h}"`;
      }
      return l;
    }
    function Qi(n, i) {
      if (!i || i.length === 0) return false;
      for (let u = 0; u < i.length; u++) if (n.matches(i[u])) return true;
      return false;
    }
    function Et(n, i) {
      if (n && n.length > 0 && i.processEntities) for (let u = 0; u < i.entities.length; u++) {
        let l = i.entities[u];
        n = n.replace(l.regex, l.val);
      }
      return n;
    }
    let Yi = { attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, cdataPropName: false, format: false, indentBy: "  ", suppressEmptyNode: false, suppressUnpairedNode: true, suppressBooleanAttributes: true, tagValueProcessor: function(n, i) {
      return i;
    }, attributeValueProcessor: function(n, i) {
      return i;
    }, preserveOrder: false, commentPropName: false, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: true, stopNodes: [], oneListGroup: false, maxNestedTags: 100, jPath: true };
    function te(n) {
      if (this.options = Object.assign({}, Yi, n), this.options.stopNodes && Array.isArray(this.options.stopNodes) && (this.options.stopNodes = this.options.stopNodes.map((u) => typeof u == "string" && u.startsWith("*.") ? ".." + u.substring(2) : u)), this.stopNodeExpressions = [], this.options.stopNodes && Array.isArray(this.options.stopNodes)) for (let u = 0; u < this.options.stopNodes.length; u++) {
        let l = this.options.stopNodes[u];
        typeof l == "string" ? this.stopNodeExpressions.push(new xe(l)) : l instanceof xe && this.stopNodeExpressions.push(l);
      }
      var i;
      this.options.ignoreAttributes === true || this.options.attributesGroupName ? this.isAttribute = function() {
        return false;
      } : (this.ignoreAttributesFn = typeof (i = this.options.ignoreAttributes) == "function" ? i : Array.isArray(i) ? (u) => {
        for (let l of i) {
          if (typeof l == "string" && u === l) return true;
          if (l instanceof RegExp && l.test(u)) return true;
        }
      } : () => false, this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = eo), this.processTextOrObjNode = Ji, this.options.format ? (this.indentate = Zi, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
        return "";
      }, this.tagEndChar = ">", this.newLine = "");
    }
    function Ji(n, i, u, l) {
      let p = this.extractAttributes(n);
      if (l.push(i, p), this.checkStopNode(l)) {
        let S = this.buildRawContent(n), g = this.buildAttributesForStopNode(n);
        return l.pop(), this.buildObjectNode(S, i, g, u);
      }
      let h = this.j2x(n, u + 1, l);
      return l.pop(), n[this.options.textNodeName] !== void 0 && Object.keys(n).length === 1 ? this.buildTextValNode(n[this.options.textNodeName], i, h.attrStr, u, l) : this.buildObjectNode(h.val, i, h.attrStr, u);
    }
    function Zi(n) {
      return this.options.indentBy.repeat(n);
    }
    function eo(n) {
      return !(!n.startsWith(this.options.attributeNamePrefix) || n === this.options.textNodeName) && n.substr(this.attrPrefixLen);
    }
    te.prototype.build = function(n) {
      if (this.options.preserveOrder) return Xi(n, this.options);
      {
        Array.isArray(n) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (n = { [this.options.arrayNodeName]: n });
        let i = new He();
        return this.j2x(n, 0, i).val;
      }
    }, te.prototype.j2x = function(n, i, u) {
      let l = "", p = "";
      if (this.options.maxNestedTags && u.getDepth() >= this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
      let h = this.options.jPath ? u.toString() : u, S = this.checkStopNode(u);
      for (let g in n) if (Object.prototype.hasOwnProperty.call(n, g)) if (n[g] === void 0) this.isAttribute(g) && (p += "");
      else if (n[g] === null) this.isAttribute(g) || g === this.options.cdataPropName ? p += "" : g[0] === "?" ? p += this.indentate(i) + "<" + g + "?" + this.tagEndChar : p += this.indentate(i) + "<" + g + "/" + this.tagEndChar;
      else if (n[g] instanceof Date) p += this.buildTextValNode(n[g], g, "", i, u);
      else if (typeof n[g] != "object") {
        let E = this.isAttribute(g);
        if (E && !this.ignoreAttributesFn(E, h)) l += this.buildAttrPairStr(E, "" + n[g], S);
        else if (!E) if (g === this.options.textNodeName) {
          let w = this.options.tagValueProcessor(g, "" + n[g]);
          p += this.replaceEntitiesValue(w);
        } else {
          u.push(g);
          let w = this.checkStopNode(u);
          if (u.pop(), w) {
            let C = "" + n[g];
            p += C === "" ? this.indentate(i) + "<" + g + this.closeTag(g) + this.tagEndChar : this.indentate(i) + "<" + g + ">" + C + "</" + g + this.tagEndChar;
          } else p += this.buildTextValNode(n[g], g, "", i, u);
        }
      } else if (Array.isArray(n[g])) {
        let E = n[g].length, w = "", C = "";
        for (let _ = 0; _ < E; _++) {
          let v = n[g][_];
          if (v === void 0) ;
          else if (v === null) g[0] === "?" ? p += this.indentate(i) + "<" + g + "?" + this.tagEndChar : p += this.indentate(i) + "<" + g + "/" + this.tagEndChar;
          else if (typeof v == "object") if (this.options.oneListGroup) {
            u.push(g);
            let M = this.j2x(v, i + 1, u);
            u.pop(), w += M.val, this.options.attributesGroupName && v.hasOwnProperty(this.options.attributesGroupName) && (C += M.attrStr);
          } else w += this.processTextOrObjNode(v, g, i, u);
          else if (this.options.oneListGroup) {
            let M = this.options.tagValueProcessor(g, v);
            M = this.replaceEntitiesValue(M), w += M;
          } else {
            u.push(g);
            let M = this.checkStopNode(u);
            if (u.pop(), M) {
              let P = "" + v;
              w += P === "" ? this.indentate(i) + "<" + g + this.closeTag(g) + this.tagEndChar : this.indentate(i) + "<" + g + ">" + P + "</" + g + this.tagEndChar;
            } else w += this.buildTextValNode(v, g, "", i, u);
          }
        }
        this.options.oneListGroup && (w = this.buildObjectNode(w, g, C, i)), p += w;
      } else if (this.options.attributesGroupName && g === this.options.attributesGroupName) {
        let E = Object.keys(n[g]), w = E.length;
        for (let C = 0; C < w; C++) l += this.buildAttrPairStr(E[C], "" + n[g][E[C]], S);
      } else p += this.processTextOrObjNode(n[g], g, i, u);
      return { attrStr: l, val: p };
    }, te.prototype.buildAttrPairStr = function(n, i, u) {
      return u || (i = this.options.attributeValueProcessor(n, "" + i), i = this.replaceEntitiesValue(i)), this.options.suppressBooleanAttributes && i === "true" ? " " + n : " " + n + '="' + i + '"';
    }, te.prototype.extractAttributes = function(n) {
      if (!n || typeof n != "object") return null;
      let i = {}, u = false;
      if (this.options.attributesGroupName && n[this.options.attributesGroupName]) {
        let l = n[this.options.attributesGroupName];
        for (let p in l) Object.prototype.hasOwnProperty.call(l, p) && (i[p.startsWith(this.options.attributeNamePrefix) ? p.substring(this.options.attributeNamePrefix.length) : p] = l[p], u = true);
      } else for (let l in n) {
        if (!Object.prototype.hasOwnProperty.call(n, l)) continue;
        let p = this.isAttribute(l);
        p && (i[p] = n[l], u = true);
      }
      return u ? i : null;
    }, te.prototype.buildRawContent = function(n) {
      if (typeof n == "string") return n;
      if (typeof n != "object" || n === null) return String(n);
      if (n[this.options.textNodeName] !== void 0) return n[this.options.textNodeName];
      let i = "";
      for (let u in n) {
        if (!Object.prototype.hasOwnProperty.call(n, u)) continue;
        if (this.isAttribute(u)) continue;
        if (this.options.attributesGroupName && u === this.options.attributesGroupName) continue;
        let l = n[u];
        if (u === this.options.textNodeName) i += l;
        else if (Array.isArray(l)) {
          for (let p of l) if (typeof p == "string" || typeof p == "number") i += `<${u}>${p}</${u}>`;
          else if (typeof p == "object" && p !== null) {
            let h = this.buildRawContent(p), S = this.buildAttributesForStopNode(p);
            i += h === "" ? `<${u}${S}/>` : `<${u}${S}>${h}</${u}>`;
          }
        } else if (typeof l == "object" && l !== null) {
          let p = this.buildRawContent(l), h = this.buildAttributesForStopNode(l);
          i += p === "" ? `<${u}${h}/>` : `<${u}${h}>${p}</${u}>`;
        } else i += `<${u}>${l}</${u}>`;
      }
      return i;
    }, te.prototype.buildAttributesForStopNode = function(n) {
      if (!n || typeof n != "object") return "";
      let i = "";
      if (this.options.attributesGroupName && n[this.options.attributesGroupName]) {
        let u = n[this.options.attributesGroupName];
        for (let l in u) {
          if (!Object.prototype.hasOwnProperty.call(u, l)) continue;
          let p = l.startsWith(this.options.attributeNamePrefix) ? l.substring(this.options.attributeNamePrefix.length) : l, h = u[l];
          h === true && this.options.suppressBooleanAttributes ? i += " " + p : i += " " + p + '="' + h + '"';
        }
      } else for (let u in n) {
        if (!Object.prototype.hasOwnProperty.call(n, u)) continue;
        let l = this.isAttribute(u);
        if (l) {
          let p = n[u];
          p === true && this.options.suppressBooleanAttributes ? i += " " + l : i += " " + l + '="' + p + '"';
        }
      }
      return i;
    }, te.prototype.buildObjectNode = function(n, i, u, l) {
      if (n === "") return i[0] === "?" ? this.indentate(l) + "<" + i + u + "?" + this.tagEndChar : this.indentate(l) + "<" + i + u + this.closeTag(i) + this.tagEndChar;
      {
        let p = "</" + i + this.tagEndChar, h = "";
        return i[0] === "?" && (h = "?", p = ""), !u && u !== "" || n.indexOf("<") !== -1 ? this.options.commentPropName !== false && i === this.options.commentPropName && h.length === 0 ? this.indentate(l) + `<!--${n}-->` + this.newLine : this.indentate(l) + "<" + i + u + h + this.tagEndChar + n + this.indentate(l) + p : this.indentate(l) + "<" + i + u + h + ">" + n + p;
      }
    }, te.prototype.closeTag = function(n) {
      let i = "";
      return this.options.unpairedTags.indexOf(n) !== -1 ? this.options.suppressUnpairedNode || (i = "/") : i = this.options.suppressEmptyNode ? "/" : `></${n}`, i;
    }, te.prototype.checkStopNode = function(n) {
      if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) return false;
      for (let i = 0; i < this.stopNodeExpressions.length; i++) if (n.matches(this.stopNodeExpressions[i])) return true;
      return false;
    }, te.prototype.buildTextValNode = function(n, i, u, l, p) {
      if (this.options.cdataPropName !== false && i === this.options.cdataPropName) return this.indentate(l) + `<![CDATA[${n}]]>` + this.newLine;
      if (this.options.commentPropName !== false && i === this.options.commentPropName) return this.indentate(l) + `<!--${n}-->` + this.newLine;
      if (i[0] === "?") return this.indentate(l) + "<" + i + u + "?" + this.tagEndChar;
      {
        let h = this.options.tagValueProcessor(i, n);
        return h = this.replaceEntitiesValue(h), h === "" ? this.indentate(l) + "<" + i + u + this.closeTag(i) + this.tagEndChar : this.indentate(l) + "<" + i + u + ">" + h + "</" + i + this.tagEndChar;
      }
    }, te.prototype.replaceEntitiesValue = function(n) {
      if (n && n.length > 0 && this.options.processEntities) for (let i = 0; i < this.options.entities.length; i++) {
        let u = this.options.entities[i];
        n = n.replace(u.regex, u.val);
      }
      return n;
    };
    let to = te, ro = { validate: m };
    ys.exports = t;
  })();
});
var xs = (0, import_chunk_w1d7ygsk.V)(function(ws) {
  Object.defineProperty(ws, "__esModule", { value: true });
  ws.parseXML = _a;
  var Ss = Es(), Vt = new Ss.XMLParser({ attributeNamePrefix: "", htmlEntities: true, ignoreAttributes: false, ignoreDeclaration: true, parseTagValue: false, trimValues: false, tagValueProcessor: (e, t) => t.trim() === "" && t.includes(`
`) ? "" : void 0 });
  Vt.addEntity("#xD", "\r");
  Vt.addEntity("#10", `
`);
  function _a(e) {
    return Vt.parse(e, true);
  }
});
var jt = (0, import_chunk_w1d7ygsk.V)(function(bs) {
  var Aa = xs();
  function Ra(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function Ia(e) {
    return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
  }
  class Ft {
    value;
    constructor(e) {
      this.value = e;
    }
    toString() {
      return Ia("" + this.value);
    }
  }
  class Le {
    name;
    children;
    attributes = {};
    static of(e, t, r) {
      let s = new Le(e);
      if (t !== void 0) s.addChildNode(new Ft(t));
      if (r !== void 0) s.withName(r);
      return s;
    }
    constructor(e, t = []) {
      this.name = e, this.children = t;
    }
    withName(e) {
      return this.name = e, this;
    }
    addAttribute(e, t) {
      return this.attributes[e] = t, this;
    }
    addChildNode(e) {
      return this.children.push(e), this;
    }
    removeAttribute(e) {
      return delete this.attributes[e], this;
    }
    n(e) {
      return this.name = e, this;
    }
    c(e) {
      return this.children.push(e), this;
    }
    a(e, t) {
      if (t != null) this.attributes[e] = t;
      return this;
    }
    cc(e, t, r = t) {
      if (e[t] != null) {
        let s = Le.of(t, e[t]).withName(r);
        this.c(s);
      }
    }
    l(e, t, r, s) {
      if (e[t] != null) s().map((a) => {
        a.withName(r), this.c(a);
      });
    }
    lc(e, t, r, s) {
      if (e[t] != null) {
        let o = s(), a = new Le(r);
        o.map((c) => {
          a.c(c);
        }), this.c(a);
      }
    }
    toString() {
      let e = Boolean(this.children.length), t = `<${this.name}`, r = this.attributes;
      for (let s of Object.keys(r)) {
        let o = r[s];
        if (o != null) t += ` ${s}="${Ra("" + o)}"`;
      }
      return t += !e ? "/>" : `>${this.children.map((s) => s.toString()).join("")}</${this.name}>`;
    }
  }
  Object.defineProperty(bs, "parseXML", { enumerable: true, get: function() {
    return Aa.parseXML;
  } });
  bs.XmlNode = Le;
  bs.XmlText = Ft;
});
var MN = (0, import_chunk_w1d7ygsk.V)(function(Ja) {
  var Ht = (0, import_chunk_3jjr3wje.yb)(), me = (0, import_chunk_qrv5kr16.HR)(), Ns = (0, import_chunk_fac79wqz.gw)(), Da = (0, import_chunk_4vm1ywmw.Cj)(), Ts = (0, import_chunk_fe2jgj1j.vGt)(), _s = Ut(), B = (0, import_chunk_6v7p7bta.Tj)(), de = (0, import_chunk_1tzm94k1.Bh)(), Q = (0, import_chunk_6v7p7bta.Run)(), G = (0, import_chunk_6v7p7bta.Ujn)(), Ve = (0, import_chunk_z3ydstra.xB)(), Ds = (0, import_chunk_z3ydstra.SL)(), re = jt(), qt = { warningEmitted: false }, Pa = (e) => {
    if (e && !qt.warningEmitted && parseInt(e.substring(1, e.indexOf("."))) < 18) qt.warningEmitted = true, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
  };
  function ka(e, t, r) {
    if (!e.$source) e.$source = {};
    return e.$source[t] = r, e;
  }
  function va(e, t, r) {
    if (!e.__aws_sdk_context) e.__aws_sdk_context = { features: {} };
    else if (!e.__aws_sdk_context.features) e.__aws_sdk_context.features = {};
    e.__aws_sdk_context.features[t] = r;
  }
  function za(e, t, r) {
    if (!e.$source) e.$source = {};
    return e.$source[t] = r, e;
  }
  var Cs = (e) => Ht.HttpResponse.isInstance(e) ? e.headers?.date ?? e.headers?.Date : void 0, Gt = (e) => new Date(Date.now() + e), $a = (e, t) => Math.abs(Gt(t).getTime() - e) >= 3e5, As = (e, t) => {
    let r = Date.parse(e);
    if ($a(r, t)) return r - Date.now();
    return t;
  }, Ue = (e, t) => {
    if (!t) throw Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
    return t;
  }, Xt = async (e) => {
    let t = Ue("context", e.context), r = Ue("config", e.config), s = t.endpointV2?.properties?.authSchemes?.[0], a = await Ue("signer", r.signer)(s), c = e?.signingRegion, d = e?.signingRegionSet, f = e?.signingName;
    return { config: r, signer: a, signingRegion: c, signingRegionSet: d, signingName: f };
  };
  class et {
    async sign(e, t, r) {
      if (!Ht.HttpRequest.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
      let s = await Xt(r), { config: o, signer: a } = s, { signingRegion: c, signingName: d } = s, f = r.context;
      if (f?.authSchemes?.length ?? false) {
        let [y, b] = f.authSchemes;
        if (y?.name === "sigv4a" && b?.name === "sigv4") c = b?.signingRegion ?? c, d = b?.signingName ?? d;
      }
      return await a.sign(e, { signingDate: Gt(o.systemClockOffset), signingRegion: c, signingService: d });
    }
    errorHandler(e) {
      return (t) => {
        let r = t.ServerTime ?? Cs(t.$response);
        if (r) {
          let s = Ue("config", e.config), o = s.systemClockOffset;
          if (s.systemClockOffset = As(r, s.systemClockOffset), s.systemClockOffset !== o && t.$metadata) t.$metadata.clockSkewCorrected = true;
        }
        throw t;
      };
    }
    successHandler(e, t) {
      let r = Cs(e);
      if (r) {
        let s = Ue("config", t.config);
        s.systemClockOffset = As(r, s.systemClockOffset);
      }
    }
  }
  var Ba = et;
  class Ps extends et {
    async sign(e, t, r) {
      if (!Ht.HttpRequest.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
      let { config: s, signer: o, signingRegion: a, signingRegionSet: c, signingName: d } = await Xt(r), m = (await s.sigv4aSigningRegionSet?.() ?? c ?? [a]).join(",");
      return await o.sign(e, { signingDate: Gt(s.systemClockOffset), signingRegion: m, signingService: d });
    }
  }
  var Rs = (e) => typeof e === "string" && e.length > 0 ? e.split(",").map((t) => t.trim()) : [], ks = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`, Is = "AWS_AUTH_SCHEME_PREFERENCE", Os = "auth_scheme_preference", La = { environmentVariableSelector: (e, t) => {
    if (t?.signingName) {
      if (ks(t.signingName) in e) return ["httpBearerAuth"];
    }
    if (!(Is in e)) return;
    return Rs(e[Is]);
  }, configFileSelector: (e) => {
    if (!(Os in e)) return;
    return Rs(e[Os]);
  }, default: [] }, Ua = (e) => (e.sigv4aSigningRegionSet = me.normalizeProvider(e.sigv4aSigningRegionSet), e), Va = { environmentVariableSelector(e) {
    if (e.AWS_SIGV4A_SIGNING_REGION_SET) return e.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((t) => t.trim());
    throw new Ns.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", { tryNextLink: true });
  }, configFileSelector(e) {
    if (e.sigv4a_signing_region_set) return (e.sigv4a_signing_region_set ?? "").split(",").map((t) => t.trim());
    throw new Ns.ProviderError("sigv4a_signing_region_set not set in profile.", { tryNextLink: true });
  }, default: void 0 }, vs = (e) => {
    let t = e.credentials, r = !!e.credentials, s = void 0;
    Object.defineProperty(e, "credentials", { set(m) {
      if (m && m !== t && m !== s) r = true;
      t = m;
      let y = ja(e, { credentials: t, credentialDefaultProvider: e.credentialDefaultProvider }), b = qa(e, y);
      if (r && !b.attributed) s = async (x) => b(x).then((N) => Da.setCredentialFeature(N, "CREDENTIALS_CODE", "e")), s.memoized = b.memoized, s.configBound = b.configBound, s.attributed = true;
      else s = b;
    }, get() {
      return s;
    }, enumerable: true, configurable: true }), e.credentials = t;
    let { signingEscapePath: o = true, systemClockOffset: a = e.systemClockOffset || 0, sha256: c } = e, d;
    if (e.signer) d = me.normalizeProvider(e.signer);
    else if (e.regionInfoProvider) d = () => me.normalizeProvider(e.region)().then(async (m) => [await e.regionInfoProvider(m, { useFipsEndpoint: await e.useFipsEndpoint(), useDualstackEndpoint: await e.useDualstackEndpoint() }) || {}, m]).then(([m, y]) => {
      let { signingRegion: b, signingService: x } = m;
      e.signingRegion = e.signingRegion || b || y, e.signingName = e.signingName || x || e.serviceId;
      let N = { ...e, credentials: e.credentials, region: e.signingRegion, service: e.signingName, sha256: c, uriEscapePath: o };
      return new (e.signerConstructor || Ts.SignatureV4)(N);
    });
    else d = async (m) => {
      m = Object.assign({}, { name: "sigv4", signingName: e.signingName || e.defaultSigningName, signingRegion: await me.normalizeProvider(e.region)(), properties: {} }, m);
      let y = m.signingRegion, b = m.signingName;
      e.signingRegion = e.signingRegion || y, e.signingName = e.signingName || b || e.serviceId;
      let x = { ...e, credentials: e.credentials, region: e.signingRegion, service: e.signingName, sha256: c, uriEscapePath: o };
      return new (e.signerConstructor || Ts.SignatureV4)(x);
    };
    return Object.assign(e, { systemClockOffset: a, signingEscapePath: o, signer: d });
  }, Fa = vs;
  function ja(e, { credentials: t, credentialDefaultProvider: r }) {
    let s;
    if (t) if (!t?.memoized) s = me.memoizeIdentityProvider(t, me.isIdentityExpired, me.doesIdentityRequireRefresh);
    else s = t;
    else if (r) s = me.normalizeProvider(r(Object.assign({}, e, { parentClientConfig: e })));
    else s = async () => {
      throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
    };
    return s.memoized = true, s;
  }
  function qa(e, t) {
    if (t.configBound) return t;
    let r = async (s) => t({ ...s, callerClientConfig: e });
    return r.memoized = t.memoized, r.configBound = true, r;
  }
  class Ie {
    queryCompat;
    constructor(e = false) {
      this.queryCompat = e;
    }
    resolveRestContentType(e, t) {
      let r = t.getMemberSchemas(), s = Object.values(r).find((o) => !!o.getMergedTraits().httpPayload);
      if (s) {
        let o = s.getMergedTraits().mediaType;
        if (o) return o;
        else if (s.isStringSchema()) return "text/plain";
        else if (s.isBlobSchema()) return "application/octet-stream";
        else return e;
      } else if (!t.isUnitSchema()) {
        if (Object.values(r).find((a) => {
          let { httpQuery: c, httpQueryParams: d, httpHeader: f, httpLabel: m, httpPrefixHeaders: y } = a.getMergedTraits();
          return !c && !d && !f && !m && y === void 0;
        })) return e;
      }
    }
    async getErrorSchemaOrThrowBaseException(e, t, r, s, o, a) {
      let c = t, d = e;
      if (e.includes("#")) [c, d] = e.split("#");
      let f = { $metadata: o, $fault: r.statusCode < 500 ? "client" : "server" }, m = B.TypeRegistry.for(c);
      try {
        return { errorSchema: a?.(m, d) ?? m.getSchema(e), errorMetadata: f };
      } catch (y) {
        s.message = s.message ?? s.Message ?? "UnknownError";
        let b = B.TypeRegistry.for("smithy.ts.sdk.synthetic." + c), x = b.getBaseException();
        if (x) {
          let N = b.getErrorCtor(x) ?? Error;
          throw this.decorateServiceException(Object.assign(new N({ name: d }), f), s);
        }
        throw this.decorateServiceException(Object.assign(Error(d), f), s);
      }
    }
    decorateServiceException(e, t = {}) {
      if (this.queryCompat) {
        let r = e.Message ?? t.Message, s = de.decorateServiceException(e, t);
        if (r) s.Message = r, s.message = r;
        return s;
      }
      return de.decorateServiceException(e, t);
    }
    setQueryCompatError(e, t) {
      let r = t.headers?.["x-amzn-query-error"];
      if (e !== void 0 && r != null) {
        let [s, o] = r.split(";"), a = Object.entries(e), c = { Code: s, Type: o };
        Object.assign(e, c);
        for (let [d, f] of a) c[d] = f;
        delete c.__type, e.Error = c;
      }
    }
    queryCompatOutput(e, t) {
      if (e.Error) t.Error = e.Error;
      if (e.Type) t.Type = e.Type;
      if (e.Code) t.Code = e.Code;
    }
  }
  class zs extends _s.SmithyRpcV2CborProtocol {
    awsQueryCompatible;
    mixin;
    constructor({ defaultNamespace: e, awsQueryCompatible: t }) {
      super({ defaultNamespace: e });
      this.awsQueryCompatible = !!t, this.mixin = new Ie(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (this.awsQueryCompatible) s.headers["x-amzn-query-mode"] = "true";
      return s;
    }
    async handleError(e, t, r, s, o) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(s, r);
      let a = _s.loadSmithyRpcV2CborErrorCode(r, s) ?? "Unknown", { errorSchema: c, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = B.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (B.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m), x = {};
      for (let [N, T] of f.structIterator()) x[N] = this.deserializer.readValue(T, s[N]);
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(s, x);
      throw this.mixin.decorateServiceException(Object.assign(b, d, { $fault: f.getMergedTraits().error, message: m }, x), s);
    }
  }
  var Ha = (e) => {
    if (e == null) return e;
    if (typeof e === "number" || typeof e === "bigint") {
      let t = Error(`Received number ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    if (typeof e === "boolean") {
      let t = Error(`Received boolean ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    return e;
  }, Ga = (e) => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = e.toLowerCase();
      if (e !== "" && t !== "false" && t !== "true") {
        let r = Error(`Received string "${e}" where a boolean was expected.`);
        r.name = "Warning", console.warn(r);
      }
      return e !== "" && t !== "false";
    }
    return e;
  }, Xa = (e) => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = Number(e);
      if (t.toString() !== e) {
        let r = Error(`Received string "${e}" where a number was expected.`);
        return r.name = "Warning", console.warn(r), e;
      }
      return t;
    }
    return e;
  };
  class ge {
    serdeContext;
    setSerdeContext(e) {
      this.serdeContext = e;
    }
  }
  function Wa(e, t, r) {
    if (r?.source) {
      let s = r.source;
      if (typeof t === "number") {
        if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || s !== String(t)) if (s.includes(".")) return new G.NumericValue(s, "bigDecimal");
        else return BigInt(s);
      }
    }
    return t;
  }
  var $s = (e, t) => de.collectBody(e, t).then((r) => (t?.utf8Encoder ?? Ds.toUtf8)(r)), Wt = (e, t) => $s(e, t).then((r) => {
    if (r.length) try {
      return JSON.parse(r);
    } catch (s) {
      if (s?.name === "SyntaxError") Object.defineProperty(s, "$responseBodyText", { value: r });
      throw s;
    }
    return {};
  }), Ka = async (e, t) => {
    let r = await Wt(e, t);
    return r.message = r.message ?? r.Message, r;
  }, Kt = (e, t) => {
    let r = (a, c) => Object.keys(a).find((d) => d.toLowerCase() === c.toLowerCase()), s = (a) => {
      let c = a;
      if (typeof c === "number") c = c.toString();
      if (c.indexOf(",") >= 0) c = c.split(",")[0];
      if (c.indexOf(":") >= 0) c = c.split(":")[0];
      if (c.indexOf("#") >= 0) c = c.split("#")[1];
      return c;
    }, o = r(e.headers, "x-amzn-errortype");
    if (o !== void 0) return s(e.headers[o]);
    if (t && typeof t === "object") {
      let a = r(t, "code");
      if (a && t[a] !== void 0) return s(t[a]);
      if (t.__type !== void 0) return s(t.__type);
    }
  };
  class Qt extends ge {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    async read(e, t) {
      return this._read(e, typeof t === "string" ? JSON.parse(t, Wa) : await Wt(t, this.serdeContext));
    }
    readObject(e, t) {
      return this._read(e, t);
    }
    _read(e, t) {
      let r = t !== null && typeof t === "object", s = B.NormalizedSchema.of(e);
      if (s.isListSchema() && Array.isArray(t)) {
        let a = s.getValueSchema(), c = [], d = !!s.getMergedTraits().sparse;
        for (let f of t) if (d || f != null) c.push(this._read(a, f));
        return c;
      } else if (s.isMapSchema() && r) {
        let a = s.getValueSchema(), c = {}, d = !!s.getMergedTraits().sparse;
        for (let [f, m] of Object.entries(t)) if (d || m != null) c[f] = this._read(a, m);
        return c;
      } else if (s.isStructSchema() && r) {
        let a = {};
        for (let [c, d] of s.structIterator()) {
          let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c, m = this._read(d, t[f]);
          if (m != null) a[c] = m;
        }
        return a;
      }
      if (s.isBlobSchema() && typeof t === "string") return Ve.fromBase64(t);
      let o = s.getMergedTraits().mediaType;
      if (s.isStringSchema() && typeof t === "string" && o) {
        if (o === "application/json" || o.endsWith("+json")) return G.LazyJsonString.from(t);
      }
      if (s.isTimestampSchema() && t != null) switch (Q.determineTimestampFormat(s, this.settings)) {
        case 5:
          return G.parseRfc3339DateTimeWithOffset(t);
        case 6:
          return G.parseRfc7231DateTime(t);
        case 7:
          return G.parseEpochTimestamp(t);
        default:
          return console.warn("Missing timestamp format, parsing value with Date constructor:", t), new Date(t);
      }
      if (s.isBigIntegerSchema() && (typeof t === "number" || typeof t === "string")) return BigInt(t);
      if (s.isBigDecimalSchema() && t != null) {
        if (t instanceof G.NumericValue) return t;
        let a = t;
        if (a.type === "bigDecimal" && "string" in a) return new G.NumericValue(a.string, a.type);
        return new G.NumericValue(String(t), "bigDecimal");
      }
      if (s.isNumericSchema() && typeof t === "string") switch (t) {
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        case "NaN":
          return NaN;
      }
      if (s.isDocumentSchema()) if (r) {
        let a = Array.isArray(t) ? [] : {};
        for (let [c, d] of Object.entries(t)) if (d instanceof G.NumericValue) a[c] = d;
        else a[c] = this._read(s, d);
        return a;
      } else return structuredClone(t);
      return t;
    }
  }
  var Ms = String.fromCharCode(925);
  class Bs {
    values = /* @__PURE__ */ new Map();
    counter = 0;
    stage = 0;
    createReplacer() {
      if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      return this.stage = 1, (e, t) => {
        if (t instanceof G.NumericValue) {
          let r = `${Ms + "nv" + this.counter++}_` + t.string;
          return this.values.set(`"${r}"`, t.string), r;
        }
        if (typeof t === "bigint") {
          let r = t.toString(), s = `${Ms + "b" + this.counter++}_` + r;
          return this.values.set(`"${s}"`, r), s;
        }
        return t;
      };
    }
    replaceInJson(e) {
      if (this.stage === 0) throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      if (this.stage = 2, this.counter === 0) return e;
      for (let [t, r] of this.values) e = e.replace(t, r);
      return e;
    }
  }
  class Yt extends ge {
    settings;
    buffer;
    rootSchema;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      this.rootSchema = B.NormalizedSchema.of(e), this.buffer = this._write(this.rootSchema, t);
    }
    writeDiscriminatedDocument(e, t) {
      if (this.write(e, t), typeof this.buffer === "object") this.buffer.__type = B.NormalizedSchema.of(e).getName(true);
    }
    flush() {
      let { rootSchema: e } = this;
      if (this.rootSchema = void 0, e?.isStructSchema() || e?.isDocumentSchema()) {
        let t = new Bs();
        return t.replaceInJson(JSON.stringify(this.buffer, t.createReplacer(), 0));
      }
      return this.buffer;
    }
    _write(e, t, r) {
      let s = t !== null && typeof t === "object", o = B.NormalizedSchema.of(e);
      if (o.isListSchema() && Array.isArray(t)) {
        let a = o.getValueSchema(), c = [], d = !!o.getMergedTraits().sparse;
        for (let f of t) if (d || f != null) c.push(this._write(a, f));
        return c;
      } else if (o.isMapSchema() && s) {
        let a = o.getValueSchema(), c = {}, d = !!o.getMergedTraits().sparse;
        for (let [f, m] of Object.entries(t)) if (d || m != null) c[f] = this._write(a, m);
        return c;
      } else if (o.isStructSchema() && s) {
        let a = {};
        for (let [c, d] of o.structIterator()) {
          let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c, m = this._write(d, t[c], o);
          if (m !== void 0) a[f] = m;
        }
        return a;
      }
      if (t === null && r?.isStructSchema()) return;
      if (o.isBlobSchema() && (t instanceof Uint8Array || typeof t === "string") || o.isDocumentSchema() && t instanceof Uint8Array) {
        if (o === this.rootSchema) return t;
        return (this.serdeContext?.base64Encoder ?? Ve.toBase64)(t);
      }
      if ((o.isTimestampSchema() || o.isDocumentSchema()) && t instanceof Date) switch (Q.determineTimestampFormat(o, this.settings)) {
        case 5:
          return t.toISOString().replace(".000Z", "Z");
        case 6:
          return G.dateToUtcString(t);
        case 7:
          return t.getTime() / 1e3;
        default:
          return console.warn("Missing timestamp format, using epoch seconds", t), t.getTime() / 1e3;
      }
      if (o.isNumericSchema() && typeof t === "number") {
        if (Math.abs(t) === 1 / 0 || isNaN(t)) return String(t);
      }
      if (o.isStringSchema()) {
        if (typeof t > "u" && o.isIdempotencyToken()) return G.generateIdempotencyToken();
        let a = o.getMergedTraits().mediaType;
        if (t != null && a) {
          if (a === "application/json" || a.endsWith("+json")) return G.LazyJsonString.from(t);
        }
      }
      if (o.isDocumentSchema()) if (s) {
        let a = Array.isArray(t) ? [] : {};
        for (let [c, d] of Object.entries(t)) if (d instanceof G.NumericValue) a[c] = d;
        else a[c] = this._write(o, d);
        return a;
      } else return structuredClone(t);
      return t;
    }
  }
  class tt extends ge {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    createSerializer() {
      let e = new Yt(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new Qt(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class rt extends Q.RpcProtocol {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r }) {
      super({ defaultNamespace: e });
      this.serviceTarget = t, this.codec = new tt({ timestampFormat: { useTrait: true, default: 7 }, jsonName: false }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), this.awsQueryCompatible = !!r, this.mixin = new Ie(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (!s.path.endsWith("/")) s.path += "/";
      if (Object.assign(s.headers, { "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`, "x-amz-target": `${this.serviceTarget}.${e.name}` }), this.awsQueryCompatible) s.headers["x-amzn-query-mode"] = "true";
      if (B.deref(e.input) === "unit" || !s.body) s.body = "{}";
      return s;
    }
    getPayloadCodec() {
      return this.codec;
    }
    async handleError(e, t, r, s, o) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(s, r);
      let a = Kt(r, s) ?? "Unknown", { errorSchema: c, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = B.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (B.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m), x = {};
      for (let [N, T] of f.structIterator()) {
        let R = T.getMergedTraits().jsonName ?? N;
        x[N] = this.codec.createDeserializer().readObject(T, s[R]);
      }
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(s, x);
      throw this.mixin.decorateServiceException(Object.assign(b, d, { $fault: f.getMergedTraits().error, message: m }, x), s);
    }
  }
  class Ls extends rt {
    constructor({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r }) {
      super({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_0";
    }
    getJsonRpcVersion() {
      return "1.0";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.0";
    }
  }
  class Us extends rt {
    constructor({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r }) {
      super({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
      return "1.1";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.1";
    }
  }
  class Vs extends Q.HttpBindingProtocol {
    serializer;
    deserializer;
    codec;
    mixin = new Ie();
    constructor({ defaultNamespace: e }) {
      super({ defaultNamespace: e });
      let t = { timestampFormat: { useTrait: true, default: 7 }, httpBindings: true, jsonName: true };
      this.codec = new tt(t), this.serializer = new Q.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), this.deserializer = new Q.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
    }
    getShapeId() {
      return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
      return this.codec;
    }
    setSerdeContext(e) {
      this.codec.setSerdeContext(e), super.setSerdeContext(e);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r), o = B.NormalizedSchema.of(e.input);
      if (!s.headers["content-type"]) {
        let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
        if (a) s.headers["content-type"] = a;
      }
      if (s.body == null && s.headers["content-type"] === this.getDefaultContentType()) s.body = "{}";
      return s;
    }
    async deserializeResponse(e, t, r) {
      let s = await super.deserializeResponse(e, t, r), o = B.NormalizedSchema.of(e.output);
      for (let [a, c] of o.structIterator()) if (c.getMemberTraits().httpPayload && !(a in s)) s[a] = null;
      return s;
    }
    async handleError(e, t, r, s, o) {
      let a = Kt(r, s) ?? "Unknown", { errorSchema: c, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = B.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (B.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m);
      await this.deserializeHttpMessage(c, t, r, s);
      let x = {};
      for (let [N, T] of f.structIterator()) {
        let R = T.getMergedTraits().jsonName ?? N;
        x[N] = this.codec.createDeserializer().readObject(T, s[R]);
      }
      throw this.mixin.decorateServiceException(Object.assign(b, d, { $fault: f.getMergedTraits().error, message: m }, x), s);
    }
    getDefaultContentType() {
      return "application/json";
    }
  }
  var Qa = (e) => {
    if (e == null) return;
    if (typeof e === "object" && "__type" in e) delete e.__type;
    return de.expectUnion(e);
  };
  class st extends ge {
    settings;
    stringDeserializer;
    constructor(e) {
      super();
      this.settings = e, this.stringDeserializer = new Q.FromStringShapeDeserializer(e);
    }
    setSerdeContext(e) {
      this.serdeContext = e, this.stringDeserializer.setSerdeContext(e);
    }
    read(e, t, r) {
      let s = B.NormalizedSchema.of(e), o = s.getMemberSchemas();
      if (s.isStructSchema() && s.isMemberSchema() && !!Object.values(o).find((f) => !!f.getMemberTraits().eventPayload)) {
        let f = {}, m = Object.keys(o)[0];
        if (o[m].isBlobSchema()) f[m] = t;
        else f[m] = this.read(o[m], t);
        return f;
      }
      let c = (this.serdeContext?.utf8Encoder ?? Ds.toUtf8)(t), d = this.parseXml(c);
      return this.readSchema(e, r ? d[r] : d);
    }
    readSchema(e, t) {
      let r = B.NormalizedSchema.of(e);
      if (r.isUnitSchema()) return;
      let s = r.getMergedTraits();
      if (r.isListSchema() && !Array.isArray(t)) return this.readSchema(r, [t]);
      if (t == null) return t;
      if (typeof t === "object") {
        let o = !!s.sparse, a = !!s.xmlFlattened;
        if (r.isListSchema()) {
          let d = r.getValueSchema(), f = [], m = d.getMergedTraits().xmlName ?? "member", y = a ? t : (t[0] ?? t)[m], b = Array.isArray(y) ? y : [y];
          for (let x of b) if (x != null || o) f.push(this.readSchema(d, x));
          return f;
        }
        let c = {};
        if (r.isMapSchema()) {
          let d = r.getKeySchema(), f = r.getValueSchema(), m;
          if (a) m = Array.isArray(t) ? t : [t];
          else m = Array.isArray(t.entry) ? t.entry : [t.entry];
          let y = d.getMergedTraits().xmlName ?? "key", b = f.getMergedTraits().xmlName ?? "value";
          for (let x of m) {
            let N = x[y], T = x[b];
            if (T != null || o) c[N] = this.readSchema(f, T);
          }
          return c;
        }
        if (r.isStructSchema()) {
          for (let [d, f] of r.structIterator()) {
            let m = f.getMergedTraits(), y = !m.httpPayload ? f.getMemberTraits().xmlName ?? d : m.xmlName ?? f.getName();
            if (t[y] != null) c[d] = this.readSchema(f, t[y]);
          }
          return c;
        }
        if (r.isDocumentSchema()) return t;
        throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r.getName(true)}`);
      }
      if (r.isListSchema()) return [];
      if (r.isMapSchema() || r.isStructSchema()) return {};
      return this.stringDeserializer.read(r, t);
    }
    parseXml(e) {
      if (e.length) {
        let t;
        try {
          t = re.parseXML(e);
        } catch (a) {
          if (a && typeof a === "object") Object.defineProperty(a, "$responseBodyText", { value: e });
          throw a;
        }
        let r = "#text", s = Object.keys(t)[0], o = t[s];
        if (o[r]) o[s] = o[r], delete o[r];
        return de.getValueFromTextNode(o);
      }
      return {};
    }
  }
  class Fs extends ge {
    settings;
    buffer;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t, r = "") {
      if (this.buffer === void 0) this.buffer = "";
      let s = B.NormalizedSchema.of(e);
      if (r && !r.endsWith(".")) r += ".";
      if (s.isBlobSchema()) {
        if (typeof t === "string" || t instanceof Uint8Array) this.writeKey(r), this.writeValue((this.serdeContext?.base64Encoder ?? Ve.toBase64)(t));
      } else if (s.isBooleanSchema() || s.isNumericSchema() || s.isStringSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(String(t));
        else if (s.isIdempotencyToken()) this.writeKey(r), this.writeValue(G.generateIdempotencyToken());
      } else if (s.isBigIntegerSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(String(t));
      } else if (s.isBigDecimalSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(t instanceof G.NumericValue ? t.string : String(t));
      } else if (s.isTimestampSchema()) {
        if (t instanceof Date) switch (this.writeKey(r), Q.determineTimestampFormat(s, this.settings)) {
          case 5:
            this.writeValue(t.toISOString().replace(".000Z", "Z"));
            break;
          case 6:
            this.writeValue(de.dateToUtcString(t));
            break;
          case 7:
            this.writeValue(String(t.getTime() / 1e3));
            break;
        }
      } else if (s.isDocumentSchema()) throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${s.getName(true)}`);
      else if (s.isListSchema()) {
        if (Array.isArray(t)) if (t.length === 0) {
          if (this.settings.serializeEmptyLists) this.writeKey(r), this.writeValue("");
        } else {
          let o = s.getValueSchema(), a = this.settings.flattenLists || s.getMergedTraits().xmlFlattened, c = 1;
          for (let d of t) {
            if (d == null) continue;
            let f = this.getKey("member", o.getMergedTraits().xmlName), m = a ? `${r}${c}` : `${r}${f}.${c}`;
            this.write(o, d, m), ++c;
          }
        }
      } else if (s.isMapSchema()) {
        if (t && typeof t === "object") {
          let o = s.getKeySchema(), a = s.getValueSchema(), c = s.getMergedTraits().xmlFlattened, d = 1;
          for (let [f, m] of Object.entries(t)) {
            if (m == null) continue;
            let y = this.getKey("key", o.getMergedTraits().xmlName), b = c ? `${r}${d}.${y}` : `${r}entry.${d}.${y}`, x = this.getKey("value", a.getMergedTraits().xmlName), N = c ? `${r}${d}.${x}` : `${r}entry.${d}.${x}`;
            this.write(o, f, b), this.write(a, m, N), ++d;
          }
        }
      } else if (s.isStructSchema()) {
        if (t && typeof t === "object") for (let [o, a] of s.structIterator()) {
          if (t[o] == null && !a.isIdempotencyToken()) continue;
          let c = this.getKey(o, a.getMergedTraits().xmlName), d = `${r}${c}`;
          this.write(a, t[o], d);
        }
      } else if (s.isUnitSchema()) ;
      else throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${s.getName(true)}`);
    }
    flush() {
      if (this.buffer === void 0) throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
      let e = this.buffer;
      return delete this.buffer, e;
    }
    getKey(e, t) {
      let r = t ?? e;
      if (this.settings.capitalizeKeys) return r[0].toUpperCase() + r.slice(1);
      return r;
    }
    writeKey(e) {
      if (e.endsWith(".")) e = e.slice(0, e.length - 1);
      this.buffer += `&${Q.extendedEncodeURIComponent(e)}=`;
    }
    writeValue(e) {
      this.buffer += Q.extendedEncodeURIComponent(e);
    }
  }
  class Jt extends Q.RpcProtocol {
    options;
    serializer;
    deserializer;
    mixin = new Ie();
    constructor(e) {
      super({ defaultNamespace: e.defaultNamespace });
      this.options = e;
      let t = { timestampFormat: { useTrait: true, default: 5 }, httpBindings: false, xmlNamespace: e.xmlNamespace, serviceNamespace: e.defaultNamespace, serializeEmptyLists: true };
      this.serializer = new Fs(t), this.deserializer = new st(t);
    }
    getShapeId() {
      return "aws.protocols#awsQuery";
    }
    setSerdeContext(e) {
      this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e);
    }
    getPayloadCodec() {
      throw Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (!s.path.endsWith("/")) s.path += "/";
      if (Object.assign(s.headers, { "content-type": "application/x-www-form-urlencoded" }), B.deref(e.input) === "unit" || !s.body) s.body = "";
      let o = e.name.split("#")[1] ?? e.name;
      if (s.body = `Action=${o}&Version=${this.options.version}` + s.body, s.body.endsWith("&")) s.body = s.body.slice(-1);
      return s;
    }
    async deserializeResponse(e, t, r) {
      let s = this.deserializer, o = B.NormalizedSchema.of(e.output), a = {};
      if (r.statusCode >= 300) {
        let y = await Q.collectBody(r.body, t);
        if (y.byteLength > 0) Object.assign(a, await s.read(15, y));
        await this.handleError(e, t, r, a, this.deserializeMetadata(r));
      }
      for (let y in r.headers) {
        let b = r.headers[y];
        delete r.headers[y], r.headers[y.toLowerCase()] = b;
      }
      let c = e.name.split("#")[1] ?? e.name, d = o.isStructSchema() && this.useNestedResult() ? c + "Result" : void 0, f = await Q.collectBody(r.body, t);
      if (f.byteLength > 0) Object.assign(a, await s.read(o, f, d));
      return { $metadata: this.deserializeMetadata(r), ...a };
    }
    useNestedResult() {
      return true;
    }
    async handleError(e, t, r, s, o) {
      let a = this.loadQueryErrorCode(r, s) ?? "Unknown", c = this.loadQueryError(s), d = this.loadQueryErrorMessage(s);
      c.message = d, c.Error = { Type: c.Type, Code: c.Code, Message: d };
      let { errorSchema: f, errorMetadata: m } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, c, o, (T, R) => {
        try {
          return T.getSchema(R);
        } catch (F) {
          return T.find((k) => B.NormalizedSchema.of(k).getMergedTraits().awsQueryError?.[0] === R);
        }
      }), y = B.NormalizedSchema.of(f), x = new (B.TypeRegistry.for(f[1]).getErrorCtor(f) ?? Error)(d), N = { Error: c.Error };
      for (let [T, R] of y.structIterator()) {
        let F = R.getMergedTraits().xmlName ?? T, k = c[F] ?? s[F];
        N[T] = this.deserializer.readSchema(R, k);
      }
      throw this.mixin.decorateServiceException(Object.assign(x, m, { $fault: y.getMergedTraits().error, message: d }, N), s);
    }
    loadQueryErrorCode(e, t) {
      let r = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
      if (r !== void 0) return r;
      if (e.statusCode == 404) return "NotFound";
    }
    loadQueryError(e) {
      return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
    }
    loadQueryErrorMessage(e) {
      let t = this.loadQueryError(e);
      return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
    }
    getDefaultContentType() {
      return "application/x-www-form-urlencoded";
    }
  }
  class js extends Jt {
    options;
    constructor(e) {
      super(e);
      this.options = e;
      let t = { capitalizeKeys: true, flattenLists: true, serializeEmptyLists: false };
      Object.assign(this.serializer.settings, t);
    }
    useNestedResult() {
      return false;
    }
  }
  var qs = (e, t) => $s(e, t).then((r) => {
    if (r.length) {
      let s;
      try {
        s = re.parseXML(r);
      } catch (d) {
        if (d && typeof d === "object") Object.defineProperty(d, "$responseBodyText", { value: r });
        throw d;
      }
      let o = "#text", a = Object.keys(s)[0], c = s[a];
      if (c[o]) c[a] = c[o], delete c[o];
      return de.getValueFromTextNode(c);
    }
    return {};
  }), Ya = async (e, t) => {
    let r = await qs(e, t);
    if (r.Error) r.Error.message = r.Error.message ?? r.Error.Message;
    return r;
  }, Hs = (e, t) => {
    if (t?.Error?.Code !== void 0) return t.Error.Code;
    if (t?.Code !== void 0) return t.Code;
    if (e.statusCode == 404) return "NotFound";
  };
  class Zt extends ge {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      let r = B.NormalizedSchema.of(e);
      if (r.isStringSchema() && typeof t === "string") this.stringBuffer = t;
      else if (r.isBlobSchema()) this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? Ve.fromBase64)(t);
      else {
        this.buffer = this.writeStruct(r, t, void 0);
        let s = r.getMergedTraits();
        if (s.httpPayload && !s.xmlName) this.buffer.withName(r.getName());
      }
    }
    flush() {
      if (this.byteBuffer !== void 0) {
        let t = this.byteBuffer;
        return delete this.byteBuffer, t;
      }
      if (this.stringBuffer !== void 0) {
        let t = this.stringBuffer;
        return delete this.stringBuffer, t;
      }
      let e = this.buffer;
      if (this.settings.xmlNamespace) {
        if (!e?.attributes?.xmlns) e.addAttribute("xmlns", this.settings.xmlNamespace);
      }
      return delete this.buffer, e.toString();
    }
    writeStruct(e, t, r) {
      let s = e.getMergedTraits(), o = e.isMemberSchema() && !s.httpPayload ? e.getMemberTraits().xmlName ?? e.getMemberName() : s.xmlName ?? e.getName();
      if (!o || !e.isStructSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(true)}.`);
      let a = re.XmlNode.of(o), [c, d] = this.getXmlnsAttribute(e, r);
      for (let [f, m] of e.structIterator()) {
        let y = t[f];
        if (y != null || m.isIdempotencyToken()) {
          if (m.getMergedTraits().xmlAttribute) {
            a.addAttribute(m.getMergedTraits().xmlName ?? f, this.writeSimple(m, y));
            continue;
          }
          if (m.isListSchema()) this.writeList(m, y, a, d);
          else if (m.isMapSchema()) this.writeMap(m, y, a, d);
          else if (m.isStructSchema()) a.addChildNode(this.writeStruct(m, y, d));
          else {
            let b = re.XmlNode.of(m.getMergedTraits().xmlName ?? m.getMemberName());
            this.writeSimpleInto(m, y, b, d), a.addChildNode(b);
          }
        }
      }
      if (d) a.addAttribute(c, d);
      return a;
    }
    writeList(e, t, r, s) {
      if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(true)}`);
      let o = e.getMergedTraits(), a = e.getValueSchema(), c = a.getMergedTraits(), d = !!c.sparse, f = !!o.xmlFlattened, [m, y] = this.getXmlnsAttribute(e, s), b = (x, N) => {
        if (a.isListSchema()) this.writeList(a, Array.isArray(N) ? N : [N], x, y);
        else if (a.isMapSchema()) this.writeMap(a, N, x, y);
        else if (a.isStructSchema()) {
          let T = this.writeStruct(a, N, y);
          x.addChildNode(T.withName(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member"));
        } else {
          let T = re.XmlNode.of(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member");
          this.writeSimpleInto(a, N, T, y), x.addChildNode(T);
        }
      };
      if (f) {
        for (let x of t) if (d || x != null) b(r, x);
      } else {
        let x = re.XmlNode.of(o.xmlName ?? e.getMemberName());
        if (y) x.addAttribute(m, y);
        for (let N of t) if (d || N != null) b(x, N);
        r.addChildNode(x);
      }
    }
    writeMap(e, t, r, s, o = false) {
      if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(true)}`);
      let a = e.getMergedTraits(), c = e.getKeySchema(), f = c.getMergedTraits().xmlName ?? "key", m = e.getValueSchema(), y = m.getMergedTraits(), b = y.xmlName ?? "value", x = !!y.sparse, N = !!a.xmlFlattened, [T, R] = this.getXmlnsAttribute(e, s), F = (k, W, O) => {
        let ee = re.XmlNode.of(f, W), [Pe, q] = this.getXmlnsAttribute(c, R);
        if (q) ee.addAttribute(Pe, q);
        k.addChildNode(ee);
        let K = re.XmlNode.of(b);
        if (m.isListSchema()) this.writeList(m, O, K, R);
        else if (m.isMapSchema()) this.writeMap(m, O, K, R, true);
        else if (m.isStructSchema()) K = this.writeStruct(m, O, R);
        else this.writeSimpleInto(m, O, K, R);
        k.addChildNode(K);
      };
      if (N) {
        for (let [k, W] of Object.entries(t)) if (x || W != null) {
          let O = re.XmlNode.of(a.xmlName ?? e.getMemberName());
          F(O, k, W), r.addChildNode(O);
        }
      } else {
        let k;
        if (!o) {
          if (k = re.XmlNode.of(a.xmlName ?? e.getMemberName()), R) k.addAttribute(T, R);
          r.addChildNode(k);
        }
        for (let [W, O] of Object.entries(t)) if (x || O != null) {
          let ee = re.XmlNode.of("entry");
          F(ee, W, O), (o ? r : k).addChildNode(ee);
        }
      }
    }
    writeSimple(e, t) {
      if (t === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
      let r = B.NormalizedSchema.of(e), s = null;
      if (t && typeof t === "object") if (r.isBlobSchema()) s = (this.serdeContext?.base64Encoder ?? Ve.toBase64)(t);
      else if (r.isTimestampSchema() && t instanceof Date) switch (Q.determineTimestampFormat(r, this.settings)) {
        case 5:
          s = t.toISOString().replace(".000Z", "Z");
          break;
        case 6:
          s = de.dateToUtcString(t);
          break;
        case 7:
          s = String(t.getTime() / 1e3);
          break;
        default:
          console.warn("Missing timestamp format, using http date", t), s = de.dateToUtcString(t);
          break;
      }
      else if (r.isBigDecimalSchema() && t) {
        if (t instanceof G.NumericValue) return t.string;
        return String(t);
      } else if (r.isMapSchema() || r.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
      else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r.getName(true)}`);
      if (r.isBooleanSchema() || r.isNumericSchema() || r.isBigIntegerSchema() || r.isBigDecimalSchema()) s = String(t);
      if (r.isStringSchema()) if (t === void 0 && r.isIdempotencyToken()) s = G.generateIdempotencyToken();
      else s = String(t);
      if (s === null) throw Error(`Unhandled schema-value pair ${r.getName(true)}=${t}`);
      return s;
    }
    writeSimpleInto(e, t, r, s) {
      let o = this.writeSimple(e, t), a = B.NormalizedSchema.of(e), c = new re.XmlText(o), [d, f] = this.getXmlnsAttribute(a, s);
      if (f) r.addAttribute(d, f);
      r.addChildNode(c);
    }
    getXmlnsAttribute(e, t) {
      let r = e.getMergedTraits(), [s, o] = r.xmlNamespace ?? [];
      if (o && o !== t) return [s ? `xmlns:${s}` : "xmlns", o];
      return [void 0, void 0];
    }
  }
  class er extends ge {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    createSerializer() {
      let e = new Zt(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new st(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class Gs extends Q.HttpBindingProtocol {
    codec;
    serializer;
    deserializer;
    mixin = new Ie();
    constructor(e) {
      super(e);
      let t = { timestampFormat: { useTrait: true, default: 5 }, httpBindings: true, xmlNamespace: e.xmlNamespace, serviceNamespace: e.defaultNamespace };
      this.codec = new er(t), this.serializer = new Q.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), this.deserializer = new Q.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
    }
    getPayloadCodec() {
      return this.codec;
    }
    getShapeId() {
      return "aws.protocols#restXml";
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r), o = B.NormalizedSchema.of(e.input);
      if (!s.headers["content-type"]) {
        let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
        if (a) s.headers["content-type"] = a;
      }
      if (s.headers["content-type"] === this.getDefaultContentType()) {
        if (typeof s.body === "string") s.body = '<?xml version="1.0" encoding="UTF-8"?>' + s.body;
      }
      return s;
    }
    async deserializeResponse(e, t, r) {
      return super.deserializeResponse(e, t, r);
    }
    async handleError(e, t, r, s, o) {
      let a = Hs(r, s) ?? "Unknown", { errorSchema: c, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = B.NormalizedSchema.of(c), m = s.Error?.message ?? s.Error?.Message ?? s.message ?? s.Message ?? "Unknown", b = new (B.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m);
      await this.deserializeHttpMessage(c, t, r, s);
      let x = {};
      for (let [N, T] of f.structIterator()) {
        let R = T.getMergedTraits().xmlName ?? N, F = s.Error?.[R] ?? s[R];
        x[N] = this.codec.createDeserializer().readSchema(T, F);
      }
      throw this.mixin.decorateServiceException(Object.assign(b, d, { $fault: f.getMergedTraits().error, message: m }, x), s);
    }
    getDefaultContentType() {
      return "application/xml";
    }
  }
  Ja.AWSSDKSigV4Signer = Ba;
  Ja.AwsEc2QueryProtocol = js;
  Ja.AwsJson1_0Protocol = Ls;
  Ja.AwsJson1_1Protocol = Us;
  Ja.AwsJsonRpcProtocol = rt;
  Ja.AwsQueryProtocol = Jt;
  Ja.AwsRestJsonProtocol = Vs;
  Ja.AwsRestXmlProtocol = Gs;
  Ja.AwsSdkSigV4ASigner = Ps;
  Ja.AwsSdkSigV4Signer = et;
  Ja.AwsSmithyRpcV2CborProtocol = zs;
  Ja.JsonCodec = tt;
  Ja.JsonShapeDeserializer = Qt;
  Ja.JsonShapeSerializer = Yt;
  Ja.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = La;
  Ja.NODE_SIGV4A_CONFIG_OPTIONS = Va;
  Ja.XmlCodec = er;
  Ja.XmlShapeDeserializer = st;
  Ja.XmlShapeSerializer = Zt;
  Ja._toBool = Ga;
  Ja._toNum = Xa;
  Ja._toStr = Ha;
  Ja.awsExpectUnion = Qa;
  Ja.emitWarningIfUnsupportedVersion = Pa;
  Ja.getBearerTokenEnvKey = ks;
  Ja.loadRestJsonErrorCode = Kt;
  Ja.loadRestXmlErrorCode = Hs;
  Ja.parseJsonBody = Wt;
  Ja.parseJsonErrorBody = Ka;
  Ja.parseXmlBody = qs;
  Ja.parseXmlErrorBody = Ya;
  Ja.resolveAWSSDKSigV4Config = Fa;
  Ja.resolveAwsSdkSigV4AConfig = Ua;
  Ja.resolveAwsSdkSigV4Config = vs;
  Ja.setCredentialFeature = ka;
  Ja.setFeature = va;
  Ja.setTokenFeature = za;
  Ja.state = qt;
  Ja.validateSigningProperties = Xt;
});
var mxe = (0, import_chunk_w1d7ygsk.V)(function(Qc) {
  var Bc = (0, import_chunk_qrv5kr16.HR)(), Lc = pxe(), Uc = (0, import_chunk_3jjr3wje.yb)(), ie = MN(), Qs = void 0;
  function Vc(e) {
    if (e === void 0) return true;
    return typeof e === "string" && e.length <= 50;
  }
  function Fc(e) {
    let t = Bc.normalizeProvider(e.userAgentAppId ?? Qs), { customUserAgent: r } = e;
    return Object.assign(e, { customUserAgent: typeof r === "string" ? [[r]] : r, userAgentAppId: async () => {
      let s = await t();
      if (!Vc(s)) {
        let o = e.logger?.constructor?.name === "NoOpLogger" || !e.logger ? console : e.logger;
        if (typeof s !== "string") o?.warn("userAgentAppId must be a string or undefined.");
        else if (s.length > 50) o?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
      }
      return s;
    } });
  }
  var jc = /\d{12}\.ddb/;
  async function qc(e, t, r) {
    if (r.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") ie.setFeature(e, "PROTOCOL_RPC_V2_CBOR", "M");
    if (typeof t.retryStrategy === "function") {
      let a = await t.retryStrategy();
      if (typeof a.acquireInitialRetryToken === "function") if (a.constructor?.name?.includes("Adaptive")) ie.setFeature(e, "RETRY_MODE_ADAPTIVE", "F");
      else ie.setFeature(e, "RETRY_MODE_STANDARD", "E");
      else ie.setFeature(e, "RETRY_MODE_LEGACY", "D");
    }
    if (typeof t.accountIdEndpointMode === "function") {
      let a = e.endpointV2;
      if (String(a?.url?.hostname).match(jc)) ie.setFeature(e, "ACCOUNT_ID_ENDPOINT", "O");
      switch (await t.accountIdEndpointMode?.()) {
        case "disabled":
          ie.setFeature(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
          break;
        case "preferred":
          ie.setFeature(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
          break;
        case "required":
          ie.setFeature(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
          break;
      }
    }
    let o = e.__smithy_context?.selectedHttpAuthScheme?.identity;
    if (o?.$source) {
      let a = o;
      if (a.accountId) ie.setFeature(e, "RESOLVED_ACCOUNT_ID", "T");
      for (let [c, d] of Object.entries(a.$source ?? {})) ie.setFeature(e, c, d);
    }
  }
  var Xs = "user-agent", tr = "x-amz-user-agent", Ws = " ", rr = "/", Hc = /[^!$%&'*+\-.^_`|~\w]/g, Gc = /[^!$%&'*+\-.^_`|~\w#]/g, Ks = "-", Xc = 1024;
  function Wc(e) {
    let t = "";
    for (let r in e) {
      let s = e[r];
      if (t.length + s.length + 1 <= Xc) {
        if (t.length) t += "," + s;
        else t += s;
        continue;
      }
      break;
    }
    return t;
  }
  var Ys = (e) => (t, r) => async (s) => {
    let { request: o } = s;
    if (!Uc.HttpRequest.isInstance(o)) return t(s);
    let { headers: a } = o, c = r?.userAgent?.map(nt) || [], d = (await e.defaultUserAgentProvider()).map(nt);
    await qc(r, e, s);
    let f = r;
    d.push(`m/${Wc(Object.assign({}, r.__smithy_context?.features, f.__aws_sdk_context?.features))}`);
    let m = e?.customUserAgent?.map(nt) || [], y = await e.userAgentAppId();
    if (y) d.push(nt(["app", `${y}`]));
    let b = Lc.getUserAgentPrefix(), x = (b ? [b] : []).concat([...d, ...c, ...m]).join(Ws), N = [...d.filter((T) => T.startsWith("aws-sdk-")), ...m].join(Ws);
    if (e.runtime !== "browser") {
      if (N) a[tr] = a[tr] ? `${a[Xs]} ${N}` : N;
      a[Xs] = x;
    } else a[tr] = x;
    return t({ ...s, request: o });
  }, nt = (e) => {
    let t = e[0].split(rr).map((c) => c.replace(Hc, Ks)).join(rr), r = e[1]?.replace(Gc, Ks), s = t.indexOf(rr), o = t.substring(0, s), a = t.substring(s + 1);
    if (o === "api") a = a.toLowerCase();
    return [o, a, r].filter((c) => c && c.length > 0).reduce((c, d, f) => {
      switch (f) {
        case 0:
          return d;
        case 1:
          return `${c}/${d}`;
        default:
          return `${c}#${d}`;
      }
    }, "");
  }, Js = { name: "getUserAgentMiddleware", step: "build", priority: "low", tags: ["SET_USER_AGENT", "USER_AGENT"], override: true }, Kc = (e) => ({ applyToStack: (t) => {
    t.add(Ys(e), Js);
  } });
  Qc.DEFAULT_UA_APP_ID = Qs;
  Qc.getUserAgentMiddlewareOptions = Js;
  Qc.getUserAgentPlugin = Kc;
  Qc.resolveUserAgentConfig = Fc;
  Qc.userAgentMiddleware = Ys;
});
var FLe = (0, import_chunk_w1d7ygsk.V)(function(nu) {
  var ru = (0, import_chunk_3jjr3wje.yb)(), Zs = "content-length";
  function en(e) {
    return (t) => async (r) => {
      let s = r.request;
      if (ru.HttpRequest.isInstance(s)) {
        let { body: o, headers: a } = s;
        if (o && Object.keys(a).map((c) => c.toLowerCase()).indexOf(Zs) === -1) try {
          let c = e(o);
          s.headers = { ...s.headers, [Zs]: String(c) };
        } catch (c) {
        }
      }
      return t({ ...r, request: s });
    };
  }
  var tn = { step: "build", tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"], name: "contentLengthMiddleware", override: true }, su = (e) => ({ applyToStack: (t) => {
    t.add(en(e.bodyLengthChecker), tn);
  } });
  nu.contentLengthMiddleware = en;
  nu.contentLengthMiddlewareOptions = tn;
  nu.getContentLengthPlugin = su;
});
var an = (0, import_chunk_w1d7ygsk.V)(function(nn) {
  Object.defineProperty(nn, "__esModule", { value: true });
  nn.getEndpointUrlConfig = void 0;
  var it = (0, import_chunk_wymssx1r.C4)(), rn = "AWS_ENDPOINT_URL", sn = "endpoint_url", cu = (e) => ({ environmentVariableSelector: (t) => {
    let r = e.split(" ").map((a) => a.toUpperCase()), s = t[[rn, ...r].join("_")];
    if (s) return s;
    let o = t[rn];
    if (o) return o;
    return;
  }, configFileSelector: (t, r) => {
    if (r && t.services) {
      let o = r[["services", t.services].join(it.CONFIG_PREFIX_SEPARATOR)];
      if (o) {
        let a = e.split(" ").map((d) => d.toLowerCase()), c = o[[a.join("_"), sn].join(it.CONFIG_PREFIX_SEPARATOR)];
        if (c) return c;
      }
    }
    let s = t[sn];
    if (s) return s;
    return;
  }, default: void 0 });
  nn.getEndpointUrlConfig = cu;
});
var hn = (0, import_chunk_w1d7ygsk.V)(function(ln) {
  Object.defineProperty(ln, "__esModule", { value: true });
  ln.getEndpointFromConfig = void 0;
  var cn = (0, import_chunk_tf0gwgs2.Rj)(), un = an(), uu = async (e) => cn.loadConfig(un.getEndpointUrlConfig(e ?? ""))();
  ln.getEndpointFromConfig = uu;
});
var FZ = (0, import_chunk_w1d7ygsk.V)(function(bu) {
  var pn = hn(), fn = (0, import_chunk_eebp24wr.Kre)(), lu = (0, import_chunk_qrv5kr16.HR)(), ot = (0, import_chunk_jybgpkft.Aj)(), du = (0, import_chunk_qrv5kr16.hzi)(), hu = async (e) => {
    let t = e?.Bucket || "";
    if (typeof e.Bucket === "string") e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    if (yu(t)) {
      if (e.ForcePathStyle === true) throw Error("Path-style addressing cannot be used with ARN buckets");
    } else if (!gu(t) || t.indexOf(".") !== -1 && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) e.ForcePathStyle = true;
    if (e.DisableMultiRegionAccessPoints) e.disableMultiRegionAccessPoints = true, e.DisableMRAP = true;
    return e;
  }, fu = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, pu = /(\d+\.){3}\d+/, mu = /\.\./, gu = (e) => fu.test(e) && !pu.test(e) && !mu.test(e), yu = (e) => {
    let [t, r, s, , , o] = e.split(":"), a = t === "arn" && e.split(":").length >= 6, c = Boolean(a && r && s && o);
    if (a && !c) throw Error(`Invalid ARN: ${e} was an invalid ARN.`);
    return c;
  }, Eu = (e, t, r) => {
    let s = async () => {
      let o = r[e] ?? r[t];
      if (typeof o === "function") return o();
      return o;
    };
    if (e === "credentialScope" || t === "CredentialScope") return async () => {
      let o = typeof r.credentials === "function" ? await r.credentials() : r.credentials;
      return o?.credentialScope ?? o?.CredentialScope;
    };
    if (e === "accountId" || t === "AccountId") return async () => {
      let o = typeof r.credentials === "function" ? await r.credentials() : r.credentials;
      return o?.accountId ?? o?.AccountId;
    };
    if (e === "endpoint" || t === "endpoint") return async () => {
      if (r.isCustomEndpoint === false) return;
      let o = await s();
      if (o && typeof o === "object") {
        if ("url" in o) return o.url.href;
        if ("hostname" in o) {
          let { protocol: a, hostname: c, port: d, path: f } = o;
          return `${a}//${c}${d ? ":" + d : ""}${f}`;
        }
      }
      return o;
    };
    return s;
  }, sr = (e) => {
    if (typeof e === "object") {
      if ("url" in e) return fn.parseUrl(e.url);
      return e;
    }
    return fn.parseUrl(e);
  }, mn = async (e, t, r, s) => {
    if (!r.isCustomEndpoint) {
      let c;
      if (r.serviceConfiguredEndpoint) c = await r.serviceConfiguredEndpoint();
      else c = await pn.getEndpointFromConfig(r.serviceId);
      if (c) r.endpoint = () => Promise.resolve(sr(c)), r.isCustomEndpoint = true;
    }
    let o = await gn(e, t, r);
    if (typeof r.endpointProvider !== "function") throw Error("config.endpointProvider is not set.");
    return r.endpointProvider(o, s);
  }, gn = async (e, t, r) => {
    let s = {}, o = t?.getEndpointParameterInstructions?.() || {};
    for (let [a, c] of Object.entries(o)) switch (c.type) {
      case "staticContextParams":
        s[a] = c.value;
        break;
      case "contextParams":
        s[a] = e[c.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        s[a] = await Eu(c.name, a, r)();
        break;
      case "operationContextParams":
        s[a] = c.get(e);
        break;
      default:
        throw Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(c));
    }
    if (Object.keys(o).length === 0) Object.assign(s, r);
    if (String(r.serviceId).toLowerCase() === "s3") await hu(s);
    return s;
  }, yn = ({ config: e, instructions: t }) => (r, s) => async (o) => {
    if (e.isCustomEndpoint) lu.setFeature(s, "ENDPOINT_OVERRIDE", "N");
    let a = await mn(o.input, { getEndpointParameterInstructions() {
      return t;
    } }, { ...e }, s);
    s.endpointV2 = a, s.authSchemes = a.properties?.authSchemes;
    let c = s.authSchemes?.[0];
    if (c) {
      s.signing_region = c.signingRegion, s.signing_service = c.signingName;
      let f = ot.getSmithyContext(s)?.selectedHttpAuthScheme?.httpAuthOption;
      if (f) f.signingProperties = Object.assign(f.signingProperties || {}, { signing_region: c.signingRegion, signingRegion: c.signingRegion, signing_service: c.signingName, signingName: c.signingName, signingRegionSet: c.signingRegionSet }, c.properties);
    }
    return r({ ...o });
  }, En = { step: "serialize", tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"], name: "endpointV2Middleware", override: true, relation: "before", toMiddleware: du.serializerMiddlewareOption.name }, Su = (e, t) => ({ applyToStack: (r) => {
    r.addRelativeTo(yn({ config: e, instructions: t }), En);
  } }), wu = (e) => {
    let t = e.tls ?? true, { endpoint: r, useDualstackEndpoint: s, useFipsEndpoint: o } = e, a = r != null ? async () => sr(await ot.normalizeProvider(r)()) : void 0, d = Object.assign(e, { endpoint: a, tls: t, isCustomEndpoint: !!r, useDualstackEndpoint: ot.normalizeProvider(s ?? false), useFipsEndpoint: ot.normalizeProvider(o ?? false) }), f = void 0;
    return d.serviceConfiguredEndpoint = async () => {
      if (e.serviceId && !f) f = pn.getEndpointFromConfig(e.serviceId);
      return f;
    }, d;
  }, xu = (e) => {
    let { endpoint: t } = e;
    if (t === void 0) e.endpoint = async () => {
      throw Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
    };
    return e;
  };
  bu.endpointMiddleware = yn;
  bu.endpointMiddlewareOptions = En;
  bu.getEndpointFromInstructions = mn;
  bu.getEndpointPlugin = Su;
  bu.resolveEndpointConfig = wu;
  bu.resolveEndpointRequiredConfig = xu;
  bu.resolveParams = gn;
  bu.toEndpointV1 = sr;
});
var ir = (0, import_chunk_w1d7ygsk.V)(function(Uu) {
  var Mu = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"], Du = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"], Pu = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"], ku = [500, 502, 503, 504], vu = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"], zu = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"], Sn = (e) => e?.$retryable !== void 0, $u = (e) => Mu.includes(e.name), wn = (e) => e.$metadata?.clockSkewCorrected, xn = (e) => {
    let t = /* @__PURE__ */ new Set(["Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed"]);
    if (!(e && e instanceof TypeError)) return false;
    return t.has(e.message);
  }, Bu = (e) => e.$metadata?.httpStatusCode === 429 || Du.includes(e.name) || e.$retryable?.throttling == true, nr = (e, t = 0) => Sn(e) || wn(e) || Pu.includes(e.name) || vu.includes(e?.code || "") || zu.includes(e?.code || "") || ku.includes(e.$metadata?.httpStatusCode || 0) || xn(e) || e.cause !== void 0 && t <= 10 && nr(e.cause, t + 1), Lu = (e) => {
    if (e.$metadata?.httpStatusCode !== void 0) {
      let t = e.$metadata.httpStatusCode;
      if (500 <= t && t <= 599 && !nr(e)) return true;
      return false;
    }
    return false;
  };
  Uu.isBrowserNetworkError = xn;
  Uu.isClockSkewCorrectedError = wn;
  Uu.isClockSkewError = $u;
  Uu.isRetryableByTrait = Sn;
  Uu.isServerError = Lu;
  Uu.isThrottlingError = Bu;
  Uu.isTransientError = nr;
});
var hxe = (0, import_chunk_w1d7ygsk.V)(function(Zu) {
  var Wu = ir();
  Zu.RETRY_MODES = void 0;
  (function(e) {
    e.STANDARD = "standard", e.ADAPTIVE = "adaptive";
  })(Zu.RETRY_MODES || (Zu.RETRY_MODES = {}));
  var or = 3, Ku = Zu.RETRY_MODES.STANDARD;
  class at {
    static setTimeoutFn = setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    currentCapacity = 0;
    enabled = false;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(e) {
      this.beta = e?.beta ?? 0.7, this.minCapacity = e?.minCapacity ?? 1, this.minFillRate = e?.minFillRate ?? 0.5, this.scaleConstant = e?.scaleConstant ?? 0.4, this.smooth = e?.smooth ?? 0.8;
      let t = this.getCurrentTimeInSeconds();
      this.lastThrottleTime = t, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1e3;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(e) {
      if (!this.enabled) return;
      if (this.refillTokenBucket(), e > this.currentCapacity) {
        let t = (e - this.currentCapacity) / this.fillRate * 1e3;
        await new Promise((r) => at.setTimeoutFn(r, t));
      }
      this.currentCapacity = this.currentCapacity - e;
    }
    refillTokenBucket() {
      let e = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = e;
        return;
      }
      let t = (e - this.lastTimestamp) * this.fillRate;
      this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t), this.lastTimestamp = e;
    }
    updateClientSendingRate(e) {
      let t;
      if (this.updateMeasuredRate(), Wu.isThrottlingError(e)) {
        let s = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        this.lastMaxRate = s, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(s), this.enableTokenBucket();
      } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
      let r = Math.min(t, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(r);
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 0.3333333333333333));
    }
    cubicThrottle(e) {
      return this.getPrecise(e * this.beta);
    }
    cubicSuccess(e) {
      return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = true;
    }
    updateTokenBucketRate(e) {
      this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
      let e = this.getCurrentTimeInSeconds(), t = Math.floor(e * 2) / 2;
      if (this.requestCount++, t > this.lastTxRateBucket) {
        let r = this.requestCount / (t - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(r * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t;
      }
    }
    getPrecise(e) {
      return parseFloat(e.toFixed(8));
    }
  }
  var Fe = 100, cr = 2e4, Nn = 500, ar = 500, Tn = 5, _n = 10, Cn = 1, Qu = "amz-sdk-invocation-id", Yu = "amz-sdk-request", Ju = () => {
    let e = Fe;
    return { computeNextBackoffDelay: (s) => Math.floor(Math.min(cr, Math.random() * 2 ** s * e)), setDelayBase: (s) => {
      e = s;
    } };
  }, bn = ({ retryDelay: e, retryCount: t, retryCost: r }) => ({ getRetryCount: () => t, getRetryDelay: () => Math.min(cr, e), getRetryCost: () => r });
  class ct {
    maxAttempts;
    mode = Zu.RETRY_MODES.STANDARD;
    capacity = ar;
    retryBackoffStrategy = Ju();
    maxAttemptsProvider;
    constructor(e) {
      this.maxAttempts = e, this.maxAttemptsProvider = typeof e === "function" ? e : async () => e;
    }
    async acquireInitialRetryToken(e) {
      return bn({ retryDelay: Fe, retryCount: 0 });
    }
    async refreshRetryTokenForRetry(e, t) {
      let r = await this.getMaxAttempts();
      if (this.shouldRetry(e, t, r)) {
        let s = t.errorType;
        this.retryBackoffStrategy.setDelayBase(s === "THROTTLING" ? Nn : Fe);
        let o = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()), a = t.retryAfterHint ? Math.max(t.retryAfterHint.getTime() - Date.now() || 0, o) : o, c = this.getCapacityCost(s);
        return this.capacity -= c, bn({ retryDelay: a, retryCount: e.getRetryCount() + 1, retryCost: c });
      }
      throw Error("No retry token available");
    }
    recordSuccess(e) {
      this.capacity = Math.max(ar, this.capacity + (e.getRetryCost() ?? Cn));
    }
    getCapacity() {
      return this.capacity;
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch (e) {
        return console.warn(`Max attempts provider could not resolve. Using default of ${or}`), or;
      }
    }
    shouldRetry(e, t, r) {
      return e.getRetryCount() + 1 < r && this.capacity >= this.getCapacityCost(t.errorType) && this.isRetryableError(t.errorType);
    }
    getCapacityCost(e) {
      return e === "TRANSIENT" ? _n : Tn;
    }
    isRetryableError(e) {
      return e === "THROTTLING" || e === "TRANSIENT";
    }
  }
  class An {
    maxAttemptsProvider;
    rateLimiter;
    standardRetryStrategy;
    mode = Zu.RETRY_MODES.ADAPTIVE;
    constructor(e, t) {
      this.maxAttemptsProvider = e;
      let { rateLimiter: r } = t ?? {};
      this.rateLimiter = r ?? new at(), this.standardRetryStrategy = new ct(e);
    }
    async acquireInitialRetryToken(e) {
      return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(e);
    }
    async refreshRetryTokenForRetry(e, t) {
      return this.rateLimiter.updateClientSendingRate(t), this.standardRetryStrategy.refreshRetryTokenForRetry(e, t);
    }
    recordSuccess(e) {
      this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e);
    }
  }
  class Rn extends ct {
    computeNextBackoffDelay;
    constructor(e, t = Fe) {
      super(typeof e === "function" ? e : async () => e);
      if (typeof t === "number") this.computeNextBackoffDelay = () => t;
      else this.computeNextBackoffDelay = t;
    }
    async refreshRetryTokenForRetry(e, t) {
      let r = await super.refreshRetryTokenForRetry(e, t);
      return r.getRetryDelay = () => this.computeNextBackoffDelay(r.getRetryCount()), r;
    }
  }
  Zu.AdaptiveRetryStrategy = An;
  Zu.ConfiguredRetryStrategy = Rn;
  Zu.DEFAULT_MAX_ATTEMPTS = or;
  Zu.DEFAULT_RETRY_DELAY_BASE = Fe;
  Zu.DEFAULT_RETRY_MODE = Ku;
  Zu.DefaultRateLimiter = at;
  Zu.INITIAL_RETRY_TOKENS = ar;
  Zu.INVOCATION_ID_HEADER = Qu;
  Zu.MAXIMUM_RETRY_DELAY = cr;
  Zu.NO_RETRY_INCREMENT = Cn;
  Zu.REQUEST_HEADER = Yu;
  Zu.RETRY_COST = Tn;
  Zu.StandardRetryStrategy = ct;
  Zu.THROTTLING_RETRY_DELAY_BASE = Nn;
  Zu.TIMEOUT_RETRY_COST = _n;
});
var Dn = (0, import_chunk_w1d7ygsk.V)(function(On) {
  Object.defineProperty(On, "__esModule", { value: true });
  On.isStreamingPayload = void 0;
  var In = (0, import_chunk_w1d7ygsk.ft)("stream"), ml = (e) => e?.body instanceof In.Readable || typeof ReadableStream < "u" && e?.body instanceof ReadableStream;
  On.isStreamingPayload = ml;
});
var uX = (0, import_chunk_w1d7ygsk.V)(function(Rl) {
  var j = hxe(), Me = (0, import_chunk_3jjr3wje.yb)(), ye = ir(), kn = (0, import_chunk_6v7p7bta._zi)(), Pn = (0, import_chunk_jybgpkft.Aj)(), gl = (0, import_chunk_1tzm94k1.Bh)(), yl = Dn(), El = (e, t) => {
    let r = e, { NO_RETRY_INCREMENT: s, RETRY_COST: o, TIMEOUT_RETRY_COST: a } = j, c = e, d = (b) => b.name === "TimeoutError" ? a : o, f = (b) => d(b) <= c;
    return Object.freeze({ hasRetryTokens: f, retrieveRetryTokens: (b) => {
      if (!f(b)) throw Error("No retry token available");
      let x = d(b);
      return c -= x, x;
    }, releaseRetryTokens: (b) => {
      c += b ?? s, c = Math.min(c, r);
    } });
  }, vn = (e, t) => Math.floor(Math.min(j.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** t * e)), zn = (e) => {
    if (!e) return false;
    return ye.isRetryableByTrait(e) || ye.isClockSkewError(e) || ye.isThrottlingError(e) || ye.isTransientError(e);
  }, $n = (e) => {
    if (e instanceof Error) return e;
    if (e instanceof Object) return Object.assign(Error(), e);
    if (typeof e === "string") return Error(e);
    return Error(`AWS SDK error wrapper for ${e}`);
  };
  class dr {
    maxAttemptsProvider;
    retryDecider;
    delayDecider;
    retryQuota;
    mode = j.RETRY_MODES.STANDARD;
    constructor(e, t) {
      this.maxAttemptsProvider = e, this.retryDecider = t?.retryDecider ?? zn, this.delayDecider = t?.delayDecider ?? vn, this.retryQuota = t?.retryQuota ?? El(j.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(e, t, r) {
      return t < r && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
    }
    async getMaxAttempts() {
      let e;
      try {
        e = await this.maxAttemptsProvider();
      } catch (t) {
        e = j.DEFAULT_MAX_ATTEMPTS;
      }
      return e;
    }
    async retry(e, t, r) {
      let s, o = 0, a = 0, c = await this.getMaxAttempts(), { request: d } = t;
      if (Me.HttpRequest.isInstance(d)) d.headers[j.INVOCATION_ID_HEADER] = kn.v4();
      while (true) try {
        if (Me.HttpRequest.isInstance(d)) d.headers[j.REQUEST_HEADER] = `attempt=${o + 1}; max=${c}`;
        if (r?.beforeRequest) await r.beforeRequest();
        let { response: f, output: m } = await e(t);
        if (r?.afterRequest) r.afterRequest(f);
        return this.retryQuota.releaseRetryTokens(s), m.$metadata.attempts = o + 1, m.$metadata.totalRetryDelay = a, { response: f, output: m };
      } catch (f) {
        let m = $n(f);
        if (o++, this.shouldRetry(m, o, c)) {
          s = this.retryQuota.retrieveRetryTokens(m);
          let y = this.delayDecider(ye.isThrottlingError(m) ? j.THROTTLING_RETRY_DELAY_BASE : j.DEFAULT_RETRY_DELAY_BASE, o), b = Sl(m.$response), x = Math.max(b || 0, y);
          a += x, await new Promise((N) => setTimeout(N, x));
          continue;
        }
        if (!m.$metadata) m.$metadata = {};
        throw m.$metadata.attempts = o, m.$metadata.totalRetryDelay = a, m;
      }
    }
  }
  var Sl = (e) => {
    if (!Me.HttpResponse.isInstance(e)) return;
    let t = Object.keys(e.headers).find((a) => a.toLowerCase() === "retry-after");
    if (!t) return;
    let r = e.headers[t], s = Number(r);
    if (!Number.isNaN(s)) return s * 1e3;
    return new Date(r).getTime() - Date.now();
  };
  class Bn extends dr {
    rateLimiter;
    constructor(e, t) {
      let { rateLimiter: r, ...s } = t ?? {};
      super(e, s);
      this.rateLimiter = r ?? new j.DefaultRateLimiter(), this.mode = j.RETRY_MODES.ADAPTIVE;
    }
    async retry(e, t) {
      return super.retry(e, t, { beforeRequest: async () => this.rateLimiter.getSendToken(), afterRequest: (r) => {
        this.rateLimiter.updateClientSendingRate(r);
      } });
    }
  }
  var ur = "AWS_MAX_ATTEMPTS", lr = "max_attempts", wl = { environmentVariableSelector: (e) => {
    let t = e[ur];
    if (!t) return;
    let r = parseInt(t);
    if (Number.isNaN(r)) throw Error(`Environment variable ${ur} mast be a number, got "${t}"`);
    return r;
  }, configFileSelector: (e) => {
    let t = e[lr];
    if (!t) return;
    let r = parseInt(t);
    if (Number.isNaN(r)) throw Error(`Shared config file entry ${lr} mast be a number, got "${t}"`);
    return r;
  }, default: j.DEFAULT_MAX_ATTEMPTS }, xl = (e) => {
    let { retryStrategy: t, retryMode: r, maxAttempts: s } = e, o = Pn.normalizeProvider(s ?? j.DEFAULT_MAX_ATTEMPTS);
    return Object.assign(e, { maxAttempts: o, retryStrategy: async () => {
      if (t) return t;
      if (await Pn.normalizeProvider(r)() === j.RETRY_MODES.ADAPTIVE) return new j.AdaptiveRetryStrategy(o);
      return new j.StandardRetryStrategy(o);
    } });
  }, Ln = "AWS_RETRY_MODE", Un = "retry_mode", bl = { environmentVariableSelector: (e) => e[Ln], configFileSelector: (e) => e[Un], default: j.DEFAULT_RETRY_MODE }, Vn = () => (e) => async (t) => {
    let { request: r } = t;
    if (Me.HttpRequest.isInstance(r)) delete r.headers[j.INVOCATION_ID_HEADER], delete r.headers[j.REQUEST_HEADER];
    return e(t);
  }, Fn = { name: "omitRetryHeadersMiddleware", tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"], relation: "before", toMiddleware: "awsAuthMiddleware", override: true }, Nl = (e) => ({ applyToStack: (t) => {
    t.addRelativeTo(Vn(), Fn);
  } }), jn = (e) => (t, r) => async (s) => {
    let o = await e.retryStrategy(), a = await e.maxAttempts();
    if (Tl(o)) {
      o = o;
      let c = await o.acquireInitialRetryToken(r.partition_id), d = Error(), f = 0, m = 0, { request: y } = s, b = Me.HttpRequest.isInstance(y);
      if (b) y.headers[j.INVOCATION_ID_HEADER] = kn.v4();
      while (true) try {
        if (b) y.headers[j.REQUEST_HEADER] = `attempt=${f + 1}; max=${a}`;
        let { response: x, output: N } = await t(s);
        return o.recordSuccess(c), N.$metadata.attempts = f + 1, N.$metadata.totalRetryDelay = m, { response: x, output: N };
      } catch (x) {
        let N = _l(x);
        if (d = $n(x), b && yl.isStreamingPayload(y)) throw (r.logger instanceof gl.NoOpLogger ? console : r.logger)?.warn("An error was encountered in a non-retryable streaming request."), d;
        try {
          c = await o.refreshRetryTokenForRetry(c, N);
        } catch (R) {
          if (!d.$metadata) d.$metadata = {};
          throw d.$metadata.attempts = f + 1, d.$metadata.totalRetryDelay = m, d;
        }
        f = c.getRetryCount();
        let T = c.getRetryDelay();
        m += T, await new Promise((R) => setTimeout(R, T));
      }
    } else {
      if (o = o, o?.mode) r.userAgent = [...r.userAgent || [], ["cfg/retry-mode", o.mode]];
      return o.retry(t, s);
    }
  }, Tl = (e) => typeof e.acquireInitialRetryToken < "u" && typeof e.refreshRetryTokenForRetry < "u" && typeof e.recordSuccess < "u", _l = (e) => {
    let t = { error: e, errorType: Cl(e) }, r = Hn(e.$response);
    if (r) t.retryAfterHint = r;
    return t;
  }, Cl = (e) => {
    if (ye.isThrottlingError(e)) return "THROTTLING";
    if (ye.isTransientError(e)) return "TRANSIENT";
    if (ye.isServerError(e)) return "SERVER_ERROR";
    return "CLIENT_ERROR";
  }, qn = { name: "retryMiddleware", tags: ["RETRY"], step: "finalizeRequest", priority: "high", override: true }, Al = (e) => ({ applyToStack: (t) => {
    t.add(jn(e), qn);
  } }), Hn = (e) => {
    if (!Me.HttpResponse.isInstance(e)) return;
    let t = Object.keys(e.headers).find((a) => a.toLowerCase() === "retry-after");
    if (!t) return;
    let r = e.headers[t], s = Number(r);
    if (!Number.isNaN(s)) return new Date(s * 1e3);
    return new Date(r);
  };
  Rl.AdaptiveRetryStrategy = Bn;
  Rl.CONFIG_MAX_ATTEMPTS = lr;
  Rl.CONFIG_RETRY_MODE = Un;
  Rl.ENV_MAX_ATTEMPTS = ur;
  Rl.ENV_RETRY_MODE = Ln;
  Rl.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = wl;
  Rl.NODE_RETRY_MODE_CONFIG_OPTIONS = bl;
  Rl.StandardRetryStrategy = dr;
  Rl.defaultDelayDecider = vn;
  Rl.defaultRetryDecider = zn;
  Rl.getOmitRetryHeadersPlugin = Nl;
  Rl.getRetryAfterHint = Hn;
  Rl.getRetryPlugin = Al;
  Rl.omitRetryHeadersMiddleware = Vn;
  Rl.omitRetryHeadersMiddlewareOptions = Fn;
  Rl.resolveRetryConfig = xl;
  Rl.retryMiddleware = jn;
  Rl.retryMiddlewareOptions = qn;
});
var $Le = (0, import_chunk_w1d7ygsk.V)(function(Jl) {
  var Gn = (0, import_chunk_w1d7ygsk.ft)("os"), hr = (0, import_chunk_w1d7ygsk.ft)("process"), Xl = mxe(), Xn = { isCrtAvailable: false }, Wl = () => {
    if (Xn.isCrtAvailable) return ["md/crt-avail"];
    return null;
  }, Wn = ({ serviceId: e, clientVersion: t }) => async (r) => {
    let s = [["aws-sdk-js", t], ["ua", "2.1"], [`os/${Gn.platform()}`, Gn.release()], ["lang/js"], ["md/nodejs", `${hr.versions.node}`]], o = Wl();
    if (o) s.push(o);
    if (e) s.push([`api/${e}`, t]);
    if (hr.env.AWS_EXECUTION_ENV) s.push([`exec-env/${hr.env.AWS_EXECUTION_ENV}`]);
    let a = await r?.userAgentAppId?.();
    return a ? [...s, [`app/${a}`]] : [...s];
  }, Kl = Wn, Kn = "AWS_SDK_UA_APP_ID", Qn = "sdk_ua_app_id", Ql = "sdk-ua-app-id", Yl = { environmentVariableSelector: (e) => e[Kn], configFileSelector: (e) => e[Qn] ?? e[Ql], default: Xl.DEFAULT_UA_APP_ID };
  Jl.NODE_APP_ID_CONFIG_OPTIONS = Yl;
  Jl.UA_APP_ID_ENV_NAME = Kn;
  Jl.UA_APP_ID_INI_NAME = Qn;
  Jl.createDefaultUserAgentProvider = Wn;
  Jl.crtAvailability = Xn;
  Jl.defaultUserAgent = Kl;
});
var ULe = (0, import_chunk_w1d7ygsk.V)(function(ad) {
  var fr = (0, import_chunk_z3ydstra.k4n)(), id = (0, import_chunk_z3ydstra.SL)(), od = (0, import_chunk_w1d7ygsk.ft)("buffer"), Yn = (0, import_chunk_w1d7ygsk.ft)("crypto");
  class Zn {
    algorithmIdentifier;
    secret;
    hash;
    constructor(e, t) {
      this.algorithmIdentifier = e, this.secret = t, this.reset();
    }
    update(e, t) {
      this.hash.update(id.toUint8Array(Jn(e, t)));
    }
    digest() {
      return Promise.resolve(this.hash.digest());
    }
    reset() {
      this.hash = this.secret ? Yn.createHmac(this.algorithmIdentifier, Jn(this.secret)) : Yn.createHash(this.algorithmIdentifier);
    }
  }
  function Jn(e, t) {
    if (od.Buffer.isBuffer(e)) return e;
    if (typeof e === "string") return fr.fromString(e, t);
    if (ArrayBuffer.isView(e)) return fr.fromArrayBuffer(e.buffer, e.byteOffset, e.byteLength);
    return fr.fromArrayBuffer(e);
  }
  ad.Hash = Zn;
});
var BLe = (0, import_chunk_w1d7ygsk.V)(function(ld) {
  var pr = (0, import_chunk_w1d7ygsk.ft)("fs"), ud = (e) => {
    if (!e) return 0;
    if (typeof e === "string") return Buffer.byteLength(e);
    else if (typeof e.byteLength === "number") return e.byteLength;
    else if (typeof e.size === "number") return e.size;
    else if (typeof e.start === "number" && typeof e.end === "number") return e.end + 1 - e.start;
    else if (e instanceof pr.ReadStream) {
      if (e.path != null) return pr.lstatSync(e.path).size;
      else if (typeof e.fd === "number") return pr.fstatSync(e.fd).size;
    }
    throw Error(`Body Length computation failed for ${e}`);
  };
  ld.calculateBodyLength = ud;
});
var WLe = (0, import_chunk_w1d7ygsk.V)(function(Sd) {
  var ei = Ut(), L = (0, import_chunk_6v7p7bta.Tj)(), he = (0, import_chunk_1tzm94k1.Bh)(), Y = (0, import_chunk_6v7p7bta.Run)(), X = (0, import_chunk_6v7p7bta.Ujn)(), je = (0, import_chunk_z3ydstra.xB)(), ri = (0, import_chunk_z3ydstra.SL)(), se = jt();
  class De {
    queryCompat;
    constructor(e = false) {
      this.queryCompat = e;
    }
    resolveRestContentType(e, t) {
      let r = t.getMemberSchemas(), s = Object.values(r).find((o) => !!o.getMergedTraits().httpPayload);
      if (s) {
        let o = s.getMergedTraits().mediaType;
        if (o) return o;
        else if (s.isStringSchema()) return "text/plain";
        else if (s.isBlobSchema()) return "application/octet-stream";
        else return e;
      } else if (!t.isUnitSchema()) {
        if (Object.values(r).find((a) => {
          let { httpQuery: c, httpQueryParams: d, httpHeader: f, httpLabel: m, httpPrefixHeaders: y } = a.getMergedTraits();
          return !c && !d && !f && !m && y === void 0;
        })) return e;
      }
    }
    async getErrorSchemaOrThrowBaseException(e, t, r, s, o, a) {
      let c = t, d = e;
      if (e.includes("#")) [c, d] = e.split("#");
      let f = { $metadata: o, $fault: r.statusCode < 500 ? "client" : "server" }, m = L.TypeRegistry.for(c);
      try {
        return { errorSchema: a?.(m, d) ?? m.getSchema(e), errorMetadata: f };
      } catch (y) {
        s.message = s.message ?? s.Message ?? "UnknownError";
        let b = L.TypeRegistry.for("smithy.ts.sdk.synthetic." + c), x = b.getBaseException();
        if (x) {
          let N = b.getErrorCtor(x) ?? Error;
          throw this.decorateServiceException(Object.assign(new N({ name: d }), f), s);
        }
        throw this.decorateServiceException(Object.assign(Error(d), f), s);
      }
    }
    decorateServiceException(e, t = {}) {
      if (this.queryCompat) {
        let r = e.Message ?? t.Message, s = he.decorateServiceException(e, t);
        if (r) s.Message = r, s.message = r;
        return s;
      }
      return he.decorateServiceException(e, t);
    }
    setQueryCompatError(e, t) {
      let r = t.headers?.["x-amzn-query-error"];
      if (e !== void 0 && r != null) {
        let [s, o] = r.split(";"), a = Object.entries(e), c = { Code: s, Type: o };
        Object.assign(e, c);
        for (let [d, f] of a) c[d] = f;
        delete c.__type, e.Error = c;
      }
    }
    queryCompatOutput(e, t) {
      if (e.Error) t.Error = e.Error;
      if (e.Type) t.Type = e.Type;
      if (e.Code) t.Code = e.Code;
    }
  }
  class si extends ei.SmithyRpcV2CborProtocol {
    awsQueryCompatible;
    mixin;
    constructor({ defaultNamespace: e, awsQueryCompatible: t }) {
      super({ defaultNamespace: e });
      this.awsQueryCompatible = !!t, this.mixin = new De(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (this.awsQueryCompatible) s.headers["x-amzn-query-mode"] = "true";
      return s;
    }
    async handleError(e, t, r, s, o) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(s, r);
      let a = ei.loadSmithyRpcV2CborErrorCode(r, s) ?? "Unknown", { errorSchema: c, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = L.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (L.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m), x = {};
      for (let [N, T] of f.structIterator()) x[N] = this.deserializer.readValue(T, s[N]);
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(s, x);
      throw this.mixin.decorateServiceException(Object.assign(b, d, { $fault: f.getMergedTraits().error, message: m }, x), s);
    }
  }
  var hd = (e) => {
    if (e == null) return e;
    if (typeof e === "number" || typeof e === "bigint") {
      let t = Error(`Received number ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    if (typeof e === "boolean") {
      let t = Error(`Received boolean ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    return e;
  }, fd = (e) => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = e.toLowerCase();
      if (e !== "" && t !== "false" && t !== "true") {
        let r = Error(`Received string "${e}" where a boolean was expected.`);
        r.name = "Warning", console.warn(r);
      }
      return e !== "" && t !== "false";
    }
    return e;
  }, pd = (e) => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = Number(e);
      if (t.toString() !== e) {
        let r = Error(`Received string "${e}" where a number was expected.`);
        return r.name = "Warning", console.warn(r), e;
      }
      return t;
    }
    return e;
  };
  class Ee {
    serdeContext;
    setSerdeContext(e) {
      this.serdeContext = e;
    }
  }
  function md(e, t, r) {
    if (r?.source) {
      let s = r.source;
      if (typeof t === "number") {
        if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || s !== String(t)) if (s.includes(".")) return new X.NumericValue(s, "bigDecimal");
        else return BigInt(s);
      }
    }
    return t;
  }
  var ni = (e, t) => he.collectBody(e, t).then((r) => (t?.utf8Encoder ?? ri.toUtf8)(r)), mr = (e, t) => ni(e, t).then((r) => {
    if (r.length) try {
      return JSON.parse(r);
    } catch (s) {
      if (s?.name === "SyntaxError") Object.defineProperty(s, "$responseBodyText", { value: r });
      throw s;
    }
    return {};
  }), gd = async (e, t) => {
    let r = await mr(e, t);
    return r.message = r.message ?? r.Message, r;
  }, gr = (e, t) => {
    let r = (a, c) => Object.keys(a).find((d) => d.toLowerCase() === c.toLowerCase()), s = (a) => {
      let c = a;
      if (typeof c === "number") c = c.toString();
      if (c.indexOf(",") >= 0) c = c.split(",")[0];
      if (c.indexOf(":") >= 0) c = c.split(":")[0];
      if (c.indexOf("#") >= 0) c = c.split("#")[1];
      return c;
    }, o = r(e.headers, "x-amzn-errortype");
    if (o !== void 0) return s(e.headers[o]);
    if (t && typeof t === "object") {
      let a = r(t, "code");
      if (a && t[a] !== void 0) return s(t[a]);
      if (t.__type !== void 0) return s(t.__type);
    }
  };
  class yr extends Ee {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    async read(e, t) {
      return this._read(e, typeof t === "string" ? JSON.parse(t, md) : await mr(t, this.serdeContext));
    }
    readObject(e, t) {
      return this._read(e, t);
    }
    _read(e, t) {
      let r = t !== null && typeof t === "object", s = L.NormalizedSchema.of(e);
      if (s.isListSchema() && Array.isArray(t)) {
        let a = s.getValueSchema(), c = [], d = !!s.getMergedTraits().sparse;
        for (let f of t) if (d || f != null) c.push(this._read(a, f));
        return c;
      } else if (s.isMapSchema() && r) {
        let a = s.getValueSchema(), c = {}, d = !!s.getMergedTraits().sparse;
        for (let [f, m] of Object.entries(t)) if (d || m != null) c[f] = this._read(a, m);
        return c;
      } else if (s.isStructSchema() && r) {
        let a = {};
        for (let [c, d] of s.structIterator()) {
          let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c, m = this._read(d, t[f]);
          if (m != null) a[c] = m;
        }
        return a;
      }
      if (s.isBlobSchema() && typeof t === "string") return je.fromBase64(t);
      let o = s.getMergedTraits().mediaType;
      if (s.isStringSchema() && typeof t === "string" && o) {
        if (o === "application/json" || o.endsWith("+json")) return X.LazyJsonString.from(t);
      }
      if (s.isTimestampSchema() && t != null) switch (Y.determineTimestampFormat(s, this.settings)) {
        case 5:
          return X.parseRfc3339DateTimeWithOffset(t);
        case 6:
          return X.parseRfc7231DateTime(t);
        case 7:
          return X.parseEpochTimestamp(t);
        default:
          return console.warn("Missing timestamp format, parsing value with Date constructor:", t), new Date(t);
      }
      if (s.isBigIntegerSchema() && (typeof t === "number" || typeof t === "string")) return BigInt(t);
      if (s.isBigDecimalSchema() && t != null) {
        if (t instanceof X.NumericValue) return t;
        let a = t;
        if (a.type === "bigDecimal" && "string" in a) return new X.NumericValue(a.string, a.type);
        return new X.NumericValue(String(t), "bigDecimal");
      }
      if (s.isNumericSchema() && typeof t === "string") switch (t) {
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        case "NaN":
          return NaN;
      }
      if (s.isDocumentSchema()) if (r) {
        let a = Array.isArray(t) ? [] : {};
        for (let [c, d] of Object.entries(t)) if (d instanceof X.NumericValue) a[c] = d;
        else a[c] = this._read(s, d);
        return a;
      } else return structuredClone(t);
      return t;
    }
  }
  var ti = String.fromCharCode(925);
  class ii {
    values = /* @__PURE__ */ new Map();
    counter = 0;
    stage = 0;
    createReplacer() {
      if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      return this.stage = 1, (e, t) => {
        if (t instanceof X.NumericValue) {
          let r = `${ti + "nv" + this.counter++}_` + t.string;
          return this.values.set(`"${r}"`, t.string), r;
        }
        if (typeof t === "bigint") {
          let r = t.toString(), s = `${ti + "b" + this.counter++}_` + r;
          return this.values.set(`"${s}"`, r), s;
        }
        return t;
      };
    }
    replaceInJson(e) {
      if (this.stage === 0) throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      if (this.stage = 2, this.counter === 0) return e;
      for (let [t, r] of this.values) e = e.replace(t, r);
      return e;
    }
  }
  class Er extends Ee {
    settings;
    buffer;
    rootSchema;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      this.rootSchema = L.NormalizedSchema.of(e), this.buffer = this._write(this.rootSchema, t);
    }
    writeDiscriminatedDocument(e, t) {
      if (this.write(e, t), typeof this.buffer === "object") this.buffer.__type = L.NormalizedSchema.of(e).getName(true);
    }
    flush() {
      let { rootSchema: e } = this;
      if (this.rootSchema = void 0, e?.isStructSchema() || e?.isDocumentSchema()) {
        let t = new ii();
        return t.replaceInJson(JSON.stringify(this.buffer, t.createReplacer(), 0));
      }
      return this.buffer;
    }
    _write(e, t, r) {
      let s = t !== null && typeof t === "object", o = L.NormalizedSchema.of(e);
      if (o.isListSchema() && Array.isArray(t)) {
        let a = o.getValueSchema(), c = [], d = !!o.getMergedTraits().sparse;
        for (let f of t) if (d || f != null) c.push(this._write(a, f));
        return c;
      } else if (o.isMapSchema() && s) {
        let a = o.getValueSchema(), c = {}, d = !!o.getMergedTraits().sparse;
        for (let [f, m] of Object.entries(t)) if (d || m != null) c[f] = this._write(a, m);
        return c;
      } else if (o.isStructSchema() && s) {
        let a = {};
        for (let [c, d] of o.structIterator()) {
          let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c, m = this._write(d, t[c], o);
          if (m !== void 0) a[f] = m;
        }
        return a;
      }
      if (t === null && r?.isStructSchema()) return;
      if (o.isBlobSchema() && (t instanceof Uint8Array || typeof t === "string") || o.isDocumentSchema() && t instanceof Uint8Array) {
        if (o === this.rootSchema) return t;
        return (this.serdeContext?.base64Encoder ?? je.toBase64)(t);
      }
      if ((o.isTimestampSchema() || o.isDocumentSchema()) && t instanceof Date) switch (Y.determineTimestampFormat(o, this.settings)) {
        case 5:
          return t.toISOString().replace(".000Z", "Z");
        case 6:
          return X.dateToUtcString(t);
        case 7:
          return t.getTime() / 1e3;
        default:
          return console.warn("Missing timestamp format, using epoch seconds", t), t.getTime() / 1e3;
      }
      if (o.isNumericSchema() && typeof t === "number") {
        if (Math.abs(t) === 1 / 0 || isNaN(t)) return String(t);
      }
      if (o.isStringSchema()) {
        if (typeof t > "u" && o.isIdempotencyToken()) return X.generateIdempotencyToken();
        let a = o.getMergedTraits().mediaType;
        if (t != null && a) {
          if (a === "application/json" || a.endsWith("+json")) return X.LazyJsonString.from(t);
        }
      }
      if (o.isDocumentSchema()) if (s) {
        let a = Array.isArray(t) ? [] : {};
        for (let [c, d] of Object.entries(t)) if (d instanceof X.NumericValue) a[c] = d;
        else a[c] = this._write(o, d);
        return a;
      } else return structuredClone(t);
      return t;
    }
  }
  class ut extends Ee {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    createSerializer() {
      let e = new Er(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new yr(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class lt extends Y.RpcProtocol {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r }) {
      super({ defaultNamespace: e });
      this.serviceTarget = t, this.codec = new ut({ timestampFormat: { useTrait: true, default: 7 }, jsonName: false }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), this.awsQueryCompatible = !!r, this.mixin = new De(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (!s.path.endsWith("/")) s.path += "/";
      if (Object.assign(s.headers, { "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`, "x-amz-target": `${this.serviceTarget}.${e.name}` }), this.awsQueryCompatible) s.headers["x-amzn-query-mode"] = "true";
      if (L.deref(e.input) === "unit" || !s.body) s.body = "{}";
      return s;
    }
    getPayloadCodec() {
      return this.codec;
    }
    async handleError(e, t, r, s, o) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(s, r);
      let a = gr(r, s) ?? "Unknown", { errorSchema: c, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = L.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (L.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m), x = {};
      for (let [N, T] of f.structIterator()) {
        let R = T.getMergedTraits().jsonName ?? N;
        x[N] = this.codec.createDeserializer().readObject(T, s[R]);
      }
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(s, x);
      throw this.mixin.decorateServiceException(Object.assign(b, d, { $fault: f.getMergedTraits().error, message: m }, x), s);
    }
  }
  class oi extends lt {
    constructor({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r }) {
      super({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_0";
    }
    getJsonRpcVersion() {
      return "1.0";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.0";
    }
  }
  class ai extends lt {
    constructor({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r }) {
      super({ defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
      return "1.1";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.1";
    }
  }
  class ci extends Y.HttpBindingProtocol {
    serializer;
    deserializer;
    codec;
    mixin = new De();
    constructor({ defaultNamespace: e }) {
      super({ defaultNamespace: e });
      let t = { timestampFormat: { useTrait: true, default: 7 }, httpBindings: true, jsonName: true };
      this.codec = new ut(t), this.serializer = new Y.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), this.deserializer = new Y.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
    }
    getShapeId() {
      return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
      return this.codec;
    }
    setSerdeContext(e) {
      this.codec.setSerdeContext(e), super.setSerdeContext(e);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r), o = L.NormalizedSchema.of(e.input);
      if (!s.headers["content-type"]) {
        let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
        if (a) s.headers["content-type"] = a;
      }
      if (s.body == null && s.headers["content-type"] === this.getDefaultContentType()) s.body = "{}";
      return s;
    }
    async deserializeResponse(e, t, r) {
      let s = await super.deserializeResponse(e, t, r), o = L.NormalizedSchema.of(e.output);
      for (let [a, c] of o.structIterator()) if (c.getMemberTraits().httpPayload && !(a in s)) s[a] = null;
      return s;
    }
    async handleError(e, t, r, s, o) {
      let a = gr(r, s) ?? "Unknown", { errorSchema: c, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = L.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (L.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m);
      await this.deserializeHttpMessage(c, t, r, s);
      let x = {};
      for (let [N, T] of f.structIterator()) {
        let R = T.getMergedTraits().jsonName ?? N;
        x[N] = this.codec.createDeserializer().readObject(T, s[R]);
      }
      throw this.mixin.decorateServiceException(Object.assign(b, d, { $fault: f.getMergedTraits().error, message: m }, x), s);
    }
    getDefaultContentType() {
      return "application/json";
    }
  }
  var yd = (e) => {
    if (e == null) return;
    if (typeof e === "object" && "__type" in e) delete e.__type;
    return he.expectUnion(e);
  };
  class dt extends Ee {
    settings;
    stringDeserializer;
    constructor(e) {
      super();
      this.settings = e, this.stringDeserializer = new Y.FromStringShapeDeserializer(e);
    }
    setSerdeContext(e) {
      this.serdeContext = e, this.stringDeserializer.setSerdeContext(e);
    }
    read(e, t, r) {
      let s = L.NormalizedSchema.of(e), o = s.getMemberSchemas();
      if (s.isStructSchema() && s.isMemberSchema() && !!Object.values(o).find((f) => !!f.getMemberTraits().eventPayload)) {
        let f = {}, m = Object.keys(o)[0];
        if (o[m].isBlobSchema()) f[m] = t;
        else f[m] = this.read(o[m], t);
        return f;
      }
      let c = (this.serdeContext?.utf8Encoder ?? ri.toUtf8)(t), d = this.parseXml(c);
      return this.readSchema(e, r ? d[r] : d);
    }
    readSchema(e, t) {
      let r = L.NormalizedSchema.of(e);
      if (r.isUnitSchema()) return;
      let s = r.getMergedTraits();
      if (r.isListSchema() && !Array.isArray(t)) return this.readSchema(r, [t]);
      if (t == null) return t;
      if (typeof t === "object") {
        let o = !!s.sparse, a = !!s.xmlFlattened;
        if (r.isListSchema()) {
          let d = r.getValueSchema(), f = [], m = d.getMergedTraits().xmlName ?? "member", y = a ? t : (t[0] ?? t)[m], b = Array.isArray(y) ? y : [y];
          for (let x of b) if (x != null || o) f.push(this.readSchema(d, x));
          return f;
        }
        let c = {};
        if (r.isMapSchema()) {
          let d = r.getKeySchema(), f = r.getValueSchema(), m;
          if (a) m = Array.isArray(t) ? t : [t];
          else m = Array.isArray(t.entry) ? t.entry : [t.entry];
          let y = d.getMergedTraits().xmlName ?? "key", b = f.getMergedTraits().xmlName ?? "value";
          for (let x of m) {
            let N = x[y], T = x[b];
            if (T != null || o) c[N] = this.readSchema(f, T);
          }
          return c;
        }
        if (r.isStructSchema()) {
          for (let [d, f] of r.structIterator()) {
            let m = f.getMergedTraits(), y = !m.httpPayload ? f.getMemberTraits().xmlName ?? d : m.xmlName ?? f.getName();
            if (t[y] != null) c[d] = this.readSchema(f, t[y]);
          }
          return c;
        }
        if (r.isDocumentSchema()) return t;
        throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r.getName(true)}`);
      }
      if (r.isListSchema()) return [];
      if (r.isMapSchema() || r.isStructSchema()) return {};
      return this.stringDeserializer.read(r, t);
    }
    parseXml(e) {
      if (e.length) {
        let t;
        try {
          t = se.parseXML(e);
        } catch (a) {
          if (a && typeof a === "object") Object.defineProperty(a, "$responseBodyText", { value: e });
          throw a;
        }
        let r = "#text", s = Object.keys(t)[0], o = t[s];
        if (o[r]) o[s] = o[r], delete o[r];
        return he.getValueFromTextNode(o);
      }
      return {};
    }
  }
  class ui extends Ee {
    settings;
    buffer;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t, r = "") {
      if (this.buffer === void 0) this.buffer = "";
      let s = L.NormalizedSchema.of(e);
      if (r && !r.endsWith(".")) r += ".";
      if (s.isBlobSchema()) {
        if (typeof t === "string" || t instanceof Uint8Array) this.writeKey(r), this.writeValue((this.serdeContext?.base64Encoder ?? je.toBase64)(t));
      } else if (s.isBooleanSchema() || s.isNumericSchema() || s.isStringSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(String(t));
        else if (s.isIdempotencyToken()) this.writeKey(r), this.writeValue(X.generateIdempotencyToken());
      } else if (s.isBigIntegerSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(String(t));
      } else if (s.isBigDecimalSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(t instanceof X.NumericValue ? t.string : String(t));
      } else if (s.isTimestampSchema()) {
        if (t instanceof Date) switch (this.writeKey(r), Y.determineTimestampFormat(s, this.settings)) {
          case 5:
            this.writeValue(t.toISOString().replace(".000Z", "Z"));
            break;
          case 6:
            this.writeValue(he.dateToUtcString(t));
            break;
          case 7:
            this.writeValue(String(t.getTime() / 1e3));
            break;
        }
      } else if (s.isDocumentSchema()) throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${s.getName(true)}`);
      else if (s.isListSchema()) {
        if (Array.isArray(t)) if (t.length === 0) {
          if (this.settings.serializeEmptyLists) this.writeKey(r), this.writeValue("");
        } else {
          let o = s.getValueSchema(), a = this.settings.flattenLists || s.getMergedTraits().xmlFlattened, c = 1;
          for (let d of t) {
            if (d == null) continue;
            let f = this.getKey("member", o.getMergedTraits().xmlName), m = a ? `${r}${c}` : `${r}${f}.${c}`;
            this.write(o, d, m), ++c;
          }
        }
      } else if (s.isMapSchema()) {
        if (t && typeof t === "object") {
          let o = s.getKeySchema(), a = s.getValueSchema(), c = s.getMergedTraits().xmlFlattened, d = 1;
          for (let [f, m] of Object.entries(t)) {
            if (m == null) continue;
            let y = this.getKey("key", o.getMergedTraits().xmlName), b = c ? `${r}${d}.${y}` : `${r}entry.${d}.${y}`, x = this.getKey("value", a.getMergedTraits().xmlName), N = c ? `${r}${d}.${x}` : `${r}entry.${d}.${x}`;
            this.write(o, f, b), this.write(a, m, N), ++d;
          }
        }
      } else if (s.isStructSchema()) {
        if (t && typeof t === "object") for (let [o, a] of s.structIterator()) {
          if (t[o] == null && !a.isIdempotencyToken()) continue;
          let c = this.getKey(o, a.getMergedTraits().xmlName), d = `${r}${c}`;
          this.write(a, t[o], d);
        }
      } else if (s.isUnitSchema()) ;
      else throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${s.getName(true)}`);
    }
    flush() {
      if (this.buffer === void 0) throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
      let e = this.buffer;
      return delete this.buffer, e;
    }
    getKey(e, t) {
      let r = t ?? e;
      if (this.settings.capitalizeKeys) return r[0].toUpperCase() + r.slice(1);
      return r;
    }
    writeKey(e) {
      if (e.endsWith(".")) e = e.slice(0, e.length - 1);
      this.buffer += `&${Y.extendedEncodeURIComponent(e)}=`;
    }
    writeValue(e) {
      this.buffer += Y.extendedEncodeURIComponent(e);
    }
  }
  class Sr extends Y.RpcProtocol {
    options;
    serializer;
    deserializer;
    mixin = new De();
    constructor(e) {
      super({ defaultNamespace: e.defaultNamespace });
      this.options = e;
      let t = { timestampFormat: { useTrait: true, default: 5 }, httpBindings: false, xmlNamespace: e.xmlNamespace, serviceNamespace: e.defaultNamespace, serializeEmptyLists: true };
      this.serializer = new ui(t), this.deserializer = new dt(t);
    }
    getShapeId() {
      return "aws.protocols#awsQuery";
    }
    setSerdeContext(e) {
      this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e);
    }
    getPayloadCodec() {
      throw Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (!s.path.endsWith("/")) s.path += "/";
      if (Object.assign(s.headers, { "content-type": "application/x-www-form-urlencoded" }), L.deref(e.input) === "unit" || !s.body) s.body = "";
      let o = e.name.split("#")[1] ?? e.name;
      if (s.body = `Action=${o}&Version=${this.options.version}` + s.body, s.body.endsWith("&")) s.body = s.body.slice(-1);
      return s;
    }
    async deserializeResponse(e, t, r) {
      let s = this.deserializer, o = L.NormalizedSchema.of(e.output), a = {};
      if (r.statusCode >= 300) {
        let y = await Y.collectBody(r.body, t);
        if (y.byteLength > 0) Object.assign(a, await s.read(15, y));
        await this.handleError(e, t, r, a, this.deserializeMetadata(r));
      }
      for (let y in r.headers) {
        let b = r.headers[y];
        delete r.headers[y], r.headers[y.toLowerCase()] = b;
      }
      let c = e.name.split("#")[1] ?? e.name, d = o.isStructSchema() && this.useNestedResult() ? c + "Result" : void 0, f = await Y.collectBody(r.body, t);
      if (f.byteLength > 0) Object.assign(a, await s.read(o, f, d));
      return { $metadata: this.deserializeMetadata(r), ...a };
    }
    useNestedResult() {
      return true;
    }
    async handleError(e, t, r, s, o) {
      let a = this.loadQueryErrorCode(r, s) ?? "Unknown", c = this.loadQueryError(s), d = this.loadQueryErrorMessage(s);
      c.message = d, c.Error = { Type: c.Type, Code: c.Code, Message: d };
      let { errorSchema: f, errorMetadata: m } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, c, o, (T, R) => {
        try {
          return T.getSchema(R);
        } catch (F) {
          return T.find((k) => L.NormalizedSchema.of(k).getMergedTraits().awsQueryError?.[0] === R);
        }
      }), y = L.NormalizedSchema.of(f), x = new (L.TypeRegistry.for(f[1]).getErrorCtor(f) ?? Error)(d), N = { Error: c.Error };
      for (let [T, R] of y.structIterator()) {
        let F = R.getMergedTraits().xmlName ?? T, k = c[F] ?? s[F];
        N[T] = this.deserializer.readSchema(R, k);
      }
      throw this.mixin.decorateServiceException(Object.assign(x, m, { $fault: y.getMergedTraits().error, message: d }, N), s);
    }
    loadQueryErrorCode(e, t) {
      let r = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
      if (r !== void 0) return r;
      if (e.statusCode == 404) return "NotFound";
    }
    loadQueryError(e) {
      return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
    }
    loadQueryErrorMessage(e) {
      let t = this.loadQueryError(e);
      return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
    }
    getDefaultContentType() {
      return "application/x-www-form-urlencoded";
    }
  }
  class li extends Sr {
    options;
    constructor(e) {
      super(e);
      this.options = e;
      let t = { capitalizeKeys: true, flattenLists: true, serializeEmptyLists: false };
      Object.assign(this.serializer.settings, t);
    }
    useNestedResult() {
      return false;
    }
  }
  var di = (e, t) => ni(e, t).then((r) => {
    if (r.length) {
      let s;
      try {
        s = se.parseXML(r);
      } catch (d) {
        if (d && typeof d === "object") Object.defineProperty(d, "$responseBodyText", { value: r });
        throw d;
      }
      let o = "#text", a = Object.keys(s)[0], c = s[a];
      if (c[o]) c[a] = c[o], delete c[o];
      return he.getValueFromTextNode(c);
    }
    return {};
  }), Ed = async (e, t) => {
    let r = await di(e, t);
    if (r.Error) r.Error.message = r.Error.message ?? r.Error.Message;
    return r;
  }, hi = (e, t) => {
    if (t?.Error?.Code !== void 0) return t.Error.Code;
    if (t?.Code !== void 0) return t.Code;
    if (e.statusCode == 404) return "NotFound";
  };
  class wr extends Ee {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      let r = L.NormalizedSchema.of(e);
      if (r.isStringSchema() && typeof t === "string") this.stringBuffer = t;
      else if (r.isBlobSchema()) this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? je.fromBase64)(t);
      else {
        this.buffer = this.writeStruct(r, t, void 0);
        let s = r.getMergedTraits();
        if (s.httpPayload && !s.xmlName) this.buffer.withName(r.getName());
      }
    }
    flush() {
      if (this.byteBuffer !== void 0) {
        let t = this.byteBuffer;
        return delete this.byteBuffer, t;
      }
      if (this.stringBuffer !== void 0) {
        let t = this.stringBuffer;
        return delete this.stringBuffer, t;
      }
      let e = this.buffer;
      if (this.settings.xmlNamespace) {
        if (!e?.attributes?.xmlns) e.addAttribute("xmlns", this.settings.xmlNamespace);
      }
      return delete this.buffer, e.toString();
    }
    writeStruct(e, t, r) {
      let s = e.getMergedTraits(), o = e.isMemberSchema() && !s.httpPayload ? e.getMemberTraits().xmlName ?? e.getMemberName() : s.xmlName ?? e.getName();
      if (!o || !e.isStructSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(true)}.`);
      let a = se.XmlNode.of(o), [c, d] = this.getXmlnsAttribute(e, r);
      for (let [f, m] of e.structIterator()) {
        let y = t[f];
        if (y != null || m.isIdempotencyToken()) {
          if (m.getMergedTraits().xmlAttribute) {
            a.addAttribute(m.getMergedTraits().xmlName ?? f, this.writeSimple(m, y));
            continue;
          }
          if (m.isListSchema()) this.writeList(m, y, a, d);
          else if (m.isMapSchema()) this.writeMap(m, y, a, d);
          else if (m.isStructSchema()) a.addChildNode(this.writeStruct(m, y, d));
          else {
            let b = se.XmlNode.of(m.getMergedTraits().xmlName ?? m.getMemberName());
            this.writeSimpleInto(m, y, b, d), a.addChildNode(b);
          }
        }
      }
      if (d) a.addAttribute(c, d);
      return a;
    }
    writeList(e, t, r, s) {
      if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(true)}`);
      let o = e.getMergedTraits(), a = e.getValueSchema(), c = a.getMergedTraits(), d = !!c.sparse, f = !!o.xmlFlattened, [m, y] = this.getXmlnsAttribute(e, s), b = (x, N) => {
        if (a.isListSchema()) this.writeList(a, Array.isArray(N) ? N : [N], x, y);
        else if (a.isMapSchema()) this.writeMap(a, N, x, y);
        else if (a.isStructSchema()) {
          let T = this.writeStruct(a, N, y);
          x.addChildNode(T.withName(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member"));
        } else {
          let T = se.XmlNode.of(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member");
          this.writeSimpleInto(a, N, T, y), x.addChildNode(T);
        }
      };
      if (f) {
        for (let x of t) if (d || x != null) b(r, x);
      } else {
        let x = se.XmlNode.of(o.xmlName ?? e.getMemberName());
        if (y) x.addAttribute(m, y);
        for (let N of t) if (d || N != null) b(x, N);
        r.addChildNode(x);
      }
    }
    writeMap(e, t, r, s, o = false) {
      if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(true)}`);
      let a = e.getMergedTraits(), c = e.getKeySchema(), f = c.getMergedTraits().xmlName ?? "key", m = e.getValueSchema(), y = m.getMergedTraits(), b = y.xmlName ?? "value", x = !!y.sparse, N = !!a.xmlFlattened, [T, R] = this.getXmlnsAttribute(e, s), F = (k, W, O) => {
        let ee = se.XmlNode.of(f, W), [Pe, q] = this.getXmlnsAttribute(c, R);
        if (q) ee.addAttribute(Pe, q);
        k.addChildNode(ee);
        let K = se.XmlNode.of(b);
        if (m.isListSchema()) this.writeList(m, O, K, R);
        else if (m.isMapSchema()) this.writeMap(m, O, K, R, true);
        else if (m.isStructSchema()) K = this.writeStruct(m, O, R);
        else this.writeSimpleInto(m, O, K, R);
        k.addChildNode(K);
      };
      if (N) {
        for (let [k, W] of Object.entries(t)) if (x || W != null) {
          let O = se.XmlNode.of(a.xmlName ?? e.getMemberName());
          F(O, k, W), r.addChildNode(O);
        }
      } else {
        let k;
        if (!o) {
          if (k = se.XmlNode.of(a.xmlName ?? e.getMemberName()), R) k.addAttribute(T, R);
          r.addChildNode(k);
        }
        for (let [W, O] of Object.entries(t)) if (x || O != null) {
          let ee = se.XmlNode.of("entry");
          F(ee, W, O), (o ? r : k).addChildNode(ee);
        }
      }
    }
    writeSimple(e, t) {
      if (t === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
      let r = L.NormalizedSchema.of(e), s = null;
      if (t && typeof t === "object") if (r.isBlobSchema()) s = (this.serdeContext?.base64Encoder ?? je.toBase64)(t);
      else if (r.isTimestampSchema() && t instanceof Date) switch (Y.determineTimestampFormat(r, this.settings)) {
        case 5:
          s = t.toISOString().replace(".000Z", "Z");
          break;
        case 6:
          s = he.dateToUtcString(t);
          break;
        case 7:
          s = String(t.getTime() / 1e3);
          break;
        default:
          console.warn("Missing timestamp format, using http date", t), s = he.dateToUtcString(t);
          break;
      }
      else if (r.isBigDecimalSchema() && t) {
        if (t instanceof X.NumericValue) return t.string;
        return String(t);
      } else if (r.isMapSchema() || r.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
      else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r.getName(true)}`);
      if (r.isBooleanSchema() || r.isNumericSchema() || r.isBigIntegerSchema() || r.isBigDecimalSchema()) s = String(t);
      if (r.isStringSchema()) if (t === void 0 && r.isIdempotencyToken()) s = X.generateIdempotencyToken();
      else s = String(t);
      if (s === null) throw Error(`Unhandled schema-value pair ${r.getName(true)}=${t}`);
      return s;
    }
    writeSimpleInto(e, t, r, s) {
      let o = this.writeSimple(e, t), a = L.NormalizedSchema.of(e), c = new se.XmlText(o), [d, f] = this.getXmlnsAttribute(a, s);
      if (f) r.addAttribute(d, f);
      r.addChildNode(c);
    }
    getXmlnsAttribute(e, t) {
      let r = e.getMergedTraits(), [s, o] = r.xmlNamespace ?? [];
      if (o && o !== t) return [s ? `xmlns:${s}` : "xmlns", o];
      return [void 0, void 0];
    }
  }
  class xr extends Ee {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    createSerializer() {
      let e = new wr(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new dt(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class fi extends Y.HttpBindingProtocol {
    codec;
    serializer;
    deserializer;
    mixin = new De();
    constructor(e) {
      super(e);
      let t = { timestampFormat: { useTrait: true, default: 5 }, httpBindings: true, xmlNamespace: e.xmlNamespace, serviceNamespace: e.defaultNamespace };
      this.codec = new xr(t), this.serializer = new Y.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), this.deserializer = new Y.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
    }
    getPayloadCodec() {
      return this.codec;
    }
    getShapeId() {
      return "aws.protocols#restXml";
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r), o = L.NormalizedSchema.of(e.input);
      if (!s.headers["content-type"]) {
        let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
        if (a) s.headers["content-type"] = a;
      }
      if (s.headers["content-type"] === this.getDefaultContentType()) {
        if (typeof s.body === "string") s.body = '<?xml version="1.0" encoding="UTF-8"?>' + s.body;
      }
      return s;
    }
    async deserializeResponse(e, t, r) {
      return super.deserializeResponse(e, t, r);
    }
    async handleError(e, t, r, s, o) {
      let a = hi(r, s) ?? "Unknown", { errorSchema: c, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = L.NormalizedSchema.of(c), m = s.Error?.message ?? s.Error?.Message ?? s.message ?? s.Message ?? "Unknown", b = new (L.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m);
      await this.deserializeHttpMessage(c, t, r, s);
      let x = {};
      for (let [N, T] of f.structIterator()) {
        let R = T.getMergedTraits().xmlName ?? N, F = s.Error?.[R] ?? s[R];
        x[N] = this.codec.createDeserializer().readSchema(T, F);
      }
      throw this.mixin.decorateServiceException(Object.assign(b, d, { $fault: f.getMergedTraits().error, message: m }, x), s);
    }
    getDefaultContentType() {
      return "application/xml";
    }
  }
  Sd.AwsEc2QueryProtocol = li;
  Sd.AwsJson1_0Protocol = oi;
  Sd.AwsJson1_1Protocol = ai;
  Sd.AwsJsonRpcProtocol = lt;
  Sd.AwsQueryProtocol = Sr;
  Sd.AwsRestJsonProtocol = ci;
  Sd.AwsRestXmlProtocol = fi;
  Sd.AwsSmithyRpcV2CborProtocol = si;
  Sd.JsonCodec = ut;
  Sd.JsonShapeDeserializer = yr;
  Sd.JsonShapeSerializer = Er;
  Sd.XmlCodec = xr;
  Sd.XmlShapeDeserializer = dt;
  Sd.XmlShapeSerializer = wr;
  Sd._toBool = fd;
  Sd._toNum = pd;
  Sd._toStr = hd;
  Sd.awsExpectUnion = yd;
  Sd.loadRestJsonErrorCode = gr;
  Sd.loadRestXmlErrorCode = hi;
  Sd.parseJsonBody = mr;
  Sd.parseJsonErrorBody = gd;
  Sd.parseXmlBody = di;
  Sd.parseXmlErrorBody = Ed;
});
var jLe = (0, import_chunk_w1d7ygsk.V)(function(rh) {
  var qd = (0, import_chunk_djjqrhyf.L0)(), pi = (0, import_chunk_tf0gwgs2.Rj)(), Hd = (0, import_chunk_fac79wqz.gw)(), Gd = "AWS_EXECUTION_ENV", mi = "AWS_REGION", gi = "AWS_DEFAULT_REGION", Xd = "AWS_EC2_METADATA_DISABLED", Wd = ["in-region", "cross-region", "mobile", "standard", "legacy"], Kd = "/latest/meta-data/placement/region", Qd = "AWS_DEFAULTS_MODE", Yd = "defaults_mode", Jd = { environmentVariableSelector: (e) => e[Qd], configFileSelector: (e) => e[Yd], default: "legacy" }, Zd = ({ region: e = pi.loadConfig(qd.NODE_REGION_CONFIG_OPTIONS), defaultsMode: t = pi.loadConfig(Jd) } = {}) => Hd.memoize(async () => {
    let r = typeof t === "function" ? await t() : t;
    switch (r?.toLowerCase()) {
      case "auto":
        return eh(e);
      case "in-region":
      case "cross-region":
      case "mobile":
      case "standard":
      case "legacy":
        return Promise.resolve(r?.toLocaleLowerCase());
      case void 0:
        return Promise.resolve("legacy");
      default:
        throw Error(`Invalid parameter for "defaultsMode", expect ${Wd.join(", ")}, got ${r}`);
    }
  }), eh = async (e) => {
    if (e) {
      let t = typeof e === "function" ? await e() : e, r = await th();
      if (!r) return "standard";
      if (t === r) return "in-region";
      else return "cross-region";
    }
    return "standard";
  }, th = async () => {
    if (process.env[Gd] && (process.env[mi] || process.env[gi])) return process.env[mi] ?? process.env[gi];
    if (!process.env[Xd]) try {
      let { getInstanceMetadataEndpoint: e, httpRequest: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-wf7k2rn2.js"))), r = await e();
      return (await t({ ...r, path: Kd })).toString();
    } catch (e) {
    }
  };
  rh.resolveDefaultsModeConfig = Zd;
});
var Si = (0, import_chunk_w1d7ygsk.V)(function(Ei) {
  Object.defineProperty(Ei, "__esModule", { value: true });
  Ei.warning = void 0;
  Ei.stsRegionDefaultResolver = nh;
  var ht = (0, import_chunk_djjqrhyf.L0)(), yi = (0, import_chunk_tf0gwgs2.Rj)();
  function nh(e = {}) {
    return yi.loadConfig({ ...ht.NODE_REGION_CONFIG_OPTIONS, async default() {
      if (!Ei.warning.silence) console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.");
      return "us-east-1";
    } }, { ...ht.NODE_REGION_CONFIG_FILE_OPTIONS, ...e });
  }
  Ei.warning = { silence: false };
});
var gxe = (0, import_chunk_w1d7ygsk.V)(function(Se) {
  var qe = (0, import_chunk_djjqrhyf.L0)(), wi = Si(), oh = (e) => ({ setRegion(t) {
    e.region = t;
  }, region() {
    return e.region;
  } }), ah = (e) => ({ region: e.region() });
  Object.defineProperty(Se, "NODE_REGION_CONFIG_FILE_OPTIONS", { enumerable: true, get: function() {
    return qe.NODE_REGION_CONFIG_FILE_OPTIONS;
  } });
  Object.defineProperty(Se, "NODE_REGION_CONFIG_OPTIONS", { enumerable: true, get: function() {
    return qe.NODE_REGION_CONFIG_OPTIONS;
  } });
  Object.defineProperty(Se, "REGION_ENV_NAME", { enumerable: true, get: function() {
    return qe.REGION_ENV_NAME;
  } });
  Object.defineProperty(Se, "REGION_INI_NAME", { enumerable: true, get: function() {
    return qe.REGION_INI_NAME;
  } });
  Object.defineProperty(Se, "resolveRegionConfig", { enumerable: true, get: function() {
    return qe.resolveRegionConfig;
  } });
  Se.getAwsRegionExtensionConfiguration = oh;
  Se.resolveAwsRegionExtensionConfiguration = ah;
  Object.keys(wi).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(Se, e)) Object.defineProperty(Se, e, { enumerable: true, get: function() {
      return wi[e];
    } });
  });
});
