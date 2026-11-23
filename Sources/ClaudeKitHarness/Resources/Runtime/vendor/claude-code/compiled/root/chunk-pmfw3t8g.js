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
var chunk_pmfw3t8g_exports = {};
__export(chunk_pmfw3t8g_exports, {
  fromHttp: () => H
});
module.exports = __toCommonJS(chunk_pmfw3t8g_exports);
var import_chunk_1tzm94k1 = require("/$bunfs/root/chunk-1tzm94k1.js");
var import_chunk_6v7p7bta = require("/$bunfs/root/chunk-6v7p7bta.js");
var import_chunk_4vm1ywmw = require("/$bunfs/root/chunk-4vm1ywmw.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_promises = __toESM(require("fs/promises"));
var E = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_4vm1ywmw.Cj)()), N = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.SK)()), m = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)());
var A = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)());
var w = "169.254.170.2", g = "169.254.170.23", S = "[fd00:ec2::23]", h = (e, o) => {
  if (e.protocol === "https:") return;
  if (e.hostname === w || e.hostname === g || e.hostname === S) return;
  if (e.hostname.includes("[")) {
    if (e.hostname === "[::1]" || e.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return;
  } else {
    if (e.hostname === "localhost") return;
    let n = e.hostname.split("."), r = (t) => {
      let s = parseInt(t, 10);
      return 0 <= s && s <= 255;
    };
    if (n[0] === "127" && r(n[1]) && r(n[2]) && r(n[3]) && n.length === 4) return;
  }
  throw new A.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger: o });
};
var i = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), C = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.yb)()), l = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_1tzm94k1.Bh)()), p = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_6v7p7bta.gzi)());
function _(e) {
  return new C.HttpRequest({ protocol: e.protocol, hostname: e.hostname, port: Number(e.port), path: e.pathname, query: Array.from(e.searchParams.entries()).reduce((o, [n, r]) => (o[n] = r, o), {}), fragment: e.hash });
}
async function I(e, o) {
  let r = await p.sdkStreamMixin(e.body).transformToString();
  if (e.statusCode === 200) {
    let t = JSON.parse(r);
    if (typeof t.AccessKeyId !== "string" || typeof t.SecretAccessKey !== "string" || typeof t.Token !== "string" || typeof t.Expiration !== "string") throw new i.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger: o });
    return { accessKeyId: t.AccessKeyId, secretAccessKey: t.SecretAccessKey, sessionToken: t.Token, expiration: l.parseRfc3339DateTime(t.Expiration) };
  }
  if (e.statusCode >= 400 && e.statusCode < 500) {
    let t = {};
    try {
      t = JSON.parse(r);
    } catch (s) {
    }
    throw Object.assign(new i.CredentialsProviderError(`Server responded with status: ${e.statusCode}`, { logger: o }), { Code: t.Code, Message: t.Message });
  }
  throw new i.CredentialsProviderError(`Server responded with status: ${e.statusCode}`, { logger: o });
}
var f = (e, o, n) => async () => {
  for (let r = 0; r < o; ++r) try {
    return await e();
  } catch (t) {
    await new Promise((s) => setTimeout(s, n));
  }
  return await e();
};
var L = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", y = "http://169.254.170.2", v = "AWS_CONTAINER_CREDENTIALS_FULL_URI", U = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE", k = "AWS_CONTAINER_AUTHORIZATION_TOKEN", H = (e = {}) => {
  e.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
  let o, n = e.awsContainerCredentialsRelativeUri ?? process.env[L], r = e.awsContainerCredentialsFullUri ?? process.env[v], t = e.awsContainerAuthorizationToken ?? process.env[k], s = e.awsContainerAuthorizationTokenFile ?? process.env[U], a = e.logger?.constructor?.name === "NoOpLogger" || !e.logger?.warn ? console.warn : e.logger.warn.bind(e.logger);
  if (n && r) a("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), a("awsContainerCredentialsFullUri will take precedence.");
  if (t && s) a("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), a("awsContainerAuthorizationToken will take precedence.");
  if (r) o = r;
  else if (n) o = `${y}${n}`;
  else throw new m.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: e.logger });
  let T = new URL(o);
  h(T, e.logger);
  let u = N.NodeHttpHandler.create({ requestTimeout: e.timeout ?? 1e3, connectionTimeout: e.timeout ?? 1e3 });
  return f(async () => {
    let c = _(T);
    if (t) c.headers.Authorization = t;
    else if (s) c.headers.Authorization = (await import_promises.default.readFile(s)).toString();
    try {
      let d = await u.handle(c);
      return I(d.response).then((R) => E.setCredentialFeature(R, "CREDENTIALS_HTTP", "z"));
    } catch (d) {
      throw new m.CredentialsProviderError(String(d), { logger: e.logger });
    }
  }, e.maxRetries ?? 3, e.timeout ?? 1e3);
};
