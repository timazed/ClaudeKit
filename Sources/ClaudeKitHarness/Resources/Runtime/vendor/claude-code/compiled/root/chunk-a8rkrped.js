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
var chunk_a8rkrped_exports = {};
__export(chunk_a8rkrped_exports, {
  fGe: () => fGe,
  fzi: () => fzi,
  pvo: () => pvo,
  uzi: () => uzi
});
module.exports = __toCommonJS(chunk_a8rkrped_exports);
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_4vm1ywmw = require("/$bunfs/root/chunk-4vm1ywmw.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var p = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_4vm1ywmw.Cj)()), E = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), uzi = "AWS_ACCESS_KEY_ID", fzi = "AWS_SECRET_ACCESS_KEY", u = "AWS_SESSION_TOKEN", _ = "AWS_CREDENTIAL_EXPIRATION", C = "AWS_CREDENTIAL_SCOPE", w = "AWS_ACCOUNT_ID", pvo = (e) => async () => {
  e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
  let o = process.env[uzi], r = process.env[fzi], n = process.env[u], s = process.env[_], t = process.env[C], d = process.env[w];
  if (o && r) {
    let a = { accessKeyId: o, secretAccessKey: r, ...n && { sessionToken: n }, ...s && { expiration: new Date(s) }, ...t && { credentialScope: t }, ...d && { accountId: d } };
    return p.setCredentialFeature(a, "CREDENTIALS_ENV_VARS", "g"), a;
  }
  throw new E.CredentialsProviderError("Unable to find environment variable credentials.", { logger: e?.logger });
};
var c = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), m = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_wymssx1r.C4)());
var i = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), f = "AWS_EC2_METADATA_DISABLED", S = async (e) => {
  let { ENV_CMDS_FULL_URI: o, ENV_CMDS_RELATIVE_URI: r, fromContainerMetadata: n, fromInstanceMetadata: s } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-wf7k2rn2.js")));
  if (process.env[r] || process.env[o]) {
    e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
    let { fromHttp: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-pmfw3t8g.js")));
    return i.chain(t(e), n(e));
  }
  if (process.env[f] && process.env[f] !== "false") return async () => {
    throw new i.CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: e.logger });
  };
  return e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), s(e);
};
function g(e, o) {
  let r = A(e), n, s, t, d = async (a) => {
    if (a?.forceRefresh) return await r(a);
    if (t?.expiration) {
      if (t?.expiration?.getTime() < Date.now()) t = void 0;
    }
    if (n) await n;
    else if (!t || o?.(t)) if (t) {
      if (!s) s = r(a).then((l) => {
        t = l, s = void 0;
      });
    } else return n = r(a).then((l) => {
      t = l, n = void 0;
    }), d(a);
    return t;
  };
  return d;
}
var A = (e) => async (o) => {
  let r;
  for (let n of e) try {
    return await n(o);
  } catch (s) {
    if (r = s, s?.tryNextLink) continue;
    throw s;
  }
  throw r;
};
var v = false, fGe = (e = {}) => g([async () => {
  if (e.profile ?? process.env[m.ENV_PROFILE]) {
    if (process.env[uzi] && process.env[fzi]) {
      if (!v) (e.logger?.warn && e.logger?.constructor?.name !== "NoOpLogger" ? e.logger.warn.bind(e.logger) : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`), v = true;
    }
    throw new c.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", { logger: e.logger, tryNextLink: true });
  }
  return e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), pvo(e)();
}, async (o) => {
  e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
  let { ssoStartUrl: r, ssoAccountId: n, ssoRegion: s, ssoRoleName: t, ssoSession: d } = e;
  if (!r && !n && !s && !t && !d) throw new c.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: e.logger });
  let { fromSSO: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-evvpn5km.js")));
  return a(e)(o);
}, async (o) => {
  e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
  let { fromIni: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-d9b356eg.js")));
  return r(e)(o);
}, async (o) => {
  e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
  let { fromProcess: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-9gr555p7.js")));
  return r(e)(o);
}, async (o) => {
  e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
  let { fromTokenFile: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-dhdaq72c.js")));
  return r(e)(o);
}, async () => (e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await S(e))()), async () => {
  throw new c.CredentialsProviderError("Could not load credentials from any providers", { tryNextLink: false, logger: e.logger });
}], I);
var I = (e) => e?.expiration !== void 0 && e.expiration.getTime() - Date.now() < 3e5;
