const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_5phf6gtf_exports = {};
__export(chunk_5phf6gtf_exports, {
  BedrockClient: () => Ke,
  GetInferenceProfileCommand: () => po,
  ListInferenceProfilesCommand: () => Ro
});
module.exports = __toCommonJS(chunk_5phf6gtf_exports);
var import_chunk_djjqrhyf = require("/$bunfs/root/chunk-djjqrhyf.js");
var import_chunk_qrv5kr16 = require("/$bunfs/root/chunk-qrv5kr16.js");
var import_chunk_a8rkrped = require("/$bunfs/root/chunk-a8rkrped.js");
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_j2a7x8j7 = require("/$bunfs/root/chunk-j2a7x8j7.js");
var import_chunk_kavq5bp6 = require("/$bunfs/root/chunk-kavq5bp6.js");
var import_chunk_tf0gwgs2 = require("/$bunfs/root/chunk-tf0gwgs2.js");
var import_chunk_x8v62cn3 = require("/$bunfs/root/chunk-x8v62cn3.js");
var import_chunk_fe2jgj1j = require("/$bunfs/root/chunk-fe2jgj1j.js");
var import_chunk_eebp24wr = require("/$bunfs/root/chunk-eebp24wr.js");
var import_chunk_1tzm94k1 = require("/$bunfs/root/chunk-1tzm94k1.js");
var import_chunk_6v7p7bta = require("/$bunfs/root/chunk-6v7p7bta.js");
var import_chunk_jybgpkft = require("/$bunfs/root/chunk-jybgpkft.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var D = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.DLe)()), xe = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.LLe)()), Ee = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.NLe)()), S = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.mxe)()), ye = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_djjqrhyf.L0)()), m = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qrv5kr16.HR)()), De = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_6v7p7bta.Tj)()), Se = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.FLe)()), Ie = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.FZ)()), I = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.uX)()), Ge = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
var W = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.MN)()), d = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qrv5kr16.HR)()), C = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_jybgpkft.Aj)()), U = async (e, o, t) => ({ operation: C.getSmithyContext(o).operation, region: await C.normalizeProvider(e.region)() || (() => {
  throw Error("expected `region` to be configured for `aws.auth#sigv4`");
})() });
function Ue(e) {
  return { schemeId: "aws.auth#sigv4", signingProperties: { name: "bedrock", region: e.region }, propertiesExtractor: (o, t) => ({ signingProperties: { config: o, context: t } }) };
}
function we(e) {
  return { schemeId: "smithy.api#httpBearerAuth", propertiesExtractor: ({ profile: o, filepath: t, configFilepath: r, ignoreCache: a }, n) => ({ identityProperties: { profile: o, filepath: t, configFilepath: r, ignoreCache: a } }) };
}
var w = (e) => {
  let o = [];
  switch (e.operation) {
    default:
      o.push(Ue(e)), o.push(we(e));
  }
  return o;
}, O = (e) => {
  let o = d.memoizeIdentityProvider(e.token, d.isIdentityExpired, d.doesIdentityRequireRefresh), t = W.resolveAwsSdkSigV4Config(e);
  return Object.assign(t, { authSchemePreference: C.normalizeProvider(e.authSchemePreference ?? []), token: o });
};
var j = (e) => Object.assign(e, { useDualstackEndpoint: e.useDualstackEndpoint ?? false, useFipsEndpoint: e.useFipsEndpoint ?? false, defaultSigningName: "bedrock" }), M = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
var Q = { name: "@aws-sdk/client-bedrock", description: "AWS SDK for JavaScript Bedrock Client for Node.js, Browser and React Native", version: "3.936.0", scripts: { build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'", "build:cjs": "node ../../scripts/compilation/inline client-bedrock", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: false, dependencies: { "@aws-crypto/sha256-browser": "5.2.0", "@aws-crypto/sha256-js": "5.2.0", "@aws-sdk/core": "3.936.0", "@aws-sdk/credential-provider-node": "3.936.0", "@aws-sdk/middleware-host-header": "3.936.0", "@aws-sdk/middleware-logger": "3.936.0", "@aws-sdk/middleware-recursion-detection": "3.936.0", "@aws-sdk/middleware-user-agent": "3.936.0", "@aws-sdk/region-config-resolver": "3.936.0", "@aws-sdk/token-providers": "3.936.0", "@aws-sdk/types": "3.936.0", "@aws-sdk/util-endpoints": "3.936.0", "@aws-sdk/util-user-agent-browser": "3.936.0", "@aws-sdk/util-user-agent-node": "3.936.0", "@smithy/config-resolver": "^4.4.3", "@smithy/core": "^3.18.5", "@smithy/fetch-http-handler": "^5.3.6", "@smithy/hash-node": "^4.2.5", "@smithy/invalid-dependency": "^4.2.5", "@smithy/middleware-content-length": "^4.2.5", "@smithy/middleware-endpoint": "^4.3.12", "@smithy/middleware-retry": "^4.4.12", "@smithy/middleware-serde": "^4.2.6", "@smithy/middleware-stack": "^4.2.5", "@smithy/node-config-provider": "^4.3.5", "@smithy/node-http-handler": "^4.4.5", "@smithy/protocol-http": "^5.3.5", "@smithy/smithy-client": "^4.9.8", "@smithy/types": "^4.9.0", "@smithy/url-parser": "^4.2.5", "@smithy/util-base64": "^4.3.0", "@smithy/util-body-length-browser": "^4.2.0", "@smithy/util-body-length-node": "^4.2.1", "@smithy/util-defaults-mode-browser": "^4.3.11", "@smithy/util-defaults-mode-node": "^4.2.14", "@smithy/util-endpoints": "^3.2.5", "@smithy/util-middleware": "^4.2.5", "@smithy/util-retry": "^4.2.5", "@smithy/util-utf8": "^4.2.0", tslib: "^2.6.2" }, devDependencies: { "@tsconfig/node18": "18.2.4", "@types/node": "^18.19.69", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typescript: "~5.8.3" }, engines: { node: ">=18.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-bedrock" } };
var R = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.MN)());
var v = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.$Le)()), l = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_djjqrhyf.L0)()), pe = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qrv5kr16.HR)()), Re = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.ULe)()), T = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.uX)()), c = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_tf0gwgs2.Rj)()), f = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.SK)()), me = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.BLe)()), Ce = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.hxe)());
var ie = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.MN)()), _e = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.WLe)()), ce = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qrv5kr16.HR)()), le = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)()), ue = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_eebp24wr.Kre)()), g = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_z3ydstra.xB)()), P = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_z3ydstra.SL)());
var re = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.pxe)()), p = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_djjqrhyf.Mme)());
var K = { ["required"]: false, type: "string" }, H = { ["required"]: true, default: false, type: "boolean" }, z = { ["ref"]: "Endpoint" }, te = { ["fn"]: "booleanEquals", ["argv"]: [{ ["ref"]: "UseFIPS" }, true] }, ne = { ["fn"]: "booleanEquals", ["argv"]: [{ ["ref"]: "UseDualStack" }, true] }, _ = {}, Y = { ["fn"]: "getAttr", ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsFIPS"] }, X = { ["fn"]: "booleanEquals", ["argv"]: [true, { ["fn"]: "getAttr", ["argv"]: [{ ["ref"]: "PartitionResult" }, "supportsDualStack"] }] }, Z = [te], ee = [ne], oe = [{ ["ref"]: "Region" }], je = { version: "1.0", parameters: { Region: K, UseDualStack: H, UseFIPS: H, Endpoint: K }, rules: [{ conditions: [{ ["fn"]: "isSet", ["argv"]: [z] }], rules: [{ conditions: Z, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: "error" }, { rules: [{ conditions: ee, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: "error" }, { endpoint: { url: z, properties: _, headers: _ }, type: "endpoint" }], type: "tree" }], type: "tree" }, { rules: [{ conditions: [{ ["fn"]: "isSet", ["argv"]: oe }], rules: [{ conditions: [{ ["fn"]: "aws.partition", ["argv"]: oe, assign: "PartitionResult" }], rules: [{ conditions: [te, ne], rules: [{ conditions: [{ ["fn"]: "booleanEquals", ["argv"]: [true, Y] }, X], rules: [{ rules: [{ endpoint: { url: "https://bedrock-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: _, headers: _ }, type: "endpoint" }], type: "tree" }], type: "tree" }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: "error" }], type: "tree" }, { conditions: Z, rules: [{ conditions: [{ ["fn"]: "booleanEquals", ["argv"]: [Y, true] }], rules: [{ rules: [{ endpoint: { url: "https://bedrock-fips.{Region}.{PartitionResult#dnsSuffix}", properties: _, headers: _ }, type: "endpoint" }], type: "tree" }], type: "tree" }, { error: "FIPS is enabled but this partition does not support FIPS", type: "error" }], type: "tree" }, { conditions: ee, rules: [{ conditions: [X], rules: [{ rules: [{ endpoint: { url: "https://bedrock.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: _, headers: _ }, type: "endpoint" }], type: "tree" }], type: "tree" }, { error: "DualStack is enabled but this partition does not support DualStack", type: "error" }], type: "tree" }, { rules: [{ endpoint: { url: "https://bedrock.{Region}.{PartitionResult#dnsSuffix}", properties: _, headers: _ }, type: "endpoint" }], type: "tree" }], type: "tree" }], type: "tree" }, { error: "Invalid Configuration: Missing Region", type: "error" }], type: "tree" }] }, se = je;
var Qe = new p.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }), ae = (e, o = {}) => Qe.get(e, () => p.resolveEndpoint(se, { endpointParams: e, logger: o.logger }));
p.customEndpointFunctions.aws = re.awsEndpointFunctions;
var de = (e) => ({ apiVersion: "2023-04-20", base64Decoder: e?.base64Decoder ?? g.fromBase64, base64Encoder: e?.base64Encoder ?? g.toBase64, disableHostPrefix: e?.disableHostPrefix ?? false, endpointProvider: e?.endpointProvider ?? ae, extensions: e?.extensions ?? [], httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? w, httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (o) => o.getIdentityProvider("aws.auth#sigv4"), signer: new ie.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#httpBearerAuth", identityProvider: (o) => o.getIdentityProvider("smithy.api#httpBearerAuth"), signer: new ce.HttpBearerAuthSigner() }], logger: e?.logger ?? new le.NoOpLogger(), protocol: e?.protocol ?? new _e.AwsRestJsonProtocol({ defaultNamespace: "com.amazonaws.bedrock" }), serviceId: e?.serviceId ?? "Bedrock", urlParser: e?.urlParser ?? ue.parseUrl, utf8Decoder: e?.utf8Decoder ?? P.fromUtf8, utf8Encoder: e?.utf8Encoder ?? P.toUtf8 });
var Ae = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)()), Me = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.jLe)()), ge = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)()), Pe = (e) => {
  ge.emitWarningIfUnsupportedVersion(process.version);
  let o = Me.resolveDefaultsModeConfig(e), t = () => o().then(Ae.loadConfigsForDefaultMode), r = de(e);
  R.emitWarningIfUnsupportedVersion(process.version);
  let a = { profile: e?.profile, logger: r.logger, signingName: "bedrock" };
  return { ...r, ...e, runtime: "node", defaultsMode: o, authSchemePreference: e?.authSchemePreference ?? c.loadConfig(R.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, a), bodyLengthChecker: e?.bodyLengthChecker ?? me.calculateBodyLength, credentialDefaultProvider: e?.credentialDefaultProvider ?? import_chunk_a8rkrped.fGe, defaultUserAgentProvider: e?.defaultUserAgentProvider ?? v.createDefaultUserAgentProvider({ serviceId: r.serviceId, clientVersion: Q.version }), httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (n) => n.getIdentityProvider("aws.auth#sigv4"), signer: new R.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#httpBearerAuth", identityProvider: (n) => n.getIdentityProvider("smithy.api#httpBearerAuth") || (async (u) => {
    try {
      return await (0, import_chunk_j2a7x8j7.cvo)({ signingName: "bedrock" })();
    } catch (A) {
      return await (0, import_chunk_j2a7x8j7.uvo)(u)(u);
    }
  }), signer: new pe.HttpBearerAuthSigner() }], maxAttempts: e?.maxAttempts ?? c.loadConfig(T.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e), region: e?.region ?? c.loadConfig(l.NODE_REGION_CONFIG_OPTIONS, { ...l.NODE_REGION_CONFIG_FILE_OPTIONS, ...a }), requestHandler: f.NodeHttpHandler.create(e?.requestHandler ?? t), retryMode: e?.retryMode ?? c.loadConfig({ ...T.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await t()).retryMode || Ce.DEFAULT_RETRY_MODE }, e), sha256: e?.sha256 ?? Re.Hash.bind(null, "sha256"), streamCollector: e?.streamCollector ?? f.streamCollector, useDualstackEndpoint: e?.useDualstackEndpoint ?? c.loadConfig(l.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, a), useFipsEndpoint: e?.useFipsEndpoint ?? c.loadConfig(l.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, a), userAgentAppId: e?.userAgentAppId ?? c.loadConfig(v.NODE_APP_ID_CONFIG_OPTIONS, a) };
};
var x = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.gxe)()), E = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.yb)()), y = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
var ve = (e) => {
  let { httpAuthSchemes: o, httpAuthSchemeProvider: t, credentials: r, token: a } = e;
  return { setHttpAuthScheme(n) {
    let u = o.findIndex((A) => A.schemeId === n.schemeId);
    if (u === -1) o.push(n);
    else o.splice(u, 1, n);
  }, httpAuthSchemes() {
    return o;
  }, setHttpAuthSchemeProvider(n) {
    t = n;
  }, httpAuthSchemeProvider() {
    return t;
  }, setCredentials(n) {
    r = n;
  }, credentials() {
    return r;
  }, setToken(n) {
    a = n;
  }, token() {
    return a;
  } };
}, Te = (e) => ({ httpAuthSchemes: e.httpAuthSchemes(), httpAuthSchemeProvider: e.httpAuthSchemeProvider(), credentials: e.credentials(), token: e.token() });
var fe = (e, o) => {
  let t = Object.assign(x.getAwsRegionExtensionConfiguration(e), y.getDefaultExtensionConfiguration(e), E.getHttpHandlerExtensionConfiguration(e), ve(e));
  return o.forEach((r) => r.configure(t)), Object.assign(e, x.resolveAwsRegionExtensionConfiguration(t), y.resolveDefaultRuntimeConfig(t), E.resolveHttpHandlerRuntimeConfig(t), Te(t));
};
class Ke extends Ge.Client {
  config;
  constructor(...[e]) {
    let o = Pe(e || {});
    super(o);
    this.initConfig = o;
    let t = j(o), r = S.resolveUserAgentConfig(t), a = I.resolveRetryConfig(r), n = ye.resolveRegionConfig(a), u = D.resolveHostHeaderConfig(n), A = Ie.resolveEndpointConfig(u), qe = O(A), We = fe(qe, e?.extensions || []);
    this.config = We, this.middlewareStack.use(De.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(S.getUserAgentPlugin(this.config)), this.middlewareStack.use(I.getRetryPlugin(this.config)), this.middlewareStack.use(Se.getContentLengthPlugin(this.config)), this.middlewareStack.use(D.getHostHeaderPlugin(this.config)), this.middlewareStack.use(xe.getLoggerPlugin(this.config)), this.middlewareStack.use(Ee.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(m.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, { httpAuthSchemeParametersProvider: U, identityProviderConfigProvider: async (q) => new m.DefaultIdentityProviderConfig({ "aws.auth#sigv4": q.credentials, "smithy.api#httpBearerAuth": q.token }) })), this.middlewareStack.use(m.getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
}
var i = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_6v7p7bta.Tj)());
var he = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
class s extends he.ServiceException {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, s.prototype);
  }
}
class G extends s {
  name = "AccessDeniedException";
  $fault = "client";
  constructor(e) {
    super({ name: "AccessDeniedException", $fault: "client", ...e });
    Object.setPrototypeOf(this, G.prototype);
  }
}
class h extends s {
  name = "InternalServerException";
  $fault = "server";
  constructor(e) {
    super({ name: "InternalServerException", $fault: "server", ...e });
    Object.setPrototypeOf(this, h.prototype);
  }
}
class L extends s {
  name = "ResourceNotFoundException";
  $fault = "client";
  constructor(e) {
    super({ name: "ResourceNotFoundException", $fault: "client", ...e });
    Object.setPrototypeOf(this, L.prototype);
  }
}
class b extends s {
  name = "ThrottlingException";
  $fault = "client";
  constructor(e) {
    super({ name: "ThrottlingException", $fault: "client", ...e });
    Object.setPrototypeOf(this, b.prototype);
  }
}
class k extends s {
  name = "ValidationException";
  $fault = "client";
  constructor(e) {
    super({ name: "ValidationException", $fault: "client", ...e });
    Object.setPrototypeOf(this, k.prototype);
  }
}
class F extends s {
  name = "ConflictException";
  $fault = "client";
  constructor(e) {
    super({ name: "ConflictException", $fault: "client", ...e });
    Object.setPrototypeOf(this, F.prototype);
  }
}
class B extends s {
  name = "ServiceQuotaExceededException";
  $fault = "client";
  constructor(e) {
    super({ name: "ServiceQuotaExceededException", $fault: "client", ...e });
    Object.setPrototypeOf(this, B.prototype);
  }
}
class J extends s {
  name = "TooManyTagsException";
  $fault = "client";
  resourceName;
  constructor(e) {
    super({ name: "TooManyTagsException", $fault: "client", ...e });
    Object.setPrototypeOf(this, J.prototype), this.resourceName = e.resourceName;
  }
}
class N extends s {
  name = "ResourceInUseException";
  $fault = "client";
  constructor(e) {
    super({ name: "ResourceInUseException", $fault: "client", ...e });
    Object.setPrototypeOf(this, N.prototype);
  }
}
class V extends s {
  name = "ServiceUnavailableException";
  $fault = "server";
  constructor(e) {
    super({ name: "ServiceUnavailableException", $fault: "server", ...e });
    Object.setPrototypeOf(this, V.prototype);
  }
}
var Le = [0, "com.amazonaws.bedrock", "InferenceProfileDescription", 8, 0];
var He = [-3, "com.amazonaws.bedrock", "AccessDeniedException", { ["error"]: "client", ["httpError"]: 403 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(He, G);
var ze = [-3, "com.amazonaws.bedrock", "ConflictException", { ["error"]: "client", ["httpError"]: 400 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ze, F);
var $e = [3, "com.amazonaws.bedrock", "GetInferenceProfileRequest", 0, ["inferenceProfileIdentifier"], [[0, 1]]], Ye = [3, "com.amazonaws.bedrock", "GetInferenceProfileResponse", 0, ["inferenceProfileName", "description", "createdAt", "updatedAt", "inferenceProfileArn", "models", "inferenceProfileId", "status", "type"], [0, [() => Le, 0], 5, 5, 0, () => be, 0, 0, 0]];
var Xe = [3, "com.amazonaws.bedrock", "InferenceProfileModel", 0, ["modelArn"], [0]], Ze = [3, "com.amazonaws.bedrock", "InferenceProfileSummary", 0, ["inferenceProfileName", "description", "createdAt", "updatedAt", "inferenceProfileArn", "models", "inferenceProfileId", "status", "type"], [0, [() => Le, 0], 5, 5, 0, () => be, 0, 0, 0]], eo = [-3, "com.amazonaws.bedrock", "InternalServerException", { ["error"]: "server", ["httpError"]: 500 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(eo, h);
var oo = [3, "com.amazonaws.bedrock", "ListInferenceProfilesRequest", 0, ["maxResults", "nextToken", "typeEquals"], [[1, { ["httpQuery"]: "maxResults" }], [0, { ["httpQuery"]: "nextToken" }], [0, { ["httpQuery"]: "type" }]]], to = [3, "com.amazonaws.bedrock", "ListInferenceProfilesResponse", 0, ["inferenceProfileSummaries", "nextToken"], [[() => uo, 0], 0]];
var no = [-3, "com.amazonaws.bedrock", "ResourceInUseException", { ["error"]: "client", ["httpError"]: 400 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(no, N);
var so = [-3, "com.amazonaws.bedrock", "ResourceNotFoundException", { ["error"]: "client", ["httpError"]: 404 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(so, L);
var ro = [-3, "com.amazonaws.bedrock", "ServiceQuotaExceededException", { ["error"]: "client", ["httpError"]: 400 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ro, B);
var ao = [-3, "com.amazonaws.bedrock", "ServiceUnavailableException", { ["error"]: "server", ["httpError"]: 503 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ao, V);
var io = [-3, "com.amazonaws.bedrock", "ThrottlingException", { ["error"]: "client", ["httpError"]: 429 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(io, b);
var _o = [-3, "com.amazonaws.bedrock", "TooManyTagsException", { ["error"]: "client", ["httpError"]: 400 }, ["message", "resourceName"], [0, 0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(_o, J);
var co = [-3, "com.amazonaws.bedrock", "ValidationException", { ["error"]: "client", ["httpError"]: 400 }, ["message"], [0]];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(co, k);
var lo = [-3, "smithy.ts.sdk.synthetic.com.amazonaws.bedrock", "BedrockServiceException", 0, [], []];
i.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.bedrock").registerError(lo, s);
var be = [1, "com.amazonaws.bedrock", "InferenceProfileModels", 0, () => Xe], uo = [1, "com.amazonaws.bedrock", "InferenceProfileSummaries", 0, [() => Ze, 0]];
var ke = [9, "com.amazonaws.bedrock", "GetInferenceProfile", { ["http"]: ["GET", "/inference-profiles/{inferenceProfileIdentifier}", 200] }, () => $e, () => Ye];
var Fe = [9, "com.amazonaws.bedrock", "ListInferenceProfiles", { ["http"]: ["GET", "/inference-profiles", 200] }, () => oo, () => to];
var Be = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.FZ)()), Je = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
class po extends Je.Command.classBuilder().ep(M).m(function(e, o, t, r) {
  return [Be.getEndpointPlugin(t, e.getEndpointParameterInstructions())];
}).s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {}).n("BedrockClient", "GetInferenceProfileCommand").sc(ke).build() {
}
var Ne = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_x8v62cn3.FZ)()), Ve = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)());
class Ro extends Ve.Command.classBuilder().ep(M).m(function(e, o, t, r) {
  return [Ne.getEndpointPlugin(t, e.getEndpointParameterInstructions())];
}).s("AmazonBedrockControlPlaneService", "ListInferenceProfiles", {}).n("BedrockClient", "ListInferenceProfilesCommand").sc(Fe).build() {
}
