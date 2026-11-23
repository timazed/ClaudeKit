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
var chunk_qm1nz0pk_exports = {};
__export(chunk_qm1nz0pk_exports, {
  mzi: () => mzi,
  pzi: () => pzi
});
module.exports = __toCommonJS(chunk_qm1nz0pk_exports);
var import_chunk_djjqrhyf = require("/$bunfs/root/chunk-djjqrhyf.js");
var import_chunk_qrv5kr16 = require("/$bunfs/root/chunk-qrv5kr16.js");
var import_chunk_tf0gwgs2 = require("/$bunfs/root/chunk-tf0gwgs2.js");
var import_chunk_x8v62cn3 = require("/$bunfs/root/chunk-x8v62cn3.js");
var import_chunk_eebp24wr = require("/$bunfs/root/chunk-eebp24wr.js");
var import_chunk_1tzm94k1 = require("/$bunfs/root/chunk-1tzm94k1.js");
var import_chunk_6v7p7bta = require("/$bunfs/root/chunk-6v7p7bta.js");
var import_chunk_jybgpkft = require("/$bunfs/root/chunk-jybgpkft.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var A = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.DLe)()), fe = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.LLe)()), ge = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.NLe)()), w = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.mxe)()), Re = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_djjqrhyf.L0)()), d = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qrv5kr16.HR)()), ye = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_6v7p7bta.Tj)()), Se = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.FLe)()), ve = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.FZ)()), P = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.uX)()), xe = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
var k = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.MN)()), l = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_jybgpkft.Aj)()), L = async (e, t, o) => ({ operation: l.getSmithyContext(t).operation, region: await l.normalizeProvider(e.region)() || (() => {
  throw Error("expected `region` to be configured for `aws.auth#sigv4`");
})() });
function Oe(e) {
  return { schemeId: "aws.auth#sigv4", signingProperties: { name: "awsssoportal", region: e.region }, propertiesExtractor: (t, o) => ({ signingProperties: { config: t, context: o } }) };
}
function h(e) {
  return { schemeId: "smithy.api#noAuth" };
}
var N = (e) => {
  let t = [];
  switch (e.operation) {
    case "GetRoleCredentials": {
      t.push(h(e));
      break;
    }
    case "ListAccountRoles": {
      t.push(h(e));
      break;
    }
    case "ListAccounts": {
      t.push(h(e));
      break;
    }
    case "Logout": {
      t.push(h(e));
      break;
    }
    default:
      t.push(Oe(e));
  }
  return t;
}, D = (e) => {
  let t = k.resolveAwsSdkSigV4Config(e);
  return Object.assign(t, { authSchemePreference: l.normalizeProvider(e.authSchemePreference ?? []) });
};
var H = (e) => Object.assign(e, { useDualstackEndpoint: e.useDualstackEndpoint ?? false, useFipsEndpoint: e.useFipsEndpoint ?? false, defaultSigningName: "awsssoportal" }), F = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
var U = { name: "@aws-sdk/client-sso", description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native", version: "3.936.0", scripts: { build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'", "build:cjs": "node ../../scripts/compilation/inline client-sso", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo sso" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: false, dependencies: { "@aws-crypto/sha256-browser": "5.2.0", "@aws-crypto/sha256-js": "5.2.0", "@aws-sdk/core": "3.936.0", "@aws-sdk/middleware-host-header": "3.936.0", "@aws-sdk/middleware-logger": "3.936.0", "@aws-sdk/middleware-recursion-detection": "3.936.0", "@aws-sdk/middleware-user-agent": "3.936.0", "@aws-sdk/region-config-resolver": "3.936.0", "@aws-sdk/types": "3.936.0", "@aws-sdk/util-endpoints": "3.936.0", "@aws-sdk/util-user-agent-browser": "3.936.0", "@aws-sdk/util-user-agent-node": "3.936.0", "@smithy/config-resolver": "^4.4.3", "@smithy/core": "^3.18.5", "@smithy/fetch-http-handler": "^5.3.6", "@smithy/hash-node": "^4.2.5", "@smithy/invalid-dependency": "^4.2.5", "@smithy/middleware-content-length": "^4.2.5", "@smithy/middleware-endpoint": "^4.3.12", "@smithy/middleware-retry": "^4.4.12", "@smithy/middleware-serde": "^4.2.6", "@smithy/middleware-stack": "^4.2.5", "@smithy/node-config-provider": "^4.3.5", "@smithy/node-http-handler": "^4.4.5", "@smithy/protocol-http": "^5.3.5", "@smithy/smithy-client": "^4.9.8", "@smithy/types": "^4.9.0", "@smithy/url-parser": "^4.2.5", "@smithy/util-base64": "^4.3.0", "@smithy/util-body-length-browser": "^4.2.0", "@smithy/util-body-length-node": "^4.2.1", "@smithy/util-defaults-mode-browser": "^4.3.11", "@smithy/util-defaults-mode-node": "^4.2.14", "@smithy/util-endpoints": "^3.2.5", "@smithy/util-middleware": "^4.2.5", "@smithy/util-retry": "^4.2.5", "@smithy/util-utf8": "^4.2.0", tslib: "^2.6.2" }, devDependencies: { "@tsconfig/node18": "18.2.4", "@types/node": "^18.19.69", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typescript: "~5.8.3" }, engines: { node: ">=18.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-sso" } };
var g = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.MN)()), R = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.$Le)()), c = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_djjqrhyf.L0)()), ie = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.ULe)()), y = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.uX)()), a = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_tf0gwgs2.Rj)()), S = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.SK)()), ae = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.BLe)()), ce = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.hxe)());
var ee = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.MN)()), te = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.WLe)()), oe = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qrv5kr16.HR)()), se = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)()), re = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_eebp24wr.Kre)()), _ = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_z3ydstra.xB)()), f = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_z3ydstra.SL)());
var X = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.pxe)()), p = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_djjqrhyf.Mme)());
var G = { ["required"]: false, type: "string" }, q = { ["required"]: true, default: false, type: "boolean" }, j = { ["ref"]: "Endpoint" }, B = { ["fn"]: "booleanEquals", ["argv"]: [{ ["ref"]: "UseFIPS" }, true] }, W = { ["fn"]: "booleanEquals", ["argv"]: [{ ["ref"]: "UseDualStack" }, true] }, r = {}, M = { ["fn"]: "getAttr", ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsFIPS"] }, J = { ["ref"]: "PartitionResult" }, z = { ["fn"]: "booleanEquals", ["argv"]: [true, { ["fn"]: "getAttr", ["argv"]: [J, "supportsDualStack"] }] }, K = [B], Q = [W], V = [{ ["ref"]: "Region" }], Le = { version: "1.0", parameters: { Region: G, UseDualStack: q, UseFIPS: q, Endpoint: G }, rules: [{ conditions: [{ ["fn"]: "isSet", ["argv"]: [j] }], rules: [{ conditions: K, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: "error" }, { conditions: Q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: "error" }, { endpoint: { url: j, properties: r, headers: r }, type: "endpoint" }], type: "tree" }, { conditions: [{ ["fn"]: "isSet", ["argv"]: V }], rules: [{ conditions: [{ ["fn"]: "aws.partition", ["argv"]: V, assign: "PartitionResult" }], rules: [{ conditions: [B, W], rules: [{ conditions: [{ ["fn"]: "booleanEquals", ["argv"]: [true, M] }, z], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: r, headers: r }, type: "endpoint" }], type: "tree" }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: "error" }], type: "tree" }, { conditions: K, rules: [{ conditions: [{ ["fn"]: "booleanEquals", ["argv"]: [M, true] }], rules: [{ conditions: [{ ["fn"]: "stringEquals", ["argv"]: [{ ["fn"]: "getAttr", ["argv"]: [J, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: r, headers: r }, type: "endpoint" }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: r, headers: r }, type: "endpoint" }], type: "tree" }, { error: "FIPS is enabled but this partition does not support FIPS", type: "error" }], type: "tree" }, { conditions: Q, rules: [{ conditions: [z], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: r, headers: r }, type: "endpoint" }], type: "tree" }, { error: "DualStack is enabled but this partition does not support DualStack", type: "error" }], type: "tree" }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: r, headers: r }, type: "endpoint" }], type: "tree" }], type: "tree" }, { error: "Invalid Configuration: Missing Region", type: "error" }] }, Y = Le;
var Ne = new p.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }), Z = (e, t = {}) => Ne.get(e, () => p.resolveEndpoint(Y, { endpointParams: e, logger: t.logger }));
p.customEndpointFunctions.aws = X.awsEndpointFunctions;
var ne = (e) => ({ apiVersion: "2019-06-10", base64Decoder: e?.base64Decoder ?? _.fromBase64, base64Encoder: e?.base64Encoder ?? _.toBase64, disableHostPrefix: e?.disableHostPrefix ?? false, endpointProvider: e?.endpointProvider ?? Z, extensions: e?.extensions ?? [], httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? N, httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"), signer: new ee.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (t) => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new oe.NoAuthSigner() }], logger: e?.logger ?? new se.NoOpLogger(), protocol: e?.protocol ?? new te.AwsRestJsonProtocol({ defaultNamespace: "com.amazonaws.sso" }), serviceId: e?.serviceId ?? "SSO", urlParser: e?.urlParser ?? re.parseUrl, utf8Decoder: e?.utf8Decoder ?? f.fromUtf8, utf8Encoder: e?.utf8Encoder ?? f.toUtf8 });
var pe = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)()), de = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.jLe)()), ue = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)()), le = (e) => {
  ue.emitWarningIfUnsupportedVersion(process.version);
  let t = de.resolveDefaultsModeConfig(e), o = () => t().then(pe.loadConfigsForDefaultMode), n = ne(e);
  g.emitWarningIfUnsupportedVersion(process.version);
  let s = { profile: e?.profile, logger: n.logger };
  return { ...n, ...e, runtime: "node", defaultsMode: t, authSchemePreference: e?.authSchemePreference ?? a.loadConfig(g.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, s), bodyLengthChecker: e?.bodyLengthChecker ?? ae.calculateBodyLength, defaultUserAgentProvider: e?.defaultUserAgentProvider ?? R.createDefaultUserAgentProvider({ serviceId: n.serviceId, clientVersion: U.version }), maxAttempts: e?.maxAttempts ?? a.loadConfig(y.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e), region: e?.region ?? a.loadConfig(c.NODE_REGION_CONFIG_OPTIONS, { ...c.NODE_REGION_CONFIG_FILE_OPTIONS, ...s }), requestHandler: S.NodeHttpHandler.create(e?.requestHandler ?? o), retryMode: e?.retryMode ?? a.loadConfig({ ...y.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await o()).retryMode || ce.DEFAULT_RETRY_MODE }, e), sha256: e?.sha256 ?? ie.Hash.bind(null, "sha256"), streamCollector: e?.streamCollector ?? S.streamCollector, useDualstackEndpoint: e?.useDualstackEndpoint ?? a.loadConfig(c.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, s), useFipsEndpoint: e?.useFipsEndpoint ?? a.loadConfig(c.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, s), userAgentAppId: e?.userAgentAppId ?? a.loadConfig(R.NODE_APP_ID_CONFIG_OPTIONS, s) };
};
var v = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.gxe)()), x = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.yb)()), E = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
var me = (e) => {
  let { httpAuthSchemes: t, httpAuthSchemeProvider: o, credentials: n } = e;
  return { setHttpAuthScheme(s) {
    let m = t.findIndex((O) => O.schemeId === s.schemeId);
    if (m === -1) t.push(s);
    else t.splice(m, 1, s);
  }, httpAuthSchemes() {
    return t;
  }, setHttpAuthSchemeProvider(s) {
    o = s;
  }, httpAuthSchemeProvider() {
    return o;
  }, setCredentials(s) {
    n = s;
  }, credentials() {
    return n;
  } };
}, he = (e) => ({ httpAuthSchemes: e.httpAuthSchemes(), httpAuthSchemeProvider: e.httpAuthSchemeProvider(), credentials: e.credentials() });
var _e = (e, t) => {
  let o = Object.assign(v.getAwsRegionExtensionConfiguration(e), E.getDefaultExtensionConfiguration(e), x.getHttpHandlerExtensionConfiguration(e), me(e));
  return t.forEach((n) => n.configure(o)), Object.assign(e, v.resolveAwsRegionExtensionConfiguration(o), E.resolveDefaultRuntimeConfig(o), x.resolveHttpHandlerRuntimeConfig(o), he(o));
};
class pzi extends xe.Client {
  config;
  constructor(...[e]) {
    let t = le(e || {});
    super(t);
    this.initConfig = t;
    let o = H(t), n = w.resolveUserAgentConfig(o), s = P.resolveRetryConfig(n), m = Re.resolveRegionConfig(s), O = A.resolveHostHeaderConfig(m), Ce = ve.resolveEndpointConfig(O), Ie = D(Ce), Te = _e(Ie, e?.extensions || []);
    this.config = Te, this.middlewareStack.use(ye.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(w.getUserAgentPlugin(this.config)), this.middlewareStack.use(P.getRetryPlugin(this.config)), this.middlewareStack.use(Se.getContentLengthPlugin(this.config)), this.middlewareStack.use(A.getHostHeaderPlugin(this.config)), this.middlewareStack.use(fe.getLoggerPlugin(this.config)), this.middlewareStack.use(ge.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(d.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, { httpAuthSchemeParametersProvider: L, identityProviderConfigProvider: async (be) => new d.DefaultIdentityProviderConfig({ "aws.auth#sigv4": be.credentials }) })), this.middlewareStack.use(d.getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
}
var we = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.FZ)()), Pe = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
var u = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_6v7p7bta.Tj)());
var Ee = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
class i extends Ee.ServiceException {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, i.prototype);
  }
}
class C extends i {
  name = "InvalidRequestException";
  $fault = "client";
  constructor(e) {
    super({ name: "InvalidRequestException", $fault: "client", ...e });
    Object.setPrototypeOf(this, C.prototype);
  }
}
class I extends i {
  name = "ResourceNotFoundException";
  $fault = "client";
  constructor(e) {
    super({ name: "ResourceNotFoundException", $fault: "client", ...e });
    Object.setPrototypeOf(this, I.prototype);
  }
}
class T extends i {
  name = "TooManyRequestsException";
  $fault = "client";
  constructor(e) {
    super({ name: "TooManyRequestsException", $fault: "client", ...e });
    Object.setPrototypeOf(this, T.prototype);
  }
}
class b extends i {
  name = "UnauthorizedException";
  $fault = "client";
  constructor(e) {
    super({ name: "UnauthorizedException", $fault: "client", ...e });
    Object.setPrototypeOf(this, b.prototype);
  }
}
var De = [0, "com.amazonaws.sso", "AccessTokenType", 8, 0], He = [0, "com.amazonaws.sso", "SecretAccessKeyType", 8, 0], Fe = [0, "com.amazonaws.sso", "SessionTokenType", 8, 0];
var Ue = [3, "com.amazonaws.sso", "GetRoleCredentialsRequest", 0, ["roleName", "accountId", "accessToken"], [[0, { ["httpQuery"]: "role_name" }], [0, { ["httpQuery"]: "account_id" }], [() => De, { ["httpHeader"]: "x-amz-sso_bearer_token" }]]], Ge = [3, "com.amazonaws.sso", "GetRoleCredentialsResponse", 0, ["roleCredentials"], [[() => Me, 0]]], qe = [-3, "com.amazonaws.sso", "InvalidRequestException", { ["error"]: "client", ["httpError"]: 400 }, ["message"], [0]];
u.TypeRegistry.for("com.amazonaws.sso").registerError(qe, C);
var je = [-3, "com.amazonaws.sso", "ResourceNotFoundException", { ["error"]: "client", ["httpError"]: 404 }, ["message"], [0]];
u.TypeRegistry.for("com.amazonaws.sso").registerError(je, I);
var Me = [3, "com.amazonaws.sso", "RoleCredentials", 0, ["accessKeyId", "secretAccessKey", "sessionToken", "expiration"], [0, [() => He, 0], [() => Fe, 0], 1]];
var ze = [-3, "com.amazonaws.sso", "TooManyRequestsException", { ["error"]: "client", ["httpError"]: 429 }, ["message"], [0]];
u.TypeRegistry.for("com.amazonaws.sso").registerError(ze, T);
var Ke = [-3, "com.amazonaws.sso", "UnauthorizedException", { ["error"]: "client", ["httpError"]: 401 }, ["message"], [0]];
u.TypeRegistry.for("com.amazonaws.sso").registerError(Ke, b);
var $e = [-3, "smithy.ts.sdk.synthetic.com.amazonaws.sso", "SSOServiceException", 0, [], []];
u.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.sso").registerError($e, i);
var Ae = [9, "com.amazonaws.sso", "GetRoleCredentials", { ["http"]: ["GET", "/federation/credentials", 200] }, () => Ue, () => Ge];
class mzi extends Pe.Command.classBuilder().ep(F).m(function(e, t, o, n) {
  return [we.getEndpointPlugin(o, e.getEndpointParameterInstructions())];
}).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").sc(Ae).build() {
}
