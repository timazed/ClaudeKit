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
var chunk_njps165s_exports = {};
__export(chunk_njps165s_exports, {
  dzi: () => dzi
});
module.exports = __toCommonJS(chunk_njps165s_exports);
var import_chunk_djjqrhyf = require("/$bunfs/root/chunk-djjqrhyf.js");
var import_chunk_qrv5kr16 = require("/$bunfs/root/chunk-qrv5kr16.js");
var import_chunk_tf0gwgs2 = require("/$bunfs/root/chunk-tf0gwgs2.js");
var import_chunk_ybpvcjz1 = require("/$bunfs/root/chunk-ybpvcjz1.js");
var import_chunk_x8v62cn3 = require("/$bunfs/root/chunk-x8v62cn3.js");
var import_chunk_eebp24wr = require("/$bunfs/root/chunk-eebp24wr.js");
var import_chunk_1tzm94k1 = require("/$bunfs/root/chunk-1tzm94k1.js");
var import_chunk_6v7p7bta = require("/$bunfs/root/chunk-6v7p7bta.js");
var import_chunk_fwgg708q = require("/$bunfs/root/chunk-fwgg708q.js");
var import_chunk_4vm1ywmw = require("/$bunfs/root/chunk-4vm1ywmw.js");
var import_chunk_jybgpkft = require("/$bunfs/root/chunk-jybgpkft.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var ue = (0, import_chunk_w1d7ygsk.V)(function(Ce) {
  Object.defineProperty(Ce, "__esModule", { value: true });
  Ce.resolveHttpAuthSchemeConfig = Ce.resolveStsAuthConfig = Ce.defaultSTSHttpAuthSchemeProvider = Ce.defaultSTSHttpAuthSchemeParametersProvider = void 0;
  var ve = (0, import_chunk_x8v62cn3.MN)(), q = (0, import_chunk_jybgpkft.Aj)(), ye = le(), _o = async (e, t, n) => ({ operation: q.getSmithyContext(t).operation, region: await q.normalizeProvider(e.region)() || (() => {
    throw Error("expected `region` to be configured for `aws.auth#sigv4`");
  })() });
  Ce.defaultSTSHttpAuthSchemeParametersProvider = _o;
  function fo(e) {
    return { schemeId: "aws.auth#sigv4", signingProperties: { name: "sts", region: e.region }, propertiesExtractor: (t, n) => ({ signingProperties: { config: t, context: n } }) };
  }
  function So(e) {
    return { schemeId: "smithy.api#noAuth" };
  }
  var Po = (e) => {
    let t = [];
    switch (e.operation) {
      case "AssumeRoleWithWebIdentity": {
        t.push(So(e));
        break;
      }
      default:
        t.push(fo(e));
    }
    return t;
  };
  Ce.defaultSTSHttpAuthSchemeProvider = Po;
  var Eo = (e) => Object.assign(e, { stsClientCtor: ye.STSClient });
  Ce.resolveStsAuthConfig = Eo;
  var vo = (e) => {
    let t = Ce.resolveStsAuthConfig(e), n = ve.resolveAwsSdkSigV4Config(t);
    return Object.assign(n, { authSchemePreference: q.normalizeProvider(e.authSchemePreference ?? []) });
  };
  Ce.resolveHttpAuthSchemeConfig = vo;
});
var de = (0, import_chunk_w1d7ygsk.V)(function(Re) {
  Object.defineProperty(Re, "__esModule", { value: true });
  Re.commonParams = Re.resolveClientEndpointParameters = void 0;
  var Ao = (e) => Object.assign(e, { useDualstackEndpoint: e.useDualstackEndpoint ?? false, useFipsEndpoint: e.useFipsEndpoint ?? false, useGlobalEndpoint: e.useGlobalEndpoint ?? false, defaultSigningName: "sts" });
  Re.resolveClientEndpointParameters = Ao;
  Re.commonParams = { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
});
var Je = (0, import_chunk_w1d7ygsk.V)(function(Qe) {
  Object.defineProperty(Qe, "__esModule", { value: true });
  Qe.ruleSet = void 0;
  var Fe = "required", o = "type", i = "fn", s = "argv", E = "ref", Te = false, pe = true, P = "booleanEquals", d = "stringEquals", Ue = "sigv4", Le = "sts", Me = "us-east-1", a = "endpoint", De = "https://sts.{Region}.{PartitionResult#dnsSuffix}", f = "tree", k = "error", me = "getAttr", be = { [Fe]: false, [o]: "string" }, ge = { [Fe]: true, default: false, [o]: "boolean" }, $e = { [E]: "Endpoint" }, we = { [i]: "isSet", [s]: [{ [E]: "Region" }] }, p = { [E]: "Region" }, qe = { [i]: "aws.partition", [s]: [p], assign: "PartitionResult" }, Ke = { [E]: "UseFIPS" }, Ge = { [E]: "UseDualStack" }, m = { url: "https://sts.amazonaws.com", properties: { authSchemes: [{ name: Ue, signingName: Le, signingRegion: Me }] }, headers: {} }, _ = {}, ke = { conditions: [{ [i]: d, [s]: [p, "aws-global"] }], [a]: m, [o]: a }, ze = { [i]: P, [s]: [Ke, true] }, Ve = { [i]: P, [s]: [Ge, true] }, Oe = { [i]: me, [s]: [{ [E]: "PartitionResult" }, "supportsFIPS"] }, Be = { [E]: "PartitionResult" }, He = { [i]: P, [s]: [true, { [i]: me, [s]: [Be, "supportsDualStack"] }] }, Ne = [{ [i]: "isSet", [s]: [$e] }], We = [ze], je = [Ve], Ro = { version: "1.0", parameters: { Region: be, UseDualStack: ge, UseFIPS: ge, Endpoint: be, UseGlobalEndpoint: ge }, rules: [{ conditions: [{ [i]: P, [s]: [{ [E]: "UseGlobalEndpoint" }, pe] }, { [i]: "not", [s]: Ne }, we, qe, { [i]: P, [s]: [Ke, Te] }, { [i]: P, [s]: [Ge, Te] }], rules: [{ conditions: [{ [i]: d, [s]: [p, "ap-northeast-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "ap-south-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "ap-southeast-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "ap-southeast-2"] }], endpoint: m, [o]: a }, ke, { conditions: [{ [i]: d, [s]: [p, "ca-central-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "eu-central-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "eu-north-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "eu-west-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "eu-west-2"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "eu-west-3"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "sa-east-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, Me] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "us-east-2"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "us-west-1"] }], endpoint: m, [o]: a }, { conditions: [{ [i]: d, [s]: [p, "us-west-2"] }], endpoint: m, [o]: a }, { endpoint: { url: De, properties: { authSchemes: [{ name: Ue, signingName: Le, signingRegion: "{Region}" }] }, headers: _ }, [o]: a }], [o]: f }, { conditions: Ne, rules: [{ conditions: We, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [o]: k }, { conditions: je, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [o]: k }, { endpoint: { url: $e, properties: _, headers: _ }, [o]: a }], [o]: f }, { conditions: [we], rules: [{ conditions: [qe], rules: [{ conditions: [ze, Ve], rules: [{ conditions: [{ [i]: P, [s]: [pe, Oe] }, He], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: _, headers: _ }, [o]: a }], [o]: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [o]: k }], [o]: f }, { conditions: We, rules: [{ conditions: [{ [i]: P, [s]: [Oe, pe] }], rules: [{ conditions: [{ [i]: d, [s]: [{ [i]: me, [s]: [Be, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: _, headers: _ }, [o]: a }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: _, headers: _ }, [o]: a }], [o]: f }, { error: "FIPS is enabled but this partition does not support FIPS", [o]: k }], [o]: f }, { conditions: je, rules: [{ conditions: [He], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: _, headers: _ }, [o]: a }], [o]: f }, { error: "DualStack is enabled but this partition does not support DualStack", [o]: k }], [o]: f }, ke, { endpoint: { url: De, properties: _, headers: _ }, [o]: a }], [o]: f }], [o]: f }, { error: "Invalid Configuration: Missing Region", [o]: k }] };
  Qe.ruleSet = Ro;
});
var ot = (0, import_chunk_w1d7ygsk.V)(function(et) {
  Object.defineProperty(et, "__esModule", { value: true });
  et.defaultEndpointResolver = void 0;
  var Xe = (0, import_chunk_x8v62cn3.pxe)(), O = (0, import_chunk_djjqrhyf.Mme)(), Ze = Je(), Io = new O.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"] }), To = (e, t = {}) => Io.get(e, () => O.resolveEndpoint(Ze.ruleSet, { endpointParams: e, logger: t.logger }));
  et.defaultEndpointResolver = To;
  O.customEndpointFunctions.aws = Xe.awsEndpointFunctions;
});
var pt = (0, import_chunk_w1d7ygsk.V)(function(lt) {
  Object.defineProperty(lt, "__esModule", { value: true });
  lt.getRuntimeConfig = void 0;
  var nt = (0, import_chunk_x8v62cn3.MN)(), rt = (0, import_chunk_x8v62cn3.WLe)(), it = (0, import_chunk_qrv5kr16.HR)(), st = (0, import_chunk_1tzm94k1.Bh)(), ct = (0, import_chunk_eebp24wr.Kre)(), L = (0, import_chunk_z3ydstra.xB)(), M = (0, import_chunk_z3ydstra.SL)(), at = ue(), ut = ot(), Do = (e) => ({ apiVersion: "2011-06-15", base64Decoder: e?.base64Decoder ?? L.fromBase64, base64Encoder: e?.base64Encoder ?? L.toBase64, disableHostPrefix: e?.disableHostPrefix ?? false, endpointProvider: e?.endpointProvider ?? ut.defaultEndpointResolver, extensions: e?.extensions ?? [], httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? at.defaultSTSHttpAuthSchemeProvider, httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"), signer: new nt.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (t) => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new it.NoAuthSigner() }], logger: e?.logger ?? new st.NoOpLogger(), protocol: e?.protocol ?? new rt.AwsQueryProtocol({ defaultNamespace: "com.amazonaws.sts", xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/", version: "2011-06-15" }), serviceId: e?.serviceId ?? "STS", urlParser: e?.urlParser ?? ct.parseUrl, utf8Decoder: e?.utf8Decoder ?? M.fromUtf8, utf8Encoder: e?.utf8Encoder ?? M.toUtf8 });
  lt.getRuntimeConfig = Do;
});
var At = (0, import_chunk_w1d7ygsk.V)(function(yt) {
  Object.defineProperty(yt, "__esModule", { value: true });
  yt.getRuntimeConfig = void 0;
  var gt = (0, import_chunk_fwgg708q.rTt)(), bo = gt.__importDefault((0, import_chunk_ybpvcjz1.LCr)()), H = (0, import_chunk_x8v62cn3.MN)(), K = (0, import_chunk_x8v62cn3.$Le)(), v = (0, import_chunk_djjqrhyf.L0)(), mt = (0, import_chunk_qrv5kr16.HR)(), ht = (0, import_chunk_x8v62cn3.ULe)(), G = (0, import_chunk_x8v62cn3.uX)(), h = (0, import_chunk_tf0gwgs2.Rj)(), z = (0, import_chunk_3jjr3wje.SK)(), _t = (0, import_chunk_x8v62cn3.BLe)(), ft = (0, import_chunk_x8v62cn3.hxe)(), St = pt(), Pt = (0, import_chunk_1tzm94k1.Bh)(), Et = (0, import_chunk_x8v62cn3.jLe)(), vt = (0, import_chunk_1tzm94k1.Bh)(), wo = (e) => {
    vt.emitWarningIfUnsupportedVersion(process.version);
    let t = Et.resolveDefaultsModeConfig(e), n = () => t().then(Pt.loadConfigsForDefaultMode), u = St.getRuntimeConfig(e);
    H.emitWarningIfUnsupportedVersion(process.version);
    let r = { profile: e?.profile, logger: u.logger };
    return { ...u, ...e, runtime: "node", defaultsMode: t, authSchemePreference: e?.authSchemePreference ?? h.loadConfig(H.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, r), bodyLengthChecker: e?.bodyLengthChecker ?? _t.calculateBodyLength, defaultUserAgentProvider: e?.defaultUserAgentProvider ?? K.createDefaultUserAgentProvider({ serviceId: u.serviceId, clientVersion: bo.default.version }), httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (g) => g.getIdentityProvider("aws.auth#sigv4") || (async (l) => await e.credentialDefaultProvider(l?.__config || {})()), signer: new H.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (g) => g.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new mt.NoAuthSigner() }], maxAttempts: e?.maxAttempts ?? h.loadConfig(G.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e), region: e?.region ?? h.loadConfig(v.NODE_REGION_CONFIG_OPTIONS, { ...v.NODE_REGION_CONFIG_FILE_OPTIONS, ...r }), requestHandler: z.NodeHttpHandler.create(e?.requestHandler ?? n), retryMode: e?.retryMode ?? h.loadConfig({ ...G.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await n()).retryMode || ft.DEFAULT_RETRY_MODE }, e), sha256: e?.sha256 ?? ht.Hash.bind(null, "sha256"), streamCollector: e?.streamCollector ?? z.streamCollector, useDualstackEndpoint: e?.useDualstackEndpoint ?? h.loadConfig(v.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, r), useFipsEndpoint: e?.useFipsEndpoint ?? h.loadConfig(v.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, r), userAgentAppId: e?.userAgentAppId ?? h.loadConfig(K.NODE_APP_ID_CONFIG_OPTIONS, r) };
  };
  yt.getRuntimeConfig = wo;
});
var It = (0, import_chunk_w1d7ygsk.V)(function(xt) {
  Object.defineProperty(xt, "__esModule", { value: true });
  xt.resolveHttpAuthRuntimeConfig = xt.getHttpAuthExtensionConfiguration = void 0;
  var qo = (e) => {
    let { httpAuthSchemes: t, httpAuthSchemeProvider: n, credentials: u } = e;
    return { setHttpAuthScheme(r) {
      let g = t.findIndex((l) => l.schemeId === r.schemeId);
      if (g === -1) t.push(r);
      else t.splice(g, 1, r);
    }, httpAuthSchemes() {
      return t;
    }, setHttpAuthSchemeProvider(r) {
      n = r;
    }, httpAuthSchemeProvider() {
      return n;
    }, setCredentials(r) {
      u = r;
    }, credentials() {
      return u;
    } };
  };
  xt.getHttpAuthExtensionConfiguration = qo;
  var ko = (e) => ({ httpAuthSchemes: e.httpAuthSchemes(), httpAuthSchemeProvider: e.httpAuthSchemeProvider(), credentials: e.credentials() });
  xt.resolveHttpAuthRuntimeConfig = ko;
});
var bt = (0, import_chunk_w1d7ygsk.V)(function(Tt) {
  Object.defineProperty(Tt, "__esModule", { value: true });
  Tt.resolveRuntimeExtensions = void 0;
  var B = (0, import_chunk_x8v62cn3.gxe)(), Q = (0, import_chunk_3jjr3wje.yb)(), Y = (0, import_chunk_1tzm94k1.Bh)(), J = It(), Ho = (e, t) => {
    let n = Object.assign(B.getAwsRegionExtensionConfiguration(e), Y.getDefaultExtensionConfiguration(e), Q.getHttpHandlerExtensionConfiguration(e), J.getHttpAuthExtensionConfiguration(e));
    return t.forEach((u) => u.configure(n)), Object.assign(e, B.resolveAwsRegionExtensionConfiguration(n), Y.resolveDefaultRuntimeConfig(n), Q.resolveHttpHandlerRuntimeConfig(n), J.resolveHttpAuthRuntimeConfig(n));
  };
  Tt.resolveRuntimeExtensions = Ho;
});
var le = (0, import_chunk_w1d7ygsk.V)(function(he) {
  Object.defineProperty(he, "__esModule", { value: true });
  he.STSClient = he.__Client = void 0;
  var X = (0, import_chunk_x8v62cn3.DLe)(), wt = (0, import_chunk_x8v62cn3.LLe)(), qt = (0, import_chunk_x8v62cn3.NLe)(), Z = (0, import_chunk_x8v62cn3.mxe)(), kt = (0, import_chunk_djjqrhyf.L0)(), N = (0, import_chunk_qrv5kr16.HR)(), Ot = (0, import_chunk_6v7p7bta.Tj)(), Ht = (0, import_chunk_x8v62cn3.FLe)(), Nt = (0, import_chunk_x8v62cn3.FZ)(), ee = (0, import_chunk_x8v62cn3.uX)(), oe = (0, import_chunk_1tzm94k1.Bh)();
  Object.defineProperty(he, "__Client", { enumerable: true, get: function() {
    return oe.Client;
  } });
  var te = ue(), Wt = de(), jt = At(), Ft = bt();
  class Ut extends oe.Client {
    config;
    constructor(...[e]) {
      let t = jt.getRuntimeConfig(e || {});
      super(t);
      this.initConfig = t;
      let n = Wt.resolveClientEndpointParameters(t), u = Z.resolveUserAgentConfig(n), r = ee.resolveRetryConfig(u), g = kt.resolveRegionConfig(r), l = X.resolveHostHeaderConfig(g), C = Nt.resolveEndpointConfig(l), A = te.resolveHttpAuthSchemeConfig(C), x = Ft.resolveRuntimeExtensions(A, e?.extensions || []);
      this.config = x, this.middlewareStack.use(Ot.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(Z.getUserAgentPlugin(this.config)), this.middlewareStack.use(ee.getRetryPlugin(this.config)), this.middlewareStack.use(Ht.getContentLengthPlugin(this.config)), this.middlewareStack.use(X.getHostHeaderPlugin(this.config)), this.middlewareStack.use(wt.getLoggerPlugin(this.config)), this.middlewareStack.use(qt.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(N.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, { httpAuthSchemeParametersProvider: te.defaultSTSHttpAuthSchemeParametersProvider, identityProviderConfigProvider: async (w) => new N.DefaultIdentityProviderConfig({ "aws.auth#sigv4": w.credentials }) })), this.middlewareStack.use(N.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  he.STSClient = Ut;
});
var dzi = (0, import_chunk_w1d7ygsk.V)(function(ne) {
  var j = le(), F = (0, import_chunk_1tzm94k1.Bh)(), Mt = (0, import_chunk_x8v62cn3.FZ)(), $t = de(), y = (0, import_chunk_6v7p7bta.Tj)(), _e = (0, import_chunk_4vm1ywmw.Cj)(), No = (0, import_chunk_x8v62cn3.gxe)(), S = class e extends F.ServiceException {
    constructor(t) {
      super(t);
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Kt = class e extends S {
    name = "ExpiredTokenException";
    $fault = "client";
    constructor(t) {
      super({ name: "ExpiredTokenException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Gt = class e extends S {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(t) {
      super({ name: "MalformedPolicyDocumentException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, zt = class e extends S {
    name = "PackedPolicyTooLargeException";
    $fault = "client";
    constructor(t) {
      super({ name: "PackedPolicyTooLargeException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Vt = class e extends S {
    name = "RegionDisabledException";
    $fault = "client";
    constructor(t) {
      super({ name: "RegionDisabledException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Bt = class e extends S {
    name = "IDPRejectedClaimException";
    $fault = "client";
    constructor(t) {
      super({ name: "IDPRejectedClaimException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Qt = class e extends S {
    name = "InvalidIdentityTokenException";
    $fault = "client";
    constructor(t) {
      super({ name: "InvalidIdentityTokenException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Yt = class e extends S {
    name = "IDPCommunicationErrorException";
    $fault = "client";
    constructor(t) {
      super({ name: "IDPCommunicationErrorException", $fault: "client", ...t });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Wo = "Arn", jo = "AccessKeyId", Fo = "AssumeRole", Uo = "AssumedRoleId", Lo = "AssumeRoleRequest", Mo = "AssumeRoleResponse", fe = "AssumedRoleUser", $o = "AssumeRoleWithWebIdentity", Ko = "AssumeRoleWithWebIdentityRequest", Go = "AssumeRoleWithWebIdentityResponse", zo = "Audience", Se = "Credentials", Vo = "ContextAssertion", Jt = "DurationSeconds", Bo = "Expiration", Qo = "ExternalId", Yo = "ExpiredTokenException", Jo = "IDPCommunicationErrorException", Xo = "IDPRejectedClaimException", Zo = "InvalidIdentityTokenException", en = "Key", tn = "MalformedPolicyDocumentException", Xt = "Policy", Zt = "PolicyArns", on = "ProviderArn", nn = "ProvidedContexts", rn = "ProvidedContextsListType", sn = "ProvidedContext", cn = "PolicyDescriptorType", an = "ProviderId", eo = "PackedPolicySize", un = "PackedPolicyTooLargeException", ln = "Provider", to = "RoleArn", dn = "RegionDisabledException", oo = "RoleSessionName", pn = "SecretAccessKey", gn = "SubjectFromWebIdentityToken", Pe = "SourceIdentity", mn = "SerialNumber", hn = "SessionToken", _n = "Tags", fn = "TokenCode", Sn = "TransitiveTagKeys", Pn = "Tag", En = "Value", vn = "WebIdentityToken", yn = "arn", Cn = "accessKeySecretType", R = "awsQueryError", I = "client", An = "clientTokenType", T = "error", D = "httpError", b = "message", xn = "policyDescriptorListType", no = "smithy.ts.sdk.synthetic.com.amazonaws.sts", Rn = "tagListType", c = "com.amazonaws.sts", In = [0, c, Cn, 8, 0], Tn = [0, c, An, 8, 0], ro = [3, c, fe, 0, [Uo, Wo], [0, 0]], Dn = [3, c, Lo, 0, [to, oo, Zt, Xt, Jt, _n, Sn, Qo, mn, fn, Pe, nn], [0, 0, () => so, 0, 1, () => Gn, 64, 0, 0, 0, 0, () => Kn]], bn = [3, c, Mo, 0, [Se, fe, eo, Pe], [[() => io, 0], () => ro, 1, 0]], wn = [3, c, Ko, 0, [to, oo, vn, an, Zt, Xt, Jt], [0, 0, [() => Tn, 0], 0, () => so, 0, 1]], qn = [3, c, Go, 0, [Se, gn, fe, eo, ln, zo, Pe], [[() => io, 0], 0, () => ro, 1, 0, 0, 0]], io = [3, c, Se, 0, [jo, pn, hn, Bo], [0, [() => In, 0], 0, 4]], kn = [-3, c, Yo, { [T]: I, [D]: 400, [R]: ["ExpiredTokenException", 400] }, [b], [0]];
  y.TypeRegistry.for(c).registerError(kn, Kt);
  var On = [-3, c, Jo, { [T]: I, [D]: 400, [R]: ["IDPCommunicationError", 400] }, [b], [0]];
  y.TypeRegistry.for(c).registerError(On, Yt);
  var Hn = [-3, c, Xo, { [T]: I, [D]: 403, [R]: ["IDPRejectedClaim", 403] }, [b], [0]];
  y.TypeRegistry.for(c).registerError(Hn, Bt);
  var Nn = [-3, c, Zo, { [T]: I, [D]: 400, [R]: ["InvalidIdentityToken", 400] }, [b], [0]];
  y.TypeRegistry.for(c).registerError(Nn, Qt);
  var Wn = [-3, c, tn, { [T]: I, [D]: 400, [R]: ["MalformedPolicyDocument", 400] }, [b], [0]];
  y.TypeRegistry.for(c).registerError(Wn, Gt);
  var jn = [-3, c, un, { [T]: I, [D]: 400, [R]: ["PackedPolicyTooLarge", 400] }, [b], [0]];
  y.TypeRegistry.for(c).registerError(jn, zt);
  var Fn = [3, c, cn, 0, [yn], [0]], Un = [3, c, sn, 0, [on, Vo], [0, 0]], Ln = [-3, c, dn, { [T]: I, [D]: 403, [R]: ["RegionDisabledException", 403] }, [b], [0]];
  y.TypeRegistry.for(c).registerError(Ln, Vt);
  var Mn = [3, c, Pn, 0, [en, En], [0, 0]], $n = [-3, no, "STSServiceException", 0, [], []];
  y.TypeRegistry.for(no).registerError($n, S);
  var so = [1, c, xn, 0, () => Fn], Kn = [1, c, rn, 0, () => Un], Gn = [1, c, Rn, 0, () => Mn], zn = [9, c, Fo, 0, () => Dn, () => bn], Vn = [9, c, $o, 0, () => wn, () => qn];
  class re extends F.Command.classBuilder().ep($t.commonParams).m(function(e, t, n, u) {
    return [Mt.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(zn).build() {
  }
  class ie extends F.Command.classBuilder().ep($t.commonParams).m(function(e, t, n, u) {
    return [Mt.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(Vn).build() {
  }
  var Bn = { AssumeRoleCommand: re, AssumeRoleWithWebIdentityCommand: ie };
  class Ee extends j.STSClient {
  }
  F.createAggregatedClient(Bn, Ee);
  var co = (e) => {
    if (typeof e?.Arn === "string") {
      let t = e.Arn.split(":");
      if (t.length > 4 && t[4] !== "") return t[4];
    }
    return;
  }, ao = async (e, t, n, u = {}) => {
    let r = typeof e === "function" ? await e() : e, g = typeof t === "function" ? await t() : t, l = await No.stsRegionDefaultResolver(u)();
    return n?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${r} (credential provider clientConfig)`, `${g} (contextual client)`, `${l} (STS default: AWS_REGION, profile region, or us-east-1)`), r ?? g ?? l;
  }, Qn = (e, t) => {
    let n, u;
    return async (r, g) => {
      if (u = r, !n) {
        let { logger: w = e?.parentClientConfig?.logger, profile: W = e?.parentClientConfig?.profile, region: se, requestHandler: U = e?.parentClientConfig?.requestHandler, credentialProviderLogger: ce, userAgentAppId: ae = e?.parentClientConfig?.userAgentAppId } = e, mo = await ao(se, e?.parentClientConfig?.region, ce, { logger: w, profile: W }), ho = !uo(U);
        n = new t({ ...e, userAgentAppId: ae, profile: W, credentialDefaultProvider: () => async () => u, region: mo, requestHandler: ho ? U : void 0, logger: w });
      }
      let { Credentials: l, AssumedRoleUser: C } = await n.send(new re(g));
      if (!l || !l.AccessKeyId || !l.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${g.RoleArn}`);
      let A = co(C), x = { accessKeyId: l.AccessKeyId, secretAccessKey: l.SecretAccessKey, sessionToken: l.SessionToken, expiration: l.Expiration, ...l.CredentialScope && { credentialScope: l.CredentialScope }, ...A && { accountId: A } };
      return _e.setCredentialFeature(x, "CREDENTIALS_STS_ASSUME_ROLE", "i"), x;
    };
  }, Yn = (e, t) => {
    let n;
    return async (u) => {
      if (!n) {
        let { logger: A = e?.parentClientConfig?.logger, profile: x = e?.parentClientConfig?.profile, region: w, requestHandler: W = e?.parentClientConfig?.requestHandler, credentialProviderLogger: se, userAgentAppId: U = e?.parentClientConfig?.userAgentAppId } = e, ce = await ao(w, e?.parentClientConfig?.region, se, { logger: A, profile: x }), ae = !uo(W);
        n = new t({ ...e, userAgentAppId: U, profile: x, region: ce, requestHandler: ae ? W : void 0, logger: A });
      }
      let { Credentials: r, AssumedRoleUser: g } = await n.send(new ie(u));
      if (!r || !r.AccessKeyId || !r.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${u.RoleArn}`);
      let l = co(g), C = { accessKeyId: r.AccessKeyId, secretAccessKey: r.SecretAccessKey, sessionToken: r.SessionToken, expiration: r.Expiration, ...r.CredentialScope && { credentialScope: r.CredentialScope }, ...l && { accountId: l } };
      if (l) _e.setCredentialFeature(C, "RESOLVED_ACCOUNT_ID", "T");
      return _e.setCredentialFeature(C, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), C;
    };
  }, uo = (e) => e?.metadata?.handlerProtocol === "h2", lo = (e, t) => {
    if (!t) return e;
    else return class extends e {
      constructor(u) {
        super(u);
        for (let r of t) this.middlewareStack.use(r);
      }
    };
  }, po = (e = {}, t) => Qn(e, lo(j.STSClient, t)), go = (e = {}, t) => Yn(e, lo(j.STSClient, t)), Jn = (e) => (t) => e({ roleAssumer: po(t), roleAssumerWithWebIdentity: go(t), ...t });
  Object.defineProperty(ne, "$Command", { enumerable: true, get: function() {
    return F.Command;
  } });
  ne.AssumeRoleCommand = re;
  ne.AssumeRoleWithWebIdentityCommand = ie;
  ne.ExpiredTokenException = Kt;
  ne.IDPCommunicationErrorException = Yt;
  ne.IDPRejectedClaimException = Bt;
  ne.InvalidIdentityTokenException = Qt;
  ne.MalformedPolicyDocumentException = Gt;
  ne.PackedPolicyTooLargeException = zt;
  ne.RegionDisabledException = Vt;
  ne.STS = Ee;
  ne.STSServiceException = S;
  ne.decorateDefaultCredentialProvider = Jn;
  ne.getDefaultRoleAssumer = po;
  ne.getDefaultRoleAssumerWithWebIdentity = go;
  Object.keys(j).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(ne, e)) Object.defineProperty(ne, e, { enumerable: true, get: function() {
      return j[e];
    } });
  });
});
