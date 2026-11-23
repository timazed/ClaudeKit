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
var chunk_4aqtst7c_exports = {};
__export(chunk_4aqtst7c_exports, {
  ATOMIC_WRITE_STAGING_DIR: () => import_chunk_q7qjcthc.ED,
  FILE_DOES_NOT_EXIST_OPENING: () => import_chunk_2yx6c1y2.GIo,
  FILE_NOT_FOUND_CWD_NOTE: () => import_chunk_2yx6c1y2.Jde,
  HIDDEN_PATH_PLACEHOLDER: () => import_chunk_2yx6c1y2.rKt,
  HardLinkWriteRefusedError: () => import_chunk_2yx6c1y2.WMr,
  MAX_OUTPUT_SIZE: () => import_chunk_2yx6c1y2.nKt,
  PERFORCE_READONLY_MESSAGE: () => import_chunk_2yx6c1y2.ERt,
  StagingDirTamperedError: () => import_chunk_2yx6c1y2.WIo,
  SymlinkReadRefusedError: () => import_chunk_2yx6c1y2.TM,
  SymlinkWriteRefusedError: () => import_chunk_2yx6c1y2.C_,
  addLineNumbers: () => import_chunk_2yx6c1y2.TRt,
  applyLineEndings: () => import_chunk_2yx6c1y2.Bze,
  assertDirChainReal: () => import_chunk_2yx6c1y2.eKt,
  assertStagingDirIdentityIfEstablished: () => import_chunk_2yx6c1y2.Qhn,
  convertLeadingTabsToSpaces: () => import_chunk_2yx6c1y2.Qhe,
  detectFileEncoding: () => import_chunk_2yx6c1y2.XXi,
  findSimilarFile: () => import_chunk_2yx6c1y2._Je,
  getDesktopPath: () => import_chunk_2yx6c1y2.QXi,
  getDisplayPath: () => import_chunk_2yx6c1y2.Po,
  getFileModificationTime: () => import_chunk_2yx6c1y2.YXi,
  getFileModificationTimeAsync: () => import_chunk_2yx6c1y2._D,
  getPathFromCwd: () => import_chunk_2yx6c1y2.egn,
  inheritedDescriptorKindSync: () => import_chunk_xytxbeb6.THs,
  isFileWithinReadSizeLimit: () => import_chunk_2yx6c1y2.GMr,
  isPerforceModeEnabled: () => import_chunk_2yx6c1y2.aKn,
  isReadOnlyForPerforceMode: () => import_chunk_2yx6c1y2.vRt,
  normalizePathForComparison: () => import_chunk_2yx6c1y2.ah,
  pathExists: () => import_chunk_2yx6c1y2.ep,
  pathsEqual: () => import_chunk_2yx6c1y2.bv,
  prefixLine: () => import_chunk_2yx6c1y2.lKn,
  probePathPresence: () => import_chunk_2yx6c1y2.Sv,
  readBoundedSync: () => import_chunk_xytxbeb6.Jze,
  recordStagingDirIdentity: () => import_chunk_2yx6c1y2.qXi,
  resolveStagedTempPath: () => import_chunk_2yx6c1y2.BIo,
  stripLineNumberPrefix: () => import_chunk_2yx6c1y2.JXi,
  suggestPathUnderCwd: () => import_chunk_2yx6c1y2.qPe,
  takeApprovedPathsForRead: () => import_chunk_2yx6c1y2.jMr,
  takeApprovedPathsForWrite: () => import_chunk_2yx6c1y2.Uze,
  takeApprovedResolutionForRead: () => import_chunk_2yx6c1y2.jIo,
  throwStagingDirTampered: () => import_chunk_2yx6c1y2.tKt,
  withFileWriteLock: () => import_chunk_2yx6c1y2.g8,
  writeFileAndFlush: () => import_chunk_2yx6c1y2.SI,
  writeFileSyncAndFlush_BLOCKS_EVENT_LOOP_WILL_FREEZE_UI_MAKE_SURE_YOU_KNOW_WHAT_YOU_ARE_DOING: () => import_chunk_2yx6c1y2.dKn,
  writeTextContent: () => import_chunk_2yx6c1y2.Zhn
});
module.exports = __toCommonJS(chunk_4aqtst7c_exports);
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
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
