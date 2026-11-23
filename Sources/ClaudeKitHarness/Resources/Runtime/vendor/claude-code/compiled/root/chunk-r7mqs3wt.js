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
var chunk_r7mqs3wt_exports = {};
__export(chunk_r7mqs3wt_exports, {
  BACKUP_FILE_NAME_PATTERN_WITH_LEGACY: () => import_chunk_q3a5dy2r.sVn,
  COMPACT_BOUNDARY_MARKER: () => import_chunk_q3a5dy2r.Qmn,
  LITE_READ_BUF_SIZE: () => import_chunk_q3a5dy2r.Gb,
  MAX_LISTING_PAGES: () => import_chunk_q3a5dy2r.EOs,
  MAX_SANITIZED_LENGTH: () => import_chunk_q3a5dy2r.Roe,
  PROGRAMMATIC_ENTRYPOINTS: () => import_chunk_q3a5dy2r.pIr,
  SKIP_PRECOMPACT_THRESHOLD: () => import_chunk_q3a5dy2r.$he,
  TRANSCRIPT_READ_CHUNK_SIZE: () => import_chunk_q3a5dy2r.zPo,
  addressableProjectKey: () => import_chunk_q3a5dy2r.fVt,
  anchorOffsetTail: () => import_chunk_q3a5dy2r.$At,
  appendEntriesToJsonlFile: () => import_chunk_q3a5dy2r.kOs,
  attachmentPromptLabelFromHead: () => import_chunk_q3a5dy2r.g8i,
  buildHistorySuppressionEntry: () => import_chunk_q3a5dy2r.mVt,
  canonicalizePath: () => import_chunk_q3a5dy2r.vw,
  dirBelongsToProject: () => import_chunk_q3a5dy2r.pVt,
  extractFieldFromFirstEntryStrict: () => import_chunk_q3a5dy2r.Dhe,
  extractFieldFromLastEntryOfTypeStrict: () => import_chunk_q3a5dy2r.NX,
  extractFieldFromLastEntryStrict: () => import_chunk_q3a5dy2r.JNe,
  extractFirstPromptFromEntries: () => import_chunk_q3a5dy2r.lnd,
  extractFirstPromptFromHead: () => import_chunk_q3a5dy2r.h8i,
  extractJsonStringField: () => import_chunk_q3a5dy2r.TPe,
  extractLastJsonStringField: () => import_chunk_q3a5dy2r.kct,
  extractSessionLabel: () => import_chunk_q3a5dy2r.kee,
  findProjectDir: () => import_chunk_q3a5dy2r.y8i,
  findProjectDirs: () => import_chunk_q3a5dy2r.Fke,
  findSoleTranscriptWithMessagesById: () => import_chunk_q3a5dy2r.nVn,
  getPinnedProjectDir: () => import_chunk_q3a5dy2r.BAt,
  getProjectDir: () => import_chunk_q3a5dy2r.jC,
  getProjectKey: () => import_chunk_q3a5dy2r.sO,
  getProjectsDir: () => import_chunk_q3a5dy2r.Em,
  isHiddenFromSessionPicker: () => import_chunk_q3a5dy2r.m8i,
  isTranscriptFileResumeArg: () => import_chunk_q3a5dy2r.Ect,
  isUuidShaped: () => import_chunk_q3a5dy2r.vct,
  legacyDerivedProjectKey: () => import_chunk_q3a5dy2r.hIr,
  listProjectDirNamesV5: () => import_chunk_q3a5dy2r.GPo,
  listedProjectKey: () => import_chunk_q3a5dy2r.jXe,
  normalizePathForCwdCompare: () => import_chunk_q3a5dy2r.Fhe,
  projectDirsFromListedNames: () => import_chunk_q3a5dy2r.TOs,
  projectPathSpellingsForRead: () => import_chunk_q3a5dy2r.vOs,
  quarantineJobTranscript: () => import_chunk_q3a5dy2r.UAt,
  readHeadAndTail: () => import_chunk_q3a5dy2r.Jmn,
  readHeadAndTailSync: () => import_chunk_q3a5dy2r._8i,
  readSessionLite: () => import_chunk_q3a5dy2r.Nhe,
  readTranscriptForLoad: () => import_chunk_q3a5dy2r.S8i,
  recordedCwdCollidesWithProjectResolved: () => import_chunk_q3a5dy2r.rVn,
  recordedCwdIsWithinOwnWorktrees: () => import_chunk_q3a5dy2r.oVn,
  resolveJobTranscript: () => import_chunk_q3a5dy2r.Lhe,
  resolveSessionFilePath: () => import_chunk_q3a5dy2r.COs,
  sanitizePath: () => import_chunk_q3a5dy2r.qN,
  sessionFilePaths: () => import_chunk_q3a5dy2r.C3l,
  slugCollisionGuardFoldsCase: () => import_chunk_q3a5dy2r.Nke,
  transcriptMessagesState: () => import_chunk_q3a5dy2r.uVt,
  transcriptMessagesStateV5: () => import_chunk_q3a5dy2r.mIr,
  validateUuid: () => import_chunk_q3a5dy2r.cB,
  withSharedTranscriptListing: () => import_chunk_q3a5dy2r.jPo,
  workspaceV5Of: () => import_chunk_q3a5dy2r.sDl,
  writeEntriesToJsonlFile: () => import_chunk_q3a5dy2r.wct
});
module.exports = __toCommonJS(chunk_r7mqs3wt_exports);
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
