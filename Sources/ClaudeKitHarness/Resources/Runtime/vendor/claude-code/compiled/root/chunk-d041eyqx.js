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
var chunk_d041eyqx_exports = {};
__export(chunk_d041eyqx_exports, {
  captureProcessStartTimeAsync: () => import_chunk_rb36kwbn.jhe,
  getAncestorPidsAsync: () => import_chunk_rb36kwbn.RYi,
  getAncestorPidsCheckedAsync: () => import_chunk_rb36kwbn.hOo,
  getAncestorPidsLinuxSync: () => import_chunk_rb36kwbn.AYi,
  getProcessCommand: () => import_chunk_rb36kwbn.xYi,
  getProcessCreationTimeMsAsync: () => import_chunk_rb36kwbn.lFe,
  getProcessStartTime: () => import_chunk_rb36kwbn.tRt,
  getProcessStartTimeAsync: () => import_chunk_rb36kwbn.Ef,
  getProcessStartTokenLinuxSync: () => import_chunk_rb36kwbn.mhn,
  hasExitedUnreaped: () => import_chunk_rb36kwbn.XXe,
  isExitedProcessAsync: () => import_chunk_rb36kwbn.sFe,
  isProbeablePid: () => import_chunk_rb36kwbn.Aee,
  isProcessProvablyGone: () => import_chunk_rb36kwbn.Wm,
  isProcessRunning: () => import_chunk_v6cdm8tp.Rd,
  isSameProcess: () => import_chunk_rb36kwbn.gOo,
  isSameProcessAsync: () => import_chunk_rb36kwbn.GC,
  looksLikeFullHostProcessTable: () => import_chunk_rb36kwbn.Lct,
  ownProcStart: () => import_chunk_rb36kwbn.aFe,
  ownProcStartAsync: () => import_chunk_rb36kwbn.HE,
  ownProcStartMemo: () => import_chunk_rb36kwbn.iFe,
  procIdentityFields: () => import_chunk_rb36kwbn.OPe,
  procIdentityOf: () => import_chunk_rb36kwbn.fK,
  provenSameProcessAsync: () => import_chunk_rb36kwbn.mS,
  readLinuxProcState: () => import_chunk_rb36kwbn.qOs,
  reapDetachedRepl: () => import_chunk_rb36kwbn.Tze,
  sigtermThenKill: () => import_chunk_rb36kwbn.PPe,
  startTokensEqualOrCrossFormat: () => import_chunk_rb36kwbn.JXe
});
module.exports = __toCommonJS(chunk_d041eyqx_exports);
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
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
