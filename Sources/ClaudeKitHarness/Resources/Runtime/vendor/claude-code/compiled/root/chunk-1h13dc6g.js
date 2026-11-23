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
var chunk_1h13dc6g_exports = {};
__export(chunk_1h13dc6g_exports, {
  ROUTE_ENV_VAR_NAMES: () => import_chunk_zhr7rpv7.pLr,
  THIRD_PARTY_PROVIDER_ENV_VARS: () => import_chunk_zhr7rpv7.POe,
  THIRD_PARTY_PROVIDER_LABELS: () => import_chunk_zhr7rpv7.tx,
  allowedProviderLabel: () => import_chunk_zhr7rpv7.uLr,
  allowedProviderNameOf: () => import_chunk_zhr7rpv7.oLs,
  apiProviderLabel: () => import_chunk_zhr7rpv7.l4t,
  assumesFirstPartyBaseUrl: () => import_chunk_zhr7rpv7.v3,
  awsPartitionOfRegion: () => import_chunk_zhr7rpv7.s5l,
  awsPartitionOfServiceUrl: () => import_chunk_zhr7rpv7.Rnd,
  classifyProviderEndpoint: () => import_chunk_zhr7rpv7.SBl,
  configuredApiProxyHost: () => import_chunk_zhr7rpv7.FEe,
  gatewaySwitchedOnWith: () => import_chunk_zhr7rpv7.Ora,
  getAPIProvider: () => import_chunk_zhr7rpv7.ve,
  getAPIProviderForAnalytics: () => import_chunk_zhr7rpv7.tA,
  getProviderForModel: () => import_chunk_zhr7rpv7.rc,
  getSecondaryProvider: () => import_chunk_zhr7rpv7.cQe,
  hasCustomBaseUrlForAnalytics: () => import_chunk_zhr7rpv7.mLr,
  hasFirstPartyCapabilities: () => import_chunk_zhr7rpv7.ose,
  isActualFirstPartyAnthropicBaseUrl: () => import_chunk_zhr7rpv7.pc,
  isClaudePlatformProvider: () => import_chunk_zhr7rpv7.RI,
  isFirstPartyAnthropicBaseUrl: () => import_chunk_zhr7rpv7.ya,
  isFirstPartyAnthropicHost: () => import_chunk_zhr7rpv7.md,
  isFirstPartyApiBackend: () => import_chunk_zhr7rpv7.Ss,
  isFirstPartyProvider: () => import_chunk_zhr7rpv7.jn,
  isGenuineBedrockEndpoint: () => import_chunk_zhr7rpv7.i0o,
  isProviderServiceUrl: () => import_chunk_zhr7rpv7.iLs,
  modelIdsAreOpaque: () => import_chunk_zhr7rpv7.o0o,
  providerEndpointOverrides: () => import_chunk_zhr7rpv7.s0o,
  providerEndpointVariables: () => import_chunk_zhr7rpv7.jxt,
  providerReadsClientData: () => import_chunk_zhr7rpv7.fLr,
  routesOffAnthropicApiWith: () => import_chunk_zhr7rpv7.T4n,
  shouldPropagateTraceContext: () => import_chunk_zhr7rpv7.hLr,
  startChecksDefault: () => import_chunk_zhr7rpv7.sLs,
  usesCustomApiEndpoint: () => import_chunk_zhr7rpv7.d4t,
  usesFirstPartyModelIds: () => import_chunk_zhr7rpv7.gm,
  usesFirstPartyPricing: () => import_chunk_zhr7rpv7.c1e
});
module.exports = __toCommonJS(chunk_1h13dc6g_exports);
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
