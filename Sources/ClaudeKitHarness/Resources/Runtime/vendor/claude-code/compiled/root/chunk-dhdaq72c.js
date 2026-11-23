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
var chunk_dhdaq72c_exports = {};
__export(chunk_dhdaq72c_exports, {
  fromTokenFile: () => A,
  fromWebToken: () => l
});
module.exports = __toCommonJS(chunk_dhdaq72c_exports);
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_4vm1ywmw = require("/$bunfs/root/chunk-4vm1ywmw.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_fs = require("fs");
var d = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_4vm1ywmw.Cj)()), a = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), m = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_wymssx1r.C4)());
var l = (e) => async (t) => {
  e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
  let { roleArn: o, roleSessionName: r, webIdentityToken: s, providerId: n, policyArns: g, policy: p, durationSeconds: E } = e, { roleAssumerWithWebIdentity: i } = e;
  if (!i) {
    let { getDefaultRoleAssumerWithWebIdentity: f } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-92pmbrnf.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default));
    i = f({ ...e.clientConfig, credentialProviderLogger: e.logger, parentClientConfig: { ...t?.callerClientConfig, ...e.parentClientConfig } }, e.clientPlugins);
  }
  return i({ RoleArn: o, RoleSessionName: r ?? `aws-sdk-js-session-${Date.now()}`, WebIdentityToken: s, ProviderId: n, PolicyArns: g, Policy: p, DurationSeconds: E });
};
var c = "AWS_WEB_IDENTITY_TOKEN_FILE", S = "AWS_ROLE_ARN", N = "AWS_ROLE_SESSION_NAME", A = (e = {}) => async (t) => {
  e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
  let o = e?.webIdentityTokenFile ?? process.env[c], r = e?.roleArn ?? process.env[S], s = e?.roleSessionName ?? process.env[N];
  if (!o || !r) throw new a.CredentialsProviderError("Web identity configuration not specified", { logger: e.logger });
  let n = await l({ ...e, webIdentityToken: m.externalDataInterceptor?.getTokenRecord?.()[o] ?? (0, import_fs.readFileSync)(o, { encoding: "ascii" }), roleArn: r, roleSessionName: s })(t);
  if (o === process.env[c]) d.setCredentialFeature(n, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
  return n;
};
