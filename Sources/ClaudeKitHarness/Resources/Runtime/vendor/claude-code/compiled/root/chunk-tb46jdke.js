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
var chunk_tb46jdke_exports = {};
__export(chunk_tb46jdke_exports, {
  CONVENTIONAL_DEFAULT_BRANCH_NAMES: () => import_chunk_w5s307zm.Hqt,
  GIT_CONFIG_MAX_BYTES: () => import_chunk_w5s307zm.Lqt,
  GIT_POINTER_MAX_BYTES: () => import_chunk_w5s307zm.I8,
  REFTABLE_HEAD_STUB_TARGET: () => import_chunk_w5s307zm.wDo,
  addWatchedRepo: () => import_chunk_w5s307zm.vna,
  clearResolveGitDirCache: () => import_chunk_w5s307zm.Mqt,
  createWalkMemo: () => import_chunk_w5s307zm.Vqn,
  defaultBranchOfGitDir: () => import_chunk_w5s307zm.I_n,
  getBranchForDir: () => import_chunk_w5s307zm.Kqn,
  getCachedBranch: () => import_chunk_w5s307zm.TUl,
  getCachedBranchForRepo: () => import_chunk_w5s307zm.Cna,
  getCachedDefaultBranch: () => import_chunk_w5s307zm.CUl,
  getCachedDefaultBranchIfKnown: () => import_chunk_w5s307zm.AUl,
  getCachedHead: () => import_chunk_w5s307zm.kDo,
  getCachedRemoteUrl: () => import_chunk_w5s307zm.Ena,
  getCommonDir: () => import_chunk_w5s307zm.c2,
  getHeadForDir: () => import_chunk_w5s307zm.y6e,
  getRemoteUrlForDir: () => import_chunk_w5s307zm.bOe,
  getRemoteUrlForDirSync: () => import_chunk_w5s307zm.Pna,
  getRemoteUrlForGitDir: () => import_chunk_w5s307zm.qqn,
  getWorktreeCountFromFs: () => import_chunk_w5s307zm.RUl,
  isStrictlyBelow: () => import_chunk_w5s307zm.d0s,
  isValidGitSha: () => import_chunk_w5s307zm.BM,
  keepsRefsInReftable: () => import_chunk_w5s307zm.aft,
  knownDefaultBranchOfGitDir: () => import_chunk_w5s307zm.c0s,
  linkChainIsUnsafeToFollow: () => import_chunk_w5s307zm._6e,
  markHeadReflog: () => import_chunk_w5s307zm.k0r,
  onRepoBranchChange: () => import_chunk_w5s307zm.Tna,
  onWatchedGitStateChange: () => import_chunk_w5s307zm.w0r,
  pointerFileIsSuspect: () => import_chunk_w5s307zm.P8,
  probeHeadForDirBounded: () => import_chunk_w5s307zm.xna,
  rawPointerPathIsUnsafe: () => import_chunk_w5s307zm.Rg,
  rawPointerPathWalk: () => import_chunk_w5s307zm.Txt,
  rawPointerWalkEnd: () => import_chunk_w5s307zm.kna,
  readBoundedSync: () => import_chunk_w5s307zm.DK,
  readCommitAppendedToHeadReflog: () => import_chunk_w5s307zm.Rna,
  readGitHead: () => import_chunk_w5s307zm.O8,
  readLinkTextSafe: () => import_chunk_w5s307zm.d2,
  readPositionIsUnsafe: () => import_chunk_w5s307zm.hO,
  readWorktreeHeadSha: () => import_chunk_w5s307zm.M_n,
  reanchorGitFileWatcher: () => import_chunk_w5s307zm.Joe,
  refreshGitDir: () => import_chunk_w5s307zm.SOe,
  releaseHeadReflogMark: () => import_chunk_w5s307zm.Dqt,
  removeWatchedRepo: () => import_chunk_w5s307zm.And,
  resetGitFileWatcher: () => import_chunk_w5s307zm.Ana,
  resolveGitDir: () => import_chunk_w5s307zm.UM,
  resolveRef: () => import_chunk_w5s307zm.Xoe
});
module.exports = __toCommonJS(chunk_tb46jdke_exports);
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
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
