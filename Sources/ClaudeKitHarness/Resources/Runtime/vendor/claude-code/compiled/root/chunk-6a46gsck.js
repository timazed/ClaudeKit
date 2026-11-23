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
var chunk_6a46gsck_exports = {};
__export(chunk_6a46gsck_exports, {
  default: () => chunk_6a46gsck_default
});
module.exports = __toCommonJS(chunk_6a46gsck_exports);
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
var k = (0, import_chunk_w1d7ygsk.V)(function(z) {
  Object.defineProperty(z, "__esModule", { value: true });
  z.resolveHttpAuthSchemeConfig = z.defaultSSOOIDCHttpAuthSchemeProvider = z.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
  var j = (0, import_chunk_x8v62cn3.MN)(), f = (0, import_chunk_jybgpkft.Aj)(), ct = async (e, t, n) => ({ operation: f.getSmithyContext(t).operation, region: await f.normalizeProvider(e.region)() || (() => {
    throw Error("expected `region` to be configured for `aws.auth#sigv4`");
  })() });
  z.defaultSSOOIDCHttpAuthSchemeParametersProvider = ct;
  function at(e) {
    return { schemeId: "aws.auth#sigv4", signingProperties: { name: "sso-oauth", region: e.region }, propertiesExtractor: (t, n) => ({ signingProperties: { config: t, context: n } }) };
  }
  function pt(e) {
    return { schemeId: "smithy.api#noAuth" };
  }
  var dt = (e) => {
    let t = [];
    switch (e.operation) {
      case "CreateToken": {
        t.push(pt(e));
        break;
      }
      default:
        t.push(at(e));
    }
    return t;
  };
  z.defaultSSOOIDCHttpAuthSchemeProvider = dt;
  var ut = (e) => {
    let t = j.resolveAwsSdkSigV4Config(e);
    return Object.assign(t, { authSchemePreference: f.normalizeProvider(e.authSchemePreference ?? []) });
  };
  z.resolveHttpAuthSchemeConfig = ut;
});
var ae = (0, import_chunk_w1d7ygsk.V)(function(se) {
  Object.defineProperty(se, "__esModule", { value: true });
  se.ruleSet = void 0;
  var re = "required", d = "fn", u = "argv", I = "ref", L = true, B = "isSet", C = "booleanEquals", x = "error", m = "endpoint", g = "tree", b = "PartitionResult", U = "getAttr", Y = { [re]: false, type: "string" }, W = { [re]: true, default: false, type: "boolean" }, J = { [I]: "Endpoint" }, oe = { [d]: C, [u]: [{ [I]: "UseFIPS" }, true] }, ne = { [d]: C, [u]: [{ [I]: "UseDualStack" }, true] }, p = {}, X = { [d]: U, [u]: [{ [I]: b }, "supportsFIPS"] }, ie = { [I]: b }, Q = { [d]: C, [u]: [true, { [d]: U, [u]: [ie, "supportsDualStack"] }] }, Z = [oe], ee = [ne], te = [{ [I]: "Region" }], _t = { version: "1.0", parameters: { Region: Y, UseDualStack: W, UseFIPS: W, Endpoint: Y }, rules: [{ conditions: [{ [d]: B, [u]: [J] }], rules: [{ conditions: Z, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: x }, { conditions: ee, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: x }, { endpoint: { url: J, properties: p, headers: p }, type: m }], type: g }, { conditions: [{ [d]: B, [u]: te }], rules: [{ conditions: [{ [d]: "aws.partition", [u]: te, assign: b }], rules: [{ conditions: [oe, ne], rules: [{ conditions: [{ [d]: C, [u]: [L, X] }, Q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: p, headers: p }, type: m }], type: g }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: x }], type: g }, { conditions: Z, rules: [{ conditions: [{ [d]: C, [u]: [X, L] }], rules: [{ conditions: [{ [d]: "stringEquals", [u]: [{ [d]: U, [u]: [ie, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: p, headers: p }, type: m }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: p, headers: p }, type: m }], type: g }, { error: "FIPS is enabled but this partition does not support FIPS", type: x }], type: g }, { conditions: ee, rules: [{ conditions: [Q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: p, headers: p }, type: m }], type: g }, { error: "DualStack is enabled but this partition does not support DualStack", type: x }], type: g }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: p, headers: p }, type: m }], type: g }], type: g }, { error: "Invalid Configuration: Missing Region", type: x }] };
  se.ruleSet = _t;
});
var he = (0, import_chunk_w1d7ygsk.V)(function(ue) {
  Object.defineProperty(ue, "__esModule", { value: true });
  ue.defaultEndpointResolver = void 0;
  var pe = (0, import_chunk_x8v62cn3.pxe)(), y = (0, import_chunk_djjqrhyf.Mme)(), de = ae(), Et = new y.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }), gt = (e, t = {}) => Et.get(e, () => y.resolveEndpoint(de.ruleSet, { endpointParams: e, logger: t.logger }));
  ue.defaultEndpointResolver = gt;
  y.customEndpointFunctions.aws = pe.awsEndpointFunctions;
});
var ye = (0, import_chunk_w1d7ygsk.V)(function(me) {
  Object.defineProperty(me, "__esModule", { value: true });
  me.getRuntimeConfig = void 0;
  var _e = (0, import_chunk_x8v62cn3.MN)(), Ee = (0, import_chunk_x8v62cn3.WLe)(), ge = (0, import_chunk_qrv5kr16.HR)(), Se = (0, import_chunk_1tzm94k1.Bh)(), ve = (0, import_chunk_eebp24wr.Kre)(), O = (0, import_chunk_z3ydstra.xB)(), A = (0, import_chunk_z3ydstra.SL)(), fe = k(), xe = he(), St = (e) => ({ apiVersion: "2019-06-10", base64Decoder: e?.base64Decoder ?? O.fromBase64, base64Encoder: e?.base64Encoder ?? O.toBase64, disableHostPrefix: e?.disableHostPrefix ?? false, endpointProvider: e?.endpointProvider ?? xe.defaultEndpointResolver, extensions: e?.extensions ?? [], httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? fe.defaultSSOOIDCHttpAuthSchemeProvider, httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"), signer: new _e.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (t) => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new ge.NoAuthSigner() }], logger: e?.logger ?? new Se.NoOpLogger(), protocol: e?.protocol ?? new Ee.AwsRestJsonProtocol({ defaultNamespace: "com.amazonaws.ssooidc" }), serviceId: e?.serviceId ?? "SSO OIDC", urlParser: e?.urlParser ?? ve.parseUrl, utf8Decoder: e?.utf8Decoder ?? A.fromUtf8, utf8Encoder: e?.utf8Encoder ?? A.toUtf8 });
  me.getRuntimeConfig = St;
});
var be = (0, import_chunk_w1d7ygsk.V)(function(qe) {
  Object.defineProperty(qe, "__esModule", { value: true });
  qe.getRuntimeConfig = void 0;
  var Ce = (0, import_chunk_fwgg708q.rTt)(), vt = Ce.__importDefault((0, import_chunk_ybpvcjz1.LCr)()), D = (0, import_chunk_x8v62cn3.MN)(), R = (0, import_chunk_x8v62cn3.$Le)(), S = (0, import_chunk_djjqrhyf.L0)(), Pe = (0, import_chunk_x8v62cn3.ULe)(), T = (0, import_chunk_x8v62cn3.uX)(), s = (0, import_chunk_tf0gwgs2.Rj)(), w = (0, import_chunk_3jjr3wje.SK)(), Oe = (0, import_chunk_x8v62cn3.BLe)(), Ae = (0, import_chunk_x8v62cn3.hxe)(), De = ye(), Re = (0, import_chunk_1tzm94k1.Bh)(), Te = (0, import_chunk_x8v62cn3.jLe)(), we = (0, import_chunk_1tzm94k1.Bh)(), ft = (e) => {
    we.emitWarningIfUnsupportedVersion(process.version);
    let t = Te.resolveDefaultsModeConfig(e), n = () => t().then(Re.loadConfigsForDefaultMode), l = De.getRuntimeConfig(e);
    D.emitWarningIfUnsupportedVersion(process.version);
    let i = { profile: e?.profile, logger: l.logger };
    return { ...l, ...e, runtime: "node", defaultsMode: t, authSchemePreference: e?.authSchemePreference ?? s.loadConfig(D.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i), bodyLengthChecker: e?.bodyLengthChecker ?? Oe.calculateBodyLength, defaultUserAgentProvider: e?.defaultUserAgentProvider ?? R.createDefaultUserAgentProvider({ serviceId: l.serviceId, clientVersion: vt.default.version }), maxAttempts: e?.maxAttempts ?? s.loadConfig(T.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e), region: e?.region ?? s.loadConfig(S.NODE_REGION_CONFIG_OPTIONS, { ...S.NODE_REGION_CONFIG_FILE_OPTIONS, ...i }), requestHandler: w.NodeHttpHandler.create(e?.requestHandler ?? n), retryMode: e?.retryMode ?? s.loadConfig({ ...T.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await n()).retryMode || Ae.DEFAULT_RETRY_MODE }, e), sha256: e?.sha256 ?? Pe.Hash.bind(null, "sha256"), streamCollector: e?.streamCollector ?? w.streamCollector, useDualstackEndpoint: e?.useDualstackEndpoint ?? s.loadConfig(S.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i), useFipsEndpoint: e?.useFipsEndpoint ?? s.loadConfig(S.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i), userAgentAppId: e?.userAgentAppId ?? s.loadConfig(R.NODE_APP_ID_CONFIG_OPTIONS, i) };
  };
  qe.getRuntimeConfig = ft;
});
var Yr = (0, import_chunk_w1d7ygsk.V)(function(G) {
  var Ue = (0, import_chunk_x8v62cn3.DLe)(), xt = (0, import_chunk_x8v62cn3.LLe)(), mt = (0, import_chunk_x8v62cn3.NLe)(), Ne = (0, import_chunk_x8v62cn3.mxe)(), It = (0, import_chunk_djjqrhyf.L0)(), N = (0, import_chunk_qrv5kr16.HR)(), c = (0, import_chunk_6v7p7bta.Tj)(), yt = (0, import_chunk_x8v62cn3.FLe)(), Ge = (0, import_chunk_x8v62cn3.FZ)(), He = (0, import_chunk_x8v62cn3.uX)(), v = (0, import_chunk_1tzm94k1.Bh)(), $e = k(), Ct = be(), Fe = (0, import_chunk_x8v62cn3.gxe)(), Me = (0, import_chunk_3jjr3wje.yb)(), Pt = (e) => Object.assign(e, { useDualstackEndpoint: e.useDualstackEndpoint ?? false, useFipsEndpoint: e.useFipsEndpoint ?? false, defaultSigningName: "sso-oauth" }), Ot = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } }, At = (e) => {
    let { httpAuthSchemes: t, httpAuthSchemeProvider: n, credentials: l } = e;
    return { setHttpAuthScheme(i) {
      let P = t.findIndex((q) => q.schemeId === i.schemeId);
      if (P === -1) t.push(i);
      else t.splice(P, 1, i);
    }, httpAuthSchemes() {
      return t;
    }, setHttpAuthSchemeProvider(i) {
      n = i;
    }, httpAuthSchemeProvider() {
      return n;
    }, setCredentials(i) {
      l = i;
    }, credentials() {
      return l;
    } };
  }, Dt = (e) => ({ httpAuthSchemes: e.httpAuthSchemes(), httpAuthSchemeProvider: e.httpAuthSchemeProvider(), credentials: e.credentials() }), Rt = (e, t) => {
    let n = Object.assign(Fe.getAwsRegionExtensionConfiguration(e), v.getDefaultExtensionConfiguration(e), Me.getHttpHandlerExtensionConfiguration(e), At(e));
    return t.forEach((l) => l.configure(n)), Object.assign(e, Fe.resolveAwsRegionExtensionConfiguration(n), v.resolveDefaultRuntimeConfig(n), Me.resolveHttpHandlerRuntimeConfig(n), Dt(n));
  };
  class H extends v.Client {
    config;
    constructor(...[e]) {
      let t = Ct.getRuntimeConfig(e || {});
      super(t);
      this.initConfig = t;
      let n = Pt(t), l = Ne.resolveUserAgentConfig(n), i = He.resolveRetryConfig(l), P = It.resolveRegionConfig(i), q = Ue.resolveHostHeaderConfig(P), ot = Ge.resolveEndpointConfig(q), nt = $e.resolveHttpAuthSchemeConfig(ot), it = Rt(nt, e?.extensions || []);
      this.config = it, this.middlewareStack.use(c.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(Ne.getUserAgentPlugin(this.config)), this.middlewareStack.use(He.getRetryPlugin(this.config)), this.middlewareStack.use(yt.getContentLengthPlugin(this.config)), this.middlewareStack.use(Ue.getHostHeaderPlugin(this.config)), this.middlewareStack.use(xt.getLoggerPlugin(this.config)), this.middlewareStack.use(mt.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(N.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, { httpAuthSchemeParametersProvider: $e.defaultSSOOIDCHttpAuthSchemeParametersProvider, identityProviderConfigProvider: async (st) => new N.DefaultIdentityProviderConfig({ "aws.auth#sigv4": st.credentials }) })), this.middlewareStack.use(N.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var a = class e extends v.ServiceException {
    constructor(t) {
      super(t);
      Object.setPrototypeOf(this, e.prototype);
    }
  }, je = class e extends a {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(t) {
      super({ name: "AccessDeniedException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.reason = t.reason, this.error_description = t.error_description;
    }
  }, ze = class e extends a {
    name = "AuthorizationPendingException";
    $fault = "client";
    error;
    error_description;
    constructor(t) {
      super({ name: "AuthorizationPendingException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Ke = class e extends a {
    name = "ExpiredTokenException";
    $fault = "client";
    error;
    error_description;
    constructor(t) {
      super({ name: "ExpiredTokenException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Le = class e extends a {
    name = "InternalServerException";
    $fault = "server";
    error;
    error_description;
    constructor(t) {
      super({ name: "InternalServerException", $fault: "server", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Ve = class e extends a {
    name = "InvalidClientException";
    $fault = "client";
    error;
    error_description;
    constructor(t) {
      super({ name: "InvalidClientException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Be = class e extends a {
    name = "InvalidGrantException";
    $fault = "client";
    error;
    error_description;
    constructor(t) {
      super({ name: "InvalidGrantException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Ye = class e extends a {
    name = "InvalidRequestException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(t) {
      super({ name: "InvalidRequestException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.reason = t.reason, this.error_description = t.error_description;
    }
  }, We = class e extends a {
    name = "InvalidScopeException";
    $fault = "client";
    error;
    error_description;
    constructor(t) {
      super({ name: "InvalidScopeException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Je = class e extends a {
    name = "SlowDownException";
    $fault = "client";
    error;
    error_description;
    constructor(t) {
      super({ name: "SlowDownException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Xe = class e extends a {
    name = "UnauthorizedClientException";
    $fault = "client";
    error;
    error_description;
    constructor(t) {
      super({ name: "UnauthorizedClientException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Qe = class e extends a {
    name = "UnsupportedGrantTypeException";
    $fault = "client";
    error;
    error_description;
    constructor(t) {
      super({ name: "UnsupportedGrantTypeException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Tt = "AccessDeniedException", wt = "AuthorizationPendingException", qt = "AccessToken", kt = "ClientSecret", bt = "CreateToken", Ut = "CreateTokenRequest", Nt = "CreateTokenResponse", Ht = "CodeVerifier", $t = "ExpiredTokenException", Ft = "InvalidClientException", Mt = "InvalidGrantException", Gt = "InvalidRequestException", jt = "InternalServerException", zt = "InvalidScopeException", Kt = "IdToken", Lt = "RefreshToken", Vt = "SlowDownException", Bt = "UnauthorizedClientException", Yt = "UnsupportedGrantTypeException", Wt = "accessToken", E = "client", Jt = "clientId", Xt = "clientSecret", Qt = "codeVerifier", Zt = "code", er = "deviceCode", o = "error", tr = "expiresIn", h = "error_description", rr = "grantType", or = "http", _ = "httpError", nr = "idToken", Ze = "reason", et = "refreshToken", ir = "redirectUri", sr = "scope", cr = "server", tt = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc", ar = "tokenType", r = "com.amazonaws.ssooidc", pr = [0, r, qt, 8, 0], dr = [0, r, kt, 8, 0], ur = [0, r, Ht, 8, 0], lr = [0, r, Kt, 8, 0], rt = [0, r, Lt, 8, 0], hr = [-3, r, Tt, { [o]: E, [_]: 400 }, [o, Ze, h], [0, 0, 0]];
  c.TypeRegistry.for(r).registerError(hr, je);
  var _r = [-3, r, wt, { [o]: E, [_]: 400 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(_r, ze);
  var Er = [3, r, Ut, 0, [Jt, Xt, rr, er, Zt, et, sr, ir, Qt], [0, [() => dr, 0], 0, 0, 0, [() => rt, 0], 64, 0, [() => ur, 0]]], gr = [3, r, Nt, 0, [Wt, ar, tr, et, nr], [[() => pr, 0], 0, 1, [() => rt, 0], [() => lr, 0]]], Sr = [-3, r, $t, { [o]: E, [_]: 400 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(Sr, Ke);
  var vr = [-3, r, jt, { [o]: cr, [_]: 500 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(vr, Le);
  var fr = [-3, r, Ft, { [o]: E, [_]: 401 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(fr, Ve);
  var xr = [-3, r, Mt, { [o]: E, [_]: 400 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(xr, Be);
  var mr = [-3, r, Gt, { [o]: E, [_]: 400 }, [o, Ze, h], [0, 0, 0]];
  c.TypeRegistry.for(r).registerError(mr, Ye);
  var Ir = [-3, r, zt, { [o]: E, [_]: 400 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(Ir, We);
  var yr = [-3, r, Vt, { [o]: E, [_]: 400 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(yr, Je);
  var Cr = [-3, r, Bt, { [o]: E, [_]: 400 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(Cr, Xe);
  var Pr = [-3, r, Yt, { [o]: E, [_]: 400 }, [o, h], [0, 0]];
  c.TypeRegistry.for(r).registerError(Pr, Qe);
  var Or = [-3, tt, "SSOOIDCServiceException", 0, [], []];
  c.TypeRegistry.for(tt).registerError(Or, a);
  var Ar = [9, r, bt, { [or]: ["POST", "/token", 200] }, () => Er, () => gr];
  class F extends v.Command.classBuilder().ep(Ot).m(function(e, t, n, l) {
    return [Ge.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(Ar).build() {
  }
  var Dr = { CreateTokenCommand: F };
  class M extends H {
  }
  v.createAggregatedClient(Dr, M);
  var Rr = { KMS_ACCESS_DENIED: "KMS_AccessDeniedException" }, Tr = { KMS_DISABLED_KEY: "KMS_DisabledException", KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException", KMS_INVALID_STATE: "KMS_InvalidStateException", KMS_KEY_NOT_FOUND: "KMS_NotFoundException" };
  Object.defineProperty(G, "$Command", { enumerable: true, get: function() {
    return v.Command;
  } });
  Object.defineProperty(G, "__Client", { enumerable: true, get: function() {
    return v.Client;
  } });
  G.AccessDeniedException = je;
  G.AccessDeniedExceptionReason = Rr;
  G.AuthorizationPendingException = ze;
  G.CreateTokenCommand = F;
  G.ExpiredTokenException = Ke;
  G.InternalServerException = Le;
  G.InvalidClientException = Ve;
  G.InvalidGrantException = Be;
  G.InvalidRequestException = Ye;
  G.InvalidRequestExceptionReason = Tr;
  G.InvalidScopeException = We;
  G.SSOOIDC = M;
  G.SSOOIDCClient = H;
  G.SSOOIDCServiceException = a;
  G.SlowDownException = Je;
  G.UnauthorizedClientException = Xe;
  G.UnsupportedGrantTypeException = Qe;
});
var chunk_6a46gsck_default = Yr();
