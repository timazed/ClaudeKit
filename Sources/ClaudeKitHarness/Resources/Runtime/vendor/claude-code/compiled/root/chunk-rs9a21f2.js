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
var chunk_rs9a21f2_exports = {};
__export(chunk_rs9a21f2_exports, {
  nBr: () => nBr,
  uga: () => uga
});
module.exports = __toCommonJS(chunk_rs9a21f2_exports);
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
async function nBr(e, n, i) {
  if (!(e instanceof Error) || !e.message.startsWith("SDK auth failed: ") || !(e.cause instanceof Error)) return false;
  let { cause: t } = e, s = require("/$bunfs/root/chunk-4kvvnjdb.js").mcpAuthModule().classifySdkAuthFailure(e.message, t);
  if (s !== "dcr_failed" && s !== "dcr_rejected") return false;
  if (!("status" in t) && !("errorCode" in t)) return t.message === "Incompatible auth server: does not support dynamic client registration";
  if (!((await (0, import_chunk_yz5b8aaa.aK)())?.[(0, import_chunk_yz5b8aaa.kc)(n, i)]?.discoveryState?.oauthMetadataFound ?? i.oauth?.authServerMetadataUrl !== void 0)) return false;
  let r = a(t);
  if (r !== void 0) return r >= 400 && r < 500 && r !== 408 && r !== 429;
  switch ("errorCode" in t ? t.errorCode : void 0) {
    case "invalid_client_metadata":
    case "invalid_client":
    case "unauthorized_client":
      return true;
    default:
      return false;
  }
}
function uga(e) {
  return e instanceof Error && e.cause instanceof Error && a(e.cause) === 410;
}
function a(e) {
  let n = "status" in e ? e.status : Number(/^HTTP (\d{3}): Invalid OAuth error response: /.exec(e.message)?.[1]);
  return typeof n === "number" && Number.isFinite(n) ? n : void 0;
}
