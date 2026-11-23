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
var chunk_98gv4nzd_exports = {};
__export(chunk_98gv4nzd_exports, {
  ABANDONED_WORKER_MS: () => import_chunk_9e5mdyfk.YDn,
  EARLIER: () => import_chunk_9e5mdyfk.rU,
  IDLE_DETAIL: () => import_chunk_9e5mdyfk.a1t,
  IDLE_NEEDS: () => import_chunk_9e5mdyfk.jv,
  PRE_BOOT_STATES: () => import_chunk_9e5mdyfk.Ebt,
  SEED_DETAIL: () => import_chunk_9e5mdyfk.uWe,
  UNGROUPED: () => import_chunk_9e5mdyfk.L6,
  adoptRosterOrphans: () => import_chunk_9e5mdyfk.Rki,
  appendRespawnFlag: () => import_chunk_9e5mdyfk.vki,
  askIdOf: () => import_chunk_9e5mdyfk.qDn,
  buildBridgeReattachEnv: () => import_chunk_9e5mdyfk.cDe,
  getBackgroundRelocatedCwd: () => import_chunk_9e5mdyfk.Zas,
  getJobDir: () => import_chunk_9e5mdyfk.Bs,
  getJobsDir: () => import_chunk_9e5mdyfk.N6,
  getOwnJobShortId: () => import_chunk_9e5mdyfk.TS,
  hasOutstandingAsk: () => import_chunk_9e5mdyfk.qnn,
  invalidateJobStateCache: () => import_chunk_9e5mdyfk.Qg,
  isExecLaunch: () => import_chunk_9e5mdyfk.rv,
  isLocalDaemonAgent: () => import_chunk_9e5mdyfk.l1t,
  isLoopJob: () => import_chunk_9e5mdyfk.Ynn,
  isOverlayNeeds: () => import_chunk_9e5mdyfk.Knn,
  isOwnStateWriteInFlight: () => import_chunk_9e5mdyfk.Qas,
  isReservedGroupName: () => import_chunk_9e5mdyfk.Kpr,
  isSelfDriving: () => import_chunk_9e5mdyfk.wSe,
  isSettled: () => import_chunk_9e5mdyfk.Wd,
  isTerminal: () => import_chunk_9e5mdyfk.aN,
  jobKeyFor: () => import_chunk_9e5mdyfk.Gnn,
  jobMatchesCwd: () => import_chunk_9e5mdyfk.Zpr,
  jobStateKey: () => import_chunk_9e5mdyfk.znn,
  listJobs: () => import_chunk_9e5mdyfk.qF,
  logJobWriteError: () => import_chunk_9e5mdyfk.Lu,
  makeInitialState: () => import_chunk_9e5mdyfk.w5e,
  markCrashed: () => import_chunk_9e5mdyfk.Vnn,
  readJobState: () => import_chunk_9e5mdyfk.Is,
  readJobStateAfterSettle: () => import_chunk_9e5mdyfk.Xpr,
  readJobStateFreshOrNull: () => import_chunk_9e5mdyfk.Ypr,
  readJobStateOrAbsent: () => import_chunk_9e5mdyfk.kbt,
  readPinnedJobIds: () => import_chunk_9e5mdyfk.S5e,
  relocateBackgroundSessionCwd: () => import_chunk_9e5mdyfk.Qpr,
  resolveBridgeHandoffIdentity: () => import_chunk_9e5mdyfk.qpr,
  sanitizeGroupName: () => import_chunk_9e5mdyfk.Jas,
  spawnOrigin: () => import_chunk_9e5mdyfk.fDe,
  syncJobColor: () => import_chunk_9e5mdyfk.Jpr,
  syncJobName: () => import_chunk_9e5mdyfk.DCe,
  syncJobResumeSessionId: () => import_chunk_9e5mdyfk.Eki,
  syncLiveInFlightSnapshot: () => import_chunk_9e5mdyfk.b5e,
  syncRespawnFlag: () => import_chunk_9e5mdyfk.BW,
  terminalOutcome: () => import_chunk_9e5mdyfk.Hk,
  watchJobDirOnce: () => import_chunk_9e5mdyfk.kki,
  withOwnJobStateWrite: () => import_chunk_9e5mdyfk.uDe,
  withSortOrderLock: () => import_chunk_9e5mdyfk.Aki,
  writeJobGroup: () => import_chunk_9e5mdyfk.Pao,
  writeJobPinned: () => import_chunk_9e5mdyfk.Oao,
  writeReapedTerminalState: () => import_chunk_9e5mdyfk.d1t,
  writeSortOrder: () => import_chunk_9e5mdyfk.Tki,
  writeStateAtomic: () => import_chunk_9e5mdyfk.Hf,
  writeStateSortOrder: () => import_chunk_9e5mdyfk.Cki
});
module.exports = __toCommonJS(chunk_98gv4nzd_exports);
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_bdxa2qdh = require("/$bunfs/root/chunk-bdxa2qdh.js");
var import_chunk_sdks5h78 = require("/$bunfs/root/chunk-sdks5h78.js");
var import_chunk_p6a07y1c = require("/$bunfs/root/chunk-p6a07y1c.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
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
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
