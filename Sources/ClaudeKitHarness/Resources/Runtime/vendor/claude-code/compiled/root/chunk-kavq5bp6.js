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
var chunk_kavq5bp6_exports = {};
__export(chunk_kavq5bp6_exports, {
  fvo: () => fvo
});
module.exports = __toCommonJS(chunk_kavq5bp6_exports);
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_fs = require("fs");
var S = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), a = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_wymssx1r.C4)());
var g = 3e5, p = "To refresh this SSO session run 'aws sso login' with the corresponding profile.";
var k = async (e, o = {}) => {
  let { SSOOIDCClient: s } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-6a46gsck.js"))).then((m) => (0, import_chunk_w1d7ygsk.rt)(m.default)), n = (f) => o.clientConfig?.[f] ?? o.parentClientConfig?.[f];
  return new s(Object.assign({}, o.clientConfig ?? {}, { region: e ?? o.clientConfig?.region, logger: n("logger"), userAgentAppId: n("userAgentAppId") }));
};
var h = async (e, o, s = {}) => {
  let { CreateTokenCommand: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-6a46gsck.js"))).then((m) => (0, import_chunk_w1d7ygsk.rt)(m.default));
  return (await k(o, s)).send(new n({ clientId: e.clientId, clientSecret: e.clientSecret, refreshToken: e.refreshToken, grantType: "refresh_token" }));
};
var u = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)());
var w = (e) => {
  if (e.expiration && e.expiration.getTime() < Date.now()) throw new u.TokenProviderError(`Token is expired. ${p}`, false);
};
var E = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)());
var i = (e, o, s = false) => {
  if (typeof o > "u") throw new E.TokenProviderError(`Value not present for '${e}' in SSO Token${s ? ". Cannot refresh" : ""}. ${p}`, false);
};
var x = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_wymssx1r.C4)());
var { writeFile: R } = import_fs.promises, O = (e, o) => {
  let s = x.getSSOTokenFilepath(e), n = JSON.stringify(o, null, 2);
  return R(s, n);
};
var C = /* @__PURE__ */ new Date(0), fvo = (e = {}) => async ({ callerClientConfig: o } = {}) => {
  let s = { ...e, parentClientConfig: { ...o, ...e.parentClientConfig } };
  s.logger?.debug("@aws-sdk/token-providers - fromSso");
  let n = await a.parseKnownFiles(s), c = a.getProfileName({ profile: s.profile ?? o?.profile }), f = n[c];
  if (!f) throw new S.TokenProviderError(`Profile '${c}' could not be found in shared credentials file.`, false);
  else if (!f.sso_session) throw new S.TokenProviderError(`Profile '${c}' is missing required property 'sso_session'.`);
  let m = f.sso_session, d = (await a.loadSsoSessionData(s))[m];
  if (!d) throw new S.TokenProviderError(`Sso session '${m}' could not be found in shared credentials file.`, false);
  for (let t of ["sso_start_url", "sso_region"]) if (!d[t]) throw new S.TokenProviderError(`Sso session '${m}' is missing required property '${t}'.`, false);
  let { sso_start_url: F, sso_region: _ } = d, r;
  try {
    r = await a.getSSOTokenFromFile(m);
  } catch (t) {
    throw new S.TokenProviderError(`The SSO session token associated with profile=${c} was not found or is invalid. ${p}`, false);
  }
  i("accessToken", r.accessToken), i("expiresAt", r.expiresAt);
  let { accessToken: y, expiresAt: I } = r, l = { token: y, expiration: new Date(I) };
  if (l.expiration.getTime() - Date.now() > g) return l;
  if (Date.now() - C.getTime() < 3e4) return w(l), l;
  i("clientId", r.clientId, true), i("clientSecret", r.clientSecret, true), i("refreshToken", r.refreshToken, true);
  try {
    C.setTime(Date.now());
    let t = await h(r, _, s);
    i("accessToken", t.accessToken), i("expiresIn", t.expiresIn);
    let T = new Date(Date.now() + t.expiresIn * 1e3);
    try {
      await O(m, { ...r, accessToken: t.accessToken, expiresAt: T.toISOString(), refreshToken: t.refreshToken });
    } catch (v) {
    }
    return { token: t.accessToken, expiration: T };
  } catch (t) {
    return w(l), l;
  }
};
