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
var chunk_t54nwdwk_exports = {};
__export(chunk_t54nwdwk_exports, {
  default: () => chunk_t54nwdwk_default
});
module.exports = __toCommonJS(chunk_t54nwdwk_exports);
var import_chunk_djjqrhyf = require("/$bunfs/root/chunk-djjqrhyf.js");
var import_chunk_qrv5kr16 = require("/$bunfs/root/chunk-qrv5kr16.js");
var import_chunk_tf0gwgs2 = require("/$bunfs/root/chunk-tf0gwgs2.js");
var import_chunk_ybpvcjz1 = require("/$bunfs/root/chunk-ybpvcjz1.js");
var import_chunk_x8v62cn3 = require("/$bunfs/root/chunk-x8v62cn3.js");
var import_chunk_fe2jgj1j = require("/$bunfs/root/chunk-fe2jgj1j.js");
var import_chunk_eebp24wr = require("/$bunfs/root/chunk-eebp24wr.js");
var import_chunk_1tzm94k1 = require("/$bunfs/root/chunk-1tzm94k1.js");
var import_chunk_6v7p7bta = require("/$bunfs/root/chunk-6v7p7bta.js");
var import_chunk_fwgg708q = require("/$bunfs/root/chunk-fwgg708q.js");
var import_chunk_jybgpkft = require("/$bunfs/root/chunk-jybgpkft.js");
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var H = (0, import_chunk_w1d7ygsk.V)(function(Y) {
  Object.defineProperty(Y, "__esModule", { value: true });
  Y.resolveHttpAuthSchemeConfig = Y.defaultSigninHttpAuthSchemeProvider = Y.defaultSigninHttpAuthSchemeParametersProvider = void 0;
  var W = (0, import_chunk_x8v62cn3.MN)(), S = (0, import_chunk_jybgpkft.Aj)(), pt = async (e, t, r) => ({ operation: S.getSmithyContext(t).operation, region: await S.normalizeProvider(e.region)() || (() => {
    throw Error("expected `region` to be configured for `aws.auth#sigv4`");
  })() });
  Y.defaultSigninHttpAuthSchemeParametersProvider = pt;
  function lt(e) {
    return { schemeId: "aws.auth#sigv4", signingProperties: { name: "signin", region: e.region }, propertiesExtractor: (t, r) => ({ signingProperties: { config: t, context: r } }) };
  }
  function ht(e) {
    return { schemeId: "smithy.api#noAuth" };
  }
  var gt = (e) => {
    let t = [];
    switch (e.operation) {
      case "CreateOAuth2Token": {
        t.push(ht(e));
        break;
      }
      default:
        t.push(lt(e));
    }
    return t;
  };
  Y.defaultSigninHttpAuthSchemeProvider = gt;
  var _t = (e) => {
    let t = W.resolveAwsSdkSigV4Config(e);
    return Object.assign(t, { authSchemePreference: S.normalizeProvider(e.authSchemePreference ?? []) });
  };
  Y.resolveHttpAuthSchemeConfig = _t;
});
var de = (0, import_chunk_w1d7ygsk.V)(function(ue) {
  Object.defineProperty(ue, "__esModule", { value: true });
  ue.ruleSet = void 0;
  var ae = "required", o = "fn", s = "argv", l = "ref", Z = true, ee = "isSet", E = "booleanEquals", f = "error", h = "endpoint", p = "tree", I = "PartitionResult", U = "stringEquals", te = { [ae]: true, default: false, type: "boolean" }, re = { [ae]: false, type: "string" }, ne = { [l]: "Endpoint" }, F = { [o]: E, [s]: [{ [l]: "UseFIPS" }, true] }, M = { [o]: E, [s]: [{ [l]: "UseDualStack" }, true] }, n = {}, j = { [o]: "getAttr", [s]: [{ [l]: I }, "name"] }, C = { [o]: E, [s]: [{ [l]: "UseFIPS" }, false] }, R = { [o]: E, [s]: [{ [l]: "UseDualStack" }, false] }, oe = { [o]: "getAttr", [s]: [{ [l]: I }, "supportsFIPS"] }, se = { [o]: E, [s]: [true, { [o]: "getAttr", [s]: [{ [l]: I }, "supportsDualStack"] }] }, ie = [{ [l]: "Region" }], St = { version: "1.0", parameters: { UseDualStack: te, UseFIPS: te, Endpoint: re, Region: re }, rules: [{ conditions: [{ [o]: ee, [s]: [ne] }], rules: [{ conditions: [F], error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: f }, { rules: [{ conditions: [M], error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: f }, { endpoint: { url: ne, properties: n, headers: n }, type: h }], type: p }], type: p }, { rules: [{ conditions: [{ [o]: ee, [s]: ie }], rules: [{ conditions: [{ [o]: "aws.partition", [s]: ie, assign: I }], rules: [{ conditions: [{ [o]: U, [s]: [j, "aws"] }, C, R], endpoint: { url: "https://{Region}.signin.aws.amazon.com", properties: n, headers: n }, type: h }, { conditions: [{ [o]: U, [s]: [j, "aws-cn"] }, C, R], endpoint: { url: "https://{Region}.signin.amazonaws.cn", properties: n, headers: n }, type: h }, { conditions: [{ [o]: U, [s]: [j, "aws-us-gov"] }, C, R], endpoint: { url: "https://{Region}.signin.amazonaws-us-gov.com", properties: n, headers: n }, type: h }, { conditions: [F, M], rules: [{ conditions: [{ [o]: E, [s]: [Z, oe] }, se], rules: [{ endpoint: { url: "https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: h }], type: p }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: f }], type: p }, { conditions: [F, R], rules: [{ conditions: [{ [o]: E, [s]: [oe, Z] }], rules: [{ endpoint: { url: "https://signin-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: h }], type: p }, { error: "FIPS is enabled but this partition does not support FIPS", type: f }], type: p }, { conditions: [C, M], rules: [{ conditions: [se], rules: [{ endpoint: { url: "https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: h }], type: p }, { error: "DualStack is enabled but this partition does not support DualStack", type: f }], type: p }, { endpoint: { url: "https://signin.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: h }], type: p }], type: p }, { error: "Invalid Configuration: Missing Region", type: f }], type: p }] };
  ue.ruleSet = St;
});
var _e = (0, import_chunk_w1d7ygsk.V)(function(he) {
  Object.defineProperty(he, "__esModule", { value: true });
  he.defaultEndpointResolver = void 0;
  var pe = (0, import_chunk_x8v62cn3.pxe)(), v = (0, import_chunk_djjqrhyf.Mme)(), le = de(), ft = new v.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }), vt = (e, t = {}) => ft.get(e, () => v.resolveEndpoint(le.ruleSet, { endpointParams: e, logger: t.logger }));
  he.defaultEndpointResolver = vt;
  v.customEndpointFunctions.aws = pe.awsEndpointFunctions;
});
var Re = (0, import_chunk_w1d7ygsk.V)(function(ye) {
  Object.defineProperty(ye, "__esModule", { value: true });
  ye.getRuntimeConfig = void 0;
  var me = (0, import_chunk_x8v62cn3.MN)(), Ee = (0, import_chunk_x8v62cn3.WLe)(), Se = (0, import_chunk_qrv5kr16.HR)(), fe = (0, import_chunk_1tzm94k1.Bh)(), ve = (0, import_chunk_eebp24wr.Kre)(), O = (0, import_chunk_z3ydstra.xB)(), x = (0, import_chunk_z3ydstra.SL)(), Pe = H(), Ae = _e(), Pt = (e) => ({ apiVersion: "2023-01-01", base64Decoder: e?.base64Decoder ?? O.fromBase64, base64Encoder: e?.base64Encoder ?? O.toBase64, disableHostPrefix: e?.disableHostPrefix ?? false, endpointProvider: e?.endpointProvider ?? Ae.defaultEndpointResolver, extensions: e?.extensions ?? [], httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Pe.defaultSigninHttpAuthSchemeProvider, httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"), signer: new me.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (t) => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new Se.NoAuthSigner() }], logger: e?.logger ?? new fe.NoOpLogger(), protocol: e?.protocol ?? new Ee.AwsRestJsonProtocol({ defaultNamespace: "com.amazonaws.signin" }), serviceId: e?.serviceId ?? "Signin", urlParser: e?.urlParser ?? ve.parseUrl, utf8Decoder: e?.utf8Decoder ?? x.fromUtf8, utf8Encoder: e?.utf8Encoder ?? x.toUtf8 });
  ye.getRuntimeConfig = Pt;
});
var He = (0, import_chunk_w1d7ygsk.V)(function(Ne) {
  Object.defineProperty(Ne, "__esModule", { value: true });
  Ne.getRuntimeConfig = void 0;
  var Ie = (0, import_chunk_fwgg708q.rTt)(), At = Ie.__importDefault((0, import_chunk_ybpvcjz1.LCr)()), T = (0, import_chunk_x8v62cn3.MN)(), D = (0, import_chunk_x8v62cn3.$Le)(), g = (0, import_chunk_djjqrhyf.L0)(), Oe = (0, import_chunk_x8v62cn3.ULe)(), q = (0, import_chunk_x8v62cn3.uX)(), u = (0, import_chunk_tf0gwgs2.Rj)(), k = (0, import_chunk_3jjr3wje.SK)(), xe = (0, import_chunk_x8v62cn3.BLe)(), Te = (0, import_chunk_x8v62cn3.hxe)(), De = Re(), qe = (0, import_chunk_1tzm94k1.Bh)(), ke = (0, import_chunk_x8v62cn3.jLe)(), we = (0, import_chunk_1tzm94k1.Bh)(), yt = (e) => {
    we.emitWarningIfUnsupportedVersion(process.version);
    let t = ke.resolveDefaultsModeConfig(e), r = () => t().then(qe.loadConfigsForDefaultMode), d = De.getRuntimeConfig(e);
    T.emitWarningIfUnsupportedVersion(process.version);
    let i = { profile: e?.profile, logger: d.logger };
    return { ...d, ...e, runtime: "node", defaultsMode: t, authSchemePreference: e?.authSchemePreference ?? u.loadConfig(T.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i), bodyLengthChecker: e?.bodyLengthChecker ?? xe.calculateBodyLength, defaultUserAgentProvider: e?.defaultUserAgentProvider ?? D.createDefaultUserAgentProvider({ serviceId: d.serviceId, clientVersion: At.default.version }), maxAttempts: e?.maxAttempts ?? u.loadConfig(q.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e), region: e?.region ?? u.loadConfig(g.NODE_REGION_CONFIG_OPTIONS, { ...g.NODE_REGION_CONFIG_FILE_OPTIONS, ...i }), requestHandler: k.NodeHttpHandler.create(e?.requestHandler ?? r), retryMode: e?.retryMode ?? u.loadConfig({ ...q.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await r()).retryMode || Te.DEFAULT_RETRY_MODE }, e), sha256: e?.sha256 ?? Oe.Hash.bind(null, "sha256"), streamCollector: e?.streamCollector ?? k.streamCollector, useDualstackEndpoint: e?.useDualstackEndpoint ?? u.loadConfig(g.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i), useFipsEndpoint: e?.useFipsEndpoint ?? u.loadConfig(g.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i), userAgentAppId: e?.userAgentAppId ?? u.loadConfig(D.NODE_APP_ID_CONFIG_OPTIONS, i) };
  };
  Ne.getRuntimeConfig = yt;
});
var Sr = (0, import_chunk_w1d7ygsk.V)(function(Q) {
  var Ue = (0, import_chunk_x8v62cn3.DLe)(), Ct = (0, import_chunk_x8v62cn3.LLe)(), Rt = (0, import_chunk_x8v62cn3.NLe)(), Fe = (0, import_chunk_x8v62cn3.mxe)(), It = (0, import_chunk_djjqrhyf.L0)(), L = (0, import_chunk_qrv5kr16.HR)(), P = (0, import_chunk_6v7p7bta.Tj)(), Ot = (0, import_chunk_x8v62cn3.FLe)(), et = (0, import_chunk_x8v62cn3.FZ)(), Me = (0, import_chunk_x8v62cn3.uX)(), _ = (0, import_chunk_1tzm94k1.Bh)(), je = H(), xt = He(), Ve = (0, import_chunk_x8v62cn3.gxe)(), Le = (0, import_chunk_3jjr3wje.yb)(), Tt = (e) => Object.assign(e, { useDualstackEndpoint: e.useDualstackEndpoint ?? false, useFipsEndpoint: e.useFipsEndpoint ?? false, defaultSigningName: "signin" }), Dt = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } }, qt = (e) => {
    let { httpAuthSchemes: t, httpAuthSchemeProvider: r, credentials: d } = e;
    return { setHttpAuthScheme(i) {
      let y = t.findIndex((b) => b.schemeId === i.schemeId);
      if (y === -1) t.push(i);
      else t.splice(y, 1, i);
    }, httpAuthSchemes() {
      return t;
    }, setHttpAuthSchemeProvider(i) {
      r = i;
    }, httpAuthSchemeProvider() {
      return r;
    }, setCredentials(i) {
      d = i;
    }, credentials() {
      return d;
    } };
  }, kt = (e) => ({ httpAuthSchemes: e.httpAuthSchemes(), httpAuthSchemeProvider: e.httpAuthSchemeProvider(), credentials: e.credentials() }), wt = (e, t) => {
    let r = Object.assign(Ve.getAwsRegionExtensionConfiguration(e), _.getDefaultExtensionConfiguration(e), Le.getHttpHandlerExtensionConfiguration(e), qt(e));
    return t.forEach((d) => d.configure(r)), Object.assign(e, Ve.resolveAwsRegionExtensionConfiguration(r), _.resolveDefaultRuntimeConfig(r), Le.resolveHttpHandlerRuntimeConfig(r), kt(r));
  };
  class G extends _.Client {
    config;
    constructor(...[e]) {
      let t = xt.getRuntimeConfig(e || {});
      super(t);
      this.initConfig = t;
      let r = Tt(t), d = Fe.resolveUserAgentConfig(r), i = Me.resolveRetryConfig(d), y = It.resolveRegionConfig(i), b = Ue.resolveHostHeaderConfig(y), at = et.resolveEndpointConfig(b), ut = je.resolveHttpAuthSchemeConfig(at), ct = wt(ut, e?.extensions || []);
      this.config = ct, this.middlewareStack.use(P.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(Fe.getUserAgentPlugin(this.config)), this.middlewareStack.use(Me.getRetryPlugin(this.config)), this.middlewareStack.use(Ot.getContentLengthPlugin(this.config)), this.middlewareStack.use(Ue.getHostHeaderPlugin(this.config)), this.middlewareStack.use(Ct.getLoggerPlugin(this.config)), this.middlewareStack.use(Rt.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(L.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, { httpAuthSchemeParametersProvider: je.defaultSigninHttpAuthSchemeParametersProvider, identityProviderConfigProvider: async (dt) => new L.DefaultIdentityProviderConfig({ "aws.auth#sigv4": dt.credentials }) })), this.middlewareStack.use(L.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var A = class e extends _.ServiceException {
    constructor(t) {
      super(t);
      Object.setPrototypeOf(this, e.prototype);
    }
  }, tt = class e extends A {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    constructor(t) {
      super({ name: "AccessDeniedException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error;
    }
  }, rt = class e extends A {
    name = "InternalServerException";
    $fault = "server";
    error;
    constructor(t) {
      super({ name: "InternalServerException", $fault: "server", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error;
    }
  }, nt = class e extends A {
    name = "TooManyRequestsError";
    $fault = "client";
    error;
    constructor(t) {
      super({ name: "TooManyRequestsError", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error;
    }
  }, ot = class e extends A {
    name = "ValidationException";
    $fault = "client";
    error;
    constructor(t) {
      super({ name: "ValidationException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error;
    }
  }, Nt = "AccessDeniedException", bt = "AccessToken", Ht = "CreateOAuth2Token", Ut = "CreateOAuth2TokenRequest", Ft = "CreateOAuth2TokenRequestBody", Mt = "CreateOAuth2TokenResponseBody", jt = "CreateOAuth2TokenResponse", Vt = "InternalServerException", Lt = "RefreshToken", $t = "TooManyRequestsError", Gt = "ValidationException", $e = "accessKeyId", Ge = "accessToken", B = "client", Be = "clientId", ze = "codeVerifier", Bt = "code", m = "error", Ke = "expiresIn", Xe = "grantType", zt = "http", z = "httpError", Qe = "idToken", c = "jsonName", N = "message", w = "refreshToken", We = "redirectUri", Kt = "server", Ye = "secretAccessKey", Je = "sessionToken", st = "smithy.ts.sdk.synthetic.com.amazonaws.signin", Xt = "tokenInput", Qt = "tokenOutput", Ze = "tokenType", a = "com.amazonaws.signin", it = [0, a, Lt, 8, 0], Wt = [-3, a, Nt, { [m]: B }, [m, N], [0, 0]];
  P.TypeRegistry.for(a).registerError(Wt, tt);
  var Yt = [3, a, bt, 8, [$e, Ye, Je], [[0, { [c]: $e }], [0, { [c]: Ye }], [0, { [c]: Je }]]], Jt = [3, a, Ut, 0, [Xt], [[() => Zt, 16]]], Zt = [3, a, Ft, 0, [Be, Xe, Bt, We, ze, w], [[0, { [c]: Be }], [0, { [c]: Xe }], 0, [0, { [c]: We }], [0, { [c]: ze }], [() => it, { [c]: w }]]], er = [3, a, jt, 0, [Qt], [[() => tr, 16]]], tr = [3, a, Mt, 0, [Ge, Ze, Ke, w, Qe], [[() => Yt, { [c]: Ge }], [0, { [c]: Ze }], [1, { [c]: Ke }], [() => it, { [c]: w }], [0, { [c]: Qe }]]], rr = [-3, a, Vt, { [m]: Kt, [z]: 500 }, [m, N], [0, 0]];
  P.TypeRegistry.for(a).registerError(rr, rt);
  var nr = [-3, a, $t, { [m]: B, [z]: 429 }, [m, N], [0, 0]];
  P.TypeRegistry.for(a).registerError(nr, nt);
  var or = [-3, a, Gt, { [m]: B, [z]: 400 }, [m, N], [0, 0]];
  P.TypeRegistry.for(a).registerError(or, ot);
  var sr = [-3, st, "SigninServiceException", 0, [], []];
  P.TypeRegistry.for(st).registerError(sr, A);
  var ir = [9, a, Ht, { [zt]: ["POST", "/v1/token", 200] }, () => Jt, () => er];
  class K extends _.Command.classBuilder().ep(Dt).m(function(e, t, r, d) {
    return [et.getEndpointPlugin(r, e.getEndpointParameterInstructions())];
  }).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(ir).build() {
  }
  var ar = { CreateOAuth2TokenCommand: K };
  class X extends G {
  }
  _.createAggregatedClient(ar, X);
  var ur = { AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED", INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS", INVALID_REQUEST: "INVALID_REQUEST", SERVER_ERROR: "server_error", TOKEN_EXPIRED: "TOKEN_EXPIRED", USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED" };
  Object.defineProperty(Q, "$Command", { enumerable: true, get: function() {
    return _.Command;
  } });
  Object.defineProperty(Q, "__Client", { enumerable: true, get: function() {
    return _.Client;
  } });
  Q.AccessDeniedException = tt;
  Q.CreateOAuth2TokenCommand = K;
  Q.InternalServerException = rt;
  Q.OAuth2ErrorCode = ur;
  Q.Signin = X;
  Q.SigninClient = G;
  Q.SigninServiceException = A;
  Q.TooManyRequestsError = nt;
  Q.ValidationException = ot;
});
var chunk_t54nwdwk_default = Sr();
