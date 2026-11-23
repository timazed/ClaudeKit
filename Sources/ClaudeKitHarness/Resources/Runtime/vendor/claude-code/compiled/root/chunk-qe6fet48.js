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
var chunk_qe6fet48_exports = {};
__export(chunk_qe6fet48_exports, {
  CONSOLE_PROFILE_MARKER: () => import_chunk_9b4aq7fb.GX,
  clearWIFAccountInfoCache: () => import_chunk_9b4aq7fb.GVn,
  clearWIFPrecedenceCache: () => import_chunk_9b4aq7fb.j7i,
  explicitProfileName: () => import_chunk_9b4aq7fb.u8,
  getUnusableNamedProfile: () => import_chunk_9b4aq7fb.kMr,
  getUnusableNamedProfileReason: () => import_chunk_9b4aq7fb.EMr,
  getWIFAccountInfo: () => import_chunk_9b4aq7fb.tL,
  getWIFAccountOnHold: () => import_chunk_9b4aq7fb.cRt,
  getWIFAuthType: () => import_chunk_9b4aq7fb.i3,
  getWIFFederationIdentity: () => import_chunk_9b4aq7fb.fRt,
  getWIFPrecedenceSource: () => import_chunk_9b4aq7fb.gk,
  getWIFProfileBaseUrl: () => import_chunk_9b4aq7fb.hFe,
  getWIFProfileStoreDenyPaths: () => import_chunk_9b4aq7fb.VVn,
  getWIFStatusLine: () => import_chunk_9b4aq7fb.zVn,
  isWIFActive: () => import_chunk_9b4aq7fb.UVt,
  isWIFRefreshTokenCleared: () => import_chunk_9b4aq7fb.U7i,
  isWIFSettingsBearerRejected: () => import_chunk_9b4aq7fb.z7i,
  isWIFUserOAuthDeadError: () => import_chunk_9b4aq7fb.jhn,
  latchEnvironmentHold: () => import_chunk_9b4aq7fb.W7i,
  latchSignInHold: () => import_chunk_9b4aq7fb.B7i,
  markWIFRefreshTokenCleared: () => import_chunk_9b4aq7fb.$7i,
  primeWIFProfileFiles: () => import_chunk_9b4aq7fb.K7i,
  readWIFAccessToken: () => import_chunk_9b4aq7fb.G7i,
  readWIFAccountInfo: () => import_chunk_9b4aq7fb.uRt,
  resolveConfigDir: () => import_chunk_9b4aq7fb.FA,
  resolveImplicitProfileName: () => import_chunk_9b4aq7fb.fJe,
  resolveLiveProfileName: () => import_chunk_9b4aq7fb.BVt,
  setWIFSettingsBearerRejected: () => import_chunk_9b4aq7fb.V7i,
  wouldWIFProfileYieldToClaudeAILogin: () => import_chunk_9b4aq7fb.c8
});
module.exports = __toCommonJS(chunk_qe6fet48_exports);
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
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
