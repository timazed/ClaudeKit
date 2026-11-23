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
var chunk_evvpn5km_exports = {};
__export(chunk_evvpn5km_exports, {
  fromSSO: () => Y
});
module.exports = __toCommonJS(chunk_evvpn5km_exports);
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_kavq5bp6 = require("/$bunfs/root/chunk-kavq5bp6.js");
var import_chunk_4vm1ywmw = require("/$bunfs/root/chunk-4vm1ywmw.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var S = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), m = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_wymssx1r.C4)());
var D = (e) => e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");
var y = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_4vm1ywmw.Cj)());
var d = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), F = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_wymssx1r.C4)()), h = false, O = async ({ ssoStartUrl: e, ssoSession: f, ssoAccountId: s, ssoRegion: n, ssoRoleName: r, ssoClient: i, clientConfig: a, parentClientConfig: _, profile: t, filepath: k, configFilepath: o, ignoreCache: u, logger: l }) => {
  let g, N = "To refresh this SSO session run aws sso login with the corresponding profile.";
  if (f) try {
    let c = await (0, import_chunk_kavq5bp6.fvo)({ profile: t, filepath: k, configFilepath: o, ignoreCache: u })();
    g = { accessToken: c.token, expiresAt: new Date(c.expiration).toISOString() };
  } catch (c) {
    throw new d.CredentialsProviderError(c.message, { tryNextLink: h, logger: l });
  }
  else try {
    g = await F.getSSOTokenFromFile(e);
  } catch (c) {
    throw new d.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", { tryNextLink: h, logger: l });
  }
  if (new Date(g.expiresAt).getTime() - Date.now() <= 0) throw new d.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", { tryNextLink: h, logger: l });
  let { accessToken: C } = g, { SSOClient: A, GetRoleCredentialsCommand: p } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ff4x6gct.js"))), w = i || new A(Object.assign({}, a ?? {}, { logger: a?.logger ?? _?.logger, region: a?.region ?? n, userAgentAppId: a?.userAgentAppId ?? _?.userAgentAppId })), I;
  try {
    I = await w.send(new p({ accountId: s, roleName: r, accessToken: C }));
  } catch (c) {
    throw new d.CredentialsProviderError(c, { tryNextLink: h, logger: l });
  }
  let { roleCredentials: { accessKeyId: L, secretAccessKey: R, sessionToken: T, expiration: v, credentialScope: P, accountId: E } = {} } = I;
  if (!L || !R || !T || !v) throw new d.CredentialsProviderError("SSO returns an invalid temporary credential.", { tryNextLink: h, logger: l });
  let x = { accessKeyId: L, secretAccessKey: R, sessionToken: T, expiration: new Date(v), ...P && { credentialScope: P }, ...E && { accountId: E } };
  if (f) y.setCredentialFeature(x, "CREDENTIALS_SSO", "s");
  else y.setCredentialFeature(x, "CREDENTIALS_SSO_LEGACY", "u");
  return x;
};
var M = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), U = (e, f) => {
  let { sso_start_url: s, sso_account_id: n, sso_region: r, sso_role_name: i } = e;
  if (!s || !n || !r || !i) throw new M.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger: f });
  return e;
};
var Y = (e = {}) => async ({ callerClientConfig: f } = {}) => {
  e.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
  let { ssoStartUrl: s, ssoAccountId: n, ssoRegion: r, ssoRoleName: i, ssoSession: a } = e, { ssoClient: _ } = e, t = m.getProfileName({ profile: e.profile ?? f?.profile });
  if (!s && !n && !r && !i && !a) {
    let o = (await m.parseKnownFiles(e))[t];
    if (!o) throw new S.CredentialsProviderError(`Profile ${t} was not found.`, { logger: e.logger });
    if (!D(o)) throw new S.CredentialsProviderError(`Profile ${t} is not configured with SSO credentials.`, { logger: e.logger });
    if (o?.sso_session) {
      let p = (await m.loadSsoSessionData(e))[o.sso_session], w = ` configurations in profile ${t} and sso-session ${o.sso_session}`;
      if (r && r !== p.sso_region) throw new S.CredentialsProviderError("Conflicting SSO region" + w, { tryNextLink: false, logger: e.logger });
      if (s && s !== p.sso_start_url) throw new S.CredentialsProviderError("Conflicting SSO start_url" + w, { tryNextLink: false, logger: e.logger });
      o.sso_region = p.sso_region, o.sso_start_url = p.sso_start_url;
    }
    let { sso_start_url: u, sso_account_id: l, sso_region: g, sso_role_name: N, sso_session: C } = U(o, e.logger);
    return O({ ssoStartUrl: u, ssoSession: C, ssoAccountId: l, ssoRegion: g, ssoRoleName: N, ssoClient: _, clientConfig: e.clientConfig, parentClientConfig: e.parentClientConfig, profile: t, filepath: e.filepath, configFilepath: e.configFilepath, ignoreCache: e.ignoreCache, logger: e.logger });
  } else if (!s || !n || !r || !i) throw new S.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: e.logger });
  else return O({ ssoStartUrl: s, ssoSession: a, ssoAccountId: n, ssoRegion: r, ssoRoleName: i, ssoClient: _, clientConfig: e.clientConfig, parentClientConfig: e.parentClientConfig, profile: t, filepath: e.filepath, configFilepath: e.configFilepath, ignoreCache: e.ignoreCache, logger: e.logger });
};
