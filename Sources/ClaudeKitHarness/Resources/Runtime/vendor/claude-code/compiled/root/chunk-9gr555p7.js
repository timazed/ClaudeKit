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
var chunk_9gr555p7_exports = {};
__export(chunk_9gr555p7_exports, {
  fromProcess: () => h
});
module.exports = __toCommonJS(chunk_9gr555p7_exports);
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_4vm1ywmw = require("/$bunfs/root/chunk-4vm1ywmw.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_child_process = require("child_process");
var import_util = require("util");
var d = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_wymssx1r.C4)());
var c = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), i = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_wymssx1r.C4)());
var a = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_4vm1ywmw.Cj)()), f = (r, e, o) => {
  if (e.Version !== 1) throw Error(`Profile ${r} credential_process did not return Version 1.`);
  if (e.AccessKeyId === void 0 || e.SecretAccessKey === void 0) throw Error(`Profile ${r} credential_process returned invalid credentials.`);
  if (e.Expiration) {
    let l = /* @__PURE__ */ new Date();
    if (new Date(e.Expiration) < l) throw Error(`Profile ${r} credential_process returned expired credentials.`);
  }
  let s = e.AccountId;
  if (!s && o?.[r]?.aws_account_id) s = o[r].aws_account_id;
  let t = { accessKeyId: e.AccessKeyId, secretAccessKey: e.SecretAccessKey, ...e.SessionToken && { sessionToken: e.SessionToken }, ...e.Expiration && { expiration: new Date(e.Expiration) }, ...e.CredentialScope && { credentialScope: e.CredentialScope }, ...s && { accountId: s } };
  return a.setCredentialFeature(t, "CREDENTIALS_PROCESS", "w"), t;
};
var w = async (r, e, o) => {
  let s = e[r];
  if (e[r]) {
    let t = s.credential_process;
    if (t !== void 0) {
      let l = (0, import_util.promisify)(i.externalDataInterceptor?.getTokenRecord?.().exec ?? import_child_process.exec);
      try {
        let { stdout: n } = await l(t, { env: { ...process.env, HOME: i.getHomeDir() } }), p;
        try {
          p = JSON.parse(n.trim());
        } catch {
          throw Error(`Profile ${r} credential_process returned invalid JSON.`);
        }
        return f(r, p, e);
      } catch (n) {
        throw new c.CredentialsProviderError(n.message, { logger: o });
      }
    } else throw new c.CredentialsProviderError(`Profile ${r} did not contain credential_process.`, { logger: o });
  } else throw new c.CredentialsProviderError(`Profile ${r} could not be found in shared credentials file.`, { logger: o });
};
var h = (r = {}) => async ({ callerClientConfig: e } = {}) => {
  r.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
  let o = await d.parseKnownFiles(r);
  return w(d.getProfileName({ profile: r.profile ?? e?.profile }), o, r.logger);
};
