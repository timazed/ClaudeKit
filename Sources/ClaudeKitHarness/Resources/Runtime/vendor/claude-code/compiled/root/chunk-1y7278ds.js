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
var chunk_1y7278ds_exports = {};
__export(chunk_1y7278ds_exports, {
  createCredentialChain: () => O,
  fromEnv: () => R,
  fromIni: () => F,
  fromNodeProviderChain: () => v,
  fromTemporaryCredentials: () => M
});
module.exports = __toCommonJS(chunk_1y7278ds_exports);
var import_chunk_tf0gwgs2 = require("/$bunfs/root/chunk-tf0gwgs2.js");
var import_chunk_a8rkrped = require("/$bunfs/root/chunk-a8rkrped.js");
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_dy0e1427 = require("/$bunfs/root/chunk-dy0e1427.js");
var import_chunk_djjqrhyf = require("/$bunfs/root/chunk-djjqrhyf.js");
var import_chunk_qrv5kr16 = require("/$bunfs/root/chunk-qrv5kr16.js");
var import_chunk_6v7p7bta = require("/$bunfs/root/chunk-6v7p7bta.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var x = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), O = (...e) => {
  let r = -1, i = Object.assign(async (t) => {
    let o = await P(...e)(t);
    if (!o.expiration && r !== -1) o.expiration = new Date(Date.now() + r);
    return o;
  }, { expireAfter(t) {
    if (t < 3e5) throw Error("@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes.");
    return r = t, i;
  } });
  return i;
}, P = (...e) => async (r) => {
  if (e.length === 0) throw new x.ProviderError("No providers in chain", { tryNextLink: false });
  let n;
  for (let i of e) try {
    return await i(r);
  } catch (t) {
    if (n = t, t?.tryNextLink) continue;
    throw t;
  }
  throw n;
};
var R = (e) => (0, import_chunk_a8rkrped.pvo)(e);
var F = (e = {}) => (0, import_chunk_dy0e1427.czi)({ ...e });
var v = (e = {}) => (0, import_chunk_a8rkrped.fGe)({ ...e });
var E = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_djjqrhyf.L0)()), T = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_tf0gwgs2.Rj)());
var h = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qrv5kr16.HR)()), S = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), k = "us-east-1", A = (e, r, n) => {
  let i;
  return async (t = {}) => {
    let { callerClientConfig: o } = t, w = e.clientConfig?.profile ?? o?.profile, c = e.logger ?? o?.logger;
    c?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
    let f = { ...e.params, RoleSessionName: e.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
    if (f?.SerialNumber) {
      if (!e.mfaCodeProvider) throw new S.CredentialsProviderError("Temporary credential requires multi-factor authentication, but no MFA code callback was provided.", { tryNextLink: false, logger: c });
      f.TokenCode = await e.mfaCodeProvider(f?.SerialNumber);
    }
    let { AssumeRoleCommand: I, STSClient: N } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-pqr43r3d.js")));
    if (!i) {
      let u = typeof r === "function" ? r() : void 0, s = [e.masterCredentials, e.clientConfig?.credentials, void o?.credentials, o?.credentialDefaultProvider?.(), u], l = "STS client default credentials";
      if (s[0]) l = "options.masterCredentials";
      else if (s[1]) l = "options.clientConfig.credentials";
      else if (s[2]) throw l = "caller client's credentials", Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");
      else if (s[3]) l = "caller client's credentialDefaultProvider";
      else if (s[4]) l = "AWS SDK default credentials";
      let d = [e.clientConfig?.region, o?.region, await n?.({ profile: w }), k], m = "default partition's default region";
      if (d[0]) m = "options.clientConfig.region";
      else if (d[1]) m = "caller client's region";
      else if (d[2]) m = "file or env region";
      let C = [y(e.clientConfig?.requestHandler), y(o?.requestHandler)], g = "STS default requestHandler";
      if (C[0]) g = "options.clientConfig.requestHandler";
      else if (C[1]) g = "caller client's requestHandler";
      c?.debug?.(`@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${m}=${await h.normalizeProvider(p(d))()}, ${l}, ${g}.`), i = new N({ userAgentAppId: o?.userAgentAppId, ...e.clientConfig, credentials: p(s), logger: c, profile: w, region: p(d), requestHandler: p(C) });
    }
    if (e.clientPlugins) for (let u of e.clientPlugins) i.middlewareStack.use(u);
    let { Credentials: a } = await i.send(new I(f));
    if (!a || !a.AccessKeyId || !a.SecretAccessKey) throw new S.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${f.RoleArn}`, { logger: c });
    return { accessKeyId: a.AccessKeyId, secretAccessKey: a.SecretAccessKey, sessionToken: a.SessionToken, expiration: a.Expiration, credentialScope: a.CredentialScope };
  };
}, y = (e) => e?.metadata?.handlerProtocol === "h2" ? void 0 : e, p = (e) => {
  for (let r of e) if (r !== void 0) return r;
};
var M = (e) => A(e, v, async ({ profile: r = process.env.AWS_PROFILE }) => T.loadConfig({ environmentVariableSelector: (n) => n.AWS_REGION, configFileSelector: (n) => n.region, default: () => {
  return;
} }, { ...E.NODE_REGION_CONFIG_FILE_OPTIONS, profile: r })());
