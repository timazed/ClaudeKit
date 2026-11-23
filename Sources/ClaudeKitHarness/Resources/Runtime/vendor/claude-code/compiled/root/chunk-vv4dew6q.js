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
var chunk_vv4dew6q_exports = {};
__export(chunk_vv4dew6q_exports, {
  FileChangedDuringReadError: () => import_chunk_w578pjby.Xft,
  NodeFsOperations: () => import_chunk_w578pjby.Cv,
  OPAQUE_LINK_TEXT: () => import_chunk_w578pjby.II,
  SYMLINK_TO_NETWORK_PATH_CODE: () => import_chunk_w578pjby.SQe,
  UNVERIFIED_ANCESTRY: () => import_chunk_w578pjby.Pg,
  canThrownChdirHaveMoved: () => import_chunk_w578pjby.DLr,
  entryReachesForeignNetwork: () => import_chunk_w578pjby.yQe,
  examineEntryChain: () => import_chunk_w578pjby.MLs,
  expandWin32ExistingLongNames: () => import_chunk_w578pjby._yn,
  expandWin32ExistingLongNamesStrict: () => import_chunk_w578pjby.rsa,
  failClosedWalkOptions: () => import_chunk_w578pjby.sy,
  findIntermediateUncJunction: () => import_chunk_w578pjby.ig,
  findIntermediateUncJunctionAsync: () => import_chunk_w578pjby._$,
  getFsImplementation: () => import_chunk_w578pjby.le,
  getPathsForNetworkScreen: () => import_chunk_w578pjby.gJ,
  getPathsForNetworkScreenAsync: () => import_chunk_w578pjby.osa,
  getPathsForPermissionCheck: () => import_chunk_w578pjby.Ei,
  getPathsForRootCheck: () => import_chunk_w578pjby.Rce,
  hasUntouchableRecordSpelling: () => import_chunk_w578pjby.g$,
  hasUntouchableRecordSpellingAsync: () => import_chunk_w578pjby.qft,
  hasUntouchableRecordSpellingStrict: () => import_chunk_w578pjby.M4t,
  hasUntouchableRecordSpellingStrictAsync: () => import_chunk_w578pjby.dte,
  hasUntouchableRecordSpellingUnscreened: () => import_chunk_w578pjby.tsa,
  hopCapExhausted: () => import_chunk_w578pjby.J0o,
  isDuplicatePath: () => import_chunk_w578pjby.y1e,
  isNetworkJunction: () => import_chunk_w578pjby.esa,
  isOpaqueLinkText: () => import_chunk_w578pjby.X0o,
  isSpelledStrictAncestor: () => import_chunk_w578pjby.Z4n,
  isSymlinkToNetworkPathError: () => import_chunk_w578pjby.HLs,
  mayProcessCwdBeStale: () => import_chunk_w578pjby.DLs,
  nonblockingReadFlags: () => import_chunk_w578pjby.G8,
  onProcessChdir: () => import_chunk_w578pjby.ssa,
  permissionCheckSpellings: () => import_chunk_w578pjby.cte,
  processChdir: () => import_chunk_w578pjby.u_,
  readFdUpToSync: () => import_chunk_w578pjby.LLs,
  readFileRange: () => import_chunk_w578pjby.oPt,
  readHandleUpTo: () => import_chunk_w578pjby.KM,
  readLines: () => import_chunk_w578pjby.LLr,
  readLinesReverse: () => import_chunk_w578pjby.sPt,
  realpathExaminedSync: () => import_chunk_w578pjby.mse,
  repoSettingsRefusalReason: () => import_chunk_w578pjby.nsa,
  resolveDeepestExistingAncestorSync: () => import_chunk_w578pjby.$K,
  resolvedSpellingWalk: () => import_chunk_w578pjby.Yft,
  safeResolvePath: () => import_chunk_w578pjby.no,
  screenLinkTextOption: () => import_chunk_w578pjby.Ace,
  tailFile: () => import_chunk_w578pjby.LB,
  tailFileBytes: () => import_chunk_w578pjby.NLs,
  vetRepoSettingsPath: () => import_chunk_w578pjby.RD,
  vetRepoSettingsPathAsync: () => import_chunk_w578pjby.EL,
  vouchedLaunchAncestry: () => import_chunk_w578pjby.kL,
  walkPermissionCheckPaths: () => import_chunk_w578pjby.ua,
  walkPermissionCheckPathsAsync: () => import_chunk_w578pjby.sx
});
module.exports = __toCommonJS(chunk_vv4dew6q_exports);
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
