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
var chunk_gjd6m6ps_exports = {};
__export(chunk_gjd6m6ps_exports, {
  TeleportSessionState: () => import_chunk_fqra1yx2.FBa,
  activateTeleportCache: () => import_chunk_fqra1yx2.msi,
  chromeRefusalNote: () => import_chunk_fqra1yx2.gsi,
  chromeSwitchNote: () => import_chunk_fqra1yx2.w8o,
  closeOpenRelayBootVerdict: () => import_chunk_fqra1yx2._sr,
  getLastDispatchFallback: () => import_chunk_fqra1yx2.CJl,
  getTeleportCacheState: () => import_chunk_fqra1yx2.zI,
  hasForkGoneDirect: () => import_chunk_fqra1yx2.Rsi,
  holdRelayBootVerdictOpen: () => import_chunk_fqra1yx2.ysi,
  isOfferedToRelay: () => import_chunk_fqra1yx2.vJl,
  isPreAnchorIntact: () => import_chunk_fqra1yx2.Psi,
  isRelayBootVerdictOpen: () => import_chunk_fqra1yx2.O7r,
  isRelayThinkingStripOwed: () => import_chunk_fqra1yx2.wsi,
  isRelayedRequest: () => import_chunk_fqra1yx2.EJl,
  logTeleportFallbackOnce: () => import_chunk_fqra1yx2.Csi,
  markRelayThinkingStripRecorded: () => import_chunk_fqra1yx2.RJl,
  noteChromeRefusal: () => import_chunk_fqra1yx2.wJl,
  noteChromeSwitch: () => import_chunk_fqra1yx2.bJl,
  noteForkWentDirect: () => import_chunk_fqra1yx2.E8o,
  noteHandoffMarkerStep: () => import_chunk_fqra1yx2.m0t,
  noteRelayBootSettled: () => import_chunk_fqra1yx2.k8o,
  noteRelayDispatch: () => import_chunk_fqra1yx2.vsi,
  noteRelayFallback: () => import_chunk_fqra1yx2.Tsi,
  noteRelayRefusedGzip: () => import_chunk_fqra1yx2.Esi,
  oweRelayThinkingStrip: () => import_chunk_fqra1yx2.bsi,
  recordEnableStubCall: () => import_chunk_fqra1yx2.hsi,
  registerRelayFetch: () => import_chunk_fqra1yx2._si,
  relayStillUsableInProcess: () => import_chunk_fqra1yx2.TJl,
  relayStoppedInLastDispatch: () => import_chunk_fqra1yx2.AJl,
  relayTakesGzip: () => import_chunk_fqra1yx2.ksi,
  relayThinkingDisposition: () => import_chunk_fqra1yx2.kJl,
  revertAfterDirectServe: () => import_chunk_fqra1yx2.Asi,
  revertTeleportCache: () => import_chunk_fqra1yx2.wTe,
  takeHandoffMarkerStep: () => import_chunk_fqra1yx2.Ssi,
  takeOpenRelayBootVerdict: () => import_chunk_fqra1yx2.I7r,
  teleportLatches: () => import_chunk_fqra1yx2.Mzl,
  toolsBaselineVerdict: () => import_chunk_fqra1yx2.Isi,
  verifyPreAnchorIntact: () => import_chunk_fqra1yx2.xsi,
  verifyToolsBaselineIntact: () => import_chunk_fqra1yx2.Osi
});
module.exports = __toCommonJS(chunk_gjd6m6ps_exports);
var import_chunk_fqra1yx2 = require("/$bunfs/root/chunk-fqra1yx2.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
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
