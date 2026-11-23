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
var chunk_j2a7x8j7_exports = {};
__export(chunk_j2a7x8j7_exports, {
  cvo: () => cvo,
  uvo: () => uvo
});
module.exports = __toCommonJS(chunk_j2a7x8j7_exports);
var import_chunk_qrv5kr16 = require("/$bunfs/root/chunk-qrv5kr16.js");
var import_chunk_kavq5bp6 = require("/$bunfs/root/chunk-kavq5bp6.js");
var import_chunk_fe2jgj1j = require("/$bunfs/root/chunk-fe2jgj1j.js");
var import_chunk_4vm1ywmw = require("/$bunfs/root/chunk-4vm1ywmw.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var a = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_4vm1ywmw.Cj)());
var c = (0, import_chunk_3jjr3wje.yb)(), d = (0, import_chunk_qrv5kr16.HR)(), l = (0, import_chunk_fac79wqz.gw)(), u = (0, import_chunk_4vm1ywmw.Cj)(), S = (0, import_chunk_fe2jgj1j.vGt)();
var g = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
var r = g;
var s = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), cvo = ({ logger: e, signingName: n } = {}) => async () => {
  if (e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !n) throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger: e });
  let t = r(n);
  if (!(t in process.env)) throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, { logger: e });
  let o = { token: process.env[t] };
  return a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o;
};
var i = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)());
var uvo = (e = {}) => i.memoize(i.chain((0, import_chunk_kavq5bp6.fvo)(e), async () => {
  throw new i.TokenProviderError("Could not load token from any providers", false);
}), (n) => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 3e5, (n) => n.expiration !== void 0);
